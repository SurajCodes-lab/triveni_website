import { getWeekendGetaway, resolveWeekendLinks, otherWeekendCities } from '@/utilis/weekendGetawaysData';
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
// actually buys something — which is why Srinagar's closest neighbours are
// absent from it.
//
// Both fares are computed from the published round-trip rate card, and the
// counts and kilometre figures in the title and description are read from the
// data by scripts/week53-gen-weekend-wave2.mjs, so neither can drift from the
// list below them.
const SLUG = 'srinagar';
const data = resolveWeekendLinks(getWeekendGetaway(SLUG));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('5 Weekend Getaways from Srinagar by Car 2026 | Triveni Cabs'),
  description: '5 weekend trips from Srinagar by car, 50 to 420 km. Gulmarg (50 km), Sonamarg (80 km) and Verinag and Kokernag (80 km) and more — distance, driving time, the return fare for a sedan and an SUV, and how each weekend actually runs. Chauffeur-driven, fare fixed before travel. Call 7668570551.',
  keywords: 'weekend getaways from srinagar, weekend trips from srinagar by car, srinagar weekend destinations, short trips from srinagar, road trips from srinagar, places to stay near srinagar',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/weekend-getaways-from-srinagar-by-car' },
  openGraph: {
    title: '5 Weekend Getaways from Srinagar by Car 2026',
    description: 'Gulmarg (50 km), Sonamarg (80 km) and Verinag and Kokernag (80 km) and more, each with the return fare and the two-day plan.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/weekend-getaways-from-srinagar-by-car',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Srinagar/Dal_Lake_Shikara.jpg', width: 1200, height: 630, alt: '5 Weekend Getaways from Srinagar by Car 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Weekend Getaways from Srinagar by Car 2026 | Triveni Cabs™',
    description: 'Gulmarg (50 km), Sonamarg (80 km) and Verinag and Kokernag (80 km) and more, each with the return fare and the two-day plan.',
    images: ['/images/sightseeing/Srinagar/Dal_Lake_Shikara.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function WeekendGetawaysFromSrinagarPage() {
  const answer = deriveWeekendAnswer({ city: data.city, destinations: data.destinations });

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Weekend Getaways from Srinagar",
    "description": "Weekend trips from Srinagar by car, with distance, driving time and the return fare",
    "numberOfItems": data.destinations.length,
    // bookingHref rather than bookingSlug: the slug is resolved against the
    // build manifest and is null where no page exists, so the markup can never
    // publish an address that does not resolve.
    "itemListElement": data.destinations
      .filter((x) => x.bookingHref)
      .map((x, i) => ({
        "@type": "ListItem", "position": i + 1, "name": x.name,
        "url": `https://www.trivenicabs.in${x.bookingHref}`,
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
      { "@type": "ListItem", "position": 2, "name": "Weekend Getaways from Srinagar", "item": "https://www.trivenicabs.in/weekend-getaways-from-srinagar-by-car" },
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
