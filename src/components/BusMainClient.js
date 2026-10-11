'use client';

// ============================================================================
// BusMainClient — "Triveni Aurora" redesign (Aug 2026)
// /bus-routes hub: dark slate-950 + gold, real coach photography, glass
// panels. Fleet rates come straight from busRoutesData (₹30/km entry, ranges
// shown exactly as billed — never invented). Search + origin filter, fleet
// category filter, seater comparison, FAQ (two per row on md+), speakable
// classes and the honest tempo-traveller cross-sell all preserved.
// No framer-motion, no infinite animations: CSS-only transitions.
// All JSON-LD for this page is emitted by page.js and is untouched.
// ============================================================================

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Centralized icon imports for better bundle optimization
import {
  MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Bus, CheckCircle,
  ArrowRight, Route, Search, Filter, Sparkles, ChevronDown,
  IndianRupee, User, Headphones, ShieldCheck, WhatsAppIcon
} from '@/components/ui/icons';
// Import from smaller utility file to reduce bundle size
import { additionalInfo, whyChooseUs } from '@/utilis/busUtilsData';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import Section from '@/components/ui/Section';
import AuroraHeading from '@/components/ui/AuroraHeading';
import DataTable from '@/components/ui/DataTable';
import { trackPhoneCall, trackWhatsAppClick } from '@/utilis/analytics';

const PHONE = '7668570551';
const WHATSAPP = '917668570551';
const TRUST_ROW = '4.9★ · Since 2015 · No hidden charges · Pay after trip';

// whyChooseUs entries carry an icon key — map it onto the shared icon set.
const WHY_ICONS = {
  bus: Bus,
  driver: User,
  price: IndianRupee,
  support: Headphones,
  safety: ShieldCheck,
  booking: CheckCircle,
};

export default function BusMainClient({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [showAllRoutes, setShowAllRoutes] = useState(false);
  const [showAllVehicles, setShowAllVehicles] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  const { allRoutes, fleet, seaterComparison = [] } = data;

  const originCities = useMemo(() => {
    const origins = [...new Set(allRoutes.map(route => route.origin))];
    return origins.sort();
  }, [allRoutes]);

  const filteredRoutes = useMemo(() => {
    let routes = selectedOrigin
      ? allRoutes.filter(route => route.origin === selectedOrigin)
      : allRoutes;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      routes = routes.filter(route =>
        route.origin.toLowerCase().includes(term) ||
        route.destination.toLowerCase().includes(term)
      );
    }

    return routes;
  }, [allRoutes, selectedOrigin, searchTerm]);

  const filteredFleet = useMemo(() => {
    if (activeFilter === 'premium') return fleet.filter(bus => bus.premium);
    if (activeFilter === 'luxury') return fleet.filter(bus => bus.luxury);
    if (activeFilter === 'standard') return fleet.filter(bus => !bus.premium && !bus.luxury);
    return fleet;
  }, [fleet, activeFilter]);

  const displayedRoutes = showAllRoutes ? filteredRoutes : filteredRoutes.slice(0, 8);
  const displayedVehicles = showAllVehicles ? filteredFleet : filteredFleet.slice(0, 6);

  // FAQ content — preserved in full (mirrors the FAQPage JSON-LD in page.js).
  const faqItems = [
    {
      question: 'What bus sizes are available for rental?',
      answer: 'We offer luxury buses from 22 seater to 56 seater, including 22, 25, 27, 32, 35, 41, 45, 49, 52, and 56 seater options. All buses are AC equipped with pushback/reclining seats and entertainment systems.'
    },
    {
      question: 'Which cities do you provide bus rental services?',
      answer: 'We provide luxury bus rental services across India including Delhi, Mumbai, Jaipur, Agra, Chandigarh, Haridwar, Rishikesh, Shimla, Manali, Amritsar, Udaipur, Jodhpur, Jaisalmer, and many more cities. We cover all major tourist destinations, pilgrimage sites, and commercial hubs.'
    },
    {
      question: 'What are the bus rental rates?',
      answer: 'Bus rental rates start from ₹30/km for 22 seater mini bus and go up to ₹65/km for 56 seater luxury Volvo bus. Rates vary based on bus size, route, duration, and season. Driver allowance is ₹800-1200 per day depending on the vehicle.'
    },
    {
      question: 'What amenities are included in the luxury bus?',
      answer: 'Our luxury buses include AC, pushback/reclining seats, music/entertainment system, luggage space, curtains, reading lights, charging points, and some premium buses have TV, wifi, and washroom facilities. All buses are GPS tracked with professional drivers.'
    },
    {
      question: 'Can I book a bus for corporate events and weddings?',
      answer: 'Yes, we specialize in corporate bus rentals for conferences, team outings, and employee transportation. We also provide wedding buses for guest transfers, baraat, and destination weddings. Customized packages available with flexible booking.'
    },
    {
      question: 'How far in advance should I book a bus?',
      answer: 'We recommend booking at least 7-15 days in advance for popular routes and peak season. However, we also accept same-day and next-day bookings subject to availability. For large groups and special events, advance booking of 1 month is advisable.'
    },
    {
      question: 'How many people can fit in a 35 seater vs a 45 seater bus?',
      answer: 'A 35 seater bus comfortably seats 35 passengers plus luggage and is ideal for medium wedding groups, school trips, and corporate teams. A 45 seater bus seats 45 passengers and suits larger pilgrimage groups and conferences. For groups of 50-56, choose the 52 or 56 seater luxury Volvo coach. For small groups of 12-26, a tempo traveller or 22 seater mini bus is more economical.'
    },
    {
      question: 'What is the difference between a Volvo bus and a regular AC bus?',
      answer: 'A Volvo (or Scania) luxury coach has air-suspension for a smoother ride, push-back recliner seats, better insulation and quieter AC, and is best for long-distance and overnight journeys. A regular AC bus is more budget-friendly at ₹30-45/km and works well for shorter day trips and local group transfers. Volvo coaches cost ₹55-65/km but deliver premium comfort over 300+ km routes.'
    },
    {
      question: 'Do you provide buses for school trips and educational tours?',
      answer: 'Yes. Our school-trip buses come with speed governors, first-aid kits, GPS tracking shared with the school, and experienced drivers verified for student transport. We provide 22 to 56 seater options for day picnics, educational tours, and inter-school events with teacher-coordinated pickup and drop.'
    },
    {
      question: 'Is a driver and fuel included in the bus rental price?',
      answer: 'Yes, the per-km rate includes the bus, fuel, and a professional driver. Toll taxes, state permits, parking, and driver night allowance (₹800-1200/day) are charged extra at actuals. You receive a transparent quote before booking with all inclusions and exclusions listed clearly.'
    },
    {
      question: 'Can I get a GST invoice for a corporate bus booking?',
      answer: 'Yes, we provide a proper GST invoice for all corporate and business bus bookings, along with a single point of contact for multi-vehicle coordination. This makes Triveni Cabs™ ideal for company offsites, conferences, and employee transportation that require compliant billing and reimbursement.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SetStickyCta price="From ₹30/km" label="Bus Hire" whatsappText="Hi, I want to book a bus on rent. Please share availability and fare." />

      {/* ================= HERO — real coach photo + Aurora scrim ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/bus/hero_section_image.webp"
            alt="Luxury bus rental services — 22 to 56 seater AC coaches for group travel across India"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Scrim only where text sits: left + bottom — photo stays vivid on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
          <div className="absolute -top-32 right-10 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="min-w-0">
              <div className="glass-dark mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white/85 sm:text-sm">
                <Star className="h-3.5 w-3.5 text-amber-400" fill="currentColor" />
                4.9 Rating · 10,000+ Happy Travellers
              </div>
              <h1 className="speakable-headline font-display-serif text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-gradient-gold">Bus Hire in India</span> — Luxury Bus Rental Service
                <span className="mt-2 block text-lg font-bold text-white/75 sm:text-2xl">
                  22 to 56 Seater AC Coaches · Driver &amp; Fuel Included · From ₹30/km
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
                From 22 seater mini buses to 56 seater luxury Volvo coaches — premium group travel
                for weddings, corporate offsites, pilgrimages and tours, with professional drivers
                and transparent per-km pricing.
              </p>
              <p className="mt-4 text-xs font-semibold tracking-wide text-white/70 sm:text-sm">
                {TRUST_ROW}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    'Hi, I want to hire a bus for my group. Please share rates.'
                  )}`}
                  onClick={() => trackWhatsAppClick('bus_hub_hero')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sheen glow-gold inline-flex items-center gap-2.5 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95 sm:text-base"
                  aria-label="Contact Triveni Cabs on WhatsApp for bus booking"
                >
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp
                </a>
                <a
                  href="tel:+917668570551"
                  onClick={() => trackPhoneCall('bus_hub_hero')}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:text-base"
                  aria-label="Call Triveni Cabs at +91 76685 70551 for bus booking"
                >
                  <Phone className="h-4 w-4" /> Call: +91 76685 70551
                </a>
              </div>
            </div>

            {/* Enquiry form — QuickEnquiryForm is dark-only, sits on glass */}
            <div className="border-gradient-gold glass-dark rounded-3xl p-4 sm:p-5">
              <QuickEnquiryForm pageType="bus" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WARM LIGHT BAND — direct answer + intro ================= */}
      <section className="border-y border-amber-100 bg-gradient-to-b from-amber-50/70 via-white to-white py-12 text-slate-900 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Direct-answer lead box — voice/AI answer target (.speakable-lead) */}
          <div className="speakable-lead rounded-2xl border border-[#FACF2D]/40 bg-gradient-to-br from-[#FFF9E6] to-orange-50 p-6 shadow-sm md:p-8">
            <p className="text-base leading-relaxed text-gray-800 md:text-lg">
              <strong>Bus on rent in India</strong> starts at <strong>₹30/km</strong> for a 22-seater AC mini bus and goes up to <strong>₹65/km</strong> for a 56-seater luxury Volvo coach. Triveni Cabs™ offers <strong>22, 25, 27, 32, 35, 41, 45, 49, 52 and 56 seater AC buses</strong> for hire, all with pushback recliner seats, entertainment systems, GPS tracking and professional drivers. The per-km rate includes the bus, fuel and driver; tolls, state permits, parking and driver night allowance (₹800-1200/day) are extra at actuals. Buses are available across <strong>Delhi, Mumbai, Jaipur, Agra, Chandigarh, Haridwar, Udaipur</strong> and 100+ routes for <strong>weddings, corporate offsites, pilgrimage groups, school trips and tours</strong>. Book in 2 minutes by calling <strong>+91 76685 70551</strong> or on WhatsApp — 4.9★ rated.
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
              Looking for reliable <strong>bus rental services in India</strong>? Triveni Cabs™ offers premium <strong>luxury bus hire</strong> from <strong>22 seater mini buses</strong> to <strong>56 seater Volvo coaches</strong>. Perfect for corporate events, weddings, pilgrimage tours, and group travel.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              Book <strong>AC buses</strong> with <strong>professional drivers</strong> for <strong>Delhi, Mumbai, Jaipur</strong>, and all major routes across India. All vehicles feature pushback seats, entertainment systems, GPS tracking, and spacious luggage storage for comfortable long-distance travel.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FLEET — photo cards + category filter ================= */}
      <Section tone="dark" className="border-t border-white/5">
        <AuroraHeading
          tone="dark"
          eyebrow="The fleet"
          title="Our Luxury Bus Fleet —"
          highlight="22 to 56 Seater"
          subtitle="Explore our premium fleet of AC buses from 22 seater mini buses to 56 seater Volvo coaches. All vehicles feature pushback seats, entertainment systems, and GPS tracking for safe group travel across India."
        />

        {/* Category filter chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {['all', 'standard', 'premium', 'luxury'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-colors duration-200 sm:px-6 ${
                activeFilter === filter
                  ? 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-400/25'
                  : 'glass-dark text-white/75 hover:border-amber-400/40 hover:text-amber-400'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Fleet grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {displayedVehicles.map((bus) => (
            <div
              key={bus.id}
              className={`group glass-dark relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 ${
                bus.popular ? 'glow-gold ring-1 ring-amber-400/40' : ''
              }`}
            >
              {/* Fixed-height photo — no CLS */}
              <div className="relative h-48 w-full overflow-hidden sm:h-52">
                <Image
                  src={bus.image}
                  alt={`${bus.name} — ${bus.capacity}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/90 to-transparent" />
                <div className="absolute right-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-slate-900 shadow-lg sm:text-sm">
                  {bus.ratePerKm}
                </div>
                {(bus.popular || bus.luxury || bus.premium) && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-wide text-amber-400 ring-1 ring-amber-400/40 backdrop-blur-sm">
                    <Star className="h-3 w-3" fill="currentColor" />
                    {bus.luxury ? 'Luxury' : bus.premium ? 'Premium' : 'Popular'}
                  </span>
                )}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  <Users className="h-3.5 w-3.5 text-amber-400" />
                  {bus.capacity}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-black text-white sm:text-xl">{bus.name}</h3>
                <p className="mb-3 mt-0.5 text-sm text-slate-400">
                  <span className="font-bold text-slate-300">Ideal for:</span> {bus.idealFor}
                </p>

                {/* Fare figures — straight from the fleet data */}
                <div className="mb-4 grid grid-cols-2 gap-2">
                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <p className="text-[0.6rem] uppercase tracking-wide text-slate-400">Minimum</p>
                    <p className="mt-0.5 text-xs font-bold text-white">{bus.minimumCharge}</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] p-3">
                    <p className="text-[0.6rem] uppercase tracking-wide text-slate-400">Driver allowance</p>
                    <p className="mt-0.5 text-xs font-bold text-white">{bus.driverAllowance}</p>
                  </div>
                </div>

                {/* Feature chips */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {bus.features.map((f, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10">
                      <CheckCircle className="h-3 w-3 text-emerald-400" />
                      {f}
                    </span>
                  ))}
                </div>

                {/* Book button — full-width tap target on mobile, compact on desktop */}
                <div className="mt-auto">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                      `Hi, I want to book the ${bus.name} (${bus.capacity}). Please share rates and availability.`
                    )}`}
                    onClick={() => trackWhatsAppClick(`bus_fleet_${bus.seaterType || bus.id}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sheen flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-3 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95 lg:w-auto lg:mx-auto lg:px-6 lg:py-2 lg:text-[13px]"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Book {bus.seaterType || bus.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more */}
        {!showAllVehicles && filteredFleet.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAllVehicles(true)}
              className="sheen glow-gold inline-flex items-center gap-3 rounded-full bg-amber-400 px-10 py-4 text-sm font-black uppercase tracking-wider text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
            >
              View All Buses
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </Section>

      {/* ================= SEATER COMPARISON TABLE ================= */}
      <Section tone="dark" pad="sm">
        <AuroraHeading
          tone="dark"
          eyebrow="Compare sizes"
          title="Which bus size should I rent?"
          highlight="22 vs 35 vs 45 vs 56 Seater"
          subtitle="Compare capacity, best use-case and per-km price to pick the right coach for your group size."
        />
        {seaterComparison.length > 0 && (
          <div className="glass-dark mt-10 overflow-hidden rounded-2xl p-1 sm:p-2">
            <DataTable
              tone="dark"
              minWidth={640}
              caption="Comparison of 22, 35, 45 and 56 seater buses by capacity, best use-case, price per km and AC type"
              columns={[
                { key: 'size', label: 'Bus Size' },
                { key: 'capacity', label: 'Capacity' },
                { key: 'bestFor', label: 'Best For' },
                { key: 'pricePerKm', label: 'Price / km' },
                { key: 'ac', label: 'AC Type' },
              ]}
              rows={seaterComparison.map((r) => ({
                ...r,
                size: <span className="font-bold text-white">{r.size}</span>,
                pricePerKm: <span className="font-semibold text-amber-400">{r.pricePerKm}</span>,
              }))}
            />
          </div>
        )}
        {/* Honest cross-sell — smaller groups ride cheaper per seat in a tempo */}
        <p className="mt-5 text-center text-sm text-slate-400">
          For a group of twelve or fewer, a <Link href="/tempo-traveller" className="font-semibold text-amber-400 underline underline-offset-2 hover:text-amber-300">12-seater Tempo Traveller</Link> at ₹23/km may be more economical. Call <a href="tel:+917668570551" onClick={() => trackPhoneCall('bus_hub_comparison')} className="font-semibold text-amber-400 hover:text-amber-300">{PHONE}</a> for a tailored quote.
        </p>
      </Section>

      {/* ================= MID-PAGE CTA STRIP ================= */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
          <div className="glass-dark flex flex-col items-center justify-between gap-6 rounded-3xl px-6 py-8 text-center sm:px-10 md:flex-row md:text-left">
            <div>
              <h2 className="mb-1 text-2xl font-black text-white">
                Not sure which bus fits your group?
              </h2>
              <p className="text-white/70">
                Tell us your group size and route — get an instant all-inclusive quote.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  'Hi, I need a bus on rent. Please help me pick the right size and share a quote.'
                )}`}
                onClick={() => trackWhatsAppClick('bus_hub_midcta')}
                target="_blank"
                rel="noopener noreferrer"
                className="sheen glow-gold inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp Quote
              </a>
              <a
                href="tel:+917668570551"
                onClick={() => trackPhoneCall('bus_hub_midcta')}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Call: +91 76685 70551
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ROUTES — search + origin filter ================= */}
      <Section tone="aurora">
        <AuroraHeading
          tone="dark"
          eyebrow="Popular routes"
          title="Popular Bus Routes"
          highlight="Across India"
          subtitle="Explore our extensive network of bus routes covering Delhi to Agra, Delhi to Jaipur, Mumbai to Goa, and over 100+ destinations. Book luxury coach services for hill stations, heritage tours, and pilgrimage trips."
        />

        {/* Search and origin filter */}
        <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-3 sm:flex-row sm:gap-4">
          <div className="group relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-amber-400" />
            <input
              type="text"
              placeholder="Search your destination…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass-dark w-full rounded-2xl py-4 pl-12 pr-5 font-semibold text-white placeholder:text-slate-500 focus:border-amber-400/60 focus:outline-none"
            />
          </div>
          <div className="group relative sm:w-60">
            <Filter className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-amber-400" />
            <select
              value={selectedOrigin}
              onChange={(e) => setSelectedOrigin(e.target.value)}
              className="glass-dark w-full cursor-pointer appearance-none rounded-2xl bg-slate-950/60 py-4 pl-12 pr-8 font-semibold text-white focus:border-amber-400/60 focus:outline-none"
            >
              <option value="">All Cities</option>
              {originCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-400" />
          </div>
        </div>

        {/* Routes grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {displayedRoutes.map((route, index) => (
            <Link key={`${route.slug}-${index}`} href={`/bus-routes/${route.slug}`} className="group block h-full">
              <div className="glass-dark flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40">
                {/* Route motif */}
                <div className="flex items-center gap-2 text-sm font-black">
                  <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
                  <span className="truncate text-white">{route.origin}</span>
                  <span className="h-px min-w-[12px] flex-1 bg-amber-400/40" aria-hidden />
                  <ArrowRight className="h-4 w-4 shrink-0 text-amber-400" />
                  <span className="truncate text-white transition-colors group-hover:text-amber-400">{route.destination}</span>
                </div>

                <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-amber-400/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-wide text-amber-400 ring-1 ring-amber-400/25">
                  <Sparkles className="h-3 w-3" />
                  {route.type}
                </span>

                <div className="mt-4 space-y-1.5 text-xs text-white/60">
                  <p className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-semibold"><Route className="h-3.5 w-3.5 text-amber-400" /> Distance</span>
                    <span className="font-bold text-white">{route.distance}</span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-semibold"><Clock className="h-3.5 w-3.5 text-amber-400" /> Duration</span>
                    <span className="font-bold text-white">{route.duration}</span>
                  </p>
                </div>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-amber-400 transition-colors group-hover:text-amber-300">
                  Explore Route
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Show more routes */}
        {!showAllRoutes && filteredRoutes.length > 8 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAllRoutes(true)}
              className="glass-dark inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-black uppercase tracking-wider text-white transition-colors hover:border-amber-400/50 hover:text-amber-400"
            >
              View All Routes
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </Section>

      {/* ================= WHY CHOOSE US ================= */}
      <Section tone="dark">
        <AuroraHeading
          tone="dark"
          eyebrow="Why choose us"
          title="Why Choose Our"
          highlight="Bus Rental Service"
          subtitle="Professional drivers, well-maintained vehicles, and transparent pricing make us India’s trusted bus hire company."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((feature, index) => {
            const Icon = WHY_ICONS[feature.icon] || BusIconFallback;
            return (
              <div
                key={index}
                className="glass-dark rounded-3xl p-7 transition-colors duration-300 hover:border-amber-400/40"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-amber-400/15 p-4">
                  <Icon className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="mb-2 text-lg font-black text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ================= ADDITIONAL INFO — pricing & terms ================= */}
      <Section tone="aurora" pad="sm">
        <AuroraHeading
          tone="dark"
          eyebrow="Additional information"
          title="Transparent Bus Hire"
          highlight="Pricing & Terms"
          subtitle="Clear bus rental rates with no hidden charges — pay only for distance traveled and driver allowance."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Route, label: additionalInfo.outstationTrips.label, value: additionalInfo.outstationTrips.value },
            { icon: Clock, label: additionalInfo.driverNightCharge.label, value: additionalInfo.driverNightCharge.value },
            { icon: Shield, label: additionalInfo.extraCharges.label, value: additionalInfo.extraCharges.value },
            { icon: IndianRupee, label: additionalInfo.localUsage.label, value: additionalInfo.localUsage.value },
            { icon: CheckCircle, label: additionalInfo.billing.label, value: additionalInfo.billing.value },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-dark rounded-3xl p-7 transition-colors duration-300 hover:border-amber-400/50"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-amber-400/15 p-3.5">
                <item.icon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="mb-2 text-base font-black text-amber-400">{item.label}</h3>
              <p className="text-sm font-medium leading-relaxed text-slate-300">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= FAQ — two per row on md+, stacked on mobile ================= */}
      <Section tone="light" className="bg-slate-50">
        <AuroraHeading
          eyebrow="Good to know"
          title="Bus Rental"
          highlight="FAQs"
          subtitle="Everything you need to know about our luxury bus hire services."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-6">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              >
                <h3 className="text-sm font-bold text-slate-900 md:text-base">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-amber-500 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-4 md:px-6 md:pb-5">
                  <p className={`text-sm leading-relaxed text-slate-600 md:text-base${index === 0 ? ' speakable-faq-first' : ''}`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <Section tone="aurora" className="border-t border-white/5">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-black text-white md:text-6xl">
            Ready to Start Your <span className="text-gradient-gold">Journey?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
            Book your bus now and experience premium group travel — instant confirmation on call or WhatsApp.
          </p>
          <p className="mt-4 text-sm font-semibold text-white/60">{TRUST_ROW}</p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi, I want to book a bus on rent. Please share rates and availability.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('bus_hub_final')}
              className="sheen glow-gold-lg flex items-center justify-center gap-3 rounded-full bg-amber-400 px-10 py-5 text-lg font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp Us
            </a>
            <a
              href="tel:+917668570551"
              onClick={() => trackPhoneCall('bus_hub_final')}
              className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Phone className="h-6 w-6" />
              Call: +91 76685 70551
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Fallback icon when a whyChooseUs entry carries an unknown icon key.
function BusIconFallback(props) {
  return <Bus {...props} />;
}
