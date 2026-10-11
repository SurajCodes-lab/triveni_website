// src/components/seo/CorridorLinks.jsx
//
// Presentational "Same route, other ways to travel" block. Renders the
// cross-category corridor links computed server-side by getCorridorLinks().
// No data imports here — it only maps a small `links` prop, so it adds nothing
// to the client bundle beyond markup.

import Link from 'next/link';
import { ArrowRight, Car, RefreshCw, Users, Bus, MapPin, Wallet } from '@/components/ui/icons';

const ICONS = {
  'one-way-cab': Car,
  'round-trip': RefreshCw,
  'tempo-traveller': Users,
  'bus-routes': Bus,
  'distance': MapPin,
  'toll-cost': Wallet,
};

/**
 * @param {Array} links      output of getCorridorLinks(slug, currentCategory)
 * @param {string} fromLabel human origin name (e.g. "Delhi")
 * @param {string} toLabel   human destination name (e.g. "Jaipur")
 * @param {'light'|'dark'} theme
 */
export default function CorridorLinks({ links = [], fromLabel = '', toLabel = '', theme = 'light' }) {
  if (!links || links.length === 0) return null;

  const dark = theme === 'dark';
  const routeLabel = fromLabel && toLabel ? `${fromLabel} → ${toLabel}` : 'this route';

  return (
    <section
      aria-label="Other ways to travel this route"
      className={`rounded-2xl border p-5 md:p-6 ${
        dark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
      }`}
    >
      <h2 className={`text-lg md:text-xl font-bold mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>
        Other ways to travel {routeLabel}
      </h2>
      <p className={`text-sm mb-4 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
        Same corridor, different options — compare fares, vehicles, distance and tolls.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {links.map((l) => {
          const Icon = ICONS[l.category] || ArrowRight;
          return (
            <Link
              key={l.category}
              href={l.href}
              className={`group flex items-center gap-3 rounded-xl border p-3 transition-all ${
                dark
                  ? 'bg-white/5 border-white/10 hover:border-amber-400/50 hover:bg-white/10'
                  : 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-md'
              }`}
            >
              <span
                className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-lg ${
                  l.kind === 'book'
                    ? 'bg-amber-100 text-amber-700'
                    : dark
                    ? 'bg-white/10 text-slate-300'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <Icon className="w-4 h-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className={`block text-sm font-semibold leading-snug ${dark ? 'text-white' : 'text-slate-900'}`}>
                  {l.label}
                </span>
                <span className={`block break-words text-xs leading-snug ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {l.sub}
                </span>
              </span>
              <ArrowRight
                className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                  dark ? 'text-slate-500' : 'text-slate-400'
                }`}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
