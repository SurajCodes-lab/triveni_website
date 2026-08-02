import SeaterTempoClient from "@/components/tempo/SeaterTempoClient";
import { seaterTempoData, getOtherSeaters } from "@/utilis/seaterTempoData";
import { getRatingAndReviews } from "@/lib/seo/review-helpers";
import {
  buildSeaterMetadata,
  buildSeaterJsonLd,
} from "@/components/tempo/seaterPageBuilder";

const KEY = "16";
export const revalidate = 3600;
export const metadata = buildSeaterMetadata(KEY);

export default function Page() {
  const data = seaterTempoData[KEY];
  const { aggregateRating, review } = getRatingAndReviews(data.slug, "tempo");
  const jsonLd = buildSeaterJsonLd(KEY, { aggregateRating, review });
  return (
    <SeaterTempoClient
      data={{ ...data, otherSeaters: getOtherSeaters(data.slug) }}
      jsonLd={jsonLd}
    />
  );
}
