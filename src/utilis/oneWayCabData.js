// src/utilis/oneWayCabData.js - Complete data for all one-way cab routes
// Pricing: Sedan ₹11/km, Ertiga ₹15/km, Innova ₹18/km (min 300km billing)
// Week 39 expansion: 47 new Delhi corridors merged from ./oneway/newCorridorsA & B
import { newCorridorsA } from './oneway/newCorridorsA';
import { newCorridorsB } from './oneway/newCorridorsB';

function calcFares(distanceKm) {
  const billableKm = Math.max(distanceKm, 300);
  const sedan = billableKm * 11;
  const ertiga = billableKm * 15;
  const innova = billableKm * 18;
  return {
    oneWayFares: {
      sedan: `₹${sedan.toLocaleString('en-IN')}`,
      ertiga: `₹${ertiga.toLocaleString('en-IN')}`,
      innova: `₹${innova.toLocaleString('en-IN')}`,
    },
    roundTripFares: {
      sedan: `₹${(sedan * 2).toLocaleString('en-IN')}`,
      ertiga: `₹${(ertiga * 2).toLocaleString('en-IN')}`,
      innova: `₹${(innova * 2).toLocaleString('en-IN')}`,
    },
    savings: `₹${sedan.toLocaleString('en-IN')}`,
    savingsPercent: "50%",
    sedanRaw: sedan,
  };
}

const _baseOneWayRoutes = {
"dehradun-to-mussoorie": {
    from: "Dehradun",
    to: "Mussoorie",
    distance: "35 km",
    distanceNum: 35,
    time: "1-1.5 hours",
    highway: "Mussoorie Road",
    ...calcFares(35),
    highlights: ["Short scenic climb from Dehradun up to Mussoorie, the Queen of Hills", "1-1.5 hours on the winding Mussoorie Road with Doon Valley viewpoints", "Ideal half-day sightseeing hire with waiting for Kempty Falls, Mall Road and Gun Hill"],
    popularStops: [],
    bestTime: "Early 8-9 AM departure so you climb before the Mall Road traffic builds and enjoy Kempty Falls and the Doon Valley views in clear morning light",
    description: `The Dehradun to Mussoorie one-way cab is the easy, scenic way up to Uttarakhand's most beloved hill station — a short 35 km climb from Dehradun, the Doon Valley capital, up the winding Mussoorie Road to Mussoorie itself, the "Queen of Hills" strung along a ridge at nearly 6,600 feet with the snow peaks of the Garhwal Himalaya on the horizon. At Triveni Cabs we run this pretty little corridor for families on a Doon-and-Mussoorie holiday, honeymooners chasing mountain-and-mist views, travellers arriving into Dehradun by train or into Jolly Grant Airport, and anyone who wants a comfortable private car for a relaxed day trip to Kempty Falls and Mall Road rather than crowding into a shared taxi from the stand. It is one of the shortest but most rewarding drives in all of Uttarakhand.

Because Dehradun to Mussoorie is only 35 km, this leg is best understood as a local taxi or half-day sightseeing hire rather than a long one-way drop — and it bills at our 300 km minimum fare, which we state honestly upfront. A genuine 35 km transfer would be a very small fare, but a private hill car with a driver who knows the Mussoorie Road hairpins, holds for your sightseeing, and brings you back down safely is worth far more than a shared sumo. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, and the practical, honest way to use it is as a half-day local hire: the driver picks you up in Dehradun, climbs to Mussoorie, waits while you explore Kempty Falls, Mall Road, Gun Hill and Camel's Back Road, and drives you back the same day. The Ertiga SUV is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or small group who value a clean vehicle, room for warm layers, and a driver who runs this road daily. The 300 km minimum covers this half-day local hire with waiting, which is the realistic use case for such a short but steep hill route.

The drive itself is short but consistently beautiful. From Dehradun the route leaves the city near the Kishanpur and Rajpur Road belt and immediately begins to climb, winding up the well-graded Mussoorie Road through terraced hillsides and pine forest. Within a few kilometres the Doon Valley opens up below you, and there are several natural viewpoints — the famous Picture Palace and Company Garden approaches near the top offer sweeping panoramas of the valley floor and the distant Shivalik ranges. The road twists steadily upward past Kolukhet and the Galogi power-house bend before reaching the Mussoorie town limits at the Library (Gandhi Chowk) end or the Picture Palace end of the Mall. Total drive time is a comfortable 1-1.5 hours, which is why we recommend an early 8-9 AM departure so you climb before the Mall Road traffic and parking crush builds, ride the Gun Hill ropeway and see Kempty Falls in the fresh morning light, and still have the whole day for Camel's Back Road and Landour before an unhurried descent.

En-route this is a short, direct climb with no compulsory major halts, but the roadside viewpoints are the real reward. Many travellers ask to pause at the Picture Palace viewpoint for the classic Doon Valley panorama, or at one of the tea stalls partway up for chai with a view. Kempty Falls, about 15 km beyond Mussoorie town on the Yamunotri road, is the single most popular add-on and easy to fold into a half-day hire. Our drivers know the reliable parking arrangements at the Library and Picture Palace ends of the Mall, where private vehicles must park before you walk or take a local shuttle into the pedestrianised heart of town. On a run this short most travellers simply enjoy the climb and save their energy for the hill station itself.

Our pickup reach covers all of Dehradun without extra charge — any hotel along Rajpur Road and the Clock Tower belt, the Dehradun railway station and ISBT, the Robber's Cave and Sahastradhara areas, Jolly Grant Airport (DED) with flight tracking, and doorstep pickup from any address in the Doon Valley. In Mussoorie we drop at any hotel along the Mall Road, Library, Landour and Happy Valley areas, or at the Kempty Falls and Company Garden points (no extra charge), and can hold on a waiting basis for your return to Dehradun or continue onward toward Dhanaulti or the Yamunotri road if you are planning a fuller Garhwal circuit.

For vehicle choice on this easy hill leg, the priority is a comfortable, sure-footed ride and room for the layers a Mussoorie day demands. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers travelling light. Families of four to six should book the Ertiga SUV for the extra room and boot space, especially handy with warm clothing. For groups of six to seven or those wanting maximum comfort on the winding climb, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Dehradun-Mussoorie road daily and can hold the car for your sightseeing. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer or half-day hire to Mussoorie.`,
    faqs: [
      { question: "How much does a one-way cab from Dehradun to Mussoorie cost?", answer: "A one-way cab from Dehradun to Mussoorie starts at ₹3,300 for a Sedan. Because the route is only 35 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. The fare covers a half-day local hire with waiting, and toll and parking are extra at actual." },
      { question: "What is the Dehradun to Mussoorie cab fare or price?", answer: "The Dehradun to Mussoorie cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 35 km route bills at our 300 km minimum at ₹11/km, giving you a private air-conditioned hill car with doorstep pickup and waiting for sightseeing. Toll and parking are extra at actual." },
      { question: "How long does Dehradun to Mussoorie take by cab?", answer: "Dehradun to Mussoorie is about 35 km and takes 1-1.5 hours by cab on the winding Mussoorie Road, climbing through pine forest with Doon Valley viewpoints. An early 8-9 AM start lets you reach Mussoorie before the Mall Road traffic builds and enjoy Kempty Falls and Gun Hill in clear morning light." },
      { question: "Why is the Dehradun to Mussoorie fare based on 300 km?", answer: "The route is only 35 km, and like all short hill trips it is best used as a half-day local sightseeing hire, so it bills at our 300 km minimum fare and a Sedan is ₹3,300. This covers a private, air-conditioned hill car with doorstep pickup and waiting time for Kempty Falls, Mall Road and Gun Hill, far more comfortable than a shared taxi from the stand." },
      { question: "Can the cab wait for a Mussoorie day trip and bring me back to Dehradun?", answer: "Yes. Because most travellers visit Mussoorie as a day trip, the fare covers a half-day local hire with waiting, so the car holds for you while you explore Kempty Falls, Mall Road, Gun Hill and Camel's Back Road, then drives you back to Dehradun the same evening. Just let us know your plan when you book." },
      { question: "Which vehicle is best for Dehradun to Mussoorie?", answer: "For this easy 35 km scenic climb, a Sedan suits 2-3 passengers, while the Ertiga is ideal for families of 4-6 who want extra room for warm layers. Groups of 6-7 or those wanting maximum comfort on the winding Mussoorie Road should choose the Innova Crysta." }
    ]
  },
  "dehradun-to-rishikesh": {
    from: "Dehradun",
    to: "Rishikesh",
    distance: "45 km",
    distanceNum: 45,
    time: "1-1.5 hours",
    highway: "NH-7 via Doiwala",
    ...calcFares(45),
    highlights: ["Short scenic run from Dehradun down to Rishikesh, the yoga capital of the world", "1-1.5 hours on NH-7 via Doiwala past forests and the Jolly Grant Airport road", "Ideal half-day sightseeing hire with waiting for Ganga Aarti, Laxman Jhula and the ashrams"],
    popularStops: [],
    bestTime: "An afternoon 2-3 PM departure works beautifully so you reach Rishikesh in time for the evening Ganga Aarti at Triveni or Parmarth Niketan Ghat",
    description: `The Dehradun to Rishikesh one-way cab is the easy, scenic way to travel between the Doon Valley capital and the spiritual river town of Rishikesh — a short 45 km run down NH-7 to the "yoga capital of the world," where the Ganga rushes clear and green out of the Himalaya past ashrams, iron footbridges, and the famous riverside aarti ghats. At Triveni Cabs we run this pretty corridor for families on an Uttarakhand holiday, yoga and wellness travellers heading to the ashram belt, adventure seekers booked for Ganga rafting, pilgrims, and anyone who wants a comfortable private car for a relaxed day trip to the evening Ganga Aarti rather than crowding into a shared taxi. With Jolly Grant Airport sitting right on this road, it is also one of the handiest transfers in the region.

Because Dehradun to Rishikesh is only 45 km, this leg is best understood as a local taxi or half-day sightseeing hire rather than a long one-way drop — and it bills at our 300 km minimum fare, which we state honestly upfront. A genuine 45 km transfer would be a small fare, but a private car with a driver who knows the Rishikesh lanes, holds for your ghat visit and sightseeing, and brings you back to Dehradun the same evening is worth far more than a shared sumo. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, and the practical, honest way to use it is as a half-day local hire: the driver picks you up in Dehradun, drives to Rishikesh, waits while you visit Laxman Jhula, Ram Jhula, the ashrams and the evening Ganga Aarti, and drives you back. The Ertiga SUV is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or small group who value a clean vehicle and a driver who runs this road daily. The 300 km minimum covers this half-day local hire with waiting, which is the realistic use case for such a short leg.

The drive itself is short and pleasant. From Dehradun the route heads south-east out of the city on NH-7, running past the suburb of Doiwala and the forested stretches that flank the road, crossing the Song river and passing close to Jolly Grant Airport before the highway begins its gentle descent toward the Ganga and the outskirts of Rishikesh. The last few kilometres wind through the town toward the river, where the road forks for Ram Jhula, Laxman Jhula, and Triveni Ghat. Total drive time is a comfortable 1-1.5 hours with no ghats or difficult mountain sections, which is why an afternoon 2-3 PM departure works beautifully — you reach Rishikesh with time to settle in and walk down to the river for the evening Ganga Aarti, one of the most moving experiences in all of North India, before an easy drive back to Dehradun or an overnight stay by the river.

En-route this is a short, direct leg with no compulsory major halts, though the road passes plenty of easy refreshment options near Doiwala if you want a quick chai or coffee. Travellers arriving into or departing from Jolly Grant Airport (DED) often use this exact route, and our drivers track flights and can pick up or drop at the terminal on the way. In Rishikesh, our drivers know the parking arrangements near Ram Jhula and Triveni Ghat, where private vehicles park before you walk into the pedestrian riverside lanes. On a run this short most travellers simply drive straight through and save their time for the ghats and the ashrams.

Our pickup reach covers all of Dehradun without extra charge — any hotel along Rajpur Road and the Clock Tower belt, the Dehradun railway station and ISBT, the Robber's Cave and Sahastradhara areas, Jolly Grant Airport (DED) with flight tracking, and doorstep pickup from any address in the Doon Valley. In Rishikesh we drop at any hotel or ashram across the Laxman Jhula, Ram Jhula, Tapovan, Muni-ki-Reti and Triveni Ghat belts, or at the rafting camps up the Shivpuri road (no extra charge), and can hold on a waiting basis for your return to Dehradun or continue onward toward Haridwar or the Char Dham road if you are planning a fuller Uttarakhand circuit.

For vehicle choice on this easy leg, the priority is a clean, cool, comfortable ride. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers travelling light. Families of four to six should book the Ertiga SUV for the extra room and boot space, especially useful with holiday or rafting gear. For groups of six to seven or those wanting maximum comfort, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Dehradun-Rishikesh road daily and can hold the car for your sightseeing. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer or half-day hire to Rishikesh.`,
    faqs: [
      { question: "How much does a one-way cab from Dehradun to Rishikesh cost?", answer: "A one-way cab from Dehradun to Rishikesh starts at ₹3,300 for a Sedan. Because the route is only 45 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. The fare covers a half-day local hire with waiting, and toll and parking are extra at actual." },
      { question: "What is the Dehradun to Rishikesh cab fare or price?", answer: "The Dehradun to Rishikesh cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 45 km route bills at our 300 km minimum at ₹11/km, giving you a private air-conditioned car with doorstep pickup and waiting for the Ganga Aarti and ashrams. Toll and parking are extra at actual." },
      { question: "How long does Dehradun to Rishikesh take by cab?", answer: "Dehradun to Rishikesh is about 45 km and takes 1-1.5 hours by cab on NH-7 via Doiwala, past forests and the Jolly Grant Airport road. An afternoon 2-3 PM start lets you reach Rishikesh in time for the evening Ganga Aarti at Triveni or Parmarth Niketan Ghat." },
      { question: "Why is the Dehradun to Rishikesh fare based on 300 km?", answer: "The route is only 45 km, and like all short trips it is best used as a half-day local sightseeing hire, so it bills at our 300 km minimum fare and a Sedan is ₹3,300. This covers a private, air-conditioned car with doorstep pickup and waiting time for Laxman Jhula, the ashrams and the Ganga Aarti, far more comfortable than a shared taxi." },
      { question: "Can the cab wait for a Rishikesh day trip and bring me back to Dehradun?", answer: "Yes. Because many travellers visit Rishikesh as a day trip, the fare covers a half-day local hire with waiting, so the car holds for you while you see Laxman Jhula, Ram Jhula, the ashrams and the evening Ganga Aarti, then drives you back to Dehradun the same evening. Just let us know your plan when you book." },
      { question: "Which vehicle is best for Dehradun to Rishikesh?", answer: "For this easy 45 km leg, a Sedan suits 2-3 passengers, while the Ertiga is ideal for families of 4-6 who want extra room for luggage or rafting gear. Groups of 6-7 or those wanting maximum comfort should choose the Innova Crysta." }
    ]
  },
  "haridwar-to-rishikesh": {
    from: "Haridwar",
    to: "Rishikesh",
    distance: "25 km",
    distanceNum: 25,
    time: "45 minutes",
    highway: "NH-7 direct",
    ...calcFares(25),
    highlights: ["Short pilgrimage hop between the twin holy towns of Haridwar and Rishikesh", "About 45 minutes on NH-7 along the Ganga", "Ideal half-day sightseeing hire with waiting for Har Ki Pauri and Laxman Jhula"],
    popularStops: [],
    bestTime: "A late-afternoon 3-4 PM departure lets you finish Har Ki Pauri, hop to Rishikesh and catch the evening Ganga Aarti at both ends over an easy day",
    description: `The Haridwar to Rishikesh one-way cab is the quick, comfortable way to link the two great river towns of the Uttarakhand plains-to-hills gateway — a short 25 km hop along NH-7 from Haridwar, where the Ganga first touches the plains at the sacred Har Ki Pauri ghat, up to Rishikesh, the yoga capital where the same river rushes green out of the Himalaya past Laxman Jhula and the ashrams. At Triveni Cabs we run this tiny but hugely popular corridor for pilgrims doing the classic twin-town darshan, families on a Char Dham warm-up or a simple Ganga holiday, yoga travellers, and anyone who wants a private, air-conditioned car for an easy day trip between the two towns rather than squeezing into a shared vikram or auto. It is the shortest of our Uttarakhand routes and one of the most rewarding.

Because Haridwar to Rishikesh is only 25 km, this leg is best understood as a local taxi or half-day sightseeing hire rather than a long one-way drop — and it bills at our 300 km minimum fare, which we state honestly upfront. A genuine 25 km transfer would be a very small fare, but a private car with a driver who knows both towns' ghats and parking, holds for your darshan and sightseeing, and links Har Ki Pauri to Laxman Jhula in comfort is worth far more than a shared auto. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, and the practical, honest way to use it is as a half-day local hire: the driver picks you up in Haridwar, drives to Rishikesh, waits while you visit Laxman Jhula, Ram Jhula, the ashrams and the ghats, and drives you back — or does the twin-town loop with an evening Aarti at both ends. The Ertiga SUV is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or small group. The 300 km minimum covers this half-day local hire with waiting, which is the realistic use case for such a short pilgrimage hop.

The drive itself is very short and easy. From Haridwar the route leaves the Har Ki Pauri and railway station area and joins NH-7, running north along the Ganga past Raiwala and the edge of the Rajaji forest belt, with the river and the first Himalayan foothills accompanying you almost the whole way. The road crosses into Rishikesh near the Triveni Ghat and Ram Jhula turn-offs. Total drive time is a comfortable 45 minutes with no ghats or difficult sections, which is why a late-afternoon 3-4 PM departure works so well — you can finish your Har Ki Pauri darshan, make the short hop to Rishikesh, and still catch the evening Ganga Aarti at Triveni or Parmarth Niketan Ghat, one of the most beautiful sights in the region, before an easy drive back.

En-route this is a very short, direct leg with no compulsory halts, though the Raiwala stretch has easy roadside refreshment stops if you want a quick chai. Many travellers combine this hop with a Rajaji forest edge drive or a stop at the Bharat Mata Mandir or Sapt Rishi Ashram on the Haridwar side. Our drivers know the parking arrangements at Har Ki Pauri, Ram Jhula, and Triveni Ghat, where private vehicles park before you walk into the pedestrian ghat lanes. On a run this short most travellers simply drive straight through and spend their time at the ghats and bridges.

Our pickup reach covers all of Haridwar without extra charge — any hotel or dharamshala around Har Ki Pauri, the Haridwar railway station and bus stand, the Bhupatwala and Jwalapur areas, and doorstep pickup from any address in the town. In Rishikesh we drop at any hotel or ashram across the Laxman Jhula, Ram Jhula, Tapovan, Muni-ki-Reti and Triveni Ghat belts, or at the rafting camps up the Shivpuri road (no extra charge), and can hold on a waiting basis for your return to Haridwar or continue onward toward Dehradun or the Char Dham road if you are planning a fuller Uttarakhand yatra.

For vehicle choice on this easy hop, the priority is a clean, cool, comfortable ride for the short journey and your sightseeing. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers travelling light. Families of four to six should book the Ertiga SUV for the extra room and boot space. For groups of six to seven or those wanting maximum comfort, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Haridwar-Rishikesh road daily and can hold the car for your darshan and sightseeing. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer or half-day hire between Haridwar and Rishikesh.`,
    faqs: [
      { question: "How much does a one-way cab from Haridwar to Rishikesh cost?", answer: "A one-way cab from Haridwar to Rishikesh starts at ₹3,300 for a Sedan. Because the route is only 25 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. The fare covers a half-day local hire with waiting, and toll and parking are extra at actual." },
      { question: "What is the Haridwar to Rishikesh cab fare or price?", answer: "The Haridwar to Rishikesh cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 25 km route bills at our 300 km minimum at ₹11/km, giving you a private air-conditioned car with doorstep pickup and waiting for Har Ki Pauri and Laxman Jhula. Toll and parking are extra at actual." },
      { question: "How long does Haridwar to Rishikesh take by cab?", answer: "Haridwar to Rishikesh is about 25 km and takes roughly 45 minutes by cab on NH-7 running along the Ganga. A late-afternoon start lets you finish Har Ki Pauri, hop to Rishikesh and catch the evening Ganga Aarti at both ends over an easy day." },
      { question: "Why is the Haridwar to Rishikesh fare based on 300 km?", answer: "The route is only 25 km, and like all short pilgrimage hops it is best used as a half-day local sightseeing hire, so it bills at our 300 km minimum fare and a Sedan is ₹3,300. This covers a private, air-conditioned car with doorstep pickup and waiting time for the ghats and bridges of both towns, far more comfortable than a shared vikram or auto." },
      { question: "Can the cab wait and do the Haridwar-Rishikesh twin-town trip?", answer: "Yes. Because most pilgrims do both towns in a day, the fare covers a half-day local hire with waiting, so the car holds for you while you see Har Ki Pauri, Laxman Jhula, Ram Jhula and the ghats, and can catch the evening Ganga Aarti at both ends. Just let us know your plan when you book." },
      { question: "Which vehicle is best for Haridwar to Rishikesh?", answer: "For this easy 25 km hop, a Sedan suits 2-3 passengers, while the Ertiga is ideal for families of 4-6 who want extra room and luggage space. Groups of 6-7 or those wanting maximum comfort for a full day of darshan should choose the Innova Crysta." }
    ]
  },
  "rishikesh-to-dehradun": {
    from: "Rishikesh",
    to: "Dehradun",
    distance: "45 km",
    distanceNum: 45,
    time: "1-1.5 hours",
    highway: "NH-7 via Doiwala",
    ...calcFares(45),
    highlights: ["Short scenic run from Rishikesh back to Dehradun, gateway to the Doon Valley", "1-1.5 hours on NH-7 via Doiwala, passing Jolly Grant Airport on the way", "Ideal airport or return drop, or a half-day local hire with waiting"],
    popularStops: [],
    bestTime: "A mid-morning departure works well for a relaxed drive; if you have a flight from Jolly Grant Airport, leave Rishikesh at least 2.5-3 hours before departure",
    description: `The Rishikesh to Dehradun one-way cab is the easy, comfortable way to return from the yoga capital to the Doon Valley capital — a short 45 km run down NH-7 from Rishikesh, where the Ganga rushes past the ashrams and iron footbridges, back to Dehradun, the leafy hill-fringed city that is the gateway to Mussoorie and the wider Garhwal Himalaya. At Triveni Cabs we run this corridor for travellers finishing a Rishikesh yoga retreat or rafting trip, pilgrims heading home, families continuing their Uttarakhand holiday up to Mussoorie, and above all for anyone with a flight to catch from Jolly Grant Airport (DED), which sits right on this very road. It is one of the handiest and most-booked short transfers in the region.

Because Rishikesh to Dehradun is only 45 km, this leg is best understood as a local taxi, airport transfer, or half-day sightseeing hire rather than a long one-way drop — and it bills at our 300 km minimum fare, which we state honestly upfront. A genuine 45 km transfer would be a small fare, but a private, air-conditioned car with a driver who tracks your flight, knows the Dehradun lanes, and gets you to the terminal or your hotel in comfort and on time is worth far more than a shared sumo. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum at ₹11/km, and it works equally well as a straight airport or return drop or, if you wish, as a half-day local hire where the driver waits and shows you Robber's Cave and Sahastradhara on the way. The Ertiga SUV is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or small group with luggage. The 300 km minimum covers this short transfer or half-day hire with waiting, which is the realistic use case for such a short leg.

The drive itself is short and easy. From Rishikesh the route leaves the Ram Jhula and Triveni Ghat area and climbs gently away from the river onto NH-7, running past the Song river crossing and — critically for many travellers — right past Jolly Grant Airport, which sits about two-thirds of the way along at Doiwala. Beyond the airport the highway continues through Doiwala's forested stretches into the Doon Valley and on to Dehradun city. Total drive time is a comfortable 1-1.5 hours with no ghats or difficult sections. If you are catching a flight, we strongly advise leaving Rishikesh at least 2.5-3 hours before departure to allow a buffer for traffic and check-in; for a simple return to the city, a relaxed mid-morning departure is ideal.

En-route this is a short, direct leg, and its single most important feature is Jolly Grant Airport (DED) itself, sitting right on the route — so an airport drop is genuinely on the way and adds no detour. The Doiwala stretch has easy roadside refreshment options for a quick chai or coffee. Travellers heading into Dehradun for sightseeing often ask to fold in Robber's Cave (Guchhupani) or Sahastradhara on the city's northern edge, and our drivers are happy to plan this into a half-day hire. On a straight airport or hotel drop, most travellers simply drive through with a comfort break if needed.

Our pickup reach covers all of Rishikesh without extra charge — any hotel or ashram across the Laxman Jhula, Ram Jhula, Tapovan, Muni-ki-Reti and Triveni Ghat belts, the rafting camps up the Shivpuri road, and doorstep pickup from any address in town. In Dehradun we drop at any hotel along Rajpur Road and the Clock Tower belt, the Dehradun railway station and ISBT, the Robber's Cave and Sahastradhara areas, and — most popular of all — right at Jolly Grant Airport (DED) with flight tracking (no extra charge), and can continue onward up to Mussoorie or toward Nainital if you are chaining a longer Uttarakhand trip.

For vehicle choice on this easy leg, the priority is a clean, cool, comfortable ride with room for airport luggage. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers travelling light. Families of four to six should book the Ertiga SUV for the extra room and boot space, especially useful with check-in bags. For groups of six to seven or those wanting maximum comfort, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Rishikesh-Dehradun-airport road daily and track flights for on-time drops. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer from Rishikesh to Dehradun or Jolly Grant Airport.`,
    faqs: [
      { question: "How much does a one-way cab from Rishikesh to Dehradun cost?", answer: "A one-way cab from Rishikesh to Dehradun starts at ₹3,300 for a Sedan. Because the route is only 45 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. The fare covers a short transfer or half-day hire with waiting, and toll and parking are extra at actual." },
      { question: "What is the Rishikesh to Dehradun cab fare or price?", answer: "The Rishikesh to Dehradun cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta. The 45 km route bills at our 300 km minimum at ₹11/km, giving you a private air-conditioned car with doorstep pickup and flight tracking for Jolly Grant Airport. Toll and parking are extra at actual." },
      { question: "How long does Rishikesh to Dehradun take by cab?", answer: "Rishikesh to Dehradun is about 45 km and takes 1-1.5 hours by cab on NH-7 via Doiwala, passing Jolly Grant Airport on the way. If you have a flight, leave Rishikesh at least 2.5-3 hours before departure to allow a buffer for traffic and check-in." },
      { question: "Why is the Rishikesh to Dehradun fare based on 300 km?", answer: "The route is only 45 km, and like all short trips it is best used as a local transfer or half-day hire, so it bills at our 300 km minimum fare and a Sedan is ₹3,300. This covers a private, air-conditioned car with doorstep pickup, flight tracking for Jolly Grant Airport and optional waiting, far more comfortable than a shared taxi." },
      { question: "Does the Rishikesh to Dehradun cab drop at Jolly Grant Airport?", answer: "Yes. Jolly Grant Airport (DED) sits right on the NH-7 route about two-thirds of the way from Rishikesh to Dehradun, so an airport drop is genuinely on the way and adds no detour. We track your flight and time the pickup for an on-time arrival at the terminal." },
      { question: "Which vehicle is best for Rishikesh to Dehradun?", answer: "For this easy 45 km leg, a Sedan suits 2-3 passengers travelling light, while the Ertiga is ideal for families of 4-6 who want extra room for airport luggage. Groups of 6-7 or those wanting maximum comfort should choose the Innova Crysta." }
    ]
  },
"manali-to-leh": {
    from: "Manali",
    to: "Leh",
    distance: "475 km",
    distanceNum: 475,
    time: "12-15 hours (2-day drive recommended)",
    highway: "Manali-Leh Highway via Atal Tunnel, Keylong & Sarchu",
    ...calcFares(475),
    highlights: ["High-altitude Himalayan expedition over Rohtang/Atal Tunnel, Baralacha La and Tanglang La", "475 km best split as a 2-day drive with an overnight halt at Keylong or Sarchu", "SUV, Innova Crysta or Tempo Traveller only — seasonal Jun-Sep window"],
    popularStops: ["Keylong", "Sarchu", "Pang"],
    bestTime: "Mid-June to mid-September only, when the Manali-Leh Highway and its high passes are clear of snow; start very early each morning",
    description: `The Manali to Leh one-way cab is not a routine transfer — it is one of the great high-altitude road expeditions on earth, a roughly 475 km journey from the alpine Kullu Valley town of Manali across the Great Himalayan and Zanskar ranges to Leh, the high-desert capital of Ladakh perched above 11,000 feet. At Triveni Cabs we run this legendary route for adventure travellers, motorcycle-tour support crews, photographers chasing the barren moonscapes and cobalt skies of Lahaul and Ladakh, groups of friends ticking off a bucket-list drive, and families who want the full drama of the Manali–Leh Highway with the safety of a genuinely experienced high-altitude driver rather than a self-drive gamble on unfamiliar passes. This is best done as a two-day drive with an overnight halt, and it rewards you with scenery that simply does not exist anywhere else in India.

Because Manali to Leh is about 475 km of long-distance, high-altitude running over some of the world's highest motorable passes, it bills on actual distance and is priced for the expedition it truly is. A round trip would charge you for well over 950 km including the enormous, empty return leg — so the one-way model saves you dramatically if you are flying back from Leh's Kushok Bakula Rimpochee Airport or continuing your Ladakh circuit onward to Nubra, Pangong, or out to Srinagar. Our one-way Sedan is ₹5,225 at ₹11/km, but for this terrain we strongly steer travellers away from a Sedan: the Ertiga SUV is ₹7,125 and the Innova Crysta is ₹8,550, and for larger groups we arrange a Tempo Traveller. Toll, high-altitude and inner-line permits, and driver mountain allowance for the overnight halt are additional — we quote everything upfront so there are no surprises on the roof of the world.

The drive breaks naturally into two epic days rather than a single 12–15 hour marathon. Day one climbs out of Manali over the Rohtang Pass — or, when open, straight through the 9 km Atal Tunnel — and drops into the stark Lahaul valley, following the Chandra and Bhaga rivers to Keylong and Jispa, the last real towns with hotels, fuel, and phone signal, an ideal first overnight for gentle acclimatisation. Day two is the legendary heart of the highway: up over the mighty Baralacha La to the windswept tented plateau of Sarchu on the Himachal–Ladakh border, then across the dizzying Gata Loops — twenty-one hairpins climbing to Nakee La and Lachung La — down to the remote dhaba hamlet of Pang, across the vast, table-flat Moré Plains, and finally over Tanglang La, one of the highest motorable passes on the planet, before the long descent past Rumtse and the Indus valley into Leh. Because the passes only clear of snow from around mid-June to mid-September, this route is strictly seasonal, and each day should begin very early to cross the high passes before the afternoon winds and to respect fading daylight at altitude.

En-route stops on this route are less about sightseeing and more about survival, fuel, and sheer awe — and every one is unforgettable. Keylong, the administrative headquarters of Lahaul at around 10,000 feet, is the essential first-night halt and the last dependable point for fuel, food, and a proper bed before the big passes. Sarchu, a high tented-camp plateau ringed by utterly barren, magnificent mountains, is the classic overnight camp for travellers splitting the second leg. Pang, tucked in a canyon after the Gata Loops, is the famous parachute-tent dhaba stop for hot Maggi and chai on a stretch where services are hours apart. Our drivers carry water, know exactly where the reliable fuel and food points are, and build in acclimatisation pauses for safety rather than charging them as detours.

Our pickup reach covers all of Manali without extra charge — any hotel along the Mall Road and Old Manali belt, the Hadimba Temple, Vashisht and Aleo areas, the Solang and Prini riverside resorts, and doorstep pickup from Naggar or Patlikuhl. In Leh we drop at any hotel or guesthouse in Leh town, the Changspa and Fort Road belt, or the surrounding Shey and Choglamsar areas (no extra charge), and can continue onward toward Nubra or Pangong if you are chaining a longer Ladakh circuit.

Vehicle choice on the Manali–Leh Highway is a genuine safety decision, not merely a comfort one. A Sedan can technically be booked, but we strongly recommend against it on this terrain of unpaved stretches, water crossings, and rough passes. The Ertiga SUV is the practical minimum, offering the ground clearance and stability the road demands. For the strongest, safest, most comfortable expedition — and the choice of the vast majority of our Leh travellers — the Innova Crysta is the top recommendation, with the torque, clearance, and rugged reliability to handle Baralacha La, the Gata Loops, and Tanglang La with confidence; for bigger groups a Tempo Traveller is available. Every vehicle is well maintained, FASTag-enabled, and driven by background-verified drivers with real high-altitude experience who understand acclimatisation and mountain safety. Call or WhatsApp 7668570551 for a confirmed upfront expedition fare — no surge, no hidden kilometres, and never a return charge on your one-way Ladakh adventure.`,
    faqs: [
      { question: "How much does a one-way cab from Manali to Leh cost?", answer: "A one-way cab from Manali to Leh starts at ₹5,225 for a Sedan at ₹11/km over the ~475 km route, but for this high-altitude terrain we strongly recommend an SUV: the Ertiga is ₹7,125 and the Innova Crysta is ₹8,550. A Tempo Traveller can be arranged for larger groups. Toll, permits and driver mountain allowance for the overnight halt are extra at actual." },
      { question: "What is the Manali to Leh cab fare or price?", answer: "The Manali to Leh cab price is ₹5,225 for a Sedan, ₹7,125 for an Ertiga SUV and ₹8,550 for an Innova Crysta, one way over the ~475 km Manali-Leh Highway. For this expedition terrain we advise against a Sedan and recommend the Innova Crysta or a Tempo Traveller. Toll, permits and driver mountain allowance are extra at actual." },
      { question: "How long does the Manali to Leh cab journey take?", answer: "Manali to Leh is about 475 km and takes 12-15 hours of driving, which is why we strongly recommend splitting it into a 2-day drive with an overnight halt at Keylong or Sarchu. Each day should start very early to cross the high passes like Baralacha La and Tanglang La safely in daylight." },
      { question: "When is the best time to travel Manali to Leh by road?", answer: "The Manali-Leh Highway is only open from roughly mid-June to mid-September, when the high passes are clear of snow. Outside this window the route is closed and Leh is reachable only by air or via the Srinagar side earlier in the season." },
      { question: "Which vehicle is best for a Manali to Leh road trip?", answer: "We strongly recommend an SUV for the Manali-Leh Highway. The Ertiga is the practical minimum for ground clearance on rough, unpaved stretches, and the Innova Crysta is the top choice for the high passes and water crossings. A Tempo Traveller suits larger groups. We advise against a Sedan on this terrain." },
      { question: "Is a one-way cab cheaper than a round trip from Manali to Leh?", answer: "Yes, significantly. A one-way booking saves you the enormous empty return of over 475 km, which is ideal if you are flying back from Leh airport or continuing your Ladakh circuit to Nubra, Pangong or onward to Srinagar rather than driving back over the passes." }
    ]
  },
  "srinagar-to-gulmarg": {
    from: "Srinagar",
    to: "Gulmarg",
    distance: "50 km",
    distanceNum: 50,
    time: "1.5-2 hours",
    highway: "Srinagar-Gulmarg Road via Tangmarg",
    ...calcFares(50),
    highlights: ["Short scenic day-trip drive from Srinagar to the meadow-and-gondola resort of Gulmarg", "1.5-2 hours via Tangmarg through orchards and pine forest", "Ideal sightseeing drop with waiting option for the gondola, meadows and skiing"],
    popularStops: ["Tangmarg"],
    bestTime: "Early 8-9 AM departure so you reach Gulmarg before the gondola queues build and enjoy the meadows in the clear Kashmir morning light",
    description: `The Srinagar to Gulmarg one-way cab is the easy, scenic gateway to Kashmir's most famous alpine playground — a short 50 km drive from Srinagar, the summer capital on the Dal Lake, up to Gulmarg, the flower-carpeted "Meadow of Gold" set at nearly 8,700 feet against the Pir Panjal range. At Triveni Cabs we run this beautiful little corridor for families on a Kashmir holiday, honeymooners chasing meadow-and-mountain views, skiers and snowboarders in the winter season, and travellers who simply want a comfortable private car for a relaxed day trip to the Gulmarg Gondola rather than crowding into a shared sumo from the tourist stand. It is a genuinely lovely drive, and one of the shortest but most rewarding transfers in the whole valley.

Because Srinagar to Gulmarg is only 50 km, this leg bills at our 300 km minimum fare — and we state that honestly, because it is still far better value and far more comfortable than a shared cab or a haggled local taxi. A round-trip cab would charge you for the return running as well, whereas our one-way Sedan from Srinagar to Gulmarg is ₹3,300, calculated from the 300 km minimum at ₹11/km, and gives you a private, air-conditioned car entirely to yourselves with doorstep pickup. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or small group who value a clean vehicle, room for warm clothing and gondola gear, and a driver who knows the Tangmarg road and exactly where to drop you for the cable car. Because most travellers visit Gulmarg as a day trip, we can also arrange the car on a waiting basis so it holds for you at Tangmarg or the Gulmarg car park and brings you back to Srinagar the same evening — just ask when you book.

The drive itself is short but consistently scenic. From Srinagar the route heads north-west out of the city past the Hazratbal shrine road and through the flat, poplar-lined Kashmiri countryside toward Magam, then climbs gently through apple orchards, willow groves, and paddy fields to Tangmarg, the roadhead town at the foot of the Gulmarg hill at roughly 40 km. From Tangmarg the road turns sharply uphill, winding for the last 13 km through thick pine and fir forest — a genuinely pretty climb — before opening suddenly onto the vast green bowl of the Gulmarg meadow. Total drive time is a comfortable 1.5–2 hours, which is why we recommend an early 8–9 AM departure so you reach Gulmarg before the gondola queues build, ride up to Kongdoori and Apharwat Peak in clear morning light, and still have the whole day for the meadows, the golf course, and Strawberry Valley before an unhurried drive back.

En-route this is a short, direct leg with just one natural halt, but it is a useful one. Tangmarg, the roadhead town, is the standard stop for tea, a quick snack, and — crucially in winter — the place to hire snow boots, gum boots, and warm gear or arrange oversnow transport before the final climb to Gulmarg, since private cars sometimes cannot proceed the last stretch when there is heavy snow. Our drivers know the reliable rental points and the parking arrangements at both Tangmarg and Gulmarg. Up to two on-route stops are included free, though on a run this short most travellers simply pause at Tangmarg and drive straight on to the meadow.

Our pickup reach covers all of Srinagar without extra charge — any houseboat or hotel along the Dal Lake and Nigeen Lake belt, the Boulevard Road and Lal Chowk areas, the Rajbagh and Gogji Bagh neighbourhoods, Sheikh ul-Alam International Airport (SXR) with flight tracking, and doorstep pickup from any address in the city. In Gulmarg we drop right at the gondola base station, the main resort car park, or any hotel around the meadow (no extra charge), and can continue onward toward Sonamarg or Pahalgam, or hold on a waiting basis for your return to Srinagar, if you are planning a fuller Kashmir circuit.

For vehicle choice on this easy hill leg, the priority is a warm, comfortable ride and room for the layers and gear a Gulmarg day demands. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers travelling light. Families of four to six should book the Ertiga SUV for the extra room and boot space, especially handy with winter clothing and rented snow gear. For groups of six to seven or those wanting maximum comfort on the forest climb, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Srinagar–Tangmarg–Gulmarg road daily and can hold the car for your sightseeing. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer or day trip to Gulmarg.`,
    faqs: [
      { question: "How much does a one-way cab from Srinagar to Gulmarg cost?", answer: "A one-way cab from Srinagar to Gulmarg starts at ₹3,300 for a Sedan. Because the route is only 50 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual, and a waiting-basis day trip can be arranged." },
      { question: "What is the Srinagar to Gulmarg cab fare or price?", answer: "The Srinagar to Gulmarg cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta, one way. The 50 km route bills at our 300 km minimum at ₹11/km, giving you a private air-conditioned car with doorstep pickup. Toll and parking are extra at actual." },
      { question: "How long does Srinagar to Gulmarg take by cab?", answer: "Srinagar to Gulmarg is about 50 km and takes 1.5-2 hours by cab via Tangmarg, climbing through orchards and pine forest. An early 8-9 AM start lets you reach Gulmarg before the gondola queues build and enjoy the meadows in clear morning light." },
      { question: "Why is the Srinagar to Gulmarg fare based on 300 km?", answer: "The route is only 50 km, and like all short trips it bills at our 300 km minimum fare, so a Sedan is ₹3,300. This still gives you a private, air-conditioned car to yourselves with doorstep pickup and an optional waiting-basis day trip, far more comfortable than a shared sumo from the tourist stand." },
      { question: "Can the cab wait for a Gulmarg day trip and bring me back to Srinagar?", answer: "Yes. Because most travellers visit Gulmarg as a day trip, we can arrange the car on a waiting basis so it holds for you at Tangmarg or the Gulmarg car park and drives you back to Srinagar the same evening. Just let us know when you book so we can plan the day." },
      { question: "Which vehicle is best for Srinagar to Gulmarg?", answer: "For this easy 50 km scenic leg, a Sedan suits 2-3 passengers, while the Ertiga is ideal for families of 4-6 who want extra room for winter clothing and rented snow gear. Groups of 6-7 or those wanting maximum comfort on the forest climb should choose the Innova Crysta." }
    ]
  },
"chittorgarh-to-udaipur": {
    from: "Chittorgarh",
    to: "Udaipur",
    distance: "115 km",
    distanceNum: 115,
    time: "2-2.5 hours",
    highway: "NH-48 direct",
    ...calcFares(115),
    highlights: ["Fast NH-48 run from the mighty Chittorgarh Fort to Udaipur, the City of Lakes", "2-2.5 hours direct with minimal breaks", "Ideal one-way transfer or day trip into the heart of Mewar"],
    popularStops: ["Kapasan", "Debari"],
    bestTime: "Early 8-9 AM departure so you finish the Chittorgarh Fort ramparts in the cool morning and reach Udaipur by lunch to enjoy the lakes at sunset",
    description: `The Chittorgarh to Udaipur one-way cab is the quick, comfortable way to travel between two icons of Mewar — a 115 km run from Chittorgarh, home to the largest fort in India and the beating heart of Rajput valour, south-west to Udaipur, the romantic City of Lakes cradled in the Aravalli hills. At Triveni Cabs we run this short corridor for history lovers finishing the vast Chittorgarh Fort and moving on to Udaipur's palaces, families on a Mewar circuit, travellers arriving into Chittorgarh by train and continuing straight to their lakeside hotel, and anyone who wants a private, air-conditioned car for a relaxed day trip or an onward transfer rather than waiting on a connecting train or bus.

Because Chittorgarh to Udaipur is 115 km, this leg bills at our 300 km minimum fare — and we state that honestly, because it is still far better value than a round trip and far more comfortable than a shared cab. A round-trip cab would charge you for the return running as well, whereas our one-way Sedan from Chittorgarh to Udaipur is ₹3,300, calculated from the 300 km minimum at ₹11/km, and includes a private, air-conditioned car entirely to yourselves. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or small group who value doorstep pickup, a clean vehicle, and a driver who knows both the fort gates and the maze of Udaipur's old-city lanes down to the lake.

The drive is one of the easiest in Rajasthan. From Chittorgarh the route joins NH-48 near the base of the fort's 180-metre hill and runs almost dead straight south-west across the gently rolling Mewar countryside — a fast, well-surfaced four-lane highway with the Aravalli ranges rising steadily on the horizon as you approach Udaipur. The road passes Kapasan and the turn-offs for Nathdwara and Eklingji — the famous Shrinathji and Shiva temples, if you wish to fold them into the journey — before descending past Debari into the lake-ringed bowl that holds Udaipur. Total drive time is a comfortable 2-2.5 hours with no major ghats, which is why we recommend an early 8-9 AM departure so you can finish the sprawling Chittorgarh Fort — the Vijay Stambh (Tower of Victory), the palaces, and the Kalika Mata temple — in the cool of the morning and roll into Udaipur by lunch, leaving the whole golden afternoon and evening for Lake Pichola, the City Palace, and a sunset boat ride.

En-route this is a short, direct leg with no compulsory major halts, but comfort breaks are easy to arrange. Kapasan, roughly midway, is a convenient washroom and chai stop on the highway. Nearer Udaipur, the Debari area has good roadside refreshment options if you want a quick coffee before the final run to your hotel. Travellers who want to combine temples often ask to detour briefly to Nathdwara for Shrinathji darshan or to Eklingji — our drivers are happy to plan this into the route. Up to two on-route stops are included free, though on a run this short many travellers simply drive straight through and save their energy for Udaipur's lakes and palaces.

Our pickup reach covers all of Chittorgarh without extra charge — the fort's Ram Pol main gate, any hotel in Chittorgarh town, the railway station, and doorstep pickup from any address in the town or along the highway. In Udaipur we drop at any hotel across the Lake Pichola and Fatehsagar belts, the City Palace and Jagdish Chowk area of the old city, the Hiran Magri and Sector 14 neighbourhoods, or Maharana Pratap Airport (UDR) and the Udaipur City railway station (no extra charge), and can continue onward toward Nathdwara, Kumbhalgarh, or Mount Abu if you are chaining a longer Mewar tour.

For vehicle choice on this easy highway leg, the priority is a clean, cool ride and enough room for comfortable sightseeing at both ends. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers travelling light. Families of four to six should book the Ertiga SUV for the extra room and boot space, especially useful with holiday luggage. For groups of six to seven or those wanting maximum comfort, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who know the Chittorgarh-Udaipur road and the narrow lanes down to Lake Pichola well. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer to Udaipur.`,
    faqs: [
      { question: "How much does a one-way cab from Chittorgarh to Udaipur cost?", answer: "A one-way cab from Chittorgarh to Udaipur starts at ₹3,300 for a Sedan. Because the route is 115 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "What is the Chittorgarh to Udaipur cab fare or price?", answer: "The Chittorgarh to Udaipur cab price is ₹3,300 for a Sedan, ₹4,500 for an Ertiga SUV and ₹5,400 for an Innova Crysta, one way. The 115 km route bills at our 300 km minimum at ₹11/km, giving you a private air-conditioned car with doorstep pickup. Toll and parking are extra at actual." },
      { question: "How long does Chittorgarh to Udaipur take by cab?", answer: "Chittorgarh to Udaipur is about 115 km and takes 2-2.5 hours by cab on the direct NH-48 highway with no major ghats. An early 8-9 AM start lets you finish Chittorgarh Fort in the cool morning and reach Udaipur by lunch for the lakes and a sunset boat ride." },
      { question: "Why is the Chittorgarh to Udaipur fare based on 300 km?", answer: "The route is only 115 km, and like all short trips it bills at our 300 km minimum fare, so a Sedan is ₹3,300. This still gives you a private, air-conditioned car to yourselves with doorstep pickup, which is far more comfortable than a shared cab or a connecting train." },
      { question: "Can I combine Nathdwara or Eklingji temples on the way?", answer: "Yes. The NH-48 route passes the turn-offs for Nathdwara (Shrinathji) and Eklingji, and up to 2 on-route stops are included free. Just let the driver know and we will plan a brief temple detour into your Chittorgarh to Udaipur journey." },
      { question: "Which vehicle is best for Chittorgarh to Udaipur?", answer: "For this easy 115 km leg, a Sedan suits 2-3 passengers, while the Ertiga is ideal for families of 4-6 who want extra room and luggage space. Groups of 6-7 or those wanting maximum comfort for sightseeing at both ends should choose the Innova Crysta." }
    ]
  },
"delhi-to-dalhousie": {
    from: "Delhi",
    to: "Dalhousie",
    distance: "560 km",
    distanceNum: 560,
    time: "12-13 hours",
    highway: "NH-44 & NH-154 via Ambala, Pathankot & Banikhet",
    ...calcFares(560),
    highlights: ["Via Ambala, Pathankot and Banikhet on NH-44 and NH-154", "12-13 hours plains-to-colonial-hill-station transfer", "Direct doorstep drop at any Dalhousie or Khajjiar hotel"],
    popularStops: ["Ambala", "Pathankot", "Banikhet"],
    bestTime: "Very early 4-5 AM departure to clear the plains while cool and reach Dalhousie by evening; an overnight-into-morning start also works",
    description: `The Delhi to Dalhousie one-way cab is the smart, direct way to reach one of Himachal Pradesh's most charming colonial-era hill stations — a 560 km journey from the plains of Delhi up to Dalhousie, the pine-and-deodar town spread across five hills that the British built as a summer retreat. At Triveni Cabs we run this corridor for families escaping the Delhi heat, honeymooners drawn to the misty meadows of nearby Khajjiar (the "Mini Switzerland of India"), groups of friends heading for a mountain weekend, and travellers who simply want one comfortable car and one trusted driver for the whole climb rather than juggling a train to Pathankot and then a taxi change.

Because Delhi to Dalhousie is a genuine long-distance leg at 560 km, it bills on actual distance rather than the 300 km minimum — and the one-way model is still dramatically cheaper than a round trip. A round-trip Delhi–Dalhousie cab would charge you for 1,120 km of running, including a 560 km empty return you will never sit in if you are looping onward to Dharamshala, Amritsar, or back by train from Pathankot. Our one-way Sedan from Delhi to Dalhousie is ₹6,160 at ₹11/km, versus ₹12,320 for the round trip — a clean saving of ₹6,160. The Ertiga SUV one-way is ₹8,400 and the Innova Crysta is ₹10,080, each exactly half the cost of a traditional return booking and the sensible choice for a one-direction mountain transfer of this length.

The drive is a satisfying transition from plain to pine. From Delhi the route runs north on NH-44, the great Grand Trunk Road corridor, past Panipat, Karnal, and Kurukshetra to Ambala — the natural first anchor at roughly 200 km and a good early breakfast halt. Beyond Ambala the highway continues through the Punjab heartland via Jalandhar toward Pathankot, the gateway city where the plains finally give way to the foothills at around 470 km. From Pathankot the road joins NH-154 and begins the winding climb into the Chamba district, up through Banikhet — the last junction town before the final ascent — and on the last serpentine stretch through thick deodar forest to Dalhousie itself. Total drive time is 12–13 hours, which is exactly why we recommend a very early 4–5 AM departure so you cross the plains while they are cool and empty and tackle the Pathankot–Banikhet ghat section in good daylight, reaching Dalhousie by evening.

En-route stops turn this long haul into a comfortable, memorable journey. Ambala is the ideal early break — its highway dhabas serve hearty Punjabi breakfasts and it is a clean, quick leg-stretch before the long middle stretch. Pathankot, at the foot of the hills, is the essential lunch and refuel halt, the last big city before the mountains and the point where the scenery changes for good. Banikhet, just short of Dalhousie, is the classic final chai stop with the first proper valley views. Our drivers also know the reliable dhabas around Jalandhar and the Chamba-road viewpoints. Up to two on-route stops are included free; the Ambala breakfast plus Pathankot lunch combination is the one almost every traveller chooses on this leg.

Our pickup reach covers all of Delhi NCR without extra charge — Indira Gandhi International Airport (all terminals) with flight tracking, New Delhi, Old Delhi, Hazrat Nizamuddin and Anand Vihar railway stations, and doorstep pickup from anywhere in South Delhi, Dwarka, Gurgaon, Noida, or Ghaziabad. In Dalhousie we drop at any hotel across the Gandhi Chowk and Subhash Chowk belt, the Mall Road properties, the Bakrota Hills resorts, and any guesthouse toward Khajjiar or Banikhet (no extra charge).

For a journey this long, vehicle comfort is not a luxury but a necessity. The Sedan (Swift Dzire or Toyota Etios) suits two or three passengers travelling light, but on 560 km most travellers upgrade. Families of four to six with holiday luggage should book the Ertiga SUV for boot space, third-row room, and a more planted feel on the Pathankot–Banikhet ghats. For the most relaxed possible ride, premium comfort over twelve-plus hours, or groups of six to seven, the Innova Crysta is the top recommendation — its cabin space, torque, and stability make both the plains cruise and the final forest climb effortless. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers experienced on the full Delhi–Pathankot–Dalhousie route. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way Himalayan transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Dalhousie cost?", answer: "A one-way cab from Delhi to Dalhousie starts at ₹6,160 for a Sedan at ₹11/km over the 560 km route. Ertiga SUV costs ₹8,400 and Innova Crysta costs ₹10,080. Toll, parking and any state permits are extra at actual." },
      { question: "How long does Delhi to Dalhousie take by cab?", answer: "Delhi to Dalhousie is about 560 km and takes 12-13 hours by cab via Ambala, Pathankot and Banikhet on NH-44 and NH-154, including breaks. We recommend a very early 4-5 AM or overnight-into-morning start so you clear the plains while cool and tackle the mountain ghats in daylight." },
      { question: "Is a one-way cab cheaper than a round trip from Delhi to Dalhousie?", answer: "Yes. A one-way Sedan is ₹6,160 versus ₹12,320 for a round trip, saving you ₹6,160 because you do not pay for the 560 km empty return. This is ideal if you are continuing to Dharamshala or Amritsar, or returning by train from Pathankot." },
      { question: "Can I stop at Ambala and Pathankot on the way?", answer: "Yes, up to 2 on-route stops are included free. Most travellers break for breakfast at Ambala, lunch and refuel at Pathankot where the hills begin, and pause for chai at Banikhet with the first valley views before the final forest climb to Dalhousie." },
      { question: "Which vehicle is best for the long Delhi to Dalhousie drive?", answer: "For this 560 km mountain journey, the Innova Crysta is the top choice for its cabin space and stability over 12-plus hours and on the Pathankot-Banikhet ghats. Sedans suit 2-3 light travellers, while the Ertiga works well for families of 4-6 with luggage." },
      { question: "Do you offer airport pickup and Khajjiar drop for Delhi to Dalhousie?", answer: "Yes, we pick up from Indira Gandhi International Airport (all terminals) with flight tracking, any Delhi railway station, or any address in the NCR, and drop at any hotel in Dalhousie's Gandhi Chowk, Mall Road or Bakrota Hills belt, as well as guesthouses toward Khajjiar and Banikhet." }
    ]
  },

  "jaipur-to-mount-abu": {
    from: "Jaipur",
    to: "Mount Abu",
    distance: "490 km",
    distanceNum: 490,
    time: "8-9 hours",
    highway: "NH-48 & NH-27 via Ajmer, Pali & Abu Road",
    ...calcFares(490),
    highlights: ["Via Ajmer, Pali and Abu Road on NH-48 and NH-27", "8-9 hours Pink City to Rajasthan's only hill station", "Direct doorstep drop at any Mount Abu or Nakki Lake hotel"],
    popularStops: ["Ajmer", "Pali", "Abu Road"],
    bestTime: "Early 6-7 AM departure to cover the 490 km comfortably and reach Mount Abu by evening before the final ghat road",
    description: `The Jaipur to Mount Abu one-way cab is the most relaxed way to reach Rajasthan's only hill station — a 490 km journey from the Pink City of Jaipur down to Mount Abu, the cool, lake-dotted retreat set high on the Aravalli range and home to the exquisite Dilwara Jain temples. At Triveni Cabs we run this corridor for families escaping the desert heat for the pines and boating of Nakki Lake, pilgrims heading to Dilwara and the Brahma Kumaris headquarters, couples on a Rajasthan honeymoon loop, and travellers who want one comfortable car and one trusted driver for the whole journey rather than changing to a taxi at Abu Road railway station.

Because Jaipur to Mount Abu is a genuine long-distance leg at 490 km, it bills on actual distance rather than the 300 km minimum — and the one-way model is still dramatically cheaper than a round trip. A round-trip Jaipur–Mount Abu cab would charge you for 980 km of running, including a 490 km empty return you will never sit in if you are continuing to Udaipur, Ahmedabad, or back by train from Abu Road. Our one-way Sedan from Jaipur to Mount Abu is ₹5,390 at ₹11/km, versus ₹10,780 for the round trip — a clean saving of ₹5,390. The Ertiga SUV one-way is ₹7,350 and the Innova Crysta is ₹8,820, each exactly half the cost of a traditional return booking and the sensible choice for a one-direction transfer of this length.

The drive is a fine cross-section of Rajasthan. From Jaipur the route runs south-west on NH-48 through Dudu and Kishangarh to Ajmer — the holy city of the Ajmer Sharif Dargah and the natural first anchor at roughly 130 km, a good breakfast and refreshment halt. Beyond Ajmer the highway continues across the arid Marwar plains toward Beawar and on toward Pali — the textile town and a useful mid-journey lunch stop at around 300 km. From the Pali–Sirohi belt the road joins NH-27 and heads to Abu Road, the railhead town at the foot of the mountain at roughly 460 km, from where the final serpentine ghat climb of about 28 km winds up through forest to Mount Abu itself. Total drive time is 8–9 hours, which is why we recommend an early 6–7 AM departure so you cover the plains comfortably and tackle the Abu Road ghat section in good daylight, reaching the hill station by evening.

En-route stops make this desert-to-hill drive easy and interesting. Ajmer is the ideal first break — beyond a good highway meal, it is the gateway to the Dargah and to Pushkar just beyond. Pali is the practical mid-journey lunch halt with reliable restaurants on the bypass. Abu Road, at the base of the climb, is the final refuel and chai stop before the ghat, and the point where the air begins to cool. Our drivers also know the cleaner dhabas around Beawar and the viewpoints on the ghat road up. Up to two on-route stops are included free; the Ajmer breakfast plus Pali lunch combination is the one most travellers choose on this leg.

Our pickup reach covers all of Jaipur without extra charge — Jaipur International Airport (JAI) with flight tracking, Jaipur Railway Station and the Sindhi Camp bus stand, the MI Road and Bani Park hotel belt, the C-Scheme and Civil Lines areas, and doorstep pickup from any address in Malviya Nagar, Vaishali Nagar, or Mansarovar. In Mount Abu we drop at any hotel around Nakki Lake, the Mall Road and Polo Ground belt, the Dilwara Temple road, and any resort toward Sunset Point (no extra charge).

For a journey this long, vehicle comfort matters. The Sedan (Swift Dzire or Toyota Etios) suits two or three passengers travelling light, but on 490 km many travellers upgrade. Families of four to six with holiday luggage should book the Ertiga SUV for boot space, third-row room, and a more planted feel on the Abu Road ghat. For the most relaxed possible ride, premium comfort over eight-plus hours, or groups of six to seven, the Innova Crysta is the top recommendation — its cabin space and stability make both the plains cruise and the final mountain climb effortless. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers experienced on the full Jaipur–Ajmer–Abu Road route. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer to Mount Abu.`,
    faqs: [
      { question: "How much does a one-way cab from Jaipur to Mount Abu cost?", answer: "A one-way cab from Jaipur to Mount Abu starts at ₹5,390 for a Sedan at ₹11/km over the 490 km route. Ertiga SUV costs ₹7,350 and Innova Crysta costs ₹8,820. Toll and parking are extra at actual." },
      { question: "How long does Jaipur to Mount Abu take by cab?", answer: "Jaipur to Mount Abu is about 490 km and takes 8-9 hours by cab via Ajmer, Pali and Abu Road on NH-48 and NH-27, including breaks and the final ghat climb from Abu Road. An early 6-7 AM start gets you to the hill station by evening." },
      { question: "Is a one-way cab cheaper than a round trip from Jaipur to Mount Abu?", answer: "Yes. A one-way Sedan is ₹5,390 versus ₹10,780 for a round trip, saving you ₹5,390 because you do not pay for the 490 km empty return. This is ideal if you are continuing to Udaipur or Ahmedabad or returning by train from Abu Road." },
      { question: "Can I stop at Ajmer and Pali on the way?", answer: "Yes, up to 2 on-route stops are included free. Most travellers break for breakfast at Ajmer, the Dargah city, take lunch at Pali, and pause for chai and refuel at Abu Road before the 28 km ghat climb up to Mount Abu." },
      { question: "Which vehicle is best for the Jaipur to Mount Abu drive?", answer: "For this 490 km journey ending on a mountain ghat, the Innova Crysta is the top choice for its cabin space and stability. Sedans suit 2-3 light travellers, while the Ertiga works well for families of 4-6 with luggage on the Abu Road climb." },
      { question: "Do you offer airport pickup for Jaipur to Mount Abu?", answer: "Yes, we pick up from Jaipur International Airport (JAI) with flight tracking, Jaipur Railway Station, the Sindhi Camp bus stand, or any hotel and address in the city, and drop at any hotel in Mount Abu around Nakki Lake, Mall Road or the Dilwara Temple road." }
    ]
  },

  "udaipur-to-chittorgarh": {
    from: "Udaipur",
    to: "Chittorgarh",
    distance: "115 km",
    distanceNum: 115,
    time: "2-2.5 hours",
    highway: "NH-48 direct",
    ...calcFares(115),
    highlights: ["Fast NH-48 run from the City of Lakes to the mighty Chittorgarh Fort", "2-2.5 hours direct with minimal breaks", "Ideal day-trip or one-way transfer to the Mewar heartland"],
    popularStops: ["Debari", "Kapasan"],
    bestTime: "Early 7-8 AM departure to reach Chittorgarh Fort by mid-morning and beat the afternoon heat on the ramparts",
    description: `The Udaipur to Chittorgarh one-way cab is the quick, comfortable way to travel between two icons of Mewar — a 115 km run from Udaipur, the romantic City of Lakes, north-east to Chittorgarh, home to the largest fort in India and the beating heart of Rajput valour and legend. At Triveni Cabs we run this short corridor for history lovers heading to the vast Chittorgarh Fort and the tales of Rani Padmini and Maharana Pratap, families on a Mewar circuit, pilgrims visiting the Kalika Mata and Meera temples inside the fort, and travellers who want a private car for a relaxed day trip or a one-way onward transfer toward Kota, Bundi, or Bhilwara rather than waiting on a train.

Because Udaipur to Chittorgarh is 115 km, this leg bills at our 300 km minimum fare — and we state that honestly, because it is still far better value than a round trip and far more comfortable than a shared cab. A round-trip cab would charge you for the return running as well, whereas our one-way Sedan from Udaipur to Chittorgarh is ₹3,300, calculated from the 300 km minimum at ₹11/km, and includes a private, air-conditioned car entirely to yourselves. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or small group who value doorstep pickup, a clean vehicle, and a driver who knows the fort gates and parking.

The drive is one of the easiest in Rajasthan. From Udaipur the route joins NH-48 near Debari and runs almost dead straight north-east across the gently rolling Mewar countryside — a fast, well-surfaced four-lane highway with the Aravalli hills on the horizon. The road passes Kapasan and the turn-offs for Nathdwara and Eklingji (the famous Shrinathji and Shiva temples, if you wish to combine them), before rolling into Chittorgarh town at the foot of the fort's 180-metre hill. Total drive time is a comfortable 2–2.5 hours with no major ghats, which is why we recommend an early 7–8 AM departure so you reach the fort by mid-morning and can explore the sprawling ramparts, the Vijay Stambh (Tower of Victory), and the palaces before the afternoon heat builds on the exposed hilltop.

En-route this is a short, direct leg with no compulsory major halts, but comfort breaks are easy to arrange. Debari, just outside Udaipur, has good roadside refreshment options if you want a quick coffee before settling in. Kapasan, roughly midway, is a convenient washroom and chai stop. Travellers combining temples often ask to detour briefly to Nathdwara — our drivers are happy to plan this. Up to two on-route stops are included free, though on a run this short most travellers simply drive straight through and save their energy for the enormous fort, which itself needs a car to move between its scattered monuments.

Our pickup reach covers all of Udaipur without extra charge — Maharana Pratap Airport (UDR) with flight tracking, Udaipur City railway station and the bus stand, the Lake Pichola and Fatehsagar hotel belts, the City Palace area, and doorstep pickup from any address in the old city or the newer Hiran Magri and Sector 14 areas. In Chittorgarh we drop at the fort's Ram Pol main gate, any hotel in Chittorgarh town, or the railway station, and can wait or continue onward toward Kota, Bundi, or Bhilwara (no extra charge within the transfer).

For vehicle choice on this easy highway leg, the priority is a clean, cool ride and enough room for comfortable fort exploration. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers. Families of four to six should book the Ertiga SUV for the extra room, especially useful when driving between the fort's spread-out monuments. For groups of six to seven or those wanting maximum comfort, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who know the Udaipur–Chittorgarh road and the fort layout well. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer to Chittorgarh.`,
    faqs: [
      { question: "How much does a one-way cab from Udaipur to Chittorgarh cost?", answer: "A one-way cab from Udaipur to Chittorgarh starts at ₹3,300 for a Sedan. Because the route is 115 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Udaipur to Chittorgarh take by cab?", answer: "Udaipur to Chittorgarh is about 115 km and takes 2-2.5 hours by cab on the direct NH-48 highway with no major ghats. An early 7-8 AM start gets you to Chittorgarh Fort by mid-morning to explore before the afternoon heat." },
      { question: "Why is the Udaipur to Chittorgarh fare based on 300 km?", answer: "The route is only 115 km, and like all short trips it bills at our 300 km minimum fare, so a Sedan is ₹3,300. This still gives you a private, air-conditioned car to yourselves with doorstep pickup, which is far more comfortable than a shared cab or train." },
      { question: "Can the cab wait and take me around Chittorgarh Fort?", answer: "Yes. The fort is vast and spread across a hilltop, so a car is genuinely useful for moving between the Vijay Stambh, the palaces and the temples. We can wait at the fort or plan an onward transfer toward Kota, Bundi or Bhilwara." },
      { question: "Can I combine Nathdwara or Eklingji temples on the way?", answer: "Yes. The NH-48 route passes the turn-offs for Nathdwara (Shrinathji) and Eklingji, and up to 2 on-route stops are included free. Just let the driver know and we will plan a brief temple detour into your journey." },
      { question: "Which vehicle is best for Udaipur to Chittorgarh?", answer: "For this easy 115 km leg, a Sedan suits 2-3 passengers, while the Ertiga is ideal for families of 4-6 who want extra room to explore the sprawling fort. Groups of 6-7 or those wanting maximum comfort should choose the Innova Crysta." }
    ]
  },

  "lucknow-to-ayodhya": {
    from: "Lucknow",
    to: "Ayodhya",
    distance: "135 km",
    distanceNum: 135,
    time: "2.5-3 hours",
    highway: "NH-27 via Barabanki",
    ...calcFares(135),
    highlights: ["Fast NH-27 run from Lucknow to the Ram Mandir town of Ayodhya", "2.5-3 hours direct via Barabanki", "Ideal for Ram Janmabhoomi darshan day trips and one-way transfers"],
    popularStops: ["Barabanki"],
    bestTime: "Early 6-7 AM departure to reach Ayodhya for a morning darshan at the Ram Mandir before the crowds build",
    description: `The Lucknow to Ayodhya one-way cab is the most convenient way to reach the holy city of Ayodhya — a 135 km run from Lucknow, the Nawabi capital of Uttar Pradesh, east to Ayodhya, the birthplace of Lord Ram and home to the grand new Ram Mandir on the Ram Janmabhoomi. At Triveni Cabs we run this corridor for pilgrims travelling for darshan at the temple, families combining Ayodhya with the Hanuman Garhi and Kanak Bhawan shrines, devotees arriving into Lucknow's airport or railway station and continuing straight to Ayodhya, and travellers who want a private car with a driver who knows the darshan gates rather than negotiating a shared cab.

Because Lucknow to Ayodhya is 135 km, this leg bills at our 300 km minimum fare — and we state that plainly, because it is still excellent value for a private temple transfer. A round-trip cab would charge you for the return running too, whereas our one-way Sedan from Lucknow to Ayodhya is ₹3,300, calculated from the 300 km minimum at ₹11/km, and puts a clean, air-conditioned car entirely at your service. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or pilgrim group who value doorstep pickup, punctual timing for the aarti, and a comfortable ride each way.

The drive is quick and easy on one of eastern UP's best highways. From Lucknow the route joins NH-27, the Lucknow–Gorakhpur corridor, and runs east through Chinhat and on to Barabanki — the natural mid-point at roughly 30 km and a convenient early break. Beyond Barabanki the four-lane highway continues smoothly through the flat Awadh farmland via Rudauli toward Ayodhya, arriving at the temple town on the banks of the sacred Saryu river. Total drive time is a comfortable 2.5–3 hours with no ghats or difficult stretches, which is exactly why we recommend an early 6–7 AM departure so you reach Ayodhya for a peaceful morning darshan at the Ram Mandir before the day's crowds build, with time also for Hanuman Garhi and a dip or aarti at the Saryu ghats.

En-route this is a short, direct leg, and Barabanki is the one natural stop — a good place for a quick breakfast, chai, or a washroom break before the smooth run into Ayodhya. Our drivers know the cleaner dhabas along the NH-27 stretch and, importantly, the current parking and drop arrangements near the Ram Mandir, which change with pilgrim volumes. Up to two on-route stops are included free, though on a run this short most pilgrims prefer to drive straight through to make the morning darshan and use the day fully in Ayodhya.

Our pickup reach covers all of Lucknow without extra charge — Chaudhary Charan Singh International Airport (LKO) with flight tracking, Lucknow Charbagh and Lucknow Junction railway stations, the Hazratganj and Gomti Nagar hotel belts, and doorstep pickup from any address across Aliganj, Indira Nagar, or Alambagh. In Ayodhya we drop as close to the Ram Mandir darshan entry as vehicles are permitted, at any hotel or dharamshala in the town, or at the Saryu ghats and Hanuman Garhi (no extra charge).

For vehicle choice on this easy highway leg, the priority is a cool, comfortable ride and punctual timing for darshan. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three pilgrims. Families of four to six should book the Ertiga SUV for the extra room and luggage space. For groups of six to seven or those wanting maximum comfort, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Lucknow–Ayodhya road regularly and plan timing around the aarti and darshan schedule. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way pilgrimage transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Lucknow to Ayodhya cost?", answer: "A one-way cab from Lucknow to Ayodhya starts at ₹3,300 for a Sedan. Because the route is 135 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Lucknow to Ayodhya take by cab?", answer: "Lucknow to Ayodhya is about 135 km and takes 2.5-3 hours by cab on the smooth NH-27 highway via Barabanki, with no ghats. An early 6-7 AM start gets you to Ayodhya for a peaceful morning darshan at the Ram Mandir before the crowds build." },
      { question: "Why is the Lucknow to Ayodhya fare based on 300 km?", answer: "The route is only 135 km, and like all short trips it bills at our 300 km minimum fare, so a Sedan is ₹3,300. This gives you a private, air-conditioned car to yourselves with doorstep pickup and punctual timing for darshan, far better than a shared cab." },
      { question: "Can you drop me close to the Ram Mandir in Ayodhya?", answer: "Yes. We drop as close to the Ram Mandir darshan entry as vehicles are permitted, and our drivers know the current parking arrangements, which change with pilgrim volumes. We also drop at Hanuman Garhi, the Saryu ghats, or any hotel or dharamshala in Ayodhya." },
      { question: "Is a one-way cab good for an Ayodhya day trip from Lucknow?", answer: "Yes. Many pilgrims book a one-way transfer for darshan, or a round trip for a same-day return. An early start lets you cover the Ram Mandir, Hanuman Garhi, Kanak Bhawan and the Saryu aarti comfortably in a day." },
      { question: "Which vehicle is best for Lucknow to Ayodhya?", answer: "For this easy 135 km pilgrimage leg, a Sedan suits 2-3 pilgrims, the Ertiga is ideal for families of 4-6 with luggage, and the Innova Crysta is best for groups of 6-7 or anyone wanting maximum comfort on the ride to darshan." }
    ]
  },

  "delhi-to-moradabad": {
    from: "Delhi",
    to: "Moradabad",
    distance: "170 km",
    distanceNum: 170,
    time: "3-4 hours",
    highway: "NH-9 via Gajraula",
    ...calcFares(170),
    highlights: ["Fast NH-9 run from Delhi to the Brass City of Moradabad", "3-4 hours direct via Gajraula", "Convenient for business, brass-trade and onward Kumaon travel"],
    popularStops: ["Gajraula"],
    bestTime: "Morning 8-9 AM departure to clear the Delhi exit and reach Moradabad by lunchtime",
    description: `The Delhi to Moradabad one-way cab is the easy, direct way to reach the "Brass City" of western Uttar Pradesh — a 170 km run from Delhi east on NH-9 to Moradabad, the famous centre of India's brass and metalware handicraft industry on the banks of the Ramganga. At Triveni Cabs we run this corridor for business travellers and exporters visiting the brass workshops and showrooms, families heading home to Moradabad, travellers using it as the first leg toward Kumaon and Jim Corbett, and anyone who wants a private, punctual car rather than a crowded train or a bus change.

Because Delhi to Moradabad is 170 km, this leg bills at our 300 km minimum fare — and we say so honestly, because it is still great value for a private highway transfer. A round-trip cab would charge you for the return running as well, whereas our one-way Sedan from Delhi to Moradabad is ₹3,300, calculated from the 300 km minimum at ₹11/km, and gives you a clean, air-conditioned car to yourself. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or a business group who value doorstep pickup, punctual timing, and comfortable boot space for samples or luggage.

The drive is a fast, modern highway run. From Delhi the route crosses the Yamuna and joins NH-9, the Delhi–Lucknow corridor, running east through Hapur and across the Ganga to Gajraula — the well-known dhaba town and the natural mid-point at roughly 90 km. Beyond Gajraula the four-lane highway continues smoothly through the western UP farmland via Amroha into Moradabad. Total drive time is a comfortable 3–4 hours depending on the Delhi exit traffic, which is why we recommend a morning 8–9 AM departure so you clear the NCR before it clogs and reach Moradabad by lunchtime, ready for meetings or the brass markets.

En-route Gajraula is the one classic stop — a fixture on every Delhi–UP drive, with reliable dhabas serving parathas and chai, clean washrooms, and quick refreshment before the final stretch. Our drivers also know the newer food courts along the expressway-standard sections nearer Delhi. Up to two on-route stops are included free, though on a run this short many travellers simply push through to Moradabad and take their break there.

Our pickup reach covers all of Delhi NCR without extra charge — Indira Gandhi International Airport (all terminals) with flight tracking, New Delhi, Old Delhi, Hazrat Nizamuddin and Anand Vihar railway stations, and doorstep pickup from anywhere in South Delhi, Dwarka, Gurgaon, Noida, or Ghaziabad. In Moradabad we drop at any address across the brass market and Peetal Basti area, the Civil Lines and Railway Road hotels, the industrial and export-house belts, or the railway station (no extra charge), and can continue onward toward Kashipur, Ramnagar, and Jim Corbett if you are chaining a Kumaon trip.

For vehicle choice on this easy highway leg, the priority is a clean, cool ride and enough space for luggage or brass samples. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers. Families or business groups of four to six should book the Ertiga SUV for the extra room and boot space. For groups of six to seven or those wanting maximum comfort, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Delhi–Moradabad road daily. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer to Moradabad.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Moradabad cost?", answer: "A one-way cab from Delhi to Moradabad starts at ₹3,300 for a Sedan. Because the route is 170 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Moradabad take by cab?", answer: "Delhi to Moradabad is about 170 km and takes 3-4 hours by cab on the fast NH-9 highway via Gajraula, depending on the Delhi exit traffic. A morning 8-9 AM start clears the NCR before it clogs and gets you to Moradabad by lunchtime." },
      { question: "Why is the Delhi to Moradabad fare based on 300 km?", answer: "The route is only 170 km, and like all short trips it bills at our 300 km minimum fare, so a Sedan is ₹3,300. This gives you a private, air-conditioned car to yourself with doorstep pickup, far more comfortable than a crowded train or a bus change." },
      { question: "Can I continue to Jim Corbett or Nainital from Moradabad?", answer: "Yes. Moradabad is the natural first leg toward Kumaon, and we can continue onward to Kashipur, Ramnagar and Jim Corbett or up to Nainital. Just tell us your onward plan and we will quote the full transfer upfront." },
      { question: "Can I stop at Gajraula on the way?", answer: "Yes, up to 2 on-route stops are included free. Gajraula is the classic mid-highway dhaba halt on the Delhi-Moradabad road, ideal for parathas, chai and a washroom break before the final stretch." },
      { question: "Which vehicle is best for Delhi to Moradabad?", answer: "For this easy 170 km highway leg, a Sedan suits 2-3 passengers, the Ertiga is ideal for families or business groups of 4-6 with luggage or brass samples, and the Innova Crysta is best for groups of 6-7 or anyone wanting maximum comfort." }
    ]
  },

  "delhi-to-aligarh": {
    from: "Delhi",
    to: "Aligarh",
    distance: "140 km",
    distanceNum: 140,
    time: "2.5-3 hours",
    highway: "Yamuna Expressway & NH-34 via Khair",
    ...calcFares(140),
    highlights: ["Fast run via the Yamuna Expressway and NH-34", "2.5-3 hours direct to the Lock City and AMU", "Convenient for university, business and family travel"],
    popularStops: ["Jewar", "Khair"],
    bestTime: "Morning 8-9 AM departure to clear the Delhi exit and reach Aligarh before midday",
    description: `The Delhi to Aligarh one-way cab is the fast, comfortable way to reach the "Lock City" of western Uttar Pradesh — a 140 km run from Delhi to Aligarh, the historic town famous for its hardware and lock industry and home to the prestigious Aligarh Muslim University (AMU). At Triveni Cabs we run this corridor for parents and students travelling to AMU, business visitors to the lock and hardware trade, families heading home to Aligarh, and travellers who want a private, punctual car rather than an unreserved train or a bus change.

Because Delhi to Aligarh is 140 km, this leg bills at our 300 km minimum fare — and we state it plainly, because it is still strong value for a private door-to-door transfer. A round-trip cab would charge you for the return running as well, whereas our one-way Sedan from Delhi to Aligarh is ₹3,300, calculated from the 300 km minimum at ₹11/km, and puts a clean, air-conditioned car entirely at your disposal. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or a group who value doorstep pickup, comfortable luggage space (useful for students' hostel loads), and reliable timing.

The drive is a quick, modern highway run. From Delhi the route heads out through Noida onto the smooth, high-speed Yamuna Expressway, running south-east past the Jewar airport corridor to the Aligarh interchange, then joining NH-34 through Khair for the final stretch into Aligarh town. This expressway routing makes the journey noticeably faster and less stressful than the older Grand Trunk Road via Bulandshahr. Total drive time is a comfortable 2.5–3 hours depending on the Delhi exit traffic, which is why we recommend a morning 8–9 AM departure so you clear the NCR before it clogs and reach Aligarh before midday, ready for university work, meetings, or family time.

En-route the Yamuna Expressway has clean, modern service plazas — Jewar is a convenient early refreshment and washroom stop with food courts, and Khair, near the highway exit, is a handy final chai halt before entering Aligarh. Our drivers know the reliable food courts along the expressway. Up to two on-route stops are included free, though on a run this short and smooth many travellers prefer to drive straight through and take their break at the destination.

Our pickup reach covers all of Delhi NCR without extra charge — Indira Gandhi International Airport (all terminals) with flight tracking, New Delhi, Old Delhi, Hazrat Nizamuddin and Anand Vihar railway stations, and doorstep pickup from anywhere in South Delhi, Dwarka, Gurgaon, Noida, or Ghaziabad. In Aligarh we drop at the Aligarh Muslim University campus and its hostels, any hotel across the Centre Point and Ramghat Road belt, the lock-market and Civil Lines areas, or the railway station (no extra charge).

For vehicle choice on this easy expressway leg, the priority is a cool, comfortable ride and enough room for luggage. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers. Families or student groups of four to six should book the Ertiga SUV for the extra room and boot space, ideal for hostel luggage. For groups of six to seven or those wanting maximum comfort, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Delhi–Aligarh expressway route regularly. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer to Aligarh.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Aligarh cost?", answer: "A one-way cab from Delhi to Aligarh starts at ₹3,300 for a Sedan. Because the route is 140 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Aligarh take by cab?", answer: "Delhi to Aligarh is about 140 km and takes 2.5-3 hours by cab via the fast Yamuna Expressway and NH-34 through Khair, depending on the Delhi exit traffic. A morning 8-9 AM start clears the NCR early and gets you to Aligarh before midday." },
      { question: "Why is the Delhi to Aligarh fare based on 300 km?", answer: "The route is only 140 km, and like all short trips it bills at our 300 km minimum fare, so a Sedan is ₹3,300. This gives you a private, air-conditioned car to yourself with doorstep pickup, far more comfortable than an unreserved train or a bus change." },
      { question: "Can you drop me directly at Aligarh Muslim University (AMU)?", answer: "Yes. We drop directly at the AMU campus and its hostels, which is why many parents and students book a one-way cab with us. We also drop at any hotel on Ramghat Road, the lock-market area, or the Aligarh railway station." },
      { question: "Which route does the Delhi to Aligarh cab take?", answer: "We take the smooth Yamuna Expressway from Noida past the Jewar airport corridor to the Aligarh interchange, then NH-34 through Khair into town. This expressway routing is faster and less stressful than the older Grand Trunk Road via Bulandshahr." },
      { question: "Which vehicle is best for Delhi to Aligarh?", answer: "For this easy 140 km expressway leg, a Sedan suits 2-3 passengers, the Ertiga is ideal for families or student groups of 4-6 with hostel luggage, and the Innova Crysta is best for groups of 6-7 or anyone wanting maximum comfort." }
    ]
  },

  "varanasi-to-prayagraj": {
    from: "Varanasi",
    to: "Prayagraj",
    distance: "125 km",
    distanceNum: 125,
    time: "2.5-3 hours",
    highway: "NH-19 via Gyanpur",
    ...calcFares(125),
    highlights: ["Fast NH-19 run between two of India's holiest cities", "2.5-3 hours direct via Gyanpur", "Ideal for Kashi-Prayag pilgrimage and Triveni Sangam trips"],
    popularStops: ["Gyanpur"],
    bestTime: "Early 6-7 AM departure to reach the Triveni Sangam for a morning boat ride and darshan",
    description: `The Varanasi to Prayagraj one-way cab is the natural pilgrimage link between two of Hinduism's holiest cities — a 125 km run from Varanasi (Kashi), the city of Lord Shiva and the Ganga ghats, west to Prayagraj (Allahabad), home of the sacred Triveni Sangam where the Ganga, Yamuna, and mythical Saraswati meet. At Triveni Cabs we run this corridor for pilgrims chaining the Kashi–Prayag yatra, families heading for a boat ride and holy dip at the Sangam, devotees visiting during Magh Mela and Kumbh, and travellers who want a private car with a driver who knows the ghats and Sangam access rather than a crowded train.

Because Varanasi to Prayagraj is 125 km, this leg bills at our 300 km minimum fare — and we state it honestly, because it is still excellent value for a private pilgrimage transfer. A round-trip cab would charge you for the return running as well, whereas our one-way Sedan from Varanasi to Prayagraj is ₹3,300, calculated from the 300 km minimum at ₹11/km, and gives you a clean, air-conditioned car entirely to yourselves. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or pilgrim group who value doorstep pickup, punctual timing for the morning boat ride, and comfort each way.

The drive is a smooth run across the Purvanchal plains. From Varanasi the route joins NH-19, the historic Grand Trunk Road corridor, and heads west through Mohansarai and past the turn-off for Gyanpur (Bhadohi) — the famous carpet-weaving town and the natural mid-point at roughly 60 km. Beyond Gyanpur the four-lane highway continues through Handia across the flat Ganga-Yamuna doab toward Prayagraj, arriving in the city that hosts the world's largest religious gathering. Total drive time is a comfortable 2.5–3 hours with no difficult stretches, which is why we recommend an early 6–7 AM departure so you reach the Triveni Sangam for a peaceful morning boat ride and holy dip, with time also for the Hanuman Mandir, Anand Bhavan, and the Akshayavat at the fort.

En-route Gyanpur (Bhadohi) is the one classic stop — the heart of India's hand-knotted carpet industry, with good roadside dhabas for a quick breakfast or chai and a chance to glimpse the weaving trade. Our drivers know the cleaner food halts along the NH-19 stretch and, importantly, the current Sangam approach and parking arrangements, which change dramatically during Mela and Kumbh seasons. Up to two on-route stops are included free, though most pilgrims prefer to drive straight through to make the morning at the Sangam.

Our pickup reach covers all of Varanasi without extra charge — Lal Bahadur Shastri International Airport (VNS) with flight tracking, Varanasi Junction (Cantt) and Banaras railway stations, the Dashashwamedh and Assi Ghat hotel belts, the Godowlia and Lanka areas, and doorstep pickup from any address in the city. In Prayagraj we drop as close to the Triveni Sangam as vehicles are permitted, at any hotel in the Civil Lines area, the railway station, or the Daraganj and fort ghats (no extra charge).

For vehicle choice on this easy pilgrimage leg, the priority is a cool, comfortable ride and room for family and luggage. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three pilgrims. Families of four to six should book the Ertiga SUV for the extra room and luggage space. For groups of six to seven or those wanting maximum comfort, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Kashi–Prayag road regularly and plan timing around the Sangam boat rides and darshan. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way pilgrimage transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Varanasi to Prayagraj cost?", answer: "A one-way cab from Varanasi to Prayagraj starts at ₹3,300 for a Sedan. Because the route is 125 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Varanasi to Prayagraj take by cab?", answer: "Varanasi to Prayagraj is about 125 km and takes 2.5-3 hours by cab on the smooth NH-19 highway via Gyanpur, with no difficult stretches. An early 6-7 AM start gets you to the Triveni Sangam for a peaceful morning boat ride and holy dip." },
      { question: "Why is the Varanasi to Prayagraj fare based on 300 km?", answer: "The route is only 125 km, and like all short trips it bills at our 300 km minimum fare, so a Sedan is ₹3,300. This gives you a private, air-conditioned car to yourselves with doorstep pickup and punctual timing for the Sangam, far better than a crowded train." },
      { question: "Can you drop me close to the Triveni Sangam in Prayagraj?", answer: "Yes. We drop as close to the Triveni Sangam as vehicles are permitted, and our drivers know the current approach and parking arrangements, which change during Magh Mela and Kumbh. We also drop at Civil Lines hotels, the fort ghats, or the railway station." },
      { question: "Is the cab suitable for the Kashi to Prayag pilgrimage?", answer: "Yes. This is one of the most popular pilgrimage legs, linking the Kashi Vishwanath ghats with the Triveni Sangam. Many pilgrims book a one-way transfer, or a round trip for a same-day Sangam darshan and return to Varanasi." },
      { question: "Which vehicle is best for Varanasi to Prayagraj?", answer: "For this easy 125 km pilgrimage leg, a Sedan suits 2-3 pilgrims, the Ertiga is ideal for families of 4-6 with luggage, and the Innova Crysta is best for groups of 6-7 or anyone wanting maximum comfort on the way to the Sangam." }
    ]
  },

  "delhi-to-rohtak": {
    from: "Delhi",
    to: "Rohtak",
    distance: "70 km",
    distanceNum: 70,
    time: "1.5-2 hours",
    highway: "NH-9 & KMP Expressway via Bahadurgarh",
    ...calcFares(70),
    highlights: ["Quick NH-9 run from Delhi to the heart of Haryana", "1.5-2 hours direct via Bahadurgarh", "Ideal for business, university and family day trips"],
    popularStops: ["Bahadurgarh"],
    bestTime: "Off-peak mid-morning or early-afternoon departure to avoid the Delhi-Bahadurgarh rush-hour crawl",
    description: `The Delhi to Rohtak one-way cab is the quick, comfortable way to reach the education and industrial hub of central Haryana — a short 70 km run from Delhi west on NH-9 to Rohtak, home to Maharshi Dayanand University, the PGIMS medical institute, and a busy business and coaching-centre economy. At Triveni Cabs we run this corridor for students and parents visiting MDU and the coaching institutes, business travellers to Rohtak's industrial belt, families heading home for weddings and functions, and anyone who wants a private, punctual car rather than a packed local train or the standing-room Haryana Roadways bus.

Because Delhi to Rohtak is just 70 km, this leg bills at our 300 km minimum fare — and we say so upfront and honestly, because it is a short hop where the minimum applies. A round-trip cab would charge you for the return running as well, whereas our one-way Sedan from Delhi to Rohtak is ₹3,300, calculated from the 300 km minimum at ₹11/km, and gives you a clean, air-conditioned car entirely to yourself with true doorstep-to-doorstep service. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400 — each the sensible choice for a family or group who value comfort, luggage space, and a driver who waits and helps rather than a shared cab.

The drive is a short and simple one. From Delhi the route heads west out of the city on NH-9 (the old Rohtak Road) through Peeragarhi and Tikri toward Bahadurgarh — the border town and the natural mid-point at roughly 30 km, where Delhi gives way to Haryana. Travellers coming from the southern or western NCR can instead use the KMP (Kundli–Manesar–Palwal) Expressway to bypass city traffic entirely and join the Rohtak road further out. Beyond Bahadurgarh the highway runs straight across the flat Haryana farmland through Sampla into Rohtak. Total drive time is a comfortable 1.5–2 hours, with the only real variable being the Delhi–Bahadurgarh stretch at rush hour, which is why we recommend an off-peak mid-morning or early-afternoon departure to keep the run smooth.

En-route Bahadurgarh is the one natural stop on this short leg — a convenient point for a quick chai, a washroom break, or a bite before the final open-highway stretch into Rohtak. Our drivers know the reliable dhabas along the Rohtak Road and the fastest way through or around the Bahadurgarh bottleneck. Up to two on-route stops are included free, though on a run this short most travellers simply drive straight through.

Our pickup reach covers all of Delhi NCR without extra charge — Indira Gandhi International Airport (all terminals) with flight tracking, New Delhi, Old Delhi, Hazrat Nizamuddin and Anand Vihar railway stations, and doorstep pickup from anywhere in South Delhi, Dwarka, Gurgaon, Noida, or Ghaziabad. In Rohtak we drop at the Maharshi Dayanand University (MDU) campus, the PGIMS medical institute, any hotel across the Delhi Road and Model Town belt, the coaching-centre areas, or the railway and bus stands (no extra charge).

For vehicle choice on this quick highway leg, the priority is a clean, cool ride and enough room for luggage. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers. Families or student groups of four to six should book the Ertiga SUV for the extra room and boot space, useful for hostel luggage. For groups of six to seven or those wanting maximum comfort, the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Delhi–Rohtak road daily and know how to time the Bahadurgarh stretch. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer to Rohtak.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Rohtak cost?", answer: "A one-way cab from Delhi to Rohtak starts at ₹3,300 for a Sedan. Because the route is only 70 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Rohtak take by cab?", answer: "Delhi to Rohtak is about 70 km and takes 1.5-2 hours by cab on NH-9 via Bahadurgarh, with the KMP Expressway an option to bypass city traffic. The main variable is the Delhi-Bahadurgarh stretch at rush hour, so an off-peak departure keeps it smooth." },
      { question: "Why is the Delhi to Rohtak fare based on 300 km?", answer: "The route is only 70 km, a short hop, so like all short trips it bills at our 300 km minimum fare, making a Sedan ₹3,300. This gives you a private, air-conditioned car to yourself with true doorstep pickup, far more comfortable than a packed local train or bus." },
      { question: "Can you drop me at MDU or PGIMS in Rohtak?", answer: "Yes. We drop directly at the Maharshi Dayanand University (MDU) campus and the PGIMS medical institute, which is why many students, parents and patients book a one-way cab with us. We also drop at Model Town hotels, the coaching areas, or the railway and bus stands." },
      { question: "Is a one-way cab good for a Delhi to Rohtak day trip?", answer: "Yes. At just 70 km it is an easy day trip, and many travellers book a one-way transfer for a university visit, business meeting or function, or a round trip for a same-day return to Delhi." },
      { question: "Which vehicle is best for Delhi to Rohtak?", answer: "For this quick 70 km leg, a Sedan suits 2-3 passengers, the Ertiga is ideal for families or student groups of 4-6 with luggage, and the Innova Crysta is best for groups of 6-7 or anyone wanting maximum comfort door to door." }
    ]
  },
"jaipur-to-manali": {
    from: "Jaipur",
    to: "Manali",
    distance: "800 km",
    distanceNum: 800,
    time: "15-16 hours",
    highway: "NH-48 & NH-3 via Chandigarh, Bilaspur & Mandi",
    ...calcFares(800),
    highlights: ["Via Chandigarh, Bilaspur and Mandi on NH-48 and NH-3", "15-16 hours Pink City to Valley of Gods transfer", "Rajasthan plains to Himachal Himalayas in one journey"],
    popularStops: ["Chandigarh", "Bilaspur", "Mandi"],
    bestTime: "Very early 4-5 AM departure (or an overnight-into-morning start) to cover the 800 km and reach Manali by evening",
    description: `The Jaipur to Manali one-way cab is one of the great long-haul road journeys of North India — an 800 km transfer that carries you from the Pink City of Jaipur, the royal capital of Rajasthan, all the way up to Manali, the alpine Valley of the Gods in Himachal Pradesh. At Triveni Cabs we run this corridor for families chaining a Rajasthan-plus-Himachal grand tour, honeymooners escaping the desert heat for the mountains, groups of friends heading to Solang Valley and Rohtang for adventure, and travellers who simply want one comfortable car and one trusted driver for the entire two-region journey rather than juggling flights, trains, and bus changes.

Jaipur to Manali is a genuine long-distance leg at 800 km, so it bills on actual distance rather than the 300 km minimum — and the one-way model is still dramatically cheaper than a round trip. A round-trip Jaipur–Manali cab would charge you for 1,600 km of running, including an 800 km empty return you will never sit in if you are flying home from Kullu-Bhuntar, continuing to Shimla or Dharamshala, or looping back through Chandigarh. Our one-way Sedan from Jaipur to Manali is ₹8,800 at ₹11/km, versus ₹17,600 for the round trip — a clean saving of ₹8,800. The Ertiga SUV one-way is ₹12,000 and the Innova Crysta is ₹14,400, each exactly half the cost of a traditional return booking and the sensible choice for a one-direction cross-country transfer of this length.

The drive is a study in changing India. From Jaipur the route runs north on NH-48 across the Rajasthan and Haryana plains, past Shahpura and Kotputli, skirting the Delhi NCR fringe, and on toward Chandigarh — the clean, garden-planned city that is the natural halfway anchor at roughly 500 km and the best place for a proper meal and a leg-stretch. Beyond Chandigarh the road joins NH-3, the main Chandigarh–Manali artery, and begins the long climb into Himachal: through Kiratpur, past the sweeping Bilaspur reservoir and the new expressway tunnels, up to Mandi, the riverside temple town, and then along the turquoise Beas through the Pandoh Dam stretch and the apple-orchard Kullu Valley to Manali. Total drive time is 15–16 hours, which is exactly why we recommend a very early 4–5 AM departure — or an overnight-into-morning start — so you cross the plains while they are cool and empty and tackle the mountain ghats above Bilaspur in good daylight, reaching Manali by evening.

En-route stops turn this marathon into a manageable, memorable journey. Chandigarh is the essential mid-point break — the highway dhabas and restaurants around the city serve everything from Punjabi thalis to quick South Indian, and it is the last big city before the hills. Bilaspur, on the banks of the Gobind Sagar reservoir, is a scenic viewpoint stop where the water spreads wide against the Himachal foothills. Mandi, the "Varanasi of the Hills," is the ideal final major halt for lunch or evening chai beside its riverside temples before the last valley climb. Our drivers also know the cleaner dhabas around Kiratpur and the Beas viewpoints near Pandoh. Up to two on-route stops are included free; the Chandigarh meal plus Mandi break combination is the one almost every traveller chooses on this leg.

Our pickup reach covers all of Jaipur without extra charge — Jaipur International Airport (JAI) with flight tracking, Jaipur Railway Station and the Sindhi Camp bus stand, the MI Road and Bani Park hotel belt, the C-Scheme and Civil Lines areas, and doorstep pickup from any address in Malviya Nagar, Vaishali Nagar, or Mansarovar. In Manali we drop at any hotel along the Mall Road and Old Manali belt, the Hadimba Temple and Vashisht areas, the Aleo and Prini riverside resorts, the Solang Valley road properties, and any guesthouse in Naggar or Patlikuhl (no extra charge).

For a journey this long, vehicle comfort is not a luxury but a necessity. The Sedan (Swift Dzire or Toyota Etios) suits two or three passengers travelling light, but on 800 km most travellers upgrade. Families of four to six with holiday luggage should book the Ertiga SUV for boot space, third-row room, and a more planted feel on the long haul and the mountain ghats. For the most relaxed possible ride, premium comfort over sixteen hours, or groups of six to seven, the Innova Crysta is the top recommendation — its cabin space, torque, and stability make both the plains cruise and the Bilaspur–Mandi–Kullu climbs effortless. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers experienced on the full Jaipur–Chandigarh–Manali route. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way Himalayan transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Jaipur to Manali cost?", answer: "A one-way cab from Jaipur to Manali starts at ₹8,800 for a Sedan at ₹11/km over the 800 km route. Ertiga SUV costs ₹12,000 and Innova Crysta costs ₹14,400. Toll, parking and any state permits are extra at actual." },
      { question: "How long does Jaipur to Manali take by cab?", answer: "Jaipur to Manali is about 800 km and takes 15-16 hours by cab via Chandigarh, Bilaspur and Mandi on NH-48 and NH-3, including breaks. We recommend a very early 4-5 AM or overnight-into-morning start so you clear the plains while cool and tackle the mountain ghats in daylight." },
      { question: "Is a one-way cab cheaper than a round trip from Jaipur to Manali?", answer: "Yes. A one-way Sedan is ₹8,800 versus ₹17,600 for a round trip, saving you ₹8,800 because you do not pay for the 800 km empty return. This is ideal if you are flying out from Kullu-Bhuntar or continuing your Himachal tour." },
      { question: "Can I stop at Chandigarh and Mandi on the way?", answer: "Yes, up to 2 on-route stops are included free. Most travellers break for a proper meal at Chandigarh, the natural halfway point, pause at the scenic Bilaspur reservoir, and stop at Mandi for lunch or chai before the final valley climb to Manali." },
      { question: "Which vehicle is best for the long Jaipur to Manali drive?", answer: "For this 800 km two-region journey, the Innova Crysta is the top choice for its cabin space and stability over 16 hours and on the mountain ghats. Sedans suit 2-3 light travellers, while the Ertiga works well for families of 4-6 with luggage." },
      { question: "Do you offer airport pickup for Jaipur to Manali?", answer: "Yes, we pick up from Jaipur International Airport (JAI) with flight tracking, Jaipur Railway Station, the Sindhi Camp bus stand, or any hotel and address in the city, and drop at any hotel in Manali, Old Manali, Vashisht, or the Solang Valley road belt." }
    ]
  },

  "delhi-to-leh": {
    from: "Delhi",
    to: "Leh",
    distance: "1010 km",
    distanceNum: 1010,
    time: "2-day drive (with overnight halt)",
    highway: "NH-3 Manali-Leh Highway via Keylong & Sarchu",
    ...calcFares(1010),
    highlights: ["Epic 2-day Himalayan expedition via Manali, Keylong and Sarchu", "Crosses high passes including Baralacha La and Tanglang La", "SUV or tempo strongly recommended for high-altitude terrain"],
    popularStops: ["Manali", "Keylong", "Sarchu"],
    bestTime: "Mid-June to mid-September only, when the Manali-Leh Highway and its high passes are open; start very early each day",
    description: `The Delhi to Leh one-way cab is not an ordinary transfer — it is a full Himalayan expedition by road, a roughly 1,010 km journey from the plains of Delhi up to Leh, the high-desert capital of Ladakh perched at over 11,000 feet. At Triveni Cabs we run this legendary route for adventure travellers and bikers' support crews, photographers chasing the barren moonscapes of Ladakh, groups of friends ticking off a bucket-list road trip, and families who want the drama of the Manali–Leh Highway with the safety of an experienced high-altitude driver rather than a self-drive gamble. This is a two-day drive with a compulsory overnight halt, and it is one of the most spectacular road journeys on earth.

Because Delhi to Leh is about 1,010 km of long-distance and high-altitude running, it bills on actual distance and is priced for the expedition it is. A round trip would charge you for well over 2,000 km including the enormous empty return — so the one-way model saves you dramatically if you are flying back from Leh's Kushok Bakula Rimpochee Airport or continuing your Ladakh circuit onward to Nubra, Pangong, or Srinagar. Our one-way Sedan is ₹11,110 at ₹11/km, but for this terrain we strongly steer travellers to a higher vehicle: the Ertiga SUV is ₹15,150 and the Innova Crysta is ₹18,180. Toll, high-altitude permits, and driver mountain allowance for the overnight halt are additional — we quote everything upfront so there are no surprises on the roof of the world.

The drive breaks naturally into two epic days. Day one covers Delhi to Manali (roughly 540 km) on NH-44 and NH-3 through Chandigarh, Bilaspur, and Mandi, climbing from the plains into the Kullu Valley for an overnight rest and altitude preparation at Manali. Day two is the legendary Manali–Leh Highway itself — over the Atal Tunnel and up through the Lahaul valley to Keylong, the last real town, then across the high wilderness past Jispa and the Baralacha La pass to the windswept tented camp at Sarchu, and on across the Gata Loops, the Nakee La and Lachung La passes, and finally the mighty Tanglang La — one of the highest motorable passes in the world — before the long descent to Leh. Because the passes only clear of snow from around mid-June to mid-September, this route is strictly seasonal, and each day should start very early to reach shelter before the afternoon winds and to respect daylight at altitude.

En-route stops on this route are less about sightseeing and more about survival, acclimatisation, and awe — and every one is unforgettable. Manali is the essential overnight and acclimatisation halt before the high passes. Keylong, the administrative headquarters of Lahaul at around 10,000 feet, is the key fuel, food, and rest point on day two and often a second night's option for travellers taking it gently. Sarchu, a high tented-camp plateau on the Himachal–Ladakh border, is the classic overnight camp for those splitting the second leg, set amid utterly barren, magnificent mountains. Our drivers carry water and know exactly where the reliable dhabas and fuel points are on a road where they are few and far between. Acclimatisation stops are built in for safety, not charged as detours.

Our pickup reach covers all of Delhi NCR without extra charge — Indira Gandhi International Airport (all terminals) with flight tracking, New Delhi, Old Delhi, Hazrat Nizamuddin and Anand Vihar railway stations, and doorstep pickup from anywhere in South Delhi, Dwarka, Gurgaon, Noida, or Ghaziabad. In Leh we drop at any hotel or guesthouse in Leh town, the Changspa and Fort Road belt, or the surrounding Shey and Choglamsar areas (no extra charge).

Vehicle choice on the Manali–Leh Highway is a genuine safety decision, not just a comfort one. A Sedan can technically be booked, but we strongly recommend against it for this terrain. The Ertiga SUV is the practical minimum for the high passes, offering ground clearance and stability on rough, unpaved stretches. For the strongest, safest, most comfortable expedition — and the one the vast majority of our Leh travellers choose — the Innova Crysta is the top recommendation, with the torque, clearance, and rugged reliability to handle Baralacha La, the Gata Loops, and Tanglang La with confidence. For larger groups we can also arrange a Tempo Traveller. Every vehicle is well maintained, FASTag-enabled, and driven by background-verified drivers with real high-altitude experience who understand acclimatisation and mountain safety. Call or WhatsApp 7668570551 for a confirmed upfront expedition fare — no surge, no hidden kilometres, and never a return charge on your one-way Ladakh adventure.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Leh cost?", answer: "A one-way cab from Delhi to Leh starts at ₹11,110 for a Sedan at ₹11/km over the ~1,010 km route, but for this high-altitude terrain we strongly recommend an SUV: the Ertiga is ₹15,150 and the Innova Crysta is ₹18,180. Toll, permits and driver mountain allowance for the overnight halt are extra at actual." },
      { question: "How long does the Delhi to Leh cab journey take?", answer: "Delhi to Leh is about 1,010 km and is a 2-day drive with a compulsory overnight halt, typically Delhi to Manali on day one and the Manali-Leh Highway via Keylong and Sarchu on day two. Each day should start very early to cross the high passes safely in daylight." },
      { question: "When is the best time to travel Delhi to Leh by road?", answer: "The Manali-Leh Highway is only open from roughly mid-June to mid-September, when the high passes like Baralacha La and Tanglang La are clear of snow. Outside this window the route is closed and Leh is reachable only by air." },
      { question: "Which vehicle is best for a Delhi to Leh road trip?", answer: "We strongly recommend an SUV for the Manali-Leh Highway. The Ertiga is the practical minimum for ground clearance on rough stretches, and the Innova Crysta is the top choice for the high passes. A Tempo Traveller can be arranged for larger groups. We advise against a Sedan on this terrain." },
      { question: "Is a one-way cab cheaper than a round trip from Delhi to Leh?", answer: "Yes, significantly. A one-way booking saves you the enormous empty return of over 1,000 km, which is ideal if you are flying back from Leh airport or continuing your Ladakh circuit to Nubra, Pangong or Srinagar." },
      { question: "Do you handle acclimatisation and safety on the Delhi to Leh route?", answer: "Yes. The itinerary builds in an overnight halt at Manali and rest points at Keylong and Sarchu for acclimatisation, and our drivers have real high-altitude experience, carry water, and know the limited fuel and food points on this remote high-altitude road." }
    ]
  },

  "jim-corbett-to-delhi": {
    from: "Jim Corbett",
    to: "Delhi",
    distance: "250 km",
    distanceNum: 250,
    time: "5-6 hours",
    highway: "NH-9 via Moradabad",
    ...calcFares(250),
    highlights: ["Via Moradabad and Gajraula on NH-9", "5-6 hours jungle-to-capital transfer", "Direct drop at Delhi airport, stations or any NCR address"],
    popularStops: ["Moradabad", "Gajraula"],
    bestTime: "Post-checkout morning departure around 9-10 AM to reach Delhi by afternoon, or an evening start after the last safari",
    description: `The Jim Corbett to Delhi one-way cab is the natural return leg for anyone wrapping up a tiger-country holiday — a 250 km drive from the forest lodges and safari gates of Jim Corbett National Park back down to Delhi, the national capital. At Triveni Cabs we run this corridor for families heading home after a Corbett wildlife break, couples finishing a weekend at a Ramnagar or Dhikuli riverside resort, corporate groups returning from an offsite, and above all travellers with a flight or train to catch from Delhi who cannot risk the uncertainty of a shared cab or a bus change at Moradabad.

Because Jim Corbett to Delhi is 250 km, this leg bills at our 300 km minimum fare — and the one-way model is still far cheaper than a round trip. A round-trip cab would charge you for 500 km of running, including a 250 km empty return you will never use once you are back in Delhi. Our one-way Sedan from Jim Corbett to Delhi is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, versus ₹6,600 for the round trip — a clean saving of ₹3,300. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400, each roughly half the cost of a traditional return booking and the obvious choice for a one-direction transfer home.

The drive is a smooth, well-paved run from the Kumaon foothills back to the plains. The route leaves the Corbett belt around Ramnagar and heads south-west, joining NH-9 and running through the flat, fast farmland of western Uttar Pradesh via Kashipur toward Moradabad — the "Brass City," the natural mid-point at roughly 90 km and the best place for a proper lunch break. From Moradabad the highway continues past Gajraula, a well-known dhaba and refreshment halt, and on across the Ganga to Hapur before merging into the Delhi-bound expressway network. Total drive time is a comfortable 5–6 hours, which is why we recommend a relaxed post-checkout departure around 9–10 AM to reach Delhi by mid-afternoon — or, for those on a late flight, an evening start straight after the final morning safari, with the road running easily after dark on this stretch.

En-route stops keep the return journey easy. Moradabad is the standout break — beyond a good highway lunch, it is famous for its brass and metalware handicrafts if you want a last bit of shopping. Gajraula is the classic mid-highway dhaba stop for chai, parathas, and clean washrooms, a fixture on every Delhi–Kumaon drive. Our drivers also know the reliable food courts along the newer expressway stretch nearer Delhi. Up to two on-route stops are included free; the Moradabad lunch plus a Gajraula tea stop is the combination most travellers choose on the way down.

Our pickup reach covers the entire Corbett belt without extra charge — the safari lodges and resorts around Dhikuli, Garjia, and Bijrani, doorstep pickup from any hotel in Ramnagar, and the Kosi River resort strip. In Delhi we drop precisely where you need to be: Indira Gandhi International Airport (all terminals) with flight-time planning, New Delhi, Old Delhi, Hazrat Nizamuddin and Anand Vihar railway stations, and any address across South Delhi, Dwarka, Gurgaon, Noida, or Ghaziabad (no extra charge). This precise, on-time airport and station drop is exactly why most travellers book a private one-way cab for the way home rather than gamble on a bus.

For vehicle choice on this easy highway leg, the priority is luggage space and a relaxed ride after a few days in the jungle. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers with light bags. Families of four to six returning with holiday luggage should book the Ertiga SUV for its boot space and third-row comfort. For the most relaxed ride, extra room, or groups of six to seven — especially with an airport connection to make — the Innova Crysta is the top recommendation. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Corbett–Moradabad–Delhi road daily and plan timing around your flight or train. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer back to Delhi.`,
    faqs: [
      { question: "How much does a one-way cab from Jim Corbett to Delhi cost?", answer: "A one-way cab from Jim Corbett to Delhi starts at ₹3,300 for a Sedan, calculated from the 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Jim Corbett to Delhi take by cab?", answer: "Jim Corbett to Delhi is about 250 km and takes 5-6 hours by cab via Moradabad and Gajraula on NH-9, including a break. A 9-10 AM start gets you to Delhi by mid-afternoon, and an evening start after the last safari works well too." },
      { question: "Can you drop me at Delhi airport from Jim Corbett?", answer: "Yes, we drop directly at Indira Gandhi International Airport (all terminals) with timing planned around your flight, as well as at any Delhi railway station or address across South Delhi, Gurgaon, Noida, Dwarka and Ghaziabad. This precise airport drop is why most travellers book a private one-way cab home." },
      { question: "Is a one-way cab cheaper than a round trip from Jim Corbett to Delhi?", answer: "Yes. A one-way Sedan is ₹3,300 versus ₹6,600 for a round trip, saving you ₹3,300 because you do not pay for the 250 km empty return once you are back in Delhi." },
      { question: "Can I stop at Moradabad on the way to Delhi?", answer: "Yes, up to 2 on-route stops are included free. Most travellers break for lunch at Moradabad, the Brass City, and pause for chai at a Gajraula dhaba, the classic mid-highway halt on the Corbett-Delhi road." },
      { question: "Which vehicle is best for Jim Corbett to Delhi?", answer: "For this easy 250 km highway leg, the Innova Crysta is the most relaxed with extra room, ideal if you have an airport connection. Sedans suit 2-3 light travellers, while the Ertiga works well for families of 4-6 returning with holiday luggage." }
    ]
  },

  "dharamshala-to-manali": {
    from: "Dharamshala",
    to: "Manali",
    distance: "230 km",
    distanceNum: 230,
    time: "6-7 hours",
    highway: "NH-154 & NH-3 via Mandi and Kullu",
    ...calcFares(230),
    highlights: ["Via Mandi and Kullu on NH-154 and NH-3", "6-7 hours hill-to-hill Himachal transfer", "Dhauladhar foothills to the Valley of the Gods"],
    popularStops: ["Mandi", "Kullu"],
    bestTime: "Morning 7-8 AM departure to clear the Kangra and Mandi ghats in daylight and reach Manali by afternoon",
    description: `The Dharamshala to Manali one-way cab is the classic hill-to-hill hop at the heart of every Himachal itinerary — a 230 km drive that links Dharamshala and McLeod Ganj, the Dhauladhar home of Tibetan culture and the Dalai Lama, with Manali, the alpine Valley of the Gods. At Triveni Cabs we run this leg for tourists chaining the two most-loved Himachal hill stations, honeymooners on a Dharamshala–Manali circuit, backpackers moving between the monasteries of McLeod Ganj and the cafés of Old Manali, and families who want a comfortable private car for the mountain roads instead of a slow, multi-change bus journey.

Because Dharamshala to Manali is 230 km, this leg bills at our 300 km minimum fare — and the one-way model is still far cheaper than a round trip. A round-trip cab would charge you for 460 km of running, including a 230 km empty return you will never use if you are continuing your Himachal tour onward to Shimla, Kasol, or back toward Chandigarh airport. Our one-way Sedan from Dharamshala to Manali is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, versus ₹6,600 for the round trip — a saving of ₹3,300. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400, each roughly half the cost of a traditional return and the sensible choice when Manali is the next stop rather than a there-and-back.

The drive is a beautiful traverse across the Himachal interior. The route descends from Dharamshala through the Kangra Valley, running past tea gardens and the historic Kangra town, then joins the road toward Mandi through the Jogindernagar and Joginder Nagar belt — a stretch of pine forest, hydel channels, and small hill towns. Mandi, the riverside "Varanasi of the Hills" at roughly the midpoint, is where the road meets NH-3, the main Chandigarh–Manali artery, and where almost everyone breaks for lunch. From Mandi the drive follows the turquoise Beas north through the dramatic Pandoh Dam stretch and into the apple-orchard Kullu Valley, with the final run up past Patlikuhl and Naggar to Manali. Total drive time is 6–7 hours with stops, which is why we recommend a 7–8 AM start: you clear the Kangra and Mandi ghat sections in good light and reach Manali comfortably by afternoon.

En-route stops make this transfer a pleasure. Mandi is the natural major halt — its riverside Bhutnath and Triloknath temples and its bustling bazaar make it the ideal lunch stop, and it marks the psychological halfway point of the drive. Kullu, the valley capital, is the place for a shawl-and-handicraft break, a riverside chai, and a look at the Beas rafting stretch, and is the gateway to the Bijli Mahadev temple. Our drivers also know the cleaner dhabas around Jogindernagar and the Pandoh viewpoints where the Beas glows electric blue. Up to two on-route stops are included free; the Mandi lunch plus Kullu break combination is the one almost every traveller chooses.

Our pickup reach covers all of Dharamshala without extra charge — the McLeod Ganj hotel belt, the Dharamkot and Bhagsu guesthouses, the main Dharamshala town and Kotwali Bazaar, the HPCA cricket-stadium area, and doorstep pickup from Naddi, Sidhbari, or any address in the Kangra valley below. In Manali we drop at any hotel along the Mall Road and Old Manali belt, the Hadimba Temple and Vashisht areas, the Aleo and Prini riverside resorts, the Solang Valley road properties, and any guesthouse in Naggar or Patlikuhl (no extra charge).

For vehicle choice on this winding interior route, comfort and a planted feel on the ghats matter. The Sedan (Swift Dzire or Toyota Etios) suits two or three passengers travelling light. Families of four to six with hill-holiday luggage should book the Ertiga SUV for boot space, third-row room, and stability on the curves. For the most relaxed mountain ride, premium comfort, or groups of six to seven, the Innova Crysta is the most-requested upgrade — its torque and stability make the Kangra, Mandi, and Kullu switchbacks effortless. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who know the Dharamshala–Mandi–Manali road intimately. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way Himachal hill transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Dharamshala to Manali cost?", answer: "A one-way cab from Dharamshala to Manali starts at ₹3,300 for a Sedan, calculated from the 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Dharamshala to Manali take by cab?", answer: "Dharamshala to Manali is about 230 km and takes 6-7 hours by cab via Mandi and Kullu on NH-154 and NH-3, including a lunch break. We recommend a 7-8 AM start to clear the Kangra and Mandi ghats in daylight and reach Manali by afternoon." },
      { question: "Can I stop at Mandi and Kullu on the way?", answer: "Yes, up to 2 on-route stops are included free. Most travellers break for lunch at Mandi, the riverside temple town at the midpoint, and stop in Kullu for shawls, a riverside chai, and a look at the Beas rafting stretch before the final climb to Manali." },
      { question: "Is it better to take a cab or bus from Dharamshala to Manali?", answer: "A one-way cab offers door-to-door convenience, free Mandi and Kullu stops, and no slow bus changes through Mandi. For families and groups it is far more comfortable and flexible on this winding Himachal interior route." },
      { question: "Is a one-way cab cheaper than a round trip from Dharamshala to Manali?", answer: "Yes. A one-way Sedan is ₹3,300 versus ₹6,600 for a round trip, saving you ₹3,300 because you do not pay for the 230 km empty return, ideal if Manali is the next stop on your Himachal tour." },
      { question: "Which vehicle is best for the Dharamshala to Manali drive?", answer: "For this 230 km winding hill route, the Innova Crysta is the most requested for its torque and stability on the Kangra, Mandi and Kullu ghats. Sedans suit 2-3 light travellers, while the Ertiga works well for families of 4-6 with hill-holiday luggage." }
    ]
  },

  "kasol-to-chandigarh": {
    from: "Kasol",
    to: "Chandigarh",
    distance: "280 km",
    distanceNum: 280,
    time: "6-7 hours",
    highway: "NH-3 via Bhuntar, Mandi and Bilaspur",
    ...calcFares(280),
    highlights: ["Via Bhuntar, Mandi and Bilaspur on NH-3", "6-7 hours Parvati Valley to city transfer", "Direct drop at Chandigarh airport, station or Tricity address"],
    popularStops: ["Bhuntar", "Mandi", "Bilaspur"],
    bestTime: "Morning 7-8 AM departure to clear the Parvati and Mandi ghats early and reach Chandigarh by evening",
    description: `The Kasol to Chandigarh one-way cab is the essential exit route from the Parvati Valley — a 280 km drive from Kasol, the riverside backpacker haven famed for its Israeli cafés, pine forests, and Malana-Kheerganga treks, back down to Chandigarh, the garden-city gateway of North India. At Triveni Cabs we run this corridor for backpackers and trekkers heading home after a Parvati Valley break, groups of friends wrapping up a Kasol–Tosh–Kheerganga trip, and above all travellers with a flight from Chandigarh airport or a train who need reliable, on-time transport rather than an uncertain shared taxi from Bhuntar or an overnight bus.

Because Kasol to Chandigarh is 280 km, this leg bills at our 300 km minimum fare — and the one-way model is still far cheaper than a round trip. A round-trip cab would charge you for 560 km of running, including a 280 km empty return you will never use once you are back in the city. Our one-way Sedan from Kasol to Chandigarh is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, versus ₹6,600 for the round trip — a saving of ₹3,300. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400, each roughly half the cost of a traditional return and the obvious choice for a one-direction transfer out of the mountains.

The drive is a steady descent from the high Parvati Valley to the plains. The route leaves Kasol and follows the Parvati River down to Bhuntar, the valley junction and airport town at roughly 30 km where the Parvati meets the Beas — the first natural stop. From Bhuntar the road joins NH-3, the main Manali–Chandigarh artery, and runs south through Kullu and along the turquoise Beas through the dramatic Pandoh Dam stretch to Mandi, the riverside temple town and the ideal lunch halt at the midpoint. Beyond Mandi the highway descends past the sweeping Bilaspur reservoir and the new expressway tunnels, through Kiratpur, and out onto the Punjab plains to Chandigarh. Total drive time is 6–7 hours with stops, which is why we recommend a 7–8 AM start: you clear the winding Parvati and Mandi ghat sections early and reach Chandigarh comfortably by evening, in good time for a flight or a night's rest.

En-route stops make the descent easy. Bhuntar is the first practical halt for fuel and a quick bite, and the point where mobile signal returns for most travellers. Mandi, the "Varanasi of the Hills," is the natural major lunch stop beside its riverside temples and bustling bazaar. Bilaspur, on the banks of the Gobind Sagar reservoir, is a scenic viewpoint pause where the water spreads wide against the foothills. Our drivers also know the cleaner dhabas around Sundernagar and the Pandoh viewpoints where the Beas glows electric blue. Up to two on-route stops are included free; the Mandi lunch plus a Bhuntar or Bilaspur break is the combination most travellers choose.

Our pickup reach covers the whole Parvati Valley without extra charge — doorstep pickup from any guesthouse or café in Kasol, the Chalal and Katagla belt, nearby Manikaran, and the Bhuntar road properties. In Chandigarh we drop precisely where you need to be: Chandigarh International Airport (IXC) with flight-time planning, Chandigarh Railway Station and the ISBT bus stands, any sector address across the city, and the wider Tricity of Mohali and Panchkula (no extra charge). This precise, on-time airport and station drop is exactly why most trekkers book a private one-way cab out of Kasol rather than gamble on connecting shared taxis.

For vehicle choice on this winding downhill route, comfort and reliable brakes matter. The Sedan (Swift Dzire or Toyota Etios) suits two or three backpackers travelling light. Groups of four to six with trekking gear should book the Ertiga SUV for its boot space and a more planted feel on the ghats. For the most relaxed ride, extra luggage room, or groups of six to seven — especially with an airport connection to make — the Innova Crysta is the top recommendation, its torque and stability making the Parvati and Mandi switchbacks effortless. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Kasol–Bhuntar–Mandi–Chandigarh road regularly and plan timing around your flight or train. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer to Chandigarh.`,
    faqs: [
      { question: "How much does a one-way cab from Kasol to Chandigarh cost?", answer: "A one-way cab from Kasol to Chandigarh starts at ₹3,300 for a Sedan, calculated from the 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Kasol to Chandigarh take by cab?", answer: "Kasol to Chandigarh is about 280 km and takes 6-7 hours by cab via Bhuntar, Mandi and Bilaspur on NH-3, including a lunch break. We recommend a 7-8 AM start to clear the Parvati and Mandi ghats early and reach Chandigarh by evening." },
      { question: "Can you drop me at Chandigarh airport from Kasol?", answer: "Yes, we drop directly at Chandigarh International Airport (IXC) with timing planned around your flight, as well as at Chandigarh Railway Station, the ISBT, any city sector, or anywhere in the Mohali-Panchkula Tricity. This on-time airport drop is why most trekkers book a private one-way cab out of Kasol." },
      { question: "Can I stop at Bhuntar, Mandi and Bilaspur on the way?", answer: "Yes, up to 2 on-route stops are included free. Most travellers stop at Bhuntar for fuel, break for lunch at Mandi at the midpoint, and pause at the scenic Bilaspur reservoir on the descent to Chandigarh." },
      { question: "Is a one-way cab cheaper than a round trip from Kasol to Chandigarh?", answer: "Yes. A one-way Sedan is ₹3,300 versus ₹6,600 for a round trip, saving you ₹3,300 because you do not pay for the 280 km empty return once you are back in the city." },
      { question: "Which vehicle is best for Kasol to Chandigarh?", answer: "For this 280 km winding downhill route, the Innova Crysta is the most relaxed with room for luggage, ideal if you have an airport connection. Sedans suit 2-3 backpackers travelling light, while the Ertiga works well for groups of 4-6 with trekking gear." }
    ]
  },

  "mussoorie-to-rishikesh": {
    from: "Mussoorie",
    to: "Rishikesh",
    distance: "78 km",
    distanceNum: 78,
    time: "2-2.5 hours",
    highway: "Via Dehradun",
    ...calcFares(78),
    highlights: ["Via Dehradun on a scenic downhill route", "2-2.5 hours Queen of Hills to Yoga Capital transfer", "Links a hill-station break with the Ganga and rafting at Rishikesh"],
    popularStops: ["Dehradun"],
    bestTime: "Late-morning 9-10 AM departure to reach Rishikesh in time for the evening Ganga Aarti at Triveni Ghat",
    description: `The Mussoorie to Rishikesh one-way cab is the perfect bridge between two very different Uttarakhand experiences — a short 78 km drive from Mussoorie, the colonial Queen of Hills, down to Rishikesh, the Yoga Capital of the World on the banks of the Ganga. At Triveni Cabs we run this leg for travellers chaining a Mussoorie hill break with the temples, ashrams, and river rafting of Rishikesh, honeymooners and families moving from mountain views to the Ganga, spiritual travellers heading for Rishikesh's aartis and yoga retreats, and anyone who wants a quick, comfortable downhill transfer instead of two separate bus rides through Dehradun.

Because Mussoorie to Rishikesh is only 78 km, this leg bills at our 300 km minimum fare — a point we always state honestly. On short hill transfers like this, the private-cab economics work differently from long routes: you are paying for a dedicated door-to-door car on a winding descent, not for distance alone. Our one-way Sedan from Mussoorie to Rishikesh is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, and a round trip would be ₹6,600 — so even on a short leg, one-way saves you the empty return of a car you do not need once you are settled by the Ganga. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400. For a short, scenic, hassle-free transfer with luggage and no bus changes, most travellers find the convenience well worth it.

The drive is a lovely, quick descent from ridge to river. The route drops from Mussoorie's Mall Road and Library area down the winding hillside to Dehradun, the Doon Valley capital at roughly 35 km — the natural (and only major) halt on this leg, and a good place for a coffee, a bite, or a quick errand. From Dehradun the road runs south-east through the Doon Valley, past the forested Rajaji landscape, to Rishikesh, arriving near the Ram Jhula and Laxman Jhula belt and the ghats along the Ganga. Total drive time is a comfortable 2–2.5 hours, which is why we suggest a late-morning 9–10 AM departure: you enjoy the Mussoorie descent and Doon Valley in daylight and reach Rishikesh with the whole afternoon free — in good time to settle in and catch the evening Ganga Aarti at Triveni Ghat or Parmarth Niketan.

En-route, Dehradun is the one meaningful stop and a pleasant one. It is the capital of Uttarakhand and the halfway point of the drive, ideal for a coffee at one of its cafés, a quick meal, or a stop at Robber's Cave or the Forest Research Institute if you want to break the journey with a little sightseeing. Our drivers also know the cleaner roadside spots on the Dehradun–Rishikesh stretch for chai. Up to two on-route stops are included free; a simple Dehradun coffee-and-comfort break is what most travellers choose on this short leg.

Our pickup reach covers all of Mussoorie without extra charge — the Mall Road and Library area hotels, the Camel's Back Road and Landour belt, the Picture Palace area, and doorstep pickup from any resort in the Kempty Falls or Barlowganj direction. In Rishikesh we drop at any hotel or ashram in the Ram Jhula and Laxman Jhula belt, the Tapovan and Swarg Ashram areas, the Triveni Ghat and main town, and the rafting-camp road toward Shivpuri (no extra charge).

For vehicle choice on this short winding descent, comfort and safe brakes on the downhill matter more than distance. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers with light bags. Families of four to six with luggage should book the Ertiga SUV for its boot space and a planted feel on the hill curves. For extra room, premium comfort, or groups of six to seven, the Innova Crysta is the top choice. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who know the Mussoorie–Dehradun–Rishikesh road well. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way transfer to the Ganga.`,
    faqs: [
      { question: "How much does a cab from Mussoorie to Rishikesh cost?", answer: "A one-way cab from Mussoorie to Rishikesh is ₹3,300 for a Sedan. Because the route is only 78 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Mussoorie to Rishikesh take by cab?", answer: "Mussoorie to Rishikesh is about 78 km and takes 2-2.5 hours by cab via Dehradun on a scenic downhill route. A 9-10 AM start gets you to Rishikesh with the afternoon free, in time for the evening Ganga Aarti." },
      { question: "Why is the Mussoorie to Rishikesh fare based on 300 km when it is only 78 km?", answer: "Short hill transfers under 300 km bill at our 300 km minimum fare because you are booking a dedicated door-to-door private car on a winding descent, not paying by distance alone. Even so, one-way at ₹3,300 saves you the empty return of a round trip at ₹6,600." },
      { question: "Can I stop at Dehradun on the way to Rishikesh?", answer: "Yes, up to 2 on-route stops are included free, and Dehradun is the natural halfway halt. Most travellers stop for a coffee or meal, and some pause at Robber's Cave or the Forest Research Institute before continuing to Rishikesh." },
      { question: "Can you pick up from any hotel in Mussoorie?", answer: "Yes, we offer doorstep pickup from the Mall Road, Library, Camel's Back Road, Landour and Picture Palace areas, and any resort toward Kempty Falls, dropping at any hotel or ashram in the Ram Jhula, Laxman Jhula, Tapovan or Triveni Ghat belt of Rishikesh." },
      { question: "Which vehicle is best for Mussoorie to Rishikesh?", answer: "For this short winding descent, the Sedan is perfect for 2-3 light travellers. Families of 4-6 with luggage should choose the Ertiga for boot space, while the Innova Crysta suits groups of 6-7 wanting extra room and premium comfort." }
    ]
  },

  "kasol-to-manali": {
    from: "Kasol",
    to: "Manali",
    distance: "75 km",
    distanceNum: 75,
    time: "2.5-3 hours",
    highway: "Via Bhuntar & Kullu on NH-3",
    ...calcFares(75),
    highlights: ["Via Bhuntar and Kullu on NH-3", "2.5-3 hours Parvati Valley to Manali transfer", "Links the backpacker's Parvati Valley with alpine Manali"],
    popularStops: ["Bhuntar", "Kullu"],
    bestTime: "Morning 9-10 AM departure to enjoy the Beas Valley drive in daylight and reach Manali by afternoon",
    description: `The Kasol to Manali one-way cab is the short, scenic hop that connects the two hearts of Himachal's traveller scene — a 75 km drive from Kasol, the riverside Parvati Valley haven of cafés, pine forests, and Kheerganga treks, up to Manali, the alpine Valley of the Gods and gateway to Solang and Rohtang. At Triveni Cabs we run this leg for backpackers and groups of friends extending a Parvati Valley trip into Manali, couples moving from Kasol's laid-back riverside vibe to Manali's snow and adventure, and travellers who want a quick private transfer with their luggage instead of changing shared taxis at Bhuntar.

Because Kasol to Manali is only 75 km, this leg bills at our 300 km minimum fare — a point we always state honestly. On a short hill transfer like this you are paying for a dedicated door-to-door car through winding valley roads, not for distance. Our one-way Sedan from Kasol to Manali is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, and a round trip would be ₹6,600 — so one-way still saves you the empty return of a car you do not need once you reach Manali. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400. For a quick, comfortable, no-transfers ride with backpacks, most travellers find the private cab well worth it over connecting shared jeeps.

The drive is a pretty riverside run up the Beas Valley. The route leaves Kasol and follows the Parvati River down to Bhuntar, the valley junction and airport town at roughly 30 km where the Parvati meets the Beas — the first natural stop and where mobile signal returns. From Bhuntar the road joins NH-3, the main Manali highway, and heads north through Kullu, the valley capital, following the turquoise Beas past apple orchards, Patlikuhl, and Naggar up to Manali. Total drive time is a comfortable 2.5–3 hours, which is why we suggest a 9–10 AM departure: you enjoy the Beas Valley scenery in daylight and reach Manali by afternoon with time to settle in and explore the Mall Road or Old Manali.

En-route stops make the short hop enjoyable. Bhuntar is the practical first halt for fuel and a quick bite at the confluence of the Parvati and Beas. Kullu, the valley capital, is the place for a shawl-and-handicraft break, a riverside chai, and a look at the Beas rafting stretch, and is the gateway to the Bijli Mahadev temple. Our drivers also know the cleaner dhabas around Katrain and the riverside spots near Naggar. Up to two on-route stops are included free; a Bhuntar fuel-and-snack stop plus a Kullu break is what most travellers choose.

Our pickup reach covers the whole Parvati Valley without extra charge — doorstep pickup from any guesthouse or café in Kasol, the Chalal and Katagla belt, nearby Manikaran, and the Bhuntar road properties. In Manali we drop at any hotel along the Mall Road and Old Manali belt, the Hadimba Temple and Vashisht areas, the Aleo and Prini riverside resorts, the Solang Valley road properties, and any guesthouse in Naggar or Patlikuhl (no extra charge).

For vehicle choice on this short valley route, comfort with your gear is the priority. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three backpackers travelling light. Groups of four to six with trekking gear should book the Ertiga SUV for boot space and a planted feel on the curves. For extra room, premium comfort, or groups of six to seven, the Innova Crysta is the top choice. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who know the Kasol–Bhuntar–Kullu–Manali road well. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way Parvati-to-Manali transfer.`,
    faqs: [
      { question: "How much does a cab from Kasol to Manali cost?", answer: "A one-way cab from Kasol to Manali is ₹3,300 for a Sedan. Because the route is only 75 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Kasol to Manali take by cab?", answer: "Kasol to Manali is about 75 km and takes 2.5-3 hours by cab via Bhuntar and Kullu on NH-3. A 9-10 AM start lets you enjoy the Beas Valley scenery in daylight and reach Manali by afternoon." },
      { question: "Why is the Kasol to Manali fare based on 300 km when it is only 75 km?", answer: "Short hill transfers under 300 km bill at our 300 km minimum fare because you are booking a dedicated private car through winding valley roads, not paying by distance alone. Even so, one-way at ₹3,300 saves you the empty return of a round trip at ₹6,600." },
      { question: "Can I stop at Bhuntar and Kullu on the way to Manali?", answer: "Yes, up to 2 on-route stops are included free. Most travellers stop at Bhuntar for fuel and a snack at the Parvati-Beas confluence, and pause in Kullu for shawls, a riverside chai, and a look at the rafting stretch." },
      { question: "Can you pick up from any guesthouse in Kasol?", answer: "Yes, we offer doorstep pickup from any guesthouse or café in Kasol, the Chalal and Katagla belt, and nearby Manikaran, dropping at any hotel in Manali, Old Manali, Vashisht, or the Solang Valley road belt." },
      { question: "Which vehicle is best for Kasol to Manali?", answer: "For this short valley route, the Sedan is perfect for 2-3 backpackers travelling light. Groups of 4-6 with trekking gear should choose the Ertiga for boot space, while the Innova Crysta suits groups of 6-7 wanting extra room and comfort." }
    ]
  },

  "delhi-to-meerut": {
    from: "Delhi",
    to: "Meerut",
    distance: "70 km",
    distanceNum: 70,
    time: "1.5-2 hours",
    highway: "Delhi-Meerut Expressway (NH-34)",
    ...calcFares(70),
    highlights: ["Via the fast Delhi-Meerut Expressway (NH-34)", "1.5-2 hours city-to-city transfer", "Doorstep pickup from anywhere in Delhi NCR"],
    popularStops: [],
    bestTime: "Avoid the 9-11 AM and 6-8 PM peaks; a mid-morning or early-afternoon departure clears the expressway fastest",
    description: `The Delhi to Meerut one-way cab is the everyday city-to-city transfer that the modern Delhi-Meerut Expressway has made faster than ever — a short 70 km run from Delhi, the national capital, to Meerut, the historic western-UP city known for its 1857-uprising heritage, sports-goods industry, and busy commercial markets. At Triveni Cabs we run this corridor for business travellers commuting between the two cities, families visiting relatives, wedding and event guests, students and professionals relocating, and anyone who wants a clean, private, door-to-door car instead of a crowded shared cab or a bus from Kashmere Gate.

Because Delhi to Meerut is only 70 km, this leg bills at our 300 km minimum fare — a point we always state honestly. On a short intercity hop like this you are paying for a dedicated, on-time private car picked up from your doorstep, not for distance. Our one-way Sedan from Delhi to Meerut is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, and a round trip would be ₹6,600 — so one-way still saves you the empty return of a car you do not need once you reach Meerut. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400. For a punctual, comfortable, no-crowds transfer — especially with luggage or for a business meeting — most travellers find the private cab well worth it.

The drive itself is quick and modern. The route leaves Delhi and joins the Delhi-Meerut Expressway (NH-34), a wide access-controlled highway that has cut the journey to well under two hours in normal traffic — from the Akshardham and east-Delhi entry points, the expressway runs virtually non-stop past Dasna and into Meerut. There are no major sightseeing halts on this short, functional route; the appeal is speed and comfort. Total drive time is a comfortable 1.5–2 hours outside peak hours. Because this is a busy commuter corridor, we recommend avoiding the 9–11 AM and 6–8 PM rush windows — a mid-morning or early-afternoon departure clears the expressway fastest, though our drivers know the Delhi entry points and timings to keep any trip smooth.

While there are no scenic stops on the expressway, our drivers know the clean, reliable food courts and fuel points along the route if you need a quick break, and can adjust pickup timing to dodge the worst of the Delhi traffic. Up to two on-route stops are included free should you need them. For most travellers, though, this is a straight-through run — the whole point of the expressway is to get you from door to door quickly.

Our pickup reach covers the entire Delhi NCR without extra charge — Indira Gandhi International Airport (all terminals) with flight tracking, New Delhi, Old Delhi, Hazrat Nizamuddin and Anand Vihar railway stations, and doorstep pickup from anywhere in South Delhi, East Delhi, Dwarka, Gurgaon, Noida, or Ghaziabad. In Meerut we drop at any address across the city — the Meerut Cantonment, the Sadar Bazaar and Abu Lane market areas, the Modipuram and Pallavpuram belt, the university and medical-college areas, and any residential colony or hotel (no extra charge).

For vehicle choice on this short expressway run, comfort and space are the main considerations. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers with light luggage — the most popular pick for a business trip. Families of four to six with luggage should book the Ertiga SUV for its boot space and third-row room. For extra comfort, event travel, or groups of six to seven, the Innova Crysta is the top choice. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who run the Delhi–Meerut Expressway daily and plan timing around the traffic and your schedule. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way Delhi to Meerut transfer.`,
    faqs: [
      { question: "How much does a cab from Delhi to Meerut cost?", answer: "A one-way cab from Delhi to Meerut is ₹3,300 for a Sedan. Because the route is only 70 km, it bills at our 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Delhi to Meerut take by cab?", answer: "Delhi to Meerut is about 70 km and takes 1.5-2 hours by cab via the Delhi-Meerut Expressway (NH-34) outside peak hours. We recommend avoiding the 9-11 AM and 6-8 PM rush windows so the expressway clears fastest." },
      { question: "Why is the Delhi to Meerut fare based on 300 km when it is only 70 km?", answer: "Short intercity trips under 300 km bill at our 300 km minimum fare because you are booking a dedicated, on-time private car picked up from your doorstep, not paying by distance alone. Even so, one-way at ₹3,300 saves you the empty return of a round trip at ₹6,600." },
      { question: "Do you offer doorstep pickup across Delhi NCR for Meerut?", answer: "Yes, we pick up from Delhi airport (all terminals) with flight tracking, any Delhi railway station, and any address across South Delhi, East Delhi, Dwarka, Gurgaon, Noida and Ghaziabad, dropping anywhere in Meerut including the Cantonment, Sadar Bazaar and Modipuram areas." },
      { question: "Is a one-way cab cheaper than a round trip from Delhi to Meerut?", answer: "Yes. A one-way Sedan is ₹3,300 versus ₹6,600 for a round trip, saving you the empty return of a car you do not need once you reach Meerut. It is ideal for a one-way business trip or relocation." },
      { question: "Which vehicle is best for Delhi to Meerut?", answer: "For this short expressway run, the Sedan is the most popular pick for 2-3 passengers on a business trip. Families of 4-6 with luggage should choose the Ertiga for boot space, while the Innova Crysta suits groups of 6-7 or event travel." }
    ]
  },
"shimla-to-manali": {
    from: "Shimla",
    to: "Manali",
    distance: "250 km",
    distanceNum: 250,
    time: "7-8 hours",
    highway: "NH-3 via Mandi",
    ...calcFares(250),
    highlights: ["Via NH-3 through Mandi and Kullu Valley", "7-8 hours scenic Himalayan drive", "Queen of Hills to the Valley of Gods transfer"],
    popularStops: ["Mandi", "Pandoh", "Kullu"],
    bestTime: "Early morning 6-7 AM departure to clear the mountain ghats in daylight and reach Manali by evening",
    description: `The Shimla to Manali one-way cab is one of the most loved hill-to-hill transfers in Himachal Pradesh — a 250 km drive that links the colonial charm of Shimla, the Queen of Hills, with the alpine beauty of Manali, the Valley of the Gods. At Triveni Cabs we run this corridor for honeymooners chaining the classic Shimla–Manali honeymoon circuit, families on a Himachal holiday, adventure travellers heading for Solang Valley and Rohtang, and tourists who simply want a comfortable point-to-point mountain transfer instead of a cramped overnight Volvo bus.

Because Shimla to Manali is 250 km, this leg bills at our 300 km minimum fare — and the one-way model is still far cheaper than any round trip. A round-trip Shimla–Manali cab would charge you for 500 km of running, including a 250 km empty return you will never sit in if you are continuing your Himachal tour onward to Dharamshala, Dalhousie, or back to Chandigarh airport. Our one-way Sedan from Shimla to Manali is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, versus ₹6,600 for the round trip — a clean saving of ₹3,300. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400, each roughly half the cost of a traditional return booking and far more sensible for a one-direction Himalayan transfer.

The drive itself is one of North India's great mountain road journeys. The route descends from Shimla on NH-5 toward Bilaspur, then joins NH-3 — the main Chandigarh–Manali artery — and climbs steadily through the Beas River valley. The natural anchors along the way are Sundernagar, with its lake and tree-lined boulevard, and Mandi, the riverside temple town roughly midway, where most travellers break for lunch. Beyond Mandi the road threads through the dramatic Pandoh Dam stretch, where the Beas turns a deep turquoise, before opening into the apple-orchard country of the Kullu Valley. The final run from Kullu up to Manali follows the river past Patlikuhl and Naggar Castle, with snow peaks rising ahead. Total drive time is a comfortable 7–8 hours with stops, which is exactly why we recommend a 6–7 AM start: you clear the winding ghat sections in good light and reach Manali with the evening still ahead of you.

En-route stops turn this leg into a journey rather than a slog. Mandi, the "Varanasi of the Hills," is famous for its riverside Bhutnath and Triloknath temples and makes the ideal lunch halt. The Pandoh Dam viewpoint is a five-minute photo stop where the Beas glows electric blue against the mountains. Kullu, the valley capital, is the place for a shawl-and-handicraft break and a riverside chai, and is the gateway to the Bijli Mahadev temple and the Great Himalayan National Park. Our drivers also know the cleaner highway dhabas around Sundernagar for parathas and chai. Up to two on-route stops are included free; the Mandi lunch plus Kullu break combination is the one almost every traveller chooses.

Our pickup reach covers all of Shimla without extra charge — the Mall Road and Ridge hotel belt, Shimla Railway Station (the toy-train terminus), the ISBT Tutikandi bus stand, the Kufri and Mashobra resort areas, and doorstep pickup from any address in Chhota Shimla, Sanjauli, or the New Shimla suburbs. In Manali we drop at any hotel along the Mall Road and Old Manali belt, the Hadimba Temple and Vashisht areas, the Aleo and Prini riverside resorts, the Solang Valley road properties, and any guesthouse in Naggar or Patlikuhl (no extra charge).

For vehicle choice on a winding mountain leg this long, comfort and engine matter more than on a flat highway hop. The Sedan (Swift Dzire or Toyota Etios) suits two or three passengers travelling light. Families of four to six with hill-holiday luggage should book the Ertiga SUV for boot space, third-row room, and a more planted feel on the ghats. For the strongest performance on the climbs, premium comfort, or groups of six to seven, the Innova Crysta is the most-requested upgrade — its torque and stability make the Pandoh and Kullu switchbacks effortless. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who know the Shimla–Mandi–Manali road intimately. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way Himalayan transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Shimla to Manali cost?", answer: "A one-way cab from Shimla to Manali starts at ₹3,300 for a Sedan, calculated from the 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Shimla to Manali take by cab?", answer: "Shimla to Manali is about 250 km and takes 7-8 hours by cab via NH-3 through Mandi and the Kullu Valley, including a lunch break. We recommend a 6-7 AM start to clear the mountain ghats in daylight and reach Manali by evening." },
      { question: "Can I stop at Mandi, Pandoh, and Kullu on the way?", answer: "Yes, up to 2 on-route stops are included free. Most travellers break for lunch at Mandi, pause for photos at the turquoise Pandoh Dam, and stop in Kullu for shawls and a riverside chai. Longer sightseeing halts can be arranged on request." },
      { question: "Is it better to take a cab or bus from Shimla to Manali?", answer: "A one-way cab offers door-to-door convenience, free Mandi and Kullu stops, and no cramped overnight bus. For families and groups it is far more comfortable and flexible than the Volvo bus on this winding Himalayan route." },
      { question: "What is the best time to leave Shimla for Manali?", answer: "Leave by 6-7 AM so you clear the winding ghat sections in good light and reach Manali with the evening ahead. March to June and September to November are ideal; winter roads may have snow blockages near Manali." },
      { question: "Which vehicle is best for the Shimla to Manali mountain drive?", answer: "For this 250 km winding Himalayan route, the Innova Crysta is the most-requested choice for its torque and stability on the climbs. Sedans suit 2-3 light travellers, while the Ertiga works well for families of 4-6 with hill-holiday luggage." }
    ]
  },

  "dehradun-to-nainital": {
    from: "Dehradun",
    to: "Nainital",
    distance: "290 km",
    distanceNum: 290,
    time: "7-8 hours",
    highway: "Via Haridwar & Haldwani",
    ...calcFares(290),
    highlights: ["Via Haridwar and Haldwani", "7-8 hours cross-Uttarakhand drive", "Doon Valley to Lake District transfer"],
    popularStops: ["Haridwar", "Haldwani", "Bhimtal"],
    bestTime: "Early morning 6-7 AM departure to break the long drive at Haridwar and reach Nainital before dark",
    description: `The Dehradun to Nainital one-way cab is the long cross-Uttarakhand transfer that links the Doon Valley with the Kumaon Lake District — a 290 km journey from Dehradun, gateway to Mussoorie and the Garhwal hills, all the way to Nainital, the emerald-lake hill station crowned by the Naina Devi temple. At Triveni Cabs we run this corridor for tourists chaining a full Uttarakhand itinerary (Mussoorie–Dehradun–Nainital–Corbett), families on a Kumaon holiday, pilgrims pairing the leg with a Haridwar Ganga Aarti stop, and travellers who want one comfortable car for a long drive instead of multiple bus changes through the foothills.

Because Dehradun to Nainital is 290 km, this leg bills at our 300 km minimum fare — and the one-way model remains dramatically cheaper than a round trip. A round-trip Dehradun–Nainital cab would charge you for nearly 580 km of running, including a long empty return you will never use if you continue your Kumaon tour onward to Corbett, Ranikhet, or down to Kathgodam for a train. Our one-way Sedan is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, versus ₹6,600 for the round trip — a saving of ₹3,300. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400, each roughly half the cost of a traditional return and far more sensible for a one-direction foothills transfer.

The drive is a genuine cross-state journey through changing terrain. The route runs south-east from Dehradun through the Doon Valley to Haridwar, the holy city on the Ganga and the natural first anchor at roughly 55 km — most travellers break here for a quick darshan at Har Ki Pauri or simply a chai with a river view. From Haridwar the road skirts the Rajaji landscape and runs across the Terai plains via Najibabad and Kashipur toward Haldwani, the bustling commercial gateway to Kumaon at around 230 km, where the climb into the hills begins. The final stretch winds up through Bhimtal and the lake belt to Nainital itself, with the Naini Lake appearing below as the road crests the last ridge. Total drive time is 7–8 hours with stops, which is exactly why we recommend a 6–7 AM start: it lets you break the journey properly at Haridwar and still reach Nainital before dark, before the narrow lake-town roads get busy.

En-route stops keep this long leg pleasant rather than tiring. Haridwar is the obvious highlight — Har Ki Pauri ghat, the Mansa Devi cable car, and a vegetarian thali make it the ideal morning break. Haldwani offers a fuel-and-refreshment halt and the last big market before the hills. Bhimtal, just 22 km short of Nainital, is a beautiful quieter lake with an island aquarium and far fewer crowds, perfect for a final stretch-and-photo stop before the main destination. Our drivers also know the cleaner highway dhabas around Kashipur for parathas and chai. Up to two on-route stops are included free; the Haridwar plus Bhimtal combination is the one most travellers choose.

Our pickup reach covers all of Dehradun without extra charge — Jolly Grant Airport (DED) with flight tracking, Dehradun Railway Station, the Clock Tower and Rajpur Road hotel belt, the ISBT bus stand, and doorstep pickup from any address in Clement Town, Sahastradhara Road, or the Dalanwala and Race Course areas. In Nainital we drop at any hotel along the Mallital and Tallital lake belt, the Mall Road properties, the Naini Lake and Naina Devi temple area, and resorts around Bhimtal, Sattal, and Bhowali (no extra charge).

For vehicle choice on a drive this long, comfort is paramount. The Sedan (Swift Dzire or Toyota Etios) suits two or three passengers travelling light across the plains-and-hills mix. Families of four to six with holiday luggage should book the Ertiga SUV for boot space and third-row comfort on the long Terai stretch. For the most relaxed long-distance ride, premium comfort, or groups of six to seven, the Innova Crysta is the top recommendation — its cabin space and ride quality make the 7–8 hour journey far easier, and it handles the final hill climb to Nainital with ease. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers experienced across the Dehradun–Haridwar–Nainital corridor. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way Uttarakhand transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Dehradun to Nainital cost?", answer: "A one-way cab from Dehradun to Nainital starts at ₹3,300 for a Sedan, calculated from the 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Dehradun to Nainital take by cab?", answer: "Dehradun to Nainital is about 290 km and takes 7-8 hours by cab via Haridwar and Haldwani, including a break. A 6-7 AM start lets you pause at Haridwar and reach Nainital before dark." },
      { question: "Can I stop at Haridwar on the way to Nainital?", answer: "Yes, up to 2 on-route stops are included free, and Haridwar is the most popular first break — most travellers stop for a quick darshan at Har Ki Pauri or a riverside chai. Many also pause at the quieter Bhimtal lake near Nainital." },
      { question: "Is one-way cab cheaper than a round trip from Dehradun to Nainital?", answer: "Yes. A one-way Sedan is ₹3,300 versus ₹6,600 for a round trip, saving you ₹3,300 because you do not pay for the long empty return to Dehradun across the foothills." },
      { question: "Do you offer airport pickup for Dehradun to Nainital?", answer: "Yes, we pick up from Jolly Grant Airport (DED) with flight tracking, Dehradun Railway Station, or any hotel and address in the city, and drop at any hotel around Naini Lake or the Bhimtal and Bhowali belt." },
      { question: "Which vehicle is best for the Dehradun to Nainital drive?", answer: "For this long 290 km cross-Uttarakhand journey, the Innova Crysta is the most comfortable for its cabin space and ride quality. Sedans suit 2-3 light travellers, while the Ertiga works well for families of 4-6 with luggage." }
    ]
  },

  "amritsar-to-dharamshala": {
    from: "Amritsar",
    to: "Dharamshala",
    distance: "200 km",
    distanceNum: 200,
    time: "4-5 hours",
    highway: "NH-54 via Pathankot",
    ...calcFares(200),
    highlights: ["Via NH-54 through Pathankot", "4-5 hours plains-to-mountains drive", "Golden Temple city to McLeod Ganj transfer"],
    popularStops: ["Pathankot", "Kangra"],
    bestTime: "Morning 8-9 AM departure to enjoy the Kangra Valley climb in daylight",
    description: `The Amritsar to Dharamshala one-way cab is the favourite plains-to-mountains transfer in this corner of North India — a 200 km drive that lifts you from the spiritual heart of Punjab, the Golden Temple city of Amritsar, up into the Dhauladhar foothills at Dharamshala and McLeod Ganj, the hillside home of the Dalai Lama and Tibetan culture. At Triveni Cabs we run this leg for tourists chaining Amritsar's Golden Temple and Wagah Border with a Himachal hill escape, backpackers heading for the cafés and monasteries of McLeod Ganj, families seeking respite from the Punjab heat, and travellers who want a smooth point-to-point transfer instead of changing buses at Pathankot.

Because Amritsar to Dharamshala is 200 km, this leg bills at our 300 km minimum fare — and the one-way model is still far cheaper than a round trip. A round-trip cab would charge you for 400 km of running, including a 200 km empty return you will never use if you continue your Himachal tour onward to Dalhousie, Khajjiar, or back toward Chandigarh. Our one-way Sedan from Amritsar to Dharamshala is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, versus ₹6,600 for the round trip — a saving of ₹3,300. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400, each well under half the cost of a traditional return booking and ideal when Dharamshala is the next stop on a longer journey.

The drive is a satisfying transition from flat Punjab farmland to Himalayan foothills. The route runs north-east from Amritsar on NH-54 across the wheat-and-mustard plains toward Pathankot, the strategic junction town at roughly 110 km that marks the gateway to both Himachal and Jammu. Most travellers break here for lunch before the terrain changes. Beyond Pathankot the road begins to climb and curve into the Kangra Valley, running past tea gardens and the ancient Kangra town with its hilltop fort, as the snow-capped Dhauladhar range fills the windscreen ahead. The final stretch winds up through Gaggal and Dharamshala town to McLeod Ganj perched above. Total drive time is a comfortable 4–5 hours, and a mid-morning 8–9 AM departure means you tackle the scenic Kangra Valley climb in clear daylight and reach Dharamshala in time for an afternoon walk around the monastery and main square.

En-route stops make the journey memorable. Pathankot is the natural mid-point for a Punjabi dhaba lunch and a fuel stop before the hills begin. Kangra, about 18 km short of Dharamshala, is well worth a pause — the imposing Kangra Fort, one of the oldest in India, and the revered Brajeshwari Devi temple sit just off the road, and the surrounding tea estates make a lovely photo halt. Our drivers also know the cleaner highway dhabas around Mukerian for chai and parathas on the plains stretch. Up to two on-route stops are included free; the Pathankot lunch plus Kangra Fort combination is the one most travellers choose.

Our pickup reach covers all of Amritsar without extra charge — Sri Guru Ram Dass Jee International Airport (ATQ) with flight tracking, Amritsar Railway Station, the Golden Temple and Hall Bazaar hotel belt, the Wagah Border road properties, and doorstep pickup from any address in Ranjit Avenue, Lawrence Road, or the Mall Road area. In Dharamshala we drop at any hotel in McLeod Ganj, the Dharamkot and Bhagsu areas, the main Dharamshala town and Kotwali Bazaar, the cricket-stadium belt, and resorts around Naddi and Dharamkot (no extra charge).

For vehicle choice, the Kangra Valley climb makes engine and brakes matter on the final stretch. The Sedan (Swift Dzire or Toyota Etios) handles the route comfortably for two or three passengers travelling light. Families of four to six with luggage should book the Ertiga SUV for boot space and a more planted feel on the curves into McLeod Ganj. For the most relaxed hill climb, premium comfort, or groups of six to seven, the Innova Crysta is the top recommendation — its torque and stability make the winding ascent effortless and the cabin stays cool across the warm Punjab plains. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers experienced on the Amritsar–Pathankot–Kangra road. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way hill-station transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Amritsar to Dharamshala cost?", answer: "A one-way cab from Amritsar to Dharamshala starts at ₹3,300 for a Sedan, calculated from the 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Amritsar to Dharamshala take by cab?", answer: "Amritsar to Dharamshala is about 200 km and takes 4-5 hours by cab via NH-54 through Pathankot, including a lunch break. An 8-9 AM start lets you enjoy the Kangra Valley climb in daylight." },
      { question: "Can I stop at Pathankot and Kangra on the way?", answer: "Yes, up to 2 on-route stops are included free. Most travellers break for a Punjabi dhaba lunch at Pathankot and pause at the historic Kangra Fort and Brajeshwari Devi temple before the final climb to Dharamshala." },
      { question: "Is it better to take a cab or bus from Amritsar to Dharamshala?", answer: "A one-way cab offers door-to-door convenience, free Pathankot and Kangra stops, and no bus change at Pathankot. For families and groups it is far more comfortable and flexible on this plains-to-mountains route." },
      { question: "Do you offer airport pickup for Amritsar to Dharamshala?", answer: "Yes, we pick up from Amritsar Airport (ATQ) with flight tracking, the Amritsar Railway Station, or any hotel near the Golden Temple, and drop at any hotel in McLeod Ganj, Dharamshala town, or the Naddi and Bhagsu belt." },
      { question: "Which vehicle is best for the Amritsar to Dharamshala hill drive?", answer: "For the Kangra Valley climb, the Innova Crysta is the most comfortable with its torque and stability. Sedans handle the route well for 2-3 passengers, while the Ertiga suits families of 4-6 with luggage." }
    ]
  },

  "haridwar-to-mussoorie": {
    from: "Haridwar",
    to: "Mussoorie",
    distance: "90 km",
    distanceNum: 90,
    time: "2.5-3 hours",
    highway: "Via Dehradun",
    ...calcFares(90),
    highlights: ["Via Dehradun and the Doon Valley", "2.5-3 hours short hill climb", "Holy Ganga city to the Queen of Hills transfer"],
    popularStops: ["Dehradun"],
    bestTime: "Morning 9-10 AM departure to reach Mussoorie for lunch with valley views",
    description: `The Haridwar to Mussoorie one-way cab is the perfect short hill escape for travellers finishing a Ganga pilgrimage and craving cool mountain air — a 90 km drive that carries you from the holy city of Haridwar, with its Har Ki Pauri ghat and evening Ganga Aarti, up to Mussoorie, the Queen of the Hills, perched on a Garhwal ridge with sweeping Doon Valley views. At Triveni Cabs we run this leg for pilgrims pairing Haridwar and Rishikesh with a hill-station finale, honeymooners chasing the romance of the Mall Road and Kempty Falls, families on a Uttarakhand circuit, and travellers who want a comfortable transfer rather than a slow bus change at Dehradun.

Because Haridwar to Mussoorie is just 90 km, this leg bills at our 300 km minimum fare — and the one-way model is still smarter than a round trip when Mussoorie is a stop on a longer journey. A round trip would charge you for the return drive back to Haridwar that you do not need if you continue onward to Dehradun airport, Dhanaulti, or back toward Delhi. Our one-way Sedan from Haridwar to Mussoorie is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, with the Ertiga SUV one-way at ₹4,500 and the Innova Crysta at ₹5,400. For a short scenic hill transfer with door-to-door service, no return charge, and a fixed upfront price, it is the most convenient way to reach the hills.

The drive is short but genuinely lovely. The route runs north from Haridwar through the Doon Valley toward Dehradun, the Uttarakhand capital and natural mid-point at roughly 55 km, where the city sits in a green bowl ringed by the Shivalik hills. From Dehradun the road begins its 35 km mountain climb to Mussoorie, winding up through forested switchbacks past the Mussoorie ropeway base, with the Doon Valley spreading out below in ever-widening panoramas at each bend. As you near the top the air cools sharply and the first colonial-era buildings of Mussoorie appear along the ridge. Total drive time is a relaxed 2.5–3 hours, and a mid-morning 9–10 AM departure means you tackle the climb in clear daylight and reach Mussoorie comfortably in time for lunch with a valley view.

En-route stops keep the short journey easy and pleasant. Dehradun is the natural halt — many travellers pause for a meal, a coffee on Rajpur Road, or a quick look at the Robber's Cave and Sahastradhara if time allows, and it is also the place to refuel and stretch before the mountain section. The Dehradun-to-Mussoorie ghat road itself offers several photogenic pull-offs where the valley view opens up, and our drivers know the safest spots for a quick photo stop. Up to two on-route stops are included free; a Dehradun break is the one almost every traveller chooses on this leg.

Our pickup reach covers all of Haridwar without extra charge — Haridwar Railway Station, the Har Ki Pauri and Bara Bazaar hotel belt, the Shantikunj and Bhupatwala ashram areas, the bus stand, and doorstep pickup from any address in Jwalapur, Kankhal, or the Ranipur Road area. In Mussoorie we drop at any hotel along the Mall Road and Library Bazaar belt, the Camel's Back Road properties, the Picture Palace and Landour areas, and resorts around Kempty Falls and the Mussoorie–Dhanaulti road (no extra charge).

For vehicle choice, the mountain climb to Mussoorie makes a willing engine helpful even on a short run. The Sedan (Swift Dzire or Toyota Etios) handles the ghat comfortably for two or three passengers travelling light. Families of four to six with luggage should book the Ertiga SUV for boot space and a more planted feel on the curves. For the most relaxed climb, premium comfort, or groups of six to seven, the Innova Crysta is the top recommendation — its torque makes the winding ascent effortless and the cabin stays cool through the Doon Valley. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers experienced on the Haridwar–Dehradun–Mussoorie road. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way hill-station transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Haridwar to Mussoorie cost?", answer: "A one-way cab from Haridwar to Mussoorie starts at ₹3,300 for a Sedan, calculated from the 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and parking are extra at actual." },
      { question: "How long does Haridwar to Mussoorie take by cab?", answer: "Haridwar to Mussoorie is about 90 km and takes 2.5-3 hours by cab via Dehradun, including the 35 km mountain climb from Dehradun up to the hill station." },
      { question: "Can I stop at Dehradun on the way to Mussoorie?", answer: "Yes, up to 2 on-route stops are included free, and Dehradun is the natural halt — most travellers pause for a meal or coffee and refuel before the mountain section. Quick stops at Robber's Cave or Sahastradhara can be arranged if time allows." },
      { question: "Why does a 90 km trip bill at the 300 km minimum?", answer: "Our one-way cabs bill at a 300 km minimum fare to cover the driver's return cost, so a short 90 km leg like Haridwar to Mussoorie is priced from ₹3,300 for a Sedan. It is still cheaper and more convenient than a round trip when Mussoorie is a stop on a longer journey." },
      { question: "What is the best time to leave Haridwar for Mussoorie?", answer: "A 9-10 AM departure is ideal so you climb the Dehradun-Mussoorie ghat in daylight and reach Mussoorie in time for lunch with valley views. March to June and October to November are the best seasons." },
      { question: "Which vehicle is best for the Haridwar to Mussoorie hill drive?", answer: "For the mountain climb, the Innova Crysta is the most comfortable with its torque and stability. Sedans handle the route well for 2-3 passengers, while the Ertiga suits families of 4-6 with luggage." }
    ]
  },

  "srinagar-to-pahalgam": {
    from: "Srinagar",
    to: "Pahalgam",
    distance: "95 km",
    distanceNum: 95,
    time: "2-3 hours",
    highway: "NH-44 via Anantnag",
    ...calcFares(95),
    highlights: ["Via NH-44 through Anantnag", "2-3 hours scenic Lidder Valley drive", "Dal Lake city to the Valley of Shepherds transfer"],
    popularStops: ["Anantnag", "Bijbehara"],
    bestTime: "Morning 9-10 AM departure for the saffron fields and Lidder River views in good light",
    description: `The Srinagar to Pahalgam one-way cab is the classic Kashmir Valley transfer that links the lakes of Srinagar with the alpine meadows of Pahalgam — a 95 km drive from the Dal Lake city, with its houseboats and Mughal gardens, to Pahalgam, the "Valley of Shepherds," set where the Lidder River tumbles out of the high Himalaya. At Triveni Cabs we run this leg for honeymooners on the iconic Kashmir circuit, families on a Srinagar–Gulmarg–Pahalgam holiday, Amarnath Yatra pilgrims heading for the Chandanwari base camp, and travellers who want a comfortable private car instead of a shared sumo for this beautiful valley drive.

Because Srinagar to Pahalgam is just 95 km, this leg bills at our 300 km minimum fare — and the one-way model is the convenient choice when Pahalgam is one stop on a longer Kashmir tour. A round trip would charge you for the empty return to Srinagar you do not need if you are staying overnight in Pahalgam or continuing your itinerary onward. Our one-way Sedan from Srinagar to Pahalgam is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, with the Ertiga SUV one-way at ₹4,500 and the Innova Crysta at ₹5,400. For a private valley transfer with door-to-door service, no return charge, and a fixed upfront price, it is the most relaxed way to reach the meadows.

The drive is one of Kashmir's most photogenic short journeys. The route runs south from Srinagar on NH-44, the main valley highway, through the apple-orchard belt toward Anantnag, the district town and natural mid-point at roughly 55 km. The landscape here is classic Kashmir — paddy fields, poplar avenues, and in autumn the famous saffron fields of Pampore glowing purple just off the highway. From the Anantnag–Bijbehara area the road leaves NH-44 and follows the Lidder River valley, climbing gently past Aishmuqam and into the pine-clad approach to Pahalgam, with the river running clear and cold alongside. Total drive time is a relaxed 2–3 hours, and a mid-morning 9–10 AM departure means you enjoy the saffron fields and Lidder River views in good light and reach Pahalgam in time for an afternoon at Betaab Valley or Aru.

En-route stops make the short drive memorable. Pampore, just south of Srinagar, is the saffron capital of India and a worthwhile photo stop in the bloom season. Anantnag offers a refreshment halt and is known for its fresh-water springs. Bijbehara, the "town of chinars," has a beautiful riverside chinar park and the historic Baba Reshi shrine, making a lovely pause before the Lidder Valley climb. Our drivers also know the cleaner roadside spots for Kashmiri kahwa and a stretch. Up to two on-route stops are included free; the Pampore saffron fields plus a Bijbehara or Anantnag break is the combination most travellers enjoy.

Our pickup reach covers all of Srinagar without extra charge — Srinagar International Airport (SXR) with flight tracking, the Dal Lake and Nigeen Lake houseboat ghats, the Boulevard Road and Lal Chowk hotel belt, the Mughal-gardens area, and doorstep pickup from any address in Rajbagh, Jawahar Nagar, or the Nishat and Shalimar areas. In Pahalgam we drop at any hotel along the main market and Lidder River belt, the Aru and Betaab Valley road properties, the club road resorts, and guesthouses toward Chandanwari (no extra charge).

For vehicle choice, the valley road is gentle but the scenery rewards a comfortable, window-friendly ride. The Sedan (Swift Dzire or Toyota Etios) suits two or three passengers travelling light. Families of four to six with holiday luggage should book the Ertiga SUV for boot space and third-row room. For the most relaxed ride, premium comfort, or groups of six to seven, the Innova Crysta is the most-requested choice — its high seating and large windows make the Lidder Valley views all the more spectacular. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified local drivers who know the Srinagar–Anantnag–Pahalgam road and the best photo stops intimately. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way Kashmir Valley transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Srinagar to Pahalgam cost?", answer: "A one-way cab from Srinagar to Pahalgam starts at ₹3,300 for a Sedan, calculated from the 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Parking and any local taxi charges at Pahalgam are extra at actual." },
      { question: "How long does Srinagar to Pahalgam take by cab?", answer: "Srinagar to Pahalgam is about 95 km and takes 2-3 hours by cab via NH-44 through Anantnag, following the scenic Lidder River valley for the final stretch." },
      { question: "Can I stop at the Pampore saffron fields and Anantnag on the way?", answer: "Yes, up to 2 on-route stops are included free. Most travellers pause at the Pampore saffron fields (especially in autumn bloom) and break at Anantnag or the riverside chinar park at Bijbehara before the Lidder Valley climb." },
      { question: "Why does a 95 km trip bill at the 300 km minimum?", answer: "Our one-way cabs bill at a 300 km minimum fare to cover the driver's return cost, so a short 95 km leg like Srinagar to Pahalgam is priced from ₹3,300 for a Sedan. It is still the convenient private-car choice when Pahalgam is one stop on a longer Kashmir tour." },
      { question: "Do you offer airport pickup for Srinagar to Pahalgam?", answer: "Yes, we pick up from Srinagar Airport (SXR) with flight tracking, the Dal Lake houseboat ghats, or any hotel on Boulevard Road, and drop at any hotel along the Pahalgam market and Lidder River belt." },
      { question: "Which vehicle is best for the Srinagar to Pahalgam drive?", answer: "For the scenic Lidder Valley views, the Innova Crysta is the most-requested for its high seating and large windows. Sedans suit 2-3 light travellers, while the Ertiga works well for families of 4-6 with holiday luggage." }
    ]
  },

  "delhi-to-bareilly": {
    from: "Delhi",
    to: "Bareilly",
    distance: "260 km",
    distanceNum: 260,
    time: "5-6 hours",
    highway: "NH-9",
    ...calcFares(260),
    highlights: ["Via NH-9 through Moradabad", "5-6 hours straight highway drive", "Capital to the Nath Nagri transfer"],
    popularStops: ["Gajraula", "Moradabad", "Rampur"],
    bestTime: "Morning 7-8 AM departure to clear Delhi traffic and reach Bareilly by midday",
    description: `The Delhi to Bareilly one-way cab is a steady, well-travelled highway transfer across western Uttar Pradesh — a 260 km drive from the national capital to Bareilly, the "Nath Nagri" famous for its ancient Shiva temples, its Zari-Zardozi embroidery, and as the gateway to the Kumaon hills and Jim Corbett. At Triveni Cabs we run this corridor for business travellers heading to Bareilly's manufacturing and trade hubs, families visiting relatives, pilgrims bound for the city's four Nath temples, and travellers using Bareilly as a stepping stone toward Nainital and the Kumaon region.

Because Delhi to Bareilly is 260 km, this leg bills at our 300 km minimum fare — and the one-way model is significantly cheaper than a round trip. A round-trip cab would charge you for 520 km of running, including a 260 km empty return you will never use if you are staying in Bareilly, continuing onward to Nainital, or flying out separately. Our one-way Sedan from Delhi to Bareilly is ₹3,300, calculated from the 300 km minimum fare at ₹11/km, versus ₹6,600 for the round trip — a saving of ₹3,300. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400, each roughly half the cost of a traditional return booking and the sensible choice for a one-direction transfer.

The drive is a straightforward, fast run on a good national highway. The route heads east out of Delhi through Ghaziabad and onto NH-9, the main Delhi–Lucknow artery, crossing the Ganga and running through the western UP plains. The natural anchors are Gajraula, the highway town at roughly 90 km known for its milk and roadside dhabas, and Moradabad, the "Brass City" (Peetal Nagri) at around 165 km, the largest town en route and the standard lunch and refreshment halt. Beyond Moradabad the highway continues through Rampur — famous for its Raza Library and the Rampuri knife — before the final stretch into Bareilly. Total drive time is 5–6 hours including a meal stop, and a 7–8 AM departure is ideal: it gets you out of Delhi ahead of the worst traffic and into Bareilly comfortably by midday, with some congestion to expect around Moradabad.

En-route stops keep the journey easy. Gajraula is the classic first break for a chai, fresh milk products, and a quick stretch on the long open highway. Moradabad, the Brass City, is the main halt — a good lunch stop and, for those with time, a chance to see its famous brassware markets. Rampur offers a quick pause and is known for its Nawabi heritage, the Raza Library's rare manuscripts, and local cuisine. Our drivers know the cleaner highway dhabas along NH-9 for parathas and chai. Up to two on-route stops are included free; the Gajraula plus Moradabad combination is the one most travellers choose.

Our pickup reach covers all of Delhi-NCR without extra charge — Indira Gandhi International Airport (DEL) with flight tracking, the New Delhi, Old Delhi, Hazrat Nizamuddin, and Anand Vihar railway stations, hotels across Connaught Place, Aerocity, and Karol Bagh, and doorstep pickup from any address in South Delhi, Dwarka, Noida, Ghaziabad, or Gurgaon. In Bareilly we drop at any hotel in the Civil Lines and Cantt belt, the four Nath temple areas, the Railway Junction, the Alakhnath temple area, and anywhere across the city and its industrial belt (no extra charge).

For vehicle choice on a five-to-six-hour highway run, comfort makes the journey easier. The Sedan (Swift Dzire or Toyota Etios) is perfect for two or three passengers travelling light. Families of four to six with luggage should book the Ertiga SUV for the extra boot and third-row room. For business travellers wanting to work or rest en route, premium comfort, or groups of six to seven, the Innova Crysta is the recommended upgrade with its superior cabin space and ride quality on the long open highway. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers experienced on the Delhi–Moradabad–Bareilly corridor. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way Delhi-to-Bareilly transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Bareilly cost?", answer: "A one-way cab from Delhi to Bareilly starts at ₹3,300 for a Sedan, calculated from the 300 km minimum fare at ₹11/km. Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and state tax are extra at actual." },
      { question: "How long does Delhi to Bareilly take by cab?", answer: "Delhi to Bareilly is about 260 km and takes 5-6 hours by cab via NH-9 through Moradabad, including a lunch break. A 7-8 AM start helps you clear Delhi traffic and reach Bareilly by midday." },
      { question: "Can I stop at Gajraula, Moradabad, and Rampur on the way?", answer: "Yes, up to 2 on-route stops are included free. Most travellers break for chai at Gajraula and lunch at Moradabad, the Brass City, with Rampur and its Raza Library a popular quick pause for those with time." },
      { question: "Is one-way cab cheaper than a round trip from Delhi to Bareilly?", answer: "Yes. A one-way Sedan is ₹3,300 versus ₹6,600 for a round trip, saving you ₹3,300 because you do not pay for the 260 km empty return to Delhi." },
      { question: "Do you offer airport pickup for Delhi to Bareilly?", answer: "Yes, we pick up from Delhi Airport (DEL) with flight tracking, any Delhi railway station, or any address across Delhi-NCR including Noida, Ghaziabad, and Gurgaon, and drop at any hotel or address in Bareilly." },
      { question: "Which vehicle is best for the Delhi to Bareilly drive?", answer: "For this 260 km highway run, the Innova Crysta is the most comfortable for business travellers and groups wanting cabin space. Sedans suit 2-3 light travellers, while the Ertiga works well for families of 4-6 with luggage." }
    ]
  },
"udaipur-to-jaisalmer": {
    from: "Udaipur",
    to: "Jaisalmer",
    distance: "495 km",
    distanceNum: 495,
    time: "8-9 hours",
    highway: "NH-68 via Jodhpur",
    ...calcFares(495),
    highlights: ["Via NH-68 through Jodhpur", "8-9 hours desert circuit drive", "Lake city to Golden city transfer"],
    popularStops: ["Ranakpur", "Jodhpur"],
    bestTime: "Early morning 5-6 AM departure to reach Jaisalmer before sunset for Sam dunes",
    description: `The Udaipur to Jaisalmer one-way cab is the signature long leg of the classic Rajasthan desert circuit — a 495 km journey that carries you from the romantic lake city of Udaipur, with its Lake Pichola palaces and Aravalli backdrop, all the way to the Golden City of Jaisalmer rising out of the Thar Desert. At Triveni Cabs we run this corridor for tourists chaining the full Rajasthan itinerary (Udaipur–Jodhpur–Jaisalmer–Bikaner), honeymooners heading for a Sam sand-dune desert camp, photographers chasing the sandstone glow of Jaisalmer Fort, and travellers who simply want a comfortable point-to-point transfer instead of an overnight train.

A round-trip Udaipur–Jaisalmer cab would force you to pay for 990 km of running, including a 495 km empty return that you will never sit in. Our one-way model fixes that. A Sedan one-way from Udaipur to Jaisalmer is ₹5,445 at our standard ₹11/km rate, versus ₹10,890 for the round trip — a clean saving of ₹5,445. The Ertiga SUV one-way is ₹7,425 and the Innova Crysta is ₹8,910, each pricing roughly half of what a traditional return booking costs and far more sensible for a one-direction transfer on the desert circuit.

The drive itself is one of Rajasthan's great road journeys. The route runs north-west on NH-68, climbing first through the Aravalli ranges before the landscape flattens and dries into true Thar country. The natural midway anchor is Jodhpur, the Blue City — roughly 250 km and 4.5 hours from Udaipur — where most travellers break for lunch beneath the towering walls of Mehrangarh Fort. Beyond Jodhpur the road runs through Pokhran and Lathi as scrub gives way to golden sand, telephone poles march to the horizon, and the first glimpse of Jaisalmer Fort glowing amber on its hill tells you the desert has arrived. Total drive time is a comfortable 8–9 hours with stops, which is exactly why we recommend a 5–6 AM start: you reach Jaisalmer with daylight to spare for a Sam dunes sunset and camel safari.

En-route stops make this leg memorable rather than merely long. The standout is Ranakpur, about 90 km from Udaipur, home to the breathtaking 15th-century Ranakpur Jain Temple with its 1,444 uniquely carved marble pillars — a 45-minute halt here is the single best add-on on the whole route. Jodhpur itself offers Mehrangarh Fort, the Jaswant Thada cenotaph, and the famous Clock Tower market for a spice-and-textile break and a Rajasthani thali lunch. Our drivers also know the cleaner highway dhabas around Pali and Balesar for chai, and can pause briefly at the Pokhran fort area on the final desert stretch. Up to two on-route stops are included free; the Ranakpur–Jodhpur combination is the one almost every traveller chooses.

Our pickup reach covers all of Udaipur without extra charge — Maharana Pratap Airport (UDR) with flight tracking, Udaipur City Railway Station, the Lake Pichola and Fateh Sagar hotel belt, heritage properties around Jagdish Chowk, and doorstep pickup from any address in Hiran Magri, Sector 14, or the Sukher and Shobhagpura suburbs. In Jaisalmer we drop at any fort-area haveli hotel, the desert camps at Sam and Khuri (no extra charge), Jaisalmer Railway Station, the airport, or any hotel along the Gadisar Lake and Sam Road belt.

For vehicle choice on a journey this long, comfort matters more than on a short hop. The Sedan (Swift Dzire or Toyota Etios) suits two or three passengers travelling light. Families of four to six with desert-camp luggage should book the Ertiga SUV for boot space and third-row room. For the Thar heat — where summer afternoons cross 45°C — the Innova Crysta is the most-requested upgrade, with the strongest AC and the smoothest ride over the long open desert stretches. Every vehicle is under four years old, FASTag-enabled, stocked with bottled water, and driven by background-verified drivers who know the Udaipur–Jodhpur–Jaisalmer road intimately. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way desert transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Udaipur to Jaisalmer cost?", answer: "A one-way cab from Udaipur to Jaisalmer starts at ₹5,445 for a Sedan (495 km at ₹11/km). Ertiga SUV costs ₹7,425 and Innova Crysta costs ₹8,910. Toll and state tax are extra at actual." },
      { question: "How long does Udaipur to Jaisalmer take by cab?", answer: "Udaipur to Jaisalmer is about 495 km and takes 8-9 hours by cab via NH-68 through Jodhpur, including a lunch break. We recommend a 5-6 AM start to reach Jaisalmer before the Sam dunes sunset." },
      { question: "Can I stop at Ranakpur and Jodhpur on the way?", answer: "Yes, up to 2 on-route stops are included free. Most travellers stop at the Ranakpur Jain Temple and break for lunch in Jodhpur near Mehrangarh Fort. Longer sightseeing halts can be arranged on request." },
      { question: "Is it better to take a cab or train from Udaipur to Jaisalmer?", answer: "A one-way cab offers door-to-door convenience, free Ranakpur and Jodhpur stops, and no overnight train change. For families and groups it is more comfortable and flexible than rail on this desert circuit leg." },
      { question: "What is the best time to leave Udaipur for Jaisalmer?", answer: "Leave by 5-6 AM so you reach Jaisalmer with daylight to spare for a Sam dunes sunset and camel safari. October to March is the ideal season for this desert route." },
      { question: "Which vehicle is best for the Udaipur to Jaisalmer desert drive?", answer: "For this 495 km journey through the Thar Desert, the Innova Crysta is the most-requested choice for its strong AC and comfort. Sedans suit 2-3 light travellers, while the Ertiga works well for families of 4-6 with desert-camp luggage." }
    ]
  },

  "jodhpur-to-jaipur": {
    from: "Jodhpur",
    to: "Jaipur",
    distance: "335 km",
    distanceNum: 335,
    time: "5-6 hours",
    highway: "NH-58 via Ajmer",
    ...calcFares(335),
    highlights: ["Via NH-58 through Ajmer", "5-6 hours comfortable drive", "Blue City to Pink City transfer"],
    popularStops: ["Ajmer", "Pushkar", "Kishangarh"],
    bestTime: "Morning 7-8 AM departure to allow an Ajmer-Pushkar stop and reach Jaipur by evening",
    description: `The Jodhpur to Jaipur one-way cab connects two of Rajasthan's most iconic cities — the Blue City of Jodhpur, crowned by the mighty Mehrangarh Fort, and the Pink City of Jaipur, with its Hawa Mahal, Amber Fort, and bustling bazaars. Covering 335 km on NH-58 via Ajmer, this is one of the most-booked transfers on the Rajasthan circuit, popular with tourists completing the Udaipur–Jodhpur–Jaipur loop, pilgrims pairing the leg with the Ajmer Sharif Dargah and Pushkar's Brahma Temple, and travellers flying out of Jaipur after exploring the desert and the forts.

The economics strongly favour a one-way booking. A round-trip Jodhpur–Jaipur Sedan costs ₹7,370, but if you only need the onward drop — because you are catching a flight from Jaipur, continuing to Agra and the Golden Triangle, or ending your Rajasthan tour in the capital — our one-way fare is just ₹3,685 at ₹11/km. That is a direct saving of ₹3,685, almost exactly half. The Ertiga SUV one-way is ₹5,025 and the Innova Crysta is ₹6,030, each costing far less than a traditional return where you would pay for 335 km of empty driving back to Jodhpur.

The drive is a smooth, well-paved run across central Rajasthan. NH-58 carries you east from Jodhpur through Bilara and onward toward Ajmer, the natural midway point at roughly 200 km. From Ajmer the highway sweeps past Kishangarh — India's marble capital, where you will see roadside yards stacked with slabs of stone — before the final stretch into Jaipur via the NH-48 junction at Dudu. The road is largely flat and fast, with total drive time of 5–6 hours including a meal or sightseeing stop. A morning departure around 7–8 AM is ideal: it leaves room for an Ajmer–Pushkar halt and still gets you into Jaipur comfortably by early evening.

The en-route stops are what make this route special rather than a mere transfer. Ajmer is home to the revered Ajmer Sharif Dargah, one of the holiest Sufi shrines in India, drawing pilgrims of every faith. Just 15 km further sits Pushkar, with its sacred lake, the rare Brahma Temple, and a hippie-bohemian bazaar perfect for silver jewellery, embroidered textiles, and a rooftop café lunch overlooking the ghats. Kishangarh offers the marble market and the photogenic Phool Mahal and Gundalao Lake for a quick break. Up to two free on-route stops are included — the Ajmer Dargah plus Pushkar combination is the most popular by far, and our drivers know the parking and quickest walk-in routes for both.

Our pickup reach spans all of Jodhpur without extra charge — Jodhpur Airport (JDH) with flight tracking, Jodhpur Railway Station, the Mehrangarh and Clock Tower heritage hotel belt, the Umaid Bhawan area, and doorstep pickup across Ratanada, Shastri Nagar, and the Paota and Sardarpura neighbourhoods. In Jaipur we drop at Jaipur International Airport with flight-timing coordination, any city hotel (Hilton, Clarks Amer, Taj Rambagh, Radisson), Jaipur Junction Railway Station, and anywhere across C-Scheme, MI Road, Malviya Nagar, or Vaishali Nagar.

For vehicle selection, the Sedan (Swift Dzire or Etios) is perfect for couples and light luggage on this five-hour run. Families of four to six should book the Ertiga SUV for the extra boot and third-row comfort, especially with shopping picked up in Pushkar and Kishangarh. For pilgrims travelling as a group, premium comfort, or peak-summer travel when temperatures soar, the Innova Crysta is the recommended upgrade with its superior AC and ride quality. Every car is under four years old, FASTag-enabled, stocked with water, and driven by verified drivers experienced on the Jodhpur–Ajmer–Jaipur corridor. Call or WhatsApp 7668570551 for an instant confirmed fare — no surge, no hidden kilometres, and never a return charge on your one-way Blue-City-to-Pink-City transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Jodhpur to Jaipur cost?", answer: "A one-way cab from Jodhpur to Jaipur starts at ₹3,685 for a Sedan (335 km at ₹11/km). Ertiga SUV costs ₹5,025 and Innova Crysta costs ₹6,030. Toll and state tax are extra at actual." },
      { question: "How long does Jodhpur to Jaipur take by cab?", answer: "Jodhpur to Jaipur is about 335 km and takes 5-6 hours by cab via NH-58 through Ajmer, including a stop. A 7-8 AM start allows an Ajmer-Pushkar halt with an evening arrival in Jaipur." },
      { question: "Can I visit Ajmer Dargah and Pushkar on the way to Jaipur?", answer: "Yes, up to 2 on-route stops are included free, and the Ajmer Sharif Dargah plus Pushkar (Brahma Temple and lake) combination is the most popular. Our drivers know the parking and walk-in routes for both." },
      { question: "Is one-way cab cheaper than a round trip from Jodhpur to Jaipur?", answer: "Yes. A one-way Sedan is ₹3,685 versus ₹7,370 for a round trip, saving you ₹3,685 because you do not pay for the 335 km empty return to Jodhpur." },
      { question: "Do you offer airport pickup or drop for Jodhpur to Jaipur?", answer: "Yes, we pick up from Jodhpur Airport (JDH) and can drop at Jaipur International Airport with flight-timing coordination, or at any hotel, railway station, or address in either city." },
      { question: "Which vehicle is best for Jodhpur to Jaipur?", answer: "Sedans suit couples and light luggage. Families of 4-6 should book the Ertiga for boot space, while groups or summer travellers prefer the Innova Crysta for its stronger AC and ride comfort." }
    ]
  },

  "udaipur-to-mount-abu": {
    from: "Udaipur",
    to: "Mount Abu",
    distance: "165 km",
    distanceNum: 165,
    time: "3-4 hours",
    highway: "NH-27 via Pindwara",
    ...calcFares(165),
    highlights: ["Via NH-27 through Pindwara", "3-4 hours scenic hill drive", "Lake city to Rajasthan's only hill station"],
    popularStops: ["Pindwara", "Abu Road"],
    bestTime: "Morning 8-9 AM departure to enjoy the Aravalli ghat climb in daylight",
    description: `The Udaipur to Mount Abu one-way cab is the favourite short escape on the southern Rajasthan circuit — a 165 km drive that lifts you from the lakeside palaces of Udaipur up into the cool pine-clad heights of Mount Abu, the state's only hill station. At Triveni Cabs we run this leg for honeymooners chasing the romance of Nakki Lake and Sunset Point, families seeking respite from the desert heat, pilgrims visiting the marble masterpiece of the Dilwara Jain Temples, and tourists folding Mount Abu into the broader Udaipur–Mount Abu–Jodhpur itinerary.

Because this is a shorter leg, the one-way model is especially smart. A round trip would bill you for 330 km of driving, including the empty return you never use if you continue onward into Gujarat or down to Jodhpur. Our one-way fare uses the 300 km minimum billing, so a Sedan from Udaipur to Mount Abu is ₹3,300 at ₹11/km, versus ₹6,600 for a round trip — a saving of ₹3,300. The Ertiga SUV one-way is ₹4,500 and the Innova Crysta is ₹5,400, each pricing well under half of a traditional return booking and ideal when Mount Abu is a stop rather than a round-trip day out.

The drive is short but genuinely scenic. NH-27 runs south-west from Udaipur across the rolling Aravalli foothills toward Pindwara, the highway junction where the road branches for the hill climb. From there the route turns toward Abu Road, the base town, before the real treat begins: the 27 km ghat ascent up to Mount Abu itself, a winding, well-graded mountain road that climbs through forested switchbacks with valley views opening at every bend. At around 1,220 metres, the air cools noticeably as you approach the plateau. Total drive time is a relaxed 3–4 hours, and a mid-morning 8–9 AM departure means you tackle the ghat section in clear daylight and reach Mount Abu in time for lunch and an afternoon by Nakki Lake.

En-route stops keep the journey easy and pleasant. Pindwara, on NH-27, is the natural mid-point for a chai-and-snack break and is itself known for intricate marble stone-carving workshops. Abu Road at the foot of the hill is the last town for fuel, refreshments, and a quick stretch before the climb — and is also where the railway station sits for travellers connecting from a train. Many passengers ask the driver to pause briefly at a viewpoint on the ghat road for photos of the plains spread out below. Up to two on-route stops are included free, and our drivers know the safest pull-offs on the winding section.

Our pickup reach covers all of Udaipur at no extra charge — Maharana Pratap Airport (UDR) with flight tracking, Udaipur City Railway Station, the Lake Pichola and Fateh Sagar hotel belt, the Jagdish Chowk heritage area, and doorstep pickup across Hiran Magri, Sector 14, Sukher, and Shobhagpura. In Mount Abu we drop at any hotel or resort around Nakki Lake, the Dilwara Temple area, the Polo Ground and main market, and the resort belt along the Abu Road approach.

For vehicle choice, the hill section makes engine and brakes matter. The Sedan (Swift Dzire or Etios) handles the ghat comfortably for two or three passengers. Families of four to six should book the Ertiga SUV for boot space and a more planted feel on the curves. For the most relaxed climb, premium comfort, or groups of six to seven, the Innova Crysta is the top recommendation — its torque and stability make the winding ascent effortless, and the cabin stays cool even on warm approach roads. Every vehicle is under four years old, FASTag-enabled, stocked with water, and driven by background-verified drivers experienced on the Aravalli ghat road. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way hill-station transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Udaipur to Mount Abu cost?", answer: "A one-way cab from Udaipur to Mount Abu starts at ₹3,300 for a Sedan (300 km minimum billing at ₹11/km). Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and state tax are extra at actual." },
      { question: "How long does Udaipur to Mount Abu take by cab?", answer: "Udaipur to Mount Abu is about 165 km and takes 3-4 hours by cab via NH-27 through Pindwara, including the 27 km ghat climb from Abu Road up to the hill station." },
      { question: "Can I stop at Pindwara or Abu Road on the way?", answer: "Yes, up to 2 on-route stops are included free. Pindwara is a popular chai-and-snack break, while Abu Road at the foot of the hill is the last town for fuel and refreshments before the ghat climb." },
      { question: "Is the road to Mount Abu safe by cab?", answer: "Yes. The 27 km ghat road from Abu Road to Mount Abu is well-graded and our drivers are experienced on the Aravalli climb. A daytime departure ensures you tackle the winding section in clear light." },
      { question: "What is the best time to leave Udaipur for Mount Abu?", answer: "An 8-9 AM departure is ideal so you climb the ghat in daylight and reach Mount Abu in time for lunch and an afternoon at Nakki Lake. October to March is the best season for the hill station." },
      { question: "Which vehicle is best for the Udaipur to Mount Abu hill drive?", answer: "For the ghat climb, the Innova Crysta is the most comfortable with its torque and stability. Sedans handle the route well for 2-3 passengers, while the Ertiga suits families of 4-6 with luggage." }
    ]
  },

  "jodhpur-to-mount-abu": {
    from: "Jodhpur",
    to: "Mount Abu",
    distance: "265 km",
    distanceNum: 265,
    time: "5 hours",
    highway: "NH-62 via Pali & Sirohi",
    ...calcFares(265),
    highlights: ["Via Pali and Sirohi", "Around 5 hours scenic drive", "Blue City to Rajasthan's only hill station"],
    popularStops: ["Pali", "Sirohi", "Abu Road"],
    bestTime: "Morning 7-8 AM departure to climb the Aravalli ghat in daylight",
    description: `The Jodhpur to Mount Abu one-way cab carries you from the sun-baked Blue City, crowned by the colossal Mehrangarh Fort, to the cool green heights of Mount Abu, Rajasthan's only hill station, nestled at over 1,200 metres in the Aravalli range. Covering 265 km via Pali and Sirohi, this is a much-loved transfer for families escaping the desert heat, honeymooners headed for Nakki Lake and Sunset Point, pilgrims visiting the exquisite Dilwara Jain Temples, and tourists weaving Mount Abu into a Jodhpur–Mount Abu–Udaipur loop.

The one-way booking makes clear financial sense. A round-trip Jodhpur–Mount Abu Sedan costs ₹5,830, but if you only need the onward drop — because you continue from Mount Abu toward Udaipur or down into Gujarat — our one-way fare is ₹2,915 at ₹11/km. That saves you ₹2,915, almost exactly half, by eliminating the 265 km empty return you would otherwise pay for. The Ertiga SUV one-way is ₹3,975 and the Innova Crysta is ₹4,770, each costing far less than a traditional return and far better suited to a one-direction hill transfer.

The drive is a steady, scenic run from desert plain to mountain plateau. The route heads south from Jodhpur toward Pali, an industrial textile town and the first natural break at roughly 75 km. From Pali the road continues through Sirohi district, the land flattening into farmland before the Aravalli ridge rises ahead. At Abu Road, the base town at the foot of the hill, the route turns onto the 27 km ghat climb — a winding, forested ascent of well-graded switchbacks with valley views unfolding at every bend, and a noticeable drop in temperature as you near the plateau. Total drive time is around 5 hours, and a 7–8 AM start gets you up the ghat in clear daylight and into Mount Abu by early afternoon.

En-route stops break the journey nicely. Pali offers a roadside chai-and-snack halt and is known for its block-printed and bandhani textiles if you want a quick market browse. Sirohi, the old princely-state town, makes a pleasant stretch-and-refreshment stop. Abu Road at the base of the hill is the last town for fuel and refreshments before the climb, and also hosts the railway station for travellers connecting from a train. Many passengers ask for a brief photo pause at a ghat viewpoint where the plains spread out below. Up to two on-route stops are included free, and our drivers know the safest pull-offs on the winding section.

Our pickup reach covers all of Jodhpur without extra charge — Jodhpur Airport (JDH) with flight tracking, Jodhpur Railway Station, the Mehrangarh and Clock Tower heritage hotel belt, the Umaid Bhawan area, and doorstep pickup across Ratanada, Shastri Nagar, Paota, and Sardarpura. In Mount Abu we drop at any hotel or resort around Nakki Lake, the Dilwara Temple area, the Polo Ground and main market, and the resort belt along the Abu Road approach.

For vehicle choice, the ghat section makes engine and brakes matter. The Sedan (Swift Dzire or Etios) handles the climb comfortably for two or three passengers travelling light. Families of four to six should book the Ertiga SUV for the extra boot space and a more planted feel on the curves. For the most relaxed ascent, premium comfort, or groups of six to seven, the Innova Crysta is the top recommendation — its torque and stability make the winding climb effortless, and the cabin stays cool through the warm desert approach. Every vehicle is under four years old, FASTag-enabled, stocked with water, and driven by background-verified drivers experienced on the Pali–Sirohi route and the Aravalli ghat. Call or WhatsApp 7668570551 for a confirmed upfront fare — no surge, no hidden kilometres, and never a return charge on your one-way hill-station transfer.`,
    faqs: [
      { question: "How much does a one-way cab from Jodhpur to Mount Abu cost?", answer: "A one-way cab from Jodhpur to Mount Abu starts at ₹2,915 for a Sedan (265 km at ₹11/km). Ertiga SUV costs ₹3,975 and Innova Crysta costs ₹4,770. Toll and state tax are extra at actual." },
      { question: "How long does Jodhpur to Mount Abu take by cab?", answer: "Jodhpur to Mount Abu is about 265 km and takes around 5 hours by cab via Pali and Sirohi, including the 27 km ghat climb from Abu Road up to the hill station." },
      { question: "Can I stop at Pali and Sirohi on the way to Mount Abu?", answer: "Yes, up to 2 on-route stops are included free. Pali is a popular textile and chai stop, Sirohi makes a pleasant stretch break, and Abu Road is the last town for fuel before the ghat climb." },
      { question: "Is one-way cab cheaper than a round trip from Jodhpur to Mount Abu?", answer: "Yes. A one-way Sedan is ₹2,915 versus ₹5,830 for a round trip, saving you ₹2,915 because you do not pay for the 265 km empty return to Jodhpur." },
      { question: "What is the best time to leave Jodhpur for Mount Abu?", answer: "A 7-8 AM departure is ideal so you climb the Aravalli ghat in daylight and reach Mount Abu by early afternoon. October to March is the best season for this hill station." },
      { question: "Which vehicle is best for the Jodhpur to Mount Abu drive?", answer: "For the ghat climb, the Innova Crysta is the most comfortable with its torque and stability. Sedans handle the route well for 2-3 passengers, while the Ertiga suits families of 4-6 with luggage." }
    ]
  },
  "delhi-to-agra": {
    from: "Delhi",
    to: "Agra",
    distance: "230 km",
    distanceNum: 230,
    time: "3-4 hours",
    highway: "Yamuna Expressway",
    ...calcFares(230),
    highlights: ["Via Yamuna Expressway", "3-4 hours smooth drive", "Toll included in fare estimate"],
    popularStops: ["Mathura", "Vrindavan"],
    bestTime: "Early morning 5-6 AM to avoid traffic and enjoy Taj Mahal sunrise",
    description: `The Delhi to Agra one-way cab is the single most-booked intercity route in North India — and for good reason. Every day, thousands of tourists, families, business travellers, and pilgrims make this 230 km journey down the Yamuna Expressway to visit the Taj Mahal, Agra Fort, Fatehpur Sikri, and the buzzing bazaars of Sadar and Kinari. At Triveni Cabs, we have been running this corridor since 2008, and it remains the route our drivers know best.

A round-trip Delhi-Agra cab forces you to pay for 460 km (both directions) — but if you only need a drop because you are catching the Agra Cantt–Jhansi Shatabdi, staying overnight with family, or continuing to Jaipur or Gwalior, you are paying for 230 km of empty return. Our one-way model solves exactly that. A Sedan one-way from Delhi to Agra is ₹3,300 (at the 300 km minimum billing of ₹11/km), versus ₹6,600 for a round trip. That is a ₹3,300 saving — almost half — for zero compromise on vehicle quality.

The drive itself is India's smoothest intercity highway. The Yamuna Expressway is a 165 km, six-lane, access-controlled toll road that cuts through Gautam Buddha Nagar, Mathura, and Aligarh districts. With minimal traffic after the Pari Chowk entry, an early-morning departure (5–6 AM from Delhi NCR) reaches the Taj Mahal East Gate before 9 AM — perfect for a sunrise viewing when the marble changes from pearl grey to pink gold. Evening departures are equally comfortable: the expressway is well-lit, and our drivers use FASTag to clear the three toll plazas (Jewar, Mathura, Agra) without stopping.

Our pickup reach covers all of Delhi NCR without extra charge: IGI Airport T1 / T2 / T3 with flight tracking, New Delhi & Hazrat Nizamuddin railway stations, all Gurgaon corporate parks, Noida and Greater Noida societies, Karol Bagh, Connaught Place and South Delhi hotels, and residential doorsteps across Rohini, Dwarka, and Lajpat Nagar. You can request up to two free stops on-route — most travellers use one at Mathura's Krishna Janmabhoomi temple or Vrindavan's Banke Bihari, and a second at the highway dhabas near Kosi Kalan for chai and parathas.

For vehicle choice, the Sedan (Swift Dzire or Toyota Etios) is ideal for 2–3 passengers with 2 large suitcases. Families of 4–6 with heavier luggage should book the Ertiga SUV (₹4,500) for extra boot space and third-row comfort. For premium comfort, airport-flight-connections, or groups of 6–7, the Innova Crysta (₹5,400) is the most-requested upgrade on this route. All vehicles are under 4 years old, run FASTag, carry bottled water and first-aid kits, and are driven by background-verified drivers with at least 5 years of Yamuna Expressway experience.

Whether you are on a tight schedule to reach the Taj Mahal for a morning visit, attending a destination wedding at ITC Mughal or Jaypee Palace, flying out of Agra after sightseeing, or simply need a reliable one-way drop — booking is two minutes on WhatsApp or a single call to 7668570551. Fare is confirmed upfront with no surge, no hidden kilometres, and no return charges ever. Your driver arrives 10 minutes before scheduled pickup with a printed name board, helps with luggage, and gets you to Agra in under 3 hours 45 minutes door-to-door.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Agra cost?", answer: "A one-way cab from Delhi to Agra starts at ₹3,300 for a Sedan (300 km minimum billing at ₹11/km). Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll charges and state tax are extra at actual." },
      { question: "How long does Delhi to Agra take by cab?", answer: "Delhi to Agra takes 3-4 hours via the Yamuna Expressway. Early morning departures (5-6 AM) can reach in under 3 hours with minimal traffic." },
      { question: "Can I stop at Mathura on the way from Delhi to Agra?", answer: "Yes, up to 2 on-route stops are included free. Mathura and Vrindavan are popular stops on this route. Off-route detours may incur additional charges." },
      { question: "Is it cheaper to take a one-way cab or train from Delhi to Agra?", answer: "For 2-3 passengers, a one-way cab from Delhi to Agra is comparable to AC train tickets while offering door-to-door convenience, no waiting, and luggage freedom." },
      { question: "What is the best time to leave Delhi for Agra?", answer: "Leave by 5-6 AM to reach Agra by 8-9 AM, perfect for a Taj Mahal sunrise visit. Avoid leaving between 8-10 AM due to Delhi traffic." },
      { question: "Do you offer airport pickup for Delhi to Agra one-way cab?", answer: "Yes, we offer pickup from Delhi Airport (IGI Terminal 1, 2, 3), any Delhi hotel, or any address in Delhi NCR for the Delhi to Agra one-way trip." }
    ]
  },

  "delhi-to-jaipur": {
    from: "Delhi",
    to: "Jaipur",
    distance: "280 km",
    distanceNum: 280,
    time: "4-5 hours",
    highway: "NH-48 (Delhi-Jaipur Expressway)",
    ...calcFares(280),
    highlights: ["Via NH-48 Expressway", "4-5 hours comfortable ride", "Gateway to Rajasthan"],
    popularStops: ["Neemrana Fort", "Behror"],
    bestTime: "Early morning 5-6 AM or post-lunch to avoid Gurgaon traffic",
    description: `Delhi to Jaipur is the gateway route to Rajasthan and one of the busiest intercity corridors in India — with over 40,000 vehicles traversing NH-48 every single day. The 280 km Delhi-Jaipur Expressway takes you from the capital's sprawl to the Pink City's palaces in just 4–5 hours, passing through Gurgaon, Manesar, Neemrana, Behror, Shahpura, and finally into the Aravalli foothills. Our one-way cab is the smart choice when you are flying out of Jaipur, continuing to Udaipur or Jodhpur on the Rajasthan circuit, attending a wedding at a heritage haveli, or dropping off after Pushkar Fair.

The saving is substantial. A round-trip Sedan from Delhi to Jaipur costs ₹6,600 — but if you only need the onward drop, our one-way fare is ₹3,300 (at the 300 km minimum of ₹11/km). That is a direct ₹3,300 back in your budget, ideal for tourists who pair the cab with Rajasthan State Transport for the return or continue to another city. Ertiga SUV one-way is ₹4,500 and Innova Crysta is ₹5,400 — each pricing more than 40% less than traditional round-trip bookings.

The drive experience is among the best in North India. The six-lane NH-48 is access-controlled, FASTag-enabled, and has three major toll plazas (Kherki Daula, Shahjahanpur, Manoharpur) that our drivers clear seamlessly. Traffic density peaks 8–10 AM near Gurgaon and 6–8 PM on the return — which is why we recommend a 5–6 AM departure from Delhi for a mid-morning Jaipur arrival, or a 2–3 PM departure to reach before dinner. Post-lunch weekday departures usually clear Manesar in 45 minutes.

En-route stops add colour to the journey. The Neemrana Fort-Palace, 122 km from Delhi, is a popular 30-minute photo break with paid Gurgaon-style café interiors. The Amber-coloured dhabas at Behror (Bhiwadi exit) are legendary for butter-chicken, missi roti, and kadak chai — our drivers recommend Rao Dhaba Behror or Shree Rathore Dhaba. You can also request a brief stop at the Shree Khatu Shyam ji temple (15 km detour from NH-48 near Kotputli) during festival season. The last stretch from Shahpura to Jaipur cuts through rolling Aravalli country with glimpses of forts and stepwells.

Our pickup reach spans the full Delhi NCR — from IGI Airport (all three terminals with flight tracking) to New Delhi and Nizamuddin railway stations, Gurgaon Cyber City, Noida, Faridabad, and doorstep residences across Delhi. Drop point flexibility is a Triveni strength: we can drop you at Jaipur Airport with flight-timing coordination, any Jaipur hotel (Hilton, Radisson, Clarks Amer, Taj Rambagh Palace), Jaipur Junction Railway Station, or anywhere in C-Scheme, MI Road, Malviya Nagar, or Vaishali Nagar.

For vehicle selection: Sedans work well for couples and light luggage. Families of 4–6 book Ertiga for the extra boot and third row. For airport connections, multi-city Rajasthan itineraries starting with Jaipur, or premium comfort during summer heat, Innova Crysta is strongly recommended — the AC handles 45°C desert temperatures far better than sedans. Call or WhatsApp 7668570551 for an instant fare quote, and your confirmed driver reaches pickup 10 minutes early with vehicle cleaned, AC pre-chilled, and FASTag loaded for a seamless Delhi-to-Jaipur journey.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Jaipur?", answer: "One-way cab from Delhi to Jaipur starts at ₹3,300 for Sedan (300 km minimum billing at ₹11/km). Ertiga costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and state tax extra." },
      { question: "How long does Delhi to Jaipur take by car?", answer: "Delhi to Jaipur takes 4-5 hours via the NH-48 Expressway. Traffic near Gurgaon can add 30-45 minutes during peak hours." },
      { question: "Can I visit Neemrana Fort on the way to Jaipur?", answer: "Yes, Neemrana Fort is a popular en-route stop. We allow up to 2 on-route stops at no extra charge." },
      { question: "Is one-way cab available from Delhi Airport to Jaipur?", answer: "Yes, we provide airport pickup from IGI Terminal 1, 2, or 3 for your Delhi to Jaipur one-way trip. Flight tracking included." },
      { question: "Which is cheaper — one-way cab or bus from Delhi to Jaipur?", answer: "For 2+ passengers sharing a Sedan, one-way cab is comparable to Volvo bus tickets while offering door-to-door convenience and luggage space." },
      { question: "Do I need to pay toll separately for Delhi to Jaipur?", answer: "Yes, toll charges on Delhi-Jaipur Expressway (approximately ₹500-700) are paid at actual. Our driver handles toll payments." }
    ]
  },

  "delhi-to-chandigarh": {
    from: "Delhi",
    to: "Chandigarh",
    distance: "250 km",
    distanceNum: 250,
    time: "4-5 hours",
    highway: "NH-44 (GT Karnal Road / Ambala-Chandigarh Expressway)",
    ...calcFares(250),
    highlights: ["Via NH-44 & Ambala Expressway", "4-5 hours drive", "The City Beautiful awaits"],
    popularStops: ["Karnal", "Ambala"],
    bestTime: "Early morning 5-6 AM to avoid Delhi-Panipat traffic",
    description: `The Delhi to Chandigarh one-way cab is the go-to transfer for North India's most-planned city — Le Corbusier's Chandigarh, the shared capital of Punjab and Haryana. Covering 250 km on NH-44 and the Ambala-Chandigarh Expressway, this route is equally popular with business travellers heading to the Chandigarh IT Park and Sector 17 corporate offices, families dropping students at Panjab University, PGIMER or Chitkara, and tourists using Chandigarh as the launch pad for Shimla, Manali, Kasauli, or the Golden Temple in Amritsar.

The value calculation is straightforward: a round-trip Delhi-Chandigarh Sedan costs ₹5,500, but if your plan is to continue into the hills or fly out from Chandigarh Airport (IXC), you only need the onward leg. Our one-way Sedan fare is ₹3,300 (at 300 km minimum billing × ₹11/km), saving you ₹2,200 — money that covers a night at a decent Sector 22 hotel. Ertiga one-way is ₹4,500, and Innova Crysta one-way is ₹5,400, with all vehicles FASTag-enabled and AC-fitted.

The drive profile is two distinct halves. The first 180 km — Delhi to Ambala — runs along the historic Grand Trunk Road (NH-44), a 6-8 lane corridor past Panipat (refinery, Kurukshetra exit) and Karnal (dairy capital, legendary paneer dhabas). Expect 30-45 minutes of Panipat–Karnal traffic during peak hours (8–11 AM, 5–8 PM). Post Ambala, the newer Ambala-Chandigarh Expressway is a quick 70 km sprint into the city, often cleared in under an hour. Total drive time is 4–5 hours, with early morning (5–6 AM) departures reaching Chandigarh by 10 AM.

En-route dining is an event in itself on GT Road. Our drivers' top recommendations: Haveli Karnal (South Indian plus Punjabi thali, kids' play area, clean washrooms), Puran Singh Ka Dhaba near Ambala Cantt (legendary mutton curry, a Punjabi institution since 1971), or Sukhdev Dhaba at Murthal (famous for aloo paratha with white butter — the unofficial Delhi-Chandigarh pit stop). Two free 20-minute stops are included; longer halts are on request.

Our pickup network spans every corner of Delhi NCR without additional charge — IGI Airport T1/T2/T3 with live flight monitoring, New Delhi Railway Station, Nizamuddin, Anand Vihar, Gurgaon corporate towers (Cyber Hub, DLF Cyber City, Udyog Vihar), Noida and Greater Noida residential sectors, and doorstep pickup across Rohini, Janakpuri, Pitampura, Saket, and Greater Kailash. Drop flexibility in Chandigarh includes the airport (IXC), tri-city Panchkula and Mohali (no extra charge), Sector 17 & 22 hotels, PGIMER, Sector 43 ISBT, and any residential address.

Vehicle matching depends on your Chandigarh onward plan. If you are stopping here for the night and flying out next morning, a Sedan suffices. If you are continuing to Shimla or Manali immediately, the Innova Crysta makes sense — it handles hill roads far better than a sedan and keeps the family comfortable through 7+ hours of Himalayan driving. For corporate travellers and wedding guests, the Innova's premium interior is the preferred choice. Night pickups and early-morning airport drops (4–5 AM) are available 24×7 with zero surge. Call 7668570551 or WhatsApp for an instant quote — confirmed drivers arrive 10 minutes early with clean cars, sanitized interiors, and FASTag pre-loaded for the full Delhi-Chandigarh toll sequence.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Chandigarh cost?", answer: "Delhi to Chandigarh one-way cab starts at ₹3,300 for Sedan (300 km minimum at ₹11/km). Ertiga SUV is ₹4,500 and Innova Crysta is ₹5,400. Toll and tax extra." },
      { question: "How long is the drive from Delhi to Chandigarh?", answer: "The Delhi to Chandigarh drive takes 4-5 hours via NH-44. Early morning trips avoid traffic congestion near Panipat and Karnal." },
      { question: "Can I continue from Chandigarh to Shimla in the same cab?", answer: "For a one-way cab, the booking is Delhi to Chandigarh only. You can book a separate Chandigarh to Shimla one-way cab for the onward journey." },
      { question: "Is night travel available from Delhi to Chandigarh?", answer: "Yes, we operate 24/7 including late night and early morning departures. Night travel is comfortable on NH-44." },
      { question: "What vehicles are available for Delhi to Chandigarh one-way?", answer: "We offer Sedan (Swift Dzire/Etios), Ertiga (7-seater), and Innova Crysta (7-seater premium) for Delhi to Chandigarh one-way trips." },
      { question: "Can I get picked up from Delhi Airport for Chandigarh?", answer: "Yes, airport pickup from any terminal at IGI Airport is available. Our driver will meet you at arrivals with a name board." }
    ]
  },

  "delhi-to-haridwar": {
    from: "Delhi",
    to: "Haridwar",
    distance: "230 km",
    distanceNum: 230,
    time: "5-6 hours",
    highway: "NH-334 via Meerut Expressway",
    ...calcFares(230),
    highlights: ["Via Delhi-Meerut Expressway", "5-6 hours spiritual journey", "Gateway to Char Dham"],
    popularStops: ["Meerut", "Muzaffarnagar", "Roorkee"],
    bestTime: "Early morning 4-5 AM for Ganga Aarti timing",
    description: `Delhi to Haridwar is one of India's most travelled spiritual corridors — a 230 km pilgrimage route from the capital to the Ganges' first major descent into the plains. Haridwar, literally 'the gateway to God', is among Hinduism's seven holiest cities (Sapta Puri) and serves as the launching point for Char Dham Yatra, Kanwar Yatra, and the Kumbh Mela. Our one-way cab is the preferred choice for devotees attending the evening Ganga Aarti at Har Ki Pauri, for yoga seekers continuing to Rishikesh, and for families making a multi-day itinerary through Uttarakhand.

The one-way economics are compelling. Round-trip Delhi-Haridwar Sedan is ₹5,060, but our one-way is ₹3,300 — saving ₹1,760 that you can redirect toward temple donations, a ropeway ticket to Mansa Devi, or a stay at a Kankhal ashram. Ertiga at ₹4,500 and Innova at ₹5,400 offer similar half-price savings. This matters especially during Kanwar Yatra (July), when round-trip availability spikes 30-50% — one-way bookings are exempt from this surge.

The drive uses the newly opened Delhi-Meerut Expressway for the first 60 km (a spectacular 14-lane stretch that gets you to Meerut in 45 minutes), then merges onto NH-334 past Muzaffarnagar and Roorkee into Haridwar. Total drive time is 5–6 hours, with the middle stretch (Muzaffarnagar to Roorkee) being the most variable due to sugar-mill truck traffic. Our recommendation: depart Delhi between 4:30–5:30 AM to reach Haridwar by 10 AM for a morning temple visit, or 12–1 PM to arrive in time for the 6:30 PM Ganga Aarti at Har Ki Pauri.

Stops on this route are almost a tradition. Cheetal Grand near Khatauli is the region's most famous highway restaurant — a full South Indian menu, clean washrooms, and a large parking bay make it the default halfway break. Our drivers also know the lesser-known Zaika Amrik Sukhdev at Murthal for Punjabi classics, and the Roorkee IIT roundabout dhabas for quick tea. Two free stops are included; longer halts are at the driver's discretion if travel time permits.

Our Delhi NCR pickup spans IGI Airport (all three terminals with flight and PNR tracking — important for overseas devotees landing for darshan), New Delhi Railway Station, Anand Vihar ISBT for those arriving from eastern UP, Gurgaon and Noida residences, and any doorstep in Delhi proper. For ashram-specific drops, we coordinate with Kankhal, Jwalapur, Bhupatwala, Shantikunj, and Patanjali Yogpeeth addresses. Many travellers extend the drop 25 km further to Rishikesh — we can do that as a single Delhi-to-Rishikesh booking instead (₹3,300 same fare since under 300 km).

Vehicle recommendations: Sedan for 2-3 people on a day trip. Ertiga is the sweet spot for families of 5-6 with puja thalis, camping gear, or ashram stays needing heavier luggage. Innova Crysta is chosen by senior citizens, medical travellers attending AIIMS-Rishikesh, and groups doing the full Char Dham pre-trip from Haridwar (our drivers are experienced on all Char Dham routes for onward chartering). Book on 7668570551 for instant confirmation — and during peak Kanwar season (last week of July), book 3-4 days in advance to lock in best rates.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Haridwar?", answer: "One-way cab from Delhi to Haridwar starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra at actual." },
      { question: "How long does Delhi to Haridwar take by cab?", answer: "Delhi to Haridwar takes 5-6 hours by cab. The Delhi-Meerut Expressway has reduced travel time significantly." },
      { question: "Can I stop at Rishikesh on the way to Haridwar?", answer: "Rishikesh is 25 km beyond Haridwar. You can book Delhi to Rishikesh instead, or add Rishikesh as an on-route extension." },
      { question: "Is one-way cab available during Kanwar Yatra season?", answer: "Yes, we operate during Kanwar Yatra with experienced drivers who know alternate routes during road diversions." },
      { question: "Can I book a return one-way cab from Haridwar to Delhi?", answer: "Yes, we offer Haridwar to Delhi one-way cab at the same rates. Book for any date and time." },
      { question: "What is the best time to leave Delhi for Haridwar?", answer: "Leave by 4-5 AM to reach Haridwar by 9-10 AM. This gives you the full day for temple visits and evening Ganga Aarti." }
    ]
  },

  "delhi-to-shimla": {
    from: "Delhi",
    to: "Shimla",
    distance: "350 km",
    distanceNum: 350,
    time: "7-8 hours",
    highway: "NH-44 via Chandigarh, then NH-5",
    ...calcFares(350),
    highlights: ["Via Chandigarh & NH-5 hill road", "7-8 hours scenic drive", "Queen of Hills destination"],
    popularStops: ["Chandigarh", "Pinjore Gardens", "Solan"],
    bestTime: "Early morning 4-5 AM to reach before dark on hill roads",
    description: `The Delhi to Shimla one-way cab is the classic weekend escape to the Queen of Hills — 350 km from the sweltering capital plains to the pine-scented Himalayan ridge at 2,276 m elevation. Shimla was the British summer capital from 1864 to 1939, and that colonial charm survives in The Mall's gothic Christ Church, the pedestrian-only Ridge, the Gaiety Theatre, and the UNESCO-listed Kalka-Shimla narrow-gauge toy train. Our one-way cab is the preferred transfer for Delhi weekenders, families heading to Kufri for snow, honeymooners choosing Mashobra resorts, and group trips continuing to Kinnaur, Spiti, or the Great Himalayan National Park.

The cost saving is particularly meaningful on Shimla routes since round-trip fares run ₹7,700 for a Sedan — our one-way is ₹3,850 (350 km × ₹11/km), a straight ₹3,850 saving. If you plan to stay 3+ nights in Shimla and return by train or bus, or continue deeper into Himachal, one-way is the obvious choice. Ertiga at ₹5,250 and Innova Crysta at ₹6,300 one-way are equally half-priced versus round trips.

The journey is two very different drives stitched together. First, 280 km of plains via NH-44 from Delhi to Chandigarh through Panipat, Karnal, and Ambala — 4–5 hours depending on traffic. Then, 100 km of hill driving on the sinuous NH-5 from Chandigarh to Shimla via Pinjore, Parwanoo (the first 'Himachal welcome'), Solan (brewery town), and Kandaghat, gaining roughly 2,100 m of altitude through pine and deodar forests. The hill section alone takes 3–3.5 hours and requires concentration — which is exactly why we assign this route only to drivers with 5+ years of Himachal hill experience. Total door-to-door drive time is 7–8 hours, and we strongly recommend a 4:30–5:30 AM Delhi departure so the hill climb is done in daylight.

Stops along the way break up the long drive nicely. The Murthal GT Road dhabas (Sukhdev, Amrik Sukhdev) are the go-to breakfast stop for butter-loaded aloo parathas. For a unique break, the Pinjore (Yadavindra) Gardens at the Himachal-Haryana border — a 17th-century Mughal terraced garden — takes 30 minutes. On the hill section, the Timber Trail ropeway at Parwanoo, the Kasauli turn-off for a quick ridge view, and the Barog tunnel photo stop are all popular. Our drivers typically factor in one meal stop and one tea stop on this 7-hour journey.

Pickup across Delhi NCR covers airport terminals with flight-tracking (important for international tourists landing for Himachal holidays), New Delhi and Nizamuddin railway stations for train-cab combo travellers, Gurgaon and Noida residences, and all central Delhi hotels. Shimla drop is flexible — The Mall Road (Scandal Point lift drop, as vehicles cannot enter the pedestrian zone), any Mall or Cart Road hotel, Kufri/Mashobra resorts up to 20 km beyond Shimla town (no extra charge on this route), and the Shimla railway station for onward toy-train departures.

For vehicle selection, the Innova Crysta is the most-requested upgrade on this route. The extra horsepower matters on the 100 km of continuous hill driving, the ground clearance handles post-monsoon road repair stretches, and the AC/heater combo is crucial for altitude variations from 30°C Chandigarh to 10°C Shimla. Families and senior citizens strongly prefer Innova; the Sedan is fine for 2 adults with moderate luggage. Winter travellers (December–February) should request tyre chains — included free on request when snow is forecast. Book on 7668570551 or WhatsApp for an instant quote; peak-season weekends (April–June, September–October, December last week) should be booked 5–7 days in advance.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Shimla?", answer: "Delhi to Shimla one-way cab costs ₹3,850 for Sedan (350 km at ₹11/km). Ertiga is ₹5,250 and Innova Crysta is ₹6,300. Toll and tax extra." },
      { question: "How long does Delhi to Shimla take by car?", answer: "Delhi to Shimla takes 7-8 hours by cab. The plains section (Delhi-Chandigarh) takes 4-5 hours, and the hill section (Chandigarh-Shimla) takes 3 hours." },
      { question: "Is the road from Delhi to Shimla safe?", answer: "Yes, the Delhi-Chandigarh highway is excellent. The Chandigarh-Shimla hill road is well-maintained. Our drivers are experienced on hill routes." },
      { question: "Can I stop at Chandigarh on the way to Shimla?", answer: "Yes, Chandigarh is an en-route stop. You can take a break at Rock Garden or Sukhna Lake before continuing to Shimla." },
      { question: "Is Innova better than Sedan for Delhi to Shimla?", answer: "Innova Crysta is recommended for families with heavy luggage as it handles hill roads better. Sedan works well for 2-3 passengers with light luggage." },
      { question: "Do you provide one-way cab from Delhi to Shimla in winter?", answer: "Yes, we operate year-round including winter. Our drivers carry chains for snow conditions and know alternate routes." }
    ]
  },

  "delhi-to-manali": {
    from: "Delhi",
    to: "Manali",
    distance: "540 km",
    distanceNum: 540,
    time: "12-14 hours",
    highway: "NH-44 to Chandigarh, NH-21 to Manali",
    ...calcFares(540),
    highlights: ["Via Chandigarh & Kullu Valley", "12-14 hours epic road trip", "Adventure capital of India"],
    popularStops: ["Chandigarh", "Bilaspur", "Sundernagar", "Kullu"],
    bestTime: "Night departure 9-10 PM or early morning 4 AM",
    description: `Delhi to Manali is one of India's great road trips — 540 km from the capital's plains to the Kullu Valley's snow-capped peaks, rising from 216 m elevation to Manali's 2,050 m over the course of 12–14 hours. Manali is the undisputed adventure capital of India and the launch pad for Rohtang Pass, Leh-Ladakh, Spiti Valley, Hampta Pass trek, and the Parvati Valley's offbeat hamlets (Kasol, Tosh, Kheerganga). Our one-way cab service makes the inbound trip effortless — ideal for travellers staying 4+ nights, continuing to Leh by shared taxi, returning by the HRTC Volvo bus, or flying out from Bhuntar Airport (KUU).

This is the route where one-way savings are largest in absolute rupees. A round-trip Sedan is ₹11,880, but our one-way is ₹5,940 (540 km × ₹11/km) — a massive ₹5,940 saving. Ertiga one-way is ₹8,100 (vs ₹16,200 round trip), and Innova Crysta one-way is ₹9,720 (vs ₹19,440 round trip). For most Manali travellers, this saving covers 2 nights at a mid-range Old Manali homestay.

The drive has three distinct zones. Delhi to Chandigarh (280 km, 4–5 hours) on NH-44 through Panipat, Karnal, and Ambala. Chandigarh to Bilaspur (140 km, 3 hours) on NH-205 through Kiratpur and Swarghat — the landscape shifts from plains to foothills. Bilaspur to Manali (120 km, 4–5 hours) on NH-21 through the Beas River gorge, Sundernagar, Mandi, Kullu, Patlikuhl, and finally Manali town — the scenery is spectacular and the roads winding. Travel time swings significantly: a weekday offpeak drive can be 11 hours, while weekend summer traffic stretches to 14–15 hours. Monsoon landslide risk (July-September) adds unpredictability — we monitor road status live.

Most seasoned Manali travellers prefer an overnight departure: 8–10 PM from Delhi, arriving Manali 7–9 AM. You sleep through the monotonous plains, wake up to the Beas River in the morning, and start your Manali day at hotel check-in. Our overnight routes use the same driver for the full journey — no halfway driver swap. Stops are strategic: one dinner break at Murthal (GT Road dhabas), one tea break at Swarghat (panoramic Sutlej valley view), one sunrise chai at Mandi or Kullu (apple juice in season), and a mandatory 10-minute leg-stretch at the Pandoh Dam viewpoint.

Pickup anywhere in Delhi NCR is included free — IGI Airport all terminals (flight tracking for Delhi-landing international tourists who want to push straight to Manali), Delhi's railway and ISBT stations, Gurgaon, Noida, Greater Noida, Faridabad, and any residence. Manali drop options include the Manali Volvo Bus Stand, Mall Road hotels (car park drop, as the main road has restrictions), Old Manali guesthouses (narrow lanes — we drop at the main bridge), Vashisht, Solang Valley resorts up to 13 km beyond Manali (no extra charge), and Naggar's heritage hotels.

Vehicle selection on this route is almost always Innova Crysta or Ertiga — we actively advise against Sedan for any passenger over 50, families with children, or anyone carrying heavy luggage. The hill sections require ground clearance, strong AC for summer plains, and a heater for cold Kullu nights. Innova also offers the smoothest ride quality over the 500+ km, with enough boot space for two large suitcases per passenger. Winter travellers (December–March) must book Innova with snow chains — included free on request. Monsoon travellers should book with flexible cancellation (we allow free cancellation within 24 hours during landslide alerts). Call 7668570551 or WhatsApp for an instant quote; peak season (May-June honeymoon, Dec 20 – Jan 5 new year, first snowfall weekend) should be booked 10-14 days in advance.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Manali?", answer: "Delhi to Manali one-way cab costs ₹5,940 for Sedan (540 km at ₹11/km). Ertiga is ₹8,100 and Innova Crysta is ₹9,720. Toll extra." },
      { question: "How long does Delhi to Manali take by cab?", answer: "Delhi to Manali takes 12-14 hours by cab depending on road conditions and stops. Night travel can be faster due to less traffic." },
      { question: "Is night travel recommended for Delhi to Manali?", answer: "Many travellers prefer departing Delhi at 9-10 PM to arrive in Manali by morning. Our drivers are experienced in night driving on this route." },
      { question: "Which vehicle is best for Delhi to Manali one-way trip?", answer: "Innova Crysta or Ertiga is recommended for comfort on the long journey. Sedan works for budget-conscious travellers with light luggage." },
      { question: "Can I stop at Chandigarh on the Delhi to Manali route?", answer: "Yes, Chandigarh is a natural break point. You can stop for meals or a short rest before continuing to Manali." },
      { question: "Is Delhi to Manali road open in winter?", answer: "Yes, the Delhi-Manali highway is open year-round. However, road conditions may vary during heavy snowfall. Our drivers carry chains." }
    ]
  },

  "delhi-to-dehradun": {
    from: "Delhi",
    to: "Dehradun",
    distance: "260 km",
    distanceNum: 260,
    time: "5-6 hours",
    highway: "NH-334 via Meerut & Haridwar bypass",
    ...calcFares(260),
    highlights: ["Via Delhi-Meerut Expressway", "5-6 hours to Doon Valley", "Gateway to Mussoorie & Uttarakhand"],
    popularStops: ["Meerut", "Roorkee", "Haridwar bypass"],
    bestTime: "Early morning 5-6 AM for a comfortable daytime arrival",
    description: `The Delhi to Dehradun one-way cab is a 260 km northward journey from the capital plains to the Doon Valley — the natural bowl between the Himalayas, the Shivaliks, and the Yamuna and Ganga rivers. Dehradun is Uttarakhand's capital, home to The Doon School, Welham Girls, IMA (Indian Military Academy), UPES, FRI, ONGC headquarters, and the Ram Rai Darbar. It is also the primary gateway to Mussoorie (just 35 km further up), Rajaji National Park, and the emerging Char Dham by road. Our one-way cab is chosen daily by students' families, government officials, hill-station weekenders, and monsoon travellers seeking the Doon Valley's green respite.

The saving is ₹2,200 per booking — our one-way Sedan is ₹3,300 versus ₹5,060 round trip. Ertiga at ₹4,500 and Innova Crysta at ₹5,400 are similarly half-priced. For parents dropping students at Dehradun boarding schools (Doon School, Welham Boys, Welham Girls, Col. Brown, Ann Mary), or for graduating students moving luggage one-way, these fares are often 30–40% below app-cab surge pricing during admission seasons.

The drive uses the recently opened Delhi-Meerut Expressway for the first 60 km — a 14-lane expressway that clears Delhi NCR in under 45 minutes. You then continue on NH-334 through Muzaffarnagar, Roorkee, and into the Mohand forest section where the road ascends gently into the Doon Valley past the Rajaji National Park boundary. The final 20 km into Dehradun winds through the Mohand ghats — a pleasant forested climb that drops you into the Doon bowl. Total drive time is 5–6 hours; early-morning (5–6 AM) departures reach Dehradun by 11 AM, perfect for student drop-offs or a morning Mussoorie onward trip.

Stops that seasoned travellers enjoy on this route: Cheetal Grand Khatauli (the region's premier highway restaurant with a clean children's play area), the Zaika Amrik Sukhdev at Murthal for breakfast parathas, or the Roorkee IIT roundabout for a tea break. Two free stops are included. Many families also request a brief stop at Rishikesh on the way (15 km detour) — we charge a nominal detour fee if going significantly off-route.

Pickup covers Delhi NCR doorstep — IGI Airport T1, T2, T3 with live flight tracking (important for NRIs picking up boarding children), all Delhi railway stations, ISBT Kashmiri Gate and Anand Vihar, Gurgaon and Noida residences, plus Faridabad and Ghaziabad. Drop flexibility in Dehradun includes Jolly Grant Airport (DED — for onward flight connections), Dehradun Railway Station, ISBT, all school/college campuses, Rajpur Road and Clock Tower hotels (The Pacific, Madhuban), and any address in Mussoorie if extended (additional hill charge applies).

For vehicle selection, the Sedan works well for 2-3 passengers and standard luggage. Families with 2-3 school trunks, guitars, and bedding materials for boarding school drops should choose Ertiga or Innova Crysta. For onward Mussoorie continuation, Innova is recommended for the 35 km hill section. During Char Dham season (May–October), we run dozens of Delhi-Dehradun one-ways daily as pilgrims connect with the onward Char Dham chartered services. Call 7668570551 or WhatsApp for an instant fare confirmation. Boarding school peak weeks (April 1-15, July 15-30) see highest demand — book 5–7 days in advance to lock in best rates.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Dehradun?", answer: "Delhi to Dehradun one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga costs ₹4,500 and Innova costs ₹5,400." },
      { question: "How long does Delhi to Dehradun take by cab?", answer: "The drive takes 5-6 hours via Delhi-Meerut Expressway and NH-334. Early morning trips are fastest." },
      { question: "Can I continue to Mussoorie from Dehradun?", answer: "Mussoorie is 35 km from Dehradun. You can book a separate Dehradun to Mussoorie cab, or request an extended drop at additional cost." },
      { question: "Is airport pickup available for Delhi to Dehradun?", answer: "Yes, we provide pickup from Delhi Airport (IGI Terminal 1, 2, 3) for Dehradun-bound one-way trips." },
      { question: "Which route does the cab take from Delhi to Dehradun?", answer: "The cab takes Delhi-Meerut Expressway, then NH-334 through Muzaffarnagar, Roorkee, bypassing Haridwar, to Dehradun." },
      { question: "Is one-way cab cheaper than flight for Delhi to Dehradun?", answer: "For 2-3 passengers sharing, one-way cab is often cheaper than combined flight tickets plus airport transfers, with door-to-door convenience." }
    ]
  },

  "delhi-to-amritsar": {
    from: "Delhi",
    to: "Amritsar",
    distance: "450 km",
    distanceNum: 450,
    time: "7-8 hours",
    highway: "NH-44 (GT Road) via Ambala & Ludhiana",
    ...calcFares(450),
    highlights: ["Via NH-44 Grand Trunk Road", "7-8 hours to the Golden Temple city", "Punjab heartland drive"],
    popularStops: ["Karnal", "Ambala", "Ludhiana", "Jalandhar"],
    bestTime: "Early morning 4-5 AM to arrive before evening Wagah Border ceremony",
    description: `Delhi to Amritsar is a 450 km drive along India's most historic highway — the Grand Trunk Road, now modernised as NH-44, which once connected Kabul to Chittagong under the Mauryans and then the Mughals. Today it is a six- to eight-lane corridor through the heart of Punjab's golden triangle: Karnal, Ambala, Ludhiana, and Jalandhar. Amritsar is the spiritual centre of Sikhism — home to Sri Harmandir Sahib (the Golden Temple) and Jallianwala Bagh — and the doorstep to the emotional Wagah Border retreat ceremony. Our one-way cab is the choice of pilgrims, food tourists, wedding families, and history buffs who do not need the return leg.

A round-trip Sedan to Amritsar is ₹9,900, but our one-way is ₹4,950 — a ₹4,950 saving that covers a night's stay at the Golden Temple Sarai, a full Punjabi food crawl through Kesar Da Dhaba and Gian Chand Lassi Wala, and the 30-km round-trip to Wagah. Ertiga at ₹6,750 and Innova at ₹8,100 offer equivalent savings. For pilgrims attending Vaisakhi, Guru Nanak Jayanti, or Guru Gobind Singh Jayanti, one-way bookings are exempt from round-trip peak pricing.

The drive is among the smoothest intercity routes in India because NH-44 is a national-priority corridor. You clear Delhi in 60 minutes via the Dhaula Kuan–Mukarba Chowk axis, hit GT Road proper at Sonipat, and then cruise through Panipat (refineries, historical battlefield), Karnal (dairy capital, paneer dhabas), Kurukshetra exit (Mahabharata site), Ambala (cantonment town), Ludhiana (manufacturing hub), Phagwara, and Jalandhar before reaching Amritsar. Total drive time is 7–8 hours; early-morning (4–5 AM) departures reach Amritsar by 12 noon — perfect for a Golden Temple langar lunch followed by the 4 PM Wagah ceremony.

This route has India's most famous highway dhabas. Our drivers' short list: Sukhdev Dhaba and Amrik Sukhdev at Murthal (iconic aloo paratha breakfast), Haveli Karnal (clean washrooms, kids' play area, a full South Indian menu — ideal for families), Puran Singh Ka Dhaba at Ambala (legendary mutton curry, a Punjabi institution since 1971), and Rangla Punjab on the Jalandhar bypass (full Punjabi thali with butter-loaded breads). Two free stops are included; families often use one for a full meal and one for a quick washroom-and-tea break.

Our pickup covers all Delhi NCR — IGI Airport T1/T2/T3 with live flight tracking (essential for overseas Sikh diaspora arriving for darshan), New Delhi and Hazrat Nizamuddin railway stations, Anand Vihar ISBT, Gurgaon, Noida, Faridabad, Ghaziabad, and any residence. Amritsar drops include Sri Guru Ram Dass Ji International Airport (ATQ, for onward Dubai/Toronto/London flights common with diaspora travellers), Amritsar Junction Railway Station, all Hall Bazaar and Queens Road hotels near the Golden Temple, and extended drops to Wagah Border, Khadoor Sahib, or Anandpur Sahib on request.

For vehicle selection on this long journey: Sedan works for 2–3 adults with standard luggage. Families of 5–6, elderly pilgrims, or group travellers should choose Ertiga or Innova Crysta for the 8-hour comfort. Innova is strongly recommended if you are continuing to Wagah the same evening or doing a same-day Amritsar–Anandpur Sahib–Chandigarh chain. Night travel is safe on NH-44 — the highway is well-lit, patrolled, and dhabas are open 24×7 — and many travellers prefer a 10 PM Delhi departure for a 6 AM Golden Temple pre-dawn darshan arrival. Call 7668570551 for an instant quote; during Vaisakhi week (April 13-15) and Gurpurab, book 7-10 days in advance as this route is heavily utilised.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Amritsar?", answer: "Delhi to Amritsar one-way cab costs ₹4,950 for Sedan (450 km at ₹11/km). Ertiga is ₹6,750 and Innova Crysta is ₹8,100. Toll extra." },
      { question: "How long does Delhi to Amritsar take by cab?", answer: "Delhi to Amritsar takes 7-8 hours via NH-44. The highway is in excellent condition with minimal traffic outside peak hours." },
      { question: "Can I visit Wagah Border if I take a morning cab from Delhi?", answer: "Yes, leave Delhi by 4-5 AM to reach Amritsar by noon. The Wagah Border ceremony starts at 4-5 PM, giving you plenty of time." },
      { question: "Is overnight travel possible for Delhi to Amritsar?", answer: "Yes, we offer late-night departures. The NH-44 is well-lit and safe for night travel. Reach Amritsar by early morning." },
      { question: "Which vehicle is recommended for Delhi to Amritsar?", answer: "For families, Ertiga or Innova is recommended for comfort on the 7-8 hour journey. Sedan works well for 2-3 passengers." },
      { question: "Can I stop for meals on the Delhi to Amritsar route?", answer: "Absolutely. The GT Road has famous dhabas. Murthal (near Delhi), Karnal, and the Amritsar highway dhabas serve legendary Punjabi food." }
    ]
  },

  "delhi-to-lucknow": {
    from: "Delhi",
    to: "Lucknow",
    distance: "550 km",
    distanceNum: 550,
    time: "8-9 hours",
    highway: "Agra-Lucknow Expressway via Yamuna Expressway",
    ...calcFares(550),
    highlights: ["Via Yamuna + Agra-Lucknow Expressway", "8-9 hours on premium expressways", "City of Nawabs"],
    popularStops: ["Agra bypass", "Kannauj", "Unnao"],
    bestTime: "Early morning 4-5 AM or night departure",
    description: `Delhi to Lucknow by one-way cab covers 550 km through some of India's finest expressways — the Yamuna Expressway and the Agra-Lucknow Expressway. The City of Nawabs, known for its rich Mughal heritage, Lucknowi cuisine, and gracious culture, is a major business and cultural centre. Our one-way cab is ideal for travellers relocating, attending events, or those who prefer the comfort of a private car over trains and flights.

The 8-9 hour drive is smooth on the high-speed expressways. You bypass Agra entirely and connect to the Agra-Lucknow Expressway, making this one of the fastest road routes between the two cities. Our drivers are well-versed in expressway protocols. Book from ₹6,050 for a Sedan one-way trip.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Lucknow?", answer: "Delhi to Lucknow one-way cab costs ₹6,050 for Sedan (550 km at ₹11/km). Ertiga is ₹8,250 and Innova is ₹9,900. Toll extra." },
      { question: "How long does Delhi to Lucknow take by cab?", answer: "Delhi to Lucknow takes 8-9 hours via the Yamuna Expressway and Agra-Lucknow Expressway combination." },
      { question: "Is driving to Lucknow faster than the train?", answer: "The cab takes 8-9 hours versus 6-8 hours by Shatabdi/Tejas train. However, the cab offers door-to-door convenience and flexibility." },
      { question: "Can I make stops on the Delhi to Lucknow route?", answer: "Yes, up to 2 on-route stops are allowed. The expressways have rest areas with food courts and fuel stations." },
      { question: "Is night travel safe for Delhi to Lucknow?", answer: "Yes, both the Yamuna and Agra-Lucknow Expressways are well-lit, patrolled, and safe for night travel." },
      { question: "Do you offer airport pickup for this route?", answer: "Yes, we pick up from Delhi Airport (any terminal) or any address in Delhi NCR for the one-way trip to Lucknow." }
    ]
  },

  "delhi-to-varanasi": {
    from: "Delhi",
    to: "Varanasi",
    distance: "800 km",
    distanceNum: 800,
    time: "12-14 hours",
    highway: "Yamuna Expressway + Agra-Lucknow Expressway + Purvanchal Expressway",
    ...calcFares(800),
    highlights: ["Via triple expressway route", "12-14 hours to the spiritual capital", "Oldest living city in the world"],
    popularStops: ["Agra bypass", "Lucknow bypass", "Sultanpur"],
    bestTime: "Night departure 8-9 PM to arrive by morning for Ganga Aarti",
    description: `Delhi to Varanasi is an epic 800 km one-way cab journey to the spiritual capital of India. Varanasi (Kashi/Benaras), the oldest continuously inhabited city in the world, is a must-visit for pilgrims, spiritual seekers, and culture enthusiasts. The route now uses three world-class expressways — Yamuna, Agra-Lucknow, and Purvanchal — making this long drive smoother than ever before.

Our one-way cab service saves you significantly compared to round-trip bookings. The 12-14 hour drive is best done as an overnight journey, departing Delhi at 8-9 PM and arriving in Varanasi by morning — just in time for the mesmerizing Ganga Aarti. Our professional drivers handle the long distance with scheduled rest breaks. Book from ₹8,800 for a Sedan.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Varanasi cost?", answer: "Delhi to Varanasi one-way cab costs ₹8,800 for Sedan (800 km at ₹11/km). Ertiga is ₹12,000 and Innova is ₹14,400. Toll extra." },
      { question: "How long does Delhi to Varanasi take by cab?", answer: "Delhi to Varanasi takes 12-14 hours by cab via the expressway route. Night travel is recommended for this distance." },
      { question: "Is driving Delhi to Varanasi better than flying?", answer: "Flying takes 1.5 hours versus 12-14 by road. However, for families with luggage or those who dislike flying, the overnight cab ride is comfortable and cost-effective for 3-4 passengers." },
      { question: "Can the driver take a rest break on this long route?", answer: "Yes, our drivers take planned rest breaks at expressway rest areas. For routes over 500 km, we may assign a co-driver for safety." },
      { question: "What is the recommended vehicle for Delhi to Varanasi?", answer: "Innova Crysta is strongly recommended for the 800 km journey — more legroom, better suspension, and greater comfort for long hours." },
      { question: "Is Purvanchal Expressway used for this route?", answer: "Yes, we use the Purvanchal Expressway (connecting Lucknow to eastern UP) which has significantly reduced travel time to Varanasi." }
    ]
  },

  "agra-to-delhi": {
    from: "Agra",
    to: "Delhi",
    distance: "230 km",
    distanceNum: 230,
    time: "3-4 hours",
    highway: "Yamuna Expressway",
    ...calcFares(230),
    highlights: ["Via Yamuna Expressway", "3-4 hours smooth ride", "Perfect after Taj Mahal visit"],
    popularStops: ["Mathura", "Vrindavan"],
    bestTime: "After lunch 1-2 PM post Taj Mahal morning visit, or evening 5-6 PM",
    description: `The Agra to Delhi one-way cab is the perfect way to return to the capital after your Taj Mahal visit, wedding attendance, or business trip in Agra. Covering 230 km via the Yamuna Expressway, this 3-4 hour ride is smooth, comfortable, and saves you 50% compared to booking a round-trip from Delhi.

Many tourists visit Agra for a day trip and need a reliable cab back to Delhi — to catch a flight, train, or simply return home. Our one-way cab service ensures you do not pay for an empty return vehicle. Professional drivers, clean AC cars, and transparent pricing make this the smartest way to travel. Book from just ₹3,300 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Agra to Delhi?", answer: "Agra to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga costs ₹4,500 and Innova costs ₹5,400." },
      { question: "Can you drop me at Delhi Airport from Agra?", answer: "Yes, we provide direct Agra to Delhi Airport drops at IGI Terminal 1, 2, or 3. Our drivers monitor flight timings for punctual drops." },
      { question: "How long does Agra to Delhi take?", answer: "Agra to Delhi takes 3-4 hours via the Yamuna Expressway. Allow extra time during evening rush hours in Delhi." },
      { question: "Can I visit Mathura or Vrindavan on the way back to Delhi?", answer: "Yes, Mathura and Vrindavan are on-route stops from Agra to Delhi. Up to 2 stops are included at no extra charge." },
      { question: "What time should I leave Agra to reach Delhi Airport for an evening flight?", answer: "For an 8 PM flight, leave Agra by 3 PM. This gives you 4 hours for travel plus 1 hour buffer for check-in." },
      { question: "Is this service available on weekends and holidays?", answer: "Yes, we operate 365 days including weekends, holidays, and festival seasons. Advance booking recommended during peak periods." }
    ]
  },

  "agra-to-jaipur": {
    from: "Agra",
    to: "Jaipur",
    distance: "240 km",
    distanceNum: 240,
    time: "4-5 hours",
    highway: "NH-21 via Bharatpur & Dausa",
    ...calcFares(240),
    highlights: ["Via Bharatpur & Fatehpur Sikri", "4-5 hours Golden Triangle leg", "Pink City from Taj City"],
    popularStops: ["Fatehpur Sikri", "Bharatpur Bird Sanctuary", "Dausa"],
    bestTime: "Morning 7-8 AM after early Taj Mahal visit",
    description: `Agra to Jaipur is the classic middle leg of India's Golden Triangle — the tourist circuit that every first-time visitor to India completes: Delhi → Agra → Jaipur → Delhi. The 240 km drive from the Taj Mahal to the Pink City passes through some of India's richest heritage territory — Fatehpur Sikri (Akbar's abandoned red sandstone capital and a UNESCO site), Bharatpur's Keoladeo National Park (a Ramsar wetland with over 370 bird species), and finally into Rajasthan's Aravalli country. Our one-way cab is the preferred transfer for international tourists on packaged circuits, photographers doing the monuments trail, and travellers continuing to Udaipur or Jodhpur after Jaipur.

The saving is real: a round-trip Sedan is ₹5,280, our one-way is ₹3,300 — a ₹1,980 saving that covers a decent Jaipur heritage hotel upgrade. Ertiga one-way is ₹4,500 and Innova is ₹5,400. If you are doing the Golden Triangle as three separate one-way cabs (Delhi→Agra, Agra→Jaipur, Jaipur→Delhi), you save almost ₹10,000 versus an equivalent round-trip package.

The drive takes 4–5 hours via NH-21 through Bharatpur and Dausa. The road is mostly 4-lane with a few 2-lane stretches near Bharatpur. Our drivers advise leaving Agra by 8–9 AM after your morning Taj Mahal visit — you reach Jaipur by 1–2 PM in time for lunch at a heritage restaurant (Chokhi Dhani's midday thali or 1135 AD at Amer Fort) and an afternoon at City Palace, Hawa Mahal, or Jantar Mantar. The 9 AM departure also avoids the midday Rajasthan heat in summer.

Stops on this route are legitimate attractions, not just chai breaks. Fatehpur Sikri (40 km from Agra, 1 hour visit) — Buland Darwaza, Jama Masjid, Salim Chishti's tomb; your driver parks at the base and a 10-minute shared tempo takes you up. Bharatpur Keoladeo (65 km from Agra, optional 2-hour visit) — cycle-rickshaw or walk through the wetland; best November–February for migratory birds. Abhaneri Stepwell (near Dausa, 30 min detour) — the spectacular Chand Baori stepwell featured in The Fall and The Dark Knight Rises. We charge a small detour fee for Abhaneri; Fatehpur Sikri and Bharatpur are on-route and included free.

Pickup across Agra is doorstep: Agra Cantt Railway Station, Agra Fort Station, Taj Mahal East and West Gate (post sunrise visit), all Tajganj and Fatehabad Road hotels (ITC Mughal, Jaypee Palace, Trident, Radisson), Sadar Bazaar and MG Road addresses, and Agra Airport. Jaipur drops cover Sanganer Airport (for onward flights to Udaipur, Mumbai, Dubai), Jaipur Junction Railway Station, all MI Road and C-Scheme hotels (Hilton, Radisson, Clarks Amer, Rambagh Palace, Oberoi Rajvilas), and the Amer Fort area if you are going directly to sightseeing.

Vehicle recommendations: Sedan is fine for 2-3 tourists with standard luggage. International tourists on Golden Triangle tours typically choose Innova Crysta for premium comfort on this 10-day touring format. Families with 5-6 members doing Fatehpur Sikri + Bharatpur stops should pick Ertiga or Innova for the extra space. For summer (April–June when Rajasthan hits 45°C), Innova's powerful AC is worth the upgrade. Book on 7668570551 for instant confirmation; peak Golden Triangle season is October to March, with weekends requiring 3-5 day advance booking.`,
    faqs: [
      { question: "What is the one-way cab fare from Agra to Jaipur?", answer: "Agra to Jaipur one-way cab costs ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra." },
      { question: "Can I stop at Fatehpur Sikri on the way?", answer: "Yes, Fatehpur Sikri is 40 km from Agra on the Agra-Jaipur road. It is a popular en-route stop and we allow up to 2 on-route stops free." },
      { question: "How long does Agra to Jaipur take by cab?", answer: "Agra to Jaipur takes 4-5 hours via NH-21 through Bharatpur and Dausa." },
      { question: "Is this part of the Golden Triangle tour?", answer: "Yes, Agra to Jaipur is the second leg of the famous Delhi-Agra-Jaipur Golden Triangle. Many tourists complete this circuit using one-way cabs." },
      { question: "Can I visit Bharatpur on the way to Jaipur?", answer: "Yes, Bharatpur Bird Sanctuary (Keoladeo) is on the route. A 1-2 hour visit is possible as an en-route stop." },
      { question: "What is the road condition from Agra to Jaipur?", answer: "The Agra-Jaipur highway is mostly 4-lane and in good condition. Some stretches near Bharatpur may have 2-lane sections." }
    ]
  },

  "agra-to-lucknow": {
    from: "Agra",
    to: "Lucknow",
    distance: "330 km",
    distanceNum: 330,
    time: "5-6 hours",
    highway: "Agra-Lucknow Expressway",
    ...calcFares(330),
    highlights: ["Via Agra-Lucknow Expressway", "5-6 hours expressway ride", "Connecting heritage to culture"],
    popularStops: ["Firozabad", "Kannauj (Perfume City)", "Unnao"],
    bestTime: "Morning departure for daytime travel on the expressway",
    description: `The Agra to Lucknow one-way cab covers 330 km via the Agra-Lucknow Expressway, one of India's finest highways. This route connects the Taj Mahal city to the City of Nawabs, making it popular with tourists, government officials, and families. The expressway ensures a smooth, fast journey of just 5-6 hours.

Our one-way cab service is ideal if you are visiting Lucknow for a wedding, business meeting, or continuing to Ayodhya, Varanasi, or other eastern UP destinations. No need to pay for a round trip when you need only a single direction. Our clean, AC vehicles and experienced drivers make this an effortless journey. Sedan from ₹3,630 one-way.`,
    faqs: [
      { question: "How much is a one-way cab from Agra to Lucknow?", answer: "Agra to Lucknow one-way cab costs ₹3,630 for Sedan (330 km at ₹11/km). Ertiga is ₹4,950 and Innova is ₹5,940. Toll extra." },
      { question: "How long does Agra to Lucknow take by cab?", answer: "Agra to Lucknow takes 5-6 hours via the Agra-Lucknow Expressway. The expressway has minimal traffic." },
      { question: "Is the Agra-Lucknow Expressway safe?", answer: "Yes, the expressway is well-maintained, fully patrolled, has emergency services, and speed monitoring. It is one of the safest highways in India." },
      { question: "Can I stop at Kannauj on the way?", answer: "Kannauj (India's Perfume Capital) is near the expressway. The expressway has rest areas but a Kannauj city visit would require an off-route detour." },
      { question: "Are meals available on the expressway?", answer: "Yes, the Agra-Lucknow Expressway has multiple rest areas with food courts, restrooms, and fuel stations." },
      { question: "Do you pick up from hotels in Agra?", answer: "Yes, we pick up from any hotel, railway station, or address in Agra for the one-way trip to Lucknow." }
    ]
  },

  "jaipur-to-delhi": {
    from: "Jaipur",
    to: "Delhi",
    distance: "280 km",
    distanceNum: 280,
    time: "4-5 hours",
    highway: "NH-48 (Delhi-Jaipur Expressway)",
    ...calcFares(280),
    highlights: ["Via NH-48 Expressway", "4-5 hours back to Delhi", "Return leg of Golden Triangle"],
    popularStops: ["Neemrana Fort", "Behror", "Manesar"],
    bestTime: "Morning departure to avoid Delhi evening traffic",
    description: `The Jaipur to Delhi one-way cab covers 280 km via the NH-48 Delhi-Jaipur Expressway. This is one of the most-booked return routes for Golden Triangle tourists, wedding guests, and business travellers heading back to Delhi for flights or trains. Our one-way cab saves you 50% compared to booking a round trip from Delhi.

The 4-5 hour ride is comfortable on the well-maintained expressway. You can stop at Neemrana Fort for a heritage break or grab lunch at the famous highway eateries near Behror. Our drivers time the arrival to help you avoid Delhi's evening rush hour. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Jaipur to Delhi?", answer: "Jaipur to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "Can you drop me at Delhi Airport from Jaipur?", answer: "Yes, we provide direct drop to IGI Airport Terminal 1, 2, or 3 from Jaipur. Flight monitoring included for timely drops." },
      { question: "How long does Jaipur to Delhi take?", answer: "Jaipur to Delhi takes 4-5 hours via the NH-48 Expressway. Add 30-45 minutes if arriving during Delhi peak traffic." },
      { question: "What is the best time to leave Jaipur for Delhi?", answer: "Leave by 7-8 AM to reach Delhi by noon, avoiding both Jaipur and Delhi traffic. Or leave after 8 PM for a relaxed night drive." },
      { question: "Can I stop at Neemrana on the way?", answer: "Yes, Neemrana Fort is a popular en-route stop on the Jaipur-Delhi highway. We allow up to 2 on-route stops free." },
      { question: "Is this route suitable for night travel?", answer: "Yes, the NH-48 expressway is well-lit and safe for night travel. Many travellers prefer late evening departures." }
    ]
  },

  "jaipur-to-udaipur": {
    from: "Jaipur",
    to: "Udaipur",
    distance: "395 km",
    distanceNum: 395,
    time: "6-7 hours",
    highway: "NH-48 via Ajmer & Chittorgarh",
    ...calcFares(395),
    highlights: ["Via Ajmer & Chittorgarh Fort", "6-7 hours through Rajasthan", "City of Lakes destination"],
    popularStops: ["Ajmer", "Pushkar (nearby)", "Chittorgarh"],
    bestTime: "Morning 6-7 AM for scenic daylight drive through Rajasthan",
    description: `Jaipur to Udaipur is the heart of the Rajasthan heritage circuit — 395 km through Ajmer, near sacred Pushkar, past the epic Chittorgarh Fort (the largest fort in India), and finally into Udaipur, the City of Lakes and Mewar's eternal capital. Udaipur repeatedly tops global 'most romantic cities' lists — the Lake Palace, the Taj Lake Palace hotel, the Monsoon Palace sunset, and the City Palace's mosaic courtyards explain why. Our one-way cab is the transfer of choice for honeymooners, heritage photographers, Rajasthan-circuit tourists, and Bollywood/destination-wedding families booking Udaipur venues.

The saving is substantial. Round-trip Jaipur-Udaipur Sedan is ₹8,690 — our one-way is ₹4,345 (395 km × ₹11/km), a ₹4,345 saving. Ertiga at ₹5,925 and Innova at ₹7,110 are similarly half-priced. For tourists continuing to Mount Abu, Jodhpur via Kumbhalgarh, or flying out of Udaipur's Maharana Pratap Airport (UDR), one-way is the obvious math.

The drive takes 6–7 hours via NH-48 through some of Rajasthan's most storied terrain. First 140 km Jaipur–Ajmer through the Aravalli foothills (2.5 hours). Then 80 km via Bhilwara into the Mewar plateau. The final 170 km passes the towering Chittorgarh Fort (visible from 30 km away on a clear day), descends into the Aravalli valleys, and enters Udaipur through the Eklingji Temple town. Our recommended departure: 6–7 AM from Jaipur for a 1–2 PM Udaipur arrival in time for a Lake Pichola sunset boat.

En-route highlights make this more than a drive — it's a mini tour. Ajmer (140 km from Jaipur, 30-minute Dargah Sharif darshan possible). Pushkar (15 km detour near Ajmer, 1 hour at the Brahma Temple and Pushkar Lake ghats — one of the only Brahma temples in the world). Chittorgarh Fort (200 km from Jaipur, 1–2 hour walking tour of Rani Padmini's palace, Meera Bai's temple, and the Vijay Stambh victory tower — a UNESCO site). Some travellers also request a brief Eklingji Temple stop 22 km before Udaipur. Two free on-route stops are included; Pushkar and Chittorgarh Fort are the most popular choices.

Pickup covers Jaipur comprehensively — Sanganer Airport (for international tourists landing in Jaipur and continuing to Udaipur the same day), Jaipur Junction Railway Station, Sindhi Camp Bus Stand, all MI Road/C-Scheme/Malviya Nagar/Vaishali Nagar hotels and residences. Udaipur drop points: Maharana Pratap Airport (UDR) for onward flights, Udaipur City Railway Station, the iconic Lake Palace Road heritage hotels (Shiv Niwas Palace, Fateh Prakash, Taj Lake Palace jetty, Leela Palace Udaipur, Oberoi Udaivilas), the Lal Ghat backpacker area, and any Fateh Sagar / Lake Pichola hotel.

Vehicle selection is critical on this 7-hour route. Sedans are workable for couples with light luggage, but the most popular choice is Innova Crysta — for the extra comfort on the long drive, the air-conditioning performance in desert heat (45°C in May-June), and the boot space for photographers with camera gear or wedding families with attire. Ertiga is the middle-ground option. Summer travellers (April-June) should depart by 6 AM to avoid mid-day heat; winter (October-March) is the peak tourist season with daytime temps of 18-28°C. Call or WhatsApp 7668570551 for instant fare confirmation; Pushkar Fair week (October-November) sees heavy demand — book 10-14 days ahead.`,
    faqs: [
      { question: "What is the one-way cab fare from Jaipur to Udaipur?", answer: "Jaipur to Udaipur one-way cab costs ₹4,345 for Sedan (395 km at ₹11/km). Ertiga is ₹5,925 and Innova is ₹7,110. Toll extra." },
      { question: "How long does Jaipur to Udaipur take by cab?", answer: "Jaipur to Udaipur takes 6-7 hours by cab via the NH-48 through Ajmer and Chittorgarh." },
      { question: "Can I visit Chittorgarh Fort on the way?", answer: "Yes, Chittorgarh Fort is on-route and makes for an excellent 1-2 hour stop. It is a UNESCO World Heritage Site." },
      { question: "Is the road from Jaipur to Udaipur good?", answer: "The highway is mostly 4-lane and well-maintained. Some sections near Chittorgarh may be 2-lane but are still good quality." },
      { question: "Can I stop at Pushkar on the way?", answer: "Pushkar is about 15 km off the main highway near Ajmer. A detour to Pushkar is possible with slight additional charges." },
      { question: "Which is better for Jaipur to Udaipur - cab or train?", answer: "Cab offers door-to-door convenience and en-route stops at Chittorgarh. Train takes 6-8 hours without sightseeing options." }
    ]
  },

  "jaipur-to-jodhpur": {
    from: "Jaipur",
    to: "Jodhpur",
    distance: "340 km",
    distanceNum: 340,
    time: "5-6 hours",
    highway: "NH-62 via Ajmer & Beawar",
    ...calcFares(340),
    highlights: ["Via Ajmer & the Thar Desert edge", "5-6 hours Rajasthani adventure", "Blue City destination"],
    popularStops: ["Ajmer", "Beawar", "Pali"],
    bestTime: "Morning 6-7 AM for the full desert landscape experience",
    description: `Jaipur to Jodhpur covers 340 km through the Aravalli foothills and the edge of the Thar Desert. Jodhpur, the Blue City and Sun City, is famous for the magnificent Mehrangarh Fort, vibrant markets, and as a gateway to the desert. Our one-way cab is perfect for Rajasthan circuit travellers moving from the Pink City to the Blue City.

The 5-6 hour drive passes through Ajmer and Beawar before entering the arid Thar landscape. The changing scenery from green Aravallis to golden desert is a highlight of this drive. Stop at Ajmer Sharif Dargah en route or enjoy the highway dhabas serving authentic Rajasthani dal-baati-churma. Book from ₹3,740 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Jaipur to Jodhpur?", answer: "Jaipur to Jodhpur one-way cab costs ₹3,740 for Sedan (340 km at ₹11/km). Ertiga is ₹5,100 and Innova is ₹6,120. Toll extra." },
      { question: "How long does Jaipur to Jodhpur take?", answer: "Jaipur to Jodhpur takes 5-6 hours via NH-62 through Ajmer and Beawar." },
      { question: "Can I visit Ajmer Dargah on the way?", answer: "Yes, Ajmer is on the route. You can make a quick visit to the Ajmer Sharif Dargah as an en-route stop." },
      { question: "What is the road condition?", answer: "The Jaipur-Jodhpur highway is well-maintained with mostly 4-lane sections. Good for comfortable driving." },
      { question: "Is this route part of the Rajasthan circuit?", answer: "Yes, Jaipur-Jodhpur is a key leg of the popular Rajasthan tourism circuit (Jaipur-Jodhpur-Udaipur or Jaipur-Jodhpur-Jaisalmer)." },
      { question: "Can I continue to Jaisalmer from Jodhpur?", answer: "Yes, you can book a separate Jodhpur to Jaisalmer one-way cab. Call 7668570551 for a combined quote." }
    ]
  },

  "chandigarh-to-delhi": {
    from: "Chandigarh",
    to: "Delhi",
    distance: "250 km",
    distanceNum: 250,
    time: "4-5 hours",
    highway: "NH-44 via Ambala & Karnal",
    ...calcFares(250),
    highlights: ["Via NH-44 highway", "4-5 hours comfortable ride", "The Beautiful City to Capital"],
    popularStops: ["Ambala", "Karnal", "Panipat"],
    bestTime: "Morning 7-8 AM to avoid Delhi afternoon traffic",
    description: `Chandigarh to Delhi one-way cab covers 250 km via the NH-44 through Ambala and Karnal. This is a popular return route for travellers who came to Chandigarh from Shimla, Manali, or other Himachal destinations and need a comfortable ride back to Delhi for flights, trains, or home. Save 50% with our one-way service.

The 4-5 hour drive on the well-maintained NH-44 is straightforward and comfortable. You pass through the historic cities of Ambala, Karnal, and Panipat. Our drivers aim to time your arrival to avoid Delhi's notorious traffic. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Chandigarh to Delhi?", answer: "Chandigarh to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Chandigarh are available with flight tracking." },
      { question: "How long does Chandigarh to Delhi take?", answer: "The drive takes 4-5 hours via NH-44. Traffic near Panipat and Delhi border can add 30-45 minutes." },
      { question: "Can I get picked up from Chandigarh Railway Station?", answer: "Yes, pickup from Chandigarh Railway Station, Airport, Bus Stand, or any hotel/address in Chandigarh." },
      { question: "Is early morning departure available?", answer: "Yes, we operate 24/7. Early morning (4-5 AM) departures are common for catching morning flights from Delhi." },
      { question: "What about toll charges on this route?", answer: "Toll charges on the Chandigarh-Delhi route are approximately ₹400-600 and paid at actual. Driver handles payments." }
    ]
  },

  "chandigarh-to-manali": {
    from: "Chandigarh",
    to: "Manali",
    distance: "310 km",
    distanceNum: 310,
    time: "7-8 hours",
    highway: "NH-21 via Bilaspur & Kullu",
    ...calcFares(310),
    highlights: ["Via Kullu Valley scenic route", "7-8 hours mountain drive", "Adventure awaits in Manali"],
    popularStops: ["Bilaspur", "Sundernagar", "Kullu"],
    bestTime: "Early morning 5-6 AM to arrive before sunset for safety on hill roads",
    description: `Chandigarh to Manali is a spectacular 310 km mountain drive through the Kullu Valley. This is the most popular way to reach Manali for travellers coming from Delhi (via Chandigarh) or those flying into Chandigarh Airport. The route climbs from the plains into the Himalayas, offering breathtaking views of river gorges, pine forests, and snow-capped peaks.

Our one-way cab is perfect if you are staying in Manali for a holiday or continuing to Rohtang, Solang, or Leh. The 7-8 hour drive requires skilled hill drivers, and our team includes some of the most experienced mountain drivers in the region. Book from ₹3,410 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Chandigarh to Manali?", answer: "Chandigarh to Manali one-way costs ₹3,410 for Sedan (310 km at ₹11/km). Ertiga is ₹4,650 and Innova is ₹5,580. Toll extra." },
      { question: "How long does Chandigarh to Manali take?", answer: "Chandigarh to Manali takes 7-8 hours depending on traffic at Sundernagar and Kullu. Monsoon season may add time." },
      { question: "Is the Chandigarh-Manali road safe?", answer: "The road is well-maintained but includes mountain sections. Our drivers are hill-road specialists with years of experience on this route." },
      { question: "Can I stop at Kullu on the way?", answer: "Yes, Kullu town is on the route, about 40 km before Manali. You can stop for shopping (Kullu shawls) or a meal." },
      { question: "Is this route open in winter?", answer: "Yes, the Chandigarh-Manali highway is open year-round. Our drivers carry snow chains during winter months." },
      { question: "Should I choose Innova or Sedan for hill travel?", answer: "Innova is recommended for hill routes — better ground clearance, more comfortable on curves, and superior engine for mountain driving." }
    ]
  },

  "chandigarh-to-shimla": {
    from: "Chandigarh",
    to: "Shimla",
    distance: "120 km",
    distanceNum: 120,
    time: "3-4 hours",
    highway: "NH-5 via Pinjore & Solan",
    ...calcFares(120),
    highlights: ["Via NH-5 scenic hill road", "3-4 hours mountain drive", "Queen of Hills from City Beautiful"],
    popularStops: ["Pinjore Gardens", "Kalka", "Solan"],
    bestTime: "Morning 8-9 AM for clear mountain views",
    description: `Chandigarh to Shimla is a short but scenic 120 km hill drive via NH-5, climbing from the plains into the misty Himalayan foothills. This is the most popular route to reach Shimla from the plains, and our one-way cab is perfect for travellers arriving in Chandigarh by train, flight, or from Delhi and continuing to the Queen of Hills.

Despite the short distance, the drive takes 3-4 hours due to the winding mountain roads. The journey passes through Pinjore (with its beautiful Mughal Gardens), Kalka (the starting point of the famous toy train), and Solan before reaching Shimla. Our experienced hill drivers ensure safe navigation through the 50+ hairpin bends. Book from ₹3,300 (300 km minimum billing) for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Chandigarh to Shimla?", answer: "Chandigarh to Shimla one-way cab costs ₹3,300 for Sedan (300 km minimum billing applies even for 120 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "Why is minimum billing 300 km for a 120 km distance?", answer: "One-way cabs have a 300 km minimum billing because the driver must return empty. This still saves you 50% versus a round-trip booking." },
      { question: "How long does Chandigarh to Shimla take?", answer: "The drive takes 3-4 hours. The road is winding with 50+ hairpin turns, so speed is limited despite the short distance." },
      { question: "Can I get picked up from Chandigarh Airport?", answer: "Yes, we provide pickup from Chandigarh Airport, Railway Station, or any address in Chandigarh for the Shimla trip." },
      { question: "Is the toy train from Kalka to Shimla better than a cab?", answer: "The Kalka-Shimla toy train is scenic but slow (5-6 hours). Our cab reaches in 3-4 hours with door-to-door convenience." },
      { question: "Is Innova necessary for the Shimla hill road?", answer: "Sedan handles the Chandigarh-Shimla road well. Innova is better for families with heavy luggage or those who want extra comfort." }
    ]
  },

  "lucknow-to-delhi": {
    from: "Lucknow",
    to: "Delhi",
    distance: "550 km",
    distanceNum: 550,
    time: "8-9 hours",
    highway: "Agra-Lucknow Expressway + Yamuna Expressway",
    ...calcFares(550),
    highlights: ["Via dual expressway route", "8-9 hours premium road trip", "Nawabi city to Capital"],
    popularStops: ["Agra bypass", "Expressway rest areas"],
    bestTime: "Early morning 5-6 AM or night departure for Delhi morning arrival",
    description: `Lucknow to Delhi one-way cab covers 550 km using the Agra-Lucknow Expressway and Yamuna Expressway — two of India's best highways. This route is popular with government officials, business travellers, students, and families returning to Delhi after visits to Lucknow. Our one-way service saves you 50% compared to round-trip fares.

The 8-9 hour drive is smooth and comfortable on the high-speed expressways. Rest areas along the route provide food, fuel, and restrooms. Many travellers prefer overnight departure (10-11 PM) from Lucknow to arrive in Delhi by early morning. Our drivers are well-rested and experienced on this long route. Book from ₹6,050 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Lucknow to Delhi?", answer: "Lucknow to Delhi one-way cab costs ₹6,050 for Sedan (550 km at ₹11/km). Ertiga is ₹8,250 and Innova is ₹9,900." },
      { question: "How long does Lucknow to Delhi take?", answer: "Lucknow to Delhi takes 8-9 hours via the Agra-Lucknow and Yamuna Expressways." },
      { question: "Can I be dropped at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Lucknow are available with flight tracking." },
      { question: "Is night travel recommended?", answer: "Yes, overnight travel is popular for this route. The expressways are safe, well-lit, and have emergency services." },
      { question: "What vehicle is best for Lucknow to Delhi?", answer: "Innova Crysta is recommended for the long 550 km journey. Sedan works for budget-conscious travellers." },
      { question: "Can I make stops on the expressway?", answer: "Yes, the expressways have multiple rest areas. Up to 2 stops for meals/restrooms are standard." }
    ]
  },

  "lucknow-to-varanasi": {
    from: "Lucknow",
    to: "Varanasi",
    distance: "320 km",
    distanceNum: 320,
    time: "5-6 hours",
    highway: "Purvanchal Expressway / NH-232",
    ...calcFares(320),
    highlights: ["Via Purvanchal Expressway", "5-6 hours to the holy city", "Nawabi culture to ancient spirituality"],
    popularStops: ["Sultanpur", "Jaunpur"],
    bestTime: "Morning 6-7 AM to reach for evening Ganga Aarti",
    description: `Lucknow to Varanasi one-way cab covers 320 km through the heartland of Uttar Pradesh. With the new Purvanchal Expressway, this journey is faster and smoother than ever. Varanasi, the spiritual capital of India, attracts pilgrims, tourists, and seekers from across the world. Our one-way cab is perfect if you are visiting Varanasi from Lucknow without needing a return ride.

The 5-6 hour drive passes through the flat Gangetic plains and the historic town of Jaunpur. The Purvanchal Expressway has significantly improved travel time and comfort on this route. Our drivers know the best lanes and exits. Book from ₹3,520 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Lucknow to Varanasi?", answer: "Lucknow to Varanasi one-way cab costs ₹3,520 for Sedan (320 km at ₹11/km). Ertiga is ₹4,800 and Innova is ₹5,760." },
      { question: "How long does Lucknow to Varanasi take?", answer: "The drive takes 5-6 hours via the Purvanchal Expressway or NH-232." },
      { question: "Is the Purvanchal Expressway used for this route?", answer: "Yes, the Purvanchal Expressway connects Lucknow to eastern UP, significantly reducing travel time to Varanasi." },
      { question: "Can I visit Ayodhya on the way?", answer: "Ayodhya is slightly off the direct route (via Sultanpur). A detour to Ayodhya would add about 2 hours and additional km charges." },
      { question: "What is the best time to reach Varanasi?", answer: "Aim to reach by 4-5 PM to witness the famous evening Ganga Aarti at Dashashwamedh Ghat, which starts at sunset." },
      { question: "Are highway rest stops available?", answer: "Yes, both the Purvanchal Expressway and NH-232 have rest areas with food and fuel." }
    ]
  },

  "haridwar-to-delhi": {
    from: "Haridwar",
    to: "Delhi",
    distance: "230 km",
    distanceNum: 230,
    time: "5-6 hours",
    highway: "NH-334 via Roorkee & Meerut",
    ...calcFares(230),
    highlights: ["Via Meerut route", "5-6 hours return to Delhi", "Post-pilgrimage comfortable ride"],
    popularStops: ["Roorkee", "Muzaffarnagar", "Meerut"],
    bestTime: "After morning Ganga Aarti, depart by 8-9 AM",
    description: `Haridwar to Delhi one-way cab is the ideal way to return to Delhi after your pilgrimage or spiritual retreat. Covering 230 km via NH-334 through Roorkee and Meerut, this 5-6 hour ride in a comfortable AC cab lets you relax after your holy dip in the Ganges and temple visits.

Many devotees visit Haridwar for Ganga Aarti, Kanwar Yatra, or as a stopover on the way to Rishikesh, Kedarnath, or Badrinath. Our one-way cab ensures you do not overpay for a round trip. Professional drivers, clean vehicles, and transparent pricing. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Haridwar to Delhi?", answer: "Haridwar to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Haridwar to Delhi take?", answer: "Haridwar to Delhi takes 5-6 hours via NH-334 through Roorkee and Meerut." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct airport drops at IGI Terminal 1, 2, or 3 from Haridwar are available." },
      { question: "Can I get picked up from Rishikesh instead of Haridwar?", answer: "Yes, Rishikesh is 25 km from Haridwar. Pickup from Rishikesh for Delhi drop is available at the same rate (distance is similar)." },
      { question: "Is late-night travel available?", answer: "Yes, we operate 24/7. Late-night and early morning departures from Haridwar are available." },
      { question: "What about Kanwar Yatra period availability?", answer: "We operate during Kanwar Yatra with drivers experienced in navigating the special traffic arrangements." }
    ]
  },

  "dehradun-to-delhi": {
    from: "Dehradun",
    to: "Delhi",
    distance: "260 km",
    distanceNum: 260,
    time: "5-6 hours",
    highway: "NH-334 via Haridwar bypass & Meerut",
    ...calcFares(260),
    highlights: ["Via Haridwar bypass & Meerut", "5-6 hours Doon Valley to Capital", "Scenic foothills to plains"],
    popularStops: ["Mohand", "Roorkee", "Muzaffarnagar"],
    bestTime: "Morning 6-7 AM for comfortable daytime travel",
    description: `Dehradun to Delhi one-way cab covers 260 km from the beautiful Doon Valley to the capital. This route is popular with students, government staff, and tourists returning from Dehradun, Mussoorie, or the Uttarakhand hills. The drive takes you through the scenic Mohand forest area, bypasses Haridwar, and joins the Delhi-Meerut Expressway.

Our one-way cab saves you 50% compared to a round-trip booking — perfect if you flew into Dehradun and are returning by road, or if you simply need a single-direction drop. Professional drivers, AC vehicles, and no hidden charges. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Dehradun to Delhi?", answer: "Dehradun to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Dehradun to Delhi take?", answer: "The drive takes 5-6 hours via NH-334 and the Delhi-Meerut Expressway." },
      { question: "Can I be picked up from Mussoorie instead?", answer: "Yes, pickup from Mussoorie is available. Mussoorie is 35 km from Dehradun, adding about 1 hour and ₹385 extra (Sedan)." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Dehradun are available with flight tracking service." },
      { question: "Is this cheaper than the Dehradun-Delhi train?", answer: "For 2-3 passengers, the shared cab cost is comparable to AC train tickets with added door-to-door convenience." },
      { question: "What is the route taken?", answer: "Dehradun → Mohand Forest → Haridwar bypass → Roorkee → Muzaffarnagar → Meerut → Delhi-Meerut Expressway → Delhi." }
    ]
  },

  "agra-to-varanasi": {
    from: "Agra",
    to: "Varanasi",
    distance: "605 km",
    distanceNum: 605,
    time: "9-10 hours",
    highway: "Agra-Lucknow Expressway + Purvanchal Expressway",
    ...calcFares(605),
    highlights: ["Via dual expressway route", "9-10 hours Taj to Ganga journey", "Heritage meets spirituality"],
    popularStops: ["Lucknow bypass", "Sultanpur", "Jaunpur"],
    bestTime: "Early morning 5-6 AM or overnight departure",
    description: `Agra to Varanasi one-way cab covers 605 km through two premium expressways — the Agra-Lucknow Expressway and the Purvanchal Expressway. This route connects India's most iconic heritage city (Taj Mahal) with its most sacred spiritual city (Ganga Ghats of Varanasi). It is a favourite route for tourists completing the UP heritage circuit.

The 9-10 hour drive is comfortable on the expressways. You bypass Lucknow and continue east towards Varanasi. Overnight travel is popular, departing Agra at 9-10 PM and arriving in Varanasi by morning. Our drivers are experienced on this long route with planned rest breaks. Book from ₹6,655 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Agra to Varanasi?", answer: "Agra to Varanasi one-way cab costs ₹6,655 for Sedan (605 km at ₹11/km). Ertiga is ₹9,075 and Innova is ₹10,890." },
      { question: "How long does Agra to Varanasi take?", answer: "Agra to Varanasi takes 9-10 hours via the Agra-Lucknow and Purvanchal Expressways." },
      { question: "Is overnight travel recommended?", answer: "Yes, many travellers prefer departing at night to arrive in Varanasi by morning for the Ganga Aarti." },
      { question: "Can I stop at Lucknow on the way?", answer: "The route bypasses Lucknow via the expressway. A Lucknow city visit would require a detour and additional charges." },
      { question: "Which vehicle for a 605 km journey?", answer: "Innova Crysta is recommended for the long distance — more space, better comfort, and a smoother ride." },
      { question: "Do you assign two drivers for this distance?", answer: "For routes over 500 km, we may assign a co-driver for safety, especially on overnight trips." }
    ]
  },

  "noida-to-agra": {
    from: "Noida",
    to: "Agra",
    distance: "200 km",
    distanceNum: 200,
    time: "2.5-3 hours",
    highway: "Yamuna Expressway (Noida entry)",
    ...calcFares(200),
    highlights: ["Direct Yamuna Expressway access", "2.5-3 hours fastest route", "Noida to Taj Mahal"],
    popularStops: ["Mathura", "Vrindavan"],
    bestTime: "Early morning 5-6 AM for Taj Mahal sunrise",
    description: `Noida to Agra is one of the quickest intercity routes in India — just 200 km via the Yamuna Expressway with the entry point right in Noida. This makes it even faster than Delhi to Agra, with a drive time of just 2.5-3 hours. Residents of Noida, Greater Noida, and Ghaziabad find this route incredibly convenient for Taj Mahal visits, weddings, and business trips.

Our one-way cab service from Noida to Agra is perfect for day trippers who plan to return by train or those attending events in Agra. The Yamuna Expressway entry at Noida means you skip Delhi traffic entirely. Save 50% with our one-way fares. Book from ₹3,300 for a Sedan (300 km minimum billing applies).`,
    faqs: [
      { question: "How much is a one-way cab from Noida to Agra?", answer: "Noida to Agra one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 200 km distance). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Noida to Agra take?", answer: "Noida to Agra takes just 2.5-3 hours via the Yamuna Expressway. The expressway entry is in Noida itself." },
      { question: "Is it faster from Noida than Delhi?", answer: "Yes, Noida is closer to the Yamuna Expressway entry point, saving 30-45 minutes compared to central Delhi." },
      { question: "Can I be picked up from Greater Noida?", answer: "Yes, pickup from anywhere in Noida, Greater Noida, or Ghaziabad for the Agra one-way trip." },
      { question: "Why is minimum billing 300 km for a 200 km ride?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. Still saves 50% versus a round-trip booking." },
      { question: "Can I stop at Mathura/Vrindavan?", answer: "Yes, both are on-route stops from Noida to Agra. Up to 2 stops included at no extra charge." }
    ]
  },

  "gurgaon-to-jaipur": {
    from: "Gurgaon",
    to: "Jaipur",
    distance: "260 km",
    distanceNum: 260,
    time: "4-4.5 hours",
    highway: "NH-48 (Delhi-Jaipur Expressway, Gurgaon entry)",
    ...calcFares(260),
    highlights: ["Direct NH-48 access from Gurgaon", "4-4.5 hours to Pink City", "Skip Delhi traffic entirely"],
    popularStops: ["Neemrana Fort", "Behror"],
    bestTime: "Morning 6-7 AM or evening post-office hours",
    description: `Gurgaon (Gurugram) to Jaipur is a convenient 260 km drive via the NH-48 Delhi-Jaipur Expressway. Since Gurgaon sits right on the highway, you skip Delhi traffic entirely — making this faster than a Delhi-Jaipur trip. This route is especially popular with corporate professionals, IT workers, and families living in Gurgaon, Manesar, and the surrounding areas.

Our one-way cab from Gurgaon to Jaipur takes just 4-4.5 hours and saves you 50% compared to a round-trip fare. Whether you are heading for a Rajasthan getaway, attending a wedding in Jaipur, or on a business trip — our professional drivers ensure a comfortable, on-time journey. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Gurgaon to Jaipur?", answer: "Gurgaon to Jaipur one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 260 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Gurgaon to Jaipur take?", answer: "Gurgaon to Jaipur takes 4-4.5 hours via NH-48. Faster than Delhi since you skip Delhi traffic." },
      { question: "Is it cheaper from Gurgaon than Delhi?", answer: "The fare is the same (300 km minimum billing), but you save 30-60 minutes of travel time by avoiding Delhi city traffic." },
      { question: "Can I be picked up from my office in Gurgaon?", answer: "Yes, pickup from any location in Gurgaon, Cyber City, Manesar, Sohna Road, or Golf Course Road." },
      { question: "Can I stop at Neemrana Fort?", answer: "Yes, Neemrana Fort is on the Gurgaon-Jaipur highway and makes for a great en-route stop." },
      { question: "Do you offer Gurgaon to Jaipur for corporate travel?", answer: "Yes, we offer corporate one-way cabs with invoicing, GST bills, and dedicated account managers. Call 7668570551." }
    ]
  },

  // ===== REVERSE & ADDITIONAL ONE-WAY ROUTES (34 new routes) =====

  "rishikesh-to-delhi": {
    from: "Rishikesh",
    to: "Delhi",
    distance: "250 km",
    distanceNum: 250,
    time: "5-6 hours",
    highway: "NH-334 via Haridwar & Meerut Expressway",
    ...calcFares(250),
    highlights: ["Via Haridwar & Delhi-Meerut Expressway", "5-6 hours yoga capital to Delhi", "Post-adventure comfortable ride"],
    popularStops: ["Haridwar", "Roorkee"],
    bestTime: "Morning 7-8 AM after attending Ganga Aarti or yoga session",
    description: `Rishikesh to Delhi one-way cab covers 250 km from the yoga capital of the world to the national capital. After your spiritual retreat, adventure activities like river rafting, bungee jumping, or a peaceful stay by the Ganges, our one-way cab ensures a comfortable return to Delhi. The route passes through Haridwar and joins the Delhi-Meerut Expressway for a smooth ride.

The 5-6 hour drive takes you from the Himalayan foothills back to the plains. Many travellers visit Rishikesh for ashram stays, yoga retreats, or as part of the Char Dham circuit and need a reliable one-way ride back to Delhi for flights or trains. Our professional drivers ensure a relaxed, on-time journey. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "How much does a one-way cab from Rishikesh to Delhi cost?", answer: "Rishikesh to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra." },
      { question: "How long does Rishikesh to Delhi take by cab?", answer: "Rishikesh to Delhi takes 5-6 hours via NH-334 and the Delhi-Meerut Expressway." },
      { question: "Can you drop me at Delhi Airport from Rishikesh?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Rishikesh are available with flight tracking." },
      { question: "Can I get picked up from my ashram in Rishikesh?", answer: "Yes, pickup from any ashram, hotel, camp, or address in Rishikesh including Laxman Jhula, Ram Jhula, and Tapovan areas." },
      { question: "Is the Rishikesh to Delhi route the same as Haridwar to Delhi?", answer: "Rishikesh is 25 km ahead of Haridwar. The route merges at Haridwar and follows the same highway to Delhi." },
      { question: "What is the best time to leave Rishikesh for Delhi?", answer: "Leave by 7-8 AM to reach Delhi by early afternoon. This avoids Delhi evening traffic and gives you a comfortable daytime drive." }
    ]
  },

  "manali-to-delhi": {
    from: "Manali",
    to: "Delhi",
    distance: "530 km",
    distanceNum: 530,
    time: "12-13 hours",
    highway: "NH-21 via Kullu & Chandigarh, then NH-44",
    ...calcFares(530),
    highlights: ["Via Kullu Valley & Chandigarh", "12-13 hours Himalayan to plains journey", "Epic mountain descent road trip"],
    popularStops: ["Kullu", "Sundernagar", "Chandigarh"],
    bestTime: "Night departure 8-9 PM to arrive in Delhi by morning",
    description: `Manali to Delhi one-way cab covers 530 km from the adventure capital of the Himalayas back to the national capital. After your mountain holiday — skiing, paragliding, visiting Rohtang Pass, or exploring Old Manali — our one-way cab provides a comfortable return without paying for a round trip. The route descends through the stunning Kullu Valley, passes Chandigarh, and joins NH-44 to Delhi.

The 12-13 hour drive is best done as an overnight journey. Depart Manali at 8-9 PM and arrive in Delhi by morning, ready for your flight or onward plans. Our experienced hill drivers navigate the mountain roads safely, transitioning to the plains highway seamlessly. Book from ₹5,830 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Manali to Delhi?", answer: "Manali to Delhi one-way cab costs ₹5,830 for Sedan (530 km at ₹11/km). Ertiga is ₹7,950 and Innova Crysta is ₹9,540. Toll extra." },
      { question: "How long does Manali to Delhi take by cab?", answer: "Manali to Delhi takes 12-13 hours by cab. The mountain section (Manali-Chandigarh) takes 7-8 hours and the plains (Chandigarh-Delhi) takes 4-5 hours." },
      { question: "Is overnight travel recommended from Manali to Delhi?", answer: "Yes, departing at 8-9 PM is popular. You sleep through the plains section and wake up near Delhi by morning." },
      { question: "Can I stop at Chandigarh on the way back?", answer: "Yes, Chandigarh is a natural midpoint. You can take a rest break or a short visit before continuing to Delhi." },
      { question: "Which vehicle is best for the Manali to Delhi return?", answer: "Innova Crysta is recommended for the long mountain journey — better comfort, suspension, and engine power on hills." },
      { question: "Is the road from Manali to Delhi safe at night?", answer: "The hill section requires careful driving, and our drivers are experienced on this route. The plains section (Chandigarh-Delhi) is well-lit and safe." }
    ]
  },

  "shimla-to-delhi": {
    from: "Shimla",
    to: "Delhi",
    distance: "350 km",
    distanceNum: 350,
    time: "7-8 hours",
    highway: "NH-5 to Chandigarh, then NH-44 to Delhi",
    ...calcFares(350),
    highlights: ["Via Chandigarh & NH-44", "7-8 hours Queen of Hills to Capital", "Scenic mountain descent"],
    popularStops: ["Solan", "Chandigarh"],
    bestTime: "Morning 6-7 AM for comfortable daytime travel",
    description: `Shimla to Delhi one-way cab covers 350 km from the Queen of Hills back to the capital. After your hill station holiday, honeymoon, or winter getaway, our one-way cab saves you 50% compared to round-trip fares. The route descends from Shimla through Solan and Kandaghat to Chandigarh, then takes the NH-44 expressway to Delhi.

The 7-8 hour drive includes the scenic Shimla-Chandigarh hill section (3 hours) and the Chandigarh-Delhi highway section (4-5 hours). Our experienced hill drivers ensure a safe descent through the winding mountain roads. Depart early morning and reach Delhi by afternoon. Book from ₹3,850 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Shimla to Delhi?", answer: "Shimla to Delhi one-way cab costs ₹3,850 for Sedan (350 km at ₹11/km). Ertiga is ₹5,250 and Innova Crysta is ₹6,300. Toll extra." },
      { question: "How long does Shimla to Delhi take by cab?", answer: "Shimla to Delhi takes 7-8 hours. The Shimla-Chandigarh hill section takes 3 hours and Chandigarh-Delhi takes 4-5 hours." },
      { question: "Can you drop me at Delhi Airport from Shimla?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Shimla are available with flight monitoring." },
      { question: "Is the Shimla-Chandigarh road safe for descent?", answer: "Yes, the road is well-maintained. Our drivers are experienced on hill roads and handle the 50+ hairpin bends safely." },
      { question: "Can I stop at Chandigarh on the way?", answer: "Yes, Chandigarh is a natural break point. You can stop for a meal or a quick visit to Rock Garden or Sukhna Lake." },
      { question: "Is night travel possible from Shimla to Delhi?", answer: "We recommend daytime travel for the hill section. The Chandigarh-Delhi highway is safe for night driving." }
    ]
  },

  "shimla-to-chandigarh": {
    from: "Shimla",
    to: "Chandigarh",
    distance: "115 km",
    distanceNum: 115,
    time: "3-4 hours",
    highway: "NH-5 via Solan & Kalka",
    ...calcFares(115),
    highlights: ["Via NH-5 scenic descent", "3-4 hours hill drive", "Queen of Hills to City Beautiful"],
    popularStops: ["Solan", "Kalka"],
    bestTime: "Morning 8-9 AM for clear mountain views",
    description: `Shimla to Chandigarh one-way cab covers 115 km descending from the Queen of Hills to the City Beautiful. This short but scenic drive is popular with travellers heading to Chandigarh Airport, Railway Station, or continuing to Delhi, Amritsar, or other plains destinations. Despite the short distance, the winding mountain roads make it a 3-4 hour journey.

Our one-way cab saves you from the hassle of booking a round trip when you only need a downhill drop. The route passes through Solan and Kalka (famous for the Kalka-Shimla toy train). Our skilled hill drivers ensure a safe, comfortable descent. Book from ₹3,300 for a Sedan (300 km minimum billing applies).`,
    faqs: [
      { question: "How much is a one-way cab from Shimla to Chandigarh?", answer: "Shimla to Chandigarh one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 115 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "Why is minimum billing 300 km for 115 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves you 50% versus a round-trip booking." },
      { question: "How long does Shimla to Chandigarh take?", answer: "The drive takes 3-4 hours due to winding mountain roads with 50+ hairpin turns despite the 115 km distance." },
      { question: "Can you drop me at Chandigarh Airport?", answer: "Yes, direct drops at Chandigarh Airport are available from Shimla, timed to your flight departure." },
      { question: "Is the toy train from Shimla to Kalka better?", answer: "The Shimla-Kalka toy train is scenic but takes 5-6 hours. Our cab reaches Chandigarh in 3-4 hours with door-to-door convenience." },
      { question: "Is the road from Shimla safe during monsoon?", answer: "The road is generally open during monsoon. Our drivers are experienced and avoid travel during active landslide warnings." }
    ]
  },

  "amritsar-to-delhi": {
    from: "Amritsar",
    to: "Delhi",
    distance: "450 km",
    distanceNum: 450,
    time: "7-8 hours",
    highway: "NH-44 (GT Road) via Jalandhar & Ambala",
    ...calcFares(450),
    highlights: ["Via NH-44 Grand Trunk Road", "7-8 hours Golden Temple city to Capital", "Punjab heartland return"],
    popularStops: ["Jalandhar", "Ludhiana", "Ambala"],
    bestTime: "Morning 6-7 AM after Golden Temple morning visit",
    description: `Amritsar to Delhi one-way cab covers 450 km along the historic Grand Trunk Road (NH-44). After visiting the magnificent Golden Temple, attending the Wagah Border ceremony, or attending a family event in Amritsar, our one-way cab provides a comfortable return to Delhi at half the cost of a round-trip booking.

The 7-8 hour drive passes through the bustling Punjab cities of Jalandhar, Ludhiana, and Ambala. The highway is in excellent condition with multiple food stops serving authentic Punjabi cuisine. Our drivers know the best dhaba stops along the route. Book from ₹4,950 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Amritsar to Delhi?", answer: "Amritsar to Delhi one-way cab costs ₹4,950 for Sedan (450 km at ₹11/km). Ertiga is ₹6,750 and Innova Crysta is ₹8,100. Toll extra." },
      { question: "How long does Amritsar to Delhi take by cab?", answer: "Amritsar to Delhi takes 7-8 hours via NH-44. The highway is well-maintained with minimal traffic outside peak hours." },
      { question: "Can you drop me at Delhi Airport from Amritsar?", answer: "Yes, direct airport drops at IGI Terminal 1, 2, or 3 from Amritsar with flight monitoring included." },
      { question: "What is the best time to leave Amritsar?", answer: "Leave by 6-7 AM to reach Delhi by early afternoon. This avoids Delhi evening traffic." },
      { question: "Can I stop for meals on the route?", answer: "Yes, the GT Road has legendary Punjabi dhabas. Stops at Jalandhar, Ludhiana, and Karnal are popular for meals." },
      { question: "Is night travel safe from Amritsar to Delhi?", answer: "Yes, NH-44 is well-lit, well-patrolled, and safe for night travel. Many travellers depart late evening." }
    ]
  },

  "amritsar-to-chandigarh": {
    from: "Amritsar",
    to: "Chandigarh",
    distance: "230 km",
    distanceNum: 230,
    time: "4-5 hours",
    highway: "NH-44 via Jalandhar & Ludhiana",
    ...calcFares(230),
    highlights: ["Via NH-44 Punjab highway", "4-5 hours through Punjab", "Golden Temple city to City Beautiful"],
    popularStops: ["Jalandhar", "Ludhiana"],
    bestTime: "Morning 7-8 AM for comfortable daytime travel",
    description: `Amritsar to Chandigarh one-way cab covers 230 km through the heart of Punjab. This route is popular with travellers heading to Chandigarh for business, catching a flight from Chandigarh Airport, or continuing to Shimla, Manali, or Delhi. After visiting the Golden Temple and experiencing Amritsar's culture, our one-way cab provides an affordable, comfortable ride.

The 4-5 hour drive on NH-44 passes through Jalandhar and Ludhiana, two of Punjab's largest cities. The highway is in excellent condition. Our drivers know the best food stops along the route. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "What is the one-way cab fare from Amritsar to Chandigarh?", answer: "Amritsar to Chandigarh one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 230 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Amritsar to Chandigarh take?", answer: "Amritsar to Chandigarh takes 4-5 hours via NH-44 through Jalandhar and Ludhiana." },
      { question: "Can you drop me at Chandigarh Airport?", answer: "Yes, direct drops at Chandigarh Airport from Amritsar are available with flight tracking." },
      { question: "Can I stop at Jalandhar on the way?", answer: "Yes, Jalandhar is on the route. Up to 2 on-route stops are included at no extra charge." },
      { question: "Is this route suitable for night travel?", answer: "Yes, NH-44 is well-lit and safe for night travel between Amritsar and Chandigarh." },
      { question: "What vehicles are available?", answer: "We offer Sedan (Swift Dzire/Etios), Ertiga (7-seater), and Innova Crysta (7-seater premium) for this route." }
    ]
  },

  "varanasi-to-delhi": {
    from: "Varanasi",
    to: "Delhi",
    distance: "820 km",
    distanceNum: 820,
    time: "12-14 hours",
    highway: "Purvanchal Expressway + Agra-Lucknow Expressway + Yamuna Expressway",
    ...calcFares(820),
    highlights: ["Via triple expressway route", "12-14 hours spiritual capital to Delhi", "Ganga to Yamuna journey"],
    popularStops: ["Lucknow bypass", "Agra bypass"],
    bestTime: "Night departure 7-8 PM to arrive in Delhi by morning",
    description: `Varanasi to Delhi one-way cab covers 820 km using three world-class expressways — the Purvanchal Expressway, Agra-Lucknow Expressway, and Yamuna Expressway. After your spiritual journey to the oldest living city, visiting the Ganga Ghats, Kashi Vishwanath Temple, and Sarnath, our one-way cab provides a comfortable return to Delhi at 50% savings versus round-trip fares.

The 12-14 hour drive is best done overnight, departing Varanasi at 7-8 PM and arriving in Delhi by morning. The expressway network has made this once-gruelling journey much more comfortable. Our professional drivers handle the long distance with scheduled rest breaks. Book from ₹9,020 for a Sedan.`,
    faqs: [
      { question: "How much does a one-way cab from Varanasi to Delhi cost?", answer: "Varanasi to Delhi one-way cab costs ₹9,020 for Sedan (820 km at ₹11/km). Ertiga is ₹12,300 and Innova Crysta is ₹14,760. Toll extra." },
      { question: "How long does Varanasi to Delhi take by cab?", answer: "Varanasi to Delhi takes 12-14 hours via the expressway route. Overnight travel is strongly recommended." },
      { question: "Is overnight travel recommended?", answer: "Yes, depart Varanasi at 7-8 PM and arrive in Delhi by 7-8 AM. This is the most popular timing for this route." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Varanasi with flight monitoring." },
      { question: "Do you assign two drivers for this distance?", answer: "For 820 km routes, we may assign a co-driver for safety, especially on overnight trips. This ensures the driver is always well-rested." },
      { question: "Is flying better than driving Varanasi to Delhi?", answer: "Flying takes 1.5 hours versus 12-14 by road. However, for 3-4 passengers with luggage, the overnight cab is cost-effective and convenient." }
    ]
  },

  "varanasi-to-lucknow": {
    from: "Varanasi",
    to: "Lucknow",
    distance: "300 km",
    distanceNum: 300,
    time: "5-6 hours",
    highway: "Purvanchal Expressway / NH-232",
    ...calcFares(300),
    highlights: ["Via Purvanchal Expressway", "5-6 hours holy city to Nawabi city", "Eastern UP to Central UP"],
    popularStops: ["Jaunpur", "Sultanpur"],
    bestTime: "Morning 7-8 AM for comfortable daytime travel",
    description: `Varanasi to Lucknow one-way cab covers 300 km through the heartland of Uttar Pradesh. After your pilgrimage to Kashi, visits to the Ganga Ghats, and darshan at Kashi Vishwanath Temple, our one-way cab provides a smooth ride to the City of Nawabs. The Purvanchal Expressway has made this journey faster and more comfortable than ever.

The 5-6 hour drive passes through the historic town of Jaunpur and the flat Gangetic plains. Whether you are heading to Lucknow for business, catching a flight, or continuing westward, our one-way service saves you 50% compared to round-trip bookings. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Varanasi to Lucknow?", answer: "Varanasi to Lucknow one-way cab costs ₹3,300 for Sedan (300 km at ₹11/km). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra." },
      { question: "How long does Varanasi to Lucknow take?", answer: "Varanasi to Lucknow takes 5-6 hours via the Purvanchal Expressway or NH-232." },
      { question: "Is the Purvanchal Expressway used?", answer: "Yes, the Purvanchal Expressway connects eastern UP to Lucknow, significantly reducing travel time." },
      { question: "Can I be picked up from my hotel in Varanasi?", answer: "Yes, pickup from any hotel, ghat area, Varanasi Airport, or Railway Station for the one-way trip to Lucknow." },
      { question: "Can I visit Ayodhya on the way?", answer: "Ayodhya is slightly off the direct route. A detour would add about 2 hours and additional kilometre charges." },
      { question: "Can you drop me at Lucknow Airport?", answer: "Yes, direct drops at Chaudhary Charan Singh International Airport, Lucknow from Varanasi are available." }
    ]
  },

  "lucknow-to-agra": {
    from: "Lucknow",
    to: "Agra",
    distance: "330 km",
    distanceNum: 330,
    time: "4-5 hours",
    highway: "Agra-Lucknow Expressway",
    ...calcFares(330),
    highlights: ["Via Agra-Lucknow Expressway", "4-5 hours expressway ride", "Nawabi city to Taj Mahal city"],
    popularStops: ["Expressway rest areas", "Kannauj bypass"],
    bestTime: "Early morning 5-6 AM for a Taj Mahal afternoon visit",
    description: `Lucknow to Agra one-way cab covers 330 km via the Agra-Lucknow Expressway, one of India's finest highways. This route connects the City of Nawabs to the city of the Taj Mahal, making it popular with tourists completing the UP heritage circuit, business travellers, and families. The expressway ensures a smooth, fast journey of just 4-5 hours.

Our one-way cab service saves you 50% if you are visiting Agra for a day or continuing to Delhi, Jaipur, or other destinations. The expressway has excellent rest areas with food and fuel. Our experienced drivers know every exit and lane. Book from ₹3,630 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Lucknow to Agra?", answer: "Lucknow to Agra one-way cab costs ₹3,630 for Sedan (330 km at ₹11/km). Ertiga is ₹4,950 and Innova is ₹5,940. Toll extra." },
      { question: "How long does Lucknow to Agra take?", answer: "Lucknow to Agra takes 4-5 hours via the Agra-Lucknow Expressway." },
      { question: "Is the Agra-Lucknow Expressway safe?", answer: "Yes, the expressway is well-maintained, patrolled, and has emergency services. One of the safest highways in India." },
      { question: "Can I continue to Delhi from Agra?", answer: "Yes, you can book a separate Agra to Delhi one-way cab or request an extended trip. Call 7668570551 for a combined quote." },
      { question: "Are meals available on the expressway?", answer: "Yes, the Agra-Lucknow Expressway has multiple rest areas with food courts, restrooms, and fuel stations." },
      { question: "Do you pick up from Lucknow Railway Station?", answer: "Yes, pickup from Lucknow Railway Station, Airport, or any address in Lucknow for the one-way trip to Agra." }
    ]
  },

  "udaipur-to-jaipur": {
    from: "Udaipur",
    to: "Jaipur",
    distance: "395 km",
    distanceNum: 395,
    time: "6-7 hours",
    highway: "NH-48 via Chittorgarh & Ajmer",
    ...calcFares(395),
    highlights: ["Via Chittorgarh Fort & Ajmer", "6-7 hours Lake City to Pink City", "Rajasthan heritage corridor"],
    popularStops: ["Chittorgarh", "Ajmer"],
    bestTime: "Morning 6-7 AM for scenic daylight drive through Rajasthan",
    description: `Udaipur to Jaipur one-way cab covers 395 km through the heart of Rajasthan, passing through the legendary Chittorgarh Fort and the pilgrim city of Ajmer. After your romantic getaway in the City of Lakes — visiting Lake Pichola, City Palace, and the sunset points — our one-way cab takes you to the Pink City comfortably and affordably.

The 6-7 hour drive passes through some of Rajasthan's most scenic countryside. You can stop at Chittorgarh Fort (UNESCO World Heritage Site) for a heritage break or Ajmer for a visit to the famous Dargah Sharif. Our drivers are experienced on this Rajasthan circuit route. Book from ₹4,345 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Udaipur to Jaipur?", answer: "Udaipur to Jaipur one-way cab costs ₹4,345 for Sedan (395 km at ₹11/km). Ertiga is ₹5,925 and Innova Crysta is ₹7,110. Toll extra." },
      { question: "How long does Udaipur to Jaipur take?", answer: "Udaipur to Jaipur takes 6-7 hours via NH-48 through Chittorgarh and Ajmer." },
      { question: "Can I visit Chittorgarh Fort on the way?", answer: "Yes, Chittorgarh Fort is on the route and makes for an excellent 1-2 hour stop. It is a UNESCO World Heritage Site." },
      { question: "Is the road from Udaipur to Jaipur good?", answer: "The highway is mostly 4-lane and well-maintained. Some sections near Chittorgarh may be 2-lane but are still good quality." },
      { question: "Can I stop at Ajmer Dargah on the way?", answer: "Yes, Ajmer is on the route. You can visit the Ajmer Sharif Dargah as an en-route stop." },
      { question: "Can I be dropped at Jaipur Airport?", answer: "Yes, direct drops at Jaipur International Airport from Udaipur are available." }
    ]
  },

  "jodhpur-to-delhi": {
    from: "Jodhpur",
    to: "Delhi",
    distance: "590 km",
    distanceNum: 590,
    time: "9-10 hours",
    highway: "NH-62 via Ajmer, then NH-48 to Delhi",
    ...calcFares(590),
    highlights: ["Via Ajmer & NH-48", "9-10 hours Blue City to Capital", "Desert to metropolis journey"],
    popularStops: ["Ajmer", "Jaipur bypass", "Neemrana"],
    bestTime: "Early morning 5-6 AM or overnight departure",
    description: `Jodhpur to Delhi one-way cab covers 590 km from the magnificent Blue City to the national capital. After exploring Mehrangarh Fort, the vibrant Sardar Market, and the desert landscapes of Jodhpur, our one-way cab provides a comfortable return journey. The route passes through Ajmer, bypasses Jaipur, and joins the NH-48 expressway to Delhi.

The 9-10 hour drive is best started early morning or as an overnight trip. The changing landscape from the Thar Desert edge through the Aravalli foothills to the Delhi plains is a memorable experience. Our professional drivers ensure a safe, comfortable journey. Book from ₹6,490 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Jodhpur to Delhi?", answer: "Jodhpur to Delhi one-way cab costs ₹6,490 for Sedan (590 km at ₹11/km). Ertiga is ₹8,850 and Innova Crysta is ₹10,620. Toll extra." },
      { question: "How long does Jodhpur to Delhi take?", answer: "Jodhpur to Delhi takes 9-10 hours via NH-62 and NH-48." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Jodhpur with flight monitoring." },
      { question: "Is overnight travel recommended?", answer: "Yes, departing Jodhpur at 9-10 PM and arriving in Delhi by morning is a popular option." },
      { question: "Can I stop at Jaipur on the way?", answer: "The route bypasses Jaipur. A city visit would require a detour. For a Jaipur stop, book Jodhpur-Jaipur and Jaipur-Delhi separately." },
      { question: "Which vehicle is best for this long route?", answer: "Innova Crysta is recommended for the 590 km journey. Sedan works for budget-conscious travellers." }
    ]
  },

  "jaisalmer-to-jodhpur": {
    from: "Jaisalmer",
    to: "Jodhpur",
    distance: "285 km",
    distanceNum: 285,
    time: "4-5 hours",
    highway: "NH-15 via Pokhran & Dechu",
    ...calcFares(285),
    highlights: ["Via NH-15 desert highway", "4-5 hours through the Thar Desert", "Golden City to Blue City"],
    popularStops: ["Pokhran", "Dechu"],
    bestTime: "Morning 7-8 AM for desert sunrise views",
    description: `Jaisalmer to Jodhpur one-way cab covers 285 km through the heart of the Thar Desert. After your magical experience in the Golden City — camel safaris at Sam Sand Dunes, exploring Jaisalmer Fort, and the stunning havelis — our one-way cab takes you to the Blue City of Jodhpur. This is a key leg of the popular Rajasthan desert circuit.

The 4-5 hour drive passes through the desert landscape with vast stretches of golden sand, occasional oases, and the town of Pokhran (site of India's nuclear tests). The highway is in good condition and the desert scenery makes this a memorable drive. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "What is the one-way cab fare from Jaisalmer to Jodhpur?", answer: "Jaisalmer to Jodhpur one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 285 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Jaisalmer to Jodhpur take?", answer: "Jaisalmer to Jodhpur takes 4-5 hours via NH-15 through Pokhran." },
      { question: "Is the desert road safe?", answer: "Yes, NH-15 is a well-maintained national highway. Our drivers are experienced on this desert route." },
      { question: "Can I stop at Pokhran on the way?", answer: "Yes, Pokhran is on the route. You can visit the Pokhran Fort or stop for refreshments." },
      { question: "What time should I leave Jaisalmer?", answer: "Leave by 7-8 AM to enjoy the desert morning scenery and reach Jodhpur by noon for sightseeing." },
      { question: "Is this route part of the Rajasthan circuit?", answer: "Yes, Jaisalmer-Jodhpur is a key leg of the popular Jaisalmer-Jodhpur-Udaipur or Jaisalmer-Jodhpur-Jaipur Rajasthan circuit." }
    ]
  },

  "jaisalmer-to-jaipur": {
    from: "Jaisalmer",
    to: "Jaipur",
    distance: "560 km",
    distanceNum: 560,
    time: "8-9 hours",
    highway: "NH-15 via Jodhpur, then NH-62 via Ajmer",
    ...calcFares(560),
    highlights: ["Via Jodhpur & Ajmer", "8-9 hours desert to Pink City", "Complete Rajasthan desert circuit"],
    popularStops: ["Pokhran", "Jodhpur bypass", "Ajmer"],
    bestTime: "Early morning 5-6 AM for a full day of driving",
    description: `Jaisalmer to Jaipur one-way cab covers 560 km across the breadth of Rajasthan, from the golden sands of the Thar Desert to the Pink City. This is the longest single-leg route in the Rajasthan circuit, passing through Jodhpur and Ajmer. After your desert adventure in Jaisalmer, our one-way cab provides a direct, comfortable ride to Jaipur for your flight home or onward journey.

The 8-9 hour drive takes you from the barren beauty of the Thar through the Aravalli foothills to the bustling capital of Rajasthan. The changing landscape is one of the highlights of this drive. Our experienced drivers ensure comfortable navigation. Book from ₹6,160 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Jaisalmer to Jaipur?", answer: "Jaisalmer to Jaipur one-way cab costs ₹6,160 for Sedan (560 km at ₹11/km). Ertiga is ₹8,400 and Innova Crysta is ₹10,080. Toll extra." },
      { question: "How long does Jaisalmer to Jaipur take?", answer: "Jaisalmer to Jaipur takes 8-9 hours via Jodhpur and Ajmer." },
      { question: "Can I stop at Jodhpur on the way?", answer: "The route passes through Jodhpur. A quick stop for meals is possible, but a full Jodhpur sightseeing visit would require an extended stop." },
      { question: "Is this a long drive?", answer: "Yes, 560 km is a long drive. Early departure or overnight travel is recommended. Innova is preferred for comfort." },
      { question: "Can you drop me at Jaipur Airport?", answer: "Yes, direct drops at Jaipur International Airport from Jaisalmer are available." },
      { question: "What is the road condition?", answer: "NH-15 from Jaisalmer to Jodhpur and NH-62 from Jodhpur to Jaipur are well-maintained national highways." }
    ]
  },

  "jaipur-to-agra": {
    from: "Jaipur",
    to: "Agra",
    distance: "240 km",
    distanceNum: 240,
    time: "4-5 hours",
    highway: "NH-21 via Dausa & Bharatpur",
    ...calcFares(240),
    highlights: ["Via Bharatpur & Fatehpur Sikri", "4-5 hours Pink City to Taj City", "Golden Triangle return leg"],
    popularStops: ["Dausa", "Bharatpur Bird Sanctuary"],
    bestTime: "Morning 7-8 AM for an afternoon Taj Mahal visit",
    description: `Jaipur to Agra one-way cab covers 240 km through the Rajasthan-UP border region, completing the classic Golden Triangle route. After exploring the Pink City — Amber Fort, Hawa Mahal, City Palace, and the vibrant bazaars — our one-way cab takes you to the city of the Taj Mahal. This route passes near the famous Bharatpur Bird Sanctuary and Fatehpur Sikri.

The 4-5 hour drive through the scenic Rajasthani countryside is a pleasant journey. You can stop at Bharatpur for bird watching or Fatehpur Sikri for a heritage visit. Our one-way service saves you 50% compared to round-trip fares. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "What is the one-way cab fare from Jaipur to Agra?", answer: "Jaipur to Agra one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 240 km). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra." },
      { question: "How long does Jaipur to Agra take?", answer: "Jaipur to Agra takes 4-5 hours via NH-21 through Dausa and Bharatpur." },
      { question: "Can I visit Fatehpur Sikri on the way?", answer: "Yes, Fatehpur Sikri is near the Agra end of this route. It is a popular en-route stop for heritage enthusiasts." },
      { question: "Can I visit Bharatpur on the way?", answer: "Yes, Bharatpur Bird Sanctuary (Keoladeo National Park) is on the route. A 1-2 hour visit is possible." },
      { question: "Is this the Golden Triangle route?", answer: "Yes, Jaipur to Agra is the return leg of the Delhi-Agra-Jaipur Golden Triangle circuit." },
      { question: "Can I continue to Delhi from Agra?", answer: "Yes, book a separate Agra to Delhi one-way cab or call 7668570551 for a combined Jaipur-Agra-Delhi quote." }
    ]
  },

  "jaipur-to-ajmer": {
    from: "Jaipur",
    to: "Ajmer",
    distance: "135 km",
    distanceNum: 135,
    time: "2-2.5 hours",
    highway: "NH-48 via Dudu & Kishangarh",
    ...calcFares(135),
    highlights: ["Via NH-48 highway", "2-2.5 hours quick ride", "Pink City to Dargah city"],
    popularStops: ["Kishangarh"],
    bestTime: "Morning 7-8 AM for early darshan at Ajmer Dargah",
    description: `Jaipur to Ajmer one-way cab covers 135 km via the NH-48 highway. Ajmer is one of the most important pilgrimage centres in India, home to the Ajmer Sharif Dargah (shrine of Sufi saint Moinuddin Chishti) visited by millions of devotees annually. The nearby town of Pushkar with its sacred lake and Brahma Temple is also easily accessible from Ajmer.

The 2-2.5 hour drive is quick and comfortable on the well-maintained highway. Whether you are heading for pilgrimage, continuing to Pushkar, or attending a function in Ajmer, our one-way cab saves you 50% versus round-trip. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Jaipur to Ajmer?", answer: "Jaipur to Ajmer one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 135 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Jaipur to Ajmer take?", answer: "Jaipur to Ajmer takes 2-2.5 hours via NH-48 through Kishangarh." },
      { question: "Can I continue to Pushkar from Ajmer?", answer: "Yes, Pushkar is just 15 km from Ajmer. You can request a Pushkar drop at minimal extra charge or book Jaipur to Pushkar directly." },
      { question: "Why is minimum billing 300 km for 135 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus a round-trip booking." },
      { question: "Is there a direct cab to Pushkar from Jaipur?", answer: "Yes, we offer Jaipur to Pushkar one-way cab as well. The distance is 150 km via Ajmer." },
      { question: "What is the best time to visit Ajmer Dargah?", answer: "Morning hours (6-9 AM) and evening hours (5-8 PM) are best for darshan. Plan your departure from Jaipur accordingly." }
    ]
  },

  "jaipur-to-pushkar": {
    from: "Jaipur",
    to: "Pushkar",
    distance: "150 km",
    distanceNum: 150,
    time: "2.5-3 hours",
    highway: "NH-48 via Ajmer",
    ...calcFares(150),
    highlights: ["Via Ajmer & NH-48", "2.5-3 hours to sacred lake town", "Pink City to Brahma Temple town"],
    popularStops: ["Ajmer"],
    bestTime: "Morning 6-7 AM for peaceful morning aarti at Pushkar Lake",
    description: `Jaipur to Pushkar one-way cab covers 150 km via Ajmer to the sacred lakeside town of Pushkar. Home to the only Brahma Temple in the world and the holy Pushkar Lake, this is one of Rajasthan's most spiritual destinations. The town is also famous for the annual Pushkar Camel Fair and its vibrant hippie culture.

The 2.5-3 hour drive passes through Ajmer, where you can stop for darshan at the Ajmer Sharif Dargah. Pushkar is 15 km beyond Ajmer on a scenic road through the Nag Pahar hills. Our one-way cab is perfect for pilgrims and tourists who plan to stay in Pushkar. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Jaipur to Pushkar?", answer: "Jaipur to Pushkar one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 150 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Jaipur to Pushkar take?", answer: "Jaipur to Pushkar takes 2.5-3 hours via NH-48 through Ajmer." },
      { question: "Can I visit Ajmer Dargah on the way?", answer: "Yes, Ajmer is on the route, 15 km before Pushkar. You can stop for darshan at the Ajmer Sharif Dargah." },
      { question: "Is Pushkar accessible by road?", answer: "Yes, Pushkar is well-connected by road from Jaipur via Ajmer. The road is in good condition." },
      { question: "When is the Pushkar Camel Fair?", answer: "The Pushkar Camel Fair is held annually in November (Kartik Purnima). Book your one-way cab well in advance during this period." },
      { question: "Why is minimum billing 300 km for 150 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus a round-trip booking." }
    ]
  },

  "jaipur-to-jaisalmer": {
    from: "Jaipur",
    to: "Jaisalmer",
    distance: "560 km",
    distanceNum: 560,
    time: "8-9 hours",
    highway: "NH-62 via Ajmer & Jodhpur, then NH-15",
    ...calcFares(560),
    highlights: ["Via Jodhpur & the Thar Desert", "8-9 hours Pink City to Golden City", "Into the heart of the desert"],
    popularStops: ["Ajmer", "Jodhpur", "Pokhran"],
    bestTime: "Early morning 5-6 AM to arrive before sunset desert safari",
    description: `Jaipur to Jaisalmer one-way cab covers 560 km from the Pink City deep into the Thar Desert to the Golden City. Jaisalmer, with its magnificent sand fort, ornate havelis, and Sam Sand Dunes, is the crown jewel of the Rajasthan desert circuit. This route passes through Jodhpur and across the desert landscape.

The 8-9 hour drive takes you from the Aravalli foothills into the barren beauty of the Thar Desert. The changing landscape is one of the highlights of this journey. Leave early to arrive in Jaisalmer by afternoon for a sunset camel safari at Sam Sand Dunes. Book from ₹6,160 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Jaipur to Jaisalmer?", answer: "Jaipur to Jaisalmer one-way cab costs ₹6,160 for Sedan (560 km at ₹11/km). Ertiga is ₹8,400 and Innova Crysta is ₹10,080. Toll extra." },
      { question: "How long does Jaipur to Jaisalmer take?", answer: "Jaipur to Jaisalmer takes 8-9 hours via Jodhpur." },
      { question: "Can I stop at Jodhpur on the way?", answer: "Yes, Jodhpur is on the route. A quick stop for meals is possible, but a full sightseeing visit would require extra time." },
      { question: "What time should I leave for a sunset desert safari?", answer: "Leave Jaipur by 5-6 AM to reach Jaisalmer by 2-3 PM, giving you time to reach Sam Sand Dunes for the sunset camel safari." },
      { question: "Which vehicle for a 560 km desert drive?", answer: "Innova Crysta is recommended for long desert drives — better comfort, AC performance, and suspension." },
      { question: "Is the road to Jaisalmer good?", answer: "NH-62 and NH-15 are well-maintained national highways. The desert section has some single-lane stretches but is generally good." }
    ]
  },

  "chandigarh-to-dharamshala": {
    from: "Chandigarh",
    to: "Dharamshala",
    distance: "240 km",
    distanceNum: 240,
    time: "5-6 hours",
    highway: "NH-21 via Anandpur Sahib & Kangra",
    ...calcFares(240),
    highlights: ["Via Kangra Valley route", "5-6 hours to Little Lhasa", "Plains to Himalayan foothills"],
    popularStops: ["Anandpur Sahib", "Kangra"],
    bestTime: "Morning 6-7 AM for daylight hill driving",
    description: `Chandigarh to Dharamshala one-way cab covers 240 km from the City Beautiful to the home of the Dalai Lama. Dharamshala and McLeodganj, nestled in the Kangra Valley of Himachal Pradesh, attract spiritual seekers, trekkers, and culture enthusiasts from around the world. The route passes through Anandpur Sahib (the holy Sikh city) and the scenic Kangra Valley.

The 5-6 hour drive transitions from the plains to the beautiful Himalayan foothills. Our drivers are experienced on the hill roads of Himachal Pradesh. Whether you are heading for a meditation retreat, trekking expedition, or a peaceful mountain getaway, our one-way cab provides an affordable, comfortable ride. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Chandigarh to Dharamshala?", answer: "Chandigarh to Dharamshala one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 240 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Chandigarh to Dharamshala take?", answer: "The drive takes 5-6 hours via NH-21 through Anandpur Sahib and Kangra." },
      { question: "Can I be dropped at McLeodganj instead?", answer: "Yes, McLeodganj is just 10 km above Dharamshala. We can drop you at McLeodganj at no extra charge." },
      { question: "Can I stop at Anandpur Sahib?", answer: "Yes, Anandpur Sahib is on the route. You can visit the Takht Sri Kesgarh Sahib gurudwara as an en-route stop." },
      { question: "Is this a hill route?", answer: "The last section from Kangra to Dharamshala involves hill roads, but they are well-maintained. Our drivers are experienced." },
      { question: "Can I get picked up from Chandigarh Airport?", answer: "Yes, pickup from Chandigarh Airport, Railway Station, or any address in Chandigarh is available." }
    ]
  },

  "chandigarh-to-amritsar": {
    from: "Chandigarh",
    to: "Amritsar",
    distance: "230 km",
    distanceNum: 230,
    time: "4-5 hours",
    highway: "NH-44 via Ludhiana & Jalandhar",
    ...calcFares(230),
    highlights: ["Via NH-44 Punjab highway", "4-5 hours through Punjab heartland", "City Beautiful to Golden Temple city"],
    popularStops: ["Ludhiana", "Jalandhar"],
    bestTime: "Morning 7-8 AM for afternoon Golden Temple visit",
    description: `Chandigarh to Amritsar one-way cab covers 230 km through the fertile plains of Punjab. This route is popular with travellers heading to the Golden Temple, Wagah Border, or attending family events in Amritsar. The well-maintained NH-44 makes this a comfortable 4-5 hour drive through the heart of Punjab.

Our one-way cab is ideal if you are arriving in Chandigarh by train or flight and continuing to Amritsar. You pass through Ludhiana and Jalandhar, two of Punjab's largest cities. The highway has excellent food stops serving authentic Punjabi cuisine. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "What is the one-way cab fare from Chandigarh to Amritsar?", answer: "Chandigarh to Amritsar one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 230 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Chandigarh to Amritsar take?", answer: "Chandigarh to Amritsar takes 4-5 hours via NH-44 through Ludhiana and Jalandhar." },
      { question: "Can I reach in time for Wagah Border ceremony?", answer: "Yes, leave Chandigarh by 10-11 AM to reach Amritsar by 2-3 PM. The Wagah Border ceremony starts at 4-5 PM." },
      { question: "Can I stop at Ludhiana on the way?", answer: "Yes, Ludhiana is on the route. Up to 2 on-route stops are included at no extra charge." },
      { question: "Is night travel available?", answer: "Yes, NH-44 is well-lit and safe for night travel between Chandigarh and Amritsar." },
      { question: "Do you pick up from Chandigarh Railway Station?", answer: "Yes, pickup from Chandigarh Railway Station, Airport, Bus Stand, or any address is available." }
    ]
  },

  "chandigarh-to-kasol": {
    from: "Chandigarh",
    to: "Kasol",
    distance: "310 km",
    distanceNum: 310,
    time: "8-9 hours",
    highway: "NH-21 via Mandi & Bhuntar, then Parvati Valley road",
    ...calcFares(310),
    highlights: ["Via Mandi & Parvati Valley", "8-9 hours to backpacker paradise", "Plains to Himalayan valley"],
    popularStops: ["Mandi", "Bhuntar"],
    bestTime: "Early morning 5-6 AM for daylight driving through mountains",
    description: `Chandigarh to Kasol one-way cab covers 310 km from the City Beautiful to the magical Parvati Valley. Kasol, often called the Amsterdam of India, is a backpacker's paradise nestled along the Parvati River in Himachal Pradesh. The route passes through Mandi and Bhuntar before entering the narrow, scenic Parvati Valley.

The 8-9 hour drive includes challenging mountain roads, especially in the Parvati Valley section. Our experienced hill drivers navigate the narrow roads safely. Whether you are heading for trekking to Kheerganga, visiting Manikaran Sahib, or simply enjoying the mountain vibes, our one-way cab gets you there comfortably. Book from ₹3,410 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Chandigarh to Kasol?", answer: "Chandigarh to Kasol one-way cab costs ₹3,410 for Sedan (310 km at ₹11/km). Ertiga is ₹4,650 and Innova is ₹5,580." },
      { question: "How long does Chandigarh to Kasol take?", answer: "The drive takes 8-9 hours. The last section through Parvati Valley is slow due to narrow mountain roads." },
      { question: "Is Innova recommended for Kasol route?", answer: "Ertiga or Innova is recommended for the mountain roads. Sedan works but may be less comfortable on rough patches." },
      { question: "Can I stop at Manikaran on the way?", answer: "Yes, Manikaran Sahib is 5 km before Kasol and is a popular en-route stop for the hot springs and gurudwara." },
      { question: "Is the Parvati Valley road safe?", answer: "The road is narrow but well-travelled. Our drivers are experienced on this route. Monsoon travel may have some risks due to landslides." },
      { question: "Can I get picked up from Chandigarh Airport?", answer: "Yes, pickup from Chandigarh Airport, Railway Station, or any address is available." }
    ]
  },

  "nainital-to-delhi": {
    from: "Nainital",
    to: "Delhi",
    distance: "300 km",
    distanceNum: 300,
    time: "6-7 hours",
    highway: "NH-9 via Haldwani & Moradabad",
    ...calcFares(300),
    highlights: ["Via Haldwani & Moradabad", "6-7 hours lake city to Capital", "Hill station to plains comfortable ride"],
    popularStops: ["Haldwani", "Rampur"],
    bestTime: "Morning 6-7 AM for comfortable daytime travel",
    description: `Nainital to Delhi one-way cab covers 300 km from the beautiful Lake District of Uttarakhand back to the national capital. After your holiday at the stunning Naini Lake, boating, visiting Snow View Point, and enjoying the colonial charm of the hill station, our one-way cab provides a comfortable return to Delhi.

The 6-7 hour drive descends from Nainital to Haldwani in the plains, then follows the highway through Moradabad to Delhi. The initial hill section takes about 1.5 hours, followed by a smooth plains drive. Our hill-experienced drivers ensure a safe descent. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Nainital to Delhi?", answer: "Nainital to Delhi one-way cab costs ₹3,300 for Sedan (300 km at ₹11/km). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra." },
      { question: "How long does Nainital to Delhi take?", answer: "Nainital to Delhi takes 6-7 hours via Haldwani and Moradabad." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Nainital with flight monitoring." },
      { question: "Is the hill road from Nainital steep?", answer: "The Nainital to Haldwani descent has curves but is well-maintained. Our drivers are experienced on hill roads." },
      { question: "Can I be picked up from my hotel in Nainital?", answer: "Yes, pickup from any hotel in Nainital including Mall Road area, Tallital, and Mallital." },
      { question: "Is night travel possible from Nainital?", answer: "We recommend daytime travel for the hill descent section. The plains section is safe for night driving." }
    ]
  },

  "mussoorie-to-delhi": {
    from: "Mussoorie",
    to: "Delhi",
    distance: "290 km",
    distanceNum: 290,
    time: "6-7 hours",
    highway: "Via Dehradun, then NH-334 & Meerut Expressway",
    ...calcFares(290),
    highlights: ["Via Dehradun & Meerut Expressway", "6-7 hours Queen of Hills to Capital", "Mountain charm to city life"],
    popularStops: ["Dehradun", "Roorkee"],
    bestTime: "Morning 7-8 AM for comfortable daytime travel",
    description: `Mussoorie to Delhi one-way cab covers 290 km from the charming Queen of Hills back to the national capital. After your mountain getaway — walking on Mall Road, visiting Kempty Falls, enjoying the views from Gun Hill — our one-way cab provides a smooth return to Delhi. The route descends from Mussoorie to Dehradun and then takes the highway to Delhi.

The 6-7 hour drive starts with a scenic 35 km descent from Mussoorie to Dehradun (1 hour), then follows NH-334 through the Mohand forest, bypasses Haridwar, and joins the Delhi-Meerut Expressway. Our experienced hill drivers handle the mountain descent safely. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Mussoorie to Delhi?", answer: "Mussoorie to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 290 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Mussoorie to Delhi take?", answer: "Mussoorie to Delhi takes 6-7 hours including the 1-hour descent to Dehradun." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Mussoorie with flight tracking." },
      { question: "Can I be picked up from my hotel in Mussoorie?", answer: "Yes, pickup from any hotel on Mall Road, Library Point, or anywhere in Mussoorie." },
      { question: "Is it the same route as Dehradun to Delhi?", answer: "Yes, after descending to Dehradun (35 km, 1 hour), the route is the same as Dehradun to Delhi." },
      { question: "Is night travel possible from Mussoorie?", answer: "We recommend daytime travel for the Mussoorie-Dehradun hill descent. The Dehradun-Delhi highway is safe for night driving." }
    ]
  },

  "mcleodganj-to-delhi": {
    from: "McLeodganj",
    to: "Delhi",
    distance: "480 km",
    distanceNum: 480,
    time: "9-10 hours",
    highway: "Via Kangra & Chandigarh, then NH-44",
    ...calcFares(480),
    highlights: ["Via Kangra Valley & Chandigarh", "9-10 hours Little Lhasa to Capital", "Himalayan retreat to metropolis"],
    popularStops: ["Kangra", "Anandpur Sahib", "Chandigarh bypass"],
    bestTime: "Early morning 5-6 AM or overnight departure",
    description: `McLeodganj to Delhi one-way cab covers 480 km from the home of the Dalai Lama back to the national capital. After your spiritual retreat, Triund trek, visits to the Tibetan monasteries, and soaking in the Himalayan atmosphere, our one-way cab provides a comfortable return to Delhi. The route descends through the Kangra Valley, passes Chandigarh, and joins NH-44 to Delhi.

The 9-10 hour drive starts with scenic mountain roads through the Kangra Valley before transitioning to the plains highway. Our experienced hill drivers ensure safe navigation through the mountain section. Book from ₹5,280 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from McLeodganj to Delhi?", answer: "McLeodganj to Delhi one-way cab costs ₹5,280 for Sedan (480 km at ₹11/km). Ertiga is ₹7,200 and Innova Crysta is ₹8,640. Toll extra." },
      { question: "How long does McLeodganj to Delhi take?", answer: "McLeodganj to Delhi takes 9-10 hours via Kangra, Chandigarh bypass, and NH-44." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from McLeodganj with flight monitoring." },
      { question: "Is overnight travel possible?", answer: "Yes, departing at 9-10 PM and arriving in Delhi by morning is an option. The plains section is safe for night driving." },
      { question: "Can I stop at Chandigarh?", answer: "Yes, Chandigarh is on the route and makes for a natural break point for meals or a rest stop." },
      { question: "Is pickup from Dharamshala also available?", answer: "Yes, McLeodganj is 10 km above Dharamshala. Pickup from either location is available at the same rate." }
    ]
  },

  "kasol-to-delhi": {
    from: "Kasol",
    to: "Delhi",
    distance: "520 km",
    distanceNum: 520,
    time: "11-12 hours",
    highway: "Parvati Valley road to Bhuntar, then NH-21 via Mandi & Chandigarh to NH-44",
    ...calcFares(520),
    highlights: ["Via Parvati Valley & Chandigarh", "11-12 hours mountain valley to Capital", "Backpacker paradise to metro life"],
    popularStops: ["Bhuntar", "Mandi", "Chandigarh bypass"],
    bestTime: "Early morning 4-5 AM or overnight departure",
    description: `Kasol to Delhi one-way cab covers 520 km from the magical Parvati Valley back to the national capital. After your mountain adventure — trekking to Kheerganga, visiting Manikaran hot springs, or simply relaxing by the Parvati River — our one-way cab provides a comfortable return. The route exits the Parvati Valley, passes through Mandi and Chandigarh, then takes NH-44 to Delhi.

The 11-12 hour drive starts with the narrow Parvati Valley road before joining the wider highways. Overnight travel is popular, departing Kasol at night and arriving in Delhi by morning. Our experienced mountain drivers handle the challenging valley roads safely. Book from ₹5,720 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Kasol to Delhi?", answer: "Kasol to Delhi one-way cab costs ₹5,720 for Sedan (520 km at ₹11/km). Ertiga is ₹7,800 and Innova Crysta is ₹9,360. Toll extra." },
      { question: "How long does Kasol to Delhi take?", answer: "Kasol to Delhi takes 11-12 hours. The Parvati Valley section is slow, then the journey speeds up on the main highway." },
      { question: "Is overnight travel recommended?", answer: "Yes, departing at night is popular. However, the Parvati Valley road is best driven in daylight. Consider a 4-5 AM departure instead." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Kasol with flight tracking service." },
      { question: "Which vehicle is best for this long route?", answer: "Innova Crysta is recommended for the 520 km journey through mountains — better comfort and engine power." },
      { question: "Can I stop at Manikaran on the way?", answer: "Yes, Manikaran is 5 km from Kasol on the exit route. You can stop for the hot springs and gurudwara visit." }
    ]
  },

  "dharamshala-to-delhi": {
    from: "Dharamshala",
    to: "Delhi",
    distance: "475 km",
    distanceNum: 475,
    time: "9-10 hours",
    highway: "Via Kangra & Chandigarh, then NH-44",
    ...calcFares(475),
    highlights: ["Via Kangra Valley & NH-44", "9-10 hours Himachal to Capital", "Mountain town to metropolis"],
    popularStops: ["Kangra", "Anandpur Sahib", "Chandigarh bypass"],
    bestTime: "Early morning 5-6 AM or overnight departure",
    description: `Dharamshala to Delhi one-way cab covers 475 km from the scenic Kangra Valley back to the national capital. Dharamshala, home to the Dalai Lama and the Tibetan government-in-exile, is a popular destination for spiritual seekers, cricket fans (HPCA Stadium), and nature lovers. Our one-way cab provides a comfortable return after your mountain stay.

The 9-10 hour drive descends from the Himachal hills through the Kangra Valley, passes near Chandigarh, and takes NH-44 to Delhi. The varied landscape — from pine forests to Punjab plains to the Delhi suburban sprawl — makes this an interesting journey. Book from ₹5,225 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Dharamshala to Delhi?", answer: "Dharamshala to Delhi one-way cab costs ₹5,225 for Sedan (475 km at ₹11/km). Ertiga is ₹7,125 and Innova Crysta is ₹8,550. Toll extra." },
      { question: "How long does Dharamshala to Delhi take?", answer: "Dharamshala to Delhi takes 9-10 hours via Kangra, Chandigarh bypass, and NH-44." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Dharamshala with flight monitoring." },
      { question: "Can I be picked up from McLeodganj?", answer: "Yes, McLeodganj is 10 km above Dharamshala. Pickup from McLeodganj is available at the same rate." },
      { question: "Is overnight travel safe?", answer: "The hill section is best driven in daylight. We recommend early morning departure. The plains section is safe for night driving." },
      { question: "Can I stop at Chandigarh on the way?", answer: "Yes, Chandigarh is a natural break point for meals or a short rest before continuing to Delhi." }
    ]
  },

  "mathura-to-delhi": {
    from: "Mathura",
    to: "Delhi",
    distance: "180 km",
    distanceNum: 180,
    time: "2.5-3 hours",
    highway: "Yamuna Expressway",
    ...calcFares(180),
    highlights: ["Via Yamuna Expressway", "2.5-3 hours quick ride", "Krishna's birthplace to Capital"],
    popularStops: ["Vrindavan (nearby)"],
    bestTime: "Morning after temple darshan or afternoon departure",
    description: `Mathura to Delhi one-way cab covers 180 km via the Yamuna Expressway. After visiting the birthplace of Lord Krishna, exploring the temples of Mathura and nearby Vrindavan, our one-way cab provides a quick, comfortable return to Delhi. The Yamuna Expressway makes this one of the fastest intercity routes in India.

The 2.5-3 hour drive is smooth on the six-lane expressway. Whether you visited for religious darshan, Holi celebrations, or a family trip, our one-way service saves you 50% versus round-trip fares. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Mathura to Delhi?", answer: "Mathura to Delhi one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 180 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Mathura to Delhi take?", answer: "Mathura to Delhi takes just 2.5-3 hours via the Yamuna Expressway." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Mathura with flight monitoring service." },
      { question: "Can I be picked up from Vrindavan?", answer: "Yes, Vrindavan is 15 km from Mathura. Pickup from Vrindavan temples or hotels is available." },
      { question: "Why is minimum billing 300 km for 180 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus a round-trip." },
      { question: "Is this the same expressway as Delhi to Agra?", answer: "Yes, the Yamuna Expressway connects Delhi/Noida to Agra, passing through Mathura at the southern end." }
    ]
  },

  "vrindavan-to-delhi": {
    from: "Vrindavan",
    to: "Delhi",
    distance: "185 km",
    distanceNum: 185,
    time: "3-3.5 hours",
    highway: "Via Mathura, then Yamuna Expressway",
    ...calcFares(185),
    highlights: ["Via Yamuna Expressway", "3-3.5 hours temple town to Capital", "Sacred Braj to Delhi"],
    popularStops: ["Mathura"],
    bestTime: "After morning temple darshan, depart by 10-11 AM",
    description: `Vrindavan to Delhi one-way cab covers 185 km from the sacred town of Lord Krishna's childhood to the national capital. After visiting the magnificent temples — Banke Bihari, ISKCON, Prem Mandir — and experiencing the divine atmosphere of Vrindavan, our one-way cab provides a comfortable return to Delhi via the Yamuna Expressway.

The 3-3.5 hour drive joins the Yamuna Expressway near Mathura for a smooth, fast ride to Delhi. Our one-way service is perfect for pilgrims and tourists who visited for darshan and do not need a return ride from Delhi. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Vrindavan to Delhi?", answer: "Vrindavan to Delhi one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 185 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Vrindavan to Delhi take?", answer: "Vrindavan to Delhi takes 3-3.5 hours via Mathura and the Yamuna Expressway." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Vrindavan with flight monitoring." },
      { question: "Can I stop at Mathura on the way?", answer: "Yes, Mathura is on the route, 15 km from Vrindavan. You can stop at Krishna Janmabhoomi or other temples." },
      { question: "Why is minimum billing 300 km for 185 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus a round-trip." },
      { question: "Is pickup from ISKCON Temple possible?", answer: "Yes, pickup from ISKCON Temple, Banke Bihari area, Prem Mandir, or any hotel in Vrindavan is available." }
    ]
  },

  "ayodhya-to-lucknow": {
    from: "Ayodhya",
    to: "Lucknow",
    distance: "135 km",
    distanceNum: 135,
    time: "2.5-3 hours",
    highway: "NH-330 via Barabanki",
    ...calcFares(135),
    highlights: ["Via NH-330 highway", "2.5-3 hours quick ride", "Ram Janmabhoomi city to Nawabi capital"],
    popularStops: ["Barabanki"],
    bestTime: "After morning temple darshan, depart by 10-11 AM",
    description: `Ayodhya to Lucknow one-way cab covers 135 km from the sacred birthplace of Lord Ram to the City of Nawabs. After visiting the Ram Janmabhoomi Temple, Hanuman Garhi, and the ghats of the Saryu River, our one-way cab provides a quick, comfortable ride to Lucknow for your flight, train, or onward journey.

The 2.5-3 hour drive passes through Barabanki on the well-maintained highway. With the new Ram Temple drawing millions of devotees, this route has become increasingly popular. Our one-way service saves you 50% versus round-trip fares. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Ayodhya to Lucknow?", answer: "Ayodhya to Lucknow one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 135 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Ayodhya to Lucknow take?", answer: "Ayodhya to Lucknow takes 2.5-3 hours via NH-330 through Barabanki." },
      { question: "Can you drop me at Lucknow Airport?", answer: "Yes, direct drops at Chaudhary Charan Singh International Airport, Lucknow from Ayodhya." },
      { question: "Why is minimum billing 300 km for 135 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus round-trip booking." },
      { question: "Is this route popular after Ram Temple darshan?", answer: "Yes, Ayodhya to Lucknow is one of the most popular return routes after visiting the Ram Janmabhoomi Temple." },
      { question: "Can I be picked up from my hotel in Ayodhya?", answer: "Yes, pickup from any hotel, dharamshala, or the temple area in Ayodhya is available." }
    ]
  },

  "prayagraj-to-lucknow": {
    from: "Prayagraj",
    to: "Lucknow",
    distance: "200 km",
    distanceNum: 200,
    time: "3.5-4 hours",
    highway: "Purvanchal Expressway / NH-232",
    ...calcFares(200),
    highlights: ["Via Purvanchal Expressway", "3.5-4 hours Sangam city to Nawabi capital", "Confluence to culture"],
    popularStops: ["Pratapgarh"],
    bestTime: "Morning 7-8 AM after Sangam visit",
    description: `Prayagraj to Lucknow one-way cab covers 200 km from the holy Sangam city (confluence of Ganga, Yamuna, and Saraswati rivers) to the City of Nawabs. After attending the Kumbh Mela, visiting the Triveni Sangam, or paying respects at the Allahabad Fort, our one-way cab provides a comfortable ride to Lucknow for your onward journey.

The 3.5-4 hour drive is smooth via the Purvanchal Expressway or NH-232. Prayagraj (formerly Allahabad) has seen a surge in tourism with the grand Kumbh Mela and improved infrastructure. Our one-way service is perfect for devotees returning to Lucknow for flights or trains. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Prayagraj to Lucknow?", answer: "Prayagraj to Lucknow one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 200 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Prayagraj to Lucknow take?", answer: "Prayagraj to Lucknow takes 3.5-4 hours via the Purvanchal Expressway or NH-232." },
      { question: "Can you drop me at Lucknow Airport?", answer: "Yes, direct drops at Chaudhary Charan Singh International Airport from Prayagraj are available." },
      { question: "Is this route busy during Kumbh Mela?", answer: "Yes, during Kumbh Mela period, advance booking is essential. We operate throughout the Mela with experienced drivers." },
      { question: "Why is minimum billing 300 km for 200 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus round-trip." },
      { question: "Can I be picked up from Sangam area?", answer: "Yes, pickup from Sangam, any ghat, hotel, Railway Station, or any address in Prayagraj is available." }
    ]
  },

  "corbett-to-delhi": {
    from: "Jim Corbett",
    to: "Delhi",
    distance: "260 km",
    distanceNum: 260,
    time: "5-6 hours",
    highway: "NH-9 via Moradabad",
    ...calcFares(260),
    highlights: ["Via Moradabad highway", "5-6 hours jungle to metro", "Wildlife adventure to city life"],
    popularStops: ["Kashipur", "Moradabad"],
    bestTime: "After morning jungle safari, depart by 10-11 AM",
    description: `Jim Corbett to Delhi one-way cab covers 260 km from India's oldest national park to the national capital. After your thrilling tiger safari, nature walks, and jungle resort stay at Corbett National Park, our one-way cab provides a comfortable return to Delhi. The route passes through Kashipur and Moradabad on the NH-9 highway.

The 5-6 hour drive transitions from the forested Kumaon foothills to the Gangetic plains. Whether you spotted a tiger, enjoyed elephant safaris, or simply relaxed in the wilderness, our clean AC cab and professional driver ensure a relaxed journey home. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Jim Corbett to Delhi?", answer: "Jim Corbett to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 260 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Jim Corbett to Delhi take?", answer: "Jim Corbett to Delhi takes 5-6 hours via NH-9 through Moradabad." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Jim Corbett National Park with flight tracking." },
      { question: "Can I be picked up from my jungle resort?", answer: "Yes, pickup from any resort or gate (Bijrani, Jhirna, Dhikala approach) in the Corbett area." },
      { question: "Is the road from Corbett good?", answer: "Yes, the highway from Ramnagar (Corbett gateway) to Delhi is well-maintained. The park approach roads may be narrow." },
      { question: "Can I stop at Moradabad for brass shopping?", answer: "Yes, Moradabad (Brass City) is on the route. You can stop for shopping as an en-route break." }
    ]
  },

  "lansdowne-to-delhi": {
    from: "Lansdowne",
    to: "Delhi",
    distance: "270 km",
    distanceNum: 270,
    time: "6-7 hours",
    highway: "Via Kotdwar, then NH-119 & NH-9",
    ...calcFares(270),
    highlights: ["Via Kotdwar & highway", "6-7 hours cantonment hill to Capital", "Peaceful hills to bustling metro"],
    popularStops: ["Kotdwar", "Najibabad"],
    bestTime: "Morning 7-8 AM for comfortable daytime travel",
    description: `Lansdowne to Delhi one-way cab covers 270 km from the quiet cantonment hill station back to the national capital. Lansdowne, one of the few unspoiled hill stations in Uttarakhand, is known for its serene atmosphere, war memorial, and the Garhwal Rifles regimental centre. After your peaceful getaway, our one-way cab provides a comfortable descent to Delhi.

The 6-7 hour drive starts with a scenic hill descent to Kotdwar, then follows the highway through Najibabad and joins the main Delhi road. The initial hill section requires experienced driving, and our drivers are well-versed on this route. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Lansdowne to Delhi?", answer: "Lansdowne to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 270 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Lansdowne to Delhi take?", answer: "Lansdowne to Delhi takes 6-7 hours via Kotdwar and the NH-9 highway." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct airport drops at IGI Terminal 1, 2, or 3 from Lansdowne with flight tracking." },
      { question: "Is the hill road from Lansdowne difficult?", answer: "The Lansdowne to Kotdwar descent has moderate curves. Our drivers are experienced and ensure a safe journey." },
      { question: "Can I be picked up from my hotel in Lansdowne?", answer: "Yes, pickup from any hotel, Tip-N-Top, or the cantonment area in Lansdowne." },
      { question: "Is this a popular weekend getaway return route?", answer: "Yes, Lansdowne to Delhi is very popular as a weekend return. Book in advance for Sunday departures." }
    ]
  },

  "dalhousie-to-delhi": {
    from: "Dalhousie",
    to: "Delhi",
    distance: "560 km",
    distanceNum: 560,
    time: "10-11 hours",
    highway: "Via Pathankot & NH-44",
    ...calcFares(560),
    highlights: ["Via Pathankot & Punjab", "10-11 hours hill station to Capital", "Colonial charm to metro bustle"],
    popularStops: ["Pathankot", "Jalandhar", "Ludhiana"],
    bestTime: "Early morning 5-6 AM or overnight departure",
    description: `Dalhousie to Delhi one-way cab covers 560 km from the charming colonial hill station in Himachal Pradesh back to the national capital. After your mountain holiday — walking on Mall Road, visiting Khajjiar (Mini Switzerland of India), and enjoying the Himalayan views — our one-way cab provides a comfortable return. The route descends to Pathankot and joins NH-44 through Punjab to Delhi.

The 10-11 hour drive is best started early morning or as an overnight trip. The Dalhousie to Pathankot hill section takes about 2-3 hours, followed by the well-maintained Punjab plains highway. Our experienced drivers navigate both terrain types safely. Book from ₹6,160 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Dalhousie to Delhi?", answer: "Dalhousie to Delhi one-way cab costs ₹6,160 for Sedan (560 km at ₹11/km). Ertiga is ₹8,400 and Innova Crysta is ₹10,080. Toll extra." },
      { question: "How long does Dalhousie to Delhi take?", answer: "Dalhousie to Delhi takes 10-11 hours via Pathankot and NH-44 through Punjab." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Dalhousie with flight monitoring." },
      { question: "Can I stop at Khajjiar on the way?", answer: "Khajjiar is near Dalhousie. If you haven't visited, a short detour is possible at the start of the journey." },
      { question: "Is overnight travel recommended?", answer: "The hill section is best driven in daylight. Early morning departure (5-6 AM) is recommended to reach Delhi by evening." },
      { question: "Which vehicle is best for this route?", answer: "Innova Crysta is recommended for the long 560 km journey with hill and plains sections." }
    ]
  },

  "delhi-to-nainital": {
    from: "Delhi",
    to: "Nainital",
    distance: "310 km",
    distanceNum: 310,
    time: "6-7 hours",
    highway: "NH-9 via Hapur, Moradabad & Kathgodam",
    ...calcFares(310),
    highlights: ["Via NH-9 & Kumaon foothills", "6-7 hours to the Lake District", "Naini Lake & Mall Road destination"],
    popularStops: ["Hapur", "Moradabad", "Kathgodam"],
    bestTime: "Early morning 5-6 AM to reach before afternoon mountain traffic",
    description: `Delhi to Nainital one-way cab covers 310 km from the national capital to Uttarakhand's Lake District. Nainital is a premier Kumaon hill station centred around the emerald Naini Lake, ringed by colonial-era hotels and the iconic Mall Road. Our one-way cab is the choice of weekend travellers, families with children, and honeymooners heading to the Lake District (Naini, Bhim, Sat Tal, Naukuchiatal).

The drive uses NH-9 through Hapur, Garh-Mukteshwar, Moradabad (brass city), Rampur, Kathgodam (rail terminus) before climbing into the Kumaon hills. Total drive time 6–7 hours. Early-morning departure recommended to reach Nainital by 12-1 PM, avoiding afternoon mountain traffic and allowing time to check in and explore Mall Road the same evening.

Our one-way saves versus round-trip: ₹3,410 one-way Sedan vs ₹6,820 round-trip = ₹3,410 saving. Ertiga ₹4,650 and Innova Crysta ₹5,580 one-way. Book from 7668570551.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Nainital?", answer: "Delhi to Nainital one-way Sedan is ₹3,410 (310 km × ₹11/km). Ertiga ₹4,650, Innova Crysta ₹5,580. Toll extra at actual (~₹400-550)." },
      { question: "How long does Delhi to Nainital take by cab?", answer: "Delhi to Nainital takes 6-7 hours via NH-9. The hill section from Kathgodam to Nainital (35 km) takes about 1.5 hours of winding climb." },
      { question: "What time should I leave Delhi for Nainital?", answer: "Leave Delhi by 5-6 AM to reach Nainital by 12-1 PM. This avoids NH-9 mid-day truck traffic and gets you up the mountain before afternoon clouds." },
      { question: "Is the Kathgodam-Nainital hill road safe?", answer: "Yes, well-maintained 35 km climb. Our drivers are Kumaon-experienced. In winter (Dec-Feb), we carry tyre chains if snowfall is forecast." },
      { question: "Can I stop at Moradabad or Hapur on the way?", answer: "Yes, both are on-route. Moradabad is famous for brass handicrafts — a 30-minute shopping break is common." },
      { question: "Which vehicle is best for Delhi to Nainital?", answer: "Innova Crysta is recommended for the 7-hour drive with hill climb. Sedan works for 2-3 passengers with light luggage." }
    ]
  },

  "delhi-to-mussoorie": {
    from: "Delhi",
    to: "Mussoorie",
    distance: "295 km",
    distanceNum: 295,
    time: "6-7 hours",
    highway: "Delhi-Meerut Expressway + NH-334 via Dehradun",
    ...calcFares(295),
    highlights: ["Via Dehradun & Mussoorie hill road", "6-7 hours to Queen of Hills", "Mall Road, Gun Hill, Kempty Falls"],
    popularStops: ["Meerut", "Muzaffarnagar", "Dehradun"],
    bestTime: "Early morning 5-6 AM for a pre-afternoon Mall Road arrival",
    description: `Delhi to Mussoorie one-way cab covers 295 km from the capital to the "Queen of the Hills" in Uttarakhand. Mussoorie sits at 2,000 m elevation with panoramic views of the Himalayas and the Doon Valley. Our one-way cab is ideal for weekend family trips, boarding school visits (Doon School families often continue up), honeymooners, and monsoon escape travellers.

The drive uses the Delhi-Meerut Expressway (first 60 km) then NH-334 through Muzaffarnagar, Roorkee, into Dehradun, then 35 km of hill road up to Mussoorie via the scenic Kempty Falls approach. Total 6–7 hours. Our hill-experienced drivers handle the Dehradun-Mussoorie climb safely.

One-way saves ₹3,245 versus round-trip. Sedan ₹3,300 (300 km minimum), Ertiga ₹4,500, Innova ₹5,400. Winter travellers: we carry chains for Dec-Feb snow.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Mussoorie?", answer: "Delhi to Mussoorie one-way Sedan is ₹3,300 (300 km minimum billing). Ertiga ₹4,500, Innova Crysta ₹5,400. Toll extra." },
      { question: "How long does Delhi to Mussoorie take?", answer: "Delhi to Mussoorie takes 6-7 hours. First 260 km (plains to Dehradun) in 5 hours, then 35 km hill climb in 1.5-2 hours." },
      { question: "Is the Dehradun-Mussoorie road safe for cars?", answer: "Yes, well-maintained ghat road with guardrails. 35 km of scenic climb with viewpoints. Our hill-trained drivers handle it daily." },
      { question: "Can I combine Mussoorie with a Dehradun student drop?", answer: "Absolutely — many families drop students at Doon School / Welham in Dehradun then continue the last 35 km to Mussoorie. No extra charge if same-day." },
      { question: "Which vehicle is best for Delhi to Mussoorie?", answer: "Innova Crysta is recommended for hill comfort and AC performance. Ertiga for families of 5-6. Sedan for 2-3 adults with light luggage." },
      { question: "Is the one-way cab available for Mussoorie in winter?", answer: "Yes, year-round. December-February may have snow on Mussoorie Mall Road — we carry tyre chains and know the cleared alternate routes." }
    ]
  },

  "delhi-to-rishikesh": {
    from: "Delhi",
    to: "Rishikesh",
    distance: "255 km",
    distanceNum: 255,
    time: "5-6 hours",
    highway: "Delhi-Meerut Expressway + NH-334 via Haridwar",
    ...calcFares(255),
    highlights: ["Via Haridwar & Rishikesh", "5-6 hours to Yoga Capital of the World", "Laxman Jhula, Ram Jhula, Beatles Ashram"],
    popularStops: ["Meerut", "Muzaffarnagar", "Roorkee", "Haridwar"],
    bestTime: "Early morning 5-6 AM for a pre-sunset Ganga Aarti at Parmarth Niketan",
    description: `Delhi to Rishikesh one-way cab covers 255 km to the Yoga Capital of the World. Rishikesh is where the Ganges descends from the Himalayas into the plains — the spiritual and adventure gateway of North India. Our one-way cab serves yoga retreat guests (Parmarth Niketan, Sivananda, Anand Prakash), white-water rafting groups (Shivpuri to Rishikesh stretch), Char Dham pilgrims (starting point for Badrinath/Kedarnath), and spiritual seekers visiting the Beatles Ashram.

The drive uses the Delhi-Meerut Expressway (first 60 km, 14-lane) then NH-334 through Muzaffarnagar, Roorkee, bypassing Haridwar, into Rishikesh. 5–6 hours total. Recommended departure: 5–6 AM Delhi to reach Rishikesh by 12 noon, giving you afternoon time to settle at your ashram or hotel and evening for Ganga Aarti at Parmarth Niketan (6:30 PM).

One-way saves ₹2,805 vs round-trip. Sedan ₹3,300 (300 km min), Ertiga ₹4,500, Innova ₹5,400. Call 7668570551 or WhatsApp for instant booking.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Rishikesh?", answer: "Delhi to Rishikesh one-way Sedan is ₹3,300 (300 km minimum). Ertiga ₹4,500, Innova Crysta ₹5,400." },
      { question: "How long does Delhi to Rishikesh take?", answer: "Delhi to Rishikesh takes 5-6 hours via Delhi-Meerut Expressway and NH-334 bypassing Haridwar." },
      { question: "Can you drop at my Rishikesh ashram?", answer: "Yes — we drop at Parmarth Niketan, Sivananda, Anand Prakash, Phool Chatti, or any Rishikesh ashram / hotel / rafting camp doorstep." },
      { question: "What time is Ganga Aarti at Parmarth Niketan?", answer: "6:30 PM daily. Our drivers typically time the drop so you have 1-2 hours to settle before Aarti." },
      { question: "Can I extend to Haridwar before Rishikesh?", answer: "Yes, Haridwar is 25 km before Rishikesh on the same route — adding a Haridwar stop is free. The driver can wait at Har Ki Pauri for a brief darshan before continuing." },
      { question: "Is the road to Rishikesh good?", answer: "Excellent. The Delhi-Meerut Expressway and NH-334 are well-maintained 4-6 lane highways. No hill section until after Rishikesh (towards Kedarnath/Badrinath)." }
    ]
  },

  "delhi-to-ayodhya": {
    from: "Delhi",
    to: "Ayodhya",
    distance: "690 km",
    distanceNum: 690,
    time: "10-12 hours",
    highway: "Yamuna Expressway + Agra-Lucknow Expressway",
    ...calcFares(690),
    highlights: ["Via two premium expressways", "10-12 hours to Ram Janmabhoomi", "Ayodhya Ram Mandir darshan"],
    popularStops: ["Agra bypass", "Lucknow", "Basti"],
    bestTime: "Overnight departure 8-9 PM or early morning 3-4 AM",
    description: `Delhi to Ayodhya one-way cab covers 690 km to the birthplace of Lord Ram and the site of the newly consecrated Ram Janmabhoomi Mandir. Ayodhya, now one of India's most visited pilgrimage destinations, draws millions of devotees, families, and heritage travellers each year. Our one-way cab is the choice for families who want the comfort and flexibility of private travel without paying for the return leg (many extend to Varanasi or Prayagraj onwards).

The drive uses two of India's best expressways: Yamuna Expressway (Delhi to Agra, 165 km) and Agra-Lucknow Expressway (302 km access-controlled), then NH-27 from Lucknow to Ayodhya (155 km). Total 10–12 hours. Many devotees prefer overnight departure (8-9 PM Delhi) to arrive Ayodhya by dawn for an early Mangla Aarti darshan.

One-way saves ₹7,590 vs round-trip. Sedan ₹7,590, Ertiga ₹10,350, Innova Crysta ₹12,420. Ram Mandir e-pass darshan timing assistance available. Book on 7668570551.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Ayodhya?", answer: "Delhi to Ayodhya one-way Sedan is ₹7,590 (690 km × ₹11/km). Ertiga ₹10,350, Innova Crysta ₹12,420. Toll extra (approx ₹1,200-1,500)." },
      { question: "How long does Delhi to Ayodhya take by cab?", answer: "10-12 hours via Yamuna Expressway + Agra-Lucknow Expressway + NH-27. Overnight travel is faster due to less traffic." },
      { question: "Can you help with Ram Mandir darshan timing?", answer: "Yes — we drop you at the Ram Mandir area with timing recommendations for Mangla Aarti (4:30 AM), Shringar Aarti (6:45 AM), or evening Sandhya Aarti. E-pass info shared before trip." },
      { question: "Is overnight travel safe for Delhi to Ayodhya?", answer: "Yes, both expressways are well-lit and patrolled. Many pilgrims prefer overnight to arrive at dawn. Our drivers are expressway-experienced." },
      { question: "Can I extend to Varanasi or Prayagraj from Ayodhya?", answer: "Yes, many pilgrims do Ayodhya + Prayagraj + Varanasi in one trip. We can convert to a multi-city outstation package — better rate than separate one-ways." },
      { question: "Which vehicle is best for this long drive?", answer: "Innova Crysta strongly recommended for 12-hour comfort, especially for families with elderly passengers. Ertiga for families of 5-6. Sedan for 2 adults max on this long distance." }
    ]
  },

  "ajmer-to-jaipur": {
    from: "Ajmer",
    to: "Jaipur",
    distance: "135 km",
    distanceNum: 135,
    time: "2.5-3 hours",
    highway: "NH-48 via Kishangarh & Dudu",
    ...calcFares(135),
    highlights: ["Via NH-48", "2.5-3 hours Rajasthan corridor", "Dargah City to Pink City"],
    popularStops: ["Kishangarh", "Dudu"],
    bestTime: "Morning 9-10 AM after Dargah visit or afternoon 2-3 PM",
    description: `Ajmer to Jaipur one-way cab covers 135 km on NH-48 connecting the Dargah City to the Pink City. After paying respects at Ajmer Sharif or a trip to nearby Pushkar, travellers often continue to Jaipur for the Rajasthan sightseeing circuit. Our one-way cab saves you from paying for the return drive when you're only going forward.

The drive is smooth on a 4-lane highway, passing Kishangarh (marble trading hub) and Dudu. 2.5–3 hours door-to-door. Many travellers pick up from Ajmer Sharif Dargah or from Ajmer Junction Railway Station.

One-way saves ₹3,300 vs round-trip. Sedan ₹3,300 (300 km minimum billing), Ertiga ₹4,500, Innova ₹5,400. Call 7668570551.`,
    faqs: [
      { question: "What is the one-way cab fare from Ajmer to Jaipur?", answer: "Ajmer to Jaipur one-way Sedan is ₹3,300 (300 km minimum for 135 km). Ertiga ₹4,500, Innova ₹5,400." },
      { question: "How long does Ajmer to Jaipur take by cab?", answer: "Ajmer to Jaipur takes 2.5-3 hours via NH-48 through Kishangarh." },
      { question: "Can I combine Pushkar before Jaipur?", answer: "Yes — Pushkar is 15 km from Ajmer. We include a 1-hour Pushkar stop at no extra charge (Brahma Temple + Pushkar Lake)." },
      { question: "Can you pick me up from Ajmer Sharif Dargah?", answer: "Yes, post ziyarat pickup from the designated taxi zone near the Dargah. Our driver holds a name placard." },
      { question: "Is this part of Rajasthan circuit?", answer: "Yes, Ajmer-Jaipur is a common leg of the Rajasthan tourism circuit (Jaipur-Ajmer-Pushkar-Udaipur) or return from Ajmer/Pushkar after darshan." },
      { question: "Can you drop at Jaipur Airport or Railway Station?", answer: "Yes, Jaipur Airport (Sanganer), Jaipur Junction, or any Jaipur hotel — all included in the fare." }
    ]
  },

  "mount-abu-to-udaipur": {
    from: "Mount Abu",
    to: "Udaipur",
    distance: "165 km",
    distanceNum: 165,
    time: "3-3.5 hours",
    highway: "NH-48 via Abu Road",
    ...calcFares(165),
    highlights: ["Via Abu Road & NH-48", "3-3.5 hours Rajasthan's only hill station to Lake City", "Hills to lakes journey"],
    popularStops: ["Abu Road"],
    bestTime: "Morning 8-9 AM for scenic daylight drive",
    description: `Mount Abu to Udaipur one-way cab covers 165 km from Rajasthan's only hill station to the romantic City of Lakes. After visiting the stunning Dilwara Temples, Nakki Lake, and Sunset Point in Mount Abu, our one-way cab takes you to Udaipur — one of India's most beautiful cities. The route descends from Mount Abu to Abu Road and joins NH-48 to Udaipur.

The 3-3.5 hour drive starts with a scenic hill descent and then passes through the Aravalli countryside to Udaipur. This is a popular route for Rajasthan circuit travellers combining Mount Abu with Udaipur. Our one-way service saves you 50% versus round-trip fares. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Mount Abu to Udaipur?", answer: "Mount Abu to Udaipur one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 165 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Mount Abu to Udaipur take?", answer: "Mount Abu to Udaipur takes 3-3.5 hours via Abu Road and NH-48." },
      { question: "Is the hill descent from Mount Abu steep?", answer: "The Mount Abu descent to Abu Road has curves but is well-maintained. Our drivers are experienced on this hill road." },
      { question: "Can I stop at Ranakpur on the way?", answer: "Ranakpur Jain Temple is slightly off the direct route but can be visited with a small detour. Ask your driver for options." },
      { question: "Why is minimum billing 300 km for 165 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus a round-trip." },
      { question: "Is this part of the Rajasthan circuit?", answer: "Yes, Mount Abu to Udaipur is a popular leg of the Rajasthan tourism circuit (Jaipur-Udaipur-Mount Abu or Mount Abu-Udaipur-Jaipur)." }
    ]
  },
  "delhi-to-jodhpur": {
    from: "Delhi",
    to: "Jodhpur",
    distance: "600 km",
    distanceNum: 600,
    time: "9-10 hours",
    highway: "NH-48 to Jaipur, then NH-62 via Ajmer-Beawar",
    ...calcFares(600),
    highlights: ["Via NH-48 & NH-62", "9-10 hour Blue City run", "Gateway to Marwar & Thar"],
    popularStops: ["Jaipur", "Ajmer", "Beawar"],
    bestTime: "Start 5-5:30 AM to clear Gurgaon and reach Jodhpur by evening",
    description: `A one-way cab from Delhi to Jodhpur is the smart way to reach the Blue City when you have an onward train, a wedding at one of the Marwar heritage hotels, or a Rajasthan circuit that continues to Jaisalmer or Udaipur without doubling back. Families, destination-wedding guests and corporate teams heading to Jodhpur's industrial belt all book this route because a one-way fare means you pay only for the forward 600 km instead of the 1,200 km a return taxi would clock.

On the calcFares formula the billable distance is the full 600 km, so a sedan like a Dzire or Etios comes to roughly ₹6,600, an Ertiga to about ₹9,000, and an Innova Crysta to around ₹10,800 for the entire drop. Compared with a round-trip taxi that bills both legs plus driver night charges, a genuine one-way saves you several thousand rupees and the dead-return kilometres you would otherwise fund.

The drive follows NH-48 out of Delhi through Gurgaon, Behror and Shahpura into Jaipur, then swings onto NH-62 through Ajmer, Beawar and Bar before the landscape opens into the dry Marwar plateau approaching Jodhpur. It is a long but well-surfaced run, mostly four-lane until the Ajmer-Beawar stretch, with the Aravalli ridges keeping you company past Kishangarh.

For breaks, the Behror dhaba belt on NH-48 is the classic first halt for paranthas and tea, Highway King and Midway near Shahpura are reliable, and once past Ajmer the roadside line-hotels around Beawar serve hot Rajasthani thalis. Many travellers pause briefly at Ajmer for the Dargah or detour the short distance to Pushkar before the final leg to Jodhpur.

Pickup is offered anywhere across Delhi-NCR, whether that is a Dwarka flat, a Noida sector, Gurgaon, or directly from IGI Airport or New Delhi and Hazrat Nizamuddin railway stations for guests flying or training in. At the Jodhpur end the driver drops you exactly where you need to be, be it Ratanada, the Clock Tower area, a Sardarpura hotel or a fort-view haveli. For a 600 km single haul we usually recommend an Ertiga or Innova Crysta for the legroom and luggage space on a full-day journey.

Book your Delhi to Jodhpur one-way cab on WhatsApp or call 7668570551 for a fixed all-inclusive quote with a verified driver and no return-fare loading.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Jodhpur cost?", answer: "A one-way sedan is around ₹6,600, an Ertiga about ₹9,000 and an Innova Crysta roughly ₹10,800 for the full 600 km drop. You pay only the forward distance, not a return leg." },
      { question: "How long does the Delhi to Jodhpur taxi take?", answer: "Plan on 9-10 hours for the roughly 600 km via NH-48 and NH-62 through Jaipur and Ajmer, depending on your Gurgaon exit time and meal halts." },
      { question: "What are good stops on the Delhi to Jodhpur route?", answer: "The Behror dhaba belt on NH-48 is the usual breakfast halt, Midway near Shahpura works for lunch, and many travellers pause at Ajmer for the Dargah before the final Marwar stretch." },
      { question: "Can the cab pick me up from Delhi airport or railway station for Jodhpur?", answer: "Yes. We pick up from IGI Airport, New Delhi and Hazrat Nizamuddin stations, or any home or hotel address across Delhi-NCR for your Jodhpur drop." },
      { question: "Which vehicle is best for Delhi to Jodhpur?", answer: "For a 600 km single haul an Ertiga or Innova Crysta is most comfortable thanks to the extra legroom and luggage room; a sedan suits two travellers on a budget." },
      { question: "Are tolls included and when should I start for Jodhpur?", answer: "Toll and state-tax handling are confirmed in your quote. Start by 5-5:30 AM to clear Gurgaon traffic and reach Jodhpur comfortably by evening." }
    ]
  },
  "delhi-to-udaipur": {
    from: "Delhi",
    to: "Udaipur",
    distance: "660 km",
    distanceNum: 660,
    time: "10-11 hours",
    highway: "NH-48 via Jaipur, Ajmer, Bhilwara, Chittorgarh",
    ...calcFares(660),
    highlights: ["Via NH-48 expressway corridor", "10-11 hour City of Lakes run", "Gateway to Mewar"],
    popularStops: ["Jaipur", "Ajmer", "Chittorgarh"],
    bestTime: "Depart 5 AM to reach Udaipur by sunset over the lakes",
    description: `A one-way cab from Delhi to Udaipur is built for travellers heading to the City of Lakes for a lakeside wedding, a Mewar heritage holiday, or a Rajasthan loop that flows onward toward Mount Abu or Gujarat without returning the taxi empty. Honeymoon couples, palace-hotel guests and film/event crews favour the one-way because you only pay for the forward 660 km rather than funding a pointless return drive.

Using the calcFares rates on the full 660 km billable distance, a sedan works out to about ₹7,260, an Ertiga to roughly ₹9,900, and an Innova Crysta to around ₹11,880 for the door-to-door drop. A round-trip taxi would bill both legs plus multi-day driver allowances, so a one-way booking typically saves several thousand rupees on this long Mewar haul.

The drive runs almost entirely along NH-48, leaving Delhi through Gurgaon and Behror into Jaipur, then continuing through Ajmer, Bhilwara and the historic fort town of Chittorgarh before the road climbs into the Aravalli folds that cradle Udaipur. The final hour through Mewar's hills, lakes and terraced fields is one of the prettiest approaches in Rajasthan.

For halts, the Behror and Shahpura dhabas handle the early breakfast, the line-hotels around Bhilwara serve good lunch thalis, and Chittorgarh is worth a short stop to glimpse its sprawling hilltop fort. Many travellers also detour briefly to Pushkar or Ajmer's Dargah while passing through, splitting the long day pleasantly.

We pick up from anywhere in Delhi-NCR, including IGI Airport, New Delhi and Nizamuddin stations, Gurgaon, Noida and Dwarka, and at Udaipur we drop you precisely at your lake-facing hotel near Lake Pichola, a Fatehsagar guesthouse, or a haveli in the old city. For a journey this long an Innova Crysta or Ertiga is the sensible choice for comfort and luggage; a sedan suits a budget-conscious couple.

To book your Delhi to Udaipur one-way taxi, message us on WhatsApp or call 7668570551 for a clean fixed quote with a professional driver and zero return-fare loading.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Udaipur?", answer: "Expect about ₹7,260 for a sedan, ₹9,900 for an Ertiga and ₹11,880 for an Innova Crysta over the full 660 km drop, charged for the forward leg only." },
      { question: "How many hours is the Delhi to Udaipur drive?", answer: "It is roughly 10-11 hours for the 660 km along NH-48 via Jaipur, Ajmer and Chittorgarh, allowing for meal breaks and the final hilly stretch into Udaipur." },
      { question: "What can I see en route from Delhi to Udaipur?", answer: "Chittorgarh Fort is the standout stop near the route, and many travellers also pause at Ajmer or briefly at Pushkar while passing through on NH-48." },
      { question: "Can the Udaipur cab collect me from Delhi airport?", answer: "Yes, we offer pickups from IGI Airport and New Delhi and Nizamuddin railway stations, as well as any address across Delhi-NCR." },
      { question: "Which car suits the Delhi to Udaipur trip best?", answer: "For 660 km an Innova Crysta or Ertiga gives the best comfort and luggage space; a sedan is fine for two passengers travelling light." },
      { question: "Are tolls and taxes covered, and what is the best departure time?", answer: "Tolls and state taxes are clarified in your quote. Leave Delhi around 5 AM to reach Udaipur by sunset over the lakes." }
    ]
  },
  "delhi-to-jaisalmer": {
    from: "Delhi",
    to: "Jaisalmer",
    distance: "790 km",
    distanceNum: 790,
    time: "12-13 hours",
    highway: "NH-48 to Jaipur-Ajmer, then via Jodhpur and NH-125",
    ...calcFares(790),
    highlights: ["Via Jaipur, Jodhpur & the Thar", "12-13 hour Golden City run", "Gateway to desert dunes"],
    popularStops: ["Jaipur", "Jodhpur", "Pokhran"],
    bestTime: "Start before dawn (4:30-5 AM); consider an overnight Jodhpur halt",
    description: `A one-way cab from Delhi to Jaisalmer is the practical choice for the long haul to the Golden City, whether you are heading out for a Sam Sand Dunes desert camp, a fort-stay holiday, an army-posting at the Pokhran-Jaisalmer belt, or a Rajasthan trip that ends in the Thar without bringing the taxi all the way back. Because it is one of the longest drives in the state, paying only for the forward 790 km instead of a return makes a real difference.

On the calcFares rates the full 790 km is billable, so a sedan comes to roughly ₹8,690, an Ertiga to about ₹11,850, and an Innova Crysta to around ₹14,220 for the complete drop. A return taxi would bill both legs plus two or more days of driver allowance, so a one-way Jaisalmer booking saves a substantial sum and spares you the empty homeward kilometres.

The route runs NH-48 from Delhi through Jaipur and Ajmer, then onward via Beawar toward Jodhpur, before striking west on NH-125 across the open Thar through Pokhran into Jaisalmer. The last stretch is classic desert highway, with sand on both shoulders, windmills on the horizon and the golden Jaisalmer Fort rising into view as you arrive.

Given the distance, many travellers break the journey with a night halt at Jodhpur and complete the final desert leg fresh the next morning. For food, the Behror and Beawar dhabas handle the early stretch, Jodhpur offers a proper meal stop, and Pokhran has roadside places before the final dune-country run. Pickup is from anywhere in Delhi-NCR, including IGI Airport and the main railway stations, and at Jaisalmer we drop you at your fort-area haveli, a Sam Road resort or a desert-camp transfer point.

For a 790 km trip the Innova Crysta is strongly recommended for comfort and luggage on the long desert highway, with the Ertiga a solid mid-option. Book your Delhi to Jaisalmer one-way taxi on WhatsApp or call 7668570551 for a fixed all-inclusive quote with an experienced long-route driver.`,
    faqs: [
      { question: "How much does a one-way Delhi to Jaisalmer cab cost?", answer: "A sedan is around ₹8,690, an Ertiga about ₹11,850 and an Innova Crysta roughly ₹14,220 for the full 790 km drop, charged for the forward leg only." },
      { question: "How long is the Delhi to Jaisalmer journey?", answer: "It is about 12-13 hours over roughly 790 km via Jaipur, Jodhpur and Pokhran, so many travellers add an overnight Jodhpur halt to split the drive." },
      { question: "What are the key stops on the Delhi to Jaisalmer route?", answer: "Jaipur and Jodhpur are the main meal and rest stops, with Pokhran providing roadside breaks before the final Thar desert stretch into Jaisalmer." },
      { question: "Can the Jaisalmer cab pick me up from Delhi airport or station?", answer: "Yes. We pick up from IGI Airport, New Delhi and Nizamuddin stations, and any home or hotel address across Delhi-NCR." },
      { question: "Which vehicle is best for Delhi to Jaisalmer?", answer: "For this 790 km desert haul an Innova Crysta is strongly recommended for comfort and luggage, with the Ertiga as a capable mid-range option." },
      { question: "Are tolls included and when should I leave for Jaisalmer?", answer: "Toll and state-tax handling is set out in your quote. Start before dawn around 4:30-5 AM, or break the trip with a Jodhpur night halt." }
    ]
  },
  "delhi-to-pushkar": {
    from: "Delhi",
    to: "Pushkar",
    distance: "400 km",
    distanceNum: 400,
    time: "7-8 hours",
    highway: "NH-48 via Jaipur to Ajmer, then to Pushkar",
    ...calcFares(400),
    highlights: ["Via NH-48 & Ajmer", "7-8 hour holy-town run", "Brahma Temple & Pushkar Lake"],
    popularStops: ["Jaipur", "Kishangarh", "Ajmer"],
    bestTime: "Leave by 5:30 AM to reach Pushkar before the afternoon heat",
    description: `A one-way cab from Delhi to Pushkar suits pilgrims heading for the famous Brahma Temple and the holy Pushkar Lake, travellers timing the Pushkar Camel Fair, and tourists on a Rajasthan circuit that continues to Ajmer, Jodhpur or Udaipur rather than turning back to Delhi. Because Pushkar sits just beyond Ajmer, the one-way fare lets you pay only for the forward 400 km instead of an unnecessary return.

Under the calcFares rates the full 400 km is billable, so a sedan is about ₹4,400, an Ertiga roughly ₹6,000, and an Innova Crysta around ₹7,200 for the complete drop. A round-trip taxi would charge both legs plus driver waiting, so the one-way saves you a clear sum on this devotional run.

The drive takes NH-48 out of Delhi through Gurgaon and Behror into Jaipur, then continues past Kishangarh's marble market and Ajmer before the road climbs the short Nag Pahar pass down into the temple town of Pushkar. The final descent over the Snake Mountain into the lake-ringed valley is a memorable arrival, with the ghats and the Brahma Temple spire visible below.

For halts, the Behror dhabas serve the early breakfast, Midway near Shahpura is a dependable mid-point, and travellers often pause at Ajmer for the Dargah Sharif before the short final hop to Pushkar. Kishangarh is a quick detour for anyone interested in its marble trade. Pickup is available across Delhi-NCR, from IGI Airport or the railway stations, and at Pushkar we drop you near the main market, the lake ghats or your chosen camp or haveli.

For a 400 km drive a sedan is comfortable for a couple, while families on a pilgrimage are better in an Ertiga or Innova Crysta. Book your Delhi to Pushkar one-way taxi on WhatsApp or call 7668570551 for a fixed all-inclusive quote with a courteous driver.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Pushkar?", answer: "A sedan is around ₹4,400, an Ertiga about ₹6,000 and an Innova Crysta roughly ₹7,200 for the full 400 km drop, billed for the forward leg only." },
      { question: "How long does the Delhi to Pushkar drive take?", answer: "Plan on about 7-8 hours for the roughly 400 km via NH-48 through Jaipur and Ajmer, including a meal break or two." },
      { question: "What stops are worth making on the way to Pushkar?", answer: "Behror dhabas suit breakfast, Ajmer's Dargah Sharif is a common pause just before Pushkar, and Kishangarh's marble market is a quick optional detour." },
      { question: "Can the cab pick me up from Delhi airport for Pushkar?", answer: "Yes, we collect from IGI Airport, New Delhi and Nizamuddin stations, or any address across Delhi-NCR for your Pushkar drop." },
      { question: "Which car is best for the Delhi to Pushkar trip?", answer: "A sedan suits two travellers; a pilgrim family with luggage is more comfortable in an Ertiga or Innova Crysta over the 400 km." },
      { question: "Are tolls covered and what is the best time to start?", answer: "Tolls are handled as confirmed in your quote. Leave Delhi by around 5:30 AM to reach Pushkar before the afternoon heat." }
    ]
  },
  "delhi-to-ajmer": {
    from: "Delhi",
    to: "Ajmer",
    distance: "390 km",
    distanceNum: 390,
    time: "7-8 hours",
    highway: "NH-48 via Jaipur and Kishangarh",
    ...calcFares(390),
    highlights: ["Via NH-48 & Kishangarh", "7-8 hour Dargah run", "Ajmer Sharif & Ana Sagar"],
    popularStops: ["Jaipur", "Kishangarh", "Behror"],
    bestTime: "Start by 5:30 AM to reach the Dargah by midday",
    description: `A one-way cab from Delhi to Ajmer is the most-booked option for devotees visiting the revered Ajmer Sharif Dargah of Khwaja Moinuddin Chishti, as well as travellers continuing onward to Pushkar, Jodhpur or Udaipur on a wider Rajasthan trip. Since most pilgrims do not need the taxi to wait or return, the one-way fare means paying only for the forward 390 km rather than a wasteful round leg.

On the calcFares rates the full 390 km is billable, so a sedan comes to about ₹4,290, an Ertiga to roughly ₹5,850, and an Innova Crysta to around ₹7,020 for the complete drop. A return taxi would bill both directions plus driver waiting at the Dargah, so a one-way Ajmer booking saves a meaningful amount on this devotional run.

The drive follows NH-48 from Delhi through Gurgaon, Behror and Shahpura into Jaipur, then continues past Dudu and the Kishangarh marble belt before reaching Ajmer in its bowl of the Aravalli hills, with Ana Sagar Lake and Taragarh Fort framing the town. It is a well-laid expressway corridor that keeps the long drive smooth.

The Behror dhaba cluster is the standard breakfast halt, Midway near Shahpura works well for lunch, and Kishangarh offers a quick look at its famous marble markets. Many pilgrims pair Ajmer with a short onward hop to nearby Pushkar, which the same driver can extend if you wish. Pickup is across Delhi-NCR, from IGI Airport or the major railway stations, and at Ajmer we drop you near the Dargah Bazaar, Ana Sagar or your hotel.

For 390 km a sedan suits a couple, while a family or a group on pilgrimage will find an Ertiga or Innova Crysta more comfortable for the luggage and legroom. Book your Delhi to Ajmer one-way taxi on WhatsApp or call 7668570551 for a fixed all-inclusive quote with a reliable driver.`,
    faqs: [
      { question: "How much does a one-way Delhi to Ajmer cab cost?", answer: "A sedan is around ₹4,290, an Ertiga about ₹5,850 and an Innova Crysta roughly ₹7,020 for the full 390 km drop, charged for the forward leg only." },
      { question: "How long is the Delhi to Ajmer journey?", answer: "It is about 7-8 hours over roughly 390 km via NH-48 through Jaipur and Kishangarh, including meal breaks." },
      { question: "What are good stops on the Delhi to Ajmer route?", answer: "Behror dhabas suit breakfast, Midway near Shahpura works for lunch, and Kishangarh's marble market is a quick worthwhile pause before Ajmer." },
      { question: "Can the cab pick me up from Delhi airport or station for Ajmer?", answer: "Yes, we pick up from IGI Airport, New Delhi and Nizamuddin stations, and any home or hotel address across Delhi-NCR." },
      { question: "Which vehicle is best for Delhi to Ajmer?", answer: "A sedan is comfortable for a couple; a pilgrim family with luggage will prefer an Ertiga or Innova Crysta over the 390 km." },
      { question: "Are tolls included and when should I start for Ajmer?", answer: "Toll and tax handling is set out in your quote. Leave Delhi by around 5:30 AM to reach the Dargah comfortably by midday." }
    ]
  },
  "delhi-to-mathura": {
    from: "Delhi",
    to: "Mathura",
    distance: "180 km",
    distanceNum: 180,
    time: "3-3.5 hours",
    highway: "Yamuna Expressway",
    ...calcFares(180),
    highlights: ["Via Yamuna Expressway", "3-3.5 hour Krishna-bhoomi run", "Birthplace of Lord Krishna"],
    popularStops: ["Yamuna Expressway food plaza", "Vrindavan"],
    bestTime: "Early morning start for darshan; avoid Janmashtami-day crowds without a plan",
    description: `A one-way cab from Delhi to Mathura is the easiest way to reach Krishna Janmabhoomi for darshan at the Shri Krishna Janmasthan temple, a Holi or Janmashtami pilgrimage, or a Braj-region tour that continues to Vrindavan, Govardhan and Gokul before heading home a different way. Because the Yamuna Expressway makes this a quick run, many devotees book one-way and pay only for the forward 180 km.

Note that the calcFares formula has a 300 km minimum billing, so a 180 km drop is billed at 300 km: a sedan is about ₹3,300, an Ertiga roughly ₹4,500, and an Innova Crysta around ₹5,400. Even at the minimum, a single one-way drop avoids the return leg, waiting charges and the cost of holding a taxi all day, which makes it cleaner than a round trip for pilgrims who plan to stay or move on within Braj.

The drive is almost entirely on the smooth, fast Yamuna Expressway, leaving Delhi via Noida and the Greater Noida toll plaza, then sweeping past Jewar and Mathura's exit in barely three hours. The expressway's central food plazas provide clean restrooms and meals, making it one of the most comfortable short pilgrimages out of the capital.

There is no shortage of stops: the Yamuna Expressway food courts handle breakfast and tea, and Vrindavan lies just minutes from Mathura, so many travellers combine both in one trip to cover the Banke Bihari and Prem Mandir temples. Pickup is available across Delhi-NCR, including IGI Airport and the railway stations, and at Mathura we drop you near the Janmabhoomi temple, the Vishram Ghat, or your guesthouse.

For this short hop a sedan suits a couple comfortably, while a family doing a full Braj circuit is better in an Ertiga or Innova Crysta. Book your Delhi to Mathura one-way taxi on WhatsApp or call 7668570551 for a fixed all-inclusive quote with a courteous driver.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Mathura?", answer: "Because of the 300 km minimum billing a sedan is about ₹3,300, an Ertiga ₹4,500 and an Innova Crysta ₹5,400 for the one-way drop, with no return charge." },
      { question: "How long does the Delhi to Mathura drive take?", answer: "Just about 3 to 3.5 hours for the roughly 180 km on the fast Yamuna Expressway, traffic permitting." },
      { question: "What stops are there on the Delhi to Mathura route?", answer: "The Yamuna Expressway food plazas are ideal for breakfast and breaks, and Vrindavan is only minutes from Mathura for a combined Braj darshan." },
      { question: "Can the cab pick me up from Delhi airport for Mathura?", answer: "Yes, we collect from IGI Airport, New Delhi and Nizamuddin stations, or any address across Delhi-NCR for your Mathura drop." },
      { question: "Which car should I choose for Delhi to Mathura?", answer: "A sedan is fine for a couple; a family doing the full Mathura-Vrindavan circuit is more comfortable in an Ertiga or Innova Crysta." },
      { question: "Are tolls included and when should I start for Mathura?", answer: "Yamuna Expressway tolls are handled as stated in your quote. An early-morning start gives you easy darshan and avoids midday crowds." }
    ]
  },
  "delhi-to-vrindavan": {
    from: "Delhi",
    to: "Vrindavan",
    distance: "160 km",
    distanceNum: 160,
    time: "3-3.5 hours",
    highway: "Yamuna Expressway",
    ...calcFares(160),
    highlights: ["Via Yamuna Expressway", "3-3.5 hour temple-town run", "Banke Bihari & Prem Mandir"],
    popularStops: ["Yamuna Expressway food plaza", "Mathura"],
    bestTime: "Reach by mid-morning; Banke Bihari closes for midday, plan around aarti times",
    description: `A one-way cab from Delhi to Vrindavan is perfect for devotees heading to the temple town of Lord Krishna's childhood, drawn by the Banke Bihari Temple, the dazzling Prem Mandir, the ISKCON temple and the ghats along the Yamuna. Pilgrims who plan to stay overnight, join an ashram, or continue around the Braj circuit to Mathura and Govardhan book one-way so they pay only for the forward 160 km.

Because the calcFares formula bills a 300 km minimum, this short drop is charged at 300 km: a sedan is about ₹3,300, an Ertiga roughly ₹4,500, and an Innova Crysta around ₹5,400. Even so, a one-way booking is cleaner than a round trip with all-day waiting charges for travellers who intend to linger among the temples or move deeper into Braj.

The drive is almost wholly on the Yamuna Expressway, exiting Delhi through Noida and Greater Noida, gliding past Jewar before the Vrindavan-Mathura exit. It is one of the smoothest, fastest short pilgrimages from the capital, getting you from the city to the bhajan-filled lanes of Vrindavan in about three hours.

The Yamuna Expressway food plazas offer clean meal and rest halts on the way, and since Mathura's Krishna Janmabhoomi is only a few kilometres from Vrindavan, most travellers combine the two in a single Braj-darshan day. Pickup is available across Delhi-NCR, including IGI Airport and the major railway stations, and at Vrindavan we drop you near Banke Bihari, Prem Mandir, ISKCON or your ashram, keeping in mind the narrow inner lanes where larger vehicles park at the edge.

For this quick run a sedan suits a couple, while a pilgrim family is more comfortable in an Ertiga or Innova Crysta. Book your Delhi to Vrindavan one-way taxi on WhatsApp or call 7668570551 for a fixed all-inclusive quote with a respectful, punctual driver.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Vrindavan cost?", answer: "With the 300 km minimum billing a sedan is about ₹3,300, an Ertiga ₹4,500 and an Innova Crysta ₹5,400 for the one-way drop, with no return charge." },
      { question: "How long is the Delhi to Vrindavan drive?", answer: "Around 3 to 3.5 hours for roughly 160 km on the fast Yamuna Expressway, depending on Noida traffic at the start." },
      { question: "What can I see on the way to Vrindavan?", answer: "The Yamuna Expressway food plazas are handy for breaks, and Mathura's Krishna Janmabhoomi is just minutes away for a combined Braj darshan." },
      { question: "Can the Vrindavan cab pick me up from Delhi airport?", answer: "Yes, we pick up from IGI Airport, New Delhi and Nizamuddin stations, or any home address across Delhi-NCR." },
      { question: "Which vehicle is best for Delhi to Vrindavan?", answer: "A sedan suits a couple; a family doing the Vrindavan-Mathura circuit is more comfortable in an Ertiga or Innova Crysta." },
      { question: "Are tolls included and when should I arrive in Vrindavan?", answer: "Yamuna Expressway tolls are handled per your quote. Aim to reach by mid-morning and plan around Banke Bihari's midday closure and aarti timings." }
    ]
  },
  "delhi-to-dharamshala": {
    from: "Delhi",
    to: "Dharamshala",
    distance: "480 km",
    distanceNum: 480,
    time: "10-11 hours",
    highway: "NH-44 to Ambala, then NH-503/NH-154 via Una-Kangra",
    ...calcFares(480),
    highlights: ["Via NH-44 & Kangra Valley", "10-11 hour Himachal run", "Dhauladhar foothills"],
    popularStops: ["Ambala", "Una", "Kangra"],
    bestTime: "Start by 4:30-5 AM to clear the plains and climb in daylight",
    description: `A one-way cab from Delhi to Dharamshala is the comfortable way to reach the Kangra Valley hill station beneath the snow-capped Dhauladhar range, whether you are heading for a Himachal holiday, a meditation retreat, the cricket stadium, or onward to McLeodganj and the Tibetan settlements. Hill travellers especially prefer a one-way because mountain round-trip taxis add costly return and overnight charges; here you pay only for the forward 480 km.

On the calcFares rates the full 480 km is billable, so a sedan comes to about ₹5,280, an Ertiga to roughly ₹7,200, and an Innova Crysta to around ₹8,640 for the door-to-door drop. A return taxi would also bill the empty homeward leg plus the driver's hill night halts, so a one-way Dharamshala booking saves a worthwhile sum.

The drive runs NH-44 from Delhi through Sonipat, Panipat, Karnal and Ambala on fast plains highway, then turns toward Himachal via the Una-Kangra corridor on NH-503/NH-154, climbing gradually through Kangra town with its ancient fort before the final winding ascent into Dharamshala. The last hour rewards you with terraced tea gardens and the Dhauladhar wall rising sharply ahead.

For halts, the Karnal and Ambala highway dhabas, including the famous Haveli and Amrik Sukhdev belt around Murthal early on, handle meals well, and Kangra has good roadside stops before the climb. Pickup is from anywhere in Delhi-NCR, including IGI Airport and the railway stations, and at Dharamshala we drop you at your hotel in lower Dharamshala, Kotwali Bazaar or onward toward McLeodganj if you wish.

For a 480 km hill journey an Innova Crysta is the best choice for its pull on the mountain gradients and luggage capacity, with the Ertiga a strong alternative; a sedan suits two light travellers. Book your Delhi to Dharamshala one-way taxi on WhatsApp or call 7668570551 for a fixed all-inclusive quote with an experienced hill driver.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Dharamshala?", answer: "A sedan is around ₹5,280, an Ertiga about ₹7,200 and an Innova Crysta roughly ₹8,640 for the full 480 km hill drop, charged for the forward leg only." },
      { question: "How long does the Delhi to Dharamshala drive take?", answer: "Plan on about 10-11 hours for the roughly 480 km via NH-44 and the Una-Kangra hill route, depending on your early start and the final climb." },
      { question: "What are good stops on the Delhi to Dharamshala route?", answer: "The Murthal dhaba belt near Delhi and the Karnal-Ambala highway stops handle meals, and Kangra town with its fort is a good pause before the final ascent." },
      { question: "Can the cab pick me up from Delhi airport for Dharamshala?", answer: "Yes, we pick up from IGI Airport, New Delhi and Nizamuddin stations, and any address across Delhi-NCR for your Dharamshala drop." },
      { question: "Which vehicle is best for Delhi to Dharamshala?", answer: "For this 480 km hill run an Innova Crysta is ideal for the mountain gradients and luggage, with the Ertiga a strong alternative and a sedan fine for two light travellers." },
      { question: "Are tolls included and when should I start for Dharamshala?", answer: "Toll and tax handling is set out in your quote. Start by 4:30-5 AM so you cross the plains early and do the hill climb in daylight." }
    ]
  },
  "delhi-to-mcleodganj": {
    from: "Delhi",
    to: "McLeodganj",
    distance: "490 km",
    distanceNum: 490,
    time: "10-11 hours",
    highway: "NH-44 to Ambala, then NH-503/NH-154 via Una-Kangra-Dharamshala",
    ...calcFares(490),
    highlights: ["Via NH-44 & upper Kangra", "10-11 hour Little Lhasa run", "Dalai Lama's hill town"],
    popularStops: ["Ambala", "Una", "Dharamshala"],
    bestTime: "Depart 4:30-5 AM; tackle the final hairpins above Dharamshala in daylight",
    description: `A one-way cab from Delhi to McLeodganj is ideal for travellers heading to upper Dharamshala's "Little Lhasa," home of the Dalai Lama, the Tsuglagkhang Complex, Bhagsu and Dharamkot, and the trail-heads for Triund. Backpackers, yoga and meditation retreaters, and families on a Himachal break overwhelmingly book one-way because hill round-trips carry steep return and overnight charges; here you pay only for the forward 490 km.

On the calcFares rates the full 490 km is billable, so a sedan is about ₹5,390, an Ertiga roughly ₹7,350, and an Innova Crysta around ₹8,820 for the door-to-door drop. A return taxi would bill the empty homeward leg plus the driver's mountain night halt, so a one-way McLeodganj booking saves a solid sum on the trip up.

The route follows NH-44 from Delhi through Panipat, Karnal and Ambala across the plains, then climbs into Himachal via Una and Kangra on NH-503/NH-154, passing through Dharamshala before the final steep, switchback-laden climb up to McLeodganj perched above it. That last stretch is narrow and winding, which is exactly why an experienced hill driver matters on this route.

For meals, the Murthal dhabas early on and the Karnal-Ambala highway stops are reliable, and Kangra and lower Dharamshala offer breaks before the climb. Pickup is from anywhere in Delhi-NCR, including IGI Airport and the railway stations, and at McLeodganj we drop you near the main square, the monastery, or toward Bhagsu and Dharamkot, noting that the upper lanes are tight and busy.

For a 490 km hill journey an Innova Crysta is the best pick for the steep gradients and luggage, with the Ertiga a capable alternative and a sedan fine for two light travellers. Book your Delhi to McLeodganj one-way taxi on WhatsApp or call 7668570551 for a fixed all-inclusive quote with an experienced mountain driver.`,
    faqs: [
      { question: "How much does a one-way Delhi to McLeodganj cab cost?", answer: "A sedan is around ₹5,390, an Ertiga about ₹7,350 and an Innova Crysta roughly ₹8,820 for the full 490 km hill drop, charged for the forward leg only." },
      { question: "How long is the Delhi to McLeodganj drive?", answer: "About 10-11 hours for the roughly 490 km via NH-44 and the Una-Kangra-Dharamshala hill route, including the final climb above Dharamshala." },
      { question: "What stops are good on the Delhi to McLeodganj route?", answer: "The Murthal dhabas and Karnal-Ambala highway stops handle meals, and lower Dharamshala is a natural break before the switchbacks up to McLeodganj." },
      { question: "Can the cab pick me up from Delhi airport for McLeodganj?", answer: "Yes, we pick up from IGI Airport, New Delhi and Nizamuddin stations, and any address across Delhi-NCR for your McLeodganj drop." },
      { question: "Which vehicle is best for Delhi to McLeodganj?", answer: "For the steep final hill section an Innova Crysta is best, with the Ertiga a capable alternative; a sedan suits two light travellers." },
      { question: "Are tolls included and when should I start for McLeodganj?", answer: "Toll and tax handling is in your quote. Depart 4:30-5 AM so you reach the narrow hairpins above Dharamshala in daylight." }
    ]
  },
  "delhi-to-kasol": {
    from: "Delhi",
    to: "Kasol",
    distance: "520 km",
    distanceNum: 520,
    time: "11-12 hours",
    highway: "NH-44 to Chandigarh, then NH-205/NH-3 via Bilaspur-Mandi-Bhuntar",
    ...calcFares(520),
    highlights: ["Via Chandigarh & Parvati Valley", "11-12 hour mountain run", "Gateway to Parvati Valley & Tosh"],
    popularStops: ["Chandigarh", "Mandi", "Bhuntar"],
    bestTime: "Overnight departure (9-10 PM) is popular to reach Kasol by morning",
    description: `A one-way cab from Delhi to Kasol is the go-to for travellers heading into the Parvati Valley, whether for the riverside cafes of Kasol itself or as a base for Tosh, Kheerganga, Malana and Manikaran's hot springs and gurudwara. Backpackers, friends-groups and trekkers prefer one-way because mountain round-trips load on heavy return and waiting charges; here you pay only for the forward 520 km into the hills.

On the calcFares rates the full 520 km is billable, so a sedan is about ₹5,720, an Ertiga roughly ₹7,800, and an Innova Crysta around ₹9,360 for the door-to-door drop. A return taxi would bill the empty homeward leg plus the driver's overnight valley halt, so a one-way Kasol booking is the economical choice for the trip up.

The route runs NH-44 from Delhi through Panipat, Karnal and Ambala to Chandigarh, then climbs into Himachal on NH-205/NH-3 through Bilaspur, Sundernagar and Mandi, following the Beas to Bhuntar, where it turns up the Parvati Valley alongside the rushing Parvati river to Kasol. The Mandi-to-Bhuntar gorge stretch is scenic but winding, so an experienced hill driver is important.

A popular pattern is an overnight departure from Delhi so you cross the plains while sleeping and wake to the river valley. For meals, the Murthal dhabas, the Chandigarh-area stops and the line-dhabas around Mandi and Bhuntar serve hot food through the night, and Manikaran is a short detour from Kasol for the hot springs. Pickup is from anywhere in Delhi-NCR, including IGI Airport and the railway stations, and we drop you in Kasol, or onward to Manikaran or the Tosh-Barshaini road head if the road permits.

For a 520 km mountain run an Innova Crysta handles the gradients and luggage best, with the Ertiga a solid mid-option; a sedan suits a small group travelling light. Book your Delhi to Kasol one-way taxi on WhatsApp or call 7668570551 for a fixed all-inclusive quote with an experienced mountain driver.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Kasol?", answer: "A sedan is around ₹5,720, an Ertiga about ₹7,800 and an Innova Crysta roughly ₹9,360 for the full 520 km drop into the Parvati Valley, charged for the forward leg only." },
      { question: "How long does the Delhi to Kasol drive take?", answer: "Plan on about 11-12 hours for the roughly 520 km via Chandigarh, Mandi and Bhuntar, which is why many travellers leave overnight." },
      { question: "What are good stops on the Delhi to Kasol route?", answer: "The Murthal dhabas, Chandigarh-area eateries and the Mandi-Bhuntar line-dhabas serve meals, and Manikaran's hot springs are a short detour from Kasol." },
      { question: "Can the cab pick me up from Delhi airport for Kasol?", answer: "Yes, we pick up from IGI Airport, New Delhi and Nizamuddin stations, and any address across Delhi-NCR for your Kasol drop." },
      { question: "Which vehicle is best for Delhi to Kasol?", answer: "For the winding Parvati Valley road an Innova Crysta is best for gradients and luggage, with the Ertiga a solid mid-option and a sedan fine for a small light group." },
      { question: "Are tolls included and when should I leave for Kasol?", answer: "Toll and tax handling is set out in your quote. An overnight departure around 9-10 PM is popular so you reach Kasol by morning." }
    ]
  },
  "delhi-to-corbett": {
    from: "Delhi",
    to: "Jim Corbett",
    distance: "245 km",
    distanceNum: 245,
    time: "5-6 hours",
    highway: "NH-9 / NH-734 via Hapur-Moradabad-Kashipur to Ramnagar",
    ...calcFares(245),
    highlights: ["Via Moradabad & Kashipur", "5-6 hour jungle-safari run", "Gateway to Corbett Tiger Reserve"],
    popularStops: ["Gajraula", "Moradabad", "Kashipur"],
    bestTime: "Start by 6 AM to reach Ramnagar in time for an afternoon safari check-in",
    description: `A one-way cab from Delhi to Jim Corbett is the relaxed way to reach Ramnagar and the resorts ringing Corbett Tiger Reserve, whether you are booked for a Dhikala, Bijrani or Jhirna zone safari, a riverside weekend, or a corporate offsite at one of the Kosi-river properties. Families and weekend travellers often book one-way because they plan to stay over and do not need the taxi waiting; you pay only for the forward 245 km.

Because the calcFares formula bills a 300 km minimum, this drop is charged at 300 km: a sedan is about ₹3,300, an Ertiga roughly ₹4,500, and an Innova Crysta around ₹5,400. Even at the minimum, a one-way booking avoids the return leg and the cost of holding a cab over your safari days, making it cleaner than a round trip for a stay-over trip.

The drive leaves Delhi on NH-9 through Ghaziabad, Hapur and Gajraula, continues past Moradabad's brassware belt, then turns north via Kashipur on NH-734 into Uttarakhand's terai, reaching Ramnagar at the edge of the reserve. The final stretch passes mango orchards and sal forest, with the Kosi river appearing as you near the resort belt of Dhikuli and Garjia.

For halts, the Gajraula highway stops, including the well-known McDonald's and Cheetal Grand, handle breakfast, and Moradabad and Kashipur offer further meal breaks. Many travellers pause at the Garjia Devi temple on the riverbank near Ramnagar before checking in. Pickup is from anywhere in Delhi-NCR, including IGI Airport and the railway stations, and we drop you exactly at your resort gate along the Ramnagar-Dhikuli-Kosi belt.

For a 245 km run a sedan suits a couple, while a family with luggage and safari gear is more comfortable in an Ertiga or Innova Crysta on the terai roads. Book your Delhi to Jim Corbett one-way taxi on WhatsApp or call 7668570551 for a fixed all-inclusive quote with a dependable driver.`,
    faqs: [
      { question: "How much does a one-way Delhi to Jim Corbett cab cost?", answer: "With the 300 km minimum billing a sedan is about ₹3,300, an Ertiga ₹4,500 and an Innova Crysta ₹5,400 for the one-way drop to Ramnagar, with no return charge." },
      { question: "How long is the Delhi to Jim Corbett drive?", answer: "About 5-6 hours for the roughly 245 km via Hapur, Moradabad and Kashipur to Ramnagar, depending on your start time and breaks." },
      { question: "What are good stops on the Delhi to Corbett route?", answer: "The Gajraula highway eateries like Cheetal Grand suit breakfast, and the Garjia Devi temple near Ramnagar is a popular riverside pause before check-in." },
      { question: "Can the cab pick me up from Delhi airport for Corbett?", answer: "Yes, we pick up from IGI Airport, New Delhi and Nizamuddin stations, and any address across Delhi-NCR for your Ramnagar drop." },
      { question: "Which vehicle is best for Delhi to Jim Corbett?", answer: "A sedan is fine for a couple; a family with safari luggage is more comfortable in an Ertiga or Innova Crysta on the terai roads." },
      { question: "Are tolls included and when should I start for Corbett?", answer: "Tolls are handled as stated in your quote. Start by around 6 AM to reach Ramnagar in time for an afternoon safari check-in." }
    ]
  },
  "delhi-to-lansdowne": {
    from: "Delhi",
    to: "Lansdowne",
    distance: "260 km",
    distanceNum: 260,
    time: "6-7 hours",
    highway: "NH-334 via Meerut & Kotdwar",
    ...calcFares(260),
    highlights: ["Quiet cantonment hill station", "6-7 hours scenic drive", "Untouched Garhwal Himalayas"],
    popularStops: ["Kotdwar", "Najibabad"],
    bestTime: "Start by 5-6 AM to clear Ghaziabad-Meerut belt before the daytime traffic builds",
    description: `Lansdowne is the hill station people pick when they want pine forests and silence instead of crowds, and a one-way cab from Delhi is the most sensible way to reach it. The town sits at around 1,700 metres in the Garhwal hills, a cantonment maintained by the Garhwal Rifles, so there are no big shopping bazaars or traffic jams — just oak and deodar slopes, Tip-in-Top viewpoint and Bhulla Tal lake. Families on a weekend escape, couples wanting a quiet getaway, and small groups of trekkers all book this route because the public transport options to Lansdowne are slow and require a change at Kotdwar.

Booking one-way instead of a round trip is the real saving. A round trip on a 260 km route would bill you for the return empty leg too, but a one-way cab is charged only for the journey out. With our fare formula, billing applies on a minimum of 300 km, so a Sedan works out to ₹3,300, an Ertiga to ₹4,500 and an Innova Crysta to ₹5,400 for the full Delhi-to-Lansdowne drop. You pay once, you are dropped at your hotel gate, and you are not paying the driver to return to Delhi while you stay back in the hills.

The drive itself is a steady climb through the plains and then the foothills. You leave Delhi on NH-9 / NH-334 toward Ghaziabad and Meerut, then continue past Khatauli and Bijnor country before reaching Najibabad and Kotdwar, the gateway town at the base of the hills. From Kotdwar the road narrows and begins twisting upward through Dugadda and dense forest for the final 40 km to Lansdowne. This last stretch is the prettiest part — thick tree cover, occasional langurs by the roadside and cooling air as you gain height.

For breaks, the Meerut bypass and the Cheetal Grand near Khatauli are the classic halts on this corridor for a clean washroom, paratha breakfast and tea. Closer to the hills, Kotdwar has roadside dhabas where you can grab lunch before the climb, and many travellers stop at Sidhbali Baba temple just outside Kotdwar for a quick blessing. Once you cross Dugadda the options thin out, so it is wise to eat before the final ascent.

Pickup is from anywhere in Delhi-NCR — your home in South Delhi, a hotel in Paharganj or Connaught Place, or directly from IGI Airport or New Delhi / Anand Vihar railway stations if you are flying or training in. The driver tracks your flight or train and waits, so a tired arrival can head straight to the hills. Drop is fully flexible: your resort, a guesthouse in the cantonment, or the Bhulla Tal area — wherever you are staying.

On vehicle choice, a Sedan like a Dzire is comfortable for two or three people with light luggage and handles the hill road well. For a family of four to six with bags, the Ertiga gives more room, and the Innova Crysta is the pick for larger groups or anyone who wants extra comfort on the long winding ascent. To book your Delhi-to-Lansdowne one-way cab, call or WhatsApp 7668570551 and we will confirm a clean car and an experienced hill driver for your travel date.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Lansdowne cost?", answer: "A Sedan costs ₹3,300, an Ertiga ₹4,500 and an Innova Crysta ₹5,400. Because Lansdowne is 260 km, billing applies on the 300 km minimum. Toll and state taxes are extra and there is no charge for the driver's return leg." },
      { question: "How long does the Delhi to Lansdowne drive take?", answer: "The journey is around 260 km and takes 6 to 7 hours including the slow climb from Kotdwar to Lansdowne. Leaving Delhi early in the morning helps you avoid the Ghaziabad-Meerut traffic and reach by lunch." },
      { question: "Where can we stop for food on the way to Lansdowne?", answer: "Cheetal Grand near Khatauli is the popular breakfast and washroom halt on the plains stretch. Kotdwar has good dhabas for lunch before the hill climb, and many travellers stop at Sidhbali Baba temple just outside Kotdwar." },
      { question: "Can the cab pick us up from Delhi airport or railway station?", answer: "Yes. We offer pickup from IGI Airport and from New Delhi, Anand Vihar and Hazrat Nizamuddin railway stations. The driver tracks your flight or train so you can head to Lansdowne straight after arriving." },
      { question: "Which vehicle is best for the trip to Lansdowne?", answer: "A Sedan suits two or three travellers, an Ertiga is ideal for a family of four to six with luggage, and an Innova Crysta gives the most comfort for larger groups or the long winding hill road." },
      { question: "Are tolls included and what is the best time to start?", answer: "Tolls and state entry taxes are charged separately from the cab fare. The best time to start is 5 to 6 AM so you clear the Ghaziabad and Meerut belt early and complete the Kotdwar climb in daylight." }
    ]
  },
  "delhi-to-katra": {
    from: "Delhi",
    to: "Katra",
    distance: "630 km",
    distanceNum: 630,
    time: "11-12 hours",
    highway: "NH-44 (Delhi-Jammu Highway)",
    ...calcFares(630),
    highlights: ["Base for Vaishno Devi yatra", "Via NH-44 expressway corridor", "Door-to-door pilgrim comfort"],
    popularStops: ["Murthal", "Ludhiana", "Jammu"],
    bestTime: "Start 4-5 AM to reach Katra by evening and rest before the Vaishno Devi trek",
    description: `Katra is the base town for the Vaishno Devi pilgrimage, and a one-way cab from Delhi is the option pilgrims choose when they want to travel on their own schedule with luggage, elderly family members and no train-ticket scramble. The 630 km run up NH-44 ends at the foothills of the Trikuta mountains, from where the 12 km trek (or pony, palki and helicopter options) to the Bhawan begins. Families travelling together for darshan, senior citizens who cannot manage crowded trains, and groups carrying offerings all prefer the comfort and privacy of a private car straight to their Katra hotel.

Choosing one-way over a round trip matters on a route this long. A return booking would charge you for the empty drive back to Delhi while you spend two or three days on the yatra. A one-way cab is billed only for the outbound journey. On our formula the 630 km distance is well above the 300 km minimum, so you pay for the actual kilometres: a Sedan comes to ₹6,930, an Ertiga to ₹9,450 and an Innova Crysta to ₹11,340 for the Delhi-to-Katra drop, with tolls and taxes extra.

The drive runs the length of the Grand Trunk corridor. You leave Delhi through Sonipat and Panipat, cross into Punjab past Ambala, Ludhiana and Jalandhar, then enter Jammu & Kashmir near Pathankot and Kathua before reaching Jammu city. From Jammu the road climbs gently along the Tawi river toward Udhampur and finally Katra. The newer expressway sections have cut the time considerably, and most of the route is smooth four-to-six lane highway.

This corridor has the best dhabas in the country. Murthal, barely an hour out of Delhi, is famous for its paratha dhabas like Amrik Sukhdev and is the standard breakfast stop. Further along, the Punjab stretch around Ludhiana and Jalandhar has excellent vegetarian dhabas serving dal makhani and lassi. Near Jammu, you will find clean food courts, and many pilgrims stop at the Nagrota or Jammu temples on the way up.

Pickup is door-to-door from anywhere in Delhi-NCR, and we frequently collect pilgrims from IGI Airport or New Delhi and Anand Vihar railway stations when they have travelled in from other cities first. The driver waits for delayed flights and trains. Drop is at your Katra hotel or guesthouse near the bus stand or Banganga area, close to where the yatra registration and trek begin.

For a long pilgrimage drive like this, comfort matters. A Sedan is fine for two or three pilgrims, but most families pick the Ertiga for the extra legroom on a 12-hour journey, and the Innova Crysta is the favourite for groups of six or for elderly travellers who want the smoothest ride. To book your Delhi-to-Katra one-way cab for Vaishno Devi, call or WhatsApp 7668570551 and we will arrange an experienced highway driver and a comfortable car for your darshan trip.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Katra?", answer: "A Sedan costs ₹6,930, an Ertiga ₹9,450 and an Innova Crysta ₹11,340 for the 630 km Delhi-to-Katra drop. Tolls and state taxes are extra, and you pay only for the one-way journey, not the driver's return." },
      { question: "How long does it take to drive from Delhi to Katra?", answer: "The 630 km drive up NH-44 takes around 11 to 12 hours with food and rest breaks. Starting at 4 to 5 AM gets you to Katra by evening, leaving the night to rest before the Vaishno Devi trek." },
      { question: "Where do cabs stop for food on the Delhi-Katra route?", answer: "Murthal near Delhi is the classic paratha-dhaba breakfast stop. The Punjab stretch around Ludhiana and Jalandhar has excellent vegetarian dhabas, and there are clean food courts near Jammu before the final climb to Katra." },
      { question: "Can the cab pick pilgrims up from Delhi airport or railway station?", answer: "Yes. We pick up from IGI Airport and from New Delhi, Anand Vihar and Nizamuddin railway stations for pilgrims arriving from other cities. The driver tracks your flight or train and waits if it is delayed." },
      { question: "Which car is best for the Vaishno Devi trip from Delhi?", answer: "A Sedan suits two or three pilgrims, but for a 12-hour drive most families prefer the Ertiga for legroom or the Innova Crysta for the smoothest ride, especially with elderly travellers and luggage." },
      { question: "Are tolls included and when should we start for Katra?", answer: "Tolls and state entry taxes are billed separately from the cab fare. The best time to start is 4 to 5 AM so you cover the long NH-44 run in daylight and reach Katra in the evening to rest before darshan." }
    ]
  },
  "delhi-to-kasauli": {
    from: "Delhi",
    to: "Kasauli",
    distance: "290 km",
    distanceNum: 290,
    time: "5-6 hours",
    highway: "NH-44 via Ambala & Zirakpur, then Parwanoo road",
    ...calcFares(290),
    highlights: ["Colonial hill town near Chandigarh", "5-6 hours easy drive", "Pine forests & mall road charm"],
    popularStops: ["Karnal", "Ambala", "Parwanoo"],
    bestTime: "Leave by 6 AM to enjoy the Parwanoo-Kasauli climb in clear morning light",
    description: `Kasauli is the gentle Himachal hill town that Delhi families reach for when they want pine forests, colonial bungalows and a walkable Mall Road without the long haul of Shimla or Manali. A one-way cab from Delhi is the easiest way to get there because the final climb from Parwanoo to Kasauli is a short, pretty stretch best done by car. Weekenders, couples, and parents with small children pick this route because Kasauli is compact, quiet and only about five to six hours from the capital.

Booking one-way is the cheaper, smarter choice. A round trip would charge for the return empty run while you stay back enjoying Sunset Point and Christ Church. A one-way cab bills only the outbound leg. Kasauli is 290 km, just under the 300 km billing minimum, so on our formula a Sedan is ₹3,300, an Ertiga ₹4,500 and an Innova Crysta ₹5,400 for the full Delhi-to-Kasauli drop, with tolls and taxes added on top. We are upfront that very short routes still bill at the 300 km floor — it keeps the pricing simple and honest.

The drive is one of the smoothest in North India. You head out of Delhi on NH-44 through Sonipat, Panipat and Karnal, cross Kurukshetra and Ambala, then pass Zirakpur near Chandigarh before reaching Parwanoo, the gateway to Himachal. From Parwanoo the road begins its short climb through Dharampur and Garkhal, with the Kasauli ridge appearing through the pines. The Timber Trail at Parwanoo, with its cable car, is a popular pause point before the final ascent.

For food, the NH-44 corridor is dhaba heaven. Karnal's Haveli and the Pipli area are favourites for a Punjabi breakfast, and the Murthal paratha belt is right at the start if you leave very early. Near Parwanoo, the Timber Trail resort and several roadside cafes serve good meals before you climb. Once in Kasauli, Mall Road has small bakeries and the famous Kasauli Club area, but it is best to eat your main meal before the hill section.

Pickup is from any address across Delhi-NCR, and we also collect travellers from IGI Airport and New Delhi, Anand Vihar or Chandigarh-bound stations. The driver tracks arrivals and waits, so you can fly in and head straight to the hills. Drop is flexible to your hotel, a heritage homestay near Upper Mall or a resort on the Garkhal road.

For vehicle choice, a Sedan handles the Parwanoo-Kasauli road comfortably for two or three people. Families of four to six will be happier in an Ertiga, and the Innova Crysta is ideal for larger groups or anyone who wants extra comfort on the winding final climb. To book your Delhi-to-Kasauli one-way cab, call or WhatsApp 7668570551 and we will send a clean car with a driver who knows the hill route well.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Kasauli?", answer: "A Sedan costs ₹3,300, an Ertiga ₹4,500 and an Innova Crysta ₹5,400. Kasauli is 290 km, just under the 300 km billing minimum, so the fare uses that floor. Tolls and taxes are extra and there is no return-leg charge." },
      { question: "How long is the Delhi to Kasauli drive?", answer: "The 290 km drive takes about 5 to 6 hours, including the short climb from Parwanoo to Kasauli. Leaving Delhi by 6 AM keeps the NH-44 run smooth and gets you to the hills before midday." },
      { question: "Where can we stop to eat on the way to Kasauli?", answer: "The NH-44 corridor has excellent dhabas — Murthal for parathas if you start early, and Karnal's Haveli for a Punjabi breakfast. Near Parwanoo, the Timber Trail resort and roadside cafes are good for a meal before the climb." },
      { question: "Can the cab pick us up from the airport or station?", answer: "Yes. We offer pickup from IGI Airport and from New Delhi, Anand Vihar and Nizamuddin railway stations. The driver tracks your flight or train and waits, so you can travel straight to Kasauli on arrival." },
      { question: "Which vehicle suits the Delhi to Kasauli trip?", answer: "A Sedan is comfortable for two or three travellers, an Ertiga suits a family of four to six with luggage, and an Innova Crysta is best for larger groups or extra comfort on the winding Parwanoo-Kasauli road." },
      { question: "Are tolls included and what is the best time to leave?", answer: "Tolls and state entry taxes are charged separately. The best time to start is around 6 AM so you complete the NH-44 stretch and the Parwanoo-Kasauli climb in clear morning light." }
    ]
  },
  "delhi-to-gwalior": {
    from: "Delhi",
    to: "Gwalior",
    distance: "320 km",
    distanceNum: 320,
    time: "5-6 hours",
    highway: "Yamuna Expressway & NH-44 via Agra",
    ...calcFares(320),
    highlights: ["Via Yamuna Expressway & Agra", "5-6 hours fast highway drive", "Historic fort city of the Scindias"],
    popularStops: ["Mathura", "Agra", "Dholpur"],
    bestTime: "Start by 6 AM to use the Yamuna Expressway early and reach Gwalior by noon",
    description: `Gwalior is the historic fort city of the Scindias, famous for its hilltop fort, the Jai Vilas Palace and the Tansen tomb, and a one-way cab from Delhi gets you there on fast highways in well under six hours. Travellers book this route for heritage tourism, business visits, and as a gateway onward to Khajuraho or Orchha. Because the drive uses the Yamuna Expressway and then NH-44, it is one of the quickest 300-plus km runs out of Delhi, which makes a private car far more convenient than the train for a flexible itinerary.

A one-way booking saves you the cost of the return empty leg. If you are staying in Gwalior or moving onward to Madhya Pradesh, there is no point paying for the driver to bring an empty car back to Delhi. A one-way cab bills only the outbound journey. At 320 km, Gwalior is above the 300 km minimum, so on our formula you pay for the real distance: a Sedan is ₹3,520, an Ertiga ₹4,800 and an Innova Crysta ₹5,760 for the Delhi-to-Gwalior drop, plus tolls and taxes.

The route is genuinely fast. You exit Delhi onto the Yamuna Expressway near Greater Noida, glide past Mathura toward Agra, then join NH-44 south through Dholpur, cross the Chambal river into Madhya Pradesh and arrive at Gwalior. The Yamuna Expressway and the Agra-Gwalior NH-44 sections are smooth, access-controlled and quick, with minimal town traffic until you reach Gwalior itself.

For food, the Yamuna Expressway has well-known service plazas with clean restrooms and food courts, ideal for a quick breakfast. Around Agra you can pause for the famous petha or a proper meal, and the Dholpur stretch has roadside dhabas serving good Rajasthani and Madhya Pradesh fare. Many travellers club this drive with a short stop at the Taj Mahal in Agra since it is right on the way.

Pickup is from any Delhi-NCR address, and we regularly collect travellers from IGI Airport and New Delhi, Hazrat Nizamuddin and Anand Vihar railway stations. The driver tracks your flight or train and waits if it is late. Drop is flexible — your Gwalior hotel near the fort, the Lashkar area, or onward toward Orchha if you are continuing your trip.

On vehicles, a Sedan is a comfortable, economical choice for two or three people on this smooth expressway run. For a family with luggage, the Ertiga gives more space, and the Innova Crysta is the pick for groups or for travellers who want premium comfort on the highway. To book your Delhi-to-Gwalior one-way cab, call or WhatsApp 7668570551 and we will confirm a clean car and an experienced expressway driver for your travel date.`,
    faqs: [
      { question: "What does a one-way cab from Delhi to Gwalior cost?", answer: "A Sedan costs ₹3,520, an Ertiga ₹4,800 and an Innova Crysta ₹5,760 for the 320 km Delhi-to-Gwalior drop. Tolls and taxes are extra, and you pay only for the one-way journey with no return-leg charge." },
      { question: "How long is the Delhi to Gwalior drive?", answer: "Using the Yamuna Expressway and NH-44 via Agra, the 320 km drive takes about 5 to 6 hours. Starting by 6 AM lets you use the expressway early and reach Gwalior around noon." },
      { question: "Can we stop at Agra or the Taj Mahal on the way?", answer: "Yes. Agra is right on the route, so many travellers pause for the Taj Mahal or for the famous petha. The Yamuna Expressway service plazas and Dholpur dhabas are also good for breakfast and meals." },
      { question: "Does the cab pick up from Delhi airport or railway stations?", answer: "Yes. We pick up from IGI Airport and from New Delhi, Nizamuddin and Anand Vihar railway stations. The driver tracks your flight or train and waits if there is a delay." },
      { question: "Which vehicle is best for the Delhi to Gwalior trip?", answer: "A Sedan is economical and comfortable for two or three people on this smooth expressway run. An Ertiga suits families with luggage, and an Innova Crysta is best for groups or premium highway comfort." },
      { question: "Are tolls included and when should we start?", answer: "Tolls on the Yamuna Expressway and NH-44 plus state taxes are charged separately from the cab fare. The best time to start is around 6 AM to use the expressway early and avoid Agra-area traffic later in the day." }
    ]
  },
  "delhi-to-bikaner": {
    from: "Delhi",
    to: "Bikaner",
    distance: "450 km",
    distanceNum: 450,
    time: "7-8 hours",
    highway: "NH-9 / NH-62 via Sikar & Fatehpur",
    ...calcFares(450),
    highlights: ["Desert city of forts & havelis", "7-8 hours via Shekhawati region", "Home of Junagarh Fort & bhujia"],
    popularStops: ["Sikar", "Fatehpur", "Ratangarh"],
    bestTime: "Start 5-6 AM to cross the Shekhawati belt before the desert afternoon heat",
    description: `Bikaner is the desert city of forts, painted havelis and the famous Karni Mata rat temple, and a one-way cab from Delhi is the comfortable way to cross the Thar fringe to reach it. The 450 km drive takes you through the Shekhawati region, known for its frescoed merchant mansions. Travellers book this route for heritage tourism, the Junagarh Fort, the camel research centre, and of course Bikaneri bhujia and sweets. Families, photographers and culture-seekers prefer a private car because Bikaner's attractions are spread out and a flexible self-paced journey beats the train.

One-way booking is the economical choice for a Rajasthan trip. If you are continuing onward to Jaisalmer or Jodhpur, or flying back, there is no reason to pay for an empty return to Delhi. A one-way cab bills only the outbound leg. Bikaner's 450 km is comfortably above the 300 km minimum, so on our formula you pay for the real distance: a Sedan is ₹4,950, an Ertiga ₹6,750 and an Innova Crysta ₹8,100 for the Delhi-to-Bikaner drop, with tolls and taxes extra.

The drive heads out of Delhi toward Rewari and into Rajasthan via Narnaul, then climbs into the Shekhawati belt through Sikar, Fatehpur and Ratangarh before reaching Bikaner. The landscape gradually turns arid and golden as you go, with sand stretches, scrubland and the painted-haveli towns of Fatehpur and Mandawa close to the route — many travellers detour briefly to see the frescoes.

For food, the Sikar and Fatehpur stretch has excellent Rajasthani dhabas serving dal-baati-churma, gatte ki sabzi and hot kachoris. The Shekhawati towns also have heritage cafes if you want a longer break. Closer to Bikaner, roadside stalls sell the city's legendary bhujia and rasgullas, and it is worth carrying some for the road.

Pickup is from any address in Delhi-NCR, and we frequently collect travellers from IGI Airport and New Delhi or Anand Vihar railway stations, especially those flying in from other cities to start a Rajasthan tour. The driver tracks your flight or train and waits if it is delayed. Drop is flexible to your Bikaner hotel, a heritage haveli stay, or near Junagarh Fort.

For a 450 km desert run, comfort counts. A Sedan suits two or three travellers, the Ertiga gives a family of four to six more room and luggage space, and the Innova Crysta is the favourite for groups or anyone wanting extra comfort on the long arid drive. To book your Delhi-to-Bikaner one-way cab, call or WhatsApp 7668570551 and we will arrange a clean car and an experienced highway driver for your desert trip.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Bikaner?", answer: "A Sedan costs ₹4,950, an Ertiga ₹6,750 and an Innova Crysta ₹8,100 for the 450 km Delhi-to-Bikaner drop. Tolls and state taxes are extra, and you pay only for the one-way journey with no return-leg charge." },
      { question: "How long does the Delhi to Bikaner drive take?", answer: "The 450 km drive through the Shekhawati region takes about 7 to 8 hours with breaks. Starting at 5 to 6 AM helps you cross the Sikar-Fatehpur belt before the desert afternoon heat sets in." },
      { question: "Can we stop in the Shekhawati towns on the way?", answer: "Yes. Fatehpur and Mandawa, famous for painted havelis, are close to the route and make a great short detour. The Sikar and Fatehpur stretch also has excellent Rajasthani dhabas serving dal-baati-churma." },
      { question: "Does the cab pick up from Delhi airport or railway station?", answer: "Yes. We pick up from IGI Airport and from New Delhi and Anand Vihar railway stations, ideal for travellers flying in to start a Rajasthan tour. The driver tracks your flight or train and waits if delayed." },
      { question: "Which vehicle is best for the Delhi to Bikaner trip?", answer: "A Sedan suits two or three travellers, an Ertiga is ideal for a family of four to six with luggage, and an Innova Crysta gives the most comfort for groups on the long desert drive." },
      { question: "Are tolls included and when should we start for Bikaner?", answer: "Tolls and state entry taxes are billed separately from the cab fare. The best time to start is 5 to 6 AM so you cover the Shekhawati belt early and reach Bikaner before the harsh afternoon heat." }
    ]
  },
  "delhi-to-mount-abu": {
    from: "Delhi",
    to: "Mount Abu",
    distance: "750 km",
    distanceNum: 750,
    time: "12-13 hours",
    highway: "NH-48 via Jaipur, Ajmer & Abu Road",
    ...calcFares(750),
    highlights: ["Rajasthan's only hill station", "Via NH-48 through Jaipur & Ajmer", "Dilwara temples & Nakki Lake"],
    popularStops: ["Jaipur", "Ajmer", "Abu Road"],
    bestTime: "Start very early 4-5 AM, or split with an overnight halt at Jaipur or Ajmer",
    description: `Mount Abu is Rajasthan's only hill station, a cool green escape on the Aravalli range famous for the exquisite Dilwara Jain temples, Nakki Lake and Sunset Point. A one-way cab from Delhi is the way serious travellers reach it, because the 750 km drive through Jaipur and Ajmer is long and best done in a private car you can pace yourself. Pilgrims heading to Dilwara, families on a cool-weather getaway, and groups touring Rajasthan all book this route for the comfort of door-to-door travel with luggage and stops of their choosing.

A one-way booking is a significant saving on a route this long. A round trip would double your billing with the empty return drive, whereas a one-way cab charges only the outbound 750 km. That distance is far above the 300 km minimum, so on our formula you pay for the real kilometres: a Sedan comes to ₹8,250, an Ertiga to ₹11,250 and an Innova Crysta to ₹13,500 for the Delhi-to-Mount-Abu drop, with tolls and state taxes added separately.

The drive runs down NH-48, the Delhi-Jaipur-Ajmer-Udaipur artery. You leave Delhi through Gurgaon, reach Jaipur in four to five hours, continue past Ajmer and Beawar, then turn off toward Sirohi and the climb up to Abu Road and finally Mount Abu. The last stretch from Abu Road up to the town is a winding ghat road through forest, gaining altitude to around 1,200 metres, and is the most scenic part of the journey. Because the total drive is 12 to 13 hours, many travellers split it with an overnight halt in Jaipur or Ajmer.

For food, NH-48 is one of the best-served highways in the country. The Delhi-Jaipur stretch has the Behror and Shahpura dhaba clusters and Midway plazas, perfect for breakfast. Around Jaipur and Ajmer you will find excellent Rajasthani thali restaurants, and many pilgrims stop at the Ajmer Sharif dargah or Pushkar nearby. Closer to Abu Road, roadside dhabas serve hot food before the ghat climb.

Pickup is door-to-door from anywhere in Delhi-NCR, and we also collect travellers from IGI Airport and New Delhi or Anand Vihar railway stations. The driver tracks your flight or train and waits if it runs late. Drop is flexible to your Mount Abu hotel near Nakki Lake, a resort on the Dilwara road, or wherever you are staying.

For a 12-to-13-hour drive, choose comfort. A Sedan works for two or three travellers, but most families pick the Ertiga for legroom on the long haul, and the Innova Crysta is the favourite for groups of six or for the smoothest ride up the Abu Road ghat. To book your Delhi-to-Mount-Abu one-way cab, call or WhatsApp 7668570551 and we will arrange an experienced long-route driver and a comfortable car for your hill-station trip.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Mount Abu?", answer: "A Sedan costs ₹8,250, an Ertiga ₹11,250 and an Innova Crysta ₹13,500 for the 750 km Delhi-to-Mount-Abu drop. Tolls and state taxes are extra, and you pay only for the one-way journey with no empty return charge." },
      { question: "How long does the Delhi to Mount Abu drive take?", answer: "The 750 km drive via Jaipur and Ajmer takes around 12 to 13 hours. Many travellers start very early at 4 to 5 AM, or split the journey with an overnight halt in Jaipur or Ajmer for comfort." },
      { question: "Where can we stop for food on the Delhi-Mount Abu route?", answer: "NH-48 is dhaba-rich — the Behror and Shahpura clusters near Delhi are great for breakfast, and Jaipur and Ajmer have excellent Rajasthani thali restaurants. Many pilgrims also stop at Ajmer Sharif or Pushkar on the way." },
      { question: "Can the cab pick us up from the airport or railway station?", answer: "Yes. We pick up from IGI Airport and from New Delhi and Anand Vihar railway stations. The driver tracks your flight or train and waits if it is delayed before heading to Mount Abu." },
      { question: "Which vehicle is best for the long Mount Abu drive?", answer: "A Sedan suits two or three travellers, but for a 12-to-13-hour journey most families choose the Ertiga for legroom or the Innova Crysta for the smoothest ride up the Abu Road ghat." },
      { question: "Are tolls included and when should we start?", answer: "Tolls and state entry taxes are charged separately from the cab fare. The best time to start is 4 to 5 AM for a single-day run, or you can split the drive with an overnight halt at Jaipur or Ajmer." }
    ]
  },
  "delhi-to-kanpur": {
    from: "Delhi",
    to: "Kanpur",
    distance: "480 km",
    distanceNum: 480,
    time: "7-8 hours",
    highway: "Yamuna Expressway & NH-19 via Agra",
    ...calcFares(480),
    highlights: ["Industrial hub on the Ganges", "Via Yamuna Expressway & Agra", "7-8 hours fast highway drive"],
    popularStops: ["Agra", "Etawah", "Auraiya"],
    bestTime: "Start by 5-6 AM to use the Yamuna Expressway and reach Kanpur before evening",
    description: `Kanpur is the industrial powerhouse of Uttar Pradesh on the banks of the Ganges, a major centre for leather, textiles and trade, and a one-way cab from Delhi is the practical way to get there for business or family visits. The 480 km drive uses the fast Yamuna Expressway and NH-19, so it is quicker and more comfortable than the road suggests. Business travellers, families visiting relatives, and IIT Kanpur visitors all book this route for the convenience of door-to-door travel without the train-ticket rush.

One-way booking saves you the empty return leg. If you are staying in Kanpur for work or family time, or flying back, there is no sense in paying for the driver to return an empty car to Delhi. A one-way cab bills only the outbound journey. At 480 km, Kanpur is well above the 300 km minimum, so on our formula you pay the real distance: a Sedan is ₹5,280, an Ertiga ₹7,200 and an Innova Crysta ₹8,640 for the Delhi-to-Kanpur drop, with tolls and taxes extra.

The route is fast and modern. You leave Delhi on the Yamuna Expressway toward Agra, then join NH-19 (the old GT Road / Agra-Kanpur highway) eastward through Firozabad, Etawah and Auraiya before reaching Kanpur. The Yamuna Expressway is access-controlled and smooth, and the NH-19 stretch is largely four-lane, so the bulk of the drive is easy highway cruising with minimal town congestion until Kanpur's outskirts.

For food, the Yamuna Expressway service plazas near Mathura and Agra have clean restrooms and food courts for breakfast. Around Agra you can pause for petha or a proper meal, and the Etawah-Auraiya stretch on NH-19 has dependable dhabas serving North Indian fare and the famous local lassi. Many travellers club a short Agra stop into this drive since the Taj is right on the way.

Pickup is from any Delhi-NCR address, and we regularly collect travellers from IGI Airport and New Delhi, Hazrat Nizamuddin and Anand Vihar railway stations. The driver tracks your flight or train and waits if it runs late. Drop is flexible — your Kanpur hotel, the Civil Lines or Mall Road business area, IIT Kanpur, or a relative's home.

On vehicles, a Sedan is an economical, comfortable choice for two or three people on this expressway run. A family with luggage will be happier in the Ertiga, and the Innova Crysta is the pick for groups or for premium comfort on the long highway. To book your Delhi-to-Kanpur one-way cab, call or WhatsApp 7668570551 and we will confirm a clean car and an experienced highway driver for your travel date.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Kanpur cost?", answer: "A Sedan costs ₹5,280, an Ertiga ₹7,200 and an Innova Crysta ₹8,640 for the 480 km Delhi-to-Kanpur drop. Tolls and taxes are extra, and you pay only for the one-way journey with no return-leg charge." },
      { question: "How long is the Delhi to Kanpur drive?", answer: "Using the Yamuna Expressway and NH-19 via Agra, the 480 km drive takes about 7 to 8 hours. Starting by 5 to 6 AM lets you use the expressway early and reach Kanpur before evening." },
      { question: "Can we stop at Agra on the way to Kanpur?", answer: "Yes. Agra is on the route, so many travellers pause for the Taj Mahal or petha. The Yamuna Expressway service plazas and the Etawah-Auraiya dhabas on NH-19 are also good for breakfast and meals." },
      { question: "Does the cab pick up from Delhi airport or railway stations?", answer: "Yes. We pick up from IGI Airport and from New Delhi, Nizamuddin and Anand Vihar railway stations. The driver tracks your flight or train and waits if there is a delay." },
      { question: "Which vehicle is best for the Delhi to Kanpur trip?", answer: "A Sedan is economical and comfortable for two or three people on this expressway run. An Ertiga suits families with luggage, and an Innova Crysta is best for groups or premium comfort on the long highway." },
      { question: "Are tolls included and when should we start?", answer: "Tolls on the Yamuna Expressway and NH-19 plus state taxes are charged separately. The best time to start is 5 to 6 AM to use the expressway early and reach Kanpur before the evening." }
    ]
  },
  "delhi-to-ranthambore": {
    from: "Delhi",
    to: "Ranthambore",
    distance: "380 km",
    distanceNum: 380,
    time: "6-7 hours",
    highway: "NH-48 via Jaipur, then NH-552 to Sawai Madhopur",
    ...calcFares(380),
    highlights: ["Famous tiger safari national park", "Via Jaipur on NH-48", "Gateway to Sawai Madhopur"],
    popularStops: ["Jaipur", "Dausa", "Sawai Madhopur"],
    bestTime: "Start 5-6 AM to reach Sawai Madhopur in time to rest before an early safari",
    description: `Ranthambore is among India's most famous tiger reserves, set around the dramatic Ranthambore Fort near Sawai Madhopur, and a one-way cab from Delhi is the natural choice for safari-goers who want to arrive rested and on schedule. The 380 km drive runs via Jaipur, so it pairs well with a Pink City stop. Wildlife enthusiasts, photographers and families all book this route because safari slots are time-bound — you need to reach Sawai Madhopur the evening before, and a private car gives you that control without depending on train timings.

A one-way booking is the smart way to travel for a safari trip. If you are flying back or continuing onward to Jaipur or further into Rajasthan, paying for an empty return drive to Delhi makes no sense. A one-way cab bills only the outbound leg. At 380 km, Ranthambore is above the 300 km minimum, so on our formula you pay the real distance: a Sedan is ₹4,180, an Ertiga ₹5,700 and an Innova Crysta ₹6,840 for the Delhi-to-Ranthambore drop, with tolls and taxes extra.

The drive heads down NH-48 through Gurgaon and the Rajasthan border, reaching Jaipur in four to five hours, then turns off via Dausa and Tonk-direction roads toward Sawai Madhopur and the park gates. Many travellers build in a Jaipur halt to see Amber Fort or City Palace, since it is right on the route. The final stretch to Sawai Madhopur is rural Rajasthan countryside, with the Aravalli hills and the fort silhouette appearing as you near the reserve.

For food, NH-48 toward Jaipur is dhaba-rich — the Behror and Shahpura clusters and Midway plazas are great for breakfast. In Jaipur itself you will find excellent Rajasthani thali spots. Closer to Sawai Madhopur, several roadside dhabas and the resort restaurants near the park serve good food, and it is wise to eat before settling in for an early-morning safari.

Pickup is from any Delhi-NCR address, and we frequently collect wildlife travellers from IGI Airport and New Delhi or Anand Vihar railway stations. The driver tracks your flight or train and waits if it is delayed. Drop is flexible to your Ranthambore resort, a hotel near the Sawai Madhopur safari gates, or the railway station area.

For a safari trip, comfort and space matter, especially with camera gear. A Sedan suits two or three travellers, the Ertiga gives a family more room for luggage and equipment, and the Innova Crysta is the favourite for groups or for the smoothest ride. To book your Delhi-to-Ranthambore one-way cab, call or WhatsApp 7668570551 and we will arrange a clean car and an experienced driver so you reach the park in time for your safari.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Ranthambore?", answer: "A Sedan costs ₹4,180, an Ertiga ₹5,700 and an Innova Crysta ₹6,840 for the 380 km Delhi-to-Ranthambore drop. Tolls and taxes are extra, and you pay only for the one-way journey with no return-leg charge." },
      { question: "How long does the Delhi to Ranthambore drive take?", answer: "The 380 km drive via Jaipur takes about 6 to 7 hours. Starting at 5 to 6 AM gets you to Sawai Madhopur with time to rest before an early-morning safari the next day." },
      { question: "Can we stop in Jaipur on the way to Ranthambore?", answer: "Yes. Jaipur is right on the NH-48 route, so many travellers pause to see Amber Fort or City Palace. The Behror and Shahpura dhaba clusters on the way are also great for breakfast." },
      { question: "Does the cab pick up from Delhi airport or railway station?", answer: "Yes. We pick up from IGI Airport and from New Delhi and Anand Vihar railway stations. The driver tracks your flight or train and waits if it is delayed before heading to Ranthambore." },
      { question: "Which vehicle is best for a Ranthambore safari trip?", answer: "A Sedan suits two or three travellers, an Ertiga gives a family more room for luggage and camera gear, and an Innova Crysta is best for groups or the smoothest ride to the park." },
      { question: "Are tolls included and when should we start?", answer: "Tolls and state entry taxes are charged separately from the cab fare. The best time to start is 5 to 6 AM so you reach Sawai Madhopur the evening before and are rested for the morning safari." }
    ]
  },
  "chandigarh-to-kasauli": {
    from: "Chandigarh",
    to: "Kasauli",
    distance: "60 km",
    distanceNum: 60,
    time: "1.5-2 hours",
    highway: "NH-5 via Zirakpur & Parwanoo",
    ...calcFares(60),
    highlights: ["Quick hill escape from Chandigarh", "1.5-2 hours via Parwanoo", "Pine forests & colonial charm"],
    popularStops: ["Zirakpur", "Parwanoo", "Garkhal"],
    bestTime: "Any morning departure works; leave by 9 AM to enjoy a full day in Kasauli",
    description: `Kasauli is the closest proper hill station to Chandigarh, just a short, pretty drive away, which makes it the go-to weekend escape for tricity residents and for visitors who fly into Chandigarh and want a quick taste of the Himachal hills. A one-way cab covers the 60 km in well under two hours, ending in the cool pine-scented air of the cantonment town with its Mall Road, Christ Church and Sunset Point. Couples, families and short-break travellers love this route precisely because it is so quick and stress-free.

We will be upfront about pricing on a route this short. Our one-way fares bill on a minimum of 300 km regardless of how close the destination is, so a Chandigarh-to-Kasauli Sedan is ₹3,300, an Ertiga ₹4,500 and an Innova Crysta ₹5,400, with tolls and taxes extra. The advantage of one-way is convenience and the freedom of not committing the car to a return trip — useful if you plan to stay in Kasauli for a night or two, or continue onward to Shimla or Solan afterward.

The drive is short and scenic. You leave Chandigarh through Zirakpur and join NH-5 toward Parwanoo, the gateway to Himachal at the base of the hills. From Parwanoo the road climbs through Dharampur and Garkhal, twisting up through forest with the Kasauli ridge in view. The Timber Trail at Parwanoo, with its cable car and resort, is a popular pause point right at the start of the climb.

For food, Zirakpur on the way out has plenty of cafes and restaurants if you want breakfast before leaving the plains. The Timber Trail and several roadside cafes near Parwanoo are good for a coffee or meal before the ascent. Once in Kasauli, Mall Road has charming bakeries and the famous Kasauli Club area, with small eateries serving hot snacks and tea.

Pickup is from anywhere in Chandigarh, Mohali or Panchkula, and we also collect travellers directly from Chandigarh Airport or the railway station — ideal if you are flying or training in and want to head straight to the hills. The driver tracks your arrival and waits. Drop is flexible to your Kasauli hotel, a heritage homestay near Upper Mall, or a resort on the Garkhal road.

For such a short, winding climb, a Sedan is perfectly comfortable for two or three people. Families of four to six will appreciate the Ertiga's extra room, and the Innova Crysta is ideal for larger groups or anyone wanting premium comfort on the hill road. To book your Chandigarh-to-Kasauli one-way cab, call or WhatsApp 7668570551 and we will send a clean car with a driver who knows the Parwanoo-Kasauli route well.`,
    faqs: [
      { question: "How much is a one-way cab from Chandigarh to Kasauli?", answer: "A Sedan costs ₹3,300, an Ertiga ₹4,500 and an Innova Crysta ₹5,400. Although Kasauli is only 60 km away, our one-way fares bill on a 300 km minimum, so this floor applies. Tolls and taxes are extra." },
      { question: "How long is the Chandigarh to Kasauli drive?", answer: "The 60 km drive via Zirakpur and Parwanoo takes about 1.5 to 2 hours, including the short climb up to the cantonment. Leaving by 9 AM lets you enjoy a full day in Kasauli." },
      { question: "Where can we stop on the way to Kasauli?", answer: "Zirakpur has many cafes for breakfast before you leave the plains, and the Timber Trail resort at Parwanoo, with its cable car, is a popular pause point right before the hill climb begins." },
      { question: "Can the cab pick us up from Chandigarh airport or station?", answer: "Yes. We pick up from Chandigarh Airport and the railway station, as well as anywhere in Chandigarh, Mohali or Panchkula. The driver tracks your arrival and waits so you can head straight to Kasauli." },
      { question: "Which vehicle suits the Chandigarh to Kasauli trip?", answer: "A Sedan is comfortable for two or three travellers on this short climb, an Ertiga suits a family of four to six, and an Innova Crysta is best for larger groups or premium comfort on the hill road." },
      { question: "Are tolls included and when is the best time to leave?", answer: "Tolls and state entry taxes are billed separately from the cab fare. Any morning departure works for this short route; leaving by 9 AM gives you a full day to explore Kasauli's Mall Road and viewpoints." }
    ]
  },
  "agra-to-khajuraho": {
    from: "Agra",
    to: "Khajuraho",
    distance: "400 km",
    distanceNum: 400,
    time: "7-8 hours",
    highway: "NH-44 & NH-39 via Gwalior, Jhansi & Chhatarpur",
    ...calcFares(400),
    highlights: ["UNESCO temple town", "Via Gwalior, Jhansi & Orchha", "7-8 hours through Bundelkhand"],
    popularStops: ["Gwalior", "Jhansi", "Orchha"],
    bestTime: "Start by 6 AM to reach Khajuraho with daylight for the temple complex",
    description: `Khajuraho is the UNESCO World Heritage temple town famous for its intricately carved medieval sculptures, and a one-way cab from Agra is the way most heritage travellers connect the Taj Mahal to these Chandela-era temples in a single onward journey. The 400 km drive crosses the historic Bundelkhand region via Gwalior and Jhansi, making it a culturally rich route. Tourists doing the classic Golden-Triangle-plus-Khajuraho circuit, photographers and history lovers all book this because the rail connectivity is limited and a private car lets them stop at Gwalior fort or Orchha on the way.

One-way booking is the sensible choice for a touring itinerary. If you are continuing from Khajuraho onward to Panna, Bandhavgarh or back by flight, there is no reason to pay for an empty return to Agra. A one-way cab bills only the outbound leg. At 400 km, Khajuraho is well above the 300 km minimum, so on our formula you pay the real distance: a Sedan is ₹4,400, an Ertiga ₹6,000 and an Innova Crysta ₹7,200 for the Agra-to-Khajuraho drop, with tolls and taxes extra.

The drive heads south from Agra on NH-44 through Dholpur, crosses the Chambal into Madhya Pradesh, and reaches Gwalior with its magnificent hilltop fort. From Gwalior the route turns toward Jhansi, near the lovely medieval town of Orchha on the Betwa river, then continues through Chhatarpur and the Bundelkhand countryside to Khajuraho. Many travellers build in a short stop at Gwalior Fort or a longer pause at Orchha's palaces and cenotaphs, both right on the way.

For food, the Agra-Gwalior stretch has reliable dhabas, and Gwalior city offers good restaurants for a mid-morning break. Orchha has charming riverside cafes ideal for lunch, and the Jhansi area has dependable highway eateries. Closer to Khajuraho, the town has tourist-friendly restaurants near the western temple group serving North Indian and Bundelkhandi fare.

Pickup is from anywhere in Agra — your hotel near the Taj, the cantonment, or directly from Agra Cantt railway station if you have just arrived. The driver tracks your train and waits. Drop is flexible to your Khajuraho hotel near the western temples, a resort on the outskirts, or the airport if you are flying onward.

For a 400 km Bundelkhand drive with sightseeing stops, comfort helps. A Sedan suits two or three travellers, the Ertiga gives a family or a small group more room for luggage and camera gear, and the Innova Crysta is the favourite for groups or for the smoothest ride on the long route. To book your Agra-to-Khajuraho one-way cab, call or WhatsApp 7668570551 and we will arrange a clean car and an experienced driver familiar with the Gwalior-Jhansi-Khajuraho road.`,
    faqs: [
      { question: "How much is a one-way cab from Agra to Khajuraho?", answer: "A Sedan costs ₹4,400, an Ertiga ₹6,000 and an Innova Crysta ₹7,200 for the 400 km Agra-to-Khajuraho drop. Tolls and taxes are extra, and you pay only for the one-way journey with no return-leg charge." },
      { question: "How long does the Agra to Khajuraho drive take?", answer: "The 400 km drive via Gwalior and Jhansi takes about 7 to 8 hours through Bundelkhand. Starting by 6 AM gets you to Khajuraho with daylight to spare for the temple complex." },
      { question: "Can we stop at Gwalior or Orchha on the way?", answer: "Yes. Gwalior Fort and the medieval town of Orchha, with its palaces and riverside cenotaphs, are both right on the route and make excellent sightseeing stops. Orchha is especially good for a lunch break." },
      { question: "Does the cab pick up from Agra Cantt railway station?", answer: "Yes. We pick up from Agra Cantt railway station and from any hotel in Agra. The driver tracks your train and waits, so you can head to Khajuraho straight after arriving in Agra." },
      { question: "Which vehicle is best for the Agra to Khajuraho trip?", answer: "A Sedan suits two or three travellers, an Ertiga gives a family or small group more room for luggage and camera gear, and an Innova Crysta is best for groups or the smoothest ride on this long route." },
      { question: "Are tolls included and when should we start?", answer: "Tolls and state entry taxes are charged separately from the cab fare. The best time to start is around 6 AM so you have daylight for sightseeing stops at Gwalior or Orchha and still reach Khajuraho before dark." }
    ]
  },
  "agra-to-mathura": {
    from: "Agra",
    to: "Mathura",
    distance: "55 km",
    distanceNum: 55,
    time: "1-1.5 hours",
    highway: "Yamuna Expressway / NH-44",
    ...calcFares(55),
    highlights: ["Short 55 km pilgrim hop", "Krishna Janmabhoomi & Banke Bihari drop", "Flexible temple-circuit stops"],
    popularStops: ["Vrindavan", "Gokul"],
    bestTime: "Early morning to attend mangla aarti, or post-noon to avoid Agra city congestion",
    description: `The Agra to Mathura one-way cab is a short but heavily-booked pilgrim and tourist hop of around 55 km, linking the Mughal city of the Taj Mahal with the sacred birthplace of Lord Krishna. It is booked daily by devotees finishing their Taj and Agra Fort sightseeing who then want to bow at the Krishna Janmabhoomi temple, by families on the Braj parikrama circuit, and by travellers heading onward to Delhi who want a Mathura-Vrindavan darshan break on the way. At Triveni Cabs this is one of our quickest, most reliable drops.

Because the road distance is only 55 km, the fare is calculated on our 300 km minimum billing — so a Sedan one-way is ₹3,300, an Ertiga is ₹4,500, and an Innova Crysta is ₹5,400. We state this honestly upfront: you are not paying per the 55 km but for a dedicated point-to-point vehicle, driver, and waiting flexibility. Compared to a round trip that would bill ₹6,600 on a Sedan, the one-way drop saves you ₹3,300 if you are continuing onward from Mathura rather than returning to Agra.

The drive is short and easy. Most drivers take the Agra-Delhi NH-44 corridor or hop briefly onto the Yamuna Expressway, passing through Runkata and the outskirts of Mathura district within an hour to ninety minutes. The terrain is flat farmland dotted with mustard fields in winter, and traffic is light once you clear the congested Agra city stretch near Bhagwan Talkies and the bypass. Drivers know the lanes around Mathura's Dwarkadhish temple and the narrow approach to the Janmabhoomi complex where four-wheelers must park a short walk away.

En-route, the most popular addition is Vrindavan — just 12 km beyond Mathura — for darshan at Banke Bihari, the ISKCON Krishna Balaram temple, and Prem Mandir, which is spectacular when illuminated at dusk. Many travellers also request a halt at Gokul or Mahavan for the Braj-bhoomi experience. Highway dhabas near the Mathura toll serve fresh kachori-sabzi and lassi, and our drivers happily pause for the famous Mathura pedas to carry home. Up to two on-route stops are included free.

Pickup in Agra is doorstep across the whole city without surcharge — Taj Ganj and Tajview hotels, Agra Cantt and Agra Fort railway stations, Sadar Bazaar, Fatehabad Road resorts, and Dayalbagh residences. Drop in Mathura is equally flexible: the Janmabhoomi gate, Dwarkadhish temple lane, Mathura Junction railway station, or onward into Vrindavan if you add it. For a 2-3 passenger family the Sedan Swift Dzire is perfect; pilgrim groups of 4-6 with prasad and luggage prefer the Ertiga, while the Innova Crysta suits 6-7 devotees or those wanting extra comfort on the temple circuit.

Whether you are wrapping up a Taj Mahal morning and want an afternoon Krishna darshan, doing the full Braj-Vrindavan parikrama, or simply need a clean one-way drop toward Delhi via Mathura, booking takes two minutes. Call or WhatsApp 7668570551 — your fare is locked upfront with no surge and no hidden kilometres, and your verified driver reaches your Agra pickup ten minutes early to help with luggage and prasad.`,
    faqs: [
      { question: "How much does a one-way cab from Agra to Mathura cost?", answer: "A one-way cab from Agra to Mathura starts at ₹3,300 for a Sedan, ₹4,500 for an Ertiga, and ₹5,400 for an Innova Crysta. Since the distance is only 55 km, our 300 km minimum billing at ₹11/km applies. Toll and parking are extra at actual." },
      { question: "How long does Agra to Mathura take by cab?", answer: "Agra to Mathura takes about 1 to 1.5 hours by cab for the 55 km journey, via NH-44 or the Yamuna Expressway. Add 20-30 minutes if you continue to Vrindavan." },
      { question: "Can I add a Vrindavan stop on the Agra to Mathura route?", answer: "Yes. Vrindavan is just 12 km beyond Mathura and is the most popular addition, with darshan at Banke Bihari, ISKCON, and Prem Mandir. Up to 2 on-route stops are included free." },
      { question: "Where do you pick up in Agra for the Mathura cab?", answer: "We pick up doorstep across Agra at no extra charge — Taj Ganj and Fatehabad Road hotels, Agra Cantt and Agra Fort stations, Sadar Bazaar, and any city address." },
      { question: "What vehicle options are available for Agra to Mathura?", answer: "We offer a Sedan (Swift Dzire) for 2-3 passengers, an Ertiga SUV for 4-6 with luggage and prasad, and an Innova Crysta for 6-7 passengers or premium comfort on the temple circuit." },
      { question: "What is the best time to travel from Agra to Mathura?", answer: "Leave early morning to attend mangla aarti at the temples, or travel post-noon to avoid Agra city congestion near Bhagwan Talkies. The short drive is comfortable year-round, especially in the cooler October-March months." }
    ]
  },

  "jaipur-to-bikaner": {
    from: "Jaipur",
    to: "Bikaner",
    distance: "335 km",
    distanceNum: 335,
    time: "5-6 hours",
    highway: "NH-52 (via Sikar, Fatehpur, Ratangarh)",
    ...calcFares(335),
    highlights: ["335 km Shekhawati desert run", "Junagarh Fort & camel-country drop", "Shekhawati fresco haveli stops"],
    popularStops: ["Sikar", "Fatehpur", "Ratangarh"],
    bestTime: "October to March for cool desert driving; depart by 7 AM to reach Bikaner for a fort afternoon",
    description: `The Jaipur to Bikaner one-way cab covers around 335 km of classic Rajasthan, carrying travellers from the Pink City across the painted Shekhawati region into the camel-and-fort heart of the Thar. It is booked by tourists chasing the Junagarh Fort and Karni Mata temple, by families heading to weddings in Bikaner's grand havelis, by businessmen in the wool and namkeen trade, and by road-trippers continuing onward to Jaisalmer. This is a long, scenic desert-edge drive that our Rajasthan drivers run regularly.

At 335 km this route bills above the 300 km minimum, so the fare reflects real distance: a Sedan one-way from Jaipur to Bikaner is ₹3,685 (335 km at ₹11/km), an Ertiga is ₹5,025, and an Innova Crysta is ₹6,030. A round trip would cost ₹7,370 on a Sedan — so if you are flying out of Bikaner, staying on for a wedding, or continuing deeper into the desert, the one-way drop saves you ₹3,685 by eliminating the empty return leg.

The drive runs largely on NH-52 through the Shekhawati belt — Chomu, Sikar, Fatehpur, Ratangarh, and Sridungargarh — a region world-famous for its frescoed merchant havelis. The road is single-to-double-lane highway through arid scrubland and mustard fields, with the landscape turning progressively more golden and sandy as you approach Bikaner. Drivers are familiar with the sand-prone stretches near Ratangarh and the long open runs where afternoon heat shimmer is common, so an early start is strongly advised in summer.

En-route, Fatehpur is the photographer's favourite for its open-air haveli frescoes, while Sikar offers a good lunch halt with Marwari thali dhabas and the famous Shekhawati ghevar sweets. Many travellers pause at Laxmangarh fort or the Ramgarh haveli cluster. As you near Bikaner, the roadside Bhujia and rasgulla shops are a must — Bikaner is the namkeen capital of India. Up to two on-route stops are included free, and drivers know the best clean dhabas with fresh ker-sangri and bajra fare.

Pickup in Jaipur is doorstep across the city — Pink City hotels near Hawa Mahal and MI Road, Jaipur Junction and Gandhi Nagar railway stations, the airport at Sanganer, and residential colonies in Malviya Nagar and Vaishali Nagar. Drop in Bikaner is flexible to Junagarh Fort hotels, Karni Mata temple at Deshnok, the Bikaner Junction station, or any haveli wedding venue. For 2-3 passengers the Sedan is comfortable on this long run; families of 4-6 with desert luggage prefer the Ertiga, while the Innova Crysta is the most-requested for 6-7 travellers wanting room to stretch over five hours.

Whether you are touring the forts of Rajasthan, attending a Bikaner haveli wedding, exploring Karni Mata's rat temple, or pushing on toward Jaisalmer, booking is simple. Call or WhatsApp 7668570551 — your ₹3,685 Sedan fare is confirmed upfront with no surge and no hidden kilometres, and your verified Rajasthan driver arrives ten minutes early at your Jaipur pickup ready for the desert run.`,
    faqs: [
      { question: "How much does a one-way cab from Jaipur to Bikaner cost?", answer: "A one-way cab from Jaipur to Bikaner costs ₹3,685 for a Sedan (335 km at ₹11/km), ₹5,025 for an Ertiga, and ₹6,030 for an Innova Crysta. Toll and state tax are extra at actual." },
      { question: "How long does Jaipur to Bikaner take by cab?", answer: "Jaipur to Bikaner takes about 5 to 6 hours by cab for the 335 km journey via NH-52 through the Shekhawati region, depending on stops and afternoon desert traffic." },
      { question: "What are good stops between Jaipur and Bikaner?", answer: "Fatehpur is famous for its open-air fresco havelis, Sikar offers Marwari thali lunch and ghevar, and Ratangarh and Laxmangarh add Shekhawati charm. Up to 2 on-route stops are free." },
      { question: "Where do you pick up in Jaipur for the Bikaner cab?", answer: "We pick up doorstep across Jaipur — Pink City and MI Road hotels, Jaipur Junction station, Sanganer airport, and colonies like Malviya Nagar and Vaishali Nagar, at no extra charge." },
      { question: "Which vehicle is best for Jaipur to Bikaner?", answer: "A Sedan suits 2-3 passengers, the Ertiga suits 4-6 with luggage, and the Innova Crysta is most popular for 6-7 travellers wanting extra comfort over the 5-6 hour desert drive." },
      { question: "What is the best time to travel from Jaipur to Bikaner?", answer: "October to March offers cool, comfortable desert driving. Depart by 7 AM to reach Bikaner with time for a Junagarh Fort afternoon and to avoid summer heat shimmer on the open NH-52 stretches." }
    ]
  },

  "jaipur-to-ranthambore": {
    from: "Jaipur",
    to: "Ranthambore",
    distance: "160 km",
    distanceNum: 160,
    time: "3-3.5 hours",
    highway: "NH-21 / NH-552 (via Tonk, Sawai Madhopur)",
    ...calcFares(160),
    highlights: ["160 km gateway to tiger safari", "Drop at Sawai Madhopur safari hotels", "Tonk & Chambal-belt en-route halts"],
    popularStops: ["Tonk", "Sawai Madhopur"],
    bestTime: "October to April for tiger safaris; depart early to make an afternoon safari slot",
    description: `The Jaipur to Ranthambore one-way cab is the classic gateway run for wildlife lovers, covering around 160 km from the Pink City to Sawai Madhopur — the base for Ranthambore National Park and its famous Royal Bengal tigers. It is booked daily by tourists timed to morning and afternoon safari slots, by photographers chasing T-series tigers like the legendary Machhli's descendants, and by families combining a Jaipur sightseeing trip with a jungle break. At Triveni Cabs we run this corridor through the safari season with drivers who know the exact hotel zones.

Because the road distance is 160 km, the fare uses our 300 km minimum billing — a Sedan one-way is ₹3,300, an Ertiga is ₹4,500, and an Innova Crysta is ₹5,400. We tell you this plainly: you are booking a dedicated point-to-point vehicle, not a per-kilometre meter. If you only need the drop because you are staying overnight for safaris and returning later or continuing to Kota or Bundi, the one-way avoids paying ₹6,600 round-trip on a Sedan, saving you ₹3,300 on the empty return.

The drive heads south-east from Jaipur on NH-21 and NH-552 through Tonk district, a region of flat agricultural plains, the Banas river belt, and the approach to the Chambal ravines. The road is mostly good two-to-four-lane highway with a few rougher patches near Sawai Madhopur town. The landscape grows greener and more forested as you near the park boundary, and drivers know the turn-offs to the Ranthambore Road hotel cluster where most resorts and the safari gypsy pickup points are located.

En-route, Tonk makes a convenient tea-and-snack halt with its Nawabi-era architecture and the Sunehri Kothi. Closer to the park, Sawai Madhopur town has good dhabas serving Rajasthani thali, and many travellers pause to buy entry permits or coordinate gypsy bookings. Some add a quick look at the historic Ranthambore Fort inside the park zone or the Ganesh temple atop it. Up to two on-route stops are included free, and drivers can time the drop precisely to your booked safari slot.

Pickup in Jaipur is doorstep across the city — hotels near Hawa Mahal, Amer, and MI Road, Jaipur Junction railway station, Sanganer airport, and any residential address. Drop in Ranthambore is flexible to your specific resort on Ranthambore Road, the Sawai Madhopur Junction railway station, or the park's safari-gypsy assembly point. For 2-3 travellers the Sedan is comfortable; families of 4-6 with camera gear and luggage prefer the Ertiga, and the Innova Crysta suits 6-7 or those wanting extra room and high ground clearance for the resort approach roads.

Whether you are chasing your first tiger sighting, on a Jaipur-plus-jungle holiday, or need a precisely-timed drop for an afternoon safari, booking is two minutes. Call or WhatsApp 7668570551 — your ₹3,300 Sedan fare is locked upfront with no surge or hidden kilometres, and your verified driver reaches your Jaipur pickup ten minutes early so you never miss a safari gate.`,
    faqs: [
      { question: "How much does a one-way cab from Jaipur to Ranthambore cost?", answer: "A one-way cab from Jaipur to Ranthambore starts at ₹3,300 for a Sedan, ₹4,500 for an Ertiga, and ₹5,400 for an Innova Crysta. Since the 160 km distance is under 300 km, our 300 km minimum billing applies. Toll is extra at actual." },
      { question: "How long does Jaipur to Ranthambore take by cab?", answer: "Jaipur to Ranthambore (Sawai Madhopur) takes about 3 to 3.5 hours by cab for the 160 km journey via NH-21 and NH-552, depending on stops and town traffic." },
      { question: "Can the cab time my drop to a safari slot?", answer: "Yes. Our drivers know the Ranthambore Road resort cluster and the safari-gypsy assembly points, and can time your drop precisely to a morning or afternoon safari slot. Up to 2 free stops are included." },
      { question: "Where do you pick up in Jaipur for the Ranthambore cab?", answer: "We pick up doorstep across Jaipur — hotels near Hawa Mahal, Amer, and MI Road, Jaipur Junction station, Sanganer airport, and any city address, at no extra charge." },
      { question: "Which vehicle is best for Jaipur to Ranthambore?", answer: "A Sedan suits 2-3 passengers, the Ertiga suits 4-6 with camera gear and luggage, and the Innova Crysta is best for 6-7 travellers wanting extra room and ground clearance for resort approach roads." },
      { question: "What is the best time to travel from Jaipur to Ranthambore?", answer: "The Ranthambore safari season runs October to April. Depart Jaipur early to comfortably make an afternoon safari slot, and avoid the monsoon months (July-September) when the core park zones are closed." }
    ]
  },

  "jodhpur-to-jaisalmer": {
    from: "Jodhpur",
    to: "Jaisalmer",
    distance: "285 km",
    distanceNum: 285,
    time: "5-5.5 hours",
    highway: "NH-125 (via Pokhran, Lathi)",
    ...calcFares(285),
    highlights: ["285 km Blue City to Golden City", "Drop at Jaisalmer Fort & Sam dunes", "Pokhran & desert-belt halts"],
    popularStops: ["Pokhran", "Lathi"],
    bestTime: "October to March for cool desert; depart by 8 AM to reach Jaisalmer for a Sam dunes sunset",
    description: `The Jodhpur to Jaisalmer one-way cab is one of Rajasthan's most iconic desert drives, linking the Blue City beneath Mehrangarh Fort with the Golden City of Jaisalmer rising from the Thar sands. Covering around 285 km, it is booked by tourists heading for the living Jaisalmer Fort, by couples chasing Sam and Khuri dune camps and camel safaris, by photographers, and by travellers on the grand Rajasthan circuit. At Triveni Cabs this is a flagship desert route our drivers know intimately, including the long empty stretches where preparation matters.

Because the road distance is 285 km — just under the threshold — the fare uses our 300 km minimum billing: a Sedan one-way is ₹3,300, an Ertiga is ₹4,500, and an Innova Crysta is ₹5,400. We state this honestly. If you are flying out of Jaisalmer, staying on for desert camps, or continuing the circuit, the one-way drop beats paying ₹6,600 round-trip on a Sedan and saves you ₹3,300 on the empty return through the desert.

The drive runs almost entirely on NH-125 through Dechu, Lathi, and Pokhran, crossing increasingly arid Thar terrain where the green of Jodhpur's outskirts gives way to golden sand, scrub, and the occasional khejri tree. The road is good single-to-double-lane highway with very long open runs and few towns, so drivers carry water and ensure a full tank before the desert stretch. The landscape is hypnotic — windmill farms near Pokhran, distant dunes, and herds of goats — and the first glimpse of Jaisalmer Fort glowing gold on the horizon is unforgettable.

En-route, Pokhran is the natural halt — famous for its fort, its terracotta pottery, and as the site of India's nuclear tests — with dhabas serving Rajasthani thali and ker-sangri. Lathi and Dechu offer quick chai stops, and many travellers pause for desert photography where the dunes first appear. Up to two on-route stops are included free, and drivers know the cleanest roadside dhabas on this thinly-populated highway.

Pickup in Jodhpur is doorstep across the city — Blue City hotels below Mehrangarh, Jodhpur Junction railway station, the airport, and colonies around Ratanada and Sardarpura. Drop in Jaisalmer is flexible to your fort-view haveli hotel, the Sam dune camps 40 km out, Khuri village, or Jaisalmer railway station. For 2-3 travellers the Sedan handles the long run well; families of 4-6 with desert luggage prefer the Ertiga, and the Innova Crysta is most-requested for 6-7 passengers or those wanting extra comfort and clearance for the dune-camp approach tracks.

Whether you are heading for a night under the stars at a Sam desert camp, exploring the living Jaisalmer Fort and its Jain temples, or completing your Rajasthan grand tour, booking is two minutes. Call or WhatsApp 7668570551 — your ₹3,300 Sedan fare is locked upfront with no surge or hidden kilometres, and your verified desert driver arrives ten minutes early at your Jodhpur pickup, fuelled and ready for the Thar.`,
    faqs: [
      { question: "How much does a one-way cab from Jodhpur to Jaisalmer cost?", answer: "A one-way cab from Jodhpur to Jaisalmer starts at ₹3,300 for a Sedan, ₹4,500 for an Ertiga, and ₹5,400 for an Innova Crysta. Since the 285 km distance is just under 300 km, our 300 km minimum billing applies. Toll is extra at actual." },
      { question: "How long does Jodhpur to Jaisalmer take by cab?", answer: "Jodhpur to Jaisalmer takes about 5 to 5.5 hours by cab for the 285 km journey via NH-125 through Pokhran, across long open desert stretches." },
      { question: "What is the main stop between Jodhpur and Jaisalmer?", answer: "Pokhran is the natural halt — famous for its fort, terracotta pottery, and Rajasthani thali dhabas. Lathi and Dechu offer quick chai stops. Up to 2 on-route stops are included free." },
      { question: "Where do you pick up in Jodhpur for the Jaisalmer cab?", answer: "We pick up doorstep across Jodhpur — Blue City hotels below Mehrangarh, Jodhpur Junction station, the airport, and colonies like Ratanada and Sardarpura, at no extra charge." },
      { question: "Which vehicle is best for Jodhpur to Jaisalmer?", answer: "A Sedan suits 2-3 passengers, the Ertiga suits 4-6 with desert luggage, and the Innova Crysta is most popular for 6-7 travellers or those wanting extra clearance for dune-camp approach tracks." },
      { question: "What is the best time to travel from Jodhpur to Jaisalmer?", answer: "October to March offers cool desert driving. Depart Jodhpur by 8 AM to reach Jaisalmer with time for a Sam dunes sunset and camel safari, and avoid summer when the open NH-125 desert stretch gets very hot." }
    ]
  },

  "jodhpur-to-udaipur": {
    from: "Jodhpur",
    to: "Udaipur",
    distance: "250 km",
    distanceNum: 250,
    time: "4.5-5 hours",
    highway: "NH-62 (via Pali, Ranakpur route option)",
    ...calcFares(250),
    highlights: ["250 km Blue City to Lake City", "Ranakpur Jain temple detour option", "Pali & Aravalli foothill halts"],
    popularStops: ["Pali", "Ranakpur"],
    bestTime: "October to March; depart by 8 AM to add the Ranakpur temple detour comfortably",
    description: `The Jodhpur to Udaipur one-way cab connects two of Rajasthan's most beloved cities — the Blue City beneath Mehrangarh and the romantic Lake City of palaces and the Pichola waterfront. Covering around 250 km, it is booked by honeymooners, by tourists on the golden-triangle-plus-Rajasthan circuit, by families heading to lakeside weddings, and by travellers who want to weave in the breathtaking Ranakpur Jain temple en route. At Triveni Cabs this is one of our most-loved scenic drives through the Aravalli foothills.

Because the road distance is 250 km, the fare uses our 300 km minimum billing: a Sedan one-way is ₹3,300, an Ertiga is ₹4,500, and an Innova Crysta is ₹5,400. We are upfront that the 50 km gap to the minimum is part of holding a dedicated vehicle for you. If you are flying out of Udaipur, staying for a lake wedding, or continuing to Mount Abu or Chittorgarh, the one-way drop avoids the ₹6,600 round-trip Sedan cost and saves you ₹3,300 on the return.

The drive heads south on NH-62 through Pali, Sojat (the henna capital), and the rising Aravalli foothills, where the flat Marwar plains give way to rocky green hills, terraced fields, and tribal Bhil villages near the Rajsamand belt. The road is good highway with scenic ghats as you climb toward Udaipur. A favourite variation routes via Ranakpur and the Kumbhalgarh approach — slightly longer but spectacular — and our drivers happily take this on request for travellers who want the temple and fort views.

En-route, the Ranakpur Jain temple is the headline stop — a 15th-century marble masterpiece with 1,444 uniquely carved pillars, set in a wooded valley. Pali offers good thali dhabas for lunch, and the Aravalli ghats near Sadri are wonderful for photos. Many travellers add the mighty Kumbhalgarh Fort with its 36 km wall. Up to two on-route stops are included free, and drivers know the temple timings and parking so your detour runs smoothly.

Pickup in Jodhpur is doorstep across the city — Blue City and Ratanada hotels, Jodhpur Junction station, the airport, and Sardarpura colonies. Drop in Udaipur is flexible to Lake Pichola haveli hotels, the City Palace area, Fateh Sagar lakeside resorts, or Udaipur railway station and airport at Dabok. For 2-3 travellers the Sedan handles the ghats comfortably; families of 4-6 prefer the Ertiga for the hill climbs, and the Innova Crysta is most-requested for 6-7 passengers or those wanting extra power and comfort on the Aravalli inclines.

Whether you are on a romantic Udaipur getaway, attending a Lake City palace wedding, marvelling at Ranakpur's marble, or touring all of Rajasthan, booking is two minutes. Call or WhatsApp 7668570551 — your ₹3,300 Sedan fare is locked upfront with no surge or hidden kilometres, and your verified driver reaches your Jodhpur pickup ten minutes early, ready for the scenic Aravalli run.`,
    faqs: [
      { question: "How much does a one-way cab from Jodhpur to Udaipur cost?", answer: "A one-way cab from Jodhpur to Udaipur starts at ₹3,300 for a Sedan, ₹4,500 for an Ertiga, and ₹5,400 for an Innova Crysta. Since the 250 km distance is under 300 km, our 300 km minimum billing applies. Toll is extra at actual." },
      { question: "How long does Jodhpur to Udaipur take by cab?", answer: "Jodhpur to Udaipur takes about 4.5 to 5 hours by cab for the 250 km journey via NH-62 through Pali and the Aravalli foothills. Add 1-1.5 hours if you detour via Ranakpur." },
      { question: "Can I visit the Ranakpur temple on the way?", answer: "Yes. Many travellers route via Ranakpur to see its stunning 15th-century Jain marble temple, and some add Kumbhalgarh Fort. Our drivers know the timings and parking. Up to 2 on-route stops are included free." },
      { question: "Where do you pick up in Jodhpur for the Udaipur cab?", answer: "We pick up doorstep across Jodhpur — Blue City and Ratanada hotels, Jodhpur Junction station, the airport, and Sardarpura colonies, at no extra charge." },
      { question: "Which vehicle is best for Jodhpur to Udaipur?", answer: "A Sedan suits 2-3 passengers, the Ertiga suits 4-6 and handles the Aravalli ghats well, and the Innova Crysta is best for 6-7 travellers wanting extra power and comfort on the hill climbs." },
      { question: "What is the best time to travel from Jodhpur to Udaipur?", answer: "October to March offers pleasant weather for the scenic Aravalli drive. Depart Jodhpur by 8 AM if you want to add the Ranakpur temple detour comfortably and still reach Udaipur for a Lake Pichola evening." }
    ]
  },

  "udaipur-to-jodhpur": {
    from: "Udaipur",
    to: "Jodhpur",
    distance: "250 km",
    distanceNum: 250,
    time: "4.5-5 hours",
    highway: "NH-62 (via Pali, Ranakpur route option)",
    ...calcFares(250),
    highlights: ["250 km Lake City to Blue City", "Ranakpur & Kumbhalgarh detour option", "Aravalli ghat & Pali halts"],
    popularStops: ["Ranakpur", "Pali"],
    bestTime: "October to March; depart by 8 AM to add Ranakpur or Kumbhalgarh on the way",
    description: `The Udaipur to Jodhpur one-way cab is the reverse of Rajasthan's classic Lake-City-to-Blue-City run, carrying travellers from the palaces and lakes of Udaipur up through the Aravalli foothills to the mighty Mehrangarh Fort and the indigo lanes of Jodhpur. Covering around 250 km, it is booked by tourists continuing the Rajasthan circuit toward Jaisalmer and Bikaner, by honeymooners, by families heading to Marwar weddings, and by travellers who want a Ranakpur temple or Kumbhalgarh fort detour. At Triveni Cabs this scenic drive is a year-round favourite.

Because the road distance is 250 km, the fare uses our 300 km minimum billing: a Sedan one-way is ₹3,300, an Ertiga is ₹4,500, and an Innova Crysta is ₹5,400. We say so honestly — the small gap to the minimum reflects a dedicated vehicle held just for your drop. If you are flying out of Jodhpur, pushing on to Jaisalmer, or staying for a wedding, the one-way avoids the ₹6,600 round-trip Sedan cost and saves you ₹3,300 on the return.

The drive heads north on NH-62, descending from Udaipur's lakeside basin through the Aravalli ghats near Gogunda and Sadri, then opening onto the Marwar plains around Pali and Sojat. The early stretch is beautifully green and hilly — terraced fields, Bhil hamlets, and forest — gradually flattening into the drier, sandier approach to Jodhpur where Mehrangarh Fort eventually dominates the skyline. The road is good highway with comfortable ghats, and drivers handle the inclines smoothly.

En-route, the Ranakpur Jain temple is the star detour — its 1,444 carved marble pillars are world-renowned — and many travellers pair it with Kumbhalgarh Fort and its colossal 36 km wall, the second-longest in the world. Pali offers reliable thali dhabas for lunch, and the Sadri ghats are a photographer's delight. Up to two on-route stops are included free, and drivers know the temple and fort timings so your halt is well-paced.

Pickup in Udaipur is doorstep across the city — Lake Pichola and Fateh Sagar hotels, the City Palace area, Udaipur railway station, and Dabok airport. Drop in Jodhpur is flexible to Blue City hotels below Mehrangarh, Jodhpur Junction station, the airport, or Ratanada and Sardarpura addresses. For 2-3 travellers the Sedan is comfortable; families of 4-6 prefer the Ertiga for the ghats and luggage, and the Innova Crysta is most-requested for 6-7 passengers or those wanting extra comfort over the Aravalli climbs and the long Marwar run.

Whether you are continuing your Rajasthan grand tour, heading to a Jodhpur wedding, detouring through Ranakpur and Kumbhalgarh, or simply need a reliable one-way drop, booking is two minutes. Call or WhatsApp 7668570551 — your ₹3,300 Sedan fare is locked upfront with no surge or hidden kilometres, and your verified driver reaches your Udaipur pickup ten minutes early, ready for the scenic Aravalli journey north.`,
    faqs: [
      { question: "How much does a one-way cab from Udaipur to Jodhpur cost?", answer: "A one-way cab from Udaipur to Jodhpur starts at ₹3,300 for a Sedan, ₹4,500 for an Ertiga, and ₹5,400 for an Innova Crysta. Since the 250 km distance is under 300 km, our 300 km minimum billing applies. Toll is extra at actual." },
      { question: "How long does Udaipur to Jodhpur take by cab?", answer: "Udaipur to Jodhpur takes about 4.5 to 5 hours by cab for the 250 km journey via NH-62 through the Aravalli ghats and Pali. Add 1-1.5 hours for a Ranakpur or Kumbhalgarh detour." },
      { question: "Can I add Ranakpur or Kumbhalgarh on the way?", answer: "Yes. Ranakpur's marble Jain temple and Kumbhalgarh Fort with its 36 km wall are popular detours on this route. Our drivers know the timings, and up to 2 on-route stops are included free." },
      { question: "Where do you pick up in Udaipur for the Jodhpur cab?", answer: "We pick up doorstep across Udaipur — Lake Pichola and Fateh Sagar hotels, the City Palace area, Udaipur railway station, and Dabok airport, at no extra charge." },
      { question: "Which vehicle is best for Udaipur to Jodhpur?", answer: "A Sedan suits 2-3 passengers, the Ertiga suits 4-6 and handles the ghats and luggage well, and the Innova Crysta is best for 6-7 travellers wanting extra comfort over the Aravalli climbs." },
      { question: "What is the best time to travel from Udaipur to Jodhpur?", answer: "October to March is ideal for this scenic Aravalli drive. Depart Udaipur by 8 AM to add a Ranakpur or Kumbhalgarh detour and still reach Jodhpur in good time for a Mehrangarh Fort evening." }
    ]
  },

  "varanasi-to-ayodhya": {
    from: "Varanasi",
    to: "Ayodhya",
    distance: "200 km",
    distanceNum: 200,
    time: "4-4.5 hours",
    highway: "NH-128 / NH-330 (via Jaunpur, Sultanpur)",
    ...calcFares(200),
    highlights: ["200 km Kashi to Ram Janmabhoomi", "Drop at Ram Mandir & Hanuman Garhi", "Jaunpur & Sultanpur en-route halts"],
    popularStops: ["Jaunpur", "Sultanpur"],
    bestTime: "October to March; depart early to reach Ayodhya for Ram Mandir darshan and Saryu aarti",
    description: `The Varanasi to Ayodhya one-way cab is among the most-booked pilgrim routes in Uttar Pradesh, linking the eternal ghats of Kashi with the holy city of Ayodhya and the grand new Ram Mandir at the Ram Janmabhoomi. Covering around 200 km, it is booked daily by devotees on the Kashi-Ayodhya yatra, by families combining Varanasi's Kashi Vishwanath darshan with Ayodhya's Ram Lalla, and by tour groups completing the sacred UP circuit. At Triveni Cabs this has become one of our highest-demand spiritual routes since the Ram Mandir opening.

Because the road distance is 200 km, the fare uses our 300 km minimum billing: a Sedan one-way is ₹3,300, an Ertiga is ₹4,500, and an Innova Crysta is ₹5,400. We state this clearly — you are booking a dedicated pilgrim vehicle, not a per-kilometre meter. If you are staying overnight for Saryu aarti and darshan, or continuing to Lucknow or Prayagraj, the one-way drop avoids paying ₹6,600 round-trip on a Sedan and saves you ₹3,300 on the empty return.

The drive runs north-west on NH-128 and NH-330 through Jaunpur and Sultanpur, crossing the fertile Gangetic plains of eastern UP — sugarcane fields, mango orchards, and small temple towns. The road is largely good two-to-four-lane highway with a few slower stretches through town bazaars. The landscape is classic Awadh-Purvanchal countryside, and the approach to Ayodhya across the Saryu river is moving for pilgrims making the journey for the first time.

En-route, Jaunpur is a worthwhile halt — famous for its Atala Masjid, the Shahi Bridge over the Gomti, and its imarti sweets. Sultanpur offers good dhabas for a vegetarian thali and chai. Many devotees keep the journey sattvic, and our drivers know the clean pure-veg dhabas along this pilgrim corridor. Up to two on-route stops are included free, so families can break the drive for prayers or refreshment.

Pickup in Varanasi is doorstep across the city — ghat-side hotels near Dashashwamedh and Assi, the Kashi Vishwanath Dham area, Varanasi Junction (Cantt) railway station, and Babatpur airport. Drop in Ayodhya is flexible to the Ram Mandir and Ram Path, Hanuman Garhi, Saryu ghat for the evening aarti, or Ayodhya Dham railway station. For 2-3 pilgrims the Sedan is comfortable; families of 4-6 with prasad and luggage prefer the Ertiga, and the Innova Crysta suits 6-7 devotees or groups wanting extra room for the yatra.

Whether you are making the sacred Kashi-Ayodhya pilgrimage, taking elders for Ram Lalla darshan, attending the Saryu aarti, or completing the UP temple circuit, booking is two minutes. Call or WhatsApp 7668570551 — your ₹3,300 Sedan fare is locked upfront with no surge or hidden kilometres, and your verified driver reaches your Varanasi pickup ten minutes early, ready for a smooth and sattvic pilgrim journey.`,
    faqs: [
      { question: "How much does a one-way cab from Varanasi to Ayodhya cost?", answer: "A one-way cab from Varanasi to Ayodhya starts at ₹3,300 for a Sedan, ₹4,500 for an Ertiga, and ₹5,400 for an Innova Crysta. Since the 200 km distance is under 300 km, our 300 km minimum billing applies. Toll is extra at actual." },
      { question: "How long does Varanasi to Ayodhya take by cab?", answer: "Varanasi to Ayodhya takes about 4 to 4.5 hours by cab for the 200 km journey via NH-128 and NH-330 through Jaunpur and Sultanpur, depending on town traffic and stops." },
      { question: "What are good stops between Varanasi and Ayodhya?", answer: "Jaunpur is popular for its Atala Masjid, Shahi Bridge, and imarti sweets, while Sultanpur offers vegetarian thali dhabas. Our drivers know clean pure-veg halts. Up to 2 on-route stops are included free." },
      { question: "Where do you pick up in Varanasi for the Ayodhya cab?", answer: "We pick up doorstep across Varanasi — ghat-side hotels near Dashashwamedh and Assi, the Kashi Vishwanath Dham area, Varanasi Cantt station, and Babatpur airport, at no extra charge." },
      { question: "Which vehicle is best for Varanasi to Ayodhya?", answer: "A Sedan suits 2-3 pilgrims, the Ertiga suits 4-6 with prasad and luggage, and the Innova Crysta is best for 6-7 devotees or groups wanting extra room for the yatra." },
      { question: "What is the best time to travel from Varanasi to Ayodhya?", answer: "October to March offers comfortable weather. Depart Varanasi early to reach Ayodhya in time for Ram Mandir darshan and the evening Saryu aarti, and to avoid afternoon heat on the open highway." }
    ]
  },

  "varanasi-to-bodhgaya": {
    from: "Varanasi",
    to: "Bodhgaya",
    distance: "250 km",
    distanceNum: 250,
    time: "5-6 hours",
    highway: "NH-19 / NH-2 (via Sasaram, Gaya)",
    ...calcFares(250),
    highlights: ["250 km Kashi to Buddhist Bodhgaya", "Drop at Mahabodhi Temple & Bodhi Tree", "Sasaram & Sher Shah tomb halt"],
    popularStops: ["Sasaram", "Gaya"],
    bestTime: "October to March; depart by 7 AM to reach Bodhgaya for an afternoon Mahabodhi visit",
    description: `The Varanasi to Bodhgaya one-way cab is the classic Buddhist pilgrim route, linking the Hindu spiritual capital of Kashi with Bodhgaya — the place of the Buddha's enlightenment under the Bodhi Tree. Covering around 250 km into Bihar, it is booked by international Buddhist pilgrims from Sri Lanka, Thailand, Japan, and beyond, by tour groups on the Buddhist circuit toward Rajgir and Nalanda, and by travellers pairing Sarnath near Varanasi with the Mahabodhi Temple. At Triveni Cabs this cross-state route is run by drivers familiar with the UP-Bihar corridor.

Because the road distance is 250 km, the fare uses our 300 km minimum billing: a Sedan one-way is ₹3,300, an Ertiga is ₹4,500, and an Innova Crysta is ₹5,400. We are upfront about this — the gap to the minimum reflects holding a dedicated vehicle and crossing into Bihar. If you are staying on at Bodhgaya monasteries or continuing to Gaya, Rajgir, and Nalanda, the one-way drop avoids the ₹6,600 round-trip Sedan cost and saves you ₹3,300 on the return.

The drive runs east on NH-19 (the old Grand Trunk Road) through Mohania and Sasaram before turning toward Gaya and Bodhgaya. It crosses the Karmanasa river marking the UP-Bihar border, then the plains of Rohtas and Aurangabad districts. The road is mostly good four-lane highway on the GT Road stretch, with slower going on the approach to Gaya. Drivers carry the necessary cross-state permits and FASTag, and know the route well enough to keep the journey smooth.

En-route, Sasaram is the standout halt — home to the magnificent Sher Shah Suri tomb set in a lake, a Mughal-era architectural gem worth a 20-minute stop. The GT Road dhabas serve hearty Bihari and Punjabi fare, litti-chokha being a local specialty. Gaya, just before Bodhgaya, is itself a major Hindu pilgrim town with the Vishnupad temple. Up to two on-route stops are included free, and drivers know reliable clean dhabas on this long inter-state run.

Pickup in Varanasi is doorstep across the city — ghat hotels near Dashashwamedh and Assi, Sarnath, Varanasi Cantt railway station, and Babatpur airport. Drop in Bodhgaya is flexible to the Mahabodhi Temple complex, the international monasteries (Thai, Tibetan, Japanese), your hotel on Bodhgaya Road, or Gaya Junction railway station. For 2-3 pilgrims the Sedan is comfortable; international groups of 4-6 with luggage prefer the Ertiga, and the Innova Crysta is most-requested for 6-7 passengers or those wanting extra room on the longer inter-state drive.

Whether you are a Buddhist pilgrim seeking the Bodhi Tree, on the Buddhist circuit toward Nalanda, pairing Sarnath with Bodhgaya, or escorting elders on a spiritual journey, booking is two minutes. Call or WhatsApp 7668570551 — your ₹3,300 Sedan fare is locked upfront with no surge or hidden kilometres, and your verified driver reaches your Varanasi pickup ten minutes early, permits ready for the Bihar crossing.`,
    faqs: [
      { question: "How much does a one-way cab from Varanasi to Bodhgaya cost?", answer: "A one-way cab from Varanasi to Bodhgaya starts at ₹3,300 for a Sedan, ₹4,500 for an Ertiga, and ₹5,400 for an Innova Crysta. Since the 250 km distance is under 300 km, our 300 km minimum billing applies. Toll, state tax, and Bihar permit are extra at actual." },
      { question: "How long does Varanasi to Bodhgaya take by cab?", answer: "Varanasi to Bodhgaya takes about 5 to 6 hours by cab for the 250 km journey via NH-19 (GT Road) through Sasaram and Gaya, including the UP-Bihar crossing." },
      { question: "What is the best stop between Varanasi and Bodhgaya?", answer: "Sasaram is the standout halt for the Sher Shah Suri tomb set in a lake, and the GT Road dhabas serve litti-chokha and Punjabi fare. Gaya's Vishnupad temple is near Bodhgaya. Up to 2 stops are free." },
      { question: "Where do you pick up in Varanasi for the Bodhgaya cab?", answer: "We pick up doorstep across Varanasi — ghat hotels near Dashashwamedh and Assi, Sarnath, Varanasi Cantt station, and Babatpur airport, at no extra charge." },
      { question: "Which vehicle is best for Varanasi to Bodhgaya?", answer: "A Sedan suits 2-3 pilgrims, the Ertiga suits 4-6 with luggage, and the Innova Crysta is best for 6-7 passengers or international groups wanting extra room on the inter-state drive." },
      { question: "What is the best time to travel from Varanasi to Bodhgaya?", answer: "October to March offers the most comfortable weather, coinciding with the peak Buddhist pilgrim season. Depart Varanasi by 7 AM to reach Bodhgaya for an afternoon Mahabodhi Temple visit." }
    ]
  },

  "lucknow-to-kanpur": {
    from: "Lucknow",
    to: "Kanpur",
    distance: "90 km",
    distanceNum: 90,
    time: "1.5-2 hours",
    highway: "NH-27 (Lucknow-Kanpur Expressway / GT Road)",
    ...calcFares(90),
    highlights: ["90 km twin-city commute", "Fast Lucknow-Kanpur Expressway", "Drop at Kanpur stations & industries"],
    popularStops: ["Unnao", "Bani"],
    bestTime: "Any time; depart off-peak to avoid Lucknow and Kanpur city congestion",
    description: `The Lucknow to Kanpur one-way cab is one of Uttar Pradesh's busiest short intercity routes, connecting the Nawabi capital with the industrial powerhouse of Kanpur just 90 km away on the Ganga. It is booked round the clock by business travellers in the leather and textile trade, by professionals commuting between the twin cities, by students at Kanpur's IIT and universities, and by families and patients heading to Kanpur's hospitals. At Triveni Cabs this is one of our highest-frequency, quickest-turnaround drops.

Because the road distance is only 90 km, the fare is calculated on our 300 km minimum billing — a Sedan one-way is ₹3,300, an Ertiga is ₹4,500, and an Innova Crysta is ₹5,400. We tell you this plainly: for such a short hop you are paying for a dedicated point-to-point vehicle and a driver held just for you, not a per-kilometre meter. If you only need a one-way drop because you are returning by train or staying on, this avoids the ₹6,600 round-trip Sedan cost, saving ₹3,300 on the return.

The drive is fast and easy on NH-27, much of it now the modern Lucknow-Kanpur corridor with stretches of expressway-grade road through Unnao district. The route runs through the flat Ganga-belt plains — sugarcane, brick kilns, and the Unnao leather-cluster outskirts — and reaches Kanpur in well under two hours off-peak. Drivers know the bottlenecks at the Lucknow city exit near Alambagh and the Kanpur entry around Jajmau, and time departures to dodge the worst congestion.

En-route, Unnao is the natural halt with highway dhabas serving UP thali and chai, and many travellers pause briefly at the Bani or Nawabganj stretch. The drive is short enough that most go straight through, but our drivers happily stop for refreshment or a quick errand. Up to two on-route stops are included free, useful for business travellers picking up samples or documents in Unnao's industrial belt.

Pickup in Lucknow is doorstep across the city — Hazratganj and Gomti Nagar hotels and offices, Charbagh railway station, Amausi (Chaudhary Charan Singh) airport, and residential colonies like Indira Nagar and Aliganj. Drop in Kanpur is flexible to Kanpur Central railway station, IIT Kanpur, the Jajmau leather hub, Mall Road business district, or any hospital and hotel. For 2-3 passengers the Sedan is ideal; families or small business teams of 4-6 prefer the Ertiga, and the Innova Crysta suits 6-7 travellers or those wanting executive comfort for a client visit.

Whether you are on a business trip to Kanpur's industries, commuting between the twin cities, dropping a student at IIT, or escorting a patient to a Kanpur hospital, booking is two minutes. Call or WhatsApp 7668570551 — your ₹3,300 Sedan fare is locked upfront with no surge or hidden kilometres, and your verified driver reaches your Lucknow pickup ten minutes early for this quick, reliable hop.`,
    faqs: [
      { question: "How much does a one-way cab from Lucknow to Kanpur cost?", answer: "A one-way cab from Lucknow to Kanpur starts at ₹3,300 for a Sedan, ₹4,500 for an Ertiga, and ₹5,400 for an Innova Crysta. Since the distance is only 90 km, our 300 km minimum billing at ₹11/km applies. Toll is extra at actual." },
      { question: "How long does Lucknow to Kanpur take by cab?", answer: "Lucknow to Kanpur takes about 1.5 to 2 hours by cab for the 90 km journey via NH-27 and the Lucknow-Kanpur corridor, depending on city congestion at both ends." },
      { question: "Is there a good stop between Lucknow and Kanpur?", answer: "Unnao is the natural halt with highway dhabas serving UP thali and chai. The drive is short enough that most travellers go straight through, but up to 2 on-route stops are included free." },
      { question: "Where do you pick up in Lucknow for the Kanpur cab?", answer: "We pick up doorstep across Lucknow — Hazratganj and Gomti Nagar hotels and offices, Charbagh station, Amausi airport, and colonies like Indira Nagar and Aliganj, at no extra charge." },
      { question: "Which vehicle is best for Lucknow to Kanpur?", answer: "A Sedan suits 2-3 passengers, the Ertiga suits 4-6 families or business teams, and the Innova Crysta is best for 6-7 travellers or those wanting executive comfort for a client visit." },
      { question: "What is the best time to travel from Lucknow to Kanpur?", answer: "This short route is comfortable any time of day. Depart off-peak to avoid Lucknow city congestion near Alambagh and the Kanpur entry around Jajmau, which can add 20-30 minutes during rush hours." }
    ]
  },

  "lucknow-to-prayagraj": {
    from: "Lucknow",
    to: "Prayagraj",
    distance: "200 km",
    distanceNum: 200,
    time: "3.5-4 hours",
    highway: "NH-30 / Purvanchal Expressway link (via Raebareli)",
    ...calcFares(200),
    highlights: ["200 km capital to Sangam city", "Drop at Triveni Sangam & Kumbh ghats", "Raebareli & Pratapgarh halts"],
    popularStops: ["Raebareli", "Pratapgarh"],
    bestTime: "October to March, or Kumbh/Magh Mela season; depart early for a Sangam morning",
    description: `The Lucknow to Prayagraj one-way cab connects the Nawabi capital with the holy Sangam city of Prayagraj (Allahabad), where the Ganga, Yamuna, and mythical Saraswati meet at the Triveni Sangam. Covering around 200 km, it is booked by pilgrims heading for a Sangam dip, by Kumbh and Magh Mela travellers, by students and parents bound for Allahabad University and the High Court, and by tourists visiting Anand Bhawan and the Allahabad Fort. At Triveni Cabs this is a core Purvanchal route our drivers run frequently, especially in mela season.

Because the road distance is 200 km, the fare uses our 300 km minimum billing: a Sedan one-way is ₹3,300, an Ertiga is ₹4,500, and an Innova Crysta is ₹5,400. We state this honestly — you are booking a dedicated vehicle, not a per-kilometre meter. If you are staying on for the mela, returning by train, or continuing to Varanasi or Chitrakoot, the one-way drop avoids the ₹6,600 round-trip Sedan cost and saves you ₹3,300 on the empty return.

The drive heads south-east via NH-30 through Raebareli and Pratapgarh, crossing the fertile Awadh plains of mango orchards, guava belts (Prayagraj is famous for amrood), and small market towns. Newer expressway links have improved the corridor considerably, and the road is mostly good two-to-four-lane highway. The approach to Prayagraj over the Ganga and Yamuna bridges is memorable, especially during Magh Mela when the Sangam sands fill with tents and pilgrims.

En-route, Raebareli offers good dhaba halts with UP thali, and Pratapgarh is the gateway to the famous amla (gooseberry) belt — local amla candy and murabba are popular buys. Many pilgrims keep the drive sattvic, and our drivers know clean pure-veg dhabas along the route. Up to two on-route stops are included free, so families can break the journey for refreshment or prayers.

Pickup in Lucknow is doorstep across the city — Hazratganj and Gomti Nagar hotels and offices, Charbagh railway station, Amausi airport, and colonies like Indira Nagar and Aliganj. Drop in Prayagraj is flexible to the Triveni Sangam and mela ghats, Anand Bhawan, Allahabad University, Prayagraj Junction railway station, or the High Court and Civil Lines area. For 2-3 travellers the Sedan is comfortable; families of 4-6 with luggage prefer the Ertiga, and the Innova Crysta suits 6-7 pilgrims or groups wanting extra room, especially with mela baggage.

Whether you are taking a holy dip at the Sangam, attending the Magh or Kumbh Mela, escorting a student to Allahabad University, or visiting the Nehru family's Anand Bhawan, booking is two minutes. Call or WhatsApp 7668570551 — your ₹3,300 Sedan fare is locked upfront with no surge or hidden kilometres, and your verified driver reaches your Lucknow pickup ten minutes early, ready for a smooth Sangam-bound journey.`,
    faqs: [
      { question: "How much does a one-way cab from Lucknow to Prayagraj cost?", answer: "A one-way cab from Lucknow to Prayagraj (Allahabad) starts at ₹3,300 for a Sedan, ₹4,500 for an Ertiga, and ₹5,400 for an Innova Crysta. Since the 200 km distance is under 300 km, our 300 km minimum billing applies. Toll is extra at actual." },
      { question: "How long does Lucknow to Prayagraj take by cab?", answer: "Lucknow to Prayagraj takes about 3.5 to 4 hours by cab for the 200 km journey via NH-30 through Raebareli and Pratapgarh, faster with the newer expressway links and quieter outside mela season." },
      { question: "What are good stops between Lucknow and Prayagraj?", answer: "Raebareli offers UP thali dhabas, and Pratapgarh is the gateway to the amla belt with local candy and murabba. Our drivers know clean pure-veg halts. Up to 2 on-route stops are included free." },
      { question: "Where do you pick up in Lucknow for the Prayagraj cab?", answer: "We pick up doorstep across Lucknow — Hazratganj and Gomti Nagar hotels and offices, Charbagh station, Amausi airport, and colonies like Indira Nagar and Aliganj, at no extra charge." },
      { question: "Which vehicle is best for Lucknow to Prayagraj?", answer: "A Sedan suits 2-3 travellers, the Ertiga suits 4-6 with luggage, and the Innova Crysta is best for 6-7 pilgrims or groups wanting extra room, especially during the Magh or Kumbh Mela with extra baggage." },
      { question: "What is the best time to travel from Lucknow to Prayagraj?", answer: "October to March offers comfortable weather, and the Magh Mela (January-February) and Kumbh are peak pilgrim seasons. Depart Lucknow early to reach the Sangam for a morning dip and to beat mela-day traffic into the city." }
    ]
  },
  "chandigarh-to-dalhousie": {
    from: "Chandigarh",
    to: "Dalhousie",
    distance: "310 km",
    distanceNum: 310,
    time: "7-8 hours",
    highway: "NH-154 via Pathankot",
    ...calcFares(310),
    highlights: ["Via Pathankot & Banikhet road", "7-8 hours scenic hill drive", "Colonial hill station in the Dhauladhars"],
    popularStops: ["Pathankot", "Banikhet", "Khajjiar viewpoint"],
    bestTime: "Early morning 5-6 AM to reach Dalhousie before dusk on the hill road",
    description: `Chandigarh to Dalhousie is a memorable 310 km journey from the plains of Punjab into the Dhauladhar foothills of Himachal Pradesh. Dalhousie, a graceful colonial-era hill station spread across five hills, is a favourite escape for travellers arriving in Chandigarh by train, by flight at IXC Airport, or driving up from Delhi. Our one-way cab is the ideal choice when you plan to stay in Dalhousie or continue to Khajjiar and Chamba, since you only pay for the trip you actually take.

The biggest reason to book one-way is the cost saving. A round-trip taxi charges you for the return distance even when you are not in the car, while our one-way fare from Chandigarh to Dalhousie starts at just ₹3,410 for a Sedan (310 km at ₹11/km). An Ertiga is ₹4,650 and an Innova Crysta is ₹5,580. Compared to a round trip you save roughly half, with no empty-return charges and complete clarity on pricing before departure.

The drive follows NH-5 to Rupnagar, then crosses into Punjab towards Hoshiarpur before joining NH-154 towards Pathankot. From Pathankot the road begins its climb through Dunera and Banikhet, winding up to Dalhousie. The first half is fast, flat highway, while the final 80 km is a steady mountain ascent with pine forests, deodar slopes, and sweeping valley views opening up near Banikhet.

There are several good places to break the journey. Pathankot is the natural midway halt for a full meal, and the dhabas along the Hoshiarpur–Pathankot stretch serve excellent Punjabi food, fresh parathas, and hot tea. Closer to Dalhousie, the Banikhet bend and the road towards Khajjiar offer photo-worthy viewpoints where many travellers stop to stretch and take in the meadows.

We pick you up from anywhere in Chandigarh, Mohali, or Panchkula, and directly from Chandigarh Airport (IXC) or the railway station if you are arriving by flight or train. Drop is fully flexible — your hotel in Dalhousie, Gandhi Chowk, Subhash Chowk, or onward at Khajjiar. For this hill route we recommend an Innova Crysta or Ertiga for their higher ground clearance and comfort on curves, though a well-maintained Sedan handles the road comfortably for couples and small families.

To book your Chandigarh to Dalhousie one-way cab, simply WhatsApp or call us at 7668570551. Share your pickup point, travel date, and vehicle preference, and our team will confirm an experienced hill driver and a fixed all-inclusive fare within minutes.`,
    faqs: [
      { question: "What is the one-way cab fare from Chandigarh to Dalhousie?", answer: "Chandigarh to Dalhousie one-way costs ₹3,410 for Sedan (310 km at ₹11/km). Ertiga is ₹4,650 and Innova Crysta is ₹5,580. Toll and parking extra." },
      { question: "How long does Chandigarh to Dalhousie take?", answer: "The 310 km drive takes 7-8 hours via Pathankot and Banikhet. The final climb to Dalhousie is slow due to winding mountain roads." },
      { question: "Can I be picked up from Chandigarh Airport?", answer: "Yes, we offer pickup from Chandigarh Airport (IXC), the railway station, or any address in Chandigarh, Mohali, or Panchkula for the Dalhousie trip." },
      { question: "Can I visit Khajjiar on the way?", answer: "Yes, Khajjiar is just beyond Dalhousie and a popular add-on. Let us know in advance and the driver will plan the route and a stop accordingly." },
      { question: "Which vehicle is best for the Dalhousie hill route?", answer: "An Innova Crysta or Ertiga is recommended for the climb to Dalhousie thanks to better ground clearance and comfort on curves. A Sedan is fine for couples with light luggage." },
      { question: "Is the Chandigarh-Dalhousie road open year-round?", answer: "Yes, the route via Pathankot stays open throughout the year. In winter our drivers carry chains for the upper sections near Banikhet and Dalhousie if there is snow." }
    ]
  },

  "chandigarh-to-mcleodganj": {
    from: "Chandigarh",
    to: "McLeodganj",
    distance: "250 km",
    distanceNum: 250,
    time: "6-7 hours",
    highway: "NH-154 via Una & Kangra",
    ...calcFares(250),
    highlights: ["Via Una-Kangra valley route", "6-7 hours to Little Lhasa", "Home of the Dalai Lama"],
    popularStops: ["Una", "Kangra", "Kangra Fort"],
    bestTime: "Morning 6-7 AM to reach McLeodganj for a relaxed evening at the main square",
    description: `Chandigarh to McLeodganj is a scenic 250 km drive into the Kangra Valley, ending in the lively hill town nicknamed "Little Lhasa" — the home of the Dalai Lama and the heart of Tibetan culture in India. Travellers reaching Chandigarh by flight, train, or from Delhi often choose this one-way cab to continue up to McLeodganj, Dharamshala, and Bhagsu without paying for an unused return journey.

One-way pricing is where you save the most. Because McLeodganj is about 250 km away, the 300 km minimum billing applies, so the Sedan fare is ₹3,300 (300 km at ₹11/km), an Ertiga is ₹4,500 and an Innova Crysta is ₹5,400. Even with the minimum applied, this is roughly half the cost of a round-trip taxi that would charge you for the empty return leg — and the price is fixed and transparent before you start.

The route runs along NH-5 and NH-154 via Anandpur Sahib and Una, then climbs gently through the Kangra Valley past Nadaun and Kangra town. This stretch is one of the prettiest in lower Himachal, with the Dhauladhar range standing like a wall of snow above terraced tea gardens and the Beas tributaries. The 6-7 hour drive is comfortable, with only the final approach to McLeodganj being steep and narrow.

Good stops along the way include Anandpur Sahib for the historic Gurudwara, Una for a quick meal at the highway dhabas, and Kangra, where you can visit the ancient Kangra Fort or the Brajeshwari Devi temple. The roadside eateries near Una and Kangra serve hearty Himachali and Punjabi food, perfect for a mid-journey break.

We collect you from any location in Chandigarh, Mohali, or Panchkula, and directly from Chandigarh Airport (IXC) or the railway station. Drop is flexible anywhere in McLeodganj, Dharamshala, Bhagsunag, or Dharamkot. Because the last few kilometres into McLeodganj are tight and steep, we suggest an Ertiga or Innova Crysta for comfort, though a Sedan manages the route well for two or three passengers.

Booking is quick — WhatsApp or call 7668570551 with your pickup address, date, and preferred vehicle. Our team will assign a seasoned Kangra-valley driver and confirm your all-inclusive Chandigarh to McLeodganj one-way fare right away.`,
    faqs: [
      { question: "What is the one-way cab fare from Chandigarh to McLeodganj?", answer: "Chandigarh to McLeodganj one-way costs ₹3,300 for Sedan (300 km minimum billing applies for the 250 km route). Ertiga is ₹4,500 and Innova Crysta is ₹5,400. Toll extra." },
      { question: "Why is the fare based on 300 km for a 250 km trip?", answer: "One-way cabs carry a 300 km minimum billing because the driver returns empty. Even so, you save about 50% compared to a round-trip taxi." },
      { question: "How long does Chandigarh to McLeodganj take?", answer: "The 250 km drive takes 6-7 hours via Una and Kangra. The final climb into McLeodganj is slow due to narrow streets." },
      { question: "Can I be picked up from Chandigarh Airport or station?", answer: "Yes, we provide pickup from Chandigarh Airport (IXC), the railway station, or any address in Chandigarh, Mohali, and Panchkula." },
      { question: "Can I stop at Kangra Fort on the way?", answer: "Yes, Kangra Fort and the Brajeshwari Devi temple are on the route. Tell the driver in advance and a short stop can be arranged." },
      { question: "Which vehicle suits the McLeodganj route?", answer: "An Ertiga or Innova Crysta is ideal for the steep final stretch and luggage. A Sedan is comfortable for couples or small groups with light bags." }
    ]
  },

  "chandigarh-to-mussoorie": {
    from: "Chandigarh",
    to: "Mussoorie",
    distance: "190 km",
    distanceNum: 190,
    time: "5-6 hours",
    highway: "Via Paonta Sahib & Dehradun",
    ...calcFares(190),
    highlights: ["Via Paonta Sahib & Dehradun", "5-6 hours to the Queen of Hills", "Panoramic Doon Valley views"],
    popularStops: ["Paonta Sahib", "Dehradun", "Library Chowk viewpoint"],
    bestTime: "Morning 7-8 AM for clear Doon Valley views from the Mussoorie ridge",
    description: `Chandigarh to Mussoorie is a delightful 190 km drive that crosses from Punjab into Himachal and then Uttarakhand, finishing at the famous "Queen of Hills" perched above the Doon Valley. Mussoorie is a year-round favourite for honeymooners, families, and weekend travellers, and our one-way cab is perfect for guests arriving in Chandigarh by flight, train, or from Delhi who want a direct ride up without a return obligation.

The cost advantage of booking one-way is significant. Since Mussoorie is about 190 km away, the 300 km minimum billing applies, so the Sedan fare is ₹3,300 (300 km at ₹11/km), an Ertiga is ₹4,500 and an Innova Crysta is ₹5,400. This is still far cheaper than a round-trip booking that would bill you for the empty return drive, and your price is locked in and all-inclusive before departure.

The route heads from Chandigarh towards Pinjore and then on towards Paonta Sahib, following the Yamuna into the Doon Valley before climbing the ghat road from Dehradun up to Mussoorie. The drive is scenic throughout — sal forests, the Yamuna riverbanks near Paonta Sahib, and the broad green Doon Valley spreading out below as you ascend the final switchbacks to the Mussoorie ridge.

Worthwhile stops include Paonta Sahib for the riverside Gurudwara and a peaceful break, and Dehradun for a meal before the hill climb. The dhabas along the Paonta–Dehradun stretch serve good North Indian thalis and parathas, and Dehradun itself has plenty of cafes if you prefer a longer pause before the ascent.

We pick you up from any address in Chandigarh, Mohali, or Panchkula, and directly from Chandigarh Airport (IXC) or the railway station. Drop is flexible — your hotel in Mussoorie, the Mall Road, Library Chowk, or Landour. The ghat road above Dehradun is winding, so an Ertiga or Innova Crysta gives the most comfort, though a Sedan is perfectly capable for couples and light luggage.

To reserve your Chandigarh to Mussoorie one-way cab, just WhatsApp or call 7668570551. Share your pickup point, date, and vehicle choice, and we will confirm an experienced hill driver and a fixed fare in minutes.`,
    faqs: [
      { question: "What is the one-way cab fare from Chandigarh to Mussoorie?", answer: "Chandigarh to Mussoorie one-way costs ₹3,300 for Sedan (300 km minimum billing applies for the 190 km route). Ertiga is ₹4,500 and Innova Crysta is ₹5,400. Toll and parking extra." },
      { question: "Why is the minimum billing 300 km for 190 km?", answer: "One-way fares have a 300 km minimum because the driver returns empty. You still save around 50% versus a round-trip taxi." },
      { question: "How long does Chandigarh to Mussoorie take?", answer: "The 190 km drive takes 5-6 hours via Paonta Sahib and Dehradun, including the winding ghat climb to Mussoorie." },
      { question: "Can I be picked up from Chandigarh Airport?", answer: "Yes, we offer pickup from Chandigarh Airport (IXC), the railway station, or any address in Chandigarh, Mohali, and Panchkula." },
      { question: "Can I stop at Paonta Sahib or Dehradun?", answer: "Yes, Paonta Sahib Gurudwara and Dehradun are both on the route and make ideal meal or sightseeing breaks. Let the driver know in advance." },
      { question: "Which vehicle is best for the Mussoorie hill road?", answer: "An Ertiga or Innova Crysta is recommended for the ghat climb above Dehradun. A Sedan is comfortable for couples and small families with light luggage." }
    ]
  },

  "chandigarh-to-chail": {
    from: "Chandigarh",
    to: "Chail",
    distance: "110 km",
    distanceNum: 110,
    time: "3-4 hours",
    highway: "Via Solan & Kandaghat",
    ...calcFares(110),
    highlights: ["Via Solan & Kandaghat", "3-4 hours quiet hill escape", "World's highest cricket ground"],
    popularStops: ["Solan", "Kandaghat", "Chail Palace"],
    bestTime: "Morning 8-9 AM for a relaxed arrival and clear deodar-forest views",
    description: `Chandigarh to Chail is a short and peaceful 110 km drive into the deodar forests of Himachal Pradesh, leading to one of the region's quietest and most charming hill retreats. Chail, once the summer capital of the Maharaja of Patiala, is famous for the Chail Palace and the highest cricket ground in the world. Our one-way cab is ideal for travellers arriving in Chandigarh by flight, train, or from Delhi who want a calm getaway without the crowds of Shimla.

Booking one-way keeps your costs low and clear. Because Chail is only 110 km away, the 300 km minimum billing applies, so the Sedan fare is ₹3,300 (300 km at ₹11/km), an Ertiga is ₹4,500 and an Innova Crysta is ₹5,400. While the minimum applies on this short route, you still avoid the return charges of a round-trip taxi and enjoy a fixed, all-inclusive price agreed before you set off.

The drive follows NH-5 from Chandigarh through Pinjore and Kalka, then climbs towards Solan before branching off at Kandaghat onto the quieter road to Chail. The first part shares the busy Shimla highway, but once you turn towards Chail the traffic thins dramatically and you wind through thick pine and deodar forest with very little company — a big part of Chail's appeal.

Good stops along the way include Solan, often called the "Mushroom City of India," for a meal or a coffee, and the Kandaghat junction for a quick break before the final forested climb. The dhabas around Solan and Kandaghat serve tasty Himachali dishes and hot snacks, perfect for a short pause on this compact journey.

We collect you from anywhere in Chandigarh, Mohali, or Panchkula, and directly from Chandigarh Airport (IXC) or the railway station. Drop is flexible — Chail Palace, your resort, or the cricket ground area. The road is in good condition, so a Sedan handles it easily for couples and small families, while an Ertiga or Innova Crysta adds extra comfort and luggage space for larger groups.

To book your Chandigarh to Chail one-way cab, WhatsApp or call 7668570551 with your pickup address, travel date, and vehicle preference. Our team will assign a reliable driver and confirm your fixed fare within minutes.`,
    faqs: [
      { question: "What is the one-way cab fare from Chandigarh to Chail?", answer: "Chandigarh to Chail one-way costs ₹3,300 for Sedan (300 km minimum billing applies for the 110 km route). Ertiga is ₹4,500 and Innova Crysta is ₹5,400. Toll extra." },
      { question: "Why is billing 300 km for a 110 km trip?", answer: "All one-way cabs have a 300 km minimum because the driver must return empty. This still costs far less than a round-trip taxi for the same trip." },
      { question: "How long does Chandigarh to Chail take?", answer: "The 110 km drive takes 3-4 hours via Solan and Kandaghat, with the final forested stretch to Chail being slow and winding." },
      { question: "Can I be picked up from Chandigarh Airport?", answer: "Yes, we provide pickup from Chandigarh Airport (IXC), the railway station, or any address in Chandigarh, Mohali, and Panchkula." },
      { question: "Can I stop at Solan on the way?", answer: "Yes, Solan is on the route and a good place for a meal or coffee. Just let the driver know and a short stop can be arranged." },
      { question: "Which vehicle is best for Chail?", answer: "A Sedan handles the Chail road comfortably for couples and small families. Choose an Ertiga or Innova Crysta for larger groups or extra luggage." }
    ]
  },

  "chandigarh-to-narkanda": {
    from: "Chandigarh",
    to: "Narkanda",
    distance: "150 km",
    distanceNum: 150,
    time: "5-6 hours",
    highway: "NH-5 via Shimla",
    ...calcFares(150),
    highlights: ["Via Shimla on NH-5", "5-6 hours apple-country drive", "Hatu Peak & winter skiing"],
    popularStops: ["Solan", "Shimla", "Kufri"],
    bestTime: "Early morning 6-7 AM to clear Shimla traffic and reach Narkanda by afternoon",
    description: `Chandigarh to Narkanda is a beautiful 150 km drive deep into apple country, climbing beyond Shimla to a high ridge town famed for Hatu Peak, dense cedar forests, and winter skiing. Narkanda is a wonderful choice for travellers who want quiet alpine scenery beyond the usual hill stations, and our one-way cab suits guests arriving in Chandigarh by flight, train, or from Delhi who plan to stay in Narkanda or continue towards Sangla and Kinnaur.

One-way booking gives you the best value. As Narkanda is about 150 km away, the 300 km minimum billing applies, so the Sedan fare is ₹3,300 (300 km at ₹11/km), an Ertiga is ₹4,500 and an Innova Crysta is ₹5,400. Even with the minimum, this is roughly half what a round-trip taxi would charge for the empty return, and your fare is fixed and all-inclusive before departure.

The route follows NH-5 from Chandigarh through Pinjore, Solan, and Shimla, then continues past Kufri and Fagu along the old Hindustan-Tibet road to Narkanda. The first half is the familiar Shimla highway, but beyond Shimla the road quietens and rises steadily through apple orchards and thick deodar forest, with grand views of the Himalayan ranges opening up near Fagu and Narkanda.

Good places to pause include Solan for a meal, Shimla for a coffee or a quick walk, and Kufri for its viewpoints and mountain scenery. The dhabas around Solan and the cafes in Shimla and Kufri make convenient breaks, and many travellers stop briefly at Fagu to admire the orchard-covered slopes before the final climb to Narkanda.

We pick you up from any address in Chandigarh, Mohali, or Panchkula, and directly from Chandigarh Airport (IXC) or the railway station. Drop is flexible — your hotel in Narkanda, the Hatu Peak base, or onward towards Thanedar and Kotgarh. Because the route climbs high and can be cold, an Ertiga or Innova Crysta is recommended for comfort and ground clearance, though a Sedan manages the road well for couples with light luggage.

To book your Chandigarh to Narkanda one-way cab, simply WhatsApp or call 7668570551 with your pickup point, date, and vehicle choice. Our team will confirm an experienced hill driver and a fixed fare within minutes.`,
    faqs: [
      { question: "What is the one-way cab fare from Chandigarh to Narkanda?", answer: "Chandigarh to Narkanda one-way costs ₹3,300 for Sedan (300 km minimum billing applies for the 150 km route). Ertiga is ₹4,500 and Innova Crysta is ₹5,400. Toll extra." },
      { question: "Why is the fare based on 300 km for 150 km?", answer: "One-way cabs apply a 300 km minimum because the driver returns empty. You still save about 50% compared to a round-trip taxi." },
      { question: "How long does Chandigarh to Narkanda take?", answer: "The 150 km drive takes 5-6 hours via Shimla. Traffic around Shimla and the high mountain road beyond Kufri slow the journey." },
      { question: "Can I be picked up from Chandigarh Airport?", answer: "Yes, we provide pickup from Chandigarh Airport (IXC), the railway station, or any address in Chandigarh, Mohali, and Panchkula." },
      { question: "Can I stop at Shimla or Kufri on the way?", answer: "Yes, both Shimla and Kufri are directly on the route and make excellent stops for a meal, coffee, or sightseeing. Let the driver know in advance." },
      { question: "Which vehicle is best for the Narkanda route?", answer: "An Ertiga or Innova Crysta is recommended for the high, cold mountain road beyond Shimla. A Sedan is fine for couples with light luggage." }
    ]
  },
};

// Merge the Week-39 new Delhi corridors into the public route map.
export const oneWayRoutes = { ..._baseOneWayRoutes, ...newCorridorsA, ...newCorridorsB };

// Slugify a city display name ("Greater Noida" -> "greater-noida") so it can be
// matched against the _CITY_PLACES geo map in speakable-helpers.
export function cityToGeoSlug(cityName) {
  return String(cityName || '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Helper functions
export function getOneWayRoute(slug) {
  return oneWayRoutes[slug] || null;
}

export function getAllOneWayRouteSlugs() {
  return Object.keys(oneWayRoutes);
}

export function getRelatedRoutes(slug) {
  const route = oneWayRoutes[slug];
  if (!route) return [];

  const reverseSlug = `${route.to.toLowerCase().replace(/\s+/g, '-')}-to-${route.from.toLowerCase().replace(/\s+/g, '-')}`;
  const related = [];

  // Add reverse route if it exists
  if (oneWayRoutes[reverseSlug]) {
    related.push({ slug: reverseSlug, ...oneWayRoutes[reverseSlug] });
  }

  // Same-origin and same-destination candidates, ranked by distance similarity —
  // NOT insertion order. (Order-slicing meant routes added later in the data file
  // never surfaced on any older page, leaving new routes with zero inbound links.)
  const dist = route.distanceNum || 0;
  const candidates = [];
  Object.entries(oneWayRoutes).forEach(([key, value]) => {
    if (key === slug || key === reverseSlug) return;
    if (value.from === route.from || (value.to === route.to && value.from !== route.from)) {
      candidates.push([key, value]);
    }
  });
  candidates
    .sort((a, b) => Math.abs((a[1].distanceNum || 0) - dist) - Math.abs((b[1].distanceNum || 0) - dist))
    .forEach(([key, value]) => related.push({ slug: key, ...value }));

  return related.slice(0, 8);
}
