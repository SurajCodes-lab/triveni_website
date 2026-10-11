#!/usr/bin/env node
// What does a reader get when they land on the site's biggest pages?
//
// The 6 Oct export: 53 pages above 20,000 impressions convert under 0.30%,
// holding 2,782,879 impressions for 4,579 clicks. Title work has been done on
// the distance family and tested-and-rejected on the attraction guides, so this
// looks at the landing experience instead: how soon the page answers, whether a
// booking path is reachable, and whether anything is measurably broken.
import fs from 'node:fs';
import puppeteer from 'puppeteer-core';

const ORIGIN = 'https://www.trivenicabs.in';
const OUT = 'D:/Desktop/triveni_next/2.0/week52/measurement';
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const PAGES = [
  ['/blog/akshardham-temple-delhi-guide-2026', 278606, 0.23],
  ['/distance/delhi-to-agra', 159753, 0.13],
  ['/distance/varanasi-to-ayodhya', 155031, 0.13],
  ['/blog/hawa-mahal-jaipur-complete-guide-2026', 90535, 0.23],
  ['/blog/lotus-temple-delhi-complete-guide-2026', 77705, 0.22],
  ['/blog/qutub-minar-delhi-complete-guide-2026', 74363, 0.15],
  ['/blog/city-palace-jaipur-complete-guide-2026', 72168, 0.28],
  ['/distance/udaipur-to-mount-abu', 68416, 0.07],
  ['/distance/amritsar-to-wagah-border', 59146, 0.25],
  ['/distance/chandigarh-to-kasol', 55604, 0.20],
  ['/blog/amber-fort-jaipur-complete-guide-2026', 52766, 0.26],
  ['/blog/red-fort-delhi-complete-guide-2026', 50146, 0.26],
  // the two that work, as the control
  ['/places-to-visit-near-noida', 73157, 3.42],
  ['/blog/toll-charges-delhi-agra-jaipur-2026', 67978, 1.04],
];

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
const rows = [];

for (const [path, impressions, ctr] of PAGES) {
  const page = await browser.newPage();
  await page.setViewport({ width: 360, height: 800, deviceScaleFactor: 1 });
  await page.setCacheEnabled(false);
  const t0 = Date.now();
  let status = null;
  try {
    const r = await page.goto(ORIGIN + path, { waitUntil: 'domcontentloaded', timeout: 60000 });
    status = r && r.status();
  } catch { status = 'nav-failed'; }
  const ttLoad = Date.now() - t0;
  if (status !== 200) { rows.push({ path, impressions, ctr, status, skipped: true }); await page.close(); continue; }

  // Largest Contentful Paint, as the browser reports it.
  const lcp = await page.evaluate(() => new Promise((res) => {
    let v = 0;
    try {
      new PerformanceObserver((l) => { for (const e of l.getEntries()) v = Math.max(v, e.startTime); })
        .observe({ type: 'largest-contentful-paint', buffered: true });
    } catch { /* unsupported */ }
    setTimeout(() => res(Math.round(v)), 3500);
  }));

  const m = await page.evaluate(() => {
    const top = (el) => Math.round(el.getBoundingClientRect().top + window.scrollY);
    const vis = (el) => { const r = el.getBoundingClientRect(); const c = getComputedStyle(el);
      return r.width > 4 && r.height > 4 && c.visibility !== 'hidden' && c.display !== 'none'; };

    // A booking path: phone, WhatsApp, or a link/button that books or quotes.
    const isCta = (el) => {
      const href = (el.getAttribute('href') || '').toLowerCase();
      const txt = (el.textContent || '').toLowerCase();
      return href.startsWith('tel:') || href.includes('wa.me') || href.includes('whatsapp')
        || /book|quote|enquir|hire|reserve|call/.test(txt);
    };
    const ctas = [...document.querySelectorAll('a,button')].filter((e) => vis(e) && isCta(e));
    const firstCta = ctas.length ? Math.min(...ctas.map(top)) : null;

    // A fare anywhere on the page, and how far down the first one is.
    const fare = [...document.querySelectorAll('*')].find(
      (e) => e.children.length === 0 && /₹\s?[\d,]{3,}/.test(e.textContent || '') && vis(e));

    const h1 = document.querySelector('h1');
    const words = (document.body.innerText || '').trim().split(/\s+/).length;

    return {
      h1Top: h1 && vis(h1) ? top(h1) : null,
      ctaCount: ctas.length,
      firstCtaTop: firstCta,
      firstFareTop: fare ? top(fare) : null,
      words,
      pageScreens: +(document.documentElement.scrollHeight / 800).toFixed(1),
      images: document.querySelectorAll('img').length,
    };
  });

  rows.push({ path, impressions, ctr, status, loadMs: ttLoad, lcp, ...m });
  await page.close();
}
await browser.close();

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(`${OUT}/landing-audit.json`, JSON.stringify({ createdAt: new Date().toISOString(), rows }, null, 2) + '\n');

const w = (s, n) => String(s ?? '-').padEnd(n);
console.log('PRODUCTION, mobile 360px — what a reader gets on landing\n');
console.log(w('page', 44) + w('impr', 9) + w('CTR', 7) + w('LCP', 7) + w('h1', 6) + w('1stCTA', 8) + w('1stFare', 9) + w('CTAs', 6) + 'screens');
for (const r of rows) {
  if (r.skipped) { console.log(w(r.path, 44) + `SKIPPED (${r.status})`); continue; }
  console.log(w(r.path.slice(0, 43), 44) + w(r.impressions, 9) + w(r.ctr + '%', 7) +
    w(r.lcp ? r.lcp + 'ms' : '-', 7) + w(r.h1Top, 6) + w(r.firstCtaTop, 8) +
    w(r.firstFareTop, 9) + w(r.ctaCount, 6) + r.pageScreens);
}
