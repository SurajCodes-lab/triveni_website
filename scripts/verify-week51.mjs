import fs from 'node:fs';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import puppeteer from 'puppeteer-core';
const require = createRequire(import.meta.url);
const { load } = require('./week48-source-loader.cjs');
const guides = load('src/lib/content/priority-page-guides.js').priorityPageGuides;
const repairs = load('src/lib/seo/journey-link-repairs.js').journeyLinkRepairs;
const origin = 'http://127.0.0.1:3152';
// Verification evidence is written outside the repository, alongside the Week 51 records.
const out = 'D:/Desktop/triveni_next/2.0/week51/implementation-evidence';
const before = JSON.parse(fs.readFileSync(`${out}/audit/baseline-link-findings.json`, 'utf8'));
const strip = s => s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
const headings = s => [...strip(s).matchAll(/<h[12]\b[^>]*>([\s\S]*?)<\/h[12]>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
const results = { pages: [], repairedSourcePages: [], targetChecks: [], browser: [], limitations: ['Local production build, not deployed verification.', 'External requests and lead submissions blocked during browser checks.', 'Tracking contract does not prove receipt in Google Analytics or Search Console ranking improvement.'] };
for (const [path, guide] of Object.entries(guides)) {
  const response = await fetch(origin + path);
  const html = await response.text();
  assert.equal(response.status, 200, path);
  assert(html.includes('id="journey-planning"'), path);
  assert(html.includes(`rel="canonical" href="https://www.trivenicabs.in${path}"`), `Canonical ${path}`);
  for (const marker of ['ga4-lib', 'ga-init', 'analytics-bootstrap', 'gtm-loader', 'google-site-verification']) assert(html.includes(marker), `${path}: ${marker}`);
  const old = fs.readFileSync(`${out}/before-html/${path.slice(1).replaceAll('/', '__')}.html`, 'utf8');
  const newHeadings = headings(html);
  for (const h of headings(old)) assert(newHeadings.includes(h), `${path}: removed heading ${h}`);
  assert.equal((strip(html).match(/<h1[ >]/g) || []).length, (strip(old).match(/<h1[ >]/g) || []).length, path);
  results.pages.push({ path, status: 200, planningHeading: guide.title, previousHeadingsRetained: true, trackingMarkers: true, canonical: true });
}
const sourcePaths = [...new Set(before.flatMap(r => r.sources))];
for (const path of sourcePaths) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  const html = strip(await response.text());
  const links = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1].replaceAll('&amp;', '&'));
  const oldCases = before.filter(r => r.sources.includes(path));
  for (const r of oldCases) assert(!links.includes(r.href), `${path}: still links to ${r.href}`);
  results.repairedSourcePages.push({ path, status: 200, previousBrokenDestinations: oldCases.map(r => r.href), oldBrokenLinksAbsent: true });
}
const { canonicalLink } = load('src/lib/seo/canonical-link.js');
const destinations = new Set([...Object.values(guides).flatMap(g => g.links.map(l => canonicalLink(l[1]))), ...Object.values(repairs).filter(r => r.href).map(r => r.href)]);
for (const path of destinations) {
  const response = await fetch(origin + path, { redirect: 'manual' });
  assert.equal(response.status, 200, `Destination ${path}`);
  await response.body?.cancel();
  results.targetChecks.push({ path, status: 200 });
}
fs.mkdirSync(`${out}/screenshots`, { recursive: true });
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
try {
  for (const width of [360, 1440]) {
    for (const path of Object.keys(guides)) {
      const page = await browser.newPage();
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      await page.setViewport({ width, height: 900 });
      await page.setRequestInterception(true);
      page.on('request', r => r.method() === 'GET' && r.url().startsWith(origin + '/') ? r.continue() : r.abort());
      await page.goto(origin + path, { waitUntil: 'networkidle2' });
      await page.waitForSelector('#journey-planning h3');
      assert.equal(await page.$$eval('#journey-planning h3', es => es.length), 3, path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
      assert(!overflow, `${path} overflow at ${width}`);
      assert.equal(errors.length, 0, `${path}: ${errors.join('; ')}`);
      const links = await page.$$eval('#journey-planning nav a', es => es.map(e => e.getAttribute('href')));
      assert.equal(links.length, 2, path);
      if (width === 360) {
        const block = await page.$('#journey-planning');
        await block.screenshot({ path: `${out}/screenshots/${path.slice(1).replaceAll('/', '__')}.png` });
      }
      results.browser.push({ path, width, errors, overflow, planningSections: 3, onwardLinks: links });
      await page.close();
    }
  }
  const page = await browser.newPage();
  // Local event-contract fixture only; production bot filtering is unchanged.
  await page.setUserAgent('Mozilla/5.0 Chrome/140.0.0.0 Safari/537.36');
  await page.evaluateOnNewDocument(() => Object.defineProperty(navigator, 'webdriver', { get: () => false }));
  await page.setRequestInterception(true);
  page.on('request', r => r.method() === 'GET' && r.url().startsWith(origin + '/') ? r.continue() : r.abort());
  await page.goto(origin + '/chandigarh-to-shimla', { waitUntil: 'networkidle2' });
  const selector = 'a[href*="wa.me"][href*="pinjore"]';
  await page.waitForSelector(selector);
  assert((await page.$eval(selector, e => e.textContent)).includes('Enquire on WhatsApp'));
  await page.evaluate(() => {
    window.__week51Events = [];
    window.gtag = (...args) => window.__week51Events.push(args);
    document.addEventListener('click', e => e.preventDefault(), { once: true });
  });
  await page.click(selector);
  const eventCount = await page.evaluate(() => window.__week51Events.filter(e => e[0] === 'event' && e[1] === 'whatsapp_click').length);
  assert.equal(eventCount, 1, 'A repaired enquiry records exactly one WhatsApp intent event');
  results.enquiryTracking = { destinationContext: 'pinjore', explicitEnquiryLabel: true, whatsappIntentEvents: eventCount, externalNavigationBlocked: true };
  await page.close();
} finally {
  await browser.close();
}
fs.writeFileSync(`${out}/verification.json`, JSON.stringify(results, null, 2));
console.log(JSON.stringify({ priorityPages: results.pages.length, repairedSourcePages: results.repairedSourcePages.length, checkedDestinations: results.targetChecks.length, browserViews: results.browser.length, enquiryTracking: results.enquiryTracking }, null, 2));

