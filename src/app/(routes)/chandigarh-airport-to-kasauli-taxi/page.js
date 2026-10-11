import AirportRoutePage from '@/components/airport/AirportRoutePage';
import { getAirportRouteMetadata } from '@/utilis/airportOutstationData';
export const revalidate = 3600;
const slug = 'chandigarh-airport-to-kasauli-taxi';
export const metadata = getAirportRouteMetadata(slug);
export default function Page() { return <AirportRoutePage slug={slug} />; }
