import { getComparisonBySlug } from '@/utilis/comparisonData';
import ComparisonClient from '@/components/content/ComparisonClient';
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from '@/lib/seo/schema-generators';

const SLUG = 'tempo-traveller-vs-mini-bus';
const data = getComparisonBySlug(SLUG);

export const revalidate = 3600;

export const metadata = {
  title: `${data.title} | Triveni Cabs`,
  description: data.metaDescription,
  keywords: 'tempo traveller vs mini bus, 17 seater vs 22 seater, group travel vehicle comparison, tempo or bus for trip, mini bus rental vs tempo, best vehicle for group tour',
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

export default function TempoVsMiniBusPage() {
  const schemas = combineSchemas(
    generateWebPageSchema({ name: data.title, slug: SLUG, description: data.metaDescription }),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Vehicles', url: '/vehicles' },
      { name: 'Tempo vs Mini Bus', url: `/${SLUG}` },
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
