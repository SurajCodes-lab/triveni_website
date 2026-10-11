import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import SiblingPages from '@/components/seo/SiblingPages';

const SLUG = "friends-trip-jibhi";
const data = friendsTripData["jibhi"];

export const metadata = {
  title: tightenTitle('Friends Trip to Jibhi by Tempo Traveller | Rs 1,295/Person | 2026'),
  description: 'Book Tempo Traveller for a friends trip to Jibhi from Delhi. Rs 1,295/person. Waterfalls, Jalori Pass, Serolsar Lake, forest cottages. 12-17 seater AC. Call 7668570551.',
  keywords: 'friends trip jibhi, jibhi group trip, jibhi tempo traveller, delhi to jibhi friends, jalori pass serolsar lake, jibhi camping package himachal',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-jibhi' },
  openGraph: { title: 'Friends Trip to Jibhi | Tempo Traveller Rs 1,295/Person', description: 'Jibhi friends trip. Waterfalls, Jalori Pass, Serolsar Lake, forest cottages. From Rs 1,295/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-jibhi', siteName: 'Triveni Cabs™' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Jibhi | Rs 1,295/Person', description: 'Jibhi group trip by Tempo Traveller. Waterfalls, Jalori Pass, Serolsar Lake.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripPage() {
  const lowPrice = data.price.tempo12 || data.price.tempo17 || 0;
  const highPrice = data.price.tempo17 || data.price.minibus || lowPrice;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Friends Group',
    citySlug: "jibhi",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Friends Trip to Jibhi', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: 'Friends Trip to Jibhi by Tempo Traveller from Delhi',
    howToName: 'How to Plan a Friends Group Trip to Jibhi from Delhi',
    howToDesc: 'Step-by-step guide to booking a Tempo Traveller for a friends group trip to Jibhi from Delhi with Triveni Cabs™.',
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
          question={'How much does a friends trip to Jibhi from Delhi cost?'}
          answer={'A friends trip to Jibhi runs 3-4 days and covers 510 km from Delhi, planned for a group of 8-15 people. Triveni Cabs™ prices it at Rs 17,500 for a 12-seater Tempo Traveller and Rs 22,000 for a 17-seater, which works out to about Rs 1,460 per person in the 12-seater. The best season to go is March to June, September to November.'}
          facts={[
            { label: 'Distance', value: '510 km from Delhi' },
            { label: 'Duration', value: '3-4 Days' },
            { label: 'Group size', value: '8-15 people' },
            { label: 'Per person (12-seater)', value: 'Rs 1,460' },
          ]}
        />
      </div>
      <FriendsTripClient data={data} />
      {/* Week 49: the family this page belongs to — an audit found nothing linked to it */}
      <SiblingPages prefix="/friends-trip-" current="/friends-trip-jibhi" title="Friends&rsquo; trips from Delhi, by destination" intro="The same trip planned for the other hill towns and desert forts groups ask for." />
    </>
  );
}

export const revalidate = 3600;
