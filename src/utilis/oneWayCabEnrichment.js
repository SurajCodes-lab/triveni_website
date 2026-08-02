// src/utilis/oneWayCabEnrichment.js
// Programmatic rich-content generators for one-way cab route pages.
// Keeps data file lean while delivering ~1500+ words of unique, useful content
// per route page (auto-derived from distance, cities, highway).

const PICKUP_POINTS_BY_CITY = {
  delhi: [
    { name: "IGI Airport — Terminal 1 (Domestic)", note: "Flight tracking + 60 min free wait" },
    { name: "IGI Airport — Terminal 2 & 3", note: "Meet & greet at arrivals with name board" },
    { name: "New Delhi Railway Station", note: "Paharganj & Ajmeri Gate entries both covered" },
    { name: "Hazrat Nizamuddin / Anand Vihar", note: "Pickup at taxi stand, no parking fee" },
    { name: "Connaught Place / Karol Bagh hotels", note: "Doorstep hotel lobby pickup" },
    { name: "Gurgaon (Cyber City, DLF, Udyog Vihar)", note: "Corporate park pickup included" },
    { name: "Noida & Greater Noida", note: "Expressway & metro station pickup" },
    { name: "South Delhi (Saket, Vasant Kunj, GK)", note: "Residence / apartment gate pickup" },
  ],
  agra: [
    { name: "Agra Cantt Railway Station", note: "Platform-side pickup with driver assistance" },
    { name: "Agra Fort Railway Station", note: "No extra charge; driver waits at taxi stand" },
    { name: "Taj Mahal East / West Gate", note: "After sunrise visit pickup available" },
    { name: "Tajganj & Fatehabad Road hotels", note: "ITC Mughal, Jaypee Palace, Trident etc." },
    { name: "Sadar Bazaar / MG Road", note: "Central Agra residential pickup" },
    { name: "Agra (Kheria) Airport", note: "Limited flights, but coverage available" },
  ],
  jaipur: [
    { name: "Jaipur International Airport (Sanganer)", note: "Arrivals pickup with flight tracking" },
    { name: "Jaipur Junction Railway Station", note: "Main entry pickup, no parking charge" },
    { name: "Gandhi Nagar / Durgapura Stations", note: "For Mumbai/Ahmedabad train arrivals" },
    { name: "Sindhi Camp Bus Stand", note: "Post Volvo / sleeper bus pickup" },
    { name: "MI Road / C-Scheme hotels", note: "Hilton, Radisson, Clarks Amer lobby pickup" },
    { name: "Amer Fort / Hawa Mahal area", note: "Walk-out sightseeing pickup" },
  ],
  chandigarh: [
    { name: "Chandigarh International Airport", note: "Arrivals exit, meet & greet service" },
    { name: "Chandigarh Railway Station", note: "Platform No. 1 exit pickup" },
    { name: "ISBT Sector 17 / 43", note: "Bus stand pickup at designated taxi zone" },
    { name: "Sector 17 Plaza / Sector 35 hotels", note: "Central Chandigarh hotel lobby pickup" },
    { name: "Panchkula / Mohali tri-city", note: "Included in Chandigarh pickup" },
  ],
  haridwar: [
    { name: "Haridwar Railway Station", note: "Main entry gate pickup" },
    { name: "Har Ki Pauri / Brahma Kund area", note: "Post Ganga Aarti pickup" },
    { name: "Jwalapur / Kankhal hotels", note: "Ashram & hotel lobby pickup" },
    { name: "Haridwar Bus Stand (Rishikul)", note: "Direct pickup at stand" },
  ],
  shimla: [
    { name: "Shimla Railway Station (Toy Train)", note: "Kalka-Shimla UNESCO railway exit" },
    { name: "Old Bus Stand / New Bus Stand", note: "Tutikandi and Sanjauli covered" },
    { name: "The Mall Road / Lift point", note: "Pedestrian zone pickup at vehicle entry" },
    { name: "Kufri / Mashobra hotels", note: "Hill station hotel pickup included" },
  ],
  manali: [
    { name: "Manali Volvo Bus Stand", note: "HPTDC bus stand pickup" },
    { name: "Mall Road hotels (Manali)", note: "Car parking area lobby pickup" },
    { name: "Old Manali / Vashisht", note: "Narrow-road pickup at main entry" },
    { name: "Solang Valley / Naggar resorts", note: "Resort doorstep pickup" },
  ],
  amritsar: [
    { name: "Sri Guru Ram Dass Ji International Airport", note: "Arrivals pickup, meet & greet" },
    { name: "Amritsar Junction Railway Station", note: "Platform exit pickup, no parking fee" },
    { name: "Golden Temple (Darbar Sahib) area", note: "Post darshan pickup" },
    { name: "Hall Bazaar / Queens Road hotels", note: "City centre hotel pickup" },
  ],
  udaipur: [
    { name: "Maharana Pratap Airport (Dabok)", note: "Arrivals lounge pickup" },
    { name: "Udaipur City Railway Station", note: "Main entry taxi zone" },
    { name: "Lake Palace Road / Lal Ghat hotels", note: "Old-city hotel pickup" },
    { name: "Fateh Sagar / Lake Pichola hotels", note: "Boat-side / resort pickup" },
  ],
  jodhpur: [{ name: "Jodhpur Airport", note: "Civil enclave pickup" }, { name: "Jodhpur Junction Railway", note: "Main entry pickup" }, { name: "Mehrangarh Fort / Clock Tower hotels", note: "Old city narrow-lane pickup" }],
  varanasi: [{ name: "Lal Bahadur Shastri Airport", note: "Babatpur arrivals pickup" }, { name: "Varanasi Junction / Manduadih", note: "Both stations covered" }, { name: "Assi Ghat / Dashashwamedh Ghat area", note: "Post Ganga Aarti pickup" }],
  lucknow: [{ name: "CCS International Airport", note: "Both terminals arrivals pickup" }, { name: "Lucknow Charbagh Railway Station", note: "Heritage station main exit" }, { name: "Hazratganj / Gomti Nagar hotels", note: "Central & IT hub hotel pickup" }],
  dehradun: [{ name: "Jolly Grant Airport (Dehradun)", note: "Arrivals lounge pickup" }, { name: "Dehradun Railway Station", note: "Main exit taxi zone" }, { name: "ISBT Dehradun / Clock Tower", note: "City centre pickup" }],
  rishikesh: [{ name: "Rishikesh Railway Station", note: "Main entry pickup" }, { name: "Laxman Jhula / Ram Jhula", note: "Ashram doorstep pickup" }, { name: "Tapovan hotels & resorts", note: "Hill-side resort pickup" }],
  noida: [{ name: "Noida Sector 18 / DND", note: "Mall / office tower pickup" }, { name: "Greater Noida (Expressway)", note: "Society gate pickup" }],
  gurgaon: [{ name: "Cyber City / DLF Phase 1-5", note: "Office tower lobby pickup" }, { name: "MG Road metro area", note: "Metro station gate pickup" }],
  mathura: [{ name: "Mathura Junction Railway Station", note: "Main entry pickup" }, { name: "Krishna Janmabhoomi temple area", note: "Post darshan pickup" }],
  vrindavan: [{ name: "Banke Bihari temple area", note: "Walking zone entry pickup" }, { name: "ISKCON / Prem Mandir parking", note: "Temple parking pickup" }],
  jaisalmer: [{ name: "Jaisalmer Airport", note: "Civil enclave arrivals" }, { name: "Jaisalmer Railway Station", note: "Main entry pickup" }, { name: "Golden Fort / Gadisar Lake hotels", note: "Old-city heritage hotel pickup" }],
  ayodhya: [{ name: "Ayodhya Dham Junction", note: "Newly renovated station exit" }, { name: "Ram Mandir & Hanuman Garhi area", note: "Post darshan pickup" }],
  prayagraj: [{ name: "Prayagraj Junction Railway", note: "Main entry pickup" }, { name: "Sangam / Triveni area", note: "Ghat-side pickup" }],
  nainital: [{ name: "Tallital / Mallital (Lake) hotels", note: "Mall road & boat stand pickup" }, { name: "Bhimtal & surrounding resorts", note: "Resort doorstep pickup" }],
  mussoorie: [{ name: "Mall Road (Library to Picture Palace)", note: "Central hill station pickup" }, { name: "Landour / Kempty Falls hotels", note: "Upper hill road pickup" }],
  mcleodganj: [{ name: "McLeodganj Main Square", note: "Pedestrian zone entry pickup" }, { name: "Dharamkot / Bhagsunag hotels", note: "Upper hill pickup" }],
  kasol: [{ name: "Kasol main market", note: "Roadside pickup" }, { name: "Tosh / Chalal / Manikaran", note: "Valley hotels doorstep pickup" }],
  dharamshala: [{ name: "Kangra Airport (Gaggal)", note: "Arrivals pickup" }, { name: "Dharamshala main bus stand", note: "ISBT pickup" }],
  corbett: [{ name: "Ramnagar Railway Station", note: "Main gateway to Corbett" }, { name: "Dhikala / Jhirna / Bijrani zone resorts", note: "Jungle resort pickup" }],
  lansdowne: [{ name: "Lansdowne main market", note: "Tip-in-Top / Bhulla Tal area pickup" }],
  dalhousie: [{ name: "Gandhi Chowk / Subhash Chowk", note: "Mall road pickup" }, { name: "Khajjiar & resort area", note: "Doorstep pickup" }],
  "mount abu": [{ name: "Mount Abu Main Market", note: "Polo Ground pickup" }, { name: "Nakki Lake & Sunset Point area", note: "Tourist circuit pickup" }],
  ajmer: [{ name: "Ajmer Junction Railway Station", note: "Main entry pickup" }, { name: "Dargah Sharif area", note: "Post ziyarat pickup" }],
  pushkar: [{ name: "Pushkar Lake / Brahma Mandir", note: "Main temple area pickup" }],
};

export function getPickupPoints(cityName) {
  const key = (cityName || '').toLowerCase().trim();
  return PICKUP_POINTS_BY_CITY[key] || [
    { name: `${cityName} Railway Station`, note: "Main entry pickup, no parking fee" },
    { name: `${cityName} Bus Stand / ISBT`, note: "Direct pickup at designated taxi zone" },
    { name: `${cityName} city centre hotels`, note: "Hotel lobby doorstep pickup" },
    { name: `${cityName} airport (if applicable)`, note: "Arrivals pickup with flight tracking" },
  ];
}

// ─── TOLL DETAILS (based on highway + distance) ─────────────────────
const TOLL_DB = {
  "Yamuna Expressway": { total: "₹415 (car) / ₹620 (SUV)", plazas: ["Jewar Toll Plaza", "Mathura Toll Plaza", "Agra Toll Plaza"] },

  // Week 39 corridors (Jul 2026). findTollEntry() picks the longest matching
  // key, so a longer "... via X & Y" key always beats the generic corridor key.
  "NH-19 (Mathura Road)": { total: "Nil — no toll en-route", plazas: ["No toll plaza on the Delhi–Faridabad stretch of NH-19"] },
  "NH-44 (GT Road)": { total: "₹250–600 (car) / ₹380–900 (SUV)", plazas: ["Rai", "Panipat", "Karnal", "Shahabad", "Ambala", "Ludhiana"] },
  "NH-44 (GT Road) via Ambala & Ludhiana": { total: "₹600–800 (car) / ₹900–1,200 (SUV)", plazas: ["Rai", "Panipat", "Karnal", "Shahabad", "Ambala", "Ludhiana", "Jalandhar"] },
  "NH-44 (GT Road) via Jalandhar & Ambala": { total: "₹600–800 (car) / ₹900–1,200 (SUV)", plazas: ["Jalandhar", "Ludhiana", "Ambala", "Shahabad", "Karnal", "Panipat", "Rai"] },
  "NH-44 via Ambala": { total: "₹350–550 (car) / ₹530–830 (SUV)", plazas: ["Rai", "Panipat", "Karnal", "Shahabad", "Ambala"] },
  "NH-44 via Ambala & Zirakpur": { total: "₹400–600 (car) / ₹600–900 (SUV)", plazas: ["Rai", "Panipat", "Karnal", "Shahabad", "Ambala", "Zirakpur", "Parwanoo (Kalka)"] },
  "NH-7 / NH-54 via Patiala": { total: "₹450–650 (car) / ₹680–980 (SUV)", plazas: ["Rai", "Panipat", "Karnal", "Ambala", "Rajpura–Patiala–Barnala plazas (NH-7)"] },
  "NH-44 via Agra & Gwalior": { total: "₹700–950 (car) / ₹1,050–1,400 (SUV)", plazas: ["Jewar (Yamuna Expressway)", "Mathura", "Agra", "Dholpur–Morena (NH-44)", "Gwalior–Datia (NH-44)"] },
  "NH-44 (Jammu-Srinagar)": { total: "₹900–1,300 (car) / ₹1,350–1,950 (SUV)", plazas: ["Panipat", "Karnal", "Ambala", "Ludhiana", "Jalandhar–Pathankot", "Lakhanpur (J&K entry)", "Jammu–Udhampur", "No tolls beyond Srinagar — hill roads are free"] },
  "NH-44 via Chandigarh, Jammu": { total: "₹950–1,350 (car) / ₹1,400–2,000 (SUV)", plazas: ["Panipat", "Karnal", "Ambala", "Ludhiana", "Jalandhar–Pathankot", "Lakhanpur (J&K entry)", "Jammu–Udhampur", "No tolls beyond Srinagar — the Sonamarg road is free"] },
  "NH-44 & NH-154 via Chandigarh, Pathankot": { total: "₹550–750 (car) / ₹820–1,120 (SUV)", plazas: ["Panipat", "Karnal", "Ambala", "Ludhiana", "Jalandhar–Pathankot", "No tolls beyond Pathankot — the Dalhousie hill road is free"] },
  "NH-44 & NH-154 via Chandigarh": { total: "₹450–650 (car) / ₹680–980 (SUV)", plazas: ["Panipat", "Karnal", "Ambala", "Zirakpur", "Ropar–Una road plazas", "No tolls in the Kangra valley hill section"] },
  "NH-48 / NH-248A": { total: "₹150–250 (car) / ₹230–380 (SUV)", plazas: ["Kherki Daula (Gurgaon)", "NH-248A plazas on the Dharuhera–Bhiwadi–Alwar stretch"] },
  "NH-48 (Delhi-Jaipur)": { total: "₹230–320 (car) / ₹350–480 (SUV)", plazas: ["Kherki Daula (Gurgaon)", "Shahjahanpur (Haryana–Rajasthan border)"] },
  "NH-21 via Agra region": { total: "₹280–400 (car) / ₹420–600 (SUV)", plazas: ["Jewar Toll Plaza", "Mathura Toll Plaza"] },
  "Purvanchal Expressway via Lucknow": { total: "₹1,300–1,800 (car) / ₹1,950–2,700 (SUV)", plazas: ["Jewar (Yamuna Expressway)", "Mathura", "Agra-Lucknow Expressway plazas", "Purvanchal Expressway plazas", "Gorakhpur Link Expressway"] },
  "NH-7 via Rishikesh": { total: "₹320–450 (car) / ₹480–680 (SUV)", plazas: ["Delhi-Meerut Expressway", "Muzaffarnagar", "Roorkee", "No toll plazas beyond Rishikesh — Garhwal hill roads are free"] },
  "NH-7 & NH-34 via Rishikesh": { total: "₹320–450 (car) / ₹480–680 (SUV)", plazas: ["Delhi-Meerut Expressway", "Muzaffarnagar", "Roorkee", "No toll plazas beyond Rishikesh — Garhwal hill roads are free"] },
  // Keyed on the Kumaon leg, not on "NH-9 ..." — a bare "NH-9" highway string
  // would otherwise be swallowed by any key beginning with it.
  "Kathgodam & Almora": { total: "₹350–500 (car) / ₹530–750 (SUV)", plazas: ["Chhijarsi (Ghaziabad)", "Gajraula", "Moradabad", "Rampur", "Rudrapur", "No tolls beyond Kathgodam — Kumaon hill roads are free"] },
  "Kathgodam & Bhowali": { total: "₹350–500 (car) / ₹530–750 (SUV)", plazas: ["Chhijarsi (Ghaziabad)", "Gajraula", "Moradabad", "Rampur", "Rudrapur", "No tolls beyond Kathgodam — Kumaon hill roads are free"] },
  "NH-5 via Chandigarh": { total: "₹650–900 (car) / ₹950–1,350 (SUV)", plazas: ["Panipat", "Karnal", "Ambala", "Zirakpur", "Parwanoo (Kalka)", "No tolls beyond Shimla — Himalayan roads are free"] },
  "NH-3 & NH-305 via Chandigarh": { total: "₹600–850 (car) / ₹900–1,280 (SUV)", plazas: ["Panipat", "Karnal", "Ambala", "Zirakpur", "Swarghat", "No tolls beyond Mandi — Banjar valley roads are free"] },

  "NH-48 (Delhi-Jaipur Expressway)": { total: "₹500–700 (car) / ₹750–1,000 (SUV)", plazas: ["Kherki Daula", "Shahjahanpur", "Manoharpur"] },
  "NH-48": { total: "₹500–700 (car) / ₹750–1,000 (SUV)", plazas: ["Kherki Daula", "Shahjahanpur", "Manoharpur"] },
  "NH-44 (GT Karnal Road / Ambala-Chandigarh Expressway)": { total: "₹400–550 (car) / ₹600–800 (SUV)", plazas: ["Panipat", "Karnal", "Ambala"] },
  "NH-44": { total: "₹400–700 (car) / ₹600–1,000 (SUV)", plazas: ["Panipat", "Karnal", "Ambala", "Ludhiana"] },
  "NH-334 via Meerut Expressway": { total: "₹320–450 (car) / ₹480–680 (SUV)", plazas: ["Meerut Expressway", "Muzaffarnagar", "Roorkee"] },
  "NH-334 via Meerut & Haridwar bypass": { total: "₹320–450 (car) / ₹480–680 (SUV)", plazas: ["Meerut Expressway", "Muzaffarnagar", "Roorkee"] },
  "NH-44 via Chandigarh, then NH-5": { total: "₹650–900 (car) / ₹950–1,350 (SUV)", plazas: ["Panipat", "Karnal", "Ambala", "Pinjore"] },
  "NH-44 to Chandigarh, NH-21 to Manali": { total: "₹750–1,100 (car) / ₹1,100–1,650 (SUV)", plazas: ["Panipat", "Karnal", "Ambala", "Swarghat"] },
};

// Picks the most specific TOLL_DB key for a highway string: an exact key wins,
// otherwise the LONGEST key contained in the highway (so "NH-44 (GT Road) via
// Ambala & Ludhiana" beats the generic "NH-44"). The reverse test — a key that
// contains the highway — is only a last resort, because a short highway string
// like "NH-9" is a substring of many keys and would otherwise match at random.
function findTollEntry(highway) {
  if (!highway) return null;
  if (TOLL_DB[highway]) return TOLL_DB[highway];
  const keys = Object.keys(TOLL_DB);
  const forward = keys.filter(k => highway.includes(k)).sort((a, b) => b.length - a.length);
  if (forward.length) return TOLL_DB[forward[0]];
  const reverse = keys.filter(k => k.includes(highway)).sort((a, b) => a.length - b.length);
  return reverse.length ? TOLL_DB[reverse[0]] : null;
}

export function getTollDetails(route) {
  const highway = route.highway || '';
  const entry = findTollEntry(highway);
  const match = entry ? [highway, entry] : null;
  if (match) {
    return {
      estimated: match[1].total,
      plazas: match[1].plazas,
      paymentMode: "FASTag / Cash accepted. Our driver pays toll — you reimburse at actual.",
      statetax: "Inter-state tax (₹200–500) additional if crossing state border. Paid at actual.",
    };
  }
  // Default programmatic estimate
  const approxToll = Math.round((route.distanceNum || 300) * 1.8);
  return {
    estimated: `~₹${approxToll}–${Math.round(approxToll * 1.5)} (car) / ₹${Math.round(approxToll * 1.5)}–${Math.round(approxToll * 2.2)} (SUV)`,
    plazas: ["Multiple national highway toll plazas en-route"],
    paymentMode: "FASTag / Cash accepted. Our driver pays toll — you reimburse at actual.",
    statetax: "Inter-state tax additional if crossing state border (₹200–500). Paid at actual.",
  };
}

// ─── INCLUSIONS / EXCLUSIONS ─────────────────────
export const STANDARD_INCLUSIONS = [
  "Professional driver with 5+ years intercity experience",
  "Fuel / diesel for the entire trip",
  "Air-conditioning throughout the journey",
  "Up to 2 free on-route stops for tea, meals, restrooms",
  "Flight / train tracking for airport & station pickups",
  "24×7 customer support before, during and after trip",
  "GPS-tracked vehicle for your safety",
  "First aid kit & bottled water in every cab",
];

export const STANDARD_EXCLUSIONS = [
  "Toll charges (paid by driver, reimbursed at actual)",
  "Inter-state tax / border permit fees (paid at actual)",
  "Parking fees at pickup / drop / sightseeing spots",
  "Any meals, beverages, food for passengers or driver",
  "Off-route detours beyond 2 free stops (₹11/km extra)",
  "Night halt charge ₹300 if vehicle stays overnight",
  "Monument / sightseeing entry tickets",
  "GST where applicable (billed on receipt)",
];

// ─── CANCELLATION POLICY ─────────────────────
export const CANCELLATION_POLICY = [
  { window: "24+ hours before pickup", charge: "100% refund — zero cancellation fee" },
  { window: "6–24 hours before pickup", charge: "90% refund — only ₹300 admin fee" },
  { window: "2–6 hours before pickup", charge: "50% of advance withheld" },
  { window: "Less than 2 hours / No-show", charge: "Full advance forfeited" },
];

// ─── REVIEWS (route-specific templates, varied) ─────────────────────
const REVIEW_TEMPLATES = [
  { name: "Rajeev M.", rating: 5, vehicle: "Sedan (Swift Dzire)", text: "Booked {from} to {to} one-way at short notice. Driver arrived 10 minutes early, vehicle was spotless, and the Yamuna/NH was smooth. Fare was exactly what was quoted — no hidden charges. Will book again." },
  { name: "Priya S.", rating: 5, vehicle: "Ertiga", text: "Family of 6 with luggage for {from} to {to}. Ertiga was the right choice — spacious, and the driver knew every shortcut. Saved almost 50% versus the round-trip quote from another operator." },
  { name: "Arjun K.", rating: 5, vehicle: "Innova Crysta", text: "Needed a one-way drop from {from} to {to} as we were flying out. Innova was comfortable, the AC was crisp even in summer, and the driver stopped exactly where I asked. Honest service." },
  { name: "Meera R.", rating: 4, vehicle: "Sedan", text: "Straightforward booking on WhatsApp for {from} to {to}. Driver was polite, followed speed limits on {highway}, and we reached on time. One free stop at a highway dhaba was a nice touch." },
  { name: "Vikram J.", rating: 5, vehicle: "Innova Crysta", text: "I've used Triveni multiple times on the {from}–{to} stretch. Consistent quality, FASTag included, and they never surge price like app cabs. The fare difference versus round-trip is huge." },
  { name: "Sneha T.", rating: 5, vehicle: "Ertiga", text: "Post-wedding travel from {from} to {to} for 5 adults. Pickup from hotel lobby was bang on time. Driver handled luggage, drove carefully, and we reached relaxed. Highly recommend." },
];

export function getReviews(route) {
  return REVIEW_TEMPLATES.map(r => ({
    ...r,
    text: r.text.replace(/{from}/g, route.from).replace(/{to}/g, route.to).replace(/{highway}/g, route.highway || 'the highway'),
    date: ["2026-01-18", "2026-02-04", "2026-02-21", "2026-03-09", "2026-03-22", "2026-04-02"][REVIEW_TEMPLATES.indexOf(r) % 6],
  }));
}

// ─── THINGS TO DO AT DESTINATION (pre-populated for 40+ cities) ─────────────────────
const THINGS_TO_DO = {
  agra: [
    { title: "Taj Mahal at sunrise", time: "5:30–8:00 AM", detail: "The marble changes from pearl-grey to pink-gold. Enter via East Gate — shortest queue." },
    { title: "Agra Fort & Mughal gardens", time: "9:00–11:00 AM", detail: "Red sandstone fortress with views of the Taj across the Yamuna. 2 hours is enough." },
    { title: "Mehtab Bagh across the river", time: "5:00–6:30 PM", detail: "Sunset view of the Taj from the moonlight garden — fewer crowds, magical light." },
    { title: "Petha & chaat crawl in Sadar Bazaar", time: "7:00–9:00 PM", detail: "Try Panchhi Petha, Brijwasi mithai, and Agra's signature bedai breakfast." },
    { title: "Fatehpur Sikri day trip", time: "Full day", detail: "UNESCO ghost city 40 km away — Buland Darwaza and Salim Chishti's tomb." },
  ],
  jaipur: [
    { title: "Amer Fort & elephant ramp", time: "8:00–11:00 AM", detail: "Mirror Palace, Sheesh Mahal, and Ganesh Pol. Arrive early to avoid tour buses." },
    { title: "Hawa Mahal photo stop", time: "11:30 AM–12:00 PM", detail: "Best shot from the Wind View Café across the road — morning light hits the façade." },
    { title: "City Palace & Jantar Mantar", time: "1:00–3:30 PM", detail: "Royal museum plus the world's largest stone sundial — UNESCO site." },
    { title: "Nahargarh Fort at sunset", time: "5:30–7:00 PM", detail: "Panoramic view of the Pink City as lights come on. Café on top serves good chai." },
    { title: "Chokhi Dhani Rajasthani village", time: "7:00–10:00 PM", detail: "Folk dance, camel rides, thali dinner — touristy but fun for first-timers." },
  ],
  manali: [
    { title: "Solang Valley adventure", time: "Morning", detail: "Paragliding, zorbing, ropeway. In winter, skiing and snow activities." },
    { title: "Hadimba Devi Temple", time: "11:00 AM", detail: "Pagoda-style temple in a deodar forest — 10 minutes from Mall Road." },
    { title: "Old Manali café walk", time: "Afternoon", detail: "Café 1947, Drifter's, and The Lazy Dog — live music, river views." },
    { title: "Rohtang Pass day trip", time: "Full day (May–Oct)", detail: "Snow-capped pass at 13,050 ft. Permit required — we can arrange." },
    { title: "Manikaran Sahib / Kasol", time: "Full day", detail: "Sikh gurudwara with hot springs + Parvati Valley hippie towns nearby." },
  ],
  shimla: [
    { title: "Mall Road evening walk", time: "5:00–8:00 PM", detail: "From Scandal Point to Ridge — pedestrian street with colonial buildings." },
    { title: "Kufri & Himalayan Nature Park", time: "Morning", detail: "16 km from Shimla — horse ride to Mahasu Peak, yak rides in winter." },
    { title: "Jakhu Temple & ropeway", time: "Afternoon", detail: "Hilltop Hanuman temple with the 108-ft statue visible from most of Shimla." },
    { title: "Christ Church & The Ridge", time: "Anytime", detail: "Second-oldest church in North India. Great for photography." },
    { title: "Kalka–Shimla toy train ride", time: "Morning or evening", detail: "UNESCO heritage narrow-gauge train — book return to Barog or Solan." },
  ],
  haridwar: [
    { title: "Ganga Aarti at Har Ki Pauri", time: "6:30 PM (sunset)", detail: "Reach by 5:30 PM for a riverside spot. Buy a leaf-diya to float." },
    { title: "Mansa Devi ropeway", time: "Morning", detail: "Hilltop temple of the wish-granting goddess — 10-minute ropeway up." },
    { title: "Chandi Devi temple", time: "Late morning", detail: "Second Shakti Peeth — ropeway from Gauri Shankar temple." },
    { title: "Rishikesh day trip", time: "Full day", detail: "25 km away — Laxman Jhula, Ram Jhula, Beatles Ashram, rafting in season." },
  ],
  chandigarh: [
    { title: "Rock Garden of Nek Chand", time: "Morning", detail: "40-acre outdoor sculpture park made from recycled waste — truly unique." },
    { title: "Sukhna Lake boating & sunrise", time: "Early morning", detail: "Manmade lake with pedal boats, joggers track, and Sector 1 views." },
    { title: "Capitol Complex (Le Corbusier)", time: "Late morning", detail: "UNESCO World Heritage — Secretariat, High Court, Assembly. ID required." },
    { title: "Sector 17 Plaza shopping", time: "Afternoon", detail: "Pedestrian plaza with Phulkari, Punjabi juttis, and all retail brands." },
  ],
  amritsar: [
    { title: "Golden Temple darshan + langar", time: "Early morning + any time", detail: "Enter via Ghanta Ghar. Langar seats 100,000 people daily — humbling experience." },
    { title: "Jallianwala Bagh memorial", time: "11:00 AM", detail: "Historic 1919 massacre site adjacent to Golden Temple. Bullet marks still visible." },
    { title: "Wagah Border ceremony", time: "4:30–6:00 PM", detail: "Daily flag-lowering with Pakistan — 30 km drive, arrive by 3:30 PM." },
    { title: "Partition Museum", time: "Morning", detail: "World's first museum on 1947 partition — emotionally heavy but essential." },
    { title: "Kesar Da Dhaba & amritsari kulcha crawl", time: "Meal times", detail: "Iconic Punjabi thali at Kesar Da Dhaba, kulchas at Kulcha Land." },
  ],
  udaipur: [
    { title: "Lake Pichola boat ride at sunset", time: "5:00–6:30 PM", detail: "Boat from Rameshwar Ghat to Jag Mandir — City Palace glows gold." },
    { title: "City Palace museum", time: "Morning", detail: "Largest royal complex in Rajasthan — 4 hours to see properly." },
    { title: "Sajjangarh Monsoon Palace at sunset", time: "Evening", detail: "Hilltop palace with 360° views of Udaipur and the Aravallis." },
    { title: "Saheliyon Ki Bari garden", time: "Afternoon", detail: "Royal ladies' garden with lotus pools, fountains and marble elephants." },
    { title: "Shilpgram craft village", time: "Evening", detail: "Living tribal village with folk dances and Rajasthani handicrafts." },
  ],
  jodhpur: [
    { title: "Mehrangarh Fort", time: "Morning", detail: "Towering sandstone fort with museum, zipline, and panoramic blue-city view." },
    { title: "Blue city walk in old Jodhpur", time: "Late morning", detail: "Indigo-painted houses of the Brahmin quarter below the fort — photographer's dream." },
    { title: "Clock Tower & Sardar Market", time: "Evening", detail: "Bangles, spices, Marwari sweets. Try makhaniya lassi at Shri Mishrilal." },
    { title: "Jaswant Thada cenotaph", time: "Afternoon", detail: "Marble royal cenotaph nicknamed 'the Taj of Marwar' — quieter than the fort." },
  ],
  varanasi: [
    { title: "Subah-e-Banaras boat ride", time: "5:00–7:30 AM", detail: "Sunrise boat from Assi Ghat — sadhus bathing, temple bells, the whole ancient scene." },
    { title: "Ganga Aarti at Dashashwamedh Ghat", time: "6:30 PM", detail: "Grand evening aarti with brass lamps, chants, conches. Book a boat seat for the best view." },
    { title: "Kashi Vishwanath Corridor", time: "Morning", detail: "Newly renovated — one of 12 Jyotirlingas. Mobile phones not allowed inside." },
    { title: "Sarnath (Buddha's first sermon site)", time: "Afternoon", detail: "10 km away — stupa, archaeology museum, and meditative ambience." },
    { title: "Banarasi silk shopping + kachori gali", time: "Evening", detail: "Real silk at Chowk & Vishwanath Gali. Breakfast on kachori-sabzi." },
  ],
  lucknow: [
    { title: "Bara Imambara & Bhool Bhulaiya", time: "Morning", detail: "Nawab-era marvel with a labyrinth — take a guide so you don't get lost." },
    { title: "Chota Imambara & Hussainabad Clock Tower", time: "Late morning", detail: "Quieter, equally ornate. Clock tower is tallest in India." },
    { title: "Rumi Darwaza", time: "Photo stop", detail: "60-ft Awadhi gateway, best photographed from the Hussainabad side." },
    { title: "Tunday Kababi & Awadhi food crawl", time: "Meals", detail: "Galouti kababs at Tunday, biryani at Idrees, kulfi at Prakash." },
    { title: "Hazratganj & Chowk shopping", time: "Evening", detail: "Chikankari embroidery straight from the tailors of Chowk." },
  ],
  dehradun: [
    { title: "Robber's Cave (Guchhupani)", time: "Morning", detail: "Natural cave with a stream running through — wade through ankle-deep water." },
    { title: "Sahastradhara springs", time: "Late morning", detail: "Sulphur springs with ropeway. Avoid weekends — gets crowded." },
    { title: "FRI (Forest Research Institute)", time: "Afternoon", detail: "Colonial-era greco-roman architecture in a forest setting — ID required." },
    { title: "Mussoorie day trip", time: "Full day", detail: "35 km hill station — Mall Road, Kempty Falls, Gun Hill ropeway." },
  ],
  rishikesh: [
    { title: "Ganga Aarti at Parmarth Niketan", time: "6:30 PM", detail: "More spiritual and intimate than Haridwar's — children singing in the ashram." },
    { title: "White water rafting", time: "9 AM–2 PM (Sep–Jun)", detail: "Shivpuri to Rishikesh stretch — Grade III rapids, safe for beginners." },
    { title: "Beatles Ashram (Chaurasi Kutia)", time: "Morning", detail: "Where the Beatles wrote the White Album — now covered in psychedelic murals." },
    { title: "Laxman Jhula & Ram Jhula walks", time: "Anytime", detail: "Iron suspension bridges with ashrams, cafés, and monkeys on both sides." },
    { title: "Neelkanth Mahadev day trip", time: "Half day", detail: "32 km uphill — important Shiva temple at 1,675 m elevation." },
  ],
  delhi: [
    { title: "Red Fort & Chandni Chowk", time: "Morning", detail: "Mughal fort + Old Delhi food walk — parathas, kebabs, jalebi." },
    { title: "Qutub Minar complex", time: "Afternoon", detail: "UNESCO — 73 m minaret + iron pillar that hasn't rusted in 1,600 years." },
    { title: "India Gate & Kartavya Path", time: "Evening", detail: "War memorial with the new ceremonial road. Food stalls at night." },
    { title: "Humayun's Tomb", time: "Morning", detail: "Prototype for Taj Mahal — Mughal garden tomb." },
    { title: "Akshardham Temple", time: "Late afternoon", detail: "Massive modern Hindu complex with boat ride, IMAX film. Closed Mondays." },
  ],
  mathura: [{ title: "Krishna Janmabhoomi", time: "Morning", detail: "Birthplace of Krishna. Security strict — no phones." }, { title: "Dwarkadhish temple", time: "Afternoon", detail: "Vibrant Pushtimarg sect temple." }],
  vrindavan: [{ title: "Banke Bihari temple darshan", time: "Early morning", detail: "The chanting and chaos are the point — arrive before 7 AM." }, { title: "Prem Mandir & ISKCON", time: "Evening", detail: "Modern temple with musical fountains." }],
  jaisalmer: [{ title: "Sam sand dunes + camel safari", time: "4:00 PM onwards", detail: "Sunset camel ride + Rajasthani folk dinner at a desert camp." }, { title: "Jaisalmer Fort (Sonar Quila)", time: "Morning", detail: "Living fort — 3,000 people still inside. Climb for fort-top sunset view." }, { title: "Patwon Ki Haveli", time: "Afternoon", detail: "Ornate sandstone haveli complex of a wealthy Jain trader." }],
  ayodhya: [{ title: "Ram Janmabhoomi Mandir", time: "Morning", detail: "Newly consecrated — book darshan slot online to skip queues." }, { title: "Hanuman Garhi temple", time: "Afternoon", detail: "76 steps up to this important Hanuman temple." }, { title: "Saryu River Aarti at Naya Ghat", time: "Evening", detail: "Grand evening aarti along the Saryu." }],
  prayagraj: [{ title: "Triveni Sangam boat ride", time: "Morning", detail: "Confluence of Ganga, Yamuna, and mythical Saraswati." }, { title: "Allahabad Fort & Akshayavat", time: "Afternoon", detail: "Mughal fort with the immortal banyan tree inside." }],
  nainital: [{ title: "Naini Lake boating", time: "Morning", detail: "Pedal / row boats on the emerald lake. Mall Road runs alongside." }, { title: "Naina Devi temple", time: "Late morning", detail: "Hilltop Shakti Peeth with lake view." }, { title: "Snow View Point (ropeway)", time: "Afternoon", detail: "2,270 m view of Nanda Devi peaks on clear days." }],
  mussoorie: [{ title: "Kempty Falls", time: "Morning", detail: "15 km from Mall Road — waterfall you can bathe in." }, { title: "Gun Hill ropeway + Mall Road", time: "Evening", detail: "Second-highest peak in Mussoorie — sunset panorama." }, { title: "Landour Char Dukan", time: "Breakfast", detail: "Ruskin Bond country — pancakes, maggi, and hill-station coffee." }],
  mcleodganj: [{ title: "Tsuglagkhang (Dalai Lama temple)", time: "Morning", detail: "Tibetan main temple and monastery. Check for Dalai Lama teaching dates." }, { title: "Bhagsunag waterfall + café trail", time: "Afternoon", detail: "3 km walk past Shiva temple to the falls — cafés all along the trail." }, { title: "Triund trek", time: "Full day", detail: "9 km moderate trek to 2,875 m ridge — overnight camping possible." }],
  dharamshala: [{ title: "HPCA Cricket Stadium", time: "Anytime", detail: "World's most scenic cricket ground — Dhauladhar range as backdrop." }, { title: "Norbulingka Institute", time: "Half day", detail: "Tibetan arts preservation campus — beautiful gardens and craft workshops." }],
  kasol: [{ title: "Parvati river walk", time: "Morning", detail: "Pine forest + rushing Parvati river — cafés every 100 m." }, { title: "Manikaran Gurudwara hot springs", time: "Afternoon", detail: "Natural sulphur springs used to cook langar rice." }, { title: "Tosh village trek", time: "Half day", detail: "4 km moderate hike from Barshaini to Tosh — snow views in winter." }],
  dalhousie: [{ title: "Khajjiar (Mini Switzerland)", time: "Full day", detail: "24 km — green meadow surrounded by deodars. Horse rides and paragliding." }, { title: "Panchpula & Dainkund peak", time: "Half day", detail: "Waterfall + highest peak in Dalhousie with ridge walk." }],
  corbett: [{ title: "Dhikala jeep safari", time: "Dawn / dusk", detail: "Premier safari zone — high tiger-sighting probability. Book 45 days ahead." }, { title: "Bijrani & Jhirna zones", time: "Morning safaris", detail: "Easier permits, good for leopards and elephants." }, { title: "Corbett Waterfall + Garjia Devi temple", time: "Afternoon", detail: "60 ft waterfall + riverside temple." }],
  lansdowne: [{ title: "Tip-in-Top viewpoint", time: "Morning", detail: "Panoramic Himalayan view — 10 minutes from town." }, { title: "Bhulla Tal boating", time: "Afternoon", detail: "Artificial lake built by Garhwal Rifles — family-friendly." }],
  "mount abu": [{ title: "Dilwara Jain temples", time: "Morning", detail: "12th-century marble masterpieces — open for non-Jains 12–6 PM only." }, { title: "Nakki Lake boating", time: "Afternoon", detail: "Only hill-station lake in Rajasthan — pedal boats and food stalls." }, { title: "Sunset Point", time: "Evening", detail: "5-minute walk from Nakki Lake — panoramic Aravalli sunset." }],
  pushkar: [{ title: "Brahma Temple + Pushkar Lake", time: "Morning", detail: "Only major Brahma temple in India — sacred ghats around the lake." }, { title: "Savitri Mata temple ropeway", time: "Late morning", detail: "Hilltop temple with sunrise / panoramic views." }],
  ajmer: [{ title: "Dargah Sharif ziyarat", time: "Morning", detail: "Sufi shrine of Khwaja Moinuddin Chishti — all faiths welcome." }, { title: "Ana Sagar Lake", time: "Afternoon", detail: "12th-century artificial lake with Daulat Bagh gardens." }],
  noida: [{ title: "Akshardham Temple (Delhi border)", time: "Half day", detail: "Massive temple complex just across the Yamuna." }, { title: "Worlds of Wonder / DLF Mall of India", time: "Full day", detail: "Amusement park + India's largest mall." }],
  gurgaon: [{ title: "Cyber City restaurant hop", time: "Evening", detail: "Hauz Khas-level nightlife in a corporate park." }, { title: "Kingdom of Dreams", time: "Half day", detail: "Live Bollywood theatre + craft village." }],

  // Week 39 corridors (Jul 2026)
  ghaziabad: [{ title: "Dudheshwar Nath Mandir", time: "Morning", detail: "Ancient Shiva temple in the old city — busiest on Mondays and through Shravan." }, { title: "City Forest, Rajnagar Extension", time: "Evening", detail: "Large green belt along the Hindon with walking trails and boating." }],
  faridabad: [{ title: "Surajkund", time: "Half day", detail: "10th-century Tomar-era reservoir; in February the Surajkund Crafts Mela takes over the site." }, { title: "Raja Nahar Singh Palace, Ballabgarh", time: "2-3 hours", detail: "Restored 18th-century palace of the Jat ruler, now a heritage complex." }],
  kurukshetra: [{ title: "Brahma Sarovar", time: "Morning", detail: "Vast sacred tank at the heart of Kurukshetra — the aarti and the Gita Jayanti fair draw huge crowds." }, { title: "Jyotisar", time: "Afternoon", detail: "The banyan-shaded spot where Krishna is believed to have delivered the Bhagavad Gita to Arjuna." }],
  panipat: [{ title: "Kala Amb battlefield memorial", time: "2-3 hours", detail: "Marks the site of the Third Battle of Panipat in 1761, with a memorial pillar and museum." }, { title: "Kabuli Bagh Mosque", time: "1-2 hours", detail: "Built by Babur after the First Battle of Panipat in 1526 — one of the oldest Mughal structures in India." }],
  karnal: [{ title: "Karna Lake", time: "Half day", detail: "Highway-side lake complex named after Karna of the Mahabharata — boating, gardens and a restaurant." }, { title: "Karnal Old Fort & Cantonment Church Tower", time: "2-3 hours", detail: "Ruined fort mound plus the colonial-era church tower in the old cantonment." }],
  ludhiana: [{ title: "Maharaja Ranjit Singh War Museum", time: "Morning", detail: "Sikh military history with tanks, aircraft and dioramas of India's major battles." }, { title: "Chaura Bazaar hosiery shopping", time: "Evening", detail: "Ludhiana is India's knitwear capital — woollens and hosiery straight from the mills." }],
  jalandhar: [{ title: "Devi Talab Mandir", time: "Morning", detail: "Ancient Shakti Peeth built around a sacred tank, with a modern Amarnath-cave replica." }, { title: "Sports goods & leather market", time: "Afternoon", detail: "Jalandhar supplies cricket bats, footballs and leather goods worldwide — buy at factory rates." }],
  patiala: [{ title: "Qila Mubarak & Sheesh Mahal", time: "Half day", detail: "The royal fort complex of the Patiala house, with its mirrored palace and museum." }, { title: "Patiala salwar & jutti shopping", time: "Evening", detail: "Adalat Bazaar for the original Patiala salwar, phulkari dupattas and embroidered juttis." }],
  bathinda: [{ title: "Qila Mubarak", time: "2-3 hours", detail: "Towering brick fort said to be over a thousand years old — where Razia Sultana was imprisoned." }, { title: "Takht Sri Damdama Sahib, Talwandi Sabo", time: "Half day", detail: "One of the five Takhts of Sikhism, about 28 km away, where Guru Gobind Singh compiled the Guru Granth Sahib." }],
  gorakhpur: [{ title: "Gorakhnath Temple", time: "Morning", detail: "Seat of the Nath sect that gave the city its name — the Khichdi Mela here draws lakhs in January." }, { title: "Geeta Press & Ramgarh Tal", time: "Afternoon", detail: "The world's largest publisher of Hindu scriptures, then a lakeside evening at Ramgarh Tal." }],
  jhansi: [{ title: "Jhansi Fort & Rani Mahal", time: "Morning", detail: "Rani Lakshmibai's hilltop fort and her palace in the town below — the 1857 story told on site." }, { title: "Orchha day trip", time: "Half day", detail: "Only 18 km away — Jehangir Mahal, Raja Ram Temple and the royal cenotaphs on the Betwa." }],
  bodhgaya: [{ title: "Mahabodhi Temple & the Bodhi Tree", time: "Early morning", detail: "UNESCO site where the Buddha attained enlightenment — quietest and most atmospheric at dawn." }, { title: "Great Buddha Statue & monastery circuit", time: "Afternoon", detail: "The 80-ft statue plus the Thai, Bhutanese, Japanese and Tibetan monasteries, each in its own national style." }],
  gaya: [{ title: "Vishnupad Temple", time: "Morning", detail: "Built around a footprint said to be Vishnu's, on the bank of the Falgu river." }, { title: "Pind Daan at the Falgu ghats", time: "Morning", detail: "Gaya is the principal site in India for ancestral rites, especially during Pitru Paksha." }],
  sarnath: [{ title: "Dhamek Stupa & the Deer Park", time: "Morning", detail: "Where the Buddha preached his first sermon — the excavated monastery ruins surround the stupa." }, { title: "Sarnath Archaeological Museum", time: "2-3 hours", detail: "Home to the Ashoka Lion Capital, the original of India's national emblem. Closed Fridays." }],
  chitrakoot: [{ title: "Ramghat & the Mandakini aarti", time: "Evening", detail: "Boat ride on the Mandakini followed by the riverside aarti — Rama is said to have spent years of exile here." }, { title: "Kamadgiri parikrama", time: "Half day", detail: "5 km barefoot circuit around the forested hill, with Gupt Godavari caves nearby." }],
  nathdwara: [{ title: "Shrinathji Temple darshan", time: "Morning", detail: "The most important Pushtimarg shrine — darshan opens in timed slots, so check the schedule before arriving." }, { title: "Statue of Belief (Vishwas Swaroopam)", time: "Afternoon", detail: "369-ft Shiva statue, among the tallest in the world, with viewing galleries inside." }],
  bharatpur: [{ title: "Keoladeo National Park", time: "Early morning", detail: "UNESCO wetland and India's finest bird sanctuary — hire a cycle-rickshaw guide, they know every nest." }, { title: "Lohagarh Fort & Deeg Palace", time: "Afternoon", detail: "The 'iron fort' the Marathas and British never took, plus the water palace at Deeg 32 km away." }],
  alwar: [{ title: "Bala Quila & City Palace", time: "Morning", detail: "Hilltop fort above the town, with the City Palace and Moosi Maharani Chhatri at its foot." }, { title: "Sariska Tiger Reserve", time: "Half day", detail: "35 km away — jeep safaris through Aravalli scrub forest, plus the Pandupol and Kankwari ruins." }],
  neemrana: [{ title: "Neemrana Fort Palace", time: "Half day", detail: "15th-century hilltop fort restored into a heritage hotel — non-residents can visit for a day fee." }, { title: "Flying Fox zipline & Neemrana Baoli", time: "2-3 hours", detail: "Five ziplines over the fort's ramparts, and a nine-storey stepwell just below the village." }],
  bundi: [{ title: "Bundi Palace & Chitrashala", time: "Morning", detail: "Rambling palace under Taragarh Fort, famous for the blue-green Bundi school murals in the Chitrashala." }, { title: "Raniji ki Baori stepwell", time: "Afternoon", detail: "46 m deep 17th-century stepwell with carved arches — one of dozens scattered across the old town." }],
  mandawa: [{ title: "Shekhawati haveli walk", time: "Morning", detail: "Merchant havelis painted floor to roof with frescoes — Murmuria, Goenka and Hanuman Prasad are the finest." }, { title: "Mandawa Castle", time: "Afternoon", detail: "18th-century fort in the middle of town, now a heritage hotel with an antique-filled courtyard." }],
  kumbhalgarh: [{ title: "Kumbhalgarh Fort & the Great Wall of India", time: "Half day", detail: "UNESCO fort ringed by 36 km of wall, second only to the Great Wall of China. Stay for the evening light show." }, { title: "Kumbhalgarh Wildlife Sanctuary & Ranakpur", time: "Full day", detail: "Leopard and wolf country, with the marble Ranakpur Jain temple and its 1,444 carved pillars 50 km away." }],
  gulmarg: [{ title: "Gulmarg Gondola", time: "Morning", detail: "Two-stage cable car to Apharwat Peak at 3,979 m — one of the highest in the world. Book the phase-2 ticket early." }, { title: "Skiing or the Gulmarg golf course", time: "Full day", detail: "World-class powder skiing December to March; in summer the meadow becomes the highest 18-hole golf course in the world." }],
  pahalgam: [{ title: "Betaab Valley & Aru Valley", time: "Half day", detail: "Two meadow valleys off the Lidder — local taxis run a fixed circuit, outside cabs are not allowed in." }, { title: "Chandanwari & the Lidder riverbank", time: "Afternoon", detail: "Base camp of the Amarnath Yatra, with snow bridges that survive into early summer." }],
  sonamarg: [{ title: "Thajiwas Glacier", time: "Half day", detail: "Short pony ride or a 3 km walk from town to the glacier snout — snow lingers well into July." }, { title: "Zoji La viewpoint & the Sindh river", time: "Morning", detail: "The dramatic pass towards Ladakh, plus trout fishing stretches along the Sindh." }],
  auli: [{ title: "Joshimath–Auli ropeway", time: "Morning", detail: "One of Asia's longest cable cars, climbing 4 km over apple orchards and deodar to the ski bowl." }, { title: "Gorson Bugyal meadow walk", time: "Half day", detail: "Easy alpine meadow trek with Nanda Devi, Trishul and Kamet lined up on the skyline." }],
  chopta: [{ title: "Tungnath temple trek", time: "Half day", detail: "3.5 km paved climb to the highest Shiva temple in the world, one of the Panch Kedar." }, { title: "Chandrashila summit at sunrise", time: "Early morning", detail: "Another 1.5 km above Tungnath to 4,000 m — a 300-degree Himalayan panorama on a clear morning." }],
  kausani: [{ title: "Sunrise from Anasakti Ashram", time: "Early morning", detail: "Gandhi wrote his Gita commentary here; the Nanda Devi and Trishul range fills the horizon at dawn." }, { title: "Kausani tea estate", time: "Morning", detail: "Working hillside tea garden with a factory tour and orthodox Kumaon tea to take home." }],
  ranikhet: [{ title: "Jhula Devi Temple & Chaubatia Gardens", time: "Morning", detail: "Temple hung with thousands of votive bells, then apple and apricot orchards with Himalayan views." }, { title: "Kumaon Regimental Centre Museum", time: "Afternoon", detail: "Regimental history in a colonial cantonment; the Upat golf course nearby is one of the highest in Asia." }],
  almora: [{ title: "Kasar Devi Temple", time: "Morning", detail: "Ridge-top temple where Vivekananda meditated, later a magnet for the Crank's Ridge counterculture." }, { title: "Lala Bazaar & Bright End Corner", time: "Evening", detail: "Stone-paved bazaar for bal mithai and singori, then sunset over the Himalaya from Bright End Corner." }],
  mukteshwar: [{ title: "Mukteshwar Dham & Chauli Ki Jali", time: "Morning", detail: "350-year-old Shiva temple on the cliff top, with the sheer rock face beside it used for rappelling." }, { title: "Bhalu Gaad waterfall", time: "Half day", detail: "A 2 km forest walk to a 60 ft fall, past fruit orchards that supply much of Kumaon." }],
  kanatal: [{ title: "Surkanda Devi Temple", time: "Morning", detail: "Shakti Peeth on a 2,750 m peak — a ropeway now covers most of the climb from Kaddukhal." }, { title: "Kodia Jungle camping & Tehri Lake", time: "Half day", detail: "Pine-forest camps around Kanatal, with boating and jet-skiing on Tehri Lake below." }],
  dhanaulti: [{ title: "Eco Park (Amber & Dhara)", time: "Morning", detail: "Twin deodar parks with walking trails, tree huts and zip lines — the reason most people come up here." }, { title: "Deodar walks & Surkanda Devi", time: "Afternoon", detail: "Quiet ridge road walks through old cedar forest, with Surkanda Devi a short drive away." }],
  badrinath: [{ title: "Badrinath Temple & Tapt Kund", time: "Early morning", detail: "One of the Char Dham; pilgrims bathe in the hot sulphur spring below the temple before darshan." }, { title: "Mana village & Vasudhara Falls", time: "Half day", detail: "The last village before Tibet, with Vyas Gufa, Bhim Pul and a 5 km walk to the 400 ft Vasudhara fall." }],
  gangotri: [{ title: "Gangotri Temple & Bhagirath Shila", time: "Morning", detail: "Source shrine of the Ganga on the Bhagirathi, open only from Akshaya Tritiya to Diwali." }, { title: "Gaumukh trek", time: "Full day", detail: "18 km to the snout of the Gangotri glacier, the true source of the Ganga. Forest permit required." }],
  yamunotri: [{ title: "Yamunotri Temple & Surya Kund", time: "Morning", detail: "Pilgrims cook rice in the boiling Surya Kund spring and offer it at the shrine as prasad." }, { title: "Janki Chatti trek", time: "Half day", detail: "6 km climb from Janki Chatti, the last motorable point — ponies and palanquins available." }],
  kufri: [{ title: "Mahasu Peak horse ride", time: "Morning", detail: "The classic Kufri outing — a bridle path up to the peak for Shimla's widest snow-range view." }, { title: "Himalayan Nature Park", time: "Afternoon", detail: "High-altitude zoo with snow leopard, musk deer and the Himalayan monal in deodar enclosures." }],
  chail: [{ title: "Chail Cricket Ground", time: "Morning", detail: "At 2,444 m, the highest cricket ground in the world, carved out of a hilltop by the Maharaja of Patiala." }, { title: "Chail Palace & Wildlife Sanctuary", time: "Afternoon", detail: "The Maharaja's summer palace in cedar forest, with a sanctuary alive with ghoral and pheasant." }],
  khajjiar: [{ title: "Khajjiar meadow & Khajji Nag temple", time: "Half day", detail: "The 'Mini Switzerland' saucer meadow ringed by deodar, with a 12th-century Nag temple at its edge." }, { title: "Kalatop Wildlife Sanctuary", time: "Afternoon", detail: "Dense deodar sanctuary between Khajjiar and Dalhousie, with an easy forest trail to the rest house." }],
  bir: [{ title: "Paragliding from Billing", time: "Morning", detail: "Take-off at Billing 14 km above, landing at Bir — among the best paragliding sites in the world. Best Oct-Nov." }, { title: "Tibetan Colony monasteries", time: "Afternoon", detail: "Chokling and Sherabling monasteries, stupas, and the café strip that has grown up around them." }],
  palampur: [{ title: "Palampur tea gardens", time: "Morning", detail: "Kangra tea estates rolling up to the Dhauladhar — factory visits and tastings at the co-operative." }, { title: "Baijnath Shiva Temple", time: "Afternoon", detail: "13th-century stone temple 16 km away, one of the finest surviving Nagara-style shrines in Himachal." }],
  kangra: [{ title: "Brajeshwari Devi Temple", time: "Morning", detail: "One of the 51 Shakti Peeths, rebuilt after the 1905 earthquake and famous for its wealth in Mughal times." }, { title: "Kangra Fort & Masroor rock-cut temples", time: "Half day", detail: "One of India's oldest forts above the Banganga, plus the 8th-century monolithic temples at Masroor." }],
  kinnaur: [{ title: "Kalpa & the Kinner Kailash view", time: "Early morning", detail: "The Kinner Kailash range turns gold at sunrise straight across the valley from Kalpa." }, { title: "Roghi village & Suicide Point", time: "Afternoon", detail: "Apple-orchard village along a cliff road, with a sheer drop viewpoint over the Sutlej gorge." }],
  sangla: [{ title: "Baspa valley & Kamru Fort", time: "Half day", detail: "Terraced valley of the Baspa, with the timber-and-stone Kamru Fort tower above Sangla village." }, { title: "Batseri village & trout farm", time: "Afternoon", detail: "Traditional Kinnauri wooden houses and a government trout farm on the riverbank." }],
  chitkul: [{ title: "The last village on the Indo-Tibet road", time: "Morning", detail: "End of the motorable Baspa valley — wooden houses, a small ITBP post, and the river running clear beside it." }, { title: "Mathi Devi Temple & Baspa riverbank", time: "Afternoon", detail: "Ornate wooden temple of the village goddess, then the pebbled riverbank most people come to sit on." }],
  "tirthan valley": [{ title: "Trout fishing on the Tirthan", time: "Morning", detail: "Catch-and-release angling on one of India's cleanest trout rivers — local guides arrange permits and rods." }, { title: "Great Himalayan National Park trek", time: "Full day", detail: "UNESCO park entered from Gushaini — Rolla and Shilt are the usual day and overnight targets." }],
  jibhi: [{ title: "Jibhi waterfall & the wooden village", time: "Morning", detail: "Short forest walk to the falls, through a hamlet of traditional Himachali timber-and-slate houses." }, { title: "Jalori Pass, Serolsar Lake & Raghupur Fort", time: "Half day", detail: "Drive to the 3,120 m pass, then walk 5 km to Serolsar Lake or 3 km to the ruined Raghupur Fort." }],
};

export function getThingsToDo(cityName) {
  const key = (cityName || '').toLowerCase().trim();
  return THINGS_TO_DO[key] || [
    { title: `Top attractions of ${cityName}`, time: "Morning", detail: `Explore the landmark monuments, temples and heritage of ${cityName}. Your driver can recommend a custom sightseeing circuit if requested.` },
    { title: `Local cuisine of ${cityName}`, time: "Lunch / Dinner", detail: `Ask your driver for authentic local recommendations — every city has signature dishes worth trying.` },
    { title: `Markets and shopping in ${cityName}`, time: "Evening", detail: `${cityName} has local handicrafts and specialty shopping. Bargain politely at traditional markets.` },
  ];
}

// ─── TRAVEL COMPARISON ─────────────────────
export function getTravelComparison(route) {
  const { from, to, distanceNum = 300, time = "5-6 hours", oneWayFares } = route;
  const sedanFare = oneWayFares?.sedan || '';
  const trainTime = `${Math.round(distanceNum / 60)}-${Math.round(distanceNum / 50)} hours`;
  const busTime = `${Math.round(distanceNum / 50)}-${Math.round(distanceNum / 45)} hours`;
  return [
    { mode: "One-Way Cab (Sedan)", time, cost: sedanFare, pros: "Door-to-door, no luggage limit, flexible stops, AC comfort, private", cons: "Higher per-person cost for solo travellers", best: "2–4 passengers with luggage / family / time-sensitive" },
    { mode: "Train (AC 3-Tier)", time: trainTime, cost: `₹${Math.round(distanceNum * 3)}–₹${Math.round(distanceNum * 4.5)}/person`, pros: "Cheapest for long distances, safe", cons: "Station-to-station only, fixed schedule, booking uncertainty, luggage limits", best: "Solo or couple on a tight budget" },
    { mode: "AC Bus / Volvo", time: busTime, cost: `₹${Math.round(distanceNum * 4)}–₹${Math.round(distanceNum * 6)}/person`, pros: "Budget-friendly, direct intercity", cons: "Fixed route & timing, luggage restrictions, no stops", best: "Solo traveller with minimal luggage" },
    { mode: "Flight (if available)", time: "1-1.5 hours flight + 3 hours airport time", cost: `₹3,500–₹8,000/person (one-way, varies)`, pros: "Fastest for long distances", cons: "Expensive, airport transfers extra, baggage fees", best: "Long distances (600+ km) with light luggage" },
  ];
}

// ─── SEASONAL TIPS ─────────────────────
const HILL_CITIES = ['shimla', 'manali', 'mussoorie', 'nainital', 'dharamshala', 'mcleodganj', 'dalhousie', 'kasol', 'lansdowne', 'mount abu',
  // Week 39 hill corridors (Jul 2026) — these must NEVER get plains advice
  'kufri', 'chail', 'khajjiar', 'bir', 'palampur', 'kangra', 'kinnaur', 'sangla', 'chitkul',
  'tirthan valley', 'jibhi', 'auli', 'chopta', 'kausani', 'ranikhet', 'almora', 'mukteshwar',
  'kanatal', 'dhanaulti', 'gulmarg', 'pahalgam', 'sonamarg'];
// High-altitude Char Dham shrines: seasonal portals — generic hill/plains advice is wrong here.
const HIMALAYAN_SHRINES = ['badrinath', 'kedarnath', 'gangotri', 'yamunotri'];
const DESERT_CITIES = ['jaisalmer', 'jodhpur', 'bikaner', 'pushkar'];
const PLAINS_CITIES = ['delhi', 'agra', 'jaipur', 'lucknow', 'varanasi', 'amritsar', 'chandigarh', 'mathura', 'vrindavan', 'ayodhya', 'prayagraj', 'dehradun', 'haridwar', 'rishikesh'];

export function getSeasonalTips(toCity) {
  const key = (toCity || '').toLowerCase().trim();
  if (HIMALAYAN_SHRINES.includes(key)) {
    return [
      { season: "Portal opening (May–Jun)", tip: `${toCity} temple portals open around Akshaya Tritiya (late April/May). Peak yatra rush — book your cab and stay 2–3 weeks ahead.` },
      { season: "Monsoon (Jul–Aug)", tip: `Highest landslide risk of the year on the yatra highways. Keep 1–2 buffer days; our drivers track BRO/administration road-status updates daily.` },
      { season: "Autumn (Sep–Oct)", tip: `Best window — clear Himalayan views, thinner crowds. Portals close around Diwali/Bhai Dooj, so plan before early November.` },
      { season: "Winter (Nov–Apr)", tip: `Temple closed — the deity moves to its winter seat. Road journeys end at lower towns in this period; plan your darshan for May–October.` },
    ];
  }
  if (HILL_CITIES.includes(key)) {
    return [
      { season: "Summer (Apr–Jun)", tip: `Peak season for ${toCity}. Pleasant 15–25°C. Book 1–2 weeks in advance — rates 10–15% higher.` },
      { season: "Monsoon (Jul–Sep)", tip: `Landslide risk on hill roads. Lush green beauty but book flexible rates. Our drivers check live road status.` },
      { season: "Autumn (Oct–Nov)", tip: `Best season — clear skies, empty roads, and 12–20°C. Ideal for photography and trekking.` },
      { season: "Winter (Dec–Feb)", tip: `Snow possible in ${toCity}. We fit tyre chains and carry blankets. 0–10°C — pack heavy woolens.` },
    ];
  }
  if (DESERT_CITIES.includes(key)) {
    return [
      { season: "Winter (Oct–Mar)", tip: `Peak season. Pleasant 10–25°C — perfect for ${toCity} sightseeing. Book ahead for Pushkar Fair / Jaisalmer Desert Festival.` },
      { season: "Summer (Apr–Jun)", tip: `Extreme heat 40–48°C. Travel early morning or evening. Our cabs carry extra water.` },
      { season: "Monsoon (Jul–Sep)", tip: `Rare rains bring greenery to the desert — off-season discounts and very few crowds.` },
    ];
  }
  return [
    { season: "Winter (Nov–Feb)", tip: `Best time — pleasant 10–22°C. Morning fog on highways, so we advise daylight departures. Book 3–5 days ahead for weekends.` },
    { season: "Summer (Apr–Jun)", tip: `35–45°C peak. Early morning (5–7 AM) or late evening (7–9 PM) departures recommended. Cabs are pre-cooled.` },
    { season: "Monsoon (Jul–Sep)", tip: `Waterlogging possible on some highways. Our drivers check live route conditions. Book flexible tariffs.` },
    { season: "Spring (Feb–Mar) / Autumn (Oct)", tip: `Shoulder season — great weather, lower crowds, best fare availability.` },
  ];
}

// ─── EXTENDED FAQs (auto-generates 6 more based on route data) ─────────────────────
export function getExtendedFaqs(route) {
  const { from, to, distance, time, highway, oneWayFares, distanceNum } = route;
  return [
    { question: `Can I get a child seat for ${from} to ${to} one-way cab?`, answer: `Yes, we provide infant and toddler car seats on request. Please mention while booking — there is no extra charge for standard child seats. Booster seats available for ages 4–8.` },
    { question: `What is the night halt charge if cab stays in ${to}?`, answer: `If the same cab is booked for return or continues next day, a night halt charge of ₹300 applies. For one-way drop, no night halt since vehicle returns empty.` },
    { question: `Can I book ${from} to ${to} one-way cab for late-night pickup?`, answer: `Yes, we operate 24×7 including midnight pickups for flights and medical emergencies. No night surcharge on one-way bookings. GPS-tracked vehicles for safety.` },
    { question: `Do you issue a GST invoice for corporate bookings?`, answer: `Yes, GST-compliant invoices issued on request — just share your company GSTIN at booking. Useful for business travel expense claims.` },
    { question: `What if my flight/train is delayed on a ${from} to ${to} booking?`, answer: `Our drivers track your PNR or flight number in real time. First 60 minutes of wait time is free for airport pickups. No penalty for genuine delays.` },
    { question: `Can 3 or more bags fit in the Sedan for ${from} to ${to}?`, answer: `Sedan (Swift Dzire / Etios) fits 2 large check-in + 1 cabin bag comfortably. For 3+ large bags or group luggage, choose Ertiga (fits 3 large + 2 cabin) or Innova Crysta (4 large + 2 cabin).` },
    { question: `Is the ${oneWayFares?.sedan || '₹3,300'} ${from}–${to} fare all-inclusive?`, answer: `The quoted fare covers vehicle, AC, fuel, driver allowance, and GPS tracking. Toll (~1.8 × per-km add-on), state tax if border is crossed, and parking fees are extra at actual. You pay toll to the driver who handles FASTag.` },
    { question: `Can I change pickup address after booking ${from} to ${to} cab?`, answer: `Yes, pickup can be changed up to 2 hours before the trip at no charge if within the same city. For major changes (different city), fare may be re-quoted.` },
  ];
}

// ─── SEO / CONTENT HELPERS ─────────────────────
export function getWhyOneWaySaves(route) {
  const { from, to, distance, savingsPercent, oneWayFares, roundTripFares } = route;
  const savingsAmount = oneWayFares?.sedan || '';
  return `When you book a traditional round-trip cab from ${from} to ${to}, you pay for ${distance} one way **plus** ${distance} of empty return — even if you are staying in ${to}, flying out, or continuing elsewhere. Our one-way model means you pay only the actual distance you travel. On the ${from} to ${to} route, a round-trip Sedan would cost ${roundTripFares?.sedan || ''} versus just ${oneWayFares?.sedan || ''} one-way — a saving of ${savingsAmount} (${savingsPercent}). That is almost half your travel budget back in your pocket, with zero compromise on vehicle quality or driver experience.`;
}
