// Inject Article + Speakable schemas into guide pages.
// Idempotent: skips files already containing the helper import.
//
// Each target supplies: slug, headline, image, datePublished, type (Article/BlogPosting)
// The helper import line is added after first `import` statement.
// The article schema constant is added after `const faqSchema = ...` (or before return()).
// The script tag is added after the existing faqSchema script tag.

import { readFileSync, writeFileSync } from 'fs';
import { existsSync } from 'fs';

const TARGETS = [
  // DELHI
  { file: 'src/app/(routes)/delhi-food-tour/page.js', slug: 'delhi-food-tour', headline: 'Delhi Food Tour 2026 — Best Street Food, Restaurants & Markets', desc: 'Complete Delhi food tour guide. Chandni Chowk, Connaught Place, Old Delhi parathas, kebabs at Karim Hotel, chaat at UPSC, regional cuisines, food walks.', image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg', datePublished: '2026-01-15' },
  { file: 'src/app/(routes)/delhi-shopping-guide/page.js', slug: 'delhi-shopping-guide', headline: 'Delhi Shopping Guide 2026 — Markets, Bargains & What to Buy', desc: 'Complete Delhi shopping guide. Chandni Chowk, Sarojini Nagar, Khan Market, Janpath, Dilli Haat. Bargaining tips, what to buy, market timings.', image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg', datePublished: '2026-01-15' },
  { file: 'src/app/(routes)/delhi-beyond-red-fort/page.js', slug: 'delhi-beyond-red-fort', headline: 'Delhi Beyond Red Fort — 15 Hidden Gems & Offbeat Attractions 2026', desc: 'Discover Delhi beyond the Red Fort. Hauz Khas, Lodhi Gardens, Mehrauli Archaeological Park, Sunder Nursery, Bangla Sahib at dawn, Akshardham, food walks.', image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg', datePublished: '2026-01-15' },

  // AGRA
  { file: 'src/app/(routes)/agra-travel-guide/page.js', slug: 'agra-travel-guide', headline: 'Agra Travel Guide 2026 — Taj Mahal, Fort, Food & Tips', desc: 'Complete Agra travel guide. Taj Mahal sunrise, Agra Fort, Fatehpur Sikri, Mehtab Bagh, food, shopping, where to stay, photography spots, monthly weather.', image: '/images/sightseeing/Agra/Agra_Hero_section.jpg', datePublished: '2026-01-15' },
  { file: 'src/app/(routes)/agra-food-tour/page.js', slug: 'agra-food-tour', headline: 'Agra Food Tour 2026 — Petha, Chaat, Mughlai & Best Restaurants', desc: 'Complete Agra food tour. Petha sweet shops, chaat trails, Mughlai non-veg, Sadar Bazaar street food, top restaurants near Taj Mahal.', image: '/images/sightseeing/Agra/Agra_Hero_section.jpg', datePublished: '2026-01-15' },
  { file: 'src/app/(routes)/agra-shopping-guide/page.js', slug: 'agra-shopping-guide', headline: 'Agra Shopping Guide 2026 — Marble Inlay, Leather, Petha, Bargains', desc: 'Complete Agra shopping guide. Marble inlay handicrafts, leather, zari embroidery, Petha sweets. Sadar Bazaar, Kinari Bazaar, government emporiums vs private shops.', image: '/images/sightseeing/Agra/Agra_Hero_section.jpg', datePublished: '2026-01-15' },
  { file: 'src/app/(routes)/agra-beyond-taj-mahal/page.js', slug: 'agra-beyond-taj-mahal', headline: 'Agra Beyond Taj Mahal — 15 Hidden Attractions & Day Trips 2026', desc: 'Agra beyond the Taj. Itmad-ud-Daulah, Mehtab Bagh, Akbar tomb, Tomb of Mariam, Chini Ka Rauza, Wildlife SOS, day trips to Fatehpur Sikri & Bharatpur.', image: '/images/sightseeing/Agra/Agra_Hero_section.jpg', datePublished: '2026-01-15' },

  // JAIPUR
  { file: 'src/app/(routes)/jaipur-food-tour/page.js', slug: 'jaipur-food-tour', headline: 'Jaipur Food Tour 2026 — Dal Baati, Laal Maas, Pyaaz Kachori', desc: 'Complete Jaipur food tour. Dal Baati Churma, Laal Maas, Pyaaz Kachori at Rawat Mishtan Bhandar, Ghewar, royal Rajasthani thalis. Best restaurants & street food.', image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg', datePublished: '2026-01-15' },
  { file: 'src/app/(routes)/jaipur-shopping-guide/page.js', slug: 'jaipur-shopping-guide', headline: 'Jaipur Shopping Guide 2026 — Gemstones, Block Print, Mojari, Bandhani', desc: 'Complete Jaipur shopping guide. Johari Bazaar gemstones, Sanganer block prints, Tripolia Bazaar lac bangles, Bapu Bazaar Mojari shoes, blue pottery, miniature paintings.', image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg', datePublished: '2026-01-15' },
  { file: 'src/app/(routes)/jaipur-beyond-hawa-mahal/page.js', slug: 'jaipur-beyond-hawa-mahal', headline: 'Jaipur Beyond Hawa Mahal — 8 Hidden Gems & Offbeat Attractions 2026', desc: 'Jaipur beyond Hawa Mahal. Galta Ji Monkey Temple, Patrika Gate, Anokhi Museum, Sambhar Lake, Bhangarh Fort, Chand Baori. Hidden corners of Pink City.', image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg', datePublished: '2026-01-15' },

  // CHANDIGARH
  { file: 'src/app/(routes)/weekend-getaways-from-chandigarh-by-car/page.js', slug: 'weekend-getaways-from-chandigarh-by-car', headline: 'Weekend Getaways from Chandigarh by Car — 18 Best Destinations 2026', desc: 'Best weekend getaways from Chandigarh by car. Kasauli, Shimla, Manali, Dharamshala, Dalhousie, Khajjiar, Amritsar, Kasol. Distance, cost, best time.', image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', datePublished: '2026-01-15' },
];

let migrated = 0, skipped = 0, failed = [];

for (const t of TARGETS) {
  if (!existsSync(t.file)) { failed.push(`${t.file}: not found`); continue; }
  let src = readFileSync(t.file, 'utf8');

  if (src.includes("from '@/lib/seo/speakable-helpers'")) {
    skipped++;
    continue;
  }

  // 1. Add import line — find first `import` and append after the topmost block
  const importRegex = /^(import [^;]*?;\s*\n)+/m;
  const importMatch = src.match(importRegex);
  if (!importMatch) { failed.push(`${t.file}: no import block`); continue; }
  const insertAfterImports = importMatch.index + importMatch[0].length;
  const helperImport = `import { getArticleSchema, withSpeakableFAQ } from '@/lib/seo/speakable-helpers';\n`;
  src = src.slice(0, insertAfterImports) + helperImport + src.slice(insertAfterImports);

  // 2. Find faqSchema declaration and wrap with withSpeakableFAQ if it's plain object literal
  const faqRegex = /(\s+)const faqSchema = (\{[\s\S]*?"@type":\s*"FAQPage"[\s\S]*?\n\s*\};)/;
  const faqMatch = src.match(faqRegex);
  if (faqMatch) {
    const indent = faqMatch[1];
    const inner = faqMatch[2].replace(/;\s*$/, '');
    src = src.replace(faqRegex, `${indent}const faqSchema = withSpeakableFAQ(${inner});`);
  }

  // 3. Add articleSchema constant before `return (` JSX block
  const returnRegex = /(\n\s+)return \(\s*\n\s*<>/;
  const articleConst = `\n  // Article schema with auto-fresh dateModified + Speakable for voice search\n` +
    `  const articleSchema = getArticleSchema({\n` +
    `    slug: ${JSON.stringify(t.slug)},\n` +
    `    headline: ${JSON.stringify(t.headline)},\n` +
    `    description: ${JSON.stringify(t.desc)},\n` +
    `    image: ${JSON.stringify(t.image)},\n` +
    `    datePublished: ${JSON.stringify(t.datePublished)},\n` +
    `    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']\n` +
    `  });\n`;
  src = src.replace(returnRegex, `${articleConst}$&`);

  // 4. Add <script> tag for articleSchema after faqSchema script tag
  const faqScriptRegex = /(<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(faqSchema\) \}\} \/>)/;
  if (src.match(faqScriptRegex)) {
    src = src.replace(faqScriptRegex, `$1\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />`);
  } else {
    failed.push(`${t.file}: no faqSchema <script> tag found`);
    continue;
  }

  writeFileSync(t.file, src);
  migrated++;
  console.log(`OK: ${t.file}`);
}

console.log(`\n=== Migrated: ${migrated} | Skipped: ${skipped} | Failed: ${failed.length}`);
if (failed.length) console.log('Failures:\n  ' + failed.join('\n  '));
