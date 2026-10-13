// Week 53 answer-proof guide 26 — "Travelling with small children by cab"
//
// WHY THIS SHAPE
// A logistics question asked on a large share of family bookings and answered
// almost nowhere with specifics. The honest content includes something most
// operators avoid saying: Indian cabs do not come with child seats, so the
// arrangement has to be made deliberately rather than assumed.

export const guide = {
  slug: 'child-safety-seats-outstation-cab',
  path: '/child-safety-seats-outstation-cab',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Logistics guide · Families',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'Travelling with small children by cab',
  titleLead: 'Travelling with small children:',
  titleAccent: 'the seat, the stops and the day length',
  title: 'Travelling with Small Children by Cab: What to Arrange',
  metaTitle: 'Child Seats and Long Cab Journeys: What to Arrange',
  metaDescription: 'Travelling with a baby or toddler by outstation cab in India: why cabs do not come with child seats, which vehicles take one properly, how to shape the day, and what to carry.',
  keywords: ['child seat in taxi india', 'baby car seat outstation cab', 'travelling with toddler by car india', 'family road trip with baby india', 'isofix in indian taxi', 'long car journey with small children'],
  heroImage: '/images/car/ertiga.jpg',
  heroAlt: 'An Ertiga from the Triveni Cabs fleet, a practical family vehicle',

  lead: 'Indian cabs do not come with child seats, and an operator who implies otherwise is overselling. If you want your child in a proper seat — and for a six-hour highway drive you should — you bring it or you arrange it specifically in advance. The second thing worth knowing is that the Ertiga and the Innova Crysta take a seat properly with room to belt it in and get a child in and out, and a sedan rear bench is a squeeze with a rear-facing seat plus two adults. The third is that the day length matters more than anything: four hours of driving broken into two is a different journey from six in one go.',

  keyFacts: [
    { label: 'Child seats', value: 'Not standard — bring or pre-arrange' },
    { label: 'Best vehicle', value: 'Ertiga or Innova Crysta' },
    { label: 'Stop every', value: '90 minutes to 2 hours' },
    { label: 'Realistic day', value: '4–5 hrs driving, not 8' },
  ],
  stickyLabel: 'Family cab hire',
  stickyPrice: 'Ertiga ₹15/km · Innova ₹18/km',
  waText: 'Hi, we are travelling with a small child and would like advice on the vehicle and the day plan.',

  intro: [
    'Family bookings with a baby or toddler are a large share of what this business runs, and the questions are always the same three: can you provide a car seat, which vehicle works, and how long can we realistically drive in a day. The answers are no by default, the Ertiga or Innova, and considerably less than you would plan for adults.',
    'The honest position on seats first, because it is the one most often fudged. Child restraint use in Indian taxis is not enforced and the vehicles are not supplied with seats. Some operators will say "we can arrange it" and produce something ill-fitting on the day. We would rather tell you to bring your own, and tell you which vehicles take one properly.',
    'What follows is the vehicle question, the day shape, and the practical list.',
  ],

  table: {
    title: 'Which vehicle, and why',
    caption: 'Vehicle suitability for travelling with small children, covering child seat fitting, access and practicality',
    intro: 'The middle columns are the ones that decide this. A vehicle that technically fits a seat but makes getting a child in and out difficult is the wrong vehicle for a ten-stop day.',
    columns: [
      { key: 'veh', label: 'Vehicle' },
      { key: 'seat', label: 'Takes a child seat' },
      { key: 'access', label: 'Getting a child in and out' },
      { key: 'verdict', label: 'Verdict' },
    ],
    rows: [
      { veh: 'Sedan (Swift Dzire or similar)', seat: 'One, rear bench', access: 'Low roof, narrow door', verdict: 'Workable for one child and two adults; tight with a rear-facing seat' },
      { veh: 'Ertiga', seat: 'One or two', access: 'Higher seat, wider aperture', verdict: '**The practical choice** for most families' },
      { veh: 'Innova Crysta', seat: 'One or two, more room', access: 'Highest, easiest', verdict: '**Best** for two children or a long itinerary' },
      { veh: 'Tempo Traveller 12-seater', seat: 'Possible but awkward', access: 'Step up; bench seating', verdict: 'For larger groups; not ideal for a baby specifically' },
    ],
    footnote: 'ISOFIX anchor availability varies by individual vehicle and should not be assumed — most child seats in India are fitted with the adult seat belt, which works but needs a few minutes and a belt long enough. Tell us at booking that you are bringing a seat and we will assign a vehicle where it fits and tell the driver to allow the time.',
  },

  sections: [
    {
      eyebrow: 'The seat',
      heading: 'The honest position, and what to do about it',
      paras: [
        'Cabs in India are not supplied with child seats, child restraint use in taxis is not enforced, and most families travel with a child on a lap or belted into an adult belt. That is the real situation and pretending otherwise helps nobody.',
        'For a city transfer of twenty minutes, most people accept that. For a six-hour highway drive at expressway speeds, the physics are different and a proper seat is worth the trouble of carrying one. Airlines take them as checked baggage without charge on most carriers, which makes bringing your own from home the realistic answer for a trip that starts with a flight.',
        'If you do bring one: tell us at the booking stage. We will assign an Ertiga or an Innova where it fits properly, and tell the driver to allow five minutes for fitting rather than treating it as an unexpected delay at the kerb. Most seats in India belt in with the adult belt rather than ISOFIX, which works but needs a belt long enough and a couple of minutes.',
        'What we will not do is claim to provide a seat and produce something that does not fit. If you ask us whether we can supply one, the answer is that we will try to source a specific type for a specific booking and we will tell you honestly whether we managed it — before you travel, not on the morning.',
      ],
      link: { label: 'Luggage capacity by vehicle', href: '/luggage-capacity-by-vehicle' },
    },
    {
      eyebrow: 'The day',
      heading: 'How long a day actually works with a toddler',
      paras: [
        'Four to five hours of driving, not eight, and broken into legs of ninety minutes to two hours. That is the single most useful planning number on this page and it is roughly half what the same itinerary would allow for adults.',
        'The consequence for a multi-day trip is real. The ten-day Rajasthan circuit has two legs over five hours and one at eight; with a small child those become two days each or get dropped. A family version of that circuit is Delhi, Jaipur, Pushkar, Jodhpur and back — the western legs to Jaisalmer are the ones to leave for another trip.',
        'The Golden Triangle with the shorter stops is the best fit of anything on this site for a family with a toddler: Delhi to Agra is three and a half hours, Agra to Bharatpur one, Agra to Jaipur four. Nothing is a long day and the stops are frequent.',
        'The other adjustment is to drive in the morning rather than the afternoon where you can. A child who naps for the first hour of a two-hour leg makes the journey considerably easier, and that is a morning phenomenon.',
      ],
      link: { label: 'The Golden Triangle with Ranthambore', href: '/golden-triangle-with-ranthambore-by-car' },
    },
    {
      eyebrow: 'The stops',
      heading: 'Where to stop, which is not obvious on an expressway',
      paras: [
        'Expressways are the fastest roads and the worst for stops. The Yamuna, Agra-Lucknow and Purvanchal expressways are access-controlled with limited and widely spaced facilities, so a child who needs to get out at the wrong moment is a problem the driver cannot immediately solve.',
        'The practical arrangement is to plan the stops rather than take them as they come. Our drivers on these corridors know which plazas and which rest areas have usable facilities, and on a family booking we will plan two specific stops rather than leaving it to chance.',
        'On the trunk roads and hill roads the opposite applies — stops are frequent and easy, dhabas every few kilometres, and the constraint is time rather than availability. On a hill road the stops are also where a child who is carsick needs to be, which is a real consideration on the Mussoorie and Mount Abu climbs.',
      ],
      link: { label: 'How many kilometres a day is comfortable', href: '/how-many-km-per-day-by-car' },
    },
    {
      eyebrow: 'The list',
      heading: 'What to carry that people forget',
      paras: [
        '**Water in more quantity than feels necessary**, particularly in Rajasthan and particularly between March and June. Dehydration in a small child moves faster than in an adult.',
        '**Something for travel sickness on a hill itinerary.** The Mussoorie climb, the Abu Road ghat and the Kullu valley road all produce it, and a forward-facing seat position helps considerably. Ask the driver for the front passenger area where a child is old enough.',
        '**Shade for the window.** A sedan or Ertiga rear window in Rajasthan at midday is direct sun on a car seat for hours. A stick-on shade costs almost nothing and makes a material difference.',
        '**Food that does not depend on finding somewhere.** Expressway stops are infrequent and a toddler\'s timing is not negotiable.',
        '**A plan for the pedestrian zones.** The walk from the drop point in Shimla, Vrindavan or Varanasi is the part of the day a pushchair handles badly. A carrier is often the better answer, and knowing which towns need one is worth asking about in advance.',
      ],
      link: { label: 'Where the car cannot go: pedestrian zones', href: '/pedestrian-only-zones-trip-planning' },
    },
  ],

  tips: [
    { title: 'Bring your own seat if the trip starts with a flight', text: 'Most airlines take a child seat as checked baggage without charge. It is the only reliable way to have one that fits.' },
    { title: 'Four to five hours driving a day, not eight', text: 'Roughly half an adult itinerary, in legs of ninety minutes to two hours. It is the most useful number on this page.' },
    { title: 'Drive in the morning', text: 'A child who naps through the first hour of a leg changes the journey, and that is a morning phenomenon rather than an afternoon one.' },
    { title: 'Plan expressway stops in advance', text: 'Access-controlled roads have widely spaced facilities. Our drivers know which ones are usable; leaving it to chance does not work with a toddler.' },
    { title: 'A carrier beats a pushchair in the old towns', text: 'Shimla\'s Mall walk, the Vrindavan lanes and the Varanasi ghats all handle a pushchair badly.' },
  ],

  faqs: [
    { question: 'Do Indian cabs provide child car seats?', answer: 'No, not as standard, and an operator who implies otherwise is overselling. Child restraint use in taxis is not enforced in India and the vehicles are not supplied with seats. For a twenty-minute city transfer most families accept that; for a six-hour highway drive a proper seat is worth carrying. Tell us at booking if you are bringing one and we will assign a vehicle where it fits and allow the fitting time.' },
    { question: 'Which cab is best for travelling with a baby or toddler?', answer: 'The Ertiga for most families and the Innova Crysta for two children or a long itinerary. Both have a higher seat and a wider door aperture, which matters enormously when you are lifting a child in and out ten times a day, and both take a child seat with room to belt it in properly. A sedan works for one child and two adults but is tight with a rear-facing seat.' },
    { question: 'How long can we drive in a day with a small child?', answer: 'Four to five hours of driving, in legs of ninety minutes to two hours — roughly half what the same itinerary would allow for adults. On a multi-day trip that changes the shape: the ten-day Rajasthan circuit has legs of five and eight hours which become two days each or get dropped. The Golden Triangle, where nothing exceeds four hours, is the best fit on this site for a family with a toddler.' },
    { question: 'Are there places to stop on the expressways with children?', answer: 'Fewer than you would want. The Yamuna, Agra-Lucknow and Purvanchal expressways are access-controlled with limited and widely spaced facilities, so stops have to be planned rather than taken as they come. On a family booking we plan two specific stops with usable facilities. Trunk roads and hill roads are the opposite — dhabas every few kilometres.' },
    { question: 'Does ISOFIX work in Indian taxis?', answer: 'Anchor availability varies by individual vehicle and should not be assumed. Most child seats in India are fitted with the adult seat belt instead, which works perfectly well but needs a belt long enough and a couple of minutes to do properly. Tell us you are bringing a seat and we will assign a vehicle where it fits and brief the driver to allow the time.' },
    { question: 'What should I carry for a long car journey with a child in India?', answer: 'More water than feels necessary, especially in Rajasthan between March and June. Something for travel sickness on any hill itinerary — the Mussoorie climb and the Abu Road ghat both produce it. A stick-on window shade, because rear-window sun on a car seat for four hours is a real problem. Food that does not depend on finding somewhere. And a carrier rather than a pushchair for the old towns, where the walk from the drop point is unavoidable.' },
  ],

  related: [
    { label: 'Luggage capacity by vehicle', href: '/luggage-capacity-by-vehicle' },
    { label: 'How many kilometres a day is comfortable', href: '/how-many-km-per-day-by-car' },
    { label: 'Where the car cannot go: pedestrian zones', href: '/pedestrian-only-zones-trip-planning' },
    { label: 'The Golden Triangle with Ranthambore', href: '/golden-triangle-with-ranthambore-by-car' },
    { label: 'Travelling with elderly parents by cab', href: '/travelling-with-elderly-parents-by-cab' },
    { label: 'Best time for Rajasthan by road', href: '/best-time-for-rajasthan-by-road' },
  ],
};
