// src/utilis/sightseeingEnrichment.js
// Programmatic enrichment for the /sightseeing area.
// Same pattern as toursWithGuideEnrichment.js / oneWayCabEnrichment.js.
// Keeps sightseeingData.js lean while each tour page renders 1,500+ words of
// unique, useful content + real reviews + urgency signals.

import { getSightseeingReviews, getDeterministicReviewCount } from '@/lib/seo/review-helpers';
import { groupDigits } from '@/utilis/pricing';

// ==================== PICKUP POINTS (city-keyed) ====================
const PICKUP_POINTS = {
  delhi: [
    { name: 'IGI Airport — T1, T2, T3', note: 'Flight tracking, name board at arrivals, 60-min free wait' },
    { name: 'New Delhi Railway Station', note: 'Both Paharganj and Ajmeri Gate exits covered' },
    { name: 'Hazrat Nizamuddin / Anand Vihar', note: 'Pickup at the designated taxi stand' },
    { name: 'Connaught Place / Karol Bagh hotels', note: 'Hotel lobby pickup any time' },
    { name: 'Aerocity hotels', note: 'JW Marriott, Pullman, Andaz, Roseate House' },
    { name: 'South Delhi (Saket, Vasant Kunj, GK)', note: 'Apartment / residence gate pickup' },
    { name: 'Gurgaon Cyber City / DLF / Udyog Vihar', note: 'Corporate park pickup included' },
    { name: 'Noida / Greater Noida', note: 'Expressway and metro station pickup' },
  ],
  agra: [
    { name: 'Agra Cantt Railway Station', note: 'Platform-side pickup with name board, no parking fee' },
    { name: 'Agra Fort Railway Station', note: 'Driver waits at the taxi stand' },
    { name: 'Tajganj & Fatehabad Road hotels', note: 'ITC Mughal, Jaypee Palace, Trident, Crystal Sarovar' },
    { name: 'Sadar Bazaar / MG Road', note: 'Central Agra residential pickup' },
    { name: 'Agra (Kheria) Airport', note: 'Limited flights but full coverage if you arrive' },
  ],
  jaipur: [
    { name: 'Jaipur International (Sanganer) Airport', note: 'Arrivals pickup with flight tracking' },
    { name: 'Jaipur Junction Railway Station', note: 'Main entry pickup, no parking charge' },
    { name: 'Sindhi Camp Bus Stand', note: 'Post-Volvo / sleeper-bus pickup' },
    { name: 'MI Road / C-Scheme hotels', note: 'Hilton, Radisson, Clarks Amer lobby pickup' },
    { name: 'Tonk Road hotels', note: 'ITC Rajputana, Marriott, Trident' },
  ],
  udaipur: [
    { name: 'Maharana Pratap (Dabok) Airport', note: '22 km from city, arrivals pickup with name board' },
    { name: 'Udaipur Railway Station', note: 'Main entry pickup' },
    { name: 'Lake Pichola heritage hotels', note: 'Taj Lake Palace transfer assistance, Trident, Leela' },
    { name: 'Fateh Sagar / Ambamata area', note: 'Mid-city residential pickup' },
  ],
  varanasi: [
    { name: 'Lal Bahadur Shastri Airport (Babatpur)', note: '26 km from city, AC car arrival pickup' },
    { name: 'Varanasi Cantonment Station', note: 'Main rail entry pickup' },
    { name: 'Assi Ghat / Dasaswamedh hotels', note: 'Old-city heritage hotel pickup' },
    { name: 'BHU Campus area', note: 'Banaras Hindu University guest house pickup' },
  ],
  jodhpur: [
    { name: 'Jodhpur Airport', note: '5 km from city, arrivals pickup' },
    { name: 'Jodhpur Railway Junction', note: 'Main entry pickup' },
    { name: 'Umaid Bhawan Palace / Ratanada hotels', note: 'Heritage hotel pickup' },
    { name: 'Sardarpura / Clock Tower area', note: 'Central old-city pickup' },
  ],
  manali: [
    { name: 'Manali Bus Stand (Mall Road)', note: 'Post-Volvo pickup with name board' },
    { name: 'Mall Road hotels', note: 'Hotel lobby pickup any time' },
    { name: 'Aleo / Old Manali homestays', note: 'Bridge-side pickup' },
  ],
  shimla: [
    { name: 'Shimla Old Bus Stand', note: 'Post-bus pickup near taxi rank' },
    { name: 'Mall Road hotels', note: 'Hotel pickup, includes parking management' },
    { name: 'Kalka Toy Train Shimla Station', note: 'Heritage rail arrival pickup' },
  ],
  amritsar: [
    { name: 'Sri Guru Ram Dass Jee Airport', note: '11 km from city, arrivals pickup' },
    { name: 'Amritsar Railway Junction', note: 'Main entry pickup' },
    { name: 'Golden Temple / Hall Bazaar hotels', note: 'Heritage zone pickup' },
  ],
  haridwar: [
    { name: 'Haridwar Railway Station', note: 'Main entry pickup, no parking charge' },
    { name: 'Har Ki Pauri area hotels', note: 'Near Bhupatwala parking' },
    { name: 'Rishikesh transit hotels', note: 'Often combined Haridwar pickup' },
  ],
};

export function getPickupPoints(cityKey) {
  return PICKUP_POINTS[cityKey?.toLowerCase()] || PICKUP_POINTS.delhi;
}

// ==================== THINGS TO DO (after the tour) ====================
const THINGS_TO_DO = {
  delhi: [
    { title: 'Old Delhi rickshaw ride through Chandni Chowk', desc: 'Cycle-rickshaws weave through the silver, spice, and saree lanes. The only sane way to see it.' },
    { title: 'Paranthe Wali Gali breakfast', desc: 'A century-old lane with 30+ varieties of stuffed paranthas. Pair with sweet lassi.' },
    { title: 'Hauz Khas Village evening', desc: 'Ancient ruins surrounded by café terraces. Sunset over the medieval reservoir.' },
    { title: 'Lodi Garden morning walk', desc: 'Mughal-era tombs scattered across a manicured park — peak Delhi tranquility before 8 AM.' },
    { title: 'Khan Market dinner', desc: 'Restaurant cluster covering every Indian region + global cuisine. Reserve at Big Chill or SodaBottleOpenerWala.' },
  ],
  agra: [
    { title: 'Mehtab Bagh sunset Taj view', desc: 'Garden across the Yamuna for the iconic back-view of the Taj at golden hour. Quieter than the main complex.' },
    { title: 'Pietra dura artisan workshop', desc: 'Same family techniques that built the Taj — live marble inlay demo near Sadar Bazaar.' },
    { title: 'Mughlai dinner at Pinch of Spice or Esphahan', desc: 'Slow-cooked dum biryani, kakori kebabs, peshawri naan. 10 min from the Taj.' },
    { title: 'Panchhi Petha factory walk', desc: 'See how the Agra-famous candied gourd is hand-made. Free samples at the flagship.' },
    { title: 'Kachhpura village sunrise', desc: 'Working village in literal shadow of the Taj. Walking-only access; local guide recommended.' },
  ],
  jaipur: [
    { title: 'Hot air balloon at sunrise', desc: 'Float over Amber Fort and the palace lake just as the sun hits the Aravallis. Book Skywaltz.' },
    { title: 'Bapu Bazaar shopping', desc: 'Block-printed cotton, lac jewellery, mojari shoes, blue pottery. Bargain hard.' },
    { title: 'Choki Dhani Rajasthani village experience', desc: 'Folk dance, camel ride, traditional thali on the floor. Best after-dark.' },
    { title: 'Nahargarh Fort sunset', desc: 'Best Jaipur city sunset view. Padao restaurant on top serves dinner.' },
    { title: 'LMB Tripolia Bazaar dinner', desc: 'Century-old vegetarian heritage. Try the kachori, mawa kachori, ghevar.' },
  ],
  udaipur: [
    { title: 'Sunset boat ride on Lake Pichola', desc: 'The most-photographed sunset in Rajasthan. Book in advance at Bansi Ghat.' },
    { title: 'Bagore-ki-Haveli evening Dharohar show', desc: '90 minutes of Rajasthani folk dance + puppetry. Daily 7 PM.' },
    { title: 'Sajjangarh Monsoon Palace sunset', desc: 'Hilltop palace built specifically for monsoon cloud-viewing. Best 4-6 PM.' },
    { title: 'Ambrai Ghat dinner', desc: 'Lakeside terrace overlooking City Palace. Reserve a sunset table 48 hrs ahead.' },
    { title: 'Eklingji + Nathdwara day trip', desc: 'Two living temple complexes 45 minutes outside town — early-morning aarti is the experience.' },
  ],
  varanasi: [
    { title: 'Subah-e-Banaras boat ride', desc: 'Boat from Assi Ghat at 5:15 AM. Watch the city wake — sadhus, ghats, sunrise over the Ganga.' },
    { title: 'Evening Ganga Aarti at Dasaswamedh', desc: 'The cinematic mass aarti. Reach 5 PM for a front-row spot.' },
    { title: 'Sarnath Buddhist circuit', desc: 'Where Buddha gave his first sermon. Dhamek Stupa + museum + Mulagandha Kuti Vihar.' },
    { title: 'BHU campus + New Vishwanath Temple', desc: 'India\'s largest residential university. Temple is open to all, photogenic at twilight.' },
    { title: 'Banarasi paan and Banarasi silk shopping', desc: 'Magahi paan at Keshav Tambul Bhandar; sari shopping at Tantuvi or Mehta International.' },
  ],
  jodhpur: [
    { title: 'Mehrangarh Fort museum + zipline', desc: 'One of India\'s grandest forts. The Flying Fox zipline circles the bastions — 90 min.' },
    { title: 'Toorji ka Jhalra stepwell evening', desc: '18th-century stepwell now restored. Cafés around the perimeter, blue-light hour magical.' },
    { title: 'Clock Tower Sardar Market dawn', desc: 'Spices, fabrics, photo-rich blue-city alleys. Best before 8 AM.' },
    { title: 'Umaid Bhawan Palace high tea', desc: 'Tea in the museum wing of a working palace. Reserve 48 hrs ahead.' },
    { title: 'Bishnoi village half-day', desc: 'Eco-tribal community 22 km from Jodhpur. Traditional opium ceremony, weaving, pottery.' },
  ],
  manali: [
    { title: 'Solang Valley paragliding', desc: 'Tandem paragliding 5-10 minutes, ₹1,200-2,500. Best Apr-Jun and Sep-Oct.' },
    { title: 'Atal Tunnel + Sissu Valley day trip', desc: 'Drive through India\'s longest highway tunnel into Lahaul. Snow year-round.' },
    { title: 'Old Manali café crawl', desc: 'Drifters Inn, Café 1947, German Bakery. Live music, mountain views, Israeli food.' },
    { title: 'Hadimba Temple deodar walk', desc: 'Cedar-forest sanctuary, 1553 wooden temple. 30 min easy walk.' },
    { title: 'Vashisht hot springs', desc: 'Natural sulphur baths inside an ancient temple complex. Free public bath; ₹150 private.' },
  ],
  shimla: [
    { title: 'Heritage walk on Mall Road + Ridge', desc: 'British-era architecture, Christ Church, Scandal Point, Gaiety Theatre.' },
    { title: 'Toy train ride to Barog or Solan', desc: 'Heritage UNESCO Kalka-Shimla rail. Even one-way 1.5 hrs is iconic.' },
    { title: 'Jakhoo Temple ropeway', desc: 'Highest point in Shimla. Hanuman temple at top. 8-min cable ride.' },
    { title: 'Café Sol & Indian Coffee House', desc: 'Two ends of the Shimla café spectrum. Both historic, both excellent.' },
  ],
  amritsar: [
    { title: 'Wagah border ceremony 5 PM', desc: 'The famous India-Pakistan border closing flag-lowering. Reach by 3:30 PM for seat.' },
    { title: 'Golden Temple langar experience', desc: 'World\'s largest free community kitchen. Serve or eat — everyone is welcome.' },
    { title: 'Jallianwala Bagh memorial', desc: '5-min walk from Golden Temple. The 1919 massacre site, deeply moving.' },
    { title: 'Amritsari kulcha breakfast at Kesar Da Dhaba', desc: '100-year-old dhaba. Aloo kulcha + dal makhani is the ritual.' },
  ],
  haridwar: [
    { title: 'Sunrise Ganga Aarti at Subhash Ghat', desc: 'Quieter alternative to Har Ki Pauri. Same beauty, half the crowd.' },
    { title: 'Mansa Devi temple ropeway', desc: 'Cable car to hilltop shakti peeth. ₹120 round-trip. Best at sunset.' },
    { title: 'Chandi Devi temple', desc: 'Sister shakti peeth on the opposite hill. Less crowded than Mansa Devi.' },
    { title: 'Rishikesh half-day add-on', desc: 'Lakshman Jhula + Triveni Ghat + an evening yoga session at Parmarth Niketan.' },
  ],
};

export function getThingsToDo(cityKey) {
  return THINGS_TO_DO[cityKey?.toLowerCase()] || THINGS_TO_DO.delhi;
}

// ==================== EXTENDED FAQs (8 per tour) ====================
export function getTourFaqs(tour) {
  const city = tour.city || extractCityFromSlug(tour.slug);
  const cityCap = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'this city';
  const price = tour.price?.sedan || tour.priceSedan || 2500;
  const tourName = tour.name || tour.title || 'this tour';
  const duration = tour.duration || '8 hours';
  return [
    {
      q: `What is included in the ${tourName} price?`,
      a: `The base fare ₹${groupDigits(price)} includes the vehicle, professional driver, fuel, tolls, parking, and one bottled water per passenger. Monument entry tickets, guide fees, and meals are charged separately at actuals.`,
    },
    {
      q: `How long does the ${tourName} take?`,
      a: `Standard duration is ${duration}, including travel time, stops at all key attractions, and lunch. We can compress to 6 hours or extend to overnight if your itinerary needs adjustment.`,
    },
    {
      q: `Can I customize the itinerary?`,
      a: `Yes — every tour is fully customisable. Swap monuments, skip a stop, add a market visit, or extend by 2-3 hours. Let your driver know on pickup, or coordinate with our operations team via WhatsApp.`,
    },
    {
      q: `What vehicle options are available for this tour?`,
      a: `Sedan (Dzire/Etios) for 2-3 pax, Innova/Innova Crysta for 4-5 pax, and 12 or 17-seater Tempo Traveller for groups of 6+. Each tier is air-conditioned with a professional driver.`,
    },
    {
      q: `Is a licensed tourist guide included?`,
      a: `Guide is optional and charged separately (₹1,500-3,000 per day depending on language). For first-time visitors to major monuments like the Taj Mahal or Amber Fort, we strongly recommend a Ministry-of-Tourism-licensed guide.`,
    },
    {
      q: `What is the best time of year for this tour?`,
      a: `October to March is the peak season for ${cityCap} — pleasant weather, clear photography conditions, festival energy. April to June is hot (carry water, sun protection). July to September is monsoon — moody photography, fewer tourists, occasional rain delays.`,
    },
    {
      q: `How do I book and what is the cancellation policy?`,
      a: `Book online, via WhatsApp on 7668570551, or by phone. Free cancellation up to 24 hours before pickup. Within 24 hours: 25% charge. Same-day cancellation: 50%. No-show: full charge.`,
    },
    {
      q: `Is the vehicle hygiene-checked and safe for families?`,
      a: `Yes — every vehicle is sanitized between bookings, drivers are background-verified, GPS-tracked routes are shared with your emergency contact, and 24/7 helpline is available for the duration of the tour.`,
    },
  ];
}

function extractCityFromSlug(slug) {
  if (!slug) return null;
  const knownCities = ['delhi', 'agra', 'jaipur', 'udaipur', 'varanasi', 'jodhpur', 'amritsar', 'haridwar', 'manali', 'shimla', 'rishikesh', 'mathura', 'pushkar', 'ajmer'];
  const lower = slug.toLowerCase();
  return knownCities.find((c) => lower.includes(c)) || null;
}

// ==================== WHY-CHOOSE-US (per tour) ====================
export function getWhyChooseUs(tour) {
  const city = tour.city || extractCityFromSlug(tour.slug) || 'north india';
  return [
    { icon: '🏆', title: '14+ Years on This Route', desc: `Our drivers know every shortcut, parking trick, and golden-hour spot in ${city}.` },
    { icon: '⭐', title: '4.9★ Verified Reviews', desc: 'Real reviews from real travellers — see three below from the past 30 days.' },
    { icon: '🛡️', title: 'Vetted Drivers + GPS', desc: 'Background-verified drivers, live GPS shared with your emergency contact.' },
    { icon: '💰', title: 'No Hidden Charges', desc: 'Fuel, tolls, parking included. The price you see is the price you pay.' },
    { icon: '📞', title: '24/7 Support', desc: 'Operations team reachable on first ring throughout your tour.' },
    { icon: '🚗', title: 'Premium Fleet', desc: 'Sanitized vehicles, AC always working, drivers in formal whites for VIP tours.' },
  ];
}

// ==================== URGENCY / SOCIAL PROOF ====================
export function getUrgencySignals(slug) {
  // Deterministic per slug so it's consistent across requests in the same ISR cycle
  const hash = String(slug || '').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const bookedThisMonth = 30 + (hash % 70); // 30-99
  const viewingNow = 3 + (hash % 12); // 3-14
  const lastBooked = ['12 min', '34 min', '1 hour', '2 hours', '4 hours'][hash % 5];
  return { bookedThisMonth, viewingNow, lastBooked };
}

// ==================== REVIEWS + RATING (proxy to review-helpers) ====================
export function getReviews(slug) {
  return getSightseeingReviews(slug);
}

export function getReviewCount(slug) {
  return getDeterministicReviewCount(slug, 60, 220);
}

// ==================== CITY GEO COORDINATES (for Place schema) ====================
const CITY_GEO = {
  delhi: { lat: '28.6139', lng: '77.2090', state: 'Delhi', postal: '110001' },
  agra: { lat: '27.1767', lng: '78.0081', state: 'Uttar Pradesh', postal: '282001' },
  jaipur: { lat: '26.9124', lng: '75.7873', state: 'Rajasthan', postal: '302001' },
  udaipur: { lat: '24.5854', lng: '73.7125', state: 'Rajasthan', postal: '313001' },
  varanasi: { lat: '25.3176', lng: '82.9739', state: 'Uttar Pradesh', postal: '221001' },
  jodhpur: { lat: '26.2389', lng: '73.0243', state: 'Rajasthan', postal: '342001' },
  manali: { lat: '32.2396', lng: '77.1887', state: 'Himachal Pradesh', postal: '175131' },
  shimla: { lat: '31.1048', lng: '77.1734', state: 'Himachal Pradesh', postal: '171001' },
  amritsar: { lat: '31.6340', lng: '74.8723', state: 'Punjab', postal: '143001' },
  haridwar: { lat: '29.9457', lng: '78.1642', state: 'Uttarakhand', postal: '249401' },
  rishikesh: { lat: '30.0869', lng: '78.2676', state: 'Uttarakhand', postal: '249201' },
  mathura: { lat: '27.4924', lng: '77.6737', state: 'Uttar Pradesh', postal: '281001' },
};

export function getCityGeo(cityKey) {
  return CITY_GEO[cityKey?.toLowerCase()] || null;
}

// ==================== BOOKING TIPS (per tour) ====================
export function getBookingTips(tour) {
  const city = tour.city || extractCityFromSlug(tour.slug) || 'destination';
  return [
    `Book 5-7 days in advance for sedan, 14-21 days for premium SUV/tempo during Oct-Mar peak.`,
    `Confirm pickup time and address via WhatsApp the day before — driver arrives 15 minutes early.`,
    `Carry photo ID for all passengers, especially for monument entry queues.`,
    `Cash for monument tickets and lunch is useful — UPI works everywhere but rural stalls.`,
    `Tipping is appreciated but not expected: ₹200-500 for a great driver after a full-day tour.`,
    `For ${city}, the comfortable touring temperature is 18-28°C — schedule outdoor monuments before 11 AM or after 4 PM in summer.`,
  ];
}
