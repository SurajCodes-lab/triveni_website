import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = "family-trip-udaipur-from-delhi";
const data = familyTripData["udaipur"];

export const metadata = {
  title: tightenTitle('Family Trip Udaipur from Delhi | Innova ₹17,000 | 2026'),
  description: 'Book a family trip to Udaipur from Delhi by car. Innova Rs 17,000, Sedan Rs 13,000. City Palace, Lake Pichola, Vintage Car Museum. Kid-friendly.',
  keywords: 'family trip udaipur from delhi, delhi to udaipur family tour, udaipur family vacation by car, udaipur trip with kids, family holiday udaipur',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-udaipur-from-delhi' },
  openGraph: { title: 'Family Trip to Udaipur from Delhi | Innova Rs 17,000', description: 'Udaipur family trip. City Palace, Lake Pichola boat, Vintage Car Museum. From Rs 13,000.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-udaipur-from-delhi', siteName: 'Triveni Cabs™' },
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
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Udaipur from Delhi with Triveni Cabs™.',
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
          question={'How much does a family trip to Udaipur from Delhi cost?'}
          answer={'A family trip to Udaipur runs 4-5 days and covers 660 km from Delhi. Triveni Cabs™ prices it from Rs 13,000 in a sedan, Rs 17,000 in a Toyota Innova Crysta, and Rs 24,000 in a Tempo Traveller, sized for a family of 4-6 members. The best season to go is September to March.'}
          facts={[
            { label: 'Distance', value: '660 km' },
            { label: 'Duration', value: '4-5 Days' },
            { label: 'Sedan', value: 'Rs 13,000' },
            { label: 'Innova Crysta', value: 'Rs 17,000' },
          ]}
        />
      </div>
      <FamilyTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
