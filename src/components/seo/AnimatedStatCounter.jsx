'use client';

/**
 * AnimatedStatCounter — IntersectionObserver-driven number animation
 *
 * Why it exists: animated counters are a proven engagement signal (dwell time,
 * scroll depth) — both feed Google's quality signals. Also makes pages "feel
 * premium" which directly improves bounce rate.
 *
 * Renders a single big stat with optional prefix (₹, +) and suffix (km, ★, %).
 * Counts from 0 to `value` over `duration` ms once visible. Respects
 * prefers-reduced-motion.
 */
import { useEffect, useRef, useState } from 'react';

export default function AnimatedStatCounter({
  value,
  prefix = '',
  suffix = '',
  duration = 1400,
  label,
  sublabel,
  className = '',
  valueClassName = 'text-4xl md:text-6xl font-black',
  labelClassName = 'text-xs md:text-sm uppercase tracking-widest text-white/60',
  format = 'integer', // 'integer' | 'decimal' | 'compact'
}) {
  const [display, setDisplay] = useState(0);
  const [seen, setSeen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !seen) {
          setSeen(true);
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setDisplay(value * eased);
            if (progress < 1) requestAnimationFrame(animate);
            else setDisplay(value);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, seen]);

  const formatted = (() => {
    const n = display;
    if (format === 'compact' && n >= 1000) {
      return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'K';
    }
    if (format === 'decimal') {
      return n.toFixed(1);
    }
    return Math.round(n).toLocaleString('en-IN');
  })();

  return (
    <div ref={ref} className={`stat-counter ${className}`}>
      <div className={valueClassName}>
        {prefix}
        <span>{formatted}</span>
        {suffix && <span className="text-xl md:text-3xl ml-1">{suffix}</span>}
      </div>
      {label && <div className={labelClassName}>{label}</div>}
      {sublabel && <div className="text-xs text-white/40 mt-1 line-clamp-2" title={typeof sublabel === 'string' ? sublabel : undefined}>{sublabel}</div>}
    </div>
  );
}
