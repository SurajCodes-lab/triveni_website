import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "honeymoon-trip-by-car";
const data = honeymoonTripData["hub"];

export const metadata = {
  title: 'Honeymoon Trip by Car from Delhi | Decorated Car Rs 2,000 | 2026',
  description: 'Book honeymoon road trip from Delhi by private car. Shimla, Manali, Kashmir, Udaipur, Mussoorie. Decorated car option. Sedan from Rs 4,500. Call 7668570551.',
  keywords: 'honeymoon trip by car, honeymoon road trip from delhi, romantic car trip, honeymoon package by car, decorated car honeymoon',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-trip-by-car' },
  openGraph: { title: 'Honeymoon Trip by Car from Delhi | Decorated Car Available', description: 'Romantic honeymoon road trips. Shimla, Manali, Kashmir, Udaipur. Private sedan, decorated car option.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-trip-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Honeymoon Trip by Car from Delhi', description: 'Romantic honeymoon road trips to top Indian destinations. Decorated car available.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonTripPage() {
  const lowPrice = 4500;
  const highPrice = 28000;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Honeymoon Couple',
    citySlug: null,
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Honeymoon Trip by Car', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: "Honeymoon Trip by Car from Delhi",
    howToName: "How to Plan a Honeymoon Road Trip from Delhi by Car",
    howToDesc: "Step-by-step guide to booking a romantic honeymoon road trip from Delhi with a private decorated car from Triveni Cabs.",
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
