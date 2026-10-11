// src/utilis/weddingCityLocal.js
//
// Per-city wedding-transport facts for the nineteen wedding city pages.
//
// WHY THIS FILE EXISTS
// --------------------
// Measured in Week 53 across every page family: the wedding city pages sit at
// 76.5% median overlap with one another and **10.9% unique share** — the share
// of a page's text that appears on no sibling. Nineteen pages, one tenth of each
// about its own city.
//
// This is the family that matters most for that to be true of, for two reasons.
//
// It is the best-converting family on the site: 5.58% click-through across 33
// wedding searches against a 0.60% site average, and a city page that reaches
// the top five returns between 8% and 10.64% — Ayodhya at position 5.1 earns
// 10.64%, Lucknow at 6.4 earns 8.35%.
//
// And nine more cities are due in the build programme. Building those at 10.9%
// unique would add nine pages that cannot be told from the twenty-two already
// here, which is the opposite of the point.
//
// WHAT THIS IS NOT
// ----------------
// Not a predicted ranking gain. The same Week 53 measurement found that unique
// share does **not** predict position on this site: every wedding city page has
// the same 10.9% share, and they range from position 5.1 to 42.3. Ayodhya and
// Haridwar rank in the top six on exactly the template Delhi ranks 42nd on. So
// a low share plainly does not prevent a top-five position here, and nothing in
// this file should be read as expecting one.
//
// What it does is give each page something of its own to be useful for. A couple
// comparing suppliers in Udaipur and a couple comparing suppliers in Shimla are
// asking different questions, and until now both got the same page.
//
// WHY THESE FIVE FACTS
// --------------------
// The things that genuinely differ by city for a wedding booking, and that an
// operator knows and a directory does not:
//
//   seasonWindow  — when weddings actually happen there. This is not uniform
//                   across North India: Rajasthan runs October to March because
//                   summer is impossible, the hill stations run the opposite way
//                   because winter closes roads, and the temple cities follow
//                   auspicious dates instead of weather.
//   venueGeography— where venues cluster and what that means for travel time.
//                   A farmhouse belt on a city's periphery is a different
//                   booking from a palace in its centre.
//   baraatNote    — the procession reality. A baraat moves at walking pace, and
//                   in a walled city the lanes decide what can take part at all.
//                   This is the single most city-specific fact in wedding
//                   transport and it is almost never published.
//   guestArrival  — how out-of-town guests get there, which is the whole job on
//                   a destination wedding.
//   vehicleFit    — which cars actually work at that city's venues. A vintage
//                   car cannot do a narrow-lane procession and a large SUV
//                   cannot enter some heritage courtyards.
//
// No venue is claimed as a client and no price is stated here — the rate tables
// already on the page are the source for those.

export const weddingCityLocal = {
  delhi: {
    seasonWindow:
      'Two clear peaks. November to early December, and then late January through February, with ' +
      'the November to December window carrying the heaviest single-day concentration of the year. ' +
      'Book six to eight weeks out for those dates; on the biggest auspicious days the whole city ' +
      'fleet is committed.',
    venueGeography:
      'Venues are spread across three very different belts. The farmhouse belt on the southern and ' +
      'western periphery — Chhatarpur, Mehrauli, Rajokri, Najafgarh — carries the large weddings ' +
      'and sits 45 to 90 minutes from most of the city. Hotel and banquet venues in central and ' +
      'south Delhi are short transfers but constrained for parking. And a growing share of Delhi ' +
      'weddings are actually held in Gurgaon or Noida, which changes the journey into a cross-state ' +
      'one.',
    baraatNote:
      'A Delhi baraat is usually a short, contained procession at the venue approach rather than a ' +
      'road-length one, because the farmhouse belt roads are not closable. The practical planning ' +
      'point is the opposite of a procession problem: the car waits a long time. Allow for three to ' +
      'five hours of standing time between the arrival and the departure, which is a driver-hours ' +
      'question rather than a distance one.',
    guestArrival:
      'Indira Gandhi International serves all three terminals and most guests arrive by air. Allow ' +
      '60 to 90 minutes from the airport to the southern farmhouse belt in evening traffic — the ' +
      'journey is short in kilometres and long in minutes. New Delhi and Hazrat Nizamuddin stations ' +
      'carry the rest.',
    vehicleFit:
      'Everything works here. The farmhouse approaches take full-size luxury sedans and vintage ' +
      'cars comfortably, and the wide southern roads suit an open-top arrival. The constraint is ' +
      'parking at central hotel venues rather than access.',
  },

  jaipur: {
    seasonWindow:
      'October to March, and genuinely not outside it — Jaipur is a destination-wedding city and ' +
      'the summer heat rules out April to June for an outdoor ceremony. The peak inside that window ' +
      'is November to February, when palace and heritage venues are committed months ahead.',
    venueGeography:
      'Three distinct kinds. The heritage and palace venues in and around the old city and on the ' +
      'Amer road, which are the reason people come to Jaipur to marry. The resort belt on the Delhi ' +
      'and Ajmer highways, 30 to 60 minutes out. And conventional hotel venues along Tonk Road and ' +
      'in C-Scheme. A single wedding frequently uses two of the three, so the transport plan is a ' +
      'shuttle plan rather than a single transfer.',
    baraatNote:
      'This is where Jaipur differs sharply from Delhi. A procession through the walled city moves ' +
      'at walking pace through lanes that were not built for a full-size car, and the Amer approach ' +
      'is narrow and steep in places. The vehicle has to be chosen for the route rather than the ' +
      'photograph — and the route has to be walked before the day, not assumed from a map.',
    guestArrival:
      'Jaipur International at Sanganer is 20 to 30 minutes from most venues, which makes it one of ' +
      'the easiest destination-wedding cities in the country for guest logistics. Many guests also ' +
      'drive from Delhi on the expressway, which is five to six hours and reliable.',
    vehicleFit:
      'Resort and hotel venues take anything. For a heritage or walled-city venue, a vintage car ' +
      'and a mid-size sedan are the safe choices and a large SUV often is not — gateway heights and ' +
      'courtyard turning circles at older properties are real limits, and they are the thing most ' +
      'often discovered on the day.',
  },

  udaipur: {
    seasonWindow:
      'October to March, with the heaviest concentration from late November to February. Udaipur is ' +
      'the most seasonal wedding city on this list: outside that window the lake venues are not ' +
      'what people are booking them for, and the summer is severe.',
    venueGeography:
      'The lake palaces and lakeside properties are the draw and they are the hardest logistics on ' +
      'this list, because access to some is partly by boat and the road approach is through ' +
      'constrained old-city streets. The resort belt toward the airport and on the Nathdwara road ' +
      'is 30 to 60 minutes out and much simpler. Most Udaipur weddings use both, which means a ' +
      'planned shuttle between them.',
    baraatNote:
      'A procession on the lakeside approach is slow and tight, and in parts the car simply cannot ' +
      'follow the route the party takes. The honest plan separates the two: the procession on foot ' +
      'where the lanes demand it, and the cars positioned at the nearest point a vehicle can ' +
      'reach, rather than promising a car at a doorway it cannot get to.',
    guestArrival:
      'Maharana Pratap Airport at Dabok is 30 to 45 minutes from the city and most destination ' +
      'guests arrive there. The road from Jaipur is six to seven hours and from Ahmedabad about ' +
      'five, so a share of guests drive in and need a vehicle for the whole stay rather than a ' +
      'transfer.',
    vehicleFit:
      'Mid-size sedans for anything with an old-city approach, and a vintage car only after the ' +
      'specific route has been checked. The resort belt takes full-size luxury vehicles and buses ' +
      'for guest movement without difficulty.',
  },

  jodhpur: {
    seasonWindow:
      'October to March. The desert makes the summer unworkable for an outdoor ceremony, and the ' +
      'peak is November to February.',
    venueGeography:
      'The fort and heritage properties dominate and they sit above and around the old city, which ' +
      'means a climbing, narrowing approach. The resort and hotel belt is on the Jaipur road and ' +
      'toward the airport, and the newer venues on the city periphery are the simplest to serve.',
    baraatNote:
      'The old-city lanes beneath the fort are among the tightest of any wedding city here. A ' +
      'full-size car cannot complete some of these approaches, and the gradient matters as much as ' +
      'the width — a loaded vehicle on a steep narrow turn is a different proposition from the same ' +
      'turn empty. Routes are checked in advance as a matter of course.',
    guestArrival:
      'Jodhpur Airport is close to the city, 15 to 25 minutes from most venues. Jodhpur Junction ' +
      'carries guests arriving by rail, and the road from Jaipur is five to six hours.',
    vehicleFit:
      'Mid-size for the heritage approaches, full-size for the resort belt. Where a couple wants a ' +
      'vintage car at a fort venue, the practical answer is usually to position it at the last ' +
      'point it can reach and walk the remainder, which is worth agreeing before the day rather ' +
      'than discovering on it.',
  },

  jaisalmer: {
    seasonWindow:
      'November to February, and narrower than the rest of Rajasthan. The desert is severe either ' +
      'side of that, and a desert-camp wedding outside the window is not what it is being booked ' +
      'for.',
    venueGeography:
      'Two kinds and they could not be more different. The haveli and fort properties inside and ' +
      'beneath the golden fort, reached through genuinely medieval lanes. And the desert camps and ' +
      'resorts out toward Sam and Khuri, 30 to 50 minutes on open road and then sand track.',
    baraatNote:
      'Inside the fort the lanes are the constraint absolutely — much of it is not vehicle-accessible ' +
      'at all, and the plan has to say where the car stops rather than pretend otherwise. At a ' +
      'desert camp the opposite problem applies: the last stretch is sand, which decides the vehicle ' +
      'rather than the aesthetics do.',
    guestArrival:
      'Jaisalmer Airport has limited scheduled service, so most guests arrive by train — the ' +
      'overnight from Jodhpur and Delhi is the common route — or drive the five to six hours from ' +
      'Jodhpur. This is the city on this list where planning on air travel is most likely to be ' +
      'the wrong assumption.',
    vehicleFit:
      'The desert stretches want a high-clearance SUV, not a luxury sedan, and that is a safety ' +
      'point rather than a preference. For fort-area venues, the smallest vehicle that suits the ' +
      'occasion is the right one.',
  },

  agra: {
    seasonWindow:
      'November to February for comfort, with a secondary window in October and early March. The ' +
      'summer is severe and the monsoon unreliable for an outdoor ceremony.',
    venueGeography:
      'Hotel and banquet venues cluster along Fatehabad Road and the Taj East Gate side, which is ' +
      'also where out-of-town guests stay, so transfers are short. The farmhouse and resort venues ' +
      'sit on the city periphery and the Yamuna Expressway side, 30 to 45 minutes out. Sanjay Place ' +
      'and the central area carry the smaller banquet halls.',
    baraatNote:
      'Processions near the monument belt run into the traffic and parking restrictions around the ' +
      'Taj, which are not negotiable and change with visitor hours. A baraat routed through that ' +
      'area without planning will stop. The practical approach is to route around the restricted ' +
      'zone entirely rather than time it.',
    guestArrival:
      'Most guests arrive by road from Delhi on the Yamuna Expressway — three to four hours and ' +
      'reliable — or by train to Agra Cantt, which is well served. Agra airport has limited ' +
      'scheduled service and is usually the wrong plan. A large share of Agra weddings therefore ' +
      'need Delhi-to-Agra guest transport as part of the booking rather than only local cars.',
    vehicleFit:
      'Full-size and vintage cars work at the Fatehabad Road and periphery venues. The central ' +
      'banquet halls are the constrained ones, for parking rather than access.',
  },

  chandigarh: {
    seasonWindow:
      'November to early December and then February to March. The Chandigarh winter is cold enough ' +
      'that January outdoor ceremonies are uncommon, which makes the window narrower at that end ' +
      'than Delhi.',
    venueGeography:
      'Unusually straightforward, because the city is planned. Banquet and hotel venues sit in the ' +
      'numbered sectors with real parking, and the resort and farmhouse venues are on the ' +
      'Zirakpur, Kharar and Panchkula roads, 20 to 40 minutes out. Many Chandigarh weddings are ' +
      'actually held in Mohali or Panchkula, which puts a boundary crossing in the middle of the day.',
    baraatNote:
      'The sector road grid makes a procession genuinely easy here — wide roads, roundabouts rather ' +
      'than junctions, and venues with their own approaches. This is the least constrained city on ' +
      'this list for a baraat. What does need planning is the tricity boundary: a Panchkula-to-Mohali ' +
      'movement crosses two jurisdictions, and vehicle documentation has to be right for all three.',
    guestArrival:
      'Chandigarh International is 30 to 45 minutes from the sectors and access is from the Mohali ' +
      'side, which matters when collecting guests staying in Panchkula. Chandigarh Junction serves ' +
      'rail arrivals, and the road from Delhi is four to five hours.',
    vehicleFit:
      'No real constraints. The grid and the venue approaches take full-size luxury cars, vintage ' +
      'cars and buses for guest movement equally well.',
  },

  amritsar: {
    seasonWindow:
      'November to early December and February to March, with a notable concentration around the ' +
      'post-harvest months when families traditionally marry. January is cold and foggy enough that ' +
      'outdoor ceremonies and night driving both suffer.',
    venueGeography:
      'The marriage-palace belt on the Batala, Majitha and airport roads carries the large weddings ' +
      'and sits 20 to 40 minutes out from the centre. Hotel venues cluster near the Golden Temple ' +
      'and the Ranjit Avenue side, where guests also stay.',
    baraatNote:
      'Amritsar baraats are among the largest and longest of any city here, with a substantial ' +
      'procession on foot ahead of the vehicles. The planning consequence is standing time rather ' +
      'than routing: the cars move at a crawl for a long stretch and then wait. The marriage-palace ' +
      'approaches are wide and this is not an access problem.',
    guestArrival:
      'Sri Guru Ram Dass Jee International is 20 to 30 minutes from most venues. Amritsar Junction ' +
      'is central and heavily used, and the road from Delhi is seven to eight hours, so guests ' +
      'driving in usually need a vehicle for the stay.',
    vehicleFit:
      'Full-size and vintage cars suit the marriage-palace venues well. December and January fog is ' +
      'the genuine operational risk here, and it affects timing and night driving rather than ' +
      'vehicle choice.',
  },

  lucknow: {
    seasonWindow:
      'November to February, with the heaviest weeks in late November and December. The city has a ' +
      'long and distinct wedding tradition and the auspicious-date concentration is sharp — a single ' +
      'date can commit most of the city fleet.',
    venueGeography:
      'The banquet and lawn venues along the Shaheed Path, Sultanpur Road and the Gomti Nagar ' +
      'periphery carry the large weddings and are 20 to 40 minutes from the centre. Hotel venues in ' +
      'Gomti Nagar and Hazratganj are short transfers. The older city venues around Chowk and ' +
      'Aminabad are the constrained ones.',
    baraatNote:
      'The Shaheed Path belt venues are easy, with wide approaches and their own grounds. Processions ' +
      'in the old city around Chowk and Aminabad are the opposite and the lanes decide what can take ' +
      'part. As a state capital, Lucknow also has routine and unannounced road closures for VIP ' +
      'movement, which is the thing most likely to disrupt a tightly timed wedding day here.',
    guestArrival:
      'Chaudhary Charan Singh International at Amausi is 30 to 45 minutes from Gomti Nagar and 20 to ' +
      '30 from the centre; the Shaheed Path route avoids the city entirely and is the reliable one. ' +
      'Lucknow Charbagh is central and well connected.',
    vehicleFit:
      'Full-size and vintage cars for the Shaheed Path and Gomti Nagar venues. Mid-size for anything ' +
      'with an old-city approach.',
  },

  varanasi: {
    seasonWindow:
      'November to February. Varanasi weddings follow auspicious dates closely rather than weather, ' +
      'so the concentration on particular days is sharper here than almost anywhere, and the city ' +
      'fleet commits early on those dates.',
    venueGeography:
      'Hotel and banquet venues on the Cantt side, the Sarnath road and the city periphery carry most ' +
      'weddings and have workable approaches. Venues near the ghats and in the old city are a ' +
      'different proposition entirely, and a share of ceremonies take place at the ghats themselves, ' +
      'which no vehicle reaches.',
    baraatNote:
      'The old city and the ghat approaches are not vehicle-accessible in any meaningful sense — the ' +
      'lanes are genuinely medieval and much of the area is walking-only. For a ghat ceremony the ' +
      'honest plan says where the car stops and how far the walk is, rather than implying a doorway ' +
      'drop. Festival and bathing days add closures that have nothing to do with the wedding ' +
      'calendar and have to be checked against it.',
    guestArrival:
      'Lal Bahadur Shastri International at Babatpur is 45 to 60 minutes from the city, longer to ' +
      'the ghat side. Varanasi Junction and Banaras stations are both heavily used and central.',
    vehicleFit:
      'Full-size cars for the Cantt and periphery venues. For anything near the ghats the smallest ' +
      'suitable vehicle, and the expectation set in advance that the last stretch is on foot.',
  },

  ayodhya: {
    seasonWindow:
      'November to February, driven by auspicious dates rather than weather. Demand has risen sharply ' +
      'with the city’s profile, and the temple-adjacent venues commit furthest ahead.',
    venueGeography:
      'Venues cluster around the Ram Mandir complex and the Naya Ghat side, with the newer hotel and ' +
      'banquet properties on the Faizabad road, 20 to 30 minutes out. Faizabad itself carries a share ' +
      'of the larger venues.',
    baraatNote:
      'The temple precinct carries pilgrim crowds and vehicle restrictions that vary by day and by ' +
      'festival, and they take precedence over a wedding timetable. A procession routed close to the ' +
      'complex needs the day’s restrictions checked rather than assumed, and the Faizabad road ' +
      'venues are considerably simpler to serve for exactly this reason.',
    guestArrival:
      'Most guests route through Lucknow — airport transfers of two to three hours are the common ' +
      'pattern, and that leg is usually the larger part of the transport booking. Ayodhya Dham ' +
      'Junction serves rail arrivals and Ayodhya airport is coming into fuller service.',
    vehicleFit:
      'Full-size and decorated cars at the Faizabad road venues. Mid-size for anything inside the ' +
      'temple-adjacent streets, where crowd density matters more than lane width.',
  },

  mathura: {
    seasonWindow:
      'November to February, with the calendar shaped by the Braj festival cycle as much as by ' +
      'weather. Holi in particular makes a two-week period around it impractical for a wedding, ' +
      'and that is worth planning around rather than discovering.',
    venueGeography:
      'Banquet and hotel venues on the Delhi–Agra highway side and the city periphery are the ' +
      'practical ones. Venues in the temple areas of Mathura and Vrindavan are constrained, and a ' +
      'share of ceremonies are held at temple premises where vehicle access stops well short.',
    baraatNote:
      'Vrindavan’s temple lanes are narrow and crowded, and during festival periods they are ' +
      'impassable. A procession there is a walking procession with the cars positioned outside, and ' +
      'saying so in advance is the difference between a plan and a disappointment.',
    guestArrival:
      'Most guests come by road from Delhi — two to three hours on the Yamuna Expressway — or by ' +
      'train to Mathura Junction. The nearest airports are Delhi and Agra, which makes the Delhi ' +
      'guest-transport leg part of most bookings.',
    vehicleFit:
      'Full-size cars on the highway-side venues. Mid-size or smaller for anything in the temple ' +
      'areas, where the practical limit is crowd density rather than road width.',
  },

  haridwar: {
    seasonWindow:
      'November to February for comfort, with auspicious dates driving the concentration. The yatra ' +
      'and Kanwar seasons are the critical thing to plan around: the Kanwar Yatra closes and diverts ' +
      'major routes for weeks, and a wedding scheduled into that window will have its transport ' +
      'rerouted whether or not anyone planned for it.',
    venueGeography:
      'Hotel and banquet venues on the Delhi–Dehradun highway side and around Jwalapur and Ranipur ' +
      'are the workable ones. Venues close to Har Ki Pauri and the ghats are constrained, and ' +
      'ceremonies held at the ghats themselves are reached on foot.',
    baraatNote:
      'The ghat area is pedestrian in practice, and on festival and bathing days the whole approach ' +
      'is closed to vehicles. The Kanwar Yatra period is the defining operational fact: for several ' +
      'weeks the highway corridor carries pilgrim traffic at walking pace, and ordinary journey times ' +
      'do not apply at all.',
    guestArrival:
      'Jolly Grant at Dehradun is 60 to 75 minutes away. Haridwar Junction is central and very well ' +
      'connected from Delhi, and rail is often the better recommendation for guests. The road from ' +
      'Delhi is four to five hours on a normal day and considerably more in the yatra season.',
    vehicleFit:
      'Full-size cars at the highway-side venues. For anything near the ghats, the smallest suitable ' +
      'vehicle and an agreed stopping point.',
  },

  rishikesh: {
    seasonWindow:
      'October to March for a conventional wedding, with February and March the most popular. ' +
      'Rishikesh has also become a destination for smaller riverside and resort weddings, which run ' +
      'on a different and wider calendar — though the monsoon months are genuinely unsuitable.',
    venueGeography:
      'Riverside resorts along the Ganga on the Badrinath road and the Shivpuri side carry the ' +
      'destination weddings and sit 20 to 45 minutes from the town. Hotel venues in the town and at ' +
      'Tapovan are closer. The ashram and temple areas are a different kind of venue with their own ' +
      'access limits.',
    baraatNote:
      'The riverside resort approaches are narrow, winding and in places single-track, which decides ' +
      'both the vehicle and the convoy size. A long line of cars does not work on those roads, and ' +
      'guest movement is better planned as staged shuttles than as a procession. Town-centre lanes ' +
      'around the bridges are pedestrian in practice.',
    guestArrival:
      'Jolly Grant is 35 to 45 minutes away, which is close by destination-wedding standards. Haridwar ' +
      'Junction, 20 km away, is the rail option and is better connected than Rishikesh’s own ' +
      'station. The road from Delhi is five to six hours.',
    vehicleFit:
      'Mid-size vehicles for the riverside approaches, and a large SUV or bus only where the specific ' +
      'resort road has been checked. A vintage car is usually impractical on these gradients and it ' +
      'is better to say so than to attempt it.',
  },

  dehradun: {
    seasonWindow:
      'October to March, with November to December and February to March the peaks. The valley ' +
      'climate makes this a comfortable wedding city across a wider window than the plains.',
    venueGeography:
      'Banquet and resort venues along Rajpur Road toward Mussoorie, and on the Haridwar and Chakrata ' +
      'roads, carry most weddings and are 15 to 40 minutes from the centre. The newer venues on the ' +
      'city periphery have the best approaches. A share of Dehradun weddings move up to Mussoorie, ' +
      'which turns the day into a hill journey.',
    baraatNote:
      'City venues are straightforward with wide approaches. The Rajpur Road and Mussoorie-side ' +
      'venues introduce gradient, and a procession climbing a hill road is slower and more ' +
      'constrained than the same distance flat. Where the venue is up toward Mussoorie, the journey ' +
      'rather than the procession is the planning problem.',
    guestArrival:
      'Jolly Grant is 45 to 60 minutes from the city. Dehradun station is central and well connected ' +
      'from Delhi, and the road is five to six hours.',
    vehicleFit:
      'Full-size and vintage cars for city venues. For anything on the Mussoorie road, a vehicle and ' +
      'a driver used to the gradient — this is a hill route rather than a city transfer, and the ' +
      'difference shows on the day.',
  },

  mussoorie: {
    seasonWindow:
      'April to June and September to October — the opposite of the plains. This is the fact most ' +
      'often got wrong about hill weddings: the winter months that suit Delhi are when Mussoorie is ' +
      'cold, and snow genuinely closes approaches in January and February.',
    venueGeography:
      'Hotel and resort venues along the Mall road, Library and Landour sides, and on the Kempty ' +
      'Falls road. Almost all of them are on a gradient with a narrow approach, and several have no ' +
      'vehicle access at the door at all.',
    baraatNote:
      'Mussoorie is the most access-constrained wedding city on this list. The Mall road is ' +
      'pedestrian for much of its length and much of the town cannot take a convoy. A procession here ' +
      'is short and on foot, with vehicles positioned at the nearest accessible point, and the ' +
      'planning conversation has to start with where that point is for the specific venue.',
    guestArrival:
      'Jolly Grant is two to two and a half hours away, and the last stretch is a hill climb. ' +
      'Dehradun is the practical staging point for guests, and most Mussoorie wedding transport is ' +
      'actually Dehradun-to-Mussoorie shuttling rather than local movement.',
    vehicleFit:
      'Mid-size vehicles with a driver who runs these gradients regularly. A large SUV is a liability ' +
      'on some of these turns rather than an upgrade, and a vintage car is not realistic. Where a ' +
      'couple wants one for photographs, it is positioned rather than driven in procession.',
  },

  shimla: {
    seasonWindow:
      'April to June and September to October, as with all the hill stations. December and January ' +
      'bring snow that closes roads with little notice, and a wedding scheduled then carries a real ' +
      'risk of guests not arriving at all.',
    venueGeography:
      'Hotel and resort venues around the Mall and Ridge, on the Kufri and Mashobra roads, and down ' +
      'toward Shoghi and Naldehra. The Mall and Ridge area is pedestrian, so central venues are ' +
      'reached on foot from a vehicle point. The Mashobra and Naldehra properties have their own ' +
      'approaches and are easier.',
    baraatNote:
      'The Ridge and Mall are closed to vehicles, which settles it for central venues: the procession ' +
      'is on foot and the cars wait below. For the Mashobra and Naldehra side, the approaches are ' +
      'narrow and winding and convoy size is the constraint. Either way this is not a road-length ' +
      'procession city.',
    guestArrival:
      'Shimla airport at Jubbarhatti has limited service, so most guests arrive via Chandigarh — ' +
      'three to four hours by road and the stretch above Solan is slow. Kalka is the rail railhead ' +
      'and the toy train is scenic rather than practical for a wedding party.',
    vehicleFit:
      'Mid-size vehicles and experienced hill drivers. Guest movement is better in several smaller ' +
      'vehicles than one large one, because the turns decide it. Vintage cars are not practical here.',
  },

  manali: {
    seasonWindow:
      'April to June and September to October. Winter weddings are possible at valley-floor venues ' +
      'but snow closes the higher approaches and the Rohtang side entirely, and the monsoon brings ' +
      'genuine landslide risk on the approach road.',
    venueGeography:
      'Resort and hotel venues along the valley on the Naggar and Solang roads, and in Old Manali. ' +
      'The valley-floor properties have workable approaches; the Old Manali and higher venues are ' +
      'narrow, steep and in places single-track.',
    baraatNote:
      'A procession on a single-track valley road blocks it, which is a practical and a courtesy ' +
      'problem at once. Staged arrivals work; a convoy does not. Old Manali’s lanes are ' +
      'walking-only in effect.',
    guestArrival:
      'Bhuntar airport at Kullu is 45 to 60 minutes away with limited and weather-dependent service, ' +
      'so most guests come by road from Chandigarh — eight to ten hours — or Delhi, twelve to ' +
      'fourteen. Guest transport is therefore the dominant part of a Manali wedding booking, and it ' +
      'is a long-haul planning problem rather than a local one.',
    vehicleFit:
      'High-clearance mid-size vehicles with hill-experienced drivers. The approach road condition ' +
      'varies by season and that decides the vehicle, not the venue brochure.',
  },

  nainital: {
    seasonWindow:
      'April to June and September to October. The winter is cold and the approaches ice in places; ' +
      'the monsoon brings landslide risk on the hill road from Kathgodam.',
    venueGeography:
      'Hotel and resort venues around the lake and on the Mallital and Tallital sides, plus ' +
      'properties out toward Bhimtal, Sattal and Mukteshwar, which are 30 minutes to an hour and a ' +
      'half away. The lakeside road is congested and partly restricted in season.',
    baraatNote:
      'The lakeside road is narrow and busy, and in the tourist season it is slow at best. Central ' +
      'venues are reached on foot from a vehicle point, and the Bhimtal and Sattal properties are ' +
      'considerably easier to serve. A procession around the lake is not realistic in season.',
    guestArrival:
      'Kathgodam is the railhead, an hour to an hour and a half below the town, and the hill climb ' +
      'from there is the journey that matters. Pantnagar airport has limited service; most guests ' +
      'route through Delhi, six to seven hours by road.',
    vehicleFit:
      'Mid-size vehicles and hill-experienced drivers. Several smaller vehicles move a guest party ' +
      'around Nainital far better than one large one, because the lakeside road and the venue ' +
      'approaches both constrain size.',
  },
};

/** Local wedding facts for a city, or null when the city has none recorded. */
export function getWeddingCityLocal(slug) {
  if (!slug) return null;
  const entry = weddingCityLocal[String(slug).toLowerCase()];
  return entry || null;
}

export default weddingCityLocal;
