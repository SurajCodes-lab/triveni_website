import { getCompareBySlug } from '@/utilis/destinationCompareData';
import DestinationCompareClient from '@/components/compare/DestinationCompareClient';

const data = getCompareBySlug('kashmir-vs-ladakh');

export const revalidate = false;

export const metadata = {
  title: data.title,
  description: data.metaDescription,
  keywords: data.keywords,
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/kashmir-vs-ladakh' },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/kashmir-vs-ladakh',
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

export default function KashmirVsLadakhPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Kashmir vs Ladakh", "item": "https://www.trivenicabs.in/kashmir-vs-ladakh" },
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
      <DestinationCompareClient data={data} />
    </>
  );
}
