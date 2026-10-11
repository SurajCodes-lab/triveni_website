// Week 48 guide 11 — Navratri at Vaishno Devi by road. Timed for Sharad
// Navratri, 11–20 October 2026 (Dussehra on the 20th). The booking page
// /navratri-vaishno-devi-cab sells the cab; this is the guide that feeds it:
// the Delhi–Katra drive, the yatra parchi, and what changes in October.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'navratri-vaishno-devi-by-road',
  path: '/navratri-vaishno-devi-by-road',
  mood: 'festival',
  cluster: 'season',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'navratri vaishno devi yatra by road', impressions: null, position: null },
  seasonalDestination: 'katra',
  seasonalOrigin: 'Delhi',

  eyebrow: 'Navratri 2026 · Vaishno Devi',
  dateBadge: '11–20 October 2026',
  crumbs: [{ name: 'Pilgrimage cabs', url: '/pilgrimage-cabs' }, { name: 'Navratri Vaishno Devi cab', url: '/navratri-vaishno-devi-cab' }],
  crumbName: 'Navratri at Vaishno Devi by road',
  titleLead: 'Navratri at Vaishno Devi by road:',
  titleAccent: 'the Delhi–Katra drive, the yatra parchi, what changes in October',
  title: 'Navratri at Vaishno Devi by Road: The Delhi–Katra Drive, the Yatra Parchi, What Changes in October',
  metaTitle: 'Navratri 2026 at Vaishno Devi by Road: Delhi–Katra Guide',
  metaDescription: 'Sharad Navratri 2026 runs 11–20 October. The Delhi–Katra drive (630 km, 10–11 hours on NH-44), how the yatra parchi works, darshan waits during Navratri, where the cab waits and fares from ₹6,930.',
  keywords: ['navratri vaishno devi 2026', 'delhi to katra by road', 'vaishno devi yatra by car', 'delhi to vaishno devi distance', 'yatra parchi vaishno devi', 'navratri katra cab', 'delhi to katra cab fare'],
  heroImage: `${IMG}/Vaishno_Devi/Vaishno_Devi_hero_section.jpg`,
  heroAlt: 'The Trikuta hills above Katra, the base of the Vaishno Devi yatra',

  lead: 'Sharad Navratri 2026 begins with Ghatasthapana on Sunday 11 October and ends with Dussehra on Tuesday 20 October, and those ten days are the busiest of the year at Katra. Delhi to Katra is about 630 km and ten to eleven hours on NH-44 through Ambala, Ludhiana, Jalandhar, Pathankot and Jammu. The car takes you to Katra; the thirteen-kilometre climb to the Bhawan is on foot, pony, palki or helicopter, and it needs a yatra parchi, the free RFID card issued at Katra or online. During Navratri the darshan queue at the Bhawan can run six to ten hours, so the drive is planned around the climb, not the other way round. A sedan is ₹6,930 one-way at ₹11/km; the driver waits at Katra while you go up.',
  keyFacts: [
    { label: 'Navratri 2026', value: '11–20 Oct' },
    { label: 'Delhi to Katra', value: '630 km · 10–11 hrs' },
    { label: 'Katra to Bhawan', value: '13 km on foot' },
    { label: 'Sedan, one-way', value: '₹6,930' },
  ],
  stickyLabel: 'Navratri Katra cab',
  stickyPrice: 'Sedan ₹6,930',
  waText: 'Hi, I want a cab from Delhi to Katra for Navratri 2026. Dates and number of yatris to follow.',

  intro: [
    'Vaishno Devi is a road pilgrimage: the shrine sits in the Trikuta hills above Katra, a small town in Jammu that has no airport and a railway station that fills months ahead for Navratri. Most families from Delhi and Punjab go by car, and the two things that decide whether the trip goes well are how the drive is split and whether the yatra parchi is sorted before you reach the base.',
    'This guide is about those two things and about the ten days of Navratri specifically, when the numbers roughly double. It links to the cab page for booking; fares here are from the published rate card, ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, tolls extra.',
  ],

  lanternsTitle: 'The ten days, and what each one means at Katra',
  lanternsEyebrow: 'Navratri 2026',
  lanternsIntro: 'The dates are verified against the Sharad Navratri calendar for 2026. The rush builds from the first weekend and peaks over Ashtami, Navami and Dussehra.',
  lanterns: [
    { image: `${IMG}/Vaishno_Devi/Vaishno_Devi_Temple.jpg`, title: 'Ghatasthapana, Sunday 11 October', when: '11 Oct', text: 'Navratri opens. The Bhawan’s special aarti schedule starts, Katra hotels are already full, and the darshan queue is the shortest it will be for ten days. If you can choose, arrive on the 10th and climb on the 11th or 12th.' },
    { image: `${IMG}/Vaishno_Devi/Bhairavnath_Temple.jpg`, title: 'The middle days of the festival', when: 'Mid-week', text: 'Weekday darshan runs four to six hours at the Bhawan. Bhairon temple, two kilometres above and the last stop of the yatra, is reached by the ropeway from the Bhawan or on foot. The middle of the week is when regular yatris go.' },
    { image: `${IMG}/Vaishno_Devi/Vaishno_Devi_hero_section.jpg`, title: 'Ashtami and Navami, the last two days before Dussehra', when: 'Before Dussehra', text: 'The peak. Kanya pujan at the Bhawan, the largest crowds of the year, and waits that can pass ten hours. Yatra parchi counters cap the daily number; register online before you leave Delhi.' },
    { image: `${IMG}/Amritsar/Golden_Temple.jpg`, alt: 'Golden Temple, Amritsar, on the way back from Katra', title: 'Dussehra, Tuesday 20 October', when: '20 Oct', text: 'Vijayadashami closes the festival. Many families come down on Dussehra morning and drive to Amritsar, 230 km, for the Golden Temple before the last leg home; the driver can route the return that way.' },
  ],

  timelineTitle: 'Delhi to Katra, kilometre by kilometre',
  timelineEyebrow: 'The road',
  timelineIntro: 'NH-44 the whole way, four lanes to Jammu, then the Jammu–Katra road. The kilometre marks are from Delhi.',
  timeline: [
    { km: 0, name: 'Delhi', time: '4 am start', text: 'Leave before the city wakes. From north or west Delhi, NH-44 is fifteen minutes away; from Gurgaon and south Delhi, allow forty-five to reach the Mukarba Chowk stretch.', tag: 'Start' },
    { km: 50, name: 'Murthal', time: '5 am', text: 'The breakfast halt everyone makes: parathas at the highway dhabas. Fifteen minutes.', stop: 'Breakfast' },
    { km: 200, name: 'Ambala', time: '7 am', text: 'The Chandigarh road peels off here; you stay on NH-44 into Punjab. The next 200 km through Ludhiana and Jalandhar are the flattest, fastest road of the day, with toll plazas roughly every fifty kilometres.', tag: 'Punjab' },
    { km: 320, name: 'Ludhiana', time: '8.30 am', text: 'The bypass is fine; the town is not. A fuel and tea stop on the far side.', stop: 'Fuel' },
    { km: 480, name: 'Pathankot', time: '10.30 am', text: 'The last town in Punjab and the start of the hill approach. Lunch here, because after Lakhanpur the road narrows and the halts thin out. The J&K entry point at Lakhanpur can hold traffic on Navratri weekends.', stop: 'Lunch', image: `${IMG}/Dalhousie/dalhousie_hero_section.jpg`, alt: 'Dalhousie, in the hills north-east of Pathankot' },
    { km: 580, name: 'Jammu', time: '1 pm', text: 'The Jammu bypass avoids the city. If you are breaking the journey, this is the night halt; Katra is fifty kilometres on and its hotels are the expensive ones during Navratri.', tag: 'Option: night halt' },
    { km: 630, name: 'Katra', time: '2–3 pm', text: 'The base of the yatra. The car parks in the designated lots below the bus stand; from here the Bhawan is thirteen kilometres up the Trikuta path. Collect or activate the yatra parchi at the counter before doing anything else.', tag: 'Arrive', image: `${IMG}/Vaishno_Devi/Vaishno_Devi_Temple.jpg` },
  ],

  table: {
    title: 'What changes at Vaishno Devi during Navratri',
    caption: 'Comparison of a normal week and the Navratri week at Vaishno Devi: darshan wait, yatra parchi, helicopter, hotels and the road',
    intro: 'The shrine board runs the yatra all year. In the Navratri window the volume roughly doubles, and these are the practical consequences.',
    columns: [
      { key: 'item', label: 'Item' },
      { key: 'normal', label: 'A normal week' },
      { key: 'navratri', label: 'Navratri, 11–20 October' },
    ],
    rows: [
      { item: 'Darshan wait at the Bhawan', normal: '1–3 hours', navratri: '4–10 hours; longest on Ashtami and Navami' },
      { item: 'Yatra parchi (RFID card)', normal: 'Same-day at Katra counters', navratri: 'Register online before leaving; daily caps apply' },
      { item: 'Helicopter Katra–Sanjichhat', normal: 'Bookable a few days ahead', navratri: 'Sells out weeks ahead; standby queues from dawn' },
      { item: 'Ponies, palkis, pithus', normal: 'Available at fixed rates', navratri: 'Available; queues at the Banganga stand' },
      { item: 'Katra hotels', normal: 'Walk-in possible', navratri: 'Book early; Jammu is the fallback' },
      { item: 'Delhi–Katra drive', normal: '10–11 hours', navratri: '11–12 hours; Lakhanpur check post and the Katra approach slow' },
      { item: 'Our fares', normal: 'Rate card, sedan ₹11/km', navratri: 'Navratri packages on the booking page: sedan ₹9,500 one-way, ₹18,000 for three days; fleet books out earlier' },
    ],
    footnote: 'Waits and helicopter availability are from the shrine board’s own advisories in previous Navratri seasons; check the board’s site for the daily position before you climb.',
  },

  sections: [
    {
      eyebrow: 'The parchi',
      heading: 'How does the yatra parchi work, and can I get it during Navratri?',
      paras: [
        'The yatra parchi is the shrine board’s free registration card, now an RFID card, and nobody passes the Banganga check post without one. Outside festival weeks you get it on arrival at the counters near the Katra bus stand or at the railway station. During Navratri the board caps the number issued each day, and the sensible thing is to register online on the shrine board’s site before you leave Delhi and collect the card at the counter with your ID; the online slot secures your day.',
        'The card is per person, including children, and is scanned at Banganga and again at the Bhawan. Keep it on a lanyard. If your group is arriving by Tempo Traveller, register everyone under one booking so the slots match.',
      ],
      image: { src: `${IMG}/Vaishno_Devi/Vaishno_Devi_Temple.jpg`, alt: 'The Vaishno Devi Bhawan complex in the Trikuta hills', tag: 'Bhawan · 13 km up', caption: 'The Bhawan: the yatra parchi is scanned at Banganga on the way up and again here.' },
    },
    {
      eyebrow: 'The climb',
      heading: 'How long is the climb from Katra, and what are the options?',
      paras: [
        'Thirteen kilometres from Banganga to the Bhawan, on a paved path with railings, tea stalls and rest points the whole way. Walking takes four to six hours up and three to four down; most families leave Katra between three and five in the morning to reach the Bhawan for the morning aarti and avoid the midday sun on the open sections. Ardhkuwari, the cave temple halfway up, is where the queue for the narrow passage forms; during Navratri it can add two hours.',
        'The alternatives are the pony and palki stands at Banganga, the battery cars on the upper section from Ardhkuwari, and the helicopter from Katra to Sanjichhat, which leaves a two-and-a-half kilometre walk. Helicopter seats for Navratri are gone weeks ahead. Bhairon temple, two kilometres above the Bhawan, completes the yatra and is reached by the ropeway from the Bhawan.',
      ],
    },
    {
      eyebrow: 'Splitting the drive',
      heading: 'Should I drive Delhi to Katra in one day during Navratri?',
      paras: [
        'Yes, if you leave by four and are content to reach Katra mid-afternoon, rest, and climb before dawn the next day. That is the standard three-day pattern: day one the drive, day two the climb and darshan, day three the drive home. The driver waits at Katra through day two.',
        'The alternative is to leave Delhi in the evening and drive through the night, arriving at Katra around four in the morning and starting the climb straight from the car. It saves a hotel night and puts you on the path before the heat, but it is a long night for the driver, so ask for a second driver when booking an overnight run. If you would rather break the journey, Jammu is the sensible halt; Katra’s hotels are scarce and expensive in the window.',
      ],
      link: { label: 'Delhi to Katra one-way cab', href: '/one-way-cab/delhi-to-katra' },
      image: { src: `${IMG}/Vaishno_Devi/Bhairavnath_Temple.jpg`, alt: 'Bhairon temple above the Vaishno Devi Bhawan', tag: 'Bhairon · ropeway', side: 'left', caption: 'Bhairon temple, the last stop of the yatra, reached by ropeway from the Bhawan.' },
    },
    {
      eyebrow: 'The car at Katra',
      heading: 'Where does the cab wait, and what does a waiting day cost?',
      paras: [
        'Cars are not allowed beyond the Katra parking lots; the driver parks below the bus stand and stays with the vehicle or in driver accommodation while you climb. A waiting day is billed as a day of the trip, so a three-day Delhi–Katra–Delhi run for a sedan is the greater of the round-trip distance at ₹11/km, which is ₹13,860, or three days at the 300 km minimum, which is less; the round trip wins and the waiting day is inside it. An Innova Crysta is ₹22,680 for the same, a 12-seater Tempo Traveller ₹28,980.',
        'Those are the standard rate-card figures. For the Navratri window the booking page publishes its own Navratri packages: a sedan at ₹9,500 one-way and ₹18,000 for the three-day round trip, an SUV at ₹13,500 and ₹25,000, a Tempo Traveller at ₹22,000 one-way. Tolls on NH-44 and the Jammu bypass, and the Katra parking, are paid at actual on either basis.',
      ],
      link: { label: 'Navratri Vaishno Devi cab packages', href: '/navratri-vaishno-devi-cab' },
    },
    {
      eyebrow: 'After darshan',
      heading: 'What can I add to the trip on the way back?',
      paras: [
        'Amritsar is the natural addition: 230 km from Katra and on the way home, so a Dussehra afternoon at the Golden Temple and the Wagah ceremony costs one extra night and no extra distance to speak of. Patnitop, 80 km from Katra towards Srinagar, is the hill-station add-on, and Shiv Khori, a cave shrine 80 km west of Katra, is the pilgrimage one. Groups in a Tempo Traveller often do Katra, Shiv Khori and Amritsar as a four-day loop.',
      ],
      link: { label: 'Delhi to Katra and Vaishno Devi by Tempo Traveller', href: '/tempo-traveller/delhi-to-katra-vaishno-devi-jammu' },
    },
  ],

  fare: {
    title: 'Delhi to Katra for Navratri',
    note: 'Rate-card fares for the 630 km drive. The three-day figure is the standard yatra: drive up, climb and darshan while the driver waits, drive home.',
    caption: 'Delhi to Katra cab fare for Navratri by vehicle',
    distanceKm: 630,
    roundTrip: true,
    days: 3,
    roundLabel: 'Three-day yatra',
    footnote: 'Rate-card figures; tolls, Katra parking and the driver’s night halt at actual. For the Navratri window the booking page publishes its own packages: sedan ₹9,500 one-way and ₹18,000 for the three-day round trip, SUV ₹13,500 and ₹25,000, Tempo Traveller ₹22,000 one-way.',
    waText: 'Hi, I want a Delhi to Katra cab for Navratri 2026, three days with the driver waiting. Dates and number of yatris to follow.',
    bookHref: '/navratri-vaishno-devi-cab',
    bookLabel: 'Navratri Katra cab page',
    cta: 'Book the yatra cab',
  },

  galleryTitle: 'Katra, the Trikuta and the road home',
  gallery: [
    { image: `${IMG}/Vaishno_Devi/Vaishno_Devi_hero_section.jpg`, title: 'The Trikuta hills', text: 'Katra at the base, the Bhawan thirteen kilometres up.', tag: 'Katra' },
    { image: `${IMG}/Vaishno_Devi/Vaishno_Devi_Temple.jpg`, title: 'The Bhawan', text: 'Darshan through the cave passage.', tag: 'Bhawan' },
    { image: `${IMG}/Vaishno_Devi/Bhairavnath_Temple.jpg`, title: 'Bhairon temple', text: 'The end of the yatra.', tag: 'Bhairon' },
    { image: `${IMG}/Amritsar/Golden_Temple.jpg`, title: 'Golden Temple, Amritsar', text: 'The Dussehra add-on, 230 km from Katra.', tag: 'On the way home' },
    { image: '/images/tempo/12_seater.jpg', title: 'The group vehicle', text: '12-seater Tempo Traveller, ₹23/km.', tag: 'Fleet' },
  ],

  tips: [
    { title: 'Register the parchi before you leave Delhi', text: 'The online slot is what gets you past the daily cap on Ashtami and Navami. Collect the card at Katra with the ID you registered.' },
    { title: 'Climb before dawn', text: 'Leave the hotel at three. You reach Ardhkuwari before the queue builds and the Bhawan for the morning aarti, and you are on the path in the cool hours.' },
    { title: 'Warm layer, light bag', text: 'October nights on the Trikuta path drop to single digits. One warm layer, water, and nothing else; there are lockers at the Bhawan for the rest.' },
  ],

  faqs: [
    { question: 'When is Navratri 2026 at Vaishno Devi?', answer: 'Sharad Navratri 2026 begins with Ghatasthapana on Sunday 11 October and closes with Dussehra on Tuesday 20 October. Ashtami and Navami, the last two days before Dussehra, are the peak days at the shrine.' },
    { question: 'How far is Katra from Delhi by road and how long does it take?', answer: 'About 630 km on NH-44 through Ambala, Ludhiana, Jalandhar, Pathankot and Jammu, ten to eleven hours in normal weeks and eleven to twelve during Navratri because of the Lakhanpur check post and the Katra approach.' },
    { question: 'What is the cab fare from Delhi to Katra?', answer: 'At the published rate card a sedan is ₹6,930 one-way (630 km at ₹11/km), an Ertiga ₹9,450, an Innova Crysta ₹11,340 and a 12-seater Tempo Traveller ₹14,490. A three-day round trip with the driver waiting at Katra is twice the one-way figure. Tolls and parking are extra. For the Navratri window itself the booking page publishes Navratri packages: sedan ₹9,500 one-way and ₹18,000 for the three-day round trip, SUV ₹13,500 and ₹25,000.' },
    { question: 'Is the yatra parchi needed during Navratri, and how do I get it?', answer: 'Yes, every yatri needs the shrine board’s free RFID yatra card. During Navratri the daily number is capped, so register online on the shrine board’s site before leaving and collect the card at the Katra counter with your ID.' },
    { question: 'How long is the darshan wait at Vaishno Devi during Navratri?', answer: 'Four to six hours on the weekdays of the festival and up to ten hours on Ashtami, Navami and Dussehra, based on the shrine board’s advisories in previous years. Climbing before dawn shortens it.' },
    { question: 'Can the cab go up to the Bhawan?', answer: 'No. Vehicles stop at the Katra parking lots. From Banganga the thirteen-kilometre path is on foot, pony, palki or battery car on the upper section, or by helicopter from Katra to Sanjichhat, which leaves a two-and-a-half kilometre walk.' },
    { question: 'Should I break the Delhi–Katra drive at Jammu?', answer: 'If you want a night halt, Jammu is the sensible one: it is 50 km short of Katra and has rooms when Katra does not. Most families either drive up in one day and climb the next morning, or drive overnight and climb straight from the car.' },
    { question: 'Can I add Amritsar to a Navratri Vaishno Devi trip?', answer: 'Yes. Amritsar is 230 km from Katra and on the road home; a Dussehra evening at the Golden Temple and the Wagah ceremony adds one night. The driver routes the return through Amritsar on request.' },
  ],

  related: [
    { label: 'Navratri Vaishno Devi cab', sub: 'Navratri packages from ₹9,500', href: '/navratri-vaishno-devi-cab', img: `${IMG}/Vaishno_Devi/Vaishno_Devi_Temple.jpg` },
    { label: 'Delhi to Katra one-way cab', sub: '630 km · ₹6,930 sedan', href: '/one-way-cab/delhi-to-katra', img: '/images/car/swift_dzire.jpg' },
    { label: 'Delhi to Katra round trip', sub: 'Driver waits at Katra', href: '/round-trip/delhi-to-katra', img: '/images/car/innova_crysta.jpg' },
    { label: 'Katra, Vaishno Devi & Jammu by Tempo', sub: 'Groups of 12–17', href: '/tempo-traveller/delhi-to-katra-vaishno-devi-jammu', img: '/images/tempo/12_seater.jpg' },
    { label: 'Vaishno Devi pilgrimage tour', sub: 'Sightseeing package', href: '/sightseeing/vaishno-devi-pilgrimage-tour', img: `${IMG}/Vaishno_Devi/Vaishno_Devi_hero_section.jpg` },
    { label: 'How to reach Vaishno Devi from Delhi', sub: 'Every mode compared', href: '/how-to-reach/vaishno-devi-from-delhi', img: `${IMG}/Vaishno_Devi/Bhairavnath_Temple.jpg` },
    { label: 'Amritsar to Katra by Tempo Traveller', sub: 'The Dussehra add-on', href: '/tempo-traveller/amritsar-to-vaishno-devi-katra', img: `${IMG}/Amritsar/Golden_Temple.jpg` },
    { label: 'Pilgrimage cabs', sub: 'All yatra routes', href: '/pilgrimage-cabs', img: `${IMG}/Char_Dham/Chardham_hero_section.jpg` },
  ],
  guides: ['deepotsav-ayodhya-2026-guide', 'kullu-dussehra-2026-by-car', 'diwali-tour-packages-2026-from-delhi', 'delhi-to-srinagar-by-road', 'hill-stations-near-amritsar'],

  schema: {
    places: ['delhi', 'amritsar'],
    trip: {
      name: 'Delhi to Vaishno Devi (Katra) for Navratri 2026 by road',
      description: 'Three-day yatra by car: Delhi to Katra on NH-44, the climb to the Bhawan with the driver waiting, and the drive home, optionally via Amritsar.',
      touristType: 'Pilgrims',
      lowPrice: 6930,
      highPrice: 28980,
      itinerary: [
        { name: 'Day 1: Delhi to Katra', text: '630 km on NH-44 via Ambala, Ludhiana, Jalandhar, Pathankot and Jammu; collect the yatra parchi at Katra.' },
        { name: 'Day 2: The climb and darshan', text: 'Banganga to the Bhawan, 13 km, before dawn; Ardhkuwari on the way; Bhairon temple by ropeway; back to Katra.' },
        { name: 'Day 3: Katra to Delhi', text: 'The drive home, optionally via Amritsar for the Golden Temple and Wagah.' },
      ],
    },
    events: [
      { id: 'navratri', name: 'Sharad Navratri 2026 at Vaishno Devi', description: 'The ten-day Sharad Navratri festival at the Vaishno Devi shrine, Katra, from Ghatasthapana on 11 October to Dussehra on 20 October 2026.', startDate: '2026-10-11', endDate: '2026-10-20', locationName: 'Shri Mata Vaishno Devi Shrine, Katra', locality: 'Katra', region: 'Jammu and Kashmir', image: `${IMG}/Vaishno_Devi/Vaishno_Devi_Temple.jpg`, price: 9500, offerUrl: '/navratri-vaishno-devi-cab', validFrom: '2026-09-12', performer: 'Shri Mata Vaishno Devi Shrine Board' },
    ],
  },
};
