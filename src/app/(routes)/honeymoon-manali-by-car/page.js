import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = "honeymoon-manali-by-car";
const data = honeymoonTripData["manali"];

export const metadata = {
  title: tightenTitle('Manali Honeymoon by Car | Snow Romance Rs 14,500 | 2026'),
  description: 'Book Manali honeymoon by car from Delhi. Sedan Rs 14,500, Innova Rs 18,500. Solang Valley, Old Manali cafes, snow. Decorated car option. Call 7668570551.',
  keywords: 'manali honeymoon by car, honeymoon manali road trip, manali couple trip, romantic trip manali, honeymoon package manali by car',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-manali-by-car' },
  openGraph: { title: 'Manali Honeymoon by Car | Rs 14,500', description: 'Snow, stars & love. Manali honeymoon road trip with decorated car.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-manali-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Manali Honeymoon by Car | Rs 14,500', description: 'Manali snow romance. Solang Valley, Old Manali cafes.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonTripPage() {
  const lowPrice = data.price.sedan;
  const highPrice = data.price.suv;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Honeymoon Couple',
    citySlug: "manali",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Honeymoon Trips', url: 'https://www.trivenicabs.in/honeymoon-trip-by-car' },
      { name: "Manali Honeymoon", url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: "Manali Honeymoon by Car from Delhi",
    howToName: "How to Plan a Manali Honeymoon by Car from Delhi",
    howToDesc: "Step-by-step guide to booking a romantic Manali honeymoon by car from Delhi with a decorated-car option from Triveni Cabs.",
  });

  return (
    <>
      {schemaGraph.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <HoneymoonTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
