import { getCompareBySlug } from '@/utilis/destinationCompareData';
import DestinationCompareClient from '@/components/compare/DestinationCompareClient';
import { buildDestinationCompareMeta } from '@/lib/seo/serp-ctr';

const data = getCompareBySlug('mussoorie-vs-nainital');
const meta = buildDestinationCompareMeta(data);

const images = {
  dest1: {
    hero: { src: '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg', alt: 'Mussoorie hill station overlooking the Doon valley from the Garhwal foothills' },
    card: { src: '/images/sightseeing/Mussoorie/Kempty_Falls.jpg', alt: 'Kempty Falls near Mussoorie cascading down terraced rock ledges' },
  },
  dest2: {
    hero: { src: '/images/sightseeing/Nainital/Nainital_hero_section.jpg', alt: 'Nainital town wrapped around its lake in the Kumaon hills' },
    card: { src: '/images/sightseeing/Nainital/Naini_Lake.jpg', alt: 'Boats on Naini Lake, the centrepiece of Nainital' },
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
  alternates: { canonical: '/mussoorie-vs-nainital' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/mussoorie-vs-nainital',
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

export default function MussoorieVsNainitalPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Mussoorie vs Nainital", "item": "https://www.trivenicabs.in/mussoorie-vs-nainital" },
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
