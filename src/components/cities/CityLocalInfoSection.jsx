'use client';

// Centralized icon imports for better bundle optimization
import { MapPin, Clock, Calendar, Info, Navigation2, Sparkles, Compass, Star, ChevronRight } from "@/components/ui/icons";
import { motion } from 'framer-motion';

export default function CityLocalInfoSection({ cityLocalInfo, cityName }) {
  if (!cityLocalInfo) return null;

  return (
    <section className="py-12 md:py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACF2D]/20 to-yellow-100 px-4 py-2 rounded-full mb-4">
          <Compass className="w-4 h-4 text-[#D4A017]" />
          <span className="text-sm font-semibold text-[#D4A017]">TRAVEL GUIDE</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A017] to-[#FACF2D]">{cityName}</span>
        </h2>

        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
          {cityLocalInfo.description}
        </p>
      </motion.div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Best Time to Visit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group"
        >
          <div className="relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden transition-all duration-500 hover:border-[#FACF2D] hover:shadow-2xl hover:shadow-[#FACF2D]/20 hover:-translate-y-1">
            <div className="h-1.5 bg-gradient-to-r from-[#FACF2D] via-yellow-400 to-[#D4A017]" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FACF2D]/20 to-yellow-100 flex items-center justify-center group-hover:bg-[#FACF2D] transition-colors">
                  <Calendar className="w-6 h-6 text-[#D4A017] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Best Time to Visit</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{cityLocalInfo.bestTimeToVisit}</p>
            </div>
          </div>
        </motion.div>

        {/* Local Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group"
        >
          <div className="relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden transition-all duration-500 hover:border-[#FACF2D] hover:shadow-2xl hover:shadow-[#FACF2D]/20 hover:-translate-y-1">
            <div className="h-1.5 bg-gradient-to-r from-[#FACF2D] via-yellow-400 to-[#D4A017]" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FACF2D]/20 to-yellow-100 flex items-center justify-center group-hover:bg-[#FACF2D] transition-colors">
                  <Sparkles className="w-6 h-6 text-[#D4A017] group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Local Events & Festivals</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{cityLocalInfo.localEvents}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top Attractions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden transition-all duration-500 hover:border-[#FACF2D] hover:shadow-2xl hover:shadow-[#FACF2D]/20">
          <div className="h-1.5 bg-gradient-to-r from-[#FACF2D] via-yellow-400 to-[#D4A017]" />
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FACF2D]/20 to-yellow-100 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#D4A017]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Top Attractions in {cityName}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cityLocalInfo.localAttractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-gradient-to-r from-slate-50 to-slate-100/50 p-3 rounded-xl border border-slate-100 hover:border-[#FACF2D] hover:bg-[#FACF2D]/10 transition-all group cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FACF2D] flex items-center justify-center text-sm font-bold text-black">
                    {index + 1}
                  </div>
                  <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{attraction}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Travel Tips */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <div className="relative bg-white rounded-2xl border-2 border-slate-100 overflow-hidden transition-all duration-500 hover:border-[#FACF2D] hover:shadow-2xl hover:shadow-[#FACF2D]/20">
          <div className="h-1.5 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500" />
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center">
                <Navigation2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Travel Tips for {cityName}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cityLocalInfo.travelTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-gradient-to-r from-green-50 to-emerald-50/50 p-3 rounded-xl border border-green-100 hover:border-green-300 hover:bg-green-100/50 transition-all cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">{tip}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Nearby Destinations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
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
                <Clock className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white">Popular Destinations from {cityName}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {cityLocalInfo.nearbyDestinations.map((destination, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-sm font-medium border border-white/20 hover:bg-[#FACF2D] hover:text-black hover:border-[#FACF2D] transition-all cursor-default"
                >
                  <Star className="w-4 h-4" />
                  {destination}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
