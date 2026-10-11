#!/usr/bin/env node
// Content moderation sweep across EVERY generated page.
//
// This is an automated scan, not an editorial review. It finds defects a machine
// can prove — a date in the future, a missing H1, a page with no readable body,
// a title duplicated across hundreds of pages, rendered "undefined". It cannot
// judge whether a page is useful, accurate or worth keeping. The Week 51 plan is
// explicit that a completed automatic scan is not a completed editorial review,
// and nothing here should be recorded as one.
//
// Reads the local build only. Writes outside the repository.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = 'D:/Desktop/triveni_next/2.0/week51/content-moderation';
const APP = path.join(ROOT, '.next/server/app');
const TODAY = new Date().toISOString().slice(0, 10);
const BRAND_SUFFIXES = [' | Triveni Cabs™', ' | Triveni Cabs', ' — Triveni Cabs™', ' — Triveni Cabs'];

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
  const p = path.join(dir, e.name);
  return e.isDirectory() ? walk(p) : [p];
});

const unescape = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&#x27;/g, "'");
const stripTags = s => s.replace(/<[^>]+>/g, ' ');
const collapse = s => s.replace(/\s+/g, ' ').trim();

const files = walk(APP).filter(f => f.endsWith('.html'));
const findings = [];
const titleMap = new Map();
const descMap = new Map();
const h1Map = new Map();
let scanned = 0, redirectPages = 0;

const add = (url, kind, detail) => findings.push({ url, kind, detail });

for (const file of files) {
  const url = '/' + path.relative(APP, file).split(path.sep).join('/').slice(0, -5);
  const html = fs.readFileSync(file, 'utf8');

  // Redirect stubs carry no content and are not content defects.
  if (/<meta http-equiv="refresh"/i.test(html) && html.length < 4000) { redirectPages++; continue; }
  scanned++;

  const noScript = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
                       .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');

  // ---- title ----
  const titleRaw = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
  if (!titleRaw) add(url, 'title-missing', '');
  else {
    const title = collapse(unescape(titleRaw));
    let content = title;
    for (const s of BRAND_SUFFIXES) if (content.endsWith(s)) { content = content.slice(0, -s.length); break; }
    if (content.length > 60) add(url, 'title-too-long', `${content.length} chars of content`);
    if (content.length < 15) add(url, 'title-too-short', `${content.length} chars: ${content}`);
    if (!titleMap.has(title)) titleMap.set(title, []);
    titleMap.get(title).push(url);
  }

  // ---- meta description ----
  const descRaw = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!descRaw) add(url, 'description-missing', '');
  else {
    const desc = collapse(unescape(descRaw));
    if (desc.length < 70) add(url, 'description-short', `${desc.length} chars`);
    if (desc.length > 200) add(url, 'description-long', `${desc.length} chars`);
    if (!descMap.has(desc)) descMap.set(desc, []);
    descMap.get(desc).push(url);
  }

  // ---- canonical ----
  const canonical = (html.match(/rel="canonical" href="([^"]*)"/) || [])[1];
  if (!canonical) add(url, 'canonical-missing', '');

  // ---- headings ----
  const h1s = [...noScript.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(m => collapse(unescape(stripTags(m[1]))));
  if (h1s.length === 0) add(url, 'h1-missing', '');
  else if (h1s.length > 1) add(url, 'h1-multiple', `${h1s.length}`);
  if (h1s[0]) {
    if (!h1Map.has(h1s[0])) h1Map.set(h1s[0], []);
    h1Map.get(h1s[0]).push(url);
  }

  // ---- future dates in structured data ----
  for (const m of html.matchAll(/"(datePublished|dateModified)":"(\d{4}-\d{2}-\d{2})/g)) {
    if (m[2] > TODAY) add(url, 'future-date', `${m[1]} = ${m[2]}`);
  }

  // ---- body text quality ----
  const body = collapse(unescape(stripTags(noScript)));
  const words = body ? body.split(' ').length : 0;
  if (words < 300) add(url, 'thin-content', `${words} words`);

  // ---- rendered placeholders and broken interpolation ----
  for (const bad of ['undefined', 'NaN', '[object Object]', 'Lorem ipsum', 'TODO', 'FIXME']) {
    if (body.includes(bad)) add(url, 'placeholder-text', `rendered "${bad}"`);
  }

  // ---- currency formatting: ₹ followed by 4+ digits with no separator ----
  const badMoney = [...new Set((body.match(/₹\s?\d{4,}/g) || []).map(s => s.trim()))];
  if (badMoney.length) add(url, 'unformatted-currency', badMoney.slice(0, 6).join(', '));

  // ---- images without alt ----
  const imgs = [...noScript.matchAll(/<img\b[^>]*>/g)].map(m => m[0]);
  const noAlt = imgs.filter(t => !/\balt=/.test(t)).length;
  if (noAlt) add(url, 'image-missing-alt', `${noAlt} of ${imgs.length} img tags`);

  // ---- dead-end hrefs ----
  const deadHrefs = [...noScript.matchAll(/href="(#|undefined|null|)"/g)].length;
  if (deadHrefs) add(url, 'dead-href', `${deadHrefs} placeholder href(s)`);
}

// ---- cross-page duplication ----
const dupTitles = [...titleMap.entries()].filter(([, u]) => u.length > 1).sort((a, b) => b[1].length - a[1].length);
const dupDescs = [...descMap.entries()].filter(([, u]) => u.length > 1).sort((a, b) => b[1].length - a[1].length);
const dupH1s = [...h1Map.entries()].filter(([, u]) => u.length > 1).sort((a, b) => b[1].length - a[1].length);

const byKind = {};
for (const f of findings) byKind[f.kind] = (byKind[f.kind] || 0) + 1;

const summary = {
  createdAt: new Date().toISOString(),
  scope: 'Every generated HTML page in the local build. Automated checks only.',
  htmlFilesFound: files.length,
  redirectStubsSkipped: redirectPages,
  pagesScanned: scanned,
  pagesWithAtLeastOneFinding: new Set(findings.map(f => f.url)).size,
  findingsByKind: byKind,
  duplication: {
    titlesSharedByMoreThanOnePage: dupTitles.length,
    pagesInvolvedInDuplicateTitles: dupTitles.reduce((a, [, u]) => a + u.length, 0),
    descriptionsSharedByMoreThanOnePage: dupDescs.length,
    pagesInvolvedInDuplicateDescriptions: dupDescs.reduce((a, [, u]) => a + u.length, 0),
    h1sSharedByMoreThanOnePage: dupH1s.length,
  },
  limits: [
    'Automated detection only. It cannot judge usefulness, accuracy or intent.',
    'A clean result for a page is not an editorial review of that page.',
    'Thin-content and duplicate-title counts are signals for human triage, not instructions to change or remove anything.',
    'Reads the local build; proves nothing about live HTTP status or Google indexing.',
  ],
};

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'summary.json'), JSON.stringify(summary, null, 2) + '\n');
fs.writeFileSync(path.join(OUT, 'findings.csv'),
  'url,kind,detail\n' + findings.map(f => [f.url, f.kind, f.detail].map(v => '"' + String(v).replaceAll('"', '""') + '"').join(',')).join('\n') + '\n');
const dupRows = (rows, label) => rows.slice(0, 400).map(([v, u]) => `"${String(v).replaceAll('"', '""')}",${u.length},"${u.slice(0, 25).join(' ')}"`).join('\n');
fs.writeFileSync(path.join(OUT, 'duplicate-titles.csv'), 'title,page_count,sample_urls\n' + dupRows(dupTitles) + '\n');
fs.writeFileSync(path.join(OUT, 'duplicate-descriptions.csv'), 'description,page_count,sample_urls\n' + dupRows(dupDescs) + '\n');
fs.writeFileSync(path.join(OUT, 'duplicate-h1s.csv'), 'h1,page_count,sample_urls\n' + dupRows(dupH1s) + '\n');

console.log(JSON.stringify(summary, null, 2));
console.log('\nTop duplicate titles:');
for (const [t, u] of dupTitles.slice(0, 8)) console.log(`  ${String(u.length).padStart(4)}  ${t.slice(0, 90)}`);
console.log('\nTop duplicate H1s:');
for (const [t, u] of dupH1s.slice(0, 8)) console.log(`  ${String(u.length).padStart(4)}  ${t.slice(0, 90)}`);
