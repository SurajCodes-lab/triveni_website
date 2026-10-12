'use client';

// src/components/rental/MonthlyRentalCityClient.jsx
//
// The renderer shared by the 19 monthly-rental city pages.
//
// The page answers two questions in order, because that is the order the
// enquiry arrives in: what does a car for a month cost here, and do the
// included kilometres cover what I actually do. The rate table is the same
// everywhere — it is the published package — so the thing that makes this page
// worth reading is the second half: who rents monthly in this city, what the
// local distances are, and whether 2,500 km is generous or tight against them.

import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MapPin, Clock, Car, CheckCircle, Calendar, IndianRupee,
  Users, Building2, Route, ShieldCheck,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const PHONE = '7668570551';
const inr = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

export default function MonthlyRentalCityClient({ data, pkg, shortAnswer = null, otherCities = [] }) {
  const msg = `Hi, I'd like a monthly car rental with driver in ${data.city}.`;

  const LOCAL = [
    { Icon: Building2, label: `Who rents monthly in ${data.city}`, body: data.whoRentsMonthly },
    { Icon: Route, label: `What ${pkg.includedKm.toLocaleString('en-IN')} km means here`, body: data.usagePattern },
    { Icon: MapPin, label: `Getting around ${data.city}`, body: data.cityGeography },
    { Icon: Car, label: 'Which vehicle suits this city', body: data.vehicleFit },
    { Icon: Calendar, label: 'When to book ahead', body: data.seasonNote },
  ].filter((s) => s.body);

  return (
    <main className="min-h-screen bg-white">
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[58vh] items-end overflow-hidden">
        <Image
          src={data.heroImage}
          alt={`Monthly car rental with driver in ${data.city}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/40" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-24 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="px-2 text-slate-500">/</span>
            <Link href="/monthly-car-rental" className="hover:text-white">Monthly car rental</Link>
            <span className="px-2 text-slate-500">/</span>
            <span className="text-white">{data.city}</span>
          </nav>

          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Monthly Car Rental with Driver in {data.city}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            A dedicated vehicle and a professional driver for 30 days, from{' '}
            {inr(pkg.vehicles[0].monthly)} a month with{' '}
            {pkg.includedKm.toLocaleString('en-IN')} km and {pkg.includedHoursPerDay} hours a day
            included.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              onClick={() => trackPhoneCall(`monthly-${data.slug}-hero`)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FACF2D] px-5 py-3 font-bold text-slate-900 transition hover:brightness-95"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
            <a
              href={`https://wa.me/91${PHONE}?text=${encodeURIComponent(msg)}`}
              onPointerDown={() => trackWhatsAppClick(`monthly-${data.slug}-hero`)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              WhatsApp for a quote
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[#FACF2D]" /> 30 days, one dedicated car
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-[#FACF2D]" /> Same driver throughout
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#FACF2D]" /> Fuel, driver and GST included
            </span>
          </div>
        </div>
      </section>

      {/* The short answer, rendered on the server. */}
      {shortAnswer}

      {/* ─── THE PACKAGE ──────────────────────────────────────────────── */}
      <section className="px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            What a month costs in {data.city}
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            The same published monthly package applies in every city we serve. Each rate covers 30
            days with one dedicated vehicle and driver,{' '}
            {pkg.includedKm.toLocaleString('en-IN')} km and {pkg.includedHoursPerDay} hours a day.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-slate-900">
                  <th className="pb-3 pr-4 text-sm font-bold uppercase tracking-wide text-slate-600">Vehicle</th>
                  <th className="pb-3 pr-4 text-sm font-bold uppercase tracking-wide text-slate-600">Seats</th>
                  <th className="pb-3 pr-4 text-sm font-bold uppercase tracking-wide text-slate-600">Included</th>
                  <th className="pb-3 text-sm font-bold uppercase tracking-wide text-slate-600">Per month</th>
                </tr>
              </thead>
              <tbody>
                {pkg.vehicles.map((v) => (
                  <tr key={v.key} className="border-b border-slate-200">
                    <td className="py-4 pr-4 font-semibold text-slate-900">{v.name}</td>
                    <td className="py-4 pr-4 text-slate-700 [font-variant-numeric:tabular-nums]">{v.seats}</td>
                    <td className="py-4 pr-4 text-slate-700 [font-variant-numeric:tabular-nums]">
                      {pkg.includedKm.toLocaleString('en-IN')} km · {pkg.includedHoursPerDay} hrs/day
                    </td>
                    <td className="py-4 text-lg font-bold text-slate-900 [font-variant-numeric:tabular-nums]">
                      {inr(v.monthly)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              'Fuel, the driver and GST are included in the monthly rate.',
              'Kilometres beyond the included 2,500 and hours beyond 8 a day are charged at the published extra rate.',
              'Tolls, parking, state permits and the driver night allowance are charged at actuals.',
              'One vehicle and one driver for the whole month, not a rotating fleet.',
            ].map((t) => (
              <p key={t} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE LOCAL PART ──────────────────────────────────────────── */}
      <section className="bg-slate-50 px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Monthly hire in {data.city}, specifically
          </h2>
          <p className="mt-2 text-slate-600">
            The rate is the same everywhere. What differs is how a car actually gets used here.
          </p>

          <div className="mt-9 space-y-7">
            {LOCAL.map(({ Icon, label, body }) => (
              <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h3 className="flex items-center gap-2.5 text-lg font-bold text-slate-900">
                  <Icon className="h-5 w-5 shrink-0 text-[#FACF2D]" />
                  {label}
                </h3>
                <p className="mt-2.5 leading-relaxed text-slate-700">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQS ─────────────────────────────────────────────────────── */}
      {Array.isArray(data.faqs) && data.faqs.length > 0 && (
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Monthly car rental in {data.city} — common questions
            </h2>
            <div className="mt-7 space-y-5">
              {data.faqs.map((f, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900">{f.question}</h3>
                  <p className="mt-2 leading-relaxed text-slate-700">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── OTHER CITIES ────────────────────────────────────────────── */}
      {otherCities.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-xl font-bold text-slate-900">Monthly car rental in other cities</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {otherCities.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  {c.city}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600">
              Looking for the package itself rather than a city?{' '}
              <Link href="/monthly-car-rental" className="font-semibold text-slate-900 underline decoration-[#FACF2D] decoration-2 underline-offset-4">
                Monthly car rental with driver
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* ─── CLOSING CTA ─────────────────────────────────────────────── */}
      <section className="bg-slate-900 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need a car for a month in {data.city}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Tell us the dates, the vehicle and roughly how far you expect to travel each day. We
            confirm the car, the driver and the monthly rate before it starts, and there is no
            advance payment.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE}`}
              onClick={() => trackPhoneCall(`monthly-${data.slug}-footer`)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3 font-bold text-slate-900 transition hover:brightness-95"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <a
              href={`https://wa.me/91${PHONE}?text=${encodeURIComponent(msg)}`}
              onPointerDown={() => trackWhatsAppClick(`monthly-${data.slug}-footer`)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp us
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <IndianRupee className="h-4 w-4" /> From {inr(pkg.vehicles[0].monthly)} a month
            <Clock className="ml-3 h-4 w-4" /> Available 24/7
          </p>
        </div>
      </section>
    </main>
  );
}
