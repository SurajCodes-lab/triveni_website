// Week 39 new Delhi one-way corridors (batch B)
import { fareFor, isLocalPackageRoute, rupees } from '../pricing';

// Fare policy lives in src/utilis/pricing.js — do NOT reintroduce a local copy.
// A duplicated calcFares in this file is exactly why these corridors kept quoting
// the ₹3,300 outstation floor on 25 km trips after the rest of the site was fixed.
function calcFares(distanceKm) {
  const sedan = fareFor(distanceKm, 'sedan').amount;
  const ertiga = fareFor(distanceKm, 'ertiga').amount;
  const innova = fareFor(distanceKm, 'innova').amount;
  return {
    oneWayFares: { sedan: rupees(sedan), ertiga: rupees(ertiga), innova: rupees(innova) },
    roundTripFares: { sedan: rupees(sedan * 2), ertiga: rupees(ertiga * 2), innova: rupees(innova * 2) },
    savings: rupees(sedan), savingsPercent: "50%", sedanRaw: sedan,
    localPackage: isLocalPackageRoute(distanceKm),
  };
}

export const newCorridorsB = {
  "delhi-to-sonamarg": {
    from: "Delhi",
    to: "Sonamarg",
    distance: "910 km",
    distanceNum: 910,
    time: "20-22 hours",
    highway: "NH-44 via Chandigarh, Jammu, Banihal & Srinagar",
    ...calcFares(910),
    highlights: ["Long-haul Delhi to Kashmir drive of about 910 km ending at Sonamarg, the Meadow of Gold on the Srinagar-Leh road", "Route runs on NH-44 through Chandigarh, Jammu, the Jawahar Tunnel and Srinagar before the final climb along the Sindh valley", "This is a genuine two-day journey with an overnight halt at Jammu or Srinagar, not a single-day drive", "Ideal for families and groups wanting a private car for a Kashmir tour rather than train-plus-taxi transfers"],
    popularStops: ["Chandigarh", "Jammu", "Banihal", "Srinagar"],
    bestTime: "May to October, when the Srinagar-Sonamarg road is open and the meadows are green; the higher Zoji La beyond Sonamarg towards Ladakh usually opens only from June",
    description: `The Delhi to Sonamarg one-way cab covers roughly 910 km up to one of Kashmir's most beautiful valleys — Sonamarg, the Meadow of Gold, sitting at about 2,800 metres on the Srinagar-Leh highway where the Sindh river runs past pine forest and snow-fed meadows. At Triveni Cabs™ we run this long Delhi-to-Kashmir corridor for families on a Kashmir holiday, groups combining Srinagar, Gulmarg, Pahalgam and Sonamarg, and travellers who prefer the comfort and door-to-door convenience of a private car with an experienced driver over a flight-plus-taxi arrangement. It is one of the longest routes we operate and we describe it honestly as a multi-day journey.

Because Sonamarg is about 910 km from Delhi, this is not a single-day drive and we do not pretend otherwise. The realistic plan is a two-day journey with an overnight halt — most travellers break at Jammu or push through to Srinagar and continue the short final leg to Sonamarg the next morning. The road follows NH-44 through Chandigarh, Ambala and the plains up to Jammu, then climbs into the mountains past Udhampur, Patnitop and the Jawahar Tunnel at Banihal into the Kashmir Valley, reaching Srinagar before the last scenic stretch up the Sindh valley to Sonamarg. Fares are calculated on distance at our standard per-kilometre rate, quoted upfront with no return charge on a one-way booking; toll, permits and the driver's mountain night allowance are extra at actual.

Sonamarg itself is the road-head for some of Kashmir's finest day excursions — pony rides and short treks up to the Thajiwas Glacier, the Sindh river for trout, and the start of the dramatic Zoji La crossing towards Ladakh. We provide the road transport up to Sonamarg and can hold the car for local sightseeing; the glacier ponies, short treks and any onward Ladakh permits are arranged separately and locally. For anyone touring Kashmir, having the same clean vehicle and driver for the whole trip — Srinagar houseboats, Gulmarg, Pahalgam and Sonamarg — is far more relaxing than juggling separate taxis, and our drivers know the Jammu-Srinagar highway and its weather-dependent closures well.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Sonamarg cost?", answer: "A one-way cab from Delhi to Sonamarg starts at ₹10,010 for a Sedan over the roughly 910 km route. An Ertiga SUV is ₹13,650 and an Innova Crysta is ₹16,380. These are upfront one-way fares with no return charge; toll, the Jawahar Tunnel and the driver's night allowance for this multi-day journey are extra at actual." },
      { question: "How long does Delhi to Sonamarg take by cab?", answer: "Delhi to Sonamarg is about 910 km and realistically a 20-22 hour drive, so it is a two-day journey rather than a single day. Most travellers halt overnight at Jammu or Srinagar and complete the final Sindh-valley leg to Sonamarg the next morning. We plan the halt with you when you book." },
      { question: "Is the Delhi to Sonamarg drive possible in one day?", answer: "No, we do not recommend it as a single-day drive and we say so honestly. At 910 km through the Jammu-Srinagar mountain highway, the safe and comfortable plan is an overnight halt at Jammu or Srinagar. Attempting it in one push would mean unsafe fatigue on hill roads and tunnel sections." },
      { question: "What is the best time to visit Sonamarg from Delhi?", answer: "May to October is the best window, when the Srinagar-Sonamarg road is open and the meadows are green. The higher Zoji La pass beyond Sonamarg towards Ladakh usually opens only from June. In deep winter the approach can face snow closures, so we advise checking road status before travel." },
      { question: "Does the fare include the Thajiwas Glacier trip at Sonamarg?", answer: "No. We provide the road transport up to Sonamarg and can hold the car for local sightseeing, but the pony rides and short treks up to the Thajiwas Glacier are arranged separately and locally at Sonamarg. Any onward Zoji La or Ladakh travel and permits are also handled separately." }
    ]
  },
  "delhi-to-auli": {
    from: "Delhi",
    to: "Auli",
    distance: "520 km",
    distanceNum: 520,
    time: "13-14 hours",
    highway: "NH-7 via Rishikesh, Devprayag & Joshimath",
    ...calcFares(520),
    highlights: ["Delhi to Auli drive of about 520 km ending at Joshimath, the road-head and ropeway base for the Auli ski slopes", "Scenic Garhwal route on NH-7 along the Ganga and Alaknanda through Rishikesh, Devprayag and the Panch Prayag confluences", "A long mountain drive best done as a very early start or with a Rishikesh halt, reaching Joshimath the same evening", "Auli itself is reached by the Joshimath-Auli ropeway or a short hill road, which is separate from the taxi"],
    popularStops: ["Rishikesh", "Devprayag", "Karnaprayag", "Joshimath"],
    bestTime: "December to February for snow and skiing at Auli; April to June and September-October for clear Nanda Devi views and pleasant weather",
    description: `The Delhi to Auli one-way cab covers about 520 km into the high Garhwal Himalaya, ending at Joshimath — the road-head town from which Auli, India's best-known ski destination, is reached. Auli's meadow slopes sit at around 2,900 metres with a grandstand view of Nanda Devi, India's second-highest peak. At Triveni Cabs™ we run this route for winter skiers, families wanting Himalayan snow and cable-car views, and travellers combining Auli with a Char Dham or Valley of Flowers trip. We are clear from the outset that our car takes you to the Joshimath road-head, and the final hop up to Auli is by ropeway or a short hill road.

Because Auli/Joshimath is about 520 km from Delhi on winding mountain roads, this is a long 13-14 hour drive and best planned either as a very early pre-dawn start or, more comfortably, with an overnight halt at Rishikesh or Srinagar (Garhwal) so you reach Joshimath refreshed. The route runs on NH-7 up the Ganga through Rishikesh and Devprayag, where the Bhagirathi and Alaknanda meet to form the Ganga, then follows the Alaknanda past Rudraprayag and Karnaprayag before the final climb to Joshimath. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's mountain night allowance are extra at actual.

From Joshimath, the Auli ropeway — one of Asia's longest cable cars — carries you up to the slopes, or you can drive the short winding hill road to Auli in season. The skiing, chairlift, snow activities and the ropeway ticket are arranged separately from the taxi. Our drivers know the Joshimath approach well, including the section that can be affected by weather or landslides in the monsoon, and we advise travelling in the clear-weather and winter windows. For a snow holiday or a Garhwal circuit, a private car with a driver experienced on these hairpins is far more comfortable than a shared jeep from the hill stands.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Auli cost?", answer: "A one-way cab from Delhi to Auli (Joshimath road-head) starts at ₹5,720 for a Sedan over the roughly 520 km route. An Ertiga SUV is ₹7,800 and an Innova Crysta is ₹9,360. These are upfront one-way fares; toll and the driver's mountain night allowance are extra at actual, and the Auli ropeway ticket is separate." },
      { question: "How long does Delhi to Auli take by cab?", answer: "Delhi to Auli is about 520 km and takes 13-14 hours on winding Garhwal mountain roads, so it is best done with a very early pre-dawn start or an overnight halt at Rishikesh or Srinagar Garhwal. We reach the Joshimath road-head the same evening and plan the halt with you when you book." },
      { question: "Does the cab go all the way up to Auli?", answer: "Our car takes you to Joshimath, the road-head at the base of Auli. From there you reach the Auli ski slopes by the Joshimath-Auli ropeway, one of the longest cable cars in Asia, or by a short hill road in season. The ropeway ticket, skiing and snow activities are arranged separately from the taxi." },
      { question: "What is the best time to visit Auli from Delhi?", answer: "December to February is best for snow and skiing at Auli, while April to June and September-October offer clear Nanda Devi views and pleasant weather for the ropeway and meadows. The monsoon months are avoided as the Joshimath approach can face landslides and reduced visibility." },
      { question: "Which vehicle is best for Delhi to Auli?", answer: "For this long Garhwal hill drive a Sedan suits 2-3 passengers travelling light, while the Ertiga SUV is ideal for families of 4-6 with winter luggage. Groups of 6-7 or those wanting maximum comfort and boot space for ski gear should choose the Innova Crysta, which is sure-footed on the Joshimath hairpins." }
    ]
  },
  "delhi-to-chopta": {
    from: "Delhi",
    to: "Chopta",
    distance: "450 km",
    distanceNum: 450,
    time: "12-13 hours",
    highway: "NH-7 via Rishikesh, Devprayag & Rudraprayag",
    ...calcFares(450),
    highlights: ["Delhi to Chopta drive of about 450 km to the meadow hamlet often called the Mini Switzerland of Uttarakhand", "Garhwal route on NH-7 through Rishikesh, Devprayag and Rudraprayag before the climb via Ukhimath to Chopta", "Chopta is the base for the Tungnath temple and Chandrashila summit trek, which is a separate hike, not a drive", "A long single-day hill drive best begun very early or split with a Rishikesh or Rudraprayag halt"],
    popularStops: ["Rishikesh", "Devprayag", "Rudraprayag", "Ukhimath"],
    bestTime: "April to June and September to November for clear meadows and Himalayan views; December to March for snow, when the higher stretch can need caution",
    description: `The Delhi to Chopta one-way cab covers about 450 km into the Garhwal Himalaya to Chopta — a small, high meadow hamlet at around 2,700 metres often called the Mini Switzerland of Uttarakhand, ringed by alpine forest with views of Chaukhamba and the Kedarnath range. At Triveni Cabs™ we run this route for trekkers heading to Tungnath and Chandrashila, nature lovers, birdwatchers and travellers wanting an off-beat, uncrowded Himalayan base. We describe the trip honestly: our car takes you to Chopta or the nearby Sari village, and the famous Tungnath-Chandrashila climb is a trek on foot from there.

Because Chopta is about 450 km from Delhi on winding roads, this is a long 12-13 hour drive and best planned with a very early start or an overnight halt at Rishikesh or Rudraprayag so the final forest climb to Chopta is done in daylight. The route runs on NH-7 up the Ganga through Rishikesh and Devprayag, follows the Alaknanda to Rudraprayag, then turns up towards Ukhimath and climbs through dense rhododendron and deodar forest to Chopta. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's mountain night allowance are extra at actual.

Chopta is the trailhead for the roughly 4 km trek up to Tungnath, the highest of the Panch Kedar Shiva temples, and a further climb to the Chandrashila summit for a sweeping Himalayan panorama. This trek is on foot and separate from the taxi; we provide the road transport to and from the Chopta road-head and can hold the car while you trek and return. Facilities at Chopta are basic and largely tented or small guesthouses, so we advise booking a stay in advance. Our drivers know the Ukhimath-Chopta forest road, which can see snow in winter and needs care, and we recommend the clear-weather windows for the best of this quiet, beautiful corner of Garhwal.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Chopta cost?", answer: "A one-way cab from Delhi to Chopta starts at ₹4,950 for a Sedan over the roughly 450 km route. An Ertiga SUV is ₹6,750 and an Innova Crysta is ₹8,100. These are upfront one-way fares; toll and the driver's mountain night allowance are extra at actual, and the Tungnath-Chandrashila trek is separate." },
      { question: "How long does Delhi to Chopta take by cab?", answer: "Delhi to Chopta is about 450 km and takes 12-13 hours on winding Garhwal roads, so it is best done with a very early start or an overnight halt at Rishikesh or Rudraprayag so the final forest climb is in daylight. We plan the halt with you when you book." },
      { question: "Does the cab reach the Tungnath temple?", answer: "No. Our car takes you to Chopta or the nearby Sari village, which is the road-head. Tungnath temple and the Chandrashila summit are reached by a trek of about 4 km on foot from Chopta. We provide the road transport and can hold the car while you complete the trek and return." },
      { question: "What is the best time to visit Chopta from Delhi?", answer: "April to June and September to November are ideal for clear meadows, rhododendron blooms and Himalayan views. December to March brings snow, which is beautiful but the higher Ukhimath-Chopta stretch needs caution. The monsoon is avoided for landslide risk on the hill road." },
      { question: "Is there good accommodation at Chopta?", answer: "Chopta is an off-beat, high-altitude hamlet with basic facilities, mostly tented camps and small guesthouses, so we strongly advise booking your stay in advance. We provide the road transport to the Chopta road-head; the stay, meals and trek arrangements are made separately." }
    ]
  },
  "delhi-to-kausani": {
    from: "Delhi",
    to: "Kausani",
    distance: "415 km",
    distanceNum: 415,
    time: "11-12 hours",
    highway: "NH-9 via Moradabad, Kathgodam & Almora",
    ...calcFares(415),
    highlights: ["Delhi to Kausani drive of about 415 km to the Kumaon ridge town famous for its wide Himalayan sunrise panorama", "Route on NH-9 through Moradabad, Rampur and Kathgodam, then up via Almora into the Kumaon hills", "Kausani is known for the Anasakti Ashram where Gandhi stayed and its Trishul-Nanda Devi horizon", "A long hill drive best begun early, reaching Kausani by evening for the next morning's sunrise"],
    popularStops: ["Moradabad", "Kathgodam", "Almora"],
    bestTime: "March to June and September to November for the clearest Himalayan sunrise views; winter mornings are crisp but can be hazy or cold",
    description: `The Delhi to Kausani one-way cab covers about 415 km into the Kumaon Himalaya to Kausani — a quiet ridge town at around 1,900 metres celebrated for one of the widest Himalayan panoramas in India, a nearly 300-km sweep of snow peaks from Trishul to Nanda Devi and Panchachuli at sunrise. At Triveni Cabs™ we run this route for families on a Kumaon holiday, honeymooners, tea-garden and nature lovers, and travellers combining Kausani with Ranikhet, Almora and Nainital. It is a long but rewarding drive into one of the gentlest and most scenic corners of the hills.

Because Kausani is about 415 km from Delhi, this is a long 11-12 hour drive and best begun very early so you reach Kausani by evening, ready for the famous next-morning sunrise. The route runs on NH-9 through Moradabad and Rampur to Kathgodam, the gateway to Kumaon, then climbs through the hills via Almora before the final ridge run to Kausani. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's mountain night allowance are extra at actual.

Kausani itself is an unhurried place. The Anasakti Ashram, where Mahatma Gandhi stayed in 1929 and wrote his commentary on the Gita, sits on the ridge; there are working tea gardens on the slopes, the Rudradhari falls and temple a short drive away, and the small Sumitranandan Pant museum honouring the poet born here. Our drivers know the Almora-Kausani hill road well, and we can hold the car for local sightseeing or continue onward to Baijnath, Bageshwar or Ranikhet if you are touring Kumaon. The single unmissable experience is simply to be on the ridge at dawn as the sun lights the snow wall of the Himalaya — which is why we always advise an early departure from Delhi to arrive the evening before.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Kausani cost?", answer: "A one-way cab from Delhi to Kausani starts at ₹4,565 for a Sedan over the roughly 415 km route. An Ertiga SUV is ₹6,225 and an Innova Crysta is ₹7,470. These are upfront one-way fares with no return charge; toll and the driver's mountain night allowance are extra at actual." },
      { question: "How long does Delhi to Kausani take by cab?", answer: "Delhi to Kausani is about 415 km and takes 11-12 hours on the NH-9 route through Kathgodam and Almora into the Kumaon hills. It is best begun very early so you reach Kausani by evening, ready for the famous Himalayan sunrise the next morning." },
      { question: "What is Kausani famous for?", answer: "Kausani is famous for one of the widest Himalayan sunrise panoramas in India, a long sweep of snow peaks including Trishul and Nanda Devi. It is also known for the Anasakti Ashram where Gandhi stayed, its tea gardens, and its calm, uncrowded ridge setting in the Kumaon hills." },
      { question: "What is the best time to visit Kausani from Delhi?", answer: "March to June and September to November give the clearest Himalayan sunrise views. Winter mornings are crisp and beautiful but can be hazy or very cold, and the monsoon months bring cloud and landslide risk on the hill roads, so the shoulder seasons are ideal." },
      { question: "Can the cab cover local sightseeing around Kausani?", answer: "Yes. We can hold the car for local sightseeing such as the Anasakti Ashram, the tea garden, the Rudradhari falls and the Pant museum, or continue onward to Baijnath, Bageshwar or Ranikhet if you are touring Kumaon. Just share your plan when you book so we can quote the waiting or onward leg." }
    ]
  },
  "delhi-to-ranikhet": {
    from: "Delhi",
    to: "Ranikhet",
    distance: "350 km",
    distanceNum: 350,
    time: "9-10 hours",
    highway: "NH-9 via Moradabad, Kathgodam & Bhowali",
    ...calcFares(350),
    highlights: ["Delhi to Ranikhet drive of about 350 km to the calm cantonment hill station in the Kumaon Himalaya", "Route on NH-9 through Moradabad and Kathgodam, then up via Bhowali into the pine-clad Kumaon hills", "Ranikhet is known for its golf course, KRC museum, Jhula Devi temple and quiet deodar forests", "A comfortable single-day hill drive with an early start, popular alongside Nainital and Almora"],
    popularStops: ["Moradabad", "Kathgodam", "Bhowali"],
    bestTime: "March to June for pleasant weather and clear peaks, and September to November after the monsoon; winter is cold with occasional light snow",
    description: `The Delhi to Ranikhet one-way cab covers about 350 km into the Kumaon Himalaya to Ranikhet — a serene cantonment hill station at around 1,850 metres, spread over pine and deodar ridges with views of the Nanda Devi range. Maintained by the Indian Army's Kumaon Regiment, Ranikhet has stayed green, orderly and unhurried, which makes it a favourite for families, honeymooners and anyone wanting a restful hill break. At Triveni Cabs™ we run this route for Kumaon holidays, often combined with Nainital, Almora and Kausani.

Because Ranikhet is about 350 km from Delhi, this is a manageable 9-10 hour drive done comfortably in a single day with an early start. The route runs on NH-9 through Moradabad and Rampur to Kathgodam, the rail gateway to Kumaon, then climbs through Bhowali and the hills to Ranikhet. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and any driver hill allowance are extra at actual.

Ranikhet's appeal is its calm. The nine-hole golf course at Upat is among the highest in Asia, the Kumaon Regimental Centre museum tells the regiment's story, and the Jhula Devi and Haidakhan temples, the Chaubatia orchards and the Bhalu Dam sit a short drive away amid quiet forest. Our drivers know the Bhowali-Ranikhet hill road, and we can hold the car for local sightseeing or continue onward to Almora, Kausani or the Binsar sanctuary if you are touring Kumaon. With its clean air, deodar walks and mountain horizon, Ranikhet is one of the easiest and most soothing hill stations to reach from Delhi.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Ranikhet cost?", answer: "A one-way cab from Delhi to Ranikhet starts at ₹3,850 for a Sedan over the roughly 350 km route. An Ertiga SUV is ₹5,250 and an Innova Crysta is ₹6,300. These are upfront one-way fares with no return charge; toll and any driver hill allowance are extra at actual." },
      { question: "How long does Delhi to Ranikhet take by cab?", answer: "Delhi to Ranikhet is about 350 km and takes 9-10 hours on the NH-9 route through Kathgodam and Bhowali into the Kumaon hills. With an early start it is comfortably done in a single day, arriving in Ranikhet by afternoon or early evening." },
      { question: "What is Ranikhet known for?", answer: "Ranikhet is known as a calm, green Army cantonment hill station with a high golf course at Upat, the Kumaon Regimental Centre museum, the Jhula Devi temple, the Chaubatia orchards and quiet deodar forests, all with views of the Nanda Devi range. It is prized for its unhurried, unspoilt atmosphere." },
      { question: "What is the best time to visit Ranikhet from Delhi?", answer: "March to June is pleasant with clear peaks, and September to November after the monsoon offers fresh, clear weather. Winter is cold with occasional light snow and its own charm, while the monsoon months are avoided for landslide risk on the hill roads." },
      { question: "Can I combine Ranikhet with Nainital or Almora?", answer: "Yes. Ranikhet pairs naturally with Nainital, Almora, Kausani and the Binsar sanctuary on a Kumaon circuit. We can hold the car for local sightseeing or continue onward to these towns; just share your plan when you book so we can quote the waiting or onward leg." }
    ]
  },
  "delhi-to-almora": {
    from: "Delhi",
    to: "Almora",
    distance: "360 km",
    distanceNum: 360,
    time: "9-10 hours",
    highway: "NH-9 via Moradabad, Kathgodam & Bhowali",
    ...calcFares(360),
    highlights: ["Delhi to Almora drive of about 360 km to the historic horseshoe-shaped cultural town of Kumaon", "Route on NH-9 through Moradabad and Kathgodam, then up via Bhowali and the hills to Almora", "Almora is known for its old bazaars, the Kasar Devi ridge, Bright End Corner and Nanda Devi temple", "A comfortable single-day hill drive with an early start, a good base for Jageshwar and Binsar"],
    popularStops: ["Moradabad", "Kathgodam", "Bhowali"],
    bestTime: "March to June and September to November for clear weather and Himalayan views; winter is cold and atmospheric with crisp air",
    description: `The Delhi to Almora one-way cab covers about 360 km into the Kumaon Himalaya to Almora — a historic ridge town at around 1,650 metres, laid out in a horseshoe along a hill with old cobbled bazaars, carved wooden shopfronts and long Himalayan views. Once a seat of the Chand dynasty, Almora is the cultural heart of Kumaon and a favourite base for exploring Jageshwar, Binsar and the wider hills. At Triveni Cabs™ we run this route for heritage and nature travellers, artists and writers drawn to the Kasar Devi ridge, and families touring Kumaon.

Because Almora is about 360 km from Delhi, this is a manageable 9-10 hour drive done comfortably in a single day with an early start. The route runs on NH-9 through Moradabad and Rampur to Kathgodam, the rail gateway to Kumaon, then climbs through Bhowali and the hills to Almora. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and any driver hill allowance are extra at actual.

Almora rewards slow exploration. The Lala Bazaar and Mall Road preserve old Kumaoni architecture, the Nanda Devi temple sits in the town core, and Bright End Corner is the classic spot for sunrise and sunset over the snow peaks. The Kasar Devi ridge just above town, long a magnet for artists and seekers, has sweeping views and a famous cafe belt, while Jageshwar's ancient stone temple cluster and the Binsar wildlife sanctuary lie a short drive away. Our drivers know the Bhowali-Almora hill road, and we can hold the car for local sightseeing or continue onward to Jageshwar, Binsar or Kausani if you are touring Kumaon.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Almora cost?", answer: "A one-way cab from Delhi to Almora starts at ₹3,960 for a Sedan over the roughly 360 km route. An Ertiga SUV is ₹5,400 and an Innova Crysta is ₹6,480. These are upfront one-way fares with no return charge; toll and any driver hill allowance are extra at actual." },
      { question: "How long does Delhi to Almora take by cab?", answer: "Delhi to Almora is about 360 km and takes 9-10 hours on the NH-9 route through Kathgodam and Bhowali into the Kumaon hills. With an early start it is comfortably done in a single day, reaching Almora by afternoon or early evening." },
      { question: "What is Almora known for?", answer: "Almora is known as the cultural heart of Kumaon, a historic horseshoe-shaped ridge town with old bazaars, carved wooden shopfronts, the Nanda Devi temple, Bright End Corner for Himalayan sunsets and the artistic Kasar Devi ridge. It is a classic base for Jageshwar and Binsar." },
      { question: "What is the best time to visit Almora from Delhi?", answer: "March to June and September to November are best for clear weather and Himalayan views. Winter is cold, crisp and atmospheric with occasional light snow, while the monsoon months are avoided for landslide risk on the hill roads." },
      { question: "Can the cab cover Jageshwar and Binsar from Almora?", answer: "Yes. Almora is a natural base for the ancient Jageshwar temple cluster and the Binsar wildlife sanctuary, both a short drive away. We can hold the car for these excursions or continue onward to Kausani or Ranikhet on a Kumaon circuit; share your plan when you book so we can quote it." }
    ]
  },
  "delhi-to-mukteshwar": {
    from: "Delhi",
    to: "Mukteshwar",
    distance: "345 km",
    distanceNum: 345,
    time: "9-10 hours",
    highway: "NH-9 via Moradabad, Kathgodam & Bhowali",
    ...calcFares(345),
    highlights: ["Delhi to Mukteshwar drive of about 345 km to the quiet orchard hill town in the Kumaon Himalaya", "Route on NH-9 through Moradabad and Kathgodam, then up via Bhowali and the hills to Mukteshwar", "Mukteshwar is known for its fruit orchards, the old IVRI institute, Chauli-ki-Jali cliffs and wide peak views", "A comfortable single-day hill drive, a peaceful alternative to crowded Nainital"],
    popularStops: ["Moradabad", "Kathgodam", "Bhowali"],
    bestTime: "March to June for orchard blossom and clear peaks, and September to November after the monsoon; winter is cold with occasional snow",
    description: `The Delhi to Mukteshwar one-way cab covers about 345 km into the Kumaon Himalaya to Mukteshwar — a tranquil orchard town at around 2,170 metres, set among apple, plum and apricot orchards with a long, open view of the Nanda Devi and Trishul snow line. Named after an ancient Shiva temple on its highest point, Mukteshwar is a quieter, greener alternative to nearby Nainital. At Triveni Cabs™ we run this route for families, honeymooners and nature lovers wanting a restful hill retreat with big mountain views.

Because Mukteshwar is about 345 km from Delhi, this is a manageable 9-10 hour drive done comfortably in a single day with an early start. The route runs on NH-9 through Moradabad and Rampur to Kathgodam, the rail gateway to Kumaon, then climbs through Bhowali and the hills to Mukteshwar. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and any driver hill allowance are extra at actual.

Mukteshwar is a place for slow days. The historic Indian Veterinary Research Institute (IVRI) campus dates from the colonial era, the Mukteshwar Dham temple crowns the ridge, and the Chauli-ki-Jali cliffs just beyond offer dramatic drops and rock formations with valley views and gentle adventure activities. The surrounding orchards, fruit-picking in season, and quiet forest walks are the main draw. Our drivers know the Bhowali-Mukteshwar hill road, and we can hold the car for local sightseeing or continue onward to Nainital, Almora or Bhimtal if you are touring Kumaon. For anyone wanting calm, orchards and a wide Himalayan horizon, Mukteshwar is one of the loveliest easy escapes from Delhi.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Mukteshwar cost?", answer: "A one-way cab from Delhi to Mukteshwar starts at ₹3,795 for a Sedan over the roughly 345 km route. An Ertiga SUV is ₹5,175 and an Innova Crysta is ₹6,210. These are upfront one-way fares with no return charge; toll and any driver hill allowance are extra at actual." },
      { question: "How long does Delhi to Mukteshwar take by cab?", answer: "Delhi to Mukteshwar is about 345 km and takes 9-10 hours on the NH-9 route through Kathgodam and Bhowali into the Kumaon hills. With an early start it is comfortably done in a single day, reaching Mukteshwar by afternoon or early evening." },
      { question: "What is Mukteshwar known for?", answer: "Mukteshwar is known as a quiet orchard hill town with apple, plum and apricot orchards, the old IVRI institute, the Mukteshwar Dham temple and the dramatic Chauli-ki-Jali cliffs, all with wide views of the Nanda Devi and Trishul peaks. It is a peaceful alternative to crowded Nainital." },
      { question: "What is the best time to visit Mukteshwar from Delhi?", answer: "March to June is lovely for orchard blossom and clear peaks, and September to November after the monsoon offers fresh, clear weather. Winter is cold with occasional snow, while the monsoon months are avoided for landslide risk on the hill roads." },
      { question: "Can I combine Mukteshwar with Nainital?", answer: "Yes. Mukteshwar sits close to Nainital, Bhimtal and Almora, so it pairs easily on a Kumaon circuit. We can hold the car for local sightseeing at the Chauli-ki-Jali cliffs and orchards, or continue onward to these towns; share your plan when you book so we can quote the waiting or onward leg." }
    ]
  },
  "delhi-to-kanatal": {
    from: "Delhi",
    to: "Kanatal",
    distance: "305 km",
    distanceNum: 305,
    time: "8-9 hours",
    highway: "NH-7 via Rishikesh, Chamba & the Chamba-Mussoorie road",
    ...calcFares(305),
    highlights: ["Delhi to Kanatal drive of about 305 km to the small, forested hill hamlet on the Chamba-Mussoorie road", "Route on NH-7 through Rishikesh, then up via Narendranagar and Chamba to Kanatal", "Kanatal is known for its pine forests, apple orchards, the Surkanda Devi temple and camping resorts", "A comfortable hill drive, often combined with Dhanaulti and Mussoorie for a Garhwal weekend"],
    popularStops: ["Rishikesh", "Narendranagar", "Chamba"],
    bestTime: "March to June and September to November for pleasant weather and clear views; December to February for occasional snow and cosy camp stays",
    description: `The Delhi to Kanatal one-way cab covers about 305 km into the Garhwal Himalaya to Kanatal — a small, quiet hamlet at around 2,600 metres on the scenic Chamba-Mussoorie road, surrounded by pine and deodar forest and apple orchards. Free of the crowds of the bigger hill stations, Kanatal has become a favourite for weekend camping, family retreats and couples wanting a peaceful forest escape. At Triveni Cabs™ we run this route for Garhwal weekenders, often paired with Dhanaulti and Mussoorie.

Because Kanatal is about 305 km from Delhi, this is a comfortable 8-9 hour hill drive done in a single day with an early start. The route runs on NH-7 up the Ganga to Rishikesh, then climbs through Narendranagar and along the Chamba road, passing Chamba town before reaching Kanatal. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and any driver hill allowance are extra at actual.

Kanatal's charm is its simplicity. The Surkanda Devi temple, a short drive and a walk up from nearby Kaddukhal, is one of the region's revered shrines with panoramic Himalayan views; the Tehri lake and dam lie within reach for day trips, and the surrounding forest supports gentle nature walks, camping and light adventure activities offered by local resorts. Our drivers know the Chamba-Mussoorie hill road, and we can hold the car for local sightseeing or continue onward to Dhanaulti, Mussoorie or the Tehri lake if you are on a Garhwal circuit. For a short, restful mountain break within easy reach of Delhi, Kanatal is an ideal choice.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Kanatal cost?", answer: "A one-way cab from Delhi to Kanatal starts at ₹3,355 for a Sedan over the roughly 305 km route. An Ertiga SUV is ₹4,575 and an Innova Crysta is ₹5,490. These are upfront one-way fares with no return charge; toll and any driver hill allowance are extra at actual." },
      { question: "How long does Delhi to Kanatal take by cab?", answer: "Delhi to Kanatal is about 305 km and takes 8-9 hours on the NH-7 route through Rishikesh and the Chamba road. With an early start it is comfortably done in a single day, reaching the forested hamlet by afternoon." },
      { question: "What is Kanatal known for?", answer: "Kanatal is known as a quiet, forested hill hamlet on the Chamba-Mussoorie road, popular for camping, pine and deodar forests, apple orchards, the Surkanda Devi temple nearby and the Tehri lake within reach. It is a peaceful, uncrowded alternative to the bigger Garhwal hill stations." },
      { question: "What is the best time to visit Kanatal from Delhi?", answer: "March to June and September to November are best for pleasant weather and clear views, while December to February brings occasional snow and cosy camp stays. The monsoon months are avoided for landslide risk on the hill roads." },
      { question: "Can I combine Kanatal with Dhanaulti and Mussoorie?", answer: "Yes. Kanatal, Dhanaulti and Mussoorie sit along the same Chamba-Mussoorie ridge, so they combine easily on a Garhwal weekend. We can hold the car for local sightseeing including the Surkanda Devi temple, or continue onward to these towns; share your plan when you book so we can quote it." }
    ]
  },
  "delhi-to-dhanaulti": {
    from: "Delhi",
    to: "Dhanaulti",
    distance: "315 km",
    distanceNum: 315,
    time: "8-9 hours",
    highway: "NH-7 via Rishikesh, Chamba & the Chamba-Mussoorie road",
    ...calcFares(315),
    highlights: ["Delhi to Dhanaulti drive of about 315 km to the tranquil forested hill retreat beyond Mussoorie", "Route on NH-7 through Rishikesh, then up via Narendranagar and Chamba to Dhanaulti", "Dhanaulti is known for its Eco Parks, deodar forests, the Surkanda Devi temple and quiet Himalayan views", "A comfortable hill drive, often combined with Kanatal and Mussoorie for a Garhwal weekend"],
    popularStops: ["Rishikesh", "Narendranagar", "Chamba"],
    bestTime: "March to June and September to November for pleasant weather; December to February for snow, when the higher forest road needs care",
    description: `The Delhi to Dhanaulti one-way cab covers about 315 km into the Garhwal Himalaya to Dhanaulti — a calm, thickly forested hill retreat at around 2,300 metres on the Chamba-Mussoorie road, about 25 km beyond Mussoorie. Known for its deodar and oak forests, cool air and lack of crowds, Dhanaulti offers the mountain quiet that busier Mussoorie has lost. At Triveni Cabs™ we run this route for families, couples and nature lovers wanting a restful Garhwal break, often paired with Kanatal and Mussoorie.

Because Dhanaulti is about 315 km from Delhi, this is a comfortable 8-9 hour hill drive done in a single day with an early start. The route runs on NH-7 up the Ganga to Rishikesh, then climbs through Narendranagar and along the Chamba road, passing Chamba town before reaching Dhanaulti. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and any driver hill allowance are extra at actual.

Dhanaulti's attractions are gentle and outdoorsy. The Dhanaulti Eco Parks — Amber and Dhara — offer forest trails, tree-top adventure activities and picnic spots among tall deodars; the Surkanda Devi temple, reached by a short climb from nearby Kaddukhal, is a revered shrine with a wide Himalayan panorama; and the Apple Orchard and quiet viewpoints reward a slow day. Our drivers know the Chamba-Mussoorie hill road, and we can hold the car for local sightseeing or continue onward to Kanatal, Mussoorie or the Tehri lake if you are on a Garhwal circuit. For a peaceful forest escape within easy reach of Delhi, Dhanaulti is hard to beat.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Dhanaulti cost?", answer: "A one-way cab from Delhi to Dhanaulti starts at ₹3,465 for a Sedan over the roughly 315 km route. An Ertiga SUV is ₹4,725 and an Innova Crysta is ₹5,670. These are upfront one-way fares with no return charge; toll and any driver hill allowance are extra at actual." },
      { question: "How long does Delhi to Dhanaulti take by cab?", answer: "Delhi to Dhanaulti is about 315 km and takes 8-9 hours on the NH-7 route through Rishikesh and the Chamba road, passing about 25 km beyond Mussoorie. With an early start it is comfortably done in a single day, reaching the forest retreat by afternoon." },
      { question: "What is Dhanaulti known for?", answer: "Dhanaulti is known as a quiet, forested hill retreat beyond Mussoorie, popular for its Eco Parks, deodar and oak forests, the Surkanda Devi temple, apple orchards and cool, uncrowded Himalayan views. It offers the mountain calm that busier Mussoorie has lost." },
      { question: "What is the best time to visit Dhanaulti from Delhi?", answer: "March to June and September to November are best for pleasant weather and clear views, while December to February brings snow and the higher forest road needs care. The monsoon months are avoided for landslide risk on the hill roads." },
      { question: "Can I combine Dhanaulti with Mussoorie and Kanatal?", answer: "Yes. Dhanaulti sits between Mussoorie and Kanatal on the Chamba ridge, so all three combine easily on a Garhwal weekend. We can hold the car for the Eco Parks and Surkanda Devi temple, or continue onward to these towns and the Tehri lake; share your plan when you book so we can quote it." }
    ]
  },
  "delhi-to-badrinath": {
    from: "Delhi",
    to: "Badrinath",
    distance: "525 km",
    distanceNum: 525,
    time: "14-15 hours",
    highway: "NH-7 via Rishikesh, Devprayag, Joshimath & Mana road",
    ...calcFares(525),
    highlights: ["Delhi to Badrinath drive of about 525 km to one of the four Char Dham shrines in the high Garhwal Himalaya", "Route on NH-7 along the Ganga and Alaknanda through Rishikesh, Devprayag, Karnaprayag and Joshimath", "Badrinath is a Vishnu shrine near the Mana valley, open only in the May-October yatra season", "A genuine two-day pilgrimage drive with an overnight halt; Uttarakhand yatra registration is required"],
    popularStops: ["Rishikesh", "Devprayag", "Karnaprayag", "Joshimath"],
    bestTime: "May to October, when the shrine and the road are open; the temple closes for winter around Diwali and reopens near Akshaya Tritiya in spring",
    description: `The Delhi to Badrinath one-way cab covers about 525 km into the high Garhwal Himalaya to Badrinath — one of the four Char Dham shrines and among the most revered Vishnu temples in India, set at around 3,100 metres beside the Alaknanda near the Mana valley, the last village before the Tibet border. At Triveni Cabs™ we run this route for Char Dham pilgrims, families undertaking the Badrinath-Kedarnath yatra and devotees seeking a comfortable private car for the long mountain journey. We describe the trip honestly as a multi-day pilgrimage with real high-altitude driving.

Because Badrinath is about 525 km from Delhi on winding, high mountain roads, this is a two-day journey, not a single-day drive. The realistic plan is an overnight halt — commonly at Rishikesh, Srinagar (Garhwal), Rudraprayag or Joshimath — before the final climb to the shrine. The route runs on NH-7 up the Ganga through Rishikesh and Devprayag, follows the Alaknanda past Rudraprayag and Karnaprayag to Joshimath, then climbs the last stretch to Badrinath. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's mountain night allowance are extra at actual.

Badrinath is open only in the yatra season, roughly May to October, and the temple closes for the deep winter around Diwali, reopening near Akshaya Tritiya in spring. All Char Dham travellers must complete the compulsory Uttarakhand yatra registration before travel, which we advise arranging in advance. Beyond the temple, the Mana village, the Vyas and Ganesh caves, the Tapt Kund hot spring and Bhim Pul are close by, and Joshimath below is the road-head for Auli and the Valley of Flowers. Our drivers know the Joshimath-Badrinath road and its convoy-controlled and weather-dependent sections well, and we plan the halts and timings around the shrine hours.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Badrinath cost?", answer: "A one-way cab from Delhi to Badrinath starts at ₹5,775 for a Sedan over the roughly 525 km route. An Ertiga SUV is ₹7,875 and an Innova Crysta is ₹9,450. These are upfront one-way fares; toll and the driver's mountain night allowance for this multi-day pilgrimage are extra at actual." },
      { question: "How long does Delhi to Badrinath take by cab?", answer: "Delhi to Badrinath is about 525 km and realistically a 14-15 hour drive on high Garhwal mountain roads, so it is a two-day journey with an overnight halt at Rishikesh, Rudraprayag or Joshimath. We plan the halt and timings around the temple hours when you book." },
      { question: "Is Uttarakhand yatra registration needed for Badrinath?", answer: "Yes. Badrinath is a Char Dham shrine and all yatra travellers must complete the compulsory Uttarakhand Char Dham registration before travel. We strongly advise arranging it in advance; our driver takes you to the last motorable point at the shrine, and the darshan and any queue arrangements are handled at the temple." },
      { question: "When is Badrinath open for the yatra?", answer: "Badrinath is open only in the yatra season, roughly May to October. The temple closes for the deep winter around Diwali and reopens near Akshaya Tritiya in spring, so travel is planned within that window. The exact opening and closing dates are announced each year." },
      { question: "Can the Badrinath trip be combined with Kedarnath or Auli?", answer: "Yes. Many pilgrims combine Badrinath with Kedarnath on the Char Dham circuit, and Joshimath below Badrinath is the road-head for Auli and the Valley of Flowers. We can plan a multi-day itinerary with the right halts; share your plan when you book so we can quote the full route." }
    ]
  },
  "delhi-to-gangotri": {
    from: "Delhi",
    to: "Gangotri",
    distance: "470 km",
    distanceNum: 470,
    time: "13-14 hours",
    highway: "NH-7 & NH-34 via Rishikesh, Uttarkashi & Harsil",
    ...calcFares(470),
    highlights: ["Delhi to Gangotri drive of about 470 km to the Char Dham shrine at the source region of the Ganga", "Route via Rishikesh, Chamba, Uttarkashi and Harsil up the Bhagirathi valley to Gangotri", "Gangotri is a motorable shrine, open only in the May-October yatra season; Gaumukh glacier beyond is a trek", "A genuine two-day pilgrimage drive with an overnight halt; Uttarakhand yatra registration is required"],
    popularStops: ["Rishikesh", "Chamba", "Uttarkashi", "Harsil"],
    bestTime: "May to October, when the shrine and road are open; the temple closes for winter around Diwali and reopens near Akshaya Tritiya in spring",
    description: `The Delhi to Gangotri one-way cab covers about 470 km into the Garhwal Himalaya to Gangotri — one of the four Char Dham shrines, sitting at around 3,100 metres in the Bhagirathi valley near the spiritual source of the Ganga. At Triveni Cabs™ we run this route for Char Dham pilgrims, devotees and families undertaking the yatra, providing a comfortable private car for the long mountain journey. Unlike some Char Dham shrines, Gangotri temple itself is motorable, so our car takes you right up to the shrine.

Because Gangotri is about 470 km from Delhi on winding mountain roads, this is a two-day journey, not a single-day drive. The realistic plan is an overnight halt — commonly at Rishikesh, Uttarkashi or Harsil — before the final climb up the Bhagirathi valley to Gangotri. The route runs on NH-7 to Rishikesh, then follows the Uttarkashi road along the Bhagirathi through Chamba, Uttarkashi and the lovely deodar village of Harsil to the shrine. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's mountain night allowance are extra at actual.

Gangotri is open only in the yatra season, roughly May to October, closing for winter around Diwali and reopening near Akshaya Tritiya in spring; the deity is moved to Mukhba village in the off-season. All Char Dham travellers must complete the compulsory Uttarakhand yatra registration before travel, which we advise arranging in advance. The actual glacial source of the Ganga at Gaumukh lies about 18 km beyond Gangotri and is reached only on a trek requiring a forest permit — this is separate from the taxi, which serves the Gangotri road-head. Harsil, Dharali and the Bhagirathi valley scenery make the drive itself memorable, and our drivers know the Uttarkashi-Gangotri road and its weather-dependent sections well.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Gangotri cost?", answer: "A one-way cab from Delhi to Gangotri starts at ₹5,170 for a Sedan over the roughly 470 km route. An Ertiga SUV is ₹7,050 and an Innova Crysta is ₹8,460. These are upfront one-way fares; toll and the driver's mountain night allowance for this multi-day pilgrimage are extra at actual." },
      { question: "How long does Delhi to Gangotri take by cab?", answer: "Delhi to Gangotri is about 470 km and realistically a 13-14 hour drive on winding Garhwal mountain roads, so it is a two-day journey with an overnight halt at Rishikesh, Uttarkashi or Harsil. We plan the halt and timings around the temple hours when you book." },
      { question: "Does the cab reach the Gangotri temple?", answer: "Yes. Unlike Kedarnath or Yamunotri, Gangotri temple is motorable, so our car takes you right up to the Gangotri road-head near the shrine. The actual glacial source of the Ganga at Gaumukh, about 18 km further, is reached only on a trek with a forest permit, which is separate from the taxi." },
      { question: "Is Uttarakhand yatra registration needed for Gangotri?", answer: "Yes. Gangotri is a Char Dham shrine and all yatra travellers must complete the compulsory Uttarakhand Char Dham registration before travel. We strongly advise arranging it in advance so your journey up the Bhagirathi valley is smooth." },
      { question: "When is Gangotri open for the yatra?", answer: "Gangotri is open only in the yatra season, roughly May to October. The temple closes for winter around Diwali and reopens near Akshaya Tritiya in spring, with the deity moved to Mukhba village in the off-season. Exact dates are announced each year." }
    ]
  },
  "delhi-to-yamunotri": {
    from: "Delhi",
    to: "Yamunotri",
    distance: "460 km",
    distanceNum: 460,
    time: "13-14 hours",
    highway: "NH-7 via Rishikesh, Barkot & Janki Chatti",
    ...calcFares(460),
    highlights: ["Delhi to Yamunotri drive of about 460 km, ending at Janki Chatti, the road-head for the Yamunotri shrine", "Route via Rishikesh, Chamba, Barkot and Hanuman Chatti up to Janki Chatti", "Yamunotri temple is reached only by a roughly 6 km trek or pony ride from Janki Chatti, separate from the taxi", "A genuine two-day pilgrimage drive with an overnight halt; Uttarakhand yatra registration is required"],
    popularStops: ["Rishikesh", "Chamba", "Barkot", "Janki Chatti"],
    bestTime: "May to October, when the shrine and road are open; the temple closes for winter around Diwali and reopens near Akshaya Tritiya in spring",
    description: `The Delhi to Yamunotri one-way cab covers about 460 km into the Garhwal Himalaya to Janki Chatti — the road-head from which Yamunotri, one of the four Char Dham shrines and the source seat of the Yamuna, is reached. The temple sits at around 3,290 metres below the Bandarpunch peaks. At Triveni Cabs™ we run this route for Char Dham pilgrims and families undertaking the yatra, providing a comfortable private car for the long mountain journey. We are clear from the outset that our car reaches Janki Chatti and the final leg to the shrine is a trek or pony ride.

Because Yamunotri/Janki Chatti is about 460 km from Delhi on winding mountain roads, this is a two-day journey, not a single-day drive. The realistic plan is an overnight halt — commonly at Rishikesh, Barkot or Hanuman Chatti — before the final drive to Janki Chatti. The route runs on NH-7 to Rishikesh, then climbs via Chamba, Barkot and Hanuman Chatti up to Janki Chatti. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's mountain night allowance are extra at actual.

From Janki Chatti, the Yamunotri temple is reached only by a roughly 6 km trek on foot, or by pony or palki (palanquin) hired locally — this last leg is separate from the taxi, which serves the Janki Chatti road-head. Yamunotri is open only in the yatra season, roughly May to October, closing for winter around Diwali and reopening near Akshaya Tritiya in spring. All Char Dham travellers must complete the compulsory Uttarakhand yatra registration before travel, which we advise arranging in advance. The Surya Kund hot spring and the Divya Shila near the temple are the key darshan points. Our drivers know the Barkot-Janki Chatti road well and plan the halts around the trek and shrine timings.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Yamunotri cost?", answer: "A one-way cab from Delhi to Yamunotri (Janki Chatti road-head) starts at ₹5,060 for a Sedan over the roughly 460 km route. An Ertiga SUV is ₹6,900 and an Innova Crysta is ₹8,280. These are upfront one-way fares; toll and the driver's mountain night allowance are extra at actual, and the trek or pony from Janki Chatti is separate." },
      { question: "Does the cab reach the Yamunotri temple?", answer: "No. Our car takes you to Janki Chatti, the road-head. From there the Yamunotri temple is reached only by a roughly 6 km trek on foot, or by a pony or palki hired locally. We provide the road transport to Janki Chatti and can hold the car while you complete the trek and return." },
      { question: "How long does Delhi to Yamunotri take by cab?", answer: "Delhi to Yamunotri is about 460 km and realistically a 13-14 hour drive to Janki Chatti on winding Garhwal mountain roads, so it is a two-day journey with an overnight halt at Rishikesh, Barkot or Hanuman Chatti. We plan the halt and timings around the trek when you book." },
      { question: "Is Uttarakhand yatra registration needed for Yamunotri?", answer: "Yes. Yamunotri is a Char Dham shrine and all yatra travellers must complete the compulsory Uttarakhand Char Dham registration before travel. We strongly advise arranging it in advance; our driver takes you to Janki Chatti and the trek to the shrine is done separately." },
      { question: "When is Yamunotri open for the yatra?", answer: "Yamunotri is open only in the yatra season, roughly May to October. The temple closes for winter around Diwali and reopens near Akshaya Tritiya in spring. Exact opening and closing dates are announced each year, so travel is planned within that window." }
    ]
  },
  "delhi-to-kufri": {
    from: "Delhi",
    to: "Kufri",
    distance: "355 km",
    distanceNum: 355,
    time: "8-9 hours",
    highway: "NH-5 via Chandigarh, Solan & Shimla",
    ...calcFares(355),
    highlights: ["Delhi to Kufri drive of about 355 km to the small hill resort just beyond Shimla in Himachal", "Route on NH-5 through Chandigarh, Solan and Shimla, then a short climb to Kufri", "Kufri is known for winter snow, the Himalayan Nature Park, pony rides and Mahasu peak views", "A comfortable hill drive, usually combined with Shimla and Chail on a Himachal weekend"],
    popularStops: ["Chandigarh", "Solan", "Shimla"],
    bestTime: "December to February for snow, and March to June for pleasant weather; the monsoon is avoided for landslide risk on the Shimla road",
    description: `The Delhi to Kufri one-way cab covers about 355 km into Himachal Pradesh to Kufri — a small hill resort at around 2,600 metres, about 15 km beyond Shimla on the Hindustan-Tibet road. Famous for its winter snow and the Mahasu peak viewpoint, Kufri is a popular day-trip and add-on from Shimla. At Triveni Cabs™ we run this route for families wanting Himachal snow and views, usually combined with Shimla and Chail on a hill weekend.

Because Kufri is about 355 km from Delhi, this is a comfortable 8-9 hour hill drive done in a single day with an early start. The route runs on NH-5 through Chandigarh, Zirakpur and Solan up to Shimla, then continues the short climb to Kufri. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and any driver hill allowance are extra at actual.

Kufri's draw is its snow and its views. In winter the slopes fill with visitors for tobogganing and snow play; year-round, the Himalayan Nature Park (a small zoo of high-altitude species), the Mahasu peak viewpoint reached by pony or a short walk, and the surrounding meadows are the main attractions. Private vehicles usually park below the main point and the final stretch is covered on pony or on foot, which we explain honestly. Our drivers know the Shimla-Kufri road, and we can hold the car for the visit or continue onward to Chail, Naldehra or Fagu if you are touring Himachal. Kufri works best as part of a Shimla-area itinerary rather than a standalone destination.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Kufri cost?", answer: "A one-way cab from Delhi to Kufri starts at ₹3,905 for a Sedan over the roughly 355 km route. An Ertiga SUV is ₹5,325 and an Innova Crysta is ₹6,390. These are upfront one-way fares with no return charge; toll and any driver hill allowance are extra at actual." },
      { question: "How long does Delhi to Kufri take by cab?", answer: "Delhi to Kufri is about 355 km and takes 8-9 hours on the NH-5 route through Chandigarh, Solan and Shimla, with a short final climb beyond Shimla. With an early start it is comfortably done in a single day, reaching Kufri by afternoon." },
      { question: "What is Kufri known for?", answer: "Kufri is known as a small hill resort just beyond Shimla, famous for winter snow and snow play, the Himalayan Nature Park, pony rides up to the Mahasu peak viewpoint and its meadows. It is a popular day-trip and add-on from Shimla rather than a large standalone hill station." },
      { question: "What is the best time to visit Kufri from Delhi?", answer: "December to February is best for snow, and March to June offers pleasant weather and clear views. The monsoon months are avoided for landslide risk on the Shimla road, and the shoulder seasons give the most comfortable driving conditions." },
      { question: "Can I combine Kufri with Shimla and Chail?", answer: "Yes. Kufri sits just beyond Shimla and pairs naturally with Shimla, Chail, Naldehra and Fagu on a Himachal weekend. We can hold the car for the Kufri visit or continue onward to these places; share your plan when you book so we can quote the waiting or onward leg." }
    ]
  },
  "delhi-to-chail": {
    from: "Delhi",
    to: "Chail",
    distance: "345 km",
    distanceNum: 345,
    time: "8-9 hours",
    highway: "NH-5 via Chandigarh, Solan & Kandaghat",
    ...calcFares(345),
    highlights: ["Delhi to Chail drive of about 345 km to the quiet forested hill town once a princely summer retreat", "Route on NH-5 through Chandigarh and Solan, then via Kandaghat and Kufri road to Chail", "Chail is known for the world's highest cricket ground, the Chail Palace and deodar forests", "A comfortable hill drive, a peaceful alternative to crowded Shimla nearby"],
    popularStops: ["Chandigarh", "Solan", "Kandaghat"],
    bestTime: "March to June and September to November for pleasant weather; December to February for occasional snow in the deodar forests",
    description: `The Delhi to Chail one-way cab covers about 345 km into Himachal Pradesh to Chail — a serene, forested hill town at around 2,250 metres, built as a summer retreat by the Maharaja of Patiala after he was barred from Shimla. Set among thick deodar forest and quieter than nearby Shimla, Chail is a favourite for couples, families and anyone wanting calm and heritage in the hills. At Triveni Cabs™ we run this route for Himachal holidays, often combined with Shimla and Kufri.

Because Chail is about 345 km from Delhi, this is a comfortable 8-9 hour hill drive done in a single day with an early start. The route runs on NH-5 through Chandigarh, Zirakpur and Solan, then turns off near Kandaghat and climbs through forest to Chail. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and any driver hill allowance are extra at actual.

Chail's landmarks are its heritage and its forest. The Chail cricket ground, laid out at around 2,440 metres, is famous as the highest cricket ground in the world; the Chail Palace, now a heritage hotel, sits amid pine and deodar; the Kali Ka Tibba temple crowns a nearby ridge with wide Himalayan views; and the Chail Wildlife Sanctuary offers quiet nature walks. Our drivers know the Kandaghat-Chail hill road, and we can hold the car for local sightseeing or continue onward to Shimla, Kufri or Naldehra if you are touring Himachal. For a peaceful, heritage-rich hill break near Shimla but far from its crowds, Chail is an excellent choice.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Chail cost?", answer: "A one-way cab from Delhi to Chail starts at ₹3,795 for a Sedan over the roughly 345 km route. An Ertiga SUV is ₹5,175 and an Innova Crysta is ₹6,210. These are upfront one-way fares with no return charge; toll and any driver hill allowance are extra at actual." },
      { question: "How long does Delhi to Chail take by cab?", answer: "Delhi to Chail is about 345 km and takes 8-9 hours on the NH-5 route through Chandigarh and Solan, then via Kandaghat into the forest. With an early start it is comfortably done in a single day, reaching Chail by afternoon." },
      { question: "What is Chail known for?", answer: "Chail is known as a quiet, forested hill town that was a princely summer retreat of the Maharaja of Patiala. Its highlights are the world's highest cricket ground, the heritage Chail Palace, the Kali Ka Tibba temple and the Chail Wildlife Sanctuary, all amid deodar forest." },
      { question: "What is the best time to visit Chail from Delhi?", answer: "March to June and September to November are best for pleasant weather and clear views, while December to February brings occasional snow to the deodar forests. The monsoon months are avoided for landslide risk on the hill roads." },
      { question: "Can I combine Chail with Shimla and Kufri?", answer: "Yes. Chail sits close to Shimla and Kufri and pairs naturally with them on a Himachal weekend. We can hold the car for local sightseeing at the cricket ground, Chail Palace and Kali Ka Tibba, or continue onward to Shimla, Kufri or Naldehra; share your plan when you book." }
    ]
  },
  "delhi-to-khajjiar": {
    from: "Delhi",
    to: "Khajjiar",
    distance: "560 km",
    distanceNum: 560,
    time: "13-14 hours",
    highway: "NH-44 & NH-154 via Chandigarh, Pathankot & Dalhousie",
    ...calcFares(560),
    highlights: ["Delhi to Khajjiar drive of about 560 km to the saucer-shaped meadow often called the Mini Switzerland of India", "Route via Chandigarh, Pathankot and Dalhousie, then the short forest road to Khajjiar", "Khajjiar is known for its glade ringed by deodar forest, the Khajji Nag temple and Dalhousie nearby", "A long hill drive best begun early or with a halt; usually combined with Dalhousie and Chamba"],
    popularStops: ["Chandigarh", "Pathankot", "Dalhousie"],
    bestTime: "March to June and September to November for green meadows and clear views; December to February for snow around the glade",
    description: `The Delhi to Khajjiar one-way cab covers about 560 km into Himachal Pradesh to Khajjiar — a small, saucer-shaped meadow at around 1,950 metres, ringed by thick deodar forest and long celebrated as the Mini Switzerland of India. About 20 km from the hill town of Dalhousie, Khajjiar's green glade with its central pond is one of the most photographed spots in the western Himalaya. At Triveni Cabs™ we run this route for families and couples on a Dalhousie-Khajjiar-Chamba holiday.

Because Khajjiar is about 560 km from Delhi on long hill roads, this is a long 13-14 hour drive and best begun very early or, more comfortably, with an overnight halt at Pathankot or Dalhousie before the final forest run to Khajjiar. The route runs on NH-44 to Chandigarh, then via Jalandhar and Pathankot into Himachal, climbing to Dalhousie before the short road through Kalatop forest to Khajjiar. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's hill night allowance are extra at actual.

Khajjiar's charm is its setting — the open grassy glade, the small central lake, and the deodar forest all around, with the Khajji Nag temple (a 12th-century shrine) at its edge. It is a place for gentle walks, horse rides and photographs rather than a big town, so most travellers stay at Dalhousie and visit Khajjiar for the day. The nearby Kalatop wildlife sanctuary and the old town of Chamba, with its ancient temples and museum, round out the circuit. Our drivers know the Dalhousie-Khajjiar forest road, and we can hold the car for the visit or continue onward to Chamba if you are touring the region.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Khajjiar cost?", answer: "A one-way cab from Delhi to Khajjiar starts at ₹6,160 for a Sedan over the roughly 560 km route. An Ertiga SUV is ₹8,400 and an Innova Crysta is ₹10,080. These are upfront one-way fares with no return charge; toll and the driver's hill night allowance are extra at actual." },
      { question: "How long does Delhi to Khajjiar take by cab?", answer: "Delhi to Khajjiar is about 560 km and takes 13-14 hours via Pathankot and Dalhousie, so it is best begun very early or with an overnight halt at Pathankot or Dalhousie before the final forest run to Khajjiar. We plan the halt with you when you book." },
      { question: "Why is Khajjiar called Mini Switzerland?", answer: "Khajjiar is called the Mini Switzerland of India for its saucer-shaped green meadow ringed by deodar forest, with a small central lake, resembling an alpine glade. It sits about 20 km from Dalhousie and is one of the most photographed spots in the western Himalaya." },
      { question: "What is the best time to visit Khajjiar from Delhi?", answer: "March to June and September to November are best for green meadows and clear views, while December to February brings snow around the glade. The monsoon months are avoided for landslide risk on the Dalhousie hill roads." },
      { question: "Should I stay at Khajjiar or Dalhousie?", answer: "Most travellers stay at Dalhousie, the nearby hill town, and visit Khajjiar for the day, as Khajjiar itself is a small meadow with limited stays. We can hold the car for the Khajjiar visit and continue to Kalatop or Chamba; share your plan when you book so we can quote it." }
    ]
  },
  "delhi-to-bir": {
    from: "Delhi",
    to: "Bir",
    distance: "500 km",
    distanceNum: 500,
    time: "12-13 hours",
    highway: "NH-44 & NH-154 via Chandigarh, Una & Baijnath",
    ...calcFares(500),
    highlights: ["Delhi to Bir drive of about 500 km to the paragliding hub of Bir-Billing in the Kangra valley", "Route via Chandigarh, Una, Palampur and Baijnath, then a short climb to Bir", "Bir-Billing is one of the world's best-known paragliding sites, season-dependent for flying", "A long hill drive best begun early or with a halt; Billing is the take-off, Bir the landing site"],
    popularStops: ["Chandigarh", "Una", "Palampur", "Baijnath"],
    bestTime: "Mid-March to mid-May and mid-September to November for the main paragliding seasons and clear weather; flying is weather-dependent",
    description: `The Delhi to Bir one-way cab covers about 500 km into Himachal's Kangra valley to Bir — a village at around 1,500 metres that, together with the Billing take-off point above it, forms Bir-Billing, one of the most famous paragliding destinations in the world. Set below the Dhauladhar range amid tea gardens and Tibetan monasteries, Bir draws adventure travellers, monastery visitors and those seeking a calm valley base. At Triveni Cabs™ we run this route for paragliding trips and Kangra-valley holidays.

Because Bir is about 500 km from Delhi on long hill roads, this is a long 12-13 hour drive and best begun very early or, more comfortably, with an overnight halt en route before the final climb into the Kangra valley. The route runs on NH-44 to Chandigarh, then via Una, Hamirpur and Palampur to Baijnath, and the short road up to Bir. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's hill night allowance are extra at actual.

Bir-Billing's main draw is paragliding: pilots take off from Billing, about 14 km up the hill at around 2,400 metres, and land at Bir. Flying is entirely season-dependent and weather-dependent, with the main windows in spring and autumn, and all flights are arranged with licensed local operators — this is separate from the taxi. Beyond flying, Bir has Tibetan monasteries and a Tibetan colony, tea gardens, cafes and quiet valley walks, and the nearby Baijnath Shiva temple and Palampur are worth a visit. Our drivers know the Kangra-valley roads, and we can hold the car for the Billing take-off transfer and local sightseeing or continue onward to Palampur, Dharamshala or McLeodganj.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Bir cost?", answer: "A one-way cab from Delhi to Bir starts at ₹5,500 for a Sedan over the roughly 500 km route. An Ertiga SUV is ₹7,500 and an Innova Crysta is ₹9,000. These are upfront one-way fares with no return charge; toll and the driver's hill night allowance are extra at actual, and paragliding is arranged separately." },
      { question: "How long does Delhi to Bir take by cab?", answer: "Delhi to Bir is about 500 km and takes 12-13 hours via Una, Palampur and Baijnath into the Kangra valley, so it is best begun very early or with an overnight halt en route. We plan the timing with you when you book." },
      { question: "Does the fare include paragliding at Bir-Billing?", answer: "No. We provide the road transport to Bir and can drive you up to the Billing take-off point, but the paragliding itself is arranged separately with licensed local operators. Flying is entirely season-dependent and weather-dependent, with the main windows in spring and autumn." },
      { question: "What is the best time to visit Bir from Delhi?", answer: "Mid-March to mid-May and mid-September to November are the main paragliding seasons with clear, stable weather. Flying is always weather-dependent and can be suspended on poor days, and the monsoon months are avoided for landslide risk and unsuitable flying conditions." },
      { question: "What is there to do at Bir besides paragliding?", answer: "Besides paragliding, Bir has Tibetan monasteries and a Tibetan colony, tea gardens, cafes and quiet valley walks below the Dhauladhar range, with the Baijnath Shiva temple and Palampur nearby. We can hold the car for local sightseeing or continue onward to Dharamshala and McLeodganj." }
    ]
  },
  "delhi-to-palampur": {
    from: "Delhi",
    to: "Palampur",
    distance: "480 km",
    distanceNum: 480,
    time: "11-12 hours",
    highway: "NH-44 & NH-154 via Chandigarh, Una & Kangra",
    ...calcFares(480),
    highlights: ["Delhi to Palampur drive of about 480 km to the tea-garden town in Himachal's Kangra valley", "Route via Chandigarh, Una and Kangra to Palampur below the Dhauladhar range", "Palampur is known for its tea estates, the Neugal Khad, Tashi Jong monastery and Dhauladhar views", "A long hill drive best begun early; a good base for Bir-Billing, Baijnath and Dharamshala"],
    popularStops: ["Chandigarh", "Una", "Kangra"],
    bestTime: "March to June and September to November for green tea gardens and clear Dhauladhar views; the monsoon brings heavy rain to the valley",
    description: `The Delhi to Palampur one-way cab covers about 480 km into Himachal's Kangra valley to Palampur — a green tea-garden town at around 1,470 metres, spread below the steep wall of the Dhauladhar range. Known for its tea estates, pine air and mountain backdrop, Palampur is a relaxed base for exploring the Kangra valley. At Triveni Cabs™ we run this route for tea-country holidays, families and travellers combining Palampur with Bir-Billing, Baijnath and Dharamshala.

Because Palampur is about 480 km from Delhi on long hill roads, this is a long 11-12 hour drive and best begun very early or, more comfortably, with a halt en route. The route runs on NH-44 to Chandigarh, then via Una, Hamirpur and Kangra into the valley to Palampur. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's hill night allowance are extra at actual.

Palampur's appeal is its tea gardens and its setting. Working tea estates surround the town, the Neugal Khad stream offers a scenic promenade with Dhauladhar views, and the Tashi Jong and Sherabling monasteries, the Bundla waterfall and the old Andretta artists' village lie a short drive away. The Baijnath Shiva temple, one of the oldest in the region, and the paragliding hub of Bir-Billing are close by. Our drivers know the Kangra-valley roads, and we can hold the car for local sightseeing or continue onward to Dharamshala, McLeodganj or Bir if you are touring the valley. For green calm and big mountain views, Palampur is one of Himachal's most restful bases.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Palampur cost?", answer: "A one-way cab from Delhi to Palampur starts at ₹5,280 for a Sedan over the roughly 480 km route. An Ertiga SUV is ₹7,200 and an Innova Crysta is ₹8,640. These are upfront one-way fares with no return charge; toll and the driver's hill night allowance are extra at actual." },
      { question: "How long does Delhi to Palampur take by cab?", answer: "Delhi to Palampur is about 480 km and takes 11-12 hours via Una and Kangra into the Kangra valley, so it is best begun very early or with a halt en route. We plan the timing with you when you book." },
      { question: "What is Palampur known for?", answer: "Palampur is known as the tea capital of the Kangra valley, with green tea estates, the Neugal Khad promenade, Tibetan monasteries at Tashi Jong and Sherabling, the Bundla waterfall and wide Dhauladhar range views. It is a relaxed base for Bir-Billing, Baijnath and Dharamshala." },
      { question: "What is the best time to visit Palampur from Delhi?", answer: "March to June and September to November are best for green tea gardens and clear Dhauladhar views. The monsoon brings heavy rain to the Kangra valley and is generally avoided for travel and landslide risk on the hill roads." },
      { question: "Can I combine Palampur with Dharamshala and Bir?", answer: "Yes. Palampur sits centrally in the Kangra valley and pairs naturally with Dharamshala, McLeodganj, Bir-Billing and Baijnath. We can hold the car for local sightseeing or continue onward to these places; share your plan when you book so we can quote the waiting or onward leg." }
    ]
  },
  "delhi-to-kangra": {
    from: "Delhi",
    to: "Kangra",
    distance: "470 km",
    distanceNum: 470,
    time: "11-12 hours",
    highway: "NH-44 & NH-154 via Chandigarh, Una & Hamirpur",
    ...calcFares(470),
    highlights: ["Delhi to Kangra drive of about 470 km to the historic temple town in Himachal's Kangra valley", "Route via Chandigarh, Una and Hamirpur to Kangra below the Dhauladhar range", "Kangra is known for the Kangra Fort, the Brajeshwari Devi and Jwala Ji temples and the Kangra valley", "A long hill drive best begun early; a gateway to Dharamshala, McLeodganj and Palampur"],
    popularStops: ["Chandigarh", "Una", "Hamirpur"],
    bestTime: "March to June and September to November for pleasant weather and clear Dhauladhar views; the monsoon brings heavy valley rain",
    description: `The Delhi to Kangra one-way cab covers about 470 km into Himachal's Kangra valley to Kangra — a historic temple and fort town at around 730 metres, set below the Dhauladhar range at the heart of one of Himachal's most storied valleys. Rich in temples and history, Kangra is both a pilgrimage centre and the gateway to Dharamshala and McLeodganj just above it. At Triveni Cabs™ we run this route for temple pilgrims, heritage travellers and families touring the Kangra valley.

Because Kangra is about 470 km from Delhi on long roads, this is a long 11-12 hour drive and best begun very early or, more comfortably, with a halt en route. The route runs on NH-44 to Chandigarh, then via Una and Hamirpur into the valley to Kangra. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's hill night allowance are extra at actual.

Kangra's landmarks are its fort and its temples. The Kangra Fort, one of the oldest and largest forts in India, stands above the confluence of the Banganga and Manjhi rivers; the Brajeshwari Devi temple in Kangra town and the famous Jwala Ji temple with its natural eternal flames, about 30 km away, are major pilgrimage sites, as is the Chamunda Devi temple nearby. Dharamshala, McLeodganj and the Dalai Lama's residence lie a short climb above, and Palampur and the Kangra valley tea country are within easy reach. Our drivers know the valley roads, and we can hold the car for temple visits or continue onward to Dharamshala and McLeodganj if you are touring the region.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Kangra cost?", answer: "A one-way cab from Delhi to Kangra starts at ₹5,170 for a Sedan over the roughly 470 km route. An Ertiga SUV is ₹7,050 and an Innova Crysta is ₹8,460. These are upfront one-way fares with no return charge; toll and the driver's hill night allowance are extra at actual." },
      { question: "How long does Delhi to Kangra take by cab?", answer: "Delhi to Kangra is about 470 km and takes 11-12 hours via Una and Hamirpur into the Kangra valley, so it is best begun very early or with a halt en route. We plan the timing with you when you book." },
      { question: "What is Kangra known for?", answer: "Kangra is known for the historic Kangra Fort, one of the oldest and largest forts in India, and its temples, including the Brajeshwari Devi temple, the Jwala Ji temple with its natural eternal flames and the Chamunda Devi temple. It is also the gateway to Dharamshala and McLeodganj." },
      { question: "What is the best time to visit Kangra from Delhi?", answer: "March to June and September to November are best for pleasant weather and clear Dhauladhar views. The monsoon brings heavy rain to the Kangra valley and is generally avoided for travel and landslide risk on the hill roads." },
      { question: "Can I combine Kangra with Dharamshala and Jwala Ji?", answer: "Yes. Kangra is the gateway to Dharamshala and McLeodganj just above it, and the Jwala Ji and Chamunda Devi temples are a short drive away. We can hold the car for temple visits or continue onward to Dharamshala and Palampur; share your plan when you book so we can quote it." }
    ]
  },
  "delhi-to-kinnaur": {
    from: "Delhi",
    to: "Kinnaur",
    distance: "585 km",
    distanceNum: 585,
    time: "15-16 hours",
    highway: "NH-5 via Chandigarh, Shimla, Narkanda & Kalpa",
    ...calcFares(585),
    highlights: ["Delhi to Kinnaur drive of about 585 km to Kalpa, a key town in the high Kinnaur district of Himachal", "Route on NH-5 via Chandigarh, Shimla, Narkanda and the Sutlej valley to Kalpa", "Kinnaur is known for the Kinnaur Kailash peak view from Kalpa, apple orchards and the Sutlej gorge", "A genuine two-day mountain drive; Inner Line Permit awareness needed for areas near the Tibet border"],
    popularStops: ["Chandigarh", "Shimla", "Narkanda", "Reckong Peo"],
    bestTime: "April to June and September to October for clear weather and apple season; winter brings heavy snow and possible road closures",
    description: `The Delhi to Kinnaur one-way cab covers about 585 km into the high Himachal Himalaya to Kalpa in Kinnaur district — a beautiful old apple-growing town at around 2,960 metres, sitting directly opposite the sacred Kinnaur Kailash range across the Sutlej valley. Kinnaur is a rugged, high frontier region of deep gorges, apple orchards and Indo-Tibetan culture. At Triveni Cabs™ we run this route for travellers on the Kinnaur-Spiti circuit and those seeking dramatic high-mountain scenery, and we describe the journey honestly as a demanding multi-day mountain drive.

Because Kalpa/Kinnaur is about 585 km from Delhi on hard mountain roads, this is a two-day journey, not a single-day drive. The realistic plan is an overnight halt — commonly at Shimla, Narkanda or Sarahan — before continuing up the Sutlej valley to Reckong Peo and Kalpa. The route runs on NH-5 through Chandigarh and Shimla, over Narkanda, and along the Sutlej through Rampur and the Kinnaur gorge. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's mountain night allowance are extra at actual.

Kalpa's chief draw is the grandstand view of Kinnaur Kailash, one of Lord Shiva's mythical abodes, with its dawn and sunset light on the snow; the old village, its wooden temples, the apple orchards and the nearby Suicide Point and Roghi village round out the visit. Kinnaur borders Tibet, and while Kalpa and Reckong Peo are open to all, some areas deeper towards the border and on the way to Spiti require an Inner Line Permit — we advise checking the current permit rules for your exact route in advance. Our drivers know the NH-5 Kinnaur road, which has narrow and landslide-prone sections, and we plan the halts and timings for safe daylight driving.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Kinnaur cost?", answer: "A one-way cab from Delhi to Kinnaur (Kalpa) starts at ₹6,435 for a Sedan over the roughly 585 km route. An Ertiga SUV is ₹8,775 and an Innova Crysta is ₹10,530. These are upfront one-way fares; toll and the driver's mountain night allowance for this multi-day journey are extra at actual." },
      { question: "How long does Delhi to Kinnaur take by cab?", answer: "Delhi to Kinnaur (Kalpa) is about 585 km and realistically a 15-16 hour drive on hard mountain roads, so it is a two-day journey with an overnight halt at Shimla, Narkanda or Sarahan. We plan the halt and timings for safe daylight driving when you book." },
      { question: "Is an Inner Line Permit needed for Kinnaur?", answer: "Kalpa and Reckong Peo are open to all travellers, but some areas deeper towards the Tibet border and on the route onward to Spiti require an Inner Line Permit. We advise checking the current permit rules for your exact itinerary in advance, as regulations can change." },
      { question: "What is Kalpa in Kinnaur known for?", answer: "Kalpa is known for its grandstand view of the sacred Kinnaur Kailash range across the Sutlej valley, its old wooden temples, apple orchards and the nearby Roghi village and Suicide Point. It is a scenic base in the high, rugged Kinnaur district of Himachal." },
      { question: "What is the best time to visit Kinnaur from Delhi?", answer: "April to June and September to October are best for clear weather and the apple season, with September offering ripe orchards. Winter brings heavy snow and possible road closures, and the monsoon is avoided for landslides on the narrow NH-5 Kinnaur road." }
    ]
  },
  "delhi-to-sangla": {
    from: "Delhi",
    to: "Sangla",
    distance: "570 km",
    distanceNum: 570,
    time: "15-16 hours",
    highway: "NH-5 via Chandigarh, Shimla, Narkanda & Karcham",
    ...calcFares(570),
    highlights: ["Delhi to Sangla drive of about 570 km to the beautiful Baspa valley village in Kinnaur district", "Route on NH-5 via Chandigarh, Shimla and Narkanda, then up the Baspa valley from Karcham to Sangla", "Sangla is known for its apple and apricot orchards, the Kamru fort and the scenic Baspa river", "A genuine two-day mountain drive; Inner Line Permit awareness needed for areas near the Tibet border"],
    popularStops: ["Chandigarh", "Shimla", "Narkanda", "Karcham"],
    bestTime: "April to June and September to October for clear weather and orchard season; winter brings heavy snow and possible Baspa valley closures",
    description: `The Delhi to Sangla one-way cab covers about 570 km into the high Himachal Himalaya to Sangla — a lovely village at around 2,600 metres in the Baspa valley of Kinnaur district, set among apple and apricot orchards below towering snow peaks. One of the most scenic corners of Kinnaur, Sangla is a favourite base for exploring the Baspa valley up to Chitkul. At Triveni Cabs™ we run this route for travellers on the Kinnaur circuit seeking the valley's dramatic mountain beauty, and we describe the journey honestly as a demanding multi-day mountain drive.

Because Sangla is about 570 km from Delhi on hard mountain roads, this is a two-day journey, not a single-day drive. The realistic plan is an overnight halt — commonly at Shimla, Narkanda or Sarahan — before turning off NH-5 at Karcham and climbing the Baspa valley to Sangla. The route runs on NH-5 through Chandigarh, Shimla and Narkanda, along the Sutlej to Karcham. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's mountain night allowance are extra at actual.

Sangla's charm is the Baspa valley itself — orchards, wooden Kinnauri temples, the historic Kamru fort above the village, and the clear Baspa river running through pine and deodar forest with snow peaks behind. It is the gateway to Chitkul, the last inhabited village of the valley, about 22 km further up. Kinnaur borders Tibet, and while Sangla and Chitkul are generally open to Indian travellers, some areas near the border require an Inner Line Permit, so we advise checking the current rules for your route in advance. Our drivers know the narrow Karcham-Sangla road, which is landslide-prone in places, and we plan the halts and timings for safe daylight driving.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Sangla cost?", answer: "A one-way cab from Delhi to Sangla starts at ₹6,270 for a Sedan over the roughly 570 km route. An Ertiga SUV is ₹8,550 and an Innova Crysta is ₹10,260. These are upfront one-way fares; toll and the driver's mountain night allowance for this multi-day journey are extra at actual." },
      { question: "How long does Delhi to Sangla take by cab?", answer: "Delhi to Sangla is about 570 km and realistically a 15-16 hour drive on hard mountain roads, so it is a two-day journey with an overnight halt at Shimla, Narkanda or Sarahan before the Baspa valley climb from Karcham. We plan the halt and timings when you book." },
      { question: "Is an Inner Line Permit needed for Sangla?", answer: "Sangla and the Baspa valley up to Chitkul are generally open to Indian travellers, but some areas near the Tibet border require an Inner Line Permit. We advise checking the current permit rules for your exact itinerary in advance, as regulations can change." },
      { question: "What is Sangla known for?", answer: "Sangla is known as one of the most scenic villages of Kinnaur's Baspa valley, with apple and apricot orchards, the historic Kamru fort, wooden Kinnauri temples and the clear Baspa river below snow peaks. It is the main base for visiting Chitkul, the valley's last inhabited village." },
      { question: "What is the best time to visit Sangla from Delhi?", answer: "April to June and September to October are best for clear weather and the orchard season. Winter brings heavy snow and possible Baspa valley closures, and the monsoon is avoided for landslides on the narrow Karcham-Sangla road." }
    ]
  },
  "delhi-to-chitkul": {
    from: "Delhi",
    to: "Chitkul",
    distance: "600 km",
    distanceNum: 600,
    time: "16-17 hours",
    highway: "NH-5 via Chandigarh, Shimla, Karcham & Sangla",
    ...calcFares(600),
    highlights: ["Delhi to Chitkul drive of about 600 km to the last inhabited village of the Baspa valley near the Indo-Tibet border", "Route on NH-5 via Chandigarh, Shimla and Narkanda, then up the Baspa valley through Sangla to Chitkul", "Chitkul is known for its wooden houses, the Baspa river, potato fields and dramatic Himalayan setting", "A genuine two-day mountain drive; Inner Line Permit awareness needed near the Tibet border"],
    popularStops: ["Chandigarh", "Shimla", "Karcham", "Sangla"],
    bestTime: "May to October, when the high Baspa valley road is open; the village is often cut off by snow in the deep winter",
    description: `The Delhi to Chitkul one-way cab covers about 600 km into the high Himachal Himalaya to Chitkul — the last inhabited village of the Baspa valley in Kinnaur, at around 3,450 metres, close to the Indo-Tibet border. Famous as the final village on the old Hindustan-Tibet trade route, Chitkul is a place of wooden houses, potato and buckwheat fields and raw mountain scenery along the pristine Baspa river. At Triveni Cabs™ we run this route for travellers seeking one of the most remote and beautiful road-heads in Himachal, and we describe the journey honestly as a long, demanding multi-day mountain drive.

Because Chitkul is about 600 km from Delhi on hard, high mountain roads, this is a two-day journey, not a single-day drive. The realistic plan is an overnight halt — commonly at Shimla, Narkanda, Sarahan or Sangla — before the final climb up the Baspa valley to Chitkul. The route runs on NH-5 through Chandigarh, Shimla and Narkanda, along the Sutlej to Karcham, then up the valley through Sangla to Chitkul. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's mountain night allowance are extra at actual.

Chitkul's appeal is its remoteness and its setting — the last village before the border, with a small ancient temple, traditional Kinnauri wooden architecture, the clear Baspa river and a horizon of snow peaks. Facilities are basic, with a few small guesthouses and homestays, so we advise arranging a stay at Sangla or Chitkul in advance. Because Chitkul sits near the sensitive Indo-Tibet border, travel beyond the village is restricted and some areas need an Inner Line Permit, so we advise checking the current rules in advance. Our drivers know the narrow, landslide-prone Baspa valley road, and we plan the halts and timings for safe daylight driving to this beautiful frontier village.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Chitkul cost?", answer: "A one-way cab from Delhi to Chitkul starts at ₹6,600 for a Sedan over the roughly 600 km route. An Ertiga SUV is ₹9,000 and an Innova Crysta is ₹10,800. These are upfront one-way fares; toll and the driver's mountain night allowance for this multi-day journey are extra at actual." },
      { question: "How long does Delhi to Chitkul take by cab?", answer: "Delhi to Chitkul is about 600 km and realistically a 16-17 hour drive on hard, high mountain roads, so it is a two-day journey with an overnight halt at Shimla, Narkanda, Sarahan or Sangla before the final Baspa valley climb. We plan the halt and timings when you book." },
      { question: "Is Chitkul near the Indo-Tibet border?", answer: "Yes. Chitkul is the last inhabited village of the Baspa valley near the Indo-Tibet border. Travel beyond the village is restricted, and some areas near the border require an Inner Line Permit. We advise checking the current permit and access rules for your route in advance." },
      { question: "What is the best time to visit Chitkul from Delhi?", answer: "May to October is the best window, when the high Baspa valley road to Chitkul is open and the fields are green. The village is often cut off by snow in the deep winter, and the monsoon is avoided for landslides on the narrow valley road." },
      { question: "Is there accommodation at Chitkul?", answer: "Chitkul is a remote frontier village with basic facilities and only a few small guesthouses and homestays, so we strongly advise booking a stay at Sangla or Chitkul in advance. We provide the road transport to the village; the stay and meals are arranged separately." }
    ]
  },
  "delhi-to-tirthan-valley": {
    from: "Delhi",
    to: "Tirthan Valley",
    distance: "510 km",
    distanceNum: 510,
    time: "12-13 hours",
    highway: "NH-3 & NH-305 via Chandigarh, Mandi, Aut & Banjar",
    ...calcFares(510),
    highlights: ["Delhi to Tirthan Valley drive of about 510 km to the trout-rich river valley beside the Great Himalayan National Park", "Route via Chandigarh, Bilaspur and Mandi, then off the Aut tunnel through Banjar into the Tirthan valley", "Tirthan Valley is known for trout fishing, riverside stays, the GHNP gateway and quiet forest walks", "A long hill drive best begun early; often combined with Jibhi and the Jalori Pass"],
    popularStops: ["Chandigarh", "Mandi", "Aut", "Banjar"],
    bestTime: "March to June and September to November for pleasant weather, trout season and clear forest walks; the monsoon brings heavy rain",
    description: `The Delhi to Tirthan Valley one-way cab covers about 510 km into Himachal's Kullu district to the Tirthan Valley — a serene river valley at around 1,600 metres, named after the trout-rich Tirthan river and lying at the gateway to the Great Himalayan National Park, a UNESCO World Heritage Site. Off the main tourist trail and free of crowds, Tirthan is a favourite for nature lovers, anglers and travellers wanting riverside calm. At Triveni Cabs™ we run this route for offbeat Himachal holidays, usually combined with nearby Jibhi and the Jalori Pass.

Because the Tirthan Valley is about 510 km from Delhi on long hill roads, this is a long 12-13 hour drive and best begun very early or, more comfortably, with a halt en route. The route runs on NH-3 through Chandigarh, Bilaspur and Mandi, then just before the Aut tunnel turns off along the Tirthan river through Banjar into the valley. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's hill night allowance are extra at actual.

Tirthan's charm is its river and its forest. Trout fishing in the clear Tirthan river is a signature activity (angling permits are arranged locally), and there are riverside homestays and cottages, gentle nature walks, small waterfalls, and the entry points into the Great Himalayan National Park at Gushaini and Ropa for guided treks and wildlife. The nearby village of Jibhi, the Jalori Pass, the Serolsar lake and the Chehni Kothi tower round out the area. Our drivers know the Banjar-Tirthan road, and we can hold the car for local sightseeing or continue onward to Jibhi and the Jalori Pass if you are exploring the region. For quiet, water and forest close to nature, Tirthan is one of Himachal's loveliest offbeat valleys.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Tirthan Valley cost?", answer: "A one-way cab from Delhi to Tirthan Valley starts at ₹5,610 for a Sedan over the roughly 510 km route. An Ertiga SUV is ₹7,650 and an Innova Crysta is ₹9,180. These are upfront one-way fares with no return charge; toll and the driver's hill night allowance are extra at actual." },
      { question: "How long does Delhi to Tirthan Valley take by cab?", answer: "Delhi to Tirthan Valley is about 510 km and takes 12-13 hours via Mandi and the Aut turn-off through Banjar, so it is best begun very early or with a halt en route. We plan the timing with you when you book." },
      { question: "What is Tirthan Valley known for?", answer: "Tirthan Valley is known for trout fishing in the clear Tirthan river, riverside homestays, and as the gateway to the Great Himalayan National Park, a UNESCO World Heritage Site. It offers quiet forest walks, small waterfalls and an offbeat, uncrowded Himalayan setting near Jibhi and the Jalori Pass." },
      { question: "What is the best time to visit Tirthan Valley from Delhi?", answer: "March to June and September to November are best for pleasant weather, the trout season and clear forest walks. The monsoon brings heavy rain and landslide risk to the Kullu hill roads and is generally avoided for this valley trip." },
      { question: "Can I combine Tirthan Valley with Jibhi and Jalori Pass?", answer: "Yes. Tirthan Valley, Jibhi, the Jalori Pass and the Serolsar lake all lie close together in the Banjar area and combine easily. We can hold the car for local sightseeing or continue onward to Jibhi and the Jalori Pass; share your plan when you book so we can quote the waiting or onward leg." }
    ]
  },
  "delhi-to-jibhi": {
    from: "Delhi",
    to: "Jibhi",
    distance: "505 km",
    distanceNum: 505,
    time: "12-13 hours",
    highway: "NH-3 & NH-305 via Chandigarh, Mandi, Aut & Banjar",
    ...calcFares(505),
    highlights: ["Delhi to Jibhi drive of about 505 km to the quiet forest village in the Banjar valley of Himachal's Kullu district", "Route via Chandigarh, Bilaspur and Mandi, then off the Aut tunnel through Banjar to Jibhi", "Jibhi is known for its wooden cottages, waterfalls, the Jalori Pass and the Serolsar lake", "A long hill drive best begun early; often combined with the Tirthan Valley and Jalori Pass"],
    popularStops: ["Chandigarh", "Mandi", "Aut", "Banjar"],
    bestTime: "March to June and September to November for pleasant weather and open trails; December to February for snow, when the Jalori Pass can close",
    description: `The Delhi to Jibhi one-way cab covers about 505 km into Himachal's Kullu district to Jibhi — a tranquil forest village at around 1,600 metres in the Banjar valley, dotted with wooden cottages and cafes among pine and deodar. A quieter neighbour to the Tirthan Valley, Jibhi has become a favourite for travellers seeking slow days, waterfalls and offbeat mountain calm. At Triveni Cabs™ we run this route for offbeat Himachal holidays, usually combined with the Tirthan Valley and the Jalori Pass.

Because Jibhi is about 505 km from Delhi on long hill roads, this is a long 12-13 hour drive and best begun very early or, more comfortably, with a halt en route. The route runs on NH-3 through Chandigarh, Bilaspur and Mandi, then just before the Aut tunnel turns off along the valley through Banjar to Jibhi. Fares are distance-based and quoted upfront with no return charge on a one-way trip; toll and the driver's hill night allowance are extra at actual.

Jibhi's appeal is its forest calm. The Jibhi waterfall, the old wooden Mini Thailand pools, and the cafes and cottages tucked in the pines make it a relaxed base, while the Jalori Pass at around 3,120 metres, about 12 km above, opens onto the Serolsar lake trek and the ancient Chehni Kothi tower. The nearby Great Himalayan National Park gateway and the trout-rich Tirthan Valley are close by. The Jalori Pass can close with snow in deep winter, which we flag honestly. Our drivers know the Banjar-Jibhi road, and we can hold the car for local sightseeing or continue onward to the Tirthan Valley and the Jalori Pass if you are exploring the region. For quiet forest days near a high mountain pass, Jibhi is one of Himachal's most charming offbeat villages.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Jibhi cost?", answer: "A one-way cab from Delhi to Jibhi starts at ₹5,555 for a Sedan over the roughly 505 km route. An Ertiga SUV is ₹7,575 and an Innova Crysta is ₹9,090. These are upfront one-way fares with no return charge; toll and the driver's hill night allowance are extra at actual." },
      { question: "How long does Delhi to Jibhi take by cab?", answer: "Delhi to Jibhi is about 505 km and takes 12-13 hours via Mandi and the Aut turn-off through Banjar, so it is best begun very early or with a halt en route. We plan the timing with you when you book." },
      { question: "What is Jibhi known for?", answer: "Jibhi is known as a quiet forest village in the Banjar valley, with wooden cottages and cafes among the pines, the Jibhi waterfall, the Mini Thailand pools, and easy access to the Jalori Pass and the Serolsar lake. It is a relaxed, offbeat base close to the Tirthan Valley." },
      { question: "What is the best time to visit Jibhi from Delhi?", answer: "March to June and September to November are best for pleasant weather and open trails. December to February brings snow, when the higher Jalori Pass can close, and the monsoon is avoided for landslide risk on the Kullu hill roads." },
      { question: "Can I combine Jibhi with the Jalori Pass and Tirthan Valley?", answer: "Yes. Jibhi, the Jalori Pass, the Serolsar lake and the Tirthan Valley all lie close together in the Banjar area and combine easily. We can hold the car for local sightseeing or continue onward to the Jalori Pass and Tirthan Valley, subject to the pass being open; share your plan when you book." }
    ]
  },
};
