// Week 48, Workstream A3: road paragraphs, batch 8.
// One hand-written paragraph per corridor, shared by the booking page, the
// distance guide and the one-way page for that journey. Facts are taken from
// distanceData.js, travelByCarData.js, tollCostData.js and oneWayCabData.js
// for the same slug, plus ordinary road geography. No fares, no toll amounts.
// The index maps the reverse-direction slug onto the same entry.

export const roadParagraphs = {
  'haridwar-to-dehradun': {
    origin: 'haridwar',
    destination: 'dehradun',
    text: 'Haridwar to Dehradun is a short, flat run of about an hour, and the only real decision is which side of the Rajaji forest to take. The direct road leaves Haridwar on NH-7, crosses the Motichur stretch and runs through the tiger reserve corridor to Raiwala and the Nepali Farm junction, then on through Doiwala into the Doon valley. Nobody climbs anything on this road; the Shivaliks stay alongside the road rather than under it. The forest section is the part to respect, because elephant herds cross it early in the morning and again around dusk, and a driver who knows the road drops his speed there without being asked. If you have the time, take the Rishikesh fork at Nepali Farm instead, go up past the Ganga and come back to Dehradun through Ranipokhri; it adds a little distance and a tea halt at Rishikesh worth the detour. In December and January the forest holds a thick morning fog until the sun is well up, so a nine o\'clock start is easier than a six o\'clock one.',
  },

  'shimla-to-manali': {
    origin: 'shimla',
    destination: 'manali',
    text: 'Shimla to Manali is a full day on the wheel and it is really two roads joined at Mandi. The first half drops out of Shimla past Ghanahatti and Darlaghat, where the cement trucks slow everybody down, and follows the fall of the land to the Sutlej at Bilaspur. From there the run through Sundernagar is the easiest driving of the day, wide and straight along the canal, so most drivers keep their lunch for Mandi. After Mandi the character changes completely. The road squeezes into the Beas gorge past the Pandoh dam, threads a series of tunnels and comes out at Aut, and from Bhuntar to Kullu the valley opens into orchard country. The last hour through Patlikuhal to Manali is the prettiest and the most crowded on weekends. In July and August the Mandi to Aut gorge is where the slides come down, so check before starting. From December the shaded bends near Shimla ice over in the morning and Manali gets its snow, and either way the drive wants daylight all the way.',
  },

  'delhi-to-corbett': {
    origin: 'delhi',
    destination: 'corbett',
    text: 'The Delhi to Corbett road is plains driving from start to finish, and the only thing that changes is how green it gets. You leave on NH-9 through Ghaziabad and Hapur, and the first proper halt is Gajraula, where the dhabas are set up for exactly this traffic and a breakfast stop costs you twenty minutes well spent. Moradabad is the halfway mark and the last big town; after it you turn off the main highway towards Kashipur and the road narrows through sugarcane and flat terai country. Kashipur to Ramnagar is short, and past the Kosi barrage at Ramnagar the resorts begin along the river towards Dhikuli. Fill the tank at Ramnagar, because there is nothing inside the forest. The road itself never troubles a sedan; what troubles it is the winter fog. From late December into January the Gajraula to Moradabad section can sit under fog until mid morning, so a very early start gains you nothing. Between July and September the main safari zones are shut for the rains, and the road is quiet.',
  },

  'udaipur-to-chittorgarh': {
    origin: 'udaipur',
    destination: 'chittorgarh',
    text: 'Udaipur to Chittorgarh is the easiest drive out of Mewar, a couple of hours on four lane NH-48 with no hill road at all. The car leaves the lake city through Debari, where the highway cuts through the Aravalli ridge in one short climb and then drops onto the plain; that is the only gradient you will feel. Past the airport turn at Dabok the road runs straight and fast through open farmland, and the halt most drivers make is around Kapasan, where the roadside stalls do decent tea. The fort announces itself long before Chittorgarh town does, a long flat topped hill standing alone over the plain, clearly visible from the highway on the final stretch in. Timing matters more than the road here. From April to June the ramparts are baking by eleven, so leave Udaipur at seven and do the fort before the heat. Between October and March the mornings are cool enough to walk the whole fort, and the evening light and sound show is the reason to stay on.',
  },

  'delhi-to-kasol': {
    origin: 'delhi',
    destination: 'kasol',
    text: 'Delhi to Kasol is three drives stitched together, and the road gets harder in the order you meet them. NH-44 to Chandigarh is fast and flat, with the usual parantha stop at Murthal; most people leave Delhi at night and are past Chandigarh before the trucks wake up. Then the Kiratpur road climbs into the Shivaliks with glimpses of Gobind Sagar through Bilaspur, straightens out at Sundernagar and reaches Mandi, the sensible place to eat and the last place to buy anything you have forgotten. After Mandi the Beas gorge takes over, tunnels and all, until you cross the river at Bhuntar and turn up the Parvati. That last stretch past Jari to Kasol is narrow, cut into the cliff and slow, and the phone signal fades soon after Bhuntar. In July and August the Parvati road is the one that slides, and a driver who knows it will not take it at night. From December to February there is snow above Kasol and ice on the shaded corners below it, and an SUV earns its keep.',
  },
};
