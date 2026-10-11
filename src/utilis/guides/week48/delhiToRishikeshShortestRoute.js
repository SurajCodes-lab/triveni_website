// Week 48 guide 20 — "delhi to rishikesh shortest route by car" (202
// impressions a quarter, position 6.9). The corridor already has a cab page,
// a distance page, a toll page and a travel-by-car page; this is the route
// answer none of them gives in one place: which road is shortest, which two
// look shorter on a map and cost hours, and where the Dehradun expressway
// fits. Every distance, time and toll is the one those pages publish.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'delhi-to-rishikesh-shortest-route',
  path: '/delhi-to-rishikesh-shortest-route',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'delhi to rishikesh shortest route by car', impressions: 202, position: 6.9 },

  eyebrow: 'Road guide · Delhi to Rishikesh',
  crumbs: [{ name: 'Rishikesh', url: '/rishikesh' }, { name: 'Delhi to Rishikesh cab', url: '/delhi-to-rishikesh' }],
  crumbName: 'Delhi to Rishikesh shortest route',
  titleLead: 'Delhi to Rishikesh:',
  titleAccent: 'the shortest route by car, and the two to avoid',
  title: 'Delhi to Rishikesh: The Shortest Route by Car, and the Two to Avoid',
  metaTitle: 'Delhi to Rishikesh Shortest Route by Car: NH-334 (250 km)',
  metaDescription: 'The shortest route from Delhi to Rishikesh by car is 250 km on NH-334 via the Meerut expressway, Roorkee and Haridwar, 5 to 6 hours. The two routes to avoid, tolls, halts and sedan fares from ₹3,300.',
  keywords: ['delhi to rishikesh shortest route by car', 'delhi to rishikesh route', 'delhi to rishikesh by road', 'delhi to rishikesh distance by car', 'delhi to rishikesh via haridwar', 'delhi rishikesh expressway route', 'delhi to rishikesh toll', 'delhi to rishikesh cab fare'],
  heroImage: `${IMG}/Rishikesh/Laxman_Jhula.jpg`,
  heroAlt: 'Laxman Jhula footbridge over the Ganga at Rishikesh, the end of the drive from Delhi',

  lead: 'The shortest route from Delhi to Rishikesh by car is NH-334 via the Delhi–Meerut Expressway, the Meerut and Muzaffarnagar bypasses, Roorkee and Haridwar: 250 km and five to six hours, with three FASTag toll plazas totalling ₹280 for a car. Two roads that look like shortcuts on a map are not: the old NH-58 alignment through Modinagar, Meerut city and Muzaffarnagar town covers the same distance hours slower, and the Bijnor–Najibabad–Kotdwar back road is longer and two-lane all the way. A sedan on the shortest route is ₹3,300 one-way at ₹11/km on the 300 km minimum.',
  keyFacts: [
    { label: 'Shortest route', value: '250 km · NH-334' },
    { label: 'Drive time', value: '5–6 hrs' },
    { label: 'Tolls, car one-way', value: '₹280' },
    { label: 'Sedan, one-way', value: '₹3,300' },
  ],
  stickyLabel: 'Delhi–Rishikesh cab',
  stickyPrice: 'Sedan ₹3,300',
  waText: 'Hi, I want a cab from Delhi to Rishikesh by the shortest route. Date and number of passengers to follow.',

  intro: [
    'There is only one sensible road from Delhi to Rishikesh, and the confusion comes from the fact that the map shows three. This guide walks the shortest one kilometre by kilometre, explains why the two alternatives that look plausible on a screen cost hours in practice, and gives an honest account of the Delhi–Dehradun Expressway, which is a real option on some days and a detour on others.',
    'Every number here is the one the rest of the site uses. The distances and drive times are from our distance and travel-by-car pages for the corridor, the tolls are from the toll page, and the fares are from the published rate card: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum with tolls and parking at actual.',
  ],

  timelineTitle: 'The shortest route, kilometre by kilometre',
  timelineEyebrow: 'NH-334 via Haridwar',
  timelineIntro: 'Kilometre marks are from central Delhi and the clock assumes a five o’clock start with one breakfast halt, which is how the drive comes in at about five hours. The three plazas are where the toll page puts them.',
  timeline: [
    { km: 0, name: 'Delhi', time: '5 am', text: 'Join the Delhi–Meerut Expressway at Sarai Kale Khan, or at the Ghazipur and Dasna entries from east Delhi, Noida and Ghaziabad. Leaving at five puts you on the expressway before the city wakes; leaving at eight adds an hour before you have reached Meerut.', tag: 'Start', image: `${IMG}/Delhi/India_Gate.jpg`, alt: 'India Gate, Delhi' },
    { km: 35, name: 'Expressway toll plaza', time: '5.30 am', text: 'The first of three plazas, ₹120 for a car. The expressway has no cash lanes, so an inactive FASTag stops you here; our cars carry a live tag and go straight through.', tag: 'Toll ₹120' },
    { km: 70, name: 'Meerut', time: '6 am', text: 'The expressway ends on the Meerut bypass and hands you to NH-334 without ever entering the city. This is the turn that separates the shortest route from the old road: the town alignment through Begum Pul is off to the left, the bypass carries straight on.', tag: 'Bypass, not the city' },
    { km: 110, name: 'Khatauli', time: '6.45 am', text: 'The breakfast halt of the whole Uttarakhand-bound trade, the Cheetal Grand stop, sits just short of Muzaffarnagar. Twenty minutes; the parathas are worth it and the washrooms are clean.', stop: 'Breakfast' },
    { km: 130, name: 'Muzaffarnagar', time: '7.30 am', text: 'The second plaza, ₹95, and the second bypass. The sugar belt begins here; the road is four-lane and flat, and the only thing that slows it is a tractor with a cane trailer pulling out ahead of you.', tag: 'Toll ₹95' },
    { km: 180, name: 'Roorkee', time: '8.30 am', text: 'The third plaza, ₹65, and the last. The road crosses the Ganga canal beside the IIT campus; the Shivalik line shows on the horizon from here on a clear morning, and the highway stays four-lane into Haridwar.', tag: 'Toll ₹65' },
    { km: 225, name: 'Haridwar', time: '9.15 am', text: 'Keep to the Haridwar bypass; the road into Har Ki Pauri is pilgrim traffic and it is not on the way. If you want the ghats, do them on the return leg, or make it a same-day Haridwar and Rishikesh trip and give them the evening.', tag: 'Bypass', image: `${IMG}/Haridwar/Har_Ki_Pauri.jpg`, alt: 'Har Ki Pauri ghat at Haridwar' },
    { km: 250, name: 'Rishikesh', time: '10 am', text: 'The last 25 km run beside the Ganga through Raiwala and Nepali Farm into the town. Have the driver go to Tapovan, park, and walk the rest: the jhulas are footbridges and the old town lanes were laid out for pilgrims on foot, not for an Innova.', tag: 'Arrive', image: `${IMG}/Rishikesh/Ram_Jhula.jpg`, alt: 'Ram Jhula over the Ganga at Rishikesh' },
  ],

  table: {
    title: 'Delhi to Rishikesh: the three routes compared',
    caption: 'Comparison of the shortest route from Delhi to Rishikesh with the two routes to avoid and the Delhi–Dehradun Expressway alternative: distance, drive time, road type, car tolls and when to use each',
    intro: 'Distances are one-way. Tolls are for a car or sedan at the plazas the toll page lists; an SUV pays more at each. Drive times assume a dawn start on a normal day.',
    columns: [
      { key: 'route', label: 'Route' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road type' },
      { key: 'tolls', label: 'Tolls, car', align: 'right' },
      { key: 'when', label: 'When to use', strong: true },
    ],
    rows: [
      { route: 'NH-334 via the Delhi–Meerut Expressway, the bypasses and Haridwar', distance: '250 km', time: '5–6 hrs', road: 'Expressway to Meerut, four-lane NH-334 to Haridwar, two-lane river road for the last 25 km', tolls: '₹280 (3 plazas)', when: 'Every day. This is the shortest route.' },
      { route: 'Old NH-58 alignment through Modinagar, Meerut city and Muzaffarnagar town', distance: 'About 250 km', time: 'An hour or two more (est.)', road: 'Town roads, level crossings and market stretches between the same highway sections', tolls: 'Saves the ₹120 expressway plaza at most', when: 'Not at all, unless the expressway is closed.' },
      { route: 'Bijnor–Najibabad–Kotdwar back road', distance: '230 km to Kotdwar, then the forest road on to Haridwar and Rishikesh', time: 'Most of the Lansdowne page’s 6–7 hrs before Rishikesh is reached', road: 'Two-lane state highway across the sugar belt and the Terai', tolls: 'Immaterial next to the extra hours', when: 'Never for Rishikesh. It is the Lansdowne road.' },
      { route: 'Delhi–Dehradun Expressway, then Dehradun down to Rishikesh', distance: 'About 300 km', time: '6–7 hrs', road: 'Expressway and four-lane highway via Meerut, Muzaffarnagar and Roorkee to Dehradun, then the Dehradun–Rishikesh road', tolls: '₹215 (2 plazas) to Dehradun; Uttarakhand sections at actual', when: 'When the driver judges NH-334 slow that morning and the expressway is open through; it beats NH-334 only then.' },
      { route: 'NH-334 with a halt at Har Ki Pauri', distance: '250 km', time: '5–6 hrs plus the time on the ghats', road: 'As the shortest route, leaving the bypass for the Haridwar ghats', tolls: '₹280 (3 plazas)', when: 'When you want both towns in one day; see the same-day Haridwar and Rishikesh page.' },
    ],
    footnote: 'Tolls from the Delhi to Rishikesh toll page: ₹120 at the Delhi–Meerut Expressway plaza, ₹95 at Muzaffarnagar and ₹65 at Roorkee, all FASTag; ₹560 for a round trip. Uttarakhand does not charge a separate state entry tax for cars.',
  },

  sections: [
    {
      eyebrow: 'The shortest road',
      heading: 'Why is NH-334 via Haridwar the shortest route from Delhi to Rishikesh?',
      paras: [
        'Because Rishikesh sits where the Ganga leaves the hills, and Haridwar sits 25 km below it on the same river, any road from Delhi has to reach the Ganga at Haridwar first. NH-334 does that in a straight line north-east: the Delhi–Meerut Expressway to Meerut, the bypasses round Meerut, Muzaffarnagar and Roorkee, and the four-lane highway into Haridwar. From the Haridwar bypass the road turns up the river through Raiwala and Nepali Farm and is in Rishikesh 25 km later. Our distance page puts the whole run at 250 km and five to six hours, and the travel-by-car page breaks it into five legs: Delhi to Meerut 70 km in an hour on the expressway, Meerut to Muzaffarnagar 60 km in an hour, Muzaffarnagar to Roorkee 50 km in an hour, Roorkee to Haridwar in forty minutes and Haridwar to Rishikesh in forty more.',
        'What makes it short is not the highway number, which the two roads to avoid share for part of their length, but the expressway and the bypasses. The expressway removes Ghaziabad and Modinagar from the drive entirely; the bypasses remove three town centres. Take all four and the 250 km is honest. Miss any one of them and the same 250 km grows by the time it takes to cross a western UP market town at nine in the morning.',
        'The road is good the whole way. The expressway is the best surface in the region; NH-334 beyond Meerut is four-lane and flat; and the river road after Haridwar is two-lane but well kept, with the Rajaji forest on one side and the rafting camps on the other. There is no hill driving on this route at all, which is why a sedan is the right car for it and why the drive suits older passengers and small children.',
      ],
      link: { label: 'Delhi to Rishikesh distance and route page', href: '/distance/delhi-to-rishikesh' },
      image: { src: `${IMG}/Rishikesh/Rishikesh_hero_section.jpg`, alt: 'The Ganga at Rishikesh where the river leaves the hills', tag: 'Rishikesh · km 250', caption: 'Rishikesh is where the Ganga leaves the hills; every road from Delhi reaches the river at Haridwar first.' },
    },
    {
      eyebrow: 'The two to avoid',
      heading: 'Which two routes should I avoid between Delhi and Rishikesh, and why do they cost hours?',
      paras: [
        'The first is the old road, and it is a trap precisely because it is the same highway. Before the expressway opened, NH-58, since renumbered NH-334, ran from Ghaziabad through Mohan Nagar, Modinagar, Meerut city, Khatauli and the middle of Muzaffarnagar. It still does. A navigation app that has lost its signal, or a driver who learnt the route twenty years ago, will take it out of habit, and on the map the distance is the same 250 km. On the ground it is a different journey: three towns to cross, the Modinagar market, the Begum Pul crossing in Meerut, and the Muzaffarnagar bypass junction met from the wrong side. Our drivers reckon on an hour or two more, and on a market day it is worse.',
        'The second looks clever and is not. From Meerut a road runs east through Bijnor and Najibabad to Kotdwar, and from Kotdwar a forest road comes round to Haridwar and Rishikesh. It is the Lansdowne road, and for Lansdowne it is right. For Rishikesh it is a detour: our Lansdowne page puts the whole run at 270 km and six to seven hours, with Kotdwar about 40 km short of Lansdowne, two-lane through the sugar belt the whole way, and Rishikesh is still the far side of the Rajaji forest from Kotdwar. You spend longer on worse road to arrive from the wrong direction.',
        'Neither mistake is easy to make with a driver who runs the corridor, but both are easy to make on a phone, so it is worth knowing the tell. The shortest route leaves the expressway only at the Meerut bypass and then never turns east. If the suggested route exits before Meerut, or bends towards Bijnor after it, it is one of the two.',
      ],
      bullets: [
        'Old NH-58 alignment: the same 250 km, three town centres, and in our drivers’ experience an hour or two slower on a normal day. Tell the driver "expressway and bypasses" and it cannot happen.',
        'Bijnor–Najibabad–Kotdwar: longer, two-lane, and it delivers you to the Lansdowne side of the hills. Use it only if Lansdowne is the destination.',
        'The check on any navigation app is the Meerut exit: stay on the expressway to the bypass, then keep north on NH-334 through the Muzaffarnagar and Roorkee bypasses.',
      ],
      link: { label: 'Delhi to Rishikesh by car, leg by leg', href: '/travel-by-car/delhi-to-rishikesh' },
    },
    {
      eyebrow: 'The expressway question',
      heading: 'Is the Delhi–Dehradun Expressway a faster way to reach Rishikesh?',
      paras: [
        'Sometimes, and it is worth being precise about when. The Delhi–Dehradun Expressway runs to Dehradun, not to Haridwar, so to reach Rishikesh by it you drive to Dehradun and come back down the Dehradun–Rishikesh road. Our Dehradun pages put that at 255 km to Dehradun in five to six hours and 45 km down to Rishikesh in an hour or so: about 300 km and six to seven hours against 250 km on NH-334, longer in kilometres, every time. It is faster only on the days when the whole of its length is open and running at expressway speed, because then the extra distance is covered at a pace NH-334 cannot match beyond Meerut.',
        'Sections of it have opened in stages, and while any section is closed the route drops onto the ordinary highway and the advantage disappears. Our drivers run both corridors and choose on the morning: if NH-334 is reported slow at Muzaffarnagar or Roorkee and the expressway is open through, they take the expressway; on a normal day they take NH-334 because it is shorter and because Haridwar is on it. If you have a preference, say so at booking. The honest answer to the question in the heading is that the shortest route is NH-334 and the expressway is the fallback, not the other way round.',
        'The toll picture follows the road. NH-334 is three plazas and ₹280 for a car one-way. The Dehradun run is ₹215 for a car on our Delhi to Dehradun toll page, at the Delhi–Meerut Expressway and Muzaffarnagar plazas; any Uttarakhand sections beyond that are paid at actual, the driver settles them on FASTag and they appear on the bill.',
      ],
      link: { label: 'Delhi to Dehradun cab and route', href: '/one-way-cab/delhi-to-dehradun' },
      image: { src: `${IMG}/Dehradun/Dehradun_hero_section.jpg`, alt: 'Dehradun and the Doon valley', tag: 'Dehradun · the long way round', side: 'left', caption: 'The expressway reaches Dehradun, not Haridwar; Rishikesh is a further drive back down the valley.' },
    },
    {
      eyebrow: 'Timing and parking',
      heading: 'What time should I leave Delhi for Rishikesh, and where does the car stop?',
      paras: [
        'Five in the morning. The travel-by-car page says it and every driver on the corridor says it: leave at five and the expressway is empty, the breakfast halt at Khatauli is quiet, and you are beside the Ganga by ten with the whole day ahead. Leave at eight and the first hour goes to reaching the expressway, the Meerut end is thick with local traffic, and the drivers reckon the same road takes an hour or more longer. On a Friday or the eve of a long weekend the difference is larger still.',
        'At the other end, the car stops at Tapovan. Rishikesh is really two banks joined by two footbridges: the town, Triveni Ghat, Muni Ki Reti and Tapovan on the road side of the river, and Swarg Ashram, the Beatles Ashram and the temple quarter across Ram Jhula and Laxman Jhula on the far side. The lanes on both banks are narrow, one-way in places and full of pilgrims, cows and scooters; there is nowhere to put a car and no reason to try. Tapovan, at the Laxman Jhula end, has the parking, the cafés and most of the hotels, and everything else is a walk across a bridge or a short ride in a shared auto. If your hotel is on the Haridwar road or up at Shivpuri, the driver drops you there instead.',
        'For the evening, Triveni Ghat’s Ganga aarti is smaller than Har Ki Pauri’s and an easy walk from the town end; if you want the Haridwar one, it belongs on the drive home rather than the drive up, when the bypass has already carried you past it.',
      ],
      link: { label: 'Rishikesh travel guide', href: '/rishikesh-travel-guide' },
      image: { src: `${IMG}/Rishikesh/Triveni_Ghat.jpg`, alt: 'Triveni Ghat on the Ganga at Rishikesh', tag: 'Triveni Ghat · evening aarti', caption: 'Triveni Ghat, at the town end of Rishikesh, for the evening aarti after the drive.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Delhi to Rishikesh cost on the shortest route?',
      paras: [
        'Rishikesh is 250 km, and outstation cabs bill a 300 km per day minimum, so the one-way fare is the minimum: ₹3,300 for a sedan at ₹11/km, ₹4,500 for an Ertiga or similar SUV at ₹15, ₹5,400 for an Innova Crysta at ₹18 and ₹6,900 for a 12-seater Tempo Traveller at ₹23. Fuel and the driver are inside those figures; the ₹280 of tolls each way for a car and the parking at Tapovan are paid at actual. There is no Uttarakhand entry tax for cars on this corridor.',
        'A two-day round trip with the same car and driver is the greater of twice the one-way fare or two days at the 300 km minimum, and on this route they come to the same thing: ₹6,600 for a sedan, ₹9,000 for an SUV, ₹10,800 for an Innova Crysta and ₹13,800 for a Tempo Traveller. A third day, for a night in Haridwar or a morning at Shivpuri for rafting, adds 300 km at the vehicle’s rate. Rafting runs from September to May and is suspended for the monsoon, and it is the reason most people give the trip two nights rather than one.',
        'One-way is the right booking if you are driving up and returning by train from Haridwar, or carrying on into the hills with another car; the round trip is right for everything else. It is also the cheaper way to see Haridwar, because the same driver takes you to Har Ki Pauri on the way home for no extra distance to speak of.',
      ],
      link: { label: 'Delhi to Rishikesh one-way cab', href: '/delhi-to-rishikesh' },
    },
  ],

  fare: {
    title: 'Delhi to Rishikesh on the shortest route',
    note: 'Rate-card fares for the 250 km drive, which bills the 300 km minimum. The two-day figure is the usual weekend: up on Saturday morning, back on Sunday evening with Haridwar on the way home.',
    caption: 'Delhi to Rishikesh cab fare by vehicle, one-way and two-day round trip',
    distanceKm: 250,
    roundTrip: true,
    days: 2,
    roundLabel: 'Two-day round trip',
    footnote: 'Tolls ₹280 each way for a car, Tapovan parking and any night halt for the driver at actual. No festival or weekend surcharge. A third day adds 300 km at the vehicle’s rate.',
    waText: 'Hi, I want a Delhi to Rishikesh cab on the shortest route. Please share the fare for my dates and number of passengers.',
    bookHref: '/round-trip/delhi-to-rishikesh',
    bookLabel: 'Delhi to Rishikesh round trip',
    cta: 'Book the Rishikesh cab',
  },

  galleryTitle: 'What the 250 km buys you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, title: 'Laxman Jhula', text: 'The footbridge at the Tapovan end; the car stops on this side.', tag: 'km 250' },
    { image: `${IMG}/Rishikesh/River_Rafting.jpg`, title: 'Rafting from Shivpuri', text: 'Sixteen kilometres of rapids down to the town, September to May.', tag: 'Sep–May' },
    { image: `${IMG}/Rishikesh/Triveni_Ghat.jpg`, title: 'Triveni Ghat aarti', text: 'Smaller than Haridwar’s, and a walk from the town.', tag: 'Evening' },
    { image: `${IMG}/Rishikesh/Beatles_Ashram.jpg`, title: 'The Beatles Ashram', text: 'Across Ram Jhula on the far bank, inside the forest boundary.', tag: 'Far bank' },
    { image: `${IMG}/Haridwar/Ganga_Aarti.jpg`, title: 'Ganga aarti, Har Ki Pauri', text: 'For the drive home, not the drive up.', tag: 'Haridwar · km 225' },
  ],

  tips: [
    { title: 'Say "expressway and bypasses"', text: 'Four words to the driver, or four checks on the app: on the expressway out of Delhi, on the bypass at Meerut, Muzaffarnagar and Roorkee. That is the whole difference between five hours and a good deal more.' },
    { title: 'FASTag, no cash', text: 'The Delhi–Meerut Expressway has no cash lanes. Our cars carry a live tag; if you are following in your own car, top it up the night before and expect ₹280 across the three plazas.' },
    { title: 'Book the raft before the cab', text: 'Shivpuri slots go first on weekends between September and May. Fix the rafting time, then tell us the date; the car is the easy part.' },
  ],

  faqs: [
    { question: 'What is the shortest route from Delhi to Rishikesh by car?', answer: 'NH-334 via the Delhi–Meerut Expressway, the Meerut, Muzaffarnagar and Roorkee bypasses and Haridwar: 250 km and five to six hours. The expressway carries you to Meerut in an hour, NH-334 is four-lane to Haridwar, and the last 25 km run beside the Ganga into Rishikesh.' },
    { question: 'How long does it take to drive from Delhi to Rishikesh?', answer: 'Five to six hours for the 250 km on the shortest route, and about five with a dawn start and one breakfast halt. Leaving at eight rather than five adds an hour or more at the Delhi end, and a Friday evening or long-weekend departure adds more.' },
    { question: 'Which route should I avoid between Delhi and Rishikesh?', answer: 'Two. The old NH-58 alignment through Modinagar, Meerut city and Muzaffarnagar town is the same 250 km but, in our drivers’ experience, an hour or two slower, because it crosses three town centres the expressway and bypasses avoid. The Bijnor–Najibabad–Kotdwar back road is longer, two-lane throughout, and reaches Rishikesh from the Lansdowne side; it is the right road for Lansdowne and the wrong one for Rishikesh.' },
    { question: 'Is the Delhi–Dehradun Expressway faster to Rishikesh?', answer: 'Only on days when its full length is open. It reaches Dehradun rather than Haridwar, so Rishikesh by that road is about 300 km (255 km to Dehradun and 45 km back down) against 250 on NH-334. When the whole expressway is open the higher speed can beat NH-334 despite the extra distance; when any section is closed it is a detour. Our drivers choose on the morning by the day’s traffic.' },
    { question: 'How much is the toll from Delhi to Rishikesh?', answer: 'About ₹280 one-way for a car across three plazas: ₹120 at the Delhi–Meerut Expressway plaza, ₹95 at Muzaffarnagar and ₹65 at Roorkee, all FASTag, with the expressway plaza having no cash lanes. A round trip is ₹560. Uttarakhand does not charge a separate state entry tax for cars.' },
    { question: 'What is the cab fare from Delhi to Rishikesh?', answer: 'Rishikesh is 250 km and outstation cabs bill a 300 km per day minimum, so one-way is ₹3,300 for a sedan at ₹11/km, ₹4,500 for an Ertiga or SUV at ₹15, ₹5,400 for an Innova Crysta at ₹18 and ₹6,900 for a 12-seater Tempo Traveller at ₹23. A two-day round trip is ₹6,600 for a sedan, ₹9,000 SUV, ₹10,800 Innova, ₹13,800 Tempo Traveller. Tolls and parking are extra at actual.' },
    { question: 'What time should I leave Delhi for Rishikesh?', answer: 'Five in the morning. That puts you on the Delhi–Meerut Expressway before the city traffic, at the Khatauli breakfast halt by a quarter to seven and beside the Ganga at Rishikesh by about ten. An afternoon departure works too if you are content to arrive after dark, but the morning start is the one that gives you the whole day.' },
    { question: 'Where does the car park in Rishikesh, and can I stop at Haridwar on the way?', answer: 'The car parks at Tapovan, at the Laxman Jhula end; the jhulas are footbridges and the old town lanes are too narrow for cars. Haridwar is on the route, but on the drive up the bypass carries you past it; the sensible pattern is to see Har Ki Pauri and the evening aarti on the drive home, or to book the same-day Haridwar and Rishikesh trip if you want both in one day.' },
  ],

  related: [
    { label: 'Delhi to Rishikesh cab', sub: '250 km · from ₹3,300', href: '/delhi-to-rishikesh', img: `${IMG}/Rishikesh/Rishikesh_hero_section.jpg` },
    { label: 'Delhi to Rishikesh toll cost', sub: 'Three plazas, ₹280 one-way', href: '/toll-cost/delhi-to-rishikesh', img: `${IMG}/Delhi/India_Gate.jpg` },
    { label: 'Same-day Haridwar and Rishikesh', sub: 'Both towns, one long day', href: '/same-day-haridwar-rishikesh-from-delhi', img: `${IMG}/Haridwar/Har_Ki_Pauri.jpg` },
    { label: 'Delhi to Haridwar cab', sub: 'The same road, 25 km short', href: '/one-way-cab/delhi-to-haridwar', img: `${IMG}/Haridwar/Ganga_Aarti.jpg` },
    { label: 'Delhi Airport to Rishikesh taxi', sub: 'Straight from T3', href: '/delhi-airport-to-rishikesh-taxi', img: '/images/airport_section.jpg' },
    { label: 'Rishikesh adventure and spiritual tour', sub: 'Rafting, ghats and ashrams', href: '/sightseeing/rishikesh-adventure-spiritual-tour', img: `${IMG}/Rishikesh/River_Rafting.jpg` },
    { label: 'Rishikesh trip cost from Delhi', sub: 'Activities, stays and the cab', href: '/rishikesh-trip-cost-from-delhi', img: `${IMG}/Rishikesh/Beatles_Ashram.jpg` },
    { label: 'How to reach Rishikesh from Delhi', sub: 'Car, bus, train and flight compared', href: '/how-to-reach/rishikesh-from-delhi', img: `${IMG}/Rishikesh/Ram_Jhula.jpg` },
  ],
  guides: ['delhi-to-varanasi-best-route-by-car', 'delhi-to-srinagar-by-road', 'hill-stations-near-haridwar-rishikesh', 'how-to-reach-kaza-from-delhi', 'weekend-getaways-near-me'],

  schema: {
    places: ['delhi', 'rishikesh', 'haridwar', 'meerut'],
    trip: {
      name: 'Delhi to Rishikesh by car on the shortest route',
      description: 'The 250 km drive from Delhi to Rishikesh on NH-334 via the Delhi–Meerut Expressway, the Meerut, Muzaffarnagar and Roorkee bypasses and Haridwar, in five to six hours.',
      touristType: 'Road travellers',
      lowPrice: 3300,
      highPrice: 13800,
      itinerary: [
        { name: 'Delhi to Meerut', text: '70 km in an hour on the Delhi–Meerut Expressway; the first toll plaza at km 35.' },
        { name: 'Meerut to Roorkee', text: '110 km on NH-334 with the Meerut and Muzaffarnagar bypasses, a breakfast halt at Khatauli and plazas at Muzaffarnagar and Roorkee.' },
        { name: 'Roorkee to Haridwar', text: 'Four-lane highway across the Ganga canal to the Haridwar bypass, about forty minutes.' },
        { name: 'Haridwar to Rishikesh', text: '25 km beside the Ganga through Raiwala and Nepali Farm to the parking at Tapovan.' },
      ],
    },
    howTo: {
      name: 'How to drive from Delhi to Rishikesh by the shortest route',
      description: 'Take the Delhi–Meerut Expressway, stay on the NH-334 bypasses at Meerut, Muzaffarnagar and Roorkee, skirt Haridwar and follow the river road to Tapovan.',
      totalTime: 'PT5H30M',
      estimatedCost: { currency: 'INR', value: 3300 },
      steps: [
        { name: 'Leave Delhi by five', text: 'Join the Delhi–Meerut Expressway at Sarai Kale Khan, Ghazipur or Dasna; the first FASTag plaza is at km 35.' },
        { name: 'Take the Meerut bypass', text: 'Stay on the expressway to its end on the Meerut bypass and continue north on NH-334; do not enter Meerut city.' },
        { name: 'Stay on the bypasses to Haridwar', text: 'Breakfast at Khatauli, then the Muzaffarnagar and Roorkee bypasses and plazas; keep to the Haridwar bypass rather than the ghats.' },
        { name: 'Follow the river to Tapovan', text: 'The last 25 km run beside the Ganga through Raiwala and Nepali Farm; park at Tapovan and cross the footbridges on foot.' },
      ],
    },
  },
};
