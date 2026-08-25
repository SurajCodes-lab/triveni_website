import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = "family-trip-kashmir-from-delhi";
const data = familyTripData["kashmir"];

export const metadata = {
  title: tightenTitle('Family Trip Kashmir from Delhi | Innova ₹28,000 | 2026'),
  description: 'Book a family trip to Kashmir from Delhi. Innova Rs 28,000, Sedan Rs 22,000. Srinagar, Gulmarg, Pahalgam, Dal Lake houseboat. Kid-friendly. Call 7668570551.',
  keywords: 'family trip kashmir from delhi, delhi to kashmir family tour, kashmir family vacation by car, kashmir trip with kids, family holiday kashmir srinagar',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-kashmir-from-delhi' },
  openGraph: { title: 'Family Trip to Kashmir from Delhi | Innova Rs 28,000', description: 'Kashmir family trip. Dal Lake, Gulmarg Gondola, Pahalgam pony rides. From Rs 22,000.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-kashmir-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Kashmir from Delhi | Rs 28,000', description: 'Paradise on Earth family vacation. Dal Lake, Gulmarg, Pahalgam. From Rs 22,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: null,
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Kashmir from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Kashmir from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Kashmir from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Kashmir from Delhi with Triveni Cabs.',
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
          question={'How much does a family trip to Kashmir from Delhi cost?'}
          answer={'A family trip to Kashmir runs 5-7 days (Flight + 300 km by road). Triveni Cabs prices it from Rs 22,000 in a sedan, Rs 28,000 in a Toyota Innova Crysta, and Rs 38,000 in a Tempo Traveller, sized for a family of 4-6 members. The best season to go is April to October.'}
          facts={[
            { label: 'Distance', value: 'Flight + 300 km by road' },
            { label: 'Duration', value: '5-7 Days' },
            { label: 'Sedan', value: 'Rs 22,000' },
            { label: 'Innova Crysta', value: 'Rs 28,000' },
          ]}
        />
      </div>
      <FamilyTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
