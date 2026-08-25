// app/(routes)/16-seater-tempo-traveller/page.js
// 16 Seater Tempo Traveller — new design system.
import VehicleSeaterClient from "@/components/tempo/VehicleSeaterClient";
import { getVehicleSeaterData } from "@/utilis/vehicleTypeData";
import { getRatingAndReviews } from "@/lib/seo/review-helpers";
import {
  buildVehicleSeaterMetadata,
  buildVehicleSeaterJsonLd,
} from "@/components/tempo/vehicleSeaterPageBuilder";

const TYPE = "tempo-traveller";
const SEATS = "16";
export const revalidate = 3600;
export const metadata = buildVehicleSeaterMetadata(TYPE, SEATS);

export default function Page() {
  const data = getVehicleSeaterData(TYPE, SEATS);
  const { aggregateRating, review } = getRatingAndReviews(data.slug, data.vertical);
  const jsonLd = buildVehicleSeaterJsonLd(TYPE, SEATS, { aggregateRating, review });
  return <VehicleSeaterClient data={data} jsonLd={jsonLd} />;
}