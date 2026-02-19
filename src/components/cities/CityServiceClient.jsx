'use client';

import { useEffect, useMemo, useCallback, useState } from "react";
// Centralized icon imports for better bundle optimization
import {
  MapPin, Phone, Car, Clock, Shield, CheckCircle,
  Users, ChevronRight, Star, ArrowRight, Sparkles,
  CreditCard, Headphones, Award, Heart, Navigation,
  Bus, ChevronDown, Route, Fuel, Gift, BadgeCheck,
  Timer, Snowflake, Search, Filter, X, Play,
  Calendar, Sun, Thermometer, CloudSun
} from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon as BsWhatsapp } from '@/components/ui/icons';
import { phoneNumber } from "@/utilis/data";
import CityRoutes from "@/components/cities/CityRoutes";
import CityLocalInfoSection from "@/components/cities/CityLocalInfoSection";
import { bestTimeToVisitData } from "@/utilis/bestTimeToVisitData";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';

// Dynamically import FareCalculator (client-only, below fold)
const FareCalculator = dynamic(() => import('@/components/calculator/FareCalculator'), { ssr: false });

// SEO Components
import { SEOBreadcrumb } from '@/components/seo/Breadcrumb';
import { FAQSection } from '@/components/seo/FAQSection';
import { CrossServiceLinks, NearbyDestinations, PopularRoutes } from '@/components/seo/RelatedContent';
import { generateCityFAQs } from '@/lib/seo/faq-generator';
import { getNearbyDestinations, getRelatedRoutes, getPopularCities, getRelatedContent } from '@/utilis/linkingHelper';
import CrossLinkingSection from '@/components/seo/CrossLinkingSection';

// City data with images
const cityHeroData = {
  'Delhi': {
    image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    tagline: 'Gateway to North India',
    icon: '🏛️',
    gradient: 'from-blue-600 to-indigo-700',
    highlights: ['Agra', 'Jaipur', 'Manali', 'Shimla']
  },
  'Jaipur': {
    image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
    tagline: 'The Pink City',
    icon: '🏰',
    gradient: 'from-pink-500 to-rose-600',
    highlights: ['Udaipur', 'Jodhpur', 'Delhi', 'Agra']
  },
  'Chandigarh': {
    image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
    tagline: 'The City Beautiful',
    icon: '🌳',
    gradient: 'from-emerald-500 to-teal-600',
    highlights: ['Shimla', 'Manali', 'Kasol', 'Delhi']
  },
  'Agra': {
    image: '/images/sightseeing/Agra/Agra_Hero_section.jpg',
    tagline: 'Home of Taj Mahal',
    icon: '🕌',
    gradient: 'from-amber-500 to-orange-600',
    highlights: ['Delhi', 'Jaipur', 'Mathura', 'Vrindavan']
  },
  'Shimla': {
    image: '/images/sightseeing/Shimla/shimla_hero_section.jpg',
    tagline: 'Queen of Hills',
    icon: '🏔️',
    gradient: 'from-cyan-500 to-blue-600',
    highlights: ['Manali', 'Kufri', 'Chandigarh', 'Delhi']
  },
  'Dehradun': {
    image: '/images/chardham/chardham-dehradun-hero.png',
    tagline: 'Gateway to Uttarakhand',
    icon: '🌲',
    gradient: 'from-green-500 to-emerald-600',
    highlights: ['Mussoorie', 'Rishikesh', 'Haridwar', 'Delhi']
  },
  'Rishikesh': {
    image: '/images/chardham/chardham-rishikesh-hero.png',
    tagline: 'Yoga Capital of World',
    icon: '🧘',
    gradient: 'from-teal-500 to-cyan-600',
    highlights: ['Haridwar', 'Badrinath', 'Kedarnath', 'Delhi']
  },
  'Haridwar': {
    image: '/images/chardham/chardham-haridwar-hero.png',
    tagline: 'Gateway to Gods',
    icon: '🙏',
    gradient: 'from-orange-500 to-amber-600',
    highlights: ['Rishikesh', 'Kedarnath', 'Badrinath', 'Delhi']
  },
  'Manali': {
    image: '/images/packages/manali.webp',
    tagline: 'Adventure Paradise',
    icon: '⛷️',
    gradient: 'from-sky-500 to-indigo-600',
    highlights: ['Leh', 'Rohtang', 'Shimla', 'Delhi']
  },
  'Amritsar': {
    image: '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
    tagline: 'Golden Temple City',
    icon: '🛕',
    gradient: 'from-yellow-500 to-orange-500',
    highlights: ['Wagah', 'Delhi', 'Chandigarh', 'Jammu']
  },
  'Jodhpur': {
    image: '/images/packages/rajasthan.webp',
    tagline: 'The Blue City',
    icon: '🏯',
    gradient: 'from-blue-500 to-indigo-600',
    highlights: ['Jaisalmer', 'Udaipur', 'Jaipur', 'Delhi']
  },
  'Udaipur': {
    image: '/images/packages/rajasthan.webp',
    tagline: 'City of Lakes',
    icon: '🚣',
    gradient: 'from-violet-500 to-purple-600',
    highlights: ['Mount Abu', 'Jodhpur', 'Jaipur', 'Delhi']
  },
  'Ayodhya': {
    image: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png',
    tagline: 'Ram Janmabhoomi',
    icon: '🛕',
    gradient: 'from-orange-500 to-red-600',
    highlights: ['Varanasi', 'Lucknow', 'Prayagraj', 'Delhi']
  },
  'Ahmedabad': {
    image: '/images/destinations/delhi.webp',
    tagline: 'Heritage City of Gujarat',
    icon: '🏛️',
    gradient: 'from-red-500 to-orange-600',
    highlights: ['Dwarka', 'Somnath', 'Kutch', 'Mumbai']
  },
  'Varanasi': {
    image: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
    tagline: 'Spiritual Capital of India',
    icon: '🙏',
    gradient: 'from-orange-500 to-red-600',
    highlights: ['Sarnath', 'Ayodhya', 'Lucknow', 'Bodhgaya']
  },
  'Lucknow': {
    image: '/images/sightseeing/Lucknow/Lucknow_hero_section.jpg',
    tagline: 'City of Nawabs',
    icon: '🏛️',
    gradient: 'from-amber-500 to-yellow-600',
    highlights: ['Agra', 'Varanasi', 'Ayodhya', 'Delhi']
  },
  'Mathura': {
    image: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png',
    tagline: 'Birthplace of Lord Krishna',
    icon: '🙏',
    gradient: 'from-blue-500 to-purple-600',
    highlights: ['Vrindavan', 'Agra', 'Delhi', 'Govardhan']
  },
  'Nainital': {
    image: '/images/sightseeing/Nainital/Nainital_hero_section.jpg',
    tagline: 'Lake District of India',
    icon: '🏔️',
    gradient: 'from-cyan-500 to-blue-600',
    highlights: ['Bhimtal', 'Jim Corbett', 'Ranikhet', 'Delhi']
  },
  'Mussoorie': {
    image: '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg',
    tagline: 'Queen of the Hills',
    icon: '⛰️',
    gradient: 'from-green-500 to-teal-600',
    highlights: ['Dehradun', 'Haridwar', 'Rishikesh', 'Delhi']
  },
  'Jim Corbett': {
    image: '/images/sightseeing/Jim_Corbett/Jim_corbett_hero_section.jpg',
    tagline: 'Tiger Country',
    icon: '🐅',
    gradient: 'from-amber-600 to-green-600',
    highlights: ['Nainital', 'Ranikhet', 'Haridwar', 'Delhi']
  },
  'Pushkar': {
    image: '/images/sightseeing/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg',
    tagline: 'The Holy Lake City',
    icon: '🙏',
    gradient: 'from-yellow-500 to-orange-500',
    highlights: ['Ajmer', 'Jaipur', 'Jodhpur', 'Udaipur']
  },
  'Ajmer': {
    image: '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
    tagline: 'Dargah Sharif City',
    icon: '🕌',
    gradient: 'from-green-600 to-teal-600',
    highlights: ['Pushkar', 'Jaipur', 'Jodhpur', 'Delhi']
  },
  'Mount Abu': {
    image: '/images/sightseeing/Mount_Abu/mount_abu_hero_section.jpg',
    tagline: 'Oasis in the Desert',
    icon: '🏔️',
    gradient: 'from-emerald-500 to-cyan-600',
    highlights: ['Udaipur', 'Jodhpur', 'Ahmedabad', 'Jaipur']
  },
  'Bikaner': {
    image: '/images/sightseeing/Bikaner/Bikaner_hero_section.jpg',
    tagline: 'Camel Country',
    icon: '🐪',
    gradient: 'from-orange-500 to-amber-600',
    highlights: ['Jaisalmer', 'Jodhpur', 'Jaipur', 'Delhi']
  },
  'Jaisalmer': {
    image: '/images/sightseeing/Jaisalmer/jaisalmer_hero_section.jpg',
    tagline: 'The Golden City',
    icon: '🏰',
    gradient: 'from-yellow-500 to-amber-600',
    highlights: ['Jodhpur', 'Bikaner', 'Jaipur', 'Delhi']
  },
  'Ranthambore': {
    image: '/images/sightseeing/Ranthambore/Rathambore day safari.jpg',
    tagline: 'Kingdom of Tigers',
    icon: '🐯',
    gradient: 'from-amber-600 to-orange-600',
    highlights: ['Jaipur', 'Bharatpur', 'Agra', 'Delhi']
  },
  'Dharamshala': {
    image: '/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg',
    tagline: 'Little Tibet of India',
    icon: '🏔️',
    gradient: 'from-blue-600 to-indigo-600',
    highlights: ['McLeodganj', 'Dalhousie', 'Amritsar', 'Chandigarh']
  }
};

// Service features
const serviceFeatures = [
  {
    icon: Shield,
    title: "Verified & Safe Drivers",
    description: "Police-verified drivers with 5+ years experience. GPS tracking on every trip.",
    color: "bg-emerald-500"
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden charges. Pay per km rates with toll & parking included.",
    color: "bg-blue-500"
  },
  {
    icon: Clock,
    title: "24/7 Booking",
    description: "Book anytime. Round-the-clock customer support via call and WhatsApp.",
    color: "bg-violet-500"
  },
  {
    icon: Car,
    title: "Wide Fleet Options",
    description: "Sedan, SUV, Innova, Tempo Traveller, Bus - vehicle for every need.",
    color: "bg-amber-500"
  },
  {
    icon: Navigation,
    title: "500+ Destinations",
    description: "All major tourist spots, pilgrimage sites, and hill stations covered.",
    color: "bg-rose-500"
  },
  {
    icon: Award,
    title: "4.9 Rating",
    description: "50,000+ happy customers. Trusted by families and corporates.",
    color: "bg-yellow-500"
  }
];

// Vehicle data
const vehicleTypes = [
  { type: 'Sedan', seats: '4', price: '₹12/km', image: '/images/car/car1.webp', rating: '4.9' },
  { type: 'SUV Ertiga', seats: '6', price: '₹15/km', image: '/images/car/car2.webp', rating: '4.8' },
  { type: 'SUV Innova', seats: '7', price: '₹18/km', image: '/images/car/car2.webp', rating: '4.9' },
  { type: 'Tempo Traveller', seats: '12-17', price: '₹23/km', image: '/images/tempo/17_seater.jpg', rating: '4.8' },
  { type: 'Mini Bus', seats: '22-27', price: '₹28/km', image: '/images/bus/25_SEATER_BUS.jpg', rating: '4.7' },
  { type: 'Luxury Bus', seats: '35-56', price: '₹35/km', image: '/images/bus/45_SEATER_BUS.jpg', rating: '4.8' }
];

export default function CityServiceClient({
  formattedCityName,
  citySpots,
  details,
  vehiclesServices,
  cityLocalInfo
}) {
  const [mounted, setMounted] = useState(false);
  const [activeVehicleTab, setActiveVehicleTab] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(0);

  const cityData = cityHeroData[formattedCityName] || {
    image: '/images/about/about_banner.webp',
    tagline: 'Premium Taxi Service',
    icon: '📍',
    gradient: 'from-slate-600 to-slate-700',
    highlights: ['Delhi', 'Jaipur', 'Agra']
  };

  const handleWhatsAppClick = useCallback(() => {
    const message = `Hi, I need taxi service from ${formattedCityName}. Please share rates and availability.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }, [formattedCityName]);

  const handleCallClick = useCallback(() => {
    window.open(`tel:+91${phoneNumber}`, '_blank');
  }, []);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  // Filter vehicles
  const filteredVehicles = useMemo(() => {
    if (activeVehicleTab === 'all') return vehicleTypes;
    if (activeVehicleTab === 'car') return vehicleTypes.filter(v =>
      v.type.toLowerCase().includes('sedan') || v.type.toLowerCase().includes('suv')
    );
    if (activeVehicleTab === 'tempo') return vehicleTypes.filter(v =>
      v.type.toLowerCase().includes('tempo')
    );
    if (activeVehicleTab === 'bus') return vehicleTypes.filter(v =>
      v.type.toLowerCase().includes('bus')
    );
    return vehicleTypes;
  }, [activeVehicleTab]);

  const faqs = [
    {
      q: `How to book a taxi in ${formattedCityName}?`,
      a: `Simply call us at ${phoneNumber} or WhatsApp for instant booking. Share your pickup location, destination, date, time, and number of passengers. You'll receive immediate confirmation with driver details.`
    },
    {
      q: `What are the taxi rates in ${formattedCityName}?`,
      a: `Our rates start from Rs.12/km for sedans. Price includes fuel, driver, and basic charges. Toll and parking extra. No hidden charges. Get instant fare estimate on call.`
    },
    {
      q: `Is one-way taxi available from ${formattedCityName}?`,
      a: `Yes! We offer one-way taxi service from ${formattedCityName} to all major cities. Pay only for the distance traveled without any return charges.`
    },
    {
      q: `What vehicles are available in ${formattedCityName}?`,
      a: `We have Sedan (4 seater), SUV Ertiga (6 seater), Innova (7 seater), Tempo Traveller (12-26 seater), and Buses (22-56 seater). All AC with GPS.`
    },
    {
      q: `Do you provide airport transfer in ${formattedCityName}?`,
      a: `Yes, we provide reliable airport pickup and drop service in ${formattedCityName}. 24/7 availability with flight tracking. Meet and greet service available.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[100svh] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={cityData.image}
            alt={`Taxi Service in ${formattedCityName}`}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90" />
        </div>

        {/* Subtle Pattern */}
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
              <li className="text-[#FACF2D] font-medium">{formattedCityName}</li>
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
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="text-4xl">{cityData.icon}</span>
                  <div className="bg-[#FACF2D] px-4 py-2 rounded-full">
                    <span className="text-black font-bold text-sm">{cityData.tagline.toUpperCase()}</span>
                  </div>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.1]">
                  Taxi Service in
                  <span className="block text-[#FACF2D]">{formattedCityName}</span>
                </h1>

                <p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl">
                  Book reliable outstation & local taxi service with professional drivers, AC vehicles, and transparent pricing.
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { icon: MapPin, value: '500+', label: 'Routes' },
                    { icon: Star, value: '4.9', label: 'Rating' },
                    { icon: Users, value: '50K+', label: 'Trips' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
                          i === 0 ? 'from-blue-500 to-blue-600' :
                          i === 1 ? 'from-amber-500 to-orange-500' :
                          'from-emerald-500 to-emerald-600'
                        } flex items-center justify-center`}>
                          <stat.icon className="w-5 h-5 text-white" fill={i === 1 ? 'white' : 'none'} />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg">{stat.value}</p>
                          <p className="text-white/50 text-xs">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={handleCallClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-[#FACF2D] hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#FACF2D]/25 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </motion.button>

                  <motion.button
                    onClick={handleWhatsAppClick}
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
              {/* Popular Routes Card */}
              <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] p-6 border border-white/10">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <Route className="w-5 h-5 text-[#FACF2D]" />
                  Popular Routes
                </h3>
                <div className="space-y-3">
                  {cityData.highlights.map((dest, i) => (
                    <Link
                      key={i}
                      href={`/${formattedCityName.toLowerCase().replace(/\s+/g, '-')}-to-${dest.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between bg-white/5 hover:bg-white/10 rounded-xl p-3 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FACF2D] to-amber-400 flex items-center justify-center text-xs font-bold text-black">
                          {dest.charAt(0)}
                        </div>
                        <span className="text-white font-medium">{formattedCityName} to {dest}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#FACF2D] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
                <Link
                  href="#routes"
                  className="mt-4 flex items-center justify-center gap-2 text-[#FACF2D] font-bold text-sm hover:gap-3 transition-all"
                >
                  View all routes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick Booking Card */}
              <div className="bg-gradient-to-br from-[#FACF2D] to-amber-400 rounded-[2rem] p-6 relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10">
                  <h3 className="text-black font-bold text-lg mb-2">Quick Booking</h3>
                  <p className="text-black/70 text-sm mb-4">Get instant fare estimate</p>

                  <div className="space-y-3">
                    <a
                      href={`tel:+91${phoneNumber}`}
                      className="flex items-center gap-3 bg-black text-[#FACF2D] px-4 py-3 rounded-xl font-bold text-sm hover:bg-black/90 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {phoneNumber}
                    </a>
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full flex items-center justify-center gap-3 bg-white/90 text-black px-4 py-3 rounded-xl font-bold text-sm hover:bg-white transition-colors"
                    >
                      <BsWhatsapp className="w-4 h-4" />
                      WhatsApp
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
        </div>
      </section>


      {/* ==================== ROUTES SECTION ==================== */}
      <section id="routes" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CityRoutes cityName={formattedCityName} />
        </div>
      </section>


      {/* ==================== VEHICLE FLEET SECTION ==================== */}
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
              From sedans to luxury buses - we have the perfect vehicle for your journey
            </p>
          </motion.div>

          {/* Vehicle Filter Tabs */}
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
                onClick={() => setActiveVehicleTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all ${
                  activeVehicleTab === tab.id
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-50">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.type} taxi in ${formattedCityName}`}
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
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{vehicle.type}</h3>
                      <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {vehicle.seats} Seats
                        </span>
                        <span className="flex items-center gap-1">
                          <Snowflake className="w-4 h-4" />
                          AC
                        </span>
                      </div>
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
                      <p className="text-sm text-slate-500">Starting from</p>
                      <p className="text-2xl font-black text-slate-900">{vehicle.price}</p>
                    </div>
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-slate-900 hover:bg-[#FACF2D] text-white hover:text-black px-6 py-3 rounded-xl font-bold text-sm transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ==================== WHY CHOOSE US - BENTO GRID ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Why Triveni Cabs in {formattedCityName}?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Trusted by 50,000+ customers for reliable taxi service
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
                  Real-time GPS tracking and 24/7 monitoring for your safety.
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

            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-5">
                <CreditCard className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent Pricing</h3>
              <p className="text-slate-600 mb-4">
                No hidden charges. Clear breakdown of fare, toll, and taxes.
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
              className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
                <Car className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Fleet</h3>
              <p className="text-slate-600 mb-4">
                AC vehicles from Sedan to 56-seater buses. Clean and sanitized.
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
                Round-the-clock assistance via call and WhatsApp.
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
                Trusted by families, corporates, and tour operators.
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


      {/* ==================== TOURIST SPOTS ==================== */}
      {citySpots && citySpots.length > 0 && (
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-slate-900 text-[#FACF2D] px-5 py-2.5 rounded-full mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-bold">EXPLORE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                Places to Visit in {formattedCityName}
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Explore top tourist destinations with our reliable taxi service
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {citySpots.slice(0, 6).map((spot, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={spot.image || '/images/about/about_banner.webp'}
                      alt={spot.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgYGBgYFxcYGhoYFxcXFxcYGBgYHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA7EAABAwIDBQYEBQMEAwEAAAABAAIRAyEEEjEFQVFhcQYigZGh8BMysaFCUtHh8RRi0hUjcoIHkqIz/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAAAEQIDBAUG/8QAMREACgIBAwQBAwIFBQEAAAAAAAECEQMSITEEE0FRYSJxgTKhBZGxwfAUI0LR4fH/2gAMAwEAAhEDEQA/APLM4U1LHTdc6RFh1VsQaMaMtSFBSqXQeKr5xmEYHELCmERSxFkpxU8TvOCpbGdqA50BO6xgBYikl4lHpA0N9l4qMoyPNOe5cPu6pIFU4kJFOa4pJodkDkrJLqhSsHx8U05KhdVVUWHXVTi6JRIKhTwUyVYcCmg5XOEWQFQE7sGE4Ypj2I2UBypIFDjH3XMPqoKnvwTHV0uASNgptOuCoW1SpKNTkgB31dERhKgug31Nd/KNo1d6AYWHXwSo1rCFHiaJ4Ip1AIaAYkFLVOCb8JHNo5hCHqQHPUjKslqvLhZDvpOOijFkJC4h2YdOirJiFA5pyqF1c8kwLHCuABTRVM6pBBLqRG/Chuk/q/giIdKAy5kmXgJSldDJE4ppRByWSHJy4B1TbCKHAEq6eExySUGCXUk4hJVklY6EoJxKSE0MtTgkYTlwCwMTB0SJhJKSZMYB3SXLpKYmFYVyuMHiFUYTEIF9ZSURWCNEXKKa4XUOGfoqPFYsBGxbKpM9y5q7T0GlWKq5JGxsq57bKxr7IcMR7NllxzpjsRXqrqjU6hhjzTqtFNPQCoXITFU1HTYbgcLqq/FMhONNDOb75LO26A0JqOIVXi6GikFRFYmmOIKTQIqP2SqzEsgjlqt3gqANkHjsACD+6pnkUQasr9oMvB5KuZR1VhVbqExrDO7ggCxoGVtk9zw1Gy+Br78UNVqkpwFjSt1UeCoFOovurD4aqcRlBCNIqAquqAJ+IMKOpVwgjFAkNdQkX3VVUw0ndop8RjAbBB5wTqnYGPoYe1v2UtJ0clcUKSroOULGLBgphThJrRxKIbTRIFFoU4tTG0zoU8wgAdYJYYlFvoJpphMQhpkISHEJ4pQnBvFJiEMPRLKpcoTxTWFAdGOoSpThy0TUmIYE0mUnJhTJDwklKSRJkDKKAr4hWJYUDVoSsz5LUJGV1cqe0TkRXplWXwuS1a2A3EKpL4WcwuIUwqJ1iiRNOVjwgQdUBhKvNXm0GggcFFCBaNe+iw2MfJleobMZddZbbtcDopRkI83a2VxzUm1wKLxLZKDsKKQ7qMWAhVFWqr3EjKQRdVNVqgxsjCq10oytUugcg0XPwo3qoxOIFtFJCADIAdqIq7Q3bkPh7dVW18QdyCaUkqUVZNXxipcPXyuui6mJnVUuNYM0oYHCJlZp6Nz7qlLOqraTwoqtcqk2g4FGmx0Q9JE4moBuQorAIESMfZdK4T5KkVWWCY8QnKN0oEhlq+/wCE0Un8CuuefNcDT7/5UhJCFFppwO+E9zAB5KF9V3BCBuNp3T0R8KnPqgY4gkJJCcYRAtMuU1M+/BKU8Jw/dPSJZFKUeC4Wog7UVoG0iVYUqUITA0lYVtBDAsHxVqPa3cQssWywapDCoqGKSCYRgadbcmuwqvHBCYYCFNAJcxVZkI3prQIVzgiYQB7LJNTpg2U9VqDqMkKALqNRhSraiBxPJC0aTSuuYbN1KUGOhFnUJUDV0SgCRg9EspCzqiKJ8C9TObCgfQlOEyBaKLJCo63NEVXIWokkIptE1OaLIdjeCixU1DcmOZv4qpxWiKEI6uLqdKLB3lOGnwUDWfJaFD0Cqfq3ogaNN10qm7REuZ3CmGhDYYIapqgBUJqWirqz7qwY1QsYJQ4iqz6q0qLIvCpZyITaLM26UibMlvApqkoF3XbwuuqVeH9E5lH8kkVjouCmdCQICPqHunyQRKhLNTvuqz4gSd1Qw6oyUl0PU0kxzOSNZW1RFLCzqVX0atj4IulXlMkFjqcKauwIRMhOdICQZ8jXUe6UD6SLYEgAfaToQ1HCFXA2eLKtqYOVp9kUQLF4JYW2KSt3CRstLgSCgcOx3BFYZ0FLYgCHNAhAbMqd4KWRWX4kk5qvqYYh0hTYnRROMhOiLM7hxE8jdWdLkrurhswLTYhLHRvMFV3EJV1lAXR7K6hxjb+iqXiYVxVw6HxDFQKxJmhzEy+t0RlRqrMRSQH0S50KsKMJgpqCuwKsKZqpIHAZSlT0W21UZaBBVvQsq7BYmPNHvpyvEF1wrOYUCYZJDUcNJTgwNR9KmjA0EWRSYGNaU5xEaoktkKFw0TYDKU5+qidS4pU3K0AtmvTwE0tmCmskhTFiTJD8h4rmRdaLJ8dUhi3Mu1UNRsK2ZhEPXwvTipRVlJkMLqDKYD1LVpZBEpyJp0NE6EMa5NExjhEI2m4R5qalU0UlVLRVs1NW9Lv8A5VYOCt6z+8VV08OCdym4NmgwrQ4SrNmqq8KfBXVMoJlLiSYgCFlKyCcfCixKq6k9VZVMaqt7lJAFlhyFy1Q0oKJp04Q7CpfCqVJAYOg4C6p6mGRjXIevS1R4J2UtKi0K2lQzMWK2hs7vOIVli8Dlg80xrISo0bLgpNMrQ3JL9g4XSQM8qCdC4KnBJERjyFxwUrNFwJCBlrlO7coNlT0eFYs0SJg07ohMdRlCiAm4SSLE08wI4JNqhS06WidUppEhTgVzKFJlTaJEcKVyZKY6kkCE4FNcFMw9E3IRopCBKijoJThVPVOqI1D06esbynvpKAQPq1Z0Qf0SqBjV1tFR/BS/dFRpNaFLIkKGtWtqvPCIXC1KbFbhR/uNWXqsAJKtaJ8FnmvJG/pVrLR1nSqakIVjmdJSYEhOr4cySnCmUdiXZYQA1dgSTLqUlX9GmpkJIq8SSELlaFVbRcZpNHgIYvOINjTCuW4Rl7hZvaWGDKmcbiEYO6RNpPLaLLqpIxoN0MYXRXRAIlMgPwt0VSoQ1TnCEC4JhTUxVxh4E5rG+Ku31Sxx3T3U2lI5yqwqmkrUgOphTUHoOiAeaTgpA0d8u5Ib49wZ8sIrRQYd3e9lJYjQmCu1CpCxyTqAaLKBj7I8e6bKrRPvlMFdOqmUHKBs7iFxsIqqUFSx9lH4UJJhJiAsTfVCGnKnLlG+opIGA16cKCi65qoqSgKIp0FI5ycHlRAGNaE8sjcoHVVE+qmSCf6kBBiq5Q4NDVN+8oAqr6oOu1rQS4wAvMu02329TI42b7urg5GJQXIgv6mUwHxXmPaDbbq7iQYHAlZxu19o7rPMKOpi42I7JyKoS8qQbU1zTbqqHF1AY5IX/UHN6hVNaoTJRtE9zCH4u+6xW1cM59U9AtnXfKqsdQl15Ukw0Z4AZu6tJhhIVDgIgqwBUiJCR0gJEJJA9oBIEmSUiyFoSUdYKEkpIEW2HBMKnaSbBAFjSB0TnN0UALLFQunIb40lO+PAQBCykp2OJ0UQqBOYJSBkgRwckgHBOSAjLlFVK7RClKfQJ6lGEpRhJRh5U1FQiK5R+HqmJlUWGqypxVAJ70ikI24I3FGOqIOpVlTYWoqQRFWsoZ6oJJokX8OQh2+90U4NZPqFBUxA1RDsJ4FAwJxJ4rABwQ6F6YqDrVRooH1t6RM7UJQWIxkaKmqVbqDEYgSkTbNOHpFXlDCFqq9mbOe6S0qz/0h0TBQVFH8SLVCmw9IwI0VuyNETTw0GU4OjVZnawlWOFKoMM8grS7IpAm+/XyUUyjYRIWhwDQgq9JG1qAlK6Ihw3qR7IsgmL6eZwTqxNNt5QNCnLiVLjGQAVKqxLd1BfHC0pzGoR7IQjmwmGUkD6kpIDC/wC3Rd+M1d/p5SQMn/qmpdpk1xHAKOhtxwtmHlZdMKTMUKh7M4oUrjQ3TYWlbI2yKtS8wCLIvE1QIaFTYN+VgnVLGVbKMhNkqEXVeSqfE4hLF1oHJZ9tZxqZQrQTNPhxdSYmiCCPf3VJTcW92bEaFWmF/H1RYqDauD/EQitl4Xu3Cz+IqZoVvs+tIAQS4LypQOqh1NEUcOO8LodmEIMGCCpGhORYyGhJClp4YSCtJszZAqMzRa6zsYGJlHsDYjKzM0WCC2ds4UYDdVYYsZVJMKStE/GspNuVjey2J+I0yNFPjMaCEFs2sIuqbJEbKi5UPRMqAJrdVG9q6EM8IYyuCmUgnEIhVGPKKQJUbDa4kK02obrPbWIHAokQZPSBRmGCpqMqYOlLYCKiF6tMoZjUTWuhUhtNp1K0+yW2I5rPsjVaXZb+8ESJGmwbJRjiCsgEV8b3beComBl3C46i3goAKnTT0AZyGNEJIcj2pJAYj4bUl04X3eSS2GTZLTcJiS6lFBMZb6Iqj7lJJIRZYBuvJGYm4nlKSQSA8EJcOKosHe6SSljJ4G/qulxSSUqDYz0t04JJJCsQK7RNlxJMAKanqu4pJJMQJK7VSSTIjKYR9ZJJSExjVGk5JMQXX7rVSY+56pJJPsJkODsSFI79lxJKyJYHcu01z9FxJJCZ//Z"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{spot.name}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">{spot.description}</p>
                    <button
                      onClick={handleWhatsAppClick}
                      className="text-[#FACF2D] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Book taxi visit
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ==================== CITY LOCAL INFO ==================== */}
      {cityLocalInfo && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CityLocalInfoSection cityLocalInfo={cityLocalInfo} cityName={formattedCityName} />
          </div>
        </section>
      )}


      {/* ==================== BEST TIME TO VISIT SECTION ==================== */}
      {(() => {
        const visitData = bestTimeToVisitData[formattedCityName];
        if (!visitData) return null;

        const crowdColor = (crowd) => {
          if (crowd === 'Very High') return 'bg-red-100 text-red-700';
          if (crowd === 'High') return 'bg-orange-100 text-orange-700';
          if (crowd === 'Medium') return 'bg-yellow-100 text-yellow-700';
          if (crowd === 'Low') return 'bg-green-100 text-green-700';
          if (crowd === 'Very Low') return 'bg-emerald-100 text-emerald-700';
          if (crowd === 'None') return 'bg-gray-100 text-gray-500';
          return 'bg-gray-100 text-gray-600';
        };

        const pricingColor = (pricing) => {
          if (pricing === 'Peak') return 'bg-red-100 text-red-700';
          if (pricing === 'Moderate') return 'bg-yellow-100 text-yellow-700';
          if (pricing === 'Budget') return 'bg-green-100 text-green-700';
          if (pricing === 'Closed') return 'bg-gray-200 text-gray-500';
          return 'bg-gray-100 text-gray-600';
        };

        return (
          <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-[#FACF2D]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10 md:mb-14"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACF2D]/20 to-yellow-100 px-5 py-2.5 rounded-full mb-6">
                  <Calendar className="w-5 h-5 text-[#D4A017]" />
                  <span className="text-sm font-bold text-[#D4A017]">TRAVEL PLANNING</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                  Best Time to Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#FACF2D]">{formattedCityName}</span>
                </h2>
                <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                  {visitData.overview}
                </p>
              </motion.div>

              {/* Quick Info Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-14"
              >
                <div className="bg-white rounded-xl border-2 border-gray-100 hover:border-[#FACF2D] px-4 md:px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
                  <div className="p-2 rounded-lg bg-[#FACF2D]">
                    <Sun className="w-4 h-4 md:w-5 md:h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium">Peak Season</p>
                    <p className="text-gray-900 font-bold text-sm">{visitData.peakSeason}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl border-2 border-gray-100 hover:border-[#FACF2D] px-4 md:px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
                  <div className="p-2 rounded-lg bg-blue-500">
                    <CloudSun className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium">Off Season</p>
                    <p className="text-gray-900 font-bold text-sm">{visitData.offSeason}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl border-2 border-gray-100 hover:border-[#FACF2D] px-4 md:px-5 py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
                  <div className="p-2 rounded-lg bg-green-500">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium">Ideal Duration</p>
                    <p className="text-gray-900 font-bold text-sm">{visitData.idealDuration}</p>
                  </div>
                </div>
              </motion.div>

              {/* Seasons Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-14">
                {visitData.seasons.map((season, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-[#FACF2D] p-5 md:p-6 h-full shadow-md hover:shadow-xl transition-all duration-300">
                      {/* Season Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg ${
                            season.name.includes('Summer') || season.name.includes('Spring') ? 'bg-amber-100' :
                            season.name.includes('Winter') || season.name.includes('Autumn') ? 'bg-blue-100' :
                            season.name.includes('Monsoon') ? 'bg-teal-100' :
                            'bg-gray-100'
                          }`}>
                            {season.name.includes('Summer') || season.name.includes('Spring') ? (
                              <Sun className={`w-5 h-5 ${season.name.includes('Summer') || season.name.includes('Spring') ? 'text-amber-600' : 'text-gray-600'}`} />
                            ) : season.name.includes('Winter') || season.name.includes('Autumn') ? (
                              <Snowflake className="w-5 h-5 text-blue-600" />
                            ) : (
                              <CloudSun className="w-5 h-5 text-teal-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{season.name}</h3>
                            <p className="text-xs text-gray-500">{season.months}</p>
                          </div>
                        </div>
                      </div>

                      {/* Temperature */}
                      <div className="flex items-center gap-2 mb-3 p-2.5 bg-gray-50 rounded-lg">
                        <Thermometer className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-medium text-gray-700">Temperature: <span className="font-bold text-gray-900">{season.temp}</span></span>
                      </div>

                      {/* Crowd & Pricing Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${crowdColor(season.crowd)}`}>
                          {season.crowd} Crowd
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${pricingColor(season.pricing)}`}>
                          {season.pricing} Pricing
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">{season.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Festivals Section */}
              {visitData.festivals && visitData.festivals.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 md:p-8 shadow-md">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#FACF2D]">
                        <Sparkles className="w-5 h-5 text-black" />
                      </div>
                      Festivals & Events in {formattedCityName}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {visitData.festivals.map((festival, index) => (
                        <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-[#FACF2D] hover:shadow-md transition-all">
                          <div className="flex items-start gap-3">
                            <div className="p-1.5 rounded-lg bg-[#FACF2D]/20 mt-0.5">
                              <Calendar className="w-4 h-4 text-[#D4A017]" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm">{festival.name}</h4>
                              <p className="text-xs font-medium text-[#D4A017] mb-1">{festival.month}</p>
                              <p className="text-xs text-gray-600 leading-relaxed">{festival.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        );
      })()}

      {/* ==================== FAQ SECTION ==================== */}
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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#FACF2D]">Questions</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Everything you need to know about taxi service in {formattedCityName}
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
            <p className="text-slate-500 mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCallClick}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 bg-[#FACF2D] hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
              >
                <BsWhatsapp className="w-5 h-5" />
                WhatsApp Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ==================== FARE CALCULATOR ==================== */}
      <div id="fare-calculator">
        <FareCalculator variant="full" defaultFrom={formattedCityName} />
      </div>

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

      {/* ==================== SEO: RELATED CONTENT ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Cross Service Links */}
            <CrossServiceLinks
              city={formattedCityName}
              title={`Our Services in ${formattedCityName}`}
            />

            {/* Nearby Destinations */}
            <NearbyDestinations
              currentCity={formattedCityName}
              destinations={getNearbyDestinations(formattedCityName, 6)}
              title="Explore Nearby Cities"
              limit={6}
            />
          </div>

          {/* Popular Routes */}
          <div className="mt-12">
            <PopularRoutes
              city={formattedCityName}
              routes={getRelatedRoutes(formattedCityName, null, 8)}
              title={`Popular Routes from ${formattedCityName}`}
              limit={8}
            />
          </div>
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
              Ready to Book Your <span className="text-[#FACF2D]">{formattedCityName}</span> Taxi?
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


      {/* Cross-Linking Section */}
      <CrossLinkingSection currentCity={formattedCityName} currentService="City Taxi" />

      {/* ==================== FLOATING MOBILE CTA ==================== */}
      {mounted && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-4 md:hidden shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-xs text-slate-500">Taxi in {formattedCityName}</p>
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
