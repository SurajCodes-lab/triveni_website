import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { tourDetails } from '@/utilis/data';

export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'tour-package';
const LABEL = 'Tour Packages';

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = Object.keys(tourDetails || {});
  return slugs.map((slug) => {
    const t = tourDetails[slug] || {};
    return {
      href: `/${DIR}/${slug}`,
      label: t.title || t.name || humanize(slug),
      sub: t.duration || undefined,
    };
  });
}

export async function generateMetadata() {
  const title = 'Tour Packages by Car — Curated North India Trips';
  const description =
    'Browse curated multi-day tour packages across North India — Golden Triangle, Rajasthan, Himachal, Kashmir, Char Dham and more — with chauffeur-driven cabs. Triveni Cabs 7668570551.';
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
        name: 'Tour Packages by Car — Curated North India Trips',
        description:
          'Curated multi-day tour packages across North India with chauffeur-driven cabs.',
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
        title="Tour Packages by Car"
        subtitle="Curated multi-day North India trips with a chauffeur-driven cab"
        intro="Explore hand-picked tour packages — Golden Triangle, Rajasthan, Himachal, Kashmir, Char Dham and more — each with day-by-day itineraries and a private car with an experienced driver. Pick a package below or tell us your dates for a custom quote."
        breadcrumbLabel={LABEL}
        items={items}
        waText="Hi, I'm interested in a tour package. Please share details."
      />
    </>
  );
}
