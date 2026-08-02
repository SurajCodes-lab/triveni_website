import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "family-trip-auli-from-delhi";
const data = familyTripData["auli"];

export const metadata = {
  title: 'Family Trip to Auli from Delhi by Car | Innova Rs 18,000 | 2026',
  description: 'Book a family trip to Auli from Delhi by car. Innova Crysta Rs 18,000, Sedan Rs 14,000. Skiing, cable car, Gurso Bugyal, Nanda Devi views. Call 7668570551.',
  keywords: 'family trip auli from delhi, delhi to auli family tour, auli skiing family vacation, auli trip with kids, auli snow trip by car',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-auli-from-delhi' },
  openGraph: {
    title: 'Family Trip to Auli from Delhi by Car | Innova Rs 18,000',
    description: 'Safe family trip to Auli. Skiing, cable car ride, Gurso Bugyal meadows, Nanda Devi views. Innova Crysta with child seat.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/family-trip-auli-from-delhi', siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Auli from Delhi | Innova Rs 18,000', description: 'Auli family snow trip by car. Skiing, cable car & Himalayan magic. From Rs 14,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: "auli",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Auli from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Auli from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Auli from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Auli from Delhi with Triveni Cabs.',
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
          question={'How much does a family trip to Auli from Delhi cost?'}
          answer={'A family trip to Auli runs 4-5 days and covers 500 km from Delhi. Triveni Cabs prices it from Rs 14,000 in a sedan, Rs 18,000 in a Toyota Innova Crysta, and Rs 26,000 in a Tempo Traveller, sized for a family of 4-6 members. The best season to go is December to March (snow), April to June (meadows).'}
          facts={[
            { label: 'Distance', value: '500 km' },
            { label: 'Duration', value: '4-5 Days' },
            { label: 'Sedan', value: 'Rs 14,000' },
            { label: 'Innova Crysta', value: 'Rs 18,000' },
          ]}
        />
      </div>
      <FamilyTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
