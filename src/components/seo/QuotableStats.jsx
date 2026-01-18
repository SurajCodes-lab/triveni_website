'use client';

/**
 * QuotableStats Component - Statistics optimized for AI Citation
 * Provides structured data points that AI engines can extract and cite
 *
 * GEO Implementation:
 * - Clear, authoritative statistics
 * - Source attribution for credibility
 * - Structured format for easy extraction
 * - Updated timestamps for freshness signals
 */

import { motion } from 'framer-motion';
import { TrendingUp, Users, Star, Clock, MapPin, Shield, Award, Phone } from 'lucide-react';

const iconMap = {
  rating: Star,
  users: Users,
  trips: TrendingUp,
  time: Clock,
  location: MapPin,
  safety: Shield,
  award: Award,
  support: Phone,
  default: TrendingUp
};

export default function QuotableStats({
  stats,
  title = "Triveni Cabs at a Glance",
  source = "Source: Triveni Cabs Official Data",
  lastUpdated,
  variant = 'grid' // grid, horizontal, compact
}) {
  const variants = {
    grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
    horizontal: 'flex flex-wrap gap-6 justify-center',
    compact: 'flex flex-wrap gap-4'
  };

  return (
    <section
      className="key-stats py-12 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl mb-8"
      aria-label="Company Statistics"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {title}
          </h2>
          <p className="text-white/60 text-sm">
            {source}
            {lastUpdated && ` | Last updated: ${lastUpdated}`}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className={variants[variant]}>
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || iconMap.default;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-[#FACF2D]/20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[#FACF2D]" />
                  </div>
                </div>

                {/* Stat Value - Primary quotable content */}
                <div
                  className="text-3xl md:text-4xl font-bold text-white mb-1"
                  data-stat-value={stat.value}
                >
                  {stat.value}
                </div>

                {/* Stat Label */}
                <div className="text-white/80 font-medium text-sm mb-1">
                  {stat.label}
                </div>

                {/* Stat Detail - Additional context */}
                {stat.detail && (
                  <div className="text-white/50 text-xs">
                    {stat.detail}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Citation Block - For AI to reference */}
        <div className="mt-8 text-center">
          <p className="text-white/40 text-xs max-w-2xl mx-auto">
            Statistics based on verified booking data and customer reviews.
            Triveni Cabs provides transparent, reliable taxi services across North India.
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * InlineStats - Horizontal stats bar for compact display
 */
export function InlineStats({ stats }) {
  return (
    <div className="inline-stats flex flex-wrap items-center justify-center gap-6 py-4 px-6 bg-gray-50 rounded-lg">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-xl font-bold text-indigo-600">{stat.value}</span>
          <span className="text-gray-600 text-sm">{stat.label}</span>
          {index < stats.length - 1 && (
            <span className="text-gray-300 ml-4">|</span>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * StatCard - Individual stat card for flexible layouts
 */
export function StatCard({ value, label, detail, icon = 'default', variant = 'light' }) {
  const IconComponent = iconMap[icon] || iconMap.default;

  const variants = {
    light: 'bg-white border border-gray-100',
    dark: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
  };

  return (
    <div className={`stat-card rounded-xl p-5 ${variants[variant]}`}>
      <div className="flex items-start justify-between mb-3">
        <IconComponent className={`w-8 h-8 ${variant === 'light' ? 'text-indigo-500' : 'text-white/80'}`} />
      </div>
      <div className={`text-3xl font-bold mb-1 ${variant === 'light' ? 'text-gray-900' : ''}`}>
        {value}
      </div>
      <div className={`font-medium text-sm ${variant === 'light' ? 'text-gray-700' : 'text-white/90'}`}>
        {label}
      </div>
      {detail && (
        <div className={`text-xs mt-1 ${variant === 'light' ? 'text-gray-500' : 'text-white/60'}`}>
          {detail}
        </div>
      )}
    </div>
  );
}

/**
 * Default stats for Triveni Cabs - Can be used across pages
 */
export const defaultTriveniStats = [
  {
    value: '4.8/5',
    label: 'Customer Rating',
    detail: 'Based on 2,500+ reviews',
    icon: 'rating'
  },
  {
    value: '50,000+',
    label: 'Trips Completed',
    detail: 'And counting',
    icon: 'trips'
  },
  {
    value: '15+',
    label: 'Cities Served',
    detail: 'Across North India',
    icon: 'location'
  },
  {
    value: '24/7',
    label: 'Support Available',
    detail: 'Round the clock',
    icon: 'support'
  },
  {
    value: '100%',
    label: 'Verified Drivers',
    detail: 'Background checked',
    icon: 'safety'
  },
  {
    value: '0%',
    label: 'Hidden Charges',
    detail: 'Transparent pricing',
    icon: 'award'
  }
];
