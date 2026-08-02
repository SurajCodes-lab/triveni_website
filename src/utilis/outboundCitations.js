/**
 * Outbound citation registry — authoritative URLs grouped by topic.
 *
 * Why: AI engines treat outbound links to .gov / .edu / Wikipedia /
 * recognized authority domains as a credibility-signal proxy.
 * Princeton GEO data: inline citations to authoritative sources lift
 * AI citation share by **+30%**. This file is the central place where
 * we curate the set of links we cite across the site.
 *
 * Each entry: { name, url, label }
 *   - name: how the link is rendered to the reader
 *   - url: full URL (always https)
 *   - label: optional 1-line context shown next to the link
 *
 * Add citations here ONCE, surface them on multiple pages via the helper
 * `getCitations(...keys)` below.
 */

export const CITATIONS = {
  // ========== ROAD / TOLL / DRIVING AUTHORITIES ==========
  nhai: {
    name: 'National Highways Authority of India (NHAI)',
    url: 'https://nhai.gov.in/',
    label: 'official toll plaza, FASTag and national-highway data',
    cat: 'gov',
  },
  fastag: {
    name: 'FASTag — Ministry of Road Transport & Highways',
    url: 'https://fastag.org/',
    label: 'official FASTag electronic toll collection portal',
    cat: 'gov',
  },
  yamuna_expressway: {
    name: 'Yamuna Expressway Industrial Development Authority',
    url: 'https://yeida.gov.in/',
    label: 'official Yamuna Expressway authority (Delhi–Agra)',
    cat: 'gov',
  },

  // ========== AIPORT AUTHORITIES ==========
  aai: {
    name: 'Airports Authority of India',
    url: 'https://www.aai.aero/',
    label: 'official airport-by-airport facility, route and traffic data',
    cat: 'gov',
  },
  delhi_airport: {
    name: 'Delhi International Airport (DIAL)',
    url: 'https://www.newdelhiairport.in/',
    label: 'official IGI Airport terminal, flight and pickup information',
    cat: 'official',
  },

  // ========== TOURISM / MINISTRY ==========
  india_tourism: {
    name: 'Ministry of Tourism, Government of India',
    url: 'https://tourism.gov.in/',
    label: 'official India tourism policies and operator approvals',
    cat: 'gov',
  },
  incredible_india: {
    name: 'Incredible India (Official Tourism Portal)',
    url: 'https://www.incredibleindia.org/',
    label: 'official India tourism site, destination listings',
    cat: 'official',
  },
  asi: {
    name: 'Archaeological Survey of India (ASI)',
    url: 'https://asi.nic.in/',
    label: 'official caretaker of UNESCO and national monuments',
    cat: 'gov',
  },

  // ========== STATE TOURISM BOARDS ==========
  up_tourism: { name: 'Uttar Pradesh Tourism', url: 'https://uptourism.gov.in/', label: 'official Uttar Pradesh tourism board (Agra, Varanasi, Ayodhya, Mathura, Lucknow)', cat: 'gov' },
  rajasthan_tourism: { name: 'Rajasthan Tourism', url: 'https://www.tourism.rajasthan.gov.in/', label: 'official Rajasthan tourism board (Jaipur, Udaipur, Jodhpur, Jaisalmer, Pushkar)', cat: 'gov' },
  uttarakhand_tourism: { name: 'Uttarakhand Tourism', url: 'https://uttarakhandtourism.gov.in/', label: 'official Uttarakhand tourism board (Dehradun, Haridwar, Rishikesh, Mussoorie, Nainital, Char Dham)', cat: 'gov' },
  himachal_tourism: { name: 'Himachal Pradesh Tourism', url: 'https://himachaltourism.gov.in/', label: 'official Himachal tourism board (Shimla, Manali, Dharamshala, Spiti)', cat: 'gov' },
  punjab_tourism: { name: 'Punjab Tourism', url: 'https://punjabtourism.punjab.gov.in/', label: 'official Punjab tourism board (Amritsar)', cat: 'gov' },
  delhi_tourism: { name: 'Delhi Tourism', url: 'https://delhitourism.gov.in/', label: 'official Delhi tourism board', cat: 'gov' },

  // ========== WEATHER / CLIMATE ==========
  imd: {
    name: 'India Meteorological Department (IMD)',
    url: 'https://mausam.imd.gov.in/',
    label: 'official India weather, monsoon and climate data',
    cat: 'gov',
  },

  // ========== UNESCO / WIKIPEDIA LANDMARKS ==========
  taj_mahal_wiki: { name: 'Taj Mahal (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Taj_Mahal', label: 'UNESCO World Heritage Site, Agra', cat: 'wiki' },
  agra_fort_wiki: { name: 'Agra Fort (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Agra_Fort', label: 'UNESCO World Heritage Site, Agra', cat: 'wiki' },
  fatehpur_sikri_wiki: { name: 'Fatehpur Sikri (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Fatehpur_Sikri', label: 'UNESCO World Heritage Site near Agra', cat: 'wiki' },
  golden_temple_wiki: { name: 'Golden Temple (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Golden_Temple', label: 'Amritsar — sacred Sikh shrine', cat: 'wiki' },
  hawa_mahal_wiki: { name: 'Hawa Mahal (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Hawa_Mahal', label: 'Pink City iconic façade, Jaipur', cat: 'wiki' },
  amber_fort_wiki: { name: 'Amber Fort (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Amer_Fort', label: 'UNESCO World Heritage Site, Jaipur', cat: 'wiki' },
  city_palace_udaipur_wiki: { name: 'City Palace, Udaipur (Wikipedia)', url: 'https://en.wikipedia.org/wiki/City_Palace,_Udaipur', label: 'royal palace complex, Udaipur', cat: 'wiki' },
  mehrangarh_wiki: { name: 'Mehrangarh Fort (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Mehrangarh', label: 'fortress, Jodhpur', cat: 'wiki' },
  ram_mandir_wiki: { name: 'Ram Mandir, Ayodhya (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Ram_Mandir,_Ayodhya', label: 'temple in Ayodhya, UP', cat: 'wiki' },
  varanasi_wiki: { name: 'Varanasi (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Varanasi', label: 'sacred city on the Ganges', cat: 'wiki' },
  kedarnath_wiki: { name: 'Kedarnath (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Kedarnath', label: 'Char Dham Yatra shrine, Uttarakhand', cat: 'wiki' },
  badrinath_wiki: { name: 'Badrinath Temple (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Badrinath_Temple', label: 'Char Dham Yatra shrine, Uttarakhand', cat: 'wiki' },
  manali_wiki: { name: 'Manali (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Manali', label: 'Himalayan hill town, Himachal Pradesh', cat: 'wiki' },
  shimla_wiki: { name: 'Shimla (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Shimla', label: 'Queen of Hills, Himachal Pradesh', cat: 'wiki' },

  // ========== ROAD / EXPRESSWAY WIKIPEDIA ==========
  yamuna_expressway_wiki: { name: 'Yamuna Expressway (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Yamuna_Expressway', label: 'Greater Noida to Agra controlled-access expressway', cat: 'wiki' },
  delhi_jaipur_highway_wiki: { name: 'Delhi–Jaipur Expressway (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Delhi%E2%80%93Mumbai_Expressway', label: 'NH-48 Delhi to Jaipur via Gurgaon', cat: 'wiki' },
  golden_quadrilateral_wiki: { name: 'Golden Quadrilateral (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Golden_Quadrilateral', label: 'national highway network connecting four metros', cat: 'wiki' },

  // ========== TRANSPORT / RTO ==========
  parivahan: {
    name: 'Parivahan Seva (Ministry of Road Transport)',
    url: 'https://parivahan.gov.in/',
    label: 'official commercial vehicle permit and tax portal',
    cat: 'gov',
  },
};

/**
 * Resolve any number of citation keys to source objects.
 * Returns array suitable for the OutboundCitations component.
 */
export function getCitations(...keys) {
  return keys
    .flat()
    .map((k) => CITATIONS[k])
    .filter(Boolean);
}

/**
 * Smart citation picker — given context (route from/to, vehicle type), return
 * the 3-5 most relevant citations. Use this when you don't want to manually
 * choose keys per page.
 */
export function getCitationsForRoute({ from = '', to = '', context = 'outstation' } = {}) {
  const f = (from || '').toLowerCase();
  const t = (to || '').toLowerCase();
  const keys = new Set();

  // Always-on base
  keys.add('nhai');
  keys.add('parivahan');

  // Yamuna Expressway — applies to Delhi <-> Agra routes
  if ((f.includes('delhi') && t.includes('agra')) || (f.includes('agra') && t.includes('delhi'))) {
    keys.add('yamuna_expressway');
    keys.add('yamuna_expressway_wiki');
    keys.add('taj_mahal_wiki');
  }

  // Landmark links by destination/origin city
  const lookups = [
    { match: 'agra', keys: ['taj_mahal_wiki', 'agra_fort_wiki', 'up_tourism'] },
    { match: 'jaipur', keys: ['hawa_mahal_wiki', 'amber_fort_wiki', 'rajasthan_tourism'] },
    { match: 'udaipur', keys: ['city_palace_udaipur_wiki', 'rajasthan_tourism'] },
    { match: 'jodhpur', keys: ['mehrangarh_wiki', 'rajasthan_tourism'] },
    { match: 'amritsar', keys: ['golden_temple_wiki', 'punjab_tourism'] },
    { match: 'manali', keys: ['manali_wiki', 'himachal_tourism'] },
    { match: 'shimla', keys: ['shimla_wiki', 'himachal_tourism'] },
    { match: 'dharamshala', keys: ['himachal_tourism'] },
    { match: 'dehradun', keys: ['uttarakhand_tourism'] },
    { match: 'haridwar', keys: ['uttarakhand_tourism', 'imd'] },
    { match: 'rishikesh', keys: ['uttarakhand_tourism'] },
    { match: 'mussoorie', keys: ['uttarakhand_tourism'] },
    { match: 'nainital', keys: ['uttarakhand_tourism'] },
    { match: 'kedarnath', keys: ['kedarnath_wiki', 'uttarakhand_tourism'] },
    { match: 'badrinath', keys: ['badrinath_wiki', 'uttarakhand_tourism'] },
    { match: 'varanasi', keys: ['varanasi_wiki', 'up_tourism'] },
    { match: 'ayodhya', keys: ['ram_mandir_wiki', 'up_tourism'] },
    { match: 'mathura', keys: ['up_tourism'] },
    { match: 'lucknow', keys: ['up_tourism'] },
    { match: 'delhi', keys: ['delhi_tourism', 'delhi_airport'] },
  ];
  for (const l of lookups) {
    if (f.includes(l.match) || t.includes(l.match)) {
      l.keys.forEach((k) => keys.add(k));
    }
  }

  // Context-specific additions
  if (context === 'airport') keys.add('aai');
  if (context === 'weather' || context === 'best-time') keys.add('imd');
  if (context === 'tour' || context === 'sightseeing') {
    keys.add('asi');
    keys.add('incredible_india');
  }

  return Array.from(keys)
    .map((k) => CITATIONS[k])
    .filter(Boolean)
    .slice(0, 6); // cap at 6 per page
}
