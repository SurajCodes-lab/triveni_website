import { getComparisonBySlug } from '@/utilis/comparisonData';
import ComparisonClient from '@/components/content/ComparisonClient';
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from '@/lib/seo/schema-generators';

const SLUG = 'fortuner-vs-innova-crysta';
const data = getComparisonBySlug(SLUG);

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
      <ComparisonClient data={data} />
    </>
  );
}
