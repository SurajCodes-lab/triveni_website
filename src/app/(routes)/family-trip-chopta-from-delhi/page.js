import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "family-trip-chopta-from-delhi";
const data = familyTripData["chopta"];

export const metadata = {
  title: 'Family Trip to Chopta from Delhi by Car | Innova Rs 14,500 | 2026',
  description: 'Book a family trip to Chopta from Delhi by car. Innova Crysta Rs 14,500, Sedan Rs 11,000. Tungnath-Chandrashila trek, Deoria Tal, camping. Call 7668570551.',
  keywords: 'family trip chopta from delhi, delhi to chopta family tour, chopta tungnath trek family, chopta trip with kids, chopta chandrashila by car',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-chopta-from-delhi' },
  openGraph: {
    title: 'Family Trip to Chopta from Delhi by Car | Innova Rs 14,500',
    description: 'Safe family trip to Chopta. Tungnath-Chandrashila trek, Deoria Tal lake, alpine meadow camping. Innova Crysta with child seat.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/family-trip-chopta-from-delhi', siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Chopta from Delhi | Innova Rs 14,500', description: 'Chopta family trip by car. Easy Himalayan trek, Deoria Tal & meadows. From Rs 11,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: "chopta",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Chopta from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Chopta from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Chopta from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Chopta from Delhi with Triveni Cabs.',
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
          question={'How much does a family trip to Chopta from Delhi cost?'}
          answer={'A family trip to Chopta runs 3-4 days and covers 400 km from Delhi. Triveni Cabs prices it from Rs 11,000 in a sedan, Rs 14,500 in a Toyota Innova Crysta, and Rs 21,000 in a Tempo Traveller, sized for a family of 4-6 members. The best season to go is March to June, September to November.'}
          facts={[
            { label: 'Distance', value: '400 km' },
            { label: 'Duration', value: '3-4 Days' },
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
