import DataTable from './DataTable';
import AirportAnswerBox from '@/components/airport/AirportAnswerBox';
import DestinationPhotos from './DestinationPhotos';
import { weddingCarModels } from '@/utilis/weddingCarModels';
import { groupDigits } from '@/utilis/pricing';

// Week 49: the wedding table rows are the car models the site already publishes with their per-day prices.
const WEDDING_ROWS = Object.values(weddingCarModels || {}).flatMap((b) => (Array.isArray(b.models) ? b.models : []).map((m) => ({ model: m.name, type: m.type, capacity: m.capacity, price: m.pricePerDay, ideal: m.ideal }))).filter((r) => r.model && r.price).slice(0, 14);

const text = value => typeof value === 'string' || typeof value === 'number' ? String(value) : '';
const firstAnswer = d => text(d.faqs?.[0]?.answer || d.faqs?.[0]?.a);
const columns = names => names.map(([key, label]) => ({ key, label }));

// Explicit adapters: no inferred pricing, guessed distances or generic word-count padding.
export function familyFacts(family, d) {
  const city = text(d.destination || d.city || d.name);
  switch (family) {
    case 'how-to-reach': return { city, answer: text(d.recommendation) || firstAnswer(d), stats: [['From',d.origin],['To',d.destination]], title:`How do travel modes to ${city} compare?`, columns:columns([['mode','Mode'],['duration','Time'],['cost','Published cost']]), rows:(d.travelModes || []).map(m => ({mode:m.mode,duration:m.duration || m.totalDuration,cost:m.cost || m.costRange || m.flightCostRange || 'See mode details'})) };
    case 'best-time': return { city, answer:`The peak season for ${city} is ${d.peakSeason}. ${text(d.overview)}`, stats:[['Peak season',d.peakSeason],['Off season',d.offSeason]], title:`How do the seasons in ${city} compare?`, columns:columns([['name','Season'],['months','Months'],['temp','Temperature'],['crowd','Crowds']]), rows:d.seasons || [] };
    case 'travel-options': return {question:`What is the best way to travel from ${d.origin} to ${d.destination}?`, city, answer:text(d.verdict) || firstAnswer(d),stats:[['From',d.origin],['To',d.destination]]};
    case 'train-taxi': return {question:`How do you get from the station to ${city} by cab?`, city,answer:firstAnswer(d) || text(d.bookingTip),stats:[['Destination',d.city],['Trip cost',d.totalTripCost]]};
    case 'packages': return {question:`What does the ${city} hotel-and-cab package include?`, city,answer:`This ${d.duration} hotel-and-cab package visits ${city}, with published prices starting at ₹${Number(d.startingPrice).toLocaleString('en-IN')}/person. ${text(d.includes?.[0])}`,stats:[['Destination',city],['Duration',d.duration],['Starting price',d.startingPrice]],title:`What is planned each day in ${city}?`,columns:columns([['day','Day'],['title','Plan'],['activities','Activities']]),rows:(d.itinerary || []).map(r=>({...r,activities:r.activities?.join('; ')}))};
    case 'itinerary': return {question:`How many days do you need in ${city}?`, city,answer:`This ${d.days}-day ${city} itinerary covers ${d.dayWise?.length || d.days} planned days. ${text(d.description).split('\n')[0]}`,stats:[['City',city],['Days',d.days],['Daily distance',d.perDayKm ? `${d.perDayKm} km` : '']],title:`What can you visit each day in ${city}?`,columns:columns([['day','Day'],['title','Plan'],['stops','Stops']]),rows:(d.dayWise || []).map(r=>({day:r.day,title:r.title,stops:r.places?.map(p=>p.name).join('; ')}))};
    case 'local-taxi': return {city,answer:firstAnswer(d) || text(d.tagline),stats:[['City',city],['Coverage areas',d.coverageAreas?.length]],title:`Which local taxi package suits your ${city} trip?`,columns:columns([['name','Package'],['sedan','Sedan'],['suv','SUV']]),rows:d.packages || []};
    case 'taxi-fare': return {question:`What do taxis cost in ${city}?`, city,answer:`Taxi rates in ${city} start at ₹${groupDigits(d.baseFare?.sedan)}/km for a sedan, ₹${groupDigits(d.baseFare?.suv)}/km for an SUV and ₹${groupDigits(d.baseFare?.tempo)}/km for a Tempo Traveller. The minimum fare and surcharges below determine the complete quote.`,stats:[['City',city],['Sedan rate',`₹${groupDigits(d.baseFare?.sedan)}/km`]]};
    case 'same-day': return {question:`Can you do ${d.origin} to ${city} in a day?`, city,answer:`The ${d.origin} to ${city} day tour covers ${d.distance}, with a drive of ${d.driveTime} and a total duration of ${d.totalDuration}. ${text(d.description).split('\n')[0]}`,stats:[['Distance',d.distance],['Drive time',d.driveTime],['Departure',d.departureTime],['Return',d.returnTime]],title:`What is the schedule for your ${city} day tour?`,columns:columns([['time','Time'],['activity','Activity'],['duration','Duration']]),rows:d.itinerary || []};
    case 'travel-by-car': return {question:`What is the drive from ${d.origin} to ${city} like?`, city,answer:`The drive from ${d.origin} to ${city} covers ${d.totalDistance} km and takes ${d.drivingTime}${d.highway ? ` via ${d.highway}` : ''}. ${text(d.bestCarType)}`,stats:[['Distance',d.totalDistance],['Drive time',d.drivingTime],['Highway',d.highway]],title:`What are the road stages from ${d.origin} to ${city}?`,columns:columns([['segment','Road stage'],['distance','Distance (km)'],['time','Drive time'],['roadQuality','Road quality']]),rows:d.roadMap || []};
    case 'outstation': return {city,answer:firstAnswer(d),stats:[['Departure city',city],['Published routes',d.popularRoutes?.length]],title:`Where can you book an outstation taxi from ${city}?`,columns:columns([['destination','Destination'],['distance','Distance'],['duration','Drive time'],['fare','Published fare']]),rows:d.popularRoutes || []};
    case 'vehicle': return {question:`Is the ${d.name} the right car for your trip?`, answer:`The ${d.name} seats ${d.seats} passengers and has ${text(d.luggage)} luggage capacity. The published outstation rate is ${text(d.perKmRate?.outstation)}. ${text(d.bestFor)}`,stats:[['Vehicle',d.name],['Seats',d.seats],['Outstation rate',d.perKmRate?.outstation]],title:`Which ${d.name} hire package should you choose?`,columns:columns([['title','Package'],['price','Published price']]),rows:Object.entries(d.packages || {}).map(([title,price])=>({title:title.replace(/([A-Z])/g,' $1'),price}))};
    case 'event-vehicle': return {answer:text(d.intro) || firstAnswer(d),stats:[['Vehicle',d.name],['Seating',d.seating],['Starting price',d.priceFrom]],title:`What are the ${d.name} specifications?`,columns:columns([['label','Specification'],['value','Detail']]),rows:Array.isArray(d.specs)?d.specs.map(([label,value])=>({label,value:text(value)})):Object.entries(d.specs || {}).map(([label,value])=>({label,value:text(value)}))};
    case 'corporate': return {city:d.city?.name,answer:text(d.intro),stats:[['City',d.city?.name],['Service',d.item?.name]],title:`Which fleet options suit ${d.item?.name} in ${d.city?.name}?`,columns:columns([['vehicle','Vehicle'],['capacity','Capacity'],['use','Use'],['price','Published rate']]),rows:(d.item?.fleet || []).map(f=>({vehicle:f.type || f.vehicle || f.name,capacity:f.capacity || f.seats,use:f.useCase || f.use || f.idealFor,price:f.price}))};
    case 'event': return {city:d.city?.name,answer:text(d.intro),stats:[['City',d.city?.name],['Event',d.type?.name]],title:`Which packages suit ${d.type?.name} in ${d.city?.name}?`,columns:columns([['name','Package'],['price','Published price'],['includes','Includes']]),rows:(d.type?.packages || []).map(p=>({name:p.name || p.title,price:p.price || p.priceFrom || 'Request a quote',includes:Array.isArray(p.includes)?p.includes.join('; '):text(p.description)}))};
    // Week 48 (13 Sep): the families the first pass left without a block. Each
    // adapter only re-shapes what the page already prints; no fare is invented.
    case 'cab-service': return {city, answer:'', stats:[], title:`Outstation fares from ${city}, sedan, as published`, columns:columns([['to','Destination'],['distance','Distance'],['time','Drive time'],['fare','Sedan fare']]), rows:(d.popularRoutes || []).filter(r => r && r.to)};
    case 'wedding': return {question:`What does a wedding car cost in ${text(d.name)}?`, city:text(d.name), answer:`${text(d.description)} Published price range in ${text(d.name)}: ${text(d.priceRange)}.`, stats:[['City',d.name],['Price range',d.priceRange],['Popular cars',d.popularCars?.length]], title:`Which wedding car for which moment, and what does it cost per day?`, columns:columns([['model','Car'],['type','Type'],['capacity','Seats'],['price','Per day, as published'],['ideal','Best for']]), rows:WEDDING_ROWS};
    case 'attractions': {
      const list = Array.isArray(d.attractions) ? d.attractions : [];
      const names = list.slice(0, 3).map(a => a.name).filter(Boolean).join(', ');
      const types = new Set(list.map(a => a.type).filter(Boolean));
      return {question:`Which places in ${text(d.city)} are worth a day?`, city:text(d.city), answer:list.length ? `${text(d.city)} has ${list.length} places listed on this page${names ? `, starting with ${names}` : ''}. Each entry gives the kind of place and what it is known for; a chauffeur-driven sightseeing cab covers the main ones in a day at the published local rate.` : '', stats:[['City',d.city],['Places listed',list.length],['Kinds of place',types.size]], title:`Places in ${text(d.city)} by type`, columns:columns([['name','Place'],['type','Type'],['known','Known for']]), rows:list.map(a => ({name:text(a.name), type:text(a.type), known:(Array.isArray(a.highlights) ? a.highlights : []).slice(0, 3).join(', ')}))};
    }
    case 'tour-package': {
      const why = text(d.whyChoose).split(/(?<=\.)\s+/)[0] || '';
      return {question:`What does this package cover, and what does it cost?`, city:text(d.destination), answer:`${text(d.title)} runs ${text(d.duration)} from ${text(d.startingPoint)} to ${text(d.destination)} at ${text(d.price)} per person. ${why}`.trim(), stats:[['Duration',d.duration],['From',d.startingPoint],['To',d.destination],['Price',d.price ? `${d.price} per person` : '']], title:`What happens on each day of the ${text(d.title)}?`, columns:columns([['day','Day'],['title','Where'],['details','What happens']]), rows:(Array.isArray(d.itinerary) ? d.itinerary : []).map(i => ({day:text(i.day), title:text(i.title), details:text(i.details)}))};
    }
    default: return {city, answer:firstAnswer(d),stats:[]};
  }
}

export default function FamilyFacts({ family, data, details = false }) {
  const f = familyFacts(family, data);
  if (details) return <>
    {f.rows?.length > 1 && <DataTable title={f.title} columns={f.columns} rows={f.rows} />}
    {['packages','same-day','outstation','corporate','event'].includes(family) && f.city && <DestinationPhotos city={f.city} />}
  </>;
  if (!f.answer) return null;
  return <AirportAnswerBox question={f.question || (f.title && /\?$/.test(f.title) ? f.title : null)} answer={f.answer} updatedOn={['event-vehicle','cab-service','wedding','attractions','tour-package'].includes(family) ? '2026-09-13' : '2026-09-12'} facts={f.stats.map(([label,value])=>({label,value:text(value)}))} />;
}
