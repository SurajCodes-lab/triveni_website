// Week 48, Workstream A3: hand-written road paragraphs, batch 2.
// One paragraph per corridor about the road itself. The index maps the
// reverse slug to the same entry. Facts are drawn from distanceData,
// travelByCarData, tollCostData and oneWayCabData for each corridor, plus
// plain road geography. No fares, no toll amounts, no dates.

export const roadParagraphs = {
  "delhi-to-jaipur": {
    origin: "delhi",
    destination: "jaipur",
    text:
      "The Jaipur road is NH-48 the whole way, and the only part of it that ever tests your patience is the first hour, which is why our drivers ask for a five o'clock start: the idea is to be past Kherki Daula and the Manesar stretch before Gurgaon's office traffic builds. After that the six lanes open out and the car settles into a rhythm through Dharuhera and on to Neemrana, where the fort sits above the road on the left. Behror is where we stop, because the highway restaurants there have proper washrooms and the food is better than anything nearer Delhi. Past Behror you cross into Rajasthan at Shahjahanpur and the country goes dry and brown, with the Aravallis showing as low ridges around Kotputli. The last hour from Shahpura into Jaipur is slower as local traffic joins, and Amber Fort comes into view before the city does. In December and January there is morning fog around Manesar, and in May and June the plain is fierce by mid-morning, so an early run pays in both seasons.",
  },

  "delhi-to-agra": {
    origin: "delhi",
    destination: "agra",
    text:
      "Agra is the easiest long drive out of Delhi because the Yamuna Expressway does nearly all the work. You leave on the Noida Expressway, clear Pari Chowk at Greater Noida, and from there it is six flat lanes running past Jewar with fields on either side. Speed cameras are live along its length, so the driver holds a steady hundred rather than racing. The halt worth making is Mathura, off the expressway an hour short of Agra, for peda and tea; the only slow part of the day is Agra city itself, which is why we park near Shilpgram and send you on by e-rickshaw to the Taj. What changes with the season is the fog. From December into January the expressway can be blanketed at dawn and the driver has to crawl on fog lamps, the one time a sunrise plan is best given up. In summer the sun is brutal by ten, and in the monsoon it is Agra's own streets, not the expressway, that hold water.",
  },

  "delhi-to-nainital": {
    origin: "delhi",
    destination: "nainital",
    text:
      "The Nainital run is really two different drives. The first is NH-9 across the plains: Ghaziabad, Hapur, the Ganga crossing at Garhmukteshwar, then Moradabad and Rampur, with truck traffic that thickens through the middle of the day, so we like to be out of Delhi before six. Haldwani is the place to stop, and not only for lunch; it is the last flat town, so we fill the tank and buy water there because choices thin out once the climb starts. From Kathgodam the road tips upward and the second drive begins: thirty-odd kilometres of hairpins through Ranibagh and Jeolikote, the engine working in low gear and the lake appearing suddenly at the top. In the monsoon, July through September, this hill section is where the slips happen and the road can close without notice, so we check before setting out. From December to February there can be snow above the town and the driver carries chains if it is forecast. If Nainital is heaving, Bhimtal is a short turn off the same climb and far quieter.",
  },

  "delhi-to-amritsar": {
    origin: "delhi",
    destination: "amritsar",
    text:
      "Amritsar is the old Grand Trunk Road, NH-44, from Mukarba Chowk to the Golden Temple, and its character is that it never climbs and never quite lets you rest. Sonipat and Murthal go by in the first hour, then Panipat, Karnal and Kurukshetra across Haryana with the road wide and straight. We take the main halt at Haveli in Karnal, which is clean, quick and good for families, though the mutton at Puran Singh's in Ambala has its own following among our drivers. Into Punjab the road stays four-lane but the towns crowd in: Ludhiana and Jalandhar both slow you at their bypasses, and the toll plazas there queue at peak hours. Beyond Jalandhar the land flattens out again through Kartarpur and Beas before the approach to Amritsar. Winter is the thing to plan around. From December into January the Punjab plain fogs over heavily, worst between Ambala and Ludhiana, and a night run that is easy in October becomes a slow crawl on headlights. Summer is simply hot; the monsoon rarely troubles this road.",
  },

  "delhi-to-manali": {
    origin: "delhi",
    destination: "manali",
    text:
      "Manali is a full day and the road changes its nature three times. Delhi to Chandigarh on NH-44 is fast and flat through Panipat, Karnal and Ambala, and most of our cars leave at night so it passes in the dark after dinner at Murthal. Past Chandigarh and Kiratpur the climb begins, and Swarghat is where we take tea, with the Sutlej valley below as the sun comes up. From Bilaspur the real hill road starts: Sundernagar, then Mandi, where the highway squeezes through the town and the Beas gorge narrows, then the Pandoh dam and the Aut tunnel before the valley widens at Bhuntar and Kullu. We fill the tank at Chandigarh and load offline maps before Mandi, as the signal comes and goes in the gorge. July and August are the months to be wary of, when slips between Mandi and Kullu can shut the road. From December to February there is snow above Manali and the driver carries chains; the Atal Tunnel keeps the far side reachable, but the town's approaches can still be icy first thing.",
  },
};
