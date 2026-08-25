// app/(routes)/force-urbania/page.js
// Force Urbania vehicle-type hub — new design system.
import VehicleTypeClient from "@/components/tempo/VehicleTypeClient";
import {
  vehicleTypeData,
  getOtherVehicleTypes,
} from "@/utilis/vehicleTypeData";
import { getRatingAndReviews } from "@/lib/seo/review-helpers";
import {
  buildVehicleTypeMetadata,
  buildVehicleTypeJsonLd,
} from "@/components/tempo/vehicleTypePageBuilder";

const SLUG = "force-urbania";
export const revalidate = 3600;
export const metadata = buildVehicleTypeMetadata(SLUG);

export default function ForceUrbaniaPage() {
  const data = vehicleTypeData[SLUG];
  const { aggregateRating, review } = getRatingAndReviews(
    `${data.slug}-hub`,
    data.vertical
  );
  const jsonLd = buildVehicleTypeJsonLd(SLUG, { aggregateRating, review });
  return (
    <VehicleTypeClient
      data={data}
      otherTypes={getOtherVehicleTypes(data.slug)}
      jsonLd={jsonLd}
    />
  );
}