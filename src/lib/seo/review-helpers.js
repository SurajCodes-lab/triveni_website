/**
 * Shared review-schema helpers for events + corporate verticals.
 *
 * Why: Pages used to render `aggregateRating.reviewCount: 10000` which Google
 * now treats as schema spam. This file produces deterministic per-slug counts
 * (50-180) and 3 Review objects from rotating reviewer pools, identical in
 * spirit to `getAirportRouteServiceSchema` in `airportOutstationData.js`.
 */

import { ratingAndReviews } from './business-rating';

function hashSlug(slug) {
  return String(slug || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
}

export function getDeterministicReviewCount(slug, min = 50, max = 180) {
  const range = max - min + 1;
  return min + (hashSlug(slug) % range);
}

const _EVENT_REVIEW_POOL = [
  { name: "Anjali Verma", body: "Triveni Cabs™ handled the bus shuttle for our 200-guest wedding in Jaipur. Three buses, all on time, drivers were courteous and helped elderly relatives board. Single point of contact made coordination easy." },
  { name: "Rahul Sethi", body: "Booked Triveni Cabs™ for a 3-day corporate offsite to Mussoorie — 4 tempo travellers, 60 employees. Pickups from multiple Delhi locations, GST invoice on time, and the operations manager was reachable throughout." },
  { name: "Priyanka Nair", body: "Used Triveni for our annual concert shuttle service. Buses arrived 30 minutes early at the pickup point, smooth ride to venue, and return shuttles ran like clockwork. Will definitely repeat next year." },
  { name: "Karthik Iyer", body: "Destination wedding logistics in Udaipur — Triveni Cabs™ coordinated 5 vehicles across 4 days for guest pickups, sangeet, and vidai. Decorated cars looked premium, drivers were professional in formals." },
  { name: "Sunita Reddy", body: "Booked Triveni for our company's exhibition in Pragati Maidan. 20 staff members, multi-stop pickup across Delhi NCR, hassle-free billing through corporate account. Highly recommend for B2B events." },
  { name: "Amit Gupta", body: "Religious yatra for 30 senior citizens — Triveni Cabs™ provided a comfortable AC tempo with experienced driver familiar with temple routes. Stops, prayer breaks, and meal halts all coordinated thoughtfully." },
];

const _WEDDING_REVIEW_POOL = [
  { name: "Aarti & Rohan Khanna", body: "Booked the BMW 5-Series from Triveni Cabs™ for our December Delhi wedding. Spotless white car, fresh rose-petal decoration on the day, chauffeur in formal whites. The varmala entry photos came out gorgeous. Worth every rupee for the wedding album." },
  { name: "Priya Iyer", body: "Triveni Cabs™ handled my Jaipur destination wedding — Audi A6 for bride entry, decorated baraat tempo for 22 guests, plus shuttle cars for relatives between hotel and venue. One coordinator, transparent invoice, zero last-minute panic. Highly recommend for big-fat Indian weddings." },
  { name: "Vikram & Neha Arora", body: "Hired the Mercedes E-Class from Triveni Cabs™ for our Udaipur palace wedding. The chauffeur arrived early to coordinate with the wedding planner, vehicle was decorated with white orchids as requested, and stayed available for the full reception. Premium service for a premium wedding." },
  { name: "Saurabh Mishra", body: "Booked a vintage car from Triveni Cabs™ for my sister's wedding in Lucknow. Beautifully maintained 1960s Ambassador with classic decoration — drew a crowd at every signal. Driver was patient with the photographer's requests. Brought back royal Nawabi vibes." },
  { name: "Ritika Sehgal", body: "Hired a 26-seater Maharaja Tempo Traveller from Triveni Cabs™ for our Agra baraat. Decorated with marigolds, full DJ-style music system, comfortable pushback seats for the dance-loving baratis. Professional driver navigated the procession through narrow lanes without any drama." },
  { name: "Sandeep Choudhary", body: "Used Triveni Cabs™ for full-week wedding logistics in Chandigarh — mehendi, sangeet, wedding, reception. 5 vehicles across 4 days, single point of contact, GST invoice for the entire package. Saved us from juggling multiple vendors during the busiest week of our lives." },
];

const _YATRA_REVIEW_POOL = [
  { name: "Pandit Suresh Sharma", body: "Triveni Cabs™ handled our family Chardham Yatra in May 2026 — Innova Crysta from Delhi, 11 days, all four dhams. Driver knew Kedarnath helicopter timing, Badrinath darshan rush, Gangotri Yamunotri trekking points. No vehicle breakdown across 1,800 km of mountain roads." },
  { name: "Mukesh Garg", body: "Booked an Ertiga from Triveni Cabs™ for Do Dham (Kedarnath + Badrinath) from Haridwar. The hill driver was a calm, experienced yatri-friendly Pahari — handled landslide diversions near Sonprayag without panicking. Affordable rate, transparent fare." },
  { name: "Asha Devi", body: "Group of 12 senior citizens booked the Tempo Traveller from Triveni Cabs™ for Chardham Yatra. Comfortable pushback seats made the long journey bearable. Driver took breaks at every dharamshala for puja. Highly recommend for elderly pilgrims." },
  { name: "Rajiv Kapoor", body: "Booked Triveni Cabs™ Fortuner SUV for VIP Chardham Yatra. 4x4 capability handled the post-monsoon road conditions in September perfectly. Driver was punctual at every aarti time and helped with priest coordination at all four dhams." },
  { name: "Lata Mishra", body: "Used Triveni Cabs™ Sedan for Kedarnath-only yatra from Rishikesh. Affordable budget option, AC worked at lower altitudes, parked safely at Sonprayag while we did the Gaurikund trek. Excellent value for solo or couple yatris." },
  { name: "Pradip Yadav", body: "Booked Kanwar Yatra cab from Triveni Cabs™ — Delhi to Haridwar overnight. Driver was respectful of our jalwa, kept music respectful, and handled the Roorkee diversion smoothly. Round-trip with wait time was clearly priced. Will book for next Shravan." },
];

const _CITY_REVIEW_POOL = [
  { name: "Rohit Singla", body: "Booked Triveni Cabs™ for a full day in the city. Driver knew every shortcut, the AC sedan was clean, and the per-km billing was transparent on the final bill. Will be my default cab service from now on." },
  { name: "Smita Joshi", body: "Used Triveni Cabs™ for both airport pickup and local sightseeing on my city visit. Same vendor, two services, GST invoice on email. Saved me from juggling multiple cab apps. Highly recommend." },
  { name: "Vivek Malhotra", body: "Triveni Cabs™ handled our family week in the city — daily local trips, two outstation day trips, and the airport drop. Same trusted driver throughout, no surge pricing nonsense even during peak hours." },
  { name: "Aparna Desai", body: "Hired Triveni Cabs™ for a women-only city tour. Driver was professional, vehicle had safety features (panic button, GPS shared with family), and the route was optimised for our list of attractions. Felt safe end-to-end." },
  { name: "Karan Jaiswal", body: "Booked Triveni Cabs™ for a same-day business meeting in another city. SUV was business-class clean, driver waited patiently between meetings, no extra charges for waiting time. Far better than aggregator surge fares." },
  { name: "Lalita Pillai", body: "Triveni Cabs™ handled my elderly mother's medical-visit cab needs across the city for two months. Same female-friendly driver, monthly billing, and 24/7 helpline that actually picked up. Genuinely caring service." },
];

const _OUTSTATION_REVIEW_POOL = [
  { name: "Mohit Saxena", body: "Booked Triveni Cabs™ one-way Delhi to Agra Sedan at ₹2,530. Clean Swift Dzire, FASTag-equipped, doorstep pickup at 6 AM sharp. Driver was polite and the AC worked perfectly through the Yamuna Expressway drive. No surprise charges at drop-off." },
  { name: "Anita Khurana", body: "Two-day Delhi-Jaipur-Pushkar round trip with Triveni Cabs™. Same driver throughout, knew the city well, waited patiently while we did sightseeing in Jaipur. The 10% round-trip discount made it cheaper than two separate one-way fares. Highly recommend." },
  { name: "Pavan Reddy", body: "Family of 6 booked an Innova Crysta Delhi to Shimla one-way with Triveni Cabs™. Hill driver experienced with mountain roads, vehicle clean, AC worked in lower elevations. Reached Shimla 30 minutes ahead of estimated time. Will definitely book again." },
  { name: "Ritu Singhal", body: "Booked Triveni Cabs™ round trip Jaipur to Udaipur for our anniversary trip. Driver was professional, willing to stop at Pushkar and Nathdwara on the return. Hotel pickup-drop, fixed fare, no GPS surge nonsense. Best outstation cab service I have used." },
  { name: "Faisal Ahmed", body: "Last-minute one-way Delhi to Chandigarh booking via Triveni Cabs™ WhatsApp. Driver arrived in 90 minutes, clean Ertiga SUV with extra luggage space for our move. Transparent fare, FASTag tolls already on bill, no haggling at the destination." },
  { name: "Sangeeta Krishnan", body: "Multi-day Delhi to Manali round trip with Triveni Cabs™. The driver stayed at our homestay, took us to Solang Valley and Rohtang Pass on Day 2, and dropped us back to Delhi on Day 4. Same friendly face throughout — felt like family chauffeur, not a stranger." },
];

const _BUS_REVIEW_POOL = [
  { name: "Harish Rana", body: "Booked a 45-seater Volvo from Triveni Cabs™ for our IT company's annual offsite to Manali. 45 employees, two-day journey, AC worked flawlessly even on the climb. Driver was experienced with hill roads, music system kept the team energised. GST invoice came on schedule." },
  { name: "Shruti Banerjee", body: "Hired a 35-seater bus from Triveni Cabs™ for our wedding baraat in Jaipur. Decorated as requested, reclining seats kept everyone comfortable for the long ride. The chauffeur arrived 90 minutes early and was professional throughout the function." },
  { name: "Joseph Mathew", body: "Booked a 56-seater luxury Volvo for a 7-day Rajasthan pilgrimage circuit covering Pushkar, Ajmer, Khatu Shyam and Salasar. Two drivers, washroom-equipped bus, no breakdown across 1,400 km. Highly recommend Triveni Cabs™ for long-distance group travel." },
  { name: "Deepika Iyer", body: "Used Triveni Cabs™ 32-seater for our school's educational trip from Delhi to Agra. First-aid kit, speed governor, GPS tracking shared with parents — every safety request was already standard. Driver was patient with students throughout sightseeing stops." },
  { name: "Aditya Bhasin", body: "Hired a 41-seater AC bus from Triveni Cabs™ for our college fest. Reasonable per-km rate, arrived on time, the entertainment system was a hit. Booking was done in 15 minutes via WhatsApp with no hidden charges added later." },
  { name: "Geeta Pandey", body: "Triveni Cabs™ 22-seater mini bus for our family pilgrimage Haridwar to Char Dham. The smaller size handled mountain hairpin bends better than a large bus would have. Driver knew every temple route and arranged optimal stops for elderly passengers." },
];

const _TEMPO_REVIEW_POOL = [
  { name: "Naveen Bhardwaj", body: "Booked a 17-seater tempo from Triveni Cabs™ for our family pilgrimage Delhi to Haridwar to Rishikesh. AC worked flawlessly even in summer heat, pushback seats were genuinely comfortable, and the driver knew the mountain stretches well. Highly recommend." },
  { name: "Megha Aggarwal", body: "Used Triveni Cabs™ 20-seater tempo for a 4-day Rajasthan trip — Delhi to Jaipur to Udaipur to Jodhpur. LED TV and good music system kept the kids entertained. Driver was patient with sightseeing stops, no pressure to rush. Will book again." },
  { name: "Suresh Patel", body: "Booked the 26-seater Maharaja tempo for a wedding baraat in Agra. Spacious, clean, decorated as requested. The professional chauffeur arrived an hour early and stayed throughout the function. Saved us from coordinating multiple cars." },
  { name: "Lakshmi Krishnan", body: "Triveni Cabs™ 12-seater tempo for our office offsite to Manali. GPS tracking shared with HR, driver was punctual at every shift point, and the per-km billing was transparent on the final invoice." },
  { name: "Ravi Choudhary", body: "Multi-day Chardham Yatra by tempo traveller — Triveni Cabs™ assigned an experienced hill driver who knew Kedarnath and Badrinath routes inside out. Vehicle never had any breakdown over 8 days. Pilgrimage was stress-free." },
  { name: "Tina D'Souza", body: "Hired a 17-seater for our school's Delhi-to-Agra educational trip. Triveni Cabs™ sent a clean, well-maintained vehicle with first-aid kit. Driver was very polite with the kids and stayed with the group during sightseeing." },
];

const _SIGHTSEEING_REVIEW_POOL = [
  { name: "Akshay Bhalla", body: "Booked Triveni Cabs™ for the Delhi full-day city tour. Driver Ramesh knew Red Fort entry timing, Qutub Minar shortcut, and the best Old Delhi parantha stop in Chandni Chowk. Covered 7 attractions in 9 hours, didn't feel rushed." },
  { name: "Meera Subramanian", body: "Took the Jaipur full-day sightseeing tour. Amber Fort sunrise was magical — driver suggested going at 8 AM before the tour-bus crowds. Sheesh Mahal photographs came out spectacular. Hawa Mahal external view + City Palace + Jantar Mantar all done by 4 PM." },
  { name: "Donovan Pereira", body: "Did the Agra same-day tour from Delhi with Triveni Cabs™. 6 AM Innova pickup, sunrise at the Taj East Gate by 7:15, Agra Fort by 11, Fatehpur Sikri by 2 PM. Pinch of Spice for Mughlai lunch. Back Delhi 8 PM. Worth every rupee for the structured pace." },
  { name: "Pooja Saxena", body: "Triveni Cabs™ handled our Udaipur 2-day sightseeing. City Palace + Jagdish Temple morning, boat ride on Lake Pichola at sunset (driver booked tickets in advance). Day 2: Saheliyon-ki-Bari, Sajjangarh, Bagore-ki-Haveli evening Dharohar show. Faultless planning." },
  { name: "Vikrant Joshi", body: "Booked the Golden Triangle 5-day Sightseeing with Triveni Cabs™ — Delhi, Agra, Fatehpur Sikri, Jaipur. Innova Crysta, same driver throughout, hotels were 4-star verified. The Mehtab Bagh sunset stop he suggested on Day 2 wasn't in the itinerary but became our trip's best photo." },
  { name: "Ananya Kothari", body: "Used Triveni Cabs™ for Varanasi spiritual sightseeing. Subah-e-Banaras boat ride at 5 AM, Kashi Vishwanath corridor by 8, BHU campus tour, Sarnath afternoon. Driver respected our pace at every ghat, didn't push us to hurry. Most contemplative tour I've done in India." },
];

const _CORPORATE_REVIEW_POOL = [
  { name: "Vikram Mehra", body: "Moved 140 employees to Triveni for our Gurgaon Cyber City night-shift transport. Three months in: zero no-shows, monthly GST invoice on time, and a dedicated account manager who picks up on first ring. Far ahead of our previous vendor." },
  { name: "Shalini Agarwal", body: "Triveni handles airport transfers for all our visiting CXOs. Executive sedans, well-groomed chauffeurs, flight tracking always on point. Our CFO specifically asked to make Triveni the default vendor after his second trip." },
  { name: "Rajesh Kumar", body: "Fleet management for our IT park in Noida — 60 employees, 3 routes, 2 shifts. Transparent per-seat billing, real-time tracking dashboard for HR. Switched from a bigger vendor to Triveni last year and haven't looked back." },
  { name: "Neha Kapoor", body: "BPO night shift transport for 80 staff — Triveni Cabs™ offered women's safety protocols (female guard escort, GPS-monitored routes, helpline). Compliance team approved without follow-ups." },
  { name: "Arjun Khanna", body: "Monthly corporate car rental for our regional sales head. Same driver assigned, full kilometers logged, predictable monthly cost. Beats the unpredictability of aggregator surge pricing for business use." },
  { name: "Pooja Sharma", body: "Hospital staff shuttle service across 4 shifts. Triveni Cabs™ maintained 99.5% on-time performance over 6 months. Dedicated coordinator handles everything — we just signed off on monthly invoices." },
];

export function getEventReviews(slug) {
  const start = hashSlug(slug) % _EVENT_REVIEW_POOL.length;
  return [0, 1, 2].map(i => _EVENT_REVIEW_POOL[(start + i) % _EVENT_REVIEW_POOL.length]);
}

export function getCorporateReviews(slug) {
  const start = hashSlug(slug) % _CORPORATE_REVIEW_POOL.length;
  return [0, 1, 2].map(i => _CORPORATE_REVIEW_POOL[(start + i) % _CORPORATE_REVIEW_POOL.length]);
}

export function getTempoReviews(slug) {
  const start = hashSlug(slug) % _TEMPO_REVIEW_POOL.length;
  return [0, 1, 2].map(i => _TEMPO_REVIEW_POOL[(start + i) % _TEMPO_REVIEW_POOL.length]);
}

export function getBusReviews(slug) {
  const start = hashSlug(slug) % _BUS_REVIEW_POOL.length;
  return [0, 1, 2].map(i => _BUS_REVIEW_POOL[(start + i) % _BUS_REVIEW_POOL.length]);
}

export function getOutstationReviews(slug) {
  const start = hashSlug(slug) % _OUTSTATION_REVIEW_POOL.length;
  return [0, 1, 2].map(i => _OUTSTATION_REVIEW_POOL[(start + i) % _OUTSTATION_REVIEW_POOL.length]);
}

export function getCityReviews(slug) {
  const start = hashSlug(slug) % _CITY_REVIEW_POOL.length;
  return [0, 1, 2].map(i => _CITY_REVIEW_POOL[(start + i) % _CITY_REVIEW_POOL.length]);
}

export function getYatraReviews(slug) {
  const start = hashSlug(slug) % _YATRA_REVIEW_POOL.length;
  return [0, 1, 2].map(i => _YATRA_REVIEW_POOL[(start + i) % _YATRA_REVIEW_POOL.length]);
}

export function getWeddingReviews(slug) {
  const start = hashSlug(slug) % _WEDDING_REVIEW_POOL.length;
  return [0, 1, 2].map(i => _WEDDING_REVIEW_POOL[(start + i) % _WEDDING_REVIEW_POOL.length]);
}

export function getSightseeingReviews(slug) {
  const start = hashSlug(slug) % _SIGHTSEEING_REVIEW_POOL.length;
  return [0, 1, 2].map(i => _SIGHTSEEING_REVIEW_POOL[(start + i) % _SIGHTSEEING_REVIEW_POOL.length]);
}

/**
 * City geo coordinates for event-city Place schema. Used to anchor city-event
 * Service schemas to real-world geographic entities for AEO/GEO entity graphs.
 */
const _CITY_GEO = {
  delhi: { lat: "28.6139", lng: "77.2090", state: "Delhi", postalCode: "110001" },
  agra: { lat: "27.1767", lng: "78.0081", state: "Uttar Pradesh", postalCode: "282001" },
  jaipur: { lat: "26.9124", lng: "75.7873", state: "Rajasthan", postalCode: "302001" },
  chandigarh: { lat: "30.7333", lng: "76.7794", state: "Chandigarh", postalCode: "160001" },
  dehradun: { lat: "30.3165", lng: "78.0322", state: "Uttarakhand", postalCode: "248001" },
  shimla: { lat: "31.1048", lng: "77.1734", state: "Himachal Pradesh", postalCode: "171001" },
  manali: { lat: "32.2396", lng: "77.1887", state: "Himachal Pradesh", postalCode: "175131" },
  amritsar: { lat: "31.6340", lng: "74.8723", state: "Punjab", postalCode: "143001" },
  haridwar: { lat: "29.9457", lng: "78.1642", state: "Uttarakhand", postalCode: "249401" },
  lucknow: { lat: "26.8467", lng: "80.9462", state: "Uttar Pradesh", postalCode: "226001" },
  udaipur: { lat: "24.5854", lng: "73.7125", state: "Rajasthan", postalCode: "313001" },
  varanasi: { lat: "25.3176", lng: "82.9739", state: "Uttar Pradesh", postalCode: "221001" },
  noida: { lat: "28.5355", lng: "77.3910", state: "Uttar Pradesh", postalCode: "201301" },
  gurgaon: { lat: "28.4595", lng: "77.0266", state: "Haryana", postalCode: "122001" }
};

/**
 * Build a Place schema for a city, optionally with `popularVenues` rendered as
 * `containsPlace` children. Suitable for inclusion as a sibling JSON-LD block
 * alongside the Service schema on event/corporate city pages.
 */
export function getCityPlaceSchema(citySlug, cityName, popularVenues = []) {
  const slug = String(citySlug).toLowerCase();
  const geo = _CITY_GEO[slug];
  if (!geo) return null;
  return {
    "@context": "https://schema.org",
    "@type": "City",
    "@id": `https://www.trivenicabs.in/event-transportation-service/city/${slug}/#place`,
    "name": cityName || slug.charAt(0).toUpperCase() + slug.slice(1),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName || slug,
      "addressRegion": geo.state,
      "postalCode": geo.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.lat,
      "longitude": geo.lng
    },
    ...(popularVenues.length > 0 ? {
      "containsPlace": popularVenues.map(v => ({
        "@type": "Place",
        "name": v.name,
        "additionalType": v.type,
        "containedInPlace": { "@id": `https://www.trivenicabs.in/event-transportation-service/city/${slug}/#place` }
      }))
    } : {})
  };
}

/**
 * Returns aggregateRating + review[] schema fragments to merge into a Service schema.
 * Pass vertical: 'event' or 'corporate'.
 */
export function getRatingAndReviews(slug, vertical = 'event') {
  // Week 52 — this returned a hardcoded 4.9, a reviewCount derived from a hash
  // of the slug, and three Review nodes drawn from the hand-written pools above,
  // with author names and review bodies composed in this file.
  //
  // Measured across the build: 128 distinct review author names and 12,396
  // instances of the 4.9 were going out in structured markup. None of it was
  // collected from a customer, which is what Google's structured-data policy
  // treats as spam — and the exposure is not limited to review snippets, since
  // a manual action for spammy markup can remove every rich result the site
  // earns. Self-serving reviews about one's own business have also not been
  // eligible for a review snippet since 2019, so the markup carried the risk
  // without earning the thing it existed to earn.
  //
  // Rating and review markup now comes from one place, and only when there is
  // verified data behind it. When there is not, this returns an empty object:
  // every consumer either spreads it — so both keys vanish — or reads the
  // properties directly and gets undefined, which JSON.stringify drops. Either
  // way the markup is absent rather than invented.
  //
  // The reviewer pools above are deliberately left in place, unreferenced. They
  // are the record of what was being published, and deleting them would make
  // this change harder to audit. Do not wire them back in.
  //
  // To publish real data, populate VERIFIED in src/lib/seo/business-rating.js.
  //
  // ---------------------------------------------------------------------------
  // WHY THIS STAYS EMPTY EVEN NOW THAT VERIFIED HOLDS REAL FIGURES
  // ---------------------------------------------------------------------------
  // The Google Business Profile's 4.9 from 354 reviews is a rating *of the
  // business*. It is published, correctly, on the LocalBusiness node in
  // src/app/layout.js — which renders on all 3,833 pages, so the verified
  // rating reaches every page of the site from there.
  //
  // This function is different. Its callers attach what it returns to a
  // per-route Service or Product node: "Delhi to Agra taxi service",
  // "Innova Crysta hire, Jaipur to Udaipur", and roughly fifty more templates.
  // Returning the aggregate here would claim all 354 reviews for each of those
  // individually — asserting that 354 people reviewed one corridor's service,
  // several thousand times over, from one pool of 354 real reviews.
  //
  // That is the same misattribution the composed markup was removed for, in a
  // more defensible costume: the number is now real, but the thing it is being
  // attached to is not what was reviewed. A rating on a Service node is
  // supposed to be a rating of that service.
  //
  // So the aggregate is published once, on the entity it actually describes,
  // and the per-route nodes carry no rating. If per-service ratings are ever
  // wanted they need per-service reviews collected against each route, which
  // is a different and much larger undertaking.
  void slug; void vertical;
  return {};
}
