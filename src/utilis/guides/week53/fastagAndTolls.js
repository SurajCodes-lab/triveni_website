// Week 53 answer-proof guide 31 — "FASTag and tolls on a long highway trip"
//
// WHY THIS SHAPE
// A cost question, and the last gap in the cost cluster: the night-charges page
// explains what "at actual" means, the state-permits page explains the border
// levy, and nothing explains the largest of the four extras on an expressway
// route. Two other guides already link here, which is the clearest signal a
// page is missing.

export const guide = {
  slug: 'fastag-and-tolls-on-highway-trips',
  path: '/fastag-and-tolls-on-highway-trips',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Cost guide · Tolls',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'FASTag and tolls on highway trips',
  titleLead: 'Tolls on a long trip:',
  titleAccent: 'the biggest of the four extras',
  title: 'FASTag and Tolls on a Long Highway Trip: What to Expect',
  metaTitle: 'Cab Tolls and FASTag: The Biggest Extra on an Expressway',
  metaDescription: 'How tolls work on an outstation cab trip: why expressway routes carry far larger tolls than trunk roads, what FASTag changes, who pays and how it is billed, and which routes are most affected.',
  keywords: ['cab toll charges india', 'fastag on taxi outstation', 'yamuna expressway toll cab', 'who pays toll in taxi', 'expressway toll cost india trip', 'toll charges at actual meaning'],
  heroImage: '/images/car/swift_dzire.jpg',
  heroAlt: 'A sedan from the Triveni Cabs fleet on an expressway route',

  lead: 'On an expressway route the toll is usually the largest of the four charges billed at actual — larger than parking, state entry or the driver night allowance. The Yamuna, Agra-Lucknow and Purvanchal expressways all carry substantial charges, and a nine-day Uttar Pradesh circuit using all three accumulates a real figure. That is the trade and it is normally worth taking: the Agra-Lucknow Expressway covers 340 km in under five hours against most of a day on the old NH-19. What you should know in advance is simply that a fast route costs more in tolls than a slow one of the same length.',

  keyFacts: [
    { label: 'Who pays on the road', value: 'The driver, by FASTag' },
    { label: 'How it is billed', value: 'At actual, with receipts' },
    { label: 'Largest on', value: 'Expressway routes' },
    { label: 'Smallest on', value: 'Hill routes' },
  ],
  stickyLabel: 'Outstation cab',
  stickyPrice: 'Fare fixed; tolls at actual',
  waText: 'Hi, I would like a quote with the likely tolls estimated upfront.',

  intro: [
    'Every fare on this site is quoted with tolls charged at actual on top, and on most routes that is a modest line nobody thinks about. On the expressway corridors it is not modest, and a customer who has budgeted the fare and not the toll is surprised at the end of a nine-day trip.',
    'The reason is that India\'s new access-controlled expressways are tolled at a different level from the older national highways, because they were built on a different financing model. You are buying the time saving directly.',
    'This page covers which routes that applies to, what FASTag changes, and how the charge reaches your bill.',
  ],

  table: {
    title: 'Toll weight by route type',
    caption: 'Relative toll cost by road type and route, showing which corridors carry the heaviest charges',
    intro: 'Relative rather than absolute, because rates are revised and a published figure goes stale. The pattern is stable even when the numbers are not.',
    columns: [
      { key: 'route', label: 'Route' },
      { key: 'road', label: 'Road type' },
      { key: 'toll', label: 'Toll weight' },
      { key: 'note', label: 'What you are buying' },
    ],
    rows: [
      { route: 'Delhi → Agra', road: 'Yamuna Expressway', toll: '**Heavy**', note: '230 km in 3.5 hrs; two plazas, both FASTag' },
      { route: 'Agra → Lucknow', road: 'Agra-Lucknow Expressway', toll: '**Heavy**', note: '340 km in under 5 hrs against most of a day on NH-19' },
      { route: 'Lucknow → Varanasi', road: 'Purvanchal Expressway', toll: '**Heavy**', note: 'Five hours on access-controlled road' },
      { route: 'Delhi → Jaipur', road: 'NH-48, six lane', toll: 'Moderate', note: 'Fast national highway, several plazas' },
      { route: 'Delhi → Chandigarh', road: 'NH-44, four–six lane', toll: 'Moderate', note: 'As NH-48' },
      { route: 'Delhi → Haridwar', road: 'NH-334, mixed', toll: 'Light to moderate', note: 'Trunk road with towns' },
      { route: 'Jaipur → Jodhpur → Jaisalmer', road: 'State and national highway', toll: 'Light', note: 'Few plazas across the desert' },
      { route: 'Shimla → Manali', road: 'Hill road', toll: '**Very light**', note: 'Almost no tolled sections' },
      { route: 'Char Dham circuit', road: 'Hill and gorge road', toll: '**Very light**', note: 'Uttarakhand entry matters more than tolls here' },
      { route: 'Nine-day UP heritage circuit', road: 'Three expressways', toll: '**Heaviest on the site**', note: 'The fastest itinerary and the most tolled' },
    ],
    footnote: 'Toll rates are set by NHAI and the concessionaires and are revised periodically, which is why this table is relative rather than absolute. On request we will estimate the likely total for a specific itinerary rather than leaving "at actual" as an unknown.',
  },

  sections: [
    {
      eyebrow: 'The trade',
      heading: 'An expressway toll is a time purchase, and usually a good one',
      paras: [
        'The Agra-Lucknow Expressway is the clearest case. Three hundred and forty kilometres in four and a half to five hours, against most of a day on the old NH-19 through Etawah and Kanpur. The toll is substantial and it buys four or five hours, on a route where those hours are the difference between a nine-day Uttar Pradesh itinerary and a fourteen-day one.',
        'The Yamuna Expressway does the same between Delhi and Agra, and the Purvanchal between Lucknow and Varanasi. Together those three are the reason the heritage circuit on this site is nine days.',
        'Where the trade is less clear is a short hop with a plaza on it, or a route where the old road is nearly as quick. In those cases the driver will take the cheaper road unless you want otherwise, which is worth saying once at the booking stage.',
      ],
      link: { label: 'The nine-day Uttar Pradesh heritage circuit', href: '/uttar-pradesh-heritage-circuit-by-car' },
    },
    {
      eyebrow: 'FASTag',
      heading: 'What it changes and what it does not',
      paras: [
        'FASTag is an electronic toll tag read at the plaza, and every vehicle we run outstation carries one. What it changes is the time at the barrier: a FASTag lane passes in seconds where a cash lane can queue for several minutes, and on a route with four or five plazas that adds up.',
        'What it does not change is the amount. The toll is the toll; FASTag is a payment method rather than a discount, beyond the small differential some plazas apply.',
        'The practical point for a passenger is simply that you should not be in a cash queue. If a driver is paying cash at plazas on a long expressway run, something is wrong with the vehicle\'s tag and it is costing you time at every barrier.',
      ],
      link: { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    },
    {
      eyebrow: 'The billing',
      heading: 'Who pays, and how it reaches your bill',
      paras: [
        'The driver pays at the plaza from the vehicle\'s FASTag and it is billed to you at what was actually deducted. That is what "at actual" means: not an estimate folded into the fare, and not a markup.',
        'The receipts and the tag statement are available, and on a long circuit you are entitled to see them. We would rather hand over a statement at the end of a nine-day trip than have a figure queried.',
        'On request at the booking stage we will **estimate the likely toll total** for a specific itinerary alongside the fare, so the whole figure is known before you travel. We will not fold it into the per-kilometre rate, for the reason set out on the night-charges page: doing so means either overcharging lightly tolled hill routes or undercharging heavily tolled expressway ones, and both are worse than itemising.',
        'And note the per-vehicle point: two cars pay two sets of tolls at every plaza, which is one of the reasons a single larger vehicle is cheaper for a group than the per-kilometre comparison alone suggests.',
      ],
      link: { label: 'Tempo Traveller or two sedans', href: '/tempo-traveller-or-two-sedans' },
    },
  ],

  tips: [
    { title: 'Expressway routes carry the biggest tolls on the site', text: 'The Yamuna, Agra-Lucknow and Purvanchal are all heavily tolled. They are also why the UP circuit is nine days rather than fourteen.' },
    { title: 'Hill routes carry almost none', text: 'A Char Dham or Himachal circuit has very little tolled road. There, state entry matters more than tolls.' },
    { title: 'You should never be in a cash queue', text: 'Every outstation vehicle carries FASTag. If a driver is paying cash at plazas on a long run, the tag is the problem and it costs you time at every barrier.' },
    { title: 'Ask for a toll estimate at booking', text: 'We will put a figure on the likely total alongside the fare, so "at actual" is not an unknown when you are budgeting.' },
    { title: 'Two cars pay every plaza twice', text: 'Same as state entry, parking and the night allowance. It is why the group arithmetic favours one larger vehicle more than the per-km rates suggest.' },
  ],

  faqs: [
    { question: 'Who pays the toll in an outstation cab?', answer: 'The driver pays at the plaza from the vehicle\'s FASTag, and it is billed to you at what was actually deducted. That is what "tolls at actual" means on every fare quoted here — not an estimate folded into the fare and not a markup. The receipts and the tag statement are available and you are entitled to see them on a long trip.' },
    { question: 'Why are tolls so high on the expressways?', answer: 'Because India\'s new access-controlled expressways were built on a different financing model from the older national highways, and the toll reflects it. You are buying the time saving directly: the Agra-Lucknow Expressway covers 340 km in under five hours against most of a day on the old NH-19, and that saving is the reason the Uttar Pradesh circuit on this site is nine days rather than fourteen.' },
    { question: 'Does FASTag make the toll cheaper?', answer: 'Not materially — it is a payment method rather than a discount, beyond the small differential some plazas apply. What it changes is time: a FASTag lane passes in seconds where a cash lane can queue for minutes, which on a route with four or five plazas adds up. Every outstation vehicle we run carries one, and a driver paying cash on a long expressway run means something is wrong with the tag.' },
    { question: 'Which cab routes have the lowest tolls?', answer: 'Hill routes, by a wide margin. A Shimla-to-Manali run or a Char Dham circuit has almost no tolled sections at all, and on those itineraries the state entry levy matters far more than the toll. The Rajasthan desert corridors are also light. The heaviest are the three Uttar Pradesh expressways.' },
    { question: 'Can I get the tolls included in a single quoted figure?', answer: 'We will estimate the likely total for your itinerary alongside the fare on request, so the whole figure is known before you travel. What we will not do is fold it into the per-kilometre rate, because that means either overcharging a lightly tolled hill route or undercharging a heavily tolled expressway one — and both are worse than itemising it honestly.' },
    { question: 'Do two cars pay double the tolls?', answer: 'Yes, because tolls are charged per vehicle, as are parking, state entry levies and the driver night allowance. Two cars on a nine-day circuit using three expressways pay two full sets of expressway tolls. It is one of several reasons the per-head arithmetic favours a single larger vehicle for a group more strongly than the per-kilometre rates alone suggest.' },
  ],

  related: [
    { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    { label: 'Commercial vehicle state permits explained', href: '/commercial-vehicle-state-permits' },
    { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    { label: 'Tempo Traveller or two sedans', href: '/tempo-traveller-or-two-sedans' },
    { label: 'The nine-day Uttar Pradesh heritage circuit', href: '/uttar-pradesh-heritage-circuit-by-car' },
    { label: 'The published rate card', href: '/routes' },
  ],
};
