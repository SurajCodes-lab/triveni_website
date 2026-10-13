// Week 53 answer-proof guide 24 — "What happens if the road closes mid-trip?"
//
// WHY THIS SHAPE
// A logistics question nobody asks until it happens, and one where the answer is
// a policy rather than a fact — which makes it worth publishing, because a
// customer who knows the policy before travelling does not have to negotiate it
// from a hotel lobby in Rudraprayag.

export const guide = {
  slug: 'what-if-the-road-closes-mid-trip',
  path: '/what-if-the-road-closes-mid-trip',
  mood: 'hills',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Logistics guide · Contingency',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'What if the road closes mid-trip',
  titleLead: 'What happens if the road closes?',
  titleAccent: 'The position, before you need it',
  title: 'What Happens If the Road Closes Mid-Trip? The Position',
  metaTitle: 'If the Road Closes Mid-Trip: Reroute, Wait or Change',
  metaDescription: 'What happens when a landslide, snow or a closure interrupts a multi-day cab trip: who decides, whether the fare changes, what a reroute costs, and the slack that makes it survivable.',
  keywords: ['road closed during trip india', 'landslide during road trip', 'cab trip cancelled road closure', 'what if hill road closes', 'rerouting cab outstation', 'travel insurance road closure india'],
  heroImage: '/images/sightseeing/Manali/Kullu Valley.jpg',
  heroAlt: 'The Kullu valley road, one of the corridors where a closure changes a day',

  lead: 'The honest version: on a reroute of similar distance the fare does not change, on a wait nothing changes, and on a route that is genuinely shut we change the night halt and tell you what the options are. What a closure costs you is time and sometimes a hotel night — and the single thing that decides whether it is an inconvenience or a ruined trip is whether the itinerary had a spare day in it. That is a decision made at the booking stage, not on the road.',

  keyFacts: [
    { label: 'Reroute, similar distance', value: 'Fare unchanged' },
    { label: 'Waiting for a clearance', value: 'No charge' },
    { label: 'Significantly longer reroute', value: 'Extra km at the published rate' },
    { label: 'What makes it survivable', value: 'One spare day' },
  ],
  stickyLabel: 'Multi-day cab hire',
  stickyPrice: 'Fare fixed before travel',
  waText: 'Hi, I would like to understand the position if a road closes during my trip.',

  intro: [
    'Closures are routine on the corridors this business runs. A landslide clearance in the monsoon, snow on the Jot pass or above Joshimath, a bridge under repair, a yatra diversion, an accident on a single-lane stretch — our drivers deal with one of these most weeks of the season.',
    'What is not routine is a customer knowing in advance what happens when it does. So this page sets out the position plainly, including the parts that cost money.',
    'The first thing worth saying is that most closures are hours rather than days. The second is that the difference between a bad afternoon and a ruined trip is almost always slack in the schedule.',
  ],

  table: {
    title: 'What happens, by kind of closure',
    caption: 'How different kinds of road closure are handled on a multi-day cab trip, and what each costs',
    intro: 'The fare column is the position on this site. The time column is what it actually costs you.',
    columns: [
      { key: 'kind', label: 'What happened' },
      { key: 'action', label: 'What we do' },
      { key: 'fare', label: 'Fare' },
      { key: 'time', label: 'Costs you' },
    ],
    rows: [
      { kind: 'Material on the road, being cleared', action: 'Wait', fare: 'Unchanged', time: '2–6 hours typically' },
      { kind: 'Closure with an alternative of similar length', action: 'Reroute', fare: 'Unchanged', time: 'An hour or two' },
      { kind: 'Closure with a much longer alternative', action: 'Reroute', fare: 'Extra km at the published rate', time: 'Half a day' },
      { kind: 'Pass or road shut for the day', action: 'Change the night halt', fare: 'Unchanged for the day', time: 'A day, and a hotel night' },
      { kind: 'Road shut for several days', action: 'Replan the remaining itinerary with you', fare: 'Recalculated on the new route', time: 'Varies' },
      { kind: 'One destination unreachable', action: 'Substitute, or drop it and shorten the hire', fare: 'Shorter hire = lower fare', time: 'That destination' },
      { kind: 'You decide to abandon the trip', action: 'Return you to the nearest city or railhead', fare: 'Billed to the day we stop', time: 'The rest of the trip' },
    ],
    footnote: 'Hotels, meals and any onward travel are yours either way — a cab fare does not cover accommodation, and a closure does not change that. This is the gap that travel insurance exists for on a trip where a missed connection matters.',
  },

  sections: [
    {
      eyebrow: 'Who decides',
      heading: 'The driver decides whether to go, and that should hold',
      paras: [
        'On the morning of a fragile leg — the Jot pass in snow, the Atal tunnel approach, a gorge road after heavy rain — the driver checks the position and makes the call. That is the arrangement, and a passenger who overrides it is taking on a risk that is not theirs alone.',
        'This matters because the commercial pressure runs the other way. A driver who says "we should not attempt this today" is telling a paying customer that their plan has changed, and in a business where the customer sets the schedule that takes some backing. Our drivers have it: there is no penalty for a call that costs a day.',
        'What we will do in exchange is give you the actual position rather than a hedge. If the pass is shut we say so. If it is marginal we say that, and what the alternative is, and let you choose. The thing we will not do is set off into a closure and discover it at the barrier.',
      ],
      link: { label: 'Monsoon and landslide risk on hill roads', href: '/monsoon-landslide-risk-hill-roads' },
    },
    {
      eyebrow: 'The fare',
      heading: 'When a closure changes what you pay, and when it does not',
      paras: [
        '**A reroute of similar distance does not change the fare.** The Dharamshala-to-Dalhousie Jot crossing is 120 km; when snow closes it the Pathankot alternative is 170 km. That fifty kilometres is absorbed — it is a weather reroute on a day already billed at the 300 km minimum, and the minimum covers it.',
        '**Waiting does not change the fare.** On a multi-day hire you have the vehicle and driver for the day; a four-hour wait at a clearance is the day you bought. There is no hourly charge on an outstation hire for exactly this reason.',
        '**A materially longer reroute bills the extra kilometres** at the published per-kilometre rate, if it takes the day past the 300 km minimum. A diversion adding two hundred kilometres is a real cost and it is passed on at the rate card rather than at a premium.',
        '**A shortened trip bills fewer days.** If a closure means you drop the last two days of a ten-day circuit, you are billed for eight. The hire is per day and it stops when it stops.',
      ],
      link: { label: 'Cab waiting charges explained', href: '/cab-waiting-charges-explained' },
    },
    {
      eyebrow: 'The slack',
      heading: 'One spare day is the difference between an inconvenience and a cascade',
      paras: [
        'This is the only part of this page that is actionable before you travel, and it is worth more than everything else on it.',
        'An itinerary with no spare day fails forward. A six-hour closure on day four means arriving at the day-four hotel at midnight, leaving late on day five, missing the safari slot on day six, and reaching the airport on day ten with no margin. One closure, five consequences.',
        'The same closure on an itinerary with one unallocated day costs you an afternoon. You absorb it, drop the spare day, and everything downstream is unchanged.',
        'On a week or longer we recommend one spare day as standard. On a monsoon trip, or a Char Dham or Kinnaur itinerary, two. And on any trip at all, a clear night between the end of the road itinerary and an onward flight or train — because the closure rarely ruins the trip, but the connection it breaks does.',
      ],
      link: { label: 'How many kilometres a day is comfortable', href: '/how-many-km-per-day-by-car' },
    },
    {
      eyebrow: 'Insurance',
      heading: 'What a cab fare does not cover, and what to do about it',
      paras: [
        'A cab fare covers the vehicle, the driver and fuel. It does not cover your hotel, your meals, a missed flight, or a rebooked train — and a road closure does not change that. That gap is real and it is not ours to fill.',
        'For a trip where a missed connection would cost significantly — an international flight, a wedding, a non-refundable booking at the far end — travel insurance covering trip delay and interruption is the right instrument. It costs very little against a long-haul ticket and it is the only thing that actually protects the downstream bookings.',
        'What we will do is give you the documentation a claim needs: the dates, the route, where we were held and why, in writing. Insurers ask for that and operators are often vague about it.',
      ],
      link: { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    },
  ],

  tips: [
    { title: 'One spare day on a week, two in the monsoon', text: 'It is the only thing on this page you can do in advance, and it converts a closure from a five-consequence cascade into a lost afternoon.' },
    { title: 'Never a tight connection at the end', text: 'A clear night between the road itinerary and any flight or train. The closure rarely ruins the trip; the connection it breaks does.' },
    { title: 'Let the driver\'s call on a fragile leg stand', text: 'He checks the position on the morning and there is no penalty for a decision that costs a day. Overriding it takes on a risk that is not yours alone.' },
    { title: 'A weather reroute of similar distance costs nothing', text: 'Jot pass to Pathankot road is fifty extra kilometres and absorbed. A materially longer diversion bills the extra at the rate card.' },
    { title: 'Take insurance if a connection matters', text: 'A cab fare never covers a hotel or a missed flight. For a non-refundable booking at the far end, trip-delay cover is the only real protection.' },
  ],

  faqs: [
    { question: 'What happens if a landslide closes the road during my trip?', answer: 'Most closures are material on the road being cleared and resolve in two to six hours, so the answer is usually that we wait, at no extra charge — on a multi-day hire you have the vehicle for the day and a wait is part of it. Where there is an alternative of similar length we reroute at no change in fare. Where the road is shut for the day we change the night halt and tell you the options.' },
    { question: 'Does the fare change if the cab has to take a longer route?', answer: 'Not for a reroute of similar distance — the Jot pass closure sending you via Pathankot is fifty extra kilometres and absorbed within the 300 km daily minimum. A materially longer diversion that takes the day past the minimum bills the extra kilometres at the published per-km rate, which is the rate card rather than a premium.' },
    { question: 'Who decides whether to attempt a risky road?', answer: 'The driver, on the morning, after checking the actual position rather than a forecast. That call should hold: a passenger who overrides it is taking on a risk that is not theirs alone. Our drivers face no penalty for a decision that costs a day, which is what makes the arrangement work rather than just stated.' },
    { question: 'What if I cannot reach a destination on my itinerary at all?', answer: 'We will propose a substitute that works from where you are, or drop it and shorten the hire — in which case you are billed for the days used rather than the days booked. On a ten-day circuit that loses its last two days, you pay for eight. The hire is per day and it stops when it stops.' },
    { question: 'Will you pay for my hotel if the road closes?', answer: 'No, and no cab fare anywhere covers accommodation. The fare is the vehicle, the driver and fuel; hotels, meals and onward travel are yours either way and a closure does not change that. For a trip where a missed connection or a non-refundable booking would cost significantly, travel insurance covering trip delay is the right instrument — and we will give you the written documentation a claim needs.' },
    { question: 'How do I make a trip resilient to closures?', answer: 'One unallocated spare day on anything a week or longer, two on a monsoon, Char Dham or Kinnaur itinerary, and a clear night between the end of the road trip and any flight or train. Without slack an itinerary fails forward — one six-hour closure on day four produces five downstream consequences. With it, the same closure costs you an afternoon.' },
  ],

  related: [
    { label: 'Monsoon and landslide risk on hill roads', href: '/monsoon-landslide-risk-hill-roads' },
    { label: 'Cab waiting charges explained', href: '/cab-waiting-charges-explained' },
    { label: 'How many kilometres a day is comfortable', href: '/how-many-km-per-day-by-car' },
    { label: 'Driver rest and long drives', href: '/driver-rest-and-long-drives' },
    { label: 'When Rohtang and the Atal tunnel are open', href: '/when-does-rohtang-and-atal-tunnel-open' },
    { label: 'Fog season on the north India highways', href: '/fog-season-on-north-india-highways' },
  ],
};
