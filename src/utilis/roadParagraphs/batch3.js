// Week 48, Workstream A3: road paragraphs, batch 3.
// One human-written paragraph per corridor, shown on the booking page, the
// distance guide and the one-way page for that journey. The index maps the
// reverse direction to the same entry. No fares, no toll amounts, no statistics.

export const roadParagraphs = {
  'delhi-to-mathura': {
    origin: 'delhi',
    destination: 'mathura',
    text:
      'Delhi to Mathura is a Yamuna Expressway job from the first kilometre: out through Noida, past Pari Chowk at Greater Noida, and then a dead-straight run with nothing to do but hold the lane. The Jewar plaza is the only toll gate before the Mathura exit, and the food plaza in the middle section is where our drivers pull in for a chai and a clean washroom, because there is no dhaba culture on this road the way there is on the GT Road. The expressway rewards discipline. It is smooth enough to tempt a heavy foot, and in December and January the morning fog sits on the flat Yamuna floodplain so thick that we hold a steady, slow speed with the hazard lamps on until it lifts around ten. Take the Mathura exit rather than running on towards Agra, and be ready for narrow, crowded lanes into the Janmabhoomi area. In the week of Holi, and again around Janmashtami, the last five kilometres take longer than the whole expressway.',
  },

  'lucknow-to-ayodhya': {
    origin: 'lucknow',
    destination: 'ayodhya',
    text:
      'Out of Lucknow the road to Ayodhya is NH-27, the Gorakhpur highway, leaving the city through Chinhat and settling into four flat lanes through Awadh farmland. Barabanki comes up after half an hour and is the one sensible halt, with a dhaba row for breakfast, because after it the highway runs straight through Rudauli to Faizabad. There is no climb and no ghat on this run, so the only things that slow it are the tractor trolleys that pull out from the fields onto the shoulder, and the winter fog that hangs over the low Saryu country in December and January and cuts visibility to a few car lengths till mid morning. From Faizabad into Ayodhya the road is new and wide, but the last stretch to the Ram Mandir is under constant rework and the diversions change with the crowds; on Ram Navami and during Deepotsav we plan for the town to take as long as the highway did. In the monsoon the Saryu comes up and the low ghat roads can flood, though the highway stays clear.',
  },

  'lucknow-to-varanasi': {
    origin: 'lucknow',
    destination: 'varanasi',
    text:
      'There are two roads from Lucknow to Varanasi and the choice is the whole story. The Purvanchal Expressway is the quick one: you join it on the east side of the city and it runs across the flat Gangetic plain with nothing on it but fields, overbridges and the occasional rest plaza, so fill the tank and eat before you get on. The older NH-56 through Sultanpur and Jaunpur is slower but has life on it, and Sultanpur at the halfway mark is the usual chai and breakfast halt for drivers who take that way. Jaunpur is worth a slow pass for the Shahi Bridge, and its bypass carries heavy truck traffic by the afternoon, which is why we prefer leaving Lucknow early. Winter is the season for this run, but in December and January the fog on the open expressway is dense at dawn and we ease off until the sun burns through. Around Dev Deepawali in November the approach into Varanasi crawls, so allow extra for the last few kilometres.',
  },

  'delhi-to-shimla': {
    origin: 'delhi',
    destination: 'shimla',
    text:
      'The road to Shimla is really two roads. The first is NH-44 out through Murthal, Panipat, Karnal and Ambala, a wide six-lane run where the main danger is complacency, with the Murthal dhabas the customary parantha stop and the toll gates behind you by Ambala. Then at Zirakpur you turn towards Pinjore and Kalka, cross into Himachal at Parwanoo, and there the hill road starts in earnest: NH-5 climbing through Dharampur towards Barog in a long chain of hairpins, with the old railway tunnel near the road. Barog is the halt our drivers swear by, for tea and the view, before Solan, Kandaghat and the final pine-lined climb into the town. From December to February there is snow around Kufri and black ice on the shaded bends in the early morning, so we start after eight rather than before. From July to September the Solan section throws landslides and closures. In May and June the whole Kalka road jams on weekends, and coming down we use low gear the entire way so the brakes never overheat.',
  },

  'delhi-to-mussoorie': {
    origin: 'delhi',
    destination: 'mussoorie',
    text:
      'Delhi to Mussoorie starts fast and ends slow. The Delhi-Meerut Expressway clears the city in an hour, then NH-334 rolls through the sugarcane country past Muzaffarnagar and Roorkee, and after Roorkee the road bends up through the Shivalik forest at Mohand and drops into the Doon valley. Dehradun is where we stop for breakfast, because the thirty-five kilometres above it are the whole reason for the trip: a steep, tight climb from Rajpur with blind curves where the driver sounds the horn on every bend and holds his own lane. Kempty Falls lies a little beyond the town on the Yamunotri side and is packed on weekends. In January and February snow comes down to the Mussoorie roads and heavier on the Dhanaulti side, so we carry chains and set out with daylight in hand. Between July and September the Dehradun climb is the landslide-prone section and we check the road status before leaving Delhi. May and June are the crowded months, when the town is cool while the plains bake and the climb queues on Saturday mornings.',
  },
};
