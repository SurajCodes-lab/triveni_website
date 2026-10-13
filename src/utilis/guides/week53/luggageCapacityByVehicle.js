// Week 53 answer-proof guide 17 — "How much luggage fits? Vehicle by vehicle"
//
// WHY THIS SHAPE
// A logistics question with a concrete answer that nothing on the site gives,
// and the commonest cause of a bad first five minutes on an airport pickup. The
// vehicle pages list seat counts; none of them says how many suitcases.

export const guide = {
  slug: 'luggage-capacity-by-vehicle',
  path: '/luggage-capacity-by-vehicle',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Logistics guide · Vehicles',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'Luggage capacity by vehicle',
  titleLead: 'How much luggage actually fits?',
  titleAccent: 'Vehicle by vehicle, honestly',
  title: 'How Much Luggage Actually Fits? Vehicle by Vehicle',
  metaTitle: 'Cab Luggage Capacity: How Many Bags Fit in Each Vehicle',
  metaDescription: 'How much luggage fits in a sedan, Ertiga, Innova Crysta and Tempo Traveller: real suitcase counts rather than seat counts, why the seat number misleads, and what to do when you are over.',
  keywords: ['taxi luggage capacity india', 'how many bags fit in innova', 'sedan luggage space suitcases', 'tempo traveller luggage capacity', 'cab for family with luggage', 'airport taxi luggage limit'],
  heroImage: '/images/car/premium_suv.jpg',
  heroAlt: 'A premium SUV from the Triveni Cabs fleet, loaded for an outstation trip',

  lead: 'The number that matters is not the seat count. A sedan seats four and carries two large suitcases — so four people with four suitcases do not fit a sedan, which is the single commonest booking error we see. An Ertiga seats six and carries three large bags with all seats in use. An Innova Crysta seats six and carries four. A 12-seater Tempo Traveller seats twelve and carries ten to twelve. The pattern worth remembering: **on every vehicle, full seating and full luggage are not simultaneously available.**',

  keyFacts: [
    { label: 'Sedan', value: '4 seats · 2 large bags' },
    { label: 'Ertiga', value: '6 seats · 3 large bags' },
    { label: 'Innova Crysta', value: '6 seats · 4 large bags' },
    { label: 'Tempo Traveller 12', value: '12 seats · 10–12 bags' },
  ],
  stickyLabel: 'Choose the right vehicle',
  stickyPrice: 'Sedan ₹11/km · Innova ₹18/km',
  waText: 'Hi, I would like advice on the right vehicle for my group size and luggage.',

  intro: [
    'This page exists because of a specific recurring moment: a family of four lands at an airport with four large suitcases, a pre-booked sedan arrives, and the next ten minutes are spent working out what to do. The sedan was booked on the seat count, which was correct and insufficient.',
    'The figures below are what actually fits with the last seat row in use, not what fits with a row folded down. "Large" means a full-size check-in suitcase of the sort a 23 kg allowance produces; "cabin" means a carry-on.',
    'Where a vehicle can carry more by folding a row, that is noted — but the honest number for a full car is the one in the table.',
  ],

  table: {
    title: 'Seats and luggage, with all seats in use',
    caption: 'Luggage capacity by vehicle with full seating in use: large suitcases, cabin bags, and what the practical group size is',
    intro: 'The last column is the one to plan from. It is the group size at which both people and bags fit without anything on a lap.',
    columns: [
      { key: 'veh', label: 'Vehicle' },
      { key: 'seats', label: 'Seats', align: 'right' },
      { key: 'large', label: 'Large bags', align: 'right' },
      { key: 'cabin', label: 'Plus cabin bags', align: 'right' },
      { key: 'real', label: 'Comfortable for' },
    ],
    rows: [
      { veh: 'Sedan (Swift Dzire or similar)', seats: '4', large: '2', cabin: '2', real: '2 adults with full luggage, or 4 travelling light' },
      { veh: 'Ertiga', seats: '6', large: '3', cabin: '2', real: '4 adults with full luggage, or 6 travelling light' },
      { veh: 'Innova Crysta', seats: '6', large: '4', cabin: '2', real: '5 adults with full luggage, or 6 with moderate' },
      { veh: 'Tempo Traveller, 12-seater', seats: '12', large: '10–12', cabin: 'several', real: '10–12 with full luggage' },
      { veh: 'Tempo Traveller, 17-seater', seats: '17', large: '12–14', cabin: 'several', real: '14–16 with full luggage' },
      { veh: 'Mini bus / coach', seats: '20–56', large: 'Hold capacity', cabin: '—', real: 'Group travel; luggage is rarely the constraint' },
    ],
    footnote: 'Figures are with the last seat row in use. Folding the rear row of an Ertiga or Innova adds substantial space but costs you two or three seats. "Large" means a full-size check-in suitcase; a soft bag of the same nominal size packs considerably better than a hard shell.',
  },

  sections: [
    {
      eyebrow: 'The seat trap',
      heading: 'Why the seat count misleads, on every vehicle',
      paras: [
        'Because seats and luggage space compete for the same volume. In a sedan the boot is fixed and independent, which is why the sedan figure is the most honest of the four — two large bags, and a third only if nobody is in the middle rear seat. In an Ertiga and an Innova the rearmost row sits where the luggage would go, so the capacity figure depends entirely on whether that row is occupied.',
        'The arithmetic that catches people out is that **luggage scales with passengers**. Six people do not bring three bags; they bring five or six. So the vehicle that seats six needs to carry six people\'s luggage, and only the Tempo Traveller genuinely does that for its full seating.',
        'A rule of thumb that works: take your group size, assume one large bag each, and pick the vehicle whose large-bag figure matches — not whose seat figure matches. Four people, four bags, so an Innova rather than an Ertiga. Two people, two bags, so a sedan is right rather than cautious.',
      ],
      link: { label: 'The published rate card', href: '/routes' },
    },
    {
      eyebrow: 'The airport case',
      heading: 'Why this matters most on an airport pickup',
      paras: [
        'Because it is the one journey where you certainly have all your luggage with you, and the one where you have least flexibility to fix a mismatch. A hotel-to-sightseeing trip with too small a car is an inconvenience; an airport arrival with too small a car at eleven at night is a problem.',
        'It is also the journey where the booking is made furthest in advance, usually by somebody who has not yet packed. The honest thing to do at booking is to overstate rather than understate: if you are unsure whether it is three bags or four, book for four.',
        'On this site the published airport route fares list all three vehicles with their fares, so the decision is on the page rather than something to ask about. The difference between an Ertiga and an Innova on a 290 km airport run is a few hundred rupees against a journey that works.',
      ],
      link: { label: 'Pre-booked airport pickup or the prepaid counter', href: '/airport-pickup-vs-prepaid-taxi' },
    },
    {
      eyebrow: 'If you are over',
      heading: 'What to do when the luggage does not fit',
      paras: [
        '**Go up one vehicle.** It is almost always the right answer and it is cheaper than it feels. Sedan to Ertiga is ₹4 per kilometre, and Ertiga to Innova is ₹3 — on a 300 km day that is ₹1,200 and ₹900 respectively. Set against repacking at a kerb, it is not a close call.',
        '**Fold a row, if the seats allow.** An Ertiga carrying four people can fold its rear row and take five or six large bags. An Innova carrying four does the same and takes seven or eight. This is the right answer for a small group with a lot of luggage and the wrong one if anybody would have to sit on the floor.',
        '**A roof carrier**, on request and for genuine overflow. It changes handling on hill roads and we would rather solve the problem with the right vehicle than with the roof, but for a trekking group with equipment it is sometimes the only answer. Say so at booking so the vehicle comes fitted.',
        'What we will not do is put luggage on a passenger\'s lap for a seven-hour hill drive and call it solved. If the booking is wrong we will say so when you tell us the bag count.',
      ],
      link: { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    },
  ],

  tips: [
    { title: 'Plan on bags, not seats', text: 'One large bag per person. Pick the vehicle whose luggage figure matches your group, not whose seat figure does.' },
    { title: 'Four people with four suitcases is not a sedan', text: 'It is the commonest booking error we see. A sedan carries two large bags with four people aboard.' },
    { title: 'Overstate at an airport booking', text: 'It is the journey where you certainly have everything with you and least able to fix a mismatch. Unsure between three bags and four? Book for four.' },
    { title: 'Going up one vehicle is cheaper than it feels', text: '₹4/km from sedan to Ertiga, ₹3/km from Ertiga to Innova. On a 300 km day that is ₹1,200 and ₹900.' },
    { title: 'Soft bags pack far better than hard shells', text: 'A soft holdall of the same nominal size will fit where a rigid case will not. On a marginal booking it can be the difference.' },
  ],

  faqs: [
    { question: 'How many suitcases fit in a sedan taxi?', answer: 'Two large check-in suitcases with four people aboard, plus two cabin bags. A third large bag fits only if the middle rear seat is empty. This is why four people travelling with four suitcases do not fit a sedan — it is the commonest booking error we see, because the booking was made on the seat count.' },
    { question: 'How much luggage fits in an Innova Crysta?', answer: 'Four large suitcases plus a couple of cabin bags with all six seats in use. Fold the rear row and it takes seven or eight large bags but seats only four. For five adults with full luggage the Innova is the right vehicle; for six adults with full luggage, a Tempo Traveller is.' },
    { question: 'What is the luggage capacity of a 12-seater Tempo Traveller?', answer: 'Ten to twelve large suitcases with all twelve seats in use, plus several cabin bags. It is the only vehicle in the fleet that genuinely carries full luggage for its full seating, which is why it is the right answer for a group rather than two smaller cars.' },
    { question: 'How do I choose a cab for a family with luggage?', answer: 'Count the bags rather than the people. Assume one large suitcase each, then pick the vehicle whose large-bag figure matches: two bags a sedan, three an Ertiga, four an Innova, more than four a Tempo Traveller. Seats and luggage compete for the same space, so on every vehicle full seating and full luggage are not simultaneously available.' },
    { question: 'Can I put luggage on the roof of the cab?', answer: 'On request and for genuine overflow, with a carrier fitted at the start rather than improvised. It changes handling on hill roads, so we would rather solve the problem with the right vehicle — but for a trekking group with equipment it is sometimes the only answer. Say so at booking so the vehicle arrives fitted.' },
    { question: 'What happens if my luggage does not fit the booked vehicle?', answer: 'Tell us the bag count when you book and it will not arise. If it does, the options are to go up one vehicle — ₹4 per km from sedan to Ertiga, ₹3 from Ertiga to Innova, which on a 300 km day is ₹1,200 and ₹900 — or to fold a seat row if your group is small enough. What we will not do is load a passenger\'s lap for a seven-hour hill drive and call it solved.' },
  ],

  related: [
    { label: 'The published rate card', href: '/routes' },
    { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    { label: 'Tempo Traveller or two sedans', href: '/tempo-traveller-or-two-sedans' },
    { label: 'Pre-booked airport pickup or the prepaid counter', href: '/airport-pickup-vs-prepaid-taxi' },
    { label: 'Travelling with elderly parents by cab', href: '/travelling-with-elderly-parents-by-cab' },
    { label: 'How many kilometres a day is comfortable', href: '/how-many-km-per-day-by-car' },
  ],
};
