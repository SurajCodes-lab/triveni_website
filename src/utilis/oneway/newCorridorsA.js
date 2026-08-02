// Week 39 new Delhi one-way corridors (batch A)
function calcFares(distanceKm) {
  const billableKm = Math.max(distanceKm, 300);
  const sedan = billableKm * 11, ertiga = billableKm * 15, innova = billableKm * 18;
  const f = (n) => `₹${n.toLocaleString('en-IN')}`;
  return {
    oneWayFares: { sedan: f(sedan), ertiga: f(ertiga), innova: f(innova) },
    roundTripFares: { sedan: f(sedan*2), ertiga: f(ertiga*2), innova: f(innova*2) },
    savings: f(sedan), savingsPercent: "50%", sedanRaw: sedan,
  };
}

export const newCorridorsA = {
  "delhi-to-ghaziabad": {
    from: "Delhi",
    to: "Ghaziabad",
    distance: "25 km",
    distanceNum: 25,
    time: "1-1.5 hours",
    highway: "NH-9 / NH-24",
    ...calcFares(25),
    highlights: [
      "Short intercity hop from Delhi across into Ghaziabad, one of the NCR's biggest industrial and residential hubs",
      "About 25 km on NH-9 / NH-24, usually 1-1.5 hours depending on Delhi and Ghaziabad traffic",
      "Popular for airport-to-Ghaziabad drops, office commutes, wedding movements and doorstep station transfers",
      "Best used as a local point-to-point transfer or a half-day hire rather than a long outstation drive",
    ],
    popularStops: [],
    bestTime: "Avoid the 9-11 AM and 6-8 PM office peaks on NH-9; a mid-morning or early-afternoon departure keeps the crossing smooth.",
    description: `The Delhi to Ghaziabad one-way cab is a short, everyday NCR transfer — roughly 25 km east across the Delhi border into Ghaziabad, a major Uttar Pradesh industrial and residential city that most people treat as part of greater Delhi. At Triveni Cabs we run this leg for travellers landing at IGI Airport who need a comfortable drop to Ghaziabad, families moving for weddings and functions, professionals commuting between offices, and anyone who wants a clean private car instead of an auto or crowded local option. The usual route runs along NH-9 / NH-24 (the Delhi-Meerut corridor), and the drive takes about 1-1.5 hours, almost entirely dependent on traffic through Akshardham, the Ghazipur stretch and the Ghaziabad approach.

Because Ghaziabad is only about 25 km away, this leg is best understood as a local point-to-point transfer or a half-day hire, and it bills at our 300 km minimum fare — we state that honestly upfront. A genuine 25 km drop would be a very small fare, but a private, air-conditioned car with doorstep pickup, a driver who knows the NCR, and no return charge is worth far more than a shared ride. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, the Ertiga SUV is ₹4,500, and the Innova Crysta is ₹5,400. Toll and parking are extra at actual.

We pick up from anywhere in Delhi — IGI Airport with flight tracking, any hotel, home or office address, and the major railway stations — and drop anywhere in Ghaziabad, including Raj Nagar, Indirapuram, Vaishali, Kaushambi, Vasundhara and the industrial areas. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver. Call or WhatsApp 7668570551 for a confirmed upfront fare with no surge and no hidden kilometres.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Ghaziabad cost?", answer: "A one-way cab from Delhi to Ghaziabad starts at ₹3,300 for a Sedan. Because the route is only about 25 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "What is the Delhi to Ghaziabad cab fare or price?", answer: "The Delhi to Ghaziabad cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The short 25 km route bills at our 300 km minimum at ₹11/km, giving you a private air-conditioned car with doorstep pickup. Toll and parking are extra." },
      { question: "How long does Delhi to Ghaziabad take by cab?", answer: "Delhi to Ghaziabad is about 25 km and usually takes 1-1.5 hours by cab on NH-9 / NH-24, depending on traffic through the Akshardham and Ghazipur stretches. Off-peak departures are noticeably faster than the office rush hours." },
      { question: "Why is the Delhi to Ghaziabad fare based on 300 km?", answer: "The route is only about 25 km, and like all short NCR transfers it is best used as a local point-to-point drop or half-day hire, so it bills at our 300 km minimum fare and a Sedan is ₹3,300. This covers a private, air-conditioned car with doorstep pickup, far more comfortable than a shared ride." },
      { question: "Which vehicle is best for Delhi to Ghaziabad?", answer: "For this short 25 km transfer a Sedan suits 2-3 passengers with light luggage, the Ertiga is ideal for families of 4-6, and groups of 6-7 or those with more luggage should choose the Innova Crysta. All are air-conditioned with doorstep pickup." },
    ],
  },

  "delhi-to-faridabad": {
    from: "Delhi",
    to: "Faridabad",
    distance: "35 km",
    distanceNum: 35,
    time: "1-1.5 hours",
    highway: "NH-19 (Mathura Road)",
    ...calcFares(35),
    highlights: [
      "Short intercity transfer from Delhi south into Faridabad, a large Haryana industrial city in the NCR",
      "About 35 km on NH-19 (Mathura Road), typically 1-1.5 hours depending on traffic and the Badarpur stretch",
      "Popular for airport drops, factory and office commutes, weddings and station transfers",
      "Best used as a local point-to-point transfer or half-day hire rather than a long outstation drive",
    ],
    popularStops: [],
    bestTime: "The Badarpur–Faridabad corridor on NH-19 clogs during office peaks; a mid-morning or early-afternoon run keeps the drive to around an hour.",
    description: `The Delhi to Faridabad one-way cab is a short, routine NCR transfer — about 35 km south from Delhi along NH-19 (the old Mathura Road) into Faridabad, a large Haryana industrial and residential city that functions as part of greater Delhi. At Triveni Cabs we run this leg for airport arrivals needing a comfortable drop, professionals and factory staff commuting, families moving for weddings and functions, and anyone who prefers a clean private car to a shared ride. The drive is usually 1-1.5 hours and depends almost entirely on the traffic through the Badarpur and Faridabad approach.

Because Faridabad is only about 35 km away, this leg is best understood as a local point-to-point transfer or a half-day hire, and it bills at our 300 km minimum fare — we say that honestly upfront. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, the Ertiga SUV is ₹4,500, and the Innova Crysta is ₹5,400. Toll and parking are extra at actual. What you get for the minimum is a private, air-conditioned car with doorstep pickup and no return charge — far more comfortable than an auto or crowded local option.

We pick up from anywhere in Delhi — IGI Airport with flight tracking, any home, hotel or office, and the main railway stations — and drop anywhere in Faridabad, including the Sectors, NIT, Ballabgarh, Neelam Chowk and the industrial areas. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver. Call or WhatsApp 7668570551 for a confirmed upfront fare with no surge or hidden charges.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Faridabad cost?", answer: "A one-way cab from Delhi to Faridabad starts at ₹3,300 for a Sedan. Because the route is only about 35 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "What is the Delhi to Faridabad cab fare or price?", answer: "The Delhi to Faridabad cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The short 35 km route bills at our 300 km minimum at ₹11/km, giving you a private air-conditioned car with doorstep pickup. Toll and parking are extra." },
      { question: "How long does Delhi to Faridabad take by cab?", answer: "Delhi to Faridabad is about 35 km and usually takes 1-1.5 hours by cab on NH-19 (Mathura Road), depending on the Badarpur and Faridabad approach traffic. Off-peak departures are noticeably faster than the office rush." },
      { question: "Why is the Delhi to Faridabad fare based on 300 km?", answer: "The route is only about 35 km, and like all short NCR transfers it is best used as a local point-to-point drop or half-day hire, so it bills at our 300 km minimum fare and a Sedan is ₹3,300. This covers a private, air-conditioned car with doorstep pickup." },
      { question: "Which vehicle is best for Delhi to Faridabad?", answer: "For this short 35 km transfer a Sedan suits 2-3 passengers, the Ertiga is ideal for families of 4-6, and groups of 6-7 or those with extra luggage should choose the Innova Crysta. All are air-conditioned with doorstep pickup." },
    ],
  },

  "delhi-to-kurukshetra": {
    from: "Delhi",
    to: "Kurukshetra",
    distance: "160 km",
    distanceNum: 160,
    time: "3-3.5 hours",
    highway: "NH-44 (GT Road)",
    ...calcFares(160),
    highlights: [
      "Straight run north on NH-44 (GT Road) to Kurukshetra, the sacred land of the Mahabharata and the Bhagavad Gita",
      "About 160 km, usually 3-3.5 hours on the well-maintained expressway-grade GT Road",
      "Ideal for pilgrims and history travellers visiting Brahma Sarovar, Jyotisar and the Gita museums",
      "Popular as a day trip from Delhi or a comfortable one-way pilgrimage drop",
    ],
    popularStops: ["Panipat", "Karnal (highway food plazas)"],
    bestTime: "An early 7-8 AM start beats Delhi's exit traffic and gives you the full day at Brahma Sarovar and Jyotisar; the Gita Jayanti season (Nov-Dec) is especially popular.",
    description: `The Delhi to Kurukshetra one-way cab covers about 160 km straight north on NH-44 (the Grand Trunk Road) to Kurukshetra, the Haryana town revered as the battlefield of the Mahabharata and the place where Lord Krishna is believed to have delivered the Bhagavad Gita to Arjuna. At Triveni Cabs we run this leg for pilgrims, families on a spiritual day trip, and history-minded travellers who want to see Brahma Sarovar, Jyotisar (marked as the spot of the Gita sermon), and the town's museums. The drive on the wide GT Road is smooth and usually takes 3-3.5 hours.

Because the route is 160 km, it bills at our 300 km minimum fare — we state that honestly upfront. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, the Ertiga SUV is ₹4,500, and the Innova Crysta is ₹5,400. Toll and parking are extra at actual. The 300 km minimum makes this fare work well as a comfortable day trip: the driver can hold the car while you visit the Brahma Sarovar, Jyotisar and the Krishna and Gita museums, then drive you back the same evening.

We pick up from anywhere in Delhi with doorstep service and flight tracking for airport arrivals, and drop at any hotel or ghat in Kurukshetra, or continue onward toward Ambala, Patiala or the Punjab side if you are planning a wider circuit. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver who runs the GT Road regularly. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Kurukshetra cost?", answer: "A one-way cab from Delhi to Kurukshetra starts at ₹3,300 for a Sedan. Because the 160 km route is under 300 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "What is the Delhi to Kurukshetra cab fare or price?", answer: "The Delhi to Kurukshetra cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 160 km route bills at our 300 km minimum at ₹11/km. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Kurukshetra take by cab?", answer: "Delhi to Kurukshetra is about 160 km and takes 3-3.5 hours by cab on NH-44 (GT Road). An early morning start beats Delhi's exit traffic and gives you the full day at Brahma Sarovar and Jyotisar." },
      { question: "Why is the Delhi to Kurukshetra fare based on 300 km?", answer: "The route is 160 km, under our 300 km minimum, so it bills at that minimum and a Sedan is ₹3,300. This works well as a day trip fare where the driver holds the car while you visit Brahma Sarovar, Jyotisar and the Gita museums, then returns you to Delhi the same evening." },
      { question: "What can I see in Kurukshetra?", answer: "Kurukshetra is the land of the Mahabharata and the Bhagavad Gita. The main sights are Brahma Sarovar (a vast sacred tank), Jyotisar (marked as where Krishna gave the Gita sermon), and the Krishna and Gita panorama museums. A day trip with a private cab comfortably covers all of them." },
    ],
  },

  "delhi-to-panipat": {
    from: "Delhi",
    to: "Panipat",
    distance: "90 km",
    distanceNum: 90,
    time: "2-2.5 hours",
    highway: "NH-44 (GT Road)",
    ...calcFares(90),
    highlights: [
      "Quick run north on NH-44 (GT Road) to Panipat, the historic Haryana city of three decisive battles",
      "About 90 km, usually 2-2.5 hours on the wide GT Road",
      "Popular for the textile and handloom market, business visits, and history stops like Kabuli Bagh",
      "Best used as a day trip or a comfortable one-way drop rather than a long outstation drive",
    ],
    popularStops: [],
    bestTime: "A mid-morning departure after Delhi's peak keeps the GT Road run smooth; Panipat's textile markets are liveliest on weekdays.",
    description: `The Delhi to Panipat one-way cab covers about 90 km north on NH-44 (the Grand Trunk Road) to Panipat, the Haryana city known both for its three history-changing battles and for being India's textile and handloom hub. At Triveni Cabs we run this leg for buyers heading to the Panipat cloth and home-furnishing markets, business travellers, families on a short trip, and history enthusiasts visiting sites like Kabuli Bagh and the tomb of Ibrahim Lodi. The wide GT Road makes for a fast, comfortable drive of about 2-2.5 hours.

Because Panipat is 90 km away, this leg bills at our 300 km minimum fare — we state that honestly upfront. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, the Ertiga SUV is ₹4,500, and the Innova Crysta is ₹5,400. Toll and parking are extra at actual. The minimum fare makes this an easy day-trip hire where the driver can wait while you shop or sightsee and return you to Delhi the same day.

We pick up from anywhere in Delhi with doorstep service and flight tracking for airport arrivals, and drop anywhere in Panipat, or continue onward toward Karnal, Kurukshetra or Ambala on a wider GT Road circuit. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver. Call or WhatsApp 7668570551 for a confirmed upfront fare with no surge or hidden kilometres.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Panipat cost?", answer: "A one-way cab from Delhi to Panipat starts at ₹3,300 for a Sedan. Because the 90 km route is under 300 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra." },
      { question: "What is the Delhi to Panipat cab fare or price?", answer: "The Delhi to Panipat cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 90 km route bills at our 300 km minimum at ₹11/km. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Panipat take by cab?", answer: "Delhi to Panipat is about 90 km and takes 2-2.5 hours by cab on NH-44 (GT Road). A mid-morning departure after Delhi's peak keeps the run smooth." },
      { question: "Why is the Delhi to Panipat fare based on 300 km?", answer: "The route is 90 km, under our 300 km minimum, so it bills at that minimum and a Sedan is ₹3,300. This works well as a day-trip or shopping-trip fare where the driver can wait and return you to Delhi the same day." },
      { question: "Which vehicle is best for Delhi to Panipat?", answer: "A Sedan suits 2-3 passengers, the Ertiga is ideal for families of 4-6 or textile buyers carrying purchases, and groups of 6-7 should choose the Innova Crysta. All are air-conditioned with doorstep pickup." },
    ],
  },

  "delhi-to-karnal": {
    from: "Delhi",
    to: "Karnal",
    distance: "125 km",
    distanceNum: 125,
    time: "2.5-3 hours",
    highway: "NH-44 (GT Road)",
    ...calcFares(125),
    highlights: [
      "Smooth run north on NH-44 (GT Road) to Karnal, a well-planned Haryana city and agricultural hub",
      "About 125 km, usually 2.5-3 hours on the wide GT Road",
      "Popular for business travel, agricultural institutes, and the Karnal Lake tourist complex",
      "Best used as a day trip or a comfortable one-way drop rather than a long outstation drive",
    ],
    popularStops: ["Panipat"],
    bestTime: "An early or mid-morning start keeps the GT Road drive smooth and gives you a relaxed day in Karnal.",
    description: `The Delhi to Karnal one-way cab covers about 125 km north on NH-44 (the Grand Trunk Road) to Karnal, a clean, well-planned Haryana city known for its agricultural research institutes and the Karnal Lake tourist complex. At Triveni Cabs we run this leg for business travellers, families, and those visiting the city's institutes and markets. The wide GT Road makes for a comfortable drive of about 2.5-3 hours.

Because Karnal is 125 km away, this leg bills at our 300 km minimum fare — we state that honestly upfront. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, the Ertiga SUV is ₹4,500, and the Innova Crysta is ₹5,400. Toll and parking are extra at actual. The minimum fare makes this an easy day-trip hire, and it also works well as a first leg toward Kurukshetra, Ambala or Chandigarh.

We pick up from anywhere in Delhi with doorstep service and flight tracking for airport arrivals, and drop anywhere in Karnal, or continue onward on a wider GT Road circuit. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver who runs this corridor regularly. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Karnal cost?", answer: "A one-way cab from Delhi to Karnal starts at ₹3,300 for a Sedan. Because the 125 km route is under 300 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra." },
      { question: "What is the Delhi to Karnal cab fare or price?", answer: "The Delhi to Karnal cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 125 km route bills at our 300 km minimum at ₹11/km. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Karnal take by cab?", answer: "Delhi to Karnal is about 125 km and takes 2.5-3 hours by cab on NH-44 (GT Road). An early or mid-morning start keeps the drive smooth." },
      { question: "Why is the Delhi to Karnal fare based on 300 km?", answer: "The route is 125 km, under our 300 km minimum, so it bills at that minimum and a Sedan is ₹3,300. This works well as a day-trip fare or a first leg toward Kurukshetra and Chandigarh." },
      { question: "Which vehicle is best for Delhi to Karnal?", answer: "A Sedan suits 2-3 passengers, the Ertiga is ideal for families of 4-6, and groups of 6-7 should choose the Innova Crysta. All are air-conditioned with doorstep pickup on the GT Road route." },
    ],
  },

  "delhi-to-ludhiana": {
    from: "Delhi",
    to: "Ludhiana",
    distance: "310 km",
    distanceNum: 310,
    time: "6-7 hours",
    highway: "NH-44 (GT Road)",
    ...calcFares(310),
    highlights: [
      "Long-distance run north-west on NH-44 (GT Road) to Ludhiana, Punjab's biggest industrial and textile city",
      "About 310 km, usually 6-7 hours on the well-maintained GT Road",
      "Popular for business and textile-industry travel, family visits and hosiery-market buyers",
      "A genuine long-distance one-way drop billed on actual kilometres above the 300 km minimum",
    ],
    popularStops: ["Karnal", "Ambala (highway food plazas)"],
    bestTime: "An early 6-7 AM start clears Delhi before peak and gets you into Ludhiana by early afternoon; the GT Road is comfortable year-round.",
    description: `The Delhi to Ludhiana one-way cab covers about 310 km north-west on NH-44 (the Grand Trunk Road) to Ludhiana, Punjab's largest city and the country's hosiery and light-engineering capital. At Triveni Cabs we run this leg for business travellers, textile and hosiery buyers, and families making Punjab visits who want a comfortable private car over a train or bus. The GT Road is fast and well maintained, and the drive is usually 6-7 hours with a meal or tea break along the way.

At 310 km this is a genuine long-distance one-way, just past our 300 km minimum, so it bills on actual kilometres. Our one-way Sedan is ₹3,410, calculated at ₹11/km, the Ertiga SUV is ₹4,650, and the Innova Crysta is ₹5,580. Toll and parking are extra at actual. There is no return charge — you pay only for your one-way drop — which makes a private cab genuinely competitive for this distance.

We pick up from anywhere in Delhi with doorstep service and flight tracking for airport arrivals, and drop anywhere in Ludhiana, or continue onward toward Jalandhar, Amritsar or the Punjab hills if you are on a wider trip. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver experienced on the GT Road. Call or WhatsApp 7668570551 for a confirmed upfront fare with no surge or hidden kilometres.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Ludhiana cost?", answer: "A one-way cab from Delhi to Ludhiana costs ₹3,410 for a Sedan, based on the 310 km distance at ₹11/km. Ertiga SUV costs ₹4,650 and Innova Crysta costs ₹5,580. Toll and parking are extra at actual, and there is no return charge on a one-way drop." },
      { question: "What is the Delhi to Ludhiana cab fare or price?", answer: "The Delhi to Ludhiana cab price is ₹3,410 for a Sedan, ₹4,650 for an Ertiga SUV and ₹5,580 for an Innova Crysta, calculated on the 310 km distance at our standard per-km rates. Toll and parking are extra." },
      { question: "How long does Delhi to Ludhiana take by cab?", answer: "Delhi to Ludhiana is about 310 km and takes 6-7 hours by cab on NH-44 (GT Road), including a short break. An early morning start clears Delhi before peak and gets you in by early afternoon." },
      { question: "Is the Delhi to Ludhiana one-way cab billed on actual distance?", answer: "Yes. At 310 km the route is just past our 300 km minimum, so it bills on actual kilometres — a Sedan is ₹3,410 at ₹11/km. You pay only for the one-way drop with no return charge. Toll and parking are extra." },
      { question: "Which vehicle is best for Delhi to Ludhiana?", answer: "For this 310 km highway run a Sedan is comfortable for 2-3 passengers, the Ertiga suits families of 4-6, and the Innova Crysta is best for 6-7 passengers or anyone wanting maximum comfort on the longer drive." },
    ],
  },

  "delhi-to-jalandhar": {
    from: "Delhi",
    to: "Jalandhar",
    distance: "350 km",
    distanceNum: 350,
    time: "6.5-7.5 hours",
    highway: "NH-44 (GT Road)",
    ...calcFares(350),
    highlights: [
      "Long-distance run north-west on NH-44 (GT Road) to Jalandhar, a major Punjab city known for sports goods and hand tools",
      "About 350 km, usually 6.5-7.5 hours on the well-maintained GT Road",
      "Popular for business travel, the sports-goods industry, NRI family visits and onward Doaba trips",
      "A genuine long-distance one-way drop billed on actual kilometres",
    ],
    popularStops: ["Karnal", "Ludhiana"],
    bestTime: "An early 6 AM start clears Delhi before peak and gets you into Jalandhar in the afternoon; the GT Road is comfortable year-round.",
    description: `The Delhi to Jalandhar one-way cab covers about 350 km north-west on NH-44 (the Grand Trunk Road) to Jalandhar, one of Punjab's most important cities and a global centre for sports goods and hand tools. At Triveni Cabs we run this leg for business travellers, the sports-goods trade, and NRI families visiting the Doaba region who want a comfortable private car door to door. The GT Road is fast and well maintained, and the drive is usually 6.5-7.5 hours with a meal break.

At 350 km this is a genuine long-distance one-way, well above our 300 km minimum, so it bills on actual kilometres. Our one-way Sedan is ₹3,850, calculated at ₹11/km, the Ertiga SUV is ₹5,250, and the Innova Crysta is ₹6,300. Toll and parking are extra at actual. There is no return charge — you pay only for your one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking for airport arrivals, and drop anywhere in Jalandhar, or continue onward toward Amritsar, Kapurthala or the Punjab hills. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver experienced on the GT Road. Call or WhatsApp 7668570551 for a confirmed upfront fare with no surge or hidden kilometres.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Jalandhar cost?", answer: "A one-way cab from Delhi to Jalandhar costs ₹3,850 for a Sedan, based on the 350 km distance at ₹11/km. Ertiga SUV costs ₹5,250 and Innova Crysta costs ₹6,300. Toll and parking are extra at actual, with no return charge on a one-way drop." },
      { question: "What is the Delhi to Jalandhar cab fare or price?", answer: "The Delhi to Jalandhar cab price is ₹3,850 for a Sedan, ₹5,250 for an Ertiga SUV and ₹6,300 for an Innova Crysta, calculated on the 350 km distance at our standard per-km rates. Toll and parking are extra." },
      { question: "How long does Delhi to Jalandhar take by cab?", answer: "Delhi to Jalandhar is about 350 km and takes 6.5-7.5 hours by cab on NH-44 (GT Road), including a break. An early morning start clears Delhi before peak and gets you in during the afternoon." },
      { question: "Is the Delhi to Jalandhar one-way cab billed on actual distance?", answer: "Yes. At 350 km the route is well above our 300 km minimum, so it bills on actual kilometres — a Sedan is ₹3,850 at ₹11/km. You pay only for the one-way drop with no return charge. Toll and parking are extra." },
      { question: "Which vehicle is best for Delhi to Jalandhar?", answer: "For this 350 km highway run a Sedan is comfortable for 2-3 passengers, the Ertiga suits families of 4-6, and the Innova Crysta is best for 6-7 passengers or anyone wanting maximum comfort on the long drive." },
    ],
  },

  "delhi-to-patiala": {
    from: "Delhi",
    to: "Patiala",
    distance: "250 km",
    distanceNum: 250,
    time: "5-5.5 hours",
    highway: "NH-44 via Ambala",
    ...calcFares(250),
    highlights: [
      "Run north-west on NH-44 (GT Road) via Ambala to Patiala, the royal Punjab city of forts and palaces",
      "About 250 km, usually 5-5.5 hours on good highways",
      "Popular for heritage visits to Qila Mubarak and Sheesh Mahal, weddings, and the famous Patiala culture",
      "Billed at the 300 km minimum, so it works well as a comfortable day trip or one-way drop",
    ],
    popularStops: ["Karnal", "Ambala"],
    bestTime: "An early morning start beats Delhi's exit traffic and gives you the afternoon at Qila Mubarak and the old city.",
    description: `The Delhi to Patiala one-way cab covers about 250 km north-west on NH-44 (the Grand Trunk Road) via Ambala, then on into Patiala, the erstwhile princely capital famous for its forts, palaces, the Patiala peg and its distinctive Punjabi culture. At Triveni Cabs we run this leg for heritage travellers visiting Qila Mubarak and the Sheesh Mahal, families attending weddings and functions, and business visitors. The drive on good highways is usually 5-5.5 hours.

Because Patiala is 250 km away — just under our 300 km minimum — this leg bills at that minimum fare, and we state it honestly upfront. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, the Ertiga SUV is ₹4,500, and the Innova Crysta is ₹5,400. Toll and parking are extra at actual. The minimum fare makes this good value for a comfortable one-way drop or a long day trip.

We pick up from anywhere in Delhi with doorstep service and flight tracking for airport arrivals, and drop anywhere in Patiala, or continue onward toward Chandigarh, Ludhiana or Bathinda. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Patiala cost?", answer: "A one-way cab from Delhi to Patiala starts at ₹3,300 for a Sedan. Because the 250 km route is just under 300 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra." },
      { question: "What is the Delhi to Patiala cab fare or price?", answer: "The Delhi to Patiala cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 250 km route bills at our 300 km minimum at ₹11/km. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Patiala take by cab?", answer: "Delhi to Patiala is about 250 km and takes 5-5.5 hours by cab on NH-44 (GT Road) via Ambala. An early start beats Delhi's exit traffic." },
      { question: "Why is the Delhi to Patiala fare based on 300 km?", answer: "The route is 250 km, just under our 300 km minimum, so it bills at that minimum and a Sedan is ₹3,300. This makes it good value for a comfortable one-way drop or a long day trip to the royal city." },
      { question: "What can I see in Patiala?", answer: "Patiala is a royal Punjab city famous for Qila Mubarak, the Sheesh Mahal, the Baradari Gardens and its rich culture. A private cab lets you visit the heritage sites at your own pace and return to Delhi the same day if you wish." },
    ],
  },

  "delhi-to-bathinda": {
    from: "Delhi",
    to: "Bathinda",
    distance: "300 km",
    distanceNum: 300,
    time: "6-6.5 hours",
    highway: "NH-7 / NH-54 via Patiala",
    ...calcFares(300),
    highlights: [
      "Long-distance run into south-west Punjab to Bathinda, one of the region's oldest cities",
      "About 300 km, usually 6-6.5 hours via the Patiala–Barnala corridor",
      "Popular for business, the thermal power and oil-refinery belt, and family visits",
      "Sits right at the 300 km minimum, so it is priced at the standard base fare",
    ],
    popularStops: ["Patiala", "Barnala"],
    bestTime: "An early 6-7 AM departure clears Delhi before peak and reaches Bathinda by early afternoon.",
    description: `The Delhi to Bathinda one-way cab covers about 300 km into south-west Punjab to Bathinda, one of the oldest cities in the region and today an industrial centre with a thermal power plant, an oil refinery and busy agricultural markets. At Triveni Cabs we run this leg for business travellers, the industrial belt, and families making Punjab visits who want a comfortable private car door to door. The usual route runs via Patiala and Barnala, and the drive is about 6-6.5 hours.

At 300 km Bathinda sits exactly at our minimum billing distance, so it is priced at the standard base fare — clear and simple. Our one-way Sedan is ₹3,300 at ₹11/km, the Ertiga SUV is ₹4,500, and the Innova Crysta is ₹5,400. Toll and parking are extra at actual. There is no return charge — you pay only for your one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking for airport arrivals, and drop anywhere in Bathinda, or continue onward toward Ludhiana, Faridkot or the Punjab-Rajasthan border areas. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver. Call or WhatsApp 7668570551 for a confirmed upfront fare with no surge or hidden kilometres.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Bathinda cost?", answer: "A one-way cab from Delhi to Bathinda costs ₹3,300 for a Sedan, based on the 300 km distance at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual, with no return charge on a one-way drop." },
      { question: "What is the Delhi to Bathinda cab fare or price?", answer: "The Delhi to Bathinda cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. At 300 km the route is priced at our standard base fare at ₹11/km. Toll and parking are extra." },
      { question: "How long does Delhi to Bathinda take by cab?", answer: "Delhi to Bathinda is about 300 km and takes 6-6.5 hours by cab via Patiala and Barnala. An early morning start clears Delhi before peak and gets you in by early afternoon." },
      { question: "Is the Delhi to Bathinda one-way cab billed at the minimum fare?", answer: "Yes. At 300 km the route sits exactly at our minimum billing distance, so it is priced at the standard base fare — a Sedan is ₹3,300 at ₹11/km. You pay only for the one-way drop with no return charge." },
      { question: "Which vehicle is best for Delhi to Bathinda?", answer: "For this 300 km run a Sedan is comfortable for 2-3 passengers, the Ertiga suits families of 4-6, and the Innova Crysta is best for 6-7 passengers or anyone wanting maximum comfort on the long drive." },
    ],
  },

  "delhi-to-gorakhpur": {
    from: "Delhi",
    to: "Gorakhpur",
    distance: "780 km",
    distanceNum: 780,
    time: "13-15 hours (overnight)",
    highway: "Purvanchal Expressway via Lucknow",
    ...calcFares(780),
    highlights: [
      "Very long eastern run across Uttar Pradesh to Gorakhpur, home of the Gorakhnath Temple",
      "About 780 km, typically 13-15 hours — usually an overnight or early-start full-day journey",
      "Fast running on the Agra–Lucknow and Purvanchal Expressways covers most of the distance",
      "Popular for pilgrims, family visits and onward travel toward Kushinagar and Nepal border",
    ],
    popularStops: ["Lucknow", "Ayodhya (optional detour)"],
    bestTime: "This is a long haul best begun very early or done overnight; many travellers split it with a Lucknow or Ayodhya halt.",
    description: `The Delhi to Gorakhpur one-way cab is a very long eastern journey of about 780 km across Uttar Pradesh to Gorakhpur, the city famous for the Gorakhnath Temple and as a gateway toward Kushinagar and the Nepal border. At Triveni Cabs we run this leg for pilgrims, families making long UP visits, and travellers who prefer a private car for the door-to-door convenience over train connections. Modern expressways — the Agra–Lucknow Expressway and the Purvanchal Expressway — carry most of the distance at speed, but at 780 km this is honestly a long drive of about 13-15 hours, usually done overnight or with a very early start, and many travellers choose to break it with a halt at Lucknow or Ayodhya.

At 780 km this is a genuine long-distance one-way billed on actual kilometres. Our one-way Sedan is ₹8,580, calculated at ₹11/km, the Ertiga SUV is ₹11,700, and the Innova Crysta is ₹14,040. Toll and parking are extra at actual, and for a journey of this length the driver's night halt and food are typically covered as is standard on long outstation runs — we confirm the exact inclusions when you book. There is no return charge on a one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop anywhere in Gorakhpur, or continue onward toward Kushinagar or the Sonauli/Nepal border. Given the distance, an Innova Crysta is the most comfortable choice for the long hours. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver experienced on long outstation routes. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Gorakhpur cost?", answer: "A one-way cab from Delhi to Gorakhpur costs ₹8,580 for a Sedan, based on the 780 km distance at ₹11/km. Ertiga SUV costs ₹11,700 and Innova Crysta costs ₹14,040. Toll, parking and driver night-halt allowance are extra at actual; we confirm inclusions when you book." },
      { question: "What is the Delhi to Gorakhpur cab fare or price?", answer: "The Delhi to Gorakhpur cab price is ₹8,580 for a Sedan, ₹11,700 for an Ertiga SUV and ₹14,040 for an Innova Crysta, calculated on the 780 km distance at our standard per-km rates. Toll, parking and night halt are extra." },
      { question: "How long does Delhi to Gorakhpur take by cab?", answer: "Delhi to Gorakhpur is about 780 km and takes 13-15 hours by cab, mostly on the Agra–Lucknow and Purvanchal Expressways. It is a long haul usually done overnight or with a very early start, and many travellers break it at Lucknow or Ayodhya." },
      { question: "Is Delhi to Gorakhpur too far for a one-way cab?", answer: "It is a long journey of about 780 km, so we are honest that it takes 13-15 hours and is best done overnight or split with a halt. Many travellers still prefer a private cab for the door-to-door comfort. An Innova Crysta is the most comfortable choice for the distance." },
      { question: "Which vehicle is best for Delhi to Gorakhpur?", answer: "For this long 780 km journey the Innova Crysta is the most comfortable choice, especially for the long hours and any luggage. The Ertiga suits families of 4-6, and a Sedan works for 2-3 passengers travelling light who want the lowest fare." },
    ],
  },

  "delhi-to-jhansi": {
    from: "Delhi",
    to: "Jhansi",
    distance: "415 km",
    distanceNum: 415,
    time: "7-8 hours",
    highway: "NH-44 via Agra & Gwalior",
    ...calcFares(415),
    highlights: [
      "Long southern run on NH-44 via Agra and Gwalior to Jhansi, the historic Bundelkhand fort city",
      "About 415 km, usually 7-8 hours on good highways with the Yamuna Expressway on the first leg",
      "Popular for the Jhansi Fort and Rani Lakshmibai heritage, and as a gateway to Orchha and Khajuraho",
      "A genuine long-distance one-way drop billed on actual kilometres",
    ],
    popularStops: ["Agra", "Gwalior"],
    bestTime: "An early start via the Yamuna Expressway keeps the drive comfortable; Jhansi and nearby Orchha are best in the cooler months.",
    description: `The Delhi to Jhansi one-way cab covers about 415 km south on NH-44, running via Agra and Gwalior to Jhansi, the Bundelkhand city famous for its hilltop fort and its heroine Rani Lakshmibai of the 1857 uprising. At Triveni Cabs we run this leg for history travellers, families, and tourists using Jhansi as the gateway to nearby Orchha and, further on, Khajuraho. The first stretch runs on the fast Yamuna Expressway to Agra, then continues on NH-44 past Gwalior, and the drive is usually 7-8 hours.

At 415 km this is a genuine long-distance one-way billed on actual kilometres. Our one-way Sedan is ₹4,565, calculated at ₹11/km, the Ertiga SUV is ₹6,225, and the Innova Crysta is ₹7,470. Toll and parking are extra at actual. There is no return charge — you pay only for your one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop anywhere in Jhansi, or continue onward the short distance to Orchha or toward Khajuraho on a wider Bundelkhand trip. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver experienced on long routes. Call or WhatsApp 7668570551 for a confirmed upfront fare with no surge or hidden kilometres.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Jhansi cost?", answer: "A one-way cab from Delhi to Jhansi costs ₹4,565 for a Sedan, based on the 415 km distance at ₹11/km. Ertiga SUV costs ₹6,225 and Innova Crysta costs ₹7,470. Toll and parking are extra at actual, with no return charge on a one-way drop." },
      { question: "What is the Delhi to Jhansi cab fare or price?", answer: "The Delhi to Jhansi cab price is ₹4,565 for a Sedan, ₹6,225 for an Ertiga SUV and ₹7,470 for an Innova Crysta, calculated on the 415 km distance at our standard per-km rates. Toll and parking are extra." },
      { question: "How long does Delhi to Jhansi take by cab?", answer: "Delhi to Jhansi is about 415 km and takes 7-8 hours by cab on NH-44 via Agra and Gwalior, with the Yamuna Expressway on the first leg. An early start keeps the drive comfortable." },
      { question: "Is the Delhi to Jhansi one-way cab billed on actual distance?", answer: "Yes. At 415 km the route is well above our 300 km minimum, so it bills on actual kilometres — a Sedan is ₹4,565 at ₹11/km. You pay only for the one-way drop with no return charge. Toll and parking are extra." },
      { question: "Can I visit Orchha or Khajuraho from Jhansi?", answer: "Yes. Orchha is a short drive from Jhansi and easy to add, and Jhansi is a common gateway toward Khajuraho. Let us know your plan and we can arrange the onward legs on a wider Bundelkhand itinerary." },
    ],
  },

  "delhi-to-bodhgaya": {
    from: "Delhi",
    to: "Bodhgaya",
    distance: "995 km",
    distanceNum: 995,
    time: "16-18 hours (2-day journey)",
    highway: "NH-19 via Kanpur & Varanasi",
    ...calcFares(995),
    highlights: [
      "Very long eastern pilgrimage run to Bodhgaya, where the Buddha attained enlightenment",
      "About 995 km, realistically a 2-day journey — the Mahabodhi Temple is a UNESCO World Heritage Site",
      "Runs via Kanpur and the Varanasi region on NH-19 and expressway stretches",
      "Popular with Buddhist pilgrims and international tourists on the Buddhist circuit",
    ],
    popularStops: ["Kanpur", "Varanasi (common overnight halt)"],
    bestTime: "This is a two-day drive best planned with an overnight halt around Varanasi; the cooler October-March months are most comfortable.",
    description: `The Delhi to Bodhgaya one-way cab is a very long eastern pilgrimage journey of about 995 km to Bodhgaya in Bihar, the most sacred site in Buddhism, where the Buddha is believed to have attained enlightenment beneath the Bodhi tree at what is now the Mahabodhi Temple, a UNESCO World Heritage Site. At Triveni Cabs we run this leg for Buddhist pilgrims, international tourists on the Buddhist circuit, and families who want a private car for the flexibility to stop at temples and towns along the way. The route runs east on NH-19 via Kanpur and the Varanasi region, and at nearly 1,000 km this is honestly a two-day journey, typically planned with an overnight halt around Varanasi rather than driven in one push.

At 995 km this is a genuine long-distance one-way billed on actual kilometres. Our one-way Sedan is ₹10,945, calculated at ₹11/km, the Ertiga SUV is ₹14,925, and the Innova Crysta is ₹17,910. Toll and parking are extra at actual, and the driver's night halt and food allowance apply on a multi-day journey of this length — we confirm the exact inclusions when you book. There is no return charge on a one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at your hotel or monastery in Bodhgaya, or continue onward to Gaya, Rajgir, Nalanda and Varanasi on a fuller Buddhist-circuit trip. Given the distance, an Innova Crysta is the most comfortable choice. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver experienced on long routes. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Bodhgaya cost?", answer: "A one-way cab from Delhi to Bodhgaya costs ₹10,945 for a Sedan, based on the 995 km distance at ₹11/km. Ertiga SUV costs ₹14,925 and Innova Crysta costs ₹17,910. Toll, parking and driver night-halt allowance are extra at actual; we confirm inclusions when you book." },
      { question: "What is the Delhi to Bodhgaya cab fare or price?", answer: "The Delhi to Bodhgaya cab price is ₹10,945 for a Sedan, ₹14,925 for an Ertiga SUV and ₹17,910 for an Innova Crysta, calculated on the 995 km distance at our standard per-km rates. Toll, parking and night halt are extra." },
      { question: "How long does Delhi to Bodhgaya take by cab?", answer: "Delhi to Bodhgaya is about 995 km and realistically a two-day journey of around 16-18 hours of driving, via Kanpur and the Varanasi region on NH-19. Most travellers plan an overnight halt around Varanasi." },
      { question: "Is Delhi to Bodhgaya practical by one-way cab?", answer: "It is a long pilgrimage of nearly 1,000 km, so we are honest that it is a two-day journey best planned with an overnight halt. Many pilgrims still prefer a private cab for the door-to-door comfort and the freedom to visit sites along the way. An Innova Crysta is the most comfortable choice." },
      { question: "What can I see in Bodhgaya?", answer: "Bodhgaya's centre is the Mahabodhi Temple, a UNESCO World Heritage Site marking where the Buddha attained enlightenment, along with the Bodhi tree and the many international monasteries. It pairs naturally with Gaya, Rajgir and Nalanda on a Buddhist-circuit trip." },
    ],
  },

  "delhi-to-gaya": {
    from: "Delhi",
    to: "Gaya",
    distance: "995 km",
    distanceNum: 995,
    time: "16-18 hours (2-day journey)",
    highway: "NH-19 via Kanpur & Varanasi",
    ...calcFares(995),
    highlights: [
      "Very long eastern run to Gaya, Bihar, a major Hindu pilgrimage city for ancestral rites (Pind Daan)",
      "About 995 km, realistically a 2-day journey via Kanpur and the Varanasi region",
      "Home to the Vishnupad Temple and close to Buddhist Bodhgaya",
      "Popular with pilgrims for Pind Daan and travellers on the Buddhist circuit",
    ],
    popularStops: ["Kanpur", "Varanasi (common overnight halt)"],
    bestTime: "A two-day drive best planned with an overnight halt around Varanasi; the Pitru Paksha period draws the largest pilgrim crowds to Gaya.",
    description: `The Delhi to Gaya one-way cab is a very long eastern journey of about 995 km to Gaya in Bihar, one of Hinduism's most important pilgrimage cities, revered for the Vishnupad Temple and as the foremost place for Pind Daan, the ancestral rites performed for departed souls. Gaya also sits right beside Bodhgaya, so many travellers combine both. At Triveni Cabs we run this leg for pilgrims performing Pind Daan, families, and Buddhist-circuit tourists who want a private car for door-to-door comfort. The route runs east on NH-19 via Kanpur and the Varanasi region, and at nearly 1,000 km this is honestly a two-day journey, usually planned with an overnight halt around Varanasi.

At 995 km this is a genuine long-distance one-way billed on actual kilometres. Our one-way Sedan is ₹10,945, calculated at ₹11/km, the Ertiga SUV is ₹14,925, and the Innova Crysta is ₹17,910. Toll and parking are extra at actual, and the driver's night halt and food allowance apply on a multi-day journey of this length — we confirm the exact inclusions when you book. There is no return charge on a one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at your hotel or dharamshala in Gaya, or continue to Bodhgaya, Rajgir and Nalanda. Given the distance, an Innova Crysta is the most comfortable choice. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver experienced on long routes. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Gaya cost?", answer: "A one-way cab from Delhi to Gaya costs ₹10,945 for a Sedan, based on the 995 km distance at ₹11/km. Ertiga SUV costs ₹14,925 and Innova Crysta costs ₹17,910. Toll, parking and driver night-halt allowance are extra at actual; we confirm inclusions when you book." },
      { question: "What is the Delhi to Gaya cab fare or price?", answer: "The Delhi to Gaya cab price is ₹10,945 for a Sedan, ₹14,925 for an Ertiga SUV and ₹17,910 for an Innova Crysta, calculated on the 995 km distance at our standard per-km rates. Toll, parking and night halt are extra." },
      { question: "How long does Delhi to Gaya take by cab?", answer: "Delhi to Gaya is about 995 km and realistically a two-day journey of around 16-18 hours of driving, via Kanpur and the Varanasi region on NH-19. Most travellers plan an overnight halt around Varanasi." },
      { question: "Is Delhi to Gaya practical by one-way cab?", answer: "It is a long pilgrimage of nearly 1,000 km, so we are honest that it is a two-day journey best planned with an overnight halt. Many pilgrims still prefer a private cab for the comfort and to combine Gaya with nearby Bodhgaya. An Innova Crysta is the most comfortable choice." },
      { question: "What is Gaya known for?", answer: "Gaya is a major Hindu pilgrimage city known for the Vishnupad Temple and as the foremost place for Pind Daan ancestral rites, especially during Pitru Paksha. It sits right beside Buddhist Bodhgaya, so many travellers visit both together." },
    ],
  },

  "delhi-to-sarnath": {
    from: "Delhi",
    to: "Sarnath",
    distance: "800 km",
    distanceNum: 800,
    time: "13-15 hours (overnight)",
    highway: "NH-19 via Varanasi",
    ...calcFares(800),
    highlights: [
      "Very long eastern run to Sarnath near Varanasi, where the Buddha gave his first sermon",
      "About 800 km, typically 13-15 hours — usually an overnight or full-day-plus journey",
      "Home to the Dhamek Stupa and the Sarnath Archaeological Museum",
      "Popular with Buddhist pilgrims and travellers pairing it with Varanasi",
    ],
    popularStops: ["Kanpur", "Prayagraj / Varanasi"],
    bestTime: "A long haul best begun very early or done overnight; pairs naturally with a Varanasi stay, best in the cooler months.",
    description: `The Delhi to Sarnath one-way cab is a very long eastern journey of about 800 km to Sarnath, just outside Varanasi, the deer park where the Buddha delivered his first sermon after enlightenment and set in motion the wheel of dharma. Its centrepiece is the great Dhamek Stupa, alongside the ruins of ancient monasteries and the excellent Sarnath Archaeological Museum. At Triveni Cabs we run this leg for Buddhist pilgrims, culture travellers, and anyone pairing Sarnath with a Varanasi visit, who want a private car for the door-to-door convenience. The route runs east on NH-19 and expressway stretches via Kanpur toward Varanasi, and at 800 km this is honestly a long journey of 13-15 hours, usually done overnight or with an early start.

At 800 km this is a genuine long-distance one-way billed on actual kilometres. Our one-way Sedan is ₹8,800, calculated at ₹11/km, the Ertiga SUV is ₹12,000, and the Innova Crysta is ₹14,400. Toll and parking are extra at actual, and the driver's night halt and food allowance apply on a journey of this length — we confirm the exact inclusions when you book. There is no return charge on a one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at Sarnath or your hotel in Varanasi, or continue onward to Bodhgaya on a Buddhist-circuit trip. Given the distance, an Innova Crysta is the most comfortable choice. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver experienced on long routes. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Sarnath cost?", answer: "A one-way cab from Delhi to Sarnath costs ₹8,800 for a Sedan, based on the 800 km distance at ₹11/km. Ertiga SUV costs ₹12,000 and Innova Crysta costs ₹14,400. Toll, parking and driver night-halt allowance are extra at actual; we confirm inclusions when you book." },
      { question: "What is the Delhi to Sarnath cab fare or price?", answer: "The Delhi to Sarnath cab price is ₹8,800 for a Sedan, ₹12,000 for an Ertiga SUV and ₹14,400 for an Innova Crysta, calculated on the 800 km distance at our standard per-km rates. Toll, parking and night halt are extra." },
      { question: "How long does Delhi to Sarnath take by cab?", answer: "Delhi to Sarnath is about 800 km and takes 13-15 hours by cab via Kanpur toward Varanasi on NH-19. It is a long haul usually done overnight or with a very early start, and it pairs naturally with a Varanasi stay." },
      { question: "Is Delhi to Sarnath practical by one-way cab?", answer: "It is a long journey of about 800 km, so we are honest that it takes 13-15 hours and is best done overnight or with an early start. Many travellers prefer a private cab for the comfort and to combine Sarnath with Varanasi. An Innova Crysta is the most comfortable choice." },
      { question: "What can I see at Sarnath?", answer: "Sarnath is where the Buddha gave his first sermon. Its main sights are the Dhamek Stupa, the ruins of ancient monasteries, the Ashoka Pillar site and the Sarnath Archaeological Museum. It is just outside Varanasi, so most visitors see both together." },
    ],
  },

  "delhi-to-chitrakoot": {
    from: "Delhi",
    to: "Chitrakoot",
    distance: "700 km",
    distanceNum: 700,
    time: "12-13 hours (overnight)",
    highway: "NH-35 via Kanpur & Banda",
    ...calcFares(700),
    highlights: [
      "Long southern-eastern run to Chitrakoot, a revered pilgrimage town on the UP-MP border linked to the Ramayana",
      "About 700 km, typically 12-13 hours — usually an overnight or early-start journey",
      "Sacred for the Ramayana associations at Ramghat, Kamadgiri and Sphatik Shila",
      "Popular with pilgrims and families on a spiritual trip",
    ],
    popularStops: ["Kanpur", "Banda"],
    bestTime: "A long drive best begun very early or done overnight; the town is busiest around Amavasya and Ram-related festivals.",
    description: `The Delhi to Chitrakoot one-way cab is a long journey of about 700 km to Chitrakoot, the tranquil pilgrimage town straddling the Uttar Pradesh–Madhya Pradesh border, revered as a place where Lord Rama, Sita and Lakshmana are believed to have spent part of their exile. At Triveni Cabs we run this leg for pilgrims and families on a spiritual trip who want the comfort and flexibility of a private car. The route runs south-east on NH-35 and connecting highways via Kanpur and Banda, and at 700 km this is honestly a long drive of about 12-13 hours, usually done overnight or with a very early start.

At 700 km this is a genuine long-distance one-way billed on actual kilometres. Our one-way Sedan is ₹7,700, calculated at ₹11/km, the Ertiga SUV is ₹10,500, and the Innova Crysta is ₹12,600. Toll and parking are extra at actual, and the driver's night halt and food allowance apply on a journey of this length — we confirm the exact inclusions when you book. There is no return charge on a one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at your hotel or dharamshala in Chitrakoot. The main sights are around Ramghat on the Mandakini river, the Kamadgiri parikrama hill and Sphatik Shila. Given the distance, an Innova Crysta is the most comfortable choice. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver experienced on long routes. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Chitrakoot cost?", answer: "A one-way cab from Delhi to Chitrakoot costs ₹7,700 for a Sedan, based on the 700 km distance at ₹11/km. Ertiga SUV costs ₹10,500 and Innova Crysta costs ₹12,600. Toll, parking and driver night-halt allowance are extra at actual; we confirm inclusions when you book." },
      { question: "What is the Delhi to Chitrakoot cab fare or price?", answer: "The Delhi to Chitrakoot cab price is ₹7,700 for a Sedan, ₹10,500 for an Ertiga SUV and ₹12,600 for an Innova Crysta, calculated on the 700 km distance at our standard per-km rates. Toll, parking and night halt are extra." },
      { question: "How long does Delhi to Chitrakoot take by cab?", answer: "Delhi to Chitrakoot is about 700 km and takes 12-13 hours by cab via Kanpur and Banda on NH-35 and connecting highways. It is a long drive usually done overnight or with a very early start." },
      { question: "Is Delhi to Chitrakoot practical by one-way cab?", answer: "It is a long journey of about 700 km, so we are honest that it takes 12-13 hours and is best done overnight or with an early start. Many pilgrims prefer a private cab for the comfort and door-to-door convenience. An Innova Crysta is the most comfortable choice." },
      { question: "What can I see in Chitrakoot?", answer: "Chitrakoot is a Ramayana pilgrimage town on the Mandakini river. Key sites include Ramghat, the Kamadgiri parikrama hill and Sphatik Shila, along with several temples. A private cab lets you visit them comfortably at your own pace." },
    ],
  },

  "delhi-to-nathdwara": {
    from: "Delhi",
    to: "Nathdwara",
    distance: "640 km",
    distanceNum: 640,
    time: "10-11 hours (overnight or early start)",
    highway: "NH-48 via Jaipur & Ajmer",
    ...calcFares(640),
    highlights: [
      "Long Rajasthan run to Nathdwara, home of the revered Shrinathji Temple near Udaipur",
      "About 640 km, typically 10-11 hours on NH-48 via Jaipur and Ajmer",
      "Shrinathji is one of the most important Vaishnav pilgrimage shrines",
      "Popular with pilgrims and families combining it with Udaipur",
    ],
    popularStops: ["Jaipur", "Ajmer"],
    bestTime: "A long drive best begun very early or done overnight; darshan timings at Shrinathji are fixed, so plan arrival accordingly.",
    description: `The Delhi to Nathdwara one-way cab is a long Rajasthan journey of about 640 km to Nathdwara, the temple town near Udaipur that is home to the famous Shrinathji Temple, one of the most revered shrines of the Pushtimarg Vaishnav tradition, where the deity is worshipped as a seven-year-old form of Krishna. At Triveni Cabs we run this leg for pilgrims and families, many of whom combine it with a visit to nearby Udaipur. The route runs south-west on NH-48 via Jaipur and Ajmer, and at 640 km this is honestly a long drive of about 10-11 hours, usually done overnight or with a very early start so you reach in time for darshan.

At 640 km this is a genuine long-distance one-way billed on actual kilometres. Our one-way Sedan is ₹7,040, calculated at ₹11/km, the Ertiga SUV is ₹9,600, and the Innova Crysta is ₹11,520. Toll and parking are extra at actual, and the driver's night halt and food allowance apply on a journey of this length — we confirm the exact inclusions when you book. There is no return charge on a one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at your hotel in Nathdwara, or continue the short distance to Udaipur or on to Kumbhalgarh and Rajsamand. Given the distance, an Innova Crysta is the most comfortable choice. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver experienced on long Rajasthan routes. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Nathdwara cost?", answer: "A one-way cab from Delhi to Nathdwara costs ₹7,040 for a Sedan, based on the 640 km distance at ₹11/km. Ertiga SUV costs ₹9,600 and Innova Crysta costs ₹11,520. Toll, parking and driver night-halt allowance are extra at actual; we confirm inclusions when you book." },
      { question: "What is the Delhi to Nathdwara cab fare or price?", answer: "The Delhi to Nathdwara cab price is ₹7,040 for a Sedan, ₹9,600 for an Ertiga SUV and ₹11,520 for an Innova Crysta, calculated on the 640 km distance at our standard per-km rates. Toll, parking and night halt are extra." },
      { question: "How long does Delhi to Nathdwara take by cab?", answer: "Delhi to Nathdwara is about 640 km and takes 10-11 hours by cab on NH-48 via Jaipur and Ajmer. It is a long drive usually done overnight or with a very early start so you reach in time for Shrinathji darshan." },
      { question: "Is Delhi to Nathdwara practical by one-way cab?", answer: "It is a long journey of about 640 km, so we are honest that it takes 10-11 hours and is best done overnight or with an early start. Many pilgrims prefer a private cab for the comfort and to combine Nathdwara with Udaipur. An Innova Crysta is the most comfortable choice." },
      { question: "What is Nathdwara known for?", answer: "Nathdwara is home to the revered Shrinathji Temple, one of the most important shrines of the Pushtimarg Vaishnav tradition, where Krishna is worshipped in a child form. It lies near Udaipur, so many pilgrims combine the two." },
    ],
  },

  "delhi-to-bharatpur": {
    from: "Delhi",
    to: "Bharatpur",
    distance: "220 km",
    distanceNum: 220,
    time: "4-4.5 hours",
    highway: "NH-21 via Agra region",
    ...calcFares(220),
    highlights: [
      "Run into eastern Rajasthan to Bharatpur, famous for the Keoladeo National Park bird sanctuary",
      "About 220 km, usually 4-4.5 hours via the Yamuna Expressway and the Agra region",
      "Keoladeo (Bharatpur) is a UNESCO World Heritage bird sanctuary",
      "Popular with birdwatchers and travellers pairing it with Agra and the Golden Triangle",
    ],
    popularStops: ["Yamuna Expressway food plazas", "Agra (optional)"],
    bestTime: "The winter months (Nov-Feb) are best for the migratory birds at Keoladeo; start early to reach the park by opening time.",
    description: `The Delhi to Bharatpur one-way cab covers about 220 km into eastern Rajasthan to Bharatpur, best known for the Keoladeo National Park (formerly Bharatpur Bird Sanctuary), a UNESCO World Heritage Site and one of India's finest birdwatching destinations, especially in winter when migratory birds arrive in large numbers. At Triveni Cabs we run this leg for birdwatchers, nature travellers, and tourists combining Bharatpur with Agra and the Golden Triangle. The usual route runs on the fast Yamuna Expressway and through the Agra region, and the drive is about 4-4.5 hours.

Because Bharatpur is 220 km away — under our 300 km minimum — this leg bills at that minimum fare, and we state it honestly upfront. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, the Ertiga SUV is ₹4,500, and the Innova Crysta is ₹5,400. Toll and parking are extra at actual. The minimum fare makes this good value for a comfortable one-way drop or a day trip with the driver waiting.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at your hotel in Bharatpur or at the Keoladeo park gate, or continue the short distance to Agra, or onward to Deeg or Jaipur. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Bharatpur cost?", answer: "A one-way cab from Delhi to Bharatpur starts at ₹3,300 for a Sedan. Because the 220 km route is under 300 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra." },
      { question: "What is the Delhi to Bharatpur cab fare or price?", answer: "The Delhi to Bharatpur cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 220 km route bills at our 300 km minimum at ₹11/km. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Bharatpur take by cab?", answer: "Delhi to Bharatpur is about 220 km and takes 4-4.5 hours by cab via the Yamuna Expressway and the Agra region. Start early to reach the Keoladeo park by opening time." },
      { question: "Why is the Delhi to Bharatpur fare based on 300 km?", answer: "The route is 220 km, under our 300 km minimum, so it bills at that minimum and a Sedan is ₹3,300. This makes it good value for a comfortable one-way drop or a day trip where the driver waits while you explore the bird sanctuary." },
      { question: "What is Bharatpur known for?", answer: "Bharatpur is famous for Keoladeo National Park, a UNESCO World Heritage bird sanctuary and one of India's best birdwatching sites, especially in winter. It is easy to combine with Agra on a Golden Triangle trip." },
    ],
  },

  "delhi-to-alwar": {
    from: "Delhi",
    to: "Alwar",
    distance: "165 km",
    distanceNum: 165,
    time: "3.5-4 hours",
    highway: "NH-48 / NH-248A",
    ...calcFares(165),
    highlights: [
      "Run into north-east Rajasthan to Alwar, gateway to the Sariska Tiger Reserve",
      "About 165 km, usually 3.5-4 hours via NH-48 and NH-248A",
      "Popular for Sariska, the Bala Qila hill fort, City Palace and Siliserh Lake",
      "Billed at the 300 km minimum, so it works well as a day trip or one-way drop",
    ],
    popularStops: ["Neemrana (optional)"],
    bestTime: "Sariska safaris run in the cooler months and close during the monsoon; start early to fit in a morning safari.",
    description: `The Delhi to Alwar one-way cab covers about 165 km into north-east Rajasthan to Alwar, a historic town that serves as the gateway to the Sariska Tiger Reserve and is dotted with its own heritage — the Bala Qila hill fort, the City Palace (Vinay Vilas Mahal), and the scenic Siliserh Lake. At Triveni Cabs we run this leg for wildlife travellers heading to Sariska, heritage tourists, and families on a short Rajasthan trip. The route runs on NH-48 and NH-248A, and the drive is about 3.5-4 hours.

Because Alwar is 165 km away — under our 300 km minimum — this leg bills at that minimum fare, and we state it honestly upfront. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, the Ertiga SUV is ₹4,500, and the Innova Crysta is ₹5,400. Toll and parking are extra at actual. The minimum fare makes this good value for a day trip with the driver waiting, or a comfortable one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at your hotel in Alwar or the Sariska gate, or continue onward toward Jaipur. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Alwar cost?", answer: "A one-way cab from Delhi to Alwar starts at ₹3,300 for a Sedan. Because the 165 km route is under 300 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra." },
      { question: "What is the Delhi to Alwar cab fare or price?", answer: "The Delhi to Alwar cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 165 km route bills at our 300 km minimum at ₹11/km. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Alwar take by cab?", answer: "Delhi to Alwar is about 165 km and takes 3.5-4 hours by cab on NH-48 and NH-248A. Start early if you want to fit in a morning Sariska safari." },
      { question: "Why is the Delhi to Alwar fare based on 300 km?", answer: "The route is 165 km, under our 300 km minimum, so it bills at that minimum and a Sedan is ₹3,300. This makes it good value for a day trip with the driver waiting, or a one-way drop." },
      { question: "What can I see in and around Alwar?", answer: "Alwar is the gateway to the Sariska Tiger Reserve and has its own sights including the Bala Qila hill fort, the City Palace and Siliserh Lake. Sariska safaris run in the cooler months and are the main draw for wildlife travellers." },
    ],
  },

  "delhi-to-neemrana": {
    from: "Delhi",
    to: "Neemrana",
    distance: "125 km",
    distanceNum: 125,
    time: "2.5-3 hours",
    highway: "NH-48 (Delhi-Jaipur)",
    ...calcFares(125),
    highlights: [
      "Quick run down NH-48 to Neemrana, famous for the restored Neemrana Fort-Palace heritage hotel",
      "About 125 km, usually 2.5-3 hours on the Delhi-Jaipur expressway",
      "Popular for weekend getaways, the zip-lining at the fort, weddings and corporate offsites",
      "Billed at the 300 km minimum, ideal as a weekend transfer or half-day hire",
    ],
    popularStops: [],
    bestTime: "A Friday-evening or Saturday-morning departure suits the popular weekend-getaway crowd; the fort's sound-and-light and dinner are evening highlights.",
    description: `The Delhi to Neemrana one-way cab covers about 125 km down NH-48 (the Delhi-Jaipur expressway) to Neemrana, the Rajasthan town famous for the beautifully restored Neemrana Fort-Palace, a 15th-century hilltop fort turned heritage hotel that has become one of the most popular weekend getaways from Delhi. At Triveni Cabs we run this leg for weekend travellers, couples, wedding and event groups, and corporate offsites. The drive on the fast expressway is usually 2.5-3 hours.

Because Neemrana is 125 km away — under our 300 km minimum — this leg bills at that minimum fare, and we state it honestly upfront. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, the Ertiga SUV is ₹4,500, and the Innova Crysta is ₹5,400. Toll and parking are extra at actual. The minimum fare makes this an easy weekend transfer or a half-day hire with the driver available for your visit.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at the Neemrana Fort-Palace or any local hotel, or continue onward toward Jaipur or the Shekhawati towns. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Neemrana cost?", answer: "A one-way cab from Delhi to Neemrana starts at ₹3,300 for a Sedan. Because the 125 km route is under 300 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra." },
      { question: "What is the Delhi to Neemrana cab fare or price?", answer: "The Delhi to Neemrana cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 125 km route bills at our 300 km minimum at ₹11/km. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Neemrana take by cab?", answer: "Delhi to Neemrana is about 125 km and takes 2.5-3 hours by cab on NH-48, the Delhi-Jaipur expressway. It is an easy drive for a weekend getaway." },
      { question: "Why is the Delhi to Neemrana fare based on 300 km?", answer: "The route is 125 km, under our 300 km minimum, so it bills at that minimum and a Sedan is ₹3,300. This makes it an easy, good-value weekend transfer or half-day hire with the driver available for your visit." },
      { question: "What is Neemrana known for?", answer: "Neemrana is famous for the Neemrana Fort-Palace, a 15th-century hilltop fort restored as a heritage hotel, popular for weekend getaways, zip-lining, weddings and corporate offsites. It is one of the closest heritage escapes from Delhi." },
    ],
  },

  "delhi-to-bundi": {
    from: "Delhi",
    to: "Bundi",
    distance: "460 km",
    distanceNum: 460,
    time: "8-9 hours",
    highway: "NH-48 via Jaipur & Tonk",
    ...calcFares(460),
    highlights: [
      "Long Rajasthan run to Bundi, a charming, less-crowded town of stepwells and blue houses",
      "About 460 km, usually 8-9 hours on NH-48 via Jaipur and Tonk",
      "Known for the Taragarh Fort, Bundi Palace, and its many ornate stepwells (baoris)",
      "A genuine long-distance one-way drop billed on actual kilometres",
    ],
    popularStops: ["Jaipur", "Tonk"],
    bestTime: "An early start makes the long drive comfortable; the cooler October-March months are best for exploring the fort and stepwells.",
    description: `The Delhi to Bundi one-way cab covers about 460 km into Rajasthan to Bundi, a delightfully atmospheric and relatively uncrowded town famous for its ornate stepwells (baoris), blue-washed old quarter, the imposing Taragarh Fort and the murals of the Bundi Palace. At Triveni Cabs we run this leg for heritage travellers, photographers and families seeking a quieter Rajasthan experience away from the bigger tourist cities. The route runs south on NH-48 via Jaipur and Tonk, and at 460 km the drive is about 8-9 hours.

At 460 km this is a genuine long-distance one-way billed on actual kilometres. Our one-way Sedan is ₹5,060, calculated at ₹11/km, the Ertiga SUV is ₹6,900, and the Innova Crysta is ₹8,280. Toll and parking are extra at actual. There is no return charge — you pay only for your one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at your hotel in Bundi, or continue the short distance to Kota or onward to Chittorgarh on a wider Rajasthan trip. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver experienced on long routes. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Bundi cost?", answer: "A one-way cab from Delhi to Bundi costs ₹5,060 for a Sedan, based on the 460 km distance at ₹11/km. Ertiga SUV costs ₹6,900 and Innova Crysta costs ₹8,280. Toll and parking are extra at actual, with no return charge on a one-way drop." },
      { question: "What is the Delhi to Bundi cab fare or price?", answer: "The Delhi to Bundi cab price is ₹5,060 for a Sedan, ₹6,900 for an Ertiga SUV and ₹8,280 for an Innova Crysta, calculated on the 460 km distance at our standard per-km rates. Toll and parking are extra." },
      { question: "How long does Delhi to Bundi take by cab?", answer: "Delhi to Bundi is about 460 km and takes 8-9 hours by cab on NH-48 via Jaipur and Tonk. An early start makes the long drive comfortable." },
      { question: "Is the Delhi to Bundi one-way cab billed on actual distance?", answer: "Yes. At 460 km the route is well above our 300 km minimum, so it bills on actual kilometres — a Sedan is ₹5,060 at ₹11/km. You pay only for the one-way drop with no return charge. Toll and parking are extra." },
      { question: "What is Bundi known for?", answer: "Bundi is a quieter, atmospheric Rajasthan town known for the Taragarh Fort, the Bundi Palace with its old murals, its blue-washed lanes and its many ornate stepwells. It pairs well with nearby Kota and Chittorgarh." },
    ],
  },

  "delhi-to-mandawa": {
    from: "Delhi",
    to: "Mandawa",
    distance: "265 km",
    distanceNum: 265,
    time: "5-5.5 hours",
    highway: "NH-709 via Jhunjhunu (Shekhawati)",
    ...calcFares(265),
    highlights: [
      "Run into the Shekhawati region to Mandawa, famous for its painted havelis",
      "About 265 km, usually 5-5.5 hours via the Jhunjhunu / Shekhawati route",
      "Known as an open-air gallery of frescoed merchant havelis",
      "Billed at the 300 km minimum, ideal as a heritage weekend getaway",
    ],
    popularStops: ["Jhunjhunu"],
    bestTime: "The cooler October-March months are best for walking the haveli lanes; start early to arrive with time for sightseeing.",
    description: `The Delhi to Mandawa one-way cab covers about 265 km into the Shekhawati region of Rajasthan to Mandawa, a small town celebrated as an open-air art gallery for its wealth of frescoed havelis — the grand painted mansions built by Marwari merchant families, their walls covered in vivid murals. At Triveni Cabs we run this leg for heritage travellers, photographers, and weekend getaway groups drawn to Mandawa's atmospheric fort-hotel and haveli walks. The route runs through the Shekhawati towns via Jhunjhunu, and the drive is about 5-5.5 hours.

Because Mandawa is 265 km away — just under our 300 km minimum — this leg bills at that minimum fare, and we state it honestly upfront. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, the Ertiga SUV is ₹4,500, and the Innova Crysta is ₹5,400. Toll and parking are extra at actual. The minimum fare makes this good value for a heritage weekend getaway or a comfortable one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at your hotel in Mandawa, or continue to the other Shekhawati towns like Nawalgarh and Fatehpur, or onward toward Bikaner or Jaipur. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Mandawa cost?", answer: "A one-way cab from Delhi to Mandawa starts at ₹3,300 for a Sedan. Because the 265 km route is under 300 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra." },
      { question: "What is the Delhi to Mandawa cab fare or price?", answer: "The Delhi to Mandawa cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 265 km route bills at our 300 km minimum at ₹11/km. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Mandawa take by cab?", answer: "Delhi to Mandawa is about 265 km and takes 5-5.5 hours by cab via the Jhunjhunu / Shekhawati route. Start early to arrive with plenty of time for the haveli walks." },
      { question: "Why is the Delhi to Mandawa fare based on 300 km?", answer: "The route is 265 km, just under our 300 km minimum, so it bills at that minimum and a Sedan is ₹3,300. This makes it good value for a heritage weekend getaway or a comfortable one-way drop." },
      { question: "What is Mandawa known for?", answer: "Mandawa is the best-known town of the Shekhawati region, famous for its painted havelis — grand merchant mansions covered in vivid frescoes — earning it the nickname of an open-air art gallery. It pairs well with Nawalgarh and Fatehpur." },
    ],
  },

  "delhi-to-kumbhalgarh": {
    from: "Delhi",
    to: "Kumbhalgarh",
    distance: "720 km",
    distanceNum: 720,
    time: "12-13 hours (overnight or early start)",
    highway: "NH-48 via Jaipur & Ajmer",
    ...calcFares(720),
    highlights: [
      "Long Rajasthan run to Kumbhalgarh, home to a massive hill fort with the world's second-longest wall",
      "About 720 km, typically 12-13 hours on NH-48 via Jaipur and Ajmer",
      "Kumbhalgarh Fort is a UNESCO World Heritage Site with a wildlife sanctuary nearby",
      "Popular with heritage travellers, often combined with Udaipur and Nathdwara",
    ],
    popularStops: ["Jaipur", "Ajmer", "Nathdwara (optional)"],
    bestTime: "A long drive best begun very early or done overnight; the cooler months and the evening light-and-sound show at the fort are highlights.",
    description: `The Delhi to Kumbhalgarh one-way cab is a long Rajasthan journey of about 720 km to Kumbhalgarh, the mighty 15th-century hill fort in the Aravalli range whose perimeter wall — often called the "Great Wall of India" — is among the longest in the world. The fort is a UNESCO World Heritage Site, and the adjoining Kumbhalgarh Wildlife Sanctuary adds to the appeal. At Triveni Cabs we run this leg for heritage travellers and families, many of whom combine it with Udaipur and Nathdwara. The route runs south-west on NH-48 via Jaipur and Ajmer, and at 720 km this is honestly a long drive of about 12-13 hours, usually done overnight or with a very early start.

At 720 km this is a genuine long-distance one-way billed on actual kilometres. Our one-way Sedan is ₹7,920, calculated at ₹11/km, the Ertiga SUV is ₹10,800, and the Innova Crysta is ₹12,960. Toll and parking are extra at actual, and the driver's night halt and food allowance apply on a journey of this length — we confirm the exact inclusions when you book. There is no return charge on a one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at your hotel near Kumbhalgarh, or continue to Udaipur, Nathdwara or Ranakpur on a wider Mewar trip. Given the distance, an Innova Crysta is the most comfortable choice. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver experienced on long Rajasthan routes. Call or WhatsApp 7668570551 for a confirmed upfront fare.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Kumbhalgarh cost?", answer: "A one-way cab from Delhi to Kumbhalgarh costs ₹7,920 for a Sedan, based on the 720 km distance at ₹11/km. Ertiga SUV costs ₹10,800 and Innova Crysta costs ₹12,960. Toll, parking and driver night-halt allowance are extra at actual; we confirm inclusions when you book." },
      { question: "What is the Delhi to Kumbhalgarh cab fare or price?", answer: "The Delhi to Kumbhalgarh cab price is ₹7,920 for a Sedan, ₹10,800 for an Ertiga SUV and ₹12,960 for an Innova Crysta, calculated on the 720 km distance at our standard per-km rates. Toll, parking and night halt are extra." },
      { question: "How long does Delhi to Kumbhalgarh take by cab?", answer: "Delhi to Kumbhalgarh is about 720 km and takes 12-13 hours by cab on NH-48 via Jaipur and Ajmer. It is a long drive usually done overnight or with a very early start." },
      { question: "Is Delhi to Kumbhalgarh practical by one-way cab?", answer: "It is a long journey of about 720 km, so we are honest that it takes 12-13 hours and is best done overnight or with an early start. Many travellers prefer a private cab for the comfort and to combine it with Udaipur and Nathdwara. An Innova Crysta is the most comfortable choice." },
      { question: "What is Kumbhalgarh known for?", answer: "Kumbhalgarh is famous for its massive 15th-century hill fort, a UNESCO World Heritage Site, whose perimeter wall is among the longest in the world and is often called the Great Wall of India. A wildlife sanctuary adjoins the fort." },
    ],
  },

  "delhi-to-gulmarg": {
    from: "Delhi",
    to: "Gulmarg",
    distance: "880 km",
    distanceNum: 880,
    time: "2-day journey via Jammu & Srinagar",
    highway: "NH-44 (Jammu-Srinagar)",
    ...calcFares(880),
    highlights: [
      "Very long Himalayan run to Gulmarg in Kashmir, famous for its meadows and the Gulmarg Gondola",
      "About 880 km, realistically a 2-day drive via the Jammu-Srinagar NH-44 mountain highway",
      "Gulmarg is a top skiing and cable-car destination with sweeping alpine meadows",
      "Many travellers fly to Srinagar instead; we handle the ground transport either way",
    ],
    popularStops: ["Jammu", "Srinagar (common overnight halt)"],
    bestTime: "The mountain highway is best in summer; winter brings snow and possible road closures. Check road and weather conditions before travelling.",
    description: `The Delhi to Gulmarg one-way cab is a very long Himalayan journey of about 880 km to Gulmarg, the famed Kashmir hill station known for its vast alpine meadows, the Gulmarg Gondola (one of the highest cable cars in the world) and its winter skiing. At Triveni Cabs we run this leg for travellers who prefer a private car for the whole journey, though we are honest that this is a demanding drive: it runs on the Jammu-Srinagar NH-44 mountain highway, which is subject to weather, traffic and occasional closures, and at 880 km it is realistically a two-day journey, typically with an overnight halt around Jammu or Srinagar. Many travellers instead fly into Srinagar and take a cab onward to Gulmarg — a much shorter drive — and we are happy to arrange the ground transport whichever way you choose.

At 880 km this is a genuine long-distance one-way billed on actual kilometres. Our one-way Sedan is ₹9,680, calculated at ₹11/km, the Ertiga SUV is ₹13,200, and the Innova Crysta is ₹15,840. Toll and parking are extra at actual, and the driver's night halt and food allowance apply on a multi-day mountain journey of this length — we confirm the exact inclusions when you book. There is no return charge on a one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at your hotel in Gulmarg, or handle a Srinagar-airport-to-Gulmarg transfer if you fly in. Given the mountain roads and distance, an Innova Crysta is the most comfortable and sure-footed choice. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver. Call or WhatsApp 7668570551 for a confirmed upfront fare and current road advice.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Gulmarg cost?", answer: "A one-way cab from Delhi to Gulmarg costs ₹9,680 for a Sedan, based on the 880 km distance at ₹11/km. Ertiga SUV costs ₹13,200 and Innova Crysta costs ₹15,840. Toll, parking and driver night-halt allowance are extra at actual; we confirm inclusions when you book." },
      { question: "What is the Delhi to Gulmarg cab fare or price?", answer: "The Delhi to Gulmarg cab price is ₹9,680 for a Sedan, ₹13,200 for an Ertiga SUV and ₹15,840 for an Innova Crysta, calculated on the 880 km distance at our standard per-km rates. Toll, parking and night halt are extra." },
      { question: "How long does Delhi to Gulmarg take by cab?", answer: "Delhi to Gulmarg is about 880 km and is realistically a two-day drive on the Jammu-Srinagar NH-44 mountain highway, typically with an overnight halt around Jammu or Srinagar. The mountain road is weather-dependent, so we advise checking conditions before travelling." },
      { question: "Should I drive from Delhi or fly to Srinagar for Gulmarg?", answer: "We are honest that the road journey is a demanding two-day drive of about 880 km on a weather-dependent mountain highway. Many travellers fly into Srinagar and take a much shorter cab onward to Gulmarg. We handle the ground transport either way — a full drive from Delhi or a Srinagar-airport-to-Gulmarg transfer." },
      { question: "What is Gulmarg known for?", answer: "Gulmarg is a famous Kashmir hill station known for its wide alpine meadows, the Gulmarg Gondola cable car and its winter skiing. The mountain highway is best in summer, while winter brings snow and possible road closures." },
    ],
  },

  "delhi-to-pahalgam": {
    from: "Delhi",
    to: "Pahalgam",
    distance: "870 km",
    distanceNum: 870,
    time: "2-day journey via Jammu & Srinagar",
    highway: "NH-44 (Jammu-Srinagar)",
    ...calcFares(870),
    highlights: [
      "Very long Himalayan run to Pahalgam in Kashmir, known for the Betaab and Aru valleys",
      "About 870 km, realistically a 2-day drive via the Jammu-Srinagar NH-44 mountain highway",
      "Pahalgam is a base for the Amarnath Yatra and a scenic valley retreat",
      "Many travellers fly to Srinagar instead; we handle the ground transport either way",
    ],
    popularStops: ["Jammu", "Srinagar (common overnight halt)"],
    bestTime: "The mountain highway is best in summer; winter brings snow and possible road closures. Check road and weather conditions before travelling.",
    description: `The Delhi to Pahalgam one-way cab is a very long Himalayan journey of about 870 km to Pahalgam, the scenic Kashmir valley town famed for the Betaab Valley and the Aru Valley, its riverside meadows along the Lidder, and its role as a base for the Amarnath Yatra. At Triveni Cabs we run this leg for travellers who prefer a private car for the whole journey, though we are honest that this is a demanding drive: it runs on the Jammu-Srinagar NH-44 mountain highway, which is subject to weather, traffic and occasional closures, and at 870 km it is realistically a two-day journey, typically with an overnight halt around Jammu or Srinagar. Many travellers instead fly into Srinagar and take a cab onward to Pahalgam — a much shorter drive — and we are happy to arrange the ground transport whichever way you choose.

At 870 km this is a genuine long-distance one-way billed on actual kilometres. Our one-way Sedan is ₹9,570, calculated at ₹11/km, the Ertiga SUV is ₹13,050, and the Innova Crysta is ₹15,660. Toll and parking are extra at actual, and the driver's night halt and food allowance apply on a multi-day mountain journey of this length — we confirm the exact inclusions when you book. There is no return charge on a one-way drop.

We pick up from anywhere in Delhi with doorstep service and flight tracking, and drop at your hotel in Pahalgam, or handle a Srinagar-airport-to-Pahalgam transfer if you fly in. Given the mountain roads and distance, an Innova Crysta is the most comfortable and sure-footed choice. Every vehicle is well maintained, FASTag-enabled and driven by a verified driver. Call or WhatsApp 7668570551 for a confirmed upfront fare and current road advice.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Pahalgam cost?", answer: "A one-way cab from Delhi to Pahalgam costs ₹9,570 for a Sedan, based on the 870 km distance at ₹11/km. Ertiga SUV costs ₹13,050 and Innova Crysta costs ₹15,660. Toll, parking and driver night-halt allowance are extra at actual; we confirm inclusions when you book." },
      { question: "What is the Delhi to Pahalgam cab fare or price?", answer: "The Delhi to Pahalgam cab price is ₹9,570 for a Sedan, ₹13,050 for an Ertiga SUV and ₹15,660 for an Innova Crysta, calculated on the 870 km distance at our standard per-km rates. Toll, parking and night halt are extra." },
      { question: "How long does Delhi to Pahalgam take by cab?", answer: "Delhi to Pahalgam is about 870 km and is realistically a two-day drive on the Jammu-Srinagar NH-44 mountain highway, typically with an overnight halt around Jammu or Srinagar. The mountain road is weather-dependent, so we advise checking conditions before travelling." },
      { question: "Should I drive from Delhi or fly to Srinagar for Pahalgam?", answer: "We are honest that the road journey is a demanding two-day drive of about 870 km on a weather-dependent mountain highway. Many travellers fly into Srinagar and take a much shorter cab onward to Pahalgam. We handle the ground transport either way — a full drive from Delhi or a Srinagar-airport-to-Pahalgam transfer." },
      { question: "What is Pahalgam known for?", answer: "Pahalgam is a scenic Kashmir valley town known for the Betaab Valley, the Aru Valley and its riverside meadows along the Lidder, and it serves as a base for the Amarnath Yatra. The mountain highway is best in summer, while winter brings snow and possible road closures." },
    ],
  },
};
