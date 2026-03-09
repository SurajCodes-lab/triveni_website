import { allRoutes, vehicleHubPages, dhamPages, packagePages, imageBank } from '@/utilis/chardhamYatraData';
import ChardhamHubClient from './ChardhamHubClient';

export const revalidate = false;

export const metadata = {
  title: 'Char Dham Yatra 2026 by Car, SUV, Bus | Sedan ₹12/km | Triveni Cabs',
  description: 'Book Char Dham Yatra 2026 by car — Sedan ₹12/km, Ertiga ₹15/km, Innova ₹18/km, Fortuner ₹25/km, Bus ₹32/km. All 4 Dhams covered. Experienced drivers. 24/7 support. Call 7668570551.',
  keywords: 'chardham yatra by car, char dham yatra 2026, chardham by innova, chardham by bus, kedarnath by car, badrinath by car, do dham yatra, chardham car rental, chardham yatra package, chardham yatra cost',
  alternates: {
    canonical: 'https://www.trivenicabs.in/chardham-yatra',
  },
  openGraph: {
    title: 'Char Dham Yatra 2026 by Car, SUV, Bus | Triveni Cabs',
    description: 'Complete Char Dham Yatra vehicle booking. Sedan, Ertiga, Innova, Fortuner, Tempo, Bus. From ₹12/km. 35+ route options.',
    url: 'https://www.trivenicabs.in/chardham-yatra',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: 'https://www.trivenicabs.in/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
        width: 1200,
        height: 630,
        alt: 'Char Dham Yatra by Car - Triveni Cabs',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra 2026 | Book Car, SUV, Bus',
    description: 'Sedan ₹12/km, Innova ₹18/km, Bus ₹32/km. Experienced mountain drivers. 24/7 support.',
    images: ['https://www.trivenicabs.in/images/sightseeing/Char_Dham/Chardham_hero_section.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export default function ChardhamYatraHubPage() {
  const baseUrl = 'https://www.trivenicabs.in';

  // JSON-LD schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${baseUrl}/chardham-yatra` },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Char Dham Yatra Vehicle Options',
    description: 'Complete list of vehicles available for Char Dham Yatra 2026',
    numberOfItems: allRoutes.length,
    itemListElement: vehicleHubPages.map((route, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: route.title,
      url: `${baseUrl}/chardham-yatra/${route.slug}`,
    })),
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Triveni Cabs - Char Dham Yatra Services',
    description: 'Premium car, SUV, and bus rental services for Char Dham Yatra in Uttarakhand',
    telephone: '+91-7668570551',
    url: `${baseUrl}/chardham-yatra`,
    priceRange: '₹₹-₹₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Uttarakhand',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.0869',
      longitude: '78.2676',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '2450',
      bestRating: '5',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best car for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'The Toyota Innova Crysta is the most recommended car for Char Dham Yatra due to its powerful diesel engine, spacious cabin, and proven reliability on Himalayan roads. For budget travel, Ertiga (₹15/km) is excellent. For luxury, Toyota Fortuner with 4x4 is the best choice.' },
      },
      {
        '@type': 'Question',
        name: 'How much does Char Dham Yatra by car cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'Char Dham Yatra by car costs: Sedan (Swift Dzire) from ₹38,400, Ertiga from ₹48,000, Innova Crysta from ₹57,600, Fortuner from ₹80,000 for a 12-day Delhi roundtrip. This includes vehicle, fuel, driver, and tolls. Accommodation is extra.' },
      },
      {
        '@type': 'Question',
        name: 'Can I book a bus for Char Dham Yatra group tour?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, Triveni Cabs offers 22-seater to 56-seater AC buses for Char Dham Yatra group tours. Prices range from ₹32/km to ₹60/km. Ideal for temple trusts, community groups, wedding parties, and corporate teams. Call 7668570551 for group booking.' },
      },
      {
        '@type': 'Question',
        name: 'Which is the shortest route for Char Dham Yatra?',
        acceptedAnswer: { '@type': 'Answer', text: 'The shortest route for Char Dham Yatra starts from Rishikesh or Haridwar. From Rishikesh, the total circuit is approximately 1,300 km (one-way). From Delhi, add 230 km each way. Haridwar and Rishikesh save 1-2 days compared to Delhi.' },
      },
      {
        '@type': 'Question',
        name: 'When is the best time for Char Dham Yatra 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'The best time for Char Dham Yatra 2026 is May-June (opening season, pleasant weather) and September-October (post-monsoon, clear skies). The temples typically open in late April/early May and close in November. Monsoon (July-August) is not recommended due to landslides.' },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ChardhamHubClient
        vehicleHubs={vehicleHubPages}
        dhamPages={dhamPages}
        packagePages={packagePages}
        allRoutes={allRoutes}
        imageBank={imageBank}
      />
    </>
  );
}
