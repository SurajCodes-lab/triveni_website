// Bulk-inject Article (auto-fresh dateModified) + HowTo schema into all
// /{destination}-trip-cost-from-delhi pages. They share the same template
// so we can apply uniform schema additions.
//
// Idempotent: skips files that already include the helper import.

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const files = execSync('ls "src/app/(routes)/"*-trip-cost-from-delhi/page.js')
  .toString().trim().split(/\r?\n/).filter(Boolean);

let migrated = 0, skipped = 0, failed = [];

for (const file of files) {
  let src = readFileSync(file, 'utf8');
  if (src.includes("from '@/lib/seo/speakable-helpers'")) { skipped++; continue; }

  // Extract slug from filename
  const slugMatch = file.match(/\(routes\)[\/\\](.*?)[\/\\]page\.js$/);
  if (!slugMatch) { failed.push(`${file}: cannot extract slug`); continue; }
  const slug = slugMatch[1];
  const destination = slug.replace('-trip-cost-from-delhi', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  // Add import
  src = src.replace(
    /import { getTripCostBySlug } from '@\/utilis\/tripCostData';\s*\nimport TripCostClient from '@\/components\/tripcost\/TripCostClient';/,
    `import { getTripCostBySlug } from '@/utilis/tripCostData';\nimport TripCostClient from '@/components/tripcost/TripCostClient';\nimport { getArticleSchema, getHowToSchema } from '@/lib/seo/speakable-helpers';`
  );

  // Replace existing articleSchema with helper-based version
  const oldArticleRegex = /\s+const articleSchema = \{[\s\S]*?"dateModified":\s*"[^"]+"\s*\};/;
  if (!src.match(oldArticleRegex)) { failed.push(`${file}: no articleSchema found`); continue; }

  const newArticleAndHowTo = `
  // Article schema with auto-fresh dateModified + Speakable for voice search
  const articleSchema = getArticleSchema({
    slug: ${JSON.stringify(slug)},
    headline: data.title,
    description: data.metaDescription,
    image: '/images/triveni-cabs-og.jpg',
    datePublished: '2025-01-01',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.cost-table']
  });

  // HowTo schema — "how to budget Delhi to ${destination} trip" (rich snippet target)
  const howToSchema = getHowToSchema({
    name: \`How to Plan Your Delhi to \${${JSON.stringify(destination)}} Trip Budget\`,
    description: \`Step-by-step Delhi to \${${JSON.stringify(destination)}} trip cost calculation: cab fare, accommodation, food, sightseeing. Save 25-40% over packaged tours.\`,
    totalTime: 'PT5M',
    steps: [
      { name: 'Choose your vehicle', text: 'Sedan for 4 passengers, SUV (Innova) for 6, or Tempo Traveller for larger groups. Per-km rate \\u20B911-15. Round trip includes driver allowance + fuel.' },
      { name: 'Add accommodation', text: 'Budget hotels \\u20B91,500-3,000/night, mid-range \\u20B93,500-6,000, luxury \\u20B97,500+. Book direct for 10-15% better rates than aggregator platforms.' },
      { name: 'Budget for food and entries', text: 'Local food \\u20B9300-600/person/day. Monument/sightseeing entries \\u20B950-500 per place. Optional guide \\u20B9800-1,500/day.' },
      { name: 'Account for tolls and extras', text: 'Highway tolls (one-way) \\u20B9200-700. Parking \\u20B9100-300/day. Photography permits, water, tips. Always carry \\u20B92,000-3,000 buffer cash.' },
      { name: 'Total trip cost estimate', text: \`Family of 4, 2-day \${${JSON.stringify(destination)}} trip: approximately \\u20B925,000-45,000 all-inclusive. Sedan + mid-range hotel + meals + entries + fuel + tolls.\` }
    ]
  });`;

  src = src.replace(oldArticleRegex, newArticleAndHowTo);

  // Add HowTo <script> tag after articleSchema script
  const articleScriptRegex = /(<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(articleSchema\) \}\} \/>)/;
  if (src.match(articleScriptRegex)) {
    src = src.replace(articleScriptRegex, `$1\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />`);
  }

  writeFileSync(file, src);
  migrated++;
  console.log(`OK: ${file}`);
}

console.log(`\n=== Migrated: ${migrated} | Skipped: ${skipped} | Failed: ${failed.length}`);
if (failed.length) console.log('Failures:\n  ' + failed.join('\n  '));
