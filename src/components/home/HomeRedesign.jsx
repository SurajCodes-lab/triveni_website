'use client';

/**
 * HomeRedesign — restructured Triveni Cabs homepage
 * =================================================
 *
 * Structure borrowed from Thrillophilia's browse-first pattern (credibility high
 * on the page, then repeated card collections the visitor scans rather than
 * reads) and adapted for a cab company, where the unit sold is a route rather
 * than a tour.
 *
 * The section order is driven by what the Week 43 Search Console analysis found,
 * not by taste:
 *
 * 1. The site earns 80% of its visibility on informational pages and ranks at
 *    position 13 on the pages that can take a booking. So every collection here
 *    points at a commercial page, and nothing links out to a distance guide.
 *
 * 2. Fares and tolls are the only things on this site that reliably earn a click
 *    — toll pages convert 11x better than distance pages at identical positions.
 *    So money is on the surface everywhere: every route card leads with a fare,
 *    and there is a dedicated rate-card section rather than a buried pricing page.
 *
 * 3. Trust sits directly under the hero, the way Thrillophilia puts its award and
 *    review count above the fold, because the competing results are aggregators
 *    with far bigger brands.
 *
 * FARE SOURCING — read before changing:
 * Route cards use getPopularRoutes(), which reads allCityRoutes, and they link to
 * the root /<from>-to-<to> page, which reads the SAME source. That pairing is
 * deliberate. The site currently has three pricing sources that disagree (see
 * docs/week-43-implementation-detailed.md), and the one guarantee worth keeping
 * is that the fare a visitor is shown matches the page they land on. Do not swap
 * the link target to /distance/* or /one-way-cab/* without also swapping the fare.
 */

import Link from 'next/link';
import Image from 'next/image';
import {
  Star, ArrowRight, Phone, Shield, Clock, CheckCircle, Car, Bus, Users,
  MapPin, Plane, Heart, ShieldCheck, Headphones, Sparkles,
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import CabSearchWidget from './CabSearchWidget';
import { getPopularRoutes } from '@/lib/searchUtils';
import { phoneNumber } from '@/utilis/data';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import LiveActivityBadge from '@/components/shared/LiveActivityBadge';
import GoogleReviewsBadge from '@/components/shared/GoogleReviewsBadge';
import { bookingCanonicalRedirects } from '@/lib/seo/booking-canonical-redirects.mjs';

const REDIRECT_SOURCES = new Set(bookingCanonicalRedirects.map((r) => r.source));

const slugify = (s) => String(s).toLowerCase().trim().replace(/\s+/g, '-');
const routeUrl = (from, to) => `/${slugify(from)}-to-${slugify(to)}`;

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-[560px] sm:min-h-[620px] overflow-hidden">
      <Image
        src="/images/HERO_SECTION_MAIN_PAGE.jpg"
        alt="Chauffeur-driven AC cab on a North India highway"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/40" />

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 sm:pt-20">
        <p className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300 ring-1 ring-amber-400/30">
          <Sparkles className="h-3.5 w-3.5" /> North India specialists since 2015
        </p>

        <h1 className="mt-4 max-w-2xl text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl">
          Chauffeur-driven cabs across North India, from{' '}
          <span className="text-amber-300">₹11/km</span>
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-200 sm:text-lg">
          Fixed fares quoted upfront. No surge, no hidden kilometres, toll shown
          before you book. Delhi, Agra, Jaipur, Shimla, Manali, Haridwar and 500+
          more.
        </p>

        <div className="mt-7 max-w-3xl rounded-2xl bg-white/95 p-3 shadow-2xl ring-1 ring-black/5 backdrop-blur sm:p-4">
          <CabSearchWidget />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-200">
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-4 w-4 text-amber-400" /> 4.9 rated
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Verified drivers
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-sky-400" /> 24×7 dispatch
          </span>
          <LiveActivityBadge />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Trust strip ─────────────────────── */

const TRUST = [
  { icon: Star, stat: '4.9★', label: 'Rated by 10,000+ travellers' },
  { icon: MapPin, stat: '500+', label: 'Cities and routes covered' },
  { icon: Shield, stat: '₹0', label: 'Surge pricing, ever' },
  { icon: Headphones, stat: '24×7', label: 'Human dispatch on call' },
];

function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
        {TRUST.map(({ icon: Icon, stat, label }) => (
          <div key={label} className="bg-white px-4 py-6 text-center">
            <Icon className="mx-auto h-5 w-5 text-amber-500" />
            <p className="mt-2 text-2xl font-black text-slate-900">{stat}</p>
            <p className="mt-1 text-xs leading-snug text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────── Popular routes (fare-led) ─────────────────── */

function PopularRoutes() {
  // Two guarantees, both enforced here rather than by hand:
  //
  // 1. No homepage link may pass through a 301. Week 43 consolidated 22 duplicate
  //    booking URLs, and two of the eight popular pairs (Delhi–Haridwar,
  //    Delhi–Manali) now redirect to /one-way-cab/*. Linking a homepage card at a
  //    redirect source wastes crawl budget and costs the visitor a hop.
  //
  // 2. The fare on the card must match the fare on the page it opens. These fares
  //    come from allCityRoutes, which is what the root /<from>-to-<to> page also
  //    renders. A route whose canonical target has moved to /one-way-cab/* would
  //    show one number and land on another, so it is dropped rather than relinked.
  //
  // Filtering on the live redirect map keeps this correct automatically as the
  // map grows, instead of leaving a stale hardcoded exclusion list behind.
  const routes = getPopularRoutes().filter((r) => !REDIRECT_SOURCES.has(routeUrl(r.from, r.to)));
  if (!routes.length) return null;

  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Most booked routes
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              All-inclusive one-way fares. Toll and state tax at actual, nothing else added.
            </p>
          </div>
          <Link href="/routes" className="hidden shrink-0 text-sm font-bold text-amber-700 hover:underline sm:block">
            All routes →
          </Link>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((r) => (
            <Link
              key={`${r.from}-${r.to}`}
              href={routeUrl(r.from, r.to)}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-lg"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                One way
              </p>
              <p className="mt-1 font-black text-slate-900">
                {r.from} → {r.to}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {r.distance} · {r.time}
              </p>
              <div className="mt-4 flex items-end justify-between">
                <span>
                  <span className="block text-[11px] text-slate-400">from</span>
                  <span className="text-xl font-black text-slate-900">{r.startingPrice}</span>
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-700 transition group-hover:bg-amber-500 group-hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Browse by service ─────────────────── */

const SERVICES = [
  { icon: Car, title: 'Outstation cabs', desc: 'One-way and round trip, 500+ routes', href: '/one-way-cab', accent: 'amber' },
  { icon: Plane, title: 'Airport transfers', desc: 'Flight-tracked pickup, fixed fare', href: '/airport-service', accent: 'sky' },
  { icon: Clock, title: 'Local & hourly', desc: '4hr/40km and 8hr/80km packages', href: '/4hr-40km-local-cab', accent: 'emerald' },
  { icon: Users, title: 'Tempo traveller', desc: '12 to 26 seater, AC, with driver', href: '/tempo-traveller', accent: 'violet' },
  { icon: Heart, title: 'Wedding cars', desc: 'Luxury fleet, decoration, baraat', href: '/wedding', accent: 'rose' },
  { icon: Bus, title: 'Corporate & events', desc: 'Employee transport, MICE, staff cabs', href: '/corporate-transportation-service', accent: 'slate' },
];

function BrowseByService() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">What do you need?</h2>
        <p className="mt-1 text-sm text-slate-600">Six ways people book with us. Pick the one that fits your trip.</p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-amber-300 hover:bg-amber-50/40"
            >
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white transition group-hover:bg-amber-500">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-black text-slate-900">{title}</span>
                <span className="mt-0.5 block text-sm text-slate-600">{desc}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Destinations ─────────────────── */

// Paths verified against public/images/sightseeing/. /images/destinations/ holds
// only delhi and mumbai, so it is not usable for a North India grid — and Mumbai
// is outside the service area entirely.
const DESTINATIONS = [
  { name: 'Delhi', href: '/delhi', img: '/images/sightseeing/Delhi/Delhi_hero_section.jpg' },
  { name: 'Agra', href: '/agra', img: '/images/sightseeing/Agra/Agra_Hero_section.jpg' },
  { name: 'Jaipur', href: '/jaipur', img: '/images/sightseeing/Jaipur/Hawa_Mahal.jpg' },
  { name: 'Shimla', href: '/shimla', img: '/images/sightseeing/Shimla/Mall_Road.jpg' },
  { name: 'Manali', href: '/manali', img: '/images/sightseeing/Manali/Manali_hero_section.jpg' },
  { name: 'Haridwar', href: '/haridwar', img: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg' },
  { name: 'Amritsar', href: '/amritsar', img: '/images/sightseeing/Amritsar/Golden_Temple.jpg' },
  { name: 'Nainital', href: '/nainital', img: '/images/sightseeing/Nainital/Nainital_hero_section.jpg' },
];

function Destinations() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Where are you headed?</h2>
        <p className="mt-1 text-sm text-slate-600">
          Local sightseeing, airport pickup and outstation cabs in every city we serve.
        </p>

        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {DESTINATIONS.map((d) => (
            <Link
              key={d.name}
              href={d.href}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800"
            >
              <Image
                src={d.img}
                alt={`Cab service in ${d.name}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <span className="text-sm font-black text-white">{d.name}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Fare transparency ─────────────────── */

const RATE_CARD = [
  { vehicle: 'Sedan — Dzire, Etios', seats: '4 seats', rate: '₹11/km' },
  { vehicle: 'Ertiga SUV', seats: '6 seats', rate: '₹15/km' },
  { vehicle: 'Innova Crysta', seats: '7 seats', rate: '₹18/km' },
  { vehicle: 'Tempo Traveller', seats: '12–26 seats', rate: '₹23/km' },
];

const TOLL_LINKS = [
  { label: 'Delhi → Dehradun', href: '/toll-cost/delhi-to-dehradun' },
  { label: 'Delhi → Haridwar', href: '/toll-cost/delhi-to-haridwar' },
  { label: 'Delhi → Chandigarh', href: '/toll-cost/delhi-to-chandigarh' },
  { label: 'Delhi → Jaipur', href: '/toll-cost/delhi-to-jaipur' },
  { label: 'Delhi → Agra', href: '/toll-cost/delhi-to-agra' },
  { label: 'Delhi → Manali', href: '/toll-cost/delhi-to-manali' },
];

function FareTransparency() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
            What it actually costs
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            The rate card, in full. Fuel, driver allowance and AC are inside the
            per-km rate. Toll and state tax are the only extras and they are paid
            at actual — we show you the toll before you book.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            {RATE_CARD.map((r, i) => (
              <div
                key={r.vehicle}
                className={`flex items-center justify-between gap-4 px-5 py-4 ${i % 2 ? 'bg-slate-50' : 'bg-white'}`}
              >
                <span>
                  <span className="block text-sm font-bold text-slate-900">{r.vehicle}</span>
                  <span className="text-xs text-slate-500">{r.seats}</span>
                </span>
                <span className="text-lg font-black text-slate-900">{r.rate}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Trips under 100 km are quoted on our 4hr/40km local package instead of
            the outstation minimum, so a short hop never bills like a long one.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
          <h3 className="text-lg font-black">Check the toll before you travel</h3>
          <p className="mt-2 text-sm text-slate-300">
            Plaza-by-plaza toll costs for the busiest North India corridors, with
            car and SUV rates and FASTag notes.
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {TOLL_LINKS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 ring-1 ring-white/10 transition hover:bg-amber-500 hover:text-slate-900"
              >
                {t.label}
              </Link>
            ))}
          </div>
          <Link href="/toll-cost" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-amber-300 hover:underline">
            All toll calculators <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Why us ─────────────────── */

const REASONS = [
  { icon: CheckCircle, title: 'The fare you are quoted is the fare you pay', desc: 'Written upfront before the trip. No surge at 6 AM, no “extra kilometres” at the end.' },
  { icon: ShieldCheck, title: 'Drivers we have actually verified', desc: 'Police-verified, licence-checked, and route-experienced. GPS-tracked throughout.' },
  { icon: Car, title: 'Cars that are genuinely maintained', desc: 'Serviced fleet, working AC, FASTag fitted. No 200,000 km taxis with a rattling door.' },
  { icon: Headphones, title: 'A person answers the phone', desc: 'Not a chatbot queue. Call 24×7 and speak to dispatch who can actually change your booking.' },
];

function WhyUs() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
          Why people book us over an aggregator
        </h2>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <p className="font-bold text-slate-900">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <GoogleReviewsBadge />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Closing CTA ─────────────────── */

function ClosingCTA() {
  return (
    <section className="bg-slate-900 py-14">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-black text-white sm:text-3xl">
          Tell us the route. We will quote it in two minutes.
        </h2>
        <p className="mt-3 text-slate-300">
          Call or WhatsApp for a fixed, all-inclusive fare with the toll broken out.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${phoneNumber}`}
            onClick={() => trackPhoneCall('home_closing_cta')}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 font-black text-slate-900 transition hover:bg-amber-400"
          >
            <Phone className="h-5 w-5" /> {phoneNumber}
          </a>
          <a
            href={`https://wa.me/91${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('home_closing_cta')}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-black text-white transition hover:bg-emerald-400"
          >
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Page ─────────────────── */

export default function HomeRedesign() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <PopularRoutes />
      <BrowseByService />
      <Destinations />
      <FareTransparency />
      <WhyUs />
      <ClosingCTA />
    </>
  );
}
