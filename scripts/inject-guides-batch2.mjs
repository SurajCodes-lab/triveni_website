// Phase 2 backlog — auto-inject Article + Speakable into 30 remaining travel-guide /
// food-tour / shopping-guide pages. Headlines auto-generated from slug pattern.
//
// Idempotent: skips files that already include the helper import.

import { readFileSync, writeFileSync } from 'fs';
import { existsSync } from 'fs';

// Helper: build a high-quality headline + description from slug
function buildMeta(slug) {
  const parts = slug.split('-');
  const lastTwo = parts.slice(-2).join('-');
  const cityRaw = parts.slice(0, parts.length - 2).join(' ');
  const city = cityRaw.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const map = {
    'travel-guide': {
      headline: `${city} Travel Guide 2026 — Attractions, Food, Tips & Itinerary`,
      desc: `Complete ${city} travel guide. Best attractions, food, shopping, monthly weather, transport from major cities, day trips, photography, where to stay. Updated for 2026.`
    },
    'food-tour': {
      headline: `${city} Food Tour 2026 — Best Street Food, Restaurants & Local Specialties`,
      desc: `Complete ${city} food tour. Local specialties, street food trails, best restaurants, dessert spots, regional cuisine highlights, where to eat in ${city}.`
    },
    'shopping-guide': {
      headline: `${city} Shopping Guide 2026 — Markets, Bazaars & What to Buy`,
      desc: `Complete ${city} shopping guide. Best markets, bazaars, what to buy, bargaining tips, local crafts, branded shopping, market timings.`
    }
  };

  return map[lastTwo] || { headline: `${city} Guide 2026`, desc: `${city} travel guide.` };
}

const TARGETS = [
  'amritsar-food-tour', 'amritsar-shopping-guide', 'amritsar-travel-guide',
  'dharamshala-travel-guide',
  'haridwar-food-tour', 'haridwar-travel-guide',
  'jaisalmer-shopping-guide', 'jaisalmer-travel-guide',
  'jodhpur-food-tour', 'jodhpur-shopping-guide', 'jodhpur-travel-guide',
  'kashmir-travel-guide',
  'lucknow-food-tour', 'lucknow-shopping-guide', 'lucknow-travel-guide',
  'manali-travel-guide',
  'mathura-food-tour', 'mathura-vrindavan-travel-guide',
  'mussoorie-travel-guide',
  'nainital-travel-guide',
  'pushkar-food-tour',
  'rishikesh-travel-guide',
  'shimla-shopping-guide', 'shimla-travel-guide',
  'udaipur-food-tour', 'udaipur-shopping-guide', 'udaipur-travel-guide',
  'varanasi-food-tour', 'varanasi-shopping-guide', 'varanasi-travel-guide',
];

let migrated = 0, skipped = 0, failed = [];

for (const slug of TARGETS) {
  const file = `src/app/(routes)/${slug}/page.js`;
  if (!existsSync(file)) { failed.push(`${file}: not found`); continue; }
  let src = readFileSync(file, 'utf8');

  if (src.includes("from '@/lib/seo/speakable-helpers'")) { skipped++; continue; }

  const meta = buildMeta(slug);

  // Add import after first import block
  const importRegex = /^(import [^;]*?;\s*\n)+/m;
  const importMatch = src.match(importRegex);
  if (!importMatch) { failed.push(`${file}: no import block`); continue; }
  const insertAfterImports = importMatch.index + importMatch[0].length;
  const helperImport = `import { getArticleSchema, withSpeakableFAQ } from '@/lib/seo/speakable-helpers';\n`;
  src = src.slice(0, insertAfterImports) + helperImport + src.slice(insertAfterImports);

  // Wrap faqSchema with withSpeakableFAQ if it's plain object literal
  const faqRegex = /(\s+)const faqSchema = (\{[\s\S]*?"@type":\s*"FAQPage"[\s\S]*?\n\s*\};)/;
  const faqMatch = src.match(faqRegex);
  if (faqMatch) {
    const indent = faqMatch[1];
    const inner = faqMatch[2].replace(/;\s*$/, '');
    src = src.replace(faqRegex, `${indent}const faqSchema = withSpeakableFAQ(${inner});`);
  }

  // Add articleSchema constant before `return (`
  const returnRegex = /(\n\s+)return \(\s*\n\s*<>/;
  const articleConst = `\n  // Article schema with auto-fresh dateModified + Speakable for voice search\n` +
    `  const articleSchema = getArticleSchema({\n` +
    `    slug: ${JSON.stringify(slug)},\n` +
    `    headline: ${JSON.stringify(meta.headline)},\n` +
    `    description: ${JSON.stringify(meta.desc)},\n` +
    `    image: '/images/triveni-cabs-og.jpg',\n` +
    `    datePublished: '2026-01-15',\n` +
    `    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']\n` +
    `  });\n`;
  src = src.replace(returnRegex, `${articleConst}$&`);

  // Add <script> tag for articleSchema after faqSchema script tag
  const faqScriptRegex = /(<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(faqSchema\) \}\} \/>)/;
  if (src.match(faqScriptRegex)) {
    src = src.replace(faqScriptRegex, `$1\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />`);
  } else {
    failed.push(`${file}: no faqSchema <script> tag found`);
    continue;
  }

  writeFileSync(file, src);
  migrated++;
  console.log(`OK: ${slug}`);
}

console.log(`\n=== Migrated: ${migrated} | Skipped: ${skipped} | Failed: ${failed.length}`);
if (failed.length) console.log('Failures:\n  ' + failed.join('\n  '));
