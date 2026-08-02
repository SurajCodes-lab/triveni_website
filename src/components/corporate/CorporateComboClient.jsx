"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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

// Y-only reveal — content is always visible (never opacity-gated), so it can't
// get stuck hidden if the scroll observer doesn't fire.
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

const IconTile = ({ children }) => (
  <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white text-xl shadow-lg shadow-cyan-500/25">
    {children}
  </div>
);

const Eyebrow = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
    {children}
  </p>
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SetStickyCta price="From ₹11/km" label={`${item.name} · ${city.name}`} whatsappText={waText} />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[#070c1a] text-white">
        <div className="absolute inset-0">
          {city.heroImage && (
            <Image src={city.heroImage} alt={`${heading} — Triveni Cabs`} fill className="object-cover opacity-[0.18]" priority />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-[#070c1a] via-[#0b1120]/95 to-blue-950/85" />
        </div>
        {/* ambient glows + grid */}
        <div className="pointer-events-none absolute -top-32 -right-20 h-[34rem] w-[34rem] rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[30rem] w-[30rem] rounded-full bg-indigo-600/20 blur-[130px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:46px_46px]" />

        <nav aria-label="Breadcrumb" className="relative max-w-7xl mx-auto px-4 pt-5 text-sm text-white/45">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><Link href="/" className="hover:text-cyan-300">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/corporate-transportation-service" className="hover:text-cyan-300">Corporate</Link></li>
            <li aria-hidden>/</li>
            <li><Link href={`/corporate-transportation-service/${citySlug}`} className="hover:text-cyan-300">{city.name}</Link></li>
            <li aria-hidden>/</li>
            <li className="text-white/80 font-medium">{item.name}</li>
          </ol>
        </nav>

        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ y: 22 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-semibold text-cyan-300">
              <span className="text-base">{item.icon || "🏢"}</span> {item.name} · {city.name}
            </div>
            <h1 className="speakable-headline mt-5 text-3xl md:text-5xl font-black leading-[1.05] tracking-tight">
              {item.name} transport
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300">
                in {city.name}
              </span>
            </h1>
            <p className="speakable-lead mt-5 text-lg text-slate-300/90 max-w-2xl leading-relaxed">{intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall("corpcombo_hero")} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3 font-bold text-slate-950 shadow-[0_10px_30px_-8px_rgba(34,211,238,0.6)] hover:brightness-105 transition">
                <Phone className="w-5 h-5" /> Call {PHONE}
              </a>
              <Link href="/get-corporate-quote" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-bold text-white ring-1 ring-white/15 hover:bg-white/15 transition">
                <Briefcase className="w-5 h-5 text-cyan-300" /> Get a proposal
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
              {[
                [stats.fleet || "500+", "Fleet"],
                [stats.clients || stats.companies || "500+", "Companies"],
                ["4.9★", "Rated"],
              ].map(([v, l], i) => (
                <div key={i} className="rounded-2xl bg-white/[0.06] border border-white/10 px-3 py-3 text-center backdrop-blur-sm">
                  <div className="text-xl font-black text-white">{v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ y: 26 }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/15">
              {city.heroImage && (
                <Image src={city.heroImage} alt={`${item.name} in ${city.name}`} fill className="object-cover" priority />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute left-4 bottom-4 right-4 flex items-center gap-2 rounded-2xl bg-black/45 backdrop-blur-md px-4 py-3 ring-1 ring-white/10">
                <MapPin className="w-4 h-4 text-cyan-300" />
                <span className="text-white font-semibold">{city.name}</span>
                <span className="text-white/40">·</span>
                <span className="text-white/80">{item.name}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* spec strip */}
        <div className="relative border-t border-white/10 bg-white/[0.03]">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {[
              [Users, "500+ fleet"],
              [Shield, "GPS + verified drivers"],
              [CheckCircle2, "GST invoice + MIS"],
              [Clock, "24/7 · 30-min backup"],
            ].map(([Icon, label], i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-5">
                <Icon className="w-5 h-5 text-cyan-300 shrink-0" />
                <span className="text-sm font-semibold text-white/85">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO + QUOTE ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        <Reveal className="lg:col-span-2">
          <Eyebrow>Overview</Eyebrow>
          <h2 className="mt-2 text-2xl md:text-4xl font-black tracking-tight">
            {item.name} transport for {city.name} businesses
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">{item.description}</p>
          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600" />
        </Reveal>
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 rounded-[1.5rem] bg-[#070c1a] p-2 shadow-[0_30px_60px_-30px_rgba(7,12,26,0.5)]">
            <QuickEnquiryForm pageType={`${item.name} ${city.name} (corporate)`} />
          </div>
        </div>
      </section>

      {/* ===== CHALLENGES (industry) / HOW IT WORKS (usecase) ===== */}
      {kind === "industry" && Array.isArray(item.challenges) && (
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <Reveal>
              <Eyebrow>Built for your operations</Eyebrow>
              <h2 className="mt-2 text-2xl md:text-3xl font-black">{city.name} {item.name} — challenges we solve</h2>
            </Reveal>
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              {item.challenges.map((c, i) => (
                <Reveal key={i} delay={(i % 2) * 0.05}>
                  <div className="relative h-full rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600" />
                    <h3 className="font-bold text-slate-900">{c.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-500">{c.description}</p>
                    <p className="mt-3 flex items-start gap-2 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" />
                      {c.solution}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {kind === "usecase" && Array.isArray(item.howItWorks) && (
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <Reveal>
              <Eyebrow>How it works</Eyebrow>
              <h2 className="mt-2 text-2xl md:text-3xl font-black">{item.name} in {city.name}, step by step</h2>
            </Reveal>
            <div className="mt-8 grid md:grid-cols-4 gap-5">
              {item.howItWorks.map((s, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="h-full rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-xl transition">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 font-black text-white shadow-lg shadow-cyan-500/25">{s.step || i + 1}</span>
                      <span className="text-2xl">{s.icon}</span>
                    </div>
                    <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-600">{s.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FEATURES ===== */}
      {Array.isArray(item.features) && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <Reveal>
            <Eyebrow>What's included</Eyebrow>
            <h2 className="mt-2 text-2xl md:text-3xl font-black">Everything your {city.name} account gets</h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {item.features.map((f, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className="h-full rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition">
                  <IconTile>{f.icon}</IconTile>
                  <h3 className="mt-4 font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ===== FLEET (industry) / BENEFITS (usecase) ===== */}
      {kind === "industry" && Array.isArray(item.fleet) && (
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <Reveal>
              <Eyebrow>Fleet & pricing</Eyebrow>
              <h2 className="mt-2 text-2xl md:text-3xl font-black">Right-sized vehicles for {city.name}</h2>
            </Reveal>
            <Reveal className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm">
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full text-sm bg-white">
                <thead className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                  <tr>
                    <th className="text-left px-4 py-3">Vehicle</th>
                    <th className="text-left px-4 py-3">Capacity</th>
                    <th className="text-left px-4 py-3 hidden sm:table-cell">Best for</th>
                    <th className="text-left px-4 py-3">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {item.fleet.map((v, i) => (
                    <tr key={i} className={i % 2 ? "bg-white" : "bg-slate-50/60"}>
                      <td className="px-4 py-3 font-semibold text-slate-800">{v.type}</td>
                      <td className="px-4 py-3 text-slate-600">{v.capacity}</td>
                      <td className="px-4 py-3 text-slate-600 hidden sm:table-cell">{v.useCase}</td>
                      <td className="px-4 py-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">{v.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {kind === "usecase" && Array.isArray(item.benefits) && (
        <section className="bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <Reveal>
              <Eyebrow>The payoff</Eyebrow>
              <h2 className="mt-2 text-2xl md:text-3xl font-black">Why {city.name} companies choose this</h2>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {item.benefits.map((b, i) => (
                <Reveal key={i} delay={(i % 3) * 0.05}>
                  <div className="h-full rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-xl transition">
                    <IconTile><TrendingUp className="w-5 h-5" /></IconTile>
                    <h3 className="mt-4 font-bold text-slate-900">{b.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{b.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CITY BUSINESS HUBS ===== */}
      {businessAreas.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <Reveal>
            <Eyebrow>Local coverage</Eyebrow>
            <h2 className="mt-2 text-2xl md:text-3xl font-black">{city.name} business hubs we serve</h2>
            <p className="mt-2 text-slate-500 max-w-3xl">Daily {item.name} transport across {city.name}'s key corporate clusters.</p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessAreas.map((a, i) => (
              <Reveal key={i} delay={(i % 4) * 0.04}>
                <div className="h-full rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition">
                  <div className="flex items-center gap-2.5 font-semibold text-slate-800">
                    <span className="grid place-items-center w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600"><Building2 className="w-4 h-4" /></span>
                    {a.name || a}
                  </div>
                  {a.type && <div className="mt-2 text-xs font-medium text-cyan-700">{a.type}</div>}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <Reveal>
            <h2 className="text-center text-2xl md:text-3xl font-black">{item.name} in {city.name} — FAQs</h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={(i % 4) * 0.03}>
                <div className={`rounded-2xl ring-1 transition ${openFaq === i ? "ring-cyan-300 bg-gradient-to-br from-cyan-50/60 to-white shadow-lg" : "ring-slate-200 bg-white"}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left" aria-expanded={openFaq === i}>
                    <span className={`font-semibold text-slate-900 ${i === 0 ? "speakable-faq-first" : ""}`}>{f.question}</span>
                    <ChevronDown className={`w-5 h-5 text-cyan-600 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <div className="px-5 pb-5 text-slate-600 leading-relaxed">{f.answer}</div>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CROSS LINKS ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <Reveal>
          <h2 className="text-xl font-black text-slate-900">Other corporate transport in {city.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherSubs.map((s) => (
              <Link key={s.slug} href={`/corporate-transportation-service/${citySlug}/${s.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-700 hover:border-cyan-300 hover:text-cyan-700 hover:shadow-sm transition">
                {s.name}
              </Link>
            ))}
          </div>
          <Link href={`/corporate-transportation-service/${citySlug}`} className="mt-4 inline-flex items-center gap-1.5 text-cyan-700 font-semibold hover:gap-2.5 transition-all">
            All corporate transport in {city.name} <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-xl font-black text-slate-900">{item.name} in other cities</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {sameSubOtherCities.map((c) => (
              <Link key={c.slug} href={`/corporate-transportation-service/${c.slug}/${subSlug}`} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-700 hover:border-cyan-300 hover:text-cyan-700 hover:shadow-sm transition">
                {c.name}
              </Link>
            ))}
          </div>
          <Link href={`/corporate-transportation-service/${kind === "industry" ? "industry" : "use-case"}/${subSlug}`} className="mt-4 inline-flex items-center gap-1.5 text-cyan-700 font-semibold hover:gap-2.5 transition-all">
            About {item.name} <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-[#070c1a] text-white">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-500/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-indigo-600/25 blur-[120px]" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 md:p-12 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-cyan-300 uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Proposal in 2–4 hours
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl font-black">Set up {item.name} transport in {city.name}</h2>
            <p className="mt-3 text-white/60 text-lg">Dedicated account manager · GST invoice · MIS reports · 24/7 ops · from ₹11/km</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall("corpcombo_footer")} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 px-7 py-3.5 font-bold text-slate-950 shadow-[0_10px_30px_-8px_rgba(34,211,238,0.6)] hover:brightness-105 transition">
                <Phone className="w-5 h-5" /> Call {PHONE}
              </a>
              <a href={waHref} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("corpcombo_footer")} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-7 py-3.5 font-bold text-white ring-1 ring-white/15 hover:bg-white/15 transition">
                <WhatsAppIcon className="w-5 h-5 text-green-400" /> WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
