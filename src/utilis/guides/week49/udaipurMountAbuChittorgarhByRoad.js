// Week 49 route guide — Udaipur, Mount Abu and Chittorgarh by road: the two
// spokes out of Udaipur that most visitors drive, joined into one three-day
// plan. Distances, times, stops and seasons are the distance pages' and the
// road notes' for udaipur-to-mount-abu and udaipur-to-chittorgarh; neither
// corridor has a toll page, so no toll figure is given.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'udaipur-mount-abu-chittorgarh-by-road',
  path: '/udaipur-mount-abu-chittorgarh-by-road',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'udaipur to mount abu distance' },

  eyebrow: 'Road guide · Udaipur, Mount Abu and Chittorgarh',
  crumbs: [{ name: 'Udaipur', url: '/udaipur' }, { name: 'Udaipur to Mount Abu cab', url: '/udaipur-to-mount-abu' }],
  crumbName: 'Udaipur, Mount Abu and Chittorgarh by road',
  titleLead: 'Udaipur to Mount Abu and Chittorgarh by road:',
  titleAccent: 'the two spokes, and how to drive both in three days',
  title: 'Udaipur to Mount Abu and Chittorgarh by Road: The Two Spokes, and How to Drive Both in Three Days',
  metaTitle: 'Udaipur to Mount Abu (165 km) & Chittorgarh by Road',
  metaDescription: 'Udaipur to Mount Abu 165 km (3–3.5 hrs) over the Gogunda ghat and the Abu Road hairpins; Udaipur to Chittorgarh 115 km (2–2.5 hrs) on NH-48. Halts, the months that matter, and sedan fares from ₹3,300 a day.',
  keywords: ['udaipur to mount abu distance', 'udaipur to mount abu by road', 'udaipur to chittorgarh distance', 'udaipur to mount abu cab', 'udaipur to chittorgarh by car', 'mount abu from udaipur one day', 'udaipur mount abu chittorgarh trip', 'udaipur to mount abu road condition', 'udaipur to chittorgarh taxi'],
  heroImage: `${IMG}/Mount_Abu/Nakki_Lake.jpg`,
  heroAlt: 'Nakki Lake at Mount Abu, the end of the 165 km climb from Udaipur',

  lead: 'Udaipur has two drives worth a day each. West, the road to Mount Abu is 165 km and three to three and a half hours, over the Gogunda ghat within the first hour, across dry scrub to Pindwara, and up the long stack of hairpins from Abu Road to the only hill station in Rajasthan. East, the road to Chittorgarh is 115 km and two to two and a half hours on four-lane NH-48 with one short climb at Debari and the fort visible on its hill long before the town. Mount Abu is a night away; Chittorgarh is a day trip. Together they are three days with one car, ₹9,900 for a sedan on the rate card.',
  keyFacts: [
    { label: 'Udaipur–Mount Abu', value: '165 km · 3–3.5 hrs' },
    { label: 'Udaipur–Chittorgarh', value: '115 km · 2–2.5 hrs' },
    { label: 'Best months', value: 'October to March' },
    { label: 'Sedan, Mount Abu 2 days', value: '₹6,600' },
  ],
  stickyLabel: 'Udaipur–Mount Abu cab',
  stickyPrice: 'Sedan ₹3,300 a day',
  waText: 'Hi, I want a cab from Udaipur for Mount Abu and Chittorgarh. Dates and number of passengers to follow.',

  intro: [
    'Most people come to Udaipur for the lakes and then discover that the two best things in the region are a drive away in opposite directions. This guide takes each spoke in turn, kilometre by kilometre, says which one deserves the night and which one fits in a day, and puts them together into a three-day plan with one car and one driver.',
    'The distances, times and stops are the ones our distance pages publish for the two corridors, the road notes are our drivers’, and the fares are the rate card: ₹11 a kilometre for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, tolls and parking at actuals. Neither corridor has a toll page yet, so no toll figure is given here; the driver pays the plazas on FASTag and they appear on the bill.',
  ],

  timelineTitle: 'Udaipur to Mount Abu, kilometre by kilometre',
  timelineEyebrow: 'The western spoke · 165 km',
  timelineIntro: 'Kilometre marks are from the Udaipur lake front. The clock assumes a seven o’clock start with one halt before the climb; it is the 165 km that bills as the 300 km minimum.',
  timeline: [
    { km: 0, name: 'Udaipur', time: '7 am', text: 'Out westwards on the Pindwara highway. Leaving at seven has you over the first ghat before the sun is on it and up the Abu Road hairpins before the day-trip traffic from Ahmedabad.', tag: 'Start', image: `${IMG}/Udaipur/Lake_Pichola.jpg`, alt: 'Lake Pichola at Udaipur in the early morning' },
    { km: 40, name: 'Gogunda ghat', time: '7.50 am', text: 'The first surprise: the climbing starts early. The road lifts out of the Udaipur bowl over the Gogunda ghat within the first hour, a short twisting rise through the Aravallis before it drops back onto the plain.', tag: 'First ghat' },
    { km: 105, name: 'Pindwara', time: '9 am', text: 'From Gogunda the road is open and quick through dry scrub country, and Pindwara is where you turn off the highway for Abu Road. Pindwara or Abu Road is the natural halt before the climb; the tea is better at Abu Road.', stop: 'Halt before the climb' },
    { km: 140, name: 'Abu Road', time: '9.40 am', text: 'The railhead at the foot of the hill, and the last flat ground. Everything from here is the ghat.', tag: 'Foot of the hill' },
    { km: 165, name: 'Mount Abu', time: '10.30 am', text: 'The last 25 km are the real ghat: a long stack of hairpins climbing through rock and forest to the plateau, the best part of the drive and the slowest. Nakki Lake, the Dilwara temples and Sunset Point are all within the town; Guru Shikhar and Achalgarh are a short drive further, and the car stays for them.', tag: 'Arrive', image: `${IMG}/Mount_Abu/Dilwara_Temple_Interior.jpg`, alt: 'Carved marble interior of the Dilwara temples at Mount Abu' },
  ],

  table: {
    title: 'The two spokes out of Udaipur compared',
    caption: 'Udaipur to Mount Abu and Udaipur to Chittorgarh by car: distance, drive time, road, stops, how long to give each and the rate-card sedan fare',
    intro: 'Distances and times are one-way from our distance pages. Fares are the rate card on the 300 km per day minimum; tolls are at actuals because neither corridor has a toll page.',
    columns: [
      { key: 'spoke', label: 'Drive' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road and stops' },
      { key: 'give', label: 'Give it', strong: true },
      { key: 'fare', label: 'Sedan', align: 'right' },
    ],
    rows: [
      { spoke: 'Udaipur to Mount Abu', distance: '165 km', time: '3–3.5 hrs', road: 'Gogunda ghat, dry plain to Pindwara, then 25 km of hairpins from Abu Road', give: 'A night. The climb, the temples and the sunset do not fit one day.', fare: '₹3,300 one way · ₹6,600 two days' },
      { spoke: 'Udaipur to Chittorgarh', distance: '115 km', time: '2–2.5 hrs', road: 'NH-48 four-lane; one short climb at Debari, then flat past Dabok and Kapasan', give: 'A day. Out at seven, the fort before the heat, back for dinner; or stay for the light and sound show.', fare: '₹3,300 for the day (230 km, on the 300 km minimum)' },
      { spoke: 'Both, with one car', distance: '560 km', time: '3 days', road: 'Mount Abu with a night, back to Udaipur, Chittorgarh as the day trip', give: 'Three days; the Udaipur night between them rests the driver and the passengers.', fare: '₹9,900 (900 km at the 300 km per day minimum)' },
      { spoke: 'Jaipur to Mount Abu direct, for comparison', distance: '490 km', time: '7–8 hrs', road: 'NH-48 via Beawar and Sirohi, the same last 25 km of hairpins', give: 'Only if Udaipur is not on the plan; from Udaipur the hill is a morning away.', fare: '₹5,390 one way' },
    ],
    footnote: 'The Chittorgarh day is 230 km of driving and bills the 300 km minimum. December and January nights at Mount Abu drop close to freezing; carry a warm layer even when Udaipur is mild.',
  },

  sections: [
    {
      eyebrow: 'The western spoke',
      heading: 'What is the Udaipur to Mount Abu road like, and where is the climb?',
      paras: [
        'Leaving Udaipur westwards on the Pindwara highway, the first surprise is that the climbing starts early: the road lifts out of the Udaipur bowl over the Gogunda ghat within the first hour, a short twisting rise through the Aravallis before it drops back onto the plain. From Gogunda to Pindwara the road is open and quick through dry scrub country, and Pindwara is where you turn off the highway for Abu Road. Our distance page puts the whole run at 165 km and three to three and a half hours on a good road, with the mountain climb in the last 25 km.',
        'That last part is the real ghat: from Abu Road up to Mount Abu, a long stack of hairpins climbing through rock and forest to the plateau. It is the best part of the drive and the slowest, and it is why the leg takes three and a half hours for 165 km when the Chittorgarh leg takes two and a half for 115. Pindwara or Abu Road make the natural halt before the climb; there is nowhere sensible to stop on the hairpins themselves.',
        'October to March is the season, when the plains are bearable and Mount Abu is cool; in December and January the nights on top drop close to freezing, which surprises people coming up from the lakes. After the monsoon, in September and October, the Aravallis are green and the ghat is at its prettiest. In the monsoon itself the hairpins run wet and our drivers take them slowly.',
      ],
      link: { label: 'Udaipur to Mount Abu distance and route', href: '/distance/udaipur-to-mount-abu' },
      image: { src: `${IMG}/Mount_Abu/Guru_Shikhar.jpg`, alt: 'Guru Shikhar, the highest point of the Aravallis above Mount Abu', tag: 'Mount Abu · km 165', caption: 'Guru Shikhar and Achalgarh are a short drive beyond the town; the car stays for them.' },
    },
    {
      eyebrow: 'The eastern spoke',
      heading: 'What is the Udaipur to Chittorgarh road like, and can I do it in a day?',
      paras: [
        'Udaipur to Chittorgarh is the easiest drive out of Mewar: a couple of hours on four-lane NH-48 with no hill road at all. The car leaves the lake city through Debari, where the highway cuts through the Aravalli ridge in one short climb and then drops onto the plain; that is the only gradient you will feel. Past the airport turn at Dabok the road runs straight and fast through open farmland, and the halt most drivers make is around Kapasan, where the roadside stalls do decent tea. Our distance page puts it at 115 km and two to two and a half hours on a good highway.',
        'The fort announces itself long before the town does: a long flat-topped hill standing alone over the plain, clearly visible from the highway on the final stretch in. Inside, the car matters, because the fort is seven kilometres of rampart and the Vijay Stambh, the Kirti Stambh, Padmini’s palace and Rana Kumbha’s palace are spread along it; the driver takes you from gate to gate and you walk the parts that deserve walking.',
        'Timing matters more than the road. From April to June the ramparts are baking by eleven, so leave Udaipur at seven and do the fort before the heat. Between October and March the mornings are cool enough to walk the whole fort, and the evening light and sound show is the reason to stay on for dinner and drive back in the dark, which on this road is no hardship.',
      ],
      bullets: [
        'A day trip: out at seven, the fort by nine, back in Udaipur for a late lunch or, with the light and sound show, for a late dinner.',
        '230 km of driving for the day, which bills the 300 km minimum: ₹3,300 for a sedan.',
        'Tea at Kapasan on the way out; the fort has its own stalls but the choice inside is thin.',
      ],
      link: { label: 'Udaipur to Chittorgarh distance and route', href: '/distance/udaipur-to-chittorgarh' },
      image: { src: `${IMG}/Chittorgarh/Vijay_Stambh.jpg`, alt: 'The Vijay Stambh tower inside Chittorgarh fort', tag: 'Chittorgarh · km 115', side: 'left', caption: 'The fort is seven kilometres of rampart; the car takes you from gate to gate.' },
    },
    {
      eyebrow: 'Both spokes',
      heading: 'How do I fit Mount Abu and Chittorgarh into one trip from Udaipur?',
      paras: [
        'Three days, and the order is Mount Abu first. Day one is the 165 km climb with the afternoon for Nakki Lake, the Dilwara temples and Sunset Point, and the night on the hill, which in winter means a warm layer. Day two is Guru Shikhar and Achalgarh in the morning, then the hairpins down and the 165 km back to Udaipur by mid-afternoon, with the evening on the lake. Day three is the Chittorgarh day: out at seven, the fort before the heat, back for dinner or after the light and sound show.',
        'Driven the other way round, with Chittorgarh first, the plan works but ends with the ghat on the last afternoon, which is the wrong time to meet the hairpins if the return to Udaipur has a train or flight on the end of it. Mount Abu first puts the hill in the middle of the trip and the easy road last.',
        'The three days drive 560 km, which bills as 900 km at the 300 km per day minimum, and one car for all of it is cheaper than three separate hires because the Udaipur night in the middle is the driver’s rest as well as yours. If Mount Abu alone is the plan, it is two days and 330 km, billed as 600; if Chittorgarh alone, it is one day and 230 km, billed as 300.',
      ],
      link: { label: 'Udaipur cab services', href: '/udaipur' },
      image: { src: `${IMG}/Udaipur/City_Palace.jpg`, alt: 'The City Palace on Lake Pichola at Udaipur', tag: 'Udaipur · the middle night', caption: 'The Udaipur night between the two spokes rests the driver and the passengers.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Udaipur to Mount Abu or Chittorgarh cost?',
      paras: [
        'Both corridors are under the 300 km per day minimum, so each day bills the minimum: ₹3,300 for a sedan at ₹11 a kilometre, ₹4,500 for an Ertiga or similar SUV at ₹15, ₹5,400 for an Innova Crysta at ₹18 and ₹6,900 for a 12-seater Tempo Traveller at ₹23. Mount Abu with a night is two days: ₹6,600 for a sedan, ₹9,000 SUV, ₹10,800 Innova, ₹13,800 Tempo Traveller. Chittorgarh as a day trip is one day: ₹3,300, ₹4,500, ₹5,400 or ₹6,900.',
        'The three-day plan with both spokes is three days at the minimum: ₹9,900 for a sedan, ₹13,500 for an SUV, ₹16,200 for an Innova Crysta and ₹20,700 for a Tempo Traveller. Fuel and the driver are inside those figures; the plazas on both roads, the parking at the fort and on the hill, and the driver’s night halt at Mount Abu are at actuals and appear on the bill. There is no hill surcharge for the Abu Road ghat.',
        'A one-way drop at Mount Abu, for those carrying on to Gujarat by road or by train from Abu Road, is the one-way fare of ₹3,300 for a sedan; a one-way drop at Chittorgarh, for the train onwards to Kota or Delhi, the same. Ask for the drop rather than the round trip if that is the plan; it is half the price.',
      ],
      link: { label: 'Udaipur to Mount Abu one-way cab', href: '/one-way-cab/udaipur-to-mount-abu' },
    },
  ],

  fare: {
    title: 'Udaipur to Mount Abu on the rate card',
    note: 'Rate-card fares for the 165 km drive, which bills the 300 km minimum, and for the two-day round trip with a night on the hill. The Chittorgarh day trip is one day at the same minimum; both spokes together are three.',
    caption: 'Udaipur to Mount Abu cab fare by vehicle, one-way and two-day round trip',
    distanceKm: 165,
    roundTrip: true,
    days: 2,
    roundLabel: 'Two days with a night at Mount Abu',
    footnote: 'Tolls, parking and the driver’s night halt at actuals; no toll page exists for these corridors yet. No hill surcharge. The Chittorgarh day trip is ₹3,300 for a sedan; both spokes over three days ₹9,900.',
    waText: 'Hi, I want a cab from Udaipur to Mount Abu, and possibly Chittorgarh. Please share the fare for my dates and number of passengers.',
    bookHref: '/udaipur-to-mount-abu',
    bookLabel: 'Udaipur to Mount Abu cab',
    cta: 'Book the Udaipur cab',
  },

  galleryTitle: 'What the two spokes buy you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Mount_Abu/Nakki_Lake.jpg`, title: 'Nakki Lake', text: 'The first afternoon on the hill, before Sunset Point.', tag: 'Mount Abu' },
    { image: `${IMG}/Mount_Abu/Sunset_Point_Mount_Abu.jpg`, title: 'Sunset Point', text: 'The reason Mount Abu is a night and not a day.', tag: 'Evening' },
    { image: `${IMG}/Mount_Abu/Achalgarh_Fort.jpg`, title: 'Achalgarh', text: 'The second morning, with Guru Shikhar; the car stays for both.', tag: 'Day 2' },
    { image: `${IMG}/Chittorgarh/Padmini_Palace.jpg`, title: 'Padmini’s palace', text: 'Inside the fort, gate to gate by car.', tag: 'Chittorgarh' },
    { image: `${IMG}/Chittorgarh/Kirti_Stambh.jpg`, title: 'Kirti Stambh', text: 'Older than the Vijay Stambh and quieter.', tag: 'Chittorgarh' },
    { image: `${IMG}/Udaipur/Jag_Mandir.jpg`, title: 'Jag Mandir', text: 'The Udaipur evening between the two drives.', tag: 'Udaipur' },
  ],

  tips: [
    { title: 'Mount Abu first, Chittorgarh last', text: 'The hill in the middle of the trip and the easy four-lane road on the last day, so a train or flight out of Udaipur is never on the far side of the hairpins.' },
    { title: 'Seven o’clock for both', text: 'For Mount Abu it clears the ghat before the day-trip traffic; for Chittorgarh it puts you on the ramparts before the heat, which from April to June is the whole game.' },
    { title: 'A warm layer for the hill', text: 'December and January nights at Mount Abu drop close to freezing while Udaipur is mild. People arrive in shirtsleeves and buy shawls at Nakki Lake.' },
  ],

  faqs: [
    { question: 'What is the distance from Udaipur to Mount Abu by road?', answer: '165 km, three to three and a half hours, by our distance page: over the Gogunda ghat within the first hour, across dry scrub to Pindwara, then the turn for Abu Road and 25 km of hairpins up to the plateau. The climb is the slow part and the best part.' },
    { question: 'What is the distance from Udaipur to Chittorgarh?', answer: '115 km and two to two and a half hours on four-lane NH-48, with one short climb at Debari and then flat road past Dabok and Kapasan. The fort is visible from the highway well before the town.' },
    { question: 'Can I visit Mount Abu from Udaipur in one day?', answer: 'It is possible, seven hours of driving for a few hours on the hill, but it is the wrong way to see it. The Dilwara temples, Nakki Lake and Sunset Point want an afternoon and evening, and Guru Shikhar and Achalgarh want the next morning. Give it a night; the two-day round trip is ₹6,600 for a sedan.' },
    { question: 'Is Chittorgarh a day trip from Udaipur?', answer: 'Yes, and the best one out of Udaipur. Leave at seven, be on the ramparts by nine, and the whole fort, Vijay Stambh, Kirti Stambh, Padmini’s palace and Rana Kumbha’s palace, is done before the heat. Stay for the evening light and sound show if you can; the drive back in the dark is an easy four-lane road. The day is 230 km and bills the 300 km minimum: ₹3,300 for a sedan.' },
    { question: 'How much is a cab from Udaipur to Mount Abu?', answer: '₹3,300 one way for a sedan at ₹11/km on the 300 km minimum, ₹4,500 for an Ertiga or SUV, ₹5,400 for an Innova Crysta and ₹6,900 for a 12-seater Tempo Traveller; twice that for the two-day round trip with a night on the hill. Tolls, parking and the driver’s night halt are at actuals.' },
    { question: 'What is the best time to drive from Udaipur to Mount Abu?', answer: 'October to March, when the plains are bearable and Mount Abu is cool; September and October, just after the monsoon, are the prettiest weeks on the ghat. December and January nights on the hill drop close to freezing. In the monsoon the hairpins run wet and the drive is slower.' },
    { question: 'Is the Udaipur to Mount Abu road safe and in good condition?', answer: 'Yes. Our distance page describes it as a good road, with the mountain climb in the last 25 km scenic and full of hairpin bends. The Gogunda ghat in the first hour and the Abu Road ghat at the end are both proper hill roads with proper surfaces; our drivers run them regularly and take the climb in daylight.' },
    { question: 'Can I do Mount Abu and Chittorgarh from Udaipur in the same trip?', answer: 'Three days with one car: Mount Abu with a night, back to Udaipur for the second night, Chittorgarh as the third day. That is 560 km of driving, billed as 900 at the 300 km per day minimum: ₹9,900 for a sedan, ₹13,500 SUV, ₹16,200 Innova Crysta, ₹20,700 Tempo Traveller.' },
  ],

  related: [
    { label: 'Udaipur to Mount Abu cab', sub: '165 km · from ₹3,300', href: '/udaipur-to-mount-abu', img: `${IMG}/Mount_Abu/mount_abu_hero_section.jpg` },
    { label: 'Udaipur to Chittorgarh cab', sub: '115 km · the day trip', href: '/one-way-cab/udaipur-to-chittorgarh', img: `${IMG}/Chittorgarh/chittogarh_hero_section.jpg` },
    { label: 'Jaipur to Udaipur by road', sub: '395 km through the Aravallis', href: '/jaipur-to-udaipur-by-road', img: `${IMG}/Udaipur/Fateh_Sagar_Lake.jpg` },
    { label: 'Udaipur sightseeing tours', sub: 'The lakes and palaces with a car', href: '/sightseeing/udaipur', img: `${IMG}/Udaipur/Udaipur_hero_section.jpg` },
    { label: 'Mount Abu sightseeing tours', sub: 'Dilwara, Nakki Lake, Guru Shikhar', href: '/sightseeing/mount-abu', img: `${IMG}/Mount_Abu/Dilwara_Temple_Interior.jpg` },
    { label: 'Chittorgarh sightseeing tours', sub: 'The fort, gate to gate', href: '/sightseeing/chittorgarh', img: `${IMG}/Chittorgarh/Rana_Kumbha_Palace.jpg` },
    { label: 'Jaipur to Mount Abu distance', sub: '490 km direct, for comparison', href: '/distance/jaipur-to-mount-abu', img: `${IMG}/Mount_Abu/Achalgarh_Fort.jpg` },
    { label: 'Tempo Traveller in Udaipur', sub: '12-seater for the family trip', href: '/tempo-traveller/udaipur', img: '/images/tempo_section.jpg' },
  ],
  guides: ['jaipur-to-udaipur-by-road', 'agra-to-jaipur-by-road', 'pushkar-mela-2026-by-car', 'weekend-getaways-near-me', 'delhi-to-nainital-by-car'],

  schema: {
    places: ['udaipur', 'mount-abu', 'chittorgarh'],
    trip: {
      name: 'Udaipur to Mount Abu and Chittorgarh by road',
      description: 'The two drives out of Udaipur: 165 km west over the Gogunda ghat and the Abu Road hairpins to Mount Abu, with a night; and 115 km east on NH-48 to Chittorgarh fort as a day trip; three days with one car.',
      touristType: 'Road travellers',
      lowPrice: 3300,
      highPrice: 20700,
      itinerary: [
        { name: 'Udaipur to Mount Abu', text: '165 km over the Gogunda ghat, across the plain to Pindwara and up the hairpins from Abu Road; Nakki Lake, the Dilwara temples and Sunset Point; night on the hill.' },
        { name: 'Mount Abu to Udaipur', text: 'Guru Shikhar and Achalgarh in the morning, then 165 km back down to Udaipur for the evening on the lake.' },
        { name: 'Udaipur to Chittorgarh and back', text: '115 km each way on NH-48 via Debari and Kapasan; the fort gate to gate before the heat; back for dinner or after the light and sound show.' },
      ],
    },
    howTo: {
      name: 'How to drive from Udaipur to Mount Abu and Chittorgarh',
      description: 'Mount Abu first with a night on the hill, back to Udaipur, then Chittorgarh as the day trip; one car and driver for the three days.',
      totalTime: 'P3D',
      estimatedCost: { currency: 'INR', value: 9900 },
      steps: [
        { name: 'Leave Udaipur at seven for Mount Abu', text: 'Westwards on the Pindwara highway; over the Gogunda ghat in the first hour, open road to Pindwara, tea at Abu Road.' },
        { name: 'Climb the Abu Road ghat', text: '25 km of hairpins through rock and forest to the plateau; the slowest and best part of the drive. Afternoon at Nakki Lake and Dilwara, evening at Sunset Point; night on the hill.' },
        { name: 'Return to Udaipur', text: 'Guru Shikhar and Achalgarh in the morning, then the hairpins down and 165 km back to Udaipur by mid-afternoon.' },
        { name: 'Chittorgarh as the day trip', text: 'Out at seven on NH-48 through Debari, tea at Kapasan, the fort by nine; gate to gate by car; back to Udaipur for dinner or after the light and sound show.' },
      ],
    },
  },
};
