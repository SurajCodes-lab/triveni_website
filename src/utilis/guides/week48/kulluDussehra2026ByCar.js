// Week 48 guide 16 — Kullu Dussehra: the week-long fair and the drive from
// Chandigarh. 20–26 October 2026 (it begins on Vijayadashami, the day the
// rest of the country finishes). Feeds the Chandigarh–Manali corridor and the
// Kullu tempo page.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'kullu-dussehra-2026-by-car',
  path: '/kullu-dussehra-2026-by-car',
  mood: 'festival',
  cluster: 'season',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'kullu dussehra 2026', impressions: null, position: null },

  eyebrow: 'Kullu Dussehra 2026',
  dateBadge: '20–26 October 2026',
  crumbs: [{ name: 'Chandigarh', url: '/chandigarh' }, { name: 'Chandigarh to Manali', url: '/chandigarh-to-manali' }],
  crumbName: 'Kullu Dussehra 2026 by car',
  titleLead: 'Kullu Dussehra:',
  titleAccent: 'the week-long fair and the drive from Chandigarh',
  title: 'Kullu Dussehra: The Week-Long Fair and the Drive from Chandigarh',
  metaTitle: 'Kullu Dussehra 2026 by Car: Dates, Fair, Chandigarh Drive',
  metaDescription: 'Kullu Dussehra 2026 runs 20–26 October, starting on Vijayadashami. The Raghunath rath yatra, two hundred village deities on Dhalpur ground, the Lanka Dahan, the 270 km Chandigarh drive from ₹3,300.',
  keywords: ['kullu dussehra 2026', 'kullu dussehra dates 2026', 'kullu dussehra fair', 'chandigarh to kullu by road', 'chandigarh to kullu distance', 'delhi to kullu dussehra', 'dhalpur ground kullu'],
  heroImage: `${IMG}/Manali/Kullu%20Valley.jpg`,
  heroAlt: 'A Himalayan valley in Himachal, the setting for the Kullu Dussehra fair',

  lead: 'Kullu Dussehra 2026 begins on Vijayadashami, Tuesday 20 October, the day Dussehra ends everywhere else, and runs for seven days to Monday 26 October on the Dhalpur ground in Kullu. On the first afternoon the chariot of Raghunath ji is pulled across the ground by hand, escorted by the palanquins of more than two hundred village deities who have walked in from every valley of the district; on the last day the procession goes to the bank of the Beas for the Lanka Dahan. Chandigarh to Kullu is about 270 km and six to seven hours via Bilaspur, Mandi and the Aut tunnel; Delhi is 500 km and eleven hours. A sedan from Chandigarh is ₹3,300 one-way, from Delhi ₹5,500.',
  keyFacts: [
    { label: 'Dussehra 2026', value: '20–26 Oct' },
    { label: 'Rath yatra', value: 'Tue 20 Oct, afternoon' },
    { label: 'Chandigarh to Kullu', value: '270 km · 6–7 hrs' },
    { label: 'Sedan from Chandigarh', value: '₹3,300' },
  ],
  stickyLabel: 'Kullu Dussehra cab',
  stickyPrice: 'Sedan ₹3,300',
  waText: 'Hi, I want a cab to Kullu for Dussehra 2026. Starting city, dates and headcount to follow.',

  intro: [
    'Kullu’s Dussehra is unlike the festival anywhere else in the country: there is no Ravana effigy on the first day, the celebration begins when the others end, and the centre of it is not a stage but a field full of the gods of the valley, each carried in on a palanquin by its own village. It has been held on the Dhalpur maidan since the seventeenth century and is now an international folk festival in the evenings as well. It is also, for a car, one of the best-timed trips in the north: the monsoon is over, the apple harvest is in, and the Beas valley in late October is as clear as it gets.',
    'The dates are verified against the 2026 calendar: Vijayadashami on 20 October, and the fair’s traditional seven days from it. Fares are from the published rate card, ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, tolls and Himachal entry extra, no festival surge.',
  ],

  lanternsTitle: 'The seven days',
  lanternsEyebrow: '20–26 October 2026',
  lanternsIntro: 'The first and last days are the processions. The five between are the fair: the deities in their tents, the market, and the folk programme on the stadium stage every evening.',
  lanterns: [
    { image: `${IMG}/Manali/Kullu%20Valley.jpg`, title: 'Vijayadashami, Tuesday 20 October: the rath yatra', when: '20 Oct · afternoon', text: 'Raghunath ji is brought from his temple at Sultanpur to the Dhalpur ground and installed on the wooden chariot, which the crowd pulls by rope across the maidan to its camp. The village deities arrive through the day and line the route; this is the hour to be there, and the ground is at its fullest.' },
    { image: `${IMG}/Kasol/Manikaran_Sahib.jpg`, alt: 'Manikaran Sahib gurdwara in the Parvati valley, a middle-day trip from Kullu', title: 'The middle days, 21–25 October', when: '21–25 Oct', text: 'The deities stay in their camps on the ground, visited by their villages; the market fills the lower maidan; the international folk festival runs on the stadium stage each evening with troupes from across the state and abroad. Day trips to Manikaran, Kasol and Naggar fit these days; the valley roads are quiet by comparison.' },
    { image: `${IMG}/Kasol/Parvati_River.jpg`, alt: 'A river bank in the Kullu district, the kind of ground where the Lanka Dahan is held by the Beas', title: 'Monday 26 October: the Lanka Dahan', when: '26 Oct · afternoon', text: 'On the last day the chariot is pulled to the bank of the Beas, a pile of brushwood standing for Lanka is burned, and Raghunath ji returns to Sultanpur. The deities leave for their villages that evening and over the following days, on foot, up every side valley. The ground empties overnight.' },
    { image: `${IMG}/Manali/Solang%20Valley.jpg`, title: 'After the fair: Manali, forty kilometres on', when: '27 Oct onwards', text: 'Manali is an hour up the valley. Late October is the last clear window before the snow: Solang, the Atal Tunnel to Sissu and Old Manali, with the apple orchards at Naggar on the way. Most Dussehra trips end with two nights in Manali.' },
  ],

  timelineTitle: 'Chandigarh to Kullu, kilometre by kilometre',
  timelineEyebrow: 'The road',
  timelineIntro: 'NH-205 to Kiratpur, then the Kiratpur–Manali four-lane through Bilaspur and Sundernagar to Mandi, the Beas gorge and the Aut tunnel. Kilometre marks from Chandigarh.',
  timeline: [
    { km: 0, name: 'Chandigarh', time: '6 am', text: 'From the city or the airport at Mohali. Leaving by six clears the Kharar stretch before it slows. Delhi travellers reach this point after four hours on NH-44.', tag: 'Start' },
    { km: 80, name: 'Kiratpur Sahib', time: '7.30 am', text: 'The gurdwara town where the four-lane Kiratpur–Manali highway begins and the plains end. Breakfast at the highway plazas past the junction.', stop: 'Breakfast' },
    { km: 130, name: 'Bilaspur and Gobind Sagar', time: '8.30 am', text: 'The new highway runs above the Gobind Sagar reservoir with long bridges and tunnels; the old road went through the town. The views over the lake are the first reward of the day.', tag: 'Reservoir' },
    { km: 190, name: 'Sundernagar and Mandi', time: '10 am', text: 'Mandi is the halfway town, with its riverside temples and the last big market before Kullu. Fuel here; the road beyond is the gorge.', stop: 'Fuel, tea' },
    { km: 230, name: 'Pandoh dam and the Beas gorge', time: '11 am', text: 'The road follows the Beas through the gorge past the Pandoh dam, with the tunnels of the new alignment cutting the worst of the old cliff road. Slow but spectacular; expect convoy halts if there is work.', tag: 'Gorge' },
    { km: 250, name: 'Aut tunnel', time: '11.45 am', text: 'The three-kilometre tunnel brings you out into the Kullu valley proper; Bhuntar and the airport are ten minutes on. The Parvati valley road to Kasol and Manikaran leaves at Bhuntar.', tag: 'Into the valley' },
    { km: 270, name: 'Kullu, Dhalpur ground', time: '12.30 pm', text: 'The maidan is in the middle of the town on the left bank. During Dussehra the police keep cars to the bypass and the parking areas along the river road; the ground itself is on foot. The driver parks and waits.', tag: 'Arrive', image: `${IMG}/Manali/Manali_hero_section.jpg`, alt: 'The Beas valley road into Kullu and Manali' },
  ],

  table: {
    title: 'Reaching Kullu for Dussehra: from where, how far, what it costs',
    caption: 'Distance, drive time and sedan fare to Kullu from Chandigarh, Chandigarh airport, Delhi, Manali, Bhuntar airport and Shimla',
    intro: 'Rate-card sedan fares at ₹11/km on a 300 km minimum, one-way. Manali and Bhuntar, under 100 km, are quoted on the 4 hr / 40 km local package. Tolls and Himachal entry at actual. Bhuntar, the valley’s airport, is ten kilometres from Kullu; Chandigarh is the airport with regular flights.',
    columns: [
      { key: 'from', label: 'From' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'fare', label: 'Sedan, one-way', align: 'right', strong: true },
    ],
    rows: [
      { from: 'Chandigarh', distance: '270 km', time: '6–7 hrs', road: 'NH-205, Kiratpur–Manali highway, Aut tunnel', fare: '₹3,300' },
      { from: 'Chandigarh airport (Mohali)', distance: '275 km', time: '6–7 hrs', road: 'Same, from the airport', fare: '₹3,300' },
      { from: 'Delhi', distance: '500 km', time: '11 hrs', road: 'NH-44 to Chandigarh, then as above', fare: '₹5,500' },
      { from: 'Shimla', distance: '200 km', time: '6 hrs', road: 'via Mandi', fare: '₹3,300' },
      { from: 'Manali', distance: '40 km', time: '1 hr', road: 'NH-3 down the valley', fare: '₹2,200 local' },
      { from: 'Bhuntar airport', distance: '10 km', time: '20 min', road: 'NH-3', fare: '₹2,200 local' },
      { from: 'Amritsar', distance: '360 km', time: '8 hrs', road: 'via Jalandhar, Hoshiarpur, Mandi', fare: '₹3,960' },
    ],
    footnote: 'Ertiga ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km. A three-day Chandigarh–Kullu–Chandigarh sedan round trip bills ₹9,900 (three days at the minimum); from Delhi, ₹11,000.',
  },

  sections: [
    {
      eyebrow: 'What it is',
      heading: 'What actually happens at Kullu Dussehra, and why does it start on Vijayadashami?',
      paras: [
        'The story the valley tells is that in the seventeenth century Raja Jagat Singh, atoning for a wrong done to a Brahmin, had an image of Raghunath, Rama, brought from Ayodhya and installed as the true ruler of Kullu, with himself as regent. Dussehra in Kullu is Raghunath ji’s durbar: the gods of every village in the district are summoned to pay their respects, and they come, carried on palanquins by their villagers, some walking for days. The festival begins on Vijayadashami because that is the day Raghunath ji sets out from his temple to hold court on the maidan, and it lasts the seven days the court is in session.',
        'There is no burning of Ravana. The Lanka Dahan on the last day is a small pile of brushwood by the river, and the point of the week is not the epic but the assembly: two hundred deities in their tents on one field, each with its drums and its priests, and the villages that brought them camping beside them.',
      ],
      image: { src: `${IMG}/Manali/Kullu%20Valley.jpg`, alt: 'A Himalayan valley in Himachal, the setting for the Kullu Dussehra fair', tag: 'Dhalpur · the maidan', caption: 'The Dhalpur ground sits on the left bank of the Beas in the middle of Kullu town.' },
    },
    {
      eyebrow: 'The cab in Kullu',
      heading: 'Where does the cab park during the fair, and is Kullu full?',
      paras: [
        'Kullu is a small town and the fair fills its centre, so from the 20th the police keep private vehicles to the bypass and the parking areas along the river road; the maidan is ten to fifteen minutes on foot from any of them. The driver parks and waits, and is available for the valley day trips on the middle days. Kullu’s own hotels are full for the week by early October; Bhuntar, ten kilometres down, and the Naggar and Manali side, forty kilometres up, have the rooms, and both are half an hour from the ground.',
        'Many families stay in Manali for the week and drive down to Kullu for the first day, a middle evening and the last day, which is the version we suggest for families.',
      ],
    },
    {
      eyebrow: 'From Chandigarh',
      heading: 'Is the Chandigarh–Kullu road good in October, and should I break the drive?',
      paras: [
        'October is the best month of the year for it. The monsoon landslides are cleared, the Kiratpur–Manali four-lane is open through Bilaspur and Sundernagar, and the only slow section is the Beas gorge between Pandoh and Aut, where tunnelling on the new alignment still means convoy halts on some days. Six to seven hours is honest for a six o’clock start; leave at nine and it is eight.',
        'It does not need breaking. From Delhi it does: eleven hours through Chandigarh in one push is possible with a four o’clock start, but a night at Chandigarh or Bilaspur and a fresh morning for the gorge is what we suggest for families, and it puts you on the Dhalpur ground for the rath yatra on the afternoon of the 20th if you leave Delhi on the 19th.',
      ],
      link: { label: 'Chandigarh to Manali by car: the road in segments', href: '/travel-by-car/chandigarh-to-manali' },
      image: { src: `${IMG}/Manali/Pandoh%20Dam.jpg`, alt: 'The Beas above the Pandoh dam', tag: 'Pandoh · the gorge', side: 'left', caption: 'The Beas gorge between Pandoh and Aut: the one slow section of the Chandigarh–Kullu road.' },
    },
    {
      eyebrow: 'The middle days',
      heading: 'What can I do in the valley on the middle days of the fair?',
      paras: [
        'The deities stay in their camps and the ground is busy but not pressed, so the middle days are for the valley. Manikaran and Kasol up the Parvati valley from Bhuntar make a day: the hot springs and the gurdwara at Manikaran, the river at Kasol. Naggar, halfway to Manali, has the castle and the Roerich gallery and the apple orchards in their last week. Bijli Mahadev, on the ridge above Kullu, is a short drive and a three-kilometre climb with the whole valley below. Each is a half day on the local package from Kullu.',
      ],
      link: { label: 'Manali, Kullu and Manikaran tour', href: '/sightseeing/manali-kullu-manikaran-tour' },
    },
    {
      eyebrow: 'Groups',
      heading: 'Which vehicle for a Kullu Dussehra trip?',
      paras: [
        'A sedan is fine on the Chandigarh–Kullu road in October; for a family with luggage or anyone prone to car sickness in the gorge an Innova Crysta is more comfortable, at ₹18/km. Groups travel best in a Tempo Traveller, which at ₹23/km for twelve seats is cheaper per head than two cars and keeps everyone together for the valley day trips; the Delhi to Kullu tempo page quotes the group fares.',
      ],
      link: { label: 'Delhi to Kullu by Tempo Traveller', href: '/tempo-traveller/delhi-to-kullu' },
    },
  ],

  fare: {
    title: 'Chandigarh to Kullu for Dussehra',
    note: 'Rate-card fares for the 270 km drive. The three-day figure is the trip built around the rath yatra: up on the 20th morning, the fair, and home on the 22nd, or the equivalent around the Lanka Dahan.',
    caption: 'Chandigarh to Kullu cab fare for Dussehra by vehicle',
    distanceKm: 270,
    roundTrip: true,
    days: 3,
    roundLabel: 'Three-day trip',
    footnote: 'Tolls on the Kiratpur–Manali highway, Himachal entry and Kullu parking at actual. No festival surcharge. A week-long stay with valley day trips bills 300 km a day at the vehicle rate.',
    waText: 'Hi, I want a Chandigarh to Kullu cab for Dussehra 2026. Dates and headcount to follow.',
    bookHref: '/chandigarh-to-manali',
    bookLabel: 'Chandigarh to Manali cab page',
    cta: 'Book the Dussehra cab',
  },

  galleryTitle: 'The valley in the last clear week',
  gallery: [
    { image: `${IMG}/Manali/Kullu%20Valley.jpg`, title: 'The Kullu valley', text: 'Apple harvest in, monsoon out.', tag: 'Late October' },
    { image: `${IMG}/Kasol/Manikaran_Sahib.jpg`, title: 'Manikaran', text: 'The hot springs, a middle-day trip.', tag: 'Parvati valley' },
    { image: `${IMG}/Kasol/Parvati_River.jpg`, title: 'Kasol', text: 'Up the same road from Bhuntar.', tag: 'Parvati valley' },
    { image: `${IMG}/Manali/Solang%20Valley.jpg`, title: 'Solang', text: 'After the fair, from Manali.', tag: 'Manali · 40 km' },
    { image: `${IMG}/Chandigarh/sukhana_lake.jpg`, title: 'Chandigarh', text: 'The start line, six hours away.', tag: 'Start' },
  ],

  tips: [
    { title: 'Be on the maidan by two on the 20th', text: 'The rath yatra is the hour the whole week is built around. The deities arrive through the day and the chariot moves in the afternoon; the ground is full by then.' },
    { title: 'Stay at Bhuntar or on the Manali side', text: 'Kullu’s hotels go first. Bhuntar is ten minutes down; Naggar and Manali are forty minutes up and give you the after-fair days without moving.' },
    { title: 'Leave Chandigarh by six', text: 'The Kharar stretch and the Beas gorge both reward an early start. From Delhi, sleep at Chandigarh on the 19th.' },
  ],

  faqs: [
    { question: 'When is Kullu Dussehra 2026?', answer: 'From Tuesday 20 October, which is Vijayadashami, to Monday 26 October 2026, seven days on the Dhalpur ground in Kullu. The rath yatra of Raghunath ji is on the afternoon of the 20th and the Lanka Dahan by the Beas on the 26th.' },
    { question: 'Why does Kullu Dussehra start when Dussehra ends elsewhere?', answer: 'Because it is Raghunath ji’s durbar rather than a re-enactment of the Ramayana: on Vijayadashami the deity leaves his temple to hold court on the maidan, and the village gods of the district come to attend for the seven days the court sits. There is no Ravana effigy.' },
    { question: 'How far is Kullu from Chandigarh by road?', answer: 'About 270 km and six to seven hours via Kiratpur, Bilaspur, Mandi and the Aut tunnel. A sedan is ₹3,300 one-way at the rate card and ₹9,900 for a three-day trip with the driver staying.' },
    { question: 'How far is Kullu from Delhi?', answer: 'About 500 km and eleven hours via Chandigarh. A sedan is ₹5,500 one-way, ₹11,000 for a three-day trip. Breaking the drive at Chandigarh on the 19th puts you on the ground for the rath yatra on the 20th.' },
    { question: 'Where do cars park during Kullu Dussehra?', answer: 'On the bypass and the parking areas along the river road; the Dhalpur maidan is closed to vehicles and is ten to fifteen minutes on foot from the parking. The driver waits with the car.' },
    { question: 'Where should I stay for Kullu Dussehra?', answer: 'Kullu’s hotels fill by early October. Bhuntar, ten kilometres down the valley, and Naggar or Manali, forty kilometres up, have the rooms and are half an hour from the ground. Many families stay in Manali and drive down for the first and last days.' },
    { question: 'What is the nearest airport to Kullu?', answer: 'Bhuntar, ten kilometres from Kullu, with limited flights. Chandigarh, 270 km and six to seven hours, has regular flights; a cab meets arrivals at Mohali and drives straight to the valley.' },
    { question: 'Is the road to Kullu safe in October?', answer: 'October is the best month for it: the monsoon landslides are cleared and the Kiratpur–Manali four-lane is open. The Beas gorge between Pandoh and Aut can have convoy halts for tunnel work; allow for it in the drive time.' },
  ],

  related: [
    { label: 'Chandigarh to Manali cab', sub: '310 km · via Kullu', href: '/chandigarh-to-manali', img: `${IMG}/Manali/Manali_hero_section.jpg` },
    { label: 'Chandigarh to Manali by car', sub: 'The road in segments', href: '/travel-by-car/chandigarh-to-manali', img: `${IMG}/Manali/nagar%20castle.jpeg` },
    { label: 'Delhi to Kullu by Tempo Traveller', sub: 'Groups of 12–17', href: '/tempo-traveller/delhi-to-kullu', img: '/images/tempo/12_seater.jpg' },
    { label: 'Manali, Kullu & Manikaran tour', sub: 'The middle days', href: '/sightseeing/manali-kullu-manikaran-tour', img: `${IMG}/Kasol/Manikaran_Sahib.jpg` },
    { label: 'Chandigarh to Manali, 3 days', sub: 'Sightseeing package', href: '/sightseeing/chandigarh-to-manali-3-days', img: `${IMG}/Manali/Solang%20Valley.jpg` },
    { label: 'Chandigarh airport taxi', sub: 'Mohali to the valley', href: '/airport-service/chandigarh', img: '/images/airport_section.jpg' },
    { label: 'Delhi to Manali cab', sub: '540 km · via Kullu', href: '/one-way-cab/delhi-to-manali', img: `${IMG}/Manali/Mall_Road.jpg` },
    { label: 'Best time to visit Manali', sub: 'October is the clear month', href: '/best-time-to-visit/manali', img: `${IMG}/Manali/Rahala%20Falls.jpg` },
  ],
  guides: ['navratri-vaishno-devi-by-road', 'how-to-reach-kaza-from-delhi', 'best-time-to-visit-kasol', 'hill-stations-near-amritsar', 'diwali-tour-packages-2026-from-delhi'],

  schema: {
    places: ['chandigarh', 'manali', 'delhi', 'shimla'],
    trip: {
      name: 'Chandigarh to Kullu Dussehra 2026 by road',
      description: 'Three-day trip by car to the Kullu Dussehra fair: the Kiratpur–Manali highway through Bilaspur and Mandi, the rath yatra on the Dhalpur ground, a valley day, and the drive home.',
      touristType: 'Festival travellers',
      lowPrice: 3300,
      highPrice: 20700,
      itinerary: [
        { name: 'Day 1: Chandigarh to Kullu', text: '270 km via Kiratpur, Bilaspur, Mandi and the Aut tunnel; on the Dhalpur ground by two for the rath yatra.' },
        { name: 'Day 2: The fair and the valley', text: 'The deities’ camps in the morning; Manikaran and Kasol or Naggar in the afternoon; the folk programme in the evening.' },
        { name: 'Day 3: Kullu to Chandigarh', text: 'The drive home, or on to Manali for two nights.' },
      ],
    },
    events: [
      { id: 'kullu-dussehra', name: 'Kullu Dussehra 2026', description: 'The seven-day Dussehra fair on the Dhalpur ground at Kullu, Himachal Pradesh, from Vijayadashami on 20 October to 26 October 2026, with the Raghunath rath yatra and the assembly of the district’s village deities.', startDate: '2026-10-20', endDate: '2026-10-26', locationName: 'Dhalpur ground, Kullu', locality: 'Kullu', region: 'Himachal Pradesh', image: `${IMG}/Manali/Kullu%20Valley.jpg`, price: 3300, offerUrl: '/chandigarh-to-manali', validFrom: '2026-09-12', performer: 'Kullu Dussehra Committee' },
    ],
  },
};
