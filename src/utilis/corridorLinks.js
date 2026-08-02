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
  'one-way-cab': { label: 'One-Way Cab', sub: 'Pay one side only', kind: 'book' },
  'round-trip': { label: 'Round Trip', sub: 'Return fare included', kind: 'book' },
  'tempo-traveller': { label: 'Tempo Traveller', sub: '9–26 seater group', kind: 'book' },
  'bus-routes': { label: 'Bus Hire', sub: '27–50 seater coach', kind: 'book' },
  'distance': { label: 'Distance & Route', sub: 'Km, time & stops', kind: 'info' },
  'toll-cost': { label: 'Toll & FASTag Cost', sub: 'Exact toll charges', kind: 'info' },
};

const ORDER = [
  'one-way-cab',
  'round-trip',
  'tempo-traveller',
  'bus-routes',
  'distance',
  'toll-cost',
];

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
    if (s[cat] && s[cat].has(slug)) {
      const meta = CATEGORY_META[cat];
      links.push({
        category: cat,
        label: meta.label,
        sub: meta.sub,
        kind: meta.kind,
        href: `/${cat}/${slug}`,
      });
    }
  }
  return links;
}

export { CATEGORY_META };
