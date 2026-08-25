import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = "friends-trip-manali";
const data = friendsTripData["manali"];

export const metadata = {
  title: tightenTitle('Friends Trip Manali by Tempo Traveller | ₹1,295/Person'),
  description: 'Book Tempo Traveller for friends trip to Manali from Delhi. Rs 1,295/person. Paragliding, snow, Old Manali nightlife. 12-17 seater AC. Call 7668570551.',
  keywords: 'friends trip manali, manali group trip, manali tempo traveller, delhi to manali friends, manali snow trip friends, friends trip package manali',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-manali' },
  openGraph: { title: 'Friends Trip to Manali | Tempo Traveller Rs 1,295/Person', description: 'Manali friends trip. Paragliding, snow, Solang Valley. From Rs 1,295/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-manali', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Manali | Rs 1,295/Person', description: 'Manali group trip by Tempo Traveller. Snow, paragliding, adventure.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripPage() {
  const lowPrice = data.price.tempo12 || data.price.tempo17 || 0;
  const highPrice = data.price.tempo17 || data.price.minibus || lowPrice;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Friends Group',
    citySlug: "manali",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Friends Trip to Manali', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: 'Friends Trip to Manali by Tempo Traveller from Delhi',
    howToName: 'How to Plan a Friends Group Trip to Manali from Delhi',
    howToDesc: 'Step-by-step guide to booking a Tempo Traveller for a friends group trip to Manali from Delhi with Triveni Cabs.',
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
          question={'How much does a friends trip to Manali from Delhi cost?'}
          answer={'A friends trip to Manali runs 4-5 days and covers 540 km from Delhi, planned for a group of 8-15 people. Triveni Cabs prices it at Rs 18,000 for a 12-seater Tempo Traveller and Rs 22,000 for a 17-seater, which works out to about Rs 1,500 per person in the 12-seater. The best season to go is March to June, December to February.'}
          facts={[
            { label: 'Distance', value: '540 km from Delhi' },
            { label: 'Duration', value: '4-5 Days' },
            { label: 'Group size', value: '8-15 people' },
            { label: 'Per person (12-seater)', value: 'Rs 1,500' },
          ]}
        />
      </div>
      <FriendsTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
