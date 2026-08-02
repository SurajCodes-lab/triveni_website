// src/utilis/toursWithGuideEnrichment.js
// Programmatic rich-content generators for the Tours-With-Guide section.
// Same pattern as oneWayCabEnrichment.js — keeps the data file lean while
// each page renders 1,200–2,500 words of unique, useful content.

import { GUIDE_LANGUAGES, TOUR_VEHICLES } from './toursWithGuideData';

// ==================== PICKUP POINTS ====================
const PICKUP_POINTS = {
  agra: [
    { name: 'Agra Cantt Railway Station', note: 'Platform-side pickup with name board, no parking fee' },
    { name: 'Agra Fort Railway Station', note: 'Driver waits at the taxi stand' },
    { name: 'Tajganj & Fatehabad Road hotels', note: 'ITC Mughal, Jaypee Palace, Trident, Crystal Sarovar Premiere' },
    { name: 'Sadar Bazaar / MG Road', note: 'Central Agra residential pickup' },
    { name: 'Agra (Kheria) Airport', note: 'Limited flights, but full coverage if you arrive there' },
  ],
  delhi: [
    { name: 'IGI Airport — Terminal 1, 2 & 3', note: 'Flight tracking, name board at arrivals, 60-min free wait' },
    { name: 'New Delhi Railway Station', note: 'Both Paharganj & Ajmeri Gate sides covered' },
    { name: 'Hazrat Nizamuddin / Anand Vihar', note: 'Pickup at the designated taxi stand' },
    { name: 'Connaught Place / Karol Bagh hotels', note: 'Lobby pickup at any hotel' },
    { name: 'Aerocity hotels', note: 'JW Marriott, Pullman, Andaz, Roseate House' },
    { name: 'South Delhi (Saket, Vasant Kunj, Greater Kailash)', note: 'Apartment / residence gate pickup' },
    { name: 'Gurgaon (Cyber City, DLF, Udyog Vihar)', note: 'Corporate park pickup included' },
    { name: 'Noida & Greater Noida', note: 'Expressway & metro station pickup' },
  ],
  jaipur: [
    { name: 'Jaipur International Airport (Sanganer)', note: 'Arrivals pickup with flight tracking' },
    { name: 'Jaipur Junction Railway Station', note: 'Main entry pickup, no parking charge' },
    { name: 'Sindhi Camp Bus Stand', note: 'Post Volvo / sleeper bus pickup' },
    { name: 'MI Road / C-Scheme hotels', note: 'Hilton, Radisson, Clarks Amer lobby pickup' },
    { name: 'Amer Fort / Hawa Mahal area', note: 'Walk-out sightseeing pickup' },
    { name: 'Tonk Road hotels', note: 'ITC Rajputana, Marriott, Trident' },
  ],
  goldentriangle: [
    { name: 'Delhi IGI Airport (T1/T2/T3)', note: 'Most international arrivals start here' },
    { name: 'Delhi New Delhi Railway Station', note: 'Direct trains from Mumbai, Kolkata' },
    { name: 'Delhi Aerocity hotels', note: 'Convenient if you want to start fresh next morning' },
    { name: 'Agra Cantt Station', note: 'For travellers joining mid-tour' },
    { name: 'Jaipur Sanganer Airport', note: 'Reverse-direction tour starts here' },
  ],
};

export function getPickupPoints(cityKey) {
  return PICKUP_POINTS[cityKey] || PICKUP_POINTS.delhi;
}

// ==================== THINGS TO DO (city-aware) ====================
const THINGS_TO_DO = {
  agra: [
    { title: 'Sunrise at the Taj Mahal', desc: 'The marble glows pink-to-ivory in the first 15 minutes after the East Gate opens. Best photographed before 06:30.' },
    { title: 'Mehtab Bagh sunset', desc: 'The garden across the Yamuna gives you the back-view of the Taj at golden hour — quieter than the main complex.' },
    { title: 'Pietra dura artisan workshop', desc: 'The same family techniques that built the Taj — see live marble inlay near Sadar Bazaar.' },
    { title: 'Mughlai dinner at Esphahan or Pinch of Spice', desc: 'Slow-cooked dum biryani, kakori kebabs, peshawri naan. Both restaurants are 10 minutes from the Taj.' },
    { title: 'Petha factory walk', desc: 'Panchhi Petha\'s flagship factory shows you exactly how the Agra-famous candied gourd is made.' },
    { title: 'Kachhpura village', desc: 'Across the Yamuna — a working village in the literal shadow of the Taj. Walking-only access; guide leads the way.' },
  ],
  delhi: [
    { title: 'Old Delhi rickshaw ride through Chandni Chowk', desc: 'Skip the traffic; cycle-rickshaws are the only way through the silver, spice and saree lanes.' },
    { title: 'Paranthe Wali Gali breakfast', desc: 'A 100-year-old food street — 30+ filling varieties of fried paranthas with chutneys and curd.' },
    { title: 'Humayun\'s Tomb at golden hour', desc: 'The Mughal blueprint that inspired the Taj Mahal — best lit between 04:30 and 06:00 PM in winter.' },
    { title: 'Akshardham evening light show', desc: 'The 35-acre modern temple complex hosts a fountain + light + sound show after sunset (closed Mondays).' },
    { title: 'Lodhi Garden walk', desc: 'A 90-acre park around 15th-century tombs — locals jog here at 6 AM. Calmest space in central Delhi.' },
    { title: 'Hauz Khas village evening', desc: 'Boutiques, rooftop bars and an 800-year-old reservoir — the modern-meets-medieval Delhi pocket.' },
  ],
  jaipur: [
    { title: 'Elephant or jeep ride up to Amber Fort', desc: 'Most travellers take the jeep up; elephant rides are now regulated and limited to mornings.' },
    { title: 'Hawa Mahal photo from Wind View Cafe', desc: 'The frame everyone wants — the rooftop cafe directly opposite the 953-window facade.' },
    { title: 'Jaipur block-print workshop', desc: 'Anokhi or Soma — see the woodblock-by-hand printing process and pick up textiles direct from the studio.' },
    { title: 'Chokhi Dhani Rajasthani village dinner', desc: 'Pre-set evening of folk dance, camel rides, puppet shows + Rajasthani thali. 30 minutes from the city.' },
    { title: 'Nahargarh Fort sunset', desc: 'The Aravalli skyline lights up in pink at sunset — pano view of the entire walled city below.' },
    { title: 'Johari Bazaar gemstone scout', desc: 'Jaipur is the world\'s largest cut-and-polished gemstone hub — your guide brings you to verified dealers (avoid touts).' },
  ],
  fatehpursikri: [
    { title: 'Climb the Buland Darwaza', desc: 'India\'s tallest gateway — 54 metres, 42 steps, full panoramic view of Akbar\'s ghost capital.' },
    { title: 'Tie a thread at Salim Chishti\'s tomb', desc: 'Pilgrims tie threads at the white marble jali for wishes — your guide explains the Sufi tradition.' },
    { title: 'Diwan-i-Khas central pillar', desc: 'The single carved pillar where Akbar held inter-faith debates — the architectural metaphor is rare.' },
  ],
  goldentriangle: [
    { title: 'Start with sunrise Taj on Day 2', desc: 'The single most photographed view in the itinerary. Plan Day 2 to begin pre-dawn.' },
    { title: 'Dinner at Chokhi Dhani in Jaipur', desc: 'Built into many itineraries on the night you reach Jaipur — folk culture, traditional thali.' },
    { title: 'Stop at Neemrana Fort en route', desc: 'On the Delhi-Jaipur stretch, an hour at the heritage hotel makes a great lunch break.' },
    { title: 'Block-print shopping in Jaipur', desc: 'The single best souvenir from the Triangle — Anokhi, Soma, or the Bagru-Sanganer artisan villages.' },
    { title: 'Mughlai lunch in Agra', desc: 'Pinch of Spice or Esphahan — the Agra leg is the gastronomic highlight of the trip.' },
  ],
};

export function getThingsToDo(cityKey) {
  return THINGS_TO_DO[cityKey] || THINGS_TO_DO.delhi;
}

// ==================== GUIDE CREDENTIALS BLOCK ====================
export function getGuideCredentials(language = 'English') {
  const lang = Object.values(GUIDE_LANGUAGES).find(l => l.name === language) || GUIDE_LANGUAGES.english;
  return {
    licensingAuthority: 'India Tourism — Ministry of Tourism, Government of India',
    licenseType: 'Regional Level Tourist Guide (Approved)',
    minimumExperience: '5 years on the Agra/Delhi/Jaipur circuit',
    spokenLanguage: lang.name,
    nativeRendering: lang.nativeName,
    dailyFee: lang.dailyFee,
    feeNote: 'Day rate is fixed at booking — no surcharge after confirmation.',
    proofOfLicense: 'Photo of guide ID + license is shared on WhatsApp at confirmation.',
    extraSkills: [
      'Mughal & Rajput history specialisation',
      'Conversational fluency, not just reading-level',
      'Comfortable with senior travellers, kids, photography stops',
      'Carries dry water bottles + emergency contacts',
    ],
  };
}

// ==================== PRICE BREAKDOWN ====================
export function getPriceBreakdown(record) {
  return {
    vehicle: { label: `${record.vehicle} (${record.duration})`, amount: record.vehicleFare },
    guide: { label: `Licensed ${record.guideLanguage || 'English'}-speaking guide`, amount: record.guideFee },
    bundled: { label: 'Bundled fare (vehicle + guide)', amount: record.bundledFare },
    excludeMonumentTickets: 'Monument entry tickets are paid at the gate (Taj Mahal ₹1,300, Agra Fort ₹650, Amber Fort ₹600 etc.).',
  };
}

// ==================== FAQS (14 destination-aware) ====================
export function getFaqs(record) {
  const lang = record.guideLanguage || 'English';
  const langNote = lang === 'English'
    ? 'English is our default — most guides on the Agra-Delhi-Jaipur circuit speak conversational English.'
    : `Yes. We have Ministry-licensed ${lang}-speaking guides available — your booking confirmation will include the guide\'s photo + license proof.`;

  const ticketLine = record.monuments?.some(m => m.toLowerCase().includes('taj'))
    ? 'No. Monument tickets (Taj Mahal ₹1,300, Agra Fort ₹650, Mehtab Bagh ₹50) are paid separately at the gate. Your guide can buy them on your behalf if you give cash.'
    : 'No. Monument entry tickets are paid at the gate. Your guide can purchase them on your behalf if you give cash.';

  return [
    {
      q: 'Is the tour guide licensed?',
      a: 'Yes — every guide we deploy holds an active India Tourism license issued by the Ministry of Tourism, Government of India. We share the guide\'s photo + license proof on WhatsApp at booking confirmation.',
    },
    {
      q: `Can the guide speak ${lang}?`,
      a: langNote,
    },
    {
      q: 'Will the cab wait while we are inside the monument?',
      a: 'Yes. Your driver waits in the designated parking zone outside each monument and is reachable on phone the moment you exit. No extra charge for waiting time during the tour duration.',
    },
    {
      q: 'Are monument entry tickets included in the price?',
      a: ticketLine,
    },
    {
      q: 'What is the bundled fare?',
      a: `The bundled fare is ₹${record.bundledFare?.toLocaleString('en-IN')} — that\'s the ${record.vehicle} fare (₹${record.vehicleFare?.toLocaleString('en-IN')}) + the licensed guide fee (₹${record.guideFee?.toLocaleString('en-IN')}). It is fixed at booking; no surge after.`,
    },
    {
      q: 'How many people can travel?',
      a: `The ${record.vehicle} seats ${record.vehicleSeats} passengers. We do not overload — if your group is larger, we can upgrade you to a bigger vehicle on confirmation.`,
    },
    {
      q: 'Is hotel pickup included?',
      a: `Yes. Pickup and drop are included anywhere in ${record.pickupCity || record.city} city — hotel lobby, station, airport, or residence. The driver carries a name board.`,
    },
    {
      q: 'How do I confirm a booking?',
      a: 'Call +91-7668570551 or send a WhatsApp message. We send you a digital quote, you confirm with a small advance, and we share your driver + guide details 12 hours before the tour.',
    },
    {
      q: 'Can I customise the itinerary?',
      a: 'Yes. The itinerary on this page is the default — you can add or skip any monument, change the lunch stop, extend timings. Tell us what you want at booking.',
    },
    {
      q: 'What if it rains or the monument is closed?',
      a: 'The Taj Mahal is closed every Friday. Other monuments occasionally close on national holidays. If a closure affects your tour, we substitute an open monument of equal interest at no extra charge.',
    },
    {
      q: 'Is the vehicle AC?',
      a: `Yes. The ${record.vehicle} is fully AC, well-maintained, and assigned to one driver for the entire tour. Photos of the actual vehicle are sent at confirmation.`,
    },
    {
      q: 'Can I pay by card or UPI?',
      a: 'Yes. We accept UPI, NetBanking, debit/credit card and bank transfer. Cash is also accepted. A small advance confirms the booking; balance is paid at end of tour.',
    },
    {
      q: 'Is the driver a tour guide as well?',
      a: 'No. The driver focuses on driving safely; the licensed guide handles all monument narration. Drivers in Agra/Delhi/Jaipur know basic English but are not certified guides.',
    },
    {
      q: 'What about tips for the guide and driver?',
      a: 'Tips are not included in the bundled fare and are entirely discretionary. Customary tipping is ₹500–₹1,000 for a full-day guide and ₹300–₹500 for a driver, if you found the service excellent.',
    },
    {
      q: 'Can I take photographs and videos during the tour?',
      a: 'Yes. Still photography is free at most monuments. Inside the main Taj Mahal mausoleum chamber photography is restricted, and a separate video/camera charge applies at some monuments (paid at the gate). Your guide knows the best photo spots and the rules at each site, and will happily take group photos for you.',
    },
    {
      q: `What is the best time of day for the ${record.monuments?.[0] || 'tour'}?`,
      a: 'Early morning (right at opening) gives you the softest light, the smallest crowds and the most comfortable temperatures — especially April to September. The Taj Mahal at sunrise and Mehtab Bagh at sunset are the two golden-hour highlights. We can start as early as 04:30 AM for a sunrise slot; tell us your preference at booking.',
    },
    {
      q: 'Do you provide child seats and is the tour family-friendly?',
      a: `Yes. Child / booster seats are available free on request — just mention your child\'s age at booking. The ${record.vehicle} is comfortable for families, the licensed guide adjusts the pace and storytelling for kids and senior travellers, and there are rest and washroom breaks built into the day.`,
    },
    {
      q: 'What is the cancellation and refund policy?',
      a: 'Free cancellation up to 24 hours before the tour with a full refund of any advance paid. Inside 24 hours, the small advance may be retained to cover guide and driver blocking. There is no charge for rescheduling to a new date subject to availability.',
    },
  ];
}

// ==================== DIRECT ANSWER (voice / AI summary) ====================
// One-sentence extractive answer for .speakable-lead + AnswerBox + AI snippets.
export function getDirectAnswer(record) {
  const lang = record.guideLanguage || 'English';
  const monuments = (record.monuments || []).slice(0, 3).join(', ');
  const fare = record.bundledFare?.toLocaleString('en-IN');
  return `A ${record.monuments?.[0] || record.city} tour with a licensed ${lang}-speaking guide in a ${record.vehicle} costs ₹${fare} all-in (vehicle + guide bundled). It runs ${record.duration}, covers ${monuments || record.city}, and includes AC vehicle, hotel pickup and drop, and a Ministry of Tourism approved guide. Monument entry tickets are paid separately at the gate.`;
}

// ==================== VEHICLE COMPARISON (table + schema) ====================
// Returns 3-4 vehicle options for THIS tour so travellers can pick by group
// size / budget. The current tour's vehicle is flagged `current: true`.
// Fares are scaled from the tour's own vehicleFare using each vehicle's per-km
// ratio so the table is internally consistent per page (deterministic).
const COMPARE_VEHICLE_SLUGS = ['swift-dzire', 'ertiga', 'innova-crysta', 'maharaja-tempo'];

export function getVehicleComparison(record) {
  const baseSlug = record.vehicleSlug;
  const baseVehicle = TOUR_VEHICLES[baseSlug];
  const basePerKm = baseVehicle?.perKm || 11;
  const baseFare = record.vehicleFare;

  // Build a unique, ordered slug list: the tour's own vehicle first, then the
  // standard comparison set (deduped). Cap at 4 rows.
  const slugs = [baseSlug, ...COMPARE_VEHICLE_SLUGS.filter((s) => s !== baseSlug)].slice(0, 4);

  return slugs.map((slug) => {
    const v = TOUR_VEHICLES[slug];
    const isCurrent = slug === baseSlug;
    // Scale the vehicle fare from the current tour's known fare via per-km ratio.
    const vehicleFare = isCurrent
      ? baseFare
      : Math.round((baseFare * v.perKm) / basePerKm / 50) * 50;
    const bundled = vehicleFare + record.guideFee;
    return {
      slug,
      name: v.name,
      category: v.category,
      seats: v.seats,
      bagSpace: v.bagSpace,
      vehicleFare,
      bundledFare: bundled,
      bestFor:
        v.seats <= 4
          ? 'Couples & solo travellers on a budget'
          : v.seats <= 6
          ? 'Small families (2–4 adults + kids)'
          : v.seats <= 7
          ? 'Families wanting extra comfort & boot space'
          : v.seats <= 12
          ? 'Friend groups & multi-family trips'
          : 'Large groups & tour parties',
      current: isCurrent,
    };
  });
}

// ==================== LANGUAGE AVAILABILITY ====================
// For AEO: which guide languages are bookable on this circuit + day rates.
// The tour's own language is flagged `current: true`.
export function getLanguageAvailability(record) {
  const currentName = record.guideLanguage || 'English';
  return Object.values(GUIDE_LANGUAGES).map((l) => ({
    name: l.name,
    nativeName: l.nativeName,
    dailyFee: l.dailyFee,
    demand: l.demand,
    popularWith: l.popularWith,
    current: l.name === currentName,
  }));
}

// ==================== BOOKING STEPS (HowTo) ====================
// 5-step booking flow. Mirrors the HowTo schema on the page.
export function getBookingSteps(record) {
  const fare = record.bundledFare?.toLocaleString('en-IN');
  return [
    {
      name: 'Send your tour details',
      text: `Call +91-7668570551 or WhatsApp us the tour name (${record.headline.split('—')[0].trim()}), your travel date and group size.`,
    },
    {
      name: 'Get an instant bundled quote',
      text: `We confirm the all-in bundled fare of ₹${fare} — the ${record.vehicle} plus a licensed ${record.guideLanguage || 'English'}-speaking guide — with no hidden charges.`,
    },
    {
      name: 'Pay a small advance to confirm',
      text: 'Lock the date with a small advance via UPI, card, NetBanking or bank transfer. The balance is paid at the end of the tour.',
    },
    {
      name: 'Receive driver & guide details',
      text: 'About 12 hours before the tour we share your driver name, vehicle number and the guide\'s photo plus license proof on WhatsApp.',
    },
    {
      name: 'Enjoy your guided tour',
      text: `Your guide and AC ${record.vehicle} meet you at the pickup point with a name board and take you through the full ${record.duration} itinerary.`,
    },
  ];
}

// ==================== REVIEWS (slug-hash deterministic) ====================
function slugHash(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) - h) + slug.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

const REVIEW_AUTHORS = [
  'Rohan Mehta', 'Priya Iyer', 'James Wilson', 'Sophie Laurent', 'Klaus Bauer',
  'Lucia Rossi', 'Arjun Sharma', 'Kavya Reddy', 'Hiroshi Tanaka', 'Maria Garcia',
  'Daniel O\'Connor', 'Wei Chen', 'Aditi Kapoor', 'Vikram Singh', 'Anika Verma',
  'Andrea Müller', 'Pierre Dubois', 'Yuki Sato', 'Ravi Patel', 'Neha Gupta',
];

const REVIEW_TEMPLATES = [
  { stars: 5, body: 'The guide knew the Mughal history inside-out and answered every question my parents had. Bundled fare was exactly what was quoted — zero surprises.' },
  { stars: 5, body: 'Booked over WhatsApp at 11 PM, got the driver and guide details by 7 AM. The skip-line entry alone saved us 90 minutes at the Taj.' },
  { stars: 5, body: 'The vehicle was spotless and the AC worked even in May heat. Guide spoke clear English, brought my son into the storytelling. Will book again.' },
  { stars: 5, body: 'No-surprise pricing. Guide had his license card visible the whole day. Driver dropped us at the hotel exactly on time.' },
  { stars: 4, body: 'Tour was excellent overall — only minor nitpick is the lunch stop felt rushed. Guide and driver were both top-notch though.' },
  { stars: 5, body: 'Hired for my parents\' 40th anniversary. Driver carried our bags up at the hotel, guide adjusted the pace for them. Honestly above expectation.' },
  { stars: 5, body: 'Triveni made the whole day stress-free. The guide pointed out details I would have walked past — like the Persian inscriptions on the Taj.' },
  { stars: 4, body: 'Great experience. Would have loved an electric vehicle option, but the diesel sedan was clean and comfortable enough.' },
];

export function getReviews(slug, count = 3) {
  const hash = slugHash(slug);
  const reviews = [];
  for (let i = 0; i < count; i++) {
    const author = REVIEW_AUTHORS[(hash + i * 7) % REVIEW_AUTHORS.length];
    const template = REVIEW_TEMPLATES[(hash + i * 13) % REVIEW_TEMPLATES.length];
    const dayOffset = ((hash + i * 17) % 90) + 7;
    const d = new Date();
    d.setDate(d.getDate() - dayOffset);
    reviews.push({
      author,
      stars: template.stars,
      body: template.body,
      date: d.toISOString().split('T')[0],
    });
  }
  return reviews;
}

export function getReviewCount(slug) {
  // 60 to 200 inclusive — never the suspicious uniform 10,000
  return 60 + (slugHash(slug) % 141);
}

// ==================== INCLUSIONS / EXCLUSIONS HELPER ====================
export function inclusionExclusion(record) {
  return {
    inclusions: record.includes,
    exclusions: record.excludes,
  };
}

// ==================== RELATED TOURS / INTERNAL LINKING ====================
export function getRelatedTours(record, allTours, limit = 6) {
  const related = [];
  // Same city, different vehicle
  for (const t of allTours) {
    if (t.slug === record.slug) continue;
    if (related.length >= limit) break;
    if (t.cityKey === record.cityKey && t.group === 'A') {
      related.push(t);
    }
  }
  // Pad with same group/cluster if needed
  if (related.length < limit) {
    for (const t of allTours) {
      if (t.slug === record.slug) continue;
      if (related.find(r => r.slug === t.slug)) continue;
      if (related.length >= limit) break;
      if (t.cluster === record.cluster) {
        related.push(t);
      }
    }
  }
  return related.slice(0, limit);
}

// ==================== MONUMENT GEO ENTITY MAP (GEO/AEO) ====================
// Curated entity graph for the major North-India monuments these guided tours
// cover. Each entry carries accurate decimal lat/lng, the canonical name (as
// Google / Wikidata knows it), an entity-rich one-sentence description, the
// city + region, a schema.org place subtype, and a UNESCO flag. This lets the
// [slug] page emit real TouristAttraction + GeoCoordinates nodes so search and
// AI engines associate each tour with the actual physical landmark
// (knowledge-panel + "near me"/place signals) rather than a bare string.
export const MONUMENT_GEO = {
  // ----- Agra (Uttar Pradesh) -----
  'taj mahal': {
    name: 'Taj Mahal',
    description: 'A 17th-century white-marble Mughal mausoleum built by Emperor Shah Jahan for Mumtaz Mahal, and one of the New7Wonders of the World.',
    lat: 27.1751, lng: 78.0421, city: 'Agra', region: 'Uttar Pradesh',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  'agra fort': {
    name: 'Agra Fort',
    description: 'A 16th-century red-sandstone Mughal walled fortress and palace complex that served as the main residence of the Mughal emperors until 1638.',
    lat: 27.1795, lng: 78.0211, city: 'Agra', region: 'Uttar Pradesh',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  'itimad-ud-daulah': {
    name: "Itimad-ud-Daulah's Tomb (Baby Taj)",
    description: 'An early-17th-century marble Mughal tomb often called the "Baby Taj" and considered a draft of the Taj Mahal, famed for its pietra dura inlay.',
    lat: 27.1928, lng: 78.0306, city: 'Agra', region: 'Uttar Pradesh',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'mehtab bagh': {
    name: 'Mehtab Bagh',
    description: 'A Mughal charbagh garden on the north bank of the Yamuna that perfectly frames the rear view of the Taj Mahal at sunset.',
    lat: 27.1817, lng: 78.0428, city: 'Agra', region: 'Uttar Pradesh',
    type: 'TouristAttraction', unesco: false,
  },
  'sikandra': {
    name: "Akbar's Tomb, Sikandra",
    description: 'The grand sandstone-and-marble mausoleum of Mughal Emperor Akbar the Great, set in a walled garden on the Agra–Delhi highway.',
    lat: 27.2206, lng: 77.9505, city: 'Agra', region: 'Uttar Pradesh',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  "akbar's tomb": {
    name: "Akbar's Tomb, Sikandra",
    description: 'The grand sandstone-and-marble mausoleum of Mughal Emperor Akbar the Great, set in a walled garden on the Agra–Delhi highway.',
    lat: 27.2206, lng: 77.9505, city: 'Agra', region: 'Uttar Pradesh',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },

  // ----- Fatehpur Sikri (Uttar Pradesh) -----
  'fatehpur sikri': {
    name: 'Fatehpur Sikri',
    description: 'A near-perfectly preserved 16th-century Mughal city of red sandstone built by Emperor Akbar, briefly the empire\'s capital.',
    lat: 27.0945, lng: 77.6679, city: 'Fatehpur Sikri', region: 'Uttar Pradesh',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  'buland darwaza': {
    name: 'Buland Darwaza',
    description: 'A 54-metre triumphal gateway at Fatehpur Sikri built by Akbar to mark his Gujarat victory — the highest gateway in the world.',
    lat: 27.0937, lng: 77.6612, city: 'Fatehpur Sikri', region: 'Uttar Pradesh',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  'salim chishti tomb': {
    name: 'Tomb of Salim Chishti',
    description: 'A white-marble Sufi shrine inside Fatehpur Sikri famed for its delicate jali screens, where pilgrims tie threads for wishes.',
    lat: 27.0944, lng: 77.6671, city: 'Fatehpur Sikri', region: 'Uttar Pradesh',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  'panch mahal': {
    name: 'Panch Mahal',
    description: 'A five-storey open columnar palace at Fatehpur Sikri that was used by the royal ladies of Akbar\'s court.',
    lat: 27.0945, lng: 77.6661, city: 'Fatehpur Sikri', region: 'Uttar Pradesh',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  'diwan-i-khas': {
    name: 'Diwan-i-Khas, Fatehpur Sikri',
    description: 'The Hall of Private Audience at Fatehpur Sikri, centred on a single carved pillar where Akbar held his inter-faith debates.',
    lat: 27.0951, lng: 77.6668, city: 'Fatehpur Sikri', region: 'Uttar Pradesh',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  'jodha bai palace': {
    name: 'Jodha Bai Palace',
    description: 'The largest residential palace at Fatehpur Sikri, blending Hindu and Mughal architecture in Akbar\'s ghost capital.',
    lat: 27.0939, lng: 77.6655, city: 'Fatehpur Sikri', region: 'Uttar Pradesh',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },

  // ----- Delhi -----
  'red fort': {
    name: 'Red Fort (Lal Qila)',
    description: 'A 17th-century walled Mughal palace fort of red sandstone in Old Delhi from which India\'s Prime Minister addresses the nation each Independence Day.',
    lat: 28.6562, lng: 77.2410, city: 'Delhi', region: 'Delhi',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  'qutub minar': {
    name: 'Qutub Minar',
    description: 'A 73-metre 12th-century victory tower of red sandstone and marble, the tallest brick minaret in the world.',
    lat: 28.5245, lng: 77.1855, city: 'Delhi', region: 'Delhi',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  "humayun's tomb": {
    name: "Humayun's Tomb",
    description: 'The mid-16th-century garden tomb of Mughal Emperor Humayun, the first grand Mughal mausoleum and the architectural blueprint for the Taj Mahal.',
    lat: 28.5933, lng: 77.2507, city: 'Delhi', region: 'Delhi',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  'india gate': {
    name: 'India Gate',
    description: 'A 42-metre war memorial arch on Rajpath honouring the Indian soldiers who died in the First World War.',
    lat: 28.6129, lng: 77.2295, city: 'Delhi', region: 'Delhi',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'jama masjid': {
    name: 'Jama Masjid, Delhi',
    description: 'India\'s largest mosque, a 17th-century red-sandstone-and-marble Mughal mosque built by Shah Jahan in Old Delhi.',
    lat: 28.6507, lng: 77.2334, city: 'Delhi', region: 'Delhi',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'lotus temple': {
    name: 'Lotus Temple',
    description: 'A lotus-shaped Bahá\'í House of Worship in south Delhi, open to all faiths and one of the most-visited buildings in the world.',
    lat: 28.5535, lng: 77.2588, city: 'Delhi', region: 'Delhi',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'akshardham': {
    name: 'Swaminarayan Akshardham',
    description: 'A vast modern Hindu temple complex on the Yamuna in east Delhi, intricately carved in pink sandstone and white marble.',
    lat: 28.6127, lng: 77.2773, city: 'Delhi', region: 'Delhi',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'chandni chowk': {
    name: 'Chandni Chowk',
    description: 'One of the oldest and busiest markets in Old Delhi, laid out in the 17th century by Shah Jahan\'s daughter Jahanara.',
    lat: 28.6506, lng: 77.2303, city: 'Delhi', region: 'Delhi',
    type: 'TouristAttraction', unesco: false,
  },

  // ----- Jaipur (Rajasthan) -----
  'amber fort': {
    name: 'Amber Fort (Amer Fort)',
    description: 'A 16th-century hilltop fort-palace of red sandstone and marble overlooking Maota Lake, the former seat of the Kachhwaha Rajputs.',
    lat: 26.9855, lng: 75.8513, city: 'Jaipur', region: 'Rajasthan',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  'hawa mahal': {
    name: 'Hawa Mahal',
    description: 'The "Palace of Winds", a five-storey 1799 pink-sandstone facade with 953 latticed windows in the heart of Jaipur\'s old city.',
    lat: 26.9239, lng: 75.8267, city: 'Jaipur', region: 'Rajasthan',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'city palace': {
    name: 'City Palace, Jaipur',
    description: 'A grand 18th-century royal palace complex of courtyards and museums still partly home to the Jaipur royal family.',
    lat: 26.9258, lng: 75.8237, city: 'Jaipur', region: 'Rajasthan',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'jantar mantar': {
    name: 'Jantar Mantar, Jaipur',
    description: 'An early-18th-century astronomical observatory of monumental masonry instruments built by Maharaja Sawai Jai Singh II.',
    lat: 26.9248, lng: 75.8246, city: 'Jaipur', region: 'Rajasthan',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
  'jal mahal': {
    name: 'Jal Mahal',
    description: 'The "Water Palace", a five-storey palace appearing to float in the middle of Man Sagar Lake on the Jaipur–Amer road.',
    lat: 26.9537, lng: 75.8463, city: 'Jaipur', region: 'Rajasthan',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'jaigarh fort': {
    name: 'Jaigarh Fort',
    description: 'A rugged hill fort above Amber that houses Jaivana, once the world\'s largest cannon on wheels.',
    lat: 26.9851, lng: 75.8463, city: 'Jaipur', region: 'Rajasthan',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'nahargarh fort': {
    name: 'Nahargarh Fort',
    description: 'An 18th-century hill fort on the Aravalli ridge offering a panoramic sunset view over the entire pink walled city of Jaipur.',
    lat: 26.9374, lng: 75.8156, city: 'Jaipur', region: 'Rajasthan',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'panna meena stepwell': {
    name: 'Panna Meena ka Kund',
    description: 'A symmetrical 16th-century stepwell near Amber Fort, famed for its criss-crossing geometric staircases.',
    lat: 26.9967, lng: 75.8540, city: 'Jaipur', region: 'Rajasthan',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'albert hall': {
    name: 'Albert Hall Museum',
    description: 'The oldest museum in Rajasthan, an ornate Indo-Saracenic landmark in Ram Niwas Garden, central Jaipur.',
    lat: 26.9117, lng: 75.8194, city: 'Jaipur', region: 'Rajasthan',
    type: 'LandmarksOrHistoricalBuildings', unesco: false,
  },
  'sheesh mahal': {
    name: 'Sheesh Mahal, Amber',
    description: 'The Mirror Palace inside Amber Fort, its walls and ceiling inlaid with thousands of tiny mirrors that glitter from a single candle.',
    lat: 26.9853, lng: 75.8508, city: 'Jaipur', region: 'Rajasthan',
    type: 'LandmarksOrHistoricalBuildings', unesco: true,
  },
};

// Aliases — common variant spellings / wordings used in the data file that
// should resolve to the canonical MONUMENT_GEO key above. Keys must already be
// normalized (lowercase, no parenthetical suffix, trimmed).
const MONUMENT_ALIASES = {
  'baby taj': 'itimad-ud-daulah',
  "itimad-ud-daulah's tomb": 'itimad-ud-daulah',
  'sunrise taj': 'taj mahal',
  'sunset taj': 'taj mahal',
  'sunrise taj mahal': 'taj mahal',
  'amer fort': 'amber fort',
  'lal qila': 'red fort',
  'qutb minar': 'qutub minar',
  'humayuns tomb': "humayun's tomb",
  'akshardham temple': 'akshardham',
  'jama masjid delhi': 'jama masjid',
};

/**
 * Normalize a raw monument string from the data file into a lookup key.
 * Strips parenthetical suffixes ("Taj Mahal (VIP entry)" → "taj mahal"),
 * trailing " / X" alternatives, lowercases and trims. Returns '' for empties.
 */
function normalizeMonumentName(raw) {
  if (!raw || typeof raw !== 'string') return '';
  let s = raw.toLowerCase();
  s = s.replace(/\(.*?\)/g, ' ');        // drop "(VIP entry)", "(Baby Taj)" etc.
  s = s.split('/')[0];                    // "Itimad / Mehtab" → first landmark
  s = s.replace(/\b(sunrise|sunset|night view|vip)\b/g, ' '); // strip qualifiers
  s = s.replace(/[^a-z'\- ]/g, ' ');      // keep letters, apostrophe, hyphen
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

/**
 * getMonumentPlaces(record) — normalizes record.monuments[], resolves each to a
 * canonical MONUMENT_GEO entry (via direct key, alias, or word-boundary partial
 * match), de-duplicates, and returns an ordered array of matched place objects.
 * Non-landmark stops (bazaars, food streets, workshops, villages) gracefully
 * return nothing. Deterministic and network-free.
 */
export function getMonumentPlaces(record) {
  const out = [];
  const seen = new Set();
  for (const raw of record?.monuments || []) {
    const norm = normalizeMonumentName(raw);
    if (!norm) continue;

    // 1) direct canonical key  2) alias map  3) partial (key contained in norm)
    let key = MONUMENT_GEO[norm] ? norm : (MONUMENT_ALIASES[norm] || null);
    if (!key) {
      key = Object.keys(MONUMENT_GEO).find(
        (k) => norm === k || norm.includes(k) || k.includes(norm)
      ) || null;
    }
    if (!key || !MONUMENT_GEO[key] || seen.has(key)) continue;

    seen.add(key);
    out.push({ key, raw, ...MONUMENT_GEO[key] });
  }
  return out;
}

// ==================== WORD COUNT HELPER (build-time check) ====================
export function estimateWordCount(record) {
  const text = [
    record.intro,
    ...(record.includes || []),
    ...(record.excludes || []),
    record.headline,
    ...(record.itinerary || []).flatMap(d => d.stops.flatMap(s => [s.stop, s.detail])),
    ...(record.monuments || []),
    ...getThingsToDo(record.cityKey).flatMap(t => [t.title, t.desc]),
    ...getFaqs(record).flatMap(f => [f.q, f.a]),
    ...getReviews(record.slug, 3).flatMap(r => [r.author, r.body]),
  ].filter(Boolean).join(' ');
  return text.split(/\s+/).length;
}
