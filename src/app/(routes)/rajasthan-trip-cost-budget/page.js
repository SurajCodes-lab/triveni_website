import { getTripCostBySlug } from '@/utilis/tripCostData';
import TripCostClient from '@/components/tripcost/TripCostClient';
import { buildTripCostBareGraph } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = 'rajasthan-trip-cost-budget';
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
  alternates: { canonical: '/rajasthan-trip-cost-budget' },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/rajasthan-trip-cost-budget',
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

export default function RajasthanTripCostPage() {
  const schemaGraph = buildTripCostBareGraph({
    slug: SLUG,
    data,
    citySlug: 'jaipur',
    breadcrumbName: 'Rajasthan Trip Cost Budget',
    image: '/images/triveni-cabs-og.jpg',
    howToName: 'How to Budget a Rajasthan Road Trip by Car',
    howToDesc: 'Step-by-step Rajasthan trip budget: cab fare across Jaipur-Udaipur-Jodhpur-Jaisalmer, fort entry fees, hotels and food for a 7-10 day circuit.',
    howToSteps: [
      { name: 'Choose your vehicle for the circuit', text: 'A sedan for the Rajasthan circuit costs around Rs 11-13/km all-inclusive; an Innova SUV is better for the long Jaipur-Jodhpur-Jaisalmer stretches at around Rs 16-18/km.' },
      { name: 'Add fort and palace entry fees', text: 'Amber Fort, City Palace Udaipur, Mehrangarh Jodhpur and Jaisalmer Fort entries cost Rs 100-500 per person each. Budget Rs 1,500-2,500 per person for monuments across the circuit.' },
      { name: 'Budget hotels and havelis', text: 'Budget heritage stays cost Rs 1,500-3,500 per night; mid-range palace-style hotels run Rs 4,000-8,000 per night across Jaipur, Udaipur, Jodhpur and Jaisalmer.' },
      { name: 'Plan food and desert experiences', text: 'Rajasthani thalis and cafe meals cost Rs 300-700 per person per day. Add a Sam Sand Dunes desert safari and camp in Jaisalmer at Rs 1,500-3,000 per person.' },
      { name: 'Total Rajasthan trip budget', text: 'A 7-10 day Rajasthan road trip from Delhi typically costs Rs 25,000-45,000 per person on a budget, covering cab, hotels, food and sightseeing.' },
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
