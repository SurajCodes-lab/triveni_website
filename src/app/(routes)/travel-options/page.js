import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllTravelOptionsSlugs } from '@/utilis/travelOptionsData';
import { tightenTitle } from '@/lib/seo/serp-ctr';
export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'travel-options';
const LABEL = "Travel Options";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllTravelOptionsSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = tightenTitle("Travel Options Compared — Cab vs Train vs Bus");
  const description = "Compare cab vs train vs bus vs flight for North India routes — cost, time, comfort. Triveni Cabs™ 7668570551.";
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
        name: "Travel Options Compared — Cab vs Train vs Bus",
        description: "Compare cab vs train vs bus vs flight for North India routes — cost, time, comfort. Triveni Cabs 7668570551.",
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
        title={"Travel Options Compared — Cab vs Train vs Bus"}
        subtitle={"Pick the smartest way to travel each route"}
        intro={"Compare cab, train, bus and flight options for North India routes — cost, time and comfort side by side — so you can choose the best way to travel, then book a cab if it wins."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — Travel Options"}
      />
    </>
  );
}
