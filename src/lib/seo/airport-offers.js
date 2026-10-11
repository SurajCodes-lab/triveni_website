const SITE = 'https://www.trivenicabs.in';
const images = { sedan:'/images/car/swift_dzire.jpg',suv:'/images/car/innova_crysta.jpg',tempo:'/images/tempo/16_seater.jpg' };
export function airportFareOffers(route) {
  return Object.entries(route.fares).map(([key, fare]) => ({
    '@type':'Offer',name:`${fare.vehicle} — ${route.airportCity} Airport to ${route.destination}`,
    price:String(fare.price).replace(/,/g,''),priceCurrency:'INR',image:`${SITE}${images[key]}`,
    url:`${SITE}/${route.slug}`,availability:'https://schema.org/InStock',
    itemOffered:{'@type':'Service',name:`${fare.vehicle} airport transfer`,image:`${SITE}${images[key]}`},
  }));
}
export function terminalFareSchema(schema, terminal) {
  return {...schema,offers:(terminal.pricing || []).map(row=>({
    '@type':'Offer',name:`${terminal.terminalCode} to ${row.destination}`,
    // Range lower bound is explicitly described as a starting fare.
    description:`Published fare range: ${row.fare}. Starting fare shown; confirm the complete quote.`,
    price:String(row.fare).replace(/,/g,'').match(/\d+(?:\.\d+)?/)?.[0],
    priceCurrency:'INR',image:`${SITE}${row.img}`,url:`${SITE}${terminal.path}`,
    itemOffered:{'@type':'Service',name:`Taxi to ${row.destination}`,image:`${SITE}${row.img}`},
  }))};
}
