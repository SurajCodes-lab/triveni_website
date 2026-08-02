import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "friends-trip-goa-from-delhi";
const data = friendsTripData["goa"];

export const metadata = {
  title: 'Friends Trip to Goa | Tempo Traveller ₹590/Person | 2026',
  description: 'Book Tempo Traveller for friends trip in Goa. Rs 590/person local transport. Beach hopping, water sports, Dudhsagar, nightlife. 12-17 seater AC.',
  keywords: 'friends trip goa, goa group trip from delhi, goa tempo traveller, goa friends package, goa beach trip friends, goa nightlife group trip',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-goa-from-delhi' },
  openGraph: { title: 'Friends Trip to Goa | Local Tempo Traveller Rs 590/Person', description: 'Goa friends trip. Beach hopping, water sports, nightlife. From Rs 590/person local transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-goa-from-delhi', siteName: 'Triveni Cabs' },
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
    howToDesc: 'Step-by-step guide to booking a Tempo Traveller for a friends group trip to Goa from Delhi with Triveni Cabs.',
  });

  return (
    <>
      {schemaGraph.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <FriendsTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
