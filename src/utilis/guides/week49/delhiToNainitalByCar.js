// Week 49 route guide — "delhi to nainital distance by car" (4,570 impressions
// a quarter, position 7.7; the Delhi–Nainital cluster is 35,578). The corridor
// already has a cab page, a distance page, a toll page and a travel-by-car
// page; this is the road answer none of them gives in one place: the plains
// run on NH-9, the three plazas, the halt at Haldwani and the 35 km climb from
// Kathgodam. Every distance, time and toll is the one those pages publish.
// Fares are computed from the rate card by the fare block, never typed here.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'delhi-to-nainital-by-car',
  path: '/delhi-to-nainital-by-car',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'delhi to nainital distance by car', impressions: 4570, position: 7.7 },

  eyebrow: 'Road guide · Delhi to Nainital',
  crumbs: [{ name: 'Nainital', url: '/nainital' }, { name: 'Delhi to Nainital cab', url: '/delhi-to-nainital' }],
  crumbName: 'Delhi to Nainital by car',
  titleLead: 'Delhi to Nainital by car:',
  titleAccent: '300 km on NH-9, the plains, then the climb',
  title: 'Delhi to Nainital by Car: 300 km on NH-9, the Plains, Then the Climb',
  metaTitle: 'Delhi to Nainital Distance by Car: 300 km, 6–7 Hrs',
  metaDescription: 'Delhi to Nainital by car is 300 km on NH-9 via Moradabad, Rampur and Haldwani, 6–7 hours, three toll plazas totalling ₹270, then the 35 km climb from Kathgodam. Halts, timing and fares.',
  keywords: ['delhi to nainital distance by car', 'delhi to nainital by car', 'delhi to nainital road trip', 'delhi to nainital route', 'delhi to nainital by road', 'nh-9 delhi to nainital', 'delhi to nainital toll', 'delhi to nainital cab fare'],
  heroImage: `${IMG}/Nainital/Naini_Lake.jpg`,
  heroAlt: 'Naini Lake at Nainital, the end of the 300 km drive from Delhi',

  lead: 'Delhi to Nainital by car is 300 km and six to seven hours: NH-9 across the plains through Ghaziabad, Moradabad and Rampur to Haldwani at the foot of the hills, then the 35 km climb from Kathgodam to the lake. Three FASTag plazas on the highway total ₹270 for a car, and the hill section is toll-free. The fare is the published rate card on the 300 km per day minimum, which on this corridor is exactly the distance driven: a sedan is ₹11/km, an Ertiga or SUV ₹15, an Innova Crysta ₹18 and a 12-seater Tempo Traveller ₹23, with tolls and parking at actual.',
  keyFacts: [
    { label: 'Distance', value: '300 km · NH-9' },
    { label: 'Drive time', value: '6–7 hrs' },
    { label: 'Tolls, car one-way', value: '₹270 · 3 plazas' },
    { label: 'Sedan rate', value: '₹11/km · 300 km min' },
  ],
  stickyLabel: 'Delhi–Nainital cab',
  stickyPrice: 'From ₹11/km',
  waText: 'Hi, I want a cab from Delhi to Nainital by car. Date and number of passengers to follow.',

  intro: [
    'The Nainital run is really two different drives, and it helps to plan it that way. The first is NH-9 across the western UP plains: Ghaziabad, Hapur, the Ganga crossing at Garhmukteshwar, then Moradabad and Rampur, and finally Haldwani, the last flat town before the hills. The second is the climb from Kathgodam, 35 km of hairpins through Ranibagh and Jeolikote with the engine in low gear and the lake appearing suddenly at the top. The first drive is about traffic and timing; the second is about the road itself.',
    'Every number here is the one the rest of the site uses. The 300 km and the six to seven hours are from our distance and travel-by-car pages for the corridor, the ₹270 of tolls is from the toll page, and the fares in the box lower down are computed from the published rate card: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum with tolls and parking at actual.',
  ],

  timelineTitle: 'Delhi to Nainital, kilometre by kilometre',
  timelineEyebrow: 'NH-9 via Moradabad and Haldwani',
  timelineIntro: 'Kilometre marks are from central Delhi and rounded to the nearest post; the billing distance is 300 km. The clock assumes a half past five start with a breakfast halt at Garhmukteshwar and a fuel and water stop at Haldwani, which is how the drive comes in at about seven hours. The three plazas are where the toll page puts them.',
  timeline: [
    { km: 0, name: 'Delhi', time: '5.30 am', text: 'Join NH-9 on the east side of the city and be moving before six. The truck traffic on this highway thickens through the middle of the day, and the hour you save by leaving early is saved again at the Moradabad end.', tag: 'Start', image: `${IMG}/Delhi/India_Gate.jpg`, alt: 'India Gate, Delhi, before dawn' },
    { km: 20, name: 'Ghaziabad', time: '6 am', text: 'The urban stretch ends and the highway proper begins. The first of the three plazas sits about ten kilometres on: ₹85 for a car, FASTag, and our cars carry a live tag so there is no queue.', tag: 'Toll ₹85' },
    { km: 60, name: 'Hapur', time: '6.45 am', text: 'The road is four-lane and flat, and the fields open out on both sides. Nothing to stop for; the point of Hapur is that you are past it before the local traffic wakes.' },
    { km: 100, name: 'Garhmukteshwar', time: '7.30 am', text: 'The Ganga crossing, and the breakfast halt. Twenty minutes at one of the highway dhabas on the far bank; the tea is hot and it is the last easy stop before Moradabad.', stop: 'Breakfast' },
    { km: 165, name: 'Moradabad', time: '9 am', text: 'The brass city, and the second plaza just beyond it: ₹120 for a car. Keep to the highway rather than the town; the bypass carries you round and the road stays four-lane into Rohilkhand.', tag: 'Toll ₹120' },
    { km: 190, name: 'Rampur', time: '9.30 am', text: 'The last of the plains towns on the route, and the third plaza, ₹65, sits on the road beyond it. From here the highway runs straight towards the foothills, and on a clear morning the Kumaon line shows on the horizon.', tag: 'Toll ₹65' },
    { km: 265, name: 'Haldwani', time: '10.45 am', text: 'The gateway to Kumaon and the place to stop, and not only for an early lunch. It is the last flat town, so we fill the tank and buy water here because choices thin out once the climb starts. There are no more tolls after Haldwani.', stop: 'Fuel and water' },
    { km: 270, name: 'Kathgodam', time: '11.15 am', text: 'The railhead, and the point where the road tips upward and the second drive begins. Thirty-odd kilometres of hairpins lie ahead through Ranibagh and Jeolikote, and the driver drops into low gear and stays there.', tag: 'The climb begins', image: `${IMG}/Nainital/Naina_Peak.jpg`, alt: 'Naina Peak above Nainital, seen from the climb' },
    { km: 300, name: 'Nainital', time: '12.30 pm', text: 'The lake appears suddenly at the top. The town runs a one-way traffic system, so follow the driver rather than the map; the car parks and the Mall Road, the boats and Naina Devi are a walk from there.', tag: 'Arrive', image: `${IMG}/Nainital/Nainital_hero_section.jpg`, alt: 'Nainital and Naini Lake from above' },
  ],

  table: {
    title: 'Delhi to Nainital by car: the drive by segment',
    caption: 'Segment distances, driving times, road type and car tolls between Delhi and Nainital on NH-9 via Moradabad, Rampur and Haldwani',
    intro: 'Distances are one-way and add up to the 300 km we bill on. The tolls are for a car or sedan at the three plazas the toll page lists; an SUV pays more at each. Times assume a dawn start on a normal day.',
    columns: [
      { key: 'segment', label: 'Segment' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'tolls', label: 'Tolls, car', align: 'right' },
      { key: 'note', label: 'What to expect', strong: true },
    ],
    rows: [
      { segment: 'Delhi to Ghaziabad', distance: '20 km', time: '30 min', road: 'Urban NH-9', tolls: 'None', note: 'City traffic; the reason for the early start' },
      { segment: 'Ghaziabad to Moradabad', distance: '145 km', time: '2.5–3 hrs', road: 'Four-lane plains highway', tolls: '₹85 (Ghaziabad plaza)', note: 'Hapur, the Ganga at Garhmukteshwar and breakfast; truck traffic builds after nine' },
      { segment: 'Moradabad to Rampur', distance: '25 km', time: '30 min', road: 'Four-lane highway', tolls: '₹120 (Moradabad plaza)', note: 'Bypass the town; the plaza sits just beyond it' },
      { segment: 'Rampur to Haldwani', distance: '75 km', time: '1.5 hrs', road: 'Four-lane highway to the foothills', tolls: '₹65 (Rampur plaza)', note: 'The last plains stretch; fuel, water and lunch at Haldwani' },
      { segment: 'Haldwani to Nainital', distance: '35 km', time: '1.5 hrs', road: 'Two-lane hill road, hairpins from Kathgodam', tolls: 'None', note: 'Low gear all the way; slips in the monsoon, snow above the town in winter' },
    ],
    footnote: 'Tolls from the Delhi to Nainital toll page: ₹85 at Ghaziabad, ₹120 at Moradabad and ₹65 at Rampur, all FASTag, ₹270 one-way for a car. The mountain road above Haldwani is toll-free. Parking in Nainital is at actual.',
  },

  sections: [
    {
      eyebrow: 'The plains',
      heading: 'What is the Delhi to Nainital route by car, and why is it two drives?',
      paras: [
        'The route is NH-9 the whole way to the foot of the hills. It leaves Delhi through Ghaziabad, runs through Hapur to the Ganga crossing at Garhmukteshwar, and carries on across Rohilkhand through Moradabad and Rampur to Haldwani. Our distance page puts the run at 300 km and six to seven hours, and the travel-by-car page breaks it into five legs: Delhi to Ghaziabad in half an hour, Ghaziabad to Moradabad in the best part of three, Moradabad to Rampur in half an hour, Rampur to Haldwani in an hour and a half, and Haldwani to Nainital in another hour and a half for 35 km.',
        'Those last two numbers are the whole point. The plains legs cover 265 km in about five hours; the hill leg covers 35 km in an hour and a half. They are different kinds of driving, and the drive is planned around the difference. On the plains the enemy is traffic, which is why we leave Delhi before six and why the breakfast halt is a short one. On the hill the enemy is the road itself, which is why Haldwani is where you eat, fuel and buy water, and why the climb is done with a rested driver and a full tank.',
        'The road is good the whole way to Haldwani: four-lane, flat and well kept, with three FASTag plazas and a run of dhabas that know the Nainital trade. The hill section is two-lane and looked after, but it is a mountain road with hairpins stacked one above the other, and it wants to be driven as one. There is no expressway on this corridor and no shortcut worth the name; NH-9 via Moradabad is both the shortest route and the fastest.',
      ],
      link: { label: 'Delhi to Nainital distance and route page', href: '/distance/delhi-to-nainital' },
      image: { src: `${IMG}/Delhi/Delhi_hero_section.jpg`, alt: 'Delhi at dawn, the start of the NH-9 run to Nainital', tag: 'Delhi · km 0', caption: 'The plains run is about traffic, which is why the drive starts before the city wakes.' },
    },
    {
      eyebrow: 'The climb',
      heading: 'How hard is the 35 km climb from Kathgodam to Nainital?',
      paras: [
        'It is a proper hill road, not a long one. From Kathgodam the highway tips upward almost at once and does not level again until the lake: thirty-odd kilometres of hairpins through Ranibagh and Jeolikote, the engine working in low gear, the valley falling away on the outside of each bend. Our travel-by-car page counts nine hairpins on the ascent and calls the surface moderate, which is fair; it is tarmac all the way, but narrow in places and busy with buses and the local jeeps that run the hill.',
        'Two things make it easier. The first is the halt at Haldwani, which means the driver starts the climb fresh, the tank is full and nobody needs to stop on the bends. The second is the time of day: by half past eleven the morning mist has lifted off the hill and the road is dry, and you are at the top before the afternoon traffic comes down. In the monsoon this section is where the slips happen and the road can close without notice, so between July and September we check before setting out; from December to February there can be snow above the town, and the driver carries chains if it is forecast.',
        'At the top, Nainital runs a one-way traffic system around the lake, and the sensible thing is to let the driver follow the signs rather than argue with a phone. The car parks; the Mall Road, the boats on Naini Lake, Naina Devi temple and the way up to Snow View are all a walk from where it stops. If the town is heaving, which it is on a summer weekend, Bhimtal is a short turn off the same climb and far quieter, with its own lake and a fraction of the crowd.',
      ],
      link: { label: 'Delhi to Nainital by car, leg by leg', href: '/travel-by-car/delhi-to-nainital' },
      image: { src: `${IMG}/Nainital/Snow_View_Point.jpg`, alt: 'Snow View Point above Nainital at the top of the climb', tag: 'Snow View · km 300', side: 'left', caption: 'The reward for the hairpins: the ridge above the lake, with the snows on a clear day.' },
    },
    {
      eyebrow: 'Tolls and timing',
      heading: 'What are the tolls from Delhi to Nainital, and what time should I leave?',
      paras: [
        'Three plazas, ₹270 one-way for a car: ₹85 at Ghaziabad, ₹120 at Moradabad and ₹65 at Rampur, all FASTag, all before Haldwani. There are no tolls on the hill road. A round trip is therefore ₹540 in tolls for a sedan, more for an SUV, and our drivers settle them on the car’s tag so they appear on the bill at actual rather than as a surcharge; any state or parking charges are at actual in the same way.',
        'On timing, the answer is before six. NH-9 carries the truck traffic of western UP, and it thickens through the middle of the day; a half past five start puts you through Ghaziabad before the city is moving, across the Ganga by half past seven and past Moradabad by nine, which is the hour the highway starts to fill. Leave at eight and the same road takes an hour longer at the Delhi end and another at Moradabad, and you reach the climb in the afternoon when the buses are coming down. On a Friday or the eve of a long weekend, when half of Delhi seems to be heading for the hills, the difference is larger still.',
        'The other reason for the early start is daylight on the hill. The climb is easy at noon and tedious at dusk, and in winter the town can be under fog by late afternoon. Our drivers plan the day so that the car is in Nainital with the whole afternoon ahead: the boats, the Mall Road and the sunset from Naina Peak, rather than a hotel check-in in the dark.',
      ],
      link: { label: 'Delhi to Nainital toll cost, plaza by plaza', href: '/toll-cost/delhi-to-nainital' },
      image: { src: `${IMG}/Nainital/Mall_Road_Nainital.jpg`, alt: 'The Mall Road beside Naini Lake at Nainital', tag: 'Mall Road · afternoon', caption: 'The point of leaving before six: the afternoon on the Mall Road rather than on the highway.' },
    },
    {
      eyebrow: 'Season',
      heading: 'When is the best time to drive from Delhi to Nainital?',
      paras: [
        'March to June and September to November, on the distance page and in our drivers’ experience. Spring and early summer are the classic season: Nainital is cool while Delhi bakes, the lake is full and the hill is green, and the only cost is the crowd, because May and June are peak months and the hotels sell out. September to November is quieter and, for the drive, better: the monsoon has washed the air, the plains are cool by dawn and the snows show from Snow View on a clear morning.',
        'Winter is cold but beautiful. From December to February the town can be near freezing, there is snow above it more years than not, and the road to Snow View may close after a fall. The drive is still made: the highway is unaffected, the hill road is cleared, and the driver carries chains when snow is forecast. Carry woollens, ask for a later start if there is fog on the plains, and expect the best views of the year from the top.',
        'The months to avoid are July to September, the monsoon. The plains run is merely wet, but the Haldwani to Nainital section is where the slips happen and the road can close without notice. We check the Uttarakhand road position before setting out in those months, and if the hill is closed we say so rather than drive up to a barrier. Nainital in the rain is lovely from a hotel window; it is not worth a night on the road at Haldwani.',
      ],
      link: { label: 'Best time to visit Nainital, month by month', href: '/best-time-to-visit/nainital' },
      image: { src: `${IMG}/Nainital/Naina_devi_temple.jpg`, alt: 'Naina Devi temple on the lakeshore at Nainital', tag: 'Naina Devi · lakeside', side: 'left', caption: 'Spring and autumn are the seasons; winter is the snow; the monsoon is the one to sit out.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Delhi to Nainital cost?',
      paras: [
        'Nainital is 300 km, and outstation cabs bill a 300 km per day minimum, so this is one of the corridors where the distance and the minimum are the same number and nothing is wasted. The one-way fare is the rate card on 300 km: a sedan at ₹11/km, an Ertiga or similar SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23. Fuel and the driver are inside those figures; the ₹270 of tolls each way for a car and the parking in Nainital are paid at actual. The fare box below does the arithmetic for each vehicle.',
        'A two-day round trip with the same car and driver is the greater of twice the one-way fare or two days at the 300 km minimum, and on this route they come to the same thing. That is the usual weekend: up on Saturday morning, the lake in the afternoon, back on Sunday after a morning at Bhimtal or Naukuchiatal. A third day, for the lakes and Snow View properly, or for Corbett on the way home, adds 300 km at the vehicle’s rate; the driver’s night-halt allowance is extra at actual.',
        'On the choice of car, the travel-by-car page recommends an SUV or an Innova, and for the climb that is good advice: the extra torque tells on the hairpins, and an Innova Crysta with six aboard works out cheaper per head than two sedans. For two or three people with light luggage a sedan is perfectly good; it is the road that is slow, not the car. One-way is the right booking if you are returning by train from Kathgodam; the round trip is right for everything else, and it is the cheaper way to see Bhimtal, because the same driver takes you there on the way down.',
      ],
      link: { label: 'Delhi to Nainital one-way cab', href: '/delhi-to-nainital' },
      image: { src: `${IMG}/Nainital/Naukuchiatal_Lake.jpg`, alt: 'Naukuchiatal, the nine-cornered lake near Nainital', tag: 'Naukuchiatal · day 2', caption: 'The second day is for the other lakes: Bhimtal and Naukuchiatal on the way home.' },
    },
  ],

  fare: {
    title: 'Delhi to Nainital by car',
    note: 'Rate-card fares for the 300 km drive, which is exactly the 300 km minimum. The two-day figure is the usual weekend: up on Saturday morning, back on Sunday with Bhimtal on the way home.',
    caption: 'Delhi to Nainital cab fare by vehicle, one-way and two-day round trip',
    distanceKm: 300,
    roundTrip: true,
    days: 2,
    roundLabel: 'Two-day round trip',
    footnote: 'Tolls ₹270 each way for a car, Nainital parking and any night halt for the driver at actual. No festival or weekend surcharge. A third day adds 300 km at the vehicle’s rate.',
    waText: 'Hi, I want a Delhi to Nainital cab. Please share the fare for my dates and number of passengers.',
    bookHref: '/round-trip/delhi-to-nainital',
    bookLabel: 'Delhi to Nainital round trip',
    cta: 'Book the Nainital cab',
  },

  galleryTitle: 'What the 300 km buys you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Nainital/Naini_Lake.jpg`, title: 'Naini Lake', text: 'The lake appears suddenly at the top of the climb; the boats are best early.', tag: 'km 300' },
    { image: `${IMG}/Nainital/Mall_Road_Nainital.jpg`, title: 'The Mall Road', text: 'A walk from where the car parks, along the water.', tag: 'Afternoon' },
    { image: `${IMG}/Nainital/Snow_View_Point.jpg`, title: 'Snow View', text: 'The ridge above the town, and the snows on a clear day.', tag: 'Clear mornings' },
    { image: `${IMG}/Nainital/Bhimtal_Lake.jpg`, title: 'Bhimtal', text: 'A short turn off the same climb, and far quieter.', tag: 'Day 2' },
    { image: `${IMG}/Nainital/Naina_Peak.jpg`, title: 'Naina Peak', text: 'The high point above the lake, for the sunset.', tag: 'Evening' },
  ],

  tips: [
    { title: 'Be out of Delhi before six', text: 'NH-9 is a truck highway and it fills through the middle of the day. A half past five start puts you past Moradabad by nine and on the climb before the afternoon buses come down.' },
    { title: 'Eat, fuel and buy water at Haldwani', text: 'It is the last flat town. Choices thin out once the climb starts, and the driver wants a full tank and no reason to stop on the hairpins.' },
    { title: 'FASTag, three plazas', text: 'Ghaziabad, Moradabad and Rampur, ₹270 for a car one-way, all before Haldwani. Our cars carry a live tag; if you are following in your own car, top it up the night before.' },
    { title: 'Follow the one-way system', text: 'Nainital routes traffic one way around the lake. Let the driver follow the signs; the Mall Road, the boats and Naina Devi are a walk from the car park.' },
    { title: 'Check the hill in the monsoon', text: 'Between July and September the Haldwani to Nainital section is where the slips happen and the road can close without notice. We check before setting out; ask us on the morning.' },
  ],

  faqs: [
    { question: 'What is the distance from Delhi to Nainital by car?', answer: '300 km on NH-9 via Ghaziabad, Moradabad, Rampur and Haldwani, then the 35 km climb from Kathgodam to the lake. Our distance page and travel-by-car page both publish the corridor at 300 km, which is also the 300 km per day minimum that outstation cabs bill on.' },
    { question: 'How long does it take to drive from Delhi to Nainital?', answer: 'Six to seven hours. The 265 km of plains to Haldwani take about five hours with a breakfast halt, and the 35 km climb from Kathgodam takes an hour and a half. A half past five start from Delhi puts you at the lake around half past twelve; leaving at eight adds an hour or more at the Delhi end and at Moradabad.' },
    { question: 'Which route is best from Delhi to Nainital by car?', answer: 'NH-9 via Moradabad. It runs through Ghaziabad, Hapur, the Ganga crossing at Garhmukteshwar, Moradabad and Rampur to Haldwani, and the hill road climbs from Kathgodam through Ranibagh and Jeolikote. There is no expressway on the corridor and no shortcut worth taking; the highway is both the shortest and the fastest way.' },
    { question: 'How much is the toll from Delhi to Nainital?', answer: '₹270 one-way for a car across three FASTag plazas: ₹85 at Ghaziabad, ₹120 at Moradabad and ₹65 at Rampur, all before Haldwani. The 35 km hill road above Haldwani is toll-free. A round trip is ₹540 for a sedan; an SUV pays more at each plaza, and parking in Nainital is at actual.' },
    { question: 'What is the cab fare from Delhi to Nainital?', answer: 'The rate card on the 300 km minimum, which on this corridor equals the distance: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, with tolls and parking extra at actual. A two-day round trip is twice the one-way fare, and each further day adds 300 km at the vehicle’s rate. The fare box on this page shows the figure for each vehicle.' },
    { question: 'What time should I leave Delhi for Nainital?', answer: 'Before six. NH-9 carries the truck traffic of western UP and fills through the middle of the day; a half past five start puts you across the Ganga by half past seven, past Moradabad by nine, at Haldwani for an early lunch and at the lake with the afternoon ahead. The climb is easiest at midday and slowest at dusk, when the buses are coming down.' },
    { question: 'Is the Delhi to Nainital road open in winter, and does it snow?', answer: 'Yes, the road is open. From December to February Nainital is cold and there is usually snow above the town; the road to Snow View may close after a fall, and the driver carries chains when snow is forecast. The highway is unaffected apart from morning fog on the plains, for which we push the start later. Winter gives the clearest views of the year.' },
    { question: 'Where does the car stop in Nainital, and can I see Bhimtal on the same trip?', answer: 'Nainital runs a one-way system around the lake, and the car parks where the system allows; the Mall Road, the boats and Naina Devi temple are a walk from there. Bhimtal is a short turn off the same climb, so on a two-day round trip the same driver takes you there and to Naukuchiatal on the way home for no extra day.' },
  ],

  related: [
    { label: 'Delhi to Nainital cab', sub: '300 km · sedan from ₹11/km', href: '/delhi-to-nainital', img: `${IMG}/Nainital/Nainital_hero_section.jpg` },
    { label: 'Delhi to Nainital toll cost', sub: 'Three plazas, ₹270 one-way', href: '/toll-cost/delhi-to-nainital', img: `${IMG}/Delhi/India_Gate.jpg` },
    { label: 'Delhi to Nainital by car, leg by leg', sub: 'Five segments, from Ghaziabad to the climb', href: '/travel-by-car/delhi-to-nainital', img: `${IMG}/Nainital/Naina_Peak.jpg` },
    { label: 'Nainital trip cost from Delhi', sub: 'Stays, boats and the cab, added up', href: '/nainital-trip-cost-from-delhi', img: `${IMG}/Nainital/Naukuchiatal_Lake.jpg` },
    { label: 'How to reach Nainital from Delhi', sub: 'Car, bus, train and Kathgodam compared', href: '/how-to-reach/nainital-from-delhi', img: `${IMG}/Nainital/Bhimtal_Lake.jpg` },
  ],
  guides: ['delhi-to-vrindavan-by-car', 'haridwar-dehradun-mussoorie-by-road', 'delhi-to-rishikesh-shortest-route', 'hill-stations-near-haridwar-rishikesh', 'weekend-getaways-near-me'],

  schema: {
    places: ['delhi', 'nainital'],
    trip: {
      name: 'Delhi to Nainital by car on NH-9',
      description: 'The 300 km drive from Delhi to Nainital on NH-9 via Ghaziabad, Moradabad, Rampur and Haldwani, then the 35 km climb from Kathgodam, in six to seven hours.',
      touristType: 'Road travellers',
      itinerary: [
        { name: 'Delhi to Moradabad', text: '165 km on NH-9 through Ghaziabad, Hapur and the Ganga crossing at Garhmukteshwar; plazas at Ghaziabad and Moradabad.' },
        { name: 'Moradabad to Haldwani', text: '100 km of four-lane highway through Rampur to the last flat town, with the third plaza beyond Rampur; fuel, water and lunch at Haldwani.' },
        { name: 'Haldwani to Nainital', text: '35 km of hairpins from Kathgodam through Ranibagh and Jeolikote to the lake, toll-free, about an hour and a half.' },
      ],
    },
    howTo: {
      name: 'How to drive from Delhi to Nainital',
      description: 'Take NH-9 via Moradabad and Rampur to Haldwani, halt there for fuel and water, then climb the 35 km from Kathgodam to the lake.',
      totalTime: 'PT6H30M',
      steps: [
        { name: 'Leave Delhi before six', text: 'Join NH-9 through Ghaziabad; the first FASTag plaza is about ten kilometres beyond the city.' },
        { name: 'Cross the Ganga and pass Moradabad', text: 'Breakfast at Garhmukteshwar, then the Moradabad bypass and plaza; keep to the highway through Rampur and its plaza.' },
        { name: 'Stop at Haldwani', text: 'Fill the tank, buy water and eat; it is the last flat town and there are no more tolls.' },
        { name: 'Climb from Kathgodam', text: '35 km of hairpins through Ranibagh and Jeolikote in low gear; follow the one-way system into Nainital and park.' },
      ],
    },
  },
};
