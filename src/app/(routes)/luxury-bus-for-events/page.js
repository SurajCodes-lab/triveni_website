import EventVehicleClient from "@/components/events/EventVehicleClient";
import { getEventVehicle } from "@/utilis/eventVehicleData";
import { getRatingAndReviews } from "@/lib/seo/review-helpers";
import {
  buildEventVehicleMetadata,
  buildEventVehicleJsonLd,
} from "@/components/events/eventVehicleBuilder";

const SLUG = "luxury-bus-for-events";
export const revalidate = 3600;
export const metadata = buildEventVehicleMetadata(SLUG);

export default function Page() {
  const data = getEventVehicle(SLUG);
  const { aggregateRating, review } = getRatingAndReviews(SLUG, "event");
  const jsonLd = buildEventVehicleJsonLd(SLUG, { aggregateRating, review });
  return <EventVehicleClient data={data} jsonLd={jsonLd} />;
}
