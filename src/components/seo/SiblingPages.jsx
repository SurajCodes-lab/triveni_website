// src/components/seo/SiblingPages.jsx
//
// Week 49 — the pages nothing linked to.
//
// An audit of every generated page against every internal link found nine real
// pages that no other page points at. They are not obscure: the friends' trips
// to Jibhi, Spiti and Tirthan Valley, the bachelor trip, the Rajasthan budget
// page, two festival pages and the Urbania comparison. Each is a member of a
// family whose other members are linked from a city hub the orphan has no hub
// for — Jibhi has no city page, so nothing pointed at its trip page.
//
// This renders the family: every built address sharing a prefix, minus the page
// it is on. It is resolved from the list of pages the site produces, so a new
// sibling appears without anyone remembering to add it.

import Link from 'next/link';
import knownRoutes from '@/generated/known-routes.json';

const ROUTES = Array.isArray(knownRoutes) ? knownRoutes : (knownRoutes.routes || []);

const titleise = (slug, prefix) =>
  slug
    .replace(prefix, '')
    .replace(/^\/+|-+$/g, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();

/**
 * @param {string} prefix   e.g. "/friends-trip-"
 * @param {string} contains a substring the address must contain instead, e.g. "-vs-"
 * @param {string} current the page's own address, excluded from the list
 * @param {string} title   the heading
 * @param {string} intro   one line under it
 * @param {number} limit
 */
export default function SiblingPages({ prefix, contains, current, title, intro, limit = 12 }) {
  const rows = ROUTES
    .filter((p) => typeof p === 'string' && p !== current
      && (prefix ? p.startsWith(prefix) : (contains ? p.includes(contains) && p.split('/').length === 2 : false)))
    .sort()
    .slice(0, limit);
  if (rows.length < 2) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-10" aria-labelledby="sibling-pages">
      <h2 id="sibling-pages" className="text-xl font-bold text-slate-900">{title}</h2>
      {intro && <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{intro}</p>}
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {rows.map((p) => (
          <li key={p}>
            <Link
              href={p}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:text-slate-900"
            >
              {titleise(p, prefix || '/')}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
