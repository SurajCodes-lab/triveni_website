import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "honeymoon-nainital-by-car";
const data = honeymoonTripData["nainital"];

export const metadata = {
  title: 'Nainital Honeymoon by Car | Lakeside Romance Rs 10,000 | 2026',
  description: 'Book Nainital honeymoon by car from Delhi. Sedan Rs 10,000, Innova Rs 13,000. Naini Lake boating, Snow View, Sattal. Decorated car option. Call 7668570551.',
  keywords: 'nainital honeymoon by car, honeymoon nainital road trip, nainital couple trip, romantic trip nainital, honeymoon package nainital',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-nainital-by-car' },
  openGraph: { title: 'Nainital Honeymoon by Car | Rs 10,000', description: 'Lakeside romance at Nainital. Boat rides, mountain views, decorated car.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-nainital-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Nainital Honeymoon by Car | Rs 10,000', description: 'Lakeside romance under the stars. Nainital honeymoon road trip.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonTripPage() {
  const lowPrice = data.price.sedan;
  const highPrice = data.price.suv;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Honeymoon Couple',
    citySlug: "nainital",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Honeymoon Trips', url: 'https://www.trivenicabs.in/honeymoon-trip-by-car' },
      { name: "Nainital Honeymoon", url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: "Nainital Honeymoon by Car from Delhi",
    howToName: "How to Plan a Nainital Honeymoon by Car from Delhi",
    howToDesc: "Step-by-step guide to booking a romantic Nainital honeymoon by car from Delhi with a decorated-car option from Triveni Cabs.",
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
