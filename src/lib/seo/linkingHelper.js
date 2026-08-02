/**
 * linkingHelper — structured internal linking for AEO/GEO topical authority.
 *
 * Why it exists: internal-link graph quality is one of the strongest topical-
 * authority signals AI engines use. Hand-rolled `<Link>`s scattered across
 * client components produce inconsistent siloing. This module centralises the
 * decisions: which money pages to surface for a given city, which adjacent
 * routes to recommend, which silo hubs to cross-link from a guide.
 *
 * Consumed by `src/components/seo/RelatedLinks.jsx`.
 *
 * All functions are pure and synchronous — safe inside server components.
 */

import { cityRoutesData, basicCityRoutes } from '@/utilis/cityRoutesData';

// ------------------------------------------------------------------
// City-level money pages — high commercial-intent destinations
// surfaced as the primary "Related pages" panel on city hubs.
// Priority drives ordering; higher = more important.
// ------------------------------------------------------------------
const MONEY_PAGES_BY_CITY = {
  delhi: [
    { href: '/delhi', anchor: 'Delhi taxi service', priority: 10 },
    { href: '/one-way-cab/delhi-to-agra', anchor: 'Delhi to Agra one-way', priority: 9 },
    { href: '/airport-service/delhi', anchor: 'Delhi IGI airport taxi', priority: 9 },
    { href: '/one-way-cab/delhi-to-jaipur', anchor: 'Delhi to Jaipur one-way', priority: 9 },
    { href: '/round-trip/delhi-to-vrindavan', anchor: 'Delhi to Vrindavan round trip', priority: 9 },
    { href: '/one-way-cab/delhi-to-badrinath', anchor: 'Delhi to Badrinath one-way', priority: 8 },
    { href: '/round-trip/delhi-to-leh', anchor: 'Delhi to Leh round trip', priority: 8 },
    { href: '/one-way-cab/delhi-to-gulmarg', anchor: 'Delhi to Gulmarg one-way', priority: 8 },
    { href: '/agra-day-trip-from-delhi', anchor: 'Delhi to Agra day trip', priority: 8 },
    { href: '/one-way-cab/delhi-to-alwar', anchor: 'Delhi to Alwar one-way', priority: 7 },
    { href: '/one-way-cab/delhi-to-chandigarh', anchor: 'Delhi to Chandigarh one-way', priority: 7 },
    { href: '/one-way-cab/delhi-to-haridwar', anchor: 'Delhi to Haridwar one-way', priority: 7 },
    { href: '/ayodhya-ram-mandir-tour-from-delhi', anchor: 'Ayodhya tour from Delhi', priority: 7 },
  ],
  agra: [
    { href: '/agra', anchor: 'Agra taxi service', priority: 10 },
    { href: '/agra-travel-guide', anchor: 'Agra travel guide', priority: 9 },
    { href: '/agra-in-1-day-itinerary', anchor: '1-day Agra itinerary', priority: 8 },
    { href: '/agra-in-2-days-itinerary', anchor: '2-day Agra itinerary', priority: 8 },
    { href: '/agra-food-tour', anchor: 'Agra food tour', priority: 7 },
    { href: '/agra-shopping-guide', anchor: 'Agra shopping guide', priority: 7 },
    { href: '/agra-beyond-taj-mahal', anchor: 'Agra beyond the Taj', priority: 7 },
    { href: '/one-way-cab/agra-to-jaipur', anchor: 'Agra to Jaipur one-way', priority: 7 },
  ],
  jaipur: [
    { href: '/jaipur', anchor: 'Jaipur taxi service', priority: 10 },
    { href: '/airport-service/jaipur', anchor: 'Jaipur airport taxi', priority: 9 },
    { href: '/one-way-cab/jaipur-to-udaipur', anchor: 'Jaipur to Udaipur one-way', priority: 8 },
    { href: '/one-way-cab/jaipur-to-jodhpur', anchor: 'Jaipur to Jodhpur one-way', priority: 8 },
    { href: '/one-way-cab/jaipur-to-delhi', anchor: 'Jaipur to Delhi one-way', priority: 7 },
    { href: '/one-way-cab/jaipur-to-agra', anchor: 'Jaipur to Agra one-way', priority: 7 },
  ],
  amritsar: [
    { href: '/amritsar', anchor: 'Amritsar taxi service', priority: 10 },
    { href: '/amritsar-in-2-days-itinerary', anchor: '2-day Amritsar itinerary', priority: 9 },
    { href: '/amritsar-food-tour', anchor: 'Amritsar food tour', priority: 8 },
    { href: '/amritsar-travel-guide', anchor: 'Amritsar travel guide', priority: 8 },
    { href: '/amritsar-shopping-guide', anchor: 'Amritsar shopping guide', priority: 7 },
    { href: '/amritsar-beyond-golden-temple', anchor: 'Beyond the Golden Temple', priority: 7 },
    { href: '/amritsar-airport-to-city-taxi', anchor: 'Amritsar airport taxi', priority: 7 },
    { href: '/round-trip/amritsar-to-dharamshala', anchor: 'Amritsar to Dharamshala round trip', priority: 7 },
  ],
  chandigarh: [
    { href: '/chandigarh', anchor: 'Chandigarh taxi service', priority: 10 },
    { href: '/airport-service/chandigarh', anchor: 'Chandigarh airport taxi', priority: 9 },
    { href: '/one-way-cab/chandigarh-to-manali', anchor: 'Chandigarh to Manali', priority: 8 },
    { href: '/one-way-cab/chandigarh-to-shimla', anchor: 'Chandigarh to Shimla', priority: 8 },
    { href: '/round-trip/kasol-to-chandigarh', anchor: 'Chandigarh to Kasol round trip', priority: 7 },
    { href: '/one-way-cab/chandigarh-to-dharamshala', anchor: 'Chandigarh to Dharamshala', priority: 7 },
    { href: '/one-way-cab/chandigarh-to-delhi', anchor: 'Chandigarh to Delhi', priority: 7 },
  ],
  haridwar: [
    { href: '/haridwar', anchor: 'Haridwar taxi service', priority: 10 },
    { href: '/chardham-yatra', anchor: 'Char Dham Yatra from Haridwar', priority: 9 },
    { href: '/one-way-cab/haridwar-to-rishikesh', anchor: 'Haridwar to Rishikesh', priority: 8 },
    { href: '/round-trip/haridwar-to-rishikesh', anchor: 'Haridwar to Rishikesh round trip', priority: 8 },
    { href: '/one-way-cab/haridwar-to-mussoorie', anchor: 'Haridwar to Mussoorie', priority: 7 },
    { href: '/one-way-cab/haridwar-to-delhi', anchor: 'Haridwar to Delhi', priority: 7 },
  ],
  rishikesh: [
    { href: '/rishikesh', anchor: 'Rishikesh taxi service', priority: 10 },
    { href: '/round-trip/haridwar-to-rishikesh', anchor: 'Rishikesh to Haridwar round trip', priority: 8 },
    { href: '/one-way-cab/rishikesh-to-delhi', anchor: 'Rishikesh to Delhi', priority: 8 },
    { href: '/chardham-yatra', anchor: 'Char Dham Yatra', priority: 8 },
    { href: '/round-trip/rishikesh-to-dehradun', anchor: 'Rishikesh to Dehradun round trip', priority: 7 },
    { href: '/one-way-cab/rishikesh-to-dehradun', anchor: 'Rishikesh to Dehradun', priority: 7 },
  ],
  ayodhya: [
    { href: '/ayodhya', anchor: 'Ayodhya taxi service', priority: 10 },
    { href: '/ayodhya-1-day-package', anchor: 'Ayodhya 1-day package', priority: 9 },
    { href: '/ayodhya-ram-mandir-tour-from-delhi', anchor: 'Ayodhya tour from Delhi', priority: 9 },
    { href: '/ayodhya-ram-mandir-tour-from-lucknow', anchor: 'Ayodhya tour from Lucknow', priority: 8 },
    { href: '/ayodhya-ram-mandir-tour-from-agra', anchor: 'Ayodhya tour from Agra', priority: 8 },
  ],
  lucknow: [
    { href: '/lucknow', anchor: 'Lucknow taxi service', priority: 10 },
    { href: '/airport-service/lucknow', anchor: 'Lucknow airport taxi', priority: 9 },
    { href: '/ayodhya-ram-mandir-tour-from-lucknow', anchor: 'Ayodhya tour from Lucknow', priority: 8 },
  ],
  varanasi: [
    { href: '/varanasi', anchor: 'Varanasi taxi service', priority: 10 },
    { href: '/varanasi-travel-guide', anchor: 'Varanasi travel guide', priority: 9 },
    { href: '/one-way-cab/varanasi-to-ayodhya', anchor: 'Varanasi to Ayodhya', priority: 8 },
    { href: '/round-trip/varanasi-to-prayagraj', anchor: 'Varanasi to Prayagraj round trip', priority: 8 },
    { href: '/one-way-cab/varanasi-to-prayagraj', anchor: 'Varanasi to Prayagraj', priority: 7 },
    { href: '/one-way-cab/varanasi-to-bodhgaya', anchor: 'Varanasi to Bodhgaya', priority: 7 },
  ],
  udaipur: [
    { href: '/udaipur', anchor: 'Udaipur taxi service', priority: 10 },
    { href: '/udaipur-travel-guide', anchor: 'Udaipur travel guide', priority: 9 },
    { href: '/one-way-cab/udaipur-to-jaipur', anchor: 'Udaipur to Jaipur', priority: 8 },
    { href: '/one-way-cab/udaipur-to-jodhpur', anchor: 'Udaipur to Jodhpur', priority: 8 },
    { href: '/one-way-cab/udaipur-to-mount-abu', anchor: 'Udaipur to Mount Abu', priority: 7 },
  ],
  jodhpur: [
    { href: '/jodhpur', anchor: 'Jodhpur taxi service', priority: 10 },
    { href: '/jodhpur-travel-guide', anchor: 'Jodhpur travel guide', priority: 9 },
    { href: '/one-way-cab/jodhpur-to-jaisalmer', anchor: 'Jodhpur to Jaisalmer', priority: 8 },
    { href: '/one-way-cab/jodhpur-to-udaipur', anchor: 'Jodhpur to Udaipur', priority: 8 },
    { href: '/one-way-cab/jodhpur-to-mount-abu', anchor: 'Jodhpur to Mount Abu', priority: 7 },
  ],
  shimla: [
    { href: '/shimla', anchor: 'Shimla taxi service', priority: 10 },
    { href: '/shimla-travel-guide', anchor: 'Shimla travel guide', priority: 9 },
    { href: '/round-trip/shimla-to-manali', anchor: 'Shimla to Manali round trip', priority: 8 },
    { href: '/one-way-cab/shimla-to-chandigarh', anchor: 'Shimla to Chandigarh', priority: 8 },
    { href: '/one-way-cab/shimla-to-delhi', anchor: 'Shimla to Delhi', priority: 7 },
  ],
  manali: [
    { href: '/manali', anchor: 'Manali taxi service', priority: 10 },
    { href: '/manali-travel-guide', anchor: 'Manali travel guide', priority: 9 },
    { href: '/round-trip/shimla-to-manali', anchor: 'Manali to Shimla round trip', priority: 8 },
    { href: '/one-way-cab/manali-to-delhi', anchor: 'Manali to Delhi', priority: 8 },
    { href: '/round-trip/kasol-to-manali', anchor: 'Manali to Kasol round trip', priority: 7 },
    { href: '/round-trip/dharamshala-to-manali', anchor: 'Manali to Dharamshala round trip', priority: 7 },
  ],
  dehradun: [
    { href: '/dehradun', anchor: 'Dehradun taxi service', priority: 10 },
    { href: '/airport-service/dehradun', anchor: 'Dehradun airport taxi', priority: 9 },
    { href: '/round-trip/dehradun-to-mussoorie', anchor: 'Dehradun to Mussoorie round trip', priority: 8 },
    { href: '/one-way-cab/dehradun-to-rishikesh', anchor: 'Dehradun to Rishikesh', priority: 8 },
    { href: '/round-trip/dehradun-to-nainital', anchor: 'Dehradun to Nainital round trip', priority: 7 },
    { href: '/dehradun-travel-guide', anchor: 'Dehradun travel guide', priority: 7 },
  ],

  // ------------------------------------------------------------------
  // Cities that previously fell through to the synthesized fallback in
  // getMoneyPageLinks(). The fallback guesses `/<city>-travel-guide` and
  // `/one-way-cab/delhi-to-<city>`, neither of which exists for most of
  // these — every href below is checked against the real route data.
  // ------------------------------------------------------------------
  jaisalmer: [
    { href: '/jaisalmer', anchor: 'Jaisalmer taxi service', priority: 10 },
    { href: '/jaisalmer-travel-guide', anchor: 'Jaisalmer travel guide', priority: 9 },
    { href: '/one-way-cab/jaisalmer-to-jodhpur', anchor: 'Jaisalmer to Jodhpur', priority: 8 },
    { href: '/one-way-cab/jaisalmer-to-jaipur', anchor: 'Jaisalmer to Jaipur', priority: 8 },
    { href: '/round-trip/jaipur-to-jaisalmer', anchor: 'Jaipur to Jaisalmer round trip', priority: 7 },
  ],
  bikaner: [
    { href: '/bikaner', anchor: 'Bikaner taxi service', priority: 10 },
    { href: '/airport-service/bikaner', anchor: 'Bikaner airport taxi', priority: 9 },
    { href: '/round-trip/delhi-to-bikaner', anchor: 'Delhi to Bikaner round trip', priority: 8 },
    { href: '/one-way-cab/jaipur-to-bikaner', anchor: 'Jaipur to Bikaner', priority: 8 },
    { href: '/one-way-cab/delhi-to-bikaner', anchor: 'Delhi to Bikaner one-way', priority: 7 },
  ],
  ajmer: [
    { href: '/ajmer', anchor: 'Ajmer taxi service', priority: 10 },
    { href: '/ajmer-travel-guide', anchor: 'Ajmer travel guide', priority: 9 },
    { href: '/one-way-cab/ajmer-to-jaipur', anchor: 'Ajmer to Jaipur', priority: 8 },
    { href: '/round-trip/jaipur-to-ajmer', anchor: 'Jaipur to Ajmer round trip', priority: 8 },
    { href: '/one-way-cab/delhi-to-ajmer', anchor: 'Delhi to Ajmer one-way', priority: 7 },
  ],
  pushkar: [
    { href: '/pushkar', anchor: 'Pushkar taxi service', priority: 10 },
    { href: '/pushkar-travel-guide', anchor: 'Pushkar travel guide', priority: 9 },
    { href: '/one-way-cab/jaipur-to-pushkar', anchor: 'Jaipur to Pushkar', priority: 8 },
    { href: '/round-trip/jaipur-to-pushkar', anchor: 'Jaipur to Pushkar round trip', priority: 8 },
    { href: '/one-way-cab/delhi-to-pushkar', anchor: 'Delhi to Pushkar one-way', priority: 7 },
  ],
  'mount-abu': [
    { href: '/mount-abu', anchor: 'Mount Abu taxi service', priority: 10 },
    { href: '/mount-abu-travel-guide', anchor: 'Mount Abu travel guide', priority: 9 },
    { href: '/round-trip/jaipur-to-mount-abu', anchor: 'Jaipur to Mount Abu round trip', priority: 8 },
    { href: '/one-way-cab/udaipur-to-mount-abu', anchor: 'Udaipur to Mount Abu', priority: 8 },
    { href: '/one-way-cab/delhi-to-mount-abu', anchor: 'Delhi to Mount Abu one-way', priority: 7 },
  ],
  ranthambore: [
    { href: '/ranthambore', anchor: 'Ranthambore taxi service', priority: 10 },
    { href: '/one-way-cab/jaipur-to-ranthambore', anchor: 'Jaipur to Ranthambore', priority: 9 },
    { href: '/round-trip/jaipur-to-ranthambore', anchor: 'Jaipur to Ranthambore round trip', priority: 8 },
    { href: '/one-way-cab/delhi-to-ranthambore', anchor: 'Delhi to Ranthambore one-way', priority: 7 },
  ],
  bharatpur: [
    { href: '/bharatpur', anchor: 'Bharatpur taxi service', priority: 10 },
    { href: '/one-way-cab/delhi-to-bharatpur', anchor: 'Delhi to Bharatpur one-way', priority: 9 },
    { href: '/round-trip/delhi-to-bharatpur', anchor: 'Delhi to Bharatpur round trip', priority: 8 },
    { href: '/one-way-cab/agra-to-jaipur', anchor: 'Agra to Jaipur one-way', priority: 7 },
  ],
  mathura: [
    { href: '/mathura', anchor: 'Mathura taxi service', priority: 10 },
    { href: '/mathura-vrindavan-travel-guide', anchor: 'Mathura & Vrindavan travel guide', priority: 9 },
    { href: '/one-way-cab/delhi-to-mathura', anchor: 'Delhi to Mathura one-way', priority: 8 },
    { href: '/round-trip/delhi-to-mathura', anchor: 'Delhi to Mathura round trip', priority: 8 },
    { href: '/one-way-cab/mathura-to-delhi', anchor: 'Mathura to Delhi', priority: 7 },
  ],
  vrindavan: [
    { href: '/vrindavan', anchor: 'Vrindavan taxi service', priority: 10 },
    { href: '/round-trip/delhi-to-vrindavan', anchor: 'Delhi to Vrindavan round trip', priority: 9 },
    { href: '/one-way-cab/delhi-to-vrindavan', anchor: 'Delhi to Vrindavan one-way', priority: 8 },
    { href: '/mathura-vrindavan-travel-guide', anchor: 'Mathura & Vrindavan travel guide', priority: 8 },
    { href: '/one-way-cab/vrindavan-to-delhi', anchor: 'Vrindavan to Delhi', priority: 7 },
  ],
  gwalior: [
    { href: '/gwalior', anchor: 'Gwalior taxi service', priority: 10 },
    { href: '/airport-service/gwalior', anchor: 'Gwalior airport taxi', priority: 9 },
    { href: '/one-way-cab/delhi-to-gwalior', anchor: 'Delhi to Gwalior one-way', priority: 8 },
    { href: '/round-trip/delhi-to-gwalior', anchor: 'Delhi to Gwalior round trip', priority: 8 },
    { href: '/one-way-cab/agra-to-jaipur', anchor: 'Agra to Jaipur one-way', priority: 6 },
  ],
  prayagraj: [
    { href: '/prayagraj', anchor: 'Prayagraj taxi service', priority: 10 },
    { href: '/airport-service/prayagraj', anchor: 'Prayagraj airport taxi', priority: 9 },
    { href: '/round-trip/varanasi-to-prayagraj', anchor: 'Varanasi to Prayagraj round trip', priority: 8 },
    { href: '/one-way-cab/prayagraj-to-lucknow', anchor: 'Prayagraj to Lucknow', priority: 8 },
    { href: '/one-way-cab/lucknow-to-prayagraj', anchor: 'Lucknow to Prayagraj', priority: 7 },
  ],
  bodhgaya: [
    { href: '/bodhgaya', anchor: 'Bodhgaya taxi service', priority: 10 },
    { href: '/one-way-cab/varanasi-to-bodhgaya', anchor: 'Varanasi to Bodhgaya', priority: 9 },
    { href: '/one-way-cab/delhi-to-bodhgaya', anchor: 'Delhi to Bodhgaya one-way', priority: 8 },
    { href: '/one-way-cab/delhi-to-gaya', anchor: 'Delhi to Gaya one-way', priority: 7 },
  ],
  nainital: [
    { href: '/nainital', anchor: 'Nainital taxi service', priority: 10 },
    { href: '/nainital-travel-guide', anchor: 'Nainital travel guide', priority: 9 },
    { href: '/one-way-cab/delhi-to-nainital', anchor: 'Delhi to Nainital one-way', priority: 8 },
    { href: '/round-trip/dehradun-to-nainital', anchor: 'Dehradun to Nainital round trip', priority: 8 },
    { href: '/one-way-cab/nainital-to-delhi', anchor: 'Nainital to Delhi', priority: 7 },
  ],
  mussoorie: [
    { href: '/mussoorie', anchor: 'Mussoorie taxi service', priority: 10 },
    { href: '/mussoorie-travel-guide', anchor: 'Mussoorie travel guide', priority: 9 },
    { href: '/round-trip/dehradun-to-mussoorie', anchor: 'Dehradun to Mussoorie round trip', priority: 8 },
    { href: '/round-trip/mussoorie-to-rishikesh', anchor: 'Mussoorie to Rishikesh round trip', priority: 8 },
    { href: '/one-way-cab/mussoorie-to-rishikesh', anchor: 'Mussoorie to Rishikesh', priority: 7 },
    { href: '/one-way-cab/delhi-to-mussoorie', anchor: 'Delhi to Mussoorie one-way', priority: 7 },
  ],
  'jim-corbett': [
    { href: '/jim-corbett', anchor: 'Jim Corbett taxi service', priority: 10 },
    { href: '/one-way-cab/delhi-to-corbett', anchor: 'Delhi to Jim Corbett one-way', priority: 9 },
    { href: '/round-trip/delhi-to-corbett', anchor: 'Delhi to Jim Corbett round trip', priority: 8 },
    { href: '/one-way-cab/jim-corbett-to-delhi', anchor: 'Jim Corbett to Delhi', priority: 7 },
  ],
  dharamshala: [
    { href: '/dharamshala', anchor: 'Dharamshala taxi service', priority: 10 },
    { href: '/dharamshala-travel-guide', anchor: 'Dharamshala travel guide', priority: 9 },
    { href: '/round-trip/dharamshala-to-manali', anchor: 'Dharamshala to Manali round trip', priority: 8 },
    { href: '/one-way-cab/amritsar-to-dharamshala', anchor: 'Amritsar to Dharamshala', priority: 8 },
    { href: '/one-way-cab/delhi-to-dharamshala', anchor: 'Delhi to Dharamshala one-way', priority: 7 },
  ],
  mcleodganj: [
    { href: '/mcleodganj', anchor: 'McLeodganj taxi service', priority: 10 },
    { href: '/dharamshala-travel-guide', anchor: 'Dharamshala & McLeodganj guide', priority: 9 },
    { href: '/one-way-cab/delhi-to-mcleodganj', anchor: 'Delhi to McLeodganj one-way', priority: 8 },
    { href: '/round-trip/chandigarh-to-mcleodganj', anchor: 'Chandigarh to McLeodganj round trip', priority: 8 },
    { href: '/one-way-cab/chandigarh-to-mcleodganj', anchor: 'Chandigarh to McLeodganj', priority: 7 },
  ],
  dalhousie: [
    { href: '/dalhousie', anchor: 'Dalhousie taxi service', priority: 10 },
    { href: '/dalhousie-travel-guide', anchor: 'Dalhousie travel guide', priority: 9 },
    { href: '/round-trip/delhi-to-dalhousie', anchor: 'Delhi to Dalhousie round trip', priority: 8 },
    { href: '/one-way-cab/chandigarh-to-dalhousie', anchor: 'Chandigarh to Dalhousie', priority: 8 },
    { href: '/one-way-cab/dalhousie-to-delhi', anchor: 'Dalhousie to Delhi', priority: 7 },
  ],
  kasol: [
    { href: '/kasol', anchor: 'Kasol taxi service', priority: 10 },
    { href: '/round-trip/kasol-to-manali', anchor: 'Kasol to Manali round trip', priority: 9 },
    { href: '/one-way-cab/delhi-to-kasol', anchor: 'Delhi to Kasol one-way', priority: 8 },
    { href: '/one-way-cab/chandigarh-to-kasol', anchor: 'Chandigarh to Kasol', priority: 8 },
    { href: '/round-trip/kasol-to-chandigarh', anchor: 'Kasol to Chandigarh round trip', priority: 7 },
  ],
  kasauli: [
    { href: '/kasauli', anchor: 'Kasauli taxi service', priority: 10 },
    { href: '/one-way-cab/chandigarh-to-kasauli', anchor: 'Chandigarh to Kasauli', priority: 9 },
    { href: '/round-trip/delhi-to-kasauli', anchor: 'Delhi to Kasauli round trip', priority: 8 },
    { href: '/one-way-cab/delhi-to-kasauli', anchor: 'Delhi to Kasauli one-way', priority: 7 },
  ],
  srinagar: [
    { href: '/srinagar', anchor: 'Srinagar taxi service', priority: 10 },
    { href: '/kashmir-travel-guide', anchor: 'Kashmir travel guide', priority: 9 },
    { href: '/airport-service/srinagar', anchor: 'Srinagar airport taxi', priority: 9 },
    { href: '/one-way-cab/srinagar-to-gulmarg', anchor: 'Srinagar to Gulmarg', priority: 8 },
    { href: '/one-way-cab/srinagar-to-pahalgam', anchor: 'Srinagar to Pahalgam', priority: 8 },
    { href: '/one-way-cab/delhi-to-sonamarg', anchor: 'Delhi to Sonamarg one-way', priority: 7 },
  ],
  gulmarg: [
    { href: '/gulmarg', anchor: 'Gulmarg taxi service', priority: 10 },
    { href: '/one-way-cab/srinagar-to-gulmarg', anchor: 'Srinagar to Gulmarg', priority: 9 },
    { href: '/one-way-cab/delhi-to-gulmarg', anchor: 'Delhi to Gulmarg one-way', priority: 8 },
    { href: '/kashmir-travel-guide', anchor: 'Kashmir travel guide', priority: 8 },
    { href: '/airport-service/srinagar', anchor: 'Srinagar airport taxi', priority: 7 },
  ],
  pahalgam: [
    { href: '/pahalgam', anchor: 'Pahalgam taxi service', priority: 10 },
    { href: '/one-way-cab/srinagar-to-pahalgam', anchor: 'Srinagar to Pahalgam', priority: 9 },
    { href: '/one-way-cab/delhi-to-pahalgam', anchor: 'Delhi to Pahalgam one-way', priority: 8 },
    { href: '/kashmir-travel-guide', anchor: 'Kashmir travel guide', priority: 8 },
    { href: '/airport-service/srinagar', anchor: 'Srinagar airport taxi', priority: 7 },
  ],
  'leh-ladakh': [
    { href: '/leh-ladakh', anchor: 'Leh Ladakh taxi service', priority: 10 },
    { href: '/round-trip/delhi-to-leh', anchor: 'Delhi to Leh round trip', priority: 9 },
    { href: '/one-way-cab/delhi-to-leh', anchor: 'Delhi to Leh one-way', priority: 8 },
    { href: '/one-way-cab/delhi-to-manali', anchor: 'Delhi to Manali one-way', priority: 7 },
    { href: '/manali-travel-guide', anchor: 'Manali travel guide', priority: 6 },
  ],
  meerut: [
    { href: '/meerut', anchor: 'Meerut taxi service', priority: 10 },
    { href: '/one-way-cab/delhi-to-meerut', anchor: 'Delhi to Meerut one-way', priority: 9 },
    { href: '/round-trip/delhi-to-meerut', anchor: 'Delhi to Meerut round trip', priority: 8 },
    { href: '/one-way-cab/delhi-to-haridwar', anchor: 'Delhi to Haridwar one-way', priority: 7 },
  ],
  ghaziabad: [
    { href: '/ghaziabad', anchor: 'Ghaziabad taxi service', priority: 10 },
    { href: '/one-way-cab/delhi-to-ghaziabad', anchor: 'Delhi to Ghaziabad one-way', priority: 9 },
    { href: '/airport-service/delhi', anchor: 'Delhi IGI airport taxi', priority: 8 },
    { href: '/one-way-cab/delhi-to-agra', anchor: 'Delhi to Agra one-way', priority: 7 },
  ],
  noida: [
    { href: '/noida', anchor: 'Noida taxi service', priority: 10 },
    { href: '/one-way-cab/noida-to-agra', anchor: 'Noida to Agra one-way', priority: 9 },
    { href: '/airport-service/jewar', anchor: 'Jewar airport taxi', priority: 8 },
    { href: '/airport-service/delhi', anchor: 'Delhi IGI airport taxi', priority: 8 },
    { href: '/one-way-cab/delhi-to-agra', anchor: 'Delhi to Agra one-way', priority: 7 },
  ],
  'greater-noida': [
    { href: '/greater-noida', anchor: 'Greater Noida taxi service', priority: 10 },
    { href: '/airport-service/jewar', anchor: 'Jewar airport taxi', priority: 9 },
    { href: '/one-way-cab/noida-to-agra', anchor: 'Noida to Agra one-way', priority: 8 },
    { href: '/airport-service/delhi', anchor: 'Delhi IGI airport taxi', priority: 7 },
  ],
  gurgaon: [
    { href: '/gurgaon', anchor: 'Gurgaon taxi service', priority: 10 },
    { href: '/one-way-cab/gurgaon-to-jaipur', anchor: 'Gurgaon to Jaipur one-way', priority: 9 },
    { href: '/airport-service/delhi', anchor: 'Delhi IGI airport taxi', priority: 8 },
    { href: '/one-way-cab/delhi-to-agra', anchor: 'Delhi to Agra one-way', priority: 7 },
  ],
  faridabad: [
    { href: '/faridabad', anchor: 'Faridabad taxi service', priority: 10 },
    { href: '/one-way-cab/delhi-to-faridabad', anchor: 'Delhi to Faridabad one-way', priority: 9 },
    { href: '/airport-service/delhi', anchor: 'Delhi IGI airport taxi', priority: 8 },
    { href: '/one-way-cab/delhi-to-agra', anchor: 'Delhi to Agra one-way', priority: 7 },
  ],
  ahmedabad: [
    { href: '/ahmedabad', anchor: 'Ahmedabad taxi service', priority: 10 },
    { href: '/one-way-cab', anchor: 'One-way cab routes', priority: 7 },
    { href: '/round-trip-cab', anchor: 'Round-trip cab service', priority: 7 },
    { href: '/tempo-traveller', anchor: 'Tempo Traveller hire', priority: 6 },
  ],
};

// ------------------------------------------------------------------
// Silo hubs — one per service category. Used by getSiloHubLinks().
// ------------------------------------------------------------------
const SILO_HUBS = {
  'one-way': { href: '/one-way-cab', anchor: 'One-way cab routes' },
  'round-trip': { href: '/round-trip-cab', anchor: 'Round-trip cab' },
  airport: { href: '/airport-service', anchor: 'Airport transfers' },
  tempo: { href: '/tempo-traveller', anchor: 'Tempo Traveller hire' },
  bus: { href: '/bus-routes', anchor: 'Bus charter routes' },
  wedding: { href: '/wedding', anchor: 'Wedding car rental' },
  corporate: { href: '/corporate-transportation-service', anchor: 'Corporate transport' },
  event: { href: '/event-transportation-service', anchor: 'Event transportation' },
  sightseeing: { href: '/sightseeing', anchor: 'Sightseeing tours' },
  chardham: { href: '/chardham-yatra', anchor: 'Char Dham Yatra' },
  'tours-with-guide': { href: '/tours-with-guide', anchor: 'Tours with guide' },
};

/**
 * Money-page links for a city. Falls back to silo hubs + city-topical guides
 * when the city is not in the hand-curated MONEY_PAGES_BY_CITY map.
 */
export function getMoneyPageLinks(city, limit = 5) {
  if (!city) return [];
  const key = String(city).toLowerCase().replace(/\s+/g, '-');
  const list = MONEY_PAGES_BY_CITY[key];
  if (list) {
    return [...list].sort((a, b) => b.priority - a.priority).slice(0, limit);
  }
  // Fallback for un-mapped cities: synthesize from convention.
  return [
    { href: `/${key}`, anchor: `${capitalize(city)} taxi service` },
    { href: `/${key}-travel-guide`, anchor: `${capitalize(city)} travel guide` },
    { href: `/one-way-cab/delhi-to-${key}`, anchor: `Delhi to ${capitalize(city)} one-way` },
  ].slice(0, limit);
}

/**
 * Adjacent routes for a one-way slug like 'delhi-to-agra'.
 * Returns "other destinations from Delhi" and "other origins to Agra".
 */
export function getRelatedRoutes(slug, limit = 6) {
  if (!slug || typeof slug !== 'string') return [];
  const m = slug.match(/^(.+?)-to-(.+)$/);
  if (!m) return [];
  const [, from, to] = m;
  const fromPascal = pascalize(from);
  const toPascal = pascalize(to);

  const allRoutes = { ...cityRoutesData, ...basicCityRoutes };
  const out = [];

  // Other destinations from the same origin city
  const sameOriginRoutes = allRoutes[fromPascal] || [];
  for (const r of sameOriginRoutes) {
    if (slugify(r.destination) === to) continue;
    out.push({
      href: `/one-way-cab/${from}-to-${slugify(r.destination)}`,
      anchor: `${capitalize(from)} to ${r.destination} one-way`,
    });
    if (out.length >= Math.ceil(limit / 2)) break;
  }

  // Other origins to the same destination
  const before = out.length;
  for (const [originCity, routes] of Object.entries(allRoutes)) {
    if (slugify(originCity) === from) continue;
    const hit = routes.find((r) => slugify(r.destination) === to);
    if (hit) {
      out.push({
        href: `/one-way-cab/${slugify(originCity)}-to-${to}`,
        anchor: `${originCity} to ${toPascal} one-way`,
      });
      if (out.length - before >= Math.floor(limit / 2)) break;
    }
  }

  return out.slice(0, limit);
}

/**
 * Silo hub links — used on category pages to cross-link sibling categories.
 * `exclude` is the slug of the current silo (so you don't link to yourself).
 */
export function getSiloHubLinks(exclude = null, limit = 6) {
  return Object.entries(SILO_HUBS)
    .filter(([k]) => k !== exclude)
    .slice(0, limit)
    .map(([, v]) => v);
}

/**
 * Topical city adjacency — travel guide ↔ food tour ↔ shopping ↔ itinerary.
 * Filtered against an allowlist of cities we know publish that page type.
 */
const TOPICAL_CITIES = new Set(['agra', 'amritsar', 'jaipur', 'delhi', 'chandigarh', 'lucknow', 'varanasi', 'udaipur']);

export function getCityTopicalLinks(city, exclude = null) {
  if (!city) return [];
  const key = String(city).toLowerCase().replace(/\s+/g, '-');
  if (!TOPICAL_CITIES.has(key)) return [];
  const cap = capitalize(key);
  const all = [
    { kind: 'travel-guide', href: `/${key}-travel-guide`, anchor: `${cap} travel guide` },
    { kind: 'food-tour', href: `/${key}-food-tour`, anchor: `${cap} food tour` },
    { kind: 'shopping-guide', href: `/${key}-shopping-guide`, anchor: `${cap} shopping guide` },
    { kind: '1-day-itinerary', href: `/${key}-in-1-day-itinerary`, anchor: `1-day ${cap} itinerary` },
    { kind: '2-day-itinerary', href: `/${key}-in-2-days-itinerary`, anchor: `2-day ${cap} itinerary` },
  ];
  return all.filter((x) => x.kind !== exclude).map(({ href, anchor }) => ({ href, anchor }));
}

// ------------------------------------------------------------------
// utilities
// ------------------------------------------------------------------
function slugify(s) {
  return String(s || '').toLowerCase().replace(/\s+/g, '-');
}
function capitalize(s) {
  if (!s) return '';
  return String(s).split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}
function pascalize(s) {
  // 'delhi' → 'Delhi', 'new-delhi' → 'New Delhi' (matches cityRoutesData keys)
  return String(s || '').split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}
