// src/app/tempo-traveller/[route]/page.js

import { tempoFleet, tempoRoutes, localSightseeing, tempoCities } from '@/utilis/tempoTravellerData';
import { chardhamRoutes } from '@/utilis/chardhamData';
import DynamicTempoRoutesClient from '@/components/DynamicTempoRoutes';
import TempoCityClient from '@/components/TempoCityClient';
import ChardhamTempoClient from '@/components/ChardhamTempoClient';

// Helper to check if slug is a Chardham route
function isChardhamSlug(slug) {
  return chardhamRoutes.some(route => route.slug === slug);
}

// Helper to get Chardham data by slug
function getChardhamBySlug(slug) {
  return chardhamRoutes.find(route => route.slug === slug);
}

// Helper to check if slug is a city
function isCitySlug(slug) {
  return Object.values(tempoCities).some(city => city.slug === slug);
}

// Helper to get city data by slug
function getCityBySlug(slug) {
  return Object.entries(tempoCities).find(([_, city]) => city.slug === slug);
}

export async function generateStaticParams() {
  // Generate static params for cities
  const cityParams = Object.values(tempoCities).map(city => ({
    route: city.slug,
  }));

  // Generate static params for popular routes
  const popularRoutes = [
    'delhi-to-shimla',
    'delhi-to-manali',
    'delhi-to-dharamshala',
    'delhi-to-amritsar',
    'delhi-to-haridwar',
    'delhi-to-rishikesh',
    'delhi-to-jaipur',
    'delhi-to-agra',
    'chandigarh-to-shimla',
    'chandigarh-to-manali',
    'chandigarh-to-dharamshala',
    'jaipur-to-delhi',
    'jaipur-to-agra',
    'jaipur-to-udaipur',
    'agra-to-delhi',
    'agra-to-jaipur'
  ];

  const routeParams = popularRoutes.map((route) => ({
    route: route,
  }));

  const chardhamParams = chardhamRoutes.map(route => ({
    route: route.slug
  }));

  return [...cityParams, ...routeParams, ...chardhamParams];
}

export async function generateMetadata({ params }) {
  // Await params in Next.js 15
  const resolvedParams = await params;
  const { route } = resolvedParams;

  // Add null check
  if (!route) {
    return {
      title: 'Tempo Traveller Service | Premium Group Travel',
      description: 'Book premium tempo travellers for comfortable group travel across India.'
    };
  }

  // Check if it's a Chardham page
  if (isChardhamSlug(route)) {
    const chardhamData = getChardhamBySlug(route);
    return {
      title: chardhamData.seoTitle,
      description: chardhamData.seoDesc,
      applicationName: 'Triveni Cabs',
      metadataBase: new URL('https://www.trivenicabs.in'),
      alternates: {
        canonical: `https://www.trivenicabs.in/tempo-traveller/${route}`,
      },
      openGraph: {
        title: chardhamData.seoTitle,
        description: chardhamData.seoDesc,
        url: `https://www.trivenicabs.in/tempo-traveller/${route}`,
        type: 'website',
        locale: 'en_IN',
        siteName: 'Triveni Cabs - Chardham Yatra',
        images: [
          {
            url: chardhamData.images?.hero || '/images/tempo-hero.jpg',
            width: 1200,
            height: 630,
            alt: chardhamData.title,
            type: 'image/jpeg',
          },
        ],
      },
      category: 'Travel & Spiritual',
    };
  }

  // Check if it's a city page
  if (isCitySlug(route)) {
    const [cityName, cityData] = getCityBySlug(route);
    const routeCount = tempoRoutes[cityName]?.length || 0;

    return {
      title: `Tempo Traveller on Rent in ${cityData.name} | 12-26 Seater AC ₹23/km | ${routeCount} Destinations | Triveni Cabs`,
      description: `Book tempo traveller from ${cityData.name} to ${routeCount}+ destinations. ${cityData.description} 12, 17, 20, 26 seater AC tempo traveller with professional driver. Best rates ₹23-27/km. Popular routes: ${cityData.popularDestinations.join(', ')}. 24/7 booking, instant confirmation. Call +91-7668570551.`,
      applicationName: 'Triveni Cabs',
      metadataBase: new URL('https://www.trivenicabs.in'),
      alternates: {
        canonical: `https://www.trivenicabs.in/tempo-traveller/${route}`,
      },
      openGraph: {
        title: `Tempo Traveller from ${cityData.name} | ${routeCount} Destinations | Book Online`,
        description: `${cityData.tagline} - Book tempo traveller from ${cityData.name} to ${cityData.popularDestinations.join(', ')} and more. ₹23-27/km all-inclusive.`,
        url: `https://www.trivenicabs.in/tempo-traveller/${route}`,
        type: 'website',
        locale: 'en_IN',
        siteName: 'Triveni Cabs - Tempo Traveller Rental',
        images: [
          {
            url: '/images/tempo-hero.jpg',
            width: 1200,
            height: 630,
            alt: `Tempo Traveller on Rent from ${cityData.name} - Triveni Cabs`,
            type: 'image/jpeg',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `Tempo Traveller from ${cityData.name} | ${routeCount} Destinations | ₹23/km`,
        description: `${cityData.tagline} | Book tempo traveller to ${cityData.popularDestinations.join(', ')} | Call +91-7668570551`,
        site: '@trivenicabs',
        images: ['/images/tempo-hero.jpg'],
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      category: 'Travel & Transportation',
    };
  }

  // It's a route page
  const routeParts = route.split('-to-');
  if (routeParts.length !== 2) {
    return {
      title: 'Tempo Traveller Service | Premium Group Travel',
      description: 'Book premium tempo travellers for comfortable group travel across India.'
    };
  }

  const [origin, destination] = routeParts;

  const formatCityName = (city) => {
    return city.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const originFormatted = formatCityName(origin);
  const destinationFormatted = formatCityName(destination);

  return {
    title: `${originFormatted} to ${destinationFormatted} Tempo Traveller on Rent | 12-26 Seater AC ₹23/km | Book Online Triveni Cabs`,
    description: `Book tempo traveller from ${originFormatted} to ${destinationFormatted}. 12, 17, 20, 26 seater AC tempo traveller with professional driver. Best rates ₹23-27/km all-inclusive. Pushback seats, music system, GPS tracking. Instant booking, 24/7 service. Perfect for family trips, group tours, corporate travel, pilgrimages. 2500+ satisfied customers. Professional drivers with 5+ years experience. Clean sanitized vehicles. Call +91-7668570551 for instant confirmation.`,
    applicationName: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: {
      canonical: `https://www.trivenicabs.in/tempo-traveller/${route}`,
    },
    openGraph: {
      title: `${originFormatted} to ${destinationFormatted} Tempo Traveller | 12-26 Seater AC with Driver | Book Online`,
      description: `✓ Best Rates ₹23-27/km ✓ Professional Drivers ✓ GPS Tracking ✓ Pushback Seats ✓ Music System ✓ 24/7 Booking ✓ Instant Confirmation | Book tempo traveller from ${originFormatted} to ${destinationFormatted}`,
      url: `https://www.trivenicabs.in/tempo-traveller/${route}`,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Triveni Cabs - Tempo Traveller Rental',
      images: [
        {
          url: '/images/tempo-hero.jpg',
          width: 1200,
          height: 630,
          alt: `${originFormatted} to ${destinationFormatted} Tempo Traveller on Rent - 12 to 26 Seater AC Vehicles - Triveni Cabs`,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${originFormatted} to ${destinationFormatted} Tempo Traveller | AC 12-26 Seater | ₹23/km`,
      description: `Book tempo traveller on rent | Professional drivers | GPS tracking | Pushback seats | 24/7 service | Call +91-7668570551`,
      site: '@trivenicabs',
      images: ['/images/tempo-hero.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'Travel & Transportation',
  };
}

export default async function TempoTravellerRoutePage({ params }) {
  // Await params in Next.js 15
  const resolvedParams = await params;
  const { route } = resolvedParams;

  // Add null check and handle invalid routes
  if (!route) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Route</h1>
          <p className="text-gray-600">The requested route was not found.</p>
        </div>
      </div>
    );
  }

  // Check if it's a Chardham page
  if (isChardhamSlug(route)) {
    const chardhamData = getChardhamBySlug(route);
    return <ChardhamTempoClient data={chardhamData} />;
  }

  // Check if it's a city page
  if (isCitySlug(route)) {
    const [cityName, cityData] = getCityBySlug(route);
    const cityRoutes = tempoRoutes[cityName] || [];

    // Prepare all cities data for "Other Cities" section
    const allCitiesData = Object.entries(tempoCities).map(([name, data]) => ({
      ...data,
      routeCount: tempoRoutes[name]?.length || 0
    }));

    const pageData = {
      cityData: cityData,
      routes: cityRoutes,
      fleet: tempoFleet,
      allCities: allCitiesData
    };

    return <TempoCityClient data={pageData} />;
  }

  // It's a route page
  const routeParts = route.split('-to-');
  if (routeParts.length !== 2) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Route Format</h1>
          <p className="text-gray-600">The route format should be origin-to-destination.</p>
        </div>
      </div>
    );
  }

  const [origin, destination] = routeParts;

  const formatCityName = (city) => {
    return city.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const originFormatted = formatCityName(origin);
  const destinationFormatted = formatCityName(destination);

  // Find route data on server side
  const findRouteData = (originCity, destinationCity) => {
    if (tempoRoutes[originCity]) {
      const routeInfo = tempoRoutes[originCity].find(r =>
        r.name.toLowerCase() === destinationCity.toLowerCase()
      );
      if (routeInfo) {
        return {
          ...routeInfo,
          origin: originCity,
          destination: destinationCity,
          exists: true
        };
      }
    }

    return {
      name: destinationCity,
      type: 'Tourism',
      origin: originCity,
      destination: destinationCity,
      exists: false
    };
  };

  // Check if tourist spots are available for the destination
  const hasTouristSpots = (city) => {
    const spotsAvailable = ['Delhi', 'Agra', 'Jaipur', 'Udaipur', 'Haridwar', 'Rishikesh', 'Shimla', 'Manali', 'Amritsar', 'Lucknow', 'Varanasi', 'Jodhpur', 'Ayodhya'];
    return spotsAvailable.includes(city);
  };

  const routeData = findRouteData(originFormatted, destinationFormatted);
  const destinationSightseeing = localSightseeing?.[destinationFormatted] || [];

  // Prepare data for client component
  const pageData = {
    routeSlug: route,
    origin: originFormatted,
    destination: destinationFormatted,
    routeData: routeData,
    hasTouristSpots: hasTouristSpots(destinationFormatted),
    localSightseeing: destinationSightseeing,
    fleet: tempoFleet
  };

  // BreadcrumbList schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tempo Traveller",
        "item": "https://www.trivenicabs.in/tempo-traveller"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${originFormatted} to ${destinationFormatted}`,
        "item": `https://www.trivenicabs.in/tempo-traveller/${route}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DynamicTempoRoutesClient data={pageData} />
    </>
  );
}