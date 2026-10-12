// Week 53 answer-proof guide 2 — "Driver night charges, state entry and the
// extras on an outstation cab bill"
//
// WHY THIS SHAPE
// A cost question with a definite answer that no search panel carries, and the
// single most common cause of an argument at the end of a trip. Every fare on
// this site says "tolls, parking, state permits and the driver night allowance
// at actual", and nothing on the site explains what that sentence means.
//
// Writing it down is also a commercial act rather than a defensive one. A
// customer who understands the bill before travelling does not dispute it
// afterwards, and the enquiry that converts best is the one where nothing comes
// as a surprise.

export const guide = {
  slug: 'driver-night-charges-explained',
  path: '/driver-night-charges-explained',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Cost guide · Outstation',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'Driver night charges and the extras explained',
  titleLead: 'Driver night charges, tolls and state entry:',
  titleAccent: 'what "at actual" actually means',
  title: 'Driver Night Charges and the Extras on an Outstation Cab Bill',
  metaTitle: 'Driver Night Charges and Cab Extras: What You Pay Beyond the Fare',
  metaDescription: 'What "tolls, parking, state permits and driver night allowance at actual" means on an outstation cab bill, which extras are fixed and which vary, and the questions to ask before you travel.',
  keywords: ['driver night charges', 'driver allowance outstation cab', 'what is driver bata', 'outstation cab extra charges', 'state permit charges taxi', 'toll and parking extra cab', 'cab fare inclusions and exclusions', 'night charges for taxi'],
  heroImage: '/images/car/innova_crysta.jpg',
  heroAlt: 'An Innova Crysta from the Triveni Cabs fleet on an outstation trip',

  lead: 'Every fare on this site is quoted with the same sentence after it: fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are charged at actual. That sentence is doing a lot of work and almost nobody asks what is inside it until the end of the trip. The short version: the per-kilometre rate covers the vehicle, the fuel and the driver\'s time. The extras are real third-party costs that vary by route plus one allowance that is the driver\'s own, and all of them should be stated before you travel rather than discovered afterwards.',

  keyFacts: [
    { label: 'In the per-km rate', value: 'Vehicle, fuel, driver, GST' },
    { label: 'At actual', value: 'Toll, parking, state entry, night allowance' },
    { label: 'Night allowance applies', value: 'Per night the driver is away' },
    { label: 'Should be told upfront', value: 'All of it' },
  ],
  stickyLabel: 'Outstation cab',
  stickyPrice: 'Fare fixed before travel',
  waText: 'Hi, I would like an outstation quote with the tolls, state entry and driver allowance stated upfront.',

  intro: [
    'This page is deliberately not a sales page. It explains a bill, including the parts of it that cost you money, because the commonest complaint about outstation cab hire anywhere in India is not the fare — it is the extras that were never mentioned.',
    'There are four extras and they are not the same kind of thing. Tolls and parking are third-party charges that the car physically pays on the road. State entry is a government levy for taking a commercial vehicle across a border. The driver night allowance is the only one that goes to a person rather than an authority, and it is the one most often misunderstood.',
    'None of them is optional or negotiable in the way a fare is, because three of the four are not ours to set. What is entirely reasonable to expect is that you are told the likely total before you travel, which is what the last section of this page is about.',
  ],

  table: {
    title: 'What is in the fare and what is not',
    caption: 'Outstation cab fare inclusions and the four charges billed at actual, with what each one is and who receives it',
    intro: 'The useful distinction is not "included or extra" but "whose money is it". Three of the four extras are paid to somebody else on the road.',
    columns: [
      { key: 'item', label: 'Item' },
      { key: 'status', label: 'In the fare?' },
      { key: 'who', label: 'Paid to' },
      { key: 'note', label: 'What it is' },
    ],
    rows: [
      { item: 'The vehicle', status: 'Included', who: '—', note: 'Per-kilometre rate: sedan ₹11, Ertiga or SUV ₹15, Innova Crysta ₹18, 12-seater Tempo Traveller ₹23' },
      { item: 'Fuel', status: 'Included', who: '—', note: 'Whatever the trip consumes; not billed separately and not your problem' },
      { item: 'The driver', status: 'Included', who: '—', note: 'The driver’s time and wage for the days of the trip' },
      { item: 'GST', status: 'Included', who: 'Government', note: 'Already inside the quoted figure' },
      { item: 'Toll', status: 'At actual', who: 'NHAI or the concessionaire', note: 'Paid at each plaza, FASTag where available. Route-dependent and sometimes substantial' },
      { item: 'Parking', status: 'At actual', who: 'The venue or municipality', note: 'Monument, airport, hotel and market parking charges' },
      { item: 'State entry', status: 'At actual', who: 'The state government', note: 'A levy for taking a commercial vehicle into another state. Applies per state crossed' },
      { item: 'Driver night allowance', status: 'At actual', who: 'The driver', note: 'A fixed per-night amount for each night the driver is away from base, covering his food and lodging' },
    ],
    footnote: 'Per-kilometre rates are the published rate card. The four at-actual items vary by route, by the states you cross and by the number of nights, which is exactly why they are not folded into a single figure — doing so would mean either overcharging short routes or undercharging long ones.',
  },

  sections: [
    {
      eyebrow: 'The night allowance',
      heading: 'What the driver night allowance is, and why it is not a surcharge',
      paras: [
        'It is a fixed amount per night that the driver is away from his base, and it covers his food and his bed. On a one-day return trip it does not apply at all. On a three-day Rajasthan trip it applies twice — for the two nights he sleeps away from home.',
        'It is worth being clear about what it is not. It is not a night-driving surcharge: it does not depend on whether the car moves after dark. It is not a penalty for a late arrival. And it is not a fee that the company keeps — it goes to the driver, which is the reason it is itemised rather than absorbed into the rate.',
        'The commonest misunderstanding is on a trip that returns the same day but arrives late. That is not a night away and the allowance does not apply, however late the car gets in. Conversely a trip that leaves at four in the afternoon and comes back the next morning is one night away and it does.',
        'Ask for the figure when you book. It is a known, fixed number and any operator should state it without hesitation. If it is vague at the booking stage it will be improvised at the end.',
      ],
      link: { label: 'The published rate card', href: '/routes' },
    },
    {
      eyebrow: 'State entry',
      heading: 'Why crossing a state line costs money, and on which routes it bites',
      paras: [
        'A commercial passenger vehicle entering another state pays a levy to that state. It is a government charge, it is collected at or near the border, and it is the reason a Delhi-to-Shimla trip carries a cost that a Delhi-to-Agra trip of similar length does not.',
        'The routes where it matters most on this site are the ones crossing into the hill states. A Himachal trip pays Himachal entry; an Uttarakhand trip pays Uttarakhand entry; a Rajasthan trip from Delhi pays Rajasthan entry, and a long circuit crossing several states pays each. On the ten-day Rajasthan circuit it is a single crossing; on a Delhi-Agra-Jaipur triangle it is two.',
        'What you should expect is to be told which states you cross and roughly what that adds, before you travel. What you should not accept is a round "state tax" figure that nobody can break down — the levies are published and a driver who runs the route knows them.',
      ],
      link: { label: 'The nine-day Himachal grand circuit', href: '/himachal-grand-circuit-by-car' },
    },
    {
      eyebrow: 'Tolls',
      heading: 'Tolls are the biggest variable, and the expressways are why',
      paras: [
        'On a hill route the toll component is small. On an expressway route it can be the largest of the four extras by a wide margin — the Yamuna, Agra-Lucknow and Purvanchal expressways all carry substantial charges, and a nine-day Uttar Pradesh circuit using all three accumulates a real figure.',
        'That is the trade and it is usually worth taking. The Agra-Lucknow Expressway covers 340 km in under five hours against most of a day on the old NH-19, and the toll buys you that. It is simply worth knowing in advance that the toll line on the bill will be larger on an expressway route than on a trunk-road one of the same length.',
        'All the major expressways on our routes are FASTag-enabled, which the driver carries, so the plazas themselves are quick. The toll is paid by the driver on the road and billed to you at what was actually paid.',
      ],
      link: { label: 'FASTag and tolls on highway trips', href: '/fastag-and-tolls-on-highway-trips' },
    },
    {
      eyebrow: 'What to ask',
      heading: 'The four questions to ask before you book anything',
      paras: [
        'What is the per-kilometre rate and the minimum billing, and does the quote include fuel, driver and GST? On this site the answer is the published rate card — sedan ₹11, Ertiga or SUV ₹15, Innova Crysta ₹18, 12-seater Tempo Traveller ₹23 — with a 300 km per day minimum on outstation trips and the 4 hr / 40 km local package below 100 km.',
        'How many nights will the driver be away, and what is the allowance per night? Both are known numbers at the booking stage.',
        'Which states does the route cross? That tells you how many entry levies apply, and it is a question with a factual answer rather than an estimate.',
        'And is this route tolled heavily? An expressway route and a trunk-road route of the same distance have very different toll lines, and a straight answer to this is the clearest sign that the operator actually runs the route rather than resells it.',
      ],
      link: { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    },
  ],

  tips: [
    { title: 'A late return is not a night away', text: 'The night allowance applies per night the driver sleeps away from base, not per late arrival. A same-day trip that gets in at midnight does not attract it.' },
    { title: 'Ask for the night figure at booking', text: 'It is a fixed, known amount. An operator who cannot state it upfront will improvise it at the end of the trip.' },
    { title: 'Expressway routes carry bigger tolls', text: 'The Yamuna, Agra-Lucknow and Purvanchal tolls are substantial. They buy real time savings, but the toll line on the bill will be larger than on a trunk-road route of the same length.' },
    { title: 'Count the state crossings', text: 'Each state entered adds its own levy. Ask which states the route crosses rather than accepting a single unexplained "state tax".' },
    { title: 'Keep the receipts', text: 'Tolls, parking and state entry are billed at what was actually paid. The driver carries the receipts and you are entitled to see them.' },
  ],

  faqs: [
    { question: 'What are driver night charges on an outstation cab?', answer: 'A fixed amount per night the driver is away from his base, covering his food and lodging. On a one-day return trip it does not apply. On a three-day trip it applies for the two nights he sleeps away. It goes to the driver rather than the company, which is why it is itemised rather than folded into the fare.' },
    { question: 'Do I pay night charges if the cab returns late at night?', answer: 'No. The allowance is per night away from base, not per late arrival, so a same-day return that gets in at midnight does not attract it. A trip that leaves in the afternoon and returns the next morning is one night away and does.' },
    { question: 'What does "tolls and parking at actual" mean?', answer: 'That those charges are passed on at exactly what was paid on the road, rather than estimated into the fare. The driver pays each toll plaza, usually by FASTag, and the parking at monuments, airports and hotels, and keeps the receipts. You are entitled to see them.' },
    { question: 'Why is there a state entry charge on my cab bill?', answer: 'Because a commercial passenger vehicle entering another state pays a levy to that state government, collected at or near the border. It applies per state crossed, which is why a Delhi-to-Shimla trip carries it and a Delhi-to-Agra trip of similar length does not. Ask which states your route crosses and you will know how many apply.' },
    { question: 'What is included in the per-kilometre cab rate?', answer: 'The vehicle, the fuel, the driver and GST. The published rates are sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km and a 12-seater Tempo Traveller ₹23/km, with a 300 km per day minimum on outstation trips. Fuel is never billed separately. Tolls, parking, state entry and the driver night allowance are the four items charged on top, at actual.' },
    { question: 'Can I get a single all-inclusive figure instead?', answer: 'For a defined itinerary, yes — we can quote the tolls, state entry and night allowance as a stated estimate alongside the fare so you know the whole figure before travelling. What we will not do is fold them into the per-kilometre rate, because that means either overcharging lightly tolled routes or undercharging heavily tolled ones, and both are worse than itemising.' },
  ],

  related: [
    { label: 'The published rate card', href: '/routes' },
    { label: 'FASTag and tolls on highway trips', href: '/fastag-and-tolls-on-highway-trips' },
    { label: 'What a week-long cab hire costs', href: '/week-long-cab-hire-cost' },
    { label: 'One-way drop charges explained', href: '/one-way-drop-charges-explained' },
    { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    { label: 'The ten-day Rajasthan grand circuit', href: '/rajasthan-grand-circuit-by-car' },
  ],
};
