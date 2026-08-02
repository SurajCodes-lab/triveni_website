#!/usr/bin/env node
// Find internal hrefs in components/pages that point to non-existent routes.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOTS = ['src/app/(routes)', 'src/components', 'src/utilis', 'src/lib'];
const ROUTES_DIR = 'src/app/(routes)';

// Collect all valid routes (static + known dynamic patterns).
function walkRoutes(dir, baseSlug = '', out = new Set(), patterns = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) {
      if (name.startsWith('_')) continue;
      // Track dynamic segments
      if (name.startsWith('[') && name.endsWith(']')) {
        // Continue walking but record the dynamic segment
        walkRoutes(p, baseSlug + '/' + name, out, patterns);
      } else if (/\[/.test(name)) {
        // mixed segment like how-to-reach-[city] — treat as dynamic
        walkRoutes(p, baseSlug + '/' + name, out, patterns);
      } else {
        walkRoutes(p, baseSlug + '/' + name, out, patterns);
      }
    } else if (name === 'page.js' || name === 'page.jsx') {
      if (baseSlug.includes('[')) patterns.push(baseSlug);
      else out.add(baseSlug || '/');
    }
  }
  return { out, patterns };
}

const { out: validRoutes, patterns: dynamicPatterns } = walkRoutes(ROUTES_DIR);
console.log(`Static routes: ${validRoutes.size}`);
console.log(`Dynamic patterns: ${dynamicPatterns.length}`);

// Build regexes for dynamic patterns
const dynRegexes = dynamicPatterns.map(p => {
  const re = '^' + p.replace(/\[[^\]]+\]/g, '[^/]+') + '$';
  return new RegExp(re);
});

function isValidRoute(path) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    if (path.startsWith('https://www.trivenicabs.in')) {
      path = path.replace('https://www.trivenicabs.in', '');
    } else {
      return true; // external — don't validate
    }
  }
  // Strip query/hash
  path = path.split(/[?#]/)[0];
  if (!path || path === '/' ) return true;
  if (validRoutes.has(path)) return true;
  for (const r of dynRegexes) if (r.test(path)) return true;
  // Some files exist outside (routes), like layout, not, etc — accept anything starting with /api
  if (path.startsWith('/api/')) return true;
  // Static asset paths — check if file exists in public/
  if (path.match(/\.(jpg|jpeg|png|webp|svg|gif|ico|pdf|css|js|json|xml|txt)$/i)) {
    return existsSync('public' + path);
  }
  if (path.startsWith('/images/') || path.startsWith('/static/')) {
    return existsSync('public' + path);
  }
  return false;
}

function walkFiles(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walkFiles(p, out);
    else if (/\.(js|jsx|tsx|ts)$/.test(name)) out.push(p);
  }
  return out;
}

const allFiles = [];
for (const r of ROOTS) walkFiles(r, allFiles);

const broken = new Map(); // href -> [files]
for (const f of allFiles) {
  const src = readFileSync(f, 'utf8');
  // Match href="..." and href={`...`} as well as bookingSlug/url/link patterns
  const patterns = [
    /href\s*=\s*(['"`])(\/[^'"`\n${}]*?)\1/g,
    /(?:bookingSlug|url|link|path)\s*:\s*(['"`])(\/[^'"`\n${}]*?)\1/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(src)) !== null) {
      const href = m[2];
      if (!isValidRoute(href)) {
        if (!broken.has(href)) broken.set(href, []);
        broken.get(href).push(f);
      }
    }
  }
}

console.log(`\nBroken href values: ${broken.size}\n`);
const sorted = [...broken.entries()].sort((a, b) => b[1].length - a[1].length);
for (const [href, files] of sorted) {
  console.log(`${href}  (${files.length} refs)`);
  for (const f of files.slice(0, 3)) console.log(`  ${f}`);
  if (files.length > 3) console.log(`  ... +${files.length - 3}`);
}
