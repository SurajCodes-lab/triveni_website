import { getComparisonBySlug } from '@/utilis/comparisonData';
import ComparisonClient from '@/components/content/ComparisonClient';
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from '@/lib/seo/schema-generators';
import SemanticComparison from '@/components/seo/SemanticComparison';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = 'sedan-vs-suv-for-hill-stations';
const data = getComparisonBySlug(SLUG);

const media = {
  v1: {
    src: '/images/car/swift_dzire.jpg',
    alt: 'Maruti Swift compact cab from the Swift Dzire sedan class',
    caption: 'Cheapest per km and easy on narrow hill roads, but limited ground clearance.',
  },
  v2: {
    src: '/images/car/innova_crysta.jpg',
    alt: 'Toyota Innova Crysta MUV, the SUV-class option for hill station trips',
    caption: 'Higher clearance and stronger engine for steep climbs and snow-season roads.',
  },
};

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle(`${data.title}`),
  description: data.metaDescription,
  keywords: 'sedan vs suv hill station, best car for manali, dzire or innova for shimla, sedan or suv mountain roads, hill station car rental, suv for hills india',
  alternates: { canonical: `https://www.trivenicabs.in/${SLUG}` },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    type: 'article',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${SLUG}`,
    siteName: 'Triveni Cabs™',
  },

  twitter: {
    card: 'summary_large_image',
    title: "${data.title} | Triveni Cabs™",
    description: "",
    creator: '@trivenicabs',
    site: '@trivenicabs',
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
      <SemanticComparison data={data} />
      <ComparisonClient data={data} media={media} />
    </>
  );
}
