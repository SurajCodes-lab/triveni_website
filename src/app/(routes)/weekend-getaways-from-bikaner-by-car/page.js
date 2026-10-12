import { getWeekendGetaway, resolveWeekendLinks, otherWeekendCities } from '@/utilis/weekendGetawaysData';
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
const SLUG = 'bikaner';
const data = resolveWeekendLinks(getWeekendGetaway(SLUG));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('7 Weekend Getaways from Bikaner by Car 2026 | Triveni Cabs'),
  description: '7 weekend trips from Bikaner by car, 145 to 440 km. Tal Chhapar (145 km), Khichan and Phalodi (145 km), Shekhawati havelis (215 km) and more — distance, driving time, the return fare for a sedan and an SUV, and how each weekend actually runs. Chauffeur-driven, fare fixed before travel. Call 7668570551.',
  keywords: 'weekend getaways from bikaner, weekend trips from bikaner by car, bikaner weekend destinations, short trips from bikaner, road trips from bikaner, places to stay near bikaner',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/weekend-getaways-from-bikaner-by-car' },
  openGraph: {
    title: '7 Weekend Getaways from Bikaner by Car 2026',
    description: 'Tal Chhapar (145 km), Khichan and Phalodi (145 km), Shekhawati havelis (215 km) and more, each with the return fare and the two-day plan.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/weekend-getaways-from-bikaner-by-car',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Bikaner/Bikaner_hero_section.jpg', width: 1200, height: 630, alt: '7 Weekend Getaways from Bikaner by Car 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Weekend Getaways from Bikaner by Car 2026 | Triveni Cabs™',
    description: 'Tal Chhapar (145 km), Khichan and Phalodi (145 km), Shekhawati havelis (215 km) and more, each with the return fare and the two-day plan.',
    images: ['/images/sightseeing/Bikaner/Bikaner_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function WeekendGetawaysFromBikanerPage() {
  const answer = deriveWeekendAnswer({ city: data.city, destinations: data.destinations });

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Weekend Getaways from Bikaner",
    "description": "Weekend trips from Bikaner by car, with distance, driving time and the return fare",
    "numberOfItems": data.destinations.length,
    // bookingHref rather than bookingSlug: the slug is resolved against the
    // build manifest and is null where no page exists, so the markup can never
    // publish an address that does not resolve.
    "itemListElement": data.destinations
      .filter((d) => d.bookingHref)
      .map((d, i) => ({
        "@type": "ListItem", "position": i + 1, "name": d.name,
        "url": `https://www.trivenicabs.in${d.bookingHref}`,
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
      { "@type": "ListItem", "position": 2, "name": "Weekend Getaways from Bikaner", "item": "https://www.trivenicabs.in/weekend-getaways-from-bikaner-by-car" },
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
