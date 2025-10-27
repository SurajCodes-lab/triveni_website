'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '@/utilis/analytics';

/**
 * PageTracker Component
 *
 * Automatically tracks all page views and navigation across the website.
 * Add this component to your root layout to enable site-wide page tracking.
 *
 * Tracks:
 * - Page URL
 * - Page title
 * - Query parameters
 * - Navigation between pages
 */
export default function PageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get page name from pathname
    const pageName = pathname === '/'
      ? 'homepage'
      : pathname.replace(/^\//, '').replace(/\//g, '_') || 'unknown';

    // Build query string if exists
    const queryString = searchParams.toString();
    const fullUrl = queryString ? `${pathname}?${queryString}` : pathname;

    // Track the page view
    trackPageView(pageName, {
      page_path: pathname,
      page_url: fullUrl,
      page_query: queryString || 'none',
      referrer: document.referrer || 'direct'
    });

    // Log in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log('📄 Page View Tracked:', {
        pageName,
        pathname,
        fullUrl
      });
    }
  }, [pathname, searchParams]);

  // This component doesn't render anything
  return null;
}
