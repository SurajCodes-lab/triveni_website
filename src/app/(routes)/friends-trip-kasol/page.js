import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import SiblingPages from '@/components/seo/SiblingPages';

const SLUG = "friends-trip-kasol";
const data = friendsTripData["kasol"];

export const metadata = {
  title: tightenTitle('Friends Trip to Kasol by Tempo Traveller | Rs 1,175/Person | 2026'),
  description: 'Book Tempo Traveller for friends trip to Kasol from Delhi. Rs 1,175/person. Kheerganga trek, riverside camping, Manikaran. 12-17 seater AC. Call 7668570551.',
  keywords: 'friends trip kasol, kasol group trip, kasol tempo traveller, delhi to kasol friends, kheerganga trek group, friends trip package kasol parvati valley',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-kasol' },
  openGraph: { title: 'Friends Trip to Kasol | Tempo Traveller Rs 1,175/Person', description: 'Kasol friends trip. Kheerganga trek, riverside camping. From Rs 1,175/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-kasol', siteName: 'Triveni Cabs™' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Kasol | Rs 1,175/Person', description: 'Kasol group trip by Tempo Traveller. Trekking, camping, cafes.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripPage() {
  const lowPrice = data.price.tempo12 || data.price.tempo17 || 0;
  const highPrice = data.price.tempo17 || data.price.minibus || lowPrice;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Friends Group',
    citySlug: "kasol",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Friends Trip to Kasol', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: 'Friends Trip to Kasol by Tempo Traveller from Delhi',
    howToName: 'How to Plan a Friends Group Trip to Kasol from Delhi',
    howToDesc: 'Step-by-step guide to booking a Tempo Traveller for a friends group trip to Kasol from Delhi with Triveni Cabs™.',
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
          question={'How much does a friends trip to Kasol from Delhi cost?'}
          answer={'A friends trip to Kasol runs 3-4 days and covers 520 km from Delhi, planned for a group of 8-15 people. Triveni Cabs™ prices it at Rs 16,000 for a 12-seater Tempo Traveller and Rs 20,000 for a 17-seater, which works out to about Rs 1,335 per person in the 12-seater. The best season to go is March to June, September to November.'}
          facts={[
            { label: 'Distance', value: '520 km from Delhi' },
            { label: 'Duration', value: '3-4 Days' },
            { label: 'Group size', value: '8-15 people' },
            { label: 'Per person (12-seater)', value: 'Rs 1,335' },
          ]}
        />
      </div>
      <FriendsTripClient data={data} />
      {/* Week 49: the family this page belongs to — an audit found nothing linked to it */}
      <SiblingPages prefix="/friends-trip-" current="/friends-trip-kasol" title="Friends&rsquo; trips from Delhi, by destination" intro="The same trip planned for the other hill towns and desert forts groups ask for." />
    </>
  );
}

export const revalidate = 3600;
