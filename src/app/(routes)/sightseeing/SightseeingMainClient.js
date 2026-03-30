'use client';

import { useState, memo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPinIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  SparklesIcon,
  StarIcon,
  UserGroupIcon,
  CalendarIcon,
  ChevronRightIcon,
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import SocialProofStrip from '@/components/shared/SocialProofStrip';

export default function SightseeingMainClient({ data, faqData }) {
  const [favorites, setFavorites] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  // Show all tours (removed filter functionality)
  const filteredTours = data.allTours;

  const toggleFavorite = useCallback((tourId) => {
    setFavorites(prev =>
      prev.includes(tourId)
        ? prev.filter(id => id !== tourId)
        : [...prev, tourId]
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" itemScope itemType="https://schema.org/CollectionPage">
      {/* Hero Section with Parallax */}
      <header>
        <section
          className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden"
        >
          {/* Hero Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sightseeing/Sightseeingpage_hero_section_image.jpg"
              alt="Discover India's Hidden Treasures - Sightseeing Tours"
              fill
              priority
              fetchPriority="high"
              quality={90}
              className="object-cover"
              sizes="100vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/60 to-pink-900/70" />

            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="inline-block mb-4 sm:mb-6"
            >
              <SparklesIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto text-yellow-300" />
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2"
            >
              Discover India&apos;s
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                Hidden Treasures
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto px-2"
            >
              Expertly curated sightseeing tours across India&apos;s most breathtaking destinations
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4"
            >
              <Link href="#tours" className="group w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Explore Tours
                  <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Book via WhatsApp
                </button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto px-2"
            >
              {[
                { number: "20+", label: "Destinations" },
                { number: "5000+", label: "Happy Tourists" },
                { number: "4.8★", label: "Rating" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300">{stat.number}</div>
                  <div className="text-xs sm:text-sm md:text-base text-blue-100 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </section>
      </header>

      <SocialProofStrip />

      {/* Featured Tours Section */}
      {data.featuredTours.length > 0 && (
        <section id="tours" className="py-12 sm:py-16 md:py-20" aria-labelledby="featured-tours-heading">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10 md:mb-12"
            >
              <h2 id="featured-tours-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                Featured Tours
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Our most popular and highly-rated sightseeing experiences
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {data.featuredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  isFavorite={favorites.includes(tour.id)}
                  onToggleFavorite={toggleFavorite}
                  itemVariants={itemVariants}
                  cardHoverVariants={cardHoverVariants}
                  featured={true}
                />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* All Tours Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white" aria-labelledby="all-tours-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 id="all-tours-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2" itemProp="name">
              All Sightseeing Tours
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'} available
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                isFavorite={favorites.includes(tour.id)}
                onToggleFavorite={toggleFavorite}
                itemVariants={itemVariants}
                cardHoverVariants={cardHoverVariants}
              />
            ))}
          </motion.div>

          {filteredTours.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No tours found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Why Choose Our Tours?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: UserGroupIcon,
                title: "Expert Guides",
                description: "Certified local guides with deep cultural knowledge"
              },
              {
                icon: CalendarIcon,
                title: "Flexible Booking",
                description: "Easy online booking with instant confirmation"
              },
              {
                icon: SparklesIcon,
                title: "Premium Experience",
                description: "Comfortable transport and personalized service"
              },
              {
                icon: StarIcon,
                title: "Highly Rated",
                description: "4.8★ average rating from 5000+ tourists"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Beautiful Card Layout */}
      <section className="py-12 sm:py-16 md:py-20 bg-white" id="faq">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Everything you need to know about our sightseeing tours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What destinations do you cover?",
                answer: "We offer tours across 20+ destinations including Delhi, Agra (Taj Mahal), Jaipur, Udaipur, Jodhpur, Varanasi, Mumbai, Goa, and more.",
                icon: MapPinIcon,
                color: "from-blue-500 to-indigo-600"
              },
              {
                question: "Are tour guides included?",
                answer: "Yes! Professional guides fluent in English, Hindi, French, Spanish, German & Chinese are included with every tour.",
                icon: UserGroupIcon,
                color: "from-purple-500 to-pink-600"
              },
              {
                question: "Can I customize my tour?",
                answer: "Absolutely! Choose your monuments, duration, meal preferences & special interests. We create your perfect itinerary.",
                icon: SparklesIcon,
                color: "from-orange-500 to-red-600"
              },
              {
                question: "What&apos;s included in packages?",
                answer: "AC transport, professional driver, tour guide, fuel, parking, tolls & complete itinerary planning. Entrance fees extra.",
                icon: CheckCircleIcon,
                color: "from-green-500 to-emerald-600"
              },
              {
                question: "How long are the tours?",
                answer: "Flexible durations: Half-day (4-5 hrs), Full-day (8-10 hrs), or multi-day packages customized to your schedule.",
                icon: ClockIcon,
                color: "from-cyan-500 to-blue-600"
              },
              {
                question: "What vehicles are available?",
                answer: "Sedan (4 pax), SUV (6 pax), Tempo Traveller (12-16 pax). All AC, well-maintained with experienced drivers.",
                icon: MapPinIcon,
                color: "from-violet-500 to-purple-600"
              },
              {
                question: "How do I book a tour?",
                answer: "Easy! WhatsApp us at +91-7668570551, call directly, or use our website. Instant confirmation guaranteed!",
                icon: CalendarIcon,
                color: "from-pink-500 to-rose-600"
              },
              {
                question: "Family-friendly tours?",
                answer: "Yes! Flexible schedules, comfortable vehicles & child-friendly attractions. We customize pace for families.",
                icon: HeartIcon,
                color: "from-red-500 to-pink-600"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${faq.color}`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${faq.color} mb-4 sm:mb-5`}>
                  <faq.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Question */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {faq.question}
                </h3>

                {/* Answer */}
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="py-10 sm:py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-blue-100 text-sm sm:text-base">
                Our travel experts are available 24/7 to help you plan the perfect tour
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="tel:+917668570551">
                <motion.button
                  
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call Now
                </motion.button>
              </a>
              <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer">
                <motion.button
                  
                  whileTap={{ scale: 0.95 }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section - Beautiful Cards */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              Explore India
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
              Popular Destinations
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 max-w-2xl mx-auto px-4">
              Discover India&apos;s most iconic cities with our expert-guided tours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Delhi",
                slug: "delhi",
                desc: "Capital Heritage",
                tagline: "Red Fort • Qutub Minar • India Gate",
                tours: "8+ Tours",
                gradient: "from-orange-400 via-red-500 to-pink-500",
                image: "/images/sightseeing/Delhi/Delhi_hero_section.jpg"
              },
              {
                name: "Agra",
                slug: "agra",
                desc: "Wonder of the World",
                tagline: "Taj Mahal • Agra Fort • Fatehpur Sikri",
                tours: "6+ Tours",
                gradient: "from-pink-400 via-purple-500 to-indigo-500",
                image: "/images/sightseeing/Agra/Agra_hero_section.jpg"
              },
              {
                name: "Jaipur",
                slug: "jaipur",
                desc: "The Pink City",
                tagline: "Amber Fort • Hawa Mahal • City Palace",
                tours: "7+ Tours",
                gradient: "from-pink-500 via-rose-500 to-red-500",
                image: "/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg"
              },
              {
                name: "Udaipur",
                slug: "udaipur",
                desc: "City of Lakes",
                tagline: "Lake Palace • City Palace • Pichola",
                tours: "5+ Tours",
                gradient: "from-blue-400 via-cyan-500 to-teal-500",
                image: "/images/sightseeing/Udaipur/Udaipur_hero_section.jpg"
              },
              {
                name: "Varanasi",
                slug: "varanasi",
                desc: "Spiritual Capital",
                tagline: "Ghats • Temples • Ganga Aarti",
                tours: "4+ Tours",
                gradient: "from-orange-500 via-amber-500 to-yellow-500",
                image: "/images/sightseeing/Varanasi/varanasi_hero_section.jpg"
              },
              {
                name: "Jodhpur",
                slug: "jodhpur",
                desc: "The Blue City",
                tagline: "Mehrangarh • Jaswant Thada • Blue Streets",
                tours: "4+ Tours",
                gradient: "from-blue-500 via-indigo-500 to-violet-500",
                image: "/images/sightseeing/Jodhpur/Mehrangarh Fort.jpg"
              }
            ].map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/sightseeing/${city.slug}`}>
                  <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
                    {/* Background Image or Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${city.gradient}`}>
                      {city.image && (
                        <Image
                          src={city.image}
                          alt={`${city.name} Tours`}
                          fill
                          className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}
                    </div>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Tours Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                        {city.tours}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPinIcon className="w-5 h-5 text-white/80" />
                        <span className="text-white/80 text-sm">{city.desc}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">
                        {city.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                        <span>Explore Tours</span>
                        <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Cities Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12"
          >
            <Link href="/sightseeing">
              <motion.button
                
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                View All Destinations
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqData && (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Everything you need to know about our sightseeing tours
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`bg-slate-50 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'shadow-lg border-l-4 border-indigo-600' : 'hover:bg-slate-100'}`}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <h3 className="font-semibold text-gray-900 pr-8">{faq.question}</h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-indigo-600' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-5 text-gray-600 border-t border-gray-200/50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Book your perfect sightseeing tour today and create memories that last a lifetime
            </p>
            <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto px-4">
              <motion.button
                
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Book Now via WhatsApp
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Tour Card Component - memoized to prevent re-renders when favorites change for other cards
const TourCard = memo(function TourCard({ tour, isFavorite, onToggleFavorite, itemVariants, cardHoverVariants, featured = false }) {
  return (
    <motion.article
      variants={itemVariants}
      initial="rest"
      whileHover="hover"
      className="group relative"
      itemScope
      itemType="https://schema.org/TouristTrip"
    >
      <Link href={`/sightseeing/${tour.slug}`} itemProp="url">
        <motion.div
          variants={cardHoverVariants}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Tour Image */}
          <div className="relative h-64 overflow-hidden bg-gray-200">
            {/* Display actual image if heroImage exists, gradient for others */}
            {tour.heroImage ? (
              <>
                <Image
                  src={tour.heroImage}
                  alt={tour.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  initial={{ scale: 1 }}
                  
                  transition={{ duration: 0.6 }}
                />
              </>
            )}

            {featured && (
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold flex items-center gap-1">
                  <StarIcon className="w-4 h-4" />
                  Featured
                </span>
              </div>
            )}

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h4 className="text-white font-bold text-lg drop-shadow-lg">
                {tour.name}
              </h4>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {tour.name}
              </h3>
            </div>

            <p className="text-gray-600 mb-4 line-clamp-2">
              {tour.shortDescription}
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ClockIcon className="w-4 h-4" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPinIcon className="w-4 h-4" />
                <span>{tour.category}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <div className="flex items-center gap-1 text-2xl font-bold text-indigo-600">
                  <CurrencyRupeeIcon className="w-6 h-6" />
                  {tour.price.sedan?.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">Starting price (Sedan)</div>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </motion.div>
      </Link>

      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite(tour.id);
        }}
        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        {isFavorite ? (
          <HeartIconSolid className="w-6 h-6 text-red-500" />
        ) : (
          <HeartIcon className="w-6 h-6 text-gray-600" />
        )}
      </button>
    </motion.article>
  );
});
