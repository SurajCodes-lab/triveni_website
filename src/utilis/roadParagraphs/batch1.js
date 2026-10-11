// Week 48, Workstream A3: road paragraphs, batch 1.
// One hand-written paragraph per corridor about the road itself. Facts are taken from
// distanceData.js, travelByCarData.js, tollCostData.js and oneWayCabData.js for the same
// slug, plus ordinary road geography. No fares, no toll amounts, no statistics.
// The index maps the reverse slug (e.g. dehradun-to-delhi) to the same entry.

export const roadParagraphs = {
  'delhi-to-dehradun': {
    origin: 'delhi',
    destination: 'dehradun',
    text: 'The Delhi to Dehradun road is the Delhi-Meerut Expressway out of the city, then NH-334 up through Muzaffarnagar and Roorkee, leaving the Haridwar road at Chhutmalpur for the last forest section into the Doon Valley. After Meerut it is flat sugarcane country where the pace is set by trucks and, from November through the winter, by tractors hauling cane to the mills. Cheetal Grand at Khatauli is the halt drivers plan around, with proper parking, clean washrooms and a full menu. The road only changes character after Roorkee, when the Shivaliks appear ahead and the highway enters the Mohand forest section along the Rajaji National Park boundary: a gentle ghat, well surfaced, with sal forest on both sides and elephant crossing signs. In December and January the plains between Meerut and Roorkee sit under thick fog until mid morning, so a five o\'clock start needs patience, and from July to September the Mohand bends are slippery under the trees. Dehradun is the floor of the valley; Mussoorie is another 35 km of proper hill road above it.',
  },

  'delhi-to-haridwar': {
    origin: 'delhi',
    destination: 'haridwar',
    text: 'Delhi to Haridwar is 230 km on the Delhi-Meerut Expressway and NH-334, nearly all of it plains driving. The first hour is the fast part, fourteen lanes to Meerut on a FASTag-only expressway. The Muzaffarnagar to Roorkee section is where the timing goes, because sugar mill trucks and cane tractors crawl in the slow lane through the crushing months from November to April. The Ganga canal runs beside the road near Roorkee and the first line of Shivalik hills shows soon after, which is how you know the town is close. The sensible halt is Cheetal Grand near Khatauli around the halfway mark; after that there is little until the tea stalls at the Roorkee IIT roundabout. Winter mornings here are foggy and cold, so if the point of the trip is the evening Ganga Aarti at Har Ki Pauri, leave Delhi after lunch rather than before dawn. In July the Kanwar Yatra fills the highway with pilgrims on foot and the police divert traffic. Parking near the ghats is not realistic; expect a designated lot and a walk.',
  },

  'delhi-to-chandigarh': {
    origin: 'delhi',
    destination: 'chandigarh',
    text: 'Delhi to Chandigarh is the old Grand Trunk Road, NH-44, and it is the easiest long drive out of the capital: four to six lanes, flat all the way, four to five hours in normal traffic. The first business of the day is breakfast at Murthal, about 40 km out, where the paratha dhabas are open before dawn. From there the road runs past the Panipat refinery and through Karnal, and the Panipat to Karnal section is the one that slows in office hours and again in the evening. Haveli at Karnal is the family halt with a play area and clean washrooms, and Puran Singh\'s dhaba near Ambala Cantt is the one drivers talk about for mutton curry. Past Ambala the Ambala-Chandigarh Expressway is a quick hour into the tri-city through Zirakpur. Winter is the season to respect: December and January bring dense fog to the Haryana plains between Panipat and Ambala, sometimes until ten in the morning, and the fast lane becomes a bad idea. Friday evenings crawl with weekend traffic bound for Shimla and Manali.',
  },

  'delhi-to-lucknow': {
    origin: 'delhi',
    destination: 'lucknow',
    text: 'Delhi to Lucknow is 550 km almost entirely on two expressways, the Yamuna Expressway from Greater Noida past Mathura to Agra, then the Agra-Lucknow Expressway across the middle of Uttar Pradesh. You do not enter Agra; the road bypasses the city and picks up the second expressway on the far side, then it is a long, straight, quiet run past Firozabad, Etawah and Kannauj. Village dhabas are not on this road because the expressway is fenced, so the halts are the rest areas with food courts every 50 km; Kannauj is a fair place to break the second half, and Unnao means Lucknow is near. Summer is hard on tyres: the concrete of the Yamuna Expressway runs very hot in May and June, and drivers check pressures and keep speeds sensible. From December into January the corridor from Mathura to Kannauj sits in fog, and the road that feels effortless at noon becomes a slow headlight crawl at dawn. Night driving is well lit and patrolled, which is why many cars leave Delhi late and reach Lucknow for breakfast.',
  },

  'delhi-to-rishikesh': {
    origin: 'delhi',
    destination: 'rishikesh',
    text: 'Delhi to Rishikesh shares its first 225 km with the Haridwar road, the Delhi-Meerut Expressway to Meerut and NH-334 through Muzaffarnagar and Roorkee, so the plains part is familiar: sugarcane fields, canal crossings, a lunch stop at Cheetal Grand or a quick tea at Roorkee. What makes this journey its own is the last 25 km. The road swings round Haridwar on the bypass, passes through the Rajaji forest belt near Raiwala where elephant crossings are signposted, and comes down to the Ganga with the rafting camps strung along the far bank. The river sets the calendar: October and November are the busiest rafting weeks, and everything on the water is suspended in July and August when the Ganga is in spate, so the road stays open but the riverside camps are best avoided. Winter is mild in Rishikesh, with cool evenings for the Aarti at Triveni Ghat or Parmarth Niketan. Do not take the car into the old town; the lanes around Laxman Jhula are too narrow, so drivers stop at Tapovan and the last bit is on foot.',
  },
};

export default roadParagraphs;
