// scripts/week53-gen-weekend-wave2.mjs
//
// Writes the seven wave-2 weekend page wrappers.
//
// The wrapper is formulaic — the city record carries all the content — but the
// metadata is NOT, because the title and description quote destination names,
// kilometre figures and a count. Those are read from the data module here
// rather than typed, for the reason record U records: a fare quoted in a title
// that was not in the body shipped twice this week before a check caught it.
//
// Run: node scripts/week53-gen-weekend-wave2.mjs

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';

// The data module is PARSED rather than imported. Its own imports are
// extensionless ("./roundTripData"), which webpack resolves and bare Node does
// not, so importing it here fails with ERR_MODULE_NOT_FOUND. Parsing keeps the
// generator dependency-free and still reads the real figures.
const SRC = readFileSync('src/utilis/weekendGetawaysWave2.js', 'utf8');

function parseCities(src) {
  const out = {};
  // Each city block starts at "  <slug>: {" in the exported object.
  const re = /\n {2}([a-z]+): \{\n {4}slug: '([a-z-]+)',\n {4}city: '([^']+)',/g;
  let m;
  const starts = [];
  while ((m = re.exec(src))) starts.push({ key: m[1], slug: m[2], city: m[3], at: m.index });
  starts.forEach((s, i) => {
    const block = src.slice(s.at, i + 1 < starts.length ? starts[i + 1].at : src.length);
    const hero = /heroImage: '([^']+)'/.exec(block);
    // g('Name', km, ...) — the first two arguments are all the metadata needs.
    const dests = [...block.matchAll(/g\('([^']+)', (\d+),/g)].map((d) => ({
      name: d[1],
      km: Number(d[2]),
    }));
    out[s.slug] = {
      slug: s.slug,
      city: s.city,
      heroImage: hero ? hero[1] : null,
      destinations: dests,
    };
  });
  return out;
}

const weekendGetawaysWave2 = parseCities(SRC);

const ROOT = 'src/app/(routes)';

// Refuse rather than guess: every hero image must exist on disk before a page
// quoting it is written. The Week 52 fault that shipped two broken heroes, and
// the record-U apostrophe bug that hid a third, both came from skipping this.
function assertImage(p) {
  const onDisk = 'public' + p;
  if (!existsSync(onDisk)) throw new Error(`hero image missing on disk: ${onDisk}`);
}

const list = (names) =>
  names.length <= 2 ? names.join(' and ') : `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`;

let written = 0;
for (const [slug, r] of Object.entries(weekendGetawaysWave2)) {
  if (slug !== r.slug) throw new Error(`key ${slug} does not match slug ${r.slug}`);
  assertImage(r.heroImage);

  const d = r.destinations;
  const n = d.length;
  const km = d.map((x) => x.km);
  const lo = Math.min(...km);
  const hi = Math.max(...km);
  // The three nearest, which is what somebody scanning a result actually wants.
  const lead = [...d].sort((a, b) => a.km - b.km).slice(0, 3);
  const leadStr = list(lead.map((x) => `${x.name} (${x.km} km)`));
  const path = `/weekend-getaways-from-${slug}-by-car`;
  const title = `${n} Weekend Getaways from ${r.city} by Car 2026`;

  const body = `import { getWeekendGetaway, resolveWeekendLinks, otherWeekendCities } from '@/utilis/weekendGetawaysData';
import WeekendGetawaysClient from '@/components/weekend/WeekendGetawaysClient';
import DirectAnswer from '@/components/content/DirectAnswer';
import { deriveWeekendAnswer } from '@/utilis/directAnswers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// Week 53, wave 2. One of seven weekend lists for cities that had a local-taxi
// page but neither a weekend list nor a day-trip list.
//
// This page is deliberately not the day-trip list for the same city. The
// near-city page answers "where can I go and be back tonight"; this one answers
// "where is worth a night", so every destination here is somewhere a night
// actually buys something — which is why ${r.city}'s closest neighbours are
// absent from it.
//
// Both fares are computed from the published round-trip rate card, and the
// counts and kilometre figures in the title and description are read from the
// data by scripts/week53-gen-weekend-wave2.mjs, so neither can drift from the
// list below them.
const SLUG = '${slug}';
const data = resolveWeekendLinks(getWeekendGetaway(SLUG));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('${title} | Triveni Cabs'),
  description: '${n} weekend trips from ${r.city} by car, ${lo} to ${hi} km. ${leadStr} and more — distance, driving time, the return fare for a sedan and an SUV, and how each weekend actually runs. Chauffeur-driven, fare fixed before travel. Call 7668570551.',
  keywords: 'weekend getaways from ${slug}, weekend trips from ${slug} by car, ${slug} weekend destinations, short trips from ${slug}, road trips from ${slug}, places to stay near ${slug}',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '${path}' },
  openGraph: {
    title: '${title}',
    description: '${leadStr} and more, each with the return fare and the two-day plan.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in${path}',
    siteName: 'Triveni Cabs',
    images: [{ url: '${r.heroImage}', width: 1200, height: 630, alt: '${title}' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${title} | Triveni Cabs™',
    description: '${leadStr} and more, each with the return fare and the two-day plan.',
    images: ['${r.heroImage}'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function WeekendGetawaysFrom${r.city.replace(/[^A-Za-z]/g, '')}Page() {
  const answer = deriveWeekendAnswer({ city: data.city, destinations: data.destinations });

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Weekend Getaways from ${r.city}",
    "description": "Weekend trips from ${r.city} by car, with distance, driving time and the return fare",
    "numberOfItems": data.destinations.length,
    // bookingHref rather than bookingSlug: the slug is resolved against the
    // build manifest and is null where no page exists, so the markup can never
    // publish an address that does not resolve.
    "itemListElement": data.destinations
      .filter((x) => x.bookingHref)
      .map((x, i) => ({
        "@type": "ListItem", "position": i + 1, "name": x.name,
        "url": \`https://www.trivenicabs.in\${x.bookingHref}\`,
      })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Weekend Getaways from ${r.city}", "item": "https://www.trivenicabs.in${path}" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WeekendGetawaysClient
        data={data}
        otherCities={otherWeekendCities(SLUG)}
        shortAnswer={answer ? (
          <DirectAnswer heading={answer.heading} lead={answer.lead} facts={answer.facts} note={answer.note} />
        ) : null}
      />
    </>
  );
}
`;

  const dir = `${ROOT}${path}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/page.js`, body, 'utf8');
  console.log(`  ${path}  ${n} destinations, ${lo}-${hi} km`);
  written += 1;
}

const EXPECTED = 7;
if (written !== EXPECTED) throw new Error(`wrote ${written}, expected ${EXPECTED}`);
console.log(`\nwrote ${written} weekend pages`);
