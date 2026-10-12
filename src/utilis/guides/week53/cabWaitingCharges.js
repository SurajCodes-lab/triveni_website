// Week 53 answer-proof guide 12 — "Cab waiting charges: when the clock runs and
// when it does not"
//
// WHY THIS SHAPE
// A cost question that no page on this site answers and that causes more
// end-of-trip friction than the fare itself. The site publishes a 4 hr / 40 km
// local package and a 300 km per day outstation minimum, and says nothing about
// what happens when a car waits.

export const guide = {
  slug: 'cab-waiting-charges-explained',
  path: '/cab-waiting-charges-explained',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Cost guide · Waiting',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'Cab waiting charges explained',
  titleLead: 'Cab waiting charges:',
  titleAccent: 'when the clock runs and when it does not',
  title: 'Cab Waiting Charges: When the Clock Runs and When It Does Not',
  metaTitle: 'Cab Waiting Charges: When the Clock Runs, and When Not',
  metaDescription: 'When a cab charges for waiting and when it does not: the difference between a package hire and a point-to-point drop, why an outstation day includes waiting, and the airport exception.',
  keywords: ['cab waiting charges', 'taxi waiting charge per hour', 'does outstation cab charge waiting', 'airport taxi waiting time', 'local package extra hours', 'cab waiting time india'],
  heroImage: '/images/car/ertiga.jpg',
  heroAlt: 'An Ertiga from the Triveni Cabs fleet waiting on a sightseeing day',

  lead: 'On an outstation hire you are not charged for waiting at all, because you have hired the vehicle and driver for the day and waiting is what a sightseeing day mostly consists of. On a local package you are charged beyond the included four hours, at the published extra-hour rate. On a point-to-point drop, waiting is not part of the deal and a long wait becomes an hourly charge. And on a tracked airport pickup the clock starts when the aircraft lands, not when it was scheduled to — which is the distinction worth checking anywhere you book.',

  keyFacts: [
    { label: 'Outstation day hire', value: 'No waiting charge — the day is yours' },
    { label: 'Local package', value: '4 hrs / 40 km included, then extra hours' },
    { label: 'Point-to-point drop', value: 'Waiting is not included' },
    { label: 'Tracked airport pickup', value: 'Clock starts at actual landing' },
  ],
  stickyLabel: 'Cab hire',
  stickyPrice: 'Fare fixed before travel',
  waText: 'Hi, I would like a quote and want to understand the waiting position for my itinerary.',

  intro: [
    'Waiting is where a quoted fare and a final bill most often diverge, and almost always because the two sides were thinking about different kinds of hire. Somebody who booked a drop and then asked the driver to wait two hours at a temple has changed the product; somebody who booked an outstation day and was charged for waiting has been overcharged.',
    'There are four arrangements on this site and they treat waiting differently. Knowing which one you are on settles the question before it arises.',
  ],

  table: {
    title: 'Waiting, by type of hire',
    caption: 'How waiting time is treated across outstation day hire, the local package, a point-to-point drop and an airport pickup',
    intro: 'The useful question is not "does this cab charge for waiting" but "what did I hire".',
    columns: [
      { key: 'type', label: 'Type of hire' },
      { key: 'basis', label: 'What you bought' },
      { key: 'wait', label: 'Waiting' },
      { key: 'note', label: 'What to watch' },
    ],
    rows: [
      { type: 'Outstation, per day', basis: 'The vehicle and driver for the day, min 300 km', wait: '**Included**', note: 'A local sightseeing day is mostly waiting. That is the product.' },
      { type: 'Local package', basis: '4 hrs and 40 km', wait: 'Included to 4 hrs', note: 'Beyond that, extra hours and extra km at the published rates' },
      { type: 'Point-to-point drop', basis: 'A journey from A to B', wait: '**Not included**', note: 'A long stop en route changes the product; agree it first' },
      { type: 'Airport pickup, tracked', basis: 'The transfer, flight tracked', wait: 'From actual landing', note: 'Ask whether the clock starts at scheduled or actual landing' },
      { type: 'Multi-day hire', basis: 'The vehicle for N days', wait: '**Included**', note: 'Walk days and local days bill the 300 km minimum, not an hourly wait' },
    ],
    footnote: 'The 4 hr / 40 km local package and the 300 km per day outstation minimum are both on the published rate card. Extra-hour and extra-kilometre rates beyond the local package are published alongside it.',
  },

  sections: [
    {
      eyebrow: 'The outstation case',
      heading: 'Why an outstation day has no waiting charge at all',
      paras: [
        'Because the 300 km per day minimum already pays for the day. On a local sightseeing day in Jaipur the car covers 40 to 90 km and bills 300, and the gap between those two figures is precisely the cost of the vehicle and driver being committed to you while not moving.',
        'Char Dham is the extreme illustration. Three of the twelve days the car does not move at all — one waiting at Jankichatti while you walk to Yamunotri, two waiting at Gaurikund while you are at Kedarnath. The circuit bills 3,600 km against 1,600 driven, and nobody is charged an hourly wait for two days at a trailhead.',
        'So an outstation or multi-day hire that produces a waiting charge is being billed twice for the same thing. The minimum is the waiting charge, stated as a distance.',
      ],
      link: { label: 'What a week-long cab hire costs, and how the minimum works', href: '/week-long-cab-hire-cost' },
    },
    {
      eyebrow: 'The two that do charge',
      heading: 'The local package and the point-to-point drop',
      paras: [
        'The **local package** is 4 hours and 40 km. Within that, waiting is included — a four-hour city morning with three stops is exactly what it is for. Beyond four hours the extra-hour rate applies, and beyond 40 km the extra-kilometre rate. Both are published. A six-hour local hire is therefore the package plus two extra hours, which is a known figure rather than a surprise.',
        'A **point-to-point drop** is a journey, not a period. The fare covers getting you from A to B, and a stop of more than a few minutes en route is a change to what was bought. Ten minutes at a dhaba is normal and nobody counts it; ninety minutes at a temple is a different hire and should be agreed before the driver sets out, not negotiated at the kerb.',
        'The honest way to handle the second case is simply to say what you want at the booking stage. "Delhi to Agra with two hours at Mathura on the way" is a quotable request. "Delhi to Agra" followed by two hours at Mathura is a renegotiation.',
      ],
      link: { label: 'The 4 hr / 40 km local package', href: '/4hr-40km-local-cab' },
    },
    {
      eyebrow: 'The airport exception',
      heading: 'The one question to ask about airport waiting',
      paras: [
        'Whether the waiting clock starts at the **scheduled** landing time or the **actual** one. It sounds like a technicality and it is the difference between a tracked pickup and a nominal one.',
        'If the clock starts at the scheduled time, a two-hour flight delay produces two hours of waiting charges before you have even cleared immigration — and "flight tracking included" can sit alongside exactly that. If it starts at actual landing, a delay costs nothing and the driver simply arrives later.',
        'On this site a tracked delay is not a surcharge event: the published route fare stands whether you land on time or three hours late, and the driver\'s arrival is set by the aircraft. Immigration and baggage are allowed for after that. Ask the same question wherever you book, because the phrase "flight tracking" alone does not answer it.',
      ],
      link: { label: 'Pre-booked airport pickup or the prepaid counter', href: '/airport-pickup-vs-prepaid-taxi' },
    },
  ],

  tips: [
    { title: 'Know which hire you are on', text: 'Outstation day and multi-day: waiting included. Local package: included to four hours. Point-to-point drop: not included. That one distinction prevents most disputes.' },
    { title: 'Say the stop out loud at booking', text: '"Delhi to Agra with two hours at Mathura" is quotable. The same stop announced at the kerb is a renegotiation.' },
    { title: 'An outstation waiting charge is a double charge', text: 'The 300 km per day minimum already pays for the car standing still. If both appear on a bill, question it.' },
    { title: 'Ask when the airport clock starts', text: 'Scheduled landing or actual landing. "Flight tracking included" does not by itself answer that, and the difference is hours of charges on a delayed arrival.' },
    { title: 'Six hours local is the package plus two', text: 'Not a new quote. The extra-hour and extra-kilometre rates are published, so a longer local hire is arithmetic rather than negotiation.' },
  ],

  faqs: [
    { question: 'Do outstation cabs charge waiting time?', answer: 'Not on this site, because the 300 km per day minimum already pays for the day. A local sightseeing day covers 40 to 90 km and bills 300, and that gap is exactly the cost of the vehicle and driver being committed to you while not moving. An outstation hire that also produces an hourly waiting charge is billing twice for the same thing.' },
    { question: 'What are cab waiting charges on a local package?', answer: 'The published 4 hr / 40 km local package includes waiting within those four hours — a city morning with three stops is what it is for. Beyond four hours the published extra-hour rate applies and beyond 40 km the extra-kilometre rate. A six-hour local hire is the package plus two extra hours, which is a known figure rather than a surprise.' },
    { question: 'Can I ask a drop-taxi to wait for me?', answer: 'Yes, but say so at the booking stage rather than at the kerb. A point-to-point drop is a journey, not a period, so the fare covers A to B. A few minutes at a tea stop is normal; ninety minutes at a temple is a different hire. "Delhi to Agra with two hours at Mathura" is quotable in advance and awkward to negotiate halfway.' },
    { question: 'Does a delayed flight mean waiting charges on an airport pickup?', answer: 'It depends on something worth asking everywhere you book: whether the clock starts at the scheduled landing or the actual one. On this site it starts at actual landing — a tracked delay is not a surcharge event and the published route fare stands. Elsewhere, "flight tracking included" sometimes sits alongside a clock that began when the aircraft was due.' },
    { question: 'How much waiting is included on a multi-day hire?', answer: 'All of it. On a multi-day hire you have the vehicle and driver for the period, billed at the greater of actual distance or 300 km a day. On the Char Dham circuit the car does not move at all for three of the twelve days — one at Jankichatti and two at Gaurikund — and no hourly wait is charged for any of it.' },
  ],

  related: [
    { label: 'The published rate card', href: '/routes' },
    { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    { label: 'One-way drop charges explained', href: '/one-way-drop-charges-explained' },
    { label: 'Pre-booked airport pickup or the prepaid counter', href: '/airport-pickup-vs-prepaid-taxi' },
    { label: 'Local package or outstation: which applies', href: '/local-package-or-outstation-which-applies' },
  ],
};
