// Week 48 guide 9 — "tourist places near amritsar within 50 kms" (264
// impressions, position 8.6) and "tourist places near haridwar within 50 kms"
// (374, position 9.2). Two short-radius lists on one page, each with its own
// table, because both are answered by the same product: the local half-day cab.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'tourist-places-within-50-km-of-amritsar-and-haridwar',
  path: '/tourist-places-within-50-km-of-amritsar-and-haridwar',
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'tourist places near amritsar / haridwar within 50 kms', impressions: 638, position: 8.9 },

  eyebrow: 'Radius guide · 50 km',
  crumbs: [{ name: 'Amritsar', url: '/amritsar' }, { name: 'Haridwar', url: '/haridwar' }],
  crumbName: 'Within 50 km of Amritsar and Haridwar',
  titleLead: 'Tourist places within 50 km',
  titleAccent: 'of Amritsar, and of Haridwar',
  title: 'Tourist Places Within 50 km of Amritsar, and of Haridwar',
  metaTitle: 'Tourist Places Within 50 km of Amritsar & Haridwar by Cab',
  metaDescription: 'Tourist places within 50 km of Amritsar (Wagah, Tarn Taran, Goindwal Sahib) and within 50 km of Haridwar (Rishikesh, Rajaji park, Neelkanth, Piran Kaliyar). Visit times and half-day cab fares.',
  keywords: ['tourist places near amritsar within 50 kms', 'tourist places near haridwar within 50 kms', 'places near amritsar', 'places near haridwar', 'amritsar to wagah border', 'haridwar to rishikesh', 'half day trip from haridwar'],
  heroImage: `${IMG}/Amritsar/Wagah_Border.jpg`,
  heroAlt: 'The Wagah border ceremony, thirty kilometres from Amritsar',

  lead: 'Within 50 km of Amritsar the places worth a cab are the Wagah border ceremony at 30 km, Tarn Taran’s gurdwara and sarovar at 25 km, Sri Goindwal Sahib and Khadoor Sahib at 40–45 km, the Mughal caravanserai at Sarai Amanat Khan at 30 km and the Ram Tirath temple at 12 km. Within 50 km of Haridwar they are Rishikesh at 25 km, the Chilla gate of Rajaji National Park at 10 km, the Neelkanth Mahadev temple at 45 km, Piran Kaliyar at 25 km and Kankhal on the town’s edge. Every one of them fits the 4 hour / 40 km sedan package from ₹2,200 (₹11 per kilometre past forty), or the full-day package for two together.',
  keyFacts: [
    { label: 'Amritsar radius', value: '6 places' },
    { label: 'Haridwar radius', value: '8 places' },
    { label: 'Furthest', value: 'Kunjapuri · 50 km' },
    { label: 'Sedan, half day', value: 'From ₹2,200' },
  ],
  stickyLabel: 'Half-day cab',
  waText: 'Hi, I want a half-day cab from Amritsar or Haridwar for the places nearby. City and date to follow.',

  intro: [
    'Fifty kilometres is the radius of a half day: out in under an hour, two or three hours there, back for lunch or for dinner. Both of these cities have a good half day in every direction, and both are sold the same way, on the 4 hour / 40 km local package at ₹2,200 for a sedan, with kilometres beyond forty at ₹11 and the 8 hour / 80 km full-day package for the pairings.',
    'The two lists are separate, each with its own table. Amritsar’s radius is Punjab: gurdwaras, the border and a Mughal road. Haridwar’s is the edge of the Himalaya: the Ganga, a national park and the temples on the ridges above Rishikesh.',
  ],

  bands: [
    {
      eyebrow: 'Amritsar',
      heading: 'Tourist places within 50 km of Amritsar',
      note: 'Distances from the Golden Temple. Wagah and Sarai Amanat Khan lie west on the Attari road; Tarn Taran, Goindwal and Khadoor lie south on the Sikh pilgrimage circuit.',
      places: [
        { name: 'Ram Tirath', image: `${IMG}/Amritsar/Amristar_hero_section.jpg`, alt: 'Amritsar, the Golden Temple complex (representative)', distance: '12 km', time: '30 min', fare: '₹2,200', bestFor: 'Valmiki temple, sarovar', highlights: ['Valmiki Tirath', 'Ancient sarovar', 'November fair'], blurb: 'The ashram of Valmiki, where Sita is said to have lived and Luv and Kush were born, with a large sarovar and a modern temple. On the Attari road, so it pairs with Wagah.', href: '/sightseeing/amritsar', cta: 'Amritsar tours' },
        { name: 'Tarn Taran Sahib', image: `${IMG}/Amritsar/Golden_Temple.jpg`, alt: 'Golden Temple, Amritsar (representative)', distance: '25 km', time: '45 min', fare: '₹2,200', bestFor: 'Gurdwara, largest sarovar', highlights: ['Gurdwara Sri Tarn Taran', 'The largest sarovar of any gurdwara', 'Amavasya gathering'], blurb: 'Founded by Guru Arjan Dev, with the largest sarovar of any gurdwara and a monthly gathering on the new moon. Forty-five minutes south, and quiet on most days.', href: '/sightseeing/amritsar-heritage-tour-same-day', cta: 'Amritsar heritage tour' },
        { name: 'Wagah–Attari border', image: `${IMG}/Amritsar/Wagah_Border.jpg`, distance: '30 km', time: '45 min', fare: '₹2,200', bestFor: 'Retreat ceremony at sunset', highlights: ['Beating retreat', 'Gallery seating', 'Arrive by 3.30 pm'], blurb: 'The flag-lowering ceremony every evening, about ninety minutes before sunset. Arrive by half past three for the seating; the car waits in the parking and returns you to the Golden Temple for the evening lighting.', href: '/sightseeing/amritsar-wagah-border-same-day', cta: 'Wagah same-day tour' },
        { name: 'Sarai Amanat Khan', image: `${IMG}/Fatehpur_Sikri/Jodha_Bai_Palace.jpg`, alt: 'Mughal palace courtyard at Fatehpur Sikri (representative)', distance: '30 km', time: '50 min', fare: '₹2,200', bestFor: 'Mughal caravanserai', highlights: ['Tiled gateways', 'Mosque', 'Village inside the walls'], blurb: 'A Mughal caravanserai on the old Lahore road, built by the calligrapher of the Taj Mahal, with glazed-tile gateways and a village living inside the walls. Off the Attari road; pair with Wagah.', href: '/sightseeing/amritsar', cta: 'Amritsar tours' },
        { name: 'Khadoor Sahib', image: `${IMG}/Amritsar/Jallianwala_Bagh.jpg`, alt: 'Jallianwala Bagh, Amritsar (representative)', distance: '40 km', time: '1 hr', fare: '₹2,200', bestFor: 'Guru Angad Dev’s town', highlights: ['Gurdwara Darbar Sahib', 'Eight historic gurdwaras', 'Gurmukhi origins'], blurb: 'Where Guru Angad Dev lived and where the Gurmukhi script was formalised; eight historic gurdwaras in a small town. On the way to Goindwal.', href: '/sightseeing/amritsar-heritage-tour-same-day', cta: 'Amritsar heritage tour' },
        { name: 'Sri Goindwal Sahib', image: `${IMG}/Haridwar/Har_Ki_Pauri.jpg`, alt: 'Ghat steps at Har Ki Pauri, Haridwar (representative)', distance: '45 km', time: '1.25 hrs', fare: '₹2,255', bestFor: 'Baoli of 84 steps', highlights: ['Baoli Sahib', '84 steps', 'Beas riverside'], blurb: 'Guru Amar Das’s town on the Beas, with the eighty-four-step baoli that pilgrims descend reciting the Japji Sahib. The southern edge of the fifty-kilometre ring; Tarn Taran and Khadoor are on the way.', href: '/sightseeing/amritsar-heritage-tour-same-day', cta: 'Amritsar heritage tour' },
        { name: 'Harike wetland (just beyond)', image: `${IMG}/Bharatpur/Migratory_Birds.jpg`, alt: 'Migratory waterbirds at Keoladeo, Bharatpur (representative)', distance: '60 km', time: '1.5 hrs', fare: '₹2,420', bestFor: 'Birds, Nov–Feb', highlights: ['Harike Pattan', 'Migratory waterfowl', 'Sutlej–Beas confluence'], blurb: 'Ten kilometres outside the ring, where the Beas meets the Sutlej: the largest wetland in the north-west and a winter bird sanctuary. Included so the list is honest about what sits just past fifty.', href: '/outstation-cabs/amritsar', cta: 'Amritsar outstation cabs' },
      ],
    },
    {
      eyebrow: 'Haridwar',
      heading: 'Tourist places within 50 km of Haridwar',
      note: 'Distances from Har Ki Pauri. Rishikesh and the ridge temples lie north; Rajaji park surrounds the town; Piran Kaliyar and Roorkee lie south.',
      places: [
        { name: 'Kankhal', image: `${IMG}/Haridwar/Haridwar_hero_section.jpg`, alt: 'Temple town on the Ganga at Haridwar', distance: '4 km', time: '15 min', fare: '₹2,200', bestFor: 'Daksh Mahadev, old ashrams', highlights: ['Daksheshwar Mahadev', 'Sati Kund', 'Anandamayi Ma ashram'], blurb: 'The old quarter on the canal south of the town, older than Haridwar itself. The Daksh temple, the Sati Kund and a lane of nineteenth-century ashrams. An hour, and on foot once you are there.', href: '/sightseeing/haridwar-spiritual-tour', cta: 'Haridwar spiritual tour' },
        { name: 'Rajaji National Park (Chilla)', image: `${IMG}/Jim_Corbett/elephant_safari.jpg`, alt: 'Elephant safari at Jim Corbett (representative)', distance: '10 km', time: '25 min', fare: '₹2,200', bestFor: 'Elephants, jeep safari', highlights: ['Chilla range', 'Wild elephants', 'Nov–Jun safaris'], blurb: 'The park wraps around Haridwar; the Chilla gate is across the barrage. Jeep safaris at dawn and late afternoon from mid-November to June, with the best elephant sightings in the north outside Corbett.', href: '/sightseeing/haridwar-full-day-city-tour', cta: 'Haridwar full-day tour' },
        { name: 'Rishikesh', image: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, distance: '25 km', time: '45 min', fare: '₹2,200', bestFor: 'Ghats, cafés, rafting', highlights: ['Laxman Jhula', 'Triveni Ghat aarti', 'Beatles Ashram'], blurb: 'The obvious half day, and the same-day tour exists for it: the bridges, the Tapovan strip, the Beatles Ashram and the Triveni Ghat aarti at dusk. Rafting from Shivpuri adds fifteen kilometres and a morning.', href: '/sightseeing/haridwar-rishikesh-same-day', cta: 'Haridwar–Rishikesh same day' },
        { name: 'Piran Kaliyar', image: `${IMG}/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg`, alt: 'Ajmer Sharif dargah, Ajmer (representative)', distance: '25 km', time: '45 min', fare: '₹2,200', bestFor: 'Sufi dargah, Roorkee', highlights: ['Dargah of Alauddin Sabir', 'Urs in Rabi ul Awwal', 'Roorkee canal'], blurb: 'The thirteenth-century dargah of Sabir Kaliyari on the Ganga canal near Roorkee, one of the most visited Sufi shrines in the north. Pair with the canal works and IIT campus at Roorkee, five kilometres on.', href: '/sightseeing/haridwar', cta: 'Haridwar tours' },
        { name: 'Shivpuri rafting', image: `${IMG}/Rishikesh/River_Rafting.jpg`, distance: '40 km', time: '1.25 hrs', fare: '₹2,200', bestFor: 'Rafting, camps', highlights: ['16 km rafting stretch', 'Riverside camps', 'Sep–Jun'], blurb: 'Fifteen kilometres up the Badrinath road from Rishikesh, the put-in for the standard sixteen-kilometre raft down to Rishikesh. The season runs from mid-September to June; the camps on the beaches make a night of it.', href: '/sightseeing/rishikesh-adventure-spiritual-tour', cta: 'Rishikesh adventure tour' },
        { name: 'Neelkanth Mahadev', image: `${IMG}/Haridwar/Chandi_Devi_Temple.jpg`, alt: 'Chandi Devi temple above Haridwar (representative)', distance: '45 km', time: '1.5 hrs', fare: '₹2,255', bestFor: 'Ridge temple, forest road', highlights: ['Neelkanth temple', 'Forest road through Rajaji', 'Shravan crowds'], blurb: 'The Shiva temple on the ridge above Rishikesh at about 1,300 metres, reached by a forest road through the park. Ninety minutes from Har Ki Pauri; avoid the month of Shravan unless you want the crowd.', href: '/sightseeing/rishikesh-adventure-spiritual-tour', cta: 'Rishikesh tours' },
        { name: 'Vasishta Gufa', image: `${IMG}/Rishikesh/Beatles_Ashram.jpg`, alt: 'Beatles Ashram, Rishikesh (representative)', distance: '45 km', time: '1.5 hrs', fare: '₹2,255', bestFor: 'Cave, riverbank silence', highlights: ['Meditation cave', 'Ganga beach', 'Ashram'], blurb: 'A cave on the Ganga twenty kilometres above Rishikesh, kept by a small ashram, with a white-sand beach below it. The quietest place within fifty kilometres of Haridwar.', href: '/sightseeing/rishikesh', cta: 'Rishikesh tours' },
        { name: 'Kunjapuri', image: `${IMG}/Nainital/Naina_devi_temple.jpg`, alt: 'Naina Devi temple, Nainital (representative)', distance: '50 km', time: '1.75 hrs', fare: '₹2,310', bestFor: 'Sunrise, Himalayan view', highlights: ['Shakti peeth', 'Sunrise over the range', '308 steps'], blurb: 'A Shakti peeth on a summit above Narendranagar at about 1,650 metres, where the sunrise shows the whole Garhwal range. Leave Haridwar at four; be on the steps by six.', href: '/sightseeing/rishikesh', cta: 'Rishikesh tours' },
      ],
    },
  ],

  table: {
    title: 'Within 50 km of Amritsar: distance, time and fare',
    caption: 'Distance from the Golden Temple, drive time, visit length and half-day sedan fare for tourist places within 50 km of Amritsar',
    intro: 'Distances from the Golden Temple. Sedan fares on the 4 hour / 40 km package at ₹2,200, plus ₹11 for each kilometre beyond forty one-way.',
    columns: [
      { key: 'place', label: 'Place' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive' },
      { key: 'visit', label: 'Time there' },
      { key: 'when', label: 'When' },
      { key: 'fare', label: 'Sedan, half day', align: 'right', strong: true },
    ],
    rows: [
      { place: 'Ram Tirath', distance: '12 km', time: '30 min', visit: '1 hr', when: 'Any; fair in November', fare: '₹2,200' },
      { place: 'Tarn Taran Sahib', distance: '25 km', time: '45 min', visit: '1.5 hrs', when: 'Any; Amavasya crowds', fare: '₹2,200' },
      { place: 'Wagah–Attari border', distance: '30 km', time: '45 min', visit: '2.5 hrs', when: 'Daily, before sunset', fare: '₹2,200' },
      { place: 'Sarai Amanat Khan', distance: '30 km', time: '50 min', visit: '1 hr', when: 'Any', fare: '₹2,200' },
      { place: 'Khadoor Sahib', distance: '40 km', time: '1 hr', visit: '1.5 hrs', when: 'Any', fare: '₹2,200' },
      { place: 'Sri Goindwal Sahib', distance: '45 km', time: '1.25 hrs', visit: '2 hrs', when: 'Any', fare: '₹2,255' },
      { place: 'Harike wetland (60 km)', distance: '60 km', time: '1.5 hrs', visit: 'Half day', when: 'Nov–Feb', fare: '₹2,420' },
    ],
    footnote: 'Wagah plus Sarai Amanat Khan is one half day; Tarn Taran, Khadoor and Goindwal are one full day on the 8 hr / 80 km package at ₹3,800, plus ₹11 for each kilometre beyond eighty. Ertiga ₹2,500 base and ₹15/km; Innova Crysta ₹2,800 and ₹18/km.',
  },

  table2: {
    title: 'Within 50 km of Haridwar: distance, time and fare',
    caption: 'Distance from Har Ki Pauri, drive time, visit length and half-day sedan fare for tourist places within 50 km of Haridwar',
    intro: 'Distances from Har Ki Pauri. The same package and the same rates: ₹2,200 for four hours and forty kilometres, ₹11 per extra kilometre.',
    columns: [
      { key: 'place', label: 'Place' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive' },
      { key: 'visit', label: 'Time there' },
      { key: 'when', label: 'When' },
      { key: 'fare', label: 'Sedan, half day', align: 'right', strong: true },
    ],
    rows: [
      { place: 'Kankhal', distance: '4 km', time: '15 min', visit: '1 hr', when: 'Any', fare: '₹2,200' },
      { place: 'Rajaji park, Chilla gate', distance: '10 km', time: '25 min', visit: '3 hrs safari', when: 'Mid-Nov to Jun', fare: '₹2,200' },
      { place: 'Rishikesh', distance: '25 km', time: '45 min', visit: 'Half day', when: 'Any; rafting Sep–Jun', fare: '₹2,200' },
      { place: 'Piran Kaliyar', distance: '25 km', time: '45 min', visit: '1 hr', when: 'Any; Urs crowds', fare: '₹2,200' },
      { place: 'Shivpuri rafting', distance: '40 km', time: '1.25 hrs', visit: '3 hrs', when: 'Mid-Sep to Jun', fare: '₹2,200' },
      { place: 'Neelkanth Mahadev', distance: '45 km', time: '1.5 hrs', visit: '1.5 hrs', when: 'Any; avoid Shravan', fare: '₹2,255' },
      { place: 'Vasishta Gufa', distance: '45 km', time: '1.5 hrs', visit: '1.5 hrs', when: 'Any', fare: '₹2,255' },
      { place: 'Kunjapuri', distance: '50 km', time: '1.75 hrs', visit: '1.5 hrs', when: 'Sunrise', fare: '₹2,310' },
    ],
    footnote: 'Rishikesh with Neelkanth or Vasishta Gufa is one full day on the 8 hr / 80 km package at ₹3,800, plus ₹11 for each kilometre beyond eighty. Rajaji safari permits and the Chilla jeep are booked separately.',
  },

  sections: [
    {
      eyebrow: 'Amritsar, one half day',
      heading: 'What is the best half day within 50 km of Amritsar?',
      paras: [
        'Wagah, with Sarai Amanat Khan on the way. Leave the Golden Temple at half past one, see the caravanserai’s tiled gateways for an hour, and be at the border seating by half past three for the retreat ceremony. Back at the Golden Temple by seven, when the lamps are lit and the queue is shortest. That is the half day most first-time visitors should take, and it fits the ₹2,200 half-day package, with the hour or so beyond four billed at the local rate.',
        'The other half day is the southern gurdwara run: Tarn Taran, Khadoor Sahib and Goindwal Sahib in that order, which is really a full day on the 8 hour / 80 km package, with kilometres beyond eighty at ₹11, and is the trip pilgrims come to Amritsar to make.',
      ],
      link: { label: 'Amritsar Golden Temple and Wagah tour', href: '/sightseeing/amritsar-golden-temple-wagah-border-tour' },
      image: { src: `${IMG}/Amritsar/Jallianwala_Bagh.jpg`, alt: 'Jallianwala Bagh memorial in Amritsar', tag: 'In the city', caption: 'Inside the walls: Jallianwala Bagh and the Partition Museum are on foot from the Golden Temple, before the car is needed.' },
    },
    {
      eyebrow: 'Haridwar, one half day',
      heading: 'What is the best half day within 50 km of Haridwar?',
      paras: [
        'Rishikesh, which is why the same-day tour is the most booked trip from the city. Forty-five minutes up the river, the bridges and the Tapovan strip, the Beatles Ashram if you want it, and the aarti at Triveni Ghat, which is quieter than Haridwar’s and just as good. Add Shivpuri for rafting and it becomes a full day.',
        'The half day nobody expects is Rajaji. The Chilla gate is ten minutes across the barrage, and a dawn jeep safari from mid-November to June gives you wild elephants and sal forest before breakfast, with the aarti at Har Ki Pauri still to come that evening.',
      ],
      link: { label: 'Haridwar–Rishikesh same-day tour', href: '/sightseeing/haridwar-rishikesh-same-day' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab for these places cost?',
      paras: [
        'Every place on this page is inside the 4 hour / 40 km local package, which is ₹2,200 for a sedan with the car waiting while you visit; the few that sit past forty kilometres add ₹11 for each extra kilometre, so Goindwal or Neelkanth is about ₹2,255. Two places together bill the 8 hour / 80 km full-day package. An Ertiga starts at ₹2,500 and ₹15 a kilometre, an Innova Crysta at ₹2,800 and ₹18.',
        'None of this is an outstation booking, so the 300 km minimum does not apply. Wagah tickets are free; Rajaji safari permits, the Chilla jeep and rafting are paid to the operators at actual.',
      ],
      link: { label: 'The local 4 hr / 40 km package', href: '/4hr-40km-local-cab' },
    },
    {
      eyebrow: 'Season',
      heading: 'When are the places around Amritsar and Haridwar best?',
      paras: [
        'Amritsar’s radius is a winter one: November to March for the gurdwara circuit and the border, with Harike’s birds from November to February. April to June is very hot on the plain, and the Wagah stands are in full sun; go anyway, but late. Haridwar’s radius runs all year, with three seasonal notes: rafting from mid-September to June, Rajaji safaris from mid-November to June, and Neelkanth to be avoided in Shravan, July to August, when the kanwariya pilgrimage fills the road.',
      ],
      image: { src: `${IMG}/Rishikesh/Triveni_Ghat.jpg`, alt: 'Evening aarti at Triveni Ghat, Rishikesh', tag: 'Rishikesh · 25 km', side: 'left', caption: 'Triveni Ghat aarti: the end of Haridwar’s best half day.' },
    },
  ],

  fare: {
    title: 'A half day from Amritsar or Haridwar',
    note: 'The 4 hour / 40 km package, with the car waiting while you visit. Every place on this page fits it, alone or in pairs with the full-day package.',
    caption: 'Half-day and full-day local cab fares from Amritsar or Haridwar by vehicle',
    oneWayLabel: '4 hr / 40 km',
    roundLabel: '8 hr / 80 km',
    rows: [
      { vehicle: 'Sedan (Swift Dzire, Etios)', seats: '4', rate: '+₹11/km beyond', fare: '₹2,200', roundTrip: '₹3,800' },
      { vehicle: 'Ertiga / SUV', seats: '6', rate: '+₹15/km beyond', fare: '₹2,500', roundTrip: 'On request' },
      { vehicle: 'Innova Crysta', seats: '6–7', rate: '+₹18/km beyond', fare: '₹2,800', roundTrip: 'On request' },
      { vehicle: 'Tempo Traveller (12-seater)', seats: '12', rate: '+₹23/km beyond', fare: '₹2,800', roundTrip: 'On request' },
    ],
    footnote: 'Extra kilometres and hours at the published local rates. Safari permits, rafting and parking at actual.',
    waText: 'Hi, I want a half-day local cab in Amritsar or Haridwar. City, places and date to follow.',
    bookHref: '/4hr-40km-local-cab',
    bookLabel: 'Local package details',
    cta: 'Book a half day',
  },

  galleryTitle: 'Two radii, in pictures',
  gallery: [
    { image: `${IMG}/Amritsar/Wagah_Border.jpg`, title: 'Wagah retreat', text: 'Thirty kilometres from the Golden Temple.', tag: 'Amritsar · 30 km' },
    { image: `${IMG}/Amritsar/Golden_Temple.jpg`, title: 'Harmandir Sahib', text: 'Back by seven for the lamps.', tag: 'Amritsar' },
    { image: `${IMG}/Rishikesh/Ram_Jhula.jpg`, title: 'Ram Jhula', text: 'Forty-five minutes from Har Ki Pauri.', tag: 'Haridwar · 25 km' },
    { image: `${IMG}/Haridwar/Ganga_Aarti.jpg`, title: 'Har Ki Pauri aarti', text: 'The end of every Haridwar day.', tag: 'Haridwar' },
    { image: `${IMG}/Rishikesh/River_Rafting.jpg`, title: 'Shivpuri', text: 'Rafting from mid-September.', tag: 'Haridwar · 40 km' },
  ],

  tips: [
    { title: 'Wagah: seats by 3.30', text: 'The stands fill an hour before the ceremony. The driver drops you at the last checkpoint and waits in the parking; carry ID, leave bags in the car.' },
    { title: 'Rajaji: book the jeep, not just the cab', text: 'The Chilla safari needs a permit and a registered jeep. Tell us the date and we fix both; the cab takes you to the gate.' },
    { title: 'Pair by direction', text: 'Wagah with Sarai Amanat Khan; Tarn Taran with Khadoor and Goindwal; Rishikesh with Neelkanth or Vasishta Gufa. One package each, with kilometres beyond the package at ₹11.' },
  ],

  faqs: [
    { question: 'What are the tourist places within 50 km of Amritsar?', answer: 'Ram Tirath (12 km), Tarn Taran Sahib (25 km), the Wagah–Attari border (30 km), Sarai Amanat Khan (30 km), Khadoor Sahib (40 km) and Sri Goindwal Sahib (45 km). Harike wetland is just beyond at 60 km.' },
    { question: 'What are the tourist places within 50 km of Haridwar?', answer: 'Kankhal (4 km), the Chilla gate of Rajaji National Park (10 km), Rishikesh (25 km), Piran Kaliyar (25 km), Shivpuri rafting (40 km), Neelkanth Mahadev (45 km), Vasishta Gufa (45 km) and Kunjapuri (50 km).' },
    { question: 'How far is Wagah border from Amritsar and what does a cab cost?', answer: 'About 30 km and forty-five minutes west of the Golden Temple. It fits the 4 hour / 40 km sedan package at ₹2,200 with the car waiting through the ceremony; arrive by half past three for seating.' },
    { question: 'How far is Rishikesh from Haridwar and what does a cab cost?', answer: 'About 25 km and forty-five minutes up the Ganga. A half day on the 4 hour / 40 km package is ₹2,200 for a sedan; the same-day tour with rafting at Shivpuri bills the full-day package.' },
    { question: 'Can I do a half-day trip from Haridwar without an outstation booking?', answer: 'Yes. Everything within 50 km bills on the local package, ₹2,200 for four hours and forty kilometres, with no 300 km minimum. Two places together bill the 8 hour / 80 km full day at ₹3,800.' },
    { question: 'Which places near Amritsar are on the Sikh pilgrimage circuit?', answer: 'Tarn Taran Sahib, Khadoor Sahib and Sri Goindwal Sahib, in that order going south, all within 45 km. They make one full day from the Golden Temple on the 8 hour / 80 km package at ₹3,800, plus ₹11 for each kilometre beyond eighty.' },
    { question: 'Is there a wildlife park near Haridwar?', answer: 'Rajaji National Park surrounds the town; the Chilla gate is 10 km away across the Ganga barrage. Jeep safaris run at dawn and late afternoon from mid-November to June and elephants are commonly seen.' },
    { question: 'When is the best time for these trips?', answer: 'Amritsar’s radius is best from November to March. Haridwar’s runs all year, with rafting from mid-September to June, Rajaji safaris from mid-November to June, and Neelkanth best avoided in Shravan (July–August).' },
  ],

  related: [
    { label: 'Amritsar Wagah same-day tour', sub: 'Border ceremony', href: '/sightseeing/amritsar-wagah-border-same-day', img: `${IMG}/Amritsar/Wagah_Border.jpg` },
    { label: 'Amritsar heritage tour', sub: 'Gurdwara circuit', href: '/sightseeing/amritsar-heritage-tour-same-day', img: `${IMG}/Amritsar/Golden_Temple.jpg` },
    { label: 'Amritsar to Wagah distance', sub: 'Road facts', href: '/distance/amritsar-to-wagah-border', img: `${IMG}/Amritsar/Partition_Museum.jpg` },
    { label: 'Haridwar–Rishikesh same day', sub: 'The classic half day', href: '/sightseeing/haridwar-rishikesh-same-day', img: `${IMG}/Rishikesh/Laxman_Jhula.jpg` },
    { label: 'Haridwar spiritual tour', sub: 'Kankhal and the temples', href: '/sightseeing/haridwar-spiritual-tour', img: `${IMG}/Haridwar/Mansa_Devi_Temple.jpg` },
    { label: 'Rishikesh adventure tour', sub: 'Rafting and Neelkanth', href: '/sightseeing/rishikesh-adventure-spiritual-tour', img: `${IMG}/Rishikesh/River_Rafting.jpg` },
    { label: 'Places to visit near Amritsar', sub: 'The wider list', href: '/places-to-visit-near-amritsar', img: `${IMG}/Amritsar/Amristar_hero_section.jpg` },
    { label: 'Places to visit near Haridwar', sub: 'The wider list', href: '/places-to-visit-near-haridwar', img: `${IMG}/Haridwar/Har_Ki_Pauri.jpg` },
  ],
  guides: ['hill-stations-near-amritsar', 'hill-stations-near-haridwar-rishikesh', 'best-time-to-visit-amritsar', 'tourist-places-within-100-km-of-agra'],

  schema: {
    places: ['amritsar', 'haridwar', 'rishikesh'],
  },
};
