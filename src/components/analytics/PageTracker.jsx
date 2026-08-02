'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackAIBotVisit } from '@/utilis/analytics';

/**
 * PageTracker Component
 *
 * Tracks page views on navigation. Uses only usePathname() (not useSearchParams)
 * to avoid forcing dynamic rendering on the root layout.
 */
export default function PageTracker() {
  const pathname = usePathname();

  // AEO/GEO instrumentation: fire `ai_bot_visit` GA4 event once per session
  // if an AI crawler with JS execution lands on this page. No-op for humans
  // and most non-rendering bots. See trackAIBotVisit JSDoc for rationale.
  useEffect(() => {
    trackAIBotVisit();
  }, []);

  useEffect(() => {
    const pageName = pathname === '/'
      ? 'homepage'
      : pathname.replace(/^\//, '').replace(/\//g, '_') || 'unknown';

    // Read search params from window.location instead of useSearchParams hook
    const queryString = typeof window !== 'undefined' ? window.location.search.replace('?', '') : '';
    const fullUrl = queryString ? `${pathname}?${queryString}` : pathname;

    trackPageView(pageName, {
      page_path: pathname,
      page_url: fullUrl,
      page_query: queryString || 'none',
      referrer: document.referrer || 'direct'
    });
  }, [pathname]);

  return null;
}
