// src/app/bus-routes/[route]/page.js

import { busFleet, busRoutes, localSightseeing, delhiToAgraRoute } from '@/utilis/busRoutesData';
import DynamicBusRoutesClient from '@/components/DynamicBusRoutesClient';

export async function generateStaticParams() {
  // Generate static params for popular routes
  const popularRoutes = [
    'delhi-to-agra',
    'delhi-to-jaipur',
    'delhi-to-shimla',
    'delhi-to-manali',
    'delhi-to-haridwar',
    'delhi-to-rishikesh',
    'delhi-to-amritsar',
    'delhi-to-dharamshala',
    'mumbai-to-pune',
    'mumbai-to-goa',
    'jaipur-to-delhi',
    'jaipur-to-agra',
    'jaipur-to-udaipur'
  ];

  return popularRoutes.map((route) => ({
    route: route,
  }));
}

export async function generateMetadata({ params }) {
  // Await params in Next.js 15
  const resolvedParams = await params;
  const { route } = resolvedParams;

  // Add null check
  if (!route) {
    return {
      title: 'Bus Routes Service | Premium Group Travel',
      description: 'Book premium buses for comfortable group travel across India.'
    };
  }

  const routeParts = route.split('-to-');
  if (routeParts.length !== 2) {
    return {
      title: 'Bus Routes Service | Premium Group Travel',
      description: 'Book premium buses for comfortable group travel across India.'
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
    title: `Big Group? No Problem! ${originFormatted} to ${destinationFormatted} Luxury Bus 22-56 Seater | Book Now & Save 20%`,
    description: `🚌 Roll in comfort from ${originFormatted} to ${destinationFormatted}! Luxury Volvo & AC buses (22-56 seater) with reclining seats, entertainment & AC. Perfect for corporate events, weddings, pilgrimages & tours. 1000+ groups trusted us. Professional drivers, GPS tracking, on-time guarantee. Book online in 60 seconds & get instant confirmation + 20% discount!`,
    keywords: [
      `bus ${origin} to ${destination}`,
      `${origin} to ${destination} bus booking`,
      `${origin} to ${destination} bus price`,
      `bus on rent ${origin} to ${destination}`,
      `luxury bus ${origin} to ${destination}`,
      `volvo bus ${origin} to ${destination}`,
      `book bus ${origin} to ${destination}`,
      `${origin} to ${destination} bus fare`,
      `bus hire ${origin} to ${destination}`,
      `${origin} ${destination} bus`,
      `${origin} to ${destination} group travel`,
      `bus rental ${origin} to ${destination}`,
      `ac bus ${origin} to ${destination}`,
      `mini bus ${origin} to ${destination}`,
      `${origin} to ${destination} outstation bus`,
      `22 seater bus ${origin} to ${destination}`,
      `32 seater bus ${origin} to ${destination}`,
      `45 seater bus ${origin} to ${destination}`,
      `56 seater bus ${origin} to ${destination}`,
      `corporate bus ${origin} to ${destination}`,
      `wedding bus ${origin} to ${destination}`,
      `pilgrimage bus ${origin} to ${destination}`,
      `school bus hire ${origin} to ${destination}`,
      `cheap bus ${origin} to ${destination}`,
      `best bus service ${origin} to ${destination}`
    ].join(', '),
    alternates: {
      canonical: `https://trivenicabs.in/bus-routes/${route}`
    },
    openGraph: {
      title: `Big Groups Travel Better! ${originFormatted} to ${destinationFormatted} Luxury Bus`,
      description: `🚌 22-56 seater Volvo & AC buses | Reclining seats • Entertainment • GPS tracking. 1000+ groups trusted us. Book now & save 20%!`,
      url: `https://trivenicabs.in/bus-routes/${route}`,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Triveni Cabs',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${originFormatted} to ${destinationFormatted} Luxury Bus | 22-56 Seater`,
      description: `🚌 Volvo comfort • AC • Entertainment. Perfect for corporate, weddings & tours. Book now!`
    }
  };
}

export default async function BusRoutePage({ params }) {
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
    if (busRoutes[originCity]) {
      const routeInfo = busRoutes[originCity].find(r =>
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
      distance: 'Contact for details',
      duration: 'Contact for details',
      origin: originCity,
      destination: destinationCity,
      exists: false
    };
  };

  // Get detailed route info for Delhi to Agra
  const getDetailedRouteInfo = () => {
    if (route === 'delhi-to-agra') {
      return delhiToAgraRoute;
    }
    return null;
  };

  const routeData = findRouteData(originFormatted, destinationFormatted);
  const destinationSightseeing = localSightseeing?.[destinationFormatted] || [];
  const detailedRouteInfo = getDetailedRouteInfo();

  // Prepare data for client component
  const pageData = {
    routeSlug: route,
    origin: originFormatted,
    destination: destinationFormatted,
    routeData: routeData,
    localSightseeing: destinationSightseeing,
    fleet: busFleet,
    detailedRouteInfo: detailedRouteInfo
  };

  return <DynamicBusRoutesClient data={pageData} />;
}
