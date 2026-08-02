import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "family-trip-mussoorie-from-delhi";
const data = familyTripData["mussoorie"];

export const metadata = {
  title: 'Family Trip Mussoorie from Delhi | Innova ₹9,000 | 2026',
  description: 'Book a family trip to Mussoorie from Delhi by car. Innova Rs 9,000, Sedan Rs 6,500. Kempty Falls, Gun Hill, Mall Road. Kid-friendly. Call 7668570551.',
  keywords: 'family trip mussoorie from delhi, delhi to mussoorie family tour, mussoorie family vacation by car, mussoorie trip with kids, family holiday mussoorie',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-mussoorie-from-delhi' },
  openGraph: { title: 'Family Trip to Mussoorie from Delhi by Car | Innova Rs 9,000', description: 'Mussoorie family trip. Kempty Falls, Gun Hill cable car. From Rs 6,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-mussoorie-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Mussoorie from Delhi | Innova Rs 9,000', description: 'Mussoorie family trip by car. Queen of Hills for the whole family. From Rs 6,500.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: "mussoorie",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Mussoorie from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Mussoorie from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Mussoorie from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Mussoorie from Delhi with Triveni Cabs.',
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
