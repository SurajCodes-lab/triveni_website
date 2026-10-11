import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';

const output = 'reports/week50/02-distance-layout';
await fs.mkdir(output, { recursive: true });
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const results = [];
try {
  for (const width of [360, 768, 1440]) {
    const page = await browser.newPage();
    await page.setCacheEnabled(false);
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    // Do not send test traffic to analytics or any external service.
    await page.setRequestInterception(true);
    page.on('request', request => {
      const url = request.url();
      if (url.startsWith('http://127.0.0.1:3100/') || url.startsWith('data:')) request.continue();
      else request.abort();
    });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto('http://127.0.0.1:3100/distance/delhi-to-agra', { waitUntil: 'networkidle2' });
    assert.equal(response.status(), 200);
    const result = await page.evaluate(() => {
      const facts = document.querySelector('#distance-facts');
      const tables = [...facts.querySelectorAll('tr')].map(row => row.textContent);
      return {
        width: innerWidth, documentWidth: document.documentElement.scrollWidth,
        h1Count: document.querySelectorAll('h1').length,
        ertiga: tables.find(text => text.includes('Ertiga')),
        innova: tables.find(text => text.includes('Innova')),
        formCount: document.querySelectorAll('form').length,
        phoneLinks: document.querySelectorAll('a[href^="tel:"]').length,
        faqCount: document.querySelectorAll('#distance-faqs details').length,
      };
    });
    assert.equal(result.h1Count, 1);
    assert(result.documentWidth <= width + 1, `Overflow at ${width}`);
    assert(result.ertiga?.includes('₹15/km'));
    assert(result.innova?.includes('₹18/km'));
    assert(result.formCount > 0 && result.phoneLinks > 0 && result.faqCount > 0);
    assert.deepEqual(errors, []);
    const facts = await page.$('#distance-facts');
    await facts.screenshot({ path: `${output}/facts-${width}.png` });
    const fares = await page.$('#cab-fares');
    await fares.screenshot({ path: `${output}/fares-${width}.png` });
    results.push({ ...result, errors });
    await page.close();
  }
} finally { await browser.close(); }
await fs.writeFile(`${output}/results.json`, JSON.stringify(results, null, 2));
console.log('PASS: 360/768/1440px; separate Ertiga/Innova rows, forms, phone links and FAQs present; no page errors or document overflow.');
