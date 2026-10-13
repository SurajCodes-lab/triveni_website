// Week 53 answer-proof guide 28 — "When do the hill stations get snow?"
//
// WHY THIS SHAPE
// A seasonal-access question asked on an enormous number of winter enquiries,
// almost always with an expectation that cannot be met — somebody wants snow at
// Shimla in late November, or at Rohtang in June. The useful content is which
// altitude produces snow in which month, because that converts a hope into a
// destination choice.

export const guide = {
  slug: 'when-do-hill-stations-get-snow',
  path: '/when-do-hill-stations-get-snow',
  mood: 'hills',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Season guide · Snow',
  crumbs: [{ name: 'Shimla sightseeing', url: '/sightseeing/shimla' }],
  crumbName: 'When the hill stations get snow',
  titleLead: 'When do the hill stations get snow?',
  titleAccent: 'By altitude, not by name',
  title: 'When Do the Hill Stations Get Snow? By Altitude, Not by Name',
  metaTitle: 'When Do Hill Stations Get Snow? Altitude by Month',
  metaDescription: 'Which north India hill stations get snow and when: the altitude bands that matter, why Shimla and Mussoorie are unreliable, where snow is near-certain in January, and how to plan for it.',
  keywords: ['when does it snow in shimla', 'snowfall in manali month', 'guaranteed snow india december', 'where to see snow near delhi', 'mussoorie snowfall time', 'auli snow season', 'solang snow months'],
  heroImage: '/images/sightseeing/Manali/Gulaba_Snow point with adventure activities.jpg',
  heroAlt: 'The Gulaba snow point above Manali in winter',

  lead: 'Snow is a function of altitude rather than of a town\'s reputation, and that is the single most useful thing to know when planning a winter trip. Shimla at 2,200 metres and Mussoorie at 2,000 get snow in most Januarys and not reliably — people book a week there hoping for it and leave without seeing any. Solang at 2,560, Gulaba at 3,000, Auli at 2,800 and Kufri at 2,600 are far more dependable, and all of them are a short drive from a town where you can actually stay. If snow is the point of the trip, choose the altitude and let the hotel follow.',

  keyFacts: [
    { label: 'Reliable snow', value: 'Above ~2,500 m, Jan–Feb' },
    { label: 'Unreliable', value: 'Shimla, Mussoorie, Nainital towns' },
    { label: 'Best bet near Delhi', value: 'Solang and Gulaba above Manali' },
    { label: 'Peak month', value: 'January, into early February' },
  ],
  stickyLabel: 'Winter hill cab',
  stickyPrice: 'Ertiga ₹15/km · Innova ₹18/km',
  waText: 'Hi, we want to see snow. Please advise on where and when for our dates.',

  intro: [
    'A very large share of winter enquiries are snow enquiries, and most of them name a town rather than a condition: "we want to go to Shimla for snow in December". The problem is that Shimla town sits at 2,200 metres, which in December is marginal — it may snow and it may be a cold dry week with brown hillsides.',
    'The towns are where the hotels are; the snow is a few hundred metres higher up. Once that is clear the planning becomes simple, because every one of these towns has a reliable snow point within an hour\'s drive and the car is what connects them.',
    'Below is the altitude table, the month-by-month position, and the honest list of what is near-certain against what is a hope.',
  ],

  table: {
    title: 'Snow by place and altitude',
    caption: 'Snow reliability at north India hill destinations by altitude, with the months and the nearest base town',
    intro: 'The altitude column is the one that predicts snow. The base column is where you would actually stay, and in several cases it is lower and snowless while the destination above it is not.',
    columns: [
      { key: 'place', label: 'Place' },
      { key: 'alt', label: 'Altitude', align: 'right' },
      { key: 'months', label: 'Snow months' },
      { key: 'rel', label: 'Reliability' },
      { key: 'base', label: 'Stay at' },
    ],
    rows: [
      { place: 'Rohtang pass', alt: '3,978 m', months: 'Closed in winter', rel: 'n/a — shut', base: '—' },
      { place: 'Gulaba, above Manali', alt: '~3,000 m', months: 'Dec–Mar', rel: '**Near-certain** Jan–Feb', base: 'Manali, 24 km' },
      { place: 'Auli', alt: '2,800 m', months: 'Dec–Mar', rel: '**Near-certain** Jan–Feb', base: 'Joshimath, 15 km' },
      { place: 'Solang valley', alt: '2,560 m', months: 'Dec–Mar', rel: '**Very likely** Jan–Feb', base: 'Manali, 13 km' },
      { place: 'Kufri, above Shimla', alt: '2,600 m', months: 'Dec–Feb', rel: 'Likely Jan', base: 'Shimla, 16 km' },
      { place: 'Dhanaulti, above Mussoorie', alt: '2,286 m', months: 'Jan–Feb', rel: 'Possible', base: 'Mussoorie, 33 km' },
      { place: 'Shimla town', alt: '2,200 m', months: 'Jan–Feb', rel: '**Unreliable**', base: 'Shimla' },
      { place: 'Narkanda', alt: '2,700 m', months: 'Dec–Mar', rel: 'Very likely Jan', base: 'Narkanda or Shimla, 65 km' },
      { place: 'Mussoorie town', alt: '2,000 m', months: 'Jan', rel: '**Unreliable**', base: 'Mussoorie' },
      { place: 'Khajjiar', alt: '1,920 m', months: 'Jan', rel: 'Occasional', base: 'Dalhousie, 22 km' },
      { place: 'Dalhousie', alt: '1,970 m', months: 'Jan', rel: 'Occasional', base: 'Dalhousie' },
      { place: 'Nainital town', alt: '2,084 m', months: 'Jan', rel: '**Rare**', base: 'Nainital' },
      { place: 'McLeod Ganj', alt: '2,082 m', months: 'Jan', rel: 'Occasional', base: 'Dharamshala' },
      { place: 'Manali town', alt: '2,050 m', months: 'Jan', rel: 'Occasional', base: 'Manali' },
    ],
    footnote: 'Snowfall is weather rather than climate and no month guarantees it anywhere. "Near-certain" means snow lying on the ground is very likely to be found at that altitude in January and February even if it is not falling. Rohtang is closed in winter entirely — the Atal tunnel is how Lahaul is reached, and it needs no permit.',
  },

  sections: [
    {
      eyebrow: 'The altitude rule',
      heading: 'Why 2,500 metres is the line that matters',
      paras: [
        'Below about 2,000 metres in the western Himalaya, snow in winter is an event rather than a season — it happens some years and not others, and when it does it melts in a day or two. Nainital at 2,084, Manali town at 2,050 and Mussoorie at 2,000 all fall here, which is why people stay a week in each and see none.',
        'Between 2,000 and 2,500 metres it is likely at some point in January and February but not dependable for a specific week. Shimla at 2,200 and Dhanaulti at 2,286 are in this band.',
        'Above about 2,500 metres snow is lying on the ground through January and February in most years even when it is not falling, which is the condition most people actually want. Solang at 2,560, Kufri at 2,600, Narkanda at 2,700, Auli at 2,800 and Gulaba at around 3,000 are all here.',
        'So the planning rule is: pick a base town for the hotels and the food, and pick a point above 2,500 metres within an hour of it for the snow. The car is what makes that work, and it is the reason a snow trip by road beats a snow trip by train.',
      ],
      link: { label: 'When Rohtang and the Atal tunnel are open', href: '/when-does-rohtang-and-atal-tunnel-open' },
    },
    {
      eyebrow: 'The three best bets',
      heading: 'Where we would actually send somebody who wants snow',
      paras: [
        '**Manali, for Solang and Gulaba.** Stay in Manali at 2,050 — hotels, food, a town that works in winter — and drive 13 km to Solang or 24 to Gulaba. Both are reliably snowbound in January and February, neither needs a permit, and both are open when Rohtang is shut. This is the answer for most people and it is 540 km from Delhi.',
        '**Auli, for the real thing.** A ski slope at 2,800 metres above Joshimath with Nanda Devi in view, reached by the longest cable car in Asia. It is the most dramatic snow destination reachable by road from Delhi and it is 500 km with a long final climb. Three days minimum, and the last stretch above Joshimath can require chains.',
        '**Narkanda, for the quiet version.** Sixty-five kilometres beyond Shimla at 2,700 metres, apple country, with Hatu Peak at 3,400 above it. Reliably snowy in January, almost nobody there, and close enough to Shimla to combine with it.',
        'What we would not do is book a week in Mussoorie or Nainital in January and hope. Both are good winter destinations for other reasons — the quiet, the light, the empty Mall — but neither is a snow destination.',
      ],
      link: { label: 'Weekend getaways from Manali', href: '/weekend-getaways-from-manali-by-car' },
    },
    {
      eyebrow: 'The driving',
      heading: 'What snow does to the roads and the vehicle choice',
      paras: [
        'It moves every vehicle recommendation up a step. The Solang road, the Atal tunnel approach, the Kufri climb, the Jot pass and the final ascent to Auli can all require chains after heavy snowfall, and a sedan cannot usefully carry them. An Ertiga or Innova is the right answer for any winter hill itinerary and this is the season where it is capability rather than comfort.',
        'It also introduces uncertainty that is decided on the morning. After a heavy fall, Solang may be closed to vehicles at a point below the usual one, the Atal tunnel approach may be shut for hours, and the Auli climb may need the ropeway instead of the road. Our drivers check before setting out; there is no useful way to know a week ahead.',
        'The practical consequence is slack. A snow trip wants a spare day more than most, because the thing you came for is also the thing that closes the road to it. A two-day dash to Solang can be unlucky; a four-day Manali trip with two attempts at it very rarely is.',
      ],
      link: { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    },
    {
      eyebrow: 'Timing',
      heading: 'The month, and the week to avoid',
      paras: [
        '**January is the peak**, into the first half of February. December is early — snow at 2,500 metres is likely by the end of the month but the first half is often dry. March still holds snow above 2,800 metres while the lower stations have cleared.',
        '**The week to avoid is Christmas to New Year.** It is the single most committed week of the year for hill accommodation and vehicles, rates are at their highest, the Shimla Mall and Solang road are at capacity, and the snow position is no better than in January. Travelling three weeks later gets you more snow, fewer people and lower rates.',
        '**And late February into March is the underrated window.** Auli, Gulaba and Narkanda still have snow, the roads are more reliably open than in January, the days are longer, and the crowds have gone.',
      ],
      link: { label: 'Fog season on the north India highways', href: '/fog-season-on-north-india-highways' },
    },
  ],

  tips: [
    { title: 'Pick the altitude, then the hotel', text: 'Stay at 2,000 metres where the hotels are and drive to 2,500+ for the snow. Every base town has a reliable snow point within an hour.' },
    { title: 'Solang and Gulaba above Manali are the best bet', text: 'Reliably snowbound January and February, no permit, and open when Rohtang is shut. This is the answer for most snow enquiries.' },
    { title: 'Do not book a week in Nainital or Mussoorie for snow', text: 'At 2,084 and 2,000 metres snow is an event, not a season. Both are good winter destinations for other reasons.' },
    { title: 'Travel in January, not Christmas week', text: 'Three weeks later gets more snow, fewer people and materially lower rates. The holiday week has the worst of all three.' },
    { title: 'Ertiga or Innova, and a spare day', text: 'Chains are not a sedan option, and the thing you came for is also what closes the road. Two attempts beats one.' },
  ],

  faqs: [
    { question: 'When does it snow in Shimla?', answer: 'In most Januarys and some Februarys, but Shimla town sits at 2,200 metres and it is genuinely unreliable — people book a week hoping for snow and leave without seeing any. Kufri at 2,600 metres, 16 km above the town, is considerably more likely, and Narkanda at 2,700 metres, 65 km on, is very likely in January. Stay in Shimla and drive up.' },
    { question: 'Where can I be reasonably sure of seeing snow near Delhi?', answer: 'Solang at 2,560 metres and Gulaba at around 3,000, both a short drive above Manali, which is 540 km from Delhi. Both are reliably snowbound in January and February, neither needs a permit, and both are open when Rohtang is closed. Auli at 2,800 metres above Joshimath is the more dramatic option at a similar distance.' },
    { question: 'Which month is best for snow in north India?', answer: 'January, into the first half of February. December is early — snow above 2,500 metres is likely by the end of the month but the first half is often dry. Late February into March is underrated: Auli, Gulaba and Narkanda still hold snow, the roads are more reliably open than in January, and the crowds have gone.' },
    { question: 'Does Nainital or Mussoorie get snow?', answer: 'Rarely at Nainital, which is at 2,084 metres, and unreliably at Mussoorie at 2,000. In both, snow in winter is an event rather than a season and it melts within a day or two when it happens. Dhanaulti at 2,286 metres, 33 km above Mussoorie, is the better bet on that side, though still not dependable.' },
    { question: 'Can I see snow at Rohtang pass in winter?', answer: 'No — Rohtang is closed in winter entirely, usually from October or November until late May. What has replaced it is the Atal tunnel, which runs beneath the pass, needs no permit and reaches Lahaul for much of the year. For snow specifically, Solang and Gulaba on the Manali side are open when the pass is shut and are where everyone actually goes.' },
    { question: 'What vehicle do I need for a snow trip?', answer: 'An Ertiga or Innova, not a sedan. The Solang road, the Atal tunnel approach, the Kufri climb and the Auli ascent can all require chains after heavy snowfall, and a sedan cannot usefully carry them. In winter the bigger vehicle is capability rather than comfort. Add a spare day too — the thing you came to see is also what closes the road to it.' },
  ],

  related: [
    { label: 'When Rohtang and the Atal tunnel are open', href: '/when-does-rohtang-and-atal-tunnel-open' },
    { label: 'Rohtang pass permit guide', href: '/rohtang-pass-permit-guide' },
    { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    { label: 'Weekend getaways from Manali', href: '/weekend-getaways-from-manali-by-car' },
    { label: 'The nine-day Himachal grand circuit', href: '/himachal-grand-circuit-by-car' },
    { label: 'Fog season on the north India highways', href: '/fog-season-on-north-india-highways' },
  ],
};
