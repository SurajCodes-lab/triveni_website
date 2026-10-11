// Week 48, Workstream A3: road paragraphs for high-traffic journeys (batch 9).
// One paragraph per corridor, written from the corridor data in distanceData,
// travelByCarData, tollCostData and oneWayCabData plus plain road geography.
// The index maps the reverse direction to the same entry.

export const roadParagraphs = {
  'delhi-to-vrindavan': {
    origin: 'delhi',
    destination: 'vrindavan',
    text: `The drive to Vrindavan is really two roads. The first is the Yamuna Expressway, which you pick up at Zero Point beyond Greater Noida after leaving Delhi through Noida. From there it is a straight, flat run past Jewar with nothing to slow you except the speed cameras, and the one sensible halt is the food plaza on the expressway itself, where the toilets are clean and the tea is hot. Come off at the Mathura exit and the second road begins: the last fifteen kilometres from the expressway into Vrindavan are ordinary town road, busy with e-rickshaws and pilgrims on foot, and this short stretch can take as long as an hour of expressway did. From December to the end of January there is fog on the expressway most mornings, thick enough near Jewar that we start later or drive slowly with the hazards on. Around Holi and Janmashtami the Vrindavan end is walled in with traffic, so on those days we drop at the edge of town and you finish on foot to Banke Bihari.`,
  },

  'dehradun-to-nainital': {
    origin: 'dehradun',
    destination: 'nainital',
    text: `This is a long day across the whole width of Uttarakhand. You leave Dehradun on the Haridwar road, skirt the Rajaji forest and drop to the Ganga at Haridwar in a little over an hour, which is where a driver stops for breakfast before the plains. Then the road turns east across the Terai through Najibabad, where the Kotdwar road goes off to the left, and on through Kashipur to Haldwani. It is flat and quick but full of sugarcane tractors, and the good dhabas are around Kashipur. Haldwani is the last proper market, so fuel and water go in there. Only in the final thirty-five kilometres does the road climb, in a string of hairpins above Kathgodam, and Naini Lake appears suddenly as you come over the ridge. From July to September this last climb is the landslide section and can close without notice. In December and January there is ice in the shaded bends near the top early in the morning, so we aim to be climbing by mid afternoon and never after dark.`,
  },

  'haridwar-to-mussoorie': {
    origin: 'haridwar',
    destination: 'mussoorie',
    text: `Short as it is, this journey changes character three times. Out of Haridwar the road runs north through the edge of the Rajaji forest to Raiwala and Doiwala, passing Jolly Grant airport, and elephants cross this section at dawn and dusk so we keep the speed down. Dehradun comes next, flat and green in its bowl of hills, and it is worth breaking on Rajpur Road for a proper meal, because from the top of Rajpur Road the climb starts and there is nothing but chai stalls until the ridge. The thirty-five kilometres up to Mussoorie are all hairpins and blind corners, so a good driver honks at every bend. The Doon Valley opens out below at each turn, and the viewpoint near the Picture Palace end is the one to stop at. In January and February there can be snow on the upper bends and the police hold cars at the bottom until it is cleared. From July to September the hillside sheds mud after heavy rain, so we check the road is open before leaving Haridwar.`,
  },

  'delhi-to-noida': {
    origin: 'delhi',
    destination: 'noida',
    text: `There is no highway story here, only the question of which bridge you use to cross the Yamuna. From south and central Delhi the DND Flyway is the quick way, an elevated run from the Ashram side that lands you at the Film City end of Noida and joins the Noida-Greater Noida Expressway without a single signal. Off peak it is a twenty minute drive. The alternative is the Kalindi Kunj road over the Okhla barrage, which has no toll booth but crawls through the Jamia side and adds a good quarter of an hour. From east Delhi the Mayur Vihar link into Sector 15 avoids both. Between eight and ten in the morning and from five to eight in the evening every approach queues, and the DND queue backs up onto the Ring Road. On December and January mornings fog sits on the river and the DND is the first road in the city to lose visibility. After a heavy monsoon shower it is the underpasses on the Noida side, not the bridge, that hold water.`,
  },

  'noida-to-agra': {
    origin: 'noida',
    destination: 'agra',
    text: `From Noida you are on the expressway system from the first kilometre, which is why this run beats Delhi to Agra by half an hour or more. The Noida-Greater Noida Expressway carries you down to Pari Chowk, and at Zero Point just beyond it the Yamuna Expressway begins and does not stop until Agra. There is nothing to do but hold the limit, because the cameras average your speed between gantries. The right halt is the food plaza after Jewar, roughly the halfway mark; the Mathura exit further on is where people leave for peda. The expressway ends on the edge of Agra and the last few kilometres are the slow part, so for the Taj we park near Shilpgram and you take an e-rickshaw. Most people start at five in the morning for the sunrise entry, which in winter means dense fog between Jewar and Mathura, so we leave the gap and keep the fog lamps on. In July and August the expressway drains well but the Agra city roads flood after rain. The Taj is closed on Fridays.`,
  },
};

export default roadParagraphs;
