import { getComparisonBySlug } from '@/utilis/comparisonData';
import ComparisonClient from '@/components/content/ComparisonClient';
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from '@/lib/seo/schema-generators';

const SLUG = '12-seater-vs-17-seater-tempo';
const data = getComparisonBySlug(SLUG);

export const revalidate = 3600;

export const metadata = {
  title: `${data.title} | Triveni Cabs`,
  description: data.metaDescription,
  keywords: '12 seater vs 17 seater tempo, tempo traveller size comparison, which tempo to book, 12 or 17 seater for group, tempo traveller capacity, best tempo for pilgrimage',
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

export default function TwelveVsSeventeenSeaterPage() {
  const schemas = combineSchemas(
    generateWebPageSchema({ name: data.title, slug: SLUG, description: data.metaDescription }),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Tempo Traveller', url: '/tempo-traveller' },
      { name: '12 vs 17 Seater', url: `/${SLUG}` },
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
