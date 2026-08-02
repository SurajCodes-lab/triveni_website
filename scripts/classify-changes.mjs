#!/usr/bin/env node
// Classify what changed for each modified file: title trim, desc trim,
// twitter add, image fix, sitemap add, etc.

import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

function git(cmd) {
  try { return execSync(cmd, { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }); }
  catch { return ''; }
}

const files = git('git diff --name-only HEAD').split('\n').filter(Boolean).filter(f => !f.startsWith('warning'));

const classifications = {};

for (const f of files) {
  const diff = git(`git diff HEAD -- "${f}"`);
  const lines = diff.split('\n');
  const tags = new Set();

  for (const line of lines) {
    if (line.startsWith('-') && !line.startsWith('---')) {
      const removed = line.slice(1);
      // Title trim signal
      if (/title\s*:\s*['"`].*\| Triveni Cabs/i.test(removed)) tags.add('STRIP_TRIVENI_SUFFIX');
      else if (/^\s*title\s*:\s*['"`]/.test(removed) && removed.length > 80) tags.add('TITLE_TRIM');
      // Description trim
      if (/description\s*:\s*['"`]/.test(removed) && removed.length > 180) tags.add('DESC_TRIM');
      // Image fix
      if (/(taj-mahal-hero|jaipur-hero|delhi-hero|lucknow-hero|manali-hero|udaipur-hero|varanasi-hero|haridwar-hero|jaisalmer-hero|jodhpur-hero|kashmir-hero|mathura-vrindavan-hero|mussoorie-hero|nainital-hero|rishikesh-hero|shimla-hero|dharamshala-hero|Ayodhya_Hero_section)\.jpg/i.test(removed)) tags.add('IMAGE_PATH_FIX');
    }
    if (line.startsWith('+') && !line.startsWith('+++')) {
      const added = line.slice(1);
      if (/twitter:\s*\{/.test(added) || added.trim().startsWith('twitter: {')) {
        tags.add('TWITTER_CARD_ADD');
      }
      if (/canonical/i.test(added) && /alternates/.test(added)) tags.add('CANONICAL_ADD');
    }
  }

  // Sitemap.js separately
  if (f === 'src/app/sitemap.js') tags.add('SITEMAP_EXPANSION');
  // Factory edits
  if (f === 'src/utilis/airportOutstationData.js') tags.add('FACTORY_EDIT_AIRPORT_ROUTES');
  if (/Blogs?\.js$|Data\.js$|Tours?\.js$/.test(f) && !f.endsWith('airportOutstationData.js')) tags.add('DATA_FILE_TRIM');

  classifications[f] = [...tags];
}

writeFileSync('scripts/change-classifications.json', JSON.stringify(classifications, null, 2));

const counts = {};
for (const tags of Object.values(classifications)) {
  for (const t of tags) counts[t] = (counts[t] || 0) + 1;
}
console.log('Change type counts:');
for (const [t, c] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${t.padEnd(35)} ${c}`);
}
console.log(`\nTotal classified files: ${Object.keys(classifications).length}`);
console.log('Untagged files:');
const untagged = Object.entries(classifications).filter(([f, t]) => t.length === 0);
console.log(`  ${untagged.length} files with no detected change type`);
for (const [f] of untagged.slice(0, 10)) console.log(`    ${f}`);
