'use client';

import { TrendingUp, Flame, Star, Users } from '@/components/ui/icons';

/**
 * PopularBadge — urgency/popularity indicator with pulse animation.
 * Use on cards or hero sections to highlight popular routes/services.
 *
 * Variants: popular, trending, bestSeller, limited, booked
 */

const variants = {
  popular: {
    icon: Flame,
    text: 'Popular Route',
    className: 'bg-orange-500/15 text-orange-400 border-orange-500/25',
    pulse: 'bg-orange-400',
  },
  trending: {
    icon: TrendingUp,
    text: 'Trending',
    className: 'bg-sky-500/15 text-sky-400 border-sky-500/25',
    pulse: 'bg-sky-400',
  },
  bestSeller: {
    icon: Star,
    text: 'Best Seller',
    className: 'bg-[#FACF2D]/15 text-[#FACF2D] border-[#FACF2D]/25',
    pulse: 'bg-[#FACF2D]',
  },
  limited: {
    icon: Flame,
    text: 'Limited Availability',
    className: 'bg-red-500/15 text-red-400 border-red-500/25',
    pulse: 'bg-red-400',
  },
  booked: {
    icon: Users,
    text: 'Booked 50+ Times',
    className: 'bg-green-500/15 text-green-400 border-green-500/25',
    pulse: 'bg-green-400',
  },
};

export default function PopularBadge({
  variant = 'popular',
  text,
  size = 'default',
}) {
  const config = variants[variant] || variants.popular;
  const Icon = config.icon;
  const label = text || config.text;

  const sizeClasses = size === 'sm'
    ? 'px-2 py-0.5 text-[10px] gap-1'
    : 'px-3 py-1.5 text-xs gap-1.5';

  return (
    <span className={`inline-flex items-center font-semibold rounded-full border ${config.className} ${sizeClasses}`}>
      <span className="relative flex items-center justify-center">
        <span className={`absolute w-full h-full rounded-full ${config.pulse} animate-ping opacity-30`} />
        <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
      </span>
      {label}
    </span>
  );
}
