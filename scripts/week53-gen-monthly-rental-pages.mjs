// scripts/week53-gen-monthly-rental-pages.mjs
//
// Writes the page wrapper for each city in monthlyRentalCityData.
//
// Same division as the weekend generator: the wrapper is scripted because it is
// identical in shape across all nineteen, and every researched fact lives in the
// data file.
//
// The refusals carried forward from record K, plus one added after the weekend
// generator silently skipped mount-abu:
//   * the hero image is checked on disk and the script REFUSES to write a page
//     whose image is missing;
//   * a record missing any of the five local fields is refused rather than
//     shipped thin;
//   * the city-key regex accepts a quoted key, because a hyphenated slug must be
//     quoted in JavaScript and the weekend generator reported "21 of 21" after
//     never seeing the twenty-second city;
//   * and the script asserts the count it found against EXPECTED, so a parse
//     failure is loud instead of silent.

import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DATA = path.join(ROOT, "src", "utilis", "monthlyRentalCityData.js");
const EXPECTED = 19;

const src = await readFile(DATA, "utf8");

const cities = [];
const cityRe = /^ {2}'?([a-z0-9-]+)'?: c\(/gm;
let m;
while ((m = cityRe.exec(src)) !== null) {
  const body = src.slice(m.index, src.indexOf("\n  }),", m.index));
  const head = body.match(/c\('([a-z0-9-]+)',\s*'([^']+)',\s*'([^']+)'/);
  if (!head) continue;
  const fieldPresent = (name) => new RegExp(`^ {4}${name}:`, "m").test(body);
  cities.push({
    slug: head[1],
    city: head[2],
    heroImage: head[3],
    fields: ["whoRentsMonthly", "usagePattern", "cityGeography", "vehicleFit", "seasonNote"].filter(
      fieldPresent,
    ),
  });
}

if (cities.length !== EXPECTED) {
  console.error(
    `parsed ${cities.length} cities but expected ${EXPECTED} — the data file shape changed, ` +
      `refusing to write a partial set`,
  );
  process.exit(1);
}

let written = 0;
const refused = [];

for (const c of cities) {
  try {
    await access(path.join(ROOT, "public", c.heroImage.replace(/^\//, "")));
  } catch {
    refused.push(`${c.slug}: heroImage not on disk — ${c.heroImage}`);
    continue;
  }
  if (c.fields.length < 5) {
    refused.push(`${c.slug}: only ${c.fields.length} of 5 local fields`);
    continue;
  }

  const routeSlug = `monthly-car-rental-${c.slug}`;
  const url = `https://www.trivenicabs.in/${routeSlug}`;
  const lower = c.city.toLowerCase();
  const fn = `MonthlyCarRental${c.city.replace(/[^A-Za-z]/g, "")}Page`;

  const title = `Monthly Car Rental ${c.city} with Driver | ₹35,000/Month`;
  const description =
    `Monthly car rental with driver in ${c.city}. Sedan ₹35,000, SUV ₹50,000, Innova ₹60,000 per ` +
    `month with 2,500 km and 8 hours a day included. One car, one driver, 30 days. Fuel, driver ` +
    `and GST included. Call 7668570551.`;
  const social = `A dedicated car and driver in ${c.city} for 30 days, from ₹35,000 a month with 2,500 km included.`;

  const page = `import { getMonthlyRentalCity, otherMonthlyRentalCities, buildMonthlyFaqs, MONTHLY_PACKAGE } from '@/utilis/monthlyRentalCityData';
import MonthlyRentalCityClient from '@/components/rental/MonthlyRentalCityClient';
import DirectAnswer from '@/components/content/DirectAnswer';
import { deriveMonthlyRentalAnswer } from '@/utilis/directAnswers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// Week 53. One of 19 new monthly-rental city pages, for the cab-hub cities with
// no city-level page — city coverage existed only inside the corporate family,
// for nine cities.
//
// This is the highest-converting unbuilt shape measured on the site: the monthly
// and corporate rental cluster runs at 6.57% against a 0.60% site average. The
// enquiry is narrow and commercial, and the answer is a price, which is exactly
// the kind of thing no search panel carries.
//
// Every rate comes from the published monthly package already live on
// /monthly-car-rental. No new pricing was introduced — what varies city to city
// is whether 2,500 km is generous or tight for the way a car is actually used
// there, which is a factual question rather than a pricing one.
const SLUG = '${c.slug}';
const data = getMonthlyRentalCity(SLUG);
const faqs = buildMonthlyFaqs(data);

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('${title.replace(/'/g, "\\'")}'),
  description: '${description.replace(/'/g, "\\'")}',
  keywords: 'monthly car rental ${lower}, monthly cab ${lower}, car on monthly rent ${lower}, long term car rental ${lower}, monthly driver hire ${lower}, corporate car rental ${lower}, monthly taxi ${lower}',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/${routeSlug}' },
  openGraph: {
    title: '${title.replace(/'/g, "\\'")}',
    description: '${social.replace(/'/g, "\\'")}',
    type: 'website', locale: 'en_IN',
    url: '${url}',
    siteName: 'Triveni Cabs',
    images: [{ url: '${c.heroImage}', width: 1200, height: 630, alt: 'Monthly car rental with driver in ${c.city}' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${title.replace(/'/g, "\\'")}',
    description: '${social.replace(/'/g, "\\'")}',
    images: ['${c.heroImage}'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ${fn}() {
  const answer = deriveMonthlyRentalAnswer(data, MONTHLY_PACKAGE);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Monthly Car Rental with Driver",
    "name": "Monthly Car Rental with Driver in ${c.city}",
    "description": "A dedicated AC vehicle and professional driver in ${c.city} for 30 days, with 2,500 km and 8 hours a day included.",
    "areaServed": { "@type": "City", "name": "${c.city}" },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "url": "https://www.trivenicabs.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "366, Dandupura, near Tajganj",
        "addressLocality": "Agra",
        "postalCode": "282006",
        "addressCountry": "IN",
      },
    },
    "offers": MONTHLY_PACKAGE.vehicles.map((v) => ({
      "@type": "Offer",
      "name": v.name,
      "price": String(v.monthly),
      "priceCurrency": "INR",
      "description": \`\${v.name} for 30 days in ${c.city}, \${MONTHLY_PACKAGE.includedKm} km and \${MONTHLY_PACKAGE.includedHoursPerDay} hours a day included\`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
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
      { "@type": "ListItem", "position": 2, "name": "Monthly Car Rental", "item": "https://www.trivenicabs.in/monthly-car-rental" },
      { "@type": "ListItem", "position": 3, "name": "${c.city}", "item": "${url}" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MonthlyRentalCityClient
        data={{ ...data, faqs }}
        pkg={MONTHLY_PACKAGE}
        otherCities={otherMonthlyRentalCities(SLUG)}
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
  console.log(`  wrote /${routeSlug}`);
}

console.log(`\npages written: ${written} of ${cities.length}`);
if (refused.length) {
  console.log(`\nREFUSED (${refused.length}):`);
  for (const r of refused) console.log(`  ${r}`);
  process.exitCode = 1;
}
