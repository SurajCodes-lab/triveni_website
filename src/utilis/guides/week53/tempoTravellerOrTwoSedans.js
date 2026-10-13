// Week 53 answer-proof guide 18 — "Tempo Traveller or two sedans for a group of
// ten?"
//
// WHY THIS SHAPE
// A comparison question with an arithmetic answer that nobody publishes, and one
// where the cheaper option is also the better one — which makes it a rare case
// of advice that costs us nothing to give honestly. A 12-seater at Rs 23/km
// looks expensive against a sedan at Rs 11 until you divide by heads.

export const guide = {
  slug: 'tempo-traveller-or-two-sedans',
  path: '/tempo-traveller-or-two-sedans',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Comparison guide · Groups',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'Tempo Traveller or two sedans',
  titleLead: 'Tempo Traveller or two sedans?',
  titleAccent: 'The arithmetic, by group size',
  title: 'Tempo Traveller or Two Sedans? The Arithmetic by Group Size',
  metaTitle: 'Tempo Traveller or Two Sedans: The Cost per Head',
  metaDescription: 'Whether to book one Tempo Traveller or several smaller cars for a group: the cost per head at every group size, where the crossover falls, and the three non-cost reasons one vehicle wins.',
  keywords: ['tempo traveller or two cars', 'cost per person tempo traveller', 'group travel cab india', 'tempo traveller vs innova cost', 'cheapest cab for 10 people', 'group of 12 cab india'],
  heroImage: '/images/car/premium_suv.jpg',
  heroAlt: 'A vehicle from the Triveni Cabs fleet loaded for a group trip',

  lead: 'At ₹23 per kilometre a 12-seater Tempo Traveller looks expensive against a sedan at ₹11 — until you divide by the number of people in it. Across twelve passengers the Tempo works out at ₹1.92 per person per kilometre; three sedans carrying the same twelve work out at ₹2.75. The crossover is at about seven passengers: below it, smaller cars win on cost; at seven and above the Tempo Traveller is both cheaper per head and, for three separate reasons, a better trip.',

  keyFacts: [
    { label: 'Crossover', value: 'About 7 passengers' },
    { label: '12 in a Tempo', value: '₹1.92 per person/km' },
    { label: '12 in three sedans', value: '₹2.75 per person/km' },
    { label: 'Non-cost reasons', value: 'One driver, one convoy, one plan' },
  ],
  stickyLabel: 'Group cab hire',
  stickyPrice: 'Tempo Traveller ₹23/km',
  waText: 'Hi, we are a group and would like a quote comparing a Tempo Traveller with smaller cars.',

  intro: [
    'Group enquiries almost always arrive framed the wrong way. Somebody has looked at the rate card, seen ₹11 for a sedan and ₹23 for a Tempo Traveller, concluded the Tempo is twice the price, and asked whether two sedans would be cheaper.',
    'They are not comparable units. A sedan carries four and a 12-seater carries twelve, so the honest comparison is cost per person per kilometre, and on that basis the big vehicle is substantially cheaper for any group it is the right size for.',
    'The table below works it through at every group size on the published rate card, and the sections after it cover the part that is not about money.',
  ],

  table: {
    title: 'Cost per person per kilometre, by group size',
    caption: 'Comparison of vehicle combinations by group size, showing total per-km rate and cost per person per kilometre',
    intro: 'Vehicles are assigned at their comfortable capacity with luggage, not their maximum seat count. The right-hand column is the one that answers the question.',
    columns: [
      { key: 'pax', label: 'Group', align: 'right' },
      { key: 'opt', label: 'Option' },
      { key: 'rate', label: 'Total per km', align: 'right' },
      { key: 'per', label: 'Per person/km', align: 'right' },
      { key: 'verdict', label: 'Verdict' },
    ],
    rows: [
      { pax: '2', opt: '1 sedan', rate: '₹11', per: '₹5.50', verdict: 'Sedan, clearly' },
      { pax: '4', opt: '1 sedan', rate: '₹11', per: '₹2.75', verdict: 'Sedan if luggage is light' },
      { pax: '4', opt: '1 Ertiga', rate: '₹15', per: '₹3.75', verdict: 'Ertiga if luggage is full' },
      { pax: '6', opt: '1 Innova Crysta', rate: '₹18', per: '₹3.00', verdict: 'Innova' },
      { pax: '7', opt: '2 sedans', rate: '₹22', per: '₹3.14', verdict: 'Crossover point' },
      { pax: '7', opt: '1 Tempo Traveller', rate: '₹23', per: '₹3.29', verdict: 'Line ball on cost; Tempo on comfort' },
      { pax: '9', opt: '2 Ertigas', rate: '₹30', per: '₹3.33', verdict: 'Tempo wins' },
      { pax: '9', opt: '1 Tempo Traveller', rate: '₹23', per: '₹2.56', verdict: '**Tempo**' },
      { pax: '12', opt: '3 sedans', rate: '₹33', per: '₹2.75', verdict: 'Tempo wins' },
      { pax: '12', opt: '2 Innovas', rate: '₹36', per: '₹3.00', verdict: 'Tempo wins' },
      { pax: '12', opt: '1 Tempo Traveller', rate: '₹23', per: '**₹1.92**', verdict: '**Tempo, by a wide margin**' },
      { pax: '17', opt: '1 Tempo 17-seater', rate: 'On request', per: 'Lower still', verdict: 'Larger vehicle' },
    ],
    footnote: 'Published rates: sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km, with a 300 km per day minimum on outstation trips. Tolls, parking, state entry and the driver night allowance are extra at actual — and note that two cars means two sets of tolls and two driver allowances, which the per-km comparison above does not include.',
  },

  sections: [
    {
      eyebrow: 'The hidden doubling',
      heading: 'Two cars means two of everything that is charged at actual',
      paras: [
        'The per-kilometre comparison above understates the Tempo Traveller\'s advantage, because four of the five charges on a trip are per vehicle rather than per passenger.',
        '**Tolls are paid per vehicle.** Two cars crossing the Yamuna Expressway pay two sets of plaza charges. On a nine-day Uttar Pradesh circuit using three expressways, that is a material sum doubled.',
        '**State entry levies are per vehicle.** Each car entering Himachal or Uttarakhand pays its own. Two cars on a Himachal circuit pay twice.',
        '**The driver night allowance is per driver.** Two cars means two drivers away from base for every night of the trip, and that is the line people most often forget when comparing. On a ten-day Rajasthan circuit it is ten nights of allowance doubled.',
        '**Parking is per vehicle**, at every monument, hotel and airport.',
        'So a per-head calculation that already favours the Tempo at nine passengers favours it considerably more once the bill is complete.',
      ],
      link: { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    },
    {
      eyebrow: 'The non-cost case',
      heading: 'Three reasons one vehicle is a better trip than two',
      paras: [
        '**The group stays together.** Two cars on a 2,400 km Rajasthan circuit separate constantly — at fuel stops, in traffic, at a monument gate — and the group spends the trip on the phone coordinating. Everyone in one vehicle arrives, eats and leaves together, which on a multi-day trip is most of what travelling as a group is for.',
        '**One driver holds the plan.** On a route with fixed timings — the Taj at sunrise, Amber at opening, two safari slots, a pedestrian Mall road — a single driver who knows the whole itinerary is worth a great deal. Two drivers mean the plan has to be communicated twice and kept synchronised, and the second car is always the one that took the wrong turn.',
        '**Luggage actually fits.** This is the practical one. Three sedans carrying twelve people carry six large bags between them, which is half what twelve people bring. A 12-seater carries ten to twelve with all seats in use. The two-car plan very often fails on luggage before it fails on cost.',
      ],
      link: { label: 'Luggage capacity by vehicle', href: '/luggage-capacity-by-vehicle' },
    },
    {
      eyebrow: 'When two cars win',
      heading: 'The cases where smaller vehicles are genuinely right',
      paras: [
        '**Under seven passengers.** Below the crossover the arithmetic favours smaller cars and there is no reason to argue otherwise. Six people belong in an Innova at ₹18, not a Tempo at ₹23.',
        '**When the group splits during the trip.** If four people want a temple and six want a market on the same afternoon, two vehicles do something one cannot. On a city-based trip with divergent plans, two cars is the right answer at almost any group size.',
        '**Narrow hill access.** A 12-seater reaches most places but not everywhere — some McLeod Ganj and hill-resort approach roads are too narrow for it, and the Parvati valley is marginal. If the itinerary includes those, two Innovas may be the only option that reaches the door. Tell us the properties and we will say which applies.',
        '**Comfort over a long run, for a smaller group.** Nine people in a 12-seater is comfortable; nine people who would rather have two Innovas and more space each are making a reasonable choice at a known extra cost of ₹13 per kilometre.',
      ],
      link: { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    },
  ],

  tips: [
    { title: 'Compare per head, not per vehicle', text: 'A sedan at ₹11 and a 12-seater at ₹23 are not comparable units. Twelve people in the Tempo is ₹1.92 each per km; in three sedans, ₹2.75.' },
    { title: 'Two cars means two of every extra', text: 'Tolls, state entry, parking and the driver night allowance are all per vehicle. On a ten-day circuit that doubling is substantial.' },
    { title: 'The two-car plan usually fails on luggage first', text: 'Three sedans carrying twelve people carry six large bags between them. Twelve people bring more than six bags.' },
    { title: 'Under seven, take the smaller cars', text: 'The crossover is real. Six people belong in an Innova at ₹18, not a Tempo at ₹23.' },
    { title: 'Check the last stretch for a 12-seater', text: 'Some McLeod Ganj and hill-resort approach roads are too narrow. Tell us the properties and we will confirm before you book.' },
  ],

  faqs: [
    { question: 'Is a Tempo Traveller cheaper than two cars?', answer: 'For any group of seven or more, yes, and by a widening margin as the group grows. Twelve people in a 12-seater at ₹23 per km is ₹1.92 each; the same twelve in three sedans at ₹11 each is ₹2.75. The comparison understates it further because tolls, state entry, parking and the driver night allowance are all charged per vehicle.' },
    { question: 'What is the cheapest cab for a group of ten?', answer: 'A 12-seater Tempo Traveller at ₹23 per km, which across ten passengers is ₹2.30 each per kilometre. The alternatives — two Innovas at ₹36 total, or three sedans at ₹33 — are both more expensive per head and carry nothing like the luggage. Ten people with ten suitcases do not fit two Innovas.' },
    { question: 'Where is the crossover between small cars and a Tempo Traveller?', answer: 'About seven passengers. At seven, two sedans at ₹22 and one Tempo at ₹23 are effectively level on cost, and the Tempo wins on comfort and luggage. Below seven the smaller vehicles are genuinely cheaper and we would recommend them. Above seven the Tempo wins on every measure.' },
    { question: 'Should I book two cars so the group can split up?', answer: 'If the group genuinely splits during the trip, yes — two vehicles do something one cannot, and on a city-based trip with divergent plans that is the right answer at almost any group size. If the group travels together and only splits occasionally, one vehicle plus a local taxi for the occasional divergence is usually cheaper than running two cars for the whole trip.' },
    { question: 'Can a Tempo Traveller go everywhere a car can?', answer: 'Almost. It handles the Kullu valley, the Kathgodam climb, the Jot pass and every main hill road comfortably. What needs confirming is the final approach to specific properties — some McLeod Ganj guesthouse roads and narrow hill-resort access are too tight for a 12-seater, and the Parvati valley is marginal. Tell us the properties at booking and we will check.' },
    { question: 'How many bags fit in a 12-seater Tempo Traveller?', answer: 'Ten to twelve large suitcases with all twelve seats in use, plus several cabin bags. It is the only vehicle in the fleet that carries full luggage for its full seating, which is the practical reason a group should take one rather than several smaller cars.' },
  ],

  related: [
    { label: 'The published rate card', href: '/routes' },
    { label: 'Luggage capacity by vehicle', href: '/luggage-capacity-by-vehicle' },
    { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    { label: 'The ten-day Rajasthan grand circuit', href: '/rajasthan-grand-circuit-by-car' },
  ],
};
