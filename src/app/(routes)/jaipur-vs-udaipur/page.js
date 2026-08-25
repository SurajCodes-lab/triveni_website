import { getCompareBySlug } from '@/utilis/destinationCompareData';
import DestinationCompareClient from '@/components/compare/DestinationCompareClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const data = getCompareBySlug('jaipur-vs-udaipur');

const images = {
  dest1: {
    hero: { src: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg', alt: 'Jaipur the Pink City with its Rajput palace architecture' },
    card: { src: '/images/sightseeing/Jaipur/Hawa_Mahal.jpg', alt: 'Hawa Mahal, the honeycomb palace facade in the old city of Jaipur' },
  },
  dest2: {
    hero: { src: '/images/sightseeing/Udaipur/Udaipur_hero_section.jpg', alt: 'Udaipur the City of Lakes with palaces rising above the water' },
    card: { src: '/images/sightseeing/Udaipur/Lake_Pichola.jpg', alt: 'Lake Pichola in Udaipur with the island palaces at sunset' },
  },
};

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle(data.title),
  description: data.metaDescription,
  keywords: data.keywords,
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/jaipur-vs-udaipur' },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/jaipur-vs-udaipur',
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

export default function JaipurVsUdaipurPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Jaipur vs Udaipur", "item": "https://www.trivenicabs.in/jaipur-vs-udaipur" },
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
