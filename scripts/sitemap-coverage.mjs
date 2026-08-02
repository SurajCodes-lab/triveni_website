#!/usr/bin/env node
// Compare static pages in src/app/(routes) with sitemap entries.
// Reports static pages NOT included in sitemap.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROUTES_DIR = 'src/app/(routes)';
const SITEMAP_FILE = 'src/app/sitemap.js';

function walk(dir, baseSlug = '', out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) {
      // Skip dynamic routes (covered by getAllXxxSlugs)
      if (name.startsWith('[') && name.endsWith(']')) continue;
      // Skip Next.js convention dirs
      if (name.startsWith('_')) continue;
      walk(p, baseSlug + '/' + name, out);
    } else if (name === 'page.js' || name === 'page.jsx' || name === 'page.tsx') {
      out.push(baseSlug || '/');
    }
  }
  return out;
}

const allPages = walk(ROUTES_DIR);
const sitemap = readFileSync(SITEMAP_FILE, 'utf8');

const missing = [];
const present = [];

for (const rawSlug of allPages) {
  // Strip the route group prefix
  const path = rawSlug.replace(/^\/\(routes\)/, '') || '/';
  // Look for the path string anywhere in sitemap (excluding dynamic-only paths)
  // We check for: `'path'` or `"path"` or `${BASE_URL}path`
  const escapedPath = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // The slug without leading slash (e.g., "agra-food-tour")
  const slug = path.replace(/^\//, '');
  const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Match: 'path', "path", `path`, ${baseUrl}path, /path` boundary, OR slug as string in array
  const re1 = new RegExp(`['"\`](${escapedPath})['"\`]`);
  const re2 = new RegExp(`\\$\\{[A-Za-z_]+\\}${escapedPath}(?![A-Za-z0-9_-])`);
  const re3 = new RegExp(`url:\\s*\`[^\`]*${escapedPath}(?![A-Za-z0-9_-])`);
  const re4 = new RegExp(`['"\`]${escapedSlug}['"\`]`);  // bare slug in array
  // Special case for root
  if (path === '/' || path === '') {
    // Sitemap usually has BASE_URL itself
    present.push(path);
    continue;
  }
  if (re1.test(sitemap) || re2.test(sitemap) || re3.test(sitemap) || re4.test(sitemap)) {
    present.push(path);
  } else {
    missing.push(path);
  }
}

console.log(`Total static pages: ${allPages.length}`);
console.log(`In sitemap: ${present.length}`);
console.log(`Missing from sitemap: ${missing.length}\n`);

if (missing.length) {
  console.log('Missing from sitemap:');
  for (const m of missing) console.log(`  ${m}`);
}
