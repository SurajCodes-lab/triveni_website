"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  WhatsAppIcon,
  MapPin,
  Clock,
  CheckCircle as CheckCircle2,
  XCircle,
  Star,
  ChevronDown,
  Calendar,
  Sparkles,
  IndianRupee,
  ArrowRight,
} from "@/components/ui/icons";
import QuickEnquiryForm from "@/components/ui/QuickEnquiryForm";
import { SetStickyCta } from "@/components/ui/StickyCtaContext";
import { trackPhoneCall, trackWhatsAppClick } from "@/utilis/analytics";

const PHONE = "7668570551";
const WHATSAPP = "917668570551";

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

const INCLUSIONS = [
  "AC vehicle (Sedan / SUV / Innova) with experienced driver",
  "All fuel, tolls, parking & interstate taxes",
  "Driver allowance & night charges",
  "Door-to-door pickup and drop",
  "Flexible day-wise itinerary",
  "24/7 on-trip support",
];
const EXCLUSIONS = [
  "Hotel stay & meals (arranged on request)",
  "Monument entry tickets & guide fees",
  "Camera / video charges at monuments",
  "Anything not listed under inclusions",
];

export default function GoldenTriangleClient({ data, others = [] }) {
  const [openFaq, setOpenFaq] = useState(0);
  const waText = `Hi, I'm interested in the ${data.name}. Please share the itinerary and a quote.`;
  const waHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waText)}`;

  return (
    <div className="min-h-screen bg-[#fbf7ef] text-stone-900">
      <SetStickyCta
        price={`From ₹${data.priceFrom.toLocaleString("en-IN")}`}
        label={data.name}
        whatsappText={waText}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#140f0a] text-white">
        <div className="absolute inset-0">
          <Image src={data.heroImage} alt={`${data.h1} — Triveni Cabs`} fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-[#140f0a] via-[#1c140c]/92 to-amber-950/80" />
        </div>
        <div className="pointer-events-none absolute -top-28 -right-20 h-[32rem] w-[32rem] rounded-full bg-amber-500/20 blur-[130px]" />

        <nav aria-label="Breadcrumb" className="relative max-w-7xl mx-auto px-4 pt-5 text-sm text-white/45">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-amber-300">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/tour-package" className="hover:text-amber-300">Tours</Link></li>
            <li aria-hidden>/</li>
            <li className="text-white/80 font-medium">{data.name}</li>
          </ol>
        </nav>

        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ y: 22 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-amber-300 uppercase">
              <Sparkles className="w-3.5 h-3.5" /> {data.cities.join(" · ")}
            </div>
            <h1 className="speakable-headline mt-5 text-4xl md:text-6xl font-black leading-[1.03] tracking-tight">
              {data.h1.split(" by ")[0]}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
                by car with driver
              </span>
            </h1>
            <p className="speakable-lead mt-5 text-lg text-white/70 max-w-xl leading-relaxed">{data.tagline}.</p>

            <div className="mt-7 flex flex-wrap items-center gap-5">
              <div className="flex items-end gap-1">
                <span className="text-sm text-white/50 mb-1.5">from</span>
                <span className="text-5xl font-black leading-none">₹{data.priceFrom.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall("gt_hero")} className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-bold text-stone-950 shadow-[0_10px_30px_-8px_rgba(251,191,36,0.6)] hover:bg-amber-300 transition">
                  <Phone className="w-5 h-5" /> Call {PHONE}
                </a>
                <a href={waHref} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("gt_hero")} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-bold text-white ring-1 ring-white/15 hover:bg-white/15 transition">
                  <WhatsAppIcon className="w-5 h-5 text-green-400" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                [`${data.cities.length} cities`, "Circuit"],
                [data.durationOptions, "Duration"],
                ["4.9★", "Rated"],
              ].map(([v, l], i) => (
                <div key={i} className="rounded-2xl bg-white/[0.06] border border-white/10 px-3 py-3 text-center backdrop-blur-sm">
                  <div className="text-sm font-bold text-white">{v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/45">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ y: 26 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.85)] ring-1 ring-amber-200/15">
              <Image src={data.heroImage} alt={`${data.cities.join(", ")} — Golden Triangle`} fill className="object-cover" priority />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center gap-2 text-white font-semibold"><MapPin className="w-4 h-4 text-amber-300" /> {data.cities.join(" → ")}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO + ENQUIRY */}
      <section className="max-w-7xl mx-auto px-4 py-14 grid lg:grid-cols-3 gap-10">
        <Reveal className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Overview</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-black">{data.name} — what to expect</h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">{data.intro}</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {data.landmarks.map((l, i) => (
              <div key={i} className="flex items-start gap-2.5 rounded-xl bg-white p-4 ring-1 ring-stone-200 shadow-sm">
                <Star className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-stone-700 text-sm font-medium">{l}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 rounded-2xl bg-[#140f0a] p-2 shadow-xl">
            <QuickEnquiryForm pageType={data.name} />
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="bg-white border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-4 py-10 sm:py-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Day by day</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black">Suggested {data.name} itinerary</h2>
            <p className="mt-2 text-stone-500">Fully flexible — we tailor it to your dates, pace and interests.</p>
          </Reveal>
          <div className="mt-8 space-y-4">
            {data.itinerary.map((d, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05}>
                <div className="flex gap-4 rounded-2xl bg-[#fbf7ef] p-5 ring-1 ring-stone-200">
                  <div className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 font-black text-stone-950">D{d.day}</div>
                  <div>
                    <h3 className="font-bold text-stone-900">{d.title}</h3>
                    <p className="mt-1 text-sm text-stone-600">{d.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Packages</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-black">{data.name} pricing</h2>
          <p className="mt-2 text-stone-500">All-inclusive of fuel, tolls and driver. Hotels & tickets separate (arranged on request).</p>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {data.pricing.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={`h-full rounded-2xl p-6 ring-1 ${i === 1 ? "ring-amber-300 bg-amber-50/60 shadow-lg" : "ring-stone-200 bg-white shadow-sm"}`}>
                <h3 className="font-bold text-stone-900">{p.name}</h3>
                <div className="mt-2 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">{p.price}</div>
                <p className="mt-2 text-sm text-stone-500">{p.ideal}</p>
                <a href={waHref} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`gt_pkg_${i}`)} className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-stone-900 text-white font-bold py-2.5 hover:bg-stone-800 transition">
                  Enquire <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INCLUSIONS / EXCLUSIONS */}
      <section className="bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#fbf7ef] p-7 ring-1 ring-emerald-100">
            <h2 className="flex items-center gap-2 text-xl font-bold"><CheckCircle2 className="w-5 h-5 text-emerald-600" /> What's included</h2>
            <ul className="mt-4 space-y-2.5">
              {INCLUSIONS.map((f, i) => (<li key={i} className="flex items-start gap-2.5 text-stone-700 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />{f}</li>))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#fbf7ef] p-7 ring-1 ring-rose-100">
            <h2 className="flex items-center gap-2 text-xl font-bold"><XCircle className="w-5 h-5 text-rose-400" /> Not included</h2>
            <ul className="mt-4 space-y-2.5">
              {EXCLUSIONS.map((f, i) => (<li key={i} className="flex items-start gap-2.5 text-stone-700 text-sm"><XCircle className="w-4 h-4 text-rose-300 mt-0.5 shrink-0" />{f}</li>))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-10 sm:py-16">
        <Reveal><h2 className="text-center text-2xl md:text-3xl font-black">{data.name} — FAQs</h2></Reveal>
        <div className="mt-8 space-y-3">
          {data.faqs.map((f, i) => (
            <Reveal key={i} delay={(i % 4) * 0.03}>
              <div className={`rounded-2xl ring-1 transition ${openFaq === i ? "ring-amber-300 bg-white shadow-lg" : "ring-stone-200 bg-white"}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left" aria-expanded={openFaq === i}>
                  <span className={`font-semibold text-stone-900 ${i === 0 ? "speakable-faq-first" : ""}`}>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-500 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-stone-600 leading-relaxed">{f.a}</div>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RELATED — deliberately not gated on `others`. The three static links
          below are the only contextual links this template gives the tour-cost
          and English-speaking-driver pages, and they were dead while the whole
          section was hidden whenever there was only one origin in the data. */}
      <section className="bg-white border-y border-stone-100">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-xl font-black">More Golden Triangle options</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {others.map((o) => (
                <Link key={o.slug} href={`/${o.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-[#fbf7ef] px-4 py-2 text-sm font-medium text-stone-700 hover:border-amber-300 hover:text-amber-700 transition">
                  {o.name}
                </Link>
              ))}
              <Link href="/tour-package/golden-triangle-tour" className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-[#fbf7ef] px-4 py-2 text-sm font-medium text-stone-700 hover:border-amber-300 hover:text-amber-700 transition">Golden Triangle Tour (4D/3N)</Link>
              <Link href="/golden-triangle-tour-cost" className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-[#fbf7ef] px-4 py-2 text-sm font-medium text-stone-700 hover:border-amber-300 hover:text-amber-700 transition">Golden Triangle tour cost</Link>
              <Link href="/golden-triangle-english-speaking-driver" className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-[#fbf7ef] px-4 py-2 text-sm font-medium text-stone-700 hover:border-amber-300 hover:text-amber-700 transition">English-speaking driver</Link>
            </div>
          </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#140f0a] text-white">
        <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-amber-500/25 blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-4 py-10 sm:py-16 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black">Plan your {data.name}</h2>
            <p className="mt-3 text-white/60 text-lg">From ₹{data.priceFrom.toLocaleString("en-IN")} · private car + driver · flexible itinerary · 24/7 support</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall("gt_footer")} className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-3.5 font-bold text-stone-950 shadow-[0_10px_30px_-8px_rgba(251,191,36,0.6)] hover:bg-amber-300 transition"><Phone className="w-5 h-5" /> Call {PHONE}</a>
              <a href={waHref} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("gt_footer")} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 font-bold text-white ring-1 ring-white/15 hover:bg-white/15 transition"><WhatsAppIcon className="w-5 h-5 text-green-400" /> WhatsApp us</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
