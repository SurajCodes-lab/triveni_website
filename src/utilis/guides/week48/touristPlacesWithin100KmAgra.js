// Week 48 guide 8 — "tourist places near agra within 100 kms" (271
// impressions, position 9.1). A radius page: everything worth a car from
// Agra inside a hundred kilometres, in order of distance.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'tourist-places-within-100-km-of-agra',
  path: '/tourist-places-within-100-km-of-agra',
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'tourist places near agra within 100 kms', impressions: 271, position: 9.1 },

  eyebrow: 'Radius guide · Agra',
  crumbs: [{ name: 'Agra', url: '/agra' }],
  crumbName: 'Tourist places within 100 km of Agra',
  titleLead: 'Tourist places within 100 km of Agra,',
  titleAccent: 'nearest first',
  title: 'Tourist Places Within 100 km of Agra, Nearest First',
  metaTitle: 'Tourist Places Within 100 km of Agra: 11 Trips by Car',
  metaDescription: 'Every tourist place within 100 km of Agra by car, nearest first: Sikandra, Fatehpur Sikri (40 km), Bharatpur (55 km), Mathura and Vrindavan, Chambal safari, Govardhan and Deeg. Cab fares from ₹2,200.',
  keywords: ['tourist places near agra within 100 kms', 'places to visit near agra within 100 km', 'day trips from agra', 'places near agra', 'agra to fatehpur sikri distance', 'agra to bharatpur', 'agra to mathura'],
  heroImage: `${IMG}/Fatehpur_Sikri/Buland_Darwaza.jpg`,
  heroAlt: 'Buland Darwaza at Fatehpur Sikri, forty kilometres from Agra',

  lead: 'Within a hundred kilometres of Agra there are eleven places worth the drive, with Gwalior just beyond. Nearest are Sikandra and Keetham lake (Sur Sarovar) at ten to twenty kilometres inside the city’s edge; then Fatehpur Sikri at 40 km, Firozabad at 45, Bharatpur’s Keoladeo park at 55, Mathura at 58, Vrindavan and Bateshwar at 70, the Chambal ravines at 70, Govardhan at 85 and Deeg at 95. All of them bill on the local package, ₹2,200 for four hours and forty kilometres in a sedan plus ₹11 for each kilometre beyond, so a Fatehpur Sikri or Bharatpur run costs less than an outstation fare.',
  keyFacts: [
    { label: 'Within 50 km', value: '5 places' },
    { label: '50–100 km', value: '6 places' },
    { label: 'Furthest', value: 'Deeg · 95 km' },
    { label: 'Sedan, half day', value: 'from ₹2,200' },
  ],
  stickyLabel: 'Agra day trip cab',
  waText: 'Hi, I want a cab from Agra for a day trip within 100 km. Destination and date to follow.',

  intro: [
    'Agra is a city people leave the morning after the Taj, which is a pity, because the hundred kilometres around it hold a Mughal ghost capital, a wetland the size of a town, the birthplace of Krishna, a river full of gharials and two palace complexes almost nobody visits. This guide runs outward from the city in order of distance, so you can see what fits the time you have.',
    'All distances are from the Taj east gate. Fares follow the rate card and, because every place here is under a hundred kilometres, they bill on the local package rather than as outstation trips: ₹2,200 for a sedan for the first four hours and forty kilometres, ₹11 for each kilometre after that, and the 8 hour / 80 km full-day package for the longer runs.',
  ],

  bands: [
    {
      eyebrow: 'Ring one',
      heading: 'Within 50 km: the half-day runs',
      note: 'Each fits the 4 hour / 40 km package with a few extra kilometres. Fatehpur Sikri and Bharatpur pair into one full day.',
      places: [
        { name: 'Sikandra', image: `${IMG}/Agra/Baby_Taj.jpg`, alt: 'Mughal tomb architecture at Agra', distance: '10 km', time: '25 min', fare: '₹2,200', bestFor: 'Akbar’s tomb, gardens', highlights: ['Akbar’s mausoleum', 'Kanch Mahal', 'Deer in the gardens'], blurb: 'Akbar’s tomb on the Mathura road, in a garden where blackbuck and langurs wander. Under-visited because it is on the way out of town; go on the morning you leave for Mathura.', href: '/sightseeing/agra-full-day-city-tour', cta: 'Agra city tour' },
        { name: 'Keetham Lake (Sur Sarovar)', image: `${IMG}/Bharatpur/Bird_Sanctuary.jpg`, alt: 'Waterbirds on a wetland near Bharatpur, similar to Keetham lake', distance: '20 km', time: '40 min', fare: '₹2,200', bestFor: 'Birds, bear rescue centre', highlights: ['Sur Sarovar sanctuary', 'Wildlife SOS bear centre', 'Sur Das memorial'], blurb: 'A reservoir on the Mathura road with a bird sanctuary and the Wildlife SOS sloth bear rescue centre, which takes visitors by appointment. A quiet morning before the road north.', href: '/sightseeing/agra-full-day-city-tour', cta: 'Agra city tour' },
        { name: 'Fatehpur Sikri', image: `${IMG}/Fatehpur_Sikri/Panch_Mahal.jpg`, distance: '40 km', time: '1 hr', fare: '₹2,200', bestFor: 'Mughal ghost capital', highlights: ['Buland Darwaza', 'Panch Mahal', 'Salim Chishti’s tomb'], blurb: 'Akbar’s capital for fourteen years, abandoned for want of water and preserved because nobody built over it. The Jama Masjid and Buland Darwaza are free; the palace complex is ticketed. Three hours is right.', href: '/same-day-fatehpur-sikri-from-agra', cta: 'Fatehpur Sikri day tour' },
        { name: 'Firozabad', image: `${IMG}/Agra/Jama_Masjid.jpg`, alt: 'Jama Masjid, Agra; Firozabad is 45 km east', distance: '45 km', time: '1 hr', fare: '₹2,255', bestFor: 'Glass bangles, workshops', highlights: ['Bangle bazaar', 'Glass furnaces', 'Kotla'], blurb: 'The glass city: the bangle bazaar and, if you ask, a working furnace. Not a monument town, but the most unusual afternoon within an hour of the Taj.', href: '/local-taxi/agra', cta: 'Agra local cab' },
        { name: 'Bharatpur (Keoladeo)', image: `${IMG}/Bharatpur/Migratory_Birds.jpg`, distance: '55 km', time: '1.25 hrs', fare: '₹2,365', bestFor: 'Birds, dawn', highlights: ['Keoladeo National Park', 'Lohagarh Fort', 'Cycle-rickshaw guides'], blurb: 'A UNESCO wetland twenty minutes past Fatehpur Sikri. From November to February it fills with migratory birds; the rickshaw guides inside know every nest. Go at opening time and combine with Fatehpur Sikri on the way back.', href: '/same-day-bharatpur-from-agra', cta: 'Bharatpur day tour' },
      ],
    },
    {
      eyebrow: 'Ring two',
      heading: '50 to 100 km: the full-day runs',
      note: 'These want the 8 hour / 80 km package. Mathura and Vrindavan pair; Govardhan and Deeg pair; Chambal and Bateshwar pair.',
      places: [
        { name: 'Mathura', image: `${IMG}/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg`, distance: '58 km', time: '1.25 hrs', fare: '₹2,398', bestFor: 'Krishna Janmabhoomi', highlights: ['Krishna Janmabhoomi', 'Dwarkadhish', 'Vishram Ghat aarti'], blurb: 'The birthplace of Krishna, an hour up the Delhi highway (NH-19). The Janmabhoomi complex in the morning, Dwarkadhish before noon, and the Vishram Ghat aarti on the Yamuna at dusk.', href: '/same-day-mathura-vrindavan-from-agra', cta: 'Mathura–Vrindavan day tour' },
        { name: 'Vrindavan', image: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg`, distance: '70 km', time: '1.5 hrs', fare: '₹2,530', bestFor: 'Banke Bihari, Prem Mandir', highlights: ['Banke Bihari', 'Prem Mandir', 'ISKCON'], blurb: 'Twelve kilometres beyond Mathura. Banke Bihari closes at noon and reopens after five; Prem Mandir is lit from dusk. Between them, ISKCON and the ghats.', href: '/agra-to-vrindavan', cta: 'Cab to Vrindavan' },
        { name: 'Bateshwar', image: `${IMG}/Mathura_Vrindavan/Yamuna_River_Ghat.jpg`, alt: 'Temple ghats on the Yamuna', distance: '70 km', time: '1.5 hrs', fare: '₹2,530', bestFor: 'Yamuna temples, cattle fair', highlights: ['101 Shiva temples', 'Yamuna ghats', 'November cattle fair'], blurb: 'A line of white Shiva temples along a bend of the Yamuna, seventy kilometres south-east. Empty except in November, when the cattle fair brings the whole district.', href: '/sightseeing/agra-to-chambal-safari', cta: 'Chambal and Bateshwar' },
        { name: 'Chambal safari', image: `${IMG}/Jim_Corbett/Ramganga_River.jpg`, alt: 'A clear river between sandbanks (illustrative; not the Chambal)', distance: '70 km', time: '1.5 hrs', fare: '₹2,530', bestFor: 'Gharials, dolphins, ravines', highlights: ['Boat safari', 'Gharial and mugger', 'Skimmers and dolphins'], blurb: 'The National Chambal Sanctuary from the Bah side: a boat on one of the cleanest rivers in the north, with gharials on the sandbanks and, with luck, Gangetic dolphins. The ravines are the other India.', href: '/sightseeing/agra-to-chambal-safari', cta: 'Chambal safari day' },
        { name: 'Govardhan', image: `${IMG}/Mathura_Vrindavan/Govardhan_Hill.jpg`, distance: '85 km', time: '1.75 hrs', fare: '₹2,695', bestFor: 'Parikrama, Kusum Sarovar', highlights: ['Govardhan parikrama', 'Kusum Sarovar', 'Mansi Ganga'], blurb: 'The hill Krishna lifted, and the twenty-one kilometre walk around it. Kusum Sarovar’s sandstone chhatris at sunset are the most photographed thing in Braj that most visitors never see.', href: '/agra-to-mathura', cta: 'Cab via Mathura' },
        { name: 'Deeg', image: `${IMG}/Bharatpur/Lohagarh_Fort.jpg`, alt: 'Jat-era fort walls in the Bharatpur region', distance: '95 km', time: '2 hrs', fare: '₹2,805', bestFor: 'Palaces, water gardens', highlights: ['Deeg water palaces', 'Gopal Bhawan', 'Monsoon fountains'], blurb: 'The Jat rulers’ summer palaces, forty kilometres past Bharatpur, with the finest water gardens in the region and almost no visitors. Right at the edge of the hundred-kilometre ring.', href: '/same-day-bharatpur-from-agra', cta: 'Via Bharatpur' },
        { name: 'Gwalior (just beyond)', image: `${IMG}/Jaipur/Nahargarh_Fort.jpg`, alt: 'Nahargarh Fort ramparts, Jaipur (illustrative)', distance: '120 km', time: '2.5 hrs', km: 120, bestFor: 'Hill fort, Jai Vilas', highlights: ['Gwalior Fort', 'Jai Vilas Palace', 'Tansen’s tomb'], blurb: 'Twenty kilometres outside the ring, so it bills as an outstation day, but the fort is one of the great ones and the same-day tour is a classic. Included so the list is honest about what sits just past a hundred.', href: '/same-day-gwalior-from-agra', cta: 'Gwalior day tour' },
      ],
    },
  ],

  table: {
    title: 'Tourist places within 100 km of Agra: distance, time and fare',
    caption: 'Distance from the Taj east gate, drive time, the kind of visit and the sedan fare for each tourist place within 100 km of Agra',
    intro: 'Distances from the Taj east gate. Sedan fares on the local package: ₹2,200 for 4 hours and 40 km, then ₹11 per extra kilometre one-way; the full-day 8 hr / 80 km package suits the pairings.',
    columns: [
      { key: 'place', label: 'Place' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'visit', label: 'Visit' },
      { key: 'season', label: 'Best' },
      { key: 'fare', label: 'Sedan, one-way', align: 'right', strong: true },
    ],
    rows: [
      { place: 'Sikandra (Akbar’s tomb)', distance: '10 km', time: '25 min', visit: '1.5 hrs', season: 'Oct–Mar', fare: '₹2,200' },
      { place: 'Keetham Lake', distance: '20 km', time: '40 min', visit: '2 hrs', season: 'Nov–Feb', fare: '₹2,200' },
      { place: 'Fatehpur Sikri', distance: '40 km', time: '1 hr', visit: '3 hrs', season: 'Oct–Mar', fare: '₹2,200' },
      { place: 'Firozabad', distance: '45 km', time: '1 hr', visit: '2 hrs', season: 'Any', fare: '₹2,255' },
      { place: 'Bharatpur (Keoladeo)', distance: '55 km', time: '1.25 hrs', visit: 'Half day', season: 'Nov–Feb', fare: '₹2,365' },
      { place: 'Mathura', distance: '58 km', time: '1.25 hrs', visit: 'Half day', season: 'Oct–Mar', fare: '₹2,398' },
      { place: 'Vrindavan', distance: '70 km', time: '1.5 hrs', visit: 'Half day', season: 'Oct–Mar', fare: '₹2,530' },
      { place: 'Bateshwar', distance: '70 km', time: '1.5 hrs', visit: '2 hrs', season: 'Nov (fair)', fare: '₹2,530' },
      { place: 'Chambal safari', distance: '70 km', time: '1.5 hrs', visit: 'Half day', season: 'Nov–Mar', fare: '₹2,530' },
      { place: 'Govardhan', distance: '85 km', time: '1.75 hrs', visit: 'Half day', season: 'Oct–Mar', fare: '₹2,695' },
      { place: 'Deeg', distance: '95 km', time: '2 hrs', visit: '2 hrs', season: 'Monsoon fair days', fare: '₹2,805' },
      { place: 'Gwalior (just beyond)', distance: '120 km', time: '2.5 hrs', visit: 'Full day', season: 'Oct–Mar', fare: '₹3,300 outstation' },
    ],
    footnote: 'A return with the car waiting bills the published ₹3,800 8 hr / 80 km sedan package, or twice the one-way fare where the round trip runs longer; longer days quoted on request. Ertiga ₹2,500 base and ₹15/km; Innova Crysta ₹2,800 base and ₹18/km. Monument tickets and parking at actual.',
  },

  sections: [
    {
      eyebrow: 'One day',
      heading: 'What is the best one-day trip from Agra within 100 km?',
      paras: [
        'Fatehpur Sikri and Bharatpur together, in that order. Leave at eight, be at Buland Darwaza by nine before the heat and the guides, and give the palace complex two hours. Bharatpur is twenty minutes on; in winter the park is worth the whole afternoon by cycle-rickshaw, and even outside the migratory season the resident painted storks and the fort in the town fill three hours. Back in Agra by six.',
        'The second-best day is the Braj day: Mathura in the morning, Vrindavan after lunch, Prem Mandir at dusk and Vishram Ghat aarti before the drive home. Both days bill on the full-day package.',
      ],
      link: { label: 'Agra to Fatehpur Sikri same-day tour', href: '/sightseeing/agra-to-fatehpur-sikri-same-day' },
      image: { src: `${IMG}/Fatehpur_Sikri/Salim_Chishti_Tomb.jpg`, alt: 'The marble tomb of Salim Chishti at Fatehpur Sikri', tag: 'Fatehpur Sikri · 40 km', caption: 'Salim Chishti’s tomb inside the Jama Masjid at Fatehpur Sikri: free to enter, an hour from the Taj.' },
    },
    {
      eyebrow: 'Wildlife',
      heading: 'Is there any wildlife near Agra within 100 km?',
      paras: [
        'More than most people expect. Keoladeo at Bharatpur is one of the great bird reserves of Asia, at 55 km. The National Chambal Sanctuary, 70 km south-east, is the place to see gharials, muggers, Indian skimmers and, on a good morning, Gangetic dolphins from a boat. Keetham lake, 20 km on the Mathura road, has a bird sanctuary and the Wildlife SOS bear centre. Sur Sarovar and Keoladeo are November-to-February destinations; Chambal runs from November to March, when the water is clear and the sandbanks are out.',
      ],
      link: { label: 'Agra to Chambal safari', href: '/sightseeing/agra-to-chambal-safari' },
    },
    {
      eyebrow: 'Cost',
      heading: 'What does a cab for these day trips from Agra cost?',
      paras: [
        'Because every place on this page is under a hundred kilometres, the trips bill on the local packages rather than as outstation fares. A sedan is ₹2,200 for the first four hours and forty kilometres, with kilometres beyond that at ₹11; the published full-day package is ₹3,800 for eight hours and eighty kilometres, and a same-day return bills as twice the one-way fare where that runs higher. Fatehpur Sikri one-way is inside the base package; Bharatpur adds fifteen kilometres; Deeg adds fifty-five. Longer days are quoted on request.',
        'An Ertiga starts at ₹2,500 and ₹15 a kilometre, an Innova Crysta at ₹2,800 and ₹18. Monument tickets, the Chambal boat and Keoladeo rickshaws are paid at actual. The one exception is Gwalior, which at 120 km bills as an outstation day at ₹3,300.',
      ],
      link: { label: 'Agra local taxi packages', href: '/local-taxi/agra' },
    },
    {
      eyebrow: 'Season',
      heading: 'When is the best time for the places around Agra?',
      paras: [
        'October to March for everything with stone in it: Fatehpur Sikri, Sikandra, Gwalior and the Braj temples are pleasant in the cool months and brutal in May. Birds run November to February at Keoladeo and Keetham. Chambal is November to March. Deeg is the one summer-and-monsoon place: its fountains are run on the days of the monsoon-season Deeg fair (dates vary; check before travelling), and the water gardens make sense only then. Bateshwar’s cattle fair falls in November around Kartik Purnima.',
      ],
      image: { src: `${IMG}/Mathura_Vrindavan/Govardhan_Hill.jpg`, alt: 'Govardhan hill and its parikrama path', tag: 'Govardhan · 85 km', side: 'left', caption: 'Govardhan: the twenty-one kilometre parikrama, best walked in the cool months.' },
    },
    {
      eyebrow: 'Onward',
      heading: 'Which of these can I combine with leaving Agra for Jaipur or Delhi?',
      paras: [
        'Fatehpur Sikri, Bharatpur and Deeg all lie on the Jaipur road, so they are the natural stops on the day you leave for Jaipur; the Agra–Jaipur one-way cab page quotes that corridor. Sikandra, Keetham, Mathura, Vrindavan and Govardhan lie on the Delhi road and are the stops on the way back to the capital. Chambal and Bateshwar are off both routes and want their own day.',
      ],
      link: { label: 'Agra to Jaipur cab, via Fatehpur Sikri and Bharatpur', href: '/one-way-cab/agra-to-jaipur' },
    },
  ],

  fare: {
    title: 'Agra to Fatehpur Sikri and Bharatpur in a day',
    note: 'The classic day trip from Agra. A same-day return bills as twice the one-way fare, which for Bharatpur at 55 km comes to ₹4,730 in a sedan (about 110 km in all).',
    caption: 'Agra to Fatehpur Sikri and Bharatpur full-day cab fare by vehicle',
    oneWayLabel: 'Full day, ~110 km',
    rows: [
      { vehicle: 'Sedan (Swift Dzire, Etios)', seats: '4', rate: '2 × one-way (₹2,365)', fare: '₹4,730' },
      { vehicle: 'Ertiga / SUV', seats: '6', rate: 'full day, on request', fare: 'On request' },
      { vehicle: 'Innova Crysta', seats: '6–7', rate: 'full day, on request', fare: 'On request' },
      { vehicle: 'Tempo Traveller (12-seater)', seats: '12', rate: 'full day, on request', fare: 'On request' },
    ],
    footnote: 'Sedan: twice the Bharatpur one-way local fare of ₹2,365 (₹2,200 for 4 hr / 40 km plus 15 km at ₹11). Only the sedan full-day rate is published; SUV, Innova and Tempo full-day fares are quoted on request. Tickets, guides and park rickshaws at actual.',
    waText: 'Hi, I want a full-day cab from Agra to Fatehpur Sikri and Bharatpur. Date and headcount to follow.',
    bookHref: '/same-day-bharatpur-from-agra',
    bookLabel: 'Bharatpur day tour page',
    cta: 'Book the day trip',
  },

  galleryTitle: 'Around Agra, within a hundred kilometres',
  gallery: [
    { image: `${IMG}/Fatehpur_Sikri/Fatehpur_Sikri_hero_section.jpg`, title: 'Fatehpur Sikri', text: 'Akbar’s abandoned capital, an hour west.', tag: '40 km' },
    { image: `${IMG}/Bharatpur/Migratory_Birds.jpg`, title: 'Keoladeo, Bharatpur', text: 'The wetland in migratory season.', tag: '55 km' },
    { image: `${IMG}/Mathura_Vrindavan/Vishram_Ghat.jpg`, title: 'Vishram Ghat, Mathura', text: 'Aarti on the Yamuna at dusk.', tag: '58 km' },
    { image: `${IMG}/Mathura_Vrindavan/Banke_Bihari_Temple.jpg`, title: 'Banke Bihari, Vrindavan', text: 'Darshan before noon or after five.', tag: '70 km' },
    { image: `${IMG}/Fatehpur_Sikri/Jodha_Bai_Palace.jpg`, title: 'Jodha Bai’s palace', text: 'Inside the ticketed complex at Sikri.', tag: '40 km' },
  ],

  tips: [
    { title: 'Sikri before nine', text: 'The guides and the heat arrive together at Fatehpur Sikri. Be at Buland Darwaza when it opens and you will have the courtyard almost alone.' },
    { title: 'Book the Chambal boat ahead', text: 'The sanctuary boats run from the Bah side and need a day’s notice in season. Tell us the date and we fix the slot with the drive.' },
    { title: 'Pair the trips by road', text: 'Sikri with Bharatpur, Mathura with Vrindavan, Chambal with Bateshwar, Govardhan with Deeg. Each pair is one full-day package, not two half days.' },
  ],

  faqs: [
    { question: 'What are the tourist places within 100 km of Agra?', answer: 'Sikandra (10 km), Keetham lake (20 km), Fatehpur Sikri (40 km), Firozabad (45 km), Bharatpur’s Keoladeo park (55 km), Mathura (58 km), Vrindavan (70 km), Bateshwar (70 km), the Chambal sanctuary (70 km), Govardhan (85 km) and Deeg (95 km). Gwalior is just beyond at 120 km.' },
    { question: 'Which is the best one-day trip from Agra?', answer: 'Fatehpur Sikri and Bharatpur together: Sikri in the morning, Keoladeo park in the afternoon, back by six. In summer, or if birds are not the point, Mathura and Vrindavan with the Prem Mandir at dusk is the alternative.' },
    { question: 'How far is Fatehpur Sikri from Agra and what does a cab cost?', answer: 'About 40 km and an hour west of the Taj. It is inside the 4 hour / 40 km local package, ₹2,200 for a sedan one-way; a same-day return with the car waiting bills the full-day package.' },
    { question: 'How far is Bharatpur from Agra?', answer: 'About 55 km and an hour and a quarter, twenty minutes beyond Fatehpur Sikri on the Jaipur road. Keoladeo is best from November to February and at opening time.' },
    { question: 'How far is Mathura from Agra?', answer: 'About 58 km and an hour and a quarter up the Delhi highway (NH-19). Vrindavan is twelve kilometres beyond Mathura; the two make one full-day trip.' },
    { question: 'Is there a wildlife sanctuary near Agra?', answer: 'Three: Keoladeo National Park at Bharatpur (55 km) for birds, the National Chambal Sanctuary (70 km) for gharials, skimmers and dolphins by boat, and Sur Sarovar at Keetham lake (20 km) for birds and the sloth bear rescue centre.' },
    { question: 'What does a day-trip cab from Agra cost?', answer: 'All the places within 100 km bill on the local packages: a sedan is ₹2,200 for 4 hours and 40 km plus ₹11 per extra kilometre, or ₹3,800 for the 8 hour / 80 km full day. Fatehpur Sikri and Bharatpur as a same-day return is ₹4,730 for a sedan, twice the Bharatpur one-way fare.' },
    { question: 'Can I see Fatehpur Sikri on the way from Agra to Jaipur?', answer: 'Yes. Fatehpur Sikri, Bharatpur and Deeg all lie on the Agra–Jaipur road, so they are the natural stops on a one-way cab to Jaipur. Mathura and Vrindavan lie on the road to Delhi.' },
  ],

  related: [
    { label: 'Agra sightseeing tours', sub: 'City, food and heritage', href: '/sightseeing/agra', img: `${IMG}/Agra/Taj_mahal.jpg` },
    { label: 'Same-day Fatehpur Sikri', sub: '40 km · 3 hrs on site', href: '/same-day-fatehpur-sikri-from-agra', img: `${IMG}/Fatehpur_Sikri/Buland_Darwaza.jpg` },
    { label: 'Same-day Bharatpur', sub: '55 km · Keoladeo', href: '/same-day-bharatpur-from-agra', img: `${IMG}/Bharatpur/Bird_Sanctuary.jpg` },
    { label: 'Same-day Mathura–Vrindavan', sub: '58–70 km', href: '/same-day-mathura-vrindavan-from-agra', img: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg` },
    { label: 'Chambal safari from Agra', sub: '70 km · boat', href: '/sightseeing/agra-to-chambal-safari', img: `${IMG}/Jim_Corbett/Ramganga_River.jpg`, alt: 'River between sandbanks (illustrative; not the Chambal)' },
    { label: 'Same-day Gwalior', sub: '120 km · fort', href: '/same-day-gwalior-from-agra', img: `${IMG}/Jaipur/Nahargarh_Fort.jpg`, alt: 'Nahargarh Fort, Jaipur (illustrative)' },
    { label: 'Agra to Jaipur cab', sub: 'Via Sikri and Bharatpur', href: '/one-way-cab/agra-to-jaipur', img: `${IMG}/Jaipur/Hawa_Mahal.jpg` },
    { label: 'Agra local taxi', sub: 'Half-day and full-day packages', href: '/local-taxi/agra', img: '/images/car/swift_dzire.jpg' },
  ],
  guides: ['places-to-visit-near-me', 'noida-weekend-trips', 'tourist-places-within-50-km-of-amritsar-and-haridwar', 'weekend-getaways-near-me'],

  schema: {
    places: ['agra', 'mathura', 'bharatpur', 'vrindavan', 'gwalior'],
  },
};
