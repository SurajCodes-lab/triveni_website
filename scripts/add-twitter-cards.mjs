#!/usr/bin/env node
// Add twitter cards to pages missing them. Auto-generate from openGraph or main title/description.

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

for (const f of files) {
  let src = readFileSync(f, 'utf8');
  const m = src.match(/export\s+const\s+metadata\s*=\s*/);
  if (!m) continue;
  const blockStart = m.index + m[0].length;
  if (src[blockStart] !== '{') continue;
  const range = readBalancedBlock(src, blockStart);
  if (!range) continue;
  const [bs, be] = range;
  const block = src.slice(bs, be);

  // Skip if already has twitter
  if (/\btwitter\s*:/.test(block)) continue;

  // Need either openGraph or main title to generate twitter
  if (!/\bopenGraph\s*:/.test(block) && !/\btitle\s*:/.test(block)) continue;

  // Find the closing brace position (last char of block, which is '}')
  // Insert twitter card before the closing brace.
  // Use the openGraph title/description if available, else main title.
  const ogTitleMatch = block.match(/openGraph\s*:\s*\{[\s\S]*?\btitle\s*:\s*(['"`])([^'"`\n]*)\1/);
  const ogDescMatch  = block.match(/openGraph\s*:\s*\{[\s\S]*?\bdescription\s*:\s*(['"`])([^'"`\n]*)\1/);
  const mainTitleMatch = block.match(/^\s*title\s*:\s*(['"`])([^'"`\n]*)\1/m);
  const mainDescMatch  = block.match(/^\s*description\s*:\s*(['"`])([^'"`\n]*)\1/m);

  const title = (ogTitleMatch?.[2] || mainTitleMatch?.[2] || '').slice(0, 70);
  const desc  = (ogDescMatch?.[2]  || mainDescMatch?.[2]  || '').slice(0, 200);
  if (!title) continue;

  // Find image: from openGraph images array
  const imgMatch = block.match(/openGraph\s*:[\s\S]*?images\s*:\s*\[\s*\{[\s\S]*?url\s*:\s*(['"`])([^'"`\n]*)\1/);
  const image = imgMatch?.[2] || '';

  // Build twitter block
  const twitterBlock = `
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(title)},
    description: ${JSON.stringify(desc)},
    creator: '@trivenicabs',
    site: '@trivenicabs',${image ? `\n    images: [${JSON.stringify(image)}],` : ''}
  },`;

  // Insert before the final `}` of the metadata block
  // Look for last `}` in block (which closes the metadata object)
  // Find its position in the source
  const closingBracePos = bs + block.lastIndexOf('}');
  // Walk backward to find non-whitespace before } - we want to insert there with proper formatting
  let insertAt = closingBracePos;
  // Insert before the closing }, ensuring previous char is comma or newline
  // We'll just put it on its own line before `}`.
  let prefix = '';
  // Check char before insertAt
  const charBefore = src.slice(0, insertAt).trimEnd().slice(-1);
  if (charBefore !== ',' && charBefore !== '{') prefix = ',';

  const newSrc = src.slice(0, insertAt) + prefix + twitterBlock + '\n' + src.slice(insertAt);

  if (DRY) {
    console.log(`${f}`);
    console.log(`  inserting twitter: title="${title.slice(0, 60)}"`);
  } else {
    writeFileSync(f, newSrc);
  }
  modified++;
}

console.log(`${DRY ? 'Would modify' : 'Modified'}: ${modified} files`);
