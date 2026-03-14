'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Navigation, Milestone } from '@/components/ui/icons';

/**
 * RouteVisualization — animated visual path between origin and destination.
 * Shows distance, time, highway, and an animated car moving along the route.
 */
export default function RouteVisualization({
  origin,
  destination,
  distance,
  duration,
  highway,
  theme = 'dark',
  accentColor = 'amber',
}) {
  const pathRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isDark = theme === 'dark';

  const colorMap = {
    amber: { dot: 'bg-amber-400', glow: 'shadow-amber-400/40', text: 'text-amber-400', line: 'via-amber-400/40', ring: 'ring-amber-400/30', bg: 'bg-amber-400/10' },
    emerald: { dot: 'bg-emerald-400', glow: 'shadow-emerald-400/40', text: 'text-emerald-400', line: 'via-emerald-400/40', ring: 'ring-emerald-400/30', bg: 'bg-emerald-400/10' },
    violet: { dot: 'bg-violet-400', glow: 'shadow-violet-400/40', text: 'text-violet-400', line: 'via-violet-400/40', ring: 'ring-violet-400/30', bg: 'bg-violet-400/10' },
    cyan: { dot: 'bg-cyan-400', glow: 'shadow-cyan-400/40', text: 'text-cyan-400', line: 'via-cyan-400/40', ring: 'ring-cyan-400/30', bg: 'bg-cyan-400/10' },
    pink: { dot: 'bg-pink-400', glow: 'shadow-pink-400/40', text: 'text-pink-400', line: 'via-pink-400/40', ring: 'ring-pink-400/30', bg: 'bg-pink-400/10' },
  };
  const c = colorMap[accentColor] || colorMap.amber;

  return (
    <div ref={pathRef} className={`relative py-8 px-4 sm:px-6 ${isDark ? '' : ''}`}>
      <div className="max-w-3xl mx-auto">
        {/* Route line container */}
        <div className="relative flex items-center justify-between">
          {/* Origin */}
          <div className="flex flex-col items-center z-10 flex-shrink-0">
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${c.bg} border ${isDark ? 'border-white/10' : 'border-gray-200'} flex items-center justify-center ring-4 ${c.ring}`}>
              <MapPin className={`w-6 h-6 sm:w-7 sm:h-7 ${c.text}`} />
            </div>
            <p className={`mt-2 text-sm sm:text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {origin}
            </p>
            <p className={`text-[10px] uppercase tracking-widest font-semibold ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
              Pickup
            </p>
          </div>

          {/* Animated path */}
          <div className="flex-1 mx-4 sm:mx-8 relative">
            {/* Background line */}
            <div className={`absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />

            {/* Animated gradient line */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-gradient-to-r from-transparent ${c.line} to-transparent`}
              style={{
                width: animated ? '100%' : '0%',
                transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
              }}
            />

            {/* Animated dot (car) */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${c.dot} shadow-lg ${c.glow}`}
              style={{
                left: animated ? 'calc(100% - 6px)' : '0%',
                transition: 'left 2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
                opacity: animated ? 1 : 0,
              }}
            />

            {/* Dashed dots along path */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white/10' : 'bg-gray-300'}`}
                  style={{
                    opacity: animated ? 1 : 0,
                    transition: `opacity 0.4s ease ${0.3 + i * 0.15}s`,
                  }}
                />
              ))}
            </div>

            {/* Info badges along route */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-4"
              style={{
                opacity: animated ? 1 : 0,
                transform: animated ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(8px)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
              }}
            >
              {distance && (
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${isDark ? 'bg-white/5 text-white/60 border border-white/10' : 'bg-gray-50 text-gray-600 border border-gray-200'}`}>
                  <Navigation className="w-2.5 h-2.5" />
                  {distance}
                </span>
              )}
              {duration && (
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${isDark ? 'bg-white/5 text-white/60 border border-white/10' : 'bg-gray-50 text-gray-600 border border-gray-200'}`}>
                  <Clock className="w-2.5 h-2.5" />
                  {duration}
                </span>
              )}
              {highway && (
                <span className={`hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${isDark ? 'bg-white/5 text-white/60 border border-white/10' : 'bg-gray-50 text-gray-600 border border-gray-200'}`}>
                  <Milestone className="w-2.5 h-2.5" />
                  {highway}
                </span>
              )}
            </div>
          </div>

          {/* Destination */}
          <div className="flex flex-col items-center z-10 flex-shrink-0">
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${c.bg} border ${isDark ? 'border-white/10' : 'border-gray-200'} flex items-center justify-center ring-4 ${c.ring}`}>
              <MapPin className={`w-6 h-6 sm:w-7 sm:h-7 ${c.text} fill-current`} />
            </div>
            <p className={`mt-2 text-sm sm:text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {destination}
            </p>
            <p className={`text-[10px] uppercase tracking-widest font-semibold ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
              Drop-off
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
