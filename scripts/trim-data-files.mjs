#!/usr/bin/env node
// Trim metaTitle (>65) and metaDescription (>160) in data files at sensible boundaries.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src/utilis';
const DRY = process.argv.includes('--dry');
const TITLE_MAX = 60;
const TITLE_HARD = 65;
const DESC_MAX = 155;
const DESC_HARD = 160;

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

function trimTitle(t) {
  if (t.length <= TITLE_HARD) return t;
  // try removing common boilerplate (try in order, accept first that fits)
  const trims = [
    / \| Triveni Cabs\b/,
    / - Triveni Cabs\b/,
    / \| Complete Travel Guide\b/i,
    / Complete Guide /i,
    / Complete /i,
    / & Best Tours$/i,
    /,? & Tour Packages$/i,
    /,? & Tours$/i,
    /,? Tour Packages$/i,
    / Travel Guide$/i,
    /,? Best Places,? /i,
    /,? Best Visit Times,? /i,
    /,? History,? /i,
    /,? Timings,? /i,
    /,? Entry Fees?,? /i,
    /,? Architecture,? /i,
    / India Guide$/i,
    / Itinerary & Costs$/i,
    / Itinerary$/i,
    / Tips$/i,
    / Booking$/i,
  ];
  let next = t;
  for (const re of trims) {
    if (next.length <= TITLE_HARD) break;
    const trial = next.replace(re, ' ').replace(/\s+/g, ' ').replace(/\s+([:|&,-])/g, '$1').trim();
    if (trial !== next && trial.length >= 30) next = trial;
  }
  if (next.length <= TITLE_HARD && next !== t) return next;
  // fall back to truncate at sentence/space
  const slice = t.slice(0, TITLE_MAX);
  const lastPipe = slice.lastIndexOf(' | ');
  if (lastPipe > 30) return t.slice(0, lastPipe);
  const lastSpace = slice.lastIndexOf(' ');
  return lastSpace > 30 ? t.slice(0, lastSpace) : t.slice(0, TITLE_MAX);
}

function trimDesc(d) {
  if (d.length <= DESC_HARD) return d;
  const trims = [
    / Call 7668570551\.?$/,
    / Book now[^.]*\.?$/,
    / Trusted by [^.]+\.?$/,
    / By [A-Z][a-z]+ locals\.?$/,
  ];
  for (const re of trims) {
    const trial = d.replace(re, '').trim();
    if (trial.length <= DESC_HARD && trial.length >= 80) return trial;
  }
  const slice = d.slice(0, DESC_MAX);
  for (const sep of ['. ', ' — ', '. ', ', ', ' | ']) {
    const lastSep = slice.lastIndexOf(sep);
    if (lastSep > DESC_MAX * 0.65) {
      let result = d.slice(0, lastSep);
      if (!/[.!?]$/.test(result)) result += '.';
      if (result.length <= DESC_HARD && result.length >= 80) return result;
    }
  }
  const lastSpace = slice.lastIndexOf(' ');
  if (lastSpace > DESC_MAX * 0.65) return d.slice(0, lastSpace) + '.';
  return d;
}

const files = walk(ROOT);
let modifiedFiles = 0, totalFixes = 0;

for (const f of files) {
  let src = readFileSync(f, 'utf8');
  const original = src;

  // Trim metaTitle
  src = src.replace(/(\bmetaTitle\s*:\s*)(['"`])([^'"`\n]*?)\2/g, (full, p1, q, body) => {
    if (body.length <= TITLE_HARD) return full;
    if (body.includes('${')) return full; // template literal — skip
    const trimmed = trimTitle(body);
    if (trimmed === body || trimmed.length > TITLE_HARD) return full;
    totalFixes++;
    return `${p1}${q}${trimmed}${q}`;
  });

  // Trim long blog `title:` fields (heuristic: contains 2026/Triveni/| AND >65 chars)
  src = src.replace(/(\btitle\s*:\s*)(['"`])([^'"`\n]*?)\2/g, (full, p1, q, body) => {
    if (body.length <= TITLE_HARD) return full;
    if (body.includes('${')) return full;
    if (!/[|]|\b2026\b|Triveni|Complete Guide/i.test(body)) return full;
    const trimmed = trimTitle(body);
    if (trimmed === body || trimmed.length > TITLE_HARD) return full;
    totalFixes++;
    return `${p1}${q}${trimmed}${q}`;
  });

  // Trim metaDescription
  src = src.replace(/(\bmetaDescription\s*:\s*)(['"`])([^'"`\n]*?)\2/g, (full, p1, q, body) => {
    if (body.length <= DESC_HARD) return full;
    if (body.includes('${')) return full;
    const trimmed = trimDesc(body);
    if (trimmed === body || trimmed.length > DESC_HARD) return full;
    totalFixes++;
    return `${p1}${q}${trimmed}${q}`;
  });

  if (src !== original) {
    if (!DRY) writeFileSync(f, src);
    modifiedFiles++;
  }
}

console.log(`${DRY ? 'Would modify' : 'Modified'}: ${modifiedFiles} files, ${totalFixes} fixes`);
