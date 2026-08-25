import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = "friends-trip-rishikesh";
const data = friendsTripData["rishikesh"];

export const metadata = {
  title: tightenTitle('Friends Trip Rishikesh by Tempo Traveller | ₹920/Person'),
  description: 'Book Tempo Traveller for friends trip to Rishikesh from Delhi. Rs 920/person. Rafting, bungee, camping, bonfire. 12-17 seater AC. Call 7668570551.',
  keywords: 'friends trip rishikesh, rishikesh group trip, rishikesh tempo traveller, delhi to rishikesh friends, rishikesh rafting group, friends trip package rishikesh',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-rishikesh' },
  openGraph: { title: 'Friends Trip to Rishikesh | Tempo Traveller Rs 920/Person', description: 'Rishikesh friends trip. Rafting, bungee, camping, bonfire. From Rs 920/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-rishikesh', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Rishikesh | Rs 920/Person', description: 'Rishikesh group trip by Tempo Traveller. Rafting, camping, bonfire.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripPage() {
  const lowPrice = data.price.tempo12 || data.price.tempo17 || 0;
  const highPrice = data.price.tempo17 || data.price.minibus || lowPrice;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Friends Group',
    citySlug: "rishikesh",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Friends Trip to Rishikesh', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: 'Friends Trip to Rishikesh by Tempo Traveller from Delhi',
    howToName: 'How to Plan a Friends Group Trip to Rishikesh from Delhi',
    howToDesc: 'Step-by-step guide to booking a Tempo Traveller for a friends group trip to Rishikesh from Delhi with Triveni Cabs.',
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
          question={'How much does a friends trip to Rishikesh from Delhi cost?'}
          answer={'A friends trip to Rishikesh runs 2-3 days and covers 240 km from Delhi, planned for a group of 8-15 people. Triveni Cabs prices it at Rs 11,000 for a 12-seater Tempo Traveller and Rs 14,000 for a 17-seater, which works out to about Rs 920 per person in the 12-seater. The best season to go is September to June.'}
          facts={[
            { label: 'Distance', value: '240 km from Delhi' },
            { label: 'Duration', value: '2-3 Days' },
            { label: 'Group size', value: '8-15 people' },
            { label: 'Per person (12-seater)', value: 'Rs 920' },
          ]}
        />
      </div>
      <FriendsTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
