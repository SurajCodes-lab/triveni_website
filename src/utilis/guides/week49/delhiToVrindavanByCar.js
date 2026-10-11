// Week 49 route guide — "delhi to vrindavan distance by car" (3,187 impressions
// a quarter, position 8.7; the Delhi–Vrindavan cluster is 17,568). The corridor
// has a cab page and a distance page; this is the road answer: the Yamuna
// Expressway from Greater Noida to the Mathura exit, the one plaza at Jewar,
// and the 15 km of town road that can take as long as an hour of expressway.
// Distances and times are the distance page's; the toll is from the Delhi to
// Mathura toll page, whose plaza is the one on this road. Fares are computed
// from the rate card by the fare block, never typed here.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'delhi-to-vrindavan-by-car',
  path: '/delhi-to-vrindavan-by-car',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'delhi to vrindavan distance by car', impressions: 3187, position: 8.7 },

  eyebrow: 'Road guide · Delhi to Vrindavan',
  crumbs: [{ name: 'Vrindavan', url: '/vrindavan' }, { name: 'Delhi to Vrindavan cab', url: '/delhi-to-vrindavan' }],
  crumbName: 'Delhi to Vrindavan by car',
  titleLead: 'Delhi to Vrindavan by car:',
  titleAccent: 'the Yamuna Expressway and the last 15 km',
  title: 'Delhi to Vrindavan by Car: The Yamuna Expressway and the Last 15 km',
  metaTitle: 'Delhi to Vrindavan Distance by Car: 185 km, 3–3.5 Hrs',
  metaDescription: 'Delhi to Vrindavan by car is 185 km and 3–3.5 hours on the Yamuna Expressway from Greater Noida to the Mathura exit, one plaza at Jewar, then 15 km of town road to the temples. Halts, fog and fares.',
  keywords: ['delhi to vrindavan distance by car', 'delhi to vrindavan by car', 'delhi to vrindavan by road', 'delhi to vrindavan route', 'delhi to vrindavan yamuna expressway', 'delhi to vrindavan toll', 'delhi to vrindavan cab fare', 'delhi to mathura vrindavan by car'],
  heroImage: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg`,
  heroAlt: 'Prem Mandir at Vrindavan, lit up in the evening at the end of the drive from Delhi',

  lead: 'Delhi to Vrindavan by car is 185 km and three to three and a half hours: out through Noida to Zero Point beyond Greater Noida, the Yamuna Expressway to the Mathura exit, and then 15 km of ordinary town road into the temple town. One FASTag plaza on the way, at Jewar, ₹155 for a car. Vrindavan is under the 300 km per day minimum that outstation cabs bill on, so the fare is the rate card on the minimum: a sedan at ₹11/km, an Ertiga or SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23, tolls and parking at actual.',
  keyFacts: [
    { label: 'Distance', value: '185 km · Yamuna Expressway' },
    { label: 'Drive time', value: '3–3.5 hrs' },
    { label: 'Toll, car one-way', value: '₹155 · Jewar plaza' },
    { label: 'Sedan rate', value: '₹11/km · 300 km min' },
  ],
  stickyLabel: 'Delhi–Vrindavan cab',
  stickyPrice: 'From ₹11/km',
  waText: 'Hi, I want a cab from Delhi to Vrindavan by car. Date and number of passengers to follow.',

  intro: [
    'The drive to Vrindavan is really two roads, and they could not be more different. The first is the Yamuna Expressway, which you pick up at Zero Point beyond Greater Noida after leaving Delhi through Noida: a straight, flat run past Jewar with nothing to slow you but the speed cameras, and one sensible halt at the food plaza on the expressway itself. The second begins when you come off at the Mathura exit: the last fifteen kilometres into Vrindavan are ordinary town road, busy with e-rickshaws and pilgrims on foot, and this short stretch can take as long as an hour of expressway did.',
    'Every number on this page is the one the rest of the site uses. The 185 km and the three to three and a half hours are from our distance page for the corridor, the ₹155 toll is from the Delhi to Mathura toll page, whose Jewar plaza is the one on this road, and the fares in the box lower down are computed from the published rate card: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum with tolls and parking at actual.',
  ],

  timelineTitle: 'Delhi to Vrindavan, kilometre by kilometre',
  timelineEyebrow: 'Yamuna Expressway via the Mathura exit',
  timelineIntro: 'Kilometre marks are from central Delhi and rounded to the nearest post; the billing distance is 185 km. The clock assumes a six o’clock start with one tea halt at the expressway food plaza, which is how the drive comes in at a little over three hours. The plaza is where the toll page puts it.',
  timeline: [
    { km: 0, name: 'Delhi', time: '6 am', text: 'Leave through Noida. From south and east Delhi the DND and the Noida expressway put you at Greater Noida inside the hour; from north and west Delhi allow longer, because the first 45 km are city roads and the city is the slow part of this drive.', tag: 'Start', image: `${IMG}/Delhi/India_Gate.jpg`, alt: 'India Gate, Delhi, at first light' },
    { km: 20, name: 'Noida', time: '6.30 am', text: 'Through Noida on the expressway that runs down the Yamuna bank. At six it is empty; at nine it is the reason the drive takes four hours instead of three.' },
    { km: 45, name: 'Greater Noida · Zero Point', time: '7 am', text: 'Zero Point is where the Yamuna Expressway begins. From here the road is straight and flat for over a hundred kilometres, with speed cameras that the driver takes seriously.', tag: 'Expressway begins' },
    { km: 60, name: 'Jewar toll plaza', time: '7.15 am', text: 'The one plaza on the way: ₹155 for a car, FASTag, and the Mathura exit comes before the second plaza further down the expressway. Our cars carry a live tag and go straight through.', tag: 'Toll ₹155' },
    { km: 105, name: 'Expressway food plaza', time: '7.45 am', text: 'The one sensible halt, on the expressway itself: the toilets are clean and the tea is hot. Fifteen minutes; there is nothing else worth stopping for between Greater Noida and the exit.', stop: 'Tea' },
    { km: 170, name: 'Mathura exit', time: '8.30 am', text: 'Come off here. The expressway carries on to Agra, and a driver who misses the exit adds a long loop to the morning. The second road begins at the bottom of the ramp.', tag: 'Leave the expressway', image: `${IMG}/Mathura/mathura_hero_section.jpg`, alt: 'Mathura, at the exit from the Yamuna Expressway' },
    { km: 180, name: 'Mathura outskirts', time: '8.50 am', text: 'Town road now: two lanes, e-rickshaws, tractors, pilgrims on foot and the occasional cow with right of way. The driver slows to walking pace in places, and this is where the last quarter of an hour of the drive goes.' },
    { km: 185, name: 'Vrindavan', time: '9.15 am', text: 'The car goes as far as the parking on the edge of the temple quarter and no further; Banke Bihari, the lanes and the ghats are on foot from there. Prem Mandir and ISKCON are on wider roads and the car can drop you at the gate.', tag: 'Arrive', image: `${IMG}/Mathura_Vrindavan/Banke_Bihari_Temple.jpg`, alt: 'Banke Bihari temple in the lanes of Vrindavan' },
  ],

  table: {
    title: 'Delhi to Vrindavan by car: the drive by segment',
    caption: 'Segment distances, driving times, road type and the car toll between Delhi and Vrindavan on the Yamuna Expressway via the Mathura exit',
    intro: 'Distances are one-way and add up to the 185 km we bill on. The toll is for a car or sedan at the Jewar plaza the Delhi to Mathura toll page lists; an SUV pays more. Times assume a six o’clock start on a normal day; the last segment is the one that varies.',
    columns: [
      { key: 'segment', label: 'Segment' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'tolls', label: 'Toll, car', align: 'right' },
      { key: 'note', label: 'What to expect', strong: true },
    ],
    rows: [
      { segment: 'Delhi to Greater Noida (Zero Point)', distance: '45 km', time: '1 hr', road: 'City roads through Noida', tolls: 'None', note: 'The slow part; empty at six, thick by nine' },
      { segment: 'Zero Point to the Jewar plaza', distance: '15 km', time: '15 min', road: 'Yamuna Expressway', tolls: '₹155 (Jewar)', note: 'Straight, flat, camera-watched' },
      { segment: 'Jewar to the Mathura exit', distance: '110 km', time: '1.25 hrs', road: 'Yamuna Expressway', tolls: 'None; the exit is before the next plaza', note: 'Tea at the food plaza; fog near Jewar in December and January' },
      { segment: 'Mathura exit to Vrindavan', distance: '15 km', time: '30–60 min', road: 'Two-lane town road', tolls: 'None', note: 'E-rickshaws and pilgrims; walled in with traffic on Holi and Janmashtami' },
    ],
    footnote: 'Toll from the Delhi to Mathura toll page: ₹155 for a car at the Jewar plaza, FASTag, and the Mathura exit comes before the second plaza. ₹310 for a round trip. Parking at Vrindavan is at actual.',
  },

  sections: [
    {
      eyebrow: 'The expressway',
      heading: 'Which is the best route from Delhi to Vrindavan by car?',
      paras: [
        'The Yamuna Expressway, without much argument. Leave Delhi through Noida, pick up the expressway at Zero Point beyond Greater Noida, and stay on it to the Mathura exit: our distance page puts the whole run at 185 km and three to three and a half hours, and the expressway is the reason it is that short. It is a straight, flat road built for speed, with no towns on it and no level crossings, and the only things that slow it are the speed cameras, which the drivers respect, and the winter fog, which nobody can.',
        'What the expressway does not do is take you to Vrindavan. It takes you to the Mathura exit, and from the bottom of the ramp the second road begins: fifteen kilometres of ordinary two-lane road through Mathura’s outskirts to the temple town. That stretch is the one that decides whether the drive is three hours or nearly four, and it is why the times on the distance page are a range rather than a number. There is no way round it; every road into Vrindavan is a town road at the end.',
        'The one halt worth making is the food plaza on the expressway itself, where the toilets are clean and the tea is hot. There is nothing to stop for between Greater Noida and the exit otherwise, and once you are off the expressway the sensible thing is to keep moving until the car is parked. Fill the tank in Delhi; the driver will not want to stop for fuel in Mathura’s traffic.',
      ],
      link: { label: 'Delhi to Vrindavan distance and route page', href: '/distance/delhi-to-vrindavan' },
      image: { src: `${IMG}/Mathura_Vrindavan/Yamuna_River_Ghat.jpg`, alt: 'The Yamuna ghats at Vrindavan', tag: 'Vrindavan · km 185', caption: 'The expressway follows the Yamuna south; the town road at the end brings you to its ghats.' },
    },
    {
      eyebrow: 'The last 15 km',
      heading: 'Why do the last 15 km from the Mathura exit take as long as an hour?',
      paras: [
        'Because they are not a highway. From the exit ramp the road narrows to two lanes and runs through Mathura’s outskirts, and it carries everything the expressway does not: e-rickshaws three abreast, tractors, buses for the temples, pilgrims walking in the road and, in the town itself, lanes laid out for people on foot long before anyone thought of an Innova. On a quiet weekday morning the driver is through it in half an hour. On a Sunday, or any day the temples are busy, it can take as long as the hour of expressway that came before it.',
        'The pattern to plan for is that the car does not reach the temples. Banke Bihari sits in the old lanes, and the parking is on the edge of the temple quarter; from there it is a walk, or a cycle rickshaw, and there is no point trying to do better. Prem Mandir and ISKCON are on wider roads and the car can set you down at the gate. Our drivers know where the parking is on each side of town, and a phone call from the car to the hotel usually settles where to be dropped.',
        'This is also why the early start matters more here than the distance suggests. A six o’clock departure puts you at the Mathura exit by half past eight and through the outskirts before the day’s traffic builds; a nine o’clock departure puts you in the same fifteen kilometres at noon, and on a festival day it puts you in a queue.',
      ],
      link: { label: 'Delhi to Vrindavan one-way cab', href: '/delhi-to-vrindavan' },
      image: { src: `${IMG}/Mathura_Vrindavan/Banke_Bihari_Temple.jpg`, alt: 'Banke Bihari temple, reached on foot from the parking at Vrindavan', tag: 'Banke Bihari · on foot', side: 'left', caption: 'The car stops at the edge of the temple quarter; Banke Bihari is a walk through the lanes.' },
    },
    {
      eyebrow: 'Tolls and timing',
      heading: 'What is the toll from Delhi to Vrindavan, and when should I leave?',
      paras: [
        'One plaza, at Jewar: ₹155 for a car, FASTag, as the Delhi to Mathura toll page lists it. The Mathura exit comes before the expressway’s second plaza, so that is the whole toll for the drive, ₹310 for a round trip in a sedan and more in an SUV. Our drivers settle it on the car’s tag and it appears on the bill at actual. There is no separate entry charge for cars at Mathura or Vrindavan; parking at the temple quarter is paid on the day.',
        'On timing, six in the morning is the answer for most of the year. The city roads through Noida are empty, the expressway is quiet, and you are at the Mathura exit by half past eight and parked in Vrindavan around nine, which is early enough for the morning darshan and the lanes before the heat. For a day trip that also leaves the afternoon for Mathura, Krishna Janmabhoomi and Vishram Ghat, and the drive home in daylight.',
        'The exception is winter. From December to the end of January there is fog on the expressway most mornings, thick enough near Jewar that we start later or drive slowly with the hazards on. In those weeks a seven or eight o’clock start is the sensible one; the fog is usually thinning by then, and an hour lost at the start is better than an hour spent at walking pace on a road built for speed.',
      ],
      link: { label: 'Delhi to Mathura toll cost, plaza by plaza', href: '/toll-cost/delhi-to-mathura' },
      image: { src: `${IMG}/Mathura_Vrindavan/Vishram_Ghat.jpg`, alt: 'Vishram Ghat on the Yamuna at Mathura', tag: 'Vishram Ghat · afternoon', caption: 'An early start leaves the afternoon for Mathura: Krishna Janmabhoomi and the ghats on the way home.' },
    },
    {
      eyebrow: 'Festivals',
      heading: 'When is the best time to drive to Vrindavan, and what about Holi and Janmashtami?',
      paras: [
        'Year-round, on the distance page and in practice. The drive is a plains run with no hill to close and no monsoon road to wash out, and the temples keep their calendar whatever the month. Winter mornings bring fog on the expressway, which costs an hour at the start; summer afternoons are hot in the lanes, which is an argument for the early start and the morning darshan; and the monsoon simply makes the last fifteen kilometres muddier. None of it stops the trip.',
        'Janmashtami and Holi are the grandest celebrations, and they are also the two days the drive behaves differently. Around both, the Vrindavan end is walled in with traffic: the town road fills from the Mathura exit inward, the parking is full by mid-morning, and the police close streets around the temples. On those days we drop at the edge of town and you finish on foot to Banke Bihari, and the drive back is planned for after the crowd has thinned. If you want the festival, come for it and accept the walk; if you want the temples quietly, come the week before or the week after.',
        'For an ordinary weekend the Prem Mandir illuminations in the evening are the reason to stay a night rather than drive back the same day. The temple is lit after dark, it is on a wide road where the car can wait, and it turns a long day trip into an easy two days with Mathura and Govardhan on the second morning.',
      ],
      link: { label: 'Same-day Mathura and Vrindavan from Delhi', href: '/same-day-mathura-vrindavan-from-delhi' },
      image: { src: `${IMG}/Mathura_Vrindavan/ISKCON_Vrindavan.jpg`, alt: 'ISKCON temple at Vrindavan', tag: 'ISKCON · wide road', side: 'left', caption: 'ISKCON and Prem Mandir are on roads the car can reach; Banke Bihari is not.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Delhi to Vrindavan cost?',
      paras: [
        'Vrindavan is 185 km, and outstation cabs bill a 300 km per day minimum, so the one-way fare is the minimum at the vehicle’s rate: a sedan at ₹11/km, an Ertiga or similar SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23. Fuel and the driver are inside those figures; the ₹155 toll at Jewar each way for a car and the parking at Vrindavan are paid at actual. The fare box below does the arithmetic for each vehicle.',
        'A two-day round trip with the same car and driver is the greater of twice the one-way fare or two days at the 300 km minimum, and on this route they come to the same thing. That is the pattern that suits Vrindavan best: up in the morning, the temples and Prem Mandir lit in the evening, then Mathura and Govardhan on the second morning before the drive home. A same-day return, there and back in one long day with both towns, is priced on its own page, and the same-day Mathura and Vrindavan trip is the one to book if you are not staying the night.',
        'On the choice of car, a sedan is the right vehicle for this drive; the road is an expressway and a town road, and there is nothing on it that needs an SUV. A Tempo Traveller earns its rate only for a group of ten or more, and even then the driver will want to know in advance that the drop is at the edge of the temple quarter, because the lanes are no place for a 12-seater. One-way is the right booking if you are carrying on to Agra with another car; the round trip is right for everything else.',
      ],
      link: { label: 'Delhi to Vrindavan round trip', href: '/round-trip/delhi-to-vrindavan' },
      image: { src: `${IMG}/Mathura_Vrindavan/Govardhan_Hill.jpg`, alt: 'Govardhan Hill, near Vrindavan, on the second morning', tag: 'Govardhan · day 2', caption: 'The second morning of a round trip: Govardhan and Mathura before the drive home.' },
    },
  ],

  fare: {
    title: 'Delhi to Vrindavan by car',
    note: 'Rate-card fares for the 185 km drive, which bills the 300 km minimum. The two-day figure is the usual pattern: temples and Prem Mandir on day one, Mathura and Govardhan on day two.',
    caption: 'Delhi to Vrindavan cab fare by vehicle, one-way and two-day round trip',
    distanceKm: 185,
    roundTrip: true,
    days: 2,
    roundLabel: 'Two-day round trip',
    footnote: 'Toll ₹155 each way for a car at Jewar, Vrindavan parking and any night halt for the driver at actual. No festival surcharge. A same-day return with both towns is priced on the same-day Mathura and Vrindavan page.',
    waText: 'Hi, I want a Delhi to Vrindavan cab. Please share the fare for my dates and number of passengers.',
    bookHref: '/round-trip/delhi-to-vrindavan',
    bookLabel: 'Delhi to Vrindavan round trip',
    cta: 'Book the Vrindavan cab',
  },

  galleryTitle: 'What the 185 km buys you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Mathura_Vrindavan/Banke_Bihari_Temple.jpg`, title: 'Banke Bihari', text: 'In the old lanes; the car stops at the edge and you walk.', tag: 'Morning darshan' },
    { image: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg`, title: 'Prem Mandir', text: 'Lit after dark, and the reason to stay the night.', tag: 'Evening' },
    { image: `${IMG}/Mathura_Vrindavan/ISKCON_Vrindavan.jpg`, title: 'ISKCON Vrindavan', text: 'On a wide road; the car drops you at the gate.', tag: 'Any time' },
    { image: `${IMG}/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg`, title: 'Krishna Janmabhoomi', text: 'In Mathura, on the way home or the second morning.', tag: 'Mathura' },
    { image: `${IMG}/Mathura_Vrindavan/Vishram_Ghat.jpg`, title: 'Vishram Ghat', text: 'The Yamuna at Mathura, for the evening aarti.', tag: 'Mathura · evening' },
  ],

  tips: [
    { title: 'Leave at six, or at eight in the fog', text: 'Six puts you at the Mathura exit by half past eight and through the town road before it fills. From December to the end of January the expressway fogs near Jewar; then a later start beats an hour at walking pace.' },
    { title: 'Do not miss the Mathura exit', text: 'The expressway carries on to Agra. Tell the driver "Mathura exit for Vrindavan"; the second road begins at the bottom of the ramp.' },
    { title: 'Expect to walk the last bit', text: 'Banke Bihari is in the lanes and the parking is at the edge of the temple quarter. Prem Mandir and ISKCON are on wider roads where the car can wait.' },
    { title: 'One plaza, FASTag', text: 'Jewar, ₹155 for a car, and the exit comes before the second plaza. Our cars carry a live tag; if you follow in your own, top it up the night before.' },
    { title: 'Festival days mean an edge-of-town drop', text: 'Around Holi and Janmashtami the town is walled in with traffic. We drop at the edge, you finish on foot, and the drive home waits for the crowd to thin.' },
  ],

  faqs: [
    { question: 'What is the distance from Delhi to Vrindavan by car?', answer: '185 km by the Yamuna Expressway: out through Noida to Zero Point beyond Greater Noida, the expressway to the Mathura exit, and 15 km of town road into Vrindavan. Our distance page publishes the corridor at 185 km and three to three and a half hours.' },
    { question: 'How long does it take to drive from Delhi to Vrindavan?', answer: 'Three to three and a half hours: about an hour of city roads to Greater Noida, an hour and a half on the expressway to the Mathura exit, and half an hour to an hour on the town road at the end. A six o’clock start has you parked in Vrindavan around nine; a later start adds time at both ends.' },
    { question: 'Which is the best route from Delhi to Vrindavan by road?', answer: 'The Yamuna Expressway, joined at Zero Point beyond Greater Noida and left at the Mathura exit. It is straight, flat and fast, with one toll plaza at Jewar and one food plaza worth stopping at. Every road into Vrindavan ends in the same 15 km of town road, so the expressway is the way to make the rest of the drive short.' },
    { question: 'How much is the toll from Delhi to Vrindavan?', answer: '₹155 one-way for a car at the Jewar plaza on the Yamuna Expressway, FASTag, as the Delhi to Mathura toll page lists it. The Mathura exit comes before the expressway’s second plaza, so that is the whole toll. A round trip is ₹310 for a sedan; an SUV pays more.' },
    { question: 'What is the cab fare from Delhi to Vrindavan?', answer: 'Vrindavan is 185 km and outstation cabs bill a 300 km per day minimum, so one-way is the minimum at the vehicle’s rate: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, with the Jewar toll and parking extra at actual. A two-day round trip is twice the one-way fare. The fare box on this page shows the figure for each vehicle.' },
    { question: 'Can I do Delhi to Vrindavan and back in one day?', answer: 'Yes. With a six o’clock start you are in Vrindavan by nine, have the morning for Banke Bihari and the lanes, the afternoon for Mathura and Vishram Ghat, and are home in the evening. The same-day Mathura and Vrindavan trip is the page to book for that; the two-day round trip is the one to book if you want Prem Mandir lit after dark and Govardhan the next morning.' },
    { question: 'Is there fog on the Yamuna Expressway in winter?', answer: 'Yes, most mornings from December to the end of January, thick enough near Jewar that we start later or drive slowly with the hazards on. In those weeks a seven or eight o’clock start is the sensible one. The rest of the year the expressway is clear and the six o’clock start is the right one.' },
    { question: 'Where does the car park in Vrindavan?', answer: 'At the edge of the temple quarter; Banke Bihari and the old lanes are on foot or by cycle rickshaw from there. Prem Mandir and ISKCON are on wider roads where the car can drop you at the gate and wait. Around Holi and Janmashtami the streets near the temples are closed and the drop is at the edge of town.' },
  ],

  related: [
    { label: 'Delhi to Vrindavan cab', sub: '185 km · sedan from ₹11/km', href: '/delhi-to-vrindavan', img: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg` },
    { label: 'Delhi to Mathura toll cost', sub: 'One plaza at Jewar, ₹155 one-way', href: '/toll-cost/delhi-to-mathura', img: `${IMG}/Delhi/India_Gate.jpg` },
    { label: 'Same-day Mathura and Vrindavan', sub: 'Both towns, one long day', href: '/same-day-mathura-vrindavan-from-delhi', img: `${IMG}/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg` },
    { label: 'Mathura and Vrindavan travel guide', sub: 'Temples, ghats and when to go', href: '/mathura-vrindavan-travel-guide', img: `${IMG}/Mathura_Vrindavan/Banke_Bihari_Temple.jpg` },
    { label: 'Delhi to Mathura cab', sub: 'The same expressway, 15 km short', href: '/delhi-to-mathura', img: `${IMG}/Mathura/mathura_hero_section.jpg` },
  ],
  guides: ['delhi-to-nainital-by-car', 'delhi-to-rishikesh-shortest-route', 'delhi-to-varanasi-best-route-by-car', 'diwali-tour-packages-2026-from-delhi', 'weekend-getaways-near-me'],

  schema: {
    places: ['delhi', 'vrindavan', 'mathura'],
    trip: {
      name: 'Delhi to Vrindavan by car on the Yamuna Expressway',
      description: 'The 185 km drive from Delhi to Vrindavan: city roads to Greater Noida, the Yamuna Expressway to the Mathura exit with one plaza at Jewar, then 15 km of town road to the temples, in three to three and a half hours.',
      touristType: 'Pilgrims and road travellers',
      itinerary: [
        { name: 'Delhi to Greater Noida', text: '45 km of city roads through Noida to Zero Point, where the Yamuna Expressway begins; about an hour.' },
        { name: 'Greater Noida to the Mathura exit', text: '125 km on the Yamuna Expressway with the Jewar plaza, ₹155 for a car, and a tea halt at the food plaza; about an hour and a half.' },
        { name: 'Mathura exit to Vrindavan', text: '15 km of two-lane town road through Mathura’s outskirts to the parking at the edge of the temple quarter; half an hour to an hour.' },
      ],
    },
    howTo: {
      name: 'How to drive from Delhi to Vrindavan',
      description: 'Leave Delhi through Noida, join the Yamuna Expressway at Zero Point, come off at the Mathura exit and follow the town road to the temple quarter.',
      totalTime: 'PT3H15M',
      steps: [
        { name: 'Leave Delhi by six', text: 'Through Noida to Zero Point beyond Greater Noida, where the expressway begins; later in winter fog.' },
        { name: 'Pass the Jewar plaza', text: '₹155 for a car on FASTag; tea at the expressway food plaza further on.' },
        { name: 'Take the Mathura exit', text: 'Do not carry on towards Agra; the town road to Vrindavan begins at the bottom of the ramp.' },
        { name: 'Park at the edge of the temple quarter', text: 'Walk to Banke Bihari and the lanes; the car can reach the gates of Prem Mandir and ISKCON.' },
      ],
    },
  },
};
