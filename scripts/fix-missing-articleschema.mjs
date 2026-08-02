// Fix pages where articleSchema <script> tag was injected but the const
// declaration was skipped because they use compact `return (<>` form.

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

// Find all pages that reference articleSchema in <script> but lack the const declaration
const out = execSync('grep -rl "JSON.stringify(articleSchema)" "src/app/(routes)/"').toString().trim().split(/\r?\n/);

let migrated = 0, skipped = 0, failed = [];

for (const file of out) {
  let src = readFileSync(file, 'utf8');

  // Skip if articleSchema is already declared
  if (src.match(/const articleSchema\s*=/)) { skipped++; continue; }

  // Find the speakable-helpers import — must exist
  if (!src.includes("from '@/lib/seo/speakable-helpers'")) {
    failed.push(`${file}: no speakable-helpers import`);
    continue;
  }

  // Extract slug from path
  const slugMatch = file.match(/\(routes\)[\/\\](.*?)[\/\\]page\.js$/);
  if (!slugMatch) { failed.push(`${file}: cannot extract slug`); continue; }
  const slug = slugMatch[1];

  // Build a generic but informative headline
  const niceName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // Insert const articleSchema = ... before the return statement
  // Match `return (<>` or `return (\n  <>` and inject before it
  const articleConst = `\n  // Article schema with auto-fresh dateModified + Speakable for voice search\n` +
    `  const articleSchema = getArticleSchema({\n` +
    `    slug: ${JSON.stringify(slug)},\n` +
    `    headline: ${JSON.stringify(niceName)},\n` +
    `    description: ${JSON.stringify(niceName + ' — complete travel guide.')},\n` +
    `    image: '/images/triveni-cabs-og.jpg',\n` +
    `    datePublished: '2026-01-15',\n` +
    `    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']\n` +
    `  });\n`;

  // Try multiple return-pattern matches (in priority order)
  const patterns = [
    /(\n\s+)return \(<>/,
    /(\n\s+)return \(\s*\n\s*<>/,
    /(\n\s+)return \(\s*\n/
  ];

  let inserted = false;
  for (const pat of patterns) {
    if (src.match(pat)) {
      src = src.replace(pat, `${articleConst}$&`);
      inserted = true;
      break;
    }
  }

  if (!inserted) {
    failed.push(`${file}: no return( pattern matched`);
    continue;
  }

  writeFileSync(file, src);
  migrated++;
  console.log(`OK: ${slug}`);
}

console.log(`\n=== Migrated: ${migrated} | Skipped: ${skipped} | Failed: ${failed.length}`);
if (failed.length) console.log('Failures:\n  ' + failed.join('\n  '));
