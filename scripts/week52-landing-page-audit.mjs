#!/usr/bin/env node
// Landing-page defects on the pages that actually receive the traffic.
//
// 53 pages above 20,000 impressions convert under 0.30%, together holding
// 2,782,879 impressions for 4,579 clicks. Titles have been addressed on the
// distance family and tested-and-rejected on the attraction guides, so this
// measures the post-click experience instead: how fast the page is usable, how
// far down its own headline sits, and whether a reader who did click can reach
// a way of booking without hunting for it.
import fs from 'node:fs';
import puppeteer from 'puppeteer-core';

const ORIGIN = process.env.AUDIT_ORIGIN || 'http://127.0.0.1:3152';
const OUT = 'D:/Desktop/triveni_next/2.0/week52/measurement';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const PAGES = [
  ['/blog/akshardham-temple-delhi-guide-2026', 278606, 0.23],
  ['/distance/delhi-to-agra', 159753, 0.13],
  ['/distance/varanasi-to-ayodhya', 155031, 0.13],
  ['/blog/ayodhya-ram-mandir-complete-travel-guide-2026', 138650, 0.42],
  ['/blog/india-gate-delhi-complete-guide-2026', 100276, 0.32],
  ['/blog/hawa-mahal-jaipur-complete-guide-2026', 90535, 0.23],
  ['/blog/lotus-temple-delhi-complete-guide-2026', 77705, 0.22],
  ['/blog/qutub-minar-delhi-complete-guide-2026', 74363, 0.15],
  ['/places-to-visit-near-noida', 73157, 3.42],
  ['/blog/nahargarh-fort-jaipur-complete-guide-2026', 72488, 0.49],
  ['/blog/city-palace-jaipur-complete-guide-2026', 72168, 0.28],
  ['/blog/toll-charges-delhi-agra-jaipur-2026', 67978, 1.04],
  ['/toll-cost/delhi-to-dehradun', 49146, 1.47],
  ['/places-to-visit-near-gurgaon', 55316, 1.26],
];

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const rows = [];

for (const [path, impressions, ctr] of PAGES) {
  const page = await browser.newPage();
  await page.setViewport({ width: 360, height: 800, deviceScaleFactor: 2 });
  await page.setCacheEnabled(false);
  // Mid-range phone on a 4G-ish link — the conditions most of this traffic arrives on.
  const cdp = await page.target().createCDPSession();
  await cdp.send('Network.enable');
  await cdp.send('Network.emulateNetworkConditions', {
    offline: false, latency: 70, downloadThroughput: (4 * 1024 * 1024) / 8, uploadThroughput: (1024 * 1024) / 8,
  });
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });

  let status = null;
  try {
    const r = await page.goto(ORIGIN + path, { waitUntil: 'networkidle2', timeout: 90000 });
    status = r && r.status();
  } catch { status = 'nav-failed'; }
  if (status !== 200) { rows.push({ path, impressions, ctr, status, skipped: true }); await page.close(); continue; }

  const m = await page.evaluate(() => {
    const top = (el) => Math.round(el.getBoundingClientRect().top + window.scrollY);
    const vis = (el) => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
      return r.width > 4 && r.height > 4 && cs.visibility !== 'hidden' && cs.display !== 'none'; };

    const h1 = document.querySelector('h1');

    // A way to act: a tel: link, a wa.me link, or a visible form.
    const acts = [...document.querySelectorAll('a[href^="tel:"], a[href*="wa.me"], a[href*="whatsapp"], form, button')]
      .filter(vis);
    const firstAct = acts.length ? Math.min(...acts.map(top)) : null;
    const firstActLabel = (() => {
      if (!acts.length) return null;
      const el = acts.reduce((a, b) => (top(a) <= top(b) ? a : b));
      return (el.textContent || el.getAttribute('aria-label') || el.tagName).trim().replace(/\s+/g, ' ').slice(0, 40);
    })();

    // A price anywhere a reader can see.
    const fare = [...document.querySelectorAll('*')].find(
      (el) => el.children.length === 0 && /₹\s?[\d,]{3,}/.test(el.textContent || '') && vis(el));

    const lcpish = performance.getEntriesByType('paint').find((p) => p.name === 'first-contentful-paint');
    return {
      h1Top: h1 && vis(h1) ? top(h1) : null,
      firstActTop: firstAct, firstActLabel,
      firstFareTop: fare ? top(fare) : null,
      pageHeight: Math.round(document.documentElement.scrollHeight),
      fcp: lcpish ? Math.round(lcpish.startTime) : null,
      imgs: document.images.length,
      lazyImgs: [...document.images].filter((i) => i.loading === 'lazy').length,
      domNodes: document.getElementsByTagName('*').length,
    };
  });

  rows.push({ path, impressions, ctr, status, ...m });
  await page.close();
}
await browser.close();

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(`${OUT}/landing-page-audit.json`, JSON.stringify({
  createdAt: new Date().toISOString(),
  scope: 'Top landing pages by impressions, rendered at 360x800 with 4x CPU throttling and a 4 Mbps link.',
  rows,
}, null, 2) + '\n');

const w = (s, n) => String(s ?? '-').padEnd(n);
console.log(w('page', 48) + w('impr', 9) + w('CTR', 7) + w('FCP', 7) + w('h1', 7) + w('1st CTA', 9) + w('1st fare', 9) + w('DOM', 7) + 'imgs');
for (const r of rows) {
  if (r.skipped) { console.log(w(r.path, 48) + `SKIPPED (${r.status})`); continue; }
  console.log(
    w(r.path.slice(0, 47), 48) + w(r.impressions, 9) + w(r.ctr + '%', 7) +
    w(r.fcp ? r.fcp + 'ms' : '-', 7) + w(r.h1Top, 7) + w(r.firstActTop, 9) +
    w(r.firstFareTop ?? 'none', 9) + w(r.domNodes, 7) + `${r.lazyImgs}/${r.imgs} lazy`);
}
