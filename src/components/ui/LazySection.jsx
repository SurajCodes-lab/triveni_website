'use client';

import { useRef, useState, useEffect } from 'react';

/**
 * LazySection - Defers rendering of below-fold content until it's near the viewport.
 * Uses Intersection Observer to avoid rendering heavy sections that aren't visible.
 * This reduces hydration cost and improves INP by keeping the initial render tree small.
 */
export default function LazySection({
  children,
  className = '',
  rootMargin = '200px',
  fallback = null,
  minHeight = '400px',
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : (fallback || <div style={{ minHeight }} />)}
    </div>
  );
}
