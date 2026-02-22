'use client';

import React, { useState, useMemo, useCallback, useEffect } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';

// Dynamically import FareCalculator (client-only, below fold)
const FareCalculator = dynamic(() => import('@/components/calculator/FareCalculator'), { ssr: false });
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';

// SEO Components
import { SEOBreadcrumb } from '@/components/seo/Breadcrumb';
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
  'Sedan': '/images/car/car1.webp',
  'SUV Ertiga': '/images/car/car2.webp',
  'SUV Innova': '/images/car/car2.webp',
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
  const [mounted, setMounted] = useState(false);
  const [hoveredVehicle, setHoveredVehicle] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const routeOffices = useMemo(() =>
    getRouteOffices(formattedCityName, formattedDestination),
    [formattedCityName, formattedDestination]
  );

  const handleCallNow = useCallback(() => {
    window.open(`tel:+91${phoneNumber}`, '_blank');
  }, []);

  const handleWhatsApp = useCallback(() => {
    const message = `Hi, I want to book a ${tripType === 'roundTrip' ? 'round trip' : 'one-way'} cab from ${formattedCityName} to ${formattedDestination}. Please share pricing and availability.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
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

  const startingPrice = useMemo(() => {
    if (!filteredVehicles.length) return "2,760";
    const prices = filteredVehicles.map(p => {
      const price = tripType === 'oneWay' ? p.price : p.roundTrip;
      return parseInt(price?.replace('₹', '').replace(',', '') || '0');
    });
    return Math.min(...prices).toLocaleString();
  }, [filteredVehicles, tripType]);

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

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* ==================== HERO SECTION - BENTO STYLE ==================== */}
      <section className="relative min-h-[60svh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FACF2D]/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 md:pt-8 md:pb-28">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              </li>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <li>
                <Link href={`/${cityName}`} className="text-white/60 hover:text-white transition-colors">{formattedCityName}</Link>
              </li>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <li className="text-[#FACF2D] font-medium">{formattedDestination}</li>
            </ol>
          </motion.nav>

          {/* BENTO GRID HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

            {/* Main Content Card - Left Side */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 xl:col-span-8"
            >
              <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] p-6 md:p-10 border border-white/10 h-full">

                {/* Route Badge */}
                <div className="inline-flex items-center gap-2 bg-[#FACF2D] px-4 py-2 rounded-full mb-6">
                  <Route className="w-4 h-4 text-black" />
                  <span className="text-black font-bold text-sm">OUTSTATION TAXI</span>
                </div>

                {/* Price Badge */}
                <div className="inline-flex items-center gap-2 bg-[#FACF2D] text-black px-4 py-2 rounded-full font-bold text-lg mb-4">
                  Starting from ₹{startingPrice}
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.1]">
                  {formattedCityName}
                  <span className="text-[#FACF2D]"> to </span>
                  {formattedDestination} Cab
                </h1>

                <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl">
                  Book {formattedCityName} to {formattedDestination} cab &amp; taxi with AC sedan, SUV or tempo traveller. One way &amp; round trip available.
                </p>

                {/* Quick Stats Row */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <Navigation className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">{route.distance || estimatedDistance}</p>
                        <p className="text-white/50 text-xs">Distance</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                        <Timer className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">{route.time || estimatedTime}</p>
                        <p className="text-white/50 text-xs">Duration</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" fill="white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">4.9</p>
                        <p className="text-white/50 text-xs">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={handleCallNow}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#FACF2D] hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#FACF2D]/25 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </motion.button>

                  <motion.button
                    onClick={handleWhatsApp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 border border-white/20 transition-colors"
                  >
                    <BsWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Side Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4 md:gap-6"
            >
              {/* Price Card */}
              <div className="bg-gradient-to-br from-[#FACF2D] to-amber-400 rounded-[2rem] p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10">
                  <p className="text-black/60 font-medium mb-1">Starting from</p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-black text-5xl md:text-6xl font-black">₹{startingPrice}</span>
                    <span className="text-black/60 font-medium">/{tripType === 'roundTrip' ? 'round trip' : 'one way'}</span>
                  </div>

                  {/* Trip Type Toggle */}
                  <div className="bg-black/10 rounded-xl p-1 flex gap-1">
                    <button
                      onClick={() => setTripType('oneWay')}
                      className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
                        tripType === 'oneWay'
                          ? 'bg-black text-[#FACF2D]'
                          : 'text-black/70 hover:text-black'
                      }`}
                    >
                      One Way
                    </button>
                    <button
                      onClick={() => setTripType('roundTrip')}
                      className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-bold transition-all ${
                        tripType === 'roundTrip'
                          ? 'bg-black text-[#FACF2D]'
                          : 'text-black/70 hover:text-black'
                      }`}
                    >
                      Round Trip
                    </button>
                  </div>
                </div>
              </div>

              {/* Route Visual Card */}
              <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] p-6 border border-white/10 flex-1">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                      {cityData.icon}
                    </div>
                    <div className="w-0.5 h-16 bg-gradient-to-b from-emerald-500 to-blue-500 my-2" />
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      📍
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-6">
                      <p className="text-white/50 text-xs font-medium mb-1">PICKUP</p>
                      <p className="text-white font-bold text-lg">{formattedCityName}</p>
                    </div>
                    <div>
                      <p className="text-white/50 text-xs font-medium mb-1">DROP</p>
                      <p className="text-white font-bold text-lg">{formattedDestination}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Estimated journey</span>
                    <span className="text-white font-bold">{route.time || estimatedTime}</span>
                  </div>
                </div>
              </div>

              {/* Enquiry Form */}
              <QuickEnquiryForm
                fromCity={formattedCityName}
                toCity={formattedDestination}
                pageType="route"
              />
            </motion.div>

          </div>

          {/* Trust Badges - Below Bento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-white border-b border-gray-100 py-3">
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

      {/* ==================== VEHICLE SELECTION SECTION ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-[#FACF2D] px-5 py-2.5 rounded-full mb-6">
              <Car className="w-4 h-4" />
              <span className="text-sm font-bold">CHOOSE YOUR RIDE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Select Your Vehicle
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              All vehicles include AC, GPS tracking, professional driver, and complimentary water bottles
            </p>
          </motion.div>

          {/* Vehicle Grid - Modern Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredVehicles.length > 0 ? filteredVehicles.map((vehicle, index) => {
              // Extract seats from vehicle name if not in map
              const getDefaultVehicleInfo = (name) => {
                const match = name.match(/(\d+)\s*seater/i);
                if (match) {
                  const seats = match[1];
                  const isBus = name.toLowerCase().includes('bus') || name.toLowerCase().includes('coach');
                  return { seats, bags: seats, icon: isBus ? Bus : Users, type: isBus ? 'bus' : 'tempo' };
                }
                return { seats: '4', bags: '2', icon: Car, type: 'car' };
              };
              const vehicleInfo = vehicleCapacityMap[vehicle.vehicle] || getDefaultVehicleInfo(vehicle.vehicle);
              const isSelected = selectedVehicle === index;
              const isHovered = hoveredVehicle === index;
              const currentPrice = tripType === 'oneWay' ? vehicle.price : vehicle.roundTrip;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredVehicle(index)}
                  onMouseLeave={() => setHoveredVehicle(null)}
                  onClick={() => setSelectedVehicle(isSelected ? null : index)}
                  className="group relative cursor-pointer"
                >
                  <div className={`relative bg-white rounded-2xl border-2 overflow-hidden transition-all duration-500 ${
                    isSelected
                      ? 'border-[#FACF2D] shadow-2xl shadow-[#FACF2D]/30 -translate-y-2'
                      : isHovered
                        ? 'border-[#FACF2D] shadow-2xl shadow-[#FACF2D]/20 -translate-y-2'
                        : 'border-slate-100 shadow-lg hover:shadow-xl'
                  }`}>

                    {/* Top Gradient Bar */}
                    <div className="h-1.5 bg-gradient-to-r from-[#FACF2D] via-yellow-400 to-[#D4A017]" />

                    {/* Selection Badge */}
                    {isSelected && (
                      <div className="absolute top-6 right-4 z-20">
                        <div className="bg-[#FACF2D] text-black px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-xs font-bold">Selected</span>
                        </div>
                      </div>
                    )}

                    {/* Best Value Badge for first vehicle */}
                    {index === 0 && !isSelected && (
                      <div className="absolute top-6 right-4 z-20">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                          <Zap className="w-3 h-3" />
                          <span className="text-xs font-bold">Best Value</span>
                        </div>
                      </div>
                    )}

                    {/* Image Section */}
                    <div className="relative h-52 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
                      <Image
                        src={vehicleImageMap[vehicle.vehicle] || '/images/car/car1.webp'}
                        alt={`${vehicle.vehicle} cab`}
                        fill
                        className={`object-contain p-6 transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Vehicle Name & Rating */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-black text-slate-900">{vehicle.vehicle}</h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                              <Users className="w-4 h-4" />
                              {vehicleInfo.seats} Seats
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                              <Snowflake className="w-4 h-4" />
                              AC
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-lg border border-amber-200">
                          <Star className="w-3.5 h-3.5" fill="currentColor" />
                          <span className="font-bold text-sm">4.9</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {[
                          { icon: '📍', text: 'GPS' },
                          { icon: '🎵', text: 'Music' },
                          { icon: '🔌', text: 'Charger' },
                          { icon: '💧', text: 'Water' }
                        ].map((f, i) => (
                          <span key={i} className="bg-slate-50 text-slate-600 px-2.5 py-1 rounded-lg text-xs font-medium border border-slate-100 flex items-center gap-1">
                            <span>{f.icon}</span>
                            {f.text}
                          </span>
                        ))}
                      </div>

                      {/* Price Section */}
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-4 mb-4">
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-xs text-slate-500 mb-1">
                              {tripType === 'roundTrip' ? 'Round Trip' : 'One Way'} Price
                            </p>
                            <div className="flex items-baseline gap-1">
                              <span className="text-3xl font-black text-slate-900">{currentPrice}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-400">Includes</p>
                            <p className="text-xs text-green-600 font-semibold">Driver + Fuel + AC</p>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        onClick={(e) => { e.stopPropagation(); handleWhatsApp(); }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                          isSelected || isHovered
                            ? 'bg-[#FACF2D] text-black shadow-lg shadow-[#FACF2D]/25'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        <BsWhatsapp className="w-4 h-4" />
                        Book on WhatsApp
                      </motion.button>
                    </div>

                    {/* Shine Effect on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-700 pointer-events-none ${
                      isHovered ? 'translate-x-full' : ''
                    }`} />
                  </div>
                </motion.div>
              );
            }) : (
              // Fallback vehicles with same modern style
              [
                { name: 'Sedan', price: '₹2,760', seats: '4', image: '/images/car/car1.webp' },
                { name: 'SUV Ertiga', price: '₹3,450', seats: '6', image: '/images/car/car2.webp' },
                { name: 'SUV Innova', price: '₹4,140', seats: '7', image: '/images/car/car2.webp' }
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#FACF2D] hover:-translate-y-2 transition-all duration-500">
                    <div className="h-1.5 bg-gradient-to-r from-[#FACF2D] via-yellow-400 to-[#D4A017]" />
                    <div className="relative h-52 bg-gradient-to-br from-slate-50 to-slate-100">
                      <Image src={v.image} alt={v.name} fill className="object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-black text-slate-900 mb-2">{v.name}</h3>
                      <div className="flex items-center gap-3 mb-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><Users className="w-4 h-4" />{v.seats} Seats</span>
                        <span className="flex items-center gap-1"><Snowflake className="w-4 h-4" />AC</span>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4 mb-4">
                        <p className="text-3xl font-black text-slate-900">{v.price}</p>
                      </div>
                      <button onClick={handleWhatsApp} className="w-full bg-slate-900 hover:bg-[#FACF2D] text-white hover:text-black py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2">
                        <BsWhatsapp className="w-4 h-4" />
                        Book on WhatsApp
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Group Travel Notice */}
          {tripType === 'oneWay' && tempoAndBusVehicles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-blue-900">Travelling in a Group?</h3>
                  </div>
                  <p className="text-blue-700 text-sm">
                    We have Tempo Travellers (12-26 seater) and Buses (22-56 seater) available for round-trip bookings.
                    Perfect for family tours, corporate outings, and group pilgrimages.
                  </p>
                </div>
                <button
                  onClick={() => setTripType('roundTrip')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors whitespace-nowrap"
                >
                  View Group Vehicles
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>


      {/* ==================== WHY CHOOSE US - BENTO GRID ==================== */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Why Book {formattedCityName} to {formattedDestination} Cab With Us?
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {formattedCityName} to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#FACF2D]">{formattedDestination}</span> Route Guide
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
              {formattedCityName} to {formattedDestination} — Route Guide
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {formattedCityName} to {formattedDestination} Cab <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#FACF2D]">FAQs</span>
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

                  <div className="p-6 md:p-8">
                    {/* Question */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FACF2D] to-amber-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FACF2D]/30 group-hover:scale-110 transition-transform">
                        <span className="text-xl font-black text-black">?</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg leading-snug pt-2">{faq.q}</h3>
                    </div>

                    {/* Answer */}
                    <div className="pl-16">
                      <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-2xl p-4 border border-slate-100">
                        <p className="text-slate-600 leading-relaxed">{faq.a}</p>
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
              More Routes from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#FACF2D]">{formattedCityName}</span>
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
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Book <span className="text-[#FACF2D]">{formattedCityName} to {formattedDestination}</span> Cab Now
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Instant confirmation. AC vehicles. One way &amp; round trip. Best price guaranteed. 24/7 available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleCallNow}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FACF2D] hover:bg-yellow-400 text-black px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#FACF2D]/25 transition-colors"
              >
                <Phone className="w-6 h-6" />
                Call {phoneNumber}
              </motion.button>

              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.02 }}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Travel Guides & Tours</h2>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Services in {formattedCityName}</h2>
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

      {/* ==================== FLOATING MOBILE CTA ==================== */}
      {mounted && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-4 md:hidden shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-xs text-slate-500">Starting from</p>
              <p className="text-xl font-black text-slate-900">₹{startingPrice}</p>
            </div>
            <button
              onClick={handleCallNow}
              className="bg-[#FACF2D] text-black px-5 py-3 rounded-xl font-bold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-slate-900 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2"
            >
              <BsWhatsapp className="w-4 h-4" />
              Book
            </button>
          </div>
        </motion.div>
      )}

    </div>
  );
}
