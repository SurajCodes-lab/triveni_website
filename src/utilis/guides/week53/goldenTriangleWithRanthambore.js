// Week 53 circuit 4 — "The Golden Triangle with Ranthambore: seven days by car"
//
// WHY THIS PAGE EXISTS
// The site already ranks for `golden-triangle-tour-cost` and carries
// `golden-triangle-from-chandigarh` and the English-speaking-driver page. What
// none of them answers is the question a second-time visitor asks: the standard
// Delhi-Agra-Jaipur triangle is four days, so what do you do with seven?
//
// The answer most itineraries give is "add a day in each city", which is the
// wrong answer — the triangle's three cities are well covered in four days.
// What seven days buys is a tiger reserve and two stops that are genuinely on
// the route rather than detours from it: Bharatpur's bird sanctuary and the
// Chand Baori step well at Abhaneri, both of which sit on roads you are already
// driving.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'golden-triangle-with-ranthambore-by-car',
  path: '/golden-triangle-with-ranthambore-by-car',
  mood: 'heritage',
  cluster: 'road',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Circuit guide · Golden Triangle',
  crumbs: [{ name: 'Golden Triangle tour cost', url: '/golden-triangle-tour-cost' }],
  crumbName: 'Golden Triangle with Ranthambore by car',
  titleLead: 'The Golden Triangle with Ranthambore:',
  titleAccent: 'seven days, and what the extra three buy',
  title: 'The Golden Triangle with Ranthambore: Seven Days by Car',
  metaTitle: 'Golden Triangle with Ranthambore: 7 Days, ₹23,100',
  metaDescription: 'The seven-day Golden Triangle with Ranthambore by car: Delhi, Agra, Bharatpur, Ranthambore, Abhaneri and Jaipur. What the extra three days buy over the standard four-day triangle, with distances and the fare.',
  keywords: ['golden triangle with ranthambore', 'golden triangle 7 day itinerary', 'golden triangle tiger safari tour', 'delhi agra jaipur ranthambore by car', '7 day golden triangle tour cost', 'golden triangle extension ranthambore', 'bharatpur abhaneri golden triangle'],
  heroImage: `${IMG}/Golden_Triangle/Golden_triangle_hero_section.jpg`,
  heroAlt: 'The Taj Mahal at Agra, the second corner of the Golden Triangle',

  lead: 'The standard Golden Triangle is four days and it covers Delhi, Agra and Jaipur properly. Seven days should not be spent adding an afternoon to each — it should be spent adding the things the triangle drives straight past. This circuit puts Bharatpur between Agra and Ranthambore, two safari slots at Ranthambore itself, and the Chand Baori step well at Abhaneri on the Jaipur road. About 1,150 km in all, with four driving days and three local ones. A sedan bills ₹23,100 for the seven days on the 300 km per day minimum; an Innova Crysta ₹37,800.',

  keyFacts: [
    { label: 'The loop', value: '7 days · ~1,150 km' },
    { label: 'Driving days', value: '4 of 7' },
    { label: 'Longest single leg', value: 'Bharatpur → Ranthambore, 240 km' },
    { label: 'Sedan, 7 days', value: '₹23,100' },
  ],
  stickyLabel: 'Golden Triangle + Ranthambore',
  stickyPrice: 'Sedan ₹23,100 · 7 days',
  waText: 'Hi, I want the seven-day Golden Triangle with Ranthambore by car. Dates and headcount to follow.',

  intro: [
    'The Golden Triangle is the most-driven route in India and the four-day version works. Delhi for a day, Agra for a day with the Taj at sunrise, Jaipur for a day and a half, and home. Nothing is rushed and nothing important is missed.',
    'So the useful question is not how to stretch it but what to add. Three things qualify, in this order: Ranthambore, because a tiger reserve is the one experience the triangle has no equivalent of and it needs two safari slots rather than one; Bharatpur, because Keoladeo is forty kilometres from Agra and on the road you are already taking; and Abhaneri, because the Chand Baori step well is ninety kilometres before Jaipur on the Ranthambore road and takes an hour.',
    'Fares follow the published rate card — sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km — on a 300 km per day minimum, with tolls, parking and state entry at actual. Ranthambore safari permits are booked separately and must be fixed before the car.',
  ],

  timelineTitle: 'The circuit, day by day and kilometre by kilometre',
  timelineEyebrow: 'The loop',
  timelineIntro: 'Kilometre marks are cumulative from Delhi. Clockwise: down the Yamuna Expressway, east to the reserve, then up to Jaipur and home.',
  timeline: [
    { km: 0, name: 'Day 1: Delhi', time: 'Local day · 50 km', text: 'Humayun’s Tomb and the Qutb complex in the morning, Old Delhi around the Jama Masjid and Chandni Chowk in the afternoon, India Gate and the Lodhi Gardens for the evening. A walking day with the car between quarters.', stop: 'Night: Delhi', image: `${IMG}/Delhi/Humayun's_Tomb.jpg`, alt: 'Humayun’s Tomb in Delhi', tag: 'Local' },
    { km: 50, name: 'Day 2: Delhi to Agra', time: '3.5 hrs · 230 km', text: 'The Yamuna Expressway, six lanes and fully FASTag-enabled at Jewar and Mathura. Arrive by lunch, take Agra Fort and Itmad-ud-Daulah in the afternoon, and keep the Taj for sunrise the next morning — which is the single best decision on this itinerary.', stop: 'Night: Agra', image: `${IMG}/Agra/Agra_Hero_section.jpg`, alt: 'Agra Fort on the Yamuna', tag: 'Yamuna Expressway' },
    { km: 280, name: 'Day 3: Agra, then Bharatpur', time: '1 hr · 55 km', text: 'The Taj at opening, when the marble changes colour for twenty minutes and the crowd is a fraction of mid-morning. Fatehpur Sikri after breakfast, 40 km west, then 55 km on to Bharatpur for the late afternoon at Keoladeo — the causeway at dusk, with the cycle rickshaw drivers who double as spotters.', stop: 'Night: Bharatpur', image: `${IMG}/Agra/Fathepur_shikiri.jpg`, alt: 'Fatehpur Sikri west of Agra', tag: 'Short day' },
    { km: 335, name: 'Day 4: Bharatpur to Ranthambore', time: '4.5 hrs · 240 km', text: 'Keoladeo again at sunrise before the coaches, which is why the night here is worth it, then south-west through Dausa and Lalsot. Arrive at Sawai Madhopur for the afternoon safari if your permit allows; otherwise settle in and take two drives tomorrow.', stop: 'Night: Ranthambore', image: `${IMG}/Bharatpur/Bird_Sanctuary.jpg`, alt: 'Keoladeo Ghana bird sanctuary at Bharatpur', tag: 'Permits first' },
    { km: 575, name: 'Day 5: Ranthambore', time: 'Local day · 60 km', text: 'Two safaris, dawn and mid-afternoon, in different zones — which roughly doubles the chance of a sighting over a single drive. The tenth-century fort inside the park is part of the safari rather than a separate visit, and Padam Talao with the old hunting lodge above it is the view everyone recognises.', stop: 'Night: Ranthambore', image: `${IMG}/Ranthambore/Ranthambore Fort.jpg`, alt: 'The fort inside Ranthambore national park', tag: 'Local' },
    { km: 635, name: 'Day 6: Ranthambore to Jaipur via Abhaneri', time: '4 hrs · 180 km', text: 'North through Dausa, stopping at Abhaneri for the Chand Baori step well — 3,500 steps in thirteen storeys, and one of the most striking structures in Rajasthan for an hour of your time. Then into Jaipur for the walled city in the late afternoon and Nahargarh at sunset.', stop: 'Night: Jaipur', image: `${IMG}/Jaipur/Jaipur_hero_section.jpg`, alt: 'Hawa Mahal in the Jaipur walled city', tag: 'Abhaneri' },
    { km: 815, name: 'Day 7: Jaipur, then Delhi', time: '5 hrs · 280 km', text: 'Amber Fort at eight when the ramp is quiet, the City Palace and Jantar Mantar after it, and the Panna Meena stepwell if there is time. Leave Jaipur by two and NH-48 has you in Delhi for dinner.', stop: 'Home', image: `${IMG}/Jaipur/Amber_Fort.jpg`, alt: 'Amber Fort above the Maota lake', tag: 'NH-48' },
    { km: 1095, name: 'Delhi', time: 'Evening of day 7', text: 'About 1,095 km on the loop with the local days counted, 1,150 with the safari drives. Seven days at the rate card, tolls, parking and state entry at actual.', tag: 'End' },
  ],

  table: {
    title: 'The seven-day Golden Triangle with Ranthambore at a glance',
    caption: 'Day-by-day distance, driving time, night halt and highlights of the Golden Triangle with Ranthambore by car from Delhi',
    intro: 'Distances from the site’s corridor data. The three local days bill the 300 km per day minimum, which is why the seven-day fare is flat rather than the sum of the legs.',
    columns: [
      { key: 'day', label: 'Day' },
      { key: 'leg', label: 'From → to' },
      { key: 'km', label: 'Km', align: 'right' },
      { key: 'hrs', label: 'Hours' },
      { key: 'night', label: 'Night' },
      { key: 'see', label: 'What you see' },
    ],
    rows: [
      { day: '1', leg: 'Delhi local', km: '50', hrs: '2 driving', night: 'Delhi', see: 'Humayun’s Tomb, Qutb, Old Delhi' },
      { day: '2', leg: 'Delhi → Agra', km: '230', hrs: '3.5', night: 'Agra', see: 'Yamuna Expressway, Agra Fort, Baby Taj' },
      { day: '3', leg: 'Agra → Fatehpur Sikri → Bharatpur', km: '95', hrs: '2', night: 'Bharatpur', see: 'Taj at sunrise, Fatehpur Sikri, Keoladeo at dusk' },
      { day: '4', leg: 'Bharatpur → Ranthambore', km: '240', hrs: '4.5', night: 'Ranthambore', see: 'Keoladeo at dawn, Dausa, Lalsot' },
      { day: '5', leg: 'Ranthambore local', km: '60', hrs: '3 driving', night: 'Ranthambore', see: 'Two safaris, the fort, Padam Talao' },
      { day: '6', leg: 'Ranthambore → Abhaneri → Jaipur', km: '180', hrs: '4', night: 'Jaipur', see: 'Chand Baori, the walled city, Nahargarh' },
      { day: '7', leg: 'Jaipur → Delhi', km: '280', hrs: '5', night: 'Home', see: 'Amber at opening, City Palace, NH-48' },
      { day: 'Total', leg: 'The loop', km: '~1,095', hrs: '~24 driving', night: '6 nights', see: 'Three cities, a reserve and two step wells' },
    ],
    footnote: 'Fares for the seven days: Sedan ₹23,100, Ertiga ₹31,500, Innova Crysta ₹37,800, 12-seater Tempo Traveller ₹48,300. Tolls, parking and state entry at actual. Ranthambore safari permits are separate and close weeks ahead in season; the park shuts its core zones during the monsoon.',
  },

  sections: [
    {
      eyebrow: 'The argument',
      heading: 'What the extra three days actually buy over the four-day triangle',
      paras: [
        'Not more time in the three cities. Delhi, Agra and Jaipur are well covered in four days, and the commonest seven-day itinerary — an extra half-day in each, plus a slower pace — buys very little. What it buys is a lie-in.',
        'The three days buy a tiger reserve and two structures the triangle drives past. Ranthambore is the real addition: two safari slots in different zones, a tenth-century fort inside the park, and an experience with no equivalent anywhere on the standard route. It costs two driving days and a local one, which is exactly the three days you have.',
        'Bharatpur and Abhaneri are the free additions, and that is the part most itineraries miss. Keoladeo is 55 km from Agra on the road toward Ranthambore, so it adds a night rather than a detour. Chand Baori at Abhaneri is directly on the Ranthambore-to-Jaipur road and takes an hour. Neither costs you a day; they cost you the decision to stop.',
      ],
      link: { label: 'Golden Triangle tour cost, broken down', href: '/golden-triangle-tour-cost' },
      image: { src: `${IMG}/Ranthambore/Ranthambore_hero_section.jpg`, alt: 'Ranthambore national park', tag: 'Ranthambore', caption: 'Two safari slots in different zones is what the three extra days are really for.' },
    },
    {
      eyebrow: 'The permits',
      heading: 'Ranthambore safaris have to be booked before the car',
      paras: [
        'Permits are sold by the forest department per zone and per time slot, dawn and mid-afternoon, and the popular zones go weeks ahead — considerably further over long weekends and through the October to March season. This is the one element of the itinerary that cannot be arranged on the day.',
        'The practical order is to fix the permits for days four and five first, then build the rest of the circuit backwards from them. If your afternoon permit on day four does not come through, the fallback is two drives on day five, which is why the itinerary keeps a full local day there.',
        'The park closes its core zones during the monsoon, roughly July to September. If your dates fall in that window, Ranthambore is the wrong addition and the better one is Bundi and Kota, or Kumbhalgarh and Ranakpur on a Udaipur extension.',
      ],
      link: { label: 'Ranthambore sightseeing and safari zones', href: '/sightseeing/ranthambore' },
    },
    {
      eyebrow: 'The timing',
      heading: 'Why the Taj on day three rather than day two',
      paras: [
        'Because the Taj at sunrise and the Taj at two in the afternoon are different buildings. For roughly twenty minutes after the gates open the marble shifts through pink and cream as the light comes up, and the crowd is a small fraction of what it is by nine. Everyone who has seen both says the same thing.',
        'That means arriving in Agra on day two, taking Agra Fort and Itmad-ud-Daulah that afternoon, and giving the Taj the following morning. An itinerary that drives Delhi to Agra and visits the Taj the same afternoon has technically seen it and has missed the point.',
        'One hard constraint: the Taj is closed on Fridays. Agra Fort, Fatehpur Sikri, Itmad-ud-Daulah and Sikandra are all open, so a Friday in Agra is far from wasted — but if the Taj is the reason for the trip, the dates should be planned around it rather than discovered at the gate.',
      ],
      link: { label: 'Delhi to Agra distance, fare and the expressway', href: '/distance/delhi-to-agra' },
    },
    {
      eyebrow: 'The alternatives',
      heading: 'If Ranthambore is closed or full, what else fits in three days?',
      paras: [
        'Bundi and Kota, east of Ranthambore, are the closest substitute in geography and nothing like it in character — a step-well town and a palace with some of the best surviving Rajput wall painting in the state, and almost no visitors. They slot into exactly the same days.',
        'Gwalior and Orchha are the other direction and the stronger choice if forts interest you more than wildlife. Gwalior is 120 km from Agra with a hill fort Babur called the pearl among Indian fortresses; Orchha is a further 115 km, with cenotaphs along the Betwa in a village of a few thousand people.',
        'Udaipur is the addition people most often ask about and the one we would advise against on seven days. It is 400 km from Jaipur and deserves two nights of its own, which turns this into a ten-day trip. Keep it for the full Rajasthan circuit.',
      ],
      link: { label: 'The ten-day Rajasthan grand circuit', href: '/rajasthan-grand-circuit-by-car' },
    },
  ],

  tips: [
    { title: 'Permits before the car, always', text: 'Ranthambore safari slots are zone-specific and sell out weeks ahead in season. Fix those first; everything else on this itinerary can move around them.' },
    { title: 'The Taj is closed on Fridays', text: 'Plan the Agra night so the sunrise visit does not land on a Friday. Everything else in Agra is open, but the one monument you came for is not.' },
    { title: 'Keoladeo rewards two visits', text: 'Dusk on the day you arrive and sunrise the next morning. That is the entire argument for a night at Bharatpur rather than driving through.' },
    { title: 'Abhaneri takes an hour, not a day', text: 'Chand Baori is directly on the Ranthambore-to-Jaipur road. Tell the driver in advance and it costs you an hour; discover it afterwards and it costs you nothing but regret.' },
    { title: 'Amber Fort at eight', text: 'The elephant-gate ramp queues badly from mid-morning. Being there at opening on day seven is worth more than an extra hour in bed.' },
  ],

  faqs: [
    { question: 'Is the Golden Triangle with Ranthambore worth seven days?', answer: 'Yes, if the three extra days go on Ranthambore rather than on a slower pace in the three cities. Two safari slots in different zones, a tenth-century fort inside the park, and Keoladeo and Abhaneri picked up on roads you are already driving. Seven days spent adding half a day to each city buys very little.' },
    { question: 'How much does a seven-day Golden Triangle with Ranthambore cost by car?', answer: 'Sedan ₹23,100, Ertiga ₹31,500, Innova Crysta ₹37,800 and a 12-seater Tempo Traveller ₹48,300 for the seven days, on the published rate card with its 300 km per day minimum. That covers the vehicle, the driver and fuel. Tolls, parking, state entry and the driver night allowance are at actual; safari permits, monument tickets and hotels are separate.' },
    { question: 'How many Ranthambore safaris should I book?', answer: 'Two, in different zones — one at dawn and one mid-afternoon. A single drive is largely a matter of luck; two in different zones roughly doubles the chance of a sighting and shows you more of the park either way. The itinerary keeps a full local day at Ranthambore specifically so two drives fit.' },
    { question: 'Can I do the Golden Triangle with Ranthambore in five days?', answer: 'You can drive it, but you would get one safari and lose either Bharatpur or Abhaneri, and Jaipur would be reduced to an afternoon. If five days is the constraint, the honest advice is the standard four-day triangle plus one unhurried extra day rather than a compressed seven-day route.' },
    { question: 'When is the best time for this circuit?', answer: 'October to March. Ranthambore closes its core zones during the monsoon from roughly July to September, Keoladeo’s migratory bird count peaks between November and February, and the Agra and Jaipur heat from April to June is punishing. November to February is the strongest window for all three.' },
    { question: 'Does the same car and driver do the whole circuit?', answer: 'Yes. One vehicle and one driver for the full seven days, which matters on a route with this many fixed timings — the Taj at sunrise, Amber at opening, two safari slots and Keoladeo at dusk. A driver who has the whole itinerary stops needing to be told. The driver night allowance is at actual.' },
  ],

  related: [
    { label: 'Golden Triangle tour cost', href: '/golden-triangle-tour-cost' },
    { label: 'Agra sightseeing', href: '/sightseeing/agra' },
    { label: 'Jaipur sightseeing', href: '/sightseeing/jaipur' },
    { label: 'Ranthambore sightseeing', href: '/sightseeing/ranthambore' },
    { label: 'Delhi to Agra distance and fare', href: '/distance/delhi-to-agra' },
    { label: 'Delhi to Jaipur distance and fare', href: '/distance/delhi-to-jaipur' },
    { label: 'The ten-day Rajasthan grand circuit', href: '/rajasthan-grand-circuit-by-car' },
    { label: 'Weekend getaways from Agra', href: '/weekend-getaways-from-agra-by-car' },
  ],
};
