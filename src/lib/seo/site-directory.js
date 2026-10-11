import knownRoutes from '@/generated/known-routes.json';
import { bookingCanonicalRedirects } from './booking-canonical-redirects.mjs';
import { isNoindexPath } from './noindex-families.mjs';

const redirects = new Set(bookingCanonicalRedirects.map(r => r.source));
import { pageFact } from './page-facts';

export const directoryPaths = [...new Set(knownRoutes)].filter(p =>
  p.startsWith('/') && !p.startsWith('/_') && !p.startsWith('/api/') &&
  !/\.[a-z0-9]+$/i.test(p) && !redirects.has(p) && !isNoindexPath(p)
).sort();

const families = {
  'distance': ['Distance guides', 'Road distances, driving times and route-specific cab fares.'],
  'toll-cost': ['Toll guides', 'Published toll-plaza breakdowns and road-trip costs.'],
  'one-way-cab': ['One-way cabs', 'One-way booking routes with vehicle fares and pickup information.'],
  'round-trip': ['Round trips', 'Return journeys, billing distances and vehicle choices.'],
  'airport-service': ['Airport services', 'Airport hubs and terminal-specific meeting points and fares.'],
  'blog': ['Travel articles', 'Destination, monument and trip-planning articles.'],
  'sightseeing': ['Sightseeing', 'City tours, schedules, attractions and vehicle options.'],
  'best-time-to-visit': ['Best time to visit', 'Seasons, weather and destination planning.'],
  'how-to-reach': ['How to reach', 'Comparisons of road, rail and flight connections.'],
  'corporate-transportation-service': ['Corporate transport', 'City, industry and use-case transport services.'],
  'event-transportation-service': ['Event transport', 'Event, venue and group-vehicle transport options.'],
  'tempo-traveller': ['Tempo Traveller', 'Group transport by city, corridor and vehicle capacity.'],
  'force-urbania': ['Force Urbania', 'Urbania city, corridor and seating options.'],
  'maharaja-tempo-traveller': ['Maharaja Tempo Traveller', 'Premium group-vehicle city and corridor services.'],
  'wedding': ['Wedding transport', 'Wedding cars, guest transport and decoration packages.'],
};
export function directoryFamily(p) {
  if (/^[^/]*-airport-to-/.test(p.slice(1))) return ['Airport transfers','Airport-to-destination distances, fixed fares and pickup details.'];
  const prefix=p.split('/')[1];
  return families[prefix] || (p.split('/').length>2
    ? [prefix.replace(/-/g,' '), 'Published service and destination pages; consult each page for its terms.']
    : ['City services and guides','City hubs, booking corridors and individually authored travel guides.']);
}
export function pathLabel(p) {
  return p.slice(1).replace(/\//g,' · ').replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
}
export function cityDirectory(city) {
  const slug=String(city).toLowerCase().replace(/\s+/g,'-');
  const escaped=slug.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const boundary=new RegExp(`(?:^|/|-)${escaped}(?:$|/|-)`);
  const groups=new Map();
  for(const p of directoryPaths.filter(p=>p!==`/${slug}` && boundary.test(p))) {
    const [name]=directoryFamily(p);
    if(!groups.has(name)) groups.set(name,[]);
    groups.get(name).push({href:p,label:pathLabel(p)});
  }
  return [...groups].map(([name,links])=>({name,links}));
}
export function machineDirectory() {
  const groups=new Map();
  for(const p of directoryPaths) {
    const [name,description]=directoryFamily(p);
    if(!groups.has(name)) groups.set(name,{description,paths:[]});
    groups.get(name).paths.push(p);
  }
  // Week 49 (Workstream G): one fact per commercial page beside its address,
  // from the same records the page renders (page-facts.js); pages without a
  // fact in their record list the address alone.
  return [...groups].map(([name,{description,paths}])=>`## ${name} (${paths.length})\n${description}\n${paths.map(p=>{const f=pageFact(p);return `https://www.trivenicabs.in${p}${f?` — ${f}`:''}`;}).join('\n')}`).join('\n\n');
}
