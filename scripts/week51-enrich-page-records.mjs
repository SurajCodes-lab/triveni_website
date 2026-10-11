#!/usr/bin/env node
// Adds a measured per-page audit section to every Week 51 page record.
//
// The records were generated with a metadata baseline and nothing measured: every
// one said "No issue found by limited metadata checks" whether or not anything had
// been looked at. This fills in what the build can actually prove for that exact
// URL — content size, heading structure, schema present, internal links, and any
// content-moderation finding against it.
//
// It does NOT mark any page editorially reviewed. The editorial status lines are
// left untouched on purpose: a measured audit is not a read-through by a person,
// and the plan is explicit that conflating the two is not allowed.
//
// Idempotent: re-running replaces the audit section rather than appending another.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WEEK = 'D:/Desktop/triveni_next/2.0/week51';
const RECORDS = path.join(WEEK, 'page-records');
const APP = path.join(ROOT, '.next/server/app');
const MARKER = '## Measured content audit';

const FAMILIES = [
  ['Toll', /^\/toll-cost\//], ['Distance', /^\/distance\//], ['One-way cab', /^\/one-way-cab\//],
  ['Group vehicle', /^\/(tempo-traveller|force-urbania|maharaja-tempo-traveller|bus-routes|\d+-seater)/],
  ['Airport / station', /^\/(airport-service|railway-station-taxi|train-taxi|bus-stand)\//],
  ['Guide / blog', /^\/blog\//], ['Weekend / nearby', /^\/(places-to-visit-near|weekend-getaways)/],
  ['Sightseeing', /^\/sightseeing\//], ['Religious tours', /^\/religious-tours\//],
  ['City service', /^\/(cab-service|local-taxi|outstation-cabs|taxi-fare|wedding|event-transportation-service)\//],
  ['Corridor / route', /^\/[a-z0-9-]+-to-[a-z0-9-]+$/], ['City hub', /^\/[a-z0-9-]+$/],
];
const famOf = u => (FAMILIES.find(([, re]) => re.test(u)) || ['Other', null])[0];

const unescape = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&#x27;/g, "'");
const collapse = s => s.replace(/\s+/g, ' ').trim();

// Content-moderation findings, keyed by URL.
const findings = new Map();
const csv = path.join(WEEK, 'content-moderation/findings.csv');
if (fs.existsSync(csv)) {
  const rows = fs.readFileSync(csv, 'utf8').split('\n').slice(1).filter(Boolean);
  for (const line of rows) {
    const m = line.match(/^"([^"]*)","([^"]*)","([\s\S]*)"$/);
    if (!m) continue;
    if (!findings.has(m[1])) findings.set(m[1], []);
    findings.get(m[1]).push(m[3] ? `${m[2]} — ${m[3]}` : m[2]);
  }
}

const stats = { total: 0, measured: 0, notBuilt: 0, withFindings: 0, clean: 0 };
const files = fs.readdirSync(RECORDS).filter(f => f.endsWith('.md'));

for (const f of files) {
  const rp = path.join(RECORDS, f);
  let body = fs.readFileSync(rp, 'utf8');
  stats.total++;

  const urlLine = body.match(/^URL:\s*(\S+)/m);
  if (!urlLine) continue;
  const pathOnly = urlLine[1].replace(/^https?:\/\/[^/]+/, '') || '/';

  const htmlFile = path.join(APP, (pathOnly === '/' ? '/index' : pathOnly) + '.html');
  let section;

  if (!fs.existsSync(htmlFile)) {
    stats.notBuilt++;
    section = `${MARKER} (2 October 2026)

No generated HTML exists for this exact path in the current build, so nothing could be
measured. This is expected for alias and historical URLs kept in the register for
reconciliation; it is **not** evidence that a live page is missing. Resolve the alias to
its destination before treating this record as actionable.
`;
  } else {
    stats.measured++;
    const html = fs.readFileSync(htmlFile, 'utf8');
    const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
                        .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
    const text = collapse(unescape(visible.replace(/<[^>]+>/g, ' ')));
    const words = text ? text.split(' ').length : 0;
    const h1s = [...visible.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(m => collapse(unescape(m[1].replace(/<[^>]+>/g, ' '))));
    const h2s = [...visible.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map(m => collapse(unescape(m[1].replace(/<[^>]+>/g, ' '))));
    const title = collapse(unescape((html.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1]));
    const desc = collapse(unescape((html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1]));
    const canonical = (html.match(/rel="canonical" href="([^"]*)"/) || [, ''])[1];
    const schemas = [...new Set([...html.matchAll(/"@type":"([A-Za-z]+)"/g)].map(m => m[1]))].sort();
    const internal = new Set([...visible.matchAll(/href="(\/[^"#?]*)"/g)].map(m => m[1]));
    const tracking = ['ga4-lib', 'ga-init', 'analytics-bootstrap', 'gtm-loader', 'google-site-verification']
      .filter(t => !html.includes(t));
    const found = findings.get(pathOnly) || [];
    if (found.length) stats.withFindings++; else stats.clean++;

    const canonicalOk = canonical === `https://www.trivenicabs.in${pathOnly}`;
    section = `${MARKER} (2 October 2026)

Measured from the local production build. These are machine-checkable facts about this
exact URL; none of them judge whether the page is useful or accurate.

| Measure | Value |
|---|---|
| Family | ${famOf(pathOnly)} |
| Body words | ${words.toLocaleString('en-IN')} |
| H1 count | ${h1s.length}${h1s.length === 1 ? '' : ' — **needs attention**'} |
| H1 text | ${h1s[0] ? h1s[0].slice(0, 110) : '*none rendered*'} |
| H2 sections | ${h2s.length} |
| Title length | ${title.length} chars |
| Description length | ${desc.length} chars |
| Canonical self-referential | ${canonicalOk ? 'Yes' : `No — declares ${canonical || 'none'}`} |
| Distinct internal links | ${internal.size} |
| Schema types present | ${schemas.length ? schemas.join(', ') : 'none'} |
| Analytics markers | ${tracking.length ? `**missing: ${tracking.join(', ')}**` : 'all five present'} |

${found.length
  ? `**Automated findings on this page (${found.length}):**\n\n${found.map(x => `- ${x}`).join('\n')}\n\nEach needs a human decision. Some, such as a title above the 60-character soft target, are within the project's own accepted limit of 70 and may correctly need no change.`
  : 'No automated content finding was raised against this page in the 2 October sweep. That means it passed the thirteen machine checks — it does **not** mean the page has been read or its facts verified.'}
`;
  }

  // Replace an existing audit section, otherwise insert before "## Individual work".
  if (body.includes(MARKER)) {
    body = body.replace(new RegExp(`${MARKER}[\\s\\S]*?(?=\\n## (?!Measured)|$)`), section + '\n');
  } else if (body.includes('## Individual work to complete')) {
    body = body.replace('## Individual work to complete', section + '\n## Individual work to complete');
  } else {
    body = body.trimEnd() + '\n\n' + section;
  }
  fs.writeFileSync(rp, body);
}

console.log(JSON.stringify(stats, null, 2));
