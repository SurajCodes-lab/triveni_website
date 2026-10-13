// scripts/week53-gen-nearcity-wave3.mjs
//
// Writes the seven wave-3 near-city page wrappers.
//
// The data module is imported rather than parsed here, because
// placesToVisitWave3.js imports './pricing.js' WITH its extension and so
// resolves under bare Node. That matters: importing gives the generator the
// real computed fares, so the "Sedan from Rs X" figure in each description is
// the rate card's own number rather than one typed by hand.
//
// That check is not theoretical. The wedding pages shipped "from Rs 15,000"
// above a table starting at Rs 12,000, and two circuit titles this week quoted
// a fare that appeared nowhere in their body. Both came from a human typing a
// number next to a computed one.
//
// Run: node scripts/week53-gen-nearcity-wave3.mjs

import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { placesToVisitWave3 } from '../src/utilis/placesToVisitWave3.js';

const ROOT = 'src/app/(routes)';

// One verified hero per city. Checked against disk before anything is written —
// the record-U lesson, where an apostrophe in a filename hid a real image and a
// literal path bypassed the check entirely.
const HERO = {
  dalhousie: '/images/sightseeing/Dalhousie/dalhousie_hero_section.jpg',
  kasol: '/images/sightseeing/Kasol/Kasol_hero_section.jpg',
  mcleodganj: '/images/sightseeing/Dharamshala/McLeod_Ganj.jpg',
  prayagraj: '/images/sightseeing/Prayagraj/Triveni_Sangam.jpg',
  ranthambore: '/images/sightseeing/Ranthambore/Ranthambore_hero_section.jpg',
  srinagar: '/images/sightseeing/Srinagar/Dal_Lake_Shikara.jpg',
  vrindavan: '/images/sightseeing/Mathura_Vrindavan/Prem_Mandir.jpg',
};

const fn = (s) => s.replace(/[^A-Za-z]/g, '');
const num = (s) => Number(String(s).replace(/[^0-9]/g, ''));

let written = 0;
for (const [slug, r] of Object.entries(placesToVisitWave3)) {
  if (slug !== r.slug) throw new Error(`key ${slug} does not match slug ${r.slug}`);
  const hero = HERO[slug];
  if (!hero) throw new Error(`no hero image mapped for ${slug}`);
  if (!existsSync('public' + hero)) throw new Error(`hero missing on disk: public${hero}`);

  const d = r.destinations;
  const n = d.length;
  // The three nearest, which is what somebody scanning a result wants to see.
  const lead = [...d].sort((a, b) => num(a.distance) - num(b.distance)).slice(0, 3);
  const leadStr = lead.map((x) => `${x.name} (${x.distance})`).join(', ');
  // The cheapest sedan fare actually in the list — computed, never typed.
  const from = Math.min(...d.map((x) => num(x.sedanFare)));
  const fromStr = from.toLocaleString('en-IN');
  const path = `/places-to-visit-near-${slug}`;
  const title = `${n} Places to Visit Near ${r.city} by Car`;
  const shortDesc = `${lead.map((x) => x.name).join(', ')} and the rest within reach of ${r.city}, each with the cab fare.`;

  const body = `import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// Week 53, wave 3. One of seven near-city destination lists for cities that had
// a local-taxi page but neither a day-trip list nor a weekend list.
//
// This is the day-trip page: everything on it is back the same evening. The
// weekend page for ${r.city} covers the places where a night buys a morning you
// could not otherwise have, and the two lists are deliberately disjoint except
// where a destination is genuinely both — in which case its entry says which
// of the two is better.
//
// Every fare is computed from the rate card in pricing.js rather than written,
// and the count, the kilometre figures and the "from" fare in the metadata
// below are read from that same data by
// scripts/week53-gen-nearcity-wave3.mjs — so none of them can drift from the
// table on the page.
const data = placesToVisitPages.${slug};
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('${title} | Triveni Cabs'),
  description: \`Best places to visit near ${r.city} by car. ${leadStr} and more. Sedan from Rs ${fromStr}. Distances, drive times and cab fares for each. Call 7668570551.\`,
  keywords: 'places to visit near ${slug}, places near ${slug}, day trips from ${slug}, tourist places near ${slug}, ${slug} nearby places, places to visit near ${slug} by car',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '${path}' },
  openGraph: {
    title: '${title} | Book Cab',
    description: '${shortDesc}',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in${path}',
    siteName: 'Triveni Cabs',
    images: [{ url: '${hero}', width: 1200, height: 630, alt: '${title}' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${title} | Triveni Cabs™',
    description: '${shortDesc}',
    images: ['${hero}'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNear${fn(r.city)}Page() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Places to Visit Near ${r.city}",
    "description": "Top destinations near ${r.city} with distance, drive time and cab fares",
    "numberOfItems": data.destinations.length,
    // listUrl rather than bookingSlug: the slug is resolved against the build
    // manifest and is null where no corridor page exists, so the markup can
    // never publish an address that does not resolve.
    "itemListElement": data.destinations.map((x, i) => ({
      "@type": "ListItem", "position": i + 1, "name": x.name,
      "url": \`https://www.trivenicabs.in\${x.listUrl}\`,
    })),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(f => ({
      "@type": "Question", "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Places to Visit Near ${r.city}", "item": "https://www.trivenicabs.in${path}" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
`;

  const dir = `${ROOT}${path}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/page.js`, body, 'utf8');
  console.log(`  ${path}  ${n} destinations, sedan from Rs ${fromStr}`);
  written += 1;
}

const EXPECTED = 7;
if (written !== EXPECTED) throw new Error(`wrote ${written}, expected ${EXPECTED}`);
console.log(`\nwrote ${written} near-city pages`);
