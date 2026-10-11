// Week 48 guide 7 — "hill station near gurgaon" (661 impressions, position
// 10.9) and "hill station near noida" (249, position 9.1). One guide for the
// two biggest NCR catchments, because the answer differs by which side of the
// city you leave from and that difference is the useful content.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'hill-stations-near-gurgaon-noida',
  path: '/hill-stations-near-gurgaon-noida',
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'hill station near gurgaon / noida', impressions: 910, position: 10.4 },

  eyebrow: 'Hill guide · Gurgaon & Noida',
  crumbs: [{ name: 'Weekend getaways', url: '/weekend-getaways-from-delhi-by-car' }],
  crumbName: 'Hill stations near Gurgaon & Noida',
  titleLead: 'Hill stations near Gurgaon and Noida:',
  titleAccent: 'which side of the city you leave from decides',
  title: 'Hill Stations Near Gurgaon and Noida: Which Side of the City You Leave From Decides',
  metaTitle: 'Hill Stations Near Gurgaon & Noida: Nearest by Road 2026',
  metaDescription: 'The nearest hill stations to Gurgaon and Noida by road: Mussoorie and Lansdowne in 5.5 hours from Noida, Kasauli and Morni in 6 from Gurgaon, Nainital, Shimla and Chail beyond. Distances and fares.',
  keywords: ['hill station near gurgaon', 'hill station near noida', 'nearest hill station to gurgaon', 'nearest hill station to noida', 'gurgaon to kasauli', 'noida to mussoorie', 'hill stations near delhi ncr within 300 km'],
  heroImage: `${IMG}/Kasauli/Kasauli_Hero_Section.jpg`,
  heroAlt: 'Kasauli on its ridge above the Chandigarh–Shimla road, the nearest hill station to Gurgaon',

  lead: 'From Noida the nearest hill stations are Mussoorie and Lansdowne, both about 250–270 km and five and a half hours via the Meerut and Dehradun expressways, with Nainital at six hours. From Gurgaon the nearest are Kasauli and Morni Hills, about 300–330 km and five and a half to six hours up NH-44, with Mussoorie six and a half via the Eastern Peripheral. Shimla, Chail, Dhanaulti and Kanatal sit at six and a half to eight hours from either. A sedan bills ₹11/km on a 300 km per day minimum, so a two-night hill weekend to anything under 300 km each way is ₹9,900.',
  keyFacts: [
    { label: 'Nearest to Noida', value: 'Mussoorie · 270 km' },
    { label: 'Nearest to Gurgaon', value: 'Kasauli · 330 km' },
    { label: 'Quietest', value: 'Lansdowne · 250 km' },
    { label: 'Sedan, 3 days', value: 'from ₹9,900' },
  ],
  stickyLabel: 'Hill station cab',
  waText: 'Hi, I need a cab from Gurgaon or Noida to a hill station. Sector, destination and dates to follow.',

  intro: [
    'There is no hill station within three hours of either city; the Himalaya begins about 250 km north-east of Noida and 300 km north of Gurgaon. So the question is really which hill station costs you the least road, and that depends on which door of the National Capital Region you leave by. Noida has the Meerut and Dehradun expressways at its doorstep and the Uttarakhand hills are its natural direction; Gurgaon has NH-44 and the Himachal foothills are marginally closer for it, though the Uttarakhand hills are reachable via the Eastern Peripheral in the same time.',
    'Distances below are from Sector 18 in Noida and from Cyber City in Gurgaon. Fares follow the published rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km, on a 300 km per day minimum, tolls and hill-state entry at actual.',
  ],

  bands: [
    {
      eyebrow: 'From Noida',
      heading: 'The nearest hill stations to Noida: north-east on the expressways',
      note: 'Meerut expressway to NH-334 for Lansdowne and the Ganga towns; the Delhi–Dehradun expressway for Mussoorie; NH-9 for Nainital.',
      places: [
        { name: 'Mussoorie', image: `${IMG}/Mussoorie/Mussoorie_Hero_section.jpg`, distance: '270 km', time: '5.5 hrs', km: 270, bestFor: 'Mall Road, Kempty, Landour', highlights: ['Mall Road', 'Kempty Falls', 'Landour walks'], blurb: 'The nearest full hill station to Noida since the Dehradun expressway opened. Five and a half hours to the Mall; the last thirty-five kilometres up from Dehradun are the slow part.', href: '/noida-to-mussoorie', cta: 'Cab to Mussoorie' },
        { name: 'Lansdowne', image: `${IMG}/Lansdowne/lansdowne_hero_section.jpg`, distance: '250 km', time: '5.5 hrs', km: 250, bestFor: 'Quiet pine cantonment', highlights: ['Bhulla Lake', 'Tip-n-Top', 'St Mary’s Church'], blurb: 'Via Meerut, Bijnor and Kotdwar. The shortest distance to a hill station from Noida and the stillest town on this list; no Mall Road, no crowd, a forest and a lake.', href: '/one-way-cab/delhi-to-lansdowne', cta: 'Lansdowne cab page' },
        { name: 'Nainital', image: `${IMG}/Nainital/Naini_Lake.jpg`, distance: '280 km', time: '6 hrs', km: 280, bestFor: 'Lake, ropeway, Bhimtal', highlights: ['Naini Lake', 'Snow View', 'Bhimtal and Sattal'], blurb: 'NH-9 through Moradabad and Haldwani. The lake town, and the quieter lakes of Bhimtal, Sattal and Naukuchiatal on the second day.', href: '/noida-to-nainital', cta: 'Cab to Nainital' },
        { name: 'Dhanaulti & Kanatal', image: `${IMG}/Mussoorie/company_garden.jpg`, alt: 'Company Garden, Mussoorie; Dhanaulti is 25 km further on the Chamba road', distance: '300 km', time: '6.5 hrs', km: 300, bestFor: 'Forest camps, winter snow', highlights: ['Eco Park', 'Surkanda Devi', 'Tehri Lake view'], blurb: 'Twenty-five and thirty-five kilometres beyond Mussoorie on the Chamba road, at 2,200 metres. Deodar forest, camps and usually snow from late December. The quiet version of a Mussoorie weekend.', href: '/one-way-cab/delhi-to-dhanaulti', cta: 'Dhanaulti cab page' },
      ],
    },
    {
      eyebrow: 'From Gurgaon',
      heading: 'The nearest hill stations to Gurgaon: north on NH-44',
      note: 'Straight up NH-44 from the Delhi border to Chandigarh, then NH-5 into the Shivalik foothills. The Uttarakhand list is reachable too, via the Eastern Peripheral, at the times shown in the table.',
      places: [
        { name: 'Kasauli', image: `${IMG}/Kasauli/Kasauli_Monkey_Point.jpg`, distance: '330 km', time: '6 hrs', km: 330, bestFor: 'Walks, church, pine', highlights: ['Monkey Point', 'Christ Church', 'Gilbert Trail'], blurb: 'Four hours to Chandigarh and an hour and a half up. A small colonial town on a ridge, an hour short of Shimla and a fraction of its traffic; a walking weekend.', href: '/delhi-to-kasauli', cta: 'Cab to Kasauli' },
        { name: 'Morni Hills', image: `${IMG}/Chandigarh/sukhana_lake.jpg`, alt: 'Sukhna Lake, Chandigarh; Morni Hills is 45 km beyond Panchkula', distance: '300 km', time: '5.5 hrs', km: 300, bestFor: 'Lakes, birding, day out', highlights: ['Tikkar Taal', 'Morni fort', 'Adventure park'], blurb: 'Haryana’s only hill station, forty-five kilometres from Panchkula. Two small lakes, a fort and a lot of birds at 1,200 metres. Modest, and the closest hill for a Gurgaon start.', href: '/gurgaon-to-chandigarh', cta: 'Cab via Chandigarh' },
        { name: 'Chail', image: `${IMG}/Shimla/Scenic%20mountain%20drives%20through%20pine%20and%20deodar%20forests.jpg`, alt: 'Pine and deodar forest on the Shimla road, the approach to Chail', distance: '370 km', time: '7.5 hrs', km: 370, bestFor: 'Palace, cricket ground', highlights: ['Chail Palace', 'World’s highest cricket ground', 'Kali Ka Tibba'], blurb: 'Off the Shimla road from Kandaghat, a deodar-forested ridge with the Maharaja of Patiala’s palace hotel and the highest cricket ground in the world. Quieter than Shimla, forty-five kilometres from it.', href: '/one-way-cab/delhi-to-chail', cta: 'Chail cab page' },
        { name: 'Shimla', image: `${IMG}/Shimla/Mall_Road.jpg`, distance: '380 km', time: '7.5 hrs', km: 380, bestFor: 'Ridge, Kufri, snow', highlights: ['The Ridge', 'Jakhoo', 'Kufri'], blurb: 'The full hill station, seven and a half hours from Cyber City. Snow at Kufri from late December; the escape from the heat from March to June.', href: '/gurgaon-to-shimla', cta: 'Cab to Shimla' },
      ],
    },
    {
      eyebrow: 'Further',
      heading: 'Beyond seven hours: the long-weekend hills from either city',
      note: 'Three nights minimum. Leave on a Friday night and sleep through the plains.',
      places: [
        { name: 'Dharamshala', image: `${IMG}/Dharamshala/McLeod_Ganj.jpg`, distance: '500–520 km', time: '9–10 hrs', km: 520, bestFor: 'McLeodganj, Triund', highlights: ['Dalai Lama Temple', 'Bhagsu waterfall', 'Triund trek'], blurb: 'NH-44 to Ambala, then NH-503 through Una and Kangra. The Tibetan upper town of McLeodganj, the Bhagsu walk and the Triund day trek. Three nights.', href: '/delhi-to-dharamshala', cta: 'Dharamshala cab page' },
        { name: 'Manali', image: `${IMG}/Manali/Manali_hero_section.jpg`, distance: '560–580 km', time: '11 hrs', km: 580, bestFor: 'Snow, Solang, Atal Tunnel', highlights: ['Solang Valley', 'Atal Tunnel', 'Old Manali'], blurb: 'Via Chandigarh, Bilaspur and Mandi. An overnight drive that arrives with the sunrise over the Beas; Solang, the tunnel to Lahaul and Old Manali fill three days.', href: '/gurgaon-to-manali', cta: 'Cab to Manali' },
      ],
    },
  ],

  table: {
    title: 'Hill stations near Gurgaon and Noida: distance and time from each',
    caption: 'Distance and drive time to each hill station from Noida Sector 18 and from Gurgaon Cyber City, with the sedan fare for a three-day round trip',
    intro: 'The two distance columns are what separate the cities: Noida is closer to Uttarakhand, Gurgaon marginally closer to Himachal. The three-day sedan figure is a Friday-to-Sunday trip at ₹11/km on the 300 km per day minimum.',
    columns: [
      { key: 'place', label: 'Hill station' },
      { key: 'noida', label: 'From Noida', align: 'right' },
      { key: 'gurgaon', label: 'From Gurgaon', align: 'right' },
      { key: 'road', label: 'Road' },
      { key: 'sedan', label: 'Sedan, 3 days', align: 'right', strong: true },
    ],
    rows: [
      { place: 'Lansdowne', noida: '250 km · 5.5 hrs', gurgaon: '300 km · 6.5 hrs', road: 'Meerut, Bijnor, Kotdwar', sedan: '₹9,900' },
      { place: 'Mussoorie', noida: '270 km · 5.5 hrs', gurgaon: '320 km · 6.5 hrs', road: 'Delhi–Dehradun expressway', sedan: '₹9,900' },
      { place: 'Nainital', noida: '280 km · 6 hrs', gurgaon: '330 km · 7 hrs', road: 'NH-9 via Moradabad', sedan: '₹9,900' },
      { place: 'Morni Hills', noida: '320 km · 6 hrs', gurgaon: '300 km · 5.5 hrs', road: 'NH-44 to Panchkula', sedan: '₹9,900' },
      { place: 'Dhanaulti', noida: '300 km · 6.5 hrs', gurgaon: '350 km · 7 hrs', road: 'via Mussoorie', sedan: '₹9,900' },
      { place: 'Kanatal', noida: '310 km · 7 hrs', gurgaon: '360 km · 7.5 hrs', road: 'via Dhanaulti', sedan: '₹9,900' },
      { place: 'Kasauli', noida: '340 km · 6.5 hrs', gurgaon: '330 km · 6 hrs', road: 'NH-44, NH-5', sedan: '₹9,900' },
      { place: 'Chail', noida: '380 km · 8 hrs', gurgaon: '370 km · 7.5 hrs', road: 'NH-5 via Kandaghat', sedan: '₹9,900' },
      { place: 'Shimla', noida: '370 km · 7.5 hrs', gurgaon: '380 km · 7.5 hrs', road: 'NH-44, NH-5 via Kalka', sedan: '₹9,900' },
      { place: 'Dharamshala', noida: '520 km · 10 hrs', gurgaon: '500 km · 9.5 hrs', road: 'NH-44, NH-503 via Una', sedan: '₹11,000–11,440' },
      { place: 'Manali', noida: '580 km · 11 hrs', gurgaon: '560 km · 11 hrs', road: 'NH-44, NH-3 via Mandi', sedan: '₹12,320–12,760' },
    ],
    footnote: 'Three-day fare = the greater of the actual round-trip distance or 3 × 300 km, at ₹11/km; where the two cities differ, the range runs from the Gurgaon figure to the Noida figure. Tolls, Himachal or Uttarakhand entry and parking at actual. Ertiga ₹15/km, Innova Crysta ₹18/km, Tempo Traveller ₹23/km on the same rules.',
  },

  sections: [
    {
      eyebrow: 'Noida',
      heading: 'Which is the nearest hill station to Noida?',
      paras: [
        'Lansdowne by distance, at about 250 km, and Mussoorie by usefulness, at about 270 km; both are five and a half hours. The Delhi–Meerut expressway is twenty minutes from Sector 18, and from Meerut the road splits: NH-334 to Bijnor and Kotdwar for Lansdowne, or the Dehradun expressway for Mussoorie. Nainital, at 280 km on NH-9, is half an hour more.',
        'Lansdowne is the choice if the point of the hill station is quiet: a cantonment with a lake, a church and no Mall Road. Mussoorie is the choice if the point is a hill station: the Mall, Kempty Falls, Gun Hill and Landour above it. For snow, go on twenty-five kilometres past Mussoorie to Dhanaulti.',
      ],
      image: { src: `${IMG}/Lansdowne/St_Marys_Church.jpg`, alt: 'St Mary’s Church at Lansdowne', tag: 'Lansdowne · 250 km from Noida', caption: 'St Mary’s, Lansdowne: the closest hill station to Noida by distance and the quietest by a distance.' },
    },
    {
      eyebrow: 'Gurgaon',
      heading: 'Which is the nearest hill station to Gurgaon?',
      paras: [
        'Morni Hills and Kasauli. Morni, forty-five kilometres from Panchkula at the end of a five-and-a-half-hour drive, is Haryana’s only hill station and a modest one: two lakes, a small fort, birds and a view. Kasauli, an hour and a half above Chandigarh and six hours from Cyber City, is the real answer: a proper colonial ridge town with walks, a church and pine forest, and a fraction of Shimla’s traffic.',
        'The Uttarakhand hills are not out of reach from Gurgaon. The Eastern Peripheral Expressway around the outside of Delhi joins the Meerut expressway, and Mussoorie is six and a half hours by that route; Lansdowne and Nainital are similar. The extra hour compared with Noida is the price of living on the wrong side of the city for Uttarakhand.',
      ],
      link: { label: 'Weekend getaways from Gurgaon by car', href: '/weekend-getaways-from-gurgaon-by-car' },
    },
    {
      eyebrow: 'How many nights',
      heading: 'Can I do a hill station from Gurgaon or Noida in a normal two-day weekend?',
      paras: [
        'Only just, and only Lansdowne or Mussoorie from Noida. Leave at five on Saturday, arrive by eleven, have the afternoon and the evening, and leave after breakfast on Sunday. Everything else, and everything from Gurgaon, wants a long weekend: three days, with Friday evening or the small hours of Saturday for the drive up.',
        'The 2026 long weekend calendar lists what is left this year, and the three-day fare in the table is what those trips bill.',
      ],
      link: { label: 'Long weekend calendar 2026', href: '/long-weekend-calendar-2026' },
      image: { src: `${IMG}/Mussoorie/Kempty_Falls.jpg`, alt: 'Kempty Falls near Mussoorie', tag: 'Mussoorie · 270 km from Noida', side: 'left', caption: 'Kempty Falls: the standard second-morning stop on a Mussoorie weekend from Noida.' },
    },
    {
      eyebrow: 'Season',
      heading: 'When are the hills near Gurgaon and Noida at their best?',
      paras: [
        'March to June for the escape from the plains, when the NCR is at forty-two degrees and the ridge towns are at twenty-five; this is the season the whole region drives north, so book early. September to November for clear skies and empty roads after the monsoon. Late December to February for snow: Dhanaulti and Kanatal reliably, Kufri above Shimla reliably, Mussoorie and Kasauli in a good year.',
        'The monsoon, July to mid-September, is the time to stay off the hill roads. Landslides close the Mussoorie and Shimla climbs for hours at a time, and the falls are dangerous.',
      ],
    },
    {
      eyebrow: 'Cost',
      heading: 'What does a hill station cab from Gurgaon or Noida cost?',
      paras: [
        'A three-day sedan is ₹9,900 for anything under 300 km each way, which covers every hill station in the table except Dharamshala and Manali. An Ertiga is ₹13,500, an Innova Crysta ₹16,200 and a 12-seater Tempo Traveller ₹20,700 for the same three days. Fuel and driver are included. Tolls, parking and hill-state entry are extra, and on the Shimla road there are several toll plazas on NH-44 before Kalka.',
        'For hill roads with luggage, an Innova is the comfortable car for five; for anything above seven people the Tempo Traveller is cheaper per head than two cars and keeps the group together.',
      ],
      link: { label: 'Outstation cabs from Noida', href: '/outstation-cabs/noida' },
    },
  ],

  fare: {
    title: 'A three-day hill weekend from Gurgaon or Noida',
    note: 'Every hill station within 300 km each way bills the same three-day minimum. Dharamshala and Manali bill their actual round-trip distance.',
    caption: 'Three-day hill station fare from Gurgaon or Noida by vehicle',
    oneWayLabel: 'Three-day trip',
    rows: [
      { vehicle: 'Sedan (Swift Dzire, Etios)', seats: '4', rate: '₹11/km', fare: '₹9,900' },
      { vehicle: 'Ertiga / SUV', seats: '6', rate: '₹15/km', fare: '₹13,500' },
      { vehicle: 'Innova Crysta', seats: '6–7', rate: '₹18/km', fare: '₹16,200' },
      { vehicle: 'Tempo Traveller (12-seater)', seats: '12', rate: '₹23/km', fare: '₹20,700' },
    ],
    footnote: '900 km billed over three days. Tolls, parking and hill-state entry at actual. A two-day version bills 600 km.',
    waText: 'Hi, I want a three-day hill station cab from Gurgaon or Noida. Sector, destination and dates to follow.',
    bookHref: '/outstation-cabs/gurgaon',
    bookLabel: 'Outstation cabs from Gurgaon',
    cta: 'Get the hill weekend quote',
  },

  galleryTitle: 'The nearest ridges',
  gallery: [
    { image: `${IMG}/Kasauli/Kasauli_Christ_Church.jpg`, title: 'Christ Church, Kasauli', text: 'Six hours from Cyber City.', tag: 'Gurgaon side' },
    { image: `${IMG}/Mussoorie/Lal_tibba.jpg`, title: 'Lal Tibba, Landour', text: 'Above Mussoorie, five and a half hours from Noida.', tag: 'Noida side' },
    { image: `${IMG}/Nainital/Snow_View_Point.jpg`, title: 'Snow View, Nainital', text: 'The ropeway from the Mall.', tag: 'Noida side' },
    { image: `${IMG}/Kufri/Mahasu_Peak.jpg`, title: 'Mahasu Peak, Kufri', text: 'Snow in winter, above Shimla.', tag: 'Gurgaon side' },
    { image: `${IMG}/Lansdowne/Tip_n_Top_Viewpoint.jpg`, title: 'Tip-n-Top, Lansdowne', text: 'The nearest hill station to Noida.', tag: 'Noida side' },
  ],

  tips: [
    { title: 'Leave at five, whichever side', text: 'Every drive time above assumes the expressway before six. From Gurgaon, be on the Eastern Peripheral or NH-44 before the trucks; from Noida, be past Meerut by seven.' },
    { title: 'Take an Innova for the climbs', text: 'The Mussoorie, Kasauli and Shimla climbs are long hairpin roads. Families and anyone prone to car sickness are more comfortable in an Innova Crysta than a sedan.' },
    { title: 'Check the snow forecast in January', text: 'A fall at Dhanaulti or Kufri closes the last stretch for hours. The drivers carry chains from December; still, plan to arrive in daylight.' },
  ],

  faqs: [
    { question: 'Which is the nearest hill station to Gurgaon?', answer: 'Morni Hills at about 300 km and five and a half hours via Panchkula, and Kasauli at about 330 km and six hours via Chandigarh, both up NH-44. Mussoorie and Lansdowne are six to six and a half hours via the Eastern Peripheral Expressway.' },
    { question: 'Which is the nearest hill station to Noida?', answer: 'Lansdowne at about 250 km and Mussoorie at about 270 km, both five and a half hours via the Meerut and Dehradun expressways. Nainital at 280 km is six hours on NH-9.' },
    { question: 'Which hill stations are within 300 km of Gurgaon and Noida?', answer: 'From Noida: Lansdowne (250 km), Mussoorie (270 km), Nainital (280 km) and Dhanaulti (300 km). From Gurgaon: Lansdowne and Morni Hills (300 km); Mussoorie, Nainital and Kasauli are 320–330 km.' },
    { question: 'How much does a cab to a hill station from Gurgaon or Noida cost?', answer: 'A three-day trip to any hill station within 300 km each way bills ₹9,900 for a sedan, ₹13,500 for an Ertiga, ₹16,200 for an Innova Crysta and ₹20,700 for a 12-seater Tempo Traveller, fuel and driver included, tolls and hill-state entry extra.' },
    { question: 'Can I go to a hill station from Noida for two days?', answer: 'Lansdowne or Mussoorie, yes: leave at five on Saturday, arrive by eleven and leave after breakfast on Sunday. Everything further, and everything from Gurgaon, is better as a three-day trip.' },
    { question: 'Which hill station near Gurgaon or Noida has snow?', answer: 'Dhanaulti and Kanatal beyond Mussoorie usually have snow from late December to February and are six and a half to seven and a half hours from either city; Kufri above Shimla is the surest. Mussoorie and Kasauli get snow in a good year.' },
    { question: 'Is Kasauli closer to Gurgaon than Mussoorie?', answer: 'Marginally: Kasauli is about 330 km and six hours up NH-44, Mussoorie about 320 km and six and a half hours via the Eastern Peripheral and Dehradun expressways. Choose by the kind of town you want rather than the half hour.' },
    { question: 'Which hill station near Noida is best for a family?', answer: 'Mussoorie for a first hill station, with the Mall, Kempty Falls and the ropeway; Nainital for the lake and boating; Lansdowne if the family wants quiet. All three are five and a half to six hours from Sector 18.' },
  ],

  related: [
    { label: 'Noida to Mussoorie cab', sub: '270 km · 5.5 hrs', href: '/noida-to-mussoorie', img: `${IMG}/Mussoorie/Mall_road.jpg` },
    { label: 'Noida to Nainital cab', sub: '280 km · 6 hrs', href: '/noida-to-nainital', img: `${IMG}/Nainital/Naini_Lake.jpg` },
    { label: 'Gurgaon to Shimla cab', sub: '380 km · 7.5 hrs', href: '/gurgaon-to-shimla', img: `${IMG}/Shimla/shimla_hero_section.jpg` },
    { label: 'Gurgaon to Mussoorie cab', sub: '320 km · 6.5 hrs', href: '/gurgaon-to-mussoorie', img: `${IMG}/Mussoorie/Gun_Hill.jpg` },
    { label: 'Gurgaon to Nainital cab', sub: '330 km · 7 hrs', href: '/gurgaon-to-nainital', img: `${IMG}/Nainital/Snow_View_Point.jpg` },
    { label: 'Outstation cabs from Noida', sub: 'All corridors', href: '/outstation-cabs/noida', img: '/images/car/innova_crysta.jpg' },
    { label: 'Outstation cabs from Gurgaon', sub: 'All corridors', href: '/outstation-cabs/gurgaon', img: '/images/car/ertiga.jpg' },
    { label: 'Long weekend calendar 2026', sub: 'Plan the three days', href: '/long-weekend-calendar-2026', img: `${IMG}/Kufri/kufri_hero_section.jpg` },
  ],
  guides: ['weekend-getaways-from-gurgaon-by-car', 'noida-weekend-trips', 'hill-stations-near-haridwar-rishikesh', 'weekend-getaways-near-me', 'ghaziabad-greater-noida-weekend-drives'],

  schema: {
    places: ['gurgaon', 'noida', 'mussoorie', 'nainital', 'shimla', 'dharamshala', 'manali'],
  },
};
