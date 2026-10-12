// Week 53 answer-proof guide 6 — "When do the Char Dham roads and shrines
// actually open?"
//
// WHY THIS SHAPE
// A seasonal-access question, which is the shape with the clearest claim on a
// page of its own: the answer is a window rather than a fact, it changes every
// year, and getting it wrong does not cost a bad afternoon but an impossible
// trip.
//
// This is deliberately separated from the cost page and the circuit page.
// Somebody asking "when does Kedarnath open" is at an earlier stage of planning
// than somebody asking what it costs, and answering both on one page serves
// neither well. The three pages cross-link rather than repeat.

export const guide = {
  slug: 'best-time-for-char-dham-by-road',
  path: '/best-time-for-char-dham-by-road',
  mood: 'pilgrimage',
  cluster: 'logistics',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Season guide · Char Dham',
  crumbs: [{ name: 'Char Dham yatra', url: '/chardham-yatra' }],
  crumbName: 'Best time for Char Dham by road',
  titleLead: 'When do the Char Dham roads open?',
  titleAccent: 'The window, the two halves of it, and the month to avoid',
  title: 'When Do the Char Dham Roads Open? The Season, Honestly',
  metaTitle: 'Best Time for Char Dham by Road: The Season Explained',
  metaDescription: 'When the Char Dham shrines and roads open and close, the difference between the May-June and September-October halves of the season, why the monsoon is the month to avoid, and the winter seats.',
  keywords: ['best time for char dham', 'char dham opening date', 'when does kedarnath open', 'char dham yatra season', 'char dham in monsoon', 'char dham winter seats', 'char dham closing date', 'kedarnath badrinath opening'],
  heroImage: '/images/sightseeing/Char_Dham/Badrinath_Temple.jpg',
  heroAlt: 'The Badrinath temple below Neelkanth in the Garhwal Himalaya',

  lead: 'The Char Dham season runs roughly from late April or early May to late October or November — opening around Akshaya Tritiya and closing around Diwali, with exact dates announced each year and differing by a few days between the four shrines. Within that window there are two quite different halves. May and June carry the heaviest pilgrim volume of the year and the longest queues; September and October are quieter, clearer and in most respects better. July and August are the monsoon, and on this one circuit we would advise against travelling rather than merely noting the risk.',

  keyFacts: [
    { label: 'Season', value: 'Late Apr/May to Oct/Nov' },
    { label: 'Busiest', value: 'May and June' },
    { label: 'Best', value: 'September and early October' },
    { label: 'Avoid', value: 'July and August' },
  ],
  stickyLabel: 'Char Dham cab',
  stickyPrice: 'Sedan ₹39,600 · 12 days',
  waText: 'Hi, I would like advice on the best dates for a Char Dham yatra by car this season.',

  intro: [
    'Two things close the Char Dham for winter and they are not the same thing. The temples close by decision — the deities are carried down to their winter seats in a formal procession, and the shrines are shut whether or not the road is clear. The roads close by weather — snow on the upper Alaknanda, Bhagirathi and Mandakini approaches, which can arrive before the temples shut and persist after they reopen.',
    'So a date can be inside the season and still be the wrong date. That is what this page is for.',
    'Opening and closing dates are announced each year by the temple committees and are tied to the Hindu calendar rather than to fixed Gregorian dates, so they move. What does not move is the pattern below.',
  ],

  table: {
    title: 'The Char Dham season, month by month',
    caption: 'Char Dham travel conditions by month — shrine status, road conditions, pilgrim volume and what each month is like',
    intro: 'The useful comparison is not open versus closed but what each open month is actually like to travel in.',
    columns: [
      { key: 'month', label: 'Month' },
      { key: 'shrines', label: 'Shrines' },
      { key: 'roads', label: 'Roads' },
      { key: 'crowd', label: 'Crowd' },
      { key: 'note', label: 'What it is like' },
    ],
    rows: [
      { month: 'Jan–Mar', shrines: 'Closed', roads: 'Snow above Uttarkashi and Joshimath', crowd: '—', note: 'The deities are at their winter seats, all of which are reachable by road' },
      { month: 'Late Apr', shrines: 'Opening', roads: 'Clearing; upper stretches uncertain', crowd: 'Building', note: 'Opening week brings large ceremonial crowds; snow still possible at Kedarnath and Badrinath' },
      { month: 'May', shrines: 'Open', roads: 'Good', crowd: 'Heaviest', note: 'Peak volume. Long queues at Kedarnath and Badrinath, accommodation at its most expensive, pony rates at their highest' },
      { month: 'June', shrines: 'Open', roads: 'Good until the monsoon arrives', crowd: 'Very heavy', note: 'As May. The monsoon typically breaks in the second half, which changes everything' },
      { month: 'July–Aug', shrines: 'Open', roads: 'Landslide closures common', crowd: 'Light', note: 'The monsoon. Gorge roads carry real landslide exposure and the Kedarnath trail is hazardous in heavy rain' },
      { month: 'Sept', shrines: 'Open', roads: 'Good once the monsoon withdraws', crowd: 'Light to moderate', note: 'The best month. Clear air, green hillsides, quiet shrines, reasonable rates' },
      { month: 'Oct', shrines: 'Open, closing late in the month', roads: 'Good, cold at altitude', crowd: 'Moderate', note: 'Excellent early in the month. Nights at Kedarnath and Badrinath are genuinely cold' },
      { month: 'Nov', shrines: 'Closing around Diwali', roads: 'Snow returning', crowd: 'Light', note: 'Closing ceremonies draw their own crowds; travel beyond that date is not possible' },
    ],
    footnote: 'Opening and closing dates are set each year by the temple committees against the Hindu calendar — Yamunotri and Gangotri around Akshaya Tritiya, with Kedarnath and Badrinath a few days later, and all four closing around Diwali. Confirm the current year\'s dates before booking anything.',
  },

  sections: [
    {
      eyebrow: 'The two halves',
      heading: 'May and June against September and October',
      paras: [
        'Most Char Dham traffic goes in May and June, and most of it does not need to. The arguments for that half are that the weather is settled, the season is certainly open, and school holidays make it practical for families. Those are real reasons.',
        'The arguments against are substantial. May and June carry the heaviest pilgrim volume of the year, which means long queues at Kedarnath and Badrinath, accommodation at its most expensive and sometimes unavailable, pony and palanquin rates at Gaurikund at their peak, and the roads themselves congested on the single-lane gorge stretches.',
        'September and the first half of October reverse almost all of that. The monsoon has withdrawn, the air is the clearest it gets and the hillsides are green, the shrines are quiet enough to stand in, and the rates at Gaurikund and in the accommodation are materially lower. The two caveats are that nights at altitude are cold, and that the season closes at the end of October, so a late trip has less margin if weather delays it.',
        'If the dates are genuinely free, September is the month we would choose.',
      ],
      link: { label: 'Char Dham yatra cost by car', href: '/char-dham-yatra-cost-by-car' },
    },
    {
      eyebrow: 'The monsoon',
      heading: 'Why we advise against July and August rather than just flagging it',
      paras: [
        'Everywhere else on this site the monsoon gets a note about landslide closures and reduced visibility. On the Char Dham roads it gets a recommendation against, and the reason is the terrain rather than the rain.',
        'The approaches run up narrow gorges — the Alaknanda to Badrinath, the Mandakini to Kedarnath, the Bhagirathi to Gangotri — cut into slopes that shed material in heavy rain. Closures of several hours are routine and closures of days happen, and they happen while you are above them rather than before you set out. The Kedarnath trail in heavy rain is genuinely hazardous, not merely unpleasant.',
        'The shrines stay open and people do travel, including large numbers of pilgrims for whom the season is fixed by other considerations. We run the route. What we will not do is tell a family planning a first yatra that July is a reasonable choice when September is available, because the difference is not comfort — it is whether the itinerary survives.',
        'If your dates are immovable and fall in the monsoon, build real slack into them: an extra day at minimum, no onward flight booked tightly after the yatra, and an acceptance that one shrine may not be reachable.',
      ],
      link: { label: 'Monsoon and landslide risk on hill roads', href: '/monsoon-landslide-risk-hill-roads' },
    },
    {
      eyebrow: 'Winter',
      heading: 'The winter seats, which almost nobody plans for and which are reachable all year',
      paras: [
        'When the shrines close, the deities are moved to winter seats in the valleys below, and worship continues there through the months the high temples are shut. Yamunotri\'s goes to Kharsali near Barkot, Gangotri\'s to Mukhba near Harsil, Kedarnath\'s to Ukhimath above Guptkashi, and Badrinath\'s to the Narsingh temple at Joshimath.',
        'All four are reachable by road in winter, and that is a trip very few people make. It is quieter by an enormous margin, the Garhwal valleys in winter light are extraordinary, and the religious continuity is the same — the same deities, in their seasonal homes.',
        'It is not a substitute for the yatra and we would not sell it as one. But for somebody who cannot travel in the season, or who has done the yatra and wants to see Garhwal without the volume, a four or five day winter circuit of the four winter seats is a real alternative rather than a consolation.',
      ],
      link: { label: 'The eight-day Uttarakhand hills circuit', href: '/uttarakhand-hills-circuit-by-car' },
    },
    {
      eyebrow: 'Practicalities',
      heading: 'What to confirm before you fix dates',
      paras: [
        'This year\'s opening and closing dates, which are announced by the temple committees against the Hindu calendar and differ by a few days between the four shrines. They are the hard boundary on any plan.',
        'Uttarakhand yatra registration, which is required for Char Dham pilgrims and checked at points along the route. Do it online before travelling; the counters at Haridwar and Rishikesh are slow in the May and June peak.',
        'Accommodation at Kedarnath and Badrinath specifically. Both are limited, both are at altitude, and in May and June both are booked well ahead and priced accordingly. This is the constraint that most often forces a date change.',
        'And the Kedarnath method — walking, pony or helicopter — because it determines how many days the yatra needs and is also the item most affected by weather in either half of the season.',
      ],
      link: { label: 'The twelve-day Char Dham circuit, day by day', href: '/char-dham-circuit-by-car' },
    },
  ],

  tips: [
    { title: 'September if the dates are free', text: 'Monsoon withdrawn, clearest air of the year, quiet shrines and lower rates at Gaurikund. The only costs are cold nights and less margin before the season closes.' },
    { title: 'Opening week is a crowd, not a quiet start', text: 'The ceremonial opening around Akshaya Tritiya draws its own large volume, and snow is still possible at Kedarnath and Badrinath. It is not the easy slot it sounds like.' },
    { title: 'Book Kedarnath accommodation before fixing the dates', text: 'It is limited, at altitude and the first thing to run out in May and June. More Char Dham date changes come from this than from anything else.' },
    { title: 'Register online, not at the counter', text: 'Uttarakhand yatra registration is required and checked. The Haridwar and Rishikesh counters are slow in the peak; the website is not.' },
    { title: 'The winter seats are a real trip', text: 'Kharsali, Mukhba, Ukhimath and Joshimath are reachable all year and almost nobody goes. Not a substitute for the yatra, but not a consolation either.' },
  ],

  faqs: [
    { question: 'When does the Char Dham yatra open?', answer: 'Around Akshaya Tritiya, which falls in late April or early May, with Yamunotri and Gangotri opening first and Kedarnath and Badrinath a few days later. The dates are set each year by the temple committees against the Hindu calendar rather than on fixed Gregorian dates, so they move — confirm the current year before booking.' },
    { question: 'When does Char Dham close?', answer: 'Around Diwali, in late October or November, with the four shrines closing over a few days. The deities are then carried to their winter seats — Yamunotri\'s to Kharsali, Gangotri\'s to Mukhba, Kedarnath\'s to Ukhimath and Badrinath\'s to the Narsingh temple at Joshimath — all of which remain reachable by road through the winter.' },
    { question: 'What is the best month for Char Dham by road?', answer: 'September, if your dates are free. The monsoon has withdrawn, the air is the clearest of the year, the hillsides are green, the shrines are quiet enough to stand in, and accommodation and pony rates are materially below the May and June peak. Early October is nearly as good, with colder nights and less margin before the season closes.' },
    { question: 'Can you do Char Dham during the monsoon?', answer: 'The shrines stay open and people do travel, but we advise against planning it. The gorge approaches up the Alaknanda, Mandakini and Bhagirathi carry real landslide exposure in July and August, closures of hours or days happen while you are above them, and the Kedarnath trail is genuinely hazardous in heavy rain. If your dates are immovable, build in an extra day and do not book a tight onward flight.' },
    { question: 'Why are May and June so busy for Char Dham?', answer: 'Settled weather, a certainly open season and school holidays. The cost is that it is the heaviest pilgrim volume of the year — long queues at Kedarnath and Badrinath, accommodation expensive and sometimes unavailable, pony and palanquin rates at their peak, and congestion on the single-lane gorge stretches.' },
    { question: 'Where are the Char Dham winter seats?', answer: 'Kharsali near Barkot for Yamunotri, Mukhba near Harsil for Gangotri, Ukhimath above Guptkashi for Kedarnath, and the Narsingh temple at Joshimath for Badrinath. Worship continues at all four through the winter and all four are reachable by road, which makes a four or five day winter circuit of them a genuine alternative for anyone who cannot travel in season.' },
  ],

  related: [
    { label: 'The twelve-day Char Dham circuit', href: '/char-dham-circuit-by-car' },
    { label: 'Char Dham yatra cost by car', href: '/char-dham-yatra-cost-by-car' },
    { label: 'Char Dham yatra packages', href: '/chardham-yatra' },
    { label: 'Monsoon and landslide risk on hill roads', href: '/monsoon-landslide-risk-hill-roads' },
    { label: 'The eight-day Uttarakhand hills circuit', href: '/uttarakhand-hills-circuit-by-car' },
    { label: 'Haridwar sightseeing', href: '/sightseeing/haridwar' },
  ],
};
