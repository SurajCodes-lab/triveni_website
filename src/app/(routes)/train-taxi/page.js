import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllTrainTaxiSlugs } from '@/utilis/trainTaxiData';

export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'train-taxi';
const LABEL = "Train + Taxi Guides";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllTrainTaxiSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = "Train + Taxi — Station Transfers & Last-Mile Cabs";
  const description = "Train + taxi guides: railway station pickups and onward cabs across North India. Triveni Cabs 7668570551.";
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
        name: "Train + Taxi — Station Transfers & Last-Mile Cabs",
        description: "Train + taxi guides: railway station pickups and onward cabs across North India. Triveni Cabs 7668570551.",
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
        title={"Train + Taxi — Station Transfers & Last-Mile Cabs"}
        subtitle={"Seamless onward travel from the railway station"}
        intro={"Combine train travel with a reliable taxi for the last mile — station pickups with flight/PNR tracking, fixed fares and onward outstation cabs from major railway stations."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — Train + Taxi Guides"}
      />
    </>
  );
}
