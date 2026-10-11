/**
 * OutboundCitations — formatted "Sources & references" block.
 *
 * Why this exists: AI engines treat outbound citations to authoritative
 * domains (.gov, .edu, wikipedia.org, recognized industry bodies) as a
 * credibility-signal proxy. Princeton GEO research quantified inline
 * citations as **+30%** citation share lift.
 *
 * This component renders a properly formatted "References" section with
 * domain badges. Server-component-friendly (no hooks).
 *
 * Props:
 *  - sources: [{ name, url, label?, category? }]
 *  - heading: optional H3
 *  - tone: 'light' | 'dark'
 */
import React from 'react';

function getDomain(url) {
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function categoryFor(url) {
  const host = getDomain(url);
  if (/\.gov(\.|$)/i.test(host)) return { label: 'GOV', color: 'bg-green-100 text-green-800 border-green-200' };
  if (/\.edu(\.|$)/i.test(host)) return { label: 'EDU', color: 'bg-purple-100 text-purple-800 border-purple-200' };
  if (/wikipedia\.org/i.test(host)) return { label: 'WIKI', color: 'bg-slate-100 text-slate-700 border-slate-200' };
  if (/airportsindia\.org\.in|aai\.aero|mausam\.imd\.gov\.in|incredibleindia/i.test(host)) return { label: 'OFFICIAL', color: 'bg-blue-100 text-blue-800 border-blue-200' };
  return { label: 'REF', color: 'bg-amber-100 text-amber-800 border-amber-200' };
}

export default function OutboundCitations({
  sources = [],
  heading = 'Sources & references',
  tone = 'light',
  className = '',
}) {
  if (!sources?.length) return null;
  const dark = tone === 'dark';

  return (
    <section
      className={`outbound-citations rounded-2xl p-6 md:p-8 ${dark ? 'bg-slate-900 border border-white/10 text-white' : 'bg-slate-50 border border-slate-200 text-slate-900'} ${className}`}
      aria-label={heading}
    >
      <h3 className={`text-lg font-bold mb-4 ${dark ? 'text-white/90' : 'text-slate-900'}`}>{heading}</h3>
      <p className={`text-sm mb-4 ${dark ? 'text-white/60' : 'text-slate-600'}`}>
        Verified against official tourism, transport and weather data. We refresh these sources quarterly.
      </p>
      <ol className="space-y-2 list-decimal list-inside">
        {sources.map((s) => {
          const cat = categoryFor(s.url);
          return (
            <li key={s.url} className={`text-sm leading-relaxed ${dark ? 'text-white/80' : 'text-slate-700'}`}>
              <span className={`inline-block px-2 py-0.5 mr-2 text-[10px] font-bold rounded-md border ${cat.color}`}>
                {cat.label}
              </span>
              <a
                href={s.url}
                target="_blank"
                rel={cat.label === 'GOV' || cat.label === 'EDU' || cat.label === 'WIKI' ? 'noopener' : 'nofollow noopener'}
                className={`underline ${dark ? 'hover:text-amber-300' : 'hover:text-amber-700'}`}
              >
                {s.name}
              </a>
              {s.label && <span className={`ml-2 text-xs ${dark ? 'text-white/50' : 'text-slate-500'}`}>— {s.label}</span>}
              <span className={`ml-2 text-xs ${dark ? 'text-slate-300' : 'text-slate-600'}`}>({getDomain(s.url)})</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
