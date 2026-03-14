'use client';

import { MessageCircle, UserCheck, MapPin, Car } from '@/components/ui/icons';

/**
 * Booking Journey — 4-step visual timeline showing how booking works.
 * Reduces anxiety for first-time users by making the process transparent.
 */

const defaultSteps = [
  {
    icon: MessageCircle,
    title: 'Send Enquiry',
    desc: 'Share your trip details via WhatsApp or call',
    color: 'text-[#FACF2D]',
    bg: 'bg-[#FACF2D]/10',
    border: 'border-[#FACF2D]/20',
  },
  {
    icon: UserCheck,
    title: 'Get Confirmation',
    desc: 'We confirm vehicle, driver & exact fare',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: MapPin,
    title: 'Driver Arrives',
    desc: 'Professional driver reaches 15 min early',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
  {
    icon: Car,
    title: 'Enjoy Your Trip',
    desc: 'Sit back and enjoy a comfortable ride',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
];

export default function BookingJourney({ steps, theme = 'dark' }) {
  const items = steps || defaultSteps;
  const isDark = theme === 'dark';

  return (
    <section className={`py-12 sm:py-16 ${isDark ? '' : 'bg-gray-50'}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
            isDark ? 'text-[#FACF2D]/60' : 'text-[#FACF2D]'
          }`}>
            How It Works
          </p>
          <h2 className={`text-2xl sm:text-3xl font-extrabold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Book in 4 Simple Steps
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className={`absolute top-10 left-[12.5%] right-[12.5%] h-0.5 ${
            isDark ? 'bg-white/10' : 'bg-gray-200'
          }`} />

          {items.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex flex-col items-center text-center px-3">
                {/* Step number ring */}
                <div className={`relative z-10 w-20 h-20 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-8 h-8 ${step.color}`} />
                  <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center ${
                    isDark
                      ? 'bg-gray-900 text-white/60 border border-white/10'
                      : 'bg-white text-gray-500 border border-gray-200 shadow-sm'
                  }`}>
                    {i + 1}
                  </span>
                </div>
                <h3 className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {items.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === items.length - 1;
            return (
              <div key={i} className="flex gap-4">
                {/* Vertical line + icon */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  {!isLast && (
                    <div className={`w-0.5 flex-1 my-1 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
                  )}
                </div>
                {/* Content */}
                <div className={`pb-6 ${isLast ? '' : ''}`}>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                    Step {i + 1}
                  </span>
                  <h3 className={`font-bold text-sm mt-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
