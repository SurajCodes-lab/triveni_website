import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = "family-trip-jim-corbett-from-delhi";
const data = familyTripData["jim-corbett"];

export const metadata = {
  title: tightenTitle('Family Trip Jim Corbett from Delhi | Innova ₹8,500 | 2026'),
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
      <div className="bg-amber-950 px-4 pt-5 pb-1">
        <QuickAnswer
          tone="dark"
          className="mx-auto max-w-4xl"
          question={'How much does a family trip to Jim Corbett from Delhi cost?'}
          answer={'A family trip to Jim Corbett runs 2-3 days and covers 260 km from Delhi. Triveni Cabs prices it from Rs 6,000 in a sedan, Rs 8,500 in a Toyota Innova Crysta, and Rs 12,000 in a Tempo Traveller, sized for a family of 4-6 members. The best season to go is November to June.'}
          facts={[
            { label: 'Distance', value: '260 km' },
            { label: 'Duration', value: '2-3 Days' },
            { label: 'Sedan', value: 'Rs 6,000' },
            { label: 'Innova Crysta', value: 'Rs 8,500' },
          ]}
        />
      </div>
      <FamilyTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
