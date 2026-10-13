// src/utilis/weekendGetawaysWave2.js
//
// Week 53, wave 2 — seven more weekend-getaway cities.
//
// WHY THESE SEVEN
// ---------------
// Wave 1 built the 22 cab-hub cities that had no weekend list. Eight cities
// were left with a /local-taxi/ page but neither a weekend list nor a
// near-city list: Dalhousie, Gwalior, Kasol, McLeodganj, Prayagraj,
// Ranthambore, Srinagar and Vrindavan.
//
// Gwalior is deliberately not here. It has no imagery in
// public/images/sightseeing, and it is in Madhya Pradesh — the destinations a
// Gwalior weekend list would name (Orchha, Datia, Shivpuri) are all outside
// the North India scope this programme works to. Building it would have been
// expansion disguised as completion.
//
// WHY THIS IS A SEPARATE FILE
// ---------------------------
// weekendGetawaysData.js is 1,415 lines and sits behind 28 live pages. A new
// wave goes in its own module and is merged at the export, so a mistake here
// cannot corrupt the records already serving traffic. The toll work earlier
// this week overwrote a live 1,333-line data file for exactly the want of
// this habit.
//
// THE SHAPE IS UNCHANGED FROM WAVE 1
// ----------------------------------
// A weekend destination is somewhere that justifies a night. Anywhere that
// can be done and returned from in a day belongs on the near-city page, so
// Khajjiar does not appear under Dalhousie at 22 km and Barsana does not
// appear under Vrindavan. Every fare is computed from the published
// round-trip rate card by calcRoundTripFares, so none of them is typed by
// hand and none can drift from the rate card.

import { calcRoundTripFares } from './roundTripData';

/**
 * One weekend destination. Identical to the wave-1 helper: the fares are
 * derived, never written, so the number on the page is always the rate card's.
 */
const g = (name, km, driveTime, nights, bestSeason, whatYouDo, weekendShape, bookingSlug) => {
  const f = calcRoundTripFares(km);
  return {
    name,
    km,
    distance: `${km} km`,
    driveTime,
    nights,
    bestSeason,
    whatYouDo,
    weekendShape,
    bookingSlug,
    sedanFare: f.cabFares.sedan,
    suvFare: f.cabFares.suv,
    tempoFare: f.cabFares.tempo,
    billableKm: f.totalBillableKm,
  };
};

export const weekendGetawaysWave2 = {
  dalhousie: {
    slug: 'dalhousie',
    city: 'Dalhousie',
    heroTitle: 'Weekend Getaways from Dalhousie by Car',
    heroSubtitle:
      'Six places worth a night from Dalhousie, priced as a return journey with a chauffeur.',
    heroImage: '/images/sightseeing/Dalhousie/dalhousie_hero_section.jpg',
    intro: [
      "Dalhousie sits at about 1,970 metres across five wooded hills, and the thing to understand about weekends from here is that it is in the wrong corner of Himachal for the rest of Himachal. Manali and Shimla are nine and ten hours away through the valleys, not the two or three the map suggests.",
      "What it is well placed for is Chamba district, which almost nobody visits, and Punjab, which is closer from here than from any other hill station in the state. Amritsar is five hours down the hill.",
      "Return fares come from the published round-trip rate card rather than being quoted by hand.",
    ],
    destinations: [
      g('Chamba', 50, '2 hours', 1, 'Mar-Jun, Sep-Nov',
        "The Lakshmi Narayan temple complex, six stone shikhara temples from the tenth century onward standing in one courtyard, the Bhuri Singh museum for the Pahari miniatures, and the Chaugan — a long grass promenade the whole town walks in the evening.",
        "Fifty kilometres that take two hours, which is why it is a night rather than an afternoon. Drive down Saturday morning, the temple complex before the light goes, the Chaugan in the evening, the museum on Sunday and back up by lunch.",
        '/distance/dalhousie-to-chamba'),
      g('Bharmour', 110, '4 hours', 1, 'May-Oct',
        "The Chaurasi temple complex — eighty-four shrines around one courtyard at 2,200 metres, the Manimahesh Shiva temple among them, and the Gaddi shepherd country that surrounds it. This is the oldest continuously worshipped site in the district.",
        "Four hours each way on a mountain road rules out a day trip entirely. One night in Bharmour gets you the courtyard early, when the resident families are the only people in it, which is the whole reason to come.",
        '/distance/dalhousie-to-bharmour'),
      g('Dharamshala and McLeodganj', 125, '4-4.5 hours', 1, 'Mar-Jun, Sep-Nov',
        "The Dalai Lama's temple and the Namgyal monastery at McLeodganj, the Bhagsunag waterfall above it, the Tibetan quarter, and the cricket ground at Dharamshala with the Dhauladhar standing directly behind it.",
        "Leave early and you are in McLeodganj for lunch. The temple complex in the afternoon, the Bhagsu walk at first light on Sunday, and the drive back through the Kangra valley.",
        '/distance/dalhousie-to-dharamshala'),
      g('Amritsar', 190, '5 hours', 1, 'Oct-Mar',
        "The Golden Temple, which is worth both the night prayer and the four o'clock morning, Jallianwala Bagh beside it, the Partition Museum in the old town hall, and the border ceremony at Wagah in the late afternoon.",
        "Five hours down from the hills. Reach by afternoon, Wagah at sunset, the Golden Temple after dark when the marble is cool and empty, and back there before dawn on Sunday. The temple at 4am is the reason to stay the night.",
        '/distance/dalhousie-to-amritsar'),
      g('Manali', 320, '9-10 hours', 2, 'Mar-Jun, Sep-Nov',
        "Solang for the paragliding and the snow line, the Atal Tunnel through to Lahaul, Hadimba temple in the deodar above the town, and the Old Manali side of the river for the cafes.",
        "Nine to ten hours through Kangra and the Mandi valleys, which makes this a two-night trip and not a weekend in the ordinary sense. One night here is two full days of driving for one afternoon.",
        '/distance/dalhousie-to-manali'),
      g('Shimla', 350, '10 hours', 2, 'Mar-Jun, Sep-Nov',
        "The Ridge and Mall Road, Jakhu temple on the hill above, Viceregal Lodge for the empire architecture, and Kufri above the town for the forest and the views.",
        "Ten hours, the longest drive on this list, and the reason is that there is no direct road — you come down to the plains and back up again. Two nights at least, and honestly better reached from Chandigarh than from here.",
        '/distance/dalhousie-to-shimla'),
    ],
    faqs: [
      { question: 'Why are Manali and Shimla so far from Dalhousie?',
        answer: 'Because there is no road across the ranges between them. Dalhousie is in the Chamba corner of Himachal and reaching Kullu or Shimla means descending to the Kangra valley or the plains and climbing again — nine to ten hours despite the modest distance on a map. For those two, Chandigarh is a far better starting point.' },
      { question: 'Is Khajjiar a weekend trip from Dalhousie?',
        answer: 'No, and that is why it is not on this list. Khajjiar is 22 km away, about an hour, and is comfortably a half day with Kalatop on the way. It belongs on the day-trip page rather than here, where every entry is somewhere a night actually buys you something.' },
      { question: 'Which weekend from Dalhousie is the most worthwhile?',
        answer: 'Bharmour, if you want somewhere almost nobody goes — eighty-four shrines in one courtyard at 2,200 metres, four hours of mountain road away. Amritsar if you want the single best thing to see, because the Golden Temple before dawn is only available to people who stayed the night.' },
      { question: 'When should I not drive out of Dalhousie for a weekend?',
        answer: 'July and August. The Chamba and Bharmour roads are landslide-prone in the monsoon and the views that justify the drive are not there. Mid-March to June and September to November are the windows, and the Bharmour road is effectively a summer road.' },
      { question: 'How much does a weekend trip from Dalhousie cost by car?',
        answer: 'Each destination carries its return fare, computed from the published round-trip rate card. Chamba, Bharmour, Dharamshala and Amritsar all price from the round-trip minimum; Manali and Shimla are above it because of the distance. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are charged at actuals.' },
    ],
  },

  kasol: {
    slug: 'kasol',
    city: 'Kasol',
    heroTitle: 'Weekend Getaways from Kasol by Car',
    heroSubtitle:
      'Six places worth a night from Kasol, priced as a return journey with a chauffeur.',
    heroImage: '/images/sightseeing/Kasol/Kasol_hero_section.jpg',
    intro: [
      "Kasol is a village on the Parvati river at about 1,640 metres, and it is a base rather than a destination — the valley above it is walked, and everything else is reached by coming back down to Bhuntar and turning.",
      "That junction is the thing that shapes a weekend from here. Bhuntar is fifty minutes down the valley, and from it the Kullu road runs north to Manali and south towards Mandi, Jibhi and eventually Shimla. Spiti goes east over Kunzum when the pass is open.",
      "Return fares come from the published round-trip rate card rather than being quoted by hand.",
    ],
    destinations: [
      g('Manali', 75, '2.5-3 hours', 1, 'Mar-Jun, Sep-Nov',
        "Solang valley for paragliding and the snow line, the Atal Tunnel through to the Lahaul side, Hadimba temple in the deodars, and the Vashisht hot springs above the river.",
        "Down the Parvati to Bhuntar and up the Beas. Close enough that you could day-trip it and much better with a night, because Solang in the early morning is a different place from Solang at noon.",
        '/distance/kasol-to-manali'),
      g('Jibhi and Tirthan Valley', 120, '4 hours', 1, 'Mar-Jun, Sep-Nov',
        "The Tirthan river for trout, the Jalori Pass road above Jibhi at 3,120 metres, Serolsar lake an hour's walk beyond it, and the edge of the Great Himalayan National Park.",
        "Four hours via Bhuntar and Aut. Arrive Saturday afternoon, Jalori Pass and the Serolsar walk early on Sunday before the cloud builds, then back down the Tirthan. The pass closes in winter snow.",
        '/distance/kasol-to-jibhi'),
      g('Bir Billing', 200, '6 hours', 1, 'Mar-Jun, Sep-Nov',
        "The paragliding take-off at Billing above the landing field at Bir, the Tibetan colony and its monasteries in the village, and the tea country of the Kangra valley spread out below.",
        "Six hours by road through Mandi and the Kangra valley. The flying is a morning activity because the thermals are reliable then, which means arriving the day before — a night is not optional here, it is the point.",
        '/distance/kasol-to-bir'),
      g('Dharamshala and McLeodganj', 230, '7 hours', 2, 'Mar-Jun, Sep-Nov',
        "The Dalai Lama's temple and Namgyal monastery, the Bhagsunag waterfall, the Tibetan quarter of McLeodganj, and the cricket ground with the Dhauladhar behind it.",
        "Seven hours each way makes this a two-night trip rather than a weekend. If you only have one night, Bir on the same road is three hours closer and a better use of the time.",
        '/distance/kasol-to-dharamshala'),
      g('Shimla', 230, '7 hours', 2, 'Mar-Jun, Sep-Nov',
        "The Ridge, Mall Road, Jakhu temple above the town, Viceregal Lodge, and the Kufri forest and viewpoints beyond.",
        "Seven hours down the Kullu valley and along to the Shimla ridge. Two nights to be worth it. The drive itself through Mandi and Bilaspur is a good deal of the appeal.",
        '/distance/kasol-to-shimla'),
      g('Kaza and Spiti', 180, '8-9 hours', 2, 'Jun-Sep only',
        "Key monastery above the Spiti river, Kibber at 4,200 metres, the Pin valley, and Chandratal on the way over if the track is open — high cold desert, entirely unlike the valley you started in.",
        "Over the Kunzum La, which is open roughly June to September and shut by snow the rest of the year. Eight to nine hours on rough road at altitude. This is a three-day trip at minimum and should never be attempted as a weekend.",
        '/distance/kasol-to-kaza'),
    ],
    faqs: [
      { question: 'Why does every trip from Kasol start by going down the valley?',
        answer: 'Because the Parvati valley is a dead end for vehicles — above Barshaini the routes are walking tracks to Kheerganga and Tosh. Everything by road goes back down to Bhuntar, about fifty minutes, and turns from there. Add that fifty minutes to the start and end of every drive on this list.' },
      { question: 'Can I do Spiti as a weekend from Kasol?',
        answer: 'No. The Kunzum La is only open roughly June to September, the road is rough and high, and it is eight to nine hours each way. Spiti needs three days minimum and is genuinely dangerous to rush at that altitude. We will say so rather than quote it as a weekend.' },
      { question: 'Is Kheerganga a weekend trip?',
        answer: 'It is a trek rather than a drive — the road ends at Barshaini, about 16 km up the valley, and the hot springs are a few hours of walking beyond that. It is an overnight, but it is not a destination you take a car to, so it is not on this list.' },
      { question: 'Which weekend from Kasol needs only one night?',
        answer: 'Manali at under three hours, Jibhi at four, and Bir at six. Dharamshala, Shimla and Spiti are all two nights or more. Bir is the one where the night is structurally necessary, because paragliding runs on morning thermals.' },
      { question: 'How much does a weekend trip from Kasol cost by car?',
        answer: 'Each destination carries its return fare, computed from the published round-trip rate card. Manali, Jibhi and Bir price from the round-trip minimum; Dharamshala, Shimla and Kaza are above it. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are charged at actuals.' },
    ],
  },

  mcleodganj: {
    slug: 'mcleodganj',
    city: 'McLeodganj',
    heroTitle: 'Weekend Getaways from McLeodganj by Car',
    heroSubtitle:
      'Six places worth a night from McLeodganj, priced as a return journey with a chauffeur.',
    heroImage: '/images/sightseeing/Dharamshala/McLeod_Ganj.jpg',
    intro: [
      "McLeodganj sits above Dharamshala at about 2,080 metres with the Dhauladhar directly behind it, and it is the best-placed hill base in Himachal for a weekend — the Kangra valley runs east and west from below it with good road in both directions.",
      "East is Bir and the paragliding, and eventually Mandi and Kullu. West and north is Chamba district and Dalhousie. South is Punjab, with Amritsar five and a half hours down.",
      "Return fares come from the published round-trip rate card rather than being quoted by hand.",
    ],
    destinations: [
      g('Bir Billing', 65, '2 hours', 1, 'Mar-Jun, Sep-Nov',
        "The take-off at Billing and the landing ground at Bir, which is one of the more reliable paragliding sites anywhere, plus the Tibetan colony, its monasteries and the tea gardens around Palampur on the way.",
        "Two hours east along the Kangra valley. The flying is a morning business because that is when the thermals work, so you want to be there the night before — which is the whole argument for a night rather than a day trip.",
        '/distance/mcleodganj-to-bir'),
      g('Dalhousie', 125, '4 hours', 1, 'Mar-Jun, Sep-Nov',
        "A colonial hill station across five wooded hills at 1,970 metres — St John's Church, the Panchpula stream, Dainkund peak above it and the Kalatop forest on the Khajjiar road.",
        "Four hours north through Nurpur and Banikhet. Arrive Saturday afternoon, Dainkund for the evening, and Khajjiar and Kalatop on Sunday morning on the way back out. Dalhousie itself is a walking town.",
        '/distance/mcleodganj-to-dalhousie'),
      g('Khajjiar', 145, '4.5 hours', 1, 'Mar-Jun, Sep-Nov',
        "A saucer of meadow ringed with deodar at about 1,950 metres with a small lake in the middle of it, the Khajji Nag temple at the edge, and the Kalatop wildlife sanctuary on the road in.",
        "Best taken with Dalhousie rather than instead of it — they are an hour apart. One night at Dalhousie, Khajjiar at first light on Sunday before the day crowd arrives from Chamba, then home.",
        '/distance/mcleodganj-to-khajjiar'),
      g('Amritsar', 200, '5.5 hours', 1, 'Oct-Mar',
        "The Golden Temple, Jallianwala Bagh, the Partition Museum, and the border ceremony at Wagah in the late afternoon. The temple is the one sight in North India worth planning a night around.",
        "Down out of the hills through Pathankot. Reach by mid-afternoon, Wagah at sunset, the temple after dark and again before dawn on Sunday. The four o'clock morning service is why you stay.",
        '/distance/mcleodganj-to-amritsar'),
      g('Manali', 230, '7-8 hours', 2, 'Mar-Jun, Sep-Nov',
        "Solang for the snow line and the paragliding, the Atal Tunnel to Lahaul, Hadimba temple, and Old Manali across the river for the cafes.",
        "Seven to eight hours via Mandi, which makes it a two-night trip. Bir on the same road is three hours closer if what you actually want is a night in the mountains rather than Manali specifically.",
        '/distance/mcleodganj-to-manali'),
      g('Shimla', 320, '9 hours', 2, 'Mar-Jun, Sep-Nov',
        "The Ridge and Mall Road, Jakhu temple, Viceregal Lodge, and Kufri above the town. A hill station of a different kind — urban where McLeodganj is a village.",
        "Nine hours through Mandi and Bilaspur. Two nights minimum and arguably not worth it from here at all; Shimla is a Chandigarh trip. Included because people ask, with the honest drive time attached.",
        '/distance/mcleodganj-to-shimla'),
    ],
    faqs: [
      { question: 'Is McLeodganj a good base for weekend trips?',
        answer: 'The best of the Himachal hill towns for it. The Kangra valley gives you good road east and west, so Bir is two hours, Dalhousie four and Amritsar five and a half. Compare Dalhousie, where the same destinations are two to four hours further because of how the ranges run.' },
      { question: 'Should I do Dalhousie and Khajjiar on the same weekend?',
        answer: 'Yes — they are an hour apart and doing one without the other wastes the drive. Stay the night at Dalhousie and take Khajjiar early on Sunday, before the day visitors come up from Chamba.' },
      { question: 'Which weekend from McLeodganj is best for a first visit?',
        answer: 'Bir, at two hours. It is close enough that the drive is not the trip, the paragliding is genuinely world-class, and the tea gardens around Palampur make the road itself worth something. Amritsar if you would rather have a city and a great building.' },
      { question: 'When is the worst time for a weekend drive from McLeodganj?',
        answer: 'July and August. The Kangra valley gets heavy monsoon rain, the Chamba and Dalhousie roads are landslide-prone, and paragliding at Bir stops in the monsoon because the conditions are not flyable. March to June and September to November are the real seasons.' },
      { question: 'How much does a weekend trip from McLeodganj cost by car?',
        answer: 'Each destination carries its return fare, computed from the published round-trip rate card. Bir, Dalhousie, Khajjiar and Amritsar all price from the round-trip minimum; Manali and Shimla are above it. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are charged at actuals.' },
    ],
  },

  prayagraj: {
    slug: 'prayagraj',
    city: 'Prayagraj',
    heroTitle: 'Weekend Getaways from Prayagraj by Car',
    heroSubtitle:
      'Five places worth a night from Prayagraj, priced as a return journey with a chauffeur.',
    heroImage: '/images/sightseeing/Prayagraj/Triveni_Sangam.jpg',
    intro: [
      "Prayagraj sits at the confluence of the Ganga and the Yamuna, and for weekends it is the best-placed city in eastern Uttar Pradesh — Varanasi, Ayodhya, Lucknow and Chitrakoot are all within four and a half hours, in four different directions.",
      "That spread is unusual. Most cities on this list have one good road; Prayagraj has four, and they lead to four genuinely different kinds of trip — a riverfront city, a temple town, a colonial-Nawabi capital and a forested pilgrimage valley.",
      "Return fares come from the published round-trip rate card rather than being quoted by hand.",
    ],
    destinations: [
      g('Mirzapur and Vindhyachal', 90, '2 hours', 1, 'Oct-Mar',
        "The Vindhyavasini temple at Vindhyachal, one of the Shakti Peethas, the Chunar fort above the Ganga on the way, and the carpet-weaving workshops Mirzapur is known for.",
        "Two hours down the Ganga. Chunar fort in the afternoon on the way out, the temple in the evening and again early — it is busiest in the middle of the day — and the weavers on Sunday morning.",
        '/distance/prayagraj-to-mirzapur'),
      g('Varanasi', 125, '3 hours', 1, 'Oct-Mar',
        "The ghats from the water at first light, the evening aarti at Dashashwamedh, Sarnath eight kilometres out where the Buddha first taught, and the lanes of the old city behind the river.",
        "Three hours east. The reason to stay the night is the boat at dawn — the ghats from the river as the light comes up is the thing people remember, and it is not available to a day visitor. Aarti on Saturday evening, boat on Sunday morning.",
        '/distance/prayagraj-to-varanasi'),
      g('Chitrakoot', 130, '3.5 hours', 1, 'Oct-Mar',
        "Ramghat on the Mandakini, Kamadgiri hill which pilgrims circle on foot, the Gupt Godavari caves with a stream running through them, and Hanuman Dhara above the valley.",
        "Three and a half hours south-west into the Vindhyan hills. Quieter than anywhere else on this list. Ramghat for the evening lamps, the Kamadgiri circuit early on Sunday when it is cool, and the caves after.",
        '/distance/prayagraj-to-chitrakoot'),
      g('Ayodhya', 170, '4 hours', 1, 'Oct-Mar',
        "The Ram temple complex, Hanuman Garhi above the town, the Saryu ghats for the evening aarti, and Nandigram and Bharatkund on the edges for the quieter end of the story.",
        "Four hours north-west. Arrive Saturday afternoon, the ghats at dusk, and the temple complex at opening on Sunday — it is substantially less crowded in the first hour than at any other time of day.",
        '/distance/prayagraj-to-ayodhya'),
      g('Lucknow', 200, '4.5 hours', 1, 'Oct-Mar',
        "The Bara Imambara and its labyrinth, the Residency ruins left as they were after 1857, Chota Imambara, and the Awadhi food in Chowk and Aminabad which is half the reason to come.",
        "Four and a half hours. A city weekend rather than a sight — the Imambaras and the Residency on Saturday afternoon and Sunday morning, and two long meals in between, which is the correct way to spend a night in Lucknow.",
        '/distance/prayagraj-to-lucknow'),
    ],
    faqs: [
      { question: 'Which weekend from Prayagraj is the best single trip?',
        answer: 'Varanasi, for one specific reason: the boat along the ghats at first light. That is the thing people remember from Varanasi and it is only available if you slept there. Three hours out, aarti in the evening, the river at dawn.' },
      { question: 'Is Chitrakoot worth a weekend?',
        answer: 'If you want somewhere quiet, yes — it is the least visited place on this list by a wide margin, in forested Vindhyan hills, and the Kamadgiri circuit on a cool morning is genuinely memorable. It is a pilgrimage valley rather than a sightseeing town, which suits some travellers and not others.' },
      { question: 'Can I do Varanasi as a day trip from Prayagraj?',
        answer: 'You can — three hours each way — but it removes the two best parts. The dawn boat and the evening aarti are at opposite ends of the day, and a day visitor gets at most one of them. This is the clearest case on the list for taking the night.' },
      { question: 'When is the best time for weekends out of Prayagraj?',
        answer: 'October to March. The plains here are very hot from April to June — above 45°C in May — and the monsoon raises the rivers, which matters for the ghats at both Varanasi and Chitrakoot. Winter mornings are foggy on these highways, so start later rather than earlier.' },
      { question: 'How much does a weekend trip from Prayagraj cost by car?',
        answer: 'Each destination carries its return fare, computed from the published round-trip rate card. All five price from the round-trip minimum, since none exceeds it. Fuel, the driver and GST are included; tolls, parking and the driver night allowance are charged at actuals.' },
    ],
  },

  ranthambore: {
    slug: 'ranthambore',
    city: 'Ranthambore',
    heroTitle: 'Weekend Getaways from Ranthambore by Car',
    heroSubtitle:
      'Six places worth a night from Ranthambore, priced as a return journey with a chauffeur.',
    heroImage: '/images/sightseeing/Ranthambore/Ranthambore_hero_section.jpg',
    intro: [
      "Ranthambore is a national park with a town, Sawai Madhopur, attached to it, and almost everybody who comes here comes for the safaris and leaves. That is a reasonable way to use it and it misses what is around.",
      "The park sits in the gap between the Jaipur road and the Hadoti country to the south, which means Bundi and Kota are closer from here than from anywhere people usually start, and Bundi in particular is the most underrated town in Rajasthan.",
      "Return fares come from the published round-trip rate card rather than being quoted by hand.",
    ],
    destinations: [
      g('Bundi', 110, '2.5 hours', 1, 'Oct-Mar',
        "The Garh Palace with the Chitrashala murals, which are the finest surviving Rajput wall paintings anywhere, Taragarh fort above it, Raniji ki Baori and the other step-wells in the old town, and Jait Sagar lake.",
        "Two and a half hours south. The Chitrashala needs morning light to be seen properly, so the night matters — arrive Saturday, the step-wells and the lake in the afternoon, and the palace murals at opening on Sunday.",
        '/distance/ranthambore-to-bundi'),
      g('Kota', 150, '3 hours', 1, 'Oct-Mar',
        "The City Palace and its museum on the Chambal, the Kota Barrage and the river gorge below it, Jagmandir on the Kishore Sagar lake, and the Chambal gardens on the edge of town.",
        "Three hours, and best paired with Bundi rather than done alone — the two are forty kilometres apart and were once one kingdom. Bundi Saturday, Kota Sunday, home Sunday evening.",
        '/distance/ranthambore-to-kota'),
      g('Jaipur', 160, '3.5 hours', 1, 'Oct-Feb',
        "Amber Fort and the Maota lake, the walled city with the City Palace, Hawa Mahal and Jantar Mantar, and Nahargarh above the town for the long evening view.",
        "Three and a half hours north on good road. Amber deserves the first hour of the day, which argues for the night: in Jaipur Saturday afternoon, the walled city in the evening, Amber at opening on Sunday.",
        '/distance/ranthambore-to-jaipur'),
      g('Bharatpur and Keoladeo', 230, '4.5 hours', 1, 'Nov-Feb',
        "Keoladeo national park, which is a wetland rather than a forest and is walked or cycled rather than driven, with the migratory season at its peak in January, plus Lohagarh fort in the town and Deeg palace nearby.",
        "Four and a half hours. A deliberate contrast with Ranthambore — birds instead of tigers, bicycles instead of jeeps, and silence instead of radio chatter. Arrive Saturday, the park at dawn on Sunday when the birds are active.",
        '/distance/ranthambore-to-bharatpur'),
      g('Pushkar', 250, '5 hours', 1, 'Oct-Mar',
        "The lake and its fifty-two ghats, the Brahma temple which is among very few anywhere, the bazaar that rings the water, and Savitri temple on the hill above for sunrise over the whole town.",
        "Five hours west. A small town that is walked rather than driven, which makes it a restful weekend after the park. Savitri at sunrise on Sunday is the one thing to plan around.",
        '/distance/ranthambore-to-pushkar'),
      g('Chittorgarh', 290, '5.5 hours', 1, 'Oct-Mar',
        "The largest fort in India by area — Vijay Stambh, Kirti Stambh, the Rana Kumbha palace, Padmini's palace and the Gaumukh reservoir, spread across a plateau that takes a full morning to drive and walk.",
        "Five and a half hours south-west. The fort is too big for an afternoon, which is the whole case for the night. Arrive Saturday evening, and give the plateau from opening until lunch on Sunday.",
        '/distance/ranthambore-to-chittorgarh'),
    ],
    faqs: [
      { question: 'What is the best weekend trip from Ranthambore?',
        answer: 'Bundi, comfortably. Two and a half hours, and the Chitrashala murals in the Garh Palace are the best Rajput wall paintings that survive anywhere, in a town that sees a fraction of the visitors Jaipur or Udaipur do. Pair it with Kota, forty kilometres on.' },
      { question: 'Should I combine Bundi and Kota?',
        answer: 'Yes. They are forty kilometres apart and were one kingdom until the seventeenth century, so the palaces read as a pair. Bundi on Saturday, Kota on Sunday, and the drive between them is under an hour.' },
      { question: 'Does the park closure affect weekend plans?',
        answer: 'It is the reason to have them. Ranthambore closes its core zones for the monsoon, roughly July to September, and safaris stop. That is exactly when Bundi, Kota and Chittorgarh are still perfectly visitable, so a closed park does not have to mean a cancelled trip.' },
      { question: 'Is Keoladeo worth four and a half hours?',
        answer: 'In January, yes — it is a wetland at the peak of the migratory season and you walk or cycle it rather than driving, which is the opposite experience to a jeep safari. Outside November to February it is much less compelling, and we would point you at Bundi instead.' },
      { question: 'How much does a weekend trip from Ranthambore cost by car?',
        answer: 'Each destination carries its return fare, computed from the published round-trip rate card. Bundi, Kota, Jaipur, Bharatpur and Pushkar price from the round-trip minimum; Chittorgarh is marginally above it. Fuel, the driver and GST are included; tolls, parking, park fees and the driver night allowance are charged at actuals.' },
    ],
  },

  srinagar: {
    slug: 'srinagar',
    city: 'Srinagar',
    heroTitle: 'Weekend Getaways from Srinagar by Car',
    heroSubtitle:
      'Five places worth a night from Srinagar, priced as a return journey with a chauffeur.',
    heroImage: '/images/sightseeing/Srinagar/Dal_Lake_Shikara.jpg',
    intro: [
      "Srinagar is unusual among the cities on this list in that its best weekends are short. Gulmarg, Sonamarg and Pahalgam are all within three hours, and all three are high enough to be genuinely different from the valley floor.",
      "The exception is Leh, which is twelve hours and two high passes away over Zoji La and Fotu La, open only in the summer months. That one is an expedition rather than a weekend and is listed with the honest drive time attached.",
      "Return fares come from the published round-trip rate card rather than being quoted by hand.",
    ],
    destinations: [
      g('Gulmarg', 50, '2 hours', 1, 'Dec-Mar for snow, May-Sep for meadow',
        "The gondola up towards Apharwat in two stages, the highest golf course in the world in summer, the alpine meadow the name refers to, and the most serious ski terrain in India from January to March.",
        "Two hours, so the night is about timing rather than distance. The gondola queue is long by mid-morning and the weather closes in the afternoon, so staying up means riding it first thing — which is the difference between seeing Apharwat and queuing for it.",
        '/distance/srinagar-to-gulmarg'),
      g('Pahalgam', 90, '2.5-3 hours', 1, 'Apr-Oct',
        "The Lidder valley, Betaab and Aru valleys above the town, Chandanwari where the Amarnath track begins, and the pine forest and river meadows that make this the gentlest of the three hill stations.",
        "Under three hours up the Lidder. Aru and Betaab are each an hour beyond Pahalgam and are the reason for the night — both are better early, and a day visitor from Srinagar reaches them at the worst time of day.",
        '/distance/srinagar-to-pahalgam'),
      g('Sonamarg', 80, '2.5-3 hours', 1, 'May-Oct only',
        "The Thajiwas glacier, reached on foot or pony from the meadow, the Sindh river running through it, and the Zoji La road climbing out above the town towards Ladakh.",
        "Two and a half to three hours. The road is closed by snow for much of the winter and Sonamarg effectively shuts — this is a May to October destination and nothing else. Thajiwas in the morning, before the pony traffic.",
        '/distance/srinagar-to-sonamarg'),
      g('Verinag and Kokernag', 80, '2.5 hours', 1, 'Apr-Oct',
        "The Verinag spring, which is the source of the Jhelum, inside a Mughal octagonal tank, the Kokernag gardens and trout farm, and Achabal, the quietest of the Mughal gardens in the valley.",
        "Two and a half hours south, and the least visited of these. A night makes it a calm weekend rather than a rushed circuit — the three sites are spread along the same road and are all better without a crowd.",
        '/distance/srinagar-to-verinag'),
      g('Leh', 420, '12+ hours', 2, 'Jun-Sep only',
        "Leh palace above the old town, Pangong and Nubra beyond it, Khardung La, and the monasteries at Thiksey, Hemis and Alchi on the way in — high cold desert on the other side of the Himalaya.",
        "Twelve hours and more over Zoji La and Fotu La, open roughly June to September. Two nights is the absolute minimum and three is honest, with a day at Leh to acclimatise before going higher. This is not a weekend and we will not sell it as one.",
        '/distance/srinagar-to-leh'),
    ],
    faqs: [
      { question: 'Why stay the night in Gulmarg when it is only two hours away?',
        answer: 'The gondola. By mid-morning the queue is long and by afternoon the weather often closes in, so the only reliable way to ride it to the second stage is to be there when it opens — which means sleeping up there. Day visitors from Srinagar routinely queue and then lose the weather.' },
      { question: 'Which of Gulmarg, Pahalgam and Sonamarg should I pick?',
        answer: 'Gulmarg for the gondola and for snow between January and March. Pahalgam for forest, river and the Aru and Betaab valleys, and the gentlest of the three. Sonamarg for the glacier, but only between May and October — the road closes in winter.' },
      { question: 'Can I drive to Leh for a weekend from Srinagar?',
        answer: 'No. It is twelve hours and more each way over two high passes, open only about June to September, and arriving at Leh altitude after that drive needs a day of acclimatisation before going anywhere higher. Three days is the honest minimum and we would rather say so.' },
      { question: 'Is Sonamarg open in winter?',
        answer: 'Largely not. Snow closes the road for much of the winter and the town effectively shuts, with Zoji La beyond it closed for longer still. Treat Sonamarg as a May to October destination and go to Gulmarg instead in the snow season.' },
      { question: 'How much does a weekend trip from Srinagar cost by car?',
        answer: 'Each destination carries its return fare, computed from the published round-trip rate card. Gulmarg, Pahalgam, Sonamarg and Verinag all price from the round-trip minimum; Leh is well above it. Fuel, the driver and GST are included; tolls, parking, permits and the driver night allowance are charged at actuals.' },
    ],
  },

  vrindavan: {
    slug: 'vrindavan',
    city: 'Vrindavan',
    heroTitle: 'Weekend Getaways from Vrindavan by Car',
    heroSubtitle:
      'Five places worth a night from Vrindavan, priced as a return journey with a chauffeur.',
    heroImage: '/images/sightseeing/Mathura_Vrindavan/Prem_Mandir.jpg',
    intro: [
      "Vrindavan is the best-placed small town in this part of the country for a weekend, and most visitors never find out because they arrive for the temples and leave the same way.",
      "It sits between the Yamuna Expressway and the Agra road, which puts Agra ninety minutes away, Bharatpur an hour and a half, Delhi three hours and Jaipur four. Four weekends in four directions, all on good fast road, which is rare.",
      "Return fares come from the published round-trip rate card rather than being quoted by hand.",
    ],
    destinations: [
      g('Bharatpur and Keoladeo', 60, '1.5 hours', 1, 'Nov-Feb',
        "Keoladeo national park, a wetland walked or cycled rather than driven, at its peak for migratory birds in January, with Lohagarh fort in the town and the Deeg water palace half an hour on.",
        "Ninety minutes. The park is a dawn place — the birds are active early and the light is better — so arrive Saturday, Deeg in the afternoon, and be at the Keoladeo gate when it opens on Sunday.",
        '/distance/vrindavan-to-bharatpur'),
      g('Agra', 70, '1.5-2 hours', 1, 'Oct-Mar',
        "The Taj at sunrise, Agra Fort across the river from it, Itimad-ud-Daulah which is the better building for a quiet hour, and Mehtab Bagh on the far bank for the evening view.",
        "Ninety minutes down the expressway. The entire argument for the night is the sunrise — the Taj in the first half hour after opening is a different building from the Taj at eleven, and that is not available to a day visitor from here.",
        '/distance/vrindavan-to-agra'),
      g('Fatehpur Sikri', 90, '2 hours', 1, 'Oct-Mar',
        "Akbar's abandoned capital on its ridge — the Buland Darwaza, the Panch Mahal, Jodha Bai's palace and the Diwan-i-Khas, all in red sandstone and almost entirely intact.",
        "Two hours, and best taken as the second day of an Agra weekend rather than on its own — it is forty kilometres beyond Agra on the Jaipur road. Taj at sunrise Sunday, Fatehpur Sikri by mid-morning, home by evening.",
        '/distance/vrindavan-to-fatehpur-sikri'),
      g('Delhi', 150, '3 hours', 1, 'Oct-Mar',
        "Humayun's tomb, Qutub Minar, the Red Fort and Jama Masjid in the old city, Lodhi gardens, and whatever is on at the museums and auditoriums — which is the real reason to spend a night rather than a day.",
        "Three hours up the Yamuna Expressway. A city weekend: monuments on Saturday afternoon, something booked on Saturday evening, and Old Delhi on Sunday morning before the traffic builds.",
        '/distance/vrindavan-to-delhi'),
      g('Jaipur', 215, '4 hours', 1, 'Oct-Feb',
        "Amber Fort and the Maota lake below it, the walled city with the City Palace, Hawa Mahal and Jantar Mantar, and Nahargarh on the ridge for the evening view over the whole city.",
        "Four hours west. Amber wants the first hour of the day, so the shape is: drive Saturday morning, walled city in the afternoon and evening, Amber at opening on Sunday, home by night.",
        '/distance/vrindavan-to-jaipur'),
    ],
    faqs: [
      { question: 'Is Agra a day trip or a weekend from Vrindavan?',
        answer: 'It is ninety minutes, so it can be either — but the Taj at sunrise is the whole reason to take the night. The first half hour after opening is a different experience from the rest of the day, and a day visitor leaving Vrindavan cannot reach it in time.' },
      { question: 'Are Mathura, Barsana and Gokul on this list?',
        answer: 'No, and deliberately. They are all within half an hour of Vrindavan and belong on the day-trip page — Barsana is 25 km, Gokul and Mahavan about the same, Mathura ten minutes. This list is only places where a night buys you something.' },
      { question: 'Which weekend from Vrindavan is the most underrated?',
        answer: 'Bharatpur in January. Keoladeo at the peak of the migratory season, walked or cycled rather than driven, ninety minutes away and almost nobody from Vrindavan goes. Add the Deeg water palace, which very few visitors to Rajasthan ever see.' },
      { question: 'When should I avoid these drives?',
        answer: 'May and June are brutally hot across the whole Braj and Agra region, above 45°C, which makes monument visits unpleasant by ten in the morning. December and January mornings bring dense fog on the expressways, so start mid-morning rather than at dawn. October to March otherwise.' },
      { question: 'How much does a weekend trip from Vrindavan cost by car?',
        answer: 'Each destination carries its return fare, computed from the published round-trip rate card. All five price from the round-trip minimum, since none exceeds it. Fuel, the driver and GST are included; tolls, parking, monument fees and the driver night allowance are charged at actuals.' },
    ],
  },
};
