"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { useShouldReduceMotion } from "@/hooks/useIsMobile";

// Dynamically import heavy components WITH SSR enabled for better initial render
const TypeAnimation = dynamic(
  () => import('react-type-animation').then(mod => mod.TypeAnimation),
  {
    ssr: true,
    loading: () => <span className="inline-block min-w-[180px]">Our Passion</span>
  }
);

const Marquee = dynamic(
  () => import('react-fast-marquee'),
  {
    ssr: true,
    loading: () => (
      <div className="flex gap-4 overflow-hidden">
        {['Delhi', 'Agra', 'Jaipur', 'Haridwar', 'Chandigarh', 'Shimla', 'Manali'].map((city) => (
          <div key={city} className="mx-4 bg-white rounded-2xl shadow-lg p-6 min-w-[200px]">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-3"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{city}</h3>
              <p className="text-sm text-gray-600">Cab Service</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
);

// Centralized icon imports for better bundle optimization
import {
  Star,
  Shield,
  Clock,
  Users,
  MapPin,
  Phone,
  Car,
  Award,
  ArrowRight,
  Heart,
  Sparkles,
  Crown,
  ThumbsUp,
  Gauge,
  Bus,
  Plane,
  Camera,
  Map,
  Package,
  Navigation,
  Route,
  CheckCircle2,
  Zap
} from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { phoneNumber } from "@/utilis/data";

// Static service section data
const serviceSections = [
  {
    id: 'wedding',
    bgClass: 'bg-gradient-to-b from-white via-pink-50/30 to-rose-50/30',
    decorClass1: 'bg-pink-300/20',
    decorClass2: 'bg-rose-300/20',
    badge: { icon: Heart, text: 'Make Your Day Memorable', bgClass: 'from-yellow-100 to-amber-100 text-amber-800' },
    title: 'Royal Wedding Car Rental Services',
    description: 'Luxury wedding cars and tempo travellers for your special day. From BMW, Audi, Mercedes to vintage cars - make your wedding entrance unforgettable!',
    features: [
      { icon: Car, title: "Luxury Cars", desc: "BMW, Audi, Mercedes" },
      { icon: Heart, title: "Car Decoration", desc: "Beautiful floral decor" },
      { icon: Users, title: "Baraat Service", desc: "Tempo traveller 9-26" },
      { icon: Crown, title: "Professional", desc: "Chauffeur driven" }
    ],
    image: '/images/wedding_section.jpg',
    imageIcon: Heart,
    imageTitle: 'Wedding Services',
    imageSubtitle: 'Make Your Day Special',
    stats: [
      { value: 'BMW', label: 'Luxury Cars' },
      { value: 'Audi', label: 'Premium' },
      { value: 'Benz', label: 'Royal' }
    ],
    cta: { href: '/wedding', text: 'Explore Wedding Car Rentals' },
    serviceName: 'Wedding Car Service',
    isReversed: false
  },
  {
    id: 'airport',
    bgClass: 'bg-gradient-to-b from-blue-50/30 via-sky-50/30 to-white',
    decorClass1: 'bg-blue-300/20',
    decorClass2: 'bg-sky-300/20',
    badge: { icon: Clock, text: '24/7 Airport Transfer', bgClass: 'from-yellow-100 to-amber-100 text-amber-800' },
    title: 'Reliable Airport Transfer Services',
    description: 'Professional airport pickup and drop services across all major airports. On-time, comfortable, and hassle-free transfers for your journey.',
    features: [
      { icon: Clock, title: "24/7 Available", desc: "Round the clock service" },
      { icon: Shield, title: "Safe & Secure", desc: "Verified drivers" },
      { icon: Phone, title: "Live Tracking", desc: "Real-time updates" },
      { icon: Car, title: "All Airports", desc: "50+ airports covered" }
    ],
    image: '/images/airport_section.jpg',
    imageIcon: Plane,
    imageTitle: 'Airport Transfers',
    imageSubtitle: 'Professional & Punctual',
    stats: [
      { value: '50+', label: 'Airports' },
      { value: '24/7', label: 'Service' },
      { value: '5000+', label: 'Transfers' }
    ],
    cta: { href: '/airport-service', text: 'Book Airport Taxi Now' },
    serviceName: 'Airport Transfer',
    isReversed: true
  },
  {
    id: 'bus',
    bgClass: 'bg-gradient-to-b from-white via-green-50/30 to-emerald-50/30',
    decorClass1: 'bg-green-300/20',
    decorClass2: 'bg-emerald-300/20',
    badge: { icon: Bus, text: 'Luxury Bus Rentals', bgClass: 'from-green-100 to-emerald-100 text-green-800' },
    title: 'Premium Bus Routes for Groups',
    description: 'Luxury buses for large groups (22-56 seater). Perfect for corporate events, family trips, and group tours. Volvo & AC buses with entertainment systems.',
    features: [
      { icon: Bus, title: "Volvo & AC", desc: "Premium buses" },
      { icon: Users, title: "22-56 Seater", desc: "Group capacity" },
      { icon: Star, title: "Entertainment", desc: "Music system" },
      { icon: Navigation, title: "GPS Tracking", desc: "Live location" }
    ],
    image: '/images/bus/hero_section_image.png',
    imageIcon: Bus,
    imageTitle: 'Bus Routes',
    imageSubtitle: 'Luxury Group Travel',
    imageGradient: 'from-green-400 via-emerald-400 to-teal-400',
    stats: [
      { value: '22-56', label: 'Seater' },
      { value: 'Volvo', label: 'AC Buses' },
      { value: 'GPS', label: 'Tracking' }
    ],
    cta: { href: '/bus-routes', text: 'Book Luxury Bus Now' },
    serviceName: 'Bus Rental',
    isReversed: false
  },
  {
    id: 'outstation',
    bgClass: 'bg-gradient-to-b from-purple-50/30 via-violet-50/30 to-white',
    decorClass1: 'bg-purple-300/20',
    decorClass2: 'bg-violet-300/20',
    badge: { icon: Route, text: '500+ Destinations', bgClass: 'from-purple-100 to-violet-100 text-purple-800' },
    title: 'Outstation Taxi Routes Across India',
    description: 'Book outstation cabs to 500+ destinations across India. Delhi to Agra, Jaipur, Shimla, Manali & more. One-way & round trips with transparent pricing.',
    features: [
      { icon: Map, title: "500+ Routes", desc: "All destinations" },
      { icon: Car, title: "One-way Trips", desc: "Flexible booking" },
      { icon: Shield, title: "GPS Tracking", desc: "Safe journey" },
      { icon: Award, title: "Best Rates", desc: "Transparent pricing" }
    ],
    image: '/images/citypage_hero_section_image.jpg',
    imageIcon: Map,
    imageTitle: 'Outstation Routes',
    imageSubtitle: '500+ Destinations',
    imageGradient: 'from-purple-400 via-violet-400 to-indigo-400',
    stats: [
      { value: '500+', label: 'Routes' },
      { value: '24/7', label: 'Booking' },
      { value: 'GPS', label: 'Tracking' }
    ],
    cta: { href: '/routes', text: 'Explore 500+ Routes' },
    serviceName: 'Outstation Cab',
    isReversed: true
  },
  {
    id: 'tours',
    bgClass: 'bg-gradient-to-b from-white via-orange-50/30 to-amber-50/30',
    decorClass1: 'bg-orange-300/20',
    decorClass2: 'bg-amber-300/20',
    badge: { icon: Package, text: 'Curated Experiences', bgClass: 'from-orange-100 to-amber-100 text-orange-800' },
    title: 'Tour Packages Across India',
    description: 'Curated travel experiences across North India. Golden Triangle tours, hill stations, pilgrimage tours & custom itineraries. Complete travel solutions.',
    features: [
      { icon: MapPin, title: "Golden Triangle", desc: "Delhi-Agra-Jaipur" },
      { icon: Package, title: "Hill Stations", desc: "Shimla, Manali" },
      { icon: Heart, title: "Pilgrimage", desc: "Spiritual tours" },
      { icon: Star, title: "Custom Tours", desc: "Your itinerary" }
    ],
    image: '/images/sightseeing/Sightseeingpage_hero_section_image.jpg',
    imageIcon: Package,
    imageTitle: 'Tour Packages',
    imageSubtitle: 'Curated Experiences',
    imageGradient: 'from-orange-400 via-amber-400 to-yellow-400',
    stats: [
      { value: '50+', label: 'Packages' },
      { value: 'Golden', label: 'Triangle' },
      { value: 'Custom', label: 'Tours' }
    ],
    cta: { href: '/services', text: 'Explore Tour Packages' },
    serviceName: 'Tour Package',
    isReversed: false
  },
  {
    id: 'tempo',
    bgClass: 'bg-gradient-to-b from-indigo-50/30 via-blue-50/30 to-white',
    decorClass1: 'bg-indigo-300/20',
    decorClass2: 'bg-blue-300/20',
    badge: { icon: Users, text: 'Group Travel Solutions', bgClass: 'from-blue-100 to-indigo-100 text-blue-800' },
    title: 'Tempo Traveller Rentals',
    description: 'Perfect for group travel (12-26 seater). AC vehicles with pushback seats. Ideal for family trips, corporate tours, and group outings.',
    features: [
      { icon: Users, title: "12-26 Seater", desc: "Group capacity" },
      { icon: Car, title: "AC Vehicles", desc: "Comfortable ride" },
      { icon: Heart, title: "Family Friendly", desc: "Spacious interiors" },
      { icon: Award, title: "Corporate Tours", desc: "Professional service" }
    ],
    image: '/images/tempo_section.jpg',
    imageIcon: Users,
    imageTitle: 'Tempo Traveller',
    imageSubtitle: 'Group Travel Made Easy',
    imageGradient: 'from-blue-400 via-indigo-400 to-violet-400',
    stats: [
      { value: '12-26', label: 'Seater' },
      { value: 'AC', label: 'Comfort' },
      { value: 'GPS', label: 'Tracking' }
    ],
    cta: { href: '/tempo-traveller', text: 'Book Tempo Traveller' },
    serviceName: 'Tempo Traveller',
    isReversed: true
  },
  {
    id: 'guide',
    bgClass: 'bg-gradient-to-b from-white via-teal-50/30 to-cyan-50/30',
    decorClass1: 'bg-teal-300/20',
    decorClass2: 'bg-cyan-300/20',
    badge: { icon: Camera, text: 'Expert Local Guides', bgClass: 'from-teal-100 to-cyan-100 text-teal-800' },
    title: 'Professional Tour Guide Services',
    description: 'Expert guides in 14+ cities, 6 languages. Certified guides, multi-language support, cultural insights & personalized tours. Make your journey memorable!',
    features: [
      { icon: Award, title: "Certified Guides", desc: "Licensed professionals" },
      { icon: MapPin, title: "14+ Cities", desc: "Pan India coverage" },
      { icon: Camera, title: "Cultural Insights", desc: "Local expertise" },
      { icon: Star, title: "6 Languages", desc: "Multi-lingual" }
    ],
    image: '/images/tour-guide.jpg',
    imageIcon: Camera,
    imageTitle: 'Tour Guides',
    imageSubtitle: 'Expert Local Guides',
    imageGradient: 'from-teal-400 via-cyan-400 to-blue-400',
    stats: [
      { value: '14+', label: 'Cities' },
      { value: '6', label: 'Languages' },
      { value: '100+', label: 'Guides' }
    ],
    cta: { href: '/tour-guide', text: 'Hire Expert Tour Guide' },
    serviceName: 'Tour Guide',
    isReversed: false
  }
];

// Service Section Component
function ServiceSection({ section, shouldReduceMotion, handleBookNowClick }) {
  const ImageIcon = section.imageIcon;
  const BadgeIcon = section.badge.icon;
  const gradient = section.imageGradient || 'from-amber-400 via-[#FACF2D] to-orange-400';

  const ImageCard = (
    <div className="relative">
      <div className="relative">
        {!shouldReduceMotion && (
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, section.isReversed ? 5 : -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -top-10 ${section.isReversed ? '-right-10' : '-left-10'} w-72 h-72 bg-gradient-to-br from-yellow-200/40 to-amber-200/40 rounded-full blur-3xl`}
          />
        )}
        {shouldReduceMotion && (
          <div className={`absolute -top-10 ${section.isReversed ? '-right-10' : '-left-10'} w-72 h-72 bg-gradient-to-br from-yellow-200/40 to-amber-200/40 rounded-full blur-3xl`} />
        )}

        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-100 hover:shadow-3xl hover:border-amber-300 cursor-pointer"
        >
          <div className={`aspect-video bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity duration-300 hover:opacity-60"
              style={{ backgroundImage: `url('${section.image}')` }}
            ></div>
            <div className="relative text-center p-4 md:p-6">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                <ImageIcon className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)' }}>{section.imageTitle}</h3>
              <p className="text-sm md:text-base text-white font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>{section.imageSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            {section.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-3 bg-amber-50 rounded-xl">
                <div className="text-2xl font-bold text-amber-600">{stat.value}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );

  const ContentCard = (
    <div>
      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${section.badge.bgClass} px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6 shadow-sm`}>
        <BadgeIcon className="w-4 h-4 md:w-5 md:h-5" />
        <span className="font-semibold text-sm md:text-base">{section.badge.text}</span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
        {section.title}
      </h2>

      <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
        {section.description}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {section.features.map((item, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-lg flex items-center justify-center">
              <item.icon className="w-5 h-5 text-gray-800" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <nav className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <Link href={section.cta.href} className="w-full sm:w-auto">
          <span className="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-sm md:text-base rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
            {section.cta.text}
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </span>
        </Link>
        <button
          onClick={() => handleBookNowClick(section.serviceName)}
          className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-amber-300 text-gray-800 font-bold text-sm md:text-base rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4 md:w-5 md:h-5" />
          Get Free Quote
        </button>
      </nav>
    </div>
  );

  return (
    <section className={`py-20 ${section.bgClass} relative overflow-hidden`}>
      <div className={`absolute top-10 ${section.isReversed ? 'left-10' : 'right-10'} w-32 h-32 ${section.decorClass1} rounded-full blur-3xl`}></div>
      <div className={`absolute bottom-10 ${section.isReversed ? 'right-10' : 'left-10'} w-40 h-40 ${section.decorClass2} rounded-full blur-3xl`}></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {section.isReversed ? (
            <>
              <div className="order-2 lg:order-1">{ContentCard}</div>
              <div className="order-1 lg:order-2">{ImageCard}</div>
            </>
          ) : (
            <>
              {ImageCard}
              {ContentCard}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function HomeClient() {
  const shouldReduceMotion = useShouldReduceMotion();

  const handleBookNowClick = useCallback((serviceName = '') => {
    const message = serviceName
      ? encodeURIComponent(`Hi! I am interested in your ${serviceName} service. Can you provide more details?`)
      : encodeURIComponent("Hi! I am interested in booking a taxi service. Can you help me with the details?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-2 pb-8 md:pt-0 md:pb-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/HERO_SECTION_MAIN_PAGE.jpg"
            alt="Triveni Cabs - Premium Taxi Service in India"
            fill
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
            className="object-cover object-center brightness-110 contrast-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 via-transparent to-transparent"></div>
        </div>

        {/* Animated Orbs - CSS animations for better performance */}
        <div className="absolute top-20 left-5 md:left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-yellow-400/60 to-amber-500/60 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-40 right-5 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-orange-400/50 to-pink-400/50 rounded-full blur-3xl animate-float-medium" />
        {!shouldReduceMotion && (
          <div className="absolute bottom-40 left-1/2 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-full blur-3xl animate-float-fast" />
        )}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center -mt-[88px] md:-mt-20">
          {/* Top Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mb-4 md:mb-3"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#FACF2D] to-amber-400 rounded-full px-4 py-2 md:px-8 md:py-3 shadow-lg">
              <Crown className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
              <span className="text-gray-800 font-bold text-xs md:text-base tracking-wide">INDIA&apos;S #1 TRAVEL PARTNER</span>
              <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
            </div>
          </motion.div>

          {/* Main Headline with Typing Effect */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 md:mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-3 md:mb-4 leading-tight tracking-tight drop-shadow-2xl px-2">
              <span className="block text-white drop-shadow-lg">
                Your Journey,
              </span>
              <span
                className="block bg-gradient-to-r from-yellow-300 via-[#FACF2D] to-orange-400 bg-clip-text text-transparent drop-shadow-2xl"
                style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.3)' }}
              >
                <TypeAnimation
                  sequence={[
                    'Our Passion',
                    2500,
                    'Our Priority',
                    2500,
                    'Our Promise',
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 max-w-4xl mx-auto leading-relaxed font-semibold drop-shadow-lg bg-black/20 backdrop-blur-sm px-3 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl border border-white/20"
          >
            <span className="hidden sm:inline">Wedding Cars | Airport Transfers | Tour Packages | Tempo Traveller | Expert Guides | 500+ Destinations</span>
            <span className="sm:hidden">Weddings | Airports | Tours | Tempo | Guides | 500+ Destinations</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBookNowClick()}
              className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-sm md:text-base rounded-full shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                Book Your Ride Now
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 animate-bounce-x" />
              </span>
            </motion.button>

            <Link href={`tel:${phoneNumber}`} className="w-full sm:w-auto">
              <motion.span
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white border-2 md:border-3 border-amber-300 text-gray-800 font-bold text-sm md:text-base rounded-full shadow-lg flex items-center justify-center gap-2 md:gap-3 hover:bg-amber-50 hover:border-amber-400 transition-all"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                <span className="truncate">Call Now: {phoneNumber}</span>
              </motion.span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto px-4"
          >
            {[
              { icon: Shield, text: "100% Verified", gradient: "from-[#FACF2D] to-amber-500" },
              { icon: Gauge, text: "Instant Booking", gradient: "from-amber-400 to-orange-500" },
              { icon: ThumbsUp, text: "10K+ Reviews", gradient: "from-orange-400 to-amber-600" },
              { icon: Award, text: "Best Rated", gradient: "from-yellow-400 to-amber-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.6 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="relative group cursor-pointer"
              >
                <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl md:rounded-2xl p-2 md:p-3 hover:border-amber-300 hover:shadow-xl transition-all shadow-md">
                  <div className={`inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${item.gradient} rounded-lg md:rounded-xl mb-1 md:mb-2 shadow-md`}>
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                  </div>
                  <p className="text-gray-800 font-bold text-xs md:text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {!shouldReduceMotion && (
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-gray-800 text-sm font-semibold">Scroll Down</span>
              <div className="w-8 h-14 border-3 border-amber-400 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-4 bg-amber-600 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* SERVICE SECTIONS */}
      {serviceSections.map((section) => (
        <ServiceSection
          key={section.id}
          section={section}
          shouldReduceMotion={shouldReduceMotion}
          handleBookNowClick={handleBookNowClick}
        />
      ))}

      {/* CITIES WE SERVE SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full mb-6 shadow-sm"
            >
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">We Are Available Across India</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Serving 14+ Premium Cities
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4"
            >
              From bustling metros to serene hill stations, we provide reliable taxi services across major cities in North India
            </motion.p>
          </div>

          {/* Cities Marquee */}
          <div className="mb-8">
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
              {['Delhi', 'Agra', 'Jaipur', 'Haridwar', 'Chandigarh', 'Shimla', 'Manali'].map((city, index) => (
                <Link href={`/${city.toLowerCase()}`} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="mx-2 md:mx-4 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 border-2 border-transparent hover:border-blue-400 min-w-[160px] md:min-w-[200px] cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-2 md:mb-3 shadow-lg">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{city}</h3>
                      <p className="text-xs md:text-sm text-gray-600">Cab Service</p>
                      <div className="mt-1 md:mt-2 flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs font-semibold">Available</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </Marquee>
          </div>

          {/* Second Row - Reverse Direction */}
          <div className="mb-12">
            <Marquee gradient={false} speed={40} direction="right" pauseOnHover={true}>
              {['Amritsar', 'Dehradun', 'Rishikesh', 'Jodhpur', 'Udaipur', 'Ayodhya', 'Ahmedabad'].map((city, index) => (
                <Link href={`/${city.toLowerCase()}`} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="mx-2 md:mx-4 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 border-2 border-transparent hover:border-purple-400 min-w-[160px] md:min-w-[200px] cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-2 md:mb-3 shadow-lg">
                        <Car className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{city}</h3>
                      <p className="text-xs md:text-sm text-gray-600">Taxi Service</p>
                      <div className="mt-1 md:mt-2 flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs font-semibold">Available</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </Marquee>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: MapPin, number: "14+", label: "Cities Covered", color: "from-blue-500 to-cyan-500" },
              { icon: Route, number: "500+", label: "Routes Available", color: "from-purple-500 to-pink-500" },
              { icon: Users, number: "10K+", label: "Happy Customers", color: "from-green-500 to-emerald-500" },
              { icon: Zap, number: "24/7", label: "Service Available", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg text-center border-2 border-gray-100 hover:border-gray-200 transition-all"
              >
                <div className={`w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg`}>
                  <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <article className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-amber-200">
            <header className="text-center mb-6 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold text-sm md:text-base">Complete Travel Solutions - Instant Booking</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent px-4">
                Book Your Travel Service Today
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
                Join 10,000+ happy customers. Book wedding cars, airport transfers, tempo travellers, luxury buses, tour packages & expert guides. Professional service with 24/7 support across India.
              </p>
            </header>

            <nav className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-6 md:mb-8">
              <button
                onClick={() => handleBookNowClick()}
                className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-base md:text-lg rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 md:gap-3 group"
              >
                Get Free Quote Now
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link href={`tel:${phoneNumber}`}>
                <span className="px-8 md:px-10 py-4 md:py-5 bg-white border-2 md:border-3 border-amber-300 text-gray-800 font-bold text-base md:text-lg rounded-full hover:bg-amber-50 hover:border-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 md:gap-3">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="truncate">Call Now: {phoneNumber}</span>
                </span>
              </Link>
            </nav>

            <footer className="text-center px-4">
              <p className="text-sm md:text-base text-gray-600 font-semibold flex items-center justify-center gap-2 flex-wrap">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                <span>Wedding Cars | Airport Transfers | Tempo Traveller | Buses | Tour Packages | Guides</span>
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">
                Trusted by 10,000+ customers | Available 24/7 | Instant Booking Confirmation
              </p>
            </footer>
          </article>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Triveni Cabs — India&apos;s Trusted Taxi Service for Outstation, Airport & Wedding Travel
          </h2>
          <div className="space-y-4 text-gray-700 text-base leading-relaxed">
            <p>
              Triveni Cabs is a leading cab service provider in India, offering reliable and affordable taxi
              services across 500+ destinations. Whether you need an{' '}
              <Link href="/airport-service" className="text-blue-600 hover:underline font-medium">airport transfer</Link>,
              an outstation cab for a weekend getaway, a{' '}
              <Link href="/tempo-traveller" className="text-blue-600 hover:underline font-medium">tempo traveller for group travel</Link>,
              or a <Link href="/wedding" className="text-blue-600 hover:underline font-medium">luxury wedding car rental</Link> —
              we have the right vehicle and the right price for every journey.
            </p>
            <p>
              Our fleet includes AC sedans (Swift Dzire, Toyota Etios) starting at just{' '}
              <Link href="/pricing" className="text-blue-600 hover:underline font-medium">₹11 per kilometre</Link>,
              SUVs (Innova, Innova Crysta, Fortuner) from ₹15/km, 12–26 seater tempo travellers from ₹23/km,
              and 22–56 seater AC buses for large events and corporate travel. All vehicles come with
              professional, verified drivers, GPS tracking, and 24/7 customer support.
            </p>
            <p>
              We serve major cities including Delhi, Agra, Jaipur, Chandigarh, Shimla, Manali, Rishikesh,
              Varanasi, Udaipur, and Jodhpur with popular routes like Delhi to Agra, Delhi to Manali,
              Delhi to Jaipur, and the Golden Triangle circuit. Our{' '}
              <Link href="/sightseeing" className="text-blue-600 hover:underline font-medium">sightseeing tour packages</Link> include
              guided visits to the Taj Mahal, Amber Fort, Varanasi Ghats, and 100+ heritage sites.
            </p>
            <p>
              For weddings, we offer luxury car rentals including BMW, Audi, Mercedes-Benz, and Range Rover
              with professional chauffeurs and full car decoration. Our{' '}
              <Link href="/corporate-transportation-service" className="text-blue-600 hover:underline font-medium">corporate transportation service</Link> handles
              employee commutes, client pickups, and offsite events for businesses across India.
            </p>
            <p>
              With 2800+ happy customers, a 4.8-star rating, and transparent pricing with no hidden charges,
              Triveni Cabs is the preferred choice for families, solo travellers, corporate clients, and tour
              operators. <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact us</Link> or{' '}
              <Link href="/blog" className="text-blue-600 hover:underline font-medium">read our travel blog</Link> for
              destination guides and trip planning tips.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
