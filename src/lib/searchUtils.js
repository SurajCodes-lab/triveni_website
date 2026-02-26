import { cityRoutesData, basicCityRoutes, allCityRoutes } from '@/utilis/cityRoutesData';

// Extract all unique city names from route data
export function getAllCities() {
  const citySet = new Set();

  // Add all source cities
  Object.keys(allCityRoutes).forEach(city => citySet.add(city));

  // Add all destination cities
  Object.values(allCityRoutes).forEach(routes => {
    routes.forEach(route => {
      if (route.destination) citySet.add(route.destination);
    });
  });

  return Array.from(citySet).sort();
}

// Normalize city name for comparison
function normalize(name) {
  return name?.trim().toLowerCase().replace(/\s+/g, ' ') || '';
}

// Parse price string like "₹2,760" or "₹2760" to number
function parsePrice(priceStr) {
  if (!priceStr) return 0;
  return parseInt(priceStr.replace(/[₹,]/g, ''), 10) || 0;
}

// Get vehicle category info
function getVehicleInfo(vehicleName) {
  const name = vehicleName.toLowerCase();
  if (name.includes('sedan') || name.includes('dzire') || name.includes('etios')) {
    return { category: 'car', seats: 4, icon: 'car', tag: 'Economy', features: ['AC', '4 Seats', 'Boot Space'] };
  }
  if (name.includes('ertiga')) {
    return { category: 'car', seats: 6, icon: 'suv', tag: 'Spacious', features: ['AC', '6 Seats', 'Spacious'] };
  }
  if (name.includes('innova')) {
    return { category: 'car', seats: 7, icon: 'suv', tag: 'Premium', features: ['AC', '7 Seats', 'Premium'] };
  }
  if (name.includes('12 seater')) {
    return { category: 'tempo', seats: 12, icon: 'tempo', tag: 'Group', features: ['AC', '12 Seats', 'Groups'] };
  }
  if (name.includes('16 seater')) {
    return { category: 'tempo', seats: 16, icon: 'tempo', tag: 'Group', features: ['AC', '16 Seats', 'Groups'] };
  }
  if (name.includes('17 seater')) {
    return { category: 'tempo', seats: 17, icon: 'tempo', tag: 'Group', features: ['AC', '17 Seats', 'Groups'] };
  }
  if (name.includes('20 seater')) {
    return { category: 'tempo', seats: 20, icon: 'tempo', tag: 'Large Group', features: ['AC', '20 Seats', 'Spacious'] };
  }
  if (name.includes('26 seater') || name.includes('maharaja')) {
    return { category: 'tempo', seats: 26, icon: 'tempo', tag: 'Large Group', features: ['AC', '26 Seats', 'Maharaja'] };
  }
  if (name.includes('bus') || name.includes('coach') || name.includes('volvo')) {
    const seatMatch = vehicleName.match(/(\d+)\s*seater/i);
    const seats = seatMatch ? parseInt(seatMatch[1]) : 40;
    return { category: 'bus', seats, icon: 'bus', tag: 'Bus', features: ['AC', `${seats} Seats`, name.includes('volvo') ? 'Luxury' : name.includes('luxury') ? 'Luxury' : 'Standard'] };
  }
  return { category: 'car', seats: 4, icon: 'car', tag: 'Standard', features: ['AC'] };
}

// Search for a route between two cities
export function searchRoute(from, to, tripType = 'oneway') {
  const fromNorm = normalize(from);
  const toNorm = normalize(to);

  if (!fromNorm || !toNorm || fromNorm === toNorm) return null;

  // Search through allCityRoutes (cityRoutesData + basicCityRoutes)
  let matchedRoute = null;
  let matchedCity = null;

  for (const [city, routes] of Object.entries(allCityRoutes)) {
    if (normalize(city) === fromNorm) {
      const route = routes.find(r => normalize(r.destination) === toNorm);
      if (route) {
        matchedRoute = route;
        matchedCity = city;
        break;
      }
    }
  }

  if (matchedRoute) {
    const vehicles = matchedRoute.prices.map(p => {
      const info = getVehicleInfo(p.vehicle);
      const oneWayPrice = parsePrice(p.price);
      const roundTripPrice = parsePrice(p.roundTrip);
      return {
        name: p.vehicle,
        capacity: p.capacity || `${info.seats} guests`,
        oneWayPrice,
        roundTripPrice,
        displayPrice: tripType === 'roundtrip' ? `₹${roundTripPrice.toLocaleString('en-IN')}` : `₹${oneWayPrice.toLocaleString('en-IN')}`,
        priceNum: tripType === 'roundtrip' ? roundTripPrice : oneWayPrice,
        ...info,
      };
    }).sort((a, b) => a.priceNum - b.priceNum);

    return {
      source: 'data',
      from: matchedCity,
      to: matchedRoute.destination,
      distance: matchedRoute.distance,
      time: matchedRoute.time,
      description: matchedRoute.description,
      highway: matchedRoute.routeHighlights || '',
      highlights: matchedRoute.routeHighlights || '',
      stops: matchedRoute.popularStops || [],
      bestTime: matchedRoute.bestTimeToTravel || '',
      tip: matchedRoute.localTip || '',
      tags: matchedRoute.tags || [],
      vehicles,
      isEstimate: false,
    };
  }

  // Try reverse lookup (To → From)
  for (const [city, routes] of Object.entries(allCityRoutes)) {
    if (normalize(city) === toNorm) {
      const route = routes.find(r => normalize(r.destination) === fromNorm);
      if (route) {
        // Use reverse route pricing (same prices, just swap from/to labels)
        const vehicles = route.prices.map(p => {
          const info = getVehicleInfo(p.vehicle);
          const oneWayPrice = parsePrice(p.price);
          const roundTripPrice = parsePrice(p.roundTrip);
          return {
            name: p.vehicle,
            capacity: p.capacity || `${info.seats} guests`,
            oneWayPrice,
            roundTripPrice,
            displayPrice: tripType === 'roundtrip' ? `₹${roundTripPrice.toLocaleString('en-IN')}` : `₹${oneWayPrice.toLocaleString('en-IN')}`,
            priceNum: tripType === 'roundtrip' ? roundTripPrice : oneWayPrice,
            ...info,
          };
        }).sort((a, b) => a.priceNum - b.priceNum);

        // Capitalize city names properly
        const fromDisplay = from.charAt(0).toUpperCase() + from.slice(1);
        const toDisplay = to.charAt(0).toUpperCase() + to.slice(1);

        return {
          source: 'reverse',
          from: fromDisplay,
          to: toDisplay,
          distance: route.distance,
          time: route.time,
          description: `Travel from ${fromDisplay} to ${toDisplay} with our comfortable cab service.`,
          highway: route.routeHighlights || '',
          highlights: route.routeHighlights || '',
          stops: route.popularStops || [],
          bestTime: route.bestTimeToTravel || '',
          tip: route.localTip || '',
          tags: route.tags || [],
          vehicles,
          isEstimate: false,
        };
      }
    }
  }

  // Estimate pricing if no exact route found
  return getEstimatedRoute(from, to, tripType);
}

// Estimate route pricing using per-km rates
function getEstimatedRoute(from, to, tripType) {
  const fromDisplay = from.charAt(0).toUpperCase() + from.slice(1).toLowerCase();
  const toDisplay = to.charAt(0).toUpperCase() + to.slice(1).toLowerCase();

  // Estimate distance (we don't know exact, so give a range)
  const estimatedKm = 300; // reasonable default

  const perKmRates = [
    { vehicle: 'Sedan (Swift Dzire)', rate: 12, category: 'car', seats: 4, tag: 'Economy', features: ['AC', '4 Seats', 'Boot Space'] },
    { vehicle: 'SUV Ertiga', rate: 15, category: 'car', seats: 6, tag: 'Spacious', features: ['AC', '6 Seats', 'Spacious'] },
    { vehicle: 'SUV Innova Crysta', rate: 18, category: 'car', seats: 7, tag: 'Premium', features: ['AC', '7 Seats', 'Premium'] },
    { vehicle: '12 Seater Tempo', rate: 23, category: 'tempo', seats: 12, tag: 'Group', features: ['AC', '12 Seats', 'Groups'] },
    { vehicle: '17 Seater Tempo', rate: 26, category: 'tempo', seats: 17, tag: 'Group', features: ['AC', '17 Seats', 'Groups'] },
    { vehicle: '26 Seater Maharaja', rate: 26, category: 'tempo', seats: 26, tag: 'Large Group', features: ['AC', '26 Seats', 'Maharaja'] },
  ];

  const vehicles = perKmRates.map(v => {
    const oneWayPrice = v.rate * estimatedKm;
    const roundTripPrice = oneWayPrice * 2;
    return {
      name: v.vehicle,
      capacity: `${v.seats} guests`,
      oneWayPrice,
      roundTripPrice,
      displayPrice: tripType === 'roundtrip' ? `₹${roundTripPrice.toLocaleString('en-IN')}` : `₹${oneWayPrice.toLocaleString('en-IN')}`,
      priceNum: tripType === 'roundtrip' ? roundTripPrice : oneWayPrice,
      category: v.category,
      seats: v.seats,
      icon: v.category === 'tempo' ? 'tempo' : v.category === 'bus' ? 'bus' : v.seats > 5 ? 'suv' : 'car',
      tag: v.tag,
      features: v.features,
    };
  }).sort((a, b) => a.priceNum - b.priceNum);

  return {
    source: 'estimate',
    from: fromDisplay,
    to: toDisplay,
    distance: 'Contact for exact distance',
    time: 'Contact for exact time',
    description: `Book a cab from ${fromDisplay} to ${toDisplay}. Call us for the best rates.`,
    highway: '',
    highlights: '',
    stops: [],
    bestTime: '',
    tip: '',
    tags: [],
    vehicles,
    isEstimate: true,
  };
}

// Get popular routes for homepage display
export function getPopularRoutes() {
  const popularPairs = [
    { from: 'Delhi', to: 'Agra' },
    { from: 'Delhi', to: 'Jaipur' },
    { from: 'Delhi', to: 'Chandigarh' },
    { from: 'Delhi', to: 'Shimla' },
    { from: 'Delhi', to: 'Haridwar' },
    { from: 'Delhi', to: 'Manali' },
    { from: 'Agra', to: 'Jaipur' },
    { from: 'Delhi', to: 'Amritsar' },
  ];

  return popularPairs.map(({ from, to }) => {
    const routes = allCityRoutes[from];
    if (!routes) return null;
    const route = routes.find(r => r.destination === to);
    if (!route) return null;

    const sedanPrice = route.prices.find(p => p.vehicle === 'Sedan');
    return {
      from,
      to,
      distance: route.distance,
      time: route.time,
      startingPrice: sedanPrice ? sedanPrice.price : route.prices[0]?.price || '₹0',
      tags: route.tags || [],
    };
  }).filter(Boolean);
}
