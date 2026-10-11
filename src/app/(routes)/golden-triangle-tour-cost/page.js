import { getTripCostBySlug } from '@/utilis/tripCostData';
import TripCostClient from '@/components/tripcost/TripCostClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const data = getTripCostBySlug('golden-triangle-tour-cost');

const media = {
  hero: {
    src: '/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg',
    alt: 'The Golden Triangle tour circuit linking Delhi, Agra and Jaipur',
  },
  gallery: [
    { src: '/images/sightseeing/Delhi/India_Gate.jpg', alt: 'India Gate on Kartavya Path in Delhi', caption: 'Delhi' },
    { src: '/images/sightseeing/Agra/Taj_mahal.jpg', alt: 'The Taj Mahal in Agra seen across its reflecting pool', caption: 'Agra' },
    { src: '/images/sightseeing/Jaipur/Hawa_Mahal.jpg', alt: 'Hawa Mahal, the honeycomb palace facade in the old city of Jaipur', caption: 'Jaipur' },
  ],
};

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle(data.title),
  description: data.metaDescription,
  keywords: data.keywords,
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/golden-triangle-tour-cost' },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/golden-triangle-tour-cost',
    siteName: 'Triveni Cabs™',
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

export default function GoldenTriangleTourCostPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Golden Triangle Tour Cost", "item": "https://www.trivenicabs.in/golden-triangle-tour-cost" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.metaDescription,
    "author": { "@type": "Organization", "name": "Triveni Cabs" },
    "publisher": { "@type": "Organization", "name": "Triveni Cabs", "url": "https://www.trivenicabs.in" },
    "datePublished": "2025-01-01",
    "dateModified": "2026-01-01"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TripCostClient data={data} media={media} />
    </>
  );
}
