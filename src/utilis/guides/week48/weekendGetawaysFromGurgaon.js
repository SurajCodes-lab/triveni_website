// Week 48 guide 3 — "weekend getaways from gurgaon" (1,718 impressions a
// quarter, position 8.4, 35 clicks). Sits beside /places-to-visit-near-gurgaon
// (a place list) as the weekend-planning page, matching the existing
// /weekend-getaways-from-<city>-by-car naming for Delhi, Jaipur and Chandigarh.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'weekend-getaways-from-gurgaon-by-car',
  path: '/weekend-getaways-from-gurgaon-by-car',
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'weekend getaways from gurgaon', impressions: 1718, position: 8.4 },

  eyebrow: 'Weekend guide · Gurgaon',
  crumbs: [{ name: 'Gurgaon', url: '/gurgaon' }],
  crumbName: 'Weekend getaways from Gurgaon',
  titleLead: 'Weekend getaways from Gurgaon',
  titleAccent: 'by car, without touching Delhi',
  title: 'Weekend Getaways from Gurgaon by Car, Without Touching Delhi',
  metaTitle: 'Weekend Getaways from Gurgaon by Car 2026: 19 Trips',
  metaDescription: 'Weekend getaways from Gurgaon by car: Neemrana in 1.5 hours, Alwar in 2.5, Sariska in 3.5, Jaipur in 4, the Uttarakhand hills for a long weekend. Distances from Cyber City and fares from ₹11/km.',
  keywords: ['weekend getaways from gurgaon', 'weekend trips from gurgaon by car', 'places to visit near gurgaon for weekend', 'gurgaon to neemrana', 'gurgaon to jaipur weekend', 'road trips from gurgaon'],
  heroImage: `${IMG}/Alwar_Sariska/Alwar_Sariska_Siliserh_Lake.jpg`,
  heroAlt: 'Siliserh Lake near Alwar, two and a half hours from Gurgaon on NH-48',

  lead: 'Gurgaon sits on NH-48, which is why its best weekends point south-west: Neemrana is ninety minutes away, Alwar two and a half hours, Sariska three and a half, Jaipur four and Pushkar six and a half, and none of them involves Delhi traffic. The Kundli–Manesar–Palwal expressway opens Mathura, Agra and Bharatpur in the other direction, and for a long weekend the Uttarakhand hills are six to seven hours via the Eastern Peripheral. A sedan is ₹11/km on a 300 km per day minimum: ₹6,600 for a two-day weekend to anything within 300 km.',
  keyFacts: [
    { label: 'Under 2 hours', value: 'Neemrana, Sohna' },
    { label: 'Rajasthan side', value: 'Alwar 2.5 h · Jaipur 4 h' },
    { label: 'Via KMP', value: 'Mathura 2.5 h · Agra 3.5 h' },
    { label: 'Sedan, 2 days', value: 'from ₹6,600' },
  ],
  stickyLabel: 'Gurgaon weekend cab',
  waText: 'Hi, I need a weekend cab from Gurgaon. Pickup area, destination and dates to follow.',

  intro: [
    'Every distance below is from Cyber City, and every drive time assumes you get onto NH-48 or the Sohna road before eight in the morning. The single most useful fact about weekend trips from Gurgaon is directional: the Rajasthan side is close and the Uttarakhand side is far, and the difference is mostly the ring road you have to cross.',
    'Fares are from the rate card that every page on this site uses: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km, on a 300 km per day minimum, tolls and parking extra. Pickups are dispatched from the Gurgaon zone, so a Sohna Road or Golf Course Road start does not lose an hour to Delhi.',
  ],

  bands: [
    {
      eyebrow: 'Band one',
      heading: 'Under two hours: the Sunday outings',
      note: 'Sohna and Sultanpur fit the 4 hour / 40 km local package at ₹2,200 or the 8 hour / 80 km full day; Neemrana at 100 km bills as a one-day outstation run (₹6,600 sedan round trip). Nothing here needs a night.',
      places: [
        { name: 'Neemrana', image: `${IMG}/Neemrana/Neemrana_Fort_Palace.jpg`, distance: '100 km', time: '1.5 hrs', km: 100, bestFor: 'Fort lunch, zip line', highlights: ['Fort Palace', 'Flying Fox', 'Baori'], blurb: 'The easiest fort in North India to reach from Gurgaon: straight down NH-48 past Manesar and Bhiwadi. Lunch on the ramparts and the zip line make a day; a room in the fort makes a weekend.', href: '/same-day-neemrana-from-delhi', cta: 'Neemrana day tour' },
        { name: 'Sohna & Damdama Lake', image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Hero_Section.jpg`, alt: 'Aravalli hills near Alwar, the same range that runs past Sohna', distance: '30 km', time: '45 min', note: 'Local package ₹2,200', bestFor: 'Lake, farm stays', highlights: ['Damdama boating', 'Sohna hot spring', 'Aravalli resorts'], blurb: 'Down the Sohna road in under an hour. Boating and camping at Damdama, hot sulphur springs at Sohna and a run of resorts that sell day passes. This is a Sunday, not a weekend.', href: '/local-taxi/gurgaon', cta: 'Gurgaon local cab' },
        { name: 'Sultanpur Bird Sanctuary', image: `${IMG}/Bharatpur/Migratory_Birds.jpg`, alt: 'Migratory waterbirds on a winter wetland', distance: '15 km', time: '30 min', note: 'Local package ₹2,200', bestFor: 'Winter birds, dawn', highlights: ['Painted storks', 'Watchtowers', 'Winter migrants'], blurb: 'A wetland on the Farrukhnagar road that fills with migratory birds from November to February. Go at opening time, be back for breakfast. Closed on Tuesdays.', href: '/local-taxi/gurgaon', cta: 'Gurgaon local cab' },
      ],
    },
    {
      eyebrow: 'Band two',
      heading: 'Two to four hours: Rajasthan and the Braj towns',
      note: 'NH-48 south-west for Rajasthan; the KMP expressway east for Mathura and Agra. Both avoid Delhi completely.',
      places: [
        { name: 'Alwar', image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Bala_Quila.jpg`, distance: '150 km', time: '2.5 hrs', km: 150, bestFor: 'Fort, lake, quiet', highlights: ['Bala Quila', 'Siliserh Lake', 'City Palace museum'], blurb: 'The fort above the town, the lake palace at Siliserh and a museum with real Mughal manuscripts, all without Jaipur’s crowds. Combine with Sariska for a full weekend.', href: '/one-way-cab/delhi-to-alwar', cta: 'Cab to Alwar' },
        { name: 'Sariska', image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Tiger_Reserve.jpg`, distance: '190 km', time: '3.5 hrs', km: 190, bestFor: 'Tiger reserve', highlights: ['Jeep safari', 'Neelkanth temples', 'Pandupol'], blurb: 'The closest tiger reserve to Gurgaon. Morning and afternoon safaris, with the core zones at their best from October to June; the temple ruins inside the park are the bonus most visitors miss.', href: '/sightseeing/delhi-to-alwar-sariska-same-day', cta: 'Sariska trip' },
        { name: 'Mathura & Vrindavan', image: `${IMG}/Mathura_Vrindavan/ISKCON_Vrindavan.jpg`, distance: '160 km', time: '2.5 hrs', km: 160, bestFor: 'Temples', highlights: ['Banke Bihari', 'Prem Mandir', 'ISKCON'], blurb: 'Via the KMP expressway to Palwal and then the Yamuna Expressway; no Delhi. Banke Bihari before noon, Prem Mandir at dusk.', href: '/gurgaon-to-mathura', cta: 'Cab to Mathura' },
        { name: 'Agra', image: `${IMG}/Agra/Agra_Hero_section.jpg`, distance: '240 km', time: '3.5 hrs', km: 240, bestFor: 'Taj at sunrise', highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri'], blurb: 'The KMP-to-Yamuna Expressway route makes Agra a genuine three-and-a-half hours from Gurgaon. Stay the night for the sunrise Taj; the fort and Fatehpur Sikri fill day two.', href: '/gurgaon-to-agra', cta: 'Cab to Agra' },
        { name: 'Bharatpur', image: `${IMG}/Bharatpur/Bird_Sanctuary.jpg`, distance: '190 km', time: '3.5 hrs', km: 190, bestFor: 'Birdwatching', highlights: ['Keoladeo', 'Lohagarh Fort', 'Deeg'], blurb: 'Via Alwar and the Rajasthan back roads or via Mathura. Dawn in Keoladeo between November and February is one of the great winter mornings in the north.', href: '/one-way-cab/delhi-to-bharatpur', cta: 'Cab to Bharatpur' },
        { name: 'Jaipur', image: `${IMG}/Jaipur/Nahargarh_Fort.jpg`, distance: '250 km', time: '4 hrs', km: 250, bestFor: 'Forts, bazaars', highlights: ['Amber Fort', 'Nahargarh sunset', 'Johari Bazaar'], blurb: 'The Gurgaon weekend. NH-48 the whole way, four hours door to door, and the city is built for two nights: Amber on day one, Nahargarh for sunset, the old-city bazaars after dark, City Palace on day two.', href: '/gurgaon-to-jaipur', cta: 'Cab to Jaipur' },
      ],
    },
    {
      eyebrow: 'Band three',
      heading: 'Four to seven hours: the long-weekend list',
      note: 'The Uttarakhand hills are reached via the Eastern Peripheral and the Meerut expressway; Punjab and Himachal via NH-44. Book three days.',
      places: [
        { name: 'Haridwar & Rishikesh', image: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, distance: '260–280 km', time: '5–5.5 hrs', km: 280, bestFor: 'Ganga, rafting', highlights: ['Har Ki Pauri aarti', 'Rafting from Shivpuri', 'Laxman Jhula'], blurb: 'Eastern Peripheral to the Meerut expressway, then NH-334. Haridwar for the aarti on night one, Rishikesh for rafting and cafés on day two.', href: '/gurgaon-to-rishikesh', cta: 'Cab to Rishikesh' },
        { name: 'Chandigarh & Kasauli', image: `${IMG}/Kasauli/Kasauli_Hero_Section.jpg`, distance: '280–330 km', time: '5–6 hrs', km: 330, bestFor: 'Planned city, pine hills', highlights: ['Rock Garden', 'Sukhna Lake', 'Kasauli walks'], blurb: 'NH-44 from the Delhi border. Chandigarh for the first night and the Rock Garden, Kasauli an hour further up for the second.', href: '/gurgaon-to-chandigarh', cta: 'Cab to Chandigarh' },
        { name: 'Jim Corbett', image: `${IMG}/Jim_Corbett/Jim_corbett_hero_section.jpg`, distance: '290 km', time: '6 hrs', km: 290, bestFor: 'Safari', highlights: ['Dhikala', 'Bijrani', 'Kosi riverside'], blurb: 'Book the safari slot first; weekends sell out. Dhikala from mid-November to mid-June is the zone to aim for.', href: '/gurgaon-to-jim-corbett', cta: 'Cab to Corbett' },
        { name: 'Mussoorie', image: `${IMG}/Mussoorie/Mussoorie_Hero_section.jpg`, distance: '320 km', time: '6.5 hrs', km: 320, bestFor: 'Hill station', highlights: ['Mall Road', 'Kempty Falls', 'Landour'], blurb: 'The nearest full hill station. The Delhi–Dehradun expressway has trimmed the drive; the last thirty-five kilometres up from Dehradun are the slow part.', href: '/gurgaon-to-mussoorie', cta: 'Cab to Mussoorie' },
        { name: 'Nainital', image: `${IMG}/Nainital/Nainital_hero_section.jpg`, distance: '330 km', time: '7 hrs', km: 330, bestFor: 'Lake, ropeway', highlights: ['Naini Lake', 'Snow View', 'Bhimtal'], blurb: 'Via Moradabad and Haldwani. Two nights, with the second day for the quieter lakes of Bhimtal, Sattal and Naukuchiatal.', href: '/gurgaon-to-nainital', cta: 'Cab to Nainital' },
        { name: 'Shimla', image: `${IMG}/Shimla/shimla_hero_section.jpg`, distance: '380 km', time: '7.5 hrs', km: 380, bestFor: 'Ridge, Kufri, snow', highlights: ['The Ridge', 'Kufri', 'Jakhoo'], blurb: 'Leave at five, reach for a late lunch. December to February for snow at Kufri; March to June for the escape from the heat.', href: '/gurgaon-to-shimla', cta: 'Cab to Shimla' },
        { name: 'Amritsar', image: `${IMG}/Amritsar/Wagah_Border.jpg`, distance: '480 km', time: '8 hrs', km: 480, bestFor: 'Golden Temple, Wagah', highlights: ['Golden Temple', 'Wagah retreat', 'Kulcha lanes'], blurb: 'Six-lane GT Road from the Delhi border. Wagah at sunset on arrival day, the Golden Temple after dark, and the food the next morning.', href: '/gurgaon-to-amritsar', cta: 'Cab to Amritsar' },
      ],
    },
  ],

  table: {
    title: 'Weekend getaways from Gurgaon: distance, time and fare',
    caption: 'Distance from Cyber City, drive time, the road used and sedan fare for weekend getaways from Gurgaon',
    intro: 'Distances from Cyber City. The sedan two-day figure is what a Saturday–Sunday round trip bills at ₹11/km on a 300 km per day minimum.',
    columns: [
      { key: 'place', label: 'Destination' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'sedan', label: 'Sedan, 2 days', align: 'right', strong: true },
    ],
    rows: [
      { place: 'Sultanpur Bird Sanctuary', distance: '15 km', time: '30 min', road: 'Farrukhnagar road', sedan: '₹2,200 half day' },
      { place: 'Sohna & Damdama', distance: '30 km', time: '45 min', road: 'Sohna road', sedan: '₹2,200 half day' },
      { place: 'Neemrana', distance: '100 km', time: '1.5 hrs', road: 'NH-48', sedan: '₹6,600' },
      { place: 'Alwar', distance: '150 km', time: '2.5 hrs', road: 'NH-48, NH-248A', sedan: '₹6,600' },
      { place: 'Mathura–Vrindavan', distance: '160 km', time: '2.5 hrs', road: 'KMP, Yamuna Expressway', sedan: '₹6,600' },
      { place: 'Sariska', distance: '190 km', time: '3.5 hrs', road: 'NH-48 via Alwar', sedan: '₹6,600' },
      { place: 'Bharatpur', distance: '190 km', time: '3.5 hrs', road: 'via Alwar or Mathura', sedan: '₹6,600' },
      { place: 'Agra', distance: '240 km', time: '3.5 hrs', road: 'KMP, Yamuna Expressway', sedan: '₹6,600' },
      { place: 'Jaipur', distance: '250 km', time: '4 hrs', road: 'NH-48', sedan: '₹6,600' },
      { place: 'Haridwar', distance: '260 km', time: '5 hrs', road: 'Eastern Peripheral, NH-334', sedan: '₹6,600' },
      { place: 'Rishikesh', distance: '280 km', time: '5.5 hrs', road: 'Eastern Peripheral, NH-334', sedan: '₹6,600' },
      { place: 'Chandigarh', distance: '280 km', time: '5 hrs', road: 'NH-44', sedan: '₹6,600' },
      { place: 'Jim Corbett', distance: '290 km', time: '6 hrs', road: 'Eastern Peripheral, NH-9', sedan: '₹6,600' },
      { place: 'Mussoorie', distance: '320 km', time: '6.5 hrs', road: 'Delhi–Dehradun expressway', sedan: '₹7,040' },
      { place: 'Kasauli', distance: '330 km', time: '6 hrs', road: 'NH-44, NH-5', sedan: '₹7,260' },
      { place: 'Nainital', distance: '330 km', time: '7 hrs', road: 'NH-9 via Moradabad', sedan: '₹7,260' },
      { place: 'Shimla', distance: '380 km', time: '7.5 hrs', road: 'NH-44, NH-5', sedan: '₹8,360' },
      { place: 'Pushkar', distance: '400 km', time: '6.5 hrs', road: 'NH-48 via Jaipur, Ajmer', sedan: '₹8,800' },
      { place: 'Amritsar', distance: '480 km', time: '8 hrs', road: 'NH-44', sedan: '₹10,560' },
    ],
    footnote: 'Two-day fare = the greater of twice the one-way fare or 2 × 300 km × ₹11. Tolls (KMP, Yamuna Expressway and NH-48 plazas) at actual. A third day adds ₹3,300.',
  },

  sections: [
    {
      eyebrow: 'Direction',
      heading: 'Which weekend getaways from Gurgaon avoid Delhi traffic entirely?',
      paras: [
        'All of Rajasthan and the whole Braj belt. From Cyber City you are on NH-48 in fifteen minutes and past Manesar in thirty; Neemrana, Alwar, Sariska, Jaipur, Ajmer and Pushkar never see a Delhi signal. The Kundli–Manesar–Palwal expressway does the same trick eastwards: it joins the Yamuna Expressway at Palwal, so Mathura, Vrindavan, Agra and Bharatpur are reached without crossing the city either.',
        'The Uttarakhand side is the exception. Haridwar, Rishikesh, Corbett, Mussoorie and Nainital all lie north-east, and the honest route is the Eastern Peripheral Expressway around the outside of Delhi to the Meerut expressway. It works, but it adds an hour compared with the same trip from Ghaziabad, which is why those destinations sit in the long-weekend band here.',
      ],
      image: { src: `${IMG}/Jaipur/Johari_bazar.jpg`, alt: 'Johari Bazaar in Jaipur after dark', tag: 'Jaipur · 250 km', caption: 'Jaipur is four hours down NH-48 from Cyber City and the classic Gurgaon two-night weekend.' },
    },
    {
      eyebrow: 'One night',
      heading: 'What is the best one-night weekend getaway from Gurgaon?',
      paras: [
        'Neemrana if you want to do almost no driving: ninety minutes, a fort hotel, the zip line on Saturday afternoon and a slow Sunday morning. Alwar and Sariska if you want a safari: leave at seven, the afternoon safari on Saturday, the morning one on Sunday, home by evening. Agra if you want the Taj at sunrise, which is only possible with a night in Agra; the KMP route makes it three and a half hours.',
        'Jaipur is done as a one-night trip constantly, and it works, but it is a two-night city. If you have only one night in Jaipur, do Amber in the morning, the old city in the afternoon and Nahargarh at sunset, and leave the City Palace for next time.',
      ],
      link: { label: 'Same-day Jaipur tour from Delhi NCR', href: '/same-day-jaipur-tour-from-delhi' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a weekend cab from Gurgaon cost?',
      paras: [
        'For anything in the first two bands, a two-day sedan is ₹6,600: the 300 km per day minimum at ₹11/km, with fuel and driver inside the number. An Ertiga is ₹9,000, an Innova Crysta ₹10,800 and a 12-seater Tempo Traveller ₹13,800 for the same two days. Only the destinations beyond 300 km each way, Mussoorie, Nainital, Shimla, Pushkar and Amritsar, bill more, and the table shows exactly how much.',
        'Tolls are paid at actual and the driver carries FASTag. On the Jaipur road expect four plazas; on the KMP-to-Agra route the Yamuna Expressway toll is the large one. For a Sunday within about forty kilometres, the 4 hour / 40 km package at ₹2,200 (₹11 per km beyond 40, up to about 100 km) is the cheaper product; ask for it by name.',
      ],
      link: { label: 'Outstation cabs from Gurgaon', href: '/outstation-cabs/gurgaon' },
    },
    {
      eyebrow: 'Season',
      heading: 'When is the best time for each weekend getaway from Gurgaon?',
      paras: [
        'Rajasthan is a winter destination: October to March for Jaipur, Alwar and Neemrana, and November to February for the birds at Sultanpur and Bharatpur. Sariska’s core zones are at their best from October to June and the park is at its most rewarding in April and May, when the tigers come to water. The Braj towns are the same October-to-March calendar, plus Holi in March and Janmashtami in late August.',
        'The hills are the summer answer: Mussoorie, Nainital and Kasauli from March to June, Shimla for snow from late December. Rishikesh rafting runs mid-September to June. Corbett’s Dhikala zone opens in mid-November and closes in mid-June; the buffer zones stay open through the monsoon.',
      ],
      image: { src: `${IMG}/Alwar_Sariska/Alwar_Sariska_Tiger_Reserve.jpg`, alt: 'Sariska Tiger Reserve', tag: 'Sariska · Oct–Jun', side: 'left', caption: 'Sariska, the closest tiger reserve to Gurgaon, three and a half hours on NH-48.' },
    },
    {
      eyebrow: 'Groups',
      heading: 'Which vehicle should a Gurgaon group book for a weekend?',
      paras: [
        'Four people fit a sedan and six an Ertiga or Innova Crysta, but for a hill weekend with luggage an Innova is the comfortable choice for five. Anything above seven is Tempo Traveller territory: the 12-seater at ₹23/km bills ₹13,800 for two days, which for ten people is less per head than two sedans, and everyone travels together.',
        'Tempo Travellers are charged the same for one-way and round trip because the vehicle returns empty either way, so book it as a round trip and keep it for the whole weekend.',
      ],
      link: { label: 'Tempo Traveller from Gurgaon', href: '/tempo-traveller/gurgaon' },
    },
  ],

  fare: {
    title: 'A two-day weekend from Gurgaon',
    note: 'Any destination in the first two bands bills the same two-day minimum. Fuel and driver included; tolls and parking at actual.',
    caption: 'Two-day weekend fare from Gurgaon by vehicle',
    oneWayLabel: 'Two-day weekend',
    rows: [
      { vehicle: 'Sedan (Swift Dzire, Etios)', seats: '4', rate: '₹11/km', fare: '₹6,600' },
      { vehicle: 'Ertiga / SUV', seats: '6', rate: '₹15/km', fare: '₹9,000' },
      { vehicle: 'Innova Crysta', seats: '6–7', rate: '₹18/km', fare: '₹10,800' },
      { vehicle: 'Tempo Traveller (12-seater)', seats: '12', rate: '₹23/km', fare: '₹13,800' },
    ],
    footnote: '600 km billed over two days. Destinations beyond 300 km each way bill their actual round-trip distance; see the table above.',
    waText: 'Hi, I want a two-day weekend cab from Gurgaon. Destination, dates and headcount to follow.',
    bookHref: '/outstation-cabs/gurgaon',
    bookLabel: 'Outstation cabs from Gurgaon',
    cta: 'Get a Gurgaon weekend quote',
  },

  galleryTitle: 'Where NH-48 goes',
  gallery: [
    { image: `${IMG}/Neemrana/Neemrana_hero_section.jpg`, title: 'Neemrana Fort Palace', text: 'Ninety minutes from Cyber City.', tag: '100 km' },
    { image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Bala_Quila.jpg`, title: 'Bala Quila, Alwar', text: 'The fort above the town.', tag: '150 km' },
    { image: `${IMG}/Jaipur/Hawa_Mahal.jpg`, title: 'Hawa Mahal, Jaipur', text: 'Four hours, two nights.', tag: '250 km' },
    { image: `${IMG}/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg`, title: 'Pushkar Lake', text: 'Six and a half hours; the November fair.', tag: '400 km' },
    { image: `${IMG}/Agra/Taj_mahal.jpg`, title: 'The Taj, via KMP', text: 'Three and a half hours, no Delhi.', tag: '240 km' },
  ],

  tips: [
    { title: 'Use the KMP for Agra and Mathura', text: 'From Gurgaon the Kundli–Manesar–Palwal expressway to the Yamuna Expressway saves an hour over going through Faridabad, and the drivers use it by default.' },
    { title: 'Leave before eight, whichever direction', text: 'NH-48 through Manesar is fine at seven and slow at nine. For the Uttarakhand side, be on the Eastern Peripheral before the trucks.' },
    { title: 'Tell us your sector', text: 'Golf Course Road, Sohna Road, New Gurgaon and Dwarka Expressway pickups all dispatch from the Gurgaon zone; naming the sector puts the driver at your gate on time.' },
  ],

  faqs: [
    { question: 'What are the best weekend getaways from Gurgaon by car?', answer: 'Under two hours: Neemrana, Sohna–Damdama and Sultanpur. Two to four hours: Alwar, Sariska, Mathura–Vrindavan, Agra, Bharatpur and Jaipur. Four to eight hours for a long weekend: Haridwar–Rishikesh, Chandigarh–Kasauli, Jim Corbett, Mussoorie, Nainital, Shimla, Pushkar and Amritsar.' },
    { question: 'Which weekend getaway is closest to Gurgaon?', answer: 'Neemrana, 100 km and ninety minutes down NH-48, is the closest real getaway. Sohna and Damdama Lake at 30 km and Sultanpur Bird Sanctuary at 15 km are half-day outings on the local package.' },
    { question: 'How far is Jaipur from Gurgaon by road?', answer: 'About 250 km from Cyber City on NH-48, a four-hour drive with no Delhi traffic. A sedan bills ₹6,600 for a two-day round trip at ₹11/km on the 300 km per day minimum.' },
    { question: 'How much does a weekend cab from Gurgaon cost?', answer: 'A two-day weekend to anything within 300 km is ₹6,600 for a sedan, ₹9,000 for an Ertiga, ₹10,800 for an Innova Crysta and ₹13,800 for a 12-seater Tempo Traveller, fuel and driver included, tolls extra. Longer trips such as Shimla, Pushkar or Amritsar bill their actual distance.' },
    { question: 'Can I go from Gurgaon to Agra without crossing Delhi?', answer: 'Yes. The Kundli–Manesar–Palwal expressway joins the Yamuna Expressway at Palwal, so Gurgaon to Agra is about 240 km and three and a half hours without entering Delhi. The same route serves Mathura, Vrindavan and Bharatpur.' },
    { question: 'Which hill station is nearest to Gurgaon?', answer: 'Kasauli at about 330 km and six hours via NH-44 and NH-5, and Mussoorie at 320 km and six and a half hours via the Delhi–Dehradun expressway. Both are long-weekend trips; see the dedicated guide to hill stations near Gurgaon and Noida.' },
    { question: 'Is there a weekend surcharge on cabs from Gurgaon?', answer: 'No. The rates are the same every day: Sedan ₹11/km, SUV ₹15/km, Innova ₹18/km, Tempo Traveller ₹23/km on a 300 km per day minimum. Long weekends simply book out earlier.' },
    { question: 'Do you pick up from Sohna Road, Golf Course Road and New Gurgaon?', answer: 'Yes. Pickups are dispatched from the Gurgaon zone for every sector, including Dwarka Expressway, Sohna Road, Golf Course Extension and Manesar. Share the sector when booking on 7668570551.' },
  ],

  related: [
    { label: 'Outstation cabs from Gurgaon', sub: 'All corridors, all vehicles', href: '/outstation-cabs/gurgaon', img: '/images/car/innova_crysta.jpg' },
    { label: 'Gurgaon to Jaipur cab', sub: '250 km · NH-48', href: '/gurgaon-to-jaipur', img: `${IMG}/Jaipur/amber_fort.jpg` },
    { label: 'Gurgaon to Agra cab', sub: '240 km · KMP', href: '/gurgaon-to-agra', img: `${IMG}/Agra/agra_fort.jpg` },
    { label: 'Gurgaon to Rishikesh cab', sub: '280 km', href: '/gurgaon-to-rishikesh', img: `${IMG}/Rishikesh/River_Rafting.jpg` },
    { label: 'Gurgaon to Nainital cab', sub: '330 km', href: '/gurgaon-to-nainital', img: `${IMG}/Nainital/Naini_Lake.jpg` },
    { label: 'Places to visit near Gurgaon', sub: 'The full place list', href: '/places-to-visit-near-gurgaon', img: `${IMG}/Neemrana/Neemrana_Fort_Palace.jpg` },
    { label: 'Gurgaon local taxi', sub: '4 hr / 40 km from ₹2,200', href: '/local-taxi/gurgaon', img: '/images/car/swift_dzire.jpg' },
    { label: 'Gurgaon cab service', sub: 'City hub', href: '/gurgaon', img: '/images/car/innova_crysta.jpg' },
  ],
  guides: ['weekend-getaways-near-me', 'hill-stations-near-gurgaon-noida', 'places-to-visit-near-me', 'noida-weekend-trips', 'pushkar-mela-2026-by-car'],

  schema: {
    places: ['gurgaon', 'jaipur', 'agra', 'mathura', 'rishikesh', 'nainital', 'mussoorie', 'amritsar'],
  },
};
