import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';
const urls = JSON.parse(await fs.readFile('reports/week50/08-ten-pages/urls.json', 'utf8'));
const origin = process.env.CHECK_ORIGIN || 'http://127.0.0.1:3100';
const live = origin.startsWith('https:');
const results = [];
for (const url of urls) {
  const path = new URL(url).pathname;
  const response = await fetch(origin + path);
  const html = await response.text();
  assert.equal(response.status, 200, path);
  for (const marker of ['trip-planning', 'distance-summary', 'distance-facts', 'cab-fares', 'distance-faqs', 'distance-enquiry', 'ga4-lib', 'ga-init', 'analytics-bootstrap', 'gtm-loader', 'google-site-verification']) assert(html.includes(marker), `${path}: ${marker}`);
  assert(html.includes(`rel="canonical" href="${url}"`), path);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
  results.push({ url, status: response.status, planningAndTracking: true });
}
if (!live) {
 const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
 try {
  for (const width of [360,1440]) for (const url of urls) {
   const page = await browser.newPage();
   await page.setViewport({width,height:900});
   await page.setRequestInterception(true);
   page.on('request', r => r.method() === 'GET' && r.url().startsWith(origin + '/') ? r.continue() : r.abort());
   const errors = []; page.on('pageerror', e => errors.push(e.message));
   await page.goto(origin + new URL(url).pathname, {waitUntil:'networkidle2'});
   assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), url);
   assert.equal(await page.$$eval('#trip-planning li', els => els.length), 3);
   const href = await page.$eval('#trip-planning a', el => el.getAttribute('href'));
   const target = new URL(href, page.url());
   assert.equal((await fetch(target)).status,200);
   if (href.startsWith('#')) assert(await page.$(href));
   // Capture analytics locally and prevent navigation only for this event assertion.
   await page.evaluate(() => { window.__events=[]; window.gtag=(...args)=>window.__events.push(args); document.addEventListener('click',e=>e.preventDefault(),{once:true}); });
   await page.click('#trip-planning a');
   const events=await page.evaluate(() => window.__events.filter(e=>e[0]==='event' && e[1]==='click_navigation' && e[2]?.navigation_location==='distance_trip_planning'));
   assert.equal(events.length,1,`navigation event ${url}`);
   assert.deepEqual(errors,[]);
   if (url===urls[0]) await (await page.$('#trip-planning')).screenshot({path:`reports/week50/08-ten-pages/planning-${width}.png`});
   await page.close();
  }
 } finally { await browser.close(); }
}
await fs.writeFile(`reports/week50/08-ten-pages/${live?'live':'local'}-verification.json`,JSON.stringify({checkedAt:new Date().toISOString(),origin,results,browserChecked:!live},null,2));
console.log(`PASS: all ten pages, canonical URLs, sections and tracking markers${live?'':'; 20 browser checks, booking targets and one navigation event per click'}.`);
