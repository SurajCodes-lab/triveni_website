// Server component. The 'use client' directive was removed because this file
// has no state, effects, event handlers or browser APIs — it was being
// serialised into the hydration payload and re-executed in the browser for
// no reason. Re-add the directive if interactivity is introduced here.
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';

/**
 * Drop-in "get a quote" section for route pages that previously had no capture
 * form (only WhatsApp/call CTAs). QuickEnquiryForm saves every submission to the
 * Google Sheet (via /api/lead) BEFORE the WhatsApp handoff, so leads are captured
 * even when the user doesn't finish on WhatsApp. Wrapped in a dark card so the
 * (dark-themed) form is always legible regardless of the host page's theme.
 */
export default function LeadQuoteSection({
  fromCity = '',
  toCity = '',
  pageType = 'route',
  title = 'Get a Quick Quote in 2 Min',
}) {
  return (
    <section className="bg-slate-950 py-10 px-4">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-amber-400/25 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-3 text-center">
            <h2 className="text-lg font-bold text-white">{title}</h2>
            <p className="mt-0.5 text-xs text-slate-400">Reply on WhatsApp in ~2 min · No spam · Free quote</p>
          </div>
          <QuickEnquiryForm fromCity={fromCity} toCity={toCity} pageType={pageType} />
        </div>
      </div>
    </section>
  );
}
