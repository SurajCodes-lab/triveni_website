// src/utilis/guides/week48/links.js
//
// Where the Week 48 guides are linked FROM. Built as new pages, the twenty-five
// guides had between one and ten inbound links each and none from the pages
// that already rank for their searches (the places-to-visit lists, the city
// hubs, the festival booking pages, the seasonal menu). A page nobody links to
// is what Search Console's "discovered, currently not indexed" looks like, so
// this module gives the hubs one place to ask "which guides belong to this
// city?" and the festival pages "which guide explains this trip?".
//
// Server-side only: it imports the guide registry (the full data of all
// twenty-five guides). Client components use the small static maps in the
// components themselves instead, guarded by clientRouteExists.

import { WEEK48_GUIDES, getWeek48Guide } from './index';
import { WEEK49_GUIDES, getWeek49Guide } from '../week49/index';

const getGuide = (slug) => getWeek48Guide(slug) || getWeek49Guide(slug);

// city hub slug → guide slugs, most relevant first
export const GUIDES_BY_CITY = {
  delhi: ['delhi-to-nainital-by-car', 'delhi-to-vrindavan-by-car', 'delhi-to-amritsar-by-road', 'delhi-to-lansdowne-by-road', 'weekend-getaways-near-me', 'places-to-visit-near-me', 'diwali-tour-packages-2026-from-delhi', 'hill-stations-near-gurgaon-noida', 'delhi-to-rishikesh-shortest-route', 'delhi-to-srinagar-by-road', 'delhi-to-varanasi-best-route-by-car', 'how-to-reach-kaza-from-delhi'],
  gurgaon: ['places-to-visit-near-gurgaon', 'delhi-to-nainital-by-car', 'delhi-to-vrindavan-by-car', 'weekend-getaways-from-gurgaon-by-car', 'hill-stations-near-gurgaon-noida', 'weekend-getaways-near-me', 'places-to-visit-near-me'],
  noida: ['one-day-trips-from-noida', 'delhi-to-vrindavan-by-car', 'delhi-to-nainital-by-car', 'noida-weekend-trips', 'hill-stations-near-gurgaon-noida', 'weekend-getaways-near-me', 'places-to-visit-near-me'],
  'greater-noida': ['one-day-trips-from-noida', 'ghaziabad-greater-noida-weekend-drives', 'noida-weekend-trips', 'weekend-getaways-near-me'],
  ghaziabad: ['ghaziabad-greater-noida-weekend-drives', 'weekend-getaways-near-me', 'hill-stations-near-gurgaon-noida'],
  faridabad: ['weekend-getaways-near-me', 'places-to-visit-near-me', 'weekend-getaways-from-gurgaon-by-car'],
  amritsar: ['delhi-to-amritsar-by-road', 'hill-stations-near-amritsar', 'tourist-places-within-50-km-of-amritsar-and-haridwar', 'best-time-to-visit-amritsar', 'diwali-tour-packages-2026-from-delhi'],
  haridwar: ['haridwar-dehradun-mussoorie-by-road', 'hill-stations-near-haridwar-rishikesh', 'tourist-places-within-50-km-of-amritsar-and-haridwar', 'delhi-to-rishikesh-shortest-route'],
  rishikesh: ['haridwar-dehradun-mussoorie-by-road', 'hill-stations-near-haridwar-rishikesh', 'delhi-to-rishikesh-shortest-route', 'tourist-places-within-50-km-of-amritsar-and-haridwar'],
  dehradun: ['haridwar-dehradun-mussoorie-by-road', 'hill-stations-near-haridwar-rishikesh', 'delhi-to-rishikesh-shortest-route'],
  agra: ['agra-to-jaipur-by-road', 'delhi-to-vrindavan-by-car', 'tourist-places-within-100-km-of-agra', 'places-to-visit-near-me', 'weekend-getaways-near-me'],
  mathura: ['delhi-to-vrindavan-by-car', 'tourist-places-within-100-km-of-agra', 'diwali-tour-packages-2026-from-delhi'],
  varanasi: ['varanasi-ayodhya-prayagraj-by-road', 'dev-deepawali-varanasi-2026', 'chhath-puja-varanasi-ghat-guide', 'delhi-to-varanasi-best-route-by-car'],
  ayodhya: ['varanasi-ayodhya-prayagraj-by-road', 'deepotsav-ayodhya-2026-guide', 'diwali-tour-packages-2026-from-delhi', 'dev-deepawali-varanasi-2026'],
  lucknow: ['places-to-visit-near-lucknow', 'varanasi-ayodhya-prayagraj-by-road', 'deepotsav-ayodhya-2026-guide', 'delhi-to-varanasi-best-route-by-car', 'dev-deepawali-varanasi-2026'],
  prayagraj: ['varanasi-ayodhya-prayagraj-by-road', 'delhi-to-varanasi-best-route-by-car', 'dev-deepawali-varanasi-2026'],
  pushkar: ['pushkar-mela-2026-by-car'],
  ajmer: ['pushkar-mela-2026-by-car'],
  jaipur: ['agra-to-jaipur-by-road', 'jaipur-to-udaipur-by-road', 'pushkar-mela-2026-by-car', 'diwali-tour-packages-2026-from-delhi', 'weekend-getaways-from-gurgaon-by-car'],
  kasol: ['chandigarh-to-kasol-by-road', 'best-time-to-visit-kasol', 'kullu-dussehra-2026-by-car'],
  manali: ['shimla-to-manali-by-road', 'chandigarh-to-kasol-by-road', 'kullu-dussehra-2026-by-car', 'best-time-to-visit-kasol', 'how-to-reach-kaza-from-delhi'],
  chandigarh: ['chandigarh-to-kasol-by-road', 'shimla-to-manali-by-road', 'delhi-to-amritsar-by-road', 'kullu-dussehra-2026-by-car', 'hill-stations-near-amritsar', 'how-to-reach-kaza-from-delhi'],
  shimla: ['shimla-to-manali-by-road', 'how-to-reach-kaza-from-delhi', 'diwali-tour-packages-2026-from-delhi'],
  dalhousie: ['dalhousie-dharamshala-circuit-by-car', 'hill-stations-near-amritsar'],
  dharamshala: ['dalhousie-dharamshala-circuit-by-car', 'hill-stations-near-amritsar'],
  mcleodganj: ['dalhousie-dharamshala-circuit-by-car'],
  srinagar: ['srinagar-pahalgam-gulmarg-by-road', 'delhi-to-srinagar-by-road'],
  gulmarg: ['srinagar-pahalgam-gulmarg-by-road', 'delhi-to-srinagar-by-road'],
  pahalgam: ['srinagar-pahalgam-gulmarg-by-road', 'delhi-to-srinagar-by-road'],
  nainital: ['delhi-to-nainital-by-car', 'hill-stations-near-gurgaon-noida', 'weekend-getaways-near-me'],
  mussoorie: ['haridwar-dehradun-mussoorie-by-road', 'hill-stations-near-haridwar-rishikesh', 'hill-stations-near-gurgaon-noida'],
  udaipur: ['udaipur-mount-abu-chittorgarh-by-road', 'jaipur-to-udaipur-by-road'],
  'mount-abu': ['udaipur-mount-abu-chittorgarh-by-road'],
  chittorgarh: ['udaipur-mount-abu-chittorgarh-by-road', 'jaipur-to-udaipur-by-road'],
  vrindavan: ['delhi-to-vrindavan-by-car'],
  lansdowne: ['delhi-to-lansdowne-by-road'],
  kotdwar: ['delhi-to-lansdowne-by-road'],
};

// festival booking page slug → the Week 48 guide that explains the trip
export const FESTIVAL_GUIDE = {
  'navratri-vaishno-devi-cab': 'navratri-vaishno-devi-by-road',
  'diwali-ayodhya-transport': 'deepotsav-ayodhya-2026-guide',
  'chhath-puja-varanasi-transport': 'chhath-puja-varanasi-ghat-guide',
  'pushkar-mela-transport': 'pushkar-mela-2026-by-car',
};

function toLink(g) {
  return { href: g.path, label: g.crumbName || g.title, sub: g.eyebrow || '' };
}

/** Guides for a city hub, as plain link objects, or an empty list. */
export function getWeek48GuideLinks(citySlug, limit = 6) {
  const key = String(citySlug || '').toLowerCase().replace(/\s+/g, '-');
  const slugs = GUIDES_BY_CITY[key] || [];
  return slugs.map(getGuide).filter(Boolean).slice(0, limit).map(toLink);
}

/** The guide behind a festival booking page, or null. */
export function getFestivalGuideLink(festivalSlug) {
  const g = getWeek48Guide(FESTIVAL_GUIDE[festivalSlug]);
  return g ? toLink(g) : null;
}

/** Every guide as a plain link, for menus and directories. */
export function allWeek48GuideLinks() {
  return [...WEEK48_GUIDES, ...WEEK49_GUIDES].map(toLink);
}
