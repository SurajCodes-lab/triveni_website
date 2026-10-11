import { canonicalLink } from './canonical-link';
import { routeExists } from './route-exists';

// Which booking page a distance guide should send its reader to.
//
// Week 52 — the order here was /one-way-cab/<slug> first, corridor page second.
// The 6 Oct export measured what that costs. The distance family is the site's
// largest audience: 2,692,574 impressions at positions 5-9. Of its 206 pages,
// 108 — carrying 2,100,381 of those impressions — were sending their hero
// booking link to the /one-way-cab/ shape, and only 37 to the corridor page.
//
// The two shapes do not perform alike:
//
//   corridor /<a>-to-<b>      127 pages   447,806 impr   1.20% CTR   pos 11.18
//   /one-way-cab/<a>-to-<b>    18 pages    28,612 impr   0.55% CTR   pos 23.10
//
// Per route the picture is the same where both appear: /one-way-cab/delhi-to-
// manali sits at position 40.9, /one-way-cab/delhi-to-agra at 45.9, against
// 10.9 for /delhi-to-agra. Only 18 of the one-way pages rank well enough to
// enter the top-1000 sheet at all, against 127 corridor pages.
//
// One honest caveat on that aggregate: the Week 43 booking-canonical work
// already folded the stronger clusters onto the corridor shape, so the corridor
// family's average is flattered by selection. The per-route figures above are
// the part that is not, and they point the same way.
//
// So the corridor page is tried first. It is also the better destination on its
// own terms: it quotes one-way and round-trip fares together, where the
// /one-way-cab/ page covers only the one-way leg, and the reader arriving from
// a distance guide has not yet said which they want.
export function distanceBookingHref(route, exists = routeExists) {
  for (const href of [
    route.slug && `/${route.slug}`,
    route.oneWaySlug && `/one-way-cab/${route.oneWaySlug}`,
  ].filter(Boolean)) {
    // canonicalLink resolves the booking-canonical redirects, so a route whose
    // corridor URL folds into its one-way page still returns the URL that is
    // actually served rather than a 308.
    const target = canonicalLink(href);
    if (exists(target)) return target;
  }
  // Keep the booking action even when neither journey has a booking URL. The
  // same-page enquiry form already receives the route's origin and destination.
  return '#distance-enquiry';
}
