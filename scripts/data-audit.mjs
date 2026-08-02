#!/usr/bin/env node
// Audit data files in src/utilis for metaTitle/metaDescription length issues.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOTS = ['src/utilis', 'src/data'];
const issues = [];

function walk(dir, out = []) {
  try {
    for (const name of readdirSync(dir)) {
      const p = join(dir, name);
      const s = statSync(p);
      if (s.isDirectory()) walk(p, out);
      else if (/\.(js|jsx|mjs|cjs)$/.test(name)) out.push(p);
    }
  } catch {}
  return out;
}

// Match `metaTitle: '...'` and `metaDescription: '...'` and `title: '...'` lines
// followed by clear context (within an object literal).
function findFields(src, key) {
  const results = [];
  const re = new RegExp(`(\\b${key})\\s*:\\s*(['"\`])((?:\\\\.|(?!\\2)[^\\\\])*)\\2`, 'g');
  let m;
  while ((m = re.exec(src)) !== null) {
    // line number
    const lineNo = src.slice(0, m.index).split('\n').length;
    results.push({ line: lineNo, value: m[3] });
  }
  return results;
}

const files = [];
for (const r of ROOTS) walk(r, files);

for (const f of files) {
  const src = readFileSync(f, 'utf8');
  const titles = findFields(src, 'metaTitle');
  const descs = findFields(src, 'metaDescription');
  // Some data files use 'title' for SEO title — only flag titles that include " | " or " 2026" hints
  const altTitles = findFields(src, 'title').filter(t => t.value.length > 40 && /[|]|\b2026\b|Triveni/.test(t.value));

  for (const t of titles) {
    if (t.value.length > 65) issues.push({ file: f, line: t.line, kind: 'metaTitle', len: t.value.length, value: t.value });
    if (t.value.length < 30 && t.value.length > 0) issues.push({ file: f, line: t.line, kind: 'metaTitle_short', len: t.value.length, value: t.value });
  }
  for (const d of descs) {
    if (d.value.length > 160) issues.push({ file: f, line: d.line, kind: 'metaDescription', len: d.value.length, value: d.value });
    if (d.value.length < 80 && d.value.length > 0) issues.push({ file: f, line: d.line, kind: 'metaDescription_short', len: d.value.length, value: d.value });
  }
  for (const t of altTitles) {
    if (t.value.length > 65) issues.push({ file: f, line: t.line, kind: 'title(seo)', len: t.value.length, value: t.value });
  }
}

console.log(`Issues found: ${issues.length}\n`);
const byFile = {};
for (const i of issues) {
  byFile[i.file] = (byFile[i.file] || 0) + 1;
}
console.log('By file:');
for (const [f, n] of Object.entries(byFile).sort((a,b)=>b[1]-a[1])) {
  console.log(`  ${n.toString().padStart(4)}  ${f}`);
}

console.log('\n--- DETAILS ---');
let lastFile = '';
for (const i of issues) {
  if (i.file !== lastFile) {
    console.log(`\n${i.file}`);
    lastFile = i.file;
  }
  console.log(`  L${i.line} ${i.kind} [${i.len}]: ${i.value.slice(0, 110)}`);
}
