import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = "honeymoon-dharamshala";
const data = honeymoonTripData["dharamshala"];

export const metadata = {
  title: tightenTitle('Dharamshala Honeymoon by Car | Himalayan Peace Rs 11,000 | 2026'),
  description: 'Book Dharamshala honeymoon by car from Delhi. Sedan Rs 11,000, Innova Rs 15,000. McLeodganj cafes, Bhagsunag waterfall, Triund trek. Call 7668570551.',
  keywords: 'dharamshala honeymoon by car, honeymoon dharamshala road trip, dharamshala couple trip, mcleodganj honeymoon, romantic trip dharamshala',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-dharamshala' },
  openGraph: { title: 'Dharamshala Honeymoon by Car | Rs 11,000', description: 'Himalayan peace & Tibetan romance. McLeodganj cafes, trekking, mountains.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-dharamshala', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Dharamshala Honeymoon | Rs 11,000', description: 'Himalayan honeymoon. Dharamshala mountains, cafes & Tibetan charm.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonTripPage() {
  const lowPrice = data.price.sedan;
  const highPrice = data.price.suv;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Honeymoon Couple',
    citySlug: "dharamshala",
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Honeymoon Trips', url: 'https://www.trivenicabs.in/honeymoon-trip-by-car' },
      { name: "Dharamshala Honeymoon", url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: "Dharamshala Honeymoon by Car from Delhi",
    howToName: "How to Plan a Dharamshala Honeymoon by Car from Delhi",
    howToDesc: "Step-by-step guide to booking a romantic Dharamshala honeymoon by car from Delhi with a decorated-car option from Triveni Cabs.",
  });

  return (
    <>
      {schemaGraph.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <HoneymoonTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
