// src/app/tempo-traveller/page.js

import { tempoFleet, tempoRoutes } from '@/utilis/tempoTravellerData';
import TempoMainClient from '@/components/TempoMainClient';

export const metadata = {
  title: 'Travel Together, Celebrate Forever! Tempo Traveller Hire 12-17 Seater | Triveni Cabs',
  description: '👨‍👩‍👧‍👦 Perfect for family trips & group adventures! Spacious AC tempo travellers (12-17 seater) with pushback seats, entertainment & luggage space. Delhi to Manali, Shimla, Agra & beyond. Corporate tours, family vacations, pilgrimages made easy. Book your comfort ride!',
  keywords: 'tempo traveller on rent, 12 seater tempo traveller, 17 seater tempo traveller, tempo traveller hire, group travel India, family tour package, corporate travel, pilgrimage tour, Delhi to Manali tempo traveller, luxury tempo traveller, AC tempo traveller, tempo traveller with driver, outstation tempo traveller',
  alternates: {
    canonical: 'https://trivenicabs.in/tempo-traveller'
  },
  openGraph: {
    title: 'Travel Together! 12-17 Seater Tempo Traveller Hire',
    description: '👨‍👩‍👧‍👦 Spacious • Comfortable • Affordable | Perfect for family & group travel across India',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Group Travel Made Easy! Tempo Traveller Hire',
    description: '12-17 seater • AC • Pushback seats • Entertainment. Your group adventure starts here!'
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