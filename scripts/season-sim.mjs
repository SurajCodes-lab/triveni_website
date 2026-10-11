// scripts/season-sim.mjs
//
// Simulates the site-wide seasonal banner and the date-driven "Yatra & Season"
// header menu for every day of the Aug 2026 – Jan 2027 window, so a campaign
// window that is wrong (a label naming a month it outlives, a gap where the
// 40px slot would be empty, a festival promoted after it has happened) is
// caught here rather than by a visitor.
//
//   node scripts/season-sim.mjs            → one line per campaign change
//   node scripts/season-sim.mjs --daily    → one line per day
//
// The banner's CAMPAIGNS array lives in a JSX file, so it is read by regex
// rather than imported. The nav module is plain JS and is imported directly.

import { readFileSync } from 'node:fs';
import { getSeasonalNavItems } from '../src/utilis/seasonalNav.js';

const src = readFileSync(new URL('../src/components/layout/SeasonalBanner.jsx', import.meta.url), 'utf8');
const block = src.match(/const CAMPAIGNS = \[([\s\S]*?)\n\];/);
if (!block) throw new Error('CAMPAIGNS not found');
const campaigns = [];
for (const m of block[1].matchAll(/start:\s*'([^']+)',\s*end:\s*'([^']+)',\s*label:\s*'([^']+)'/g)) {
  campaigns.push({ start: new Date(m[1]), end: new Date(m[2]), label: m[3] });
}
const SEASON_START = new Date('2026-08-01T00:00:00+05:30');
const SEASON_END = new Date('2027-01-15T23:59:59+05:30');

const daily = process.argv.includes('--daily');
let prev = null;
let gaps = 0;
const unsorted = [];
for (let i = 1; i < campaigns.length; i++) {
  if (campaigns[i].end < campaigns[i - 1].end) unsorted.push(`${campaigns[i - 1].label.slice(0, 30)} → ${campaigns[i].label.slice(0, 30)}`);
}
for (let d = new Date(SEASON_START); d <= SEASON_END; d = new Date(d.getTime() + 86400000)) {
  const noon = new Date(d.getTime() + 12 * 3600000);
  const active = campaigns.find((c) => noon >= c.start && noon <= c.end);
  const nav = getSeasonalNavItems(noon).map((i) => i.label.split(' — ')[0]).join(' | ');
  const line = `${noon.toISOString().slice(0, 10)}  ${active ? active.label : '!! EMPTY SLOT'}\n            nav: ${nav}`;
  if (!active) gaps++;
  if (daily || line.split('\n')[0].slice(12) !== (prev || '').split('\n')[0].slice(12)) console.log(line);
  prev = line;
}
console.log(`\ncampaigns: ${campaigns.length}  empty-slot days: ${gaps}`);
if (unsorted.length) {
  console.log('NOTE — entries not in end-ascending order (evergreen fallbacks are expected here):');
  unsorted.forEach((u) => console.log('  ' + u));
}
process.exitCode = gaps ? 1 : 0;
