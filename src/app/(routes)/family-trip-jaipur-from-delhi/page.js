import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = "family-trip-jaipur-from-delhi";
const data = familyTripData["jaipur"];

export const metadata = {
  title: tightenTitle('Family Trip to Jaipur from Delhi by Car | Innova Rs 7,500 | 2026'),
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
      <div className="bg-amber-950 px-4 pt-5 pb-1">
        <QuickAnswer
          tone="dark"
          className="mx-auto max-w-4xl"
          question={'How much does a family trip to Jaipur from Delhi cost?'}
          answer={'A family trip to Jaipur runs 2-3 days and covers 280 km from Delhi. Triveni Cabs prices it from Rs 5,500 in a sedan, Rs 7,500 in a Toyota Innova Crysta, and Rs 12,000 in a Tempo Traveller, sized for a family of 4-6 members. The best season to go is October to March.'}
          facts={[
            { label: 'Distance', value: '280 km' },
            { label: 'Duration', value: '2-3 Days' },
            { label: 'Sedan', value: 'Rs 5,500' },
            { label: 'Innova Crysta', value: 'Rs 7,500' },
          ]}
        />
      </div>
      <FamilyTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
