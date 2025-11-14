'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MapPinIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  SparklesIcon,
  StarIcon,
  UserGroupIcon,
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ShareIcon,
  BookmarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowLeftIcon,
  LightBulbIcon,
  GlobeAltIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid, BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';

export default function SightseeingDetailClient({ tour }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'inclusions', label: 'What\'s Included' },
    { id: 'tips', label: 'Travel Tips' }
  ];

  const shareUrl = () => {
    if (navigator.share) {
      navigator.share({
        title: tour.name,
        text: tour.shortDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleBooking = () => {
    const message = `Hello! I'm interested in booking the ${tour.name} tour. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with Parallax */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] flex items-end overflow-hidden"
      >
        {/* Hero Background */}
        <div className="absolute inset-0">
          {/* Use real image for Jaipur tour, gradient for others */}
          {tour.slug === 'jaipur-full-day-city-tour' ? (
            <>
              <Image
                src="/images/sightseeing/jaipur_hero_section_image.jpg"
                alt={tour.name}
                fill
                priority
                quality={90}
                className="object-cover"
                sizes="100vw"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/60 to-pink-900/70" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </>
          )}
        </div>

        {/* Back Button */}
        <Link href="/sightseeing" className="absolute top-6 left-6 z-20">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Tours
          </motion.button>
        </Link>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 z-20 flex gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={shareUrl}
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <ShareIcon className="w-5 h-5 text-gray-900" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            {isBookmarked ? (
              <BookmarkIconSolid className="w-5 h-5 text-indigo-600" />
            ) : (
              <BookmarkIcon className="w-5 h-5 text-gray-900" />
            )}
          </motion.button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full bg-gradient-to-t from-black/60 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="px-3 sm:px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold">
                  {tour.category}
                </span>
                {tour.difficulty && (
                  <span className="px-3 sm:px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold">
                    {tour.difficulty}
                  </span>
                )}
                {tour.reviews && (
                  <div className="flex items-center gap-1 px-3 sm:px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs sm:text-sm font-semibold">
                    <StarIconSolid className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                    {tour.reviews.averageRating} ({tour.reviews.totalReviews})
                  </div>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                {tour.name}
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl">
                {tour.shortDescription}
              </p>

              <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 md:gap-6">
                <div className="flex items-center gap-2 text-white">
                  <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold text-sm sm:text-base">{tour.duration}</span>
                </div>
                {tour.groupSize && (
                  <div className="flex items-center gap-2 text-white">
                    <UserGroupIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="font-semibold text-sm sm:text-base">{tour.groupSize}</span>
                  </div>
                )}
                {tour.languages && (
                  <div className="flex items-center gap-2 text-white">
                    <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="font-semibold text-sm sm:text-base">{tour.languages.slice(0, 2).join(', ')}{tour.languages.length > 2 && '...'}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sticky Booking Bar */}
      <div className="sticky top-0 z-40 bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start overflow-x-auto">
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-bold text-indigo-600">
                  <CurrencyRupeeIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                  {tour.price.sedan?.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">Sedan</div>
              </div>
              <div className="border-l pl-3 sm:pl-4 text-center sm:text-left">
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-bold text-purple-600">
                  <CurrencyRupeeIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                  {tour.price.suv?.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">SUV</div>
              </div>
              <div className="border-l pl-3 sm:pl-4 text-center sm:text-left">
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-bold text-green-600">
                  <CurrencyRupeeIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                  {tour.price.tempoTraveller?.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">Tempo</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <a href="tel:+917668570551" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Now
                </motion.button>
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBooking}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Book via WhatsApp
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-[73px] z-30 bg-white/90 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {/* Description */}
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">About This Tour</h2>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {tour.fullDescription}
                    </p>
                  </div>

                  {/* Highlights */}
                  {tour.highlights && (
                    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Tour Highlights</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tour.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl"
                          >
                            <SparklesIcon className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-800 font-medium">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Photo Gallery - Only for Jaipur tour */}
                  {tour.slug === 'jaipur-full-day-city-tour' && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Gallery</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Amber Fort */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                        >
                          <Image
                            src="/images/sightseeing/amber_fort.jpg"
                            alt="Amber Fort - Jaipur"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-lg drop-shadow-lg">Amber Fort</h3>
                            <p className="text-white/90 text-sm drop-shadow">Majestic hilltop fortress</p>
                          </div>
                        </motion.div>

                        {/* City Palace */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          whileHover={{ scale: 1.02 }}
                          className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                        >
                          <Image
                            src="/images/sightseeing/city_palace.jpg"
                            alt="City Palace - Jaipur"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-lg drop-shadow-lg">City Palace</h3>
                            <p className="text-white/90 text-sm drop-shadow">Royal residence with museums</p>
                          </div>
                        </motion.div>

                        {/* Jantar Mantar */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          whileHover={{ scale: 1.02 }}
                          className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                        >
                          <Image
                            src="/images/sightseeing/jantar_mantar.jpg"
                            alt="Jantar Mantar - Jaipur"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-lg drop-shadow-lg">Jantar Mantar</h3>
                            <p className="text-white/90 text-sm drop-shadow">Ancient astronomical observatory</p>
                          </div>
                        </motion.div>

                        {/* Johari Bazaar */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 }}
                          whileHover={{ scale: 1.02 }}
                          className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                        >
                          <Image
                            src="/images/sightseeing/Johari_bazar.jpg"
                            alt="Johari Bazaar - Jaipur"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-lg drop-shadow-lg">Johari Bazaar</h3>
                            <p className="text-white/90 text-sm drop-shadow">Vibrant local market</p>
                          </div>
                        </motion.div>

                        {/* Jal Mahal - Full Width */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                          whileHover={{ scale: 1.02 }}
                          className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow md:col-span-2"
                        >
                          <Image
                            src="/images/sightseeing/Jal_Mahal.jpg"
                            alt="Jal Mahal - Jaipur"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-xl drop-shadow-lg">Jal Mahal</h3>
                            <p className="text-white/90 drop-shadow">Stunning water palace in Man Sagar Lake</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  )}

                  {/* Best Time to Visit */}
                  {tour.bestTimeToVisit && (
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-yellow-200">
                      <div className="flex items-center gap-3 mb-4">
                        <CalendarIcon className="w-8 h-8 text-orange-600" />
                        <h3 className="text-2xl font-bold text-gray-900">Best Time to Visit</h3>
                      </div>
                      <p className="text-gray-800 text-lg font-medium">{tour.bestTimeToVisit}</p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Itinerary Tab */}
              {activeTab === 'itinerary' && tour.itinerary && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Itinerary</h2>
                  <div className="space-y-6">
                    {tour.itinerary.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-6 group"
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                            {index + 1}
                          </div>
                          {index < tour.itinerary.length - 1 && (
                            <div className="w-1 flex-1 bg-gradient-to-b from-indigo-600 to-purple-600 mt-2 mb-2" />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-semibold text-indigo-600 px-3 py-1 bg-indigo-50 rounded-full">
                              {item.time}
                            </span>
                            {item.duration && (
                              <span className="text-sm text-gray-500">
                                ({item.duration})
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                            {item.activity}
                          </h3>
                          {item.description && (
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Inclusions Tab */}
              {activeTab === 'inclusions' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Inclusions */}
                  {tour.inclusions && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <CheckCircleIcon className="w-8 h-8 text-green-600" />
                        What&apos;s Included
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tour.inclusions.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                            <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-800">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Exclusions */}
                  {tour.exclusions && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <XCircleIcon className="w-8 h-8 text-red-600" />
                        What&apos;s Not Included
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tour.exclusions.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl">
                            <XCircleIcon className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Tips Tab */}
              {activeTab === 'tips' && tour.tips && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <LightBulbIcon className="w-8 h-8 text-yellow-600" />
                    Travel Tips & Recommendations
                  </h2>
                  <div className="space-y-4">
                    {tour.tips.map((tip, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-200"
                      >
                        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0 font-bold text-gray-900">
                          {index + 1}
                        </div>
                        <p className="text-gray-800 leading-relaxed">{tip}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Booking Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-xl border-2 border-indigo-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Book This Tour</h3>

                  <div className="space-y-3 mb-6">
                    <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-1">Sedan</div>
                      <div className="flex items-center gap-1 text-2xl font-bold text-indigo-600">
                        <CurrencyRupeeIcon className="w-7 h-7" />
                        {tour.price.sedan?.toLocaleString()}
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-1">SUV</div>
                      <div className="flex items-center gap-1 text-2xl font-bold text-purple-600">
                        <CurrencyRupeeIcon className="w-7 h-7" />
                        {tour.price.suv?.toLocaleString()}
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                      <div className="text-sm text-gray-600 mb-1">Tempo Traveller</div>
                      <div className="flex items-center gap-1 text-2xl font-bold text-green-600">
                        <CurrencyRupeeIcon className="w-7 h-7" />
                        {tour.price.tempoTraveller?.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBooking}
                    className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all mb-3"
                  >
                    Book via WhatsApp
                  </motion.button>

                  <a href="tel:+917668570551" className="block">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <PhoneIcon className="w-5 h-5" />
                      Call: +91 7668570551
                    </motion.button>
                  </a>

                  <div className="mt-4 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 inline-block text-green-600 mb-1" />
                    <span className="ml-1">Instant confirmation</span>
                  </div>
                </motion.div>

                {/* Reviews Summary */}
                {tour.reviews && (
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Guest Reviews</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl font-bold text-indigo-600">
                        {tour.reviews.averageRating}
                      </div>
                      <div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <StarIconSolid
                              key={i}
                              className={`w-5 h-5 ${
                                i < Math.floor(tour.reviews.averageRating)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {tour.reviews.totalReviews.toLocaleString()} reviews
                        </div>
                      </div>
                    </div>
                    {tour.reviews.highlights && (
                      <div className="space-y-2">
                        {tour.reviews.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircleIcon className="w-4 h-4 text-green-600" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Need Help */}
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 shadow-lg text-white">
                  <h3 className="text-xl font-bold mb-3">Need Help?</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Our travel experts are available 24/7 to assist you with bookings and queries.
                  </p>
                  <div className="space-y-2 text-sm">
                    <a href="tel:+917668570551" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                      <PhoneIcon className="w-5 h-5" />
                      +91 7668570551
                    </a>
                    <a href="mailto:info@trivenicabs.in" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
                      <EnvelopeIcon className="w-5 h-5" />
                      info@trivenicabs.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
