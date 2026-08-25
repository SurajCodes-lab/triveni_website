import { getTripCostBySlug } from '@/utilis/tripCostData';
import TripCostClient from '@/components/tripcost/TripCostClient';
import { buildTripCostBareGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = 'honeymoon-trip-cost-shimla-manali';
const data = getTripCostBySlug(SLUG);

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle(data.title),
  description: data.metaDescription,
  keywords: data.keywords,
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-trip-cost-shimla-manali' },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/honeymoon-trip-cost-shimla-manali',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: data.title,
    description: data.metaDescription,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonTripCostPage() {
  const schemaGraph = buildTripCostBareGraph({
    slug: SLUG,
    data,
    citySlug: 'manali',
    breadcrumbName: 'Honeymoon Trip Cost Shimla Manali',
    image: '/images/triveni-cabs-og.jpg',
    howToName: 'How to Budget a Shimla Manali Honeymoon by Car from Delhi',
    howToDesc: 'Step-by-step Shimla Manali honeymoon budget: cab fare, decorated car, hotels, food and sightseeing for a 5-6 day romantic road trip.',
    howToSteps: [
      { name: 'Pick your vehicle', text: 'A private sedan for Shimla Manali honeymoon starts around Rs 14,500 all-inclusive of fuel, toll and driver allowance; an SUV is around Rs 18,000 for extra comfort on hill roads.' },
      { name: 'Add a decorated car option', text: 'Triveni Cabs offers a complimentary decorated car for the honeymoon entry, plus flexible scenic stops at Kufri, Solang Valley and the Atal Tunnel.' },
      { name: 'Budget hotels and meals', text: 'Mid-range honeymoon resorts in Shimla and Manali cost Rs 2,500-6,000 per night; meals run Rs 800-1,500 per couple per day at cafes and restaurants.' },
      { name: 'Plan sightseeing and activities', text: 'Add paragliding, ropeway rides and Rohtang/Atal Tunnel permits. Most couple activities cost Rs 500-2,500 per person.' },
      { name: 'Total honeymoon budget', text: 'A 5-6 day Shimla Manali honeymoon by car from Delhi typically costs Rs 35,000-60,000 per couple including cab, hotels, food and activities.' },
    ],
  });

  return (
    <>
      {schemaGraph.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <TripCostClient data={data} />
    </>
  );
}
