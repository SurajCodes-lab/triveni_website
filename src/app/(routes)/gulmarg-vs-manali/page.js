import { getCompareBySlug } from '@/utilis/destinationCompareData';
import DestinationCompareClient from '@/components/compare/DestinationCompareClient';
import { buildDestinationCompareMeta } from '@/lib/seo/serp-ctr';

const data = getCompareBySlug('gulmarg-vs-manali');
const meta = buildDestinationCompareMeta(data);

const images = {
  dest1: {
    hero: { src: '/images/sightseeing/Gulmarg/Gulmarg_hero_section.jpg', alt: 'Gulmarg meadow in Kashmir below the snow-covered Pir Panjal range' },
    card: { src: '/images/sightseeing/Gulmarg/Gondola_Cable_Car.jpg', alt: 'The Gulmarg Gondola cable car climbing towards Apharwat peak' },
  },
  dest2: {
    hero: { src: '/images/sightseeing/Manali/Manali_hero_section.jpg', alt: 'Manali valley framed by snow-capped Himalayan peaks and deodar forest' },
    card: { src: '/images/sightseeing/Manali/Solang Valley.jpg', alt: 'Solang Valley near Manali, the adventure sports meadow below the snow line' },
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
  alternates: { canonical: '/gulmarg-vs-manali' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/gulmarg-vs-manali',
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

export default function GulmargVsManaliPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Gulmarg vs Manali", "item": "https://www.trivenicabs.in/gulmarg-vs-manali" },
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
