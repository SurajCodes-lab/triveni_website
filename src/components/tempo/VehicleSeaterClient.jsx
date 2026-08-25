// src/components/tempo/VehicleSeaterClient.jsx
"use client";
//
// Premium single-seater design for the per-seater vehicle pages
// (Tempo Traveller / Force Urbania / Maharaja Tempo Traveller).
// Same dark editorial-luxe language as VehicleTypeClient.jsx, focused on ONE
// seater variant per page.

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone as FaPhone,
  MessageCircle as FaWhatsapp,
  CheckCircle as FaCheckCircle,
  Star as FaStar,
  ChevronDown as FaChevronDown,
  Clock as FaClock,
  Users as FaUsers,
  Snowflake as FaSnowflake,
  Route as FaRoute,
  Receipt as FaReceipt,
  Crown as FaCrown,
  Sparkles as FaSparkles,
  Gauge as FaGauge,
  ShieldCheck as FaShieldCheck,
  Heart as FaHeart,
  Building2 as FaBuilding2,
  Mountain as FaMountain,
  Plane as FaPlane,
  ArrowRight as FaArrowRight,
  MapPin as FaMapPin,
  Luggage as FaLuggage,
  Fuel as FaFuel,
  Zap as FaZap,
} from "@/components/ui/icons";
import { SetStickyCta } from "@/components/ui/StickyCtaContext";
import { trackPhoneCall, trackWhatsAppClick } from "@/utilis/analytics";
import { cn } from "@/utilis/cn";
import { PopularRoutes, Testimonials } from "./vehicleDemoShared";

const PHONE = "7668570551";
const WHATSAPP = "917668570551";
const ease = [0.22, 1, 0.36, 1];

const USP_ICONS = {
  Users: FaUsers, Snowflake: FaSnowflake, Route: FaRoute, Receipt: FaReceipt,
  Crown: FaCrown, Sparkles: FaSparkles, Gauge: FaGauge, ShieldCheck: FaShieldCheck,
};
const USECASE_ICONS = {
  Heart: FaHeart, Building2: FaBuilding2, Users: FaUsers,
  Mountain: FaMountain, Plane: FaPlane, Crown: FaCrown,
};

const included = [
  "Experienced, verified driver",
  "Fuel for the entire trip",
  "Air conditioning throughout",
  "Premium / push-back seats",
  "GST invoice on request",
  "24/7 customer support",
];
const excluded = [
  "Tolls, parking & state taxes (at actuals)",
  "Driver allowance for overnight trips",
  "Night-driving charge after 11 PM",
  "Monument / entry tickets",
  "Meals & accommodation for guests",
];
const howToSteps = [
  { title: "Share your trip", text: "Call or WhatsApp your route, dates and group size — we confirm availability and the right fit." },
  { title: "Get a clear quote", text: "An instant per-km quote with inclusions and any toll/driver-allowance details — no hidden charges." },
  { title: "Confirm the booking", text: "Approve and confirm with a small advance. We lock in your AC vehicle and assign an experienced driver." },
  { title: "Travel in comfort", text: "Your vehicle arrives on time. Enjoy AC comfort, premium seats and 24/7 support throughout." },
];

function Stars({ className = "" }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label="4.9 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => <FaStar key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
    </span>
  );
}

function CtaButtons({ variant = "light", label }) {
  const waText = encodeURIComponent(`Hi Triveni Cabs, I'd like to book the ${label || "vehicle"}. Please share the quote.`);
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={`tel:+${PHONE}`}
        onClick={() => trackPhoneCall(`seater-${label || "vehicle"}`)}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 px-6 py-3.5 text-sm font-bold text-[#070B16] shadow-[0_12px_30px_-10px_rgba(245,184,46,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(245,184,46,0.8)]"
      >
        <FaPhone className="h-4 w-4" /> Call {PHONE}
      </a>
      <a
        href={`https://wa.me/${WHATSAPP}?text=${waText}`}
        target="_blank" rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(`seater-${label || "vehicle"}`)}
        className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
      >
        <FaWhatsapp className="h-4 w-4" /> WhatsApp Us
      </a>
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400/60" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">{children}</span>
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-400/60" />
    </div>
  );
}

function SectionHeading({ kicker, title, desc, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease }}
      className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left")}
    >
      {align === "center" ? <div className="flex justify-center"><Eyebrow>{kicker}</Eyebrow></div> : <Eyebrow>{kicker}</Eyebrow>}
      <h2 className="font-display-serif mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight">{title}</h2>
      {desc && <p className="mt-4 text-white/60 leading-relaxed">{desc}</p>}
    </motion.div>
  );
}

function Aurora({ className, color, style }) {
  return <div className={cn("pointer-events-none absolute rounded-full blur-[100px]", className)} style={{ background: color, ...style }} />;
}

export default function VehicleSeaterClient({ data, jsonLd }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="relative bg-[#070B16] text-white selection:bg-amber-400 selection:text-[#070B16] overflow-hidden">
      <SetStickyCta
        price={`₹${data.perKm}/km`}
        label={`Book ${data.name}`}
        whatsappText={`Hi Triveni Cabs, I'd like to book the ${data.name}. Please share the quote.`}
      />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: `radial-gradient(55% 50% at 12% 8%, ${data.accent}33 0%, transparent 60%), radial-gradient(45% 45% at 95% 15%, #1e3a8a33 0%, transparent 55%), radial-gradient(60% 60% at 55% 110%, ${data.accent}22 0%, transparent 60%)` }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "64px 64px" }}
        />
        <Aurora className="-z-10 h-72 w-72" color={`${data.accent}55`} style={{ top: "8%", left: "-4%", opacity: 0.5 }} />
        <Aurora className="-z-10 h-80 w-80" color="#1e3a8a66" style={{ top: "30%", right: "-6%", opacity: 0.4 }} />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-10 pb-24 lg:pt-16 lg:pb-32">
          <nav className="mb-9 flex flex-wrap items-center gap-1.5 text-xs text-white/45">
            <Link href="/" className="hover:text-amber-300">Home</Link>
            <span>/</span>
            <Link href={data.typeSlugHref} className="hover:text-amber-300">{data.typeShortName}</Link>
            <span>/</span>
            <span className="text-white/80">{data.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-200 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                {data.kicker}
              </span>
              <h1 className="speakable-headline font-display-serif mt-6 text-4xl sm:text-5xl lg:text-[4.2rem] font-bold leading-[1.02] tracking-tight">
                <span className="bg-gradient-to-br from-white via-white to-amber-200/80 bg-clip-text text-transparent">{data.heroTitle}</span>
              </h1>
              <p className="speakable-lead mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/65">{data.heroSubtitle}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-baseline gap-1.5 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5">
                  <span className="text-3xl font-bold bg-gradient-to-br from-amber-300 to-orange-500 bg-clip-text text-transparent">₹{data.perKm}</span>
                  <span className="text-sm text-white/55">/km onwards</span>
                </div>
                <div className="flex items-center gap-2"><Stars /><span className="text-sm text-white/65">4.9 · 10,000+ trips</span></div>
              </div>

              <div className="mt-8"><CtaButtons variant="light" label={data.slug} /></div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/50">
                <span className="inline-flex items-center gap-1.5"><FaCheckCircle className="h-3.5 w-3.5 text-amber-400" /> Driver included</span>
                <span className="inline-flex items-center gap-1.5"><FaCheckCircle className="h-3.5 w-3.5 text-amber-400" /> Fully AC</span>
                <span className="inline-flex items-center gap-1.5"><FaCheckCircle className="h-3.5 w-3.5 text-amber-400" /> No surge pricing</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 1, scale: 0.95, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.1 }} className="relative">
              <div className="absolute -inset-8 -z-10 rounded-full blur-3xl opacity-50" style={{ background: `linear-gradient(135deg, ${data.accent}, transparent 70%)` }} />
              <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-inset ring-white/15 bg-white/[0.04] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] backdrop-blur">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={data.heroImage} alt={`${data.name} — Triveni Cabs`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-[#070B16]/15 to-transparent" />
                </div>
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gradient-to-br from-amber-300 to-orange-500 px-3 py-1 text-xs font-bold text-[#070B16] shadow-lg">{data.name}</span>
                  {data.premium && <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#070B16] shadow-lg"><FaCrown className="h-3 w-3" /> Luxury spec</span>}
                </div>
                <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-white/5">
                  <Spec icon={FaUsers} label="Seats" value={`${data.seats}`} />
                  <Spec icon={FaLuggage} label="Luggage" value={data.luggage.split(" ")[0]} />
                  <Spec icon={FaSnowflake} label="AC" value="Yes" />
                </div>
              </div>

              <motion.div initial={{ opacity: 0, y: 18, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, ease, delay: 0.5 }} className="absolute -bottom-6 -left-3 sm:-left-6 z-10 rounded-2xl border border-white/15 bg-[#070B16]/80 p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="font-display-serif text-3xl font-bold leading-none bg-gradient-to-br from-amber-300 to-orange-500 bg-clip-text text-transparent">4.9</div>
                  <div><Stars /><div className="mt-0.5 text-[11px] text-white/55">10,000+ trips</div></div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.6 }} className="absolute -top-4 -right-3 sm:-right-5 z-10 rounded-full border border-amber-400/30 bg-[#070B16]/80 px-4 py-2 shadow-2xl backdrop-blur-xl">
                <span className="text-xs text-white/55">from </span><span className="text-sm font-bold text-amber-300">₹{data.perKm}/km</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      {/* ============================ STATS ============================ */}
      <section className="relative border-y border-white/[0.07] bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-white/[0.07] lg:divide-x">
            {data.stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, ease, delay: i * 0.06 }} className="relative px-6 py-9 text-center lg:text-left">
                <div className="font-display-serif text-4xl sm:text-5xl font-bold leading-none">
                  <span className="bg-gradient-to-br from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent">{s.value}</span>
                </div>
                <div className="mt-2 text-sm text-white/55">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ ABOUT + IDEAL FOR ============================ */}
      <section className="relative py-24 lg:py-32">
        <Aurora className="h-72 w-72" color={`${data.accent}33`} style={{ top: "10%", right: "-5%" }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <SectionHeading align="left" kicker="About this vehicle" title={`The ${data.name}`} />
            <p className="mt-6 text-white/65 leading-relaxed text-[15px]">{data.intro}</p>
            <div className="mt-8"><CtaButtons variant="light" label={data.slug} /></div>
          </div>
          <div>
            <SectionHeading align="left" kicker="Ideal for" title="Who should book this" />
            <ul className="mt-6 space-y-3">
              {data.idealFor.map((x, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, ease, delay: i * 0.04 }}
                  className="flex items-start gap-3 rounded-2xl ring-1 ring-inset ring-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white/80 transition-colors hover:ring-amber-400/30"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/20"><FaCheckCircle className="h-4 w-4 text-amber-400" /></span>
                  {x}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================ USP BENTO ============================ */}
      <section className="relative py-24 lg:py-32 bg-white/[0.025] border-y border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading kicker="Why this vehicle" title={data.whyChooseTitle} desc={data.tagline} />
          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {data.usps.map((u, i) => {
              const Icon = USP_ICONS[u.icon] || FaZap;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease, delay: i * 0.06 }} className="group relative overflow-hidden rounded-[2rem] ring-1 ring-inset ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 transition-all duration-500 hover:ring-amber-400/40 hover:-translate-y-1.5 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.9)]">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30" style={{ background: data.accent }} />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/25 to-orange-500/10 ring-1 ring-amber-400/25 text-amber-300"><Icon className="h-7 w-7" /></div>
                  <h3 className="font-display-serif mt-6 text-2xl font-bold leading-tight">{u.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">{u.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ SPECS + FEATURES + PRICING ============================ */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <SectionHeading align="left" kicker="What's onboard" title="Everything included, nothing hidden" desc="A consistent standard across the fleet — every vehicle ships with the same comfort kit." />
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {data.features.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, ease, delay: i * 0.04 }} className="flex items-center gap-3 rounded-2xl ring-1 ring-inset ring-white/10 bg-white/[0.03] px-4 py-3.5 transition-colors hover:ring-amber-400/30">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400/15 ring-1 ring-amber-400/20"><FaCheckCircle className="h-4 w-4 text-amber-400" /></span>
                  <span className="text-sm text-white/80">{f}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl ring-1 ring-inset ring-emerald-400/25 bg-gradient-to-b from-emerald-400/[0.07] to-transparent p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">Included</div>
                <ul className="mt-3 space-y-2">
                  {included.map((x) => (<li key={x} className="flex gap-2 text-sm text-white/75"><FaCheckCircle className="h-4 w-4 shrink-0 text-emerald-400" /> {x}</li>))}
                </ul>
              </div>
              <div className="rounded-2xl ring-1 ring-inset ring-white/10 bg-white/[0.03] p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">At actuals / excluded</div>
                <ul className="mt-3 space-y-2">
                  {excluded.map((x) => (<li key={x} className="flex gap-2 text-sm text-white/55"><FaCheckCircle className="h-4 w-4 shrink-0 text-white/25" /> {x}</li>))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading align="left" kicker="Pricing & specs" title="Transparent ₹/km — quoted before you pay" desc={data.comparison} />
            <div className="mt-8 overflow-hidden rounded-[2rem] ring-1 ring-inset ring-white/10 bg-[#0B1224] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
              <dl className="divide-y divide-white/[0.07]">
                {data.specs.map(([k, v]) => (
                  <div key={k} className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-white/[0.03]">
                    <dt className="text-sm text-white/50">{k}</dt>
                    <dd className="text-sm font-semibold text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ USE CASES ============================ */}
      <section className="relative py-24 lg:py-32 bg-white/[0.025] border-y border-white/[0.07]">
        <Aurora className="h-72 w-72" color="#1e3a8a44" style={{ bottom: "5%", left: "-4%" }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading kicker="Built for" title="One vehicle, every kind of group trip" />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.useCases.map((u, i) => {
              const Icon = USECASE_ICONS[u.icon] || FaZap;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, ease, delay: i * 0.05 }} className="group rounded-3xl ring-1 ring-inset ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:ring-amber-400/40">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/10 ring-1 ring-amber-400/20 text-amber-300 transition-transform duration-500 group-hover:scale-110"><Icon className="h-7 w-7" /></div>
                  <div className="mt-4 font-semibold">{u.label}</div>
                  <div className="mt-1 text-xs text-white/50">{u.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ GALLERY ============================ */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading kicker="The fleet" title="Real vehicles, real comfort" />
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {data.gallery.map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease, delay: i * 0.06 }} className={cn("group relative overflow-hidden rounded-[1.75rem] ring-1 ring-inset ring-white/10 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.9)]", i === 0 && "sm:col-span-2 sm:row-span-2")}>
                <div className={cn("relative w-full overflow-hidden", i === 0 ? "aspect-[16/10] sm:aspect-[4/5] lg:aspect-square" : "aspect-[4/3]")}>
                  <Image src={g} alt={`${data.type} fleet photo ${i + 1}`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B16]/60 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ TESTIMONIALS ============================ */}
      <section className="relative py-24 lg:py-32 bg-white/[0.025] border-y border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading kicker="What groups say" title="Trusted by 10,000+ group trips" desc="Families, wedding planners, corporate teams and pilgrimage groups — real feedback from real bookings." />
          <div className="mt-14"><Testimonials accent={data.accent} /></div>
        </div>
      </section>

      {/* ============================ CITY COVERAGE ============================ */}
      <section className="relative py-24 lg:py-32">
        <Aurora className="h-72 w-72" color={`${data.accent}33`} style={{ top: "12%", left: "-4%" }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading kicker="Where we operate" title="Available across 50+ cities" desc="City-wise landing pages for every variant are being rolled out per the SEO expansion plan." />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {data.cities.map((c, i) => (
              <motion.span key={c} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, ease, delay: (i % 10) * 0.03 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.07] hover:text-white">
                <FaMapPin className="h-3.5 w-3.5 text-amber-400" />{c}
              </motion.span>
            ))}
          </div>

          <PopularRoutes routes={data.routes} accent={data.accent} limit={6} title="Popular Delhi-origin routes" />

          <div className="mt-10 rounded-[2rem] ring-1 ring-inset ring-white/10 bg-[#0B1224] p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/15 ring-1 ring-amber-400/20 text-amber-300"><FaRoute className="h-5 w-5" /></span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">All Delhi-origin routes</span>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
              {data.routes.map((r) => (
                <Link key={r} href={`/${r}`} className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-amber-300">
                  <span className="capitalize">{r.split("-to-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" → ")}</span>
                  <FaArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ HOW TO BOOK ============================ */}
      <section className="relative py-24 lg:py-32 bg-white/[0.025] border-y border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading kicker="How booking works" title="Booked in under 5 minutes" />
          <div className="mt-14 relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="hidden lg:block absolute top-[2.6rem] left-12 right-12 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
            {howToSteps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease, delay: i * 0.07 }} className="relative rounded-[2rem] ring-1 ring-inset ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.9)]">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 font-display-serif text-xl font-bold text-[#070B16] shadow-lg">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FAQ ============================ */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          <SectionHeading kicker="FAQ" title="Questions, answered" />
          <div className="mt-12 space-y-3.5">
            {data.faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className={cn("rounded-3xl ring-1 ring-inset transition-all duration-300", open ? "ring-amber-400/40 bg-gradient-to-b from-amber-400/[0.06] to-white/[0.02]" : "ring-white/10 bg-white/[0.03] hover:ring-white/20")}>
                  <button onClick={() => setOpenFaq(open ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={open}>
                    <span className={cn("text-base font-semibold", i === 0 && "speakable-faq-first")}>{f.question}</span>
                    <span className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300", open ? "bg-amber-400 text-[#070B16] rotate-180" : "bg-white/5 text-amber-400 ring-1 ring-white/10")}>
                      <FaChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="overflow-hidden"><p className="px-6 pb-6 text-[15px] leading-relaxed text-white/65">{f.answer}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ OTHER SEATERS + TYPES ============================ */}
      <section className="relative py-24 lg:py-32 bg-white/[0.025] border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {data.otherSeaters?.length > 0 && (
            <>
              <SectionHeading kicker="More variants" title={`Other ${data.typeShortName} seaters`} />
              <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {data.otherSeaters.map((s) => (
                  <Link key={s.slug} href={`/${s.slug}`} className="group relative overflow-hidden rounded-[2rem] ring-1 ring-inset ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] transition-all duration-500 hover:-translate-y-1.5 hover:ring-amber-400/40 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.9)]">
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image src={s.image} alt={s.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] to-transparent" />
                    </div>
                    <div className="p-5">
                      <div className="font-display-serif text-lg font-bold">{s.name}</div>
                      <div className="mt-1 text-xs text-white/50">{s.capacity}</div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm text-white/55">From <span className="bg-gradient-to-br from-amber-300 to-orange-500 bg-clip-text font-bold text-transparent">₹{s.perKm}/km</span></span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/60 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-[#070B16]"><FaArrowRight className="h-4 w-4" /></span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {data.otherTypes?.length > 0 && (
            <div className="mt-16">
              <SectionHeading kicker="Compare vehicle types" title="Looking at a different group size or budget?" />
              <div className="mt-14 grid sm:grid-cols-2 gap-5">
                {data.otherTypes.map((t) => (
                  <Link key={t.slug} href={`/${t.slug}`} className="group relative overflow-hidden rounded-[2rem] ring-1 ring-inset ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:ring-amber-400/40 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25" style={{ background: t.accent || data.accent }} />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">{t.kicker}</div>
                        <h3 className="font-display-serif mt-2 text-2xl font-bold">{t.type}</h3>
                        <p className="mt-3 text-sm text-white/60 line-clamp-2">{t.tagline}</p>
                      </div>
                      <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-2xl ring-1 ring-inset ring-white/15">
                        <Image src={t.image} alt={t.type} fill sizes="112px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm text-white/55">From <span className="bg-gradient-to-br from-amber-300 to-orange-500 bg-clip-text font-bold text-transparent">₹{t.perKm}/km</span></span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-amber-300">Explore <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================ FINAL CTA ============================ */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 -z-10" style={{ background: `radial-gradient(70% 60% at 50% 0%, ${data.accent}40 0%, transparent 60%)` }} />
        <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-200 backdrop-blur">Book in minutes</span>
            <h2 className="font-display-serif mt-6 text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-br from-white via-white to-amber-200/80 bg-clip-text text-transparent">Ready to book your {data.name}?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/65">Tell us your route, date and group size. You'll get a transparent per-km quote in minutes — no surge, no hidden charges.</p>
            <div className="mt-9 flex justify-center"><CtaButtons variant="light" label={data.slug} /></div>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50">
              <span className="inline-flex items-center gap-2"><FaClock className="h-4 w-4 text-amber-400" /> 24/7 booking</span>
              <span className="inline-flex items-center gap-2"><FaShieldCheck className="h-4 w-4 text-amber-400" /> Verified drivers</span>
              <span className="inline-flex items-center gap-2"><FaReceipt className="h-4 w-4 text-amber-400" /> GST invoice on request</span>
            </div>
          </motion.div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

function Spec({ icon: Icon, label, value }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 py-4">
      <Icon className="h-5 w-5 text-amber-400" />
      <div className="text-sm font-bold leading-none">{value}</div>
      <div className="text-[10px] uppercase tracking-[0.14em] text-white/45">{label}</div>
    </div>
  );
}