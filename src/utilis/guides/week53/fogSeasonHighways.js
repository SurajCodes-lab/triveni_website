// Week 53 answer-proof guide 22 — "Fog season on the north India highways"
//
// WHY THIS SHAPE
// A seasonal-access question with real safety content, no inline answer, and a
// window — late December to late January — that overlaps the single busiest
// travel fortnight of the year. It is also the one hazard on this site where
// the right advice is about departure times rather than about dates.

export const guide = {
  slug: 'fog-season-on-north-india-highways',
  path: '/fog-season-on-north-india-highways',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Season guide · Highways',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'Fog season on the north India highways',
  titleLead: 'Fog season:',
  titleAccent: 'why the early start stops being good advice',
  title: 'Fog Season on the North India Highways: How to Plan',
  metaTitle: 'Fog Season North India: When to Leave and When Not To',
  metaDescription: 'How winter fog affects driving on north India highways: the window, the hours, which corridors are worst, why the usual early start is wrong in January, and how to plan around it.',
  keywords: ['fog on indian highways', 'winter fog delhi agra road', 'driving in fog north india', 'december january fog travel', 'yamuna expressway fog', 'fog season road trip india'],
  heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
  heroAlt: 'A north India highway corridor affected by winter fog',

  lead: 'From late December to late January the Indo-Gangetic plain produces dense radiation fog that cuts visibility to a few metres, and it does so in the hours when everybody wants to leave. This is the one season where the standing advice on this site — start at six — is wrong. In fog the right departure is nine or ten, after the sun has lifted it, and the day is planned shorter to compensate. It also means a flight or train booked tightly at the end of a winter drive is the thing most likely to be missed.',

  keyFacts: [
    { label: 'Window', value: 'Late Dec to late Jan, worst in January' },
    { label: 'Worst hours', value: 'About 11 pm to 10 am' },
    { label: 'Worst corridors', value: 'The Gangetic plain: Delhi–Agra–Lucknow–Varanasi' },
    { label: 'The advice', value: 'Leave late, not early' },
  ],
  stickyLabel: 'Winter highway cab',
  stickyPrice: 'Fare fixed before travel',
  waText: 'Hi, I am travelling in the fog season and would like advice on departure times.',

  intro: [
    'Winter fog on the north Indian plain is not mist. It is a dense radiation fog formed on clear, still, cold nights, it reduces visibility to between zero and fifty metres, and it persists through the night and into the middle of the morning. On the worst mornings the Yamuna Expressway and NH-44 run at twenty kilometres an hour behind convoys of hazard lights.',
    'The reason it matters particularly here is that every other piece of travel advice points at an early start — for the Taj at sunrise, for a long hill day, to beat the traffic. In January those early starts put you on the road in the worst conditions of the day.',
    'What follows is the window, the corridors, and the specific planning changes that work.',
  ],

  table: {
    title: 'Fog risk by corridor and by hour',
    caption: 'Winter fog exposure on north India corridors, with the hours affected and the practical planning change for each',
    intro: 'Fog is a plains phenomenon. The hill corridors are largely unaffected above about 1,000 metres, which makes the altitude a useful planning tool in January.',
    columns: [
      { key: 'route', label: 'Corridor' },
      { key: 'risk', label: 'Fog risk' },
      { key: 'hours', label: 'Worst hours' },
      { key: 'plan', label: 'Planning change' },
    ],
    rows: [
      { route: 'Delhi ↔ Agra (Yamuna Expressway)', risk: 'High', hours: '11 pm – 10 am', plan: 'Leave after 9; the sunrise Taj plan needs a night in Agra' },
      { route: 'Delhi ↔ Lucknow / Varanasi', risk: 'High', hours: '11 pm – 10 am', plan: 'Leave after 9 and shorten the day' },
      { route: 'Delhi ↔ Chandigarh / Amritsar (NH-44)', risk: 'High', hours: '12 am – 10 am', plan: 'Leave after 9; Punjab is among the worst affected' },
      { route: 'Delhi ↔ Jaipur (NH-48)', risk: 'Moderate to high', hours: '1 am – 9 am', plan: 'Leave after 9; clears earlier than the Gangetic corridors' },
      { route: 'Lucknow ↔ Varanasi / Prayagraj', risk: 'High', hours: '11 pm – 10 am', plan: 'Leave after 9' },
      { route: 'Delhi ↔ Haridwar / Dehradun', risk: 'Moderate on the plains', hours: '12 am – 9 am', plan: 'Clears as you gain height past Roorkee' },
      { route: 'Jaipur ↔ Jodhpur / Udaipur', risk: 'Low to moderate', hours: '2 am – 8 am', plan: 'Drier air; far less affected than the Gangetic plain' },
      { route: 'Jodhpur ↔ Jaisalmer / Bikaner', risk: 'Low', hours: '—', plan: 'Desert air; fog is rare' },
      { route: 'Any hill road above ~1,000 m', risk: 'Low', hours: '—', plan: 'Usually above the fog layer; cloud is a separate matter' },
      { route: 'Chandigarh ↔ Shimla', risk: 'Plains section only', hours: '12 am – 9 am', plan: 'Fog to Kalka, then you climb out of it' },
    ],
    footnote: 'Fog is highly variable night to night and depends on clear skies, low wind and humidity. A January week can pass with none and the next can be dense every morning. The hours above are typical rather than fixed, and the only reliable check is the morning itself.',
  },

  sections: [
    {
      eyebrow: 'The inversion',
      heading: 'Why "leave at six" becomes wrong advice in January',
      paras: [
        'Every other page on this site recommends an early start, and for nine months of the year that is right — it buys daylight, beats traffic and gets the hill sections done before afternoon weather. In the fog fortnight it does the opposite.',
        'Radiation fog forms overnight and is burned off by the sun, so the visibility curve runs the wrong way round to the traffic curve: worst at five in the morning, improving from about nine, usually clear by eleven. A six o\'clock departure from Delhi in January is a departure into the worst two hours of the day.',
        'The replacement rule is to leave at nine or ten and plan a shorter day. A Delhi-to-Jaipur run that would be five hours at six in the morning is five hours at ten as well, because the fog delay and the traffic delay roughly cancel — but the ten o\'clock version is considerably safer.',
        'The exception is a journey that climbs. Delhi to Shimla or Delhi to Mussoorie passes through fog on the plains and leaves it behind at altitude, so an early start there costs you the first two hours in poor visibility and then improves. On those routes a seven o\'clock departure is a reasonable compromise.',
      ],
      link: { label: 'How many kilometres a day is comfortable', href: '/how-many-km-per-day-by-car' },
    },
    {
      eyebrow: 'The sunrise problem',
      heading: 'What fog does to the sunrise Taj plan, and the fix',
      paras: [
        'The best thing to do in Agra is be at the Taj gates when they open, and the best way to arrange it is a night in Agra rather than a pre-dawn drive from Delhi. In January that stops being a preference and becomes the only sensible version.',
        'A three-in-the-morning departure from Delhi for a sunrise visit means three hours on the Yamuna Expressway in the densest fog of the night. Even if the drive goes well, the monument itself can be fogged in — January mornings at the Taj are frequently white rather than pink, which is its own disappointment after that drive.',
        'So the January arrangement is: drive down in the late morning or afternoon, take Agra Fort and Itmad-ud-Daulah, stay the night, and walk to the gates. If the morning is fogged you have lost nothing but a sunrise, and you are already there for when it lifts.',
      ],
      link: { label: 'Taxi or train, Delhi to Agra', href: '/taxi-vs-train-delhi-to-agra' },
    },
    {
      eyebrow: 'The connection',
      heading: 'Never book a tight flight or train at the end of a January drive',
      paras: [
        'This is where fog actually costs people money, and it is worth stating separately because the driving itself is usually survivable.',
        'Fog delays rail and air far more dramatically than road. Trains on the Delhi-Howrah and Delhi-Lucknow routes run hours late through January; flights at IGI are held for visibility. A traveller whose plan is "drive to Delhi in the morning, fly at two" has two independent fog exposures stacked on one afternoon.',
        'The arrangement that works is a clear night between the end of a road itinerary and any onward connection, and a departure point in the city rather than a hill town. On a nine-day winter circuit that costs one hotel night and removes the single largest risk to the whole trip.',
      ],
      link: { label: 'What if the road closes mid-trip', href: '/what-if-the-road-closes-mid-trip' },
    },
    {
      eyebrow: 'On the road',
      heading: 'What our drivers do, and what we will not do',
      paras: [
        'They check visibility before setting out rather than relying on a forecast, use fog lights and hazards rather than high beam — which reflects off the fog and makes things worse — keep well back from the vehicle ahead, and avoid the practice of following a truck\'s tail lights closely, which is how most fog pile-ups on these corridors happen.',
        'They also stop. If visibility closes to near zero, the right action is a dhaba or a toll plaza and a wait of an hour, and our drivers are not under pressure to make up time. A journey that arrives two hours late in January is a journey that went correctly.',
        'What we will not do is depart into a zero-visibility morning because a schedule says so. If that means a later start and a shorter day, we will tell you at breakfast rather than at the first pile-up. And if you have an unmovable appointment at the far end, we would rather say at the booking stage that the timing is not safe to promise.',
      ],
      link: { label: 'Driver rest and long drives', href: '/driver-rest-and-long-drives' },
    },
  ],

  tips: [
    { title: 'In January, leave at nine — not six', text: 'Fog is worst at dawn and burns off by mid-morning. The early start that works all year is the wrong call in the fog fortnight.' },
    { title: 'The sunrise Taj needs a night in Agra', text: 'A 3 a.m. drive down the expressway in January fog is the worst version of that plan, and the monument may be white rather than pink anyway.' },
    { title: 'Never stack a tight connection on a January drive', text: 'Fog delays trains and flights far more than roads. Leave a clear night between a road itinerary and any onward travel.' },
    { title: 'Height is the escape', text: 'Fog is a plains phenomenon. Anything above about 1,000 metres is usually clear, which makes a hill itinerary a reasonable January choice.' },
    { title: 'Rajasthan is drier and less affected', text: 'The Jodhpur, Jaisalmer and Bikaner corridors see little fog. A January desert trip is far less exposed than a Gangetic one.' },
  ],

  faqs: [
    { question: 'When is fog season on the north India highways?', answer: 'Late December to late January, with January the worst month. It is dense radiation fog formed on clear, still, cold nights, and it persists from roughly 11 pm through to about 10 am. It is highly variable — a January week can pass with none and the next can be dense every morning.' },
    { question: 'Which highways are worst affected by fog?', answer: 'The Indo-Gangetic plain corridors: Delhi to Agra on the Yamuna Expressway, Delhi to Lucknow and Varanasi, and Delhi to Chandigarh and Amritsar on NH-44, with Punjab among the worst. Delhi to Jaipur is moderate to high and clears earlier. The Rajasthan desert corridors see little fog, and hill roads above about 1,000 metres are usually above the layer entirely.' },
    { question: 'What time should I leave in the fog season?', answer: 'Nine or ten in the morning, which inverts the usual advice. Fog is worst at dawn and burns off with the sun, so a six o\'clock start in January puts you on the road in the worst two hours of the day. The exception is a journey that climbs — Delhi to Shimla or Mussoorie passes through the fog on the plains and leaves it behind at altitude, so an earlier start is reasonable.' },
    { question: 'Can I still see the Taj Mahal at sunrise in January?', answer: 'Sometimes, and the way to try is a night in Agra rather than a pre-dawn drive from Delhi. January mornings at the Taj are frequently fogged in and white rather than pink, so the sunrise is not guaranteed in any case — but staying in Agra means a fogged morning costs you nothing beyond the sunrise, and you are there when it lifts.' },
    { question: 'Is it safe to drive at night during fog season?', answer: 'It is the worst time, and our drivers avoid it where the itinerary allows. Where night driving is unavoidable the practice is fog lights and hazards rather than high beam — which reflects and makes visibility worse — generous following distance, and stopping at a dhaba or toll plaza if visibility closes to near zero. We would rather arrive two hours late than attempt a zero-visibility stretch.' },
    { question: 'Should I avoid travelling in north India in January?', answer: 'No — it is one of the best months for weather, sites and comfort, and the desert and hill itineraries are barely affected. What needs changing is the departure times on the plains corridors and the refusal to stack a tight flight or train at the end. Fog is a planning constraint rather than a reason to cancel.' },
  ],

  related: [
    { label: 'How many kilometres a day is comfortable', href: '/how-many-km-per-day-by-car' },
    { label: 'Taxi or train, Delhi to Agra', href: '/taxi-vs-train-delhi-to-agra' },
    { label: 'What if the road closes mid-trip', href: '/what-if-the-road-closes-mid-trip' },
    { label: 'Driver rest and long drives', href: '/driver-rest-and-long-drives' },
    { label: 'Best time for Rajasthan by road', href: '/best-time-for-rajasthan-by-road' },
    { label: 'The nine-day Uttar Pradesh heritage circuit', href: '/uttar-pradesh-heritage-circuit-by-car' },
  ],
};
