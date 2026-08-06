// src/utilis/seaterTempoData.js
// Data for dedicated per-seater Tempo Traveller landing pages.
// Pricing standardised to match the hub (/tempo-traveller) schema & client:
// 12 → ₹20/km, 16 → ₹22/km, 17 → ₹24/km, 20 → ₹26/km, 26 → ₹28/km.
// Each seater has UNIQUE copy (intro, idealFor, faqs) to avoid thin/duplicate content.

export const SEATER_ORDER = ["12", "16", "17", "20", "26"];

export const seaterTempoData = {
  "12": {
    slug: "12-seater-tempo-traveller",
    seats: 12,
    name: "12 Seater Tempo Traveller",
    shortName: "12 Seater",
    model: "Force Traveller 3350",
    perKm: 20,
    localRate: "₹6,000 – ₹7,500 / day",
    localKm: "80 km / 8 hours",
    capacity: "11 passengers + driver",
    luggage: "8–10 large bags",
    image: "/images/tempo/12_seater.jpg",
    accent: "#2563eb", // blue
    popular: false,
    premium: false,
    tagline: "Best value AC tempo traveller for families & small groups",
    intro:
      "The 12 seater tempo traveller is our most-booked AC vehicle for families and friend groups of up to 11 people. It comfortably seats 11 passengers plus the driver, carries 8–10 large bags, and starts at ₹20/km for outstation trips — making it the most economical way for a small group to travel together instead of splitting across two cars. Every 12 seater comes fully air-conditioned with push-back seats, a music system, charging points, and an experienced driver included.",
    idealFor: [
      "Family trips & weekend getaways (up to 11 people)",
      "Small friend groups to Agra, Vrindavan or Jaipur",
      "Airport group pick-ups & drops",
      "Short pilgrimages (Haridwar, Rishikesh, Mathura)",
      "Corporate teams of 8–11 members",
    ],
    specs: [
      ["Seating capacity", "11 passengers + 1 driver"],
      ["Recommended group size", "8 – 11 people"],
      ["Outstation rate", "From ₹20/km (min 250 km/day)"],
      ["Local package", "₹6,000 – ₹7,500 for 80 km / 8 hrs"],
      ["Luggage capacity", "8 – 10 large suitcases"],
      ["Vehicle type", "Force Traveller 3350, AC"],
      ["Best routes", "Delhi–Agra, Delhi–Jaipur, Delhi–Haridwar"],
    ],
    features: [
      "Fully air-conditioned cabin",
      "Comfortable push-back seats",
      "Music system & charging points",
      "Ample roof + rear luggage space",
      "Experienced, verified driver included",
      "GST invoice on request",
    ],
    routes: [
      "delhi-to-agra",
      "delhi-to-jaipur",
      "delhi-to-haridwar",
      "delhi-to-rishikesh",
      "delhi-to-vrindavan",
      "delhi-to-nainital",
    ],
    comparison:
      "Need room for more guests or luggage? Step up to the 16 or 17 seater. Travelling with just 4–6 people? An Innova Crysta or Ertiga may work out cheaper.",
    faqs: [
      {
        question: "How much does a 12 seater tempo traveller cost per km?",
        answer:
          "A 12 seater tempo traveller starts at ₹20/km for outstation trips with a minimum of 250 km per day. Local same-city packages are ₹6,000–₹7,500 for 80 km / 8 hours. Tolls, parking, state tax and the driver allowance for overnight trips are charged at actuals and quoted upfront.",
      },
      {
        question: "How many people can sit in a 12 seater tempo traveller?",
        answer:
          "A 12 seater seats 11 passengers comfortably plus the driver. It is ideal for a family or friend group of 8 to 11 people who want to travel together with room for 8–10 large bags.",
      },
      {
        question: "Is the 12 seater tempo traveller air-conditioned?",
        answer:
          "Yes. Every 12 seater tempo traveller is fully air-conditioned with push-back seats, a music system, and charging points. AC runs throughout the journey including on hill routes.",
      },
      {
        question: "Can a 12 seater tempo traveller go to hill stations?",
        answer:
          "Yes. The 12 seater is well-suited to hill routes like Shimla, Manali, Mussoorie and Nainital, and our drivers are experienced on mountain roads. For very steep last-mile stretches we will advise the best approach.",
      },
      {
        question: "Is a driver included with the 12 seater?",
        answer:
          "Yes, an experienced, verified driver is included in every 12 seater booking. Fuel is also included in the per-km rate. For overnight trips a driver allowance of ₹400–₹600 per night applies.",
      },
    ],
  },

  "16": {
    slug: "16-seater-tempo-traveller",
    seats: 16,
    name: "16 Seater Tempo Traveller",
    shortName: "16 Seater",
    model: "Force Traveller 4020",
    perKm: 25,
    localRate: "₹7,500 – ₹8,500 / day",
    localKm: "80 km / 8 hours",
    capacity: "15 passengers + driver",
    luggage: "10–12 large bags",
    image: "/images/tempo/16_seater.jpg",
    accent: "#16a34a", // green
    popular: false,
    premium: false,
    tagline: "Spacious AC tempo traveller for extended families & teams",
    intro:
      "The 16 seater tempo traveller bridges the gap between the compact 12 seater and the popular 17 seater. It seats 15 passengers plus driver with extra room for luggage, making it the right pick for an extended family, a joint-family pilgrimage, or a small office team. Starting at ₹22/km outstation, it offers more legroom and luggage space than a 12 seater for a small step up in price, with full AC, push-back seats and a verified driver included.",
    idealFor: [
      "Extended / joint families of 12–15",
      "Small corporate teams & offsites",
      "Pilgrimage groups (Haridwar, Ayodhya, Vaishno Devi)",
      "School & college small-batch trips",
      "Multi-day Rajasthan and Himachal tours",
    ],
    specs: [
      ["Seating capacity", "15 passengers + 1 driver"],
      ["Recommended group size", "12 – 15 people"],
      ["Outstation rate", "From ₹22/km (min 250 km/day)"],
      ["Local package", "₹7,500 – ₹8,500 for 80 km / 8 hrs"],
      ["Luggage capacity", "10 – 12 large suitcases"],
      ["Vehicle type", "Force Traveller 4020, AC"],
      ["Best routes", "Delhi–Jaipur, Delhi–Haridwar, Delhi–Shimla"],
    ],
    features: [
      "Spacious air-conditioned seating",
      "Push-back seats with extra legroom",
      "Large rear luggage cabin",
      "Music system & charging points",
      "Experienced driver & fuel included",
      "GST invoice on request",
    ],
    routes: [
      "delhi-to-jaipur",
      "delhi-to-haridwar",
      "delhi-to-shimla",
      "delhi-to-manali",
      "delhi-to-amritsar",
      "delhi-to-rishikesh",
    ],
    comparison:
      "Carrying 16–17 people or want our most-requested size? The 17 seater is the sweet spot. Smaller group of 8–11? The 12 seater costs less per day.",
    faqs: [
      {
        question: "What is the price of a 16 seater tempo traveller per km?",
        answer:
          "A 16 seater tempo traveller starts at ₹22/km for outstation trips with a 250 km per day minimum. Local packages are ₹7,500–₹8,500 for 80 km / 8 hours. Tolls, parking, state tax and overnight driver allowance are extra and quoted upfront.",
      },
      {
        question: "How many passengers fit in a 16 seater tempo traveller?",
        answer:
          "A 16 seater tempo traveller seats 15 passengers plus the driver. It suits extended families and teams of 12 to 15 people and carries 10–12 large bags with a dedicated rear luggage cabin.",
      },
      {
        question: "What is the difference between a 16 and 17 seater tempo traveller?",
        answer:
          "Both are similar in size; the 17 seater is our most popular and slightly larger configuration with one extra seat and a similar rate (₹24/km vs ₹22/km). For most groups of 14–16 either works — we recommend the size based on your exact passenger and luggage count.",
      },
      {
        question: "Is the 16 seater good for a multi-day trip?",
        answer:
          "Yes. The 16 seater is comfortable for multi-day Rajasthan, Himachal and pilgrimage tours. Multi-day bookings include an overnight driver allowance of ₹400–₹600 per night and apply a 250 km/day minimum.",
      },
      {
        question: "Is a driver and fuel included with the 16 seater?",
        answer:
          "Yes. Every 16 seater tempo traveller booking includes an experienced verified driver and fuel within the per-km rate. AC runs throughout the trip.",
      },
    ],
  },

  "17": {
    slug: "17-seater-tempo-traveller",
    seats: 17,
    name: "17 Seater Tempo Traveller",
    shortName: "17 Seater",
    model: "Force Traveller 4020 (Luxury)",
    perKm: 24,
    localRate: "₹9,000 – ₹10,500 / day",
    localKm: "80 km / 8 hours",
    capacity: "16 passengers + driver",
    luggage: "12–14 large bags",
    image: "/images/tempo/17_seater.jpg",
    accent: "#9333ea", // purple
    popular: true,
    premium: false,
    tagline: "Our most-booked tempo traveller — the group-travel sweet spot",
    intro:
      "The 17 seater tempo traveller is our most popular and most-requested vehicle — the sweet spot for group travel across North India. It seats 16 passengers plus driver, carries 12–14 large bags, and comes with luxury push-back seats and premium interiors. Starting at ₹24/km outstation, it is the default choice for corporate outings, Chardham Yatra groups, weddings, and mid-size family tours where everyone wants to travel together in AC comfort.",
    idealFor: [
      "Corporate outings & team offsites",
      "Chardham Yatra & pilgrimage groups",
      "Mid-size family & friend tours (14–16 people)",
      "Wedding guest pick-up & drop",
      "Himachal, Rajasthan & Uttarakhand circuits",
    ],
    specs: [
      ["Seating capacity", "16 passengers + 1 driver"],
      ["Recommended group size", "13 – 16 people"],
      ["Outstation rate", "From ₹22/km (min 250 km/day)"],
      ["Local package", "₹9,000 – ₹10,500 for 80 km / 8 hrs"],
      ["Luggage capacity", "12 – 14 large suitcases"],
      ["Vehicle type", "Force Traveller 4020 Luxury, AC"],
      ["Best routes", "Chardham, Delhi–Manali, Delhi–Jaipur"],
    ],
    features: [
      "Luxury push-back seats",
      "Premium air-conditioned interiors",
      "Music system & charging points",
      "Large luggage cabin",
      "Hill-route trained driver included",
      "GST invoice on request",
    ],
    routes: [
      "delhi-to-manali",
      "delhi-to-shimla",
      "delhi-to-jaipur",
      "delhi-to-haridwar",
      "delhi-to-nainital",
      "delhi-to-amritsar",
    ],
    comparison:
      "Bigger group or a wedding baraat? Move up to the 20 or 26 seater. Travelling with under 12 people? The 12 seater is more economical.",
    faqs: [
      {
        question: "How much does a 17 seater tempo traveller cost per km?",
        answer:
          "A 17 seater tempo traveller starts at ₹24/km for outstation trips with a 250 km per day minimum. Local same-city packages are ₹9,000–₹10,500 for 80 km / 8 hours. Tolls, parking, state taxes and overnight driver allowance are charged at actuals and confirmed before booking.",
      },
      {
        question: "How many people can travel in a 17 seater tempo traveller?",
        answer:
          "A 17 seater tempo traveller seats 16 passengers plus the driver. It is ideal for groups of 13 to 16 people and carries 12–14 large bags — the most popular size for corporate outings, Chardham Yatra and mid-size family tours.",
      },
      {
        question: "Why is the 17 seater the most popular tempo traveller?",
        answer:
          "The 17 seater hits the sweet spot — it carries a full mid-size group of up to 16 with plenty of luggage room, has luxury push-back seats, and still costs only ₹24/km. It is the right size for most corporate, wedding and pilgrimage groups, which is why it is our most-booked vehicle.",
      },
      {
        question: "Is the 17 seater tempo traveller good for Chardham Yatra?",
        answer:
          "Yes. The 17 seater is one of the most popular vehicles for Chardham Yatra — our hill-route trained drivers handle the Uttarakhand mountain roads, and the size suits joint-family and group pilgrimages. Multi-day packages with overnight driver arrangements are available.",
      },
      {
        question: "Does the 17 seater come with a driver and AC?",
        answer:
          "Yes. Every 17 seater tempo traveller includes an experienced, hill-route trained driver and full air-conditioning, with fuel covered in the per-km rate. Push-back seats and a music system come standard.",
      },
    ],
  },

  "20": {
    slug: "20-seater-tempo-traveller",
    seats: 20,
    name: "20 Seater Tempo Traveller",
    shortName: "20 Seater",
    model: "Force Traveller (Luxury)",
    perKm: 26,
    localRate: "₹9,000 – ₹10,000 / day",
    localKm: "80 km / 8 hours",
    capacity: "19 passengers + driver",
    luggage: "Dedicated rear cabin (16–18 bags)",
    image: "/images/tempo/20_seater.jpg",
    accent: "#ea580c", // orange
    popular: false,
    premium: false,
    tagline: "Large-group AC tempo traveller with LED TV & luggage cabin",
    intro:
      "The 20 seater tempo traveller is built for large tour groups, school excursions and big family functions. It seats 19 passengers plus driver, with a dedicated rear luggage cabin for 16–18 bags, an LED TV and music system for entertainment on long journeys. Starting at ₹26/km outstation, it keeps a sizeable group together in one AC vehicle instead of hiring two smaller tempos — simpler logistics and a better per-person cost for big groups.",
    idealFor: [
      "Large tour & travel groups (17–19 people)",
      "School & college excursions",
      "Corporate events & conferences",
      "Big-family functions & reunions",
      "Multi-day Chardham & Himachal group tours",
    ],
    specs: [
      ["Seating capacity", "19 passengers + 1 driver"],
      ["Recommended group size", "16 – 19 people"],
      ["Outstation rate", "From ₹26/km (min 250 km/day)"],
      ["Local package", "₹9,000 – ₹10,000 for 80 km / 8 hrs"],
      ["Luggage capacity", "Dedicated rear cabin, 16–18 bags"],
      ["Vehicle type", "Force Traveller Luxury, AC + LED TV"],
      ["Best routes", "Chardham, Delhi–Manali, Rajasthan circuit"],
    ],
    features: [
      "LED TV & music system",
      "Fully air-conditioned cabin",
      "Push-back seats for 19",
      "Dedicated rear luggage cabin",
      "Experienced driver & fuel included",
      "GST invoice on request",
    ],
    routes: [
      "delhi-to-manali",
      "delhi-to-shimla",
      "delhi-to-haridwar",
      "delhi-to-jaipur",
      "delhi-to-nainital",
      "delhi-to-amritsar",
    ],
    comparison:
      "Got 20+ guests or a wedding baraat? The 26 seater Maharaja Edition is the next step. Group of 14–16? The popular 17 seater costs less per km.",
    faqs: [
      {
        question: "What is the rent of a 20 seater tempo traveller per km?",
        answer:
          "A 20 seater tempo traveller starts at ₹26/km for outstation trips with a 250 km per day minimum. Local packages are ₹9,000–₹10,000 for 80 km / 8 hours. Tolls, parking, state tax and overnight driver allowance are extra and quoted upfront.",
      },
      {
        question: "How many passengers can a 20 seater tempo traveller hold?",
        answer:
          "A 20 seater tempo traveller seats 19 passengers plus the driver and has a dedicated rear luggage cabin for 16–18 bags. It is ideal for tour groups and school excursions of 16 to 19 people.",
      },
      {
        question: "Does the 20 seater tempo traveller have an LED TV?",
        answer:
          "Yes. The 20 seater comes with an LED TV and music system for entertainment on long journeys, along with push-back seats and full air-conditioning throughout the cabin.",
      },
      {
        question: "Is a 20 seater good for a school trip or corporate event?",
        answer:
          "Yes. The 20 seater is a popular choice for school excursions, college trips and corporate events because it keeps a large group together in one AC vehicle with luggage space, and we issue a GST invoice on request for business bookings.",
      },
      {
        question: "Can a 20 seater tempo traveller do multi-day outstation tours?",
        answer:
          "Yes. The 20 seater handles multi-day Chardham, Himachal and Rajasthan group tours. Overnight trips include a driver allowance of ₹400–₹600 per night and apply a 250 km/day minimum.",
      },
    ],
  },

  "26": {
    slug: "26-seater-tempo-traveller",
    seats: 26,
    name: "26 Seater Maharaja Tempo Traveller",
    shortName: "26 Seater",
    model: "Force Traveller Maharaja Edition",
    perKm: 28,
    localRate: "₹10,000 – ₹11,000 / day",
    localKm: "80 km / 8 hours",
    capacity: "25 passengers + driver",
    luggage: "Large dedicated luggage cabin (20+ bags)",
    image: "/images/tempo/26_seater.jpg",
    accent: "#ca8a04", // gold/yellow
    popular: false,
    premium: true,
    tagline: "Maharaja Edition — our largest luxury tempo for weddings & events",
    intro:
      "The 26 seater Maharaja Edition is our largest and most luxurious tempo traveller — built for weddings, big pilgrimages and large corporate movements. It seats 25 passengers plus driver with super-luxury recliner seats, premium interiors and an entertainment system, plus a large luggage cabin for 20+ bags. Starting at ₹28/km, it moves an entire baraat, a large guest group or a full team in one comfortable AC vehicle, simplifying logistics for big events.",
    idealFor: [
      "Wedding baraat & guest movement",
      "Large pilgrimage groups (Chardham, Vaishno Devi)",
      "Big corporate teams & conferences",
      "School & college large-batch trips",
      "Family reunions & community events",
    ],
    specs: [
      ["Seating capacity", "25 passengers + 1 driver"],
      ["Recommended group size", "20 – 25 people"],
      ["Outstation rate", "From ₹28/km (min 250 km/day)"],
      ["Local package", "₹10,000 – ₹11,000 for 80 km / 8 hrs"],
      ["Luggage capacity", "Large cabin, 20+ bags"],
      ["Vehicle type", "Force Traveller Maharaja Edition, AC"],
      ["Best routes", "Weddings, Chardham, large group tours"],
    ],
    features: [
      "Super-luxury recliner seats",
      "Premium interiors & entertainment system",
      "Fully air-conditioned cabin",
      "Large dedicated luggage cabin",
      "Experienced driver & fuel included",
      "Fleet bookings & GST invoice available",
    ],
    routes: [
      "delhi-to-haridwar",
      "delhi-to-manali",
      "delhi-to-jaipur",
      "delhi-to-amritsar",
      "delhi-to-nainital",
      "delhi-to-shimla",
    ],
    comparison:
      "Group under 20? The 20 seater is more economical. Moving an even larger crowd? Ask us about a multi-vehicle fleet or a 27–49 seater bus.",
    faqs: [
      {
        question: "How much does a 26 seater tempo traveller cost per km?",
        answer:
          "A 26 seater Maharaja tempo traveller starts at ₹28/km for outstation trips with a 250 km per day minimum. Local packages are ₹10,000–₹11,000 for 80 km / 8 hours. Tolls, parking, state tax and overnight driver allowance are charged at actuals and confirmed upfront.",
      },
      {
        question: "How many people fit in a 26 seater tempo traveller?",
        answer:
          "A 26 seater tempo traveller seats 25 passengers plus the driver, with a large luggage cabin for 20+ bags. It is ideal for big groups of 20 to 25 people such as wedding parties, pilgrimages and corporate teams.",
      },
      {
        question: "What is a Maharaja tempo traveller?",
        answer:
          "The 26 seater Maharaja Edition is a premium tempo traveller with super-luxury recliner seats, upgraded interiors and an entertainment system. It offers the highest comfort in our fleet for large groups that want a luxury experience.",
      },
      {
        question: "Is the 26 seater tempo traveller good for a wedding baraat?",
        answer:
          "Yes. The 26 seater is our top choice for wedding baraat and guest movement — it moves a large party in one luxury AC vehicle. Decorated tempo travellers and multi-vehicle fleet bookings for big weddings are available on request.",
      },
      {
        question: "Can you provide more than one 26 seater for a large event?",
        answer:
          "Yes. For weddings, conferences and large pilgrimages we arrange multi-vehicle fleets combining 26 seater tempo travellers and 27–49 seater buses, coordinated for synchronised pick-ups and drops. Share your headcount and we will plan the logistics.",
      },
    ],
  },
};

export function getSeaterData(slug) {
  return Object.values(seaterTempoData).find((s) => s.slug === slug) || null;
}

export function getAllSeaterSlugs() {
  return SEATER_ORDER.map((k) => seaterTempoData[k].slug);
}

// Cross-link list for the "other sizes" section (excludes the current one).
export function getOtherSeaters(currentSlug) {
  return SEATER_ORDER.map((k) => seaterTempoData[k]).filter(
    (s) => s.slug !== currentSlug
  );
}
