'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
  UserIcon,
  WrenchScrewdriverIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid, BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';

import dynamic from 'next/dynamic';

// Dynamically import below-fold components
const FareCalculator = dynamic(() => import('@/components/calculator/FareCalculator'), { ssr: false });
const QuickEnquiryForm = dynamic(() => import('@/components/ui/QuickEnquiryForm'), { ssr: false });

// SEO Components
import { SEOBreadcrumb } from '@/components/seo/Breadcrumb';
import { FAQSection } from '@/components/seo/FAQSection';
import { RelatedTours, CrossServiceLinks } from '@/components/seo/RelatedContent';
import { generateTourFAQs } from '@/lib/seo/faq-generator';
import { getRelatedToursByCity, getNearbyDestinations, getRelatedContent } from '@/utilis/linkingHelper';

export default function SightseeingDetailClient({ tour }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const tourCity = tour.name.split(' ')[0];
  const relatedContent = getRelatedContent(tourCity);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🗺️' },
    { id: 'itinerary', label: 'Itinerary', icon: '📍' },
    { id: 'inclusions', label: "What's Included", icon: '✅' },
    { id: 'tips', label: 'Travel Tips', icon: '💡' }
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
    <main className="min-h-screen bg-slate-950" itemScope itemType="https://schema.org/TouristTrip">
      {/* Hero Section - Cinematic Explorer Theme */}
      <header>
      <section
        className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden"
      >
        {/* Hero Background */}
        <div className="absolute inset-0">
          {tour.heroImage ? (
            <>
              <Image
                src={tour.heroImage}
                alt={tour.name}
                fill
                priority
                fetchPriority="high"
                quality={90}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-teal-900/30" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" />
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 3, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.3'%3E%3Cpath d='M40 40l20-20v40L40 40zm0 0L20 20v40l20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </>
          )}
        </div>

        {/* Floating Exploration Orbs */}
        <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-emerald-500/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-40 left-10 w-[200px] h-[200px] bg-teal-400/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Back Button */}
        <Link href="/sightseeing" className="absolute top-6 left-6 z-20">
          <motion.button
            
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl text-white rounded-full font-semibold shadow-lg border border-white/20 hover:bg-white/20 transition-all"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Tours
          </motion.button>
        </Link>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 z-20 flex gap-3">
          <motion.button
            
            whileTap={{ scale: 0.9 }}
            onClick={shareUrl}
            className="p-3 bg-white/10 backdrop-blur-xl rounded-full shadow-lg border border-white/20 hover:bg-white/20 transition-all"
          >
            <ShareIcon className="w-5 h-5 text-white" />
          </motion.button>
          <motion.button
            
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="p-3 bg-white/10 backdrop-blur-xl rounded-full shadow-lg border border-white/20 hover:bg-white/20 transition-all"
          >
            {isBookmarked ? (
              <BookmarkIconSolid className="w-5 h-5 text-emerald-400" />
            ) : (
              <BookmarkIcon className="w-5 h-5 text-white" />
            )}
          </motion.button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Tags Row */}
              <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-4">
                <span className="px-4 py-1.5 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 rounded-full text-xs sm:text-sm font-bold border border-emerald-500/30 tracking-wider uppercase">
                  {tour.category}
                </span>
                {tour.difficulty && (
                  <span className="px-4 py-1.5 bg-amber-500/20 backdrop-blur-sm text-amber-300 rounded-full text-xs sm:text-sm font-bold border border-amber-500/30">
                    {tour.difficulty}
                  </span>
                )}
                {tour.reviews && (
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-yellow-500/20 backdrop-blur-sm text-yellow-300 rounded-full text-xs sm:text-sm font-bold border border-yellow-500/30">
                    <StarIconSolid className="w-3.5 h-3.5" />
                    {tour.reviews.averageRating} ({tour.reviews.totalReviews})
                  </div>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-[1.1]">
                {tour.name}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
                {tour.shortDescription}
              </p>

              {/* Quick Info Chips */}
              <div className="mt-5 sm:mt-6 flex flex-wrap gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-white/90">
                  <div className="w-9 h-9 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                    <ClockIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base">{tour.duration}</span>
                </div>
                {tour.groupSize && (
                  <div className="flex items-center gap-2 text-white/90">
                    <div className="w-9 h-9 bg-teal-500/20 rounded-lg flex items-center justify-center border border-teal-500/30">
                      <UserGroupIcon className="w-5 h-5 text-teal-400" />
                    </div>
                    <span className="font-semibold text-sm sm:text-base">{tour.groupSize}</span>
                  </div>
                )}
                {tour.languages && (
                  <div className="flex items-center gap-2 text-white/90">
                    <div className="w-9 h-9 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                      <GlobeAltIcon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="font-semibold text-sm sm:text-base">{tour.languages.slice(0, 2).join(', ')}{tour.languages.length > 2 && '...'}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </header>

      {/* Pricing Bar - Glassmorphism */}
      <div className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-5 w-full sm:w-auto justify-center sm:justify-start overflow-x-auto">
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-black text-emerald-400">
                  <CurrencyRupeeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  {tour.price.sedan?.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400">Sedan</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-black text-teal-400">
                  <CurrencyRupeeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  {tour.price.suv?.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400">SUV</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center sm:text-left">
                <div className="flex items-center gap-1 text-xl sm:text-2xl font-black text-cyan-400">
                  <CurrencyRupeeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  {tour.price.tempoTraveller?.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 whitespace-nowrap">Tempo</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <a href="tel:+917668570551" className="w-full sm:w-auto">
                <motion.button
                  
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2 border border-white/10"
                >
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Now
                </motion.button>
              </a>
              <motion.button
                
                whileTap={{ scale: 0.95 }}
                onClick={handleBooking}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
              >
                Book via WhatsApp
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="bg-slate-900 border-b border-white/10 py-3">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-6 md:gap-10 text-sm text-slate-400 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <StarIconSolid className="w-4 h-4 text-yellow-500" /> 4.9★ Rated
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <UserGroupIcon className="w-4 h-4 text-emerald-400" /> 10,000+ Trips
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircleIcon className="w-4 h-4 text-teal-400" /> Since 2018
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPinIcon className="w-4 h-4 text-cyan-400" /> 500+ Cities
            </span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation - Explorer Style */}
      <div className="sticky top-[73px] z-30 bg-slate-900/60 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-5 md:px-6 py-3 sm:py-3.5 font-semibold whitespace-nowrap transition-all text-xs sm:text-sm md:text-base rounded-t-xl flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-emerald-400 bg-emerald-500/10 border-b-2 border-emerald-400'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-sm">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <SEOBreadcrumb
            items={[
              { name: 'Sightseeing', url: '/sightseeing' },
              { name: tour.name.split(' ')[0], url: `/sightseeing#${tour.name.split(' ')[0].toLowerCase()}` },
              { name: tour.name }
            ]}
            variant="minimal"
            showSchema={false}
          />
        </div>
      </div>

      {/* Content Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
                  {/* Description Card */}
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <SparklesIcon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black text-white">About This Tour</h2>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                      {tour.fullDescription}
                    </p>
                  </div>

                  {/* Highlights - Bento Grid Style */}
                  {tour.highlights && (
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                          <StarIcon className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-white">Tour Highlights</h2>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                        {tour.highlights.map((highlight, index) => {
                          if (!highlight) return null;
                          const placeName = highlight.split(' - ')[0].trim();
                          const description = highlight.split(' - ')[1]?.trim() || '';
                          const imageUrl = tour.images && tour.images[index] ? tour.images[index] : null;

                          return (
                            <div
                              key={index}
                              className={`group relative overflow-hidden rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all duration-500 ${
                                index === 0 ? 'sm:col-span-2 sm:row-span-1' : ''
                              }`}
                            >
                              {imageUrl && (
                                <div className={`relative ${index === 0 ? 'h-56' : 'h-48'} w-full overflow-hidden`}>
                                  <Image
                                    src={imageUrl}
                                    alt={placeName}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                                </div>
                              )}
                              <div className={`${imageUrl ? 'absolute bottom-0 left-0 right-0' : 'bg-white/5'} p-4`}>
                                <div className="flex items-start gap-2">
                                  <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-emerald-500/30">
                                    <span className="text-xs font-bold text-white">{index + 1}</span>
                                  </div>
                                  <div>
                                    <h3 className={`text-base sm:text-lg font-bold mb-1 ${imageUrl ? 'text-white' : 'text-white'}`}>
                                      {placeName}
                                    </h3>
                                    {description && (
                                      <p className={`text-xs sm:text-sm ${imageUrl ? 'text-slate-300' : 'text-slate-400'}`}>
                                        {description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Customization Section */}
                  <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
                    <div className="relative p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-xl shadow-emerald-500/30">
                            <WrenchScrewdriverIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black text-white">Customization Available</h3>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
                        We understand that every traveler has unique preferences. This tour can be fully customized to match your interests, schedule, and requirements.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                        {[
                          { icon: PencilSquareIcon, title: 'Modify Itinerary', desc: 'Add, remove, or replace destinations' },
                          { icon: ClockIcon, title: 'Flexible Timing', desc: 'Adjust pickup time and duration' },
                          { icon: UserGroupIcon, title: 'Group Size', desc: 'Private or group tours available' },
                          { icon: SparklesIcon, title: 'Special Requests', desc: 'Photo tours, food tours, or specific interests' }
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all">
                            <item.icon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-bold text-white text-sm sm:text-base mb-1">{item.title}</h4>
                              <p className="text-xs sm:text-sm text-slate-400">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <motion.button
                          
                          whileTap={{ scale: 0.98 }}
                          onClick={handleBooking}
                          className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2"
                        >
                          <WrenchScrewdriverIcon className="w-5 h-5" />
                          Customize This Tour
                        </motion.button>
                        <a href="tel:+917668570551" className="flex-1">
                          <motion.button
                            
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 text-emerald-400 border border-emerald-500/40 rounded-xl font-bold text-sm sm:text-base hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2"
                          >
                            <PhoneIcon className="w-5 h-5" />
                            Call to Discuss
                          </motion.button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Best Time to Visit */}
                  {tour.bestTimeToVisit && (
                    <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl p-6 sm:p-8 border border-amber-500/20 backdrop-blur-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                          <CalendarIcon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white">Best Time to Visit</h3>
                      </div>
                      <p className="text-slate-300 text-base sm:text-lg font-medium">{tour.bestTimeToVisit}</p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Itinerary Tab - Timeline Explorer */}
              {activeTab === 'itinerary' && tour.itinerary && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <MapPinIcon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">Detailed Itinerary</h2>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    {tour.itinerary.map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-3 sm:gap-4 md:gap-6 group"
                      >
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-black shadow-lg shadow-emerald-500/30 text-sm sm:text-base">
                            {index + 1}
                          </div>
                          {index < tour.itinerary.length - 1 && (
                            <div className="w-0.5 flex-1 bg-gradient-to-b from-emerald-500/60 to-transparent mt-2 mb-2 min-h-[20px]" />
                          )}
                        </div>
                        <div className="flex-1 pb-6 sm:pb-8">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                            <span className="text-xs sm:text-sm font-bold text-emerald-400 px-3 py-1 bg-emerald-500/10 rounded-full w-fit border border-emerald-500/20">
                              {item.time}
                            </span>
                            {item.duration && (
                              <span className="text-xs sm:text-sm text-slate-500">
                                ({item.duration})
                              </span>
                            )}
                          </div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                            {item.activity}
                          </h3>
                          {item.description && (
                            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Inclusions Tab */}
              {activeTab === 'inclusions' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 sm:space-y-6"
                >
                  {tour.inclusions && (
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl">
                      <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                          <CheckCircleIcon className="w-5 h-5 text-white" />
                        </div>
                        <span>What&apos;s Included</span>
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {tour.inclusions.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                            <CheckCircleIcon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-slate-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {tour.exclusions && (
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-2xl">
                      <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
                          <XCircleIcon className="w-5 h-5 text-white" />
                        </div>
                        <span>What&apos;s Not Included</span>
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {tour.exclusions.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-red-500/5 rounded-xl border border-red-500/10 hover:border-red-500/30 transition-all">
                            <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-slate-300">{item}</span>
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
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                      <LightBulbIcon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">Travel Tips</h2>
                  </div>
                  <div className="space-y-3">
                    {tour.tips.map((tip, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-amber-500/5 rounded-xl border border-amber-500/10 hover:border-amber-500/30 transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0 font-bold text-white text-sm shadow-lg shadow-amber-500/30">
                          {index + 1}
                        </div>
                        <p className="text-slate-300 leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Quick Enquiry Form */}
                <QuickEnquiryForm
                  fromCity={tour.name.split(' ')[0]}
                  toCity=""
                  pageType="sightseeing"
                />

                {/* Reviews Summary */}
                {tour.reviews && (
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                    <h3 className="text-xl font-bold text-white mb-4">Guest Reviews</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-4xl font-black text-emerald-400">
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
                                  : 'text-slate-600'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-slate-400 mt-1">
                          {tour.reviews.totalReviews.toLocaleString()} reviews
                        </div>
                      </div>
                    </div>
                    {tour.reviews.highlights && (
                      <div className="space-y-2">
                        {tour.reviews.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-slate-400">
                            <CheckCircleIcon className="w-4 h-4 text-emerald-400" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Need Help */}
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
                  <div className="relative p-6 text-white">
                    <h3 className="text-xl font-black mb-3">Need Help?</h3>
                    <p className="text-emerald-100 mb-4 text-sm">
                      Our travel experts are available 24/7 to assist you with bookings and queries.
                    </p>
                    <div className="space-y-3">
                      <a href="tel:+917668570551" className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                        <PhoneIcon className="w-5 h-5" />
                        <span className="font-semibold">+91 7668570551</span>
                      </a>
                      <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-green-500 rounded-xl hover:bg-green-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span className="font-semibold">WhatsApp Us</span>
                      </a>
                      <a href="mailto:cabstriveni@gmail.com" className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                        <EnvelopeIcon className="w-5 h-5" />
                        <span className="font-semibold">cabstriveni@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-4">Why Choose Us</h3>
                  <div className="space-y-3">
                    {[
                      { icon: CheckCircleIcon, text: "Instant Confirmation" },
                      { icon: UserIcon, text: "Professional Drivers" },
                      { icon: GlobeAltIcon, text: "Multilingual Guides" },
                      { icon: SparklesIcon, text: "100% Customizable" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-slate-400">
                        <item.icon className="w-5 h-5 text-emerald-400" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fare Calculator */}
      <section className="py-12 bg-slate-900/50 relative" id="fare-calculator">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Get an Instant Fare Estimate
            </h2>
            <p className="text-slate-400">Calculate the cost for your sightseeing trip</p>
          </div>
          <FareCalculator variant="compact" className="max-w-md mx-auto" />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={generateTourFAQs({
          tourName: tour.name,
          city: tour.name.split(' ')[0],
          duration: tour.duration,
          price: tour.price?.sedan,
          highlights: tour.highlights || [],
          inclusions: tour.inclusions || []
        })}
        title={`Frequently Asked Questions about ${tour.name}`}
        subtitle="Everything you need to know before booking"
        variant="card"
        showSchema={true}
      />

      {/* Related Tours */}
      <RelatedTours
        city={tour.name.split(' ')[0]}
        tours={getRelatedToursByCity(tour.name.split(' ')[0], tour.slug, 4)}
        currentSlug={tour.slug}
        title={`More Tours You Might Like`}
      />

      {/* Cross-Service Links */}
      <CrossServiceLinks
        city={tour.name.split(' ')[0]}
        title={`Other Services in ${tour.name.split(' ')[0]}`}
      />

      {/* Related Guides */}
      {relatedContent && relatedContent.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-2">Related Guides</h2>
            <p className="text-gray-400 mb-8">Explore more about {tourCity}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedContent.slice(0, 4).map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-white/10 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
              Ready to Experience {tour.name}?
            </h2>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Book now and create unforgettable memories with our expert-guided tour
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                
                whileTap={{ scale: 0.95 }}
                onClick={handleBooking}
                className="px-8 py-4 bg-white text-emerald-700 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Book Now via WhatsApp
              </motion.button>
              <a href="tel:+917668570551">
                <motion.button
                  
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Call +91 7668570551
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
