import CategoryHubClient from '@/components/hubs/CategoryHubClient';
import { getAllHowToReachSlugs } from '@/utilis/howToReachRouteData';
import { tightenTitle } from '@/lib/seo/serp-ctr';
export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const DIR = 'how-to-reach';
const LABEL = "How to Reach Guides";

const humanize = (slug) => slug.split('-').map((w) =>
  ['to', 'vs', 'and', 'near', 'from', 'by', 'in', 'of', 'the'].includes(w)
    ? w
    : w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

function getItems() {
  const slugs = getAllHowToReachSlugs() || [];
  return slugs.map((slug) => ({ href: `/${DIR}/${slug}`, label: humanize(slug) }));
}

export async function generateMetadata() {
  const title = tightenTitle("How to Reach — Complete Route & Transport Guides");
  const description = "How to reach North India destinations by car, train, bus and air, with the best cab option. Triveni Cabs 7668570551.";
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
        name: "How to Reach — Complete Route & Transport Guides",
        description: "How to reach North India destinations by car, train, bus and air, with the best cab option. Triveni Cabs 7668570551.",
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
        title={"How to Reach — Complete Route & Transport Guides"}
        subtitle={"Every way to get there, with the easiest option"}
        intro={"Detailed \"how to reach\" guides for North India destinations — by car, train, bus and air — with distances, times and the most comfortable door-to-door cab option."}
        breadcrumbLabel={LABEL}
        items={items}
        waText={"Hi, I need help choosing — How to Reach Guides"}
      />
    </>
  );
}
