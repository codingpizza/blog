#!/usr/bin/env node
/**
 * Prefix absolute image paths in the build output with the deploy base.
 *
 * Markdown image links and cover images point at `/images/...`. Astro rewrites
 * its own assets for a configured `base`, but it leaves these public paths
 * alone, so a site served from a subdirectory (the GitHub Pages preview) would
 * request images that do not exist there.
 *
 * Runs after `astro build`; does nothing when the site is served from the root.
 */
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.join(process.cwd(), 'dist');
const base = (process.env.BASE_PATH ?? '/').replace(/\/+$/, '');

if (!fs.existsSync(distDir)) {
  console.error('dist/ not found — run astro build first');
  process.exit(1);
}

if (base === '') {
  console.log(JSON.stringify({ basePath: '/', filesChanged: 0, pathsPrefixed: 0 }));
  process.exit(0);
}

function* htmlFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}

let filesChanged = 0;
let pathsPrefixed = 0;

for (const file of htmlFiles(distDir)) {
  const before = fs.readFileSync(file, 'utf8');
  let count = 0;
  const after = before
    .replace(/(src|srcset|data-src)="\/images\//g, (_match, attr) => {
      count += 1;
      return `${attr}="${base}/images/`;
    })
    .replace(/url\(\/images\//g, () => {
      count += 1;
      return `url(${base}/images/`;
    });

  if (count > 0) {
    fs.writeFileSync(file, after, 'utf8');
    filesChanged += 1;
    pathsPrefixed += count;
  }
}

console.log(
  JSON.stringify({ basePath: base, filesChanged, pathsPrefixed }, null, 2),
);
