'use client';

import React, { useState, useMemo, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone, MapPin, Car, ChevronRight, Users, ArrowRight, Clock,
  Star, Shield, CheckCircle, Navigation, CreditCard, Headphones,
  Award, Sparkles, Route, Fuel, Calendar, Zap, Gift,
  ChevronDown, Play, BadgeCheck, Timer, Gauge, Wifi, Music,
  Snowflake, MapPinned, CircleDot, TrendingUp
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { phoneNumber } from "@/utilis/data";
import { getRouteOffices } from "@/utilis/officeLocations";
import OfficeLocations from "@/components/cities/OfficeLocations";
import { motion, AnimatePresence } from "framer-motion";

// City hero images
const cityHeroData = {
  'Delhi': { image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg', icon: '🏛️', accent: '#4F46E5' },
  'Jaipur': { image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg', icon: '🏰', accent: '#DB2777' },
  'Chandigarh': { image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', icon: '🌳', accent: '#059669' },
  'Agra': { image: '/images/sightseeing/Agra/Agra_Hero_section.jpg', icon: '🕌', accent: '#D97706' },
  'Shimla': { image: '/images/sightseeing/Shimla/shimla_hero_section.jpg', icon: '🏔️', accent: '#0891B2' },
  'Dehradun': { image: '/images/chardham/chardham-dehradun-hero.png', icon: '🌲', accent: '#16A34A' },
  'Rishikesh': { image: '/images/chardham/chardham-rishikesh-hero.png', icon: '🧘', accent: '#0D9488' },
  'Haridwar': { image: '/images/chardham/chardham-haridwar-hero.png', icon: '🙏', accent: '#EA580C' },
  'Manali': { image: '/images/packages/manali.webp', icon: '⛷️', accent: '#2563EB' },
  'Amritsar': { image: '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg', icon: '🛕', accent: '#CA8A04' },
  'Jodhpur': { image: '/images/packages/rajasthan.webp', icon: '🏯', accent: '#4F46E5' },
  'Udaipur': { image: '/images/packages/rajasthan.webp', icon: '🚣', accent: '#7C3AED' },
  'Ayodhya': { image: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png', icon: '🛕', accent: '#DC2626' },
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
  'Sedan': { seats: '4', bags: '2', icon: Car },
  'SUV Ertiga': { seats: '6', bags: '3', icon: Car },
  'SUV Innova': { seats: '7', bags: '4', icon: Car },
  '12 Seater Tempo': { seats: '12', bags: '12', icon: Users },
  '16 Seater Tempo': { seats: '16', bags: '16', icon: Users },
  '17 Seater Tempo': { seats: '17', bags: '17', icon: Users },
  '20 Seater Tempo': { seats: '20', bags: '20', icon: Users },
  '26 Seater Maharaja': { seats: '26', bags: '26', icon: Users },
  'Tempo Traveller': { seats: '17', bags: '17', icon: Users }
};

function createRouteSlug(cityName, destination) {
  if (!cityName || !destination) return '';
  return `${cityName.toLowerCase()}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
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

  // Filter vehicles based on trip type
  const filteredVehicles = useMemo(() => {
    if (!route?.prices) return [];
    if (tripType === 'oneWay') {
      return route.prices.filter(p =>
        p.vehicle &&
        !p.vehicle.toLowerCase().includes('bus') &&
        !p.vehicle.toLowerCase().includes('tempo')
      );
    }
    return route.prices;
  }, [route?.prices, tripType]);

  const tempoAndBusVehicles = useMemo(() => {
    if (!route?.prices) return [];
    return route.prices.filter(p =>
      p.vehicle && (
        p.vehicle.toLowerCase().includes('bus') ||
        p.vehicle.toLowerCase().includes('tempo')
      )
    );
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
      <section className="relative min-h-[100svh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
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
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 xl:col-span-8"
            >
              <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] p-6 md:p-10 border border-white/10 h-full">

                {/* Route Badge */}
                <div className="inline-flex items-center gap-2 bg-[#FACF2D] px-4 py-2 rounded-full mb-6">
                  <Route className="w-4 h-4 text-black" />
                  <span className="text-black font-bold text-sm">OUTSTATION TAXI</span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.1]">
                  {formattedCityName}
                  <span className="text-[#FACF2D]"> to </span>
                  {formattedDestination}
                </h1>

                <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl">
                  Book reliable cab service with professional drivers, AC vehicles, and transparent pricing.
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
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
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

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredVehicles.length > 0 ? filteredVehicles.map((vehicle, index) => {
              const vehicleInfo = vehicleCapacityMap[vehicle.vehicle] || { seats: '4', bags: '2', icon: Car };
              const isSelected = selectedVehicle === index;
              const currentPrice = tripType === 'oneWay' ? vehicle.price : vehicle.roundTrip;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedVehicle(isSelected ? null : index)}
                  className={`relative bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'ring-2 ring-[#FACF2D] shadow-xl shadow-[#FACF2D]/10'
                      : 'border border-slate-200 hover:border-slate-300 hover:shadow-lg'
                  }`}
                >
                  {/* Selection Indicator */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-[#FACF2D] rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-black" />
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-50">
                    <Image
                      src={vehicleImageMap[vehicle.vehicle] || '/images/car/car1.webp'}
                      alt={`${vehicle.vehicle} cab from ${formattedCityName} to ${formattedDestination}`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{vehicle.vehicle}</h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {vehicleInfo.seats} Seats
                          </span>
                          <span className="flex items-center gap-1">
                            <Snowflake className="w-4 h-4" />
                            AC
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg">
                        <Star className="w-4 h-4" fill="currentColor" />
                        <span className="font-bold text-sm">4.9</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {['GPS', 'Music', 'Charger'].map((f, i) => (
                        <span key={i} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-medium">
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-sm text-slate-500">
                          {tripType === 'roundTrip' ? 'Round Trip' : 'One Way'}
                        </p>
                        <p className="text-2xl font-black text-slate-900">{currentPrice}</p>
                      </div>
                      <motion.button
                        onClick={(e) => { e.stopPropagation(); handleWhatsApp(); }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-slate-900 hover:bg-[#FACF2D] text-white hover:text-black px-6 py-3 rounded-xl font-bold text-sm transition-colors"
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            }) : (
              // Fallback vehicles
              [
                { name: 'Sedan', price: '₹12/km', seats: '4', image: '/images/car/car1.webp' },
                { name: 'SUV Ertiga', price: '₹15/km', seats: '6', image: '/images/car/car2.webp' },
                { name: 'SUV Innova', price: '₹18/km', seats: '7', image: '/images/car/car2.webp' }
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-50">
                    <Image src={v.image} alt={v.name} fill className="object-contain p-4" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{v.name}</h3>
                    <div className="flex items-center gap-3 mb-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" />{v.seats} Seats</span>
                      <span className="flex items-center gap-1"><Snowflake className="w-4 h-4" />AC</span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <p className="text-2xl font-black text-slate-900">{v.price}</p>
                      <button onClick={handleWhatsApp} className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm">
                        Book Now
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
              Why Book With Us?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Trusted by 50,000+ customers for reliable outstation taxi service
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              {formattedCityName} to {formattedDestination} Route Guide
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Everything you need to know about your journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Route Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Route className="w-5 h-5 text-[#FACF2D]" />
                Route Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Distance</span>
                  <span className="font-bold text-slate-900">{route.distance || estimatedDistance}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Duration</span>
                  <span className="font-bold text-slate-900">{route.time || estimatedTime}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Best Route</span>
                  <span className="font-bold text-slate-900">NH48 Highway</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-slate-600">Road Condition</span>
                  <span className="font-bold text-emerald-600">Excellent</span>
                </div>
              </div>
            </motion.div>

            {/* Best Travel Times */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-3xl p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FACF2D]" />
                Best Travel Times
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900">Early Morning</span>
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold">Fastest</span>
                  </div>
                  <p className="text-slate-600 text-sm">5:00 AM - 7:00 AM</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900">Late Morning</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">Comfortable</span>
                  </div>
                  <p className="text-slate-600 text-sm">10:00 AM - 12:00 PM</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900">Evening</span>
                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-bold">Traffic</span>
                  </div>
                  <p className="text-slate-600 text-sm">5:00 PM - 8:00 PM</p>
                </div>
              </div>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 rounded-3xl p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Gift className="w-5 h-5 text-[#FACF2D]" />
                What&apos;s Included
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Fuel, label: 'Fuel charges' },
                  { icon: Users, label: 'Professional driver' },
                  { icon: Snowflake, label: 'Air conditioning' },
                  { icon: MapPin, label: 'GPS navigation' },
                  { icon: Shield, label: 'Insurance coverage' },
                  { icon: Headphones, label: '24/7 support' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg">
              Quick answers to common questions about {formattedCityName} to {formattedDestination} taxi service
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? -1 : index)}
                  className="w-full bg-white rounded-2xl p-5 md:p-6 text-left border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-slate-900 text-lg pr-4">{faq.q}</h3>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </div>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-slate-600 mt-4 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
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
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                More Routes from {formattedCityName}
              </h2>
              <p className="text-slate-600">
                Explore other popular destinations
              </p>
            </div>
            <Link
              href={`/${cityName}`}
              className="inline-flex items-center gap-2 text-[#FACF2D] hover:text-amber-600 font-bold transition-colors"
            >
              View all routes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes
              .filter(r => r.destination !== formattedDestination)
              .slice(0, 8)
              .map((routeItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={`/${createRouteSlug(cityName, routeItem.destination)}`}
                    className="block bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#FACF2D] hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-slate-900 group-hover:text-[#FACF2D] transition-colors">
                        {routeItem.destination}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#FACF2D] group-hover:translate-x-1 transition-all" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Navigation className="w-3.5 h-3.5" />
                        {routeItem.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {routeItem.time}
                      </span>
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
              Ready to Book Your <span className="text-[#FACF2D]">{formattedCityName} to {formattedDestination}</span> Trip?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Get instant confirmation. Professional drivers. Best price guaranteed. Available 24/7.
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
