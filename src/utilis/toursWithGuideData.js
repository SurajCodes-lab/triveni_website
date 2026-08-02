// src/utilis/toursWithGuideData.js
// Single canonical data file for the Tours-With-Guide section.
// 80 production records keyed by slug + 3 hub records.
//
// Each record: city, vehicle, vehicleSlug, monuments[], duration, distance,
// vehicleFare, guideFee, bundledFare, includes[], excludes[], itinerary[],
// heroImage, gallery[], lastReviewed, optional guideLanguage (Group B/C).
//
// Images map into existing /public/images/sightseeing/{City}/* + vehicle
// imagery from /public/images/{tempo|car|bus}.

// ==================== VEHICLE CATALOG (reused across slugs) ====================
export const TOUR_VEHICLES = {
  'swift-dzire':         { name: 'Swift Dzire', category: 'Sedan',          seats: 4,  bagSpace: '2 large + 1 small', perKm: 11, image: '/images/car/swift_dzire.jpg' },
  'ertiga':              { name: 'Maruti Ertiga', category: 'Compact MPV',  seats: 6,  bagSpace: '2 large + 2 small', perKm: 15, image: '/images/car/ertiga.jpg' },
  'innova-crysta':       { name: 'Toyota Innova Crysta', category: 'Premium SUV', seats: 7,  bagSpace: '3 large + 2 small', perKm: 18, image: '/images/car/innova_crysta.jpg' },
  'force-urbania':       { name: 'Force Urbania', category: 'Luxury Tempo', seats: 12, bagSpace: '12 mid bags',         perKm: 26, image: '/images/tempo/12_seater.jpg' },
  'maharaja-tempo':      { name: 'Maharaja Tempo Traveller', category: 'Premium Tempo', seats: 17, bagSpace: '17 mid bags', perKm: 25, image: '/images/tempo/17_seater.jpg' },
  'mini-bus-20':         { name: '20-Seater Mini Bus',  category: 'Mini Bus', seats: 20, bagSpace: '20 mid bags', perKm: 38, image: '/images/bus/22_SEATER_BUS.jpg' },
  'volvo-bus-45':        { name: 'Volvo 45-Seater Bus', category: 'Coach',   seats: 45, bagSpace: 'Full luggage hold', perKm: 65, image: '/images/bus/45_SEATER_BUS.jpg' },
  'luxury-car-bmw-audi': { name: 'BMW / Audi Luxury Sedan', category: 'Luxury', seats: 4, bagSpace: '2 large', perKm: 95, image: '/images/car/premium_suv.jpg' },
};

// ==================== GUIDE LANGUAGES (Group B/C) ====================
export const GUIDE_LANGUAGES = {
  english:    { name: 'English',    nativeName: 'English',    bcp47: 'en', dailyFee: 1500, demand: 'High',     popularWith: 'UK, USA, Australia, Canada, Singapore, Indian premium travellers' },
  hindi:      { name: 'Hindi',      nativeName: 'हिन्दी',      bcp47: 'hi', dailyFee: 1200, demand: 'Very High', popularWith: 'Indian domestic travellers, NRI families' },
  french:     { name: 'French',     nativeName: 'Français',   bcp47: 'fr', dailyFee: 2800, demand: 'High',     popularWith: 'France, Belgium, Switzerland, Quebec' },
  german:     { name: 'German',     nativeName: 'Deutsch',    bcp47: 'de', dailyFee: 2800, demand: 'High',     popularWith: 'Germany, Austria, Switzerland' },
  spanish:    { name: 'Spanish',    nativeName: 'Español',    bcp47: 'es', dailyFee: 2800, demand: 'High',     popularWith: 'Spain, Mexico, Argentina, Colombia, Chile' },
  italian:    { name: 'Italian',    nativeName: 'Italiano',   bcp47: 'it', dailyFee: 2800, demand: 'Medium',   popularWith: 'Italy, Italian-Swiss travellers' },
  japanese:   { name: 'Japanese',   nativeName: '日本語',       bcp47: 'ja', dailyFee: 3000, demand: 'Medium',   popularWith: 'Japan tour groups, JTB / HIS' },
  russian:    { name: 'Russian',    nativeName: 'Русский',    bcp47: 'ru', dailyFee: 2500, demand: 'Medium',   popularWith: 'Russia, Belarus, Kazakhstan, Ukraine' },
  mandarin:   { name: 'Mandarin',   nativeName: '中文',         bcp47: 'zh', dailyFee: 3000, demand: 'Medium',   popularWith: 'China, Taiwan, Singapore, Malaysia' },
  portuguese: { name: 'Portuguese', nativeName: 'Português',  bcp47: 'pt', dailyFee: 2800, demand: 'Low',      popularWith: 'Brazil, Portugal' },
};

// ==================== CITY HERO + GALLERY HELPERS ====================
const CITY_GALLERIES = {
  agra: [
    '/images/sightseeing/Agra/Taj_mahal.jpg',
    '/images/sightseeing/Agra/agra_fort.jpg',
    '/images/sightseeing/Agra/Fathepur_shikiri.jpg',
    '/images/sightseeing/Agra/Mehtab_Bagh.jpg',
    '/images/sightseeing/Agra/Baby_Taj.jpg',
    '/images/sightseeing/Agra/Diwan_i_kHAS.jpg',
    '/images/sightseeing/Agra/Jama_Masjid.jpg',
  ],
  delhi: [
    '/images/sightseeing/Delhi/red_fort.jpg',
    '/images/sightseeing/Delhi/India_Gate.jpg',
    '/images/sightseeing/Delhi/Lotus Temple.jpg',
    '/images/sightseeing/Delhi/Outub_Minar.jpg',
    '/images/sightseeing/Delhi/Akshardham_Temple.jpg',
    "/images/sightseeing/Delhi/Humayun's_Tomb.jpg",
    '/images/sightseeing/Delhi/Raj_Ghat.jpg',
  ],
  jaipur: [
    '/images/sightseeing/Jaipur/amber_fort.jpg',
    '/images/sightseeing/Jaipur/city_palace.jpg',
    '/images/sightseeing/Jaipur/Hawa_Mahal.jpg',
    '/images/sightseeing/Jaipur/Jal_Mahal.jpg',
    '/images/sightseeing/Jaipur/jantar_mantar.jpg',
    '/images/sightseeing/Jaipur/Albert_Hall_Museum.jpg',
    '/images/sightseeing/Jaipur/Johari_bazar.jpg',
    '/images/sightseeing/Jaipur/Nahargarh_Fort.jpg',
  ],
  fatehpursikri: [
    '/images/sightseeing/Fatehpur_Sikri/Buland_Darwaza.jpg',
    '/images/sightseeing/Fatehpur_Sikri/Jodha_Bai_Palace.jpg',
    '/images/sightseeing/Fatehpur_Sikri/Panch_Mahal.jpg',
    '/images/sightseeing/Fatehpur_Sikri/Salim_Chishti_Tomb.jpg',
  ],
  goldentriangle: [
    '/images/sightseeing/Agra/Taj_mahal.jpg',
    '/images/sightseeing/Jaipur/amber_fort.jpg',
    '/images/sightseeing/Delhi/red_fort.jpg',
    '/images/sightseeing/Agra/agra_fort.jpg',
    '/images/sightseeing/Delhi/India_Gate.jpg',
    '/images/sightseeing/Jaipur/Hawa_Mahal.jpg',
  ],
};

const CITY_HEROES = {
  agra: '/images/sightseeing/Agra/Agra_Hero_section.jpg',
  delhi: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
  jaipur: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
  fatehpursikri: '/images/sightseeing/Fatehpur_Sikri/Fatehpur_Sikri_hero_section.jpg',
  goldentriangle: '/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg',
};

const TAJ_HERO = '/images/sightseeing/Agra/Taj_mahal.jpg';

// ==================== ITINERARY BUILDERS ====================
function tajItinerary() {
  return [
    { day: 'Morning', stops: [
      { time: '06:30 AM', stop: 'Hotel Pickup', detail: 'Driver + licensed guide arrive at lobby with name board.' },
      { time: '07:00 AM', stop: 'Taj Mahal — East/West Gate', detail: 'Skip-the-line entry. 2 hours guided tour of the mausoleum, gardens, mosque & Mihman Khana.' },
    ]},
    { day: 'Mid-Day', stops: [
      { time: '10:00 AM', stop: 'Agra Fort', detail: 'Diwan-i-Khas, Sheesh Mahal, Musamman Burj — where Shah Jahan was imprisoned with Taj view.' },
      { time: '12:30 PM', stop: 'Lunch — Mughal Cuisine', detail: 'Recommended restaurant on Fatehabad Road (paid separately).' },
    ]},
    { day: 'Afternoon', stops: [
      { time: '02:00 PM', stop: 'Itimad-ud-Daulah (Baby Taj)', detail: 'Marble inlay precursor to the Taj Mahal — quieter & photogenic.' },
      { time: '03:30 PM', stop: 'Mehtab Bagh', detail: 'Garden across the Yamuna with the iconic Taj Mahal back-view at sunset.' },
      { time: '05:30 PM', stop: 'Drop at Hotel / Station', detail: 'Pickup driver returns; guide signs off.' },
    ]},
  ];
}

function tajSunriseItinerary() {
  return [
    { day: 'Pre-Dawn', stops: [
      { time: '04:30 AM', stop: 'Hotel Pickup', detail: 'Quiet city ride to East Gate — first batch entry.' },
      { time: '05:30 AM', stop: 'Taj Mahal Sunrise', detail: 'Watch the marble change from grey-pink to ivory-gold — the photo no Instagram filter can fake.' },
    ]},
    { day: 'Morning', stops: [
      { time: '08:30 AM', stop: 'Breakfast at Hotel / Cafe', detail: 'Refresh after sunrise visit.' },
      { time: '10:00 AM', stop: 'Agra Fort', detail: 'Mughal residential fortress — guided tour 1.5 hours.' },
    ]},
    { day: 'Afternoon', stops: [
      { time: '12:30 PM', stop: 'Itimad-ud-Daulah', detail: 'The Baby Taj — pietra dura inlay masterpiece.' },
      { time: '02:00 PM', stop: 'Drop at Hotel / Station', detail: 'Tour concludes.' },
    ]},
  ];
}

function moonlightTajItinerary() {
  return [
    { day: 'Day Visit', stops: [
      { time: '10:00 AM', stop: 'Agra Fort', detail: 'Begin with the fort — guide narrates Shah Jahan\'s last view from Musamman Burj.' },
      { time: '12:30 PM', stop: 'Lunch break', detail: 'Mughal cuisine on Fatehabad Road.' },
      { time: '02:00 PM', stop: 'Itimad-ud-Daulah + Mehtab Bagh', detail: 'Day-side viewing of secondary monuments.' },
    ]},
    { day: 'Evening', stops: [
      { time: '07:00 PM', stop: 'Dinner at Hotel', detail: 'Rest before the night visit (note: Moonlight viewing happens 5 nights/month around full moon).' },
      { time: '08:30 PM', stop: 'Taj Mahal Moonlight', detail: '30-min slot inside the gardens. ASI-permitted special tickets booked 24 hrs in advance.' },
      { time: '09:30 PM', stop: 'Drop at Hotel', detail: 'Tour concludes.' },
    ]},
  ];
}

function fatehpurItinerary() {
  return [
    { day: 'Morning', stops: [
      { time: '08:00 AM', stop: 'Pickup from Agra', detail: 'Drive 40 km / ~1 hr to Fatehpur Sikri — Akbar\'s ghost capital.' },
      { time: '09:30 AM', stop: 'Buland Darwaza', detail: 'India\'s largest gateway — 54 m high, climb the imposing steps.' },
    ]},
    { day: 'Mid-Day', stops: [
      { time: '10:30 AM', stop: 'Salim Chishti Tomb', detail: 'White marble Sufi shrine inside Jama Masjid courtyard.' },
      { time: '11:30 AM', stop: 'Panch Mahal & Diwan-i-Khas', detail: 'Five-storey palace + the central pillar of debate where Akbar held inter-faith dialogues.' },
      { time: '12:30 PM', stop: 'Jodha Bai Palace', detail: 'Akbar\'s Hindu queen\'s residence — rare cross-cultural Mughal architecture.' },
    ]},
    { day: 'Afternoon', stops: [
      { time: '02:00 PM', stop: 'Lunch + Return to Agra', detail: 'Rural Punjabi-Mughlai dhaba en route. Reach Agra by 04:00 PM.' },
    ]},
  ];
}

function delhiCityItinerary() {
  return [
    { day: 'Morning', stops: [
      { time: '09:00 AM', stop: 'Hotel Pickup', detail: 'Driver + guide meet at lobby.' },
      { time: '09:30 AM', stop: 'Red Fort (Lal Qila)', detail: 'UNESCO Mughal residence. Guide narrates 1857 to 1947 transition.' },
      { time: '11:00 AM', stop: 'Jama Masjid', detail: 'India\'s largest mosque — climb the minaret (optional, ₹100).' },
    ]},
    { day: 'Mid-Day', stops: [
      { time: '12:00 PM', stop: 'Chandni Chowk Walk', detail: 'Spice market, Paranthe Wali Gali, silver bazaar — guided narration.' },
      { time: '01:30 PM', stop: 'Lunch break', detail: 'Karim\'s or Paranthe Wali Gali (paid separately).' },
      { time: '02:30 PM', stop: 'Raj Ghat', detail: 'Mahatma Gandhi memorial.' },
    ]},
    { day: 'Afternoon', stops: [
      { time: '03:30 PM', stop: 'India Gate + Rajpath drive', detail: 'Photo stop at the war memorial.' },
      { time: '04:30 PM', stop: 'Qutub Minar', detail: 'UNESCO 12th-century minaret — Iron Pillar in the same complex.' },
      { time: '06:00 PM', stop: 'Lotus Temple (exterior)', detail: 'Bahai house of worship — exterior view if time permits.' },
      { time: '07:00 PM', stop: 'Drop at Hotel', detail: 'Tour concludes.' },
    ]},
  ];
}

function oldDelhiHeritageItinerary() {
  return [
    { day: 'Morning Walk', stops: [
      { time: '07:00 AM', stop: 'Pickup at Hotel', detail: 'Drive to Chandni Chowk start point.' },
      { time: '07:30 AM', stop: 'Jama Masjid', detail: 'Begin at the foot of the steps before crowds arrive.' },
      { time: '08:30 AM', stop: 'Chandni Chowk', detail: 'Silver lane, Paranthe Wali Gali breakfast (paid separately), Naughara Jain Lane.' },
    ]},
    { day: 'Walk Continues', stops: [
      { time: '10:30 AM', stop: 'Spice Market (Khari Baoli)', detail: 'Asia\'s largest spice market — guide explains masala vocabulary.' },
      { time: '11:30 AM', stop: 'Red Fort outer wall + Lahori Gate', detail: 'Walk-around of the fortifications.' },
      { time: '12:30 PM', stop: 'Drop at Hotel', detail: 'Tour concludes.' },
    ]},
  ];
}

function delhiTempleItinerary() {
  return [
    { day: 'Morning', stops: [
      { time: '08:00 AM', stop: 'Akshardham Temple', detail: 'Modern Swaminarayan complex — boat ride + cultural galleries (3 hrs).' },
      { time: '11:30 AM', stop: 'ISKCON Temple (East of Kailash)', detail: 'Krishna devotional centre.' },
    ]},
    { day: 'Afternoon', stops: [
      { time: '01:30 PM', stop: 'Lunch break', detail: 'Vegetarian restaurant near Lotus Temple.' },
      { time: '02:30 PM', stop: 'Lotus Temple', detail: 'Bahai meditation hall — silent prayer space open to all faiths.' },
      { time: '04:00 PM', stop: 'Birla Mandir / Chhatarpur Temple', detail: 'Choose based on time — guide explains iconography.' },
      { time: '06:00 PM', stop: 'Drop at Hotel', detail: 'Tour concludes.' },
    ]},
  ];
}

function jaipurCityItinerary() {
  return [
    { day: 'Morning', stops: [
      { time: '08:30 AM', stop: 'Hotel Pickup', detail: 'Driver + guide head to Amber Fort.' },
      { time: '09:00 AM', stop: 'Amber Fort', detail: 'UNESCO hilltop fort — Sheesh Mahal, Diwan-e-Aam, optional jeep ride up.' },
      { time: '11:30 AM', stop: 'Jal Mahal', detail: 'Photo stop at the floating palace.' },
    ]},
    { day: 'Mid-Day', stops: [
      { time: '12:00 PM', stop: 'Lunch break', detail: 'Rajasthani thali on MI Road.' },
      { time: '01:30 PM', stop: 'City Palace + Jantar Mantar', detail: 'Royal residence + 18th-century astronomical observatory (UNESCO).' },
    ]},
    { day: 'Afternoon', stops: [
      { time: '04:00 PM', stop: 'Hawa Mahal', detail: 'The 953-window pink-sandstone facade — best photographed from across the road.' },
      { time: '05:00 PM', stop: 'Johari & Bapu Bazaar', detail: 'Block-print textiles, gemstones, mojaris.' },
      { time: '06:30 PM', stop: 'Drop at Hotel', detail: 'Tour concludes.' },
    ]},
  ];
}

function amberFortItinerary() {
  return [
    { day: 'Morning', stops: [
      { time: '08:30 AM', stop: 'Pickup at Hotel', detail: 'Drive 11 km / 30 min to the fort base.' },
      { time: '09:00 AM', stop: 'Amber Fort entry', detail: 'Sheesh Mahal mirror palace, Ganesh Pol, Diwan-e-Aam.' },
      { time: '11:00 AM', stop: 'Anokhi Museum / Panna Meena Stepwell', detail: 'Step-well photo + textile museum 5 min from the fort.' },
    ]},
    { day: 'Mid-Day', stops: [
      { time: '12:00 PM', stop: 'Lunch + Drive back', detail: 'Return to Jaipur city.' },
      { time: '01:30 PM', stop: 'Drop at Hotel', detail: 'Tour concludes.' },
    ]},
  ];
}

function goldenTriangleItinerary() {
  return [
    { day: 'Day 1 — Delhi Arrival + City Tour', stops: [
      { time: 'AM', stop: 'Airport / Station Pickup', detail: 'Driver + English guide meet you with name board.' },
      { time: 'Day', stop: 'Old & New Delhi', detail: 'Red Fort, Jama Masjid, Chandni Chowk, Raj Ghat, India Gate, Qutub Minar, Lotus Temple.' },
      { time: 'PM', stop: 'Hotel Check-in', detail: 'Recommended 4-star hotels in Connaught Place / Karol Bagh.' },
    ]},
    { day: 'Day 2 — Delhi → Agra (230 km, 3.5 hrs)', stops: [
      { time: 'AM', stop: 'Drive to Agra via Yamuna Expressway', detail: 'Tea/snack stop midway.' },
      { time: 'Day', stop: 'Taj Mahal + Agra Fort', detail: 'Full guided tour of both UNESCO sites.' },
      { time: 'PM', stop: 'Hotel Check-in (Agra)', detail: 'Mehtab Bagh sunset add-on optional.' },
    ]},
    { day: 'Day 3 — Agra → Fatehpur Sikri → Jaipur (240 km, 5 hrs)', stops: [
      { time: 'AM', stop: 'Fatehpur Sikri', detail: 'Akbar\'s ghost capital — Buland Darwaza, Salim Chishti.' },
      { time: 'Day', stop: 'Drive to Jaipur', detail: 'Lunch en route — reach Jaipur by 5 PM.' },
      { time: 'PM', stop: 'Hotel Check-in (Jaipur)', detail: 'Optional Chokhi Dhani Rajasthani village dinner.' },
    ]},
    { day: 'Day 4 — Jaipur Sightseeing', stops: [
      { time: 'AM', stop: 'Amber Fort', detail: 'Sheesh Mahal, Diwan-e-Aam.' },
      { time: 'Day', stop: 'City Palace + Jantar Mantar', detail: 'UNESCO observatory.' },
      { time: 'PM', stop: 'Hawa Mahal + Bazaars', detail: 'Photo stop + shopping.' },
    ]},
    { day: 'Day 5 — Jaipur → Delhi Drop (270 km, 5 hrs)', stops: [
      { time: 'AM', stop: 'Drive back to Delhi', detail: 'Optional stop at Neemrana Fort for lunch.' },
      { time: 'PM', stop: 'Drop at Airport / Hotel', detail: 'Tour concludes.' },
    ]},
  ];
}

function delhiToAgraItinerary() {
  return [
    { day: 'Pre-Dawn / Morning', stops: [
      { time: '06:00 AM', stop: 'Delhi Hotel Pickup', detail: 'Driver + guide meet at lobby. Drive Yamuna Expressway.' },
      { time: '09:30 AM', stop: 'Reach Agra', detail: 'Tea stop + freshen-up at partner hotel.' },
      { time: '10:00 AM', stop: 'Taj Mahal', detail: 'Skip-line entry. 2-hr guided tour.' },
    ]},
    { day: 'Mid-Day', stops: [
      { time: '12:30 PM', stop: 'Lunch — Mughal Cuisine', detail: 'Pinch of Spice / Esphahan recommendation.' },
      { time: '02:00 PM', stop: 'Agra Fort', detail: 'Diwan-i-Khas, Sheesh Mahal, Musamman Burj.' },
    ]},
    { day: 'Evening', stops: [
      { time: '04:00 PM', stop: 'Itimad-ud-Daulah / Mehtab Bagh', detail: 'Choose one based on time.' },
      { time: '05:30 PM', stop: 'Drive back to Delhi', detail: 'Reach Delhi 09:00–10:00 PM.' },
    ]},
  ];
}

function delhiAgra2DayItinerary() {
  return [
    { day: 'Day 1 — Delhi to Agra', stops: [
      { time: '08:00 AM', stop: 'Delhi Hotel Pickup', detail: 'Drive Yamuna Expressway 230 km.' },
      { time: '11:30 AM', stop: 'Reach Agra + Hotel Check-in', detail: 'Refresh.' },
      { time: '02:00 PM', stop: 'Agra Fort + Itimad-ud-Daulah', detail: 'Day-1 monuments.' },
      { time: '06:00 PM', stop: 'Mehtab Bagh Sunset', detail: 'Taj back-view at golden hour.' },
    ]},
    { day: 'Day 2 — Sunrise Taj + Drive Back', stops: [
      { time: '05:30 AM', stop: 'Sunrise Taj Mahal', detail: 'First-batch entry — quietest, best light.' },
      { time: '08:30 AM', stop: 'Breakfast + Hotel Check-out', detail: 'Refresh.' },
      { time: '10:00 AM', stop: 'Fatehpur Sikri', detail: 'En-route Akbar\'s ghost capital.' },
      { time: '01:00 PM', stop: 'Lunch + Drive to Delhi', detail: 'Reach Delhi by 06:00 PM.' },
    ]},
  ];
}

function agraHeritageWalkItinerary() {
  return [
    { day: 'Walk', stops: [
      { time: '07:00 AM', stop: 'Pickup', detail: 'Drive to Mughal Heritage Walk start (Tajganj).' },
      { time: '07:30 AM', stop: 'Tajganj district', detail: 'Old Mughal artisan quarter — marble inlay workshops, stepwells.' },
      { time: '09:00 AM', stop: 'Kachhpura village', detail: 'Across the Yamuna — life behind the Taj.' },
      { time: '10:30 AM', stop: 'Mehtab Bagh + drop', detail: 'Walk concludes.' },
    ]},
  ];
}

function agraPhotoTourItinerary() {
  return [
    { day: 'Photo Walk', stops: [
      { time: '05:30 AM', stop: 'Sunrise Taj — East Gate', detail: 'Golden-hour facade shots.' },
      { time: '08:00 AM', stop: 'Mehtab Bagh — across river', detail: 'Reflection shots of Taj over Yamuna.' },
      { time: '10:00 AM', stop: 'Agra Fort — Diwan-i-Khas', detail: 'Inlay, lattice, frame-in-frame compositions.' },
      { time: '12:00 PM', stop: 'Itimad-ud-Daulah', detail: 'Pietra dura close-ups.' },
      { time: '04:00 PM', stop: 'Tajganj alleys', detail: 'Street portraits in the Mughal artisan quarter.' },
      { time: '06:30 PM', stop: 'Sunset Taj — Mehtab Bagh', detail: 'Bookend shoot.' },
    ]},
  ];
}

function agraShoppingItinerary() {
  return [
    { day: 'Shopping Day', stops: [
      { time: '10:00 AM', stop: 'Sadar Bazaar', detail: 'Leather, embroidery, carpets — guide negotiates.' },
      { time: '12:00 PM', stop: 'Marble Inlay Workshop', detail: 'Live demonstration of pietra dura — buy direct from artisans.' },
      { time: '02:00 PM', stop: 'Lunch break', detail: 'Local Mughlai.' },
      { time: '03:30 PM', stop: 'Kinari Bazaar (Old Agra)', detail: 'Wedding accessories, juttis, brass.' },
      { time: '05:30 PM', stop: 'Sweets & Petha', detail: 'Panchhi Petha flagship store.' },
      { time: '06:30 PM', stop: 'Hotel drop', detail: 'Tour concludes.' },
    ]},
  ];
}

function agraFoodItinerary() {
  return [
    { day: 'Food Trail', stops: [
      { time: '08:30 AM', stop: 'Bedai + Jalebi Breakfast', detail: 'Deviram Sweets — Agra\'s heaviest breakfast.' },
      { time: '10:30 AM', stop: 'Petha Factory Visit', detail: 'See Panchhi Petha being made.' },
      { time: '12:30 PM', stop: 'Mughlai Lunch', detail: 'Pinch of Spice — Mughlai biryani, kebabs.' },
      { time: '03:30 PM', stop: 'Chaat Street Walk', detail: 'Bhalla, dahi-bhalle, paani-puri.' },
      { time: '06:00 PM', stop: 'Tandoor Dinner', detail: 'Esphahan / Peshawri — dum biryani & kebabs.' },
      { time: '08:00 PM', stop: 'Hotel drop', detail: 'Tour concludes.' },
    ]},
  ];
}

function mehtabItmadItinerary() {
  return [
    { day: 'Half-Day', stops: [
      { time: '02:00 PM', stop: 'Itimad-ud-Daulah (Baby Taj)', detail: 'Marble pietra dura — calmer than the Taj.' },
      { time: '04:00 PM', stop: 'Mehtab Bagh', detail: 'Sunset Taj back-view from across the Yamuna.' },
      { time: '06:30 PM', stop: 'Hotel drop', detail: 'Tour concludes.' },
    ]},
  ];
}

function jaipur2DayItinerary() {
  return [
    { day: 'Day 1', stops: [
      { time: 'AM', stop: 'Amber Fort + Jal Mahal', detail: 'Hilltop UNESCO fort + photo stop.' },
      { time: 'PM', stop: 'City Palace + Jantar Mantar + Hawa Mahal', detail: 'Royal residence + UNESCO observatory + window facade.' },
    ]},
    { day: 'Day 2', stops: [
      { time: 'AM', stop: 'Nahargarh Fort + Jaigarh Fort', detail: 'Aravalli skyline — world\'s largest cannon.' },
      { time: 'PM', stop: 'Albert Hall Museum + Bazaars', detail: 'Indo-Saracenic museum + shopping.' },
    ]},
  ];
}

function jaipurShoppingItinerary() {
  return [
    { day: 'Shopping & Heritage', stops: [
      { time: '10:00 AM', stop: 'Johari Bazaar', detail: 'Gemstones — guide brings you to verified dealers.' },
      { time: '12:00 PM', stop: 'Bapu Bazaar', detail: 'Mojaris, block-print textiles, leather.' },
      { time: '02:00 PM', stop: 'Lunch break', detail: 'Rajasthani thali.' },
      { time: '03:30 PM', stop: 'Anokhi / Soma Block-Print Studio', detail: 'Boutique block-print fashion.' },
      { time: '05:30 PM', stop: 'Tripolia / Chandpole', detail: 'Brass, lac bangles, Ramganj jutis.' },
      { time: '07:00 PM', stop: 'Drop at Hotel', detail: 'Tour concludes.' },
    ]},
  ];
}

function corporateGroupItinerary(city) {
  return [
    { day: 'Day Plan', stops: [
      { time: '09:00 AM', stop: 'Hotel / Office Pickup', detail: '45-seater Volvo bus + corporate liaison guide.' },
      { time: '10:00 AM', stop: `Iconic ${city} monument 1`, detail: 'Group photo stop, 60-min guided session.' },
      { time: '12:00 PM', stop: 'Group Lunch', detail: 'Pre-arranged corporate set menu.' },
      { time: '02:00 PM', stop: `Iconic ${city} monument 2`, detail: 'Walking tour for the group.' },
      { time: '04:30 PM', stop: 'Refreshment break', detail: 'Tea + biscuits served on bus.' },
      { time: '06:00 PM', stop: `Iconic ${city} monument 3 / market`, detail: 'Final stop with shopping window.' },
      { time: '07:30 PM', stop: 'Hotel drop', detail: 'Tour concludes.' },
    ]},
  ];
}

function schoolTripItinerary(city) {
  return [
    { day: 'Educational Day', stops: [
      { time: '08:30 AM', stop: 'School Pickup', detail: '20-seater mini bus + teacher liaison guide.' },
      { time: '09:30 AM', stop: `${city} historical site 1`, detail: 'Guide narrates curriculum-aligned history.' },
      { time: '11:30 AM', stop: 'Snack break', detail: 'Packed snacks on the bus.' },
      { time: '12:30 PM', stop: `${city} historical site 2`, detail: 'Worksheet activity led by the guide.' },
      { time: '02:30 PM', stop: 'Lunch break', detail: 'Group lunch at child-friendly restaurant.' },
      { time: '03:30 PM', stop: `${city} science / art site`, detail: 'Interactive session.' },
      { time: '05:30 PM', stop: 'School drop', detail: 'Tour concludes.' },
    ]},
  ];
}

function familyTempoItinerary(city) {
  return [
    { day: 'Family Day', stops: [
      { time: '09:00 AM', stop: 'Hotel Pickup', detail: '12-seater Force Urbania — captain seats, AC, charging points.' },
      { time: '10:00 AM', stop: `${city} top monument`, detail: 'Stroller + senior-friendly route.' },
      { time: '12:30 PM', stop: 'Family lunch', detail: 'Recommended kid-friendly restaurant.' },
      { time: '02:00 PM', stop: `${city} fort / palace`, detail: 'Guide adapts narration for kids.' },
      { time: '04:30 PM', stop: `${city} bazaar / cafe`, detail: 'Souvenir shopping + ice cream stop.' },
      { time: '06:30 PM', stop: 'Hotel drop', detail: 'Tour concludes.' },
    ]},
  ];
}

function luxuryTajItinerary() {
  return [
    { day: 'Premium Day', stops: [
      { time: '07:00 AM', stop: 'Hotel Pickup', detail: 'BMW / Audi luxury sedan + senior guide arrives.' },
      { time: '08:00 AM', stop: 'Taj Mahal — VIP entry', detail: 'Skip-line ticket + 2.5 hr unhurried guided tour.' },
      { time: '11:30 AM', stop: 'Brunch at Oberoi Amarvilas', detail: 'Taj-view five-star brunch (paid separately).' },
      { time: '01:30 PM', stop: 'Agra Fort — VIP', detail: 'Private guided tour skipping queue.' },
      { time: '03:30 PM', stop: 'Marble Inlay Workshop', detail: 'Private artisan demonstration.' },
      { time: '05:00 PM', stop: 'Drop at Hotel / Station', detail: 'Tour concludes.' },
    ]},
  ];
}

function delhiSightseeingTempoItinerary() {
  return delhiCityItinerary();
}
function jaipurFullDayTempoItinerary() {
  return jaipurCityItinerary();
}

// ==================== TOUR RECORDS BUILDER ====================
// Helper: generate a record. fields can be overridden.
function r(slug, opts) {
  const v = TOUR_VEHICLES[opts.vehicleSlug];
  return {
    slug,
    city: opts.city,
    cityKey: opts.cityKey,
    group: opts.group,           // 'A' | 'B' | 'C'
    cluster: opts.cluster,       // 'A1' | 'A2' | ... | 'B' | 'C-taj' | 'C-sameday' | 'C-gt'
    vehicleSlug: opts.vehicleSlug,
    vehicle: v.name,
    vehicleCategory: v.category,
    vehicleSeats: v.seats,
    vehicleImage: v.image,
    vehicleBagSpace: v.bagSpace,
    monuments: opts.monuments,
    duration: opts.duration,
    distance: opts.distance,
    vehicleFare: opts.vehicleFare,     // INR — vehicle component
    guideFee: opts.guideFee,           // INR — guide component (use language-based fee for B/C)
    bundledFare: opts.vehicleFare + opts.guideFee,
    headline: opts.headline,
    intro: opts.intro,
    includes: opts.includes || [
      `${v.name} (${v.category}) for the duration of the tour`,
      'Licensed Ministry-of-Tourism tour guide',
      'Fuel + driver allowance + parking',
      'Bottled water (1 L per person, per day)',
      'Tolls on the agreed route',
      'Pickup & drop at hotel / station / airport in the city',
    ],
    excludes: opts.excludes || [
      'Monument entry tickets (Taj ₹1,300 / Agra Fort ₹650 etc.)',
      'Meals & beverages',
      'Tips for guide & driver (discretionary)',
      'Personal expenses, shopping',
      'Camera / video charges at monuments',
    ],
    itinerary: opts.itinerary,
    heroImage: opts.heroImage,
    gallery: opts.gallery,
    guideLanguage: opts.guideLanguage || null,
    languageNative: opts.languageNative || null,
    lastReviewed: '2026-04-29',
    pickupCity: opts.pickupCity || opts.city,
  };
}

// ==================== CLUSTER A1 — AGRA (20) ====================
const A1 = {
  'taj-mahal-tour-with-guide-sedan': r('taj-mahal-tour-with-guide-sedan', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'swift-dzire',
    monuments: ['Taj Mahal', 'Agra Fort', 'Itimad-ud-Daulah', 'Mehtab Bagh'],
    duration: 'Full Day (10 hrs)', distance: '50 km local',
    vehicleFare: 2500, guideFee: 1500,
    headline: 'Taj Mahal Tour with Licensed Guide — Sedan',
    intro: 'A full-day private Taj Mahal tour in a 4-seater Swift Dzire sedan with a Ministry-of-Tourism licensed English-speaking guide. Covers Taj Mahal, Agra Fort, Itimad-ud-Daulah and Mehtab Bagh — bundled price, no surprise fees, hotel pickup included.',
    itinerary: tajItinerary(),
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'taj-mahal-tour-with-guide-tempo': r('taj-mahal-tour-with-guide-tempo', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'maharaja-tempo',
    monuments: ['Taj Mahal', 'Agra Fort', 'Itimad-ud-Daulah', 'Mehtab Bagh'],
    duration: 'Full Day (10 hrs)', distance: '50 km local',
    vehicleFare: 6000, guideFee: 1500,
    headline: 'Taj Mahal Tour with Guide — Maharaja Tempo Traveller',
    intro: 'A full-day Taj Mahal group tour in a 17-seater Maharaja Tempo Traveller with a Ministry-licensed guide. Ideal for extended families, friend groups and corporate small groups. AC, pushback recliners, music system + bottled water.',
    itinerary: tajItinerary(),
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'taj-mahal-tour-with-guide-bus': r('taj-mahal-tour-with-guide-bus', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'volvo-bus-45',
    monuments: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh'],
    duration: 'Full Day (10 hrs)', distance: '50 km local',
    vehicleFare: 14000, guideFee: 1500,
    headline: 'Taj Mahal Tour by Bus with Guide — Volvo 45-Seater',
    intro: 'Large-group Taj Mahal tour in a Volvo 45-seater AC coach with a senior licensed guide. Built for incentive groups, college tours and conference delegations — full luggage hold, recliners, microphone for guide narration.',
    itinerary: tajItinerary(),
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'agra-full-day-tour-with-guide-sedan': r('agra-full-day-tour-with-guide-sedan', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'swift-dzire',
    monuments: ['Taj Mahal', 'Agra Fort', 'Itimad-ud-Daulah', 'Mehtab Bagh', 'Sikandra (Akbar\'s Tomb)'],
    duration: 'Full Day (10 hrs)', distance: '60 km local',
    vehicleFare: 2500, guideFee: 1500,
    headline: 'Agra One Day Tour with Guide — Sedan',
    intro: 'The complete Agra one-day tour: Taj Mahal, Agra Fort, Itimad-ud-Daulah, Mehtab Bagh, plus Sikandra (Akbar\'s Tomb). Includes a Ministry-licensed guide and a Swift Dzire sedan with verified driver. Designed for couples and small families.',
    itinerary: tajItinerary(),
    heroImage: CITY_HEROES.agra, gallery: CITY_GALLERIES.agra,
  }),
  'agra-full-day-tour-with-guide-tempo': r('agra-full-day-tour-with-guide-tempo', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'maharaja-tempo',
    monuments: ['Taj Mahal', 'Agra Fort', 'Itimad-ud-Daulah', 'Mehtab Bagh', 'Sikandra'],
    duration: 'Full Day (10 hrs)', distance: '60 km local',
    vehicleFare: 6000, guideFee: 1500,
    headline: 'Agra Full Day Tempo Tour with Guide',
    intro: 'Group-of-15 Agra full-day tour in a Maharaja Tempo with licensed guide. Covers all five top Agra monuments. Suited to multi-generational families and friend groups travelling together.',
    itinerary: tajItinerary(),
    heroImage: CITY_HEROES.agra, gallery: CITY_GALLERIES.agra,
  }),
  'agra-full-day-tour-with-guide-bus': r('agra-full-day-tour-with-guide-bus', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'volvo-bus-45',
    monuments: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh', 'Sikandra'],
    duration: 'Full Day (10 hrs)', distance: '60 km local',
    vehicleFare: 14000, guideFee: 1500,
    headline: 'Agra Tour Bus with Guide — Volvo 45-Seater',
    intro: 'Volvo 45-seater bus + senior licensed guide for the complete Agra one-day circuit. Built for conferences, MICE groups and large incentive trips.',
    itinerary: tajItinerary(),
    heroImage: CITY_HEROES.agra, gallery: CITY_GALLERIES.agra,
  }),
  'taj-mahal-agra-fort-tour-with-guide': r('taj-mahal-agra-fort-tour-with-guide', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'swift-dzire',
    monuments: ['Taj Mahal', 'Agra Fort'],
    duration: 'Half Day (6 hrs)', distance: '30 km local',
    vehicleFare: 1800, guideFee: 1200,
    headline: 'Taj Mahal & Agra Fort Tour with Guide',
    intro: 'Focused half-day Taj Mahal + Agra Fort tour with a Ministry-licensed guide. The two essential UNESCO sites in one efficient circuit. Ideal for travellers on a same-day Delhi turnaround.',
    itinerary: tajItinerary(),
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'fatehpur-sikri-day-trip-with-guide': r('fatehpur-sikri-day-trip-with-guide', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'ertiga',
    monuments: ['Buland Darwaza', 'Salim Chishti Tomb', 'Panch Mahal', 'Diwan-i-Khas', 'Jodha Bai Palace'],
    duration: 'Half Day (6 hrs)', distance: '80 km (40 km each way)',
    vehicleFare: 2400, guideFee: 1500,
    headline: 'Fatehpur Sikri Tour with Guide',
    intro: 'Half-day excursion 40 km west of Agra to Fatehpur Sikri — Akbar\'s ghost capital and UNESCO World Heritage Site. Six-passenger Ertiga MPV + Ministry-licensed Mughal-history guide.',
    itinerary: fatehpurItinerary(),
    heroImage: CITY_HEROES.fatehpursikri, gallery: CITY_GALLERIES.fatehpursikri,
  }),
  'sunrise-taj-mahal-tour-with-guide': r('sunrise-taj-mahal-tour-with-guide', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'swift-dzire',
    monuments: ['Taj Mahal (sunrise)', 'Agra Fort', 'Itimad-ud-Daulah'],
    duration: '8 hrs (Pre-dawn)', distance: '40 km local',
    vehicleFare: 2200, guideFee: 1500,
    headline: 'Sunrise Taj Mahal Tour with Guide',
    intro: 'Pre-dawn pickup, first-batch entry into the Taj Mahal — watch the marble change from grey to ivory-gold as the sun rises behind the Yamuna. Includes Agra Fort + Itimad-ud-Daulah after breakfast.',
    itinerary: tajSunriseItinerary(),
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'moonlight-taj-mahal-with-guide': r('moonlight-taj-mahal-with-guide', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'innova-crysta',
    monuments: ['Taj Mahal (night view)', 'Agra Fort', 'Itimad-ud-Daulah', 'Mehtab Bagh'],
    duration: '12 hrs (Day + Night slot)', distance: '50 km local',
    vehicleFare: 4500, guideFee: 2000,
    headline: 'Moonlight Taj Mahal Tour with Guide',
    intro: 'Day-side tour of Agra Fort + Itimad-ud-Daulah + Mehtab Bagh, then a 30-minute Taj Mahal moonlight viewing slot (available 5 nights/month around full moon). Innova Crysta + senior guide. Special ASI tickets booked 24 hrs in advance.',
    itinerary: moonlightTajItinerary(),
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'agra-heritage-walk-with-guide': r('agra-heritage-walk-with-guide', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'swift-dzire',
    monuments: ['Tajganj Mughal Quarter', 'Kachhpura village', 'Mehtab Bagh'],
    duration: 'Half Day (5 hrs)', distance: '20 km local',
    vehicleFare: 1500, guideFee: 1200,
    headline: 'Agra Heritage Walk with Guide',
    intro: 'A walking immersion in the Mughal artisan quarter behind the Taj — marble inlay workshops, stepwells, Kachhpura village across the Yamuna. The "behind the postcard" Agra. Driver waits at start/end points.',
    itinerary: agraHeritageWalkItinerary(),
    heroImage: '/images/sightseeing/Agra/Mehtab_Bagh.jpg', gallery: CITY_GALLERIES.agra,
  }),
  'agra-photography-tour-with-guide': r('agra-photography-tour-with-guide', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'innova-crysta',
    monuments: ['Sunrise Taj', 'Mehtab Bagh', 'Agra Fort', 'Itimad-ud-Daulah', 'Tajganj alleys', 'Sunset Taj'],
    duration: 'Full Day (12 hrs)', distance: '60 km local',
    vehicleFare: 4000, guideFee: 2000,
    headline: 'Agra Photography Tour Guided',
    intro: 'A photographer\'s day in Agra — sunrise + sunset Taj, alley street-portrait sessions in Tajganj, golden-hour Mehtab Bagh. Innova Crysta + photography-savvy guide who knows the angles.',
    itinerary: agraPhotoTourItinerary(),
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'agra-shopping-tour-with-guide': r('agra-shopping-tour-with-guide', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'ertiga',
    monuments: ['Sadar Bazaar', 'Marble Inlay Workshops', 'Kinari Bazaar', 'Petha Factory'],
    duration: 'Full Day (8 hrs)', distance: '30 km local',
    vehicleFare: 2400, guideFee: 1500,
    headline: 'Agra Shopping Tour with Guide',
    intro: 'A full shopping day in Agra with a guide who negotiates in Hindi for you. Marble inlay (pietra dura), leather, embroidery, juttis, brass, and Panchhi Petha. Six-seater Ertiga for shopping bags.',
    itinerary: agraShoppingItinerary(),
    heroImage: '/images/sightseeing/Agra/Jama_Masjid.jpg', gallery: CITY_GALLERIES.agra,
  }),
  'agra-food-walk-with-guide': r('agra-food-walk-with-guide', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'swift-dzire',
    monuments: ['Deviram Sweets (Bedai)', 'Panchhi Petha', 'Pinch of Spice', 'Chaat Street', 'Esphahan'],
    duration: 'Full Day (12 hrs)', distance: '25 km local',
    vehicleFare: 2000, guideFee: 1500,
    headline: 'Agra Food Walk with Guide',
    intro: 'A full Agra food trail with a foodie guide — Bedai breakfast, Petha factory tour, Mughlai lunch, chaat street walk, tandoor dinner. Driver shuttles between stops; food is paid separately at each.',
    itinerary: agraFoodItinerary(),
    heroImage: '/images/sightseeing/Agra/Diwan_i_kHAS.jpg', gallery: CITY_GALLERIES.agra,
  }),
  'agra-mehtab-bagh-itmad-tour-with-guide': r('agra-mehtab-bagh-itmad-tour-with-guide', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'swift-dzire',
    monuments: ['Itimad-ud-Daulah (Baby Taj)', 'Mehtab Bagh'],
    duration: 'Half Day (5 hrs)', distance: '25 km local',
    vehicleFare: 1500, guideFee: 1200,
    headline: 'Mehtab Bagh & Itimad-ud-Daulah with Guide',
    intro: 'A focused half-day on the two "secondary" Agra monuments that are arguably more beautiful than the Taj at sunset. Pietra dura close-up at Baby Taj, Taj reflection from across the Yamuna.',
    itinerary: mehtabItmadItinerary(),
    heroImage: '/images/sightseeing/Agra/Mehtab_Bagh.jpg', gallery: CITY_GALLERIES.agra,
  }),
  'agra-2-day-tour-with-guide-tempo': r('agra-2-day-tour-with-guide-tempo', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'maharaja-tempo',
    monuments: ['Taj Mahal (sunrise)', 'Agra Fort', 'Itimad-ud-Daulah', 'Mehtab Bagh', 'Fatehpur Sikri'],
    duration: '2 Days / 1 Night', distance: '180 km',
    vehicleFare: 12000, guideFee: 3000,
    headline: 'Agra 2 Day Tour Tempo with Guide',
    intro: 'Two days, two cars\' worth of Mughal architecture. Day 1 — Agra Fort + Mehtab Bagh + Baby Taj. Day 2 — Sunrise Taj + Fatehpur Sikri. Maharaja Tempo + senior 2-day licensed guide. Hotel optional add-on.',
    itinerary: delhiAgra2DayItinerary(),
    heroImage: CITY_HEROES.agra, gallery: CITY_GALLERIES.agra,
  }),
  'agra-family-tour-with-guide-tempo': r('agra-family-tour-with-guide-tempo', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'force-urbania',
    monuments: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh', 'Itimad-ud-Daulah'],
    duration: 'Full Day (10 hrs)', distance: '50 km local',
    vehicleFare: 5500, guideFee: 1500,
    headline: 'Agra Family Tour with Guide — Force Urbania',
    intro: 'Multi-generational family tour in a Force Urbania luxury tempo — captain seats, ample legroom, AC, charging points. Senior + stroller-friendly route, kid-friendly guide narration.',
    itinerary: familyTempoItinerary('Agra'),
    heroImage: CITY_HEROES.agra, gallery: CITY_GALLERIES.agra,
  }),
  'taj-mahal-private-tour-with-guide-luxury-car': r('taj-mahal-private-tour-with-guide-luxury-car', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'luxury-car-bmw-audi',
    monuments: ['Taj Mahal (VIP entry)', 'Agra Fort (VIP)', 'Marble Inlay Workshop'],
    duration: 'Full Day (10 hrs)', distance: '40 km local',
    vehicleFare: 18000, guideFee: 3000,
    headline: 'Taj Mahal Private Tour Luxury Car with Guide',
    intro: 'Premium private Taj experience in a chauffeur-driven BMW / Audi sedan with a senior Ministry-licensed guide. Skip-line VIP entries, Oberoi Amarvilas brunch (paid separately), private artisan visits.',
    itinerary: luxuryTajItinerary(),
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'agra-corporate-group-tour-with-guide-bus': r('agra-corporate-group-tour-with-guide-bus', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'volvo-bus-45',
    monuments: ['Taj Mahal', 'Agra Fort', 'Marble Inlay Workshop'],
    duration: 'Full Day (10 hrs)', distance: '50 km local',
    vehicleFare: 14000, guideFee: 2500,
    headline: 'Agra Corporate Group Tour with Guide Bus',
    intro: '45-seater Volvo bus + corporate-experienced senior guide for incentive trips, MICE groups, and conference excursions. Includes group lunch coordination and group-photo logistics.',
    itinerary: corporateGroupItinerary('Agra'),
    heroImage: CITY_HEROES.agra, gallery: CITY_GALLERIES.agra,
  }),
  'agra-school-trip-with-guide-bus': r('agra-school-trip-with-guide-bus', {
    city: 'Agra', cityKey: 'agra', group: 'A', cluster: 'A1', vehicleSlug: 'mini-bus-20',
    monuments: ['Taj Mahal', 'Agra Fort', 'Itimad-ud-Daulah'],
    duration: 'Full Day (10 hrs)', distance: '50 km local',
    vehicleFare: 8000, guideFee: 2000,
    headline: 'Agra School Trip with Guide Bus',
    intro: '20-seater AC mini-bus with a teacher-liaison licensed guide for school history excursions. Curriculum-aligned narration, worksheet activity, child-friendly meal stops.',
    itinerary: schoolTripItinerary('Agra'),
    heroImage: CITY_HEROES.agra, gallery: CITY_GALLERIES.agra,
  }),
};

// ==================== CLUSTER A2 — DELHI + AGRA TAJ MAHAL COMBINED (6) ====================
const A2 = {
  'taj-mahal-tour-from-delhi-with-guide-sedan': r('taj-mahal-tour-from-delhi-with-guide-sedan', {
    city: 'Delhi → Agra', cityKey: 'delhi', group: 'A', cluster: 'A2', vehicleSlug: 'swift-dzire',
    monuments: ['Taj Mahal', 'Agra Fort', 'Itimad-ud-Daulah / Mehtab Bagh'],
    duration: 'Full Day (15 hrs)', distance: '460 km round trip',
    vehicleFare: 5500, guideFee: 1500,
    headline: 'Taj Mahal Tour from Delhi with Guide — Sedan',
    intro: 'Same-day Taj Mahal tour from Delhi in a Swift Dzire sedan. Yamuna Expressway both ways, English-speaking Ministry-licensed guide joins in Agra. Pickup at Delhi hotel/airport at 06:00 AM, drop by 10:00 PM.',
    itinerary: delhiToAgraItinerary(),
    pickupCity: 'Delhi',
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'taj-mahal-tour-from-delhi-with-guide-tempo': r('taj-mahal-tour-from-delhi-with-guide-tempo', {
    city: 'Delhi → Agra', cityKey: 'delhi', group: 'A', cluster: 'A2', vehicleSlug: 'maharaja-tempo',
    monuments: ['Taj Mahal', 'Agra Fort'],
    duration: 'Full Day (15 hrs)', distance: '460 km round trip',
    vehicleFare: 11500, guideFee: 1500,
    headline: 'Delhi to Agra Taj Tempo with Guide',
    intro: 'Same-day Taj Mahal tour from Delhi for groups of 12-17 in a Maharaja Tempo Traveller. AC, pushback recliners, music, charging. Licensed guide joins in Agra.',
    itinerary: delhiToAgraItinerary(),
    pickupCity: 'Delhi',
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'taj-mahal-tour-from-delhi-with-guide-bus': r('taj-mahal-tour-from-delhi-with-guide-bus', {
    city: 'Delhi → Agra', cityKey: 'delhi', group: 'A', cluster: 'A2', vehicleSlug: 'volvo-bus-45',
    monuments: ['Taj Mahal', 'Agra Fort'],
    duration: 'Full Day (15 hrs)', distance: '460 km round trip',
    vehicleFare: 26000, guideFee: 2000,
    headline: 'Delhi to Agra Taj Bus with Guide',
    intro: 'Volvo 45-seater AC coach + senior licensed guide for large-group same-day Taj tours from Delhi. MICE / college / incentive group friendly.',
    itinerary: delhiToAgraItinerary(),
    pickupCity: 'Delhi',
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'same-day-taj-mahal-tour-from-delhi-with-guide': r('same-day-taj-mahal-tour-from-delhi-with-guide', {
    city: 'Delhi → Agra', cityKey: 'delhi', group: 'A', cluster: 'A2', vehicleSlug: 'swift-dzire',
    monuments: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh'],
    duration: 'Full Day (15 hrs)', distance: '460 km round trip',
    vehicleFare: 5500, guideFee: 1500,
    headline: 'Same Day Taj Mahal from Delhi with Guide',
    intro: 'The classic same-day Taj from Delhi: pickup 06:00 AM, Agra by 09:30, Taj + Fort + lunch + Baby Taj/Mehtab Bagh, drop at Delhi 10:00 PM. Sedan + Ministry-licensed guide.',
    itinerary: delhiToAgraItinerary(),
    pickupCity: 'Delhi',
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'sunrise-taj-mahal-from-delhi-with-guide': r('sunrise-taj-mahal-from-delhi-with-guide', {
    city: 'Delhi → Agra', cityKey: 'delhi', group: 'A', cluster: 'A2', vehicleSlug: 'innova-crysta',
    monuments: ['Sunrise Taj Mahal', 'Agra Fort', 'Itimad-ud-Daulah'],
    duration: 'Full Day (16 hrs)', distance: '460 km round trip',
    vehicleFare: 7000, guideFee: 2000,
    headline: 'Sunrise Taj from Delhi with Guide',
    intro: 'Pre-dawn pickup from Delhi (02:30 AM), Yamuna Expressway, first-batch Taj sunrise entry in Agra. Innova Crysta — better suited to the early-morning long drive than a sedan.',
    itinerary: delhiToAgraItinerary(),
    pickupCity: 'Delhi',
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
  'delhi-agra-2-day-tour-with-guide': r('delhi-agra-2-day-tour-with-guide', {
    city: 'Delhi → Agra', cityKey: 'delhi', group: 'A', cluster: 'A2', vehicleSlug: 'ertiga',
    monuments: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Itimad-ud-Daulah', 'Mehtab Bagh'],
    duration: '2 Days / 1 Night', distance: '550 km',
    vehicleFare: 9500, guideFee: 3000,
    headline: 'Delhi Agra 2 Day Tour with Guide',
    intro: 'Two unhurried days from Delhi: Day 1 sees Agra Fort + Mehtab Bagh sunset; Day 2 starts with sunrise Taj, then Fatehpur Sikri, lunch, Delhi drop. Ertiga MPV + senior guide.',
    itinerary: delhiAgra2DayItinerary(),
    pickupCity: 'Delhi',
    heroImage: TAJ_HERO, gallery: CITY_GALLERIES.agra,
  }),
};

// ==================== CLUSTER A3 — DELHI (7) ====================
const A3 = {
  'delhi-full-day-tour-with-guide-sedan': r('delhi-full-day-tour-with-guide-sedan', {
    city: 'Delhi', cityKey: 'delhi', group: 'A', cluster: 'A3', vehicleSlug: 'swift-dzire',
    monuments: ['Red Fort', 'Jama Masjid', 'India Gate', 'Qutub Minar', 'Lotus Temple', 'Humayun\'s Tomb'],
    duration: 'Full Day (10 hrs)', distance: '70 km local',
    vehicleFare: 2800, guideFee: 1500,
    headline: 'Delhi City Tour with Guide — Sedan',
    intro: 'A full-day Old + New Delhi private tour in a Swift Dzire sedan with a Ministry-licensed guide. Six headline monuments, three UNESCO sites, one efficient day. Hotel pickup included.',
    itinerary: delhiCityItinerary(),
    heroImage: CITY_HEROES.delhi, gallery: CITY_GALLERIES.delhi,
  }),
  'delhi-full-day-tour-with-guide-tempo': r('delhi-full-day-tour-with-guide-tempo', {
    city: 'Delhi', cityKey: 'delhi', group: 'A', cluster: 'A3', vehicleSlug: 'maharaja-tempo',
    monuments: ['Red Fort', 'Jama Masjid', 'India Gate', 'Qutub Minar', 'Humayun\'s Tomb'],
    duration: 'Full Day (10 hrs)', distance: '80 km local',
    vehicleFare: 6500, guideFee: 1500,
    headline: 'Delhi Sightseeing Tempo with Guide',
    intro: 'Group-of-15 Delhi sightseeing tour in a Maharaja Tempo with a Ministry-licensed guide. Best-suited to Old + New Delhi together — fits friend groups and joint family travel.',
    itinerary: delhiSightseeingTempoItinerary(),
    heroImage: CITY_HEROES.delhi, gallery: CITY_GALLERIES.delhi,
  }),
  'delhi-full-day-tour-with-guide-bus': r('delhi-full-day-tour-with-guide-bus', {
    city: 'Delhi', cityKey: 'delhi', group: 'A', cluster: 'A3', vehicleSlug: 'volvo-bus-45',
    monuments: ['Red Fort', 'India Gate', 'Qutub Minar', 'Humayun\'s Tomb'],
    duration: 'Full Day (10 hrs)', distance: '80 km local',
    vehicleFare: 15000, guideFee: 2000,
    headline: 'Delhi Tour Bus with Guide',
    intro: 'Volvo 45-seater AC bus + senior licensed guide for college groups, MICE delegations and conference excursions in Delhi.',
    itinerary: delhiSightseeingTempoItinerary(),
    heroImage: CITY_HEROES.delhi, gallery: CITY_GALLERIES.delhi,
  }),
  'old-delhi-heritage-walk-with-guide': r('old-delhi-heritage-walk-with-guide', {
    city: 'Delhi', cityKey: 'delhi', group: 'A', cluster: 'A3', vehicleSlug: 'swift-dzire',
    monuments: ['Jama Masjid', 'Chandni Chowk', 'Khari Baoli (spice market)', 'Red Fort outer walls'],
    duration: 'Half Day (5 hrs)', distance: '15 km local',
    vehicleFare: 1500, guideFee: 1200,
    headline: 'Old Delhi Heritage Walk with Guide',
    intro: 'A walking immersion in 17th-century Old Delhi: Mughal mosques, silver lanes, paranthe-wali galis, and Asia\'s largest spice market. Driver shuttles to start point and waits for pickup.',
    itinerary: oldDelhiHeritageItinerary(),
    heroImage: CITY_HEROES.delhi, gallery: CITY_GALLERIES.delhi,
  }),
  'delhi-spiritual-temple-tour-with-guide': r('delhi-spiritual-temple-tour-with-guide', {
    city: 'Delhi', cityKey: 'delhi', group: 'A', cluster: 'A3', vehicleSlug: 'ertiga',
    monuments: ['Akshardham', 'ISKCON', 'Lotus Temple', 'Birla Mandir / Chhatarpur'],
    duration: 'Full Day (10 hrs)', distance: '80 km local',
    vehicleFare: 3000, guideFee: 1500,
    headline: 'Delhi Temple Tour with Guide',
    intro: 'A full-day inter-faith temple circuit in Delhi: modern Akshardham, Krishna ISKCON, Bahai Lotus, classic Birla / Chhatarpur. Six-seater Ertiga + comparative-religion-savvy guide.',
    itinerary: delhiTempleItinerary(),
    heroImage: '/images/sightseeing/Delhi/Akshardham_Temple.jpg', gallery: CITY_GALLERIES.delhi,
  }),
  'delhi-corporate-group-tour-with-guide-bus': r('delhi-corporate-group-tour-with-guide-bus', {
    city: 'Delhi', cityKey: 'delhi', group: 'A', cluster: 'A3', vehicleSlug: 'volvo-bus-45',
    monuments: ['India Gate', 'Qutub Minar', 'Lotus Temple', 'Hauz Khas village'],
    duration: 'Full Day (10 hrs)', distance: '80 km local',
    vehicleFare: 15000, guideFee: 2500,
    headline: 'Delhi Corporate Tour Bus with Guide',
    intro: 'Volvo 45-seater AC coach + corporate-experienced senior guide for incentive group sightseeing, conference excursions and team-building day-outs in Delhi.',
    itinerary: corporateGroupItinerary('Delhi'),
    heroImage: CITY_HEROES.delhi, gallery: CITY_GALLERIES.delhi,
  }),
  'delhi-school-trip-with-guide-bus': r('delhi-school-trip-with-guide-bus', {
    city: 'Delhi', cityKey: 'delhi', group: 'A', cluster: 'A3', vehicleSlug: 'mini-bus-20',
    monuments: ['Red Fort', 'India Gate', 'Qutub Minar', 'National Science Centre'],
    duration: 'Full Day (10 hrs)', distance: '90 km local',
    vehicleFare: 9000, guideFee: 2000,
    headline: 'Delhi School Trip with Guide Bus',
    intro: '20-seater AC mini-bus with a teacher-liaison licensed guide for Delhi school excursions. Curriculum-aligned narration of Mughal + colonial + modern Delhi history.',
    itinerary: schoolTripItinerary('Delhi'),
    heroImage: CITY_HEROES.delhi, gallery: CITY_GALLERIES.delhi,
  }),
};

// ==================== CLUSTER A4 — JAIPUR (6) ====================
const A4 = {
  'jaipur-full-day-tour-with-guide-sedan': r('jaipur-full-day-tour-with-guide-sedan', {
    city: 'Jaipur', cityKey: 'jaipur', group: 'A', cluster: 'A4', vehicleSlug: 'swift-dzire',
    monuments: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Jantar Mantar', 'Jal Mahal'],
    duration: 'Full Day (10 hrs)', distance: '60 km local',
    vehicleFare: 2800, guideFee: 1500,
    headline: 'Jaipur City Tour with Guide — Sedan',
    intro: 'A full-day Pink City private tour in a Swift Dzire sedan with a Ministry-licensed Jaipur guide. UNESCO Amber Fort, City Palace, Jantar Mantar, the iconic Hawa Mahal facade. Hotel pickup included.',
    itinerary: jaipurCityItinerary(),
    heroImage: CITY_HEROES.jaipur, gallery: CITY_GALLERIES.jaipur,
  }),
  'jaipur-full-day-tour-with-guide-tempo': r('jaipur-full-day-tour-with-guide-tempo', {
    city: 'Jaipur', cityKey: 'jaipur', group: 'A', cluster: 'A4', vehicleSlug: 'maharaja-tempo',
    monuments: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Jantar Mantar', 'Jal Mahal', 'Nahargarh Fort'],
    duration: 'Full Day (10 hrs)', distance: '70 km local',
    vehicleFare: 6500, guideFee: 1500,
    headline: 'Jaipur Sightseeing Tempo with Guide',
    intro: 'Group-of-15 Pink City tour in a Maharaja Tempo Traveller with a senior licensed guide. Adds Nahargarh Fort sunset to the standard Jaipur circuit.',
    itinerary: jaipurFullDayTempoItinerary(),
    heroImage: CITY_HEROES.jaipur, gallery: CITY_GALLERIES.jaipur,
  }),
  'jaipur-full-day-tour-with-guide-bus': r('jaipur-full-day-tour-with-guide-bus', {
    city: 'Jaipur', cityKey: 'jaipur', group: 'A', cluster: 'A4', vehicleSlug: 'volvo-bus-45',
    monuments: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Jantar Mantar'],
    duration: 'Full Day (10 hrs)', distance: '70 km local',
    vehicleFare: 15000, guideFee: 2000,
    headline: 'Jaipur Tour Bus with Guide',
    intro: 'Volvo 45-seater AC bus + senior licensed Jaipur guide for MICE / incentive groups visiting the Pink City.',
    itinerary: jaipurFullDayTempoItinerary(),
    heroImage: CITY_HEROES.jaipur, gallery: CITY_GALLERIES.jaipur,
  }),
  'amber-fort-jaipur-tour-with-guide': r('amber-fort-jaipur-tour-with-guide', {
    city: 'Jaipur', cityKey: 'jaipur', group: 'A', cluster: 'A4', vehicleSlug: 'swift-dzire',
    monuments: ['Amber Fort', 'Sheesh Mahal', 'Panna Meena Stepwell', 'Anokhi Museum'],
    duration: 'Half Day (5 hrs)', distance: '30 km local',
    vehicleFare: 1500, guideFee: 1200,
    headline: 'Amber Fort Tour with Guide',
    intro: 'A focused half-day at UNESCO Amber Fort with a licensed guide. Sheesh Mahal mirror palace, Ganesh Pol, Diwan-e-Aam, plus the Panna Meena stepwell five minutes away.',
    itinerary: amberFortItinerary(),
    heroImage: '/images/sightseeing/Jaipur/amber_fort.jpg', gallery: CITY_GALLERIES.jaipur,
  }),
  'jaipur-2-day-tour-with-guide-tempo': r('jaipur-2-day-tour-with-guide-tempo', {
    city: 'Jaipur', cityKey: 'jaipur', group: 'A', cluster: 'A4', vehicleSlug: 'maharaja-tempo',
    monuments: ['Amber Fort', 'City Palace', 'Hawa Mahal', 'Jantar Mantar', 'Nahargarh Fort', 'Jaigarh Fort', 'Albert Hall'],
    duration: '2 Days / 1 Night', distance: '120 km',
    vehicleFare: 13000, guideFee: 3000,
    headline: 'Jaipur 2 Day Tour Tempo with Guide',
    intro: 'Two unhurried days in the Pink City — Day 1 city circuit, Day 2 the upper forts (Nahargarh, Jaigarh) + Albert Hall + bazaar shopping. Maharaja Tempo + senior 2-day licensed guide.',
    itinerary: jaipur2DayItinerary(),
    heroImage: CITY_HEROES.jaipur, gallery: CITY_GALLERIES.jaipur,
  }),
  'jaipur-shopping-heritage-tour-with-guide': r('jaipur-shopping-heritage-tour-with-guide', {
    city: 'Jaipur', cityKey: 'jaipur', group: 'A', cluster: 'A4', vehicleSlug: 'ertiga',
    monuments: ['Johari Bazaar', 'Bapu Bazaar', 'Anokhi / Soma Studios', 'Tripolia / Chandpole'],
    duration: 'Full Day (8 hrs)', distance: '30 km local',
    vehicleFare: 2400, guideFee: 1500,
    headline: 'Jaipur Shopping Tour with Guide',
    intro: 'A full Pink City shopping day with a guide who negotiates in Hindi for you. Gemstones at Johari, mojaris at Bapu Bazaar, block-print textiles at Anokhi/Soma. Six-seater Ertiga for shopping bags.',
    itinerary: jaipurShoppingItinerary(),
    heroImage: '/images/sightseeing/Jaipur/Johari_bazar.jpg', gallery: CITY_GALLERIES.jaipur,
  }),
};

// ==================== CLUSTER A5 — GOLDEN TRIANGLE (1) ====================
const A5 = {
  'golden-triangle-tour-with-guide': r('golden-triangle-tour-with-guide', {
    city: 'Delhi → Agra → Jaipur', cityKey: 'goldentriangle', group: 'A', cluster: 'A5', vehicleSlug: 'maharaja-tempo',
    monuments: ['Delhi (Red Fort, Qutub, India Gate)', 'Agra (Taj, Fort)', 'Fatehpur Sikri', 'Jaipur (Amber, City Palace, Hawa Mahal)'],
    duration: '5 Days / 4 Nights', distance: '740 km',
    vehicleFare: 28000, guideFee: 7500,
    headline: 'Golden Triangle Tour with Guide',
    intro: 'India\'s most-loved 5-day itinerary — Delhi, Agra, Fatehpur Sikri, Jaipur — with a Ministry-licensed multilingual guide and a Maharaja Tempo Traveller. Hotels not included; we book or you book.',
    itinerary: goldenTriangleItinerary(),
    heroImage: CITY_HEROES.goldentriangle, gallery: CITY_GALLERIES.goldentriangle,
  }),
};

// ==================== GROUP B — 10 LANGUAGE LANDINGS ====================
function langLandingRecord(slug, langKey, headlineExtra) {
  const lang = GUIDE_LANGUAGES[langKey];
  return r(slug, {
    city: 'India',
    cityKey: 'goldentriangle',
    group: 'B',
    cluster: 'B',
    vehicleSlug: 'innova-crysta',
    monuments: ['Taj Mahal', 'Red Fort', 'Amber Fort', 'Hawa Mahal', 'Qutub Minar'],
    duration: 'Per-tour booking',
    distance: 'India-wide service',
    vehicleFare: 0,
    guideFee: lang.dailyFee,
    headline: `${lang.name}-Speaking Tour Guide in India`,
    intro: `Hire a Ministry-of-Tourism licensed ${lang.name}-speaking tour guide (${lang.nativeName}) anywhere in North India — Delhi, Agra, Jaipur, Golden Triangle. Day rate ₹${lang.dailyFee.toLocaleString('en-IN')}. ${headlineExtra}`,
    itinerary: tajItinerary(),
    heroImage: '/images/sightseeing/Agra/Taj_mahal.jpg',
    gallery: CITY_GALLERIES.goldentriangle,
    guideLanguage: lang.name,
    languageNative: lang.nativeName,
    includes: [
      `Ministry-of-Tourism licensed ${lang.name}-speaking tour guide`,
      'Photo of guide license sent to you on confirmation',
      'Per-day rate is fixed; no per-language surcharge after booking',
      'Cancellation up to 48 hrs before tour — full refund',
    ],
    excludes: [
      'Vehicle (book separately or as a bundle)',
      'Monument entries, meals, tips',
    ],
  });
}

const B = {
  'english-speaking-tour-guide':    langLandingRecord('english-speaking-tour-guide',    'english',    'Most widely available, daily rate ₹1,500.'),
  'hindi-speaking-tour-guide':      langLandingRecord('hindi-speaking-tour-guide',      'hindi',      'Native-speaker guides, ideal for domestic travellers and NRIs.'),
  'french-speaking-tour-guide':     langLandingRecord('french-speaking-tour-guide',     'french',     'Guides francophones licenciés — guide francophone Inde.'),
  'german-speaking-tour-guide':     langLandingRecord('german-speaking-tour-guide',     'german',     'Deutschsprachige, lizenzierte Reiseführer — Indien.'),
  'spanish-speaking-tour-guide':    langLandingRecord('spanish-speaking-tour-guide',    'spanish',    'Guías licenciados en español — India del Norte.'),
  'italian-speaking-tour-guide':    langLandingRecord('italian-speaking-tour-guide',    'italian',    'Guide italofone licenziate — India del Nord.'),
  'japanese-speaking-tour-guide':   langLandingRecord('japanese-speaking-tour-guide',   'japanese',   '日本語ガイド — 北インド (タージマハル・デリー・ジャイプール).'),
  'russian-speaking-tour-guide':    langLandingRecord('russian-speaking-tour-guide',    'russian',    'Русскоговорящие лицензированные гиды — Северная Индия.'),
  'mandarin-speaking-tour-guide':   langLandingRecord('mandarin-speaking-tour-guide',   'mandarin',   '中文持证导游 — 印度北部 (泰姬陵、德里、斋浦尔).'),
  'portuguese-speaking-tour-guide': langLandingRecord('portuguese-speaking-tour-guide', 'portuguese', 'Guias licenciados em português — Índia do Norte.'),
};

// ==================== GROUP C — 30 PER-TOUR × LANGUAGE DEEP PAGES ====================
function langDeepRecord(slug, basis, langKey) {
  const lang = GUIDE_LANGUAGES[langKey];
  // Replace the standard guide fee with the language-specific daily fee.
  const adjusted = {
    ...basis,
    slug,
    group: 'C',
    cluster: basis.cluster.startsWith('C') ? basis.cluster : `C-${basis.cluster}`,
    guideFee: lang.dailyFee,
    bundledFare: basis.vehicleFare + lang.dailyFee,
    guideLanguage: lang.name,
    languageNative: lang.nativeName,
    headline: `${basis.headline.replace(/with Guide.*$/, '').replace(/—.*$/, '').trim()} with ${lang.name}-Speaking Guide`,
    intro: `${basis.intro.split('.')[0]}. This page is for travellers who want a ${lang.name}-speaking (${lang.nativeName}) Ministry-licensed guide for the tour. Day rate ₹${lang.dailyFee.toLocaleString('en-IN')}. Bundled fare ₹${(basis.vehicleFare + lang.dailyFee).toLocaleString('en-IN')}.`,
  };
  return adjusted;
}

const TAJ_BASIS = A1['taj-mahal-tour-with-guide-sedan'];
const SAMEDAY_BASIS = A2['same-day-taj-mahal-tour-from-delhi-with-guide'];
const GT_BASIS = A5['golden-triangle-tour-with-guide'];

const C = {};
const langKeys = Object.keys(GUIDE_LANGUAGES);

langKeys.forEach((lk) => {
  C[`taj-mahal-tour-with-${lk}-speaking-guide`] = langDeepRecord(`taj-mahal-tour-with-${lk}-speaking-guide`, { ...TAJ_BASIS, cluster: 'C-taj' }, lk);
  C[`same-day-taj-mahal-from-delhi-with-${lk}-speaking-guide`] = langDeepRecord(`same-day-taj-mahal-from-delhi-with-${lk}-speaking-guide`, { ...SAMEDAY_BASIS, cluster: 'C-sameday' }, lk);
  C[`golden-triangle-tour-with-${lk}-speaking-guide`] = langDeepRecord(`golden-triangle-tour-with-${lk}-speaking-guide`, { ...GT_BASIS, cluster: 'C-gt' }, lk);
});

// ==================== AGGREGATE EXPORT ====================
export const toursWithGuideData = {
  ...A1, ...A2, ...A3, ...A4, ...A5,
  ...B,
  ...C,
};

export function getTourBySlug(slug) {
  return toursWithGuideData[slug] || null;
}

export function getAllTourSlugs() {
  return Object.keys(toursWithGuideData);
}

export function getToursByGroup(group) {
  return Object.values(toursWithGuideData).filter(t => t.group === group);
}

export function getToursByCluster(cluster) {
  return Object.values(toursWithGuideData).filter(t => t.cluster === cluster);
}

export function getToursByCity(cityKey) {
  return Object.values(toursWithGuideData).filter(t => t.cityKey === cityKey && t.group === 'A');
}

export function getToursByVehicle(vehicleSlug) {
  return Object.values(toursWithGuideData).filter(t => t.vehicleSlug === vehicleSlug && t.group === 'A');
}

export function getLanguageLandings() {
  return Object.values(toursWithGuideData).filter(t => t.group === 'B');
}

export function getDeepLanguagePages(language) {
  return Object.values(toursWithGuideData).filter(t => t.group === 'C' && t.guideLanguage === language);
}

export const TOUR_COUNT = Object.keys(toursWithGuideData).length;
