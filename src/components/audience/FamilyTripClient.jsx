'use client';

import { useState } from 'react';
import Link from '@/components/ui/JourneyLink';
import { Phone, MapPin, Shield, Users, Star, ChevronRight, Car, CheckCircle2, Calendar, IndianRupee, Baby, Hotel, Route, Compass, HelpCircle } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';

/* Verified destination hero photos (public/images/sightseeing/<City>/) */
const HERO_IMAGES = {
  Shimla: '/images/sightseeing/Shimla/shimla_hero_section.jpg',
  Manali: '/images/sightseeing/Manali/Manali_hero_section.jpg',
  Jaipur: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
  Nainital: '/images/sightseeing/Nainital/Nainital_hero_section.jpg',
  Mussoorie: '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg',
  'Jim Corbett': '/images/sightseeing/Jim_Corbett/Jim_corbett_hero_section.jpg',
  Kashmir: '/images/sightseeing/Kashmir_Valley/Kashmir_Valley_hero_section.jpg',
  Agra: '/images/sightseeing/Agra/Agra_Hero_section.jpg',
  Udaipur: '/images/sightseeing/Udaipur/Udaipur_hero_section.jpg',
  Rishikesh: '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg',
};

/* Ultra-Premium v2 CTA system — gold bg + black text, compact on desktop */
const GOLD_CTA =
  'sheen inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-7 py-3.5 text-base font-bold text-black shadow-gold-bloom transition-colors hover:bg-[#ffd84f] lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';
const GHOST_CTA_DARK =
  'inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/10 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';

export default function FamilyTripClient({ data }) {
  const phoneNumber = '7668570551';
  const whatsappLink = 'https://wa.me/917668570551';
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stickyWhatsappText = `Hi, I'd like to plan a family trip to ${data.destination} from Delhi. Please share package details and best rates.`;
  const heroImg = HERO_IMAGES[data.destination];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SetStickyCta
        price={`Rs ${data.price.sedan.toLocaleString()}`}
        label={`Family Trip to ${data.destination}`}
        whatsappText={stickyWhatsappText}
      />

      {/* ─── HERO — destination photo, scrim on the text side only ─── */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        {heroImg ? (
          <img
            src={heroImg}
            alt={`${data.destination} — family trip destination from Delhi`}
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
          <nav className="mb-8 flex items-center gap-2 text-sm text-amber-200/80">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-amber-100">Family Trip to {data.destination} from Delhi</span>
          </nav>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/30 bg-black/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FACF2D] backdrop-blur-xl">
              <Users className="h-3.5 w-3.5" />
              Family Trip
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-100 backdrop-blur-xl">
              <Baby className="h-3.5 w-3.5" />
              Kid-Friendly
            </span>
          </div>

          <h1 className="speakable-headline font-display-serif mb-6 max-w-3xl text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl">
            Family Trip to <span className="text-gold-foil">{data.destination}</span>
            <span className="mt-2 block text-xl font-semibold text-white/85 sm:text-2xl lg:text-3xl">from Delhi by Car</span>
          </h1>
          <p className="speakable-lead mb-5 max-w-3xl text-lg leading-relaxed text-amber-50/85 sm:text-xl">
            A family trip to {data.destination} from Delhi by car covers {data.distance} in about {data.duration}. Triveni Cabs™ offers a private {data.vehicle.name} from Rs {data.price.sedan.toLocaleString()} (sedan) to Rs {data.price.suv.toLocaleString()} (SUV), all-inclusive of toll, parking and driver allowance, with kid-friendly stops, child seats on request and verified drivers.
          </p>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-amber-50/65">
            {data.tagline}. Safe, comfortable {data.vehicle.name} ride with experienced drivers who know family-friendly routes and rest breaks.
          </p>

          {/* Stat panel — glass on dark */}
          <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { icon: Route, label: 'Distance', value: data.distance },
              { icon: Calendar, label: 'Duration', value: data.duration },
              { icon: Users, label: 'Family Size', value: data.familySize },
              { icon: IndianRupee, label: 'Starting From', value: `Rs ${data.price.sedan.toLocaleString()}` },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-5">
                <item.icon className="mb-2 h-5 w-5 text-[#FACF2D]" />
                <p className="text-[11px] uppercase tracking-wider text-amber-100/60">{item.label}</p>
                <p className="text-lg font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          {/* CTA + Lead Capture */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-3">
                <a
                  onClick={() => trackPhoneCall('family_trip_hero')} href={`tel:${phoneNumber}`}
                  className={GOLD_CTA}
                >
                  <Phone className="h-4 w-4" />
                  Call Now — {phoneNumber}
                </a>
                <a
                  onClick={() => trackWhatsAppClick('family_trip_hero', stickyWhatsappText)}
                  href={`${whatsappLink}?text=${encodeURIComponent(stickyWhatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={GHOST_CTA_DARK}
                >
                  WhatsApp Enquiry
                </a>
              </div>
              {/* Trust row */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-amber-50/75">
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-current text-[#FACF2D]" /> 4.9&#9733; Rated</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-[#FACF2D]" /> 10,000+ trips</span>
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-[#FACF2D]" /> Verified drivers</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#FACF2D]" /> No advance payment</span>
                <span className="flex items-center gap-1.5"><Route className="h-4 w-4 text-[#FACF2D]" /> Customizable itinerary</span>
              </div>
            </div>
            <div className="w-full lg:justify-self-end">
              <QuickEnquiryForm fromCity="Delhi" toCity={data.destination} pageType="route" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── VEHICLE + PRICING — warm-light band ─── */}
      <section className="bg-[#FFF6DC] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-700">Your Ride</p>
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
              <Car className="h-5 w-5 text-[#FACF2D]" />
            </span>
            Recommended Vehicle for Your Family
          </h2>
          <div className="rounded-3xl border border-amber-900/10 bg-white p-6 shadow-sm sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row">
              <div className="flex-1">
                <span className="mb-3 inline-block rounded-full bg-slate-900 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#FACF2D]">Recommended</span>
                <h3 className="mb-2 text-2xl font-bold sm:text-3xl">{data.vehicle.name}</h3>
                <p className="mb-6 text-lg text-slate-600">{data.vehicle.seats}-Seater {data.vehicle.type} — perfect for families</p>
                <ul className="space-y-3">
                  {data.vehicle.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-900/10 bg-[#FFFBEF] p-6 sm:w-80">
                <h4 className="mb-5 text-lg font-bold text-slate-900">Package Pricing</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-600">Sedan (4 pax)</span>
                    <span className="text-lg font-bold text-slate-900">Rs {data.price.sedan.toLocaleString()}</span>
                  </div>
                  <div className="-mx-3 flex items-center justify-between rounded-xl border border-[#FACF2D]/50 bg-[#FACF2D]/15 px-3 py-3">
                    <span className="font-semibold text-amber-800">SUV / Innova (6 pax)</span>
                    <span className="text-lg font-bold text-slate-900">Rs {data.price.suv.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-600">Tempo (10+ pax)</span>
                    <span className="text-lg font-bold text-slate-900">Rs {data.price.tempo.toLocaleString()}</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-500">*Toll, parking, driver allowance included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KID-FRIENDLY ACTIVITIES — dark band ─── */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#FACF2D]">For the Kids</p>
          <h2 className="font-display-serif mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Kid-Friendly Activities in {data.destination}
          </h2>
          <p className="mb-10 text-lg text-amber-100/55">Fun for children of all ages, curated by families who have been there</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.kidFriendlyActivities.map((activity, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-[#FACF2D]/30">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#FACF2D]/20 bg-[#FACF2D]/10">
                  <Star className="h-5 w-5 text-[#FACF2D]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{activity.name}</h3>
                <p className="text-sm leading-relaxed text-amber-100/60">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ITINERARY — warm-light band ─── */}
      <section className="bg-[#FFF6DC] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-700">Day by Day</p>
          <h2 className="font-display-serif mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">Day-wise Family Itinerary</h2>
          <p className="mb-10 text-lg text-slate-600">Planned with rest breaks and kid-friendly pacing</p>
          <div className="space-y-5">
            {data.itinerary.map((day, i) => (
              <div key={i} className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-slate-900">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FACF2D]">Day</span>
                    <span className="text-2xl font-black leading-none text-white">{day.day}</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold sm:text-xl">{day.title}</h3>
                    <p className="leading-relaxed text-slate-600">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INCLUDES + SAFETY — dark band ─── */}
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#FACF2D]">All-Inclusive</p>
          <h2 className="font-display-serif mb-10 text-2xl font-bold text-white sm:text-3xl md:text-4xl">What’s Included in Your Package</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.packageIncludes.map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#FACF2D]/25 bg-[#FACF2D]/10">
                  <CheckCircle2 className="h-4 w-4 text-[#FACF2D]" />
                </span>
                <span className="text-amber-50/85">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display-serif mb-3 mt-10 sm:mt-16 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Family Safety Features</h2>
          <p className="mb-10 text-lg text-amber-100/55">Your family’s safety is our highest priority</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.safetyFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-500/25 bg-emerald-500/10">
                  <Shield className="h-4 w-4 text-emerald-400" />
                </span>
                <span className="text-amber-50/85">{feature}</span>
              </div>
            ))}
          </div>

          {/* Mid-page CTA strip */}
          <div className="mt-10 sm:mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#FACF2D]/25 bg-white/5 p-6 backdrop-blur-xl sm:flex-row sm:p-8">
            <div>
              <h3 className="text-xl font-bold text-white">Ready to plan your family trip to {data.destination}?</h3>
              <p className="mt-1 text-sm text-amber-100/60">Free quote in ~2 minutes &middot; No advance payment</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                onClick={() => trackPhoneCall('family_trip_mid')} href={`tel:${phoneNumber}`}
                className={GOLD_CTA}
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                onClick={() => trackWhatsAppClick('family_trip_mid', stickyWhatsappText)}
                href={`${whatsappLink}?text=${encodeURIComponent(stickyWhatsappText)}`}
                target="_blank" rel="noopener noreferrer"
                className={GHOST_CTA_DARK}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOTELS + TIPS — warm-light band ─── */}
      <section className="bg-[#FFF6DC] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-700">Where to Stay</p>
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
              <Hotel className="h-5 w-5 text-[#FACF2D]" />
            </span>
            Recommended Hotel Areas
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.hotelAreas.map((area, i) => (
              <div key={i} className="rounded-2xl border border-amber-900/10 bg-white p-6 text-center shadow-sm">
                <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FACF2D]/15">
                  <MapPin className="h-5 w-5 text-amber-700" />
                </span>
                <p className="font-semibold">{area}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display-serif mb-10 mt-10 sm:mt-16 flex items-center gap-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
              <Compass className="h-5 w-5 text-[#FACF2D]" />
            </span>
            Family Travel Tips
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.travelTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-amber-900/10 bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-[#FACF2D]">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-slate-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BEST SEASON — dark band ─── */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-aurora opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#FACF2D]/25 bg-white/5 p-10 text-center backdrop-blur-xl sm:p-14">
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FACF2D]/25 bg-[#FACF2D]/10">
              <Calendar className="h-7 w-7 text-[#FACF2D]" />
            </span>
            <h2 className="font-display-serif mb-3 text-2xl font-bold text-white sm:text-3xl">Best Season to Visit</h2>
            <p className="text-xl font-semibold text-[#FACF2D] sm:text-2xl">{data.bestSeason}</p>
            {data.altitude && <p className="mt-3 text-amber-100/50">Altitude: {data.altitude}</p>}
          </div>
        </div>
      </section>

      {/* ─── FAQ — warm-light band, two-column ─── */}
      <section className="bg-[#FFF6DC] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-700">Good to Know</p>
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
              <HelpCircle className="h-5 w-5 text-[#FACF2D]" />
            </span>
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4 md:grid-cols-2 md:items-start">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border bg-white shadow-sm transition-colors ${
                  openFaq === i ? 'border-[#FACF2D]/60' : 'border-amber-900/10'
                }`}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                  aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'}
                  className="flex w-full items-center gap-4 rounded-2xl p-5 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-[#FACF2D]/60 sm:p-6"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-[#FACF2D]">
                    {i + 1}
                  </span>
                  <h3 className="flex-1 pr-2 font-semibold">{faq.question}</h3>
                  <ChevronRight
                    className={`h-5 w-5 flex-shrink-0 text-amber-700 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-6 pl-[4.25rem] sm:px-6">
                    <p className={`leading-relaxed text-slate-600 ${i === 0 ? 'speakable-faq-first' : ''}`}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-SERVICE LINKS — dark band ─── */}
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display-serif mb-8 text-center text-2xl font-bold text-white sm:text-3xl">Explore More Services</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { href: `/sightseeing/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Sightseeing` },
              { href: `/airport-service/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Airport Taxi` },
              { href: `/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Cab Service` },
              { href: `/wedding/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Wedding Cars` },
              { href: `/places-to-visit-near-${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `Places Near ${data.destination}` },
              { href: '/tour-package', label: 'Tour Packages' },
              { href: '/tempo-traveller', label: 'Tempo Traveller' },
              { href: '/outstation-cabs', label: 'Outstation Cabs' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl transition-colors hover:border-[#FACF2D]/30 hover:bg-white/10">
                <span className="text-sm font-medium text-amber-50/85">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA — dark band with gold ─── */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FACF2D]/60 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display-serif mb-5 text-3xl font-bold text-white sm:text-4xl">
            Plan Your Family Trip to {data.destination} Today
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-amber-100/65 sm:text-xl">
            Safe Innova Crysta ride, experienced driver, kid-friendly stops. Starting at Rs {data.price.sedan.toLocaleString()}.
          </p>
          <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
            <a
              onClick={() => trackPhoneCall('family_trip_footer')} href={`tel:${phoneNumber}`}
              className={GOLD_CTA}
            >
              <Phone className="h-4 w-4" />
              Call {phoneNumber}
            </a>
            <a
              onClick={() => trackWhatsAppClick('family_trip_footer', stickyWhatsappText)}
              href={`${whatsappLink}?text=${encodeURIComponent(stickyWhatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={GHOST_CTA_DARK}
            >
              WhatsApp Booking
            </a>
          </div>
          <p className="mt-8 text-sm text-amber-100/45">
            Free cancellation up to 24 hours before departure | Child seat available on request
          </p>
        </div>
      </section>
    </main>
  );
}
