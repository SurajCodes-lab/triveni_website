// Verified against the Week 51 local runtime audit. No redirects or pages removed.
const REPAIRS = {
  "/fortuner-hire": {
    "href": "/vehicles/fortuner",
    "label": "Fortuner rental options"
  },
  "/jaisalmer-desert-safari": {
    "href": "/jaisalmer-travel-guide",
    "label": "Jaisalmer travel and desert-visit guide"
  },
  "/rajasthan-fort-trail-by-car": {
    "href": "/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur",
    "label": "Rajasthan road trip: Jaipur, Udaipur and Jodhpur"
  },
  "/kashmir": {
    "href": "/kashmir-travel-guide",
    "label": "Kashmir travel and transport guide"
  },
  "/places-to-visit-near-kashmir": {
    "href": "/kashmir-travel-guide",
    "label": "Places to explore in Kashmir"
  },
  "/ladakh": {
    "href": "/leh-ladakh",
    "label": "Leh?Ladakh travel options"
  },
  "/places-to-visit-near-ladakh": {
    "href": "/leh-ladakh",
    "label": "Explore Leh?Ladakh"
  },
  "/rajasthan": {
    "href": "/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur",
    "label": "Plan a Rajasthan road trip"
  },
  "/places-to-visit-near-rajasthan": {
    "href": "/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur",
    "label": "Rajasthan destinations by road"
  },
  "/mathura-vrindavan": {
    "href": "/mathura-vrindavan-travel-guide",
    "label": "Mathura?Vrindavan travel guide"
  },
  "/places-to-visit-near-mathura-vrindavan": {
    "href": "/mathura-vrindavan-travel-guide",
    "label": "Explore Mathura and Vrindavan"
  },
  "/spiti-valley": {
    "href": "/spiti-valley-road-trip-from-delhi",
    "label": "Spiti Valley road-trip guide"
  },
  "/places-to-visit-near-spiti-valley": {
    "href": "/spiti-valley-road-trip-from-delhi",
    "label": "Plan the Spiti Valley route"
  },
  "/pinjore": {
    "subject": "pinjore"
  },
  "/solan": {
    "subject": "solan"
  },
  "/panipat": {
    "subject": "panipat"
  },
  "/karnal": {
    "subject": "karnal"
  },
  "/ambala": {
    "subject": "ambala"
  },
  "/neemrana": {
    "subject": "neemrana"
  },
  "/fatehpur-sikri": {
    "subject": "fatehpur sikri"
  },
  "/sightseeing/mathura-&-vrindavan": {
    "subject": "sightseeing mathura & vrindavan"
  },
  "/airport-service/mathura-&-vrindavan": {
    "subject": "airport service mathura & vrindavan"
  },
  "/mathura-&-vrindavan": {
    "subject": "mathura & vrindavan"
  },
  "/wedding/mathura-&-vrindavan": {
    "subject": "wedding mathura & vrindavan"
  },
  "/delhi-airport-to-bachelor-trip---north-india-taxi": {
    "subject": "delhi airport to bachelor trip north india taxi"
  },
  "/uttarakhand": {
    "subject": "uttarakhand"
  },
  "/bilaspur": {
    "subject": "bilaspur"
  },
  "/mandi": {
    "subject": "mandi"
  },
  "/kullu": {
    "subject": "kullu"
  },
  "/parwanoo": {
    "subject": "parwanoo"
  },
  "/sightseeing/chardham-(yamunotri,-gangotri,-kedarnath,-badrinath)": {
    "subject": "sightseeing chardham (yamunotri, gangotri, kedarnath, badrinath)"
  },
  "/airport-service/chardham-(yamunotri,-gangotri,-kedarnath,-badrinath)": {
    "subject": "airport service chardham (yamunotri, gangotri, kedarnath, badrinath)"
  },
  "/chardham-(yamunotri,-gangotri,-kedarnath,-badrinath)": {
    "subject": "chardham (yamunotri, gangotri, kedarnath, badrinath)"
  },
  "/wedding/chardham-(yamunotri,-gangotri,-kedarnath,-badrinath)": {
    "subject": "wedding chardham (yamunotri, gangotri, kedarnath, badrinath)"
  },
  "/places-to-visit-near-chardham-(yamunotri,-gangotri,-kedarnath,-badrinath)": {
    "subject": "places to visit near chardham (yamunotri, gangotri, kedarnath, badrinath)"
  },
  "/delhi-airport-to-varanasi-taxi": {
    "subject": "delhi airport to varanasi taxi"
  },
  "/ludhiana": {
    "subject": "ludhiana"
  },
  "/jalandhar": {
    "subject": "jalandhar"
  },
  "/behror": {
    "subject": "behror"
  },
  "/moradabad": {
    "subject": "moradabad"
  },
  "/rampur": {
    "subject": "rampur"
  },
  "/delhi-airport-to-ayodhya-taxi": {
    "subject": "delhi airport to ayodhya taxi"
  },
  "/auli": {
    "subject": "auli"
  },
  "/places-to-visit-near-auli": {
    "subject": "places to visit near auli"
  },
  "/chopta": {
    "subject": "chopta"
  },
  "/places-to-visit-near-chopta": {
    "subject": "places to visit near chopta"
  },
  "/delhi-airport-to-goa-taxi": {
    "subject": "delhi airport to goa taxi"
  },
  "/delhi-airport-to-jaisalmer-taxi": {
    "subject": "delhi airport to jaisalmer taxi"
  },
  "/delhi-airport-to-jibhi-taxi": {
    "subject": "delhi airport to jibhi taxi"
  },
  "/delhi-airport-to-kasol-taxi": {
    "subject": "delhi airport to kasol taxi"
  },
  "/delhi-airport-to-spiti-valley-taxi": {
    "subject": "delhi airport to spiti valley taxi"
  },
  "/delhi-airport-to-tirthan-valley-taxi": {
    "subject": "delhi airport to tirthan valley taxi"
  },
  "/sightseeing/delhi-→-agra-→-jaipur-→-delhi": {
    "subject": "sightseeing delhi → agra → jaipur → delhi"
  },
  "/airport-service/delhi-→-agra-→-jaipur-→-delhi": {
    "subject": "airport service delhi → agra → jaipur → delhi"
  },
  "/delhi-→-agra-→-jaipur-→-delhi": {
    "subject": "delhi → agra → jaipur → delhi"
  },
  "/wedding/delhi-→-agra-→-jaipur-→-delhi": {
    "subject": "wedding delhi → agra → jaipur → delhi"
  },
  "/places-to-visit-near-delhi-→-agra-→-jaipur-→-delhi": {
    "subject": "places to visit near delhi → agra → jaipur → delhi"
  },
  "/delhi-airport-to-dharamshala-taxi": {
    "subject": "delhi airport to dharamshala taxi"
  },
  "/delhi-airport-to-jaipur-&-udaipur-taxi": {
    "subject": "delhi airport to jaipur & udaipur taxi"
  },
  "/delhi-airport-to-kashmir-taxi": {
    "subject": "delhi airport to kashmir taxi"
  },
  "/delhi-airport-to-mussoorie-taxi": {
    "subject": "delhi airport to mussoorie taxi"
  },
  "/delhi-airport-to-nainital-taxi": {
    "subject": "delhi airport to nainital taxi"
  },
  "/delhi-airport-to-shimla-&-manali-taxi": {
    "subject": "delhi airport to shimla & manali taxi"
  },
  "/sightseeing/shimla-+-manali": {
    "subject": "sightseeing shimla + manali"
  },
  "/airport-service/shimla-+-manali": {
    "subject": "airport service shimla + manali"
  },
  "/shimla-+-manali": {
    "subject": "shimla + manali"
  },
  "/wedding/shimla-+-manali": {
    "subject": "wedding shimla + manali"
  },
  "/places-to-visit-near-shimla-+-manali": {
    "subject": "places to visit near shimla + manali"
  },
  "/delhi-airport-to-udaipur-taxi": {
    "subject": "delhi airport to udaipur taxi"
  },
  "/chittorgarh": {
    "subject": "chittorgarh"
  },
  "/sightseeing/kashmir-(srinagar)": {
    "subject": "sightseeing kashmir (srinagar)"
  },
  "/airport-service/kashmir-(srinagar)": {
    "subject": "airport service kashmir (srinagar)"
  },
  "/kashmir-(srinagar)": {
    "subject": "kashmir (srinagar)"
  },
  "/wedding/kashmir-(srinagar)": {
    "subject": "wedding kashmir (srinagar)"
  },
  "/places-to-visit-near-kashmir-(srinagar)": {
    "subject": "places to visit near kashmir (srinagar)"
  },
  "/sightseeing/rajasthan-(circuit)": {
    "subject": "sightseeing rajasthan (circuit)"
  },
  "/airport-service/rajasthan-(circuit)": {
    "subject": "airport service rajasthan (circuit)"
  },
  "/rajasthan-(circuit)": {
    "subject": "rajasthan (circuit)"
  },
  "/wedding/rajasthan-(circuit)": {
    "subject": "wedding rajasthan (circuit)"
  },
  "/places-to-visit-near-rajasthan-(circuit)": {
    "subject": "places to visit near rajasthan (circuit)"
  },
  "/delhi-airport-to-agra---taj-mahal-taxi": {
    "subject": "delhi airport to agra taj mahal taxi"
  },
  "/chail": {
    "subject": "chail"
  },
  "/sightseeing/haridwar-&-rishikesh": {
    "subject": "sightseeing haridwar & rishikesh"
  },
  "/airport-service/haridwar-&-rishikesh": {
    "subject": "airport service haridwar & rishikesh"
  },
  "/haridwar-&-rishikesh": {
    "subject": "haridwar & rishikesh"
  },
  "/wedding/haridwar-&-rishikesh": {
    "subject": "wedding haridwar & rishikesh"
  },
  "/jim-corbett-national-park": {
    "subject": "jim corbett national park"
  },
  "/kurukshetra": {
    "subject": "kurukshetra"
  },
  "/bus-routes/agra-to-delhi-jaipur-(golden-triangle)": {
    "subject": "bus routes agra to delhi jaipur (golden triangle)"
  },
  "/one-way-cab/agra-to-delhi-jaipur-(golden-triangle)": {
    "subject": "one way cab agra to delhi jaipur (golden triangle)"
  },
  "/bus-routes/haridwar-to-kedarnath-badrinath-yamunotri-gangotri-(char-dham)": {
    "subject": "bus routes haridwar to kedarnath badrinath yamunotri gangotri (char dham)"
  },
  "/one-way-cab/haridwar-to-kedarnath-badrinath-yamunotri-gangotri-(char-dham)": {
    "subject": "one way cab haridwar to kedarnath badrinath yamunotri gangotri (char dham)"
  },
  "/bus-routes/jaipur-to-delhi-agra-(golden-triangle)": {
    "subject": "bus routes jaipur to delhi agra (golden triangle)"
  },
  "/one-way-cab/jaipur-to-delhi-agra-(golden-triangle)": {
    "subject": "one way cab jaipur to delhi agra (golden triangle)"
  },
  "/bus-routes/varanasi-to-rajasthan-tour-(jaipur-udaipur-jodhpur-jaisalmer)": {
    "subject": "bus routes varanasi to rajasthan tour (jaipur udaipur jodhpur jaisalmer)"
  },
  "/one-way-cab/varanasi-to-rajasthan-tour-(jaipur-udaipur-jodhpur-jaisalmer)": {
    "subject": "one way cab varanasi to rajasthan tour (jaipur udaipur jodhpur jaisalmer)"
  }
};

export function getJourneyLinkResolution(href) {
  if (typeof href !== "string" || !href.startsWith("/")) return null;
  try { return REPAIRS[decodeURIComponent(href.split(/[?#]/)[0]).replace(/\/$/, "")] || null; }
  catch { return null; }
}

export { REPAIRS as journeyLinkRepairs };
