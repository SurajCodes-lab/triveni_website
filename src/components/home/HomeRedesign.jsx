// Server component. The 'use client' directive was removed deliberately.
//
// This file is 459 lines — the hero, the trust strip, the popular-routes grid,
// the service and destination cards, the fare table, the reasons panel and the
// closing call-to-action. All of it was marked 'use client' so that two anchors
// in the closing CTA could fire an analytics event on click.
//
// The cost showed up in the Lighthouse trace as element render delay: the hero
// image finished downloading in 37 ms, then the browser could not paint it for
// another 1,155 ms because it was busy hydrating this entire tree. Nothing in
// it needed hydrating.
//
// The two tracked anchors now use <TrackedLink>, a small client island built for
// exactly this, and CabSearchWidget remains its own client component. Everything
// else renders on the server and paints without waiting for JavaScript.

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
// searchUtils is NOT imported here, for the reason given in CabSearchWidget:
// it reads the 470 KiB cityRoutesData.js. getPopularRoutes() takes no arguments,
// so its eight cards are resolved on the server and passed down as props.
import { phoneNumber } from '@/utilis/contact';
import TrackedLink from '@/components/ui/TrackedLink';
import GoogleReviewsBadge from '@/components/shared/GoogleReviewsBadge';
import { bookingCanonicalRedirects } from '@/lib/seo/booking-canonical-redirects.mjs';

const REDIRECT_SOURCES = new Set(bookingCanonicalRedirects.map((r) => r.source));

const slugify = (s) => String(s).toLowerCase().trim().replace(/\s+/g, '-');
const routeUrl = (from, to) => `/${slugify(from)}-to-${slugify(to)}`;

/* ───────────────────────── Hero ───────────────────────── */

function Hero({ cities = [] }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-800 bg-slate-950">
      <Image
        src="/images/HERO_SECTION_MAIN_PAGE.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={80}
        className="-z-20 object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/30" />
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
        <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-900">
          <Sparkles className="h-3.5 w-3.5" /> North India specialists since 2015
        </p>

        <h1 className="mt-4 max-w-2xl text-balance text-[2rem] font-black leading-[1.08] tracking-tight text-white sm:text-5xl">
          Outstation cabs.{' '}<br />Your next trip starts at{' '}
          <span className="text-amber-300">₹11/km.</span>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-100 sm:text-lg">
          One-way trips, round trips and airport pickups across North India.
          Choose your route and vehicle, then confirm the fare and inclusions with our team.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {['Delhi', 'Agra', 'Jaipur', 'Chandigarh'].map((city) => (
            <Link key={city} href={`/${city.toLowerCase()}`} className="inline-flex min-h-11 items-center rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800 hover:border-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700">
              {city} <ArrowRight className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
        </div>
        <div className="relative hidden aspect-[4/3] lg:block">
          <div className="absolute inset-x-0 bottom-0 rounded-2xl border border-white/20 bg-slate-950/75 p-7 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-300">City breaks · Hill escapes · Airport arrivals</p>
            <p className="mt-2 text-2xl font-bold">Your itinerary. Your own cab.</p>
          </div>
        </div>
        </div>

        <div className="mt-7 sm:mt-10">
          <h2 className="mb-3 text-lg font-bold text-white">Where would you like to go?</h2>
          <CabSearchWidget cities={cities} />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-100">
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-4 w-4 text-amber-400" /> 4.9 rated
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Verified drivers
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-sky-400" /> 24×7 dispatch
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Trust strip ─────────────────────── */

const TRUST = [
  // Week 53: the label read 'Rated by 10,000+ travellers'. The rating is
  // real — the Google Business Profile shows 4.9 — but the count was not,
  // and the same figure was removed from the structured markup in Week 52.
  // The rating stays; the count is dropped rather than corrected, because a
  // number beside a rating invites a reader to go and check it.
  { icon: Star, stat: '4.9★', label: 'Google rated' },
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

function PopularRoutes({ popularRoutes = [] }) {
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
  const routes = popularRoutes.filter((r) => !REDIRECT_SOURCES.has(routeUrl(r.from, r.to)));
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
              Starting one-way fares. Confirm toll, state tax and other inclusions before booking.
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
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
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
                  <span className="block text-[11px] text-slate-600">from</span>
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

// Each card carries the photograph from the service it links to, so the choice
// is made on the vehicle rather than on an icon. Every path below was checked
// against public/ before being used — a path that does not resolve produces a
// broken image rather than a build failure, which is how two pages shipped with
// missing imagery in Week 52.
const SERVICES = [
  { icon: Car, title: 'Outstation cabs', desc: 'One-way and round trip, 500+ routes', href: '/one-way-cab', accent: 'amber', image: '/images/car/swift_dzire.jpg' },
  { icon: Plane, title: 'Airport transfers', desc: 'Flight-tracked pickup, fixed fare', href: '/airport-service', accent: 'sky', image: '/images/airport_section.jpg' },
  { icon: Clock, title: 'Local & hourly', desc: '4hr/40km and 8hr/80km packages', href: '/4hr-40km-local-cab', accent: 'emerald', image: '/images/citypage_hero_section_image.jpg' },
  { icon: Users, title: 'Tempo traveller', desc: '12 to 26 seater, AC, with driver', href: '/tempo-traveller', accent: 'violet', image: '/images/tempo/17_seater.jpg' },
  { icon: Heart, title: 'Wedding cars', desc: 'Luxury fleet, decoration, baraat', href: '/wedding', accent: 'rose', image: '/images/wedding/luxury_car.jpg' },
  { icon: Bus, title: 'Corporate & events', desc: 'Employee transport, MICE, staff cabs', href: '/corporate-transportation-service', accent: 'slate', image: '/images/corporate/corporate-hero.jpg' },
];

function BrowseByService() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">What do you need?</h2>
        <p className="mt-1 text-sm text-slate-600">Six ways people book with us. Pick the one that fits your trip.</p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc, href, image }, i) => (
            <Link
              key={href}
              href={href}
              className="group overflow-hidden rounded-2xl border border-slate-200 transition hover:border-amber-300 hover:shadow-lg hover:shadow-slate-900/5"
            >
              {/* Fixed aspect ratio with `fill`, so the card reserves its space
                  before the image arrives and cannot shift the grid. The first
                  two load eagerly because they are usually above the fold on a
                  phone; the rest stay lazy. */}
              <span className="relative block aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/5 to-transparent" />
                <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-slate-900 shadow-sm transition group-hover:bg-amber-500 group-hover:text-white">
                  <Icon className="h-4.5 w-4.5" />
                </span>
              </span>
              <span className="block p-5">
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
          <TrackedLink
            track="phone"
            args={['home_closing_cta']}
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 font-black text-slate-900 transition hover:bg-amber-400"
          >
            <Phone className="h-5 w-5" /> {phoneNumber}
          </TrackedLink>
          <TrackedLink
            track="whatsapp"
            args={['home_closing_cta']}
            href={`https://wa.me/91${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 font-black text-white transition hover:bg-emerald-800"
          >
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Page ─────────────────── */

export default function HomeRedesign({ cities = [], popularRoutes = [], seasonalContent, bookingHelp }) {
  return (
    <>
      <Hero cities={cities} />
      <TrustStrip />
      <PopularRoutes popularRoutes={popularRoutes} />
      <BrowseByService />
      {seasonalContent}
      <Destinations />
      <FareTransparency />
      <WhyUs />
      {bookingHelp}
      <ClosingCTA />
    </>
  );
}
