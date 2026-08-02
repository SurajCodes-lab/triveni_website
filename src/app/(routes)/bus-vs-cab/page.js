import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllBusVsCabSlugs } from '@/utilis/busVsCabData';

export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'bus-vs-cab';
const LABEL = "Bus vs Cab Comparisons";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllBusVsCabSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = "Bus vs Cab — Honest Route-by-Route Comparison";
  const description = "Bus vs cab comparison for North India routes — cost, time, comfort. Decide and book. Triveni Cabs 7668570551.";
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
        name: "Bus vs Cab — Honest Route-by-Route Comparison",
        description: "Bus vs cab comparison for North India routes — cost, time, comfort. Decide and book. Triveni Cabs 7668570551.",
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
        title={"Bus vs Cab — Honest Route-by-Route Comparison"}
        subtitle={"Which is really cheaper, faster and comfier?"}
        intro={"A clear bus-vs-cab comparison for each route — real cost, total time, comfort and convenience — so you can decide with confidence and book the option that suits you."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — Bus vs Cab Comparisons"}
      />
    </>
  );
}
