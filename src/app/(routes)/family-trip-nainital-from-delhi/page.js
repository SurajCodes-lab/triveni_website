import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "family-trip-nainital-from-delhi";
const data = familyTripData["nainital"];

export const metadata = {
  title: 'Family Trip Nainital from Delhi | Innova ₹10,000 | 2026',
  description: 'Book a family trip to Nainital from Delhi by car. Innova Rs 10,000, Sedan Rs 7,500. Naini Lake boating, Zoo, Cable Car. Kid-friendly. Call 7668570551.',
  keywords: 'family trip nainital from delhi, delhi to nainital family tour, nainital family vacation by car, nainital trip with kids, family holiday nainital',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-nainital-from-delhi' },
  openGraph: { title: 'Family Trip to Nainital from Delhi by Car | Innova Rs 10,000', description: 'Nainital family trip. Lake boating, Zoo, Snow View cable car. From Rs 7,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-nainital-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Nainital from Delhi | Innova Rs 10,000', description: 'Nainital family trip by car. Lakeside bliss for the whole family. From Rs 7,500.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripPage() {
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Family',
    citySlug: "nainital",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Family Trip to Nainital from Delhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice: data.price.sedan,
    highPrice: data.price.tempo,
    tripName: 'Family Trip to Nainital from Delhi by Car',
    howToName: 'How to Plan a Family Trip to Nainital from Delhi by Car',
    howToDesc: 'Step-by-step guide to booking a comfortable, kid-friendly family road trip to Nainital from Delhi with Triveni Cabs.',
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
