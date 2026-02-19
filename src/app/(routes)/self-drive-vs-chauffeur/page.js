import { getComparisonBySlug } from '@/utilis/comparisonData';
import ComparisonClient from '@/components/content/ComparisonClient';
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from '@/lib/seo/schema-generators';

const SLUG = 'self-drive-vs-chauffeur';
const data = getComparisonBySlug(SLUG);

export const revalidate = 3600;

export const metadata = {
  title: `${data.title} | Triveni Cabs`,
  description: data.metaDescription,
  keywords: 'self drive vs chauffeur india, hire driver or self drive, car with driver india, self drive rental india, chauffeur driven car cost, is self drive safe india',
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

export default function SelfDriveVsChauffeurPage() {
  const schemas = combineSchemas(
    generateWebPageSchema({ name: data.title, slug: SLUG, description: data.metaDescription }),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: 'Self Drive vs Chauffeur', url: `/${SLUG}` },
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
