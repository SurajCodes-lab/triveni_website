import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import SiblingPages from '@/components/seo/SiblingPages';

const SLUG = "friends-trip-tirthan-valley";
const data = friendsTripData["tirthan-valley"];

export const metadata = {
  title: tightenTitle('Friends Trip to Tirthan Valley by Tempo Traveller | Rs 1,235/Person | 2026'),
  description: 'Book Tempo Traveller for a friends trip to Tirthan Valley from Delhi. Rs 1,235/person. GHNP treks, trout fishing, riverside camping. 12-17 seater AC. Call 7668570551.',
  keywords: 'friends trip tirthan valley, tirthan valley group trip, tirthan tempo traveller, delhi to tirthan friends, ghnp trek trout fishing, tirthan valley camping package',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-tirthan-valley' },
  openGraph: { title: 'Friends Trip to Tirthan Valley | Tempo Traveller Rs 1,235/Person', description: 'Tirthan Valley friends trip. GHNP treks, trout fishing, riverside camping. From Rs 1,235/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-tirthan-valley', siteName: 'Triveni Cabs™' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Tirthan Valley | Rs 1,235/Person', description: 'Tirthan Valley group trip by Tempo Traveller. GHNP, trout fishing, camping.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripPage() {
  const lowPrice = data.price.tempo12 || data.price.tempo17 || 0;
  const highPrice = data.price.tempo17 || data.price.minibus || lowPrice;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Friends Group',
    citySlug: "tirthan-valley",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Friends Trip to Tirthan Valley', url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: 'Friends Trip to Tirthan Valley by Tempo Traveller from Delhi',
    howToName: 'How to Plan a Friends Group Trip to Tirthan Valley from Delhi',
    howToDesc: 'Step-by-step guide to booking a Tempo Traveller for a friends group trip to Tirthan Valley from Delhi with Triveni Cabs™.',
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
          question={'How much does a friends trip to Tirthan Valley from Delhi cost?'}
          answer={'A friends trip to Tirthan Valley runs 3-4 days and covers 500 km from Delhi, planned for a group of 8-15 people. Triveni Cabs™ prices it at Rs 17,000 for a 12-seater Tempo Traveller and Rs 21,000 for a 17-seater, which works out to about Rs 1,415 per person in the 12-seater. The best season to go is March to June, September to November.'}
          facts={[
            { label: 'Distance', value: '500 km from Delhi' },
            { label: 'Duration', value: '3-4 Days' },
            { label: 'Group size', value: '8-15 people' },
            { label: 'Per person (12-seater)', value: 'Rs 1,415' },
          ]}
        />
      </div>
      <FriendsTripClient data={data} />
      {/* Week 49: the family this page belongs to — an audit found nothing linked to it */}
      <SiblingPages prefix="/friends-trip-" current="/friends-trip-tirthan-valley" title="Friends&rsquo; trips from Delhi, by destination" intro="The same trip planned for the other hill towns and desert forts groups ask for." />
    </>
  );
}

export const revalidate = 3600;
