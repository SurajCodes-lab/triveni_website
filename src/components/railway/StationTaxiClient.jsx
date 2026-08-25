'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2,
  ArrowRight, ChevronDown, Route, Navigation, TrainFront, BadgeCheck, Sparkles,
  MapPinned, Zap, IndianRupee
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { getCityImage, getVehicleImage, getCityGallery, getAttractionImage, getCityImageByIndex } from '@/utilis/imageUtils';
import StickyPriceBar from '@/components/shared/StickyPriceBar';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import {
  getStationDetails, getArrivalTips, getTaxiComparison, getOutstationFromCity,
  getStationReviews, getCityThingsToDo, getExtendedStationFaqs, getWhyPreBookReasons,
  STATION_TAXI_INCLUSIONS, STATION_TAXI_EXCLUSIONS, STATION_CANCELLATION_POLICY,
} from '@/utilis/stationTaxiEnrichment';

// ─── Ultra-Premium v2 vocabulary ────────────────────────────────────────────
const FOIL =
  'text-gold-foil bg-gradient-to-br from-[#FFE9A0] via-[#FACF2D] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(250,207,45,0.35)]';
const GOLD_BTN =
  'sheen inline-flex items-center justify-center gap-2 rounded-full bg-[#FACF2D] font-black text-slate-950 shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 active:translate-y-0 active:scale-[0.98]';
const GHOST_BTN =
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10';
const CTA_SIZE = 'w-full px-7 py-4 text-sm lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';
const GLASS = 'bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10';

// Deterministic ticket-barcode heights (no Math.random → stable hydration)
const BARCODE = [14, 20, 12, 18, 22, 15, 19, 13, 21, 16, 14, 20, 18, 12, 22, 17, 15, 19, 14, 21, 13, 18, 16, 20, 12, 19, 22, 15, 17, 14, 20, 13, 18, 21, 16, 12, 19, 15, 22, 17];

// One serif heading rhythm for the page — dark and warm-light tones
function SerifHeading({ eyebrow, icon: EyebrowIcon, title, highlight, after, subtitle, tone = 'dark', center = true }) {
  const dark = tone === 'dark';
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} mb-12 max-w-3xl md:mb-16`}>
      {eyebrow && (
        <span className={`mb-4 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] sm:text-xs ${dark ? 'text-amber-300' : 'text-amber-600'}`}>
          <span className={`h-px w-7 ${dark ? 'bg-amber-400/60' : 'bg-amber-500/60'}`} />
          {EyebrowIcon && <EyebrowIcon className="h-3.5 w-3.5" />}
          {eyebrow}
          <span className={`h-px w-7 ${dark ? 'bg-amber-400/60' : 'bg-amber-500/60'}`} />
        </span>
      )}
      <h2 className={`font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title} {highlight && <span className={FOIL}>{highlight}</span>}{after ? <> {after}</> : null}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base ${dark ? 'text-slate-300/80' : 'text-slate-600'}`}>{subtitle}</p>
      )}
    </div>
  );
}

// Map string icon names to components (since icons can't be serialized from server)
const iconMap = { MapPinned, Shield, Clock, Navigation, BadgeCheck, Sparkles, MapPin, Star, Zap, Phone, Car, Users, CheckCircle2, Route };
function resolveIcon(icon) {
  if (typeof icon === 'string') return iconMap[icon] || MapPin;
  return icon || MapPin;
}

export default function StationTaxiClient({ data }) {
  const [openFaq, setOpenFaq] = useState(null);
  const {
    stationName, stationCode, city, platforms, description,
    destinations, localPackages, vehicles, benefits, faqs,
    slug, cabWaitingPoint, majorTrains
  } = data;

  const cheapest = destinations.reduce((m, d) => Math.min(m, d.fare), Infinity);
  const whatsappMsg = `Hi, I need a taxi from ${stationName} (${stationCode}). Please share rates.`;

  // Derived enrichment — custom data-override-first, then programmatic defaults
  const stationDetails = data.stationDetails || getStationDetails(slug.replace('-station-taxi', '').replace('-station', ''));
  const arrivalTips = data.arrivalTips || getArrivalTips();
  const comparison = data.taxiComparison || getTaxiComparison(stationName);
  const outstationOptions = data.outstationOptions || getOutstationFromCity(city);
  const reviews = data.reviews || getStationReviews(stationName, cheapest);
  const thingsToDo = data.thingsToDoInCity || getCityThingsToDo(city);
  const extendedFaqs = data.extendedFaqs || getExtendedStationFaqs(stationName, stationCode, city);
  const whyPreBook = data.whyPreBook || getWhyPreBookReasons(stationName);
  const inclusions = data.inclusions || STATION_TAXI_INCLUSIONS;
  const exclusions = data.exclusions || STATION_TAXI_EXCLUSIONS;
  const allFaqs = [...faqs, ...extendedFaqs];
  const cityBgImage = getCityImageByIndex(city, 0);       // Hero uses the main hero image
  const cityGuideImage = getCityImageByIndex(city, 1);    // Things-to-Do left panel uses a DIFFERENT image
  const cityBannerImage = getCityImageByIndex(city, 2);   // Final CTA banner uses yet another
  const cityGallery = getCityGallery(city);

  return (
    <article className="min-h-screen bg-slate-950" itemScope itemType="https://schema.org/TaxiService">
      <StickyPriceBar
        title={`${stationName} Taxi`}
        price={`₹${cheapest}`}
        whatsappMessage={whatsappMsg}
      />
      <SetStickyCta
        price={`₹${cheapest}`}
        label={`${stationName} Taxi`}
        whatsappText={whatsappMsg}
      />

      {/* ====== HERO — visible city photo, scrim on the text side only ====== */}
      <section className="relative flex min-h-[88vh] flex-col justify-end overflow-hidden">
        <Image
          src={cityBgImage}
          alt={`${city} — ${stationName} station taxi destination`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Layered scrim — text side dark, photo stays visible on the right */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-slate-950/80 via-slate-950/25 to-transparent lg:w-3/4" />
        {/* Gold foil lane strip — brand motif */}
        <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              {/* Station route-board seal — honest data: code + platforms */}
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-slate-950/60 py-2 pl-2 pr-5 backdrop-blur-md">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#FACF2D]/70 bg-amber-400/15">
                  <TrainFront className="h-4 w-4 text-[#FACF2D]" />
                </span>
                <span className="text-left">
                  <span className="block font-mono text-[11px] font-black tracking-[0.22em] text-amber-200">{stationCode} STATION · {platforms} PLATFORMS</span>
                  <span className="block text-[10px] text-white/55">Driver meets you at the platform exit, 24/7</span>
                </span>
              </div>

              <h1 className="font-display-serif text-balance text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {stationName}
                <span className={`block ${FOIL}`}>Taxi Service</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">{description}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link onClick={() => trackPhoneCall('station_taxi')} href="tel:+917668570551" className={`${GOLD_BTN} ${CTA_SIZE}`}>
                  <Phone className="h-4 w-4" /> Call: 7668570551
                </Link>
                <Link onClick={() => trackWhatsAppClick('station_taxi')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className={`${GHOST_BTN} ${CTA_SIZE}`}>
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp Booking
                </Link>
              </div>

              {/* Quick Enquiry Form */}
              <div className="mt-8">
                <QuickEnquiryForm fromCity={stationName} toCity={city} pageType="station_taxi" />
              </div>
            </div>

            {/* Station Ticket Card — glass on dark */}
            <div className="lg:col-span-2">
              <div className="border-gradient-gold relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-amber-400/25 bg-gradient-to-r from-amber-400/15 via-amber-300/5 to-transparent px-6 py-4">
                  <div className="flex items-center gap-2.5">
                    <TrainFront className="h-5 w-5 text-[#FACF2D]" />
                    <span className="font-mono text-sm font-black tracking-widest text-amber-100">STATION INFO</span>
                  </div>
                  <span className="font-mono text-xs text-white/50">TRIVENI CABS</span>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-center">
                    <div className="mb-1 font-mono text-xs tracking-widest text-amber-300/80">STATION</div>
                    <div className="font-display-serif text-xl font-black leading-tight text-white">{stationName}</div>
                  </div>
                  <div className="-mx-6 my-4 flex items-center">
                    <div className="h-10 w-5 rounded-r-full bg-slate-950" />
                    <div className="mx-2 flex-1 border-t-2 border-dashed border-white/10" />
                    <div className="h-10 w-5 rounded-l-full bg-slate-950" />
                  </div>
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="mb-1 font-mono text-[10px] tracking-widest text-white/45">CODE</div>
                      <div className="font-mono text-2xl font-black text-[#FACF2D]">{stationCode}</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-1 font-mono text-[10px] tracking-widest text-white/45">PLATFORMS</div>
                      <div className="font-mono text-2xl font-black text-[#FACF2D]">{platforms}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-amber-400/15 bg-amber-400/10 py-3 text-center">
                      <div className="mb-1 font-mono text-[10px] tracking-widest text-white/45">FARE FROM</div>
                      <div className="font-display-serif text-xl font-black text-white">{'₹'}{cheapest}</div>
                    </div>
                    <div className="rounded-xl border border-amber-400/15 bg-amber-400/10 py-3 text-center">
                      <div className="mb-1 font-mono text-[10px] tracking-widest text-white/45">STATUS</div>
                      <div className="flex items-center justify-center gap-1.5 text-sm font-black text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />24/7 LIVE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-[2px] px-6 pb-4" aria-hidden>
                  {BARCODE.map((h, i) => (
                    <div key={i} className="w-[2px] rounded-full bg-white/15" style={{ height: `${h}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialProofStrip theme="dark" />

      {/* Freshness signal — visible "Last updated" */}
      <div className="border-y border-amber-400/10 bg-gradient-to-r from-slate-950 via-amber-950/20 to-slate-950 px-4 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 text-xs text-slate-400">
          <Clock className="h-3.5 w-3.5 text-amber-400" />
          <span>Fares and pickup info last verified <span className="font-semibold text-amber-300">April 17, 2026</span></span>
          <span className="hidden text-slate-600 sm:inline">·</span>
          <span className="hidden sm:inline">Station driver roster updated every 72 hours</span>
        </div>
      </div>

      {/* ====== TRUST BAR ====== */}
      <section className="border-b border-white/5 px-4 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {[
            { icon: TrainFront, title: 'Meet at Platform', desc: 'Driver waits at exit' },
            { icon: Shield, title: 'Fixed Fares', desc: 'Zero surge pricing' },
            { icon: Clock, title: '24/7 Available', desc: 'Any train, any time' },
            { icon: Star, title: '4.9 Rating', desc: 'Trusted by thousands' },
          ].map((item, i) => (
            <div key={i} className="group flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#FACF2D]/40 bg-gradient-to-br from-amber-400/20 via-transparent to-transparent transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-5 w-5 text-[#FACF2D]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{item.title}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== POPULAR DESTINATIONS — dark band ====== */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(250,207,45,0.05),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl">
          <SerifHeading
            eyebrow="Popular Routes"
            icon={Route}
            title={`Where can a taxi from ${stationName}`}
            highlight="drop me?"
            subtitle="Fixed fares. AC vehicles. Meet at platform exit with name board."
            tone="dark"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest, i) => (
              <div key={i} className={`group relative overflow-hidden ${GLASS} transition-all duration-500 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10`}>
                <div className="h-1 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" />
                <div className="p-5">
                  <div className="mb-1 flex items-center justify-between">
                    <div className="font-mono text-[10px] tracking-widest text-slate-500">{stationCode} &rarr;</div>
                    <ArrowRight className="h-4 w-4 text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400" />
                  </div>
                  <h3 className="font-display-serif mb-3 text-lg font-black text-white">{dest.name}</h3>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-400"><Route className="h-3.5 w-3.5 text-slate-600" /> {dest.distance}</div>
                  </div>
                  <div className="-mx-5 my-4 flex items-center">
                    <div className="h-7 w-4 rounded-r-full bg-slate-950" />
                    <div className="mx-1 flex-1 border-t-2 border-dashed border-white/10" />
                    <div className="h-7 w-4 rounded-l-full bg-slate-950" />
                  </div>
                  <div className="mb-1 flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-slate-500">FARE</div>
                      <div className={`font-display-serif text-xl font-black ${FOIL}`}>{'₹'}{dest.fare.toLocaleString('en-IN')}</div>
                    </div>
                    <Link onClick={() => trackPhoneCall('station_taxi')} href="tel:+917668570551" className={`${GOLD_BTN} px-5 py-2.5 text-sm lg:px-5 lg:py-2 lg:text-[13px]`}>
                      <Phone className="h-3.5 w-3.5" /> Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LOCAL SIGHTSEEING PACKAGES — warm-light band ====== */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SerifHeading
            eyebrow="Local Packages"
            icon={Sparkles}
            title={`Which ${city}`}
            highlight="sightseeing packages"
            after="can I book from the station?"
            subtitle="Pre-booked local taxi for hassle-free sightseeing from the station"
            tone="light"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {localPackages.map((pkg, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl border bg-white shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] transition-all duration-500 hover:shadow-[0_20px_60px_-28px_rgba(180,130,10,0.6)] ${i === 1 ? 'border-amber-400 ring-1 ring-amber-300/60' : 'border-amber-200'}`}>
                {i === 1 && <div className="absolute right-4 top-4"><span className="rounded-full bg-[#FACF2D] px-3 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-slate-950">Popular</span></div>}
                <div className="h-1 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" />
                <div className="p-7">
                  <h3 className="font-display-serif mb-2 text-xl font-black text-slate-900">{pkg.name}</h3>
                  <p className="mb-6 text-sm text-slate-500">{pkg.coverage}</p>
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                      <div className="mb-1 font-mono text-[10px] tracking-widest text-slate-500">SEDAN</div>
                      <div className="font-display-serif text-2xl font-black text-slate-900">{'₹'}{pkg.sedan.toLocaleString('en-IN')}</div>
                    </div>
                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                      <div className="mb-1 font-mono text-[10px] tracking-widest text-slate-500">SUV</div>
                      <div className="font-display-serif text-2xl font-black text-slate-900">{'₹'}{pkg.suv.toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                  <div className="mb-6 space-y-2">
                    {['Station pickup with name board', 'AC vehicle, GPS tracked', 'Fuel & driver included'].map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-slate-600"><CheckCircle2 className="h-3.5 w-3.5 text-amber-500" /> {f}</div>
                    ))}
                  </div>
                  <a href="tel:+917668570551" className={`${GOLD_BTN} w-full px-7 py-3.5 text-sm lg:px-5 lg:py-2 lg:text-[13px]`}>
                    <Phone className="h-4 w-4" /> Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== VEHICLE OPTIONS — dark band with real vehicle imagery ====== */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/15 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <SerifHeading
            eyebrow="Vehicle Fleet"
            icon={Car}
            title="Which"
            highlight="vehicle"
            after={`should I book from ${stationName}?`}
            subtitle="All AC. All under 4 years old. All GPS-tracked. All driver-verified."
            tone="dark"
          />
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {vehicles.map((v, i) => {
              const vehicleImg = getVehicleImage(v.type.toLowerCase());
              const badge = i === 1 ? 'MOST POPULAR' : null;
              const perks = v.type.toLowerCase().includes('sedan') ? ['Powerful AC cabin', '2 large + 1 cabin bag', '4 seatbelts']
                : v.type.toLowerCase().includes('tempo') ? ['AC cabin, pushback seats', 'Huge boot for 12-17 bags', 'Seatbelts on all seats']
                : ['Premium AC climate', '4 large + 2 cabin bags', 'Captain seats + boot'];
              return (
                <div key={i} className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${badge ? 'border-[#FACF2D]/50 shadow-2xl shadow-amber-500/20' : 'border-white/10 hover:border-amber-400/40'}`}>
                  {badge && (
                    <div className="absolute right-4 top-4 z-10">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#FACF2D] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-500/40">
                        <Star className="h-3 w-3 fill-slate-950" /> {badge}
                      </span>
                    </div>
                  )}
                  {/* Vehicle image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 md:h-52">
                    <div style={{ background: 'radial-gradient(ellipse at center, rgba(250,207,45,0.14) 0%, transparent 70%)' }} className="absolute inset-0" />
                    <Image
                      src={vehicleImg}
                      alt={`${v.type} for ${stationName} taxi — ${v.examples}`}
                      fill
                      className="object-contain p-4 drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={90}
                    />
                    <div className="absolute bottom-2 left-1/2 h-2 w-3/4 -translate-x-1/2 rounded-full bg-black/40 blur-xl" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-1 flex items-start justify-between gap-3">
                      <h3 className="font-display-serif text-xl font-black text-white md:text-2xl">{v.type}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/25 bg-amber-400/15 px-2.5 py-1 text-[11px] font-bold text-amber-200">
                        <Users className="h-3 w-3" /> {v.capacity.replace(' Passengers', '')}
                      </span>
                    </div>
                    <p className="mb-4 text-sm text-white/45">{v.examples}</p>
                    <ul className="mb-5 space-y-1.5">
                      {perks.map((p, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-white/55">
                          <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-[#FACF2D]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto grid grid-cols-2 gap-2">
                      <Link onClick={() => trackPhoneCall('station_taxi')} href="tel:+917668570551" className={`${GOLD_BTN} px-4 py-3 text-sm lg:px-5 lg:py-2 lg:text-[13px]`}>
                        <Phone className="h-4 w-4" /> Book
                      </Link>
                      <Link onClick={() => trackWhatsAppClick('station_taxi')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`I want ${v.type} from ${stationName}`)}`} className={`${GHOST_BTN} px-4 py-3 text-sm lg:px-5 lg:py-2 lg:text-[13px]`}>
                        WhatsApp
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== TAXI COMPARISON — us vs prepaid / auto / app ====== */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="relative mx-auto max-w-6xl">
          <SerifHeading
            eyebrow="Compare Options"
            icon={Shield}
            title="Pre-booked Cab vs"
            highlight="Prepaid / Auto / App"
            subtitle={`Why thousands of travellers switch away from prepaid booth and ride-hailing apps at ${stationName}.`}
            tone="dark"
          />

          {/* Mobile — stacked label/value cards */}
          <div className="space-y-4 md:hidden">
            {comparison.map((c, i) => (
              <div key={i} className={`${GLASS} p-5 ${c.badge ? 'border-emerald-500/30 bg-emerald-500/5' : ''}`}>
                <div className="mb-3 flex items-center gap-2">
                  {c.badge && <span className="rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 text-[10px] font-black text-emerald-300">{c.badge}</span>}
                  <span className="font-display-serif text-base font-black text-white">{c.mode}</span>
                </div>
                <dl className="space-y-2 text-xs">
                  <div className="flex justify-between gap-3 border-b border-white/5 pb-2">
                    <dt className="font-mono uppercase tracking-widest text-white/40">Price</dt>
                    <dd className="text-right font-bold text-amber-300">{c.price}</dd>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-white/5 pb-2">
                    <dt className="font-mono uppercase tracking-widest text-white/40">Wait</dt>
                    <dd className="text-right text-white/70">{c.wait}</dd>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-white/5 pb-2">
                    <dt className="font-mono uppercase tracking-widest text-white/40">Vehicle</dt>
                    <dd className="text-right text-white/60">{c.vehicle}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-mono uppercase tracking-widest text-white/40">Best for</dt>
                    <dd className="text-right text-white/60">{c.cons || c.pros}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          {/* Desktop — full table, no horizontal scroll wrapper */}
          <div className={`hidden overflow-hidden md:block ${GLASS}`}>
            <table className="w-full text-sm">
              <thead className="border-b border-amber-400/20 bg-amber-400/10">
                <tr>
                  <th className="p-5 text-left text-xs font-bold uppercase tracking-wider text-amber-200">Mode</th>
                  <th className="p-5 text-left text-xs font-bold uppercase tracking-wider text-amber-200">Price</th>
                  <th className="p-5 text-left text-xs font-bold uppercase tracking-wider text-amber-200">Wait</th>
                  <th className="p-5 text-left text-xs font-bold uppercase tracking-wider text-amber-200">Vehicle</th>
                  <th className="p-5 text-left text-xs font-bold uppercase tracking-wider text-amber-200">Best For / Caveat</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c, i) => (
                  <tr key={i} className={`border-b border-white/5 transition-colors hover:bg-white/[0.04] ${c.badge ? 'bg-emerald-500/5' : ''}`}>
                    <td className="p-5 font-bold text-white">
                      {c.badge && <span className="mr-2 inline-block rounded-full border border-emerald-500/30 bg-emerald-500/20 px-2 py-0.5 text-[10px] font-black text-emerald-300">{c.badge}</span>}
                      {c.mode}
                    </td>
                    <td className="p-5 text-xs font-bold text-amber-300">{c.price}</td>
                    <td className="p-5 text-xs text-white/70">{c.wait}</td>
                    <td className="p-5 text-xs leading-relaxed text-white/60">{c.vehicle}</td>
                    <td className="p-5 text-xs leading-relaxed text-white/60">{c.cons || c.pros}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ====== ARRIVAL TIPS — warm-light band ====== */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SerifHeading
            eyebrow="Arrival Tips"
            icon={Clock}
            title="What pickup tips apply by"
            highlight="train type and arrival time?"
            subtitle={`Different trains, different logistics. We’ve run ${stationName} pickup so many times we wrote it down.`}
            tone="light"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {arrivalTips.map((a, i) => (
              <div key={i} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] transition-all duration-300 hover:border-amber-300">
                <h3 className="font-display-serif mb-2 flex items-center gap-2 text-base font-black text-slate-900">
                  <TrainFront className="h-4 w-4 text-amber-500" /> {a.scenario}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{a.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== THINGS TO DO IN CITY — dark band with photos ====== */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <SerifHeading
            eyebrow="After You Arrive"
            icon={MapPin}
            title={`What can you do in ${city}`}
            highlight="after you arrive?"
            subtitle="Driver-curated shortlist. Our taxi can convert into a half-day sightseeing package on request."
            tone="dark"
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="group relative h-72 min-h-[360px] overflow-hidden rounded-3xl lg:col-span-1 lg:row-span-2 lg:h-full">
              <Image src={cityGuideImage} alt={`${city} sightseeing`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 33vw" quality={85} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/20 px-3 py-1.5 text-xs font-bold text-amber-100 backdrop-blur-sm">
                  <MapPinned className="h-3 w-3" /> {city} Guide
                </span>
                <h3 className="font-display-serif mb-2 text-3xl font-black text-white md:text-4xl">{city}</h3>
                <p className="text-sm text-white/70">Covered by our local drivers daily.</p>
              </div>
            </div>
            {thingsToDo.slice(0, 4).map((item, i) => {
              // Each activity card gets its own specific attraction image (e.g., Taj Mahal, Agra Fort)
              const activityImage = getAttractionImage(item.title, city);
              return (
                <div key={i} className={`group overflow-hidden ${GLASS} transition-all duration-300 hover:border-amber-400/40`}>
                  {/* Dedicated activity image — varies per card */}
                  <div className="relative h-40 overflow-hidden">
                    <Image src={activityImage} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" quality={80} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    {item.time && <span className="absolute right-3 top-3 rounded-full border border-amber-400/30 bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur-sm">{item.time}</span>}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-amber-400/40 bg-amber-400/25 text-sm font-black text-amber-100 backdrop-blur-sm">{i + 1}</span>
                        <h3 className="font-display-serif text-base font-black text-white drop-shadow-lg">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <p className="p-5 text-sm leading-relaxed text-white/55">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== OUTSTATION FROM STATION ====== */}
      {outstationOptions.length > 0 && (
        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SerifHeading
              eyebrow="Onward Journey"
              icon={Route}
              title="Can I travel outstation directly from"
              highlight={`${stationName}?`}
              subtitle="Arriving here but going elsewhere? We can drop you intercity directly from the station."
              tone="dark"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {outstationOptions.map((o, i) => (
                <div key={i} className={`group ${GLASS} p-5 transition-all duration-300 hover:border-amber-400/40`}>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-mono text-xs text-white/40">{stationCode}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-amber-400/30 to-transparent" />
                    <ArrowRight className="h-4 w-4 text-amber-400/70 transition-transform group-hover:translate-x-0.5" />
                    <span className="text-sm font-bold text-white">{o.dest}</span>
                  </div>
                  <div className="mb-3 flex items-center justify-between text-xs text-white/50">
                    <span>{o.distance}</span>
                    <span>{o.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/40">From</span>
                    <span className={`font-display-serif text-lg font-black ${FOIL}`}>{o.fare}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== INCLUSIONS / EXCLUSIONS — warm-light band ====== */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SerifHeading
            eyebrow="What’s Included"
            icon={CheckCircle2}
            title="What is included in the"
            highlight={`${stationName} taxi fare?`}
            tone="light"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-white p-7 shadow-[0_16px_50px_-30px_rgba(16,120,60,0.35)]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-300 bg-emerald-50"><CheckCircle2 className="h-5 w-5 text-emerald-600" /></div>
                <h3 className="font-display-serif text-xl font-black text-slate-900">Included in Fare</h3>
              </div>
              <ul className="space-y-3">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-orange-200 bg-white p-7 shadow-[0_16px_50px_-30px_rgba(200,110,20,0.35)]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-300 bg-orange-50"><IndianRupee className="h-5 w-5 text-orange-600" /></div>
                <h3 className="font-display-serif text-xl font-black text-slate-900">Extra (Paid at Actual)</h3>
              </div>
              <ul className="space-y-3">
                {exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CUSTOMER REVIEWS — dark band ====== */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SerifHeading
            eyebrow="Reviews"
            icon={Star}
            title={`What do ${stationName} passengers`}
            highlight="say about us?"
            tone="dark"
          />
          <div className="mb-10 -mt-6 flex items-center justify-center gap-2 md:-mt-10">
            {[...Array(5)].map((_, i) => (<Star key={i} className="h-5 w-5 fill-[#FACF2D] text-[#FACF2D]" />))}
            <span className="ml-2 font-bold text-white/70">4.9 / 5</span>
            <span className="text-sm text-white/40">({reviews.length}+ recent reviews for this station)</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className={`${GLASS} p-6 transition-all duration-300 hover:border-amber-400/40`}>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FACF2D]/60 bg-gradient-to-br from-amber-400/30 to-transparent text-sm font-black text-amber-100">{r.name.charAt(0)}</div>
                    <div>
                      <p className="text-sm font-bold text-white">{r.name}</p>
                      <p className="text-[11px] text-white/40">{r.date} · {r.vehicle}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(r.rating)].map((_, s) => (<Star key={s} className="h-3.5 w-3.5 fill-[#FACF2D] text-[#FACF2D]" />))}
                  </div>
                </div>
                <p className="text-sm italic leading-relaxed text-white/60">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CANCELLATION POLICY — warm-light band ====== */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SerifHeading
            eyebrow="Flexible Cancellation"
            icon={Clock}
            title="What is the cancellation and"
            highlight="refund policy?"
            tone="light"
          />
          <div className="overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)]">
            {STATION_CANCELLATION_POLICY.map((c, i) => (
              <div key={i} className={`flex items-center justify-between gap-4 p-5 transition-colors hover:bg-amber-50/60 md:p-6 ${i !== STATION_CANCELLATION_POLICY.length - 1 ? 'border-b border-amber-100' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-amber-200 bg-amber-50">
                    <Clock className="h-4 w-4 text-amber-600" />
                  </div>
                  <p className="text-sm font-bold text-slate-900 md:text-base">{c.window}</p>
                </div>
                <span className={`text-xs font-bold md:text-sm ${i === 0 || i === 3 ? 'text-emerald-600' : i === 1 ? 'text-amber-600' : 'text-orange-600'}`}>{c.charge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PRE-BOOK BENEFITS — dark band ====== */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SerifHeading
            eyebrow="Why Pre-Book"
            icon={Shield}
            title="Pre-book for"
            highlight="Hassle-free Pickup"
            tone="dark"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <div key={i} className={`group relative overflow-hidden ${GLASS} p-7 transition-all duration-500 hover:border-amber-400/40 hover:bg-white/[0.07]`}>
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-amber-400/5 blur-3xl transition-all duration-500 group-hover:bg-amber-400/10" />
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#FACF2D]/40 bg-gradient-to-br from-amber-400/20 via-transparent to-transparent transition-transform duration-300 group-hover:scale-110">
                  {(() => { const Icon = resolveIcon(b.icon); return <Icon className="h-6 w-6 text-[#FACF2D]" />; })()}
                </div>
                <h3 className="font-display-serif relative mb-2 text-xl font-black text-white">{b.title}</h3>
                <p className="relative text-sm leading-relaxed text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== HOW TO BOOK — warm-light band ====== */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SerifHeading
            eyebrow="Simple Process"
            icon={Zap}
            title="How to"
            highlight="Book"
            tone="light"
          />
          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-[2px] bg-gradient-to-r from-amber-300/50 via-[#FACF2D]/50 to-amber-300/50 md:block" />
            {[
              { step: '01', title: 'Arrive', desc: `Your train pulls into ${stationName}. Collect luggage and head to exit.`, icon: TrainFront },
              { step: '02', title: 'Contact Us', desc: 'Call 7668570551 or WhatsApp with your location and destination.', icon: Phone },
              { step: '03', title: 'Driver Arrives', desc: `Verified driver reaches ${stationCode} exit within 10 min with name board.`, icon: MapPinned },
              { step: '04', title: 'Enjoy Ride', desc: 'Sit back in a clean AC vehicle. Fixed fare, comfortable, safe.', icon: Car },
            ].map((s, i) => (
              <div key={i} className="group relative text-center">
                <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FACF2D] shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-6 w-6 text-slate-950" />
                </div>
                <div className="mb-2 font-mono text-xs tracking-widest text-amber-600">{s.step}</div>
                <h3 className="font-display-serif mb-2 text-xl font-black text-slate-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATION INFO — dark band ====== */}
      {(cabWaitingPoint || majorTrains) && (
        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SerifHeading
              eyebrow="Station Details"
              icon={TrainFront}
              title="What you need to know about"
              highlight={stationName}
              tone="dark"
            />
            <div className="grid gap-6 md:grid-cols-2">
              {cabWaitingPoint && (
                <div className={`overflow-hidden ${GLASS} transition-all duration-500 hover:border-amber-400/40`}>
                  <div className="border-b border-white/5 bg-gradient-to-r from-amber-400/15 to-transparent px-6 py-4">
                    <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#FACF2D]" /><h3 className="font-bold text-white">Cab Pickup Point</h3></div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-slate-400">{cabWaitingPoint}</p>
                    <div className="mt-5 flex items-center gap-2 text-xs font-bold text-emerald-400">
                      <div className="h-2 w-2 rounded-full bg-emerald-400" />Driver waiting at this location
                    </div>
                  </div>
                </div>
              )}
              {majorTrains && majorTrains.length > 0 && (
                <div className={`overflow-hidden ${GLASS} transition-all duration-500 hover:border-amber-400/40`}>
                  <div className="border-b border-white/5 bg-gradient-to-r from-amber-400/15 to-transparent px-6 py-4">
                    <div className="flex items-center gap-3"><TrainFront className="h-5 w-5 text-[#FACF2D]" /><h3 className="font-bold text-white">Major Trains</h3></div>
                  </div>
                  <div className="flex flex-wrap gap-2 p-6">
                    {majorTrains.map((t, i) => (
                      <span key={i} className="rounded-xl border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ====== FAQS — warm-light band, two-column grid ====== */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SerifHeading
            eyebrow="FAQs"
            title="Common"
            highlight="Questions"
            tone="light"
          />
          <div className="grid gap-3 md:grid-cols-2 md:items-start">
            {allFaqs.map((faq, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl border bg-white transition-all duration-500 ${openFaq === i ? 'border-amber-400 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.55)]' : 'border-amber-200 hover:border-amber-300'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="flex w-full items-center justify-between rounded-2xl p-5 text-left focus:outline-none focus:ring-2 focus:ring-amber-500/50 md:p-6">
                  <div className="flex items-center gap-4 pr-4">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${openFaq === i ? 'bg-[#FACF2D]' : 'bg-amber-100'}`}>
                      <span className={`font-mono text-xs font-black transition-colors ${openFaq === i ? 'text-slate-950' : 'text-amber-700'}`}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 md:text-base">{faq.question}</h3>
                  </div>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-amber-500 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 pt-0">
                    <p className="ml-12 border-t border-amber-100 pt-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== RELATED GUIDES — cross-links to city cluster ====== */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SerifHeading
            eyebrow={`More About ${city}`}
            icon={MapPinned}
            title="Plan Your"
            highlight={`${city} Trip`}
            tone="dark"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href={`/best-time-to-visit/${city.toLowerCase().replace(/\s+/g, '-')}`} className={`group ${GLASS} p-5 transition-all duration-300 hover:border-amber-400/40`}>
              <Clock className="mb-3 h-6 w-6 text-[#FACF2D]" />
              <h3 className="mb-1 text-base font-bold text-white">Best Time to Visit {city}</h3>
              <p className="text-xs leading-relaxed text-slate-400">Month-by-month weather, festivals, peak-season guide for {city}.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-amber-300 transition-transform group-hover:translate-x-1">Read guide <ArrowRight className="h-3 w-3" /></span>
            </Link>
            <Link href={`/cab-service/${city.toLowerCase().replace(/\s+/g, '-')}`} className={`group ${GLASS} p-5 transition-all duration-300 hover:border-amber-400/40`}>
              <Car className="mb-3 h-6 w-6 text-[#FACF2D]" />
              <h3 className="mb-1 text-base font-bold text-white">{city} Cab Service</h3>
              <p className="text-xs leading-relaxed text-slate-400">Local, outstation, airport transfers — all {city} cab services.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-amber-300 transition-transform group-hover:translate-x-1">Explore <ArrowRight className="h-3 w-3" /></span>
            </Link>
            <Link href={`/${city.toLowerCase().replace(/\s+/g, '-')}-travel-guide`} className={`group ${GLASS} p-5 transition-all duration-300 hover:border-amber-400/40`}>
              <MapPin className="mb-3 h-6 w-6 text-[#FACF2D]" />
              <h3 className="mb-1 text-base font-bold text-white">{city} Travel Guide</h3>
              <p className="text-xs leading-relaxed text-slate-400">Complete {city} attractions, food, shopping and itinerary guide.</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-amber-300 transition-transform group-hover:translate-x-1">View guide <ArrowRight className="h-3 w-3" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA — city photo banner with gold ====== */}
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <Image
          src={cityBannerImage}
          alt={`${city} — book your ${stationName} taxi`}
          fill
          className="object-cover"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" aria-hidden />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#FACF2D]/70 bg-gradient-to-br from-amber-400/25 via-transparent to-transparent backdrop-blur-xl">
            <TrainFront className="h-9 w-9 text-[#FACF2D]" />
          </div>
          <h2 className="font-display-serif mb-5 text-4xl font-black tracking-tight text-white md:text-6xl">
            Arriving at <span className={FOIL}>{stationName}?</span>
          </h2>
          <p className="mb-3 text-xl font-bold text-amber-100 md:text-2xl">Your taxi is waiting at the station.</p>
          <p className="mx-auto mb-10 max-w-xl text-base text-white/60 md:text-lg">Fixed fares from {'₹'}{cheapest}. 24/7 service. Meet at platform exit. Clean AC vehicles.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link onClick={() => trackPhoneCall('station_taxi')} href="tel:+917668570551" className={`${GOLD_BTN} ${CTA_SIZE}`}>
              <Phone className="h-4 w-4" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('station_taxi')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className={`${GHOST_BTN} ${CTA_SIZE}`}>
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Booking
            </Link>
          </div>
        </div>
      </section>

      {/* ====== BREADCRUMB ====== */}
      <nav className="border-t border-white/5 px-4 py-4" aria-label="Breadcrumb">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-amber-300">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/railway-station-taxi" className="transition-colors hover:text-amber-300">Railway Station Taxi</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-slate-300">{stationName} ({stationCode})</span>
        </div>
      </nav>
    </article>
  );
}
