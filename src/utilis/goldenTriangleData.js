// src/utilis/goldenTriangleData.js
// Golden Triangle tour money pages — main hub + origin variants.
// The classic circuit: Delhi → Agra (Taj Mahal) → Jaipur (Pink City).

const COMMON_INCLUSIONS = [
  "AC vehicle (Sedan / SUV / Innova Crysta / Tempo) with experienced driver",
  "All fuel, tolls, parking and interstate taxes",
  "Driver allowance & night charges",
  "Door-to-door pickup and drop",
  "Flexible day-wise itinerary",
  "24/7 on-trip support",
];

const COMMON_EXCLUSIONS = [
  "Hotel stay & meals (we can arrange on request)",
  "Monument entry tickets & guide fees",
  "Camera/video charges at monuments",
  "Anything not listed under inclusions",
];

export const goldenTriangleTours = {
  "golden-triangle-tour": {
    slug: "golden-triangle-tour",
    origin: "Delhi",
    originSlug: "delhi",
    name: "Golden Triangle Tour",
    h1: "Golden Triangle Tour by Car",
    heroImage: "/images/sightseeing/Agra/Taj_mahal.jpg",
    durationOptions: "3 to 6 days",
    cities: ["Delhi", "Agra", "Jaipur"],
    citySlugs: ["delhi", "agra", "jaipur"],
    priceFrom: 13999,
    tagline:
      "Delhi · Agra · Jaipur — India's most iconic circuit, private car with driver",
    intro:
      "The Golden Triangle is India's most popular tourist circuit — Delhi, Agra and Jaipur — covering the Taj Mahal, Agra Fort, Amber Fort, City Palace, Hawa Mahal, Qutub Minar and India Gate in one seamless private road trip. Triveni Cabs runs the Golden Triangle as a chauffeur-driven car tour: you get a clean AC vehicle, an experienced English-speaking driver who knows every monument and the best photo timings, and a flexible day-wise plan you control. Packages start at ₹13,999 for a 3-day private tour, all-inclusive of fuel, tolls and driver — no surge, no hidden charges.",
    landmarks: [
      "Taj Mahal & Agra Fort (Agra)",
      "Amber Fort, City Palace, Hawa Mahal, Jantar Mantar (Jaipur)",
      "Qutub Minar, India Gate, Lotus Temple, Akshardham (Delhi)",
      "Fatehpur Sikri (en route Agra–Jaipur)",
    ],
    itinerary: [
      { day: 1, title: "Delhi Arrival & Sightseeing", desc: "Pickup from Delhi airport/hotel. Visit Qutub Minar, India Gate, Lotus Temple, Akshardham and the Rashtrapati Bhavan drive. Overnight in Delhi." },
      { day: 2, title: "Delhi → Agra (230 km, Yamuna Expressway)", desc: "Morning drive to Agra. Visit the Taj Mahal at the golden hour, Agra Fort and Mehtab Bagh for Taj sunset views. Overnight in Agra." },
      { day: 3, title: "Agra → Jaipur via Fatehpur Sikri (240 km)", desc: "Drive to Jaipur, stopping at the UNESCO-listed Fatehpur Sikri. Evening at Jaipur's bazaars or Chokhi Dhani. Overnight in Jaipur." },
      { day: 4, title: "Jaipur Sightseeing & Return", desc: "Amber Fort with jeep ride, City Palace, Jantar Mantar, Hawa Mahal and Jal Mahal photo stop. Depart for Delhi (or extend). " },
    ],
    pricing: [
      { name: "3-Day (Sedan)", price: "₹13,999", ideal: "Couples & solo — Dzire/Etios" },
      { name: "4-Day (Ertiga SUV)", price: "₹22,999", ideal: "Families of 4–6" },
      { name: "5–6 Day (Innova Crysta)", price: "₹32,999+", ideal: "Premium & larger groups" },
    ],
    faqs: [
      { q: "What is the Golden Triangle tour?", a: "The Golden Triangle is a tourist circuit connecting Delhi, Agra and Jaipur — three cities forming a triangle on the map, roughly 220–240 km apart. It covers the Taj Mahal, Mughal forts and Rajasthan's royal palaces, and is India's most popular short tour, usually done in 3 to 6 days." },
      { q: "How much does a Golden Triangle tour by car cost?", a: "A private Golden Triangle car tour with Triveni Cabs starts at ₹13,999 for 3 days in a sedan (all-inclusive of fuel, tolls and driver). An Ertiga 4-day package is ₹22,999 and an Innova Crysta 5–6 day package is ₹32,999+. Hotel and monument tickets are separate and can be arranged on request." },
      { q: "How many days do you need for the Golden Triangle?", a: "3 days is the minimum comfortable duration (1 day each loosely in Delhi, Agra and Jaipur). 4–5 days is ideal to enjoy the Taj Mahal at sunrise, Fatehpur Sikri en route, and Jaipur's forts without rushing. 6 days allows add-ons like Ranthambore or Vrindavan." },
      { q: "Is the Taj Mahal closed on any day?", a: "Yes — the Taj Mahal is closed every Friday. We plan the Golden Triangle itinerary so your Agra day never falls on a Friday, ensuring you don't miss the Taj." },
      { q: "Do you provide an English-speaking driver?", a: "Yes. Our Golden Triangle drivers speak English and Hindi, know each monument and the best visiting times, and double as your road guide. Multilingual and certified local guides at monuments can be arranged on request." },
      { q: "Can I customise the Golden Triangle itinerary?", a: "Absolutely. The day-wise plan is flexible — start from your hotel or the airport, add a Taj sunrise, include Fatehpur Sikri, or extend to Ranthambore, Pushkar, Varanasi or Rishikesh. Tell us your dates and interests and we tailor the route." },
    ],
  },

  "golden-triangle-tour-from-chandigarh": {
    slug: "golden-triangle-tour-from-chandigarh",
    origin: "Chandigarh",
    originSlug: "chandigarh",
    name: "Golden Triangle Tour from Chandigarh",
    h1: "Golden Triangle Tour from Chandigarh by Car",
    heroImage: "/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg",
    durationOptions: "4 to 6 days",
    cities: ["Chandigarh", "Delhi", "Agra", "Jaipur"],
    citySlugs: ["chandigarh", "delhi", "agra", "jaipur"],
    priceFrom: 19999,
    tagline:
      "Chandigarh → Delhi → Agra → Jaipur — the classic circuit with a tricity start",
    intro:
      "Start the Golden Triangle right from Chandigarh. Triveni Cabs runs a chauffeur-driven Chandigarh–Delhi–Agra–Jaipur tour that adds the 250 km Chandigarh-to-Delhi leg to the classic Taj Mahal and Pink City circuit — ideal for travellers based in the tricity (Chandigarh, Mohali, Panchkula) or flying into Chandigarh airport (IXC). You get a clean AC vehicle, an experienced English-speaking driver, and a flexible 4–6 day plan covering the Taj Mahal, Agra Fort, Amber Fort, City Palace and Delhi's landmarks. From ₹19,999 all-inclusive of fuel, tolls and driver.",
    landmarks: [
      "Taj Mahal & Agra Fort (Agra)",
      "Amber Fort, City Palace, Hawa Mahal (Jaipur)",
      "Qutub Minar, India Gate, Akshardham (Delhi)",
      "Pickup from Chandigarh, Mohali, Panchkula & IXC airport",
    ],
    itinerary: [
      { day: 1, title: "Chandigarh → Delhi (250 km, NH-44)", desc: "Morning pickup from Chandigarh/Mohali/Panchkula or IXC airport. Drive to Delhi. Evening sightseeing — India Gate, Qutub Minar, Akshardham. Overnight in Delhi." },
      { day: 2, title: "Delhi → Agra (230 km)", desc: "Drive to Agra via the Yamuna Expressway. Taj Mahal, Agra Fort and Mehtab Bagh sunset. Overnight in Agra." },
      { day: 3, title: "Agra → Jaipur via Fatehpur Sikri (240 km)", desc: "Drive to Jaipur via Fatehpur Sikri. Evening at the Pink City bazaars. Overnight in Jaipur." },
      { day: 4, title: "Jaipur Sightseeing & Return", desc: "Amber Fort, City Palace, Jantar Mantar, Hawa Mahal. Return towards Delhi/Chandigarh, or extend the tour." },
    ],
    pricing: [
      { name: "4-Day (Sedan)", price: "₹19,999", ideal: "Couples & solo from Chandigarh" },
      { name: "5-Day (Ertiga SUV)", price: "₹28,999", ideal: "Families of 4–6" },
      { name: "6-Day (Innova Crysta)", price: "₹38,999+", ideal: "Premium & larger groups" },
    ],
    faqs: [
      { q: "How much is a Golden Triangle tour from Chandigarh?", a: "A private Chandigarh Golden Triangle car tour with Triveni Cabs starts at ₹19,999 for 4 days in a sedan, all-inclusive of fuel, tolls and driver. An Ertiga 5-day package is ₹28,999 and an Innova Crysta 6-day package is ₹38,999+. Hotels and monument tickets are separate." },
      { q: "How many days for the Golden Triangle from Chandigarh?", a: "4 days is the comfortable minimum because the Chandigarh–Delhi leg (250 km) adds about half a day each way. 5–6 days is ideal to enjoy Agra, Jaipur and Delhi without rushing." },
      { q: "Do you pick up from Chandigarh airport?", a: "Yes. We pick up from Chandigarh airport (IXC) as well as any address in Chandigarh, Mohali or Panchkula, and we track your flight for airport starts." },
      { q: "Is the Taj Mahal open every day?", a: "The Taj Mahal is closed on Fridays. We schedule your Agra day to avoid Friday so you never miss the Taj on the Chandigarh Golden Triangle tour." },
      { q: "Can the tour start or end in Delhi instead?", a: "Yes — many Chandigarh travellers fly out of Delhi. We can end the tour in Delhi (or start there) and adjust pricing for the one-way Chandigarh leg. Just tell us your plan." },
      { q: "Is an English-speaking driver included?", a: "Yes, every Golden Triangle from Chandigarh tour includes an experienced English- and Hindi-speaking driver who knows the monuments and best visit times. Local certified guides can be arranged on request." },
    ],
  },
};

export const goldenTriangleSlugs = Object.keys(goldenTriangleTours);
export function getGoldenTriangleTour(slug) {
  return goldenTriangleTours[slug] || null;
}
