// src/utilis/schemaReviews.js
//
// Historically this file held eight review objects — author names, star
// ratings and review bodies, all written here — and computed their
// datePublished as "1 to 10 weeks ago" on every build. Its own header explained
// the spread was chosen because reviews sharing a single date "look automated",
// and listed the intended upgrade path: fetch the real thing from the Google
// Business Profile.
//
// That upgrade is now the only path. Review markup is published from
// src/lib/seo/business-rating.js, and only when it is backed by verified data.
// This module stays as a thin pass-through so any remaining caller keeps
// working and gets the same answer as the root layout.
//
// To publish real reviews, populate VERIFIED in business-rating.js. Nothing
// needs to change here.

import { verifiedReviews } from '@/lib/seo/business-rating';

export function getSchemaReviews() {
  return verifiedReviews();
}

export default getSchemaReviews;
