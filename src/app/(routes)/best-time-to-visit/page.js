import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllBestTimeSlugs } from '@/utilis/bestTimeToVisitData';

export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'best-time-to-visit';
const LABEL = "Best Time to Visit Guides";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllBestTimeSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = "Best Time to Visit — North India Destination Guides";
  const description = "Best time to visit North India destinations — weather, seasons, festivals. Plan and book a cab. Triveni Cabs 7668570551.";
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
        name: "Best Time to Visit — North India Destination Guides",
        description: "Best time to visit North India destinations — weather, seasons, festivals. Plan and book a cab. Triveni Cabs 7668570551.",
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
        title={"Best Time to Visit — North India Destination Guides"}
        subtitle={"Season-by-season advice for every destination"}
        intro={"Find the best time to visit popular North India destinations — weather by season, peak vs off-season, festivals and what to pack — then book a cab for a comfortable trip."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — Best Time to Visit Guides"}
      />
    </>
  );
}
