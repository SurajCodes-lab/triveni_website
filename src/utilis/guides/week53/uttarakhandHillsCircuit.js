// Week 53 circuit 3 — "The Uttarakhand hills and lakes circuit by car: eight days"
//
// WHY THIS PAGE EXISTS
// Uttarakhand divides into two halves that most visitors treat as one trip and
// most itineraries handle badly. Garhwal in the west holds Mussoorie, Rishikesh
// and Haridwar; Kumaon in the east holds Nainital, the lakes and Corbett. They
// are 300 km and seven hours apart across the width of the state, and the road
// between them runs down to the plain and back up.
//
// Every individual page on the site covers one town. Nothing answers the
// question of how to do both halves in one trip, which is what somebody with
// eight days is actually planning.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'uttarakhand-hills-circuit-by-car',
  path: '/uttarakhand-hills-circuit-by-car',
  mood: 'hills',
  cluster: 'road',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Circuit guide · Uttarakhand',
  crumbs: [{ name: 'Uttarakhand tours', url: '/sightseeing/mussoorie' }],
  crumbName: 'Uttarakhand hills and lakes circuit by car',
  titleLead: 'Uttarakhand hills and lakes by car:',
  titleAccent: 'eight days, both halves of the state',
  title: 'Uttarakhand Hills and Lakes by Car: Eight Days, Garhwal and Kumaon',
  metaTitle: 'Uttarakhand Circuit by Car: 8 Days, Garhwal and Kumaon',
  metaDescription: 'The eight-day Uttarakhand circuit by car from Delhi: Haridwar, Rishikesh, Mussoorie, then across to Nainital and Jim Corbett. Day-by-day distances, real hill hours, night halts and the fare.',
  keywords: ['uttarakhand circuit by car', 'uttarakhand road trip itinerary', '8 day uttarakhand tour by car', 'mussoorie nainital corbett itinerary', 'garhwal kumaon tour by car', 'uttarakhand tour from delhi by car', 'rishikesh mussoorie nainital route'],
  heroImage: `${IMG}/Nainital/Naini_Lake.jpg`,
  heroAlt: 'Naini Lake at Nainital, the centre of the Kumaon half of the circuit',

  lead: 'Uttarakhand is two trips that look like one. Garhwal in the west — Haridwar, Rishikesh, Mussoorie — and Kumaon in the east — Nainital, the lakes, Corbett — are 300 km and seven hours apart, and the road between them drops to the plain at Haridwar and climbs again at Kathgodam. Eight days does both honestly: four in Garhwal, one crossing, three in Kumaon. About 1,500 km in all. A sedan bills ₹26,400 for the eight days on the 300 km per day minimum; an Innova Crysta ₹43,200.',

  keyFacts: [
    { label: 'The loop', value: '8 days · ~1,500 km' },
    { label: 'Driving days', value: '5 of 8' },
    { label: 'The crossing', value: 'Mussoorie → Nainital, 290 km · 7 hrs' },
    { label: 'Sedan, 8 days', value: '₹26,400' },
  ],
  stickyLabel: 'Uttarakhand circuit cab',
  stickyPrice: 'Sedan ₹26,400 · 8 days',
  waText: 'Hi, I want the eight-day Uttarakhand hills and lakes circuit by car. Dates and headcount to follow.',

  intro: [
    'The mistake most Uttarakhand itineraries make is treating the state as a single hill region. It is two, separated by the width of the Ganga plain, and the crossing between them is the longest day of any trip that does both. Pretending otherwise produces the classic eight-day plan with eleven hours of driving on day five.',
    'The circuit below goes west first — Haridwar and Rishikesh on the way up, Mussoorie for two nights — then crosses to Kumaon on a single committed driving day, and finishes with Nainital, the lakes and Corbett before an easy run home on NH-9. Garhwal first matters because the Kumaon half ends closer to Delhi.',
    'Distances and hours are from the site’s corridor data and from the drivers who run these roads. Fares follow the published rate card — sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km — on a 300 km per day minimum, with tolls, parking, Uttarakhand entry and the driver night allowance at actual.',
  ],

  timelineTitle: 'The circuit, day by day and kilometre by kilometre',
  timelineEyebrow: 'The loop',
  timelineIntro: 'Kilometre marks are cumulative from Delhi. Garhwal first, one long crossing, then Kumaon and home on the fast road.',
  timeline: [
    { km: 0, name: 'Day 1: Delhi to Haridwar', time: '5-6 hrs · 230 km', text: 'NH-334 through Meerut and Muzaffarnagar. Arrive by late afternoon and go straight to Har ki Pauri for the evening Ganga aarti, which is the whole reason to stop here rather than drive through. The ghats before dawn the next morning are a completely different place.', stop: 'Night: Haridwar', image: `${IMG}/Haridwar/Ganga_Aarti.jpg`, alt: 'The evening Ganga aarti at Har ki Pauri', tag: 'NH-334' },
    { km: 230, name: 'Day 2: Haridwar to Rishikesh', time: '1 hr · 25 km', text: 'The shortest driving day of the circuit, on purpose. Mansa Devi by ropeway in the morning, then 25 km to Rishikesh: the Lakshman Jhula and Ram Jhula footbridges, the Beatles ashram, and the Triveni Ghat aarti at dusk. Rafting slots run in the morning if you want them on day three.', stop: 'Night: Rishikesh', image: `${IMG}/Rishikesh/Laxman_Jhula.jpg`, alt: 'Lakshman Jhula footbridge over the Ganga at Rishikesh', tag: 'Short day' },
    { km: 255, name: 'Day 3: Rishikesh to Mussoorie', time: '2.5-3 hrs · 80 km', text: 'Rafting on the Shivpuri stretch in the morning if booked, then up through Dehradun and the 35 km climb to the ridge. The Mall is pedestrian for much of its length, so the car drops at Picture Palace or Library and the rest is walked.', stop: 'Night: Mussoorie', image: `${IMG}/Rishikesh/River_Rafting.jpg`, alt: 'Rafting on the Ganga between Shivpuri and Rishikesh', tag: 'The climb' },
    { km: 335, name: 'Day 4: Mussoorie', time: 'Local day · 50 km', text: 'Landour early, which is the quiet half of Mussoorie and gone by the time day visitors have walked up. Then Gun Hill, the Camel’s Back road for the Doon valley view, and Kempty Falls or Dhanaulti in the afternoon. Lal Tibba for the Himalayan line on a clear day.', stop: 'Night: Mussoorie', image: `${IMG}/Mussoorie/Lal_tibba.jpg`, alt: 'Lal Tibba above Mussoorie, looking at the Himalayan line', tag: 'Local' },
    { km: 385, name: 'Day 5: Mussoorie to Nainital', time: '7-8 hrs · 290 km', text: 'The crossing, and the hard day of the circuit. Down the 35 km to Dehradun, across the plain through Haridwar, Najibabad and Rudrapur, then the 35 km climb from Kathgodam. Leave by six. Nainital applies vehicle entry restrictions on peak weekends and the Mall is closed to traffic in the evening.', stop: 'Night: Nainital', image: `${IMG}/Nainital/Mall_Road_Nainital.jpg`, alt: 'The Mall along Naini Lake at Nainital', tag: 'The crossing' },
    { km: 675, name: 'Day 6: Nainital and the lakes', time: 'Local day · 70 km', text: 'Naini Lake and the Snow View cable car in the morning, Tiffin Top, then down to the quieter lake country — Bhimtal, Sattal and Naukuchiatal, twenty minutes below the town and a different proposition from the Mall. Naina Peak for anyone who walks.', stop: 'Night: Nainital', image: `${IMG}/Nainital/Bhimtal_Lake.jpg`, alt: 'Bhimtal, in the quieter lake country below Nainital', tag: 'Local' },
    { km: 745, name: 'Day 7: Nainital to Jim Corbett', time: '2-2.5 hrs · 65 km', text: 'A short drive to Ramnagar and the park. Safari zones run on booked slots at dawn and mid-afternoon, so arrive for the afternoon drive and take a dawn one the next morning. Resorts spread from Ramnagar through Dhikuli to the Kaladhungi road — tell us which one.', stop: 'Night: Jim Corbett', image: `${IMG}/Jim_Corbett/Tiger_Safari_Corbett.jpg`, alt: 'A safari in the Jim Corbett tiger reserve', tag: 'Permits first' },
    { km: 810, name: 'Day 8: Jim Corbett to Delhi', time: '6 hrs · 250 km', text: 'A dawn safari first if the permit allows, then NH-9 through Moradabad and back to Delhi. The easiest final day of any circuit on this site — fast plains highway all the way, and you are home by evening even after a morning in the park.', stop: 'Home', image: `${IMG}/Jim_Corbett/Ramganga_River.jpg`, alt: 'The Ramganga running through the Corbett reserve', tag: 'NH-9' },
    { km: 1060, name: 'Delhi', time: 'Evening of day 8', text: 'About 1,060 km on the loop with the local days counted, 1,500 with the detours and safari drives most people add. Eight days at the rate card, tolls, state entry and the night allowance at actual.', tag: 'End' },
  ],

  table: {
    title: 'The eight-day Uttarakhand circuit at a glance',
    caption: 'Day-by-day distance, real driving time, night halt and highlights of the Uttarakhand hills and lakes circuit by car from Delhi',
    intro: 'Hours are real driving hours including the hill sections. The three local days bill the 300 km per day minimum, which is why the eight-day fare is flat rather than the sum of the legs.',
    columns: [
      { key: 'day', label: 'Day' },
      { key: 'leg', label: 'From → to' },
      { key: 'km', label: 'Km', align: 'right' },
      { key: 'hrs', label: 'Hours' },
      { key: 'night', label: 'Night' },
      { key: 'see', label: 'What you see' },
    ],
    rows: [
      { day: '1', leg: 'Delhi → Haridwar', km: '230', hrs: '5–6', night: 'Haridwar', see: 'NH-334, the evening Ganga aarti' },
      { day: '2', leg: 'Haridwar → Rishikesh', km: '25', hrs: '1', night: 'Rishikesh', see: 'Mansa Devi, the footbridges, Triveni Ghat' },
      { day: '3', leg: 'Rishikesh → Mussoorie', km: '80', hrs: '2.5–3', night: 'Mussoorie', see: 'Rafting, Dehradun, the 35 km climb' },
      { day: '4', leg: 'Mussoorie local', km: '50', hrs: '2 driving', night: 'Mussoorie', see: 'Landour, Gun Hill, Lal Tibba, Dhanaulti' },
      { day: '5', leg: 'Mussoorie → Nainital', km: '290', hrs: '7–8', night: 'Nainital', see: 'The crossing: Garhwal to Kumaon' },
      { day: '6', leg: 'Nainital local', km: '70', hrs: '2.5 driving', night: 'Nainital', see: 'Naini Lake, Bhimtal, Sattal, Tiffin Top' },
      { day: '7', leg: 'Nainital → Jim Corbett', km: '65', hrs: '2–2.5', night: 'Corbett', see: 'Ramnagar, an afternoon safari' },
      { day: '8', leg: 'Corbett → Delhi', km: '250', hrs: '6', night: 'Home', see: 'Dawn safari, then NH-9' },
      { day: 'Total', leg: 'The loop', km: '~1,060', hrs: '~29 driving', night: '7 nights', see: 'Both halves of the state' },
    ],
    footnote: 'Fares for the eight days: Sedan ₹26,400, Ertiga ₹36,000, Innova Crysta ₹43,200, 12-seater Tempo Traveller ₹55,200. Tolls, parking, Uttarakhand entry and the driver night allowance at actual. Corbett safari permits are booked separately and should be fixed before the car.',
  },

  sections: [
    {
      eyebrow: 'The crossing',
      heading: 'Mussoorie to Nainital is the day that decides the trip',
      paras: [
        'Two hundred and ninety kilometres and seven to eight hours, and there is no shortcut. Garhwal and Kumaon are separated by the Ganga plain, so the road goes down from Mussoorie to Dehradun, across through Haridwar and Najibabad to Rudrapur, and then back up the 35 km from Kathgodam. Two hill descents and one hill climb with four hours of plain in between.',
        'The practical consequences are worth stating. Leave Mussoorie by six, not eight — the Dehradun descent is slow and the Kathgodam climb at the far end is slower if you reach it in the evening. Take lunch at Najibabad or Rudrapur rather than stopping twice. And do not plan anything in Nainital for that evening beyond dinner.',
        'The alternative, for anyone who would rather not spend a day in the car, is to treat Uttarakhand as two separate trips — four days in Garhwal from Delhi, and a separate four days in Kumaon. The Kumaon half is actually closer to Delhi than Mussoorie is.',
      ],
      link: { label: 'Weekend getaways from Mussoorie, including the Kumaon side', href: '/weekend-getaways-from-mussoorie-by-car' },
      image: { src: `${IMG}/Mussoorie/Mall_road.jpg`, alt: 'The Mall road at Mussoorie, pedestrian for much of its length', tag: 'Mussoorie', caption: 'Leaving Mussoorie on day five: the car waits at Picture Palace and the first twenty minutes are walked.' },
    },
    {
      eyebrow: 'The permits',
      heading: 'Corbett safaris have to be booked before the car',
      paras: [
        'This is the one item on the circuit that cannot be arranged on the day. Corbett safari permits are sold by the forest department per zone and per time slot — dawn and mid-afternoon — and the popular zones go weeks ahead, particularly between March and June and over long weekends. Dhikala, the deepest zone, needs its own overnight permit.',
        'The practical order is therefore: fix the Corbett permits for days seven and eight first, then build the rest of the circuit backwards from them. Doing it the other way round is how people end up at Ramnagar with no drive available.',
        'The park’s core zones close during the monsoon, roughly mid-June to mid-November, though Jhirna and Dhela stay open year round. If your dates fall in that window, say so and we will tell you honestly what is available rather than letting you plan around a closed gate.',
      ],
      link: { label: 'Jim Corbett sightseeing and safari zones', href: '/sightseeing/jim-corbett' },
    },
    {
      eyebrow: 'The variations',
      heading: 'What to cut at five days, and what to add at twelve',
      paras: [
        'At five days, pick one half. Garhwal — Haridwar, Rishikesh and Mussoorie from Delhi — is a comfortable five days and the drives are short. Kumaon — Nainital, the lakes and Corbett — is the same, and is slightly closer to Delhi. Attempting both in five days means the crossing eats a fifth of the trip.',
        'At twelve days, the additions depend on which half interests you. In Garhwal, add Chopta and the Tungnath walk, which is the best thing in the state and needs two nights, or the Char Dham gateway towns of Devprayag and Rudraprayag. In Kumaon, add Kausani and Binsar for the sunrise Himalayan views, and Almora with the Jageshwar temple cluster.',
        'What not to add is Auli or Munsiyari on a twelve-day loop that already does both halves. Each is eight to ten hours from the nearest town on this circuit and belongs to a trip built around it.',
      ],
      link: { label: 'Weekend getaways from Nainital, including Kausani and Binsar', href: '/weekend-getaways-from-nainital-by-car' },
    },
    {
      eyebrow: 'The season',
      heading: 'When to do this circuit, and the two windows to avoid',
      paras: [
        'March to June and September to November. The spring window is warmest and busiest, with Mussoorie and Nainital both filling to the point of vehicle entry restrictions on peak weekends. September to November is the better half of the year here — clear air, the best Himalayan views from Lal Tibba and Naina Peak, and far fewer people.',
        'The first window to avoid is the monsoon, July to mid-September. The hill roads carry landslide risk, the Mussoorie descent and the Kathgodam climb both slow considerably, and the Corbett core zones are closed. It is passable but the circuit loses its best features.',
        'The second is the Kanwar yatra, usually late July into August, which puts enormous pedestrian traffic on the Haridwar and Rishikesh roads and leads to extended vehicle diversions and closures. If your dates fall there, the Garhwal half of this circuit should be reconsidered rather than merely re-timed.',
      ],
      link: { label: 'Weekend getaways from Haridwar', href: '/weekend-getaways-from-haridwar-by-car' },
    },
  ],

  tips: [
    { title: 'Book Corbett first, then the car', text: 'Safari permits are zone- and slot-specific and go weeks ahead in season. Everything else on this circuit can be arranged around them; they cannot be arranged around anything.' },
    { title: 'Leave Mussoorie at six on day five', text: 'The crossing is seven to eight hours with two hill sections. Starting at eight means arriving at Nainital after dark and climbing from Kathgodam in the worst conditions of the day.' },
    { title: 'Both Malls are walked', text: 'Mussoorie’s Mall and Nainital’s lakeside Mall are closed to vehicles, the latter entirely in the evenings. The car drops at the permitted point; tell us your hotel and we will plan it.' },
    { title: 'Nainital caps entry on peak weekends', text: 'In April to June the town restricts vehicle entry on the busiest weekends. It is worth knowing before you plan a Saturday arrival.' },
    { title: 'The aarti and the dawn ghats are two different visits', text: 'At Haridwar, the evening aarti at Har ki Pauri and the same ghats at four in the morning are not the same experience. The night in Haridwar is what buys you both.' },
  ],

  faqs: [
    { question: 'How many days do you need to see both Garhwal and Kumaon?', answer: 'Eight, with five driving days and three local ones. The two halves of Uttarakhand are 290 km and seven to eight hours apart across the Ganga plain, so any trip doing both spends a full day on the crossing. At five days, pick one half — Garhwal from Delhi, or Kumaon, which is marginally closer.' },
    { question: 'How much does an eight-day Uttarakhand trip by car cost?', answer: 'Sedan ₹26,400, Ertiga ₹36,000, Innova Crysta ₹43,200 and a 12-seater Tempo Traveller ₹55,200 for the eight days, on the published rate card with its 300 km per day minimum. That covers the vehicle, the driver and fuel. Tolls, parking, Uttarakhand entry and the driver night allowance are at actual, and Corbett safari permits and hotels are separate.' },
    { question: 'Why is Mussoorie to Nainital so slow for 290 km?', answer: 'Because it is two hill sections with the Ganga plain in between. The road drops 35 km from Mussoorie to Dehradun, crosses four hours of plain through Haridwar, Najibabad and Rudrapur, then climbs 35 km from Kathgodam to Nainital. Neither hill section can be hurried, and the plain stretch carries heavy traffic around Haridwar.' },
    { question: 'Should I do Garhwal or Kumaon first?', answer: 'Garhwal first. It puts the longer drives at the start while the trip feels new, and it means the circuit finishes in Kumaon with Corbett and a straightforward six-hour run home on NH-9. Reversing it ends with a hill descent from Mussoorie on the last day, which is a worse finish.' },
    { question: 'When should I avoid the Uttarakhand circuit?', answer: 'The monsoon from July to mid-September, when the hill roads carry landslide risk and the Corbett core zones are closed, and the Kanwar yatra in Shravan — usually late July into August — which puts very heavy pedestrian traffic and road diversions on the Haridwar and Rishikesh sections. March to June and September to November are the windows.' },
    { question: 'Can I add Char Dham to this circuit?', answer: 'Not as an extension — it is a trip of its own. The four shrines run May to October on the Alaknanda and Bhagirathi roads above Rishikesh, and a proper Char Dham yatra is ten to twelve days before you add anything else. What does fit on this circuit is the gateway stretch: Devprayag and Rudraprayag make a day from Rishikesh and show you the confluences without committing to the shrines.' },
  ],

  related: [
    { label: 'Mussoorie sightseeing', href: '/sightseeing/mussoorie' },
    { label: 'Nainital sightseeing', href: '/sightseeing/nainital' },
    { label: 'Jim Corbett sightseeing', href: '/sightseeing/jim-corbett' },
    { label: 'Rishikesh sightseeing', href: '/sightseeing/rishikesh' },
    { label: 'Delhi to Haridwar distance and fare', href: '/distance/delhi-to-haridwar' },
    { label: 'Delhi to Nainital distance and fare', href: '/distance/delhi-to-nainital' },
    { label: 'Weekend getaways from Nainital', href: '/weekend-getaways-from-nainital-by-car' },
    { label: 'Monthly car rental in Nainital', href: '/monthly-car-rental-nainital' },
  ],
};
