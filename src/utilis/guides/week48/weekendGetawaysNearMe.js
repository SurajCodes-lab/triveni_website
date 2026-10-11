// Week 48 guide 1 — "weekend getaways near me" (4,153 impressions a quarter,
// position 5.8, four clicks). One canonical near-me page for the intent,
// organised by drive time from anywhere in Delhi NCR rather than by a single
// origin, so it does not compete with /weekend-getaways-from-delhi-by-car.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'weekend-getaways-near-me',
  path: '/weekend-getaways-near-me',
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'weekend getaways near me', impressions: 4153, position: 5.8 },

  eyebrow: 'Weekend guide · Delhi NCR',
  crumbs: [{ name: 'Weekend getaways', url: '/weekend-getaways-from-delhi-by-car' }],
  crumbName: 'Weekend getaways near me',
  titleLead: 'Weekend getaways near me:',
  titleAccent: 'Delhi NCR, sorted by drive time',
  title: 'Weekend Getaways Near Me: Delhi NCR, Sorted by Drive Time',
  metaTitle: 'Weekend Getaways Near Me: Delhi NCR by Drive Time 2026',
  metaDescription: 'The best weekend getaways near Delhi NCR sorted by drive time: under 3 hours, 3 to 5 hours and overnight hill trips. Distance, drive time, sedan fare from ₹11/km and the right road out of the NCR.',
  keywords: ['weekend getaways near me', 'weekend getaways near delhi', 'weekend trip near me by car', 'short trips from delhi ncr', 'places to visit this weekend near delhi', 'weekend getaways from gurgaon noida ghaziabad'],
  heroImage: `${IMG}/Nainital/Naini_Lake.jpg`,
  heroAlt: 'Naini Lake at Nainital, one of the classic weekend getaways from Delhi NCR',

  lead: 'If you are anywhere in Delhi NCR, the best weekend getaways within a comfortable drive fall into three bands: Neemrana, Mathura–Vrindavan and Alwar within about three hours; Agra, Bharatpur, Jaipur, Haridwar, Rishikesh and Jim Corbett in three to five and a half; and Mussoorie, Nainital, Lansdowne and Kasauli for a two-night hill trip of about six hours or more. A sedan is ₹11/km with a 300 km per day minimum, so a two-day weekend to any of the first two bands starts at ₹6,600 for the car, fuel and driver.',
  keyFacts: [
    { label: 'Up to 3 hours', value: '3 escapes' },
    { label: '3 to 5.5 hours', value: '8 classics' },
    { label: 'Two-night trips', value: '7 destinations' },
    { label: 'Sedan, 2-day weekend', value: 'from ₹6,600' },
  ],
  stickyLabel: 'Weekend cab',
  waText: 'Hi, I want a weekend cab from Delhi NCR. Please share the fare for my destination and dates.',

  intro: [
    'This is a “near me” page for the whole National Capital Region, not a list written for one origin. The drive times below are from the edge of the region nearest each destination, and every band tells you which expressway carries you there so you can judge how much of the journey is spent leaving the city.',
    'Every fare on the page comes from the published rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km and a 12-seater Tempo Traveller ₹23/km, billed on a 300 km per day minimum with tolls and parking extra at actual. There is no weekend or festival surcharge. The 4 hour / 40 km local package at ₹2,200 only applies to runs under about 100 km, and nothing on this page is that close: every destination here is an outstation trip.',
  ],

  bands: [
    {
      eyebrow: 'Band one',
      heading: 'Up to three hours: leave after breakfast, arrive before lunch',
      note: 'The southern and western edges of the NCR sit on NH-48 and the Yamuna Expressway, so Gurgaon, Faridabad and Noida reach these places without crossing Delhi at all.',
      places: [
        { name: 'Neemrana', image: `${IMG}/Neemrana/Neemrana_Fort_Palace.jpg`, distance: '125 km', time: '2 hrs', km: 125, bestFor: 'Fort-palace stay, zip line', highlights: ['Neemrana Fort Palace', 'Baori step-well', 'Flying Fox zip line'], blurb: 'A fifteenth-century fort on the Delhi–Jaipur highway, now a heritage hotel. Most people do lunch, the ramparts and the zip line and drive back the same evening; an overnight stay turns it into the easiest fort weekend from Gurgaon.', href: '/one-way-cab/delhi-to-neemrana', cta: 'Cab to Neemrana' },
        { name: 'Mathura & Vrindavan', image: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg`, distance: '180 km', time: '2.5–3 hrs', km: 180, bestFor: 'Temples, evening aarti', highlights: ['Banke Bihari', 'Prem Mandir', 'Vishram Ghat aarti'], blurb: 'Straight down the Yamuna Expressway from Noida. Banke Bihari opens for darshan in the morning and again after five; Prem Mandir is lit from dusk, so the classic plan is temples in the morning, rest at midday, Prem Mandir at sunset and Vishram Ghat aarti before the drive home.', href: '/delhi-to-mathura', cta: 'Cab to Mathura' },
        { name: 'Alwar & Siliserh', image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Siliserh_Lake.jpg`, distance: '165 km', time: '3 hrs', km: 165, bestFor: 'Lake, fort, quiet', highlights: ['Bala Quila', 'Siliserh Lake', 'City Palace museum'], blurb: 'The quiet alternative to Jaipur: a hill fort above the town, a lake palace hotel at Siliserh and almost no crowds. Sariska tiger reserve is thirty-five kilometres on, which is why Alwar makes a better overnight than a day trip.', href: '/one-way-cab/delhi-to-alwar', cta: 'Cab to Alwar' },
      ],
    },
    {
      eyebrow: 'Band two',
      heading: 'Three to five and a half hours: the weekend classics',
      note: 'These are the destinations the NCR empties into on a Friday evening. Leave by six in the morning or after nine at night and the expressways are yours.',
      places: [
        { name: 'Bharatpur', image: `${IMG}/Bharatpur/Migratory_Birds.jpg`, distance: '220 km', time: '3–3.5 hrs', km: 220, bestFor: 'Birds, winter mornings', highlights: ['Keoladeo National Park', 'Lohagarh Fort', 'Deeg palaces'], blurb: 'Keoladeo is a wetland the size of a small town, and between November and February it fills with migratory birds. Cycle-rickshaw guides inside the park know every nest; go at dawn, be done by eleven, and add Fatehpur Sikri on the way back if you came via Agra.', href: '/one-way-cab/delhi-to-bharatpur', cta: 'Cab to Bharatpur' },
        { name: 'Agra', image: `${IMG}/Agra/Taj_mahal.jpg`, distance: '230 km', time: '3–3.5 hrs', km: 230, bestFor: 'Taj at sunrise', highlights: ['Taj Mahal', 'Agra Fort', 'Mehtab Bagh sunset'], blurb: 'The Yamuna Expressway makes Agra a genuine day trip from Noida and Greater Noida, but the Taj at sunrise is the reason to stay a night. Fatehpur Sikri is forty kilometres west and fits the second morning.', href: '/delhi-to-agra', cta: 'Cab to Agra' },
        { name: 'Jaipur', image: `${IMG}/Jaipur/Hawa_Mahal.jpg`, distance: '280 km', time: '4.5–5 hrs', km: 280, bestFor: 'Forts, bazaars', highlights: ['Amber Fort', 'Hawa Mahal', 'Nahargarh sunset'], blurb: 'NH-48 all the way from Gurgaon. Two nights is right: Amber and the old city on day one, Nahargarh for sunset, Johari Bazaar after dark, and a lazy second day around the City Palace and Jantar Mantar before the drive back.', href: '/delhi-to-jaipur', cta: 'Cab to Jaipur' },
        { name: 'Haridwar', image: `${IMG}/Haridwar/Ganga_Aarti.jpg`, distance: '230 km', time: '4–4.5 hrs', km: 230, bestFor: 'Ganga aarti', highlights: ['Har Ki Pauri', 'Mansa Devi ropeway', 'Chandi Devi'], blurb: 'From Ghaziabad the Delhi–Meerut Expressway and NH-334 take you to the Ganga in about four hours. Aim to be at Har Ki Pauri by six in the evening for the aarti; the ropeway to Mansa Devi fills the next morning.', href: '/one-way-cab/delhi-to-haridwar', cta: 'Cab to Haridwar' },
        { name: 'Rishikesh', image: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, distance: '250 km', time: '5 hrs', km: 250, bestFor: 'Rafting, cafés, yoga', highlights: ['Laxman Jhula', 'Rafting from Shivpuri', 'Triveni Ghat aarti'], blurb: 'Twenty-five kilometres beyond Haridwar along the river. Rafting runs from Shivpuri between September and June; the Tapovan café strip and the Beatles Ashram fill the afternoon, and the ghats are quieter than Haridwar for the evening aarti.', href: '/delhi-to-rishikesh', cta: 'Cab to Rishikesh' },
        { name: 'Jim Corbett', image: `${IMG}/Jim_Corbett/Tiger_Safari_Corbett.jpg`, distance: '260 km', time: '5–5.5 hrs', km: 260, bestFor: 'Safari, riverside resorts', highlights: ['Dhikala zone', 'Jeep safari', 'Corbett Falls'], blurb: 'Via Moradabad and Kashipur from Ghaziabad. Safari permits are per slot and sell out on weekends, so book the safari before the cab. Bijrani and Jhirna zones open through most of the year; Dhikala from mid-November to mid-June.', href: '/delhi-to-jim-corbett', cta: 'Cab to Corbett' },
        { name: 'Chandigarh', image: `${IMG}/Chandigarh/Rock_Garden.jpg`, distance: '250 km', time: '4–4.5 hrs', km: 250, bestFor: 'Planned city, Sukhna Lake', highlights: ['Rock Garden', 'Sukhna Lake', 'Rose Garden'], blurb: 'A straight run up NH-44. Chandigarh is the calmest city weekend in the north and the doorway to Kasauli, Morni and Shimla, which is why many people make it night one of a longer trip rather than a destination on its own.', href: '/delhi-to-chandigarh', cta: 'Cab to Chandigarh' },
        { name: 'Dehradun', image: `${IMG}/Dehradun/Sahastradhara.jpg`, distance: '255 km', time: '5–5.5 hrs', km: 255, bestFor: 'Robber’s Cave, FRI', highlights: ['Sahastradhara', 'Robber’s Cave', 'Forest Research Institute'], blurb: 'The Delhi–Dehradun Expressway has cut this drive sharply. Dehradun on its own is a gentle weekend; most people pair it with Mussoorie, thirty-five kilometres up the hill, for the second night.', href: '/one-way-cab/delhi-to-dehradun', cta: 'Cab to Dehradun' },
      ],
    },
    {
      eyebrow: 'Band three',
      heading: 'About six hours and more: the long-weekend trips that need two nights',
      note: 'Anything in this band is a long-weekend trip. Book the driver for three days, leave on Friday night or before dawn on Saturday, and come back on Monday.',
      places: [
        { name: 'Mussoorie', image: `${IMG}/Mussoorie/Kempty_Falls.jpg`, distance: '290 km', time: '6–6.5 hrs', km: 290, bestFor: 'Mall Road, waterfalls', highlights: ['Kempty Falls', 'Gun Hill', 'Lal Tibba'], blurb: 'The closest full hill station to the NCR. The climb from Dehradun is thirty-five kilometres of hairpins, so the last hour is slow; the reward is a Mall Road evening and a Landour morning walk.', href: '/delhi-to-mussoorie', cta: 'Cab to Mussoorie' },
        { name: 'Nainital', image: `${IMG}/Nainital/Snow_View_Point.jpg`, distance: '300 km', time: '6.5–7 hrs', km: 300, bestFor: 'Lake, ropeway, Bhimtal', highlights: ['Naini Lake', 'Snow View Point', 'Bhimtal and Sattal'], blurb: 'Via Moradabad and Haldwani. The lake is the whole town; boating in the morning, the ropeway to Snow View after lunch, and the quieter lakes of Bhimtal, Sattal and Naukuchiatal on the second day.', href: '/delhi-to-nainital', cta: 'Cab to Nainital' },
        { name: 'Lansdowne', image: `${IMG}/Lansdowne/Bhulla_Lake.jpg`, distance: '270 km', time: '6 hrs', km: 270, bestFor: 'Quiet, pine forest', highlights: ['Bhulla Lake', 'Tip-n-Top', 'St Mary’s Church'], blurb: 'A cantonment town with no Mall Road and no crowds. The road from Kotdwar is narrow but empty. Choose it when the point of the weekend is to hear nothing.', href: '/one-way-cab/delhi-to-lansdowne', cta: 'Cab to Lansdowne' },
        { name: 'Kasauli', image: `${IMG}/Kasauli/Kasauli_Monkey_Point.jpg`, distance: '290 km', time: '5.5–6 hrs', km: 290, bestFor: 'Colonial walks', highlights: ['Monkey Point', 'Christ Church', 'Upper Mall walk'], blurb: 'Just off the Chandigarh–Shimla highway and a full hour closer than Shimla. Kasauli is a walking town: the Upper and Lower Mall loop, Monkey Point for the view and Gilbert Trail for the birds.', href: '/delhi-to-kasauli', cta: 'Cab to Kasauli' },
        { name: 'Shimla', image: `${IMG}/Shimla/shimla_hero_section.jpg`, distance: '350 km', time: '7–7.5 hrs', km: 350, bestFor: 'Ridge, Kufri, snow', highlights: ['The Ridge', 'Jakhoo Temple', 'Kufri'], blurb: 'The four-lane highway now runs past Kalka, and the climb from Parwanoo is a proper mountain road. Shimla in December brings the first snow of the season within a day’s drive of Delhi.', href: '/delhi-to-shimla', cta: 'Cab to Shimla' },
        { name: 'Amritsar', image: `${IMG}/Amritsar/Golden_Temple.jpg`, distance: '450 km', time: '7.5–8 hrs', km: 450, bestFor: 'Golden Temple, Wagah', highlights: ['Golden Temple', 'Wagah ceremony', 'Jallianwala Bagh'], blurb: 'Six-lane GT Road the whole way. Leave Delhi at five, reach by early afternoon, do the Wagah retreat ceremony at sunset and the Golden Temple after dark, when it is at its most beautiful and least crowded.', href: '/delhi-to-amritsar', cta: 'Cab to Amritsar' },
        { name: 'Dharamshala', image: `${IMG}/Dharamshala/McLeod_Ganj.jpg`, distance: '475 km', time: '9–10 hrs', km: 475, bestFor: 'McLeodganj, Triund', highlights: ['Dalai Lama Temple', 'Bhagsu waterfall', 'Triund trek'], blurb: 'The furthest of the classic long-weekend hills. Leave on Friday night, sleep in the car through Punjab, and wake to the Dhauladhar. Three nights is the honest minimum.', href: '/delhi-to-dharamshala', cta: 'Cab to Dharamshala' },
      ],
    },
  ],

  table: {
    title: 'Weekend getaways near Delhi NCR, by drive time',
    caption: 'Distance, drive time and sedan fare for the main weekend getaways from Delhi NCR',
    intro: 'One-way distance from the nearest edge of the NCR. Sedan fares follow the published ₹11/km rate with a 300 km per day minimum; the two-day figure is what a Saturday-to-Sunday round trip bills.',
    columns: [
      { key: 'place', label: 'Destination' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'The road out' },
      { key: 'sedan', label: 'Sedan, 2-day weekend', align: 'right', strong: true },
    ],
    rows: [
      { place: 'Neemrana', distance: '125 km', time: '2 hrs', road: 'NH-48 from Gurgaon', sedan: '₹6,600' },
      { place: 'Alwar', distance: '165 km', time: '3 hrs', road: 'NH-48 then NH-248A', sedan: '₹6,600' },
      { place: 'Mathura–Vrindavan', distance: '180 km', time: '2.5–3 hrs', road: 'Yamuna Expressway from Noida', sedan: '₹6,600' },
      { place: 'Bharatpur', distance: '220 km', time: '3–3.5 hrs', road: 'Yamuna Expressway, Mathura', sedan: '₹6,600' },
      { place: 'Agra', distance: '230 km', time: '3–3.5 hrs', road: 'Yamuna Expressway', sedan: '₹6,600' },
      { place: 'Haridwar', distance: '230 km', time: '4–4.5 hrs', road: 'Delhi–Meerut Expressway, NH-334', sedan: '₹6,600' },
      { place: 'Rishikesh', distance: '250 km', time: '5 hrs', road: 'Delhi–Meerut Expressway, NH-334', sedan: '₹6,600' },
      { place: 'Chandigarh', distance: '250 km', time: '4–4.5 hrs', road: 'NH-44', sedan: '₹6,600' },
      { place: 'Jim Corbett', distance: '260 km', time: '5–5.5 hrs', road: 'NH-9 via Moradabad', sedan: '₹6,600' },
      { place: 'Jaipur', distance: '280 km', time: '4.5–5 hrs', road: 'NH-48 from Gurgaon', sedan: '₹6,600' },
      { place: 'Mussoorie', distance: '290 km', time: '6–6.5 hrs', road: 'Delhi–Dehradun Expressway', sedan: '₹6,600' },
      { place: 'Nainital', distance: '300 km', time: '6.5–7 hrs', road: 'NH-9 via Moradabad, Haldwani', sedan: '₹6,600' },
      { place: 'Kasauli', distance: '290 km', time: '5.5–6 hrs', road: 'NH-44, NH-5 from Zirakpur', sedan: '₹6,600' },
      { place: 'Shimla', distance: '350 km', time: '7–7.5 hrs', road: 'NH-44, NH-5 via Kalka', sedan: '₹7,700' },
      { place: 'Amritsar', distance: '450 km', time: '7.5–8 hrs', road: 'NH-44 (GT Road)', sedan: '₹9,900' },
      { place: 'Dharamshala', distance: '475 km', time: '9–10 hrs', road: 'NH-44, NH-503 via Una', sedan: '₹10,450' },
    ],
    footnote: 'Two-day fare = the greater of twice the one-way fare or 2 × 300 km × ₹11. Tolls, parking and hill-state entry fees are paid at actual. A third day adds ₹3,300 for a sedan.',
  },

  sections: [
    {
      eyebrow: 'One night',
      heading: 'Where should I go this weekend from Delhi NCR if I only have one night?',
      paras: [
        'Stay inside the first two bands. Agra, Neemrana, Mathura–Vrindavan, Alwar and Bharatpur all work as a Saturday-morning departure and a Sunday-evening return with a full day in between, and none of them punishes you with a five-hour drive home on Sunday night. Haridwar and Rishikesh also fit one night if you leave Delhi before six on Saturday: you are at the Ganga by lunch, at the aarti by evening, and back on the expressway after a morning on the ghats.',
        'The mistake people make with one night is choosing a hill station. Mussoorie and Nainital are six to seven hours each way, so a one-night trip is thirteen hours of driving for one evening on the Mall Road. Save the hills for a long weekend and give them two nights; the long weekend calendar for 2026 lists every one that remains this year.',
      ],
      link: { label: 'See the 2026 long weekend calendar', href: '/long-weekend-calendar-2026' },
      image: { src: `${IMG}/Agra/Mehtab_Bagh.jpg`, alt: 'The Taj Mahal seen across the Yamuna from Mehtab Bagh at sunset', tag: 'Agra · 230 km', caption: 'Mehtab Bagh, across the river from the Taj: the sunset view that makes Agra worth a night rather than a day.' },
    },
    {
      eyebrow: 'Which road',
      heading: 'Which weekend getaways work from Gurgaon, Noida and Ghaziabad without crossing Delhi?',
      paras: [
        'The region has three doors, and the right destination depends on which one you live nearest. Gurgaon and Faridabad sit on NH-48: Neemrana is two hours, Alwar three, Jaipur under five, and none of it touches Delhi traffic. Noida and Greater Noida sit at the head of the Yamuna Expressway, which puts Mathura at about two and a half hours, and Agra and Bharatpur at three to three and a half. Ghaziabad and east Delhi have the Delhi–Meerut Expressway, the fastest exit in the region, which is why Haridwar, Rishikesh, Corbett and Nainital are the natural weekends from that side.',
        'For the Chandigarh direction, north and west Delhi, Rohini and Pitampura join NH-44 without crossing the city; from Gurgaon it is worth leaving before six to clear the Dhaula Kuan stretch. There are dedicated guides for the two biggest catchments: weekend getaways from Gurgaon by car, and Noida’s one-day and two-day drives.',
      ],
      bullets: [
        'Gurgaon and Faridabad: Neemrana, Alwar, Sariska, Jaipur, Pushkar via NH-48.',
        'Noida and Greater Noida: Mathura–Vrindavan, Agra, Bharatpur, Fatehpur Sikri via the Yamuna Expressway.',
        'Ghaziabad, Indirapuram and east Delhi: Haridwar, Rishikesh, Jim Corbett, Nainital, Mussoorie via the Meerut and Dehradun expressways.',
        'North and west Delhi: Chandigarh, Kasauli, Shimla, Amritsar via NH-44.',
      ],
      link: { label: 'Weekend getaways from Gurgaon by car', href: '/weekend-getaways-from-gurgaon-by-car' },
    },
    {
      eyebrow: 'Cost',
      heading: 'What does a weekend cab from Delhi NCR actually cost?',
      paras: [
        'Outstation cabs are billed by the day on a 300 km minimum, and for a weekend that matters more than the per-kilometre rate. A Saturday–Sunday trip to Agra is 460 km of driving but bills 600 km, so the sedan fare is ₹6,600 whether you go to Neemrana or Jaipur. Only the Shimla, Amritsar and Dharamshala rows in the table climb above that, because their round trip genuinely exceeds 600 km.',
        'An Ertiga or similar SUV at ₹15/km bills ₹9,000 for the same two days; an Innova Crysta at ₹18/km is ₹10,800; a 12-seater Tempo Traveller at ₹23/km is ₹13,800, which for a group of ten is less than the sedan works out per head for four. Driver allowance and fuel are inside those figures. Tolls, parking and hill-state entry fees are paid at actual, and the driver carries FASTag so you do not queue.',
        'If you are only going for the day and staying within about a hundred kilometres, ask for the 4 hour / 40 km local package instead: ₹2,200 for a sedan, with kilometres beyond forty charged at the normal rate. A same-day Mathura–Vrindavan run from Noida is not a local job, though: at 180 km each way it is an outstation day and bills the 300 km minimum, ₹3,300 for a sedan, or more if the actual kilometres exceed 300. The 4 hour / 40 km and 8 hour / 80 km packages are for runs inside the NCR or under about 100 km.',
      ],
      link: { label: 'Local packages: 4 hr / 40 km and full day', href: '/4hr-40km-local-cab' },
    },
    {
      eyebrow: 'Season',
      heading: 'When is the best season for each direction out of Delhi?',
      paras: [
        'Rajasthan and the Braj towns are October-to-March destinations; Neemrana, Alwar, Jaipur and Bharatpur are at their best in the cool months, and Bharatpur specifically from November to February when the migrants arrive. Agra is the same, with the caveat that the Taj is worth a foggy December dawn but not a June noon.',
        'The Ganga towns run all year. Haridwar and Rishikesh are cool from October to March and lush in the monsoon, though rafting stops from July to mid-September. The hill stations have two seasons: March to June for the escape from the heat, and September to November for the clearest skies. December brings snow to Shimla and Kufri, and to Mussoorie in a good year.',
        'Corbett is a November-to-June park. The Dhikala zone, the one worth the trip, opens in mid-November and closes when the monsoon arrives in June; the buffer zones stay open through the rains but the core does not.',
      ],
      image: { src: `${IMG}/Rishikesh/River_Rafting.jpg`, alt: 'Rafting on the Ganga near Rishikesh', tag: 'Rishikesh · Sep–Jun', side: 'left', caption: 'Rafting from Shivpuri to Rishikesh runs from mid-September to June and stops for the monsoon.' },
    },
    {
      eyebrow: 'One-way or round',
      heading: 'Should I book a one-way drop or a round trip for a weekend?',
      paras: [
        'For a weekend you almost always want the round trip: the same car and driver stay with you, take you to the sights, and bring you back on Sunday. A one-way drop is cheaper only when you are not coming back with the car, for example if you are driving out to Jaipur and flying home, or being collected by family. The one-way pages quote the single-drop fare for each corridor; the round-trip pages quote the two-day figure in the table above.',
        'For groups the same rule applies: a Tempo Traveller round trip bills the greater of twice the one-way fare or 300 km per day at ₹23/km, so a two-day weekend is ₹13,800 for the whole group, and it makes sense to book it as a round trip and use the vehicle both days.',
      ],
      link: { label: 'Round-trip cab pages by destination', href: '/round-trip-cab' },
    },
  ],

  fare: {
    title: 'A two-day weekend from Delhi NCR',
    note: 'Any destination in the first two bands bills the same two-day minimum. The table shows the total for the car, fuel and driver over a Saturday-to-Sunday trip; add the third day for the hills.',
    caption: 'Two-day weekend fare from Delhi NCR by vehicle',
    oneWayLabel: 'Two-day weekend',
    rows: [
      { vehicle: 'Sedan (Swift Dzire, Etios)', seats: '4', rate: '₹11/km', fare: '₹6,600' },
      { vehicle: 'Ertiga / SUV', seats: '6', rate: '₹15/km', fare: '₹9,000' },
      { vehicle: 'Innova Crysta', seats: '6–7', rate: '₹18/km', fare: '₹10,800' },
      { vehicle: 'Tempo Traveller (12-seater)', seats: '12', rate: '₹23/km', fare: '₹13,800' },
    ],
    footnote: '600 km billed over two days. Shimla, Amritsar and Dharamshala bill their actual round-trip distance; see the table above. A third day adds 300 km at the vehicle’s rate.',
    waText: 'Hi, I want a two-day weekend cab from Delhi NCR. Destination, dates and number of people to follow.',
    bookHref: '/outstation-cabs/delhi',
    bookLabel: 'Outstation cabs from Delhi',
    cta: 'Get a weekend quote',
  },

  galleryTitle: 'Four weekends, four different moods',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Jaipur/Jal_Mahal.jpg`, title: 'Jal Mahal, Jaipur', text: 'The lake palace on the way in from Delhi; stop here before the Amber climb.', tag: 'Rajasthan · 280 km' },
    { image: `${IMG}/Haridwar/Har_Ki_Pauri.jpg`, title: 'Har Ki Pauri, Haridwar', text: 'Be on the steps by six for the evening aarti.', tag: 'Ganga · 230 km' },
    { image: `${IMG}/Mussoorie/Gun_Hill.jpg`, title: 'Gun Hill, Mussoorie', text: 'The ropeway from Mall Road to the second-highest point in town.', tag: 'Hills · 290 km' },
    { image: `${IMG}/Neemrana/Neemrana_Zip_Line.jpg`, title: 'Zip line, Neemrana', text: 'Five lines across the Aravalli valley below the fort.', tag: 'Fort · 125 km' },
    { image: `${IMG}/Jim_Corbett/Dhikala_Zone.jpg`, title: 'Dhikala grassland, Corbett', text: 'The zone that matters; open mid-November to mid-June.', tag: 'Wildlife · 260 km' },
  ],

  tips: [
    { title: 'Leave before the city wakes', text: 'Every band above assumes you are on the expressway by six. Leave at nine and the first hour of every drive doubles, whichever door of the NCR you use.' },
    { title: 'Book safaris and rafting before the cab', text: 'Corbett safari slots and Shivpuri rafting sell out on weekends. Fix the activity, then give us the dates; the car is the easy part.' },
    { title: 'Ask for the pickup zone rate', text: 'Tell us whether you are in Gurgaon, Noida or Ghaziabad. The driver is dispatched from the nearest zone, which is what keeps the early starts on time.' },
  ],

  faqs: [
    { question: 'What are the best weekend getaways near Delhi NCR by car?', answer: 'Sorted by drive time: Neemrana, Mathura–Vrindavan and Alwar within about three hours; Bharatpur, Agra, Jaipur, Haridwar, Rishikesh, Chandigarh, Jim Corbett and Dehradun in three to five and a half hours; Mussoorie, Nainital, Lansdowne, Kasauli, Shimla, Amritsar and Dharamshala for a long weekend of about six hours or more each way.' },
    { question: 'Which weekend getaway is closest to me if I live in Gurgaon?', answer: 'Neemrana, 125 km and two hours down NH-48, with Alwar at 165 km and Jaipur at 280 km on the same road. None of them requires crossing Delhi. See the dedicated Gurgaon weekend guide for the full list.' },
    { question: 'Which weekend getaway is closest to Noida?', answer: 'Mathura and Vrindavan, 180 km and about two and a half hours down the Yamuna Expressway, followed by Agra at 230 km. The expressway begins at the Greater Noida end, so the drive skips Delhi entirely.' },
    { question: 'How much does a weekend cab from Delhi cost?', answer: 'A sedan bills ₹11/km on a 300 km per day minimum, so a two-day weekend to any destination within 300 km costs ₹6,600 for the car, fuel and driver, with tolls and parking extra. An Ertiga is ₹9,000, an Innova Crysta ₹10,800 and a 12-seater Tempo Traveller ₹13,800 for the same two days.' },
    { question: 'Can I do a hill station from Delhi in one night?', answer: 'You can, but it is thirteen to fourteen hours of driving for one evening. Mussoorie and Nainital are six to seven hours each way. Give the hills two nights and use a long weekend; for one night choose Agra, Neemrana, Haridwar or Rishikesh.' },
    { question: 'What is the best weekend getaway from Delhi in winter?', answer: 'Rajasthan and the Braj towns are at their best from October to March: Jaipur, Neemrana, Alwar, Bharatpur for the migratory birds, and Agra for a foggy Taj sunrise. For snow, Shimla and Kufri usually have it from late December.' },
    { question: 'What is the best weekend getaway from Delhi in summer?', answer: 'The hills: Mussoorie, Nainital, Kasauli, Shimla and Lansdowne from March to June, and Dharamshala for a long weekend. Rishikesh works until the monsoon closes the rafting season in early July.' },
    { question: 'Do you charge extra on long weekends or festivals?', answer: 'No. The rate card is the same on every date: Sedan ₹11/km, SUV ₹15/km, Innova ₹18/km, Tempo Traveller ₹23/km, on a 300 km per day minimum. Long weekends simply need to be booked earlier because the fleet fills.' },
  ],

  related: [
    { label: 'Outstation cabs from Delhi', sub: 'Every corridor, every vehicle', href: '/outstation-cabs/delhi', img: `${IMG}/Delhi/India_Gate.jpg` },
    { label: 'Delhi to Agra cab', sub: '230 km · Yamuna Expressway', href: '/delhi-to-agra', img: `${IMG}/Agra/Taj_mahal.jpg` },
    { label: 'Delhi to Jaipur cab', sub: '280 km · NH-48', href: '/delhi-to-jaipur', img: `${IMG}/Jaipur/amber_fort.jpg` },
    { label: 'Delhi to Rishikesh cab', sub: '250 km · Ganga', href: '/delhi-to-rishikesh', img: `${IMG}/Rishikesh/Ram_Jhula.jpg` },
    { label: 'Delhi to Nainital cab', sub: '300 km · Kumaon', href: '/delhi-to-nainital', img: `${IMG}/Nainital/Naini_Lake.jpg` },
    { label: 'Long weekend calendar 2026', sub: 'Every long weekend left this year', href: '/long-weekend-calendar-2026', img: `${IMG}/Shimla/Mall_Road.jpg` },
    { label: 'Top 20 weekend getaways from Delhi', sub: 'The full ranked list', href: '/weekend-getaways-from-delhi-by-car', img: `${IMG}/Mussoorie/Mall_road.jpg` },
    { label: 'Local 4 hr / 40 km package', sub: 'For half-day runs', href: '/4hr-40km-local-cab', img: '/images/car/swift_dzire.jpg' },
  ],
  guides: ['places-to-visit-near-me', 'weekend-getaways-from-gurgaon-by-car', 'noida-weekend-trips', 'hill-stations-near-gurgaon-noida', 'ghaziabad-greater-noida-weekend-drives'],

  schema: {
    places: ['agra', 'jaipur', 'haridwar', 'rishikesh', 'mussoorie', 'nainital', 'chandigarh', 'amritsar'],
    howTo: {
      name: 'How to plan a weekend getaway near Delhi NCR by car',
      description: 'Pick a drive-time band, choose the door of the NCR nearest you, and book a two-day round trip.',
      totalTime: 'PT10M',
      estimatedCost: { currency: 'INR', value: 6600 },
      steps: [
        { name: 'Pick a band', text: 'Up to three hours for one night (Neemrana, Mathura, Alwar); three to five and a half hours for the classics (Bharatpur, Agra, Jaipur, Haridwar, Rishikesh, Corbett); about six hours or more for a two-night trip.' },
        { name: 'Choose your door out of the NCR', text: 'Gurgaon takes NH-48 to Rajasthan, Noida the Yamuna Expressway to Agra, Ghaziabad the Meerut Expressway to Uttarakhand, north Delhi NH-44 to Chandigarh.' },
        { name: 'Book a two-day round trip', text: 'A sedan bills 600 km over two days, ₹6,600, with the driver staying with you. WhatsApp 7668570551 with destination, dates and headcount.' },
        { name: 'Leave by six', text: 'Be on the expressway before the city wakes; the first hour is where a weekend drive is won or lost.' },
      ],
    },
  },
};
