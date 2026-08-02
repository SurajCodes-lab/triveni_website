"use client";

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
} from "@/components/ui/icons";
import QuickEnquiryForm from "@/components/ui/QuickEnquiryForm";
import { SetStickyCta } from "@/components/ui/StickyCtaContext";
import { trackPhoneCall, trackWhatsAppClick } from "@/utilis/analytics";

const PHONE = "7668570551";
const WHATSAPP = "917668570551";

const fleet = [
  {
    seats: "12 Seater",
    price: "₹20/km",
    image: "/images/tempo/12_seater.jpg",
    best: "Small families & friend groups",
    features: ["Push-back seats", "AC", "Music system", "Luggage space"],
  },
  {
    seats: "17 Seater",
    price: "₹24/km",
    image: "/images/tempo/17_seater.jpg",
    best: "Mid-size groups & corporate outings",
    features: ["Push-back seats", "AC", "Music system", "Extra legroom"],
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
    price: "₹28/km",
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
    price: "From ₹20/km",
    popular: "Delhi to Agra, Vrindavan",
  },
  {
    size: "17 Seater",
    capacity: "Up to 16 + driver",
    bestFor: "Corporate outings, mid groups",
    price: "From ₹24/km",
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SetStickyCta price="From ₹20/km" label="Tempo Traveller Hire" whatsappText="Hi, I want to book a Tempo Traveller. Please share availability and fare." />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white,transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <FaStar className="text-yellow-300" />
                4.9 Rating · 10,000+ Happy Travellers
              </div>
              <h1 className="speakable-headline text-4xl md:text-5xl font-bold leading-tight mb-4">
                Tempo Traveller on Rent
              </h1>
              <p className="speakable-lead text-lg text-white/90 mb-6">
                Hire a 12, 17, 20, or 26 seater AC tempo traveller with an
                experienced driver from just ₹20/km across Delhi NCR, Agra,
                Jaipur, Himachal, and the Chardham circuit. Fuel, driver, and AC
                are included, with transparent pricing and 24/7 support.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${PHONE}`}
                  onClick={() => trackPhoneCall("tempo_hub_hero")}
                  className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition"
                >
                  <FaPhone /> Call Now
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    "Hi, I want to hire an AC tempo traveller. Please share rates."
                  )}`}
                  onClick={() => trackWhatsAppClick("tempo_hub_hero")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
            <div>
              <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden shadow-2xl mb-5">
                <Image
                  src="/images/tempo/17_seater.jpg"
                  alt="Tempo Traveller on Rent"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <QuickEnquiryForm pageType="tempo" />
            </div>
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Our Tempo Traveller Fleet
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose the perfect size for your group. All vehicles are
            air-conditioned and come with experienced drivers.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((v) => (
            <div
              key={v.seats}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition group"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={v.image}
                  alt={`${v.seats} Tempo Traveller`}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
                <div className="absolute top-3 right-3 bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {v.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {v.seats}
                </h3>
                <p className="text-sm text-slate-500 mb-4">{v.best}</p>
                <ul className="space-y-2 mb-4">
                  {v.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <FaCheckCircle className="text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    `Hi, I want to book a ${v.seats} tempo traveller (${v.price}). Please share availability.`
                  )}`}
                  onClick={() => trackWhatsAppClick(`tempo_fleet_${v.seats}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 bg-green-500 text-white px-4 py-2.5 rounded-xl font-semibold hover:bg-green-600 transition"
                >
                  <FaWhatsapp /> Book {v.seats}
                </a>
                <Link
                  href={`/${v.seats.toLowerCase().replace(/\s+/g, "-")}-tempo-traveller`}
                  className="mt-2 flex w-full items-center justify-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
                >
                  View {v.seats} details &amp; routes →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm font-semibold text-slate-500 mb-3">
            Browse tempo travellers by seating capacity
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              ["12", "23"],
              ["16", "25"],
              ["17", "26"],
              ["20", "30"],
              ["26", "35"],
            ].map(([s, p]) => (
              <Link
                key={s}
                href={`/${s}-seater-tempo-traveller`}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-orange-300 hover:text-orange-600 transition"
              >
                {s} Seater
                <span className="text-orange-500">₹{p}/km</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE / COST DIRECT ANSWER */}
      <section className="bg-orange-50/60 border-y border-orange-100">
        <div className="max-w-4xl mx-auto px-4 py-14">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            How much does a tempo traveller cost per km?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            A tempo traveller on rent in North India costs between{" "}
            <strong>₹20/km and ₹28/km</strong> depending on the seater size: a
            12-seater starts at ₹20/km, a 17-seater at ₹24/km, a 20-seater at
            ₹26/km, and a 26-seater at ₹28/km. These rates include the vehicle,
            fuel, air conditioning, and an experienced driver. For outstation
            trips a minimum of 250 km per day applies, and tolls, parking, state
            taxes, and overnight driver allowance are billed separately or
            bundled into an all-inclusive package on request.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Local same-city tempo traveller hire (for sightseeing, weddings, or
            corporate transfers) is offered on an hourly or fixed-package basis.
            Whatever your plan, we share a transparent quote in advance so you
            know the exact cost before you confirm.
          </p>
        </div>
      </section>

      {/* MID-PAGE CTA STRIP */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-500 text-white">
        <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold mb-1">
              Get your exact tempo traveller quote now
            </h2>
            <p className="text-white/90">
              Instant per-km pricing with fuel, driver &amp; AC included.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${PHONE}`}
              onClick={() => trackPhoneCall("tempo_hub_midcta")}
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition"
            >
              <FaPhone /> Call {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                "Hi, please send me a tempo traveller quote."
              )}`}
              onClick={() => trackWhatsAppClick("tempo_hub_midcta")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              <FaWhatsapp /> WhatsApp Quote
            </a>
          </div>
        </div>
      </section>

      {/* SEATER COMPARISON TABLE */}
      <section id="seater-comparison" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Which tempo traveller seater should I choose?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Compare the 12, 17, 20, and 26 seater tempo travellers by capacity,
            best use, and price per km to pick the right vehicle for your group.
          </p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Seater</th>
                <th className="px-4 py-3 font-semibold">Capacity</th>
                <th className="px-4 py-3 font-semibold">Best For</th>
                <th className="px-4 py-3 font-semibold">Price / km</th>
                <th className="px-4 py-3 font-semibold">Popular Trips</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {seaterRows.map((r) => (
                <tr key={r.size} className="hover:bg-orange-50/50 transition">
                  <td className="px-4 py-3 font-bold text-slate-900">
                    {r.size}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{r.capacity}</td>
                  <td className="px-4 py-3 text-slate-600">{r.bestFor}</td>
                  <td className="px-4 py-3 font-semibold text-orange-600">
                    {r.price}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{r.popular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* WHAT'S INCLUDED / EXCLUDED */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              What&apos;s included in your tempo traveller fare
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Know exactly what you pay for. Everything below is confirmed in
              your quote before booking.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-green-100 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Included</h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <FaCheckCircle className="text-green-500 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-red-100 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Not Included
              </h3>
              <ul className="space-y-3">
                {excluded.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <FaTimesCircle className="text-red-400 shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            How to book a tempo traveller
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Booking your AC tempo traveller with a driver takes just a few
            minutes.
          </p>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howToSteps.map((s, i) => (
            <li
              key={s.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 relative"
            >
              <div className="w-10 h-10 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center mb-4">
                {i + 1}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* WHY TEMPO / TRUST */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">
              Why book your tempo traveller with Triveni Cabs
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Trusted by 10,000+ travellers for group trips, weddings, and
              pilgrimages across North India.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 p-6"
                >
                  <Icon className="text-2xl text-yellow-300 mb-3" />
                  <h3 className="font-bold mb-2">{t.title}</h3>
                  <p className="text-sm text-white/85">{t.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES & CITIES */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 flex items-center gap-3">
            <FaRoute className="text-orange-600" /> Popular tempo traveller
            routes
          </h2>
          <p className="text-slate-600">
            One-way and round-trip tempo traveller packages on North
            India&apos;s most-booked routes.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {popularRoutes.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="flex items-center justify-between bg-white rounded-xl border border-slate-200 px-4 py-3 hover:border-orange-400 hover:shadow-sm transition text-slate-800 font-medium"
            >
              {r.label}
              <span className="text-orange-500">&rarr;</span>
            </Link>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-5">
          Tempo traveller hire by city
        </h3>
        <div className="flex flex-wrap gap-3">
          {popularCities.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="bg-orange-50 text-orange-700 rounded-full px-4 py-2 text-sm font-medium border border-orange-100 hover:bg-orange-100 transition"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Explore related services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-orange-400 hover:shadow-md transition"
              >
                <h3 className="font-bold text-slate-900 mb-1">{l.label}</h3>
                <p className="text-sm text-slate-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900"
              >
                {faq.question}
                <FaChevronDown
                  className={`shrink-0 transition ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <div
                  className={`px-5 pb-5 text-slate-600 ${
                    i === 0 ? "speakable-faq-first" : ""
                  }`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${PHONE}`}
            onClick={() => trackPhoneCall("tempo_hub_faq")}
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
          >
            <FaPhone /> Call {PHONE}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              "Hi, I have a question about tempo traveller hire."
            )}`}
            onClick={() => trackWhatsAppClick("tempo_hub_faq")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  );
}
