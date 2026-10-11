// Week 48 guide 12 — Deepotsav in Ayodhya 2026: how to reach, where to stand,
// when to leave. Timed for the evening of 7 November (Diwali on the 8th).
// Feeds /diwali-ayodhya-transport, the booking page.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'deepotsav-ayodhya-2026-guide',
  path: '/deepotsav-ayodhya-2026-guide',
  mood: 'festival',
  cluster: 'season',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'deepotsav ayodhya 2026', impressions: null, position: null },
  seasonalDestination: 'ayodhya',
  seasonalOrigin: 'Delhi',

  eyebrow: 'Deepotsav 2026 · Ayodhya',
  dateBadge: 'Evening of 7 November 2026',
  crumbs: [{ name: 'Ayodhya', url: '/ayodhya' }, { name: 'Diwali Ayodhya cab', url: '/diwali-ayodhya-transport' }],
  crumbName: 'Deepotsav in Ayodhya 2026',
  titleLead: 'Deepotsav in Ayodhya 2026:',
  titleAccent: 'how to reach, where to stand, when to leave',
  title: 'Deepotsav in Ayodhya 2026: How to Reach, Where to Stand, When to Leave',
  metaTitle: 'Deepotsav Ayodhya 2026: How to Reach, Where to Stand',
  metaDescription: 'Deepotsav 2026 is on the evening of 7 November, the night before Diwali. How to reach Ayodhya by road, where the public can watch the Saryu lamps, how the closures work and when to leave.',
  keywords: ['deepotsav ayodhya 2026', 'ayodhya deepotsav date 2026', 'diwali in ayodhya 2026', 'how to reach ayodhya for deepotsav', 'ram ki paidi deepotsav', 'delhi to ayodhya for diwali', 'ayodhya diwali cab'],
  heroImage: `${IMG}/Ayodhya/Saryu_River_Ghat.jpg`,
  heroAlt: 'The Saryu ghats at Ayodhya, where the Deepotsav lamps are lit',

  lead: 'Deepotsav 2026 falls on the evening of Saturday 7 November, the night before Diwali on Sunday 8 November, when the Saryu ghats at Ram Ki Paidi are lit with lakhs of lamps. Ayodhya is 630 km and nine to ten hours from Delhi on the Yamuna and Agra–Lucknow expressways, 140 km from Lucknow airport and 200 km from Varanasi. The lamp-lighting ghats themselves are pass-controlled; the public watches from the Naya Ghat side, the Saryu bridge and the ghats downstream, and in recent years the roads into the ghat zone have closed from the afternoon, so the cab drops you at the parking zones and you walk the last two to four kilometres. Leave after midnight or stay till morning; the exit in the first two hours after the show is one of the slowest you will sit through.',
  keyFacts: [
    { label: 'Deepotsav', value: 'Sat 7 Nov, evening' },
    { label: 'Diwali', value: 'Sun 8 Nov' },
    { label: 'Delhi to Ayodhya', value: '630 km · 9–10 hrs' },
    { label: 'Sedan, one-way', value: '₹6,930' },
  ],
  stickyLabel: 'Deepotsav cab',
  stickyPrice: 'Sedan ₹6,930',
  waText: 'Hi, I want a cab to Ayodhya for Deepotsav 2026. Starting city, dates and headcount to follow.',

  intro: [
    'Since the Ram Mandir opened, Deepotsav has become one of the biggest single-night crowds in the north, and the city that hosts it has far fewer hotel rooms than the week needs. That is the shape of the problem: reaching Ayodhya is easy, being in the right place at seven in the evening is a matter of planning, and getting out again is the part nobody warns you about.',
    'The dates below are verified against the 2026 Diwali calendar. Fares are from the published rate card: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, tolls extra, no festival surge.',
  ],

  lanternsTitle: 'The three evenings',
  lanternsEyebrow: '7–9 November 2026',
  lanternsIntro: 'The state programme runs across the weekend. The night that matters is the 7th; the 8th is Diwali itself in the temple town; the 9th is the morning to leave.',
  lanterns: [
    { image: `${IMG}/Ayodhya/Saryu_River_Ghat.jpg`, title: 'Saturday 7 November: Deepotsav', when: '7 Nov · from 5 pm', text: 'The lamps on Ram Ki Paidi and the adjoining ghats are lit at dusk after the day’s Ram Leela procession and the symbolic Ram–Sita arrival. The laser and drone show on the river follows. Be in position by five; in recent years the ghat zone roads have closed from early afternoon, so check the day’s police advisory.' },
    { image: `${IMG}/Ayodhya/Ram_Mandir.jpg`, title: 'Sunday 8 November: Diwali at the Ram Mandir', when: '8 Nov', text: 'Diwali proper. The mandir’s darshan runs in slots through the day and the evening aarti is the one to book a slot for; the town lights its own lamps at every doorway. Quieter on the ghats than the 7th, and the better night to actually see the river.' },
    { image: `${IMG}/Ayodhya/Hanuman_Garhi.jpg`, title: 'Monday 9 November: the morning after', when: '9 Nov', text: 'Hanuman Garhi and Kanak Bhawan before the crowds return, breakfast, and the drive out while the roads are open. Bhai Dooj keeps the town busy after Diwali; leaving on the 9th is the clean exit.' },
    { image: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, title: 'Add Varanasi: Dev Deepawali, 24 November', when: '24 Nov', text: 'Two weeks later the Varanasi ghats do their own night of lamps for Kartik Purnima. Ayodhya to Varanasi is 200 km; some families do both as separate trips, and the guide to Dev Deepawali covers the second one.' },
  ],

  timelineTitle: 'Delhi to Ayodhya, kilometre by kilometre',
  timelineEyebrow: 'The road',
  timelineIntro: 'Expressway almost the whole way: Yamuna Expressway to Agra, Agra–Lucknow Expressway to Lucknow, then NH-27 to Ayodhya. Kilometre marks from Delhi.',
  timeline: [
    { km: 0, name: 'Delhi or Noida', time: '4 am', text: 'From Noida the Yamuna Expressway is twenty minutes away; from Gurgaon use the KMP to Palwal. Leaving at four puts you in Ayodhya for lunch.', tag: 'Start' },
    { km: 200, name: 'Agra bypass', time: '6.30 am', text: 'The inner ring road joins the Yamuna Expressway to the Agra–Lucknow Expressway without entering the city. Breakfast at the expressway plaza just after the junction.', stop: 'Breakfast', image: `${IMG}/Agra/Agra_Hero_section.jpg`, alt: 'Agra, bypassed on the ring road' },
    { km: 500, name: 'Lucknow outer ring', time: '10 am', text: 'The Agra–Lucknow Expressway ends at the Lucknow outer ring road, which takes you around the city to NH-27 east. Fuel here; the last 130 km have fewer stops.', stop: 'Fuel', image: `${IMG}/Lucknow/Rumi_Darwaza.jpg`, alt: 'Lucknow, on the outer ring' },
    { km: 580, name: 'Barabanki', time: '11 am', text: 'The last big town. NH-27 is four-lane from here to the Ayodhya bypass and busy with festival traffic on the 7th.', tag: 'NH-27' },
    { km: 630, name: 'Ayodhya', time: '12.30 pm', text: 'Off the bypass at the Saket or Naya Ghat exits, depending on where you are staying. On the 7th the police divert all private vehicles to the designated parking zones from early afternoon; the driver takes you as close as the day’s plan allows.', tag: 'Arrive', image: `${IMG}/Ayodhya/Ayodhya_Hero_section.jpg`, alt: 'Temple facade at Ayodhya' },
  ],

  table: {
    title: 'Reaching Ayodhya for Deepotsav: from where, how far, how long',
    caption: 'Distance, drive time and sedan fare to Ayodhya from Delhi, Noida, Lucknow, Varanasi, Prayagraj and Gorakhpur',
    intro: 'Rate-card sedan fares at ₹11/km on a 300 km minimum, one-way. Tolls at actual. Lucknow airport is the nearest airport with regular flights; Ayodhya’s own airport has limited services.',
    columns: [
      { key: 'from', label: 'From' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'fare', label: 'Sedan, one-way', align: 'right', strong: true },
    ],
    rows: [
      { from: 'Delhi', distance: '630 km', time: '9–10 hrs', road: 'Yamuna + Agra–Lucknow expressways, NH-27', fare: '₹6,930' },
      { from: 'Noida / Greater Noida', distance: '610 km', time: '9 hrs', road: 'Yamuna Expressway from Pari Chowk', fare: '₹6,710' },
      { from: 'Agra', distance: '465 km', time: '6.5 hrs', road: 'Agra–Lucknow Expressway, NH-27', fare: '₹5,115' },
      { from: 'Lucknow airport', distance: '140 km', time: '2.5 hrs', road: 'Outer ring, NH-27', fare: '₹3,300' },
      { from: 'Lucknow city', distance: '135 km', time: '2.5 hrs', road: 'NH-27', fare: '₹3,300' },
      { from: 'Varanasi', distance: '200 km', time: '4 hrs', road: 'Via Jaunpur and Sultanpur', fare: '₹3,300' },
      { from: 'Prayagraj', distance: '170 km', time: '3.5 hrs', road: 'Via Pratapgarh', fare: '₹3,300' },
      { from: 'Gorakhpur', distance: '140 km', time: '3 hrs', road: 'NH-27', fare: '₹3,300' },
    ],
    footnote: 'Ertiga ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km on the same minimum. Round trips bill per day; a three-day Delhi–Ayodhya–Delhi sedan is ₹13,860.',
  },

  sections: [
    {
      eyebrow: 'Where to stand',
      heading: 'Where can the public actually watch the Deepotsav lamps?',
      paras: [
        'Not on Ram Ki Paidi itself. The lamp ghats are laid out and lit by volunteers under the state programme, and entry to that stretch on the 7th is by pass: officials, guests, the volunteer teams and the media. The public view is from around it, and there are three good positions. The Naya Ghat side and the Saryu bridge look across the water at the whole lit frontage, and the drone and laser show is staged for exactly that view. The ghats downstream of Ram Ki Paidi, towards Guptar Ghat, are lit too and are where families sit with their own lamps. And the rooftops and terraces of the hotels and dharamshalas along the river road are the calmest seats in town, if you are staying in one.',
        'Whichever you choose, be there by five. The police close the ghat approaches when the crowd reaches capacity, and on Deepotsav night that happens before the lamps are lit.',
      ],
      image: { src: `${IMG}/Ayodhya/Saryu_River_Ghat.jpg`, alt: 'The Saryu riverfront at Ayodhya', tag: 'Saryu · Naya Ghat side', caption: 'The Naya Ghat side and the bridge: the public’s view of the lit ghats and the show over the river.' },
    },
    {
      eyebrow: 'The cab on the day',
      heading: 'How close can the cab get on Deepotsav evening?',
      paras: [
        'On the 7th, private vehicles are stopped at the parking zones the administration announces for the day; in recent years these have been on the bypass side at Saket and on the Faizabad side, from early afternoon, and the 2026 plan is published by the district police only days before, so check the day’s advisory. From the parking to the river is two to four kilometres on foot or by the shuttle e-rickshaws that run until the crowd makes them pointless. The driver stays with the car at the parking and is on the phone when you come out.',
        'If you are staying in Ayodhya, ask the hotel for its vehicle pass; some river-road hotels can get a guest vehicle through the cordon before the closure. If you are staying in Faizabad or Lucknow, the plan is drop at the parking zone by three, and a pickup arranged for after midnight or the next morning.',
      ],
    },
    {
      eyebrow: 'When to leave',
      heading: 'When should I leave Ayodhya after Deepotsav?',
      paras: [
        'Not immediately. The lamps and the show end around nine; the two hours after that are when the entire crowd tries to leave through the same three roads, and the parking zones do not empty until well past midnight. The comfortable options are two. Stay the night in Ayodhya or Faizabad and leave after Hanuman Garhi in the morning, which is what most families do. Or, if you must drive back to Lucknow that night, eat at the river, wait until after eleven, and be in the car by midnight; Lucknow is two and a half hours and the road is clear by then.',
        'Driving back to Delhi the same night is not something we recommend and not something we schedule without a relief driver: it is nine hours after a day on the ghats. The three-day trip, up on the 6th or 7th, back on the 9th, is the version that works.',
      ],
      image: { src: `${IMG}/Ayodhya/Hanuman_Garhi.jpg`, alt: 'Hanuman Garhi temple in Ayodhya', tag: 'Hanuman Garhi · morning after', side: 'left', caption: 'Hanuman Garhi at seven, the morning after Deepotsav, before the town wakes.' },
    },
    {
      eyebrow: 'Ram Mandir',
      heading: 'Can I do darshan at the Ram Mandir during Deepotsav?',
      paras: [
        'Yes, but the 8th is the better day for it than the 7th. Darshan runs in slots through the day; the evening aarti passes are limited and are released through the trust’s counters and site. On the 7th the temple is open but the town’s attention and the police cordons are on the river, and the walk between the two is slow. Do the temple on the morning of the 8th, then Kanak Bhawan and Hanuman Garhi, and give the evening to the town’s own Diwali.',
        'Phones and bags are not allowed inside the mandir; lockers are at the entry. The trust’s rules change, so check the day’s notice at the counter.',
      ],
      link: { label: 'Ayodhya Ram Mandir tour from Delhi', href: '/ayodhya-ram-mandir-tour-from-delhi' },
    },
    {
      eyebrow: 'Where to stay',
      heading: 'Where should I stay for Deepotsav if Ayodhya is full?',
      paras: [
        'Faizabad, now part of Ayodhya district, is seven kilometres from the ghats and has the bulk of the district’s rooms. Lucknow is the fallback with real capacity, 135 km and two and a half hours, which means a night drive after the show or a very early start; the airport is on the Ayodhya side of the city. Gonda and Barabanki have small hotels on NH-27 that fill last. Dharamshalas near the ghats take bookings months out; ask the driver which ones still have space, because they hear from other groups.',
      ],
      link: { label: 'Lucknow airport to Ayodhya taxi', href: '/lucknow-airport-to-ayodhya-taxi' },
    },
  ],

  fare: {
    title: 'Delhi to Ayodhya for Deepotsav',
    note: 'Rate-card fares for the 630 km drive. The three-day figure is the trip that works: up on the 6th or 7th, Deepotsav and Diwali, back on the 9th with the driver staying on.',
    caption: 'Delhi to Ayodhya cab fare for Deepotsav by vehicle',
    distanceKm: 630,
    roundTrip: true,
    days: 3,
    roundLabel: 'Three-day trip',
    footnote: 'Tolls on the Yamuna and Agra–Lucknow expressways and Ayodhya parking at actual. No Diwali surcharge. Packages with tolls and driver stay folded in are on the booking page.',
    waText: 'Hi, I want a Delhi to Ayodhya cab for Deepotsav 2026, three days. Dates and headcount to follow.',
    bookHref: '/diwali-ayodhya-transport',
    bookLabel: 'Diwali Ayodhya cab page',
    cta: 'Book the Deepotsav cab',
  },

  galleryTitle: 'Ayodhya, the week of lamps',
  gallery: [
    { image: `${IMG}/Ayodhya/Ram_Mandir.jpg`, title: 'Ram Mandir', text: 'Darshan on the 8th, in slots.', tag: 'Diwali' },
    { image: `${IMG}/Ayodhya/Saryu_River_Ghat.jpg`, title: 'The Saryu ghats', text: 'Where the lamps go.', tag: '7 Nov' },
    { image: `${IMG}/Ayodhya/Kanak_Bhawan.jpg`, title: 'Kanak Bhawan', text: 'The morning-after circuit.', tag: '8–9 Nov' },
    { image: `${IMG}/Ayodhya/Hanuman_Garhi.jpg`, title: 'Hanuman Garhi', text: 'Before the crowds return.', tag: '9 Nov' },
    { image: `${IMG}/Lucknow/Bara_Imambara.jpg`, title: 'Lucknow', text: 'The fallback city, 135 km.', tag: 'Stay' },
  ],

  tips: [
    { title: 'Be in position by five', text: 'The ghat approaches close when the crowd reaches capacity, before the lamps are lit. Five o’clock on the Naya Ghat side is the safe time.' },
    { title: 'Do not leave at nine', text: 'The two hours after the show are the slowest exit of the year. Eat at the river, leave after eleven, or stay till morning.' },
    { title: 'Book the driver for three days', text: 'Up on the 6th or 7th, back on the 9th. It costs the same as the round trip and removes every problem the closures create.' },
  ],

  faqs: [
    { question: 'When is Deepotsav 2026 in Ayodhya?', answer: 'On the evening of Saturday 7 November 2026, the night before Diwali, which falls on Sunday 8 November. The state programme runs across 7–8 November and the town stays busy through Bhai Dooj.' },
    { question: 'How do I reach Ayodhya from Delhi for Deepotsav?', answer: 'By road it is about 630 km and nine to ten hours: Yamuna Expressway to Agra, Agra–Lucknow Expressway to the Lucknow outer ring, then NH-27 to Ayodhya. A sedan is ₹6,930 one-way at the rate card, or ₹13,860 for a three-day trip with the driver staying on. Lucknow airport is 140 km and two and a half hours from Ayodhya.' },
    { question: 'Where can the public watch the Deepotsav lamps?', answer: 'From the Naya Ghat side of the river and the Saryu bridge, which face the lit ghats and the drone and laser show; from the ghats downstream of Ram Ki Paidi; and from hotel terraces on the river road. Ram Ki Paidi itself is pass-controlled on the night.' },
    { question: 'Can a cab reach the ghats on Deepotsav evening?', answer: 'No. Private vehicles are stopped at the parking zones the administration announces, in recent years on the Saket and Faizabad sides, from early afternoon; check the day’s police advisory. The last two to four kilometres are on foot or by shuttle e-rickshaw, and the driver waits at the parking.' },
    { question: 'When should I leave Ayodhya after Deepotsav?', answer: 'Either stay the night and leave after Hanuman Garhi in the morning, or wait until after eleven and drive to Lucknow by midnight. Leaving at nine, when the show ends, means two hours in the exit crowd. Driving to Delhi the same night is not recommended.' },
    { question: 'Can I do Ram Mandir darshan during Deepotsav?', answer: 'Yes. Darshan runs in slots through the day. The 8th, Diwali, is the better day for it; on the 7th the town and the cordons are on the river. Evening aarti passes are limited and released by the trust.' },
    { question: 'Where do I stay if Ayodhya hotels are full?', answer: 'Faizabad, seven kilometres from the ghats, has most of the district’s rooms. Lucknow, 135 km away, is the fallback with real capacity. Dharamshalas near the ghats book months ahead.' },
    { question: 'Is there a Diwali surcharge on the cab?', answer: 'No. The rate card is the same on every date: Sedan ₹11/km, SUV ₹15/km, Innova ₹18/km, Tempo Traveller ₹23/km on a 300 km per day minimum, tolls extra. Deepotsav week simply books out early.' },
  ],

  related: [
    { label: 'Diwali Ayodhya cab', sub: 'Packages with tolls and stay', href: '/diwali-ayodhya-transport', img: `${IMG}/Ayodhya/Ram_Mandir.jpg` },
    { label: 'Delhi to Ayodhya cab', sub: '630 km · 9–10 hrs', href: '/delhi-to-ayodhya', img: `${IMG}/Ayodhya/Saryu_River_Ghat.jpg` },
    { label: 'Lucknow to Ayodhya cab', sub: '135 km · 2.5 hrs', href: '/lucknow-to-ayodhya', img: `${IMG}/Lucknow/Rumi_Darwaza.jpg` },
    { label: 'Varanasi to Ayodhya cab', sub: '200 km · 4 hrs', href: '/varanasi-to-ayodhya', img: `${IMG}/Varanasi/varanasi_hero_section.jpg` },
    { label: 'Lucknow airport to Ayodhya', sub: '140 km · flight-tracked', href: '/lucknow-airport-to-ayodhya-taxi', img: '/images/airport_section.jpg' },
    { label: 'Ayodhya Ram Mandir tour', sub: 'From Delhi', href: '/ayodhya-ram-mandir-tour-from-delhi', img: `${IMG}/Ayodhya/Kanak_Bhawan.jpg` },
    { label: 'Delhi to Ayodhya by Tempo Traveller', sub: 'Groups of 12–17', href: '/tempo-traveller/delhi-to-ayodhya', img: '/images/tempo/17_seater.jpg' },
    { label: 'Ayodhya travel guide', sub: 'The town beyond the festival', href: '/ayodhya-travel-guide', img: `${IMG}/Ayodhya/Hanuman_Garhi.jpg` },
  ],
  guides: ['dev-deepawali-varanasi-2026', 'chhath-puja-varanasi-ghat-guide', 'diwali-tour-packages-2026-from-delhi', 'navratri-vaishno-devi-by-road', 'delhi-to-varanasi-best-route-by-car'],

  schema: {
    places: ['ayodhya', 'lucknow', 'delhi', 'varanasi'],
    trip: {
      name: 'Delhi to Ayodhya for Deepotsav 2026 by road',
      description: 'Three-day trip by car for Deepotsav and Diwali in Ayodhya: the expressway drive from Delhi, the lamp night on the Saryu, Ram Mandir darshan on Diwali, and the drive home.',
      touristType: 'Pilgrims and festival travellers',
      lowPrice: 6930,
      highPrice: 28980,
      itinerary: [
        { name: 'Day 1: Delhi to Ayodhya', text: '630 km on the Yamuna and Agra–Lucknow expressways and NH-27; in position on the Naya Ghat side by five for Deepotsav.' },
        { name: 'Day 2: Diwali in Ayodhya', text: 'Ram Mandir darshan in a morning slot, Kanak Bhawan and Hanuman Garhi, the town’s own Diwali in the evening.' },
        { name: 'Day 3: Ayodhya to Delhi', text: 'Leave after breakfast while the roads are open; optional halt at Lucknow.' },
      ],
    },
    events: [
      { id: 'deepotsav', name: 'Deepotsav 2026, Ayodhya', description: 'The lighting of the Saryu ghats at Ram Ki Paidi, Ayodhya, on the evening before Diwali, with the Ram Leela procession and the river light show.', startDate: '2026-11-07T17:00:00+05:30', endDate: '2026-11-07T22:00:00+05:30', locationName: 'Ram Ki Paidi, Saryu ghats', locality: 'Ayodhya', region: 'Uttar Pradesh', image: `${IMG}/Ayodhya/Saryu_River_Ghat.jpg`, price: 6930, offerUrl: '/diwali-ayodhya-transport', validFrom: '2026-09-12', performer: 'Uttar Pradesh Tourism' },
    ],
  },
};
