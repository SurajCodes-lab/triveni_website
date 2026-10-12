// Week 53 answer-proof guide 5 — "What does Char Dham by car actually cost?"
//
// WHY THIS SHAPE
// The highest-intent cost question in the pilgrimage family, and one the site
// has 51 Char Dham pages without ever answering in full. A family planning this
// trip wants a total, not a per-kilometre rate — and the total has four parts,
// only one of which is the car.
//
// The honest version of this page has to include the costs that are not ours:
// ponies, palanquins, the helicopter, accommodation at altitude. Publishing only
// the cab fare would answer the question we want asked rather than the one being
// asked, and a family that discovers the pony cost at Gaurikund has been let
// down by the page they planned from.

export const guide = {
  slug: 'char-dham-yatra-cost-by-car',
  path: '/char-dham-yatra-cost-by-car',
  mood: 'pilgrimage',
  cluster: 'logistics',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Cost guide · Char Dham',
  crumbs: [{ name: 'Char Dham yatra', url: '/chardham-yatra' }],
  crumbName: 'Char Dham yatra cost by car',
  titleLead: 'What does Char Dham by car cost?',
  titleAccent: 'The four parts of the bill, not just the cab',
  title: 'What Does Char Dham by Car Cost? The Four Parts of the Bill',
  metaTitle: 'Char Dham Cost by Car: ₹39,600 Cab Plus What Else',
  metaDescription: 'What a Char Dham yatra by car actually costs: the twelve-day cab fare from ₹39,600, plus the ponies, palanquins, helicopter and the extras at actual. Where the money goes and what is avoidable.',
  keywords: ['char dham yatra cost by car', 'char dham cost per person', 'kedarnath pony cost', 'kedarnath helicopter cost', 'char dham budget 12 days', 'char dham taxi fare', 'do dham cost by car'],
  heroImage: '/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
  heroAlt: 'The Char Dham shrines in the Garhwal Himalaya',

  lead: 'The cab is the part we can quote exactly: a twelve-day Char Dham circuit from Haridwar is ₹39,600 for a sedan, ₹54,000 for an Ertiga, ₹64,800 for an Innova Crysta and ₹82,800 for a 12-seater Tempo Traveller, on the published rate card. That is the vehicle, the fuel, the driver and GST for the whole yatra. But it is roughly half of what a family actually spends, because the Kedarnath ascent, the extras at actual and twelve nights of accommodation are the other half — and the Kedarnath decision alone can swing the total by a large margin.',

  keyFacts: [
    { label: 'Sedan, 12 days', value: '₹39,600' },
    { label: 'Innova Crysta, 12 days', value: '₹64,800' },
    { label: 'Not in the fare', value: 'Ponies, helicopter, stays, the 4 extras' },
    { label: 'Biggest variable', value: 'How you reach Kedarnath' },
  ],
  stickyLabel: 'Char Dham cab',
  stickyPrice: 'Sedan ₹39,600 · 12 days',
  waText: 'Hi, I would like a Char Dham quote with the extras estimated upfront. Dates and headcount to follow.',

  intro: [
    'This page gives a total rather than a fare, which means including costs that do not come to us. Ponies and palanquins at Yamunotri and Kedarnath are paid to the operators at the trailhead. The Kedarnath helicopter is booked separately. Accommodation at Kedarnath, Badrinath and Guptkashi is yours to arrange. We would rather set all of it out than quote the cab and let the rest arrive as a surprise at 3,583 metres.',
    'The one number that moves the total most is how you reach Kedarnath. Walking 16 km costs nothing but two days and a great deal of effort. Ponies for a family of four is a substantial figure. The helicopter is more again, and it is weather-dependent, so it is a cost that can be incurred and then not delivered.',
    'Everything below is for the twelve-day circuit from Haridwar covering all four shrines. The seven-day Do Dham version — Kedarnath and Badrinath only — is roughly 60% of the cab cost and most of the Kedarnath cost, because Kedarnath is where the money goes either way.',
  ],

  table: {
    title: 'The four parts of a Char Dham bill',
    caption: 'Char Dham yatra cost by component: the cab fare, the charges at actual, the shrine access costs and accommodation',
    intro: 'Only the first row is a figure we set. The rest is set by third parties, and the third row is where a family\'s total most often differs from its plan.',
    columns: [
      { key: 'part', label: 'Part of the bill' },
      { key: 'who', label: 'Paid to' },
      { key: 'note', label: 'What it covers and what moves it' },
    ],
    rows: [
      { part: '1. The cab, 12 days', who: 'Triveni Cabs', note: 'Sedan ₹39,600 · Ertiga ₹54,000 · Innova Crysta ₹64,800 · Tempo Traveller ₹82,800. Vehicle, fuel, driver and GST. Fixed before you travel.' },
      { part: '2. The four extras', who: 'Authorities and the driver', note: 'Tolls, parking, Uttarakhand entry and the driver night allowance for eleven nights away. Charged at actual; we estimate them upfront on request.' },
      { part: '3. Reaching the shrines', who: 'Trailhead operators / heli operator', note: 'The big variable. Yamunotri is a 6 km walk with ponies and palanquins available; Kedarnath is 16 km with ponies, palanquins or a helicopter from Phata, Sersi or Guptkashi. Gangotri and Badrinath have road to the temple and cost nothing extra.' },
      { part: '4. Stays and meals', who: 'Hotels and dharamshalas', note: 'Eleven nights, two of them at altitude. Kedarnath accommodation is limited and prices accordingly in the May-June peak. Entirely yours to arrange.' },
    ],
    footnote: 'Cab fares are the published rate card times 300 km per day for twelve days. We do not publish figures for row three because pony, palanquin and helicopter rates are set by the operators and the state and change season to season — ask us close to your dates and we will tell you the current position rather than a stale number.',
  },

  sections: [
    {
      eyebrow: 'The cab',
      heading: 'Why twelve days bills 3,600 km when the yatra drives 1,600',
      paras: [
        'Because Char Dham is the clearest case on the whole site of hiring a vehicle for a period rather than buying kilometres. The circuit covers about 1,600 km of driving over twelve days, and the 300 km per day minimum bills 3,600 — which looks like a large gap until you look at what the car does.',
        'Three of the twelve days the car does not move at all. On the Yamunotri day it waits at Jankichatti while you walk. On the two Kedarnath days it waits at Gaurikund, overnight, while you are at the shrine. Several other days are short valley legs of 100 to 165 km on roads that take four to five hours.',
        'The driver is away from Haridwar for eleven nights, at altitude, on roads he cannot leave. The alternative to a minimum is a bill that prices a day of waiting at Gaurikund the same as a day of driving 500 km, which no operator can actually honour — they recover it in the extras instead. The minimum is the version where you can see it.',
      ],
      link: { label: 'What a week-long cab hire costs, and how the minimum works', href: '/week-long-cab-hire-cost' },
    },
    {
      eyebrow: 'Kedarnath',
      heading: 'The decision that moves the total most',
      paras: [
        'Sixteen kilometres from Gaurikund with a 1,500 metre gain. Walking costs nothing and takes six to eight hours up, four to six down, which is why the itinerary allows two days for it. For a fit adult it is the best part of the yatra; for an older pilgrim it is not realistic.',
        'Ponies and porters are available at Gaurikund and are the standard choice. The rate is set at the trailhead and rises sharply in the May and June peak, and for a family of four it is a substantial line in the budget — comparable to several days of the cab. Palanquins carried by four bearers cost more again and are the option for those who cannot sit a pony.',
        'The helicopter flies from Phata, Sersi or Guptkashi to the Kedarnath helipad in minutes. It is the most expensive option by a clear margin, booked separately and well ahead, and it is weather-dependent — flights are grounded regularly and a booking is not a guarantee of flying. A great many families fly up and walk down, which halves the cost and the uncertainty.',
        'The honest planning advice is to decide this first and budget it before anything else, because it is both the largest variable and the one that determines how many days the yatra needs.',
      ],
      link: { label: 'The twelve-day Char Dham circuit, day by day', href: '/char-dham-circuit-by-car' },
    },
    {
      eyebrow: 'Cheaper versions',
      heading: 'Do Dham, and the other honest ways to reduce the total',
      paras: [
        'Do Dham — Kedarnath and Badrinath only — is the main one. Seven days from Haridwar instead of twelve, about 950 km of driving, and a sedan bills ₹23,100 against ₹39,600. It drops Yamunotri and Gangotri, which is a real loss, but it keeps the two most visited shrines and the Kedarnath walk intact.',
        'Sharing the vehicle is the other big lever. A 12-seater Tempo Traveller at ₹82,800 for twelve days is ₹6,900 per head across twelve people, against ₹39,600 for a sedan carrying two at ₹19,800 each. For an extended family travelling together the larger vehicle is dramatically cheaper per person, not more expensive.',
        'Travelling in September rather than May is the third. Accommodation at Kedarnath and Badrinath and the pony rates at Gaurikund are both materially lower outside the May and June peak, the roads are quieter, and the weather is in most respects better. The caveat is that the season closes earlier at altitude.',
        'What we would not recommend as an economy is compressing the days. Twelve is not padding — three of them are days the car waits while you walk, and cutting them means either skipping a shrine or attempting the Kedarnath ascent and descent in one day.',
      ],
      link: { label: 'Best time for Char Dham by road', href: '/best-time-for-char-dham-by-road' },
    },
    {
      eyebrow: 'What to ask',
      heading: 'Getting a figure you can actually plan against',
      paras: [
        'Ask for the cab fare and the four extras together as a stated estimate. The fare is exact; the tolls, Uttarakhand entry and eleven nights of driver allowance are knowable within a reasonable margin, and we will put a figure on them rather than leaving "at actual" to be discovered.',
        'Ask what the current pony, palanquin and helicopter position is for your dates. We do not set those rates and we will not quote stale ones, but we run the route weekly through the season and can tell you where they stand close to your travel date.',
        'And decide the Kedarnath method before you book the car, because it changes the shape of the itinerary as well as the budget. A family flying up and walking down needs a different day-seven plan from one walking both ways.',
      ],
      link: { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    },
  ],

  tips: [
    { title: 'Budget Kedarnath first', text: 'It is the largest variable in the whole yatra and it decides the number of days as well as the cost. Everything else can be planned around it.' },
    { title: 'A helicopter booking is not a flight', text: 'Kedarnath flights are grounded regularly by weather. Plan the days so a cancellation means walking rather than missing the shrine, and treat the fare as a cost that may not deliver.' },
    { title: 'Share the vehicle, not the days', text: 'A Tempo Traveller across twelve people is far cheaper per head than sedans. Compressing the twelve days is not an economy — three of them are days the car waits while you walk.' },
    { title: 'September over May', text: 'Accommodation and pony rates are both materially lower outside the May and June peak, and the roads are quieter. The season simply closes earlier at altitude.' },
    { title: 'Register before you travel', text: 'Uttarakhand yatra registration is required and checked on the route. Doing it online beforehand avoids the Haridwar and Rishikesh counters, which are slow in the peak.' },
  ],

  faqs: [
    { question: 'How much does Char Dham by car cost?', answer: 'The cab for a twelve-day circuit from Haridwar is ₹39,600 for a sedan, ₹54,000 for an Ertiga, ₹64,800 for an Innova Crysta and ₹82,800 for a 12-seater Tempo Traveller — the vehicle, fuel, driver and GST. On top of that are tolls, parking, Uttarakhand entry and eleven nights of driver allowance at actual, plus the cost of reaching Yamunotri and Kedarnath, plus eleven nights of accommodation. The cab is roughly half of a family\'s total.' },
    { question: 'Why does a twelve-day Char Dham cab bill 3,600 km for a 1,600 km yatra?', answer: 'Because of the 300 km per day minimum, and Char Dham is the clearest illustration of why it exists. Three of the twelve days the car does not move at all — one waiting at Jankichatti while you walk to Yamunotri, two waiting at Gaurikund while you are at Kedarnath. Several others are 100 to 165 km valley legs that take four to five hours. You are hiring the vehicle and driver for the period, not buying distance.' },
    { question: 'What is not included in a Char Dham cab fare?', answer: 'Four things at actual — tolls, parking, Uttarakhand state entry and the driver night allowance for each night away — plus everything to do with reaching the two shrines you cannot drive to: ponies, palanquins or the helicopter for Kedarnath, and ponies or palanquins for the 6 km Yamunotri walk. Accommodation, meals and yatra registration are also separate.' },
    { question: 'Is Do Dham cheaper than Char Dham?', answer: 'Substantially. Seven days instead of twelve and about 950 km instead of 1,600, so a sedan bills ₹23,100 against ₹39,600. It covers Kedarnath and Badrinath, the two most visited shrines, and drops Yamunotri and Gangotri. Note that most of the Kedarnath cost — the walk, the ponies or the helicopter — applies either way, since that is where the effort and the money concentrate.' },
    { question: 'How much do the Kedarnath ponies or helicopter cost?', answer: 'Both are set by the trailhead operators and the state rather than by us, and both change season to season, so we will not publish a figure that will be stale. What is reliable is the shape: walking is free and takes two days, ponies for a family of four is a substantial line comparable to several days of the cab, palanquins cost more again, and the helicopter is the most expensive by a clear margin and is weather-dependent. Ask us close to your dates for the current position.' },
    { question: 'What is the cheapest way to do Char Dham by road?', answer: 'Share a larger vehicle and travel in September. A 12-seater Tempo Traveller at ₹82,800 across twelve people is ₹6,900 each, against ₹19,800 each for two people in a sedan. September accommodation and pony rates are both materially below the May and June peak. What is not a saving is cutting days — twelve is the minimum that allows the two Kedarnath walk days.' },
  ],

  related: [
    { label: 'The twelve-day Char Dham circuit', href: '/char-dham-circuit-by-car' },
    { label: 'Char Dham yatra packages', href: '/chardham-yatra' },
    { label: 'Best time for Char Dham by road', href: '/best-time-for-char-dham-by-road' },
    { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    { label: 'Haridwar sightseeing', href: '/sightseeing/haridwar' },
  ],
};
