'use client';

// ============================================================================
// RouteClientContent — Ultra-Premium v2 uplift (Aug 2026)
// Covers ~400 pages: city hubs (/delhi) and x-to-y routes (/delhi-to-agra).
// v2 idiom: cinematic visible destination-photo hero, serif display headlines
// with gold-foil accent word, glass panels, dark↔warm-light section rhythm,
// gold lane motif, TrustSeal emblem, sheen gold CTAs with black text.
// No framer-motion — CSS-only transitions (INP-friendly). 360px-first.
// All AEO/speakable markup, FAQs, links and data-driven content preserved.
// ============================================================================

import React, { useState, useMemo, useCallback } from "react";
import SeasonalCorridorCallout from '@/components/seasonal/SeasonalCorridorCallout';
import { getRegionTheme } from '@/utilis/regionThemes';
import RegionNotesStrip from '@/components/seo/RegionNotesStrip';
import RoadParagraph from '@/components/seo/RoadParagraph';
import Link from '@/components/ui/JourneyLink';
import Image from "next/image";
// Centralized icon imports for better bundle optimization
import {
  Phone, MapPin, Car, ChevronRight, Users, ArrowRight, Clock,
  Star, Shield, CheckCircle, Navigation, CreditCard, Headphones,
  Award, Sparkles, Route, Fuel, Zap, Gift, Bus,
  BadgeCheck, Snowflake, CircleDot, ShieldCheck
} from "@/components/ui/icons";
import { WhatsAppIcon as BsWhatsapp } from "@/components/ui/icons";
import { phoneNumber } from '@/utilis/contact';
// officeLocations and cityLocalInfo are NOT imported here. Between them they
// are ~51 KB of lookup tables covering every city, and this client component
// renders on 322 route pages to show one entry from each. Both lookups now
// happen on the server and arrive as props.
import OfficeLocations from "@/components/cities/OfficeLocations";
import dynamic from 'next/dynamic';

// Dynamically import FareCalculator (client-only, below fold)
const FareCalculator = dynamic(() => import('@/components/calculator/FareCalculator'), { ssr: false });
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import CityRouteVehicles from '@/components/cityroute/CityRouteVehicles';
import RouteLine from '@/components/ui/RouteLine';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import { generateUniqueIntro } from '@/utilis/uniqueIntroGenerator';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';

// SEO Components
import QuickAnswer from '@/components/seo/QuickAnswer';
import { canonicalClientHref } from '@/lib/seo/client-route-exists';
import { groupDigits } from '@/utilis/pricing';
// relatedContent, relatedRoutes and serviceCrossLinks arrive as props now,
// computed on the server. Importing linkingHelper here pulled sightseeingData.js
// (1.3 MB) into the browser bundle for every one of these 322 pages.

// Vehicle image mapping
const vehicleImageMap = {
  'Sedan': '/images/car/swift_dzire.jpg',
  'SUV Ertiga': '/images/car/ertiga.jpg',
  'SUV Innova': '/images/car/innova_crysta.jpg',
  '12 Seater Tempo': '/images/tempo/12_seater.jpg',
  '16 Seater Tempo': '/images/tempo/16_seater.jpg',
  '17 Seater Tempo': '/images/tempo/17_seater.jpg',
  '20 Seater Tempo': '/images/tempo/20_seater.jpg',
  '26 Seater Maharaja': '/images/tempo/26_seater.jpg',
  'Tempo Traveller': '/images/tempo/17_seater.jpg',
  '22 Seater Mini Bus': '/images/bus/22_SEATER_BUS.jpg',
  '25 Seater Mini Bus': '/images/bus/25_SEATER_BUS.jpg',
  '27 Seater Coach': '/images/bus/27_SEATER_BUS.jpg',
  '35 Seater Coach': '/images/bus/35_SEATER_BUS.jpg',
  '41 Seater Bus': '/images/bus/41_SEATER_BUS.jpg',
  '45 Seater Luxury Bus': '/images/bus/45_SEATER_BUS.jpg',
  '52 Seater Bus': '/images/bus/49_SEATER_BUS.jpg',
  '56 Seater Volvo Bus': '/images/bus/56_SEATER_BUS.jpg'
};

const vehicleCapacityMap = {
  'Sedan': { seats: '4', bags: '2', icon: Car, type: 'car' },
  'SUV Ertiga': { seats: '6', bags: '3', icon: Car, type: 'car' },
  'SUV Innova': { seats: '7', bags: '4', icon: Car, type: 'car' },
  '12 Seater Tempo': { seats: '12', bags: '12', icon: Users, type: 'tempo' },
  '16 Seater Tempo': { seats: '16', bags: '16', icon: Users, type: 'tempo' },
  '17 Seater Tempo': { seats: '17', bags: '17', icon: Users, type: 'tempo' },
  '20 Seater Tempo': { seats: '20', bags: '20', icon: Users, type: 'tempo' },
  '26 Seater Maharaja': { seats: '26', bags: '26', icon: Users, type: 'tempo' },
  'Tempo Traveller': { seats: '17', bags: '17', icon: Users, type: 'tempo' },
  '22 Seater Mini Bus': { seats: '22', bags: '22', icon: Bus, type: 'bus' },
  '25 Seater Mini Bus': { seats: '25', bags: '25', icon: Bus, type: 'bus' },
  '27 Seater Coach': { seats: '27', bags: '27', icon: Bus, type: 'bus' },
  '35 Seater Coach': { seats: '35', bags: '35', icon: Bus, type: 'bus' },
  '41 Seater Bus': { seats: '41', bags: '41', icon: Bus, type: 'bus' },
  '45 Seater Luxury Bus': { seats: '45', bags: '45', icon: Bus, type: 'bus' },
  '52 Seater Bus': { seats: '52', bags: '52', icon: Bus, type: 'bus' },
  '56 Seater Volvo Bus': { seats: '56', bags: '56', icon: Bus, type: 'bus' }
};

// Honest photo for any fare-row vehicle: exact map hit first, then derived.
function getFareVehicleImage(name) {
  if (vehicleImageMap[name]) return vehicleImageMap[name];
  const n = String(name || '').toLowerCase();
  const seatMatch = n.match(/(\d+)\s*seater/);
  if (seatMatch && ['12', '16', '17', '20', '26'].includes(seatMatch[1]) && !n.includes('bus') && !n.includes('coach')) {
    return `/images/tempo/${seatMatch[1]}_seater.jpg`;
  }
  if (n.includes('ertiga')) return '/images/car/ertiga.jpg';
  if (n.includes('innova') || n.includes('suv')) return '/images/car/innova_crysta.jpg';
  if (n.includes('bus') || n.includes('coach')) return '/images/bus/45_SEATER_BUS.jpg';
  if (n.includes('tempo') || n.includes('maharaja') || n.includes('traveller')) return '/images/tempo/17_seater.jpg';
  return '/images/car/swift_dzire.jpg';
}

// A city name put straight into an href produces "/jim corbett", which is not a
// page. Both /jim-corbett and /mount-abu exist and were unreachable through these
// links; the server log shows the malformed versions being requested and 404ing.
function citySlug(name) {
  return String(name || '').trim().toLowerCase().replace(/\s+/g, '-');
}

function createRouteSlug(cityName, destination) {
  if (!cityName || !destination) return '';
  return `${cityName.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
}

// Gold lane divider — the v2 route motif under section headings.
function LaneDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-[2px] w-14 route-dashed text-amber-400/70" />
      <CircleDot className="h-3.5 w-3.5 text-amber-400" />
      <span className="h-[2px] w-14 route-dashed text-amber-400/70" />
    </div>
  );
}

// TrustSeal emblem — compact circular brand seal.
function TrustSeal({ tone = 'dark' }) {
  const isDark = tone === 'dark';
  return (
    <div className="flex items-center gap-3">
      <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${isDark ? 'border border-amber-400/50 bg-amber-400/10' : 'border border-amber-500/40 bg-amber-400/10'}`}>
        <div className="absolute inset-1 rounded-full border border-dashed border-amber-400/40" aria-hidden="true" />
        <Award className={`h-6 w-6 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
      </div>
      <div className="min-w-0">
        <p className={`text-[0.65rem] font-black uppercase tracking-[0.22em] ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>Triveni TrustSeal</p>
        <p className={`text-xs font-semibold ${isDark ? 'text-white/70' : 'text-slate-600'}`}>4.9★ · 10,000+ trips · Since 2018</p>
      </div>
    </div>
  );
}

export default function RouteClientContent({
  cityName,
  formattedCityName,
  destination,
  formattedDestination,
  estimatedDistance,
  estimatedTime,
  route,
  routes,
  vehiclesServices, relatedContent = [], relatedRoutes = [], serviceCrossLinks = [],
  destinationInfo = null, routeOffices = [], seasonalCallout = null, roadParagraph = null, planningGuide = null, stopLinks,}) {
  const [tripType, setTripType] = useState('oneWay');
  // Regional design system for this destination (palette, motif, driving notes).
  const region = getRegionTheme(formattedDestination || destination);
  // Phase 3: unique, entity-rich, slug-seeded intro so each city-route page reads differently.
  const uniqueIntro = generateUniqueIntro({
    origin: formattedCityName || cityName,
    destination: formattedDestination || destination,
    distance: (route && route.distance) || estimatedDistance,
    time: (route && route.time) || estimatedTime,
    highway: (route && (route.routeHighlights || route.highway)) || '',
    attractions: (route && (route.popularStops || route.attractions)) || [],
    vehicleType: 'AC sedan, SUV or tempo',
    slug: createRouteSlug(cityName, destination),
  });

  // routeOffices arrives as a prop. See the note on the imports above.

  const handleCallNow = useCallback(() => {
    window.location.href = `tel:+91${phoneNumber}`;
  }, []);

  const whatsappMessage = useMemo(
    () => `Hi, I want to book a ${tripType === 'roundTrip' ? 'round trip' : 'one-way'} cab from ${formattedCityName} to ${formattedDestination}. Please share pricing and availability.`,
    [formattedCityName, formattedDestination, tripType]
  );

  const handleWhatsApp = useCallback(() => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  }, [whatsappMessage]);

  // Vehicle-specific booking — richer lead than the generic route message.
  const handleVehicleBook = useCallback((v) => {
    const msg = `Hi, I want to book a ${v?.name || 'cab'} from ${formattedCityName} to ${formattedDestination} (${tripType === 'roundTrip' ? 'round trip' : 'one way'})${v?.price ? ` — ${v.price}` : ''}. Please share availability.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  }, [formattedCityName, formattedDestination, tripType]);

  // Cinematic hero photo — destination first, origin as fallback.
  const heroImage = getCityImage(formattedDestination) || getCityImage(formattedCityName);

  // Helper to check if vehicle is a large vehicle (tempo/bus/coach/maharaja)
  const isLargeVehicle = (vehicleName) => {
    if (!vehicleName) return false;
    const name = vehicleName.toLowerCase();
    return name.includes('bus') ||
           name.includes('tempo') ||
           name.includes('coach') ||
           name.includes('maharaja') ||
           name.includes('seater');
  };

  // Helper to check if vehicle is a car (sedan/suv)
  const isCarVehicle = (vehicleName) => {
    if (!vehicleName) return false;
    const name = vehicleName.toLowerCase();
    return name.includes('sedan') || name.includes('suv') || name.includes('innova') || name.includes('ertiga');
  };

  // Filter vehicles based on trip type - only show cars for one-way
  const filteredVehicles = useMemo(() => {
    if (!route?.prices) return [];
    if (tripType === 'oneWay') {
      return route.prices.filter(p => p.vehicle && isCarVehicle(p.vehicle));
    }
    return route.prices;
  }, [route?.prices, tripType]);

  const tempoAndBusVehicles = useMemo(() => {
    if (!route?.prices) return [];
    return route.prices.filter(p => p.vehicle && isLargeVehicle(p.vehicle) && !isCarVehicle(p.vehicle));
  }, [route?.prices]);

  // Shape the priced vehicle list for the redesigned VehicleCard grid.
  // Product images render object-contain there, so nothing gets cropped.
  const displayVehicles = useMemo(() => {
    return filteredVehicles.map((v) => {
      const info = vehicleCapacityMap[v.vehicle] || {};
      const seatMatch = String(v.vehicle).match(/(\d+)\s*seater/i);
      return {
        name: v.vehicle,
        image: vehicleImageMap[v.vehicle] || '/images/car/swift_dzire.jpg',
        seats: info.seats || (seatMatch ? seatMatch[1] : '4'),
        price: tripType === 'oneWay' ? v.price : v.roundTrip,
      };
    });
  }, [filteredVehicles, tripType]);

  const startingPrice = useMemo(() => {
    if (!filteredVehicles.length) return "3,300";
    const prices = filteredVehicles.map(p => {
      const price = tripType === 'oneWay' ? p.price : p.roundTrip;
      return parseInt(price?.replace('₹', '').replace(',', '') || '0');
    });
    return Math.min(...prices).toLocaleString();
  }, [filteredVehicles, tripType]);

  // Stable, tripType-independent figures for the Quick Answer block so the
  // extractable text does not change when the visitor flips the trip toggle.
  const answerFares = useMemo(() => {
    const prices = route?.prices || [];
    const pick = (re) => prices.find((p) => p.vehicle && re.test(p.vehicle));
    const sedan = pick(/sedan/i);
    const suv = pick(/innova/i) || pick(/suv|ertiga/i);
    const tempo = prices.find((p) => p.vehicle && /tempo|seater/i.test(p.vehicle) && !isCarVehicle(p.vehicle));
    return {
      sedanOneWay: sedan?.price || null,
      sedanRoundTrip: sedan?.roundTrip || null,
      suvName: suv?.vehicle || null,
      suvOneWay: suv?.price || null,
      tempoName: tempo?.vehicle || null,
      tempoFare: tempo?.roundTrip || tempo?.price || null,
    };
  }, [route?.prices]);

  // Quick Answer facts — omit anything missing or placeholder so the fact strip
  // never shows "Contact Us" style values.
  const quickAnswerFacts = useMemo(() => ([
    { label: 'Distance', value: route.distance || estimatedDistance },
    { label: 'Drive time', value: route.time || estimatedTime },
    { label: 'Sedan one way', value: answerFares.sedanOneWay || `₹${groupDigits(startingPrice)}` },
    { label: 'Vehicles', value: '4 to 56 seats' },
  ].filter((f) => f.value && !/contact\s*us|on\s*request|n\/?a/i.test(String(f.value)))), [route.distance, route.time, estimatedDistance, estimatedTime, answerFares.sedanOneWay, startingPrice]);

  const faqs = [
    {
      // Week 49 gap fix: the plan's Workstream F asked for the FAQ question
      // closest to the page's main search to be phrased the way the export's
      // own queries read ("delhi to agra cab price", "chandigarh to kasauli
      // taxi fare") rather than in formal site copy ("What is the taxi fare
      // from..."). This corridor family covers both wordings, so the
      // question leads with the export's literal phrase and keeps the
      // grammatical question after it.
      //
      // The answer below also used to add a flat, made-up ₹600 to the sedan
      // figure for "the SUV rate", which matched neither the Ertiga (₹15/km)
      // nor the Innova (₹18/km) rate-card figure for any real corridor. It
      // now reads the same recomputed SUV/Innova fare the quick-answer strip
      // already uses. A missing SUV row requires a quote, not an invented fare.
      q: `${formattedCityName} to ${formattedDestination} cab price — what is the taxi fare?`,
      a: `The one-way sedan fare is ${answerFares.sedanOneWay || 'available on request'}. ${answerFares.suvOneWay ? `${answerFares.suvName || 'SUV'} rates start from ${answerFares.suvOneWay}.` : 'Contact us for the SUV fare and availability on this route.'} All prices include fuel, driver charges, and applicable taxes. Toll and parking charges are extra.`
    },
    {
      q: `How long does it take to travel from ${formattedCityName} to ${formattedDestination}?`,
      a: `The journey takes approximately ${route.time || estimatedTime}, covering a distance of ${route.distance || estimatedDistance}. Travel time may vary based on traffic, weather, and road conditions.`
    },
    {
      // Week 50 keyword separation. This page is the corridor's general booking
      // page and should own "<origin> to <destination> cab" and "taxi fare".
      // One-way and round-trip travel each have their own page, and this page
      // was answering both at a length that made the search engine prefer it
      // for all three searches — leaving the dedicated pages twenty places
      // below their siblings. The question stays, because people do ask it
      // here; the full treatment belongs to the page named after it, which the
      // corridor block below links to by name.
      q: `Is one-way cab available from ${formattedCityName} to ${formattedDestination}?`,
      a: `Yes. ${answerFares.sedanOneWay ? `A one-way sedan starts at ${answerFares.sedanOneWay}` : 'Contact us for the one-way sedan fare'} and no return fare is charged — you pay for the outward journey only. The vehicle-by-vehicle one-way fares and the drop-off terms are set out in full on the ${formattedCityName} to ${formattedDestination} one-way cab page.`
    },
    {
      q: `What vehicles are available for this route?`,
      a: `We offer Sedan (4 seater), SUV Ertiga (6 seater), SUV Innova (7 seater), Tempo Traveller (12-26 seater), and Buses (22-56 seater). All vehicles are AC, GPS-enabled, and well-maintained.`
    },
    {
      q: `How do I book a cab from ${formattedCityName} to ${formattedDestination}?`,
      a: `Simply call us at ${phoneNumber} or WhatsApp for instant booking. Share your pickup location, date, time, and number of passengers. You’ll receive immediate confirmation with driver details.`
    },
    {
      q: `What is included in the fare?`,
      a: `Our fare includes vehicle rental, fuel charges, driver allowance, GST, and basic insurance. Toll taxes, parking fees, and state permits are charged extra as per actuals.`
    }
  ];

  // Get destination city info for "Things to Do" section
  // destinationInfo arrives as a prop. See the note on the imports above.

  return (
    <article className="min-h-screen bg-[#FAFAFA]" itemScope itemType="https://schema.org/TravelAction">

      {/* ==================== HERO — CINEMATIC DESTINATION PHOTO (v2) ==================== */}
      <div className="grain-overlay relative overflow-hidden bg-slate-950">
        {/* Destination photo backdrop — fixed container, scrim only where text sits */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${formattedDestination} — book a cab from ${formattedCityName} to ${formattedDestination}`}
            fill
            priority
            sizes="100vw"
            quality={80}
            placeholder="blur"
            blurDataURL={heroBlurDataURL}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>
        {/* soft top hairline in brand gold */}
        <div className={`absolute inset-x-0 top-0 z-20 h-[3px] ${region.laneStrip}`} />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
            <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <li><Link href={`/${citySlug(cityName)}`} className="text-white/60 hover:text-white transition-colors">{formattedCityName}</Link></li>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <li className="min-w-0 break-words text-[#FACF2D] font-medium">{formattedDestination}</li>
          </ol>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-14 lg:pt-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            {/* Left: copy */}
            <div className="min-w-0">
              {/* region eyebrow — the page's regional identity, before anything generic */}
              <div className={`mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] backdrop-blur-md ${region.chip}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${region.chipDot}`} aria-hidden="true" />
                {region.eyebrow}
              </div>
              {/* trust chip */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs text-white/80">
                <Star className="h-3.5 w-3.5 text-amber-400" fill="currentColor" />
                <span className="font-semibold">4.9</span>
                <span className="mx-1 h-3 w-px bg-white/20" />
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-white/60">Verified drivers</span>
              </div>

              {/* serif display headline with gold-foil destination */}
              <h1 className="speakable-headline font-serif text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {formattedCityName}
                {/* sr-only carries the word "to" so the heading text reads "Agra to
                    Ahmedabad" for a crawler. The arrow is decorative: it is drawn by a
                    CSS ::before pseudo-element so it is NOT part of the DOM text —
                    aria-hidden hides it from screen readers but not from Googlebot,
                    which was reading the heading as "Delhi to → Agra" (Week 47). */}
                <span className="sr-only"> to </span>
                <span className="mx-2 font-sans text-white/40 before:content-['→'] sm:mx-3" aria-hidden="true" />
                <span className="sr-only"> </span>
                <span className="text-gradient-gold">{formattedDestination}</span>{' '}
                <span className="mt-2 block font-sans text-lg font-bold text-white/75 sm:text-2xl">Taxi &amp; Cab Service</span>
              </h1>
              <p className={`mt-3 max-w-lg text-sm font-semibold sm:text-base ${region.accentText}`}>{region.tagline}</p>

              {/* route lane chip */}
              <div className="mt-5 max-w-md rounded-2xl glass-dark px-4 py-3">
                <RouteLine from={formattedCityName} to={formattedDestination} tone="dark" />
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-amber-400" /> {route.distance || estimatedDistance}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-amber-400" /> {route.time || estimatedTime}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-amber-400" /> 4–56 seats
                  </span>
                </div>
              </div>

              {/* CTAs — full width on mobile, compact on desktop */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="sheen glow-gold flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto lg:py-2.5"
                >
                  <BsWhatsapp className="h-5 w-5" />
                  Book on WhatsApp
                </button>
                <a
                  href={`tel:+91${phoneNumber}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto lg:py-2.5"
                >
                  <Phone className="h-4 w-4" /> Call {phoneNumber}
                </a>
              </div>

              {/* TrustSeal emblem */}
              <div className="mt-6">
                <TrustSeal tone="dark" />
              </div>
            </div>

            {/* Right: glass price card */}
            <div className="relative">
              <div className="border-gradient-gold group relative overflow-hidden rounded-3xl glass-dark p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Fixed all-inclusive fare</p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-5xl font-black text-white sm:text-6xl">₹{groupDigits(startingPrice)}</span>
                  <span className="mb-2 text-sm text-white/50">
                    /{tripType === 'roundTrip' ? 'round trip' : 'one way'}
                  </span>
                </div>
                <p className="mt-1 text-xs text-white/50">Fuel · driver · GST included</p>

                {/* trip toggle */}
                <div className="mt-5 grid grid-cols-2 gap-1 rounded-xl bg-white/5 p-1">
                  {[
                    { k: 'oneWay', label: 'One Way' },
                    { k: 'roundTrip', label: 'Round Trip' },
                  ].map((t) => (
                    <button
                      key={t.k}
                      type="button"
                      onClick={() => setTripType(t.k)}
                      className={`rounded-lg py-2 text-sm font-bold transition-all ${
                        tripType === t.k ? 'bg-amber-400 text-slate-900 shadow' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-slate-900 transition-colors hover:bg-amber-50"
                >
                  Get Instant Quote <ArrowRight className="h-4 w-4" />
                </button>

                {/* mini trust row */}
                <div className="mt-4 flex items-center justify-between text-[0.7rem] text-white/50">
                  <span>✓ No advance</span>
                  <span>✓ Free cancellation</span>
                  <span>✓ 24×7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inline lead form (preserved) + trust badges */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="mx-auto max-w-xl">
            <QuickEnquiryForm
              fromCity={formattedCityName}
              toCity={formattedDestination}
              pageType="route"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-10">
            {[
              { icon: BadgeCheck, label: 'Verified Drivers' },
              { icon: Shield, label: 'GPS Tracking' },
              { icon: Award, label: 'Best Price' },
              { icon: Headphones, label: '24/7 Support' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70">
                <item.icon className="w-5 h-5 text-[#FACF2D]" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== AEO QUICK ANSWER — above-the-fold extractable answer ==================== */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-4xl mx-auto">
          <QuickAnswer
            tone="light"
            question={`How much is a cab from ${formattedCityName} to ${formattedDestination}?`}
            answer={`A ${formattedCityName} to ${formattedDestination} cab starts at ${answerFares.sedanOneWay || `₹${groupDigits(startingPrice)}`} one way in an AC sedan${answerFares.suvOneWay && answerFares.suvName ? `, and ${answerFares.suvOneWay} in a ${answerFares.suvName}` : ''}${answerFares.sedanRoundTrip ? `; the same sedan is ${answerFares.sedanRoundTrip} as a round trip with the driver waiting for you` : ''}. The road distance is about ${route.distance || estimatedDistance} and the drive takes around ${route.time || estimatedTime}.${answerFares.tempoFare && answerFares.tempoName ? ` Group travellers can book a ${answerFares.tempoName} from ${answerFares.tempoFare}.` : ''} Fares cover fuel, driver and GST; tolls, parking and state permits are charged as per actuals.`}
            facts={quickAnswerFacts}
          />
        </div>
      </section>

      {/* In-window festival / yatra call-out for this destination (server-resolved, null on most routes). */}
      <SeasonalCorridorCallout callout={seasonalCallout} />

      {/* Region-specific driving notes — palette and copy differ by destination region. */}
      <RegionNotesStrip theme={region} origin={formattedCityName} destination={formattedDestination} />

      {/* Week 48 A3: hand-written paragraph about the physical road (server-resolved, null when none exists). */}
      <RoadParagraph paragraph={roadParagraph} theme={region} />
      {planningGuide}

      {/* Trust Strip */}
      <div className="bg-white border-b border-gray-100 py-3 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 md:gap-10 text-sm text-gray-600 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> 4.9★ Google Rating
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Users className="w-4 h-4 text-blue-500" /> 10,000+ Trips
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Shield className="w-4 h-4 text-green-500" /> Since 2018
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-red-500" /> 500+ Cities
            </span>
          </div>
        </div>
      </div>

      {/* ==================== DIRECT ANSWER BOX (AEO/Featured Snippet Target) ==================== */}
      <section className="py-8 md:py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="direct-answer bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 md:p-8 border border-amber-200/60" data-snippet-type="direct-answer">
            <h2 className="font-serif text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-4">
              How much is a {formattedCityName} to {formattedDestination} taxi in 2026?
            </h2>
            {/* v2 stat tiles — gold icon chip + foil key figure */}
            <div className="key-info grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
              {[
                { icon: Navigation, label: 'Distance', value: route.distance || estimatedDistance },
                { icon: Clock, label: 'Duration', value: route.time || estimatedTime },
                { icon: CreditCard, label: 'Starting Fare', value: `₹${groupDigits(startingPrice)}` },
                { icon: Star, label: 'Rating', value: '4.9★' },
              ].map((tile, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-amber-100 shadow-sm">
                  <div className="mb-2 inline-flex rounded-xl bg-amber-400/15 p-2">
                    <tile.icon className="h-4 w-4 text-amber-600" />
                  </div>
                  <p className="text-[0.65rem] text-slate-500 uppercase tracking-wider font-bold mb-0.5">{tile.label}</p>
                  <p className="text-xl font-black text-gradient-gold">{tile.value}</p>
                </div>
              ))}
            </div>
            <p className="speakable-lead faq-answer text-slate-700 leading-relaxed text-base md:text-lg">
              The {formattedCityName} to {formattedDestination} taxi fare starts from <strong>₹{groupDigits(startingPrice)}</strong> for a sedan (one way).
              The road distance is approximately <strong>{route.distance || estimatedDistance}</strong> and the journey takes around <strong>{route.time || estimatedTime}</strong>.
              {route.routeHighlights ? ` The route goes ${route.routeHighlights.toLowerCase()}.` : ''}
              {route.bestTimeToTravel ? ` Best time to travel: ${route.bestTimeToTravel}.` : ''}
              Triveni Cabs™ offers AC sedan, SUV, tempo traveller, and bus options with verified professional drivers, GPS tracking, and 24/7 booking.
              Book by calling <strong>+91-7668570551</strong> or WhatsApp for instant confirmation.
            </p>
            {/* Week 49 (Workstream E): the at-a-glance rows a booking search wants,
                in the pattern the airport pages took in Week 48: distance, drive
                time, the fare per vehicle from the rate card, and the pickup. Every
                value is the page's own record; nothing is typed here. */}
            {(() => {
              const pick = (name) => (Array.isArray(route?.prices) ? route.prices.find((p) => p && p.vehicle === name) : null);
              const sedan = pick('Sedan'); const innova = pick('SUV Innova'); const tempo = pick('12 Seater Tempo');
              const rows = [
                ['Distance', route?.distance || estimatedDistance],
                ['Drive time', route?.time || estimatedTime],
                ['Sedan, one way', sedan?.price],
                ['Sedan, round trip', sedan?.roundTrip],
                ['Innova Crysta, one way', innova?.price],
                ['12-seater Tempo Traveller', tempo?.price],
                ['Pickup', `Anywhere in ${formattedCityName}, at your time`],
              ].filter(([, v]) => v);
              return rows.length >= 4 ? (
                <dl className="key-facts mt-5 grid grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-3" aria-label={`${formattedCityName} to ${formattedDestination} cab at a glance`}>
                  {rows.map(([k, v]) => (
                    <div key={k}><dt className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{k}</dt><dd className="text-sm font-bold text-slate-900">{v}</dd></div>
                  ))}
                </dl>
              ) : null;
            })()}
            {uniqueIntro && (
              <p className="mt-4 text-slate-600 leading-relaxed text-base md:text-lg">
                {uniqueIntro}
              </p>
            )}
          </div>

          {/* Route Tags — keyword signals */}
          {route.tags && route.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {route.tags.map((tag, i) => (
                <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium border border-slate-200">
                  {tag}
                </span>
              ))}
              <span className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-sm font-medium border border-amber-200">
                One Way Available
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium border border-green-200">
                24/7 Service
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ==================== VEHICLE SELECTION — AURORA REDESIGN ==================== */}
      <CityRouteVehicles
        from={formattedCityName}
        to={formattedDestination}
        vehicles={displayVehicles}
        tripType={tripType}
        onBook={handleVehicleBook}
      />

      {/* Group Travel Notice */}
      {tripType === 'oneWay' && tempoAndBusVehicles.length > 0 && (
        <section className="bg-aurora-light pb-14 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-amber-600" />
                    <h3 className="font-black text-slate-900">Travelling in a group?</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Tempo Travellers (12&ndash;26 seater) and Buses (22&ndash;56 seater) are available on this route &mdash; ideal for family tours, corporate outings and group pilgrimages.
                  </p>
                </div>
                <button
                  onClick={() => setTripType('roundTrip')}
                  className="sheen shrink-0 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
                >
                  View Group Vehicles
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==================== FARE CHART — photo cards on mobile, true table on md+ ==================== */}
      {route?.prices && route.prices.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-2">
              {formattedCityName} to {formattedDestination} <span className="text-gradient-gold">fare chart</span>
            </h2>
            <p className="text-slate-600 mb-6">
              All-inclusive fares for every vehicle on this route. Tolls, parking and state permits are extra.
            </p>

            {/* Mobile: stacked photo cards — no sideways scrolling */}
            <div className="md:hidden space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 pb-1">
                Taxi, tempo traveller and bus fares from {formattedCityName} to {formattedDestination}, 2026
              </p>
              {route.prices.map((p, i) => {
                const info = vehicleCapacityMap[p.vehicle] || {};
                const seatMatch = String(p.vehicle).match(/(\d+)\s*seater/i);
                const seats = info.seats || (seatMatch ? seatMatch[1] : '4');
                return (
                  <div key={`fare-card-${i}`} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <div className="flex items-stretch gap-3 p-3">
                      {/* Vehicle photo — fixed container, no CLS */}
                      <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                        <Image
                          src={getFareVehicleImage(p.vehicle)}
                          alt={`${p.vehicle} for ${formattedCityName} to ${formattedDestination}`}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-black text-slate-900 leading-tight">{p.vehicle}</h3>
                          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-400/15 px-2 py-0.5 text-[0.65rem] font-bold text-amber-700">
                            <Users className="h-3 w-3" /> {seats}
                          </span>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          <div className="rounded-lg bg-slate-50 px-2.5 py-1.5">
                            <p className="text-[0.6rem] font-bold uppercase tracking-wide text-slate-400">One way</p>
                            <p className="text-sm font-black text-slate-900">{p.price || '—'}</p>
                          </div>
                          <div className="rounded-lg bg-amber-50 px-2.5 py-1.5">
                            <p className="text-[0.6rem] font-bold uppercase tracking-wide text-amber-600">Round trip</p>
                            <p className="text-sm font-black text-amber-700">{p.roundTrip || '—'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop: true table — fits without horizontal scroll */}
            <div className="hidden md:block rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <caption className="px-4 pt-4 pb-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Taxi, tempo traveller and bus fares from {formattedCityName} to {formattedDestination}, 2026
                </caption>
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-bold">Vehicle</th>
                    <th scope="col" className="px-4 py-3 font-bold">Seats</th>
                    <th scope="col" className="px-4 py-3 font-bold">One way</th>
                    <th scope="col" className="px-4 py-3 font-bold">Round trip</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {route.prices.map((p, i) => {
                    const info = vehicleCapacityMap[p.vehicle] || {};
                    const seatMatch = String(p.vehicle).match(/(\d+)\s*seater/i);
                    return (
                      <tr key={`fare-${i}`} className="hover:bg-amber-50/60 transition-colors">
                        <th scope="row" className="px-4 py-3 text-left font-semibold text-slate-900">
                          <span className="flex items-center gap-3">
                            <span className="relative h-10 w-14 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                              <Image
                                src={getFareVehicleImage(p.vehicle)}
                                alt={p.vehicle}
                                fill
                                sizes="56px"
                                className="object-cover"
                              />
                            </span>
                            {p.vehicle}
                          </span>
                        </th>
                        <td className="px-4 py-3 text-slate-700">{info.seats || (seatMatch ? seatMatch[1] : '4')}</td>
                        <td className="px-4 py-3 font-bold text-slate-900">{p.price || '—'}</td>
                        <td className="px-4 py-3 font-bold text-amber-700">{p.roundTrip || '—'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Sedan and SUV fares include a one-way rate. Tempo travellers and buses cost the same one way as round trip, because the vehicle returns to base either way.
            </p>
          </div>
        </section>
      )}


      {/* ==================== WHY CHOOSE US — DARK GLASS GRID (v2) ==================== */}
      <section className="bg-aurora grain-overlay relative overflow-hidden py-16 md:py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-amber-400 mb-3">Why Triveni Cabs™</p>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              Why book a {formattedCityName} to {formattedDestination} cab with <span className="text-gradient-gold">Triveni Cabs™</span>?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Trusted by 50,000+ customers for reliable {formattedCityName} to {formattedDestination} taxi service
            </p>
            <LaneDivider className="mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

            {/* Large Card - Safety */}
            <div className="lg:col-span-2 border-gradient-gold group glass-dark rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
              <div className="relative z-10">
                <div className="mb-6 inline-flex rounded-2xl bg-amber-400/15 p-4">
                  <Shield className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">100% Safe &amp; Secure Journey</h3>
                <p className="text-white/70 text-lg mb-6 max-w-xl">
                  All our drivers are police-verified with 5+ years of experience.
                  Real-time GPS tracking, SOS button, and 24/7 monitoring for your safety.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Verified Drivers', 'GPS Tracking', 'Live Trip Sharing', 'SOS Support'].map((item, i) => (
                    <span key={i} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="glass-dark rounded-3xl p-6 md:p-8 transition-colors duration-300 hover:border-amber-400/40">
              <div className="mb-5 inline-flex rounded-2xl bg-amber-400/15 p-4">
                <CreditCard className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
              <p className="text-white/60 mb-4">
                No hidden charges. Pay per km with clear breakdown of toll, parking, and taxes.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <CheckCircle className="w-5 h-5" />
                <span>Fixed rates guaranteed</span>
              </div>
            </div>

            {/* Fleet Card */}
            <div className="glass-dark rounded-3xl p-6 md:p-8 transition-colors duration-300 hover:border-amber-400/40">
              <div className="mb-5 inline-flex rounded-2xl bg-amber-400/15 p-4">
                <Car className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Fleet</h3>
              <p className="text-white/60 mb-4">
                Well-maintained AC vehicles from Sedan to 56-seater buses. Clean and sanitized.
              </p>
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <CheckCircle className="w-5 h-5" />
                <span>Regular maintenance</span>
              </div>
            </div>

            {/* Support Card */}
            <div className="glass-dark rounded-3xl p-6 md:p-8 text-white transition-colors duration-300 hover:border-amber-400/40">
              <div className="mb-5 inline-flex rounded-2xl bg-amber-400/15 p-4">
                <Headphones className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
              <p className="text-white/60 mb-4">
                Round-the-clock assistance via call and WhatsApp. We are always here to help.
              </p>
              <a href={`tel:+91${phoneNumber}`} className="text-[#FACF2D] font-bold text-lg">
                {phoneNumber}
              </a>
            </div>

            {/* Experience Card */}
            <div className="border-gradient-gold group glass-dark rounded-3xl p-6 md:p-8 text-white">
              <div className="mb-5 inline-flex rounded-2xl bg-amber-400/15 p-4">
                <Award className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">50,000+ Happy Trips</h3>
              <p className="text-white/60 mb-4">
                Trusted by families, corporates, and tour operators across India.
              </p>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 text-amber-400" fill="currentColor" />
                ))}
                <span className="ml-2 font-bold">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== ROUTE INFORMATION — v2 STAT TILES ==================== */}
      <section className="bg-aurora-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-400/15 px-4 py-2 rounded-full mb-4">
              <Route className="w-4 h-4 text-amber-600" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-700">Route Guide</span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-4">
              What route does the {formattedCityName} to <span className="text-gradient-gold">{formattedDestination}</span> cab take?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Distance, travel time, stops &amp; fare for {formattedCityName} to {formattedDestination} by car
            </p>
            <LaneDivider className="mt-5" />
          </div>

          {/* Journey stat tiles — glass, gold icon chips, foil key figures */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-10">
            {[
              { icon: Navigation, label: 'Distance', value: route.distance || estimatedDistance },
              { icon: Clock, label: 'Duration', value: route.time || estimatedTime },
              { icon: Route, label: 'Best Route', value: 'NH48 Highway' },
              { icon: CheckCircle, label: 'Road Condition', value: 'Excellent' },
            ].map((tile, i) => (
              <div key={i} className="rounded-2xl border border-amber-100 bg-white/70 backdrop-blur-sm p-5 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-lg">
                <div className="mb-3 inline-flex rounded-xl bg-amber-400/15 p-2.5">
                  <tile.icon className="h-5 w-5 text-amber-600" />
                </div>
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500 mb-1">{tile.label}</p>
                <p className="text-lg md:text-xl font-black text-gradient-gold leading-tight">{tile.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Best Travel Times */}
            <div className="group rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl h-full">
              <div className="h-1.5 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-[#D4A017]" />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-xl bg-amber-400/15 p-3">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Best Travel Times</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50/50 rounded-xl p-4 border border-emerald-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900">Early Morning</span>
                      <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Fastest
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">5:00 AM - 7:00 AM</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-sky-50/50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900">Late Morning</span>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">Comfortable</span>
                    </div>
                    <p className="text-slate-600 text-sm">10:00 AM - 12:00 PM</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50/50 rounded-xl p-4 border border-amber-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-900">Evening</span>
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">Traffic</span>
                    </div>
                    <p className="text-slate-600 text-sm">5:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="group rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl h-full">
              <div className="h-1.5 bg-gradient-to-r from-[#D4A017] via-amber-400 to-[#FACF2D]" />
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-xl bg-amber-400/15 p-3">
                    <Gift className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">What’s Included</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: Fuel, label: 'Fuel charges' },
                    { icon: Users, label: 'Professional driver' },
                    { icon: Snowflake, label: 'Air conditioning' },
                    { icon: MapPin, label: 'GPS navigation' },
                    { icon: Shield, label: 'Insurance coverage' },
                    { icon: Headphones, label: '24/7 support' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100 hover:border-amber-200 hover:bg-amber-50/40 transition-all">
                      <div className="w-8 h-8 rounded-lg bg-amber-400/15 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm">{item.label}</span>
                      <CheckCircle className="w-4 h-4 text-emerald-500 ml-auto shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== ROUTE HIGHLIGHTS + GOLD LANE TIMELINE ==================== */}
      {route.routeHighlights && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-8">
              How long does the {formattedCityName} to <span className="text-gradient-gold">{formattedDestination}</span> drive take?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              <div className="space-y-5">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-amber-300">
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="rounded-lg bg-amber-400/15 p-1.5"><Route className="w-4 h-4 text-amber-600" /></span> Route Highlights
                  </h3>
                  <p className="text-slate-600">{route.routeHighlights}</p>
                </div>
                {route.bestTimeToTravel && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-amber-300">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="rounded-lg bg-amber-400/15 p-1.5"><Clock className="w-4 h-4 text-amber-600" /></span> Best Time to Travel
                    </h3>
                    <p className="text-slate-600">{route.bestTimeToTravel}</p>
                  </div>
                )}
                {route.localTip && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-amber-300">
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="rounded-lg bg-amber-400/15 p-1.5"><Sparkles className="w-4 h-4 text-amber-600" /></span> Local Tip
                    </h3>
                    <p className="text-slate-600">{route.localTip}</p>
                  </div>
                )}
              </div>

              {/* Gold lane timeline: origin → stops → foil destination badge */}
              {route.popularStops?.length > 0 && (
                <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 md:p-8">
                  <h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
                    <span className="rounded-lg bg-amber-400/15 p-1.5"><MapPin className="w-4 h-4 text-amber-600" /></span> Popular Stops Along the Way
                  </h3>
                  <div className="relative pl-5">
                    {/* gold lane line */}
                    <div className="absolute left-[9px] top-2 bottom-2 w-px border-l-2 border-dashed border-amber-400/50" aria-hidden="true" />

                    {/* origin node */}
                    <div className="relative mb-4 flex items-center gap-4">
                      <span className="absolute -left-5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 ring-4 ring-amber-100" aria-hidden="true">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                      </span>
                      <span className="ml-4 text-sm font-black uppercase tracking-wide text-slate-900">{formattedCityName}</span>
                    </div>

                    {/* Stop cards. Each href is resolved on the server and handed
                          down as stopLinks, because this is a client component
                          and the build manifest never reaches the browser. A
                          stop with no page of its own — the waypoint towns on
                          the Dehradun and Haridwar corridors — is still shown,
                          as a card rather than a link: the halt is useful
                          information about the route, and it was previously a
                          link to a 404. */}
                      <div className="space-y-3">
                        {(stopLinks?.length ? stopLinks : (route.popularStops || []).map((s) => ({ name: s, href: null }))).map(({ name, href }) => {
                          const card = "ml-4 flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm";
                          return (
                            <div key={name} className="relative flex items-center">
                              <span className="absolute -left-5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-amber-400 bg-white" aria-hidden="true" />
                              {href ? (
                                <Link href={href} className={`${card} transition-all hover:border-amber-300 hover:text-amber-700 hover:shadow-md`}>
                                  {name}
                                  <ArrowRight className="h-4 w-4 text-amber-500 shrink-0" />
                                </Link>
                              ) : (
                                <span className={card}>{name}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                    {/* destination foil badge */}
                    <div className="relative mt-4 flex items-center gap-4">
                      <span className="absolute -left-5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 ring-4 ring-amber-100" aria-hidden="true">
                        <MapPin className="h-3 w-3 text-amber-400" />
                      </span>
                      <span className="ml-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5">
                        <span className="text-sm font-black text-gradient-gold">{formattedDestination}</span>
                        <span className="text-[0.6rem] font-bold uppercase tracking-widest text-white/50">Destination</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ==================== DETAILED TRAVEL GUIDE (Unique Prose Content for SEO) ==================== */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-6">
            Complete guide — how to plan a {formattedCityName} to <span className="text-gradient-gold">{formattedDestination}</span> trip by cab
          </h2>
          <div className="prose prose-lg prose-slate max-w-none" data-snippet-type="travel-guide">
            <p>
              Planning a trip from {formattedCityName} to {formattedDestination}? The road journey covers approximately {route.distance || estimatedDistance} and
              takes around {route.time || estimatedTime} by cab. {route.routeHighlights ? `The route goes ${route.routeHighlights.toLowerCase()}, offering a comfortable and scenic drive.` : `The highway connecting these two cities is well-maintained, making it a comfortable drive.`}
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Why Choose a Cab Over Bus or Train?</h3>
            <p>
              While buses and trains are available on the {formattedCityName} to {formattedDestination} route, a private cab offers unmatched flexibility.
              You can stop at {route.popularStops?.length > 0 ? route.popularStops.slice(0, 3).join(', ') : 'popular attractions'} along the way,
              travel at your own pace, and enjoy door-to-door pickup and drop. Families with children, senior citizens, and groups especially benefit
              from the comfort and convenience of a private taxi.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">{formattedCityName} to {formattedDestination} Cab Fare Breakdown</h3>
            <p>
              The {formattedCityName} to {formattedDestination} cab fare starts at ₹{groupDigits(startingPrice)} for an AC sedan (Swift Dzire / Toyota Etios).
              SUV options like Ertiga and Innova Crysta are available at slightly higher rates, ideal for families of 5-7 people.
              For larger groups, tempo travellers (12-26 seater) and buses (22-56 seater) offer cost-effective per-person pricing.
              All fares include fuel, driver charges, and applicable taxes. Toll and parking charges are extra and paid directly.
            </p>

            {route.bestTimeToTravel && (
              <>
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Best Time to Travel from {formattedCityName} to {formattedDestination}</h3>
                <p>
                  {route.bestTimeToTravel}. Starting early in the morning helps avoid traffic congestion near city exits and ensures a cooler,
                  more pleasant journey. If you are planning a round trip, we recommend an overnight stay at the destination to avoid driver fatigue
                  and make the most of your visit.
                </p>
              </>
            )}

            {route.localTip && (
              <>
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Insider Tips for This Route</h3>
                <p>
                  {route.localTip}. Our experienced drivers, many with over 10 years of driving on this route, can suggest the best food stops,
                  scenic viewpoints, and restroom facilities along the highway. Do not hesitate to ask your driver for recommendations—they know
                  the route inside out.
                </p>
              </>
            )}

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Booking Process</h3>
            <p>
              Booking your {formattedCityName} to {formattedDestination} cab with Triveni Cabs™ takes under 2 minutes. Call us at <strong>+91-7668570551</strong> or
              send a WhatsApp message with your travel date, pickup time, and number of passengers. We confirm your booking instantly with driver name,
              vehicle number, and phone number. No advance payment required—pay after your trip. We serve over 10,000 happy customers with a 4.9-star rating.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== THINGS TO DO AT DESTINATION ==================== */}
      {destinationInfo && destinationInfo.localAttractions && destinationInfo.localAttractions.length > 0 && (
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
              What can you do in <span className="text-gradient-gold">{formattedDestination}</span> after you arrive?
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-3xl">
              {destinationInfo.description || `Explore the best of ${formattedDestination} after your cab ride from ${formattedCityName}.`}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {destinationInfo.localAttractions.slice(0, 6).map((attraction, index) => (
                <div key={index} className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-700 font-black text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{attraction.name || attraction}</h3>
                      {attraction.description && (
                        <p className="text-slate-600 text-sm mt-1 leading-relaxed">{attraction.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {destinationInfo.travelTips && destinationInfo.travelTips.length > 0 && (
              <div className="mt-8 bg-amber-50 rounded-2xl p-6 border border-amber-200/50">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-600" /> Travel Tips for {formattedDestination}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {destinationInfo.travelTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/${formattedDestination.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-slate-800 transition-colors"
              >
                Explore {formattedDestination} Cab Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/sightseeing/${formattedDestination.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-amber-200 transition-colors"
              >
                {formattedDestination} Sightseeing Tours <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ==================== FAQ SECTION ==================== */}
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FACF2D]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-400/15 px-5 py-2.5 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-700">Got Questions?</span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-4">
              Frequently asked <span className="text-gradient-gold">questions</span> about {formattedCityName} to {formattedDestination} cab
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Fare, booking &amp; travel info for {formattedCityName} to {formattedDestination} cab service
            </p>
            <LaneDivider className="mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq, index) => (
              <div key={index} className="group h-full">
                <div className="relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl h-full">
                  {/* Gradient accent */}
                  <div className="h-1.5 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-[#D4A017]" />

                  <div className="p-4 md:p-6">
                    {/* Question */}
                    <div className="flex items-start gap-3 md:gap-4 mb-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-2xl bg-amber-400 flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-400/30">
                        <span className="text-base md:text-lg font-black text-slate-900">?</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base md:text-lg leading-snug pt-1 min-w-0">{faq.q}</h3>
                    </div>

                    {/* Answer */}
                    <div className="pl-0 md:pl-14">
                      <div className="bg-slate-50 rounded-2xl p-3 md:p-4 border border-slate-100">
                        <p className={`text-slate-600 leading-relaxed text-sm md:text-base${index === 0 ? ' speakable-faq-first' : ''}`}>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">Need more help with your {formattedCityName} to {formattedDestination} trip?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCallNow}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 lg:py-2.5 rounded-full font-bold transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </button>
              <button
                onClick={handleWhatsApp}
                className="sheen glow-gold inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 px-8 py-3.5 lg:py-2.5 rounded-full font-black transition-colors"
              >
                <BsWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== OFFICE LOCATIONS ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfficeLocations
            originCity={formattedCityName}
            destinationCity={formattedDestination}
            offices={routeOffices}
          />
        </div>
      </section>


      {/* ==================== RELATED ROUTES ==================== */}
      <section className="bg-aurora-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-400/15 px-4 py-2 rounded-full mb-4">
              <Navigation className="w-4 h-4 text-amber-600" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-700">Explore More</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
              Which other routes can I book from <span className="text-gradient-gold">{formattedCityName}</span>?
            </h2>
            <p className="text-slate-600 mb-6">
              Explore other popular destinations with transparent pricing
            </p>
            <Link
              href={`/${citySlug(cityName)}`}
              className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 lg:py-2.5 rounded-full font-bold transition-colors"
            >
              View all routes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {routes
              .filter(r => r.destination !== formattedDestination)
              .slice(0, 8)
              .map((routeItem, index) => (
                <div key={index} className="group">
                  <Link
                    href={canonicalClientHref(`/${createRouteSlug(cityName, routeItem.destination)}`)}
                    className="block relative h-full"
                  >
                    <div className="relative h-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 group-hover:border-amber-300 group-hover:shadow-xl group-hover:-translate-y-1">
                      <div className="h-1.5 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-[#D4A017]" />
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center group-hover:bg-amber-400 transition-colors">
                            <MapPin className="w-5 h-5 text-amber-600 group-hover:text-slate-900 transition-colors" />
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-amber-700 transition-colors">
                          {routeItem.destination}
                        </h3>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="flex items-center gap-1.5 bg-slate-50 text-slate-600 px-2.5 py-1 rounded-lg">
                            <Navigation className="w-3.5 h-3.5" />
                            {routeItem.distance}
                          </span>
                          <span className="flex items-center gap-1.5 bg-slate-50 text-slate-600 px-2.5 py-1 rounded-lg">
                            <Clock className="w-3.5 h-3.5" />
                            {routeItem.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>


      {/* ==================== FINAL CTA — DARK AURORA ==================== */}
      <section className="bg-aurora grain-overlay relative overflow-hidden py-16 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Ready to book a <span className="text-gradient-gold">{formattedCityName} to {formattedDestination}</span> cab?
          </h2>
          <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">
            Instant confirmation. AC vehicles. One way &amp; round trip. Best price guaranteed. 24/7 available.
          </p>
          <div className="mb-10 flex justify-center">
            <TrustSeal tone="dark" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCallNow}
              className="sheen glow-gold w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-900 px-10 py-4 lg:py-3 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-colors active:scale-[0.98]"
            >
              <Phone className="w-6 h-6" />
              Call {phoneNumber}
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto border border-white/15 bg-white/5 hover:bg-white/10 text-white px-10 py-4 lg:py-3 rounded-full font-bold text-lg flex items-center justify-center gap-3 backdrop-blur-sm transition-colors active:scale-[0.98]"
            >
              <BsWhatsapp className="w-6 h-6" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* ==================== FARE CALCULATOR ==================== */}
      <div id="fare-calculator">
        <FareCalculator variant="full" defaultFrom={formattedCityName} defaultTo={formattedDestination} />
      </div>

      {/* FAQ & Popular Routes handled by inline sections above */}

      {/* ==================== TRAVEL GUIDES & TOURS ==================== */}
      {(() => {
        // relatedContent is a prop
        return relatedContent && relatedContent.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Want more travel guides &amp; tours?</h2>
              <p className="text-gray-600 mb-6">Plan your trip with our detailed guides</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedContent.slice(0, 6).map((item, index) => (
                  <Link key={index} href={item.url} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-yellow-400 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-gray-900 font-semibold group-hover:text-yellow-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}


      {/* ==================== POPULAR ROUTES & SERVICES ==================== */}
      {(() => {
        // relatedRoutes is a prop
        const services = serviceCrossLinks;
        return (relatedRoutes.length > 0 || services.length > 0) && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              {relatedRoutes.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">More Routes from {formattedCityName}</h2>
                  <p className="text-gray-600 mb-6">Explore other popular cab routes</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
                    {relatedRoutes.map((route, index) => (
                      <Link key={index} href={route.url} className="group bg-gray-50 rounded-xl border border-gray-200 p-4 hover:border-yellow-400 hover:shadow-md transition-all text-center">
                        <p className="text-gray-900 font-semibold text-sm group-hover:text-yellow-600">{route.origin} → {route.destination}</p>
                      </Link>
                    ))}
                  </div>
                </>
              )}
              {services.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">What other services do we offer in {formattedCityName}?</h2>
                  <p className="text-gray-600 mb-6">Other taxi services available</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {services.slice(0, 8).map((service, index) => (
                      <Link key={index} href={service.url} className="group bg-gray-50 rounded-xl border border-gray-200 p-4 hover:border-yellow-400 hover:shadow-md transition-all">
                        <p className="text-gray-900 font-semibold text-sm group-hover:text-yellow-600">{service.name}</p>
                        <p className="text-gray-500 text-xs mt-1">{service.description}</p>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        );
      })()}

      {/* Global mobile sticky bar becomes price/route-aware (replaces the old custom bar) */}
      <SetStickyCta
        price={`₹${groupDigits(startingPrice)}`}
        label={`${formattedCityName} to ${formattedDestination} cab`}
        whatsappText={whatsappMessage}
      />

    </article>
  );
}
