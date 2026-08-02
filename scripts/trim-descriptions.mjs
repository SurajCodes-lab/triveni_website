#!/usr/bin/env node
// Trim metadata descriptions to <= 155 chars at sensible boundaries.
// Strategy:
//   1. If desc <= 160, skip.
//   2. Try removing trailing " Call 7668570551." or " By [...] locals." etc.
//   3. If still too long, trim at last period/dash/comma before 155 chars.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src/app/(routes)';
const DRY = process.argv.includes('--dry');
const MAX = 155;
const HARDMAX = 160;

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

function trimDesc(desc) {
  if (desc.length <= HARDMAX) return desc;

  // Try common trailing boilerplate removal
  const trailings = [
    / Call 7668570551\.?$/,
    / Call \+91[\s\-]?7668570551\.?$/,
    / Book now for[^.]*\.?$/,
    / By [A-Z][a-z]+ locals\.?$/,
    / 24×7\.?$/,
    / 24\/7\.?$/,
    / 24x7\.?$/,
    / Trusted by [^.]+\.?$/,
  ];
  for (const re of trailings) {
    const trial = desc.replace(re, '').trim();
    if (trial !== desc && trial.length <= HARDMAX) return trial;
  }

  // Trim at last sensible boundary before MAX chars
  const slice = desc.slice(0, MAX);
  for (const sep of ['. ', ' — ', ' - ', '. ', ', ', ' | ']) {
    const lastSep = slice.lastIndexOf(sep);
    if (lastSep > MAX * 0.65) {
      let result = desc.slice(0, lastSep);
      // Add closing period if it doesn't end with one
      if (sep === '. ') result = result + '.';
      else if (!result.match(/[.!?]$/)) result = result + '.';
      if (result.length <= HARDMAX) return result;
    }
  }
  // Hard fallback: trim at last space before MAX
  const lastSpace = slice.lastIndexOf(' ');
  if (lastSpace > 0) return desc.slice(0, lastSpace).replace(/[,;]$/, '') + '.';
  return desc.slice(0, MAX);
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

  // Find top-level description (first description encountered).
  // We'll scan with a depth counter to find depth==1 description.
  let depth = 0, i = 0, inS = false, inD = false, inT = false, prev = '';
  let descStart = -1, descEnd = -1, descQuote = '';
  for (; i < block.length; i++) {
    const c = block[i];
    if (inS) { if (c === "'" && prev !== '\\') inS = false; prev = c; continue; }
    if (inD) { if (c === '"' && prev !== '\\') inD = false; prev = c; continue; }
    if (inT) { if (c === '`' && prev !== '\\') inT = false; prev = c; continue; }
    if (c === "'") { inS = true; prev = c; continue; }
    if (c === '"') { inD = true; prev = c; continue; }
    if (c === '`') { inT = true; prev = c; continue; }
    if (c === '{') { depth++; prev = c; continue; }
    if (c === '}') { depth--; prev = c; continue; }
    if (depth === 1 && /[a-zA-Z_$]/.test(c) && !/[a-zA-Z0-9_$]/.test(prev)) {
      // start of identifier
      const rest = block.slice(i);
      const km = rest.match(/^description\s*:\s*/);
      if (km) {
        const valStart = i + km[0].length;
        const ch = block[valStart];
        if (ch === "'" || ch === '"' || ch === '`') {
          let j = valStart + 1, p = '';
          for (; j < block.length; j++) {
            if (block[j] === ch && p !== '\\') break;
            p = block[j];
          }
          descStart = valStart + 1;
          descEnd = j;
          descQuote = ch;
          break;
        }
      }
    }
    prev = c;
  }
  if (descStart < 0) continue;

  const desc = block.slice(descStart, descEnd);
  if (desc.length <= HARDMAX) continue;
  if (desc.includes('${')) continue; // skip template literals — unsafe to trim

  const trimmed = trimDesc(desc);
  if (trimmed === desc) continue;
  if (trimmed.length > HARDMAX) continue; // give up
  if (trimmed.length < 80) continue; // would be too short, skip

  const newBlock = block.slice(0, descStart) + trimmed + block.slice(descEnd);
  const newSrc = src.slice(0, s) + newBlock + src.slice(e);

  if (DRY) {
    console.log(`${f}`);
    console.log(`  ${desc.length} -> ${trimmed.length}`);
    console.log(`  before: ${desc.slice(0, 100)}`);
    console.log(`  after:  ${trimmed.slice(0, 100)}`);
  } else {
    writeFileSync(f, newSrc);
  }
  modified++;
  results.push({ f, oldLen: desc.length, newLen: trimmed.length });
}

console.log(`\n${DRY ? 'Would modify' : 'Modified'}: ${modified} files`);
