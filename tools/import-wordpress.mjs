#!/usr/bin/env node
/**
 * Import the codingpizza.com WordPress content into Astro Markdown.
 *
 * Source of truth: the REST JSON captured from the live WordPress site.
 * Nothing here touches WordPress; it only reads the captured export.
 *
 * Usage:
 *   node tools/import-wordpress.mjs <export-dir> [repo-dir]
 *
 * Output:
 *   src/content/blog/<lang>/<slug>.md   (lang = en | es)
 *   public/images/<file>                (downloaded media)
 *   <export-dir>/import-report.json     (what happened, for review)
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const exportDir = path.resolve(process.argv[2] ?? '');
const repoDir = path.resolve(process.argv[3] ?? process.cwd());

if (!exportDir || !fs.existsSync(path.join(exportDir, 'posts.json'))) {
  console.error('Usage: node tools/import-wordpress.mjs <export-dir> [repo-dir]');
  process.exit(1);
}

const contentDir = path.join(repoDir, 'src/content/blog');
const imagesDir = path.join(repoDir, 'public/images');
fs.mkdirSync(imagesDir, { recursive: true });

const readJson = (f) => JSON.parse(fs.readFileSync(path.join(exportDir, f), 'utf8'));
const posts = readJson('posts.json');
const pages = readJson('pages.json');
const translationMap = new Map(
  readJson('translation-map.json').posts.map((r) => [r.id, r]),
);

const withoutTrailingSlash = (u) => (u ?? '').replace(/\/+$/, '');
const lastSegment = (u) => withoutTrailingSlash(u).split('/').pop();
const stripTags = (html) =>
  (html ?? '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

// ---------- language and pairing ----------
function languageOf(post) {
  const alternates = translationMap.get(post.id)?.alternates ?? {};
  if (alternates.es && withoutTrailingSlash(alternates.es) === withoutTrailingSlash(post.link)) return 'es';
  if (alternates.en && withoutTrailingSlash(alternates.en) === withoutTrailingSlash(post.link)) return 'en';
  return 'es';
}

function translationOf(post, lang) {
  const alternates = translationMap.get(post.id)?.alternates ?? {};
  const other = lang === 'es' ? alternates.en : alternates.es;
  return other ? lastSegment(other) : null;
}

// ---------- images ----------
const downloaded = new Map(); // original url -> local path (/images/name)
const imageReport = [];

async function downloadImage(url) {
  if (downloaded.has(url)) return downloaded.get(url);
  if (url.startsWith('data:')) {
    downloaded.set(url, url); // base64 placeholder, leave as-is
    return url;
  }
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'codingpizza-import/1.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const urlPath = new URL(url).pathname;
    let name = path.basename(decodeURIComponent(urlPath)) || 'image';
    name = name.replace(/[^A-Za-z0-9._-]/g, '-');
    const target = path.join(imagesDir, name);
    if (fs.existsSync(target)) {
      const existing = crypto.createHash('sha256').update(fs.readFileSync(target)).digest('hex');
      const incoming = crypto.createHash('sha256').update(buf).digest('hex');
      if (existing !== incoming) {
        const short = incoming.slice(0, 8);
        name = `${path.parse(name).name}-${short}${path.extname(name)}`;
      }
    }
    fs.writeFileSync(path.join(imagesDir, name), buf);
    const local = `/images/${name}`;
    downloaded.set(url, local);
    imageReport.push({ url, local, bytes: buf.length });
    return local;
  } catch (err) {
    imageReport.push({ url, error: String(err) });
    downloaded.set(url, url); // keep the remote URL if the download fails
    return url;
  }
}

async function localiseImages(html) {
  const srcs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)].map((m) => m[1]);
  const srcsets = [...html.matchAll(/data-src=["']([^"']+)["']/g)].map((m) => m[1]);
  for (const url of new Set([...srcs, ...srcsets])) {
    if (/^https?:\/\//.test(url)) await downloadImage(url);
  }
  let out = html;
  for (const [original, local] of downloaded) {
    if (original === local) continue;
    out = out.split(original).join(local);
  }
  return out;
}

// ---------- HTML -> Markdown ----------
const turndown = new TurndownService({
  headingStyle: 'atx',
  hr: '---',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
  fence: '```',
  emDelimiter: '*',
  strongDelimiter: '**',
  linkStyle: 'inlined',
});
turndown.use(gfm);

// fenced code blocks, keeping the language when WordPress recorded one
turndown.addRule('fencedCode', {
  filter: (node) => node.nodeName === 'PRE',
  replacement: (_content, node) => {
    const code = node.querySelector('code');
    const raw = (code ? code.textContent : node.textContent) ?? '';
    const className = code?.getAttribute('class') ?? node.getAttribute('class') ?? '';
    const language = (className.match(/(?:language|lang)-([\w+#-]+)/) ?? [])[1] ?? '';
    return `\n\n\`\`\`${language}\n${raw.replace(/\n+$/, '')}\n\`\`\`\n\n`;
  },
});

// embeds become plain links, which survive any theme and never block rendering
turndown.addRule('iframe', {
  filter: 'iframe',
  replacement: (_content, node) => {
    const src = node.getAttribute('src') ?? '';
    return src ? `\n\n[Embedded content](${src})\n\n` : '';
  },
});

// strip WordPress caption wrappers but keep text and images
turndown.addRule('figure', {
  filter: 'figure',
  replacement: (content) => `\n\n${content.trim()}\n\n`,
});

function cleanTitle(title) {
  // two titles lost an emoji in WordPress and now start with a stray "? "
  return title.replace(/^\?\s+/, '').trim();
}

function toMarkdown(html) {
  let md = turndown.turndown(html);
  md = md.replace(/\n{3,}/g, '\n\n').trim();
  return md + '\n';
}

function yamlString(value) {
  return `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function frontmatter(data) {
  const lines = ['---'];
  lines.push(`title: ${yamlString(data.title)}`);
  if (data.description) lines.push(`description: ${yamlString(data.description)}`);
  lines.push(`pubDate: ${data.pubDate}`);
  if (data.updatedDate) lines.push(`updatedDate: ${data.updatedDate}`);
  lines.push(`lang: ${data.lang}`);
  lines.push(`slug: ${yamlString(data.slug)}`);
  if (data.translationOf) lines.push(`translationOf: ${yamlString(data.translationOf)}`);
  if (data.categories?.length) lines.push(`categories: [${data.categories.map(yamlString).join(', ')}]`);
  if (data.tags?.length) lines.push(`tags: [${data.tags.map(yamlString).join(', ')}]`);
  if (data.heroImage) lines.push(`heroImage: ${yamlString(data.heroImage)}`);
  lines.push(`sourceUrl: ${yamlString(data.sourceUrl)}`);
  lines.push(`wpId: ${data.wpId}`);
  lines.push('draft: false');
  lines.push('---', '');
  return lines.join('\n');
}

// category and tag names, with the junk removed
const categoryNames = new Map(readJson('categories.json').map((c) => [c.id, c.name]));
const tagNames = new Map(readJson('tags.json').map((t) => [t.id, t.name]));
const DROP_TAGS = new Set([
  'post', 'word', 'business', 'branding', 'blockquote', 'media', 'music',
  'photography', 'video', 'social', 'image', 'gallery', 'post format', 'wordpress',
]);
const KEEP_CATEGORY = new Set(['Android', 'Dart', 'Flutter', 'Kotlin', 'Linux', 'Programación', 'Programming']);

// ---------- run ----------
const report = { posts: [], pages: [], images: imageReport, warnings: [] };
const usedSlugs = new Set();

async function convert(item, kind) {
  const lang = languageOf(item);
  const slug = item.slug;
  const key = `${lang}/${slug}`;
  if (usedSlugs.has(key)) report.warnings.push(`duplicate slug: ${key}`);
  usedSlugs.add(key);

  const html = await localiseImages(item.content?.rendered ?? '');
  const body = toMarkdown(html);
  const description = stripTags(item.excerpt?.rendered ?? '').slice(0, 300);

  const categories = (item.categories ?? [])
    .map((id) => categoryNames.get(id))
    .filter((name) => name && KEEP_CATEGORY.has(name));
  const tags = (item.tags ?? [])
    .map((id) => tagNames.get(id))
    .filter((name) => name && !DROP_TAGS.has(name.toLowerCase()));

  let heroImage = null;
  const og = item.yoast_head_json?.og_image?.[0]?.url;
  if (og) heroImage = await downloadImage(og);

  const data = {
    title: cleanTitle(stripTags(item.title?.rendered ?? '')),
    description,
    pubDate: (item.date ?? '').slice(0, 10),
    updatedDate:
      item.modified && item.modified.slice(0, 10) !== (item.date ?? '').slice(0, 10)
        ? item.modified.slice(0, 10)
        : null,
    lang,
    slug,
    translationOf: translationOf(item, lang),
    categories: [...new Set(categories)],
    tags: [...new Set(tags)],
    heroImage,
    sourceUrl: item.link,
    wpId: item.id,
  };

  const dir = path.join(contentDir, lang);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${slug}.md`);
  fs.writeFileSync(file, frontmatter(data) + body, 'utf8');

  const entry = { lang, slug, file: path.relative(repoDir, file), title: data.title, words: body.split(/\s+/).length };
  if (kind === 'post') report.posts.push(entry);
  else report.pages.push(entry);
}

for (const post of posts) await convert(post, 'post');
for (const page of pages) await convert(page, 'page');

fs.writeFileSync(path.join(exportDir, 'import-report.json'), JSON.stringify(report, null, 2));

const byLang = report.posts.reduce((acc, p) => ((acc[p.lang] = (acc[p.lang] ?? 0) + 1), acc), {});
console.log(JSON.stringify({
  posts: report.posts.length,
  pages: report.pages.length,
  postsByLanguage: byLang,
  imagesDownloaded: imageReport.filter((i) => i.local).length,
  imageFailures: imageReport.filter((i) => i.error).length,
  warnings: report.warnings,
}, null, 2));
