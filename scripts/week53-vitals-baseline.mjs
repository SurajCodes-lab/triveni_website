/**
 * Week 53: the first measurement of layout stability and main-thread blocking
 * on this site.
 *
 * Largest paint has been measured repeatedly. Cumulative layout shift and
 * interaction responsiveness never have, and both are ranking signals. This
 * closes that gap with a baseline rather than a fix.
 *
 * What is measured and why:
 *
 *   CLS  — real PerformanceObserver layout-shift entries, excluding those
 *          following recent input, which is how the metric is defined. The
 *          page is scrolled to the bottom first, because most shift on a long
 *          page happens as lazy content arrives below the fold and a
 *          measurement that never scrolls reports a flattering zero.
 *
 *   TBT  — total blocking time: the part of every long task beyond 50ms. This
 *          is the lab proxy for interaction responsiveness. True INP needs a
 *          real interaction from a real visitor, so it cannot be measured
 *          here; TBT is what predicts it.
 *
 *   The worst shifting element is captured too, because a CLS figure with no
 *   culprit is not actionable.
 *
 * Throttled to a mid-range phone on a slow connection, which is the case the
 * site should be designed for and the one Google's field data skews toward.
 */
import { writeFile } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const CHROME = process.env.CHROME_PATH
  || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = process.env.BASE_URL || "https://www.trivenicabs.in";
const OUT = "D:/Desktop/triveni_next/2.0/week53/measurement/vitals-baseline.json";

// One page per family, matching the families used by the Week 52 audits so the
// figures sit alongside the existing layout measurements.
const PAGES = [
  ["Home", "/"],
  ["City hub", "/jaipur"],
  ["Corridor / route", "/delhi-to-agra"],
  ["Distance", "/distance/delhi-to-agra"],
  ["Toll", "/toll-cost/delhi-to-dehradun"],
  ["One-way cab", "/one-way-cab/delhi-to-dehradun"],
  ["Near-city list", "/places-to-visit-near-noida"],
  ["Weekend", "/weekend-getaways-from-delhi-by-car"],
  ["Wedding", "/wedding/lucknow"],
  ["Corporate", "/corporate-transportation-service/delhi"],
  ["Guide / blog", "/blog/akshardham-temple-delhi-guide-2026"],
  ["Sightseeing", "/sightseeing/rishikesh"],
  ["Religious tours", "/religious-tours/char-dham-yatra"],
  ["Group vehicle", "/tempo-traveller/delhi-to-rishikesh"],
  ["Airport", "/airport-service/delhi"],
  ["Pricing", "/pricing"],
  ["Fare calculator", "/fare-calculator"],
];

const RUNS = Number(process.env.RUNS || 3);
const median = (a) => {
  const s = [...a].sort((x, y) => x - y);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
};

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const results = [];

try {
  for (const [family, path] of PAGES) {
    const runs = [];
    for (let i = 0; i < RUNS; i += 1) {
      const page = await browser.newPage();
      try {
        await page.setViewport({ width: 360, height: 800, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
        const client = await page.target().createCDPSession();
        await client.send("Network.enable");
        await client.send("Emulation.setCPUThrottlingRate", { rate: 4 });
        await client.send("Network.emulateNetworkConditions", {
          offline: false,
          latency: 150,
          downloadThroughput: (1.6 * 1024 * 1024) / 8,
          uploadThroughput: (750 * 1024) / 8,
        });

        // Collect before any navigation so nothing is missed.
        await page.evaluateOnNewDocument(() => {
          window.__vitals = { cls: 0, shifts: [], longTasks: [], lcp: 0 };
          try {
            new PerformanceObserver((l) => {
              for (const e of l.getEntries()) {
                // The metric definition excludes shifts within 500ms of input.
                if (e.hadRecentInput) continue;
                window.__vitals.cls += e.value;
                const src = (e.sources || [])
                  .map((s) => {
                    const n = s.node;
                    if (!n || !n.tagName) return null;
                    const cls = typeof n.className === "string" ? n.className.slice(0, 60) : "";
                    return `${n.tagName.toLowerCase()}${cls ? "." + cls.trim().split(/\s+/).slice(0, 2).join(".") : ""}`;
                  })
                  .filter(Boolean);
                window.__vitals.shifts.push({ value: e.value, sources: src });
              }
            }).observe({ type: "layout-shift", buffered: true });
          } catch {}
          try {
            new PerformanceObserver((l) => {
              for (const e of l.getEntries()) window.__vitals.lcp = e.startTime;
            }).observe({ type: "largest-contentful-paint", buffered: true });
          } catch {}
          try {
            new PerformanceObserver((l) => {
              for (const e of l.getEntries()) {
                window.__vitals.longTasks.push({ start: e.startTime, duration: e.duration });
              }
            }).observe({ type: "longtask", buffered: true });
          } catch {}
        });

        await page.goto(`${BASE}${path}`, { waitUntil: "networkidle2", timeout: 120000 });

        // Most shift on a long page happens as content below the fold arrives.
        await page.evaluate(async () => {
          const step = Math.round(window.innerHeight * 0.8);
          const end = document.body.scrollHeight;
          for (let y = 0; y < end; y += step) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 120));
          }
          window.scrollTo(0, 0);
          await new Promise((r) => setTimeout(r, 400));
        });

        const v = await page.evaluate(() => {
          const t = window.__vitals;
          const tbt = t.longTasks.reduce((s, x) => s + Math.max(0, x.duration - 50), 0);
          const worst = [...t.shifts].sort((a, b) => b.value - a.value)[0] || null;
          return {
            cls: Number(t.cls.toFixed(4)),
            lcp: Math.round(t.lcp),
            tbt: Math.round(tbt),
            longTasks: t.longTasks.length,
            longestTask: Math.round(Math.max(0, ...t.longTasks.map((x) => x.duration))),
            shiftCount: t.shifts.length,
            worstShift: worst ? { value: Number(worst.value.toFixed(4)), sources: worst.sources } : null,
            screens: Number((document.body.scrollHeight / window.innerHeight).toFixed(1)),
          };
        });
        runs.push(v);
      } finally {
        await page.close();
      }
    }

    const pick = (k) => median(runs.map((r) => r[k]));
    const worst = runs.map((r) => r.worstShift).filter(Boolean).sort((a, b) => b.value - a.value)[0] || null;
    const row = {
      family,
      path,
      cls: Number(pick("cls").toFixed(4)),
      lcp: Math.round(pick("lcp")),
      tbt: Math.round(pick("tbt")),
      longTasks: Math.round(pick("longTasks")),
      longestTask: Math.round(pick("longestTask")),
      shiftCount: Math.round(pick("shiftCount")),
      screens: runs[0].screens,
      worstShift: worst,
      // Google's thresholds: CLS good at or under 0.1, poor over 0.25.
      clsVerdict: pick("cls") <= 0.1 ? "good" : pick("cls") <= 0.25 ? "needs work" : "poor",
      // TBT is a lab proxy; good under 200ms, poor over 600ms.
      tbtVerdict: pick("tbt") < 200 ? "good" : pick("tbt") <= 600 ? "needs work" : "poor",
    };
    results.push(row);
    console.log(
      `  ${family.padEnd(20)} CLS ${String(row.cls).padEnd(7)} ${row.clsVerdict.padEnd(11)}` +
      ` TBT ${String(row.tbt + "ms").padEnd(8)} ${row.tbtVerdict.padEnd(11)}` +
      ` LCP ${row.lcp}ms`,
    );
  }
} finally {
  await browser.close();
}

const summary = {
  createdAt: new Date().toISOString(),
  base: BASE,
  conditions: "360x800 mobile, 4x CPU throttle, ~1.6Mbps / 150ms latency",
  runsPerPage: RUNS,
  note: "CLS and TBT measured for the first time on this site. TBT is the lab proxy for interaction responsiveness; true INP needs field data.",
  thresholds: { cls: { good: 0.1, poor: 0.25 }, tbt: { good: 200, poor: 600 } },
  rows: results,
};
await writeFile(OUT, JSON.stringify(summary, null, 2), "utf8");

const poorCls = results.filter((r) => r.clsVerdict !== "good");
const poorTbt = results.filter((r) => r.tbtVerdict !== "good");
console.log(`\n  pages measured:        ${results.length}`);
console.log(`  CLS outside "good":    ${poorCls.length}  ${poorCls.map((r) => r.family).join(", ") || "none"}`);
console.log(`  TBT outside "good":    ${poorTbt.length}  ${poorTbt.map((r) => r.family).join(", ") || "none"}`);
console.log(`\n  written: ${OUT}`);
