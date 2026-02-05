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
  CONTACT_US: 'ads_conversion_Contact_Us_1',           // Contact form / general inquiry
  PHONE_CALL: 'ads_conversion_Phone_Call_1',           // Phone call clicks (create in Google Ads)
  WHATSAPP_CLICK: 'ads_conversion_WhatsApp_Click_1',   // WhatsApp clicks (create in Google Ads)
  FORM_SUBMISSION: 'ads_conversion_Form_Submit_1',     // Form submissions (create in Google Ads)
  QUOTE_REQUEST: 'ads_conversion_Quote_Request_1',     // Quote requests (create in Google Ads)
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
  // Track in GA4
  trackConversion('phone_call', {
    event_label: `call_from_${location}`,
    button_location: location,
    phone_number: phoneNumber,
    contact_method: 'phone_call'
  });

  // Fire Google Ads Conversion
  fireGoogleAdsConversion(GOOGLE_ADS_EVENTS.PHONE_CALL, 300);
};

/**
 * Track WhatsApp clicks (CONVERSION)
 * @param {string} location - Where the WhatsApp button was clicked
 * @param {string} message - Pre-filled message
 * @param {string} context - Additional context (service type, package name, etc.)
 */
export const trackWhatsAppClick = (location, message = '', context = '') => {
  // Track in GA4
  trackConversion('whatsapp_inquiry', {
    event_label: `whatsapp_from_${location}`,
    button_location: location,
    message_type: message ? 'prefilled' : 'empty',
    contact_method: 'whatsapp',
    inquiry_context: context
  });

  // Fire Google Ads Conversion
  fireGoogleAdsConversion(GOOGLE_ADS_EVENTS.WHATSAPP_CLICK, 250);
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

  // Track in GA4
  trackConversion('form_submission', {
    event_label: `submit_${formName}`,
    ...sanitizedData
  });

  // Fire Google Ads Conversion
  fireGoogleAdsConversion(GOOGLE_ADS_EVENTS.FORM_SUBMISSION, 500);
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
  // Track in GA4
  trackConversion('contact_us', {
    event_label: `contact_from_${source}`,
    contact_source: source,
    ...details
  });

  // Fire Google Ads Contact Us Conversion
  fireGoogleAdsConversion(GOOGLE_ADS_EVENTS.CONTACT_US, 400);
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
  fireGAdsConversion,
  GOOGLE_ADS_EVENTS
};
