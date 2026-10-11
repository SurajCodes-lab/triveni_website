// Week 49 route guide — Delhi to Lansdowne by road. The corridor has a booking
// page, a distance page and a travel-by-car page but no toll page, so no toll
// figure is given except the expressway plaza the Delhi to Rishikesh toll page
// prices. The kilometre marks between Khatauli and Kotdwar are approximate
// and the guide says so; the 270 km total, the 70 km to Meerut and the 40 km
// ghat are the site's own figures.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'delhi-to-lansdowne-by-road',
  path: '/delhi-to-lansdowne-by-road',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'delhi to lansdowne distance' },

  eyebrow: 'Road guide · Delhi to Lansdowne',
  crumbs: [{ name: 'Delhi to Lansdowne distance', url: '/distance/delhi-to-lansdowne' }, { name: 'Delhi to Lansdowne cab', url: '/one-way-cab/delhi-to-lansdowne' }],
  crumbName: 'Delhi to Lansdowne by road',
  titleLead: 'Delhi to Lansdowne by road:',
  titleAccent: 'the cane belt, Kotdwar and forty kilometres of ghat',
  title: 'Delhi to Lansdowne by Road: The Cane Belt, Kotdwar and Forty Kilometres of Ghat',
  metaTitle: 'Delhi to Lansdowne by Road: 270 km, 6–7 hrs via Kotdwar',
  metaDescription: 'Delhi to Lansdowne by car: 270 km and 6–7 hours via Meerut, Bijnor and Kotdwar, then a 40 km ghat through Dugadda. Where to eat, where to draw cash, the months that matter, and sedan fares from ₹3,300.',
  keywords: ['delhi to lansdowne distance', 'delhi to lansdowne by road', 'delhi to lansdowne by car', 'delhi to lansdowne cab', 'delhi to lansdowne route', 'delhi to lansdowne via kotdwar', 'kotdwar to lansdowne road', 'delhi to lansdowne taxi fare', 'lansdowne road condition'],
  heroImage: `${IMG}/Lansdowne/Tip_n_Top_Viewpoint.jpg`,
  heroAlt: 'Tip n Top viewpoint above the pine forest at Lansdowne',

  lead: 'Delhi to Lansdowne is two roads in one: 270 km and six to seven hours by our distance page, via Meerut, Bijnor and Kotdwar. The first road is the plains run, the Delhi–Meerut Expressway out of Ghaziabad and then the slower state highway through the sugarcane belt of western UP to Kotdwar. The second begins at Kotdwar: forty kilometres of proper ghat through Dugadda, narrow and twisting, first through sal and then into oak and pine as the air cools. We take the ghat in daylight. A sedan is ₹3,300 one way on the 300 km minimum.',
  keyFacts: [
    { label: 'Distance', value: '270 km · via Kotdwar' },
    { label: 'Drive time', value: '6–7 hrs' },
    { label: 'The ghat', value: '40 km from Kotdwar' },
    { label: 'Sedan, one-way', value: '₹3,300' },
  ],
  stickyLabel: 'Delhi–Lansdowne cab',
  stickyPrice: 'Sedan ₹3,300',
  waText: 'Hi, I want a cab from Delhi to Lansdowne by road. Date and number of passengers to follow.',

  intro: [
    'Lansdowne is the quiet alternative to Mussoorie and Nainital, a cantonment on a ridge with no mall road to speak of, and the drive there is why it stays quiet: a long plains run through cane country and then a ghat that most day-trippers will not do. This guide takes the 270 km in order, says where the halts, the cash and the daylight matter, gives the months when the cane trolleys and the monsoon slips change the plan, and works the fare on the rate card.',
    'The distance, time and stops are from our distance page and travel-by-car page for the corridor, the road notes are our drivers’, and the fares are the rate card: ₹11 a kilometre for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, tolls and parking at actuals. This corridor has no toll page yet, so the only plaza priced here is the expressway one, which our Delhi to Rishikesh toll page puts at ₹120 for a car; the rest are paid on FASTag and appear on the bill.',
  ],

  timelineTitle: 'Delhi to Lansdowne, kilometre by kilometre',
  timelineEyebrow: 'Expressway, cane belt, ghat',
  timelineIntro: 'Kilometre marks are from central Delhi. The 270 km total, the 70 km to Meerut, the Khatauli halt and the 40 km ghat are the site’s own figures; the marks between Khatauli and Kotdwar are approximate. The clock assumes a five o’clock start, which is the one that puts the ghat in daylight with time to spare.',
  timeline: [
    { km: 0, name: 'Delhi', time: '5 am', text: 'Join the Delhi–Meerut Expressway at Sarai Kale Khan, or at the Ghazipur and Dasna entries from east Delhi, Noida and Ghaziabad. Quick if you are on it before the morning rush; an hour slower if you are not.', tag: 'Start', image: `${IMG}/Delhi/India_Gate.jpg`, alt: 'India Gate, Delhi, before dawn' },
    { km: 35, name: 'Expressway plaza', time: '5.30 am', text: 'The expressway plaza, ₹120 for a car on our Rishikesh toll page and FASTag only; there are no cash lanes. Our cars carry a live tag.', tag: 'Toll ₹120' },
    { km: 70, name: 'Meerut', time: '6 am', text: 'The expressway ends on the Meerut bypass. From here the road is the state highway through the cane belt, and in the crushing months from November to March the tractor trolleys piled high with cane crawl along the edge and cut everyone’s speed.', tag: 'The cane belt begins' },
    { km: 110, name: 'Khatauli', time: '6.45 am', text: 'Cheetal Grand, the breakfast halt of the whole Uttarakhand-bound trade, with a clean washroom. Twenty minutes; it is the last proper stop before the hill.', stop: 'Breakfast' },
    { km: 160, name: 'Bijnor', time: '8 am', text: 'East across the Ganga into the Bijnor district and on through the sugar towns. This is the slow, flat middle of the drive: two-lane, tractors, level crossings, and nothing to do but let the driver work through it.', tag: 'Approximate mark' },
    { km: 200, name: 'Najibabad', time: '8.45 am', text: 'The last town on the plain. The Terai forest closes in beyond it and the Shivalik line is ahead.', tag: 'Approximate mark' },
    { km: 230, name: 'Kotdwar', time: '9.30 am', text: 'A pause at the Sidhbali Baba temple outside the town, and then two errands: draw cash at Kotdwar, because there is no ATM in Lansdowne, and check the time, because the ghat begins here and we take it in daylight.', stop: 'Cash and the temple', image: `${IMG}/Lansdowne/St_Marys_Church.jpg`, alt: 'St Mary’s Church at Lansdowne' },
    { km: 270, name: 'Lansdowne', time: '10.45 am', text: 'Forty kilometres of proper ghat through Dugadda: narrow, twisting, with sections that have no parapet, first through sal and then into oak and pine as the air cools. An hour and a quarter for the forty kilometres is honest. The cantonment is at the top; Bhulla Lake, Tip n Top and St Mary’s are all within it.', tag: 'Arrive', image: `${IMG}/Lansdowne/Bhulla_Lake.jpg`, alt: 'Bhulla Lake at Lansdowne' },
  ],

  table: {
    title: 'Delhi to Lansdowne: the drive by season',
    caption: 'Delhi to Lansdowne by car through the year: what the cane belt, the ghat and the weather do to the drive in each season, and when to leave',
    intro: 'The road does not change; the plain and the ghat do. Distance is 270 km one-way in every season. Times are the distance page’s six to seven hours, with what each season adds.',
    columns: [
      { key: 'season', label: 'Season' },
      { key: 'plain', label: 'The plain to Kotdwar' },
      { key: 'ghat', label: 'The ghat to Lansdowne' },
      { key: 'top', label: 'At Lansdowne' },
      { key: 'leave', label: 'Leave Delhi', strong: true },
    ],
    rows: [
      { season: 'March to June', plain: 'Clear and quick; hot by ten from May', ghat: 'Dry and open; the sal forest is at its greenest in March', top: 'Cool on the ridge while the plain bakes; the best season by our distance page', leave: 'Five o’clock, to be on the ghat by half past nine' },
      { season: 'July and August', plain: 'Wet; the state highway floods in patches after heavy rain', ghat: 'Small slips can close the road for hours; our drivers check before Kotdwar', top: 'Mist, leeches on the forest walks, and the cantonment at its quietest', leave: 'Five o’clock, and be ready to wait at Kotdwar' },
      { season: 'September to November', plain: 'The best driving of the year on the plain; the cane is standing, not moving', ghat: 'Dry, with the clearest views from Tip n Top after the rains', top: 'The second good season by the distance page; Diwali week is the busy one', leave: 'Five o’clock' },
      { season: 'November to March', plain: 'The crushing months: cane trolleys crawl along the edge and cut everyone’s speed', ghat: 'Misty in January mornings; snow is rare', top: 'Close to freezing on January mornings; warm layers', leave: 'Five o’clock still, but expect an hour more on the plain' },
    ],
    footnote: 'There is no ATM in Lansdowne; draw cash at Kotdwar. The expressway plaza is FASTag only. Uttarakhand does not charge a separate state entry tax for cars.',
  },

  sections: [
    {
      eyebrow: 'The plain',
      heading: 'What is the Delhi to Lansdowne road like as far as Kotdwar?',
      paras: [
        'The first road is the plains run out of Ghaziabad on the Delhi–Meerut Expressway, quick if you are on it before the morning rush, then the slower state highway through the sugarcane belt of western UP. Our distance page gives the corridor as 270 km and six to seven hours via Meerut, Bijnor and Kotdwar, with the road quality mixed: good highway initially, mountain roads after Kotdwar. The expressway is the good highway; the cane belt is where the description turns honest.',
        'In the crushing months from November to March the tractor trolleys piled high with cane crawl along the edge of the state highway and cut everyone’s speed, and there is nothing to be done about it except leave early and let the driver work through the sugar towns. Cheetal Grand at Khatauli is the halt for breakfast and a clean washroom; after that it is Bijnor, Najibabad and a pause at the Sidhbali Baba temple outside Kotdwar, and the food between Khatauli and Kotdwar is dhaba tea rather than a meal.',
        'Draw cash at Kotdwar, because there is no ATM in Lansdowne. It is the one piece of practical advice that every driver on this corridor repeats, and the one that every first-time visitor wishes they had been told.',
      ],
      link: { label: 'Delhi to Lansdowne distance and route', href: '/distance/delhi-to-lansdowne' },
      image: { src: `${IMG}/Lansdowne/lansdowne_hero_section.jpg`, alt: 'Lansdowne cantonment on its ridge among the pines', tag: 'Lansdowne · km 270', caption: 'The ridge at the top of the ghat; the plain to Kotdwar is the price of its quiet.' },
    },
    {
      eyebrow: 'The ghat',
      heading: 'What is the Kotdwar to Lansdowne ghat like, and is it safe?',
      paras: [
        'The second road begins at Kotdwar: forty kilometres of proper ghat through Dugadda, narrow, twisting, with sections that have no parapet, first through sal and then into oak and pine as the air cools. It is a real hill road rather than a highway with bends, and it is the reason Lansdowne stays quiet. Our drivers run it regularly and take it in daylight, which is the whole of the safety advice: a five o’clock start from Delhi has you at Kotdwar by half past nine and on the ridge before eleven, with the ghat done in good light and no reason to hurry it.',
        'In July and August small slips can close the road for hours; the drivers check at Kotdwar before starting the climb, and on a bad day the wait is at the Sidhbali Baba temple rather than on the hill. In January the mornings are misty on the ghat and the cantonment sits close to freezing, though snow is rare. In the dry months, March to June and September to November, which our distance page gives as the seasons, the ghat is open, the sal is green and the views from the top are the clearest of the year.',
        'A sedan is the right car for this road. It is narrow, and the hairpins through Dugadda favour a shorter wheelbase; an Innova Crysta is fine and a 12-seater Tempo Traveller is driven regularly but slowly. The forty kilometres take an hour and a quarter in a car and longer in the Tempo, and the driver will not be talked into making them faster.',
      ],
      bullets: [
        'Kotdwar is the last flat ground, the last ATM and the last proper food. Do all three there.',
        'Forty kilometres of ghat, an hour and a quarter, in daylight. Leave Delhi at five and it is.',
        'July and August: slips can close the road for hours. The driver checks at Kotdwar before climbing.',
      ],
      link: { label: 'Delhi to Lansdowne by car, leg by leg', href: '/travel-by-car/delhi-to-lansdowne' },
    },
    {
      eyebrow: 'Why Lansdowne',
      heading: 'Is Lansdowne worth the drive from Delhi compared with Mussoorie or Nainital?',
      paras: [
        'If quiet is the point, yes. Our distance page calls it the less crowded alternative to Mussoorie, and the drive is why: Mussoorie has a four-lane highway to the foot of its hill and a broad ghat above it, Nainital the same, and both fill on every long weekend. Lansdowne has the cane belt and a forty-kilometre single-carriageway ghat, and the day-trip trade does not come. What you get at the top is a cantonment on a ridge, Bhulla Lake, the Tip n Top viewpoint over the pine forest, St Mary’s Church, and evenings with nobody on the road.',
        'What you do not get is a mall road, a lake with boats for hire, or a choice of restaurants. Lansdowne is two nights of walks and a fireplace, not a resort, and the visitors who are happiest there are the ones who wanted exactly that. Families with small children who need a lake and a market are better served by Nainital, 300 km on NH-9 with a broad ghat from Kathgodam; couples and readers are better served here.',
        'The drive is also the honest comparison. Delhi to Mussoorie and Delhi to Nainital are both about six to seven hours, the same as Lansdowne, but their hours are mostly highway; Lansdowne’s are the cane belt and the ghat. Give the plain a five o’clock start and the ghat the late morning and it is a good day; give it a nine o’clock start and it is a long one with the hill in the afternoon.',
      ],
      link: { label: 'Hill stations near Gurgaon and Noida', href: '/hill-stations-near-gurgaon-noida' },
      image: { src: `${IMG}/Lansdowne/Tip_n_Top_Viewpoint.jpg`, alt: 'The view over the pine forest from Tip n Top, Lansdowne', tag: 'Tip n Top · the reason', side: 'left', caption: 'The viewpoint over the pines: the cantonment’s answer to a mall road.' },
    },
    {
      eyebrow: 'Timing',
      heading: 'What time should I leave Delhi for Lansdowne?',
      paras: [
        'Five in the morning, in every season, and the reason is the ghat rather than the traffic. A five o’clock start has you on the expressway before the city wakes, at Khatauli for breakfast by a quarter to seven, through the cane belt by half past nine and at Kotdwar with the whole of the late morning for the forty kilometres of hill. Leave at eight and the plain is slower, Kotdwar is lunchtime, and the ghat is the afternoon, which in the monsoon is the wrong time to be on it.',
        'In the crushing months from November to March add an hour on the plain for the cane trolleys and still leave at five; the arrival is noon rather than eleven and the ghat is still in daylight. In July and August leave at five and be prepared to wait at Kotdwar if the drivers report a slip; the wait is at the temple, with tea, and it is rarely more than the hours it takes the road crew to clear the hill.',
        'For the return, leave Lansdowne after breakfast. The ghat down is the same forty kilometres, the plain is the same cane belt, and a nine o’clock departure from the ridge reaches Delhi by late afternoon before the evening rush at the Meerut end of the expressway. An afternoon departure from Lansdowne puts the cane belt at dusk and the expressway at the evening peak, and it is the one plan to avoid.',
      ],
      link: { label: 'Delhi to Rishikesh shortest route', href: '/delhi-to-rishikesh-shortest-route' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Delhi to Lansdowne cost?',
      paras: [
        'Lansdowne is 270 km, and outstation cabs bill a 300 km per day minimum, so the one-way fare is the minimum: ₹3,300 for a sedan at ₹11 a kilometre, ₹4,500 for an Ertiga or similar SUV at ₹15, ₹5,400 for an Innova Crysta at ₹18 and ₹6,900 for a 12-seater Tempo Traveller at ₹23. Fuel and the driver are inside those figures; the plazas on the way, the expressway one at ₹120 for a car and the rest at actuals, the parking at Lansdowne and the driver’s night halt are paid at actuals and appear on the bill. There is no hill surcharge for the ghat.',
        'A two-day round trip with the same car and driver is the greater of twice the one-way fare or two days at the minimum, and on this corridor they come to the same thing: ₹6,600 for a sedan, ₹9,000 for an SUV, ₹10,800 for an Innova Crysta and ₹13,800 for a Tempo Traveller. Lansdowne is usually two nights rather than one, and a third day adds 300 km at the vehicle’s rate; the car is not needed on the ridge, where everything is on foot, so the middle day is the driver’s rest.',
        'One-way is the right booking only if the return is by another road or another car, which on this corridor is rare; the round trip is the usual booking, and the cheaper way to have the car waiting for the drive down. Tell us at booking if the party is more than four, because the Tempo Traveller takes the ghat slowly and the day is planned around it.',
      ],
      link: { label: 'Delhi to Lansdowne cab', href: '/one-way-cab/delhi-to-lansdowne' },
    },
  ],

  fare: {
    title: 'Delhi to Lansdowne on the rate card',
    note: 'Rate-card fares for the 270 km drive, which bills the 300 km minimum. The two-day figure is the usual weekend; Lansdowne is often two nights, and a third day adds 300 km at the vehicle’s rate.',
    caption: 'Delhi to Lansdowne cab fare by vehicle, one-way and two-day round trip',
    distanceKm: 270,
    roundTrip: true,
    days: 2,
    roundLabel: 'Two-day round trip',
    footnote: 'Tolls at actuals (the expressway plaza is ₹120 for a car), Lansdowne parking and the driver’s night halt at actual. No hill surcharge. Draw cash at Kotdwar; there is no ATM in Lansdowne.',
    waText: 'Hi, I want a Delhi to Lansdowne cab. Please share the fare for my dates and number of passengers.',
    bookHref: '/round-trip/delhi-to-lansdowne',
    bookLabel: 'Delhi to Lansdowne cab',
    cta: 'Book the Lansdowne cab',
  },

  galleryTitle: 'What the 270 km buys you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Lansdowne/Bhulla_Lake.jpg`, title: 'Bhulla Lake', text: 'The cantonment’s lake, a walk from the bazaar.', tag: 'km 270' },
    { image: `${IMG}/Lansdowne/Tip_n_Top_Viewpoint.jpg`, title: 'Tip n Top', text: 'The viewpoint over the pines; clearest after the rains.', tag: 'Sep–Nov' },
    { image: `${IMG}/Lansdowne/St_Marys_Church.jpg`, title: 'St Mary’s Church', text: 'The cantonment church, and the quiet the drive buys.', tag: 'Lansdowne' },
    { image: `${IMG}/Lansdowne/lansdowne_hero_section.jpg`, title: 'The ridge', text: 'Oak and pine at the top of forty kilometres of ghat.', tag: 'The top' },
    { image: `${IMG}/Haridwar/Har_Ki_Pauri.jpg`, title: 'Haridwar, the other way home', text: 'The forest road from Kotdwar reaches Haridwar; a different return if the plan allows.', tag: 'Optional' },
  ],

  tips: [
    { title: 'Cash at Kotdwar', text: 'There is no ATM in Lansdowne. Kotdwar is the last town on the plain and the last chance; every driver on the corridor says so.' },
    { title: 'Five o’clock, for the ghat not the traffic', text: 'The forty kilometres from Kotdwar are taken in daylight. A five o’clock start puts them in the late morning with hours to spare; an eight o’clock start puts them in the afternoon.' },
    { title: 'Cane season adds an hour', text: 'From November to March the trolleys crawl along the state highway and cut everyone’s speed. Leave at five anyway and arrive at noon.' },
  ],

  faqs: [
    { question: 'What is the distance from Delhi to Lansdowne by road?', answer: '270 km and six to seven hours by our distance page, via Meerut, Bijnor and Kotdwar: the Delhi–Meerut Expressway, then the state highway through the sugarcane belt of western UP to Kotdwar, then forty kilometres of ghat through Dugadda to the cantonment.' },
    { question: 'How long does the Kotdwar to Lansdowne ghat take?', answer: 'About an hour and a quarter for the forty kilometres in a car, longer in a Tempo Traveller. The road is narrow and twisting with sections that have no parapet, first through sal and then oak and pine; our drivers take it in daylight and do not hurry it.' },
    { question: 'Is the Delhi to Lansdowne road good?', answer: 'Mixed, by our distance page: good highway initially, mountain roads after Kotdwar. The expressway is excellent; the state highway through the cane belt is two-lane and slow in the crushing months from November to March; the ghat from Kotdwar is a proper hill road, safe in daylight and in the dry months, with small slips possible in July and August.' },
    { question: 'What is the cab fare from Delhi to Lansdowne?', answer: 'Lansdowne is 270 km and outstation cabs bill a 300 km per day minimum, so one-way is ₹3,300 for a sedan at ₹11/km, ₹4,500 for an Ertiga or SUV at ₹15, ₹5,400 for an Innova Crysta at ₹18 and ₹6,900 for a 12-seater Tempo Traveller at ₹23. A two-day round trip is ₹6,600, ₹9,000, ₹10,800 and ₹13,800. Tolls, parking and the driver’s night halt are extra at actuals; there is no hill surcharge.' },
    { question: 'What time should I leave Delhi for Lansdowne?', answer: 'Five in the morning in every season, so that the cane belt is done by half past nine and the forty kilometres of ghat from Kotdwar are driven in the late morning in daylight. Leaving at eight puts the ghat in the afternoon, which in the monsoon is the wrong time to be on it.' },
    { question: 'Is there an ATM in Lansdowne?', answer: 'No. Draw cash at Kotdwar, the last town on the plain before the ghat. It is the one piece of advice every driver on the corridor gives.' },
    { question: 'What is the best time to visit Lansdowne?', answer: 'March to June and September to November by our distance page. March has the sal forest at its greenest, September to November the clearest views from Tip n Top after the rains. July and August bring slips that can close the ghat for hours; January mornings are misty on the ghat and close to freezing on the ridge, though snow is rare.' },
    { question: 'Is Lansdowne better than Mussoorie or Nainital for a weekend from Delhi?', answer: 'For quiet, yes; for a lake, a mall road and restaurants, no. Lansdowne is a cantonment on a ridge with Bhulla Lake, Tip n Top and St Mary’s, reached by a cane-belt highway and a single-carriageway ghat that keeps the day-trip trade away. The drive time is the same six to seven hours as Mussoorie or Nainital, but the hours are slower and the top is emptier.' },
  ],

  related: [
    { label: 'Delhi to Lansdowne cab', sub: '270 km · from ₹3,300', href: '/one-way-cab/delhi-to-lansdowne', img: `${IMG}/Lansdowne/lansdowne_hero_section.jpg` },
    { label: 'Delhi to Lansdowne distance', sub: 'Route, stops and best time', href: '/distance/delhi-to-lansdowne', img: `${IMG}/Lansdowne/Bhulla_Lake.jpg` },
    { label: 'Delhi to Lansdowne by car, leg by leg', sub: 'The expressway, the cane belt, the ghat', href: '/travel-by-car/delhi-to-lansdowne', img: `${IMG}/Lansdowne/Tip_n_Top_Viewpoint.jpg` },
    { label: 'Delhi to Nainital by car', sub: '300 km on NH-9, the busier hill', href: '/delhi-to-nainital-by-car', img: `${IMG}/Nainital/Naini_Lake.jpg` },
    { label: 'Delhi to Rishikesh shortest route', sub: 'The road that shares the expressway', href: '/delhi-to-rishikesh-shortest-route', img: `${IMG}/Rishikesh/Laxman_Jhula.jpg` },
    { label: 'Hill stations near Gurgaon and Noida', sub: 'Lansdowne among the quiet ones', href: '/hill-stations-near-gurgaon-noida', img: `${IMG}/Lansdowne/St_Marys_Church.jpg` },
    { label: 'Lansdowne sightseeing tours', sub: 'Bhulla Lake, Tip n Top, the church', href: '/sightseeing/delhi-to-lansdowne-2-days', img: `${IMG}/Lansdowne/Tip_n_Top_Viewpoint.jpg` },
    { label: 'Weekend getaways near me', sub: 'Every hill within a day of Delhi', href: '/weekend-getaways-near-me', img: `${IMG}/Delhi/India_Gate.jpg` },
  ],
  guides: ['delhi-to-nainital-by-car', 'delhi-to-rishikesh-shortest-route', 'hill-stations-near-gurgaon-noida', 'weekend-getaways-near-me', 'haridwar-dehradun-mussoorie-by-road'],

  schema: {
    places: ['delhi', 'lansdowne', 'kotdwar', 'meerut'],
    trip: {
      name: 'Delhi to Lansdowne by car via Kotdwar',
      description: 'The 270 km drive from Delhi to Lansdowne in six to seven hours: the Delhi–Meerut Expressway, the state highway through the sugarcane belt via Bijnor and Najibabad to Kotdwar, and forty kilometres of ghat through Dugadda to the cantonment.',
      touristType: 'Road travellers',
      lowPrice: 3300,
      highPrice: 13800,
      itinerary: [
        { name: 'Delhi to Meerut', text: '70 km on the Delhi–Meerut Expressway; the FASTag-only plaza at km 35.' },
        { name: 'Meerut to Kotdwar', text: 'The state highway through the cane belt: breakfast at Khatauli, then Bijnor, Najibabad and the Sidhbali Baba temple outside Kotdwar; cash at Kotdwar.' },
        { name: 'Kotdwar to Lansdowne', text: 'Forty kilometres of ghat through Dugadda, sal then oak and pine, in daylight; about an hour and a quarter.' },
      ],
    },
    howTo: {
      name: 'How to drive from Delhi to Lansdowne',
      description: 'Leave Delhi at five, take the Delhi–Meerut Expressway, breakfast at Khatauli, work through the cane belt to Kotdwar, draw cash there, and take the forty-kilometre ghat in daylight.',
      totalTime: 'PT6H30M',
      estimatedCost: { currency: 'INR', value: 3300 },
      steps: [
        { name: 'Leave Delhi by five', text: 'Join the Delhi–Meerut Expressway at Sarai Kale Khan, Ghazipur or Dasna; the plaza at km 35 is FASTag only.' },
        { name: 'Breakfast at Khatauli', text: 'Cheetal Grand, the halt of the whole Uttarakhand-bound trade; the last proper stop before the hill.' },
        { name: 'Through the cane belt to Kotdwar', text: 'Bijnor, Najibabad and the Sidhbali Baba temple; in the crushing months from November to March the cane trolleys add an hour. Draw cash at Kotdwar: there is no ATM in Lansdowne.' },
        { name: 'The ghat in daylight', text: 'Forty kilometres through Dugadda, narrow and twisting with sections without a parapet; an hour and a quarter, and the driver will not hurry it. In July and August check at Kotdwar for slips.' },
      ],
    },
  },
};
