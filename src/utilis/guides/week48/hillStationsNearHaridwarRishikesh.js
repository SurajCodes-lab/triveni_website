// Week 48 guide 6 — "hill station near haridwar" (765 impressions, position
// 5.1) and "hill station near rishikesh" (638, position 8.8). One guide for
// the twin towns, because the hills behind them are the same hills.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'hill-stations-near-haridwar-rishikesh',
  path: '/hill-stations-near-haridwar-rishikesh',
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'hill station near haridwar / rishikesh', impressions: 1403, position: 6.8 },

  eyebrow: 'Hill guide · Haridwar & Rishikesh',
  crumbs: [{ name: 'Haridwar', url: '/haridwar' }],
  crumbName: 'Hill stations near Haridwar & Rishikesh',
  titleLead: 'Hill stations near Haridwar and Rishikesh:',
  titleAccent: 'the closest first',
  title: 'Hill Stations Near Haridwar and Rishikesh: The Closest First',
  metaTitle: 'Hill Stations Near Haridwar & Rishikesh: Mussoorie to Auli',
  metaDescription: 'Hill stations near Haridwar and Rishikesh by road: Mussoorie in 2.5 hours, Dhanaulti and Kanatal in 3, New Tehri in 2.5, Lansdowne in 3.5, Nainital in 6, Chopta and Auli beyond. Fares from ₹2,585.',
  keywords: ['hill station near haridwar', 'hill station near rishikesh', 'nearest hill station to haridwar', 'nearest hill station to rishikesh', 'haridwar to mussoorie', 'rishikesh to dhanaulti', 'rishikesh to chopta'],
  heroImage: `${IMG}/Mussoorie/Mussoorie_Hero_section.jpg`,
  heroAlt: 'Mussoorie ridge above the Doon valley, the nearest hill station to Haridwar and Rishikesh',

  lead: 'The nearest hill station to both Haridwar and Rishikesh is Mussoorie, about 85 km from Haridwar and 75 km from Rishikesh through Dehradun, a two-and-a-half-hour drive. Dhanaulti and Kanatal are half an hour beyond it on the Chamba road, New Tehri is two and a half hours straight up the river from Rishikesh, and Lansdowne is three and a half hours via Kotdwar. Nainital is a six-hour drive across the Terai; Chopta and Auli are long-weekend trips of six to eight hours into Garhwal. Short hops bill on the local package from ₹2,585; anything 100 km and over is ₹3,300 for a sedan.',
  keyFacts: [
    { label: 'Nearest', value: 'Mussoorie · 75–85 km' },
    { label: 'Up the river', value: 'New Tehri · 75 km' },
    { label: 'Quietest', value: 'Lansdowne · 110 km' },
    { label: 'Sedan, Mussoorie', value: 'from ₹2,585' },
  ],
  stickyLabel: 'Haridwar hill cab',
  waText: 'Hi, I need a cab from Haridwar or Rishikesh to the hills. Destination and dates to follow.',

  intro: [
    'Haridwar is where the Ganga leaves the mountains and Rishikesh is twenty-five kilometres upstream, so the hills are not near these towns; they start in them. What people mean by the question is a proper hill station with a Mall Road, a view and a cool night, and the nearest of those is Mussoorie, via Dehradun. The guide runs outward from there.',
    'Distances are given from Rishikesh where it is the closer town and from Haridwar where it makes no difference; the two are half an hour apart. Fares follow the rate card: under 100 km a sedan bills the 4 hour / 40 km package at ₹2,200 plus ₹11 for each extra kilometre; at 100 km and over it is ₹11/km on a 300 km minimum, ₹3,300.',
  ],

  bands: [
    {
      eyebrow: 'Band one',
      heading: 'Up to three hours: the hill stations you can reach for lunch',
      note: 'All via Dehradun or straight up the Ganga from Rishikesh. Day trips or one night.',
      places: [
        { name: 'Mussoorie', image: `${IMG}/Mussoorie/Mall_road.jpg`, distance: '75–85 km', time: '2.5 hrs', fare: '₹2,585', bestFor: 'Mall Road, Kempty, Landour', highlights: ['Mall Road', 'Kempty Falls', 'Gun Hill ropeway'], blurb: 'Through Dehradun and up the thirty-five kilometre climb. The Mall in the evening, Kempty Falls and the Gun Hill ropeway by day, and Landour above the town for the quiet version. Doable as a day from Haridwar, better as a night.', href: '/haridwar-to-mussoorie', cta: 'Cab to Mussoorie' },
        { name: 'Landour', image: `${IMG}/Mussoorie/Lal_tibba.jpg`, distance: '80 km from Rishikesh', time: '2.75 hrs', fare: '₹2,640', bestFor: 'Walks, bakeries, silence', highlights: ['Lal Tibba', 'Char Dukan', 'Sisters Bazaar'], blurb: 'The cantonment above Mussoorie: deodar forest, a loop walk, the Lal Tibba view and Char Dukan for breakfast. The place to stay if the Mall is too much.', href: '/haridwar-to-mussoorie', cta: 'Cab via Mussoorie' },
        { name: 'New Tehri', image: `${IMG}/Rishikesh/Rishikesh_hero_section.jpg`, alt: 'The Ganga valley above Rishikesh', distance: '75 km', time: '2.5 hrs', fare: '₹2,585', bestFor: 'Tehri Lake, water sports', highlights: ['Tehri Lake', 'Boating and jet-ski', 'Chamba'], blurb: 'Straight up the Badrinath road from Rishikesh and then the Tehri branch. A planned town above the dam reservoir, with boating, floating huts and a lake forty kilometres long. Good for a night that is not Mussoorie.', href: '/rishikesh', cta: 'Rishikesh cabs' },
        { name: 'Dhanaulti', image: `${IMG}/Mussoorie/company_garden.jpg`, alt: 'Company Garden, Mussoorie, on the road out to Dhanaulti', distance: '100 km', time: '3 hrs', km: 100, bestFor: 'Eco parks, snow', highlights: ['Eco Park', 'Surkanda Devi', 'Camping'], blurb: 'Twenty-five kilometres beyond Mussoorie on the Chamba road, at 2,200 metres. Deodar forest, two eco-parks, the Surkanda Devi ropeway, and snow most winters. A quieter night than Mussoorie by a distance.', href: '/sightseeing/dehradun-dhanaulti-same-day', cta: 'Dhanaulti day tour' },
      ],
    },
    {
      eyebrow: 'Band two',
      heading: 'Three to five hours: the quiet ones',
      note: 'Off the tourist circuit. These are the hill stations locals send you to.',
      places: [
        { name: 'Kanatal', image: `${IMG}/Kufri/Green_Valley.webp`, alt: 'A green Himalayan valley in the middle hills', distance: '110 km', time: '3.5 hrs', km: 110, bestFor: 'Camps, apple orchards', highlights: ['Kodia jungle', 'Tehri Lake view', 'Camp stays'], blurb: 'Ten kilometres past Dhanaulti, and mostly camps and resorts in the forest with the Tehri reservoir below. Choose it for a night under canvas within three and a half hours of the Ganga.', href: '/one-way-cab/delhi-to-kanatal', cta: 'Kanatal cab page' },
        { name: 'Lansdowne', image: `${IMG}/Lansdowne/lansdowne_hero_section.jpg`, distance: '110 km', time: '3.5 hrs', km: 110, bestFor: 'Cantonment quiet, pine', highlights: ['Bhulla Lake', 'Tip-n-Top', 'St Mary’s Church'], blurb: 'From Haridwar via Najibabad and Kotdwar, then a climb through oak and pine. A Garhwal Rifles cantonment with no Mall Road and no crowd. The stillest hill station within a morning of Haridwar.', href: '/one-way-cab/delhi-to-lansdowne', cta: 'Lansdowne cab page' },
        { name: 'Chakrata', image: `${IMG}/Dehradun/Dehradun_hero_section.jpg`, alt: 'Dehradun from the hills, the town you pass through for Chakrata', distance: '150 km', time: '5 hrs', km: 150, bestFor: 'Tiger Falls, forest', highlights: ['Tiger Falls', 'Deoban', 'Budher caves'], blurb: 'Ninety kilometres north-west of Dehradun in a restricted cantonment area; Indian nationals only. Tiger Falls and the Deoban forest, and almost no one there.', href: '/haridwar-to-dehradun', cta: 'Cab via Dehradun' },
      ],
    },
    {
      eyebrow: 'Band three',
      heading: 'Six hours and more: the long-weekend hills',
      note: 'East across the Terai to Kumaon, or north into Garhwal on the Badrinath road. Two nights each.',
      places: [
        { name: 'Nainital', image: `${IMG}/Nainital/Nainital_hero_section.jpg`, distance: '250 km', time: '6 hrs', km: 250, bestFor: 'Lake town', highlights: ['Naini Lake', 'Snow View', 'Bhimtal'], blurb: 'Via Najibabad, Bijnor, Kashipur and Haldwani. Six hours across the plain and up. Two nights, with Bhimtal and Sattal on the second day.', href: '/haridwar-to-nainital', cta: 'Cab to Nainital' },
        { name: 'Chopta & Tungnath', image: `${IMG}/Char_Dham/Kedarnath_Temple.jpg`, alt: 'Kedarnath temple, up the same valley as Chopta and Tungnath', distance: '200 km', time: '6.5 hrs', km: 200, bestFor: 'Meadows, Tungnath trek', highlights: ['Chopta meadows', 'Tungnath temple', 'Chandrashila'], blurb: 'Up the Badrinath road from Rishikesh to Rudraprayag, then the Ukhimath branch. The “mini Switzerland” of Garhwal at 2,600 metres; the Tungnath trek is four kilometres and Chandrashila an hour more. The Tungnath temple is closed in winter and the road can be snowbound.', href: '/sightseeing/chopta-tungnath-trek-tour', cta: 'Chopta trek tour' },
        { name: 'Auli', image: `${IMG}/Valley_of_Flowers/Valley_of_Flowers_hero_section.jpg`, alt: 'High meadows and snow peaks of upper Garhwal', distance: '280 km', time: '8–9 hrs', km: 280, bestFor: 'Skiing, ropeway', highlights: ['Auli ropeway', 'Ski slopes', 'Nanda Devi views'], blurb: 'Beyond Joshimath on the Badrinath road. India’s ski resort in January and February, a meadow with a ropeway the rest of the year. A two-day drive with a halt at Rudraprayag or Joshimath is the sane way.', href: '/sightseeing/rishikesh-to-auli-2-days', cta: 'Rishikesh–Auli 2 days' },
      ],
    },
  ],

  table: {
    title: 'Hill stations near Haridwar and Rishikesh, by distance',
    caption: 'Distance, drive time, road and sedan fare for hill stations near Haridwar and Rishikesh',
    intro: 'Distances from the nearer of the two towns. Under 100 km the sedan bills the local package (₹2,200 for 4 hr / 40 km plus ₹11 per extra kilometre); at 100 km and over it is ₹11/km on a 300 km minimum.',
    columns: [
      { key: 'place', label: 'Hill station' },
      { key: 'from', label: 'From' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'sedan', label: 'Sedan, one-way', align: 'right', strong: true },
    ],
    rows: [
      { place: 'New Tehri', from: 'Rishikesh', distance: '75 km', time: '2.5 hrs', road: 'NH-7 to Chamba, Tehri road', sedan: '₹2,585' },
      { place: 'Mussoorie', from: 'Rishikesh', distance: '75 km', time: '2.5 hrs', road: 'via Dehradun', sedan: '₹2,585' },
      { place: 'Mussoorie', from: 'Haridwar', distance: '85 km', time: '2.5 hrs', road: 'via Dehradun', sedan: '₹2,695' },
      { place: 'Landour', from: 'Rishikesh', distance: '80 km', time: '2.75 hrs', road: 'via Mussoorie', sedan: '₹2,640' },
      { place: 'Dhanaulti', from: 'Rishikesh', distance: '100 km', time: '3 hrs', road: 'via Mussoorie', sedan: '₹3,300' },
      { place: 'Kanatal', from: 'Rishikesh', distance: '110 km', time: '3.5 hrs', road: 'via Dhanaulti', sedan: '₹3,300' },
      { place: 'Lansdowne', from: 'Haridwar', distance: '110 km', time: '3.5 hrs', road: 'via Najibabad, Kotdwar', sedan: '₹3,300' },
      { place: 'Chakrata', from: 'Haridwar', distance: '150 km', time: '5 hrs', road: 'via Dehradun, Vikasnagar', sedan: '₹3,300' },
      { place: 'Chopta', from: 'Rishikesh', distance: '200 km', time: '6.5 hrs', road: 'NH-7 to Rudraprayag, Ukhimath', sedan: '₹3,300' },
      { place: 'Nainital', from: 'Haridwar', distance: '250 km', time: '6 hrs', road: 'via Bijnor, Kashipur, Haldwani', sedan: '₹3,300' },
      { place: 'Auli', from: 'Rishikesh', distance: '280 km', time: '8–9 hrs', road: 'NH-7 to Joshimath', sedan: '₹3,300' },
    ],
    footnote: 'Round trips bill per day: 300 km × ₹11 = ₹3,300 a day for a sedan. Ertiga ₹15/km, Innova Crysta ₹18/km, Tempo Traveller ₹23/km. Tolls, parking and Mussoorie eco-cess at actual.',
  },

  sections: [
    {
      eyebrow: 'Nearest',
      heading: 'Which is the nearest hill station to Haridwar?',
      paras: [
        'Mussoorie, at about 85 km and two and a half hours. The route runs to Dehradun on the Haridwar–Dehradun highway, which is fast, and then up the thirty-five kilometre climb from Rajpur, which is not. From Rishikesh the same trip is ten kilometres shorter. New Tehri is the same distance from Rishikesh straight up the Ganga, and is the answer if you want a lake rather than a Mall Road.',
        'For the very nearest hills of any kind, Rishikesh is already there: Neelkanth Mahadev and Kunjapuri temple are on ridges above the town at 1,300 and 1,600 metres, and both are a two-hour round trip that gives you the Himalayan view without a hill station.',
      ],
      image: { src: `${IMG}/Mussoorie/Kempty_Falls.jpg`, alt: 'Kempty Falls near Mussoorie', tag: 'Mussoorie · 85 km', caption: 'Kempty Falls on the Mussoorie–Yamunotri road, the day-trip stop from either town.' },
    },
    {
      eyebrow: 'Day trip or night',
      heading: 'Can I do Mussoorie as a day trip from Haridwar or Rishikesh?',
      paras: [
        'Yes, and the same-day tour exists for exactly that: leave at seven, the Mall and Gun Hill by mid-morning, Kempty Falls after lunch, back by evening. It is a fixed same-day package, priced on its own page rather than on the per-kilometre rate card.',
        'The night is worth it, though. Mussoorie after the day-trippers leave is a different town, and Landour in the early morning is the best hour in the district. If you have one night, stay in Landour and do Dhanaulti on the way back.',
      ],
      link: { label: 'Haridwar to Mussoorie same-day tour', href: '/sightseeing/haridwar-to-mussoorie-same-day' },
    },
    {
      eyebrow: 'Quiet',
      heading: 'Which hill station near Rishikesh is the quietest?',
      paras: [
        'Lansdowne, and then Kanatal. Lansdowne is a working cantonment, which keeps the building and the traffic down, and it has never had a Mall Road to fill; Bhulla Lake, the Tip-n-Top viewpoint and the church are the whole itinerary, and the point is the forest. Kanatal is a stretch of camps and resorts on a ridge above the Tehri reservoir, ten kilometres beyond Dhanaulti; you go for a night under the trees, not for a town.',
        'Chakrata is quieter still, because it is a restricted area open only to Indian nationals and is ninety kilometres from the nearest railway. Tiger Falls and the Deoban forest are the draw.',
      ],
      image: { src: `${IMG}/Lansdowne/Bhulla_Lake.jpg`, alt: 'Bhulla Lake at Lansdowne', tag: 'Lansdowne · 110 km', side: 'left', caption: 'Bhulla Lake, Lansdowne: a cantonment town with no Mall Road to fill.' },
    },
    {
      eyebrow: 'Higher',
      heading: 'What are the best long-weekend hill trips from Rishikesh into Garhwal?',
      paras: [
        'Chopta for meadows and the Tungnath trek, and Auli for the ropeway and, in January and February, skiing. Both go up the Badrinath road, NH-7, which follows the Alaknanda through Devprayag, Srinagar and Rudraprayag and is a slow, spectacular six to nine hours. The Tungnath temple is closed in winter and the Chopta road can be snowbound; Auli is at its best in exactly those months.',
        'Neither should be driven in one push from the plains. Break at Rudraprayag for Chopta and at Joshimath for Auli, and book an Innova or an SUV rather than a sedan for the last stretches.',
      ],
      link: { label: 'Rishikesh to Auli in two days', href: '/sightseeing/rishikesh-to-auli-2-days' },
    },
    {
      eyebrow: 'Season',
      heading: 'When is the best time for the hills from Haridwar and Rishikesh?',
      paras: [
        'March to June for the classic escape, when Haridwar is at forty degrees and Mussoorie at twenty-five. September to November is clearer and quieter, and the Ganga is at its best colour after the monsoon. December to February brings snow to Dhanaulti, Kanatal and sometimes Mussoorie, and the ski season to Auli. The monsoon, July to mid-September, is the time to stay off the Badrinath road and the Chakrata road; the Mussoorie climb is fine but the falls are unsafe.',
      ],
    },
  ],

  fare: {
    title: 'Rishikesh or Haridwar to Mussoorie',
    note: 'Under 100 km, so the local package applies: ₹2,200 for the first 4 hours and 40 km, then ₹11 for each extra kilometre. Shown for the 75 km run from Rishikesh; add ₹110 from Haridwar.',
    caption: 'Rishikesh to Mussoorie cab fare by vehicle',
    oneWayLabel: 'One-way, 75 km',
    rows: [
      { vehicle: 'Sedan (Swift Dzire, Etios)', seats: '4', rate: '₹2,200 + ₹11/km', fare: '₹2,585' },
      { vehicle: 'Ertiga / SUV', seats: '6', rate: '₹2,500 + ₹15/km', fare: '₹3,025' },
      { vehicle: 'Innova Crysta', seats: '6–7', rate: '₹2,800 + ₹18/km', fare: '₹3,430' },
      { vehicle: 'Tempo Traveller (12-seater)', seats: '12', rate: '₹2,800 + ₹23/km', fare: '₹3,605' },
    ],
    footnote: 'Local package: 40 km included; the extra 35 km at the vehicle’s per-km rate. For a same-day return with the car waiting, see the Haridwar to Mussoorie same-day tour page. Mussoorie eco-cess and parking at actual.',
    waText: 'Hi, I want a cab from Rishikesh or Haridwar to Mussoorie. Date and headcount to follow.',
    bookHref: '/haridwar-to-mussoorie',
    bookLabel: 'Haridwar to Mussoorie page',
    cta: 'Get the Mussoorie fare',
  },

  galleryTitle: 'Above the Ganga',
  gallery: [
    { image: `${IMG}/Mussoorie/Gun_Hill.jpg`, title: 'Gun Hill, Mussoorie', text: 'The ropeway from the Mall.', tag: '85 km' },
    { image: `${IMG}/Lansdowne/Tip_n_Top_Viewpoint.jpg`, title: 'Tip-n-Top, Lansdowne', text: 'The Garhwal snow line on a clear morning.', tag: '110 km' },
    { image: `${IMG}/Nainital/Naukuchiatal_Lake.jpg`, title: 'Naukuchiatal', text: 'The nine-cornered lake below Nainital.', tag: '260 km' },
    { image: `${IMG}/Dehradun/Sahastradhara.jpg`, title: 'Sahastradhara, Dehradun', text: 'The sulphur springs, a detour from Dehradun.', tag: 'Dehradun' },
    { image: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, title: 'Laxman Jhula', text: 'Where the hills start.', tag: 'Rishikesh' },
  ],

  tips: [
    { title: 'Go through Dehradun, not Rajaji', text: 'The Haridwar–Dehradun highway is the fast way to Mussoorie. The Rajaji park road via Chilla is scenic but closes at dusk and adds an hour.' },
    { title: 'The Badrinath road is a two-day road', text: 'Chopta and Auli are not weekend drives from the plains. Break at Rudraprayag or Joshimath, and take an Innova or SUV for the last stretch.' },
    { title: 'Ask for the local package under 100 km', text: 'Mussoorie, Landour and New Tehri are local-package runs from Rishikesh. Say so when you book; it is the cheaper product for the same car.' },
  ],

  faqs: [
    { question: 'Which is the nearest hill station to Haridwar?', answer: 'Mussoorie, about 85 km and two and a half hours via Dehradun. Landour is just above it, Dhanaulti twenty-five kilometres beyond, and Lansdowne 110 km away via Kotdwar.' },
    { question: 'Which is the nearest hill station to Rishikesh?', answer: 'Mussoorie at about 75 km via Dehradun and New Tehri at about 75 km straight up the Ganga are the two closest, both around two and a half hours. Dhanaulti is 100 km and three hours.' },
    { question: 'How far is Mussoorie from Haridwar and what does a cab cost?', answer: 'About 85 km and two and a half hours through Dehradun. A sedan bills the local package: ₹2,200 for the first 4 hours and 40 km plus ₹11 for each extra kilometre, about ₹2,695 one-way. An Ertiga is about ₹3,175 and an Innova Crysta about ₹3,610.' },
    { question: 'Can I do Mussoorie as a day trip from Haridwar?', answer: 'Yes. Leave by seven, see the Mall, Gun Hill and Kempty Falls, and be back by evening. It is a fixed same-day package priced on the Haridwar to Mussoorie same-day tour page. A night in Landour is the better version if you have the time.' },
    { question: 'Which hill station near Rishikesh is best for snow?', answer: 'Dhanaulti and Kanatal at 2,200 metres usually have snow from late December to February and are three hours away. Auli, eight to nine hours up the Badrinath road, has skiing in January and February.' },
    { question: 'Is Nainital near Haridwar?', answer: 'About 250 km and six hours via Bijnor, Kashipur and Haldwani. It is a two-night trip rather than a weekend one; a sedan bills ₹3,300 one-way and ₹6,600 for two days.' },
    { question: 'Which hill station near Rishikesh is the quietest?', answer: 'Lansdowne, a Garhwal Rifles cantonment with no Mall Road, 110 km via Kotdwar. Kanatal, a ridge of forest camps beyond Dhanaulti, is the quiet choice on the Mussoorie side.' },
    { question: 'Is Chopta a hill station near Rishikesh?', answer: 'Chopta is a meadow at 2,600 metres about 200 km and six and a half hours up the Badrinath road, with the Tungnath temple trek above it. It is a long-weekend trip; the Tungnath temple is closed in winter and the road can be snowbound.' },
  ],

  related: [
    { label: 'Haridwar to Mussoorie cab', sub: '85 km · via Dehradun', href: '/haridwar-to-mussoorie', img: `${IMG}/Mussoorie/Mall_road.jpg` },
    { label: 'Haridwar to Nainital cab', sub: '250 km · 6 hrs', href: '/haridwar-to-nainital', img: `${IMG}/Nainital/Naini_Lake.jpg` },
    { label: 'Haridwar to Dehradun cab', sub: '55 km', href: '/haridwar-to-dehradun', img: `${IMG}/Dehradun/Robbers_Cave.jpg` },
    { label: 'Rishikesh to Auli, 2 days', sub: 'Badrinath road', href: '/sightseeing/rishikesh-to-auli-2-days', img: `${IMG}/Valley_of_Flowers/Valley_of_Flowers.jpg` },
    { label: 'Outstation cabs from Haridwar', sub: 'All corridors', href: '/outstation-cabs/haridwar', img: '/images/car/innova_crysta.jpg' },
    { label: 'Places to visit near Haridwar', sub: 'The full list', href: '/places-to-visit-near-haridwar', img: `${IMG}/Haridwar/Har_Ki_Pauri.jpg` },
    { label: 'Places to visit near Rishikesh', sub: 'The full list', href: '/places-to-visit-near-rishikesh', img: `${IMG}/Rishikesh/Triveni_Ghat.jpg` },
    { label: 'Rishikesh taxi service', sub: 'City hub', href: '/rishikesh', img: `${IMG}/Rishikesh/River_Rafting.jpg` },
  ],
  guides: ['tourist-places-within-50-km-of-amritsar-and-haridwar', 'hill-stations-near-gurgaon-noida', 'delhi-to-rishikesh-shortest-route', 'weekend-getaways-near-me'],

  schema: {
    places: ['haridwar', 'rishikesh', 'mussoorie', 'dehradun', 'nainital'],
  },
};
