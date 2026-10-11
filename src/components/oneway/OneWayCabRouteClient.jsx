import SeasonalCorridorCallout from '@/components/seasonal/SeasonalCorridorCallout';
import { getRegionTheme } from '@/utilis/regionThemes';
import RegionNotesStrip from '@/components/seo/RegionNotesStrip';
import RoadParagraph from '@/components/seo/RoadParagraph';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, Shield, Clock, Car, CheckCircle2, IndianRupee, Route, Zap, MapPin, Navigation, Star, Users } from '@/components/ui/icons';
import { getCityImage, getVehicleImage } from '@/utilis/imageUtils';
import { generateUniqueIntro } from '@/utilis/uniqueIntroGenerator';
import LeadQuoteSection from '@/components/shared/LeadQuoteSection';
import TrackedLink from '@/components/ui/TrackedLink';
import FaqAccordion from '@/components/shared/FaqAccordion';
import StickyPriceBar from '@/components/shared/StickyPriceBar';
import InclusionBadges from '@/components/shared/InclusionBadges';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import RouteVisualization from '@/components/shared/RouteVisualization';
import SectionDivider from '@/components/shared/SectionDivider';
import FleetShowcase from '@/components/shared/FleetShowcase';
import {
  getPickupPoints,
  getTollDetails,
  STANDARD_INCLUSIONS,
  STANDARD_EXCLUSIONS,
  CANCELLATION_POLICY,
  getReviews,
  getThingsToDo,
  getTravelComparison,
  getSeasonalTips,
  getExtendedFaqs,
  getWhyOneWaySaves,
} from '@/utilis/oneWayCabEnrichment';
// Rich UI + ranking-lift components added May 2026
import InfographicPanel from '@/components/seo/InfographicPanel';
import PriceCalculator from '@/components/seo/PriceCalculator';
import OutboundCitations from '@/components/seo/OutboundCitations';
import ExpertQuote from '@/components/seo/ExpertQuote';
import CorridorLinks from '@/components/seo/CorridorLinks';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { getCitationsForRoute } from '@/utilis/outboundCitations';
import { getFounderQuoteForContext } from '@/utilis/expertQuotes';
// canonicalLink keeps these internal links off the Week 43 redirects — see
// src/lib/seo/canonical-link.js for why a prefix rule cannot do this.
import { canonicalLink } from '@/lib/seo/canonical-link';
import { clientRouteExists } from '@/lib/seo/client-route-exists';

export default function OneWayCabRouteClient({ route, relatedRoutes, corridorLinks = [], seasonalCallout = null, roadParagraph = null, planningGuide = null }) {
  const region = getRegionTheme(route.to);
  // Week 48: the "Plan Your Trip" cards below were synthesised from route.to for
  // every route — including the 190-odd destinations (Chitkul, Sarnath, Patiala,
  // Kumbhalgarh …) that have no guide page at all. Googlebot followed
  // /chitkul-travel-guide, /cab-service/sarnath, /best-time-to-visit/patiala and
  // friends straight into 404s. A card is offered only when its page was built.
  const toSlug = route.to.toLowerCase().replace(/\s+/g, '-');
  const relatedGuides = [
    { href: `/best-time-to-visit/${toSlug}`, Icon: Clock, title: `Best Time to Visit ${route.to}`, desc: 'Month-by-month weather, festivals, and peak-season guide.', cta: 'Read guide' },
    { href: `/cab-service/${toSlug}`, Icon: Car, title: `${route.to} Cab Service`, desc: `Local taxi, airport transfer, station pickup, outstation from ${route.to}.`, cta: 'Explore' },
    { href: `/${toSlug}-travel-guide`, Icon: MapPin, title: `${route.to} Travel Guide`, desc: `Attractions, itineraries, food, shopping tips for ${route.to}.`, cta: 'View guide' },
  ].filter((g) => clientRouteExists(g.href));
  // Rich content — use custom if provided on route object, else programmatic defaults
  const pickupPoints = route.pickupPoints || getPickupPoints(route.from);
  const tollDetails = route.tollDetails || getTollDetails(route);
  const inclusions = route.inclusions || STANDARD_INCLUSIONS;
  const exclusions = route.exclusions || STANDARD_EXCLUSIONS;
  const reviews = route.reviews || getReviews(route);
  const thingsToDo = route.thingsToDoAtDestination || getThingsToDo(route.to);
  const comparison = route.travelComparison || getTravelComparison(route);
  const seasonalTips = route.seasonalTips || getSeasonalTips(route.to);
  const whyOneWayText = route.whyOneWayText || getWhyOneWaySaves(route);
  const extendedFaqs = route.extendedFaqs || getExtendedFaqs(route);
  const allFaqs = [...route.faqs, ...extendedFaqs];
  const fromCityImage = getCityImage(route.from);
  const toCityImage = getCityImage(route.to);
  const heroWhatsappMessage = `Hi, I want to book a one-way cab from ${route.from} to ${route.to} (${route.distance}). Sedan is quoted at ${route.oneWayFares.sedan} — please confirm availability.`;

  // Rich UI + ranking-lift derived data (May 2026 sprint)
  const distanceKm = parseInt((route.distance || '').replace(/[^0-9]/g, ''), 10) || 233;
  const sedanFareNum = parseInt((route.oneWayFares?.sedan || '').replace(/[^0-9]/g, ''), 10) || 3800;
  const savingsAbs = Math.round(sedanFareNum * 0.5);
  const dashboardStats = [
    { value: distanceKm, suffix: ' km', label: 'Distance', sublabel: (route.highway || 'via highway').split(/\s+via\s+/i)[0].trim() },
    { value: parseFloat(((route.time || '4').toString().match(/[0-9.]+/) || ['4'])[0]) || 4, suffix: ' hr', label: 'Drive time', sublabel: 'with one tea stop' },
    { value: sedanFareNum, prefix: '₹', label: 'Sedan fare', sublabel: 'all-inclusive' },
    { value: savingsAbs, prefix: '₹', label: 'You save', sublabel: 'vs round-trip', format: 'compact' },
  ];
  const founderQuote = getFounderQuoteForContext('one-way');
  const citations = getCitationsForRoute({ from: route.from, to: route.to, context: 'outstation' });
  // Phase 3: unique, entity-rich, slug-seeded intro so each one-way route page reads differently.
  const uniqueIntro = generateUniqueIntro({
    origin: route.from,
    destination: route.to,
    distance: route.distance,
    time: route.time,
    highway: route.highway,
    attractions: (thingsToDo || []).slice(0, 2).map((t) => (typeof t === 'string' ? t : (t.title || t.name || t.place || ''))).filter(Boolean),
    vehicleType: 'AC sedan, SUV or tempo',
    slug: route.slug || `${route.from}-to-${route.to}`,
  });

  // Semantic fare table rows — same numbers as the vehicle cards, but in a real
  // <table> so AI answer engines can extract them as structured data.
  const fareTableRows = [
    { name: 'Sedan', model: 'Swift Dzire / Toyota Etios', seats: '4 passengers', bags: '2 large + 1 cabin', rate: '₹11/km', ow: route.oneWayFares.sedan, rt: route.roundTripFares.sedan, best: 'Couples and small families' },
    { name: 'Ertiga', model: 'Maruti Ertiga MUV', seats: '6 passengers', bags: '3 large + 2 cabin', rate: '₹15/km', ow: route.oneWayFares.ertiga, rt: route.roundTripFares.ertiga, best: 'Families of 5 to 6 with luggage' },
    { name: 'Innova Crysta', model: 'Toyota Innova Crysta', seats: '6 passengers', bags: '4 large + 2 cabin', rate: '₹18/km', ow: route.oneWayFares.innova, rt: route.roundTripFares.innova, best: 'Long hauls and premium comfort' },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-slate-950 text-white">
      <StickyPriceBar
        title={`${route.from} to ${route.to} One-Way Cab`}
        price={route.oneWayFares?.sedan || ''}
        badge="Save 50%"
        whatsappMessage={`Hi, I want to book a one-way cab from ${route.from} to ${route.to}`}
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO: Dramatic amber/gold gradient with destination bg image + animated flow
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-0 items-center overflow-hidden bg-[radial-gradient(circle_at_85%_12%,rgba(245,158,11,0.20),transparent_32%),linear-gradient(145deg,#020617_0%,#0f172a_58%,#29200b_100%)] py-4 md:min-h-[82vh] md:py-16">
        {/* Destination city background image — dimmed, adds visual richness */}
        <Image
          src={toCityImage}
          alt={`One-way cab from ${route.from} to ${route.to} — ${route.to} city view`}
          fill
          sizes="(max-width: 767px) 1px, 100vw"
          quality={80}
          className="hidden object-cover opacity-60 md:block"
        />
        {/* Animated gradient overlay */}
        <div className={`absolute inset-0 hidden ${region.scrim} md:block `} />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-[10%] hidden w-64 h-64 bg-amber-600/15 rounded-full blur-[120px] md:block" />
        <div className="absolute bottom-1/4 right-[10%] hidden w-80 h-80 bg-yellow-500/10 rounded-full blur-[140px] md:block" />
        <div className="absolute top-[60%] left-[40%] hidden w-40 h-40 bg-orange-500/10 rounded-full blur-[80px] md:block" />

        {/* Animated floating savings badge */}
        <div className="absolute top-24 right-[12%] hidden lg:block">
          <div className="relative">
            <div className="relative bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-600 rounded-full w-36 h-36 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-black text-white">{route.savingsPercent}</div>
                <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated directional arrows */}
        <div className="absolute bottom-32 right-[6%] hidden lg:flex items-center gap-3 opacity-20">
          {[0, 1, 2].map((i) => (
            <ArrowRight key={i} className="w-8 h-8 text-amber-400 animate-arrow-slide" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
        </div>

        {/* Bottom edge */}
        <div className="absolute -bottom-1 left-0 right-0 hidden h-32 bg-slate-950 md:block" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 60%)' }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-4 sm:px-6 md:py-28">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/15 px-4 py-2 rounded-full mb-4 border border-amber-500/25 md:px-5 md:py-2.5 md:mb-8 md:backdrop-blur-xl">
            <div className="w-2 h-2 bg-amber-400 rounded-full" />
            <span className="text-yellow-300 font-semibold text-sm tracking-wide">One-Way Cab &mdash; Pay Single Direction Only</span>
          </div>
          {/* region eyebrow — the destination's regional identity (src/utilis/regionThemes.js) */}
          <div className={`-mt-1 mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] md:-mt-4 md:mb-6 md:backdrop-blur-md ${region.chip}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${region.chipDot}`} aria-hidden="true" />
            {region.eyebrow}
          </div>

          {/* H1 — single primary heading for the route (was previously on the subtitle below — fixed for SEO).
              Visually the route name remains the largest element on the page; semantically it is now the H1. */}
          <h1 className="speakable-headline mb-4 text-balance text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">
            {route.from} to{' '}
            <span className="text-gradient-gold">{route.to}</span>
            <span className="mt-2 block text-xl font-extrabold leading-tight text-slate-100 sm:text-3xl">
              One-Way Cab from <span className="text-amber-300">{route.oneWayFares.sedan}</span>
            </span>
          </h1>

          {/* Answer first: short on mobile so the heading stays the LCP element;
              the detailed version remains visible on larger screens. */}
          <p className="speakable-lead sr-only mb-5 max-w-3xl text-sm font-semibold leading-snug text-slate-200 md:not-sr-only md:block">
            Sedan <span className="font-black text-amber-300">{route.oneWayFares.sedan}</span> · {route.distance} · {route.time} · via {route.highway}
          </p>

          {/* Mobile-only conversion row. The full CTA block further down this hero
              lands past the fold on a 360px screen, so the fare and both tap
              targets repeat here. Fixed button heights keep it CLS-free. */}
          <div className="md:hidden mb-6 rounded-2xl border border-amber-500/25 bg-slate-950/60 backdrop-blur-xl p-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-amber-400">{route.oneWayFares.sedan}</span>
              <span className="text-xs text-white/50">sedan &middot; one-way</span>
            </div>
            <p className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] text-white/45">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" aria-hidden="true" />
              <span className="font-semibold text-white/70">4.9</span>
              <span aria-hidden="true">&middot;</span><span>Since 2015</span>
              <span aria-hidden="true">&middot;</span><span>No hidden charges</span>
              <span aria-hidden="true">&middot;</span><span>Pay after trip</span>
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <TrackedLink
                track="whatsapp"
                args={['oneway_hero_mobile', heroWhatsappMessage]}
                href={`https://wa.me/917668570551?text=${encodeURIComponent(heroWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 font-bold text-white shadow-lg shadow-amber-500/20 active:scale-[0.97] transition-transform"
              >
                WhatsApp <ArrowRight className="w-4 h-4" />
              </TrackedLink>
              <TrackedLink
                track="phone"
                args={['oneway_hero_mobile']}
                href="tel:+917668570551"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 font-bold text-white active:scale-[0.97] transition-transform"
              >
                <Phone className="w-4 h-4" /> Call Now
              </TrackedLink>
            </div>
          </div>

          {/* Subtitle / lead — direct-answer paragraph (voice/AI answer target) */}
          <p className="speakable-lead mb-6 hidden max-w-3xl font-medium text-white/70 md:block md:text-2xl lg:text-3xl">
            A one-way cab from {route.from} to {route.to} costs <span className="text-amber-400 font-black">{route.oneWayFares.sedan}</span> for a Sedan ({route.distance} in {route.time} via {route.highway}), saving {route.savingsPercent} versus a round trip — you pay only the one-way distance, with FASTag and a verified driver included.
          </p>

          {/* Trust row sits with the fare above, where the decision is made */}
          <p className="hidden md:flex flex-wrap items-center gap-x-2 gap-y-1 mb-8 text-sm text-white/45">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden="true" />
            <span className="font-semibold text-white/70">4.9</span>
            <span aria-hidden="true">&middot;</span><span>Since 2015</span>
            <span aria-hidden="true">&middot;</span><span>No hidden charges</span>
            <span aria-hidden="true">&middot;</span><span>Pay after trip</span>
          </p>

          {/* Info pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-white/10 text-sm text-white/70">
              <Route className="w-4 h-4 text-amber-400" /> {route.distance}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-white/10 text-sm text-white/70">
              <Clock className="w-4 h-4 text-amber-400" /> {route.time}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-white/10 text-sm text-white/70">
              <Navigation className="w-4 h-4 text-amber-400" /> {route.highway}
            </span>
            <span className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-green-500/25 text-sm text-green-400 font-bold">
              <Zap className="w-4 h-4" /> Save {route.savings}
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <TrackedLink track="phone" args={['oneway_cab']} href="tel:+917668570551" className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4.5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:" /> Call: 7668570551
            </TrackedLink>
            <TrackedLink track="whatsapp" args={['oneway_cab']} href={`https://wa.me/917668570551?text=I want to book a one-way cab from ${route.from} to ${route.to}`} className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl text-white px-8 py-4.5 rounded-2xl font-bold text-lg border border-white/15 hover:bg-white/10 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
              WhatsApp Quote <ArrowRight className="w-5 h-5" />
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* In-window festival / yatra call-out for this destination (server-resolved, null on most routes). */}
      <SeasonalCorridorCallout callout={seasonalCallout} tone="dark" />

      {/* Region-specific driving notes — palette and copy differ by destination region. */}
      <RegionNotesStrip theme={region} origin={route.from} destination={route.to} />
      {/* Week 48 A3: the road paragraph for the fifty highest-traffic journeys, resolved on the server */}
      <RoadParagraph paragraph={roadParagraph} theme={region} />
      {planningGuide}

      <LeadQuoteSection fromCity={route.from} toCity={route.to} pageType="route" />

      {/* ═══════════════════════════════════════════════════════════════
          AEO QUICK ANSWER — fact-first block AI answer engines can lift
         ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950 px-4 sm:px-6 pt-8">
        <div className="max-w-4xl mx-auto">
          <QuickAnswer
            tone="dark"
            question={`How much does a ${route.from} to ${route.to} one-way cab cost?`}
            answer={`A ${route.from} to ${route.to} one-way cab costs ${route.oneWayFares.sedan} for a sedan (${route.distance}, about ${route.time}${route.highway ? ` via ${route.highway}` : ''}). Ertiga at ${route.oneWayFares.ertiga} and Innova Crysta at ${route.oneWayFares.innova} are available for larger groups. You pay only the one-way distance, so the fare is about ${route.savingsPercent} lower than a round trip, and it already includes fuel, driver allowance, AC and GST — tolls, parking and state tax are charged at actual.`}
            facts={[
              { label: 'Distance', value: route.distance },
              { label: 'Drive time', value: route.time },
              { label: 'Sedan fare', value: route.oneWayFares.sedan },
              { label: 'You save', value: `${route.savings} (${route.savingsPercent})` },
            ]}
          />
        </div>
      </section>

      <SocialProofStrip theme="dark" />

      {/* Freshness signal — visible "Last updated" for user trust + Google quality */}
      <div className="bg-gradient-to-r from-slate-950 via-amber-950/20 to-slate-950 border-y border-amber-500/10 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-xs text-white/50">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>Fares and route info last verified <span className="text-amber-300 font-semibold">April 17, 2026</span></span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span className="hidden sm:inline">Driver info updated every 72 hours</span>
        </div>
      </div>

      <RouteVisualization origin={route.from} destination={route.to} distance={route.distance} duration={route.duration} highway={route.highway} accentColor="amber" />

      {/* ═══════════════════════════════════════════════════════════════
          VEHICLE & PRICING: Premium cards with real vehicle imagery
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Choose Your Ride</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">What vehicle options and one-way fares are available for {route.from} to {route.to}?</h2>
            <p className="text-white/50 mt-4 text-base md:text-lg max-w-2xl mx-auto">{route.from} &rarr; {route.to} &bull; {route.distance} &bull; All fares already half of round-trip.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Sedan", model: "Swift Dzire / Etios", ow: route.oneWayFares.sedan, rt: route.roundTripFares.sedan, save: route.oneWayFares.sedan, seats: 4, bags: 2, img: getVehicleImage('sedan'), tagline: "Best for couples & small families", perks: ["AC cabin", "2 large + 1 cabin bag", "4 seatbelts"], gradient: "from-amber-500 to-yellow-600", accent: "amber", popular: false },
              { name: "Ertiga", model: "Maruti Ertiga SUV", ow: route.oneWayFares.ertiga, rt: route.roundTripFares.ertiga, save: route.oneWayFares.ertiga, seats: 6, bags: 3, img: getVehicleImage('ertiga'), tagline: "Sweet spot for family of 5–6", perks: ["Powerful AC", "3 large + 2 cabin bags", "6 seatbelts + boot"], gradient: "from-orange-500 to-amber-600", accent: "orange", popular: true },
              { name: "Innova Crysta", model: "Toyota Innova Crysta", ow: route.oneWayFares.innova, rt: route.roundTripFares.innova, save: route.oneWayFares.innova, seats: 6, bags: 4, img: getVehicleImage('innova'), tagline: "Premium comfort for long hauls", perks: ["Premium AC climate", "4 large + 2 cabin bags", "Captain seats + boot"], gradient: "from-yellow-500 to-amber-600", accent: "yellow", popular: false },
            ].map((v, i) => (
              <div key={i} className={`group relative bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl rounded-3xl border ${v.popular ? 'border-amber-400/50 shadow-2xl shadow-amber-500/20' : 'border-white/10 hover:border-amber-500/40'} overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col`}>

                {/* POPULAR badge */}
                {v.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-amber-500/40 uppercase tracking-wider">
                      <Star className="w-3 h-3 fill-white" /> Most Popular
                    </span>
                  </div>
                )}

                {/* Vehicle image — hero of the card */}
                <div className="relative h-48 md:h-52 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 overflow-hidden">
                  {/* Soft radial glow */}
                  <div className={`absolute inset-0 bg-gradient-radial from-${v.accent}-500/20 via-transparent to-transparent`} style={{ background: `radial-gradient(ellipse at center, rgba(245,158,11,0.15) 0%, transparent 70%)` }} />
                  <Image
                    src={v.img}
                    alt={`${v.name} — ${v.model} for ${route.from} to ${route.to} one-way cab`}
                    fill
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={90}
                  />
                  {/* Floor shadow effect */}
                </div>

                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  {/* Name + seats/bags specs */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-black text-xl md:text-2xl text-white">{v.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-full border border-amber-500/25">
                          <Users className="w-3 h-3" /> {v.seats}
                        </span>
                      </div>
                    </div>
                    <p className="text-white/45 text-sm">{v.model}</p>
                    <p className="text-amber-400/80 text-xs mt-2 font-semibold italic">{v.tagline}</p>
                  </div>

                  {/* Perks list */}
                  <ul className="space-y-1.5 mb-5 pb-5 border-b border-white/5">
                    {v.perks.map((p, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-white/55">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Fare breakdown */}
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between items-baseline">
                      <span className="text-white/50 text-xs uppercase tracking-wider font-semibold">One-Way Fare</span>
                      <span className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-400">{v.ow}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white/40">Round-trip elsewhere</span>
                      <span className="text-white/35 line-through font-semibold">{v.rt}</span>
                    </div>
                    <div className="flex justify-between items-center bg-gradient-to-r from-green-500/15 to-emerald-500/10 rounded-xl px-4 py-2.5 border border-green-500/25">
                      <span className="text-green-300 text-xs font-bold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" /> You save
                      </span>
                      <span className="text-base font-black text-green-400">{v.save}</span>
                    </div>
                  </div>

                  {/* CTAs — side by side */}
                  <div className="grid grid-cols-2 gap-2 mt-auto">
                    <TrackedLink
                      track="phone"
                      args={['oneway_cab']}
                      href="tel:+917668570551"
                      className={`inline-flex items-center justify-center gap-1.5 bg-gradient-to-r ${v.gradient} text-white px-4 py-3 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 hover:scale-[1.03] hover:shadow-amber-500/40 transition-all`}
                    >
                      <Phone className="w-4 h-4" /> Book
                    </TrackedLink>
                    <TrackedLink
                      track="whatsapp"
                      args={['oneway_cab']}
                      href={`https://wa.me/917668570551?text=I want ${v.name} one-way cab from ${route.from} to ${route.to}`}
                      className="inline-flex items-center justify-center gap-1.5 bg-white/5 text-white px-4 py-3 rounded-xl font-bold text-sm border border-white/15 hover:bg-white/10 hover:border-amber-500/40 transition-all"
                    >
                      WhatsApp
                    </TrackedLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance bar */}
          <div className="mt-10 bg-gradient-to-r from-white/5 via-amber-500/5 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-[11px] text-white/45 uppercase tracking-wider">Driver</p>
                  <p className="text-sm font-bold text-white">Verified &amp; Insured</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-[11px] text-white/45 uppercase tracking-wider">Billing</p>
                  <p className="text-sm font-bold text-white">Min 300 km</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-[11px] text-white/45 uppercase tracking-wider">FASTag</p>
                  <p className="text-sm font-bold text-white">Included</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-[11px] text-white/45 uppercase tracking-wider">Quote</p>
                  <p className="text-sm font-bold text-white">Upfront, No Surge</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Semantic fare table (AEO): same numbers as the cards above, in a
                real <table> so AI answer engines can extract them as data. ── */}
          {/* Mobile: stacked fare cards — no sideways scrolling */}
          <div className="mt-10 space-y-3 md:hidden">
            <p className="text-white/50 text-xs">
              {route.from} to {route.to} one-way cab fares by vehicle ({route.distance}, minimum 300 km billing)
            </p>
            {fareTableRows.map((v, i) => (
              <div key={`fare-card-${i}`} className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 p-4">
                <p className="text-white font-bold text-sm">
                  {v.name}
                  <span className="block text-white/40 text-xs font-medium mt-0.5">{v.model}</span>
                </p>
                <dl className="mt-3 space-y-1.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-white/40">Seats</dt>
                    <dd className="text-right text-sm text-white/70">{v.seats}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-white/40">Rate</dt>
                    <dd className="text-right text-sm text-white/70">{v.rate}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-white/40">One-way fare</dt>
                    <dd className="text-right text-sm text-amber-400 font-black">{v.ow}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-white/40">Round-trip fare</dt>
                    <dd className="text-right text-sm text-white/40 line-through">{v.rt}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-white/40">Luggage</dt>
                    <dd className="text-right text-xs leading-relaxed text-white/60">{v.bags}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-white/40">Best for</dt>
                    <dd className="text-right text-xs leading-relaxed text-white/60">{v.best}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          {/* Desktop: true semantic table, fits its container */}
          <div className="mt-10 hidden bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden md:block">
            <table className="w-full text-sm" data-speakable="true">
                <caption className="text-left text-white/50 text-xs px-5 pt-5 pb-3 caption-top">
                  {route.from} to {route.to} one-way cab fares by vehicle ({route.distance}, minimum 300 km billing)
                </caption>
                <thead className="bg-amber-500/10 border-y border-amber-500/20">
                  <tr>
                    <th scope="col" className="text-left p-4 text-amber-300 font-bold uppercase text-xs tracking-wider">Vehicle</th>
                    <th scope="col" className="text-left p-4 text-amber-300 font-bold uppercase text-xs tracking-wider">Seats</th>
                    <th scope="col" className="text-left p-4 text-amber-300 font-bold uppercase text-xs tracking-wider">Luggage</th>
                    <th scope="col" className="text-left p-4 text-amber-300 font-bold uppercase text-xs tracking-wider">Rate</th>
                    <th scope="col" className="text-left p-4 text-amber-300 font-bold uppercase text-xs tracking-wider">One-way fare</th>
                    <th scope="col" className="text-left p-4 text-amber-300 font-bold uppercase text-xs tracking-wider">Round-trip fare</th>
                    <th scope="col" className="text-left p-4 text-amber-300 font-bold uppercase text-xs tracking-wider">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {fareTableRows.map((v, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.04] transition-colors">
                      <th scope="row" className="p-4 text-left text-white font-bold align-top">
                        {v.name}
                        <span className="block text-white/40 text-xs font-medium mt-0.5">{v.model}</span>
                      </th>
                      <td className="p-4 text-white/70 align-top">{v.seats}</td>
                      <td className="p-4 text-white/60 text-xs leading-relaxed align-top">{v.bags}</td>
                      <td className="p-4 text-white/70 align-top">{v.rate}</td>
                      <td className="p-4 text-amber-400 font-black align-top">{v.ow}</td>
                      <td className="p-4 text-white/40 line-through align-top">{v.rt}</td>
                      <td className="p-4 text-white/60 text-xs leading-relaxed align-top">{v.best}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
          </div>

          <p className="text-white/35 text-xs mt-5 text-center">Toll, parking &amp; inter-state tax extra at actual. Driver allowance already included.</p>
        </div>
      </section>

      {/* Ornament divider */}
      <div className="flex items-center justify-center gap-3 py-2" aria-hidden="true">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/60" />
        <Navigation className="w-4 h-4 text-amber-400" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/60" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          ROUTE OVERVIEW: Visual route map with animated path
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Route Details</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">What route does the {route.from} to {route.to} taxi take?</h2>
          </div>

          <div className="bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl shadow-amber-500/5">
            {/* ── Journey timeline ── */}
            {(() => {
              const journey = [
                { name: route.from, role: 'Pickup point' },
                ...route.popularStops.map((s) => ({ name: s, role: 'En-route stop' })),
                { name: route.to, role: 'Drop point' },
              ];
              const dot = (role) =>
                role === 'Pickup point'
                  ? 'bg-gradient-to-br from-amber-500 to-yellow-600 shadow-lg shadow-amber-500/40'
                  : role === 'Drop point'
                  ? 'bg-gradient-to-br from-orange-500 to-yellow-600 shadow-lg shadow-orange-500/40'
                  : 'bg-white/10 border border-amber-500/40';
              return (
                <div className="mb-8">
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Your journey</span>
                  {/* Desktop: horizontal timeline */}
                  <div className="hidden md:flex items-start justify-between relative mt-5">
                    <div className="absolute top-5 left-10 right-10 h-px route-dashed text-amber-400/40" />
                    {journey.map((n, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center text-center flex-1 px-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${dot(n.role)}`}>
                          {n.role === 'En-route stop' ? <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> : <MapPin className="w-5 h-5 text-white" />}
                        </div>
                        <span className={`mt-2.5 font-bold ${n.role === 'En-route stop' ? 'text-white/80 text-sm' : 'text-white text-base'}`}>{n.name}</span>
                        <span className="text-white/30 text-[10px] uppercase tracking-wide">{n.role}</span>
                      </div>
                    ))}
                  </div>
                  {/* Mobile: vertical timeline */}
                  <ol className="md:hidden relative border-l-2 border-dashed border-amber-500/30 ml-5 mt-4 space-y-5">
                    {journey.map((n, i) => (
                      <li key={i} className="ml-6 relative">
                        <span className={`absolute -left-[35px] -top-0.5 w-6 h-6 rounded-full flex items-center justify-center ${dot(n.role)}`}>
                          {n.role === 'En-route stop' ? <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> : <MapPin className="w-3.5 h-3.5 text-white" />}
                        </span>
                        <span className={`font-bold ${n.role === 'En-route stop' ? 'text-white/80 text-sm' : 'text-white text-base'}`}>{n.name}</span>
                        <p className="text-white/30 text-[10px] uppercase tracking-wide">{n.role}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })()}

            {/* ── Stat chips ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              {[
                { icon: Navigation, label: 'Highway', value: route.highway },
                { icon: Route, label: 'Distance', value: route.distance },
                { icon: Clock, label: 'Travel Time', value: route.time },
              ].map((s, i) => (
                <div key={i} className="bg-white/[0.04] rounded-2xl border border-white/10 p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <s.icon className="w-4 h-4 text-amber-400" />
                    <p className="text-white/40 text-[10px] uppercase tracking-wider">{s.label}</p>
                  </div>
                  <p className="text-white font-bold text-sm leading-snug">{s.value}</p>
                </div>
              ))}
            </div>

            {/* ── Best time to leave (callout) ── */}
            {route.bestTime && (
              <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4 mb-5 flex gap-3">
                <Star className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-300 text-[11px] font-bold uppercase tracking-wide mb-1">Best time to leave</p>
                  <p className="text-white/70 text-sm leading-relaxed">{route.bestTime}</p>
                </div>
              </div>
            )}

            {/* ── Route highlights ── */}
            {route.highlights?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {route.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SEO DESCRIPTION: Rich content section
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/5 to-slate-950" />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-10 text-center tracking-tight">
            One Way Cab from <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-400">{route.from}</span> to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">{route.to}</span>
          </h2>
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10">
            <div className="space-y-5 text-white/60 text-lg leading-relaxed">
              {uniqueIntro && <p className="text-white/75">{uniqueIntro}</p>}
              {route.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THINGS TO DO AT DESTINATION — image-rich with destination photo
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/8 to-slate-950" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Explore {route.to}</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">What can you do in {route.to} after the drop?</h2>
            <p className="text-white/40 mt-4 text-base md:text-lg max-w-2xl mx-auto">Make the most of your {route.to} trip — here&apos;s our driver-curated shortlist.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Destination showcase image — left column, spans 2 rows */}
            <div className="lg:col-span-1 lg:row-span-2 relative rounded-3xl overflow-hidden h-72 lg:h-full min-h-[380px] group">
              <Image src={toCityImage} alt={`Sightseeing in ${route.to}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 33vw" quality={85} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-flex items-center gap-1.5 bg-amber-500/20 backdrop-blur-sm text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500/30 mb-3">
                  <MapPin className="w-3 h-3" /> Destination Guide
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{route.to}</h3>
                <p className="text-white/70 text-sm">Curated by drivers who run this route daily.</p>
              </div>
            </div>

            {/* Things to do cards */}
            {thingsToDo.slice(0, 5).map((item, i) => (
              <div key={i} className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-6 transition-all duration-300 hover:bg-white/[0.07]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-amber-500/30 to-yellow-500/20 rounded-xl flex items-center justify-center border border-amber-500/30">
                    <span className="text-amber-400 font-black text-lg">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h3 className="font-bold text-white text-lg">{item.title}</h3>
                      {item.time && <span className="text-[10px] font-bold text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-500/25 uppercase tracking-wider">{item.time}</span>}
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HOW IT WORKS: Animated numbered steps with glow
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Easy Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">How do I book a {route.from} to {route.to} one-way cab?</h2>
          </div>

          <div className="space-y-0 relative">
            <div className="absolute left-9 top-12 bottom-12 w-0.5 bg-gradient-to-b from-amber-500/60 via-yellow-500/40 to-orange-500/60" />
            {[
              { n: "1", t: "Share Your Route", d: `Call or WhatsApp 7668570551. Tell us "${route.from} to ${route.to}", your date, time, and vehicle preference.`, icon: Phone },
              { n: "2", t: "Get Instant Quote", d: `Receive a detailed fare breakdown within 2 minutes. Sedan ${route.oneWayFares.sedan} | Ertiga ${route.oneWayFares.ertiga} | Innova ${route.oneWayFares.innova}.`, icon: IndianRupee },
              { n: "3", t: "Confirm & Pay Small Advance", d: "Lock your ride with a small advance payment. The rest is payable directly to the driver after trip completion.", icon: Shield },
              { n: "4", t: "Enjoy Your One-Way Trip", d: `Verified driver picks you up on time in a clean, AC vehicle. Reach ${route.to} in ${route.time}. No return charges.`, icon: Car },
            ].map((step, i) => (
              <div key={i} className="flex gap-7 pb-12 last:pb-0 relative group">
                <div className="flex-shrink-0 relative z-10">
                  <div className="absolute -inset-2 bg-amber-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-[72px] h-[72px] bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/25 group-hover:shadow-amber-500/50 group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-black text-2xl">{step.n}</span>
                  </div>
                </div>
                <div className="pt-3">
                  <h3 className="font-black text-xl text-white mb-2 flex items-center gap-2">
                    {step.t}
                    <step.icon className="w-4 h-4 text-amber-400/60" />
                  </h3>
                  <p className="text-white/50 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY ONE-WAY: Arrow-shaped directional benefit cards
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Why Choose One-Way</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">How much do you save with one-way vs round-trip?</h2>
            <p className="text-white/40 mt-4 text-lg max-w-xl mx-auto">Why pay for a return trip you will never take?</p>
          </div>

          {/* Hero stat + 4 benefit cards in an asymmetric grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            {/* Left: Big savings hero stat (spans 2 cols) */}
            <div className="lg:col-span-2 relative bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-orange-500/15 backdrop-blur-xl rounded-3xl border border-amber-500/25 p-8 md:p-10 overflow-hidden flex flex-col justify-between min-h-[320px]">
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-[10px] font-black px-3 py-1.5 rounded-full border border-green-500/30 uppercase tracking-wider mb-6">
                  <Zap className="w-3 h-3" /> The big number
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl md:text-7xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400">{route.savingsPercent}</span>
                  <span className="text-2xl md:text-3xl font-black text-white/60">off</span>
                </div>
                <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-sm">
                  That&apos;s <span className="text-amber-300 font-black">{route.oneWayFares.sedan}</span> saved on a Sedan — because you never pay for the empty return.
                </p>
              </div>
              <div className="relative mt-6 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-white/50">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Savings are calculated vs our own round-trip fare, not inflated list prices.</span>
              </div>
            </div>

            {/* Right: 4 compact benefit cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, t: "Verified drivers", d: "Police-verified, 5+ years on this corridor. Uniformed, ID card on dashboard.", stat: "5+", statLabel: "yrs exp" },
                { icon: Car, t: "3 vehicle classes", d: "Sedan, Ertiga, Innova — all AC, under 4 years old, FASTag equipped.", stat: "3", statLabel: "options" },
                { icon: Clock, t: "24×7 booking", d: "Call, WhatsApp, or book online anytime. Night pickups & airport runs welcome.", stat: "24/7", statLabel: "support" },
                { icon: IndianRupee, t: "Transparent fare", d: "Quote confirmed before booking. Toll & state tax at actual — no surge pricing.", stat: "0", statLabel: "hidden fees" },
              ].map((item, i) => (
                <div key={i} className="group relative bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/40 p-5 md:p-6 transition-all duration-300 hover:bg-white/[0.07]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-11 h-11 bg-gradient-to-br from-amber-500/30 to-orange-500/20 rounded-xl flex items-center justify-center border border-amber-500/25 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-amber-300 to-orange-400 leading-none">{item.stat}</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-wider font-semibold mt-1">{item.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="font-black text-base text-white mb-1">{item.t}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRAVEL COMPARISON: Cab vs Train vs Bus vs Flight
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Compare Your Options</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">Cab vs train vs bus vs flight — what is the best way to travel {route.from} to {route.to}?</h2>
            <p className="text-white/40 mt-4 text-base md:text-lg max-w-2xl mx-auto">An honest comparison so you can pick what actually fits your trip.</p>
          </div>

          {/* Mobile: one card per mode — no sideways scrolling */}
          <div className="space-y-3 md:hidden">
            {comparison.map((c, i) => (
              <div
                key={`mode-card-${i}`}
                className={`backdrop-blur-xl rounded-2xl border p-4 ${i === 0 ? 'border-green-500/30 bg-green-500/5' : 'border-white/10 bg-white/[0.03]'}`}
              >
                <p className="text-white font-bold text-sm">
                  {i === 0 && <span className="inline-block mr-2 text-[10px] font-black bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full border border-green-500/30 align-middle">RECOMMENDED</span>}
                  {c.mode}
                </p>
                <dl className="mt-3 space-y-1.5">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-white/40">Time</dt>
                    <dd className="text-right text-sm text-white/70">{c.time}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-white/40">Cost</dt>
                    <dd className="text-right text-sm text-amber-400 font-bold">{c.cost}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-white/40">Pros</dt>
                    <dd className="text-right text-xs leading-relaxed text-white/60">{c.pros}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-white/40">Best For</dt>
                    <dd className="text-right text-xs leading-relaxed text-white/60">{c.best}</dd>
                  </div>
                </dl>
              </div>
            ))}
            <p className="text-white/40 text-xs pt-2 text-center">Prices are approximate market rates as of 2026. Triveni Cabs™ one-way fare is guaranteed at the time of booking.</p>
          </div>

          {/* Desktop: true semantic table, fits its container */}
          <div className="hidden bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden md:block">
            <table className="w-full text-sm">
                <thead className="bg-amber-500/10 border-b border-amber-500/20">
                  <tr>
                    <th className="text-left p-5 text-amber-300 font-bold uppercase text-xs tracking-wider">Mode</th>
                    <th className="text-left p-5 text-amber-300 font-bold uppercase text-xs tracking-wider">Time</th>
                    <th className="text-left p-5 text-amber-300 font-bold uppercase text-xs tracking-wider">Cost</th>
                    <th className="text-left p-5 text-amber-300 font-bold uppercase text-xs tracking-wider">Pros</th>
                    <th className="text-left p-5 text-amber-300 font-bold uppercase text-xs tracking-wider">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((c, i) => (
                    <tr key={i} className={`border-b border-white/5 hover:bg-white/[0.04] transition-colors ${i === 0 ? 'bg-green-500/5' : ''}`}>
                      <td className="p-5 text-white font-bold">
                        {i === 0 && <span className="inline-block mr-2 text-[10px] font-black bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full border border-green-500/30">RECOMMENDED</span>}
                        {c.mode}
                      </td>
                      <td className="p-5 text-white/70">{c.time}</td>
                      <td className="p-5 text-amber-400 font-bold">{c.cost}</td>
                      <td className="p-5 text-white/60 text-xs leading-relaxed">{c.pros}</td>
                      <td className="p-5 text-white/60 text-xs leading-relaxed">{c.best}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
            <p className="text-white/40 text-xs p-5 text-center border-t border-white/5">Prices are approximate market rates as of 2026. Triveni Cabs™ one-way fare is guaranteed at the time of booking.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TOLL & TAX BREAKDOWN — transparent pricing
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Transparent Pricing</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">What are the toll and state tax charges on {route.from} to {route.to}?</h2>
            <p className="text-white/40 mt-4 text-base md:text-lg max-w-2xl mx-auto">We show you exactly what to expect — no bill shock at drop-off.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gradient-to-br from-amber-950/40 to-slate-950 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30"><IndianRupee className="w-5 h-5 text-amber-400" /></div>
                <h3 className="font-black text-xl text-white">Estimated Toll</h3>
              </div>
              <p className="text-3xl font-black text-amber-400 mb-4">{tollDetails.estimated}</p>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{tollDetails.paymentMode}</p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">Major Toll Plazas</p>
                <div className="flex flex-wrap gap-2">
                  {tollDetails.plazas.map((p, i) => (
                    <span key={i} className="text-[11px] bg-amber-500/10 text-yellow-300 px-3 py-1 rounded-full border border-amber-500/20 font-semibold">{p}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-950 backdrop-blur-xl rounded-3xl border border-white/10 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30"><Shield className="w-5 h-5 text-orange-400" /></div>
                <h3 className="font-black text-xl text-white">Inter-State Tax</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{tollDetails.statetax}</p>
              <div className="bg-green-500/10 rounded-2xl p-4 border border-green-500/20">
                <p className="text-green-300 text-sm font-bold flex items-start gap-2"><CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Driver allowance, fuel, AC, and GPS tracking are already included in the fare quoted.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PICKUP POINTS: Anywhere in {from} city
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/5 to-slate-950" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Doorstep Pickup</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">Where in {route.from} do we pick you up?</h2>
            <p className="text-white/40 mt-4 text-base md:text-lg">Airports, stations, hotels, homes — we come to you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pickupPoints.map((p, i) => (
              <div key={i} className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-5 transition-all duration-300 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500/30 to-yellow-500/20 rounded-xl flex items-center justify-center border border-amber-500/30">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-base">{p.name}</h3>
                  <p className="text-white/45 text-xs mt-1">{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INCLUSIONS / EXCLUSIONS — side-by-side
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">What&apos;s Included</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">What is included and excluded in the fare?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-950/30 to-slate-950 backdrop-blur-xl rounded-3xl border border-green-500/20 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                <h3 className="font-black text-xl text-white">Included in Fare</h3>
              </div>
              <ul className="space-y-3">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-950/30 to-slate-950 backdrop-blur-xl rounded-3xl border border-orange-500/20 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30"><IndianRupee className="w-5 h-5 text-orange-400" /></div>
                <h3 className="font-black text-xl text-white">Extra (Paid at Actual)</h3>
              </div>
              <ul className="space-y-3">
                {exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CUSTOMER REVIEWS — route-specific social proof
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/8 to-slate-950" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Traveller Reviews</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">What do {route.from} to {route.to} passengers say about us?</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />))}
              <span className="text-white/70 font-bold ml-2">4.9 / 5</span>
              <span className="text-white/40 text-sm">({reviews.length}+ recent reviews on this route)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-amber-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-black text-sm">{r.name.charAt(0)}</div>
                    <div>
                      <p className="font-bold text-white text-sm">{r.name}</p>
                      <p className="text-white/40 text-[11px]">{r.date} · {r.vehicle}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(r.rating)].map((_, s) => (<Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />))}
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SEASONAL TRAVEL TIPS
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Plan the Right Month</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">When is the best time to travel from {route.from} to {route.to}?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {seasonalTips.map((s, i) => (
              <div key={i} className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-amber-500/30 transition-all duration-300">
                <h3 className="font-black text-white text-lg mb-2 flex items-center gap-2"><Clock className="w-4 h-4 text-amber-400" />{s.season}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY ONE-WAY SAVES — rich explainer text
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-green-950/15 to-slate-950" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-green-400 font-semibold text-sm tracking-widest uppercase">Math of the Savings</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">Why is one-way the right choice for {route.from} to {route.to}?</h2>
          </div>
          <div className="bg-gradient-to-br from-green-950/30 to-slate-950 backdrop-blur-xl rounded-3xl border border-green-500/20 p-8 md:p-10">
            <p className="text-white/70 text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: whyOneWayText.replace(/\*\*(.+?)\*\*/g, '<strong class="text-green-400">$1</strong>') }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CANCELLATION POLICY
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Flexible Cancellation</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">What is the cancellation and refund policy?</h2>
          </div>
          <div className="bg-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            {CANCELLATION_POLICY.map((c, i) => (
              <div key={i} className={`flex items-center justify-between gap-4 p-5 md:p-6 ${i !== CANCELLATION_POLICY.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/[0.02] transition-colors`}>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-500/15 rounded-xl flex items-center justify-center border border-amber-500/25">
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <p className="font-bold text-white">{c.window}</p>
                </div>
                <span className={`text-sm font-bold ${i === 0 ? 'text-green-400' : i === 1 ? 'text-yellow-400' : 'text-orange-400'}`}>{c.charge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InclusionBadges preset="outstation" theme="dark" />
      <SectionDivider color="amber" className="my-8" />

      <FleetShowcase
        theme="light"
        accentColor="amber"
        whatsappMessage={`Hi, I need one-way cab from ${route.from} to ${route.to}`}
        title={`Our Fleet for ${route.from} to ${route.to}`}
        subtitle="Choose your ride for this one-way route"
      />

      {/* ═══════════════════════════════════════════════════════════════
          RICH-UI: Infographic + Price Calculator (May 2026 sprint)
          Animated counters drive dwell-time; interactive calculator drives
          conversion intent — both are direct ranking signals.
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3">
            <InfographicPanel
              title={`The ${route.from} to ${route.to} one-way taxi by the numbers`}
              subtitle={`Independent operator data refreshed weekly against actual driver invoices. Routes via ${route.highway || 'the primary highway'}.`}
              stats={dashboardStats}
              tone="amber"
            />
          </div>
          <div className="lg:col-span-2">
            <PriceCalculator
              distanceKm={distanceKm}
              mode="one-way"
              vehicles={[
                // minKm mirrors the 300 km billing floor in calcFares(), so the
                // calculator's default sedan estimate matches the fare quoted in
                // the hero, the QuickAnswer and the vehicle cards.
                { key: 'sedan', label: 'Sedan', ratePerKm: 11, minKm: 300 },
                { key: 'suv', label: 'SUV', ratePerKm: 14, minKm: 300 },
                { key: 'tempo12', label: '12-Seater', ratePerKm: 20, minKm: 300 },
                { key: 'tempo17', label: '17-Seater', ratePerKm: 24, minKm: 300 },
              ]}
              tone="amber"
              originName={route.from}
              destinationName={route.to}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          EXPERT QUOTE (E-E-A-T signal — +41% AI citation lift per Princeton GEO)
         ═══════════════════════════════════════════════════════════════ */}
      {founderQuote && (
        <section className="py-10 px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <ExpertQuote
              quote={founderQuote.quote}
              authorName={founderQuote.author}
              authorTitle={founderQuote.title}
              authorOrg={founderQuote.org}
              tone="dark"
            />
          </div>
        </section>
      )}

      <FaqAccordion
        heading={`Frequently asked questions about ${route.from} to ${route.to} taxi`}
        faqs={allFaqs}
      />

      {/* ═══════════════════════════════════════════════════════════════
          OUTBOUND CITATIONS — authority signal (+30% AI citation lift)
         ═══════════════════════════════════════════════════════════════ */}
      {citations.length > 0 && (
        <section className="py-12 px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <OutboundCitations sources={citations} tone="dark" heading="Verified against these sources" />
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          CORRIDOR CLUSTER: same route across other travel formats
         ═══════════════════════════════════════════════════════════════ */}
      {corridorLinks.length > 0 && (
        <section className="py-10 md:py-14 px-4 sm:px-6 relative">
          <div className="relative max-w-5xl mx-auto">
            <CorridorLinks
              links={corridorLinks}
              fromLabel={route.from}
              toLabel={route.to}
              theme="dark"
            />
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          RELATED ROUTES: Arrow-directional link cards
         ═══════════════════════════════════════════════════════════════ */}
      {relatedRoutes.length > 0 && (
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/5 to-slate-950" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">More Routes</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mt-3 tracking-tight">Which other one-way routes can we book from {route.from}?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedRoutes.map((r, i) => (
                <Link
                  key={i}
                  href={canonicalLink(`/one-way-cab/${r.slug}`)}
                  className="group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-5 transition-all duration-300 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-amber-500/10 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-white group-hover:text-amber-400 transition-colors">{r.from}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-amber-500/40 to-transparent" />
                    <ArrowRight className="w-4 h-4 text-amber-500/50 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                    <div className="flex-1 h-px bg-gradient-to-l from-yellow-500/40 to-transparent" />
                    <span className="font-bold text-white group-hover:text-yellow-400 transition-colors">{r.to}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/40">{r.distance} &bull; {r.time}</span>
                    <span className="text-amber-400 font-black">{r.oneWayFares.sedan}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/one-way-cab" className="group inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-amber-400 hover:text-white px-6 py-3 rounded-2xl font-bold border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/20 transition-all duration-300">
                View All One-Way Routes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          RELATED GUIDES — cross-links to destination's best-time / cab-service / travel guide
          (Week 48: only the guide pages that exist for this destination; the whole
          section is skipped when there are none — see relatedGuides above)
         ═══════════════════════════════════════════════════════════════ */}
      {relatedGuides.length > 0 && (
      <section className="py-14 md:py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/5 to-slate-950" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Plan Your {route.to} Trip</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mt-3 tracking-tight">Want more on {route.to}? Travel guides &amp; tours</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedGuides.map((g) => (
            <Link key={g.href} href={g.href} className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-5 transition-all duration-300 hover:bg-white/[0.07]">
              <g.Icon className="w-6 h-6 text-amber-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-1">{g.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{g.desc}</p>
              <span className="mt-3 inline-flex items-center text-amber-400 text-xs font-bold gap-1 group-hover:translate-x-1 transition-transform">{g.cta} <ArrowRight className="w-3 h-3" /></span>
            </Link>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA: Bold savings banner with animated glow
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-amber-900/60 via-yellow-900/40 to-orange-900/50 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 lg:p-20 text-center overflow-hidden border border-amber-500/20">
            {/* Animated glowing orbs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/15 rounded-full blur-[120px]" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-green-500/15 backdrop-blur-sm px-6 py-2.5 rounded-full mb-8 border border-green-500/25">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-green-300 font-bold text-sm">Save {route.savings} on this route</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight">
                Book Your One-Way Cab
              </h2>
              <p className="text-white/50 mb-4 text-xl font-medium">
                {route.from} <span className="text-amber-400">&rarr;</span> {route.to}
              </p>
              <p className="text-white/40 mb-12 text-lg max-w-xl mx-auto">
                Sedan {route.oneWayFares.sedan} &bull; Ertiga {route.oneWayFares.ertiga} &bull; Innova {route.oneWayFares.innova} &bull; {route.distance} &bull; {route.time}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <TrackedLink track="phone" args={['oneway_cab']} href="tel:+917668570551" className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5 group-hover:" /> Call: 7668570551
                </TrackedLink>
                <TrackedLink track="whatsapp" args={['oneway_cab']} href={`https://wa.me/917668570551?text=I want to book a one-way cab from ${route.from} to ${route.to}`} className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 hover:border-amber-500/40 transition-all duration-300">
                  WhatsApp <ArrowRight className="w-5 h-5" />
                </TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
