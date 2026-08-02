#!/usr/bin/env node
/**
 * freshness-audit.mjs
 *
 * Surfaces page.js files whose last git commit is older than STALE_DAYS.
 * Used to drive the 90-day refresh cycle from the AEO/GEO standards doc.
 *
 * Usage:  node scripts/freshness-audit.mjs [--days 90] > freshness-queue.csv
 *
 * Output: CSV with file path + age in days, oldest first.
 */

import { execSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const args = process.argv.slice(2);
const daysArg = args.indexOf('--days');
const STALE_DAYS = daysArg >= 0 ? Number(args[daysArg + 1]) : 90;

const ROOT = resolve('src/app');
const NOW = Date.now();

function walk(dir) {
  const out = [];
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const f of entries) {
    if (f === 'node_modules' || f.startsWith('.')) continue;
    const p = join(dir, f);
    let s;
    try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) out.push(...walk(p));
    else if (f === 'page.js' || f === 'page.jsx' || f === 'page.tsx') out.push(p);
  }
  return out;
}

function gitLastCommit(file) {
  try {
    const ts = execSync(`git log -1 --format=%ct -- "${file}"`, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString().trim();
    return ts ? Number(ts) * 1000 : null;
  } catch {
    return null;
  }
}

const stale = [];
for (const file of walk(ROOT)) {
  const lastCommit = gitLastCommit(file);
  if (!lastCommit) continue;
  const ageDays = Math.round((NOW - lastCommit) / 86400000);
  if (ageDays > STALE_DAYS) {
    stale.push({ file: relative(process.cwd(), file).replace(/\\/g, '/'), ageDays });
  }
}

stale.sort((a, b) => b.ageDays - a.ageDays);

console.log('file,age_days');
for (const s of stale) console.log(`${s.file},${s.ageDays}`);
console.error(`\n[freshness-audit] ${stale.length} stale page.js files (> ${STALE_DAYS} days). Refresh top of list first.`);
