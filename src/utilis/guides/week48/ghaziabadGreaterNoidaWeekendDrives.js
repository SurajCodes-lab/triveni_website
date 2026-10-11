// Week 48 guide 10 — "places to visit near ghaziabad on weekends" (222
// impressions, position 6.5) and "places to visit near greater noida for
// weekend" (210, position 6.7). The two eastern catchments of the NCR, which
// share the Meerut expressway but not the Yamuna Expressway.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'ghaziabad-greater-noida-weekend-drives',
  path: '/ghaziabad-greater-noida-weekend-drives',
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'places to visit near ghaziabad / greater noida on weekends', impressions: 432, position: 6.6 },

  eyebrow: 'Weekend guide · East NCR',
  crumbs: [{ name: 'Ghaziabad', url: '/ghaziabad' }, { name: 'Greater Noida', url: '/greater-noida' }],
  crumbName: 'Ghaziabad & Greater Noida weekend drives',
  titleLead: 'Ghaziabad and Greater Noida',
  titleAccent: 'weekend drives',
  title: 'Ghaziabad and Greater Noida Weekend Drives',
  metaTitle: 'Weekend Drives from Ghaziabad & Greater Noida by Car 2026',
  metaDescription: 'Weekend drives from Ghaziabad (Garhmukteshwar, Haridwar, Rishikesh, Corbett, Nainital) and Greater Noida (Mathura, Agra, Bharatpur, Jaipur). Distances, drive times and sedan fares from ₹11/km.',
  keywords: ['places to visit near ghaziabad on weekends', 'places to visit near greater noida for weekend', 'weekend getaways from ghaziabad', 'weekend trips from greater noida', 'ghaziabad to haridwar', 'greater noida to agra', 'places near indirapuram'],
  heroImage: `${IMG}/Haridwar/Har_Ki_Pauri.jpg`,
  heroAlt: 'Har Ki Pauri at Haridwar, four hours from Ghaziabad on the Meerut expressway',

  lead: 'Ghaziabad and Greater Noida sit on the eastern edge of the NCR, twenty-five kilometres apart, and their weekends point in different directions. From Ghaziabad the Delhi–Meerut Expressway is the door: Garhmukteshwar on the Ganga in ninety minutes, Haridwar in four hours, Rishikesh in four and a half, Corbett in five, Nainital and Mussoorie in six. From Greater Noida the Yamuna Expressway begins at Pari Chowk: Mathura in under two hours, Agra in two and a quarter, Bharatpur in under three, with Haridwar and Rishikesh at four and a half the other way. A sedan bills ₹11/km on a 300 km per day minimum, ₹3,300 for a day and ₹6,600 for a weekend.',
  keyFacts: [
    { label: 'Ghaziabad, nearest', value: 'Garhmukteshwar · 60 km' },
    { label: 'Greater Noida, nearest', value: 'Mathura · 120 km' },
    { label: 'Shared weekend', value: 'Haridwar · 4–4.5 hrs' },
    { label: 'Sedan, weekend', value: 'from ₹6,600' },
  ],
  stickyLabel: 'East NCR weekend cab',
  waText: 'Hi, I need a weekend cab from Ghaziabad or Greater Noida. Area, destination and dates to follow.',

  intro: [
    'This is one guide for two neighbouring cities because they overlap: both use the Meerut expressway for Uttarakhand, and a Ghaziabad family and a Greater Noida family will meet at Har Ki Pauri on the same Saturday evening. But the nearest trips differ completely. Ghaziabad’s are north-east along the Ganga; Greater Noida’s are south down the Yamuna. The two bands below keep them apart, and the third is the shared long-weekend list.',
    'Distances are from Indirapuram for Ghaziabad and from Pari Chowk for Greater Noida. Fares follow the rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km, on a 300 km per day minimum; under about a hundred kilometres the 4 hour / 40 km local package at ₹2,200 applies instead.',
  ],

  bands: [
    {
      eyebrow: 'From Ghaziabad',
      heading: 'Weekend drives from Ghaziabad: the Ganga and the Uttarakhand hills',
      note: 'The Delhi–Meerut Expressway from Indirapuram or Raj Nagar, then NH-9 east or NH-334 north.',
      places: [
        { name: 'Garhmukteshwar', image: `${IMG}/Haridwar/Ganga_Aarti.jpg`, alt: 'Evening aarti lamps on a Ganga ghat at Haridwar', distance: '60 km', time: '1.5 hrs', fare: '₹2,420 one-way', bestFor: 'Ganga ghats, Sunday', highlights: ['Brijghat', 'Ganga aarti', 'Kartik Purnima fair'], blurb: 'The nearest Ganga ghat to the NCR, down NH-9. Quiet most of the year; in November the Kartik Purnima fair fills the riverbank for a week. Bills on the local package: ₹2,420 is the one-way figure, and the return adds ₹11 for each kilometre driven back.', href: '/ghaziabad', cta: 'Ghaziabad cabs' },
        { name: 'Hastinapur', image: `${IMG}/Haridwar/Ganga_Aarti.jpg`, alt: 'Evening aarti on the Ganga at Haridwar (representative image for the Ganga plain)', distance: '90 km', time: '2 hrs', fare: '₹2,750 one-way', bestFor: 'Jain temples, sanctuary', highlights: ['Jain temples', 'Hastinapur sanctuary', 'Mahabharata sites'], blurb: 'The Kaurava capital, north of Meerut, with a cluster of Jain temples and a wetland sanctuary. A day, and mostly for the history. ₹2,750 is the one-way local-package figure; the return adds ₹11 per kilometre driven back.', href: '/ghaziabad', cta: 'Ghaziabad cabs' },
        { name: 'Haridwar', image: `${IMG}/Haridwar/Har_Ki_Pauri.jpg`, distance: '200 km', time: '4 hrs', km: 200, bestFor: 'Ganga aarti', highlights: ['Har Ki Pauri', 'Mansa Devi ropeway', 'Chandi Devi'], blurb: 'The Ghaziabad weekend. Four hours up the expressway, the aarti at six, the ropeway temples in the morning and Rishikesh on the way home.', href: '/ghaziabad-to-haridwar', cta: 'Cab to Haridwar' },
        { name: 'Rishikesh', image: `${IMG}/Rishikesh/River_Rafting.jpg`, distance: '220 km', time: '4.5 hrs', km: 220, bestFor: 'Rafting, cafés', highlights: ['Rafting from Shivpuri', 'Laxman Jhula', 'Triveni Ghat'], blurb: 'Twenty-five kilometres past Haridwar. Rafting from mid-September to June, the Tapovan strip and a quieter aarti.', href: '/ghaziabad-to-rishikesh', cta: 'Cab to Rishikesh' },
        { name: 'Jim Corbett', image: `${IMG}/Jim_Corbett/Dhikala_Zone.jpg`, distance: '230 km', time: '5 hrs', km: 230, bestFor: 'Safari', highlights: ['Dhikala', 'Jeep safari', 'Kosi resorts'], blurb: 'NH-9 through Moradabad and Kashipur. Book the safari before the cab; Dhikala from mid-November to mid-June.', href: '/ghaziabad', cta: 'Ghaziabad outstation' },
        { name: 'Lansdowne', image: `${IMG}/Lansdowne/lansdowne_hero_section.jpg`, distance: '240 km', time: '5.5 hrs', km: 240, bestFor: 'Quiet hills', highlights: ['Bhulla Lake', 'Tip-n-Top', 'Pine forest'], blurb: 'Via Meerut, Bijnor and Kotdwar. The nearest hill station to Ghaziabad and the quietest on this list.', href: '/one-way-cab/delhi-to-lansdowne', cta: 'Lansdowne cab page' },
        { name: 'Mussoorie', image: `${IMG}/Mussoorie/Kempty_Falls.jpg`, distance: '260 km', time: '6 hrs', km: 260, bestFor: 'Hill station', highlights: ['Mall Road', 'Kempty Falls', 'Landour'], blurb: 'The Delhi–Dehradun expressway from the Meerut side. Two nights for the Mall, the falls and Landour.', href: '/delhi-to-mussoorie', cta: 'Cab to Mussoorie' },
        { name: 'Nainital', image: `${IMG}/Nainital/Naini_Lake.jpg`, distance: '270 km', time: '6 hrs', km: 270, bestFor: 'Lake', highlights: ['Naini Lake', 'Snow View', 'Bhimtal'], blurb: 'NH-9 to Haldwani and up. The lake and the ropeway, then Bhimtal and Sattal on the second day.', href: '/ghaziabad-to-nainital', cta: 'Cab to Nainital' },
      ],
    },
    {
      eyebrow: 'From Greater Noida',
      heading: 'Weekend drives from Greater Noida: down the Yamuna Expressway',
      note: 'The expressway begins at Pari Chowk. Mathura, Agra and Bharatpur are day trips; Jaipur is a weekend via the outer ring.',
      places: [
        { name: 'Mathura & Vrindavan', image: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg`, distance: '120 km', time: '1.75 hrs', km: 120, bestFor: 'Temples', highlights: ['Krishna Janmabhoomi', 'Banke Bihari', 'Prem Mandir'], blurb: 'The closest real trip from Greater Noida, and the expressway makes it under two hours. Temples in the morning, Prem Mandir at dusk, home by nine.', href: '/noida-to-mathura', cta: 'Cab to Mathura' },
        { name: 'Agra', image: `${IMG}/Agra/Taj_mahal.jpg`, distance: '180 km', time: '2.25 hrs', km: 180, bestFor: 'Taj, fort', highlights: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh'], blurb: 'Greater Noida is the closest part of the NCR to the Taj: two and a quarter hours. A day trip that works, or a night for the sunrise entry. Closed Fridays.', href: '/noida-to-agra', cta: 'Cab to Agra' },
        { name: 'Bharatpur', image: `${IMG}/Bharatpur/Bird_Sanctuary.jpg`, distance: '170 km', time: '2.75 hrs', km: 170, bestFor: 'Birds, Nov–Feb', highlights: ['Keoladeo', 'Lohagarh Fort'], blurb: 'Via Mathura and across. Dawn is the hour, which means a very early start or the second morning of an Agra weekend.', href: '/one-way-cab/delhi-to-bharatpur', cta: 'Cab to Bharatpur' },
        { name: 'Fatehpur Sikri', image: `${IMG}/Fatehpur_Sikri/Buland_Darwaza.jpg`, distance: '220 km', time: '3 hrs', km: 220, bestFor: 'Mughal capital', highlights: ['Buland Darwaza', 'Panch Mahal', 'Salim Chishti'], blurb: 'Forty kilometres past Agra. Pairs with Agra for a two-day weekend, or with Bharatpur for the second day.', href: '/same-day-fatehpur-sikri-from-agra', cta: 'Sikri day tour' },
        { name: 'Jaipur', image: `${IMG}/Jaipur/Hawa_Mahal.jpg`, distance: '300 km', time: '5 hrs', km: 300, bestFor: 'Forts, bazaars', highlights: ['Amber Fort', 'Hawa Mahal', 'Nahargarh'], blurb: 'The outer ring road to NH-48. Two nights: Amber and the old city, Nahargarh at sunset, City Palace on Sunday.', href: '/noida-to-jaipur', cta: 'Cab to Jaipur' },
        { name: 'Haridwar & Rishikesh', image: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, distance: '230–255 km', time: '4.5–5 hrs', km: 255, bestFor: 'Ganga weekend', highlights: ['Har Ki Pauri', 'Laxman Jhula', 'Rafting'], blurb: 'The shared weekend: the Noida–Greater Noida link to the Meerut expressway, then NH-334. Haridwar on Saturday, Rishikesh on Sunday.', href: '/noida-to-rishikesh', cta: 'Cab to Rishikesh' },
      ],
    },
  ],

  table: {
    title: 'Weekend drives from Ghaziabad and Greater Noida',
    caption: 'Distance and drive time from Ghaziabad (Indirapuram) and Greater Noida (Pari Chowk) with the sedan fare for a day and a weekend',
    intro: 'Two distance columns, one for each city. Sedan fares at ₹11/km on a 300 km per day minimum; trips under 100 km bill on the local package.',
    columns: [
      { key: 'place', label: 'Destination' },
      { key: 'gzb', label: 'From Ghaziabad', align: 'right' },
      { key: 'gn', label: 'From Greater Noida', align: 'right' },
      { key: 'day', label: 'Sedan, day', align: 'right' },
      { key: 'weekend', label: 'Sedan, weekend', align: 'right', strong: true },
    ],
    rows: [
      { place: 'Garhmukteshwar', gzb: '60 km · 1.5 hrs', gn: '100 km · 2 hrs', day: '₹2,420 local, one-way', weekend: '—' },
      { place: 'Hastinapur', gzb: '90 km · 2 hrs', gn: '120 km · 2.5 hrs', day: '₹2,750 local, one-way', weekend: '—' },
      { place: 'Mathura–Vrindavan', gzb: '150 km · 2.5 hrs', gn: '120 km · 1.75 hrs', day: '₹3,300', weekend: '₹6,600' },
      { place: 'Agra', gzb: '210 km · 3.5 hrs', gn: '180 km · 2.25 hrs', day: '₹3,300', weekend: '₹6,600' },
      { place: 'Bharatpur', gzb: '220 km · 3.5 hrs', gn: '170 km · 2.75 hrs', day: '₹3,300', weekend: '₹6,600' },
      { place: 'Haridwar', gzb: '200 km · 4 hrs', gn: '230 km · 4.5 hrs', day: '₹3,300', weekend: '₹6,600' },
      { place: 'Rishikesh', gzb: '220 km · 4.5 hrs', gn: '255 km · 5 hrs', day: '₹3,300', weekend: '₹6,600' },
      { place: 'Jim Corbett', gzb: '230 km · 5 hrs', gn: '250 km · 5.5 hrs', day: '—', weekend: '₹6,600' },
      { place: 'Lansdowne', gzb: '240 km · 5.5 hrs', gn: '265 km · 6 hrs', day: '—', weekend: '₹6,600' },
      { place: 'Mussoorie', gzb: '260 km · 6 hrs', gn: '280 km · 6 hrs', day: '—', weekend: '₹6,600' },
      { place: 'Nainital', gzb: '270 km · 6 hrs', gn: '290 km · 6.5 hrs', day: '—', weekend: '₹6,600' },
      { place: 'Jaipur', gzb: '320 km · 5.5 hrs', gn: '300 km · 5 hrs', day: '—', weekend: '₹7,040 / ₹6,600' },
      { place: 'Shimla', gzb: '330 km · 7 hrs', gn: '370 km · 7.5 hrs', day: '—', weekend: '₹7,260 / ₹8,140' },
    ],
    footnote: 'Weekend = two days at the 300 km per day minimum, or the actual round trip if longer (Jaipur: Ghaziabad ₹7,040, Greater Noida ₹6,600; Shimla: Ghaziabad ₹7,260, Greater Noida ₹8,140). Local package: ₹2,200 for 4 hr / 40 km plus ₹11 per extra kilometre. Tolls at actual.',
  },

  sections: [
    {
      eyebrow: 'Ghaziabad',
      heading: 'What is the best weekend drive from Ghaziabad?',
      paras: [
        'Haridwar and Rishikesh, and it is not close, because Ghaziabad has the fastest road to them in the whole region. The Delhi–Meerut Expressway starts at the UP Gate and NH-334 continues from Meerut through Muzaffarnagar and Roorkee; four hours from Indirapuram to Har Ki Pauri if you leave by six. Saturday is the aarti; Sunday is Rishikesh for rafting, the bridges and the quieter aarti at Triveni Ghat.',
        'For a Sunday rather than a weekend, Garhmukteshwar is the answer: ninety minutes down NH-9 to the Ganga at Brijghat, a morning on the ghats, lunch, and home. It bills on the local package, not as an outstation trip.',
      ],
      image: { src: `${IMG}/Rishikesh/Ram_Jhula.jpg`, alt: 'Ram Jhula bridge at Rishikesh', tag: 'Rishikesh · 220 km', caption: 'Rishikesh on the second day of Ghaziabad’s best weekend.' },
    },
    {
      eyebrow: 'Greater Noida',
      heading: 'What is the best weekend drive from Greater Noida?',
      paras: [
        'Agra with Bharatpur or Fatehpur Sikri, over two days. Greater Noida is the closest point in the NCR to the Taj, and the expressway from Pari Chowk makes the drive two and a quarter hours. Do the Taj at sunrise on Sunday after a Saturday of the fort and Mehtab Bagh, then Fatehpur Sikri or the birds at Keoladeo on the way back.',
        'For a day rather than a weekend, Mathura and Vrindavan are under two hours and the day writes itself: Krishna Janmabhoomi, Banke Bihari before noon, Prem Mandir lit at dusk, Vishram Ghat aarti, home by nine.',
      ],
      link: { label: 'Same-day Agra tour from Noida', href: '/same-day-agra-tour-from-noida' },
    },
    {
      eyebrow: 'Shared',
      heading: 'Which weekend drives work equally from Ghaziabad and Greater Noida?',
      paras: [
        'Haridwar, Rishikesh, Corbett, Nainital and Mussoorie are within half an hour of each other from the two cities, because Greater Noida reaches the Meerut expressway through Noida in twenty-five minutes. Jaipur is close to the same from both, via the outer ring, though the extra twenty kilometres from Ghaziabad tip the weekend over the 600 km minimum. The only real asymmetry is the Yamuna Expressway, which Ghaziabad has to cross the city to reach, and which is why Agra is an hour further from Indirapuram than from Pari Chowk.',
      ],
      image: { src: `${IMG}/Jim_Corbett/Tiger_Safari_Corbett.jpg`, alt: 'Jeep safari in Jim Corbett National Park', tag: 'Corbett · 230–250 km', side: 'left', caption: 'Corbett is five hours from either city on NH-9; the safari slot is the thing to book first.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'What does a weekend cab from Ghaziabad or Greater Noida cost?',
      paras: [
        'A day trip within 300 km bills ₹3,300 for a sedan and a two-day weekend ₹6,600: the 300 km per day minimum at ₹11/km, with fuel and driver inside the figure and tolls at actual. An Ertiga is ₹4,500 and ₹9,000, an Innova Crysta ₹5,400 and ₹10,800, a 12-seater Tempo Traveller ₹6,900 and ₹13,800. Garhmukteshwar and Hastinapur, under a hundred kilometres from Ghaziabad, bill on the 4 hour / 40 km local package instead.',
      ],
      link: { label: 'Ghaziabad cab service', href: '/ghaziabad' },
    },
    {
      eyebrow: 'Season',
      heading: 'When are these weekend drives at their best?',
      paras: [
        'October to March for Mathura, Agra, Bharatpur and Jaipur, and for Garhmukteshwar’s Kartik Purnima fair in November. March to June for the hills: Mussoorie, Nainital and Lansdowne. Haridwar and Rishikesh run all year, with rafting from mid-September to June. Corbett’s Dhikala zone opens mid-November and closes mid-June.',
      ],
    },
  ],

  fare: {
    title: 'A day or a weekend from the east NCR',
    note: 'The one-day column covers Mathura, Agra, Bharatpur, Haridwar or Rishikesh as a day; the two-day column covers a night in any of them or in Corbett, Mussoorie, Nainital or Jaipur.',
    caption: 'One-day and two-day cab fares from Ghaziabad or Greater Noida by vehicle',
    oneWayLabel: 'One day',
    roundLabel: 'Weekend',
    rows: [
      { vehicle: 'Sedan (Swift Dzire, Etios)', seats: '4', rate: '₹11/km', fare: '₹3,300', roundTrip: '₹6,600' },
      { vehicle: 'Ertiga / SUV', seats: '6', rate: '₹15/km', fare: '₹4,500', roundTrip: '₹9,000' },
      { vehicle: 'Innova Crysta', seats: '6–7', rate: '₹18/km', fare: '₹5,400', roundTrip: '₹10,800' },
      { vehicle: 'Tempo Traveller (12-seater)', seats: '12', rate: '₹23/km', fare: '₹6,900', roundTrip: '₹13,800' },
    ],
    footnote: '300 km per day minimum. Trips whose round trip exceeds 600 km bill actual distance. Tolls at actual.',
    waText: 'Hi, I want a weekend cab from Ghaziabad or Greater Noida. Area, destination, dates and headcount to follow.',
    bookHref: '/outstation-cabs/noida',
    bookLabel: 'Outstation cabs from Noida',
    cta: 'Get the weekend quote',
  },

  galleryTitle: 'North to the Ganga, south to the Yamuna',
  gallery: [
    { image: `${IMG}/Haridwar/Mansa_Devi_Temple.jpg`, title: 'Mansa Devi, Haridwar', text: 'The ropeway on Sunday morning.', tag: 'Ghaziabad · 200 km' },
    { image: `${IMG}/Nainital/Snow_View_Point.jpg`, title: 'Snow View, Nainital', text: 'Six hours on NH-9.', tag: 'Ghaziabad · 270 km' },
    { image: `${IMG}/Agra/Mehtab_Bagh.jpg`, title: 'Mehtab Bagh, Agra', text: 'Two and a quarter hours from Pari Chowk.', tag: 'Greater Noida · 180 km' },
    { image: `${IMG}/Mathura_Vrindavan/Banke_Bihari_Temple.jpg`, title: 'Banke Bihari', text: 'Under two hours from Greater Noida.', tag: 'Greater Noida · 120 km' },
    { image: `${IMG}/Lansdowne/Bhulla_Lake.jpg`, title: 'Bhulla Lake, Lansdowne', text: 'The nearest hill station to Ghaziabad.', tag: 'Ghaziabad · 240 km' },
  ],

  tips: [
    { title: 'Ghaziabad: use the expressway from UP Gate', text: 'The Delhi–Meerut Expressway starts at the UP Gate and is the whole reason Haridwar is four hours from Indirapuram. Avoid the old NH-58 through Modinagar.' },
    { title: 'Greater Noida: Pari Chowk is the start line', text: 'Be at the expressway toll by seven for the Agra day. Jewar pickups are closer still.' },
    { title: 'Tell us Indirapuram or Raj Nagar, Pari Chowk or Jewar', text: 'The two cities are dispatched from different zones. Naming the area puts the driver at your gate for the early start.' },
  ],

  faqs: [
    { question: 'What are the best places to visit near Ghaziabad on weekends?', answer: 'Garhmukteshwar (60 km) and Hastinapur (90 km) for a Sunday; Haridwar (200 km), Rishikesh (220 km), Jim Corbett (230 km), Lansdowne (240 km), Mussoorie (260 km) and Nainital (270 km) for a weekend, all via the Delhi–Meerut Expressway. Mathura (150 km) and Agra (210 km) lie the other way.' },
    { question: 'What are the best places to visit near Greater Noida for a weekend?', answer: 'Mathura–Vrindavan (120 km) and Agra (180 km) down the Yamuna Expressway, Bharatpur (170 km) and Fatehpur Sikri (220 km) beyond them, and Haridwar–Rishikesh (230–255 km), Corbett (250 km), Mussoorie (280 km), Nainital (290 km) and Jaipur (300 km) for a longer weekend.' },
    { question: 'How far is Haridwar from Ghaziabad?', answer: 'About 200 km and four hours from Indirapuram via the Delhi–Meerut Expressway and NH-334. A sedan bills ₹3,300 for a day and ₹6,600 for a two-day weekend.' },
    { question: 'How far is Agra from Greater Noida?', answer: 'About 180 km and two and a quarter hours from Pari Chowk on the Yamuna Expressway, the shortest Agra drive in the NCR. A sedan bills ₹3,300 for the day, plus the expressway toll at actual.' },
    { question: 'Which is the nearest hill station to Ghaziabad?', answer: 'Lansdowne at about 240 km and five and a half hours via Meerut, Bijnor and Kotdwar, then Mussoorie at 260 km and Nainital at 270 km, both about six hours.' },
    { question: 'How much does a weekend cab from Ghaziabad or Greater Noida cost?', answer: 'A day trip within 300 km is ₹3,300 for a sedan and a two-day weekend ₹6,600; an Ertiga is ₹4,500 and ₹9,000, an Innova Crysta ₹5,400 and ₹10,800, a 12-seater Tempo Traveller ₹6,900 and ₹13,800. Fuel and driver included, tolls extra. Garhmukteshwar and Hastinapur bill on the local package.' },
    { question: 'Can I do Garhmukteshwar as a half day from Ghaziabad?', answer: 'Yes. It is 60 km and ninety minutes down NH-9, and bills on the 4 hour / 40 km local package at ₹2,200 plus ₹11 per extra kilometre, about ₹2,420 one-way; the return leg adds ₹11 for each kilometre driven back. The Kartik Purnima fair in November is the busy week.' },
    { question: 'Do you pick up from Indirapuram, Raj Nagar, Pari Chowk and Jewar?', answer: 'Yes. Ghaziabad pickups, including Indirapuram, Vaishali, Vasundhara and Raj Nagar, are dispatched from the Ghaziabad zone; Greater Noida, Pari Chowk and Jewar from the Noida zone. Share the area on 7668570551.' },
  ],

  related: [
    { label: 'Ghaziabad to Haridwar cab', sub: '200 km · 4 hrs', href: '/ghaziabad-to-haridwar', img: `${IMG}/Haridwar/Har_Ki_Pauri.jpg` },
    { label: 'Ghaziabad to Nainital cab', sub: '270 km · 6 hrs', href: '/ghaziabad-to-nainital', img: `${IMG}/Nainital/Naini_Lake.jpg` },
    { label: 'Delhi to Mussoorie cab', sub: 'Also from Ghaziabad · 260 km · 6 hrs', href: '/delhi-to-mussoorie', img: `${IMG}/Mussoorie/Mall_road.jpg` },
    { label: 'Noida to Agra cab', sub: 'From Greater Noida too', href: '/noida-to-agra', img: `${IMG}/Agra/Taj_mahal.jpg` },
    { label: 'Noida to Mathura cab', sub: 'Under 2 hrs from Pari Chowk', href: '/noida-to-mathura', img: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg` },
    { label: 'Places to visit near Ghaziabad', sub: 'The full list', href: '/places-to-visit-near-ghaziabad', img: `${IMG}/Delhi/Akshardham_Temple.jpg` },
    { label: 'Greater Noida cab service', sub: 'City hub', href: '/greater-noida', img: '/images/car/innova_crysta.jpg' },
    { label: 'Ghaziabad cab service', sub: 'City hub', href: '/ghaziabad', img: '/images/car/ertiga.jpg' },
  ],
  guides: ['noida-weekend-trips', 'weekend-getaways-near-me', 'hill-stations-near-gurgaon-noida', 'places-to-visit-near-me', 'delhi-to-rishikesh-shortest-route'],

  schema: {
    places: ['ghaziabad', 'greater-noida', 'haridwar', 'rishikesh', 'agra', 'mathura', 'nainital'],
  },
};
