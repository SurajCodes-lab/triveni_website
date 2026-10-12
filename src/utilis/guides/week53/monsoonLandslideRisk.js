// Week 53 answer-proof guide 7 — "Monsoon travel on hill roads: the honest risk
// assessment"
//
// WHY THIS SHAPE
// A seasonal-access question that every hill page on this site touches in a
// sentence and nothing answers properly. It is also the question where a cab
// company has the clearest commercial incentive to be vague, which is exactly
// why writing it down plainly is worth more than the bookings it costs.
//
// The useful content is not "the monsoon is risky" — everyone knows that. It is
// which roads, what the failure mode actually is, how long closures last, and
// how to build an itinerary that survives one. That is operational knowledge
// from drivers who run these roads in July, and no search panel has it.

export const guide = {
  slug: 'monsoon-landslide-risk-hill-roads',
  path: '/monsoon-landslide-risk-hill-roads',
  mood: 'hills',
  cluster: 'logistics',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Season guide · Hill roads',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'Monsoon and landslide risk on hill roads',
  titleLead: 'Monsoon travel on hill roads:',
  titleAccent: 'which routes, what actually happens, and how to plan',
  title: 'Monsoon Travel on Hill Roads: The Honest Risk Assessment',
  metaTitle: 'Monsoon Hill Road Travel: Which Routes and How to Plan',
  metaDescription: 'Which Himachal and Uttarakhand hill roads carry real landslide risk in the monsoon, what a closure actually looks like, how long they last, and how to build an itinerary that survives one.',
  keywords: ['monsoon travel himachal', 'landslide risk uttarakhand roads', 'is it safe to visit manali in monsoon', 'hill road closures july august', 'char dham monsoon risk', 'shimla manali monsoon travel', 'monsoon road trip india hills'],
  heroImage: '/images/sightseeing/Manali/Kullu Valley.jpg',
  heroAlt: 'The Kullu valley road, one of the corridors affected by monsoon landslides',

  lead: 'The monsoon does not make hill travel impossible and it does not make it safe. What it does is turn a predictable journey into an unpredictable one: the roads stay open most days, closures of two to six hours are routine, closures of a day or more happen several times a season on the worst corridors, and the risk is not evenly spread. A Kangra valley trip in July is a different proposition from a Char Dham yatra or a Kinnaur run. This page says which is which, what a closure actually looks like from inside it, and how to build an itinerary that survives one.',

  keyFacts: [
    { label: 'Monsoon window', value: 'Late June to mid-September' },
    { label: 'Typical closure', value: '2–6 hours, cleared by road crews' },
    { label: 'Highest risk', value: 'Gorge roads: Alaknanda, Mandakini, Kinnaur' },
    { label: 'The real cost', value: 'Unpredictability, not impossibility' },
  ],
  stickyLabel: 'Hill route cab',
  stickyPrice: 'Chauffeur-driven · fare fixed',
  waText: 'Hi, I am planning a hill trip in the monsoon and would like an honest view on the route.',

  intro: [
    'Three things make a hill road vulnerable in heavy rain, and they are worth separating because they fail differently. A slope above the road sheds material onto it — that is a landslide, and it is cleared by a JCB in hours. The road itself subsides or is washed out from below — that is slower to fix and sometimes takes days. And a river rises over a bridge or a low crossing, which closes the road until the water drops.',
    'The first is common and inconvenient. The second and third are rarer and are what actually strands people. Most of what travellers call "a landslide closed the road" is the first kind, and most of it resolves the same day.',
    'What follows is route by route, from drivers who run these corridors through July and August. The plain conclusion up front: some monsoon hill travel is perfectly reasonable with slack built in, and some we would advise against.',
  ],

  table: {
    title: 'Monsoon risk by corridor',
    caption: 'Monsoon landslide and closure risk on Himachal and Uttarakhand hill corridors, with the failure mode and our recommendation',
    intro: 'Risk here means the chance of a meaningful delay or closure during late June to mid-September, not the chance of an accident. Every corridor below is driven by local traffic through the monsoon.',
    columns: [
      { key: 'route', label: 'Corridor' },
      { key: 'risk', label: 'Risk' },
      { key: 'mode', label: 'What fails' },
      { key: 'view', label: 'Our view' },
    ],
    rows: [
      { route: 'Delhi → Haridwar / Rishikesh', risk: 'Low', mode: 'Plains flooding at underpasses', view: 'Travel freely; it is a plains route' },
      { route: 'Dehradun → Mussoorie', risk: 'Low–moderate', mode: 'Slips on the 35 km climb', view: 'Fine with an hour of slack' },
      { route: 'Kathgodam → Nainital', risk: 'Low–moderate', mode: 'Slips on the climb', view: 'Fine; Kumaon is less exposed than Garhwal' },
      { route: 'Kalka → Shimla', risk: 'Moderate', mode: 'Slips above Solan and Kandaghat', view: 'Reasonable with slack; the road is wide and well maintained' },
      { route: 'Pathankot → Dharamshala / Dalhousie', risk: 'Moderate', mode: 'Slips on the Kangra and Chamba approaches', view: 'Reasonable; the Jot pass is the part to watch' },
      { route: 'Mandi → Kullu → Manali', risk: 'High', mode: 'Beas-side washouts and slips in the Mandi gorge', view: 'Travel only with real slack; this corridor closes most seasons' },
      { route: 'Manali → Lahaul (Atal tunnel)', risk: 'High', mode: 'Approach slips and tunnel closures', view: 'Day-by-day decision; do not build the trip around it' },
      { route: 'Parvati valley (Kasol, Manikaran)', risk: 'High', mode: 'Narrow road, river rise, slips', view: 'We would not plan it in July or August' },
      { route: 'Rishikesh → Rudraprayag → Kedarnath', risk: 'Very high', mode: 'Mandakini gorge slips and washouts', view: 'Advise against; the trail is hazardous too' },
      { route: 'Rishikesh → Joshimath → Badrinath', risk: 'Very high', mode: 'Alaknanda gorge slips and washouts', view: 'Advise against' },
      { route: 'Shimla → Sarahan → Kinnaur', risk: 'Very high', mode: 'Sutlej gorge; the NH-5 cliff sections', view: 'Advise against in peak monsoon' },
      { route: 'Manali → Spiti (Kunzum La)', risk: 'Closed or near it', mode: 'Water crossings and snowmelt', view: 'Not a monsoon route' },
    ],
    footnote: 'Risk is a judgement from the drivers who run these corridors, not a published index. Conditions in any single week can be better or worse than the table suggests, which is why the decision belongs to the morning of travel rather than to a booking made in April.',
  },

  sections: [
    {
      eyebrow: 'What it looks like',
      heading: 'What a monsoon closure is actually like from inside it',
      paras: [
        'In the common case: the car stops in a queue of twenty or thirty vehicles on a single-lane stretch. Somewhere ahead, material has come down. A JCB is either already there or is an hour away. Local traffic and drivers who know the road are relaxed about it because this happens weekly in the season. The queue clears in two to six hours and the day continues, shortened.',
        'In the less common case: the road itself has gone, or a bridge is underwater, and there is no clearing it that day. Then the question is which side of the closure you are on and what is behind you. This is why our drivers prefer to start early in the monsoon — being 60 km further along by nine in the morning changes which town you spend the night in.',
        'What almost never happens, and what people fear, is being caught in a slide. Slides come down onto empty road far more often than onto traffic, and a driver who runs the corridor reads the slope and the weather. The real cost of the monsoon is hours and uncertainty, not danger — with the exception of the Mandakini and Alaknanda gorge roads at their worst, which is why those are the two we advise against rather than merely flag.',
      ],
      link: { label: 'Best time for Char Dham by road', href: '/best-time-for-char-dham-by-road' },
    },
    {
      eyebrow: 'How to plan',
      heading: 'Building an itinerary that survives a closure',
      paras: [
        'Leave early. This is the single most effective thing and the one most often ignored. A six a.m. start on a monsoon hill day puts you past the worst stretches before the afternoon rain, and gives the day enough slack to absorb a three-hour wait without arriving after dark.',
        'Add a spare day. On a week or longer, one unallocated day converts a closure from a crisis into an inconvenience. On a Char Dham or Kinnaur itinerary we would say two.',
        'Do not book a tight onward flight. The commonest monsoon disaster is not the closure but the connection it breaks. Leave a clear night between the end of a hill itinerary and any flight, and keep the last leg to a plains city rather than a hill town.',
        'And decide the fragile legs day by day rather than in advance. The Atal tunnel run, the Jot pass crossing, the Rohtang permit — all of those are morning decisions in the monsoon. An itinerary that requires them to work is an itinerary with a single point of failure.',
      ],
      link: { label: 'The nine-day Himachal grand circuit', href: '/himachal-grand-circuit-by-car' },
    },
    {
      eyebrow: 'The case for going',
      heading: 'What the monsoon is genuinely good for',
      paras: [
        'It is not all cost. The hills in the monsoon look completely different and in several places better. Mount Abu, which is a dry plateau for most of the year, greens up entirely. The Kangra valley and the Dalhousie-Khajjiar side are at their most dramatic. Waterfalls that are a trickle in May are in full flow.',
        'The crowds are a fraction of the April-to-June volume, which on roads like Kalka-Shimla and Mandi-Kullu is a material difference to the journey itself. Accommodation rates fall substantially. And there is a quality to a Himachal valley in low cloud that nobody who has only visited in May has seen.',
        'So the honest position is route-dependent rather than blanket. A Kangra valley or Dalhousie trip in July, with early starts and a spare day, is a good trip at a good price. A Char Dham yatra or a Kinnaur run in the same weeks is a different decision and we would tell you to move the dates.',
      ],
      link: { label: 'Weekend getaways from Dharamshala', href: '/weekend-getaways-from-dharamshala-by-car' },
    },
    {
      eyebrow: 'On the day',
      heading: 'What we do, and what we will tell you',
      paras: [
        'Our drivers on these corridors check the road position before setting out — not a forecast, but whether the route is currently open and what came down overnight. That check is worth more than anything published a week in advance.',
        'If a leg should not be attempted that morning, we will say so and propose the alternative: the Pathankot road instead of the Jot pass, a day in the valley instead of the tunnel run, a different night halt. The fare does not change for a weather reroute of similar distance.',
        'And if the honest answer at the booking stage is that your dates and your route do not go together, we will say that too. A Char Dham enquiry for the last week of July gets told to move rather than quoted, which costs us the booking and is still the right answer.',
      ],
      link: { label: 'When Rohtang and the Atal tunnel are open', href: '/when-does-rohtang-and-atal-tunnel-open' },
    },
  ],

  tips: [
    { title: 'Six a.m. starts, not nine', text: 'The single most effective monsoon precaution. Being 60 km further along before the afternoon rain changes which town you sleep in.' },
    { title: 'One spare day on a week, two on Char Dham', text: 'An unallocated day turns a closure into an inconvenience. Without one, a six-hour wait cascades through every remaining night halt.' },
    { title: 'Never a tight flight at the end', text: 'The closure rarely ruins the trip; the connection it breaks does. Leave a clear night, and end the itinerary in a plains city.' },
    { title: 'Decide the fragile legs on the morning', text: 'The Atal tunnel, the Jot pass, Rohtang. In the monsoon these are day-of decisions, and an itinerary that depends on them has one point of failure.' },
    { title: 'Kumaon over Garhwal in the monsoon', text: 'Nainital and the Kumaon lakes are materially less exposed than the Garhwal gorge roads. If the hills are the point and July is the date, go east.' },
  ],

  faqs: [
    { question: 'Is it safe to travel to Himachal or Uttarakhand in the monsoon?', answer: 'It depends entirely on the corridor. The Kangra valley, Dalhousie, Shimla via Kalka and the Kumaon lakes are reasonable with early starts and a spare day. The Mandi-Kullu-Manali road and the Parvati valley carry high risk. The Mandakini and Alaknanda gorge roads to Kedarnath and Badrinath, and the Sutlej gorge into Kinnaur, we advise against in peak monsoon rather than merely flag.' },
    { question: 'How long do monsoon landslide closures last?', answer: 'Most are two to six hours — material comes down onto the road and a JCB clears it, which happens weekly on these corridors in season and which local traffic treats as routine. The rarer and more serious cases are a washed-out road or a flooded crossing, which can take a day or more. The common case is an inconvenience; the rare case is what strands people.' },
    { question: 'Which months are the monsoon in the Indian hills?', answer: 'Late June to mid-September, with July and August the heaviest. September usually sees the monsoon withdraw and is one of the best months of the year for hill travel — clear air, green hillsides and light crowds. The withdrawal date varies by a couple of weeks each year and earlier in Uttarakhand than in Himachal.' },
    { question: 'Should I cancel a Manali trip in July?', answer: 'Not necessarily, but plan it differently. The Mandi-Kullu-Manali corridor is one of the higher-risk ones and closes in most seasons, so travel with a spare day, start early, and do not build the trip around the Atal tunnel run or Rohtang, both of which become morning decisions. If the dates can move to September they should.' },
    { question: 'Is the monsoon ever a good time for the hills?', answer: 'Yes, and on some routes it is the best time. Mount Abu greens up completely, the Kangra and Dalhousie side is at its most dramatic, waterfalls are in full flow, crowds are a fraction of the April-to-June volume and rates fall substantially. The trade is unpredictability, which early starts and a spare day largely absorb on the lower-risk corridors.' },
    { question: 'What happens if a road closes during my trip?', answer: 'The driver reroutes where there is an alternative — the Pathankot road instead of the Jot pass, for example — and the fare does not change for a weather reroute of similar distance. Where there is no alternative, we wait or change the night halt. This is why we recommend a spare day: without one, a six-hour closure cascades through every remaining booking.' },
  ],

  related: [
    { label: 'Best time for Char Dham by road', href: '/best-time-for-char-dham-by-road' },
    { label: 'When Rohtang and the Atal tunnel are open', href: '/when-does-rohtang-and-atal-tunnel-open' },
    { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    { label: 'The nine-day Himachal grand circuit', href: '/himachal-grand-circuit-by-car' },
    { label: 'The eight-day Uttarakhand hills circuit', href: '/uttarakhand-hills-circuit-by-car' },
    { label: 'The twelve-day Char Dham circuit', href: '/char-dham-circuit-by-car' },
  ],
};
