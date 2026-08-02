#!/usr/bin/env node
// Render the sitemap function and check which URLs it actually emits.

import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Just import the sitemap default export and call it.
process.env.NODE_ENV = 'production';

// We need to fake some modules since this is meant to run in next.js.
// Simpler approach: read the sitemap, eval-extract slug arrays + dynamic functions.
import { readFileSync } from 'node:fs';

// Try the simplest method: invoke via Node ESM, but Next.js path aliases will fail.
// So instead, let me just check specific slugs by importing data modules directly.
const checks = [
  ['itinerary', '@/utilis/cityItineraryData', 'getAllItinerarySlugs'],
  ['howToReach', '@/utilis/howToReachRouteData', 'getAllHowToReachSlugs'],
];

for (const [label, modPath, fn] of checks) {
  try {
    const realPath = './' + modPath.replace('@/', 'src/').replace(/$/, '.js');
    const url = pathToFileURL(realPath).href;
    const m = await import(url);
    const slugs = m[fn]();
    console.log(`${label} (${slugs.length} slugs):`);
    for (const s of slugs.slice(0, 5)) console.log(`  - ${s}`);
    if (slugs.length > 5) console.log(`  ... and ${slugs.length - 5} more`);
  } catch (e) {
    console.log(`${label}: ERROR ${e.message}`);
  }
}
