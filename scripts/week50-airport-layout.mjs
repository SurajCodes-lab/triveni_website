import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';
const output = 'reports/week50/06-airport-browser';
await fs.mkdir(output, { recursive: true });
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const results = [];
try {
  for (const width of [360, 1440]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 900 });
    await page.setCacheEnabled(false);
    await page.setRequestInterception(true);
    page.on('request', request => request.method() === 'GET' && request.url().startsWith('http://127.0.0.1:3100/') ? request.continue() : request.abort());
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto('http://127.0.0.1:3100/airport-service/hindon', { waitUntil: 'networkidle2' });
    assert.equal(response.status(), 200);
    await page.type('#airport-enquiry input[name="name"]', 'Test draft');
    const links = await page.$$('a[href="#airport-enquiry"]');
    assert.equal(links.length, 6);
    await links[0].click();
    await page.waitForFunction(() => location.hash === '#airport-enquiry' && document.querySelector('#airport-enquiry').textContent.includes('Request a quote: Hindon to Delhi'));
    assert.equal(await page.$eval('#airport-enquiry input[name="name"]', input => input.value), 'Test draft');
    await links[1].click();
    await page.waitForFunction(() => document.querySelector('#airport-enquiry').textContent.includes('Request a quote: Hindon to Noida'));
    assert.equal(await page.$eval('#airport-enquiry input[name="name"]', input => input.value), 'Test draft');
    const layout = await page.evaluate(() => ({ width: innerWidth, documentWidth: document.documentElement.scrollWidth, h1: document.querySelectorAll('h1').length }));
    assert.equal(layout.h1, 1);
    assert(layout.documentWidth <= width + 1);
    assert.deepEqual(errors, []);
    await (await page.$('#airport-enquiry')).screenshot({ path: `${output}/enquiry-${width}.png` });
    results.push({ ...layout, routeCards: links.length, draftRetained: true, correctRouteContext: true, errors });
    await page.close();
  }
} finally { await browser.close(); }
await fs.writeFile(`${output}/results.json`, JSON.stringify(results, null, 2));
console.log('PASS: airport enquiry links retain all cards and typed draft, update route context, and work at 360/1440px. No leads submitted.');
