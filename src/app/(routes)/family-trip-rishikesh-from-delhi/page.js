import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "family-trip-rishikesh-from-delhi";
const data = familyTripData["rishikesh"];

export const metadata = {
  title: 'Family Trip Rishikesh from Delhi | Innova ₹7,500 | 2026',
  description: 'Book a family trip to Rishikesh from Delhi by car. Innova Rs 7,500, Sedan Rs 5,500. Ganga Aarti, Ram Jhula, river beach. Kid-friendly rafting. Call 7668570551.',
  keywords: 'family trip rishikesh from delhi, delhi to rishikesh family tour, rishikesh family vacation by car, rishikesh trip with kids, family holiday rishikesh',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-rishikesh-from-delhi' },
  openGraph: { title: 'Family Trip to Rishikesh from Delhi | Innova Rs 7,500', description: 'Rishikesh family trip. Ganga Aarti, Ram Jhula, river beach. From Rs 5,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-rishikesh-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Rishikesh from Delhi | Rs 7,500', description: 'Rishikesh family trip. Ganga, adventure & spirituality. From Rs 5,500.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: "rishikesh",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Rishikesh from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Rishikesh from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Rishikesh from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Rishikesh from Delhi with Triveni Cabs.',
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
          question={'How much does a family trip to Rishikesh from Delhi cost?'}
          answer={'A family trip to Rishikesh runs 2-3 days and covers 240 km from Delhi. Triveni Cabs prices it from Rs 5,500 in a sedan, Rs 7,500 in a Toyota Innova Crysta, and Rs 11,000 in a Tempo Traveller, sized for a family of 4-6 members. The best season to go is September to June.'}
          facts={[
            { label: 'Distance', value: '240 km' },
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
