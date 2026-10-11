import { getCompareBySlug } from '@/utilis/destinationCompareData';
import DestinationCompareClient from '@/components/compare/DestinationCompareClient';
import { buildDestinationCompareMeta } from '@/lib/seo/serp-ctr';

const data = getCompareBySlug('kashmir-vs-ladakh');
const meta = buildDestinationCompareMeta(data);

const images = {
  dest1: {
    hero: { src: '/images/sightseeing/Kashmir_Valley/Kashmir_Valley_hero_section.jpg', alt: 'The Kashmir Valley with green meadows below the Himalayan ranges' },
    card: { src: '/images/sightseeing/Kashmir_Valley/Dal_Lake.jpg', alt: 'Shikara boats and houseboats on Dal Lake in Srinagar' },
  },
  dest2: {
    hero: { src: '/images/sightseeing/Ladakh/Ladakh_hero_section.jpg', alt: 'The high-altitude cold desert landscape of Ladakh' },
    card: { src: '/images/sightseeing/Ladakh/Pangong_Lake.jpg', alt: 'Pangong Lake in Ladakh with its shifting blue water at 14,000 feet' },
  },
};

export const revalidate = 3600;

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: data.keywords,
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/kashmir-vs-ladakh' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/kashmir-vs-ladakh',
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
      <DestinationCompareClient data={data} images={images} />
    </>
  );
}
