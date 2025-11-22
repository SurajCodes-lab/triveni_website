// src/app/tempo-traveller/[route]/page.js

import { tempoFleet, tempoRoutes, localSightseeing } from '@/utilis/tempoTravellerData';
import DynamicTempoRoutesClient from '@/components/DynamicTempoRoutes';

export async function generateStaticParams() {
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
      title: 'Tempo Traveller Service | Premium Group Travel',
      description: 'Book premium tempo travellers for comfortable group travel across India.'
    };
  }
  
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
    metadataBase: new URL('https://trivenicabs.in'),
    alternates: {
      canonical: `https://trivenicabs.in/tempo-traveller/${route}`,
    },
    openGraph: {
      title: `${originFormatted} to ${destinationFormatted} Tempo Traveller | 12-26 Seater AC with Driver | Book Online`,
      description: `✓ Best Rates ₹23-27/km ✓ Professional Drivers ✓ GPS Tracking ✓ Pushback Seats ✓ Music System ✓ 24/7 Booking ✓ Instant Confirmation | Book tempo traveller from ${originFormatted} to ${destinationFormatted}`,
      url: `https://trivenicabs.in/tempo-traveller/${route}`,
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

  return <DynamicTempoRoutesClient data={pageData} />;
}