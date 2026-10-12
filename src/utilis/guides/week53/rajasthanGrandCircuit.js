// Week 53 circuit 1 — "The Rajasthan grand circuit by car: ten days, six cities"
//
// WHY THIS PAGE EXISTS
// The site has 28 city hubs across Rajasthan and Uttarakhand and a corridor page
// for nearly every pair, but nothing that answers the multi-city journey most
// visitors are actually planning. Somebody flying into Delhi or Jaipur for ten
// days is not choosing between Jodhpur and Udaipur — they are doing both, plus
// Jaisalmer, and they want to know the order, the driving days and what the car
// costs for the whole thing. Every individual corridor page answers a leg; none
// answers the trip.
//
// It is designed to add to the city pages rather than compete with them. Each
// city section is three or four sentences and hands off to the city hub, the
// sightseeing page or the corridor page that covers it properly. The value this
// page adds is the sequence, the driving arithmetic and the one fare.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'rajasthan-grand-circuit-by-car',
  path: '/rajasthan-grand-circuit-by-car',
  mood: 'desert',
  cluster: 'road',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Circuit guide · Rajasthan',
  crumbs: [{ name: 'Rajasthan tours', url: '/sightseeing/jaipur' }],
  crumbName: 'Rajasthan grand circuit by car',
  titleLead: 'The Rajasthan grand circuit by car:',
  titleAccent: 'ten days, six cities, one car',
  title: 'The Rajasthan Grand Circuit by Car: Ten Days, Six Cities',
  metaTitle: 'Rajasthan Circuit by Car: 10 Days, 6 Cities, ₹33,000',
  metaDescription: 'The ten-day Rajasthan circuit by car from Delhi: Jaipur, Pushkar, Jodhpur, Jaisalmer, Udaipur and Chittorgarh. Day-by-day distances, driving hours, night halts and the fare for the whole trip.',
  keywords: ['rajasthan circuit by car', 'rajasthan road trip itinerary', '10 day rajasthan tour by car', 'rajasthan tour from delhi by car', 'jaipur jodhpur jaisalmer udaipur itinerary', 'rajasthan self drive circuit', 'golden triangle rajasthan extension'],
  heroImage: `${IMG}/Jaisalmer/Jaisalmer_hero_section.jpg`,
  heroAlt: 'Jaisalmer fort at dusk, the furthest point of the Rajasthan grand circuit',

  lead: 'Ten days is the shortest honest Rajasthan trip that reaches Jaisalmer and still gives Udaipur more than an afternoon. The loop runs anticlockwise from Delhi — Jaipur, Pushkar, Jodhpur, Jaisalmer, Udaipur, Chittorgarh and home — about 2,400 km in all, with six driving days and four local ones. Going anticlockwise matters: it puts the two longest desert legs early while you are fresh, and leaves the short, pretty Udaipur-to-Chittorgarh-to-Delhi run for the end. A sedan bills ₹33,000 for the ten days on the 300 km per day minimum; an Innova Crysta ₹54,000.',

  keyFacts: [
    { label: 'The loop', value: '10 days · ~2,400 km' },
    { label: 'Driving days', value: '6 of 10' },
    { label: 'Longest single leg', value: 'Jodhpur → Jaisalmer, 285 km' },
    { label: 'Sedan, 10 days', value: '₹33,000' },
  ],
  stickyLabel: 'Rajasthan circuit cab',
  stickyPrice: 'Sedan ₹33,000 · 10 days',
  waText: 'Hi, I want the ten-day Rajasthan grand circuit by car. Dates and headcount to follow.',

  intro: [
    'Rajasthan rewards a car more than almost anywhere in India, because the distances between its cities are real but the roads between them are good, and the things worth stopping for — a step well, a fort on a ridge, a village of painted houses — are not on any train line. The circuit below is the one our drivers run most often, and it is built around two constraints that catch first-time planners out: Jaisalmer is a long way from everything, and Udaipur deserves two nights rather than one.',
    'Distances are from the site’s own corridor data. Fares follow the published rate card — sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km — on a 300 km per day minimum, with tolls, parking and state entry at actual. The ten-day figure is a flat one rather than the sum of the legs, because the local days bill the minimum.',
    'One thing to settle before booking anything: October to March. This is desert and desert-edge country and from April to June daytime temperatures pass 45 degrees on the Bikaner and Jaisalmer stretches, with long open roads and no shade. The circuit is not worth doing in that window.',
  ],

  timelineTitle: 'The circuit, day by day and kilometre by kilometre',
  timelineEyebrow: 'The loop',
  timelineIntro: 'Kilometre marks are cumulative from Delhi. Anticlockwise: the long desert legs early, the short pretty ones at the end.',
  timeline: [
    { km: 0, name: 'Day 1: Delhi to Jaipur', time: '5 hrs · 280 km', text: 'NH-48 through Gurgaon, Behror and Shahpura, six-lane the whole way. Leave early and you have the afternoon in the walled city. Neemrana makes a good lunch stop if you want one, 110 km out.', stop: 'Night: Jaipur', image: `${IMG}/Jaipur/Jaipur_hero_section.jpg`, alt: 'Hawa Mahal in the Jaipur walled city', tag: 'NH-48' },
    { km: 280, name: 'Day 2: Jaipur', time: 'Local day · 60 km', text: 'Amber Fort at eight when the ramp is quiet, the City Palace and Jantar Mantar in the walled city, the Panna Meena stepwell, and Nahargarh on the ridge for the evening. This is the one city on the circuit where arriving early at a single monument genuinely changes the day.', stop: 'Night: Jaipur', image: `${IMG}/Jaipur/Amber_Fort.jpg`, alt: 'Amber Fort above the Maota lake', tag: 'Local' },
    { km: 340, name: 'Day 3: Jaipur to Pushkar via Ajmer', time: '3 hrs · 145 km', text: 'A short day on purpose, after two long ones. Ajmer for the Dargah and Ana Sagar on the way in, then over the Nag Pahar to Pushkar for the lake and the fifty-two ghats in the late afternoon. Pushkar is walked, not driven — the car stops at the edge of town.', stop: 'Night: Pushkar', image: `${IMG}/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg`, alt: 'The ghats around Pushkar lake', tag: 'NH-58' },
    { km: 485, name: 'Day 4: Pushkar to Jodhpur', time: '3.5 hrs · 185 km', text: 'West into Marwar on NH-58 and NH-25. Arrive by lunch, walk the old city and the restored Toorji stepwell as it cools, and keep Mehrangarh for the following morning when it opens — the audio guide there is one of the best in the country and deserves an unhurried three hours.', stop: 'Night: Jodhpur', image: `${IMG}/Jodhpur/Jodhpur_Hero_section.jpg`, alt: 'Mehrangarh above the blue town of Jodhpur', tag: 'NH-25' },
    { km: 670, name: 'Day 5: Jodhpur to Jaisalmer', time: '5 hrs · 285 km', text: 'Mehrangarh from opening, then the long run west across the Thar on NH-125. Osian makes a stop 65 km out if you want the Jain temples. Reach Jaisalmer by late afternoon and go straight out to the Sam dunes for sunset; the fort can wait for morning.', stop: 'Night: Jaisalmer', image: `${IMG}/Jaisalmer/Sam_Sand_Dunes.jpg`, alt: 'The Sam dunes west of Jaisalmer at sunset', tag: 'NH-125' },
    { km: 955, name: 'Day 6: Jaisalmer', time: 'Local day · 90 km', text: 'The fort walls at sunrise, which is the single best hour of the whole circuit — several thousand people still live inside the walls and the sandstone turns at first light. Then the Patwon ki Haveli, the Gadisar tank, and Kuldhara on the Khuri road in the afternoon.', stop: 'Night: Jaisalmer', image: `${IMG}/Jaisalmer/Jaisalmer_Fort.jpg`, alt: 'Jaisalmer fort, still inhabited', tag: 'Local' },
    { km: 1045, name: 'Day 7: Jaisalmer to Udaipur', time: '8 hrs · 495 km', text: 'The longest day of the circuit and the one worth knowing about in advance. Eight hours south-east through Barmer and Pali, and the landscape changes completely — sand to Aravalli hills. Leave at six. Those who would rather not do it in one push break at Jodhpur or Mount Abu, which adds a night.', stop: 'Night: Udaipur', image: `${IMG}/Udaipur/Udaipur_hero_section.jpg`, alt: 'Lake Pichola and the City Palace at Udaipur', tag: 'Longest leg' },
    { km: 1540, name: 'Day 8: Udaipur', time: 'Local day · 40 km', text: 'The City Palace at opening before the boats fill, Jagdish temple and the old town, the Monsoon Palace on the ridge for sunset, and the courtyard performance at Bagore ki Haveli in the evening. Two nights here is the single best decision on the itinerary.', stop: 'Night: Udaipur', image: `${IMG}/Udaipur/City_Palace.jpg`, alt: 'The City Palace along the Pichola waterfront', tag: 'Local' },
    { km: 1580, name: 'Day 9: Udaipur to Chittorgarh', time: '2 hrs · 115 km', text: 'A deliberately short drive to the largest fort in India by area — thirteen square kilometres on a hill, with seven gates climbing to it. The car goes up and around inside with you, which is how the fort is actually seen. The Vijay Stambh, the Rana Kumbha palace and the Gaumukh reservoir fill the afternoon; the sound-and-light show fills the evening.', stop: 'Night: Chittorgarh', image: `${IMG}/Chittorgarh/Vijay_Stambh.jpg`, alt: 'The Vijay Stambh inside Chittorgarh fort', tag: 'NH-48' },
    { km: 1695, name: 'Day 10: Chittorgarh to Delhi', time: '9-10 hrs · 575 km', text: 'North on NH-48 through Bhilwara, Ajmer and Jaipur. A long final day, and the one most people underestimate — leave by six. Those with an extra day break it at Jaipur instead and arrive in Delhi fresh on day eleven.', stop: 'Home', image: `${IMG}/Chittorgarh/Vijay_Stambh.jpg`, alt: 'Chittorgarh fort on its hill', tag: 'NH-48' },
    { km: 2270, name: 'Delhi', time: 'Evening of day 10', text: 'About 2,270 km on the loop with the local days counted, 2,400 with the detours most people add. Ten days at the rate card, tolls and state entry at actual.', tag: 'End' },
  ],

  table: {
    title: 'The ten-day Rajasthan circuit at a glance',
    caption: 'Day-by-day distance, driving time, night halt and highlights of the Rajasthan grand circuit by car from Delhi',
    intro: 'Distances from the site’s corridor data. The four local days bill the 300 km per day minimum, which is why the ten-day fare is a flat figure rather than the sum of the legs.',
    columns: [
      { key: 'day', label: 'Day' },
      { key: 'leg', label: 'From → to' },
      { key: 'km', label: 'Km', align: 'right' },
      { key: 'hrs', label: 'Hours' },
      { key: 'night', label: 'Night' },
      { key: 'see', label: 'What you see' },
    ],
    rows: [
      { day: '1', leg: 'Delhi → Jaipur', km: '280', hrs: '5', night: 'Jaipur', see: 'NH-48, the walled city' },
      { day: '2', leg: 'Jaipur local', km: '60', hrs: '2 driving', night: 'Jaipur', see: 'Amber, City Palace, Nahargarh' },
      { day: '3', leg: 'Jaipur → Ajmer → Pushkar', km: '145', hrs: '3', night: 'Pushkar', see: 'Dargah, Ana Sagar, Pushkar ghats' },
      { day: '4', leg: 'Pushkar → Jodhpur', km: '185', hrs: '3.5', night: 'Jodhpur', see: 'Marwar road, old city, Toorji stepwell' },
      { day: '5', leg: 'Jodhpur → Jaisalmer', km: '285', hrs: '5', night: 'Jaisalmer', see: 'Mehrangarh, the Thar, Sam dunes' },
      { day: '6', leg: 'Jaisalmer local', km: '90', hrs: '3 driving', night: 'Jaisalmer', see: 'Fort at sunrise, Patwon ki Haveli, Kuldhara' },
      { day: '7', leg: 'Jaisalmer → Udaipur', km: '495', hrs: '8', night: 'Udaipur', see: 'Barmer, Pali, the Aravalli change' },
      { day: '8', leg: 'Udaipur local', km: '40', hrs: '1.5 driving', night: 'Udaipur', see: 'City Palace, Jagdish, Monsoon Palace' },
      { day: '9', leg: 'Udaipur → Chittorgarh', km: '115', hrs: '2', night: 'Chittorgarh', see: 'India’s largest fort by area' },
      { day: '10', leg: 'Chittorgarh → Delhi', km: '575', hrs: '9–10', night: 'Home', see: 'Bhilwara, Ajmer, Jaipur, NH-48' },
      { day: 'Total', leg: 'The loop', km: '~2,270', hrs: '~42 driving', night: '9 nights', see: 'Six cities, one car' },
    ],
    footnote: 'Fares for the ten days: Sedan ₹33,000, Ertiga ₹45,000, Innova Crysta ₹54,000, 12-seater Tempo Traveller ₹69,000. Tolls, parking and state entry at actual. October to March only — the Jaisalmer and Barmer stretches are severe from April to June.',
  },

  sections: [
    {
      eyebrow: 'The order',
      heading: 'Why anticlockwise, and why Jaisalmer on day five rather than day two',
      paras: [
        'Because the two hardest driving days are Jodhpur to Jaisalmer and Jaisalmer to Udaipur, and you want them in the middle of the trip rather than at either end. Going clockwise — Udaipur first, Jaisalmer late — puts the 495 km desert crossing on day eight, when everyone is tired of the car, and then asks for a 560 km run home on day nine. Anticlockwise front-loads the distance while the trip still feels new and finishes with two short, scenic days.',
        'The second reason is light. Jaisalmer fort at sunrise and the Sam dunes at sunset are the two fixed points of the whole circuit, and reaching Jaisalmer in the late afternoon of day five gives you the dunes that evening and the fort the next morning. Arriving at midday, which is what a clockwise run tends to produce, loses both.',
      ],
      link: { label: 'Jodhpur to Jaisalmer: the corridor in detail', href: '/distance/jodhpur-to-jaisalmer' },
      image: { src: `${IMG}/Jodhpur/Mehrangarh Fort.jpg`, alt: 'Mehrangarh fort on its rock above Jodhpur', tag: 'Jodhpur', caption: 'Mehrangarh from opening on day five, then 285 km west across the Thar the same afternoon.' },
    },
    {
      eyebrow: 'The hard day',
      heading: 'Jaisalmer to Udaipur is eight hours. Should I break it?',
      paras: [
        'If you have an eleventh day, yes, and Mount Abu is the place to do it — 490 km from Jaisalmer with a 27 km hairpin climb at the end, Rajasthan’s only hill station, and a genuine change of air after four days of desert. From there Udaipur is a further 165 km and three and a half hours, which makes day eight an easy morning.',
        'If you have exactly ten days, do it in one push but start at six. The road through Barmer and Pali is good and the traffic is light; what makes it tiring is the sameness of the landscape for the first four hours. Our drivers on this leg plan two proper stops rather than one, which helps more than it sounds.',
        'What does not work is attempting it after a late morning at Jaisalmer fort. Either take the fort at sunrise and leave by eight, or accept that you will arrive in Udaipur after dark and lose the evening.',
      ],
      link: { label: 'Weekend getaways from Jaisalmer, including the Udaipur run', href: '/weekend-getaways-from-jaisalmer-by-car' },
    },
    {
      eyebrow: 'The variations',
      heading: 'What to cut if you have seven days, and what to add if you have fourteen',
      paras: [
        'At seven days, cut Jaisalmer. That sounds like heresy and it is the right call: Jaisalmer costs you two driving days and a local day — nearly half a seven-day trip — and without it the circuit becomes Delhi, Jaipur, Pushkar, Jodhpur, Udaipur and home, which is 1,500 km and far more relaxed. Keep Jaisalmer for a trip where it is the point rather than a detour.',
        'At fourteen days, add three things in this order. Bikaner, between Jaipur and Jodhpur, for Junagarh and the Deshnoke temple. Kumbhalgarh and Ranakpur between Jodhpur and Udaipur — a 36 km fort wall and 1,444 carved marble pillars, and the single best half-day in Rajasthan that most itineraries skip. And Ranthambore on the way home from Chittorgarh, built around two safari slots rather than one.',
        'What not to add is more cities. The commonest mistake on a Rajasthan itinerary is treating it as a list of places rather than a sequence of drives, and a fourteen-day circuit with nine cities is a fortnight of packing.',
      ],
      link: { label: 'Places to visit near Jodhpur, including Kumbhalgarh and Ranakpur', href: '/places-to-visit-near-jodhpur' },
    },
    {
      eyebrow: 'The car',
      heading: 'Which vehicle for a ten-day Rajasthan circuit?',
      paras: [
        'For two people, a sedan. The roads on this circuit are good — NH-48, NH-25 and NH-125 are four-lane or better for almost all of it — and the only rough stretches are the approach roads to a few desert camps. A sedan at ₹11 per km is the sensible choice and bills ₹33,000 for the ten days.',
        'For a family of four with luggage, an Ertiga or an Innova Crysta. Ten days means real luggage, and the difference between arriving comfortable and arriving cramped over 2,400 km is worth the ₹12,000 to ₹21,000. The Innova is what most of our ten-day Rajasthan bookings take.',
        'For six or more, the 12-seater Tempo Traveller at ₹23 per km. It is the only vehicle that carries that group with luggage, and at ₹69,000 split six ways it is cheaper per head than two sedans.',
      ],
      link: { label: 'The published rate card', href: '/routes' },
    },
  ],

  tips: [
    { title: 'Book Ranthambore and the camps first', text: 'Safari permits and the better desert camps are sold by slot and go weeks ahead in the October to March season. Fix those, then build the car around them — not the other way round.' },
    { title: 'Two nights in Udaipur, one everywhere else', text: 'Udaipur is the one city on this circuit where a single night means seeing the lake and missing the city. Everywhere else, one night and an early start is enough.' },
    { title: 'The fort hours are the itinerary', text: 'Amber at eight, Jaisalmer fort at sunrise, Mehrangarh at opening, Ranakpur after noon. Four of the ten days are shaped by when a monument is best rather than by distance.' },
    { title: 'Carry cash for the small stops', text: 'Step wells, village temples and the smaller forts along the way often take cash only, and card acceptance on the Barmer and Pali stretch is patchy.' },
    { title: 'Avoid the Pushkar fair unless it is the point', text: 'The camel fair around Kartik Purnima in November fills every room in Pushkar and Ajmer months ahead and closes roads. Either plan the circuit around it deliberately or keep well clear.' },
  ],

  faqs: [
    { question: 'How many days do you need for a Rajasthan circuit by car?', answer: 'Ten is the shortest trip that reaches Jaisalmer and still gives Udaipur more than an afternoon. Seven works well if you drop Jaisalmer, which costs two driving days and a local day on its own. Fourteen lets you add Bikaner, Kumbhalgarh with Ranakpur, and Ranthambore without rushing anything.' },
    { question: 'How much does a ten-day Rajasthan trip by car cost?', answer: 'Sedan ₹33,000, Ertiga ₹45,000, Innova Crysta ₹54,000 and a 12-seater Tempo Traveller ₹69,000 for the ten days, on the published rate card with its 300 km per day minimum. That covers the vehicle, the driver and fuel. Tolls, parking, state entry and the driver night allowance are at actual, and hotels are separate.' },
    { question: 'What is the best time of year for the Rajasthan circuit?', answer: 'October to March, without much argument. From April to June the Jaisalmer, Barmer and Bikaner stretches pass 45 degrees with long open roads and no shade, which makes the driving days genuinely unpleasant. The monsoon between July and September is bearable and the Aravalli sections look very different, but the desert is not at its best.' },
    { question: 'Should I do Rajasthan clockwise or anticlockwise?', answer: 'Anticlockwise — Jaipur, Pushkar, Jodhpur, Jaisalmer, Udaipur, Chittorgarh. It puts the two long desert legs in the middle of the trip rather than at the end, and it reaches Jaisalmer in the late afternoon, which gives you the dunes that evening and the fort at sunrise the next morning. Clockwise tends to arrive at Jaisalmer at midday and lose both.' },
    { question: 'Is the Jaisalmer to Udaipur drive worth it, or should I fly?', answer: 'There is no useful flight between them, so the question is really whether to break the drive. Eight hours through Barmer and Pali is a long day but a good road; if you have an extra day, breaking it at Mount Abu is the best addition available to this itinerary. In one push, start at six.' },
    { question: 'Can the same car and driver do the whole circuit?', answer: 'Yes, and that is how we run it. One vehicle and one driver for the full ten days, which over 2,400 km matters more than it sounds — the driver learns the group, the luggage and the pace, and the fort timings stop needing to be explained. The driver night allowance is at actual.' },
  ],

  related: [
    { label: 'Jaipur sightseeing', href: '/sightseeing/jaipur' },
    { label: 'Jodhpur sightseeing', href: '/sightseeing/jodhpur' },
    { label: 'Udaipur sightseeing', href: '/sightseeing/udaipur' },
    { label: 'Jaisalmer sightseeing', href: '/sightseeing/jaisalmer' },
    { label: 'Delhi to Jaipur distance and fare', href: '/distance/delhi-to-jaipur' },
    { label: 'Jodhpur to Jaisalmer distance and fare', href: '/distance/jodhpur-to-jaisalmer' },
    { label: 'Weekend getaways from Jodhpur', href: '/weekend-getaways-from-jodhpur-by-car' },
    { label: 'Monthly car rental in Jodhpur', href: '/monthly-car-rental-jodhpur' },
  ],
};
