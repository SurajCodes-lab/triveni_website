// src/lib/seo/client-route-exists.js
//
// Client-safe twin of route-exists.js.
//
// routeExists() answers from the full build manifest and is server-only — in a
// client bundle it simply returns true. So a 'use client' component that
// synthesises a link from a city name (`/${city}-travel-guide`,
// `/cab-service/${city}`, `/best-time-to-visit/${city}`, `/sightseeing/${city}`,
// `/${city}`) had no way to ask whether that target was ever built, and the
// Week 47 filters never reached it.
//
// WHY (Week 48, 12 Sept 2026): two weeks of Googlebot traffic after the Week 47
// fix still showed 21 distinct `/<town>-travel-guide` URLs (chitkul, chail,
// patiala, nathdwara, kumbhalgarh, sarnath …), four `/cab-service/<town>` and
// three `/best-time-to-visit/<town>` returning 404 — 100 requests in all. Every
// one of those towns is the destination of a /one-way-cab/delhi-to-<town> page,
// and that page's client component printed the three guide cards for whatever
// `route.to` happened to be. The same shape lives in the station-taxi, road-trip,
// blog, audience and festival client components.
//
// This module answers from src/generated/client-slugs.json (a few KB, rewritten
// by scripts/gen-route-manifest.mjs after every build), exactly as
// AutoRelatedFooter and RelatedContent already do, so the answer is identical on
// the server render and after hydration — no mismatch.
//
// It only ever says "no" for a family or root pattern the manifest enumerates.
// External URLs, hashes, deeper paths, corridor pages and anything else it
// cannot classify are left alone.

import clientSlugs from '@/generated/client-slugs.json';
import { bookingCanonicalRedirects } from './booking-canonical-redirects.mjs';

const ROOT_PATTERN = /-travel-guide$|-shopping-guide$|-food-tour$|^places-to-visit-near-|^how-to-reach-|^weekend-getaways-from-|^things-to-do-in-/;

/** True unless the manifest can prove the internal href was never built. */
export function clientRouteExists(href) {
  if (typeof href !== 'string' || !href.startsWith('/')) return true;
  const p = href.replace(/[?#].*$/, '').replace(/\/+$/, '');
  if (!p) return true;
  const m = p.match(/^\/([^/]+)\/([^/]+)$/);
  if (m) {
    const family = clientSlugs[m[1]];
    return !Array.isArray(family) || family.includes(m[2]);
  }
  if (p.indexOf('/', 1) !== -1) return true; // three or more segments: not enumerated here
  const r = p.slice(1);
  if (ROOT_PATTERN.test(r)) return (clientSlugs.rootPatterns || []).includes(r);
  // /<city> hubs are decidable once the manifest carries rootPages (Week 48);
  // corridor pages (/delhi-to-agra) and root files (/robots.txt, /llms-full.txt)
  // are deliberately not in that list, so they cannot be denied here.
  if (r.includes('.')) return true;
  if (Array.isArray(clientSlugs.rootPages) && !r.includes('-to-')) return clientSlugs.rootPages.includes(r);
  return true;
}

/** Drop the entries of a [{ href | url, … }] list whose target was never built. */
// Week 48 (strategy action 10): the same rewrite as canonicalHref on the
// server. The 22 rules are plain data, so the client bundle carries them.
const REDIRECT_MAP = new Map(bookingCanonicalRedirects.map((r) => [r.source, r.destination]));

export function canonicalClientHref(href) {
  if (!href || typeof href !== 'string' || !href.startsWith('/')) return href;
  const p = href.replace(/[?#].*$/, '').replace(/(.)\/+$/, '$1');
  const target = REDIRECT_MAP.get(p);
  return target ? `${target}${href.slice(p.length)}` : href;
}

export function filterClientLinks(links) {
  if (!Array.isArray(links)) return links;
  return links
    .map((l) => {
      if (!l || typeof l !== 'object') return l;
      const key = typeof l.href === 'string' ? 'href' : typeof l.url === 'string' ? 'url' : null;
      if (!key) return l;
      const next = canonicalClientHref(l[key]);
      return next === l[key] ? l : { ...l, [key]: next };
    })
    .filter((l) => !l || typeof l !== 'object' || clientRouteExists(l.href || l.url));
}

export default clientRouteExists;
