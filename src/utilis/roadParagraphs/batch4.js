// Week 48, Workstream A3: road paragraphs, batch 4.
// One paragraph per corridor, written from the corridor data in distanceData.js,
// travelByCarData.js, tollCostData.js and oneWayCabData.js plus plain road geography.
// No fares, no toll amounts, no dates. The index maps the reverse direction to the same text.

export const roadParagraphs = {
  'jaipur-to-ajmer': {
    origin: 'jaipur',
    destination: 'ajmer',
    text: `Jaipur to Ajmer is the easiest drive in this corner of Rajasthan, a straight run down NH-48 that takes a little over two hours once the car is clear of the Jaipur bypass. There is no climb worth the name; the highway is flat, dual carriageway from end to end, with the Aravalli ridges sitting off to one side rather than across the way. Dudu, roughly halfway, is where we pull in for tea, because the dhabas there are used to cab traffic and serve quickly. Beyond Dudu the marble yards of Kishangarh line both sides of the road, slab after slab stacked in the open, and the second toll sits just past them. From Kishangarh the road drops into Ajmer within half an hour. The stretch bakes from April onward, so in those months we leave early. October to March is comfortable driving weather, though the days around the Urs bring pilgrim buses that slow the last few kilometres into the Dargah area. Most guests carry on to Pushkar, a short hop over a hill road beyond Ajmer.`,
  },

  'manali-to-rohtang-pass': {
    origin: 'manali',
    destination: 'rohtang-pass',
    text: `The road from Manali to Rohtang is short on the map and long in the driving, because those fifty odd kilometres are almost entirely climb. You follow the Leh highway up the Beas past Palchan, where the road to the Atal Tunnel turns off and the through traffic for Lahaul disappears with it. From there the old pass road belongs to Rohtang traffic alone. It goes up in ladders of hairpins through Kothi and Gulaba, where the permit is checked, and by Marhi the trees have gone and you are on open meadow with the cold coming in through the window. Marhi is the halt, a line of dhabas serving Maggi and tea, and the last proper stop before the summit. Above it the tarmac gives way to snow banks at Rani Nala for most of the year. The pass opens around May and shuts with the first heavy snowfall in October or November; even in season we start down by early afternoon, before the cloud closes in and the queue of returning vehicles builds.`,
  },

  'delhi-to-varanasi': {
    origin: 'delhi',
    destination: 'varanasi',
    text: `Delhi to Varanasi is a night's driving rather than a day's, and nearly all of it is expressway now. We leave on the Yamuna Expressway, empty and fast after dark, take the Agra bypass without entering the city, and pick up the Agra-Lucknow Expressway at its western end. That stretch runs flat and straight through Firozabad, Etawah and Kannauj country for hours, with lit rest areas where the driver can stretch his legs and the passengers can find a toilet and tea. Past Lucknow the route splits: the Purvanchal Expressway carries a car on east, while the older road through Sultanpur and Jaunpur is what we take when the expressway is shut. Either way the last hour into Varanasi is ordinary two-lane road shared with tractors and cycles, best done in daylight. In December and January fog sits on the Agra-Lucknow section from midnight until well after sunrise, and we slow right down or halt at Lucknow. The monsoon does not trouble the expressways. Breakfast is kachori and sabzi once the sun is up.`,
  },

  'agra-to-jaipur': {
    origin: 'agra',
    destination: 'jaipur',
    text: `Agra to Jaipur is the Golden Triangle's middle leg and a plains road throughout, so its character comes from what sits beside NH-21 rather than any gradient. Out of Agra the highway passes Fatehpur Sikri inside the first hour, Akbar's red sandstone capital up on its ridge, and you cross into Rajasthan soon after. Around Bharatpur the road narrows to two lanes for a while, with the Keoladeo wetland just off it, and the first toll comes up here. Beyond Bharatpur the country turns drier and more open. The section to Dausa is the thin bit for food, so we tell guests to eat at Bharatpur or carry something; it is also where the turn for the Chand Baori step-well at Abhaneri branches off. Dausa is the second toll and the last sensible halt. From there the road rises gently into the hills that hold Amber Fort, which you see on its ridge before Jaipur appears. Winter is ideal, with the migratory birds at Bharatpur peaking in January; in May and June we leave Agra at first light.`,
  },

  'delhi-to-lansdowne': {
    origin: 'delhi',
    destination: 'lansdowne',
    text: `Delhi to Lansdowne is two roads in one. The first is the plains run out of Ghaziabad on the Delhi-Meerut Expressway, quick if you are on it before the morning rush, then the slower state highway through the sugarcane belt of western UP, where in the crushing months from November to March tractor trolleys piled high with cane crawl along the edge and cut everyone's speed. Cheetal Grand at Khatauli is the halt for breakfast and a clean washroom; after that it is Bijnor, Najibabad and a pause at the Sidhbali Baba temple outside Kotdwar. Draw cash at Kotdwar, because there is no ATM in Lansdowne. The second road begins at Kotdwar: forty kilometres of proper ghat through Dugadda, narrow, twisting, with sections that have no parapet, first through sal and then into oak and pine as the air cools. We take it in daylight. In July and August small slips can close the road for hours; in January the mornings are misty and the cantonment sits close to freezing, though snow is rare.`,
  },
};
