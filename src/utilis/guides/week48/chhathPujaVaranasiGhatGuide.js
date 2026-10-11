// Week 48 guide 15 — Chhath Puja in Varanasi: ghat access, timings, where a
// cab can and cannot go. 13–16 November 2026. Feeds
// /chhath-puja-varanasi-transport (the booking page).

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'chhath-puja-varanasi-ghat-guide',
  path: '/chhath-puja-varanasi-ghat-guide',
  mood: 'festival',
  cluster: 'season',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'chhath puja varanasi 2026', impressions: null, position: null },
  seasonalDestination: 'varanasi',
  seasonalOrigin: 'Delhi',

  eyebrow: 'Chhath Puja 2026 · Varanasi',
  dateBadge: '13–16 November 2026',
  crumbs: [{ name: 'Varanasi', url: '/varanasi' }, { name: 'Chhath Puja Varanasi cab', url: '/chhath-puja-varanasi-transport' }],
  crumbName: 'Chhath Puja on the Varanasi ghats',
  titleLead: 'Chhath Puja in Varanasi:',
  titleAccent: 'ghat access, timings, where a cab can and cannot go',
  title: 'Chhath Puja in Varanasi: Ghat Access, Timings, Where a Cab Can and Cannot Go',
  metaTitle: 'Chhath Puja Varanasi 2026: Ghats, Timings, Cab Drops',
  metaDescription: 'Chhath Puja 2026 in Varanasi runs 13–16 November: Sandhya Arghya at sunset on the 15th, Usha Arghya at dawn on the 16th. Which ghats, when roads close, where the cab drops you, fares from ₹9,020.',
  keywords: ['chhath puja varanasi 2026', 'chhath puja 2026 date', 'chhath puja ghats varanasi', 'sandhya arghya time 2026', 'usha arghya 2026', 'varanasi chhath cab', 'delhi to varanasi chhath puja'],
  heroImage: `${IMG}/Varanasi/Assi_Ghat.jpg`,
  heroAlt: 'Assi Ghat at Varanasi, one of the main Chhath ghats',

  lead: 'Chhath Puja 2026 in Varanasi runs from Friday 13 to Monday 16 November: Nahay Khay on the 13th, Kharna on the 14th, the Sandhya Arghya to the setting sun on the evening of Sunday 15th, and the Usha Arghya to the rising sun at dawn on Monday 16th. The two arghyas are on the ghats, with the largest gatherings at Assi, Dashashwamedh, Rajghat and the Ramnagar sandbank across the river, and the roads into the ghat zone have in previous years closed from early afternoon on the 15th and from about three in the morning on the 16th. A cab drops you at Lanka, Godowlia or Rajghat and waits; it cannot reach the river on either day. Delhi to Varanasi is 820 km, ₹9,020 one-way for a sedan.',
  keyFacts: [
    { label: 'Chhath 2026', value: '13–16 Nov' },
    { label: 'Sandhya Arghya', value: 'Sun 15 Nov, sunset' },
    { label: 'Usha Arghya', value: 'Mon 16 Nov, dawn' },
    { label: 'Sedan from Delhi', value: '₹9,020' },
  ],
  stickyLabel: 'Chhath Varanasi cab',
  stickyPrice: 'Sedan ₹9,020',
  waText: 'Hi, I want a cab to Varanasi for Chhath Puja 2026. Starting city, dates and headcount to follow.',

  intro: [
    'Chhath is the festival of the sun and of the river, and in Varanasi it is observed on the same ghats that host the evening aarti, by families who fast for thirty-six hours and stand in the water at sunset and again at sunrise. It is not a spectacle staged for visitors; it is a household observance carried out in public, and the practical questions are about access: which ghat, at what hour, and how close a vehicle can get when the whole city is walking to the river.',
    'The dates are verified against the 2026 Kartik calendar. Fares are from the published rate card, ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, tolls extra, no festival surge.',
  ],

  lanternsTitle: 'The four days',
  lanternsEyebrow: '13–16 November 2026',
  lanternsIntro: 'Chhath is four days long. The first two are at home; the last two are on the ghats, at the two ends of the same night.',
  lanterns: [
    { image: `${IMG}/Varanasi/Kashi_Vishwanath_Temple.jpg`, title: 'Nahay Khay, Friday 13 November', when: '13 Nov', text: 'The first day: a bath in the river, and the one meal that opens the fast. Families visit the ghats in the morning to bathe and collect Ganga water; the ghats are busy but the roads are open. A good day to arrive and to see the Vishwanath corridor.' },
    { image: `${IMG}/Varanasi/varanasi_hero_section.jpg`, alt: 'The Varanasi riverfront', title: 'Kharna, Saturday 14 November', when: '14 Nov', text: 'The second day and the start of the thirty-six-hour fast, broken once after sunset with kheer and roti. A home day; the ghats are being cleaned and the bamboo sun platforms are going up on the steps. Roads open.' },
    { image: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, title: 'Sandhya Arghya, Sunday 15 November', when: '15 Nov · sunset a little after 5 pm', text: 'The evening offering to the setting sun. Families walk to the ghats from mid-afternoon with the soop baskets of fruit and thekua; the vratis stand in the river as the sun goes down. In previous years the roads into the ghat zone have closed from about two. Sunset in Varanasi on the 15th is a little after five; the exact minute is announced locally.' },
    { image: `${IMG}/Varanasi/Boat_Ride_Ganges.jpg`, alt: 'Boats on the Ganga in front of the Varanasi ghats', title: 'Usha Arghya, Monday 16 November', when: '16 Nov · sunrise around 6.30 am', text: 'The dawn offering to the rising sun, and the end of the fast. Families are on the ghats from four; in previous years the roads have closed again around three in the morning. Sunrise is around half past six; the exact minute is announced locally. By eight the ghats are emptying and the roads reopen.' },
  ],

  table: {
    title: 'Chhath ghats in Varanasi: which, how to reach, where the cab stops',
    caption: 'The main Chhath ghats in Varanasi with the nearest cab drop point, the walk from it, and the character of each',
    intro: 'The cab stops at the drop point; the rest is on foot. Walk times are for the evening of the 15th, when the lanes are full.',
    columns: [
      { key: 'ghat', label: 'Ghat' },
      { key: 'drop', label: 'Cab drop point' },
      { key: 'walk', label: 'Walk' },
      { key: 'character', label: 'What it is like' },
    ],
    rows: [
      { ghat: 'Assi Ghat', drop: 'Lanka crossing', walk: '15–20 min', character: 'Wide steps, the largest Chhath gathering in the south of the city, families from the Lanka and BHU side' },
      { ghat: 'Dashashwamedh and the central ghats', drop: 'Godowlia or Girjaghar', walk: '10–15 min', character: 'The centre; the most crowded, with the aarti platforms cleared for the vratis' },
      { ghat: 'Rajghat', drop: 'Rajghat bridge approach', walk: '10 min', character: 'Broad and quieter, with the bridge behind; easy access from the north and the airport side' },
      { ghat: 'The Ramnagar sandbank (far bank)', drop: 'Ramnagar side, via the bridge', walk: '10 min', character: 'The sandbank opposite; open ground, large families, the sun straight ahead at both arghyas' },
      { ghat: 'Panchganga and the northern ghats', drop: 'Maidagin', walk: '15–20 min', character: 'The old lanes; smaller gatherings and the tallest steps' },
    ],
    footnote: 'Drop points are where the police cordons have run in previous years; the day’s plan is announced by the administration and the driver follows it.',
  },

  sections: [
    {
      eyebrow: 'The cab',
      heading: 'Where can a cab go during Chhath, and where can it not?',
      paras: [
        'On the 13th and 14th, anywhere a car can normally go in Varanasi, which is to the edge of the ghat zone: the old-city lanes between Godowlia and the river are never open to cars. On the afternoon of the 15th and the small hours of the 16th the cordon widens: in previous years the police have closed Godowlia, the Lanka–Assi road and the Rajghat approaches to private vehicles, and the same is expected in 2026, so the drop points become the crossings a kilometre back. From there it is ten to twenty minutes on foot with the crowd, which is walking the same way with baskets on its head.',
        'The driver waits at the drop point through the arghya and is on the phone when you come out; agree the exact spot before you walk in, because the network fails on the riverfront when the crowd peaks. For the dawn arghya the plan is a pickup from the hotel at three and the drop at Lanka or Godowlia by four.',
      ],
      image: { src: `${IMG}/Varanasi/Assi_Ghat.jpg`, alt: 'The wide steps of Assi Ghat', tag: 'Assi · from Lanka', caption: 'Assi Ghat: fifteen to twenty minutes on foot from the Lanka crossing on the evening of the 15th.' },
    },
    {
      eyebrow: 'Timings',
      heading: 'What time are the Sandhya Arghya and Usha Arghya in Varanasi in 2026?',
      paras: [
        'The Sandhya Arghya is offered as the sun sets on Sunday 15 November, and sunset in Varanasi that evening is a little after five; the exact minute is announced locally. Families are on the ghats from three; the vratis enter the water around half past four and stand until the sun is gone. The Usha Arghya is offered as the sun rises on Monday 16 November, around half past six; the ghats fill from four, and the offering is over by seven.',
        'Both are on the river, so the sun is watched across the water: from the city ghats it sets behind you and rises in front of you over the far bank, which is why the Ramnagar side is favoured by some families for the evening.',
      ],
    },
    {
      eyebrow: 'For visitors',
      heading: 'Can a visitor watch Chhath on the Varanasi ghats respectfully?',
      paras: [
        'Yes. Chhath is a public observance and the ghats are open to everyone; what it is not is a show, and the etiquette follows from that. Stay off the bamboo platforms and the front steps, which belong to the fasting families; do not photograph a vrati in the water at close range; take the prasad if it is offered; and be off the steps by the time the arghya begins so the families have the river. The ghats a little away from the centre, Rajghat and the northern ghats, are easier for a visitor than Dashashwamedh.',
        'If you are in Varanasi for the whole fortnight, Dev Deepawali follows eight days later, on 24 November, and is the visitor’s festival in a way Chhath is not; the Dev Deepawali guide covers it.',
      ],
      link: { label: 'Dev Deepawali in Varanasi, 24 November', href: '/dev-deepawali-varanasi-2026' },
      image: { src: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, alt: 'The steps at Dashashwamedh Ghat', tag: 'Dashashwamedh · the centre', side: 'left', caption: 'Dashashwamedh: the aarti platforms are cleared for the vratis on the evening of the 15th.' },
    },
    {
      eyebrow: 'Getting there',
      heading: 'How do I reach Varanasi for Chhath from Delhi, Lucknow or the airport?',
      paras: [
        'From Delhi the drive is about 820 km and twelve to fourteen hours on the Yamuna and Agra–Lucknow expressways, then NH-30 or the Purvanchal Expressway; the sensible version breaks at Lucknow and arrives on the 13th. From Lucknow it is 300 km and five hours; from Prayagraj 125 km and two and a half; from Ayodhya 200 km and four. Babatpur airport is 28 km north of the ghats, and the airport taxi drops at the hotel on the 13th and 14th, or at Rajghat if you arrive on the 15th itself.',
        'Trains into Varanasi Junction and Banaras station are heavily booked for Chhath, so a car, or a Tempo Traveller for the extended family, is the reliable option from Delhi and the NCR.',
      ],
      link: { label: 'Delhi to Varanasi by car: the road in segments', href: '/travel-by-car/delhi-to-varanasi' },
    },
    {
      eyebrow: 'Where to stay',
      heading: 'Where should I stay for Chhath in Varanasi?',
      paras: [
        'For Assi and the southern ghats, the Lanka and Assi guesthouses put you within the cordon on foot. For the central ghats, anything between Godowlia and the river. For Rajghat and the north, the cantonment hotels are a short drive to the Rajghat drop. Hotels are less pressed than for Dev Deepawali, but the 15th and 16th are full; book by the end of October.',
      ],
      link: { label: 'Varanasi travel guide', href: '/varanasi-travel-guide' },
    },
  ],

  fare: {
    title: 'Delhi to Varanasi for Chhath',
    note: 'Rate-card fares for the 820 km drive. The four-day figure is the round trip with a halt at Lucknow each way, arriving on the 13th and leaving after the dawn arghya on the 16th.',
    caption: 'Delhi to Varanasi cab fare for Chhath Puja by vehicle',
    distanceKm: 820,
    roundTrip: true,
    days: 4,
    roundLabel: 'Four-day round trip',
    footnote: 'Tolls at actual. No festival surcharge. The driver’s pre-dawn pickup on the 16th is part of the trip, not an extra.',
    waText: 'Hi, I want a Delhi to Varanasi cab for Chhath Puja 2026. Dates and headcount to follow.',
    bookHref: '/chhath-puja-varanasi-transport',
    bookLabel: 'Chhath Varanasi cab page',
    cta: 'Book the Chhath cab',
  },

  galleryTitle: 'The ghats at both ends of the night',
  gallery: [
    { image: `${IMG}/Varanasi/Assi_Ghat.jpg`, title: 'Assi Ghat', text: 'The southern gathering.', tag: 'Sunset · 15 Nov' },
    { image: `${IMG}/Varanasi/Boat_Ride_Ganges.jpg`, alt: 'Boats on the Ganga in front of the Varanasi ghats', title: 'The river from the water', text: 'The ghats seen from a boat; the Usha Arghya is watched from these steps.', tag: 'Dawn · 16 Nov' },
    { image: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, title: 'Dashashwamedh', text: 'The centre of the city’s Chhath.', tag: 'Central ghats' },
    { image: `${IMG}/Varanasi/Kashi_Vishwanath_Temple.jpg`, title: 'Vishwanath corridor', text: 'The 13th, before the fast.', tag: 'Nahay Khay' },
    { image: `${IMG}/Varanasi/Sarnath.jpg`, title: 'Sarnath', text: 'The afternoon of the 16th.', tag: 'After' },
  ],

  tips: [
    { title: 'Three o’clock on the 16th', text: 'The dawn arghya needs a pickup from the hotel at three and a drop at the cordon by four. Tell us the ghat and the driver plans the route the night before.' },
    { title: 'Leave the phone in your pocket at the water', text: 'The families in the river are fasting and praying. Photograph the ghat, not the vrati.' },
    { title: 'Stay on for Dev Deepawali if you can', text: 'Eight days later the same ghats are lit end to end. A fortnight in Varanasi in November covers both.' },
  ],

  faqs: [
    { question: 'When is Chhath Puja 2026 in Varanasi?', answer: 'From Friday 13 to Monday 16 November 2026: Nahay Khay on the 13th, Kharna on the 14th, the Sandhya Arghya at sunset on Sunday 15th and the Usha Arghya at dawn on Monday 16th.' },
    { question: 'What time is the Sandhya Arghya on 15 November 2026 in Varanasi?', answer: 'It is offered as the sun sets, a little after five in Varanasi on the 15th; the exact minute is announced locally. Families are on the ghats from three and the vratis enter the water around half past four.' },
    { question: 'What time is the Usha Arghya on 16 November 2026?', answer: 'At sunrise, around half past six on the 16th; the exact minute is announced locally. The ghats fill from four in the morning and the offering is over by seven.' },
    { question: 'Which ghats in Varanasi are the main Chhath ghats?', answer: 'Assi Ghat in the south, Dashashwamedh and the central ghats, Rajghat in the north, and the Ramnagar sandbank on the far bank. Panchganga and the northern ghats see smaller gatherings.' },
    { question: 'Can a cab reach the ghats during Chhath?', answer: 'No. The old-city lanes are never open to cars, and on the afternoon of the 15th and the small hours of the 16th the police have in previous years closed the approaches, which is expected again in 2026. Cabs drop at Lanka for Assi, Godowlia for the central ghats and the Rajghat approach for the north; the rest is ten to twenty minutes on foot.' },
    { question: 'How do I reach Varanasi from Delhi for Chhath?', answer: 'By road it is about 820 km and twelve to fourteen hours via the Yamuna and Agra–Lucknow expressways, best broken at Lucknow. A sedan is ₹9,020 one-way, ₹18,040 for a four-day round trip. Flights land at Babatpur, 28 km from the ghats.' },
    { question: 'Can visitors watch Chhath on the ghats?', answer: 'Yes, the ghats are public. Stay off the bamboo platforms and the front steps, do not photograph the vratis in the water at close range, and be off the steps when the arghya begins. Rajghat and the northern ghats are easier for visitors than Dashashwamedh.' },
    { question: 'Is there a festival surcharge on the cab?', answer: 'No. Sedan ₹11/km, SUV ₹15/km, Innova ₹18/km, Tempo Traveller ₹23/km on a 300 km per day minimum, tolls extra, on every date.' },
  ],

  related: [
    { label: 'Chhath Puja Varanasi cab', sub: 'Packages with ghat transport', href: '/chhath-puja-varanasi-transport', img: `${IMG}/Varanasi/Assi_Ghat.jpg` },
    { label: 'Delhi to Varanasi cab', sub: '820 km · 12–14 hrs', href: '/delhi-to-varanasi', img: `${IMG}/Varanasi/varanasi_hero_section.jpg` },
    { label: 'Lucknow to Varanasi cab', sub: '300 km · 5 hrs', href: '/lucknow-to-varanasi', img: `${IMG}/Lucknow/Rumi_Darwaza.jpg` },
    { label: 'Varanasi airport taxi', sub: 'Babatpur, 28 km to the ghats', href: '/airport-service/varanasi', img: '/images/airport_section.jpg' },
    { label: 'Delhi to Varanasi by Tempo Traveller', sub: 'The extended family', href: '/tempo-traveller/delhi-to-varanasi', img: '/images/tempo/17_seater.jpg' },
    { label: 'Varanasi in two days', sub: 'The itinerary', href: '/varanasi-in-2-days-itinerary', img: `${IMG}/Varanasi/Boat_Ride_Ganges.jpg` },
    { label: 'Prayagraj Sangam tour', sub: '125 km from Varanasi', href: '/prayagraj-sangam-tour', img: `${IMG}/Prayagraj/Triveni_Sangam.jpg` },
    { label: 'Varanasi taxi service', sub: 'City hub', href: '/varanasi', img: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg` },
  ],
  guides: ['dev-deepawali-varanasi-2026', 'deepotsav-ayodhya-2026-guide', 'delhi-to-varanasi-best-route-by-car', 'diwali-tour-packages-2026-from-delhi'],

  schema: {
    places: ['varanasi', 'lucknow', 'delhi'],
    events: [
      { id: 'chhath', name: 'Chhath Puja 2026 on the Varanasi ghats', description: 'The four-day Chhath observance on the Ganga ghats at Varanasi, 13–16 November 2026, with the Sandhya Arghya at sunset on the 15th and the Usha Arghya at dawn on the 16th.', startDate: '2026-11-13', endDate: '2026-11-16', locationName: 'Ganga ghats, Varanasi', locality: 'Varanasi', region: 'Uttar Pradesh', image: `${IMG}/Varanasi/Assi_Ghat.jpg`, price: 9020, offerUrl: '/chhath-puja-varanasi-transport', validFrom: '2026-09-12', performer: 'Chhath committees of Varanasi' },
    ],
  },
};
