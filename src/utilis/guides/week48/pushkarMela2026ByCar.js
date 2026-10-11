// Week 48 guide 14 — Pushkar Mela 2026 by car from Delhi and Jaipur.
// 17–25 November 2026, peaking on Kartik Purnima, 24 November. Feeds
// /pushkar-mela-transport (the booking page) and the Jaipur–Pushkar corridor.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'pushkar-mela-2026-by-car',
  path: '/pushkar-mela-2026-by-car',
  mood: 'festival',
  cluster: 'season',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'pushkar mela 2026', impressions: null, position: null },
  seasonalDestination: 'pushkar',
  seasonalOrigin: 'Delhi',

  eyebrow: 'Pushkar Mela 2026',
  dateBadge: '17–25 November 2026',
  crumbs: [{ name: 'Pushkar', url: '/pushkar' }, { name: 'Pushkar Mela cab', url: '/pushkar-mela-transport' }],
  crumbName: 'Pushkar Mela 2026 by car',
  titleLead: 'Pushkar Mela 2026 by car',
  titleAccent: 'from Delhi and from Jaipur',
  title: 'Pushkar Mela 2026 by Car from Delhi and from Jaipur',
  metaTitle: 'Pushkar Mela 2026 by Car: Dates, Delhi & Jaipur Drives',
  metaDescription: 'Pushkar Mela 2026 runs 17–25 November and peaks on Kartik Purnima, 24 November. The camel-trading days and the holy dip, the 400 km Delhi drive via Jaipur, the 150 km Jaipur drive, fares from ₹4,400.',
  keywords: ['pushkar mela 2026', 'pushkar camel fair 2026 dates', 'pushkar fair by car from delhi', 'jaipur to pushkar mela', 'delhi to pushkar distance', 'pushkar mela cab', 'kartik purnima pushkar 2026'],
  heroImage: `${IMG}/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg`,
  heroAlt: 'Camels on the fairground at the Pushkar Mela',

  lead: 'Pushkar Mela 2026 runs from Tuesday 17 to Wednesday 25 November, with the camel and cattle trading in the first days, the cultural programme through the week and the fair peaking on Kartik Purnima, Tuesday 24 November, when pilgrims take the holy dip in Pushkar Lake. Delhi to Pushkar is about 400 km and seven to eight hours on NH-48 through Jaipur and the Ajmer bypass, then fourteen kilometres over the Nag Pahar pass; Jaipur to Pushkar is 150 km and two and a half to three hours. Cars park on the fairground perimeter and the town itself is on foot. A sedan from Delhi is ₹4,400 one-way at ₹11/km, from Jaipur ₹3,300.',
  keyFacts: [
    { label: 'Mela 2026', value: '17–25 Nov' },
    { label: 'Peak', value: 'Kartik Purnima, 24 Nov' },
    { label: 'Delhi to Pushkar', value: '400 km · 7–8 hrs' },
    { label: 'Jaipur to Pushkar', value: '150 km · 2.5–3 hrs' },
  ],
  stickyLabel: 'Pushkar Mela cab',
  stickyPrice: 'Sedan ₹4,400',
  waText: 'Hi, I want a cab to Pushkar for the Mela 2026. Starting city, dates and headcount to follow.',

  intro: [
    'The Pushkar fair is two fairs laid on top of each other. The first is a livestock market, one of the largest in the country, which is at its fullest in the opening days when the camel herders arrive from the desert and the trading is done. The second is a pilgrimage, which builds through the week and ends with the dip in the lake at the full moon. Tourists mostly come for the first and photograph the second; pilgrims come for the second and walk through the first. Knowing which you want decides which days you come.',
    'The 17–25 November window and the 24 November Purnima are verified against the 2026 Kartik calendar; the day-by-day shape below follows how the fair has run in previous years, as Rajasthan Tourism has not yet published the 2026 programme. Fares follow the rate card: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, tolls extra, no festival surge.',
  ],

  lanternsTitle: 'The nine days, and which ones to be there for',
  lanternsEyebrow: '17–25 November 2026',
  lanternsIntro: 'The fair has a shape. Come early for the camels, mid-week for the programme, and on the 24th for the lake.',
  lanterns: [
    { image: `${IMG}/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg`, title: 'The trading days, usually 17–20 November', when: 'Opening days', text: 'In previous years the herders arrive with the camels, horses and cattle and the ground west of the town fills with tents and animals. This is the fair the photographs are of: the trading is done in these days and the herds thin out afterwards. If the camels are the point, come in the opening days.' },
    { image: `${IMG}/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg`, title: 'The programme, usually 20–23 November', when: 'Mid-week', text: 'The state tourism programme in previous years: camel races and decoration contests, the moustache and turban competitions, folk music on the stadium ground, the hot-air balloons at dawn, and the temple lanes at their busiest. The Brahma temple queue is long from here on.' },
    { image: `${IMG}/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg`, title: 'Kartik Purnima, Tuesday 24 November', when: '24 Nov', text: 'The full moon and the holy dip. Pilgrims bathe at the fifty-two ghats from before dawn; the lamps are floated on the lake at dusk. The most crowded day of the fair and the one the pilgrims come for. Be at the ghats early or watch from the roof of a lakeside guesthouse.' },
    { image: `${IMG}/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg`, title: 'Ajmer, fourteen kilometres away', when: 'Any day', text: 'The Dargah of Khwaja Moinuddin Chishti and Ana Sagar lake are over the pass in Ajmer, half an hour from the fairground. Most visitors give it a morning; hotels in Ajmer are also the fallback when Pushkar is full.' },
  ],

  timelineTitle: 'Delhi to Pushkar, kilometre by kilometre',
  timelineEyebrow: 'The road',
  timelineIntro: 'NH-48 from Gurgaon through Jaipur to the Ajmer bypass, then the state road over the Nag Pahar pass into Pushkar. From Jaipur, join at about kilometre 255; the marks are approximate.',
  timeline: [
    { km: 0, name: 'Delhi or Gurgaon', time: '5 am', text: 'From Gurgaon, NH-48 in fifteen minutes; from Noida or east Delhi use the outer ring to avoid the city. Leaving at five puts you at the fairground by around half past twelve.', tag: 'Start' },
    { km: 120, name: 'Neemrana', time: '7 am', text: 'The first fort on the road and the standard breakfast halt, at the highway plazas or, for a longer stop, at the fort itself.', stop: 'Breakfast', image: `${IMG}/Neemrana/Neemrana_hero_section.jpg`, alt: 'Neemrana Fort on the Delhi–Jaipur highway' },
    { km: 255, name: 'Jaipur ring road', time: '9.30 am', text: 'The ring road takes NH-48 around Jaipur without entering it. Jaipur travellers join here; the airport is on this side of the city. Fuel before the Ajmer road.', stop: 'Fuel', image: `${IMG}/Jaipur/Jal_Mahal.jpg`, alt: 'Jal Mahal, Jaipur, seen from the road' },
    { km: 355, name: 'Kishangarh', time: '11 am', text: 'The marble town; the highway is six-lane and fast through here. Nothing to stop for unless you want marble.', tag: 'NH-48' },
    { km: 385, name: 'Ajmer bypass', time: '11.30 am', text: 'Leave NH-48 at the bypass for the Pushkar road. Do not go through Ajmer during the fair; the city centre is the slowest part of the whole route.', tag: 'Turn off' },
    { km: 400, name: 'Pushkar', time: '12.30 pm', text: 'Over the Nag Pahar pass and down into the town. The fairground is on the western edge; the police divert cars to the perimeter parking from the first day of the fair. From the parking, the ghats are fifteen minutes on foot.', tag: 'Arrive', image: `${IMG}/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg` },
  ],

  table: {
    title: 'Reaching Pushkar for the Mela: from where, how far, what it costs',
    caption: 'Distance, drive time and sedan fare to Pushkar from Delhi, Gurgaon, Jaipur, Jaipur airport, Jodhpur and Udaipur',
    intro: 'Rate-card sedan fares at ₹11/km on a 300 km minimum, one-way. Tolls at actual. Jaipur is the nearest airport; Ajmer the nearest railway junction.',
    columns: [
      { key: 'from', label: 'From' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'fare', label: 'Sedan, one-way', align: 'right', strong: true },
    ],
    rows: [
      { from: 'Delhi', distance: '400 km', time: '7–8 hrs', road: 'NH-48 via Jaipur, Ajmer bypass', fare: '₹4,400' },
      { from: 'Gurgaon', distance: '380 km', time: '7 hrs', road: 'NH-48', fare: '₹4,180' },
      { from: 'Jaipur', distance: '150 km', time: '2.5–3 hrs', road: 'NH-48, Ajmer bypass', fare: '₹3,300' },
      { from: 'Jaipur airport', distance: '145 km', time: '2.5 hrs', road: 'NH-48', fare: '₹3,300' },
      { from: 'Ajmer junction', distance: '14 km', time: '30 min', road: 'Nag Pahar road', fare: '₹2,200 local' },
      { from: 'Jodhpur', distance: '190 km', time: '3.5 hrs', road: 'via Bilara and Merta', fare: '₹3,300' },
      { from: 'Udaipur', distance: '280 km', time: '5 hrs', road: 'NH-48 via Chittorgarh and Bhilwara', fare: '₹3,300' },
    ],
    footnote: 'Ertiga ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km. A three-day Delhi–Pushkar–Delhi sedan round trip bills ₹9,900 (three days at the minimum exceeds the actual distance); from Jaipur, ₹9,900 for three days too.',
  },

  sections: [
    {
      eyebrow: 'Which days',
      heading: 'Which days of the Pushkar Mela should I come for?',
      paras: [
        'For the camels, the opening days, usually the 17th to the 20th. The herds are largest then, the trading is real rather than staged, and the dunes west of the ground are full of tents, cooking fires and animals; in previous years many herders have sold and gone by the 22nd. For the spectacle, the middle of the week, usually the 21st to the 23rd, when the tourism programme runs on the stadium ground and the balloons go up at dawn. For the pilgrimage, the 24th, Kartik Purnima, when the lake is the centre of everything.',
        'Three nights covering the 20th to the 23rd is the compromise most first-time visitors are happiest with: the last of the herds, the whole programme, and the town before the Purnima crowd arrives. If you want the dip, come on the 22nd and stay through the 24th.',
      ],
      image: { src: `${IMG}/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg`, alt: 'Camel traders at the Pushkar fairground', tag: 'Fairground · 17–20 Nov', caption: 'The trading days: the fair the photographs are of, and the days it is over by.' },
    },
    {
      eyebrow: 'The car at Pushkar',
      heading: 'Where does the cab park during the Mela, and can it reach the hotel?',
      paras: [
        'The town is small, the lanes are narrow and the fair fills the western edge, so from the first day the police keep cars on the perimeter: parking areas along the fairground and on the Ajmer road. Hotels on the Ajmer road and the resort belt outside town can be reached by car throughout; hotels inside the town and on the lake are a walk from the nearest parking, and the driver takes you as close as the day’s cordon allows. The tents and camps on the fairground side have their own vehicle access.',
        'For the three nights the driver stays with the car at the parking or in driver accommodation and is available for Ajmer, the Savitri temple ropeway road and the return. A round trip billed per day covers it; there is no separate waiting charge.',
      ],
    },
    {
      eyebrow: 'From Jaipur',
      heading: 'How do I do the Pushkar Mela as a day trip or overnight from Jaipur?',
      paras: [
        'Jaipur to Pushkar is 150 km and under three hours on NH-48, so a day trip is realistic: leave at seven, the fairground by ten, the lake and the Brahma temple after lunch, Ajmer’s Dargah on the way back if you want it, home by nine. A Jaipur to Pushkar one-way sedan bills ₹3,300, the 300 km minimum. The same-day Ajmer–Pushkar tour, which adds the Dargah and Ana Sagar over ten to twelve hours, is priced on its own page (sedan ₹4,500). The overnight version adds the dawn balloons and the evening on the ghats, which the day trip misses.',
        'Travellers flying into Jaipur for the fair can be met at the airport and driven straight to Pushkar, two and a half hours, without entering the city.',
      ],
      link: { label: 'Jaipur to Ajmer and Pushkar same-day tour', href: '/sightseeing/jaipur-to-ajmer-pushkar-same-day' },
      image: { src: `${IMG}/Ajmer_Pushkar/Ana_Sagar_Lake_Ajmer.jpg`, alt: 'Ana Sagar lake at Ajmer', tag: 'Ajmer · 14 km', side: 'left', caption: 'Ana Sagar and the Dargah at Ajmer, half an hour over the pass from the fairground.' },
    },
    {
      eyebrow: 'Where to stay',
      heading: 'Where should I stay for the Pushkar Mela if the town is full?',
      paras: [
        'The tented camps on the fairground side are the fair’s own accommodation and range from basic to very comfortable; they book out by October. Lakeside guesthouses inside the town are the best-placed and the first to go. The resort belt on the Ajmer road, two to five kilometres out, has the most rooms and the easiest car access. Ajmer itself, fourteen kilometres over the pass, is the honest fallback with hotels at normal prices and the Dargah on your doorstep; the drive to the fairground is half an hour each way.',
      ],
      link: { label: 'Pushkar travel guide', href: '/pushkar-travel-guide' },
    },
    {
      eyebrow: 'Onward',
      heading: 'What can I add to a Pushkar Mela trip by car?',
      paras: [
        'Jaipur is on the way from Delhi and worth a night in either direction. Jodhpur is 190 km west of Pushkar and Udaipur 280 km south; the classic extension is Pushkar to Jodhpur to Udaipur and back to Jaipur, five or six days, which the Rajasthan itineraries on this site set out. Ranthambore is 220 km east via Tonk for a safari at the end. For groups, a Tempo Traveller does the Pushkar–Ajmer Sharif pairing over three days at ₹23/km.',
      ],
      link: { label: 'Delhi to Pushkar and Ajmer Sharif by Tempo Traveller', href: '/tempo-traveller/delhi-to-pushkar-ajmer-sharif' },
    },
  ],

  fare: {
    title: 'Delhi to Pushkar for the Mela',
    note: 'Rate-card fares for the 400 km drive. The three-day figure is the trip that works: down on the first day, a full day at the fair, home on the third, with the driver staying on.',
    caption: 'Delhi to Pushkar cab fare for the Mela by vehicle',
    distanceKm: 400,
    roundTrip: true,
    days: 3,
    roundLabel: 'Three-day trip',
    footnote: 'NH-48 tolls and fairground parking at actual. No festival surcharge. From Jaipur, a three-day trip bills the same three-day minimum.',
    waText: 'Hi, I want a Delhi to Pushkar cab for the Mela 2026, three days. Dates and headcount to follow.',
    bookHref: '/pushkar-mela-transport',
    bookLabel: 'Pushkar Mela cab page',
    cta: 'Book the Mela cab',
  },

  galleryTitle: 'Pushkar, the fair and the lake',
  gallery: [
    { image: `${IMG}/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg`, title: 'The fairground', text: 'The camels, in the opening days.', tag: '17–20 Nov' },
    { image: `${IMG}/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg`, title: 'The ghats', text: 'The dip on Kartik Purnima.', tag: '24 Nov' },
    { image: `${IMG}/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg`, title: 'Brahma temple', text: 'The queue builds through the week.', tag: 'Town' },
    { image: `${IMG}/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg`, title: 'Ajmer Sharif', text: 'Over the pass, half an hour.', tag: '14 km' },
    { image: `${IMG}/Jaipur/amber_fort.jpg`, title: 'Jaipur', text: 'On the way from Delhi.', tag: '150 km' },
  ],

  tips: [
    { title: 'Come early for the camels', text: 'The herds thin out after the trading. If the animals are the point of the trip, be there in the opening days, not the last.' },
    { title: 'Take the Ajmer bypass', text: 'Ajmer city is the slowest kilometres of the whole route during the fair. The drivers leave NH-48 at the bypass and go over the pass.' },
    { title: 'Book the camp before the cab', text: 'Tents and lakeside rooms go by October. Fix the stay, then the dates; the car is the easy part.' },
  ],

  faqs: [
    { question: 'When is Pushkar Mela 2026?', answer: 'From Tuesday 17 to Wednesday 25 November 2026. The camel and cattle trading is in the first days, the cultural programme runs through the week, and the fair peaks on Kartik Purnima, Tuesday 24 November, with the holy dip in Pushkar Lake.' },
    { question: 'Which days of the Pushkar fair are best?', answer: 'Going by previous years, the opening days, around the 17th to 20th, for the camels and the trading; mid-week, around the 21st to 23rd, for the tourism programme; the 24th, Kartik Purnima, for the pilgrimage and the lake. Three nights across the 20th to 23rd suits most first-time visitors.' },
    { question: 'How far is Pushkar from Delhi by car?', answer: 'About 400 km and seven to eight hours: NH-48 through Jaipur to the Ajmer bypass, then fourteen kilometres over the Nag Pahar pass. A sedan is ₹4,400 one-way at the rate card, or ₹9,900 for a three-day trip with the driver staying.' },
    { question: 'How far is Pushkar from Jaipur, and can I do the Mela as a day trip?', answer: 'About 150 km and two and a half to three hours on NH-48. A day trip works: leave at seven, the fair by ten, back by nine. A one-way sedan bills ₹3,300, the 300 km minimum; the same-day Ajmer–Pushkar tour, with the Dargah and Ana Sagar included, is priced separately on its own page at ₹4,500.' },
    { question: 'Where do cars park during the Pushkar Mela?', answer: 'On the perimeter of the fairground and along the Ajmer road, where the police direct them from the first day. Hotels on the Ajmer road and the resort belt are reachable by car; lakeside and old-town hotels are a walk from the nearest parking.' },
    { question: 'Where should I stay for the Pushkar Mela?', answer: 'Tented camps on the fairground side, lakeside guesthouses in the town, or the resorts on the Ajmer road; all book out by October. Ajmer, fourteen kilometres away, is the fallback with normal prices and a half-hour drive to the fair.' },
    { question: 'What is the nearest airport and railway station to Pushkar?', answer: 'Jaipur airport, 145 km and two and a half hours, is the nearest with regular flights; a cab meets arrivals and drives straight to Pushkar. Ajmer junction, 14 km away, is the nearest railway station.' },
    { question: 'Is there a festival surcharge on the cab?', answer: 'No. Sedan ₹11/km, SUV ₹15/km, Innova ₹18/km, Tempo Traveller ₹23/km on a 300 km per day minimum, tolls extra, on every date. Mela week books out early, especially the days around Kartik Purnima.' },
  ],

  related: [
    { label: 'Pushkar Mela cab', sub: 'The Mela booking page', href: '/pushkar-mela-transport', img: `${IMG}/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg` },
    { label: 'Delhi to Pushkar cab', sub: '400 km · 7–8 hrs', href: '/delhi-to-pushkar', img: `${IMG}/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg` },
    { label: 'Jaipur to Pushkar cab', sub: '150 km · 2.5–3 hrs', href: '/jaipur-to-pushkar', img: `${IMG}/Jaipur/Hawa_Mahal.jpg` },
    { label: 'Jaipur airport to Pushkar taxi', sub: 'Straight from arrivals', href: '/jaipur-airport-to-pushkar-taxi', img: '/images/airport_section.jpg' },
    { label: 'Jaipur–Ajmer–Pushkar same day', sub: 'The day-trip tour', href: '/sightseeing/jaipur-to-ajmer-pushkar-same-day', img: `${IMG}/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg` },
    { label: 'Pushkar Mela travel guide', sub: 'The blog guide to the fair', href: '/blog/pushkar-mela-travel-guide', img: `${IMG}/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg` },
    { label: 'Pushkar & Ajmer Sharif by Tempo', sub: 'Groups of 12–17', href: '/tempo-traveller/delhi-to-pushkar-ajmer-sharif', img: '/images/tempo/12_seater.jpg' },
    { label: 'Pushkar trip cost from Delhi', sub: 'Every cost, itemised', href: '/pushkar-trip-cost-from-delhi', img: `${IMG}/Ajmer_Pushkar/Ana_Sagar_Lake_Ajmer.jpg` },
  ],
  guides: ['dev-deepawali-varanasi-2026', 'diwali-tour-packages-2026-from-delhi', 'weekend-getaways-from-gurgaon-by-car', 'deepotsav-ayodhya-2026-guide', 'best-car-for-wedding-2026'],

  schema: {
    places: ['pushkar', 'jaipur', 'ajmer', 'delhi'],
    trip: {
      name: 'Delhi to Pushkar Mela 2026 by road',
      description: 'Three-day trip by car to the Pushkar fair: the NH-48 drive via Jaipur and the Ajmer bypass, a full day at the fairground and the lake, and the drive home.',
      touristType: 'Festival travellers and pilgrims',
      lowPrice: 4400,
      highPrice: 20700,
      itinerary: [
        { name: 'Day 1: Delhi to Pushkar', text: '400 km on NH-48 via Neemrana, the Jaipur ring road and the Ajmer bypass; the fairground in the afternoon.' },
        { name: 'Day 2: The fair and the lake', text: 'Balloons at dawn, the camel ground, the programme, the Brahma temple and the ghats at dusk; Ajmer optional.' },
        { name: 'Day 3: Pushkar to Delhi', text: 'The drive home, with Jaipur on the way.' },
      ],
    },
    events: [
      { id: 'pushkar-mela', name: 'Pushkar Mela 2026', description: 'The annual Pushkar camel fair and Kartik pilgrimage at Pushkar, Rajasthan, 17–25 November 2026, peaking on Kartik Purnima, 24 November.', startDate: '2026-11-17', endDate: '2026-11-25', locationName: 'Pushkar fairground and Pushkar Lake', locality: 'Pushkar', region: 'Rajasthan', image: `${IMG}/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg`, price: 4400, offerUrl: '/delhi-to-pushkar', validFrom: '2026-09-12', performer: 'Rajasthan Tourism' },
    ],
  },
};
