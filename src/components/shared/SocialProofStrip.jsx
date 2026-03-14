'use client';

import { Star, Users, Shield, Clock } from '@/components/ui/icons';

/**
 * SocialProofStrip — compact social proof bar showing key trust metrics.
 * Displays live-feeling stats to build confidence at decision points.
 */

export default function SocialProofStrip({ theme = 'dark', variant = 'default' }) {
  const isDark = theme === 'dark';

  const items = [
    {
      icon: Star,
      value: '4.9',
      label: 'Google Rating',
      iconColor: 'text-yellow-400',
      fillIcon: true,
    },
    {
      icon: Users,
      value: '10,000+',
      label: 'Happy Travelers',
      iconColor: isDark ? 'text-sky-400' : 'text-sky-600',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Safe Journeys',
      iconColor: isDark ? 'text-green-400' : 'text-green-600',
    },
    {
      icon: Clock,
      value: '~2 min',
      label: 'Response Time',
      iconColor: isDark ? 'text-violet-400' : 'text-violet-600',
    },
  ];

  if (variant === 'inline') {
    return (
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-1.5">
              <Icon className={`w-3.5 h-3.5 ${item.iconColor} ${item.fillIcon ? 'fill-yellow-400' : ''}`} />
              <span className={`text-xs font-semibold ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                {item.value}
              </span>
              <span className={`text-xs ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`border-y ${isDark ? 'border-white/[0.06] bg-white/[0.02]' : 'border-gray-100 bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${item.iconColor} ${item.fillIcon ? 'fill-yellow-400' : ''}`} />
                </div>
                <div>
                  <p className={`text-base font-bold leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.value}
                  </p>
                  <p className={`text-[11px] mt-0.5 ${isDark ? 'text-white/35' : 'text-gray-500'}`}>
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
