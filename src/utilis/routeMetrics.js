// src/utilis/routeMetrics.js
//
// Corridor distance/duration resolver — SERVER ONLY.
//
// tempoRoutes and busRoutes entries carry a destination name and type but often
// no distance or drive time, which is why those templates used to print
// "Contact for details" / "Contact Us" in their fact strips. The same corridor
// almost always exists in the distance or one-way-cab datasets, so we borrow the
// real figures from there rather than showing a placeholder or inventing one.
//
// Never import this from a client component: it pulls both datasets into the
// bundle. Resolve on the server and pass the resulting strings down as props.

import { getDistanceRoute } from '@/utilis/distanceData';
import { getOneWayRoute } from '@/utilis/oneWayCabData';
import { busRoutes } from '@/utilis/busRoutesData';

const slugify = (s) => String(s || '')
  .toLowerCase()
  .trim()
  .replace(/&/g, 'and')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

// "Contact for details", "Contact Us", "On request", "TBD" and friends are
// absences wearing a value's clothes — treat them as missing.
const PLACEHOLDER = /^(contact|on request|on-request|tbd|n\/?a|-|—)/i;

const real = (v) => {
  const s = String(v ?? '').trim();
  return s && !PLACEHOLDER.test(s) ? s : null;
};

function fromDistanceRoute(slug) {
  const r = getDistanceRoute(slug);
  if (!r) return null;
  const km = r.distance?.km;
  return {
    distance: Number.isFinite(km) ? `${km} km` : null,
    duration: real(r.duration),
  };
}

function fromOneWayRoute(slug) {
  const r = getOneWayRoute(slug);
  if (!r) return null;
  return {
    distance: real(r.distance) || (Number.isFinite(r.distanceNum) ? `${r.distanceNum} km` : null),
    duration: real(r.time),
  };
}

// busRoutes is keyed by origin city rather than by slug, so index it once.
const busBySlug = (() => {
  const idx = {};
  for (const origin of Object.keys(busRoutes || {})) {
    for (const dest of busRoutes[origin] || []) {
      idx[`${slugify(origin)}-to-${slugify(dest.name)}`] = dest;
    }
  }
  return idx;
})();

function fromBusRoute(slug) {
  const r = busBySlug[slug];
  if (!r) return null;
  return { distance: real(r.distance), duration: real(r.duration) };
}

/**
 * Resolve a corridor's distance and drive time, preferring values the caller
 * already has. Returns { distance, duration } where either may be null — a null
 * means no dataset knows the figure, and the caller must not print anything.
 */
export function resolveRouteMetrics({ slug, origin, destination, distance, duration } = {}) {
  const out = { distance: real(distance), duration: real(duration) };
  if (out.distance && out.duration) return out;

  const forward = real(slug) || (origin && destination ? `${slugify(origin)}-to-${slugify(destination)}` : null);
  // Road distance and drive time are the same in either direction, so the
  // reverse corridor is a legitimate source when the forward one is missing.
  const reverse = origin && destination ? `${slugify(destination)}-to-${slugify(origin)}` : null;

  for (const candidate of [forward, reverse].filter(Boolean)) {
    for (const lookup of [fromDistanceRoute, fromOneWayRoute, fromBusRoute]) {
      const hit = lookup(candidate);
      if (!hit) continue;
      out.distance = out.distance || hit.distance;
      out.duration = out.duration || hit.duration;
      if (out.distance && out.duration) return out;
    }
  }

  return out;
}
