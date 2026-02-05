'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Centralized icon imports for better bundle optimization
import {
  Clock, MapPin, Car, Users, ArrowRight, Phone, Star,
  Sparkles, Navigation, ChevronRight, Zap, Shield, MapPinned
} from '@/components/ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { cityRoutesData, defaultRoutes } from "@/utilis/cityRoutesData";
import { phoneNumber } from "@/utilis/data";
import { WhatsAppIcon as BsWhatsapp } from '@/components/ui/icons';

// Helper function to create route slug
function createRouteSlug(cityName, destination) {
  if (!cityName || !destination) return '';
  return `${cityName.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
}

// Destination images/icons mapping
const destinationIcons = {
  'Delhi': '🏛️', 'Agra': '🕌', 'Jaipur': '🏰', 'Manali': '🏔️', 'Shimla': '❄️',
  'Haridwar': '🙏', 'Rishikesh': '🧘', 'Varanasi': '🪔', 'Udaipur': '🚣', 'Jodhpur': '🏯',
  'Dharamshala': '⛰️', 'Amritsar': '🛕', 'Kasauli': '🌲', 'Kasol': '🏕️', 'Mussoorie': '🌄',
  'Nainital': '🏞️', 'Jim Corbett': '🐅', 'Dehradun': '🌳', 'Chandigarh': '🌳',
  'default': '📍'
};

const CityRoutes = ({ cityName }) => {
  const [activeTab, setActiveTab] = useState('oneWay');
  const [hoveredRoute, setHoveredRoute] = useState(null);
  const [showAllRoutes, setShowAllRoutes] = useState(true); // Show all routes by default

  const routes = useMemo(() =>
    cityRoutesData[cityName] || defaultRoutes[cityName] || [],
    [cityName]
  );

  const handleWhatsApp = useCallback((destination) => {
    const message = `Hi, I want to book a ${activeTab === 'roundTrip' ? 'round trip' : 'one-way'} cab from ${cityName} to ${destination}. Please share pricing.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  }, [cityName, activeTab]);

  const getStartingPrice = useCallback((route) => {
    if (!route.prices || route.prices.length === 0) return "2,760";
    const carPrices = route.prices.filter(p =>
      p.vehicle && (p.vehicle.includes('Sedan') || p.vehicle.includes('SUV'))
    );
    const prices = carPrices.length > 0 ? carPrices : route.prices;
    const lowestPrice = Math.min(...prices.map(p => {
      const price = activeTab === 'oneWay' ? p.price : p.roundTrip;
      return parseInt(price.replace('₹', '').replace(',', ''));
    }));
    return lowestPrice.toLocaleString();
  }, [activeTab]);

  const routesToDisplay = useMemo(() => {
    if (!routes || !Array.isArray(routes)) return [];
    return showAllRoutes ? routes : routes.slice(0, 8);
  }, [routes, showAllRoutes]);

  const getDestinationIcon = (destination) => {
    return destinationIcons[destination] || destinationIcons['default'];
  };

  if (!routes || routes.length === 0) {
    return (
      <div className="py-12">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Navigation className="w-10 h-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-700 mb-2">No Routes Available</h3>
          <p className="text-slate-500 mb-6">Contact us for custom routes from {cityName}</p>
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-2 bg-[#FACF2D] text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACF2D]/20 to-yellow-100 px-4 py-2 rounded-full mb-4"
        >
          <Sparkles className="w-4 h-4 text-[#D4A017]" />
          <span className="text-sm font-semibold text-[#D4A017]">POPULAR DESTINATIONS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
        >
          Routes from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#FACF2D]">{cityName}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 max-w-2xl mx-auto mb-8"
        >
          Book premium cabs to {routes.length}+ destinations with transparent pricing
        </motion.p>

        {/* Trip Type Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex bg-slate-100 p-1.5 rounded-2xl"
        >
          <button
            onClick={() => setActiveTab('oneWay')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              activeTab === 'oneWay'
                ? 'bg-white text-slate-900 shadow-lg shadow-slate-200/50'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            One Way
          </button>
          <button
            onClick={() => setActiveTab('roundTrip')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              activeTab === 'roundTrip'
                ? 'bg-white text-slate-900 shadow-lg shadow-slate-200/50'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Round Trip
          </button>
        </motion.div>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {routesToDisplay.map((route, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onMouseEnter={() => setHoveredRoute(index)}
            onMouseLeave={() => setHoveredRoute(null)}
            className="group relative"
          >
            <div className={`relative bg-white rounded-2xl border-2 overflow-hidden transition-all duration-500 ${
              hoveredRoute === index
                ? 'border-[#FACF2D] shadow-2xl shadow-[#FACF2D]/20 -translate-y-2'
                : 'border-slate-100 shadow-lg hover:shadow-xl'
            }`}>

              {/* Top Gradient Bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#FACF2D] via-yellow-400 to-[#D4A017]" />

              {/* Card Content */}
              <div className="p-5">
                {/* Destination Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                      hoveredRoute === index
                        ? 'bg-[#FACF2D] scale-110'
                        : 'bg-slate-100'
                    }`}>
                      {getDestinationIcon(route.destination)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg leading-tight">
                        {route.destination}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1 text-slate-500 text-xs">
                          <MapPin className="w-3 h-3" />
                          <span>{route.distance}</span>
                        </div>
                        <span className="text-slate-300">•</span>
                        <div className="flex items-center gap-1 text-slate-500 text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{route.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                {route.tags && route.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {route.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Price Section */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-4 mb-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Starting from</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-slate-900">₹{getStartingPrice(route)}</span>
                        <span className="text-xs text-slate-400">/{activeTab === 'roundTrip' ? 'round trip' : 'one way'}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      <Zap className="w-3 h-3" />
                      <span className="text-xs font-semibold">Best Price</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    href={`/${createRouteSlug(cityName, route.destination)}`}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => handleWhatsApp(route.destination)}
                    className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
                    title="Book via WhatsApp"
                  >
                    <BsWhatsapp className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Hover Shine Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 ${
                hoveredRoute === index ? 'translate-x-full' : ''
              }`} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {routes.length > 8 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button
            onClick={() => setShowAllRoutes(!showAllRoutes)}
            className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-xl"
          >
            {showAllRoutes ? (
              <>
                Show Less Routes
                <ArrowRight className="w-5 h-5 rotate-[-90deg] group-hover:-translate-y-1 transition-transform" />
              </>
            ) : (
              <>
                Show All {routes.length} Routes
                <ArrowRight className="w-5 h-5 rotate-90 group-hover:translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </motion.div>
      )}

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#FACF2D] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#FACF2D] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-[#FACF2D]" />
            <span className="text-[#FACF2D] font-semibold text-sm">TRUSTED BY 50,000+ TRAVELERS</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
            Can't find your destination?
          </h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            We cover 500+ routes across India. Call us for custom routes and special packages!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center gap-2 bg-[#FACF2D] hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FACF2D]/25"
            >
              <Phone className="w-5 h-5" />
              Call {phoneNumber}
            </a>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 border border-white/20"
            >
              <BsWhatsapp className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CityRoutes;
