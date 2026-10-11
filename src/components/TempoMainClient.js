"use client";

// ============================================================================
// TempoMainClient — "Triveni Aurora" redesign (Aug 2026)
// /tempo-traveller hub: dark slate-950 + gold, real fleet photography,
// glass panels, canonical seater rates (12→₹20 · 16→₹22 · 17→₹24 · 20→₹26 ·
// 26→₹28 per km). Schema, speakable classes and analytics labels preserved.
// ============================================================================

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  WhatsAppIcon as FaWhatsapp,
  Phone as FaPhone,
  CheckCircle as FaCheckCircle,
  XCircle as FaTimesCircle,
  Star as FaStar,
  ChevronDown as FaChevronDown,
  Clock as FaClock,
  Route as FaRoute,
  User as FaUserTie,
  IndianRupee as FaRupeeSign,
  Snowflake as FaSnowflake,
  ArrowRight,
  MapPin,
} from "@/components/ui/icons";
import QuickEnquiryForm from "@/components/ui/QuickEnquiryForm";
import { SetStickyCta } from "@/components/ui/StickyCtaContext";
import Section from "@/components/ui/Section";
import AuroraHeading from "@/components/ui/AuroraHeading";
import DataTable from "@/components/ui/DataTable";
import { trackPhoneCall, trackWhatsAppClick } from "@/utilis/analytics";
import { groupDigits } from '@/utilis/pricing';

const PHONE = "7668570551";
const WHATSAPP = "917668570551";
const TRUST_ROW = "4.9★ · Since 2015 · No hidden charges · Pay after trip";

// Canonical tempo card rates — 12→₹20 · 16→₹22 · 17→₹24 · 20→₹26 · 26→₹28 per km.
const fleet = [
  {
    seats: "12 Seater",
    price: "₹23/km",
    image: "/images/tempo/12_seater.jpg",
    best: "Small families & friend groups",
    features: ["Push-back seats", "AC", "Music system", "Luggage space"],
  },
  {
    seats: "16 Seater",
    price: "₹25/km",
    image: "/images/tempo/16_seater.jpg",
    best: "Bigger families & small tour groups",
    features: ["Push-back seats", "AC", "Music system", "GPS tracking"],
  },
  {
    seats: "17 Seater",
    price: "₹25/km",
    image: "/images/tempo/17_seater.jpg",
    best: "Mid-size groups & corporate outings",
    features: ["Push-back seats", "AC", "Music system", "Extra legroom"],
    popular: true,
  },
  {
    seats: "20 Seater",
    price: "₹26/km",
    image: "/images/tempo/20_seater.jpg",
    best: "Large groups & tours",
    features: ["Push-back seats", "AC", "Music system", "Big luggage area"],
  },
  {
    seats: "26 Seater",
    price: "₹31/km",
    image: "/images/tempo/26_seater.jpg",
    best: "Very large groups & events",
    features: ["Push-back seats", "AC", "Music system", "Maximum capacity"],
  },
];

const seaterRows = [
  {
    size: "12 Seater",
    capacity: "Up to 11 + driver",
    bestFor: "Families, small friend groups",
    price: "From ₹23/km",
    popular: "Delhi to Agra, Vrindavan",
  },
  {
    size: "16 Seater",
    capacity: "Up to 15 + driver",
    bestFor: "Bigger families, society groups",
    price: "From ₹22/km",
    popular: "Delhi to Rishikesh, Agra",
  },
  {
    size: "17 Seater",
    capacity: "Up to 16 + driver",
    bestFor: "Corporate outings, mid groups",
    price: "From ₹25/km",
    popular: "Delhi to Jaipur, Haridwar",
  },
  {
    size: "20 Seater",
    capacity: "Up to 19 + driver",
    bestFor: "Large tour groups, schools",
    price: "From ₹26/km",
    popular: "Chardham Yatra, Manali",
  },
  {
    size: "26 Seater",
    capacity: "Up to 25 + driver",
    bestFor: "Weddings, big events",
    price: "From ₹28/km",
    popular: "Baraat, large pilgrimages",
  },
];

const included = [
  "Experienced, verified driver",
  "Fuel for the entire trip",
  "Air conditioning throughout",
  "Push-back seats & music system",
  "GST invoice on request",
  "24/7 customer support",
];

const excluded = [
  "Tolls, parking & state taxes (at actuals)",
  "Driver allowance for overnight trips",
  "Night-driving charge after 11 PM",
  "Monument / entry tickets",
  "Meals & accommodation for guests",
  "Anything not listed under inclusions",
];

const howToSteps = [
  {
    title: "Share your trip details",
    text: "Call or WhatsApp us with your route, travel dates, and group size so we can recommend the right seater.",
  },
  {
    title: "Get a transparent quote",
    text: "Receive an instant per-km quote with the vehicle size, inclusions, and toll/driver-allowance details — no hidden charges.",
  },
  {
    title: "Confirm your booking",
    text: "Approve the quote and confirm with a small advance. We lock in your AC tempo traveller and assign an experienced driver.",
  },
  {
    title: "Travel comfortably",
    text: "Your tempo traveller arrives on time. Enjoy AC comfort, push-back seats, and 24/7 support throughout the journey.",
  },
];

const popularRoutes = [
  { label: "Delhi to Agra", href: "/tempo-traveller/delhi-to-agra" },
  { label: "Delhi to Jaipur", href: "/tempo-traveller/delhi-to-jaipur" },
  { label: "Delhi to Manali", href: "/tempo-traveller/delhi-to-manali" },
  { label: "Delhi to Shimla", href: "/tempo-traveller/delhi-to-shimla" },
  { label: "Delhi to Haridwar", href: "/tempo-traveller/delhi-to-haridwar" },
  { label: "Delhi to Rishikesh", href: "/tempo-traveller/delhi-to-rishikesh" },
  { label: "Delhi to Nainital", href: "/tempo-traveller/delhi-to-nainital" },
  { label: "Delhi to Vrindavan", href: "/tempo-traveller/delhi-to-vrindavan" },
  { label: "Delhi to Amritsar", href: "/tempo-traveller/delhi-to-amritsar" },
  {
    label: "Delhi to Chandigarh",
    href: "/tempo-traveller/delhi-to-chandigarh",
  },
  { label: "Delhi to Dehradun", href: "/tempo-traveller/delhi-to-dehradun" },
];

const popularCities = [
  { label: "Delhi", href: "/tempo-traveller/delhi" },
  { label: "Agra", href: "/tempo-traveller/agra" },
  { label: "Jaipur", href: "/tempo-traveller/jaipur" },
  { label: "Mathura", href: "/tempo-traveller/mathura" },
  { label: "Vrindavan", href: "/tempo-traveller/vrindavan" },
  { label: "Rishikesh", href: "/tempo-traveller/rishikesh" },
  { label: "Haridwar", href: "/tempo-traveller/haridwar" },
  { label: "Manali", href: "/tempo-traveller/manali" },
  { label: "Shimla", href: "/tempo-traveller/shimla" },
  { label: "Dehradun", href: "/tempo-traveller/dehradun" },
  { label: "Nainital", href: "/tempo-traveller/nainital" },
  { label: "Amritsar", href: "/tempo-traveller/amritsar" },
];

const relatedLinks = [
  {
    label: "Chardham Yatra by Tempo",
    href: "/chardham-yatra",
    desc: "Group pilgrimage packages",
  },
  {
    label: "12 vs 17 Seater Tempo",
    href: "/12-seater-vs-17-seater-tempo",
    desc: "Which size is right for you",
  },
  {
    label: "Tempo Traveller vs Bus",
    href: "/tempo-vs-bus",
    desc: "Compare cost & comfort",
  },
  {
    label: "Bus Routes & Hire",
    href: "/bus-routes",
    desc: "27-49 seater coaches",
  },
  {
    label: "Wedding Transportation",
    href: "/wedding",
    desc: "Baraat & guest fleet",
  },
];

const trustPoints = [
  {
    icon: FaUserTie,
    title: "Expert hill & highway drivers",
    text: "Verified, route-trained drivers experienced on Chardham, Himachal, and Rajasthan circuits.",
  },
  {
    icon: FaRupeeSign,
    title: "Transparent per-km pricing",
    text: "Clear per-km quotes with tolls and driver allowance stated upfront — no surprise charges.",
  },
  {
    icon: FaSnowflake,
    title: "Clean, AC, well-maintained fleet",
    text: "Sanitised 12-26 seaters with push-back seats, music systems, and ample luggage space.",
  },
  {
    icon: FaClock,
    title: "24/7 support & on-time pick-up",
    text: "Round-the-clock assistance and punctual arrivals so your group never waits.",
  },
];

export default function TempoMainClient({ faqData = [], jsonLd }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SetStickyCta price="From ₹23/km" label="Tempo Traveller Hire" whatsappText="Hi, I want to book a Tempo Traveller. Please share availability and fare." />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* ================= HERO — real fleet photo + Aurora scrim ================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/images/tempo/17_seater.jpg"
            alt="AC Tempo Traveller on Rent — 12 to 26 seater with driver"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
          <div className="absolute -top-32 right-10 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="min-w-0">
              <div className="glass-dark mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white/85 sm:text-sm">
                <FaStar className="h-3.5 w-3.5 text-amber-400" fill="currentColor" />
                4.9 Rating · 10,000+ Happy Travellers
              </div>
              <h1 className="speakable-headline font-display-serif text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-gradient-gold">Tempo Traveller</span> on Rent
                <span className="mt-2 block text-lg font-bold text-white/75 sm:text-2xl">
                  12–26 Seater AC · Driver &amp; Fuel Included · From ₹23/km
                </span>
              </h1>
              <p className="speakable-lead mt-5 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
                Hire a 12, 17, 20, or 26 seater AC tempo traveller with an
                experienced driver from just ₹23/km across Delhi NCR, Agra,
                Jaipur, Himachal, and the Chardham circuit. Fuel, driver, and AC
                are included, with transparent pricing and 24/7 support.
              </p>
              <p className="mt-4 text-xs font-semibold tracking-wide text-white/70 sm:text-sm">
                {TRUST_ROW}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    "Hi, I want to hire an AC tempo traveller. Please share rates."
                  )}`}
                  onClick={() => trackWhatsAppClick("tempo_hub_hero")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sheen glow-gold inline-flex items-center gap-2.5 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95 sm:text-base"
                >
                  <FaWhatsapp className="h-5 w-5" /> WhatsApp
                </a>
                <a
                  href={`tel:${PHONE}`}
                  onClick={() => trackPhoneCall("tempo_hub_hero")}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:text-base"
                >
                  <FaPhone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>

            {/* Enquiry form — QuickEnquiryForm is dark-only, sits on glass */}
            <div className="border-gradient-gold glass-dark rounded-3xl p-4 sm:p-5">
              <QuickEnquiryForm pageType="tempo" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FLEET — five photo cards ================= */}
      <Section tone="dark" className="border-t border-white/5">
        <AuroraHeading
          tone="dark"
          eyebrow="The fleet"
          title="Our Tempo Traveller"
          highlight="Fleet"
          subtitle="Choose the perfect size for your group. All vehicles are air-conditioned and come with experienced drivers."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 sm:gap-6 lg:gap-4">
          {fleet.map((v) => (
            <div
              key={v.seats}
              className={`group glass-dark relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 ${
                v.popular ? "glow-gold ring-1 ring-amber-400/40" : ""
              }`}
            >
              {/* Fixed-height photo — no CLS */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={v.image}
                  alt={`${v.seats} Tempo Traveller`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/90 to-transparent" />
                <div className="absolute right-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-sm font-black text-slate-900 shadow-lg">
                  {v.price}
                </div>
                {v.popular && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-wide text-amber-400 ring-1 ring-amber-400/40 backdrop-blur-sm">
                    <FaStar className="h-3 w-3" fill="currentColor" /> Popular
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-black text-white">{v.seats}</h3>
                <p className="mb-4 mt-0.5 text-sm text-slate-400">{v.best}</p>
                <ul className="mb-5 space-y-2">
                  {v.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <FaCheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                      `Hi, I want to book a ${v.seats} tempo traveller (${v.price}). Please share availability.`
                    )}`}
                    onClick={() => trackWhatsAppClick(`tempo_fleet_${v.seats}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sheen flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-3 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95 lg:w-auto lg:mx-auto lg:px-5 lg:py-2 lg:text-[13px]"
                  >
                    <FaWhatsapp className="h-4 w-4" /> Book {v.seats}
                  </a>
                  <Link
                    href={`/${v.seats.toLowerCase().replace(/\s+/g, "-")}-tempo-traveller`}
                    className="mt-2.5 flex w-full items-center justify-center gap-1 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
                  >
                    View {v.seats} details &amp; routes
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seater capacity chips — canonical rates */}
        <div className="mt-10 text-center">
          <p className="mb-3 text-sm font-semibold text-slate-400">
            Browse tempo travellers by seating capacity
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              ["12", "20"],
              ["16", "22"],
              ["17", "24"],
              ["20", "26"],
              ["26", "28"],
            ].map(([s, p]) => (
              <Link
                key={s}
                href={`/${s}-seater-tempo-traveller`}
                className="glass-dark inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-amber-400/50 hover:text-amber-400"
              >
                {s} Seater
                <span className="text-amber-400">₹{groupDigits(p)}/km</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= PRICE / COST DIRECT ANSWER ================= */}
      <Section tone="aurora" pad="sm">
        <div className="mx-auto max-w-4xl">
          <div className="border-gradient-gold glass-dark rounded-3xl p-6 sm:p-9">
            <span className="mb-3 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-amber-400 sm:text-xs">
              <span className="h-px w-6 bg-amber-400/60" />
              Pricing
            </span>
            <h2 className="mb-4 text-2xl font-black text-white sm:text-3xl">
              How much does a tempo traveller cost per km?
            </h2>
            <p className="mb-4 leading-relaxed text-slate-300/90">
              A tempo traveller on rent in North India costs between{" "}
              <strong className="text-amber-400">₹23/km and ₹31/km</strong> depending on the seater size: a
              12-seater starts at ₹23/km, a 17-seater at ₹25/km, a 20-seater at
              ₹31/km, and a 26-seater at ₹31/km. These rates include the vehicle,
              fuel, air conditioning, and an experienced driver. For outstation
              trips a minimum of 250 km per day applies, and tolls, parking, state
              taxes, and overnight driver allowance are billed separately or
              bundled into an all-inclusive package on request.
            </p>
            <p className="leading-relaxed text-slate-300/90">
              Local same-city tempo traveller hire (for sightseeing, weddings, or
              corporate transfers) is offered on an hourly or fixed-package basis.
              Whatever your plan, we share a transparent quote in advance so you
              know the exact cost before you confirm.
            </p>
          </div>
        </div>
      </Section>

      {/* ================= MID-PAGE CTA STRIP ================= */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
          <div className="glass-dark flex flex-col items-center justify-between gap-6 rounded-3xl px-6 py-8 text-center sm:px-10 md:flex-row md:text-left">
            <div>
              <h2 className="mb-1 text-2xl font-black text-white">
                Get your exact tempo traveller quote now
              </h2>
              <p className="text-white/70">
                Instant per-km pricing with fuel, driver &amp; AC included.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Hi, please send me a tempo traveller quote."
                )}`}
                onClick={() => trackWhatsAppClick("tempo_hub_midcta")}
                target="_blank"
                rel="noopener noreferrer"
                className="sheen glow-gold inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
              >
                <FaWhatsapp className="h-4 w-4" /> WhatsApp Quote
              </a>
              <a
                href={`tel:${PHONE}`}
                onClick={() => trackPhoneCall("tempo_hub_midcta")}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <FaPhone className="h-4 w-4" /> Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEATER COMPARISON TABLE ================= */}
      <Section tone="dark" pad="sm" id="seater-comparison">
        <AuroraHeading
          tone="dark"
          eyebrow="Compare sizes"
          title="Which tempo traveller seater"
          highlight="should I choose?"
          subtitle="Compare the 12, 16, 17, 20, and 26 seater tempo travellers by capacity, best use, and price per km to pick the right vehicle for your group."
        />
        <div className="glass-dark mt-10 overflow-hidden rounded-2xl p-1 sm:p-2">
          <DataTable
            tone="dark"
            minWidth={640}
            caption="Tempo traveller seater comparison — capacity, best use and per-km price"
            columns={[
              { key: "size", label: "Seater" },
              { key: "capacity", label: "Capacity" },
              { key: "bestFor", label: "Best For" },
              { key: "price", label: "Price / km" },
              { key: "popular", label: "Popular Trips" },
            ]}
            rows={seaterRows.map((r) => ({
              ...r,
              size: <span className="font-bold text-white">{r.size}</span>,
              price: <span className="font-semibold text-amber-400">{r.price}</span>,
            }))}
          />
        </div>
      </Section>

      {/* ================= WHAT'S INCLUDED / EXCLUDED ================= */}
      <Section tone="dark" pad="sm">
        <AuroraHeading
          tone="dark"
          eyebrow="No surprises"
          title="What's included in your"
          highlight="tempo traveller fare"
          subtitle="Know exactly what you pay for. Everything below is confirmed in your quote before booking."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="glass-dark rounded-3xl border-emerald-400/20 p-6 sm:p-7">
            <h3 className="mb-4 text-xl font-black text-white">Included</h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <FaCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-dark rounded-3xl border-rose-400/20 p-6 sm:p-7">
            <h3 className="mb-4 text-xl font-black text-white">
              Not Included
            </h3>
            <ul className="space-y-3">
              {excluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <FaTimesCircle className="mt-1 h-4 w-4 shrink-0 text-rose-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ================= HOW TO BOOK ================= */}
      <Section tone="dark" pad="sm">
        <AuroraHeading
          tone="dark"
          eyebrow="Four simple steps"
          title="How to book a"
          highlight="tempo traveller"
          subtitle="Booking your AC tempo traveller with a driver takes just a few minutes."
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howToSteps.map((s, i) => (
            <li
              key={s.title}
              className="glass-dark relative rounded-3xl p-6 transition-colors duration-300 hover:border-amber-400/40"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-black text-slate-900">
                {i + 1}
              </div>
              <h3 className="mb-2 font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ================= WHY TEMPO / TRUST ================= */}
      <Section tone="aurora">
        <AuroraHeading
          tone="dark"
          eyebrow="Why Triveni Cabs™"
          title="Why book your tempo traveller"
          highlight="with Triveni Cabs™"
          subtitle="Trusted by 10,000+ travellers for group trips, weddings, and pilgrimages across North India."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="glass-dark rounded-3xl p-6 transition-colors duration-300 hover:border-amber-400/40"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-amber-400/15 p-3">
                  <Icon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="mb-2 font-bold text-white">{t.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{t.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ================= POPULAR ROUTES & CITIES ================= */}
      <Section tone="dark">
        <div className="mb-10">
          <h2 className="mb-3 flex items-center gap-3 text-3xl font-black text-white">
            <FaRoute className="h-7 w-7 text-amber-400" /> Popular tempo traveller
            routes
          </h2>
          <p className="text-slate-400">
            One-way and round-trip tempo traveller packages on North
            India’s most-booked routes.
          </p>
        </div>
        <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popularRoutes.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="glass-dark flex items-center justify-between rounded-xl px-4 py-3.5 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-amber-400/40 hover:text-amber-400"
            >
              <span className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
                {r.label}
              </span>
              <ArrowRight className="h-4 w-4 text-amber-400" />
            </Link>
          ))}
        </div>

        <h3 className="mb-5 text-2xl font-black text-white">
          Tempo traveller hire by city
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {popularCities.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="glass-dark rounded-full px-4 py-2 text-sm font-medium text-white/85 transition-colors hover:border-amber-400/50 hover:text-amber-400"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* ================= RELATED LINKS ================= */}
      <Section tone="dark" pad="sm" className="border-t border-white/5">
        <AuroraHeading
          tone="dark"
          eyebrow="More from Triveni"
          title="Explore related"
          highlight="services"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group glass-dark rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-amber-400/40"
            >
              <h3 className="mb-1 font-bold text-white transition-colors group-hover:text-amber-400">{l.label}</h3>
              <p className="text-sm text-slate-400">{l.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ================= FAQ ================= */}
      <Section tone="dark" width="narrow">
        <AuroraHeading
          tone="dark"
          eyebrow="Good to know"
          title="Frequently Asked"
          highlight="Questions"
        />
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:items-start">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className="glass-dark overflow-hidden rounded-2xl transition-colors hover:border-amber-400/30"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-white"
              >
                {faq.question}
                <FaChevronDown
                  className={`h-4 w-4 shrink-0 text-amber-400 transition-transform duration-200 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <div
                  className={`px-5 pb-5 leading-relaxed text-slate-300 ${
                    i === 0 ? "speakable-faq-first" : ""
                  }`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              "Hi, I have a question about tempo traveller hire."
            )}`}
            onClick={() => trackWhatsAppClick("tempo_hub_faq")}
            target="_blank"
            rel="noopener noreferrer"
            className="sheen glow-gold inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
          >
            <FaWhatsapp className="h-4 w-4" /> WhatsApp Us
          </a>
          <a
            href={`tel:${PHONE}`}
            onClick={() => trackPhoneCall("tempo_hub_faq")}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <FaPhone className="h-4 w-4" /> Call {PHONE}
          </a>
        </div>
        <p className="mt-8 text-center text-xs font-semibold text-white/50">{TRUST_ROW}</p>
      </Section>
    </div>
  );
}
