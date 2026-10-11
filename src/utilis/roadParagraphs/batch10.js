// Week 48, Workstream A3: road paragraphs, batch 10.
// One paragraph per corridor, written from the site's own corridor data
// (distanceData, travelByCarData, oneWayCabData, tollCostData) plus plain road
// geography. No fares, no toll amounts, no dates. The index maps the reverse
// direction onto the same entry.

export const roadParagraphs = {
  'amritsar-to-dharamshala': {
    origin: 'amritsar',
    destination: 'dharamshala',
    text: `Out of Amritsar the road is NH-54 across flat Majha country, past Batala and Gurdaspur to Pathankot, and for those first two hours there is nothing to think about except the fog: from late November into January the Punjab plains stay grey until mid-morning, so a departure after nine is safer than an early one. Pathankot is where the road changes character. Just beyond it you cross into Himachal at Kandwal and the highway begins to twist up through Nurpur and Kotla, following the river before it opens out onto the Kangra valley floor. Kangra makes the sensible halt, with the fort above the town and tea gardens either side of the road, and from there the Dhauladhar wall stands in front of you all the way to Gaggal and the final climb into Dharamshala. Monsoon is the season to respect; July to September brings the heaviest rain in Himachal and the hill section above Pathankot can slip. Winter light is the reward, with snow on the ridges above McLeodganj from December.`,
  },

  'chandigarh-to-amritsar': {
    origin: 'chandigarh',
    destination: 'amritsar',
    text: `This is a plains run from end to end, and what makes it slow is traffic rather than tarmac. From Chandigarh you leave through Kharar and Morinda on the Ludhiana road and join NH-44 at Ludhiana, and it is Ludhiana that costs the time: the city sits astride the highway and the crossing of the Sutlej at Ladhowal queues badly in the evening. After that the four-lane road is fast through Phagwara and past Jalandhar, and the dhabas between Phagwara and the Jalandhar bypass are the place to eat, with a proper tandoor and lassi rather than highway snacks. Beyond Jalandhar the last leg crosses the Beas and runs into Amritsar through Kartarpur. Winter is the one season that changes the drive. From December to the end of January the Punjab fog can shut the view down to a few car lengths before ten in the morning, so the later start is often the quicker one. Baisakhi in April is the busiest week of the year on this road, with the whole of Punjab heading for the Golden Temple.`,
  },

  'dehradun-to-mussoorie': {
    origin: 'dehradun',
    destination: 'mussoorie',
    text: `Short as it is, this is a real hill road, and it starts almost as you leave the city. The run up Rajpur Road is flat, then just past Rajpur the Mussoorie Road turns into hairpins and stays that way to the top, the bends stacked one above the other over the Doon valley. There is no halt to speak of on a road this short; the tea stalls at the bends do a brisk trade, and the viewpoints on the upper section give you the whole valley at once, with the Picture Palace end of Mussoorie the place to stop properly once you are up. Mussoorie sits above the fog line of the plains, so on a winter morning you climb out of the murk into sunshine. December to February can bring snow to the town and ice on the shaded bends, when the road wants a gentle driver. In the monsoon the mist closes in and small slips on the cutting side are common, so allow extra time and keep to daylight.`,
  },

  'delhi-to-dharamshala': {
    origin: 'delhi',
    destination: 'dharamshala',
    text: `There are two halves to this road and they have nothing in common. The first is the GT Road, NH-44 out through Murthal, Karnal and Ambala, dead straight and fast, with the Murthal parathas the traditional first stop and Karnal the sensible breakfast if you left before dawn. Past Ambala you leave the trunk road, skirt Chandigarh and head north through Rupnagar to Nangal, crossing the Sutlej into Himachal at Una. From here on it is hill country: the road follows the valley up through Amb and Kangra, and the last stretch past Gaggal airport into Dharamshala is where the Dhauladhar suddenly fills the windscreen. Gaggal is the tea stop worth waiting for. The plains are best done early because of the lorry traffic, and in winter, through December and January, the fog between Delhi and Ambala can halve your pace until the sun burns it off. Monsoon is heavy up here; July to September brings the wettest weather in the state and landslides on the Una to Kangra section. McLeodganj, above the town, can be icy in January.`,
  },

  'udaipur-to-mount-abu': {
    origin: 'udaipur',
    destination: 'mount-abu',
    text: `Leaving Udaipur westwards on the Pindwara highway, the first surprise is that the climbing starts early: the road lifts out of the Udaipur bowl over the Gogunda ghat within the first hour, a short twisting rise through the Aravallis before it drops back onto the plain. From Gogunda to Pindwara the road is open and quick through dry scrub country, and Pindwara is where you turn off the highway for Abu Road. The real ghat is the last part, from Abu Road up to Mount Abu, a long stack of hairpins climbing through rock and forest to the plateau; it is the best part of the drive and the slowest. Pindwara or Abu Road make the natural halt before the climb. October to March is the season, when the plains are bearable and Mount Abu is cool; in December and January the nights on top drop close to freezing, which surprises people coming up from the lakes. After the monsoon, in September and October, the Aravallis are green and the ghat is at its prettiest.`,
  },
};
