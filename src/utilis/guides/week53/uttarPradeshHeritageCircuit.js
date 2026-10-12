// Week 53 circuit 6 — "The Uttar Pradesh heritage circuit by car: nine days"
//
// WHY THIS PAGE EXISTS
// Uttar Pradesh holds the Taj, the Braj temple towns, Awadhi Lucknow, Ayodhya,
// Prayagraj's confluence, Varanasi's ghats and Sarnath — and the site has good
// pages for each. What it has never had is the page that joins them, which is
// the one a visitor with nine days needs.
//
// The expressways are the reason this circuit is now worth publishing at all.
// The Yamuna, Agra-Lucknow and Purvanchal expressways between them have turned
// a fortnight of slow trunk roads into nine days of fast driving, and most
// itineraries online still assume the old timings.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'uttar-pradesh-heritage-circuit-by-car',
  path: '/uttar-pradesh-heritage-circuit-by-car',
  mood: 'heritage',
  cluster: 'road',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Circuit guide · Uttar Pradesh',
  crumbs: [{ name: 'Varanasi tours', url: '/sightseeing/varanasi' }],
  crumbName: 'Uttar Pradesh heritage circuit by car',
  titleLead: 'The Uttar Pradesh heritage circuit:',
  titleAccent: 'nine days on three expressways',
  title: 'The Uttar Pradesh Heritage Circuit by Car: Nine Days',
  metaTitle: 'UP Heritage Circuit by Car: 9 Days, ₹29,700',
  metaDescription: 'The nine-day Uttar Pradesh heritage circuit by car from Delhi: Mathura, Agra, Lucknow, Ayodhya, Prayagraj and Varanasi. What the expressways changed, day-by-day distances and the fare.',
  keywords: ['uttar pradesh heritage circuit', 'up tour by car itinerary', 'delhi agra lucknow varanasi by car', 'mathura agra ayodhya varanasi route', 'purvanchal expressway road trip', 'agra lucknow expressway itinerary', '9 day uttar pradesh tour'],
  heroImage: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`,
  heroAlt: 'The evening aarti at Dashashwamedh Ghat in Varanasi, the eastern end of the circuit',

  lead: 'Three expressways have changed this trip. The Yamuna Expressway puts Agra three and a half hours from Delhi, the Agra-Lucknow Expressway covers 340 km in under five, and the Purvanchal reaches Varanasi from Lucknow in five. That turns what used to be a fortnight on trunk roads into nine days: Mathura and Vrindavan, Agra, Lucknow, Ayodhya, Prayagraj and Varanasi, running west to east with a flight or train home. About 1,250 km of driving one way. A sedan bills ₹29,700 for the nine days on the 300 km per day minimum; an Innova Crysta ₹48,600.',

  keyFacts: [
    { label: 'The route', value: '9 days · ~1,250 km' },
    { label: 'Driving days', value: '5 of 9' },
    { label: 'Longest single leg', value: 'Agra → Lucknow, 340 km in 4.5 hrs' },
    { label: 'Sedan, 9 days', value: '₹29,700' },
  ],
  stickyLabel: 'UP heritage circuit cab',
  stickyPrice: 'Sedan ₹29,700 · 9 days',
  waText: 'Hi, I want the nine-day Uttar Pradesh heritage circuit by car from Delhi. Dates and headcount to follow.',

  intro: [
    'This is a one-way circuit rather than a loop, and that is deliberate. Driving back from Varanasi to Delhi is 820 km and a wasted day and a half; flying or taking the train from Varanasi and releasing the car there is the arrangement that makes the itinerary work. Tell us at the booking stage and the fare is quoted accordingly.',
    'The route runs west to east because that is the direction the expressways run and because it builds. Mathura and Agra are Mughal and Braj; Lucknow is Awadhi; Ayodhya and Prayagraj are pilgrimage; Varanasi is all of it at once and is the right place to finish rather than to start.',
    'Fares follow the published rate card — sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km — on a 300 km per day minimum, with tolls, parking and the driver night allowance at actual. The expressway tolls on this route are substantial and all three are FASTag-enabled.',
  ],

  timelineTitle: 'The circuit, day by day and kilometre by kilometre',
  timelineEyebrow: 'West to east',
  timelineIntro: 'Kilometre marks are cumulative from Delhi. The Yamuna Expressway, then the Agra-Lucknow, then the Purvanchal.',
  timeline: [
    { km: 0, name: 'Day 1: Delhi to Mathura and Vrindavan', time: '2.5-3 hrs · 160 km', text: 'The Yamuna Expressway to Mathura for the Krishna Janmabhoomi complex and Vishram Ghat, then 11 km to Vrindavan — Banke Bihari, the Prem Mandir and ISKCON. The temple lanes are not driveable and close to vehicles at peak darshan hours; the car stops on the parikrama marg.', stop: 'Night: Vrindavan', image: `${IMG}/Mathura_Vrindavan/Banke_Bihari_Temple.jpg`, alt: 'The Banke Bihari temple at Vrindavan', tag: 'Yamuna Expressway' },
    { km: 160, name: 'Day 2: Vrindavan to Agra', time: '1.5 hrs · 60 km', text: 'The mangala aarti at four in the morning if you are willing, which is the thing a day visitor from Delhi can never reach. Then 60 km to Agra: the Fort and Itmad-ud-Daulah in the afternoon, with the Taj kept for sunrise.', stop: 'Night: Agra', image: `${IMG}/Mathura_Vrindavan/Prem_Mandir.jpg`, alt: 'The Prem Mandir at Vrindavan', tag: 'Short day' },
    { km: 220, name: 'Day 3: Agra', time: 'Local day · 90 km', text: 'The Taj at opening, when the marble shifts colour for twenty minutes and the crowd is a fraction of mid-morning. Fatehpur Sikri 40 km west after breakfast, Sikandra and Mehtab Bagh for the evening view across the river. The Taj is closed on Fridays.', stop: 'Night: Agra', image: `${IMG}/Agra/Baby_Taj.jpg`, alt: 'Itmad-ud-Daulah, the Baby Taj, across the Yamuna from Agra', tag: 'Local' },
    { km: 310, name: 'Day 4: Agra to Lucknow', time: '4.5-5 hrs · 340 km', text: 'The Agra-Lucknow Expressway, six lanes and access-controlled for almost all of it — 340 km in under five hours, which used to be most of a day. Arrive for the afternoon at the Residency ruins and an evening in Hazratganj. The Awadhi food is not a side note here.', stop: 'Night: Lucknow', image: `${IMG}/Lucknow/British_Residency.jpg`, alt: 'The Residency ruins at Lucknow', tag: 'Agra-Lucknow Expressway' },
    { km: 650, name: 'Day 5: Lucknow', time: 'Local day · 50 km', text: 'The Bara Imambara and its labyrinth in the morning before the heat, the Chota Imambara and the Hussainabad clock tower, the Rumi Darwaza, and Hazratganj again in the evening because that is what Lucknow is for.', stop: 'Night: Lucknow', image: `${IMG}/Lucknow/Bara_Imambara.jpg`, alt: 'The Bara Imambara at Lucknow', tag: 'Local' },
    { km: 700, name: 'Day 6: Lucknow to Ayodhya', time: '2.5-3 hrs · 135 km', text: 'East to Ayodhya. The Ram Janmabhoomi complex involves security cordons and controlled vehicle access that changes with the expected crowd, so a driver who knows the current arrangement is worth more here than elsewhere. The Saryu ghats take an evening aarti.', stop: 'Night: Ayodhya', image: `${IMG}/Ayodhya/Ram_Mandir.jpg`, alt: 'The Ram Mandir complex at Ayodhya', tag: 'NH-27' },
    { km: 835, name: 'Day 7: Ayodhya to Prayagraj', time: '3.5-4 hrs · 165 km', text: 'South to the Triveni Sangam, where the Ganga and Yamuna meet. The confluence is a boat trip rather than a viewpoint and the two rivers show their different colours best in early light — so Anand Bhavan, Khusro Bagh and Akbar’s fort fill this afternoon and the boat goes at dawn.', stop: 'Night: Prayagraj', image: `${IMG}/Ayodhya/Saryu_River_Ghat.jpg`, alt: 'The Saryu ghats at Ayodhya', tag: 'NH-330' },
    { km: 1000, name: 'Day 8: Prayagraj to Varanasi', time: '2.5 hrs · 125 km', text: 'The sangam boat at sunrise, then the Purvanchal-side road to Varanasi. Arrive by afternoon and be at Dashashwamedh Ghat for the evening aarti, which is the single fixed appointment of the whole circuit.', stop: 'Night: Varanasi', image: `${IMG}/Varanasi/Assi_Ghat.jpg`, alt: 'Assi Ghat on the Ganga at Varanasi', tag: 'Expressway' },
    { km: 1125, name: 'Day 9: Varanasi and Sarnath', time: 'Local day · 40 km', text: 'A boat on the river at sunrise, which with the previous evening’s aarti is the pair of experiences Varanasi is actually for. The Kashi Vishwanath corridor and the ghat walk in the morning, then Sarnath 10 km out, where the Buddha gave his first sermon. Fly or take the train home.', stop: 'Varanasi', image: `${IMG}/Varanasi/Sarnath.jpg`, alt: 'The stupa at Sarnath outside Varanasi', tag: 'End' },
  ],

  table: {
    title: 'The nine-day Uttar Pradesh circuit at a glance',
    caption: 'Day-by-day distance, driving time, night halt and highlights of the Uttar Pradesh heritage circuit by car from Delhi',
    intro: 'Distances from the site’s corridor data. The four local days bill the 300 km per day minimum, which is why the nine-day fare is flat rather than the sum of the legs.',
    columns: [
      { key: 'day', label: 'Day' },
      { key: 'leg', label: 'From → to' },
      { key: 'km', label: 'Km', align: 'right' },
      { key: 'hrs', label: 'Hours' },
      { key: 'night', label: 'Night' },
      { key: 'see', label: 'What you see' },
    ],
    rows: [
      { day: '1', leg: 'Delhi → Mathura → Vrindavan', km: '160', hrs: '2.5–3', night: 'Vrindavan', see: 'Janmabhoomi, Banke Bihari, Prem Mandir' },
      { day: '2', leg: 'Vrindavan → Agra', km: '60', hrs: '1.5', night: 'Agra', see: 'Mangala aarti, Agra Fort, Baby Taj' },
      { day: '3', leg: 'Agra local', km: '90', hrs: '2.5 driving', night: 'Agra', see: 'Taj at sunrise, Fatehpur Sikri, Mehtab Bagh' },
      { day: '4', leg: 'Agra → Lucknow', km: '340', hrs: '4.5–5', night: 'Lucknow', see: 'Agra-Lucknow Expressway, Residency' },
      { day: '5', leg: 'Lucknow local', km: '50', hrs: '2 driving', night: 'Lucknow', see: 'Bara Imambara, Rumi Darwaza, Hazratganj' },
      { day: '6', leg: 'Lucknow → Ayodhya', km: '135', hrs: '2.5–3', night: 'Ayodhya', see: 'Ram Janmabhoomi, Saryu aarti' },
      { day: '7', leg: 'Ayodhya → Prayagraj', km: '165', hrs: '3.5–4', night: 'Prayagraj', see: 'Anand Bhavan, Khusro Bagh, the fort' },
      { day: '8', leg: 'Prayagraj → Varanasi', km: '125', hrs: '2.5', night: 'Varanasi', see: 'Sangam at dawn, Dashashwamedh aarti' },
      { day: '9', leg: 'Varanasi local', km: '40', hrs: '1.5 driving', night: 'Varanasi', see: 'Sunrise boat, Vishwanath, Sarnath' },
      { day: 'Total', leg: 'West to east', km: '~1,125', hrs: '~24 driving', night: '8 nights', see: 'Six cities on three expressways' },
    ],
    footnote: 'Fares for the nine days: Sedan ₹29,700, Ertiga ₹40,500, Innova Crysta ₹48,600, 12-seater Tempo Traveller ₹62,100. One-way, with the car released at Varanasi. Tolls — substantial on this route and all FASTag-enabled — parking and the driver night allowance at actual.',
  },

  sections: [
    {
      eyebrow: 'What changed',
      heading: 'Three expressways, and why old itineraries get this trip wrong',
      paras: [
        'Most Uttar Pradesh itineraries online still assume trunk-road timings, and they are wrong by hours rather than minutes. Agra to Lucknow was a long, hard day on NH-19 through Etawah and Kanpur; on the Agra-Lucknow Expressway it is 340 km in four and a half to five hours of six-lane, access-controlled driving. Lucknow to Varanasi was similar; the Purvanchal has made it five.',
        'The Yamuna Expressway does the same at the western end. Delhi to Agra is 230 km and three and a half hours, with Mathura and Vrindavan directly on the way rather than a detour from it. That is why day one of this circuit can comfortably reach Vrindavan and day two only needs 60 km.',
        'The practical consequence is that this is a nine-day itinerary rather than a fourteen-day one, and that five of the nine days involve under three hours of driving. The expressways have not made Uttar Pradesh smaller; they have made it possible to spend the time in the cities instead of between them.',
      ],
      link: { label: 'Agra to Lucknow distance and fare', href: '/distance/agra-to-lucknow' },
      image: { src: `${IMG}/Agra/Agra_Hero_section.jpg`, alt: 'Agra Fort on the Yamuna', tag: 'Agra', caption: 'Agra sits between two expressways, which is what makes day three a local day rather than a travel one.' },
    },
    {
      eyebrow: 'One way',
      heading: 'Why you should release the car at Varanasi rather than drive home',
      paras: [
        'Varanasi to Delhi is 820 km and twelve to thirteen hours even on the expressways. On a nine-day trip that is a wasted day and a half at the end, driving back past places you have already seen, and it is the single commonest way this itinerary gets spoiled.',
        'Varanasi has an airport 25 km out at Babatpur with good domestic connections and the station is central and well served. Flying or taking the train home and releasing the car at Varanasi is what nearly all of our bookings on this route do, and the fare is quoted for the one-way journey rather than the round trip. Tell us at the booking stage, because it changes the quote.',
        'If a round trip is unavoidable, the better version is to break the return at Lucknow rather than push through, and to use the second half of the return day for Kanpur or Bithoor rather than driving nine hours in silence.',
      ],
      link: { label: 'Varanasi sightseeing', href: '/sightseeing/varanasi' },
    },
    {
      eyebrow: 'The timings',
      heading: 'Four fixed appointments that shape the whole itinerary',
      paras: [
        'The Taj at sunrise on day three. For about twenty minutes after the gates open the marble moves through pink and cream, and the crowd is a small fraction of what it is by nine. It is also closed on Fridays, which should be planned around rather than discovered.',
        'The Vrindavan mangala aarti at four in the morning on day two, which is the single thing a day visitor from Delhi cannot reach and the reason the night at Vrindavan is on the itinerary at all.',
        'The sangam boat at dawn on day eight. The Ganga and the Yamuna run visibly different colours at the confluence and the difference shows in early light and washes out by midday. A midday boat is a boat ride; a dawn one is the reason to stop at Prayagraj.',
        'And the Dashashwamedh aarti on the evening of day eight, with the sunrise boat the following morning. Those two are the pair that Varanasi is for, they are at opposite ends of the day, and the itinerary is built so you get both.',
      ],
      link: { label: 'Weekend getaways from Varanasi', href: '/weekend-getaways-from-varanasi-by-car' },
    },
    {
      eyebrow: 'The variations',
      heading: 'Six days if that is all you have, and what to add at twelve',
      paras: [
        'At six days, cut the middle. Delhi, Mathura and Vrindavan, Agra, then fly or train to Varanasi and take Sarnath and the ghats properly. It drops Lucknow, Ayodhya and Prayagraj, which is a real loss, but it keeps both ends of the circuit intact rather than rushing all six cities.',
        'At twelve days, add Bodh Gaya and the Buddhist circuit east of Varanasi — the Mahabodhi temple at dawn is comparable to anything on this itinerary — plus Khajuraho south of Jhansi if temple carving interests you, and Dudhwa or Katarniaghat north of Lucknow if the Terai wildlife does.',
        'What we would not add is more temple towns. Chitrakoot, Naimisharanya and Shravasti are each worth a visit and each adds a travel day for a half-day of sightseeing, and a twelve-day itinerary with nine cities is a fortnight of packing rather than a trip.',
      ],
      link: { label: 'Weekend getaways from Lucknow, including Dudhwa and Chitrakoot', href: '/weekend-getaways-from-lucknow-by-car' },
    },
  ],

  tips: [
    { title: 'Quote it one way', text: 'Releasing the car at Varanasi and flying or training home saves a day and a half. Say so at the booking stage, because a one-way quote and a round-trip quote are different figures.' },
    { title: 'The Taj is closed on Fridays', text: 'Plan the Agra night so the sunrise visit does not land on a Friday. Everything else in Agra is open, but the monument you came for is not.' },
    { title: 'Temple lanes are walked', text: 'Vrindavan around Banke Bihari, the Varanasi ghats and the Ayodhya complex all restrict or prohibit vehicles. The car stops at the nearest permitted point — tell us where you are staying and we will plan each drop.' },
    { title: 'Ayodhya access changes day to day', text: 'The Ram Janmabhoomi complex applies security cordons and vehicle restrictions that vary with the expected crowd. A driver who knows the current arrangement saves a long walk from the wrong side.' },
    { title: 'Budget for the expressway tolls', text: 'The Yamuna, Agra-Lucknow and Purvanchal expressways all carry substantial tolls, charged at actual on top of the fare. All three are FASTag-enabled, so the plazas themselves are quick.' },
  ],

  faqs: [
    { question: 'How many days do you need for an Uttar Pradesh heritage circuit?', answer: 'Nine, running west to east from Delhi to Varanasi — five driving days and four local ones. The three expressways have made that possible; older itineraries assuming trunk roads suggest twelve to fourteen. At six days, keep Mathura, Agra and Varanasi and drop the middle three cities rather than rushing all six.' },
    { question: 'How much does a nine-day Uttar Pradesh trip by car cost?', answer: 'Sedan ₹29,700, Ertiga ₹40,500, Innova Crysta ₹48,600 and a 12-seater Tempo Traveller ₹62,100 for the nine days, on the published rate card with its 300 km per day minimum. That is the one-way figure with the car released at Varanasi. Tolls — substantial on these expressways — parking and the driver night allowance are at actual; hotels and monument tickets are separate.' },
    { question: 'Should I drive back from Varanasi to Delhi?', answer: 'We would advise against it. Varanasi to Delhi is 820 km and twelve to thirteen hours, which on a nine-day trip is a wasted day and a half driving past what you have already seen. Varanasi has an airport 25 km out and a central, well-served station. Flying or taking the train and releasing the car there is what most of our bookings do.' },
    { question: 'How long is Agra to Lucknow by car now?', answer: 'Four and a half to five hours for 340 km on the Agra-Lucknow Expressway, which is six-lane and access-controlled for almost all of it. That is the single biggest change to this itinerary — on the old NH-19 route through Etawah and Kanpur it was most of a day. Services along the expressway are limited, so the driver plans one proper stop.' },
    { question: 'What is the best time of year for this circuit?', answer: 'October to March. The Uttar Pradesh plain is severe from April to June, frequently above 43 degrees, which makes the Agra and Varanasi walking days genuinely unpleasant. Winter brings fog that can delay early starts, particularly in December and January on the expressways — worth knowing if a sunrise appointment matters.' },
    { question: 'Can I add Bodh Gaya or Khajuraho to this circuit?', answer: 'Both, at twelve days. Bodh Gaya is five hours east of Varanasi and the Mahabodhi temple between five and seven in the morning is comparable to anything on this itinerary. Khajuraho is seven hours south of Agra or Lucknow and needs two nights of its own for the three temple groups. Either works as an extension; both together make it a fortnight.' },
  ],

  related: [
    { label: 'Varanasi sightseeing', href: '/sightseeing/varanasi' },
    { label: 'Agra sightseeing', href: '/sightseeing/agra' },
    { label: 'Lucknow sightseeing', href: '/sightseeing/lucknow' },
    { label: 'Mathura sightseeing', href: '/sightseeing/mathura' },
    { label: 'Delhi to Agra distance and fare', href: '/distance/delhi-to-agra' },
    { label: 'Agra to Lucknow distance and fare', href: '/distance/agra-to-lucknow' },
    { label: 'Weekend getaways from Varanasi', href: '/weekend-getaways-from-varanasi-by-car' },
    { label: 'Monthly car rental in Varanasi', href: '/monthly-car-rental-varanasi' },
  ],
};
