import { getTripCostBySlug } from '@/utilis/tripCostData';
import TripCostClient from '@/components/tripcost/TripCostClient';
import { getArticleSchema, getHowToSchema, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import { buildTripCostService } from '@/utilis/tripSchemaHelper';

const data = getTripCostBySlug('ayodhya-trip-cost-from-delhi');

export const revalidate = 3600;

export const metadata = {
  title: data.title,
  description: data.metaDescription,
  keywords: data.keywords,
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/ayodhya-trip-cost-from-delhi' },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/ayodhya-trip-cost-from-delhi',
    siteName: 'Triveni Cabs',
    images: [{
      url: '/images/sightseeing/Ayodhya/ayodha_hero_section.jpg',
      width: 1200, height: 630,
      alt: 'Delhi to Ayodhya trip cost — complete per-vehicle breakdown',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: data.title,
    description: data.metaDescription,
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Ayodhya/ayodha_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AyodhyaTripCostPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Ayodhya Trip Cost from Delhi", "item": "https://www.trivenicabs.in/ayodhya-trip-cost-from-delhi" },
    ],
  };
  // Article schema with auto-fresh dateModified + Speakable for voice search
  const articleSchema = getArticleSchema({
    slug: "ayodhya-trip-cost-from-delhi",
    headline: data.title,
    description: data.metaDescription,
    image: '/images/triveni-cabs-og.jpg',
    datePublished: '2025-01-01',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.cost-table', '#faq-answer-0']
  });

  // Place schema — anchors content to real-world geographic entity
  const placeSchema = getCityPlaceSchema("ayodhya", { idSlug: "ayodhya-trip-cost-from-delhi" });

  // HowTo schema — "how to budget Delhi to Ayodhya trip" (rich snippet target)
  const howToSchema = getHowToSchema({
    name: `How to Plan Your Delhi to ${"Ayodhya"} Trip Budget`,
    description: `Step-by-step Delhi to ${"Ayodhya"} trip cost calculation: cab fare, accommodation, food, sightseeing. Save 25-40% over packaged tours.`,
    totalTime: 'PT5M',
    steps: [
      { name: 'Choose your vehicle', text: 'Sedan for 4 passengers, SUV (Innova) for 6, or Tempo Traveller for larger groups. Per-km rate \u20B911-15. Round trip includes driver allowance + fuel.' },
      { name: 'Add accommodation', text: 'Budget hotels \u20B91,500-3,000/night, mid-range \u20B93,500-6,000, luxury \u20B97,500+. Book direct for 10-15% better rates than aggregator platforms.' },
      { name: 'Budget for food and entries', text: 'Local food \u20B9300-600/person/day. Monument/sightseeing entries \u20B950-500 per place. Optional guide \u20B9800-1,500/day.' },
      { name: 'Account for tolls and extras', text: 'Highway tolls (one-way) \u20B9200-700. Parking \u20B9100-300/day. Photography permits, water, tips. Always carry \u20B92,000-3,000 buffer cash.' },
      { name: 'Total trip cost estimate', text: `Family of 4, 2-day ${"Ayodhya"} trip: approximately \u20B925,000-45,000 all-inclusive. Sedan + mid-range hotel + meals + entries + fuel + tolls.` }
    ]
  });

  const serviceSchema = buildTripCostService({ slug: 'ayodhya-trip-cost-from-delhi', data });

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
