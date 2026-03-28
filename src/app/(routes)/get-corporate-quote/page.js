import GetCorporateQuoteClient from './GetCorporateQuoteClient';

export const revalidate = false;

export const metadata = {
  title: 'Get Corporate Quote | Employee Transport from ₹8/km | Triveni Cabs',
  description:
    'Request a customized corporate transportation quote. Employee pickup-drop, office shuttles, executive car rental, airport transfers. Dedicated account manager. Response within 2-4 hours. Call 7668570551.',
  keywords:
    'corporate cab quote, employee transport quote, office shuttle pricing, corporate car rental, executive cab service, monthly car rental corporate, employee pickup drop service, corporate transportation India, Triveni Cabs corporate',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/get-corporate-quote',
  },
  openGraph: {
    title: 'Get Your Corporate Transport Quote — Custom Plans from ₹8/km',
    description:
      'Fill out a quick form and get a tailored corporate transportation proposal. 500+ fleet, 5 cities, 24/7 support. Dedicated account manager responds within 2-4 hours.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/get-corporate-quote',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: '/images/citypage_hero_section_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Corporate Transportation Quote - Triveni Cabs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Corporate Quote | Employee Transport from ₹8/km | Triveni Cabs',
    description:
      'Customized corporate transportation. Employee pickup-drop, shuttles, executive rentals. 500+ fleet. Response in 2-4 hours.',
    creator: '@TriveniCabs',
    site: '@TriveniCabs',
    images: ['/images/citypage_hero_section_image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Transportation',
};

export default function GetCorporateQuotePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Corporate Transport',
        item: 'https://www.trivenicabs.in/corporate-transportation-service',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Get Quote',
        item: 'https://www.trivenicabs.in/get-corporate-quote',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GetCorporateQuoteClient />
    </>
  );
}
