// src/app/bus-routes/page.js

import { busFleet, busRoutes } from '@/utilis/busRoutesData';
import BusMainClient from '@/components/BusMainClient';

export const metadata = {
  title: 'Big Groups, Bigger Adventures! Luxury Bus Hire 22-56 Seater | Triveni Cabs',
  description: '🚌 Roll in style with luxury coaches! From 22 to 56 seater Volvo & AC buses perfect for corporate events, weddings, school tours & pilgrimages. Reclining seats, entertainment, spacious luggage. Delhi to anywhere in India. Your group, our comfort commitment!',
  keywords: 'bus rental India, luxury bus hire, volvo bus rental, 22 seater bus, 32 seater bus, 45 seater bus, 56 seater bus, corporate bus rental, wedding bus, school bus hire, pilgrimage bus, AC bus rental, group tour bus, charter bus service, long distance bus rental',
  alternates: {
    canonical: 'https://trivenicabs.in/bus-routes'
  },
  openGraph: {
    title: 'Big Groups, Bigger Adventures! Luxury Bus Hire',
    description: '🚌 22-56 seater Volvo & AC buses | Corporate • Weddings • Tours • Perfect for large groups',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Bus Hire for Groups | 22-56 Seater',
    description: '🚌 Volvo comfort • Reclining seats • Entertainment. Big groups travel better together!'
  }
};

export default function BusRoutesPage() {
  // Prepare data on server side for SEO
  const getAllRoutes = () => {
    const routes = [];
    Object.entries(busRoutes).forEach(([origin, destinations]) => {
      destinations.forEach(dest => {
        routes.push({
          origin,
          destination: dest.name,
          type: dest.type,
          distance: dest.distance,
          duration: dest.duration,
          slug: `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${dest.name.toLowerCase().replace(/\s+/g, '-')}`
        });
      });
    });
    return routes;
  };

  const getPopularRoutes = () => {
    const routes = getAllRoutes();
    // Return first 8 routes as popular (Delhi routes)
    return routes.slice(0, 8);
  };

  const pageData = {
    popularRoutes: getPopularRoutes(),
    allRoutes: getAllRoutes(),
    fleet: busFleet,
    cities: Object.keys(busRoutes)
  };

  return <BusMainClient data={pageData} />;
}
