// src/utilis/travelByCarWave2.js
//
// Five new forward driving guides — Week 53, wave 2.
//
// WHY THESE FIVE
// --------------
// Each has a toll-cost page but no driving guide, which meant the toll page's
// "travel by car" link resolved to nothing and was suppressed. These five close
// that gap on the busiest corridors left: the two expressway runs out of Delhi,
// the Dehradun route, and the Ajmer-Jaipur leg of NH-48.
//
// Each one also produces its reverse automatically once
// scripts/week53-gen-travel-reverse.mjs is re-run, so five records here become
// ten pages.
//
// WHAT IS WRITTEN AND WHAT IS COMPUTED
// ------------------------------------
// The segment lengths, road surface, and what is beside the road are written —
// these are stable, checkable facts about particular highways, not estimates.
// Every fare is computed by createTravelRoute from the rate card in pricing.js.
// Nothing priced is typed in.
//
// The segment distances in each roadMap sum to the stated totalDistance; the
// reverse generator refuses a record where they disagree by more than 15%,
// because a partial roadMap produces a reverse that mis-states where things
// are.

export const travelByCarWave2 = (createTravelRoute) => ({
  "delhi-to-meerut": createTravelRoute({
    slug: "delhi-to-meerut", origin: "Delhi", destination: "Meerut", totalDistance: 70, drivingTime: "1-1.5 hours",
    roadMap: [
      { segment: "Delhi to Indirapuram", distance: 18, time: "30 min", roadQuality: "Excellent", highlights: "The Delhi-Meerut Expressway starts at Akshardham and runs fourteen lanes wide through the city — the widest stretch of road in the country" },
      { segment: "Indirapuram to Dasna", distance: 20, time: "20 min", roadQuality: "Excellent", highlights: "Elevated for much of the way over Ghaziabad, which is the whole point: the old route through the town could take an hour on its own" },
      { segment: "Dasna to Meerut", distance: 32, time: "25 min", roadQuality: "Excellent", highlights: "Greenfield six-lane access-controlled carriageway, no cross traffic and no settlements on the alignment" },
    ],
    drivingTips: [
      "This is the shortest guide on the site for a reason — 70 km of access-controlled expressway with no junction to get wrong",
      "The expressway is tolled from Sarai Kale Khan; the FASTag lane is the only sensible way through and the cash queue at peak is genuinely long",
      "Avoid 8-10 AM and 6-8 PM: the Delhi end is a commuter corridor and the fourteen lanes fill up like any other city road",
      "There is very little on the alignment by design, so eat before you leave or in Meerut rather than expecting dhabas en route",
      "Meerut's own traffic is the slow part of this journey — budget 20 minutes inside the city whatever the expressway did for you",
    ],
    petrolStops: 2,
    foodStops: ["Dasna (38 km)", "Meerut bypass (65 km)"],
    seasonalWarnings: {
      winter: "Dense fog from late December through January is the one real hazard. The expressway's speed limit becomes meaningless and pile-ups happen. Leave after 9 AM in fog season rather than at dawn.",
      monsoon: "Good drainage on the new alignment and no landslide exposure. The Delhi end can waterlog at the older interchanges after heavy rain.",
      summer: "No difficulty beyond the heat. The drive is short enough that it hardly matters.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-haridwar", "delhi-to-dehradun", "delhi-to-rishikesh", "delhi-to-nainital"],
  }),

  "delhi-to-mathura": createTravelRoute({
    slug: "delhi-to-mathura", origin: "Delhi", destination: "Mathura", totalDistance: 180, drivingTime: "2.5-3 hours",
    roadMap: [
      { segment: "Delhi to Greater Noida", distance: 40, time: "1 hour", roadQuality: "Good", highlights: "Urban driving out through Noida to the Yamuna Expressway head at Zero Point — this is the slowest 40 km of the trip by a wide margin" },
      { segment: "Greater Noida to Jewar", distance: 35, time: "25 min", roadQuality: "Excellent", highlights: "The Yamuna Expressway proper: six lanes, access-controlled, dead straight, with the new Jewar airport taking shape on the left" },
      { segment: "Jewar to Mathura", distance: 105, time: "1-1.25 hours", roadQuality: "Excellent", highlights: "Open expressway running parallel to the Yamuna through farmland, with service plazas at intervals and almost nothing else" },
    ],
    drivingTips: [
      "Get onto the Yamuna Expressway and the drive is trivial — the difficulty is entirely in crossing Noida to reach it, so leave by 6 AM",
      "Mathura exit for the Janmabhoomi and Vishram Ghat, and the Vrindavan exit is a few kilometres earlier if that is where you are actually going",
      "The expressway is a notorious speeding stretch with a poor accident record — the limit exists for a reason and the straightness is the hazard, not the comfort",
      "Service plazas are spaced out and are the only facilities on the alignment; the one at around 90 km is the better of them",
      "If you are visiting both Mathura and Vrindavan, do Vrindavan first in the morning and Mathura's ghat in the evening for the aarti",
    ],
    petrolStops: 3,
    foodStops: ["Greater Noida (40 km)", "Yamuna Expressway plaza (90 km)", "Mathura bypass (175 km)"],
    seasonalWarnings: {
      winter: "January fog on the Yamuna Expressway is severe and the straight alignment encourages speed into it. This is the single most dangerous condition on this route — delay the start rather than driving into it.",
      monsoon: "The expressway drains well. Mathura's older lanes flood and are better left to an auto than attempted in a car.",
      summer: "Above 45°C through May and June, which makes the ghats and the temples unpleasant after mid-morning. Start before dawn and be indoors by eleven.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-agra", "delhi-to-jaipur", "agra-to-jaipur", "delhi-to-meerut"],
  }),

  "delhi-to-dehradun": createTravelRoute({
    slug: "delhi-to-dehradun", origin: "Delhi", destination: "Dehradun", totalDistance: 255, drivingTime: "5-6 hours",
    roadMap: [
      { segment: "Delhi to Meerut", distance: 70, time: "1-1.5 hours", roadQuality: "Excellent", highlights: "The Delhi-Meerut Expressway, access-controlled the whole way and elevated over Ghaziabad" },
      { segment: "Meerut to Muzaffarnagar", distance: 55, time: "1 hour", roadQuality: "Good", highlights: "Four-lane highway through sugarcane country — the mills along here run tractor-trailer traffic in the crushing season and it is slow" },
      { segment: "Muzaffarnagar to Roorkee", distance: 65, time: "1-1.25 hours", roadQuality: "Good", highlights: "Four-lane with the Ganga canal running alongside for much of it, and Roorkee's engineering college at the end" },
      { segment: "Roorkee to Dehradun", distance: 65, time: "1.5 hours", roadQuality: "Mixed", highlights: "The Mohand ghat through the Shivalik forest — a genuine hill section with bends, elephant crossings and the first real climb of the trip" },
    ],
    drivingTips: [
      "The last 65 km is nothing like the first 190: Mohand is a forest ghat and the average speed halves, so do not budget this as 255 km of highway",
      "The Mohand stretch passes through Rajaji forest and elephant crossings are real — do not drive it after dark if you can avoid it",
      "Muzaffarnagar to Roorkee is the slow middle in the sugarcane crushing season, roughly November to April, when mill-bound tractor trailers fill the carriageway",
      "The new Delhi-Dehradun corridor is progressively opening in sections and cuts this journey materially where it is complete — ask us what is open on your date rather than relying on last year's route",
      "Leave Delhi by 6 AM: the point is to clear Mohand in daylight, which matters more than arriving early",
    ],
    petrolStops: 4,
    foodStops: ["Murthal dhabas (50 km)", "Khatauli (95 km)", "Roorkee (190 km)"],
    seasonalWarnings: {
      winter: "December and January fog on the plains section is heavy and the sugarcane stretch has slow unlit traffic in it. Dehradun itself is cold but clear. Start late rather than early.",
      monsoon: "The Mohand ghat is the concern — landslip and fallen trees happen through July and August, and the forest section can be closed for short periods. Check before committing to a monsoon date.",
      summer: "The plains are very hot to Roorkee and then the climb cools it. This is the most popular season precisely because Dehradun is the escape, so expect company on the road.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-mussoorie", "delhi-to-haridwar", "delhi-to-rishikesh", "delhi-to-meerut"],
  }),

  "delhi-to-lucknow": createTravelRoute({
    slug: "delhi-to-lucknow", origin: "Delhi", destination: "Lucknow", totalDistance: 550, drivingTime: "8-9 hours",
    roadMap: [
      { segment: "Delhi to Jewar", distance: 60, time: "1.25 hours", roadQuality: "Good", highlights: "Out through Noida to the Yamuna Expressway head — the slowest hour of a long day, and the one to start early for" },
      { segment: "Jewar to Agra", distance: 170, time: "2 hours", roadQuality: "Excellent", highlights: "The Yamuna Expressway at full stretch, six lanes and access-controlled, running parallel to the river through open farmland" },
      { segment: "Agra to Etawah", distance: 125, time: "1.5 hours", roadQuality: "Excellent", highlights: "Onto the Agra-Lucknow Expressway, which is where this drive becomes genuinely fast — the Lions Safari Park at Etawah is just off it" },
      { segment: "Etawah to Kannauj", distance: 110, time: "1.25 hours", roadQuality: "Excellent", highlights: "Open expressway through the Doab. Kannauj is the historic centre of Indian perfume distilling and the attar workshops take visitors" },
      { segment: "Kannauj to Lucknow", distance: 85, time: "1.25 hours", roadQuality: "Excellent", highlights: "The final expressway run into the Lucknow outskirts, then city roads to the centre" },
    ],
    drivingTips: [
      "This is two expressways joined at Agra, which makes 550 km achievable in a day — but it is still a full day, so start at 5 AM rather than 7",
      "The changeover at Agra is the one place to pay attention; the Yamuna and Agra-Lucknow expressways are separate roads with a short link between them",
      "Both expressways are access-controlled with long gaps between facilities. Fuel at Agra whatever the gauge says, because the Doab stretch has few pumps on the alignment",
      "Kannauj, just off the expressway at around 465 km, is worth an hour if you have one — it is the centre of the attar trade and nothing on this road is remotely like it",
      "A night at Agra turns a hard single day into two comfortable ones and adds the Taj at sunrise, which is the better trip if the dates allow",
    ],
    petrolStops: 5,
    foodStops: ["Yamuna Expressway plaza (90 km)", "Agra (230 km)", "Etawah plaza (355 km)", "Kannauj (465 km)"],
    seasonalWarnings: {
      winter: "January fog across the whole Doab is the serious hazard here, and both expressways are straight enough to encourage speed into it. A 550 km day in fog season should start at 9 AM and accept arriving late, or be split at Agra.",
      monsoon: "Both expressways drain well and there is no hill exposure. Lucknow's older districts waterlog.",
      summer: "Brutal across the Doab, above 45°C in May and June. The car is air-conditioned but a breakdown on an access-controlled road in that heat is a serious matter. Start before dawn.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-agra", "delhi-to-varanasi", "lucknow-to-varanasi", "lucknow-to-ayodhya"],
  }),

  "ajmer-to-jaipur": createTravelRoute({
    slug: "ajmer-to-jaipur", origin: "Ajmer", destination: "Jaipur", totalDistance: 135, drivingTime: "2.5-3 hours",
    roadMap: [
      { segment: "Ajmer to Kishangarh", distance: 27, time: "30 min", roadQuality: "Excellent", highlights: "Six-lane NH-48 out of the Aravalli gap. Kishangarh is India's marble capital and the roadside dust genuinely turns white" },
      { segment: "Kishangarh to Dudu", distance: 48, time: "45 min", roadQuality: "Excellent", highlights: "Open six-lane highway across flat scrub with the Aravalli ridge receding on the left" },
      { segment: "Dudu to Jaipur", distance: 60, time: "1-1.25 hours", roadQuality: "Excellent", highlights: "The run into Jaipur, with the Ajmer Road approach bringing you in past the newer western suburbs rather than the walled city" },
    ],
    drivingTips: [
      "135 km of six-lane highway with no hill section and no difficult junction — this is one of the easier drives in Rajasthan",
      "Kishangarh at 27 km is worth a stop for the Phool Mahal palace on Gundalao lake and the marble yards, and almost nobody stops",
      "The Jaipur end is the slow part: Ajmer Road into the city is congested from the ring road inwards, so add 30 minutes for the last 15 km at any busy hour",
      "Pushkar is 15 km off the Ajmer end rather than on this road — if you want both, do Pushkar before you set off rather than as a detour",
      "Going on to Amber Fort? It is on the far side of Jaipur, so time the arrival for the fort's opening rather than the middle of the day",
    ],
    petrolStops: 3,
    foodStops: ["Kishangarh (27 km)", "Dudu (75 km)", "Jaipur Ajmer Road (120 km)"],
    seasonalWarnings: {
      winter: "The best season, October to March, with pleasant days for the forts at either end. Some morning fog in late December and January but much less than the Gangetic plains.",
      monsoon: "No hill exposure and the highway drains well. The Aravalli scrub is briefly green, which is the one time of year this landscape looks soft.",
      summer: "Above 45°C in May and June and the fort sightseeing at both ends becomes unpleasant by mid-morning. Start at dawn or move the dates.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["jaipur-to-udaipur", "jaipur-to-jodhpur", "agra-to-jaipur", "jaipur-to-mount-abu"],
  }),
});
