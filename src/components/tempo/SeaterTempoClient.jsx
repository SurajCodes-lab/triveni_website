"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
  Users as FaUsers,
  Luggage as FaLuggage,
  ArrowRight,
} from "@/components/ui/icons";
import QuickEnquiryForm from "@/components/ui/QuickEnquiryForm";
import { SetStickyCta } from "@/components/ui/StickyCtaContext";
import { trackPhoneCall, trackWhatsAppClick } from "@/utilis/analytics";

const PHONE = "7668570551";
const WHATSAPP = "917668570551";

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
    title: "Share your trip",
    text: "Call or WhatsApp your route, dates and group size — we confirm the right fit and availability.",
  },
  {
    title: "Get a clear quote",
    text: "An instant per-km quote with inclusions and any toll/driver-allowance details — no hidden charges.",
  },
  {
    title: "Confirm the booking",
    text: "Approve and confirm with a small advance. We lock in your AC tempo traveller and assign a driver.",
  },
  {
    title: "Travel in comfort",
    text: "Your tempo arrives on time. Enjoy AC comfort, push-back seats and 24/7 support throughout.",
  },
];

function routeLabel(slug) {
  return slug
    .split("-to-")
    .map((p) =>
      p
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    )
    .join(" to ");
}

// Content-safe reveal: animates only the Y transform — content is ALWAYS fully
// visible (no opacity gating), so it can never get stuck hidden if the scroll
// observer or JS doesn't run. Subtle slide-up on scroll-in.
function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function SeaterTempoClient({ data, jsonLd }) {
  const [openFaq, setOpenFaq] = useState(0);

  const waText = `Hi, I want to book a ${data.shortName} tempo traveller. Please share availability and fare.`;
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waText)}`;

  const specStrip = [
    { icon: FaUsers, label: "Capacity", value: data.capacity },
    { icon: FaRupeeSign, label: "Outstation", value: `₹${data.perKm}/km` },
    { icon: FaLuggage, label: "Luggage", value: data.luggage },
    { icon: FaSnowflake, label: "Vehicle", value: data.model },
  ];

  return (
    <div className="bg-[#f6f3ec] text-slate-900">
      <SetStickyCta
        price={`From ₹${data.perKm}/km`}
        label={`${data.shortName} Tempo Traveller`}
        whatsappText={waText}
      />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* ===== HERO — immersive graphite, giant seater numeral signature ===== */}
      <section className="relative overflow-hidden bg-[#0d0f14] text-white">
        {/* ambient glows */}
        <div className="pointer-events-none absolute -top-32 -right-24 h-[34rem] w-[34rem] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:46px_46px]" />

        {/* breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="relative max-w-7xl mx-auto px-4 pt-5 text-sm text-white/45"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-amber-300">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/tempo-traveller" className="hover:text-amber-300">
                Tempo Traveller
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-white/80 font-medium">{data.shortName}</li>
          </ol>
        </nav>

        <div className="relative max-w-7xl mx-auto px-4 pt-8 pb-14 md:pt-12 md:pb-20 grid lg:grid-cols-12 gap-10 items-center">
          {/* copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-amber-300 uppercase">
              {data.popular ? (
                <>
                  <FaStar className="w-3.5 h-3.5" /> Most booked size
                </>
              ) : data.premium ? (
                <>
                  <FaStar className="w-3.5 h-3.5" /> Maharaja luxury edition
                </>
              ) : (
                <>12–26 Seater Fleet · North India</>
              )}
            </div>

            <h1 className="speakable-headline mt-5 text-4xl md:text-6xl font-black leading-[1.02] tracking-tight">
              {data.name}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300">
                on rent with driver
              </span>
            </h1>

            <p className="speakable-lead mt-5 max-w-xl text-lg text-white/65 leading-relaxed">
              {data.tagline}.
            </p>

            {/* price + ctas */}
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <div className="flex items-end gap-1">
                <span className="text-sm text-white/50 mb-1.5">from</span>
                <span className="text-5xl font-black text-white leading-none">
                  ₹{data.perKm}
                </span>
                <span className="text-sm text-white/50 mb-1.5">/km</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE}`}
                  onClick={() => trackPhoneCall("seater_hero")}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950 shadow-[0_8px_30px_-8px_rgba(251,191,36,0.6)] hover:bg-amber-300 transition"
                >
                  <FaPhone className="w-5 h-5" /> Call now
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("seater_hero")}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-bold text-white ring-1 ring-white/15 hover:bg-white/15 transition"
                >
                  <FaWhatsapp className="w-5 h-5 text-green-400" /> WhatsApp
                </a>
              </div>
            </div>

            {/* mini trust */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55">
              <span className="inline-flex items-center gap-1.5">
                <FaStar className="w-4 h-4 text-amber-300" /> 4.9★ rated
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FaSnowflake className="w-4 h-4 text-sky-300" /> AC fleet
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FaUserTie className="w-4 h-4 text-amber-300" /> Driver included
              </span>
            </div>
          </motion.div>

          {/* image + giant numeral signature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* ghost numeral */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-2 md:-right-6 select-none font-black leading-none text-white/[0.06] text-[11rem] md:text-[16rem]"
            >
              {data.seats}
            </div>
            <div className="relative rounded-[1.75rem] overflow-hidden ring-1 ring-white/12 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
              <div className="relative aspect-[16/11]">
                <Image
                  src={data.image}
                  alt={`${data.name} on rent — AC with driver`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              {/* floating spec chip */}
              <div className="absolute left-4 bottom-4 right-4 flex items-center justify-between rounded-2xl bg-black/45 backdrop-blur-md px-4 py-3 ring-1 ring-white/10">
                <div>
                  <div className="text-xs text-white/55">Seating</div>
                  <div className="font-bold text-white">{data.capacity}</div>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div>
                  <div className="text-xs text-white/55">Luggage</div>
                  <div className="font-bold text-white">{data.luggage}</div>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div className="text-right">
                  <div className="text-xs text-white/55">Model</div>
                  <div className="font-bold text-white">{data.seats} Seater</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* spec strip — brochure stat bar */}
        <div className="relative border-t border-white/10 bg-white/[0.03]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {specStrip.map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-5">
                <s.icon className="w-5 h-5 text-amber-300 shrink-0" />
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-wider text-white/40">
                    {s.label}
                  </div>
                  <div className="font-semibold text-white truncate">
                    {s.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO + SPEC SHEET + FORM ===== */}
      <section className="max-w-7xl mx-auto px-4 py-14 md:py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Overview
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-black tracking-tight text-slate-900">
              {data.name} hire in North India
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {data.intro}
            </p>
          </Reveal>

          <Reveal className="mt-10" delay={0.05}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Spec sheet
            </h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-200 shadow-sm">
              {data.specs.map(([label, value], i) => (
                <div key={i} className="bg-white p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-400">
                    {label}
                  </div>
                  <div className="mt-1 font-semibold text-slate-800">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* sticky enquiry on dark card */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 rounded-[1.5rem] bg-[#0d0f14] p-2 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] ring-1 ring-black/5">
            <QuickEnquiryForm pageType={`${data.shortName} Tempo Traveller`} />
          </div>
        </div>
      </section>

      {/* ===== FEATURES + IDEAL FOR (dark band) ===== */}
      <section className="bg-[#0d0f14] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              What you get
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black">
              Built for comfortable group travel
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {data.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/10"
                >
                  <FaCheckCircle className="w-5 h-5 text-amber-300 mt-0.5 shrink-0" />
                  <span className="text-white/80 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              Ideal for
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black">
              When the {data.shortName.toLowerCase()} is the right call
            </h2>
            <ul className="mt-6 space-y-3">
              {data.idealFor.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 border-l-2 border-amber-400/50 pl-4 py-1"
                >
                  <span className="text-white/80">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ===== INCLUSIONS / EXCLUSIONS ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-6">
        <Reveal className="rounded-2xl bg-white p-7 ring-1 ring-emerald-100 shadow-[0_20px_40px_-24px_rgba(16,185,129,0.35)]">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <FaCheckCircle className="w-5 h-5 text-emerald-500" /> Included in the
            fare
          </h2>
          <ul className="mt-5 space-y-2.5">
            {included.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-600">
                <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal
          delay={0.05}
          className="rounded-2xl bg-white p-7 ring-1 ring-rose-100 shadow-[0_20px_40px_-24px_rgba(244,63,94,0.3)]"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <FaTimesCircle className="w-5 h-5 text-rose-400" /> Charged at actuals
          </h2>
          <ul className="mt-5 space-y-2.5">
            {excluded.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-600">
                <FaTimesCircle className="w-4 h-4 text-rose-300 mt-1 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ===== POPULAR ROUTES ===== */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Where groups go
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black text-slate-900">
              Popular {data.shortName} routes
            </h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.routes.map((slug, i) => (
              <Reveal key={slug} delay={(i % 3) * 0.04}>
                <Link
                  href={`/tempo-traveller/${slug}`}
                  className="group flex items-center justify-between gap-2 rounded-2xl bg-[#f6f3ec] px-5 py-4 ring-1 ring-slate-200 hover:ring-orange-300 hover:bg-white hover:shadow-lg transition"
                >
                  <span className="flex items-center gap-3 font-semibold text-slate-800">
                    <span className="grid place-items-center w-9 h-9 rounded-xl bg-orange-500/10 text-orange-600">
                      <FaRoute className="w-4 h-4" />
                    </span>
                    {routeLabel(slug)}
                  </span>
                  <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-0.5 transition" />
                </Link>
              </Reveal>
            ))}
          </div>
          <Link
            href="/tempo-traveller"
            className="mt-7 inline-flex items-center gap-1.5 font-semibold text-orange-600 hover:gap-2.5 transition-all"
          >
            All tempo traveller routes & cities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== HOW TO BOOK ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
            Booking
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-black text-slate-900">
            Four steps to your {data.shortName.toLowerCase()}
          </h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-4 gap-5">
          {howToSteps.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="h-full rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-lg transition">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 font-black text-slate-950">
                    {i + 1}
                  </span>
                  <FaClock className="w-4 h-4 text-slate-300" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== OTHER SEATERS ===== */}
      <section className="bg-[#0d0f14] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              Compare sizes
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black">
              Not the right size?
            </h2>
            <p className="mt-2 max-w-3xl text-white/60">{data.comparison}</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.otherSeaters.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/${s.slug}`}
                  className="group block rounded-2xl bg-white/[0.04] p-5 text-center ring-1 ring-white/10 hover:ring-amber-400/40 hover:bg-white/[0.07] transition"
                >
                  <div className="text-3xl font-black text-white">{s.seats}</div>
                  <div className="text-xs uppercase tracking-wider text-white/40">
                    Seater
                  </div>
                  <div className="mt-2 text-sm font-semibold text-amber-300">
                    From ₹{s.perKm}/km
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/12-seater-vs-17-seater-tempo" className="text-amber-300 hover:underline">
              12 vs 17 seater →
            </Link>
            <Link href="/tempo-vs-bus" className="text-amber-300 hover:underline">
              Tempo vs bus →
            </Link>
            <Link href="/tempo-traveller-vs-mini-bus" className="text-amber-300 hover:underline">
              Tempo vs mini-bus →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <Reveal>
          <h2 className="text-center text-2xl md:text-3xl font-black text-slate-900">
            {data.shortName} tempo traveller — FAQs
          </h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {data.faqs.map((f, i) => (
            <Reveal key={i} delay={(i % 4) * 0.03}>
              <div
                className={`rounded-2xl ring-1 transition ${
                  openFaq === i
                    ? "ring-orange-300 bg-white shadow-lg"
                    : "ring-slate-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span
                    className={`font-semibold text-slate-900 ${
                      i === 0 ? "speakable-faq-first" : ""
                    }`}
                  >
                    {f.question}
                  </span>
                  <FaChevronDown
                    className={`w-5 h-5 text-orange-500 shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                    {f.answer}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-[#0d0f14] text-white">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-80 w-80 rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">
              Book your {data.name}
            </h2>
            <p className="mt-3 text-white/60 text-lg">
              Transparent ₹{data.perKm}/km · AC fleet · experienced drivers ·
              24/7 support
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${PHONE}`}
                onClick={() => trackPhoneCall("seater_footer")}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-3.5 font-bold text-slate-950 shadow-[0_8px_30px_-8px_rgba(251,191,36,0.6)] hover:bg-amber-300 transition"
              >
                <FaPhone className="w-5 h-5" /> Call {PHONE}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("seater_footer")}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 font-bold text-white ring-1 ring-white/15 hover:bg-white/15 transition"
              >
                <FaWhatsapp className="w-5 h-5 text-green-400" /> WhatsApp us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
