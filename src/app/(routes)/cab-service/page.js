import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllCabServiceSlugs } from '@/utilis/cabServiceCityData';
import { tightenTitle } from '@/lib/seo/serp-ctr';
export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'cab-service';
const LABEL = "City Cab Services";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllCabServiceSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = tightenTitle("City Cab & Taxi Services Across North India");
  const description = "City-wise cab and taxi services across North India: local, outstation, airport. Verified drivers, transparent fares. Triveni Cabs 7668570551.";
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
        name: "City Cab & Taxi Services Across North India",
        description: "City-wise cab and taxi services across North India: local, outstation, airport. Verified drivers, transparent fares. Triveni Cabs 7668570551.",
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
        title={"City Cab & Taxi Services Across North India"}
        subtitle={"Local trips, outstation, airport transfers — city by city"}
        intro={"Book reliable AC cabs in any of our service cities for local sightseeing, outstation tours, airport transfers and corporate travel — verified drivers, transparent fares, 24/7 support."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — City Cab Services"}
      />
    </>
  );
}
