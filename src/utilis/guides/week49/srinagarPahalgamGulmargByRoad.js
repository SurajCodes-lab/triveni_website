// Week 49 route guide — "srinagar to pahalgam distance" (43,033 impressions a
// quarter, position 7.7; the Srinagar–Pahalgam cluster is 45,313), with the
// Gulmarg road alongside because the two are asked together. Each leg has a
// distance page and a one-way page, and both have airport pages; this is the
// road answer for both in one place: NH-44 south to Anantnag and the Lidder
// valley to Pahalgam, and the climb through Tangmarg to the meadow at Gulmarg.
// Distances, times and seasons are the distance pages'. No toll pages exist,
// so tolls are at actual and no amount is given. Fares are computed from the
// rate card by the fare block on the longer leg, never typed here.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'srinagar-pahalgam-gulmarg-by-road',
  path: '/srinagar-pahalgam-gulmarg-by-road',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'srinagar to pahalgam distance', impressions: 43033, position: 7.7 },

  eyebrow: 'Road guide · Srinagar, Pahalgam, Gulmarg',
  crumbs: [{ name: 'Pahalgam', url: '/pahalgam' }, { name: 'Srinagar to Pahalgam cab', url: '/one-way-cab/srinagar-to-pahalgam' }],
  crumbName: 'Srinagar to Pahalgam and Gulmarg by road',
  titleLead: 'Srinagar to Pahalgam and Gulmarg by road:',
  titleAccent: '95 km up the Lidder, 50 km up to the meadow',
  title: 'Srinagar to Pahalgam and Gulmarg by Road: 95 km up the Lidder, 50 km up to the Meadow',
  metaTitle: 'Srinagar to Pahalgam & Gulmarg Distance: 95 km and 50 km',
  metaDescription: 'Srinagar to Pahalgam is 95 km and 2–3 hours on NH-44 to Anantnag, then up the Lidder valley; Srinagar to Gulmarg is 50 km and 1.5–2 hours through Tangmarg. Both roads stop by stop, seasons and fares.',
  keywords: ['srinagar to pahalgam distance', 'srinagar to gulmarg distance', 'srinagar to pahalgam by road', 'srinagar to gulmarg by road', 'srinagar to pahalgam cab', 'srinagar to gulmarg cab', 'pahalgam gulmarg from srinagar', 'lidder valley road'],
  heroImage: `${IMG}/Pahalgam/Lidder_River.jpg`,
  heroAlt: 'The Lidder river at Pahalgam, at the end of the road from Srinagar',

  lead: 'Srinagar to Pahalgam by road is 95 km and two to three hours: south on NH-44, the main valley highway, through Pampore and Bijbehara to Anantnag, then east up the Lidder valley through Aishmuqam to Pahalgam. Srinagar to Gulmarg is 50 km and an hour and a half to two hours, west across the valley and up through Tangmarg to the meadow. They are the two drives every Kashmir trip makes, in opposite directions from the same city, and both are under the 300 km per day minimum that outstation cabs bill on, so the fare is the rate card on the minimum: a sedan at ₹11/km, an Ertiga or SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23, tolls and parking at actual.',
  keyFacts: [
    { label: 'Srinagar–Pahalgam', value: '95 km · 2–3 hrs' },
    { label: 'Srinagar–Gulmarg', value: '50 km · 1.5–2 hrs' },
    { label: 'Pahalgam season', value: 'Apr–Oct' },
    { label: 'Sedan rate', value: '₹11/km · 300 km min' },
  ],
  stickyLabel: 'Srinagar–Pahalgam cab',
  stickyPrice: 'From ₹11/km',
  waText: 'Hi, I want a cab from Srinagar to Pahalgam and Gulmarg. Dates, pick-up point and number of passengers to follow.',

  intro: [
    'Srinagar is the hub, and the two places most people come to Kashmir for lie in opposite directions from it. Pahalgam is 95 km to the south-east, up the Lidder valley from Anantnag, the base for Aru, Betaab and Chandanwari and the starting point of the Amarnath Yatra. Gulmarg is 50 km to the west, up through Tangmarg to the meadow and the gondola, the ski slopes in winter and the alpine grass in summer. Neither road is long, but they are different roads with different seasons, and this guide takes each in turn before answering the questions people ask about doing both.',
    'Every number on this page is the one the rest of the site uses. The 95 km and the 50 km and their times are from our distance pages for the two legs, the seasons are the ones those pages give, the road notes are our drivers’, and the fares in the box lower down are computed from the published rate card: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum with tolls and parking at actual. There are no toll pages for these legs; tolls, where any apply, are settled on the car’s FASTag at actual.',
  ],

  timelineTitle: 'Two roads out of Srinagar, kilometre by kilometre',
  timelineEyebrow: 'The Pahalgam road, then the Gulmarg road',
  timelineIntro: 'Two ladders, each starting from Srinagar at kilometre zero. The first is the Pahalgam road, 95 km, with the clock assuming an eight o’clock start and a kahwa halt at Anantnag; the second is the Gulmarg road, 50 km, on a separate day with the same start. Kilometre marks are rounded to the nearest post, and the billing distances are the 95 km and 50 km our distance pages publish.',
  timeline: [
    { km: 0, name: 'Srinagar', time: '8 am', text: 'Leave the Boulevard southwards on NH-44, the main valley highway. Within a few kilometres the city gives way to saffron fields and willow avenues, and the road is four-lane and quick.', tag: 'Pahalgam road · start', image: `${IMG}/Srinagar/Dal_Lake.jpg`, alt: 'Dal Lake at Srinagar in the morning, the start of both roads' },
    { km: 15, name: 'Pampore', time: '8.30 am', text: 'The saffron fields lie beside the road and turn purple in the bloom of late October and early November. For a fortnight in autumn this is the best fifteen minutes of the drive; the rest of the year it is a town you pass through.' },
    { km: 45, name: 'Bijbehara', time: '9.15 am', text: 'The highway runs on through poplar avenues and apple country past Awantipora to Bijbehara, the chinar town on the Jhelum. Still the main highway, still quick.' },
    { km: 55, name: 'Anantnag', time: '9.40 am', text: 'The mid-point and the halt for kahwa. Here you leave NH-44 for the Lidder valley road, and the drive changes character: from a highway across the valley floor to a river road climbing gently into the hills.', stop: 'Kahwa', tag: 'Leave NH-44' },
    { km: 75, name: 'Aishmuqam', time: '10.30 am', text: 'The river runs clear and cold beside you, the road climbs gently through the village, and the pine comes down to the tarmac as you near Pahalgam. A good road, but a valley road with villages and horse carts on it, so not a fast one.' },
    { km: 95, name: 'Pahalgam', time: '11 am', text: 'The town sits where the Lidder comes down from the hills. The car drops you at the hotel; Aru, Betaab and Chandanwari are the onward runs, and in the Yatra months the road past the town carries the pilgrim convoys.', tag: 'Arrive · Pahalgam', image: `${IMG}/Pahalgam/Pahalgam_hero_section.jpg`, alt: 'Pahalgam in the Lidder valley' },
    { km: 0, name: 'Srinagar, another morning', time: '8 am', text: 'The Gulmarg road leaves the city westwards across the valley floor. It is the shorter drive by far, and the same eight o’clock start has you on the meadow by mid-morning.', tag: 'Gulmarg road · start', image: `${IMG}/Srinagar/Shankaracharya_Temple.jpg`, alt: 'The Shankaracharya hill above Srinagar' },
    { km: 37, name: 'Tangmarg', time: '9.15 am', text: 'The town at the foot of the climb and the one stop on the distance page for this road. From here the road climbs through pine forest to the meadow, and in the skiing months this last stretch is the one that carries the snow.', tag: 'The climb begins' },
    { km: 50, name: 'Gulmarg', time: '10 am', text: 'The meadow, the gondola to Kongdoori and Apharwat, the golf course in summer and the ski slopes in winter. The car waits at the edge of the meadow; the rest is on foot, by pony or by cable car.', tag: 'Arrive · Gulmarg', image: `${IMG}/Gulmarg/Gondola_Cable_Car.jpg`, alt: 'The Gulmarg gondola above the meadow' },
  ],

  table: {
    title: 'Srinagar to Pahalgam and Srinagar to Gulmarg compared',
    caption: 'Distance, drive time, road, best season and the onward runs for the Srinagar to Pahalgam and Srinagar to Gulmarg roads',
    intro: 'Distances are one-way from Srinagar and are the ones our distance pages publish. Both legs are under the 300 km per day minimum, so both bill the same minimum for a given vehicle; the fare box further down uses the longer leg, Srinagar to Pahalgam at 95 km, and the figure is the same for Gulmarg. Tolls, where any apply, are paid on the car’s FASTag at actual; there are no toll pages for these legs and we do not quote a figure.',
    columns: [
      { key: 'road', label: 'Road' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'route', label: 'Route' },
      { key: 'season', label: 'Best season' },
      { key: 'onward', label: 'Onward from there', strong: true },
    ],
    rows: [
      { road: 'Srinagar to Pahalgam', distance: '95 km', time: '2–3 hrs', route: 'NH-44 south through Pampore and Bijbehara to Anantnag, then the Lidder valley road through Aishmuqam', season: 'April to October; the Amarnath Yatra base in July and August', onward: 'Aru, Betaab and Chandanwari by the same car; Amarnath from Chandanwari' },
      { road: 'Srinagar to Gulmarg', distance: '50 km', time: '1.5–2 hrs', route: 'West across the valley and up through Tangmarg to the meadow', season: 'December to March for skiing, April to June for the meadows, September to November for autumn colour', onward: 'The gondola to Kongdoori and Apharwat; the meadow on foot or by pony' },
      { road: 'Pahalgam to Gulmarg, or the reverse', distance: 'Back through Srinagar', time: 'The two legs added', route: 'There is no direct hill road between them; the valley highway through Srinagar joins them', season: 'As above for each end', onward: 'A night in Srinagar between the two is the usual pattern' },
      { road: 'Srinagar airport to either', distance: 'See the airport pages', time: 'Same roads, from the airport side of the city', route: 'The airport taxi pages price the drop from arrivals', season: 'As above', onward: 'Pahalgam or Gulmarg the same afternoon as the flight' },
    ],
    footnote: 'The 95 km and 50 km are the distances our Srinagar to Pahalgam and Srinagar to Gulmarg distance pages publish and bill on. In July and August the Amarnath Yatra convoys use the Pahalgam road and there are timed halts to allow for; from December to February snow closes in around Pahalgam and the upper section can need chains after a fresh fall.',
  },

  sections: [
    {
      eyebrow: 'The Pahalgam road',
      heading: 'What is the road from Srinagar to Pahalgam like?',
      paras: [
        'You leave Srinagar southwards on NH-44, the main valley highway, and within a few kilometres the city gives way to saffron fields and willow avenues. The first town is Pampore, where the saffron lies beside the road and turns purple in the bloom of late October and early November; the highway runs on through poplar avenues and apple country past Awantipora to Bijbehara, the chinar town on the Jhelum, and to Anantnag, the mid-point and the halt for kahwa. Our distance page puts the whole run at 95 km and two to three hours, with Anantnag as the stop, and the first half of it is four-lane highway across the valley floor that goes quickly.',
        'At Anantnag you leave NH-44 for the Lidder valley road, and the drive changes character. The river runs clear and cold beside you, the road climbs gently through Aishmuqam and the pine comes down to the tarmac as you near Pahalgam. It is a good road, but a valley road with villages and horse carts on it, so not a fast one; the two to three hours on the distance page is the highway hour plus the valley’s pace. Nobody is in a hurry on the Lidder road, and the drive is better for it.',
        'Pahalgam itself is the start of the onward runs rather than the end of the day. Aru, Betaab and Chandanwari are the three valleys the town is known for, and the same car takes you to them; Chandanwari is also the road head for the Amarnath Yatra, which is why the distance page calls Pahalgam the Yatra’s base. In July and August the pilgrim convoys use this stretch and there are timed halts to allow for; the rest of the season the road is yours.',
      ],
      link: { label: 'Srinagar to Pahalgam distance and route page', href: '/distance/srinagar-to-pahalgam' },
      image: { src: `${IMG}/Pahalgam/Betaab_Valley.jpg`, alt: 'Betaab Valley beyond Pahalgam, one of the onward runs', tag: 'Betaab · beyond km 95', caption: 'Pahalgam is the base; Aru, Betaab and Chandanwari are the runs the same car makes from it.' },
    },
    {
      eyebrow: 'The Gulmarg road',
      heading: 'What is the road from Srinagar to Gulmarg like?',
      paras: [
        'Shorter, and in the other direction. The Gulmarg road leaves Srinagar westwards across the valley floor and reaches Tangmarg, the town at the foot of the hills and the one stop our distance page names; from Tangmarg it climbs through pine forest to the meadow. The distance page puts it at 50 km and an hour and a half to two hours, and calls it a good mountain road and a scenic drive through the pines, which is a fair summary: the flat part is quick, the climb is the part you remember, and the whole thing fits inside a morning.',
        'What changes with the season is the last stretch above Tangmarg. From December to March it carries the snow that makes Gulmarg a ski resort, and it is the part of the drive the driver judges on the day; from April to June the same road runs through green forest to green meadows, and from September to November through autumn colour. The distance page gives all three seasons their due, and each is a different Gulmarg at the top of the same road.',
        'At the top the car waits at the edge of the meadow and the rest is on foot, by pony or by cable car. The gondola to Kongdoori and on to Apharwat is the thing most people come for, and the distance page is right to call it a must; the golf course and the walks are the summer alternatives, and the slopes are the winter one. There is nothing beyond Gulmarg by road for a car, which is why it is a day trip or a night away rather than a stage on a longer route.',
      ],
      link: { label: 'Srinagar to Gulmarg distance and route page', href: '/distance/srinagar-to-gulmarg' },
      image: { src: `${IMG}/Gulmarg/Alpine_Meadows.jpg`, alt: 'The meadows at Gulmarg in summer', tag: 'Gulmarg · km 50', side: 'left', caption: 'The meadow above Tangmarg: green from April to June, gold in autumn, white from December.' },
    },
    {
      eyebrow: 'Seasons and the Yatra',
      heading: 'When is the best time for Pahalgam and Gulmarg, and what changes in the Amarnath Yatra months?',
      paras: [
        'The two roads have different calendars, and it is worth planning around them. Pahalgam is an April to October place on our distance page: the Lidder is high with snowmelt in spring, the valleys above the town are open through the summer, and October brings the chinar colour and the saffron bloom at Pampore on the way. Gulmarg has three seasons the distance page names separately: December to March for skiing, April to June for the green meadows, and September to November for autumn colour. Between them the two roads cover the whole year, and the only months with nothing to recommend them at either end are the depths of the monsoon, which in the valley are mild compared with the plains.',
        'July and August are the Amarnath Yatra months, and they change the Pahalgam road. The pilgrim convoys use the stretch from Anantnag up the Lidder, there are timed halts to allow for, and Chandanwari, the road head, is given over to the Yatra. The road stays open to ordinary cars, but the drive takes longer and the town is full; if the Yatra is not the reason for your trip, June or September are the better months for Pahalgam, and Gulmarg is the better day in July.',
        'Winter is the other change. From December to February snow closes in around Pahalgam and the upper section of the Lidder road can need chains after a fresh fall, so we treat the winter run as a daylight-only drive. Gulmarg in the same months is the point of the trip rather than a problem, and the drivers who run the Tangmarg road in the skiing season know the day’s conditions before they leave the city. Most winter visitors fly into Srinagar and take the airport road straight to Gulmarg the same afternoon.',
      ],
      link: { label: 'Srinagar airport to Pahalgam taxi', href: '/srinagar-airport-to-pahalgam-taxi' },
      image: { src: `${IMG}/Pahalgam/Chandanwari.jpg`, alt: 'Chandanwari above Pahalgam, the road head for the Amarnath Yatra', tag: 'Chandanwari · the Yatra road head', caption: 'In July and August the Pahalgam road carries the Yatra convoys; the rest of the season it is quiet.' },
    },
    {
      eyebrow: 'Planning',
      heading: 'Can I do Pahalgam and Gulmarg from Srinagar in one trip, and in what order?',
      paras: [
        'Yes, and nearly everyone does; the question is only the order and the nights. The two lie in opposite directions from Srinagar, south-east and west, and there is no direct hill road between them, so the pattern is out and back from the city for each. The usual shape is three days with the same car: Pahalgam on day one, with Aru or Betaab in the afternoon and a night in the town or back in Srinagar; Gulmarg on day two, a morning on the meadow and the gondola, and back to the lake by evening; and the third day for the city itself, the Mughal gardens and a shikara on Dal Lake, or for the drive to the airport.',
        'Which to do first depends on the season and the flight. In the skiing months Gulmarg comes first, while the snow is fresh and the day is clear; in summer Pahalgam comes first, because it is the longer day and the valleys above it want the whole afternoon. If you are flying in, the airport pages price the drop straight to either from arrivals, and Gulmarg is the easier same-afternoon drive because it is the shorter road. If the car has come with you from Delhi, the driver simply carries on, and the Delhi to Srinagar by road guide covers that.',
        'A night at Pahalgam is worth having if Aru, Betaab and Chandanwari are all on the list; they are three different runs from the town and a day trip from Srinagar cannot do them justice. A night at Gulmarg is worth having in the skiing season and on a summer evening when the meadow empties; the rest of the year a day trip is enough. Either way the same driver does the local runs, and the round trip is priced by the day rather than by the kilometre.',
      ],
      link: { label: 'Srinagar airport to Gulmarg taxi', href: '/srinagar-airport-to-gulmarg-taxi' },
      image: { src: `${IMG}/Srinagar/Dal_Lake_Shikara.jpg`, alt: 'A shikara on Dal Lake at Srinagar', tag: 'Srinagar · between the two', side: 'left', caption: 'Srinagar is the hub: Pahalgam one way, Gulmarg the other, and the lake in between.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Srinagar to Pahalgam or Gulmarg cost?',
      paras: [
        'Both legs are under the 300 km per day minimum that outstation cabs bill on, so for a given vehicle they cost the same: the minimum at the vehicle’s rate, ₹11/km for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller. Fuel and the driver are inside those figures; tolls, where any apply, and parking at Pahalgam or Gulmarg are paid at actual. The fare box below does the arithmetic on the longer leg, Srinagar to Pahalgam at 95 km, and the one-way figure is the same for Gulmarg.',
        'For the trip most people make, the round trip is priced as the greater of twice the one-way fare or the number of days at the 300 km minimum, and with three days out of Srinagar it is the days that count. The fare box shows the three-day figure; a fourth day adds another 300 km at the vehicle’s rate, and the driver’s night halt at Pahalgam or Gulmarg is extra at actual. A one-way drop is the right booking if you are flying into Srinagar and staying at Pahalgam or Gulmarg without coming back through the city; the airport pages price that directly.',
        'On the choice of car, a sedan is right for both roads in season; neither the Lidder road nor the Tangmarg climb needs an SUV on a dry day. In the skiing months the drivers prefer an Innova or an SUV on the Gulmarg road for the snow above Tangmarg, and for a family of six with winter luggage the Innova Crysta works out cheaper per head than two sedans. The one-way pages for Srinagar to Pahalgam and Srinagar to Gulmarg are the right booking for a drop; the round trip is right if the car is staying with you.',
      ],
      link: { label: 'Srinagar to Pahalgam one-way cab', href: '/one-way-cab/srinagar-to-pahalgam' },
      image: { src: `${IMG}/Gulmarg/Skiing_Slopes.jpg`, alt: 'The ski slopes at Gulmarg in winter', tag: 'Gulmarg · Dec–Mar', caption: 'In the skiing season the drivers prefer an SUV or Innova for the snow above Tangmarg.' },
    },
  ],

  fare: {
    title: 'Srinagar to Pahalgam and Gulmarg by car',
    note: 'Rate-card fares on the longer leg, Srinagar to Pahalgam at 95 km, which bills the 300 km minimum; the one-way figure is the same for Srinagar to Gulmarg at 50 km. The three-day figure is the usual trip: Pahalgam on day one, Gulmarg on day two, Srinagar or the airport on day three.',
    caption: 'Srinagar to Pahalgam cab fare by vehicle, one-way and three-day round trip, also the fare for Srinagar to Gulmarg',
    distanceKm: 95,
    roundTrip: true,
    days: 3,
    roundLabel: 'Three-day round trip',
    footnote: 'Tolls, where any apply, parking and the driver’s night halt at Pahalgam or Gulmarg at actual; fuel is included. No season surcharge. A fourth day adds 300 km at the vehicle’s rate; the airport pages price a direct drop from arrivals.',
    waText: 'Hi, I want a cab from Srinagar to Pahalgam and Gulmarg over three days. Please share the fare for my dates and vehicle.',
    bookHref: '/one-way-cab/srinagar-to-pahalgam',
    bookLabel: 'Srinagar to Pahalgam cab',
    cta: 'Book the Kashmir cab',
  },

  galleryTitle: 'What the two roads buy you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Pahalgam/Aru_Valley.jpg`, title: 'Aru', text: 'The first of the three valleys above Pahalgam, by the same car.', tag: 'Pahalgam · day 1' },
    { image: `${IMG}/Pahalgam/Betaab_Valley.jpg`, title: 'Betaab Valley', text: 'The meadow by the Lidder, an afternoon from the town.', tag: 'Pahalgam' },
    { image: `${IMG}/Gulmarg/Gondola_Cable_Car.jpg`, title: 'The gondola', text: 'To Kongdoori and Apharwat from the edge of the meadow.', tag: 'Gulmarg · day 2' },
    { image: `${IMG}/Gulmarg/Skiing_Slopes.jpg`, title: 'The slopes', text: 'December to March, above Tangmarg.', tag: 'Gulmarg · winter' },
    { image: `${IMG}/Srinagar/Mughal_Gardens.jpg`, title: 'The Mughal gardens', text: 'For the third day, round the shore from the Boulevard.', tag: 'Srinagar · day 3' },
  ],

  tips: [
    { title: 'Kahwa at Anantnag, then slow down', text: 'Anantnag is the mid-point of the Pahalgam road and the halt. After it the Lidder road has villages and horse carts on it; the two to three hours allow for that, and the drive is better for not hurrying it.' },
    { title: 'Do Pahalgam and Gulmarg on separate days', text: 'They lie in opposite directions from Srinagar and there is no hill road between them. Out and back for each, with the city or a night away in between.' },
    { title: 'Allow for the Yatra in July and August', text: 'The Amarnath convoys use the Pahalgam road from Anantnag up, with timed halts. If the Yatra is not your reason for going, June and September are the easier months for Pahalgam.' },
    { title: 'Winter is Gulmarg’s season, not Pahalgam’s', text: 'From December to February snow closes in around Pahalgam and the upper Lidder road can need chains; we run it in daylight only. Gulmarg in the same months is the point of the trip.' },
    { title: 'Pampore in late October', text: 'For a fortnight in late October and early November the saffron fields beside the Pahalgam road are in purple bloom. If the dates are yours to choose, choose those.' },
  ],

  faqs: [
    { question: 'What is the distance from Srinagar to Pahalgam?', answer: '95 km by road, two to three hours: south on NH-44 through Pampore, Awantipora and Bijbehara to Anantnag, the mid-point and the kahwa halt, then east up the Lidder valley road through Aishmuqam to Pahalgam. Our distance page publishes the corridor at 95 km with Anantnag as the stop.' },
    { question: 'What is the distance from Srinagar to Gulmarg?', answer: '50 km by road, an hour and a half to two hours: west across the valley floor to Tangmarg, then the climb through pine forest to the meadow. Our distance page publishes the corridor at 50 km with Tangmarg as the stop, and calls it a good mountain road.' },
    { question: 'How long does it take to drive from Srinagar to Pahalgam?', answer: 'Two to three hours. The highway to Anantnag goes quickly; the Lidder valley road beyond it is a good road but a valley road with villages and horse carts on it, so not a fast one. An eight o’clock start from Srinagar with a kahwa halt at Anantnag has you in Pahalgam by about eleven.' },
    { question: 'Can I visit Pahalgam and Gulmarg from Srinagar on the same trip?', answer: 'Yes; they are in opposite directions from the city and there is no direct road between them, so each is an out-and-back from Srinagar. The usual shape is three days with the same car: Pahalgam and its valleys on day one, Gulmarg and the gondola on day two, and the city or the airport on day three.' },
    { question: 'How much does a cab from Srinagar to Pahalgam or Gulmarg cost?', answer: 'Both legs are under the 300 km per day minimum, so for a given vehicle they cost the same: the minimum at ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, with tolls and parking extra at actual. A three-day round trip is three days at the minimum. The fare box on this page shows the figure for each vehicle.' },
    { question: 'When is the best time to visit Pahalgam and Gulmarg?', answer: 'Pahalgam from April to October, with the saffron bloom at Pampore on the way in late October. Gulmarg has three seasons: December to March for skiing, April to June for the green meadows and September to November for autumn colour. In July and August the Amarnath Yatra convoys use the Pahalgam road; from December to February snow closes in around Pahalgam and we run that road in daylight only.' },
    { question: 'What happens on the Pahalgam road during the Amarnath Yatra?', answer: 'In July and August the pilgrim convoys use the stretch from Anantnag up the Lidder valley, and there are timed halts to allow for. Chandanwari, above Pahalgam, is the road head for the Yatra. The road stays open to ordinary cars, but the drive takes longer and the town is full; June and September are the easier months if the Yatra is not the reason for your trip.' },
    { question: 'Can I go straight from Srinagar airport to Pahalgam or Gulmarg?', answer: 'Yes. The airport pages price the drop from arrivals to either, on the same roads from the airport side of the city. Gulmarg is the easier same-afternoon drive because it is the shorter road, and in the skiing months that is what most winter visitors do; Pahalgam the same afternoon works with a morning flight.' },
  ],

  related: [
    { label: 'Srinagar to Pahalgam one-way cab', sub: '95 km · sedan from ₹11/km', href: '/one-way-cab/srinagar-to-pahalgam', img: `${IMG}/Pahalgam/Pahalgam_hero_section.jpg` },
    { label: 'Srinagar to Gulmarg one-way cab', sub: '50 km · the same minimum', href: '/one-way-cab/srinagar-to-gulmarg', img: `${IMG}/Gulmarg/Gulmarg_hero_section.jpg` },
    { label: 'Srinagar airport to Pahalgam taxi', sub: 'Straight from arrivals up the Lidder', href: '/srinagar-airport-to-pahalgam-taxi', img: `${IMG}/Pahalgam/Lidder_River.jpg` },
    { label: 'Srinagar airport to Gulmarg taxi', sub: 'The same afternoon as the flight', href: '/srinagar-airport-to-gulmarg-taxi', img: `${IMG}/Gulmarg/Alpine_Meadows.jpg` },
    { label: 'Kashmir road trip from Delhi', sub: 'Srinagar, Pahalgam and Gulmarg in one itinerary', href: '/kashmir-road-trip-from-delhi', img: `${IMG}/Srinagar/Dal_Lake_Shikara.jpg` },
  ],
  guides: ['delhi-to-srinagar-by-road', 'shimla-to-manali-by-road', 'chandigarh-to-kasol-by-road', 'navratri-vaishno-devi-by-road', 'how-to-reach-kaza-from-delhi'],

  schema: {
    places: ['srinagar', 'pahalgam', 'gulmarg'],
    trip: {
      name: 'Srinagar to Pahalgam and Gulmarg by road',
      description: 'The two drives out of Srinagar: 95 km south-east on NH-44 to Anantnag and up the Lidder valley to Pahalgam in two to three hours, and 50 km west through Tangmarg to the meadow at Gulmarg in an hour and a half to two hours.',
      touristType: 'Road travellers',
      itinerary: [
        { name: 'Srinagar to Anantnag', text: '55 km south on NH-44 through Pampore, Awantipora and Bijbehara to the mid-point and the kahwa halt.' },
        { name: 'Anantnag to Pahalgam', text: '40 km up the Lidder valley road through Aishmuqam, beside the river and into the pines; Aru, Betaab and Chandanwari beyond.' },
        { name: 'Srinagar to Gulmarg', text: '50 km west across the valley to Tangmarg, then the climb through pine forest to the meadow and the gondola.' },
      ],
    },
    howTo: {
      name: 'How to drive from Srinagar to Pahalgam and Gulmarg',
      description: 'Take NH-44 south to Anantnag and the Lidder valley road to Pahalgam on one day, and the Tangmarg road to Gulmarg on another, out and back from Srinagar.',
      totalTime: 'PT3H',
      steps: [
        { name: 'Leave Srinagar at eight for Pahalgam', text: 'South on NH-44 through Pampore and Bijbehara; the highway to Anantnag goes quickly.' },
        { name: 'Kahwa at Anantnag, then the Lidder road', text: 'Leave the highway for the valley road through Aishmuqam; villages and horse carts set the pace.' },
        { name: 'Pahalgam and its valleys', text: 'Aru, Betaab and Chandanwari by the same car; a night in the town if all three are on the list.' },
        { name: 'Gulmarg on another morning', text: 'West to Tangmarg and up through the pines to the meadow; the gondola from the edge of it.' },
      ],
    },
  },
};
