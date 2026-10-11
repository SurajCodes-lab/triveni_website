// src/lib/seo/route-exists.js
//
// "Does this internal URL actually exist?" — answered from the build manifest
// written by scripts/gen-route-manifest.mjs (src/generated/known-routes.json),
// plus the redirect map (a redirect source resolves, so it counts as existing).
//
// WHY (Week 47): the link helpers synthesise URLs by convention — a city name
// becomes `/${city}-travel-guide`, `/best-time-to-visit/${city}`,
// `/one-way-cab/${from}-to-${to}` — and a link audit of the built site found
// 1,939 distinct hrefs to pages that were never built, 28,000 occurrences in
// all. Googlebot followed them; Search Console reported 2,519 "Not found"
// pages. Every list-returning helper now passes its result through
// deepFilterLinks() so a link is only emitted when its target exists.
//
// Server-only data. `typeof window` is replaced at build time by Next, so the
// manifest is never shipped to the browser; in a client bundle routeExists()
// simply returns true (the lists those components render were built on the
// server and already filtered).

let KNOWN = null;
let REDIRECTS = null;
let REDIRECT_MAP = null;
function load() {
  if (KNOWN) return;
  if (typeof window === 'undefined') {
    KNOWN = new Set(require('../../generated/known-routes.json'));
    const rules = require('./booking-canonical-redirects.mjs').bookingCanonicalRedirects;
    REDIRECTS = new Set(rules.map((r) => r.source));
    REDIRECT_MAP = new Map(rules.map((r) => [r.source, r.destination]));
  } else {
    KNOWN = new Set(); REDIRECTS = new Set(); REDIRECT_MAP = new Map();
  }
}

export function normalizePath(href) {
  let p = String(href || '');
  p = p.replace(/^https?:\/\/(www\.)?trivenicabs\.in/, '');
  p = p.replace(/[?#].*$/, '');
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return p;
}

/** True when an internal href resolves to a real page, file or redirect. External links are always true. */
export function routeExists(href) {
  if (typeof window !== 'undefined') return true;
  if (!href || typeof href !== 'string') return false;
  if (/^(https?:)?\/\//.test(href) && !/trivenicabs\.in/.test(href)) return true; // external
  if (/^(mailto:|tel:|sms:|whatsapp:)/.test(href)) return true;
  load();
  const p = normalizePath(href);
  if (!p.startsWith('/')) return true; // relative fragments etc. — leave alone
  if (p.startsWith('/_next/') || p.startsWith('/api/')) return true;
  if (KNOWN.has(p) || REDIRECTS.has(p)) return true;
  // literal images / files with a different case are NOT accepted — Linux is case-sensitive
  return false;
}

/**
 * The URL actually served for an internal path, or null when nothing is.
 *
 * Week 53. `routeExists()` answers "does this resolve", and counts a redirect
 * source as resolving — which is right for link validation and wrong for
 * deciding what to put in an href. `canonicalHref()` rewrites the 28
 * booking-canonical sources but knows nothing about the 1,326 broken-link rules
 * generated in Week 47, which is where most of the site's dead internal targets
 * are absorbed.
 *
 * This follows BOTH maps to the end of the chain and then asks whether the
 * destination is a page the build actually produced. Three outcomes:
 *
 *   - the path is built            -> the path, unchanged
 *   - it redirects to a built page -> that page, so the link lands in one hop
 *   - it resolves to nothing       -> null, so the caller can offer something else
 *
 * The null case is the one that matters. A caller that cannot tell the
 * difference between "redirects" and "does not exist" will happily render an
 * href to a 404, which is how 14 links to pages that were never built reached
 * production, and how a further 124 were quietly costing a redirect hop each.
 */
let ALL_REDIRECTS = null;
function loadAllRedirects() {
  if (ALL_REDIRECTS) return;
  if (typeof window !== 'undefined') { ALL_REDIRECTS = new Map(); return; }
  ALL_REDIRECTS = new Map();
  for (const r of require('./booking-canonical-redirects.mjs').bookingCanonicalRedirects) {
    ALL_REDIRECTS.set(r.source, r.destination);
  }
  // The generated list already filters out any rule whose source became a real
  // route (the Week 52 guard), so a page built since the audit wins here.
  try {
    for (const r of require('./broken-link-redirects.mjs').brokenLinkRedirects) {
      if (!ALL_REDIRECTS.has(r.source)) ALL_REDIRECTS.set(r.source, r.destination);
    }
  } catch { /* the module is optional on a clean checkout */ }
}

export function servedHref(href) {
  if (typeof window !== 'undefined') return href || null;
  if (!href || typeof href !== 'string') return null;
  if (/^(https?:)?\/\//.test(href) || /^(mailto:|tel:|sms:|whatsapp:)/.test(href)) return href;
  load();
  loadAllRedirects();
  let p = normalizePath(href);
  if (!p.startsWith('/')) return href;
  const seen = new Set();
  while (!KNOWN.has(p)) {
    if (!ALL_REDIRECTS.has(p) || seen.has(p)) return null;
    seen.add(p);
    p = normalizePath(ALL_REDIRECTS.get(p));
  }
  return p;
}

const LINK_KEYS = ['href', 'url', 'link', 'path'];
function isLinkObject(o) {
  return o && typeof o === 'object' && !Array.isArray(o) && LINK_KEYS.some((k) => typeof o[k] === 'string' && o[k].startsWith('/'));
}
function linkOf(o) { for (const k of LINK_KEYS) if (typeof o[k] === 'string') return o[k]; return null; }


/**
 * Week 48 (strategy action 10): an internal link that points at one of the 22
 * booking-canonical redirect sources is rewritten to carry the final address,
 * so the reader and the crawler land in one hop. Googlebot was spending about
 * 30% of its fetches on these redirects. Anything that is not a redirect source
 * comes back unchanged.
 */
export function canonicalHref(href) {
  if (typeof window !== 'undefined' || !href || typeof href !== 'string') return href;
  load();
  const p = normalizePath(href);
  const target = REDIRECT_MAP.get(p);
  if (!target) return href;
  const suffix = href.slice(href.indexOf(p) + p.length);
  return `${target}${suffix}`;
}

function canonicalizeLinkObject(o) {
  let out = o;
  for (const k of LINK_KEYS) {
    if (typeof o[k] === 'string' && o[k].startsWith('/')) {
      const next = canonicalHref(o[k]);
      if (next !== o[k]) { if (out === o) out = { ...o }; out[k] = next; }
    }
  }
  return out;
}

/**
 * Recursively drop, from any array inside `value`, the objects whose internal
 * link does not exist. Leaves everything else untouched. Safe on any shape.
 */
export function deepFilterLinks(value, depth = 0) {
  if (typeof window !== 'undefined' || depth > 6 || value == null) return value;
  if (Array.isArray(value)) {
    return value
      .map((item) => (isLinkObject(item) ? canonicalizeLinkObject(item) : item))
      .filter((item) => !isLinkObject(item) || routeExists(linkOf(item)))
      .map((item) => (item && typeof item === 'object' ? deepFilterLinks(item, depth + 1) : item));
  }
  if (typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = (v && typeof v === 'object') ? deepFilterLinks(v, depth + 1) : v;
    return out;
  }
  return value;
}

export default routeExists;
