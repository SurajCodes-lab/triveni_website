#!/usr/bin/env node
// Strip " | Triveni Cabs" from metadata titles where it pushes them over 65 chars.
// Only modifies the metadata `title` field, not data-object fields.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src/app/(routes)';
const DRY = process.argv.includes('--dry');

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
const results = [];

for (const f of files) {
  let src = readFileSync(f, 'utf8');
  const m = src.match(/export\s+const\s+metadata\s*=\s*/);
  if (!m) continue;
  const blockStart = m.index + m[0].length;
  if (src[blockStart] !== '{') continue;
  const range = readBalancedBlock(src, blockStart);
  if (!range) continue;
  const [s, e] = range;
  const block = src.slice(s, e);
  // Find top-level `title: '...'` line
  // Simpler: do a regex replace within block, but only on line that starts the title key at depth 1.
  // We'll just do a localized regex-replace inside the block.
  const titleRe = /(\btitle\s*:\s*)(['"`])([^'"`\n]*?)( \| Triveni Cabs)\2/g;
  let any = false;
  let firstOld = '', firstNew = '';
  const newBlock = block.replace(titleRe, (full, p1, q, body, suffix) => {
    if ((body + suffix).length <= 65) return full;
    if (!any) { firstOld = body + suffix; firstNew = body; any = true; }
    return `${p1}${q}${body}${q}`;
  });
  if (!any) continue;
  const titleM = [null, null, null, firstNew, firstOld.slice(firstNew.length)];
  if (newBlock === block) continue;
  const newSrc = src.slice(0, s) + newBlock + src.slice(e);
  if (DRY) {
    console.log(`would fix: ${f}`);
    console.log(`  old: ${firstOld} (${firstOld.length})`);
    console.log(`  new: ${firstNew} (${firstNew.length})`);
  } else {
    writeFileSync(f, newSrc);
  }
  modified++;
  results.push({ f, oldLen: firstOld.length, newLen: firstNew.length });
}

console.log(`\n${DRY ? 'Would modify' : 'Modified'}: ${modified} files`);
for (const r of results) {
  console.log(`  ${r.oldLen}→${r.newLen}  ${r.f}`);
}
