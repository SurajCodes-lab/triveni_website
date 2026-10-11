import puppeteer from 'puppeteer-core';
import lighthouse from 'lighthouse';
import fs from 'node:fs/promises';

const base = process.argv[2] || 'http://localhost:3108';
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
});
try {
  await fs.mkdir('reports/home-redesign', { recursive: true });
  const port = Number(new URL(browser.wsEndpoint()).port);
  for (const [name, route] of [['home', '/'], ['one-way', '/one-way-cab/agra-to-jaipur']]) {
    const result = await lighthouse(`${base}${route}`, {
      port,
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'seo'],
      logLevel: 'error',
    });
    await fs.writeFile(`reports/home-redesign/${name}-mobile-final.json`, result.report);
    const { audits, categories } = result.lhr;
    console.log(JSON.stringify({
      route,
      performance: categories.performance.score * 100,
      accessibility: categories.accessibility.score * 100,
      seo: categories.seo.score * 100,
      lcpMs: audits['largest-contentful-paint'].numericValue,
      tbtMs: audits['total-blocking-time'].numericValue,
      cls: audits['cumulative-layout-shift'].numericValue,
      runtimeError: result.lhr.runtimeError || null,
    }));
  }
} finally {
  // Close only the dedicated browser launched by this script.
  await browser.close();
}
