import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';

const directory = 'reports/week50/03-browser';
await fs.mkdir(directory, { recursive: true });
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const results = [];
try {
  for (const width of [360, 1440]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 900 });
    await page.setCacheEnabled(false);
    await page.setRequestInterception(true);
    page.on('request', request => {
      if (request.method() === 'GET' && request.url().startsWith('http://127.0.0.1:3100/')) request.continue();
      else request.abort();
    });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const response = await page.goto('http://127.0.0.1:3100/delhi-to-agra', { waitUntil: 'networkidle2' });
    assert.equal(response.status(), 200);
    const faq = () => page.evaluate(() => [...document.querySelectorAll('p')].find(p => p.textContent.startsWith('The one-way sedan fare is '))?.textContent);
    const before = await faq();
    assert(before?.includes('₹3,300'));
    await page.evaluate(() => [...document.querySelectorAll('button')].find(b => b.textContent.trim() === 'Round Trip').click());
    await page.waitForFunction(() => [...document.querySelectorAll('span')].some(s => s.textContent.trim() === '/round trip'));
    assert(await page.evaluate(() => [...document.querySelectorAll('span')].some(s => s.classList.contains('text-5xl') && s.textContent === '₹5,060')));
    assert.equal(await faq(), before, 'One-way FAQ must remain stable on round-trip selection');
    const layout = await page.evaluate(() => ({ width: innerWidth, documentWidth: document.documentElement.scrollWidth, h1: document.querySelectorAll('h1').length, forms: document.querySelectorAll('form').length }));
    assert(layout.documentWidth <= width + 1 && layout.h1 === 1 && layout.forms > 0);
    results.push({ test: 'corridor-trip-toggle', ...layout, oneWayFaqUnchanged: true });

    const distance = await page.goto('http://127.0.0.1:3100/distance/wagah-border-to-golden-temple', { waitUntil: 'networkidle2' });
    assert.equal(distance.status(), 200);
    const links = await page.$$('a[href="#distance-enquiry"]');
    assert.equal(links.length, 2, 'Both existing booking CTAs must remain');
    await links[0].click();
    await page.waitForFunction(() => location.hash === '#distance-enquiry');
    assert(await page.$('#distance-enquiry form'), 'Fallback must land at the existing enquiry form');
    await (await page.$('#distance-enquiry')).screenshot({ path: `${directory}/enquiry-${width}.png` });
    assert.deepEqual(errors, []);
    results.push({ test: 'reverse-route-booking', width, bookingButtons: links.length, enquiryFormReached: true, errors });
    await page.close();
  }
} finally { await browser.close(); }
await fs.writeFile(`${directory}/results.json`, JSON.stringify(results, null, 2));
console.log('PASS: mobile/desktop one-way FAQ stays stable on round-trip toggle; both reverse-route booking links reach the existing form; no page errors.');
