import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';
import { buildTripSchemaGraph } from '@/utilis/tripSchemaHelper';

const SLUG = "honeymoon-shimla-manali-by-car";
const data = honeymoonTripData["shimla-manali"];

export const metadata = {
  title: 'Shimla Manali Honeymoon by Car | Romantic Road Trip ₹14,500',
  description: 'Book Shimla Manali honeymoon by car from Delhi. Sedan Rs 14,500, Innova Rs 18,000. Decorated car Rs 2,000 extra. Snow, valleys, romance. Call 7668570551.',
  keywords: 'shimla manali honeymoon by car, honeymoon shimla manali road trip, shimla manali couple trip, romantic trip shimla manali, honeymoon package shimla manali by car',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-shimla-manali-by-car' },
  openGraph: { title: 'Shimla Manali Honeymoon by Car | Rs 14,500', description: 'Romantic Shimla-Manali honeymoon road trip. Snow, valleys, decorated car option.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-shimla-manali-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Shimla Manali Honeymoon by Car | Rs 14,500', description: 'Snow-kissed romance. Shimla & Manali honeymoon road trip from Delhi.' },
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
      { name: "Shimla Manali Honeymoon", url: `https://www.trivenicabs.in/${SLUG}` },
    ],
    image: '/images/triveni-cabs-og.jpg',
    lowPrice,
    highPrice,
    tripName: "Shimla & Manali Honeymoon by Car from Delhi",
    howToName: "How to Plan a Shimla & Manali Honeymoon by Car from Delhi",
    howToDesc: "Step-by-step guide to booking a romantic Shimla & Manali honeymoon by car from Delhi with a decorated-car option from Triveni Cabs.",
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
