import fs from 'node:fs/promises';
import puppeteer from 'puppeteer-core';
import lighthouse from 'lighthouse';

const base = process.argv[2] || 'http://localhost:3112';
const output = 'reports/distance-redesign';
await fs.mkdir(output, { recursive: true });
const manifest = JSON.parse(await fs.readFile('.next/prerender-manifest.json', 'utf8'));
const routes = Object.keys(manifest.routes).filter(route => route.startsWith('/distance/'));
const inventory = [];
for (const route of routes) {
  const response = await fetch(base + route);
  const html = await response.text();
  const redirected = new URL(response.url).pathname !== route;
  const pass = response.ok && (redirected || (html.includes('id="distance-summary"') && html.includes('id="road-and-stops"') && html.includes('id="distance-faqs"')));
  inventory.push({ route, status: response.status, redirected, pass, htmlBytes: Buffer.byteLength(html) });
}
await fs.writeFile(`${output}/inventory.json`, JSON.stringify(inventory, null, 2));
if (inventory.some(item => !item.pass)) throw Error('Generated guide check failed');
const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const layouts = [];
try {
  for (const route of ['/distance/agra-to-jaipur', '/distance/delhi-to-manali']) {
    for (const width of [360, 768, 1440]) {
      const page = await browser.newPage();
      await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
      await page.goto(base + route, { waitUntil: 'networkidle2' });
      const result = await page.evaluate(() => {
        const main = document.querySelector('main');
        const summary = main.querySelector('#distance-summary');
        const form = main.querySelector('form');
        const hero = main.querySelector('section img');
        return {
          width: innerWidth, documentWidth: document.documentElement.scrollWidth,
          h1Count: main.querySelectorAll('h1').length,
          answerBeforeForm: Boolean(summary && form && (summary.compareDocumentPosition(form) & Node.DOCUMENT_POSITION_FOLLOWING)),
          heroVisible: getComputedStyle(hero).display !== 'none' && hero.naturalWidth > 0,
          stopsHiddenBehindButton: main.textContent.includes('more stops'),
          faqAnswersInHtml: [...main.querySelectorAll('#distance-faqs details p')].every(el => el.textContent.trim().length > 0),
          overflow: [...main.querySelectorAll('a, button, p, h1, h2, h3')].filter(el => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && (r.left < -1 || r.right > innerWidth + 1);
          }).map(el => el.textContent.trim()).slice(0, 10),
        };
      });
      result.route = route;
      await page.screenshot({ path: `${output}/${route.split('/').pop()}-${width}.png` });
      layouts.push(result);
      await page.close();
    }
  }
  const noJs = await browser.newPage();
  await noJs.setJavaScriptEnabled(false);
  await noJs.goto(base + '/distance/agra-to-jaipur');
  await noJs.click('#distance-faqs details summary');
  const faqWorksWithoutJs = await noJs.$eval('#distance-faqs details', el => el.open);
  await noJs.close();
  await fs.writeFile(`${output}/layout-results.json`, JSON.stringify({ layouts, faqWorksWithoutJs }, null, 2));
  console.log(JSON.stringify({ generatedGuides: inventory.length, layouts, faqWorksWithoutJs }));
  if (!faqWorksWithoutJs || layouts.some(r => r.documentWidth > r.width || r.h1Count !== 1 || !r.answerBeforeForm || !r.heroVisible || r.stopsHiddenBehindButton || !r.faqAnswersInHtml || r.overflow.length)) process.exitCode = 1;
  const audit = await lighthouse(base + '/distance/agra-to-jaipur', { port: Number(new URL(browser.wsEndpoint()).port), output: 'json', onlyCategories: ['performance', 'accessibility', 'seo'], logLevel: 'error' });
  await fs.writeFile(`${output}/mobile-lighthouse.json`, audit.report);
  console.log(JSON.stringify({ performance: audit.lhr.categories.performance.score, accessibility: audit.lhr.categories.accessibility.score, seo: audit.lhr.categories.seo.score, lcpMs: audit.lhr.audits['largest-contentful-paint'].numericValue, tbtMs: audit.lhr.audits['total-blocking-time'].numericValue }));
} finally { await browser.close(); }
