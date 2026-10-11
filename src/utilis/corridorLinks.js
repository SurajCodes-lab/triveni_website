// src/utilis/corridorLinks.js
//
// Cross-category "corridor" linking. For a given route slug (e.g. "delhi-to-jaipur")
// this returns the OTHER travel formats that ALSO exist for the exact same
// origin→destination corridor: one-way cab, round trip, tempo traveller, bus hire,
// distance guide, toll cost.
//
// Why: it builds a tight topical cluster per corridor (Google reads them as a
// unit and flows PageRank to the page-2 commercial pages) AND gives a visitor
// who wants a different format than the one they landed on a path to convert
// instead of bouncing.
//
// IMPORTANT: every href is membership-checked against that category's real slug
// set, so we NEVER emit a link to a page that doesn't exist (no 404s).
//
// This module imports the (large) data files, so call it ONLY from server
// components (page.js) and pass the small resulting array down as a prop — do
// not import it into client bundles.

import { getAllOneWayRouteSlugs } from './oneWayCabData';
import { getAllRoundTripSlugs } from './roundTripData';
import { getAllDistanceRouteSlugs } from './distanceData';
import { getAllTollCostSlugs } from './tollCostData';
import { busRoutes } from './busRoutesData';
import { tempoRoutes } from './tempoTravellerData';
import { canonicalLink } from '../lib/seo/canonical-link';
import { routeExists } from '../lib/seo/route-exists';

// Replicate the exact slug construction used by bus-routes / tempo-traveller
// generateStaticParams so membership matches the pages that actually build.
function buildOriginDestSlugs(routesObj) {
  const set = new Set();
  Object.entries(routesObj || {}).forEach(([origin, destinations]) => {
    (destinations || []).forEach((dest) => {
      const name = typeof dest === 'string' ? dest : dest?.name;
      if (!name) return;
      const slug = `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${name
        .toLowerCase()
        .replace(/\s+/g, '-')}`;
      set.add(slug);
    });
  });
  return set;
}

// Built once per server process (module singletons).
let _sets = null;
function sets() {
  if (_sets) return _sets;
  _sets = {
    'one-way-cab': new Set(getAllOneWayRouteSlugs()),
    'round-trip': new Set(getAllRoundTripSlugs()),
    'distance': new Set(getAllDistanceRouteSlugs()),
    'toll-cost': new Set(getAllTollCostSlugs()),
    'bus-routes': buildOriginDestSlugs(busRoutes),
    'tempo-traveller': buildOriginDestSlugs(tempoRoutes),
  };
  return _sets;
}

// Display metadata + ordering for each category (booking formats first).
const CATEGORY_META = {
  // The corridor's general booking page, which lives at the bare slug rather
  // than under a category folder. It was missing from this map, so no page on
  // the site ever linked to it through the corridor block -- including the
  // distance pages, which are the highest-appearance pages the site has.
  // Nine corridors had a booking page and no path to it from their distance
  // page at all; Haridwar to Dehradun is shown 43,555 times a quarter.
  'root': { label: 'Cab Booking', sub: 'Fares & vehicles', kind: 'book' },
  'one-way-cab': { label: 'One-Way Cab', sub: 'Pay one side only', kind: 'book' },
  'round-trip': { label: 'Round Trip', sub: 'Return fare included', kind: 'book' },
  'tempo-traveller': { label: 'Tempo Traveller', sub: '9–26 seater group', kind: 'book' },
  'bus-routes': { label: 'Bus Hire', sub: '27–50 seater coach', kind: 'book' },
  'distance': { label: 'Distance & Route', sub: 'Km, time & stops', kind: 'info' },
  'toll-cost': { label: 'Toll & FASTag Cost', sub: 'Exact toll charges', kind: 'info' },
};

// 'round-trip' was removed from the cluster while the family was noindexed
// (Week 47) and restored the same day when the client chose to keep every
// page in the index.
const ORDER = [
  'root',
  'one-way-cab',
  'round-trip',
  'tempo-traveller',
  'bus-routes',
  'distance',
  'toll-cost',
];

// Week 49: the anchor text a crawler reads. A link that says "Distance & Route"
// tells it nothing about which distance; one that says "Delhi to Agra distance"
// says exactly what the page answers, in the words people type. The corridor's
// own names are taken from the slug, which is where every other family gets
// them, so nothing new has to be maintained.
const TITLE_CASE = (w) => w.charAt(0).toUpperCase() + w.slice(1);
function pairFromSlug(slug) {
  const m = /^(.+)-to-(.+)$/.exec(String(slug || ''));
  if (!m) return null;
  const nice = (x) => x.split('-').map(TITLE_CASE).join(' ');
  return { from: nice(m[1]), to: nice(m[2]) };
}
function labelFor(cat, slug, meta) {
  const p = pairFromSlug(slug);
  if (!p) return meta.label;
  const pair = `${p.from} to ${p.to}`;
  switch (cat) {
    case 'root': return `${pair} cab`;
    case 'distance': return `${pair} distance`;
    case 'toll-cost': return `${pair} toll`;
    case 'one-way-cab': return `${pair} one-way cab`;
    case 'round-trip': return `${pair} round trip`;
    case 'tempo-traveller': return `${pair} tempo traveller`;
    case 'bus-routes': return `${pair} bus hire`;
    default: return meta.label;
  }
}

/**
 * getCorridorLinks(slug, currentCategory)
 * @param {string} slug            e.g. "delhi-to-jaipur"
 * @param {string} currentCategory one of the keys in CATEGORY_META (the page we're on) — excluded from output
 * @returns {Array<{category,label,sub,kind,href}>} existing sibling-format links, ordered
 */
export function getCorridorLinks(slug, currentCategory) {
  if (!slug) return [];
  const s = sets();
  const links = [];
  for (const cat of ORDER) {
    if (cat === currentCategory) continue;
    const isRoot = cat === 'root';
    const path = isRoot ? `/${slug}` : `/${cat}/${slug}`;
    // The booking page has no slug set of its own — ask the build manifest.
    const exists = isRoot ? routeExists(path) : Boolean(s[cat] && s[cat].has(slug));
    if (!exists) continue;
    const href = canonicalLink(path);
    // A corridor whose booking URL is consolidated onto one of the other
    // formats would otherwise be listed twice under two names.
    if (links.some((l) => l.href === href)) continue;
    const meta = CATEGORY_META[cat];
    links.push({
      category: cat,
      label: labelFor(cat, slug, meta),
      shortLabel: meta.label,
      sub: meta.sub,
      kind: meta.kind,
      href,
    });
  }
  return links;
}

export { CATEGORY_META };
