#!/usr/bin/env node
// Does any table still drag the page sideways on a phone?
//
// The complaint was plain: "everything in any tabular right there scroll would
// be there in mobile looks very ugly". This measures it at 360px — the width
// most of this site's mobile visits arrive at — across one page per family plus
// the blog pages, whose tables are written as HTML strings and so were the ones
// no component fix could reach.
import fs from 'node:fs';
import puppeteer from 'puppeteer-core';

const ORIGIN = 'http://127.0.0.1:3152';
const OUT = 'D:/Desktop/triveni_next/2.0/week52/measurement';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const PAGES = [
  ['City hub', '/jaipur'],
  ['Corridor', '/delhi-to-agra'],
  ['One-way cab', '/one-way-cab/delhi-to-dehradun'],
  ['Tempo traveller', '/tempo-traveller/chandigarh'],
  ['Religious tours', '/religious-tours/char-dham-yatra'],
  ['Chardham hub', '/chardham-yatra'],
  ['Sightseeing', '/sightseeing/golden-triangle-tour-3-days'],
  ['Distance', '/distance/delhi-to-agra'],
  ['Toll', '/toll-cost/delhi-to-dehradun'],
  ['Pricing', '/pricing'],
  ['Fare calculator', '/fare-calculator'],
  ['Corporate', '/corporate-transportation-service'],
  ['Tours with guide', '/tours-with-guide'],
  ['Airport', '/airport-service/delhi'],
  ['Blog (fare tables)', '/blog/akshardham-temple-delhi-guide-2026'],
  ['Comparison', '/12-seater-vs-17-seater-tempo'],
  ['Round trip', '/round-trip-cab'],
  ['Local taxi', '/local-taxi'],
];

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
const rows = [];

try {
  for (const [family, path] of PAGES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 360, height: 800 });
    await page.setCacheEnabled(false);
    let status = null;
    try {
      const r = await page.goto(ORIGIN + path, { waitUntil: 'networkidle2', timeout: 60000 });
      status = r && r.status();
    } catch { status = 'nav-failed'; }
    if (status !== 200 && status !== 304) {
      rows.push({ family, path, status, skipped: true });
      await page.close();
      continue;
    }

    // The labelling script runs in an effect, so it lands after hydration.
    // Waiting a frame is not enough — an early measurement reports tables as
    // unlabelled that are about to be labelled, which is what made the first
    // run of this audit read 46% when the real figure was 100%.
    try {
      await page.waitForFunction(() => {
        const all = document.querySelectorAll('table').length;
        return all === 0 || document.querySelectorAll('table[data-rt-labelled]').length === all;
      }, { timeout: 15000 });
    } catch { /* fall through and report what is actually there */ }

    const m = await page.evaluate(() => {
      const tables = [...document.querySelectorAll('table')];
      let overflowing = 0, worstOverflow = 0, needLabel = 0, hasLabel = 0;

      for (const t of tables) {
        const avail = (t.parentElement && t.parentElement.clientWidth) || window.innerWidth;
        if (t.scrollWidth > avail + 2) {
          overflowing++;
          worstOverflow = Math.max(worstOverflow, t.scrollWidth - avail);
        }

        // A cell needs a printed label only when the table has a column header
        // for its position. A two-column key/value table states the label in
        // its own row header ("Road distance | 233 km") — that becomes the
        // card's title when it restacks, so the value beside it needs nothing.
        const headRow = t.tHead && t.tHead.rows.length
          ? t.tHead.rows[t.tHead.rows.length - 1]
          : [...t.rows].find((r) => r.hasAttribute('data-rt-headrow'));
        if (!headRow) continue;
        const headings = [...headRow.cells].map((c) => (c.textContent || '').trim());

        for (const body of (t.tBodies.length ? [...t.tBodies] : [t])) {
          for (const row of body.rows) {
            if (row === headRow) continue;
            const cells = [...row.cells];
            if (cells.length !== headings.length) continue;
            cells.forEach((cell, i) => {
              if (i === 0 || cell.tagName !== 'TD' || !headings[i]) return;
              needLabel++;
              if (cell.getAttribute('data-label')) hasLabel++;
            });
          }
        }
      }

      return {
        tables: tables.length,
        overflowing,
        worstOverflow,
        cellsNeedingLabel: needLabel,
        cellsLabelled: hasLabel,
        pageOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
        scrollWidth: document.documentElement.scrollWidth,
      };
    });

    rows.push({ family, path, status, ...m });
    await page.close();
  }
} finally {
  await browser.close();
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(`${OUT}/table-audit.json`, JSON.stringify({
  createdAt: new Date().toISOString(),
  scope: 'Rendered in Chrome at 360x800. A table counts as overflowing when its scrollWidth exceeds the width its container can give it.',
  rows,
}, null, 2) + '\n');

const w = (s, n) => String(s ?? '-').padEnd(n);
console.log(w('Family', 22) + w('tables', 8) + w('overflow', 10) + w('cells labelled', 16) + 'page scrolls sideways');
let totalOver = 0, totalTables = 0;
for (const r of rows) {
  if (r.skipped) { console.log(w(r.family, 22) + `SKIPPED (${r.status})`); continue; }
  totalOver += r.overflowing; totalTables += r.tables;
  console.log(
    w(r.family, 22) + w(r.tables, 8) + w(r.overflowing, 10) +
    w(`${r.cellsLabelled}/${r.cellsNeedingLabel}`, 16) + (r.pageOverflow ? `YES (${r.scrollWidth}px)` : 'no'),
  );
}
console.log(`\n${totalTables} tables measured — ${totalOver} still overflowing`);
