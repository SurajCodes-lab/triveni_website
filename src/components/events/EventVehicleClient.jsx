"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  WhatsAppIcon,
  Users,
  Shield,
  Clock,
  CheckCircle as CheckCircle2,
  Sparkles,
  Star,
  Car,
  ChevronDown,
  ArrowRight,
  IndianRupee,
} from "@/components/ui/icons";
import QuickEnquiryForm from "@/components/ui/QuickEnquiryForm";
import { SetStickyCta } from "@/components/ui/StickyCtaContext";
import { trackPhoneCall, trackWhatsAppClick } from "@/utilis/analytics";

const PHONE = "7668570551";
const WHATSAPP = "917668570551";

export default function EventVehicleClient({ data, jsonLd }) {
  const [openFaq, setOpenFaq] = useState(0);
  const waText = `Hi, I want a ${data.shortName} for an event. Please share availability and a quote.`;
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waText)}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <SetStickyCta
        price={`From ${data.priceFrom}`}
        label={`${data.shortName} for Events`}
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
          <li className="text-slate-200 font-medium">{data.shortName}</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.image}
            alt={`${data.name} — Triveni Cabs`}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-blue-950/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Sparkles className="w-4 h-4" /> {data.category} · {data.seating}
            </div>
            <h1 className="speakable-headline text-3xl md:text-5xl font-black text-white leading-tight">
              {data.name}
            </h1>
            <p className="speakable-lead mt-4 text-lg text-slate-300 max-w-2xl">
              {data.tagline}. From{" "}
              <span className="text-cyan-300 font-bold">{data.priceFrom}</span>,
              with a dedicated event coordinator and 24/7 support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE}`}
                onClick={() => trackPhoneCall("eventveh_hero")}
                className="inline-flex items-center gap-2 bg-cyan-500 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-cyan-400 transition"
              >
                <Phone className="w-5 h-5" /> Call {PHONE}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("eventveh_hero")}
                className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-600 transition"
              >
                <WhatsAppIcon className="w-5 h-5" /> Get Free Quote
              </a>
            </div>
          </div>

          {/* Prominent vehicle image card */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/15">
              <Image
                src={data.image}
                alt={`${data.name} — Triveni Cabs`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <Car className="w-4 h-4 text-cyan-300" /> {data.category}
                  <span className="opacity-50">·</span> {data.seating}
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
              Get a quote for your {data.shortName.toLowerCase()}
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl">
              Tell us your event, date and group size — our coordinator replies
              in ~2 minutes with a transparent, GST-invoiced quote. No spam, no
              obligation.
            </p>
          </div>
          <div className="md:col-span-1">
            <QuickEnquiryForm pageType={`${data.shortName} for Events`} />
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

      {/* INTRO + SPECS */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {data.name} — overview
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed text-lg">
            {data.intro}
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10">
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full text-sm">
              <tbody>
                {data.specs.map(([label, value], i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-900/40" : "bg-white/5"}>
                    <td className="px-4 py-3 font-semibold text-slate-200 w-1/2">
                      {label}
                    </td>
                    <td className="px-4 py-3 text-slate-400">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
          <Link
            href={data.relatedSegment.href}
            className="mt-5 inline-flex items-center gap-1.5 text-cyan-400 font-semibold hover:underline"
          >
            {data.relatedSegment.label} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="md:col-span-1">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Star className="w-5 h-5 text-cyan-400" /> Best for
            </h3>
            <ul className="mt-4 space-y-2.5">
              {data.bestFor.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CROSS LINKS */}
      <section className="border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold text-white">
            Compare event vehicle options
          </h2>
          <div className="mt-5 grid sm:grid-cols-3 gap-3">
            {data.crossLinks.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3.5 hover:border-cyan-400/40 transition"
              >
                <span className="flex items-center gap-2 text-slate-200 font-medium">
                  <Car className="w-4 h-4 text-cyan-400" />
                  {c.label}
                </span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          {data.shortName} for events — FAQs
        </h2>
        <div className="mt-8 space-y-3">
          {data.faqs.map((f, i) => (
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

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#070b13] text-white">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-500/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-indigo-600/25 blur-[120px]" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 md:p-12 text-center shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-cyan-300 uppercase">
              <Sparkles className="w-3.5 h-3.5" /> From {data.priceFrom}
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl font-black">
              Book a {data.shortName.toLowerCase()} for your event
            </h2>
            <p className="mt-3 text-white/60 text-lg">
              Dedicated coordinator · GST invoice · 24/7 event-day support
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${PHONE}`}
                onClick={() => trackPhoneCall("eventveh_footer")}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 shadow-[0_8px_30px_-8px_rgba(34,211,238,0.6)] hover:bg-cyan-300 transition"
              >
                <Phone className="w-5 h-5" /> Call {PHONE}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("eventveh_footer")}
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
