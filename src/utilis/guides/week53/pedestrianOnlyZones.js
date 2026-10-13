// Week 53 answer-proof guide 20 — "Where the car cannot go: pedestrian zones and
// trip planning"
//
// WHY THIS SHAPE
// A logistics question that nothing on the internet answers as a list, and one
// this business has unusually good knowledge of because every driver deals with
// it daily. It is also the single most common cause of a surprised passenger —
// somebody who booked a car to a hotel on the Shimla Mall and did not know the
// Mall has no cars on it.

export const guide = {
  slug: 'pedestrian-only-zones-trip-planning',
  path: '/pedestrian-only-zones-trip-planning',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Logistics guide · Access',
  crumbs: [{ name: 'Rate card and routes', url: '/routes' }],
  crumbName: 'Where the car cannot go',
  titleLead: 'Where the car cannot go:',
  titleAccent: 'the pedestrian zones that shape an itinerary',
  title: 'Where the Car Cannot Go: Pedestrian Zones and Trip Planning',
  metaTitle: 'Where Cars Cannot Go: India Pedestrian Zones by Town',
  metaDescription: 'The towns and temple quarters in north India where vehicles cannot reach — Shimla and Mussoorie Malls, Vrindavan lanes, Varanasi ghats, Pushkar, Jaisalmer fort — and how to plan the drop points.',
  keywords: ['shimla mall road no cars', 'can cars go on mussoorie mall road', 'vrindavan temple lane vehicle', 'varanasi ghats by car', 'pushkar vehicle access', 'pedestrian zone india town', 'where does the taxi drop in shimla'],
  heroImage: '/images/sightseeing/Shimla/Mall_Road.jpg',
  heroAlt: 'The Mall at Shimla, closed to vehicles along its length',

  lead: 'A surprising number of the places people most want to reach by car cannot be reached by car. Shimla\'s Mall and Ridge are pedestrian. So is much of Mussoorie\'s. Nainital\'s lakeside Mall closes to traffic in the evenings. The lanes around Banke Bihari in Vrindavan take no vehicles and close entirely at peak darshan. The Varanasi ghats are reached on foot through lanes no car fits. Pushkar is walked. Jaisalmer fort is largely closed to traffic. None of that is a problem if you know it when you book; all of it is a problem if you find out at the kerb with luggage.',

  keyFacts: [
    { label: 'Fully pedestrian', value: 'Shimla Mall, Pushkar centre' },
    { label: 'Lanes too narrow', value: 'Vrindavan, Varanasi, old Bikaner' },
    { label: 'Time-restricted', value: 'Nainital Mall, Vrindavan darshan hours' },
    { label: 'What to tell us', value: 'The hotel name, not just the town' },
  ],
  stickyLabel: 'Chauffeur-driven cab',
  stickyPrice: 'Fare fixed before travel',
  waText: 'Hi, I would like to know where the car can drop at my hotel and what is walked.',

  intro: [
    'Every driver who works these towns deals with this daily and none of it is written down anywhere a traveller would find it. The result is a predictable conversation at the end of a long drive: "can you take us to the hotel?" — "the car stops here; the hotel is eight minutes that way on foot."',
    'That conversation is fine when it is expected and bad when it is not, particularly with luggage, in the rain, or with an elderly parent. The fix is entirely about knowing in advance.',
    'The table below is the towns and quarters where it applies. The sections after it cover what to do about each kind of restriction, because they are not all the same problem.',
  ],

  table: {
    title: 'Where vehicles stop, town by town',
    caption: 'Pedestrian and vehicle-restricted zones across north India, with where the car drops and what remains on foot',
    intro: 'The middle column is what to tell a driver. The right column is what to plan for.',
    columns: [
      { key: 'place', label: 'Place' },
      { key: 'drop', label: 'The car drops at' },
      { key: 'then', label: 'Then' },
      { key: 'kind', label: 'Restriction' },
    ],
    rows: [
      { place: 'Shimla Mall and Ridge', drop: 'Cart Road, Victory Tunnel or the lift', then: 'The lift, or a walk up', kind: 'Permanent' },
      { place: 'Mussoorie Mall', drop: 'Picture Palace or Library end', then: 'The Mall on the flat', kind: 'Permanent along much of it' },
      { place: 'Nainital Mall', drop: 'Tallital or Mallital', then: 'Flat along the lake', kind: 'Evening closure in season' },
      { place: 'Vrindavan, Banke Bihari lanes', drop: 'The parikrama marg', then: 'Walk or e-rickshaw, ~10 min', kind: 'Narrow; closed at peak darshan' },
      { place: 'Varanasi ghats and old city', drop: 'Godowlia, Dashashwamedh road or Assi', then: 'Lanes on foot, then ghat steps', kind: 'Permanent — no car fits' },
      { place: 'Pushkar lake and bazaar', drop: 'The edge of town', then: 'The whole centre on foot', kind: 'Permanent' },
      { place: 'Jaisalmer fort', drop: 'The fort car park', then: 'Inside on foot', kind: 'Largely restricted' },
      { place: 'Bikaner old city, Rampuria havelis', drop: 'The nearest accessible lane', then: 'Havelis on foot', kind: 'Narrow lanes' },
      { place: 'Jodhpur old city', drop: 'The wall, near the stepwell', then: 'The bazaar on foot', kind: 'Narrow; partly undriveable' },
      { place: 'Udaipur old town', drop: 'Near Jagdish temple', then: 'Lanes on foot; boats to lake hotels', kind: 'Narrow and partly pedestrian' },
      { place: 'Ajmer Dargah', drop: 'Dargah Bazaar edge', then: 'A few minutes on foot', kind: 'Closed near the entrance' },
      { place: 'Amritsar Golden Temple', drop: 'The plaza edge', then: 'Heritage Street on foot, flat', kind: 'Pedestrianised approach' },
      { place: 'Haridwar Har ki Pauri', drop: 'Nearby; further at aarti', then: 'A short walk to the ghats', kind: 'Restricted at aarti times' },
      { place: 'Mount Abu Nakki Lake area', drop: 'Close by', then: 'Short walks', kind: 'Mostly accessible' },
      { place: 'McLeod Ganj centre', drop: 'Main square or bus stand', then: 'Guesthouse lanes on foot', kind: 'Very limited parking' },
    ],
    footnote: 'Restrictions change, particularly the time-based ones, and some are tightened during festivals — the Vrindavan lanes around Holi and the Haridwar ghats during the Kanwar yatra are both far more restricted than usual. Our drivers know the current position for the town they work; tell us the property and we will plan the drop.',
  },

  sections: [
    {
      eyebrow: 'Three kinds',
      heading: 'The restrictions are not all the same problem',
      paras: [
        '**Permanent pedestrianisation** — Shimla\'s Mall, Pushkar\'s centre, the Varanasi old city. These are fixed and planning around them is simple: the car has a known drop point and the rest is walked, every day, for everybody. Choose a hotel accordingly, or accept the walk.',
        '**Lanes too narrow for a vehicle** — Vrindavan, Jodhpur\'s old city, the Rampuria havelis in Bikaner. Not a rule but a physical fact, and it means an e-rickshaw or a cycle rickshaw is usually the answer for the last stretch rather than walking the whole way. In Vrindavan the e-rickshaws are the transport system.',
        '**Time-based restriction** — Nainital\'s evening closure, Vrindavan at peak darshan hours, Haridwar at aarti. These are the ones that catch people out most, because the same road is driveable at eleven in the morning and not at six in the evening. A driver who works the town knows; a map does not.',
      ],
      link: { label: 'The Kanwar yatra and the roads', href: '/kanwar-yatra-road-closures' },
    },
    {
      eyebrow: 'What to do',
      heading: 'Four things that make this a non-issue',
      paras: [
        '**Tell us the hotel name, not just the town.** This is the whole fix and it takes one line in a WhatsApp message. "Shimla" tells us nothing about the drop; "Hotel X on the Ridge" tells us to plan for the lift, and "Hotel Y on the Cart Road" tells us we can reach the door. The worst surface and the longest walk on an entire trip are usually the last three hundred metres to a specific property.',
        '**Ask about luggage specifically.** A ten-minute walk is nothing; a ten-minute walk with four suitcases up a slope is a different matter. Many hotels in these towns run porters or handcarts from the drop point and will send one if asked in advance. Tell us and we will ask.',
        '**Use the local transport that exists.** Shimla\'s lift, Vrindavan\'s e-rickshaws, Varanasi\'s boats to the ghats, the Nainital cable car. Each of these exists precisely because cars cannot go there, and each is better than walking.',
        '**Plan the arrival time around a time-based restriction.** Arriving in Nainital at four in the afternoon rather than seven in the evening means the car reaches further. Arriving in Vrindavan outside peak darshan means the same.',
      ],
      link: { label: 'Travelling with elderly parents by cab', href: '/travelling-with-elderly-parents-by-cab' },
    },
    {
      eyebrow: 'The upside',
      heading: 'Why these towns are better for it',
      paras: [
        'Worth saying, because this page could read as a list of obstacles. The pedestrian towns are pedestrian for a reason, and they are almost all better than they would be with traffic on them.',
        'Shimla\'s Ridge works as a public space because there are no cars on it. Pushkar is walkable in a way that makes a day there slow and good. Varanasi\'s lanes are the point of Varanasi. Vrindavan at four in the morning with no engines running is the thing people travel for.',
        'The practical consequence is simply that the car is for getting between towns rather than within them, which is how a chauffeur-driven trip in north India mostly works anyway. On the Rajasthan circuit, four of the ten days are local days where the car covers 40 to 90 km and waits a lot — and some of that waiting is at the edge of a town you are walking through.',
      ],
      link: { label: 'The ten-day Rajasthan grand circuit', href: '/rajasthan-grand-circuit-by-car' },
    },
  ],

  tips: [
    { title: 'Send the hotel name when you book', text: 'One line. It is the difference between a planned drop and a conversation at the kerb with luggage.' },
    { title: 'Shimla: use the lift', text: 'The car cannot reach the Mall. The lift from the Cart Road is the way up and most first-time visitors walk it instead.' },
    { title: 'Vrindavan: e-rickshaw, not walking', text: 'The lanes are the local transport system\'s domain. From the parikrama marg an e-rickshaw gets you far closer than your feet will.' },
    { title: 'Time your Nainital arrival before evening', text: 'The lakeside Mall closes to traffic in the evenings in season, so a four o\'clock arrival reaches further than a seven o\'clock one.' },
    { title: 'Ask the hotel for a porter in advance', text: 'Many properties in these towns run handcarts from the drop point. They will send one if asked, and will not if not.' },
  ],

  faqs: [
    { question: 'Can a car go on Shimla Mall Road?', answer: 'No. The Mall and the Ridge are closed to vehicles along their length, so the car drops at the Cart Road, Victory Tunnel or the lift, and the rest is walked or taken by the lift. This is permanent rather than seasonal. Tell us your hotel name and we will plan the nearest drop, which for properties on the Cart Road is the door.' },
    { question: 'Can taxis reach Mussoorie Mall Road?', answer: 'Not along most of it. The Mall is pedestrian for much of its length, so the car drops at the Picture Palace or Library end depending on where you are staying. The Mall itself is level, which makes the walk easier than in Shimla. Hotels in Landour and on the Dehradun side usually have direct vehicle access.' },
    { question: 'How do I reach the Varanasi ghats by car?', answer: 'You do not — the old city lanes take no vehicles at all. The car drops at Godowlia, the Dashashwamedh road or Assi, and the ghats are reached on foot through the lanes and then down the steps. A boat is the other way in and is often the better one, particularly for the sunrise trip or for anyone who finds the steps difficult.' },
    { question: 'Can the car drop me at Banke Bihari temple in Vrindavan?', answer: 'At the parikrama marg, not at the temple. The lanes around Banke Bihari are narrow and are closed to vehicles entirely at peak darshan hours. From the drop point an e-rickshaw gets you considerably closer than walking — they are the local transport system and the right answer here. Allow about ten minutes.' },
    { question: 'Why can cars not reach my hotel in these towns?', answer: 'Three different reasons. Some streets are permanently pedestrianised — Shimla\'s Mall, Pushkar\'s centre. Some lanes are simply too narrow for a vehicle — Vrindavan, old Jodhpur, the Bikaner havelis. And some are time-restricted, driveable at eleven in the morning and closed at six in the evening, like Nainital\'s lakeside Mall in season.' },
    { question: 'What should I tell the cab company to avoid this?', answer: 'The hotel name rather than just the town, and the number of bags. Those two lines let us plan the nearest vehicle point, tell you in advance what is walked, and ask the hotel to send a porter or handcart if they run one. The longest walk on an entire trip is usually the last three hundred metres to a specific property.' },
  ],

  related: [
    { label: 'Travelling with elderly parents by cab', href: '/travelling-with-elderly-parents-by-cab' },
    { label: 'Luggage capacity by vehicle', href: '/luggage-capacity-by-vehicle' },
    { label: 'The Kanwar yatra and the roads', href: '/kanwar-yatra-road-closures' },
    { label: 'The nine-day Himachal grand circuit', href: '/himachal-grand-circuit-by-car' },
    { label: 'The ten-day Rajasthan grand circuit', href: '/rajasthan-grand-circuit-by-car' },
    { label: 'Weekend getaways from Varanasi', href: '/weekend-getaways-from-varanasi-by-car' },
  ],
};
