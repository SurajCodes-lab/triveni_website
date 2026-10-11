// Week 49 near-city guide — one-day trips from Noida and Greater Noida. A new
// page beside /places-to-visit-near-noida (the place list) and
// /noida-weekend-trips (the one-day and two-day planner): this one answers the
// narrower question of what is honestly out-and-back in a day, grouped by the
// road you take. Every distance, drive time, highlight and best month is the
// one placesToVisitPages.noida publishes; the Agra corridor's distance page and
// the Delhi to Agra and Delhi to Mathura toll pages supply the rest. Fares are
// never typed: each card carries km and the composer computes the sedan fare,
// and the fare block computes the vehicle table from the 300 km minimum.
// No Noida figures exist on the site for Sultanpur, Damdama, Meerut,
// Hastinapur or Sardhana, so they are not on the boards.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'one-day-trips-from-noida',
  path: '/one-day-trips-from-noida',
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'one day trip from noida' },

  eyebrow: 'Day-trip guide · Noida',
  crumbs: [{ name: 'Noida', url: '/noida' }],
  crumbName: 'One-day trips from Noida',
  titleLead: 'One-day trips from Noida:',
  titleAccent: 'out after breakfast, home for dinner',
  title: 'One-Day Trips from Noida: Out After Breakfast, Home for Dinner',
  metaTitle: 'One-Day Trips from Noida by Car: Agra, Mathura, Neemrana',
  metaDescription: 'One-day trips from Noida by car: Mathura in 2 hours, Vrindavan, Agra and Bharatpur in 2.5, Neemrana in 2.5, Alwar in 3, and the long day to Haridwar. Distances, timings, tolls and fares.',
  keywords: ['one day trip from noida', 'day trips from noida', 'one day trip near noida', 'places to visit near noida in one day', 'noida to agra one day trip', 'noida to mathura vrindavan one day', 'day trip from greater noida', 'one day picnic spots near noida'],
  heroImage: `${IMG}/Agra/Taj_mahal.jpg`,
  heroAlt: 'The Taj Mahal at Agra, two and a half hours from Noida on the Yamuna Expressway',

  lead: 'The honest one-day trips from Noida all begin at Pari Chowk, where the Yamuna Expressway starts: Mathura is 145 km and two hours, Vrindavan 155 km and two and a half, Agra 200 km and two and a half, and Bharatpur 155 km and two and a half. Across the city on NH-48, Neemrana is 130 km and two and a half hours and Alwar 170 km and three. Haridwar at 220 km and four and a half hours is the long day, doable in the same-day format and better as a night. Everything here bills the 300 km per day minimum on the rate card: a sedan at ₹11/km, an Ertiga or SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23, with tolls and parking at actual.',
  keyFacts: [
    { label: 'Nearest full day', value: 'Mathura · 145 km · 2 hrs' },
    { label: 'The classic', value: 'Agra · 200 km · 2.5 hrs' },
    { label: 'Across the city', value: 'Neemrana · 130 km · 2.5 hrs' },
    { label: 'Sedan rate', value: '₹11/km · 300 km min' },
  ],
  stickyLabel: 'Noida day-trip cab',
  waText: 'Hi, I need a one-day cab from Noida. Sector, destination and date to follow.',

  intro: [
    'A one-day trip means out and back the same day with enough hours at the far end to make the drive worth it, and from Noida that draws a clear line. Everything down the Yamuna Expressway fits, because the expressway starts at Pari Chowk and Greater Noida is closer to it still. The Aravalli side, Neemrana and Alwar, fits with an early start, because it means crossing the city first. The Uttarakhand side is the long day, and it is on this page with a warning rather than a recommendation. Delhi’s own monuments are the fallback for the day when nobody wants a highway at all.',
    'Every distance, drive time and best month on this page is the one our places-to-visit list for Noida publishes; the Agra figures are also on the Noida to Agra distance page. Fares come from the published rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km and a 12-seater Tempo Traveller ₹23/km, on a 300 km per day minimum, which every trip here bills. Tolls are paid at actual by the driver on FASTag; the Yamuna Expressway plazas are the ones listed on the Delhi to Mathura and Delhi to Agra toll pages.',
  ],

  bands: [
    {
      eyebrow: 'Board one',
      heading: 'Down the Yamuna Expressway: the day trips Noida was built for',
      note: 'The expressway begins at Pari Chowk. Leave Sector 18 by seven, or Greater Noida by half past, and you have five or six hours at any of these before the drive home.',
      places: [
        { name: 'Mathura', image: `${IMG}/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg`, distance: '145 km', time: '2 hrs', km: 145, bestFor: 'Krishna Janmabhoomi, temples', highlights: ['Krishna Janmabhoomi', 'Dwarkadhish Temple', 'Vishram Ghat'], blurb: 'Two hours down the expressway to the Mathura exit. Krishna Janmabhoomi and Dwarkadhish in the morning, the Yamuna at Vishram Ghat in the afternoon, and the evening aarti there if you can leave after dark. October to March is the season.', href: '/noida-to-mathura', cta: 'Cab to Mathura' },
        { name: 'Vrindavan', image: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg`, distance: '155 km', time: '2.5 hrs', km: 155, bestFor: 'Banke Bihari, Prem Mandir', highlights: ['Banke Bihari Temple', 'ISKCON Temple', 'Prem Mandir'], blurb: 'Ten kilometres beyond Mathura and half an hour more, because the last stretch is town road. Banke Bihari before it closes for the afternoon, ISKCON after lunch, Prem Mandir lit at dusk, then the expressway home. Combine with Mathura on the same day.', href: '/same-day-mathura-vrindavan-from-delhi', cta: 'Mathura–Vrindavan day trip' },
        { name: 'Agra', image: `${IMG}/Agra/agra_fort.jpg`, distance: '200 km', time: '2.5 hrs', km: 200, bestFor: 'Taj Mahal, Agra Fort', highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri'], blurb: 'The easiest day trip from Noida, as the distance page says: the expressway all the way and the Taj by ten with a seven o’clock start. The fort after lunch; Fatehpur Sikri only if you leave the fort out. Closed on Fridays.', href: '/noida-to-agra', cta: 'Cab to Agra' },
        { name: 'Bharatpur', image: `${IMG}/Bharatpur/Migratory_Birds.jpg`, distance: '155 km', time: '2.5 hrs', km: 155, bestFor: 'Keoladeo, winter birds', highlights: ['Keoladeo National Park', 'Lohagarh Fort', 'Bird Watching'], blurb: 'Two and a half hours to the gates of Keoladeo. The park is a morning place, so this is the one trip on the board that wants a dawn start; the fort in the afternoon and home by dark. October to February for the migrants.', href: '/one-way-cab/delhi-to-bharatpur', cta: 'Cab to Bharatpur' },
      ],
    },
    {
      eyebrow: 'Board two',
      heading: 'Across the city to the Aravalli side: Neemrana and Alwar',
      note: 'Both mean crossing Delhi to NH-48, which is why they take as long as Agra for fewer kilometres. Leave by six and the city is behind you before it wakes.',
      places: [
        { name: 'Neemrana', image: `${IMG}/Neemrana/Neemrana_Fort_Palace.jpg`, distance: '130 km', time: '2.5 hrs', km: 130, bestFor: 'Fort lunch, zip line', highlights: ['Neemrana Fort Palace', 'Zip-lining', 'Heritage Stay'], blurb: 'The fifteenth-century fort that became a hotel. A morning zip-line over the ramparts, lunch in the fort, the baori step-well in the village, and the drive back before the evening traffic. October to March.', href: '/same-day-neemrana-from-delhi', cta: 'Neemrana day tour' },
        { name: 'Alwar & Sariska', image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Bala_Quila.jpg`, distance: '170 km', time: '3 hrs', km: 170, bestFor: 'Bala Quila, Siliserh, safari', highlights: ['Sariska Tiger Reserve', 'Bala Quila', 'Siliserh Lake'], blurb: 'Three hours to the fort above the town and the lake palace at Siliserh; Sariska is the reason to make it a night rather than a day, because the safaris are at dawn and dusk. As a day trip, the fort, the lake and the museum. October to March.', href: '/sightseeing/delhi-to-alwar-sariska-same-day', cta: 'Alwar–Sariska day trip' },
      ],
    },
    {
      eyebrow: 'Board three',
      heading: 'The long day north: Haridwar and Rishikesh',
      note: 'Four and a half hours each way is nine on the road. It exists as a same-day trip and people do it; the weekend guide is where it belongs.',
      places: [
        { name: 'Haridwar', image: `${IMG}/Haridwar/Har_Ki_Pauri.jpg`, distance: '220 km', time: '4.5 hrs', km: 220, bestFor: 'Har Ki Pauri, Ganga aarti', highlights: ['Har Ki Pauri', 'Ganga Aarti', 'Mansa Devi'], blurb: 'The Ganga aarti is in the evening, which is the whole difficulty: a day trip that includes it gets you home after midnight. The same-day format does Har Ki Pauri and Mansa Devi by day and turns for home; the aarti needs the night. October to June.', href: '/same-day-haridwar-rishikesh-from-delhi', cta: 'Same-day Haridwar–Rishikesh' },
        { name: 'Rishikesh', image: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, distance: '230 km', time: '5 hrs', km: 230, bestFor: 'Rafting, Laxman Jhula', highlights: ['River Rafting', 'Laxman Jhula', 'Bungee Jumping'], blurb: 'Five hours each way makes this a night, not a day. If it must be a day, it is rafting in the morning after a very early start, the jhulas after lunch, and a late return; the two-day version is the one we recommend. September to May for the river.', href: '/noida-to-rishikesh', cta: 'Cab to Rishikesh' },
      ],
    },
    {
      eyebrow: 'Board four',
      heading: 'The fallback: Delhi’s own monuments on the local package',
      note: 'Across the river rather than down the expressway. These run on the Noida local taxi package by the hour rather than on the 300 km outstation minimum.',
      places: [
        { name: 'Akshardham and the Yamuna bank', image: `${IMG}/Delhi/Akshardham_Temple.jpg`, note: 'Local package', bestFor: 'Nearest to Noida', highlights: ['Akshardham', 'Raj Ghat', 'Red Fort'], blurb: 'The nearest of the city’s sights to Noida, just across the river, with Raj Ghat and the Red Fort a short run further in. Akshardham is closed on Mondays; the fort is closed on Mondays too.', href: '/local-taxi/noida', cta: 'Noida local cab' },
        { name: 'Humayun’s Tomb and Qutub Minar', image: `${IMG}/Delhi/Humayun's_Tomb.jpg`, note: 'Local package', bestFor: 'Two monuments, one morning', highlights: ['Humayun’s Tomb', 'Qutub Minar', 'Lotus Temple'], blurb: 'The two great monuments of south Delhi in a morning, with the Lotus Temple between them, and lunch in the city before the car brings you back over the DND. The best of the fallback days.', href: '/sightseeing/delhi', cta: 'Delhi sightseeing' },
        { name: 'India Gate and the centre', image: `${IMG}/Delhi/India_Gate.jpg`, note: 'Local package', bestFor: 'An evening out', highlights: ['India Gate', 'Rajpath lawns', 'Connaught Place'], blurb: 'For an evening rather than a day: India Gate lit up, the lawns, and dinner in Connaught Place with the car waiting. The local package is priced by the hour and the kilometre, which suits it.', href: '/local-taxi/noida', cta: 'Noida local cab' },
      ],
    },
  ],

  table: {
    title: 'One-day trips from Noida: distance, time and when to leave',
    caption: 'Distance from Noida, drive time, the road used, a planned departure and the best months for each one-day trip from Noida',
    intro: 'Distances and drive times are from our places-to-visit list for Noida. Departure times are the schedules our drivers plan to, not a promise about traffic. Every trip on the table bills the 300 km per day minimum at the vehicle’s rate; the fare box further down shows the figures.',
    columns: [
      { key: 'place', label: 'Destination' },
      { key: 'road', label: 'Road' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'leave', label: 'Leave by' },
      { key: 'season', label: 'Best months', strong: true },
    ],
    rows: [
      { place: 'Mathura', road: 'Yamuna Expressway', distance: '145 km', time: '2 hrs', leave: '7 am', season: 'Oct–Mar' },
      { place: 'Vrindavan', road: 'Yamuna Expressway, then town road', distance: '155 km', time: '2.5 hrs', leave: '7 am', season: 'Oct–Mar' },
      { place: 'Bharatpur', road: 'Yamuna Expressway, then across', distance: '155 km', time: '2.5 hrs', leave: '5 am for the park', season: 'Oct–Feb' },
      { place: 'Agra', road: 'Yamuna Expressway', distance: '200 km', time: '2.5 hrs', leave: '7 am', season: 'Oct–Mar' },
      { place: 'Neemrana', road: 'Across the city, NH-48', distance: '130 km', time: '2.5 hrs', leave: '6 am', season: 'Oct–Mar' },
      { place: 'Alwar', road: 'Across the city, NH-48', distance: '170 km', time: '3 hrs', leave: '6 am', season: 'Oct–Mar' },
      { place: 'Haridwar', road: 'Meerut expressway, NH-334', distance: '220 km', time: '4.5 hrs', leave: '5 am, and expect a late return', season: 'Oct–Jun' },
      { place: 'Rishikesh', road: 'Meerut expressway, NH-334', distance: '230 km', time: '5 hrs', leave: 'Better as a night', season: 'Sep–May' },
      { place: 'Delhi monuments', road: 'DND across the river', distance: 'Local', time: 'Under an hour', leave: 'Any time; Mondays close the monuments', season: 'Oct–Mar' },
    ],
    footnote: 'Sedan ₹11/km on a 300 km per day minimum. Tolls at actual on FASTag: the Delhi to Mathura toll page lists the Jewar plaza at ₹155 for a car, and the Delhi to Agra toll page adds the Mathura plaza at ₹130, ₹285 one-way to Agra. Delhi sightseeing runs on the Noida local taxi package.',
  },

  sections: [
    {
      eyebrow: 'Why Noida',
      heading: 'Which day trips from Noida are honestly doable in one day?',
      paras: [
        'The ones down the Yamuna Expressway, without much argument. The expressway begins at Pari Chowk, and from Sector 18 you are on it inside half an hour; from Greater Noida, sooner. That is why our places-to-visit list for Noida calls Agra the easiest day trip from the city and puts Mathura at two hours, and why Vrindavan and Bharatpur, both at two and a half, sit on the same board. Five hours of driving in a day leaves six or seven hours at the far end, which is a full day out by any measure.',
        'The Aravalli side works too, at a cost. Neemrana at 130 km and Alwar at 170 km take as long as Agra because the drive begins by crossing Delhi to reach NH-48, and the whole day depends on being through the city before seven. The Uttarakhand side does not work as a day, whatever the same-day pages allow: Haridwar is four and a half hours each way and its evening aarti is the reason to go, and the two together mean a night. That is what the Noida weekend guide is for.',
      ],
      image: { src: `${IMG}/Mathura_Vrindavan/Banke_Bihari_Temple.jpg`, alt: 'Banke Bihari temple in the lanes of Vrindavan', tag: 'Vrindavan · 155 km', caption: 'Vrindavan is two and a half hours from Noida, and the last stretch is the town road that adds the half hour.' },
    },
    {
      eyebrow: 'The Agra day',
      heading: 'How do I do Agra from Noida in one day without rushing?',
      paras: [
        'Leave Sector 18 at seven, or Greater Noida at half past, and you are at the Taj by ten with the expressway behind you; the distance page puts the run at 200 km and two and a half to three hours, and the earlier start beats the tour buses to the east gate. Give the Taj until noon, eat near the fort, and do the fort from one to three. That leaves a choice for the last two hours: Mehtab Bagh across the river for the late-afternoon view of the Taj, or Fatehpur Sikri, which is a drive west of the city and fits only if the fort is left out.',
        'Back on the expressway by five and you are home by eight. The Taj is closed on Fridays, and the moonlight viewings around the full moon are ticketed separately and do not fit a day trip; the same-day Agra tour page from Noida lists what fits in the day and what does not, and the driver plans the departure around the first monument you want to see.',
      ],
      link: { label: 'Same-day Agra tour from Noida', href: '/same-day-agra-tour-from-noida' },
    },
    {
      eyebrow: 'The Braj day',
      heading: 'Can I do Mathura and Vrindavan from Noida in one day?',
      paras: [
        'Yes, and it is the best-value day on this page, because the two towns are ten kilometres apart and the expressway does the rest. Mathura is 145 km and two hours; Vrindavan is 155 km and two and a half, the extra half hour being the town road at the end. The order matters: Banke Bihari in Vrindavan closes for the afternoon, so go there first while the morning darshan is on, then ISKCON, then back to Mathura for Krishna Janmabhoomi and Dwarkadhish after lunch, and Vishram Ghat on the Yamuna towards evening.',
        'If you can leave after dark, Prem Mandir in Vrindavan is lit in the evening and worth the late return; the expressway is quick at night and the driver is used to it. Around Holi and Janmashtami the towns are walled in with traffic and the car stops at the edge; on those days the day trip becomes a walking day, and it is still worth it.',
      ],
      link: { label: 'Same-day Mathura and Vrindavan trip', href: '/same-day-mathura-vrindavan-from-delhi' },
      image: { src: `${IMG}/Mathura_Vrindavan/Vishram_Ghat.jpg`, alt: 'Vishram Ghat on the Yamuna at Mathura', tag: 'Mathura · 145 km', side: 'left', caption: 'Vishram Ghat towards evening, the last stop of the Braj day before the expressway home.' },
    },
    {
      eyebrow: 'Cost and tolls',
      heading: 'What does a one-day cab from Noida cost, and what are the tolls?',
      paras: [
        'Every trip on this page is under 300 km one-way, and outstation cabs bill a 300 km per day minimum, so every one of them costs the same for a given car: the minimum at the vehicle’s rate, ₹11/km for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller. Fuel and the driver are inside those figures; tolls and parking are extra at actual. The fare box below does the arithmetic, and the same box shows what a second day costs if a day trip turns into a night.',
        'Tolls are the one variable. The Yamuna Expressway is where most of them are: the Delhi to Mathura toll page lists the Jewar plaza at ₹155 for a car, and the Delhi to Agra toll page adds the Mathura plaza at ₹130, so Agra is ₹285 one-way for a sedan and Mathura or Vrindavan is ₹155. The NH-48 plazas towards Neemrana and Alwar are paid at actual on the driver’s FASTag and appear on the bill as charged. Delhi sightseeing is the exception to all of this: it runs on the Noida local taxi package, by the hour and the kilometre, and that page has its own price.',
      ],
      link: { label: 'Outstation cabs from Noida', href: '/outstation-cabs/noida' },
    },
    {
      eyebrow: 'Season',
      heading: 'Which one-day trip from Noida suits which month?',
      paras: [
        'October to March is the season for almost the whole page. Our places list gives those months for Agra, Mathura, Vrindavan, Neemrana and Alwar, and October to February for the birds at Bharatpur, when Keoladeo fills with migrants. The plains are cool, the expressway is clear except for the fog mornings of December and January, and the monuments are at their best in the low winter light. From April the same list turns hot, and the day trips become early-morning trips: the Taj at opening time and home by lunch is a real summer plan.',
        'Haridwar runs October to June on the list and Rishikesh September to May, which is the rafting season, and both are better as the first night of a weekend than as a day. In the monsoon the Braj towns are green and quiet and Janmashtami falls in it; Delhi’s monuments are the fallback for a wet weekend, and Mondays are the day to avoid, when most of them close.',
      ],
      image: { src: `${IMG}/Bharatpur/Bird_Sanctuary.jpg`, alt: 'Keoladeo National Park at Bharatpur in winter', tag: 'Bharatpur · Oct–Feb', caption: 'Keoladeo is a winter morning: the one day trip on the page that wants a dawn start.' },
    },
  ],

  fare: {
    title: 'A day out from Noida',
    note: 'Every trip on this page bills the 300 km per day minimum, so the one-day column is what Mathura, Agra, Neemrana or Alwar costs for the day. The two-day column is what the same trip costs if it becomes a night away. Fuel and driver included; tolls and parking at actual.',
    caption: 'One-day and two-day cab fare from Noida by vehicle',
    distanceKm: 300,
    roundTrip: true,
    days: 2,
    oneWayLabel: 'One-day trip',
    roundLabel: 'Two-day trip',
    footnote: '300 km per day minimum. Delhi sightseeing runs on the Noida local taxi package instead, priced by the hour and the kilometre on that page.',
    waText: 'Hi, I want a one-day cab from Noida. Sector, destination, date and headcount to follow.',
    bookHref: '/outstation-cabs/noida',
    bookLabel: 'Outstation cabs from Noida',
    cta: 'Get a Noida day-trip quote',
  },

  galleryTitle: 'What a day from Noida looks like',
  gallery: [
    { image: `${IMG}/Agra/Mehtab_Bagh.jpg`, title: 'Mehtab Bagh, Agra', text: 'The late-afternoon Taj from across the river, before the drive home.', tag: 'Agra · 200 km' },
    { image: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg`, title: 'Prem Mandir, Vrindavan', text: 'Lit in the evening; worth the late return.', tag: 'Vrindavan · 155 km' },
    { image: `${IMG}/Neemrana/Neemrana_Zip_Line.jpg`, title: 'The zip line, Neemrana', text: 'The morning over the ramparts, then lunch in the fort.', tag: 'Neemrana · 130 km' },
    { image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Siliserh_Lake.jpg`, title: 'Siliserh Lake, Alwar', text: 'The lake palace outside the town, three hours from Noida.', tag: 'Alwar · 170 km' },
    { image: `${IMG}/Delhi/Outub_Minar.jpg`, title: 'Qutub Minar', text: 'The fallback: south Delhi’s monuments on the local package.', tag: 'Delhi · local' },
  ],

  tips: [
    { title: 'Be past Pari Chowk by half past seven', text: 'The Noida Expressway is clear at seven and crawling at nine. For the Yamuna Expressway board the whole day rests on that half hour; Greater Noida pickups start with it won.' },
    { title: 'Fridays close the Taj, Mondays close Delhi', text: 'Make a Friday the Mathura day and a Saturday the Agra day. Most of Delhi’s monuments, including Akshardham and the Red Fort, are shut on Mondays.' },
    { title: 'Bharatpur is a dawn start', text: 'Keoladeo is a morning park. Leave at five, be at the gate as it opens, and give the fort the afternoon; leave at eight and you have missed the birds.' },
    { title: 'Tell us the sector', text: 'Noida, Greater Noida, Noida Extension and the expressway sectors all dispatch from the Noida zone. Naming the sector puts the driver at the gate on time and tells us which expressway entry to plan for.' },
  ],

  faqs: [
    { question: 'What are the best one-day trips from Noida?', answer: 'Down the Yamuna Expressway: Mathura at 145 km and two hours, Vrindavan and Bharatpur at 155 km and two and a half, and Agra at 200 km and two and a half. Across the city on NH-48: Neemrana at 130 km and two and a half hours and Alwar at 170 km and three. Haridwar, at 220 km and four and a half hours, is the long day and better as a night.' },
    { question: 'Which places near Noida can I visit in one day and be home by dinner?', answer: 'Anything on the Yamuna Expressway: Mathura, Vrindavan, Agra and Bharatpur are all within two and a half hours of Sector 18 with a seven o’clock start, which leaves five or six hours at the far end and a return by eight. Neemrana and Alwar work with a six o’clock start, because the drive begins by crossing Delhi.' },
    { question: 'How far is Agra from Noida, and how long does the drive take?', answer: '200 km and two and a half hours on the Yamuna Expressway, which starts at Pari Chowk in Greater Noida; our distance page gives two and a half to three. The Delhi to Agra toll page lists two plazas on the way, Jewar at ₹155 and Mathura at ₹130 for a car, ₹285 one-way.' },
    { question: 'Can I do Mathura and Vrindavan from Noida in a single day?', answer: 'Yes. Mathura is two hours and Vrindavan two and a half, and the towns are ten kilometres apart. Do Banke Bihari in Vrindavan first, before it closes for the afternoon, then ISKCON, then Mathura for Krishna Janmabhoomi and Vishram Ghat; if you can leave after dark, Prem Mandir is lit in the evening.' },
    { question: 'How much does a one-day cab from Noida cost?', answer: 'Every trip on this page is under 300 km one-way and bills the 300 km per day minimum, so for a given car they all cost the same: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, with tolls and parking extra at actual. The fare box on this page shows the figure for each vehicle, and what a second day adds.' },
    { question: 'Is Haridwar a one-day trip from Noida?', answer: 'Only in the same-day format, and we do not recommend it. Haridwar is 220 km and four and a half hours each way, and the Ganga aarti at Har Ki Pauri is in the evening, so a day trip either misses the aarti or gets home after midnight. Stay the night and add Rishikesh on the second day; the Noida weekend guide covers that trip.' },
    { question: 'What is the nearest one-day trip from Greater Noida?', answer: 'Mathura, at 145 km and two hours from Noida and a little less from Greater Noida, because Pari Chowk is where the Yamuna Expressway begins. Vrindavan, Bharatpur and Agra follow at two and a half hours. Greater Noida pickups save the Noida Expressway stretch and start the day with the slow part already done.' },
    { question: 'Do you pick up from Noida Extension and the Yamuna Expressway sectors?', answer: 'Yes. Noida, Greater Noida, Noida Extension and the sectors along the Yamuna Expressway are all in the Noida dispatch zone, and the driver comes to the gate. Share the sector when booking so the departure can be planned around the nearest expressway entry.' },
  ],

  related: [
    { label: 'Outstation cabs from Noida', sub: 'All corridors, all vehicles', href: '/outstation-cabs/noida', img: '/images/car/ertiga.jpg' },
    { label: 'Noida to Agra cab', sub: '200 km · Yamuna Expressway', href: '/noida-to-agra', img: `${IMG}/Agra/Taj_mahal.jpg` },
    { label: 'Noida to Mathura cab', sub: '145 km · 2 hours', href: '/noida-to-mathura', img: `${IMG}/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg` },
    { label: 'Same-day Agra tour from Noida', sub: 'The Taj, the fort and home by eight', href: '/same-day-agra-tour-from-noida', img: `${IMG}/Agra/agra_fort.jpg` },
    { label: 'Same-day Mathura and Vrindavan', sub: 'Both towns in one day', href: '/same-day-mathura-vrindavan-from-delhi', img: `${IMG}/Mathura_Vrindavan/ISKCON_Vrindavan.jpg` },
    { label: 'Places to visit near Noida', sub: 'The full place list', href: '/places-to-visit-near-noida', img: `${IMG}/Delhi/Akshardham_Temple.jpg` },
    { label: 'Noida local taxi', sub: 'By the hour, for the Delhi day', href: '/local-taxi/noida', img: '/images/car/swift_dzire.jpg' },
    { label: 'Greater Noida cab service', sub: 'Pickups from Pari Chowk and beyond', href: '/greater-noida', img: `${IMG}/Delhi/Delhi_hero_section.jpg` },
  ],
  guides: ['noida-weekend-trips', 'ghaziabad-greater-noida-weekend-drives', 'hill-stations-near-gurgaon-noida', 'delhi-to-vrindavan-by-car', 'weekend-getaways-near-me'],

  schema: {
    places: ['noida', 'agra', 'mathura', 'vrindavan', 'bharatpur', 'neemrana', 'alwar', 'haridwar'],
  },
};
