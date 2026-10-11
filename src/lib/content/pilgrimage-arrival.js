// How visitors actually arrive for each pilgrimage, written per tour.
//
// The Week 51 family audit found "how to reach" addressed on 0% of the thirteen
// religious-tour pages. For a pilgrimage that is close to the first question a
// traveller asks, and it is the question a cab company is best placed to answer:
// the airport and railhead are where our journey begins.
//
// Each entry is specific to its own yatra. Distances are approximate road
// distances and are described as such — they are planning figures, not promises.
// `onward` links are checked against the build manifest before rendering, so a
// link here can never point at a page that was not built.
export const pilgrimageArrival = {
  'char-dham-yatra': {
    airport: ['Jolly Grant Airport, Dehradun', 'about 35 km from Rishikesh and 40 km from Haridwar — the usual road start for the circuit'],
    railhead: ['Haridwar Junction', 'the practical railhead; Rishikesh station is smaller and served by fewer trains'],
    roadNote: 'The yatra itself is a road journey from Haridwar or Rishikesh. Flights and trains only get you to the trailhead, so fix the arrival time first and build the circuit around it — the four dhams are 10 to 12 days once you are moving, and the hill sections do not reward a late start.',
    registration: 'Uttarakhand requires yatra registration, and Kedarnath and Hemkund have their own trek or pony arrangements. Confirm these separately from your transport.',
    onward: [['Delhi to Haridwar cab', '/delhi-to-haridwar'], ['Haridwar travel guide', '/haridwar-travel-guide']],
  },
  'haridwar-rishikesh-ganga-darshan': {
    airport: ['Jolly Grant Airport, Dehradun', 'roughly 20 km from Rishikesh and 35 km from Haridwar'],
    railhead: ['Haridwar Junction', 'in the town itself, walking distance from Har Ki Pauri in light traffic'],
    roadNote: 'Both towns are an easy same-day road trip from Delhi — around 230 km to Haridwar. Arriving by road lets you reach Har Ki Pauri before the evening Ganga Aarti, which is the point of the visit for most travellers.',
    registration: 'No registration is needed for Haridwar or Rishikesh. Aarti seating is first-come; arrive well before sunset.',
    onward: [['Delhi to Haridwar cab', '/delhi-to-haridwar'], ['Delhi to Rishikesh cab', '/delhi-to-rishikesh']],
  },
  'vaishno-devi-yatra': {
    airport: ['Jammu Airport (Satwari)', 'about 50 km from Katra, the base town'],
    railhead: ['Shri Mata Vaishno Devi Katra', 'the closest station, in Katra itself; Jammu Tawi is the larger alternative about 50 km away'],
    roadNote: 'The shrine is reached on foot from Katra — roughly 12 km of marked track from Banganga. Vehicles go no further than Katra, so plan a cab to Katra and the climb separately. Helicopter and battery-car services operate from Katra and are booked independently.',
    registration: 'A free yatra parchi (travel slip) is required before starting the climb and is issued at Katra. Carry photo ID for every member of the group.',
    onward: [['Kashmir travel guide', '/kashmir-travel-guide'], ['Amritsar travel guide', '/amritsar-travel-guide']],
  },
  'kashi-vishwanath-darshan': {
    airport: ['Lal Bahadur Shastri International Airport, Varanasi', 'about 25 km from the ghats, and the drive into the old city is slow'],
    railhead: ['Varanasi Junction (Cantt)', 'the main station; Banaras station is a quieter alternative'],
    roadNote: 'The temple sits inside the old city, where lanes are too narrow for cars. Your vehicle will stop at a drop point and the last stretch is on foot. Agree that point with the driver before you set off, and keep a contact number — phones are not permitted inside the temple complex.',
    registration: 'No registration, but security is strict and phones, cameras and bags must be deposited outside. Allow time for the queue and for collecting belongings afterwards.',
    onward: [['Varanasi travel guide', '/varanasi-travel-guide'], ['Varanasi to Ayodhya cab', '/varanasi-to-ayodhya']],
  },
  'mathura-vrindavan-barsana-tour': {
    airport: ['Indira Gandhi International, Delhi', 'about 150 km by the Yamuna Expressway; Agra is a similar distance from the other direction'],
    railhead: ['Mathura Junction', 'well served on the Delhi–Mumbai and Delhi–Agra lines'],
    roadNote: 'Mathura, Vrindavan and Barsana are three separate towns spread across roughly 50 km, so this is a trip that only works with a vehicle retained for the day. A station drop alone leaves you negotiating local transport between temples.',
    registration: 'No registration. Temple timings vary by shrine and most close for a midday break — build the day around the morning and evening darshan windows.',
    onward: [['Delhi to Mathura cab', '/delhi-to-mathura'], ['Mathura–Vrindavan travel guide', '/mathura-vrindavan-travel-guide']],
  },
  'ayodhya-ram-mandir-yatra': {
    airport: ['Maharishi Valmiki International Airport, Ayodhya', 'about 10 km from Ram Mandir; Lucknow is the fallback, roughly 140 km away'],
    railhead: ['Ayodhya Dham Junction', 'rebuilt and close to the temple complex'],
    roadNote: 'Ayodhya is compact enough to walk in parts, but the wider circuit — Hanuman Garhi, Kanak Bhawan, Ram Ki Paidi — is spread out and most groups keep a vehicle for the day. If you are coming from Lucknow it is a comfortable half-day drive each way.',
    registration: 'No registration for general darshan, but phones and bags are not allowed inside and deposit counters get busy. Aarti passes are arranged separately from transport.',
    onward: [['Lucknow to Ayodhya cab', '/lucknow-to-ayodhya'], ['Ayodhya travel guide', '/ayodhya-travel-guide']],
  },
  'amarnath-yatra': {
    airport: ['Srinagar International Airport', 'about 90 km from Pahalgam and 100 km from Baltal, the two base camps'],
    railhead: ['Jammu Tawi', 'the nearest usable railhead, roughly 250 km from the base camps'],
    roadNote: 'The cave is reached only on foot or by pony from Chandanwari (the Pahalgam route, longer and gentler) or Baltal (shorter and much steeper). Vehicles stop at the base camp. Decide which route suits your group before booking transport, because they start from different places.',
    registration: 'Registration and a compulsory health certificate are required, and the yatra runs only for a short season each year. Confirm your dates against the official schedule before arranging anything.',
    onward: [['Srinagar sightseeing and transport', '/srinagar'], ['Kashmir travel guide', '/kashmir-travel-guide']],
  },
  'braj-84-kos-yatra': {
    airport: ['Indira Gandhi International, Delhi', 'about 150 km to the Braj region'],
    railhead: ['Mathura Junction', 'the anchor point for the whole parikrama'],
    roadNote: 'The traditional circuit covers a wide loop of villages and groves across roughly 250 km of the Braj region. This is emphatically a vehicle trip over several days; the sites are too dispersed for public transport and many are on narrow rural roads.',
    registration: 'No registration. Many sites are small village temples with informal timings — a local driver who knows the circuit is worth more than a fixed schedule.',
    onward: [['Delhi to Mathura cab', '/delhi-to-mathura'], ['Mathura–Vrindavan travel guide', '/mathura-vrindavan-travel-guide']],
  },
  '12-jyotirlinga-tour': {
    airport: ['Varies by segment', 'the twelve shrines span several states, so the arrival airport depends on which stretch you are starting'],
    railhead: ['Varies by segment', 'the northern shrines are reached via Varanasi and Haridwar; others need their own railhead'],
    roadNote: 'No single journey covers all twelve comfortably. Most travellers take them in regional groups, and our North India itineraries cover the northern shrines — Kashi Vishwanath, Kedarnath and the Jyotirlingas reachable from them. Tell us which shrines you intend to cover and we will plan the segment rather than quote a single impossible loop.',
    registration: 'Kedarnath requires Uttarakhand yatra registration and has a seasonal window. The others are open year-round with their own darshan timings.',
    onward: [['Varanasi travel guide', '/varanasi-travel-guide'], ['Char Dham by road', '/religious-tours/char-dham-yatra']],
  },
  'nau-devi-tour': {
    airport: ['Jammu Airport', 'for the Vaishno Devi and Jammu shrines; Kangra (Gaggal) serves the Himachal temples'],
    railhead: ['Jammu Tawi', 'the main railhead; Pathankot is useful for the Himachal side'],
    roadNote: 'The nine shrines are spread across Jammu and Himachal, with Chintpurni, Jwalaji, Naina Devi, Chamunda and Brajeshwari in the Kangra belt and Vaishno Devi in Jammu. It is a multi-day road circuit of several hundred kilometres, and the order matters — a badly sequenced route adds a full day of driving.',
    registration: 'Vaishno Devi needs its yatra parchi. The Himachal shrines do not, but hill roads and temple timings together set how many you can reach in a day.',
    onward: [['Dharamshala travel guide', '/dharamshala-travel-guide'], ['Amritsar travel guide', '/amritsar-travel-guide']],
  },
  'golden-temple-pilgrimage': {
    airport: ['Sri Guru Ram Dass Jee International Airport, Amritsar', 'about 11 km from the Golden Temple'],
    railhead: ['Amritsar Junction', 'roughly 2 km away — among the closest railheads to any major shrine in India'],
    roadNote: 'Amritsar is unusually easy: both the airport and the station are inside the city. The temple is open through the night, so an early arrival or a late one both work. Most visitors also want Jallianwala Bagh next door and the Wagah–Attari ceremony about 30 km out, which needs a vehicle and a fixed return time.',
    registration: 'No registration. Heads must be covered and shoes deposited; free langar is served around the clock.',
    onward: [['Amritsar travel guide', '/amritsar-travel-guide'], ['Chandigarh to Amritsar cab', '/chandigarh-to-amritsar']],
  },
  'hemkund-sahib-yatra': {
    airport: ['Jolly Grant Airport, Dehradun', 'about 290 km by road to Govindghat, the trek base'],
    railhead: ['Rishikesh', 'the nearest railhead, with Haridwar Junction the better-connected option just beyond it'],
    roadNote: 'The road ends at Govindghat. From there it is a trek of roughly 20 km via Ghangaria, which almost everyone splits over two days. Vehicles cannot go further, so plan the drive and the trek as two separate stages with a night at Ghangaria between them.',
    registration: 'The shrine opens only for a short summer season and closes under snow. Uttarakhand registration applies, and the Valley of Flowers nearby has its own permit and timings.',
    onward: [['Delhi to Haridwar cab', '/delhi-to-haridwar'], ['Char Dham by road', '/religious-tours/char-dham-yatra']],
  },
  'panchprayag-tour': {
    airport: ['Jolly Grant Airport, Dehradun', 'about 20 km from Rishikesh, where the Alaknanda road journey begins'],
    railhead: ['Haridwar Junction', 'with Rishikesh closer but less well served'],
    roadNote: 'The five confluences — Devprayag, Rudraprayag, Karnaprayag, Nandaprayag and Vishnuprayag — sit in sequence along the Alaknanda on the road towards Badrinath. That makes this a genuinely linear drive rather than a hub-and-spoke trip, and it pairs naturally with a Badrinath leg if you have the days.',
    registration: 'No registration for the prayags themselves. If you continue to Badrinath, Uttarakhand yatra registration applies to that stretch.',
    onward: [['Delhi to Rishikesh cab', '/delhi-to-rishikesh'], ['Char Dham by road', '/religious-tours/char-dham-yatra']],
  },
};

export default pilgrimageArrival;
