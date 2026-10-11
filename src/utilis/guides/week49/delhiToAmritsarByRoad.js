// Week 49 route guide — Delhi to Amritsar by road on NH-44, the Grand Trunk
// Road. The corridor has a booking page, a distance page, a toll page and a
// travel-by-car page; this is the drive in order, plaza by plaza, with the
// Chandigarh fork, the Ludhiana and Jalandhar slow-downs and the Wagah timing.
// Every distance, time and toll is the one those pages publish.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'delhi-to-amritsar-by-road',
  path: '/delhi-to-amritsar-by-road',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'delhi to amritsar distance' },

  eyebrow: 'Road guide · Delhi to Amritsar',
  crumbs: [{ name: 'Amritsar', url: '/amritsar' }, { name: 'Delhi to Amritsar cab', url: '/delhi-to-amritsar' }],
  crumbName: 'Delhi to Amritsar by road',
  titleLead: 'Delhi to Amritsar by road:',
  titleAccent: '450 km of Grand Trunk Road, five plazas and the Wagah clock',
  title: 'Delhi to Amritsar by Road: 450 km of Grand Trunk Road, Five Plazas and the Wagah Clock',
  metaTitle: 'Delhi to Amritsar by Road: 450 km, 7–8 hrs, Tolls ₹585',
  metaDescription: 'Delhi to Amritsar by car: 450 km on NH-44 via Karnal, Ambala, Ludhiana and Jalandhar in 7–8 hours, five plazas totalling ₹585. Where it slows, when to leave for Wagah, and sedan fares from ₹4,950.',
  keywords: ['delhi to amritsar distance', 'delhi to amritsar by road', 'delhi to amritsar by car', 'delhi to amritsar cab', 'delhi to amritsar route', 'delhi to amritsar toll', 'delhi to amritsar taxi fare', 'delhi to amritsar road trip', 'delhi to amritsar via chandigarh', 'delhi to wagah border by car'],
  heroImage: `${IMG}/Amritsar/Golden_Temple.jpg`,
  heroAlt: 'The Golden Temple at Amritsar, the end of the 450 km drive from Delhi',

  lead: 'Delhi to Amritsar by road is 450 km on NH-44, the Grand Trunk Road, and seven to eight hours: Karnal, Ambala, Ludhiana and Jalandhar, mostly four-lane, with the slow patches near Ludhiana and Jalandhar and five toll plazas that take ₹585 from a car. It is the longest of the North Indian day drives that stays entirely on the plain, and the one where the arrival time matters most, because the Wagah ceremony and the Golden Temple at night both keep a clock. A sedan is ₹4,950 one way at ₹11 a kilometre.',
  keyFacts: [
    { label: 'Distance', value: '450 km · NH-44' },
    { label: 'Drive time', value: '7–8 hrs' },
    { label: 'Tolls, car one-way', value: '₹585 · 5 plazas' },
    { label: 'Sedan, one-way', value: '₹4,950' },
  ],
  stickyLabel: 'Delhi–Amritsar cab',
  stickyPrice: 'Sedan ₹4,950',
  waText: 'Hi, I want a cab from Delhi to Amritsar by road. Date and number of passengers to follow.',

  intro: [
    'The Grand Trunk Road from Delhi to Amritsar is the plainest long drive in the north: one highway number the whole way, no hills, no river crossings that matter, and a toll plaza every hour or so to mark the progress. What makes it worth a guide is the timing. Leave at the right hour and the same 450 km delivers you to the Wagah gates before the ceremony and to the Golden Temple after dark, when it is at its best; leave at the wrong one and it delivers you to Ludhiana at rush hour. This guide walks the road plaza by plaza, says where it slows and why, settles the Chandigarh question, and works the fare on the rate card.',
    'Every figure is the one the rest of the site uses: the distance, time and stops from our distance page, the five plazas from the toll page, and the fares from the rate card, ₹11 a kilometre for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, tolls and parking at actuals.',
  ],

  timelineTitle: 'Delhi to Amritsar, plaza by plaza',
  timelineEyebrow: 'NH-44, the Grand Trunk Road',
  timelineIntro: 'Kilometre marks are from central Delhi and the plazas are where the toll page puts them. The clock assumes a five o’clock start with breakfast before Panipat and one more halt at Ambala, which is how the drive comes in at about seven and a half hours.',
  timeline: [
    { km: 0, name: 'Delhi', time: '5 am', text: 'Out on NH-44 through the northern edge of the city. Leaving at five clears the Delhi and Sonipat end before the morning traffic and puts Amritsar in the early afternoon; leaving at eight adds an hour before Panipat is reached.', tag: 'Start', image: `${IMG}/Delhi/India_Gate.jpg`, alt: 'India Gate, Delhi, before dawn' },
    { km: 60, name: 'Murthal', time: '5.50 am', text: 'The dhabas of the whole Punjab-bound trade, before the first plaza. Twenty minutes for parathas; every driver on the corridor has a favourite and none of them is wrong.', stop: 'Breakfast' },
    { km: 90, name: 'Panipat plaza', time: '6.30 am', text: 'The first of five plazas, ₹165 for a car, and the most expensive. FASTag on all five; our cars carry a live tag.', tag: 'Toll ₹165' },
    { km: 130, name: 'Karnal plaza', time: '7 am', text: 'The second plaza, ₹130, and the Karnal bypass. The road is four-lane and flat through the Haryana wheat country, and this is the fastest hour of the drive.', tag: 'Toll ₹130' },
    { km: 200, name: 'Ambala plaza', time: '7.50 am', text: 'The third plaza, ₹95, and the fork: the Chandigarh road leaves NH-44 here. Amritsar traffic keeps straight on. A tea halt at Ambala is the sensible one; the next is Ludhiana, which is not a place to stop.', tag: 'Toll ₹95 · the Chandigarh fork' },
    { km: 310, name: 'Ludhiana plaza', time: '9.30 am', text: 'The fourth plaza, ₹110, and the first of the two slow patches: our distance page notes congestion near Ludhiana, and the bypass helps but does not remove it. Reckon on an hour for the city’s edge at the wrong time of day.', tag: 'Toll ₹110 · slow' },
    { km: 370, name: 'Jalandhar plaza', time: '10.30 am', text: 'The fifth and last plaza, ₹85, and the second slow patch at the Jalandhar end. Beyond it the road opens out again across the Doaba to the Beas.', tag: 'Toll ₹85 · slow' },
    { km: 450, name: 'Amritsar', time: '12.30 pm', text: 'In past the bypass to the hotel. The Golden Temple is on foot from the parking at the old city edge; Jallianwala Bagh is beside it; Wagah is 30-odd km further west and the car takes you for the afternoon ceremony.', tag: 'Arrive', image: `${IMG}/Amritsar/Golden_Temple.jpg`, alt: 'The Golden Temple at Amritsar' },
  ],

  table: {
    title: 'Delhi to Amritsar: the drive and its variations',
    caption: 'Delhi to Amritsar by car on NH-44 compared with the Chandigarh stop, the Wagah-first plan and the two-day round trip: distance, drive time, car tolls and when to choose each',
    intro: 'Distances are one-way. Tolls are for a car at the plazas the toll page lists (an SUV pays more at each). The first three plazas are the same ones the Delhi to Chandigarh toll page prices.',
    columns: [
      { key: 'plan', label: 'Plan' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'tolls', label: 'Tolls, car', align: 'right' },
      { key: 'when', label: 'When to choose it', strong: true },
    ],
    rows: [
      { plan: 'NH-44 straight through', distance: '450 km', time: '7–8 hrs', road: 'Four-lane Grand Trunk Road; slow near Ludhiana and Jalandhar', tolls: '₹585 (5 plazas)', when: 'Every day. There is no other road worth taking.' },
      { plan: 'With a night at Chandigarh', distance: '250 km, then 200 km', time: '4–5 hrs, then about 4', road: 'The Chandigarh fork at Ambala; back to NH-44 the next morning', tolls: '₹390 to Chandigarh (3 plazas), then Ludhiana and Jalandhar', when: 'When two easy days beat one long one, or Chandigarh is on the list.' },
      { plan: 'Wagah first, then the city', distance: '450 km plus the Wagah road', time: 'Arrive at Wagah by mid-afternoon', road: 'Skirt Amritsar and go straight to the border gates', tolls: '₹585', when: 'On a five o’clock start; the ceremony is late afternoon and the temple is better after dark anyway.' },
      { plan: 'Two-day round trip', distance: '900 km', time: '2 days', road: 'The same road both ways', tolls: '₹1,170 (10 plazas)', when: 'When Delhi is home and Amritsar the weekend; the temple, Wagah and Jallianwala Bagh fit in the one full day.' },
    ],
    footnote: 'Tolls from the Delhi to Amritsar toll page: ₹165 at Panipat, ₹130 at Karnal, ₹95 at Ambala, ₹110 at Ludhiana and ₹85 at Jalandhar for a car, all FASTag; ₹1,170 for a round trip. Punjab and Haryana charge no separate state entry tax for cars.',
  },

  sections: [
    {
      eyebrow: 'The road',
      heading: 'What is the Delhi to Amritsar road like on NH-44?',
      paras: [
        'Flat, four-lane and long. Our distance page describes NH-44, the old Grand Trunk Road, as mostly four-lane with some congestion near Ludhiana and Jalandhar, and that is the whole character of the drive: hours of quick highway across the Haryana wheat country and the Punjab Doaba, broken by five plazas and two cities whose edges the bypasses do not quite avoid. The stops it lists are Karnal, Ambala, Ludhiana and Jalandhar, and each has its plaza.',
        'The first half is the fast half. From Delhi to Ambala the road runs through Sonipat, Panipat and Karnal with the bypasses doing their job, and a car that leaves at five is at the Ambala fork by eight with three plazas behind it. The second half is where the seven-to-eight-hour figure is made: the Ludhiana edge, which our drivers reckon at up to an hour at the wrong time of day, the Jalandhar edge, shorter, and then the open run across the Doaba to the Beas and into Amritsar.',
        'There is no alternative road. The Chandigarh line is a detour, not a route, and the old alignments through the town centres that the bypasses replaced are slower in every case. The choice on this corridor is not which road but which hour, and the answer to that is five in the morning.',
      ],
      link: { label: 'Delhi to Amritsar distance and route', href: '/distance/delhi-to-amritsar' },
      image: { src: `${IMG}/Amritsar/Amristar_hero_section.jpg`, alt: 'Amritsar old city around the Golden Temple', tag: 'Amritsar · km 450', caption: 'One highway number the whole way; the only decision is the hour you leave.' },
    },
    {
      eyebrow: 'The slow patches',
      heading: 'Where does the Delhi to Amritsar drive slow down, and how do I avoid it?',
      paras: [
        'Ludhiana first. The city is the biggest on the road and the busiest industrially, and the bypass carries the highway round its edge through traffic that is thick from mid-morning to evening. Our distance page names it, and our drivers plan the drive around it: a five o’clock start from Delhi reaches the Ludhiana plaza at half past nine, before the worst of it; an eight o’clock start reaches it at half past twelve, in the middle of it, and the hour is lost there rather than anywhere else on the road.',
        'Jalandhar second, and less. The plaza at km 370 is followed by the Jalandhar edge, shorter than Ludhiana’s and quicker to clear, and beyond it the road is open again to the Beas and Amritsar. Between the two cities there is nothing to stop for, and the sensible halts are Murthal before Panipat for breakfast and Ambala for tea, with Ludhiana and Jalandhar driven through rather than stopped in.',
        'The Delhi end is the third slow patch and the easiest to avoid: the northern exit through the city and Sonipat is quick at five and slow at eight, and the difference is most of an hour before the first plaza is reached. The corridor rewards the early start more than any other we run, because all three of its slow patches move with the clock and none of them with the road.',
      ],
      bullets: [
        'Delhi to Sonipat: quick at five, slow at eight. Most of an hour hangs on it.',
        'Ludhiana, km 310: the big one; up to an hour at the wrong time of day. Be there before ten.',
        'Jalandhar, km 370: shorter, and the last slow patch before the open Doaba run.',
      ],
      link: { label: 'Delhi to Amritsar toll cost', href: '/toll-cost/delhi-to-amritsar' },
    },
    {
      eyebrow: 'The Chandigarh question',
      heading: 'Should I go from Delhi to Amritsar via Chandigarh?',
      paras: [
        'Only as a night, not as a route. The Chandigarh road leaves NH-44 at the Ambala fork, and Delhi to Chandigarh is 250 km and four to five hours on our distance page, with the same three plazas, Panipat, Karnal and Ambala, priced at ₹390 for a car on the Chandigarh toll page. From Chandigarh back to NH-44 and on to Amritsar is about 200 km more and four hours, through the same Ludhiana and Jalandhar edges. As a detour it adds hours to a single day; as a two-day plan, with the evening at Sukhna Lake and the Rock Garden and the second morning on the open road, it is a comfortable way to break the 450 km.',
        'The people it suits are those for whom seven to eight hours in one day is too many, families with small children and older passengers among them, and those who want Chandigarh anyway. The people it does not suit are those with a Wagah slot or a Golden Temple evening fixed for the first day, because the detour spends the hours the ceremony needs.',
        'The Chandigarh night also opens the hills. From Chandigarh, Kasauli and Shimla are the same afternoon’s drive, and a Delhi, Chandigarh, Amritsar, hills loop is a real week rather than a long weekend; the Amritsar to the hills leg is on our hill stations near Amritsar guide.',
      ],
      link: { label: 'Delhi to Chandigarh toll cost', href: '/toll-cost/delhi-to-chandigarh' },
      image: { src: `${IMG}/Chandigarh/sukhana_lake.jpg`, alt: 'Sukhna Lake at Chandigarh', tag: 'Chandigarh · the night halt', side: 'left', caption: 'A night at Chandigarh breaks the 450 km into two easy days; as a detour in one day it costs the Wagah slot.' },
    },
    {
      eyebrow: 'The Wagah clock',
      heading: 'What time should I leave Delhi to reach the Wagah ceremony and the Golden Temple the same day?',
      paras: [
        'Five in the morning, and go to Wagah before the city. The ceremony at the border gates is late afternoon, earlier in winter than in summer, and the crowd at the gates builds for two hours before it; a car that left Delhi at five is at Amritsar by half past twelve with time to eat, skirt the city and be at the gates in the early afternoon with a seat. The driver knows the current timing, which changes with the season, and the road to the border is a further 30-odd km west of the city.',
        'The Golden Temple then gets the evening, which is when it is at its best: the marble cool, the tank lit, the kitchen serving. It is on foot from the parking at the old city edge, and Jallianwala Bagh is beside it; the Partition Museum in the town hall is a morning visit for the next day. A five o’clock start therefore buys the whole of Amritsar in the first day, and the second day is free for the museum, the bazaars and the drive home.',
        'A later start does not lose the trip; it loses the ceremony. Leave Delhi at eight and Amritsar is late afternoon, the gates are full, and Wagah becomes the second day’s afternoon, with the drive home on the third. It is a fine plan if there are three days; it is the reason the five o’clock start exists if there are two.',
      ],
      link: { label: 'Amritsar sightseeing tours', href: '/sightseeing/amritsar' },
      image: { src: `${IMG}/Amritsar/Wagah_Border.jpg`, alt: 'The crowd at the Wagah border ceremony', tag: 'Wagah · the afternoon', caption: 'Wagah first, on a five o’clock start; the Golden Temple after dark.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Delhi to Amritsar cost?',
      paras: [
        'Amritsar is 450 km, over the 300 km per day minimum, so the one-way fare is the distance at the rate: ₹4,950 for a sedan at ₹11 a kilometre, ₹6,750 for an Ertiga or similar SUV at ₹15, ₹8,100 for an Innova Crysta at ₹18 and ₹10,350 for a 12-seater Tempo Traveller at ₹23. Fuel and the driver are inside those figures; the ₹585 of tolls each way for a car, the parking at Amritsar and Wagah and the driver’s night halt are at actuals and appear on the bill.',
        'A two-day round trip with the same car and driver is twice the one-way distance, 900 km, which is more than two days at the minimum, so it is ₹9,900 for a sedan, ₹13,500 for an SUV, ₹16,200 for an Innova Crysta and ₹20,700 for a Tempo Traveller. The Wagah run on the day of arrival is inside the day’s kilometres on this corridor; a third day, for the museum and the bazaars with the car, or for the hills from Amritsar, adds 300 km at the vehicle’s rate.',
        'One-way is the right booking if the return is by the Shatabdi or a flight, which for Amritsar is common; the round trip is right for a road weekend. The Delhi airport to Amritsar taxi is a separate published fare with the airport pickup built in, for those landing at Delhi and driving straight on.',
      ],
      link: { label: 'Delhi to Amritsar cab', href: '/delhi-to-amritsar' },
    },
  ],

  fare: {
    title: 'Delhi to Amritsar on the rate card',
    note: 'Rate-card fares for the 450 km drive, which is over the 300 km minimum and bills its own distance. The two-day figure is the road weekend: up on Saturday at five, Wagah and the temple the same day, home on Sunday.',
    caption: 'Delhi to Amritsar cab fare by vehicle, one-way and two-day round trip',
    distanceKm: 450,
    roundTrip: true,
    days: 2,
    roundLabel: 'Two-day round trip',
    footnote: 'Tolls ₹585 each way for a car, Amritsar and Wagah parking and the driver’s night halt at actual. No festival or weekend surcharge; Diwali and Baisakhi book on the same rate card. A third day adds 300 km at the vehicle’s rate.',
    waText: 'Hi, I want a Delhi to Amritsar cab. Please share the fare for my dates and number of passengers.',
    bookHref: '/round-trip/delhi-to-amritsar',
    bookLabel: 'Delhi to Amritsar round trip',
    cta: 'Book the Amritsar cab',
  },

  galleryTitle: 'What the 450 km buys you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Amritsar/Golden_Temple.jpg`, title: 'The Golden Temple after dark', text: 'On foot from the old city parking; the evening of the first day.', tag: 'km 450' },
    { image: `${IMG}/Amritsar/Wagah_Border.jpg`, title: 'Wagah', text: 'The afternoon ceremony, 30-odd km west; the car takes you and waits.', tag: 'Afternoon' },
    { image: `${IMG}/Amritsar/Jallianwala_Bagh.jpg`, title: 'Jallianwala Bagh', text: 'Beside the temple; the same evening or the next morning.', tag: 'Old city' },
    { image: `${IMG}/Amritsar/Partition_Museum.jpg`, title: 'Partition Museum', text: 'In the town hall; the second morning.', tag: 'Day 2' },
    { image: `${IMG}/Chandigarh/Rock_Garden.jpg`, title: 'Chandigarh, if you break the drive', text: 'The night halt at the Ambala fork.', tag: 'Optional' },
  ],

  tips: [
    { title: 'Five o’clock, for Ludhiana and for Wagah', text: 'Every slow patch on this road moves with the clock. Leave at five and Ludhiana is behind you by ten and the Wagah gates are reached with a seat.' },
    { title: 'Murthal before Panipat, Ambala for tea', text: 'The two halts. Ludhiana and Jalandhar are driven through, not stopped in.' },
    { title: 'FASTag for five plazas', text: '₹585 for a car one way, ₹1,170 for the round trip. Our cars carry a live tag; if you are following in your own car, load it in Delhi.' },
  ],

  faqs: [
    { question: 'What is the distance from Delhi to Amritsar by road?', answer: '450 km on NH-44, the Grand Trunk Road, via Karnal, Ambala, Ludhiana and Jalandhar, seven to eight hours by our distance page. The road is mostly four-lane, with congestion near Ludhiana and Jalandhar.' },
    { question: 'How long does it take to drive from Delhi to Amritsar?', answer: 'Seven to eight hours, and about seven and a half with a five o’clock start, breakfast at Murthal and tea at Ambala. The time is made at the Delhi end before Panipat and at the Ludhiana and Jalandhar edges, all of which are slower later in the day.' },
    { question: 'How much is the toll from Delhi to Amritsar?', answer: '₹585 one way for a car across five plazas, by our toll page: ₹165 at Panipat, ₹130 at Karnal, ₹95 at Ambala, ₹110 at Ludhiana and ₹85 at Jalandhar, all FASTag. A round trip is ₹1,170. An SUV pays more at each plaza.' },
    { question: 'What is the cab fare from Delhi to Amritsar?', answer: '₹4,950 one way for a sedan at ₹11/km on the 450 km, ₹6,750 for an Ertiga or SUV at ₹15, ₹8,100 for an Innova Crysta at ₹18 and ₹10,350 for a 12-seater Tempo Traveller at ₹23. A two-day round trip is ₹9,900, ₹13,500, ₹16,200 and ₹20,700. Tolls and parking are extra at actuals.' },
    { question: 'Which is the best route from Delhi to Amritsar by car?', answer: 'NH-44 straight through; there is no other road worth taking. The Chandigarh line leaves at the Ambala fork and is a detour, sensible only as a night halt that breaks the drive into 250 km and 200 km days.' },
    { question: 'What time should I leave Delhi for Amritsar?', answer: 'Five in the morning. It clears the Delhi end before the traffic, puts the Ludhiana plaza behind you by half past nine, and reaches Amritsar by half past twelve with time to eat and be at the Wagah gates for the afternoon ceremony, leaving the Golden Temple for the evening, when it is at its best.' },
    { question: 'Can I see the Wagah border ceremony on the day I drive from Delhi?', answer: 'Yes, on a five o’clock start. The ceremony is late afternoon, earlier in winter, and the gates fill for two hours before it; a car that reaches Amritsar by half past twelve skirts the city and is at Wagah, 30-odd km west, in the early afternoon. The driver knows the current timing. On an eight o’clock start Wagah becomes the second day.' },
    { question: 'What is the best time to drive from Delhi to Amritsar?', answer: 'October to March for comfortable weather, by our distance page, with Diwali and Baisakhi as the special weeks; both book on the same rate card. December and January bring fog to the Haryana stretch in the early morning, when the drivers slow rather than leave later, because the Ludhiana and Wagah clocks still apply.' },
  ],

  related: [
    { label: 'Delhi to Amritsar cab', sub: '450 km · from ₹4,950', href: '/delhi-to-amritsar', img: `${IMG}/Amritsar/Golden_Temple.jpg` },
    { label: 'Delhi to Amritsar toll cost', sub: 'Five plazas, ₹585 one-way', href: '/toll-cost/delhi-to-amritsar', img: `${IMG}/Delhi/India_Gate.jpg` },
    { label: 'Delhi to Amritsar by car, leg by leg', sub: 'Karnal, Ambala, Ludhiana, Jalandhar', href: '/travel-by-car/delhi-to-amritsar', img: `${IMG}/Amritsar/Amristar_hero_section.jpg` },
    { label: 'Delhi Airport to Amritsar taxi', sub: 'Straight from T3', href: '/delhi-airport-to-amritsar-taxi', img: '/images/airport_section.jpg' },
    { label: 'Best time to visit Amritsar', sub: 'Month by month', href: '/best-time-to-visit/amritsar', img: `${IMG}/Amritsar/Jallianwala_Bagh.jpg` },
    { label: 'Hill stations near Amritsar', sub: 'Dalhousie, Dharamshala and the rest', href: '/hill-stations-near-amritsar', img: `${IMG}/Amritsar/Wagah_Border.jpg` },
    { label: 'Amritsar travel guide', sub: 'The temple, Wagah, the food', href: '/amritsar-travel-guide', img: `${IMG}/Amritsar/Partition_Museum.jpg` },
    { label: 'Tempo Traveller Delhi to Amritsar', sub: '12-seater for the group', href: '/tempo-traveller/delhi-to-amritsar', img: '/images/tempo_section.jpg' },
  ],
  guides: ['hill-stations-near-amritsar', 'tourist-places-within-50-km-of-amritsar-and-haridwar', 'best-time-to-visit-amritsar', 'chandigarh-to-kasol-by-road', 'delhi-to-srinagar-by-road'],

  schema: {
    places: ['delhi', 'amritsar', 'ludhiana', 'chandigarh'],
    trip: {
      name: 'Delhi to Amritsar by car on NH-44',
      description: 'The 450 km drive from Delhi to Amritsar on NH-44, the Grand Trunk Road, via Karnal, Ambala, Ludhiana and Jalandhar in seven to eight hours, with five toll plazas and the Wagah ceremony the same afternoon on a five o’clock start.',
      touristType: 'Road travellers',
      lowPrice: 4950,
      highPrice: 20700,
      itinerary: [
        { name: 'Delhi to Ambala', text: '200 km through Sonipat, Panipat and Karnal; breakfast at Murthal; plazas at Panipat, Karnal and Ambala; the Chandigarh fork at Ambala.' },
        { name: 'Ambala to Jalandhar', text: '170 km through the Ludhiana and Jalandhar edges, the two slow patches, with plazas at each.' },
        { name: 'Jalandhar to Amritsar', text: '80 km across the Doaba to the Beas and into Amritsar; Wagah in the afternoon, the Golden Temple after dark.' },
      ],
    },
    howTo: {
      name: 'How to drive from Delhi to Amritsar',
      description: 'Leave Delhi at five on NH-44, breakfast at Murthal, clear Ludhiana before ten, reach Amritsar by half past twelve, go to Wagah for the afternoon ceremony and the Golden Temple after dark.',
      totalTime: 'PT7H30M',
      estimatedCost: { currency: 'INR', value: 4950 },
      steps: [
        { name: 'Leave Delhi by five', text: 'Out on NH-44 through Sonipat before the traffic; breakfast at Murthal before the Panipat plaza.' },
        { name: 'Through Haryana to the Ambala fork', text: 'Karnal and Ambala plazas; tea at Ambala; keep straight on for Amritsar, the Chandigarh road leaves here.' },
        { name: 'Clear Ludhiana and Jalandhar', text: 'The two slow patches, with a plaza at each; be at Ludhiana before ten and drive through both rather than stopping.' },
        { name: 'Wagah, then the temple', text: 'Reach Amritsar by half past twelve, eat, and go 30-odd km west to the Wagah gates for the afternoon ceremony; the Golden Temple on foot from the old city parking after dark.' },
      ],
    },
  },
};
