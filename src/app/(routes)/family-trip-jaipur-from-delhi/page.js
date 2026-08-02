import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "family-trip-jaipur-from-delhi";
const data = familyTripData["jaipur"];

export const metadata = {
  title: 'Family Trip to Jaipur from Delhi by Car | Innova Rs 7,500 | 2026',
  description: 'Book a family trip to Jaipur from Delhi by car. Innova Rs 7,500, Sedan Rs 5,500. Amber Fort, City Palace, Chokhi Dhani. Kid-friendly. Call 7668570551.',
  keywords: 'family trip jaipur from delhi, delhi to jaipur family tour, jaipur family vacation by car, jaipur trip with kids, family holiday jaipur',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-jaipur-from-delhi' },
  openGraph: { title: 'Family Trip to Jaipur from Delhi by Car | Innova Rs 7,500', description: 'Jaipur family trip. Amber Fort elephant ride, Chokhi Dhani, City Palace. From Rs 5,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-jaipur-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Jaipur from Delhi | Innova Rs 7,500', description: 'Jaipur family trip by car. Forts, palaces & royal experience. From Rs 5,500.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: "jaipur",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Jaipur from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Jaipur from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Jaipur from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Jaipur from Delhi with Triveni Cabs.',
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
