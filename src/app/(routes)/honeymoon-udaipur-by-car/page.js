import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = "honeymoon-udaipur-by-car";
const data = honeymoonTripData["udaipur"];

export const metadata = {
  title: tightenTitle('Udaipur Honeymoon by Car | Royal Romance Rs 17,000 | 2026'),
  description: 'Book Udaipur honeymoon by car from Delhi. Sedan Rs 17,000, Innova Rs 22,000. Lake Pichola, City Palace, rooftop dining. Decorated car option. Call 7668570551.',
  keywords: 'udaipur honeymoon by car, honeymoon udaipur road trip, udaipur couple trip, romantic trip udaipur, honeymoon package udaipur by car',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-udaipur-by-car' },
  openGraph: { title: 'Udaipur Honeymoon by Car | Rs 17,000', description: 'Venice of the East. Lake Pichola, palaces, rooftop dining. Decorated car.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-udaipur-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Udaipur Honeymoon by Car | Rs 17,000', description: 'Royal Udaipur honeymoon. Lakes, palaces & romantic dining.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonTripPage() {
  const lowPrice = data.price.sedan;
  const highPrice = data.price.suv;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Honeymoon Couple',
    citySlug: "udaipur",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Honeymoon Trips', url: 'https://www.trivenicabs.in/honeymoon-trip-by-car' },
      { name: "Udaipur Honeymoon", url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: "Udaipur Honeymoon by Car from Delhi",
    howToName: "How to Plan a Udaipur Honeymoon by Car from Delhi",
    howToDesc: "Step-by-step guide to booking a romantic Udaipur honeymoon by car from Delhi with a decorated-car option from Triveni Cabs.",
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
