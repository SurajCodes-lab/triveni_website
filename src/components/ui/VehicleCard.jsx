// src/components/ui/VehicleCard.jsx
//
// Premium, mobile-first vehicle card for the Aurora design language.
// - Product image uses object-contain (never crops the vehicle).
// - Gradient hairline border on hover, gold glow on the popular pick.
// - Fully legible & tappable down to 300px.
//
// Props: name, image, seats, priceLabel ('One Way'/'Round Trip'), price,
//        ratePerKm?, features?[], popular?, badge?, tone ('light'|'dark'),
//        ctaLabel, ctaHref?, onCta?

'use client';

import Image from 'next/image';
import { Users, Snowflake, Star, ArrowRight } from '@/components/ui/icons';

export default function VehicleCard({
  name,
  image,
  seats,
  priceLabel = 'One Way',
  price,
  ratePerKm,
  features = [],
  popular = false,
  badge,
  tone = 'light',
  ctaLabel = 'Book Now',
  ctaHref,
  onCta,
  className = '',
}) {
  const dark = tone === 'dark';
  const CTA = ctaHref ? 'a' : 'button';
  const ctaProps = ctaHref ? { href: ctaHref } : { type: 'button', onClick: onCta };

  return (
    <div
      className={`group border-gradient-gold relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
        dark ? 'glass-dark' : 'bg-white border border-slate-200 shadow-sm hover:shadow-xl'
      } ${popular ? 'glow-gold' : ''} ${className}`}
    >
      {/* Badge */}
      {(popular || badge) && (
        <div className="absolute left-3 top-3 z-20">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-wide text-slate-900 shadow">
            {popular && <Star className="h-3 w-3" fill="currentColor" />}
            {badge || 'Popular'}
          </span>
        </div>
      )}

      {/* Image — object-contain so the whole vehicle shows, never cropped */}
      <div className={`relative h-40 sm:h-44 w-full ${dark ? 'bg-white/[0.04]' : 'bg-gradient-to-br from-slate-50 to-slate-100'}`}>
        {image && (
          <Image
            src={image}
            alt={`${name} — Triveni Cabs`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className={`text-base sm:text-lg font-black leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>{name}</h3>
          <span className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
            <Star className="h-3 w-3" fill="currentColor" /> 4.9
          </span>
        </div>

        {/* Meta */}
        <div className={`mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
          {seats && (
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" /> {seats} Seats
            </span>
          )}
          <span className="inline-flex items-center gap-1">
            <Snowflake className="h-3.5 w-3.5" /> AC
          </span>
          {ratePerKm && <span className="font-semibold text-amber-600">{ratePerKm}</span>}
        </div>

        {/* Features chips */}
        {features.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {features.slice(0, 4).map((f, i) => (
              <span
                key={i}
                className={`rounded-lg px-2 py-0.5 text-[0.7rem] font-medium ${
                  dark ? 'bg-white/5 text-slate-300' : 'bg-slate-50 text-slate-600 ring-1 ring-slate-100'
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Price + CTA */}
        <div className="mt-auto">
          <div className={`mb-3 rounded-2xl p-3 ${dark ? 'bg-white/[0.04]' : 'bg-slate-50'}`}>
            <p className={`text-[0.7rem] uppercase tracking-wide ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{priceLabel}</p>
            <p className={`text-2xl sm:text-3xl font-black ${dark ? 'text-white' : 'text-slate-900'}`}>{price}</p>
          </div>
          <CTA
            {...ctaProps}
            className="sheen flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800 active:scale-[0.98]"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </CTA>
        </div>
      </div>
    </div>
  );
}
