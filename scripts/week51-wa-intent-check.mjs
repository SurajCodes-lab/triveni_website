#!/usr/bin/env node
// Measures WhatsApp intent events across a sample of templates.
// Local production build only; no external requests and no lead submission.
// Asserts each WhatsApp link records EXACTLY ONE whatsapp_click and that the
// capture form still opens — the double-count risk is what this exists to catch.
import fs from 'node:fs';
import puppeteer from 'puppeteer-core';

const origin = 'http://127.0.0.1:3152';
const out = 'D:/Desktop/triveni_next/2.0/week51/implementation-evidence';
const paths = process.argv.slice(2);
if (!paths.length) throw new Error('Usage: node scripts/week51-wa-intent-check.mjs <path> [path...]');

const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const results = [];
try {
  for (const path of paths) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.setUserAgent('Mozilla/5.0 Chrome/140.0.0.0 Safari/537.36');
    await page.evaluateOnNewDocument(() => Object.defineProperty(navigator, 'webdriver', { get: () => false }));
    await page.setRequestInterception(true);
    page.on('request', r => r.method() === 'GET' && r.url().startsWith(origin + '/') ? r.continue() : r.abort());
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    let status = null;
    try { const r = await page.goto(origin + path, { waitUntil: 'networkidle2' }); status = r && r.status(); } catch { status = 'nav-failed'; }
    if (status !== 200) { results.push({ path, status, skipped: true }); await page.close(); continue; }

    const sel = 'a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="whatsapp.com/send"]';
    const anchors = await page.$$eval(sel, es => es.length).catch(() => 0);
    if (!anchors) { results.push({ path, status, whatsappAnchors: 0, skipped: true }); await page.close(); continue; }

    // Sample the first anchor that is actually clickable. Several templates put a
    // zero-size WhatsApp anchor first (collapsed sticky bars), and clicking that
    // lands on whatever sits at 0,0 — which measures nothing.
    const picked = await page.evaluate((s) => {
      window.__ev = [];
      window.gtag = (...a) => window.__ev.push(a);
      const els = [...document.querySelectorAll(s)];
      for (const el of els) {
        el.scrollIntoView({ block: 'center' });
        const r = el.getBoundingClientRect();
        if (r.width < 4 || r.height < 4) continue;
        const at = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
        if (!at || !el.contains(at)) continue;
        el.setAttribute('data-w51-sample', '1');
        return { found: true, zeroSizeSkipped: els.indexOf(el), text: (el.textContent || '').trim().slice(0, 40) };
      }
      return { found: false, zeroSizeSkipped: els.length };
    }, sel);
    if (!picked.found) { results.push({ path, status, whatsappAnchors: anchors, skipped: true, reason: 'no hit-testable WhatsApp anchor' }); await page.close(); continue; }
    await page.click('[data-w51-sample="1"]').catch(() => {});
    await new Promise(r => setTimeout(r, 800));

    const seen = await page.evaluate(() => ({
      intent: window.__ev.filter(e => e[0] === 'event' && e[1] === 'whatsapp_click')
        .map(e => (e[2] && e[2].button_location) || ''),
      repeat: window.__ev.filter(e => e[0] === 'event' && e[1] === 'whatsapp_repeat_click').length,
      captureFormOpen: !!document.querySelector('[data-quote-form="1"]'),
      stillOnPage: location.pathname,
    }));
    results.push({ path, status, whatsappAnchors: anchors, sampledLink: picked.text, unclickableAnchorsSkipped: picked.zeroSizeSkipped, intentEvents: seen.intent.length, locations: seen.intent, repeatEvents: seen.repeat, captureFormOpen: seen.captureFormOpen, navigatedAway: seen.stillOnPage !== path, pageErrors: errors });
    await page.close();
  }
} finally {
  await browser.close();
}

fs.writeFileSync(`${out}/whatsapp-intent-check.json`, JSON.stringify({ createdAt: new Date().toISOString(), origin, results, limits: ['Local production build; not production verification.', 'A recorded gtag call is not proof of receipt in GA4.', 'One sampled link per page, not every link on it.'] }, null, 2) + '\n');

const checked = results.filter(r => !r.skipped);
const bad = checked.filter(r => r.intentEvents !== 1 || !r.captureFormOpen || r.navigatedAway || r.pageErrors.length);
for (const r of results) {
  if (r.skipped) { console.log(`SKIP  ${r.path} (status ${r.status}, anchors ${r.whatsappAnchors ?? 'n/a'})`); continue; }
  const flag = (r.intentEvents === 1 && r.captureFormOpen && !r.navigatedAway && !r.pageErrors.length) ? 'OK  ' : 'FAIL';
  console.log(`${flag}  ${r.path}  intent=${r.intentEvents} repeat=${r.repeatEvents} form=${r.captureFormOpen} loc=${JSON.stringify(r.locations)}`);
}
console.log(`\n${checked.length} pages checked, ${checked.length - bad.length} recording exactly one intent event with the capture form intact.`);
if (bad.length) process.exitCode = 1;
