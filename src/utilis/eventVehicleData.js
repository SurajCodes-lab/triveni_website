// src/utilis/eventVehicleData.js
// Vehicle-intent landing pages for the events segment.
// Route: /{slug} (top-level), e.g. /luxury-bus-for-events
// Each targets "{vehicle} for events / wedding / corporate" intent and links
// into the event hub + the relevant vehicle segment (bus / tempo / cars).

export const eventVehicles = {
  "luxury-bus-for-events": {
    slug: "luxury-bus-for-events",
    name: "Luxury Bus for Events",
    shortName: "Luxury Bus",
    category: "Bus & Coach",
    seating: "27 – 49 seater",
    accent: "#0891b2", // cyan-600
    image: "/images/bus/49_SEATER_BUS.jpg",
    fallbackImage: "/images/HERO_SECTION_MAIN_PAGE.jpg",
    priceFrom: "₹35/km",
    tagline: "AC coaches for large-scale event guest movement",
    intro:
      "A luxury bus is the most efficient way to move large groups for events — wedding baraat and guest shuttles, corporate conference delegates, concert and festival crowds, or school and college groups. Triveni Cabs operates 27 to 49 seater AC buses and coaches with pushback seats, ample luggage space and experienced drivers, coordinated by a dedicated event manager so hundreds of guests reach the venue together and on time.",
    bestFor: [
      "Wedding guest shuttles between hotels & venue",
      "Corporate conference & MICE delegate transport",
      "Concert & festival crowd shuttles",
      "School, college & institutional event groups",
      "Large pilgrimage & community event movement",
    ],
    specs: [
      ["Seating options", "27, 35, 41 & 49 seater"],
      ["Best group size", "25 – 49 guests per bus"],
      ["Rate", "From ₹35/km (multi-vehicle fleets available)"],
      ["Configuration", "AC, pushback seats, PA system, luggage bay"],
      ["Use cases", "Weddings, conferences, concerts, institutions"],
    ],
    relatedSegment: { label: "See all bus routes & hire", href: "/bus-routes" },
    crossLinks: [
      { label: "Tempo Traveller for Events", href: "/tempo-traveller-for-events" },
      { label: "Luxury Car for Events", href: "/luxury-car-for-events" },
      { label: "Event Transportation Hub", href: "/event-transportation-service" },
    ],
    faqs: [
      {
        question: "How much does a luxury bus for events cost?",
        answer:
          "Luxury event buses start from ₹35/km, with fixed event-day and multi-day packages available. The final price depends on the seater (27–49), number of buses, distances between venues and the event dates. We provide a transparent quote with GST invoice.",
      },
      {
        question: "How many guests can your event buses carry?",
        answer:
          "We operate 27, 35, 41 and 49 seater AC buses. For very large events we run a coordinated multi-bus fleet so the entire guest group moves together, managed by a single event coordinator.",
      },
      {
        question: "Do you provide buses for wedding guest shuttles?",
        answer:
          "Yes. Wedding guest shuttles are one of our most common bookings — we run timed loops between guest hotels and the venue, plus baraat and inter-venue transfers, with a coordinator managing pickups so no guest is left waiting.",
      },
      {
        question: "Are the event buses air-conditioned with a driver?",
        answer:
          "Yes, every event bus is fully air-conditioned and comes with an experienced, verified driver. Fuel is included in the rate; tolls, parking and state taxes are billed at actuals or bundled into an all-inclusive package.",
      },
    ],
  },

  "tempo-traveller-for-events": {
    slug: "tempo-traveller-for-events",
    name: "Tempo Traveller for Events",
    shortName: "Tempo Traveller",
    category: "Tempo Traveller",
    seating: "12 – 26 seater",
    accent: "#2563eb", // blue-600
    image: "/images/tempo/17_seater.jpg",
    fallbackImage: "/images/tempo/17_seater.jpg",
    priceFrom: "₹20/km",
    tagline: "12–26 seater AC tempos for mid-size event groups",
    intro:
      "Tempo travellers are the workhorse of event transport — perfect for mid-size groups that need to travel together in AC comfort. From wedding family and guest movement to corporate team offsites, sangeet and mehendi transfers, and small pilgrimage or college groups, our 12 to 26 seater AC tempo travellers with pushback seats and experienced drivers keep your group together without the cost of a full coach.",
    bestFor: [
      "Wedding family & close-guest movement",
      "Sangeet, mehendi & inter-venue transfers",
      "Corporate team outings & small offsites",
      "VIP / family delegate groups at conferences",
      "Small pilgrimage & college event groups",
    ],
    specs: [
      ["Seating options", "12, 16, 17, 20 & 26 seater"],
      ["Best group size", "10 – 25 guests per vehicle"],
      ["Rate", "From ₹20/km (by seater size)"],
      ["Configuration", "AC, pushback seats, music system, luggage space"],
      ["Use cases", "Weddings, offsites, transfers, small groups"],
    ],
    relatedSegment: {
      label: "See all tempo traveller options",
      href: "/tempo-traveller",
    },
    crossLinks: [
      { label: "Luxury Bus for Events", href: "/luxury-bus-for-events" },
      { label: "Luxury Car for Events", href: "/luxury-car-for-events" },
      { label: "Event Transportation Hub", href: "/event-transportation-service" },
    ],
    faqs: [
      {
        question: "What does a tempo traveller for events cost?",
        answer:
          "Event tempo travellers start from ₹20/km for a 12 seater and scale up to ₹28/km for a 26 seater Maharaja edition. Local event-day packages (8 hours / 80 km) are available. We quote a fixed, GST-invoiced price based on your seater and itinerary.",
      },
      {
        question: "Which tempo traveller size is right for my event?",
        answer:
          "Choose a 12 or 17 seater for family and close-guest movement, a 20 seater for larger groups, and a 26 seater for big family or guest batches. For very large events we combine multiple tempos and buses under one coordinator.",
      },
      {
        question: "Can a tempo traveller handle multi-venue wedding transfers?",
        answer:
          "Yes. Tempo travellers are ideal for ferrying family and guests between mehendi, sangeet and wedding venues. Our coordinator plans the timings so everyone moves smoothly across the event schedule.",
      },
      {
        question: "Is a driver included for event tempo travellers?",
        answer:
          "Yes, every event tempo traveller includes an experienced, verified driver and AC throughout. Fuel is included in the per-km rate; tolls, parking and overnight driver allowance are confirmed upfront.",
      },
    ],
  },

  "luxury-car-for-events": {
    slug: "luxury-car-for-events",
    name: "Luxury Car for Events",
    shortName: "Luxury Car",
    category: "Premium Cars",
    seating: "Sedans & SUVs",
    accent: "#4f46e5", // indigo-600
    image: "/images/car/innova_crysta.jpg",
    fallbackImage: "/images/car/innova_crysta.jpg",
    priceFrom: "₹15/km",
    tagline: "Premium sedans & SUVs for VIPs, bride & groom and speakers",
    intro:
      "When an event needs a touch of class, a luxury car delivers it — the decorated bridal car for the couple's grand entry, premium sedans for VIP speakers and chief guests at corporate events, or comfortable SUVs for immediate family. Triveni Cabs offers well-maintained premium sedans and SUVs (Innova Crysta, Dzire, Ertiga and luxury options) with professional, well-presented chauffeurs for the people who matter most at your event.",
    bestFor: [
      "Decorated bridal & groom cars",
      "VIP speakers & chief guests at corporate events",
      "Immediate family & dignitary transfers",
      "Airport pickups for outstation VIP guests",
      "Photo-shoot & pre-wedding shoot cars",
    ],
    specs: [
      ["Vehicle options", "Dzire, Ertiga, Innova Crysta & luxury cars"],
      ["Best for", "1 – 6 VIP passengers per car"],
      ["Rate", "From ₹15/km (by vehicle class)"],
      ["Configuration", "AC, premium interiors, chauffeur-driven"],
      ["Use cases", "Bridal car, VIPs, family, dignitaries"],
    ],
    relatedSegment: { label: "See wedding car options", href: "/wedding" },
    crossLinks: [
      { label: "Luxury Bus for Events", href: "/luxury-bus-for-events" },
      { label: "Tempo Traveller for Events", href: "/tempo-traveller-for-events" },
      { label: "Event Transportation Hub", href: "/event-transportation-service" },
    ],
    faqs: [
      {
        question: "How much does a luxury car for events cost?",
        answer:
          "Premium event cars start from around ₹15/km depending on the vehicle class (sedan, SUV or luxury car). Decorated bridal cars and full event-day packages are quoted separately. We confirm a fixed, GST-invoiced price upfront.",
      },
      {
        question: "Do you provide a decorated car for the wedding?",
        answer:
          "Yes. We arrange flower-decorated bridal and groom cars for the wedding day, with decoration packages starting from ₹2,000. Vintage and luxury options are available on advance request.",
      },
      {
        question: "Are chauffeurs provided for VIP event cars?",
        answer:
          "Yes, every luxury event car is chauffeur-driven by a professional, well-presented driver. For corporate VIP and dignitary transfers we assign drivers with better English proficiency on request.",
      },
      {
        question: "Can you provide multiple cars for a VIP fleet?",
        answer:
          "Absolutely. For weddings and corporate events we arrange a coordinated fleet of premium cars for family, VIPs and speakers, managed alongside guest buses and tempos under a single event coordinator.",
      },
    ],
  },
};

export const EVENT_VEHICLE_ORDER = [
  "luxury-bus-for-events",
  "tempo-traveller-for-events",
  "luxury-car-for-events",
];

export function getEventVehicle(slug) {
  return eventVehicles[slug] || null;
}

export function getAllEventVehicleSlugs() {
  return EVENT_VEHICLE_ORDER.slice();
}
