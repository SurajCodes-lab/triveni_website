// Week 53 answer-proof guide 30 — "State permits for a commercial vehicle"
//
// WHY THIS SHAPE
// The thirtieth and last of the planned answer-proof guides, and the one that
// closes a loop. Every fare on this site says "state permits at actual" and the
// night-charges guide explains that in a paragraph; this page explains the
// thing itself — what the levy is, why it is per state, and why it is the
// operator's problem to hold the paperwork and the passenger's to know it
// exists.

export const guide = {
  slug: 'commercial-vehicle-state-permits',
  path: '/commercial-vehicle-state-permits',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Cost guide · Permits',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'State permits for a commercial vehicle',
  titleLead: 'State permits:',
  titleAccent: 'why crossing a line costs money',
  title: 'State Permits for a Commercial Vehicle: Why Crossing a Line Costs',
  metaTitle: 'Cab State Permits: Why Crossing a Border Costs Money',
  metaDescription: 'Why a cab crossing into another state pays a levy, which routes cross how many states, what an all-India permit covers, and why this is the operator\'s paperwork and the passenger\'s line item.',
  keywords: ['state permit taxi india', 'interstate taxi charges', 'all india tourist permit', 'why does cab charge state tax', 'border tax cab india', 'himachal entry tax taxi'],
  heroImage: '/images/car/innova_crysta.jpg',
  heroAlt: 'An Innova Crysta from the Triveni Cabs fleet on an interstate route',

  lead: 'A commercial passenger vehicle entering another state pays that state a levy, collected at or near the border, and it is the reason a Delhi-to-Shimla trip carries a charge that a Delhi-to-Agra trip of similar length does not. It is a government charge rather than an operator one, it applies per state crossed, and it is the explanation for the "state permits at actual" line on every fare quoted here. What you should expect is to be told which states your route crosses before you travel. What you should not accept is an unexplained round figure called "state tax".',

  keyFacts: [
    { label: 'What it is', value: 'A state levy on a commercial vehicle entering' },
    { label: 'Who receives it', value: 'The state government' },
    { label: 'Charged', value: 'Per state crossed, at actual' },
    { label: 'Who holds the paperwork', value: 'The operator — not you' },
  ],
  stickyLabel: 'Interstate cab',
  stickyPrice: 'Fare fixed before travel',
  waText: 'Hi, I would like a quote with the state crossings and levies stated upfront.',

  intro: [
    'India\'s states levy their own charges on commercial passenger vehicles entering from outside, and a tourist vehicle crossing from Delhi into Haryana, Haryana into Punjab and Punjab into Himachal is in the scope of each one in turn. The amounts differ by state, by vehicle category and by duration, and they are collected at or near the border.',
    'From a passenger\'s point of view almost none of the detail matters. What matters is three things: that it is a real third-party cost rather than a markup, that it scales with the number of states rather than the distance, and that a reputable operator can tell you in advance which states your route crosses.',
    'This page covers those three, plus the one case where the paperwork rather than the levy becomes the issue.',
  ],

  table: {
    title: 'How many states a route crosses',
    caption: 'State crossings by popular route, showing why the levy scales with borders rather than with distance',
    intro: 'Note the pattern: distance and the number of crossings are unrelated. A long run inside one state carries none; a short one across three carries three.',
    columns: [
      { key: 'route', label: 'Route' },
      { key: 'km', label: 'Km', align: 'right' },
      { key: 'states', label: 'States entered' },
      { key: 'n', label: 'Crossings', align: 'right' },
    ],
    rows: [
      { route: 'Delhi → Agra', km: '230', states: 'Uttar Pradesh', n: '1' },
      { route: 'Delhi → Jaipur', km: '280', states: 'Haryana, Rajasthan', n: '2' },
      { route: 'Delhi → Shimla', km: '350', states: 'Haryana, Punjab, Himachal', n: '3' },
      { route: 'Delhi → Haridwar', km: '230', states: 'Uttar Pradesh, Uttarakhand', n: '2' },
      { route: 'Delhi → Manali', km: '540', states: 'Haryana, Punjab, Himachal', n: '3' },
      { route: 'Jaipur → Jaisalmer', km: '560', states: 'None — all Rajasthan', n: '**0**' },
      { route: 'Jaipur → Udaipur', km: '395', states: 'None — all Rajasthan', n: '**0**' },
      { route: 'Agra → Lucknow', km: '340', states: 'None — all Uttar Pradesh', n: '**0**' },
      { route: 'Delhi → Amritsar', km: '450', states: 'Haryana, Punjab', n: '2' },
      { route: 'Delhi → Mount Abu', km: '750', states: 'Haryana, Rajasthan', n: '2' },
      { route: 'Varanasi → Bodh Gaya', km: '260', states: 'Bihar', n: '1' },
      { route: 'Ten-day Rajasthan circuit', km: '~2,270', states: 'Haryana, Rajasthan', n: '2' },
      { route: 'Nine-day Himachal circuit', km: '~1,740', states: 'Haryana, Punjab, Himachal', n: '3' },
    ],
    footnote: 'Crossings counted from a Delhi-registered vehicle. A vehicle registered in another state crosses a different set — a Rajasthan-registered car on a Jaipur-to-Jaisalmer run pays nothing, while a Delhi-registered one pays Rajasthan entry. Levy amounts are set by each state and change; they are charged at actual and the receipts are available.',
  },

  sections: [
    {
      eyebrow: 'The pattern',
      heading: 'It scales with borders, not with distance',
      paras: [
        'This is the single most useful thing on the page and it explains most of the apparent inconsistency in fares. Jaipur to Jaisalmer is 560 km and crosses no border, because both are in Rajasthan. Delhi to Shimla is 350 km and crosses three states. The shorter trip carries three levies and the longer one carries none.',
        'The ten-day Rajasthan circuit is a good illustration: 2,270 km and two crossings, because once the car is in Rajasthan it stays there for nine days. The nine-day Himachal circuit is 1,740 km with three crossings, and the Uttar Pradesh heritage circuit is 1,125 km with one.',
        'So when comparing two quotes of similar distance, the number of state crossings is a legitimate reason for a difference in the extras — and it is a factual question with a checkable answer rather than a judgement.',
      ],
      link: { label: 'The ten-day Rajasthan grand circuit', href: '/rajasthan-grand-circuit-by-car' },
    },
    {
      eyebrow: 'The paperwork',
      heading: 'The all-India permit, and why it is the operator\'s problem',
      paras: [
        'A commercial passenger vehicle can hold a national permit — commonly called an all-India tourist permit — which authorises it to operate across states rather than only within its home state. A vehicle without the right authorisation can be stopped and detained at a border check, which is a far worse outcome than a levy.',
        'That is the operator\'s responsibility entirely and it should never become the passenger\'s problem. Our outstation vehicles carry the authorisation for the routes they run, and the driver holds the documents. A passenger should not be asked to pay a fine, wait at a border post, or arrange anything.',
        'It is, however, a fair question to ask an unfamiliar operator before a long interstate trip: whether the vehicle is authorised for the states on the route. A cheap quote from an operator running a locally-permitted vehicle across three borders is cheap for a reason, and the risk lands on the passenger\'s schedule.',
      ],
      link: { label: 'The published rate card', href: '/routes' },
    },
    {
      eyebrow: 'On your bill',
      heading: 'What to expect, and what to question',
      paras: [
        '**Expect to be told which states your route crosses** before you travel. It is a factual question and an operator who runs the route knows the answer without checking.',
        '**Expect the levies at actual, with receipts.** Like tolls and parking, they are paid on the road and passed on at what was paid. The driver holds the receipts and you are entitled to see them.',
        '**Question a round unexplained figure.** "State tax ₹3,000" with no breakdown on a two-crossing route is the thing to push back on. The levies are published by each state and a driver who runs the corridor knows them.',
        '**And note that two vehicles pay twice.** If you are taking two cars rather than one, each pays its own entry at every border — which is one of the reasons the per-head arithmetic favours a single larger vehicle more than the per-kilometre comparison suggests.',
      ],
      link: { label: 'Tempo Traveller or two sedans', href: '/tempo-traveller-or-two-sedans' },
    },
  ],

  tips: [
    { title: 'Count the borders, not the kilometres', text: 'Jaipur to Jaisalmer is 560 km and no crossings. Delhi to Shimla is 350 km and three. The levies follow the borders.' },
    { title: 'Ask which states the route crosses', text: 'A factual question with a checkable answer. An operator who runs the route answers it without looking it up.' },
    { title: 'Never accept an unexplained "state tax"', text: 'The levies are published per state and charged at actual with receipts. A round figure with no breakdown is the thing to query.' },
    { title: 'Authorisation is the operator\'s job, not yours', text: 'A vehicle without the right interstate permit can be detained at a border post. You should never be asked to pay a fine or wait.' },
    { title: 'Two cars pay every levy twice', text: 'Another reason the arithmetic favours one larger vehicle for a group more than the per-km comparison alone suggests.' },
  ],

  faqs: [
    { question: 'Why does my cab bill include a state permit or entry charge?', answer: 'Because a commercial passenger vehicle entering another state pays that state a levy, collected at or near the border. It is a government charge rather than an operator markup, it applies per state crossed, and it is why a Delhi-to-Shimla trip carries a charge that a Delhi-to-Agra trip of similar length does not — Shimla crosses three states and Agra crosses one.' },
    { question: 'How many states does my route cross?', answer: 'It depends on borders rather than distance, which is the counter-intuitive part. From Delhi: Agra crosses one, Jaipur two, Shimla and Manali three, Haridwar two, Amritsar two. Within one state there are no crossings at all — Jaipur to Jaisalmer is 560 km and crosses nothing, and Agra to Lucknow is 340 km with none. Ask us and we will tell you for your route.' },
    { question: 'What is an all-India tourist permit?', answer: 'A national permit authorising a commercial passenger vehicle to operate across states rather than only within its home state. It is entirely the operator\'s responsibility — our outstation vehicles carry the authorisation for the routes they run and the driver holds the documents. A passenger should never be asked to pay a fine, wait at a border post or arrange anything.' },
    { question: 'Can I be charged a round "state tax" figure?', answer: 'You can be, and it is the thing to question. The levies are published by each state and charged at actual with receipts, like tolls and parking — the driver holds them and you are entitled to see them. An unexplained round figure on a two-crossing route is worth pushing back on, because a driver who runs the corridor knows the actual amounts.' },
    { question: 'Is it cheaper to use a locally registered cab for an interstate trip?', answer: 'It can appear cheaper and the risk is yours rather than theirs. A vehicle without the correct interstate authorisation can be stopped and detained at a border check, which costs a day rather than a levy. Before a long interstate trip with an unfamiliar operator, it is a fair question to ask whether the vehicle is authorised for every state on the route.' },
    { question: 'Do two cars pay the state levy twice?', answer: 'Yes — it is charged per vehicle, so two cars pay every border twice, as they do with tolls and parking and as they incur two driver night allowances. It is one of several reasons the per-head arithmetic favours a single larger vehicle for a group more strongly than the per-kilometre rates alone suggest.' },
  ],

  related: [
    { label: 'Driver night charges and the extras explained', href: '/driver-night-charges-explained' },
    { label: 'The published rate card', href: '/routes' },
    { label: 'Tempo Traveller or two sedans', href: '/tempo-traveller-or-two-sedans' },
    { label: 'FASTag and tolls on highway trips', href: '/fastag-and-tolls-on-highway-trips' },
    { label: 'Uttarakhand yatra registration', href: '/uttarakhand-yatra-registration' },
    { label: 'Inner line permit for Kinnaur and Spiti', href: '/inner-line-permit-kinnaur-spiti' },
  ],
};
