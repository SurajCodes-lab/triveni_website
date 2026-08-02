// src/components/ui/RouteLine.jsx
//
// Brand "route" motif: origin ●┄┄┄→ destination. A signature visual element for
// the Aurora design language. Mobile-first; truncates long names gracefully.

import { MapPin, ArrowRight } from '@/components/ui/icons';

export default function RouteLine({ from, to, tone = 'dark', className = '' }) {
  const dark = tone === 'dark';
  return (
    <div className={`flex items-center gap-2 sm:gap-3 min-w-0 ${className}`}>
      <span className="flex items-center gap-1.5 min-w-0">
        <MapPin className={`w-4 h-4 shrink-0 ${dark ? 'text-amber-400' : 'text-amber-600'}`} />
        <span className={`font-bold truncate ${dark ? 'text-white' : 'text-slate-900'}`}>{from}</span>
      </span>
      <span className={`flex-1 h-px min-w-[16px] route-dashed ${dark ? 'text-amber-400/50' : 'text-amber-500/50'}`} aria-hidden />
      <ArrowRight className={`w-4 h-4 shrink-0 ${dark ? 'text-amber-400' : 'text-amber-600'}`} aria-hidden />
      <span className="flex items-center gap-1.5 min-w-0">
        <span className={`font-bold truncate ${dark ? 'text-white' : 'text-slate-900'}`}>{to}</span>
      </span>
    </div>
  );
}
