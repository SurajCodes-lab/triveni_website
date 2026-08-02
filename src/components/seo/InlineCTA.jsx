/**
 * InlineCTA — drop-in revenue CTA for any page.
 *
 * Answers the "every page should generate revenue" requirement. A single
 * import + one JSX block gives a previously content-only page (blog, food
 * tour, shopping guide, FAQ, travel guide, policy) a strong conversion unit
 * that doesn't disrupt reading flow.
 *
 * Double-duty:
 *   1. Visual: theme-aware card with Call + WhatsApp buttons above the fold
 *      or mid-content.
 *   2. Semantic: emits a structured `<address>` + itemScope block so LLMs
 *      (ChatGPT/Claude/Perplexity/Gemini) can extract the phone / WhatsApp /
 *      service name when citing Triveni. This is the GEO side — most
 *      competitors' content pages have zero explicit booking affordance in
 *      the content itself, only footer numbers. We gain share on every
 *      "what's the phone number for X cab service" style voice query.
 *
 * Also injects a `trackingToken` into the WhatsApp pre-filled message so
 * the client can reconcile every clicked CTA back to the exact page the
 * user was reading — attribution all the way from content → conversation.
 *
 * Usage:
 *   <InlineCTA
 *     theme="guide"
 *     headline="Planning the Same Trip? We Drive It Daily."
 *     sub="Sedan ₹11/km · SUV ₹15/km · Tempo from ₹20/km · No hidden charges."
 *     context="agra-food-tour"
 *     waMessage="Hi, I read the Agra Food Tour guide and want to book a cab."
 *   />
 */

'use client';

import Link from 'next/link';
import { useEffect, useRef, useCallback } from 'react';
import {
  trackPhoneCall,
  trackWhatsAppClick,
  trackCtaImpression,
  appendTrackingToken,
} from '@/utilis/analytics';

const THEME = {
  'city-hub':    { grad: 'from-amber-500 to-yellow-500',  btn: 'bg-amber-600 hover:bg-amber-700',  outline: 'border-amber-400 text-amber-700 hover:bg-amber-50',  bg: 'bg-white',       text: 'text-slate-900' },
  'airport':     { grad: 'from-sky-500 to-blue-600',       btn: 'bg-sky-600 hover:bg-sky-700',       outline: 'border-sky-400 text-sky-700 hover:bg-sky-50',       bg: 'bg-slate-950',    text: 'text-white' },
  'sightseeing': { grad: 'from-emerald-500 to-teal-500',   btn: 'bg-emerald-600 hover:bg-emerald-700', outline: 'border-emerald-400 text-emerald-700 hover:bg-emerald-50', bg: 'bg-slate-950', text: 'text-white' },
  'wedding':     { grad: 'from-rose-500 to-pink-500',      btn: 'bg-rose-600 hover:bg-rose-700',     outline: 'border-rose-400 text-rose-700 hover:bg-rose-50',     bg: 'bg-white',       text: 'text-slate-900' },
  'corporate':   { grad: 'from-slate-700 to-slate-900',    btn: 'bg-slate-800 hover:bg-slate-900',    outline: 'border-slate-400 text-slate-700 hover:bg-slate-50',   bg: 'bg-white',       text: 'text-slate-900' },
  'road-trip':   { grad: 'from-orange-500 to-amber-500',   btn: 'bg-orange-600 hover:bg-orange-700', outline: 'border-orange-400 text-orange-700 hover:bg-orange-50', bg: 'bg-stone-900',   text: 'text-white' },
  'day-trip':    { grad: 'from-lime-500 to-emerald-500',   btn: 'bg-lime-600 hover:bg-lime-700',     outline: 'border-lime-400 text-lime-700 hover:bg-lime-50',     bg: 'bg-white',       text: 'text-slate-900' },
  'station':     { grad: 'from-cyan-500 to-blue-500',      btn: 'bg-cyan-600 hover:bg-cyan-700',     outline: 'border-cyan-400 text-cyan-700 hover:bg-cyan-50',     bg: 'bg-slate-950',    text: 'text-white' },
  'religious':   { grad: 'from-yellow-500 to-orange-500',  btn: 'bg-yellow-600 hover:bg-yellow-700', outline: 'border-yellow-400 text-yellow-800 hover:bg-yellow-50', bg: 'bg-white',      text: 'text-slate-900' },
  'best-time':   { grad: 'from-teal-500 to-cyan-500',      btn: 'bg-teal-600 hover:bg-teal-700',     outline: 'border-teal-400 text-teal-700 hover:bg-teal-50',     bg: 'bg-white',       text: 'text-slate-900' },
  'blog':        { grad: 'from-violet-500 to-purple-500',  btn: 'bg-violet-600 hover:bg-violet-700', outline: 'border-violet-400 text-violet-700 hover:bg-violet-50', bg: 'bg-white',     text: 'text-slate-900' },
  'guide':       { grad: 'from-amber-400 via-yellow-400 to-amber-500',  btn: 'bg-amber-500 hover:bg-amber-400',   outline: 'border-amber-400/60 text-amber-200 hover:bg-amber-400/10', bg: 'bg-gradient-to-br from-[#1a1408] via-slate-950 to-slate-900', text: 'text-amber-50' },
  'comparison':  { grad: 'from-stone-600 to-stone-800',    btn: 'bg-stone-700 hover:bg-stone-800',   outline: 'border-stone-400 text-stone-700 hover:bg-stone-50',   bg: 'bg-white',       text: 'text-slate-900' },
  'default':     { grad: 'from-amber-500 to-yellow-500',   btn: 'bg-amber-600 hover:bg-amber-700',   outline: 'border-amber-400 text-amber-700 hover:bg-amber-50',   bg: 'bg-white',       text: 'text-slate-900' },
};

const PHONE = '7668570551';
const INTL_PHONE = '917668570551';

export default function InlineCTA({
  theme = 'default',
  headline = 'Ready to Book?',
  sub = 'Call Triveni Cabs — ₹11/km Sedan, 4.9★ rated, 24/7 booking.',
  context = 'inline_cta',
  waMessage = 'Hi Triveni Cabs, I want to book a cab.',
  variant = 'full',           // 'full' | 'compact' | 'banner'
  showPrice = true,
  priceFrom = '₹11/km',
  className = '',
}) {
  const t = THEME[theme] || THEME.default;
  const ref = useRef(null);

  // Fire cta_viewed once when this card enters the viewport.
  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            trackCtaImpression(`inline_cta_${theme}`, context);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [theme, context]);

  const onCall = useCallback(() => {
    trackPhoneCall(`inline_cta_${context}`, PHONE);
  }, [context]);

  const onWhatsApp = useCallback((e) => {
    const token = trackWhatsAppClick(`inline_cta_${context}`, waMessage, context);
    if (token && e?.currentTarget) {
      const base = `https://wa.me/${INTL_PHONE}?text=${encodeURIComponent(waMessage)}`;
      e.currentTarget.href = appendTrackingToken(base, token);
    }
  }, [waMessage, context]);

  const isDark = t.bg.includes('slate-9') || t.bg.includes('stone-9');
  const subText = isDark ? 'text-slate-300' : 'text-slate-600';

  if (variant === 'compact') {
    return (
      <div
        ref={ref}
        className={`inline-cta-compact flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4 ${t.bg} ${t.text} ${className}`}
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <meta itemProp="name" content="Triveni Cabs" />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-base">{headline}</p>
          <p className={`text-sm ${subText}`}>{sub}</p>
        </div>
        <div className="flex gap-2">
          <a href={`tel:+91${PHONE}`} onClick={onCall} className={`px-4 py-2 rounded-lg text-white font-bold text-sm bg-gradient-to-r ${t.grad} shadow-sm`} itemProp="telephone">
            Call {PHONE}
          </a>
          <a href={`https://wa.me/${INTL_PHONE}?text=${encodeURIComponent(waMessage)}`} onClick={onWhatsApp} target="_blank" rel="noopener" className={`px-4 py-2 rounded-lg font-bold text-sm border-2 ${t.outline}`}>
            WhatsApp
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div
        ref={ref}
        className={`inline-cta-banner rounded-2xl p-5 md:p-6 text-white bg-gradient-to-r ${t.grad} shadow-lg ${className}`}
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <meta itemProp="name" content="Triveni Cabs" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="font-extrabold text-xl md:text-2xl leading-tight">{headline}</p>
            <p className="opacity-90 text-sm md:text-base mt-1">{sub}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:+91${PHONE}`} onClick={onCall} className="px-5 py-3 rounded-xl bg-white text-slate-900 font-extrabold shadow hover:shadow-lg transition" itemProp="telephone">
              📞 {PHONE}
            </a>
            <a href={`https://wa.me/${INTL_PHONE}?text=${encodeURIComponent(waMessage)}`} onClick={onWhatsApp} target="_blank" rel="noopener" className="px-5 py-3 rounded-xl bg-slate-900/20 backdrop-blur text-white font-extrabold border-2 border-white/40 hover:bg-slate-900/30 transition">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  }

  // FULL variant — most visually rich; use mid-content on long pages.
  return (
    <section
      ref={ref}
      className={`inline-cta relative overflow-hidden rounded-3xl border shadow-md p-6 md:p-10 my-8 ${t.bg} ${t.text} ${className}`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
      aria-label="Book a cab with Triveni Cabs"
    >
      <meta itemProp="name" content="Triveni Cabs" />
      <meta itemProp="priceRange" content="₹₹" />
      <meta itemProp="telephone" content={`+91-${PHONE}`} />
      <meta itemProp="url" content="https://www.trivenicabs.in" />
      {/* Decorative soft gradient orb for visual variety vs other categories */}
      <div className={`absolute -top-16 -right-16 w-60 h-60 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${t.grad}`} aria-hidden="true" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-3">
          <p className="text-xs font-bold tracking-widest uppercase opacity-60 mb-2">
            Triveni Cabs · India's Trusted Taxi
          </p>
          <h2 className="text-2xl md:text-3xl font-black leading-tight mb-2">
            {headline}
          </h2>
          <p className={`text-base md:text-lg ${subText} max-w-xl`}>
            {sub}
          </p>
          {showPrice && (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className={`px-2.5 py-1 rounded-full border ${isDark ? 'border-white/20 text-white/80' : 'border-slate-300 text-slate-600'}`}>From {priceFrom}</span>
              <span className={`px-2.5 py-1 rounded-full border ${isDark ? 'border-white/20 text-white/80' : 'border-slate-300 text-slate-600'}`}>24×7</span>
              <span className={`px-2.5 py-1 rounded-full border ${isDark ? 'border-white/20 text-white/80' : 'border-slate-300 text-slate-600'}`}>4.9★ Rated</span>
              <span className={`px-2.5 py-1 rounded-full border ${isDark ? 'border-white/20 text-white/80' : 'border-slate-300 text-slate-600'}`}>No Hidden Fees</span>
            </div>
          )}
        </div>
        <div className="md:col-span-2 flex flex-col gap-3">
          <a
            href={`tel:+91${PHONE}`}
            onClick={onCall}
            className={`text-center px-5 py-4 rounded-xl text-white font-extrabold text-base md:text-lg shadow-lg bg-gradient-to-r ${t.grad} hover:shadow-xl hover:scale-[1.02] transition`}
            itemProp="telephone"
          >
            📞 Call {PHONE}
          </a>
          <a
            href={`https://wa.me/${INTL_PHONE}?text=${encodeURIComponent(waMessage)}`}
            onClick={onWhatsApp}
            target="_blank"
            rel="noopener"
            className={`text-center px-5 py-4 rounded-xl font-extrabold text-base md:text-lg border-2 ${t.outline} transition hover:scale-[1.02]`}
          >
            WhatsApp Instant Quote
          </a>
        </div>
      </div>
    </section>
  );
}
