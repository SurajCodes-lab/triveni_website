#!/usr/bin/env node
// Rendered layout audit: what a reader actually sees in the first screen.
//
// The structural audit measured class names and got the hero question wrong —
// the min-h-screen instances on every page turned out to be sticky-footer page
// wrappers, which push nothing down. This measures the real thing in a browser:
// how far down the page the first useful content sits, how much of the opening
// screen is given to it, and whether the layout holds at both widths.
//
// Mobile is the primary case: 83% of this site's visits are mobile, and mobile
// ranks at position 7.5 against desktop's 12.2, so the mobile layout is the one
// earning the traffic.
import fs from 'node:fs';
import puppeteer from 'puppeteer-core';

const ORIGIN = 'http://127.0.0.1:3152';
const OUT = 'D:/Desktop/triveni_next/2.0/week52/measurement';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

// One representative page per family, plus the site's best performer.
const PAGES = [
  ['Near-city (best page)', '/places-to-visit-near-noida'],
  ['Corridor / route', '/delhi-to-agra'],
  ['City hub', '/jaipur'],
  ['Distance', '/distance/delhi-to-agra'],
  ['Toll', '/toll-cost/delhi-to-dehradun'],
  ['One-way cab', '/one-way-cab/delhi-to-dehradun'],
  ['Group vehicle', '/tempo-traveller/chandigarh'],
  ['Guide / blog', '/blog/akshardham-temple-delhi-guide-2026'],
  ['Sightseeing', '/sightseeing/rishikesh'],
  ['Airport / station', '/airport-service/delhi'],
  ['Weekend', '/weekend-getaways-from-noida-by-car'],
  ['Wedding', '/wedding/udaipur'],
  ['Religious tours', '/religious-tours/char-dham-yatra'],
];

const VIEWPORTS = [
  ['mobile', 360, 800],
  ['desktop', 1440, 900],
];

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
const results = [];

try {
  for (const [family, path] of PAGES) {
    for (const [vpName, width, height] of VIEWPORTS) {
      const page = await browser.newPage();
      await page.setViewport({ width, height, deviceScaleFactor: 1 });
      await page.setCacheEnabled(false);
      await page.setRequestInterception(true);
      page.on('request', (r) =>
        r.method() === 'GET' && r.url().startsWith(ORIGIN + '/') ? r.continue() : r.abort());

      let status = null;
      try {
        const res = await page.goto(ORIGIN + path, { waitUntil: 'networkidle2', timeout: 60000 });
        status = res && res.status();
      } catch {
        status = 'nav-failed';
      }
      if (status !== 200 && status !== 304) {
        results.push({ family, path, viewport: vpName, status, skipped: true });
        await page.close();
        continue;
      }

      const m = await page.evaluate((vh) => {
        const top = (el) => {
          const r = el.getBoundingClientRect();
          return Math.round(r.top + window.scrollY);
        };
        const vis = (el) => {
          const r = el.getBoundingClientRect();
          const cs = getComputedStyle(el);
          return r.width > 4 && r.height > 4 && cs.visibility !== 'hidden' && cs.display !== 'none';
        };

        const h1 = document.querySelector('h1');
        const h2s = [...document.querySelectorAll('h2')].filter(vis);
        const firstH2 = h2s[0] || null;

        // The first thing that answers something: a table, a definition list, or
        // a paragraph of real length. Decorative badges and nav do not count.
        const candidates = [...document.querySelectorAll('table, dl, p')].filter(
          (el) => vis(el) && (el.tagName !== 'P' || (el.textContent || '').trim().length > 120),
        );
        const firstSubstantive = candidates.length ? Math.min(...candidates.map(top)) : null;

        // Anything that looks like a price or fare — the commercial payload.
        const fare = [...document.querySelectorAll('*')].find(
          (el) => el.children.length === 0 && /₹\s?[\d,]{3,}/.test(el.textContent || '') && vis(el),
        );

        // firstSubstantive only recognises a table, a dl or a long paragraph.
        // A page that presents the same information as cards reads as having no
        // content at all: /pricing reported its first content at 7,066px when
        // its price list actually starts at 486px, because the tables are
        // inside `hidden md:block` wrappers and the mobile layout is cards.
        // firstContent takes the earliest of that and the first fare, which is
        // the figure to read for a commercial page.
        const firstContent = [firstSubstantive, fare ? top(fare) : null]
          .filter((v) => v != null);

        return {
          firstContentTop: firstContent.length ? Math.min(...firstContent) : null,
          pageHeight: Math.round(document.documentElement.scrollHeight),
          viewportHeight: vh,
          h1Top: h1 && vis(h1) ? top(h1) : null,
          firstH2Top: firstH2 ? top(firstH2) : null,
          firstSubstantiveTop: firstSubstantive,
          firstFareTop: fare ? top(fare) : null,
          h2Count: h2s.length,
          horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
          scrollWidth: document.documentElement.scrollWidth,
        };
      }, height);

      results.push({
        family,
        path,
        viewport: vpName,
        status,
        ...m,
        screensToFirstContent: m.firstContentTop != null
          ? +(m.firstContentTop / height).toFixed(2) : null,
        screensToFirstFare: m.firstFareTop != null
          ? +(m.firstFareTop / height).toFixed(2) : null,
        totalScreens: +(m.pageHeight / height).toFixed(1),
      });
      await page.close();
    }
  }
} finally {
  await browser.close();
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(`${OUT}/viewport-audit.json`, JSON.stringify({
  createdAt: new Date().toISOString(),
  scope: 'Rendered layout in Chrome at 360x800 (mobile) and 1440x900 (desktop).',
  note: 'Offsets are pixels from the top of the document. "Screens" divides by viewport height.',
  results,
}, null, 2) + '\n');

const w = (s, n) => String(s ?? '-').padEnd(n);
for (const vp of ['mobile', 'desktop']) {
  console.log(`\n=== ${vp} ===`);
  console.log(w('Family', 24) + w('h1', 7) + w('1st content', 13) + w('1st fare', 11) + w('scr→content', 13) + w('page scr', 10) + 'overflow');
  for (const r of results.filter((x) => x.viewport === vp)) {
    if (r.skipped) { console.log(w(r.family, 24) + `SKIPPED (${r.status})`); continue; }
    console.log(
      w(r.family, 24) + w(r.h1Top, 7) + w(r.firstContentTop, 13) + w(r.firstFareTop, 11) +
      w(r.screensToFirstContent, 13) + w(r.totalScreens, 10) + (r.horizontalOverflow ? 'YES' : 'no'),
    );
  }
}
