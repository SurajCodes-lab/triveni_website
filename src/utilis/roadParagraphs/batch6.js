// Week 48 Workstream A3, batch 6: road paragraphs for five high-traffic corridors.
// Each entry is one paragraph about the road itself, corroborated against
// distanceData.js, travelByCarData.js, tollCostData.js and oneWayCabData.js.
// The index maps the reverse-direction slug onto the same entry.

export const roadParagraphs = {
  'jaipur-to-udaipur': {
    origin: 'jaipur',
    destination: 'udaipur',
    text: 'Out of Jaipur the road is the NH-48 four-lane, flat and quick past the marble yards of Kishangarh, and Ajmer comes up in about two hours with the Pushkar turn just beyond it. Beawar is where the character changes: the plain gives way to the Aravallis and the highway starts to bend and climb through Bhim into Rajsamand, the prettiest and slowest stretch of the whole drive, with the Beawar plaza behind you and the Rajsamand plaza still to come. If you want Chittorgarh, take the Bhilwara line instead and give the fort two hours; it costs you time on the day but nobody we have driven there has regretted it. For a proper meal the dhabas at Kishangarh and Ajmer are the reliable ones; after Beawar the choice thins out until Nathdwara. From July to September the hill bends run wet and slippery and the lakes fill, which is why Udaipur looks its best in October. April to June the plains part is a furnace, so leave at first light and be through Ajmer before the heat builds.',
  },

  'amritsar-to-wagah-border': {
    origin: 'amritsar',
    destination: 'wagah-border',
    text: 'This is the old Grand Trunk Road running dead straight west out of Amritsar, and it is over almost before you have settled in: Chheharta, then Khasa with its cantonment, then the last village of Attari and the border gate itself, thirty kilometres in well under an hour. There is no halt worth making on the way; eat at the Golden Temple langar before you leave, because the ceremony car park is a fair walk from the stands and you will be on your feet for a while. The flag lowering is late afternoon, but the exact hour moves with the season, earlier in the short winter days and later through summer, so ask the driver for that week\'s timing and plan to be at the gate a good two hours before it. In December and January the return is the thing to respect: the road home after dusk fills with fog and the whole crowd leaves at once, so let the first rush clear before you pull out of Attari.',
  },

  'chandigarh-to-manali': {
    origin: 'chandigarh',
    destination: 'manali',
    text: 'From Chandigarh the road stays on the plain only as far as Kiratpur; the real climb begins at Swarghat, where the Shivaliks lift the highway above Gobind Sagar, and Bilaspur on the far side is a fair place for breakfast. Between Bilaspur and Mandi the NH-21 tunnels through rock, so run the headlamps in daylight, and Sundernagar makes the better lunch halt before the road drops to Pandoh Dam and enters the Beas gorge. Pandoh to Aut is the section every hill driver watches: narrow, cut into the rock face above the river, and the first to go when the monsoon brings the slope down in July and August. Past Aut the valley opens, Bhuntar and Kullu go by with rafting camps on the river and apple stalls on the verge from July into October, and the last forty kilometres to Manali are easy. December to February the road stays open but there is black ice in the shaded bends beyond Kullu and snow above the town, which is why we start at six and keep the daylight.',
  },

  'varanasi-to-prayagraj': {
    origin: 'varanasi',
    destination: 'prayagraj',
    text: 'Leaving Varanasi through Mohansarai you pick up the NH-19, the modern Grand Trunk Road, and the whole run to Prayagraj is a four-lane straight across the flat Purvanchal doab with nothing on it that could be called a hard stretch. The half-way mark is Gopiganj and the Gyanpur turn for Bhadohi, carpet country, where the roadside dhabas are the sensible tea stop if you need one; after that it is Handia and then the Ganga crossing into the city. Two and a half to three hours is honest for it, provided you are not travelling during Magh Mela or the Kumbh, when the approach roads on the Prayagraj side back up for kilometres and the police open the bridges by turn. The only weather that troubles this road is fog: from mid-December through January the doab is blanketed until late morning and visibility on the highway drops to nothing, so in those weeks a later start is the safer one, which is the opposite of our advice for the rest of the year.',
  },

  'jaipur-to-jodhpur': {
    origin: 'jaipur',
    destination: 'jodhpur',
    text: 'The Jodhpur run shares its first half with the Udaipur road, so it is the same fast four-lane through Kishangarh and round the Ajmer bypass, but at Beawar you fork right onto the NH-62 and the country starts to dry out. The Beawar to Pali stretch is the one to enjoy: the highway crosses the tail of the Aravallis near Bar, with proper Rajasthani dhabas either side of the hills, and the Ranakpur turn comes up at Pali for anyone with a spare couple of hours for the marble temple. From Pali the land flattens and bleaches to scrub, and Mehrangarh appears on its rock a long way before Jodhpur does. Winter mornings out here are colder than people expect, cold enough for a shawl at the Beawar tea stop, though the day warms quickly once the sun is up. In July and August a rare storm can put water across the road for an hour outside Pali. From April to June the afternoon heat is brutal, so we leave Jaipur early and aim to be in Jodhpur by lunch.',
  },
};
