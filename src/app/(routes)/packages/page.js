import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllPackageSlugs } from '@/utilis/packageData';

export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'packages';
const LABEL = "Hotel + Cab Packages";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllPackageSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = "Hotel + Cab Packages — Stay & Travel Bundled";
  const description = "Hotel + cab packages across North India — stay plus chauffeur-driven car, one booking. Triveni Cabs 7668570551.";
  return {
    title,
    description,
    alternates: { canonical: `${BASE}/${DIR}` },
    openGraph: {
      title: `${title} | Triveni Cabs`,
      description,
      url: `${BASE}/${DIR}`,
      type: 'website',
      images: ['/images/og/og-default.jpg'],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  const items = getItems();
  const url = `${BASE}/${DIR}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#collection`,
        name: "Hotel + Cab Packages — Stay & Travel Bundled",
        description: "Hotel + cab packages across North India — stay plus chauffeur-driven car, one booking. Triveni Cabs 7668570551.",
        url,
        isPartOf: { '@id': `${BASE}/#website` },
        about: { '@id': `${BASE}/#localbusiness` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
          { '@type': 'ListItem', position: 2, name: LABEL, item: url },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${url}#itemlist`,
        numberOfItems: items.length,
        itemListElement: items.slice(0, 200).map((it, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: it.label,
          url: `${BASE}${it.href}`,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CategoryHubClient
        title={"Hotel + Cab Packages — Stay & Travel Bundled"}
        subtitle={"Curated trips with stay and chauffeur-driven cab"}
        intro={"Browse value bundles that pair comfortable stays with a chauffeur-driven cab for sightseeing and transfers — one simple booking for a stress-free North India trip."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — Hotel + Cab Packages"}
      />
    </>
  );
}
