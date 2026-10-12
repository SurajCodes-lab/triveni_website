// src/utilis/monthlyRentalCityData.js
//
// Monthly car rental, per city — the 19 cab-hub cities with no city-level page.
//
// WHY THIS SHAPE
// --------------
// The monthly and corporate rental cluster converts at 6.57% against a 0.60%
// site average. That is roughly ten times, and it is the highest-converting
// unbuilt shape measured on this site. City-level coverage exists only inside
// the corporate family, for nine cities — Delhi, Gurgaon, Noida, Jaipur,
// Lucknow, Chandigarh, Dehradun, Agra and Haridwar. These are the other
// nineteen.
//
// It converts because of what the question is. Somebody searching for a monthly
// car with a driver in Jodhpur is not browsing; they have a production, a
// posting, a wedding season or a project, and they want to know what it costs
// per month and whether the included kilometres cover what they actually do.
// That is a priced answer, and no search panel carries it.
//
// NO NEW PRICING
// --------------
// Every figure here comes from the published monthly package already live on
// /monthly-car-rental: sedan Rs 35,000, SUV Rs 50,000, Innova Rs 60,000 per
// month, with 2,500 km and eight hours a day included. Pricing is the client's
// decision, so nothing is invented — what varies city to city is whether those
// 2,500 km are generous or tight for the way the car is actually used there,
// which is a factual matter rather than a pricing one.
//
// WHAT MAKES EACH PAGE ITS OWN
// ----------------------------
// Not the rate, which is the same everywhere. The local facts:
//
//   whoRentsMonthly  — who actually takes a car for a month in this city, and
//                      why. Film units in Jodhpur and Jaisalmer, pilgrimage
//                      operators in Varanasi, orchard and hotel business in
//                      Manali. This is the part that cannot be name-swapped.
//   usagePattern     — what 2,500 km a month means against the real daily
//                      distances here. In Ghaziabad it is a commute allowance;
//                      in Jaisalmer a single desert circuit eats a fifth of it.
//   cityGeography    — the distances that drive the usage.
//   vehicleFit       — which of the three vehicles suits this city, and why.
//   seasonNote       — when demand concentrates, because that decides lead time.
//
// The Week 53 family audit is the reason this is structured rather than written
// freehand: families whose pages differ only by a name measured 4.0-10.9% unique
// share, against 40.6% for families assembling genuinely different facts.

/** The published monthly package. One source, shared by every city page. */
export const MONTHLY_PACKAGE = {
  includedKm: 2500,
  includedHoursPerDay: 8,
  days: 30,
  vehicles: [
    { key: 'sedan', name: 'Sedan (Swift Dzire or similar)', seats: 4, monthly: 35000 },
    { key: 'suv', name: 'SUV (Ertiga or similar)', seats: 6, monthly: 50000 },
    { key: 'innova', name: 'Innova Crysta', seats: 6, monthly: 60000 },
  ],
};

const c = (slug, city, heroImage, fields) => ({ slug, city, heroImage, ...fields });

export const monthlyRentalCities = {
  // ───────────────────────────────────────────────────────────────────────
  jodhpur: c('jodhpur', 'Jodhpur', '/images/sightseeing/Jodhpur/Jodhpur_Hero_section.jpg', {
    whoRentsMonthly:
      'Film and advertising units more than anything else. Mehrangarh, the blue town and the ' +
      'dunes an hour out have made Jodhpur one of the busiest shoot locations in north India, and a ' +
      'unit on a three-week schedule needs a car and a driver who knows which gate opens when. ' +
      'After that it is the wedding business — Jodhpur runs a long destination-wedding season and ' +
      'planners hold vehicles for the whole of it — and heritage hotels keeping a car for guests.',
    usagePattern:
      'A shoot or a wedding posting in Jodhpur is mostly short runs: the old city, Mehrangarh, ' +
      'Mandore, the Bishnoi villages, the airport. Those are 10 to 40 km each, so 2,500 km a month ' +
      'is comfortable — around 80 km a day. It tightens if the schedule includes Osian or Jaisalmer, ' +
      'because a single Jaisalmer round trip is 570 km, almost a quarter of the month in one day.',
    cityGeography:
      'The old city inside the wall is narrow and in places not driveable, so the car works from ' +
      'the edge and the last stretch is walked. Mehrangarh has its own vehicle road up. The airport ' +
      'is 5 km from the centre, which is unusually close, and the Bishnoi villages and Mandore are ' +
      'both inside 25 km.',
    vehicleFit:
      'The Innova Crysta is the usual choice here and for a specific reason: shoot and wedding work ' +
      'means equipment, and the Innova takes it with six people. A sedan suits a single executive ' +
      'posting. The Ertiga is the sensible middle for a family holding a car for a season.',
    seasonNote:
      'October to March, heavily. The wedding dates and the shoot season land in the same window, ' +
      'and in peak weeks the local fleet is committed. Book a month-long hire four to six weeks out ' +
      'for those dates. April to June is quiet and the desert heat is the reason.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  jaisalmer: c('jaisalmer', 'Jaisalmer', '/images/sightseeing/Jaisalmer/Jaisalmer_hero_section.jpg', {
    whoRentsMonthly:
      'Camp operators and tour companies through the season, who need a vehicle on standby for ' +
      'guest transfers between the town, the fort and the dune camps. Film units take cars for ' +
      'longer stretches here than almost anywhere else, because the fort and the Sam and Khuri ' +
      'dunes are a fixed set of locations worked over weeks. And the border infrastructure work ' +
      'brings engineering postings that run for months.',
    usagePattern:
      'This is the city where the included 2,500 km needs thinking about. A day that takes in the ' +
      'fort, Kuldhara, Lodhruva and the Sam dunes is 120 to 150 km, and a single Jodhpur run is 570 ' +
      'km. Camp transfer work, which is mostly town-to-dunes at 40 km each way, fits inside the ' +
      'package easily. Touring work does not, and the extra kilometres are charged at the published ' +
      'per-km rate.',
    cityGeography:
      'The fort is a living town and vehicles are restricted inside much of it. The Sam dunes are ' +
      '42 km west and Khuri 48 km south-west, both on good road. Kuldhara and Lodhruva are inside ' +
      '20 km. Everything else is hours away, which is what makes the usage pattern here so ' +
      'different from a city hire.',
    vehicleFit:
      'The Ertiga and the Innova carry the season here, because desert road and guest luggage ' +
      'between them rule out a sedan for most work. A sedan is fine for an engineering or ' +
      'administrative posting that stays on tarmac.',
    seasonNote:
      'October to March, and the Desert Festival in February concentrates demand into a single ' +
      'fortnight when both vehicles and rooms are committed well ahead. The town empties from April ' +
      'to September and a monthly hire is easy to arrange at short notice.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  udaipur: c('udaipur', 'Udaipur', '/images/sightseeing/Udaipur/Udaipur_hero_section.jpg', {
    whoRentsMonthly:
      'Destination weddings, first and by a distance. Udaipur runs one of the densest wedding ' +
      'calendars in the country and a planner will hold several vehicles for a whole season rather ' +
      'than book them event by event. Alongside that: hotel groups keeping a car for guest use, film ' +
      'and fashion shoots working the palaces and the lakes, and the marble and mining businesses ' +
      'in the surrounding district.',
    usagePattern:
      'Wedding and hotel work in Udaipur is short-run and high-frequency — the City Palace, the ' +
      'lake jetties, the hill resorts at Kumbhalgarh road, the airport at Dabok 22 km out. Fifty to ' +
      'ninety kilometres a day is typical, so 2,500 km a month is a comfortable allowance. It only ' +
      'tightens when a schedule includes Ranakpur or Kumbhalgarh, which are 90 and 85 km each way.',
    cityGeography:
      'The old city around Jagdish temple is narrow and partly pedestrian, so the car drops at the ' +
      'edge. The lake-facing hotels are mostly reached on foot or by boat from a jetty. Dabok ' +
      'airport is 22 km east. The resort belt on the Kumbhalgarh and Eklingji roads adds 20 to 40 km ' +
      'to anything involving it.',
    vehicleFit:
      'The Innova Crysta dominates wedding work, because guest transfers mean luggage and six seats. ' +
      'Hotels tend to take an Ertiga for flexibility. A sedan suits a single executive or a ' +
      'production coordinator working alone.',
    seasonNote:
      'Two clear peaks: November to early December and late January through February, with the ' +
      'wedding dates driving both. A monthly hire covering those windows should be arranged six to ' +
      'eight weeks ahead, because on the biggest auspicious days the entire local fleet is booked. ' +
      'The monsoon, July to September, is the quietest and the lakes are at their fullest.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  varanasi: c('varanasi', 'Varanasi', '/images/sightseeing/Varanasi/varanasi_hero_section.jpg', {
    whoRentsMonthly:
      'Pilgrimage and tour operators running continuous groups, who need a vehicle that is simply ' +
      'always there rather than booked per trip. Beyond that: the university and research community ' +
      'at BHU on long postings, the silk weaving and export trade, documentary and film crews — ' +
      'Varanasi is filmed more or less constantly — and long-stay foreign visitors who find the ' +
      'traffic unmanageable without a driver.',
    usagePattern:
      'Varanasi usage is unusual: very low daily distance, very high daily hours. A day might cover ' +
      '35 km while the car is in use for ten, because the ghats, the Vishwanath corridor and Sarnath ' +
      'are close together and the traffic is slow. So the 2,500 km is rarely the constraint here — ' +
      'the eight-hour daily allowance is the one to watch, and extra hours are charged at the ' +
      'published rate.',
    cityGeography:
      'The ghats and the old city lanes are not driveable at all; the car works from Godowlia, ' +
      'Dashashwamedh road or Assi and the rest is walked. Sarnath is 10 km north, BHU 7 km south, ' +
      'and the airport 25 km out at Babatpur. The Ganga is a hard boundary, so a Ramnagar crossing ' +
      'adds real distance.',
    vehicleFit:
      'A sedan is genuinely the better vehicle in Varanasi, which is the opposite of most cities on ' +
      'this list. The lanes and approach roads are tight and a smaller car reaches closer to where ' +
      'you actually want to be. Take an Ertiga or Innova only when the group size demands it.',
    seasonNote:
      'October to March is the main season, with Dev Deepawali in November the single busiest week ' +
      'of the year. Shivratri and the summer months also draw pilgrim volume. During a major festival ' +
      'the old-city approach roads are closed to vehicles for days at a time, which changes where the ' +
      'car can reach rather than whether it is available.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  manali: c('manali', 'Manali', '/images/sightseeing/Manali/Manali_hero_section.jpg', {
    whoRentsMonthly:
      'Hotels and homestays through the season, holding a vehicle for airport and station transfers ' +
      'and guest excursions. Adventure and trekking operators on the same basis. Apple orchard ' +
      'business through the harvest, which is a freight-and-people mix. And an unusually large number ' +
      'of long-stay remote workers, who have made Old Manali and Vashisht a semi-permanent community ' +
      'and want a car without owning one in the hills.',
    usagePattern:
      'The included 2,500 km goes a long way here because hill distances are short and slow. Solang ' +
      'is 13 km, Vashisht 3, Naggar 22, and a full day to the Atal tunnel and back is under 100 km. ' +
      'Ninety minutes of driving covers 25 km. So the hours matter more than the kilometres, and the ' +
      'Kullu airport and Chandigarh runs — 50 km and 305 km — are what consume the allowance.',
    cityGeography:
      'The Mall is pedestrian in parts and Old Manali across the river is narrow and steep. The ' +
      'Beas divides the usable town. Kullu airport at Bhuntar is 50 km down the valley; the nearest ' +
      'railhead at Joginder Nagar is further. The Atal tunnel has replaced the Rohtang route to ' +
      'Lahaul for most of the year.',
    vehicleFit:
      'An SUV, almost always. Hill gradient, winter surface and the Solang and tunnel roads make ' +
      'ground clearance a practical requirement rather than a preference, and the Ertiga or Innova ' +
      'is what local operators use. A sedan is workable only for valley-floor running in summer.',
    seasonNote:
      'Two peaks: April to June, which is the big one, and late December through January for snow. ' +
      'A monthly hire across either should be arranged well ahead because the whole valley fleet is ' +
      'committed. The Rohtang pass needs a permit and carries a daily vehicle cap, and it is shut by ' +
      'snow for a large part of the year — the tunnel is not a substitute for it if the pass itself ' +
      'is the destination.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  shimla: c('shimla', 'Shimla', '/images/sightseeing/Shimla/shimla_hero_section.jpg', {
    whoRentsMonthly:
      'Government and administrative postings, which Shimla has more of than any other hill town ' +
      'here — the state secretariat means officers and contractors on multi-month assignments. Then ' +
      'hotels on the Mall and in Mashobra holding a car for guests, apple business from the Kotgarh ' +
      'and Narkanda belt during the season, and the schools, several of which are boarding and ' +
      'generate steady parent and staff movement.',
    usagePattern:
      'Low kilometres, high hours, and a particular local quirk: a great deal of Shimla driving is ' +
      'waiting rather than moving, because the Mall and the Ridge are closed to vehicles and the car ' +
      'sits at Victory Tunnel or the lift while you walk. Kufri is 16 km, Naldehra 22, Chail 45. The ' +
      '2,500 km is generous unless the Chandigarh run at 115 km each way is regular.',
    cityGeography:
      'This is the thing that shapes every hire here. The Mall and the Ridge are pedestrian, so the ' +
      'car cannot reach the centre at all — it works from the Cart Road, Victory Tunnel or the lift, ' +
      'and the last stretch is a walk or the lift up. Parking in central Shimla is genuinely scarce. ' +
      'Kalka railhead is 90 km down.',
    vehicleFit:
      'An Ertiga or Innova for anything that involves the ridge roads or winter, where gradient and ' +
      'surface both argue for clearance. A sedan is fine for an administrative posting that mostly ' +
      'runs between the Cart Road, the secretariat and the hotels.',
    seasonNote:
      'April to June and late December through January, the second for snow. Christmas and New Year ' +
      'in Shimla is the single most committed week of the year for vehicles. The monsoon from July to ' +
      'September brings landslide closures on the Kalka and Narkanda roads, which affects routing ' +
      'rather than availability.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  dharamshala: c('dharamshala', 'Dharamshala', '/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg', {
    whoRentsMonthly:
      'The Tibetan institutions at McLeod Ganj, which run long programmes and host visitors for ' +
      'weeks at a time. Meditation and yoga courses on the same pattern — a ten-day or month-long ' +
      'retreat generates steady transfer work. Cricket, because the HPCA stadium brings fixtures and ' +
      'the production and team movement around them. And hotels across the ridge and the Kangra ' +
      'valley below.',
    usagePattern:
      'Short distances, a lot of climbing. McLeod Ganj is 9 km above Dharamshala and that takes 25 ' +
      'minutes; Bhagsu and Dharamkot are a further 3 to 5. Palampur is 35 km, the Kangra fort 20, ' +
      'Gaggal airport 13. A normal month sits well inside 2,500 km. The Amritsar run at 200 km each ' +
      'way is what moves the needle.',
    cityGeography:
      'Two distinct levels — lower Dharamshala with the stadium and the offices, and McLeod Ganj ' +
      'above it, with a steep narrow road between them that congests badly in season. The Dharamkot ' +
      'and Bhagsu roads above McLeod Ganj are tight and parking there is very limited. Gaggal ' +
      'airport is 13 km down and its approach is short-runway and weather-sensitive.',
    vehicleFit:
      'An Ertiga or Innova for the McLeod Ganj and Dharamkot gradient, particularly with passengers ' +
      'and luggage. A sedan handles lower Dharamshala and the Kangra valley comfortably.',
    seasonNote:
      'March to June and September to November. The Dalai Lama\'s teaching schedule concentrates ' +
      'demand into specific weeks that fall outside the normal tourist pattern, and those are the ' +
      'hardest dates to find a vehicle on short notice. The monsoon is heavy here — Dharamshala is ' +
      'among the wettest places in India — and Gaggal flights are frequently affected.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  mussoorie: c('mussoorie', 'Mussoorie', '/images/sightseeing/Mussoorie/Mussoorie_Hero_section.jpg', {
    whoRentsMonthly:
      'The boarding schools, which are the quiet backbone of monthly hire here — Woodstock, ' +
      'Wynberg Allen and the others generate constant parent, staff and student movement across ' +
      'terms. Then hotels along the Mall and in Landour, the academy at Charleville, long-stay ' +
      'writers and remote workers who come for a season, and film units working the hill-station ' +
      'look.',
    usagePattern:
      'Very low kilometres. Kempty Falls is 15 km, Landour 4, Dhanaulti 33, and Dehradun — which is ' +
      'the run that actually matters — 35 km down a continuous descent that takes well over an hour. ' +
      'A month of local work rarely passes 1,200 km. The eight-hour daily allowance is the real ' +
      'constraint, especially on school pickup and airport days.',
    cityGeography:
      'The Mall is pedestrian for much of its length, which is the single most important fact for ' +
      'anyone hiring a car here: the vehicle drops at Picture Palace or Library and the rest is ' +
      'walked. Landour above the town is narrow and steep with almost nowhere to park. Jolly Grant ' +
      'airport is 60 km down, nearly two hours.',
    vehicleFit:
      'An Ertiga or Innova for the descent to Dehradun and the Dhanaulti road, where the gradient ' +
      'is continuous and brakes matter. A sedan is adequate for Mall-to-Landour running in good ' +
      'weather.',
    seasonNote:
      'April to June is the heaviest, and the Mall becomes close to impassable on peak weekends. ' +
      'September to November is the better season to be here. School terms add their own pattern ' +
      'around the start and end dates, which are the hardest days of the year for local transport.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  nainital: c('nainital', 'Nainital', '/images/sightseeing/Nainital/Nainital_hero_section.jpg', {
    whoRentsMonthly:
      'Boarding schools again — Sherwood, St Joseph\'s and others — and hotels around the lake and ' +
      'at Bhimtal. Then the Kumaon University community, fruit business from the Ramgarh and ' +
      'Mukteshwar belt, and tour operators running the lake-district circuit continuously through ' +
      'the season.',
    usagePattern:
      'Short and slow. Bhimtal is 22 km, Sattal 23, Mukteshwar 50, Ranikhet 60. Kathgodam, the ' +
      'railhead and the single most frequent run, is 35 km of steep descent that takes an hour and a ' +
      'quarter. A local month sits around 1,200 to 1,600 km, comfortably inside the package; the ' +
      'hours are what get used.',
    cityGeography:
      'The Mall around Naini Lake is vehicle-restricted in parts and entirely closed in the evening ' +
      'through the season, so the car works from the Tallital or Mallital ends. Parking is the ' +
      'binding constraint in Nainital and in peak season entry to the town itself is sometimes ' +
      'capped. Kathgodam is 35 km down; Pantnagar airport 70 km.',
    vehicleFit:
      'An Ertiga or Innova for the Kathgodam descent and the Mukteshwar and Ranikhet ridge roads. A ' +
      'sedan works for lake-district running in dry weather and is easier to park, which in Nainital ' +
      'is a real advantage.',
    seasonNote:
      'April to June is the peak and the town genuinely fills — vehicle entry restrictions are ' +
      'applied on the heaviest weekends. September to November is better. School term boundaries and ' +
      'the Christmas week are the other concentrated periods.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  rishikesh: c('rishikesh', 'Rishikesh', '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg', {
    whoRentsMonthly:
      'Yoga schools, overwhelmingly. A 200-hour teacher training runs four weeks and the ashrams at ' +
      'Tapovan, Swarg Ashram and Lakshman Jhula run them back to back, each cohort needing airport ' +
      'and station transfers on fixed dates. Then rafting and adventure operators through the season, ' +
      'the wellness retreats, and film and content crews, of whom Rishikesh now gets a great many.',
    usagePattern:
      'Low distance, highly concentrated. Haridwar is 25 km, Shivpuri 16, Neelkanth 32, Dehradun 45. ' +
      'The runs that consume the allowance are Jolly Grant airport at 20 km — frequent rather than ' +
      'long — and Delhi at 240 km, which some schools do for group arrivals. A normal month is well ' +
      'inside 2,500 km unless Delhi runs are regular.',
    cityGeography:
      'The river splits the town and the two footbridges at Lakshman Jhula and Ram Jhula are ' +
      'pedestrian only, so the east bank at Swarg Ashram and Tapovan is reached by road the long way ' +
      'round or on foot. That single fact shapes every transfer here. Jolly Grant airport is 20 km ' +
      'and Haridwar station 25.',
    vehicleFit:
      'An Ertiga or Innova for group transfers, which is most of the work — a yoga cohort arriving ' +
      'together means luggage and numbers. A sedan suits individual retreat guests and the shorter ' +
      'airport runs.',
    seasonNote:
      'September to June, with March to May and September to November the heaviest for course ' +
      'intakes. Rafting closes through the monsoon. The Kanwar yatra in Shravan, usually late July ' +
      'into August, puts enormous pedestrian traffic on the Haridwar road and routes are diverted or ' +
      'closed for days — that is the fortnight to plan around.',
  }),
  // ───────────────────────────────────────────────────────────────────────
  ghaziabad: c('ghaziabad', 'Ghaziabad', '/images/sightseeing/Delhi/Delhi_hero_section.jpg', {
    whoRentsMonthly:
      'Corporate staff transport, which is what Ghaziabad monthly hire is mostly about. The ' +
      'industrial belt along the Hapur road and at Sahibabad and Site IV runs shifts, and a company ' +
      'holding a car for a month is usually moving managers between a plant here and an office in ' +
      'Noida or Delhi. Then the healthcare sector, the schools, and executives on NCR postings who ' +
      'want a driver rather than a Delhi commute at the wheel.',
    usagePattern:
      'This is the city on the list where 2,500 km is genuinely tight rather than generous. A daily ' +
      'Ghaziabad to Gurgaon run is 55 km each way — 110 km a day, 2,400 km in a working month before ' +
      'anything else. Ghaziabad to Noida is 25 km each way and far more comfortable. Work out the ' +
      'daily corridor first, because this is a commute hire rather than a touring one and the ' +
      'included kilometres decide whether the package fits.',
    cityGeography:
      'The Delhi-Meerut Expressway runs straight out toward Meerut and Haridwar, and the Eastern ' +
      'Peripheral reaches the Yamuna Expressway without entering Delhi — both of which make this a ' +
      'better base than its reputation. Indirapuram, Vaishali and Raj Nagar Extension are the ' +
      'residential pulls; Sahibabad and Site IV the industrial ones. IGI airport is 50 km and ' +
      'Hindon is 10.',
    vehicleFit:
      'A sedan for single-executive commuting, which is most of the demand and where the running ' +
      'cost matters. An Ertiga for shared staff transport or a family. The Innova for client-facing ' +
      'work and airport runs with luggage.',
    seasonNote:
      'Steady through the year, which is the point of a commute hire. Demand lifts October to March ' +
      'as the wedding and conference season adds to it. Delhi NCR air quality from late October ' +
      'through December brings the GRAP restrictions, which can affect which vehicles run on the ' +
      'worst days — worth knowing before a winter hire.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  faridabad: c('faridabad', 'Faridabad', '/images/sightseeing/Delhi/Delhi_hero_section.jpg', {
    whoRentsMonthly:
      'Manufacturing, more than any other city on this list. The Faridabad industrial belt along ' +
      'Mathura road and in the sectors south of it carries auto components, engineering and ' +
      'pharmaceuticals, and a plant hosting an audit, a commissioning team or a visiting client runs ' +
      'a car for weeks at a stretch. Alongside that: the hospitals, the schools, and executives ' +
      'posted to the NCR who commute north into Delhi or west to Gurgaon.',
    usagePattern:
      'A commute hire, and the corridor decides everything. Faridabad to Gurgaon is 30 km each way ' +
      'on the Faridabad-Gurgaon road, which fits inside 2,500 km comfortably. Faridabad to Noida is ' +
      '40 km each way and tighter. A plant posting that stays local — sector to sector plus the ' +
      'airport — uses a fraction of the package.',
    cityGeography:
      'Long and narrow along the Mathura road, with the industrial sectors to its east and the ' +
      'Aravalli ridge and Surajkund to its west. The Faridabad-Gurgaon road cuts through the ridge ' +
      'and is the single most useful link. IGI airport is 40 km north-west. The Yamuna Expressway is ' +
      'reachable toward Agra without crossing Delhi, which is the real positional advantage here.',
    vehicleFit:
      'A sedan for executive commuting. An Ertiga for shared transport and visiting teams. The ' +
      'Innova where client-facing work and airport pickups with luggage are the point, which in a ' +
      'manufacturing city is a frequent requirement.',
    seasonNote:
      'Even through the year. The Surajkund crafts mela in February makes the roads around south ' +
      'Faridabad heavy for about a fortnight. The winter GRAP restrictions on NCR air quality apply ' +
      'here as across the region and can affect which vehicles run on the worst days.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  mathura: c('mathura', 'Mathura', '/images/sightseeing/Mathura/mathura_hero_section.jpg', {
    whoRentsMonthly:
      'Temple and pilgrimage trusts running continuous group movement around the Braj circuit, who ' +
      'need a vehicle permanently available rather than booked per trip. Then the refinery and the ' +
      'industry around it on the Delhi road, which brings engineering and contractor postings, and ' +
      'the long-stay devotee community at Vrindavan, which is larger and more international than ' +
      'most visitors realise.',
    usagePattern:
      'The Braj circuit is dense and short: Vrindavan is 11 km, Gokul 15, Barsana 45, Nandgaon 50, ' +
      'Govardhan 25. A full circuit day is around 120 km. Daily temple work runs 40 to 70 km, so ' +
      '2,500 km a month is a workable allowance. It tightens only when Agra at 60 km or Delhi at ' +
      '150 km each way become regular runs.',
    cityGeography:
      'Vrindavan\'s temple lanes around Banke Bihari are not driveable and are closed to vehicles ' +
      'entirely at peak hours, so the car works from the parikrama marg and the rest is walked. The ' +
      'Yamuna Expressway runs past the city, putting Agra at an hour and Delhi at two and a half. ' +
      'Mathura Junction is a major railhead on the Delhi-Mumbai line.',
    vehicleFit:
      'A sedan is often the better choice here because of the Vrindavan lanes, where a smaller ' +
      'vehicle reaches closer. The Ertiga and Innova carry group and family pilgrimage work, which ' +
      'is the larger share of the demand.',
    seasonNote:
      'Holi in March is the single most concentrated week of the year and Barsana\'s Lathmar Holi ' +
      'draws very large crowds a few days before the main date. Janmashtami in August and Kartik ' +
      'month are the other peaks. During those windows the Vrindavan approach roads are closed to ' +
      'vehicles for long stretches of the day.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  ayodhya: c('ayodhya', 'Ayodhya', '/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg', {
    whoRentsMonthly:
      'Construction, infrastructure and hospitality, which is what a city building out at this pace ' +
      'generates — engineering and project teams on postings of months rather than weeks. Then the ' +
      'pilgrimage operators running continuous groups, media crews, and the new hotels holding a ' +
      'vehicle for guest transfers while the city\'s own transport catches up with demand.',
    usagePattern:
      'Local distances are very short — the temple complex, Hanuman Garhi, Kanak Bhawan and the ' +
      'Saryu ghats are all within a few kilometres of each other. Faizabad is 7 km. The runs that ' +
      'use the allowance are Lucknow at 135 km each way, which project teams do regularly, and the ' +
      'airport. Local-only work uses well under half the included kilometres.',
    cityGeography:
      'The temple complex involves security cordons and vehicle access is controlled and changes ' +
      'with the day and the expected crowd, so a driver who knows the current arrangement is worth ' +
      'more here than in most cities. The Saryu ghats are a short walk from the nearest vehicle ' +
      'point. Ayodhya Dham station and the new airport have both changed arrival patterns ' +
      'substantially.',
    vehicleFit:
      'An Ertiga or Innova for group and project work, which is most of the demand. A sedan for a ' +
      'single engineer or manager on a posting. The Innova is the usual choice for Lucknow runs ' +
      'given the distance and the luggage.',
    seasonNote:
      'Ram Navami in March or April and Deepotsav around Diwali are the two largest, and in both ' +
      'the city\'s vehicle and room capacity is fully committed well ahead. October to March is the ' +
      'general season. A monthly hire spanning either festival needs arranging early.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  amritsar: c('amritsar', 'Amritsar', '/images/sightseeing/Amritsar/Amristar_hero_section.jpg', {
    whoRentsMonthly:
      'The NRI and diaspora traffic, which is the distinctive demand here — families returning for ' +
      'extended visits take a car and driver for the whole stay rather than hiring per day, and the ' +
      'pattern is weeks not days. Then trade and logistics around the Attari border and the dry ' +
      'port, the hotels around the Golden Temple, the textile business, and the hospitals, which ' +
      'draw patients from a wide catchment.',
    usagePattern:
      'Mixed, and that is what makes it work. Local running is short — the Golden Temple, ' +
      'Jallianwala Bagh and the Partition Museum are walking distance from each other, and Wagah is ' +
      '28 km. But a diaspora visit means village and relative runs across Majha and Doaba, 60 to ' +
      '150 km a day, which is what consumes the 2,500 km. Work out the family itinerary before ' +
      'choosing the package.',
    cityGeography:
      'The walled city around the Golden Temple is pedestrianised on the Heritage Street approach, ' +
      'so the car drops at the plaza edge. Wagah is 28 km west on a good road and the ceremony ' +
      'timing is fixed by sunset. The airport is 11 km north-west. Jalandhar is 80 km and Chandigarh ' +
      '230 km on four-lane highway.',
    vehicleFit:
      'The Innova Crysta leads here because diaspora family travel means numbers and luggage, often ' +
      'both at once. An Ertiga for smaller groups. A sedan suits business and hospital visitors ' +
      'travelling alone.',
    seasonNote:
      'October to March, with Baisakhi in April and the Guru Nanak Gurpurab in November the two ' +
      'largest single events. The NRI season runs heavily from November through February and again ' +
      'in the summer school holidays, and those are the hardest windows in which to arrange a car at ' +
      'short notice.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  ajmer: c('ajmer', 'Ajmer', '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg', {
    whoRentsMonthly:
      'Pilgrimage operators working the Dargah and the Pushkar circuit continuously, and the ' +
      'hotels serving them. Then the education sector — Ajmer has long-standing boarding schools and ' +
      'coaching institutes that generate term-boundary movement — the marble and cement industry in ' +
      'the surrounding district, and government and railway postings, Ajmer being a divisional ' +
      'headquarters.',
    usagePattern:
      'Short local distances with occasional long runs. Pushkar is 15 km over the Nag Pahar, ' +
      'Kishangarh 27, Nasirabad 25. Daily work is 40 to 80 km. The allowance is used up by the ' +
      'Jaipur run at 135 km each way, which is frequent for business and institutional work, and by ' +
      'Jodhpur or Udaipur trips for touring hires.',
    cityGeography:
      'The Dargah approach in the old city is narrow and closed to vehicles near the entrance, so ' +
      'the car works from the Dargah Bazaar edge. Ana Sagar and the Adhai Din ka Jhonpra are short ' +
      'drives. Pushkar is 15 km over the hill on a road that is slower than the distance suggests. ' +
      'Kishangarh airport is 30 km and Ajmer Junction is central.',
    vehicleFit:
      'An Ertiga or Innova for pilgrimage group work and the Jaipur runs. A sedan for institutional ' +
      'and administrative postings and for anyone working mainly inside the city, where the narrower ' +
      'old-city approaches favour a smaller vehicle.',
    seasonNote:
      'The Urs at the Dargah, in the Islamic month of Rajab, is the single largest event and brings ' +
      'very large numbers — vehicles and rooms are committed weeks ahead and the old-city roads are ' +
      'closed for much of it. The Pushkar camel fair in November does the same thing 15 km away. ' +
      'October to March is otherwise the season.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  pushkar: c('pushkar', 'Pushkar', '/images/sightseeing/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg', {
    whoRentsMonthly:
      'Long-stay foreign visitors, which is the defining demand here — Pushkar holds people for ' +
      'weeks and months, and a car with a driver is how they see the rest of Rajasthan without ' +
      'moving base. Then the guesthouses and retreat businesses, the yoga and music schools, and the ' +
      'camel fair trade, which generates intense short-term vehicle demand each November.',
    usagePattern:
      'Unusual: almost no local driving at all. Pushkar is walked — the lake, the ghats and the ' +
      'bazaar are a compact pedestrian core and the car is for leaving town, not moving within it. ' +
      'So the whole 2,500 km tends to go on excursions: Ajmer at 15 km, Jaipur 145, Jodhpur 185, ' +
      'Udaipur 285. Two or three of those a month is the package.',
    cityGeography:
      'The lake and the fifty-two ghats are closed to vehicles and the bazaar lanes around them are ' +
      'walking-only, so the car parks at the edge of town. The Nag Pahar hill separates Pushkar from ' +
      'Ajmer, 15 km on a slower road than the distance implies. Kishangarh airport is 45 km, Ajmer ' +
      'Junction 15.',
    vehicleFit:
      'An Ertiga or Innova, because the demand here is excursion work over long Rajasthan distances ' +
      'rather than city running, and comfort over four to five hours is what matters. A sedan is ' +
      'fine for a single long-stay visitor making shorter trips.',
    seasonNote:
      'The camel fair around Kartik Purnima in November is the one fixed point, and it is absolute: ' +
      'rooms and vehicles across Pushkar and Ajmer are committed months ahead and the town is at ' +
      'capacity. October to March is the season otherwise, and the summer is very quiet.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  bikaner: c('bikaner', 'Bikaner', '/images/sightseeing/Bikaner/Bikaner_hero_section.jpg', {
    whoRentsMonthly:
      'Defence and border infrastructure, which is the largest and least visible share — Bikaner is ' +
      'a cantonment city and contractor and engineering postings here run for months. Then the solar ' +
      'sector, which has built substantially across this district and brings project teams, the food ' +
      'processing trade the city is known for, and the camel breeding and research establishment.',
    usagePattern:
      'Local running is modest — Junagarh, the Karni Mata temple at Deshnoke 30 km, the camel farm ' +
      '8 km, Gajner 32 km. A local month is well inside the allowance. Project work is what uses it: ' +
      'solar sites are spread across the district at 50 to 120 km out, and a daily site run of 150 ' +
      'km will exhaust 2,500 km in under three weeks.',
    cityGeography:
      'The old city inside the wall is narrow and the havelis of Rampuria are reached on foot. ' +
      'Junagarh sits on flat ground in the centre, unusually for a Rajasthan fort, with its own ' +
      'vehicle access. The district spreads a long way in every direction on straight desert road, ' +
      'which makes site work fast but long. Nal airport is 15 km.',
    vehicleFit:
      'An Ertiga or Innova for project and site work, where unmade approach roads and distance both ' +
      'argue against a sedan. A sedan suits administrative postings that stay on highway and in ' +
      'town.',
    seasonNote:
      'October to March. The camel festival in January is the main event and concentrates demand ' +
      'briefly. April to June is severe — this is deep desert and daytime temperatures pass 45 ' +
      'degrees, which affects site working hours more than vehicle availability.',
  }),

  // ───────────────────────────────────────────────────────────────────────
  'mount-abu': c('mount-abu', 'Mount Abu', '/images/sightseeing/Mount_Abu/mount_abu_hero_section.jpg', {
    whoRentsMonthly:
      'The Brahma Kumaris headquarters, which is the single largest source of long-stay visitors ' +
      'here and runs residential programmes continuously — a month-long course generates fixed-date ' +
      'transfer work for whole cohorts. Then the hotels, which in Rajasthan\'s only hill station run ' +
      'a long season, the boarding schools, and the Dilwara temple trust and pilgrimage operators.',
    usagePattern:
      'Almost all of the kilometres go on one road. Local running on the plateau is tiny — Dilwara ' +
      'is 3 km, Nakki Lake central, Guru Shikhar 15, Sunset Point 4 — but Abu Road, the railhead and ' +
      'the only way off the mountain, is 27 km of continuous hairpin descent that takes a full hour. ' +
      'Two station runs a day is 108 km, and that is what the package is really covering.',
    cityGeography:
      'The ghat is the defining fact: 27 km and an hour each way, well surfaced but relentless, and ' +
      'it decides every arrival and departure time. On the plateau everything is close together. ' +
      'Dilwara restricts non-worshipper visiting hours and forbids photography inside. Abu Road ' +
      'station is the railhead; Udaipur airport is 165 km.',
    vehicleFit:
      'An Ertiga or Innova, because the ghat is the main work and engine braking on a loaded descent ' +
      'is a real consideration. Passengers prone to travel sickness should sit forward. A sedan is ' +
      'workable but less comfortable on the climb.',
    seasonNote:
      'April to June is the peak, when Mount Abu is the cool option for all of Gujarat and ' +
      'Rajasthan, and the monsoon from July to September is the other — the hillside greens ' +
      'completely and it is arguably the best time to be here. Long weekends fill the town. ' +
      'Brahma Kumaris programme dates concentrate demand outside the normal tourist pattern.',
  }),
};

/** Resolve a city's monthly-rental record. */
export function getMonthlyRentalCity(slug) {
  return monthlyRentalCities[slug] || null;
}

/** Every built monthly-rental city slug. */
export function getAllMonthlyRentalSlugs() {
  return Object.keys(monthlyRentalCities);
}

/** The other cities, for the cross-link row. */
export function otherMonthlyRentalCities(currentSlug) {
  return Object.values(monthlyRentalCities)
    .filter((r) => r.slug !== currentSlug)
    .map((r) => ({ city: r.city, href: `/monthly-car-rental-${r.slug}` }))
    .sort((a, b) => a.city.localeCompare(b.city));
}

/**
 * The FAQ set for a city, built from that city's own researched fields.
 *
 * The questions are deliberately the standard ones, because those are what
 * people actually type. The answers are not: each is the city's own prose, so
 * two cities answering "does 2,500 km cover it" give genuinely different
 * answers — Ghaziabad's is about a commute corridor, Jaisalmer's about a desert
 * circuit eating a fifth of the month in one day.
 *
 * Built here rather than typed into each record so the prose has one home and
 * the FAQ markup cannot drift from the body copy above it.
 */
export function buildMonthlyFaqs(r, pkg = MONTHLY_PACKAGE) {
  if (!r) return [];
  const km = pkg.includedKm.toLocaleString('en-IN');
  const rate = (k) => {
    const v = pkg.vehicles.find((x) => x.key === k);
    return v ? `₹${v.monthly.toLocaleString('en-IN')}` : '';
  };

  const out = [
    {
      question: `How much does monthly car rental with a driver cost in ${r.city}?`,
      answer:
        `A sedan is ${rate('sedan')} a month in ${r.city}, an SUV ${rate('suv')} and an Innova ` +
        `Crysta ${rate('innova')}. Each covers 30 days with one dedicated vehicle and driver, ` +
        `${km} km and ${pkg.includedHoursPerDay} hours a day included, with fuel, the driver and ` +
        `GST in the rate. Kilometres and hours beyond those are charged at the published extra ` +
        `rate, and tolls, parking, state permits and the driver night allowance are at actuals.`,
    },
    r.usagePattern && {
      question: `Is ${km} km a month enough for ${r.city}?`,
      answer: r.usagePattern,
    },
    r.vehicleFit && {
      question: `Which vehicle should I take for a monthly rental in ${r.city}?`,
      answer: r.vehicleFit,
    },
    r.seasonNote && {
      question: `How far ahead should I book a monthly car in ${r.city}?`,
      answer: r.seasonNote,
    },
    r.whoRentsMonthly && {
      question: `Who uses monthly car rental in ${r.city}?`,
      answer: r.whoRentsMonthly,
    },
    r.cityGeography && {
      question: `Can the car reach everywhere in ${r.city}?`,
      answer: r.cityGeography,
    },
    {
      question: `Do I get the same driver for the whole month in ${r.city}?`,
      answer:
        `Yes. A monthly hire is one vehicle and one driver for the full 30 days rather than a ` +
        `rotating fleet, which is most of the reason people take a month rather than booking day ` +
        `by day — the driver learns the routes, the timings and the access arrangements in ` +
        `${r.city}. If the driver needs a rest day or falls ill we provide a replacement for ` +
        `that period and tell you in advance wherever possible.`,
    },
  ];
  return out.filter(Boolean);
}
