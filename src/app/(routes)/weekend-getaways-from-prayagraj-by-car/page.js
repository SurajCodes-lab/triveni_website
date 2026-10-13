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
// actually buys something — which is why Prayagraj's closest neighbours are
// absent from it.
//
// Both fares are computed from the published round-trip rate card, and the
// counts and kilometre figures in the title and description are read from the
// data by scripts/week53-gen-weekend-wave2.mjs, so neither can drift from the
// list below them.
const SLUG = 'prayagraj';
const data = resolveWeekendLinks(getWeekendGetaway(SLUG));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('5 Weekend Getaways from Prayagraj by Car 2026 | Triveni Cabs'),
  description: '5 weekend trips from Prayagraj by car, 90 to 200 km. Mirzapur and Vindhyachal (90 km), Varanasi (125 km) and Chitrakoot (130 km) and more — distance, driving time, the return fare for a sedan and an SUV, and how each weekend actually runs. Chauffeur-driven, fare fixed before travel. Call 7668570551.',
  keywords: 'weekend getaways from prayagraj, weekend trips from prayagraj by car, prayagraj weekend destinations, short trips from prayagraj, road trips from prayagraj, places to stay near prayagraj',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/weekend-getaways-from-prayagraj-by-car' },
  openGraph: {
    title: '5 Weekend Getaways from Prayagraj by Car 2026',
    description: 'Mirzapur and Vindhyachal (90 km), Varanasi (125 km) and Chitrakoot (130 km) and more, each with the return fare and the two-day plan.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/weekend-getaways-from-prayagraj-by-car',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Prayagraj/Triveni_Sangam.jpg', width: 1200, height: 630, alt: '5 Weekend Getaways from Prayagraj by Car 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Weekend Getaways from Prayagraj by Car 2026 | Triveni Cabs™',
    description: 'Mirzapur and Vindhyachal (90 km), Varanasi (125 km) and Chitrakoot (130 km) and more, each with the return fare and the two-day plan.',
    images: ['/images/sightseeing/Prayagraj/Triveni_Sangam.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function WeekendGetawaysFromPrayagrajPage() {
  const answer = deriveWeekendAnswer({ city: data.city, destinations: data.destinations });

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Weekend Getaways from Prayagraj",
    "description": "Weekend trips from Prayagraj by car, with distance, driving time and the return fare",
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
      { "@type": "ListItem", "position": 2, "name": "Weekend Getaways from Prayagraj", "item": "https://www.trivenicabs.in/weekend-getaways-from-prayagraj-by-car" },
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
