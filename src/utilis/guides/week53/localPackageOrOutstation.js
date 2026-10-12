// Week 53 answer-proof guide 13 — "Local package or outstation: which applies
// to my trip?"
//
// WHY THIS SHAPE
// A cost question with a hard numerical boundary that the rate card enforces
// automatically and that nothing on the site explains. The 100 km crossover is
// the reason a 15 km Ajmer-to-Pushkar trip does not quote Rs 3,300, and a
// customer who does not know it exists cannot check a quote.

export const guide = {
  slug: 'local-package-or-outstation-which-applies',
  path: '/local-package-or-outstation-which-applies',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Cost guide · Which rate',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'Local package or outstation',
  titleLead: 'Local package or outstation?',
  titleAccent: 'The 100 km line, and why it exists',
  title: 'Local Package or Outstation? The 100 km Line Explained',
  metaTitle: 'Local Package or Outstation Rate: Where the 100 km Line Falls',
  metaDescription: 'Which rate applies to your trip: the 4 hr / 40 km local package or the outstation per-km rate with its 300 km daily minimum. Where the 100 km line falls and why a short trip must not be quoted on the minimum.',
  keywords: ['local package or outstation taxi', '4 hour 40 km cab package', 'outstation minimum km', 'local taxi rate vs outstation', 'short trip cab rate india', 'cab rate card explained'],
  heroImage: '/images/car/swift_dzire.jpg',
  heroAlt: 'A Swift Dzire sedan from the Triveni Cabs fleet on a local hire',

  lead: 'Below 100 km a trip is quoted from the published 4 hr / 40 km local package. At or above 100 km it is quoted on the outstation per-kilometre rate with its 300 km per day minimum. That single line is the most useful thing to know about the rate card, because applying the wrong side of it produces absurd figures: a 15 km run from Ajmer to Pushkar quoted on the outstation minimum is ₹3,300, which is an implied ₹220 per kilometre that nobody would believe.',

  keyFacts: [
    { label: 'Under 100 km', value: 'Local package: 4 hrs / 40 km' },
    { label: '100 km and above', value: 'Outstation per km, 300 km/day min' },
    { label: 'Why the line exists', value: 'A minimum is absurd on a short hop' },
    { label: 'Applied', value: 'Automatically, by the rate card' },
  ],
  stickyLabel: 'Local or outstation',
  stickyPrice: 'Fare fixed before travel',
  waText: 'Hi, I would like to know which rate applies to my trip and what it comes to.',

  intro: [
    'Every fare on this site comes from one of two instruments, and which one applies is decided by distance rather than by negotiation. Knowing the rule lets you check any quote on the site in about ten seconds.',
    'The outstation rate is per kilometre — sedan ₹11, Ertiga or SUV ₹15, Innova Crysta ₹18, 12-seater Tempo Traveller ₹23 — with a minimum of 300 km billed per day. That minimum exists because on a multi-day hire the vehicle and driver are committed to you whether the car covers 500 km or 60.',
    'The local package is 4 hours and 40 km with published extra-hour and extra-kilometre rates beyond. It exists because a minimum designed for a day of driving is the wrong instrument for a morning in a city.',
  ],

  table: {
    title: 'Which instrument applies, with worked examples',
    caption: 'How the local package and the outstation rate apply across trip types, with the resulting sedan fare',
    intro: 'The last column shows why the line matters: the same trip priced on the wrong instrument is not slightly off, it is absurd.',
    columns: [
      { key: 'trip', label: 'Trip' },
      { key: 'km', label: 'Km', align: 'right' },
      { key: 'rate', label: 'Which applies' },
      { key: 'fare', label: 'Sedan', align: 'right' },
      { key: 'wrong', label: 'On the wrong instrument', align: 'right' },
    ],
    rows: [
      { trip: 'Ajmer → Pushkar', km: '15', rate: 'Local package', fare: 'Package rate', wrong: '₹3,300 — ₹220/km, absurd' },
      { trip: 'A city morning, three stops', km: '35', rate: 'Local package', fare: 'Package rate', wrong: '₹3,300 for 35 km' },
      { trip: 'Airport → hotel', km: '25', rate: 'Local package', fare: 'Package rate', wrong: '₹3,300 for a transfer' },
      { trip: 'Jodhpur → Osian', km: '65', rate: 'Local package + extra km', fare: 'Package + extras', wrong: '₹3,300' },
      { trip: 'Delhi → Mathura', km: '160', rate: 'Outstation', fare: '₹3,300 (300 km min)', wrong: 'Package would not cover it' },
      { trip: 'Delhi → Agra', km: '230', rate: 'Outstation', fare: '₹3,300 (300 km min)', wrong: '—' },
      { trip: 'Delhi → Jaipur', km: '280', rate: 'Outstation', fare: '₹3,300 (300 km min)', wrong: '—' },
      { trip: 'Delhi → Manali', km: '540', rate: 'Outstation', fare: '₹5,940 (actual km)', wrong: '—' },
    ],
    footnote: 'Note that the three 300 km-minimum rows all bill ₹3,300 for a sedan despite covering 160, 230 and 280 km — that is the minimum doing its work, and it is why the fare stops falling below a certain distance. Above 300 km the actual distance takes over. Tolls, parking, state entry and the driver night allowance are extra at actual on either instrument.',
  },

  sections: [
    {
      eyebrow: 'The line',
      heading: 'Why 100 km, and what happens either side of it',
      paras: [
        'Below 100 km the outstation minimum stops describing anything real. A 15 km trip billed at 300 km is not a premium, it is a category error — the implied rate is ₹220 per kilometre and no customer would accept it, nor should they. The local package prices that trip as what it is: a short hire of a car and driver for part of a day.',
        'At or above 100 km the reverse applies. A 160 km run is a half-day journey out of the city and back, with fuel, driver hours and highway running that a 4 hr / 40 km package cannot absorb. The outstation rate with its minimum is the right instrument.',
        'One consequence worth noticing in the table above: **the sedan fare is ₹3,300 for a 160 km trip, a 230 km trip and a 280 km trip alike.** That is the minimum, and it means the fare per kilometre falls as the distance rises until you pass 300 km, after which actual distance takes over. A Delhi-Agra trip and a Delhi-Jaipur trip costing the same is not an error.',
      ],
      link: { label: 'The published rate card', href: '/routes' },
    },
    {
      eyebrow: 'Where it shows',
      heading: 'The rule is applied automatically, which is the point',
      paras: [
        'Every fare on this site is computed rather than typed, and the crossover is inside that computation. That is why the near-city destination pages — which list destinations from 15 km to 190 km from one origin — do not show an absurd figure for the close ones and a sensible figure for the far ones.',
        'The Pushkar entry on the Ajmer page is the clearest case. Fifteen kilometres over the Nag Pahar, and the fare shown is the local package figure because the rate card routes it there. Had the page quoted the outstation minimum, every near-city page on the site would carry a ₹3,300 fare against a 15 km destination and the whole family would read as untrustworthy.',
        'The same logic protects the weekend pages at the other end: a weekend trip is a round journey over two or three days, so it is quoted from the published round-trip model rather than from either of these two instruments.',
      ],
      link: { label: 'Places to visit near Ajmer', href: '/places-to-visit-near-ajmer' },
    },
    {
      eyebrow: 'Checking a quote',
      heading: 'How to check any fare on this site in ten seconds',
      paras: [
        'Work out the one-way distance. Under 100 km, expect a local-package figure and extra hours or kilometres if your plan exceeds 4 hours or 40 km. From 100 to 300 km, expect the 300 km minimum — ₹3,300 for a sedan, ₹4,500 for an Ertiga, ₹5,400 for an Innova, ₹6,900 for a Tempo Traveller — regardless of exactly how far it is.',
        'Above 300 km, multiply the actual distance by the per-kilometre rate. Delhi to Manali at 540 km is 540 × ₹11 = ₹5,940 for a sedan, and that is what the page says.',
        'For a multi-day hire, multiply 300 km by the number of days and then by the rate, unless your itinerary drives more than that — in which case the actual total takes over. Seven days is 2,100 km, so ₹23,100 for a sedan.',
        'If a quote does not reconcile with one of those three, ask which instrument it used. There is no fourth.',
      ],
      link: { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    },
  ],

  tips: [
    { title: 'Under 100 km should never quote the 300 km minimum', text: 'A 15 km trip at ₹3,300 is ₹220 a kilometre. If you see that, the operator has applied the wrong instrument.' },
    { title: '160, 230 and 280 km all cost the same', text: 'That is the minimum doing its work, not an error. Below 300 km the fare stops falling with distance.' },
    { title: 'Above 300 km, actual distance takes over', text: 'Delhi to Manali at 540 km is 540 × ₹11 = ₹5,940 for a sedan. The arithmetic is checkable.' },
    { title: 'A weekend trip uses neither', text: 'Round journeys over two or three days are quoted from the published round-trip model instead.' },
    { title: 'Three instruments, no fourth', text: 'Local package, outstation per km with a daily minimum, round-trip model. If a quote fits none of them, ask which it used.' },
  ],

  faqs: [
    { question: 'What is the difference between a local package and an outstation cab rate?', answer: 'The local package is 4 hours and 40 km with published extra-hour and extra-kilometre rates beyond it, and it applies below 100 km. The outstation rate is per kilometre — sedan ₹11, Ertiga ₹15, Innova ₹18, Tempo Traveller ₹23 — with a minimum of 300 km billed per day, and it applies at 100 km and above.' },
    { question: 'Why does a 15 km trip not cost a fraction of a 300 km one?', answer: 'It does, because it is quoted from the local package rather than the outstation minimum. If it were quoted on the minimum it would be ₹3,300 — an implied ₹220 per kilometre, which nobody would accept. The rate card routes anything under 100 km through the local package automatically, which is why the near-city pages show sensible fares for close destinations.' },
    { question: 'Why do Delhi to Agra and Delhi to Jaipur cost the same?', answer: 'Because both are under 300 km one way — 230 km and 280 km — so both bill the 300 km minimum, which is ₹3,300 for a sedan. The fare stops falling with distance below that threshold. Above 300 km the actual distance takes over, so Delhi to Manali at 540 km is ₹5,940.' },
    { question: 'How do I check whether a cab quote is right?', answer: 'Work out the one-way distance. Under 100 km, expect a local-package figure. From 100 to 300 km, expect the minimum — ₹3,300 sedan, ₹4,500 Ertiga, ₹5,400 Innova, ₹6,900 Tempo Traveller. Above 300 km, multiply actual distance by the per-km rate. For multi-day, 300 km times the days times the rate unless your route drives more. If a quote fits none of those, ask which instrument it used.' },
    { question: 'Which rate applies to a weekend trip?', answer: 'Neither of these two. A weekend getaway is a round journey over two or three days, so it is quoted from the published round-trip model — max(distance, 300) × 2 × the per-km rate, with a discount — which is the same model the round-trip route pages use. The weekend pages on this site all show that figure.' },
  ],

  related: [
    { label: 'The published rate card', href: '/routes' },
    { label: 'The 4 hr / 40 km local package', href: '/4hr-40km-local-cab' },
    { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    { label: 'Cab waiting charges explained', href: '/cab-waiting-charges-explained' },
    { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    { label: 'Places to visit near Ajmer', href: '/places-to-visit-near-ajmer' },
  ],
};
