'use client';

import { useStickyCta } from '@/components/ui/StickyCtaContext';
import { Calculator } from '@/components/ui/icons';

/**
 * DesktopQuoteButton — global desktop-only floating "Get Fare Quote" trigger.
 *
 * On mobile the MobileStickyBar's "Get Quote" already opens the global capture
 * form (Name + Phone → Google Sheet). But MobileStickyBar is `md:hidden`, so on
 * DESKTOP any page without an inline QuickEnquiryForm had no way to open the
 * lead form. This button closes that gap: it sits above the WhatsApp float on
 * desktop and calls openQuote() → the global capture modal → the Sheet.
 *
 * Result: no page is form-less on any device — 100% of pages can capture a lead.
 */
export default function DesktopQuoteButton() {
  const { openQuote } = useStickyCta();
  return (
    <button
      type="button"
      onClick={() => openQuote()}
      aria-label="Get an instant fare quote"
      className="hidden md:flex fixed bottom-24 right-6 z-50 items-center gap-2 rounded-full bg-[#FACF2D] text-slate-900 font-bold text-sm px-5 py-3 shadow-lg shadow-amber-500/30 hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all duration-200 animate-fade-in-up"
    >
      <Calculator className="w-4 h-4" />
      Get Fare Quote
    </button>
  );
}
