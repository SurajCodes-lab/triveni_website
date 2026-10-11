"""Apply the reviewed family adapters and airport server props once."""
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
families = [
 ('how-to-reach/HowToReachClient.jsx','how-to-reach','route'),
 ('best-time/BestTimeClient.jsx','best-time','data'),
 ('travel-options/TravelOptionsClient.jsx','travel-options','route'),
 ('train-taxi/TrainTaxiClient.jsx','train-taxi','route'),
 ('packages/HotelCabPackageClient.jsx','packages','pkg'),
 ('itinerary/CityItineraryClient.jsx','itinerary','data'),
 ('local-taxi/LocalTaxiCityClient.jsx','local-taxi','city'),
 ('taxi-fare/CityTaxiFareClient.jsx','taxi-fare','city'),
 ('tours/SameDayTourClient.jsx','same-day','tour'),
 ('travel-by-car/TravelByCarClient.jsx','travel-by-car','route'),
 ('outstation/OutstationCityClient.jsx','outstation','cityData'),
 ('vehicles/VehicleHireClient.jsx','vehicle','vehicle'),
 ('events/EventVehicleClient.jsx','event-vehicle','data'),
 ('corporate/CorporateComboClient.jsx','corporate','data'),
 ('events/EventComboClient.jsx','event','data'),
]
for file, family, data in families:
    path = root / 'src/components' / file
    source = path.read_text(encoding='utf-8')
    if "import FamilyFacts" in source:
        continue
    source = source.replace("import ", "import FamilyFacts from '@/components/seo/FamilyFacts';\nimport ", 1)
    source = source.replace('</h1>', f'</h1>\n              <FamilyFacts family="{family}" data={{{data}}} />', 1)
    # Existing comparison tables remain; details are only added where needed.
    if family not in ['travel-options','train-taxi','taxi-fare','local-taxi','best-time']:
        source = source.replace('</section>', f'</section>\n      <FamilyFacts family="{family}" data={{{data}}} details />', 1)
    path.write_text(source, encoding='utf-8')

path = root / 'src/components/airport/CityAirportServiceClient.js'
source = path.read_text(encoding='utf-8')
source = source.replace('{openFaq === i && <div className="border-t border-amber-100 px-5 pb-5 pt-4 leading-relaxed text-slate-600">{faq.answer}</div>}', '<div hidden={openFaq !== i} className="faq-answer border-t border-amber-100 px-5 pb-5 pt-4 leading-relaxed text-slate-600">{faq.answer}</div>')
for a,b in [('title="Popular drop"','title="How far are popular drop"'),('highlight="points"','highlight="points?"'),('title="Choose your"','title="Which is your"'),('highlight="ride"','highlight="ride?"'),('title="No surprises,"','title="What does your transfer"'),('highlight="ever"','highlight="include?"'),('highlight="works"','highlight="works?"'),('highlight="FAQs"','highlight="questions?"')]:
    source = source.replace(a,b)
path.write_text(source,encoding='utf-8')

path = root / 'src/app/(routes)/airport-service/[city]/page.js'
source = path.read_text(encoding='utf-8')
if 'getTerminalsForCity' not in source:
    source = "import { getTerminalsForCity } from '@/utilis/airportTerminalData';\nimport { getDistanceRoute } from '@/utilis/distanceData';\nimport { routeExists } from '@/lib/seo/route-exists';\n" + source
    source = source.replace('citySlug={params.city}', '''citySlug={params.city}
        terminalRows={getTerminalsForCity(params.city).map(t => ({terminalCode:t.terminalCode,terminalType:t.terminalType,meetingPoint:t.meetingPoint || t.pickupPoint,waitInfo:t.waitInfo}))}
        corridorRows={(city.routes || []).map(label => {
          const slug = label.toLowerCase().replace(/\\s+/g, '-');
          const road = getDistanceRoute(slug);
          return road && routeExists(`/distance/${slug}`) ? {label,distance:`${road.distance.km} km`,duration:road.duration,href:`/distance/${slug}`} : null;
        }).filter(Boolean)}''')
path.write_text(source,encoding='utf-8')
print('Wired 15 family adapters and airport hub data.')
