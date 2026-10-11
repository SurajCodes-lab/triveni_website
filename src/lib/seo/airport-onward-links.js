import { canonicalLink } from './canonical-link';
import { routeExists } from './route-exists';

// Resolve on the server. Keep every onward journey card even if no dedicated
// booking page exists; the existing form can request that exact transfer.
export function airportOnwardLinks(city, exists = routeExists) {
  return (city.routes || []).map(label => {
    const parts = label.split(/\s+to\s+/i);
    const slug = parts.length === 2
      ? parts.map(p => p.trim().toLowerCase().replace(/\s+/g, '-')).join('-to-')
      : null;
    const candidate = slug ? canonicalLink(`/${slug}`) : null;
    return {
      label,
      href: candidate && exists(candidate) ? candidate : '#airport-enquiry',
      fromCity: city.airport || city.name,
      toCity: parts.length === 2 ? parts[1].trim() : city.name,
    };
  });
}
