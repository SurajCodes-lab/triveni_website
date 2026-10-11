// Week 49: this address is rebuilt in place as a guide — see
// src/utilis/guides/week49/placesToVisitNearLucknowRebuilt.js for the content
// (the same destinations and figures as placesToVisitData.lucknow) and
// src/components/guides/GuidePage.jsx for the composer. The previous page is
// kept beside this file as page.js.week48-backup.txt.

import GuidePage from '@/components/guides/GuidePage';
import { buildGuideMetadata } from '@/lib/seo/guide-schema';
import { guide } from '@/utilis/guides/week49/placesToVisitNearLucknowRebuilt';

export const revalidate = 3600;
export const metadata = buildGuideMetadata(guide);

export default function PlacesToVisitNearLucknowPage() {
  return <GuidePage guide={guide} />;
}
