import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "family-trip-jim-corbett-from-delhi";
const data = familyTripData["jim-corbett"];

export const metadata = {
  title: 'Family Trip Jim Corbett from Delhi | Innova ₹8,500 | 2026',
  description: 'Book a family trip to Jim Corbett from Delhi by car. Innova Rs 8,500, Sedan Rs 6,000. Jungle safari, tiger spotting, nature walks. Kid-friendly.',
  keywords: 'family trip jim corbett from delhi, delhi to corbett family tour, jim corbett family vacation, corbett safari with kids, family holiday jim corbett',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-jim-corbett-from-delhi' },
  openGraph: { title: 'Family Trip to Jim Corbett from Delhi | Innova Rs 8,500', description: 'Jim Corbett family trip. Jungle safari, tiger spotting. From Rs 6,000.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-jim-corbett-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Jim Corbett from Delhi | Rs 8,500', description: 'Jim Corbett family safari. Tigers, elephants & nature. From Rs 6,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: "jim-corbett",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Jim Corbett from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Jim Corbett from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Jim Corbett from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Jim Corbett from Delhi with Triveni Cabs.',
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
