// Week 48 guide 19: Delhi to Srinagar by road. Written for three queries that
// already rank on page one without a page built for them: "delhi to srinagar
// by road" (971 impressions, position 6.0), "delhi to kashmir by road" (525,
// 5.9) and "delhi to srinagar by road distance" (596, 5.6). The distance page
// and the travel-by-car page carry the numbers; this is the guide that
// explains the drive itself: why it is two days, where to halt, what the
// tunnel and the Ramban stretch mean, and what happens in winter.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'delhi-to-srinagar-by-road',
  path: '/delhi-to-srinagar-by-road',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'delhi to srinagar by road', impressions: 971, position: 6.0 },

  eyebrow: 'Road guide · NH-44',
  crumbs: [{ name: 'Travel by car', url: '/travel-by-car' }, { name: 'Delhi to Kashmir by car', url: '/travel-by-car/delhi-to-kashmir' }],
  crumbName: 'Delhi to Srinagar by road',
  titleLead: 'Delhi to Srinagar by road:',
  titleAccent: 'the two-day drive, the Jammu stop, the tunnel',
  title: 'Delhi to Srinagar by Road: The Two-Day Drive, the Jammu Stop, the Tunnel',
  metaTitle: 'Delhi to Srinagar by Road: 810 km, 2 Days, the Tunnel',
  metaDescription: 'Delhi to Srinagar by road: 810 km on NH-44 via Jammu and the Banihal tunnel, driven over two days with a halt at Jammu or Patnitop. The road kilometre by kilometre, winter closures, fares from ₹8,910.',
  keywords: ['delhi to srinagar by road', 'delhi to kashmir by road', 'delhi to srinagar by road distance', 'delhi to srinagar road trip', 'delhi to srinagar cab', 'jammu srinagar highway', 'banihal tunnel', 'delhi to kashmir by car'],
  heroImage: `${IMG}/Srinagar/Srinagar_hero_section.jpg`,
  heroAlt: 'Srinagar and Dal Lake at the end of the Delhi to Srinagar road',

  lead: 'Delhi to Srinagar by road is 810 km on NH-44 and sixteen to eighteen hours of driving, which is why almost nobody does it in one go. The standard plan is Delhi to Jammu on day one, 580 km and about nine hours of four-lane highway through Ambala, Ludhiana, Jalandhar and Pathankot, and Jammu to Srinagar on day two, about 230–260 km of mountain road through Udhampur, Ramban and the 8.45 km Banihal tunnel that takes seven to eight hours. A sedan is ₹8,910 one-way at ₹11/km; a four-day round trip with the car staying with you in the valley is ₹17,820.',
  keyFacts: [
    { label: 'Distance', value: '810 km · NH-44' },
    { label: 'Driving time', value: '16–18 hrs · 2 days' },
    { label: 'Night halt', value: 'Jammu, 580 km' },
    { label: 'Sedan, one-way', value: '₹8,910' },
  ],
  stickyLabel: 'Delhi–Srinagar cab',
  stickyPrice: 'Sedan ₹8,910',
  waText: 'Hi, I want a cab from Delhi to Srinagar by road with a night halt at Jammu. Dates and number of people to follow.',

  intro: [
    'Delhi to Kashmir by road means Delhi to Srinagar: the valley has one motorable door from the south, the Jammu–Srinagar highway, and every road trip from Delhi goes through it. The first two-thirds of the journey is the Grand Trunk Road across Haryana and Punjab, flat and fast; the last third is a mountain highway that climbs out of Jammu, threads the Chenab gorge at Ramban and passes under the Pir Panjal through the Banihal tunnel before the valley opens out at Qazigund.',
    'This guide follows the road in order, kilometre by kilometre, and then answers the questions people ask before booking: why two days rather than one, where to sleep, what the tunnel and the one-way regulation at Ramban actually mean, what happens between December and February, and what the trip costs. Every fare on the page comes from the published rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km and a 12-seater Tempo Traveller ₹23/km, billed on a 300 km per day minimum with tolls and parking extra at actual.',
  ],

  timelineTitle: 'Delhi to Srinagar, kilometre by kilometre',
  timelineEyebrow: 'The road, in order',
  timelineIntro: 'Kilometre marks are from Delhi and rounded to the nearest post; the billing distance is 810 km. Day one runs to Jammu, day two from Jammu into the valley. Times assume a four o’clock start from Delhi and a six o’clock start from Jammu.',
  timeline: [
    { km: 0, name: 'Delhi', time: '4 am start', text: 'Leave before the city wakes. From north and west Delhi, NH-44 begins at Mukarba Chowk a quarter of an hour away; from Gurgaon, Noida and south Delhi allow forty-five minutes to reach it. Everything that follows assumes the wheels are moving by four.', tag: 'Day 1' },
    { km: 50, name: 'Murthal', time: '5 am', text: 'The paratha halt. Fifteen minutes at one of the highway dhabas, and the last easy stop before Ambala.', stop: 'Breakfast' },
    { km: 200, name: 'Ambala', time: '7 am', text: 'The Chandigarh road peels off to the right; you stay on NH-44 into Punjab. Between here and Pathankot the road is six lanes for long stretches and the toll plazas come every fifty kilometres or so.', tag: 'Punjab' },
    { km: 320, name: 'Ludhiana', time: '8.30 am', text: 'Take the bypass, not the city. Fuel here, because the next clean pump with a decent tea shop is on the far side of Jalandhar.', stop: 'Fuel' },
    { km: 380, name: 'Jalandhar', time: '9.30 am', text: 'The last big Punjab town on the route. The Amritsar road branches west here and you bear north for Pathankot. If you are adding the Golden Temple, this is the junction to remember for the way back.' },
    { km: 480, name: 'Pathankot', time: '11 am', text: 'Lunch, and the end of the plains. Beyond Lakhanpur, the Jammu and Kashmir entry post about 25 km on, the halts thin out and the road begins to lift into the Shivalik foothills.', stop: 'Lunch' },
    { km: 580, name: 'Jammu', time: '1 pm', text: 'Day one ends here for nearly everyone. The bypass skirts the city, and a hotel on the Srinagar side of town puts you on the highway first thing in the morning. Katra, 50 km on, is the alternative halt if Vaishno Devi is part of the trip.', tag: 'Night halt', image: `${IMG}/Vaishno_Devi/Vaishno_Devi_hero_section.jpg`, alt: 'The Trikuta hills above Katra, an hour beyond Jammu' },
    { km: 645, name: 'Udhampur', time: 'Day 2 · 7.30 am', text: 'Out of Jammu by six, Udhampur by half past seven. This is the last town with a full choice of fuel, ATMs and food before the gorge, so top up the tank and the snacks here.', tag: 'Day 2', stop: 'Fuel' },
    { km: 670, name: 'Chenani–Nashri tunnel', time: '8 am', text: 'Nine kilometres under the Patnitop ridge, opened in 2017. It replaced the old climb over Patnitop, Kud and Batote and took about thirty kilometres and two hours off the day. Patnitop itself is now a detour: the old road leaves the highway at Chenani.' },
    { km: 700, name: 'Ramban', time: '9.30 am', text: 'The Chenab gorge. This is the slow, unstable stretch where landslides and widening work still close lanes, and where the traffic police move light vehicles in one direction at a time when they have to. The morning window is the one you want to be in.', tag: 'One-way regulation' },
    { km: 730, name: 'Banihal', time: '11.30 am', text: 'The old hill town at the foot of the Pir Panjal and the mouth of the Navyug tunnel: 8.45 km, twin-tube, opened in 2021 and about four hundred metres lower than the Jawahar tunnel it replaced. Lights on, no overtaking, out the other side in ten minutes.', tag: 'The tunnel' },
    { km: 740, name: 'Qazigund', time: '12 noon', text: 'The tunnel ends and the Kashmir valley opens out flat in front of you: poplars, paddy and, in autumn, the saffron fields at Pampore an hour on. From here to Srinagar the road is four-lane and quick.', image: `${IMG}/Kashmir_Valley/Kashmir_Valley_hero_section.jpg`, alt: 'The Kashmir valley opening out beyond the Qazigund end of the tunnel' },
    { km: 810, name: 'Srinagar', time: '2 pm', text: 'Arrive in time for a shikara on Dal Lake before dark. The Boulevard along the lake is where the houseboats moor; the Mughal gardens are twenty minutes further round the shore.', tag: 'Arrive', image: `${IMG}/Srinagar/Dal_Lake.jpg`, alt: 'Dal Lake, Srinagar, at the end of the road from Delhi' },
  ],

  table: {
    title: 'Delhi to Srinagar by road: the drive by segment',
    caption: 'Segment distances, driving times and road conditions between Delhi and Srinagar on NH-44',
    intro: 'The six segments below are from our travel-by-car log for the corridor. The first three are plains driving on a divided highway; the last three are mountain road, and the times reflect that. Read the first three as day one and the last three as day two.',
    columns: [
      { key: 'segment', label: 'Segment' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Driving time' },
      { key: 'road', label: 'Road' },
      { key: 'note', label: 'What to expect' },
    ],
    rows: [
      { segment: 'Delhi to Ludhiana', distance: '320 km', time: '5 hrs', road: 'Four to six lanes', note: 'GT Road through Panipat, Karnal and Ambala; the fastest stretch of the trip' },
      { segment: 'Ludhiana to Jalandhar', distance: '60 km', time: '1 hr', road: 'Four lanes', note: 'Flat Punjab farmland; use the Ludhiana bypass' },
      { segment: 'Jalandhar to Jammu', distance: '200 km', time: '3.5 hrs', road: 'Four lanes', note: 'Pathankot, then the Lakhanpur entry post into Jammu and Kashmir; night halt at Jammu' },
      { segment: 'Jammu to Udhampur', distance: '65 km', time: '1.5 hrs', road: 'Mountain highway', note: 'The climb out of the Tawi valley begins; last full services at Udhampur' },
      { segment: 'Udhampur to Ramban', distance: '80 km', time: '3 hrs', road: 'Tunnel, then gorge', note: 'Chenani–Nashri tunnel, then the slow Chenab gorge section with one-way regulation on bad days' },
      { segment: 'Ramban to Srinagar', distance: '130 km', time: '5 hrs', road: 'Gorge, tunnel, valley', note: 'Banihal and the Navyug tunnel, then flat four-lane road from Qazigund to the city' },
    ],
    footnote: 'The segment log is the older corridor log and adds up to about 855 km, with day two at 275 km; the Chenani–Nashri tunnel took roughly thirty kilometres off the old road over Patnitop, and the distance we bill on is the 810 km published on our Delhi to Srinagar distance page, which is why the prose gives day two as about 230–260 km. Mountain times are for a dry day with the road fully open.',
  },

  sections: [
    {
      eyebrow: 'Why two days',
      heading: 'Why is Delhi to Srinagar a two-day drive when it is only 810 km?',
      paras: [
        'Because the 810 km are not the same kind of kilometres. The first 580, from Delhi to Jammu, are the Grand Trunk Road: divided highway the whole way, toll plazas every fifty kilometres, and an honest average of sixty kilometres an hour including stops. Nine hours takes you from a four o’clock start in Delhi to lunch in Jammu. The last 230 or so, from Jammu to Srinagar, are a different road altogether. The highway climbs out of the Tawi valley, drops into the Chenab gorge at Ramban, where slopes are still being cut back and lanes are still being widened, and then goes under the Pir Panjal through the Banihal tunnel. On a good day that is seven hours; on a day when the Ramban section is under one-way regulation it is nine, and a landslide can hold it longer.',
        'Put those together and a single-day run means leaving Delhi at four in the morning and reaching the gorge at dusk, which is exactly the wrong time to be on it. Convoy windows on the Ramban stretch are set for daylight, the traffic police close bad sections after dark, and the tunnel approaches are no place for a tired driver. So the drive is split at Jammu, the mountain section is done fresh in the morning, and Srinagar is reached by mid-afternoon with light left for the lake. Our drivers do the corridor this way as a matter of course; the driver’s night-halt allowance at Jammu is billed at actual on top of the fare.',
      ],
      link: { label: 'Delhi to Kashmir by car: the full corridor page', href: '/travel-by-car/delhi-to-kashmir' },
      image: { src: `${IMG}/Kashmir_Valley/Dal_Lake.jpg`, alt: 'Dal Lake in the Kashmir valley, the reward at the end of the second day', tag: 'Srinagar · day 2', caption: 'The point of arriving by mid-afternoon: a shikara on Dal Lake before the light goes.' },
    },
    {
      eyebrow: 'The halt',
      heading: 'Where should I stop for the night: Jammu, Katra or Patnitop?',
      paras: [
        'Jammu, for most people. It is 580 km from Delhi, the bypass keeps you out of the city, and there are hotels of every kind on the Srinagar side of town, so the morning start is straight onto the highway. It also leaves the longest possible daylight window for the mountain section, which is the thing that decides how the second day goes. Reaching Jammu by one or two in the afternoon means a rest, an early dinner and a six o’clock departure.',
        'Katra is the halt if Vaishno Devi is part of the plan. It is 50 km beyond Jammu on a side road, so it adds an hour to day one, and the climb to the Bhawan is a full day in itself, which turns the two-day drive into three. The driver waits at Katra while you go up. Patnitop is the hill-station halt, 2,000 m up on the old road that the Chenani–Nashri tunnel bypassed. It is cool, quiet and only six hours from Srinagar, but the detour off the highway adds hairpins to the end of a nine-hour day, and in winter the road up can be icy. Choose it for the weather in May and June, not for speed.',
      ],
      bullets: [
        'Jammu, 580 km: the standard halt; day two is about 230–260 km and seven to eight hours to Srinagar.',
        'Katra, 630 km: the pilgrimage halt; add a full day for the climb to the Bhawan.',
        'Patnitop, about 650 km via the old road: the cool halt; day two shrinks to six hours but day one gains a hill climb.',
        'Udhampur, 645 km: only if you are running late; hotels are few and plain.',
      ],
      link: { label: 'Delhi to Katra one-way cab', href: '/one-way-cab/delhi-to-katra' },
      image: { src: `${IMG}/Vaishno_Devi/Vaishno_Devi_Temple.jpg`, alt: 'The Vaishno Devi Bhawan in the Trikuta hills above Katra', tag: 'Katra · +1 day', side: 'left', caption: 'Katra, an hour beyond Jammu: the halt to choose if Vaishno Devi is part of the trip.' },
    },
    {
      eyebrow: 'Tunnel and gorge',
      heading: 'What is the Banihal tunnel, and what does one-way regulation at Ramban mean?',
      paras: [
        'There are two tunnels on the second day, and they matter for different reasons. The first is the Chenani–Nashri tunnel between Udhampur and Ramban: nine kilometres under the Patnitop ridge, opened in 2017, which replaced the old climb over Patnitop and Batote and took about thirty kilometres and two hours off the drive. The second is the one people mean when they say the Banihal tunnel: the Navyug tunnel between Banihal and Qazigund, 8.45 km long, twin-tube, opened in 2021. It replaced the Jawahar tunnel of 1956, which sat four hundred metres higher and closed whenever the approaches iced. The new tunnel is lower, wider and lit, and it is the reason the valley is now reachable by road on days when it used to be cut off.',
        'Between the two tunnels is the Ramban stretch, the Chenab gorge, and this is where the day is won or lost. The four-laning of this section has been under way for years, the slopes above the road are unstable after rain, and when a lane is lost to a slide or to work the traffic police run the remaining lane one way at a time: light vehicles towards Srinagar in one window, towards Jammu in another. The advisory is published each evening for the next day, and our drivers check it before they leave Jammu. On a regulated day the six o’clock start is not optional; it is what gets you through the gorge in the morning window rather than waiting at Ramban for the afternoon one.',
        'On the far side of the Navyug tunnel the change is immediate. The road comes out at Qazigund onto the flat floor of the valley, and the last seventy kilometres or so to Srinagar are four-lane road past Anantnag and the saffron fields at Pampore. If the morning has gone to plan you are on Dal Lake by two.',
      ],
      link: { label: 'Delhi to Srinagar distance and road notes', href: '/distance/delhi-to-srinagar' },
    },
    {
      eyebrow: 'Winter',
      heading: 'Can I drive Delhi to Srinagar in winter, and what is the alternative?',
      paras: [
        'From December to February the honest answer is: sometimes. The Jammu–Srinagar highway closes after heavy snowfall and after the landslides that follow it, and a closure can last a day or several. The Navyug tunnel itself is rarely the problem, being lower than the old Jawahar tunnel, but the Ramban gorge and the climb to Banihal are, and a road that is open when you leave Jammu can be shut by the time you reach Ramban. The Punjab plain adds its own hazard in the same months: dense fog on the GT Road from Panipat to Jalandhar in the early hours, which is precisely when day one is supposed to be moving. In winter we ask for the start to be pushed to seven, and we ask you to hold a spare day.',
        'If the dates are fixed, fly. Delhi to Srinagar is about an hour and a half in the air, and a cab from Srinagar airport takes you to the lake, to Gulmarg or to Pahalgam the same afternoon; that is what the airport-service page is for, and it is what most winter visitors to Gulmarg do. The summer alternative that people ask about, the Mughal Road from Rajouri and Poonch over Pir ki Gali to Shopian, is a scenic route rather than a practical one: it is well over three hundred kilometres from Jammu, a long day of hairpins, and it is shut in winter altogether because the pass is snowbound. The monsoon months of July and August are the other time to avoid the highway, when landslides in the gorge are a daily event.',
        'The good months for the drive are April to June and September to October. October in particular is the road at its best: the plains are cool by dawn, the gorge is dry, and the valley is turning gold with chinar and saffron.',
      ],
      bullets: [
        'December to February: highway liable to close after snow; fog on the Punjab plain; fly if the dates are fixed.',
        'July and August: landslides on the Ramban stretch; avoid.',
        'April to June and September to October: the drive as it should be.',
      ],
      link: { label: 'Srinagar airport cabs', href: '/airport-service/srinagar' },
      image: { src: `${IMG}/Gulmarg/Skiing_Slopes.jpg`, alt: 'Snow on the slopes at Gulmarg in winter', tag: 'Gulmarg · Dec–Feb', side: 'left', caption: 'Winter in Gulmarg is worth the trip; the road up from Jammu is the uncertain part, which is why winter visitors usually fly.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'What does Delhi to Srinagar by car cost?',
      paras: [
        'The one-way fare is the distance at the vehicle’s rate: 810 km at ₹11/km is ₹8,910 for a sedan, ₹12,150 for an Ertiga or similar SUV at ₹15/km, ₹14,580 for an Innova Crysta at ₹18/km and ₹18,630 for a 12-seater Tempo Traveller at ₹23/km. Fuel is inside those figures; the driver’s night-halt allowance at Jammu, tolls on NH-44, parking and any hill-state charges are extra, all paid at actual. There is no surcharge for the mountain section.',
        'Most people want the car for longer than the drive, and the round trip is priced as the greater of twice the one-way fare or the number of days at the 300 km minimum. For a four-day trip, two days up and two days back with nothing in between, a sedan is ₹17,820, an Ertiga ₹24,300, an Innova Crysta ₹29,160 and a Tempo Traveller ₹37,260. A fifth day in the valley costs nothing extra for a sedan, because five days at 300 km is still less than the 1,620 km you actually drive; from the sixth day the daily minimum takes over, so six days is ₹19,800 and seven is ₹23,100, and eight days at the 300 km minimum is ₹26,400 for the sedan.',
        'On the choice of vehicle: the corridor page recommends an SUV or Innova, and for the second day that is good advice. The extra ground clearance and torque tell in the gorge, and an Innova Crysta with six people aboard works out cheaper per head than two sedans. For a family of four with luggage for a week, the Ertiga is the sensible middle.',
      ],
      link: { label: 'Kashmir trip cost from Delhi, day by day', href: '/kashmir-trip-cost-from-delhi' },
      image: { src: '/images/car/innova_crysta.jpg', alt: 'Innova Crysta, the vehicle recommended for the Jammu to Srinagar mountain section', tag: 'Innova · ₹18/km', caption: 'For the gorge and the tunnel, the Innova Crysta is the car our drivers prefer.' },
    },
    {
      eyebrow: 'Onward',
      heading: 'How do I get on to Gulmarg, Pahalgam and Sonamarg once I reach Srinagar?',
      paras: [
        'Srinagar is the hub, and the three places most people come to Kashmir for are each a short drive out of it in a different direction. Gulmarg is 50 km west, an hour and a half to two hours up through Tangmarg, with the gondola, the meadows in summer and the ski slopes in winter. Pahalgam is 95 km south-east, two to three hours along the Lidder, with Aru, Betaab and Chandanwari beyond it. Sonamarg is a little under a hundred kilometres north-east on the Leh road, with the Thajiwas glacier walk and, for those going on, the Zoji La pass to Ladakh.',
        'If the car has come with you from Delhi, the driver simply carries on: each is a day trip from a Srinagar base, or a night away. If you want the car to end somewhere other than Srinagar, the one-way pages price the longer drop from Delhi directly, and the arithmetic is the same rate card on a longer distance: Delhi to Gulmarg is 880 km and ₹9,680 for a sedan, Delhi to Pahalgam 870 km and ₹9,570, Delhi to Sonamarg 910 km and ₹10,010. The full-week itineraries on the site put all three together with Srinagar in five, seven or eight days.',
      ],
      bullets: [
        'Gulmarg: 50 km, 1.5–2 hrs; gondola, meadows, winter skiing.',
        'Pahalgam: 95 km, 2–3 hrs; Lidder valley, Aru and Betaab.',
        'Sonamarg: under 100 km, 2.5–3 hrs; Thajiwas glacier, the road to Zoji La and Leh.',
      ],
      link: { label: 'Srinagar to Gulmarg: how to reach', href: '/how-to-reach/gulmarg-from-srinagar' },
      image: { src: `${IMG}/Gulmarg/Gondola_Cable_Car.jpg`, alt: 'The Gulmarg gondola above the meadows, 50 km from Srinagar', tag: 'Gulmarg · 50 km', side: 'left', caption: 'Gulmarg, an hour and a half from Srinagar: the first onward drive most people make.' },
    },
  ],

  fare: {
    title: 'Delhi to Srinagar by car',
    note: 'Rate-card fares for the 810 km drive, halting at Jammu; the driver’s night-halt allowance is extra at actual. The round-trip column is a four-day trip: two days up, two days back. Extra days in the valley bill at the 300 km minimum once they exceed the distance.',
    caption: 'Delhi to Srinagar cab fare by vehicle, one-way and four-day round trip',
    distanceKm: 810,
    roundTrip: true,
    days: 4,
    roundLabel: 'Four-day round trip',
    footnote: 'Tolls on NH-44, parking and the driver’s night-halt allowance at Jammu are extra at actual; fuel is included. Six days bills ₹19,800 for a sedan, seven ₹23,100, eight ₹26,400.',
    waText: 'Hi, I want a cab from Delhi to Srinagar with a night halt at Jammu. Please share the fare for my dates and vehicle.',
    bookHref: '/travel-by-car/delhi-to-kashmir',
    bookLabel: 'Delhi to Kashmir by car',
    cta: 'Get the exact fare',
  },

  galleryTitle: 'What the second day earns you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Srinagar/Dal_Lake_Shikara.jpg`, title: 'Shikara on Dal Lake', text: 'The first evening, if you left Jammu at six.', tag: 'Srinagar · km 810' },
    { image: `${IMG}/Srinagar/Nishat_Bagh.jpg`, title: 'Nishat Bagh', text: 'The Mughal gardens, twenty minutes round the lake from the Boulevard.', tag: 'Srinagar' },
    { image: `${IMG}/Gulmarg/Gulmarg_hero_section.jpg`, title: 'Gulmarg', text: '50 km west of Srinagar; meadows in summer, snow from December.', tag: 'Gulmarg · 50 km' },
    { image: `${IMG}/Pahalgam/Lidder_River.jpg`, title: 'The Lidder at Pahalgam', text: '95 km south-east, along the river all the way.', tag: 'Pahalgam · 95 km' },
    { image: `${IMG}/Sonamarg/Thajiwas_Glacier.jpg`, title: 'Thajiwas glacier, Sonamarg', text: 'The walk from the meadow, and the start of the Leh road.', tag: 'Sonamarg' },
  ],

  tips: [
    { title: 'Check the highway advisory the night before day two', text: 'The traffic police publish the next day’s position for the Jammu–Srinagar highway each evening. If the Ramban section is one-way, the morning window towards Srinagar is the one to be in, and the six o’clock start from Jammu is what gets you there.' },
    { title: 'Fill up and stock up at Udhampur', text: 'It is the last town with a full choice of pumps, ATMs and food before the gorge. Services between Udhampur and Qazigund are sparse, and a slide can hold you for hours; water, snacks and a full tank are the difference between a delay and a bad day.' },
    { title: 'Give the mountain day to the driver', text: 'Day two is not the day for detours or a late breakfast. Sleep on the Srinagar side of Jammu, leave at six, and let the driver set the pace through Ramban. The reward is Dal Lake by two rather than by dark.' },
  ],

  faqs: [
    { question: 'What is the distance from Delhi to Srinagar by road, and how long does it take?', answer: 'About 810 km on NH-44 via Ambala, Ludhiana, Jalandhar, Pathankot, Jammu, Udhampur, Ramban and Banihal, and sixteen to eighteen hours of driving. It is driven over two days: Delhi to Jammu, 580 km and about nine hours, then Jammu to Srinagar, about 230–260 km and seven to eight hours through the mountains.' },
    { question: 'Can Delhi to Srinagar be driven in one day?', answer: 'It is not sensible. A four o’clock start puts you in the Ramban gorge at dusk, which is when the traffic police close bad sections and when the one-way windows have ended. Almost everyone halts at Jammu and does the 230-odd km mountain section fresh the next morning, reaching Srinagar by early afternoon.' },
    { question: 'Where is the best place to stop overnight between Delhi and Srinagar?', answer: 'Jammu, 580 km from Delhi. It has hotels of every kind, the bypass keeps you out of the city, and it leaves the longest daylight window for the mountain road. Katra, 50 km further, is the halt if Vaishno Devi is part of the trip; Patnitop, on the old road above the Chenani–Nashri tunnel, is the cool hill halt in May and June.' },
    { question: 'What is the cab fare from Delhi to Srinagar?', answer: 'At the published rate card a sedan is ₹8,910 one-way (810 km at ₹11/km), an Ertiga or SUV ₹12,150, an Innova Crysta ₹14,580 and a 12-seater Tempo Traveller ₹18,630, with the driver’s night-halt allowance at Jammu extra at actual. A four-day round trip is ₹17,820 for a sedan, ₹24,300 for an Ertiga, ₹29,160 for an Innova and ₹37,260 for a Tempo Traveller. Tolls and parking are extra.' },
    { question: 'Is the Delhi to Srinagar road open in winter?', answer: 'Not reliably. From December to February the Jammu–Srinagar highway closes after heavy snow and the landslides that follow, sometimes for days, and the Punjab plain has dense morning fog. If your dates are fixed, fly to Srinagar and take a cab from the airport; the road is at its best from April to June and September to October.' },
    { question: 'What is the Banihal tunnel on the Jammu–Srinagar highway?', answer: 'The Navyug tunnel between Banihal and Qazigund: 8.45 km, twin-tube, opened in 2021. It replaced the 1956 Jawahar tunnel, which sat about four hundred metres higher and closed whenever its approaches iced. There is a second tunnel earlier on day two, the nine-kilometre Chenani–Nashri tunnel of 2017, which bypasses the old climb over Patnitop.' },
    { question: 'Do I need a permit to drive into Kashmir?', answer: 'No permit is needed for Indian nationals to visit Srinagar, Gulmarg, Pahalgam or Sonamarg by road. Carry a government photo ID for every passenger for the Lakhanpur entry post and the check posts on the highway, and the vehicle’s papers are with the driver.' },
    { question: 'Is Delhi to Kashmir by road the same route as Delhi to Srinagar?', answer: 'Yes. The valley has one motorable road from the south, the Jammu–Srinagar highway, and Srinagar is the hub every Kashmir trip goes through. Gulmarg is 50 km beyond Srinagar, Pahalgam 95 km and Sonamarg just under 100 km, so Delhi to Gulmarg is 880 km, Delhi to Pahalgam 870 km and Delhi to Sonamarg 910 km by road.' },
  ],

  related: [
    { label: 'Delhi to Kashmir by car', sub: 'The corridor page, segment by segment', href: '/travel-by-car/delhi-to-kashmir', img: `${IMG}/Kashmir_Valley/Kashmir_Valley_hero_section.jpg` },
    { label: 'Delhi to Srinagar distance', sub: '810 km · road notes and fares', href: '/distance/delhi-to-srinagar', img: `${IMG}/Srinagar/Srinagar_hero_section.jpg` },
    { label: 'Kashmir road trip from Delhi', sub: 'The eight-day itinerary', href: '/kashmir-road-trip-from-delhi', img: `${IMG}/Srinagar/Dal_Lake_Shikara.jpg` },
    { label: 'Delhi to Gulmarg one-way cab', sub: '880 km · ₹9,680 sedan', href: '/one-way-cab/delhi-to-gulmarg', img: `${IMG}/Gulmarg/Alpine_Meadows.jpg` },
    { label: 'Delhi to Pahalgam one-way cab', sub: '870 km · ₹9,570 sedan', href: '/one-way-cab/delhi-to-pahalgam', img: `${IMG}/Pahalgam/Betaab_Valley.jpg` },
    { label: 'Srinagar airport cabs', sub: 'The winter alternative', href: '/airport-service/srinagar', img: `${IMG}/Srinagar/Hazratbal.jpg` },
    { label: 'Kashmir trip cost from Delhi', sub: 'Car, stay and days, added up', href: '/kashmir-trip-cost-from-delhi', img: '/images/car/innova_crysta.jpg' },
    { label: 'Delhi to Katra one-way cab', sub: '630 km · the Vaishno Devi halt', href: '/one-way-cab/delhi-to-katra', img: `${IMG}/Vaishno_Devi/Vaishno_Devi_Temple.jpg` },
  ],
  guides: ['delhi-to-rishikesh-shortest-route', 'delhi-to-varanasi-best-route-by-car', 'how-to-reach-kaza-from-delhi', 'navratri-vaishno-devi-by-road', 'best-time-to-visit-amritsar'],

  schema: {
    places: ['delhi', 'srinagar'],
    trip: {
      name: 'Delhi to Srinagar by road in two days',
      description: 'The standard two-day drive from Delhi to Srinagar on NH-44: Delhi to Jammu on day one, Jammu to Srinagar through Udhampur, Ramban and the Banihal tunnel on day two.',
      touristType: 'Road travellers',
      lowPrice: 8910,
      highPrice: 37260,
      itinerary: [
        { name: 'Day 1: Delhi to Jammu', text: '580 km and about nine hours on NH-44 through Ambala, Ludhiana, Jalandhar and Pathankot; enter Jammu and Kashmir at Lakhanpur; night halt on the Srinagar side of Jammu.' },
        { name: 'Day 2: Jammu to Srinagar', text: 'About 230–260 km and seven to eight hours: Udhampur, the Chenani–Nashri tunnel, the Ramban gorge under one-way regulation on bad days, Banihal and the 8.45 km Navyug tunnel, then the valley floor from Qazigund to Dal Lake.' },
      ],
    },
    howTo: {
      name: 'How to plan the Delhi to Srinagar drive',
      description: 'Split the 810 km at Jammu, start the mountain day at six, and check the highway advisory the night before.',
      totalTime: 'P2D',
      estimatedCost: { currency: 'INR', value: 8910 },
      steps: [
        { name: 'Leave Delhi by four', text: 'Reach Jammu, 580 km, by early afternoon with the plains behind you.' },
        { name: 'Sleep on the Srinagar side of Jammu', text: 'A hotel past the bypass puts you straight onto the highway in the morning.' },
        { name: 'Check the Jammu–Srinagar advisory', text: 'The traffic police publish the next day’s regulation each evening; the morning window through Ramban is the one to be in.' },
        { name: 'Leave Jammu at six', text: 'Fuel at Udhampur, through the Chenani–Nashri tunnel, the gorge and the Navyug tunnel, and into the valley at Qazigund by noon.' },
        { name: 'Arrive Srinagar by two', text: 'Time for a shikara on Dal Lake before dark; Gulmarg, Pahalgam and Sonamarg are each a short drive from here.' },
      ],
    },
  },
};
