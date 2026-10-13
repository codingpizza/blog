#!/usr/bin/env node
/**
 * Build tools/redirects.json from the captured WordPress translation map.
 *
 * Run once when the export changes:
 *   node tools/build-redirect-map.mjs <export-dir>
 *
 * The result is committed, so the build does not need the export directory.
 */
import fs from 'node:fs';
import path from 'node:path';

const exportDir = path.resolve(process.argv[2] ?? '');
const mapFile = path.join(exportDir, 'translation-map.json');
if (!fs.existsSync(mapFile)) {
  console.error(`translation map not found: ${mapFile}`);
  process.exit(1);
}

const { posts } = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
const strip = (url) => new URL(url).pathname.replace(/\/+$/, '') + '/';
const slugOf = (url) => new URL(url).pathname.replace(/\/+$/, '').split('/').pop();

const redirects = [];
const seen = new Set();

function add(from, to, reason) {
  if (from === to || seen.has(from)) return;
  seen.add(from);
  redirects.push({ from, to, reason });
}

for (const record of posts) {
  const pathname = new URL(record.url).pathname;

  // The language is decided by the URL shape, which is reliable for every post.
  // The hreflang alternates only exist when a translation exists, so they cannot
  // be the primary signal.
  if (pathname.startsWith('/en/')) {
    // English keeps its slug and loses the /en/ prefix, because English is the default
    add(strip(record.url), `/${slugOf(record.url)}/`, 'english post loses the /en/ prefix');
  } else {
    // Spanish posts move under /es/ so the old root URL must forward
    add(strip(record.url), `/es/${slugOf(record.url)}/`, 'spanish post moved under /es/');
  }
}

// WordPress paginated the old home listing at /page/N/
redirects.push({ from: '/page/2/', to: '/posts/2/', reason: 'old home pagination' });
redirects.push({ from: '/page/3/', to: '/posts/3/', reason: 'old home pagination' });

redirects.sort((a, b) => a.from.localeCompare(b.from));
const out = path.join(process.cwd(), 'tools/redirects.json');
fs.writeFileSync(out, JSON.stringify(redirects, null, 2) + '\n');
console.log(`wrote ${redirects.length} redirects to tools/redirects.json`);
