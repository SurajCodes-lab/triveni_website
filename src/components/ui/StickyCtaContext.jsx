'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';

// Lazy-load the form so it only ships when the quote modal is opened.
const QuickEnquiryForm = dynamic(() => import('@/components/ui/QuickEnquiryForm'), { ssr: false });

const StickyCtaContext = createContext(null);

export function StickyCtaProvider({ children }) {
  const [config, setConfigState] = useState(null); // { price, label, whatsappText } | null
  const [quoteOpen, setQuoteOpen] = useState(false);
  const setConfig = useCallback((c) => setConfigState(c), []);
  const clearConfig = useCallback(() => setConfigState(null), []);
  const openQuote = useCallback(() => setQuoteOpen(true), []);
  const closeQuote = useCallback(() => setQuoteOpen(false), []);

  // Lock body scroll while the modal is open.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = quoteOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [quoteOpen]);

  // Site-wide WhatsApp interceptor: any click on a WhatsApp link opens the
  // capture form first (Name + Phone → Sheet), THEN the form opens WhatsApp on
  // submit. One listener covers every WhatsApp anchor across all ~2,100 pages,
  // so no WhatsApp enquiry goes uncaptured. Opt out per-link with data-direct-wa.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const onClick = (e) => {
      const a = e.target?.closest?.('a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="whatsapp.com/send"]');
      if (!a) return;
      if (a.hasAttribute('data-direct-wa')) return; // explicit bypass if ever needed
      e.preventDefault();
      e.stopPropagation();
      openQuote();
    };
    document.addEventListener('click', onClick, true); // capture phase, beats inline handlers
    return () => document.removeEventListener('click', onClick, true);
  }, [openQuote]);

  return (
    <StickyCtaContext.Provider value={{ config, setConfig, clearConfig, openQuote, closeQuote }}>
      {children}

      {/* Global quote modal — the capture form, available on EVERY page so the
          "Get Quote" CTA always saves the lead to the Sheet (no page is form-less). */}
      {quoteOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Get a quote">
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={closeQuote} />
          <div className="relative z-10 w-full max-w-md">
            <button
              type="button"
              onClick={closeQuote}
              aria-label="Close quote form"
              className="absolute -top-3 -right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-slate-900 shadow-lg"
            >
              ×
            </button>
            <div className="max-h-[90vh] overflow-y-auto rounded-2xl border border-amber-400/30 bg-slate-900 p-5 shadow-2xl" data-quote-form="1">
              <div className="mb-3 text-center">
                <h2 className="text-lg font-bold text-white">
                  {config?.label ? `Get a Quote — ${config.label}` : 'Get a Free Quote in 2 Min'}
                </h2>
                <p className="mt-0.5 text-xs text-slate-400">Reply on WhatsApp in ~2 min · No spam · Free</p>
              </div>
              <QuickEnquiryForm pageType="quote" />
            </div>
          </div>
        </div>
      )}
    </StickyCtaContext.Provider>
  );
}

export function useStickyCta() {
  return useContext(StickyCtaContext) || {
    config: null, setConfig: () => {}, clearConfig: () => {}, openQuote: () => {}, closeQuote: () => {},
  };
}

// Drop-in client component a page/client can render to set the sticky-bar
// context on mount and clear on unmount.
export function SetStickyCta({ price = '', label = '', whatsappText = '' }) {
  const { setConfig, clearConfig } = useStickyCta();
  useEffect(() => {
    setConfig({ price, label, whatsappText });
    return () => clearConfig();
  }, [price, label, whatsappText, setConfig, clearConfig]);
  return null;
}
