import GoldenTriangleClient from "@/components/tours/GoldenTriangleClient";
import { goldenTriangleTours, goldenTriangleSlugs } from "@/utilis/goldenTriangleData";
import { getRatingAndReviews } from "@/lib/seo/review-helpers";
import { buildGTMetadata, buildGTJsonLd } from "@/components/tours/goldenTrianglePageBuilder";

const SLUG = "golden-triangle-tour-from-chandigarh";
export const revalidate = 3600;
export const metadata = buildGTMetadata(SLUG);

export default function Page() {
  const data = goldenTriangleTours[SLUG];
  const { aggregateRating, review } = getRatingAndReviews(SLUG, "city");
  const jsonLd = buildGTJsonLd(SLUG, { aggregateRating, review });
  const others = [];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GoldenTriangleClient data={data} others={others} />
    </>
  );
}
