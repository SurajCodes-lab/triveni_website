// Week 49 route guide — three queries on one triangle: "haridwar to dehradun
// distance" (43,555 impressions a quarter, position 6.9), "haridwar to
// mussoorie distance" (29,556, 9.4) and "dehradun to mussoorie distance"
// (13,336); the cluster is 104,482. Each leg has a distance page and there are
// booking pages for Dehradun to Mussoorie, Haridwar to Rishikesh and Haridwar
// to Mussoorie; this is the road answer for all three in one place: the flat
// hour through the Rajaji forest, the 35 km of hairpins above Dehradun, and
// the through-run that changes character three times. Distances and times are
// the distance pages'. No toll pages exist, so tolls are at actual and no
// amount is given. Fares are computed from the rate card by the fare block on
// the longest leg, never typed here.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'haridwar-dehradun-mussoorie-by-road',
  path: '/haridwar-dehradun-mussoorie-by-road',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'haridwar to dehradun distance', impressions: 43555, position: 6.9 },

  eyebrow: 'Road guide · Haridwar, Dehradun, Mussoorie',
  crumbs: [{ name: 'Mussoorie', url: '/mussoorie' }, { name: 'Haridwar to Mussoorie cab', url: '/haridwar-to-mussoorie' }],
  crumbName: 'Haridwar to Dehradun and Mussoorie by road',
  titleLead: 'Haridwar to Dehradun and Mussoorie by road:',
  titleAccent: '55 km, 35 km, and the drive that joins them',
  title: 'Haridwar to Dehradun and Mussoorie by Road: 55 km, 35 km, and the Drive That Joins Them',
  metaTitle: 'Haridwar to Dehradun & Mussoorie Distance: 55, 35, 90 km',
  metaDescription: 'Haridwar to Dehradun is 55 km, about an hour on NH-7 direct or via Rishikesh; Dehradun to Mussoorie 35 km of hairpins; Haridwar to Mussoorie 90 km, 2.5–3 hours. Forest, climb, timing and fares.',
  keywords: ['haridwar to dehradun distance', 'haridwar to mussoorie distance', 'dehradun to mussoorie distance', 'haridwar to dehradun by road', 'dehradun to mussoorie road', 'haridwar to mussoorie by car', 'haridwar to dehradun via rishikesh', 'mussoorie road dehradun'],
  heroImage: `${IMG}/Mussoorie/Mussoorie_Hero_section.jpg`,
  heroAlt: 'Mussoorie on its ridge above the Doon valley, the top of the road from Haridwar and Dehradun',

  lead: 'Haridwar to Dehradun is 55 km and an hour to an hour and a half on NH-7, a short, flat run where the only real decision is whether to go through Rishikesh or take the direct road through the Rajaji forest. Dehradun to Mussoorie is 35 km and an hour to an hour and a half, and short as it is, it is a real hill road that starts almost as you leave the city. Put together, Haridwar to Mussoorie is 90 km and two and a half to three hours via Dehradun, a drive that changes character three times. Every leg is under the 300 km per day minimum that outstation cabs bill on, so the fare is the rate card on the minimum: a sedan at ₹11/km, an Ertiga or SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23, tolls and parking at actual.',
  keyFacts: [
    { label: 'Haridwar–Dehradun', value: '55 km · 1–1.5 hrs' },
    { label: 'Dehradun–Mussoorie', value: '35 km · 1–1.5 hrs' },
    { label: 'Haridwar–Mussoorie', value: '90 km · 2.5–3 hrs' },
    { label: 'Sedan rate', value: '₹11/km · 300 km min' },
  ],
  stickyLabel: 'Haridwar–Mussoorie cab',
  stickyPrice: 'From ₹11/km',
  waText: 'Hi, I want a cab between Haridwar, Dehradun and Mussoorie. Date, pick-up point and number of passengers to follow.',

  intro: [
    'Three searches, one triangle. Haridwar, Dehradun and Mussoorie sit within 90 km of each other at the point where the Ganga leaves the hills, and the roads between them are short enough that people expect them to be alike. They are not. The Haridwar to Dehradun leg is flat, forested and quick; the Dehradun to Mussoorie leg is a proper hill climb that begins at the edge of the city; and the through-run from Haridwar to Mussoorie is both, with the Doon valley in between. This guide takes the three in order and then answers the questions people ask before booking.',
    'Every number on this page is the one the rest of the site uses. The 55 km, 35 km and 90 km and their times are from our distance pages for the three legs, the road notes are our drivers’, and the fares in the box lower down are computed from the published rate card: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum with tolls and parking at actual. There are no toll pages for these legs, so tolls, where any apply, are settled on the car’s FASTag at actual.',
  ],

  timelineTitle: 'Haridwar to Mussoorie via Dehradun, kilometre by kilometre',
  timelineEyebrow: 'The through-run, in three characters',
  timelineIntro: 'Kilometre marks are from Haridwar and rounded to the nearest post; the billing distance for the through-run is 90 km, of which the first 55 are the Haridwar to Dehradun leg and the last 35 the Dehradun to Mussoorie leg. The clock assumes a seven o’clock start with breakfast on Rajpur Road in Dehradun, which is how the drive comes in at a little under four hours with the halt.',
  timeline: [
    { km: 0, name: 'Haridwar', time: '7 am', text: 'Leave from the ghats northwards on NH-7. Seven is a good hour for most of the year; in December and January the forest holds a thick morning fog until the sun is well up, and a nine o’clock start is easier than an earlier one.', tag: 'Start', image: `${IMG}/Haridwar/Har_Ki_Pauri.jpg`, alt: 'Har Ki Pauri at Haridwar in the early morning' },
    { km: 10, name: 'Motichur and the Rajaji forest', time: '7.15 am', text: 'The road enters the tiger reserve corridor almost at once. Elephant herds cross this section early in the morning and again around dusk, and a driver who knows the road drops his speed here without being asked.', tag: 'Slow for the forest' },
    { km: 20, name: 'Raiwala', time: '7.35 am', text: 'The forest thins and the road reaches the Raiwala junction. Still flat; nobody climbs anything on this leg, and the Shivaliks stay alongside rather than under the road.' },
    { km: 25, name: 'Nepali Farm junction', time: '7.45 am', text: 'The decision point. Straight on is the direct road to Dehradun; the fork to the right goes up past the Ganga to Rishikesh and comes back to Dehradun through Ranipokhri, adding a little distance and a tea halt worth the detour if you have the time.', tag: 'Direct or via Rishikesh', image: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, alt: 'Laxman Jhula at Rishikesh, the detour from the Nepali Farm junction' },
    { km: 35, name: 'Doiwala', time: '7.55 am', text: 'The direct road passes Jolly Grant airport and runs through Doiwala into the Doon valley, flat and green in its bowl of hills.' },
    { km: 55, name: 'Dehradun', time: '8.30 am', text: 'The end of the first leg, and the place to break on Rajpur Road for a proper meal, because from the top of Rajpur Road the climb starts and there is nothing but chai stalls until the ridge.', stop: 'Breakfast', image: `${IMG}/Dehradun/Dehradun_hero_section.jpg`, alt: 'Dehradun in the Doon valley, with the Mussoorie ridge above' },
    { km: 65, name: 'Rajpur', time: '9.30 am', text: 'The run up Rajpur Road is flat, then just past Rajpur the Mussoorie Road turns into hairpins and stays that way to the top. The second leg has begun, and the driver honks at every bend.', tag: 'The climb begins' },
    { km: 80, name: 'The upper bends', time: '10.15 am', text: 'The hairpins stack one above the other over the Doon valley, and the viewpoints on the upper section give you the whole valley at once. On a winter morning you climb out of the plains fog into sunshine here; Mussoorie sits above the fog line.' },
    { km: 90, name: 'Mussoorie', time: '10.45 am', text: 'The Picture Palace end of the Mall is the place to stop properly once you are up. The car parks; the Mall Road, Gun Hill and Camel’s Back Road are on foot from there, and Kempty Falls and Lal Tibba are short local runs with the same driver.', tag: 'Arrive', image: `${IMG}/Mussoorie/Mall_road.jpg`, alt: 'The Mall Road at Mussoorie, at the top of the climb' },
  ],

  table: {
    title: 'Haridwar, Dehradun and Mussoorie: the three legs compared',
    caption: 'Distance, drive time, road character and when to choose each leg between Haridwar, Dehradun and Mussoorie, including the direct and Rishikesh options on the Haridwar to Dehradun leg',
    intro: 'Distances are one-way and are the ones our distance pages publish. Every leg is under the 300 km per day minimum, so all bill the same minimum for a given vehicle; the fare box further down uses the longest leg, Haridwar to Mussoorie at 90 km, and the figure is the same for the shorter legs. Tolls, where any apply, are paid on the car’s FASTag at actual; there are no toll pages for these legs and we do not quote a figure.',
    columns: [
      { key: 'leg', label: 'Leg' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'when', label: 'When to choose it', strong: true },
    ],
    rows: [
      { leg: 'Haridwar to Dehradun, direct', distance: '55 km', time: '1–1.5 hrs', road: 'NH-7, flat, through the Rajaji forest corridor to Raiwala, Nepali Farm and Doiwala', when: 'Every day; slow for the elephants at dawn and dusk' },
      { leg: 'Haridwar to Dehradun via Rishikesh', distance: 'A little more than the direct road', time: 'The direct time plus the tea halt', road: 'The Rishikesh fork at Nepali Farm, up past the Ganga, back through Ranipokhri', when: 'When you have the time; the halt at Rishikesh is worth the detour' },
      { leg: 'Dehradun to Mussoorie', distance: '35 km', time: '1–1.5 hrs', road: 'Rajpur Road, then the Mussoorie Road hairpins to the ridge', when: 'Every day; a gentle driver in winter ice and monsoon mist' },
      { leg: 'Haridwar to Mussoorie via Dehradun', distance: '90 km', time: '2.5–3 hrs', road: 'The forest, the Doon valley, then the climb; three characters in one drive', when: 'The through-run; break on Rajpur Road before the climb' },
      { leg: 'Dehradun to Mussoorie and back, same day', distance: '35 km each way', time: 'A day, with the town in between', road: 'The same hairpins up and down', when: 'When Dehradun is the base; see the same-day Mussoorie page' },
    ],
    footnote: 'The 55 km, 35 km and 90 km are the distances our Haridwar to Dehradun, Dehradun to Mussoorie and Haridwar to Mussoorie distance pages publish and bill on. In January and February there can be snow on the upper bends above Dehradun and the police hold cars at the bottom until it is cleared.',
  },

  sections: [
    {
      eyebrow: 'Haridwar to Dehradun',
      heading: 'Should I drive Haridwar to Dehradun direct or via Rishikesh?',
      paras: [
        'Haridwar to Dehradun is a short, flat run of about an hour, and the only real decision is which side of the Rajaji forest to take. The direct road leaves Haridwar on NH-7, crosses the Motichur stretch and runs through the tiger reserve corridor to Raiwala and the Nepali Farm junction, then on past Jolly Grant airport and through Doiwala into the Doon valley. Our distance page puts it at 55 km and an hour to an hour and a half, and on a normal morning the hour is right. Nobody climbs anything on this road; the Shivaliks stay alongside it rather than under it.',
        'The alternative is the Rishikesh fork at Nepali Farm. Instead of carrying straight on, the road goes up past the Ganga to Rishikesh and comes back to Dehradun through Ranipokhri. It adds a little distance and, more to the point, a tea halt at Rishikesh worth the detour: the jhulas, the ghats and the river before the day gets going. If you have the time it is the better morning; if you are catching a train or a flight at Dehradun, the direct road is the one.',
        'There is no wrong answer between them, and the driver will take whichever you ask for. What we would say is that Rishikesh is only a detour if you have not seen it. For anyone who has just spent a night at Haridwar and has Mussoorie ahead, the direct road and the breakfast on Rajpur Road make the better day, and Rishikesh keeps for the way back.',
      ],
      link: { label: 'Haridwar to Dehradun distance and route page', href: '/distance/haridwar-to-dehradun' },
      image: { src: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, alt: 'Laxman Jhula at Rishikesh, the tea halt on the longer road to Dehradun', tag: 'Rishikesh · the detour', caption: 'The Rishikesh fork adds a little distance and a tea halt by the Ganga; the direct road adds nothing.' },
    },
    {
      eyebrow: 'The forest',
      heading: 'What is the Rajaji forest section like, and why does the driver slow down?',
      paras: [
        'Because elephants cross it. The road from Haridwar to Raiwala runs through the corridor of the Rajaji tiger reserve, and elephant herds cross this section early in the morning and again around dusk, moving between the forest on either side of the road. A driver who knows the road drops his speed there without being asked, and a passenger who knows the road does not ask him to hurry. The forest section is the part of the leg to respect; the rest is an ordinary flat highway.',
        'The other thing the forest does is hold fog. In December and January the trees keep a thick morning fog on the road until the sun is well up, and the hour that is quick at seven in October is slow at seven in January. For those two months a nine o’clock start is easier than a six o’clock one, and it costs nothing on a leg this short. The rest of the year the early start is the better one, because it puts you through the forest while the day is still cool and into Dehradun for breakfast.',
        'The forest is also why the Haridwar to Rishikesh leg is its own booking. Rishikesh is the far side of the same forest, on the fork at Nepali Farm, and a good many people do Haridwar and Rishikesh as a pair before they go on to Dehradun or the hills. The one-way cab page for that leg prices the short drop; the drive to Dehradun and Mussoorie continues from there with the same driver on a round trip.',
      ],
      link: { label: 'Haridwar to Rishikesh one-way cab', href: '/one-way-cab/haridwar-to-rishikesh' },
      image: { src: `${IMG}/Haridwar/Haridwar_hero_section.jpg`, alt: 'Haridwar on the Ganga, at the edge of the Rajaji forest', tag: 'Haridwar · km 0', side: 'left', caption: 'The forest begins almost at the edge of Haridwar; elephants cross it at dawn and dusk.' },
    },
    {
      eyebrow: 'Dehradun to Mussoorie',
      heading: 'How hard is the 35 km climb from Dehradun to Mussoorie?',
      paras: [
        'Short as it is, this is a real hill road, and it starts almost as you leave the city. The run up Rajpur Road is flat, then just past Rajpur the Mussoorie Road turns into hairpins and stays that way to the top, the bends stacked one above the other over the Doon valley. Our distance page puts the leg at 35 km and an hour to an hour and a half, and the hour and a half is the honest figure on a weekend, when the traffic on the bends is nose to tail. It is a well-kept road, but a good driver honks at every blind corner and the passengers in the back learn to look at the view rather than the drop.',
        'There is no halt to speak of on a road this short. The tea stalls at the bends do a brisk trade, and the viewpoints on the upper section give you the whole valley at once, which is why the meal belongs in Dehradun before the climb: break on Rajpur Road, because from the top of it there is nothing but chai stalls until the ridge. Once you are up, the Picture Palace end of Mussoorie is the place to stop properly, and the car parks there while you walk the Mall.',
        'Mussoorie sits above the fog line of the plains, and on a winter morning the climb takes you out of the murk and into sunshine, which is the best argument for a December visit. The same season brings snow to the town and ice to the shaded bends, and in January and February the police hold cars at the bottom until the upper bends are cleared. In the monsoon the mist closes in and small slips on the cutting side are common, so allow extra time and keep to daylight. A gentle driver is the whole of the advice.',
      ],
      link: { label: 'Dehradun to Mussoorie distance and route page', href: '/distance/dehradun-to-mussoorie' },
      image: { src: `${IMG}/Mussoorie/Gun_Hill.jpg`, alt: 'Gun Hill above Mussoorie, at the top of the hairpins', tag: 'Gun Hill · the ridge', caption: 'The bends stack up over the Doon valley; the ridge is where they stop.' },
    },
    {
      eyebrow: 'Season',
      heading: 'When is the best time for this drive, and what happens in winter?',
      paras: [
        'March to June and October to November for the triangle as a whole, on the distance pages and in practice. Spring is the classic season for Mussoorie, when the town is cool while the plains warm up, and the roads are dry and clear; October and November are quieter and the air is at its cleanest, with the snows showing from Lal Tibba on a good morning. The Haridwar to Dehradun leg is a year-round road with no season of its own beyond the winter fog.',
        'Winter is Mussoorie’s other season, and the distance page for the climb is right to name December to February for the snow. The town gets it most years, and the drive up out of the plains fog into sunshine is worth making for its own sake. The costs are the ice on the shaded bends and the police hold at the bottom after a fall, which is why a later start and a spare hour are the winter rules, and why the Haridwar end wants a nine o’clock departure in December and January rather than a six o’clock one.',
        'The monsoon is the season to allow for rather than avoid. From July to September the hillside above Dehradun sheds mud after heavy rain, the mist closes in on the upper bends, and small slips on the cutting side are common; the road is rarely shut for long, but we check it is open before leaving Haridwar and keep the climb to daylight. The forest leg is merely wet.',
      ],
      link: { label: 'Best time to visit Mussoorie, month by month', href: '/best-time-to-visit/mussoorie' },
      image: { src: `${IMG}/Mussoorie/Kempty_Falls.jpg`, alt: 'Kempty Falls near Mussoorie', tag: 'Kempty · a local run', side: 'left', caption: 'Kempty Falls is a short local run from the Mall with the same driver; fullest after the rains.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Haridwar to Dehradun or Mussoorie cost?',
      paras: [
        'All three legs are under the 300 km per day minimum that outstation cabs bill on, so for a given vehicle they cost the same: the minimum at the vehicle’s rate, ₹11/km for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller. Fuel and the driver are inside those figures; tolls, where any apply, and parking at Dehradun or Mussoorie are paid at actual. The fare box below does the arithmetic on the longest leg, Haridwar to Mussoorie at 90 km, and the one-way figure is the same for the shorter two.',
        'That is the reason to put the legs together rather than book them one at a time. Haridwar to Mussoorie via Dehradun, with breakfast on Rajpur Road, is one minimum; Haridwar to Dehradun today and Dehradun to Mussoorie tomorrow is two. A two-day round trip with the same car and driver is the greater of twice the one-way fare or two days at the minimum, and on these distances they come to the same thing; the driver’s night halt at Mussoorie is extra at actual. If Dehradun is your base, the same-day Mussoorie trip from Dehradun is its own page and prices the up-and-down in a day.',
        'On the choice of car, a sedan is right for all three legs. The forest road is flat, the climb is well kept, and there is nothing on the Mussoorie Road that needs an SUV; an Innova Crysta earns its rate for six people and their luggage, not for the hill. The one-way pages are the right booking for a drop, Dehradun to Mussoorie or Haridwar to Rishikesh; the round trip is right if the car is coming back to Haridwar with you.',
      ],
      link: { label: 'Same-day Mussoorie from Dehradun', href: '/same-day-mussoorie-from-dehradun' },
      image: { src: `${IMG}/Dehradun/Robbers_Cave.jpg`, alt: 'Robber’s Cave at Dehradun, a short run from the city', tag: 'Dehradun · on the way', caption: 'Dehradun is the middle of the triangle: breakfast, Robber’s Cave or the FRI, then the climb.' },
    },
  ],

  fare: {
    title: 'Haridwar to Mussoorie via Dehradun',
    note: 'Rate-card fares on the longest leg, Haridwar to Mussoorie at 90 km, which bills the 300 km minimum; the one-way figure is the same for Haridwar to Dehradun and Dehradun to Mussoorie. The two-day figure is the usual pattern: up via Dehradun on day one, back on day two.',
    caption: 'Haridwar to Mussoorie cab fare by vehicle, one-way and two-day round trip, also the fare for the shorter legs',
    distanceKm: 90,
    roundTrip: true,
    days: 2,
    roundLabel: 'Two-day round trip',
    footnote: 'Tolls, where any apply, parking at Dehradun or Mussoorie and the driver’s night halt at actual; fuel is included. No weekend surcharge. A same-day Mussoorie trip from Dehradun is priced on its own page.',
    waText: 'Hi, I want a cab from Haridwar to Mussoorie via Dehradun. Please share the fare for my dates and number of passengers.',
    bookHref: '/haridwar-to-mussoorie',
    bookLabel: 'Haridwar to Mussoorie cab',
    cta: 'Book the Mussoorie cab',
  },

  galleryTitle: 'What the 90 km buys you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Haridwar/Ganga_Aarti.jpg`, title: 'Ganga aarti, Har Ki Pauri', text: 'The evening before the drive, or the evening after it.', tag: 'Haridwar · km 0' },
    { image: `${IMG}/Dehradun/Sahastradhara.jpg`, title: 'Sahastradhara', text: 'On the Dehradun side of the climb, for the afternoon.', tag: 'Dehradun' },
    { image: `${IMG}/Dehradun/Forest_Research_Institute.jpg`, title: 'The FRI', text: 'Dehradun’s grandest building, a short run from Rajpur Road.', tag: 'Dehradun · km 55' },
    { image: `${IMG}/Mussoorie/Lal_tibba.jpg`, title: 'Lal Tibba', text: 'The high point above the town, with the snows on a clear day.', tag: 'Mussoorie · km 90' },
    { image: `${IMG}/Mussoorie/Kempty_Falls.jpg`, title: 'Kempty Falls', text: 'A local run from the Mall with the same driver.', tag: 'Day 2' },
  ],

  tips: [
    { title: 'Break on Rajpur Road before the climb', text: 'From the top of Rajpur Road there is nothing but chai stalls until the ridge. The meal belongs in Dehradun, and so does the fuel.' },
    { title: 'Let the driver slow for the forest', text: 'Elephants cross the Rajaji corridor at dawn and dusk. A driver who knows the road drops his speed there without being asked.' },
    { title: 'Nine o’clock in the fog months', text: 'In December and January the forest holds a thick morning fog until the sun is well up. On a leg this short, a later start costs nothing and saves an hour at walking pace.' },
    { title: 'Ask about the bends in winter', text: 'In January and February there can be snow on the upper bends above Dehradun and the police hold cars at the bottom until it is cleared. We check before leaving Haridwar.' },
    { title: 'Stop at the Picture Palace end', text: 'The viewpoint near the Picture Palace end of the Mall is the one to stop at once you are up. The car parks there; the Mall, Gun Hill and Camel’s Back Road are on foot.' },
  ],

  faqs: [
    { question: 'What is the distance from Haridwar to Dehradun?', answer: '55 km on NH-7, an hour to an hour and a half. The direct road runs through the Rajaji forest corridor to Raiwala, the Nepali Farm junction and Doiwala into the Doon valley; the alternative takes the Rishikesh fork at Nepali Farm and comes back through Ranipokhri, adding a little distance and a tea halt at Rishikesh.' },
    { question: 'What is the distance from Dehradun to Mussoorie?', answer: '35 km, an hour to an hour and a half. The run up Rajpur Road is flat, then just past Rajpur the Mussoorie Road turns into hairpins and stays that way to the ridge. There is no halt on the road itself; break in Dehradun before the climb and stop properly at the Picture Palace end once you are up.' },
    { question: 'What is the distance from Haridwar to Mussoorie?', answer: '90 km via Dehradun, two and a half to three hours of driving. The drive changes character three times: the flat forest road to Doiwala, the Doon valley and Dehradun, then the 35 km of hairpins up to the ridge. With breakfast on Rajpur Road a seven o’clock start from Haridwar has you in Mussoorie before eleven.' },
    { question: 'Is it better to go from Haridwar to Dehradun via Rishikesh or direct?', answer: 'Direct if you are on a schedule; via Rishikesh if you have the time and have not seen it. The direct road on NH-7 is about an hour; the Rishikesh fork at Nepali Farm adds a little distance and a tea halt by the Ganga that is worth the detour. Either way the driver slows for the elephant crossings in the Rajaji forest.' },
    { question: 'How much does a cab from Haridwar to Dehradun or Mussoorie cost?', answer: 'All three legs are under the 300 km per day minimum, so for a given vehicle they cost the same: the minimum at ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, with tolls and parking extra at actual. Haridwar to Mussoorie via Dehradun in one day is one minimum; the two legs on separate days are two. The fare box on this page shows the figure for each vehicle.' },
    { question: 'When is the best time to drive from Haridwar to Mussoorie?', answer: 'March to June and October to November for the drive as a whole, with December to February for snow in Mussoorie. In the fog months of December and January a nine o’clock start from Haridwar is easier than an early one; in January and February the police may hold cars at the bottom of the climb after snow; and from July to September the hillside above Dehradun sheds mud after rain, so we check the road and keep the climb to daylight.' },
    { question: 'Can I do Dehradun to Mussoorie and back in a day?', answer: 'Yes, easily; it is 35 km each way and the town is the point of the day. The same-day Mussoorie from Dehradun page prices the up-and-down with the car waiting, and Kempty Falls and Lal Tibba are short local runs from the Mall with the same driver.' },
    { question: 'Where does the car park in Mussoorie?', answer: 'At the Picture Palace end of the Mall, which is the place to stop properly once you are up. The Mall Road, Gun Hill and Camel’s Back Road are on foot from there; Kempty Falls and Lal Tibba are local runs the driver does from the same spot.' },
  ],

  related: [
    { label: 'Haridwar to Mussoorie cab', sub: '90 km via Dehradun · sedan from ₹11/km', href: '/haridwar-to-mussoorie', img: `${IMG}/Mussoorie/Mussoorie_Hero_section.jpg` },
    { label: 'Dehradun to Mussoorie one-way cab', sub: '35 km of hairpins to the ridge', href: '/one-way-cab/dehradun-to-mussoorie', img: `${IMG}/Mussoorie/Mall_road.jpg` },
    { label: 'Haridwar to Dehradun distance', sub: '55 km · direct or via Rishikesh', href: '/distance/haridwar-to-dehradun', img: `${IMG}/Dehradun/Dehradun_hero_section.jpg` },
    { label: 'Same-day Mussoorie from Dehradun', sub: 'Up and down in a day, car waiting', href: '/same-day-mussoorie-from-dehradun', img: `${IMG}/Mussoorie/Gun_Hill.jpg` },
    { label: 'Haridwar to Rishikesh one-way cab', sub: 'The far side of the same forest', href: '/one-way-cab/haridwar-to-rishikesh', img: `${IMG}/Rishikesh/Laxman_Jhula.jpg` },
  ],
  guides: ['delhi-to-nainital-by-car', 'delhi-to-rishikesh-shortest-route', 'hill-stations-near-haridwar-rishikesh', 'tourist-places-within-50-km-of-amritsar-and-haridwar', 'weekend-getaways-near-me'],

  schema: {
    places: ['haridwar', 'dehradun', 'mussoorie'],
    trip: {
      name: 'Haridwar to Dehradun and Mussoorie by road',
      description: 'The 90 km drive from Haridwar to Mussoorie via Dehradun: 55 km of flat forest road on NH-7 to the Doon valley, then 35 km of hairpins up the Mussoorie Road, in two and a half to three hours.',
      touristType: 'Road travellers',
      itinerary: [
        { name: 'Haridwar to Dehradun', text: '55 km on NH-7 through the Rajaji forest corridor to Raiwala, the Nepali Farm junction and Doiwala, direct or via Rishikesh; about an hour, breakfast on Rajpur Road.' },
        { name: 'Dehradun to Mussoorie', text: '35 km up Rajpur Road and the Mussoorie Road hairpins to the ridge, an hour to an hour and a half; stop at the Picture Palace end.' },
      ],
    },
    howTo: {
      name: 'How to drive from Haridwar to Mussoorie via Dehradun',
      description: 'Take NH-7 through the Rajaji forest to Dehradun, break on Rajpur Road, then climb the 35 km of hairpins to the ridge in daylight.',
      totalTime: 'PT3H45M',
      steps: [
        { name: 'Leave Haridwar at seven', text: 'Or at nine in the fog months; the forest holds the fog until the sun is well up.' },
        { name: 'Slow through the Rajaji forest', text: 'Elephants cross at dawn and dusk; at Nepali Farm choose the direct road or the Rishikesh fork.' },
        { name: 'Breakfast on Rajpur Road', text: 'The last proper meal before the climb; from the top of Rajpur Road there are only chai stalls.' },
        { name: 'Climb the Mussoorie Road', text: '35 km of hairpins to the ridge; park at the Picture Palace end and walk the Mall.' },
      ],
    },
  },
};
