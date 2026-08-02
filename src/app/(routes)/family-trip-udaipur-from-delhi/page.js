import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "family-trip-udaipur-from-delhi";
const data = familyTripData["udaipur"];

export const metadata = {
  title: 'Family Trip Udaipur from Delhi | Innova ₹17,000 | 2026',
  description: 'Book a family trip to Udaipur from Delhi by car. Innova Rs 17,000, Sedan Rs 13,000. City Palace, Lake Pichola, Vintage Car Museum. Kid-friendly.',
  keywords: 'family trip udaipur from delhi, delhi to udaipur family tour, udaipur family vacation by car, udaipur trip with kids, family holiday udaipur',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-udaipur-from-delhi' },
  openGraph: { title: 'Family Trip to Udaipur from Delhi | Innova Rs 17,000', description: 'Udaipur family trip. City Palace, Lake Pichola boat, Vintage Car Museum. From Rs 13,000.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-udaipur-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Udaipur from Delhi | Rs 17,000', description: 'City of Lakes family trip. Royal palaces, lake boating & more. From Rs 13,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: "udaipur",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Udaipur from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Udaipur from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Udaipur from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Udaipur from Delhi with Triveni Cabs.',
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
