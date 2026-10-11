import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';
import lighthouse from 'lighthouse';

const base = process.argv[2] || 'http://localhost:3110';
const output = 'reports/round-trip-redesign';
await fs.mkdir(output, { recursive: true });
const manifest = JSON.parse(await fs.readFile('.next/prerender-manifest.json', 'utf8'));
const routes = Object.keys(manifest.routes).filter(route => route.startsWith('/round-trip/'));
const inventory = [];
for (const route of routes) {
  const response = await fetch(base + route);
  const html = await response.text();
  const redirected = new URL(response.url).pathname !== route;
  const pass = response.ok && (redirected || (html.includes('round-trip-fares') && html.includes('round-trip-inclusions') && !html.includes('all-inclusive of fuel, driver and tolls')));
  inventory.push({ route, status: response.status, redirected, pass, htmlBytes: Buffer.byteLength(html) });
}
await fs.writeFile(`${output}/inventory.json`, JSON.stringify(inventory, null, 2));
if (inventory.some(item => !item.pass)) throw Error('Generated route check failed');
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const layouts = [];
try {
  for (const route of ['/round-trip/agra-to-jaipur', '/round-trip/delhi-to-udaipur']) {
    for (const width of [360, 768, 1440]) {
      const page = await browser.newPage();
      await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
      await page.goto(base + route, { waitUntil: 'networkidle2' });
      const result = await page.evaluate(() => {
        const main = document.querySelector('main');
        const itinerary = main.querySelector('#round-trip-itinerary');
        const details = [...main.querySelectorAll('#round-trip-itinerary details')];
        details.forEach(el => { el.open = true; });
        const fare = main.querySelector('#round-trip-fares');
        const heroImage = main.querySelector('section img');
        return {
          width: innerWidth,
          documentWidth: document.documentElement.scrollWidth,
          h1Count: main.querySelectorAll('h1').length,
          fareBeforeItinerary: Boolean(fare && itinerary && (fare.compareDocumentPosition(itinerary) & Node.DOCUMENT_POSITION_FOLLOWING)),
          heroVisible: getComputedStyle(heroImage).display !== 'none' && heroImage.getBoundingClientRect().height > 0,
          itineraryNotClipped: details.every(el => el.scrollHeight <= el.clientHeight + 1),
          overflow: [...main.querySelectorAll('a, button, p, h1, h2, h3')].filter(el => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && (r.left < -1 || r.right > innerWidth + 1);
          }).map(el => el.textContent.trim()).slice(0, 10),
        };
      });
      result.route = route;
      const slug = route.split('/').pop();
      await page.screenshot({ path: `${output}/${slug}-${width}.png` });
      if (width === 360 || width === 1440) {
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 800) {
            window.scrollTo(0, y);
            await new Promise(resolve => setTimeout(resolve, 100));
          }
          window.scrollTo(0, 0);
        });
        await page.screenshot({ path: `${output}/${slug}-${width}-full.png`, fullPage: true });
      }
      layouts.push(result);
      await page.close();
    }
  }
  // Native itinerary must expand even when no client script runs.
  const noJs = await browser.newPage();
  await noJs.setJavaScriptEnabled(false);
  await noJs.goto(base + '/round-trip/delhi-to-udaipur');
  await noJs.click('#round-trip-itinerary details:not([open]) summary');
  const openDays = await noJs.$$eval('#round-trip-itinerary details[open]', els => els.length);
  await noJs.close();
  await fs.writeFile(`${output}/layout-results.json`, JSON.stringify({ layouts, noJsExpandedDays: openDays }, null, 2));
  console.log(JSON.stringify({ generatedRoutes: inventory.length, failures: inventory.filter(r => !r.pass), layouts, noJsExpandedDays: openDays }));
  if (layouts.some(r => r.documentWidth > r.width || r.h1Count !== 1 || !r.fareBeforeItinerary || !r.heroVisible || !r.itineraryNotClipped || r.overflow.length) || openDays < 2) process.exitCode = 1;
  const audit = await lighthouse(base + '/round-trip/agra-to-jaipur', { port: Number(new URL(browser.wsEndpoint()).port), output: 'json', onlyCategories: ['performance', 'accessibility', 'seo'], logLevel: 'error' });
  await fs.writeFile(`${output}/mobile-lighthouse.json`, audit.report);
  console.log(JSON.stringify({ performance: audit.lhr.categories.performance.score, accessibility: audit.lhr.categories.accessibility.score, seo: audit.lhr.categories.seo.score, lcpMs: audit.lhr.audits['largest-contentful-paint'].numericValue, tbtMs: audit.lhr.audits['total-blocking-time'].numericValue }));
} finally {
  await browser.close();
}
