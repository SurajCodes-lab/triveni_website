/**
 * Lighthouse CI config for Triveni Cabs.
 *
 * Two ways to run audits:
 *  1. Single-page CLI (installed `lighthouse` devDep, no extra install):
 *       npm run lh:home      # live homepage
 *       npm run lh:city      # live /delhi city hub
 *       npm run lh:vehicle   # live /12-seater-tempo-traveller
 *       npm run lh:local     # localhost:3000 (pre-deploy) — run `npm run build && npm start` first
 *       npm run lh:all       # all three live pages
 *     These write HTML+JSON to ./reports/<name>.report.{html,json} and apply
 *     the resource-size budget in ./lighthouse-budget.json.
 *
 *  2. Lighthouse CI (ad-hoc via npx, asserts the metric thresholds below):
 *       npx @lhci/cli autorun --collect.url=https://www.trivenicabs.in
 *     This file is the LHCI config — `collect`, `assert`, and `upload` blocks.
 *
 * CHROME_PATH: Lighthouse needs a Chrome binary. On this Windows machine:
 *       set CHROME_PATH=C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe
 *     (or $env:CHROME_PATH on PowerShell). Lighthouse auto-detects most installs.
 *
 * Metric thresholds below are the ranking/LCP-uplift targets (lab):
 *   LCP ≤ 2.5s, TBT ≤ 200ms, CLS ≤ 0.1, FCP ≤ 1.8s. 'warn' (not 'error') so a
 *   failing run still reports — change to 'error' to gate CI/deploy.
 */
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
        onlyCategories: ['performance', 'seo'],
        chromeFlags: '--headless=new --no-sandbox --disable-gpu',
      },
    },
    assert: {
      assertions: {
        // Core Web Vitals — the field-ranking proxies (lab here, field via WebVitalsReporter).
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 200 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 1800 }],
        // SEO category must stay perfect.
        'categories:seo': ['warn', { minScore: 1 }],
        // Performance category floor.
        'categories:performance': ['warn', { minScore: 0.7 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};