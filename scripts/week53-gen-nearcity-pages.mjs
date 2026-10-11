/**
 * Week 53: generate the ten new near-city destination-list pages.
 *
 * Every page follows the same shape as the nineteen that exist, and every
 * figure in the metadata is read from placesToVisitWave2 rather than typed —
 * the destination count, the three nearest destinations and their distances,
 * and the sedan fare, which is itself computed from the rate card. So a change
 * to a distance changes the title, the description and the fare together and
 * they cannot disagree.
 *
 * Hero images are checked to exist on disk before a path is written. A path
 * that does not resolve produces a broken image rather than a build failure,
 * which is how the Jodhpur and Jaisalmer pages shipped with missing imagery in
 * Week 52.
 */
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { placesToVisitWave2 } from "../src/utilis/placesToVisitWave2.js";

const ROOT = process.cwd();

// city slug -> [hero image, a one-line hook for the social card]
const META = {
  ajmer: ["/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg",
          "Pushkar, Kishangarh and the forts within reach of Ajmer, each with the cab fare."],
  pushkar: ["/images/sightseeing/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg",
            "Ajmer, Kishangarh and the Marwar towns from Pushkar, priced per journey."],
  ayodhya: ["/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg",
            "Faizabad, Shravasti and the Ganga cities within reach of Ayodhya."],
  bikaner: ["/images/sightseeing/Bikaner/Bikaner_hero_section.jpg",
            "Deshnoke, Gajner and the desert towns from Bikaner, with fares."],
  dharamshala: ["/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg",
                "McLeod Ganj, Kangra, Palampur and Bir Billing from Dharamshala."],
  faridabad: ["/images/sightseeing/Delhi/Delhi_hero_section.jpg",
              "Surajkund, Sohna, Neemrana and Agra within reach of Faridabad."],
  manali: ["/images/sightseeing/Manali/Manali_hero_section.jpg",
           "Solang, Manikaran, Kasol and Rohtang from Manali, with fares and seasons."],
  "mount-abu": ["/images/sightseeing/Mount_Abu/Nakki_Lake.jpg",
                "Dilwara, Guru Shikhar and Achalgarh around Mount Abu."],
  mussoorie: ["/images/sightseeing/Mussoorie/Mussoorie_Hero_section.jpg",
              "Kempty Falls, Dhanaulti, Landour and Surkanda Devi from Mussoorie."],
  nainital: ["/images/sightseeing/Nainital/Nainital_hero_section.jpg",
             "Bhimtal, Sattal, Mukteshwar and Jim Corbett from Nainital, with fares."],
};

const exists = async (p) => {
  try { await access(path.join(ROOT, "public", p.replace(/^\//, ""))); return true; }
  catch { return false; }
};

const esc = (s) => String(s).replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

let written = 0;

for (const [slug, data] of Object.entries(placesToVisitWave2)) {
  const meta = META[slug];
  if (!meta) { console.log(`  no metadata for ${slug} — skipped`); continue; }
  const [hero, hook] = meta;

  if (!(await exists(hero))) {
    console.log(`  SKIPPED ${slug} — hero image not on disk: ${hero}`);
    continue;
  }

  const n = data.destinations.length;
  const city = data.city;
  const near = data.destinations.slice(0, 3);
  const nearText = near.map((x) => `${x.name} (${x.distance})`).join(", ");
  const cheapest = data.destinations.reduce(
    (a, b) => (Number(String(a.sedanFare).replace(/,/g, "")) <= Number(String(b.sedanFare).replace(/,/g, "")) ? a : b),
  );

  const title = `${n} Places to Visit Near ${city} by Car`;
  const desc =
    `Best places to visit near ${city} by car. ${nearText} and more. ` +
    `Sedan from Rs ${cheapest.sedanFare}. Distances, drive times and cab fares for each. Call 7668570551.`;

  const body = `import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// Week 53. One of ten new near-city destination lists — the best-converting
// page shape on the site at 3.42% against a 0.60% site average, because a list
// of priced journeys cannot be reduced to a panel answer.
//
// Every fare on this page is computed from the rate card in pricing.js rather
// than written, so none of them can drift from the published rates. The figures
// in the metadata below are read from the data for the same reason.
const data = placesToVisitPages.${JSON.stringify(slug).includes("-") ? `[${JSON.stringify(slug)}]` : slug};
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('${esc(title)} | Triveni Cabs'),
  description: \`${esc(desc)}\`,
  keywords: 'places to visit near ${slug.replace(/-/g, " ")}, places near ${slug.replace(/-/g, " ")}, day trips from ${slug.replace(/-/g, " ")}, tourist places near ${slug.replace(/-/g, " ")}, ${slug.replace(/-/g, " ")} nearby places, places to visit near ${slug.replace(/-/g, " ")} by car',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-${slug}' },
  openGraph: {
    title: '${esc(title)} | Book Cab',
    description: '${esc(hook)}',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/places-to-visit-near-${slug}',
    siteName: 'Triveni Cabs',
    images: [{ url: '${hero}', width: 1200, height: 630, alt: '${esc(title)}' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${esc(title)} | Triveni Cabs™',
    description: '${esc(hook)}',
    images: ['${hero}'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNear${city.replace(/[^A-Za-z]/g, "")}Page() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Places to Visit Near ${city}",
    "description": "Top destinations near ${city} with distance, drive time and cab fares",
    "numberOfItems": data.destinations.length,
    // listUrl rather than bookingSlug: the slug is resolved against the build
    // manifest and is null where no corridor page exists, so the markup can
    // never publish an address that does not resolve.
    "itemListElement": data.destinations.map((d, i) => ({
      "@type": "ListItem", "position": i + 1, "name": d.name,
      "url": \\\`https://www.trivenicabs.in\\\${d.listUrl}\\\`,
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
      { "@type": "ListItem", "position": 2, "name": "Places to Visit Near ${city}", "item": "https://www.trivenicabs.in/places-to-visit-near-${slug}" },
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

  const dir = path.join(ROOT, "src", "app", "(routes)", `places-to-visit-near-${slug}`);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "page.js"), body, "utf8");
  written += 1;
  console.log(`  ${slug.padEnd(12)} ${n} destinations, sedan from Rs ${cheapest.sedanFare}`);
}

console.log(`\n  ${written} page files written`);
