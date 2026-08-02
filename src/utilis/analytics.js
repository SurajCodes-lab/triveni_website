/**
 * Centralized Analytics Tracking Utility for Triveni Cabs
 *
 * Event Naming Convention:
 * - Use snake_case for all event names
 * - Format: {action}_{target}_{context}
 * - Examples: click_button_book_now, submit_form_contact, view_page_services
 *
 * Event Categories:
 * - conversion: Actions that indicate conversion intent (calls, WhatsApp, form submissions)
 * - engagement: User interactions (clicks, hovers, scrolls)
 * - navigation: Page views and navigation events
 * - form_interaction: Form-related events
 */

// Check if gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Bot detection — filters obvious non-humans out of conversion events.
 *
 * Why: GA4's default bot filter catches known spiders but misses headless
 * browsers (Puppeteer, Playwright) and link-preview crawlers (WhatsApp,
 * Facebook, Slack unfurlers). These trigger conversion events on page load,
 * inflating WhatsApp click counts. Returns true if this session looks
 * automated and the event should be dropped.
 */
const isBot = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return true;
  if (navigator.webdriver) return true;
  const ua = (navigator.userAgent || '').toLowerCase();
  const botPatterns = [
    'bot', 'crawler', 'spider', 'scraper', 'headless',
    'puppeteer', 'playwright', 'phantom', 'selenium',
    'whatsapp', 'facebookexternalhit', 'slackbot', 'discordbot',
    'twitterbot', 'linkedinbot', 'pinterestbot', 'redditbot',
    'preview', 'prerender',
  ];
  if (botPatterns.some(p => ua.includes(p))) return true;
  // Missing standard human-browser traits
  if (!navigator.languages || navigator.languages.length === 0) return true;
  return false;
};

/**
 * Per-session, per-key dedup gate. Fires callback only if key hasn't fired
 * in this session. Uses sessionStorage so a hard reload resets but within-tab
 * navigation dedupes correctly.
 *
 * This is the single biggest fix for the "GA says 24, real inquiries 7" gap:
 * previously one click could fire 2-3 times due to React re-renders +
 * bubbling + handler duplication. Now guaranteed max once per session.
 */
const hasFiredThisSession = (key) => {
  if (typeof window === 'undefined' || !window.sessionStorage) return false;
  try {
    const fired = window.sessionStorage.getItem(`trk_${key}`);
    if (fired) return true;
    window.sessionStorage.setItem(`trk_${key}`, Date.now().toString());
    return false;
  } catch {
    return false;
  }
};

/**
 * AI-bot detection — for AEO/GEO instrumentation, NOT for filtering.
 *
 * `isBot()` above filters bots OUT of conversion events (correct behavior
 * for conversions). This helper does the opposite: it identifies the specific
 * AI bot when one is present so we can log it as a separate "ai_bot_visit"
 * event. Returns the bot name string or null.
 *
 * Most AI crawlers fetch HTML only and never run JS, so this only catches
 * agent-style renderers (ChatGPT-User, OAI-SearchBot in browse mode, some
 * Perplexity rendering passes). Even partial coverage gives directional
 * signal — month-over-month trend tells us if our AEO investment is moving
 * crawl frequency.
 */
const AI_BOT_PATTERNS = [
  'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
  'ClaudeBot', 'Claude-Web', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot-Extended',
  'Bytespider', 'Amazonbot', 'CCBot', 'Meta-ExternalAgent',
  'Diffbot', 'cohere-ai', 'YouBot',
];

export const detectAIBot = (userAgent) => {
  const ua = userAgent || (typeof navigator !== 'undefined' ? navigator.userAgent : '') || '';
  return AI_BOT_PATTERNS.find((bot) => ua.includes(bot)) || null;
};

/**
 * Fire a one-time-per-session `ai_bot_visit` GA4 event when an AI crawler
 * with JS execution lands on a page. Idempotent via sessionStorage so a
 * single agent rendering pass produces a single event regardless of how
 * many components mount.
 *
 * Call from `app/layout.js` <Script>'s onLoad — safe to call from anywhere
 * client-side. Server-side calls become no-ops.
 */
export const trackAIBotVisit = () => {
  if (typeof window === 'undefined') return;
  const bot = detectAIBot();
  if (!bot) return;
  try {
    if (window.sessionStorage.getItem('ai_bot_logged')) return;
    window.sessionStorage.setItem('ai_bot_logged', '1');
  } catch {
    // If sessionStorage blocked (e.g., privacy mode), still fire once per pageload
  }
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'ai_bot_visit', {
      bot_name: bot,
      page_path: window.location.pathname,
      page_location: window.location.href,
    });
  }
};

/**
 * Generate a short, unique tracking token that we embed in outbound
 * WhatsApp/Call URLs. When the client receives the message, they can match
 * "ref=abc123" back to the exact page + session that triggered it — the
 * only way to reconcile GA events with actual inbound conversations.
 */
const generateTrackingToken = () => {
  if (typeof window === 'undefined') return 'ssr';
  const rand = Math.random().toString(36).slice(2, 8);
  const ts = Date.now().toString(36).slice(-4);
  return `${ts}${rand}`;
};

/**
 * Google Ads Conversion Events
 * These are the event names from Google Ads conversion setup
 *
 * To add more conversions:
 * 1. Go to Google Ads → Goals → Conversions → Summary
 * 2. Create a new conversion action
 * 3. Copy the event name (e.g., 'ads_conversion_Contact_Us_1')
 * 4. Add it below
 */
const GOOGLE_ADS_EVENTS = {
  PHONE_CALL: 'conversion_phone_call',                 // Phone call clicks
  WHATSAPP_CLICK: 'conversion_whatsapp_inquiry',       // WhatsApp clicks
  FORM_SUBMISSION: 'conversion_form_submission',        // Form submissions
  CONTACT_US: 'conversion_contact_us',                 // Contact form / general inquiry
  QUOTE_REQUEST: 'conversion_quote_request',           // Quote requests
};

/**
 * Fire Google Ads Conversion using event name
 * @param {string} eventName - The event name from Google Ads (e.g., 'ads_conversion_Contact_Us_1')
 * @param {number} value - Conversion value in INR (optional)
 */
const fireGoogleAdsConversion = (eventName, value = 0) => {
  if (!isGtagAvailable()) return;

  const eventParams = {};

  // Add value if provided
  if (value > 0) {
    eventParams.value = value;
    eventParams.currency = 'INR';
  }

  window.gtag('event', eventName, eventParams);

  if (process.env.NODE_ENV === 'development') {
    console.log('🎯 Google Ads Conversion Fired:', {
      event: eventName,
      ...eventParams
    });
  }
};

/**
 * Get detailed page context
 * Extracts page URL, path, slug, and other context information
 */
const getPageContext = () => {
  if (typeof window === 'undefined') return {};

  const url = new URL(window.location.href);
  const pathname = url.pathname;

  // Extract page name from pathname
  const pathParts = pathname.split('/').filter(Boolean);
  const pageName = pathParts.length === 0 ? 'homepage' : pathParts[0];

  // Extract slug if exists (for dynamic pages like /tour-package/manali or /delhi)
  const slug = pathParts.length > 1 ? pathParts[pathParts.length - 1] : null;

  // Determine page type
  let pageType = 'static';
  if (pathname.includes('/tour-package/')) pageType = 'tour_package_detail';
  else if (pathname.includes('/religious-tours/')) pageType = 'religious_tour_detail';
  else if (pathname.includes('/tempo-traveller/')) pageType = 'tempo_route_detail';
  else if (pathname.includes('/vehicles/')) pageType = 'vehicle_detail';
  else if (pathname.includes('/tourist-attractions/')) pageType = 'tourist_attraction';
  else if (pathParts.length === 1 && pathname !== '/' && !pathname.includes('-')) pageType = 'city_page';

  return {
    page_url: window.location.href,
    page_path: pathname,
    page_full_path: pathname,
    page_slug: slug,
    page_section: pageName,
    page_type: pageType,
    page_title: document.title,
    page_query_params: url.search || 'none',
    page_hash: url.hash || 'none',
    referrer: document.referrer || 'direct',
    user_agent: navigator.userAgent.substring(0, 100), // First 100 chars
  };
};

/**
 * Base tracking function
 * @param {string} eventName - Name of the event
 * @param {object} parameters - Event parameters
 */
export const trackEvent = (eventName, parameters = {}) => {
  if (isGtagAvailable()) {
    const pageContext = getPageContext();

    window.gtag('event', eventName, {
      timestamp: new Date().toISOString(),
      ...pageContext,
      ...parameters
    });

    // Console log in development for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', eventName, {
        ...pageContext,
        ...parameters
      });
    }
  }
};

/**
 * Track conversion events (High Priority)
 */
export const trackConversion = (conversionType, details = {}) => {
  trackEvent(`conversion_${conversionType}`, {
    event_category: 'conversion',
    conversion_type: conversionType,
    ...details
  });
};

/**
 * Track phone call clicks (CONVERSION)
 * @param {string} location - Where the call button was clicked
 * @param {string} phoneNumber - Phone number being called
 */
export const trackPhoneCall = (location, phoneNumber = '') => {
  trackConversion('phone_call', {
    event_label: `call_from_${location}`,
    button_location: location,
    phone_number: phoneNumber,
    contact_method: 'phone_call',
    value: 300,
    currency: 'INR'
  });
  // Log the call to the Sheet as a "call placed" event (page + time) so the
  // Sheet shows the full enquiry picture alongside form leads + WhatsApp.
  postLeadEvent({ type: 'call_placed', location });
};

/**
 * Track WhatsApp clicks (CONVERSION) — 2026 deduplicated version.
 *
 * Diagnosis: previously fired multiple times per real click due to React
 * re-render, event bubbling, and GTM listener overlap, inflating GA4
 * counts by 30-60% vs. actual inbound conversations. Fixed with:
 *   1. Bot filter — drops unfurler/crawler triggers.
 *   2. Session dedup — max one event per page per session.
 *   3. Tracking token — embedded in the WhatsApp message so the client
 *      can reconcile GA events ↔ real messages ↔ bookings.
 *   4. Two-step funnel — fires `whatsapp_click` (intent) here; the
 *      separate `whatsapp_message_sent` event fires from a visibility
 *      listener when the user returns to the tab after >8s (indicating
 *      they actually typed and sent vs. just tapped accidentally).
 *
 * @param {string} location - Where the WhatsApp button was clicked
 * @param {string} message - Pre-filled message
 * @param {string} context - Additional context (service type, package name, etc.)
 * @returns {string} tracking token (caller can append ?ref=<token> to the wa.me URL)
 */
// Fire-and-forget log of an event to the lead Sheet (via /api/lead).
// Used for WhatsApp click/sent + phone-call events so the Sheet shows the full
// enquiry picture, not just form leads. Never blocks UX.
const postLeadEvent = (body) => {
  if (typeof window === 'undefined') return;
  try {
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({ source: window.location.pathname, ...body }),
    }).catch(() => {});
  } catch { /* never block UX */ }
};

export const trackWhatsAppClick = (location, message = '', context = '') => {
  if (isBot()) return '';
  const pagePath = typeof window !== 'undefined' ? window.location.pathname : 'ssr';
  const dedupKey = `wa_${pagePath}_${location}`;
  if (hasFiredThisSession(dedupKey)) {
    // Still fire a light "repeat click" engagement event for diagnostics,
    // but don't double-count the conversion.
    trackEvent('whatsapp_repeat_click', {
      event_category: 'engagement',
      button_location: location,
    });
    return '';
  }
  const trackingToken = generateTrackingToken();
  // A WhatsApp CLICK is intent, NOT a conversion — counting it as a conversion is
  // what inflated the dashboard (30-40 vs the real ~8-10). Fire it as engagement
  // only. The single real WhatsApp conversion is `whatsapp_message_sent` (confirmed
  // below) + the Sheet capture.
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: `whatsapp_from_${location}`,
    button_location: location,
    message_type: message ? 'prefilled' : 'empty',
    inquiry_context: context,
    tracking_token: trackingToken,
  });
  postLeadEvent({ type: 'whatsapp_click', location, toCity: context || '' });
  // Arm the two-step funnel: if the user comes back to the tab after >8s,
  // they probably actually sent the message. Fires once.
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const clickAt = Date.now();
    let fired = false;
    const onVisible = () => {
      if (fired) return;
      if (document.visibilityState === 'visible') {
        const elapsed = Date.now() - clickAt;
        if (elapsed > 8000 && elapsed < 10 * 60 * 1000) {
          fired = true;
          trackEvent('whatsapp_message_sent', {
            event_category: 'conversion',
            tracking_token: trackingToken,
            button_location: location,
            elapsed_ms: elapsed,
            value: 250,
            currency: 'INR',
          });
          postLeadEvent({ type: 'whatsapp_sent', location, elapsed_ms: elapsed });
        }
        document.removeEventListener('visibilitychange', onVisible);
      }
    };
    document.addEventListener('visibilitychange', onVisible, { once: false });
    // Safety timeout: 10 minutes then stop listening
    setTimeout(() => {
      document.removeEventListener('visibilitychange', onVisible);
    }, 10 * 60 * 1000);
  }
  return trackingToken;
};

/**
 * Track CTA view-impression (IntersectionObserver).
 * Pairs with click/send events to build a real funnel:
 *   cta_viewed → whatsapp_click → whatsapp_message_sent → real booking
 *
 * Use: in a useEffect, observe the CTA element; when it scrolls into view,
 * call this once.
 *
 * @param {string} ctaName - E.g., 'mobile_sticky_whatsapp', 'hero_call_button'
 * @param {string} location - Page section / context
 */
export const trackCtaImpression = (ctaName, location = '') => {
  if (isBot()) return;
  const pagePath = typeof window !== 'undefined' ? window.location.pathname : 'ssr';
  const dedupKey = `imp_${pagePath}_${ctaName}`;
  if (hasFiredThisSession(dedupKey)) return;
  trackEvent('cta_viewed', {
    event_category: 'engagement',
    cta_name: ctaName,
    cta_location: location,
  });
};

/**
 * Helper to append tracking token to a wa.me URL. Returns the same URL
 * untouched if the token is empty (bot-suppressed or duplicate click).
 *
 * Usage:
 *   const token = trackWhatsAppClick('hero', message, 'delhi-agra-route');
 *   window.open(appendTrackingToken('https://wa.me/917668570551?text=...', token), '_blank');
 */
export const appendTrackingToken = (url, token) => {
  if (!token || !url) return url;
  const separator = url.includes('?') ? '&' : '?';
  // Embed token in the message text so the client sees it on arrival,
  // OR append as URL param for outbound redirects that preserve query.
  if (url.includes('wa.me/') && url.includes('text=')) {
    return `${url}%20ref%3A${encodeURIComponent(token)}`;
  }
  return `${url}${separator}ref=${encodeURIComponent(token)}`;
};

/**
 * Track form submissions (CONVERSION)
 * @param {string} formName - Name of the form
 * @param {object} formData - Form data (sanitized)
 */
export const trackFormSubmission = (formName, formData = {}) => {
  // Remove sensitive data before tracking
  const sanitizedData = {
    form_name: formName,
    has_email: !!formData.email,
    has_phone: !!formData.phone,
    has_name: !!formData.name,
    service_type: formData.serviceType || formData.service || '',
    ...formData
  };

  // Remove actual personal data
  delete sanitizedData.email;
  delete sanitizedData.phone;
  delete sanitizedData.name;
  delete sanitizedData.message;

  trackConversion('form_submission', {
    event_label: `submit_${formName}`,
    ...sanitizedData,
    value: 500,
    currency: 'INR'
  });
};

/**
 * Track form interactions
 * @param {string} formName - Name of the form
 * @param {string} action - Action taken (started, field_filled, validation_error, etc.)
 * @param {string} fieldName - Field name (optional)
 */
export const trackFormInteraction = (formName, action, fieldName = '') => {
  trackEvent(`form_${action}`, {
    event_category: 'form_interaction',
    event_label: `${formName}_${action}`,
    form_name: formName,
    field_name: fieldName,
    interaction_type: action
  });
};

/**
 * Track booking actions
 * @param {string} action - Booking action (started, step_completed, abandoned, completed)
 * @param {object} details - Booking details
 */
export const trackBooking = (action, details = {}) => {
  trackEvent(`booking_${action}`, {
    event_category: 'conversion',
    event_label: `booking_${action}`,
    booking_action: action,
    ...details
  });
};

/**
 * Track button clicks
 * @param {string} buttonName - Name/label of the button
 * @param {string} location - Where the button is located
 * @param {string} targetUrl - URL the button leads to (optional)
 */
export const trackButtonClick = (buttonName, location, targetUrl = '') => {
  trackEvent('click_button', {
    event_category: 'engagement',
    event_label: `${buttonName}_${location}`,
    button_name: buttonName,
    button_location: location,
    target_url: targetUrl
  });
};

/**
 * Track navigation events
 * @param {string} linkText - Text of the navigation link
 * @param {string} targetUrl - URL being navigated to
 * @param {string} location - Where the link was (header, footer, sidebar, etc.)
 */
export const trackNavigation = (linkText, targetUrl, location = 'header') => {
  trackEvent('click_navigation', {
    event_category: 'navigation',
    event_label: `nav_${linkText.toLowerCase().replace(/\s+/g, '_')}`,
    link_text: linkText,
    target_url: targetUrl,
    navigation_location: location
  });
};

/**
 * Track page views
 * @param {string} pageName - Name of the page
 * @param {object} pageData - Additional page data
 */
export const trackPageView = (pageName, pageData = {}) => {
  trackEvent('page_view', {
    event_category: 'navigation',
    event_label: `view_${pageName}`,
    page_name: pageName,
    ...pageData
  });
};

/**
 * Track scroll depth
 * @param {number} depth - Scroll depth percentage (25, 50, 75, 100)
 * @param {string} pageName - Name of the page
 */
export const trackScrollDepth = (depth, pageName = '') => {
  trackEvent(`scroll_depth_${depth}`, {
    event_category: 'engagement',
    event_label: `scroll_${depth}_percent`,
    scroll_percentage: depth,
    page_name: pageName
  });
};

/**
 * Track hover events
 * @param {string} elementName - Name of the element being hovered
 * @param {string} location - Location of the element
 */
export const trackHover = (elementName, location) => {
  trackEvent('hover_element', {
    event_category: 'engagement',
    event_label: `hover_${elementName}`,
    element_name: elementName,
    element_location: location
  });
};

/**
 * Track modal interactions
 * @param {string} modalName - Name of the modal
 * @param {string} action - Action taken (opened, closed, submitted)
 */
export const trackModal = (modalName, action) => {
  trackEvent(`modal_${action}`, {
    event_category: 'engagement',
    event_label: `${modalName}_${action}`,
    modal_name: modalName,
    modal_action: action
  });
};

/**
 * Track service inquiries
 * @param {string} serviceName - Name of the service
 * @param {string} serviceType - Type of service (tour, rental, etc.)
 * @param {string} location - Where the inquiry was initiated
 */
export const trackServiceInquiry = (serviceName, serviceType, location) => {
  trackEvent('inquiry_service', {
    event_category: 'conversion',
    event_label: `inquiry_${serviceName.toLowerCase().replace(/\s+/g, '_')}`,
    service_name: serviceName,
    service_type: serviceType,
    inquiry_location: location
  });
};

/**
 * Track vehicle/tour package selection
 * @param {string} itemName - Name of the vehicle/package
 * @param {string} itemType - Type (sedan, suv, tour_package, etc.)
 * @param {object} details - Additional details (price, duration, etc.)
 */
export const trackItemSelection = (itemName, itemType, details = {}) => {
  trackEvent('select_item', {
    event_category: 'engagement',
    event_label: `select_${itemType}_${itemName}`,
    item_name: itemName,
    item_type: itemType,
    ...details
  });
};

/**
 * Track carousel/slider interactions
 * @param {string} carouselName - Name of the carousel
 * @param {string} direction - Direction (next, prev, indicator)
 * @param {number} slideIndex - Current slide index
 */
export const trackCarousel = (carouselName, direction, slideIndex = 0) => {
  trackEvent('interact_carousel', {
    event_category: 'engagement',
    event_label: `carousel_${carouselName}_${direction}`,
    carousel_name: carouselName,
    direction: direction,
    slide_index: slideIndex
  });
};

/**
 * Track social media clicks
 * @param {string} platform - Social media platform (facebook, instagram, twitter)
 * @param {string} location - Where the link was (header, footer)
 */
export const trackSocialClick = (platform, location) => {
  trackEvent('click_social_media', {
    event_category: 'engagement',
    event_label: `social_${platform}`,
    platform: platform,
    link_location: location
  });
};

/**
 * Track search events
 * @param {string} searchTerm - Search query
 * @param {number} resultsCount - Number of results
 */
export const trackSearch = (searchTerm, resultsCount = 0) => {
  trackEvent('search', {
    event_category: 'engagement',
    event_label: 'site_search',
    search_term: searchTerm,
    results_count: resultsCount
  });
};

/**
 * Track filter/sort actions
 * @param {string} filterType - Type of filter (price, vehicle_type, etc.)
 * @param {string} filterValue - Selected value
 */
export const trackFilter = (filterType, filterValue) => {
  trackEvent('apply_filter', {
    event_category: 'engagement',
    event_label: `filter_${filterType}`,
    filter_type: filterType,
    filter_value: filterValue
  });
};

/**
 * Track errors
 * @param {string} errorType - Type of error
 * @param {string} errorMessage - Error message
 * @param {string} location - Where the error occurred
 */
export const trackError = (errorType, errorMessage, location) => {
  trackEvent('error_occurred', {
    event_category: 'error',
    event_label: `error_${errorType}`,
    error_type: errorType,
    error_message: errorMessage,
    error_location: location
  });
};

/**
 * Track performance metrics
 * @param {string} metricName - Name of the metric
 * @param {number} value - Metric value
 */
export const trackPerformance = (metricName, value) => {
  trackEvent('performance_metric', {
    event_category: 'performance',
    event_label: metricName,
    metric_name: metricName,
    metric_value: value
  });
};

/**
 * Track video interactions (if any)
 * @param {string} videoName - Name of the video
 * @param {string} action - Action (play, pause, complete)
 */
export const trackVideo = (videoName, action) => {
  trackEvent(`video_${action}`, {
    event_category: 'engagement',
    event_label: `video_${videoName}_${action}`,
    video_name: videoName,
    video_action: action
  });
};

/**
 * Track file downloads
 * @param {string} fileName - Name of the file
 * @param {string} fileType - Type of file (pdf, image, etc.)
 */
export const trackDownload = (fileName, fileType) => {
  trackEvent('download_file', {
    event_category: 'engagement',
    event_label: `download_${fileType}`,
    file_name: fileName,
    file_type: fileType
  });
};

/**
 * Track Contact Us conversion (Google Ads)
 * Use this when user submits contact form, clicks contact button, etc.
 * @param {string} source - Where the contact action came from
 * @param {object} details - Additional details
 */
export const trackContactUsConversion = (source = 'unknown', details = {}) => {
  trackConversion('contact_us', {
    event_label: `contact_from_${source}`,
    contact_source: source,
    ...details,
    value: 400,
    currency: 'INR'
  });
};

/**
 * Track Quote Request conversion
 * Use this when user requests a quote for any service
 * @param {string} source - Where the quote was requested from
 * @param {object} details - Additional details (service type, route, etc.)
 */
export const trackQuoteRequest = (source = 'unknown', details = {}) => {
  trackConversion('quote_request', {
    event_label: `quote_from_${source}`,
    quote_source: source,
    ...details,
    value: 350,
    currency: 'INR'
  });
};

/**
 * Manually fire any Google Ads conversion
 * @param {string} eventName - Event name (use GOOGLE_ADS_EVENTS constants)
 * @param {number} value - Conversion value
 */
export const fireGAdsConversion = (eventName, value = 0) => {
  fireGoogleAdsConversion(eventName, value);
};

// Export Google Ads event names for manual use
export { GOOGLE_ADS_EVENTS };

// Export all tracking functions
export default {
  trackEvent,
  trackConversion,
  trackPhoneCall,
  trackWhatsAppClick,
  trackCtaImpression,
  appendTrackingToken,
  trackFormSubmission,
  trackFormInteraction,
  trackBooking,
  trackButtonClick,
  trackNavigation,
  trackPageView,
  trackScrollDepth,
  trackHover,
  trackModal,
  trackServiceInquiry,
  trackItemSelection,
  trackCarousel,
  trackSocialClick,
  trackSearch,
  trackFilter,
  trackError,
  trackPerformance,
  trackVideo,
  trackDownload,
  trackContactUsConversion,
  trackQuoteRequest,
  fireGAdsConversion,
  GOOGLE_ADS_EVENTS
};
