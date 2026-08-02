import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "honeymoon-kashmir-by-car";
const data = honeymoonTripData["kashmir"];

export const metadata = {
  title: 'Kashmir Honeymoon by Car | Paradise Romance Rs 28,000 | 2026',
  description: 'Book Kashmir honeymoon package. Sedan Rs 28,000, Innova Rs 35,000. Srinagar, Gulmarg, Pahalgam, Dal Lake houseboat. Decorated car option. Call 7668570551.',
  keywords: 'kashmir honeymoon by car, honeymoon kashmir package, kashmir couple trip, romantic trip kashmir, honeymoon srinagar gulmarg pahalgam',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-kashmir-by-car' },
  openGraph: { title: 'Kashmir Honeymoon by Car | Rs 28,000', description: 'Paradise on Earth honeymoon. Dal Lake, Gulmarg, Pahalgam. Decorated car.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-kashmir-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Kashmir Honeymoon | Rs 28,000', description: 'Ultimate Kashmir honeymoon. Dal Lake houseboats & Gulmarg snow.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonTripPage() {
  const lowPrice = data.price.sedan;
  const highPrice = data.price.suv;
  const schemaGraph = buildTripSchemaGraph({
    data,
    slug: SLUG,
    touristType: 'Honeymoon Couple',
    citySlug: null,
    breadcrumbTrail: [
      { name: 'Home', url: 'https://www.trivenicabs.in' },
      { name: 'Honeymoon Trips', url: 'https://www.trivenicabs.in/honeymoon-trip-by-car' },
      { name: "Kashmir Honeymoon", url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: "Kashmir Honeymoon by Car from Delhi",
    howToName: "How to Plan a Kashmir Honeymoon by Car from Delhi",
    howToDesc: "Step-by-step guide to booking a romantic Kashmir honeymoon by car from Delhi with a decorated-car option from Triveni Cabs.",
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
