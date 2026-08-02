import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "family-trip-manali-from-delhi";
const data = familyTripData["manali"];

export const metadata = {
  title: 'Family Trip to Manali from Delhi by Car | Innova Rs 14,500 | 2026',
  description: 'Book a family trip to Manali from Delhi by car. Innova Crysta Rs 14,500, Sedan Rs 11,000. Solang Valley, Rohtang Pass, snow activities. Call 7668570551.',
  keywords: 'family trip manali from delhi, delhi to manali family tour, manali family vacation by car, manali trip with kids, family holiday manali',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-manali-from-delhi' },
  openGraph: {
    title: 'Family Trip to Manali from Delhi by Car | Innova Rs 14,500',
    description: 'Safe family trip to Manali. Solang Valley snow, Rohtang Pass, Hadimba Temple. Innova Crysta with child seat.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/family-trip-manali-from-delhi', siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Manali from Delhi | Innova Rs 14,500', description: 'Manali family trip by car. Snow, adventure & mountain magic. From Rs 11,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: "manali",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Manali from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Manali from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Manali from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Manali from Delhi with Triveni Cabs.',
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
          question={'How much does a family trip to Manali from Delhi cost?'}
          answer={'A family trip to Manali runs 4-5 days and covers 540 km from Delhi. Triveni Cabs prices it from Rs 11,000 in a sedan, Rs 14,500 in a Toyota Innova Crysta, and Rs 20,000 in a Tempo Traveller, sized for a family of 4-6 members. The best season to go is April to June, October to December.'}
          facts={[
            { label: 'Distance', value: '540 km' },
            { label: 'Duration', value: '4-5 Days' },
            { label: 'Sedan', value: 'Rs 11,000' },
            { label: 'Innova Crysta', value: 'Rs 14,500' },
          ]}
        />
      </div>
      <FamilyTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
