import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "family-trip-shimla-from-delhi";
const data = familyTripData["shimla"];

export const metadata = {
  title: 'Family Trip to Shimla from Delhi by Car | Innova Rs 11,500 | 2026',
  description: 'Book a family trip to Shimla from Delhi by car. Innova Crysta Rs 11,500, Sedan Rs 8,500. Toy Train, Kufri, Mall Road. Kid-friendly stops. Call 7668570551.',
  keywords: 'family trip shimla from delhi, delhi to shimla family tour, shimla family vacation by car, shimla trip with kids, family holiday shimla',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-shimla-from-delhi' },
  openGraph: {
    title: 'Family Trip to Shimla from Delhi by Car | Innova Rs 11,500',
    description: 'Safe family trip to Shimla from Delhi. Innova Crysta with child seat, experienced hill driver. Toy Train, Kufri, Mall Road. 3-4 days package.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/family-trip-shimla-from-delhi',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Trip to Shimla from Delhi | Innova Rs 11,500',
    description: 'Safe Shimla family trip by car. Innova Crysta, kid-friendly stops. From Rs 8,500.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: "shimla",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Shimla from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Shimla from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Shimla from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Shimla from Delhi with Triveni Cabs.',
  });

  return (
    <>
      {schemaGraph.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <FamilyTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
