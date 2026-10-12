// Week 53 answer-proof guide 10 — "Taxi or train, Delhi to Agra?"
//
// WHY THIS SHAPE
// A comparison question where the honest answer is "the train, unless one of
// four things is true" — and saying that is worth more than pretending
// otherwise, because the four exceptions cover most of the people who actually
// ask. The Gatimaan beats a car on the corridor and everyone knows it; what
// nobody publishes is when it does not.

export const guide = {
  slug: 'taxi-vs-train-delhi-to-agra',
  path: '/taxi-vs-train-delhi-to-agra',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Comparison guide · Delhi–Agra',
  crumbs: [{ name: 'Delhi to Agra', url: '/distance/delhi-to-agra' }],
  crumbName: 'Taxi or train, Delhi to Agra',
  titleLead: 'Taxi or train, Delhi to Agra?',
  titleAccent: 'The train, unless one of four things is true',
  title: 'Taxi or Train, Delhi to Agra? The Honest Comparison',
  metaTitle: 'Taxi or Train Delhi to Agra: When the Car Actually Wins',
  metaDescription: 'Whether to take a taxi or the train from Delhi to Agra: what each costs and takes, why the train usually wins, and the four situations where a car is clearly the better choice.',
  keywords: ['taxi or train delhi to agra', 'gatimaan express vs cab', 'delhi to agra by car or train', 'best way to reach agra from delhi', 'delhi agra day trip transport', 'taj mahal day trip train or taxi'],
  heroImage: '/images/sightseeing/Agra/Agra_Hero_section.jpg',
  heroAlt: 'Agra Fort on the Yamuna, reached from Delhi by train or by road',

  lead: 'For a single traveller doing Agra in a day, take the train. The Gatimaan Express covers the corridor in about one hour and forty minutes against three and a half hours by road, and it costs a fraction of a cab. That is the honest default and we would rather say it than argue otherwise. A car wins in four specific situations — a group of four or more, Fatehpur Sikri on the same trip, a sunrise Taj visit, or anyone for whom a station is harder than a door — and those four cover most of the people who actually ask the question.',

  keyFacts: [
    { label: 'Train, fastest', value: '~1 hr 40 min each way' },
    { label: 'Car', value: '3–3.5 hrs on the Yamuna Expressway' },
    { label: 'Default answer', value: 'Train, for one or two people' },
    { label: 'Car wins when', value: 'Group, Fatehpur Sikri, sunrise, or mobility' },
  ],
  stickyLabel: 'Delhi–Agra cab',
  stickyPrice: 'Sedan from ₹3,300',
  waText: 'Hi, I would like a Delhi to Agra cab. Please advise on the day plan.',

  intro: [
    'This page is on a cab company\'s website and recommends the train for a substantial share of readers, which is deliberate. The Delhi-Agra corridor is the one route in north India where rail genuinely beats road for a solo day trip, and an enquiry that arrives having been told otherwise starts badly.',
    'What the comparison turns on is not speed, where the train plainly wins, but what each mode lets you do with the day. The train delivers you to Agra Cantt and leaves you needing local transport at both ends. The car delivers you to the monument gate and waits.',
    'Below is each on its own terms, then the four situations where the car is clearly right.',
  ],

  table: {
    title: 'Train against car on the Delhi–Agra corridor',
    caption: 'Comparison of train and taxi for Delhi to Agra: time, cost, what is included and what each one does well',
    intro: 'Cab figures are the published rate card. Train timings are the fastest scheduled service; fares vary by class and service and are not ours to quote.',
    columns: [
      { key: 'item', label: '' },
      { key: 'train', label: 'Train' },
      { key: 'car', label: 'Car' },
    ],
    rows: [
      { item: 'Journey time, each way', train: '~1 hr 40 min on the fastest service', car: '3–3.5 hrs on the Yamuna Expressway' },
      { item: 'Door to door', train: 'Add transfers at both ends', car: 'Door to monument gate' },
      { item: 'Cost for one or two', train: 'Substantially cheaper', car: 'Sedan from ₹3,300 one way' },
      { item: 'Cost for four to six', train: 'Multiplies per head', car: 'Same fare; Ertiga ₹4,500, Innova ₹5,400' },
      { item: 'Local transport in Agra', train: 'Needed, and arranged on arrival', car: 'Included — the car stays with you' },
      { item: 'Fatehpur Sikri, 40 km west', train: 'A separate half-day problem', car: 'Fits the same day' },
      { item: 'Sunrise at the Taj', train: 'No service early enough', car: 'Straightforward with a night in Agra' },
      { item: 'Luggage', train: 'Carried by you', car: 'Stays in the car' },
      { item: 'Fixed departure', train: 'Yes — miss it and the day changes', car: 'No' },
      { item: 'Reliability', train: 'Very good; fog can delay in Dec–Jan', car: 'Good; expressway is all-weather' },
    ],
    footnote: 'Cab fares are the published rate card with its 300 km per day minimum, which is why a 230 km one-way sedan is ₹3,300. Tolls on the Yamuna Expressway, parking and state entry are at actual on top. Train fares and timings change and are not quoted here.',
  },

  sections: [
    {
      eyebrow: 'The four cases',
      heading: 'When a car is clearly the better choice',
      paras: [
        '**A group of four or more.** This is the commonest one and it is simple arithmetic. A cab fare does not change with the number of passengers; a train fare multiplies. Four people in an Ertiga at ₹4,500 one way is ₹1,125 each, and six in an Innova at ₹5,400 is ₹900 each — and that includes all the local running in Agra, which the train does not.',
        '**Fatehpur Sikri on the same trip.** It is 40 km west of Agra and there is no sensible rail answer. By car it is an easy addition to the day — out after breakfast, back by lunch. By train it is a separate problem solved with local transport you have to arrange on arrival, and it is what most Agra day trips end up dropping.',
        '**A sunrise Taj visit.** This is the one that matters most and the one least often mentioned. For about twenty minutes after the gates open the marble moves through pink and cream, and the crowd is a small fraction of what it is by nine. No train gets you there for that. It requires a night in Agra, which means a car, or a car from Delhi starting at three in the morning.',
        '**Anyone for whom a station is harder than a door.** Elderly parents, a family with a small child and a pushchair, somebody with a mobility constraint, or simply a lot of luggage. A station involves platforms, steps, crowds and a transfer at each end; a car involves a door. That is not a small difference and it decides a great many of these trips.',
      ],
      link: { label: 'Delhi to Agra distance, fare and the expressway', href: '/distance/delhi-to-agra' },
    },
    {
      eyebrow: 'The train case',
      heading: 'Why the train is the default for one or two people',
      paras: [
        'Speed, cost and the fact that the Yamuna Expressway cannot compete with a dedicated high-speed service on a 230 km corridor. An hour and forty minutes against three and a half is not a marginal difference on a day trip — it is two hours more in Agra.',
        'For a solo traveller or a couple the cost difference is also substantial, because a cab fare is a vehicle fare. Two people splitting ₹3,300 each way is a different proposition from two train tickets.',
        'What the train asks in return is that you solve Agra locally: transport from Agra Cantt to the monuments, between the Fort and the Taj, and back for your return service. That is perfectly doable — it is what most visitors do — and it is the part that makes a tight schedule tight. If your day is the Taj and the Fort and nothing else, the train is the better plan and we would tell you so on the phone.',
      ],
      link: { label: 'Agra sightseeing', href: '/sightseeing/agra' },
    },
    {
      eyebrow: 'The hybrid',
      heading: 'The arrangement a lot of people should actually use',
      paras: [
        'Train one way, car the other. It is not a compromise so much as the best of both on a specific shape of trip: take the morning train to Agra, have a car meet you at Agra Cantt for the day, and drive back to Delhi in the evening at your own time rather than against a fixed departure.',
        'That gets the fast outbound leg, the car for Fatehpur Sikri and the local running, no reliance on a return service, and no three-and-a-half-hour drive at the start of the day. For a couple it is often cheaper than a return cab and strictly better than a return train.',
        'The other version is the reverse for a sunrise visit: drive down in the afternoon, stay the night, take the Taj at opening, and train back. Tell us which shape you want and we will quote the leg you need rather than a round trip you do not.',
      ],
      link: { label: 'One-way drop charges explained', href: '/one-way-drop-charges-explained' },
    },
  ],

  tips: [
    { title: 'Four or more people: take the car', text: 'A cab fare does not multiply per head. Four in an Ertiga is ₹1,125 each one way including all the local running in Agra.' },
    { title: 'Fatehpur Sikri is the tiebreaker', text: 'Forty kilometres west with no rail answer. If it is on your list, the car decides itself.' },
    { title: 'The sunrise visit needs a night', text: 'No train arrives early enough. A night in Agra and the gates at opening is the best version of this trip and it requires a car.' },
    { title: 'Consider train out, car back', text: 'The fast outbound leg plus a car for the day and a departure at your own time. Often cheaper than a return cab for two.' },
    { title: 'The Taj is closed on Fridays', text: 'True whichever mode you take, and it catches out more day trippers than any timing problem.' },
  ],

  faqs: [
    { question: 'Is it better to take a taxi or train from Delhi to Agra?', answer: 'For one or two people doing the Taj and the Fort in a day, the train — the fastest service is about an hour and forty minutes against three and a half by road, and it is substantially cheaper per head. A car is clearly better for a group of four or more, if Fatehpur Sikri is on the list, for a sunrise Taj visit, or for anyone who finds a station harder than a door.' },
    { question: 'How long does Delhi to Agra take by car?', answer: 'Three to three and a half hours for 230 km on the Yamuna Expressway — six lanes, good surface, and only the Jewar and Mathura plazas, both FASTag-enabled. Getting clear of Delhi at the start is usually the slowest part. The fastest train covers the same corridor in about an hour and forty minutes.' },
    { question: 'How much does a Delhi to Agra taxi cost?', answer: 'A sedan is ₹3,300 one way on the published rate card, an Ertiga ₹4,500 and an Innova Crysta ₹5,400 — the 300 km per day minimum applies, which is why a 230 km trip prices at 300 km. Tolls on the expressway, parking and state entry are at actual. For four people the Ertiga works out at about ₹1,125 each, including the local running in Agra.' },
    { question: 'Can I do Fatehpur Sikri and the Taj in one day from Delhi?', answer: 'By car, comfortably — Fatehpur Sikri is 40 km west of Agra and fits the same day, out after breakfast and back by lunch. By train it is a separate problem needing local transport arranged on arrival, and it is the thing most rail day trips end up dropping. If Fatehpur Sikri matters to you, that alone settles the question.' },
    { question: 'Can I see the Taj Mahal at sunrise on a day trip from Delhi?', answer: 'Not realistically. No train arrives early enough and a car from Delhi would need to leave around three in the morning. The sunrise visit — twenty minutes of the marble changing colour with a fraction of the usual crowd — needs a night in Agra, which is the single best reason to take a car and stay rather than day-trip.' },
    { question: 'Is the train affected by fog in winter?', answer: 'It can be. December and January fog on the north Indian plains delays rail and road alike, though the expressway is generally less affected than the rail corridor. If you have a fixed appointment at the far end in those months, the car gives you more control over the start time even though it is slower.' },
  ],

  related: [
    { label: 'Delhi to Agra distance and fare', href: '/distance/delhi-to-agra' },
    { label: 'Agra sightseeing', href: '/sightseeing/agra' },
    { label: 'One-way drop charges explained', href: '/one-way-drop-charges-explained' },
    { label: 'Weekend getaways from Agra', href: '/weekend-getaways-from-agra-by-car' },
    { label: 'The Golden Triangle with Ranthambore', href: '/golden-triangle-with-ranthambore-by-car' },
    { label: 'Fog season on north India highways', href: '/fog-season-on-north-india-highways' },
  ],
};
