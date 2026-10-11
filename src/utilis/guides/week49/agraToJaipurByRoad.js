// Week 49 route guide — Agra to Jaipur by road, the Golden Triangle's middle
// leg. The corridor has a booking page, a distance page and a toll page; this
// is the drive in order: Fatehpur Sikri in the first hour, the Rajasthan line,
// the Bharatpur two-lane and its wetland, the thin stretch to Dausa, the
// Abhaneri turn, and Amber on its ridge. Every distance, time and toll is the
// one those pages publish.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'agra-to-jaipur-by-road',
  path: '/agra-to-jaipur-by-road',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'agra to jaipur distance' },

  eyebrow: 'Road guide · Agra to Jaipur',
  crumbs: [{ name: 'Agra', url: '/agra' }, { name: 'Agra to Jaipur cab', url: '/agra-to-jaipur' }],
  crumbName: 'Agra to Jaipur by road',
  titleLead: 'Agra to Jaipur by road:',
  titleAccent: 'the Golden Triangle’s middle leg, with Fatehpur Sikri, Bharatpur and Abhaneri on the way',
  title: 'Agra to Jaipur by Road: The Golden Triangle’s Middle Leg, with Fatehpur Sikri, Bharatpur and Abhaneri on the Way',
  metaTitle: 'Agra to Jaipur by Road: 240 km, 4–5 hrs, Tolls ₹230',
  metaDescription: 'Agra to Jaipur by car: 240 km on NH-21 via Bharatpur and Dausa in 4–5 hours, two plazas totalling ₹230. Fatehpur Sikri, Keoladeo and the Abhaneri step-well on the way, and sedan fares from ₹3,300.',
  keywords: ['agra to jaipur distance', 'agra to jaipur by road', 'agra to jaipur by car', 'agra to jaipur cab', 'agra to jaipur via fatehpur sikri', 'agra to jaipur toll', 'agra to jaipur route', 'agra to jaipur taxi fare', 'agra to jaipur with abhaneri', 'golden triangle by road'],
  heroImage: `${IMG}/Jaipur/amber_fort.jpg`,
  heroAlt: 'Amber Fort on its ridge, the first sight of Jaipur at the end of the drive from Agra',

  lead: 'Agra to Jaipur is the Golden Triangle’s middle leg: 240 km on NH-21 via Bharatpur and Dausa, four to five hours, a plains road throughout, and the one day of the triangle where what sits beside the road matters more than the road. Fatehpur Sikri is inside the first hour, the Keoladeo wetland is just off the Bharatpur two-lane, the Chand Baori step-well at Abhaneri is a turn off the thin stretch to Dausa, and Amber Fort is on its ridge before Jaipur appears. Two plazas take ₹230 from a car. A sedan is ₹3,300 one way on the 300 km minimum.',
  keyFacts: [
    { label: 'Distance', value: '240 km · NH-21' },
    { label: 'Drive time', value: '4–5 hrs' },
    { label: 'Tolls, car one-way', value: '₹230 · 2 plazas' },
    { label: 'Sedan, one-way', value: '₹3,300' },
  ],
  stickyLabel: 'Agra–Jaipur cab',
  stickyPrice: 'Sedan ₹3,300',
  waText: 'Hi, I want a cab from Agra to Jaipur by road, with a stop at Fatehpur Sikri. Date and number of passengers to follow.',

  intro: [
    'Most people drive this leg on the second or third day of the Golden Triangle, with the Taj behind them and the pink city ahead, and treat it as a transfer. It is better than that. This guide takes the 240 km in order, says which of the three stops on the way are worth the time and how much time each costs, where to eat and where not to expect to, when to leave in each season, and what the drive costs on the rate card with and without the stops.',
    'Every figure is the one the rest of the site uses: the distance, time and stops from our distance page, the two plazas from the toll page, and the fares from the rate card, ₹11 a kilometre for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, tolls and parking at actuals.',
  ],

  timelineTitle: 'Agra to Jaipur, kilometre by kilometre',
  timelineEyebrow: 'NH-21 via Bharatpur and Dausa',
  timelineIntro: 'Kilometre marks are from the Taj end of Agra and the clock assumes an eight o’clock start with an hour at Fatehpur Sikri and breakfast at Bharatpur; without the stops the drive comes in at about four hours. The plazas are where the toll page puts them.',
  timeline: [
    { km: 0, name: 'Agra', time: '8 am', text: 'Out west on the Fatehpur Sikri road. If the Taj at sunrise is on the plan, do it first and leave at eight; the drive is short enough to carry a late start, which is not true of the other two legs of the triangle.', tag: 'Start', image: `${IMG}/Agra/Taj_mahal.jpg`, alt: 'The Taj Mahal at Agra in the early morning' },
    { km: 40, name: 'Fatehpur Sikri', time: '8.45 am', text: 'Akbar’s red sandstone capital up on its ridge, inside the first hour. An hour is enough for the Buland Darwaza, the Jama Masjid and the palace courtyards; the car waits at the foot of the ridge and the last stretch is by the official bus or on foot.', stop: 'One hour', image: `${IMG}/Agra/Fathepur_shikiri.jpg`, alt: 'The red sandstone courtyards of Fatehpur Sikri' },
    { km: 55, name: 'Bharatpur plaza', time: '10 am', text: 'You cross into Rajasthan soon after Fatehpur Sikri, and the first plaza, ₹105 for a car, comes up around Bharatpur. The road narrows to two lanes here for a while, with the Keoladeo wetland just off it.', tag: 'Toll ₹105' },
    { km: 60, name: 'Bharatpur', time: '10.15 am', text: 'Eat here. The section on to Dausa is the thin bit for food, so we tell guests to eat at Bharatpur or carry something. If the birds are the reason for the trip, Keoladeo is a half-day with a cycle-rickshaw inside the park, and January is the peak for the migrants.', stop: 'Breakfast', image: `${IMG}/Bharatpur/Migratory_Birds.jpg`, alt: 'Migratory birds at the Keoladeo wetland, Bharatpur' },
    { km: 120, name: 'The Abhaneri turn', time: '11.15 am', text: 'Beyond Bharatpur the country turns drier and more open, and somewhere on the thin stretch the turn for the Chand Baori step-well at Abhaneri branches off. The step-well is an hour, there and back with the visit; it is the stop people remember.', tag: 'Optional · one hour' },
    { km: 150, name: 'Dausa', time: '12 noon', text: 'The second plaza, ₹125, and the last sensible halt. Tea, a washroom, and the last chance to eat before Jaipur.', tag: 'Toll ₹125' },
    { km: 240, name: 'Jaipur', time: '1.30 pm', text: 'From Dausa the road rises gently into the hills that hold Amber Fort, which you see on its ridge before Jaipur appears. Have the driver go to the hotel; Amber and the old city are the next morning’s work with the same car.', tag: 'Arrive', image: `${IMG}/Jaipur/Hawa_Mahal.jpg`, alt: 'Hawa Mahal in the old city of Jaipur' },
  ],

  table: {
    title: 'Agra to Jaipur: the drive with and without the stops',
    caption: 'Agra to Jaipur by car on NH-21 with the three stops on the way compared: distance, time added, what each stop is, the car toll and when to take it',
    intro: 'Distance is one-way and does not change with the stops, which are all on or just off the road; the time does. Tolls are for a car at the two plazas the toll page lists; an SUV pays more at each.',
    columns: [
      { key: 'plan', label: 'Plan' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Time' },
      { key: 'what', label: 'What you get' },
      { key: 'tolls', label: 'Tolls, car', align: 'right' },
      { key: 'when', label: 'When to choose it', strong: true },
    ],
    rows: [
      { plan: 'Straight through', distance: '240 km', time: '4–5 hrs', what: 'The road, breakfast at Bharatpur, tea at Dausa', tolls: '₹230 (2 plazas)', when: 'When Jaipur has to be reached by lunch.' },
      { plan: 'With Fatehpur Sikri', distance: '240 km', time: 'Add an hour', what: 'Akbar’s capital on its ridge, inside the first hour of the drive', tolls: '₹230', when: 'Almost always. It is on the way and the drive can carry it.' },
      { plan: 'With Keoladeo, Bharatpur', distance: '240 km', time: 'Add half a day', what: 'The wetland by cycle-rickshaw; migrants peak in January', tolls: '₹230', when: 'In winter, for anyone who cares about birds; the day then ends at dusk in Jaipur.' },
      { plan: 'With Abhaneri (Chand Baori)', distance: '240 km plus the turn', time: 'Add an hour', what: 'The step-well off the thin stretch before Dausa', tolls: '₹230', when: 'When the Sikri hour is already spent and there is one more to give.' },
      { plan: 'Two-day round trip', distance: '480 km', time: '2 days', what: 'Jaipur and back to Agra with the same car', tolls: '₹460 (4 plazas)', when: 'When Agra is the base and Jaipur the excursion.' },
    ],
    footnote: 'Tolls from the Agra to Jaipur toll page: ₹105 at Bharatpur and ₹125 at Dausa for a car, both FASTag; ₹460 for a round trip. Rajasthan charges no separate state entry tax for cars on this road.',
  },

  sections: [
    {
      eyebrow: 'The road',
      heading: 'What is the Agra to Jaipur road like on NH-21?',
      paras: [
        'A plains road throughout, so its character comes from what sits beside it rather than any gradient. Out of Agra the highway passes Fatehpur Sikri inside the first hour, Akbar’s red sandstone capital up on its ridge, and you cross into Rajasthan soon after. Around Bharatpur the road narrows to two lanes for a while, with the Keoladeo wetland just off it, and the first toll comes up here. Beyond Bharatpur the country turns drier and more open. Our distance page puts the run at 240 km and four to five hours on a good national highway through the Rajasthan countryside, with Bharatpur and Dausa as the stops.',
        'The section to Dausa is the thin bit for food, so we tell guests to eat at Bharatpur or carry something; it is also where the turn for the Chand Baori step-well at Abhaneri branches off. Dausa is the second toll and the last sensible halt. From there the road rises gently into the hills that hold Amber Fort, which you see on its ridge before Jaipur appears, and that first sight of Amber is the best moment of the day.',
        'Winter is ideal, with the migratory birds at Bharatpur peaking in January; our distance page gives October to March. In May and June we leave Agra at first light, because the open country beyond Bharatpur holds the heat and a car that leaves at nine spends the hottest hours on the most exposed part of the road.',
      ],
      link: { label: 'Agra to Jaipur distance and route', href: '/distance/agra-to-jaipur' },
      image: { src: `${IMG}/Agra/Fathepur_shikiri.jpg`, alt: 'Fatehpur Sikri, Akbar’s capital on its ridge west of Agra', tag: 'Fatehpur Sikri · km 40', caption: 'Inside the first hour and on the way; the one stop that almost every drive should make.' },
    },
    {
      eyebrow: 'The three stops',
      heading: 'Which stops are worth making between Agra and Jaipur, and how long does each take?',
      paras: [
        'Fatehpur Sikri first, and almost always. It is 40 km out, on the road, and an hour covers the Buland Darwaza, the Jama Masjid and the palace courtyards; the car waits at the foot of the ridge and the last stretch up is by the official shuttle or on foot. The drive is short enough to carry the hour without changing the day, which is why the Sikri stop belongs on this leg rather than as a separate excursion from Agra.',
        'Keoladeo at Bharatpur is the second, and it is a half-day rather than a stop. The park is done by cycle-rickshaw with a guide, the migrants peak in January, and the wetland is at its fullest after a good monsoon. Make it on a winter drive when there is nothing waiting in Jaipur that evening; in summer the water is low and the birds are the residents only. Bharatpur is also where to eat, whether or not you go into the park, because the road on to Dausa has nothing worth stopping for.',
        'Abhaneri is the third: the Chand Baori step-well, thirteen storeys of steps down to the water, off the thin stretch before Dausa. It is an hour there and back with the visit, and it is the stop people remember and photograph. Take it when the Sikri hour is already spent and there is one more to give; take all three only on a winter day that started at the Taj at sunrise and is content to reach Jaipur at dusk.',
      ],
      bullets: [
        'Fatehpur Sikri, km 40: one hour, on the road. Almost always.',
        'Keoladeo, Bharatpur, km 60: half a day by cycle-rickshaw; January for the migrants. Winter only.',
        'Abhaneri, off the road before Dausa: one hour there and back. When there is an hour to give.',
      ],
      link: { label: 'Agra to Jaipur toll cost', href: '/toll-cost/agra-to-jaipur' },
    },
    {
      eyebrow: 'The triangle',
      heading: 'How does the Agra to Jaipur leg fit into the Golden Triangle by road?',
      paras: [
        'It is the middle leg and the short one. Delhi to Agra is 230 km on the Yamuna Expressway in three to four hours; Agra to Jaipur is 240 km in four to five; Jaipur back to Delhi is 280 km on the Delhi–Jaipur highway in four to five. The Agra to Jaipur day is therefore the one with room in it: the Taj at sunrise, Fatehpur Sikri at nine, breakfast at Bharatpur, Jaipur by early afternoon with time for Hawa Mahal and the bazaars before dark, and Amber the next morning.',
        'Driven the other way, Delhi, Jaipur, Agra, the same leg runs east: Amber and the city in the morning, Dausa, Abhaneri, Bharatpur, Fatehpur Sikri in the late afternoon light, which is when its sandstone is best, and Agra by dusk with the Taj the next dawn. Both directions work; the difference is whether Fatehpur Sikri gets the morning or the evening, and the evening is prettier.',
        'One car for the whole triangle is the way to do it, because the same driver carries the parking, the timing and the stops from city to city and because the three legs together, 750 km over three or four days, bill at the rate card with no repositioning. The individual legs are each under or near the 300 km minimum; see the cost section for what that means.',
      ],
      link: { label: 'Golden Triangle tour packages', href: '/blog/golden-triangle-delhi-agra-jaipur-tour-guide-2026' },
      image: { src: `${IMG}/Jaipur/city_palace.jpg`, alt: 'The City Palace at Jaipur', tag: 'Jaipur · the afternoon', side: 'left', caption: 'Jaipur by early afternoon on this leg, with Hawa Mahal and the bazaars before dark and Amber the next morning.' },
    },
    {
      eyebrow: 'Timing',
      heading: 'What time should I leave Agra for Jaipur?',
      paras: [
        'Eight, on most days, and that is the luxury of this leg. The drive is four to five hours, so a departure after the Taj at sunrise still reaches Jaipur by early afternoon with Fatehpur Sikri and breakfast on the way. Leave at eight and Sikri is quiet, Bharatpur is breakfast rather than lunch, and Dausa is behind you before the heat of the day.',
        'In May and June the advice changes to first light, because the open country beyond Bharatpur has no shade and the stretch to Dausa is the hottest part of the road at midday; on those days the Taj gets the previous evening and the car leaves at six. In the winter fog weeks the drivers leave later rather than earlier, but this road fogs less than the Yamuna Expressway and the delay is rarely more than an hour.',
        'The one plan to avoid is a late-afternoon departure with all three stops. Fatehpur Sikri closes with the light, Keoladeo is not a place to be at dusk, and Abhaneri is off the road; a car that leaves Agra at two reaches Jaipur in the dark having seen none of them.',
      ],
      link: { label: 'Agra sightseeing tours', href: '/sightseeing/agra' },
      image: { src: `${IMG}/Agra/Mehtab_Bagh.jpg`, alt: 'The Taj Mahal seen across the river from Mehtab Bagh, Agra', tag: 'Agra · before you leave', caption: 'The Taj at sunrise, then eight o’clock on the road: the drive is short enough to carry it.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Agra to Jaipur cost?',
      paras: [
        'Jaipur is 240 km, and outstation cabs bill a 300 km per day minimum, so the one-way fare is the minimum: ₹3,300 for a sedan at ₹11 a kilometre, ₹4,500 for an Ertiga or similar SUV at ₹15, ₹5,400 for an Innova Crysta at ₹18 and ₹6,900 for a 12-seater Tempo Traveller at ₹23. Fuel and the driver are inside those figures; the ₹230 of tolls each way for a car, the parking at Fatehpur Sikri and Abhaneri and the Keoladeo entry are at actuals and appear on the bill. The stops on the way add no kilometres to speak of, and the Abhaneri turn is inside the minimum.',
        'A two-day round trip with the same car and driver is the greater of twice the one-way fare or two days at the minimum, and on this corridor they come to the same thing: ₹6,600 for a sedan, ₹9,000 for an SUV, ₹10,800 for an Innova Crysta and ₹13,800 for a Tempo Traveller. The Golden Triangle as a whole, Delhi to Agra to Jaipur to Delhi, is 750 km over three days, which bills as 900 km at the minimum: ₹9,900 for a sedan, with a fourth day for Amber and the city adding 300 km at the rate.',
        'One-way is the right booking for the triangle, where the car carries on rather than returning; the round trip is right when Agra is the base. The Golden Triangle packages on the site bundle the three legs with the stops; the fare arithmetic above is what sits underneath them.',
      ],
      link: { label: 'Agra to Jaipur one-way cab', href: '/one-way-cab/agra-to-jaipur' },
    },
  ],

  fare: {
    title: 'Agra to Jaipur on the rate card',
    note: 'Rate-card fares for the 240 km drive, which bills the 300 km minimum. The two-day figure is for Agra as the base; on the Golden Triangle the leg is booked one-way and the car carries on.',
    caption: 'Agra to Jaipur cab fare by vehicle, one-way and two-day round trip',
    distanceKm: 240,
    roundTrip: true,
    days: 2,
    roundLabel: 'Two-day round trip',
    footnote: 'Tolls ₹230 each way for a car, parking at Fatehpur Sikri and Abhaneri and the Keoladeo entry at actual. No festival or weekend surcharge.',
    waText: 'Hi, I want an Agra to Jaipur cab with a stop at Fatehpur Sikri. Please share the fare for my dates and number of passengers.',
    bookHref: '/agra-to-jaipur',
    bookLabel: 'Agra to Jaipur cab',
    cta: 'Book the Jaipur cab',
  },

  galleryTitle: 'What the 240 km buys you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Agra/Fathepur_shikiri.jpg`, title: 'Fatehpur Sikri', text: 'One hour, inside the first hour of the road.', tag: 'km 40' },
    { image: `${IMG}/Bharatpur/Bird_Sanctuary.jpg`, title: 'Keoladeo, Bharatpur', text: 'Half a day by cycle-rickshaw; January for the migrants.', tag: 'km 60 · winter' },
    { image: `${IMG}/Bharatpur/Lohagarh_Fort.jpg`, title: 'Lohagarh Fort', text: 'In Bharatpur town, if the park is not the plan.', tag: 'Bharatpur' },
    { image: `${IMG}/Jaipur/amber_fort.jpg`, title: 'Amber on its ridge', text: 'The first sight of Jaipur, from the rise beyond Dausa.', tag: 'km 230' },
    { image: `${IMG}/Jaipur/Hawa_Mahal.jpg`, title: 'Hawa Mahal', text: 'The afternoon in Jaipur, before dark.', tag: 'km 240' },
    { image: `${IMG}/Jaipur/Jal_Mahal.jpg`, title: 'Jal Mahal', text: 'On the Amber road, the next morning.', tag: 'Day 2' },
  ],

  tips: [
    { title: 'Eat at Bharatpur', text: 'The road on to Dausa is the thin bit for food. Breakfast at Bharatpur, tea at Dausa, and nothing in between except the Abhaneri turn.' },
    { title: 'Sikri in the morning going west, in the evening going east', text: 'The sandstone is best in low light. On the Agra to Jaipur day it gets nine o’clock; on the Jaipur to Agra day it gets five.' },
    { title: 'FASTag for two plazas', text: 'Bharatpur and Dausa, ₹230 for a car one way. Our cars carry a live tag; if you are following in your own car, top it up in Agra.' },
  ],

  faqs: [
    { question: 'What is the distance from Agra to Jaipur by road?', answer: '240 km on NH-21 via Bharatpur and Dausa, four to five hours by our distance page. It is a plains road throughout, four-lane for most of its length with a two-lane section around Bharatpur, and it rises gently into the hills that hold Amber Fort just before Jaipur.' },
    { question: 'How long does it take to drive from Agra to Jaipur?', answer: 'Four to five hours straight through, and about four with an eight o’clock start and breakfast at Bharatpur. Fatehpur Sikri adds an hour, Abhaneri adds an hour, and Keoladeo at Bharatpur adds half a day; with all three the drive is a full winter day from the Taj at sunrise to Jaipur at dusk.' },
    { question: 'How much is the toll from Agra to Jaipur?', answer: '₹230 one way for a car across two plazas, by our toll page: ₹105 at Bharatpur and ₹125 at Dausa, both FASTag. A round trip is ₹460. An SUV pays more at each plaza. Rajasthan charges no separate state entry tax for cars on this road.' },
    { question: 'What is the cab fare from Agra to Jaipur?', answer: 'Jaipur is 240 km and outstation cabs bill a 300 km per day minimum, so one-way is ₹3,300 for a sedan at ₹11/km, ₹4,500 for an Ertiga or SUV at ₹15, ₹5,400 for an Innova Crysta at ₹18 and ₹6,900 for a 12-seater Tempo Traveller at ₹23. A two-day round trip is ₹6,600, ₹9,000, ₹10,800 and ₹13,800. Tolls and parking are extra at actuals; the stops on the way add no kilometres to speak of.' },
    { question: 'Can I stop at Fatehpur Sikri on the way from Agra to Jaipur?', answer: 'Yes, and almost every drive should. It is 40 km out of Agra on the road to Jaipur, inside the first hour, and an hour covers the Buland Darwaza, the Jama Masjid and the palace courtyards. The car waits at the foot of the ridge; the last stretch is by the official shuttle or on foot. The drive is short enough to carry the hour without changing the day.' },
    { question: 'Is Abhaneri (Chand Baori) on the way from Agra to Jaipur?', answer: 'Just off it. The turn for the step-well branches off the stretch between Bharatpur and Dausa, and the visit is an hour there and back. It is the stop people remember; take it when the Fatehpur Sikri hour is already spent and there is one more to give. The turn is inside the 300 km minimum and adds nothing to the fare.' },
    { question: 'What is the best time to drive from Agra to Jaipur?', answer: 'October to March by our distance page, and winter is ideal, with the migratory birds at Keoladeo peaking in January. In May and June the open country beyond Bharatpur holds the heat, so we leave Agra at first light on those days. The road fogs less than the Yamuna Expressway in the winter weeks.' },
    { question: 'Where does the car stop in Jaipur, and can I see Amber on the way in?', answer: 'The hotel first. Amber Fort is on its ridge on the way in from Dausa and you see it before Jaipur appears, but the fort itself faces the Delhi road on the far side of the city and belongs to the next morning with the same car, along with Jal Mahal on the way out to it. The afternoon of arrival is for Hawa Mahal, the City Palace and the bazaars, which are on foot from where the car drops you.' },
  ],

  related: [
    { label: 'Agra to Jaipur cab', sub: '240 km · from ₹3,300', href: '/agra-to-jaipur', img: `${IMG}/Jaipur/jaipur_hero_section.jpg` },
    { label: 'Agra to Jaipur toll cost', sub: 'Two plazas, ₹230 one-way', href: '/toll-cost/agra-to-jaipur', img: `${IMG}/Agra/agra_fort.jpg` },
    { label: 'Agra to Jaipur distance', sub: 'Route, stops and best time', href: '/distance/agra-to-jaipur', img: `${IMG}/Jaipur/amber_fort.jpg` },
    { label: 'Jaipur to Udaipur by road', sub: 'The long side of the Rajasthan triangle', href: '/jaipur-to-udaipur-by-road', img: `${IMG}/Udaipur/Lake_Pichola.jpg` },
    { label: 'Tourist places within 100 km of Agra', sub: 'Fatehpur Sikri, Bharatpur, Mathura', href: '/tourist-places-within-100-km-of-agra', img: `${IMG}/Agra/Fathepur_shikiri.jpg` },
    { label: 'Golden Triangle tour packages', sub: 'Delhi, Agra and Jaipur with one car', href: '/blog/golden-triangle-delhi-agra-jaipur-tour-guide-2026', img: `${IMG}/Agra/Taj_mahal.jpg` },
    { label: 'Jaipur sightseeing tours', sub: 'Amber, the city and the bazaars', href: '/sightseeing/jaipur', img: `${IMG}/Jaipur/Hawa_Mahal.jpg` },
    { label: 'Bharatpur sightseeing tours', sub: 'Keoladeo and Lohagarh', href: '/bharatpur', img: `${IMG}/Bharatpur/Migratory_Birds.jpg` },
  ],
  guides: ['jaipur-to-udaipur-by-road', 'tourist-places-within-100-km-of-agra', 'delhi-to-vrindavan-by-car', 'udaipur-mount-abu-chittorgarh-by-road', 'weekend-getaways-near-me'],

  schema: {
    places: ['agra', 'jaipur', 'bharatpur'],
    trip: {
      name: 'Agra to Jaipur by car on NH-21',
      description: 'The 240 km drive from Agra to Jaipur on NH-21 via Bharatpur and Dausa in four to five hours, with Fatehpur Sikri, the Keoladeo wetland and the Abhaneri step-well on the way and Amber Fort on its ridge before Jaipur.',
      touristType: 'Road travellers',
      lowPrice: 3300,
      highPrice: 13800,
      itinerary: [
        { name: 'Agra to Fatehpur Sikri', text: '40 km west; an hour at Akbar’s capital on its ridge, the car waiting at the foot.' },
        { name: 'Fatehpur Sikri to Bharatpur', text: 'Across the Rajasthan line to the first plaza and the two-lane section past the Keoladeo wetland; breakfast at Bharatpur.' },
        { name: 'Bharatpur to Dausa', text: 'The thin stretch through drier, open country, with the Abhaneri turn for the Chand Baori step-well; the second plaza and the last halt at Dausa.' },
        { name: 'Dausa to Jaipur', text: 'The road rises gently into the hills that hold Amber Fort, seen on its ridge before Jaipur appears.' },
      ],
    },
    howTo: {
      name: 'How to drive from Agra to Jaipur',
      description: 'Leave Agra at eight after the Taj at sunrise, give Fatehpur Sikri an hour, eat at Bharatpur, take the Abhaneri turn if there is an hour to give, halt at Dausa, and reach Jaipur by early afternoon.',
      totalTime: 'PT5H30M',
      estimatedCost: { currency: 'INR', value: 3300 },
      steps: [
        { name: 'Leave Agra by eight', text: 'Out west on the Fatehpur Sikri road; from May to June leave at first light instead.' },
        { name: 'An hour at Fatehpur Sikri', text: '40 km out, inside the first hour; the car waits at the foot of the ridge and the last stretch is by the official shuttle or on foot.' },
        { name: 'Eat at Bharatpur', text: 'The first plaza and the two-lane section past Keoladeo; breakfast here because the road on to Dausa has nothing.' },
        { name: 'Dausa, then Jaipur', text: 'The Abhaneri turn if there is an hour to give, the second plaza and the last halt at Dausa, then the gentle rise to Amber on its ridge and Jaipur by early afternoon.' },
      ],
    },
  },
};
