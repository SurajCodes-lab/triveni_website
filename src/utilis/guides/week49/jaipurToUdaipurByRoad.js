// Week 49 route guide — Jaipur to Udaipur by road. The corridor has a booking
// page, a distance page and a toll page; this is the drive itself, in the
// order it happens: the flat NH-48 to Ajmer, the change of character at
// Beawar, the Aravalli bends through Bhim and Rajsamand, and the Chittorgarh
// alternative. Every distance, time and toll is the one those pages publish.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'jaipur-to-udaipur-by-road',
  path: '/jaipur-to-udaipur-by-road',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'jaipur to udaipur distance' },

  eyebrow: 'Road guide · Jaipur to Udaipur',
  crumbs: [{ name: 'Jaipur', url: '/jaipur' }, { name: 'Jaipur to Udaipur cab', url: '/jaipur-to-udaipur' }],
  crumbName: 'Jaipur to Udaipur by road',
  titleLead: 'Jaipur to Udaipur by road:',
  titleAccent: '395 km on NH-48, and where the Aravallis begin',
  title: 'Jaipur to Udaipur by Road: 395 km on NH-48, and Where the Aravallis Begin',
  metaTitle: 'Jaipur to Udaipur by Road: 395 km, 6–7 hrs, Tolls ₹350',
  metaDescription: 'Jaipur to Udaipur by car: 395 km on NH-48 via Ajmer, Beawar and Rajsamand in 6–7 hours, three plazas totalling ₹350. Where the Aravalli bends begin, the Chittorgarh line and sedan fares from ₹4,345.',
  keywords: ['jaipur to udaipur distance', 'jaipur to udaipur by road', 'jaipur to udaipur by car', 'jaipur to udaipur cab', 'jaipur to udaipur route', 'jaipur to udaipur toll', 'jaipur to udaipur via chittorgarh', 'jaipur to udaipur taxi fare', 'jaipur udaipur road condition'],
  heroImage: `${IMG}/Udaipur/Fateh_Sagar_Lake.jpg`,
  heroAlt: 'Fateh Sagar Lake at Udaipur, the end of the 395 km drive from Jaipur',

  lead: 'Jaipur to Udaipur by road is 395 km on NH-48 and six to seven hours, and it is two drives wearing one highway number. The first is flat and quick: four-lane past the marble yards of Kishangarh to Ajmer in about two hours, then on to Beawar. The second starts at Beawar, where the plain gives way to the Aravallis and the road bends and climbs through Bhim into Rajsamand, the prettiest and slowest stretch of the day. Three plazas take ₹350 from a car; a sedan is ₹4,345 one way at ₹11 a kilometre.',
  keyFacts: [
    { label: 'Distance', value: '395 km · NH-48' },
    { label: 'Drive time', value: '6–7 hrs' },
    { label: 'Tolls, car one-way', value: '₹350 · 3 plazas' },
    { label: 'Sedan, one-way', value: '₹4,345' },
  ],
  stickyLabel: 'Jaipur–Udaipur cab',
  stickyPrice: 'Sedan ₹4,345',
  waText: 'Hi, I want a cab from Jaipur to Udaipur by road. Date and number of passengers to follow.',

  intro: [
    'This is the long side of the Rajasthan triangle, and the one where the landscape actually changes. This guide walks the 395 km in order, says where the character of the road turns, where the plazas and the dhabas are, when to leave, and whether the Chittorgarh line is worth its extra hours. It ends with the fare on the rate card and the two-day version with the lakes.',
    'Every figure is the one the rest of the site uses: the distance, time and stops from our distance page, the three plazas from the toll page, and the fares from the rate card, ₹11 a kilometre for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, tolls and parking at actuals.',
  ],

  timelineTitle: 'Jaipur to Udaipur, kilometre by kilometre',
  timelineEyebrow: 'NH-48 via Ajmer, Beawar and Rajsamand',
  timelineIntro: 'Kilometre marks are from central Jaipur and the clock assumes a six o’clock start with breakfast at Kishangarh or Ajmer, which is how the drive comes in at about six and a half hours. The plazas are where the toll page puts them.',
  timeline: [
    { km: 0, name: 'Jaipur', time: '6 am', text: 'Out on the Ajmer road while the city is quiet. Leave at six and you are through Ajmer before the heat builds, which from April to June is the whole point.', tag: 'Start', image: `${IMG}/Jaipur/Hawa_Mahal.jpg`, alt: 'Hawa Mahal in Jaipur at dawn' },
    { km: 95, name: 'Kishangarh', time: '7.30 am', text: 'The marble yards line the highway for kilometres. The dhabas here and at Ajmer are the reliable ones for a proper meal; after Beawar the choice thins out until Nathdwara.', stop: 'Breakfast' },
    { km: 135, name: 'Ajmer', time: '8.15 am', text: 'The first plaza, ₹145 for a car, and the Pushkar turn just beyond the city. Ajmer comes up in about two hours from Jaipur on the flat four-lane; the dargah is a detour, not a halt, unless you have the day.', tag: 'Toll ₹145' },
    { km: 190, name: 'Beawar', time: '9.15 am', text: 'The second plaza, ₹95, and the point where the character changes: the plain gives way to the Aravallis and the highway starts to bend and climb. Everything from here to Rajsamand is slower and better.', tag: 'Toll ₹95 · the hills begin' },
    { km: 250, name: 'Bhim', time: '10.15 am', text: 'The heart of the hill section, the road bending through the range with the Beawar plaza behind you and the Rajsamand plaza still to come. From July to September these bends run wet and slippery; the rest of the year they are the best driving of the day.', tag: 'The bends' },
    { km: 310, name: 'Rajsamand', time: '11.15 am', text: 'The third and last plaza, ₹110. The lake town sits just off the highway; Nathdwara and its temple are a short way further on, and the first good food since Beawar.', tag: 'Toll ₹110' },
    { km: 395, name: 'Udaipur', time: '12.30 pm', text: 'Down out of the hills and into the lake city. Have the driver take you to the hotel first; the old city around Jagdish Temple and the City Palace is lanes, and the car waits at the edge while you walk them.', tag: 'Arrive', image: `${IMG}/Udaipur/Jagdish_Temple.jpg`, alt: 'Jagdish Temple in the old city of Udaipur' },
  ],

  table: {
    title: 'Jaipur to Udaipur: the direct road and the alternatives',
    caption: 'Jaipur to Udaipur by car on NH-48 compared with the Chittorgarh line and the two-day version: distance, drive time, road, car tolls and when to choose each',
    intro: 'Distances are one-way. Tolls are for a car at the plazas the toll page lists (an SUV pays more at each); the Chittorgarh line has no toll page and its plazas are at actuals. Drive times assume a dawn start on a normal day.',
    columns: [
      { key: 'route', label: 'Route' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'tolls', label: 'Tolls, car', align: 'right' },
      { key: 'when', label: 'When to choose it', strong: true },
    ],
    rows: [
      { route: 'NH-48 via Ajmer, Beawar and Rajsamand', distance: '395 km', time: '6–7 hrs', road: 'Four-lane on the plain to Beawar, then the Aravalli bends through Bhim to Rajsamand and down to the lakes', tolls: '₹350 (3 plazas)', when: 'Every day. This is the road.' },
      { route: 'The Bhilwara line via Chittorgarh', distance: 'Longer, with the fort added', time: 'The day, with two hours at the fort', road: 'NH-48 to Kishangarh, then the Bhilwara road to Chittorgarh and the 115 km four-lane on to Udaipur', tolls: 'At actuals', when: 'When you want the fort. It costs the day and nobody we have driven there has regretted it.' },
      { route: 'NH-48 with Pushkar on the way', distance: '395 km plus the Pushkar detour', time: '6–7 hrs plus the hours at Pushkar', road: 'The Pushkar turn is just beyond Ajmer', tolls: '₹350 (3 plazas)', when: 'In the Kartik Mela week, or for the ghats and the Brahma temple on a quiet day.' },
      { route: 'Two-day round trip with the lakes', distance: '790 km', time: '2 days', road: 'The same road both ways', tolls: '₹700 (6 plazas)', when: 'When Jaipur is home and Udaipur is the weekend.' },
    ],
    footnote: 'Tolls from the Jaipur to Udaipur toll page: ₹145 at Ajmer, ₹95 at Beawar and ₹110 at Rajsamand for a car, all FASTag; ₹700 for a round trip. Rajasthan charges no separate state entry tax for cars on this road.',
  },

  sections: [
    {
      eyebrow: 'The plain',
      heading: 'What is the Jaipur to Udaipur road like as far as Beawar?',
      paras: [
        'Out of Jaipur the road is the NH-48 four-lane, flat and quick past the marble yards of Kishangarh, and Ajmer comes up in about two hours with the Pushkar turn just beyond it. This is the fast half of the drive and there is nothing on it to slow a car except the plaza at Ajmer and the temptation of the Kishangarh dhabas, which are the reliable ones for a proper meal along with those at Ajmer. Our distance page describes the whole corridor as a good four-lane highway and a scenic drive through the Aravalli range, and the scenery is what the second half adds; the first half is simply quick.',
        'From April to June the plains part is a furnace, so leave at first light and be through Ajmer before the heat builds. That is not a figure of speech: the marble country around Kishangarh holds the heat, and a car that leaves Jaipur at nine spends the hottest hours of the day on the flattest, most exposed part of the road. Leave at six and the same stretch is over by breakfast.',
        'Beawar is where the drive changes. The second plaza is here, and just beyond it the plain gives way to the Aravallis: the highway starts to bend and climb through Bhim into Rajsamand, and the character of everything, the road, the speed, the views, the food, is different from here to the lakes.',
      ],
      link: { label: 'Jaipur to Udaipur distance and route', href: '/distance/jaipur-to-udaipur' },
      image: { src: `${IMG}/Jaipur/amber_fort.jpg`, alt: 'Amber Fort on its ridge outside Jaipur', tag: 'Jaipur · km 0', caption: 'Leave Jaipur at six and the flat, hot half of the road is over by breakfast.' },
    },
    {
      eyebrow: 'The hills',
      heading: 'Where do the Aravallis begin on the Jaipur to Udaipur road, and how slow is that stretch?',
      paras: [
        'At Beawar, 190 km out, and the stretch from there through Bhim to Rajsamand is the prettiest and slowest of the whole drive. The highway bends and climbs through the range with the Beawar plaza behind you and the Rajsamand plaza still to come; it is still a good road, but it is a hill road, and the six-to-seven-hour figure for the corridor is made here. A car that averages the plain at expressway speed averages the hills at half that, and the arithmetic is why the drive is six and a half hours and not five.',
        'The food thins out after Beawar. The dhabas at Kishangarh and Ajmer are the reliable ones; between Beawar and Nathdwara the choice is thin, so eat before the hills or carry something. Rajsamand, at km 310, has the lake and the third plaza, and Nathdwara just beyond it has the Shrinathji temple and the first good meal since Beawar; it is a sensible late halt if the morning has run long.',
        'From July to September the hill bends run wet and slippery and the lakes fill, which is why Udaipur looks its best in October; our drivers take the Bhim section slowly in the monsoon and it adds half an hour. The rest of the year, October to March by the distance page, the bends are the best driving of the day and the reason to take this road rather than fly.',
      ],
      bullets: [
        'Km 190, Beawar: the plain ends and the bends begin. Eat before it.',
        'Km 250, Bhim: the heart of the hill section; wet and slow from July to September, the best of the drive otherwise.',
        'Km 310, Rajsamand: the last plaza, the lake, and Nathdwara for food just beyond.',
      ],
      link: { label: 'Jaipur to Udaipur toll cost', href: '/toll-cost/jaipur-to-udaipur' },
    },
    {
      eyebrow: 'The Chittorgarh question',
      heading: 'Should I go from Jaipur to Udaipur via Chittorgarh?',
      paras: [
        'If you want the fort, yes; if you want Udaipur, no. The Chittorgarh line leaves NH-48 for the Bhilwara road and reaches Udaipur from the east on the 115 km four-lane from Chittorgarh, and it costs you the day: the fort itself needs two hours, and the drivers reckon the detour and the fort together turn a six-and-a-half-hour drive into a full day. Nobody we have driven there has regretted it, but it is a day with the fort in it, not a way of getting to Udaipur.',
        'The fort is worth the day because it is the largest in Rajasthan and because it is on the way in a sense that Pushkar and Ajmer are not: a long flat-topped hill standing alone over the plain, seven kilometres of rampart with the Vijay Stambh, the Kirti Stambh and the palaces spread along it, and the car takes you gate to gate. Between October and March the morning is cool enough to walk the whole thing; from April to June the ramparts bake by eleven and the fort has to come early in the day, which on a Jaipur start it cannot.',
        'The better way to have both, if Udaipur is a base for more than a night, is the direct road down and Chittorgarh as a day trip from Udaipur: 115 km and two to two and a half hours each way on the four-lane, out at seven and back for dinner, with the fort done before the heat. Our Udaipur, Mount Abu and Chittorgarh guide has that day laid out.',
      ],
      link: { label: 'Udaipur to Chittorgarh distance and route', href: '/distance/udaipur-to-chittorgarh' },
      image: { src: `${IMG}/Chittorgarh/chittogarh_hero_section.jpg`, alt: 'Chittorgarh fort on its flat-topped hill above the plain', tag: 'Chittorgarh · the detour', side: 'left', caption: 'The fort costs the day and is worth it; from Udaipur it is a better day trip than a detour.' },
    },
    {
      eyebrow: 'Timing and arrival',
      heading: 'What time should I leave Jaipur for Udaipur, and where does the car stop in Udaipur?',
      paras: [
        'Six in the morning for most of the year, and earlier still from April to June. The reasons stack: the plain is cool until nine and a furnace after; the Kishangarh and Ajmer dhabas are quiet at breakfast; and a six o’clock start puts the Bhim bends in the late morning and the lakes at half past twelve, with the whole afternoon for the City Palace. Leave at nine and the same road gives you the plain at its hottest, the bends at midday and Udaipur at dusk.',
        'In the monsoon the advice softens: the plain is not hot, the bends are wet either way, and a seven o’clock start is fine. In the fog weeks, which on this road are few, the drivers leave later rather than earlier. There is no version of this drive where leaving after lunch is wise; six and a half hours from a two o’clock start is a night arrival in an unfamiliar city.',
        'In Udaipur the car goes to the hotel first. The old city around Jagdish Temple and the City Palace is a knot of lanes that were never meant for an Innova; the driver drops you at the edge and waits, and the lake front, the palace and the ghats are on foot from there. Fateh Sagar, Sajjangarh and the Shilpgram craft village on the far side of the lakes are car distances, and the same driver does them the next morning if the booking is the two-day round trip.',
      ],
      link: { label: 'Udaipur sightseeing tours', href: '/sightseeing/udaipur' },
      image: { src: `${IMG}/Udaipur/City_Palace.jpg`, alt: 'The City Palace above Lake Pichola at Udaipur', tag: 'Udaipur · km 395', caption: 'The old city is lanes; the car waits at the edge while you walk to the palace.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Jaipur to Udaipur cost?',
      paras: [
        'Udaipur is 395 km, over the 300 km per day minimum, so the one-way fare is the distance at the rate: ₹4,345 for a sedan at ₹11 a kilometre, ₹5,925 for an Ertiga or similar SUV at ₹15, ₹7,110 for an Innova Crysta at ₹18 and ₹9,085 for a 12-seater Tempo Traveller at ₹23. Fuel and the driver are inside those figures; the ₹350 of tolls each way for a car and the parking in Udaipur are paid at actuals and appear on the bill.',
        'A two-day round trip with the same car and driver is twice the one-way distance, 790 km, which is more than two days at the minimum, so it is ₹8,690 for a sedan, ₹11,850 for an SUV, ₹14,220 for an Innova Crysta and ₹18,170 for a Tempo Traveller. A third day, for Mount Abu or the Chittorgarh day trip from Udaipur, adds 300 km at the vehicle’s rate, and on those spokes the minimum is what you use.',
        'One-way is the right booking if Udaipur is a base for several days or the start of an onward road to Mount Abu and Gujarat, because the car is not sitting idle on your account; the round trip is right for a weekend from Jaipur. The Chittorgarh line as a detour bills the extra kilometres it drives at the same rate, so ask for it when booking rather than deciding on the day.',
      ],
      link: { label: 'Jaipur to Udaipur cab', href: '/jaipur-to-udaipur' },
    },
  ],

  fare: {
    title: 'Jaipur to Udaipur on the rate card',
    note: 'Rate-card fares for the 395 km drive, which is over the 300 km minimum and bills its own distance. The two-day figure is the weekend: down on Saturday morning, back on Sunday evening.',
    caption: 'Jaipur to Udaipur cab fare by vehicle, one-way and two-day round trip',
    distanceKm: 395,
    roundTrip: true,
    days: 2,
    roundLabel: 'Two-day round trip',
    footnote: 'Tolls ₹350 each way for a car, Udaipur parking and any night halt for the driver at actual. No festival or weekend surcharge. A third day adds 300 km at the vehicle’s rate.',
    waText: 'Hi, I want a Jaipur to Udaipur cab. Please share the fare for my dates and number of passengers.',
    bookHref: '/jaipur-to-udaipur',
    bookLabel: 'Jaipur to Udaipur cab',
    cta: 'Book the Udaipur cab',
  },

  galleryTitle: 'What the 395 km buys you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Udaipur/Lake_Pichola.jpg`, title: 'Lake Pichola', text: 'Half past twelve on a six o’clock start; the afternoon is yours.', tag: 'km 395' },
    { image: `${IMG}/Udaipur/City_Palace.jpg`, title: 'City Palace', text: 'On foot from where the car stops at the edge of the old city.', tag: 'Afternoon' },
    { image: `${IMG}/Udaipur/Jag_Mandir.jpg`, title: 'Jag Mandir', text: 'By boat from the palace jetty; the driver waits.', tag: 'Evening' },
    { image: `${IMG}/Udaipur/Fateh_Sagar_Lake.jpg`, title: 'Fateh Sagar', text: 'Car distance from the old city; the second morning.', tag: 'Day 2' },
    { image: `${IMG}/Chittorgarh/Vijay_Stambh.jpg`, title: 'Chittorgarh fort', text: 'The detour that costs the day, or the day trip from Udaipur.', tag: 'Optional' },
  ],

  tips: [
    { title: 'Six o’clock, and eat before Beawar', text: 'The plain is cool until nine and the dhabas at Kishangarh and Ajmer are the good ones. After Beawar the food is thin until Nathdwara and the road is slow.' },
    { title: 'FASTag for three plazas', text: 'Ajmer, Beawar and Rajsamand, ₹350 for a car one way. Our cars carry a live tag; if you are following in your own car, top it up before Jaipur.' },
    { title: 'Monsoon means the bends are wet', text: 'July to September the Bhim section runs slippery and the drivers take it slowly; the lakes fill, and Udaipur in October is the reward.' },
  ],

  faqs: [
    { question: 'What is the distance from Jaipur to Udaipur by road?', answer: '395 km on NH-48 via Ajmer, Beawar and Rajsamand, six to seven hours by our distance page. The road is four-lane on the plain to Beawar and a hill road through the Aravallis from Beawar to Rajsamand, which is where the time goes.' },
    { question: 'How long does it take to drive from Jaipur to Udaipur?', answer: 'Six to seven hours, and about six and a half with a six o’clock start and breakfast at Kishangarh or Ajmer. The plain to Beawar is quick; the bends through Bhim to Rajsamand are slow and the best part; the monsoon adds half an hour on the wet bends.' },
    { question: 'How much is the toll from Jaipur to Udaipur?', answer: '₹350 one way for a car across three plazas, by our toll page: ₹145 at Ajmer, ₹95 at Beawar and ₹110 at Rajsamand, all FASTag. A round trip is ₹700. An SUV pays more at each plaza. Rajasthan charges no separate state entry tax for cars on this road.' },
    { question: 'What is the cab fare from Jaipur to Udaipur?', answer: '₹4,345 one way for a sedan at ₹11/km on the 395 km, ₹5,925 for an Ertiga or SUV at ₹15, ₹7,110 for an Innova Crysta at ₹18 and ₹9,085 for a 12-seater Tempo Traveller at ₹23. A two-day round trip is ₹8,690, ₹11,850, ₹14,220 and ₹18,170. Tolls and parking are extra at actuals.' },
    { question: 'Which is the best route from Jaipur to Udaipur?', answer: 'NH-48 via Ajmer, Beawar and Rajsamand, the direct road. The Bhilwara line through Chittorgarh is the alternative when you want the fort; it costs the day, with two hours at the fort, and is a day with the fort in it rather than a way of getting to Udaipur.' },
    { question: 'Is the Jaipur to Udaipur road good?', answer: 'Yes. Our distance page calls it a good four-lane highway and a scenic drive through the Aravalli range. The plain to Beawar is fast four-lane; the hill section from Beawar through Bhim to Rajsamand is a good surface on a bending road; from July to September the bends run wet and the drivers take them slowly.' },
    { question: 'What time should I leave Jaipur for Udaipur?', answer: 'Six in the morning, and earlier from April to June, so that the flat, exposed plain around Kishangarh and Ajmer is behind you before the heat builds and the lakes are reached by half past twelve with the afternoon free. There is no good version of an afternoon departure; six and a half hours from two o’clock is a night arrival.' },
    { question: 'Can I stop at Pushkar or Ajmer on the way from Jaipur to Udaipur?', answer: 'Yes. The Pushkar turn is just beyond Ajmer at about km 135; the Ajmer dargah and the Pushkar ghats are each a detour of a couple of hours rather than a halt, and the drive still reaches Udaipur the same day if you leave Jaipur at six. In the Kartik Mela week Pushkar is a day of its own; our Pushkar Mela guide covers it.' },
  ],

  related: [
    { label: 'Jaipur to Udaipur cab', sub: '395 km · from ₹4,345', href: '/jaipur-to-udaipur', img: `${IMG}/Udaipur/Udaipur_hero_section.jpg` },
    { label: 'Jaipur to Udaipur toll cost', sub: 'Three plazas, ₹350 one-way', href: '/toll-cost/jaipur-to-udaipur', img: `${IMG}/Jaipur/jaipur_hero_section.jpg` },
    { label: 'Jaipur to Udaipur distance', sub: 'Route, stops and best time', href: '/distance/jaipur-to-udaipur', img: `${IMG}/Udaipur/Lake_Pichola.jpg` },
    { label: 'Udaipur, Mount Abu and Chittorgarh by road', sub: 'The two spokes from the lakes', href: '/udaipur-mount-abu-chittorgarh-by-road', img: `${IMG}/Mount_Abu/Nakki_Lake.jpg` },
    { label: 'Agra to Jaipur by road', sub: 'The Golden Triangle’s middle leg', href: '/agra-to-jaipur-by-road', img: `${IMG}/Jaipur/Hawa_Mahal.jpg` },
    { label: 'Pushkar Mela 2026 by car', sub: 'The Kartik fair, just off this road', href: '/pushkar-mela-2026-by-car', img: `${IMG}/Jaipur/Jal_Mahal.jpg` },
    { label: 'Udaipur sightseeing tours', sub: 'The lakes and palaces with a car', href: '/sightseeing/udaipur', img: `${IMG}/Udaipur/Jag_Mandir.jpg` },
    { label: 'Tempo Traveller in Jaipur', sub: '12-seater for the family trip', href: '/tempo-traveller/jaipur', img: '/images/tempo_section.jpg' },
  ],
  guides: ['udaipur-mount-abu-chittorgarh-by-road', 'agra-to-jaipur-by-road', 'pushkar-mela-2026-by-car', 'delhi-to-amritsar-by-road', 'weekend-getaways-near-me'],

  schema: {
    places: ['jaipur', 'udaipur', 'ajmer', 'chittorgarh'],
    trip: {
      name: 'Jaipur to Udaipur by car on NH-48',
      description: 'The 395 km drive from Jaipur to Udaipur on NH-48 via Ajmer, Beawar and Rajsamand in six to seven hours: flat four-lane to Beawar, then the Aravalli bends through Bhim to Rajsamand and the lakes.',
      touristType: 'Road travellers',
      lowPrice: 4345,
      highPrice: 18170,
      itinerary: [
        { name: 'Jaipur to Ajmer', text: '135 km of flat four-lane past the Kishangarh marble yards; breakfast at Kishangarh or Ajmer; the first plaza at Ajmer.' },
        { name: 'Ajmer to Beawar', text: '55 km on the plain to the second plaza at Beawar, where the Aravallis begin.' },
        { name: 'Beawar to Rajsamand', text: '120 km of hill bends through Bhim, the slowest and prettiest stretch; the third plaza at Rajsamand and Nathdwara for food.' },
        { name: 'Rajsamand to Udaipur', text: '85 km down out of the hills into the lake city; the car drops at the edge of the old city.' },
      ],
    },
    howTo: {
      name: 'How to drive from Jaipur to Udaipur',
      description: 'Take NH-48 out of Jaipur at six, eat at Kishangarh or Ajmer, clear the plain before the heat, take the Aravalli bends from Beawar through Bhim to Rajsamand slowly, and drop into Udaipur by early afternoon.',
      totalTime: 'PT6H30M',
      estimatedCost: { currency: 'INR', value: 4345 },
      steps: [
        { name: 'Leave Jaipur by six', text: 'Out on the Ajmer road on NH-48; the plain around Kishangarh is cool until nine and a furnace after, from April to June especially.' },
        { name: 'Eat before Beawar', text: 'Breakfast at the Kishangarh or Ajmer dhabas, the reliable ones; the first plaza is at Ajmer, the second at Beawar, and the food thins after it.' },
        { name: 'Take the bends slowly', text: 'From Beawar through Bhim to Rajsamand the highway climbs and bends through the Aravallis; wet from July to September; the third plaza is at Rajsamand.' },
        { name: 'Drop into Udaipur', text: 'Down out of the hills to the lakes by early afternoon; the driver takes you to the hotel and waits at the edge of the old city while you walk to the palace.' },
      ],
    },
  },
};
