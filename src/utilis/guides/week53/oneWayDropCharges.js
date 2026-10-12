// Week 53 answer-proof guide 9 — "One-way drop charges: why a one-way costs
// more than half a return"
//
// WHY THIS SHAPE
// A cost question with an exact answer, no inline answer anywhere, and the
// single most common source of "why is this not half the round-trip price?"
// The site has 180 one-way cab pages and nothing explaining the arithmetic
// behind their fares.

export const guide = {
  slug: 'one-way-drop-charges-explained',
  path: '/one-way-drop-charges-explained',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Cost guide · One-way',
  crumbs: [{ name: 'One-way cab routes', url: '/one-way-cab' }],
  crumbName: 'One-way drop charges explained',
  titleLead: 'One-way drop charges:',
  titleAccent: 'why a one-way is not half a return',
  title: 'One-Way Drop Charges: Why a One-Way Is Not Half a Return',
  metaTitle: 'One-Way Drop Charges: Why It Is Not Half the Return Fare',
  metaDescription: 'Why a one-way cab costs more than half a round trip, what the empty return leg actually costs, when a one-way is genuinely cheaper, and how to tell if you are being overcharged.',
  keywords: ['one way drop charges', 'one way taxi fare india', 'why is one way cab expensive', 'one way vs round trip cab cost', 'empty return charge taxi', 'one way cab drop charge', 'outstation one way fare'],
  heroImage: '/images/car/swift_dzire.jpg',
  heroAlt: 'A Swift Dzire sedan from the Triveni Cabs fleet on a one-way outstation drop',

  lead: 'A one-way drop costs more than half a round trip because the car still has to come back. On a Delhi to Jaipur drop the vehicle covers 280 km with you and 280 km empty, and somebody pays for the empty half. That is the whole explanation, and it is why an honest one-way fare sits somewhere between half and the full round-trip figure rather than at exactly half. Where it sits depends on one thing: whether the operator has a return passenger lined up on that corridor.',

  keyFacts: [
    { label: 'Why it is not half', value: 'The return leg runs empty' },
    { label: 'Honest range', value: 'Between 55% and 100% of a return' },
    { label: 'What moves it', value: 'Return demand on that corridor' },
    { label: 'Cheapest one-ways', value: 'Busy two-way corridors' },
  ],
  stickyLabel: 'One-way drop',
  stickyPrice: 'Fare fixed before travel',
  waText: 'Hi, I need a one-way drop. Please quote it with the return position explained.',

  intro: [
    'This question comes up on almost every one-way enquiry and it deserves a straight answer rather than a shrug. The reader has done the arithmetic — Delhi to Jaipur round trip is X, so a one-way should be X over two — and the quote is more than that. They want to know whether they are being charged fairly.',
    'The answer is that a one-way drop uses the same vehicle-kilometres as a return journey. You travel 280 km; the car travels 560 km, because it has to get home. The only question is who pays for the empty 280.',
    'What follows is how that actually works, which corridors are cheapest for a one-way and why, and the two questions that tell you whether a quote is reasonable.',
  ],

  table: {
    title: 'What a one-way actually costs against a return',
    caption: 'One-way drop fare compared with the round-trip fare on the same corridor, showing the empty return leg',
    intro: 'The round-trip figures are from the published round-trip model; the one-way range is what the empty return leg means in practice. Both use a sedan.',
    columns: [
      { key: 'route', label: 'Corridor' },
      { key: 'km', label: 'Km one way', align: 'right' },
      { key: 'veh', label: 'Vehicle km on a one-way', align: 'right' },
      { key: 'rt', label: 'Return fare', align: 'right' },
      { key: 'ow', label: 'Honest one-way range', align: 'right' },
    ],
    rows: [
      { route: 'Delhi → Jaipur', km: '280', veh: '560', rt: '₹5,940', ow: '₹3,300 – ₹5,400' },
      { route: 'Delhi → Agra', km: '230', veh: '460', rt: '₹5,940', ow: '₹3,300 – ₹5,400' },
      { route: 'Delhi → Chandigarh', km: '250', veh: '500', rt: '₹5,940', ow: '₹3,300 – ₹5,400' },
      { route: 'Jaipur → Jodhpur', km: '335', veh: '670', rt: '₹6,633', ow: '₹3,685 – ₹6,000' },
      { route: 'Delhi → Manali', km: '540', veh: '1,080', rt: '₹10,692', ow: '₹5,940 – ₹9,700' },
      { route: 'Jodhpur → Jaisalmer', km: '285', veh: '570', rt: '₹5,940', ow: '₹3,300 – ₹5,400' },
    ],
    footnote: 'Round-trip fares are max(distance, 300) × 2 × ₹11 × 0.9 from the published round-trip model. The low end of the one-way range is what a corridor with reliable return demand supports; the high end is a corridor where the car comes back empty. Tolls, parking, state entry and the driver night allowance are extra at actual on either.',
  },

  sections: [
    {
      eyebrow: 'The arithmetic',
      heading: 'Where the empty return leg actually goes',
      paras: [
        'On a one-way drop the fuel, the driver\'s hours and the vehicle wear are all incurred twice — once with you aboard and once without. A Delhi to Jaipur drop is 560 vehicle-kilometres for 280 passenger-kilometres.',
        'There are only three places that cost can go. The operator absorbs it, which no business does sustainably. You pay it, which is the full round-trip fare under a different name. Or **a return passenger pays it**, which is the case that makes a cheap one-way possible.',
        'That third option is the whole game, and it explains something that looks arbitrary from outside: the same 280 km can be a cheap one-way on one corridor and an expensive one on another. Delhi to Jaipur has heavy traffic in both directions all week, so a return passenger is usually findable. Delhi to a hill town in February does not, so the car comes back empty and the fare reflects it.',
      ],
      link: { label: 'One-way cab routes', href: '/one-way-cab' },
    },
    {
      eyebrow: 'The cheap ones',
      heading: 'Which corridors give a genuinely cheap one-way, and why',
      paras: [
        'Busy two-way corridors between large cities. Delhi-Jaipur, Delhi-Agra, Delhi-Chandigarh, Jaipur-Jodhpur, Delhi-Dehradun. These carry commercial, business and family traffic in both directions every day of the week, so a vehicle dropping in Jaipur in the morning has a reasonable chance of a Jaipur-to-Delhi passenger in the afternoon.',
        'Airport corridors, for the same reason doubled. An airport generates departures and arrivals continuously, so a drop at IGI and a pickup from IGI are both routine.',
        'Where a one-way is expensive: a hill town out of season, a small town off the main corridor, a Sunday evening drop into somewhere nobody travels out of on a Monday morning, and anything where the destination is the end of the road — Jaisalmer being the clearest example, because there is no onward traffic west.',
        'The practical consequence is worth knowing: **the direction and the day matter.** A Friday evening drop from Delhi to Jaipur is easier to fill on the return than a Sunday evening one, because the Sunday return traffic is going the other way.',
      ],
      link: { label: 'Delhi to Jaipur distance and fare', href: '/distance/delhi-to-jaipur' },
    },
    {
      eyebrow: 'When to use it',
      heading: 'When a one-way is the right choice and when a round trip is cheaper',
      paras: [
        'A one-way is right when your return is by another mode — a flight out of the destination, a train back, or an onward journey that does not come home. The Uttar Pradesh heritage circuit is the clearest case on this site: it ends at Varanasi, and driving the 820 km back is a wasted day and a half, so the car is released there.',
        'A round trip is cheaper when you are coming back within the hire period, even with a gap in the middle. If you are in Jaipur for two nights and returning to Delhi, a three-day round trip at ₹9,900 beats two one-way drops at ₹3,300 to ₹5,400 each — and the car is available to you in Jaipur in between, which two separate drops are not.',
        'The line is roughly this: if the car would be idle for more than two days at the far end, two one-ways may win. Under two days, the round trip almost always does, and you get a vehicle at the destination as well.',
      ],
      link: { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    },
    {
      eyebrow: 'Checking a quote',
      heading: 'Two questions that tell you whether a one-way quote is fair',
      paras: [
        '**"Is this priced on a return passenger or on an empty return?"** A straight answer to that tells you almost everything. An operator who runs the corridor will know whether they expect to fill the return and will price accordingly. One who cannot answer is either guessing or quoting the empty-return figure and hoping.',
        '**"What is the round-trip fare for the same corridor?"** A one-way quoted at or above the full round-trip figure is not a one-way price, it is a round trip with the return given away. A one-way quoted at well under half is likely to acquire charges later, because the arithmetic does not close.',
        'The honest band is between roughly 55% and 100% of the round-trip figure, and where it falls should be explainable in one sentence. On this site the one-way fares are published per route rather than quoted on the phone, which is the point — the figure is on the page before you call.',
      ],
      link: { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    },
  ],

  tips: [
    { title: 'Ask whether the return is filled', text: 'It is the one question that explains a one-way quote. An operator who runs the corridor knows; one who does not is guessing.' },
    { title: 'Busy corridors, cheap one-ways', text: 'Delhi-Jaipur, Delhi-Agra, Delhi-Chandigarh and the airport runs have two-way traffic every day. A hill town out of season does not.' },
    { title: 'Direction and day matter', text: 'A Friday drop to Jaipur is easier to fill on the return than a Sunday one, because Sunday return traffic runs the other way.' },
    { title: 'Under two days idle, take the round trip', text: 'If the car would wait less than two days at the far end, a round trip is usually cheaper and gives you a vehicle at the destination as well.' },
    { title: 'A one-way above the return fare is not a one-way price', text: 'It is a round trip with the return leg given away. Compare the two figures before accepting either.' },
  ],

  faqs: [
    { question: 'Why does a one-way cab cost more than half a round trip?', answer: 'Because the car still has to come back. A Delhi to Jaipur drop is 280 km with you aboard and 280 km empty — 560 vehicle-kilometres for 280 passenger-kilometres. Somebody pays for the empty half: the operator, you, or a return passenger. Only the third case makes a genuinely cheap one-way possible.' },
    { question: 'What is a one-way drop charge?', answer: 'It is the part of the fare covering the empty return leg. On a corridor with reliable two-way traffic the operator expects to fill the return, so the drop charge is small and the one-way lands near 55% of the round-trip figure. On a corridor with no return demand the car comes back empty and the fare approaches the full round trip.' },
    { question: 'Which one-way routes are cheapest?', answer: 'Busy two-way corridors between large cities — Delhi-Jaipur, Delhi-Agra, Delhi-Chandigarh, Jaipur-Jodhpur, Delhi-Dehradun — and the airport runs, which generate arrivals and departures continuously. Expensive one-ways are hill towns out of season, small towns off the main corridor, and destinations at the end of the road like Jaisalmer, where there is no onward traffic.' },
    { question: 'Is a one-way or a round trip cheaper?', answer: 'It depends how long the car would be idle at the far end. Under about two days the round trip is almost always cheaper and gives you a vehicle at the destination as well — three days Delhi-Jaipur-Delhi is ₹9,900 against two one-way drops at ₹3,300 to ₹5,400 each. A one-way wins when your return is by flight or train, or when the journey does not come home at all.' },
    { question: 'How do I know if a one-way quote is fair?', answer: 'Ask two things. Whether the fare assumes a return passenger or an empty return — an operator who runs the corridor will know. And what the round-trip fare is for the same route. The honest band is roughly 55% to 100% of the return figure; above it is a round trip under another name, and well below it is arithmetic that will acquire charges later.' },
    { question: 'Do one-way fares include tolls and the driver allowance?', answer: 'No. As with every fare on this site, the quoted figure covers the vehicle, fuel, the driver and GST. Tolls, parking, state entry levies and the driver night allowance are charged at actual on top, and on a one-way the driver may still incur a night away even though you do not travel back.' },
  ],

  related: [
    { label: 'One-way cab routes', href: '/one-way-cab' },
    { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    { label: 'Cab waiting charges explained', href: '/cab-waiting-charges-explained' },
    { label: 'The published rate card', href: '/routes' },
    { label: 'The nine-day Uttar Pradesh heritage circuit', href: '/uttar-pradesh-heritage-circuit-by-car' },
  ],
};
