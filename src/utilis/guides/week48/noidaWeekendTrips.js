// Week 48 guide 4 — "places to visit near noida for weekend" (1,247
// impressions a quarter, position 7.6). /places-to-visit-near-noida already
// carries the place list and is the site's biggest page; this guide is the
// planning page beside it, shaped as one-day and two-day drives rather than a
// list, so the two answer different questions.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'noida-weekend-trips',
  path: '/noida-weekend-trips',
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'places to visit near noida for weekend', impressions: 1247, position: 7.6 },

  eyebrow: 'Weekend guide · Noida',
  crumbs: [{ name: 'Noida', url: '/noida' }],
  crumbName: 'Noida weekend trips',
  titleLead: 'Noida weekend trips:',
  titleAccent: 'one-day and two-day drives',
  title: 'Noida Weekend Trips: One-Day and Two-Day Drives',
  metaTitle: 'Noida Weekend Trips: One-Day & Two-Day Drives by Car 2026',
  metaDescription: 'Weekend trips from Noida as one-day drives (Mathura, Agra, Garhmukteshwar, Neemrana) and two-day drives (Haridwar–Rishikesh, Corbett, Nainital, Mussoorie, Jaipur). Distances, times, fares from ₹11/km.',
  keywords: ['places to visit near noida for weekend', 'weekend trips from noida', 'noida weekend getaway by car', 'one day trip from noida', 'two day trip from noida', 'places near noida within 200 km'],
  heroImage: `${IMG}/Agra/Taj_mahal.jpg`,
  heroAlt: 'The Taj Mahal, two and a half hours from Noida on the Yamuna Expressway',

  lead: 'Noida has the best exit in the National Capital Region: the Yamuna Expressway starts at its doorstep, so Mathura is two hours and Agra two and a half, and both are honest one-day drives. Add Garhmukteshwar on the Ganga and Neemrana on the Jaipur road for the other one-day options. The two-day list runs north-east: Haridwar and Rishikesh at four hours, Jim Corbett at five, Mussoorie at five and a half, Nainital at six, and Jaipur at five in the other direction. A sedan is ₹11/km on a 300 km per day minimum, ₹3,300 for a day and ₹6,600 for a weekend.',
  keyFacts: [
    { label: 'One-day drives', value: '5 destinations' },
    { label: 'Two-day drives', value: '8 destinations' },
    { label: 'Agra from Sector 18', value: '200 km · 2.5 hrs' },
    { label: 'Sedan, weekend', value: 'from ₹6,600' },
  ],
  stickyLabel: 'Noida weekend cab',
  waText: 'Hi, I need a weekend cab from Noida. Sector, destination and dates to follow.',

  intro: [
    'Distances below are from Sector 18, and they assume you join the Noida Expressway before eight. The guide is split the way people actually plan: places that give a full day and get you home for dinner, and places that need a night. There is a separate place-by-place list for Noida; this page is about how to spend the weekend.',
    'Fares come from the published rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km and a 12-seater Tempo Traveller ₹23/km, on a 300 km per day minimum. Tolls, including the Yamuna Expressway plazas, are paid at actual by the driver on FASTag.',
  ],

  bands: [
    {
      eyebrow: 'One-day drives',
      heading: 'One-day trips from Noida: out after breakfast, home for dinner',
      note: 'Everything here is within 200 km. Leave by seven and you have five or six hours at the destination.',
      places: [
        { name: 'Mathura & Vrindavan', image: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg`, distance: '140 km', time: '2 hrs', km: 140, bestFor: 'Temples, Prem Mandir at dusk', highlights: ['Krishna Janmabhoomi', 'Banke Bihari', 'Prem Mandir'], blurb: 'The Yamuna Expressway from Pari Chowk to the Mathura exit takes ninety minutes. Krishna Janmabhoomi and Dwarkadhish in the morning, Banke Bihari before it closes at noon, Prem Mandir lit up at dusk, then home.', href: '/noida-to-mathura', cta: 'Cab to Mathura' },
        { name: 'Agra', image: `${IMG}/Agra/agra_fort.jpg`, distance: '200 km', time: '2.5 hrs', km: 200, bestFor: 'Taj, Agra Fort', highlights: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh'], blurb: 'Two and a half hours door to gate. The Taj by ten, the fort after lunch, Mehtab Bagh across the river for the sunset view, and back on the expressway by seven. Closed on Fridays.', href: '/noida-to-agra', cta: 'Cab to Agra' },
        { name: 'Garhmukteshwar', image: `${IMG}/Haridwar/Ganga_Aarti.jpg`, alt: 'Evening lamps on the Ganga', distance: '90 km', time: '2 hrs', note: 'Local package ₹2,200 + km', bestFor: 'Ganga ghats, quiet', highlights: ['Brijghat', 'Ganga aarti', 'Kartik Purnima fair'], blurb: 'The nearest Ganga ghat to Noida, via the Meerut expressway and NH-9. Quiet outside the Kartik Purnima fair in November, when it is anything but. A morning at the ghats, lunch, and home.', href: '/local-taxi/noida', cta: 'Noida local cab' },
        { name: 'Neemrana', image: `${IMG}/Neemrana/Neemrana_Fort_Palace.jpg`, distance: '150 km', time: '2.5 hrs', km: 150, bestFor: 'Fort lunch, zip line', highlights: ['Fort Palace', 'Zip line', 'Baori'], blurb: 'Across the city on the outer ring and down NH-48. A fort lunch and the Flying Fox zip line; longer than the Agra run, but a different kind of day.', href: '/same-day-neemrana-from-delhi', cta: 'Neemrana day tour' },
        { name: 'Bharatpur', image: `${IMG}/Bharatpur/Migratory_Birds.jpg`, distance: '190 km', time: '3 hrs', km: 190, bestFor: 'Winter birds', highlights: ['Keoladeo', 'Lohagarh Fort'], blurb: 'Via the Yamuna Expressway to Mathura and across. Keoladeo is a dawn park, so this is either a four o’clock start or the first night of a two-day Agra–Bharatpur loop.', href: '/one-way-cab/delhi-to-bharatpur', cta: 'Cab to Bharatpur' },
      ],
    },
    {
      eyebrow: 'Two-day drives',
      heading: 'Two-day trips from Noida: one night away',
      note: 'North-east via the Meerut and Dehradun expressways, or south-west to Jaipur. Book the driver for two days; the car stays with you.',
      places: [
        { name: 'Haridwar & Rishikesh', image: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, distance: '220–245 km', time: '4–4.5 hrs', km: 245, fare: '₹6,600', bestFor: 'Ganga aarti, rafting', highlights: ['Har Ki Pauri', 'Laxman Jhula', 'Rafting'], blurb: 'The Meerut expressway is twenty minutes from Sector 18 and Haridwar is four hours from there. Aarti at Har Ki Pauri on Saturday evening, Rishikesh for rafting and the cafés on Sunday.', href: '/noida-to-rishikesh', cta: 'Cab to Rishikesh' },
        { name: 'Jim Corbett', image: `${IMG}/Jim_Corbett/Tiger_Safari_Corbett.jpg`, distance: '240 km', time: '5 hrs', km: 240, fare: '₹6,600', bestFor: 'Safari', highlights: ['Dhikala', 'Jeep safari', 'Corbett Falls'], blurb: 'NH-9 through Moradabad and Kashipur. Book the Sunday-morning safari before the cab; weekend slots go early. Riverside resorts along the Kosi for the night.', href: '/noida-to-jim-corbett', cta: 'Cab to Corbett' },
        { name: 'Mussoorie', image: `${IMG}/Mussoorie/Kempty_Falls.jpg`, distance: '270 km', time: '5.5 hrs', km: 270, fare: '₹6,600', bestFor: 'Hill station', highlights: ['Mall Road', 'Kempty Falls', 'Landour'], blurb: 'The Delhi–Dehradun expressway has made Mussoorie a five-and-a-half-hour drive from Noida. Mall Road on Saturday evening, Landour and Kempty on Sunday.', href: '/noida-to-mussoorie', cta: 'Cab to Mussoorie' },
        { name: 'Nainital', image: `${IMG}/Nainital/Naini_Lake.jpg`, distance: '280 km', time: '6 hrs', km: 280, fare: '₹6,600', bestFor: 'Lake, ropeway', highlights: ['Naini Lake', 'Snow View', 'Bhimtal'], blurb: 'Via Moradabad and Haldwani. Boating and the ropeway on day one, the quieter lakes of Bhimtal and Sattal on the way home.', href: '/noida-to-nainital', cta: 'Cab to Nainital' },
        { name: 'Jaipur', image: `${IMG}/Jaipur/amber_fort.jpg`, distance: '300 km', time: '5 hrs', km: 300, fare: '₹6,600', bestFor: 'Forts, bazaars', highlights: ['Amber Fort', 'Hawa Mahal', 'Nahargarh'], blurb: 'The one two-day trip that goes south-west: outer ring to NH-48. Amber and the old city on Saturday, Nahargarh at sunset, City Palace on Sunday morning.', href: '/noida-to-jaipur', cta: 'Cab to Jaipur' },
        { name: 'Dehradun', image: `${IMG}/Dehradun/Robbers_Cave.jpg`, distance: '240 km', time: '5 hrs', km: 240, fare: '₹6,600', bestFor: 'Caves, springs, FRI', highlights: ['Robber’s Cave', 'Sahastradhara', 'FRI'], blurb: 'The gentle option: a valley town with a river cave, sulphur springs and the Forest Research Institute, with Mussoorie an hour above it if you want a taste of the hills on day two.', href: '/noida-to-dehradun', cta: 'Cab to Dehradun' },
        { name: 'Lansdowne', image: `${IMG}/Lansdowne/Tip_n_Top_Viewpoint.jpg`, distance: '250 km', time: '5.5 hrs', km: 250, fare: '₹6,600', bestFor: 'Quiet pine hills', highlights: ['Bhulla Lake', 'Tip-n-Top', 'St Mary’s'], blurb: 'Via Meerut, Bijnor and Kotdwar. A cantonment town with no Mall Road; the point is the silence and the forest.', href: '/one-way-cab/delhi-to-lansdowne', cta: 'Cab to Lansdowne' },
        { name: 'Chandigarh', image: `${IMG}/Chandigarh/sukhana_lake.jpg`, distance: '270 km', time: '5 hrs', km: 270, fare: '₹6,600', bestFor: 'Planned city', highlights: ['Rock Garden', 'Sukhna Lake', 'Kasauli beyond'], blurb: 'Outer ring to NH-44. The calmest city weekend in the north, and Kasauli is an hour further for the second night.', href: '/noida-to-chandigarh', cta: 'Cab to Chandigarh' },
      ],
    },
  ],

  table: {
    title: 'Weekend trips from Noida: one-day and two-day',
    caption: 'Distance from Sector 18, drive time, trip length and sedan fare for weekend trips from Noida',
    intro: 'Distances from Sector 18. One-day trips bill ₹3,300 for a sedan (the 300 km minimum); two-day trips bill ₹6,600 unless the round trip exceeds 600 km.',
    columns: [
      { key: 'place', label: 'Destination' },
      { key: 'type', label: 'Trip' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'sedan', label: 'Sedan fare', align: 'right', strong: true },
    ],
    rows: [
      { place: 'Garhmukteshwar', type: 'One day', distance: '90 km', time: '2 hrs', road: 'Meerut expressway, NH-9', sedan: '₹2,750 (local + km)' },
      { place: 'Mathura–Vrindavan', type: 'One day', distance: '140 km', time: '2 hrs', road: 'Yamuna Expressway', sedan: '₹3,300' },
      { place: 'Neemrana', type: 'One day', distance: '150 km', time: '2.5 hrs', road: 'Outer ring, NH-48', sedan: '₹3,300' },
      { place: 'Bharatpur', type: 'One day or two', distance: '190 km', time: '3 hrs', road: 'Yamuna Expressway, Mathura', sedan: '₹3,300' },
      { place: 'Agra', type: 'One day or two', distance: '200 km', time: '2.5 hrs', road: 'Yamuna Expressway', sedan: '₹3,300' },
      { place: 'Haridwar', type: 'Two days', distance: '220 km', time: '4 hrs', road: 'Meerut expressway, NH-334', sedan: '₹6,600' },
      { place: 'Jim Corbett', type: 'Two days', distance: '240 km', time: '5 hrs', road: 'NH-9 via Moradabad', sedan: '₹6,600' },
      { place: 'Dehradun', type: 'Two days', distance: '240 km', time: '5 hrs', road: 'Delhi–Dehradun expressway', sedan: '₹6,600' },
      { place: 'Rishikesh', type: 'Two days', distance: '245 km', time: '4.5 hrs', road: 'Meerut expressway, NH-334', sedan: '₹6,600' },
      { place: 'Lansdowne', type: 'Two days', distance: '250 km', time: '5.5 hrs', road: 'Meerut, Bijnor, Kotdwar', sedan: '₹6,600' },
      { place: 'Mussoorie', type: 'Two days', distance: '270 km', time: '5.5 hrs', road: 'Delhi–Dehradun expressway', sedan: '₹6,600' },
      { place: 'Chandigarh', type: 'Two days', distance: '270 km', time: '5 hrs', road: 'Outer ring, NH-44', sedan: '₹6,600' },
      { place: 'Nainital', type: 'Two days', distance: '280 km', time: '6 hrs', road: 'NH-9 via Moradabad', sedan: '₹6,600' },
      { place: 'Jaipur', type: 'Two days', distance: '300 km', time: '5 hrs', road: 'Outer ring, NH-48', sedan: '₹6,600' },
    ],
    footnote: 'Sedan ₹11/km on a 300 km per day minimum. Garhmukteshwar bills on the local package: ₹2,200 for 4 hr / 40 km plus ₹11 for each extra kilometre. Tolls at actual.',
  },

  sections: [
    {
      eyebrow: 'Why Noida is different',
      heading: 'Why are Mathura and Agra one-day trips from Noida but not from the rest of the NCR?',
      paras: [
        'Because the Yamuna Expressway begins at Pari Chowk. From Sector 18 you are on the Noida Expressway in ten minutes and on the Yamuna Expressway in twenty-five, and from there Mathura is ninety minutes and Agra two hours at expressway speed. Gurgaon needs the KMP loop to reach the same road and Ghaziabad has to cross the city; Noida just drives.',
        'That single fact shapes the guide. The Braj towns and Agra are day trips from Noida in a way they are not from anywhere else in the region, and the trip that suffers by comparison is Jaipur, which sits on the far side of the city and needs the outer ring road.',
      ],
      image: { src: `${IMG}/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg`, alt: 'Krishna Janmabhoomi temple complex at Mathura', tag: 'Mathura · 140 km', caption: 'Mathura is ninety minutes down the Yamuna Expressway from Pari Chowk.' },
    },
    {
      eyebrow: 'A one-day plan',
      heading: 'How do I do Agra from Noida in one day without rushing?',
      paras: [
        'Leave Sector 18 at six. You are at the Taj east gate by half past eight, before the tour buses, and out by eleven. Lunch near the fort, the fort itself from one to three, then Mehtab Bagh across the river for the late-afternoon view of the Taj with nobody behind you. Back on the expressway by five, home by eight. The Taj is closed on Fridays and the moonlight viewing nights around the full moon need separate tickets.',
        'If you want Fatehpur Sikri as well, that is the version that needs a night; the same-day tour page lists what fits in a day and what does not.',
      ],
      link: { label: 'Same-day Agra tour from Noida', href: '/same-day-agra-tour-from-noida' },
    },
    {
      eyebrow: 'A two-day plan',
      heading: 'What is the best two-day trip from Noida for a first weekend away?',
      paras: [
        'Haridwar and Rishikesh, and it is not close. Four hours up the Meerut expressway puts you at Har Ki Pauri for the Saturday evening aarti; Sunday is Rishikesh, twenty-five kilometres on, for rafting from Shivpuri, which in a normal year runs from September to June, the Laxman Jhula strip and the quieter aarti at Triveni Ghat, with the drive home after it. The two towns are different enough that the weekend never repeats itself.',
        'Corbett is the alternative for families with children, provided the safari is booked before the cab. Nainital and Mussoorie are the choices for a long weekend, when six hours each way stops mattering.',
      ],
      link: { label: 'Same-day Haridwar–Rishikesh from Delhi NCR', href: '/same-day-haridwar-rishikesh-from-delhi' },
      image: { src: `${IMG}/Haridwar/Har_Ki_Pauri.jpg`, alt: 'Har Ki Pauri ghat at Haridwar', tag: 'Haridwar · 220 km', side: 'left', caption: 'Har Ki Pauri at aarti time: the Saturday evening of Noida’s best two-day trip.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'What does a weekend cab from Noida cost?',
      paras: [
        'A one-day trip to Mathura, Agra, Neemrana or Bharatpur bills ₹3,300 for a sedan: the 300 km per day minimum at ₹11/km. A two-day trip to anything within 300 km bills ₹6,600. An Ertiga is ₹4,500 and ₹9,000 for the same, an Innova Crysta ₹5,400 and ₹10,800, and a 12-seater Tempo Traveller ₹6,900 and ₹13,800. Fuel and the driver are inside those numbers; tolls are extra, and on the Yamuna Expressway they are the largest single item, so budget for them.',
        'For Garhmukteshwar, or anything else within about a hundred kilometres, the 4 hour / 40 km local package at ₹2,200 with extra kilometres at ₹11 is the better product.',
      ],
      link: { label: 'Outstation cabs from Noida', href: '/outstation-cabs/noida' },
    },
    {
      eyebrow: 'Season',
      heading: 'Which Noida weekend trip is right for this time of year?',
      paras: [
        'October to March is the season for the one-day list: Mathura, Agra, Neemrana and the winter birds at Bharatpur, plus Garhmukteshwar’s Kartik Purnima fair in November. From April the same list turns hot, and the two-day list takes over: Mussoorie, Nainital, Lansdowne and Dehradun through June, Rishikesh for rafting until the monsoon closes it, usually in early July.',
        'In the monsoon, Haridwar and Rishikesh are green and quiet, but rafting and the riverside camps stop. Corbett’s Dhikala zone usually opens from mid-November to mid-June; the buffer zones run through the rains.',
      ],
    },
  ],

  fare: {
    title: 'One day or two, from Noida',
    note: 'The one-day column is what Mathura, Agra or Neemrana bills; the two-day column covers a night in Haridwar, Rishikesh, Corbett, Mussoorie, Nainital, Chandigarh or Jaipur. Fuel and driver included, tolls at actual.',
    caption: 'One-day and two-day cab fare from Noida by vehicle',
    oneWayLabel: 'One-day trip',
    roundLabel: 'Two-day trip',
    rows: [
      { vehicle: 'Sedan (Swift Dzire, Etios)', seats: '4', rate: '₹11/km', fare: '₹3,300', roundTrip: '₹6,600' },
      { vehicle: 'Ertiga / SUV', seats: '6', rate: '₹15/km', fare: '₹4,500', roundTrip: '₹9,000' },
      { vehicle: 'Innova Crysta', seats: '6–7', rate: '₹18/km', fare: '₹5,400', roundTrip: '₹10,800' },
      { vehicle: 'Tempo Traveller (12-seater)', seats: '12', rate: '₹23/km', fare: '₹6,900', roundTrip: '₹13,800' },
    ],
    footnote: '300 km per day minimum. Trips whose round trip exceeds 600 km bill the actual distance.',
    waText: 'Hi, I want a weekend cab from Noida. Sector, destination, dates and headcount to follow.',
    bookHref: '/outstation-cabs/noida',
    bookLabel: 'Outstation cabs from Noida',
    cta: 'Get a Noida weekend quote',
  },

  galleryTitle: 'Down the expressway and up to the hills',
  gallery: [
    { image: `${IMG}/Agra/Mehtab_Bagh.jpg`, title: 'Mehtab Bagh, Agra', text: 'The late-afternoon Taj, from across the river.', tag: 'One day · 200 km' },
    { image: `${IMG}/Mathura_Vrindavan/Banke_Bihari_Temple.jpg`, title: 'Banke Bihari, Vrindavan', text: 'Darshan before noon, then Prem Mandir at dusk.', tag: 'One day · 140 km' },
    { image: `${IMG}/Rishikesh/Ram_Jhula.jpg`, title: 'Ram Jhula, Rishikesh', text: 'Day two of the Ganga weekend.', tag: 'Two days · 245 km' },
    { image: `${IMG}/Jim_Corbett/Corbett_Falls.jpg`, title: 'Corbett Falls', text: 'The stop between the two safaris.', tag: 'Two days · 240 km' },
    { image: `${IMG}/Mussoorie/Lal_tibba.jpg`, title: 'Lal Tibba, Landour', text: 'Above Mussoorie, above the crowds.', tag: 'Two days · 270 km' },
  ],

  tips: [
    { title: 'Be on the Yamuna Expressway by seven', text: 'The Noida Expressway is clear at six-thirty and crawling at nine. For the one-day list, the whole day depends on that half hour.' },
    { title: 'Fridays close the Taj', text: 'If the weekend starts on a Friday, make Friday the Mathura day and Saturday the Agra day, not the other way round.' },
    { title: 'Book the safari, then the cab', text: 'Corbett weekend safari slots go a week or more ahead. Fix the slot, tell us the time, and the driver plans the departure around it.' },
  ],

  faqs: [
    { question: 'What are the best places to visit near Noida for a weekend?', answer: 'For one day: Mathura–Vrindavan (140 km), Agra (200 km), Garhmukteshwar (90 km), Neemrana (150 km) and Bharatpur (190 km). For two days: Haridwar and Rishikesh (220–245 km), Jim Corbett (240 km), Dehradun (240 km), Lansdowne (250 km), Mussoorie (270 km), Chandigarh (270 km), Nainital (280 km) and Jaipur (300 km).' },
    { question: 'Which places near Noida can I visit in one day?', answer: 'Mathura and Vrindavan at two hours, Agra at two and a half, Garhmukteshwar at two, Neemrana at two and a half and Bharatpur at three. All are 200 km or less from Sector 18 and get you home for dinner if you leave by seven.' },
    { question: 'How far is Agra from Noida?', answer: 'About 200 km from Sector 18 via the Noida and Yamuna expressways, a two-and-a-half-hour drive. A sedan bills ₹3,300 for the day trip, plus Yamuna Expressway tolls at actual.' },
    { question: 'How much does a weekend cab from Noida cost?', answer: 'A one-day trip within 300 km is ₹3,300 for a sedan, ₹4,500 for an Ertiga, ₹5,400 for an Innova Crysta and ₹6,900 for a 12-seater Tempo Traveller. A two-day trip doubles those figures: ₹6,600, ₹9,000, ₹10,800 and ₹13,800. Fuel and driver are included; tolls and parking are extra.' },
    { question: 'Which hill station is nearest to Noida?', answer: 'By distance, Lansdowne at 250 km; by drive time, Mussoorie, the nearest full hill station, at about 270 km and five and a half hours via the Delhi–Dehradun expressway. Nainital is 280 km and six hours. See the dedicated guide to hill stations near Gurgaon and Noida for the full comparison.' },
    { question: 'Is Haridwar–Rishikesh a one-day or two-day trip from Noida?', answer: 'Two days. Haridwar is four hours away and the evening aarti at Har Ki Pauri is the reason to go, so stay the night and spend Sunday in Rishikesh. The same-day version exists but skips the aarti.' },
    { question: 'Do you pick up from Greater Noida and the Yamuna Expressway sectors?', answer: 'Yes. Noida, Greater Noida, Pari Chowk, Jewar and the expressway sectors are all in the Noida dispatch zone; Greater Noida pickups are closer to the Yamuna Expressway and save fifteen minutes on the Agra run.' },
    { question: 'Is there a weekend surcharge on cabs from Noida?', answer: 'No. The rate card is the same on every date: Sedan ₹11/km, SUV ₹15/km, Innova ₹18/km, Tempo Traveller ₹23/km, on a 300 km per day minimum.' },
  ],

  related: [
    { label: 'Outstation cabs from Noida', sub: 'All corridors', href: '/outstation-cabs/noida', img: '/images/car/ertiga.jpg' },
    { label: 'Noida to Agra cab', sub: '200 km · Yamuna Expressway', href: '/noida-to-agra', img: `${IMG}/Agra/Taj_mahal.jpg` },
    { label: 'Noida to Mathura cab', sub: '140 km', href: '/noida-to-mathura', img: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg` },
    { label: 'Noida to Haridwar cab', sub: '220 km', href: '/noida-to-haridwar', img: `${IMG}/Haridwar/Har_Ki_Pauri.jpg` },
    { label: 'Noida to Nainital cab', sub: '280 km', href: '/noida-to-nainital', img: `${IMG}/Nainital/Snow_View_Point.jpg` },
    { label: 'Places to visit near Noida', sub: 'The full place list', href: '/places-to-visit-near-noida', img: `${IMG}/Delhi/Akshardham_Temple.jpg` },
    { label: 'Noida local taxi', sub: '4 hr / 40 km from ₹2,200', href: '/local-taxi/noida', img: '/images/car/swift_dzire.jpg' },
    { label: 'Greater Noida cab service', sub: 'City hub', href: '/greater-noida', img: `${IMG}/Delhi/Delhi_hero_section.jpg` },
  ],
  guides: ['weekend-getaways-near-me', 'ghaziabad-greater-noida-weekend-drives', 'hill-stations-near-gurgaon-noida', 'places-to-visit-near-me', 'tourist-places-within-100-km-of-agra'],

  schema: {
    places: ['noida', 'agra', 'mathura', 'haridwar', 'rishikesh', 'jim-corbett', 'mussoorie', 'nainital'],
  },
};
