import { airportRoutes, getRelatedRoutes, getAirportRouteServiceSchema } from '@/utilis/airportOutstationData';
import { getDistanceRoute } from '@/utilis/distanceData';
import AirportOutstationClient from './AirportOutstationClient';

export default function AirportRoutePage({ slug }) {
  const original = airportRoutes[slug];
  const corridorSlug = `${original.airportCity}-to-${original.destination}`.toLowerCase().replace(/\s+/g, '-');
  // City-to-city distances are reference facts, never substituted for airport distances or fares.
  const road = getDistanceRoute(corridorSlug);
  const sibling = Object.values(airportRoutes).find(r => r.airportCity === original.airportCity && r.terminals?.length);
  // Week 52 — the h1 on these 48 pages read "<City> Airport to <Destination>"
  // and stopped there, while the URL ends in -taxi or -cab and the title says
  // "Taxi ₹700". The service word was the one thing missing from the strongest
  // on-page signal, on a cluster sitting at position 9.29.
  //
  // It is taken from the slug rather than assumed, because four of these routes
  // are -cab (Faridabad, Ghaziabad, Gurgaon, Noida) and calling them taxi pages
  // would contradict their own URL and title.
  const serviceWord = slug.endsWith('-cab') ? 'Cab' : 'Taxi';
  const data = { ...original, serviceWord, terminals: original.terminals?.length ? original.terminals : (sibling?.terminals || []).map(t => ({ ...t, driveTime: original.time })), updatedOn: '2026-09-12' };
  const schemas = [getAirportRouteServiceSchema(slug), {
    '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: data.faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }, {
    '@context': 'https://schema.org', '@type': 'WebPage', url: `https://www.trivenicabs.in/${slug}`,
    name: `${data.airportCity} Airport to ${data.destination} Taxi`, dateModified: data.updatedOn,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.direct-answer', '.key-facts'] },
  }, {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
      { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
      { '@type': 'ListItem', position: 3, name: `${data.airportCity} Airport to ${data.destination}`, item: `https://www.trivenicabs.in/${slug}` },
    ],
  }];
  const corridor = road ? { highway: road.highway, bestRoute: road.bestRoute, majorStops: road.majorStops, roadCondition: road.roadCondition, bestTime: road.bestTime, localTip: road.localTip, tollPlazas: road.tollPlazas, href: `/distance/${corridorSlug}` } : null;
  return <>{schemas.map((schema, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />)}
    <AirportOutstationClient data={data} corridor={corridor} relatedRoutes={getRelatedRoutes(slug)} />
  </>;
}
