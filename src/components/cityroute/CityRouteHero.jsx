// src/components/cityroute/CityRouteHero.jsx
//
// Premium "Aurora" hero for the city-route page (/[cityName]). Replaces the
// older busy hero. Mobile-first (looks great at 300px), aurora glow + grain,
// gradient headline, route motif, glass price card, dual CTA.
//
// Props: from, to, distance, time, startingPrice, tripType, onToggleTrip,
//        onWhatsApp (fn), phone (str), rating, reviewCount

'use client';

import { Phone, Star, Clock, MapPin, ShieldCheck, ArrowRight } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import RouteLine from '@/components/ui/RouteLine';
import { groupDigits } from '@/utilis/pricing';

export default function CityRouteHero({
  from,
  to,
  distance,
  time,
  startingPrice,
  tripType = 'oneWay',
  onToggleTrip,
  onWhatsApp,
  phone = '7668570551',
  rating = '4.9',
  reviewCount,
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-16 lg:pt-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left: copy */}
          <div className="min-w-0">
            {/* trust chip */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs text-white/80">
              <Star className="h-3.5 w-3.5 text-amber-400" fill="currentColor" />
              <span className="font-semibold">{rating}</span>
              {reviewCount ? <span className="text-white/50">· {reviewCount} riders</span> : null}
              <span className="mx-1 h-3 w-px bg-white/20" />
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-white/60">Verified drivers</span>
            </div>

            {/* headline */}
            <h1 className="text-balance text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-gradient-gold">{from}</span> to <span className="text-gradient-gold">{to}</span>
              <span className="mt-1 block text-lg font-bold text-white/70 sm:text-2xl">Taxi &amp; Cab Service</span>
            </h1>

            {/* route line */}
            <div className="mt-5 max-w-md rounded-2xl glass-dark px-4 py-3">
              <RouteLine from={from} to={to} tone="dark" />
              <div className="mt-2 flex items-center gap-4 text-xs text-white/60">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-amber-400" /> {distance}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-amber-400" /> {time}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onWhatsApp}
                className="sheen glow-gold flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Book on WhatsApp
              </button>
              <a
                href={`tel:+91${phone}`}
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Call {phone}
              </a>
            </div>
          </div>

          {/* Right: price card */}
          <div className="relative">
            <div className="border-gradient-gold group relative overflow-hidden rounded-3xl glass-dark p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Fixed all-inclusive fare</p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-5xl font-black text-white sm:text-6xl">₹{groupDigits(startingPrice)}</span>
                <span className="mb-2 text-sm text-white/50">
                  /{tripType === 'roundTrip' ? 'round trip' : 'one way'}
                </span>
              </div>
              <p className="mt-1 text-xs text-white/50">Fuel · driver · tolls · GST included</p>

              {/* trip toggle */}
              <div className="mt-5 grid grid-cols-2 gap-1 rounded-xl bg-white/5 p-1">
                {[
                  { k: 'oneWay', label: 'One Way' },
                  { k: 'roundTrip', label: 'Round Trip' },
                ].map((t) => (
                  <button
                    key={t.k}
                    type="button"
                    onClick={() => onToggleTrip?.(t.k)}
                    className={`rounded-lg py-2 text-sm font-bold transition-all ${
                      tripType === t.k ? 'bg-amber-400 text-slate-900 shadow' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={onWhatsApp}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-slate-900 transition-colors hover:bg-amber-50"
              >
                Get Instant Quote <ArrowRight className="h-4 w-4" />
              </button>

              {/* mini trust row */}
              <div className="mt-4 flex items-center justify-between text-[0.7rem] text-white/50">
                <span>✓ No advance</span>
                <span>✓ Free cancellation</span>
                <span>✓ 24×7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
