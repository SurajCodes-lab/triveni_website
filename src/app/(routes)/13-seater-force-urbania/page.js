// app/(routes)/13-seater-force-urbania/page.js
// 13 Seater Force Urbania — new design system.
import VehicleSeaterClient from "@/components/tempo/VehicleSeaterClient";
import { getVehicleSeaterData } from "@/utilis/vehicleTypeData";
import { getRatingAndReviews } from "@/lib/seo/review-helpers";
import {
  buildVehicleSeaterMetadata,
  buildVehicleSeaterJsonLd,
} from "@/components/tempo/vehicleSeaterPageBuilder";

const TYPE = "force-urbania";
const SEATS = "13";
export const revalidate = 3600;
export const metadata = buildVehicleSeaterMetadata(TYPE, SEATS);

export default function Page() {
  const data = getVehicleSeaterData(TYPE, SEATS);
  const { aggregateRating, review } = getRatingAndReviews(data.slug, data.vertical);
  const jsonLd = buildVehicleSeaterJsonLd(TYPE, SEATS, { aggregateRating, review });
  return <VehicleSeaterClient data={data} jsonLd={jsonLd} />;
}