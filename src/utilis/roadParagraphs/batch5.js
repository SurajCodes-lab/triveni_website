// Week 48, Workstream A3: road paragraphs, batch 5 of the fifty highest-traffic journeys.
// Each entry is one paragraph about the road itself, written from the driver's side.
// Facts are drawn from distanceData, travelByCarData, tollCostData and oneWayCabData for
// the same corridor, plus plain road geography. No fares, no toll amounts, no statistics.
// The index maps the reverse slug (e.g. shimla-to-chandigarh) onto the same entry.

export const roadParagraphs = {
  'delhi-to-meerut': {
    origin: 'delhi',
    destination: 'meerut',
    text: 'Delhi to Meerut has no hills, no halts and no excuse for taking long. You join the Delhi-Meerut Expressway near Sarai Kale Khan, pass Akshardham on the left and cross into Uttar Pradesh at UP Gate in Ghaziabad, where the shared carriageway with the Hapur road is at its widest, fourteen lanes across. At Dasna the expressway peels away northwards and the traffic thins at once; from there to Partapur on the edge of Meerut it is access-controlled and very quick. There is a single toll plaza and it is FASTag only, so keep the tag funded, because there is no cash lane to fall back on. Two things slow this drive: the Delhi exits between nine and eleven in the morning and again after six in the evening, and the winter fog. In late December and January the fog over the western UP fields sits on the expressway till mid-morning, so leave after ten and hold the middle lanes. Meerut is also where the roads to Haridwar, Rishikesh and Dehradun begin.',
  },

  'chandigarh-to-shimla': {
    origin: 'chandigarh',
    destination: 'shimla',
    text: 'The Chandigarh to Shimla road is flat and fast only as far as Pinjore; after Kalka it stops being a highway and becomes a hill road for the remaining eighty kilometres. The climb proper begins just past the Parwanoo toll, where Himachal starts, and the section up through Dharampur to Solan is where the hairpins come one after another, with the toy train line ducking in and out of its tunnels on the slope beside you. Our drivers take chai at Barog, a little short of Solan and roughly the halfway point. From Solan the road runs through pine forest by Kandaghat and Shoghi, and the last few kilometres into Shimla are a one-way system that must be followed as signed. In July and August the hillside near Solan slips and the road can shut; from December to February there is snow on the upper reaches and black ice in the shaded bends below Shimla, so we allow an extra hour. On May and June weekends leave Chandigarh by six to miss the queue at the town entry.',
  },

  'varanasi-to-ayodhya': {
    origin: 'varanasi',
    destination: 'ayodhya',
    text: 'Varanasi to Ayodhya is flat from end to end, and the whole art of it is timing. The road out is the airport road past Babatpur, and the first proper town is Jaunpur on the Gomti, worth a slow pass over the old Shahi Bridge. From Jaunpur to Sultanpur the highway runs through sugarcane and paddy, and this is where we make the tea halt, usually at one of the dhabas short of Sultanpur. After Sultanpur you turn north for Ayodhya, and the last fifty kilometres through Faizabad are the busiest, with pilgrim buses converging on the temple approach. The surface is good all the way; what changes is the air. From mid-December to the end of January the fog over these fields is thick until ten in the morning, and a four-hour drive becomes five. In July and August both the Ganga and the Saryu run high, which does not touch the road but does close the lower ghats at either end. In summer leave at first light and finish the darshan before the heat.',
  },

  'chandigarh-to-kasol': {
    origin: 'chandigarh',
    destination: 'kasol',
    text: 'Chandigarh to Kasol is really two roads. The first is the Manali highway, NH-21, which leaves the plains at Kiratpur, climbs through Swarghat and drops to Bilaspur beside Gobind Sagar, where we usually stop for breakfast. Beyond Bilaspur it is proper mountain road through Sundernagar to Mandi and then along the Beas, past Pandoh dam and through the tunnels, to the bridge at Bhuntar by Kullu airport. Fill the tank at Bhuntar, because the second road begins there: thirty kilometres up the Parvati valley through Jari to Kasol, single lane in places, cut into the cliff above the river, and rough wherever the last monsoon took the edge away. Phones stop working soon after the turn, which is why we ask for a five o\'clock start from Chandigarh, so the valley section is done in daylight. In July and August we do not run this road at all, because the Parvati valley slips and floods every year. From December to February the highway stays open but Kasol itself is under snow and the Kheerganga trek is closed.',
  },

  'delhi-to-ayodhya': {
    origin: 'delhi',
    destination: 'ayodhya',
    text: 'Delhi to Ayodhya is a long day but very little of it is hard driving. The Yamuna Expressway carries you from Greater Noida past Mathura to Agra in one straight line, and at the Agra end you swing directly onto the Agra-Lucknow Expressway without entering the city. That second expressway is three hundred kilometres with almost nothing on it, so we fill up and eat before leaving Agra and again only at Lucknow. Beyond Lucknow the road becomes NH-27, four lanes but ordinary, through Barabanki to Faizabad, where cane tractors and pilgrim buses bring you down to town speeds. The temple approach in Ayodhya is regulated, so the car drops you at the pilgrim parking. Most families book an evening departure from Delhi so as to arrive for the early morning aarti, and that works well from October to November and again from February. In December and January the fog on both expressways is severe from midnight until mid-morning, and in those weeks we prefer a dawn start and a daylight run.',
  },
};
