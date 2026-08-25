'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Shield, Users, Star, ChevronRight, ChevronDown, CheckCircle2, Calendar, ArrowRight, IndianRupee, Tent, Flame, Music, HelpCircle, Zap, UsersRound, Route } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';

/* Verified destination hero photos (public/images/) */
const HERO_IMAGES = {
  Rishikesh: '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg',
  Manali: '/images/sightseeing/Manali/Manali_hero_section.jpg',
  Kasol: '/images/sightseeing/Kasol/Kasol_hero_section.jpg',
  Jaisalmer: '/images/sightseeing/Jaisalmer/Jaisalmer_hero_section.jpg',
  Goa: '/images/packages/goa.webp',
  'Spiti Valley': '/images/sightseeing/Spiti_Valley/Kunzum Pass.jpg',
  'Bachelor Trip - North India': '/images/sightseeing/Manali/Manali_hero_section.jpg',
};

/* Ultra-Premium v2 CTA system — gold bg + black text, compact on desktop */
const GOLD_CTA =
  'sheen inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-7 py-3.5 text-base font-bold text-black shadow-gold-bloom transition-colors hover:bg-[#ffd84f] lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';
const GHOST_CTA_DARK =
  'inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/10 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';

export default function FriendsTripClient({ data }) {
  const phoneNumber = '7668570551';
  const whatsappLink = 'https://wa.me/917668570551';
  const [openFaq, setOpenFaq] = useState(null);

  // Bachelor page has a special "topDestinations" section
  const isBachelor = !!data.topDestinations;

  const tripName = isBachelor ? 'Bachelor Trip North India' : `Friends Trip to ${data.destination}`;
  const perPersonPrice = (data.price.perPerson17 || data.price.perPerson27 || 815).toLocaleString();
  const stickyWhatsappText = `Hi, I'd like to plan a ${tripName.toLowerCase()} for my group. Please share Tempo Traveller package details and best rates.`;
  const heroImg = HERO_IMAGES[data.destination];
  const heroAlt = isBachelor
    ? 'Manali — a top North India bachelor trip destination'
    : `${data.destination} — friends group trip destination from Delhi`;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SetStickyCta
        price={`Rs ${perPersonPrice}/person`}
        label={tripName}
        whatsappText={stickyWhatsappText}
      />

      {/* ─── HERO — destination photo, scrim on the text side only ─── */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        {heroImg ? (
          <img
            src={heroImg}
            alt={heroAlt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        ) : (
          <div className="absolute inset-0 bg-aurora" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/15" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-orange-200/80">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-orange-100">
              {isBachelor ? 'Bachelor Trip North India' : `Friends Trip to ${data.destination}`}
            </span>
          </nav>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/30 bg-black/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FACF2D] backdrop-blur-xl">
              <UsersRound className="h-3.5 w-3.5" />
              {isBachelor ? 'Bachelor Trip' : 'Friends Trip'}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-black/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-200 backdrop-blur-xl">
              <Users className="h-3.5 w-3.5" />
              {data.groupSize}
            </span>
          </div>

          <h1 className="speakable-headline font-display-serif mb-6 max-w-3xl text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl">
            {isBachelor
              ? <><span className="text-gold-foil">Bachelor Trip</span><span className="mt-2 block text-xl font-semibold text-white/85 sm:text-2xl lg:text-3xl">North India Adventures</span></>
              : <>Friends Trip to <span className="text-gold-foil">{data.destination}</span><span className="mt-2 block text-xl font-semibold text-white/85 sm:text-2xl lg:text-3xl">by Tempo Traveller from Delhi</span></>
            }
          </h1>

          <p className="speakable-lead mb-4 max-w-3xl text-lg leading-relaxed text-orange-50/85 sm:text-xl">
            A friends trip to {data.destination} from Delhi by Tempo Traveller starts at around Rs {(data.price.perPerson17 || data.price.perPerson12 || 0).toLocaleString()} per person (12-17 seater AC). The full {data.vehicle.type} Tempo Traveller is Rs {(data.price.tempo12 || 0).toLocaleString()} to Rs {(data.price.tempo17 || 0).toLocaleString()}, all-inclusive of toll, parking and driver allowance, with a music system, reclining seats and luggage space for the whole gang.
          </p>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-orange-50/65">
            {data.tagline}. {data.vehicle.type} Tempo Traveller with music system, reclining seats, and space for your entire gang.
          </p>

          {/* Stat panel — glass on dark */}
          <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { icon: Route, label: 'Distance', value: data.distance },
              { icon: Calendar, label: 'Duration', value: data.duration },
              { icon: Users, label: 'Group Size', value: data.groupSize },
              { icon: IndianRupee, label: 'Per Person From', value: `Rs ${(data.price.perPerson17 || data.price.perPerson27 || 815).toLocaleString()}` },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-5">
                <item.icon className="mb-2 h-5 w-5 text-[#FACF2D]" />
                <p className="text-[11px] font-medium uppercase tracking-wider text-orange-100/60">{item.label}</p>
                <p className="text-lg font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          {/* CTA + Lead Capture */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-3">
                <a
                  onClick={() => trackPhoneCall('friends_trip_hero')} href={`tel:${phoneNumber}`}
                  className={GOLD_CTA}
                >
                  <Phone className="h-4 w-4" />
                  Call Now — {phoneNumber}
                </a>
                <a
                  onClick={() => trackWhatsAppClick('friends_trip_hero', stickyWhatsappText)}
                  href={`${whatsappLink}?text=${encodeURIComponent(stickyWhatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={GHOST_CTA_DARK}
                >
                  WhatsApp Group Booking
                </a>
              </div>
              {/* Trust row */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-orange-50/75">
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-current text-[#FACF2D]" /> 4.9&#9733; Rated</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-[#FACF2D]" /> 10,000+ trips</span>
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-[#FACF2D]" /> Verified drivers</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#FACF2D]" /> No advance payment</span>
                <span className="flex items-center gap-1.5"><Route className="h-4 w-4 text-[#FACF2D]" /> Customizable itinerary</span>
              </div>
            </div>
            <div className="w-full lg:justify-self-end">
              <QuickEnquiryForm fromCity="Delhi" toCity={data.destination || 'North India'} pageType="route" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUDGET BREAKDOWN — warm-light band ─── */}
      <section className="bg-[#FFF6DC] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-700">Split the Bill</p>
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
              <IndianRupee className="h-5 w-5 text-[#FACF2D]" />
            </span>
            Budget Breakdown Per Person
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(data.budgetBreakdown).filter(([key]) => key !== 'total').map(([key, value], i) => (
              <div key={i} className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-[#FACF2D]">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium capitalize text-slate-500">{key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1')}</p>
                </div>
                <p className="pl-11 text-xl font-bold">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#FACF2D]/60 bg-[#FACF2D]/15 p-8 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-800">Total Estimated Budget Per Person</p>
            <p className="font-display-serif text-4xl font-black text-slate-900 sm:text-5xl">{data.budgetBreakdown.total}</p>
          </div>
        </div>
      </section>

      {/* ─── TEMPO TRAVELLER + GROUP PRICING — dark band ─── */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#FACF2D]">Party on Wheels</p>
          <h2 className="font-display-serif mb-10 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Your Ride — {data.vehicle.name}
          </h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1">
                <h3 className="mb-2 text-2xl font-bold text-white">{data.vehicle.type} {data.vehicle.name}</h3>
                <p className="mb-6 text-lg text-orange-200/70">{data.vehicle.seats} seats — the whole gang travels together</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {data.vehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#FACF2D]/10">
                        <CheckCircle2 className="h-4 w-4 text-[#FACF2D]" />
                      </span>
                      <span className="text-sm text-orange-50/85">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:w-80">
                <h4 className="mb-5 flex items-center gap-2 text-lg font-bold text-white">
                  <IndianRupee className="h-5 w-5 text-[#FACF2D]" />
                  Group Pricing
                </h4>
                <div className="space-y-4">
                  {data.price.tempo12 && (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-orange-100/80">12-Seater</span>
                        <span className="text-lg font-bold text-white">Rs {data.price.tempo12.toLocaleString()}</span>
                      </div>
                      {data.price.perPerson12 && (
                        <p className="mt-1 text-xs text-orange-200/60">~Rs {data.price.perPerson12}/person</p>
                      )}
                    </div>
                  )}
                  {data.price.tempo17 && (
                    <div className="relative rounded-xl border border-[#FACF2D]/50 bg-[#FACF2D]/10 p-4">
                      <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-[#FACF2D] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                        Popular
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">17-Seater</span>
                        <span className="text-lg font-bold text-white">Rs {data.price.tempo17.toLocaleString()}</span>
                      </div>
                      {data.price.perPerson17 && (
                        <p className="mt-1 text-xs text-[#FACF2D]">~Rs {data.price.perPerson17}/person</p>
                      )}
                    </div>
                  )}
                  {data.price.minibus && (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-orange-100/80">27-Seater Mini Bus</span>
                        <span className="text-lg font-bold text-white">Rs {data.price.minibus.toLocaleString()}</span>
                      </div>
                      {data.price.perPerson27 && (
                        <p className="mt-1 text-xs text-orange-200/60">~Rs {data.price.perPerson27}/person</p>
                      )}
                    </div>
                  )}
                </div>
                {data.price.note && (
                  <p className="mt-4 flex items-start gap-1.5 text-xs text-orange-200/60">
                    <Star className="mt-0.5 h-3 w-3 flex-shrink-0" />
                    {data.price.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOP DESTINATIONS (Bachelor only) — warm-light band ─── */}
      {isBachelor && data.topDestinations && (
        <section className="bg-[#FFF6DC] py-16 text-slate-900 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-700">Pick Your Adventure</p>
            <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
                <MapPin className="h-5 w-5 text-[#FACF2D]" />
              </span>
              Top Bachelor Trip Destinations
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.topDestinations.map((dest, i) => (
                <div key={i} className="relative rounded-2xl border border-amber-900/10 bg-white p-7 shadow-sm">
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#FACF2D]/15 text-sm font-bold text-amber-800">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900">
                    <MapPin className="h-5 w-5 text-[#FACF2D]" />
                  </span>
                  <h3 className="mb-2 text-xl font-bold">{dest.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{dest.description}</p>
                  <p className="text-lg font-semibold text-amber-800">{dest.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── ADVENTURE ACTIVITIES — dark band ─── */}
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-400">Adrenaline Hit</p>
          <h2 className="font-display-serif mb-3 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-500/10">
              <Zap className="h-5 w-5 text-orange-400" />
            </span>
            Adventure Activities
          </h2>
          <p className="mb-10 text-lg text-orange-100/55">Adrenaline-pumping experiences for your squad</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.adventureActivities.map((activity, i) => (
              <div key={i} className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-colors hover:border-orange-400/30">
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10 text-sm font-bold text-orange-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10">
                  <Zap className="h-5 w-5 text-orange-400" />
                </span>
                <h3 className="mb-2 text-lg font-bold text-white">{activity.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-orange-50/65">{activity.description}</p>
                <div className="flex items-center gap-2 font-semibold text-[#FACF2D]">
                  <IndianRupee className="h-4 w-4" />
                  {activity.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ITINERARY — warm-light band ─── */}
      <section className="bg-[#FFF6DC] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-700">Day by Day</p>
          <h2 className="font-display-serif mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">The Game Plan</h2>
          <p className="mb-10 text-lg text-slate-600">Day-by-day adventure itinerary</p>

          <div className="space-y-4">
            {data.itinerary.map((day, i) => (
              <div key={i} className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-slate-900">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FACF2D]">Day</span>
                    <span className="text-2xl font-black leading-none text-white">{day.day}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-2 text-lg font-bold sm:text-xl">{day.title}</h3>
                    <p className="leading-relaxed text-slate-600">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAMPING OPTIONS — dark band ─── */}
      {data.campingOptions && (
        <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
          <div className="absolute inset-0 bg-aurora opacity-50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#FACF2D]">Under the Stars</p>
            <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FACF2D]/25 bg-[#FACF2D]/10">
                <Tent className="h-5 w-5 text-[#FACF2D]" />
              </span>
              Stay Options
            </h2>

            <div className="grid gap-6 sm:grid-cols-3">
              {data.campingOptions.map((camp, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#FACF2D]/20 bg-[#FACF2D]/10">
                    <Tent className="h-5 w-5 text-[#FACF2D]" />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-white">{camp.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-orange-50/65">{camp.description}</p>
                  <p className="text-xl font-bold text-[#FACF2D]">{camp.priceRange}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── NIGHTLIFE / PARTY IDEAS — dark band ─── */}
      {data.nightlifeOptions && (
        <section className="bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-400">After Dark</p>
            <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-500/10">
                <Flame className="h-5 w-5 text-orange-400" />
              </span>
              {isBachelor ? 'Bachelor Party Ideas' : 'Nightlife & Fun'}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {(isBachelor && data.bachelorGameIdeas ? data.bachelorGameIdeas : data.nightlifeOptions).map((item, i) => (
                <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10">
                    <Music className="h-5 w-5 text-orange-400" />
                  </span>
                  <span className="font-medium text-orange-50/85">{item}</span>
                </div>
              ))}
            </div>

            {isBachelor && data.nightlifeOptions && (
              <>
                <h3 className="mb-6 mt-14 flex items-center gap-3 text-2xl font-bold text-white">
                  <Flame className="h-6 w-6 text-orange-400" />
                  Nightlife at Destinations
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {data.nightlifeOptions && data.nightlifeOptions.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-500/10">
                        <Flame className="h-5 w-5 text-orange-400" />
                      </span>
                      <span className="font-medium text-orange-50/85">{item}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* ─── PACKAGE INCLUDES + GROUP SAFETY — warm-light band ─── */}
      <section className="bg-[#FFF6DC] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-700">All-Inclusive</p>
          <h2 className="font-display-serif mb-10 text-2xl font-bold sm:text-3xl md:text-4xl">What’s Included</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {data.packageIncludes.map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl border border-amber-900/10 bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-700" />
                </span>
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display-serif mb-10 mt-16 text-2xl font-bold sm:text-3xl md:text-4xl">Group Safety</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.safetyFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-amber-900/10 bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                  <Shield className="h-5 w-5 text-emerald-700" />
                </span>
                <span className="mt-1.5 font-medium text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ — dark band, two-column ─── */}
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#FACF2D]">Good to Know</p>
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FACF2D]/25 bg-[#FACF2D]/10">
              <HelpCircle className="h-5 w-5 text-[#FACF2D]" />
            </span>
            Frequently Asked Questions
          </h2>

          <div className="grid gap-4 md:grid-cols-2 md:items-start">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-xl transition-colors ${
                  openFaq === i ? 'border-[#FACF2D]/40' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'}
                  className="flex w-full cursor-pointer items-center gap-4 rounded-2xl p-5 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACF2D]/50 sm:p-6"
                >
                  <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                    openFaq === i
                      ? 'bg-[#FACF2D] text-black'
                      : 'border border-[#FACF2D]/20 bg-[#FACF2D]/10 text-[#FACF2D]'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="flex-1 pr-2 font-semibold text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-[#FACF2D] transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  style={{ overflow: 'hidden' }}
                >
                  <div className={`px-5 pb-6 pl-[4.5rem] leading-relaxed text-orange-50/70 sm:px-6 ${i === 0 ? 'speakable-faq-first' : ''}`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-SERVICE LINKS — dark band ─── */}
      <section className="bg-slate-950 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display-serif mb-8 text-2xl font-bold text-white sm:text-3xl">Explore More Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(() => {
              const destSlug = data.destination ? data.destination.toLowerCase().replace(/\s+/g, '-') : '';
              const links = data.destination ? [
                { href: `/sightseeing/${destSlug}`, label: `${data.destination} Sightseeing Tour` },
                { href: `/delhi-airport-to-${destSlug}-taxi`, label: `Delhi Airport to ${data.destination} Taxi` },
                { href: `/${destSlug}`, label: `${data.destination} Cab Service` },
                { href: `/places-to-visit-near-${destSlug}`, label: `Places Near ${data.destination}` },
                { href: `/${destSlug}-travel-guide`, label: `${data.destination} Travel Guide` },
                { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
                { href: '/tour-package', label: 'Tour Packages from Delhi' },
                { href: '/outstation-cabs', label: 'Outstation Cab Service' },
              ] : [
                { href: '/friends-trip-rishikesh', label: 'Friends Trip to Rishikesh' },
                { href: '/friends-trip-manali', label: 'Friends Trip to Manali' },
                { href: '/friends-trip-kasol', label: 'Friends Trip to Kasol' },
                { href: '/friends-trip-goa-from-delhi', label: 'Friends Trip to Goa' },
                { href: '/friends-trip-jaisalmer', label: 'Friends Trip to Jaisalmer' },
                { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
                { href: '/tour-package', label: 'Tour Packages from Delhi' },
                { href: '/outstation-cabs', label: 'Outstation Cab Service' },
              ];
              return links.map((link, i) => (
                <Link key={i} href={link.href} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-colors hover:border-[#FACF2D]/30 hover:bg-white/10">
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#FACF2D] transition-transform group-hover:translate-x-1" />
                  <span className="text-sm font-medium text-orange-50/85 transition-colors group-hover:text-white">{link.label}</span>
                </Link>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA — dark band with gold ─── */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FACF2D]/60 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FACF2D]/25 bg-[#FACF2D]/10">
            <UsersRound className="h-8 w-8 text-[#FACF2D]" />
          </span>
          <h2 className="font-display-serif mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {isBachelor
              ? 'Book the Ultimate Bachelor Trip'
              : <>Book Your Squad Trip to {data.destination}</>
            }
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-orange-100/70 sm:text-xl">
            Tempo Traveller with music system, AC, reclining seats. From Rs {(data.price.perPerson17 || data.price.perPerson27 || 815).toLocaleString()} per person.
          </p>

          <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
            <a
              onClick={() => trackPhoneCall('friends_trip_footer')} href={`tel:${phoneNumber}`}
              className={GOLD_CTA}
            >
              <Phone className="h-4 w-4" />
              Call {phoneNumber}
            </a>
            <a
              onClick={() => trackWhatsAppClick('friends_trip_footer', stickyWhatsappText)}
              href={`${whatsappLink}?text=${encodeURIComponent(stickyWhatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={GHOST_CTA_DARK}
            >
              WhatsApp Group Booking
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-orange-100/70">
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Users className="h-4 w-4" />
              Group discounts available
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Shield className="h-4 w-4" />
              Free cancellation up to 48 hours
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Music className="h-4 w-4" />
              Music system included
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
