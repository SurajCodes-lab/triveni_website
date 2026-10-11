/**
 * Week 53: add the hero and body copy the near-city template requires.
 *
 * PlacesToVisitClient reads heroTitle, heroSubtitle and description from each
 * city record, and description is an array of paragraphs it maps over. The ten
 * new records carried destinations and FAQs but not those three, which is why
 * the first build failed on `.map` of undefined.
 *
 * The copy is written per city, not templated. Each opening paragraph says what
 * is actually within reach of that origin and what the drive involves, because
 * that is the question the page exists to answer.
 */
import { readFile, writeFile } from "node:fs/promises";

const FILE = "src/utilis/placesToVisitWave2.js";

const COPY = {
  ajmer: {
    heroTitle: "Places to Visit Near Ajmer",
    heroSubtitle: "Pushkar, Kishangarh and the Aravalli forts — day trips with the fare for each",
    description: [
      "Ajmer sits in a gap in the Aravallis, which is why so much is within an easy drive of it. Pushkar is fifteen kilometres over the Nag Pahar hill — close enough that most visitors do the Dargah Sharif in the morning and the Brahma temple and the ghats in the afternoon, on one car for the day.",
      "Beyond Pushkar the destinations spread out. Kishangarh's marble yards and the Phool Mahal palace are forty-five minutes north. Roopangarh fort is an hour, and almost empty. Beawar, an hour and a half out, is a working nineteenth-century market town rather than a monument — worth the drive if that appeals more than a ticket queue.",
      "The two long trips are Jaipur at 135 kilometres and Chittorgarh at 190. Both are possible in a day and better as overnights: Chittorgarh's fort alone takes most of a day to walk. Everything on this list is quoted below with its road distance, its real drive time and the cab fare, so a day can be planned on the figures rather than on an estimate.",
    ],
  },
  pushkar: {
    heroTitle: "Places to Visit Near Pushkar",
    heroSubtitle: "Ajmer, Kishangarh and the Marwar road — priced day trips from the lake",
    description: [
      "Pushkar is small and the drives out of it are short. Ajmer is thirty minutes over the hill, and the Dargah Sharif there is one of the most visited shrines in the country — the two towns are almost always seen together, on one car for the day.",
      "North and west the country opens into Marwar. Kishangarh is an hour, Merta City — the birthplace of the poet-saint Meera Bai — ninety minutes and very little visited. Nagaur, three hours out, has one of the best-restored forts in Rajasthan and sees a fraction of the visitors its quality deserves.",
      "Jaipur, Jodhpur and Ranthambore all sit three to four hours away, which makes them the next stop on an itinerary rather than a return trip. Each destination below carries its distance, drive time and fare, so the difference between a half-day and a committed day out is clear before anything is booked.",
    ],
  },
  ayodhya: {
    heroTitle: "Places to Visit Near Ayodhya",
    heroSubtitle: "Faizabad, Shravasti and the Ganga cities — day trips and onward journeys",
    description: [
      "Most visitors to Ayodhya see the temple complex and leave, which misses what is within an easy drive. Faizabad is seven kilometres away and holds the Nawabi architecture the area is otherwise not known for — Gulab Bari and the Bahu Begum tomb are both there, and both are quiet.",
      "The more significant trip is Shravasti, 110 kilometres and two and a half hours north, where the Buddha is said to have spent twenty-four rainy seasons. The Jetavana monastery ruins and the Anandabodhi tree make it the most important Buddhist site within reach, and on most days you will have it largely to yourself.",
      "Then the cities: Lucknow at 135 kilometres, which is also the airport most visitors arrive through; Gorakhpur at 140 for the Gorakhnath temple; Prayagraj at 165 for the Sangam; and Varanasi at 200. The last two are overnights rather than day trips — Varanasi's ghats at dawn and the evening aarti are twelve hours apart, and a day trip gets neither. Distances, drive times and fares for all of them are below.",
    ],
  },
  bikaner: {
    heroTitle: "Places to Visit Near Bikaner",
    heroSubtitle: "Deshnoke, Gajner and the desert road — day trips with fares",
    description: [
      "Bikaner's nearest destination is also its strangest. The Karni Mata temple at Deshnoke, thirty kilometres out, is home to some twenty-five thousand rats that live under protection and are fed as part of the worship. Shoes come off at the gate. There is nowhere else quite like it.",
      "Forty-five minutes the other way, Gajner is a former royal shooting lodge on a lake in open scrub desert, with a small sanctuary attached — chinkara and nilgai at dusk, migratory birds in winter, and a late-afternoon departure works far better than a morning one. Kolayat, an hour out, is a desert oasis with a sacred lake and a fair that is almost entirely local.",
      "The long drives are the Shekhawati havelis at Mandawa, four hours, and Jodhpur and Jaisalmer at five and six. Those are overnights. November to February is the window for all of it — the desert summer rules out standing in the open, which most of these destinations require. Each is listed below with its distance, drive time and fare.",
    ],
  },
  dharamshala: {
    heroTitle: "Places to Visit Near Dharamshala",
    heroSubtitle: "McLeod Ganj, Kangra, Palampur and Bir — the Kangra valley by car",
    description: [
      "Dharamshala sits below the Dhauladhar range with the Kangra valley spread out beneath it, and the destinations divide neatly between up and down. Up is McLeod Ganj, nine kilometres and thirty minutes, with the Tsuglagkhang complex and the Namgyal monastery — though most of the quarter is walked rather than driven, so a car is best left at the edge.",
      "Down is the valley. Kangra's fort is one of the oldest in India and stands above the confluence of two rivers. Chamunda Devi and the Palampur tea gardens are both within forty minutes, and Palampur with the Dhauladhar behind it is the most photogenic short drive from Dharamshala.",
      "Further out, Bir Billing at two hours is the main paragliding site in the country — flying is seasonal and weather-dependent, so confirm rather than assume. Dalhousie and Khajjiar at four hours are an overnight. The monsoon is heavy here with real landslide risk on the hill roads, so March to June and September to November are the reliable months. Distances, drive times and fares for each are below.",
    ],
  },
  faridabad: {
    heroTitle: "Places to Visit Near Faridabad",
    heroSubtitle: "Surajkund, Sohna, Neemrana and Agra — NCR day trips with fares",
    description: [
      "Faridabad's advantage is position. It sits on the southern edge of the NCR with the Aravalli ridge immediately behind it and the Yamuna Expressway running out of it, which puts a very wide range of destinations inside a day.",
      "The short runs are genuinely short. Badkhal Lake is six kilometres, Surajkund eight — a tenth-century stepped reservoir, and the site of the crafts mela each February, which is worth either planning for or avoiding deliberately because the traffic around it is heavy for weeks. Sohna's hot sulphur springs are twenty-five minutes into the Aravalli foothills and the closest thing to a hill outing from the NCR.",
      "Then the real day trips. Neemrana's fifteenth-century fort palace and Mathura's temples are both two and a half hours. Sariska's tiger reserve is three and a half. And Agra is three hours on the expressway, which makes the Taj a comfortable day out — provided it is not a Friday, when it is closed. Every destination below carries its distance, drive time and fare.",
    ],
  },
  manali: {
    heroTitle: "Places to Visit Near Manali",
    heroSubtitle: "Solang, Manikaran, Kasol and Rohtang — with seasons and permits noted",
    description: [
      "Almost everything worth seeing around Manali is up a valley, which means the distances understate the drives. Solang Valley is thirteen kilometres and forty minutes, and considerably longer in season when the road queues — it is where most visitors go for snow without crossing a pass.",
      "The Parvati valley is the other direction and the more interesting one. Kasol at forty kilometres has riverside camps and a long-established traveller scene; Manikaran at forty-five has hot springs hot enough to cook in, with a gurudwara and a Shiva temple sharing a narrow gorge. Tosh, at fifty, is as far up as a vehicle goes and the last stretch is on foot.",
      "Rohtang Pass is the one that needs planning rather than booking. At 3,980 metres it requires a permit, the daily vehicle count is capped, and snow closes it for much of the year — usually opening some time in May and shutting by late October. Both the permit and the opening have to be confirmed for your date. Everything below is listed with its distance, its real drive time and the fare.",
    ],
  },
  "mount-abu": {
    heroTitle: "Places to Visit Near Mount Abu",
    heroSubtitle: "Dilwara, Guru Shikhar and Achalgarh — the plateau and the road down",
    description: [
      "Mount Abu is Rajasthan's only hill station and most of what matters is within fifteen kilometres of the town. The Dilwara temples are three kilometres away and are the reason to come — eleventh and thirteenth-century Jain temples in white marble, carved to a standard that is difficult to describe and not permitted to photograph. Visiting hours for non-worshippers are restricted, which surprises most first-time visitors, so check before setting out.",
      "Achalgarh fort is eleven kilometres, with a Shiva temple inside holding a toe impression rather than a lingam. Guru Shikhar at fifteen is the highest point in the Aravallis at 1,722 metres — the final stretch is a stair climb from the car park, and the view across the whole plateau is best early before haze builds.",
      "Down off the plateau the landscape changes entirely. Ambaji, one of the fifty-one Shakti Peethas, is forty-five minutes into Gujarat; Palanpur is ninety. Udaipur at 165 kilometres is an onward stop rather than a day trip. Each destination is listed below with its distance, drive time and fare.",
    ],
  },
  mussoorie: {
    heroTitle: "Places to Visit Near Mussoorie",
    heroSubtitle: "Kempty, Dhanaulti, Landour and Surkanda Devi — ridge drives with fares",
    description: [
      "Mussoorie runs along a ridge, and the destinations run along it with her. Landour is four kilometres up — a quiet cantonment of colonial houses, four corner lanes and a few long-established bakeries, where walking is the point and parking barely exists. Lal Tibba at six kilometres is the highest point, with a telescope platform looking at the Himalayan range on a clear morning.",
      "West along the ridge the drives get longer and quieter. Kempty Falls at fifteen kilometres is the most visited and the most crowded. Dhanaulti at twenty-five is deodar forest and noticeably cooler. Surkanda Devi at thirty-five is a hilltop temple at about 3,000 metres, reached by a steep walk or now a ropeway, with the best range view anywhere near Mussoorie.",
      "Down the hill, Dehradun at thirty-five kilometres is both the city below and the airport and railhead for Mussoorie, with Robbers Cave and Mindrolling monastery making a full day if you are going anyway. One thing to know before planning: the Mall road is pedestrian for much of its length, so a good deal of Mussoorie is walked rather than driven. Distances, drive times and fares are below.",
    ],
  },
  nainital: {
    heroTitle: "Places to Visit Near Nainital",
    heroSubtitle: "Bhimtal, Sattal, Mukteshwar and Jim Corbett — the Kumaon lakes and beyond",
    description: [
      "Nainital's own lake is the busiest thing about it, and the better lakes are a short drive away. Bhimtal at twenty-two kilometres is larger and considerably quieter, with an island aquarium in the middle. Sattal at twenty-three is a cluster of interconnected lakes in dense forest and one of the best birding spots in Kumaon. Naukuchiatal at twenty-six is the deepest and the least crowded.",
      "All three sit within half an hour of each other, so a single day covers the lakes circuit comfortably — usually with Kainchi Dham, the Neem Karoli Baba ashram at seventeen kilometres, added on the way.",
      "Further out the character changes. Mukteshwar at fifty kilometres has the best Himalayan view in the area from the Chauli Ki Jali cliff edge. Ranikhet at sixty is a quiet cantonment with long views of the Nanda Devi range. Almora at sixty-five is an old Kumaoni hill town with a stone-paved bazaar. And Jim Corbett, also sixty-five, is India's oldest national park — safari slots are booked separately and well ahead, and the morning slot effectively means staying the night before. Every destination below carries its distance, its drive time and the cab fare.",
    ],
  },
};

let s = await readFile(FILE, "utf8");
let n = 0;

for (const [slug, copy] of Object.entries(COPY)) {
  const key = slug.includes("-") ? `'${slug}':` : `${slug}:`;
  const marker = `    slug: '${slug}',`;
  if (!s.includes(marker)) {
    console.log(`  marker not found for ${slug}`);
    continue;
  }
  if (s.includes(`heroTitle: '${copy.heroTitle.replace(/'/g, "\\'")}'`)) continue;

  const esc = (t) => t.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
  const block =
    `${marker}\n` +
    `    heroTitle: '${esc(copy.heroTitle)}',\n` +
    `    heroSubtitle: '${esc(copy.heroSubtitle)}',\n` +
    `    description: [\n` +
    copy.description.map((p) => `      '${esc(p)}',`).join("\n") +
    `\n    ],`;

  s = s.replace(marker, block);
  n += 1;
  console.log(`  copy added: ${slug}`);
}

await writeFile(FILE, s, "utf8");
console.log(`\n  ${n} cities given hero and body copy`);
