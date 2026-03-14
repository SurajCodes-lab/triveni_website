'use client';

import { Car, Users, Snowflake, Briefcase, ChevronRight } from '@/components/ui/icons';
import { trackWhatsAppClick } from '@/utilis/analytics';

/**
 * PremiumPriceCard — elevated vehicle pricing card with glow effect.
 * Shows vehicle details, price, inclusions, and Book Now CTA.
 */

const vehicleIcons = {
  sedan: Car,
  suv: Car,
  innova: Car,
  ertiga: Car,
  tempo: Car,
  luxury: Car,
};

export default function PremiumPriceCard({
  vehicleName = 'Sedan',
  vehicleType = 'sedan',
  capacity = '4',
  price,
  originalPrice,
  perKm,
  inclusions = [],
  recommended = false,
  accentColor = 'amber',
  whatsappMessage = "Hi, I'd like a quote.",
  theme = 'dark',
}) {
  const isDark = theme === 'dark';
  const Icon = vehicleIcons[vehicleType] || Car;

  const colorMap = {
    amber: {
      glow: 'hover:shadow-amber-500/10',
      border: recommended ? 'border-amber-500/40' : isDark ? 'border-white/[0.08]' : 'border-gray-200',
      badge: 'bg-amber-400 text-black',
      accent: 'text-amber-400',
      ring: 'ring-amber-400/20',
      btn: 'bg-amber-400 hover:bg-amber-300 text-black',
    },
    emerald: {
      glow: 'hover:shadow-emerald-500/10',
      border: recommended ? 'border-emerald-500/40' : isDark ? 'border-white/[0.08]' : 'border-gray-200',
      badge: 'bg-emerald-400 text-black',
      accent: 'text-emerald-400',
      ring: 'ring-emerald-400/20',
      btn: 'bg-emerald-400 hover:bg-emerald-300 text-black',
    },
    violet: {
      glow: 'hover:shadow-violet-500/10',
      border: recommended ? 'border-violet-500/40' : isDark ? 'border-white/[0.08]' : 'border-gray-200',
      badge: 'bg-violet-400 text-black',
      accent: 'text-violet-400',
      ring: 'ring-violet-400/20',
      btn: 'bg-violet-400 hover:bg-violet-300 text-black',
    },
    cyan: {
      glow: 'hover:shadow-cyan-500/10',
      border: recommended ? 'border-cyan-500/40' : isDark ? 'border-white/[0.08]' : 'border-gray-200',
      badge: 'bg-cyan-400 text-black',
      accent: 'text-cyan-400',
      ring: 'ring-cyan-400/20',
      btn: 'bg-cyan-400 hover:bg-cyan-300 text-black',
    },
  };
  const c = colorMap[accentColor] || colorMap.amber;

  return (
    <div className={`relative group rounded-2xl border transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl ${c.glow} ${c.border} ${
      isDark ? 'bg-white/[0.03] backdrop-blur-sm' : 'bg-white shadow-sm'
    } ${recommended ? `ring-2 ${c.ring}` : ''}`}>

      {/* Recommended ribbon */}
      {recommended && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${c.badge} shadow-lg z-10`}>
          Most Popular
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Vehicle header */}
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-100'}`}>
            <Icon className={`w-6 h-6 ${c.accent}`} />
          </div>
          <div>
            <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {vehicleName}
            </h3>
            <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {capacity} Seats
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Snowflake className="w-3 h-3" />
                AC
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                Luggage
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px bg-gradient-to-r from-transparent ${isDark ? 'via-white/10' : 'via-gray-200'} to-transparent mb-5`} />

        {/* Price */}
        <div className="mb-5">
          <div className="flex items-baseline gap-2">
            {originalPrice && (
              <span className={`text-sm line-through ${isDark ? 'text-white/25' : 'text-gray-400'}`}>
                {originalPrice}
              </span>
            )}
            <div>
              <span className={`text-sm ${c.accent}`}>₹</span>
              <span className={`text-3xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {price}
              </span>
            </div>
          </div>
          {perKm && (
            <p className={`text-[11px] mt-1 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
              {perKm}
            </p>
          )}
        </div>

        {/* Inclusions */}
        {inclusions.length > 0 && (
          <div className="space-y-2 mb-6">
            {inclusions.map((item, i) => (
              <div key={i} className={`flex items-center gap-2 text-xs ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
                <svg className={`w-3.5 h-3.5 flex-shrink-0 ${c.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <a
          href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('premium_price_card', whatsappMessage)}
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${c.btn}`}
        >
          Book Now
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
