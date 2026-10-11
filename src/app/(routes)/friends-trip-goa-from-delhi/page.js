import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import SiblingPages from '@/components/seo/SiblingPages';

const SLUG = "friends-trip-goa-from-delhi";
const data = friendsTripData["goa"];

export const metadata = {
  title: tightenTitle('Friends Trip to Goa | Tempo Traveller ₹590/Person | 2026'),
  description: 'Book Tempo Traveller for friends trip in Goa. Rs 590/person local transport. Beach hopping, water sports, Dudhsagar, nightlife. 12-17 seater AC.',
  keywords: 'friends trip goa, goa group trip from delhi, goa tempo traveller, goa friends package, goa beach trip friends, goa nightlife group trip',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-goa-from-delhi' },
  openGraph: { title: 'Friends Trip to Goa | Local Tempo Traveller Rs 590/Person', description: 'Goa friends trip. Beach hopping, water sports, nightlife. From Rs 590/person local transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-goa-from-delhi', siteName: 'Triveni Cabs™' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Goa | Rs 590/Person', description: 'Goa group trip. Beaches, water sports, parties. Tempo Traveller.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripPage() {
  const lowPrice = data.price.tempo12 || data.price.tempo17 || 0;
  const highPrice = data.price.tempo17 || data.price.minibus || lowPrice;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Friends Group',
    citySlug: null,
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Friends Trip to Goa', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: 'Friends Trip to Goa by Tempo Traveller from Delhi',
    howToName: 'How to Plan a Friends Group Trip to Goa from Delhi',
    howToDesc: 'Step-by-step guide to booking a Tempo Traveller for a friends group trip to Goa from Delhi with Triveni Cabs™.',
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
          question={'How much does a friends trip to Goa from Delhi cost?'}
          answer={'A friends trip to Goa runs 4-5 days (Flight + Local by Tempo), planned for a group of 8-15 people. Triveni Cabs™ prices it at Rs 8,000 for a 12-seater Tempo Traveller and Rs 10,000 for a 17-seater, which works out to about Rs 670 per person in the 12-seater. The best season to go is November to February. Goa local transport only. Flights extra.'}
          facts={[
            { label: 'Distance', value: 'Flight + Local by Tempo' },
            { label: 'Duration', value: '4-5 Days' },
            { label: 'Group size', value: '8-15 people' },
            { label: 'Per person (12-seater)', value: 'Rs 670' },
          ]}
        />
      </div>
      <FriendsTripClient data={data} />
      {/* Week 49: the family this page belongs to — an audit found nothing linked to it */}
      <SiblingPages prefix="/friends-trip-" current="/friends-trip-goa-from-delhi" title="Friends&rsquo; trips from Delhi, by destination" intro="The same trip planned for the other hill towns and desert forts groups ask for." />
    </>
  );
}

export const revalidate = 3600;
