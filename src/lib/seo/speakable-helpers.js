/**
 * Speakable + dateModified + Article schema helpers
 *
 * Why: Voice assistants (Google Assistant, Alexa, Siri) prefer pages with
 * `SpeakableSpecification` markup that tells them which CSS selectors contain
 * the spoken-answer-friendly summary. Article pages also need `dateModified`
 * to signal freshness — Google heavily weights freshness for travel/local
 * content. These helpers ship a consistent shape across all guide pages.
 */
import { resolveAuthor } from './authors';

/**
 * Build a SpeakableSpecification block. Pass an array of CSS selectors
 * pointing to the elements that contain the voice-friendly answer
 * (typically: H1, lead paragraph, FAQ first answer).
 *
 * Default selectors target our guide-page convention:
 *   - .speakable-headline (H1 hero)
 *   - .speakable-lead (first paragraph)
 *   - .speakable-faq-first (first FAQ answer)
 */
export function getSpeakableSchema(selectors = ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']) {
  return {
    "@type": "SpeakableSpecification",
    "cssSelector": selectors
  };
}

/**
 * Returns today's date in YYYY-MM-DD format. Use as `dateModified` to mark
 * page content as freshly served. Re-evaluated on every ISR build (every 1h
 * given `revalidate = 3600`).
 */
export function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

/**
 * Returns ISO timestamp for `dateModified`. ISR rebuilds will refresh this
 * on each revalidation cycle, signalling Google that content was checked
 * recently even if no diff was applied.
 */
export function getNowIso() {
  return new Date().toISOString();
}

/**
 * Build an Article (or BlogPosting) schema for guide-style content (travel
 * guide, food tour, shopping guide, "beyond X" pages, day-trip itineraries).
 *
 * Args:
 *  - slug: page URL slug (e.g., "delhi-travel-guide")
 *  - headline: page H1 (≤110 chars)
 *  - description: meta description / excerpt
 *  - image: absolute URL to OG image
 *  - datePublished: ISO date when first published (default 2026-01-01)
 *  - dateModified: ISO date or null (auto = today)
 *  - author/publisher: defaults to Triveni Cabs Organization
 *  - speakableSelectors: array of CSS selectors for voice search
 */
export function getArticleSchema({
  slug,
  headline,
  description,
  image,
  datePublished = '2026-01-01',
  dateModified = null,
  authorName = 'editorial',
  type = 'Article',
  speakableSelectors = null
}) {
  // Resolve author into a full Person entity for E-E-A-T (AEO/GEO standard S6).
  // Backward-compatible: legacy callers passing a string name still produce
  // valid schema, but new pages should pass 'founder' | 'editorial' | 'operations'.
  const authorEntity = resolveAuthor(authorName);
  const baseUrl = 'https://www.trivenicabs.in';
  const url = `${baseUrl}/${slug}`;
  const finalImage = image && image.startsWith('http') ? image : `${baseUrl}${image || '/images/triveni-cabs-og.jpg'}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#article`,
    "headline": headline,
    "description": description,
    "url": url,
    "image": {
      "@type": "ImageObject",
      "url": finalImage,
      "width": 1200,
      "height": 630
    },
    "datePublished": datePublished,
    "dateModified": dateModified || getTodayDate(),
    "author": authorEntity,
    "publisher": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "Triveni Cabs",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo/logo2.webp`,
        "width": 200,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "inLanguage": "en-IN"
  };

  if (speakableSelectors) {
    schema.speakable = getSpeakableSchema(speakableSelectors);
  }

  return schema;
}

/**
 * Wraps an existing FAQ schema with Speakable specification. Voice assistants
 * read the first matched FAQ answer aloud. Use when you have an existing FAQ
 * block and want to make it voice-friendly without rewriting the FAQ.
 */
export function withSpeakableFAQ(faqSchema, faqContainerSelector = '.faq-section') {
  return {
    ...faqSchema,
    speakable: getSpeakableSchema([faqContainerSelector + ' .faq-answer-1', faqContainerSelector + ' .faq-answer-2'])
  };
}

/**
 * Build a HowTo schema for process pages (booking, reaching, bargaining).
 *
 * Args:
 *  - name: HowTo title
 *  - description: short summary
 *  - totalTime: ISO 8601 duration (PT5M = 5 minutes)
 *  - estimatedCost: { currency, value } or null
 *  - steps: array of { name, text, image? }
 */
export function getHowToSchema({ name, description, totalTime = 'PT5M', estimatedCost = null, steps = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "totalTime": totalTime,
    "step": steps.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.name,
      "text": s.text,
      ...(s.image ? { "image": s.image.startsWith('http') ? s.image : `https://www.trivenicabs.in${s.image}` } : {})
    }))
  };
  if (estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      "currency": estimatedCost.currency || "INR",
      "value": String(estimatedCost.value)
    };
  }
  return schema;
}

/**
 * City-level Place / TouristDestination schemas for top 30 Indian cities.
 * Used to anchor city pages, trip-cost guides, how-to-reach guides to
 * real-world geographic entities for AEO/GEO entity graphs.
 *
 * Mirrors the AIRPORT_PLACES pattern in airportOutstationData.js.
 */
const _CITY_PLACES = {
  delhi: { name: 'Delhi', state: 'Delhi', postal: '110001', lat: '28.6139', lng: '77.2090', alt: 'New Delhi', type: 'City' },
  jaipur: { name: 'Jaipur', state: 'Rajasthan', postal: '302001', lat: '26.9124', lng: '75.7873', alt: 'Pink City', type: 'City' },
  agra: { name: 'Agra', state: 'Uttar Pradesh', postal: '282001', lat: '27.1767', lng: '78.0081', alt: null, type: 'City' },
  chandigarh: { name: 'Chandigarh', state: 'Chandigarh UT', postal: '160001', lat: '30.7333', lng: '76.7794', alt: 'City Beautiful', type: 'City' },
  shimla: { name: 'Shimla', state: 'Himachal Pradesh', postal: '171001', lat: '31.1048', lng: '77.1734', alt: 'Queen of Hills', type: 'City' },
  manali: { name: 'Manali', state: 'Himachal Pradesh', postal: '175131', lat: '32.2396', lng: '77.1887', alt: null, type: 'City' },
  amritsar: { name: 'Amritsar', state: 'Punjab', postal: '143001', lat: '31.6340', lng: '74.8723', alt: null, type: 'City' },
  haridwar: { name: 'Haridwar', state: 'Uttarakhand', postal: '249401', lat: '29.9457', lng: '78.1642', alt: null, type: 'City' },
  rishikesh: { name: 'Rishikesh', state: 'Uttarakhand', postal: '249201', lat: '30.0869', lng: '78.2676', alt: 'Yoga Capital', type: 'City' },
  dehradun: { name: 'Dehradun', state: 'Uttarakhand', postal: '248001', lat: '30.3165', lng: '78.0322', alt: null, type: 'City' },
  udaipur: { name: 'Udaipur', state: 'Rajasthan', postal: '313001', lat: '24.5854', lng: '73.7125', alt: 'City of Lakes', type: 'City' },
  jodhpur: { name: 'Jodhpur', state: 'Rajasthan', postal: '342001', lat: '26.2389', lng: '73.0243', alt: 'Blue City', type: 'City' },
  jaisalmer: { name: 'Jaisalmer', state: 'Rajasthan', postal: '345001', lat: '26.9157', lng: '70.9083', alt: 'Golden City', type: 'City' },
  pushkar: { name: 'Pushkar', state: 'Rajasthan', postal: '305022', lat: '26.4899', lng: '74.5511', alt: null, type: 'City' },
  ajmer: { name: 'Ajmer', state: 'Rajasthan', postal: '305001', lat: '26.4499', lng: '74.6399', alt: null, type: 'City' },
  varanasi: { name: 'Varanasi', state: 'Uttar Pradesh', postal: '221001', lat: '25.3176', lng: '82.9739', alt: 'Banaras', type: 'City' },
  lucknow: { name: 'Lucknow', state: 'Uttar Pradesh', postal: '226001', lat: '26.8467', lng: '80.9462', alt: 'City of Nawabs', type: 'City' },
  ayodhya: { name: 'Ayodhya', state: 'Uttar Pradesh', postal: '224001', lat: '26.7922', lng: '82.1998', alt: null, type: 'City' },
  mathura: { name: 'Mathura', state: 'Uttar Pradesh', postal: '281001', lat: '27.4924', lng: '77.6737', alt: null, type: 'City' },
  vrindavan: { name: 'Vrindavan', state: 'Uttar Pradesh', postal: '281121', lat: '27.5650', lng: '77.6593', alt: null, type: 'City' },
  mussoorie: { name: 'Mussoorie', state: 'Uttarakhand', postal: '248179', lat: '30.4598', lng: '78.0644', alt: 'Queen of Hills (Lesser-known)', type: 'City' },
  nainital: { name: 'Nainital', state: 'Uttarakhand', postal: '263001', lat: '29.3803', lng: '79.4636', alt: null, type: 'City' },
  'jim-corbett': { name: 'Jim Corbett', state: 'Uttarakhand', postal: '244715', lat: '29.5300', lng: '78.7747', alt: null, type: 'TouristDestination' },
  'mount-abu': { name: 'Mount Abu', state: 'Rajasthan', postal: '307501', lat: '24.5926', lng: '72.7156', alt: null, type: 'City' },
  bikaner: { name: 'Bikaner', state: 'Rajasthan', postal: '334001', lat: '28.0229', lng: '73.3119', alt: null, type: 'City' },
  ranthambore: { name: 'Ranthambore', state: 'Rajasthan', postal: '322001', lat: '26.0173', lng: '76.5026', alt: null, type: 'TouristDestination' },
  dharamshala: { name: 'Dharamshala', state: 'Himachal Pradesh', postal: '176215', lat: '32.2190', lng: '76.3234', alt: null, type: 'City' },
  kasol: { name: 'Kasol', state: 'Himachal Pradesh', postal: '175105', lat: '32.0098', lng: '77.3151', alt: null, type: 'City' },
  dalhousie: { name: 'Dalhousie', state: 'Himachal Pradesh', postal: '176304', lat: '32.5396', lng: '75.9743', alt: null, type: 'City' },
  noida: { name: 'Noida', state: 'Uttar Pradesh', postal: '201301', lat: '28.5355', lng: '77.3910', alt: null, type: 'City' },
  gurgaon: { name: 'Gurgaon', state: 'Haryana', postal: '122001', lat: '28.4595', lng: '77.0266', alt: 'Gurugram', type: 'City' },
  mohali: { name: 'Mohali', state: 'Punjab', postal: '160055', lat: '30.7046', lng: '76.7179', alt: 'SAS Nagar', type: 'City' },

  // Week 39/40 route endpoints (Jul 2026)
  ghaziabad: { name: 'Ghaziabad', state: 'Uttar Pradesh', postal: '201001', lat: '28.6692', lng: '77.4538', alt: null, type: 'City' },
  faridabad: { name: 'Faridabad', state: 'Haryana', postal: '121001', lat: '28.4089', lng: '77.3178', alt: null, type: 'City' },
  kurukshetra: { name: 'Kurukshetra', state: 'Haryana', postal: '136118', lat: '29.9695', lng: '76.8783', alt: 'Thanesar', type: 'City' },
  panipat: { name: 'Panipat', state: 'Haryana', postal: '132103', lat: '29.3909', lng: '76.9635', alt: 'City of Weavers', type: 'City' },
  karnal: { name: 'Karnal', state: 'Haryana', postal: '132001', lat: '29.6857', lng: '76.9905', alt: null, type: 'City' },
  ludhiana: { name: 'Ludhiana', state: 'Punjab', postal: '141001', lat: '30.9010', lng: '75.8573', alt: 'Manchester of India', type: 'City' },
  jalandhar: { name: 'Jalandhar', state: 'Punjab', postal: '144001', lat: '31.3260', lng: '75.5762', alt: null, type: 'City' },
  patiala: { name: 'Patiala', state: 'Punjab', postal: '147001', lat: '30.3398', lng: '76.3869', alt: null, type: 'City' },
  bathinda: { name: 'Bathinda', state: 'Punjab', postal: '151001', lat: '30.2110', lng: '74.9455', alt: null, type: 'City' },
  gorakhpur: { name: 'Gorakhpur', state: 'Uttar Pradesh', postal: '273001', lat: '26.7606', lng: '83.3732', alt: null, type: 'City' },
  jhansi: { name: 'Jhansi', state: 'Uttar Pradesh', postal: '284001', lat: '25.4484', lng: '78.5685', alt: null, type: 'City' },
  bodhgaya: { name: 'Bodhgaya', state: 'Bihar', postal: '824231', lat: '24.6961', lng: '84.9869', alt: 'Bodh Gaya', type: 'City' },
  gaya: { name: 'Gaya', state: 'Bihar', postal: '823001', lat: '24.7955', lng: '85.0002', alt: null, type: 'City' },
  sarnath: { name: 'Sarnath', state: 'Uttar Pradesh', postal: '221007', lat: '25.3811', lng: '83.0245', alt: null, type: 'TouristDestination' },
  chitrakoot: { name: 'Chitrakoot', state: 'Uttar Pradesh', postal: '210204', lat: '25.2000', lng: '80.8667', alt: 'Chitrakoot Dham', type: 'City' },
  nathdwara: { name: 'Nathdwara', state: 'Rajasthan', postal: '313301', lat: '24.9297', lng: '73.8214', alt: null, type: 'City' },
  bharatpur: { name: 'Bharatpur', state: 'Rajasthan', postal: '321001', lat: '27.2173', lng: '77.4895', alt: 'Lohagarh', type: 'City' },
  alwar: { name: 'Alwar', state: 'Rajasthan', postal: '301001', lat: '27.5530', lng: '76.6346', alt: null, type: 'City' },
  neemrana: { name: 'Neemrana', state: 'Rajasthan', postal: '301705', lat: '27.9856', lng: '76.3855', alt: null, type: 'City' },
  bundi: { name: 'Bundi', state: 'Rajasthan', postal: '323001', lat: '25.4305', lng: '75.6499', alt: null, type: 'City' },
  mandawa: { name: 'Mandawa', state: 'Rajasthan', postal: '333704', lat: '28.0553', lng: '75.1487', alt: null, type: 'City' },
  kumbhalgarh: { name: 'Kumbhalgarh', state: 'Rajasthan', postal: '313325', lat: '25.1485', lng: '73.5872', alt: null, type: 'TouristDestination' },
  gulmarg: { name: 'Gulmarg', state: 'Jammu and Kashmir', postal: '193403', lat: '34.0484', lng: '74.3805', alt: null, type: 'City' },
  pahalgam: { name: 'Pahalgam', state: 'Jammu and Kashmir', postal: '192126', lat: '34.0159', lng: '75.3150', alt: null, type: 'City' },
  sonamarg: { name: 'Sonamarg', state: 'Jammu and Kashmir', postal: '191202', lat: '34.3050', lng: '75.2900', alt: 'Sonmarg', type: 'City' },
  auli: { name: 'Auli', state: 'Uttarakhand', postal: '246443', lat: '30.5290', lng: '79.5670', alt: null, type: 'TouristDestination' },
  chopta: { name: 'Chopta', state: 'Uttarakhand', postal: '246419', lat: '30.4886', lng: '79.1195', alt: null, type: 'TouristDestination' },
  kausani: { name: 'Kausani', state: 'Uttarakhand', postal: '263639', lat: '29.8417', lng: '79.6014', alt: null, type: 'City' },
  ranikhet: { name: 'Ranikhet', state: 'Uttarakhand', postal: '263645', lat: '29.6434', lng: '79.4322', alt: null, type: 'City' },
  almora: { name: 'Almora', state: 'Uttarakhand', postal: '263601', lat: '29.5892', lng: '79.6467', alt: null, type: 'City' },
  mukteshwar: { name: 'Mukteshwar', state: 'Uttarakhand', postal: '263138', lat: '29.4713', lng: '79.6474', alt: null, type: 'City' },
  kanatal: { name: 'Kanatal', state: 'Uttarakhand', postal: '249145', lat: '30.4180', lng: '78.3320', alt: null, type: 'City' },
  dhanaulti: { name: 'Dhanaulti', state: 'Uttarakhand', postal: '248179', lat: '30.4256', lng: '78.2412', alt: null, type: 'City' },
  badrinath: { name: 'Badrinath', state: 'Uttarakhand', postal: '246422', lat: '30.7433', lng: '79.4938', alt: 'Badrinath Dham', type: 'TouristDestination' },
  gangotri: { name: 'Gangotri', state: 'Uttarakhand', postal: '249135', lat: '30.9947', lng: '78.9398', alt: 'Gangotri Dham', type: 'TouristDestination' },
  yamunotri: { name: 'Yamunotri', state: 'Uttarakhand', postal: '249141', lat: '31.0139', lng: '78.4600', alt: 'Yamunotri Dham', type: 'TouristDestination' },
  kufri: { name: 'Kufri', state: 'Himachal Pradesh', postal: '171012', lat: '31.0980', lng: '77.2670', alt: null, type: 'City' },
  chail: { name: 'Chail', state: 'Himachal Pradesh', postal: '173217', lat: '30.9683', lng: '77.1994', alt: null, type: 'City' },
  khajjiar: { name: 'Khajjiar', state: 'Himachal Pradesh', postal: '176314', lat: '32.5480', lng: '76.0630', alt: 'Mini Switzerland of India', type: 'TouristDestination' },
  bir: { name: 'Bir', state: 'Himachal Pradesh', postal: '176077', lat: '32.0356', lng: '76.7186', alt: 'Bir Billing', type: 'City' },
  palampur: { name: 'Palampur', state: 'Himachal Pradesh', postal: '176061', lat: '32.1109', lng: '76.5364', alt: null, type: 'City' },
  kangra: { name: 'Kangra', state: 'Himachal Pradesh', postal: '176001', lat: '32.0998', lng: '76.2691', alt: null, type: 'City' },
  kinnaur: { name: 'Kinnaur', state: 'Himachal Pradesh', postal: '172107', lat: '31.5400', lng: '78.2769', alt: 'Reckong Peo', type: 'TouristDestination' },
  sangla: { name: 'Sangla', state: 'Himachal Pradesh', postal: '172106', lat: '31.4270', lng: '78.2660', alt: 'Sangla Valley', type: 'City' },
  chitkul: { name: 'Chitkul', state: 'Himachal Pradesh', postal: '172106', lat: '31.3489', lng: '78.4372', alt: null, type: 'City' },
  'tirthan-valley': { name: 'Tirthan Valley', state: 'Himachal Pradesh', postal: '175123', lat: '31.6260', lng: '77.3450', alt: 'Banjar', type: 'TouristDestination' },
  jibhi: { name: 'Jibhi', state: 'Himachal Pradesh', postal: '175123', lat: '31.5833', lng: '77.3333', alt: null, type: 'City' },
  leh: { name: 'Leh', state: 'Ladakh', postal: '194101', lat: '34.1526', lng: '77.5771', alt: 'Ladakh', type: 'City' },
  moradabad: { name: 'Moradabad', state: 'Uttar Pradesh', postal: '244001', lat: '28.8386', lng: '78.7733', alt: 'Brass City', type: 'City' },
  aligarh: { name: 'Aligarh', state: 'Uttar Pradesh', postal: '202001', lat: '27.8974', lng: '78.0880', alt: null, type: 'City' },
  rohtak: { name: 'Rohtak', state: 'Haryana', postal: '124001', lat: '28.8955', lng: '76.6066', alt: null, type: 'City' },
  meerut: { name: 'Meerut', state: 'Uttar Pradesh', postal: '250001', lat: '28.9845', lng: '77.7064', alt: null, type: 'City' },
  bareilly: { name: 'Bareilly', state: 'Uttar Pradesh', postal: '243001', lat: '28.3670', lng: '79.4304', alt: null, type: 'City' },
  gwalior: { name: 'Gwalior', state: 'Madhya Pradesh', postal: '474001', lat: '26.2183', lng: '78.1828', alt: null, type: 'City' },
  kanpur: { name: 'Kanpur', state: 'Uttar Pradesh', postal: '208001', lat: '26.4499', lng: '80.3319', alt: 'Manchester of the East', type: 'City' },
  prayagraj: { name: 'Prayagraj', state: 'Uttar Pradesh', postal: '211001', lat: '25.4358', lng: '81.8463', alt: 'Allahabad', type: 'City' },
};

export function getCityPlaceSchema(citySlug, opts = {}) {
  const slug = String(citySlug).toLowerCase();
  const c = _CITY_PLACES[slug];
  if (!c) return null;
  const baseUrl = 'https://www.trivenicabs.in';
  return {
    "@context": "https://schema.org",
    "@type": c.type,
    "@id": `${baseUrl}/${opts.idSlug || slug}#place`,
    "name": c.name,
    ...(c.alt ? { "alternateName": c.alt } : {}),
    "description": opts.description || `${c.name}, ${c.state}, India.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": c.name,
      "addressRegion": c.state,
      "postalCode": c.postal,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": c.lat,
      "longitude": c.lng
    },
    ...(opts.image ? { "image": opts.image.startsWith('http') ? opts.image : `${baseUrl}${opts.image}` } : {})
  };
}

export function getAllCityPlaces() {
  return Object.values(_CITY_PLACES).map((c, i) => {
    const slug = Object.keys(_CITY_PLACES)[i];
    return getCityPlaceSchema(slug);
  });
}

/**
 * Build a generic Comparison Table schema (Article + Table + mentions[])
 * for vs-comparison pages. Significantly improves featured-snippet capture.
 */
export function getComparisonSchema({ slug, title, description, rows, mentions = [] }) {
  const baseUrl = 'https://www.trivenicabs.in';
  return [
    {
      "@context": "https://schema.org",
      "@type": "Table",
      "@id": `${baseUrl}/${slug}#comparison-table`,
      "about": title,
      "description": description
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${baseUrl}/${slug}#comparison-article`,
      "headline": title,
      "description": description,
      "datePublished": "2026-01-01",
      "dateModified": getTodayDate(),
      "author": { "@id": `${baseUrl}/#organization` },
      "publisher": { "@id": `${baseUrl}/#organization` },
      "about": rows.map(r => ({ "@type": "Thing", "name": r.feature || r.name })),
      "mentions": mentions.map(m => ({ "@type": "Thing", "name": m }))
    }
  ];
}
