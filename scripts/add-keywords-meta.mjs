#!/usr/bin/env node
// Auto-add `keywords` meta to pages that don't have one.
// Generated from slug + page-type heuristics.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'src/app/(routes)';
const DRY = process.argv.includes('--dry');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) {
      if (name.startsWith('_') || name.startsWith('[')) continue;
      walk(p, out);
    } else if (name === 'page.js') out.push(p);
  }
  return out;
}

function generateKeywords(slug) {
  // Strip leading slash and dashes
  const clean = slug.replace(/^\//, '').replace(/-/g, ' ');
  const parts = clean.split('/').filter(Boolean);
  const lastSegment = parts[parts.length - 1] || '';
  const lastClean = lastSegment.replace(/-/g, ' ');

  const seeds = new Set();
  // Primary phrase: full slug as text
  seeds.add(lastClean);

  // Pattern: airport-to-X
  if (/airport-to-/.test(slug)) {
    const m = slug.match(/([a-z]+)-airport-to-([a-z]+)/);
    if (m) {
      const [, origin, dest] = m;
      seeds.add(`${origin} airport to ${dest} taxi`);
      seeds.add(`${origin} airport to ${dest} cab`);
      seeds.add(`${origin} to ${dest} airport taxi`);
      seeds.add(`taxi from ${origin} airport to ${dest}`);
      seeds.add(`${dest} airport pickup`);
      seeds.add(`flight tracked ${dest} taxi`);
      seeds.add(`fixed fare ${dest} cab`);
      seeds.add(`${origin} airport ${dest} transfer`);
    }
  }

  // Pattern: family-trip-X-from-Y
  if (/family-trip-([a-z]+)-from-([a-z]+)/.test(slug)) {
    const [, dest, origin] = slug.match(/family-trip-([a-z]+)-from-([a-z]+)/);
    seeds.add(`family trip ${dest} from ${origin}`);
    seeds.add(`${origin} to ${dest} family tour`);
    seeds.add(`${dest} family vacation by car`);
    seeds.add(`family holiday ${dest}`);
  }
  // Pattern: friends-trip-X
  if (/friends-trip-([a-z-]+)/.test(slug)) {
    const m = slug.match(/friends-trip-([a-z-]+?)(?:-from-([a-z]+))?$/);
    if (m) {
      const dest = m[1].replace(/-/g, ' ');
      seeds.add(`friends trip ${dest}`);
      seeds.add(`${dest} group trip`);
      seeds.add(`${dest} tempo traveller`);
      seeds.add(`${dest} friends package`);
    }
  }
  // Pattern: honeymoon-X
  if (/honeymoon-/.test(slug)) {
    const dest = slug.replace(/^.*honeymoon-/, '').replace(/-by-car$/, '').replace(/-/g, ' ');
    seeds.add(`${dest} honeymoon`);
    seeds.add(`${dest} honeymoon package`);
    seeds.add(`romantic trip ${dest}`);
    seeds.add(`couple trip ${dest}`);
  }
  // Pattern: X-travel-guide
  if (/-travel-guide$/.test(slug)) {
    const city = slug.replace(/-travel-guide$/, '');
    seeds.add(`${city} travel guide`);
    seeds.add(`${city} tourism`);
    seeds.add(`places to visit ${city}`);
    seeds.add(`${city} sightseeing`);
    seeds.add(`${city} tour`);
  }
  // Pattern: X-food-tour
  if (/-food-tour$/.test(slug)) {
    const city = slug.replace(/-food-tour$/, '');
    seeds.add(`${city} food tour`);
    seeds.add(`${city} street food`);
    seeds.add(`${city} cuisine`);
    seeds.add(`${city} restaurants`);
  }
  // Pattern: festival/seasonal
  const seasonal = ['baisakhi', 'holi', 'diwali', 'durga-puja', 'navratri', 'chhath', 'kanwar', 'kumbh', 'guru-purab', 'maha-shivratri', 'republic-day', 'christmas', 'new-year', 'pushkar-mela', 'summer-vacation', 'long-weekend'];
  for (const s of seasonal) {
    if (slug.includes(s)) {
      const c = s.replace(/-/g, ' ');
      seeds.add(`${c} cab service`);
      seeds.add(`${c} taxi`);
      seeds.add(`${c} transport`);
      seeds.add(`book cab ${c}`);
    }
  }
  // Generic boilerplate keywords
  if (/cab|taxi|car/.test(slug)) {
    seeds.add('book cab online');
    seeds.add('taxi service india');
  }
  if (/tour|sightseeing|trip/.test(slug)) {
    seeds.add('tour package india');
    seeds.add('sightseeing tour');
  }
  if (/wedding|baraat|doli/.test(slug)) {
    seeds.add('wedding car rental');
    seeds.add('baraat transport');
  }
  if (/airport/.test(slug)) {
    seeds.add('airport transfer');
    seeds.add('airport pickup drop');
  }
  if (/corporate/.test(slug)) {
    seeds.add('corporate cab service');
    seeds.add('employee transport');
  }
  if (/foreign|tourist|english/.test(slug)) {
    seeds.add('india tour for foreigners');
    seeds.add('english speaking driver');
  }
  if (/triveni-cabs-vs-/.test(slug)) {
    const competitor = slug.replace(/^.*triveni-cabs-vs-/, '');
    seeds.add(`triveni cabs vs ${competitor}`);
    seeds.add(`${competitor} alternative`);
    seeds.add(`compare ${competitor}`);
  }

  // Always add a brand kw
  seeds.add('triveni cabs');

  // Limit to 15 unique
  return [...seeds].filter(Boolean).slice(0, 15).join(', ');
}

const files = walk(ROOT);
let added = 0;

for (const f of files) {
  let src = readFileSync(f, 'utf8');
  // Skip if already has keywords (top-level metadata)
  // Need to check if it's WITHIN the metadata block at the top level
  const metaMatch = src.match(/export\s+const\s+metadata\s*=\s*\{([\s\S]*?)\n\};/);
  if (!metaMatch) continue;
  const block = metaMatch[1];
  // Already has keywords?
  if (/^\s*keywords\s*:/m.test(block)) continue;

  const slug = f.replace(/\\/g, '/').replace('src/app/(routes)', '').replace('/page.js', '');
  if (slug.includes('[')) continue; // dynamic routes use generateMetadata
  const keywords = generateKeywords(slug);
  if (!keywords) continue;

  // Insert keywords after description (or after title if no description)
  // Look for `description: '...',` and inject after it
  const insertRe = /(description\s*:\s*(['"`])(?:[^'"`\\]|\\.)*\2\s*,\s*\n)/;
  const m = src.match(insertRe);
  if (!m) continue;

  const newSrc = src.replace(insertRe, `$1  keywords: '${keywords.replace(/'/g, "\\'")}',\n`);
  if (newSrc === src) continue;

  if (DRY) {
    console.log(`${f}\n  + keywords: ${keywords}`);
  } else {
    writeFileSync(f, newSrc);
  }
  added++;
}

console.log(`\n${DRY ? 'Would add' : 'Added'} keywords to ${added} pages`);
