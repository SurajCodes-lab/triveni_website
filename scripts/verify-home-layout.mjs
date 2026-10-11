import puppeteer from 'puppeteer-core';
import fs from 'node:fs/promises';

// Launch a dedicated browser; never attach to or stop an existing browser/process.
const base = process.argv[2] || 'http://localhost:3107';
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
});
const results = [];
try {
  await fs.mkdir('reports/home-redesign', { recursive: true });
  for (const width of [360, 390, 768, 1440]) {
    const page = await browser.newPage();
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    await page.goto(base, { waitUntil: 'networkidle2' });
    const result = await page.evaluate(() => ({
      width: innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      h1: [...document.querySelectorAll('h1')].map(el => el.textContent),
      headings: [...document.querySelectorAll('h2')].map(el => el.textContent),
      overflow: [...document.querySelectorAll('main a, main input, main button')]
        .filter(el => {
          const r = el.getBoundingClientRect();
          return r.width > 0 && (r.right > innerWidth + 1 || r.left < -1);
        }).slice(0, 15).map(el => ({ text: el.textContent?.trim(), tag: el.tagName })),
    }));
    // Visit below-fold sections so lazy images appear in the full-page capture.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 800) {
        window.scrollTo(0, y);
        await new Promise(resolve => setTimeout(resolve, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.screenshot({ path: `reports/home-redesign/home-${width}.png`, fullPage: true });
    await page.screenshot({ path: `reports/home-redesign/home-${width}-first-screen.png` });

    const inputs = await page.$$('input[role="combobox"]');
    for (const [i, city] of ['Delhi', 'Agra'].entries()) {
      await inputs[i].type(city);
      await inputs[i].press('ArrowDown');
      await inputs[i].press('Enter');
    }
    await page.click('button[title="Swap cities"]');
    await page.waitForFunction(() => {
      const fields = document.querySelectorAll('input[role="combobox"]');
      return fields[0].value === 'Agra' && fields[1].value === 'Delhi';
    });
    result.swapPassed = true;
    await page.evaluate(() => [...document.querySelectorAll('form button')].find(el => el.textContent.trim() === 'Round Trip').click());
    await page.waitForSelector('input[aria-label="Return date"]');
    result.roundTripFits = await page.evaluate(() => [...document.querySelectorAll('form input')].every(el => {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.left >= 0 && rect.right <= innerWidth + 1;
    }));
    // Editing a selected city must not silently keep the old booking value.
    await inputs[0].type('x');
    await page.click('form button[type="submit"]');
    result.editedCityRejected = await page.evaluate(() => document.querySelector('form').textContent.includes('Select pickup city'));
    result.nativeFaq = await page.evaluate(() => {
      const faq = document.querySelector('details');
      if (!faq) return false;
      faq.querySelector('summary').click();
      return faq.open && Boolean(faq.querySelector('p')?.textContent);
    });
    results.push(result);
    await page.close();
  }
  await fs.writeFile('reports/home-redesign/layout-results.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
  if (results.some(r => r.documentWidth > r.width || r.h1.length !== 1 || r.overflow.length || !r.swapPassed || !r.roundTripFits || !r.editedCityRejected || !r.nativeFaq)) process.exitCode = 1;
} finally {
  await browser.close();
}
