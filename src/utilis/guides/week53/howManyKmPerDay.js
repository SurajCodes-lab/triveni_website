// Week 53 answer-proof guide 16 — "How many kilometres a day is comfortable by
// car in north India?"
//
// WHY THIS SHAPE
// A logistics question underlying every multi-day itinerary on the site, with a
// real answer that differs by road type by a factor of three. It is also the
// question that, answered wrongly, produces the itineraries we spend enquiries
// talking people out of.

export const guide = {
  slug: 'how-many-km-per-day-by-car',
  path: '/how-many-km-per-day-by-car',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Logistics guide · Planning',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'How many km a day is comfortable',
  titleLead: 'How many kilometres a day?',
  titleAccent: 'The answer differs by a factor of three',
  title: 'How Many Kilometres a Day Is Comfortable by Car in North India?',
  metaTitle: 'How Many Km a Day by Car? Expressway vs Hill Road',
  metaDescription: 'How far to plan per day on an Indian road trip: realistic daily distances on expressways, national highways, hill roads and mountain gorge roads, and the planning mistakes that follow from getting it wrong.',
  keywords: ['how many km per day road trip india', 'daily driving distance india', 'how long does 300 km take in india', 'hill road driving speed india', 'road trip planning distance per day', 'average speed indian highways'],
  heroImage: '/images/sightseeing/Manali/Kullu Valley.jpg',
  heroAlt: 'The Kullu valley road, where 250 km takes seven to eight hours',

  lead: 'On an expressway, 500 km is a comfortable day. On a national highway, 400. On a hill road, 200 — and on a mountain gorge road like the Alaknanda or the Parvati valley, 150 is a long day. That is a factor of more than three between the best and worst surfaces, and it is why a plains driver planning a Himachal itinerary from a map gets it wrong. Shimla to Manali is 250 km and takes seven to eight hours. Delhi to Agra is 230 km and takes three and a half. The distance is almost the same; the day is not.',

  keyFacts: [
    { label: 'Expressway', value: '450–550 km comfortable' },
    { label: 'National highway', value: '350–450 km' },
    { label: 'Hill road', value: '150–250 km' },
    { label: 'Mountain gorge road', value: '100–150 km' },
  ],
  stickyLabel: 'Multi-day cab hire',
  stickyPrice: 'Sedan ₹3,300/day',
  waText: 'Hi, I have an itinerary in mind and would like a view on whether the daily distances are realistic.',

  intro: [
    'Almost every bad multi-day itinerary we are asked to quote has the same fault: it was planned on distance rather than on hours. Six cities in six days looks reasonable on a map of Rajasthan and unreasonable on a map of Himachal, and the difference is entirely the road.',
    'The figures below are from drivers who run these roads daily, and they are the distances at which a day finishes in daylight with people who still want dinner. They are not maximums — a determined driver covers more. They are the distances at which the trip stays pleasant.',
    'One number to anchor everything: on this site the outstation rate bills a 300 km per day minimum, which is roughly the average daily distance of a well-planned multi-day trip. That is not a coincidence.',
  ],

  table: {
    title: 'Realistic daily distance by road type',
    caption: 'Comfortable daily driving distance by road type in north India, with the effective average speed and worked examples',
    intro: 'Effective speed includes stops, towns, traffic and the business of actually travelling — not the speed the car does when it is moving.',
    columns: [
      { key: 'road', label: 'Road type' },
      { key: 'day', label: 'Comfortable day', align: 'right' },
      { key: 'speed', label: 'Effective speed', align: 'right' },
      { key: 'eg', label: 'Example' },
    ],
    rows: [
      { road: 'Access-controlled expressway', day: '450–550 km', speed: '~70–80 km/h', eg: 'Agra → Lucknow, 340 km in 4.5–5 hrs' },
      { road: 'Four or six lane national highway', day: '350–450 km', speed: '~55–65 km/h', eg: 'Delhi → Jaipur, 280 km in 5 hrs' },
      { road: 'Two-lane state highway', day: '250–350 km', speed: '~45–55 km/h', eg: 'Jaipur → Bikaner, 335 km in 5.5–6 hrs' },
      { road: 'Desert highway, light traffic', day: '400–500 km', speed: '~60–70 km/h', eg: 'Jaisalmer → Udaipur, 495 km in 8 hrs' },
      { road: 'Hill road, surfaced', day: '150–250 km', speed: '~30–40 km/h', eg: 'Shimla → Manali, 250 km in 7–8 hrs' },
      { road: 'Hill road with a long climb', day: '150–200 km', speed: '~30 km/h', eg: 'Delhi → Mussoorie, 290 km in 7–8 hrs' },
      { road: 'Mountain gorge road', day: '100–150 km', speed: '~25 km/h', eg: 'Rishikesh → Chopta, 165 km in 6.5 hrs' },
      { road: 'High pass or unmade', day: '80–120 km', speed: '~20 km/h', eg: 'Manali → Kaza, 200 km in 8–9 hrs' },
    ],
    footnote: 'These are comfortable distances, not maximums. They assume a daylight start, two proper stops and arrival before dark. A ghat climb at the end of a day costs an hour whatever the map says — the 27 km Abu Road ascent and the 35 km Dehradun-to-Mussoorie climb are both an hour on their own.',
  },

  sections: [
    {
      eyebrow: 'The arithmetic',
      heading: 'Why hill distances behave so differently',
      paras: [
        'Three compounding reasons. The road is longer than the map distance because it switchbacks — the straight-line distance from Dehradun to Mussoorie is about 20 km and the road is 35. Cornering limits speed independently of surface quality, so a well-maintained hill road is still slow. And overtaking opportunities are rare, so a single slow vehicle sets the pace for everything behind it for kilometres.',
        'On top of that sit the things that do not appear on any map: a landslide clearance in the monsoon, a road-widening project, a convoy, or simply a market town where the highway becomes a street for two kilometres.',
        'The practical rule our drivers use is to double the map estimate on hill road and add an hour for any sustained climb. Applied to Shimla-Manali that gives seven to eight hours against the four a mapping app will suggest, and seven to eight is what it takes.',
      ],
      link: { label: 'The nine-day Himachal grand circuit', href: '/himachal-grand-circuit-by-car' },
    },
    {
      eyebrow: 'The planning mistakes',
      heading: 'The four itinerary faults this produces',
      paras: [
        '**Too many destinations.** The commonest by far. A Himachal itinerary with Shimla, Manali, Dharamshala and Dalhousie in six days is three towns seen from a car window, because the three transfers alone are twenty-two hours. Nine days is the honest version.',
        '**The long day at the end.** An itinerary that finishes with a 560 km run home on the last day is planned by someone who was fresh when they planned it. The Himachal circuit on this site deliberately finishes on the fast NH-44 rather than on a hill descent for exactly this reason.',
        '**Arriving in the dark.** Hill roads are a different proposition after sunset, and a schedule with no margin converts a two-hour delay into a night arrival on a gorge road. Leaving at six rather than nine is the single most effective fix and the one most often ignored.',
        '**Counting a walk day as a travel day.** Char Dham is the clearest case: two of its twelve days are the Kedarnath ascent and descent, on foot, and no distance is covered at all. An itinerary that treats those as driving days has lost two days somewhere else.',
      ],
      link: { label: 'The twelve-day Char Dham circuit', href: '/char-dham-circuit-by-car' },
    },
    {
      eyebrow: 'How to plan',
      heading: 'Building an itinerary on hours rather than kilometres',
      paras: [
        'Write the hours column first. For each leg, take the realistic figure from the table above rather than a mapping estimate, and add an hour for any sustained ghat. Then look at the total per day. Anything over eight hours is a day in the car; anything over ten should be split or reconsidered.',
        'Give every destination a full day or a clear half. A town reached at six in the evening and left at eight the next morning has not been visited, and the drive to it was spent for nothing.',
        'Put the long legs early. Fatigue is cumulative over a week and the last day is the worst time for the hardest drive — which is why the Rajasthan circuit runs anticlockwise and the Himachal one clockwise.',
        'And add a spare day on anything longer than a week, particularly in the monsoon. It converts a closure or a delay from a cascade into an inconvenience.',
      ],
      link: { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    },
  ],

  tips: [
    { title: 'Double the map estimate on hill road', text: 'And add an hour for any sustained climb. Applied to Shimla-Manali that gives seven to eight hours, which is what it actually takes.' },
    { title: 'Write the hours column, not the kilometres column', text: 'Every bad multi-day itinerary we are asked to quote was planned on distance. Over eight hours is a day in the car; over ten should be split.' },
    { title: 'Long legs early, never last', text: 'Fatigue is cumulative and the final day is the worst time for the hardest drive. It is why the circuits on this site run the direction they do.' },
    { title: 'Six a.m. starts on hill days', text: 'The single most effective planning decision. It buys daylight at the far end and absorbs a delay without a night arrival on a gorge road.' },
    { title: 'A walk day is not a travel day', text: 'Kedarnath costs two days on foot with no distance covered. An itinerary that counts them as driving days has lost two days elsewhere.' },
  ],

  faqs: [
    { question: 'How many kilometres a day is comfortable on an Indian road trip?', answer: 'It depends on the road by a factor of more than three. On an access-controlled expressway, 450 to 550 km. On a four or six lane national highway, 350 to 450. On a surfaced hill road, 150 to 250. On a mountain gorge road, 100 to 150. Those are comfortable distances with a daylight start, two stops and arrival before dark — not maximums.' },
    { question: 'Why does 250 km take seven hours in the hills?', answer: 'Three reasons compound. The road is longer than the map distance because it switchbacks — Dehradun to Mussoorie is 20 km straight-line and 35 km by road. Cornering limits speed regardless of surface quality. And overtaking is rare, so one slow vehicle sets the pace for kilometres. Our drivers double the map estimate on hill road and add an hour for any sustained climb.' },
    { question: 'How long does 300 km take in India?', answer: 'Between four hours and twelve, depending entirely on the road. Three hundred kilometres of Yamuna Expressway is about four and a half hours. Three hundred kilometres of the Kullu valley and Jogindernagar road is nine or ten. This is why the 300 km per day figure on a rate card is a billing unit rather than a schedule.' },
    { question: 'How many cities can I cover in a week by car?', answer: 'In Rajasthan on good highway, four or five comfortably. In Himachal or Garhwal, three at most, because the transfers between hill towns are six to eight hours each. A six-day Himachal itinerary with four towns is three towns seen from a car window — the honest version of that trip is nine days.' },
    { question: 'Should I drive the longest leg first or last?', answer: 'First, or at least early. Fatigue is cumulative across a multi-day trip and the final day is the worst time for the hardest drive. It is why the Rajasthan circuit on this site runs anticlockwise — putting the two long desert legs mid-trip — and why the Himachal one finishes on fast highway rather than a hill descent.' },
    { question: 'What time should I start on a hill driving day?', answer: 'Six in the morning. It is the single most effective planning decision available and the one most often skipped. It buys daylight at the far end, gets you past the worst stretches before afternoon rain in the monsoon, and lets a two or three hour delay be absorbed rather than turning into a night arrival on a gorge road.' },
  ],

  related: [
    { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    { label: 'Monsoon and landslide risk on hill roads', href: '/monsoon-landslide-risk-hill-roads' },
    { label: 'The nine-day Himachal grand circuit', href: '/himachal-grand-circuit-by-car' },
    { label: 'The ten-day Rajasthan grand circuit', href: '/rajasthan-grand-circuit-by-car' },
    { label: 'Driver rest and long drives', href: '/driver-rest-and-long-drives' },
  ],
};
