#!/usr/bin/env node
/**
 * seo-check — post-build SEO assertions over the prerendered HTML
 * ===============================================================
 *
 * Run after `next build`:   node scripts/seo-check.mjs
 *
 * WHY THIS EXISTS
 * ---------------
 * The worst defect found in the Week 43 audit was twelve `/tour-package/*\/book`
 * pages prerendering the title "Booking Not Found" and a body reading "Package
 * not found", served at HTTP 200 on real, bookable packages. They had been live
 * for weeks. Nothing failed, nothing warned — `generateStaticParams` produced
 * them and the not-found branch rendered quietly.
 *
 * Every check below would have caught something real in that audit, and each one
 * is a class of bug that a build can detect but a human reviewer will not, because
 * they only show up across thousands of pages at once.
 *
 * Exit code 1 on any ERROR. Warnings are reported but do not fail the build.
 */

import fs from 'fs';
import path from 'path';
import { bookingCanonicalRedirects } from '../src/lib/seo/booking-canonical-redirects.mjs';

// A redirected path is still prerendered by its template — next.config redirects
// run before routing, so the file exists but is never served. Excluding these
// keeps the guard honest: without it every consolidated URL reports as a
// duplicate title forever.
const REDIRECTED = new Set(bookingCanonicalRedirects.map((r) => r.source));

const ROOT = '.next/server/app';
const BRAND = 'Triveni Cabs';
const SUFFIX = ` | ${BRAND}`;

/** Content chars visible before Google truncates the rendered title (~60 incl. brand). */
const CONTENT_LIMIT = 70; // hard fail above this; 60 is the soft target
const DESC_MIN = 70;
const DESC_MAX = 200;

if (!fs.existsSync(ROOT)) {
  console.error(`seo-check: ${ROOT} not found — run \`npm run build\` first.`);
  process.exit(1);
}

const unescape = (s) =>
  s.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"')
   .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'");

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, acc);
    else if (entry.name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

const files = walk(ROOT);
const pages = [];
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const t = /<title>(.*?)<\/title>/s.exec(html);
  const d = /<meta name="description" content="(.*?)"/s.exec(html);
  const c = /<link rel="canonical" href="(.*?)"/s.exec(html);
  const url =
    '/' + path.relative(ROOT, file).split(path.sep).join('/').replace('(routes)/', '').slice(0, -5);
  if (REDIRECTED.has(url)) continue; // consolidated away; never served
  pages.push({
    url,
    title: t ? unescape(t[1]) : null,
    description: d ? unescape(d[1]) : null,
    canonical: c ? c[1] : null,
  });
}

const errors = [];
const warnings = [];
const add = (list, rule, url, detail) => list.push({ rule, url, detail });

// The page that started it all: a not-found state prerendered and served as 200.
for (const p of pages) {
  if (p.url === '/_not-found') continue;
  if (p.title && /not found/i.test(p.title)) {
    add(errors, 'soft-404', p.url, `title reads "${p.title}"`);
  }
}

// A page with no title or no description is invisible or unattractive in the SERP.
for (const p of pages) {
  if (!p.title) add(errors, 'missing-title', p.url, 'no <title> rendered');
  else if (!p.description) add(warnings, 'missing-description', p.url, 'no meta description');
}

// The layout applies `%s | Triveni Cabs`, so a title that already ends in the
// brand renders it twice. 320 pages did this before Week 43.
for (const p of pages) {
  if (!p.title || p.url === '/_not-found') continue;
  const content = p.title.endsWith(SUFFIX) ? p.title.slice(0, -SUFFIX.length) : p.title;
  // The layout appends `| Triveni Cabs`, so the brand is only legitimate in the
  // FIRST clause, where it is the page's subject (/triveni-cabs-vs-ola,
  // /why-triveni-cabs). A mention in any later clause is the template's job and
  // renders twice. Matching the bare token as well as the full phrase, because a
  // truncated title can leave a dangling "| Triveni" that the old phrase-only
  // count never saw.
  const clauses = content.split(/\s*\|\s*/);
  const brandInTail = clauses.slice(1).some((c) => /\btriveni\b/i.test(c));
  if (brandInTail) {
    add(errors, 'doubled-brand', p.url, p.title);
  }
  if (content.length > CONTENT_LIMIT) {
    add(warnings, 'title-too-long', p.url, `${content.length} chars of content — Google shows ~60`);
  }
}

// Two pages sharing a title are competing for the same result.
const byTitle = new Map();
for (const p of pages) {
  if (!p.title || /not found/i.test(p.title)) continue;
  if (!byTitle.has(p.title)) byTitle.set(p.title, []);
  byTitle.get(p.title).push(p.url);
}
for (const [title, urls] of byTitle) {
  if (urls.length > 1) {
    add(warnings, 'duplicate-title', urls.join(', '), title);
  }
}

// Intra-site competition: several pages chasing one city with the same intent.
//
// Found in Week 44. 412 pages target 28 cities — 14.7 per city. `/delhi` alone has
// 23 siblings. The city hub, which should own "cab service in Delhi", averages
// position 22.3; /outstation-cabs sits at 34.4 and /event-transportation-service
// at 39.5 with traffic on 2 of its 129 pages. They are not losing to competitors,
// they are losing to each other.
//
// Distinct intents are legitimate — a wedding page and an airport page for the
// same city serve different searches and both perform. Only families that answer
// the SAME question are flagged.
const INTENT_FAMILIES = {
  'generic city cab': ['(city hub)', 'cab-service', 'local-taxi', 'taxi-fare', 'outstation-cabs'],
  'event transport': ['event-transportation-service'],
  'tempo / vehicle hire': ['tempo-traveller', 'force-urbania', 'maharaja-tempo-traveller'],
};

const CITY_SLUGS = new Set([
  'delhi', 'agra', 'jaipur', 'haridwar', 'chandigarh', 'shimla', 'manali', 'amritsar',
  'rishikesh', 'dehradun', 'mussoorie', 'nainital', 'udaipur', 'jodhpur', 'jaisalmer',
  'varanasi', 'lucknow', 'ayodhya', 'mathura', 'dharamshala', 'prayagraj', 'ajmer',
  'noida', 'gurgaon', 'ghaziabad', 'faridabad', 'meerut', 'srinagar',
]);

{
  // city -> family -> [urls]
  const byCity = new Map();
  for (const p of pages) {
    const seg = p.url.replace(/^\//, '').split('/');
    const city = seg[seg.length - 1];
    if (!CITY_SLUGS.has(city)) continue;
    const template = seg.length > 1 ? seg[0] : '(city hub)';
    const family = Object.keys(INTENT_FAMILIES).find((f) => INTENT_FAMILIES[f].includes(template));
    if (!family) continue;
    if (!byCity.has(city)) byCity.set(city, new Map());
    const fam = byCity.get(city);
    if (!fam.has(family)) fam.set(family, []);
    fam.get(family).push(p.url);
  }
  for (const [city, fams] of byCity) {
    for (const [family, urls] of fams) {
      if (urls.length > 1) {
        add(warnings, 'city-intent-competition', `${city} — ${family}`,
          `${urls.length} pages answering one question: ${urls.slice(0, 6).join(', ')}${urls.length > 6 ? ` … +${urls.length - 6}` : ''}`);
      }
    }
  }
}

// A canonical pointing somewhere else de-indexes the page silently.
for (const p of pages) {
  if (!p.canonical) add(warnings, 'missing-canonical', p.url, 'no canonical link');
}

for (const p of pages) {
  if (!p.description) continue;
  const n = p.description.length;
  if (n < DESC_MIN) add(warnings, 'description-short', p.url, `${n} chars`);
  else if (n > DESC_MAX) add(warnings, 'description-long', p.url, `${n} chars`);
}

// ---------------------------------------------------------------- report

const group = (list) => {
  const m = new Map();
  for (const i of list) {
    if (!m.has(i.rule)) m.set(i.rule, []);
    m.get(i.rule).push(i);
  }
  return m;
};

console.log(`seo-check — ${pages.length} prerendered pages\n`);

const eg = group(errors);
const wg = group(warnings);

for (const [rule, items] of eg) {
  console.log(`ERROR  ${rule} (${items.length})`);
  for (const i of items.slice(0, 10)) console.log(`         ${i.url}  ${i.detail}`);
  if (items.length > 10) console.log(`         ... and ${items.length - 10} more`);
}
for (const [rule, items] of wg) {
  console.log(`warn   ${rule} (${items.length})`);
  for (const i of items.slice(0, 5)) console.log(`         ${i.url}  ${i.detail}`);
  if (items.length > 5) console.log(`         ... and ${items.length - 5} more`);
}

console.log(`\n${errors.length} error(s), ${warnings.length} warning(s)`);
if (errors.length) {
  console.error('\nseo-check FAILED — do not deploy until these are resolved.');
  process.exit(1);
}
console.log('seo-check passed.');
