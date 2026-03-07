"use client";

import { Zap, ShieldCheck, CheckCircle, Star } from "@/components/ui/icons";

const defaultStats = [
  { value: '\u20B911/km', label: 'Starting Rate', icon: Zap },
  { value: '5,000+', label: 'Verified Drivers', icon: ShieldCheck },
  { value: '10K+', label: 'Trips Completed', icon: CheckCircle },
  { value: '4.9/5', label: 'Customer Rating', icon: Star },
];

export default function StatsStrip({ stats, theme = "dark" }) {
  const items = stats || defaultStats;
  const isDark = theme === "dark";

  return (
    <div className={`border-y ${isDark ? 'border-white/[0.06] bg-white/[0.02]' : 'border-gray-100 bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
        {items.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="flex items-center gap-2.5">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                isDark ? 'bg-[#FACF2D]/10' : 'bg-[#FACF2D]/10'
              }`}>
                <Icon className={`w-4 h-4 ${isDark ? 'text-[#FACF2D]' : 'text-[#d4ad00]'}`} />
              </div>
              <div>
                <p className={`text-sm font-bold leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}>{s.value}</p>
                <p className={`text-[11px] mt-0.5 ${isDark ? 'text-white/35' : 'text-gray-500'}`}>{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
