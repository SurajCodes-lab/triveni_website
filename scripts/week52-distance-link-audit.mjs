#!/usr/bin/env node
// Does a distance page send its reader to the page that can sell them the trip?
//
// The 6 Oct export: the distance family carries 2,692,574 impressions at
// position 5-9 and converts at 0.151%. The corridor page for the same route
// holds the booking intent and averages position 11.18 at 1.20%. A reader on a
// distance page has just confirmed how far it is and is, by definition,
// planning the journey — so the route from that page to the corridor page is
// the most valuable internal link on this site.
//
// This measures, for every built distance page: whether there is a link to the
// matching corridor page, how deep in the document it sits, and what it says.
import fs from 'node:fs';
import path from 'node:path';

const APP = '.next/server/app';
const OUT = 'D:/Desktop/triveni_next/2.0/week52/measurement';
const known = new Set(JSON.parse(fs.readFileSync('src/generated/known-routes.json', 'utf8')));

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p) : [p];
});

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const files = walk(APP).filter((f) => f.endsWith('.html'));
const rows = [];

for (const f of files) {
  const url = '/' + path.relative(APP, f).split(path.sep).join('/').slice(0, -5);
  if (!url.startsWith('/distance/')) continue;
  const slug = url.slice('/distance/'.length);
  const corridor = '/' + slug;

  const html = fs.readFileSync(f, 'utf8');
  const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');

  const re = new RegExp('<a\\b[^>]*href="' + escapeRe(corridor) + '"[^>]*>([\\s\\S]*?)<\\/a>', 'gi');
  const hits = [...body.matchAll(re)].map((m) => ({
    at: m.index,
    text: m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 70),
  }));

  rows.push({
    url,
    corridor,
    corridorBuilt: known.has(corridor),
    links: hits.length,
    firstAtShare: hits.length ? +(hits[0].at / body.length).toFixed(3) : null,
    firstText: hits.length ? hits[0].text : null,
    allTexts: hits.map((h) => h.text),
  });
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(`${OUT}/distance-link-audit.json`, JSON.stringify({
  createdAt: new Date().toISOString(),
  scope: 'Built HTML of every /distance/* page. Measures the internal link to the matching corridor page /<a>-to-<b>.',
  note: 'firstAtShare is the first link position as a share of document length — a proxy for depth, not pixels.',
  rows,
}, null, 2) + '\n');

const withLink = rows.filter((r) => r.links > 0);
const noLink = rows.filter((r) => r.links === 0 && r.corridorBuilt);
const noCorridor = rows.filter((r) => !r.corridorBuilt);

console.log(`distance pages built            : ${rows.length}`);
console.log(`  corridor page exists          : ${rows.length - noCorridor.length}`);
console.log(`    links to it                 : ${withLink.length}`);
console.log(`    does NOT link to it         : ${noLink.length}`);
console.log(`  corridor page not built       : ${noCorridor.length}`);

if (withLink.length) {
  const shares = withLink.map((r) => r.firstAtShare).sort((a, b) => a - b);
  console.log(`\nfirst link sits at ${(shares[Math.floor(shares.length / 2)] * 100).toFixed(0)}% of the document (median)`);
  console.log(`pages where it sits past halfway: ${withLink.filter((r) => r.firstAtShare > 0.5).length} of ${withLink.length}`);

  const counts = new Map();
  for (const r of withLink) counts.set(r.firstText, (counts.get(r.firstText) || 0) + 1);
  console.log('\nmost common anchor text:');
  for (const [t, n] of [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10)) {
    console.log(`  ${String(n).padStart(4)}  ${t || '(empty)'}`);
  }
}

if (noLink.length) {
  console.log('\npages with no link to their corridor page (first 15):');
  for (const r of noLink.slice(0, 15)) console.log(`  ${r.url}  ->  ${r.corridor}`);
}
