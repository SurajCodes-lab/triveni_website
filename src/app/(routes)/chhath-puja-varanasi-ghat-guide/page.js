// Week 48 guide — see src/utilis/guides/week48/chhathPujaVaranasiGhatGuide.js for the content and
// src/components/guides/GuidePage.jsx for the layout. This file only wires the
// route: metadata from the guide, one server component, hourly ISR.
import GuidePage from '@/components/guides/GuidePage';
import { guide } from '@/utilis/guides/week48/chhathPujaVaranasiGhatGuide';
import { buildGuideMetadata } from '@/lib/seo/guide-schema';

export const revalidate = 3600;
export const metadata = buildGuideMetadata(guide);

export default function Week48GuidePage() {
  return <GuidePage guide={guide} />;
}
