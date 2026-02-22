'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Centralized icon imports for better bundle optimization
import {
  MapPin, Users, Star, Phone, CheckCircle, ArrowRight, Sparkles,
  Shield, Clock, ChevronDown, ChevronRight, Heart, Car, Navigation,
  Award, MapPinned, Bus, Route, CreditCard, Headphones, Snowflake,
  Search, Filter, X, BadgeCheck, Timer
} from '@/components/ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon as BsWhatsapp, OutlineMailIcon as HiOutlineMail } from '@/components/ui/icons';
import { phoneNumber, emailAddress } from '@/utilis/data';

// All 14 cities data
const cityData = {
  'Delhi': {
    image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    tagline: 'Gateway to North India',
    icon: '🏛️',
    highlights: ['Agra', 'Jaipur', 'Manali', 'Shimla']
  },
  'Jaipur': {
    image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
    tagline: 'The Pink City',
    icon: '🏰',
    highlights: ['Udaipur', 'Jodhpur', 'Delhi']
  },
  'Chandigarh': {
    image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
    tagline: 'The City Beautiful',
    icon: '🌳',
    highlights: ['Shimla', 'Manali', 'Kasol']
  },
  'Agra': {
    image: '/images/sightseeing/Agra/Agra_Hero_section.jpg',
    tagline: 'Home of Taj Mahal',
    icon: '🕌',
    highlights: ['Delhi', 'Jaipur', 'Mathura']
  },
  'Shimla': {
    image: '/images/sightseeing/Shimla/shimla_hero_section.jpg',
    tagline: 'Queen of Hills',
    icon: '🏔️',
    highlights: ['Manali', 'Kufri', 'Chandigarh']
  },
  'Dehradun': {
    image: '/images/chardham/chardham-dehradun-hero.webp',
    tagline: 'Gateway to Uttarakhand',
    icon: '🌲',
    highlights: ['Mussoorie', 'Rishikesh', 'Haridwar']
  },
  'Rishikesh': {
    image: '/images/chardham/chardham-rishikesh-hero.webp',
    tagline: 'Yoga Capital',
    icon: '🧘',
    highlights: ['Haridwar', 'Badrinath', 'Kedarnath']
  },
  'Haridwar': {
    image: '/images/chardham/chardham-haridwar-hero.webp',
    tagline: 'Gateway to Gods',
    icon: '🙏',
    highlights: ['Rishikesh', 'Kedarnath', 'Badrinath']
  },
  'Manali': {
    image: '/images/packages/manali.webp',
    tagline: 'Adventure Paradise',
    icon: '⛷️',
    highlights: ['Leh', 'Rohtang', 'Shimla']
  },
  'Amritsar': {
    image: '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
    tagline: 'Golden Temple City',
    icon: '🛕',
    highlights: ['Wagah', 'Delhi', 'Chandigarh']
  },
  'Jodhpur': {
    image: '/images/packages/rajasthan.webp',
    tagline: 'The Blue City',
    icon: '🏯',
    highlights: ['Jaisalmer', 'Udaipur', 'Jaipur']
  },
  'Udaipur': {
    image: '/images/packages/rajasthan.webp',
    tagline: 'City of Lakes',
    icon: '🚣',
    highlights: ['Mount Abu', 'Jodhpur', 'Jaipur']
  },
  'Ayodhya': {
    image: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.webp',
    tagline: 'Ram Janmabhoomi',
    icon: '🛕',
    highlights: ['Varanasi', 'Lucknow', 'Prayagraj']
  },
  'Ahmedabad': {
    image: '/images/destinations/delhi.webp',
    tagline: 'Heritage City',
    icon: '🏛️',
    highlights: ['Dwarka', 'Somnath', 'Kutch']
  }
};

// Service features
const serviceFeatures = [
  {
    icon: Shield,
    title: "Verified Drivers",
    description: "Police-verified with 5+ years experience. GPS tracking on every trip.",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden charges. Pay per km with clear breakdown.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Book anytime, travel anytime. Round-the-clock support.",
    gradient: "from-violet-500 to-violet-600"
  },
  {
    icon: Car,
    title: "Premium Fleet",
    description: "Sedan to 56-seater buses. AC, sanitized & GPS-enabled.",
    gradient: "from-amber-500 to-amber-600"
  },
  {
    icon: Navigation,
    title: "500+ Routes",
    description: "All tourist spots, pilgrimage sites & hill stations.",
    gradient: "from-rose-500 to-rose-600"
  },
  {
    icon: Award,
    title: "4.9 Rating",
    description: "50,000+ happy customers. Trusted by families & corporates.",
    gradient: "from-yellow-500 to-yellow-600"
  }
];

// Popular routes
const popularRoutes = [
  { from: "Delhi", to: "Agra", distance: "230 km", time: "4 hrs", price: "2,760" },
  { from: "Delhi", to: "Jaipur", distance: "280 km", time: "5 hrs", price: "3,360" },
  { from: "Delhi", to: "Manali", distance: "540 km", time: "12 hrs", price: "6,480" },
  { from: "Delhi", to: "Shimla", distance: "350 km", time: "7 hrs", price: "4,200" },
  { from: "Delhi", to: "Haridwar", distance: "240 km", time: "5 hrs", price: "2,880" },
  { from: "Delhi", to: "Rishikesh", distance: "240 km", time: "5 hrs", price: "2,880" },
  { from: "Chandigarh", to: "Manali", distance: "310 km", time: "7 hrs", price: "3,720" },
  { from: "Chandigarh", to: "Shimla", distance: "120 km", time: "3 hrs", price: "1,440" },
  { from: "Jaipur", to: "Udaipur", distance: "395 km", time: "6 hrs", price: "4,740" },
  { from: "Jaipur", to: "Jodhpur", distance: "340 km", time: "5 hrs", price: "4,080" },
  { from: "Agra", to: "Jaipur", distance: "240 km", time: "4 hrs", price: "2,880" },
  { from: "Shimla", to: "Manali", distance: "250 km", time: "6 hrs", price: "3,000" },
];

// Vehicle types
const vehicleTypes = [
  { type: 'Sedan', seats: '4', price: '₹12/km', image: '/images/car/car1.webp', rating: '4.9', category: 'car' },
  { type: 'SUV Ertiga', seats: '6', price: '₹15/km', image: '/images/car/car2.webp', rating: '4.8', category: 'car' },
  { type: 'SUV Innova', seats: '7', price: '₹18/km', image: '/images/car/car2.webp', rating: '4.9', category: 'car' },
  { type: '12 Seater Tempo', seats: '12', price: '₹20/km', image: '/images/tempo/12_seater.jpg', rating: '4.8', category: 'tempo' },
  { type: '17 Seater Tempo', seats: '17', price: '₹23/km', image: '/images/tempo/17_seater.jpg', rating: '4.8', category: 'tempo' },
  { type: '26 Seater Maharaja', seats: '26', price: '₹28/km', image: '/images/tempo/26_seater.jpg', rating: '4.9', category: 'tempo' },
  { type: '27 Seater Bus', seats: '27', price: '₹30/km', image: '/images/bus/27_SEATER_BUS.jpg', rating: '4.7', category: 'bus' },
  { type: '45 Seater Bus', seats: '45', price: '₹40/km', image: '/images/bus/45_SEATER_BUS.jpg', rating: '4.8', category: 'bus' }
];

export default function CityRoutesMainClient({ data }) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const { allRoutes, cities } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCallClick = () => {
    window.open(`tel:+91${phoneNumber}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hi, I need outstation taxi booking`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=Outstation Taxi Booking Inquiry&body=Hi, I would like to inquire about outstation taxi booking.`;
  };

  // Get cities with route counts
  const citiesWithData = useMemo(() => {
    return cities.map(city => {
      const routeCount = allRoutes.filter(r => r.origin === city).length;
      const info = cityData[city] || {
        image: '/images/destinations/delhi.webp',
        tagline: 'Explore Routes',
        icon: '📍',
        highlights: []
      };
      return { name: city, routeCount, ...info };
    });
  }, [cities, allRoutes]);

  // Filter vehicles
  const filteredVehicles = useMemo(() => {
    if (activeTab === 'all') return vehicleTypes;
    return vehicleTypes.filter(v => v.category === activeTab);
  }, [activeTab]);

  // Filter cities by search (case-insensitive)
  const filteredCities = useMemo(() => {
    if (!searchQuery) return citiesWithData;
    const query = searchQuery.toLowerCase().trim();
    return citiesWithData.filter(city =>
      city.name.toLowerCase().includes(query) ||
      city.tagline.toLowerCase().includes(query)
    );
  }, [citiesWithData, searchQuery]);

  // Search suggestions for autocomplete
  const searchSuggestions = useMemo(() => {
    if (!searchQuery || searchQuery.length < 1) return [];
    const query = searchQuery.toLowerCase().trim();
    return citiesWithData.filter(city =>
      city.name.toLowerCase().includes(query) ||
      city.tagline.toLowerCase().includes(query)
    ).slice(0, 5); // Show max 5 suggestions
  }, [citiesWithData, searchQuery]);

  // Check if city is available
  const isCityNotFound = searchQuery.trim().length > 0 && filteredCities.length === 0;

  // Handle city selection from suggestions
  const handleCitySelect = (cityName) => {
    setSearchQuery('');
    setShowSuggestions(false);
    window.location.href = `/${cityName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[100svh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/citypage_hero_section_image.jpg"
            alt="Outstation Taxi Service India"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90" />
        </div>

        {/* Pattern */}
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
              <li className="text-[#FACF2D] font-medium">All Routes</li>
            </ol>
          </motion.nav>

          {/* BENTO GRID HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

            {/* Main Content - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 xl:col-span-8"
            >
              <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] p-6 md:p-10 border border-white/10 h-full">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#FACF2D] px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-black" />
                  <span className="text-black font-bold text-sm">INDIA&apos;S MOST TRUSTED TAXI SERVICE</span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.1]">
                  Outstation Taxi to
                  <span className="block text-[#FACF2D]">500+ Destinations</span>
                </h1>

                <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl">
                  Professional cab service from Delhi, Jaipur, Chandigarh, Agra & {cities.length}+ cities.
                  Sedan, SUV, Innova, Tempo Traveller & Buses.
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { icon: MapPin, value: `${cities.length}+`, label: 'Cities' },
                    { icon: Route, value: `${allRoutes.length}+`, label: 'Routes' },
                    { icon: Star, value: '4.9', label: 'Rating' },
                    { icon: Users, value: '50K+', label: 'Trips' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-xl px-4 py-2.5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-2">
                        <stat.icon className="w-4 h-4 text-[#FACF2D]" fill={stat.label === 'Rating' ? 'currentColor' : 'none'} />
                        <span className="text-white font-bold">{stat.value}</span>
                        <span className="text-white/50 text-sm">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                  <motion.button
                    onClick={handleCallClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#FACF2D] hover:bg-yellow-400 text-black px-6 py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#FACF2D]/25 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </motion.button>

                  <motion.button
                    onClick={handleWhatsAppClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 border border-white/20 transition-colors"
                  >
                    <BsWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </motion.button>

                  <motion.button
                    onClick={handleEmailClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white px-6 py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 border border-white/20 transition-colors"
                  >
                    <HiOutlineMail className="w-5 h-5" />
                    Email
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Search & Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4 md:gap-6"
            >
              {/* Search Card */}
              <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] p-6 border border-white/10">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-[#FACF2D]" />
                  Find Your City
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type city name..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onFocus={() => {
                      setSearchFocused(true);
                      setShowSuggestions(true);
                    }}
                    onBlur={() => {
                      setSearchFocused(false);
                      // Delay hiding suggestions to allow click
                      setTimeout(() => setShowSuggestions(false), 200);
                    }}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#FACF2D]/50 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setShowSuggestions(false);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}

                  {/* Autocomplete Dropdown */}
                  <AnimatePresence>
                    {showSuggestions && searchQuery.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-white/20 overflow-hidden z-50 shadow-2xl"
                      >
                        {searchSuggestions.length > 0 ? (
                          searchSuggestions.map((city, index) => (
                            <button
                              key={city.name}
                              onClick={() => handleCitySelect(city.name)}
                              className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#FACF2D]/20 transition-colors text-left border-b border-white/10 last:border-0"
                            >
                              <span className="text-xl">{city.icon}</span>
                              <div className="flex-1">
                                <p className="text-white font-semibold">{city.name}</p>
                                <p className="text-white/50 text-xs">{city.tagline} • {city.routeCount} routes</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-[#FACF2D]" />
                            </button>
                          ))
                        ) : (
                          /* City Not Found - Show Contact Options with Positive Message */
                          <div className="p-4">
                            <div className="text-center mb-4">
                              <div className="w-12 h-12 bg-[#FACF2D] rounded-full flex items-center justify-center mx-auto mb-3">
                                <Sparkles className="w-6 h-6 text-black" />
                              </div>
                              <p className="text-white font-semibold mb-1">We&apos;d love to serve &quot;{searchQuery}&quot;!</p>
                              <p className="text-white/70 text-sm">Not listed yet? No worries — contact us for custom routes!</p>
                            </div>
                            <div className="space-y-2">
                              <a
                                href={`tel:+91${phoneNumber}`}
                                className="w-full flex items-center justify-center gap-2 bg-[#FACF2D] text-black px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-colors"
                              >
                                <Phone className="w-4 h-4" />
                                Call Now
                              </a>
                              <button
                                onClick={handleWhatsAppClick}
                                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-green-700 transition-colors"
                              >
                                <BsWhatsapp className="w-4 h-4" />
                                WhatsApp Us
                              </button>
                              <button
                                onClick={handleEmailClick}
                                className="w-full flex items-center justify-center gap-2 bg-white/10 text-white px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors border border-white/20"
                              >
                                <HiOutlineMail className="w-4 h-4" />
                                Email for Custom Booking
                              </button>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Quick city links */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Delhi', 'Jaipur', 'Chandigarh', 'Shimla'].map((city) => (
                    <Link
                      key={city}
                      href={`/${city.toLowerCase()}`}
                      className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-[#FACF2D] to-amber-400 rounded-[2rem] p-6 relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10">
                  <h3 className="text-black font-bold text-lg mb-2">Quick Booking</h3>
                  <p className="text-black/70 text-sm mb-4">Get instant fare estimate</p>

                  <div className="space-y-2">
                    <a
                      href={`tel:+91${phoneNumber}`}
                      className="flex items-center gap-3 bg-black text-[#FACF2D] px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-black/90 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {phoneNumber}
                    </a>
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full flex items-center justify-center gap-3 bg-white/90 text-black px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-white transition-colors"
                    >
                      <BsWhatsapp className="w-4 h-4" />
                      WhatsApp
                    </button>
                    <button
                      onClick={handleEmailClick}
                      className="w-full flex items-center justify-center gap-3 bg-black/10 text-black px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-black/20 transition-colors"
                    >
                      <HiOutlineMail className="w-4 h-4" />
                      Email Us
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Trust Badges */}
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

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-10 flex flex-col items-center text-white/50 cursor-pointer"
            onClick={() => document.getElementById('cities-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs font-medium mb-2">Explore All Cities</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>


      {/* ==================== ROUTE MARQUEE ==================== */}
      <section className="bg-slate-900 py-4 overflow-hidden border-y border-slate-800">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
        >
          {[...popularRoutes, ...popularRoutes].map((route, idx) => (
            <Link
              key={idx}
              href={`/${route.from.toLowerCase().replace(/\s+/g, '-')}-to-${route.to.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center mx-6 flex-shrink-0 hover:scale-105 transition-transform group"
            >
              <span className="font-bold text-white whitespace-nowrap">{route.from}</span>
              <ArrowRight className="w-4 h-4 mx-2 text-[#FACF2D] flex-shrink-0" />
              <span className="font-bold text-white whitespace-nowrap">{route.to}</span>
              <span className="ml-3 bg-[#FACF2D] px-3 py-1 rounded-full text-black text-sm font-bold whitespace-nowrap">
                ₹{route.price}
              </span>
            </Link>
          ))}
        </motion.div>
      </section>


      {/* ==================== ALL CITIES SECTION ==================== */}
      <section id="cities-section" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-[#FACF2D] px-5 py-2.5 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-bold">14 MAJOR CITIES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Select Your Departure City
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Book reliable outstation cabs from any of our service cities with transparent pricing
            </p>
          </motion.div>

          {/* Cities Grid */}
          {filteredCities.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredCities.map((city, index) => {
                const isLarge = index === 0 || index === 5;

                return (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  >
                    <Link href={`/${city.name.toLowerCase().replace(/\s+/g, '-')}`} className="block group h-full">
                      <div className={`relative overflow-hidden rounded-3xl h-full ${
                        isLarge ? 'min-h-[300px] md:min-h-[400px]' : 'min-h-[180px] md:min-h-[200px]'
                      }`}>
                        {/* Image */}
                        <Image
                          src={city.image}
                          alt={`${city.name} Taxi Service`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,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"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 transition-all" />

                        {/* Glow Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#FACF2D]/20 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                          {/* Top */}
                          <div className="flex justify-between items-start">
                            <span className={`${isLarge ? 'text-4xl' : 'text-2xl'}`}>{city.icon}</span>
                            <div className="bg-[#FACF2D] text-black px-3 py-1 rounded-full">
                              <span className="font-bold text-xs">{city.routeCount} Routes</span>
                            </div>
                          </div>

                          {/* Bottom */}
                          <div>
                            <h3 className={`font-black text-white group-hover:text-[#FACF2D] transition-colors ${
                              isLarge ? 'text-3xl md:text-4xl mb-2' : 'text-xl md:text-2xl mb-1'
                            }`}>
                              {city.name}
                            </h3>
                            <p className={`text-white/80 font-medium ${isLarge ? 'text-base mb-3' : 'text-sm'}`}>
                              {city.tagline}
                            </p>

                            {/* Popular Routes for large cards */}
                            {isLarge && city.highlights && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                {city.highlights.slice(0, 3).map((route, idx) => (
                                  <span key={idx} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                                    → {route}
                                  </span>
                                ))}
                              </div>
                            )}

                            <div className="flex items-center gap-2 text-[#FACF2D] font-bold text-sm">
                              <span>View Routes</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </div>
                          </div>
                        </div>

                        {/* Border */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#FACF2D]/50 transition-colors" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* City Not Found - Full Width Message with Positive Messaging */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 md:p-12 text-center border border-amber-200"
            >
              <div className="max-w-lg mx-auto">
                <div className="w-20 h-20 bg-[#FACF2D] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-200">
                  <Sparkles className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                  We&apos;d Love to Serve You in &quot;{searchQuery}&quot;!
                </h3>
                <p className="text-slate-700 mb-2 text-lg font-medium">
                  This route isn&apos;t listed yet, but we&apos;re always happy to help!
                </p>
                <p className="text-slate-600 mb-8">
                  We&apos;re continuously expanding our network to serve you better. Contact us now — we may still be able to arrange your trip to <strong>{searchQuery}</strong> or suggest the best alternative routes!
                </p>

                <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm border border-amber-100">
                  <p className="text-slate-800 font-bold mb-4 flex items-center justify-center gap-2">
                    <Headphones className="w-5 h-5 text-[#FACF2D]" />
                    Get in Touch — We&apos;re Here to Help!
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={`tel:+91${phoneNumber}`}
                      className="flex items-center justify-center gap-2 bg-[#FACF2D] text-black px-5 py-3.5 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-sm"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                    <button
                      onClick={handleWhatsAppClick}
                      className="flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-3.5 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-sm"
                    >
                      <BsWhatsapp className="w-5 h-5" />
                      WhatsApp
                    </button>
                  </div>
                  <button
                    onClick={handleEmailClick}
                    className="w-full mt-3 flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                  >
                    <HiOutlineMail className="w-5 h-5" />
                    Email Us for Custom Booking
                  </button>
                </div>

                <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-600 mb-6">
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    24/7 Support
                  </span>
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Custom Routes Available
                  </span>
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Best Price Guaranteed
                  </span>
                </div>

                <button
                  onClick={() => setSearchQuery('')}
                  className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-2 mx-auto transition-colors"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Browse All Available Cities
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>


      {/* ==================== VEHICLE FLEET ==================== */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-[#FACF2D] px-5 py-2.5 rounded-full mb-6">
              <Car className="w-4 h-4" />
              <span className="text-sm font-bold">OUR FLEET</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Choose Your Vehicle
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From 4-seater sedans to 56-seater luxury buses. AC, GPS-enabled & well-maintained.
            </p>
          </motion.div>

          {/* Vehicle Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              { id: 'all', label: 'All', icon: Sparkles },
              { id: 'car', label: 'Cars & SUVs', icon: Car },
              { id: 'tempo', label: 'Tempo Traveller', icon: Users },
              { id: 'bus', label: 'Buses', icon: Bus }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-[#FACF2D]'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all group"
              >
                {/* Image */}
                <div className="relative h-44 bg-gradient-to-br from-slate-100 to-slate-50">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.type}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,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"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" fill="currentColor" />
                    <span className="font-bold text-sm">{vehicle.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{vehicle.type}</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {vehicle.seats}
                        </span>
                        <span className="flex items-center gap-1">
                          <Snowflake className="w-3.5 h-3.5" />
                          AC
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500">From</p>
                      <p className="text-xl font-black text-slate-900">{vehicle.price}</p>
                    </div>
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-slate-900 hover:bg-[#FACF2D] text-white hover:text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-colors"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Why Triveni Cabs?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Trusted by 50,000+ customers for reliable outstation taxi service
            </p>
          </motion.div>

          {/* Features Bento Grid */}
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
                  All drivers police-verified with 5+ years experience.
                  Real-time GPS tracking and 24/7 monitoring.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Verified Drivers', 'GPS Tracking', 'Live Sharing', 'SOS Support'].map((item, i) => (
                    <span key={i} className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Other Features */}
            {serviceFeatures.slice(1, 3).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-5`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}

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
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-white/70 mb-4">Round-the-clock assistance via call and WhatsApp.</p>
              <a href={`tel:+91${phoneNumber}`} className="text-[#FACF2D] font-bold text-lg">
                {phoneNumber}
              </a>
            </motion.div>

            {/* Rating Card */}
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
              <p className="text-white/80 mb-4">Trusted by families, corporates & tour operators.</p>
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


      {/* ==================== POPULAR ROUTES TABLE ==================== */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Popular Routes & Fares
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Indicative one-way fares for sedan. SUV, Innova, Tempo & Bus rates on request.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200">
            {/* Header */}
            <div className="grid grid-cols-4 md:grid-cols-5 bg-slate-900 text-white font-bold text-sm">
              <div className="p-4 col-span-2">Route</div>
              <div className="p-4 hidden md:block">Distance</div>
              <div className="p-4">Duration</div>
              <div className="p-4">Fare</div>
            </div>

            {/* Rows */}
            {popularRoutes.map((route, idx) => (
              <Link
                key={idx}
                href={`/${route.from.toLowerCase().replace(/\s+/g, '-')}-to-${route.to.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  className={`grid grid-cols-4 md:grid-cols-5 items-center ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-[#FACF2D]/10 transition-colors cursor-pointer group border-b border-slate-100 last:border-0`}
                >
                  <div className="p-4 col-span-2 font-semibold text-slate-900 group-hover:text-[#D4A017]">
                    {route.from}
                    <ArrowRight className="w-4 h-4 inline mx-2 text-[#FACF2D]" />
                    {route.to}
                  </div>
                  <div className="p-4 text-slate-600 hidden md:block">{route.distance}</div>
                  <div className="p-4 text-slate-600">{route.time}</div>
                  <div className="p-4 font-black text-[#FACF2D] text-lg">₹{route.price}</div>
                </motion.div>
              </Link>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-6">
            * Prices are indicative for sedan. Final fare depends on actual distance. Toll, parking & state tax extra.
          </p>
        </div>
      </section>


      {/* ==================== FINAL CTA ==================== */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Ready to Book Your <span className="text-[#FACF2D]">Outstation Trip</span>?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Get instant confirmation. Professional drivers. Best price guaranteed. Available 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleCallClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FACF2D] hover:bg-yellow-400 text-black px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#FACF2D]/25 transition-colors"
              >
                <Phone className="w-6 h-6" />
                Call {phoneNumber}
              </motion.button>

              <motion.button
                onClick={handleWhatsAppClick}
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
              <p className="text-xs text-slate-500">Outstation Taxi</p>
              <p className="text-lg font-black text-slate-900">From ₹12/km</p>
            </div>
            <button
              onClick={handleCallClick}
              className="bg-[#FACF2D] text-black px-5 py-3 rounded-xl font-bold flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call
            </button>
            <button
              onClick={handleWhatsAppClick}
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
