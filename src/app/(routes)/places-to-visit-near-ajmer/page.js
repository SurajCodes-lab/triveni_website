import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// Week 53. One of ten new near-city destination lists — the best-converting
// page shape on the site at 3.42% against a 0.60% site average, because a list
// of priced journeys cannot be reduced to a panel answer.
//
// Every fare on this page is computed from the rate card in pricing.js rather
// than written, so none of them can drift from the published rates. The figures
// in the metadata below are read from the data for the same reason.
const data = placesToVisitPages.ajmer;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('8 Places to Visit Near Ajmer by Car | Triveni Cabs'),
  description: `Best places to visit near Ajmer by car. Pushkar (15 km), Kishangarh (27 km), Nasirabad (25 km) and more. Sedan from Rs 2,200. Distances, drive times and cab fares for each. Call 7668570551.`,
  keywords: 'places to visit near ajmer, places near ajmer, day trips from ajmer, tourist places near ajmer, ajmer nearby places, places to visit near ajmer by car',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-ajmer' },
  openGraph: {
    title: '8 Places to Visit Near Ajmer by Car | Book Cab',
    description: 'Pushkar, Kishangarh and the forts within reach of Ajmer, each with the cab fare.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/places-to-visit-near-ajmer',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg', width: 1200, height: 630, alt: '8 Places to Visit Near Ajmer by Car' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '8 Places to Visit Near Ajmer by Car | Triveni Cabs™',
    description: 'Pushkar, Kishangarh and the forts within reach of Ajmer, each with the cab fare.',
    images: ['/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearAjmerPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Places to Visit Near Ajmer",
    "description": "Top destinations near Ajmer with distance, drive time and cab fares",
    "numberOfItems": data.destinations.length,
    // listUrl rather than bookingSlug: the slug is resolved against the build
    // manifest and is null where no corridor page exists, so the markup can
    // never publish an address that does not resolve.
    "itemListElement": data.destinations.map((d, i) => ({
      "@type": "ListItem", "position": i + 1, "name": d.name,
      "url": `https://www.trivenicabs.in${d.listUrl}`,
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
      { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Ajmer", "item": "https://www.trivenicabs.in/places-to-visit-near-ajmer" },
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
