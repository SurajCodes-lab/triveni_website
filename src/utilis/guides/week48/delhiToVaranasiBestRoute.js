// Week 48 guide 21 — "best route from delhi to varanasi by car" (120
// impressions, position 7.6). The corridor pages sell the cab and quote the
// distance; none of them answers the question people actually type, which is
// which of the three roads to take and whether to do it in a day. This page
// does. Distances, times, tolls and fares agree with /distance, /travel-by-car
// and /toll-cost for delhi-to-varanasi and with the fare policy in pricing.js.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'delhi-to-varanasi-best-route-by-car',
  path: '/delhi-to-varanasi-best-route-by-car',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'best route from delhi to varanasi by car', impressions: 120, position: 7.6 },

  eyebrow: 'Road guide · Delhi to Varanasi',
  crumbs: [{ name: 'Varanasi', url: '/varanasi' }, { name: 'Delhi to Varanasi cab', url: '/delhi-to-varanasi' }],
  crumbName: 'Delhi to Varanasi: the best route by car',
  titleLead: 'Delhi to Varanasi by car:',
  titleAccent: 'the best route, in one day or two',
  title: 'Delhi to Varanasi by Car: The Best Route, in One Day or Two',
  metaTitle: 'Best Route from Delhi to Varanasi by Car: One Day or Two',
  metaDescription: 'The best route from Delhi to Varanasi by car: 820 km on the Yamuna and Agra–Lucknow expressways, in one day with a 4 am start or two with a night at Lucknow. Three routes compared, fares from ₹9,020.',
  keywords: ['best route from delhi to varanasi by car', 'delhi to varanasi by road', 'delhi to varanasi road trip', 'delhi to varanasi distance by car', 'delhi to varanasi via lucknow', 'delhi to varanasi purvanchal expressway', 'delhi to varanasi one day drive', 'delhi to varanasi cab'],
  heroImage: `${IMG}/Varanasi/varanasi_hero_section.jpg`,
  heroAlt: 'The ghats of Varanasi on the Ganga, the end of the 820 km drive from Delhi',

  lead: 'The best route from Delhi to Varanasi by car is the Yamuna Expressway to Agra, the Agra–Lucknow Expressway to Lucknow, and then the national highway through Sultanpur and Jaunpur into Varanasi: about 820 km and twelve to thirteen hours of driving, which is a long single day with a four o’clock start. The Purvanchal Expressway alternative is 40 km longer but expressway almost throughout, and the old Grand Trunk Road through Kanpur and Prayagraj is the slowest of the three. Most families are better off splitting the drive at Lucknow, 550 km in, and finishing the last 300 km fresh the next morning. A sedan is ₹9,020 one-way at ₹11/km whichever way you cut it.',
  keyFacts: [
    { label: 'Distance', value: '820 km' },
    { label: 'Driving time, route A', value: '12–13 hrs' },
    { label: 'Best halt', value: 'Lucknow · 550 km' },
    { label: 'Sedan, one-way', value: '₹9,020' },
  ],
  stickyLabel: 'Delhi–Varanasi cab',
  stickyPrice: 'Sedan ₹9,020',
  waText: 'Hi, I want a cab from Delhi to Varanasi. Please share the fare for one-way and round trip, and whether a night halt at Lucknow is possible.',

  intro: [
    'Delhi to Varanasi is the longest drive most people from the capital make within Uttar Pradesh, and the question the search box gets asked is not how far it is but which road to take. There are three honest answers, and they are not interchangeable: one is the fastest, one is the smoothest, and one passes the Sangam at Prayagraj and is worth taking only if you mean to stop there. This guide lays out all three with the kilometre marks, the halts and the drawbacks, and then answers the second question people ask, which is whether the drive belongs in one day or two.',
    'Every distance and time here matches the corridor pages on this site, and every fare comes from the published rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km and a 12-seater Tempo Traveller ₹23/km, billed on a 300 km per day minimum with tolls and parking at actual. The rate card does not change for Dev Deepawali, Chhath or the wedding season; the fleet simply books out earlier.',
  ],

  timelineTitle: 'Route A, kilometre by kilometre: Delhi to Varanasi in one day',
  timelineEyebrow: 'The road, in order',
  timelineIntro: 'The kilometre marks are from central Delhi and the clock assumes a four o’clock start with a breakfast halt at Agra and lunch at Lucknow. Routes A and B share the road as far as the Lucknow ring road; they part there.',
  timeline: [
    { km: 0, name: 'Delhi', time: '4 am start', text: 'Leave before the city wakes. From Noida and Greater Noida the Yamuna Expressway begins at your doorstep; from south and west Delhi allow forty-five minutes to reach the Pari Chowk end of it, and from Gurgaon closer to an hour via the Faridabad bypass.', tag: 'Start' },
    { km: 60, name: 'Jewar', time: '4.45 am', text: 'The first toll plaza on the Yamuna Expressway, ₹155 for a car on FASTag. The expressway is six lanes of concrete with almost nothing on it at this hour; the driver holds a steady speed and the first 160 km are done by six.', tag: 'Yamuna Expressway' },
    { km: 160, name: 'Mathura', time: '6 am', text: 'The Mathura plaza and the turn-off for Vrindavan. Nobody stops here on a Varanasi day; the point of the early start is to be past Agra before the Taj traffic begins.', stop: 'Fuel if needed' },
    { km: 230, name: 'Agra', time: '6.45 am', text: 'The Yamuna Expressway ends at the Agra ring road. Breakfast at one of the highway restaurants on the eastern side, twenty minutes, and then the driver joins the Agra–Lucknow Expressway at Etmadpur, fifteen kilometres on. You do not enter Agra itself.', stop: 'Breakfast', image: `${IMG}/Agra/Agra_Hero_section.jpg`, alt: 'Agra, the breakfast halt at the end of the Yamuna Expressway' },
    { km: 280, name: 'Firozabad', time: '7.45 am', text: 'The first plaza on the Agra–Lucknow Expressway, ₹195 for a car. From here it is 300 km of the best road in Uttar Pradesh: six lanes, fenced, with fuel stations and rest areas every fifty kilometres or so and a hard shoulder the whole way.', tag: 'Agra–Lucknow Expressway' },
    { km: 420, name: 'Kannauj', time: '9.30 am', text: 'The second expressway plaza, ₹165 for a car, and the natural tea stop at the rest area beyond it. Etawah and the Chambal ravines are behind you by now; the land flattens into the Ganga plain.', stop: 'Tea' },
    { km: 550, name: 'Lucknow', time: '11.30 am', text: 'The expressway ends at the Lucknow outer ring. This is the halt if you are splitting the drive: Hazratganj, the Bara Imambara and the Rumi Darwaza are twenty minutes from the ring road, and the hotels along the Sultanpur and Raebareli roads are placed for an early exit. On a one-day run it is lunch, forty minutes, and the decision point between route A and route B.', tag: 'Option: night halt', stop: 'Lunch', image: `${IMG}/Lucknow/Rumi_Darwaza.jpg`, alt: 'The Rumi Darwaza in Lucknow, the halfway city on the Delhi to Varanasi drive' },
    { km: 690, name: 'Sultanpur', time: '2.15 pm', text: 'Route A leaves the ring road on NH-731 towards Sultanpur, past the Lucknow–Sultanpur toll plaza. The character of the drive changes here: a four-lane national highway with towns, crossings and slow traffic in the market stretches. It is a good road, but it is not an expressway, and the driver’s average speed drops by a third.', tag: 'NH-731' },
    { km: 760, name: 'Jaunpur', time: '3.30 pm', text: 'NH-56 from Sultanpur, the Jaunpur toll plaza, and the last town of any size before Varanasi: the last tea. The road on from here is 60 km of ordinary highway where the town crossings are the only thing that slow you.', stop: 'Tea', tag: 'NH-56' },
    { km: 820, name: 'Varanasi', time: '5.30 pm', text: 'The car reaches the Cantonment side of the city first. Hotels in the Cantonment and along the ring road are reached without entering the old city; if you are staying near the ghats, the driver takes you as far as the Godowlia end and the last few hundred metres are on foot. The evening aarti at Dashashwamedh Ghat starts at 6.30 pm, so a 5.30 pm arrival still makes it.', tag: 'Arrive', image: `${IMG}/Varanasi/varanasi_hero_section.jpg`, alt: 'The Varanasi ghats at the end of the drive from Delhi' },
  ],

  table: {
    title: 'The three routes from Delhi to Varanasi, compared',
    caption: 'Comparison of the three road routes from Delhi to Varanasi by car: distance, driving time, road type, halts, sedan fare and who each one suits',
    intro: 'All three routes leave Delhi the same way and diverge after Agra or after Lucknow. Distances and times are the corridor figures used across this site; sedan fares are the published ₹11/km rate on the one-way distance.',
    columns: [
      { key: 'item', label: 'What matters' },
      { key: 'a', label: 'Route A · Expressways, then Sultanpur–Jaunpur' },
      { key: 'b', label: 'Route B · Purvanchal Expressway' },
      { key: 'c', label: 'Route C · GT Road via Prayagraj' },
    ],
    rows: [
      { item: 'Distance', a: 'About 820 km', b: 'About 860 km', c: 'About 820 km' },
      { item: 'Driving time', a: '12–13 hrs', b: '12–13 hrs', c: '13–14 hrs' },
      { item: 'The roads', a: 'Yamuna Expressway, Agra–Lucknow Expressway, then NH-731 to Sultanpur and NH-56 through Jaunpur', b: 'Yamuna Expressway, Agra–Lucknow Expressway, Purvanchal Expressway to Ghazipur, NH-31 into Varanasi', c: 'NH-19, the Grand Trunk Road, through Agra, Firozabad, Etawah, Kanpur, Fatehpur and Prayagraj' },
      { item: 'Expressway share', a: 'About 550 of 820 km', b: 'Almost the whole way', c: 'Only the Yamuna Expressway, if you use it to Agra' },
      { item: 'Truck traffic', a: 'Light to Lucknow, moderate after', b: 'Light throughout', c: 'Heavy; this is the freight artery of north India' },
      { item: 'Natural halts', a: 'Agra, Lucknow', b: 'Agra, Lucknow, Ayodhya turn-off', c: 'Agra, Kanpur, Prayagraj' },
      { item: 'Sedan, one-way', a: '₹9,020', b: '₹9,460', c: '₹9,020' },
      { item: 'Take it when', a: 'You want the shortest fast route, or plan to halt at Lucknow', b: 'You are driving overnight, or want the smoothest ride for older passengers', c: 'You mean to stop at the Sangam in Prayagraj' },
    ],
    footnote: 'Sedan fares are distance × ₹11/km; an Ertiga is ₹15/km, an Innova Crysta ₹18/km, a Tempo Traveller ₹23/km. Tolls are extra at actual: the toll page for the corridor lists six FASTag plazas and about ₹830 for a car on the expressway route.',
  },

  sections: [
    {
      eyebrow: 'The verdict',
      heading: 'Which is the best route from Delhi to Varanasi by car?',
      paras: [
        'Route A, for most people on most days. The Yamuna Expressway and the Agra–Lucknow Expressway between them carry you 550 km to Lucknow on fenced six-lane road, and the national highway from Lucknow through Sultanpur and Jaunpur covers the remaining 270 km on a decent four-lane road that is slower only because it passes through towns. It is the shortest of the three fast routes at about 820 km and it is done in twelve to thirteen hours of driving, which on the road means a four o’clock departure and a half-past-five arrival with breakfast, lunch and two tea halts.',
        'Route B is the same road as far as Lucknow and then stays on expressway: the Purvanchal Expressway runs east from the Lucknow ring road past the Ayodhya and Azamgarh turn-offs to Ghazipur, and NH-31 brings you back south-west into Varanasi. It is about 40 km longer and takes the same twelve to thirteen hours, because what it loses in distance it recovers in speed. Choose it for an overnight drive, when a fenced expressway with no town crossings is worth the extra kilometres, or when someone in the car does not travel well on ordinary highway.',
        'Route C is the Grand Trunk Road, NH-19, through Kanpur and Prayagraj. It is the way the corridor pages on this site describe the drive, and it is the road the trucks use. Allow thirteen to fourteen hours. The only reason to take it is the Sangam, and if that is the plan it is a good reason; there is a section on it below.',
      ],
      link: { label: 'Delhi to Varanasi by car: the segment-by-segment road map', href: '/travel-by-car/delhi-to-varanasi' },
      image: { src: `${IMG}/Varanasi/Assi_Ghat.jpg`, alt: 'Assi Ghat in Varanasi, the southern end of the ghats', tag: 'Varanasi · km 820', caption: 'Assi Ghat, the calmer southern end of the riverfront; the hotels here are reached without entering the old city.' },
    },
    {
      eyebrow: 'One day or two',
      heading: 'Should I drive Delhi to Varanasi in one day or split it at Lucknow?',
      paras: [
        'Split it, unless you have a reason not to. Thirteen hours in a car is a long day for a driver and a longer one for children and older parents, and the last 270 km after Lucknow, the stretch through the towns, comes when everyone is most tired. The two-day version is 550 km on the expressways to Lucknow, an evening in a city that deserves one, and then 300 km the next morning to reach Varanasi by lunchtime with the whole afternoon and the evening aarti ahead of you.',
        'Lucknow is the right halt rather than Agra or Kanpur because of where it falls. Agra at 230 km leaves 590 km for the second day, which defeats the purpose; Kanpur is on the wrong route. Lucknow sits two-thirds of the way along, its hotels are twenty minutes off the ring road, and the Bara Imambara, the Rumi Darwaza and the kebabs of Aminabad fill an evening without any effort. If you would rather halt later, the Ayodhya turn-off on the Purvanchal Expressway makes a second option on route B.',
        'The one-day drive is entirely possible and the timeline above is built for it. It works when you leave at four, keep the halts short, and accept a half-past-five arrival. It does not work if you leave at seven, because you then lose an hour to the Delhi exit and an hour to the Lucknow lunch traffic and arrive in Varanasi after dark. The fare does not change either way: a two-day one-way drop bills the same ₹9,020 for a sedan, because 820 km already exceeds the 600 km minimum for two days.',
      ],
      bullets: [
        'Day one: Delhi to Lucknow, 550 km on the Yamuna and Agra–Lucknow expressways, eight to nine hours with halts; evening at the Imambaras and Hazratganj.',
        'Day two: Lucknow to Varanasi, 300 km, five to six hours via Sultanpur and Jaunpur or on the Purvanchal Expressway; arrive for lunch, Sarnath in the afternoon, Dashashwamedh aarti at 6.30 pm.',
        'Book it as one 820 km trip with a halt, not as two separate legs; two legs would bill 550 km plus 300 km, which is more.',
      ],
      link: { label: 'Delhi to Lucknow cab: the first day’s drive', href: '/delhi-to-lucknow' },
      image: { src: `${IMG}/Lucknow/Bara_Imambara.jpg`, alt: 'The Bara Imambara in Lucknow, the overnight halt on the two-day Delhi to Varanasi drive', tag: 'Lucknow · km 550', side: 'left', caption: 'The Bara Imambara. Lucknow is two-thirds of the way to Varanasi, which is what makes it the halt.' },
    },
    {
      eyebrow: 'The GT Road',
      heading: 'When does the old NH-19 route via Kanpur and Prayagraj make sense?',
      paras: [
        'When Prayagraj is part of the trip. The Grand Trunk Road runs from Agra through Firozabad, Etawah, Kanpur and Fatehpur to Prayagraj and then the last 120 km to Varanasi, and the corridor pages on this site break it into four segments: Delhi to Agra, 230 km and three and a half hours on the Yamuna Expressway; Agra to Kanpur, 280 km and four hours on NH-19; Kanpur to Prayagraj, 190 km and three hours; Prayagraj to Varanasi, 120 km and two and a half hours. That adds to thirteen hours of driving, fourteen with halts, an hour or so more than the expressway routes, and the difference is trucks. NH-19 is the freight road between Delhi and the east, and a four-lane divided highway shared with lorries is a different day from a fenced expressway.',
        'The reward is the Sangam. Prayagraj at 700 km is the natural night halt on this route, and the confluence of the Ganga and the Yamuna is a boat ride at dawn before the last two and a half hours into Varanasi. Families doing a pilgrimage circuit often go out on route C with a night at Prayagraj and come back on route A or B, which gives them the Sangam, the Varanasi ghats and Sarnath in one loop without repeating a road.',
        'If Prayagraj is not on the list, there is nothing on route C that route A does not do better. Kanpur is a large industrial city with a long bypass, and the Fatehpur stretch is the slowest part of the whole corridor. The Agra–Lucknow Expressway exists precisely so that you do not have to drive it.',
      ],
      link: { label: 'Prayagraj Sangam tour by cab', href: '/prayagraj-sangam-tour' },
      image: { src: `${IMG}/Prayagraj/Triveni_Sangam.jpg`, alt: 'The Triveni Sangam at Prayagraj, the confluence of the Ganga and the Yamuna', tag: 'Prayagraj · route C', caption: 'The Sangam at Prayagraj. The only good reason to take the GT Road, and a good one.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'What does a Delhi to Varanasi cab cost, and what do the tolls add?',
      paras: [
        'The one-way fare is the distance at the vehicle’s rate: 820 km at ₹11/km is ₹9,020 for a sedan, ₹12,300 for an Ertiga or similar SUV at ₹15/km, ₹14,760 for an Innova Crysta at ₹18/km, and ₹18,860 for a 12-seater Tempo Traveller at ₹23/km. Route B bills its extra 40 km, so a sedan on the Purvanchal Expressway is ₹9,460. Fuel and the driver’s allowance are inside those figures, and a night halt at Lucknow on a two-day one-way does not change them, because the distance already exceeds the two-day minimum.',
        'A round trip is priced as the greater of twice the one-way fare or the number of days at the 300 km minimum. For a four-day trip, drive up over two days, a full day in Varanasi and the return in one, the distance wins: 1,640 km at ₹11/km is ₹18,040 for a sedan, and the fare box below has the other vehicles. The same arithmetic means a fifth day in Varanasi costs nothing extra on the distance, since 1,640 km is still more than five days at 300 km; only from the sixth day does the daily minimum take over.',
        'Tolls are paid at actual and the driver carries FASTag, so nobody queues. The toll page for this corridor lists the six plazas on the expressway route, Jewar, Mathura, Firozabad, Kannauj, the Lucknow–Sultanpur plaza and Jaunpur, at about ₹830 for a car, with the higher rates for larger vehicles alongside. Those six are route A’s plazas; route B pays expressway tolls all the way to Ghazipur and comes out higher. Parking at the Varanasi end is a few hundred rupees a day and is also at actual.',
      ],
      link: { label: 'Delhi to Varanasi toll cost, plaza by plaza', href: '/toll-cost/delhi-to-varanasi' },
    },
    {
      eyebrow: 'Arriving',
      heading: 'Where does the car go once we reach Varanasi?',
      paras: [
        'Not into the old city. The lanes behind the ghats are too narrow for a car and most of them are closed to four-wheelers in any case, so the drive ends at the edge of the Godowlia crossing, where the driver uses the Dashashwamedh parking, and the last stretch to the ghats and to the Kashi Vishwanath corridor is on foot or by cycle-rickshaw. If your hotel is on the ghats, tell the driver its name and he will bring you to the nearest point that a car can reach; hotels in the Cantonment, at Sigra and along the ring road are reached directly without any of this.',
        'The evening aarti at Dashashwamedh Ghat starts at 6.30 pm and the steps fill from six, so a one-day drive that arrives at half past five can still make it if you go straight from the car. On a two-day drive you arrive at lunchtime, and the natural afternoon is Sarnath, ten kilometres north on the Cantonment side, where the driver can take you and wait. The next morning is a boat at sunrise from Assi to Manikarnika, which is the one thing in Varanasi that needs no car at all.',
        'Two dates matter for anyone driving in November 2026. Chhath falls on 13–16 November and the ghats belong to the devotees at dawn and dusk; Dev Deepawali is on 24 November, Kartik Purnima, when the whole riverfront is lit with lamps and hotels within walking distance of the ghats are booked out weeks ahead. Both are worth planning the drive around, and both are reasons to book the car early rather than late.',
      ],
      link: { label: 'Varanasi in two days: the itinerary once you arrive', href: '/varanasi-in-2-days-itinerary' },
      image: { src: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, alt: 'The evening Ganga aarti at Dashashwamedh Ghat in Varanasi', tag: 'Dashashwamedh · 6.30 pm', side: 'left', caption: 'The aarti at Dashashwamedh Ghat. Arrive by half past five and go straight from the car.' },
    },
  ],

  fare: {
    title: 'Delhi to Varanasi by cab: 820 km at the rate card',
    note: 'One-way fares are the 820 km distance at each vehicle’s rate. The round-trip column is a four-day trip: two days up with a halt at Lucknow, a day in Varanasi, and the return. It is simply twice the one-way figure, because 1,640 km exceeds four days of the 300 km minimum.',
    caption: 'Delhi to Varanasi cab fare by vehicle, one-way and four-day round trip',
    distanceKm: 820,
    roundTrip: true,
    days: 4,
    roundLabel: 'Four-day round trip',
    footnote: 'Tolls (about ₹830 for a car on the expressway route), parking and any state permit at actual. Route B via the Purvanchal Expressway bills 860 km. The rate card is the same on festival dates.',
    waText: 'Hi, I want a Delhi to Varanasi cab. Please quote one-way and a four-day round trip with a night halt at Lucknow.',
    bookHref: '/delhi-to-varanasi',
    bookLabel: 'Delhi to Varanasi cab page',
    cta: 'Get the exact fare',
  },

  galleryTitle: 'The halt, the arrival and the river',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, title: 'Dashashwamedh Ghat aarti', text: 'Every evening at 6.30 pm; a one-day drive that leaves Delhi at four still makes it.', tag: 'Varanasi · evening' },
    { image: `${IMG}/Varanasi/Boat_Ride_Ganges.jpg`, title: 'Sunrise on the Ganga', text: 'Assi to Manikarnika by boat; the morning after the drive.', tag: 'Varanasi · dawn' },
    { image: `${IMG}/Varanasi/Kashi_Vishwanath_Temple.jpg`, title: 'Kashi Vishwanath', text: 'Reached on foot from the Godowlia end; the car waits at the Dashashwamedh parking.', tag: 'Varanasi · old city' },
    { image: `${IMG}/Varanasi/Sarnath.jpg`, title: 'Sarnath', text: 'Ten kilometres north, on the Cantonment side; the afternoon of a two-day drive.', tag: 'Sarnath · 10 km' },
    { image: `${IMG}/Lucknow/Hazratganj.jpg`, title: 'Hazratganj, Lucknow', text: 'The evening of day one on the two-day plan, twenty minutes from the ring road.', tag: 'Lucknow · km 550' },
  ],

  tips: [
    { title: 'Four o’clock, not six', text: 'Every hour of the timeline depends on being on the Yamuna Expressway before the city wakes. A six o’clock departure adds an hour at the Delhi end and puts you into Lucknow at lunch traffic; on a one-day run that is the difference between the aarti and the dark.' },
    { title: 'Decide A or B at Lucknow, not in Delhi', text: 'The two fast routes share the road for 550 km. Tell the driver which you prefer, but the choice is made at the Lucknow ring road, so if the day is running late or someone is tired you can switch to the Purvanchal Expressway for the smoother finish.' },
    { title: 'Name the hotel, not the ghat', text: 'The driver needs the hotel name to work out the nearest point a car can reach. For the old city that is the Godowlia end and the Dashashwamedh parking; for the Cantonment, Sigra and the ring road it is the door.' },
  ],

  faqs: [
    { question: 'What is the best route from Delhi to Varanasi by car?', answer: 'The Yamuna Expressway to Agra, the Agra–Lucknow Expressway to Lucknow, and NH-731 and NH-56 through Sultanpur and Jaunpur into Varanasi: about 820 km and twelve to thirteen hours of driving. The Purvanchal Expressway alternative from Lucknow to Ghazipur is about 40 km longer, takes the same time and is smoother; the old GT Road through Kanpur and Prayagraj takes thirteen to fourteen hours and is worth it only if you are stopping at the Sangam.' },
    { question: 'How far is Varanasi from Delhi by road and how long does it take?', answer: 'About 820 km on the expressway route and twelve to thirteen hours of driving, which is thirteen to fourteen hours door to door with a breakfast, lunch and two tea halts. Via the Purvanchal Expressway it is about 860 km in the same time; via the GT Road through Kanpur and Prayagraj it is about 820 km in thirteen to fourteen hours.' },
    { question: 'Can I drive from Delhi to Varanasi in one day?', answer: 'Yes, if you leave by four in the morning and keep the halts short: breakfast at Agra, lunch at Lucknow, and you reach Varanasi around half past five, in time for the 6.30 pm aarti at Dashashwamedh Ghat. Leaving at seven or later pushes the arrival past dark, and most families are more comfortable splitting the drive at Lucknow.' },
    { question: 'Where should I stop overnight between Delhi and Varanasi?', answer: 'Lucknow, 550 km from Delhi and two-thirds of the way. It is reached in eight to nine hours on the expressways, its hotels are twenty minutes off the ring road, and the remaining 300 km to Varanasi take five to six hours the next morning. Prayagraj at 700 km is the alternative if you take the GT Road and want to see the Sangam.' },
    { question: 'Is the Purvanchal Expressway route to Varanasi better than the Sultanpur road?', answer: 'It is smoother but not shorter. From the Lucknow ring road the Purvanchal Expressway runs to Ghazipur and NH-31 brings you back into Varanasi, about 40 km more than the NH-731 and NH-56 route through Sultanpur and Jaunpur, in the same twelve to thirteen hours. Take it for an overnight drive or for passengers who prefer expressway all the way; take the Sultanpur road for the shortest distance and the lower toll.' },
    { question: 'Is Prayagraj on the way from Delhi to Varanasi?', answer: 'Only on the GT Road route, NH-19 through Kanpur, where Prayagraj sits at about 700 km and Varanasi is 120 km further. The expressway routes through Lucknow bypass it. If the Sangam is part of the trip, go out via Prayagraj with a night there and return via Lucknow, so you do not repeat a road.' },
    { question: 'What is the cab fare from Delhi to Varanasi?', answer: 'At the published rate card a sedan is ₹9,020 one-way for 820 km at ₹11/km, an Ertiga ₹12,300 at ₹15/km, an Innova Crysta ₹14,760 at ₹18/km and a 12-seater Tempo Traveller ₹18,860 at ₹23/km. A four-day round trip is twice the one-way figure, ₹18,040 for a sedan. Tolls and parking are extra at actual, and a night halt at Lucknow does not change the fare.' },
    { question: 'How much are the tolls from Delhi to Varanasi by car?', answer: 'The toll page for the corridor lists six FASTag plazas on the expressway route, at Jewar, Mathura, Firozabad, Kannauj, Lucknow–Sultanpur and Jaunpur, totalling about ₹830 for a car, with larger vehicles paying more. The Purvanchal Expressway route pays expressway tolls all the way to Ghazipur and comes out higher. The driver pays on FASTag and you settle the actual amount at the end.' },
  ],

  related: [
    { label: 'Delhi to Varanasi one-way cab', sub: '820 km · ₹9,020 sedan', href: '/one-way-cab/delhi-to-varanasi', img: '/images/car/swift_dzire.jpg' },
    { label: 'Delhi to Varanasi round trip', sub: 'Driver stays with you', href: '/round-trip/delhi-to-varanasi', img: '/images/car/innova_crysta.jpg' },
    { label: 'Delhi to Varanasi by Tempo Traveller', sub: 'Groups of 12 and more', href: '/tempo-traveller/delhi-to-varanasi', img: '/images/tempo/12_seater.jpg' },
    { label: 'Lucknow to Varanasi cab', sub: '300 km · the second day', href: '/lucknow-to-varanasi', img: `${IMG}/Lucknow/Bara_Imambara.jpg` },
    { label: 'Varanasi trip cost from Delhi', sub: 'Cab, stay and the ghats', href: '/varanasi-trip-cost-from-delhi', img: `${IMG}/Varanasi/Boat_Ride_Ganges.jpg` },
    { label: 'Varanasi travel guide', sub: 'Ghats, temples, Sarnath', href: '/varanasi-travel-guide', img: `${IMG}/Varanasi/Kashi_Vishwanath_Temple.jpg` },
    { label: 'Ganga aarti tour', sub: 'Dashashwamedh at 6.30 pm', href: '/sightseeing/varanasi-ganga-aarti-tour', img: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg` },
    { label: 'Varanasi airport cab', sub: 'Drive one way, fly the other', href: '/airport-service/varanasi', img: '/images/airport_section.jpg' },
  ],
  guides: ['delhi-to-rishikesh-shortest-route', 'delhi-to-srinagar-by-road', 'dev-deepawali-varanasi-2026', 'chhath-puja-varanasi-ghat-guide', 'deepotsav-ayodhya-2026-guide'],

  schema: {
    places: ['delhi', 'varanasi', 'lucknow', 'prayagraj'],
    trip: {
      name: 'Delhi to Varanasi by car in two days via Lucknow',
      description: 'The recommended two-day drive: Delhi to Lucknow on the Yamuna and Agra–Lucknow expressways, a night in Lucknow, and Lucknow to Varanasi via Sultanpur and Jaunpur or on the Purvanchal Expressway the next morning.',
      touristType: 'Road travellers',
      lowPrice: 9020,
      highPrice: 37720,
      itinerary: [
        { name: 'Day 1: Delhi to Lucknow', text: '550 km in eight to nine hours: Yamuna Expressway to Agra, Agra–Lucknow Expressway to the Lucknow ring road; evening at the Bara Imambara, Rumi Darwaza and Hazratganj.' },
        { name: 'Day 2: Lucknow to Varanasi', text: '300 km in five to six hours on NH-731 and NH-56 via Sultanpur and Jaunpur, or the Purvanchal Expressway; arrive for lunch, Sarnath in the afternoon, Dashashwamedh aarti at 6.30 pm.' },
      ],
    },
    howTo: {
      name: 'How to choose the route from Delhi to Varanasi by car',
      description: 'Pick between the three roads on what you want from the day, then decide whether to split the drive at Lucknow.',
      totalTime: 'PT5M',
      estimatedCost: { currency: 'INR', value: 9020 },
      steps: [
        { name: 'Take the expressways to Lucknow', text: 'Every fast route uses the Yamuna Expressway to Agra and the Agra–Lucknow Expressway to Lucknow, 550 km in eight to nine hours. Leave Delhi by four.' },
        { name: 'Choose A or B at the Lucknow ring road', text: 'NH-731 and NH-56 through Sultanpur and Jaunpur is the shortest at about 820 km; the Purvanchal Expressway to Ghazipur is about 40 km longer but expressway throughout. Both take twelve to thirteen hours from Delhi.' },
        { name: 'Take the GT Road only for Prayagraj', text: 'NH-19 through Kanpur and Prayagraj is a thirteen-to-fourteen-hour drive shared with trucks; take it when a night at the Sangam is part of the plan.' },
        { name: 'Split the drive at Lucknow if you can', text: 'A night in Lucknow turns thirteen hours into an eight-hour day and a five-hour morning. The sedan fare stays ₹9,020 one-way.' },
      ],
    },
  },
};
