#!/usr/bin/env node
/**
 * Write soft-redirect pages for the old WordPress URLs into the build output.
 *
 * GitHub Pages cannot issue HTTP 301 responses, so each old path gets a small
 * HTML page with a meta refresh, a canonical link and a visible link fallback.
 * Runs after `astro build`; see the `build` script in package.json.
 */
import fs from 'node:fs';
import path from 'node:path';

const repoDir = process.cwd();
const distDir = path.join(repoDir, 'dist');
const mapFile = path.join(repoDir, 'tools/redirects.json');

if (!fs.existsSync(distDir)) {
  console.error('dist/ not found — run astro build first');
  process.exit(1);
}
if (!fs.existsSync(mapFile)) {
  console.error('tools/redirects.json not found');
  process.exit(1);
}

const redirects = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
// Targets are written for the domain root; add the deploy base when the site
// is served from a subdirectory (the GitHub Pages preview).
const base = (process.env.BASE_PATH ?? '/').replace(/\/+$/, '');
const withBase = to => (to.startsWith('/') ? `${base}${to}` : to);
let written = 0;
const skipped = [];

for (const { from, to } of redirects) {
  const target = path.join(distDir, from);
  const indexFile = path.join(target, 'index.html');
  const destination = withBase(to);

  // never overwrite a real page: if the new site already serves this path, skip
  if (fs.existsSync(indexFile)) {
    skipped.push(from);
    continue;
  }

  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(
    indexFile,
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting…</title>
    <link rel="canonical" href="${destination}" />
    <meta name="robots" content="noindex" />
    <meta http-equiv="refresh" content="0; url=${destination}" />
    <script>location.replace(${JSON.stringify(destination)});</script>
  </head>
  <body>
    <p>This page has moved to <a href="${destination}">${destination}</a>.</p>
  </body>
</html>
`,
    'utf8',
  );
  written += 1;
}

console.log(
  JSON.stringify(
    { redirectsInMap: redirects.length, pagesWritten: written, skippedBecauseRealPageExists: skipped },
    null,
    2,
  ),
);
