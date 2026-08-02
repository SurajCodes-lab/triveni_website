import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllDistanceRouteSlugs } from '@/utilis/distanceData';

export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'distance';
const LABEL = "Distance Guides";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllDistanceRouteSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = "Road Distance Guides — Km, Drive Time & Cab Fares";
  const description = "Road distance, drive time, toll and cab fares for hundreds of North India routes. Plan your trip and book an AC cab with Triveni Cabs. Call 7668570551.";
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
        name: "Road Distance Guides — Km, Drive Time & Cab Fares",
        description: "Road distance, drive time, toll and cab fares for hundreds of North India routes. Plan your trip and book an AC cab with Triveni Cabs. Call 7668570551.",
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
        title={"Road Distance Guides — Km, Drive Time & Cab Fares"}
        subtitle={"Every major North India route, with real driving distance & one-way cab fares"}
        intro={"Find the exact road distance, driving time, highway, toll and AC cab fare for hundreds of North India routes. Each guide is built from real route data so you can plan the trip and book a cab in one place."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — Distance Guides"}
      />
    </>
  );
}
