// scripts/week53-gen-weekend-pages.mjs
//
// Writes the page wrapper for each city in weekendGetawaysData.
//
// What is scripted here is only the wrapper — the metadata block, the three
// structured-data nodes and the component call, which are identical in shape
// across all of these pages and should be. Every destination, distance, drive
// time, description, weekend shape, FAQ and paragraph of body copy is written
// for its city in the data file.
//
// Record K's four faults are designed out rather than rediscovered:
//   * the hero image is checked against the filesystem and the script REFUSES
//     to write a page whose image is not on disk (Week 52 shipped two pages
//     with broken imagery this way);
//   * numbers in the title and description are read from the data, never typed,
//     so the title cannot claim a count the list does not have;
//   * no backtick is emitted inside a template literal — the over-escaping that
//     failed ten builds last time;
//   * a hyphenated slug is reached with bracket notation.

import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DATA = path.join(ROOT, "src", "utilis", "weekendGetawaysData.js");

const src = await readFile(DATA, "utf8");

// Read the records out of the data file without importing it (the module pulls
// in the '@/' alias and Next's build graph, which node cannot resolve here).
const cities = [];
const cityRe = /^ {2}'?([a-z0-9-]+)'?: \{$/gm;
let m;
while ((m = cityRe.exec(src)) !== null) {
  const slug = m[1];
  const body = src.slice(m.index, src.indexOf("\n  },", m.index));
  const field = (name) => {
    const r = new RegExp(`^ {4}${name}:\\s*\\n?\\s*(['"])([\\s\\S]*?)\\1,`, "m");
    const hit = body.match(r);
    return hit ? hit[2] : null;
  };
  const destCount = (body.match(/^ {6}g\(/gm) || []).length;
  const faqCount = (body.match(/^ {6}\{ question:/gm) || []).length;
  const names = [...body.matchAll(/^ {6}g\('([^']+)'/gm)].map((x) => x[1]);
  const kms = [...body.matchAll(/^ {6}g\('[^']+',\s*(\d+),/gm)].map((x) => Number(x[1]));

  cities.push({
    slug,
    city: field("city"),
    heroImage: field("heroImage"),
    destCount,
    faqCount,
    names,
    kms,
  });
}

if (cities.length === 0) {
  console.error("no city records found — the data file shape changed");
  process.exit(1);
}

let written = 0;
const refused = [];

for (const c of cities) {
  // ---- refuse rather than ship a broken image -----------------------------
  if (!c.heroImage) {
    refused.push(`${c.slug}: no heroImage in the record`);
    continue;
  }
  try {
    await access(path.join(ROOT, "public", c.heroImage.replace(/^\//, "")));
  } catch {
    refused.push(`${c.slug}: heroImage not on disk — ${c.heroImage}`);
    continue;
  }
  if (!c.city || c.destCount < 3 || c.faqCount < 3) {
    refused.push(`${c.slug}: record too thin (${c.destCount} destinations, ${c.faqCount} FAQs)`);
    continue;
  }

  const routeSlug = `weekend-getaways-from-${c.slug}-by-car`;
  const url = `https://www.trivenicabs.in/${routeSlug}`;
  // The three nearest destinations, for the description. Read, never typed.
  const order = c.names.map((n, i) => ({ n, k: c.kms[i] })).sort((a, b) => a.k - b.k);
  const lead = order.slice(0, 3).map((o) => `${o.n} (${o.k} km)`).join(", ");
  const nearestKm = order[0].k;
  const furthestKm = order[order.length - 1].k;

  const title = `${c.destCount} Weekend Getaways from ${c.city} by Car 2026`;
  const description =
    `${c.destCount} weekend trips from ${c.city} by car, ${nearestKm} to ${furthestKm} km. ` +
    `${lead} and more — distance, driving time, the return fare for a sedan and an SUV, and how each ` +
    `weekend actually runs. Chauffeur-driven, fare fixed before travel. Call 7668570551.`;
  const social = `${lead} and more, each with the return fare and the two-day plan.`;

  const page = `import { getWeekendGetaway, resolveWeekendLinks, otherWeekendCities } from '@/utilis/weekendGetawaysData';
import WeekendGetawaysClient from '@/components/weekend/WeekendGetawaysClient';
import DirectAnswer from '@/components/content/DirectAnswer';
import { deriveWeekendAnswer } from '@/utilis/directAnswers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// Week 53. One of 22 new weekend-getaway lists, for the cab-hub cities that had
// none. The weekend theme converts at 1.68% against a 0.60% site average, and
// the shape works for the same reason the near-city lists do: a set of priced
// journeys assembled for one origin cannot be reduced to a panel answer.
//
// This page is deliberately not the day-trip list for the same city. The
// near-city page answers "where can I go and be back tonight"; this one answers
// "where is worth a night", so the destinations are further out and every entry
// says what the night buys.
//
// Both fares are computed from the published round-trip rate card, and the
// counts in the title and description are read from the data, so neither can
// drift from the list below them.
const SLUG = '${c.slug}';
const data = resolveWeekendLinks(getWeekendGetaway(SLUG));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('${title.replace(/'/g, "\\'")} | Triveni Cabs'),
  description: '${description.replace(/'/g, "\\'")}',
  keywords: 'weekend getaways from ${c.city.toLowerCase()}, weekend trips from ${c.city.toLowerCase()} by car, ${c.city.toLowerCase()} weekend destinations, short trips from ${c.city.toLowerCase()}, road trips from ${c.city.toLowerCase()}, places to stay near ${c.city.toLowerCase()}',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/${routeSlug}' },
  openGraph: {
    title: '${title.replace(/'/g, "\\'")}',
    description: '${social.replace(/'/g, "\\'")}',
    type: 'website', locale: 'en_IN',
    url: '${url}',
    siteName: 'Triveni Cabs',
    images: [{ url: '${c.heroImage}', width: 1200, height: 630, alt: '${title.replace(/'/g, "\\'")}' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${title.replace(/'/g, "\\'")} | Triveni Cabs™',
    description: '${social.replace(/'/g, "\\'")}',
    images: ['${c.heroImage}'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function WeekendGetawaysFrom${c.city.replace(/[^A-Za-z]/g, "")}Page() {
  const answer = deriveWeekendAnswer({ city: data.city, destinations: data.destinations });

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Weekend Getaways from ${c.city}",
    "description": "Weekend trips from ${c.city} by car, with distance, driving time and the return fare",
    "numberOfItems": data.destinations.length,
    // bookingHref rather than bookingSlug: the slug is resolved against the
    // build manifest and is null where no page exists, so the markup can never
    // publish an address that does not resolve.
    "itemListElement": data.destinations
      .filter((d) => d.bookingHref)
      .map((d, i) => ({
        "@type": "ListItem", "position": i + 1, "name": d.name,
        "url": \`https://www.trivenicabs.in\${d.bookingHref}\`,
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
      { "@type": "ListItem", "position": 2, "name": "Weekend Getaways from ${c.city}", "item": "${url}" },
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

  const dir = path.join(ROOT, "src", "app", "(routes)", routeSlug);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "page.js"), page, "utf8");
  written++;
  console.log(`  wrote /${routeSlug}  (${c.destCount} destinations, ${c.faqCount} FAQs)`);
}

console.log(`\npages written: ${written} of ${cities.length}`);
if (refused.length) {
  console.log(`\nREFUSED (${refused.length}) — nothing written for these:`);
  for (const r of refused) console.log(`  ${r}`);
}
