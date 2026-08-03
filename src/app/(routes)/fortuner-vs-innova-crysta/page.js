import { getComparisonBySlug } from '@/utilis/comparisonData';
import ComparisonClient from '@/components/content/ComparisonClient';
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from '@/lib/seo/schema-generators';
import SemanticComparison from '@/components/seo/SemanticComparison';

const SLUG = 'fortuner-vs-innova-crysta';
const data = getComparisonBySlug(SLUG);

const media = {
  v1: {
    src: '/images/car/premium_suv.jpg',
    alt: 'Toyota Fortuner premium SUV, the top of the Triveni Cabs outstation fleet',
    caption: 'Ladder-frame SUV built for long highway runs and rough hill roads.',
  },
  v2: {
    src: '/images/car/innova_crysta.jpg',
    alt: 'Toyota Innova Crysta seven-seater MUV used for Triveni Cabs family trips',
    caption: 'Softer ride, more usable third row, noticeably lower per-km rate.',
  },
};

export const revalidate = 3600;

export const metadata = {
  title: `${data.title} | Triveni Cabs`,
  description: data.metaDescription,
  keywords: 'fortuner vs innova crysta, fortuner or innova for outstation, premium suv rental comparison, toyota fortuner rental, innova crysta vs fortuner price, best suv for long drive',
  alternates: { canonical: `https://www.trivenicabs.in/${SLUG}` },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: 'article',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${SLUG}`,
    siteName: 'Triveni Cabs',
  },

  twitter: {
    card: 'summary_large_image',
    title: "${data.title} | Triveni Cabs",
    description: "",
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
};

export default function FortunerVsInnovaPage() {
  const schemas = combineSchemas(
    generateWebPageSchema({ name: data.title, slug: SLUG, description: data.metaDescription }),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Vehicles', url: '/vehicles' },
      { name: 'Fortuner vs Innova Crysta', url: `/${SLUG}` },
    ]),
    generateFAQSchema(data.faqs),
  );

  return (
    <>
      {schemas && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      )}
      <SemanticComparison data={data} />
      <ComparisonClient data={data} media={media} />
    </>
  );
}
