import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = "honeymoon-jaipur-udaipur";
const data = honeymoonTripData["jaipur-udaipur"];

export const metadata = {
  title: tightenTitle('Jaipur Udaipur Honeymoon by Car | Royal Rajasthan ₹16,000'),
  description: 'Book Jaipur-Udaipur honeymoon by car from Delhi. Sedan Rs 16,000, Innova Rs 21,000. Amber Fort, Lake Pichola, palaces. Decorated car. Call 7668570551.',
  keywords: 'jaipur udaipur honeymoon, honeymoon jaipur udaipur by car, rajasthan honeymoon road trip, romantic trip jaipur udaipur, honeymoon rajasthan circuit',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-jaipur-udaipur' },
  openGraph: { title: 'Jaipur Udaipur Honeymoon | Rs 16,000', description: 'Royal Rajasthan honeymoon. Forts, palaces, lake romance. Decorated car.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-jaipur-udaipur', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Jaipur Udaipur Honeymoon | Rs 16,000', description: 'Royal Rajasthan romance. Palaces, lakes & heritage circuit.' },
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
      { name: "Jaipur Udaipur Honeymoon", url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: "Jaipur & Udaipur Honeymoon by Car from Delhi",
    howToName: "How to Plan a Jaipur & Udaipur Honeymoon by Car from Delhi",
    howToDesc: "Step-by-step guide to booking a romantic Jaipur & Udaipur honeymoon by car from Delhi with a decorated-car option from Triveni Cabs.",
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
