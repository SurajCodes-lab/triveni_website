import AirportRoutePage from '@/components/airport/AirportRoutePage';
import { getAirportRouteMetadata } from '@/utilis/airportOutstationData';
export const revalidate = 3600;
const slug = 'varanasi-airport-to-ayodhya-taxi';
export const metadata = getAirportRouteMetadata(slug);
export default function Page() { return <AirportRoutePage slug={slug} />; }
