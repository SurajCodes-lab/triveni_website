// src/utilis/vehicleTypeData.js
// Data for the three "vehicle type" hub pages built to demo the new design
// system before it is templated across the city-wise SEO landing pages from
// the Triveni Cabs SEO Expansion Proposal.
//
// Conventions mirror src/utilis/seaterTempoData.js:
//   - keyed by type slug
//   - each entry carries the same field set as a seater entry
//     (slug, name, shortName, model, perKm, capacity, luggage, image, accent,
//      tagline, intro, idealFor, specs, features, routes, comparison, faqs)
//   - plus type-level extras (kicker, heroTitle, heroSubtitle, stats,
//     seaters[], usps[], useCases[], cities[], gallery[])
//
// Pricing standardised against the hub (/tempo-traveller) schema & client:
//   Tempo Traveller  -> 12/16/17/20/26 seater
//   Force Urbania    -> 10/12/13/17 seater
//   Maharaja Tempo   -> 12/17 seater (luxury spec)
//
// Images reuse the real fleet photography already in /public/images/tempo.
// Swap with dedicated Force Urbania / Maharaja studio shots when available.

export const VEHICLE_TYPE_ORDER = [
  "tempo-traveller",
  "force-urbania",
  "maharaja-tempo-traveller",
];

// Cities from the SEO Expansion Proposal — reused in the coverage grid +
// internal-linking preview on every type page. Order matches the proposal.
export const VEHICLE_TYPE_CITIES = [
  "Delhi", "Agra", "Jaipur", "Chandigarh", "Shimla", "Dehradun",
  "Haridwar", "Rishikesh", "Lucknow", "Varanasi", "Ahmedabad", "Jodhpur",
  "Udaipur", "Amritsar", "Manali",
];

// High-intent Delhi-origin route slugs from the proposal's final section.
export const VEHICLE_TYPE_ROUTES = [
  "delhi-to-manali",
  "delhi-to-shimla",
  "delhi-to-dharamshala",
  "delhi-to-haridwar",
  "delhi-to-rishikesh",
  "delhi-to-dehradun",
  "delhi-to-agra",
  "delhi-to-jaipur",
  "delhi-to-chandigarh",
  "delhi-to-amritsar",
  "delhi-to-varanasi",
  "delhi-to-ayodhya",
  "delhi-to-vaishno-devi",
  "delhi-to-char-dham",
  "delhi-to-kedarnath",
  "delhi-to-badrinath",
];

const sharedFaqs = [
  {
    question: "How is the fare calculated for group bookings?",
    answer:
      "Pricing is fully transparent: a per-kilometre rate multiplied by the distance travelled, plus driver allowance and toll/parking as actuals. Outstation trips are billed on a round-trip basis. You receive an itemised quote upfront — no hidden charges, no surge multipliers.",
  },
  {
    question: "Are the vehicles air-conditioned and sanitised?",
    answer:
      "Every vehicle in this fleet is fully AC and deep-cleaned before each trip. Seats, handles and high-touch surfaces are sanitised, and fresh linens/blankets are provided for overnight journeys on request.",
  },
  {
    question: "Is an experienced driver included in the rental?",
    answer:
      "Yes. A commercially-licensed, uniformed driver with 5+ years of experience on the route is included in every booking. Drivers know the terrain, fuel stops and safe night-halt points, which matters most on mountain and outstation routes.",
  },
  {
    question: "How do I confirm a booking and what is the advance?",
    answer:
      "Call or WhatsApp us with your route, date and passenger count. We share a written quote; a small advance (typically 20%) confirms the vehicle. The balance is payable on trip completion. The full cancellation policy is shared with the quote.",
  },
];

export const vehicleTypeData = {
  // ===================================================================
  // 1. TEMPO TRAVELLER
  // ===================================================================
  "tempo-traveller": {
    slug: "tempo-traveller",
    type: "Tempo Traveller",
    name: "Tempo Traveller on Rent",
    shortName: "Tempo Traveller",
    model: "Force Traveller 3350 / 4020",
    perKm: 23,
    localRate: "₹6,000 – ₹9,500 / day",
    localKm: "80 km / 8 hours",
    capacity: "12 to 26 passengers",
    luggage: "8–20 large bags",
    image: "/images/tempo/17_seater.jpg",
    accent: "#E07A1F",
    popular: true,
    premium: false,
    vertical: "tempo",

    kicker: "Group travel · 12 to 26 seats",
    heroTitle: "Tempo Traveller on Rent",
    heroSubtitle:
      "The backbone of Indian group travel. Air-conditioned Force Tempo Travellers in 12, 16, 17, 20 and 26 seater configurations — experienced drivers, transparent ₹/km pricing, and a clean fleet that has moved 10,000+ groups across North India.",
    heroImage: "/images/tempo/17_seater.jpg",
    whyChooseTitle: "Why groups book our Tempo Travellers",

    stats: [
      { value: "10,000+", label: "Group trips completed" },
      { value: "50+", label: "Cities served" },
      { value: "4.9★", label: "Average group rating" },
      { value: "24/7", label: "Booking & on-trip support" },
    ],

    seaters: [
      {
        seats: 12, name: "12 Seater", shortName: "12 Seater",
        perKm: 23, capacity: "11 passengers + driver", luggage: "8–10 bags",
        image: "/images/tempo/12_seater.jpg",
        blurb: "Tight-knit families & small corporate teams",
      },
      {
        seats: 16, name: "16 Seater", shortName: "16 Seater",
        perKm: 25, capacity: "15 passengers + driver", luggage: "10–12 bags",
        image: "/images/tempo/16_seater.jpg",
        blurb: "Mid-size wedding & college groups",
      },
      {
        seats: 17, name: "17 Seater", shortName: "17 Seater",
        perKm: 25, capacity: "16 passengers + driver", luggage: "12–14 bags",
        image: "/images/tempo/17_seater.jpg",
        blurb: "The all-rounder for outstation tours",
      },
      {
        seats: 20, name: "20 Seater", shortName: "20 Seater",
        perKm: 28, capacity: "19 passengers + driver", luggage: "14–16 bags",
        image: "/images/tempo/20_seater.jpg",
        blurb: "Large family & pilgrimage batches",
      },
      {
        seats: 26, name: "26 Seater", shortName: "26 Seater",
        perKm: 31, capacity: "25 passengers + driver", luggage: "18–20 bags",
        image: "/images/tempo/26_seater.jpg",
        blurb: "Corporate excursions & big tour groups",
      },
    ],

    usps: [
      { icon: "Users", title: "Right-sized for every group", desc: "From a 12-seater for one family to a 26-seater for a full batch — pick the exact capacity so you never overpay for empty seats." },
      { icon: "Snowflake", title: "Full AC · push-back comfort", desc: "Strong roof-AC, reclining push-back seats, ample legroom and individual charging points keep long outstation drives comfortable." },
      { icon: "Route", title: "Drivers who know the route", desc: "Commercially-licensed drivers with years on Himalayan, Rajasthan and pilgrimage corridors — safer night halts and smarter fuel stops." },
      { icon: "Receipt", title: "Transparent ₹/km pricing", desc: "A written itemised quote before you pay. No surge, no last-minute additions — driver allowance and tolls are spelled out upfront." },
    ],

    useCases: [
      { icon: "Heart", label: "Weddings", desc: "Move baraat & guests together" },
      { icon: "Building2", label: "Corporate", desc: "Offsites & site visits" },
      { icon: "Users", label: "Family Tours", desc: "Multi-gen holidays" },
      { icon: "Mountain", label: "Outstation", desc: "Hill stations & pilgrimage" },
      { icon: "Plane", label: "Airport Transfer", desc: "Group pickup & drop" },
    ],

    features: [
      "Strong roof-mounted AC",
      "Push-back reclining seats",
      "USB charging at every row",
      "Music system + AUX/Bluetooth",
      "Ample luggage roof carrier",
      "First-aid & fire extinguisher",
      "Clean blankets on request",
      "Uniformed, verified driver",
    ],

    gallery: [
      "/images/tempo/12_seater.jpg",
      "/images/tempo/17_seater.jpg",
      "/images/tempo/26_seater.jpg",
    ],

    cities: VEHICLE_TYPE_CITIES,
    routes: VEHICLE_TYPE_ROUTES,

    tagline:
      "The most-booked AC group vehicle in North India — 12 to 26 seater with driver, from ₹23/km.",
    intro:
      "The Tempo Traveller is the backbone of Indian group travel. Force Motors' proven Traveller platform seats 12 to 26 passengers in air-conditioned comfort, with push-back seats, a music system, charging points and an experienced driver included. Whether it is a Delhi–Manali family holiday, a Haridwar pilgrimage, a Rajasthan wedding baraat or a corporate offsite, the right seater tempo keeps the whole group together for a fraction of what multiple cars would cost. Outstation trips start at ₹23/km with transparent, itemised pricing — no surge, no hidden charges.",
    idealFor: [
      "Family & friend groups of 8 to 25",
      "Wedding baraat & guest shuttles",
      "Corporate offsites & site visits",
      "Pilgrimage groups (Haridwar, Rishikesh, Chardham, Vaishno Devi)",
      "College & school excursion batches",
      "Outstation hill-station tours (Manali, Shimla, Mussoorie)",
    ],
    specs: [
      ["Seating capacity", "12, 16, 17, 20 or 26 seater"],
      ["Vehicle model", "Force Traveller 3350 / 4020, AC"],
      ["Outstation rate", "From ₹23/km (min 250 km/day)"],
      ["Local package", "₹6,000 – ₹9,500 for 80 km / 8 hrs"],
      ["Luggage capacity", "8 – 20 large suitcases"],
      ["Driver", "Experienced, verified, uniformed — included"],
      ["Best routes", "Delhi–Manali, Delhi–Jaipur, Delhi–Haridwar"],
    ],
    comparison:
      "Need van-style headroom and captain-seat luxury? Step up to the Force Urbania. Want wide reclining Maharaja seats for a wedding? Choose the Maharaja Tempo Traveller.",
    faqs: [
      ...sharedFaqs,
      {
        question: "Which seater should I pick for a hill station like Manali?",
        answer:
          "For Delhi–Manali or Delhi–Shimla with 12–16 people, the 17-seater is the sweet spot — comfortable on the mountain gradients and easy to park at hotel driveways. For larger batches, the 20 or 26 seater keeps the group together in one vehicle.",
      },
      {
        question: "What is the per km rate for a tempo traveller?",
        answer:
          "Outstation tempo traveller rates start at ₹23/km for the 12 seater and scale to ₹31/km for the 26 seater, with a 250 km/day minimum. Local same-city packages run ₹6,000–₹9,500 for 80 km / 8 hours. Tolls, parking, state tax and driver allowance for overnight trips are charged at actuals and quoted upfront.",
      },
    ],

    meta: {
      title: "Tempo Traveller on Rent — 12 to 26 Seater AC from ₹23/km",
      description:
        "Book AC Tempo Travellers (12, 16, 17, 20, 26 seater) with experienced drivers across Delhi, Agra, Jaipur, Manali & 50+ cities. Transparent ₹/km pricing, 4.9★ rated, 24/7 booking. Call 7668570551.",
      keywords:
        "tempo traveller on rent, tempo traveller hire, 12 seater tempo traveller, 17 seater tempo traveller, 20 seater tempo traveller, 26 seater tempo traveller, AC tempo traveller with driver, tempo traveller for outstation, tempo traveller for wedding, tempo traveller booking, tempo traveller price per km",
    },
  },

  // ===================================================================
  // 2. FORCE URBANIA
  // ===================================================================
  "force-urbania": {
    slug: "force-urbania",
    type: "Force Urbania",
    name: "Force Urbania on Rent",
    shortName: "Force Urbania",
    model: "Force Urbania 2024+",
    perKm: 25,
    localRate: "₹7,500 – ₹11,000 / day",
    localKm: "80 km / 8 hours",
    capacity: "10 to 17 passengers",
    luggage: "10–16 large bags",
    image: "/images/tempo/17_seater.jpg",
    accent: "#C2410C",
    popular: true,
    premium: false,
    vertical: "corporate",

    kicker: "Premium van · 10 to 17 seats",
    heroTitle: "Force Urbania on Rent",
    heroSubtitle:
      "The modern replacement for the old Tempo Traveller. Force Motors' Urbania brings van-style headroom, flat walk-through floors, luxury captain seats and highway-grade suspension — the vehicle corporate clients and premium groups now ask for by name.",
    heroImage: "/images/tempo/17_seater.jpg",
    whyChooseTitle: "Why premium groups upgrade to Urbania",

    stats: [
      { value: "9 variants", label: "10, 12, 13 & 17 seater" },
      { value: "50+", label: "Cities served" },
      { value: "4.9★", label: "Corporate client rating" },
      { value: "24/7", label: "Booking & on-trip support" },
    ],

    seaters: [
      {
        seats: 10, name: "10 Seater", shortName: "10 Seater",
        perKm: 25, capacity: "9 passengers + driver", luggage: "10–12 bags",
        image: "/images/tempo/12_seater.jpg",
        blurb: "VIP & executive small groups",
      },
      {
        seats: 12, name: "12 Seater", shortName: "12 Seater",
        perKm: 27, capacity: "11 passengers + driver", luggage: "12–14 bags",
        image: "/images/tempo/16_seater.jpg",
        blurb: "Premium family & business travel",
      },
      {
        seats: 13, name: "13 Seater", shortName: "13 Seater",
        perKm: 28, capacity: "12 passengers + driver", luggage: "12–14 bags",
        image: "/images/tempo/17_seater.jpg",
        blurb: "The most-booked Urbania layout",
      },
      {
        seats: 17, name: "17 Seater", shortName: "17 Seater",
        perKm: 30, capacity: "16 passengers + driver", luggage: "14–16 bags",
        image: "/images/tempo/20_seater.jpg",
        blurb: "Maximum capacity Urbania",
      },
    ],

    usps: [
      { icon: "Crown", title: "Van-style luxury interior", desc: "High roof, flat floor and wide sliding door make boarding easy. Captain seats with armrests give every passenger business-class legroom." },
      { icon: "Snowflake", title: "Climate control done right", desc: "Rear AC blower with adjustable vents per row keeps the cabin cool even fully loaded on a Delhi–Jaipur summer afternoon." },
      { icon: "Gauge", title: "Built for the highway", desc: "Urbania's heavier chassis and larger tyres ride flatter and quieter than a traditional tempo — meaningfully less fatigue on 8+ hour drives." },
      { icon: "ShieldCheck", title: "The corporate-preferred van", desc: "Preferred for executive transport, delegations and MICE groups where vehicle presentation matters as much as the destination." },
    ],

    useCases: [
      { icon: "Building2", label: "Executive Transport", desc: "Delegations & MICE" },
      { icon: "Plane", label: "Airport Transfer", desc: "Premium group pickup" },
      { icon: "Users", label: "Family Tours", desc: "Comfortable long drives" },
      { icon: "Mountain", label: "Outstation", desc: "Hill stations in comfort" },
      { icon: "Heart", label: "Weddings", desc: "Guest & baraat transport" },
    ],

    features: [
      "High-roof flat-floor cabin",
      "Luxury captain seats with armrests",
      "Rear AC with per-row vents",
      "USB + 12V charging points",
      "Bluetooth music system",
      "Roof luggage space",
      "Reading lights per seat",
      "Uniformed, English-speaking driver",
    ],

    gallery: [
      "/images/tempo/12_seater.jpg",
      "/images/tempo/17_seater.jpg",
      "/images/tempo/20_seater.jpg",
    ],

    cities: VEHICLE_TYPE_CITIES,
    routes: VEHICLE_TYPE_ROUTES,

    tagline:
      "The new-generation Force van — high roof, flat floor, captain seats. The corporate-preferred upgrade from the Tempo Traveller.",
    intro:
      "The Force Urbania is the modern replacement for the old Tempo Traveller. Built on Force Motors' next-generation van platform, it brings a high roof, flat walk-through floor, luxury captain seats and rear climate control — the features corporate clients, delegations and premium families now ask for by name. Available in 10, 12, 13 and 17 seater layouts, the Urbania rides flatter and quieter than a traditional tempo, which means less fatigue on long Delhi–Jaipur, Delhi–Manali or airport-transfer drives. Outstation trips start at ₹25/km with the same transparent, itemised pricing Triveni Cabs is known for.",
    idealFor: [
      "Executive transport & corporate delegations",
      "MICE groups & conference shuttles",
      "Premium airport group transfers",
      "Vip guest & family long-drive tours",
      "Destination wedding guest movement",
      "Hill-station holidays in upgraded comfort",
    ],
    specs: [
      ["Seating capacity", "10, 12, 13 or 17 seater"],
      ["Vehicle model", "Force Urbania 2024+, AC"],
      ["Outstation rate", "₹25–30/km by seater (min 250 km/day)"],
      ["Local package", "₹7,500 – ₹11,000 for 80 km / 8 hrs"],
      ["Luggage capacity", "10 – 16 large suitcases"],
      ["Driver", "Experienced, uniformed, English-speaking — included"],
      ["Best routes", "Delhi–Jaipur, Delhi–Manali, Delhi–Chandigarh"],
    ],
    comparison:
      "On a budget for a large group? The Tempo Traveller is the value workhorse. Want wide reclining seats for a wedding? The Maharaja Tempo is the luxury pick. The Urbania sits between them — premium van comfort at a fair price.",
    faqs: [
      ...sharedFaqs,
      {
        question: "What is the difference between Force Urbania and a Tempo Traveller?",
        answer:
          "The Urbania is the newer-generation Force van with a higher roof, flat walk-through floor, superior captain seats and better highway ride quality. The Tempo Traveller is the proven, value-oriented workhorse. For premium or corporate travel, the Urbania is the upgrade; for budget group travel, the Tempo remains the favourite.",
      },
      {
        question: "What is the per km rate for a Force Urbania?",
        answer:
          "Force Urbania outstation runs ₹25/km for the 10 seater, ₹27/km for the 12 seater, ₹28/km for the 13 seater and ₹30/km for the 17 seater, with a 250 km/day minimum. Local packages run ₹7,500–₹11,000 for 80 km / 8 hours. Driver allowance, tolls and parking are at actuals and quoted upfront.",
      },
    ],

    meta: {
      title: "Force Urbania on Rent — 10/12/13/17 Seater Premium Van",
      description:
        "Hire the new Force Urbania (10, 12, 13, 17 seater) — high-roof luxury van with captain seats, rear AC and highway-grade ride. Delhi, Agra, Jaipur & 50+ cities. Call 7668570551.",
      keywords:
        "force urbania on rent, force urbania rental, luxury force urbania, 10 seater force urbania, 12 seater force urbania, 13 seater force urbania, 17 seater force urbania, urbania tempo traveller, force urbania hire, force urbania price per km, force urbania booking",
    },
  },

  // ===================================================================
  // 3. MAHARAJA TEMPO TRAVELLER
  // ===================================================================
  "maharaja-tempo-traveller": {
    slug: "maharaja-tempo-traveller",
    type: "Maharaja Tempo Traveller",
    name: "Maharaja Tempo Traveller on Rent",
    shortName: "Maharaja Tempo",
    model: "Force Traveller Maharaja spec",
    perKm: 26,
    localRate: "₹9,000 – ₹13,000 / day",
    localKm: "80 km / 8 hours",
    capacity: "12 to 17 passengers",
    luggage: "10–14 large bags",
    image: "/images/tempo/17_seater.jpg",
    accent: "#92400E",
    popular: false,
    premium: true,
    vertical: "wedding",

    kicker: "Luxury seater · royal comfort",
    heroTitle: "Maharaja Tempo Traveller on Rent",
    heroSubtitle:
      "The top of the Tempo range. Maharaja-spec Tempo Travellers pair wide, reclining captain seats with extra legroom, premium upholstery and an ambient cabin — the choice for weddings, corporate events and long family tours where comfort is the point.",
    heroImage: "/images/tempo/17_seater.jpg",
    whyChooseTitle: "Why Maharaja for weddings & corporate events",

    stats: [
      { value: "Maharaja spec", label: "Wide captain seats" },
      { value: "50+", label: "Cities served" },
      { value: "4.9★", label: "Wedding & corporate rating" },
      { value: "24/7", label: "Booking & on-trip support" },
    ],

    seaters: [
      {
        seats: 12, name: "Maharaja 12 Seater", shortName: "Maharaja 12",
        perKm: 26, capacity: "11 passengers + driver", luggage: "10–12 bags",
        image: "/images/tempo/12_seater.jpg",
        blurb: "Royal weddings & VIP family tours",
      },
      {
        seats: 17, name: "Maharaja 17 Seater", shortName: "Maharaja 17",
        perKm: 30, capacity: "16 passengers + driver", luggage: "12–14 bags",
        image: "/images/tempo/17_seater.jpg",
        blurb: "The flagship luxury group vehicle",
      },
    ],

    usps: [
      { icon: "Crown", title: "Maharaja captain seats", desc: "Extra-wide, fully-reclining captain seats with armrests and footrests — designed for guests to actually rest, not just ride." },
      { icon: "Sparkles", title: "Premium ambient cabin", desc: "Plush upholstery, ambient lighting and acoustic lining keep the cabin quiet and elegant — the right arrival for a wedding or delegation." },
      { icon: "Snowflake", title: "Zoned climate control", desc: "Front and rear AC with adjustable vents, so the bride's family and the corporate head-table are both comfortable, on the same trip." },
      { icon: "Heart", title: "Made for milestone events", desc: "Decor-ready, punctual and presentable — booked for weddings, corporate galas and family tours where the vehicle is part of the occasion." },
    ],

    useCases: [
      { icon: "Heart", label: "Weddings", desc: "Baraat & guest transport" },
      { icon: "Building2", label: "Corporate Events", desc: "VIP & gala transport" },
      { icon: "Users", label: "Family Tour", desc: "Multi-gen luxury travel" },
      { icon: "Mountain", label: "Outstation", desc: "Long drives in comfort" },
      { icon: "Crown", label: "Pilgrimage", desc: "Chardham & yatra groups" },
    ],

    features: [
      "Wide reclining Maharaja captain seats",
      "Footrests + armrests",
      "Premium quilted upholstery",
      "Ambient cabin lighting",
      "Front + rear zoned AC",
      "Bluetooth music + AUX",
      "Charging at every seat",
      "Decor-friendly interior",
    ],

    gallery: [
      "/images/tempo/12_seater.jpg",
      "/images/tempo/17_seater.jpg",
      "/images/wedding/luxury_car.jpg",
    ],

    cities: VEHICLE_TYPE_CITIES,
    routes: VEHICLE_TYPE_ROUTES,

    tagline:
      "The top of the Tempo range — wide reclining Maharaja seats, ambient cabin and zoned AC for weddings, corporate events and long luxury tours.",
    intro:
      "The Maharaja Tempo Traveller is the luxury top of the Tempo range. It keeps the dependable Force Traveller platform underneath but upgrades the cabin with extra-wide, fully-reclining captain seats, footrests, premium quilted upholstery, ambient lighting and zoned climate control. It is the vehicle booked for weddings, corporate galas, VIP family tours and long pilgrimage runs where comfort and presentation matter as much as the destination. Outstation trips start at ₹26/km, with the same transparent, itemised pricing Triveni Cabs is known for.",
    idealFor: [
      "Wedding baraat & guest transport",
      "Corporate galas & VIP events",
      "Multi-generation family tours",
      "Long outstation drives in comfort",
      "Chardham & Vaishno Devi pilgrimage groups",
      "Destination wedding guest shuttles",
    ],
    specs: [
      ["Seating capacity", "12 or 17 seater (Maharaja spec)"],
      ["Vehicle model", "Force Traveller Maharaja spec, AC"],
      ["Outstation rate", "From ₹26/km (min 250 km/day)"],
      ["Local package", "₹9,000 – ₹13,000 for 80 km / 8 hrs"],
      ["Luggage capacity", "10 – 14 large suitcases"],
      ["Driver", "Experienced, uniformed — included"],
      ["Best routes", "Weddings in Delhi NCR, Jaipur, Agra, Udaipur"],
    ],
    comparison:
      "Travelling with a large group on a budget? The standard Tempo Traveller is the value pick. Want van-style headroom for executives? The Force Urbania is the upgrade. The Maharaja is the comfort-first choice for milestone events.",
    faqs: [
      ...sharedFaqs,
      {
        question: "Can the Maharaja Tempo be decorated for a wedding?",
        answer:
          "Yes. The interior is decor-friendly and we allow flower/ribbon decoration on the exterior. Share your decor plan and we will coordinate timings so the vehicle is ready, clean and dressed before the baraat departure.",
      },
      {
        question: "What makes a Maharaja Tempo different from a standard Tempo Traveller?",
        answer:
          "The Maharaja spec upgrades the seats to wide, reclining captain seats with footrests and adds premium upholstery, ambient lighting and acoustic lining. Same dependable Force platform underneath — a meaningfully more comfortable cabin for long or formal trips.",
      },
    ],

    meta: {
      title: "Maharaja Tempo Traveller on Rent — Luxury Seater from ₹26/km",
      description:
        "Hire the luxury Maharaja Tempo Traveller with wide reclining captain seats, ambient cabin and zoned AC. Perfect for weddings, corporate events & family tours. 50+ cities. Call 7668570551.",
      keywords:
        "maharaja tempo traveller, luxury maharaja tempo traveller, maharaja tempo traveller on rent, maharaja tempo traveller booking, maharaja tempo traveller for wedding, maharaja tempo traveller for corporate events, maharaja tempo traveller for family tour, maharaja tempo traveller price",
    },
  },
};

export function getVehicleTypeData(slug) {
  return vehicleTypeData[slug];
}

export function getOtherVehicleTypes(currentSlug) {
  return VEHICLE_TYPE_ORDER.map((k) => vehicleTypeData[k]).filter(
    (t) => t.slug !== currentSlug
  );
}

// ---------------------------------------------------------------------------
// Per-seater page data (derived from the type + the seater variant).
// Mirrors the per-seater field set in seaterTempoData.js so the dedicated
// seater pages can be built with the same builder/client pattern.
// ---------------------------------------------------------------------------

export function getVehicleSeaterData(typeSlug, seatsKey) {
  const type = vehicleTypeData[typeSlug];
  if (!type) return undefined;
  const seater = type.seaters.find((s) => String(s.seats) === String(seatsKey));
  if (!seater) return undefined;

  const slug = `${seater.seats}-seater-${type.slug}`;
  const lower = seater.name.toLowerCase();

  const intro =
    `The ${seater.name} is the ${seater.seats}-seater variant of the ${type.type}. ` +
    `It ${seater.blurb.toLowerCase()} — seating ${seater.capacity.toLowerCase()} with room for ${seater.luggage.toLowerCase()}. ` +
    `Like every vehicle in this fleet it is fully air-conditioned with an experienced, verified driver included. ` +
    `Outstation trips start at ₹${seater.perKm}/km on a transparent, itemised quote — no surge, no hidden charges.`;

  const specs = [
    ["Seating capacity", seater.capacity],
    ["Recommended group size", `${Math.max(2, seater.seats - 2)} – ${seater.seats - 1} people`],
    ["Vehicle model", type.model],
    ["Outstation rate", `From ₹${seater.perKm}/km (min 250 km/day)`],
    ["Luggage capacity", seater.luggage],
    ["Air conditioning", "Fully AC, front + rear vents"],
    ["Driver", "Experienced, verified, uniformed — included"],
  ];

  const faqs = [
    ...sharedFaqs,
    {
      question: `How much does the ${seater.name} cost per km?`,
      answer:
        `The ${seater.name} starts at ₹${seater.perKm}/km for outstation trips with a 250 km/day minimum. Tolls, parking, state tax and the driver allowance for overnight trips are charged at actuals and quoted upfront. Local same-city packages are also available.`,
    },
    {
      question: `How many people can the ${seater.name} seat?`,
      answer:
        `The ${seater.name} seats ${seater.capacity.toLowerCase()} and carries ${seater.luggage.toLowerCase()}. It is ideal for ${seater.blurb.toLowerCase()}.`,
    },
  ];

  const title =
    `${seater.name} on Rent ₹${seater.perKm}/km — AC + Driver | Triveni Cabs`;
  const description =
    `Hire a ${lower} (${seater.capacity}) from ₹${seater.perKm}/km. ${type.tagline} AC, experienced driver, transparent pricing. Call 7668570551.`;

  return {
    ...seater,
    slug,
    typeSlug,
    type: type.type,
    typeName: type.name,
    typeShortName: type.shortName,
    typeSlugHref: `/${type.slug}`,
    accent: type.accent,
    vertical: type.vertical,
    premium: type.premium,

    kicker: `${type.type} · ${seater.seats} seats`,
    heroTitle: `${seater.name} on Rent`,
    heroSubtitle: intro,
    heroImage: seater.image,
    whyChooseTitle: `Why book the ${seater.name}`,

    stats: [
      { value: `${seater.seats} seats`, label: seater.capacity },
      { value: `₹${seater.perKm}/km`, label: "Outstation rate" },
      { value: "4.9★", label: "Average rating" },
      { value: "24/7", label: "Booking & support" },
    ],

    usps: type.usps,
    useCases: type.useCases,
    features: type.features,
    cities: type.cities,
    routes: type.routes,
    gallery: type.gallery,

    tagline: seater.blurb,
    intro,
    idealFor: type.idealFor,
    specs,
    comparison: type.comparison,
    faqs,

    otherSeaters: type.seaters
      .filter((s) => String(s.seats) !== String(seatsKey))
      .map((s) => ({ ...s, slug: `${s.seats}-seater-${type.slug}` })),
    otherTypes: getOtherVehicleTypes(typeSlug),

    meta: {
      title,
      description,
      keywords:
        `${seater.name.toLowerCase()}, ${seater.name.toLowerCase()} on rent, ` +
        `${seater.name.toLowerCase()} price, ${seater.name.toLowerCase()} per km, ` +
        `${seater.name.toLowerCase()} hire, ${type.meta.keywords}`,
    },
  };
}

export function getAllVehicleSeaters() {
  const out = [];
  for (const typeSlug of VEHICLE_TYPE_ORDER) {
    const type = vehicleTypeData[typeSlug];
    for (const s of type.seaters) {
      out.push({
        typeSlug,
        seats: s.seats,
        slug: `${s.seats}-seater-${type.slug}`,
        name: s.name,
        perKm: s.perKm,
        image: s.image,
        typeName: type.type,
        typeSlugHref: `/${type.slug}`,
      });
    }
  }
  return out;
}