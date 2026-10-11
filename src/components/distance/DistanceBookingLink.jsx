"use client";

import { trackNavigation } from '@/utilis/analytics';

export default function DistanceBookingLink({ href, routeName }) {
  return <a href={href} className="mt-5 inline-flex rounded-xl bg-slate-900 px-5 py-3 font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"
    onClick={() => { try { trackNavigation(routeName, href, 'distance_trip_planning'); } catch {} }}>
    {href.startsWith('#') ? 'Request a quote for this journey' : 'View cab options for this journey'}
  </a>;
}
