import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllRoadTripSlugs } from '@/utilis/roadTripData';

export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'road-trip';
const LABEL = "Road Trip Circuits";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllRoadTripSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = "Road Trip Circuits by Car — Multi-Day Itineraries";
  const description = "Multi-day road trip circuits by car across North India — itineraries, distances, chauffeur. Triveni Cabs 7668570551.";
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
        name: "Road Trip Circuits by Car — Multi-Day Itineraries",
        description: "Multi-day road trip circuits by car across North India — itineraries, distances, chauffeur. Triveni Cabs 7668570551.",
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
        title={"Road Trip Circuits by Car — Multi-Day Itineraries"}
        subtitle={"Epic North India drives, fully planned"}
        intro={"Discover multi-day road-trip circuits across the Himalayas, Rajasthan and beyond — day-by-day itineraries, distances and the right vehicle — with a driver who knows the roads."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — Road Trip Circuits"}
      />
    </>
  );
}
