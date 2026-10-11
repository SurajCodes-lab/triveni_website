import { getTripCostBySlug } from '@/utilis/tripCostData';
import TripCostClient from '@/components/tripcost/TripCostClient';
import { getArticleSchema, getHowToSchema, getSpeakableSchema, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import { buildTripCostService } from '@/utilis/tripSchemaHelper';
import { buildTripCostMeta } from '@/lib/seo/serp-ctr';

const data = getTripCostBySlug('agra-trip-cost-from-delhi');
const meta = buildTripCostMeta(data);

export const revalidate = 3600;

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: data.keywords,
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/agra-trip-cost-from-delhi' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/agra-trip-cost-from-delhi',
    siteName: 'Triveni Cabs™',
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AgraTripCostPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Agra Trip Cost from Delhi", "item": "https://www.trivenicabs.in/agra-trip-cost-from-delhi" },
    ],
  };


  // Article schema with auto-fresh dateModified + Speakable for voice search
  const articleSchema = getArticleSchema({
    slug: 'agra-trip-cost-from-delhi',
    headline: data.title,
    description: meta.description,
    image: '/images/sightseeing/Agra/Taj_mahal.jpg',
    datePublished: '2025-01-01',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.cost-table', '#faq-answer-0']
  });

  // Place schema — anchors content to real-world geographic entity
  const placeSchema = getCityPlaceSchema("agra", { idSlug: "agra-trip-cost-from-delhi" });

  // HowTo schema — "how to budget Delhi to Agra trip" (rich snippet target)
  const howToSchema = getHowToSchema({
    name: 'How to Plan Your Delhi to Agra Trip Budget',
    description: 'Step-by-step Delhi-Agra trip cost calculation: cab fare, monument tickets, food, optional guide. Save 30-40% over packaged tours.',
    totalTime: 'PT5M',
    estimatedCost: { currency: 'INR', value: 4500 },
    steps: [
      { name: 'Choose your vehicle', text: 'Sedan (Swift Dzire) at Rs 3,500-4,500 for 4 passengers, SUV (Innova) at Rs 5,500-6,500 for 6, or Tempo Traveller for groups. Round trip pricing includes driver and fuel.' },
      { name: 'Add monument entry fees', text: 'Taj Mahal: Rs 50 (Indian) or Rs 1,100 (foreigner). Agra Fort: Rs 50/650. Mehtab Bagh: Rs 50/300. Composite ticket Rs 1,500 covers all 4 ASI monuments for foreigners.' },
      { name: 'Budget for food', text: 'Local Agra food: Rs 200-400 per person at restaurants like Pinch of Spice, Esphahan, or Joney\'s Place. Street food (parathas, chaat, petha): Rs 100-200 per person.' },
      { name: 'Optional guide & toll', text: 'ASI-licensed guide: Rs 1,500-2,500. Yamuna Expressway toll (one-way): Rs 415 for car. Photography fee at Taj: Rs 200 if using DSLR.' },
      { name: 'Total trip cost', text: 'Same-day Delhi-Agra family of 4 in sedan: approximately Rs 8,500-10,500 all-inclusive. Includes cab, fuel, tolls, parking, monument tickets, lunch.' }
    ]
  });

  const serviceSchema = buildTripCostService({ slug: 'agra-trip-cost-from-delhi', data });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {placeSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <TripCostClient data={data} />
    </>
  );
}
