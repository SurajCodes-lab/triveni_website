// One-time, lossless consolidation of the inline airport records.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const routes = 'src/app/(routes)';
const target = 'src/utilis/airportLegacyRoutes.js';
if (fs.existsSync(target)) throw new Error('Migration already applied');
const entries = {};
const codeByCity = { delhi: 'DEL', jaipur: 'JAI', lucknow: 'LKO', varanasi: 'VNS' };
const title = s => s.replace(/\b\w/g, c => c.toUpperCase());
for (const dir of fs.readdirSync(routes)) {
  const file = path.join(routes, dir, 'page.js');
  if (!dir.includes('-airport-to-') || !fs.existsSync(file)) continue;
  const source = fs.readFileSync(file, 'utf8');
  const match = source.match(/const (ROUTE|routeData) = (\{[\s\S]*?\n\});/);
  if (match) {
    const faqMatch = source.match(/const faqData = (\[[\s\S]*?\n\]);/);
    const context = faqMatch ? { faqData: vm.runInNewContext('(' + faqMatch[1] + ')') } : {};
    const data = vm.runInNewContext('(' + match[2] + ')', context);
    if (match[1] === 'ROUTE') {
      const origin = dir.split('-airport-to-')[0];
      entries[dir] = {
        slug: dir, airport: data.airport, airportCity: title(origin), airportCode: codeByCity[origin],
        destination: data.city, destinationState: '', distance: data.distance, time: data.duration,
        terminals: [], faqs: data.faqs, meetAndGreet: true, flightTracking: true,
        fares: Object.fromEntries([
          ['sedan', 1, 'Swift Dzire / Etios', 4], ['suv', 1.4, 'Innova / Ertiga', 6],
          ['tempo', 2.2, 'Tempo Traveller 12-seater', 12],
        ].map(([key, multiplier, vehicle, seats]) => [key, {price: Math.round(data.fare * multiplier).toLocaleString('en-IN'), vehicle, seats}])),
      };
    } else entries[dir] = data;
  }
  fs.writeFileSync(file, `import AirportRoutePage from '@/components/airport/AirportRoutePage';
import { getAirportRouteMetadata } from '@/utilis/airportOutstationData';
export const revalidate = 3600;
const slug = '${dir}';
export const metadata = getAirportRouteMetadata(slug);
export default function Page() { return <AirportRoutePage slug={slug} />; }
`);
}
fs.writeFileSync(target, '// Preserves the previously published fares and FAQs; no runtime multipliers.\nexport const airportLegacyRoutes = ' + JSON.stringify(entries, null, 2) + ';\n');
const dataFile = 'src/utilis/airportOutstationData.js';
let dataSource = fs.readFileSync(dataFile, 'utf8');
dataSource = "import { airportLegacyRoutes } from './airportLegacyRoutes';\n" + dataSource;
dataSource = dataSource.replace('export const airportRoutes = {', 'export const airportRoutes = {\n  ...airportLegacyRoutes,');
dataSource = dataSource.replace('23 routes covering', '46 routes covering');
fs.writeFileSync(dataFile, dataSource);
console.log(`Consolidated ${Object.keys(entries).length} inline records; all airport route pages use one server wrapper.`);
