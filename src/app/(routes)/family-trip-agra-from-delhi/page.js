import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "family-trip-agra-from-delhi";
const data = familyTripData["agra"];

export const metadata = {
  title: 'Family Trip to Agra from Delhi by Car | Innova Rs 6,500 | 2026',
  description: 'Book a family trip to Agra from Delhi by car. Innova Rs 6,500, Sedan Rs 4,500. Taj Mahal, Agra Fort, Wildlife SOS. Kids under 15 free at Taj. Call 7668570551.',
  keywords: 'family trip agra from delhi, delhi to agra family tour, agra family vacation by car, taj mahal with kids, family day trip agra',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-agra-from-delhi' },
  openGraph: { title: 'Family Trip to Agra from Delhi | Innova Rs 6,500', description: 'Agra family trip. Taj Mahal, Agra Fort, Wildlife SOS. Kids under 15 free. From Rs 4,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-agra-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Agra | Taj Mahal with Kids | Rs 6,500', description: 'Agra family trip by car via Yamuna Expressway. Kids under 15 free at Taj Mahal.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: "agra",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Agra from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Agra from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Agra from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Agra from Delhi with Triveni Cabs.',
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
