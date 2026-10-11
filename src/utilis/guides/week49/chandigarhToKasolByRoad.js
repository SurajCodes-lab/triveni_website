// Week 49 route guide — "chandigarh to kasol distance" (35,567 impressions a
// quarter, position 7.2; the Chandigarh–Kasol cluster is 53,221). The corridor
// has a cab page, a distance page, a travel-by-car page and a best-time page;
// this is the road answer: the Manali highway from Kiratpur to Bhuntar, then
// the Parvati valley road through Jari, and why the drive starts at five.
// The 310 km and the 8–9 hours are the distance page's. There is no toll page
// for the corridor, so tolls are at actual and no amount is given. Fares are
// computed from the rate card by the fare block, never typed here.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'chandigarh-to-kasol-by-road',
  path: '/chandigarh-to-kasol-by-road',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'chandigarh to kasol distance', impressions: 35567, position: 7.2 },

  eyebrow: 'Road guide · Chandigarh to Kasol',
  crumbs: [{ name: 'Kasol', url: '/kasol' }, { name: 'Chandigarh to Kasol cab', url: '/chandigarh-to-kasol' }],
  crumbName: 'Chandigarh to Kasol by road',
  titleLead: 'Chandigarh to Kasol by road:',
  titleAccent: '310 km, the Manali highway and the Parvati valley',
  title: 'Chandigarh to Kasol by Road: 310 km, the Manali Highway and the Parvati Valley',
  metaTitle: 'Chandigarh to Kasol Distance by Road: 310 km, 8–9 Hrs',
  metaDescription: 'Chandigarh to Kasol by road is 310 km and 8–9 hours: NH-21 from Kiratpur past Bilaspur and Mandi to Bhuntar, then 30 km up the Parvati valley through Jari. Halts, timing, the monsoon rule and fares.',
  keywords: ['chandigarh to kasol distance', 'chandigarh to kasol by road', 'chandigarh to kasol route', 'chandigarh to kasol by car', 'chandigarh to kasol road trip', 'chandigarh to kasol cab', 'bhuntar to kasol road', 'parvati valley road'],
  heroImage: `${IMG}/Kasol/Parvati_River.jpg`,
  heroAlt: 'The Parvati river at Kasol, at the end of the road from Chandigarh',

  lead: 'Chandigarh to Kasol by road is 310 km and eight to nine hours, and it is really two roads. The first is the Manali highway, NH-21, which leaves the plains at Kiratpur, climbs through Swarghat to Bilaspur, runs through Sundernagar to Mandi and follows the Beas past Pandoh and the tunnels to the bridge at Bhuntar. The second is the Parvati valley road: thirty-odd kilometres from Bhuntar through Jari to Kasol, single lane in places and cut into the cliff above the river. We ask for a five o’clock start so that the valley section is done in daylight, and we do not run the road in July and August. The fare is the rate card on the 310 km: a sedan at ₹11/km, an Ertiga or SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23, tolls and parking at actual.',
  keyFacts: [
    { label: 'Distance', value: '310 km · NH-21' },
    { label: 'Drive time', value: '8–9 hrs' },
    { label: 'Best months', value: 'Mar–Jun · Sep–Nov' },
    { label: 'Sedan rate', value: '₹11/km · 300 km min' },
  ],
  stickyLabel: 'Chandigarh–Kasol cab',
  stickyPrice: 'From ₹11/km',
  waText: 'Hi, I want a cab from Chandigarh to Kasol by road with a five o’clock start. Date and number of passengers to follow.',

  intro: [
    'People search for the Chandigarh to Kasol distance expecting a number and get a range of times instead, and the range is the honest answer. The 310 km divide into a mountain highway that most drivers know, NH-21 from Kiratpur to Bhuntar, and a valley road that fewer do, the thirty-odd kilometres up the Parvati from Bhuntar through Jari. The highway is the length of the day; the valley road is the reason the day starts at five, ends in daylight, and does not happen at all in the monsoon.',
    'Every number on this page is the one the rest of the site uses. The 310 km and the eight to nine hours are from our distance page for the corridor, the halts are the ones our drivers make, and the fares in the box lower down are computed from the published rate card: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum with tolls and parking at actual. There is no toll page for this corridor, so tolls are settled on the car’s FASTag and appear on the bill at actual.',
  ],

  timelineTitle: 'Chandigarh to Kasol, kilometre by kilometre',
  timelineEyebrow: 'NH-21 to Bhuntar, then the Parvati valley',
  timelineIntro: 'Kilometre marks are from Chandigarh and rounded to the nearest post; the billing distance is 310 km. The clock assumes the five o’clock start we ask for, with breakfast at Bilaspur and fuel at Bhuntar, which is how the drive comes in at a little over eight hours on a dry day.',
  timeline: [
    { km: 0, name: 'Chandigarh', time: '5 am', text: 'Leave before the city wakes. From the Tricity the highway is found quickly; from the airport side allow a little longer. Everything that follows assumes the wheels are moving by five, because the last thirty kilometres want daylight.', tag: 'Start', image: `${IMG}/Chandigarh/Chandigarh_hero_section.jpg`, alt: 'Chandigarh before dawn, the start of the road to Kasol' },
    { km: 90, name: 'Kiratpur', time: '6.30 am', text: 'The plains end here. NH-21, the Manali highway, leaves the flat and begins to climb almost at once through Swarghat; the road is good, the bends begin, and the driver settles into a mountain rhythm that lasts the rest of the day.', tag: 'The climb begins' },
    { km: 140, name: 'Bilaspur', time: '7.45 am', text: 'The highway drops to Bilaspur beside Gobind Sagar, the reservoir on the Sutlej, and this is where we usually stop for breakfast. Half an hour; it is the best halt of the morning and the last easy one before Mandi.', stop: 'Breakfast' },
    { km: 195, name: 'Sundernagar', time: '9.30 am', text: 'Beyond Bilaspur it is proper mountain road, and Sundernagar is the town in the middle of it. Nothing to stop for; the road runs on to Mandi.' },
    { km: 220, name: 'Mandi', time: '10.15 am', text: 'The old town on the Beas, and the junction where the Manali highway turns up the river. From here the road follows the Beas, and the character changes: the valley narrows and the gorge begins.', tag: 'On to the Beas' },
    { km: 250, name: 'Pandoh and the tunnels', time: '11.15 am', text: 'The highway squeezes past the Pandoh dam and threads a series of tunnels through the gorge. Lights on, no overtaking, and the river below the road most of the way to Aut.', image: `${IMG}/Manali/Pandoh%20Dam.jpg`, alt: 'The Pandoh dam on the Beas, between Mandi and Bhuntar' },
    { km: 280, name: 'Bhuntar', time: '12 noon', text: 'The bridge by Kullu airport, and the end of the first road. Fill the tank here, because the second road begins at the turn, and phones stop working soon after it. This is also the last proper choice of food before Kasol.', stop: 'Fuel', tag: 'Leave the highway' },
    { km: 300, name: 'Jari', time: '12.45 pm', text: 'The Parvati valley road: single lane in places, cut into the cliff above the river, and rough wherever the last monsoon took the edge away. The driver goes slowly and so does everyone else; there is no hurrying this stretch.' },
    { km: 310, name: 'Kasol', time: '1.15 pm', text: 'The village straddles the road along the river. Do not ask the driver to park on the narrow road through it; there are parking areas at both ends of the village, and everything is a walk from either.', tag: 'Arrive', image: `${IMG}/Kasol/Kasol_Village.jpg`, alt: 'Kasol village in the Parvati valley' },
  ],

  table: {
    title: 'Chandigarh to Kasol by road: the drive by segment',
    caption: 'Segment distances, driving times and road conditions between Chandigarh and Kasol on NH-21 via Bilaspur, Mandi and Bhuntar, then the Parvati valley road',
    intro: 'Distances are one-way and add up to the 310 km we bill on. Times are for a dry day with the road fully open, and the last segment is the one that varies most. Tolls on the highway are paid on the car’s FASTag at actual; there is no toll page for this corridor and we do not quote a figure.',
    columns: [
      { key: 'segment', label: 'Segment' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'note', label: 'What to expect', strong: true },
    ],
    rows: [
      { segment: 'Chandigarh to Kiratpur', distance: '90 km', time: '1.5 hrs', road: 'Plains highway', note: 'The flat run; the only part of the day at highway speed' },
      { segment: 'Kiratpur to Bilaspur', distance: '50 km', time: '1.25 hrs', road: 'NH-21, the first climb', note: 'Up through Swarghat and down to Gobind Sagar; breakfast at Bilaspur' },
      { segment: 'Bilaspur to Mandi', distance: '80 km', time: '2 hrs', road: 'Mountain highway', note: 'Proper hill road through Sundernagar to the Beas' },
      { segment: 'Mandi to Bhuntar', distance: '60 km', time: '1.75 hrs', road: 'Beas gorge, dam and tunnels', note: 'Pandoh, the tunnels, Aut, then the bridge by Kullu airport; fuel at Bhuntar' },
      { segment: 'Bhuntar to Kasol', distance: '30 km', time: '1.25 hrs', road: 'Parvati valley road, single lane in places', note: 'Cliff road above the river through Jari; no phone signal; daylight only' },
    ],
    footnote: 'The 310 km is the distance our Chandigarh to Kasol distance page publishes and bills on. In July and August we do not run the Parvati valley road at all; from December to February the highway stays open but Kasol is under snow.',
  },

  sections: [
    {
      eyebrow: 'The Manali highway',
      heading: 'What is the Chandigarh to Kasol route, and where does the highway leave the plains?',
      paras: [
        'The route is the Manali highway, NH-21, for all but the last thirty kilometres. It leaves the plains at Kiratpur, about an hour and a half out of Chandigarh, and climbs at once through Swarghat before dropping to Bilaspur beside Gobind Sagar, the long reservoir on the Sutlej. Beyond Bilaspur it is proper mountain road through Sundernagar to Mandi, and from Mandi it turns up the Beas: past the Pandoh dam, through a series of tunnels in the gorge, out at Aut, and along the river to the bridge at Bhuntar by Kullu airport. Our distance page puts the whole run to Kasol at 310 km and eight to nine hours, with Bilaspur, Mandi and Bhuntar as the stops.',
        'It is a good road and a slow one, and both things are true at once. The surface is highway-grade almost throughout, the tunnels have taken the worst of the old gorge alignment out of the day, and the driver never has to do anything difficult before Bhuntar. But it is a mountain highway with a mountain’s worth of bends, it shares the gorge with the Manali traffic and the trucks, and the average speed after Kiratpur is a hill-road average. That is why the eight to nine hours are honest and why nobody who has driven it argues with them.',
        'The halts fall naturally. Bilaspur is breakfast, because it is the last easy stop before Mandi and the reservoir is worth ten minutes on its own. Mandi is where most Manali-bound drivers eat, but on the Kasol run it is too early for lunch, so we push on and eat at Bhuntar, where the tank is filled and the second road begins.',
      ],
      link: { label: 'Chandigarh to Kasol distance and route page', href: '/distance/chandigarh-to-kasol' },
      image: { src: `${IMG}/Manali/Pandoh%20Dam.jpg`, alt: 'The Pandoh dam in the Beas gorge on the Manali highway', tag: 'Pandoh · km 250', caption: 'The gorge between Mandi and Aut: the dam, the tunnels and the river below the road.' },
    },
    {
      eyebrow: 'The Parvati valley road',
      heading: 'What is the road from Bhuntar to Kasol like?',
      paras: [
        'Different from everything before it. At Bhuntar the highway carries on north to Kullu and Manali, and the Kasol road turns off east up the Parvati valley: thirty-odd kilometres through Jari to Kasol, single lane in places, cut into the cliff above the river, and rough wherever the last monsoon took the edge away. Our travel-by-car page calls the surface poor and the drive slow, and that is a fair description. There are stretches where two cars pass by agreement, a few where the road is unmade, and one or two where the drop to the river is the only thing on the outside of the bend.',
        'None of it is dangerous in daylight with a driver who knows it, which is the whole of our rule. Phones stop working soon after the turn, so there is no calling ahead, no navigation and no summoning help; the driver has to have the road in his head, and he has to be able to see it. That is why the day starts at five in Chandigarh: so that the car is at Bhuntar by noon and at Kasol in the early afternoon with hours of light to spare, rather than feeling its way up the valley at dusk.',
        'Two practical things follow. Fill the tank at Bhuntar, because there is nothing reliable beyond it, and download anything you will need before the turn. And do not ask the driver to park on the road through Kasol itself; the village straddles a narrow road along the river, and there are parking areas at both ends of it. Manikaran, with the gurudwara and its hot springs, is a short way further up the same road, and the same driver takes you there on the second day.',
      ],
      link: { label: 'Chandigarh to Kasol by car, leg by leg', href: '/travel-by-car/chandigarh-to-kasol' },
      image: { src: `${IMG}/Kasol/Parvati_River.jpg`, alt: 'The Parvati river beside the road at Kasol', tag: 'Parvati · km 280 to 310', side: 'left', caption: 'The valley road runs above the river the whole way; it is why the drive wants daylight.' },
    },
    {
      eyebrow: 'Timing',
      heading: 'What time should I leave Chandigarh for Kasol?',
      paras: [
        'Five in the morning, and we mean it. The arithmetic is simple: eight to nine hours of driving with two halts puts a five o’clock start at Bhuntar by noon and at Kasol soon after one, with the whole afternoon in hand. A seven o’clock start reaches the valley road in the middle of the afternoon, which is still fine; a ten o’clock start reaches it at dusk, which is not, and on a day when the highway has been slow for any reason it reaches it after dark. We would rather turn a late booking into a night at Bhuntar than send a car up the Parvati road without light.',
        'The other reason for the early start is the highway itself. NH-21 carries the Manali traffic, and on a summer weekend that traffic is heavy from Kiratpur onward; by mid-morning the gorge between Mandi and Aut is a slow procession, and Bhuntar is busy with the airport and the Kullu turn. Leaving at five puts you through Bilaspur before the day’s traffic has left Chandigarh, and through the gorge before the Manali-bound cars catch up.',
        'For the way back, the same logic runs in reverse: leave Kasol in the morning so that the valley road is done first and the highway is a long, easy afternoon. If you want a late departure from Kasol, make it a night at Bhuntar or Kullu and drive to Chandigarh the next day; the car and driver stay with you and the extra day is billed at the 300 km minimum.',
      ],
      link: { label: 'Chandigarh to Kasol cab', href: '/chandigarh-to-kasol' },
      image: { src: `${IMG}/Chandigarh/sukhana_lake.jpg`, alt: 'Sukhna Lake at Chandigarh, at dawn', tag: 'Chandigarh · 5 am', caption: 'Five o’clock at Sukhna: early enough for the Parvati road to be done in daylight.' },
    },
    {
      eyebrow: 'Season',
      heading: 'When is the best time to drive to Kasol, and why do we not run in the monsoon?',
      paras: [
        'March to June and September to November, on the distance page and in our drivers’ experience. Spring and early summer are the season the valley is known for: the river is high with snowmelt, the days are warm and the nights cool, and the treks above Kasol are open. September to November is quieter and, for the drive, the best of the year: the monsoon has cleared, the road has been repaired, and the valley turns gold. Our best-time page for Kasol goes through the months one by one.',
        'July and August are the months we do not run this road at all. The Parvati valley slips and floods every year in the monsoon, the road from Bhuntar loses its edge in places, and the risk is not worth any fare. The highway to Bhuntar usually stays open; it is the last thirty kilometres that close, sometimes for days, and a car that has driven eight hours to find a barrier at the turn has wasted a day. If your dates fall in those months, we will say so at booking rather than on the morning.',
        'December to February is a different case. The highway stays open, the drive is possible, and Kasol under snow is quiet and beautiful. But the village is cold, many of the guesthouses close, and the Kheerganga trek is shut for the season, so it is a trip for people who want the snow itself rather than the valley’s usual pleasures. The driver treats the valley road as a daylight-only run in those months, and the five o’clock start matters more than ever.',
      ],
      link: { label: 'Best time to visit Kasol, month by month', href: '/best-time-to-visit/kasol' },
      image: { src: `${IMG}/Kasol/Chalal_Trek.jpg`, alt: 'The path to Chalal through the pines above the Parvati', tag: 'Chalal · Mar–Jun, Sep–Nov', side: 'left', caption: 'The walks above Kasol are the reason to come in season; in the monsoon the road below them closes.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Chandigarh to Kasol cost?',
      paras: [
        'The one-way fare is the distance at the vehicle’s rate, 310 km at ₹11/km for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller; 310 km is above the 300 km per day minimum, so nothing is wasted. Fuel and the driver are inside those figures; highway tolls, parking at Kasol and any Himachal charges are extra at actual, settled on the car’s tag and shown on the bill. The fare box below does the arithmetic for each vehicle.',
        'Most people want the car for longer than the drive, and the round trip is priced as the greater of twice the one-way fare or the number of days at the 300 km minimum. A three-day trip, up on day one, Manikaran and the valley on day two, back on day three, is the pattern that suits Kasol, and the fare box shows it. A fourth day in the valley bills at the 300 km minimum for the vehicle; the driver’s night-halt allowance is extra at actual.',
        'On the choice of car, the travel-by-car page recommends an SUV or an Innova, and for the Parvati road that is the right advice: ground clearance matters where the surface is unmade, and torque matters on the climb from Kiratpur. A sedan will do it in season with a careful driver; an SUV does it without the passengers noticing. For a group of six the Innova Crysta works out cheaper per head than two sedans, and it is the car our drivers prefer for the valley.',
      ],
      link: { label: 'Chandigarh to Kasol one-way cab', href: '/one-way-cab/chandigarh-to-kasol' },
      image: { src: `${IMG}/Kasol/Manikaran_Sahib.jpg`, alt: 'Manikaran Sahib gurudwara in the Parvati valley', tag: 'Manikaran · day 2', caption: 'The second day of a round trip: Manikaran and its hot springs, a short way up the same road.' },
    },
  ],

  fare: {
    title: 'Chandigarh to Kasol by road',
    note: 'Rate-card fares for the 310 km drive. The three-day figure is the usual trip: up on day one, Manikaran and the valley on day two, back on day three. A fourth day bills at the 300 km minimum.',
    caption: 'Chandigarh to Kasol cab fare by vehicle, one-way and three-day round trip',
    distanceKm: 310,
    roundTrip: true,
    days: 3,
    roundLabel: 'Three-day round trip',
    footnote: 'Highway tolls, parking at Kasol, any Himachal charges and the driver’s night-halt allowance at actual; fuel is included. No weekend surcharge. We do not run the Parvati valley road in July and August.',
    waText: 'Hi, I want a Chandigarh to Kasol cab with a five o’clock start. Please share the fare for my dates and vehicle.',
    bookHref: '/chandigarh-to-kasol',
    bookLabel: 'Chandigarh to Kasol cab',
    cta: 'Book the Kasol cab',
  },

  galleryTitle: 'What the 310 km buys you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Kasol/Kasol_Village.jpg`, title: 'Kasol', text: 'The village along the river; the car parks at either end.', tag: 'km 310' },
    { image: `${IMG}/Kasol/Parvati_River.jpg`, title: 'The Parvati', text: 'Beside the road for the last thirty kilometres.', tag: 'Bhuntar to Kasol' },
    { image: `${IMG}/Kasol/Manikaran_Sahib.jpg`, title: 'Manikaran Sahib', text: 'The gurudwara and the hot springs, a short way up the valley.', tag: 'Day 2' },
    { image: `${IMG}/Kasol/Chalal_Trek.jpg`, title: 'Chalal', text: 'The walk through the pines across the river.', tag: 'In season' },
    { image: `${IMG}/Manali/Kullu%20Valley.jpg`, title: 'The Beas at Bhuntar', text: 'Where the Manali highway carries on and the Kasol road turns off.', tag: 'km 280' },
  ],

  tips: [
    { title: 'Leave Chandigarh at five', text: 'Eight to nine hours with two halts puts you at Bhuntar by noon and at Kasol soon after one, with the valley road done in daylight. That is the whole reason for the early start.' },
    { title: 'Breakfast at Bilaspur, fuel at Bhuntar', text: 'Bilaspur is the last easy halt before Mandi. Bhuntar is the last fuel and the last proper food before the turn; fill up and eat there.' },
    { title: 'Download before the turn', text: 'Phones stop working soon after Bhuntar. Maps, bookings and the hotel’s directions want to be on the phone before the Parvati road begins.' },
    { title: 'Do not go in July or August', text: 'The Parvati valley slips and floods every monsoon and we do not run the road. We will say so at booking; ask us for September instead.' },
    { title: 'Park at the ends of the village', text: 'The road through Kasol is narrow and the village straddles it. There are parking areas at both ends, and everything is a walk from either.' },
  ],

  faqs: [
    { question: 'What is the distance from Chandigarh to Kasol?', answer: '310 km by road: NH-21, the Manali highway, from Kiratpur through Bilaspur, Sundernagar and Mandi to Bhuntar, then the Parvati valley road for the last thirty-odd kilometres through Jari to Kasol. Our distance page publishes the corridor at 310 km and eight to nine hours.' },
    { question: 'How long does it take to drive from Chandigarh to Kasol?', answer: 'Eight to nine hours on a dry day with the road open. About an hour and a half of plains to Kiratpur, six hours of mountain highway through Bilaspur, Mandi and the Beas gorge to Bhuntar, and an hour and a quarter up the Parvati valley to Kasol. A five o’clock start has you there in the early afternoon.' },
    { question: 'Which route is best from Chandigarh to Kasol by road?', answer: 'NH-21 via Bilaspur, Mandi and Bhuntar, then the Parvati valley road. There is no serious alternative: the Manali highway is the road into the Kullu valley, and the Kasol turn is at Bhuntar by the airport. Ask the driver to breakfast at Bilaspur and fuel at Bhuntar, and to do the valley road in daylight.' },
    { question: 'What is the road from Bhuntar to Kasol like?', answer: 'Thirty-odd kilometres of valley road, single lane in places, cut into the cliff above the Parvati and rough wherever the last monsoon took the edge away. Phones stop working soon after the turn. It is fine in daylight with a driver who knows it, which is why we ask for a five o’clock start from Chandigarh, and it is closed to our cars in July and August.' },
    { question: 'What is the cab fare from Chandigarh to Kasol?', answer: 'The distance at the vehicle’s rate: 310 km at ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, with highway tolls and parking extra at actual. A three-day round trip is the greater of twice the one-way fare or three days at the 300 km minimum. The fare box on this page shows the figure for each vehicle.' },
    { question: 'How much is the toll from Chandigarh to Kasol?', answer: 'We do not publish a toll figure for this corridor. The plazas on NH-21 are paid on the car’s FASTag at actual and appear on the bill as they are charged; the Parvati valley road has no tolls. Tolls are extra to the fare on every route.' },
    { question: 'When is the best time to drive from Chandigarh to Kasol?', answer: 'March to June and September to November. July and August are the monsoon, when the Parvati valley slips and floods and we do not run the road at all. December to February the highway stays open but Kasol is under snow, many guesthouses close and the Kheerganga trek is shut; it is a trip for the snow itself.' },
    { question: 'Can I go on to Manali or Manikaran from Kasol with the same car?', answer: 'Yes. Manikaran is a short way further up the same valley road and is the usual second day. Manali is back down to Bhuntar and up the highway through Kullu, and the same driver takes you there; the extra distance is billed at the vehicle’s rate on a round trip, or ask us for a one-way drop to Manali.' },
  ],

  related: [
    { label: 'Chandigarh to Kasol cab', sub: '310 km · sedan from ₹11/km', href: '/chandigarh-to-kasol', img: `${IMG}/Kasol/Kasol_hero_section.jpg` },
    { label: 'Chandigarh to Kasol distance', sub: '310 km · road notes and halts', href: '/distance/chandigarh-to-kasol', img: `${IMG}/Kasol/Parvati_River.jpg` },
    { label: 'Chandigarh to Kasol by car, leg by leg', sub: 'Four segments, from Bilaspur to the valley', href: '/travel-by-car/chandigarh-to-kasol', img: `${IMG}/Manali/Kullu%20Valley.jpg` },
    { label: 'Best time to visit Kasol', sub: 'Month by month, with the monsoon rule', href: '/best-time-to-visit/kasol', img: `${IMG}/Kasol/Chalal_Trek.jpg` },
    { label: 'Chandigarh to Manali one-way cab', sub: 'The same highway, past the Kasol turn', href: '/one-way-cab/chandigarh-to-manali', img: `${IMG}/Manali/Manali_hero_section.jpg` },
  ],
  guides: ['shimla-to-manali-by-road', 'best-time-to-visit-kasol', 'kullu-dussehra-2026-by-car', 'how-to-reach-kaza-from-delhi', 'dalhousie-dharamshala-circuit-by-car'],

  schema: {
    places: ['chandigarh', 'kasol'],
    trip: {
      name: 'Chandigarh to Kasol by road on NH-21 and the Parvati valley road',
      description: 'The 310 km drive from Chandigarh to Kasol: the Manali highway from Kiratpur through Bilaspur and Mandi to Bhuntar, then the Parvati valley road through Jari, in eight to nine hours with a five o’clock start.',
      touristType: 'Road travellers',
      itinerary: [
        { name: 'Chandigarh to Bilaspur', text: '140 km: the plains to Kiratpur, then the first climb through Swarghat and down to Gobind Sagar; breakfast at Bilaspur.' },
        { name: 'Bilaspur to Bhuntar', text: '140 km of mountain highway through Sundernagar and Mandi, then the Beas gorge past Pandoh and the tunnels to the bridge at Bhuntar; fuel there.' },
        { name: 'Bhuntar to Kasol', text: '30 km up the Parvati valley through Jari on a single-lane cliff road, done in daylight; park at either end of the village.' },
      ],
    },
    howTo: {
      name: 'How to drive from Chandigarh to Kasol',
      description: 'Leave at five, take NH-21 from Kiratpur through Bilaspur and Mandi to Bhuntar, fill the tank, and do the Parvati valley road to Kasol in daylight.',
      totalTime: 'PT8H30M',
      steps: [
        { name: 'Leave Chandigarh at five', text: 'The plains to Kiratpur take about an hour and a half; the highway climbs from there.' },
        { name: 'Breakfast at Bilaspur', text: 'The last easy halt before Mandi, beside Gobind Sagar.' },
        { name: 'Through Mandi and the gorge to Bhuntar', text: 'Pandoh, the tunnels and Aut, then the bridge by Kullu airport; fill the tank and eat at Bhuntar.' },
        { name: 'Up the Parvati valley to Kasol', text: 'Thirty kilometres through Jari on a narrow cliff road with no phone signal; arrive in the early afternoon and park at the edge of the village.' },
      ],
    },
  },
};
