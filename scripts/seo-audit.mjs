#!/usr/bin/env node
// On-page SEO audit, v2 — only inspects the actual `metadata` export block
// (or fields within `generateMetadata`'s return), not random data structures.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src/app/(routes)';

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (name === 'page.js') out.push(p);
  }
  return out;
}

// Match a balanced { ... } block starting at idx in src.
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
    else if (c === '}') { depth--; if (depth === 0) return src.slice(idx, i + 1); }
    prev = c;
  }
  return null;
}

function findMetadataBlock(src) {
  // Inline: `export const metadata = { ... }`
  const m = src.match(/export\s+const\s+metadata\s*=\s*/);
  if (m) {
    const start = m.index + m[0].length;
    if (src[start] === '{') return readBalancedBlock(src, start);
  }
  // generateMetadata - find largest `return { ... }` block (skip empty {} early returns).
  if (/generateMetadata/.test(src)) {
    const fnIdx = src.search(/function\s+generateMetadata|generateMetadata\s*\(.*\)\s*{/);
    if (fnIdx >= 0) {
      const slice = src.slice(fnIdx);
      // Find all `return {` occurrences
      let best = null;
      const re = /return\s*\{/g;
      let mm;
      while ((mm = re.exec(slice)) !== null) {
        const startInSlice = mm.index + mm[0].length - 1;
        const block = readBalancedBlock(slice, startInSlice);
        if (!block) continue;
        if (block.trim() === '{}') continue; // skip empty
        if (!best || block.length > best.length) best = block;
      }
      return best;
    }
  }
  return null;
}

// Pull out a top-level field from a metadata object literal.
// Handles: `key: 'string'`, `key: "string"`, `key: \`string\``,
// and `key: factoryCall(...)` (returns null for the latter — string-only).
function topLevelField(block, key) {
  if (!block) return null;
  // Walk top-level only (depth=1 inside the outer braces).
  let depth = 0, i = 0;
  let inS=false,inD=false,inT=false, prev='';
  for (; i < block.length; i++) {
    const c = block[i];
    if (inS)  { if (c === "'" && prev !== '\\') inS = false; prev = c; continue; }
    if (inD)  { if (c === '"' && prev !== '\\') inD = false; prev = c; continue; }
    if (inT)  { if (c === '`' && prev !== '\\') inT = false; prev = c; continue; }
    if (c === "'") { inS = true; prev = c; continue; }
    if (c === '"') { inD = true; prev = c; continue; }
    if (c === '`') { inT = true; prev = c; continue; }
    if (c === '{') { depth++; prev = c; continue; }
    if (c === '}') { depth--; prev = c; continue; }
    if (depth === 1) {
      // try to match `<key>:` at this position
      const re = new RegExp(`^${key}\\s*:\\s*`);
      const rest = block.slice(i);
      const km = rest.match(re);
      if (km) {
        const valStart = i + km[0].length;
        const ch = block[valStart];
        if (ch === "'" || ch === '"' || ch === '`') {
          // capture string until matching quote
          let j = valStart + 1, p = '';
          for (; j < block.length; j++) {
            if (block[j] === ch && p !== '\\') break;
            p = block[j];
          }
          return block.slice(valStart + 1, j);
        }
        // Non-string value (variable, expression, factory call) — return marker.
        // Capture identifier-ish or expression so we know what type
        const expr = block.slice(valStart).match(/^([^,\n}]+)/);
        return expr ? `__EXPR__${expr[1].trim()}` : null;
      }
      // Try shorthand property: just `title,` or `title\n` or `title}`
      const shortRe = new RegExp(`^${key}\\s*[,}\\n]`);
      if (shortRe.test(rest)) {
        return `__EXPR__shorthand:${key}`;
      }
    }
    prev = c;
  }
  return null;
}

function hasOpenGraph(block) { return block && /\bopenGraph\s*:/.test(block); }
function hasTwitter(block)   { return block && /\btwitter\s*:/.test(block); }
function hasCanonical(block) {
  if (!block) return false;
  if (/\bcanonical\s*:/.test(block)) return true;
  // shorthand inside alternates: alternates: { canonical }
  if (/\balternates\s*:\s*\{[^}]*\bcanonical\b/.test(block)) return true;
  return false;
}

const files = walk(ROOT);
const issues = [];

for (const f of files) {
  const src = readFileSync(f, 'utf8');
  const lines = src.split('\n').length;
  const block = findMetadataBlock(src);
  const usesFactory = /(?:generate\w+Metadata|createMetadata|buildMetadata|get\w+Metadata)\s*\(/.test(src);

  const fileIssues = [];
  if (!block && !usesFactory) {
    fileIssues.push('NO_METADATA');
    issues.push({ file: f, lines, issues: fileIssues });
    continue;
  }
  if (!block) continue; // pure factory pages — skip; assume factory handles it
  // If page uses a factory call AND has a small fallback block (likely a 404 fallback),
  // skip the page — factory output is the real metadata.
  if (usesFactory && block.length < 250) continue;

  const title = topLevelField(block, 'title');
  const description = topLevelField(block, 'description');

  // Discount template literals: assume `${...}` resolves to ~5 chars (typical price/fare).
  const renderedLen = (s) => s.replace(/\$\{[^}]+\}/g, '_____').length;

  if (title === null) fileIssues.push('TITLE_MISSING');
  else if (title.startsWith('__EXPR__')) {
    fileIssues.push(`TITLE_DATA_SOURCED:${title.replace('__EXPR__','')}`);
  } else if (/Not Found/i.test(title)) {
    // dynamic-route 404 fallback — skip
  } else if (title.includes('${')) {
    // template literal — assume it's a real value at runtime
  } else {
    const tl = renderedLen(title);
    if (tl > 65) fileIssues.push(`TITLE_TOO_LONG(${tl})`);
    if (tl < 30) fileIssues.push(`TITLE_TOO_SHORT(${tl})`);
  }

  if (description === null) fileIssues.push('DESC_MISSING');
  else if (description.startsWith('__EXPR__')) {
    fileIssues.push(`DESC_DATA_SOURCED:${description.replace('__EXPR__','')}`);
  } else if (/not found/i.test(description) && description.length < 60) {
    // 404 fallback
  } else if (description.includes('${')) {
    // template literal — likely renders to longer real value
  } else {
    const dl = renderedLen(description);
    if (dl > 160) fileIssues.push(`DESC_TOO_LONG(${dl})`);
    if (dl < 80) fileIssues.push(`DESC_TOO_SHORT(${dl})`);
  }

  if (!hasOpenGraph(block)) fileIssues.push('NO_OG');
  if (!hasTwitter(block)) fileIssues.push('NO_TWITTER');
  if (!hasCanonical(block)) fileIssues.push('NO_CANONICAL');

  if (fileIssues.length) {
    issues.push({
      file: f, lines,
      title: typeof title === 'string' && !title.startsWith('__EXPR__') ? title : null,
      description: typeof description === 'string' && !description.startsWith('__EXPR__') ? description : null,
      issues: fileIssues
    });
  }
}

console.log(`Total pages: ${files.length}`);
console.log(`Pages with issues: ${issues.length}\n`);

const byIssue = {};
for (const r of issues) {
  for (const i of r.issues) {
    const key = i.split(/[(:]/)[0];
    byIssue[key] = (byIssue[key] || 0) + 1;
  }
}
console.log('Issue counts:');
for (const [k, v] of Object.entries(byIssue).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${k.padEnd(30)} ${v}`);
}

console.log('\n--- DETAILS ---');
for (const r of issues) {
  console.log(`\n${r.file} (${r.lines}L)`);
  console.log(`  issues: ${r.issues.join(', ')}`);
  if (r.title) console.log(`  title: [${r.title.length}] ${r.title}`);
  if (r.description) console.log(`  desc:  [${r.description.length}] ${r.description}`);
}
