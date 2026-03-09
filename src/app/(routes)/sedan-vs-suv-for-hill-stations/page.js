import { getComparisonBySlug } from '@/utilis/comparisonData';
import ComparisonClient from '@/components/content/ComparisonClient';
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from '@/lib/seo/schema-generators';

const SLUG = 'sedan-vs-suv-for-hill-stations';
const data = getComparisonBySlug(SLUG);

export const revalidate = false;

export const metadata = {
  title: `${data.title} | Triveni Cabs`,
  description: data.metaDescription,
  keywords: 'sedan vs suv hill station, best car for manali, dzire or innova for shimla, sedan or suv mountain roads, hill station car rental, suv for hills india',
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

export default function SedanVsSuvHillsPage() {
  const schemas = combineSchemas(
    generateWebPageSchema({ name: data.title, slug: SLUG, description: data.metaDescription }),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Vehicles', url: '/vehicles' },
      { name: 'Sedan vs SUV for Hills', url: `/${SLUG}` },
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
