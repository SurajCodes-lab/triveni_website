'use client';

import React, { useCallback } from 'react';
// Centralized icon imports for better bundle optimization
import { MapPin, Phone, Clock, Navigation, Mail, Sparkles, Building2, CheckCircle, ArrowRight } from '@/components/ui/icons';
import { WhatsAppIcon as BsWhatsapp } from '@/components/ui/icons';
import { motion } from 'framer-motion';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const OfficeCard = ({ office, cityName, isOrigin = false, index }) => {
  const handleCall = useCallback(() => {
    trackPhoneCall('office_locations');
    window.open(`tel:+91${office.contact.phone}`, '_blank');
  }, [office.contact.phone]);

  const handleWhatsApp = useCallback(() => {
    trackWhatsAppClick('office_locations');
    const message = `Hi, I'm interested in your taxi services at ${office.name}, ${cityName}. Please share more details about cab booking and rates.`;
    window.open(`https://wa.me/${office.contact.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  }, [office.contact.whatsapp, office.name, cityName]);

  const handleGetDirections = useCallback(() => {
    const address = encodeURIComponent(office.fullAddress);
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  }, [office.fullAddress]);

  const generateOfficeStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": office.name,
    "description": `Taxi service office in ${cityName} for cab booking, outstation trips and local tours.`,
    "telephone": `+91${office.contact.phone}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": office.address,
      "addressLocality": cityName,
      "postalCode": office.pincode,
      "addressCountry": "IN"
    },
    "openingHours": office.timings === "24/7 Open" ? "Mo-Su 00:00-23:59" : office.timings,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": office.coordinates?.lat,
      "longitude": office.coordinates?.lng
    }
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOfficeStructuredData()) }}
      />
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group h-full"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <div className="relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden transition-all duration-500 hover:border-[#FACF2D] hover:shadow-2xl hover:shadow-[#FACF2D]/20 hover:-translate-y-1 h-full flex flex-col">
          {/* Top Gradient Bar */}
          <div className={`h-1.5 bg-gradient-to-r ${isOrigin ? 'from-blue-400 via-blue-500 to-blue-600' : 'from-green-400 via-emerald-400 to-green-500'}`} />

          <div className="p-6 flex-1 flex flex-col">
            {/* Header */}
            <div className="flex items-start gap-4 mb-5">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                isOrigin
                  ? 'bg-gradient-to-br from-blue-100 to-blue-50 group-hover:bg-blue-500'
                  : 'bg-gradient-to-br from-green-100 to-emerald-50 group-hover:bg-green-500'
              }`}>
                <Building2 className={`w-7 h-7 transition-colors ${isOrigin ? 'text-blue-600 group-hover:text-white' : 'text-green-600 group-hover:text-white'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight" itemProp="name">
                  {office.name}
                </h3>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full ${
                  isOrigin
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {isOrigin ? '📍 Pickup Office' : '🎯 Drop Office'}
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="flex-1" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4A017] mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-slate-700 font-medium text-sm leading-relaxed" itemProp="streetAddress">
                      {office.address}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      <span itemProp="addressLocality">{cityName}</span> - <span itemProp="postalCode">{office.pincode}</span>
                      <meta itemProp="addressCountry" content="IN" />
                    </p>
                    {office.landmark && (
                      <p className="text-sm text-slate-500 mt-1">
                        <span className="font-medium">Landmark:</span> {office.landmark}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Timing & Contact */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-xl p-3 border border-green-100">
                  <div className="flex items-center gap-2" itemProp="openingHours">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-bold text-green-700">{office.timings}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-xl p-3 border border-slate-100">
                  <div className="flex items-center gap-2" itemProp="telephone">
                    <Phone className="w-4 h-4 text-slate-600" />
                    <span className="text-sm font-bold text-slate-700">+91-{office.contact.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <motion.button
                  onClick={handleCall}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#FACF2D] text-black py-3 px-4 rounded-xl text-sm font-bold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                  aria-label={`Call taxi office at ${office.contact.phone}`}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.button>

                <motion.button
                  onClick={handleWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-green-500 text-white py-3 px-4 rounded-xl text-sm font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                  aria-label={`WhatsApp taxi office in ${cityName}`}
                >
                  <BsWhatsapp className="w-4 h-4" />
                  WhatsApp
                </motion.button>
              </div>

              <motion.button
                onClick={handleGetDirections}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-slate-900 text-white py-3 px-4 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                aria-label={`Get directions to taxi office in ${cityName}`}
              >
                <Navigation className="w-4 h-4" />
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
        </div>
      </motion.article>
    </>
  );
};

const OfficeLocations = ({ originCity, destinationCity, offices }) => {
  if (!offices || (!offices.origin && !offices.destination)) {
    return null;
  }

  const benefits = [
    { icon: "🤝", text: "Personal taxi booking assistance" },
    { icon: "💰", text: "Transparent cab fare discussion" },
    { icon: "🚗", text: "Vehicle inspection available" },
    { icon: "🗺️", text: "Custom outstation tour planning" },
    { icon: "🚨", text: "24/7 emergency taxi support" },
    { icon: "📍", text: "Local area taxi expertise" }
  ];

  const generateOfficeListStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Taxi Service Offices - ${originCity} to ${destinationCity}`,
    "description": `Visit our taxi booking offices for professional cab service between ${originCity} and ${destinationCity}`,
    "numberOfItems": [offices.origin, offices.destination].filter(Boolean).length,
    "itemListElement": [
      offices.origin && {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "LocalBusiness",
          "name": offices.origin.name,
          "address": { "@type": "PostalAddress", "addressLocality": originCity }
        }
      },
      offices.destination && {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "LocalBusiness",
          "name": offices.destination.name,
          "address": { "@type": "PostalAddress", "addressLocality": destinationCity }
        }
      }
    ].filter(Boolean)
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOfficeListStructuredData()) }}
      />
      <section className="space-y-8" aria-labelledby="office-locations-heading">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACF2D]/20 to-yellow-100 px-4 py-2 rounded-full mb-4">
            <Building2 className="w-4 h-4 text-[#D4A017]" />
            <span className="text-sm font-semibold text-[#D4A017]">OUR OFFICES</span>
          </div>
          <h2 id="office-locations-heading" className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#FACF2D]">Booking Offices</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Get personalized assistance for your {originCity} to {destinationCity} trip at our local offices
          </p>
        </motion.div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {offices.origin && (
            <OfficeCard
              office={offices.origin}
              cityName={originCity}
              isOrigin={true}
              index={0}
            />
          )}
          {offices.destination && (
            <OfficeCard
              office={offices.destination}
              cityName={destinationCity}
              isOrigin={false}
              index={1}
            />
          )}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-[#FACF2D] rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#FACF2D] rounded-full blur-3xl" />
            </div>

            <div className="relative p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FACF2D] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Why Visit Our Offices?</h3>
                  <p className="text-white/60 text-sm">Get personalized taxi booking assistance</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-all"
                  >
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="text-white text-sm font-medium">{benefit.text}</span>
                    <CheckCircle className="w-4 h-4 text-[#FACF2D] ml-auto flex-shrink-0" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-white/50 text-sm text-center">
                  💡 <span className="font-medium text-[#FACF2D]">Pro Tip:</span> Visit our offices for exclusive deals and personalized travel recommendations
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default OfficeLocations;
