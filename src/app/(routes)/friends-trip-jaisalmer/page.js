import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "friends-trip-jaisalmer";
const data = friendsTripData["jaisalmer"];

export const metadata = {
  title: 'Friends Trip Jaisalmer by Tempo Traveller | ₹1,765/Person',
  description: 'Book Tempo Traveller for friends trip to Jaisalmer from Delhi. Rs 1,765/person. Desert safari, dune bashing, camping under stars. 12-17 seater AC.',
  keywords: 'friends trip jaisalmer, jaisalmer group trip, jaisalmer tempo traveller, delhi to jaisalmer friends, desert safari friends, sam sand dunes group trip',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-jaisalmer' },
  openGraph: { title: 'Friends Trip to Jaisalmer | Tempo Traveller Rs 1,765/Person', description: 'Jaisalmer friends trip. Desert safari, dune bashing, starry nights. From Rs 1,765/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-jaisalmer', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Jaisalmer | Rs 1,765/Person', description: 'Jaisalmer group trip by Tempo Traveller. Desert camping, camel safari.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripPage() {
  const lowPrice = data.price.tempo12 || data.price.tempo17 || 0;
  const highPrice = data.price.tempo17 || data.price.minibus || lowPrice;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Friends Group',
    citySlug: "jaisalmer",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Friends Trip to Jaisalmer', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: 'Friends Trip to Jaisalmer by Tempo Traveller from Delhi',
    howToName: 'How to Plan a Friends Group Trip to Jaisalmer from Delhi',
    howToDesc: 'Step-by-step guide to booking a Tempo Traveller for a friends group trip to Jaisalmer from Delhi with Triveni Cabs.',
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
          question={'How much does a friends trip to Jaisalmer from Delhi cost?'}
          answer={'A friends trip to Jaisalmer runs 4-5 days and covers 780 km from Delhi, planned for a group of 8-15 people. Triveni Cabs prices it at Rs 24,000 for a 12-seater Tempo Traveller and Rs 30,000 for a 17-seater, which works out to about Rs 2,000 per person in the 12-seater. The best season to go is October to March.'}
          facts={[
            { label: 'Distance', value: '780 km from Delhi' },
            { label: 'Duration', value: '4-5 Days' },
            { label: 'Group size', value: '8-15 people' },
            { label: 'Per person (12-seater)', value: 'Rs 2,000' },
          ]}
        />
      </div>
      <FriendsTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
