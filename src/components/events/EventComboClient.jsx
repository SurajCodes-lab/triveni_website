"use client";

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
  Calendar,
  Sparkles,
  Star,
  Car,
  Building2,
  ChevronDown,
  ArrowRight,
} from "@/components/ui/icons";
import QuickEnquiryForm from "@/components/ui/QuickEnquiryForm";
import { SetStickyCta } from "@/components/ui/StickyCtaContext";
import { trackPhoneCall, trackWhatsAppClick } from "@/utilis/analytics";

const PHONE = "7668570551";
const WHATSAPP = "917668570551";

export default function EventComboClient({ data, jsonLd }) {
  const [openFaq, setOpenFaq] = useState(0);
  const {
    type,
    city,
    intro,
    faqs,
    venues,
    otherTypesInCity,
    sameTypeOtherCities,
    typeSlug,
    citySlug,
  } = data;

  const heading = `${type.title} in ${city.name}`;
  const waText = `Hi, I need ${type.name} transportation in ${city.name}. Please share a quote.`;
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waText)}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <SetStickyCta
        price="Free quote"
        label={`${type.name} · ${city.name}`}
        whatsappText={waText}
      />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 pt-4 text-sm text-slate-400"
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-cyan-400">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link
              href="/event-transportation-service"
              className="hover:text-cyan-400"
            >
              Event Transportation
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link
              href={`/event-transportation-service/${typeSlug}`}
              className="hover:text-cyan-400"
            >
              {type.name}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-slate-200 font-medium">{city.name}</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          {city.heroImage && (
            <Image
              src={city.heroImage}
              alt={`${heading} — Triveni Cabs`}
              fill
              className="object-cover opacity-20"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Sparkles className="w-4 h-4" /> {type.name} · {city.name}
            </div>
            <h1 className="speakable-headline text-3xl md:text-5xl font-black text-white leading-tight">
              {heading}
            </h1>
            <p className="speakable-lead mt-4 text-lg text-slate-300 max-w-2xl">
              {intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE}`}
                onClick={() => trackPhoneCall("eventcombo_hero")}
                className="inline-flex items-center gap-2 bg-cyan-500 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-cyan-400 transition"
              >
                <Phone className="w-5 h-5" /> Call {PHONE}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("eventcombo_hero")}
                className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-600 transition"
              >
                <WhatsAppIcon className="w-5 h-5" /> Get Free Quote
              </a>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 max-w-lg">
              {[
                [city.stats?.eventsHandled || "500+", "Events served"],
                [city.stats?.happyClients || "2000+", "Happy clients"],
                ["4.9★", "Avg. rating"],
              ].map(([v, l], i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-center"
                >
                  <div className="text-lg font-bold text-white">{v}</div>
                  <div className="text-[11px] text-slate-400">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Prominent city image card */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/15">
              <Image
                src={city.heroImage || "/images/HERO_SECTION_MAIN_PAGE.jpg"}
                alt={`${type.name} in ${city.name} — Triveni Cabs`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MapPin className="w-4 h-4 text-cyan-300" /> {city.name}
                  <span className="opacity-50">·</span> {type.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Get a fixed {city.name} {type.name.toLowerCase()} quote
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl">
              Share your venue, date and guest count — our coordinator replies in
              ~2 minutes with a transparent, GST-invoiced quote. No spam, no
              obligation.
            </p>
          </div>
          <div className="md:col-span-1">
            <QuickEnquiryForm pageType={`${type.name} ${city.name}`} />
          </div>
        </div>
      </section>

      {/* TRUST ROW */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            [Users, "500+ vehicle fleet"],
            [Shield, "Dedicated coordinator"],
            [CheckCircle2, "GST invoice"],
            [Clock, "24/7 event-day support"],
          ].map(([Icon, label], i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 text-slate-300"
            >
              <Icon className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* VENUES */}
      {venues.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {type.name} venues we cover in {city.name}
          </h2>
          <p className="mt-2 text-slate-400 max-w-3xl">
            We coordinate {type.name.toLowerCase()} to and between the most
            popular {city.name} venues — including these:
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {venues.map((v, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  {v.name}
                </div>
                {v.area && (
                  <div className="mt-1 text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {v.area}
                  </div>
                )}
                {v.type && (
                  <div className="mt-2 text-xs text-cyan-300">{v.type}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FEATURES */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            What's included in your {city.name} {type.name.toLowerCase()}
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {type.features.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
              >
                <div className="text-2xl">{f.icon}</div>
                <h3 className="mt-2 font-bold text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      {type.packages?.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {type.name} packages in {city.name}
          </h2>
          <p className="mt-2 text-slate-400">
            Indicative starting prices — your final {city.name} quote depends on
            fleet, distance and dates.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {type.packages.map((p, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-6 ${
                  i === 1
                    ? "border-cyan-400/50 bg-cyan-500/5"
                    : "border-white/10 bg-slate-900/60"
                }`}
              >
                <h3 className="font-bold text-white text-lg">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{p.description}</p>
                <div className="mt-3 text-2xl font-black text-cyan-300">
                  {p.price}
                </div>
                <ul className="mt-4 space-y-2">
                  {p.includes.map((inc, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>
                {p.ideal && (
                  <div className="mt-4 text-xs text-slate-500">
                    Ideal for: {p.ideal}
                  </div>
                )}
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`eventcombo_pkg_${i}`)}
                  className="mt-5 flex items-center justify-center gap-2 bg-cyan-500 text-slate-950 font-bold py-2.5 rounded-xl hover:bg-cyan-400 transition"
                >
                  Enquire <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CITY HIGHLIGHTS */}
      {city.highlights?.length > 0 && (
        <section className="border-y border-white/10 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-white">
              Why Triveni Cabs for {type.name.toLowerCase()} in {city.name}
            </h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {city.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <Star className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          {type.name} in {city.name} — FAQs
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`rounded-xl border ${
                openFaq === i
                  ? "border-cyan-400/40 bg-cyan-500/5"
                  : "border-white/10 bg-slate-900/60"
              }`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                aria-expanded={openFaq === i}
              >
                <span
                  className={`font-semibold text-white ${
                    i === 0 ? "speakable-faq-first" : ""
                  }`}
                >
                  {f.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-slate-300 leading-relaxed">
                  {f.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-white">
              Other event transport in {city.name}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {otherTypesInCity.map((t) => (
                <Link
                  key={t.slug}
                  href={`/event-transportation-service/${t.slug}/${citySlug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-900/60 px-3.5 py-2 text-sm text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition"
                >
                  {t.name}
                </Link>
              ))}
            </div>
            <Link
              href={`/event-transportation-service/city/${citySlug}`}
              className="mt-4 inline-block text-cyan-400 font-semibold hover:underline"
            >
              All event transport in {city.name} →
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">
              {type.name} in other cities
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {sameTypeOtherCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/event-transportation-service/${typeSlug}/${c.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-900/60 px-3.5 py-2 text-sm text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition"
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <Link
              href={`/event-transportation-service/${typeSlug}`}
              className="mt-4 inline-block text-cyan-400 font-semibold hover:underline"
            >
              About {type.name.toLowerCase()} →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#070b13] text-white">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-500/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-indigo-600/25 blur-[120px]" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 md:p-12 text-center shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-cyan-300 uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Free quote in ~2 min
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl font-black">
              Plan your {city.name} {type.name.toLowerCase()}
            </h2>
            <p className="mt-3 text-white/60 text-lg">
              Dedicated coordinator · 500+ vehicles · fixed pricing · GST invoice
              · 24/7 support
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${PHONE}`}
                onClick={() => trackPhoneCall("eventcombo_footer")}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 shadow-[0_8px_30px_-8px_rgba(34,211,238,0.6)] hover:bg-cyan-300 transition"
              >
                <Phone className="w-5 h-5" /> Call {PHONE}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("eventcombo_footer")}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 font-bold text-white ring-1 ring-white/15 hover:bg-white/15 transition"
              >
                <WhatsAppIcon className="w-5 h-5 text-green-400" /> WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
