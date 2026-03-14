'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal — lightweight scroll-triggered entrance animation.
 * Uses IntersectionObserver for performance. No external dependencies.
 */
export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 600,
  distance = 30,
  once = true,
  threshold = 0.1,
  stagger = 0,
  as: Component = 'div',
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const directionMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none',
  };

  const totalDelay = delay + stagger;

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : directionMap[direction] || directionMap.up,
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${totalDelay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${totalDelay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}

/**
 * ScrollRevealGroup — wraps children and applies staggered delays.
 */
export function ScrollRevealGroup({
  children,
  className = '',
  staggerDelay = 100,
  direction = 'up',
  ...props
}) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <ScrollReveal key={i} direction={direction} stagger={i * staggerDelay} {...props}>
              {child}
            </ScrollReveal>
          ))
        : <ScrollReveal direction={direction} {...props}>{children}</ScrollReveal>
      }
    </div>
  );
}
