// src/utilis/weekendGetawaysData.js
//
// Weekend getaway lists for the 22 cab-hub cities that have none.
//
// WHY THIS SHAPE, AND WHY IT IS NOT THE DAY-TRIP PAGE AGAIN
// ---------------------------------------------------------
// Twenty-eight cities have a `/places-to-visit-near-{city}` day-trip list. Six
// have a weekend page. These are the other twenty-two.
//
// The danger with building them is obvious and worth naming: a weekend list and
// a day-trip list for the same city, drawn from the same destination pool, are
// the same page twice. That is precisely the "scaled templated pages" signal the
// Week 47 audit found the site carrying, and the Week 53 family audit measured
// its cost — families whose pages differ only by a name came out at 4.0-10.9%
// unique share.
//
// So the two shapes are separated by the thing that actually distinguishes them
// for a traveller:
//
//   A DAY TRIP is bounded by having to get back the same evening. The near-city
//   pages take destinations up to 150 km and price a single day.
//
//   A WEEKEND is bounded by having two or three days and wanting somewhere worth
//   sleeping. These pages take destinations that justify a night — mostly 150 to
//   500 km — and price the round trip, with the Saturday-out, Sunday-back shape
//   written for each one.
//
// A handful of destinations appear on both lists for a city, which is honest:
// Rishikesh from Delhi is a long day or a comfortable weekend. Where that
// happens the weekend entry says what the extra night buys, so the two pages
// answer different questions about the same place rather than repeating one
// answer.
//
// EVERY FARE IS COMPUTED, NOT WRITTEN
// -----------------------------------
// The six existing weekend pages carry hand-typed fares (`sedanPrice: '₹4,500'`).
// Record K set out why that is the wrong design: the wedding pages ended up
// advertising "from Rs 15,000" above a table starting at Rs 12,000. Here the
// records carry only a distance, and both fares come from
// `calcRoundTripFares` — the same function the 79 live round-trip pages quote
// from. Change a distance and the fares move with it.
//
// AND NO FABRICATED RATINGS
// -------------------------
// The existing pages also carry a per-destination `rating: 4.9`. There is no
// rating for "Agra as a weekend destination" and nobody collected one. The
// template fingerprint audit found a fabricated review layer on 3,417 pages and
// this is the same thing in miniature, so it is left out rather than carried
// forward.

import { calcRoundTripFares } from './roundTripData';
import { servedHref } from '@/lib/seo/route-exists';

/**
 * One weekend destination.
 *
 * @param name         Destination as a traveller names it.
 * @param km           Road distance one way. The only figure typed in.
 * @param driveTime    Realistic door-to-door driving time, one way.
 * @param nights       1 for a two-day weekend, 2 where the drive makes one night
 *                     a waste of the journey.
 * @param bestSeason   When it is actually worth going.
 * @param whatYouDo    What there is to do, specific to the place.
 * @param weekendShape How the two or three days actually run, including the
 *                     departure time that makes it work.
 * @param bookingSlug  An on-site page for the journey, resolved before render.
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

export const weekendGetaways = {
  // ─────────────────────────────────────────────────────────────────────
  agra: {
    slug: 'agra',
    city: 'Agra',
    heroTitle: 'Weekend Getaways from Agra by Car',
    heroSubtitle:
      'Nine places worth a night from Agra, with the drive, the fares and how the weekend actually runs.',
    heroImage: '/images/sightseeing/Agra/Agra_Hero_section.jpg',
    intro: [
      'Agra sits at an unusual junction. It is three hours from Delhi, four from Jaipur and two from ' +
        'the Braj temple towns, which means a weekend from here can go in four genuinely different ' +
        'directions without a long first day in the car.',
      'What it does not have is hills. The nearest real hill station is seven hours away, so a weekend ' +
        'from Agra is about forts, river towns, wildlife and temple country rather than about altitude. ' +
        'The list below is ordered by distance and every entry says what a night buys over a day trip.',
      'Fares are for the full return journey with a chauffeur, computed from the published round-trip ' +
        'rate card rather than quoted by hand, so they match what the booking page will say.',
    ],
    destinations: [
      g('Mathura and Vrindavan', 60, '1-1.5 hours', 1, 'Oct-Mar, and Holi in March',
        'The Krishna birthplace complex at Mathura and, eleven kilometres on, Vrindavan\'s dense ' +
        'cluster of temples — Banke Bihari, the Prem Mandir, ISKCON. The Yamuna ghats at Vishram ' +
        'Ghat take an evening aarti that most day visitors miss entirely.',
        'An hour\'s drive means you can leave Agra after breakfast. The night is the point: Vrindavan ' +
        'opens its temples at four in the morning and the mangala aarti is the one thing a day trip ' +
        'from Agra cannot reach. Back by Sunday lunch.',
        '/sightseeing/mathura'),
      g('Bharatpur', 55, '1 hour', 1, 'Nov-Feb for the migratory birds',
        'Keoladeo Ghana, a former royal duck shoot turned bird sanctuary, where the winter count runs ' +
        'past 350 species. Cycle rickshaw drivers inside double as spotters and are genuinely good at ' +
        'it. Deeg Palace with its monsoon fountains sits 32 km further on.',
        'Keoladeo rewards two visits at opposite ends of the day, which is the whole argument for ' +
        'the night. Arrive Saturday afternoon, walk the main causeway at dusk, then be at the gate at ' +
        'sunrise before the coaches. Deeg on the way home.',
        '/sightseeing/bharatpur'),
      g('Gwalior', 120, '2-2.5 hours', 1, 'Oct-Mar',
        'A hill fort that Babur called the pearl among Indian fortresses, with the Man Singh palace ' +
        'and the Teli ka Mandir inside it, and the Jai Vilas palace below with its thirty-five-foot ' +
        'chandeliers. The Sas Bahu temples look over the valley.',
        'The fort needs three unhurried hours and the sound-and-light show runs after dark, so the ' +
        'night is what lets you see both. Saturday morning out, fort in the afternoon, show in the ' +
        'evening, Jai Vilas and the tombs on Sunday.',
        '/sightseeing/gwalior'),
      g('Orchha', 235, '4 hours', 1, 'Oct-Mar',
        'Cenotaphs along the Betwa, the Jahangir Mahal and the Chaturbhuj temple rising out of a ' +
        'village of a few thousand people. One of the few medieval sites in North India where you can ' +
        'still have the place largely to yourself on a weekday morning.',
        'Four hours each way makes this a poor day trip and an excellent weekend. Leave by seven, ' +
        'arrive for lunch, spend the golden hour among the chhatris on the river. Sunday morning at ' +
        'the Lakshmi Narayan temple before driving back.',
        '/sightseeing/orchha'),
      g('Jaipur', 240, '4-4.5 hours', 1, 'Oct-Feb',
        'Amber Fort, the City Palace, Hawa Mahal and Jantar Mantar, plus the stepwell at Panna Meena ' +
        'and the Nahargarh ramparts for the evening view over the city.',
        'Jaipur has more than one day in it by a wide margin, and the Amber elephant-gate queue is ' +
        'shortest at opening. Drive Saturday morning, old city in the afternoon, Nahargarh at sunset, ' +
        'Amber at eight on Sunday before the heat and the crowds.',
        '/distance/agra-to-jaipur'),
      g('Ranthambore', 250, '4.5 hours', 1, 'Oct-Jun, closed in the monsoon',
        'The tiger reserve around a tenth-century fort, where the ruins inside the park are part of ' +
        'the safari rather than a separate visit. Padam Talao with the old hunting lodge above it is ' +
        'the picture most people come for.',
        'Safaris run at dawn and mid-afternoon and are booked by slot, so a day trip gets you one at ' +
        'best. A night gets you two in different zones, which roughly doubles the chance of a ' +
        'sighting. Book the permits well before you book the car.',
        '/sightseeing/ranthambore'),
      g('Khajuraho', 390, '6.5-7 hours', 2, 'Oct-Mar',
        'The western group of temples, with the Kandariya Mahadeva at its centre, and the quieter ' +
        'eastern and southern groups that most visitors skip. The carving is the finest surviving ' +
        'work of its kind anywhere.',
        'Seven hours each way is why this needs two nights rather than one. Drive Friday evening or ' +
        'Saturday at first light, give Sunday entirely to the temples with the light show after dark, ' +
        'and drive back Monday. Orchha breaks the return journey neatly.',
        '/sightseeing/khajuraho'),
      g('Delhi', 230, '3.5 hours', 1, 'Oct-Mar',
        'Humayun\'s Tomb, the Qutb complex, Lodhi Gardens and Old Delhi around the Jama Masjid, plus ' +
        'whatever is on at the museums and the Kingdom of Dreams end of Gurgaon.',
        'The Yamuna Expressway makes this the fastest drive on the list. Out on Saturday morning, ' +
        'Old Delhi and Nizamuddin in the afternoon, a proper dinner, and the monuments on Sunday ' +
        'before an easy evening run home.',
        '/distance/delhi-to-agra'),
      g('Chambal and Bateshwar', 70, '1.5 hours', 1, 'Nov-Feb',
        'The Chambal ravines, where boat trips from the National Chambal Sanctuary find gharial, ' +
        'marsh crocodile and Ganges river dolphin, and Bateshwar\'s line of 101 Shiva temples along ' +
        'the Yamuna, which almost nobody visits.',
        'Boats go early for the wildlife and the light, so the night before is what makes it work. ' +
        'Saturday afternoon at Bateshwar, overnight nearby, Chambal at sunrise. Back in Agra for ' +
        'Sunday lunch with something very few visitors to the city have seen.',
        '/sightseeing/agra'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Agra?',
        answer: 'For a first weekend, Gwalior at 120 km — the fort is substantial enough to fill a day, the sound-and-light show gives the evening a point, and the drive is short enough that Saturday is not lost to it. For wildlife, Ranthambore at 250 km, booked around two safari slots rather than one.' },
      { question: 'Where can I go from Agra for a weekend in the hills?',
        answer: 'Nowhere close. The nearest hill station worth the drive is Mussoorie at roughly 450 km and seven hours, which is a three-day trip from Agra rather than a weekend. If hills are the point, the honest answer is to go from Delhi instead. Weekends from Agra are strongest on forts, river wildlife and temple towns.' },
      { question: 'How much does a weekend trip from Agra cost by car?',
        answer: 'The return journey with a chauffeur is priced on the published round-trip rate card and shown against every destination above. A short weekend such as Bharatpur or Mathura prices from the 300 km minimum; Khajuraho at 390 km each way is the most expensive run on the list. Fuel, the driver and GST are included; tolls, parking and any state permit are at actuals.' },
      { question: 'Is Khajuraho possible as a weekend trip from Agra?',
        answer: 'Only as a three-day weekend. At 390 km and close to seven hours each way, a two-day trip would be fourteen hours of driving for one afternoon of temples. With two nights it works well, and breaking the return at Orchha makes the drive home far better than it sounds.' },
      { question: 'Do I need to book Ranthambore safaris before the car?',
        answer: 'Yes, and it is the one thing that catches people out. Safari permits are sold by zone and time slot through the forest department and the popular slots go weeks ahead, particularly over long weekends. Fix the permits first and build the car around them, not the other way round.' },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  ajmer: {
    slug: 'ajmer',
    city: 'Ajmer',
    heroTitle: 'Weekend Getaways from Ajmer by Car',
    heroSubtitle:
      "Seven places worth a night from Ajmer, with the drive, the return fare and how the weekend runs.",
    heroImage: '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
    intro: [
      "Ajmer sits in a gap in the Aravallis with roads running four ways out of it, which makes it a better weekend base than its reputation suggests. Jaipur is two and a half hours east, Udaipur four hours south, Jodhpur four hours west, and the Shekhawati havelis three hours north.",
      "The day-trip list from Ajmer covers Pushkar, Kishangarh and the close forts. This page is for the places that need the night — the lake palaces, the desert edge and the painted towns, where arriving in the afternoon and leaving after breakfast is what makes the journey worth it.",
      "Return fares are computed from the published round-trip rate card, so what is shown here is what the booking page will quote.",
    ],
    destinations: [
      g('Jaipur', 135, '2.5 hours', 1, 'Oct-Feb',
        "Amber Fort above the Maota lake, the City Palace and Jantar Mantar in the walled city, the Panna Meena stepwell, and Nahargarh on the ridge for the evening view across the whole of Jaipur.",
        "Close enough to leave after breakfast. The night buys you Amber at eight on Sunday morning, which is the difference between walking up through the Suraj Pol gate in the quiet and queueing in the heat behind four coaches.",
        '/distance/ajmer-to-jaipur'),
      g('Udaipur', 275, '4.5 hours', 1, 'Sep-Mar',
        "The City Palace along the Pichola waterfront, Jagdish temple, the Monsoon Palace on the ridge above, and Bagore ki Haveli where the evening dance performance happens in a courtyard rather than a hall.",
        "Four and a half hours each way rules out a day trip entirely. Leave by seven, be on the lake for the late afternoon, and give Sunday morning to the City Palace before the boats fill. The Monsoon Palace sunset is worth staying Saturday for.",
        '/distance/ajmer-to-udaipur'),
      g('Jodhpur', 200, '3.5 hours', 1, 'Oct-Mar',
        "Mehrangarh standing on its rock above the blue town, Jaswant Thada in white marble beside it, the Toorji stepwell in the old city, and Umaid Bhawan, which is still partly a residence.",
        "Mehrangarh takes a full unhurried morning and the audio guide is one of the best in the country. Drive Saturday morning, old city and the stepwell in the afternoon, fort from opening on Sunday, home in the evening.",
        '/distance/ajmer-to-jodhpur'),
      g('Chittorgarh', 190, '3 hours', 1, 'Oct-Mar',
        "The largest fort in India by area — seven gates climbing the hill, the Vijay Stambh, the Rana Kumbha palace, the Gaumukh reservoir, and Padmini's palace with its water tank.",
        "The fort is thirteen square kilometres and genuinely cannot be walked in an afternoon; the car goes up with you. A night turns a rushed circuit into two half-days, with the sound-and-light show in between.",
        '/sightseeing/chittorgarh'),
      g('Kumbhalgarh and Ranakpur', 245, '4 hours', 1, 'Oct-Mar',
        "A fort wall thirty-six kilometres long, the second longest in the world, running along the Aravalli ridge — and ninety minutes away, the Ranakpur Jain temple with 1,444 carved marble pillars, no two alike.",
        "These two are always done together and both have strict visiting hours — Ranakpur opens to non-Jain visitors only from noon. One night lets you take Kumbhalgarh at opening Sunday and Ranakpur on the way back in the afternoon.",
        '/sightseeing/kumbhalgarh'),
      g('Shekhawati havelis', 210, '3.5 hours', 1, 'Oct-Mar',
        "Nawalgarh, Mandawa and Fatehpur, where merchant families covered entire houses inside and out with painted frescoes. Many are unrestored and lived in, which is both the charm and the frustration of the region.",
        "Shekhawati is spread across three towns rather than concentrated in one, so a day trip means seeing one of them badly. A night based at Mandawa or Nawalgarh gets you two towns properly, and the frescoes read best in early light.",
        '/sightseeing/shekhawati'),
      g('Mount Abu', 350, '6 hours', 2, 'Oct-Mar, and the monsoon for the green',
        "Rajasthan's only hill station, with the Dilwara Jain temples and their almost translucent marble carving, Nakki Lake, and Guru Shikhar, the highest point in the range.",
        "Six hours each way and a 27 km ghat climb at the end make this a three-day weekend rather than two. Dilwara restricts non-worshipper hours and forbids photography inside, which surprises most first-time visitors — go early on the full day.",
        '/distance/ajmer-to-mount-abu'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Ajmer?',
        answer: 'Jaipur at 135 km, for a first weekend — two and a half hours out, a city with far more than one day in it, and Amber Fort reachable at opening on Sunday morning rather than in the midday queue. For something quieter, Chittorgarh at 190 km, where the fort is large enough that a night genuinely changes what you see.' },
      { question: 'How is this different from the places to visit near Ajmer page?',
        answer: 'That page covers day trips — Pushkar at 15 km, Kishangarh at 27 km and the other destinations you can reach and return from in a single day. This page covers the places that need a night: Udaipur, Jodhpur, the Shekhawati towns and Mount Abu, all of which are poor day trips and good weekends. Only Jaipur appears on both, and the entry here says what the extra night buys.' },
      { question: 'Can I do Udaipur as a weekend trip from Ajmer?',
        answer: 'Yes, and it is one of the better ones on this list. Four and a half hours each way is too much for a day but comfortable with one night. Leaving Ajmer by seven puts you on Lake Pichola for the late afternoon, which is when Udaipur looks the way the photographs promise.' },
      { question: 'How much does a weekend trip from Ajmer cost by car?',
        answer: 'The return fare with a chauffeur is shown against each destination and comes from the published round-trip rate card. Anything under 300 km one way prices from the round-trip minimum, so Jaipur, Chittorgarh and Jodhpur sit at the same floor; Mount Abu at 350 km is the only entry above it. Fuel, the driver and GST are included, and tolls, parking and state permits are at actuals.' },
      { question: 'Which weekend trip from Ajmer works in the monsoon?',
        answer: 'Mount Abu, which is the one place on the list that is arguably better in the rain — the hillside greens up completely and the temperature drops. Kumbhalgarh and the Aravalli stretch toward Udaipur also look very different in the wet. Avoid Shekhawati, where the appeal is painted exteriors.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  pushkar: {
    slug: 'pushkar',
    city: 'Pushkar',
    heroTitle: 'Weekend Getaways from Pushkar by Car',
    heroSubtitle:
      "Seven places worth a night from Pushkar, priced as a return journey with a chauffeur.",
    heroImage: '/images/sightseeing/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg',
    intro: [
      "Pushkar is a small town that people stay in longer than they planned, and it is also a usable base for the rest of Rajasthan. The Nag Pahar hill separates it from Ajmer, and once past that the same four roads open up — Jaipur east, Jodhpur west, Udaipur south, the painted towns north.",
      "Because Pushkar itself is walked rather than driven, a weekend from here starts properly: the car is for the journey out, not for the town. The entries below are the places that justify a night, with the shape of the two days written for each.",
      "Return fares come from the published round-trip rate card rather than being quoted by hand.",
    ],
    destinations: [
      g('Jaipur', 145, '2.5-3 hours', 1, 'Oct-Feb',
        "Amber Fort and the Maota lake below it, the walled city with the City Palace, Hawa Mahal and Jantar Mantar, and Nahargarh above for the long evening view over the whole city.",
        "Leave after breakfast and you are in Jaipur for lunch. The night is for Amber at opening on Sunday — up through the gates in the cool, before the first coaches reach the ramp.",
        '/distance/pushkar-to-jaipur'),
      g('Jodhpur', 185, '3-3.5 hours', 1, 'Oct-Mar',
        "Mehrangarh on its rock, Jaswant Thada in marble beside it, the restored Toorji stepwell where the old city now gathers in the evening, and the blue houses of Brahmpuri below the fort walls.",
        "The fort deserves a morning rather than an afternoon. Drive Saturday morning, walk the old city and the stepwell as it cools, then Mehrangarh from opening on Sunday and back to Pushkar by evening.",
        '/distance/pushkar-to-jodhpur'),
      g('Udaipur', 285, '4.5-5 hours', 1, 'Sep-Mar',
        "The City Palace on the Pichola shore, Jagdish temple in the old town, the Monsoon Palace on the ridge for sunset, and the courtyard performance at Bagore ki Haveli in the evening.",
        "Too far for a day by a clear margin. Out by seven, on the lake for the late afternoon, Monsoon Palace at sunset, and the City Palace early on Sunday before the boat crowds arrive.",
        '/distance/pushkar-to-udaipur'),
      g('Bikaner', 230, '4 hours', 1, 'Oct-Mar',
        "Junagarh, one of the few major Rajasthan forts not built on a hill and all the better preserved for it, the Karni Mata temple at Deshnoke, and the camel research farm on the edge of town.",
        "Four hours out makes a day trip pointless. A night gets you Junagarh unhurried on Saturday afternoon, Deshnoke early on Sunday when it is quiet, and the desert light at both ends of the day.",
        '/distance/pushkar-to-bikaner'),
      g('Shekhawati havelis', 200, '3.5 hours', 1, 'Oct-Mar',
        "Nawalgarh, Mandawa and Fatehpur — merchant towns where whole houses were painted inside and out. Much of it is unrestored and still lived in, so it feels found rather than presented.",
        "The frescoes are spread across three towns, so one day means one town seen badly. Base a night at Mandawa or Nawalgarh, take two towns properly, and shoot in early light when the pigment reads best.",
        '/sightseeing/shekhawati'),
      g('Ranthambore', 250, '4.5 hours', 1, 'Oct-Jun, closed in the monsoon',
        "A tiger reserve wrapped around a tenth-century fort, where the ruins are inside the park and part of the safari. Padam Talao with the hunting lodge above it is the view everyone recognises.",
        "Safaris run at dawn and mid-afternoon on booked slots, so a day trip buys one at best. One night buys two in different zones, which is roughly double the chance of a sighting. Fix the permits before the car.",
        '/sightseeing/ranthambore'),
      g('Mount Abu', 360, '6-6.5 hours', 2, 'Oct-Mar, and the monsoon',
        "The Dilwara Jain temples, where the marble is carved thin enough to glow, Nakki Lake in the crater, and Guru Shikhar at the top of the Aravallis.",
        "Six hours and a long ghat climb make this a three-day trip. Give the full middle day to Dilwara — it opens to non-worshippers only in the afternoon and photography inside is not allowed — with Guru Shikhar at sunrise.",
        '/distance/pushkar-to-mount-abu'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Pushkar?',
        answer: 'Jodhpur at 185 km is the strongest single choice — three hours out, a fort that rewards a full morning, and an old city that is at its best in the evening rather than the middle of the day. Jaipur is the easier drive if the weekend is short.' },
      { question: 'How is this different from the places to visit near Pushkar page?',
        answer: 'That page is for day trips — Ajmer at 15 km, Kishangarh, and the destinations you can see and return from the same evening. This page is for the places a night actually improves: Jodhpur, Udaipur, Bikaner, the Shekhawati towns and Mount Abu. Only Jaipur appears on both lists.' },
      { question: 'Is the Pushkar camel fair a good weekend to travel out?',
        answer: 'No, and it is worth saying plainly. The fair runs around Kartik Purnima in November and it is the one week when Pushkar itself is the destination — rooms are booked months ahead, the ground fills with traders, and leaving town is the opposite of what the weekend is for. Travel out on the weekends either side.' },
      { question: 'How much does a weekend trip from Pushkar cost by car?',
        answer: 'Each destination above carries its return fare, computed from the published round-trip rate card. Everything under 300 km one way prices from the round-trip minimum, which covers all but Mount Abu. Fuel, the driver and GST are included; tolls, parking and any state permit are charged at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  dehradun: {
    slug: 'dehradun',
    city: 'Dehradun',
    heroTitle: 'Weekend Getaways from Dehradun by Car',
    heroSubtitle:
      "Eight places worth a night from Dehradun, with the drive, the return fare and how the weekend runs.",
    heroImage: '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg',
    intro: [
      "Dehradun sits in the Doon valley with the Himalaya on one side and the Ganga plain on the other, which is an unusually good position for weekends. In two hours you can be in a hill station, at a river town, or in a tiger reserve, and all three are genuinely different weekends.",
      "The day-trip list from here covers Mussoorie, Rishikesh and Haridwar, which are all close enough to do and return. This page is for the trips that need the night — the higher hill stations, the Yamuna valley, Corbett, and the two Char Dham gateways that are a serious drive rather than an outing.",
      "Every fare below is the full return journey with a chauffeur, computed from the published round-trip rate card.",
    ],
    destinations: [
      g('Chakrata', 90, '3-3.5 hours', 1, 'Mar-Jun, Sep-Nov; snow in winter',
        "A cantonment town at 2,100 metres that the army has kept largely undeveloped, with deodar forest, the Tiger Falls walk and the Deoban ridge. There is almost no commercial tourism, which is the entire appeal.",
        "Ninety kilometres but three hours of it, because the road climbs the whole way. The night is essential — Tiger Falls is a five-kilometre walk from the road and nobody does that and drives back the same day. Leave early Saturday, walk Sunday morning.",
        '/sightseeing/chakrata'),
      g('Rishikesh', 45, '1-1.5 hours', 1, 'Sep-Jun; rafting closed in the monsoon',
        "Rafting on the Ganga between Shivpuri and Rishikesh, the Lakshman Jhula and Ram Jhula footbridges, the Beatles ashram wall paintings, and the Triveni Ghat aarti at dusk.",
        "Close enough to be a day trip, which is why the day-trip page has it too. What the night buys is specific: the aarti is at sunset and the rafting slots are in the morning, and you cannot do both in one day from Dehradun. One night does both.",
        '/distance/dehradun-to-rishikesh'),
      g('Nainital', 290, '7 hours', 2, 'Mar-Jun, Sep-Nov',
        "Naini Lake with the Mall road along one shore, the Snow View cable car, Tiffin Top, and the quieter lakes at Bhimtal and Sattal twenty minutes down the hill.",
        "Seven hours across the width of Uttarakhand makes this a three-day trip from Dehradun, not two. Drive Friday evening or Saturday first thing, give the full day to the lakes, and come back Monday with a stop at Kaladhungi.",
        '/distance/dehradun-to-nainital'),
      g('Jim Corbett', 230, '5.5-6 hours', 1, 'Nov-Jun; Dhikala closed in the monsoon',
        "India's oldest national park, with safari zones at Bijrani, Jhirna and Dhikala, the Ramganga running through it, and elephant far more often than tiger.",
        "Safaris are by booked zone and slot, morning and afternoon. A day trip from six hours away gets you none of them usefully. One night gets you two drives, and Dhikala needs its own overnight permit if you want the best of the park.",
        '/sightseeing/jim-corbett'),
      g('Chopta and Tungnath', 215, '7-8 hours', 2, 'Apr-Jun, Sep-Nov',
        "Meadow country at 2,700 metres, with the Tungnath temple a three-and-a-half-kilometre walk above it and Chandrashila another kilometre on, looking at Nanda Devi, Trisul and Chaukhamba.",
        "The walk is the trip, and it has to start early. Two nights: drive Saturday, sleep at Chopta, climb Tungnath and Chandrashila at first light on Sunday, and drive back Monday. Doing it in two days means climbing tired or not climbing.",
        '/sightseeing/chopta'),
      g('Auli', 275, '8-9 hours', 2, 'Dec-Mar for snow, Apr-Jun otherwise',
        "A ski slope at 2,800 metres above Joshimath, reached by the longest cable car in Asia, looking straight at Nanda Devi. Skiing in winter, meadow walks and the Gorson Bugyal trail the rest of the year.",
        "Eight to nine hours on the Badrinath road, and the last stretch is slow. Three days minimum. The cable car and the slope both want a full day, and the drive back down the Alaknanda gorge should not be done tired.",
        '/sightseeing/auli'),
      g('Haridwar', 55, '1.5 hours', 1, 'Year-round; Kumbh and Kanwar are different',
        "Har ki Pauri and the evening Ganga aarti, the Mansa Devi and Chandi Devi temples on the hills either side reached by ropeway, and the Rajaji reserve on the edge of town.",
        "A short drive that most people do as a day trip. The night is for the aarti at dusk followed by the four-in-the-morning quiet at the ghats, which is the opposite of what a day visitor sees. Rajaji on Sunday before driving home.",
        '/distance/dehradun-to-haridwar'),
      g('Shimla', 240, '7 hours', 2, 'Mar-Jun, Sep-Nov, Dec-Feb for snow',
        "The Mall and the Ridge, Christ Church, the Jakhoo temple above the town, the Viceregal Lodge, and the toy train down to Kalka if you want a day without the car.",
        "Seven hours on hill roads via Paonta Sahib and Solan. Two nights rather than one: a single night here means fourteen hours of driving for one afternoon on the Mall, which is a poor trade for a place with three days in it.",
        '/distance/dehradun-to-shimla'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Dehradun?',
        answer: 'Chakrata at 90 km, if the point is to get away from people — three hours of climbing road, deodar forest, and almost no commercial tourism. If the point is wildlife, Jim Corbett at 230 km built around two safari slots. For a short weekend, Rishikesh at 45 km with one night, which lets you do the morning rafting and the evening aarti in the same trip.' },
      { question: 'How is this different from the places to visit near Dehradun page?',
        answer: 'That page is for day trips — Mussoorie, Rishikesh, Haridwar and the other places you can reach and return from the same evening. This page is for the trips a night or two actually makes possible: Chakrata, Corbett, Chopta, Auli, Nainital and Shimla. Rishikesh and Haridwar appear on both, and the entries here say exactly what the night adds.' },
      { question: 'Which weekend trips from Dehradun need three days rather than two?',
        answer: 'Four of the eight: Nainital at seven hours, Chopta at seven to eight, Auli at eight to nine, and Shimla at seven. All four are long enough that one night would mean spending more time driving than being there. The other four — Chakrata, Rishikesh, Corbett and Haridwar — work comfortably as a two-day weekend.' },
      { question: 'Can I go to Auli from Dehradun for a weekend?',
        answer: 'Only over a long weekend of three days or more. It is eight to nine hours each way on the Badrinath road, and the final stretch above Joshimath is slow. With three days it is one of the best trips on this list; with two it is sixteen hours in the car for one afternoon.' },
      { question: 'How much does a weekend trip from Dehradun cost by car?',
        answer: 'The return fare is shown against each destination and comes from the published round-trip rate card. Anything under 300 km one way prices from the round-trip minimum, which covers every destination on this list. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  mussoorie: {
    slug: 'mussoorie',
    city: 'Mussoorie',
    heroTitle: 'Weekend Getaways from Mussoorie by Car',
    heroSubtitle:
      "Seven places worth a night from Mussoorie, priced as a return journey with a chauffeur.",
    heroImage: '/images/sightseeing/Mussoorie/Mussoorie_Hero_section.jpg',
    intro: [
      "Mussoorie is a weekend destination itself, which makes a weekend out of it a particular kind of trip — usually one that goes further into the hills rather than back down to the plain. The Yamuna valley road north and the Ganga towns south are both within reach.",
      "Worth knowing before planning: the Mall road is pedestrian for much of its length, so the car waits while you walk. That shapes the first and last hours of any trip from here.",
      "The destinations below are the ones that justify a night away. Return fares come from the published round-trip rate card.",
    ],
    destinations: [
      g('Chakrata', 85, '3 hours', 1, 'Mar-Jun, Sep-Nov',
        "Deodar forest at 2,100 metres in an army cantonment that has stayed almost entirely undeveloped, with the Tiger Falls walk and the Deoban ridge above it.",
        "Three hours for eighty-five kilometres, all of it ridge road. Tiger Falls is a five-kilometre walk from where the car stops, which is the reason for the night rather than a day trip. Out Saturday, walk Sunday morning, back by evening.",
        '/sightseeing/chakrata'),
      g('Rishikesh', 80, '2.5 hours', 1, 'Sep-Jun',
        "Rafting between Shivpuri and Rishikesh, the two footbridges, the Beatles ashram, and the Triveni Ghat aarti at dusk.",
        "Down from the hills to the river, which is a bigger change than the distance suggests. Rafting runs in the morning and the aarti is at sunset, so the night is what lets you do both rather than choose.",
        '/distance/mussoorie-to-rishikesh'),
      g('Haridwar', 90, '2.5-3 hours', 1, 'Year-round',
        "Har ki Pauri and the evening aarti, the two hill temples reached by ropeway, and the Rajaji reserve at the edge of town.",
        "The aarti at dusk and the empty ghats before dawn are two different places, and only an overnight gets you both. Rajaji fits Sunday morning before the drive back up.",
        '/distance/mussoorie-to-haridwar'),
      g('Barkot and Yamunotri road', 100, '4 hours', 1, 'May-Oct',
        "The Yamuna valley above Barkot, with Hanuman Chatti and the Yamunotri trailhead beyond it, and Jankichatti where the walk to the shrine begins.",
        "Four hours for a hundred kilometres tells you what the road is like. A night at Barkot makes the valley reachable without driving it twice in a day, and the river gorge in morning light is the reason to be there early.",
        '/sightseeing/yamunotri'),
      g('Chopta and Tungnath', 250, '8 hours', 2, 'Apr-Jun, Sep-Nov',
        "Meadows at 2,700 metres, the Tungnath temple three and a half kilometres above on foot, and Chandrashila a kilometre beyond with Nanda Devi and Chaukhamba in view.",
        "Eight hours across the Garhwal ridges. Three days: drive Saturday, sleep at Chopta, climb at first light Sunday, drive back Monday. The climb is the trip and it cannot be done on the back of eight hours in a car.",
        '/sightseeing/chopta'),
      g('Jim Corbett', 275, '7 hours', 2, 'Nov-Jun',
        "Safari zones at Bijrani, Jhirna and Dhikala along the Ramganga, in India's oldest national park. Elephant and gharial far more reliably than tiger.",
        "Seven hours each way and safaris by booked slot at dawn and mid-afternoon. Two nights gets you three or four drives; one night gets you one and a lot of driving. Book the permits before the car.",
        '/sightseeing/jim-corbett'),
      g('Shimla', 230, '7-7.5 hours', 2, 'Mar-Jun, Sep-Nov, Dec-Feb',
        "The Ridge and the Mall, Christ Church, Jakhoo temple on the hill above, the Viceregal Lodge, and the Kalka toy train.",
        "Hill road the whole way via Paonta Sahib. Two nights — one night would be fifteen hours of driving for one afternoon, and Shimla is a town that wants a full day plus an evening.",
        '/distance/mussoorie-to-shimla'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Mussoorie?',
        answer: 'Rishikesh at 80 km, because it is the biggest change for the shortest drive — down out of the hills to the river, with morning rafting and the evening aarti both possible once you have a night. Chakrata is the better choice if you want to go further into the forest rather than down to the plain.' },
      { question: 'Which trips from Mussoorie need three days?',
        answer: 'Chopta at eight hours, Jim Corbett at seven and Shimla at seven to seven and a half. All three are across the hills rather than down them, and hill distances are about the road rather than the kilometres. Two days on any of these means more time driving than there.' },
      { question: 'Does the pedestrian Mall road affect a weekend trip?',
        answer: 'At the start and end of it, yes. Much of the Mall is closed to vehicles, so the car picks up and drops at the edge rather than at the door, and the first and last twenty minutes of a trip from Mussoorie are usually walked. Worth factoring in if you are leaving early for a long drive.' },
      { question: 'How much does a weekend trip from Mussoorie cost by car?',
        answer: 'The full return fare is shown against each destination, computed from the published round-trip rate card. Every destination on this list is under 300 km one way, so all of them price from the round-trip minimum. Fuel, the driver and GST are included; tolls, parking, permits and the driver night allowance are at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  nainital: {
    slug: 'nainital',
    city: 'Nainital',
    heroTitle: 'Weekend Getaways from Nainital by Car',
    heroSubtitle:
      "Seven places worth a night from Nainital, with the drive, the return fare and the two-day shape.",
    heroImage: '/images/sightseeing/Nainital/Nainital_hero_section.jpg',
    intro: [
      "Nainital is the centre of the Kumaon lakes, and a weekend from here can stay in the lake district or climb out of it toward the high Himalaya. Both are short drives by hill standards, which is unusual.",
      "The day-trip page covers Bhimtal, Sattal, Mukteshwar and the other places within easy reach. This page is for the ones that want a night: Corbett, the Munsiyari road, Binsar, and the Kausani ridge where the mountain view is the entire point and it only happens at dawn.",
      "Return fares are computed from the published round-trip rate card rather than written by hand.",
    ],
    destinations: [
      g('Jim Corbett', 65, '2-2.5 hours', 1, 'Nov-Jun',
        "Safari zones at Bijrani, Jhirna and Dhikala along the Ramganga, in India's oldest national park, where elephant, gharial and a great many birds are far more reliable than tiger.",
        "Close enough that the drive is not the issue — the safari slots are. Morning and afternoon drives are booked by zone, and one night gets you both. Book permits first and build the car around them.",
        '/sightseeing/jim-corbett'),
      g('Kausani', 120, '4 hours', 1, 'Mar-Jun, Sep-Nov',
        "A ridge village looking at a 300-kilometre spread of the Himalaya — Trisul, Nanda Devi and Panchachuli on a clear morning. Gandhi's Anasakti Ashram, and tea gardens below the ridge.",
        "The view is a sunrise view and nothing else. Every photograph of Kausani was taken within forty minutes of first light, and by ten the haze has usually closed it. That is the whole argument for the night.",
        '/sightseeing/kausani'),
      g('Binsar', 110, '3.5 hours', 1, 'Mar-Jun, Sep-Nov',
        "A wildlife sanctuary of oak and rhododendron with the Zero Point viewpoint at its top, where the same Himalayan wall is visible with almost nobody watching it.",
        "Zero Point is a two-kilometre walk from the gate and best at first light, like Kausani but quieter. Stay inside or just outside the sanctuary, walk up at dawn Sunday, and drive back after breakfast.",
        '/sightseeing/binsar'),
      g('Munsiyari', 275, '9-10 hours', 2, 'Apr-Jun, Sep-Oct',
        "A village at 2,200 metres directly beneath the five Panchachuli peaks, with the Birthi falls on the way in and the Khaliya Top meadow walk above it.",
        "Ten hours on genuinely slow mountain road. Three days at the very least, and four is better. Nobody should attempt this as a two-day weekend; the road along the Kali river is the kind that wants a fresh driver.",
        '/sightseeing/munsiyari'),
      g('Ranikhet', 60, '2 hours', 1, 'Mar-Jun, Sep-Nov',
        "A cantonment town along a wooded ridge, with the Jhula Devi temple, the golf course at Upat and the Chaubatia orchards, and almost none of the crowd that Nainital carries.",
        "Two hours, so it could be a day trip — but Ranikhet is a place you walk slowly rather than see, and the ridge is at its best in the evening and early morning. The night is what turns it from a drive-through into the point.",
        '/sightseeing/ranikhet'),
      g('Almora', 65, '2-2.5 hours', 1, 'Mar-Jun, Sep-Nov',
        "A hill town on a horseshoe ridge with a stone-paved bazaar, the Kasar Devi hill above it where Bob Dylan and Timothy Leary stayed, and the Jageshwar temple cluster thirty-five kilometres on.",
        "Almora and Jageshwar together are more than a day. One night lets you take the bazaar and Kasar Devi in the evening, and the hundred-odd Jageshwar temples in their deodar grove on Sunday morning when they are empty.",
        '/sightseeing/almora'),
      g('Corbett falls and Kaladhungi', 45, '1.5 hours', 1, 'Oct-Jun',
        "Jim Corbett's own house at Kaladhungi, now a small museum of the man rather than the park, and the Corbett falls in sal forest a short walk off the road.",
        "A short drive, and the reason for the night is the forest at either end of the day. Arrive Saturday afternoon for the falls, walk the Kaladhungi forest road at dusk and again at sunrise, when the birdlife is the whole show.",
        '/sightseeing/jim-corbett'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Nainital?',
        answer: 'Kausani at 120 km, if the weather is clear — a 300-kilometre spread of the Himalaya at sunrise, which is a sight you cannot get from Nainital itself and cannot get at all without being there at dawn. Jim Corbett at 65 km is the better choice if you want wildlife and a shorter drive.' },
      { question: 'Why do Kausani and Binsar both need an overnight?',
        answer: 'Because the mountain view at both is a sunrise phenomenon. The Himalayan wall is usually clear for the first forty minutes after first light and hazes over by mid-morning, so a day trip arriving at eleven sees nothing of what the place is known for. Arriving the evening before is the difference between the trip working and not.' },
      { question: 'Can I do Munsiyari as a weekend trip from Nainital?',
        answer: 'Not in two days, and not really in three. It is nine to ten hours each way on slow mountain road along the Kali river, so four days is the honest minimum. If you have a two-day weekend, Kausani or Binsar give you the same Panchachuli and Nanda Devi views for a quarter of the driving.' },
      { question: 'How much does a weekend trip from Nainital cost by car?',
        answer: 'Each destination carries its return fare above, from the published round-trip rate card. All of these are under 300 km one way, so they price from the round-trip minimum regardless of whether the destination is 45 km or 275 km away. Fuel, the driver and GST are included; tolls, parking, permits and the driver night allowance are at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  haridwar: {
    slug: 'haridwar',
    city: 'Haridwar',
    heroTitle: 'Weekend Getaways from Haridwar by Car',
    heroSubtitle:
      "Eight places worth a night from Haridwar, with the drive, the return fare and how each weekend runs.",
    heroImage: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg',
    intro: [
      "Haridwar is where the Ganga leaves the hills, which makes it the natural starting point for a weekend going up. The Char Dham road begins here, Rishikesh is twenty minutes away, and the Doon valley and the Kumaon lakes are both within half a day.",
      "The day-trip page covers Rishikesh, Dehradun and the close temple towns. This page is for the trips that need the night — the pilgrimage gateways, the high meadows, Corbett, and the hill stations that are a drive rather than an outing.",
      "Return fares are computed from the published round-trip rate card, so what is shown here matches the booking page.",
    ],
    destinations: [
      g('Rishikesh', 25, '45 minutes', 1, 'Sep-Jun',
        "Rafting between Shivpuri and Rishikesh, the Lakshman Jhula and Ram Jhula bridges, the Beatles ashram, and the Parmarth Niketan aarti at dusk.",
        "Twenty-five kilometres, so plainly a day trip — except that rafting runs in the morning and the aarti is at sunset. A night turns a choice into both, and the Shivpuri stretch is quiet at seven in the morning.",
        '/distance/haridwar-to-rishikesh'),
      g('Dehradun and Mussoorie', 55, '1.5 hours', 1, 'Mar-Jun, Sep-Nov',
        "Robber's Cave and the Forest Research Institute at Dehradun, then the climb to Mussoorie for the Mall, Gun Hill and Kempty Falls.",
        "Both in one trip is too much for a day. One night, Dehradun on Saturday afternoon and the climb to Mussoorie on Sunday morning, which is when the Doon valley view from the Camel's Back road is clearest.",
        '/distance/haridwar-to-dehradun'),
      g('Jim Corbett', 185, '4.5 hours', 1, 'Nov-Jun',
        "Safari zones at Bijrani, Jhirna and Dhikala along the Ramganga. Elephant, gharial and birds in quantity; tiger if you are lucky and patient.",
        "Four and a half hours each way with safaris by booked slot at dawn and afternoon. A day trip gets you nothing useful. One night gets two drives in different zones, which roughly doubles your chances.",
        '/sightseeing/jim-corbett'),
      g('Chopta and Tungnath', 210, '7 hours', 2, 'Apr-Jun, Sep-Nov',
        "Meadow at 2,700 metres, the Tungnath temple three and a half kilometres up on foot, and Chandrashila a kilometre beyond looking at Nanda Devi, Trisul and Chaukhamba.",
        "Three days. Drive Saturday up the Rudraprayag road, sleep at Chopta, climb at first light Sunday, drive down Monday. The climb takes three hours up and it is not something to attempt after seven hours in the car.",
        '/sightseeing/chopta'),
      g('Devprayag and Rudraprayag', 95, '3 hours', 1, 'Sep-Jun',
        "The confluence where the Bhagirathi and Alaknanda become the Ganga at Devprayag, and the second confluence with the Mandakini at Rudraprayag, with the Raghunath temple above the first.",
        "The confluences are best in morning light when the two rivers are visibly different colours. Three hours up means arriving in the afternoon, staying, and being at Devprayag at eight on Sunday when the water shows clearly.",
        '/sightseeing/devprayag'),
      g('Nainital', 230, '6 hours', 2, 'Mar-Jun, Sep-Nov',
        "Naini Lake and the Mall, the Snow View cable car, Tiffin Top, and Bhimtal and Sattal in the quieter lake country below.",
        "Six hours across to Kumaon. Two nights rather than one — the lake district has three or four days in it, and a single night means twelve hours of driving for one afternoon on the Mall.",
        '/distance/haridwar-to-nainital'),
      g('Shimla', 260, '7 hours', 2, 'Mar-Jun, Sep-Nov, Dec-Feb',
        "The Ridge and the Mall, Christ Church, the Jakhoo temple, the Viceregal Lodge, and the Kalka toy train down the hill.",
        "Seven hours via Paonta Sahib and Solan. Two nights. Shimla rewards an evening on the Mall and a full day after it, and the drive is long enough that arriving and leaving the next morning wastes the journey.",
        '/distance/haridwar-to-shimla'),
      g('Auli', 290, '9 hours', 2, 'Dec-Mar for snow, Apr-Jun otherwise',
        "A ski slope at 2,800 metres above Joshimath, the longest cable car in Asia, and the Gorson Bugyal meadow walk, with Nanda Devi directly in view.",
        "Nine hours up the Alaknanda on the Badrinath road. Three days at minimum. The cable car and the slope want a full day between them, and the gorge road home should be driven fresh rather than tired.",
        '/sightseeing/auli'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Haridwar?',
        answer: 'Rishikesh with one night, for a short weekend — twenty-five kilometres, and the night is what lets you raft in the morning and be at the aarti at dusk instead of choosing between them. For a proper trip into the hills, Chopta at 210 km over three days, where the Chandrashila walk at sunrise is the best thing on this list.' },
      { question: 'Which weekend trips from Haridwar need three days?',
        answer: 'Chopta at seven hours, Nainital at six, Shimla at seven and Auli at nine. All four are long enough that a single night would mean spending more hours in the car than at the destination. Rishikesh, Dehradun with Mussoorie, Corbett and the confluences all work as a comfortable two-day weekend.' },
      { question: 'Is a weekend trip from Haridwar possible during the Kanwar yatra?',
        answer: 'It is possible but it is the wrong fortnight to try. The Kanwar yatra in the month of Shravan, usually late July into August, puts enormous pedestrian traffic on the Haridwar-Delhi and Haridwar-Rishikesh roads, and routes are frequently diverted or closed to vehicles. If you are travelling then, plan around the road restrictions rather than the distance.' },
      { question: 'How much does a weekend trip from Haridwar cost by car?',
        answer: 'The return fare appears against every destination above and comes from the published round-trip rate card. All of these are under 300 km one way, so each prices from the round-trip minimum. Fuel, the driver and GST are included; tolls, parking, any state permit and the driver night allowance are charged at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  rishikesh: {
    slug: 'rishikesh',
    city: 'Rishikesh',
    heroTitle: 'Weekend Getaways from Rishikesh by Car',
    heroSubtitle:
      "Seven places worth a night from Rishikesh, priced as a return journey with a chauffeur.",
    heroImage: '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg',
    intro: [
      "Rishikesh is the gate to the Garhwal Himalaya. The Char Dham highway starts here and the river gorges run north from it, which means almost every weekend from Rishikesh goes up rather than out — and the hill roads make that a question of hours rather than kilometres.",
      "The day-trip page covers Haridwar, Dehradun, Mussoorie and the close waterfalls. This page is for the trips the night makes possible: the confluences, the high meadows, the pilgrimage gateways and Corbett.",
      "Every fare is the full return journey with a chauffeur, from the published round-trip rate card.",
    ],
    destinations: [
      g('Devprayag', 70, '2.5 hours', 1, 'Sep-Jun',
        "The confluence where the Bhagirathi and the Alaknanda meet and become the Ganga, with visibly different-coloured water, and the Raghunath temple on the rock above it.",
        "The two rivers show their colours best in morning light, so arriving in the afternoon and standing at the sangam at eight the next day is the trip. Add Rudraprayag on Sunday if you want the second confluence too.",
        '/sightseeing/devprayag'),
      g('Chopta and Tungnath', 165, '6-6.5 hours', 2, 'Apr-Jun, Sep-Nov',
        "Meadows at 2,700 metres with the Tungnath temple three and a half kilometres above on foot and Chandrashila a kilometre beyond, looking at Nanda Devi, Trisul and Chaukhamba.",
        "Six and a half hours up through Rudraprayag. Three days: drive Saturday, sleep at Chopta, be walking by six on Sunday, drive back Monday. The summit view is a first-light view, which is what rules out doing it in two.",
        '/sightseeing/chopta'),
      g('Jim Corbett', 205, '5 hours', 1, 'Nov-Jun',
        "Safari zones at Bijrani, Jhirna and Dhikala on the Ramganga, in India's oldest national park. Elephant, gharial, otter and birds in quantity.",
        "Five hours, and safaris run on booked slots at dawn and mid-afternoon. One night gets two drives in different zones; a day trip gets one at best and a great deal of road. Permits before the car, always.",
        '/sightseeing/jim-corbett'),
      g('Auli', 250, '8 hours', 2, 'Dec-Mar for snow, Apr-Jun otherwise',
        "A ski slope at 2,800 metres above Joshimath, reached by Asia's longest cable car, with the Gorson Bugyal walk above it and Nanda Devi straight ahead.",
        "Eight hours up the Alaknanda gorge on the Badrinath road, and the last hour is slow. Three days. The cable car and the slope are a full day together, and the drive down deserves a fresh start.",
        '/sightseeing/auli'),
      g('Mussoorie', 80, '2.5 hours', 1, 'Mar-Jun, Sep-Nov',
        "The Mall, Gun Hill, Kempty Falls, the Camel's Back road for the Doon valley view, and Landour above the town where the colonial cottages and the bakery are.",
        "Two and a half hours and a long climb. The night buys you Landour early on Sunday, which is the quiet half of Mussoorie and is gone by the time a day visitor has parked and walked up.",
        '/distance/rishikesh-to-mussoorie'),
      g('Nainital', 250, '6.5 hours', 2, 'Mar-Jun, Sep-Nov',
        "Naini Lake with the Mall along it, the Snow View cable car, Tiffin Top, and the quieter lakes at Bhimtal and Sattal below.",
        "Six and a half hours across to Kumaon. Two nights — the lake district is three or four days of walking and boating, and one night would make the drive the main event.",
        '/distance/rishikesh-to-nainital'),
      g('Barkot and the Yamuna valley', 130, '5 hours', 1, 'May-Oct',
        "The Yamuna above Barkot, Hanuman Chatti, and Jankichatti where the walk up to Yamunotri starts. Steep forested gorge rather than open valley.",
        "Five hours for 130 kilometres, which tells you about the road. A night at Barkot makes the gorge reachable without driving it twice in one day, and the river in early light is why you go up rather than just through.",
        '/sightseeing/yamunotri'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Rishikesh?',
        answer: 'Devprayag at 70 km for a two-day weekend — two and a half hours, and standing at the confluence at eight in the morning when the Bhagirathi and the Alaknanda are visibly different colours is something a day trip cannot deliver. For three days, Chopta and the Chandrashila walk is the best trip on the list by a clear margin.' },
      { question: 'How is this different from the places to visit near Rishikesh page?',
        answer: 'That page covers day trips — Haridwar at 25 km, the waterfalls, Dehradun and the other places you can see and return from the same evening. This page covers the trips a night changes: the confluences in morning light, Corbett built around two safari slots, Chopta and Auli in the high Himalaya, and the Yamuna gorge. Mussoorie appears on both and the entry here says what the night adds.' },
      { question: 'When is the Char Dham road from Rishikesh usable for a weekend?',
        answer: 'Roughly late April to early November. The shrines close for winter and the higher stretches of the Badrinath and Yamunotri roads carry snow and landslide risk outside that window. In the monsoon, from July to mid-September, the gorge roads are open but landslide closures are common and travel times become unpredictable, so build slack into any trip then.' },
      { question: 'How much does a weekend trip from Rishikesh cost by car?',
        answer: 'The return fare is shown against each destination, computed from the published round-trip rate card. Every destination here is under 300 km one way, so all of them price from the round-trip minimum. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are charged at actuals.' },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  jodhpur: {
    slug: 'jodhpur',
    city: 'Jodhpur',
    heroTitle: 'Weekend Getaways from Jodhpur by Car',
    heroSubtitle:
      "Eight places worth a night from Jodhpur, with the drive, the return fare and how the weekend runs.",
    heroImage: '/images/sightseeing/Jodhpur/Jodhpur_Hero_section.jpg',
    intro: [
      "Jodhpur sits on the edge of the Thar with roads running into the desert one way and into the Aravallis the other, which gives a weekend from here two completely different characters. West is sand, forts and almost no one; east and south is hill country, lakes and temples.",
      "The day-trip page covers Osian, Mandore and the places within an easy return. This page is for the ones that need the night — Jaisalmer, Udaipur, the Kumbhalgarh ridge and the Rann edge, all of which are poor day trips and very good weekends.",
      "Return fares are computed from the published round-trip rate card, so what is quoted here is what the booking page will say.",
    ],
    destinations: [
      g('Ranakpur and Kumbhalgarh', 165, '3 hours', 1, 'Oct-Mar',
        "The Ranakpur Jain temple with 1,444 carved marble pillars, no two the same, and ninety minutes on, Kumbhalgarh's thirty-six-kilometre wall running along the Aravalli ridge — the second longest in the world.",
        "Both have restricted hours and Ranakpur opens to non-Jain visitors only from noon, which makes fitting them into one day a matter of luck. A night lets you take Kumbhalgarh at opening on Sunday and Ranakpur in the afternoon on the way home.",
        '/sightseeing/kumbhalgarh'),
      g('Jaisalmer', 285, '4.5-5 hours', 1, 'Oct-Mar',
        "A living fort where several thousand people still have their homes inside the walls, the Patwon ki Haveli, the Gadisar tank, and the Sam dunes forty kilometres out for the evening.",
        "Five hours each way across the desert makes a day trip meaningless. One night, and the shape is clear: fort and havelis Saturday afternoon, dunes at sunset, fort walls again at sunrise on Sunday when the sandstone is at its best.",
        '/distance/jodhpur-to-jaisalmer'),
      g('Udaipur', 250, '4.5 hours', 1, 'Sep-Mar',
        "The City Palace along Lake Pichola, Jagdish temple, the Monsoon Palace on the ridge above for sunset, and Bagore ki Haveli where the evening performance happens in a courtyard.",
        "Four and a half hours of improving landscape as the desert turns to hills. Out by seven, on the lake for the late afternoon, Monsoon Palace at sunset, and the City Palace early on Sunday before the boats fill up.",
        '/distance/jodhpur-to-udaipur'),
      g('Mount Abu', 265, '5 hours', 1, 'Oct-Mar, and the monsoon',
        "The Dilwara Jain temples with their almost translucent marble carving, Nakki Lake in its crater, Guru Shikhar at the top of the Aravallis, and Sunset Point which earns its name.",
        "Five hours, the last twenty-seven of them a continuous hairpin climb that takes a full hour whatever the map claims. Dilwara restricts non-worshipper hours and bans photography inside — go in the afternoon on arrival or early Sunday.",
        '/distance/jodhpur-to-mount-abu'),
      g('Bikaner', 250, '4.5 hours', 1, 'Oct-Mar',
        "Junagarh fort, unusual among the big Rajasthan forts for sitting on flat ground rather than a hill and far better preserved for it, the Karni Mata temple at Deshnoke, and the camel farm on the edge of town.",
        "Four and a half hours across open desert. A night gets Junagarh unhurried on Saturday and Deshnoke early Sunday when the courtyard is quiet, which is the only time it is bearable for most visitors.",
        '/distance/jodhpur-to-bikaner'),
      g('Chittorgarh', 310, '5.5 hours', 1, 'Oct-Mar',
        "The largest fort in India by area — seven gates up the hill, the Vijay Stambh, the Rana Kumbha palace, Padmini's palace and its tank, and the Gaumukh spring.",
        "Thirteen square kilometres of fort means a car tour inside and a full half-day at least. Five and a half hours out plus that is two days, with the sound-and-light show filling Saturday evening.",
        '/sightseeing/chittorgarh'),
      g('Jaipur', 335, '5.5 hours', 1, 'Oct-Feb',
        "Amber Fort above its lake, the City Palace and Jantar Mantar in the walled city, Hawa Mahal, the Panna Meena stepwell and Nahargarh on the ridge for the evening.",
        "Five and a half hours on good highway. Saturday morning out, walled city in the afternoon, Nahargarh at sunset, and Amber at eight on Sunday before the ramp fills — which is the whole reason to stay rather than day-trip.",
        '/distance/jodhpur-to-jaipur'),
      g('Rann of Kutch edge', 390, '7 hours', 2, 'Nov-Feb, and the Rann Utsav',
        "The white salt flat at Dhordo where the horizon disappears, Kalo Dungar above it, and the embroidery villages of Banni on the way in.",
        "Seven hours each way and a permit needed for the flat itself. Three days, and the flat is worth timing to a full moon when the salt holds the light. Check permit requirements before travelling; they change.",
        '/sightseeing/rann-of-kutch'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Jodhpur?',
        answer: 'Jaisalmer at 285 km, for the clearest contrast with Jodhpur itself — a fort people still live inside, and the Sam dunes at sunset. If you want hills and water instead of more desert, Udaipur at 250 km, where the four and a half hours take you from the Thar edge into the Aravallis.' },
      { question: 'How is this different from the places to visit near Jodhpur page?',
        answer: 'That page covers day trips — Osian, Mandore, Bishnoi villages and the other places within an easy return. This page is for the ones a night makes possible: Jaisalmer, Udaipur, Bikaner, Mount Abu, Chittorgarh and Jaipur, all of which are four to six hours away and poor as a single day.' },
      { question: 'Can I do Jaisalmer as a day trip from Jodhpur?',
        answer: 'You can drive it, but it is close to ten hours in the car for a few hours in the fort, and you would miss both of the things worth seeing — the dunes at sunset and the sandstone walls at sunrise. One night turns it from an endurance exercise into one of the best short trips in Rajasthan.' },
      { question: 'When is the worst time for a weekend trip from Jodhpur?',
        answer: 'April to June. These are desert and desert-edge routes, and daytime temperatures regularly pass 43 degrees in that window — the Bikaner and Jaisalmer drives in particular cross long open stretches with nothing in the way of shade. October to March is the season for everything on this list, with Mount Abu the one place that is also good in the monsoon.' },
      { question: 'How much does a weekend trip from Jodhpur cost by car?',
        answer: 'Each destination carries its return fare, computed from the published round-trip rate card. Everything under 300 km one way prices from the round-trip minimum, so Jaisalmer, Udaipur, Bikaner, Mount Abu and Ranakpur all sit at the same floor; Chittorgarh, Jaipur and the Rann are above it. Fuel, the driver and GST are included; tolls, parking, permits and the driver night allowance are at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  jaisalmer: {
    slug: 'jaisalmer',
    city: 'Jaisalmer',
    heroTitle: 'Weekend Getaways from Jaisalmer by Car',
    heroSubtitle:
      "Six places worth a night from Jaisalmer, priced as a return journey with a chauffeur.",
    heroImage: '/images/sightseeing/Jaisalmer/Jaisalmer_hero_section.jpg',
    intro: [
      "Jaisalmer is the far western end of the road, and that shapes every weekend from it. There is no onward route west, so a trip from here goes back east — which means the drives are long and the list is short, but the destinations are genuinely different from the desert you are leaving.",
      "The day-trip page covers the Sam dunes, Kuldhara, Lodhruva and the places inside a comfortable return. This page is for the trips that need a night or two, and each entry is honest about the driving involved.",
      "Return fares come from the published round-trip rate card rather than being written by hand.",
    ],
    destinations: [
      g('Jodhpur', 285, '4.5-5 hours', 1, 'Oct-Mar',
        "Mehrangarh standing on its rock above the blue town, Jaswant Thada in white marble beside it, the Toorji stepwell in the old city, and Umaid Bhawan on the ridge.",
        "Five hours east. Mehrangarh wants a full unhurried morning with the audio guide, so the shape is: drive Saturday morning, old city and stepwell in the afternoon as it cools, fort from opening on Sunday, home in the evening.",
        '/distance/jaisalmer-to-jodhpur'),
      g('Bikaner', 330, '5.5 hours', 1, 'Oct-Mar',
        "Junagarh fort, built on flat ground rather than a hill and consequently far better preserved, the Karni Mata rat temple at Deshnoke, and the camel research farm outside town.",
        "Five and a half hours across the desert on the Pokhran road. One night: Junagarh on Saturday afternoon, Deshnoke early Sunday before it gets busy, and the camel farm on the way out of town.",
        '/distance/jaisalmer-to-bikaner'),
      g('Udaipur', 495, '8 hours', 2, 'Sep-Mar',
        "The City Palace on Lake Pichola, Jagdish temple, the Monsoon Palace for sunset, and the courtyard performance at Bagore ki Haveli.",
        "Eight hours and the single biggest change of landscape available from Jaisalmer — sand to lakes and hills. Three days at least. Breaking the drive at Jodhpur in either direction makes it a far better trip than pushing through.",
        '/distance/jaisalmer-to-udaipur'),
      g('Mount Abu', 490, '8.5 hours', 2, 'Oct-Mar, and the monsoon',
        "The Dilwara Jain temples and their translucent marble, Nakki Lake in the crater, Guru Shikhar at the range summit, and genuine cool air.",
        "Eight and a half hours including a long hairpin climb at the end. Three days. The temptation is to drive straight through; breaking it at Jodhpur or Jalore makes the arrival much better and the climb safer.",
        '/distance/jaisalmer-to-mount-abu'),
      g('Pokhran and Khichan', 110, '2 hours', 1, 'Oct-Mar',
        "Pokhran's sandstone fort and the salt flats around it, and at Khichan, the demoiselle crane feeding ground where thousands of birds arrive each winter morning.",
        "The cranes at Khichan come in at dawn and the number is startling between December and February. That is a sunrise event, so a night nearby is the only way to see it properly. Pokhran fort on Saturday afternoon first.",
        '/sightseeing/pokhran'),
      g('Barmer and the border country', 155, '3 hours', 1, 'Nov-Feb',
        "The Kiradu temple group, eleventh-century and largely unvisited, Barmer's woodcarving and block-printing workshops, and the Mahabar dunes south of the town.",
        "Three hours south through country almost no visitor sees. Kiradu is worth early light and the workshops only operate on working days, which makes a Saturday arrival and a Monday-adjacent return the sensible shape.",
        '/sightseeing/barmer'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Jaisalmer?',
        answer: 'Jodhpur at 285 km. It is the shortest of the long drives, Mehrangarh is the one fort in Rajasthan that rivals Jaisalmer\'s own, and the blue town below it is a completely different kind of place to walk. For something almost nobody does, Khichan at 110 km for the demoiselle cranes at dawn in midwinter.' },
      { question: 'Why are there only six weekend trips from Jaisalmer?',
        answer: 'Because Jaisalmer is the western end of the road. There is no onward route west or north from here, so every trip doubles back east, and the nearest substantial destination is nearly five hours away. The list is short because the honest list is short — padding it with places eight hours away pretending they are weekends would not help anyone.' },
      { question: 'Which trips from Jaisalmer need more than two days?',
        answer: 'Udaipur at eight hours and Mount Abu at eight and a half. Both are three-day trips at minimum, and both are considerably better if you break the drive at Jodhpur rather than pushing through in one go. Jodhpur, Bikaner, Pokhran and Barmer all work as a two-day weekend.' },
      { question: 'How much does a weekend trip from Jaisalmer cost by car?',
        answer: 'The return fare is shown against each destination and comes from the published round-trip rate card. Jodhpur, Pokhran and Barmer price from the round-trip minimum; Bikaner, Udaipur and Mount Abu are above it because the one-way distance exceeds 300 km. Fuel, the driver and GST are included; tolls, parking, permits and the driver night allowance are at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  bikaner: {
    slug: 'bikaner',
    city: 'Bikaner',
    heroTitle: 'Weekend Getaways from Bikaner by Car',
    heroSubtitle:
      "Seven places worth a night from Bikaner, with the drive, the return fare and the weekend shape.",
    heroImage: '/images/sightseeing/Bikaner/Bikaner_hero_section.jpg',
    intro: [
      "Bikaner sits in the north of the Thar with roads to Jaisalmer, Jodhpur, Jaipur and the Shekhawati painted towns, and a shorter one to the Haryana and Punjab plain. That makes it a better base than most people expect, though every direction is a real drive.",
      "The day-trip page covers Deshnoke, Gajner and the places inside a comfortable return. This page is for the trips a night makes work — the other desert cities, the fresco towns, and the Harike and Tal Chhapar wetlands which are dawn-and-dusk places or nothing.",
      "Return fares are computed from the published round-trip rate card.",
    ],
    destinations: [
      g('Tal Chhapar', 145, '2.5-3 hours', 1, 'Sep-Mar',
        "A grassland sanctuary that looks nothing like the surrounding desert, holding several thousand blackbuck along with harriers, eagles and, in winter, visiting raptors in numbers.",
        "Blackbuck and raptors are both early-and-late animals, and the middle of the day in a grassland is empty. A night nearby gets you dusk and dawn, which is the difference between seeing the place and driving through it.",
        '/sightseeing/tal-chhapar'),
      g('Shekhawati havelis', 215, '3.5-4 hours', 1, 'Oct-Mar',
        "Nawalgarh, Mandawa and Fatehpur, where merchant families painted entire houses inside and out. Much of it unrestored and still inhabited, which is both the charm and the frustration.",
        "The frescoes are spread over three towns, so one day means one town seen badly. Base a night at Mandawa or Nawalgarh, do two towns properly, and shoot in early light when the pigment reads best.",
        '/sightseeing/shekhawati'),
      g('Jaisalmer', 330, '5.5 hours', 1, 'Oct-Mar',
        "A fort with several thousand residents still living inside it, the Patwon ki Haveli, the Gadisar tank, and the Sam dunes forty kilometres out.",
        "Five and a half hours on the Pokhran road. One night, and the shape is fixed by the light: fort and havelis Saturday afternoon, dunes at sunset, walls again at sunrise Sunday when the sandstone turns.",
        '/distance/bikaner-to-jaisalmer'),
      g('Jodhpur', 250, '4.5 hours', 1, 'Oct-Mar',
        "Mehrangarh above the blue town, Jaswant Thada beside it, the Toorji stepwell where the old city gathers in the evening, and Umaid Bhawan on the ridge.",
        "Four and a half hours south. The fort deserves a morning rather than a tired afternoon, so drive Saturday, walk the old city as it cools, and take Mehrangarh from opening on Sunday.",
        '/distance/bikaner-to-jodhpur'),
      g('Jaipur', 335, '5.5-6 hours', 1, 'Oct-Feb',
        "Amber Fort and the Maota lake, the City Palace, Hawa Mahal and Jantar Mantar in the walled city, and Nahargarh above for the long evening view.",
        "Nearly six hours on decent highway. Out Saturday morning, walled city in the afternoon, Nahargarh at sunset, Amber at opening on Sunday — which is the one thing a day trip from this distance could never do.",
        '/distance/bikaner-to-jaipur'),
      g('Amritsar', 440, '7.5 hours', 2, 'Oct-Mar',
        "The Golden Temple, which is open through the night and at its best at four in the morning, Jallianwala Bagh beside it, the Partition Museum, and the Wagah ceremony at sunset.",
        "Seven and a half hours north out of the desert entirely. Three days. The temple at night and the Wagah ceremony at dusk are the two fixed points, and they are on different days — which is precisely why this is not a two-day trip.",
        '/distance/bikaner-to-amritsar'),
      g('Khichan and Phalodi', 145, '2.5 hours', 1, 'Dec-Feb for the cranes',
        "Khichan's demoiselle crane feeding ground, where thousands arrive each winter morning, and Phalodi's merchant havelis and salt pans nearby.",
        "The cranes are a dawn event and the numbers in January are extraordinary. A night at Phalodi puts you at the feeding ground at first light, which no day trip from Bikaner can manage.",
        '/sightseeing/khichan'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Bikaner?',
        answer: 'Tal Chhapar at 145 km, which is the least obvious and probably the best — a grassland full of blackbuck that looks nothing like the desert around it, and a night is what gets you there at dusk and dawn. Jaisalmer at 330 km is the stronger choice if you want a fort and dunes rather than wildlife.' },
      { question: 'Which weekend trips from Bikaner need three days?',
        answer: 'Amritsar at seven and a half hours is the only one on this list, and it needs three because the Golden Temple at night and the Wagah border ceremony at sunset cannot be fitted into the same day. Everything else — Tal Chhapar, Shekhawati, Jaisalmer, Jodhpur, Jaipur and Khichan — works as a two-day weekend.' },
      { question: 'When should I go for the demoiselle cranes at Khichan?',
        answer: 'December through February, and at dawn. The birds arrive at the village feeding ground each winter morning in thousands, and by mid-morning they have dispersed. January is usually the peak. That timing is the entire reason this appears on the weekend list rather than the day-trip one.' },
      { question: 'How much does a weekend trip from Bikaner cost by car?',
        answer: 'The return fare appears against every destination and comes from the published round-trip rate card. Tal Chhapar, Shekhawati, Jodhpur and Khichan price from the round-trip minimum; Jaisalmer, Jaipur and Amritsar are above it. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  'mount-abu': {
    slug: 'mount-abu',
    city: 'Mount Abu',
    heroTitle: 'Weekend Getaways from Mount Abu by Car',
    heroSubtitle:
      "Six places worth a night from Mount Abu, with the drive, the return fare and the weekend shape.",
    heroImage: '/images/sightseeing/Mount_Abu/mount_abu_hero_section.jpg',
    intro: [
      "Mount Abu is Rajasthan's only hill station, which means a weekend from it goes down rather than up — into the Aravalli forts one way, the lakes of Mewar another, and the Gujarat plain to the south.",
      "The first twenty-seven kilometres of any trip are the ghat descent to Abu Road, and that hour is fixed whatever the map says. Factor it into both ends of the journey.",
      "The day-trip page covers Dilwara, Nakki Lake, Guru Shikhar and the places on the plateau itself. This page is for the destinations a night away makes possible. Return fares come from the published round-trip rate card.",
    ],
    destinations: [
      g('Udaipur', 165, '3-3.5 hours', 1, 'Sep-Mar',
        "The City Palace along Lake Pichola, Jagdish temple in the old town, the Monsoon Palace on the ridge for sunset, and Bagore ki Haveli's courtyard performance in the evening.",
        "Three and a half hours including the ghat. The night is what buys the two best hours in Udaipur — sunset from the Monsoon Palace and the City Palace at opening on Sunday before the boats and the crowds.",
        '/distance/mount-abu-to-udaipur'),
      g('Ranakpur and Kumbhalgarh', 165, '3.5 hours', 1, 'Oct-Mar',
        "Ranakpur's Jain temple with 1,444 marble pillars, none repeated, and Kumbhalgarh's thirty-six-kilometre fort wall along the ridge, the second longest in the world.",
        "Ranakpur admits non-Jain visitors only from noon and Kumbhalgarh is best early, which makes both in one day a gamble. A night fixes it: Kumbhalgarh at opening Sunday, Ranakpur after noon on the way home.",
        '/sightseeing/kumbhalgarh'),
      g('Jodhpur', 265, '5 hours', 1, 'Oct-Mar',
        "Mehrangarh on its rock above the blue town, Jaswant Thada, the Toorji stepwell, and Umaid Bhawan which is still partly lived in.",
        "Five hours down from the hills into the desert edge. Mehrangarh wants a full morning, so drive Saturday, take the old city in the late afternoon, and be at the fort when it opens on Sunday.",
        '/distance/mount-abu-to-jodhpur'),
      g('Chittorgarh', 280, '5 hours', 1, 'Oct-Mar',
        "India's largest fort by area, with seven gates climbing the hill, the Vijay Stambh, Rana Kumbha's palace, Padmini's palace and the Gaumukh spring.",
        "Thirteen square kilometres means driving inside the fort and a half-day minimum. Five hours out plus that is a two-day trip, with the sound-and-light show taking care of Saturday evening.",
        '/sightseeing/chittorgarh'),
      g('Ahmedabad', 225, '4 hours', 1, 'Nov-Feb',
        "The old city's pol houses and the Jama Masjid, the Adalaj stepwell north of town, Sabarmati Ashram, and the Calico Museum which must be booked ahead.",
        "Four hours south onto the plain. The old city heritage walk starts at eight in the morning from the Swaminarayan temple, which is the single best thing to do in Ahmedabad and is impossible on a day trip from here.",
        '/distance/mount-abu-to-ahmedabad'),
      g('Jaisalmer', 490, '8.5 hours', 2, 'Oct-Mar',
        "A fort still lived in by several thousand people, the Patwon ki Haveli, the Gadisar tank, and the Sam dunes for the evening.",
        "Eight and a half hours including the ghat descent. Three days at minimum, and breaking the drive at Jodhpur in both directions turns a punishing journey into a good one.",
        '/distance/mount-abu-to-jaisalmer'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Mount Abu?',
        answer: 'Udaipur at 165 km. Three and a half hours including the ghat, and it is the shortest drive on the list to somewhere completely unlike where you started — lakes and palaces instead of a forested plateau. Ranakpur with Kumbhalgarh is the better choice if you would rather see the Aravallis than leave them.' },
      { question: 'How long does the ghat road down from Mount Abu actually take?',
        answer: 'A full hour for twenty-seven kilometres, regardless of what any map estimates. It is continuous hairpin bends from the plateau down to Abu Road, well surfaced but slow, and it is the stretch that decides your departure time. Passengers prone to travel sickness should sit forward.' },
      { question: 'Which trips from Mount Abu need three days?',
        answer: 'Jaisalmer at eight and a half hours is the only one, and it genuinely needs three or four. Everything else on this list — Udaipur, Ranakpur with Kumbhalgarh, Jodhpur, Chittorgarh and Ahmedabad — works as a two-day weekend with one night away.' },
      { question: 'How much does a weekend trip from Mount Abu cost by car?',
        answer: 'The return fare is shown against each destination, computed from the published round-trip rate card. Udaipur, Ranakpur, Jodhpur, Chittorgarh and Ahmedabad all price from the round-trip minimum; Jaisalmer at 490 km is above it. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are at actuals.' },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  shimla: {
    slug: 'shimla',
    city: 'Shimla',
    heroTitle: 'Weekend Getaways from Shimla by Car',
    heroSubtitle:
      "Eight places worth a night from Shimla, with the drive, the return fare and the weekend shape.",
    heroImage: '/images/sightseeing/Shimla/shimla_hero_section.jpg',
    intro: [
      "Shimla is on a ridge with roads running four ways along and off it — the Hindustan-Tibet road east toward Kinnaur, the Kullu valley north, the Sirmaur hills south, and the plain below. Hill distances here are about the road rather than the kilometres, and the list below is honest about that.",
      "The day-trip page covers Kufri, Naldehra, Chail and Mashobra, which are all inside an easy return. This page is for the trips a night or two makes possible, including two that reach into Kinnaur where the landscape stops being hill station and becomes high desert.",
      "Return fares are computed from the published round-trip rate card.",
    ],
    destinations: [
      g('Chail', 45, '1.5-2 hours', 1, 'Mar-Jun, Sep-Nov',
        "A former Patiala summer capital with the highest cricket ground in the world at 2,444 metres, a palace hotel in deodar forest, and the Chail wildlife sanctuary around it.",
        "Close, and a day trip for most people. The night buys the forest at either end of the day — Chail at six in the morning is silent in a way the Shimla ridge never is, and the sanctuary walks want an early start.",
        '/sightseeing/chail'),
      g('Narkanda and Hatu Peak', 65, '2.5 hours', 1, 'Apr-Jun, Sep-Nov, Dec-Feb for snow',
        "Apple country on the Hindustan-Tibet road, with the Hatu Peak temple at 3,400 metres eight kilometres above the town and a view across to the Shrikhand range.",
        "The Hatu road is narrow and the view goes by mid-morning haze. A night at Narkanda gets you up there at first light with the Himalaya clear, which is the whole point and is not available to a day visitor.",
        '/sightseeing/narkanda'),
      g('Sarahan', 165, '5-6 hours', 1, 'Apr-Nov',
        "The Bhimakali temple, a tiered Kinnauri tower of wood and slate that is one of the finest buildings in the Himalaya, with the Shrikhand Mahadev peak behind it.",
        "Five to six hours on the Hindustan-Tibet road, which is slow and worth not rushing. The temple opens early and the peak behind it is clear at dawn. A night at Sarahan is also the standard first stop for anyone going further into Kinnaur.",
        '/sightseeing/sarahan'),
      g('Manali', 250, '7-8 hours', 2, 'Mar-Jun, Sep-Nov',
        "Old Manali and the Hadimba temple in deodar forest, Solang for the snow and the paragliding, Vashisht's hot springs, and the Rohtang road above if it is open.",
        "Seven to eight hours over the Kullu valley road. Two nights at least. Rohtang needs a permit, has a daily vehicle cap and is shut by snow for much of the year — check it before building a trip around it.",
        '/distance/shimla-to-manali'),
      g('Dharamshala and McLeod Ganj', 230, '7-8 hours', 2, 'Mar-Jun, Sep-Nov',
        "The Tsuglagkhang complex and the Dalai Lama's residence at McLeod Ganj, the Bhagsu waterfall, the Triund trailhead, and the Kangra fort and Masroor temples below.",
        "Seven to eight hours across Himachal. Two nights. McLeod Ganj and the Kangra valley below it are two different days, and the Triund walk is a third if you want it.",
        '/distance/shimla-to-dharamshala'),
      g('Chandigarh', 115, '3.5 hours', 1, 'Sep-Mar',
        "The Rock Garden, Sukhna Lake, the Capitol Complex with Le Corbusier's High Court and Assembly, and the Rose Garden.",
        "Three and a half hours down the hill. The Capitol Complex is only visitable on guided tours at fixed times and must be arranged ahead, which is the thing a day trip usually misses. Build the weekend around that slot.",
        '/distance/chandigarh-to-shimla'),
      g('Rishikesh', 230, '7 hours', 2, 'Sep-Jun',
        "Rafting between Shivpuri and Rishikesh, the footbridges, the Beatles ashram, and the Triveni Ghat aarti at dusk.",
        "Seven hours across to Uttarakhand via Paonta Sahib. Two nights, because rafting is a morning activity and the aarti is at sunset, and getting both plus fourteen hours of driving into two days does not work.",
        '/distance/shimla-to-rishikesh'),
      g('Kasauli', 75, '2.5 hours', 1, 'Mar-Jun, Sep-Nov',
        "A small cantonment on a wooded spur, with Christ Church, the Monkey Point view over the plain, the Gilbert nature trail, and almost no commercial development.",
        "Two and a half hours. Kasauli is a walking town rather than a sightseeing one, and the Gilbert trail and the view from Monkey Point are both best early. A night turns a drive-through into the reason to go.",
        '/sightseeing/kasauli'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Shimla?',
        answer: 'Narkanda at 65 km, for a two-day weekend — two and a half hours, apple country, and Hatu Peak at first light with the Shrikhand range clear, which is the view a day visitor arriving at eleven will not get. For something more substantial, Sarahan at 165 km, where the Bhimakali temple is one of the finest buildings in the Himalaya.' },
      { question: 'Which weekend trips from Shimla need three days?',
        answer: 'Manali at seven to eight hours, Dharamshala at seven to eight, and Rishikesh at seven. All three are long enough on hill road that one night would mean more hours driving than at the destination. Chail, Narkanda, Sarahan, Chandigarh and Kasauli all work with one night.' },
      { question: 'Can I reach Kinnaur for a weekend from Shimla?',
        answer: 'Sarahan, at the entrance to Kinnaur, yes — five to six hours on the Hindustan-Tibet road, comfortable with one night, and it is the standard first stop for anyone going deeper. Beyond Sarahan into Kalpa and Sangla you are looking at four days minimum, and the road is subject to landslide closures through the monsoon.' },
      { question: 'How much does a weekend trip from Shimla cost by car?',
        answer: 'Each destination carries its return fare, computed from the published round-trip rate card. All of these are under 300 km one way, so every one prices from the round-trip minimum regardless of whether it is 45 km or 250 km. Fuel, the driver and GST are included; tolls, parking, permits and the driver night allowance are at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  manali: {
    slug: 'manali',
    city: 'Manali',
    heroTitle: 'Weekend Getaways from Manali by Car',
    heroSubtitle:
      "Seven places worth a night from Manali, priced as a return journey with a chauffeur.",
    heroImage: '/images/sightseeing/Manali/Manali_hero_section.jpg',
    intro: [
      "Manali sits at the head of the Kullu valley with the Rohtang pass above it and the Parvati and Sainj valleys branching off below. A weekend from here can go over the pass into Lahaul, sideways into the side valleys, or back down toward Shimla and the plain.",
      "The one thing to settle before planning anything northward: Rohtang requires a permit, has a daily vehicle cap, and is shut by snow for much of the year. The Atal tunnel bypasses it to Lahaul and stays open far longer, but conditions still close it. Check before committing.",
      "Return fares come from the published round-trip rate card rather than being written by hand.",
    ],
    destinations: [
      g('Kasol and the Parvati valley', 75, '2.5-3 hours', 1, 'Mar-Jun, Sep-Nov',
        "Kasol and Chalal on the Parvati river, the hot springs and gurudwara at Manikaran, and the Kheerganga trailhead further up the valley.",
        "Three hours for seventy-five kilometres, which is the Parvati road. The Kheerganga walk is a four-hour climb and the Chalal riverside path is an evening walk — neither fits a day trip. One night does both ends of the valley.",
        '/distance/manali-to-kasol'),
      g('Spiti via Kaza', 200, '8-9 hours', 2, 'Jun-Oct only',
        "Key monastery above the Spiti river, Kibber, the Chandratal lake road, and Tabo's thousand-year-old mud monastery further down the valley.",
        "Eight to nine hours over Kunzum La at 4,590 metres, and the road exists only from roughly June to October. Three days absolute minimum and four is sensible. This is high-altitude travel, not a weekend drive — altitude sickness is a real consideration at Kaza's 3,800 metres.",
        '/sightseeing/spiti-valley'),
      g('Lahaul and Keylong', 115, '3.5-4 hours', 1, 'Jun-Oct; tunnel-dependent in winter',
        "The Chandra and Bhaga valleys beyond the Atal tunnel, Keylong town, the Kardang and Shashur monasteries above it, and a landscape with almost no trees at all.",
        "Through the Atal tunnel, which turns what was a Rohtang day into a comfortable drive. The night is what lets you reach the monasteries above Keylong and see the Bhaga valley in morning light rather than driving straight back.",
        '/sightseeing/lahaul'),
      g('Dharamshala and McLeod Ganj', 230, '7 hours', 2, 'Mar-Jun, Sep-Nov',
        "The Tsuglagkhang complex at McLeod Ganj, the Bhagsu waterfall, the Triund trailhead, and the Kangra fort and Masroor rock temples on the valley floor.",
        "Seven hours around through Mandi. Two nights: McLeod Ganj and the Kangra valley are separate days, and the Triund walk is a third if you want it.",
        '/distance/manali-to-dharamshala'),
      g('Shimla', 250, '7-8 hours', 2, 'Mar-Jun, Sep-Nov, Dec-Feb',
        "The Ridge and the Mall, Christ Church, Jakhoo temple above the town, the Viceregal Lodge, and the Kalka toy train.",
        "Seven to eight hours down the Kullu valley and along the Shimla ridge road. Two nights — Shimla wants an evening on the Mall and a full day after it, and the drive is too long to arrive and leave the next morning.",
        '/distance/manali-to-shimla'),
      g('Tirthan valley and Great Himalayan National Park', 70, '3 hours', 1, 'Mar-Jun, Sep-Nov',
        "The Tirthan river for trout, the Great Himalayan National Park's Gushaini entrance, Jalori pass above the valley, and the Serolsar lake walk beyond it.",
        "Three hours including the turn off the main valley. The park walks and the Jalori pass trail both want a morning start, and the valley is a place to sit by a river rather than drive through — which is what the night is for.",
        '/sightseeing/tirthan-valley'),
      g('Chandigarh', 305, '8 hours', 2, 'Sep-Mar',
        "The Rock Garden, Sukhna Lake, the Capitol Complex with Le Corbusier's High Court and Assembly, and the Rose Garden.",
        "Eight hours down the whole Kullu and Mandi road. Two nights. The Capitol Complex is guided-tour only at fixed times and needs arranging ahead — worth doing, and the reason to give the city a full day.",
        '/distance/chandigarh-to-manali'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Manali?',
        answer: 'Kasol and the Parvati valley at 75 km. Three hours, a completely different valley, and the night is what makes the Kheerganga climb and the Chalal riverside walk both possible. If the Atal tunnel is open, Keylong at 115 km is the more dramatic trip — a treeless high valley three and a half hours from a forested one.' },
      { question: 'Can I do Spiti as a weekend trip from Manali?',
        answer: 'No, and it would be unwise to try. Kaza is eight to nine hours over the Kunzum La at 4,590 metres, the road is open only from around June to October, and Kaza itself sits at 3,800 metres where altitude sickness is a genuine risk on a fast ascent. Four days is the sensible minimum and the altitude gain should be taken gradually.' },
      { question: 'Do I need a Rohtang permit for a weekend trip from Manali?',
        answer: 'Only if you are going over the pass itself. Rohtang requires a permit, has a daily cap on vehicles and is closed by snow for a large part of the year. For Lahaul and Keylong the Atal tunnel bypasses it entirely and stays open much longer, which is how most trips north now run. Conditions still close the tunnel approach, so check on the day.' },
      { question: 'How much does a weekend trip from Manali cost by car?',
        answer: 'The return fare is shown against each destination, from the published round-trip rate card. Everything on this list prices from the round-trip minimum except Chandigarh at 305 km. Fuel, the driver and GST are included; tolls, parking, permits — including the Rohtang permit where it applies — and the driver night allowance are charged at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  dharamshala: {
    slug: 'dharamshala',
    city: 'Dharamshala',
    heroTitle: 'Weekend Getaways from Dharamshala by Car',
    heroSubtitle:
      "Seven places worth a night from Dharamshala, with the drive, the return fare and the weekend shape.",
    heroImage: '/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg',
    intro: [
      "Dharamshala sits on the Dhauladhar slope above the Kangra valley, which means a weekend from it can go along the valley to the temples and forts, up to the smaller hill towns on the same ridge, or across Himachal to the Kullu and Shimla sides.",
      "The day-trip page covers McLeod Ganj, Bhagsu, Naddi and the Kangra valley sites within an easy return. This page is for the trips that need a night — the Chamba valley, Dalhousie, Khajjiar, and the longer crossings east.",
      "Return fares are computed from the published round-trip rate card.",
    ],
    destinations: [
      g('Dalhousie and Khajjiar', 120, '3.5-4 hours', 1, 'Mar-Jun, Sep-Nov',
        "A Scottish-looking hill station spread over five hills, with Khajjiar's meadow ringed by deodar twenty-two kilometres on, and the Kalatop sanctuary walk between them.",
        "Three and a half to four hours on winding road. Dalhousie and Khajjiar plus the Kalatop walk is comfortably two days and cramped into one. A night at Dalhousie, Khajjiar and Kalatop on Sunday morning.",
        '/distance/dharamshala-to-dalhousie'),
      g('Chamba', 170, '5 hours', 1, 'Mar-Jun, Sep-Nov',
        "The Lakshmi Narayan temple group, stone shikhara temples from the tenth century onward, the Bhuri Singh museum of Pahari miniature painting, and the Chaugan maidan at the centre of town.",
        "Five hours up the Ravi valley. Chamba is a town that rewards a slow morning in the temple compound and an hour in the museum, neither of which happens if you arrive at two and leave at four.",
        '/sightseeing/chamba'),
      g('Bir and Billing', 65, '2 hours', 1, 'Mar-Jun, Sep-Nov',
        "The paragliding launch at Billing above the Bir landing field, the Tibetan colony and its monasteries in Bir, and the tea gardens below.",
        "Two hours. Paragliding runs on morning thermals and is weather-dependent, so having a night there means a second chance if Saturday is flown out or closed. The monasteries fill the rest of the time.",
        '/sightseeing/bir-billing'),
      g('Manali', 230, '7 hours', 2, 'Mar-Jun, Sep-Nov',
        "Old Manali and the Hadimba temple, Solang for snow and paragliding, Vashisht's hot springs, and the Atal tunnel to Lahaul above.",
        "Seven hours around via Mandi. Two nights. Manali plus any one of the side valleys or the tunnel run is two days of its own, and arriving tired after seven hours wastes the first of them.",
        '/distance/dharamshala-to-manali'),
      g('Amritsar', 200, '4.5 hours', 1, 'Oct-Mar',
        "The Golden Temple, open through the night and at its best around four in the morning, Jallianwala Bagh beside it, the Partition Museum, and the Wagah ceremony at sunset.",
        "Four and a half hours down to the plain. One night works here, and the shape is: arrive Saturday afternoon, Wagah at sunset, the temple late at night and again before dawn on Sunday when it is close to empty.",
        '/distance/dharamshala-to-amritsar'),
      g('Shimla', 230, '7-8 hours', 2, 'Mar-Jun, Sep-Nov, Dec-Feb',
        "The Ridge and the Mall, Christ Church, Jakhoo temple, the Viceregal Lodge, and the toy train down to Kalka.",
        "Seven to eight hours across Himachal. Two nights, because a single night means fifteen hours of driving for one afternoon, and Shimla is a town with three days in it.",
        '/distance/shimla-to-dharamshala'),
      g('Chandigarh', 240, '6 hours', 1, 'Sep-Mar',
        "The Rock Garden, Sukhna Lake, the Capitol Complex with Le Corbusier's High Court and Assembly, and the Rose Garden.",
        "Six hours down out of the hills. One night is enough if you book the Capitol Complex tour in advance for Sunday morning — it is guided-only at fixed times and is the thing most visitors miss.",
        '/distance/chandigarh-to-dharamshala'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Dharamshala?',
        answer: 'Dalhousie with Khajjiar at 120 km, for a two-day weekend — a hill station over five hills, a deodar-ringed meadow, and the Kalatop forest walk between them, which is comfortably two days of walking. Amritsar at 200 km is the better choice if you want the biggest possible change, and the Golden Temple before dawn is worth the night on its own.' },
      { question: 'Which weekend trips from Dharamshala need three days?',
        answer: 'Manali at seven hours and Shimla at seven to eight. Both are crossings of Himachal on hill road rather than drives down to the plain, and both are places with two or three days of their own. Dalhousie, Chamba, Bir, Amritsar and Chandigarh all work with one night.' },
      { question: 'Is Bir worth a weekend if I am not paragliding?',
        answer: 'Yes, though the flying is the main draw. The Tibetan colony has several working monasteries, the tea gardens below the village are walkable, and the Billing launch site is a good viewpoint whether or not you jump off it. The reason paragliders stay a night is that flying depends on morning thermals and the weather, so one day is one chance.' },
      { question: 'How much does a weekend trip from Dharamshala cost by car?',
        answer: 'Each destination carries its return fare, computed from the published round-trip rate card. Every destination on this list is under 300 km one way, so all price from the round-trip minimum. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are charged at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  amritsar: {
    slug: 'amritsar',
    city: 'Amritsar',
    heroTitle: 'Weekend Getaways from Amritsar by Car',
    heroSubtitle:
      "Eight places worth a night from Amritsar, with the drive, the return fare and how the weekend runs.",
    heroImage: '/images/sightseeing/Amritsar/Amristar_hero_section.jpg',
    intro: [
      "Amritsar is close to the border, which means a weekend from here runs east and south rather than in a circle. The Himachal hills are four to five hours away, the Punjab heritage towns are inside two, and the Shivalik foothills at Dalhousie and Dharamshala are the natural first escape from the plain.",
      "The day-trip page covers Wagah, Tarn Taran, Pul Kanjri and the places inside an easy return. This page is for the trips a night makes work — the hill stations, the Pahari temple towns, and the two Punjab cities that deserve more than an afternoon.",
      "Return fares come from the published round-trip rate card.",
    ],
    destinations: [
      g('Dharamshala and McLeod Ganj', 200, '4.5 hours', 1, 'Mar-Jun, Sep-Nov',
        "The Tsuglagkhang complex and the Dalai Lama's residence at McLeod Ganj, the Bhagsu waterfall, the Triund trailhead, and the Kangra fort and Masroor temples below on the valley floor.",
        "Four and a half hours from plain to ridge. One night: McLeod Ganj Saturday afternoon and evening, and either the Triund trail or the Kangra valley sites on Sunday before driving back.",
        '/distance/amritsar-to-dharamshala'),
      g('Dalhousie and Khajjiar', 195, '5 hours', 1, 'Mar-Jun, Sep-Nov',
        "A hill station spread over five hills with colonial churches, Khajjiar's deodar-ringed meadow twenty-two kilometres on, and the Kalatop sanctuary between them.",
        "Five hours with the last two climbing. Dalhousie, Khajjiar and the Kalatop walk do not fit one day. A night at Dalhousie and the meadow plus the forest on Sunday morning is the shape.",
        '/distance/amritsar-to-dalhousie'),
      g('Chandigarh', 230, '4 hours', 1, 'Sep-Mar',
        "The Rock Garden, Sukhna Lake, the Capitol Complex with Le Corbusier's High Court and Assembly, the Rose Garden, and the Government Museum.",
        "Four hours on good highway. The Capitol Complex is guided-tour only at fixed times and must be booked ahead — fix that for Sunday morning and the weekend builds itself around it.",
        '/distance/amritsar-to-chandigarh'),
      g('Patiala', 230, '4 hours', 1, 'Oct-Mar',
        "The Qila Mubarak complex in the old city, the Sheesh Mahal with its painted gallery, the Baradari gardens, and Punjab's distinctive Patiala Gharana music heritage.",
        "Four hours south-east. Qila Mubarak is a working restoration and the Sheesh Mahal gallery wants unhurried time, so the night turns a hurried stop into a proper morning.",
        '/distance/amritsar-to-patiala'),
      g('Anandpur Sahib', 190, '3.5 hours', 1, 'Oct-Mar; Hola Mohalla in March',
        "The Takht Sri Keshgarh Sahib, one of the five Sikh seats of authority, the Virasat-e-Khalsa museum below it, and the Naina Devi hill temple nearby.",
        "Three and a half hours. The Virasat-e-Khalsa needs two hours on its own and the gurudwara is best early. A night makes both unhurried, and during Hola Mohalla in March the town is the reason to go.",
        '/sightseeing/anandpur-sahib'),
      g('Jammu and Katra', 215, '4.5 hours', 1, 'Year-round; Mar-Oct easiest',
        "The Raghunath temple complex in Jammu, the Bahu fort above the Tawi, and at Katra the thirteen-kilometre climb to the Vaishno Devi shrine.",
        "The Vaishno Devi walk is thirteen kilometres each way and takes most of a day, which settles the question of a day trip. A night at Katra, start the climb before dawn, and come down in the afternoon.",
        '/sightseeing/vaishno-devi'),
      g('Shimla', 350, '7 hours', 2, 'Mar-Jun, Sep-Nov, Dec-Feb',
        "The Ridge and the Mall, Christ Church, Jakhoo temple above the town, the Viceregal Lodge, and the Kalka toy train down.",
        "Seven hours, the last three climbing. Two nights. One night would be fourteen hours of driving for a single afternoon on the Mall, which is a poor trade for a town with three days in it.",
        '/distance/amritsar-to-shimla'),
      g('Kasauli', 300, '5.5 hours', 1, 'Mar-Jun, Sep-Nov',
        "A small cantonment on a wooded spur with Christ Church, the Monkey Point view over the plain, the Gilbert nature trail, and very little else — deliberately.",
        "Five and a half hours. Kasauli is walked rather than toured, and the Gilbert trail and the Monkey Point view are both morning things. The night is what makes it a destination rather than a stop.",
        '/sightseeing/kasauli'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Amritsar?',
        answer: 'Dharamshala at 200 km, which is the shortest drive from the plain to a genuine hill ridge — four and a half hours, and McLeod Ganj in the evening with either Triund or the Kangra valley on Sunday. Anandpur Sahib at 190 km is the strongest choice if you want Punjab heritage rather than hills.' },
      { question: 'Which weekend trips from Amritsar need three days?',
        answer: 'Shimla at seven hours is the only one on this list. Everything else — Dharamshala, Dalhousie with Khajjiar, Chandigarh, Patiala, Anandpur Sahib, Katra and Kasauli — works as a two-day weekend with one night away, though Dalhousie and Katra are both full days at the far end.' },
      { question: 'How long does the Vaishno Devi climb take from Katra?',
        answer: 'Thirteen kilometres each way on a paved track, which is roughly four to six hours up depending on pace and queues, and three to four down. Ponies and palanquins are available for most of it and there is a helicopter service to Sanjichhat. It is a full day, which is why this is a weekend trip from Amritsar rather than a day trip.' },
      { question: 'How much does a weekend trip from Amritsar cost by car?',
        answer: 'The return fare appears against each destination, computed from the published round-trip rate card. Everything under 300 km one way prices from the round-trip minimum, which covers all but Shimla and Kasauli. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are at actuals.' },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  lucknow: {
    slug: 'lucknow',
    city: 'Lucknow',
    heroTitle: 'Weekend Getaways from Lucknow by Car',
    heroSubtitle:
      "Eight places worth a night from Lucknow, with the drive, the return fare and how the weekend runs.",
    heroImage: '/images/sightseeing/Lucknow/Lucknow_hero_section.jpg',
    intro: [
      "Lucknow is central to Uttar Pradesh, and the expressways out of it have changed what a weekend from here means. Agra is under four hours on the Agra-Lucknow expressway, Varanasi around five, and the Nepal-border forests and the Terai wildlife parks are three to four in the other direction.",
      "The day-trip page covers Kakori, Bithoor, Naimisharanya and the places inside an easy return. This page is for the trips that need the night — the river cities, the tiger reserves and the two Buddhist sites that are quiet in a way nothing near Lucknow is.",
      "Return fares are computed from the published round-trip rate card, so what is shown matches the booking page.",
    ],
    destinations: [
      g('Ayodhya', 135, '2.5-3 hours', 1, 'Oct-Mar',
        "The Ram Janmabhoomi temple complex, the Hanuman Garhi fort temple, the Kanak Bhawan, and the Saryu river ghats where the evening aarti happens.",
        "Under three hours, but the temple complex involves security queues that take time and the Saryu aarti is at dusk. A night means the ghats in the evening and the main complex early on Sunday before the day crowds.",
        '/distance/lucknow-to-ayodhya'),
      g('Dudhwa National Park', 230, '5 hours', 1, 'Nov-Jun',
        "Terai grassland and sal forest on the Nepal border, holding tiger, swamp deer in large herds, and the reintroduced one-horned rhino at the Salukhapur enclosure.",
        "Five hours north and safaris are morning and afternoon on booked slots. A day trip is pointless; one night gets two drives. The rhino enclosure and the Kishanpur range are effectively separate half-days.",
        '/sightseeing/dudhwa'),
      g('Varanasi', 320, '5-5.5 hours', 1, 'Oct-Mar',
        "The ghats along the Ganga, the Kashi Vishwanath corridor, the Ganga aarti at Dashashwamedh at dusk, and Sarnath nine kilometres out where the Buddha gave his first sermon.",
        "Five and a half hours. The two unmissable things are at opposite ends of the day — the aarti at sunset and a boat on the river at sunrise — so the night is not optional. Sarnath on Sunday on the way out.",
        '/distance/lucknow-to-varanasi'),
      g('Agra', 335, '4 hours', 1, 'Oct-Mar',
        "The Taj Mahal, Agra Fort, Itmad-ud-Daulah's tomb across the river, and Fatehpur Sikri forty kilometres west.",
        "Four hours on the expressway. The Taj at sunrise is the whole reason to stay — the marble changes colour for about twenty minutes after the gates open and the crowd is a fraction of mid-morning. Fort and Fatehpur Sikri Sunday.",
        '/distance/agra-to-lucknow'),
      g('Prayagraj', 200, '3.5 hours', 1, 'Oct-Mar; Magh Mela in Jan-Feb',
        "The Triveni Sangam where the Ganga, Yamuna and the mythical Saraswati meet, Akbar's fort above it, the Anand Bhavan Nehru house, and Khusro Bagh's Mughal tombs.",
        "Three and a half hours. The sangam is a boat trip and best at dawn when the two rivers' different colours are clearest. Anand Bhavan and Khusro Bagh fill Saturday afternoon.",
        '/distance/lucknow-to-prayagraj'),
      g('Katarniaghat and Shravasti', 190, '4 hours', 1, 'Nov-Jun',
        "The Katarniaghat forest with its Girwa river gharial and Ganges dolphin, and at Shravasti the Jetavana monastery where the Buddha is said to have spent twenty-four rainy seasons.",
        "Four hours north. The gharial and dolphin boat runs early and Jetavana is a place to sit rather than see, which makes the combination a two-day trip. Both are close to empty on most days of the year.",
        '/sightseeing/shravasti'),
      g('Chitrakoot', 285, '5.5 hours', 1, 'Oct-Mar',
        "Ramghat on the Mandakini, the Kamadgiri hill circuit walked barefoot by pilgrims, the Gupt Godavari caves, and the Hanuman Dhara spring on the cliff.",
        "Five and a half hours south. The Kamadgiri parikrama is a five-kilometre walk and best early, and the Mandakini aarti is at dusk. A night covers both with the caves in between.",
        '/sightseeing/chitrakoot'),
      g('Khajuraho', 400, '7 hours', 2, 'Oct-Mar',
        "The western temple group with the Kandariya Mahadeva at its centre, and the quieter eastern and southern groups that most visitors skip entirely.",
        "Seven hours each way. Three days rather than two — fourteen hours of driving for one afternoon of carving is not a weekend. The full middle day for all three temple groups plus the evening light show.",
        '/sightseeing/khajuraho'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Lucknow?',
        answer: 'Varanasi at 320 km, despite not being the shortest drive — the Ganga aarti at dusk and a boat on the river at sunrise are the two things worth travelling for, they are at opposite ends of the day, and one night gets you both. Ayodhya at 135 km is the easier trip if the weekend is short.' },
      { question: 'Which weekend trips from Lucknow need three days?',
        answer: 'Khajuraho at seven hours is the only one here that genuinely does. Everything else works as a two-day weekend, though Dudhwa at five hours and Chitrakoot at five and a half are better with two nights if you can take the extra day.' },
      { question: 'Has the Agra-Lucknow expressway changed what is possible for a weekend?',
        answer: 'Substantially. Agra is now around four hours from Lucknow for 335 km, which used to be most of a day. That puts the Taj at sunrise within reach of a two-day weekend, and it also shortens the run toward Mathura and the Braj towns. The Purvanchal expressway has done the same thing eastward for Varanasi.' },
      { question: 'When is the best time for the Terai wildlife parks from Lucknow?',
        answer: 'November to June, with March to June best for sightings as the water sources shrink and animals concentrate. Dudhwa and Katarniaghat both close their core areas during the monsoon, roughly mid-June to mid-November, because the Terai floods. Winter mornings are cold and the grassland fog can delay the first safari.' },
      { question: 'How much does a weekend trip from Lucknow cost by car?',
        answer: 'Each destination carries its return fare above, computed from the published round-trip rate card. Ayodhya, Dudhwa, Prayagraj, Katarniaghat and Chitrakoot price from the round-trip minimum; Varanasi, Agra and Khajuraho exceed 300 km one way and sit above it. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  varanasi: {
    slug: 'varanasi',
    city: 'Varanasi',
    heroTitle: 'Weekend Getaways from Varanasi by Car',
    heroSubtitle:
      "Seven places worth a night from Varanasi, priced as a return journey with a chauffeur.",
    heroImage: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
    intro: [
      "Varanasi is at the eastern end of our service area, and the weekends from it run west along the Ganga and north toward the Nepal border. The Purvanchal expressway has made the Lucknow direction considerably faster than it was.",
      "The day-trip page covers Sarnath, Ramnagar, Chunar and the places inside an easy return. This page is for the trips a night makes possible — the other river cities, the Buddhist circuit sites, and the two places where being there at dawn is the entire point.",
      "Return fares come from the published round-trip rate card rather than being quoted by hand.",
    ],
    destinations: [
      g('Prayagraj', 125, '2.5 hours', 1, 'Oct-Mar; Magh Mela in Jan-Feb',
        "The Triveni Sangam where the Ganga and Yamuna meet with visibly different water, Akbar's fort above it, Anand Bhavan, and the Mughal tombs at Khusro Bagh.",
        "Two and a half hours on the expressway. The sangam boat is a sunrise trip — the two rivers' colours show clearly in early light and not at midday. Anand Bhavan and Khusro Bagh on Saturday afternoon.",
        '/distance/varanasi-to-prayagraj'),
      g('Bodh Gaya', 250, '5 hours', 1, 'Oct-Mar',
        "The Mahabodhi temple and the Bodhi tree under which the Buddha is said to have attained enlightenment, with the monasteries built around it by a dozen Buddhist countries, each in its own national style.",
        "Five hours east. The Mahabodhi compound is at its best between five and seven in the morning when the chanting starts and the day's crowds have not arrived. That is the whole case for the night.",
        '/distance/varanasi-to-bodh-gaya'),
      g('Ayodhya', 200, '4 hours', 1, 'Oct-Mar',
        "The Ram Janmabhoomi complex, Hanuman Garhi, Kanak Bhawan, and the Saryu ghats where the evening aarti takes place.",
        "Four hours. Security queues at the main complex take real time and the Saryu aarti is at dusk, so the night lets you take the ghats in the evening and the temple early on Sunday.",
        '/distance/varanasi-to-ayodhya'),
      g('Lucknow', 320, '5 hours', 1, 'Oct-Mar',
        "The Bara Imambara with its labyrinth, the Chota Imambara, the Residency ruins, Hazratganj in the evening, and the Awadhi food that is the real reason most people come.",
        "Five hours on the Purvanchal expressway. The Residency is best in early light and the city's food is an evening business, which makes a night the sensible shape rather than a rushed afternoon.",
        '/distance/lucknow-to-varanasi'),
      g('Chitrakoot', 230, '4.5 hours', 1, 'Oct-Mar',
        "Ramghat on the Mandakini, the five-kilometre Kamadgiri hill circuit walked barefoot, the Gupt Godavari caves, and the Hanuman Dhara cliff spring.",
        "Four and a half hours. The Kamadgiri parikrama wants an early start before the stone heats and the Mandakini aarti is at dusk — one night covers both, with the caves between them.",
        '/sightseeing/chitrakoot'),
      g('Shravasti', 300, '6 hours', 1, 'Oct-Mar',
        "The Jetavana monastery where the Buddha is said to have spent twenty-four rainy seasons, the Anathapindika stupa, and the Sahet-Mahet excavations — all of it usually almost empty.",
        "Six hours north-west. Shravasti is a place to sit rather than tour, and it is at its best early and late when the light is low across the excavation mounds. One night, taken slowly.",
        '/sightseeing/shravasti'),
      g('Khajuraho', 405, '7.5 hours', 2, 'Oct-Mar',
        "The western temple group centred on the Kandariya Mahadeva, with the eastern and southern groups that most visitors skip, and the evening sound-and-light show.",
        "Seven and a half hours. Three days. The temples want a full unhurried day and the drive is too long to bookend a single night with — Prayagraj breaks the return journey well.",
        '/sightseeing/khajuraho'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Varanasi?',
        answer: 'Prayagraj at 125 km for a short weekend — two and a half hours, and a sunrise boat at the sangam where the Ganga and Yamuna run visibly different colours. Bodh Gaya at 250 km is the stronger trip if you have the time, and the Mahabodhi compound between five and seven in the morning is the reason to stay the night.' },
      { question: 'How is this different from the places to visit near Varanasi page?',
        answer: 'That page covers day trips — Sarnath at nine kilometres, Ramnagar, Chunar and the other places within an easy return. This page is for the ones a night makes possible: Prayagraj and Bodh Gaya at dawn, Ayodhya with the evening aarti, Lucknow, Chitrakoot, Shravasti and Khajuraho. None of these works properly as a single day.' },
      { question: 'Can I do Bodh Gaya as a day trip from Varanasi?',
        answer: 'You can drive it in five hours each way, but you would arrive in the middle of the day, which is the worst time at the Mahabodhi — hot, crowded, and without the early-morning chanting that is what most people remember. One night turns ten hours of driving into a trip that is actually worth making.' },
      { question: 'How much does a weekend trip from Varanasi cost by car?',
        answer: 'The return fare is shown against every destination, computed from the published round-trip rate card. Prayagraj, Bodh Gaya, Ayodhya and Chitrakoot price from the round-trip minimum; Lucknow, Shravasti and Khajuraho exceed 300 km one way and are above it. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  ayodhya: {
    slug: 'ayodhya',
    city: 'Ayodhya',
    heroTitle: 'Weekend Getaways from Ayodhya by Car',
    heroSubtitle:
      "Seven places worth a night from Ayodhya, with the drive, the return fare and the weekend shape.",
    heroImage: '/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg',
    intro: [
      "Ayodhya sits on the Saryu in central-eastern Uttar Pradesh, within three hours of Lucknow and four of Varanasi, with the Nepal-border forests and the Buddhist sites to the north and the river cities to the south.",
      "The day-trip page covers Faizabad, Shravasti and the places inside an easy return. This page is for the trips that need the night — the two great river cities, the Terai wildlife, and Bodh Gaya, which is five and a half hours away and worth every one of them.",
      "Return fares are computed from the published round-trip rate card.",
    ],
    destinations: [
      g('Lucknow', 135, '2.5-3 hours', 1, 'Oct-Mar',
        "The Bara Imambara and its labyrinth, the Chota Imambara, the Residency ruins, Hazratganj in the evening, and the Awadhi food the city is actually famous for.",
        "Under three hours. The Residency is best early and the kebab houses are an evening business, so a night gets both ends of what Lucknow is for. Bara Imambara on Sunday morning before the heat.",
        '/distance/lucknow-to-ayodhya'),
      g('Shravasti', 110, '2.5 hours', 1, 'Oct-Mar',
        "Jetavana, where the Buddha is said to have spent twenty-four rainy seasons, the Anathapindika stupa, and the Sahet-Mahet mounds — almost always empty.",
        "Two and a half hours. This is a sitting-still place rather than a sightseeing one, and the light across the excavations at either end of the day is the point. One night, unhurried.",
        '/sightseeing/shravasti'),
      g('Varanasi', 200, '4 hours', 1, 'Oct-Mar',
        "The ghats, the Kashi Vishwanath corridor, the Dashashwamedh aarti at dusk, and Sarnath nine kilometres out where the Buddha gave his first sermon.",
        "Four hours. The aarti at sunset and a boat at sunrise are the two things to be there for and they are at opposite ends of the day, which settles the question of a night. Sarnath on the way home.",
        '/distance/varanasi-to-ayodhya'),
      g('Prayagraj', 165, '3.5 hours', 1, 'Oct-Mar; Magh Mela in Jan-Feb',
        "The Triveni Sangam with its visibly different waters, Akbar's fort, Anand Bhavan, and the Mughal tombs at Khusro Bagh.",
        "Three and a half hours. The sangam boat is a dawn trip — the colour difference between the Ganga and the Yamuna shows in early light and washes out by midday. Anand Bhavan fills the afternoon before.",
        '/distance/ayodhya-to-prayagraj'),
      g('Dudhwa National Park', 230, '5 hours', 1, 'Nov-Jun',
        "Terai grassland and sal forest on the Nepal border, with tiger, large swamp deer herds, and the reintroduced one-horned rhino at Salukhapur.",
        "Five hours north. Safaris are morning and afternoon on booked slots, so one night gets two drives. The rhino enclosure and the Kishanpur range are effectively separate half-days.",
        '/sightseeing/dudhwa'),
      g('Bodh Gaya', 295, '5.5 hours', 1, 'Oct-Mar',
        "The Mahabodhi temple and the Bodhi tree, surrounded by monasteries built by a dozen Buddhist nations, each in its own architectural tradition.",
        "Five and a half hours east. The compound between five and seven in the morning, when the chanting begins, is a different place from the one day visitors see at noon. That is the reason for the night.",
        '/sightseeing/bodh-gaya'),
      g('Agra', 465, '7 hours', 2, 'Oct-Mar',
        "The Taj Mahal, Agra Fort, Itmad-ud-Daulah across the river, and Fatehpur Sikri forty kilometres west.",
        "Seven hours on the Lucknow and Agra expressways. Three days. The Taj at sunrise is the fixed point and the fort plus Fatehpur Sikri is a second full day, so one night would waste the journey.",
        '/distance/agra-to-ayodhya'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Ayodhya?',
        answer: 'Varanasi at 200 km. Four hours, and the two things worth travelling for — the Ganga aarti at dusk and a boat at sunrise — are at opposite ends of the day, which is exactly what a night away is for. Lucknow at 135 km is the easier trip and the better one if food and architecture interest you more than the river.' },
      { question: 'Which weekend trips from Ayodhya need three days?',
        answer: 'Agra at seven hours is the only one. Everything else on this list works as a two-day weekend with one night, though Dudhwa at five hours and Bodh Gaya at five and a half are both better with two nights if the time is available.' },
      { question: 'Is Shravasti worth a weekend when it is only two and a half hours away?',
        answer: 'It depends what you want from it. As a sightseeing stop it is a day trip, which is why it also appears on the day-trip page. As a place to be quiet in, it is one of the few major Buddhist sites in India that is empty on most days of the year, and the low light across the Sahet-Mahet mounds at either end of the day is the thing a day visitor at noon does not see.' },
      { question: 'How much does a weekend trip from Ayodhya cost by car?',
        answer: 'The return fare is shown against each destination, from the published round-trip rate card. Lucknow, Shravasti, Varanasi, Prayagraj, Dudhwa and Bodh Gaya all price from the round-trip minimum; Agra at 465 km is above it. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  mathura: {
    slug: 'mathura',
    city: 'Mathura',
    heroTitle: 'Weekend Getaways from Mathura by Car',
    heroSubtitle:
      "Seven places worth a night from Mathura, with the drive, the return fare and how the weekend runs.",
    heroImage: '/images/sightseeing/Mathura/mathura_hero_section.jpg',
    intro: [
      "Mathura sits on the Yamuna Expressway between Delhi and Agra, which makes it one of the best-connected towns on this list. Agra is an hour, Delhi two, Jaipur three and a half, and the Rajasthan wildlife parks are inside four.",
      "The day-trip page covers Vrindavan, Gokul, Barsana, Nandgaon and the Braj circuit. This page is for the trips a night makes work — the forts, the bird and tiger reserves, and the two cities either end of the expressway that deserve a morning rather than an afternoon.",
      "Return fares come from the published round-trip rate card.",
    ],
    destinations: [
      g('Agra', 60, '1 hour', 1, 'Oct-Mar',
        "The Taj Mahal, Agra Fort, Itmad-ud-Daulah's tomb across the river, and Fatehpur Sikri forty kilometres west.",
        "An hour on the expressway. The Taj at sunrise is the entire argument for the night — the marble changes colour for twenty minutes after the gates open, and the crowd is a fraction of what it is by nine.",
        '/distance/mathura-to-agra'),
      g('Bharatpur', 40, '1 hour', 1, 'Nov-Feb',
        "Keoladeo Ghana, a former royal duck shoot turned sanctuary where the winter count passes 350 species, with Deeg Palace and its monsoon fountains 32 km on.",
        "An hour away, and the park rewards dawn and dusk at opposite ends of a day. Arrive Saturday afternoon, walk the causeway at dusk, be at the gate at sunrise. Deeg on the way home.",
        '/sightseeing/bharatpur'),
      g('Delhi', 150, '2.5 hours', 1, 'Oct-Mar',
        "Humayun's Tomb, the Qutb complex, Lodhi Gardens, Old Delhi around the Jama Masjid, and whatever is on at the museums and galleries.",
        "Two and a half hours on the expressway. Old Delhi in the late afternoon and the monuments on Sunday morning, which is how to see them without the midday heat or the coach parties.",
        '/distance/delhi-to-mathura'),
      g('Jaipur', 185, '3.5 hours', 1, 'Oct-Feb',
        "Amber Fort above the Maota lake, the City Palace, Hawa Mahal and Jantar Mantar in the walled city, the Panna Meena stepwell, and Nahargarh for the evening.",
        "Three and a half hours. The walled city on Saturday afternoon, Nahargarh at sunset, Amber at eight on Sunday before the ramp fills — the last of which is the thing a day trip can never manage.",
        '/distance/jaipur-to-mathura'),
      g('Ranthambore', 290, '5 hours', 1, 'Oct-Jun',
        "A tiger reserve wrapped around a tenth-century fort, with the ruins inside the park and part of the safari, and Padam Talao with the hunting lodge above it.",
        "Five hours. Safaris run dawn and mid-afternoon on booked slots, so one night buys two drives in different zones and roughly doubles the chance of a sighting. Permits before the car, always.",
        '/sightseeing/ranthambore'),
      g('Gwalior', 180, '3 hours', 1, 'Oct-Mar',
        "A hill fort Babur called the pearl among Indian fortresses, with the Man Singh palace and Teli ka Mandir inside, Jai Vilas palace below, and the Sas Bahu temples over the valley.",
        "Three hours south. The fort needs three unhurried hours and the sound-and-light show is after dark, so the night is what lets you have both. Jai Vilas and the tombs on Sunday.",
        '/sightseeing/gwalior'),
      g('Orchha', 290, '5 hours', 1, 'Oct-Mar',
        "Cenotaphs along the Betwa, the Jahangir Mahal, and the Chaturbhuj temple rising out of a village of a few thousand — one of the few medieval sites you can still have largely to yourself.",
        "Five hours. Arrive for the late afternoon, spend the golden hour among the chhatris on the river, and take the Lakshmi Narayan temple on Sunday morning before driving back.",
        '/sightseeing/orchha'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Mathura?',
        answer: 'Agra at 60 km, and the reason is entirely about timing rather than distance — one hour away, and a night there puts you at the Taj gates at sunrise, which is a different building from the one visitors see at ten. Bharatpur at 40 km is the better choice between November and February if birds interest you more than marble.' },
      { question: 'How is this different from the places to visit near Mathura page?',
        answer: 'That page covers the Braj circuit — Vrindavan, Gokul, Barsana, Nandgaon and the other places within an easy return, all of them closely tied to Mathura itself. This page leaves Braj entirely: forts, wildlife reserves and the two expressway cities, none of which works properly as a single day from here.' },
      { question: 'Does the Yamuna Expressway make these trips faster?',
        answer: 'Considerably, in two directions. Agra is an hour and Delhi two and a half, both on six-lane road, which is what makes a one-night trip to either genuinely worthwhile rather than mostly driving. It is also fully FASTag-enabled, so the toll plazas at Jewar and Mathura are quick.' },
      { question: 'How much does a weekend trip from Mathura cost by car?',
        answer: 'The return fare appears against each destination and comes from the published round-trip rate card. Everything under 300 km one way prices from the round-trip minimum, which is every destination on this list. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are charged at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  faridabad: {
    slug: 'faridabad',
    city: 'Faridabad',
    heroTitle: 'Weekend Getaways from Faridabad by Car',
    heroSubtitle:
      "Eight places worth a night from Faridabad, with the drive, the return fare and the weekend shape.",
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    intro: [
      "Faridabad is on the southern edge of the NCR, which puts it closer to Agra and the Rajasthan forts than most of Delhi is, and only marginally further from the Uttarakhand hills. Both the Yamuna Expressway and the Delhi-Mumbai Expressway are reachable without crossing the city.",
      "The day-trip page covers Surajkund, Damdama, Sohna and the places inside an easy return. This page is for the trips that need the night — the hill stations, the tiger reserves, and the heritage towns where arriving the evening before changes what you see.",
      "Return fares are computed from the published round-trip rate card.",
    ],
    destinations: [
      g('Agra', 170, '2.5-3 hours', 1, 'Oct-Mar',
        "The Taj Mahal, Agra Fort, Itmad-ud-Daulah across the river, and Fatehpur Sikri forty kilometres west.",
        "Under three hours on the Yamuna Expressway. The Taj at sunrise is why you stay — twenty minutes of changing colour after the gates open, with a fraction of the mid-morning crowd. Fort and Fatehpur Sikri on Sunday.",
        '/distance/faridabad-to-agra'),
      g('Neemrana', 125, '2 hours', 1, 'Oct-Mar',
        "A fifteenth-century fort palace built into a hillside in nine tiers, with the step well at Neemrana nearby and a zip line across the fort's own ravine.",
        "Two hours. The fort is the destination rather than a sight in a town, and it is at its best in the evening and at breakfast on the ramparts — neither of which a day visitor gets.",
        '/sightseeing/neemrana'),
      g('Jaipur', 240, '4 hours', 1, 'Oct-Feb',
        "Amber Fort above its lake, the City Palace, Hawa Mahal and Jantar Mantar, the Panna Meena stepwell, and Nahargarh on the ridge for the evening.",
        "Four hours. Walled city Saturday afternoon, Nahargarh at sunset, Amber at eight on Sunday before the ramp queue — the last being exactly what a day trip cannot do.",
        '/distance/faridabad-to-jaipur'),
      g('Rishikesh', 280, '5.5 hours', 1, 'Sep-Jun',
        "Rafting between Shivpuri and Rishikesh, the two footbridges, the Beatles ashram, and the Triveni Ghat aarti at dusk.",
        "Five and a half hours. Rafting is a morning activity and the aarti is at sunset, so the night is what turns a choice between them into both.",
        '/distance/faridabad-to-rishikesh'),
      g('Jim Corbett', 290, '6 hours', 1, 'Nov-Jun',
        "Safari zones at Bijrani, Jhirna and Dhikala along the Ramganga, in India's oldest national park. Elephant, gharial and birds reliably; tiger with patience.",
        "Six hours, and safaris are booked by zone and slot. One night gets two drives; a day trip gets none worth having. Book the permits before you book the car.",
        '/sightseeing/jim-corbett'),
      g('Mussoorie', 320, '6.5 hours', 2, 'Mar-Jun, Sep-Nov',
        "The Mall, Gun Hill, Kempty Falls, the Camel's Back road for the Doon valley view, and Landour above the town with its cottages and bakery.",
        "Six and a half hours with a long climb at the end. Two nights — Landour early in the morning is the quiet half of Mussoorie, and it is gone by the time a day visitor has walked up.",
        '/distance/faridabad-to-mussoorie'),
      g('Sariska and Alwar', 150, '3 hours', 1, 'Oct-Jun',
        "The Sariska tiger reserve in the Aravallis, the Kankwari fort inside it, and at Alwar the Bala Quila hill fort, the City Palace and the Siliserh lake palace.",
        "Three hours. Sariska safaris are morning and afternoon, and Alwar's fort and lake are a half-day of their own. One night fits a drive, the fort and the lake comfortably.",
        '/sightseeing/sariska'),
      g('Shimla', 370, '7.5 hours', 2, 'Mar-Jun, Sep-Nov, Dec-Feb',
        "The Ridge and the Mall, Christ Church, Jakhoo temple above the town, the Viceregal Lodge, and the Kalka toy train.",
        "Seven and a half hours, the last three climbing. Two nights. A single night would be fifteen hours of driving for one afternoon, and Shimla has three days in it.",
        '/distance/faridabad-to-shimla'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Faridabad?',
        answer: 'Agra at 170 km. Under three hours on the Yamuna Expressway, and a night there means the Taj at sunrise rather than at ten with everyone else. Neemrana at 125 km is the better choice for a short, easy weekend where the hotel is the destination.' },
      { question: 'Is Faridabad better placed than Delhi for a weekend south?',
        answer: 'Marginally, yes. Faridabad sits on the southern edge of the NCR, so the Yamuna Expressway toward Agra and the roads toward Alwar and Sariska are reachable without crossing Delhi — which on a Saturday morning is worth half an hour or more. For the Uttarakhand hills the advantage reverses and Delhi is slightly closer.' },
      { question: 'Which weekend trips from Faridabad need three days?',
        answer: 'Mussoorie at six and a half hours and Shimla at seven and a half. Both involve a long climb at the end of a long drive, and both are towns worth a full day plus an evening. Agra, Neemrana, Jaipur, Rishikesh, Corbett and Sariska all work with one night.' },
      { question: 'Does the Surajkund mela affect travel from Faridabad?',
        answer: 'For about a fortnight each February, yes. The crafts mela draws very large crowds to the Surajkund area in south Faridabad and the roads around it get heavy, particularly at weekends. If you are driving out on one of those weekends, leave early or route around it — or go to the mela instead, which is worth a day.' },
      { question: 'How much does a weekend trip from Faridabad cost by car?',
        answer: 'The return fare is shown against each destination, computed from the published round-trip rate card. Agra, Neemrana, Jaipur, Rishikesh, Corbett and Sariska price from the round-trip minimum; Mussoorie and Shimla exceed 300 km one way and sit above it. Fuel, the driver and GST are included; tolls, parking, permits and the driver night allowance are at actuals.' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  ghaziabad: {
    slug: 'ghaziabad',
    city: 'Ghaziabad',
    heroTitle: 'Weekend Getaways from Ghaziabad by Car',
    heroSubtitle:
      "Eight places worth a night from Ghaziabad, with the drive, the return fare and how each weekend runs.",
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    intro: [
      "Ghaziabad is on the north-eastern edge of the NCR, which makes it the best-placed of the satellite cities for Uttarakhand — the Delhi-Meerut Expressway runs straight out of it toward Haridwar and the hills, and you never have to cross Delhi to get there.",
      "The day-trip page covers Garhmukteshwar, Meerut, Hastinapur and the places inside an easy return. This page is for the trips the night makes possible — the Ganga towns, the hill stations, the tiger reserves and the Braj temple circuit.",
      "Return fares are computed from the published round-trip rate card, so what is quoted here matches the booking page.",
    ],
    destinations: [
      g('Haridwar', 190, '3.5 hours', 1, 'Year-round',
        "Har ki Pauri and the evening Ganga aarti, the Mansa Devi and Chandi Devi temples reached by ropeway, and the Rajaji reserve at the edge of town.",
        "Three and a half hours on the expressway. The aarti at dusk and the empty ghats before dawn are two different places, and only a night gets you both. Rajaji on Sunday morning.",
        '/distance/ghaziabad-to-haridwar'),
      g('Rishikesh', 215, '4 hours', 1, 'Sep-Jun',
        "Rafting between Shivpuri and Rishikesh, the Lakshman Jhula and Ram Jhula bridges, the Beatles ashram, and the Triveni Ghat aarti at sunset.",
        "Four hours. Rafting runs on morning slots and the aarti is at dusk — a night is what makes both possible instead of one or the other.",
        '/distance/ghaziabad-to-rishikesh'),
      g('Jim Corbett', 240, '5 hours', 1, 'Nov-Jun',
        "Safari zones at Bijrani, Jhirna and Dhikala on the Ramganga, in India's oldest national park. Elephant, gharial and birds in quantity.",
        "Five hours. Safaris are booked by zone and slot, dawn and mid-afternoon, so one night gets two drives in different zones. Permits first, car second.",
        '/sightseeing/jim-corbett'),
      g('Nainital', 290, '6.5 hours', 2, 'Mar-Jun, Sep-Nov',
        "Naini Lake with the Mall along one shore, the Snow View cable car, Tiffin Top, and the quieter lakes at Bhimtal and Sattal below.",
        "Six and a half hours. Two nights — the lake district has three or four days in it and one night would make the drive the main event.",
        '/distance/ghaziabad-to-nainital'),
      g('Mussoorie', 290, '6 hours', 2, 'Mar-Jun, Sep-Nov',
        "The Mall, Gun Hill, Kempty Falls, the Camel's Back road for the Doon valley view, and Landour with its cottages and bakery above the town.",
        "Six hours with a climb at the end. Two nights, because Landour at seven in the morning is the quiet half of Mussoorie and nobody arriving on a day trip ever sees it.",
        '/distance/ghaziabad-to-mussoorie'),
      g('Mathura and Vrindavan', 170, '3 hours', 1, 'Oct-Mar, and Holi in March',
        "The Krishna birthplace at Mathura and Vrindavan's temples eleven kilometres on — Banke Bihari, the Prem Mandir, ISKCON — with the Yamuna ghats at Vishram Ghat for the evening aarti.",
        "Three hours. Vrindavan opens its temples at four in the morning and the mangala aarti is the thing a day visitor never reaches. That is the whole case for the night.",
        '/distance/ghaziabad-to-mathura'),
      g('Agra', 220, '3.5 hours', 1, 'Oct-Mar',
        "The Taj Mahal, Agra Fort, Itmad-ud-Daulah across the river, and Fatehpur Sikri forty kilometres west.",
        "Three and a half hours on the Yamuna Expressway. The Taj at sunrise is the fixed point — twenty minutes of changing colour with a fraction of the later crowd. Fort and Fatehpur Sikri Sunday.",
        '/distance/agra-to-ghaziabad'),
      g('Lansdowne', 265, '6 hours', 1, 'Year-round',
        "A quiet cantonment hill town with Bhulla Lake, the Tip-in-Top viewpoint, the St Mary's church walk, and deliberately almost nothing else.",
        "Six hours on the Kotdwar road. Lansdowne has no nightlife and limited ATMs and patchy mobile signal in the interiors, which is precisely why people go. Carry cash and a book.",
        '/sightseeing/lansdowne'),
    ],
    faqs: [
      { question: 'What is the best weekend getaway from Ghaziabad?',
        answer: 'Haridwar at 190 km for a short weekend — three and a half hours on the expressway, with the aarti at dusk and the ghats before dawn, which are two completely different experiences of the same place. Rishikesh at 215 km is the better choice if you want the river rather than the ritual.' },
      { question: 'Is Ghaziabad better placed than Delhi for a weekend in the hills?',
        answer: 'For Uttarakhand, yes. The Delhi-Meerut Expressway runs out of Ghaziabad straight toward Haridwar and the hills, so you never cross Delhi — which on a Saturday morning saves real time. For Rajasthan and the Agra direction the advantage reverses, though the Eastern Peripheral gets you onto the Yamuna Expressway without entering Delhi either.' },
      { question: 'Which weekend trips from Ghaziabad need three days?',
        answer: 'Nainital at six and a half hours and Mussoorie at six. Both are hill towns at the end of a long drive with a climb, and both deserve a full day plus an evening. Haridwar, Rishikesh, Corbett, Mathura, Agra and Lansdowne all work comfortably with one night.' },
      { question: 'How much does a weekend trip from Ghaziabad cost by car?',
        answer: 'Each destination carries its return fare, computed from the published round-trip rate card. Haridwar, Rishikesh, Corbett, Mathura, Agra, Lansdowne and Mussoorie price from the round-trip minimum; Nainital is marginally above it. Fuel, the driver and GST are included; tolls, parking, state permits and the driver night allowance are charged at actuals.' },
    ],
  },
};

/** Resolve a city's weekend record. */
export function getWeekendGetaway(slug) {
  return weekendGetaways[slug] || null;
}

/** Every built weekend-getaway city slug. */
export function getAllWeekendSlugs() {
  return Object.keys(weekendGetaways);
}

/**
 * Resolve every on-site link on a weekend record against the build manifest.
 *
 * Record C found four places synthesising hrefs from a city slug, and record K
 * shipped seven broken links the same way. The rule learned from both: a link
 * is resolved on the server and dropped when its target is not served, so it
 * appears only when the destination exists — and appears automatically once one
 * is built.
 */
export function resolveWeekendLinks(record) {
  if (!record) return null;
  return {
    ...record,
    destinations: (record.destinations || []).map((d) => ({
      ...d,
      bookingHref: servedHref(d.bookingSlug),
    })),
  };
}

/** The other weekend cities, for the cross-link row. Served paths only. */
export function otherWeekendCities(currentSlug) {
  return Object.values(weekendGetaways)
    .filter((r) => r.slug !== currentSlug)
    .map((r) => ({ city: r.city, href: servedHref(`/weekend-getaways-from-${r.slug}-by-car`) }))
    .filter((c) => c.href)
    .sort((a, b) => a.city.localeCompare(b.city));
}
