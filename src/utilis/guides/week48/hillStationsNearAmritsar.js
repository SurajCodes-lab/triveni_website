// Week 48 guide 5 — "hill station near amritsar" (1,126 impressions a
// quarter, position 8.9, two clicks). Answered today by the Amritsar city
// pages, which are about the Golden Temple, not the hills behind it.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'hill-stations-near-amritsar',
  path: '/hill-stations-near-amritsar',
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'hill station near amritsar', impressions: 1126, position: 8.9 },

  eyebrow: 'Hill guide · Amritsar',
  crumbs: [{ name: 'Amritsar', url: '/amritsar' }],
  crumbName: 'Hill stations near Amritsar',
  titleLead: 'Hill stations near Amritsar',
  titleAccent: 'by road, in order of distance',
  title: 'Hill Stations Near Amritsar by Road, in Order of Distance',
  metaTitle: 'Hill Stations Near Amritsar by Road: Nearest First',
  metaDescription: 'The hill stations near Amritsar by road: Dalhousie and Khajjiar in 4.5 hours, Dharamshala in 4.5, Palampur and Bir in 5, Kasauli in 6, Shimla in 7.5. Via Pathankot, sedan fares from ₹3,300.',
  keywords: ['hill station near amritsar', 'hill stations near amritsar', 'nearest hill station to amritsar', 'amritsar to dalhousie', 'amritsar to dharamshala by road', 'amritsar to shimla distance'],
  heroImage: `${IMG}/Dalhousie/Khajjiar_Meadow.jpg`,
  heroAlt: 'Khajjiar meadow near Dalhousie, the closest hill country to Amritsar',

  lead: 'The nearest hill station to Amritsar is Dalhousie, about 200 km and four and a half hours away through Pathankot, with Khajjiar’s meadow twenty kilometres beyond it. Dharamshala and McLeodganj are the same distance on the Kangra road. Palampur and Bir Billing add half an hour, Kasauli is six hours via Chandigarh, and Shimla seven and a half. A sedan from Amritsar bills ₹11/km on a 300 km minimum, so Dalhousie or Dharamshala is ₹3,300 one-way and ₹6,600 for a two-day round trip.',
  keyFacts: [
    { label: 'Nearest', value: 'Dalhousie · 200 km' },
    { label: 'Also 4.5 hrs', value: 'Dharamshala · 200 km' },
    { label: 'Furthest classic', value: 'Shimla · 340 km' },
    { label: 'Sedan, 2 days', value: 'from ₹6,600' },
  ],
  stickyLabel: 'Amritsar hill cab',
  waText: 'Hi, I need a cab from Amritsar to the hills. Destination and dates to follow.',

  intro: [
    'Amritsar sits on the plain, but the Himalayan foothills begin barely a hundred kilometres east at Pathankot, and that town is the hinge for every hill trip from the city. The road to Pathankot is the four-lane Amritsar–Jalandhar–Pathankot highway; from there one road climbs north-east to Dalhousie and Chamba, and another runs east through Kangra to Dharamshala, Palampur and Bir.',
    'Every distance below is from the Golden Temple, and every fare comes from the published rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km, on a 300 km per day minimum with tolls and Himachal entry tax extra at actual.',
  ],

  bands: [
    {
      eyebrow: 'Band one',
      heading: 'Four to five hours: the Dalhousie and Kangra hills',
      note: 'Both roads leave the plain at Pathankot, 110 km from Amritsar. After that it is hill road, and the drive times assume daylight.',
      places: [
        { name: 'Dalhousie', image: `${IMG}/Dalhousie/dalhousie_hero_section.jpg`, distance: '200 km', time: '4.5 hrs', km: 200, bestFor: 'Colonial quiet, pine forest', highlights: ['Dainkund Peak', 'St John’s Church', 'Panchpula'], blurb: 'The closest hill station to Amritsar and the least commercial of the Himachal classics. Colonial churches, pine slopes and a Mall that empties by nine. The Pathankot–Banikhet road is the only climb.', href: '/amritsar-to-dalhousie', cta: 'Cab to Dalhousie' },
        { name: 'Khajjiar', image: `${IMG}/Khajjiar/Mini_Switzerland_View.jpg`, distance: '220 km', time: '5 hrs', km: 220, bestFor: 'Meadow, lake, zorbing', highlights: ['Khajjiar meadow', 'Kalatop sanctuary', 'Chamba beyond'], blurb: 'Twenty kilometres past Dalhousie through the Kalatop forest: a saucer of green meadow with a lake in the middle. A day trip from Dalhousie, or the reason to stay a second night.', href: '/sightseeing/dalhousie-khajjiar-tour', cta: 'Dalhousie–Khajjiar tour' },
        { name: 'Dharamshala & McLeodganj', image: `${IMG}/Dharamshala/McLeod_Ganj.jpg`, distance: '200 km', time: '4.5 hrs', km: 200, bestFor: 'Tibetan town, Triund trek', highlights: ['Dalai Lama Temple', 'Bhagsu waterfall', 'Triund'], blurb: 'The Kangra road from Pathankot. Lower Dharamshala is the town; McLeodganj, nine kilometres above it, is where you stay. The Triund trek starts from Dharamkot and is a day.', href: '/amritsar-to-dharamshala', cta: 'Cab to Dharamshala' },
        { name: 'Palampur', image: `${IMG}/Dharamshala/Dharamshala_hero_section.jpg`, alt: 'The Dhauladhar range above the Kangra valley', distance: '235 km', time: '5 hrs', km: 235, bestFor: 'Tea gardens, Dhauladhar views', highlights: ['Tea estates', 'Baijnath temple', 'Andretta'], blurb: 'Forty kilometres past Dharamshala along the valley: tea gardens under the Dhauladhar wall, the ninth-century Baijnath temple and the artists’ village at Andretta. Quieter than McLeodganj by a distance.', href: '/amritsar-to-dharamshala', cta: 'Cab via Dharamshala' },
        { name: 'Bir Billing', image: `${IMG}/Dharamshala/Namgyal_Monastery.webp`, alt: 'Tibetan monastery in the Kangra hills', distance: '250 km', time: '5.5 hrs', km: 250, bestFor: 'Paragliding, monasteries', highlights: ['Paragliding from Billing', 'Tibetan colony', 'Bir cafés'], blurb: 'The paragliding capital of India, an hour beyond Palampur. Flights run from October to June; the Tibetan monasteries and the café lanes fill the rest of a two-night stay.', href: '/amritsar-to-dharamshala', cta: 'Cab via Dharamshala' },
      ],
    },
    {
      eyebrow: 'Band two',
      heading: 'Six to eight hours: Kasauli, Shimla and Manali',
      note: 'These go the other way, via Jalandhar and Chandigarh on NH-44 and then up NH-5 or NH-3. Long-weekend trips.',
      places: [
        { name: 'Kasauli', image: `${IMG}/Kasauli/Kasauli_Monkey_Point.jpg`, distance: '290 km', time: '6 hrs', km: 290, bestFor: 'Walks, colonial church', highlights: ['Monkey Point', 'Christ Church', 'Gilbert Trail'], blurb: 'Amritsar to Chandigarh is four hours on NH-44; Kasauli is an hour and a half up from there. A small walking town an hour short of Shimla, with a fraction of its traffic.', href: '/amritsar-to-chandigarh', cta: 'Cab via Chandigarh' },
        { name: 'Shimla', image: `${IMG}/Shimla/shimla_hero_section.jpg`, distance: '340 km', time: '7.5 hrs', km: 340, bestFor: 'Ridge, Kufri, snow', highlights: ['The Ridge', 'Jakhoo', 'Kufri'], blurb: 'The full hill station, seven and a half hours from the Golden Temple. December to February for snow at Kufri; March to June for the escape from the Punjab heat.', href: '/amritsar-to-shimla', cta: 'Cab to Shimla' },
        { name: 'Manali', image: `${IMG}/Manali/Solang%20Valley.jpg`, distance: '400 km', time: '9 hrs', km: 400, bestFor: 'Snow, Solang, Atal Tunnel', highlights: ['Solang Valley', 'Atal Tunnel', 'Old Manali'], blurb: 'Via Chandigarh, Bilaspur and Mandi. Leave at five, reach for dinner. Three nights is the honest minimum; the Atal Tunnel puts Sissu and Lahaul within a day.', href: '/amritsar-to-manali', cta: 'Cab to Manali' },
      ],
    },
  ],

  table: {
    title: 'Hill stations near Amritsar: distance, time and fare',
    caption: 'Distance from the Golden Temple, drive time, road and sedan fare for hill stations near Amritsar',
    intro: 'Distances from the Golden Temple. The sedan one-way fare is ₹11/km on a 300 km minimum; the two-day figure is what a weekend round trip bills.',
    columns: [
      { key: 'place', label: 'Hill station' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'one', label: 'Sedan, one-way', align: 'right' },
      { key: 'two', label: 'Sedan, 2 days', align: 'right', strong: true },
    ],
    rows: [
      { place: 'Dalhousie', distance: '200 km', time: '4.5 hrs', road: 'via Pathankot, Banikhet', one: '₹3,300', two: '₹6,600' },
      { place: 'Dharamshala / McLeodganj', distance: '200 km', time: '4.5 hrs', road: 'via Pathankot, Kangra', one: '₹3,300', two: '₹6,600' },
      { place: 'Khajjiar', distance: '220 km', time: '5 hrs', road: 'via Dalhousie', one: '₹3,300', two: '₹6,600' },
      { place: 'Palampur', distance: '235 km', time: '5 hrs', road: 'via Dharamshala', one: '₹3,300', two: '₹6,600' },
      { place: 'Bir Billing', distance: '250 km', time: '5.5 hrs', road: 'via Palampur', one: '₹3,300', two: '₹6,600' },
      { place: 'Chamba', distance: '250 km', time: '6 hrs', road: 'via Dalhousie', one: '₹3,300', two: '₹6,600' },
      { place: 'Kasauli', distance: '290 km', time: '6 hrs', road: 'NH-44 to Chandigarh, NH-5', one: '₹3,300', two: '₹6,600' },
      { place: 'Shimla', distance: '340 km', time: '7.5 hrs', road: 'NH-44, NH-5 via Kalka', one: '₹3,740', two: '₹7,480' },
      { place: 'Manali', distance: '400 km', time: '9 hrs', road: 'NH-44, NH-3 via Mandi', one: '₹4,400', two: '₹8,800' },
    ],
    footnote: 'Two-day fare = the greater of twice the one-way fare or 2 × 300 km × ₹11. Himachal entry tax, tolls and parking at actual. Ertiga ₹15/km, Innova Crysta ₹18/km, Tempo Traveller ₹23/km on the same rules.',
  },

  sections: [
    {
      eyebrow: 'Nearest',
      heading: 'Which is the nearest hill station to Amritsar?',
      paras: [
        'Dalhousie, at about 200 km and four and a half hours. The first 110 km to Pathankot are on the four-lane highway and take under two hours; the climb from Pathankot through Dunera and Banikhet is 90 km of hill road and takes the rest. Dharamshala is the same distance on paper, and because the Kangra road climbs more gently most drivers reach McLeodganj in about the same time.',
        'If “nearest hills” rather than “nearest hill station” is the question, the answer is Pathankot itself: the Ranjit Sagar dam and the Shahpurkandi foothills are two hours from the city and make a day out, though there is nothing to stay for.',
      ],
      image: { src: `${IMG}/Dalhousie/Dainkund_Peak.jpg`, alt: 'Dainkund Peak above Dalhousie', tag: 'Dalhousie · 200 km', caption: 'Dainkund, the highest point around Dalhousie, is an hour’s walk from the road.' },
    },
    {
      eyebrow: 'Dalhousie or Dharamshala',
      heading: 'Dalhousie or Dharamshala from Amritsar: which one for a weekend?',
      paras: [
        'They are the same distance and the same drive time, so the choice is about the kind of hill town you want. Dalhousie is colonial and quiet: pine forest, churches, the Khajjiar meadow, and an evening that ends early. Dharamshala’s upper town, McLeodganj, is Tibetan and busy: the Dalai Lama’s temple, cafés, the Bhagsu waterfall walk and the Triund trek. Families and older travellers usually choose Dalhousie; younger groups and trekkers choose McLeodganj.',
        'If you have three nights, do both. The Dharamshala–Dalhousie road via Chamba and Khajjiar is 120 km of the best hill scenery in the state, and the circuit guide for the two towns sets out the day-by-day.',
      ],
      link: { label: 'Dalhousie and Dharamshala together: the circuit by car', href: '/dalhousie-dharamshala-circuit-by-car' },
    },
    {
      eyebrow: 'The road',
      heading: 'What is the road from Amritsar to the hills like?',
      paras: [
        'Flat and fast to Pathankot: four lanes, a few toll plazas, dhabas at Jalandhar and Mukerian. The Dalhousie climb begins at Dunera and is a two-lane hill road with long hairpin sections and army traffic; it is well surfaced but slow, and in January and February there can be snow on the last stretch above Banikhet. The Kangra road to Dharamshala is broader and gentler, with the Dhauladhar wall in view for the last hour.',
        'For Shimla and Manali the route is the opposite direction, down NH-44 to Chandigarh and then up. Leave Amritsar at five for either; the Chandigarh bypass and the climb from Kalka or the Mandi gorge both reward an early start.',
      ],
      link: { label: 'Amritsar to Dharamshala by car: the road in segments', href: '/travel-by-car/amritsar-to-dharamshala' },
      image: { src: `${IMG}/Dharamshala/Bhagsunag_Waterfall.jpg`, alt: 'Bhagsunag waterfall above McLeodganj', tag: 'McLeodganj · 200 km', side: 'left', caption: 'Bhagsu waterfall, the walk everyone does on their first morning in McLeodganj.' },
    },
    {
      eyebrow: 'Season',
      heading: 'When is the best time to go to the hills from Amritsar?',
      paras: [
        'March to June is the classic season, when the Punjab plain is at forty degrees and the hills are at twenty. September to November is the clearer season: the monsoon has washed the air and the Dhauladhar snow line is sharp above Dharamshala. December to February brings snow to Dalhousie, Khajjiar and Kufri, and a slower drive; carry warm clothes and expect the last stretch to be sluggish after a fall.',
        'The monsoon, July to mid-September, is when to avoid the Dalhousie road in particular; the Dunera–Banikhet section is landslide-prone in heavy rain. Dharamshala gets the heaviest rain of any hill station in the state in those months.',
      ],
    },
    {
      eyebrow: 'For visitors',
      heading: 'I am visiting Amritsar for the Golden Temple. Can I add a hill station?',
      paras: [
        'Yes, and it is the most common trip we run out of the city. Two nights in Amritsar for the Golden Temple, Jallianwala Bagh and the Wagah ceremony, then two nights in Dalhousie or McLeodganj, and back to Amritsar for the flight or train. A pickup straight from arrivals avoids the old-city traffic and can save half an hour or so over a Golden Temple start, so going from the airport directly to the hills is a real option.',
        'A four-day round trip for a sedan bills ₹13,200 on the 300 km per day minimum, with the driver staying with you throughout. For a group, the 12-seater Tempo Traveller at ₹23/km is ₹27,600 for the same four days.',
      ],
      link: { label: 'Amritsar sightseeing tours', href: '/sightseeing/amritsar' },
    },
  ],

  fare: {
    title: 'Amritsar to Dalhousie or Dharamshala',
    note: 'Both are 200 km, so both bill the 300 km minimum. One-way is a single drop; the two-day figure is a weekend with the driver staying on.',
    caption: 'Amritsar to Dalhousie or Dharamshala cab fare by vehicle',
    distanceKm: 200,
    roundTrip: true,
    days: 2,
    roundLabel: 'Two-day round trip',
    footnote: '300 km per day minimum. Himachal entry tax, tolls and parking at actual. A third day adds 300 km at the vehicle’s rate.',
    waText: 'Hi, I want a cab from Amritsar to Dalhousie or Dharamshala. Dates and headcount to follow.',
    bookHref: '/outstation-cabs/amritsar',
    bookLabel: 'Outstation cabs from Amritsar',
    cta: 'Get the hill fare',
  },

  galleryTitle: 'The hills behind Amritsar',
  gallery: [
    { image: `${IMG}/Dalhousie/St_Johns_Church.jpg`, title: 'St John’s, Dalhousie', text: 'The oldest church in town, on Gandhi Chowk.', tag: 'Dalhousie' },
    { image: `${IMG}/Khajjiar/Khajjiar_hero_section.jpg`, title: 'Khajjiar', text: 'The meadow and its lake, twenty kilometres on.', tag: 'Khajjiar' },
    { image: `${IMG}/Dharamshala/Dalai_Lama_Temple.jpg`, title: 'Tsuglagkhang, McLeodganj', text: 'The Dalai Lama’s temple complex.', tag: 'Dharamshala' },
    { image: `${IMG}/Dalhousie/Kalatop_Wildlife.jpg`, title: 'Kalatop forest', text: 'The deodar sanctuary between Dalhousie and Khajjiar.', tag: 'Kalatop' },
    { image: `${IMG}/Kufri/kufri_hero_section.jpg`, title: 'Kufri', text: 'Snow in winter, above Shimla.', tag: 'Shimla side' },
  ],

  tips: [
    { title: 'Pathankot is the halfway halt', text: 'Two hours out of Amritsar, with fuel, food and the last flat road. Everything past it is hill driving; do not plan to reach either hill station after dark in winter.' },
    { title: 'Airport pickups go straight to the hills', text: 'A pickup from arrivals to Dalhousie or McLeodganj avoids the old-city traffic and can save half an hour or so over a Golden Temple start.' },
    { title: 'Ask for an Innova for the Dalhousie climb', text: 'The Dunera–Banikhet hairpins are long. Families and anyone prone to motion sickness are more comfortable in an Innova Crysta than a sedan.' },
  ],

  faqs: [
    { question: 'Which is the nearest hill station to Amritsar?', answer: 'Dalhousie, about 200 km and four and a half hours by road via Pathankot and Banikhet. Dharamshala and McLeodganj are the same distance on the Kangra road. Khajjiar is twenty kilometres beyond Dalhousie.' },
    { question: 'How far is Dalhousie from Amritsar?', answer: 'About 200 km from the Golden Temple: 110 km of four-lane highway to Pathankot and 90 km of hill road through Dunera and Banikhet. Allow four and a half hours in daylight, more in winter after snowfall.' },
    { question: 'How far is Dharamshala from Amritsar by road?', answer: 'About 200 km via Pathankot and Kangra, four and a half hours. McLeodganj, where most visitors stay, is nine kilometres above Dharamshala town.' },
    { question: 'What is the cab fare from Amritsar to Dalhousie or Dharamshala?', answer: 'A sedan is ₹3,300 one-way and ₹6,600 for a two-day round trip on the 300 km per day minimum at ₹11/km. An Ertiga is ₹4,500 and ₹9,000, an Innova Crysta ₹5,400 and ₹10,800, and a 12-seater Tempo Traveller ₹6,900 and ₹13,800. Himachal entry tax and tolls are extra.' },
    { question: 'Is Shimla near Amritsar?', answer: 'Shimla is about 340 km and seven and a half hours from Amritsar via Chandigarh and Kalka, so it is a long-weekend trip rather than a weekend one. Kasauli, at 290 km, is an hour closer on the same road.' },
    { question: 'Which hill station near Amritsar is best for snow?', answer: 'Dalhousie and Khajjiar usually have snow from late December to February and are the closest at 200–220 km. Kufri above Shimla is the surest bet for snow play but is about 355 km away, sixteen kilometres beyond Shimla. Manali at 400 km has snow at Solang and beyond the Atal Tunnel through the winter.' },
    { question: 'Can I go from Amritsar airport directly to Dalhousie or Dharamshala?', answer: 'Yes. A pickup straight from arrivals avoids the old-city traffic and can save half an hour or so over a Golden Temple start. Share the flight number and the driver tracks the arrival.' },
    { question: 'Which hill station near Amritsar is best for families?', answer: 'Dalhousie for a quiet, walkable town with Khajjiar’s meadow a day trip away; Dharamshala if the family wants cafés, the Tibetan temple and a short trek. Both are four and a half hours and the same fare.' },
  ],

  related: [
    { label: 'Outstation cabs from Amritsar', sub: 'All corridors', href: '/outstation-cabs/amritsar', img: '/images/car/innova_crysta.jpg' },
    { label: 'Amritsar to Dalhousie cab', sub: '200 km · 4.5 hrs', href: '/amritsar-to-dalhousie', img: `${IMG}/Dalhousie/dalhousie_hero_section.jpg` },
    { label: 'Amritsar to Dharamshala cab', sub: '200 km · 4.5 hrs', href: '/amritsar-to-dharamshala', img: `${IMG}/Dharamshala/McLeod_Ganj.jpg` },
    { label: 'Amritsar to Shimla cab', sub: '340 km · 7.5 hrs', href: '/amritsar-to-shimla', img: `${IMG}/Shimla/Mall_Road.jpg` },
    { label: 'Amritsar to Manali cab', sub: '400 km · 9 hrs', href: '/amritsar-to-manali', img: `${IMG}/Manali/Manali_hero_section.jpg` },
    { label: 'Amritsar airport taxi', sub: 'Pickups straight to the hills', href: '/airport-service/amritsar', img: '/images/airport_section.jpg' },
    { label: 'Places to visit near Amritsar', sub: 'The full place list', href: '/places-to-visit-near-amritsar', img: `${IMG}/Amritsar/Golden_Temple.jpg` },
    { label: 'Amritsar taxi service', sub: 'City hub', href: '/amritsar', img: `${IMG}/Amritsar/Wagah_Border.jpg` },
  ],
  guides: ['dalhousie-dharamshala-circuit-by-car', 'tourist-places-within-50-km-of-amritsar-and-haridwar', 'best-time-to-visit-amritsar', 'hill-stations-near-haridwar-rishikesh'],

  schema: {
    places: ['amritsar', 'dalhousie', 'dharamshala', 'shimla', 'manali'],
  },
};
