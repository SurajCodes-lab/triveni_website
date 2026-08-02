/**
 * ExpertQuote — named expert quote with attribution.
 *
 * Why: Princeton GEO research: expert quotes with attribution lift AI citation
 * share by **+41%** — the single biggest content signal. Quotation marks +
 * named attribution signal "this is a citable fact, not marketing copy."
 *
 * Server-component-friendly. Visible HTML carries microdata
 * (schema:Quotation) so AI engines extract it cleanly.
 */
import React from 'react';

export default function ExpertQuote({
  quote,
  authorName,
  authorTitle,
  authorOrg,
  tone = 'light',
  className = '',
}) {
  if (!quote) return null;
  const dark = tone === 'dark';

  return (
    <figure
      className={`expert-quote relative my-8 p-6 md:p-8 rounded-2xl ${dark ? 'bg-slate-900/60 border border-amber-500/20' : 'bg-amber-50/60 border border-amber-200'} ${className}`}
      itemScope
      itemType="https://schema.org/Quotation"
    >
      <svg
        className={`absolute -top-4 -left-2 w-14 h-14 ${dark ? 'text-amber-500/40' : 'text-amber-300'}`}
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9.5 5C5.91 5 3 7.91 3 11.5V19h7.5v-7.5H6c0-2.49 2.01-4.5 4.5-4.5V5zm10 0c-3.59 0-6.5 2.91-6.5 6.5V19H20.5v-7.5H16c0-2.49 2.01-4.5 4.5-4.5V5z" />
      </svg>
      <blockquote
        className={`relative z-10 text-lg md:text-xl leading-relaxed italic font-medium ${dark ? 'text-white/90' : 'text-slate-800'}`}
        itemProp="text"
      >
        {quote}
      </blockquote>
      <figcaption className={`mt-4 text-sm not-italic flex items-center gap-3 ${dark ? 'text-white/70' : 'text-slate-700'}`}>
        <div className={`w-10 h-10 rounded-full ${dark ? 'bg-amber-500/20 text-amber-200' : 'bg-amber-200 text-amber-900'} flex items-center justify-center font-bold text-sm`} aria-hidden="true">
          {authorName?.split(' ').map((n) => n[0]).slice(0, 2).join('')}
        </div>
        <div itemProp="creator" itemScope itemType="https://schema.org/Person">
          <div className="font-semibold" itemProp="name">{authorName}</div>
          <div className={`text-xs ${dark ? 'text-white/50' : 'text-slate-500'}`}>
            <span itemProp="jobTitle">{authorTitle}</span>{authorOrg ? <>, <span itemProp="worksFor">{authorOrg}</span></> : null}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
