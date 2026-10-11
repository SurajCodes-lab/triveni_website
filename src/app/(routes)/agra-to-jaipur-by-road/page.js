// Week 49 guide — see src/utilis/guides/week49/agraToJaipurByRoad.js for the content and
// src/components/guides/GuidePage.jsx for the composer.

import GuidePage from '@/components/guides/GuidePage';
import { buildGuideMetadata } from '@/lib/seo/guide-schema';
import { guide } from '@/utilis/guides/week49/agraToJaipurByRoad';

export const revalidate = 3600;
export const metadata = buildGuideMetadata(guide);

export default function Page() {
  return <GuidePage guide={guide} />;
}
