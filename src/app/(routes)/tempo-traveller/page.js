// src/app/tempo-traveller/page.js

import { tempoFleet, tempoRoutes } from '@/utilis/tempoTravellerData';
import TempoMainClient from '@/components/TempoMainClient';

export const metadata = {
  title: 'Tempo Traveller on Rent 12-26 Seater ₹23/km - AC, Professional Drivers | Book Online 24/7',
  description: 'Book premium tempo traveller for group travel across India. 12, 16, 17, 20, 26 seater AC vehicles with pushback seats, music system, GPS tracking. Delhi to Manali, Shimla, Jaipur, Agra routes. 100+ destinations. Transparent pricing ₹23-27/km. Professional drivers, 24/7 booking, instant confirmation. Perfect for family trips, corporate tours, pilgrimages.',
  keywords: 'tempo traveller on rent, tempo traveller booking, 12 seater tempo traveller, 17 seater tempo traveller, 20 seater tempo traveller, 26 seater tempo traveller, tempo traveller hire India, AC tempo traveller with driver, group travel India, outstation tempo traveller, tempo traveller Delhi to Manali, tempo traveller Delhi to Shimla, luxury tempo traveller, family tour package, corporate travel, pilgrimage tour, tempo traveller rental service, book tempo traveller online, tempo traveller rates per km, tempo traveller charges, best tempo traveller service',
  alternates: {
    canonical: 'https://trivenicabs.in/tempo-traveller'
  },
  openGraph: {
    title: 'Premium Tempo Traveller Rental - 12 to 26 Seater AC Vehicles with Professional Drivers',
    description: '100+ Routes Across India | ₹23-27/km All-Inclusive | GPS Tracking | 24/7 Booking | 4.8★ Rated Service | Instant Confirmation',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    url: 'https://trivenicabs.in/tempo-traveller'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tempo Traveller Rental India - Book 12-26 Seater AC Vehicles Online',
    description: 'Premium group travel service | Professional drivers | Transparent pricing ₹23-27/km | 100+ routes | Book now for instant confirmation!'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  }
};

export default function TempoTravellerPage() {
  // Prepare data on server side for SEO
  const getAllRoutes = () => {
    const routes = [];
    Object.entries(tempoRoutes).forEach(([origin, destinations]) => {
      destinations.forEach(dest => {
        routes.push({
          origin,
          destination: dest.name,
          type: dest.type,
          slug: `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${dest.name.toLowerCase().replace(/\s+/g, '-')}`
        });
      });
    });
    return routes;
  };

  const getPopularRoutes = () => {
    const routes = getAllRoutes();
    // Return first 8 routes as popular
    return routes.slice(0, 8);
  };

  const pageData = {
    popularRoutes: getPopularRoutes(),
    allRoutes: getAllRoutes(),
    fleet: tempoFleet,
    cities: Object.keys(tempoRoutes)
  };

  return <TempoMainClient data={pageData} />;
}