"use client";

import FamilyFacts from '@/components/seo/FamilyFacts';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  WhatsAppIcon,
  MapPin,
  Users,
  Shield,
  Clock,
  CheckCircle as CheckCircle2,
  Building2,
  ChevronDown,
  ArrowRight,
  Briefcase,
  Sparkles,
  TrendingUp,
} from "@/components/ui/icons";
import QuickEnquiryForm from "@/components/ui/QuickEnquiryForm";
import { SetStickyCta } from "@/components/ui/StickyCtaContext";
import { trackPhoneCall, trackWhatsAppClick } from "@/utilis/analytics";

const PHONE = "7668570551";
const WHATSAPP = "917668570551";

const WARM = "#FFF6DC";

const Eyebrow = ({ children, dark = false }) => (
  <p
    className={`text-xs font-semibold uppercase tracking-[0.22em] ${
      dark ? "text-amber-300/90" : "text-blue-700"
    }`}
  >
    {children}
  </p>
);

const GoldCta = ({ href, onClick, children, external = false }) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    onClick={onClick}
    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#FFE9A0] via-[#FACF2D] to-[#E6B800] px-6 py-3 font-bold text-black shadow-[0_10px_30px_-10px_rgba(250,207,45,0.55)] hover:brightness-105 transition lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]"
  >
    {children}
  </a>
);

export default function CorporateComboClient({ data, jsonLd }) {
  const [openFaq, setOpenFaq] = useState(0);
  const { city, item, kind, citySlug, subSlug, intro, faqs, otherSubs, sameSubOtherCities } = data;

  const heading = `${item.name} Transport in ${city.name}`;
  const waText = `Hi, I need ${item.name} corporate transport in ${city.name}. Please share a proposal.`;
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waText)}`;
  const businessAreas = Array.isArray(city.businessAreas) ? city.businessAreas : [];
  const stats = city.stats || {};

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <SetStickyCta price="From ₹11/km" label={`${item.name} · ${city.name}`} whatsappText={waText} />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}

      {/* ===== HERO — visible photo, scrim on text side only ===== */}
      <section className="relative overflow-hidden bg-[#070c1a] text-white">
        <div className="absolute inset-0">
          {city.heroImage && (
            <Image
              src={city.heroImage}
              alt={`${heading} — Triveni Cabs`}
              fill
              className="object-cover"
              priority
            />
          )}
          {/* scrim only over the text half; photo stays visible on the right */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#070c1a] via-[#070c1a]/92 to-[#070c1a]/25" />
          <div className="absolute inset-0 md:hidden bg-[#070c1a]/80" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070c1a] to-transparent" />
        </div>

        <nav aria-label="Breadcrumb" className="relative max-w-7xl mx-auto px-4 pt-5 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-amber-300">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/corporate-transportation-service" className="hover:text-amber-300">Corporate</Link></li>
            <li aria-hidden>/</li>
            <li><Link href={`/corporate-transportation-service/${citySlug}`} className="hover:text-amber-300">{city.name}</Link></li>
            <li aria-hidden>/</li>
            <li className="text-white/85 font-medium">{item.name}</li>
          </ol>
        </nav>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-200">
              <span className="text-base">{item.icon || "🏢"}</span> {item.name} · {city.name}
            </div>
            <h1 className="speakable-headline font-display-serif mt-5 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              {item.name} transport{' '}
              <span className="block mt-2 text-gold-foil">in {city.name}</span>
            </h1>
              <FamilyFacts family="corporate" data={data} />
            <p className="speakable-lead mt-5 text-lg text-slate-300/90 max-w-2xl leading-relaxed">{intro}</p>
            <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
              <GoldCta href={`tel:${PHONE}`} onClick={() => trackPhoneCall("corpcombo_hero")}>
                <Phone className="w-4 h-4" /> Call {PHONE}
              </GoldCta>
              <Link
                href="/get-corporate-quote"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-bold text-white ring-1 ring-white/15 backdrop-blur-xl hover:bg-white/15 transition lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]"
              >
                <Briefcase className="w-4 h-4 text-amber-300" /> Get a proposal
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
              {[
                [stats.fleet || "500+", "Fleet"],
                [stats.clients || stats.companies || "500+", "Companies"],
                ["4.9★", "Rated"],
              ].map(([v, l], i) => (
                <div key={i} className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-3 py-3 text-center">
                  <div className="text-xl font-black text-white">{v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/15">
              {city.heroImage && (
                <Image src={city.heroImage} alt={`${item.name} in ${city.name}`} fill className="object-cover" priority />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute left-4 bottom-4 right-4 flex items-center gap-2 rounded-2xl bg-white/5 backdrop-blur-xl px-4 py-3 border border-white/10">
                <MapPin className="w-4 h-4 text-amber-300" />
                <span className="text-white font-semibold">{city.name}</span>
                <span className="text-white/40">·</span>
                <span className="text-white/80">{item.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* spec strip */}
        <div className="relative border-t border-white/10 bg-white/[0.03]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              [Users, "500+ fleet"],
              [Shield, "GPS + verified drivers"],
              [CheckCircle2, "GST invoice + MIS"],
              [Clock, "24/7 · 30-min backup"],
            ].map(([Icon, label], i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-5">
                <Icon className="w-5 h-5 text-amber-300 shrink-0" />
                <span className="text-sm font-semibold text-white/85">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FamilyFacts family="corporate" data={data} details />

      {/* ===== INTRO + QUOTE — warm light band ===== */}
      <section className="text-slate-900" style={{ backgroundColor: WARM }}>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <Eyebrow>Overview</Eyebrow>
            <h2 className="font-display-serif mt-2 text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
              {item.name} transport for {city.name} businesses
            </h2>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">{item.description}</p>
            <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#FACF2D] to-[#B8860B]" />
          </div>
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 rounded-2xl bg-[#070c1a] p-2 shadow-[0_30px_60px_-30px_rgba(7,12,26,0.5)]">
              <QuickEnquiryForm pageType={`${item.name} ${city.name} (corporate)`} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHALLENGES (industry) / HOW IT WORKS (usecase) — dark ===== */}
      {kind === "industry" && Array.isArray(item.challenges) && (
        <section className="bg-slate-950 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <Eyebrow dark>Built for your operations</Eyebrow>
            <h2 className="font-display-serif mt-2 text-2xl md:text-3xl font-bold text-white">
              {city.name} {item.name} — challenges we solve
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {item.challenges.map((c, i) => (
                <div key={i} className="relative h-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FFE9A0] via-[#FACF2D] to-[#B8860B]" />
                  <h3 className="font-bold text-white">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{c.description}</p>
                  <p className="mt-3 flex items-start gap-2 text-sm font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 mt-0.5 shrink-0" />
                    {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {kind === "usecase" && Array.isArray(item.howItWorks) && (
        <section className="bg-slate-950 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <Eyebrow dark>How it works</Eyebrow>
            <h2 className="font-display-serif mt-2 text-2xl md:text-3xl font-bold text-white">
              {item.name} in {city.name}, step by step
            </h2>
            <div className="mt-8 grid md:grid-cols-4 gap-5">
              {item.howItWorks.map((s, i) => (
                <div key={i} className="h-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FFE9A0] to-[#B8860B] font-black text-black">
                      {s.step || i + 1}
                    </span>
                    <span className="text-2xl">{s.icon}</span>
                  </div>
                  <h3 className="mt-4 font-bold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FEATURES — warm light band ===== */}
      {Array.isArray(item.features) && (
        <section className="text-slate-900" style={{ backgroundColor: WARM }}>
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <Eyebrow>What’s included</Eyebrow>
            <h2 className="font-display-serif mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              Everything your {city.name} account gets
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {item.features.map((f, i) => (
                <div key={i} className="h-full rounded-2xl bg-white/70 p-6 ring-1 ring-amber-900/10 shadow-sm">
                  <div className="grid place-items-center w-12 h-12 rounded-2xl bg-slate-900 text-xl text-amber-300">
                    {f.icon}
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FLEET (industry) / BENEFITS (usecase) — dark ===== */}
      {kind === "industry" && Array.isArray(item.fleet) && (
        <section className="bg-slate-950 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <Eyebrow dark>Fleet &amp; pricing</Eyebrow>
            <h2 className="font-display-serif mt-2 text-2xl md:text-3xl font-bold text-white">
              Right-sized vehicles for {city.name}
            </h2>

            {/* Mobile: stacked cards */}
            <div className="mt-6 space-y-3 md:hidden">
              {item.fleet.map((v, i) => (
                <div key={i} className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold text-white">{v.type}</span>
                    <span className="font-black text-gold-foil whitespace-nowrap">{v.price}</span>
                  </div>
                  <div className="mt-2 text-sm text-slate-400">{v.capacity}</div>
                  {v.useCase && <div className="mt-1 text-sm text-slate-500">{v.useCase}</div>}
                </div>
              ))}
            </div>

            {/* Desktop: table */}
            <div className="mt-6 hidden md:block overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead className="bg-white/5 text-white">
                  <tr>
                    <th className="text-left px-4 py-3">Vehicle</th>
                    <th className="text-left px-4 py-3">Capacity</th>
                    <th className="text-left px-4 py-3">Best for</th>
                    <th className="text-left px-4 py-3">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {item.fleet.map((v, i) => (
                    <tr key={i} className={i % 2 ? "bg-transparent" : "bg-white/[0.03]"}>
                      <td className="px-4 py-3 font-semibold text-slate-100">{v.type}</td>
                      <td className="px-4 py-3 text-slate-400">{v.capacity}</td>
                      <td className="px-4 py-3 text-slate-400">{v.useCase}</td>
                      <td className="px-4 py-3 font-bold text-gold-foil">{v.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {kind === "usecase" && Array.isArray(item.benefits) && (
        <section className="bg-slate-950 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <Eyebrow dark>The payoff</Eyebrow>
            <h2 className="font-display-serif mt-2 text-2xl md:text-3xl font-bold text-white">
              Why {city.name} companies choose this
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {item.benefits.map((b, i) => (
                <div key={i} className="h-full rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
                  <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFE9A0] to-[#B8860B] text-black">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-white">{b.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CITY BUSINESS HUBS — warm light band ===== */}
      {businessAreas.length > 0 && (
        <section className="text-slate-900" style={{ backgroundColor: WARM }}>
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <Eyebrow>Local coverage</Eyebrow>
            <h2 className="font-display-serif mt-2 text-2xl md:text-3xl font-bold text-slate-900">
              {city.name} business hubs we serve
            </h2>
            <p className="mt-2 text-slate-600 max-w-3xl">
              Daily {item.name} transport across {city.name}’s key corporate clusters.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {businessAreas.map((a, i) => (
                <div key={i} className="h-full rounded-2xl bg-white/70 p-5 ring-1 ring-amber-900/10 shadow-sm">
                  <div className="flex items-center gap-2.5 font-semibold text-slate-800">
                    <span className="grid place-items-center w-9 h-9 rounded-xl bg-slate-900 text-amber-300">
                      <Building2 className="w-4 h-4" />
                    </span>
                    {a.name || a}
                  </div>
                  {a.type && <div className="mt-2 text-xs font-medium text-blue-800">{a.type}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FAQ — dark, 2-col ===== */}
      <section className="bg-slate-950 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
          <h2 className="font-display-serif text-center text-2xl md:text-3xl font-bold text-white">
            {item.name} in {city.name} — FAQs
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 md:items-start">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition ${
                  openFaq === i
                    ? "border-amber-300/40 bg-white/5 backdrop-blur-xl"
                    : "border-white/10 bg-white/5 backdrop-blur-xl"
                }`}
              >
                <h3 className="m-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className={`font-semibold text-white ${i === 0 ? "speakable-faq-first" : ""}`}>{f.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-300 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                </h3>
                {openFaq === i && <div className="px-5 pb-5 text-slate-300 leading-relaxed">{f.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CROSS LINKS — dark ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display-serif text-xl font-bold text-white">Other corporate transport in {city.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherSubs.map((s) => (
              <Link
                key={s.slug}
                href={`/corporate-transportation-service/${citySlug}/${s.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm text-slate-300 hover:border-amber-300/40 hover:text-amber-200 transition"
              >
                {s.name}
              </Link>
            ))}
          </div>
          <Link
            href={`/corporate-transportation-service/${citySlug}`}
            className="mt-4 inline-flex items-center gap-1.5 text-amber-300 font-semibold hover:gap-2.5 transition-all"
          >
            All corporate transport in {city.name} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div>
          <h2 className="font-display-serif text-xl font-bold text-white">{item.name} in other cities</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {sameSubOtherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/corporate-transportation-service/${c.slug}/${subSlug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm text-slate-300 hover:border-amber-300/40 hover:text-amber-200 transition"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <Link
            href={`/corporate-transportation-service/${kind === "industry" ? "industry" : "use-case"}/${subSlug}`}
            className="mt-4 inline-flex items-center gap-1.5 text-amber-300 font-semibold hover:gap-2.5 transition-all"
          >
            About {item.name} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== FINAL CTA — dark ===== */}
      <section className="relative overflow-hidden bg-[#070c1a] text-white">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-amber-200 uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Proposal in 2–4 hours
            </div>
            <h2 className="font-display-serif mt-5 text-3xl md:text-4xl font-bold">
              Set up <span className="text-gold-foil">{item.name}</span> transport in {city.name}
            </h2>
            <p className="mt-3 text-white/60 text-lg">
              Dedicated account manager · GST invoice · MIS reports · 24/7 ops · from ₹11/km
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <GoldCta href={`tel:${PHONE}`} onClick={() => trackPhoneCall("corpcombo_footer")}>
                <Phone className="w-4 h-4" /> Call {PHONE}
              </GoldCta>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("corpcombo_footer")}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-bold text-white ring-1 ring-white/15 hover:bg-white/15 transition lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]"
              >
                <WhatsAppIcon className="w-4 h-4 text-green-400" /> WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
