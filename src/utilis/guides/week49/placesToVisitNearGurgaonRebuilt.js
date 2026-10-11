// Week 49 near-city guide — the rebuild of /places-to-visit-near-gurgaon,
// published in place on the existing URL (inPlace: true; the route file is
// wired separately). The fifteen destinations, their distances, drive times,
// highlights and best months are exactly the ones placesToVisitPages.gurgaon
// carries, regrouped by distance ring with a paragraph on each; the Jaipur
// corridor's distance page and the Delhi to Jaipur and Delhi to Agra toll
// pages supply the road and toll notes. The six questions the current page
// asks are kept in the searcher's words. Fares are never typed: each card
// carries km and the composer computes the sedan fare, and the fare block
// computes the vehicle table from the 300 km minimum.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'places-to-visit-near-gurgaon',
  path: '/places-to-visit-near-gurgaon',
  inPlace: true,
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'places to visit near gurgaon' },

  eyebrow: 'Places guide · Gurgaon',
  crumbs: [{ name: 'Gurgaon', url: '/gurgaon' }],
  crumbName: 'Places to visit near Gurgaon',
  titleLead: 'Places to visit near Gurgaon:',
  titleAccent: 'fifteen drives, by distance ring',
  title: 'Places to Visit Near Gurgaon: Fifteen Drives, by Distance Ring',
  metaTitle: 'Places to Visit Near Gurgaon: 15 Drives by Distance Ring',
  metaDescription: 'Places to visit near Gurgaon by distance: Sohna and Neemrana within 100 km, Alwar and Mathura within 200, Agra, Jaipur, Haridwar and Mussoorie within 300, and beyond. Times, seasons and fares.',
  keywords: ['places to visit near gurgaon', 'places to visit near gurugram', 'tourist places near gurgaon', 'places near gurgaon within 100 km', 'places near gurgaon within 200 km', 'weekend places near gurgaon', 'day trip from gurgaon', 'gurgaon to neemrana'],
  heroImage: `${IMG}/Neemrana/Neemrana_hero_section.jpg`,
  heroAlt: 'Neemrana Fort Palace, 100 km and an hour and a half from Gurgaon on NH-48',

  lead: 'Gurgaon sits on NH-48 with the KMP Expressway at its back, and the places worth driving to sort themselves by distance ring. Within 100 km: Sohna at 30 km and Neemrana at 100. Within 200 km: Alwar at 140, Mathura–Vrindavan at 170 and Bharatpur at 180. Within 300 km: Haridwar at 225, Agra at 230, Rishikesh at 245, Jaipur, Chandigarh and Jim Corbett at 260, and Mussoorie at 290. Beyond that ring: Nainital at 310, Shimla at 340 and Manali at 530. Every trip to the 300 km ring bills the rate card on the 300 km per day minimum: a sedan at ₹11/km, an Ertiga or SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23, tolls and parking at actual.',
  keyFacts: [
    { label: 'Within 100 km', value: 'Sohna · Neemrana' },
    { label: 'Within 200 km', value: 'Alwar · Mathura · Bharatpur' },
    { label: 'Within 300 km', value: 'Agra · Jaipur · Haridwar · Mussoorie' },
    { label: 'Sedan rate', value: '₹11/km · 300 km min' },
  ],
  stickyLabel: 'Gurgaon outstation cab',
  waText: 'Hi, I need a cab from Gurgaon for a trip. Pickup area, destination and dates to follow.',

  intro: [
    'The useful way to read a list of places near Gurgaon is by ring, because the ring decides the trip. Within 100 km is a Sunday. Within 200 km is a full day out, or an easy night away. Within 300 km is a weekend, and the ring where the 300 km per day minimum makes every destination cost the same. Beyond 300 km is a long weekend, priced on the distance. The fifteen places below are the ones our Gurgaon list has always carried; what is new is the grouping, a paragraph on each, and a table that puts the season beside the distance.',
    'Every distance, drive time and best month is from that list. Fares come from the published rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km and a 12-seater Tempo Traveller ₹23/km, on a 300 km per day minimum, tolls and parking at actual. Pickups dispatch from the Gurgaon zone, so a Cyber City, DLF, Golf Course Road or Sohna Road start goes straight onto NH-48 or the Sohna road without a detour through Delhi.',
  ],

  bands: [
    {
      eyebrow: 'Ring one',
      heading: 'Within 100 km: a Sunday, not a weekend',
      note: 'Sohna runs on the Gurgaon local package by the hour. Neemrana, at exactly 100 km, is the first place that bills as an outstation day.',
      places: [
        { name: 'Sohna', image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Hero_Section.jpg`, alt: 'The Aravalli hills, the range that runs past Sohna', distance: '30 km', time: '45 min', note: 'Local package', bestFor: 'Hot springs, half day', highlights: ['Hot Springs', 'Shiva Temple', 'Damdama Lake'], blurb: 'The closest getaway on the list: forty-five minutes down the Sohna road to the hot sulphur springs and the Shiva temple, with Damdama Lake nearby for boating. A half-day retreat on the local package, best from October to March when the springs are the point.', href: '/local-taxi/gurgaon', cta: 'Gurgaon local cab' },
        { name: 'Neemrana', image: `${IMG}/Neemrana/Neemrana_Fort_Palace.jpg`, distance: '100 km', time: '1.5 hrs', km: 100, bestFor: 'Fort hotel, zip line', highlights: ['Neemrana Fort Palace', 'Zip-lining', 'Heritage Dining'], blurb: 'The fifteenth-century fort palace is the closest luxury escape from Gurgaon, an hour and a half straight down NH-48. Zip-lining over the ramparts, vintage car rides and the Aravalli views make a day; dinner in the fort makes a night. October to March.', href: '/same-day-neemrana-from-delhi', cta: 'Neemrana day tour' },
      ],
    },
    {
      eyebrow: 'Ring two',
      heading: '100 to 200 km: a full day out, or an easy night',
      note: 'Rajasthan down NH-48, the Braj towns via the KMP Expressway. All three fit a day with an early start and are better with a night.',
      places: [
        { name: 'Alwar', image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Bala_Quila.jpg`, distance: '140 km', time: '2.5 hrs', km: 140, bestFor: 'Sariska, forts, lake', highlights: ['Sariska Tiger Reserve', 'Bala Quila', 'Siliserh Lake'], blurb: 'The gateway to Sariska, with the Bala Quila fort above the town and the lake palace at Siliserh below it. As a day, the fort and the lake; as a night, the tiger reserve, because the safaris run at dawn and dusk. October to March.', href: '/one-way-cab/delhi-to-alwar', cta: 'Cab to Alwar' },
        { name: 'Mathura–Vrindavan', image: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg`, distance: '170 km', time: '3 hrs', km: 170, bestFor: 'Temples, pilgrimage', highlights: ['Banke Bihari Temple', 'Prem Mandir', 'Krishna Janmabhoomi'], blurb: 'The holy twin towns of Krishna’s childhood, three hours via the KMP Expressway. Banke Bihari before it closes for the afternoon, Krishna Janmabhoomi after lunch, Prem Mandir lit at dusk; Holi here is the most colourful in the north. October to March.', href: '/gurgaon-to-mathura', cta: 'Cab to Mathura' },
        { name: 'Bharatpur', image: `${IMG}/Bharatpur/Migratory_Birds.jpg`, distance: '180 km', time: '3 hrs', km: 180, bestFor: 'Keoladeo, winter birds', highlights: ['Keoladeo National Park', 'Deeg Palace', 'Lohagarh Fort'], blurb: 'Keoladeo is the bird sanctuary the list calls a full day with Deeg Palace added; the park is a dawn place and the palace and Lohagarh fort fill the afternoon. October to February for the migrants, which is when it is worth the three hours.', href: '/one-way-cab/delhi-to-bharatpur', cta: 'Cab to Bharatpur' },
      ],
    },
    {
      eyebrow: 'Ring three',
      heading: '200 to 300 km: the weekend ring, where every trip costs the same',
      note: 'Everything here is under 300 km one-way, so a two-day trip to any of them bills the same minimum for a given car. Rajasthan and the Braj towns avoid Delhi; the Uttarakhand side goes round it.',
      places: [
        { name: 'Haridwar', image: `${IMG}/Haridwar/Har_Ki_Pauri.jpg`, distance: '225 km', time: '4.5 hrs', km: 225, bestFor: 'Ganga aarti', highlights: ['Har Ki Pauri', 'Ganga Aarti', 'Mansa Devi'], blurb: 'The gateway to the Char Dham and the evening Ganga aarti at Har Ki Pauri, which is the reason to stay the night rather than turn round. Combine with Rishikesh for the spiritual-and-adventure weekend. October to June.', href: '/gurgaon-to-haridwar', cta: 'Cab to Haridwar' },
        { name: 'Agra', image: `${IMG}/Agra/Taj_mahal.jpg`, distance: '230 km', time: '3.5 hrs', km: 230, bestFor: 'Taj Mahal, heritage', highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri'], blurb: 'The Taj via the Yamuna Expressway or via NH-44 and NH-19, three and a half hours either way: a comfortable day trip from Gurgaon, as the list says, and a better night for the sunrise Taj, with the fort and Fatehpur Sikri on day two. October to March. Closed on Fridays.', href: '/gurgaon-to-agra', cta: 'Cab to Agra' },
        { name: 'Rishikesh', image: `${IMG}/Rishikesh/River_Rafting.jpg`, distance: '245 km', time: '5 hrs', km: 245, bestFor: 'Rafting, yoga', highlights: ['River Rafting', 'Bungee Jumping', 'Laxman Jhula'], blurb: 'The adventure capital: rafting, the bungee platform and the ashrams, with Laxman Jhula and Ram Jhula the landmarks. Five hours makes it a two-day trip, usually paired with Haridwar on the way. September to May for the river.', href: '/gurgaon-to-rishikesh', cta: 'Cab to Rishikesh' },
        { name: 'Jaipur', image: `${IMG}/Jaipur/amber_fort.jpg`, distance: '260 km', time: '4 hrs', km: 260, bestFor: 'Forts, bazaars', highlights: ['Amber Fort', 'Hawa Mahal', 'City Palace'], blurb: 'The Pink City is four hours on NH-48 without touching Delhi, and it is the Gurgaon weekend: Amber on the first day, Hawa Mahal and the bazaars after dark, City Palace on the second morning. A day trip is possible with a six o’clock start; a night is the relaxed version. October to March.', href: '/gurgaon-to-jaipur', cta: 'Cab to Jaipur' },
        { name: 'Chandigarh', image: `${IMG}/Chandigarh/Rock_Garden.jpg`, distance: '260 km', time: '4 hrs', km: 260, bestFor: 'Planned city, gardens', highlights: ['Rock Garden', 'Sukhna Lake', 'Rose Garden'], blurb: 'The cleanest and best-planned city in the country, four hours up NH-44: the Rock Garden, a walk round Sukhna Lake and the Rose Garden make a change of pace, and the Himachal hills are an hour beyond it. September to March.', href: '/gurgaon-to-chandigarh', cta: 'Cab to Chandigarh' },
        { name: 'Jim Corbett', image: `${IMG}/Jim_Corbett/Tiger_Safari_Corbett.jpg`, distance: '260 km', time: '5.5 hrs', km: 260, bestFor: 'Tiger safari', highlights: ['Tiger Safari', 'Dhikala Zone', 'Corbett Museum'], blurb: 'The country’s premier tiger reserve, with jeep safaris, jungle stays and the Dhikala zone as the prize. Book the safari slot before the cab, because weekend slots go early. November to June.', href: '/gurgaon-to-jim-corbett', cta: 'Cab to Corbett' },
        { name: 'Mussoorie', image: `${IMG}/Mussoorie/Mussoorie_Hero_section.jpg`, distance: '290 km', time: '6 hrs', km: 290, bestFor: 'Hill station', highlights: ['Mall Road', 'Gun Hill', 'Kempty Falls'], blurb: 'The Queen of Hills and the nearest full hill station on the list: the Mall Road, Gun Hill and Kempty Falls, six hours away with the last climb from Dehradun as the slow part. March to June and September to November.', href: '/gurgaon-to-mussoorie', cta: 'Cab to Mussoorie' },
      ],
    },
    {
      eyebrow: 'Beyond the ring',
      heading: 'Beyond 300 km: the long weekend, priced on the distance',
      note: 'Past 300 km one-way the fare follows the kilometres rather than the minimum. Book three days for the Uttarakhand and Himachal hills, and more for Manali.',
      places: [
        { name: 'Nainital', image: `${IMG}/Nainital/Naini_Lake.jpg`, distance: '310 km', time: '7 hrs', km: 310, bestFor: 'Lake, cable car', highlights: ['Naini Lake', 'Snow View Point', 'Mall Road'], blurb: 'The lake town of Kumaon: boating on Naini Lake, the cable car to Snow View, the Naina Devi temple and the Mall Road. Seven hours away, so two nights, with the second day for the quieter lakes around it. March to June and September to November.', href: '/gurgaon-to-nainital', cta: 'Cab to Nainital' },
        { name: 'Shimla', image: `${IMG}/Shimla/the%20ridge%20shimla.jpg`, distance: '340 km', time: '7 hrs', km: 340, bestFor: 'Ridge, Mall Road, snow', highlights: ['Mall Road', 'Ridge', 'Toy Train'], blurb: 'The former summer capital, seven hours away: the Mall Road, the Ridge and the toy train after a scenic climb through the hills. March to June for the escape from the heat, December for snow.', href: '/gurgaon-to-shimla', cta: 'Cab to Shimla' },
        { name: 'Manali', image: `${IMG}/Manali/Manali_hero_section.jpg`, distance: '530 km', time: '10–11 hrs', km: 530, bestFor: 'Mountains, adventure', highlights: ['Rohtang Pass', 'Solang Valley', 'Old Manali'], blurb: 'The long one: ten to eleven hours, rewarded with Rohtang, Solang Valley and the charm of Old Manali. An extended-weekend trip, usually driven with a night on the way and the car staying for the days in between. October to June.', href: '/gurgaon-to-manali', cta: 'Cab to Manali' },
      ],
    },
  ],

  table: {
    title: 'Places to visit near Gurgaon: distance, time, season and how long to give it',
    caption: 'Distance from Gurgaon, drive time, best season and the recommended trip length for fifteen places to visit near Gurgaon',
    intro: 'Distances, drive times and seasons are from our Gurgaon places list. The last column is how long our drivers suggest giving each place. Every destination up to 300 km bills the same 300 km per day minimum for a given car; the fare box further down shows the figures, and the three beyond the ring bill on their distance.',
    columns: [
      { key: 'place', label: 'Destination' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'season', label: 'Best season' },
      { key: 'give', label: 'Give it', strong: true },
    ],
    rows: [
      { place: 'Sohna', distance: '30 km', time: '45 min', season: 'Oct–Mar', give: 'A half day on the local package' },
      { place: 'Neemrana', distance: '100 km', time: '1.5 hrs', season: 'Oct–Mar', give: 'A day, or a night in the fort' },
      { place: 'Alwar', distance: '140 km', time: '2.5 hrs', season: 'Oct–Mar', give: 'A day; a night for Sariska' },
      { place: 'Mathura–Vrindavan', distance: '170 km', time: '3 hrs', season: 'Oct–Mar', give: 'A long day, or one night' },
      { place: 'Bharatpur', distance: '180 km', time: '3 hrs', season: 'Oct–Feb', give: 'A dawn-start day, or one night' },
      { place: 'Haridwar', distance: '225 km', time: '4.5 hrs', season: 'Oct–Jun', give: 'One night, for the aarti' },
      { place: 'Agra', distance: '230 km', time: '3.5 hrs', season: 'Oct–Mar', give: 'A day; a night for the sunrise Taj' },
      { place: 'Rishikesh', distance: '245 km', time: '5 hrs', season: 'Sep–May', give: 'Two days, with Haridwar' },
      { place: 'Jaipur', distance: '260 km', time: '4 hrs', season: 'Oct–Mar', give: 'Two nights; one at a push' },
      { place: 'Chandigarh', distance: '260 km', time: '4 hrs', season: 'Sep–Mar', give: 'One night' },
      { place: 'Jim Corbett', distance: '260 km', time: '5.5 hrs', season: 'Nov–Jun', give: 'Two nights, safari booked first' },
      { place: 'Mussoorie', distance: '290 km', time: '6 hrs', season: 'Mar–Jun, Sep–Nov', give: 'Two nights' },
      { place: 'Nainital', distance: '310 km', time: '7 hrs', season: 'Mar–Jun, Sep–Nov', give: 'Two nights' },
      { place: 'Shimla', distance: '340 km', time: '7 hrs', season: 'Mar–Jun, Dec', give: 'Two or three nights' },
      { place: 'Manali', distance: '530 km', time: '10–11 hrs', season: 'Oct–Jun', give: 'Four days or more' },
    ],
    footnote: 'Sedan ₹11/km on a 300 km per day minimum; destinations beyond 300 km one-way bill their distance. Tolls at actual on FASTag: the Delhi to Jaipur toll page lists the NH-48 plazas at Kherki Daula, Manesar and Shahjahanpur, ₹400 for a car one-way, and the Delhi to Agra toll page lists Jewar and Mathura on the Yamuna Expressway, ₹285.',
  },

  sections: [
    {
      eyebrow: 'Direction',
      heading: 'Which places near Gurgaon can I reach without going through Delhi?',
      paras: [
        'The whole of the Rajasthan side and the Braj towns. Gurgaon sits on NH-48, the Delhi–Jaipur highway, so Neemrana, Alwar and Jaipur are reached by driving south-west from Cyber City with no city in the way; our Gurgaon to Jaipur distance page puts that corridor at 250 km and three and a half to four and a half hours, and notes that starting from Gurgaon saves the best part of an hour against starting from Delhi. The KMP Expressway does the same eastwards, joining the Yamuna Expressway for Mathura, Vrindavan and Agra, though the list also gives NH-44 and NH-19 as the other way to Agra.',
        'The Uttarakhand side is the exception, and the drive times show it. Haridwar at 225 km takes four and a half hours and Rishikesh at 245 takes five, while Agra at 230 takes three and a half; the difference is the ring road round Delhi. Chandigarh and Shimla go north on NH-44 and manage better, Chandigarh at four hours for 260 km. That is the whole reason this page is arranged by ring and then by direction: the ring tells you the fare, the direction tells you the hours.',
      ],
      image: { src: `${IMG}/Jaipur/Hawa_Mahal.jpg`, alt: 'Hawa Mahal in Jaipur', tag: 'Jaipur · 260 km', caption: 'Jaipur is four hours down NH-48 from Cyber City and never sees a Delhi signal.' },
    },
    {
      eyebrow: 'Day trips',
      heading: 'Which places near Gurgaon can I visit in one day?',
      paras: [
        'Sohna, obviously, on the local package: forty-five minutes to the hot springs and back for lunch. Neemrana is the first real day out, an hour and a half each way with the fort, the zip line and lunch in between. Alwar at two and a half hours gives the fort and Siliserh Lake in a day, though Sariska needs the night. Mathura and Vrindavan at three hours and Bharatpur at three are long days that work with an early start, and Agra at three and a half hours is, in the list’s own words, a comfortable day trip from Gurgaon.',
        'Jaipur is the one people ask about most. It can be done in a day, with a six o’clock start, Amber Fort, Hawa Mahal and City Palace, and a return late in the evening, and the existing page has always said so; it has also always said that a night is the relaxed version, and that is still our advice. Everything from Haridwar onward is a night by any honest reckoning.',
      ],
      link: { label: 'Same-day Jaipur tour from Delhi NCR', href: '/same-day-jaipur-tour-from-delhi' },
    },
    {
      eyebrow: 'Weekends',
      heading: 'What are the best weekend getaways from Gurgaon?',
      paras: [
        'The weekend ring is the 200 to 300 km band, and its strength is choice. Jaipur is the classic Gurgaon weekend, four hours down NH-48 and built for two nights. Haridwar and Rishikesh together make the Ganga weekend, the aarti on the first evening and rafting on the second day. Agra earns a night for the sunrise Taj, with the fort and Fatehpur Sikri on day two. Chandigarh is the calm city weekend, and Jim Corbett the family one, provided the safari is booked before the cab. Mussoorie, at the outer edge of the ring, is the nearest full hill station and the natural choice from March to June.',
        'For a long weekend the outer band opens: Nainital and Shimla at seven hours each want two or three nights, and Manali at ten to eleven hours is a trip of four days or more. The weekend getaways guide for Gurgaon takes the same places and arranges them by the hours of driving rather than the ring, which is the better page if you already know how far you want to go.',
      ],
      link: { label: 'Weekend getaways from Gurgaon by car', href: '/weekend-getaways-from-gurgaon-by-car' },
      image: { src: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, alt: 'Laxman Jhula over the Ganga at Rishikesh', tag: 'Rishikesh · 245 km', side: 'left', caption: 'Rishikesh is five hours from Gurgaon and the second day of the Ganga weekend.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Gurgaon to these places cost?',
      paras: [
        'For everything up to 300 km one-way, the same for a given car. Outstation cabs bill a 300 km per day minimum, so Neemrana at 100 km and Mussoorie at 290 both cost the minimum at the vehicle’s rate: ₹11/km for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller. A two-day weekend is two days at the minimum. Fuel and the driver are inside those figures; tolls, parking and any state charges are extra at actual. The fare box below does the arithmetic, and each card on the boards shows the sedan figure for that place.',
        'Beyond 300 km the fare follows the distance: Nainital at 310 km, Shimla at 340 and Manali at 530 bill their kilometres at the rate, and a long weekend bills the greater of the distance or the days at the minimum. Tolls are the variable in every case. The Delhi to Jaipur toll page lists three plazas on NH-48, Kherki Daula, Manesar and Shahjahanpur, ₹400 for a car one-way, and the Delhi to Agra toll page lists Jewar and Mathura on the Yamuna Expressway at ₹285; the rest are paid on the driver’s FASTag at actual. Sohna and anything else within a short run of the city is cheaper on the Gurgaon local taxi package, priced by the hour on its own page.',
      ],
      link: { label: 'Outstation cabs from Gurgaon', href: '/outstation-cabs/gurgaon' },
    },
    {
      eyebrow: 'Season',
      heading: 'When is the best time to visit each place near Gurgaon?',
      paras: [
        'Rajasthan and the plains are October to March on our list: Neemrana, Alwar, Jaipur, Agra and the Braj towns, with Bharatpur’s birds from October to February and Sohna’s hot springs in the same cool months. Haridwar runs October to June and Rishikesh September to May, which is the rafting season; Chandigarh is September to March. From April the plains turn hot and the list turns uphill.',
        'The hills are the summer answer: Mussoorie and Nainital from March to June and again from September to November, Shimla from March to June with December for snow, and Manali from October to June. Jim Corbett’s season is November to June, when the core zones are open. Put together, the fifteen places cover the whole year, and the only month with nothing on the list is the height of the monsoon, when the Braj towns are green and quiet and the rest waits for September.',
      ],
      image: { src: `${IMG}/Mussoorie/Kempty_Falls.jpg`, alt: 'Kempty Falls near Mussoorie', tag: 'Mussoorie · Mar–Jun', caption: 'Mussoorie is the nearest full hill station on the list, and the summer answer from March to June.' },
    },
  ],

  fare: {
    title: 'A day or a weekend from Gurgaon',
    note: 'Every place up to 300 km bills the same minimum for a given car, so the one-day column is what Neemrana, Alwar, Agra or Jaipur costs for the day and the two-day column is the weekend. Beyond 300 km the fare follows the distance. Fuel and driver included; tolls and parking at actual.',
    caption: 'One-day and two-day cab fare from Gurgaon by vehicle',
    distanceKm: 300,
    roundTrip: true,
    days: 2,
    oneWayLabel: 'One-day trip',
    roundLabel: 'Two-day weekend',
    footnote: '300 km per day minimum. Nainital, Shimla and Manali bill their distance; Sohna runs on the Gurgaon local taxi package.',
    waText: 'Hi, I want a cab from Gurgaon for a day trip or a weekend. Destination, dates and headcount to follow.',
    bookHref: '/outstation-cabs/gurgaon',
    bookLabel: 'Outstation cabs from Gurgaon',
    cta: 'Get a Gurgaon quote',
  },

  galleryTitle: 'Ring by ring from Cyber City',
  gallery: [
    { image: `${IMG}/Neemrana/Neemrana_Zip_Line.jpg`, title: 'The zip line, Neemrana', text: 'An hour and a half down NH-48; the first real day out.', tag: '100 km' },
    { image: `${IMG}/Alwar_Sariska/Alwar_Sariska_Siliserh_Lake.jpg`, title: 'Siliserh Lake, Alwar', text: 'The lake palace outside the town.', tag: '140 km' },
    { image: `${IMG}/Agra/agra_fort.jpg`, title: 'Agra Fort', text: 'Day two of the Agra night, after the sunrise Taj.', tag: '230 km' },
    { image: `${IMG}/Jaipur/Nahargarh_Fort.jpg`, title: 'Nahargarh, Jaipur', text: 'The Gurgaon weekend, four hours down NH-48.', tag: '260 km' },
    { image: `${IMG}/Nainital/Naini_Lake.jpg`, title: 'Naini Lake', text: 'Beyond the ring: seven hours and two nights.', tag: '310 km' },
  ],

  tips: [
    { title: 'Leave before eight, whichever direction', text: 'NH-48 through Manesar is clear at seven and slow at nine, and the ring road round Delhi for the Uttarakhand side is the same. The early start is worth more than any shortcut.' },
    { title: 'Book the safari before the cab', text: 'Sariska and Corbett weekend slots go early. Fix the slot first, tell us the time, and the driver plans the departure around it.' },
    { title: 'Use the ring to pick the trip', text: 'Up to 100 km is a Sunday, up to 200 a day out, up to 300 a weekend that costs the same wherever you go. Beyond that, book the days and let the fare follow the distance.' },
    { title: 'Name the pickup area', text: 'Cyber City, DLF, Golf Course Road, Sohna Road, MG Road and the residential sectors all dispatch from the Gurgaon zone. Naming the area puts the driver at the gate on time.' },
  ],

  faqs: [
    { question: 'What are the best weekend getaways from Gurgaon?', answer: 'Neemrana at 100 km, Alwar at 140, Jaipur at 260, Rishikesh at 245 and Mussoorie at 290 are the ones people book most, and all are within comfortable driving distance. Haridwar, Agra, Chandigarh and Jim Corbett sit in the same 200 to 300 km ring, and every one of them bills the same two-day minimum for a given car.' },
    { question: 'Which is the nearest hill station from Gurgaon?', answer: 'Mussoorie at 290 km and six hours is the nearest full hill station on our list, with Shimla at 340 km and seven hours next. For a closer escape the existing page has always pointed to Kasauli at about 280 km and Morni Hills at about 240; the hill-stations guide for Gurgaon and Noida compares them.' },
    { question: 'Can I do a day trip to Jaipur from Gurgaon?', answer: 'Yes. Jaipur is 260 km and four hours from Gurgaon on NH-48 without touching Delhi. Start by six, see Amber Fort, Hawa Mahal and City Palace, and return by ten at night. We recommend an overnight stay for a relaxed trip, and the city is really built for two.' },
    { question: 'How much does a weekend cab from Gurgaon cost?', answer: 'Weekend cabs bill the rate card on a 300 km per day minimum: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, so a two-day trip to anywhere up to 300 km, Jaipur included, is two days at the minimum plus tolls and parking. The fare box on this page shows the figure for each vehicle.' },
    { question: 'Do you provide pickup from Cyber City Gurgaon?', answer: 'Yes. Pickups are dispatched from the Gurgaon zone for every area: Cyber City, the DLF phases, Golf Course Road, Sohna Road, MG Road and the residential sectors. Share the area when booking and the driver comes to the gate.' },
    { question: 'Which wildlife sanctuaries are near Gurgaon?', answer: 'Sariska Tiger Reserve, reached through Alwar at about 200 km; Jim Corbett at 260 km; Keoladeo bird sanctuary at Bharatpur at 180 km; and Sultanpur bird sanctuary, about 15 km away on the Gurgaon side. Sariska and Corbett want a night and a safari booked in advance; Bharatpur is a dawn-start day; Sultanpur is a winter morning on the local package.' },
    { question: 'Which places near Gurgaon can I visit in one day?', answer: 'Sohna at 30 km on the local package; Neemrana at 100 km and an hour and a half; Alwar at 140 km and two and a half hours; Mathura–Vrindavan and Bharatpur at three hours with an early start; and Agra at 230 km and three and a half hours, which our list calls a comfortable day trip. Jaipur is possible in a day with a six o’clock start, and better as a night.' },
    { question: 'How far is Agra from Gurgaon, and do I have to cross Delhi?', answer: '230 km and three and a half hours, either via the KMP Expressway to the Yamuna Expressway or via NH-44 and NH-19, and neither route goes through the middle of Delhi. The Delhi to Agra toll page lists the Yamuna Expressway plazas at Jewar and Mathura, ₹285 for a car one-way; the drivers settle them on FASTag at actual.' },
  ],

  related: [
    { label: 'Weekend getaways from Gurgaon', sub: 'The same places, by hours of driving', href: '/weekend-getaways-from-gurgaon-by-car', img: `${IMG}/Alwar_Sariska/Alwar_Sariska_Siliserh_Lake.jpg` },
    { label: 'Outstation cabs from Gurgaon', sub: 'All corridors, all vehicles', href: '/outstation-cabs/gurgaon', img: '/images/car/innova_crysta.jpg' },
    { label: 'Gurgaon to Jaipur cab', sub: '260 km · NH-48', href: '/gurgaon-to-jaipur', img: `${IMG}/Jaipur/amber_fort.jpg` },
    { label: 'Gurgaon to Agra cab', sub: '230 km · 3.5 hours', href: '/gurgaon-to-agra', img: `${IMG}/Agra/Taj_mahal.jpg` },
    { label: 'Gurgaon to Rishikesh cab', sub: '245 km · the Ganga weekend', href: '/gurgaon-to-rishikesh', img: `${IMG}/Rishikesh/River_Rafting.jpg` },
    { label: 'Gurgaon to Nainital cab', sub: '310 km · beyond the ring', href: '/gurgaon-to-nainital', img: `${IMG}/Nainital/Naini_Lake.jpg` },
    { label: 'Gurgaon local taxi', sub: 'By the hour, for Sohna and the city', href: '/local-taxi/gurgaon', img: '/images/car/swift_dzire.jpg' },
    { label: 'Tempo Traveller from Gurgaon', sub: 'For groups of eight or more', href: '/tempo-traveller/gurgaon', img: '/images/car/premium_suv.jpg' },
  ],
  guides: ['weekend-getaways-from-gurgaon-by-car', 'hill-stations-near-gurgaon-noida', 'weekend-getaways-near-me', 'places-to-visit-near-me', 'delhi-to-nainital-by-car'],

  schema: {
    places: ['gurgaon', 'neemrana', 'alwar', 'jaipur', 'agra', 'mathura', 'haridwar', 'rishikesh', 'mussoorie', 'nainital', 'shimla', 'manali'],
  },
};
