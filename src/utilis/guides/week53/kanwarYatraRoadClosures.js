// Week 53 answer-proof guide 15 — "The Kanwar yatra and the roads: what closes,
// when, and how to plan around it"
//
// WHY THIS SHAPE
// A seasonal-access question with a definite answer, no inline answer, and real
// consequences — the Haridwar and Rishikesh corridors carry pedestrian traffic
// in numbers that make vehicle movement impossible for a fortnight, and a
// traveller who books a July Uttarakhand trip without knowing has a problem
// nothing on arrival can fix.

export const guide = {
  slug: 'kanwar-yatra-road-closures',
  path: '/kanwar-yatra-road-closures',
  mood: 'pilgrimage',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Season guide · Uttarakhand and NCR',
  crumbs: [{ name: 'Haridwar sightseeing', url: '/sightseeing/haridwar' }],
  crumbName: 'Kanwar yatra road closures',
  titleLead: 'The Kanwar yatra and the roads:',
  titleAccent: 'what closes, when, and how to plan around it',
  title: 'The Kanwar Yatra and the Roads: What Closes and When',
  metaTitle: 'Kanwar Yatra Road Closures: Which Routes and When',
  metaDescription: 'Which roads are affected by the Kanwar yatra, why the Haridwar and Rishikesh corridors become impassable for a fortnight, which dates to avoid and the alternative routes that work.',
  keywords: ['kanwar yatra road closure', 'haridwar road closed kanwar', 'delhi meerut highway kanwar yatra', 'travel to rishikesh during kanwar', 'shravan month road restrictions', 'kanwar yatra traffic diversion'],
  heroImage: '/images/sightseeing/Haridwar/Har_Ki_Pauri.jpg',
  heroAlt: 'Har ki Pauri at Haridwar, the destination of the Kanwar yatra',

  lead: 'For roughly a fortnight in the Hindu month of Shravan — usually late July into early August — millions of pilgrims walk from Haridwar and Gaumukh carrying Ganga water, and the roads they walk on stop being roads. The Haridwar-Delhi corridor, the Haridwar-Rishikesh stretch and the Delhi-Meerut-Muzaffarnagar highway carry pedestrian traffic in numbers that make vehicle movement impossible for long stretches of the day, with official diversions and closures on top. This is not heavy traffic to allow for. It is a period when some journeys should not be planned at all.',

  keyFacts: [
    { label: 'When', value: 'Shravan — usually late Jul to early Aug' },
    { label: 'Worst affected', value: 'Haridwar–Delhi, Haridwar–Rishikesh' },
    { label: 'Also affected', value: 'Delhi–Meerut–Muzaffarnagar' },
    { label: 'The honest advice', value: 'Move the dates if you can' },
  ],
  stickyLabel: 'Uttarakhand cab',
  stickyPrice: 'Chauffeur-driven · fare fixed',
  waText: 'Hi, I am planning travel in Uttarakhand and want to know whether my dates clash with the Kanwar yatra.',

  intro: [
    'The Kanwar yatra is one of the largest annual pedestrian movements anywhere in the world. Pilgrims — kanwariyas — walk to Haridwar, Gangotri or Gaumukh, collect Ganga water, and carry it on foot back to Shiva temples across Uttar Pradesh, Haryana, Delhi and beyond. The scale is in the millions.',
    'The consequence for anyone travelling by road is immediate and physical. Entire carriageways are given over to walkers, often the left lane of a national highway for its full length. State authorities apply formal restrictions on commercial and heavy vehicles, reverse carriageways, and close stretches outright. Travel times on the affected corridors stop being predictable in any useful sense.',
    'This page sets out which roads, when, and what actually works — including the honest answer, which for most itineraries is to move the dates.',
  ],

  table: {
    title: 'Which corridors are affected, and how badly',
    caption: 'Road corridors affected by the Kanwar yatra, with the level of disruption and the practical advice for each',
    intro: 'The dates shift each year with the lunar calendar. The geography does not.',
    columns: [
      { key: 'route', label: 'Corridor' },
      { key: 'level', label: 'Disruption' },
      { key: 'advice', label: 'What to do' },
    ],
    rows: [
      { route: 'Haridwar ↔ Rishikesh (25 km)', level: 'Severe', advice: 'Avoid. This is the densest stretch of the whole yatra' },
      { route: 'Haridwar ↔ Delhi via Muzaffarnagar', level: 'Severe', advice: 'Avoid; heavy-vehicle bans and reversed carriageways apply' },
      { route: 'Delhi ↔ Meerut', level: 'Severe', advice: 'Expect formal restrictions and diversions' },
      { route: 'Haridwar ↔ Dehradun', level: 'Moderate to severe', advice: 'Possible with large time allowances; check on the day' },
      { route: 'Rishikesh ↔ Devprayag and upward', level: 'Moderate', advice: 'Workable; the yatra thins above Rishikesh' },
      { route: 'Delhi ↔ Nainital / Kumaon via NH-9', level: 'Light', advice: 'Largely unaffected — the better Uttarakhand option' },
      { route: 'Delhi ↔ Jaipur / Agra', level: 'None', advice: 'Unaffected; a Rajasthan or Braj trip is fine' },
      { route: 'Chandigarh ↔ Shimla / Himachal', level: 'None to light', advice: 'Unaffected; a Himachal trip is fine' },
    ],
    footnote: 'Shravan falls in July or August and the exact dates move each year with the lunar calendar. Restrictions are issued by the Uttarakhand, Uttar Pradesh, Haryana and Delhi authorities and differ in detail between them. Confirm the dates for your year before fixing an itinerary on the affected corridors.',
  },

  sections: [
    {
      eyebrow: 'What actually happens',
      heading: 'Why this is different from ordinary festival traffic',
      paras: [
        'Because the road surface itself is in use by people on foot, for days at a time, continuously. A Diwali or Holi weekend produces heavy vehicle traffic that moves slowly; the Kanwar yatra produces a carriageway full of walkers that a vehicle cannot pass through at any speed.',
        'On top of that sit formal measures. Heavy and commercial vehicles are banned from affected stretches for the duration. Carriageways are reversed so that both sides carry one direction of vehicle traffic while the other is given to pilgrims. Some stretches close entirely for periods. Diversions can add fifty or a hundred kilometres to a journey, onto roads not built for the volume.',
        'The result is that a 25 km Haridwar-to-Rishikesh run, normally forty-five minutes, becomes something no driver will put a time on. That is the honest position and it is why this page recommends moving dates rather than building in slack.',
      ],
      link: { label: 'Monsoon and landslide risk on hill roads', href: '/monsoon-landslide-risk-hill-roads' },
    },
    {
      eyebrow: 'What still works',
      heading: 'Where to go instead, if the dates cannot move',
      paras: [
        '**Kumaon rather than Garhwal.** Delhi to Nainital, Bhimtal, Mukteshwar and Jim Corbett runs on NH-9 through Moradabad and Rudrapur, well east of the yatra corridors, and is largely unaffected. If the hills are the point and the dates are fixed, go east. The Uttarakhand circuit on this site can be run as its Kumaon half alone.',
        '**Rajasthan or Braj.** Delhi to Jaipur, Agra, Mathura and the Rajasthan circuits are entirely unaffected. It is the monsoon, so it is not the best season for the desert, but the roads are normal.',
        '**Himachal.** The Chandigarh-Shimla and Pathankot-Dharamshala corridors are unaffected by the yatra. They have their own monsoon considerations, which is a separate question and a separate page.',
        '**Garhwal from above.** If you are already in the hills, the yatra thins considerably above Rishikesh. Devprayag, Rudraprayag and the Char Dham road carry pilgrim traffic but not the pedestrian density of the Haridwar plain — though the monsoon is its own strong argument against that route in the same weeks.',
      ],
      link: { label: 'Weekend getaways from Nainital', href: '/weekend-getaways-from-nainital-by-car' },
    },
    {
      eyebrow: 'If you are going anyway',
      heading: 'Travelling into the yatra deliberately',
      paras: [
        'Some people want to be there for it, and that is a reasonable thing to want — it is an extraordinary sight, and Haridwar during Shravan is unlike Haridwar at any other time. If that is the plan rather than an accident, the arrangement is different.',
        'Travel on the quieter edges of the fortnight rather than the peak days around the final Monday of Shravan, which is the densest. Approach from the east through Najibabad rather than up the Muzaffarnagar corridor. Accept that the last stretch will be walked and plan where the car stops. And book accommodation a long way ahead, because the town is full.',
        'What we will not do is quote a time for a journey on the affected corridors during those weeks, because nobody can honestly give one. We will tell you what we expect, we will send a driver who has done it, and we will say plainly that the arrival time is an estimate rather than a plan.',
      ],
      link: { label: 'Haridwar sightseeing', href: '/sightseeing/haridwar' },
    },
  ],

  tips: [
    { title: 'Check the Shravan dates for your year first', text: 'They move with the lunar calendar. Everything else about planning around the yatra follows from knowing the fortnight.' },
    { title: 'Kumaon instead of Garhwal', text: 'Delhi to Nainital and Corbett on NH-9 is well east of the yatra corridors and largely unaffected. If the hills are fixed and the dates are fixed, go east.' },
    { title: 'The final Monday of Shravan is the peak', text: 'If you must travel in the fortnight, the edges are considerably better than the last few days.' },
    { title: 'Do not book a tight onward connection', text: 'A flight or train out of Delhi on the evening of a Haridwar departure is the arrangement most likely to fail.' },
    { title: 'Rajasthan and Himachal are unaffected', text: 'If the destination is flexible and the dates are not, the yatra is a reason to go west or north-west rather than to cancel.' },
  ],

  faqs: [
    { question: 'When is the Kanwar yatra and how long does it affect the roads?', answer: 'It runs through the Hindu month of Shravan, usually falling in late July into early August, with the heaviest period a fortnight and the peak around the final Monday of the month. The exact dates move each year with the lunar calendar, so they need checking for your year rather than assuming last year\'s.' },
    { question: 'Which roads are closed during the Kanwar yatra?', answer: 'The worst affected are Haridwar to Rishikesh, Haridwar to Delhi via Muzaffarnagar, and Delhi to Meerut. Those carry pedestrian traffic across the carriageway along with heavy-vehicle bans, reversed carriageways and outright closures of some stretches. Haridwar to Dehradun is moderate to severe. Delhi to Kumaon on NH-9, and all the Rajasthan and Himachal corridors, are largely or entirely unaffected.' },
    { question: 'Can I travel to Rishikesh during the Kanwar yatra?', answer: 'We would advise against it. The 25 km Haridwar-Rishikesh stretch is the densest part of the entire yatra and is normally a forty-five minute drive that becomes something no driver will put a time on. If your dates are fixed and the hills are the point, Kumaon — Nainital, Bhimtal, Corbett — is the better destination for those weeks.' },
    { question: 'Is the Delhi to Dehradun road affected by the Kanwar yatra?', answer: 'Yes, substantially, because the route runs through the Meerut and Muzaffarnagar corridor which is among the most heavily walked. Expect formal heavy-vehicle restrictions, reversed carriageways and diversions that can add considerable distance. Travel times on that corridor are not predictable in any useful sense during the fortnight.' },
    { question: 'Where can I go instead during the Kanwar yatra?', answer: 'Kumaon rather than Garhwal — Delhi to Nainital, Bhimtal, Mukteshwar and Jim Corbett on NH-9 is well east of the yatra. Rajasthan and the Braj towns are entirely unaffected. Himachal via Chandigarh or Pathankot is unaffected by the yatra, though it has its own monsoon considerations in the same weeks.' },
    { question: 'Can you still drive me to Haridwar during the yatra?', answer: 'Yes, and some people deliberately travel for it, which is a reasonable thing to want. What we will not do is quote an arrival time, because nobody can honestly give one on those corridors in those weeks. We will send a driver who has done it, approach from the east where that helps, plan where the car stops, and tell you plainly that the timing is an estimate rather than a plan.' },
  ],

  related: [
    { label: 'Haridwar sightseeing', href: '/sightseeing/haridwar' },
    { label: 'Weekend getaways from Haridwar', href: '/weekend-getaways-from-haridwar-by-car' },
    { label: 'Weekend getaways from Nainital', href: '/weekend-getaways-from-nainital-by-car' },
    { label: 'Monsoon and landslide risk on hill roads', href: '/monsoon-landslide-risk-hill-roads' },
    { label: 'The eight-day Uttarakhand hills circuit', href: '/uttarakhand-hills-circuit-by-car' },
    { label: 'Best time for Char Dham by road', href: '/best-time-for-char-dham-by-road' },
  ],
};
