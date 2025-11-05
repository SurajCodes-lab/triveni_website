// src/app/bus-routes/page.js

import { busFleet, busRoutes } from '@/utilis/busRoutesData';
import BusMainClient from '@/components/BusMainClient';

export const metadata = {
  title: 'Bus Routes Service | Premium Group Travel & Tours',
  description: 'Book premium buses for comfortable group travel across India. From 22 to 56 seater luxury coaches. Professional drivers, AC vehicles, competitive rates.',
  keywords: 'bus rental, group travel, India tour, luxury buses, volvo buses, corporate travel, pilgrimage tours'
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
