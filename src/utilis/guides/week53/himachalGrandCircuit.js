// Week 53 circuit 2 — "The Himachal grand circuit by car: nine days, four hill towns"
//
// WHY THIS PAGE EXISTS
// The site has strong individual pages for Shimla, Manali, Dharamshala and
// Dalhousie, and corridor pages between most pairs, but nothing that answers
// the trip people actually plan: all four in one journey. The Week 48 guide
// covers Dalhousie and Dharamshala as a five-day pair; this is the full loop.
//
// It matters more in Himachal than elsewhere because the ORDER is not obvious
// and getting it wrong costs a whole day. The four towns do not sit on a line —
// Shimla and Manali are on one axis, Dharamshala and Dalhousie on another, and
// the road between the two axes is the Mandi-Jogindernagar road rather than
// anything that looks direct on a map.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'himachal-grand-circuit-by-car',
  path: '/himachal-grand-circuit-by-car',
  mood: 'hills',
  cluster: 'road',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Circuit guide · Himachal',
  crumbs: [{ name: 'Himachal tours', url: '/sightseeing/shimla' }],
  crumbName: 'Himachal grand circuit by car',
  titleLead: 'The Himachal grand circuit by car:',
  titleAccent: 'nine days, four hill towns',
  title: 'The Himachal Grand Circuit by Car: Nine Days, Four Hill Towns',
  metaTitle: 'Himachal Circuit by Car: 9 Days, 4 Towns, ₹29,700',
  metaDescription: 'The nine-day Himachal circuit by car from Delhi: Shimla, Manali, Dharamshala and Dalhousie in one loop. Day-by-day distances, real hill driving hours, night halts and the fare for the whole trip.',
  keywords: ['himachal circuit by car', 'himachal road trip itinerary', '9 day himachal tour by car', 'shimla manali dharamshala dalhousie itinerary', 'himachal tour from delhi by car', 'himachal grand tour route', 'shimla to manali to dharamshala road'],
  heroImage: `${IMG}/Khajjiar/Mini_Switzerland_View.jpg`,
  heroAlt: 'The Khajjiar meadow near Dalhousie, the last of the four hill towns on the Himachal circuit',

  lead: 'Four hill towns, nine days, about 1,900 km. The loop runs clockwise from Delhi — up to Shimla, across to Manali, over the Mandi and Jogindernagar road to Dharamshala, north to Dalhousie and Khajjiar, then home down the Pathankot side. Clockwise is the right direction and not an arbitrary one: it climbs gradually rather than throwing you straight at Manali, and it finishes on the fast Pathankot-to-Delhi highway rather than on a hill road. A sedan bills ₹29,700 for the nine days on the 300 km per day minimum; an Innova Crysta ₹48,600.',

  keyFacts: [
    { label: 'The loop', value: '9 days · ~1,900 km' },
    { label: 'Driving days', value: '6 of 9' },
    { label: 'Longest single leg', value: 'Shimla → Manali, 250 km' },
    { label: 'Sedan, 9 days', value: '₹29,700' },
  ],
  stickyLabel: 'Himachal circuit cab',
  stickyPrice: 'Sedan ₹29,700 · 9 days',
  waText: 'Hi, I want the nine-day Himachal grand circuit by car from Delhi. Dates and headcount to follow.',

  intro: [
    'The thing to understand about a Himachal circuit is that kilometres tell you almost nothing. Shimla to Manali is 250 km and takes seven to eight hours. Dharamshala to Dalhousie is 120 km and takes four. A plains driver looking at a map will plan this trip badly, and the commonest result is three towns seen from a car window.',
    'The nine-day version below has six driving days and three local ones, which is the minimum that gives each town a proper day. Distances and times are from the site’s corridor data and from the drivers who run this loop through the season.',
    'Fares follow the published rate card — sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km — on a 300 km per day minimum, with tolls, parking, Himachal entry and the driver night allowance at actual.',
  ],

  timelineTitle: 'The circuit, day by day and kilometre by kilometre',
  timelineEyebrow: 'The loop',
  timelineIntro: 'Kilometre marks are cumulative from Delhi. Clockwise: a gradual climb to Shimla, the high middle, then down the Pathankot side.',
  timeline: [
    { km: 0, name: 'Day 1: Delhi to Shimla', time: '8-9 hrs · 350 km', text: 'NH-44 to Ambala, then NH-5 up through Kalka, Solan and Kandaghat. The plains section is fast; the last 90 km is hill road and takes three hours. Leave by five. The car cannot reach the Mall — it stops at the Cart Road or Victory Tunnel and the rest is walked or taken by the lift.', stop: 'Night: Shimla', image: `${IMG}/Shimla/Mall_Road.jpg`, alt: 'The Mall at Shimla, closed to vehicles', tag: 'NH-5' },
    { km: 350, name: 'Day 2: Shimla', time: 'Local day · 50 km', text: 'The Ridge and Christ Church in the morning, Jakhoo temple above the town, the Viceregal Lodge, and Kufri or Naldehra in the afternoon. A walking day more than a driving one, which is what Shimla is for.', stop: 'Night: Shimla', image: `${IMG}/Shimla/Mashobra Apple Orchards.jpg`, alt: 'Apple orchards at Mashobra above Shimla', tag: 'Local' },
    { km: 400, name: 'Day 3: Shimla to Manali', time: '7-8 hrs · 250 km', text: 'Down to Bilaspur and up the Kullu valley on NH-3 through Mandi and Bhuntar. The Mandi gorge section is slow and the valley road after Bhuntar is busy in season. Arrive late afternoon; Old Manali and the Hadimba temple are an easy first evening.', stop: 'Night: Manali', image: `${IMG}/Manali/Hidimba Temple.jpg`, alt: 'The Hadimba temple in deodar forest at Manali', tag: 'NH-3' },
    { km: 650, name: 'Day 4: Manali', time: 'Local day · 80 km', text: 'Solang for the snow and the paragliding, Vashisht’s hot springs, and the Atal tunnel to the Lahaul side if it is open — the tunnel has replaced Rohtang for most of the year and turns what was a full day into a morning. Rohtang itself needs a permit and carries a daily vehicle cap.', stop: 'Night: Manali', image: `${IMG}/Manali/Atal tunnel ,.jpg`, alt: 'The Atal tunnel above Manali', tag: 'Local' },
    { km: 730, name: 'Day 5: Manali to Dharamshala', time: '7 hrs · 230 km', text: 'Back down the Kullu valley to Mandi, then west on the Jogindernagar road into the Kangra valley. This is the leg that joins the circuit’s two axes and it is slower than it looks. Arrive in the evening; keep McLeod Ganj for a full day.', stop: 'Night: Dharamshala or McLeod Ganj', image: `${IMG}/Dharamshala/Dharamshala_hero_section.jpg`, alt: 'The Dhauladhar above Dharamshala', tag: 'Jogindernagar road' },
    { km: 960, name: 'Day 6: Dharamshala and McLeod Ganj', time: 'Local day · 40 km', text: 'The Dalai Lama temple and the Namgyal monastery in the morning, the Bhagsu waterfall walk after lunch, Naddi for sunset. The fit take Triund instead, nine kilometres up from Dharamkot and back. The Kangra fort and the Masroor rock temples on the valley floor are the alternative.', stop: 'Night: McLeod Ganj', image: `${IMG}/Dharamshala/Dalai_Lama_Temple.jpg`, alt: 'Tsuglagkhang, the Dalai Lama temple at McLeod Ganj', tag: 'Local' },
    { km: 1000, name: 'Day 7: Dharamshala to Dalhousie', time: '4-5 hrs · 120 km', text: 'North through Shahpur and over the Jot pass via Chuwari to Chamba, then up to Dalhousie. Slow, high and the best drive of the loop. In heavy rain or snow the driver takes the Pathankot road instead, 170 km and four and a half hours.', stop: 'Night: Dalhousie', image: `${IMG}/Dalhousie/Dainkund_Peak.jpg`, alt: 'Dainkund Peak above Dalhousie', tag: 'Chamba road' },
    { km: 1120, name: 'Day 8: Dalhousie, Khajjiar and Kalatop', time: 'Local day · 60 km', text: 'Dainkund Peak early if the sky is clear, then 22 km through the Kalatop deodar forest to the Khajjiar meadow for the afternoon, and back to Dalhousie for the evening on Gandhi Chowk. St John’s church and Panchpula fill the gaps.', stop: 'Night: Dalhousie', image: `${IMG}/Dalhousie/Khajjiar_Meadow.jpg`, alt: 'The Khajjiar meadow ringed by deodar', tag: 'Local' },
    { km: 1180, name: 'Day 9: Dalhousie to Delhi', time: '10-11 hrs · 560 km', text: 'Down through Banikhet and Dunera to Pathankot, then NH-44 through Jalandhar, Ludhiana and Ambala. A long final day but fast road after the first 80 km. Leave by six and you are in Delhi for a late dinner.', stop: 'Home', image: `${IMG}/Dalhousie/St_Johns_Church.jpg`, alt: 'St John’s church on the Dalhousie ridge', tag: 'NH-44' },
    { km: 1740, name: 'Delhi', time: 'Evening of day 9', text: 'About 1,740 km on the loop with the local days counted, 1,900 with the detours most people add. Nine days at the rate card, tolls, Himachal entry and the night allowance at actual.', tag: 'End' },
  ],

  table: {
    title: 'The nine-day Himachal circuit at a glance',
    caption: 'Day-by-day distance, real hill driving time, night halt and highlights of the Himachal grand circuit by car from Delhi',
    intro: 'Hours are real hill-driving hours rather than map estimates. The three local days bill the 300 km per day minimum, which is why the nine-day fare is flat rather than the sum of the legs.',
    columns: [
      { key: 'day', label: 'Day' },
      { key: 'leg', label: 'From → to' },
      { key: 'km', label: 'Km', align: 'right' },
      { key: 'hrs', label: 'Hours' },
      { key: 'night', label: 'Night' },
      { key: 'see', label: 'What you see' },
    ],
    rows: [
      { day: '1', leg: 'Delhi → Shimla', km: '350', hrs: '8–9', night: 'Shimla', see: 'NH-5, the Kalka climb, the Ridge' },
      { day: '2', leg: 'Shimla local', km: '50', hrs: '2 driving', night: 'Shimla', see: 'Jakhoo, Viceregal Lodge, Kufri' },
      { day: '3', leg: 'Shimla → Manali', km: '250', hrs: '7–8', night: 'Manali', see: 'Mandi gorge, the Kullu valley' },
      { day: '4', leg: 'Manali local', km: '80', hrs: '3 driving', night: 'Manali', see: 'Solang, Vashisht, the Atal tunnel' },
      { day: '5', leg: 'Manali → Dharamshala', km: '230', hrs: '7', night: 'Dharamshala', see: 'Jogindernagar, the Kangra valley' },
      { day: '6', leg: 'McLeod Ganj local', km: '40', hrs: '1.5 driving', night: 'McLeod Ganj', see: 'Dalai Lama temple, Bhagsu, Naddi or Triund' },
      { day: '7', leg: 'Dharamshala → Dalhousie', km: '120', hrs: '4–5', night: 'Dalhousie', see: 'The Jot pass, Chamba' },
      { day: '8', leg: 'Dalhousie local', km: '60', hrs: '2 driving', night: 'Dalhousie', see: 'Dainkund, Kalatop, Khajjiar' },
      { day: '9', leg: 'Dalhousie → Delhi', km: '560', hrs: '10–11', night: 'Home', see: 'Pathankot, NH-44' },
      { day: 'Total', leg: 'The loop', km: '~1,740', hrs: '~45 driving', night: '8 nights', see: 'Four hill towns, one car' },
    ],
    footnote: 'Fares for the nine days: Sedan ₹29,700, Ertiga ₹40,500, Innova Crysta ₹48,600, 12-seater Tempo Traveller ₹62,100. Tolls, parking, Himachal entry and the driver night allowance at actual. The Jot pass on day seven closes in snow; the Pathankot alternative is 170 km.',
  },

  sections: [
    {
      eyebrow: 'The order',
      heading: 'Why clockwise, and why Shimla before Manali',
      paras: [
        'Three reasons, and the first is altitude. Going clockwise climbs gradually — Shimla at 2,200 metres on day one, Manali at 2,050 with Solang and the tunnel above it on day four — rather than putting the highest ground at the start. Anticlockwise reaches Manali on day two off the back of a long plains drive, which is the version people most often regret.',
        'The second is the finish. Clockwise ends at Dalhousie, which comes down to Pathankot and then has 480 km of four-lane NH-44 to Delhi. Anticlockwise ends at Shimla, which means the last day is a hill descent followed by the Kalka road, and the final day of a nine-day trip is the worst time for that.',
        'The third is the Jot pass. The Dharamshala-to-Dalhousie crossing over Chamba is the single best drive on the circuit and it is better taken on day seven, when you have a hill driver who has had six days of practice, than on day two.',
      ],
      link: { label: 'Dalhousie and Dharamshala as a five-day pair', href: '/dalhousie-dharamshala-circuit-by-car' },
      image: { src: `${IMG}/Dalhousie/Kalatop_Wildlife.jpg`, alt: 'The Kalatop deodar forest between Dalhousie and Khajjiar', tag: 'Kalatop', caption: 'The Kalatop forest road on day eight — 22 km and the best short drive of the loop.' },
    },
    {
      eyebrow: 'The passes',
      heading: 'Rohtang, the Atal tunnel and what is actually open',
      paras: [
        'The Atal tunnel has changed this circuit substantially. It runs under the Rohtang pass to the Lahaul side and stays open far longer in the year than the pass itself, which turns a day-long Rohtang expedition into a morning drive to Sissu or Keylong and back. For most visitors on a nine-day circuit, the tunnel is the right plan and Rohtang is not needed at all.',
        'Rohtang itself is a different proposition: it requires a permit, carries a daily cap on the number of vehicles allowed up, and is shut by snow for a large part of the year. If crossing the pass rather than reaching Lahaul is the point, say so when booking and we will arrange the permit — but it is worth being clear that the tunnel gets you to better scenery with less uncertainty.',
        'The Jot pass on day seven is the other one to know about. It closes in deep winter and is slow in the monsoon, and the alternative is the Pathankot road: 170 km instead of 120, four and a half hours instead of four, and considerably less interesting. The driver makes that call on the morning.',
      ],
      link: { label: 'Weekend getaways from Manali, including the Lahaul run', href: '/weekend-getaways-from-manali-by-car' },
    },
    {
      eyebrow: 'The variations',
      heading: 'What to cut at six days, and what to add at twelve',
      paras: [
        'At six days, cut Dalhousie. It is the furthest town from Delhi and reaching it costs the Jot crossing plus a 560 km run home, which is two of your six days. Shimla, Manali and Dharamshala in six days is a comfortable trip; adding Dalhousie to it is not.',
        'At twelve days, add Kasol and the Parvati valley after Manali — three hours from Manali, a completely different valley, and the Kheerganga trail if anyone in the party walks. Then Narkanda and Sarahan on the Hindustan-Tibet road beyond Shimla, which is where Himachal stops being hill station and starts being Kinnaur.',
        'What we would not add at any length is Spiti. Kaza is eight to nine hours from Manali over a 4,590-metre pass, the road exists only from roughly June to October, and the altitude needs a gradual ascent. It is a trip of its own, not an extension to this one.',
      ],
      link: { label: 'Weekend getaways from Shimla, including Narkanda and Sarahan', href: '/weekend-getaways-from-shimla-by-car' },
    },
    {
      eyebrow: 'The car',
      heading: 'Which vehicle for a Himachal circuit, and why a sedan is the wrong answer here',
      paras: [
        'Unlike Rajasthan, where a sedan is genuinely fine, Himachal argues for ground clearance. The Jot pass, the Solang road, the Parvati valley if you add it, and the approach roads to a good many hill properties are gradient-and-surface problems rather than distance problems, and an Ertiga or Innova Crysta handles them in a way a low sedan does not.',
        'For two people we would still quote the sedan at ₹29,700 and it will complete the circuit — our drivers do it regularly. But for four people with nine days of luggage over 1,900 km of hill road, the Innova at ₹48,600 is the vehicle we would actually recommend, and most of our nine-day Himachal bookings take it.',
        'For six or more, the 12-seater Tempo Traveller at ₹62,100. It is the only option that carries the group with luggage, and the Jot pass and the Kullu valley road both take it comfortably.',
      ],
      link: { label: 'The published rate card', href: '/routes' },
    },
  ],

  tips: [
    { title: 'Hours, not kilometres', text: 'Shimla to Manali is 250 km and seven to eight hours. Plan every day of this circuit on the hours column, not the distance column, and the trip works.' },
    { title: 'The Mall roads are walked', text: 'Shimla’s Ridge and Mall and much of McLeod Ganj are closed to vehicles. The car drops at the edge, which means the first and last twenty minutes of several days are on foot. Factor it into early starts.' },
    { title: 'Check the Atal tunnel on the morning', text: 'It stays open far longer than Rohtang but conditions still close the approach. The driver checks before setting out on day four; there is no point committing the day in advance.' },
    { title: 'Monsoon means slack', text: 'July to September brings landslide closures on the Kalka, Mandi and Jot sections. The circuit runs through it but build a spare half-day into any fixed onward booking.' },
    { title: 'Carry warm clothes whatever the month', text: 'Solang, Dainkund and the Jot pass are cold at any time of year, and the temperature difference between Delhi on day one and the Jot on day seven is not small.' },
  ],

  faqs: [
    { question: 'How many days do you need for a Himachal circuit covering Shimla, Manali, Dharamshala and Dalhousie?', answer: 'Nine, with six driving days and three local ones. That is the minimum that gives each town a proper day rather than an afternoon. Six days works well if you drop Dalhousie, which costs the Jot crossing plus a 560 km run home. Twelve lets you add Kasol and the Parvati valley, or Narkanda and Sarahan toward Kinnaur.' },
    { question: 'How much does a nine-day Himachal trip by car cost?', answer: 'Sedan ₹29,700, Ertiga ₹40,500, Innova Crysta ₹48,600 and a 12-seater Tempo Traveller ₹62,100 for the nine days, on the published rate card with its 300 km per day minimum. That covers the vehicle, the driver and fuel. Tolls, parking, Himachal state entry and the driver night allowance are at actual; hotels are separate.' },
    { question: 'Should I do Shimla or Manali first?', answer: 'Shimla, going clockwise. It climbs gradually rather than putting the highest ground on day two, and it means the circuit finishes at Dalhousie with 480 km of fast NH-44 home instead of ending on a hill descent. Anticlockwise is the version people most often wish they had planned differently.' },
    { question: 'Do I need a Rohtang permit for the Himachal circuit?', answer: 'Only if crossing the pass itself is the point. The Atal tunnel reaches Lahaul under Rohtang, stays open far longer in the year and needs no permit, and for a nine-day circuit it is the better plan. Rohtang requires a permit and carries a daily vehicle cap, and it is closed by snow for a large part of the year. Tell us if you want it and we will arrange it.' },
    { question: 'Is the Dharamshala to Dalhousie road safe?', answer: 'It is a normal Himachal hill road — narrow in places, high over the Jot pass, well used by local traffic, and the best drive on the circuit. Our drivers on this leg know it. It closes in deep snow and is slow in heavy rain, in which case the alternative is the Pathankot road at 170 km. That decision is made on the morning rather than in advance.' },
    { question: 'Which month is best for the Himachal circuit?', answer: 'March to June and September to November. April to June is the busiest and the valleys fill; September to November is quieter with clearer air and the best mountain views. Late December to January is for snow specifically and several of these roads become uncertain. July to September is the monsoon, which is passable but brings landslide closures.' },
  ],

  related: [
    { label: 'Shimla sightseeing', href: '/sightseeing/shimla' },
    { label: 'Manali sightseeing', href: '/sightseeing/manali' },
    { label: 'Dharamshala sightseeing', href: '/sightseeing/dharamshala' },
    { label: 'Delhi to Shimla distance and fare', href: '/distance/delhi-to-shimla' },
    { label: 'Delhi to Manali distance and fare', href: '/distance/delhi-to-manali' },
    { label: 'Dalhousie and Dharamshala circuit', href: '/dalhousie-dharamshala-circuit-by-car' },
    { label: 'Weekend getaways from Shimla', href: '/weekend-getaways-from-shimla-by-car' },
    { label: 'Monthly car rental in Manali', href: '/monthly-car-rental-manali' },
  ],
};
