'use client';

import { Car, UserCheck, Fuel, Shield, Clock, Snowflake, CreditCard, MapPin } from '@/components/ui/icons';

/**
 * Visual Inclusion Badges — shows what's included at a glance.
 * Presets available: outstation, local, airport, tour, wedding.
 */

const presets = {
  outstation: [
    { icon: UserCheck, label: 'Experienced Driver' },
    { icon: Snowflake, label: 'AC Vehicle' },
    { icon: Fuel, label: 'Fuel Included' },
    { icon: Shield, label: 'No Hidden Charges' },
    { icon: Clock, label: 'On-time Pickup' },
    { icon: CreditCard, label: 'Pay Later' },
  ],
  local: [
    { icon: UserCheck, label: 'Pro Driver' },
    { icon: Snowflake, label: 'AC Vehicle' },
    { icon: Clock, label: '8hr / 80km' },
    { icon: Shield, label: 'All Inclusive' },
  ],
  airport: [
    { icon: UserCheck, label: 'Driver Tracks Flight' },
    { icon: MapPin, label: 'Terminal Pickup' },
    { icon: Clock, label: '24/7 Available' },
    { icon: Shield, label: 'Fixed Price' },
  ],
  tour: [
    { icon: Car, label: 'Dedicated Vehicle' },
    { icon: UserCheck, label: 'Expert Guide Driver' },
    { icon: Snowflake, label: 'AC Comfort' },
    { icon: Shield, label: 'All Inclusive' },
    { icon: Clock, label: 'Flexible Timing' },
    { icon: CreditCard, label: 'Pay After Trip' },
  ],
  wedding: [
    { icon: Car, label: 'Decorated Car' },
    { icon: UserCheck, label: 'Uniformed Chauffeur' },
    { icon: Clock, label: 'On-time Guarantee' },
    { icon: Shield, label: 'Backup Vehicle' },
  ],
};

export default function InclusionBadges({
  items,
  preset = 'outstation',
  theme = 'dark',
  compact = false,
}) {
  const badges = items || presets[preset] || presets.outstation;
  const isDark = theme === 'dark';

  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        {badges.map((b, i) => {
          const Icon = b.icon;
          return (
            <span
              key={i}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${
                isDark
                  ? 'bg-white/5 text-white/60 border border-white/10'
                  : 'bg-green-50 text-green-700 border border-green-100'
              }`}
            >
              <Icon className="w-3 h-3" />
              {b.label}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`py-6 ${isDark ? '' : ''}`}>
      <div className="max-w-6xl mx-auto px-4">
        <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
          isDark ? 'text-[#FACF2D]/60' : 'text-gray-400'
        }`}>
          What&apos;s Included
        </p>
        <div className="flex flex-wrap gap-3">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isDark
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20 hover:border-green-500/40'
                    : 'bg-green-50 text-green-700 border border-green-200 hover:border-green-400'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                {b.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
