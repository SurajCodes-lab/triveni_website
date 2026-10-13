import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// Week 53, wave 3. One of seven near-city destination lists for cities that had
// a local-taxi page but neither a day-trip list nor a weekend list.
//
// This is the day-trip page: everything on it is back the same evening. The
// weekend page for McLeodganj covers the places where a night buys a morning you
// could not otherwise have, and the two lists are deliberately disjoint except
// where a destination is genuinely both — in which case its entry says which
// of the two is better.
//
// Every fare is computed from the rate card in pricing.js rather than written,
// and the count, the kilometre figures and the "from" fare in the metadata
// below are read from that same data by
// scripts/week53-gen-nearcity-wave3.mjs — so none of them can drift from the
// table on the page.
const data = placesToVisitPages.mcleodganj;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('8 Places to Visit Near McLeodganj by Car | Triveni Cabs'),
  description: `Best places to visit near McLeodganj by car. Bhagsunag (2 km), Dharamkot (3 km), Naddi (4 km) and more. Sedan from Rs 2,200. Distances, drive times and cab fares for each. Call 7668570551.`,
  keywords: 'places to visit near mcleodganj, places near mcleodganj, day trips from mcleodganj, tourist places near mcleodganj, mcleodganj nearby places, places to visit near mcleodganj by car',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-mcleodganj' },
  openGraph: {
    title: '8 Places to Visit Near McLeodganj by Car | Book Cab',
    description: 'Bhagsunag, Dharamkot, Naddi and the rest within reach of McLeodganj, each with the cab fare.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/places-to-visit-near-mcleodganj',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Dharamshala/McLeod_Ganj.jpg', width: 1200, height: 630, alt: '8 Places to Visit Near McLeodganj by Car' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '8 Places to Visit Near McLeodganj by Car | Triveni Cabs™',
    description: 'Bhagsunag, Dharamkot, Naddi and the rest within reach of McLeodganj, each with the cab fare.',
    images: ['/images/sightseeing/Dharamshala/McLeod_Ganj.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearMcLeodganjPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Places to Visit Near McLeodganj",
    "description": "Top destinations near McLeodganj with distance, drive time and cab fares",
    "numberOfItems": data.destinations.length,
    // listUrl rather than bookingSlug: the slug is resolved against the build
    // manifest and is null where no corridor page exists, so the markup can
    // never publish an address that does not resolve.
    "itemListElement": data.destinations.map((x, i) => ({
      "@type": "ListItem", "position": i + 1, "name": x.name,
      "url": `https://www.trivenicabs.in${x.listUrl}`,
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
      { "@type": "ListItem", "position": 2, "name": "Places to Visit Near McLeodganj", "item": "https://www.trivenicabs.in/places-to-visit-near-mcleodganj" },
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
