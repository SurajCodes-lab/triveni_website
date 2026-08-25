import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = "friends-trip-spiti";
const data = friendsTripData["spiti"];

export const metadata = {
  title: tightenTitle('Friends Trip to Spiti Valley by Tempo Traveller | Rs 3,410/Person | 2026'),
  description: 'Book Tempo Traveller for a friends trip to Spiti Valley from Delhi. Rs 3,410/person. Kaza, Key Monastery, Chandratal, Kalpa circuit. 12-17 seater hill-spec. Call 7668570551.',
  keywords: 'friends trip spiti, spiti valley group trip, spiti tempo traveller, delhi to spiti friends, kaza chandratal circuit, spiti valley road trip package',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-spiti' },
  openGraph: { title: 'Friends Trip to Spiti Valley | Tempo Traveller Rs 3,410/Person', description: 'Spiti Valley friends circuit. Kaza, Key Monastery, Chandratal, Kalpa. From Rs 3,410/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-spiti', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Spiti Valley | Rs 3,410/Person', description: 'Spiti group circuit by Tempo Traveller. Kaza, Chandratal, high-altitude villages.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripPage() {
  const lowPrice = data.price.tempo12 || data.price.tempo17 || 0;
  const highPrice = data.price.tempo17 || data.price.minibus || lowPrice;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Friends Group',
    citySlug: "spiti",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Friends Trip to Spiti Valley', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: 'Friends Trip to Spiti Valley by Tempo Traveller from Delhi',
    howToName: 'How to Plan a Friends Group Trip to Spiti Valley from Delhi',
    howToDesc: 'Step-by-step guide to booking a hill-spec Tempo Traveller for a friends group circuit to Spiti Valley from Delhi with Triveni Cabs.',
  });

  return (
    <>
      {schemaGraph.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="bg-slate-950 px-4 pt-5 pb-1">
        <QuickAnswer
          tone="dark"
          className="mx-auto max-w-4xl"
          question={'How much does a friends trip to Spiti Valley from Delhi cost?'}
          answer={'A friends trip to Spiti Valley runs 7-9 days and covers 760 km from Delhi, planned for a group of 8-15 people. Triveni Cabs prices it at Rs 48,000 for a 12-seater Tempo Traveller and Rs 58,000 for a 17-seater, which works out to about Rs 4,000 per person in the 12-seater. The best season to go is June to September (summer circuit).'}
          facts={[
            { label: 'Distance', value: '760 km from Delhi' },
            { label: 'Duration', value: '7-9 Days' },
            { label: 'Group size', value: '8-15 people' },
            { label: 'Per person (12-seater)', value: 'Rs 4,000' },
          ]}
        />
      </div>
      <FriendsTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
