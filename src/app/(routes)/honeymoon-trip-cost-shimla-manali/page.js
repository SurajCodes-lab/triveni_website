import { getTripCostBySlug } from '@/utilis/tripCostData';
import TripCostClient from '@/components/tripcost/TripCostClient';

const data = getTripCostBySlug('honeymoon-trip-cost-shimla-manali');

export const revalidate = 3600;

export const metadata = {
  title: data.title,
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
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Honeymoon Trip Cost Shimla Manali", "item": "https://www.trivenicabs.in/honeymoon-trip-cost-shimla-manali" },
    ],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TripCostClient data={data} />
    </>
  );
}
