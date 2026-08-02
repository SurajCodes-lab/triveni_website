'use client';

import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
// Centralized icon imports for better bundle optimization
import {
  Phone, MapPin, Car, ChevronRight, Users, ArrowRight, Clock,
  Star, Shield, CheckCircle, Navigation, CreditCard, Headphones,
  Award, Sparkles, Route, Fuel, Calendar, Zap, Gift, Bus,
  ChevronDown, Play, BadgeCheck, Timer, Gauge, Wifi, Music,
  Snowflake, MapPinned, CircleDot, TrendingUp
} from "@/components/ui/icons";
import { WhatsAppIcon as BsWhatsapp } from "@/components/ui/icons";
import { phoneNumber } from "@/utilis/data";
import { getRouteOffices } from "@/utilis/officeLocations";
import OfficeLocations from "@/components/cities/OfficeLocations";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

// Dynamically import FareCalculator (client-only, below fold)
const FareCalculator = dynamic(() => import('@/components/calculator/FareCalculator'), { ssr: false });
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import CityRouteHero from '@/components/cityroute/CityRouteHero';
import CityRouteVehicles from '@/components/cityroute/CityRouteVehicles';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import { generateUniqueIntro } from '@/utilis/uniqueIntroGenerator';

// SEO Components
import { SEOBreadcrumb } from '@/components/seo/Breadcrumb';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { getRelatedContent, getRelatedRoutes, getServiceCrossLinks } from '@/utilis/linkingHelper';

// City hero images
const cityHeroData = {
  'Delhi': { image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg', icon: '🏛️', accent: '#4F46E5' },
  'Jaipur': { image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg', icon: '🏰', accent: '#DB2777' },
  'Chandigarh': { image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', icon: '🌳', accent: '#059669' },
  'Agra': { image: '/images/sightseeing/Agra/Agra_Hero_section.jpg', icon: '🕌', accent: '#D97706' },
  'Shimla': { image: '/images/sightseeing/Shimla/shimla_hero_section.jpg', icon: '🏔️', accent: '#0891B2' },
  'Dehradun': { image: '/images/chardham/chardham-dehradun-hero.webp', icon: '🌲', accent: '#16A34A' },
  'Rishikesh': { image: '/images/chardham/chardham-rishikesh-hero.webp', icon: '🧘', accent: '#0D9488' },
  'Haridwar': { image: '/images/chardham/chardham-haridwar-hero.webp', icon: '🙏', accent: '#EA580C' },
  'Manali': { image: '/images/packages/manali.webp', icon: '⛷️', accent: '#2563EB' },
  'Amritsar': { image: '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg', icon: '🛕', accent: '#CA8A04' },
  'Jodhpur': { image: '/images/packages/rajasthan.webp', icon: '🏯', accent: '#4F46E5' },
  'Udaipur': { image: '/images/packages/rajasthan.webp', icon: '🚣', accent: '#7C3AED' },
  'Ayodhya': { image: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.webp', icon: '🛕', accent: '#DC2626' },
  'Ahmedabad': { image: '/images/destinations/delhi.webp', icon: '🏛️', accent: '#B91C1C' }
};

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

function createRouteSlug(cityName, destination) {
  if (!cityName || !destination) return '';
  return `${cityName.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
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
  vehiclesServices
}) {
  const [tripType, setTripType] = useState('oneWay');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [hoveredVehicle, setHoveredVehicle] = useState(null);
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

  const routeOffices = useMemo(() =>
    getRouteOffices(formattedCityName, formattedDestination),
    [formattedCityName, formattedDestination]
  );

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

  const cityData = cityHeroData[formattedCityName] || {
    image: '/images/about/about_banner.webp',
    icon: '📍',
    accent: '#FACF2D'
  };

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
    if (!filteredVehicles.length) return "2,760";
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

  const faqs = [
    {
      q: `What is the taxi fare from ${formattedCityName} to ${formattedDestination}?`,
      a: `The cab fare starts from ₹${startingPrice} for a sedan. SUV rates start from ₹${parseInt(startingPrice.replace(',', '')) + 600}. All prices include fuel, driver charges, and applicable taxes. Toll and parking charges are extra.`
    },
    {
      q: `How long does it take to travel from ${formattedCityName} to ${formattedDestination}?`,
      a: `The journey takes approximately ${route.time || estimatedTime}, covering a distance of ${route.distance || estimatedDistance}. Travel time may vary based on traffic, weather, and road conditions.`
    },
    {
      q: `Is one-way cab available from ${formattedCityName} to ${formattedDestination}?`,
      a: `Yes! We offer affordable one-way cab service. You only pay for the distance traveled without any return charges. Sedans and SUVs are available for one-way booking.`
    },
    {
      q: `What vehicles are available for this route?`,
      a: `We offer Sedan (4 seater), SUV Ertiga (6 seater), SUV Innova (7 seater), Tempo Traveller (12-26 seater), and Buses (22-56 seater). All vehicles are AC, GPS-enabled, and well-maintained.`
    },
    {
      q: `How do I book a cab from ${formattedCityName} to ${formattedDestination}?`,
      a: `Simply call us at ${phoneNumber} or WhatsApp for instant booking. Share your pickup location, date, time, and number of passengers. You'll receive immediate confirmation with driver details.`
    },
    {
      q: `What is included in the fare?`,
      a: `Our fare includes vehicle rental, fuel charges, driver allowance, GST, and basic insurance. Toll taxes, parking fees, and state permits are charged extra as per actuals.`
    }
  ];

  // Get destination city info for "Things to Do" section
  const destinationInfo = (() => {
    try {
      const { getCityLocalInfo } = require('@/utilis/cityLocalInfo');
      return getCityLocalInfo(formattedDestination);
    } catch { return null; }
  })();

  return (
    <article className="min-h-screen bg-[#FAFAFA]" itemScope itemType="https://schema.org/TravelAction">

      {/* ==================== HERO SECTION — AURORA REDESIGN ==================== */}
      <div className="bg-aurora grain-overlay relative overflow-hidden">
        {/* soft top hairline in brand gold */}
        <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
            <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <li><Link href={`/${cityName}`} className="text-white/60 hover:text-white transition-colors">{formattedCityName}</Link></li>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <li className="text-[#FACF2D] font-medium truncate max-w-[45vw]">{formattedDestination}</li>
          </ol>
        </nav>

        <CityRouteHero
          from={formattedCityName}
          to={formattedDestination}
          distance={route.distance || estimatedDistance}
          time={route.time || estimatedTime}
          startingPrice={startingPrice}
          tripType={tripType}
          onToggleTrip={setTripType}
          onWhatsApp={handleWhatsApp}
          phone={phoneNumber}
          rating="4.9"
        />

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
            answer={`A ${formattedCityName} to ${formattedDestination} cab starts at ${answerFares.sedanOneWay || `₹${startingPrice}`} one way in an AC sedan${answerFares.suvOneWay && answerFares.suvName ? `, and ${answerFares.suvOneWay} in a ${answerFares.suvName}` : ''}${answerFares.sedanRoundTrip ? `; the same sedan is ${answerFares.sedanRoundTrip} as a round trip with the driver waiting for you` : ''}. The road distance is about ${route.distance || estimatedDistance} and the drive takes around ${route.time || estimatedTime}.${answerFares.tempoFare && answerFares.tempoName ? ` Group travellers can book a ${answerFares.tempoName} from ${answerFares.tempoFare}.` : ''} Fares cover fuel, driver and GST; tolls, parking and state permits are charged as per actuals.`}
            facts={[
              { label: 'Distance', value: route.distance || estimatedDistance },
              { label: 'Drive time', value: route.time || estimatedTime },
              { label: 'Sedan one way', value: answerFares.sedanOneWay || `₹${startingPrice}` },
              { label: 'Vehicles', value: '4 to 56 seats' },
            ]}
          />
        </div>
      </section>

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
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              How much is a {formattedCityName} to {formattedDestination} taxi in 2026?
            </h2>
            <div className="key-info grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 text-center border border-amber-100">
                <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Distance</p>
                <p className="text-xl font-black text-slate-900">{route.distance || estimatedDistance}</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-amber-100">
                <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Duration</p>
                <p className="text-xl font-black text-slate-900">{route.time || estimatedTime}</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-amber-100">
                <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Starting Fare</p>
                <p className="text-xl font-black text-green-700">₹{startingPrice}</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-amber-100">
                <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Rating</p>
                <p className="text-xl font-black text-amber-600">4.9★</p>
              </div>
            </div>
            <p className="speakable-lead faq-answer text-slate-700 leading-relaxed text-base md:text-lg">
              The {formattedCityName} to {formattedDestination} taxi fare starts from <strong>₹{startingPrice}</strong> for a sedan (one way).
              The road distance is approximately <strong>{route.distance || estimatedDistance}</strong> and the journey takes around <strong>{route.time || estimatedTime}</strong>.
              {route.routeHighlights ? ` The route goes ${route.routeHighlights.toLowerCase()}.` : ''}
              {route.bestTimeToTravel ? ` Best time to travel: ${route.bestTimeToTravel}.` : ''}
              Triveni Cabs offers AC sedan, SUV, tempo traveller, and bus options with verified professional drivers, GPS tracking, and 24/7 booking.
              Book by calling <strong>+91-7668570551</strong> or WhatsApp for instant confirmation.
            </p>
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

      {/* ==================== FARE TABLE — machine-readable version of the vehicle cards ==================== */}
      {route?.prices && route.prices.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
              {formattedCityName} to {formattedDestination} fare chart
            </h2>
            <p className="text-slate-600 mb-5">
              All-inclusive fares for every vehicle on this route. Tolls, parking and state permits are extra.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[560px] text-left text-sm">
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
                        <th scope="row" className="px-4 py-3 text-left font-semibold text-slate-900">{p.vehicle}</th>
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


      {/* ==================== WHY CHOOSE US - BENTO GRID ==================== */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Why book a {formattedCityName} to {formattedDestination} cab with Triveni Cabs?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Trusted by 50,000+ customers for reliable {formattedCityName} to {formattedDestination} taxi service
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

            {/* Large Card - Safety */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">100% Safe & Secure Journey</h3>
                <p className="text-white/80 text-lg mb-6 max-w-xl">
                  All our drivers are police-verified with 5+ years of experience.
                  Real-time GPS tracking, SOS button, and 24/7 monitoring for your safety.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Verified Drivers', 'GPS Tracking', 'Live Trip Sharing', 'SOS Support'].map((item, i) => (
                    <span key={i} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-5">
                <CreditCard className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent Pricing</h3>
              <p className="text-slate-600 mb-4">
                No hidden charges. Pay per km with clear breakdown of toll, parking, and taxes.
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-medium">
                <CheckCircle className="w-5 h-5" />
                <span>Fixed rates guaranteed</span>
              </div>
            </motion.div>

            {/* Fleet Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
                <Car className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Fleet</h3>
              <p className="text-slate-600 mb-4">
                Well-maintained AC vehicles from Sedan to 56-seater buses. Clean and sanitized.
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-medium">
                <CheckCircle className="w-5 h-5" />
                <span>Regular maintenance</span>
              </div>
            </motion.div>

            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900 rounded-3xl p-6 md:p-8 text-white"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                <Headphones className="w-7 h-7 text-[#FACF2D]" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Customer Support</h3>
              <p className="text-white/70 mb-4">
                Round-the-clock assistance via call and WhatsApp. We are always here to help.
              </p>
              <a href={`tel:+91${phoneNumber}`} className="text-[#FACF2D] font-bold text-lg">
                {phoneNumber}
              </a>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-6 md:p-8 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">50,000+ Happy Trips</h3>
              <p className="text-white/80 mb-4">
                Trusted by families, corporates, and tour operators across India.
              </p>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
                <span className="ml-2 font-bold">4.9/5</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ==================== ROUTE INFORMATION ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACF2D]/20 to-yellow-100 px-4 py-2 rounded-full mb-4">
              <Route className="w-4 h-4 text-[#D4A017]" />
              <span className="text-sm font-semibold text-[#D4A017]">ROUTE GUIDE</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              What route does the {formattedCityName} to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#FACF2D]">{formattedDestination}</span> cab take?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Distance, travel time, stops &amp; fare for {formattedCityName} to {formattedDestination} by car
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Route Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden transition-all duration-500 hover:border-[#FACF2D] hover:shadow-2xl hover:shadow-[#FACF2D]/20 hover:-translate-y-1 h-full">
                <div className="h-1.5 bg-gradient-to-r from-[#FACF2D] via-yellow-400 to-[#D4A017]" />
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FACF2D]/20 to-yellow-100 flex items-center justify-center group-hover:bg-[#FACF2D] transition-colors">
                      <Route className="w-6 h-6 text-[#D4A017] group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Route Details</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl px-4">
                      <span className="text-slate-600">Distance</span>
                      <span className="font-bold text-slate-900">{route.distance || estimatedDistance}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl px-4">
                      <span className="text-slate-600">Duration</span>
                      <span className="font-bold text-slate-900">{route.time || estimatedTime}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl px-4">
                      <span className="text-slate-600">Best Route</span>
                      <span className="font-bold text-slate-900">NH48 Highway</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-xl px-4">
                      <span className="text-slate-600">Road Condition</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Excellent
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Best Travel Times */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden transition-all duration-500 hover:border-[#FACF2D] hover:shadow-2xl hover:shadow-[#FACF2D]/20 hover:-translate-y-1 h-full">
                <div className="h-1.5 bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500" />
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-50 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                      <Clock className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
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
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden transition-all duration-500 hover:border-[#FACF2D] hover:shadow-2xl hover:shadow-[#FACF2D]/20 hover:-translate-y-1 h-full">
                <div className="h-1.5 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500" />
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                      <Gift className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">What&apos;s Included</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Fuel, label: 'Fuel charges', color: 'emerald' },
                      { icon: Users, label: 'Professional driver', color: 'blue' },
                      { icon: Snowflake, label: 'Air conditioning', color: 'sky' },
                      { icon: MapPin, label: 'GPS navigation', color: 'purple' },
                      { icon: Shield, label: 'Insurance coverage', color: 'amber' },
                      { icon: Headphones, label: '24/7 support', color: 'green' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl p-3 border border-slate-100 hover:border-green-200 hover:bg-green-50/30 transition-all">
                        <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{item.label}</span>
                        <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ==================== ROUTE HIGHLIGHTS SECTION ==================== */}
      {route.routeHighlights && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How long does the {formattedCityName} to {formattedDestination} drive take?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Route className="w-5 h-5 text-blue-500" /> Route Highlights
                </h3>
                <p className="text-gray-600">{route.routeHighlights}</p>
              </div>
              {route.bestTimeToTravel && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-500" /> Best Time to Travel
                  </h3>
                  <p className="text-gray-600">{route.bestTimeToTravel}</p>
                </div>
              )}
              {route.localTip && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" /> Local Tip
                  </h3>
                  <p className="text-gray-600">{route.localTip}</p>
                </div>
              )}
              {route.popularStops?.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-500" /> Popular Stops Along the Way
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {route.popularStops.map(stop => (
                      <Link
                        key={stop}
                        href={`/${stop.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-3 py-1.5 bg-white rounded-full text-sm border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
                      >
                        {stop}
                      </Link>
                    ))}
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
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6">
            Complete guide — how to plan a {formattedCityName} to {formattedDestination} trip by cab
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
              The one-way taxi fare from {formattedCityName} to {formattedDestination} starts at just ₹{startingPrice} for an AC sedan (Swift Dzire / Toyota Etios).
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
              Booking your {formattedCityName} to {formattedDestination} cab with Triveni Cabs takes under 2 minutes. Call us at <strong>+91-7668570551</strong> or
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
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-3">
              What can you do in {formattedDestination} after you arrive?
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-3xl">
              {destinationInfo.description || `Explore the best of ${formattedDestination} after your cab ride from ${formattedCityName}.`}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {destinationInfo.localAttractions.slice(0, 6).map((attraction, index) => (
                <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
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
              <div className="mt-8 bg-amber-50 rounded-xl p-6 border border-amber-200/50">
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FACF2D]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACF2D]/20 to-yellow-100 px-5 py-2.5 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-[#D4A017]" />
              <span className="text-sm font-bold text-[#D4A017]">GOT QUESTIONS?</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Frequently asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#FACF2D]">questions</span> about {formattedCityName} to {formattedDestination} cab
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Fare, booking &amp; travel info for {formattedCityName} to {formattedDestination} cab service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl border-2 border-slate-100 overflow-hidden transition-all duration-500 hover:border-[#FACF2D] hover:shadow-2xl hover:shadow-[#FACF2D]/20 hover:-translate-y-2 h-full">
                  {/* Gradient accent */}
                  <div className="h-2 bg-gradient-to-r from-[#FACF2D] via-yellow-400 to-[#D4A017]" />

                  <div className="p-4 md:p-6 lg:p-8">
                    {/* Question */}
                    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-5">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[#FACF2D] to-amber-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FACF2D]/30 group-hover:scale-110 transition-transform">
                        <span className="text-lg md:text-xl font-black text-black">?</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base md:text-lg leading-snug pt-1.5 md:pt-2 min-w-0">{faq.q}</h3>
                    </div>

                    {/* Answer */}
                    <div className="pl-0 md:pl-14 lg:pl-16">
                      <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-2xl p-3 md:p-4 border border-slate-100">
                        <p className={`text-slate-600 leading-relaxed text-sm md:text-base${index === 0 ? ' speakable-faq-first' : ''}`}>{faq.a}</p>
                      </div>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 mb-4">Need more help with your {formattedCityName} to {formattedDestination} trip?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCallNow}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </button>
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-[#FACF2D] hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
              >
                <BsWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </button>
            </div>
          </motion.div>
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
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACF2D]/20 to-yellow-100 px-4 py-2 rounded-full mb-4">
              <Navigation className="w-4 h-4 text-[#D4A017]" />
              <span className="text-sm font-semibold text-[#D4A017]">EXPLORE MORE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Which other routes can I book from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#FACF2D]">{formattedCityName}</span>?
            </h2>
            <p className="text-slate-600 mb-6">
              Explore other popular destinations with transparent pricing
            </p>
            <Link
              href={`/${cityName}`}
              className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-full font-bold transition-all"
            >
              View all routes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {routes
              .filter(r => r.destination !== formattedDestination)
              .slice(0, 8)
              .map((routeItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <Link
                    href={`/${createRouteSlug(cityName, routeItem.destination)}`}
                    className="block relative"
                  >
                    <div className="relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden transition-all duration-500 group-hover:border-[#FACF2D] group-hover:shadow-2xl group-hover:shadow-[#FACF2D]/20 group-hover:-translate-y-2">
                      <div className="h-1.5 bg-gradient-to-r from-[#FACF2D] via-yellow-400 to-[#D4A017]" />
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FACF2D]/20 to-yellow-100 flex items-center justify-center group-hover:bg-[#FACF2D] transition-colors">
                            <MapPin className="w-5 h-5 text-[#D4A017] group-hover:text-black transition-colors" />
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#FACF2D] group-hover:translate-x-1 transition-all" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-[#D4A017] transition-colors">
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
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>


      {/* ==================== STICKY CTA FOOTER ==================== */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Ready to book a <span className="text-[#FACF2D]">{formattedCityName} to {formattedDestination}</span> cab?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Instant confirmation. AC vehicles. One way &amp; round trip. Best price guaranteed. 24/7 available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleCallNow}
                
                whileTap={{ scale: 0.98 }}
                className="bg-[#FACF2D] hover:bg-yellow-400 text-black px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#FACF2D]/25 transition-colors"
              >
                <Phone className="w-6 h-6" />
                Call {phoneNumber}
              </motion.button>

              <motion.button
                onClick={handleWhatsApp}
                
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-colors"
              >
                <BsWhatsapp className="w-6 h-6" />
                WhatsApp Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== FARE CALCULATOR ==================== */}
      <div id="fare-calculator">
        <FareCalculator variant="full" defaultFrom={formattedCityName} defaultTo={formattedDestination} />
      </div>

      {/* FAQ & Popular Routes handled by inline sections above */}

      {/* ==================== TRAVEL GUIDES & TOURS ==================== */}
      {(() => {
        const relatedContent = getRelatedContent(formattedCityName);
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
        const relatedRoutes = getRelatedRoutes(formattedCityName, formattedDestination, 6);
        const services = getServiceCrossLinks(formattedCityName);
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
        price={`₹${startingPrice}`}
        label={`${formattedCityName} to ${formattedDestination} cab`}
        whatsappText={whatsappMessage}
      />

    </article>
  );
}
