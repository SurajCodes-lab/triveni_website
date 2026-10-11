// Week 48 guide 2 — "places to visit near me" (4,334 impressions a quarter,
// position 8.0). The site had no page written for the query; the near-Noida
// and near-Gurgaon lists were catching it by accident. This is the one
// canonical near-me page, banded by distance from the centre of the region.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'places-to-visit-near-me',
  path: '/places-to-visit-near-me',
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'places to visit near me', impressions: 4334, position: 8.0 },

  eyebrow: 'Distance-banded guide · Delhi',
  crumbs: [{ name: 'Places to visit near Delhi', url: '/places-to-visit-near-delhi' }],
  crumbName: 'Places to visit near me',
  titleLead: 'Places to visit near you:',
  titleAccent: 'a distance-banded guide from Delhi',
  title: 'Places to Visit Near You: A Distance-Banded Guide from Delhi',
  metaTitle: 'Places to Visit Near Me: 50, 100, 200 & 300 km from Delhi',
  metaDescription: 'Places to visit near you from Delhi in four distance bands: inside 50 km, within 100 km, within 200 km and within 300 km. Drive times, what each is for, and the cab fare from ₹2,200 for a half day.',
  keywords: ['places to visit near me', 'places to visit near delhi', 'tourist places near me within 100 km', 'places near delhi within 200 km', 'places to visit near delhi within 300 km', 'day trip places near me'],
  heroImage: `${IMG}/Delhi/Outub_Minar.jpg`,
  heroAlt: 'Qutub Minar in south Delhi, the starting point for the distance bands in this guide',

  lead: 'From the middle of Delhi, the places worth visiting sort themselves into four rings. Inside 50 km are the day-outs that fit a local package: Qutub Minar, Akshardham, the Red Fort and India Gate inside the city. Within 100 km are Sultanpur, Manesar, Sohna and Damdama. Within 200 km are Neemrana, Mathura–Vrindavan, Alwar, Kurukshetra, Bharatpur and Sariska. Within 300 km are Agra, Jaipur, Haridwar, Rishikesh, Chandigarh, Corbett, Mussoorie, Nainital and Kasauli. A half-day cab inside the first two rings is ₹2,200; anything past 100 km bills as an outstation trip from ₹3,300 one-way, ₹6,600 for a same-day return.',
  keyFacts: [
    { label: 'Inside 50 km', value: 'Local package ₹2,200' },
    { label: 'Within 100 km', value: '2 escapes' },
    { label: 'Within 200 km', value: '6 day trips' },
    { label: 'Within 300 km', value: '9 weekends' },
  ],
  stickyLabel: 'Cab near you',
  waText: 'Hi, I want a cab for a day out from Delhi. Please share the fare for my destination.',

  intro: [
    'Search asks “places to visit near me”; the useful answer depends on how far you are willing to drive. So this guide is banded by distance from central Delhi, with Qutub Minar as the reference point, and each band tells you what kind of day it gives you and which fare applies.',
    'The fare rule is simple. Up to about a hundred kilometres a trip is a local run and bills on the 4 hour / 40 km package at ₹2,200 for a sedan, or the 8 hour / 80 km full-day package. Beyond that it is an outstation trip at ₹11/km on a 300 km minimum, which is ₹3,300 one-way for a sedan and covers anything up to Nainital; a same-day return bills as a round trip at ₹6,600, and the same-day tour packages to Mathura–Vrindavan, Kurukshetra and Neemrana have their own published prices.',
  ],

  bands: [
    {
      eyebrow: 'Ring one',
      heading: 'Inside 50 km: places to visit near you today, on a half-day package',
      note: 'Everything here is inside or on the edge of the city. A 4 hour / 40 km sedan package is ₹2,200; the full-day 8 hour / 80 km package covers two or three of them.',
      places: [
        { name: 'Qutub Minar & Mehrauli', image: `${IMG}/Delhi/Outub_Minar.jpg`, distance: 'South Delhi', time: 'Half day', note: 'Local package ₹2,200', bestFor: 'History, archaeological park', highlights: ['Qutub Minar', 'Mehrauli Archaeological Park', 'Jamali Kamali'], blurb: 'The tallest brick minaret in the world and a whole archaeological park of tombs, step-wells and mosques behind it that most visitors never walk into. Two hours is enough for the minar, four for the park.', href: '/sightseeing/delhi-full-day-city-tour', cta: 'Delhi day tour' },
        { name: 'Akshardham', image: `${IMG}/Delhi/Akshardham_Temple.jpg`, distance: 'East Delhi', time: 'Half day', note: 'Local package ₹2,200', bestFor: 'Temple, evening show', highlights: ['Main mandir', 'Sahaj Anand water show', 'Exhibitions'], blurb: 'Closed on Mondays, no phones or cameras inside, and at its best from four in the afternoon so you finish with the water show after dark. The exhibitions take two hours on their own.', href: '/sightseeing/delhi-spiritual-temple-tour', cta: 'Temple tour' },
        { name: 'Red Fort & Old Delhi', image: `${IMG}/Delhi/red_fort.jpg`, distance: 'Old Delhi', time: 'Half day', note: 'Local package ₹2,200', bestFor: 'Mughal Delhi, food', highlights: ['Red Fort', 'Jama Masjid', 'Chandni Chowk'], blurb: 'Closed Mondays. Do the fort first thing, then walk to Jama Masjid and eat your way down Chandni Chowk. The car waits at the Red Fort parking; the lanes are for feet and rickshaws.', href: '/sightseeing/delhi-street-food-tour', cta: 'Old Delhi food tour' },
        { name: 'India Gate & Raj Ghat', image: `${IMG}/Delhi/India_Gate.jpg`, distance: 'Central Delhi', time: 'Evening', note: 'Local package ₹2,200', bestFor: 'Evening drive, lawns', highlights: ['India Gate', 'Kartavya Path', 'Raj Ghat'], blurb: 'The evening circuit: Raj Ghat before it closes, then India Gate as the lights come on and the lawns fill. The best of the city for a first-time visitor with two free hours.', href: '/sightseeing/delhi-night-tour', cta: 'Delhi night tour' },
      ],
    },
    {
      eyebrow: 'Ring two',
      heading: 'Within 100 km: places to visit near Delhi for a full day out',
      note: 'These are the last of the local-package runs. The full-day 8 hour / 80 km package, or the local rate with extra kilometres, still beats an outstation booking.',
      places: [
        { name: 'Sultanpur & Manesar', image: `${IMG}/Bharatpur/Migratory_Birds.jpg`, alt: 'Migratory birds on the Keoladeo wetland at Bharatpur, the same winter species that reach Sultanpur', distance: '50 km', time: '1–1.5 hrs', note: 'Local package ₹2,200 + km', bestFor: 'Winter birding, resort day', highlights: ['Sultanpur bird sanctuary', 'Manesar resorts', 'Aravalli edge'], blurb: 'Sultanpur National Park is a wetland forty minutes past Gurgaon that fills with migratory birds from November to February; go at dawn and be back for lunch. Manesar next door is the ring of resorts with day passes and pools for the rest of the year.', href: '/local-taxi/gurgaon', cta: 'Gurgaon local taxi' },
        { name: 'Sohna & Damdama', image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Hero_Section.jpg`, alt: 'Aravalli hills near Sariska, similar country to the Sohna ridge south of Gurgaon', distance: '60 km', time: '1.5 hrs', note: 'Local package ₹2,200 + km', bestFor: 'Aravalli day out, lake', highlights: ['Damdama Lake', 'Sohna hot spring', 'Aravalli farm stays'], blurb: 'South of Gurgaon in the Aravalli ridge: a lake with boating and camping, hot sulphur springs at Sohna and a run of farm-stay resorts that do day passes. A Sunday, not a weekend.', href: '/local-taxi/gurgaon', cta: 'Gurgaon local taxi' },
      ],
    },
    {
      eyebrow: 'Ring three',
      heading: 'Within 200 km: day trips from Delhi that are worth the early start',
      note: 'Outstation billing begins here: ₹3,300 one-way for a sedan on the 300 km minimum, ₹6,600 if the car brings you back the same day; the same-day tour packages to Neemrana, Mathura–Vrindavan and Kurukshetra are priced on their own pages. Leave by six and every one of these is a day trip; several deserve a night.',
      places: [
        { name: 'Neemrana Fort', image: `${IMG}/Neemrana/Neemrana_hero_section.jpg`, distance: '120 km', time: '2 hrs', km: 120, bestFor: 'Fort lunch, zip line', highlights: ['Fort Palace', 'Baori step-well', 'Zip line'], blurb: 'The first stop past the 100 km line, which is why it bills as outstation; but a day at the fort with lunch on the ramparts and the zip line in the afternoon is the best single day out of Delhi on the Jaipur road. There is a same-day tour package for it.', href: '/same-day-neemrana-from-delhi', cta: 'Same-day Neemrana' },
        { name: 'Mathura & Vrindavan', image: `${IMG}/Mathura_Vrindavan/Banke_Bihari_Temple.jpg`, distance: '160 km', time: '2.5–3 hrs', km: 160, bestFor: 'Temples, aarti', highlights: ['Banke Bihari', 'Prem Mandir', 'Krishna Janmabhoomi'], blurb: 'The most-visited day trip from Delhi. Krishna Janmabhoomi in the morning, Banke Bihari before it closes at noon, Prem Mandir lit at dusk, and Vishram Ghat aarti before the drive home on the Yamuna Expressway.', href: '/delhi-to-mathura', cta: 'Cab to Mathura' },
        { name: 'Alwar', image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Bala_Quila.jpg`, distance: '160 km', time: '3 hrs', km: 160, bestFor: 'Fort, lake, museum', highlights: ['Bala Quila', 'Siliserh Lake', 'City Palace museum'], blurb: 'A fort-topped town with a lake palace and one of Rajasthan’s better museums, and almost nobody there. Sariska tiger reserve is thirty-five kilometres on for an overnight.', href: '/one-way-cab/delhi-to-alwar', cta: 'Cab to Alwar' },
        { name: 'Kurukshetra', image: `${IMG}/Chandigarh/sukhana_lake.jpg`, alt: 'Sukhna Lake at Chandigarh, shown in place of Brahma Sarovar at Kurukshetra', distance: '170 km', time: '3 hrs', km: 170, bestFor: 'Mahabharata sites', highlights: ['Brahma Sarovar', 'Jyotisar', 'Krishna Museum'], blurb: 'The battlefield of the Mahabharata, up NH-44. Brahma Sarovar at sunset is the reason to come; Jyotisar, where the Gita is said to have been spoken, and the museum fill the afternoon. There is a same-day tour that does all three.', href: '/same-day-kurukshetra-from-delhi', cta: 'Same-day tour' },
        { name: 'Bharatpur', image: `${IMG}/Bharatpur/Bird_Sanctuary.jpg`, distance: '185 km', time: '3–3.5 hrs', km: 185, bestFor: 'Birdwatching', highlights: ['Keoladeo National Park', 'Lohagarh Fort'], blurb: 'Keoladeo is best at dawn, which means an overnight or a four o’clock departure. November to February is the migratory season; the park is quiet and green the rest of the year.', href: '/one-way-cab/delhi-to-bharatpur', cta: 'Cab to Bharatpur' },
        { name: 'Sariska', image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Tiger_Reserve.jpg`, distance: '200 km', time: '4 hrs', km: 200, bestFor: 'Tiger reserve, temples', highlights: ['Jeep safari', 'Neelkanth temples', 'Pandupol'], blurb: 'The nearest tiger reserve to Delhi. Safaris run morning and afternoon from October to June; the Neelkanth temple ruins and the Pandupol Hanuman temple are inside the park and reachable by road.', href: '/sightseeing/delhi-to-alwar-sariska-same-day', cta: 'Sariska same-day' },
      ],
    },
    {
      eyebrow: 'Ring four',
      heading: 'Within 300 km: the weekend ring',
      note: 'Everything in this ring is a night away. The sedan fare is still ₹3,300 one-way, because none of these exceeds the 300 km minimum; a two-day round trip is ₹6,600.',
      places: [
        { name: 'Agra', image: `${IMG}/Agra/agra_fort.jpg`, distance: '230 km', time: '3–3.5 hrs', km: 230, bestFor: 'Taj, Agra Fort', highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri'], blurb: 'Yamuna Expressway from the Noida end; the Taj is closed on Fridays. Stay the night for the sunrise entry, and see Fatehpur Sikri on the way back.', href: '/delhi-to-agra', cta: 'Cab to Agra' },
        { name: 'Haridwar', image: `${IMG}/Haridwar/Mansa_Devi_Temple.jpg`, distance: '230 km', time: '4–4.5 hrs', km: 230, bestFor: 'Ganga aarti', highlights: ['Har Ki Pauri', 'Mansa Devi', 'Chandi Devi'], blurb: 'The Ganga leaves the hills here. Har Ki Pauri aarti at dusk, the two hilltop temples by ropeway the next morning.', href: '/one-way-cab/delhi-to-haridwar', cta: 'Cab to Haridwar' },
        { name: 'Rishikesh', image: `${IMG}/Rishikesh/Triveni_Ghat.jpg`, distance: '250 km', time: '5 hrs', km: 250, bestFor: 'Rafting, yoga', highlights: ['Laxman Jhula', 'Rafting', 'Triveni Ghat'], blurb: 'The Ganga at its cleanest and the rafting season from mid-September. Cafés in Tapovan, the Beatles Ashram, and the quieter evening aarti at Triveni Ghat.', href: '/delhi-to-rishikesh', cta: 'Cab to Rishikesh' },
        { name: 'Chandigarh', image: `${IMG}/Chandigarh/Chandigarh_hero_section.jpg`, distance: '250 km', time: '4–4.5 hrs', km: 250, bestFor: 'Planned city', highlights: ['Rock Garden', 'Sukhna Lake', 'Capitol Complex'], blurb: 'Le Corbusier’s city; the Rock Garden and the lake, and the doorway to Kasauli and Shimla.', href: '/delhi-to-chandigarh', cta: 'Cab to Chandigarh' },
        { name: 'Jim Corbett', image: `${IMG}/Jim_Corbett/Ramganga_River.jpg`, distance: '260 km', time: '5–5.5 hrs', km: 260, bestFor: 'Safari', highlights: ['Dhikala', 'Jeep safari', 'Ramganga'], blurb: 'India’s oldest national park. Book the safari slot first; the resorts along the Kosi make the wait pleasant.', href: '/delhi-to-jim-corbett', cta: 'Cab to Corbett' },
        { name: 'Jaipur', image: `${IMG}/Jaipur/amber_fort.jpg`, distance: '280 km', time: '4.5–5 hrs', km: 280, bestFor: 'Forts, bazaars', highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace'], blurb: 'Two nights: Amber and the old city, Nahargarh for sunset, bazaars after dark.', href: '/delhi-to-jaipur', cta: 'Cab to Jaipur' },
        { name: 'Mussoorie', image: `${IMG}/Mussoorie/Lal_tibba.jpg`, distance: '290 km', time: '6–6.5 hrs', km: 290, bestFor: 'Hill station', highlights: ['Mall Road', 'Kempty Falls', 'Landour'], blurb: 'The nearest hill station to Delhi, and a proper one; Landour above it is the quiet half.', href: '/delhi-to-mussoorie', cta: 'Cab to Mussoorie' },
        { name: 'Nainital', image: `${IMG}/Nainital/Naina_Peak.jpg`, distance: '300 km', time: '6.5–7 hrs', km: 300, bestFor: 'Lakes', highlights: ['Naini Lake', 'Snow View', 'Bhimtal'], blurb: 'Right on the 300 km line. The lake town and its quieter neighbours, Bhimtal, Sattal and Naukuchiatal.', href: '/delhi-to-nainital', cta: 'Cab to Nainital' },
        { name: 'Kasauli', image: `${IMG}/Kasauli/Kasauli_Christ_Church.jpg`, distance: '300 km', time: '5.5–6 hrs', km: 300, bestFor: 'Colonial walks', highlights: ['Monkey Point', 'Christ Church', 'Mall walk'], blurb: 'An hour short of Shimla and a fraction of the crowd. A walking town with a church, a view and a pine forest.', href: '/delhi-to-kasauli', cta: 'Cab to Kasauli' },
      ],
    },
  ],

  table: {
    title: 'Places to visit near Delhi, by distance ring',
    caption: 'Distance rings from central Delhi with drive time, the kind of day each place gives, and the applicable sedan fare',
    intro: 'Distances from central Delhi. Inside 100 km a sedan bills the local package; beyond it the outstation rate applies on a 300 km minimum, so every place in rings three and four is ₹3,300 one-way for a sedan. A same-day return is a round trip at ₹6,600; the same-day tour packages to Neemrana, Mathura–Vrindavan and Kurukshetra carry their own published prices.',
    columns: [
      { key: 'place', label: 'Place' },
      { key: 'ring', label: 'Ring' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'day', label: 'What kind of day' },
      { key: 'fare', label: 'Sedan fare', align: 'right', strong: true },
    ],
    rows: [
      { place: 'Qutub Minar, Akshardham, Red Fort', ring: 'Inside 50 km', distance: 'In city', time: '30–60 min', day: 'Half day each', fare: '₹2,200 (4 hr / 40 km)' },
      { place: 'Sultanpur & Manesar', ring: 'Within 100 km', distance: '50 km', time: '1–1.5 hrs', day: 'Dawn birding, resort day', fare: '₹2,310 (local + km)' },
      { place: 'Sohna & Damdama Lake', ring: 'Within 100 km', distance: '60 km', time: '1.5 hrs', day: 'Sunday out', fare: '₹2,420 (local + km)' },
      { place: 'Neemrana', ring: 'Within 200 km', distance: '120 km', time: '2 hrs', day: 'Day trip or one night', fare: '₹3,300 one-way' },
      { place: 'Mathura–Vrindavan', ring: 'Within 200 km', distance: '160 km', time: '2.5–3 hrs', day: 'Long day trip', fare: '₹3,300 one-way' },
      { place: 'Alwar', ring: 'Within 200 km', distance: '160 km', time: '3 hrs', day: 'Day trip or one night', fare: '₹3,300 one-way' },
      { place: 'Kurukshetra', ring: 'Within 200 km', distance: '170 km', time: '3 hrs', day: 'Day trip', fare: '₹3,300 one-way' },
      { place: 'Bharatpur', ring: 'Within 200 km', distance: '185 km', time: '3–3.5 hrs', day: 'Dawn trip, one night', fare: '₹3,300 one-way' },
      { place: 'Sariska', ring: 'Within 200 km', distance: '200 km', time: '4 hrs', day: 'One night', fare: '₹3,300 one-way' },
      { place: 'Agra', ring: 'Within 300 km', distance: '230 km', time: '3–3.5 hrs', day: 'One night', fare: '₹3,300 one-way' },
      { place: 'Haridwar', ring: 'Within 300 km', distance: '230 km', time: '4–4.5 hrs', day: 'One night', fare: '₹3,300 one-way' },
      { place: 'Rishikesh', ring: 'Within 300 km', distance: '250 km', time: '5 hrs', day: 'One or two nights', fare: '₹3,300 one-way' },
      { place: 'Chandigarh', ring: 'Within 300 km', distance: '250 km', time: '4–4.5 hrs', day: 'One night', fare: '₹3,300 one-way' },
      { place: 'Jim Corbett', ring: 'Within 300 km', distance: '260 km', time: '5–5.5 hrs', day: 'Two nights', fare: '₹3,300 one-way' },
      { place: 'Jaipur', ring: 'Within 300 km', distance: '280 km', time: '4.5–5 hrs', day: 'Two nights', fare: '₹3,300 one-way' },
      { place: 'Mussoorie', ring: 'Within 300 km', distance: '290 km', time: '6–6.5 hrs', day: 'Two nights', fare: '₹3,300 one-way' },
      { place: 'Nainital', ring: 'Within 300 km', distance: '300 km', time: '6.5–7 hrs', day: 'Two nights', fare: '₹3,300 one-way' },
      { place: 'Kasauli', ring: 'Within 300 km', distance: '300 km', time: '5.5–6 hrs', day: 'One or two nights', fare: '₹3,300 one-way' },
    ],
    footnote: 'Round trips bill per day: a same-day return or two days is ₹6,600 for a sedan. Tolls, parking and monument tickets are extra. Ertiga ₹15/km, Innova Crysta ₹18/km, Tempo Traveller ₹23/km on the same rules.',
  },

  sections: [
    {
      eyebrow: 'Today',
      heading: 'What are the best places to visit near me today, without leaving Delhi?',
      paras: [
        'Delhi is the answer to its own question for most of the year. The four half-day circuits above cover the monuments people fly in for, and a full-day package strings two of them together: Qutub Minar and Mehrauli in the morning, lunch in Hauz Khas, Humayun’s Tomb and India Gate in the afternoon, Akshardham for the evening show. Mondays are the trap: the Red Fort, Akshardham and most museums are shut, so make Monday the Mehrauli-and-Lodhi day.',
        'The half-day package is four hours and forty kilometres for ₹2,200 in a sedan; the full-day package is eight hours and eighty kilometres. Both are cheaper than three separate app rides across the city, and the car waits while you are inside.',
      ],
      link: { label: 'Delhi full-day city tour', href: '/sightseeing/delhi-full-day-city-tour' },
      image: { src: `${IMG}/Delhi/Raj_Ghat.jpg`, alt: 'Raj Ghat memorial lawns in Delhi', tag: 'Central Delhi', caption: 'Raj Ghat before it closes, then India Gate: the evening circuit for a first visit.' },
    },
    {
      eyebrow: 'Rules of thumb',
      heading: 'How far can I comfortably go for a day trip from Delhi?',
      paras: [
        'Two hundred kilometres each way is the honest ceiling for a day trip. At three hours out and three back you still have six hours at the destination if you leave at six, which is enough for Mathura–Vrindavan, Alwar, Kurukshetra or Neemrana. Agra at 230 km is done as a day trip constantly, and the Yamuna Expressway makes it possible, but the sunrise Taj is only available to people who stayed the night.',
        'Beyond 250 km, the drive starts to eat the day. Haridwar, Rishikesh and Chandigarh are one-night trips; Corbett, Jaipur and the hill stations want two. The bands above are drawn on that logic rather than on distance alone.',
      ],
    },
    {
      eyebrow: 'Which side of town',
      heading: 'Which places near me are easiest from south, east and north Delhi?',
      paras: [
        'The city is big enough that your neighbourhood changes the answer. From south Delhi and Gurgaon, NH-48 makes Neemrana, Alwar, Sariska and Jaipur the natural directions and Sohna–Damdama the Sunday outing. From east Delhi, Noida and Ghaziabad, the Yamuna Expressway carries you to Mathura, Agra and Bharatpur, and the Meerut Expressway to Haridwar, Rishikesh and Corbett. From north and west Delhi, NH-44 to Kurukshetra, Chandigarh, Kasauli and Shimla is the road that does not involve crossing town.',
        'There are separate guides for the biggest catchments: the Gurgaon weekend guide, the Noida one-day and two-day drives, and the Ghaziabad and Greater Noida weekend drives.',
      ],
      link: { label: 'Noida weekend trips: one-day and two-day drives', href: '/noida-weekend-trips' },
    },
    {
      eyebrow: 'By season',
      heading: 'Which places near Delhi are best in this season?',
      paras: [
        'October to March is the season for everything on the plains: the Delhi monuments, Mathura, Agra, Alwar, Jaipur, and Bharatpur for the migratory birds from November. April to June turns the same list into a heat endurance test and sends the region to the hills: Mussoorie, Nainital and Kasauli in ring four, and Shimla just beyond it.',
        'The monsoon, July to mid-September, is the quiet season. Rafting stops at Rishikesh and the hill roads are prone to landslides, but Haridwar, the Aravalli lakes near Sohna and the Delhi gardens are at their greenest. Corbett’s Dhikala zone closes for the rains and reopens in mid-November.',
      ],
      image: { src: `${IMG}/Bharatpur/Lohagarh_Fort.jpg`, alt: 'Lohagarh Fort at Bharatpur', tag: 'Bharatpur · Nov–Feb', side: 'left', caption: 'Bharatpur’s fort and its wetland are a winter trip; the birds arrive in November.' },
    },
  ],

  fare: {
    title: 'What a day out from Delhi costs',
    note: 'Inside the city and up to about a hundred kilometres, the local packages apply. Past that, an outstation sedan is ₹11/km on a 300 km minimum, which is why every place in rings three and four is the same ₹3,300 one-way. A same-day return is a round trip and bills two ways, ₹6,600 for a sedan; the same-day tour packages to Neemrana, Mathura–Vrindavan and Kurukshetra are priced separately on their own pages.',
    caption: 'Cab fare for a day out from Delhi by product and vehicle',
    oneWayLabel: 'Fare',
    rows: [
      { vehicle: 'Sedan, 4 hr / 40 km local package', seats: '4', rate: 'package', fare: '₹2,200' },
      { vehicle: 'Sedan, 8 hr / 80 km full-day package', seats: '4', rate: 'package', fare: '₹3,800' },
      { vehicle: 'Sedan, outstation one-way (up to 300 km)', seats: '4', rate: '₹11/km', fare: '₹3,300' },
      { vehicle: 'Sedan, outstation same-day return', seats: '4', rate: '₹11/km', fare: '₹6,600' },
      { vehicle: 'Ertiga / SUV, outstation one-way (up to 300 km)', seats: '6', rate: '₹15/km', fare: '₹4,500' },
      { vehicle: 'Innova Crysta, outstation one-way (up to 300 km)', seats: '6–7', rate: '₹18/km', fare: '₹5,400' },
      { vehicle: 'Tempo Traveller 12-seater, outstation one-way (up to 300 km)', seats: '12', rate: '₹23/km', fare: '₹6,900' },
    ],
    footnote: 'Local packages: extra kilometres at the vehicle’s per-km rate, extra hours as published. Outstation: tolls, parking and monument parking at actual.',
    waText: 'Hi, I want a cab for a day out from Delhi. Please share the fare for my destination and date.',
    bookHref: '/4hr-40km-local-cab',
    bookLabel: 'Local package details',
    cta: 'Ask for today’s fare',
  },

  galleryTitle: 'The four rings, in pictures',
  gallery: [
    { image: `${IMG}/Delhi/Delhi_hero_section.jpg`, alt: 'Delhi skyline and monuments, the centre of the distance rings', title: 'Ring one: the city itself', text: 'Half-day circuits on the local package.', tag: 'Inside 50 km' },
    { image: `${IMG}/Neemrana/Baori_Step_Well.jpg`, title: 'Ring three: Neemrana’s step-well', text: 'Nine storeys down, five minutes from the fort.', tag: '120 km' },
    { image: `${IMG}/Mathura_Vrindavan/Vishram_Ghat.jpg`, title: 'Ring three: Vishram Ghat', text: 'Evening aarti on the Yamuna at Mathura.', tag: '160 km' },
    { image: `${IMG}/Agra/Taj_mahal.jpg`, title: 'Ring four: the Taj', text: 'Sunrise entry for those who stayed the night.', tag: '230 km' },
    { image: `${IMG}/Nainital/Bhimtal_Lake.jpg`, title: 'Ring four: Bhimtal', text: 'Quieter than Nainital, twenty minutes away.', tag: '300 km' },
  ],

  tips: [
    { title: 'Monday is the museum-closed day', text: 'The Red Fort, Akshardham, the National Museum and most galleries shut on Mondays. Make Monday the Mehrauli, Lodhi Garden and Humayun’s Tomb day; those stay open.' },
    { title: 'Local package first, outstation only past 100 km', text: 'For anything up to Sohna, Manesar or Murthal the 4 hr / 40 km package is the cheaper product. Ask for it by name; it is the same car and driver.' },
    { title: 'Leave from the right side of town', text: 'Tell us your pickup area and we dispatch from that zone; a south Delhi pickup for a Haridwar trip loses an hour before the expressway.' },
  ],

  faqs: [
    { question: 'What are the best places to visit near me if I am in Delhi?', answer: 'Inside the city: Qutub Minar and Mehrauli, Akshardham, the Red Fort and Old Delhi, India Gate and Raj Ghat, all on a half-day local package. Within 200 km: Neemrana, Mathura–Vrindavan, Alwar, Kurukshetra, Bharatpur and Sariska. Within 300 km: Agra, Haridwar, Rishikesh, Chandigarh, Jim Corbett, Jaipur, Mussoorie, Nainital and Kasauli.' },
    { question: 'Which tourist places are within 100 km of Delhi?', answer: 'Sohna and Damdama Lake in the Aravalli ridge south of Gurgaon at about 60 km, Manesar and Sultanpur bird sanctuary at 50 km, and Murthal for the dhabas at 50 km. All of them bill on the local half-day or full-day package; Neemrana, at 120 km, is the first place past the ring and bills as outstation.' },
    { question: 'Which places are within 200 km of Delhi for a day trip?', answer: 'Neemrana at 120 km, Mathura and Vrindavan at 160 km, Alwar at 160 km, Kurukshetra at 170 km, Bharatpur at 185 km and Sariska at 200 km. Each is a two to four hour drive and works as a day trip if you leave by six.' },
    { question: 'Which places are within 300 km of Delhi for a weekend?', answer: 'Agra and Haridwar at 230 km, Rishikesh and Chandigarh at 250 km, Jim Corbett at 260 km, Jaipur at 280 km, Mussoorie at 290 km and Nainital and Kasauli at 300 km. All bill a sedan at ₹3,300 one-way or ₹6,600 for a two-day round trip.' },
    { question: 'How much does a cab cost for a day trip near Delhi?', answer: 'A half-day 4 hour / 40 km sedan package is ₹2,200 and the full-day 8 hour / 80 km package is ₹3,800. Past about 100 km the trip bills as outstation at ₹11/km on a 300 km minimum: ₹3,300 one-way for a sedan, ₹4,500 for an Ertiga and ₹5,400 for an Innova Crysta, and a same-day return is a round trip at twice that, ₹6,600 for a sedan. The same-day tour packages to Neemrana, Mathura–Vrindavan and Kurukshetra have their own published prices.' },
    { question: 'Which places near Delhi are good for a one-day trip with family?', answer: 'Mathura–Vrindavan for temples, Neemrana for the fort and zip line, Bharatpur for birds in winter, Kurukshetra for the Mahabharata sites and Agra for the Taj if you leave at five. Inside the city, Akshardham with the evening water show is the easiest family half-day.' },
    { question: 'Is Agra a day trip or an overnight from Delhi?', answer: 'Both are done. As a day trip it is three hours each way on the Yamuna Expressway with five hours in Agra; as an overnight it gives you the sunrise Taj entry, which is the better version. The Taj is closed on Fridays.' },
    { question: 'Can I get a cab for a few hours to see places near me in Delhi?', answer: 'Yes. The 4 hour / 40 km package at ₹2,200 for a sedan is built for exactly that: a driver and car for a half day of monuments, waiting while you are inside. Extra hours and kilometres are charged at the published rates.' },
  ],

  related: [
    { label: 'Places to visit near Delhi', sub: 'The full 20-place list', href: '/places-to-visit-near-delhi', img: `${IMG}/Delhi/India_Gate.jpg` },
    { label: 'Delhi full-day city tour', sub: '8 hr / 80 km', href: '/sightseeing/delhi-full-day-city-tour', img: `${IMG}/Delhi/red_fort.jpg` },
    { label: 'Local 4 hr / 40 km cab', sub: '₹2,200 sedan', href: '/4hr-40km-local-cab', img: '/images/car/swift_dzire.jpg' },
    { label: 'Same-day Mathura–Vrindavan', sub: 'Yamuna Expressway', href: '/same-day-mathura-vrindavan-from-delhi', img: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg` },
    { label: 'Same-day Agra tour', sub: 'Taj and fort in a day', href: '/same-day-agra-tour-from-delhi', img: `${IMG}/Agra/Taj_mahal.jpg` },
    { label: 'Same-day Neemrana', sub: 'Fort lunch and zip line', href: '/same-day-neemrana-from-delhi', img: `${IMG}/Neemrana/Neemrana_Fort_Palace.jpg` },
    { label: 'Outstation cabs from Delhi', sub: 'Rings three and four', href: '/outstation-cabs/delhi', img: `${IMG}/Jaipur/Hawa_Mahal.jpg` },
    { label: 'Delhi taxi service', sub: 'City hub', href: '/delhi', img: `${IMG}/Delhi/Akshardham_Temple.jpg` },
  ],
  guides: ['weekend-getaways-near-me', 'weekend-getaways-from-gurgaon-by-car', 'noida-weekend-trips', 'ghaziabad-greater-noida-weekend-drives', 'hill-stations-near-gurgaon-noida'],

  schema: {
    places: ['delhi', 'agra', 'mathura', 'jaipur', 'haridwar', 'rishikesh', 'nainital', 'mussoorie'],
  },
};
