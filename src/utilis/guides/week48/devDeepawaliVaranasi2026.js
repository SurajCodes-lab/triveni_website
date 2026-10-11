// Week 48 guide 13 — Dev Deepawali in Varanasi 2026: the one night the ghats
// are lit end to end. Kartik Purnima, Tuesday 24 November 2026. Feeds the
// Delhi–Varanasi corridor pages and the Varanasi hub.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'dev-deepawali-varanasi-2026',
  path: '/dev-deepawali-varanasi-2026',
  mood: 'festival',
  cluster: 'season',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'dev deepawali varanasi 2026', impressions: null, position: null },
  seasonalDestination: 'varanasi',
  seasonalOrigin: 'Delhi',

  eyebrow: 'Dev Deepawali 2026 · Varanasi',
  dateBadge: 'Tuesday 24 November 2026',
  crumbs: [{ name: 'Varanasi', url: '/varanasi' }, { name: 'Varanasi travel guide', url: '/varanasi-travel-guide' }],
  crumbName: 'Dev Deepawali in Varanasi 2026',
  titleLead: 'Dev Deepawali in Varanasi:',
  titleAccent: 'the one night the ghats are lit end to end',
  title: 'Dev Deepawali in Varanasi: The One Night the Ghats Are Lit End to End',
  metaTitle: 'Dev Deepawali Varanasi 2026: Date, Where to Watch',
  metaDescription: 'Dev Deepawali 2026 falls on Kartik Purnima, Tuesday 24 November, when every Varanasi ghat is lit with lamps. Why a boat is the seat to book now, how the closures work, when to arrive, the drive.',
  keywords: ['dev deepawali varanasi 2026', 'dev deepawali 2026 date', 'dev diwali varanasi', 'kartik purnima varanasi 2026', 'varanasi ghats lamps november', 'delhi to varanasi for dev deepawali', 'varanasi dev deepawali boat'],
  heroImage: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`,
  heroAlt: 'Dashashwamedh Ghat at Varanasi during the evening aarti',

  lead: 'Dev Deepawali, the Diwali of the gods, falls on Kartik Purnima, which in 2026 is Tuesday 24 November, sixteen days after Diwali. On that evening every ghat along the Varanasi riverfront, from Assi in the south to Rajghat in the north, is lit with lamps at dusk, and the best seat in the city is a boat on the river, which is why the boats are booked weeks ahead. Varanasi is 820 km and twelve to fourteen hours from Delhi on the Agra–Lucknow Expressway, 300 km from Lucknow and 120 km from Prayagraj. The ghat-side roads close from the afternoon of the 24th, so the cab drops you at Godowlia, Lanka or Rajghat and you walk. A sedan from Delhi is ₹9,020 one-way at ₹11/km.',
  keyFacts: [
    { label: 'Dev Deepawali', value: 'Tue 24 Nov 2026' },
    { label: 'Lamps lit', value: 'From dusk, about 5.30 pm' },
    { label: 'Delhi to Varanasi', value: '820 km · 12–14 hrs' },
    { label: 'Sedan, one-way', value: '₹9,020' },
  ],
  stickyLabel: 'Dev Deepawali cab',
  stickyPrice: 'Sedan ₹9,020',
  waText: 'Hi, I want a cab to Varanasi for Dev Deepawali 2026. Starting city, dates and headcount to follow.',

  intro: [
    'Diwali in Varanasi is a family festival behind closed doors. Dev Deepawali is the public one: the night the city lights its riverfront for the gods, and the one night of the year when every one of the ghats is lit at the same time. It is one of the city’s biggest nights, and the practical facts, the boat, the closures and the hotels, matter more than they do for any other night in Varanasi.',
    'The date is verified against the 2026 Kartik Purnima calendar. Fares are from the published rate card, ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, tolls extra, no festival surge.',
  ],

  lanternsTitle: 'The night, hour by hour',
  lanternsEyebrow: '24 November 2026',
  lanternsIntro: 'The lamps are lit at dusk and burn for two to three hours. Everything before five is positioning; everything after nine is getting out.',
  lanterns: [
    { image: `${IMG}/Varanasi/Boat_Ride_Ganges.jpg`, title: 'From a boat, 4.30 pm onwards', when: '4.30–8 pm', text: 'The boat leaves from Assi or Dashashwamedh before the closures and stays on the water through the lighting and the aarti. It is the only seat that sees the whole frontage at once. Book it by early November; on the day there are none.' },
    { image: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, title: 'Dashashwamedh, the aarti at 6 pm', when: '6 pm', text: 'The nightly Ganga aarti runs on a larger scale, with more priests and the ghat steps packed from mid-afternoon. It is the most crowded place in the city on the night; go for the aarti only if you are already in the front rows by four.' },
    { image: `${IMG}/Varanasi/Assi_Ghat.jpg`, title: 'Assi and the southern ghats', when: 'From 5.30 pm', text: 'Quieter and wider than Dashashwamedh, with the lamps laid in patterns on the steps and families lighting their own. The Lanka drop is fifteen minutes’ walk. This is the ghat to stand on if the boat has gone.' },
    { image: `${IMG}/Varanasi/varanasi_hero_section.jpg`, title: 'Panchganga and the northern ghats', when: 'From 5.30 pm', text: 'Panchganga Ghat’s lamp tower and the ghats towards Rajghat are lit as fully as the centre and see a fraction of the crowd. Reached from the Maidagin or Rajghat side; the Vishwanath corridor is on the way.' },
  ],

  timelineTitle: 'Delhi to Varanasi, kilometre by kilometre',
  timelineEyebrow: 'The road',
  timelineIntro: 'Yamuna Expressway to Agra, Agra–Lucknow Expressway to Lucknow, then either NH-30 via Raebareli and Pratapgarh or the Purvanchal Expressway. A two-day drive with a halt at Lucknow is the civilised version; the one-day version needs a four o’clock start.',
  timeline: [
    { km: 0, name: 'Delhi', time: '4 am', text: 'Leave in the dark. From Noida the Yamuna Expressway is twenty minutes; from west Delhi and Gurgaon allow an hour to Pari Chowk or use the KMP.', tag: 'Start' },
    { km: 200, name: 'Agra ring road', time: '6.30 am', text: 'The inner ring joins the two expressways without entering Agra. Breakfast at the plaza after the junction.', stop: 'Breakfast', image: `${IMG}/Agra/Agra_Hero_section.jpg`, alt: 'Agra, bypassed' },
    { km: 520, name: 'Lucknow', time: '10 am', text: 'The Agra–Lucknow Expressway ends at the outer ring. If you are breaking the journey, this is the night: Lucknow is halfway and has the rooms. Otherwise, fuel and lunch and on.', stop: 'Fuel, or night halt', image: `${IMG}/Lucknow/Bara_Imambara.jpg`, alt: 'Lucknow, the halfway city' },
    { km: 620, name: 'Pratapgarh turn, or the Purvanchal', time: '12.30 pm', text: 'From Lucknow the driver takes either NH-30 through Raebareli and Pratapgarh, or the Purvanchal Expressway to Ghazipur and NH-31 back west into Varanasi. Similar times; the expressway is smoother, NH-30 shorter.', tag: 'Two routes' },
    { km: 700, name: 'Prayagraj (NH-30 route)', time: '2 pm', text: 'On the NH-30 route the road passes Prayagraj; the Sangam is a forty-minute detour if you have the time. The last 120 km to Varanasi are four-lane and busy.', tag: 'Optional' },
    { km: 820, name: 'Varanasi', time: '4–5 pm', text: 'Into the city from the west on NH-19 or from the north on NH-31. On the 24th, stop short of the ghat zone: Lanka for Assi, Godowlia for Dashashwamedh, Maidagin or Rajghat for the north. From there, on foot.', tag: 'Arrive', image: `${IMG}/Varanasi/varanasi_hero_section.jpg` },
  ],

  table: {
    title: 'Reaching Varanasi for Dev Deepawali: from where, how far, how long',
    caption: 'Distance, drive time and sedan fare to Varanasi from Delhi, Lucknow, Prayagraj, Ayodhya, Gorakhpur and the airport',
    intro: 'Rate-card sedan fares at ₹11/km on a 300 km minimum, one-way. Tolls at actual. Lal Bahadur Shastri airport at Babatpur is 25 km north of the ghats.',
    columns: [
      { key: 'from', label: 'From' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'fare', label: 'Sedan, one-way', align: 'right', strong: true },
    ],
    rows: [
      { from: 'Delhi', distance: '820 km', time: '12–14 hrs', road: 'Yamuna + Agra–Lucknow expressways, NH-30 or Purvanchal', fare: '₹9,020' },
      { from: 'Agra', distance: '620 km', time: '9–10 hrs', road: 'Agra–Lucknow Expressway, NH-30', fare: '₹6,820' },
      { from: 'Lucknow', distance: '300 km', time: '5 hrs', road: 'NH-30 via Raebareli, or Purvanchal Expressway', fare: '₹3,300' },
      { from: 'Ayodhya', distance: '200 km', time: '4 hrs', road: 'NH-31 via Sultanpur, Jaunpur', fare: '₹3,300' },
      { from: 'Prayagraj', distance: '120 km', time: '2.5 hrs', road: 'NH-19', fare: '₹3,300' },
      { from: 'Gorakhpur', distance: '200 km', time: '4 hrs', road: 'NH-29 via Ghazipur', fare: '₹3,300' },
      { from: 'Varanasi airport (Babatpur)', distance: '25 km', time: '50 min', road: 'NH-31', fare: '₹2,200 local' },
    ],
    footnote: 'Ertiga ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km. A five-day Delhi–Varanasi–Delhi round trip for a sedan is ₹18,040 (the actual distance exceeds five days of the minimum).',
  },

  sections: [
    {
      eyebrow: 'The boat',
      heading: 'Is a boat really the best way to see Dev Deepawali, and how do I get one?',
      paras: [
        'Yes, and it is not a matter of taste. From the steps you see the ghat you are standing on and the two beside it; from the water you see the whole four-kilometre crescent lit at once, which is the point of the night. The boats, from a rowing boat for six to the large motor boats and bajras that take forty, are booked through the boatmen at Assi and Dashashwamedh and through the hotels, and the good ones are gone by the first week of November. Prices on the night are several times the normal aarti-boat rate; that is the market, and there is no way around it other than booking early.',
        'Ask the driver on the way in: he may know a boatman, and a seat on a shared boat sometimes turns up that way when the hotels say there are none. Boats leave the ghats before four, before the crowd closes the steps, and stay out until the lamps have burned down.',
      ],
      image: { src: `${IMG}/Varanasi/Boat_Ride_Ganges.jpg`, alt: 'Boats on the Ganga at Varanasi', tag: 'On the water', caption: 'The only seat that sees all the ghats at once. Book it in early November.' },
    },
    {
      eyebrow: 'Closures',
      heading: 'How do the road closures work on Dev Deepawali, and where does the cab stop?',
      paras: [
        'From early afternoon on the 24th the police close the roads into the ghat zone: the Godowlia crossing for Dashashwamedh, the Lanka–Assi road, and the Maidagin side for the northern ghats. Cabs cannot enter the old-city lanes at any time of year; on Dev Deepawali they cannot get within a kilometre of the river either. The practical drops are Lanka for Assi and the southern ghats, Godowlia or the Girjaghar crossing for Dashashwamedh, and Maidagin or Rajghat for the north; from each it is ten to twenty minutes on foot.',
        'The driver parks where the police direct and waits. Fix a meeting point and a time before you get out, because the phone network on the riverfront collapses under the crowd around seven.',
      ],
    },
    {
      eyebrow: 'When to come',
      heading: 'When should I arrive in Varanasi for Dev Deepawali, and when should I leave?',
      paras: [
        'Arrive on the 22nd or 23rd. The city is full for a week around the date, the roads slow from the 23rd, and the day before gives you the Vishwanath corridor and a normal evening aarti before the big one. Leave on the 25th or 26th; the morning after Dev Deepawali the ghats are quiet and the lamps are still on the steps, and it is the best hour of the whole visit.',
        'From Delhi, the honest plan is five days: two on the road, three in the city. The one-day drive each way is possible with a four o’clock start; a halt at Lucknow makes it a comfortable two-day drive with the Imambara on the way.',
      ],
      image: { src: `${IMG}/Varanasi/Assi_Ghat.jpg`, alt: 'Assi Ghat at Varanasi in the morning', tag: 'Assi · the morning after', side: 'left', caption: 'Assi Ghat at seven on the 25th: lamps still on the steps and nobody on them.' },
    },
    {
      eyebrow: 'Chhath first',
      heading: 'Can I combine Dev Deepawali with Chhath Puja, and with Ayodhya?',
      paras: [
        'Chhath Puja falls on 13–16 November in 2026, eight days before Dev Deepawali, on the same ghats; it is a different festival with a different crowd, a dawn one rather than a dusk one, and the Chhath ghat guide covers it. Some families stay for the whole fortnight. Ayodhya’s Deepotsav was two weeks earlier, on 7 November; Ayodhya is 200 km from Varanasi and the two are usually done as separate trips, though a Lucknow–Ayodhya–Varanasi loop over a week is a real option in a Tempo Traveller.',
      ],
      link: { label: 'Chhath Puja on the Varanasi ghats: the guide', href: '/chhath-puja-varanasi-ghat-guide' },
    },
    {
      eyebrow: 'Where to stay',
      heading: 'Where should I stay for Dev Deepawali?',
      paras: [
        'On or near the ghats if you can: the riverfront hotels between Assi and Dashashwamedh have terraces that look at the lamps, and their rooms go months early, so book well ahead. The next ring is the cantonment and the Lanka side, from which the ghats are a walk or a short drive to the drop points. Ramnagar, across the river, has a few hotels with the best view of all, of the whole lit frontage from the far bank, but the bridge closes with the roads. Book whatever is available now; ask us for the driver’s hotel list if you are stuck.',
      ],
      link: { label: 'Varanasi in two days: the itinerary', href: '/varanasi-in-2-days-itinerary' },
    },
  ],

  fare: {
    title: 'Delhi to Varanasi for Dev Deepawali',
    note: 'Rate-card fares for the 820 km drive. The five-day figure is the round trip with a night at Lucknow each way and two nights in Varanasi; longer stays add 300 km a day at the vehicle rate.',
    caption: 'Delhi to Varanasi cab fare for Dev Deepawali by vehicle',
    distanceKm: 820,
    roundTrip: true,
    days: 5,
    roundLabel: 'Five-day round trip',
    footnote: 'Tolls on the Yamuna, Agra–Lucknow and Purvanchal expressways at actual. No festival surcharge. Driver allowance and fuel are included; boats and hotels are yours to book.',
    waText: 'Hi, I want a Delhi to Varanasi cab for Dev Deepawali 2026. Dates and headcount to follow.',
    bookHref: '/delhi-to-varanasi',
    bookLabel: 'Delhi to Varanasi cab page',
    cta: 'Book the Varanasi cab',
  },

  galleryTitle: 'The ghats, lit and unlit',
  gallery: [
    { image: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, title: 'Dashashwamedh aarti', text: 'The centre of the night, and the crowd.', tag: '24 Nov' },
    { image: `${IMG}/Varanasi/Boat_Ride_Ganges.jpg`, title: 'From the river', text: 'The whole crescent at once.', tag: 'The boat' },
    { image: `${IMG}/Varanasi/Assi_Ghat.jpg`, title: 'Assi Ghat', text: 'Wider, quieter, walkable from Lanka.', tag: 'South' },
    { image: `${IMG}/Varanasi/Kashi_Vishwanath_Temple.jpg`, title: 'Vishwanath corridor', text: 'The day before, not the day of.', tag: '23 Nov' },
    { image: `${IMG}/Varanasi/Sarnath.jpg`, title: 'Sarnath', text: 'Ten kilometres out; the afternoon of the 25th.', tag: 'After' },
  ],

  tips: [
    { title: 'Book the boat before the cab', text: 'The cab can be booked a week out; the boat cannot. If you have not fixed a boat by early November, ask us and the driver can try any boatmen he knows.' },
    { title: 'Fix the meeting point before you walk in', text: 'Phones fail on the riverfront after seven. Agree the exact spot at Lanka or Godowlia and the time, and stick to it.' },
    { title: 'Stay for the morning after', text: 'The 25th at dawn, with the lamps still on the empty steps, is the best hour of the trip. Do not leave on the night.' },
  ],

  faqs: [
    { question: 'When is Dev Deepawali 2026 in Varanasi?', answer: 'On Kartik Purnima, Tuesday 24 November 2026, sixteen days after Diwali. The lamps on the ghats are lit at dusk, about half past five, and burn for two to three hours.' },
    { question: 'Where is the best place to watch Dev Deepawali?', answer: 'From a boat on the river, which is the only position that sees all the ghats lit at once; book it by early November. On the steps, Assi and the southern ghats are wider and less crowded than Dashashwamedh, and Panchganga and the northern ghats are lit as fully with a fraction of the crowd.' },
    { question: 'How do I reach Varanasi from Delhi for Dev Deepawali?', answer: 'By road it is about 820 km and twelve to fourteen hours via the Yamuna and Agra–Lucknow expressways and then NH-30 or the Purvanchal Expressway. A sedan is ₹9,020 one-way at the rate card, or ₹18,040 for a five-day round trip with a halt at Lucknow each way. Flights land at Babatpur, 25 km from the ghats.' },
    { question: 'Can a cab reach the ghats on Dev Deepawali?', answer: 'No. The roads into the ghat zone close from the afternoon of the 24th. Cabs drop at Lanka for Assi, Godowlia for Dashashwamedh and Maidagin or Rajghat for the northern ghats, and the last ten to twenty minutes are on foot.' },
    { question: 'When should I arrive in Varanasi for Dev Deepawali?', answer: 'On the 22nd or 23rd. Hotels are full for the week, the roads slow from the 23rd, and the day before gives you the Vishwanath corridor and a normal aarti. Leave on the 25th or 26th; the morning after is the quietest and most beautiful hour.' },
    { question: 'How much does a boat cost on Dev Deepawali?', answer: 'Several times the normal aarti-boat rate, set by the boatmen and the hotels, and rising as the date approaches. There is no fixed price; booking in early November through a hotel or a known boatman is the only way to keep it sensible.' },
    { question: 'Is Chhath Puja in Varanasi close to Dev Deepawali?', answer: 'Yes. Chhath falls on 13–16 November 2026, eight days earlier, on the same ghats but at dawn rather than dusk. Some visitors stay for both; the Chhath ghat guide covers the earlier festival.' },
    { question: 'Is there a festival surcharge on the cab?', answer: 'No. The rate card is the same on every date: Sedan ₹11/km, SUV ₹15/km, Innova ₹18/km, Tempo Traveller ₹23/km on a 300 km per day minimum, tolls extra. Dev Deepawali week books out early.' },
  ],

  related: [
    { label: 'Delhi to Varanasi cab', sub: '820 km · 12–14 hrs', href: '/delhi-to-varanasi', img: `${IMG}/Varanasi/varanasi_hero_section.jpg` },
    { label: 'Delhi to Varanasi by car', sub: 'The road in segments', href: '/travel-by-car/delhi-to-varanasi', img: `${IMG}/Lucknow/Rumi_Darwaza.jpg` },
    { label: 'Lucknow to Varanasi cab', sub: '300 km · 5 hrs', href: '/lucknow-to-varanasi', img: `${IMG}/Lucknow/Bara_Imambara.jpg` },
    { label: 'Varanasi Ganga aarti tour', sub: 'Evening on the ghats', href: '/sightseeing/varanasi-ganga-aarti-tour', img: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg` },
    { label: 'Varanasi airport taxi', sub: 'Babatpur, 25 km', href: '/airport-service/varanasi', img: '/images/airport_section.jpg' },
    { label: 'Chhath Puja Varanasi cab', sub: '13–16 November', href: '/chhath-puja-varanasi-transport', img: `${IMG}/Varanasi/Assi_Ghat.jpg` },
    { label: 'Delhi to Varanasi by Tempo Traveller', sub: 'Groups of 12–17', href: '/tempo-traveller/delhi-to-varanasi', img: '/images/tempo/17_seater.jpg' },
    { label: 'Varanasi trip cost from Delhi', sub: 'Every cost, itemised', href: '/varanasi-trip-cost-from-delhi', img: `${IMG}/Varanasi/Boat_Ride_Ganges.jpg` },
  ],
  guides: ['chhath-puja-varanasi-ghat-guide', 'deepotsav-ayodhya-2026-guide', 'delhi-to-varanasi-best-route-by-car', 'diwali-tour-packages-2026-from-delhi', 'pushkar-mela-2026-by-car'],

  schema: {
    places: ['varanasi', 'lucknow', 'delhi', 'prayagraj'],
    trip: {
      name: 'Delhi to Varanasi for Dev Deepawali 2026 by road',
      description: 'Five-day trip by car for Dev Deepawali: Delhi to Lucknow and Varanasi on the expressways, the night of lamps on the ghats from a boat, the morning after, and the drive home.',
      touristType: 'Festival travellers',
      lowPrice: 9020,
      highPrice: 37720,
      itinerary: [
        { name: 'Day 1: Delhi to Lucknow', text: '520 km on the Yamuna and Agra–Lucknow expressways; the Imambara in the evening.' },
        { name: 'Day 2: Lucknow to Varanasi', text: '300 km on NH-30 or the Purvanchal Expressway; the Vishwanath corridor and a normal aarti.' },
        { name: 'Day 3: Dev Deepawali', text: 'On the river by half past four; the lamps at dusk; the extended aarti at Dashashwamedh.' },
        { name: 'Day 4: The morning after, and Sarnath', text: 'The ghats at dawn with the lamps still on the steps; Sarnath in the afternoon.' },
        { name: 'Day 5: Varanasi to Delhi', text: 'The drive home, with a halt at Lucknow if preferred.' },
      ],
    },
    events: [
      { id: 'dev-deepawali', name: 'Dev Deepawali 2026, Varanasi', description: 'The lighting of all the Varanasi ghats from Assi to Rajghat with lamps on the evening of Kartik Purnima, 24 November 2026.', startDate: '2026-11-24T17:30:00+05:30', endDate: '2026-11-24T21:00:00+05:30', locationName: 'Ganga ghats, Assi to Rajghat', locality: 'Varanasi', region: 'Uttar Pradesh', image: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, price: 9020, offerUrl: '/delhi-to-varanasi', validFrom: '2026-09-12', performer: 'Varanasi ghat committees and Uttar Pradesh Tourism' },
    ],
  },
};
