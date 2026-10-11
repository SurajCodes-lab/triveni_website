'use client';

// src/components/ui/TrackedLink.jsx
//
// A minimal client island for analytics-only links.
//
// WHY THIS EXISTS
// ---------------
// An audit of the hydration payload found twelve page templates — 261 KB of
// source across them — marked 'use client' for one reason only: an inline
// onClick that fires an analytics event. No state, no effects, no browser APIs,
// no animation. Just tracking.
//
// The cost of that is disproportionate. Marking a component 'use client' pulls
// the entire component AND everything it renders into the hydration payload,
// which is 31% of the bytes on a sightseeing page. A 265-line template becomes
// client-side so that two anchors can report a click.
//
// The links themselves never needed JavaScript. They are real anchors with real
// hrefs — tel: and wa.me — and they work with scripting disabled. Only the
// measurement needs the browser.
//
// So the measurement moves into this component, which is a few lines, and the
// template it came from can go back to being a server component.
//
// USAGE
//   <TrackedLink track="phone" args={['cab_service_hero']} href="tel:+91...">
//   <TrackedLink track="whatsapp" args={['cab_service_hero', msg]} href={waUrl} target="_blank">
//
// The anchor is rendered exactly as before — every prop passes straight through,
// so styling, target, rel and children are untouched.

import { trackPhoneCall, trackWhatsAppClick } from '@/utilis/analytics';

const TRACKERS = {
  phone: trackPhoneCall,
  whatsapp: trackWhatsAppClick,
};

export default function TrackedLink({ track, args = [], children, ...rest }) {
  const fire = TRACKERS[track];

  return (
    <a
      {...rest}
      onClick={() => {
        // Never let a measurement failure block the click. The href does the
        // real work; tracking is strictly secondary.
        try {
          fire?.(...args);
        } catch {
          /* analytics is best-effort */
        }
      }}
    >
      {children}
    </a>
  );
}
