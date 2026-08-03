import { getComparisonBySlug } from '@/utilis/comparisonData';
import ComparisonClient from '@/components/content/ComparisonClient';
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from '@/lib/seo/schema-generators';
import SemanticComparison from '@/components/seo/SemanticComparison';

const SLUG = 'self-drive-vs-chauffeur';
const data = getComparisonBySlug(SLUG);

const media = {
  v1: {
    src: '/images/car/ertiga.jpg',
    alt: 'Maruti Ertiga MPV of the type commonly rented for self-drive trips',
    caption: 'You take the wheel, the fuel bill, the parking and the night driving.',
  },
  v2: {
    src: '/images/car/innova_crysta.jpg',
    alt: 'Toyota Innova Crysta with a professional driver, the Triveni Cabs chauffeur service',
    caption: 'A driver who knows the route handles traffic, tolls and mountain roads.',
  },
};

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

  twitter: {
    card: 'summary_large_image',
    title: "${data.title} | Triveni Cabs",
    description: "",
    creator: '@trivenicabs',
    site: '@trivenicabs',
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
      <SemanticComparison data={data} />
      <ComparisonClient data={data} media={media} />
    </>
  );
}
