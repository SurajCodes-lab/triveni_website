import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllTollCostSlugs } from '@/utilis/tollCostData';

export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'toll-cost';
const LABEL = "Toll Cost Guides";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllTollCostSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = "Toll Cost & Toll Plaza Lists for North India Routes";
  const description = "Plaza-wise toll charges and total toll cost for North India car routes, plus toll-inclusive cab fares. Triveni Cabs — call 7668570551.";
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
        name: "Toll Cost & Toll Plaza Lists for North India Routes",
        description: "Plaza-wise toll charges and total toll cost for North India car routes, plus toll-inclusive cab fares. Triveni Cabs — call 7668570551.",
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
        title={"Toll Cost & Toll Plaza Lists for North India Routes"}
        subtitle={"Exact toll-plaza-wise charges for car travel across North India"}
        intro={"See the complete toll-plaza-wise breakdown and total toll cost for car journeys across North India, plus a toll-inclusive cab fare so there are no surprises on the highway."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — Toll Cost Guides"}
      />
    </>
  );
}
