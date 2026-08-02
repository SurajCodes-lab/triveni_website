// Inject city Place schema into trip-cost pages + travel guides + how-to-reach
// pages where the city slug is in the _CITY_PLACES map. Idempotent.

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

// Pages that should get a Place schema, mapped to their city-slug.
// {filePath, citySlug, idSlug (the URL slug for @id)}
const TARGETS = [];

// 1. All *-trip-cost-from-delhi pages
const tripCosts = execSync('ls "src/app/(routes)/"*-trip-cost-from-delhi/page.js').toString().trim().split(/\r?\n/).filter(Boolean);
for (const f of tripCosts) {
  const slugMatch = f.match(/\(routes\)[\/\\](.*?)[\/\\]page\.js$/);
  if (!slugMatch) continue;
  const idSlug = slugMatch[1];
  const citySlug = idSlug.replace('-trip-cost-from-delhi', '');
  TARGETS.push({ file: f, citySlug, idSlug });
}

// 2. Travel-guide pages
const guides = ['agra-travel-guide', 'jaipur-travel-guide', 'chandigarh-travel-guide', 'amritsar-travel-guide',
  'dharamshala-travel-guide', 'haridwar-travel-guide', 'jaisalmer-travel-guide', 'jodhpur-travel-guide',
  'kashmir-travel-guide', 'lucknow-travel-guide', 'manali-travel-guide', 'mathura-vrindavan-travel-guide',
  'mussoorie-travel-guide', 'nainital-travel-guide', 'rishikesh-travel-guide', 'shimla-travel-guide',
  'udaipur-travel-guide', 'varanasi-travel-guide'];
for (const g of guides) {
  const file = `src/app/(routes)/${g}/page.js`;
  const citySlug = g.replace('-travel-guide', '');
  TARGETS.push({ file, citySlug, idSlug: g });
}

// 3. Food tours
const foods = ['agra-food-tour', 'delhi-food-tour', 'jaipur-food-tour', 'chandigarh-food-tour',
  'amritsar-food-tour', 'haridwar-food-tour', 'jodhpur-food-tour', 'lucknow-food-tour',
  'mathura-food-tour', 'pushkar-food-tour', 'udaipur-food-tour', 'varanasi-food-tour'];
for (const g of foods) {
  const file = `src/app/(routes)/${g}/page.js`;
  const citySlug = g.replace('-food-tour', '');
  TARGETS.push({ file, citySlug, idSlug: g });
}

// 4. Shopping guides
const shops = ['agra-shopping-guide', 'delhi-shopping-guide', 'jaipur-shopping-guide', 'chandigarh-shopping-guide',
  'amritsar-shopping-guide', 'jaisalmer-shopping-guide', 'jodhpur-shopping-guide', 'lucknow-shopping-guide',
  'shimla-shopping-guide', 'udaipur-shopping-guide', 'varanasi-shopping-guide'];
for (const g of shops) {
  const file = `src/app/(routes)/${g}/page.js`;
  const citySlug = g.replace('-shopping-guide', '');
  TARGETS.push({ file, citySlug, idSlug: g });
}

let migrated = 0, skipped = 0, failed = [];

for (const t of TARGETS) {
  let src;
  try { src = readFileSync(t.file, 'utf8'); }
  catch (e) { failed.push(`${t.file}: ${e.code}`); continue; }

  // Idempotency check — skip if Place schema already injected
  if (src.includes('placeSchema = getCityPlaceSchema(')) { skipped++; continue; }

  // Check if speakable-helpers is imported (it should be — these were enriched earlier)
  if (!src.includes("from '@/lib/seo/speakable-helpers'")) {
    failed.push(`${t.file}: speakable-helpers not imported (run earlier scripts first)`);
    continue;
  }

  // Update import to add getCityPlaceSchema if not already present
  if (!src.includes('getCityPlaceSchema')) {
    src = src.replace(
      /import \{ ([^}]+) \} from '@\/lib\/seo\/speakable-helpers';/,
      (m, imports) => {
        if (imports.includes('getCityPlaceSchema')) return m;
        return `import { ${imports.trim()}, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';`;
      }
    );
  }

  // Add placeSchema constant after articleSchema declaration
  const articleConstRegex = /(const articleSchema = getArticleSchema\(\{[\s\S]*?\n\s*\}\);)/;
  if (!src.match(articleConstRegex)) { failed.push(`${t.file}: no articleSchema = getArticleSchema(...) found`); continue; }
  src = src.replace(articleConstRegex, (m) => {
    return m + `\n\n  // Place schema — anchors content to real-world geographic entity\n` +
      `  const placeSchema = getCityPlaceSchema(${JSON.stringify(t.citySlug)}, { idSlug: ${JSON.stringify(t.idSlug)} });`;
  });

  // Add <script> tag for placeSchema after articleSchema script tag
  const articleScriptRegex = /(<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(articleSchema\) \}\} \/>)/;
  if (src.match(articleScriptRegex)) {
    src = src.replace(articleScriptRegex, `$1\n      {placeSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />}`);
  } else {
    failed.push(`${t.file}: no articleSchema <script> tag found`);
    continue;
  }

  writeFileSync(t.file, src);
  migrated++;
}

console.log(`\n=== Migrated: ${migrated} | Skipped: ${skipped} | Failed: ${failed.length}`);
if (failed.length) console.log('Failures:\n  ' + failed.join('\n  '));
