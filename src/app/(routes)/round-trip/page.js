import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllRoundTripSlugs } from '@/utilis/roundTripData';
import { tightenTitle } from '@/lib/seo/serp-ctr';
export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'round-trip';
const LABEL = "Round Trip Cabs";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllRoundTripSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = tightenTitle("Round Trip Cab Routes — Same Cab Both Ways");
  const description = "Round-trip cab routes across North India — same car both ways, transparent two-way fares, driver waiting included. Triveni Cabs™ 7668570551.";
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
        name: "Round Trip Cab Routes — Same Cab Both Ways",
        description: "Round-trip cab routes across North India — same car both ways, transparent two-way fares, driver waiting included. Triveni Cabs 7668570551.",
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
        title={"Round Trip Cab Routes — Same Cab Both Ways"}
        subtitle={"Return journeys at the best round-trip fares"}
        intro={"Book a round-trip cab that keeps the same car and driver for your return, with transparent two-way fares and free waiting at your destination. Browse popular round-trip routes below."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — Round Trip Cabs"}
      />
    </>
  );
}
