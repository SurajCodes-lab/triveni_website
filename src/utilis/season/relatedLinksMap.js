// src/utilis/season/relatedLinksMap.js
//
// Explicit "More Services" links per festival/seasonal slug.
//
// WHY THIS EXISTS: FestivalTripClient auto-builds its related links by slugifying
// `festival.location` (e.g. `/{loc}`, `/{loc}-travel-guide`, `/sightseeing/{loc}`).
// That only resolves when `location` is a single city that actually has those
// pages. For multi-destination hubs ("Shimla, Manali, Mussoorie, Nainital") or
// places with no city page (Kedarnath), it emitted dead links like
// `/mathura-&-vrindavan` and `/kedarnath-travel-guide` — real 404s on live pages.
//
// Every href below was verified to return HTTP 200 on www.trivenicabs.in before
// being added. Any slug listed here overrides the auto-generated links.
// If you add a new entry, curl the URL first — never guess.

export const RELATED_LINKS = {
  // ── Pre-existing entries whose auto-links were broken ──────────────────
  'holi-mathura-vrindavan-cab-service': [
    { href: '/mathura', label: 'Mathura Cab Service' },
    { href: '/vrindavan', label: 'Vrindavan Cab Service' },
    { href: '/delhi-to-mathura', label: 'Delhi to Mathura Taxi' },
    { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'summer-hill-station-packages': [
    { href: '/shimla', label: 'Shimla Cab Service' },
    { href: '/manali', label: 'Manali Cab Service' },
    { href: '/mussoorie', label: 'Mussoorie Cab Service' },
    { href: '/nainital', label: 'Nainital Cab Service' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'winter-snow-trip-packages': [
    { href: '/shimla', label: 'Shimla Cab Service' },
    { href: '/manali', label: 'Manali Cab Service' },
    { href: '/delhi-to-shimla', label: 'Delhi to Shimla Taxi' },
    { href: '/one-way-cab/delhi-to-manali', label: 'Delhi to Manali Taxi' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'new-year-road-trip-packages': [
    { href: '/jaipur', label: 'Jaipur Cab Service' },
    { href: '/rishikesh', label: 'Rishikesh Cab Service' },
    { href: '/jim-corbett', label: 'Jim Corbett Cab Service' },
    { href: '/delhi-to-jaipur', label: 'Delhi to Jaipur Taxi' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'pushkar-mela-transport': [
    { href: '/pushkar', label: 'Pushkar Cab Service' },
    { href: '/jaipur', label: 'Jaipur Cab Service' },
    { href: '/delhi-to-jaipur', label: 'Delhi to Jaipur Taxi' },
    { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'kumbh-mela-prayagraj-transport': [
    { href: '/prayagraj', label: 'Prayagraj Cab Service' },
    { href: '/varanasi', label: 'Varanasi Cab Service' },
    { href: '/varanasi-travel-guide', label: 'Varanasi Travel Guide' },
    { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
    { href: '/bus-routes', label: 'Bus Hire for Groups' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'navratri-vaishno-devi-cab': [
    { href: '/amritsar', label: 'Amritsar Cab Service' },
    { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
    { href: '/one-way-cab', label: 'One Way Cab Service' },
    { href: '/round-trip', label: 'Round Trip Cab Service' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'baisakhi-amritsar-cab': [
    { href: '/amritsar', label: 'Amritsar Cab Service' },
    { href: '/amritsar-travel-guide', label: 'Amritsar Travel Guide' },
    { href: '/sightseeing/amritsar', label: 'Amritsar Sightseeing Tour' },
    { href: '/amritsar-food-tour', label: 'Amritsar Food Tour' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'maha-shivratri-pilgrimage-cab': [
    { href: '/haridwar', label: 'Haridwar Cab Service' },
    { href: '/varanasi', label: 'Varanasi Cab Service' },
    { href: '/haridwar-travel-guide', label: 'Haridwar Travel Guide' },
    { href: '/one-way-cab/delhi-to-haridwar', label: 'Delhi to Haridwar Taxi' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'christmas-shimla-manali-package': [
    { href: '/shimla', label: 'Shimla Cab Service' },
    { href: '/manali', label: 'Manali Cab Service' },
    { href: '/delhi-to-shimla', label: 'Delhi to Shimla Taxi' },
    { href: '/one-way-cab/delhi-to-manali', label: 'Delhi to Manali Taxi' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],

  // ── New August/September 2026 season pages ─────────────────────────────
  'janmashtami-mathura-vrindavan-cab': [
    { href: '/mathura', label: 'Mathura Cab Service' },
    { href: '/vrindavan', label: 'Vrindavan Cab Service' },
    { href: '/delhi-to-mathura', label: 'Delhi to Mathura Taxi' },
    { href: '/holi-mathura-vrindavan-cab-service', label: 'Holi in Mathura & Vrindavan' },
    { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
  ],
  'raksha-bandhan-cab-service': [
    { href: '/one-way-cab', label: 'One Way Cab Service' },
    { href: '/round-trip', label: 'Round Trip Cab Service' },
    { href: '/delhi-to-jaipur', label: 'Delhi to Jaipur Taxi' },
    { href: '/delhi-to-agra', label: 'Delhi to Agra Taxi' },
    { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'independence-day-weekend-packages-2026': [
    { href: '/delhi-to-rishikesh', label: 'Delhi to Rishikesh Taxi' },
    { href: '/delhi-to-nainital', label: 'Delhi to Nainital Taxi' },
    { href: '/delhi-to-shimla', label: 'Delhi to Shimla Taxi' },
    { href: '/jim-corbett', label: 'Jim Corbett Cab Service' },
    { href: '/long-weekend-getaway-packages-2026', label: 'All Long Weekend Packages' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
  ],
  'ganesh-chaturthi-transport': [
    { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
    { href: '/bus-routes', label: 'Bus Hire for Groups' },
    { href: '/delhi-to-jaipur', label: 'Delhi to Jaipur Taxi' },
    { href: '/round-trip', label: 'Round Trip Cab Service' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'hariyali-teej-jaipur-cab': [
    { href: '/jaipur', label: 'Jaipur Cab Service' },
    { href: '/jaipur-travel-guide', label: 'Jaipur Travel Guide' },
    { href: '/sightseeing/jaipur', label: 'Jaipur Sightseeing Tour' },
    { href: '/delhi-to-jaipur', label: 'Delhi to Jaipur Taxi' },
    { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
  ],
  'monsoon-road-trip-packages': [
    { href: '/delhi-to-rishikesh', label: 'Delhi to Rishikesh Taxi' },
    { href: '/one-way-cab/delhi-to-manali', label: 'Delhi to Manali Taxi' },
    { href: '/rishikesh', label: 'Rishikesh Cab Service' },
    { href: '/manali', label: 'Manali Cab Service' },
    { href: '/monsoon-hill-station-packages', label: 'Monsoon Hill Station Packages' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
  ],
  'monsoon-hill-station-packages': [
    { href: '/shimla', label: 'Shimla Cab Service' },
    { href: '/manali', label: 'Manali Cab Service' },
    { href: '/mussoorie', label: 'Mussoorie Cab Service' },
    { href: '/nainital', label: 'Nainital Cab Service' },
    { href: '/monsoon-road-trip-packages', label: 'Monsoon Road Trip Packages' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
  ],
  'valley-of-flowers-trek-from-delhi': [
    { href: '/rishikesh', label: 'Rishikesh Cab Service' },
    { href: '/haridwar', label: 'Haridwar Cab Service' },
    { href: '/chardham-yatra', label: 'Char Dham Yatra by Cab' },
    { href: '/delhi-to-rishikesh', label: 'Delhi to Rishikesh Taxi' },
    { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
  ],
  'spiti-valley-august-trip': [
    { href: '/shimla', label: 'Shimla Cab Service' },
    { href: '/manali', label: 'Manali Cab Service' },
    { href: '/delhi-to-shimla', label: 'Delhi to Shimla Taxi' },
    { href: '/one-way-cab/delhi-to-manali', label: 'Delhi to Manali Taxi' },
    { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'kashmir-in-september': [
    { href: '/srinagar', label: 'Srinagar Cab Service' },
    { href: '/kashmir-vs-ladakh', label: 'Kashmir vs Ladakh — Which to Pick' },
    { href: '/leh-ladakh-august-september-trip', label: 'Ladakh in Aug–Sep' },
    { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
    { href: '/outstation-cabs', label: 'Outstation Cab Service' },
  ],
  'leh-ladakh-august-september-trip': [
    { href: '/leh-ladakh-trip-cost-from-delhi', label: 'Leh Ladakh Trip Cost' },
    { href: '/ladakh-in-7-days-itinerary', label: 'Ladakh 7-Day Itinerary' },
    { href: '/kashmir-vs-ladakh', label: 'Kashmir vs Ladakh' },
    { href: '/manali', label: 'Manali Cab Service' },
    { href: '/srinagar', label: 'Srinagar Cab Service' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
  ],
  'chardham-yatra-september-2026': [
    { href: '/chardham-yatra', label: 'Char Dham Yatra Packages' },
    { href: '/kedarnath-september-trip', label: 'Kedarnath in September' },
    { href: '/haridwar', label: 'Haridwar Cab Service' },
    { href: '/rishikesh', label: 'Rishikesh Cab Service' },
    { href: '/chardham-yatra/by-innova-crysta', label: 'Char Dham by Innova Crysta' },
    { href: '/tempo-traveller/delhi-to-haridwar', label: 'Delhi–Haridwar Tempo Traveller' },
  ],
  'kedarnath-september-trip': [
    { href: '/chardham-yatra', label: 'Char Dham Yatra Packages' },
    { href: '/chardham-yatra-september-2026', label: 'Char Dham in September' },
    { href: '/haridwar', label: 'Haridwar Cab Service' },
    { href: '/one-way-cab/delhi-to-haridwar', label: 'Delhi to Haridwar Taxi' },
    { href: '/chardham-yatra/by-innova-crysta', label: 'Char Dham by Innova Crysta' },
    { href: '/tour-package', label: 'Tour Packages from Delhi' },
  ],
  'august-long-weekend-getaways-delhi': [
    { href: '/delhi-to-rishikesh', label: 'Delhi to Rishikesh Taxi' },
    { href: '/delhi-to-nainital', label: 'Delhi to Nainital Taxi' },
    { href: '/jim-corbett', label: 'Jim Corbett Cab Service' },
    { href: '/delhi-to-agra', label: 'Delhi to Agra Taxi' },
    { href: '/independence-day-weekend-packages-2026', label: 'Independence Day Weekend' },
    { href: '/long-weekend-getaway-packages-2026', label: 'All Long Weekend Packages' },
  ],
  'september-long-weekend-trips-2026': [
    { href: '/janmashtami-mathura-vrindavan-cab', label: 'Janmashtami Mathura Cab' },
    { href: '/delhi-to-mathura', label: 'Delhi to Mathura Taxi' },
    { href: '/chardham-yatra-september-2026', label: 'Char Dham in September' },
    { href: '/delhi-to-shimla', label: 'Delhi to Shimla Taxi' },
    { href: '/ganesh-chaturthi-transport', label: 'Ganesh Chaturthi Transport' },
    { href: '/long-weekend-getaway-packages-2026', label: 'All Long Weekend Packages' },
  ],
};

export function getRelatedLinksForSlug(slug) {
  return RELATED_LINKS[slug] || null;
}
