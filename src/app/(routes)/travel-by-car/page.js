import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllTravelByCarSlugs } from '@/utilis/travelByCarData';
import { tightenTitle } from '@/lib/seo/serp-ctr';
export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'travel-by-car';
const LABEL = "Travel by Car Guides";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllTravelByCarSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = tightenTitle("Travel by Car — Route Guides for North India");
  const description = "Car travel route guides across North India: drive time, stops and chauffeur-driven cab options. Triveni Cabs™ 7668570551.";
  return {
    title,
    description,
    alternates: { canonical: `${BASE}/${DIR}` },
    openGraph: {
      title: `${title} | Triveni Cabs™`,
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
        name: "Travel by Car — Route Guides for North India",
        description: "Car travel route guides across North India: drive time, stops and chauffeur-driven cab options. Triveni Cabs 7668570551.",
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
        title={"Travel by Car — Route Guides for North India"}
        subtitle={"Scenic drives, stops and cab options for every corridor"}
        intro={"Plan a comfortable car journey on any North India corridor — route, drive time, scenic stops and the right vehicle — and book a chauffeur-driven cab so you just enjoy the ride."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — Travel by Car Guides"}
      />
    </>
  );
}
