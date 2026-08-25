import { notFound } from 'next/navigation';
import { getAllHowToReachCities, getHowToReachCityData } from '@/utilis/howToReachData';
import HowToReachClient from '@/components/content/HowToReachClient';
import { getArticleSchema, withSpeakableFAQ } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// ISR - Revalidate every hour
export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  const cities = getAllHowToReachCities();
  return cities.map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { city } = resolvedParams;

  const cityData = getHowToReachCityData(city);
  if (!cityData) {
    return {
      title: tightenTitle('How to Reach - Travel Guide'),
      description: 'Complete travel guide on how to reach popular Indian destinations by air, train, road and bus.',
    };
  }

  return {
    title: cityData.title,
    description: cityData.metaDescription,
    keywords: [
      `how to reach ${cityData.name}`,
      `how to reach ${cityData.name} by car`,
      `how to reach ${cityData.name} by train`,
      `how to reach ${cityData.name} by bus`,
      `how to reach ${cityData.name} from delhi`,
      `${cityData.name} travel guide`,
      `${cityData.name} airport`,
      `${cityData.name} railway station`,
      `cab to ${cityData.name}`,
      `taxi to ${cityData.name}`,
      `${cityData.name} road trip`,
      `best way to reach ${cityData.name}`,
    ],
    alternates: {
      canonical: `https://www.trivenicabs.in/how-to-reach-${city}`,
    },
    openGraph: {
      title: cityData.title,
      description: cityData.metaDescription,
      url: `https://www.trivenicabs.in/how-to-reach-${city}`,
      siteName: 'Triveni Cabs',
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: cityData.title,
      description: cityData.metaDescription,
      creator: '@trivenicabs',
      site: '@trivenicabs',
    },
  };
}

export default async function HowToReachPage({ params }) {
  const resolvedParams = await params;
  const { city } = resolvedParams;

  const cityData = getHowToReachCityData(city);
  if (!cityData) {
    notFound();
  }

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Travel Guides", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 3, "name": `How to Reach ${cityData.name}`, "item": `https://www.trivenicabs.in/how-to-reach-${city}` }
    ]
  };

  // Article schema with auto-fresh dateModified + Speakable for voice search
  const articleSchema = getArticleSchema({
    slug: `how-to-reach-${city}`,
    headline: `How to Reach ${cityData.name} — Air · Train · Road · Bus Travel Guide 2026`,
    description: cityData.metaDescription,
    image: '/images/triveni-cabs-og.jpg',
    datePublished: '2026-01-15',
    speakableSelectors: ['.speakable-headline', '.speakable-lead']
  });

  // FAQ schema if cityData has faqs
  const faqSchema = cityData.faqs && cityData.faqs.length > 0 ? withSpeakableFAQ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityData.faqs.map(item => ({
      "@type": "Question",
      "name": item.question || item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer || item.a },
    })),
  }) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <HowToReachClient cityData={cityData} />
    </>
  );
}
