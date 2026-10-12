// Week 53 answer-proof guide 3 — "What does a week of cab hire actually cost?"
//
// WHY THIS SHAPE
// A cost question with an exact answer that no panel carries, and the single
// question behind almost every multi-day enquiry this business receives. The
// site publishes a per-kilometre rate card and a 300 km per day minimum, and
// nothing anywhere explains how those two interact over a week — which is the
// arithmetic that decides whether a quote looks reasonable or arbitrary.
//
// The most useful thing it does is explain the minimum. A customer who works
// out 1,200 km at ₹11 and gets ₹13,200 will think a ₹23,100 quote is a markup.
// It is not; it is the 300 km per day minimum, and the reason for that minimum
// is a fact about the vehicle's week rather than a negotiating position.

export const guide = {
  slug: 'week-long-cab-hire-cost',
  path: '/week-long-cab-hire-cost',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Cost guide · Multi-day hire',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'What a week of cab hire costs',
  titleLead: 'What does a week of cab hire cost?',
  titleAccent: 'The arithmetic, including the minimum nobody explains',
  title: 'What Does a Week of Cab Hire Cost? The Arithmetic Explained',
  metaTitle: 'Week-Long Cab Hire Cost: Sedan ₹23,100 for 7 Days',
  metaDescription: 'What a week of chauffeur-driven cab hire costs: sedan ₹23,100 for seven days, SUV ₹31,500, Innova ₹37,800. How the 300 km per day minimum works, why short days still bill, and the four extras.',
  keywords: ['week long cab hire cost', 'cab hire per day cost india', '7 day taxi hire cost', 'outstation cab minimum km per day', 'how is multi day cab fare calculated', 'cab hire for a week price', '300 km per day minimum taxi'],
  heroImage: '/images/car/swift_dzire.jpg',
  heroAlt: 'A Swift Dzire sedan from the Triveni Cabs fleet, the entry vehicle for multi-day hire',

  lead: 'A week of chauffeur-driven cab hire is ₹23,100 for a sedan, ₹31,500 for an Ertiga or SUV, ₹37,800 for an Innova Crysta and ₹48,300 for a 12-seater Tempo Traveller. Those figures come from one calculation: the published per-kilometre rate times 300 km per day, for seven days. The 300 km is a minimum rather than an allowance — drive further and you pay for the extra kilometres; drive less and you still pay the minimum. Understanding why is the difference between a quote that looks arbitrary and one that adds up.',

  keyFacts: [
    { label: 'Sedan, 7 days', value: '₹23,100' },
    { label: 'Innova Crysta, 7 days', value: '₹37,800' },
    { label: 'The minimum', value: '300 km per day' },
    { label: 'Included', value: 'Vehicle, fuel, driver, GST' },
  ],
  stickyLabel: 'Multi-day cab hire',
  stickyPrice: 'Sedan ₹23,100 · 7 days',
  waText: 'Hi, I would like a quote for a week of cab hire. Dates, route and headcount to follow.',

  intro: [
    'Everything on this site that spans more than one day is priced the same way, and it is worth setting out once rather than per page. The rate card is per kilometre: sedan ₹11, Ertiga or SUV ₹15, Innova Crysta ₹18, 12-seater Tempo Traveller ₹23. The outstation minimum is 300 km per day. A multi-day fare is the rate times the greater of the actual distance or 300 km times the number of days.',
    'That is the whole formula and there is nothing else in it. There is no per-day vehicle charge, no fuel surcharge and no booking fee. The four things billed on top — tolls, parking, state entry and the driver night allowance — are third-party costs and the driver’s own allowance, and they are the subject of a separate page.',
    'What this page is really for is the minimum, because it is the part that makes a quote look wrong when it is right.',
  ],

  table: {
    title: 'What a week costs, by vehicle',
    caption: 'Seven-day chauffeur-driven cab hire cost by vehicle, showing the per-kilometre rate and the 300 km per day minimum calculation',
    intro: 'Each figure is the published per-kilometre rate times 2,100 km — 300 km per day for seven days. Drive further than 2,100 km in the week and the extra kilometres bill at the same rate.',
    columns: [
      { key: 'veh', label: 'Vehicle' },
      { key: 'seats', label: 'Seats', align: 'right' },
      { key: 'rate', label: 'Per km', align: 'right' },
      { key: 'd3', label: '3 days', align: 'right' },
      { key: 'd7', label: '7 days', align: 'right' },
      { key: 'd10', label: '10 days', align: 'right' },
    ],
    rows: [
      { veh: 'Sedan (Swift Dzire or similar)', seats: '4', rate: '₹11', d3: '₹9,900', d7: '₹23,100', d10: '₹33,000' },
      { veh: 'Ertiga / SUV', seats: '6', rate: '₹15', d3: '₹13,500', d7: '₹31,500', d10: '₹45,000' },
      { veh: 'Innova Crysta', seats: '6', rate: '₹18', d3: '₹16,200', d7: '₹37,800', d10: '₹54,000' },
      { veh: 'Tempo Traveller, 12-seater', seats: '12', rate: '₹23', d3: '₹20,700', d7: '₹48,300', d10: '₹69,000' },
    ],
    footnote: 'All figures include the vehicle, fuel, the driver and GST. Tolls, parking, state entry levies and the driver night allowance are charged at actual on top. Trips under 100 km a day are quoted from the published 4 hr / 40 km local package instead, which is cheaper than the outstation minimum.',
  },

  sections: [
    {
      eyebrow: 'The minimum',
      heading: 'Why 300 km a day, and why a short day still bills it',
      paras: [
        'Because the vehicle and the driver are committed to you for the day whether the car covers 300 km or 60. On a ten-day Rajasthan circuit, four of the days are local — Jaipur, Jaisalmer, Udaipur and one more — and those days cover 40 to 90 km each. The car cannot be anywhere else, and the driver is away from home.',
        'The arithmetic without a minimum does not work. A ten-day circuit covering 2,270 km at ₹11 would be ₹24,970, which sounds better until you notice it prices a day of standing in a hotel car park the same as a day of driving 500 km. Operators who quote that way make it back somewhere else, usually in the extras.',
        'With the minimum, the ten-day sedan figure is ₹33,000 — 3,000 km billed against 2,270 driven. The difference, about ₹8,000, is what four local days cost, and it is stated rather than hidden. On a trip that drives hard every day the minimum never engages at all and you simply pay for the distance.',
      ],
      link: { label: 'The published rate card', href: '/routes' },
    },
    {
      eyebrow: 'The short-trip exception',
      heading: 'When the minimum does not apply, and why that matters more than it sounds',
      paras: [
        'Below 100 km the outstation minimum is the wrong instrument, and the rate card routes those trips through the published 4 hr / 40 km local package instead. This is not a courtesy; it is the only honest way to quote a short hop.',
        'The example that makes it obvious is a 15 km run from Ajmer to Pushkar. On the outstation 300 km minimum that is ₹3,300, which is an implied ₹220 per kilometre and a figure nobody would believe. Quoted from the local package it prices as what it is: a local trip.',
        'The practical line is 100 km. Below it, a trip is quoted from the local package, with extra hours and extra kilometres charged at the published rates beyond the 4 hr / 40 km included. Above it, the outstation rate and the 300 km per day minimum apply. Every fare on this site follows that rule automatically, which is why a 15 km destination on a near-city page does not quote an absurd figure.',
      ],
      link: { label: 'The 4 hr / 40 km local package', href: '/4hr-40km-local-cab' },
    },
    {
      eyebrow: 'Worked examples',
      heading: 'Three real itineraries and what each actually bills',
      paras: [
        'The seven-day Golden Triangle with Ranthambore covers about 1,095 km over seven days, with three local days. Actual distance is well under the 2,100 km minimum, so it bills the minimum: ₹23,100 for a sedan. The three local days at Delhi, Ranthambore and Jaipur are what the gap pays for.',
        'The ten-day Rajasthan grand circuit covers about 2,270 km over ten days with four local days. Minimum is 3,000 km, so it bills ₹33,000 for a sedan — again the minimum, because the four local days pull the average below 300.',
        'The twelve-day Char Dham circuit covers about 1,600 km over twelve days, and this is where the minimum does the most work: 3,600 km billed against 1,600 driven, ₹39,600 for a sedan. Three of those days are walk days at Yamunotri and Kedarnath when the car does not move at all, and two are short valley legs. Char Dham is the clearest illustration that you are hiring a vehicle and a driver for a period, not buying kilometres.',
      ],
      link: { label: 'The twelve-day Char Dham circuit', href: '/char-dham-circuit-by-car' },
    },
    {
      eyebrow: 'Comparison',
      heading: 'Is a week of cab hire better value than self-drive or per-day taxis?',
      paras: [
        'Against booking a taxi each day, almost always. Seven separate day hires cost more than the weekly figure, and you get a different vehicle and driver each morning on a route where the driver knowing the plan has real value — the fort timings, the walking sections, which gate opens when.',
        'Against self-drive, the comparison is less about money than about what you are doing. A self-drive rental plus fuel on a 2,100 km week lands in a similar range once the fuel is counted. What you are buying with a chauffeur is the driving itself on hill roads and in city traffic, and on routes like the Char Dham or the Himachal circuit that is the whole proposition rather than a convenience.',
        'Against a package tour, the cab is usually cheaper and always more flexible, because you are paying for transport and nothing else. Hotels, monument tickets and meals stay yours to choose, which on a route with this many fixed timings is worth more than a bundled rate.',
      ],
      link: { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    },
  ],

  tips: [
    { title: 'Ask whether your itinerary hits the minimum', text: 'If your week drives hard every day you pay for distance, not the minimum. If it has local days, the minimum engages. Either way the figure should be explained, not asserted.' },
    { title: 'Short trips should not be quoted on the outstation minimum', text: 'Anything under 100 km belongs on the 4 hr / 40 km local package. A 15 km trip quoted at the 300 km minimum is a sign the operator is not thinking.' },
    { title: 'Count the nights, not the days, for the allowance', text: 'The driver night allowance applies per night away from base. A seven-day trip that returns each evening attracts none of it.' },
    { title: 'One vehicle, one driver', text: 'On a week or longer, the same driver throughout is worth more than it sounds — the route, the timings and the luggage stop needing to be explained every morning.' },
    { title: 'Get the extras estimated upfront', text: 'Tolls, state entry and the night allowance can be stated as an estimate alongside the fare, so you know the whole figure before travelling.' },
  ],

  faqs: [
    { question: 'How much does a week of cab hire cost in India?', answer: 'With Triveni Cabs, ₹23,100 for a sedan, ₹31,500 for an Ertiga or SUV, ₹37,800 for an Innova Crysta and ₹48,300 for a 12-seater Tempo Traveller for seven days. Each figure is the published per-kilometre rate times 300 km per day. The vehicle, fuel, the driver and GST are included; tolls, parking, state entry and the driver night allowance are at actual.' },
    { question: 'What is the 300 km per day minimum on an outstation cab?', answer: 'It means a multi-day hire bills the greater of the actual distance or 300 km for each day. Drive 500 km on a day and you pay for 500; drive 60 and you pay for 300. The reason is that the vehicle and driver are committed to you for the whole day either way — on a ten-day circuit with four local days, the minimum is what those local days cost.' },
    { question: 'Why am I charged 300 km when I only drove 60?', answer: 'Because you hired the car and driver for the day, not the distance. A local sightseeing day in Jaipur or Udaipur covers 40 to 90 km while the vehicle is unavailable to anyone else and the driver is away from home. Operators who bill only actual kilometres on such days generally recover it in unexplained extras instead.' },
    { question: 'Is there a cheaper rate for short trips?', answer: 'Yes. Anything under 100 km is quoted from the published 4 hr / 40 km local package rather than the outstation minimum, which is substantially cheaper. A 15 km trip priced on the 300 km minimum would imply ₹220 per kilometre, which is why the rate card routes short hops through the local package automatically.' },
    { question: 'What is not included in a week-long cab fare?', answer: 'Four things, all charged at actual: tolls, parking, state entry levies for each state crossed, and the driver night allowance for each night he is away from base. Hotels, meals and monument tickets are separate and yours to arrange. Fuel is never billed separately — it is inside the per-kilometre rate.' },
    { question: 'Is it cheaper to book a cab each day instead of for the week?', answer: 'No, and it is worse in practice as well as in price. Seven separate day hires cost more than the weekly figure, and you get a different vehicle and driver each morning. On a multi-day route with fixed timings — a sunrise monument, a safari slot, a pedestrian Mall road — a driver who already knows the itinerary is worth a good deal.' },
  ],

  related: [
    { label: 'The published rate card', href: '/routes' },
    { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    { label: 'One-way drop charges explained', href: '/one-way-drop-charges-explained' },
    { label: 'The ten-day Rajasthan grand circuit', href: '/rajasthan-grand-circuit-by-car' },
    { label: 'The twelve-day Char Dham circuit', href: '/char-dham-circuit-by-car' },
    { label: 'Char Dham yatra cost by car', href: '/char-dham-yatra-cost-by-car' },
  ],
};
