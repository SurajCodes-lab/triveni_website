// Week 49 near-city guide — the rebuild of /places-to-visit-near-lucknow,
// published in place on the existing URL (inPlace: true; the route file is
// wired separately). The fifteen destinations, their distances, drive times,
// highlights and best months are exactly the ones placesToVisitPages.lucknow
// carries, regrouped by distance ring with a paragraph on each; the Lucknow
// to Ayodhya and Lucknow to Varanasi toll pages supply the two toll figures.
// The six questions the current page asks are kept in the searcher's words.
// Fares are never typed: each card carries km and the composer computes the
// sedan fare (the local package below 100 km, the 300 km minimum above it),
// and the fare block computes the vehicle table from the 300 km minimum.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'places-to-visit-near-lucknow',
  path: '/places-to-visit-near-lucknow',
  inPlace: true,
  mood: 'roadtrip',
  cluster: 'nearme',
  publishedOn: '2026-09-15',
  updatedOn: '2026-09-15',
  search: { query: 'places to visit near lucknow' },

  eyebrow: 'Places guide · Lucknow',
  crumbs: [{ name: 'Lucknow', url: '/lucknow' }],
  crumbName: 'Places to visit near Lucknow',
  titleLead: 'Places to visit near Lucknow:',
  titleAccent: 'fifteen drives, by distance ring',
  title: 'Places to Visit Near Lucknow: Fifteen Drives, by Distance Ring',
  metaTitle: 'Places to Visit Near Lucknow: 15 Drives by Distance Ring',
  metaDescription: 'Places to visit near Lucknow by distance: Unnao, Kanpur and Naimisharanya within 100 km, Ayodhya and Prayagraj within 200, Varanasi and Dudhwa within 300, Agra and Delhi beyond. Seasons and fares.',
  keywords: ['places to visit near lucknow', 'tourist places near lucknow', 'places near lucknow within 100 km', 'places near lucknow within 200 km', 'weekend places near lucknow', 'day trip from lucknow', 'lucknow to ayodhya', 'lucknow to varanasi'],
  heroImage: `${IMG}/Ayodhya/Ram_Mandir.jpg`,
  heroAlt: 'Ram Mandir at Ayodhya, 135 km and two and a half hours from Lucknow',

  lead: 'Lucknow sits in the middle of the Awadh plain with the Agra–Lucknow Expressway running west and the Purvanchal roads running east, and the places worth driving to sort themselves by distance ring. Within 100 km: Unnao at 55 km, Kanpur at 85 and Naimisharanya at 90. Within 200 km: Ayodhya at 135, Sultanpur at 140 and Prayagraj at 200. Within 300 km: Dudhwa at 230, Chitrakoot and Mathura at 280, Fatehpur Sikri and Jhansi at 290 and Varanasi at 300. Beyond that ring: Sarnath at 310, Agra at 330 and Delhi at 500. Every trip to the 300 km ring bills the rate card on the 300 km per day minimum: a sedan at ₹11/km, an Ertiga or SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23, tolls and parking at actuals; the short runs under 100 km are priced on the local package.',
  keyFacts: [
    { label: 'Within 100 km', value: 'Unnao · Kanpur · Naimisharanya' },
    { label: 'Within 200 km', value: 'Ayodhya · Sultanpur · Prayagraj' },
    { label: 'Within 300 km', value: 'Dudhwa · Chitrakoot · Varanasi' },
    { label: 'Sedan rate', value: '₹11/km · 300 km min' },
  ],
  stickyLabel: 'Lucknow outstation cab',
  waText: 'Hi, I need a cab from Lucknow for a trip. Pickup area, destination and dates to follow.',

  intro: [
    'The useful way to read a list of places near Lucknow is by ring, because the ring decides the trip. Within 100 km is a morning or a day on the local package. Within 200 km is a full day out, and for Ayodhya the most-driven day trip in the state. Within 300 km is a weekend, and the ring where the 300 km per day minimum makes every destination cost the same. Beyond 300 km is a long weekend or a one-way drop, priced on the distance. The fifteen places below are the ones our Lucknow list has always carried; what is new is the grouping, a paragraph on each, and a table that puts the season beside the distance.',
    'Every distance, drive time and best month is from that list. Fares come from the published rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km and a 12-seater Tempo Traveller ₹23/km, on a 300 km per day minimum, tolls and parking at actuals; below 100 km the 4 hour / 40 km local package applies, with distance beyond the forty added at the per-kilometre rate. Pickups dispatch from the Lucknow zone, so a Gomti Nagar, Hazratganj, Alambagh or airport start goes straight onto the expressway or the eastern highway.',
  ],

  bands: [
    {
      eyebrow: 'Ring one',
      heading: 'Within 100 km: a morning, or a day on the local package',
      note: 'All three are under the 100 km line, so they are quoted on the local package rather than the outstation minimum; the composer shows the sedan figure on each card.',
      places: [
        { name: 'Unnao', image: `${IMG}/Lucknow/British_Residency.jpg`, alt: 'The British Residency at Lucknow; Unnao is an hour down the Kanpur road', distance: '55 km', time: '1 hr', km: 55, bestFor: 'Nawabganj Bird Sanctuary', highlights: ['Nawabganj Bird Sanctuary', 'Unnao Balaji Temple', 'Leather Markets'], blurb: 'An hour down the Kanpur road to the Nawabganj Bird Sanctuary, with migratory and resident birds on the wetland, and a peaceful half-day birding trip from the city. October to March, when the migrants are in.', href: '/local-taxi/lucknow', cta: 'Lucknow local cab' },
        { name: 'Kanpur', image: `${IMG}/Lucknow/Hazratganj.jpg`, alt: 'Hazratganj, Lucknow; Kanpur is an hour and a half west', distance: '85 km', time: '1.5 hrs', km: 85, bestFor: 'Industrial city, leather', highlights: ['Allen Forest Zoo', 'Phool Bagh', 'Massacre Ghat'], blurb: 'The state’s industrial capital, an hour and a half west: Allen Forest Zoo for a family morning, Phool Bagh and the Massacre Ghat memorial, and the leather markets of Jajmau. A quick day trip from Lucknow on our list, and the nearest city to it.', href: '/one-way-cab/lucknow-to-kanpur', cta: 'Cab to Kanpur' },
        { name: 'Naimisharanya', image: `${IMG}/Ayodhya/Saryu_River_Ghat.jpg`, alt: 'River ghats at Ayodhya; Naimisharanya has its own on the Gomti', distance: '90 km', time: '2 hrs', km: 90, bestFor: 'Hindu pilgrimage', highlights: ['Chakra Tirth', 'Vyasa Gaddi', 'Lalita Devi Temple'], blurb: 'One of the holiest pilgrimage sites in the north, where sage Vyasa is believed to have narrated the Puranas: Chakra Tirth, Vyasa Gaddi and the Lalita Devi temple in a forest retreat two hours from the city. October to March.', href: '/outstation-cabs/lucknow', cta: 'Outstation cab from Lucknow' },
      ],
    },
    {
      eyebrow: 'Ring two',
      heading: '100 to 200 km: the full day out',
      note: 'East on the Ayodhya and Sultanpur roads, south on the Prayagraj road. All three bill the 300 km minimum for the day, and Ayodhya is the day trip Lucknow makes most.',
      places: [
        { name: 'Ayodhya', image: `${IMG}/Ayodhya/Ram_Mandir.jpg`, distance: '135 km', time: '2.5 hrs', km: 135, bestFor: 'Ram Mandir, pilgrimage', highlights: ['Ram Mandir', 'Hanuman Garhi', 'Saryu Ghats'], blurb: 'The birthplace of Lord Ram and now the Ram Mandir, two and a half hours east: the temple, Hanuman Garhi and Kanak Bhawan on foot from the parking, and the Saryu ghats for the evening aarti. A comfortable day trip on our list, back by evening; a night for Deepotsav. October to March.', href: '/lucknow-to-ayodhya', cta: 'Cab to Ayodhya' },
        { name: 'Sultanpur', image: `${IMG}/Lucknow/Rumi_Darwaza.jpg`, alt: 'Rumi Darwaza, Lucknow; Sultanpur is three hours east on the Varanasi road', distance: '140 km', time: '3 hrs', km: 140, bestFor: 'Historical, Sufi heritage', highlights: ['Jama Masjid', 'Sufi Shrines', 'Sultanpur Ruins'], blurb: 'An ancient town on the Gomti with historical mosques, Sufi shrines and the ruins of the Sharqi period, three hours east on the road to Varanasi. A peaceful cultural trip, and a halt on the way to the ghats. October to March.', href: '/outstation-cabs/lucknow', cta: 'Outstation cab from Lucknow' },
        { name: 'Prayagraj', image: `${IMG}/Prayagraj/Triveni_Sangam.jpg`, distance: '200 km', time: '3–4 hrs', km: 200, bestFor: 'Sangam, Kumbh Mela', highlights: ['Triveni Sangam', 'Anand Bhawan', 'Allahabad Fort'], blurb: 'The Sangam where the Ganga, the Yamuna and the Saraswati meet, three to four hours south: a boat to the confluence, Anand Bhawan and the fort, and the Kumbh Mela ground in its year. A long day or an easy night. October to March.', href: '/one-way-cab/lucknow-to-prayagraj', cta: 'Cab to Prayagraj' },
      ],
    },
    {
      eyebrow: 'Ring three',
      heading: '200 to 300 km: the weekend ring, where every trip costs the same',
      note: 'Everything here is up to 300 km one-way, so a two-day trip to any of them bills the same minimum for a given car. Varanasi east, the Bundelkhand and Braj towns west and south, Dudhwa north.',
      places: [
        { name: 'Dudhwa', image: `${IMG}/Jim_Corbett/Tiger_Safari_Corbett.jpg`, alt: 'A jeep safari in the Terai forest; Dudhwa is the same country on the Nepal border', distance: '230 km', time: '5 hrs', km: 230, bestFor: 'Tiger safari, wetlands', highlights: ['Tiger Safari', 'Rhino Habitat', 'Tharu Villages'], blurb: 'The national park on the Nepal border, five hours north, with tigers, rhinos and swamp deer in the Terai grassland and the Tharu villages around it. An offbeat wildlife weekend; the safari is booked with the forest department before the cab. November to June.', href: '/outstation-cabs/lucknow', cta: 'Outstation cab from Lucknow' },
        { name: 'Chitrakoot', image: `${IMG}/Ayodhya/Hanuman_Garhi.jpg`, alt: 'Hanuman Garhi at Ayodhya; Chitrakoot is the other Ram town, on the Mandakini', distance: '280 km', time: '5–6 hrs', km: 280, bestFor: 'Pilgrimage, waterfalls', highlights: ['Ram Ghat', 'Kamadgiri', 'Hanuman Dhara'], blurb: 'Where Lord Ram spent the years of exile: Ram Ghat on the Mandakini, the Kamadgiri parikrama and Hanuman Dhara on its hill, in forested country five to six hours south. A weekend, and often paired with Prayagraj on the way. October to March.', href: '/outstation-cabs/lucknow', cta: 'Outstation cab from Lucknow' },
        { name: 'Mathura', image: `${IMG}/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg`, distance: '280 km', time: '4 hrs', km: 280, bestFor: 'Krishna Janmabhoomi, temples', highlights: ['Krishna Janmabhoomi', 'Dwarkadhish Temple', 'Goverdhan'], blurb: 'The birthplace of Lord Krishna, four hours west on the expressway: Krishna Janmabhoomi, Dwarkadhish and the Vishram Ghat aarti, with Vrindavan beside it and Govardhan a short run further. Holi here is the one to see. October to March.', href: '/outstation-cabs/lucknow', cta: 'Outstation cab from Lucknow' },
        { name: 'Fatehpur Sikri', image: `${IMG}/Fatehpur_Sikri/Buland_Darwaza.jpg`, distance: '290 km', time: '4 hrs', km: 290, bestFor: 'Mughal heritage, UNESCO', highlights: ['Buland Darwaza', 'Panch Mahal', 'Salim Chishti Tomb'], blurb: 'Akbar’s abandoned capital, four hours west: the Buland Darwaza, the Panch Mahal and the tomb of Salim Chishti in red sandstone. Our list says it is best combined with Agra, and the expressway makes that a single weekend. October to March.', href: '/outstation-cabs/lucknow', cta: 'Outstation cab from Lucknow' },
        { name: 'Jhansi', image: `${IMG}/Lucknow/Bara_Imambara.jpg`, alt: 'Bara Imambara, Lucknow; Jhansi is five hours south-west in Bundelkhand', distance: '290 km', time: '5 hrs', km: 290, bestFor: 'Rani Lakshmibai, fort', highlights: ['Jhansi Fort', 'Rani Mahal', 'Gateway to Orchha'], blurb: 'The city of Rani Lakshmibai, five hours south-west: the fort, the Rani Mahal, and the gateway to Orchha, which our list puts 18 km beyond Jhansi and which is the reason to stay the night. October to March.', href: '/outstation-cabs/lucknow', cta: 'Outstation cab from Lucknow' },
        { name: 'Varanasi', image: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, distance: '300 km', time: '5–6 hrs', km: 300, bestFor: 'The ghats, Ganga aarti', highlights: ['Dashashwamedh Ghat', 'Kashi Vishwanath', 'Ganga Aarti'], blurb: 'The oldest living city, five to six hours east on the Purvanchal roads: the ghats, the evening aarti at Dashashwamedh, Kashi Vishwanath on foot from Godowlia and a boat at sunrise. The weekend Lucknow makes most after Ayodhya, and the two join with Prayagraj into a three-day triangle. October to March.', href: '/lucknow-to-varanasi', cta: 'Cab to Varanasi' },
      ],
    },
    {
      eyebrow: 'Beyond the ring',
      heading: 'Beyond 300 km: the long weekend, priced on the distance',
      note: 'Past 300 km one-way the fare follows the kilometres. Sarnath sits just beyond Varanasi; Agra and Delhi are the expressway west, and both are common one-way drops.',
      places: [
        { name: 'Sarnath', image: `${IMG}/Varanasi/Sarnath.jpg`, distance: '310 km', time: '5–6 hrs', km: 310, bestFor: 'Buddhist heritage, museum', highlights: ['Dhamek Stupa', 'Ashoka Pillar', 'Sarnath Museum'], blurb: 'Where the Buddha gave his first sermon, ten kilometres beyond Varanasi on the Cantonment side: the Dhamek Stupa, the Ashoka pillar and the archaeological museum with its sculptures. Done as the afternoon of a Varanasi weekend with the same car. October to March.', href: '/lucknow-to-varanasi', cta: 'Cab to Varanasi and Sarnath' },
        { name: 'Agra', image: `${IMG}/Agra/Taj_mahal.jpg`, distance: '330 km', time: '4–5 hrs', km: 330, bestFor: 'Taj Mahal, heritage', highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri'], blurb: 'The Agra–Lucknow Expressway makes the Taj four to five hours away, the fastest 330 km in the state: the Taj at sunrise with a night in Agra, the fort after, Fatehpur Sikri on the way home. A weekend, or a one-way drop on the way to Delhi. October to March.', href: '/lucknow-to-agra', cta: 'Cab to Agra' },
        { name: 'Delhi', image: `${IMG}/Delhi/India_Gate.jpg`, distance: '500 km', time: '6–7 hrs', km: 500, bestFor: 'Capital, monuments', highlights: ['Red Fort', 'India Gate', 'Qutub Minar'], blurb: 'The capital by the Agra–Lucknow and Yamuna expressways, six to seven hours: the Red Fort, India Gate and Qutub Minar, and the airport and the trains beyond. The most-booked one-way drop from Lucknow, priced on the distance. October to March.', href: '/lucknow-to-delhi', cta: 'Cab to Delhi' },
      ],
    },
  ],

  table: {
    title: 'Places to visit near Lucknow: distance, time, season and how long to give it',
    caption: 'Distance from Lucknow, drive time, best season and the recommended trip length for fifteen places to visit near Lucknow',
    intro: 'Distances, drive times and seasons are from our Lucknow places list. The last column is how long our drivers suggest giving each place. Everything from 100 to 300 km bills the same 300 km per day minimum for a given car; the three places under 100 km are quoted on the local package, and the three beyond the ring bill on their distance.',
    columns: [
      { key: 'place', label: 'Destination' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'season', label: 'Best season' },
      { key: 'give', label: 'Give it', strong: true },
    ],
    rows: [
      { place: 'Unnao', distance: '55 km', time: '1 hr', season: 'Oct–Mar', give: 'A morning on the local package' },
      { place: 'Kanpur', distance: '85 km', time: '1.5 hrs', season: 'Oct–Mar', give: 'A day on the local package' },
      { place: 'Naimisharanya', distance: '90 km', time: '2 hrs', season: 'Oct–Mar', give: 'A day on the local package' },
      { place: 'Ayodhya', distance: '135 km', time: '2.5 hrs', season: 'Oct–Mar', give: 'A day; a night for Deepotsav' },
      { place: 'Sultanpur', distance: '140 km', time: '3 hrs', season: 'Oct–Mar', give: 'A day, or a halt on the Varanasi road' },
      { place: 'Prayagraj', distance: '200 km', time: '3–4 hrs', season: 'Oct–Mar', give: 'A long day, or one night' },
      { place: 'Dudhwa', distance: '230 km', time: '5 hrs', season: 'Nov–Jun', give: 'Two nights, safari booked first' },
      { place: 'Chitrakoot', distance: '280 km', time: '5–6 hrs', season: 'Oct–Mar', give: 'One night; two with Prayagraj' },
      { place: 'Mathura', distance: '280 km', time: '4 hrs', season: 'Oct–Mar', give: 'One night, with Vrindavan' },
      { place: 'Fatehpur Sikri', distance: '290 km', time: '4 hrs', season: 'Oct–Mar', give: 'With Agra, one weekend' },
      { place: 'Jhansi', distance: '290 km', time: '5 hrs', season: 'Oct–Mar', give: 'One night, for Orchha' },
      { place: 'Varanasi', distance: '300 km', time: '5–6 hrs', season: 'Oct–Mar', give: 'Two nights; three for the triangle' },
      { place: 'Sarnath', distance: '310 km', time: '5–6 hrs', season: 'Oct–Mar', give: 'An afternoon of the Varanasi weekend' },
      { place: 'Agra', distance: '330 km', time: '4–5 hrs', season: 'Oct–Mar', give: 'One night, for the sunrise Taj' },
      { place: 'Delhi', distance: '500 km', time: '6–7 hrs', season: 'Oct–Mar', give: 'A one-way drop, or two nights' },
    ],
    footnote: 'Sedan ₹11/km on a 300 km per day minimum; destinations beyond 300 km one-way bill their distance; under 100 km the 4 hour / 40 km local package applies. Tolls at actuals on FASTag: the Lucknow to Ayodhya toll page lists Barabanki and Faizabad at ₹150 for a car, and the Lucknow to Varanasi toll page lists Sultanpur and Jaunpur at ₹185.',
  },

  sections: [
    {
      eyebrow: 'Direction',
      heading: 'Which way do the drives from Lucknow go, and which road is fastest?',
      paras: [
        'West is the expressway. The Agra–Lucknow Expressway, in our list’s words, has dramatically reduced travel times, and it makes Agra 330 km and four to five hours, Fatehpur Sikri 290 km and four, Mathura 280 km and four, and Delhi 500 km and six to seven by the Yamuna Expressway beyond Agra. It is the fastest road out of the city by a distance, and it is the reason the Taj is a weekend from Lucknow rather than an expedition. Kanpur and Unnao sit on the same side, an hour or two down the old highway.',
        'East is the pilgrim country. Ayodhya is 135 km and two and a half hours on the Barabanki road; Sultanpur is 140 km and three hours on the Varanasi road, and Varanasi itself 300 km and five to six hours, with Sarnath just beyond it. South is Prayagraj at 200 km and three to four hours, and Chitrakoot at 280 km and five to six, on slower roads through the Awadh and Bundelkhand country; Jhansi is the far south-west at 290 km and five hours. North is Dudhwa alone, 230 km and five hours to the Nepal border. The ring tells you the fare; the direction tells you the hours, and the expressway side is quick for its kilometres while the pilgrim side is not.',
      ],
      image: { src: `${IMG}/Lucknow/Rumi_Darwaza.jpg`, alt: 'Rumi Darwaza in Lucknow, the start of every drive on this page', tag: 'Lucknow · km 0', caption: 'West is the expressway and quick; east and south are the pilgrim roads, slower for their kilometres.' },
    },
    {
      eyebrow: 'Day trips',
      heading: 'Which places near Lucknow can I visit in one day?',
      paras: [
        'Ayodhya, first and by a distance. Our list calls it a comfortable day trip: 135 km and two and a half hours each way, the Ram Mandir, Hanuman Garhi and the Saryu ghats in between, and back by evening. Kanpur at 85 km and Naimisharanya at 90 km are the other easy days, on the local package rather than the outstation minimum; Unnao at 55 km is a morning. Sultanpur at 140 km and three hours is a day for anyone interested in the Sharqi heritage, and Prayagraj at 200 km and three to four hours is a long day that works with an early start and the Sangam boat first.',
        'Beyond that the days turn into nights. Varanasi at 300 km can be reached and left in a day, but the aarti is in the evening and the ghats are at their best at sunrise, so it is a weekend by any honest reckoning, and Agra at 330 km is the same for the sunrise Taj. The same-day Ayodhya page prices the up-and-down with the car waiting, and it is the page most Lucknow families book first.',
      ],
      link: { label: 'Same-day Ayodhya from Lucknow', href: '/same-day-ayodhya-from-lucknow' },
    },
    {
      eyebrow: 'Weekends',
      heading: 'What are the best weekend trips from Lucknow?',
      paras: [
        'The weekend ring is the 200 to 300 km band and the pilgrim towns fill it. Varanasi is the classic Lucknow weekend, five to six hours east and built for two nights: the aarti on the first evening, the boat at sunrise, Kashi Vishwanath from Godowlia, Sarnath in the afternoon. Prayagraj and Chitrakoot make the southern pair, the Sangam and then the exile country of Ram, five to six hours further. Dudhwa is the wildlife weekend, two nights on the Nepal border with the safaris booked before the cab. Mathura and Fatehpur Sikri with Agra are the western weekends on the expressway, and Jhansi with Orchha the Bundelkhand one.',
        'The trip that joins the most of them is the triangle: Varanasi, Ayodhya and Prayagraj over three days, which our road guide plans leg by leg and which starts as easily from Lucknow as from Varanasi, with Ayodhya first because it is nearest. Deepotsav at Ayodhya in the Diwali week is the one date on this page to book weeks ahead; our Deepotsav guide covers the day.',
      ],
      link: { label: 'Varanasi, Ayodhya and Prayagraj by road', href: '/varanasi-ayodhya-prayagraj-by-road' },
      image: { src: `${IMG}/Varanasi/Boat_Ride_Ganges.jpg`, alt: 'A boat on the Ganga at Varanasi at sunrise', tag: 'Varanasi · 300 km', side: 'left', caption: 'Varanasi is the classic Lucknow weekend: the aarti on the first evening, the boat at sunrise.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Lucknow to these places cost?',
      paras: [
        'For everything from 100 to 300 km one-way, the same for a given car. Outstation cabs bill a 300 km per day minimum, so Ayodhya at 135 km and Varanasi at 300 both cost the minimum at the vehicle’s rate: ₹11/km for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller. A two-day weekend is two days at the minimum. Fuel and the driver are inside those figures; tolls, parking and any state charges are extra at actuals. The fare box below does the arithmetic, and each card on the boards shows the sedan figure for that place.',
        'Under 100 km the pricing changes: Unnao, Kanpur and Naimisharanya are quoted on the 4 hour / 40 km local package, with the distance beyond forty kilometres added at the per-kilometre rate, which is why their cards show a lower figure than the minimum. Beyond 300 km the fare follows the distance: Sarnath at 310 km, Agra at 330 and Delhi at 500 bill their kilometres at the rate, and a long weekend bills the greater of the distance or the days at the minimum. Tolls are the variable in every case: the Lucknow to Ayodhya toll page lists two plazas, Barabanki and Faizabad, at ₹150 for a car one-way, and the Lucknow to Varanasi toll page lists Sultanpur and Jaunpur at ₹185, with the Purvanchal Expressway an alternative at its own charges; the rest are paid on the driver’s FASTag at actuals.',
      ],
      link: { label: 'Outstation cabs from Lucknow', href: '/outstation-cabs/lucknow' },
    },
    {
      eyebrow: 'Season',
      heading: 'When is the best time to visit each place near Lucknow?',
      paras: [
        'October to March, almost across the board: our list gives those months for every pilgrim town, every Mughal site and the capital, because the Awadh plain is hot from April and the monsoon makes the slower roads slower. The exceptions are Dudhwa, which is November to June while the park is open and the grass is short enough to see through, and the birds at Nawabganj, which are a winter morning like every wetland in the north.',
        'Inside the season the dates matter more than the months. Deepotsav at Ayodhya in the Diwali week and Ram Navami in spring fill the town and the road; Dev Deepawali at Varanasi in November is spectacular, as our Varanasi distance page says, and books out; Holi at Mathura is the most colourful in the north; and the Kumbh at Prayagraj, in its year, is the largest gathering on earth and a different trip altogether. Book the room before the car on any of those dates, and tell us the date so the departure is planned for the crowd.',
      ],
      image: { src: `${IMG}/Prayagraj/Anand_Bhawan.jpg`, alt: 'Anand Bhawan at Prayagraj', tag: 'Prayagraj · 200 km', caption: 'Prayagraj is three to four hours south: the Sangam by boat, then Anand Bhawan and the fort.' },
    },
  ],

  fare: {
    title: 'A day or a weekend from Lucknow',
    note: 'Every place from 100 to 300 km bills the same minimum for a given car, so the one-day column is what Ayodhya, Prayagraj or Varanasi costs for the day and the two-day column is the weekend. Under 100 km the local package applies; beyond 300 km the fare follows the distance. Fuel and driver included; tolls and parking at actuals.',
    caption: 'One-day and two-day cab fare from Lucknow by vehicle',
    distanceKm: 300,
    roundTrip: true,
    days: 2,
    oneWayLabel: 'One-day trip',
    roundLabel: 'Two-day weekend',
    footnote: '300 km per day minimum. Sarnath, Agra and Delhi bill their distance; Unnao, Kanpur and Naimisharanya run on the Lucknow local taxi package.',
    waText: 'Hi, I want a cab from Lucknow for a day trip or a weekend. Destination, dates and headcount to follow.',
    bookHref: '/outstation-cabs/lucknow',
    bookLabel: 'Outstation cabs from Lucknow',
    cta: 'Get a Lucknow quote',
  },

  galleryTitle: 'Ring by ring from the Nawabs’ city',
  gallery: [
    { image: `${IMG}/Ayodhya/Hanuman_Garhi.jpg`, title: 'Hanuman Garhi, Ayodhya', text: 'Two and a half hours east; the day trip Lucknow makes most.', tag: '135 km' },
    { image: `${IMG}/Prayagraj/Triveni_Sangam.jpg`, title: 'The Sangam, Prayagraj', text: 'Three to four hours south; the boat first.', tag: '200 km' },
    { image: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, title: 'Dashashwamedh aarti, Varanasi', text: 'The first evening of the weekend.', tag: '300 km' },
    { image: `${IMG}/Varanasi/Sarnath.jpg`, title: 'Dhamek Stupa, Sarnath', text: 'Ten kilometres beyond Varanasi, the afternoon of the same weekend.', tag: '310 km' },
    { image: `${IMG}/Agra/Taj_mahal.jpg`, title: 'The Taj, Agra', text: 'Four to five hours west on the expressway.', tag: '330 km' },
  ],

  tips: [
    { title: 'Leave early for the east, later for the west', text: 'The Ayodhya and Varanasi roads carry pilgrim traffic and the towns fill by mid-morning; the expressway west is quick at any hour but fogs in December and January, when a later start is the quicker one.' },
    { title: 'Book the safari before the cab', text: 'Dudhwa weekend slots go early in season. Fix the slot with the forest department, tell us the time, and the driver plans the departure around it.' },
    { title: 'Use the ring to pick the trip', text: 'Under 100 km is the local package, 100 to 300 km a day or a weekend that costs the same wherever you go, beyond 300 km the distance. Deepotsav, Dev Deepawali, Holi and the Kumbh are the dates to book weeks ahead.' },
    { title: 'Name the pickup area', text: 'Gomti Nagar, Hazratganj, Alambagh, Charbagh station and the airport all dispatch from the Lucknow zone. Naming the area puts the driver at the gate on time.' },
  ],

  faqs: [
    { question: 'What are the best places to visit near Lucknow?', answer: 'Ayodhya at 135 km, Prayagraj at 200 km, Varanasi at 300 km, Kanpur at 85 km and Dudhwa National Park at 230 km are the ones people book most, with Naimisharanya at 90 km, Chitrakoot at 280 km and Agra at 330 km behind them. This page groups all fifteen on our list by distance ring, because the ring decides whether it is a day, a weekend or a drop.' },
    { question: 'How far is Varanasi from Lucknow by cab?', answer: '300 km and five to six hours on the Purvanchal roads, with Sultanpur and Jaunpur on the way. The 300 km bills the 300 km per day minimum, ₹11/km for a sedan, and the Lucknow to Varanasi toll page lists two plazas at ₹185 for a car. Start early; the aarti is in the evening and the ghats are best at sunrise, so it is a weekend.' },
    { question: 'Can I visit Ayodhya from Lucknow in one day?', answer: 'Yes. Ayodhya is 135 km and two and a half hours from Lucknow, and the Ram Mandir, Hanuman Garhi and the Saryu ghats fit a comfortable day trip with a return by evening. The same-day Ayodhya page prices it with the car waiting; Deepotsav in the Diwali week is the date to book weeks ahead and to stay the night for.' },
    { question: 'Is there a cab service from Lucknow to Agra?', answer: 'Yes. Lucknow to Agra runs on the Agra–Lucknow Expressway, 330 km in four to five hours, the fastest road out of the city. The 330 km bills its distance at the vehicle’s rate, ₹11/km for a sedan, with the expressway toll at actuals on FASTag. Stay the night for the sunrise Taj and add Fatehpur Sikri on the way home.' },
    { question: 'What wildlife parks are near Lucknow?', answer: 'Dudhwa National Park at 230 km and five hours is the nearest tiger reserve, open November to June, with tigers, rhinos and swamp deer in the Terai and the safaris booked with the forest department before the cab. Nawabganj Bird Sanctuary, 55 km away via Unnao, is a winter morning for the migratory birds on the local package.' },
    { question: 'How do I book an outstation cab from Lucknow?', answer: 'Tell us the destination, the dates, the pickup area and the head count. The fare is the rate card: a sedan at ₹11/km, an Ertiga or SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23, on a 300 km per day minimum, with tolls and parking at actuals; the short runs under 100 km are quoted on the local package.' },
    { question: 'Which places near Lucknow are within 100 km?', answer: 'Unnao at 55 km and an hour, for the Nawabganj Bird Sanctuary; Kanpur at 85 km and an hour and a half; and Naimisharanya at 90 km and two hours. All three are quoted on the 4 hour / 40 km local package with the distance beyond forty kilometres at the per-kilometre rate, rather than on the outstation minimum.' },
    { question: 'When is the best time to visit the places near Lucknow?', answer: 'October to March for the pilgrim towns, the Mughal sites and the capital; November to June for Dudhwa while the park is open. Inside the season, Deepotsav at Ayodhya, Dev Deepawali at Varanasi, Holi at Mathura and the Kumbh at Prayagraj in its year are the dates that fill the towns and the roads, so book the room before the car.' },
  ],

  related: [
    { label: 'Outstation cabs from Lucknow', sub: 'All corridors, all vehicles', href: '/outstation-cabs/lucknow', img: '/images/car/innova_crysta.jpg' },
    { label: 'Lucknow to Ayodhya cab', sub: '135 km · the day trip', href: '/lucknow-to-ayodhya', img: `${IMG}/Ayodhya/Ram_Mandir.jpg` },
    { label: 'Lucknow to Varanasi cab', sub: '300 km · the weekend', href: '/lucknow-to-varanasi', img: `${IMG}/Varanasi/varanasi_hero_section.jpg` },
    { label: 'Lucknow to Agra cab', sub: '330 km · the expressway', href: '/lucknow-to-agra', img: `${IMG}/Agra/agra_fort.jpg` },
    { label: 'Lucknow to Delhi cab', sub: '500 km · the one-way drop', href: '/lucknow-to-delhi', img: `${IMG}/Delhi/India_Gate.jpg` },
    { label: 'Same-day Ayodhya from Lucknow', sub: 'Up and back, car waiting', href: '/same-day-ayodhya-from-lucknow', img: `${IMG}/Ayodhya/Saryu_River_Ghat.jpg` },
    { label: 'Lucknow local taxi', sub: 'By the hour, for Kanpur and Unnao', href: '/local-taxi/lucknow', img: '/images/car/swift_dzire.jpg' },
    { label: 'Tempo Traveller from Lucknow', sub: 'For pilgrim groups of eight or more', href: '/tempo-traveller/lucknow', img: '/images/car/premium_suv.jpg' },
  ],
  guides: ['varanasi-ayodhya-prayagraj-by-road', 'deepotsav-ayodhya-2026-guide', 'delhi-to-varanasi-best-route-by-car', 'weekend-getaways-near-me', 'places-to-visit-near-me'],

  schema: {
    places: ['lucknow', 'ayodhya', 'varanasi', 'prayagraj', 'agra', 'kanpur', 'mathura', 'delhi'],
  },
};
