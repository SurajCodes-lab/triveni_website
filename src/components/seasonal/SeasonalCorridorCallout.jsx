import Link from 'next/link';

/**
 * SeasonalCorridorCallout — a single, prominent band that sends a reader of an
 * informational page (distance guide, toll guide, blog) or a corridor booking
 * page to the in-window seasonal money page for that destination.
 *
 * Presentational only: no hooks, no dates, no data imports. The `callout`
 * object is resolved on the server by getSeasonalCorridorCallout() and passed
 * down, so this component is safe to render inside client components too.
 * Renders nothing when there is no active campaign for the destination, so it
 * costs no layout on the ~3,000 pages it does not apply to.
 *
 * Deliberately CSS-only hover treatment and no framer-motion — the pages it
 * lands on carry the site's LCP hero and must stay server-visible.
 */
export default function SeasonalCorridorCallout({ callout, tone = 'light' }) {
  if (!callout) return null;
  const dark = tone === 'dark';
  return (
    <section
      aria-label="Seasonal booking"
      className={dark ? 'bg-slate-950 px-4 py-6 sm:px-6' : 'bg-white px-4 py-6 sm:px-6'}
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 rounded-2xl border border-amber-300/70 bg-gradient-to-r from-amber-50 via-[#FFF6DC] to-amber-50 p-5 shadow-[0_18px_50px_-30px_rgba(180,130,10,0.55)] transition-shadow hover:shadow-[0_22px_60px_-28px_rgba(180,130,10,0.7)] sm:flex-row sm:items-center sm:p-6">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-700">{callout.eyebrow}</p>
            <h2 className="font-display-serif mt-1 text-xl font-black leading-tight text-slate-900 sm:text-2xl">
              {callout.heading}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{callout.body}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link
              href={callout.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-5 py-3 text-sm font-black text-slate-900 shadow-[0_8px_24px_-8px_rgba(250,207,45,0.6)] transition-transform hover:-translate-y-0.5"
            >
              {callout.cta}
              <span aria-hidden="true">›</span>
            </Link>
            {callout.bookingHref && (
              <Link
                href={callout.bookingHref}
                className="inline-flex items-center justify-center rounded-xl border border-slate-900/15 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50"
              >
                {callout.bookingCta}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
