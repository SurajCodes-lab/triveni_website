'use client';

import Image from 'next/image';
import { Car, Users, Snowflake, Briefcase, ChevronRight } from '@/components/ui/icons';
import { trackWhatsAppClick } from '@/utilis/analytics';

/**
 * FleetShowcase — premium vehicle gallery with glass overlays.
 * Displays fleet with specs, pricing, and booking CTAs.
 */

const defaultFleet = [
  {
    name: 'Swift Dzire',
    type: 'Sedan',
    capacity: '4',
    luggage: '2 Bags',
    features: ['AC', 'Music System', 'Comfortable'],
    startingPrice: '₹9/km',
    image: '/images/swift_dzire.jpg',
  },
  {
    name: 'Ertiga',
    type: 'SUV',
    capacity: '6',
    luggage: '3 Bags',
    features: ['AC', 'Spacious', 'Family-friendly'],
    startingPrice: '₹12/km',
    image: '/images/ertiga.jpg',
  },
  {
    name: 'Innova Crysta',
    type: 'Premium SUV',
    capacity: '7',
    luggage: '4 Bags',
    features: ['AC', 'Premium', 'Captain Seats'],
    startingPrice: '₹15/km',
    popular: true,
    image: '/images/innova_crysta.jpg',
  },
  {
    name: 'Tempo Traveller',
    type: 'Group',
    capacity: '12-26',
    luggage: '10+ Bags',
    features: ['AC', 'Pushback Seats', 'LCD'],
    startingPrice: '₹18/km',
    image: '/images/tempo/26_seater.jpg',
  },
];

export default function FleetShowcase({
  fleet,
  theme = 'dark',
  accentColor = 'amber',
  whatsappMessage = "Hi, I'd like to know about your vehicles.",
  title = 'Our Fleet',
  subtitle = 'Choose Your Ride',
}) {
  const vehicles = fleet || defaultFleet;
  const isDark = theme === 'dark';

  const colorMap = {
    amber: { accent: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', btn: 'bg-[#FACF2D] hover:bg-[#e6bb15] text-black', badge: 'bg-amber-400 text-black' },
    emerald: { accent: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', btn: 'bg-emerald-400 hover:bg-emerald-300 text-black', badge: 'bg-emerald-400 text-black' },
    violet: { accent: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/20', btn: 'bg-violet-400 hover:bg-violet-300 text-black', badge: 'bg-violet-400 text-black' },
    cyan: { accent: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20', btn: 'bg-cyan-400 hover:bg-cyan-300 text-black', badge: 'bg-cyan-400 text-black' },
    pink: { accent: 'text-pink-400', bg: 'bg-pink-400/10', border: 'border-pink-400/20', btn: 'bg-pink-400 hover:bg-pink-300 text-black', badge: 'bg-pink-400 text-black' },
  };
  const c = colorMap[accentColor] || colorMap.amber;

  return (
    <section className={`py-16 sm:py-20 ${isDark ? '' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] mb-3 ${isDark ? c.accent : 'text-gray-400'}`}>
            {subtitle}
          </p>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h2>
        </div>

        {/* Fleet grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vehicles.map((v, i) => (
            <div
              key={i}
              className={`relative group rounded-2xl border transition-all duration-300 hover:translate-y-[-3px] hover:shadow-2xl overflow-hidden ${
                isDark
                  ? `bg-white/[0.03] border-white/[0.08] hover:border-white/[0.15] backdrop-blur-sm ${v.popular ? 'ring-1 ring-amber-400/20' : ''}`
                  : `bg-white border-gray-200 hover:border-gray-300 shadow-sm ${v.popular ? 'ring-1 ring-amber-400/30' : ''}`
              }`}
            >
              {/* Popular tag */}
              {v.popular && (
                <div className={`absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${c.badge}`}>
                  Popular
                </div>
              )}

              {/* Vehicle visual area */}
              <div className={`relative h-48 sm:h-44 overflow-hidden ${isDark ? 'bg-gradient-to-b from-white/[0.04] to-transparent' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
                {v.image ? (
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <Car className={`w-16 h-16 ${isDark ? 'text-white/20' : 'text-gray-200'} group-hover:scale-110 transition-transform duration-500`} />
                  </div>
                )}
                {/* Vehicle type badge */}
                <span className={`absolute bottom-3 left-3 z-10 px-2 py-0.5 rounded-md text-[10px] font-semibold ${isDark ? 'bg-black/50 text-white/80 backdrop-blur-sm border border-white/10' : 'bg-gray-100/90 backdrop-blur-sm text-gray-600'}`}>
                  {v.type}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {v.name}
                </h3>

                {/* Specs row */}
                <div className={`flex items-center gap-3 text-[11px] mb-4 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {v.capacity}
                  </span>
                  <span className="flex items-center gap-1">
                    <Snowflake className="w-3 h-3" />
                    AC
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    {v.luggage}
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {v.features?.map((f, j) => (
                    <span key={j} className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${isDark ? 'bg-white/5 text-white/40' : 'bg-gray-100 text-gray-500'}`}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className={`h-px bg-gradient-to-r from-transparent ${isDark ? 'via-white/10' : 'via-gray-200'} to-transparent mb-4`} />

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-[10px] ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Starting</p>
                    <p className={`text-lg font-bold ${c.accent}`}>{v.startingPrice}</p>
                  </div>
                  <a
                    href={`https://wa.me/917668570551?text=${encodeURIComponent(`${whatsappMessage} - ${v.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('fleet_showcase', `${v.name}`)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] ${c.btn}`}
                  >
                    Book
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
