// src/lib/seo/canonical-link.js
//
// Resolves a booking URL to the destination it actually serves, so internal
// links never point at a 301.
//
// WHY THIS EXISTS
// ---------------
// The Week 43 booking-canonical work folded 22 duplicate booking URLs onto one
// page per corridor. The redirects work — /one-way-cab/delhi-to-agra correctly
// sends a visitor to /delhi-to-agra. But the templates that build internal links
// were never updated, so the site still links to the pre-redirect URLs.
//
// On /distance/delhi-to-agra — the single highest-impression page on the site at
// 104,155 impressions in 92 days — the three main "Book this route" buttons all
// point at /one-way-cab/delhi-to-agra, which redirects. Every visitor who clicks
// takes an extra hop, and every unit of internal link equity the site spends on
// its own commercial page is spent through a redirect instead of on it.
//
// WHY A LOOKUP AND NOT A PREFIX RULE
// ----------------------------------
// The redirect map runs in BOTH directions. Week 43 consolidated each corridor
// onto whichever URL Google already ranked best, which was the root page for some
// corridors and the /one-way-cab/ page for others:
//
//     /delhi-to-dehradun            -> /one-way-cab/delhi-to-dehradun
//     /one-way-cab/chandigarh-to-delhi -> /chandigarh-to-delhi
//
// So "always link to /one-way-cab/<slug>" and "always link to /<slug>" are both
// wrong, each for a different half of the corridors. The only correct answer is
// to ask the map.
//
// Deriving it from the map also means this stays correct as the map grows — a
// corridor consolidated next month is handled without touching the templates.

import { bookingCanonicalRedirects } from './booking-canonical-redirects.mjs';

const REDIRECTS = new Map(
  bookingCanonicalRedirects.map((r) => [r.source, r.destination])
);

/**
 * Returns the canonical URL for a path, following the redirect map.
 *
 * Paths that are not redirect sources are returned unchanged, which is the
 * common case — this is safe to wrap around any internal link.
 *
 * @param {string} path e.g. "/one-way-cab/delhi-to-agra"
 * @returns {string}    e.g. "/delhi-to-agra"
 */
export function canonicalLink(path) {
  if (!path || typeof path !== 'string') return path;

  // Follow chains in case a destination is itself later consolidated. Bounded
  // rather than looped on a Set because the map is small and a cycle here should
  // fail visibly in review, not hang a render.
  let current = path;
  for (let hop = 0; hop < 3; hop += 1) {
    const next = REDIRECTS.get(current);
    if (!next || next === current) break;
    current = next;
  }
  return current;
}

export default canonicalLink;
