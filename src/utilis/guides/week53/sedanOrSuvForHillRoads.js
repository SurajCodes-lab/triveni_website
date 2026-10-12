// Week 53 answer-proof guide 4 — "Sedan or SUV for hill roads?"
//
// WHY THIS SHAPE
// A comparison question with a real answer that depends on facts the customer
// does not have — which specific roads their itinerary uses — and which no
// search panel can carry because it is about this fleet on these routes.
//
// It is also the question that most often gets answered badly in our own
// favour. The honest answer is that a sedan is fine on a great many hill
// itineraries and the upsell is unnecessary, and saying so is worth more than
// the margin on a few Innova bookings. Where the SUV genuinely matters, this
// page names the roads.

export const guide = {
  slug: 'sedan-or-suv-for-hill-roads',
  path: '/sedan-or-suv-for-hill-roads',
  mood: 'hills',
  cluster: 'logistics',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Comparison guide · Vehicles',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'Sedan or SUV for hill roads',
  titleLead: 'Sedan or SUV for hill roads?',
  titleAccent: 'The roads where it genuinely matters',
  title: 'Sedan or SUV for Hill Roads? The Roads Where It Matters',
  metaTitle: 'Sedan or SUV for Hill Roads: When the Upgrade Is Worth It',
  metaDescription: 'Whether to take a sedan or an SUV on hill roads: the specific routes where ground clearance matters, where a sedan is perfectly adequate, and what the difference costs per day.',
  keywords: ['sedan or suv for hill roads', 'best car for himachal roads', 'is sedan ok for manali', 'innova vs sedan hill station', 'which cab for uttarakhand hills', 'ground clearance hill driving', 'sedan on ghat road'],
  heroImage: '/images/car/ertiga.jpg',
  heroAlt: 'An Ertiga from the Triveni Cabs fleet, the middle option for hill routes',

  lead: 'On most hill itineraries a sedan is perfectly adequate, and the upgrade is often sold where it is not needed. Shimla, Mussoorie, Nainital, Dharamshala and the main Manali valley are all reached on surfaced two-lane roads that a Swift Dzire handles without difficulty. Where the SUV genuinely earns its ₹4 to ₹7 per kilometre is a short, specific list: the Jot pass, Chopta and Auli, the Parvati valley, the Abu Road ghat, unmade resort approach roads, and anything with snow on it. The difference is ground clearance and engine braking on a loaded descent, not power going up.',

  keyFacts: [
    { label: 'Sedan', value: '₹11/km · fine on most hill routes' },
    { label: 'Ertiga or SUV', value: '₹15/km · the sensible middle' },
    { label: 'Innova Crysta', value: '₹18/km · four people, nine days, hill road' },
    { label: 'What matters', value: 'Clearance and engine braking, not power' },
  ],
  stickyLabel: 'Hill route cab',
  stickyPrice: 'Sedan ₹11/km · SUV ₹15/km',
  waText: 'Hi, I am planning a hill trip and would like advice on whether a sedan or an SUV suits the route.',

  intro: [
    'The question is usually asked the wrong way round. People ask whether a sedan "can make it", imagining a power problem on a climb. Modern sedans climb Himachal and Uttarakhand hill roads without any difficulty at all; our drivers take them to Shimla, Mussoorie and McLeod Ganj every week of the season.',
    'The real variables are ground clearance on a rough or unmade surface, engine braking on a long loaded descent, and seat comfort over the number of hours a hill route actually takes. Those are different problems from power, and they point at different roads.',
    'What follows is the honest version: the routes where a sedan is fine, the routes where it is not, and what the difference costs. We would rather you took the right vehicle than the expensive one.',
  ],

  table: {
    title: 'Which vehicle for which hill route',
    caption: 'Vehicle recommendation by hill route, with the reason the recommendation differs',
    intro: 'The recommendation is about the specific road rather than about altitude or distance. A high destination on a good road needs less vehicle than a low one on a bad road.',
    columns: [
      { key: 'route', label: 'Route' },
      { key: 'veh', label: 'Recommended' },
      { key: 'why', label: 'Why' },
    ],
    rows: [
      { route: 'Delhi → Shimla', veh: 'Sedan is fine', why: 'NH-5 is surfaced two-lane with good camber all the way up from Kalka' },
      { route: 'Delhi → Mussoorie', veh: 'Sedan is fine', why: 'The 35 km Dehradun climb is well maintained; brakes matter more on the way down' },
      { route: 'Delhi → Nainital', veh: 'Sedan is fine', why: 'The Kathgodam climb is 35 km of good road' },
      { route: 'Delhi / Amritsar → Dharamshala', veh: 'Sedan to the valley, SUV for McLeod Ganj', why: 'The 9 km above lower Dharamshala is steep and narrow with tight parking' },
      { route: 'Manali valley and Solang', veh: 'Ertiga or Innova', why: 'Solang road surface and winter conditions; snow is common in season' },
      { route: 'Manali → Lahaul via the Atal tunnel', veh: 'Ertiga or Innova', why: 'High, cold and the approach can carry snow or slush' },
      { route: 'Kasol and the Parvati valley', veh: 'Ertiga or Innova', why: 'Narrow single-lane stretches with a river below and a rough surface in places' },
      { route: 'Dharamshala → Dalhousie over the Jot pass', veh: 'Ertiga or Innova', why: 'High pass, narrow, and the surface varies considerably with the season' },
      { route: 'Chopta and Tungnath', veh: 'Ertiga or Innova', why: 'Continuous mountain road above Ukhimath; cold at 2,700 m' },
      { route: 'Auli and Joshimath', veh: 'Innova', why: 'The Alaknanda gorge road plus a steep final climb that can need chains' },
      { route: 'Abu Road ghat to Mount Abu', veh: 'Ertiga or Innova', why: '27 km of continuous hairpins — engine braking on a loaded descent' },
      { route: 'Spiti via Kunzum La', veh: 'Innova, high clearance', why: 'Unmade sections, water crossings and 4,590 m; a sedan is not appropriate' },
    ],
    footnote: 'Published rates: sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km. Over a nine-day Himachal circuit the difference between a sedan and an Innova is about ₹18,900 — real money, and worth it on some of these routes and not others.',
  },

  sections: [
    {
      eyebrow: 'The real variables',
      heading: 'It is not about power. It is about clearance, braking and hours.',
      paras: [
        'Ground clearance decides whether a vehicle can take an unmade or broken surface without grounding. That is the issue in the Parvati valley, on some Jot pass stretches, on the final climb to Auli, and above all on the approach roads to hill properties, which are frequently the worst few hundred metres of a whole journey.',
        'Engine braking decides how comfortable and how safe a long descent is. A heavier vehicle with a larger engine holds a gear down the Abu Road ghat or the Mussoorie descent in a way a small sedan does not, and on 27 km of continuous hairpins with four people and luggage aboard that is a real difference rather than a theoretical one.',
        'Hours decide comfort. A hill route takes far longer than its distance suggests — Shimla to Manali is 250 km and seven to eight hours — and four adults in a sedan for eight hours of winding road is a different experience from four in an Innova. On a nine-day circuit that compounds.',
        'What does not matter much is the climb itself. A modern sedan has ample power for every road in this table except Spiti, and anyone who tells you otherwise is selling something.',
      ],
      link: { label: 'The nine-day Himachal grand circuit', href: '/himachal-grand-circuit-by-car' },
    },
    {
      eyebrow: 'The sedan case',
      heading: 'Where a sedan is genuinely the right choice',
      paras: [
        'Two people on a main-road hill itinerary. Shimla, Mussoorie, Nainital and the Kangra valley are reached on surfaced two-lane highway, and for a couple with ordinary luggage the sedan at ₹11 per km is the correct answer rather than a compromise. Over a nine-day circuit it saves about ₹18,900 against an Innova.',
        'Short hill trips of two or three days, where the hours in the car are modest and comfort matters less.',
        'And the summer and autumn seasons specifically. Most of the clearance and braking arguments get much stronger when there is snow, slush or monsoon washout involved. In May or October on a main road, a sedan is simply a smaller car.',
        'What should change your mind is a party of four with real luggage, a route in this table marked SUV, a winter date, or a hotel whose last stretch is unmade. Tell us the hotels when you book and we will say honestly which of those applies.',
      ],
      link: { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    },
    {
      eyebrow: 'The upgrade',
      heading: 'Ertiga, Innova or Tempo Traveller — what the steps buy',
      paras: [
        'The Ertiga at ₹15 per km is the sensible middle and the one we recommend most often for hill routes. It carries six, has the clearance for everything in this table except Spiti, and costs about ₹8,400 more than a sedan over a nine-day circuit.',
        'The Innova Crysta at ₹18 adds comfort rather than capability over the Ertiga — more space for the same six people, a better ride over long hours, and the stronger engine braking that matters on the Abu Road ghat and the Auli climb. For four adults on a week or more of hill road, it is the vehicle we would actually choose.',
        'The 12-seater Tempo Traveller at ₹23 is for the group that does not fit anything else. It handles the Kullu valley, the Jot pass and the Kathgodam climb comfortably; what it does not do is reach some McLeod Ganj and hill-resort approach roads, which need confirming venue by venue. Split twelve ways it is the cheapest per head of anything on the list.',
      ],
      link: { label: 'The published rate card', href: '/routes' },
    },
    {
      eyebrow: 'Winter',
      heading: 'What changes when there is snow',
      paras: [
        'Everything in the sedan column moves one step up. Snow and slush make clearance and traction matter on roads where neither matters in May, and the Solang road, the Atal tunnel approach, the Jot pass and the Auli climb can all require chains after heavy snowfall — which a sedan cannot usefully carry.',
        'The second change is uncertainty. In winter the question stops being which vehicle is better and becomes whether the road is open at all, and that is decided on the morning rather than at the booking stage. Our drivers check before setting out; we would rather tell you at breakfast that Solang is shut than take you to Gulaba to find out.',
        'If snow is the point of the trip, say so when booking. It changes the vehicle, it changes which destinations we would suggest, and it changes how much slack the itinerary needs.',
      ],
      link: { label: 'When Rohtang and the Atal tunnel are open', href: '/when-does-rohtang-and-atal-tunnel-open' },
    },
  ],

  tips: [
    { title: 'Tell us the hotels, not just the towns', text: 'The worst surface on a hill trip is usually the last three hundred metres to the property. That, more than the highway, decides the vehicle.' },
    { title: 'Two people on a main road: take the sedan', text: 'Shimla, Mussoorie, Nainital and the Kangra valley are surfaced two-lane roads. The upgrade on those routes is comfort, not capability.' },
    { title: 'Four adults and a week: take the Innova', text: 'Not for the climbs but for the hours. Eight hours of winding road is a different trip in a Crysta than in a sedan.' },
    { title: 'Winter moves every answer up a step', text: 'Snow and slush make clearance matter on roads where it does not in May, and chains are not a sedan option.' },
    { title: 'Spiti is the one hard rule', text: 'Kunzum La at 4,590 metres with unmade sections and water crossings is not a sedan route in any season.' },
  ],

  faqs: [
    { question: 'Is a sedan okay for hill roads?', answer: 'On most hill routes, yes. Shimla, Mussoorie, Nainital, the Kangra valley and the main Manali road are surfaced two-lane roads that a Swift Dzire handles without difficulty, and our drivers take sedans up them every week of the season. Where a sedan is not the right choice is the Parvati valley, the Jot pass, Chopta, Auli, the Abu Road ghat, unmade resort approaches, Spiti, and anything with snow on it.' },
    { question: 'Do I need an SUV for Manali?', answer: 'Not for Manali itself, which is reached on good valley road. For Solang, the Atal tunnel run to Lahaul, or anything in winter, an Ertiga or Innova is the better choice — those are surface and snow questions rather than climbing ones. For the town and the Kullu valley in summer a sedan is fine.' },
    { question: 'What is the difference between an Ertiga and an Innova for hill driving?', answer: 'Comfort rather than capability. Both have the clearance for every route except Spiti. The Innova gives six people more space, a better ride over the long hours a hill route takes, and stronger engine braking on a sustained loaded descent like the Abu Road ghat or the Auli climb. For four adults on a week or more, the Innova is what we would choose; for shorter trips the Ertiga is the sensible middle.' },
    { question: 'How much more does an SUV cost than a sedan?', answer: '₹4 per km for an Ertiga or SUV and ₹7 for an Innova Crysta, against ₹11 for a sedan. Over a nine-day Himachal circuit on the 300 km per day minimum that is about ₹8,400 more for the Ertiga and ₹18,900 more for the Innova. Real money, which is why it is worth knowing which routes actually need it.' },
    { question: 'Can a Tempo Traveller go on hill roads?', answer: 'Yes, on the main ones. A 12-seater handles the Kullu valley, the Kathgodam climb, the Jot pass and the Shimla road comfortably, and split twelve ways it is the cheapest per head of any vehicle. What needs confirming venue by venue is the final approach — some McLeod Ganj and hill-resort access roads are too narrow for it, so tell us the property when you book.' },
    { question: 'Does the vehicle matter for climbing steep hill roads?', answer: 'Much less than people expect. A modern sedan has ample power for every route we run except Spiti. The variables that actually matter are ground clearance on a broken surface, engine braking on a long descent, and passenger comfort over the hours a hill route takes. Anyone framing this as a power question is selling an upgrade you may not need.' },
  ],

  related: [
    { label: 'The published rate card', href: '/routes' },
    { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    { label: 'The nine-day Himachal grand circuit', href: '/himachal-grand-circuit-by-car' },
    { label: 'The eight-day Uttarakhand hills circuit', href: '/uttarakhand-hills-circuit-by-car' },
    { label: 'Rohtang pass permit', href: '/rohtang-pass-permit-guide' },
  ],
};
