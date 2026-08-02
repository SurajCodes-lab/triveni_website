// ============================================================================
// CHAR DHAM TEMPO TRAVELLER — SHARED ENRICHMENT (SEO / AEO / GEO)
// Fact-dense, entity-rich data reused across all chardham tempo route slugs.
// These constants/generators feed both ChardhamTempoClient.js (content depth)
// and the chardham branch of tempo-traveller/[route]/page.js (schema).
// ============================================================================

// Authoritative dham facts — altitudes, deity, river, state. Used for AEO
// entity copy + TouristTrip/Place schema. Verified against Uttarakhand Char
// Dham Devasthanam Board figures.
export const DHAM_FACTS = [
  { name: 'Yamunotri', altitude: '3,293 m', deity: 'Goddess Yamuna', river: 'Yamuna', district: 'Uttarkashi', trek: '6 km from Janki Chatti', note: 'Source of the Yamuna; Surya Kund hot spring where pilgrims cook rice as prasad.' },
  { name: 'Gangotri', altitude: '3,100 m', deity: 'Goddess Ganga', river: 'Bhagirathi (Ganga)', district: 'Uttarkashi', trek: 'Roadhead (motorable)', note: 'Origin of the holy Ganga; the actual glacier source Gaumukh is an 18 km trek further.' },
  { name: 'Kedarnath', altitude: '3,583 m', deity: 'Lord Shiva (Jyotirlinga)', river: 'Mandakini', district: 'Rudraprayag', trek: '16-20 km from Gaurikund', note: 'Highest of the 12 Jyotirlingas; reachable on foot, by pony, palki or helicopter.' },
  { name: 'Badrinath', altitude: '3,300 m', deity: 'Lord Vishnu', river: 'Alaknanda', district: 'Chamoli', trek: 'Roadhead (motorable)', note: 'Abode of Vishnu; Tapt Kund hot spring and Mana, the last Indian village, are nearby.' },
];

// 2026 kapat (temple gate) opening dates — announced for the season. Used for
// "best time / opening dates" fact block + FAQ. (Akshaya Tritiya / Badri muhurat.)
export const OPENING_DATES_2026 = [
  { dham: 'Yamunotri', opens: '21 April 2026 (Akshaya Tritiya)' },
  { dham: 'Gangotri', opens: '21 April 2026 (Akshaya Tritiya)' },
  { dham: 'Kedarnath', opens: '24 April 2026 (approx.)' },
  { dham: 'Badrinath', opens: '26 April 2026 (approx.)' },
];

// Tempo seater comparison — the core decision table for group pilgrims.
// Rates are the per-trip-class guidance used site-wide for chardham charters.
export const SEATER_COMPARISON = [
  { seater: '12 Seater', ideal: 'Small family / 8-10 pilgrims', luggage: '12-14 bags + roof carrier', legroom: 'Generous', bestFor: 'Senior-citizen comfort, fewer co-passengers', perKm: '₹20-22/km' },
  { seater: '16 Seater', ideal: 'Extended family / 12-14 pilgrims', luggage: '16 bags + roof carrier', legroom: 'Comfortable', bestFor: 'Balanced cost vs space', perKm: '₹22-24/km' },
  { seater: '17 Seater', ideal: 'Joint family / 14-15 pilgrims', luggage: '17 bags + roof carrier', legroom: 'Standard', bestFor: 'Most popular — best value per seat', perKm: '₹24-26/km' },
  { seater: '20 Seater', ideal: 'Community group / 16-18 pilgrims', luggage: '20 bags + large carrier', legroom: 'Standard', bestFor: 'Temple committees, neighbour groups', perKm: '₹26-27/km' },
  { seater: '26 Seater', ideal: 'Large mandal / 22-24 pilgrims', luggage: '26 bags + jumbo carrier', legroom: 'Standard', bestFor: 'Lowest per-head cost for big groups', perKm: '₹27-28/km' },
];

// What's included / excluded in a tempo traveller charter (vehicle-only model).
export const CHARTER_INCLUSIONS = [
  'AC tempo traveller with experienced Pahari (hill) driver',
  'Fuel, all toll taxes, parking and state border permits',
  'Driver allowance, night halt and food (bhatta)',
  'Roof carrier for luggage and trekking gear',
  'Pushback recliner seats, music system, charging points',
  'GPS tracking and 24x7 on-trip helpline support',
];
export const CHARTER_EXCLUSIONS = [
  'Hotel / dharamshala accommodation and meals',
  'Temple darshan, VIP pass and pooja charges',
  'Pony, palki, doli or helicopter for Kedarnath/Yamunotri trek',
  'Biometric Char Dham registration (we assist, no fee charged)',
  'Personal expenses, tips and anything not in inclusions',
  'GST as applicable on the final invoice',
];

// Generic fare-breakdown rows (per-trip estimate model) used when a route has
// no custom fareBreakdown. Keeps the AEO fare table populated for every slug.
export function getChardhamFareBreakdown(route) {
  if (route.fareBreakdown) return route.fareBreakdown;
  const base = route.packages?.[0]?.price || '₹70,000';
  return [
    { component: 'Tempo traveller charter (vehicle + driver)', detail: `${route.duration} all-inclusive of fuel, tolls, parking`, amount: `From ${base}` },
    { component: 'Driver bhatta (allowance + night halt)', detail: 'Included in package price', amount: 'Included' },
    { component: 'Toll, parking & green tax', detail: 'Uttarakhand entry + interstate tolls', amount: 'Included' },
    { component: 'Accommodation (per person)', detail: 'Hotel / dharamshala, twin-sharing', amount: '₹800-2,500 / night' },
    { component: 'Meals (per person / day)', detail: 'Veg thali, pilgrim-friendly halts', amount: '₹400-700 / day' },
    { component: 'Kedarnath pony / palki (optional)', detail: 'Per person, return', amount: '₹3,000-12,000' },
    { component: 'Kedarnath helicopter (optional)', detail: 'Per person, one way', amount: '₹7,000-8,500' },
  ];
}

// Road / altitude safety tips — fact-dense AEO copy applicable to every origin.
export const ROAD_ALTITUDE_TIPS = [
  'Acclimatise: spend the first night at Haridwar/Barkot (300-1,200 m) before ascending to 3,000 m+ dhams.',
  'Carry the oxygen cylinder we provide; Kedarnath (3,583 m) and Yamunotri trek can cause mild AMS.',
  'Hill roads have hairpin bends and single-lane stretches — our drivers strictly avoid night driving above Rishikesh.',
  'Pack layered woollens, rain gear and waterproof trekking shoes; mountain weather changes within hours.',
  'Keep Aadhaar for mandatory biometric Char Dham registration at Haridwar, Rishikesh or Sonprayag.',
  'Senior citizens should consult a doctor; pony, palki and helicopter options ease the Kedarnath climb.',
];

// Default seating / luggage guidance for group profiles (senior pilgrims etc.).
export const GROUP_SEATING_GUIDANCE = [
  { profile: 'Family with senior citizens', advice: 'Pick a 12 or 16 seater for extra legroom and fewer co-passengers; request front rows and frequent rest halts. Pony/palki for the Kedarnath trek strongly advised.' },
  { profile: 'Joint family (14-15 pilgrims)', advice: 'The 17 seater offers the best value per seat with a full roof carrier for everyone’s luggage and trek gear.' },
  { profile: 'Temple committee / community mandal', advice: 'A 20 or 26 seater keeps the whole group together in one vehicle, lowering the per-head cost and easing coordination at darshan points.' },
  { profile: 'Couple or small group (4-8)', advice: 'A 12 seater is the smallest tempo; for fewer than 8, an Innova/Crysta SUV may be more economical — ask our team to compare.' },
];

// Why a tempo (vs car / bus) for Char Dham groups — comparison rows for AEO.
export const WHY_TEMPO_ROWS = [
  { factor: 'Group together', tempo: 'Whole family/mandal in one vehicle', car: 'Splits into 2-3 cars', bus: 'Too large for narrow hill roads' },
  { factor: 'Hill manoeuvrability', tempo: 'Handles hairpins & single lanes', car: 'Easy but small capacity', bus: 'Struggles above Sonprayag/Gangotri' },
  { factor: 'Per-head cost', tempo: 'Lowest for 12-24 pilgrims', car: 'Highest per person', bus: 'Cheap but rigid, no flexibility' },
  { factor: 'Luggage + trek gear', tempo: 'Roof carrier for all bags', car: 'Limited boot', bus: 'Under-floor hold (slow access)' },
  { factor: 'Comfort', tempo: 'Pushback recliner seats, AC', car: 'Comfortable', bus: 'Cramped for long mountain days' },
];

// Distance reference from each origin to the dham circuit (round figures, km).
export const ORIGIN_DISTANCES = {
  'Delhi': { toHaridwar: '220 km', circuit: '1,250-1,300 km round trip', toKedarnath: '430 km (to Sonprayag)' },
  'Haridwar': { toHaridwar: '0 km (start point)', circuit: '950-1,000 km round trip', toKedarnath: '230 km (to Sonprayag)' },
  'Dehradun': { toHaridwar: '55 km', circuit: '1,000-1,050 km round trip', toKedarnath: '255 km (to Sonprayag)' },
  'Rishikesh': { toHaridwar: '25 km', circuit: '950-1,000 km round trip', toKedarnath: '210 km (to Sonprayag)' },
};

// Extended FAQ generator — guarantees 10-12 rich Q&A for FAQPage schema on
// every slug, merging any route-specific faqs first.
export function getChardhamExtendedFaqs(route) {
  const origin = route.origin || 'Delhi';
  const startPrice = route.packages?.[0]?.price || '₹70,000';
  const seventeen = route.packages?.find(p => /17/.test(p.vehicle))?.price || '₹85,000';
  const base = Array.isArray(route.faqs) ? route.faqs.slice() : [];
  const generated = [
    { question: `How much does a ${origin} to Char Dham tempo traveller cost in 2026?`, answer: `A ${route.title} tempo charter starts from ${startPrice} for a 12 seater and goes up to the 26 seater Maharaja for the full ${route.duration} circuit. The popular 17 seater is around ${seventeen}. Price covers the vehicle, hill driver, fuel, all tolls, parking and permits; hotels, meals and the Kedarnath pony/helicopter are extra. Call 7668570551 for an exact group quote.` },
    { question: `Which tempo traveller seater is best for Char Dham Yatra?`, answer: `For 8-10 pilgrims choose a 12 seater, for 14-15 the 17 seater gives the best value per seat, and for 22-24 a 26 seater keeps a large mandal together at the lowest per-head cost. All are AC with pushback seats, a roof carrier for luggage and an experienced Pahari driver.` },
    { question: `Is a tempo traveller safe on Char Dham hill roads?`, answer: `Yes. Our tempo travellers are hill-spec, GPS-tracked and driven by experienced Pahari drivers who know every hairpin from Rishikesh to Badrinath. We avoid night driving above the foothills, carry a first-aid kit and oxygen cylinder, and provide 24x7 on-trip support.` },
    { question: `What is the 2026 opening date for the Char Dham temples?`, answer: `Yamunotri and Gangotri open on 21 April 2026 (Akshaya Tritiya), Kedarnath around 24 April and Badrinath around 26 April 2026. The best travel windows are May-June and September-October; July-August see heavy monsoon and landslide risk.` },
    { question: `How many days does the ${route.title} take?`, answer: `This package runs ${route.duration}, covering ${route.destination === 'Chardham Yatra' ? 'all four dhams — Yamunotri, Gangotri, Kedarnath and Badrinath' : route.destination} with comfortable acclimatisation halts so seniors and children travel without strain.` },
    { question: `What is included in the tempo traveller package and what is extra?`, answer: `Included: AC tempo with driver, fuel, tolls, parking, permits, driver allowance, roof carrier, GPS and helpline. Extra: accommodation, meals, temple/pooja charges, Kedarnath pony-palki-helicopter, and biometric registration (we assist free of cost).` },
    { question: `Is Char Dham registration mandatory in 2026?`, answer: `Yes, biometric registration is compulsory for every pilgrim, done at Haridwar, Rishikesh or Sonprayag, or online beforehand. Carry your Aadhaar card. Our team guides you through the process at no extra charge.` },
    { question: `How difficult is the Kedarnath trek and what are the options?`, answer: `Kedarnath is a strenuous 16-20 km trek from Gaurikund to 3,583 m. Pony (₹3,000-4,000), palki/doli (₹8,000-12,000) and helicopter (₹7,000-8,500 one way) options are available; our tempo waits safely at Sonprayag/Gaurikund while you complete the darshan.` },
    { question: `Can senior citizens do the Char Dham Yatra by tempo traveller?`, answer: `Absolutely. Choose a 12 or 16 seater for extra legroom, request frequent halts, and use pony/palki/helicopter for the treks. Our drivers are patient with elderly pilgrims and the vehicle carries an oxygen cylinder for the high-altitude dhams.` },
    { question: `How much luggage can each pilgrim carry?`, answer: `One medium 15-20 kg bag per person fits comfortably, with the roof carrier handling extra luggage and trekking gear. Pack light woollens, rain gear and waterproof shoes — mountain weather is unpredictable even in summer.` },
    { question: `Can I customise the ${route.title} itinerary?`, answer: `Yes. Add Hemkund Sahib, an extra Rishikesh or Badrinath night, a helicopter leg, or combine with a Do Dham/Ek Dham plan. Share your group size and dates on 7668570551 or WhatsApp and we will tailor the route and vehicle.` },
    { question: `How do I book a ${origin} to Char Dham tempo traveller?`, answer: `Call or WhatsApp +91-7668570551 with your travel dates, pilgrim count and pickup point in ${origin}. We confirm the seater, share driver and vehicle details, and most bookings need only a small advance. Early booking is advised for the May-June peak.` },
  ];
  // Merge: route-specific first, then fill from generated, dedupe by question.
  const seen = new Set(base.map(f => (f.question || '').trim().toLowerCase()));
  for (const g of generated) {
    const key = g.question.trim().toLowerCase();
    if (!seen.has(key)) { base.push(g); seen.add(key); }
  }
  return base.slice(0, 12);
}

// Sibling-origin internal links for a given slug (cross-link the four origins).
export function getSiblingChardhamLinks(slug, limit = 4) {
  return chardhamRoutes
    .filter(r => r.slug !== slug)
    .slice(0, limit)
    .map(r => ({ href: `/tempo-traveller/${r.slug}`, anchor: `${r.title} by tempo`, price: r.packages?.[0]?.price }));
}

export const chardhamRoutes = [
    {
        slug: 'delhi-to-chardham-yatra-tempo-traveller',
        title: 'Delhi to Chardham Yatra',
        origin: 'Delhi',
        destination: 'Chardham Yatra',
        duration: '11 Nights / 12 Days',
        type: 'Char',
        description: 'Book Delhi to Chardham Yatra by AC Tempo Traveller 2026. Complete 12-day pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath with experienced hill drivers. Starting from ₹84,000 for groups of 12-26 pilgrims. Includes Ganga Aarti at Haridwar, Mana Village visit, and all darshan assistance.',
        intro: 'Experience the most sacred pilgrimage in Hinduism with our **Delhi to Chardham Yatra Tempo Traveller** service. The Chardham circuit—Yamunotri (source of Yamuna), Gangotri (origin of Ganga), Kedarnath (Jyotirlinga of Lord Shiva), and Badrinath (abode of Lord Vishnu)—is believed to wash away all sins and grant Moksha. Our 12-day package from Delhi covers 1,200+ km through the majestic Garhwal Himalayas with comfortable AC tempo travellers, experienced drivers who know every hairpin turn, and 24/7 on-trip support.',
        whyChoose: [
            { title: 'Spiritual Expertise', desc: 'Drivers experienced with Chardham routes, temple timings, and yatra rituals for 10+ years.' },
            { title: 'Premium Comfort', desc: 'Pushback recliner seats, ample legroom, and AC for comfortable 8-10 hour mountain drives.' },
            { title: 'Safety First', desc: 'GPS-tracked vehicles, daily sanitization, first aid kit, oxygen cylinder, and skilled hill drivers.' },
            { title: '24/7 Support', desc: 'Dedicated helpline monitoring your Yatra. Emergency assistance within 30 minutes.' }
        ],
        packages: [
            { type: 'Standard', vehicle: '12 Seater', price: '₹84,000' },
            { type: 'Deluxe', vehicle: '16 Seater', price: '₹96,000' },
            { type: 'Super Deluxe', vehicle: '17 Seater', price: '₹1,02,000' },
            { type: 'Luxury', vehicle: '20 Seater', price: '₹1,14,000' },
            { type: 'Maharaja', vehicle: '26 Seater', price: '₹1,32,000' }
        ],
        itinerary: [
            { day: 1, title: 'Delhi to Haridwar (220 km)', desc: 'Early morning pickup from Delhi Airport/Station/Home. Drive via Meerut Expressway to Haridwar (5-6 hrs). Evening attend the famous Ganga Aarti at Har Ki Pauri. Overnight in Haridwar.' },
            { day: 2, title: 'Haridwar to Barkot (200 km)', desc: 'After breakfast, drive to Barkot via scenic Mussoorie. Stop at Kempty Falls for refreshments. Reach Barkot by evening. Overnight stay.' },
            { day: 3, title: 'Barkot - Yamunotri - Barkot', desc: 'Drive to Janki Chatti (45 km). Trek 6 km to Yamunotri Dham (ponies/palkis available). Take holy dip in Surya Kund. Darshan at Yamunotri Temple. Return trek and drive back to Barkot.' },
            { day: 4, title: 'Barkot to Uttarkashi (100 km)', desc: 'Morning drive to Uttarkashi via Dharasu. Visit ancient Kashi Vishwanath Temple and Shakti Temple. Overnight in Uttarkashi.' },
            { day: 5, title: 'Uttarkashi - Gangotri - Uttarkashi (200 km)', desc: 'Day excursion to Gangotri Dham. Darshan at Gangotri Temple, origin of River Ganga. Holy bath in Bhagirathi River. Visit Gaumukh view point. Return to Uttarkashi.' },
            { day: 6, title: 'Uttarkashi to Guptkashi (220 km)', desc: 'Long scenic drive through Tehri Dam, Srinagar, Rudraprayag to Guptkashi. Visit Ardhnarishwar Temple. Overnight stay with view of Mandakini river.' },
            { day: 7, title: 'Guptkashi to Kedarnath', desc: 'Drive to Sonprayag (30 km). Trek 20 km or helicopter to Kedarnath (3,583m altitude). Evening Aarti at Kedarnath Temple - one of 12 Jyotirlingas. Overnight at Kedarnath.' },
            { day: 8, title: 'Kedarnath to Guptkashi', desc: 'Early morning darshan at Kedarnath Temple. Visit Adi Shankaracharya Samadhi. Trek down to Gaurikund. Drive back to Guptkashi. Rest and overnight.' },
            { day: 9, title: 'Guptkashi to Badrinath (200 km)', desc: 'Drive via Joshimath and Vishnuprayag to Badrinath. Holy bath at Tapt Kund hot spring. Evening Aarti at Badrinath Temple. Overnight at Badrinath.' },
            { day: 10, title: 'Badrinath to Rudraprayag (160 km)', desc: 'Morning darshan. Visit Mana Village (last Indian village). See Vyas Gufa, Bhim Pul, Saraswati River origin. Drive back to Rudraprayag. Overnight stay.' },
            { day: 11, title: 'Rudraprayag to Haridwar (165 km)', desc: 'Drive back to Haridwar via Devprayag (confluence of Alaknanda-Bhagirathi). Evening free for shopping or Ganga Aarti. Overnight in Haridwar.' },
            { day: 12, title: 'Haridwar to Delhi (220 km)', desc: 'After breakfast, drive to Delhi (5-6 hrs). Drop at Airport/Railway Station/Home. Tour ends with divine blessings.' }
        ],
        features: ['AC & Non-AC Options', 'Pushback Recliner Seats', 'Music System & DVD Player', 'First Aid Kit & Oxygen Cylinder', 'Roof Carrier for Luggage', 'Mobile Charging Points', 'GPS Tracking'],
        faqs: [
            { question: 'What is the best time for Chardham Yatra from Delhi?', answer: 'The Chardham temples open from late April/May to early November. Best months are May-June (before monsoon) and September-October (after monsoon). Avoid July-August due to heavy rainfall and landslides.' },
            { question: 'Is registration required for Chardham Yatra 2026?', answer: 'Yes, biometric registration is mandatory for all pilgrims at Haridwar, Rishikesh, or Sonprayag. Carry Aadhaar card. We assist with registration process.' },
            { question: 'How much luggage can we carry?', answer: 'Recommended 1 medium bag (15-20 kg) per person. Additional luggage can be stored in roof carrier. Pack light woolens, rain gear, and comfortable trekking shoes.' },
            { question: 'Is Kedarnath trek difficult for senior citizens?', answer: 'The 20 km Kedarnath trek is strenuous. Pony (₹3000-4000), Palki (₹8000-12000), or Helicopter (₹7000-8000 one way) options available for seniors.' },
            { question: 'What is included in the tempo traveller package price?', answer: 'Price includes vehicle with driver, fuel, toll taxes, parking charges, driver allowance, and all state permits. Food, accommodation, entry tickets, and helicopter are extra.' },
            { question: 'Can we customize the Chardham Yatra itinerary?', answer: 'Yes, we offer customized packages. Add Hemkund Sahib, Rishikesh stay, or extend Badrinath visit. Contact us for personalized itinerary.' }
        ],
        seoTitle: 'Delhi to Chardham Yatra Tempo Traveller 2026 | 12 Day Package ₹84,000',
        seoDesc: 'Book Delhi to Chardham Yatra by AC Tempo Traveller. 12-day pilgrimage to Yamunotri, Gangotri, Kedarnath, Badrinath. 12-26 seater options. Experienced hill drivers. Call 7668570551.',
        images: {
            hero: '/images/chardham/chardham-yatra-delhi-hero.webp',
            map: '/images/chardham/route-map-delhi.jpg'
        },
        pickupDrop: {
            pickup: ['Delhi Airport', 'New Delhi Railway Station', 'Noida', 'Gurgaon'],
            drop: ['Delhi Airport', 'Railway Station', 'Home Drop']
        }
    },
    {
        slug: 'haridwar-to-chardham-yatra-tempo-traveller',
        title: 'Haridwar to Chardham Yatra',
        origin: 'Haridwar',
        destination: 'Chardham Yatra',
        duration: '9 Nights / 10 Days',
        type: 'Char',
        description: 'Start your Chardham Yatra from the holy city of Haridwar. 10 Days spiritual journey covering all 4 Dhams.',
        intro: 'Begin your sacred journey from the Gateway to Gods, Haridwar. Our **Haridwar to Chardham Yatra Tempo Traveller** service offers a seamless transition from the plains to the mighty Himalayas. Validated for safety and comfort, our fleet is your best companion for this divine expedition.',
        whyChoose: [
            { title: 'Local Expertise', desc: 'Haridwar-based drivers knowing every shortcut and halt.' },
            { title: 'Modern Fleet', desc: 'New model Tempo Travellers for steep terrain.' },
            { title: 'Customizable', desc: 'Tailor your breaks and stops for Ganga snaan.' },
            { title: 'Transparent Pricing', desc: 'No hidden costs for parking or tolls.' }
        ],
        packages: [
            { type: 'Standard', vehicle: '12 Seater', price: '₹70,000' },
            { type: 'Deluxe', vehicle: '16 Seater', price: '₹80,000' },
            { type: 'Super Deluxe', vehicle: '17 Seater', price: '₹85,000' },
            { type: 'Luxury', vehicle: '20 Seater', price: '₹95,000' },
            { type: 'Maharaja', vehicle: '26 Seater', price: '₹1,10,000' }
        ],
        itinerary: [
            { day: 1, title: 'Haridwar to Barkot (200 km)', desc: 'Morning pickup from Haridwar Railway Station or Har Ki Pauri. Scenic drive via Mussoorie and Kempty Falls to Barkot (7-8 hrs). Overnight stay at Barkot, the base for Yamunotri.' },
            { day: 2, title: 'Barkot - Yamunotri - Barkot (90 km)', desc: 'Drive to Janki Chatti (45 km), then trek 6 km to Yamunotri Dham (ponies/palkis available). Holy dip at Surya Kund hot spring and darshan of Goddess Yamuna. Return to Barkot for the night.' },
            { day: 3, title: 'Barkot to Uttarkashi (100 km)', desc: 'Drive to Uttarkashi via Radi Top and Dharasu band. Visit the ancient Kashi Vishwanath Temple. Overnight by the Bhagirathi river.' },
            { day: 4, title: 'Uttarkashi - Gangotri - Uttarkashi (200 km)', desc: 'Day excursion to Gangotri Dham (3,100 m). Darshan at Gangotri Temple, holy bath in the Bhagirathi, and Gaumukh viewpoint. Return to Uttarkashi.' },
            { day: 5, title: 'Uttarkashi to Guptkashi (220 km)', desc: 'Long scenic drive via Tehri Dam, Srinagar and Rudraprayag to Guptkashi. Visit Ardhnarishwar Temple. Overnight near the Mandakini river.' },
            { day: 6, title: 'Guptkashi to Kedarnath', desc: 'Drive to Sonprayag, shared jeep to Gaurikund, then trek 16-18 km (or helicopter) to Kedarnath (3,583 m). Evening aarti at the Jyotirlinga. Overnight at Kedarnath.' },
            { day: 7, title: 'Kedarnath to Guptkashi', desc: 'Early morning darshan and Adi Shankaracharya Samadhi. Trek down to Gaurikund and drive back to Guptkashi for rest and overnight.' },
            { day: 8, title: 'Guptkashi to Badrinath (200 km)', desc: 'Drive via Joshimath and Vishnuprayag to Badrinath (3,300 m). Holy bath at Tapt Kund hot spring. Evening aarti at Badrinath Temple. Overnight stay.' },
            { day: 9, title: 'Badrinath to Rudraprayag (160 km)', desc: 'Morning darshan, then visit Mana — the last Indian village — with Vyas Gufa, Bhim Pul and Saraswati origin. Drive to Rudraprayag for the night.' },
            { day: 10, title: 'Rudraprayag to Haridwar (165 km)', desc: 'Drive back via Devprayag (Alaknanda-Bhagirathi confluence) to Haridwar. Drop at the Railway Station or Bus Stand with divine blessings.' }
        ],
        features: ['Hill-Spec Tempo Travellers', 'Oxygen Cylinder Onboard', 'Pushback Recliner Seats', 'Roof Luggage Carrier', 'Mobile Charging Points', 'First Aid Kit', 'GPS Tracking', 'Experienced Pahari Driver'],
        faqs: [
            { question: 'Can we start the Chardham Yatra from Haridwar?', answer: 'Yes — Haridwar is the traditional starting point of the Char Dham Yatra. Our tempo travellers pick up from Haridwar Railway Station, Har Ki Pauri or your hotel, saving you the 220 km Delhi-Haridwar leg.' },
            { question: 'How many days does the Chardham Yatra from Haridwar take?', answer: 'Ideally 10 days (9 nights) cover all four dhams comfortably from Haridwar, with acclimatisation halts so seniors and children travel without strain. A faster 8-9 day version is possible if you take the Kedarnath helicopter.' },
            { question: 'What is the fare for a Haridwar to Chardham tempo traveller?', answer: 'A Haridwar to Char Dham tempo charter starts at ₹70,000 for a 12 seater, around ₹85,000 for the popular 17 seater, and ₹1,10,000 for the 26 seater Maharaja — all-inclusive of vehicle, hill driver, fuel, tolls and parking.' }
        ],
        seoTitle: 'Haridwar to Chardham Yatra Tempo Traveller Rental | Best Rates 2026',
        seoDesc: 'Hire Tempo Traveller for Chardham Yatra from Haridwar. 10 Days Package. 12/17/26 Seater options. Local experienced drivers. Book now!',
        images: {
            hero: '/images/chardham/chardham-haridwar-hero.webp',
            map: '/images/chardham/route-map-haridwar.jpg'
        },
        pickupDrop: {
            pickup: ['Haridwar Railway Station', 'Har Ki Pauri', 'Hotel Pickup'],
            drop: ['Haridwar Railway Station', 'Bus Stand']
        }
    },
    {
        slug: 'dehradun-to-chardham-yatra-tempo-traveller',
        title: 'Dehradun to Chardham Yatra',
        origin: 'Dehradun',
        destination: 'Chardham Yatra',
        duration: '10 Nights / 11 Days',
        type: 'Char',
        description: 'Direct Chardham Yatra from Dehradun Airport or City. Convenient for flight travelers. 11 Days comprehensive tour.',
        intro: 'Arriving by air? Our **Dehradun to Chardham Yatra Tempo Traveller** service is the perfect choice. Skip the drive from Delhi and start fresh from the Himalayan foothills. We provide prompt airport pickups and comfortable vehicles for the winding roads ahead.',
        whyChoose: [
            { title: 'Airport Pickup', desc: 'Direct service from Jolly Grant Airport.' },
            { title: 'Comfort Drive', desc: 'Less travel fatigue compared to Delhi start.' },
            { title: 'Verified Drivers', desc: 'Police verified, non-alcoholic drivers.' }
        ],
        packages: [
            { type: 'Standard', vehicle: '12 Seater', price: '₹77,000' },
            { type: 'Deluxe', vehicle: '16 Seater', price: '₹88,000' },
            { type: 'Super Deluxe', vehicle: '17 Seater', price: '₹93,500' },
            { type: 'Luxury', vehicle: '20 Seater', price: '₹1,04,500' },
            { type: 'Maharaja', vehicle: '26 Seater', price: '₹1,21,000' }
        ],
        itinerary: [
            { day: 1, title: 'Dehradun to Barkot (145 km)', desc: 'Pickup from Jolly Grant Airport or Dehradun city. Drive via Mussoorie and Kempty Falls to Barkot (6-7 hrs). Overnight at Barkot, the base for Yamunotri.' },
            { day: 2, title: 'Barkot - Yamunotri - Barkot (90 km)', desc: 'Drive to Janki Chatti and trek 6 km to Yamunotri Dham. Holy dip at Surya Kund and darshan of Goddess Yamuna. Return to Barkot.' },
            { day: 3, title: 'Barkot to Uttarkashi (100 km)', desc: 'Drive to Uttarkashi via Radi Top. Visit Kashi Vishwanath Temple. Overnight by the Bhagirathi.' },
            { day: 4, title: 'Uttarkashi - Gangotri - Uttarkashi (200 km)', desc: 'Day trip to Gangotri Dham. Darshan and holy bath in the Bhagirathi. Return to Uttarkashi for the night.' },
            { day: 5, title: 'Uttarkashi to Guptkashi (220 km)', desc: 'Scenic drive via Tehri Dam, Srinagar and Rudraprayag to Guptkashi. Overnight near the Mandakini river.' },
            { day: 6, title: 'Guptkashi to Kedarnath', desc: 'Drive to Sonprayag, shared jeep to Gaurikund, then trek 16-18 km (or helicopter) to Kedarnath. Evening aarti and overnight at the Jyotirlinga.' },
            { day: 7, title: 'Kedarnath to Guptkashi', desc: 'Morning darshan, trek down to Gaurikund and drive back to Guptkashi for rest and overnight.' },
            { day: 8, title: 'Guptkashi to Badrinath (200 km)', desc: 'Drive via Joshimath to Badrinath. Holy bath at Tapt Kund and evening aarti at Badrinath Temple. Overnight stay.' },
            { day: 9, title: 'Badrinath to Pipalkoti (75 km)', desc: 'Morning darshan and Mana Village visit. Drive to Pipalkoti for the night, breaking the return journey comfortably.' },
            { day: 10, title: 'Pipalkoti to Rishikesh (220 km)', desc: 'Drive via Rudraprayag and Devprayag to Rishikesh. Optional evening Ganga aarti at Triveni Ghat. Overnight stay.' },
            { day: 11, title: 'Rishikesh to Dehradun (45 km)', desc: 'Short morning drive and drop at Dehradun Airport or city. Tour ends with divine blessings.' }
        ],
        features: ['Jolly Grant Airport Pickup', 'AC Tempo Traveller', 'Pushback Recliner Seats', 'Ample Luggage Space', 'Oxygen Cylinder Onboard', 'GPS Tracking', 'Experienced Hill Driver'],
        faqs: [
            { question: 'Is Dehradun a good starting point for the Chardham Yatra?', answer: 'Yes — Dehradun is ideal for pilgrims flying in via Jolly Grant Airport. It is the closest major city to Yamunotri, so you start fresh from the Himalayan foothills instead of driving up from Delhi.' },
            { question: 'Do you provide Jolly Grant Airport pickup for the tempo Yatra?', answer: 'Yes, our tempo travellers pick up directly from Jolly Grant Airport, Dehradun ISBT or your city hotel, and drop you back at the airport at the end of the 11-day Yatra.' }
        ],
        seoTitle: 'Dehradun to Chardham Yatra Tempo Traveller | Jolly Grant Airport Pickup',
        seoDesc: 'Book Dehradun to Chardham Yatra Tempo Traveller. 11 Days Tour. Pickup from Jolly Grant Airport. 12/16/20 Seater AC Tempo available.',
        images: {
            hero: '/images/chardham/chardham-dehradun-hero.webp',
            map: '/images/chardham/route-map-dehradun.jpg'
        },
        pickupDrop: {
            pickup: ['Jolly Grant Airport', 'Dehradun ISBT', 'City Hotel'],
            drop: ['Airport', 'Railway Station']
        }
    },
    {
        slug: 'rishikesh-to-chardham-yatra-tempo-traveller',
        title: 'Rishikesh to Chardham Yatra',
        origin: 'Rishikesh',
        destination: 'Chardham Yatra',
        duration: '9 Nights / 10 Days',
        type: 'Char',
        description: 'Chardham Yatra starting from the Yoga Capital. 10 Days spiritual circuit covering 4 Dhams.',
        intro: 'Combine yoga and spirituality with our **Rishikesh to Chardham Yatra Tempo Traveller**. Start from the banks of the Ganges and ascend to the glacial origins. Our service ensures a peaceful and meditative journey through the Devbhoomi.',
        whyChoose: [
            { title: 'Yoga & Yatra', desc: 'Best for those staying in Ashrams.' },
            { title: 'Adventure Ready', desc: 'Vehicles suitable for rough Himalayan terrain.' }
        ],
        packages: [
            { type: 'Standard', vehicle: '12 Seater', price: '₹70,000' },
            { type: 'Deluxe', vehicle: '16 Seater', price: '₹80,000' },
            { type: 'Super Deluxe', vehicle: '17 Seater', price: '₹85,000' },
            { type: 'Luxury', vehicle: '20 Seater', price: '₹95,000' },
            { type: 'Maharaja', vehicle: '26 Seater', price: '₹1,10,000' }
        ],
        itinerary: [
            { day: 1, title: 'Rishikesh to Barkot (175 km)', desc: 'Pickup from Tapovan, Laxman Jhula or your ashram. Drive via Mussoorie and Kempty Falls to Barkot (7 hrs). Overnight at Barkot, the base for Yamunotri.' },
            { day: 2, title: 'Barkot - Yamunotri - Barkot (90 km)', desc: 'Drive to Janki Chatti and trek 6 km to Yamunotri Dham. Holy dip at Surya Kund and darshan of Goddess Yamuna. Return to Barkot.' },
            { day: 3, title: 'Barkot to Uttarkashi (100 km)', desc: 'Drive to Uttarkashi via Radi Top. Visit Kashi Vishwanath Temple. Overnight by the Bhagirathi.' },
            { day: 4, title: 'Uttarkashi - Gangotri - Uttarkashi (200 km)', desc: 'Day excursion to Gangotri Dham. Darshan and holy bath in the Bhagirathi. Return to Uttarkashi.' },
            { day: 5, title: 'Uttarkashi to Guptkashi (220 km)', desc: 'Scenic drive via Tehri Dam, Srinagar and Rudraprayag to Guptkashi. Overnight near the Mandakini river.' },
            { day: 6, title: 'Guptkashi to Kedarnath', desc: 'Drive to Sonprayag, shared jeep to Gaurikund, then trek 16-18 km (or helicopter) to Kedarnath. Evening aarti and overnight at the Jyotirlinga.' },
            { day: 7, title: 'Kedarnath to Guptkashi', desc: 'Morning darshan, trek down to Gaurikund and drive back to Guptkashi for rest and overnight.' },
            { day: 8, title: 'Guptkashi to Badrinath (200 km)', desc: 'Drive via Joshimath to Badrinath. Holy bath at Tapt Kund and evening aarti. Overnight at Badrinath.' },
            { day: 9, title: 'Badrinath to Srinagar Garhwal (160 km)', desc: 'Morning darshan and Mana Village visit. Drive to Srinagar Garhwal for the night, breaking the return comfortably.' },
            { day: 10, title: 'Srinagar to Rishikesh (105 km)', desc: 'Drive via Devprayag back to Rishikesh. Drop at your ashram or Haridwar. Tour ends with divine blessings.' }
        ],
        features: ['Ashram / Hotel Pickup', 'Clean AC Interiors', 'Pushback Seats', 'Music System', 'Oxygen Cylinder Onboard', 'GPS Tracking', 'Experienced Hill Driver'],
        faqs: [
            { question: 'Is it safe to travel the Char Dham route at night by tempo?', answer: 'We strictly avoid night driving above Rishikesh on the hill roads. Days start early and end before dusk, with overnight halts at safe towns, so the entire Yatra is driven only in daylight.' },
            { question: 'Can you pick up from my Rishikesh ashram for the Yatra?', answer: 'Yes — our tempo travellers pick up directly from Tapovan, Laxman Jhula, Swarg Ashram or any Rishikesh ashram or hotel, perfect for yogis combining their stay with the Char Dham pilgrimage.' }
        ],
        seoTitle: 'Rishikesh to Chardham Yatra Tempo Traveller | 10 Days Package',
        seoDesc: 'Rent Tempo Traveller from Rishikesh for Chardham Yatra. 10 Days complete package. Experienced drivers. AC/Non-AC options available.',
        images: {
            hero: '/images/chardham/chardham-rishikesh-hero.webp',
            map: '/images/chardham/route-map-rishikesh.jpg'
        },
        pickupDrop: {
            pickup: ['Tapovan', 'Laxman Jhula', 'Bus Stand'],
            drop: ['Rishikesh', 'Haridwar']
        }
    },
    {
        slug: 'delhi-to-kedarnath-tempo-traveller',
        title: 'Delhi to Kedarnath Yatra',
        origin: 'Delhi',
        destination: 'Kedarnath',
        duration: '5 Nights / 6 Days',
        type: 'Ek',
        description: 'Dedicated Delhi to Kedarnath Tempo Traveller. 6 Days package for Baba Kedarnath Darshan.',
        intro: 'Heed the call of Mahadev with our specialized **Delhi to Kedarnath Tempo Traveller** service. A focused 6-day journey taking you directly to the abode of Lord Shiva. We manage the logistics so you can focus on your devotion.',
        whyChoose: [
            { title: 'Direct Route', desc: 'Optimized itinerary for Kedarnath.' },
            { title: 'Halts for Biometric', desc: 'Assistance with registration stops.' }
        ],
        packages: [
            { type: 'Standard', vehicle: '12 Seater', price: '₹42,000' },
            { type: 'Deluxe', vehicle: '16 Seater', price: '₹48,000' },
            { type: 'Super Deluxe', vehicle: '17 Seater', price: '₹51,000' },
            { type: 'Luxury', vehicle: '20 Seater', price: '₹57,000' },
            { type: 'Maharaja', vehicle: '26 Seater', price: '₹66,000' }
        ],
        itinerary: [
            { day: 1, title: 'Delhi to Haridwar (220 km)', desc: 'Early morning pickup from Delhi NCR. Drive via Meerut Expressway to Haridwar (5-6 hrs). Evening Ganga Aarti at Har Ki Pauri. Overnight in Haridwar.' },
            { day: 2, title: 'Haridwar to Guptkashi (220 km)', desc: 'Scenic drive via Devprayag and Rudraprayag to Guptkashi, the base for Kedarnath. Complete biometric registration en route. Overnight near the Mandakini.' },
            { day: 3, title: 'Guptkashi - Kedarnath', desc: 'Drive to Sonprayag, shared jeep to Gaurikund, then trek 16-18 km (pony/palki/helicopter optional) to Kedarnath (3,583 m). Evening aarti at the Jyotirlinga. Overnight at Kedarnath.' },
            { day: 4, title: 'Kedarnath to Guptkashi', desc: 'Early morning darshan and Adi Shankaracharya Samadhi. Trek down to Gaurikund and drive back to Guptkashi for the night.' },
            { day: 5, title: 'Guptkashi to Rishikesh (235 km)', desc: 'Return drive via Rudraprayag and Devprayag to Rishikesh. Optional Ganga aarti at Triveni Ghat. Overnight stay.' },
            { day: 6, title: 'Rishikesh to Delhi (240 km)', desc: 'After breakfast, drive back to Delhi NCR. Drop at home, station or airport. Tour ends with the blessings of Baba Kedar.' }
        ],
        features: ['Direct Optimised Route', 'Waiting at Sonprayag/Gaurikund', 'Pushback Comfort Seating', 'Oxygen Cylinder Onboard', 'Biometric Registration Help', 'GPS Tracking', 'Experienced Hill Driver'],
        faqs: [
            { question: 'Is the Kedarnath helicopter booking included in the tempo package?', answer: 'No — the helicopter is a separate optional service (₹7,000-8,500 one way). Our tempo waits safely at Sonprayag/Gaurikund while you fly, and our team guides you on official IRCTC helicopter booking.' },
            { question: 'How far is Delhi to Kedarnath by tempo traveller?', answer: 'Delhi to Sonprayag (the Kedarnath roadhead) is about 430 km, covered in 2 days with an overnight halt at Haridwar. From Sonprayag it is a 16-18 km trek or a short helicopter hop to the temple.' }
        ],
        seoTitle: 'Delhi to Kedarnath Tempo Traveller | 12 Seater AC Rental',
        seoDesc: 'Book Tempo Traveller from Delhi to Kedarnath. 6 Days Tour. Best price for 12, 16, 20 seater. Safe drivers for hill driving.',
        images: {
            hero: '/images/chardham/kedarnath-hero.webp',
            map: '/images/chardham/kedarnath-map.jpg'
        },
        pickupDrop: {
            pickup: ['Delhi NCR'],
            drop: ['Delhi NCR']
        }
    },
    {
        slug: 'haridwar-to-kedarnath-tempo-traveller',
        title: 'Haridwar to Kedarnath Yatra',
        origin: 'Haridwar',
        destination: 'Kedarnath',
        duration: '3 Nights / 4 Days',
        type: 'Ek',
        description: 'Short spiritual trip from Haridwar to Kedarnath. 4 Days quick darshan package.',
        intro: 'Short on time but high on devotion? Our **Haridwar to Kedarnath Tempo Traveller** is designed for a quick yet fulfilling 4-day pilgrimage. Perfect for weekend spiritual getaways.',
        whyChoose: [
            { title: 'Quick Getaway', desc: 'Optimize your long weekend.' },
            { title: 'Budget Friendly', desc: 'Economical packages from Haridwar.' }
        ],
        packages: [
            { type: 'Standard', vehicle: '12 Seater', price: '₹28,000' },
            { type: 'Deluxe', vehicle: '16 Seater', price: '₹32,000' },
            { type: 'Super Deluxe', vehicle: '17 Seater', price: '₹34,000' },
            { type: 'Luxury', vehicle: '20 Seater', price: '₹38,000' },
            { type: 'Maharaja', vehicle: '26 Seater', price: '₹44,000' }
        ],
        itinerary: [
            { day: 1, title: 'Haridwar to Guptkashi (220 km)', desc: 'Early morning pickup from Haridwar. Drive via Devprayag and Rudraprayag to Guptkashi (8-9 hrs), the base for Kedarnath. Overnight near the Mandakini.' },
            { day: 2, title: 'Guptkashi - Kedarnath', desc: 'Drive to Sonprayag, shared jeep to Gaurikund, then trek 16-18 km (pony/palki/helicopter optional) to Kedarnath. Evening aarti at the Jyotirlinga. Overnight at Kedarnath.' },
            { day: 3, title: 'Kedarnath to Guptkashi', desc: 'Morning darshan and Adi Shankaracharya Samadhi. Trek down to Gaurikund and drive back to Guptkashi for the night.' },
            { day: 4, title: 'Guptkashi to Haridwar (220 km)', desc: 'Return drive via Rudraprayag and Devprayag to Haridwar. Drop at the Railway Station or Bus Stand. Tour ends.' }
        ],
        features: ['Quick 4-Day Trip', 'AC Tempo Traveller', 'Pushback Seats', 'Oxygen Cylinder Onboard', 'Experienced Hill Driver', 'GPS Tracking'],
        faqs: [
            { question: 'How many days does Haridwar to Kedarnath take by tempo?', answer: 'A comfortable Haridwar to Kedarnath tempo trip takes 4 days (3 nights), with overnight halts at Guptkashi and Kedarnath. With the helicopter it can be compressed to 3 days.' },
            { question: 'What is the fare for a Haridwar to Kedarnath tempo traveller?', answer: 'The 4-day Haridwar to Kedarnath tempo charter starts at ₹28,000 for a 12 seater and goes up to ₹44,000 for the 26 seater, all-inclusive of vehicle, hill driver, fuel, tolls and parking.' }
        ],
        seoTitle: 'Haridwar to Kedarnath Tempo Traveller | 4 Days Package',
        seoDesc: 'Haridwar to Kedarnath Tempo Traveller fare. 4 days quick tour package. Book 12 seater tempo for Kedarnath Yatra.',
        images: {
            hero: '/images/chardham/haridwar-kedarnath-hero.webp',
            map: '/images/chardham/haridwar-kedarnath-map.jpg'
        },
        pickupDrop: {
            pickup: ['Haridwar'],
            drop: ['Haridwar']
        }
    },
    {
        slug: 'delhi-to-do-dham-tempo-traveller',
        title: 'Delhi to Do Dham (Badrinath-Kedarnath)',
        origin: 'Delhi',
        destination: 'Do Dham',
        duration: '7 Nights / 8 Days',
        type: 'Do',
        description: 'Popular Do Dham Yatra covering Kedarnath and Badrinath. 8 Days package from Delhi.',
        intro: 'Experience the two most revered shrines of the Himalayas. Our **Delhi to Do Dham (Badrinath & Kedarnath) Tempo Traveller** package is the most popular choice for pilgrims seeking the blessings of both Hari (Vishnu) and Hara (Shiva).',
        whyChoose: [
            { title: 'Most Popular', desc: 'Covers the two major Dhams.' },
            { title: 'Balanced Itinerary', desc: 'Not too rushed, not too long.' }
        ],
        packages: [
            { type: 'Standard', vehicle: '12 Seater', price: '₹56,000' },
            { type: 'Deluxe', vehicle: '16 Seater', price: '₹64,000' },
            { type: 'Super Deluxe', vehicle: '17 Seater', price: '₹68,000' },
            { type: 'Luxury', vehicle: '20 Seater', price: '₹76,000' },
            { type: 'Maharaja', vehicle: '26 Seater', price: '₹88,000' }
        ],
        itinerary: [
            { day: 1, title: 'Delhi to Haridwar (220 km)', desc: 'Morning pickup from Delhi NCR. Drive via Meerut Expressway to Haridwar. Evening Ganga Aarti at Har Ki Pauri. Overnight in Haridwar.' },
            { day: 2, title: 'Haridwar to Guptkashi (220 km)', desc: 'Drive via Devprayag and Rudraprayag to Guptkashi, the Kedarnath base. Complete biometric registration en route. Overnight stay.' },
            { day: 3, title: 'Guptkashi - Kedarnath', desc: 'Drive to Sonprayag, trek (or helicopter) to Kedarnath (3,583 m). Evening aarti at the Jyotirlinga. Overnight at Kedarnath.' },
            { day: 4, title: 'Kedarnath to Guptkashi', desc: 'Morning darshan, trek down to Gaurikund and drive back to Guptkashi for the night.' },
            { day: 5, title: 'Guptkashi to Badrinath (200 km)', desc: 'Drive via Joshimath to Badrinath (3,300 m). Holy bath at Tapt Kund and evening aarti at Badri Vishal. Overnight stay.' },
            { day: 6, title: 'Badrinath to Rudraprayag (160 km)', desc: 'Morning darshan and Mana Village visit. Drive to Rudraprayag for the night.' },
            { day: 7, title: 'Rudraprayag to Rishikesh (140 km)', desc: 'Drive via Devprayag to Rishikesh. Optional Ganga aarti at Triveni Ghat. Overnight stay.' },
            { day: 8, title: 'Rishikesh to Delhi (240 km)', desc: 'Drive back to Delhi NCR. Drop at home, station or airport. Tour ends with Hari-Hara blessings.' }
        ],
        features: ['Hari-Hara (Vishnu + Shiva) Yatra', 'AC Tempo Traveller', 'Pushback Comfortable Seats', 'Roof Luggage Carrier', 'Oxygen Cylinder Onboard', 'GPS Tracking', 'Experienced Hill Driver'],
        faqs: [
            { question: 'What is Do Dham Yatra and which dhams does it cover?', answer: 'Do Dham (two abodes) covers Kedarnath — the abode of Lord Shiva (Hara) — and Badrinath, the abode of Lord Vishnu (Hari). It is the most popular short Char Dham option for pilgrims tight on time.' },
            { question: 'How many days is the Delhi to Do Dham tempo package?', answer: 'The Delhi to Do Dham (Kedarnath + Badrinath) tempo package runs 8 days (7 nights), a balanced itinerary that is neither too rushed nor too long, with comfortable acclimatisation halts.' }
        ],
        seoTitle: 'Delhi to Do Dham Yatra Tempo Traveller | Kedarnath Badrinath Package',
        seoDesc: 'Do Dham Yatra Tempo Traveller from Delhi. Package for Kedarnath and Badrinath. 8 Days tour. 12/17/26 Seater available.',
        images: {
            hero: '/images/chardham/kedarnath-hero.webp',
            map: '/images/chardham/do-dham-map.jpg'
        },
        pickupDrop: { pickup: ['Delhi'], drop: ['Delhi'] }
    },
    {
        slug: 'haridwar-to-do-dham-tempo-traveller',
        title: 'Haridwar to Do Dham (Badrinath-Kedarnath)',
        origin: 'Haridwar',
        destination: 'Do Dham',
        duration: '5 Nights / 6 Days',
        type: 'Do',
        description: 'Do Dham Yatra from Haridwar. 6 Days package for Kedarnath and Badrinath.',
        intro: 'Join the sacred path from Haridwar. Our **Haridwar to Do Dham Tempo Traveller** service is optimized for efficiency and devotion, covering the twin peaks of spirituality—Kedarnath and Badrinath—in just 6 days.',
        whyChoose: [
            { title: 'Time Saver', desc: 'Quickest way to cover two Dhams.' },
            { title: 'Station Pickup', desc: 'Easy pickup from train station.' }
        ],
        packages: [
            { type: 'Standard', vehicle: '12 Seater', price: '₹42,000' },
            { type: 'Deluxe', vehicle: '16 Seater', price: '₹48,000' },
            { type: 'Super Deluxe', vehicle: '17 Seater', price: '₹51,000' },
            { type: 'Luxury', vehicle: '20 Seater', price: '₹57,000' },
            { type: 'Maharaja', vehicle: '26 Seater', price: '₹66,000' }
        ],
        itinerary: [
            { day: 1, title: 'Haridwar to Guptkashi', desc: 'Drive.' },
            { day: 2, title: 'Kedarnath Visit', desc: 'Trek.' },
            { day: 3, title: 'Return', desc: 'Back to Guptkashi.' },
            { day: 4, title: 'To Badrinath', desc: 'Drive.' },
            { day: 5, title: 'To Rudraprayag', desc: 'Return leg.' },
            { day: 6, title: 'To Haridwar', desc: 'Drop.' }
        ],
        features: ['Station Pickup', 'Efficient Route'],
        faqs: [],
        seoTitle: 'Haridwar to Do Dham Yatra Tempo Traveller | Kedarnath & Badrinath',
        seoDesc: 'Book Tempo Traveller for Do Dham Yatra from Haridwar. 6 Days package. Best rates for Kedarnath Badrinath tour.',
        images: {
            hero: '/images/chardham/haridwar-kedarnath-hero.webp',
            map: '/images/chardham/do-dham-map.jpg'
        },
        pickupDrop: { pickup: ['Haridwar'], drop: ['Haridwar'] }
    },
    {
        slug: 'dehradun-to-do-dham-tempo-traveller',
        title: 'Dehradun to Do Dham (Badrinath-Kedarnath)',
        origin: 'Dehradun',
        destination: 'Do Dham',
        duration: '6 Nights / 7 Days',
        type: 'Do',
        description: 'Do Dham Yatra from Dehradun. 7 Days package covering Kedarnath & Badrinath.',
        intro: 'Fly in and drive out to the divine. Our **Dehradun to Do Dham Tempo Traveller** caters specifically to pilgrims arriving at Jolly Grant Airport, offering a premium and hassle-free journey to Kedarnath and Badrinath.',
        whyChoose: [
            { title: 'Airport Convenience', desc: 'Start Yatra right after landing.' }
        ],
        packages: [
            { type: 'Standard', vehicle: '12 Seater', price: '₹49,000' },
            { type: 'Deluxe', vehicle: '16 Seater', price: '₹56,000' },
            { type: 'Super Deluxe', vehicle: '17 Seater', price: '₹59,500' },
            { type: 'Luxury', vehicle: '20 Seater', price: '₹66,500' },
            { type: 'Maharaja', vehicle: '26 Seater', price: '₹77,000' }
        ],
        itinerary: [
            { day: 1, title: 'Dehradun to Guptkashi', desc: 'Drive.' },
            { day: 2, title: 'Kedarnath', desc: 'Trek.' },
            { day: 3, title: 'Return', desc: 'Trek down.' },
            { day: 4, title: 'Badrinath', desc: 'Drive.' },
            { day: 5, title: 'Joshimath', desc: 'Return drive.' },
            { day: 6, title: 'Rishikesh', desc: 'Drive.' },
            { day: 7, title: 'Dehradun', desc: 'Airport Drop.' }
        ],
        features: ['Airport Service', 'Premium Tempo'],
        faqs: [],
        seoTitle: 'Dehradun to Do Dham Yatra Tempo Traveller | Jolly Grant To Kedarnath Badrinath',
        seoDesc: 'Rent Tempo Traveller from Dehradun for Do Dham Yatra. Airport pickup included. 12/17 seater AC tempo traveller.',
        images: {
            hero: '/images/chardham/chardham-dehradun-hero.webp',
            map: '/images/chardham/do-dham-map.jpg'
        },
        pickupDrop: { pickup: ['Dehradun'], drop: ['Dehradun'] }
    },
    {
        slug: 'delhi-to-gangotri-yamunotri-do-dham-tempo-traveller',
        title: 'Delhi to Gangotri-Yamunotri Do Dham',
        origin: 'Delhi',
        destination: 'Do Dham (G-Y)',
        duration: '6 Nights / 7 Days',
        type: 'Do',
        description: 'Special Do Dham package for Gangotri and Yamunotri from Delhi. 7 Days tour.',
        intro: 'Seek purity at the sources of the holy rivers. Our **Delhi to Gangotri-Yamunotri Tempo Traveller** package takes you to the origin of the Ganga and Yamuna rivers. A serene and less crowded spiritual circuit.',
        whyChoose: [
            { title: 'River Origins', desc: 'Visit source of Ganga & Yamuna.' },
            { title: 'Scenic Route', desc: 'Beautiful drive through Uttarkashi.' }
        ],
        packages: [
            { type: 'Standard', vehicle: '12 Seater', price: '₹49,000' },
            { type: 'Deluxe', vehicle: '16 Seater', price: '₹56,000' },
            { type: 'Super Deluxe', vehicle: '17 Seater', price: '₹59,500' },
            { type: 'Luxury', vehicle: '20 Seater', price: '₹66,500' },
            { type: 'Maharaja', vehicle: '26 Seater', price: '₹77,000' }
        ],
        itinerary: [
            { day: 1, title: 'Delhi to Haridwar', desc: 'Drive.' },
            { day: 2, title: 'Haridwar to Barkot', desc: 'Drive.' },
            { day: 3, title: 'Yamunotri', desc: 'Trek.' },
            { day: 4, title: 'To Uttarkashi', desc: 'Drive.' },
            { day: 5, title: 'Gangotri', desc: 'Darshan.' },
            { day: 6, title: 'To Rishikesh', desc: 'Return drive.' },
            { day: 7, title: 'To Delhi', desc: 'Drop.' }
        ],
        features: ['River Circuit', 'Nature & Spirit'],
        faqs: [],
        seoTitle: 'Delhi to Gangotri Yamunotri Tempo Traveller | Do Dham Package',
        seoDesc: 'Delhi to Gangotri Yamunotri Do Dham Yatra by Tempo Traveller. 7 Days Package. Best fares for 12/17 seater tempo.',
        images: {
            hero: '/images/chardham/chardham-rishikesh-hero.webp',
            map: '/images/chardham/gangotri-yamunotri-map.jpg'
        },
        pickupDrop: { pickup: ['Delhi'], drop: ['Delhi'] }
    }
];
