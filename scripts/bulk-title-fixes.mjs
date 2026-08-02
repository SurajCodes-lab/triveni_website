#!/usr/bin/env node
// Apply targeted bulk title fixes for known patterns.
// Each rule is a (pattern, replacement) pair applied in metadata title field.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src/app/(routes)';
const DRY = process.argv.includes('--dry');

const RULES = [
  // places-to-visit-near-* — strip ` | Book Cab`
  { match: / \| Book Cab/, replace: '' },
  // travel-guide pages with "(City) Travel Guide 2026 | (long tagline)"
  // Already handled case-by-case below
  // Remove trailing " | (Year)" duplicates
  { match: / \| Triveni Cabs/, replace: '' },
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (name === 'page.js') out.push(p);
  }
  return out;
}

function readBalancedBlock(src, idx) {
  if (src[idx] !== '{') return null;
  let depth = 0, i = idx;
  let inS = false, inD = false, inT = false, inSL = false, inML = false, prev = '';
  for (; i < src.length; i++) {
    const c = src[i];
    if (inSL) { if (c === '\n') inSL = false; prev = c; continue; }
    if (inML) { if (c === '/' && prev === '*') inML = false; prev = c; continue; }
    if (inS)  { if (c === "'" && prev !== '\\') inS = false; prev = c; continue; }
    if (inD)  { if (c === '"' && prev !== '\\') inD = false; prev = c; continue; }
    if (inT)  { if (c === '`' && prev !== '\\') inT = false; prev = c; continue; }
    if (c === '/' && src[i+1] === '/') { inSL = true; i++; prev = ''; continue; }
    if (c === '/' && src[i+1] === '*') { inML = true; i++; prev = ''; continue; }
    if (c === "'") { inS = true; prev = c; continue; }
    if (c === '"') { inD = true; prev = c; continue; }
    if (c === '`') { inT = true; prev = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return [idx, i + 1]; }
    prev = c;
  }
  return null;
}

const files = walk(ROOT);
let modified = 0;

for (const f of files) {
  let src = readFileSync(f, 'utf8');
  const m = src.match(/export\s+const\s+metadata\s*=\s*/);
  if (!m) continue;
  const blockStart = m.index + m[0].length;
  if (src[blockStart] !== '{') continue;
  const range = readBalancedBlock(src, blockStart);
  if (!range) continue;
  const [bs, be] = range;
  let block = src.slice(bs, be);
  const before = block;

  // For each title:'...' / "..." / `...` field, apply rules if title length > 65
  block = block.replace(/(\btitle\s*:\s*)(['"`])([^'"`\n]*?)\2/g, (full, p1, q, body) => {
    if (body.length <= 65) return full;
    let next = body;
    for (const r of RULES) {
      next = next.replace(r.match, r.replace);
      if (next.length <= 65) break;
    }
    if (next === body) return full;
    return `${p1}${q}${next}${q}`;
  });

  if (block === before) continue;
  const newSrc = src.slice(0, bs) + block + src.slice(be);
  if (DRY) console.log(`${f}\n  modified`);
  else writeFileSync(f, newSrc);
  modified++;
}

console.log(`${DRY ? 'Would modify' : 'Modified'}: ${modified} files`);
