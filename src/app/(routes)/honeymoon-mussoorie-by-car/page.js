import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "honeymoon-mussoorie-by-car";
const data = honeymoonTripData["mussoorie"];

export const metadata = {
  title: 'Mussoorie Honeymoon by Car | Romantic Road Trip Rs 9,000 | 2026',
  description: 'Book Mussoorie honeymoon by car from Delhi. Sedan Rs 9,000, Innova Rs 12,000. Camel Back Road, Gun Hill, Landour cafes. Decorated car option. Call 7668570551.',
  keywords: 'mussoorie honeymoon by car, honeymoon mussoorie road trip, mussoorie couple trip, romantic trip mussoorie, honeymoon package mussoorie',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-mussoorie-by-car' },
  openGraph: { title: 'Mussoorie Honeymoon by Car | Rs 9,000', description: 'Misty mountain romance in Queen of Hills. Decorated car option available.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-mussoorie-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Mussoorie Honeymoon by Car | Rs 9,000', description: 'Mussoorie honeymoon road trip. Mist, mountains & romance.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonTripPage() {
  const lowPrice = data.price.sedan;
  const highPrice = data.price.suv;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Honeymoon Couple',
    citySlug: "mussoorie",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Honeymoon Trips', url: 'https://www.trivenicabs.in/honeymoon-trip-by-car' },
      { name: "Mussoorie Honeymoon", url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: "Mussoorie Honeymoon by Car from Delhi",
    howToName: "How to Plan a Mussoorie Honeymoon by Car from Delhi",
    howToDesc: "Step-by-step guide to booking a romantic Mussoorie honeymoon by car from Delhi with a decorated-car option from Triveni Cabs.",
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
