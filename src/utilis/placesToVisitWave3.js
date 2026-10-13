// src/utilis/placesToVisitWave3.js
//
// Seven more near-city destination lists — Week 53, wave 3.
//
// WHY THESE SEVEN
// ---------------
// Wave 2 built the ten cab-service cities that had no day-trip list. Measured
// against the route manifest again, eight cities were left with a /local-taxi/
// page and neither a day-trip list nor a weekend list. These are seven of them.
//
// Gwalior is the eighth and is deliberately absent: no imagery exists for it in
// public/images/sightseeing, and it is in Madhya Pradesh — the destinations a
// Gwalior list would name are outside the North India scope this programme
// works to.
//
// THE DIVIDING LINE AGAINST THE WEEKEND PAGE
// ------------------------------------------
// Both shapes were built for these same seven cities this week, which makes the
// separation between them load-bearing rather than cosmetic. The rule is the
// one wave 1 set:
//
//   A DAY TRIP is bounded by having to be back the same evening. That is the
//   list below.
//
//   A WEEKEND is somewhere a night actually buys something — an early fort, a
//   dawn boat, a morning gondola.
//
// So Khajjiar appears here under Dalhousie at 22 km and not on its weekend page.
// Bundi appears on Ranthambore's weekend page and also here, because at 110 km
// it is genuinely both — and its entry here says which of the two is better.
// Barsana, Gokul and Govardhan appear here under Vrindavan and are explicitly
// excluded from its weekend list.
//
// FARES ARE COMPUTED, NOT WRITTEN
// -------------------------------
// Every fare is derived from pricing.js by fareFor(), identically to wave 2.
// This matters most on this family because the distances are short: a 2 km run
// to Bhagsunag quoted on the outstation minimum would produce a figure nobody
// believes. The rate card already handles that, quoting anything under 100 km
// from the published local package.
//
// ON THE DISTANCES
// ----------------
// Road distances rounded to the nearest useful figure, and drive times for the
// actual road rather than derived from an average speed — which would be wrong
// by an hour on the Parvati and Chamba routes. These are the figures to check
// first if a fare is ever questioned, because every fare is computed from them.

import { fareFor } from './pricing.js';

/** Indian-grouped rupee amount for a one-way trip, from the published rate card. */
const q = (km, vehicle) => Math.round(fareFor(km, vehicle).amount).toLocaleString('en-IN');

/** Expand a compact destination, computing both fares from the distance. */
const d = (name, km, time, bestFor, description, highlights, bestTime, bookingSlug) => ({
  name,
  distance: `${km} km`,
  time,
  sedanFare: q(km, 'sedan'),
  suvFare: q(km, 'suv'),
  bestFor,
  description,
  highlights,
  bestTime,
  bookingSlug,
});

export const placesToVisitWave3 = {
  dalhousie: {
    city: 'Dalhousie',
    slug: 'dalhousie',
    heroTitle: 'Places to Visit Near Dalhousie',
    heroSubtitle: 'Khajjiar, Kalatop and the Chamba valley — day trips with the fare for each',
    description: [
      'Dalhousie is spread across five wooded hills at about 1,970 metres, and almost everything worth seeing from it is within an hour. That is unusual for a hill station and it is the reason a car here is used in short bursts rather than for long drives.',
      'Khajjiar is the one everybody comes for — a saucer of meadow ringed with deodar, twenty-two kilometres and an hour away through the Kalatop forest. Doing the two together is the standard day and the right one, because the sanctuary is on the road in rather than a detour from it.',
      'The rest divides into the very short and the one real drive. Panchpula, Satdhara and Bakrota are all walking-distance-plus-a-car-ride from the Mall. Chamba, at fifty kilometres and two hours, is the only genuine day trip on the list, and the ten-century temple courtyard there is the best thing in the district.',
    ],
    destinations: [
      d('Khajjiar', 22, '1 hour', 'Meadow, Lake, Deodar',
        'A broad saucer of grass ringed by deodar with a small lake in the middle, at about 1,950 metres. The Khajji Nag temple sits at the edge with a carved wooden interior. Go early — it is a single meadow and by noon it has a fairground on it.',
        ['Khajjiar meadow and lake', 'Khajji Nag temple', 'Deodar forest walk'], 'Mar-Jun, Sep-Nov', '/dalhousie-to-khajjiar'),
      d('Kalatop Wildlife Sanctuary', 10, '30 minutes', 'Forest, Birding, Walk',
        'Dense deodar and oak on the Khajjiar road, with a forest rest house and a level walking trail through it. Himalayan birds, occasional deer and black bear in the higher reaches. The best hour on this list for anyone who would rather walk than queue.',
        ['Forest trail', 'Rest house viewpoint', 'Himalayan birdlife'], 'Mar-Jun, Sep-Nov', '/dalhousie-to-kalatop'),
      d('Dainkund Peak', 10, '30 minutes', 'Highest Point, Views',
        'The highest point around Dalhousie at roughly 2,750 metres, with the Pholani Devi temple at the top and a ridge walk to reach it. On a clear morning you can see the Pir Panjal and the Dhauladhar at once. It is windy and exposed, which is the point.',
        ['Pholani Devi temple', 'Ridge walk', 'Pir Panjal views'], 'Mar-Jun, Sep-Nov', '/dalhousie-to-dainkund'),
      d('Panchpula', 3, '15 minutes', 'Waterfall, Memorial',
        'A set of small bridges over a mountain stream that feeds the town water supply, with the samadhi of Sardar Ajit Singh above it. Short, pleasant and busy — best in the first hour of the day or the last.',
        ['Stream and bridges', 'Ajit Singh memorial', 'Satdhara on the way'], 'Mar-Jun, Sep-Nov', '/dalhousie-to-panchpula'),
      d('Satdhara Falls', 4, '15 minutes', 'Springs, Short Walk',
        'Seven springs on the Panchpula road, said locally to carry mica and to be good for the skin. A fifteen-minute stop rather than a destination, and almost always combined with Panchpula on the same run.',
        ['Seven springs', 'Forest path', 'Combines with Panchpula'], 'Mar-Jun, Sep-Nov', '/dalhousie-to-satdhara'),
      d('Bakrota Hills', 5, '20 minutes', 'Ridge Walk, Snow Views',
        'The highest of the five Dalhousie hills, circled by the Bakrota walk — a level three-kilometre loop with the snow line in view for most of it. The quietest walk in town and the one locals actually use.',
        ['Bakrota round walk', 'Snow-line views', 'Colonial houses'], 'Mar-Jun, Sep-Nov', '/dalhousie-to-bakrota'),
      d('Bhalei Mata Temple', 30, '1.25 hours', 'Temple, Valley Road',
        'A Shakti temple on the Chamba road at about 1,800 metres, drawing steady local pilgrimage and very few visitors. The drive along the ridge is most of the reason to go.',
        ['Bhalei Mata shrine', 'Ridge road', 'Chamba valley views'], 'Mar-Jun, Sep-Nov', '/dalhousie-to-bhalei'),
      d('Chamba', 50, '2 hours', 'Temples, Museum, Chaugan',
        'The old capital of the Chamba state, with the Lakshmi Narayan complex — six stone shikhara temples from the tenth century onward in a single courtyard — the Bhuri Singh museum of Pahari miniatures, and the Chaugan promenade the whole town walks at dusk.',
        ['Lakshmi Narayan temples', 'Bhuri Singh Museum', 'Chaugan promenade'], 'Mar-Jun, Sep-Nov', '/dalhousie-to-chamba'),
    ],
    faqs: [
      { question: 'What is the best day trip from Dalhousie?',
        answer: 'Khajjiar and Kalatop together, as one day. The sanctuary sits on the road to the meadow rather than off it, so you get a forest walk and the meadow on one car. Leave early — Khajjiar is a single field and it fills by late morning.' },
      { question: 'How far is Khajjiar from Dalhousie?',
        answer: 'Twenty-two kilometres, about an hour, through the Kalatop forest. It is comfortably a half day, which is why it is on this list rather than the weekend one.' },
      { question: 'Is Chamba worth a day trip from Dalhousie?',
        answer: 'Yes, though two hours each way makes it a full day rather than a half one. The Lakshmi Narayan courtyard holds six stone temples from the tenth century onward and is the single best thing in the district. If you want it unhurried, the weekend page treats it as an overnight.' },
      { question: 'When should I avoid these drives?',
        answer: 'July and August. The Chamba and Khajjiar roads are landslide-prone in the monsoon, the meadow is in cloud, and the Dainkund views that justify the climb are not there. Mid-March to June and September to November are the windows.' },
      { question: 'How much does a day trip from Dalhousie cost by car?',
        answer: 'Each destination carries its fare, computed from the published rate card. Everything on this list is under 100 km, so all of it prices from the local package rather than the outstation minimum. Fuel, the driver and GST are included; parking and entry fees are at actuals.' },
    ],
  },

  kasol: {
    city: 'Kasol',
    slug: 'kasol',
    heroTitle: 'Places to Visit Near Kasol',
    heroSubtitle: 'Manikaran, Tosh and the Parvati valley — day trips with the fare for each',
    description: [
      'Kasol sits on the Parvati at about 1,640 metres, and the valley above it is the day trip — Manikaran, Jari, Barshaini and Tosh are all strung along the same road within half an hour to an hour.',
      'That road ends at Barshaini. Above it the routes to Kheerganga are walking tracks, so a car takes you to the trailhead and no further. Anything outside the valley means coming back down to Bhuntar, about fifty minutes, and turning from there.',
      'Everything below is a genuine there-and-back day. Manali at seventy-five kilometres is the one long option and works as a full day, though the weekend page makes the case for giving it a night instead.',
    ],
    destinations: [
      d('Chalal', 2, '30 minutes on foot', 'Riverside Trek, Cafes',
        'A short walk rather than a drive — across the bridge from Kasol and up the left bank through pine forest, about half an hour. A cluster of cafes and guest houses by the river at the end of it. The easiest introduction to the valley.',
        ['Riverside forest trail', 'Parvati river', 'Village cafes'], 'Mar-Jun, Sep-Nov', '/kasol-to-chalal'),
      d('Manikaran', 4, '15 minutes', 'Hot Springs, Gurudwara',
        'Natural hot springs hot enough to cook in, a Sikh gurudwara and a Shiva temple sharing the same bank, and a langar that feeds everybody. Four kilometres from Kasol and the single most visited place in the valley. Cover your head and expect crowds.',
        ['Hot springs', 'Gurudwara Manikaran Sahib', 'Shiva temple'], 'All year', '/kasol-to-manikaran'),
      d('Jari', 10, '30 minutes', 'Valley Views, Junction',
        'The village at the mouth of the Parvati valley where the Malana road branches off, with a long view back down towards the Beas. More a waypoint than a destination, but the viewpoint above it is the best place to understand the valley layout.',
        ['Valley confluence view', 'Malana road junction', 'Village walks'], 'Mar-Jun, Sep-Nov', '/kasol-to-jari'),
      d('Barshaini', 16, '45 minutes', 'Trailhead, Dam',
        'The end of the motorable road and the start of the walks to Kheerganga and Tosh. There is little here beyond the hydro works and a few shops — it is a trailhead, and worth knowing that before driving to it expecting a village.',
        ['Kheerganga trailhead', 'Tosh road junction', 'Parvati gorge'], 'Mar-Jun, Sep-Nov', '/kasol-to-barshaini'),
      d('Tosh', 20, '1 hour', 'Village, Snow Views',
        'A village at about 2,400 metres above Barshaini, the last of the valley settlements, with the snow peaks at the head of the Parvati directly in view. The final stretch is steep and narrow and the last kilometre is often walked.',
        ['Snow peak views', 'Traditional wooden houses', 'Village cafes'], 'Mar-Jun, Sep-Nov', '/kasol-to-tosh'),
      d('Malana', 25, '1.5 hours plus a walk', 'Ancient Village, Customs',
        'One of the oldest self-governing villages in the region, with its own council and strict customs about what outsiders may touch — including the temple and many houses. Reached by road to the hydro project and then a climb. Go with a guide, ask before photographing anybody, and respect the rules you are told.',
        ['Jamlu Devta temple (from outside)', 'Traditional governance', 'High valley walk'], 'May-Oct', '/kasol-to-malana'),
      d('Kullu', 40, '1.5 hours', 'Temples, Shawls, Rafting',
        'The district town down on the Beas — the Raghunath temple at the centre of the Dussehra festival, the shawl and pattu weaving workshops, and the rafting stretch on the river below. A working town rather than a resort.',
        ['Raghunath Temple', 'Shawl weaving workshops', 'Beas rafting'], 'Mar-Jun, Sep-Nov', '/kasol-to-kullu'),
      d('Manali', 75, '2.5-3 hours', 'Solang, Atal Tunnel, Temples',
        'Solang for paragliding and the snow line, the Atal Tunnel through to Lahaul, Hadimba temple in the deodars and Old Manali across the river. Possible as a long day, better with a night — Solang at nine in the morning is a different place from Solang at one.',
        ['Solang Valley', 'Atal Tunnel', 'Hadimba Temple'], 'Mar-Jun, Sep-Nov', '/kasol-to-manali'),
    ],
    faqs: [
      { question: 'Can I drive to Kheerganga from Kasol?',
        answer: 'No. The road ends at Barshaini, about 16 km up the valley, and Kheerganga is a few hours of walking beyond that. A car gets you to the trailhead only — anyone offering to drive you to the hot springs is describing somewhere else.' },
      { question: 'What should I know before visiting Malana?',
        answer: 'It is a self-governing village with strict customs about what outsiders may touch, including the temple and many houses. Go with a local guide, ask before photographing anyone, and follow the rules you are given. It is not a sightseeing stop and should not be treated as one.' },
      { question: 'Is Manikaran worth the four kilometres?',
        answer: 'Yes, and it is the one place in the valley that works in any season. Hot springs, a gurudwara and a Shiva temple on the same bank, with a langar that feeds everybody. It is also the busiest place in the valley, so go early or late.' },
      { question: 'Is Manali a day trip or an overnight from Kasol?',
        answer: 'Both work. Seventy-five kilometres and two and a half to three hours makes a long day, but Solang is much better early, which is the case for a night. The weekend page treats it as an overnight for that reason.' },
      { question: 'How much does a day trip from Kasol cost by car?',
        answer: 'Each destination carries its fare, computed from the published rate card. Everything under 100 km prices from the local package rather than the outstation minimum, which covers all of this list. Fuel, the driver and GST are included; parking and entry fees are at actuals.' },
    ],
  },

  mcleodganj: {
    city: 'McLeodganj',
    slug: 'mcleodganj',
    heroTitle: 'Places to Visit Near McLeodganj',
    heroSubtitle: 'Bhagsunag, Kangra and the tea valley — day trips with the fare for each',
    description: [
      'McLeodganj sits at about 2,080 metres with the Dhauladhar wall directly behind it, and the first four things on this list are close enough that the car is a convenience rather than a necessity.',
      'Beyond the immediate hill, the Kangra valley opens east and south. Norbulingka, Kangra fort and the Masroor rock-cut temples are all within forty minutes to an hour and a half, and they are the most substantial history in the district — Kangra fort is one of the oldest continuously occupied forts in India.',
      'Palampur and the tea gardens at thirty-five kilometres are the furthest here and still an easy half day. Anything past that — Bir, Dalhousie, Amritsar — is on the weekend page, because a night there buys something a day trip cannot.',
    ],
    destinations: [
      d('Bhagsunag', 2, '10 minutes', 'Waterfall, Temple, Cafes',
        'An old Shiva temple with a spring-fed pool, and a waterfall about twenty minutes further up on foot. The walk continues to Shiva Cafe above the falls, which is where most of McLeodganj spends its afternoons. Busy and still worth it.',
        ['Bhagsunag temple', 'Bhagsu waterfall', 'Shiva Cafe walk'], 'Mar-Jun, Sep-Nov', '/mcleodganj-to-bhagsunag'),
      d('Dharamkot', 3, '15 minutes', 'Forest, Triund Trailhead',
        'A quiet village in the pines above McLeodganj, the start of the Triund trek and the location of most of the meditation and yoga courses in the area. Noticeably calmer than the town below it.',
        ['Triund trailhead', 'Pine forest walks', 'Meditation centres'], 'Mar-Jun, Sep-Nov', '/mcleodganj-to-dharamkot'),
      d('Naddi', 4, '15 minutes', 'Snowline Viewpoint, Sunset',
        'A viewpoint village above Dal Lake looking straight at the Dhauladhar snowline, and the best sunset within walking distance of McLeodganj. Ten minutes by car and it feels a long way from the Bhagsu crowds.',
        ['Dhauladhar snowline view', 'Sunset point', 'Dal Lake below'], 'Mar-Jun, Sep-Nov', '/mcleodganj-to-naddi'),
      d('Dharamshala', 9, '30 minutes', 'Stadium, War Memorial',
        'The town below McLeodganj — the HPCA cricket ground with the Dhauladhar standing behind the pavilion, which is the most photographed stadium in the country, plus the war memorial and the Kangra Art Museum.',
        ['HPCA Stadium', 'War Memorial', 'Kangra Art Museum'], 'All year', '/mcleodganj-to-dharamshala'),
      d('Norbulingka Institute', 15, '40 minutes', 'Tibetan Arts, Gardens',
        'A working institute for Tibetan arts — thangka painting, wood carving, metalwork and applique — set in Japanese-influenced gardens with a temple at the centre. The craftspeople work in the open and you can watch. The quietest hour available near Dharamshala.',
        ['Thangka painting studios', 'Seat of Happiness temple', 'Gardens'], 'All year', '/mcleodganj-to-norbulingka'),
      d('Kangra', 20, '45 minutes', 'Fort, Brajeshwari Temple',
        'Kangra fort on a spur above the Banganga and Majhi rivers is among the oldest continuously occupied forts in India, with layers from the Katoch rajas through the Mughals and the Sikhs. The Brajeshwari Devi temple in the town below is the other reason to come.',
        ['Kangra Fort', 'Brajeshwari Devi temple', 'Maharaja Sansar Chand museum'], 'Oct-Jun', '/mcleodganj-to-kangra'),
      d('Palampur', 35, '1.5 hours', 'Tea Gardens, Waterfalls',
        'Tea country — working gardens you can walk into, the Neugal Khad gorge with the Dhauladhar behind it, and Andretta nearby where the Norah Richards estate and the pottery studio are. The greenest part of the valley.',
        ['Tea estates', 'Neugal Khad', 'Andretta pottery'], 'Mar-Jun, Sep-Nov', '/mcleodganj-to-palampur'),
      d('Masroor Rock-Cut Temples', 40, '1.5 hours', 'Monolithic Temples',
        'Fifteen temples cut directly out of a single sandstone ridge in the eighth century, facing a tank that reflects them. Earthquake-damaged and all the more striking for it. Almost nobody goes, which is difficult to explain given what it is.',
        ['Monolithic rock-cut shrines', 'Reflecting tank', 'Eighth-century carving'], 'Oct-Jun', '/mcleodganj-to-masroor'),
    ],
    faqs: [
      { question: 'What is the best day trip from McLeodganj?',
        answer: 'Kangra fort and the Masroor rock-cut temples as one day, if you want substance — a fort occupied for well over a thousand years and fifteen eighth-century temples carved from one ridge, both within an hour and a half. For a half day, Norbulingka is the quietest and most interesting hour nearby.' },
      { question: 'Can I walk to Triund from McLeodganj?',
        answer: 'The trailhead is at Dharamkot, three kilometres up, and the trek is about nine kilometres from there with a steep final stretch. It is a full day out and back, or an overnight at the top. A car takes you to Dharamkot and no further.' },
      { question: 'Is Bhagsunag worth visiting when it is so crowded?',
        answer: 'Yes, in the first or last hour of the day. The temple and spring-fed pool are at the bottom and the waterfall is twenty minutes up on foot, with the cafe walk continuing above it. In the middle of the day it is very busy indeed.' },
      { question: 'How is this different from the weekend list for McLeodganj?',
        answer: 'Everything here is back the same evening. The weekend page covers Bir, Dalhousie, Khajjiar, Amritsar, Manali and Shimla — places where a night buys you a morning you could not otherwise have, such as paragliding on the Bir thermals or the Golden Temple before dawn.' },
      { question: 'How much does a day trip from McLeodganj cost by car?',
        answer: 'Each destination carries its fare, computed from the published rate card. Everything on this list is under 100 km and prices from the local package rather than the outstation minimum. Fuel, the driver and GST are included; parking and entry fees are at actuals.' },
    ],
  },

  prayagraj: {
    city: 'Prayagraj',
    slug: 'prayagraj',
    heroTitle: 'Places to Visit Near Prayagraj',
    heroSubtitle: 'Shringverpur, Kaushambi and the Ganga forts — day trips with the fare for each',
    description: [
      'Prayagraj sits where the Ganga and the Yamuna meet, and the country around it holds more early history than almost anywhere in the plains — Ashokan pillars, Buddhist stupas and river forts, most of it visited by very few people.',
      'The short runs are Bhita, an excavated town site twenty kilometres out, and Shringverpur at forty, where the Ganga embankment and the Nishadraj site sit together. Kaushambi at sixty kilometres is the most substantial: a walled city of the sixth century BCE with an Ashokan pillar still standing.',
      'Two longer options work as full days rather than half. Chunar fort and Vindhyachal are both about ninety kilometres down the Ganga and pair naturally. Varanasi and Chitrakoot appear here for completeness and are better taken as overnights — the weekend page says why.',
    ],
    destinations: [
      d('Bhita', 20, '40 minutes', 'Excavated Town, Museum',
        'An excavated settlement on the Yamuna dating back to the Mauryan period and earlier, with visible street plans, house foundations and a small site presence. For anyone interested in how a town of that age was actually laid out, it is the clearest example near the city.',
        ['Excavated street plan', 'Mauryan-era foundations', 'Yamuna bank'], 'Oct-Mar', '/prayagraj-to-bhita'),
      d('Shringverpur', 40, '1 hour', 'Ancient Embankment, Nishadraj',
        'The site associated with Nishadraj Guha ferrying Rama across the Ganga, and alongside it an excavated water-management embankment of remarkable scale for its period. The temple and the archaeology sit together, which is unusual and worth the hour.',
        ['Nishadraj temple', 'Ancient Ganga embankment', 'Excavated tank'], 'Oct-Mar', '/prayagraj-to-shringverpur'),
      d('Kaushambi', 60, '1.5 hours', 'Ashokan Pillar, Walled City',
        'One of the great cities of the sixth century BCE, with its earthen ramparts still traceable for kilometres and an Ashokan pillar standing on the site. The Buddha is recorded as having preached here. Almost entirely unvisited, which given what it is takes some explaining.',
        ['Ashokan pillar', 'City ramparts', 'Buddhist stupa remains'], 'Oct-Mar', '/prayagraj-to-kaushambi'),
      d('Chunar Fort', 90, '2 hours', 'River Fort, Views',
        'A fort on a rock spur directly above the Ganga, held in turn by Sher Shah Suri, the Mughals and the British, with a long drop to the river from the ramparts. The approach through the stone quarries is part of the experience.',
        ['Fort ramparts', 'Ganga views', 'Sher Shah period walls'], 'Oct-Mar', '/prayagraj-to-chunar'),
      d('Vindhyachal and Mirzapur', 90, '2 hours', 'Shakti Peetha, Carpets',
        'The Vindhyavasini temple at Vindhyachal is one of the Shakti Peethas and draws steady pilgrimage, with the Kali Khoh and Ashtabhuja temples on the hill above it. Mirzapur alongside is the centre of the hand-knotted carpet trade and the workshops take visitors.',
        ['Vindhyavasini temple', 'Kali Khoh and Ashtabhuja', 'Carpet workshops'], 'Oct-Mar', '/prayagraj-to-mirzapur'),
      d('Varanasi', 125, '3 hours', 'Ghats, Sarnath',
        'The ghats, the evening aarti at Dashashwamedh and Sarnath eight kilometres out where the Buddha first taught. Three hours each way makes a day possible, but the dawn boat and the evening aarti are at opposite ends of the day and a day visitor gets one of them.',
        ['Ganga ghats', 'Dashashwamedh aarti', 'Sarnath'], 'Oct-Mar', '/prayagraj-to-varanasi'),
      d('Chitrakoot', 130, '3.5 hours', 'Ramghat, Kamadgiri',
        'Ramghat on the Mandakini, the Kamadgiri hill that pilgrims circle on foot, and the Gupt Godavari caves with a stream running through them. Quiet, forested and quite unlike the rest of this list. Long for a day and comfortable as a night.',
        ['Ramghat', 'Kamadgiri circuit', 'Gupt Godavari caves'], 'Oct-Mar', '/prayagraj-to-chitrakoot'),
    ],
    faqs: [
      { question: 'What is the most interesting day trip from Prayagraj?',
        answer: 'Kaushambi, at sixty kilometres. It was a major city in the sixth century BCE, its earthen ramparts are still traceable for kilometres, and an Ashokan pillar stands on the site. Very few people visit, which is hard to explain given what is there.' },
      { question: 'Can I do Varanasi as a day trip from Prayagraj?',
        answer: 'Three hours each way makes it possible, but it costs you the best parts. The dawn boat along the ghats and the evening aarti are at opposite ends of the day, so a day visitor gets one of the two. The weekend page treats it as an overnight for that reason.' },
      { question: 'Should I combine Chunar and Vindhyachal?',
        answer: 'Yes — they are on the same road about ninety kilometres out and roughly twenty minutes apart. Chunar fort in the morning, the Vindhyavasini temple in the afternoon, and the Mirzapur carpet workshops if there is time.' },
      { question: 'When is the best time for these trips?',
        answer: 'October to March. The plains here pass 45°C in May, which makes any of these unpleasant by mid-morning, and the monsoon raises the rivers, which matters at Shringverpur, Chunar and the Varanasi ghats. Winter mornings bring dense fog on these highways, so start later rather than at dawn.' },
      { question: 'How much does a day trip from Prayagraj cost by car?',
        answer: 'Each destination carries its fare, computed from the published rate card. Bhita, Shringverpur, Kaushambi, Chunar and Mirzapur price from the local package; Varanasi and Chitrakoot are over 100 km and price from the outstation rate. Fuel, the driver and GST are included; tolls, parking and entry fees are at actuals.' },
    ],
  },

  ranthambore: {
    city: 'Ranthambore',
    slug: 'ranthambore',
    heroTitle: 'Places to Visit Near Ranthambore',
    heroSubtitle: 'The fort, Surwal Lake and the Hadoti temples — day trips with the fare for each',
    description: [
      'Almost everybody who comes to Ranthambore comes for the safari and leaves, which means the fort inside the park — one of the largest and oldest hill forts in Rajasthan — is missed by a remarkable number of visitors.',
      'It should not be. Ranthambore fort is thirteen kilometres from the town, sits inside the reserve, and is reached without a safari booking. Deer and langur move through the ruins, and the view from the ramparts is the best orientation to the park you will get.',
      'Beyond it, the country south and east is Hadoti — temple hills, a step-well town and the Chambal gorge. The list is most useful during the monsoon, when the core safari zones close from roughly July to September and everything below is still open.',
    ],
    destinations: [
      d('Ranthambore Fort', 13, '30 minutes', 'Hill Fort, Temples',
        'A tenth-century hill fort inside the reserve, with the Ganesh temple that still receives wedding invitations by post from across India, Jain temples, tanks and long ramparts. Deer and langur move through it. No safari permit is needed and most visitors never go.',
        ['Trinetra Ganesh temple', 'Fort ramparts and tanks', 'Jain temples'], 'Oct-Mar', '/ranthambore-to-ranthambore-fort'),
      d('Surwal Lake', 25, '45 minutes', 'Birding, Winter Migrants',
        'A shallow seasonal lake north of the park that fills after the monsoon and draws flamingo, painted stork, spoonbill and large numbers of waders through the winter. Best in the first hour of light. It dries out by late spring.',
        ['Winter migratory birds', 'Sunrise reflections', 'Village farmland'], 'Nov-Feb', '/ranthambore-to-surwal-lake'),
      d('Chauth Ka Barwara', 35, '1 hour', 'Hill Temple, Climb',
        'A Chauth Mata temple on a hill above the town of the same name, reached by a stepped climb of a few hundred metres. Local pilgrimage rather than a tourist site, with a long view over the Banas country from the top.',
        ['Chauth Mata temple', 'Stepped hill climb', 'Banas valley views'], 'Oct-Mar', '/ranthambore-to-chauth-ka-barwara'),
      d('Khandar Fort', 40, '1.5 hours', 'Ruined Fort, Chambal Country',
        'A ruined hill fort east of the park with Jain and Hindu temples inside the walls and almost no visitors at all. The last stretch of road is rough and the climb is unshaded, which is most of why it stays empty.',
        ['Fort ruins', 'Jain temples', 'Ravine country views'], 'Oct-Mar', '/ranthambore-to-khandar'),
      d('Kaila Devi', 60, '1.5 hours', 'Shakti Temple, Fair',
        'A major Shakti temple in a narrow valley south-east of Karauli, drawing very large numbers during its spring fair and quiet for much of the rest of the year. The drive through the ravines is a genuine part of the trip.',
        ['Kaila Devi temple', 'Ravine drive', 'Spring fair'], 'Oct-Mar', '/ranthambore-to-kaila-devi'),
      d('Karauli', 95, '2 hours', 'City Palace, Madan Mohan Temple',
        'A small princely capital with a red sandstone City Palace, the Madan Mohan Ji temple at the centre of its religious life, and painted interiors in better condition than the visitor numbers would suggest.',
        ['City Palace', 'Madan Mohan Ji temple', 'Painted durbar halls'], 'Oct-Mar', '/ranthambore-to-karauli'),
      d('Bundi', 110, '2.5 hours', 'Garh Palace, Step-wells',
        'The Garh Palace with the Chitrashala murals — the finest surviving Rajput wall paintings anywhere — Taragarh fort above it, and the step-wells of the old town. Possible in a long day, but the murals need morning light, which is the argument for the overnight on the weekend page.',
        ['Chitrashala murals', 'Taragarh Fort', 'Raniji ki Baori'], 'Oct-Mar', '/ranthambore-to-bundi'),
    ],
    faqs: [
      { question: 'Can I visit Ranthambore Fort without a safari booking?',
        answer: 'Yes. The fort is inside the reserve but is reached on its own road and needs no safari permit. It is thirteen kilometres from the town, about half an hour, and it is the most overlooked thing in the area by a wide margin.' },
      { question: 'What is there to do when the park is closed?',
        answer: 'The core zones shut for the monsoon, roughly July to September, and everything on this list stays open. The fort, Chauth Ka Barwara, Khandar, Kaila Devi, Karauli and Bundi are all unaffected — a closed park does not have to mean a cancelled trip.' },
      { question: 'When is Surwal Lake worth the drive?',
        answer: 'November to February, in the first hour of light. It is a shallow seasonal lake that fills after the monsoon and draws flamingo, painted stork and large numbers of waders, then dries out by late spring. Outside that window there is little to see.' },
      { question: 'Is Bundi a day trip or an overnight?',
        answer: 'Two and a half hours makes a long day possible, but the Chitrashala murals in the Garh Palace need morning light to be seen properly, and that means being there at opening. The weekend page treats Bundi as an overnight for exactly that reason.' },
      { question: 'How much does a day trip from Ranthambore cost by car?',
        answer: 'Each destination carries its fare, computed from the published rate card. The fort, Surwal, Chauth Ka Barwara, Khandar, Kaila Devi and Karauli all price from the local package; Bundi is over 100 km and prices from the outstation rate. Fuel, the driver and GST are included; park and monument fees are at actuals.' },
    ],
  },

  srinagar: {
    city: 'Srinagar',
    slug: 'srinagar',
    heroTitle: 'Places to Visit Near Srinagar',
    heroSubtitle: 'The Mughal gardens, Doodhpathri and Gulmarg — day trips with the fare for each',
    description: [
      'Srinagar has an unusual advantage among the cities on this list: its best day trips are genuinely short. Three meadow valleys and a ski resort are all within two hours, and the Mughal gardens are inside the city.',
      'The gardens are the obvious half day — Nishat, Shalimar, Chashme Shahi and Pari Mahal are terraced up the hillside on the Dal shore within a few kilometres of each other, and they were built to be seen in the afternoon light.',
      'The meadows divide by crowd. Gulmarg is the famous one and busy; Doodhpathri and Yusmarg are the same kind of country with a fraction of the visitors, and both are under an hour and a half. Pahalgam and Sonamarg appear here as long days and are better with a night, which the weekend page sets out.',
    ],
    destinations: [
      d('Shankaracharya Temple', 7, '25 minutes', 'Hilltop Temple, City Views',
        'A Shiva temple on the Takht-i-Suleiman hill above the city, reached by a winding road and a final flight of steps. The best single view of Srinagar, the Dal and the ring of mountains behind it. Go in the morning for the light over the lake.',
        ['Hilltop Shiva temple', 'Dal Lake panorama', 'Morning light'], 'Apr-Oct', '/srinagar-to-shankaracharya-temple'),
      d('Mughal Gardens', 12, '35 minutes', 'Nishat, Shalimar, Pari Mahal',
        'Four terraced gardens on the Dal hillside — Nishat with its twelve terraces, Shalimar built for Nur Jahan, the smaller Chashme Shahi around its spring, and Pari Mahal higher up on its own ridge. All within a few kilometres and designed for afternoon light.',
        ['Nishat Bagh', 'Shalimar Bagh', 'Pari Mahal'], 'Apr-Oct', '/srinagar-to-mughal-gardens'),
      d('Dachigam National Park', 22, '1 hour', 'Hangul Deer, Forest',
        'The last refuge of the Kashmir stag, the hangul, in steep forest and meadow above the city. Permits are required and are arranged in advance. The lower park is accessible by road and the upper reaches are walked.',
        ['Hangul deer', 'Forest and meadow', 'Dagwan stream'], 'Apr-Oct', '/srinagar-to-dachigam'),
      d('Doodhpathri', 42, '1.5 hours', 'Meadow, Stream, Quiet',
        'A broad meadow at about 2,700 metres with a shallow milky stream running through it, which is where the name comes from. The same country as Gulmarg with a small fraction of the people. Nothing is built here, which is the appeal.',
        ['Alpine meadow', 'Shaliganga stream', 'Pine forest walks'], 'May-Sep', '/srinagar-to-doodhpathri'),
      d('Yusmarg', 47, '1.5 hours', 'Meadow, Pine Forest, Riding',
        'A meadow ringed with pine at about 2,400 metres, with the Doodh Ganga river below it and the Nilnag lake an hour further on by pony or on foot. The quietest of the easy meadows and a genuine alternative to Gulmarg.',
        ['Yusmarg meadow', 'Doodh Ganga', 'Nilnag lake walk'], 'Apr-Oct', '/srinagar-to-yusmarg'),
      d('Gulmarg', 50, '2 hours', 'Gondola, Meadow, Skiing',
        'The gondola up towards Apharwat in two stages, the highest golf course in the world in summer, and the most serious ski terrain in India from January to March. Go early: the queue is long by mid-morning and the weather often closes in by afternoon.',
        ['Gondola to Apharwat', 'Alpine meadow', 'Golf course'], 'Dec-Mar, May-Sep', '/srinagar-to-gulmarg'),
      d('Wular Lake', 60, '2 hours', 'Large Lake, Birding',
        'One of the largest freshwater lakes in Asia, shallow and fringed with willow, with substantial birdlife and almost no tourist infrastructure. Watlab on the western shore is the usual approach and there is a hillside shrine above it.',
        ['Wular lakeshore', 'Waterbirds', 'Watlab viewpoint'], 'Apr-Oct', '/srinagar-to-wular-lake'),
      d('Pahalgam', 90, '2.5-3 hours', 'Lidder Valley, Betaab, Aru',
        'The Lidder valley with Betaab and Aru each about an hour above the town, and Chandanwari where the Amarnath track begins. Possible as a long day, but Aru and Betaab are much better early, which a day visitor from Srinagar cannot manage.',
        ['Betaab Valley', 'Aru Valley', 'Lidder river'], 'Apr-Oct', '/srinagar-to-pahalgam'),
    ],
    faqs: [
      { question: 'Which meadow should I visit if I want to avoid crowds?',
        answer: 'Doodhpathri or Yusmarg. Both are the same kind of high meadow country as Gulmarg, both are under an hour and a half, and neither has anything built on it. Gulmarg has the gondola and the skiing, and the crowds that follow them.' },
      { question: 'Is Gulmarg a day trip from Srinagar?',
        answer: 'Two hours makes it possible, but the gondola queue is long by mid-morning and the weather frequently closes in during the afternoon, so day visitors often queue and then lose the ride. Staying the night and riding at opening is far more reliable — see the weekend page.' },
      { question: 'Do I need a permit for Dachigam?',
        answer: 'Yes, and it is arranged in advance rather than at the gate. Tell us when you book and we will sort the timing around it. The lower park is reached by road; the upper reaches, where the hangul are more often seen, are walked.' },
      { question: 'When is the best time for these trips?',
        answer: 'April to October for the gardens, meadows and lakes. Gulmarg is the exception — January to March for snow and skiing, with the meadow season May to September. Doodhpathri is effectively May to September because of snow on the approach.' },
      { question: 'How much does a day trip from Srinagar cost by car?',
        answer: 'Each destination carries its fare, computed from the published rate card. Everything on this list is under 100 km and prices from the local package rather than the outstation minimum. Fuel, the driver and GST are included; permits, parking and gondola or entry fees are at actuals.' },
    ],
  },

  vrindavan: {
    city: 'Vrindavan',
    slug: 'vrindavan',
    heroTitle: 'Places to Visit Near Vrindavan',
    heroSubtitle: 'Mathura, Barsana, Govardhan and the Braj towns — day trips with the fare for each',
    description: [
      'Vrindavan sits at the centre of Braj, and the places associated with the Krishna story are spread across a thirty-five kilometre radius around it — Mathura, Gokul, Govardhan, Barsana, Nandgaon and Dauji, every one of them a short drive.',
      'That makes this the densest day-trip list on the site. Six of the eight entries below are within thirty-five kilometres, which means two or three can be combined in a single day without rushing any of them.',
      'The two outside Braj are Bharatpur at sixty kilometres, for Keoladeo and the Deeg water palace, and Agra at seventy. Both work as full days, though Agra is on the weekend page as well because the Taj at sunrise is only available to somebody who slept nearby.',
    ],
    destinations: [
      d('Mathura', 12, '30 minutes', 'Janmabhoomi, Vishram Ghat',
        'The Krishna Janmabhoomi complex, the Vishram Ghat on the Yamuna where the evening aarti is held, the Dwarkadhish temple, and the Government Museum which holds one of the best collections of Kushana and Gupta sculpture anywhere.',
        ['Krishna Janmabhoomi', 'Vishram Ghat aarti', 'Government Museum'], 'Oct-Mar', '/vrindavan-to-mathura'),
      d('Govardhan', 22, '40 minutes', 'Govardhan Hill, Kusum Sarovar',
        'The hill circled on foot by pilgrims on the twenty-one kilometre parikrama, with Kusum Sarovar and its sandstone cenotaphs at one end and Daan Ghati at the other. The sarovar in the late afternoon is the best hour in Braj.',
        ['Govardhan parikrama', 'Kusum Sarovar', 'Daan Ghati temple'], 'Oct-Mar', '/vrindavan-to-govardhan'),
      d('Barsana', 25, '45 minutes', 'Radha Rani Temple, Lathmar Holi',
        'The hill temple of Radha Rani above the town, reached by a stepped climb, and the place the Lathmar Holi is held a few days before the main festival. Quiet and steep for most of the year, and extraordinarily crowded for that week.',
        ['Radha Rani temple', 'Hill steps and views', 'Lathmar Holi'], 'Oct-Mar', '/vrindavan-to-barsana'),
      d('Gokul and Mahavan', 25, '45 minutes', 'Krishna Childhood Sites',
        'The village associated with Krishna being raised, with the Raman Reti sands, the Nand Bhavan on its mound and the Chaurasi Khamba hall. Smaller and far calmer than Vrindavan or Mathura, and a better sense of what Braj looked like.',
        ['Raman Reti', 'Nand Bhavan', 'Chaurasi Khamba'], 'Oct-Mar', '/vrindavan-to-gokul'),
      d('Nandgaon', 30, '1 hour', 'Nand Bhavan, Pan Sarovar',
        'A hill village across from Barsana with the Nand Bhavan temple at the top and Pan Sarovar below it. The two villages exchange the Lathmar Holi between them. Very few visitors outside the festival.',
        ['Nand Bhavan temple', 'Pan Sarovar', 'Hill views over Braj'], 'Oct-Mar', '/vrindavan-to-nandgaon'),
      d('Dauji', 35, '1 hour', 'Baldeo Temple, Huranga Holi',
        'The Dauji temple at Baldeo, dedicated to Krishna\'s elder brother Balarama, and the site of the Huranga Holi the day after the main festival. A working temple town with almost no tourist traffic.',
        ['Dauji Baldeo temple', 'Kshir Sagar tank', 'Huranga Holi'], 'Oct-Mar', '/vrindavan-to-dauji'),
      d('Bharatpur and Deeg', 60, '1.5 hours', 'Keoladeo, Water Palace',
        'Keoladeo national park, a wetland walked or cycled rather than driven and at its peak for migratory birds in January, plus Lohagarh fort in the town and the Deeg water palace half an hour on, whose monsoon fountains still run on festival days.',
        ['Keoladeo National Park', 'Deeg water palace', 'Lohagarh Fort'], 'Nov-Feb', '/vrindavan-to-bharatpur'),
      d('Agra', 70, '1.5-2 hours', 'Taj Mahal, Agra Fort',
        'The Taj, Agra Fort across the river from it, Itimad-ud-Daulah which is the better building for a quiet hour, and Mehtab Bagh on the far bank for the evening view. A comfortable day from here, though the sunrise argues for a night.',
        ['Taj Mahal', 'Agra Fort', 'Itimad-ud-Daulah'], 'Oct-Mar', '/vrindavan-to-agra'),
    ],
    faqs: [
      { question: 'What can I combine in one day from Vrindavan?',
        answer: 'Barsana and Nandgaon pair naturally — they are five kilometres apart and exchange the Lathmar Holi. Govardhan and Kusum Sarovar make another pair, and Mathura with Gokul a third. Six of the eight entries here are within thirty-five kilometres, so two or three in a day is comfortable.' },
      { question: 'When is Holi in Braj and should I plan around it?',
        answer: 'Braj Holi runs over roughly a fortnight rather than one day, with Lathmar Holi at Barsana and Nandgaon a few days before the main festival and Huranga at Dauji the day after. It is extraordinary and it is extremely crowded — plan deliberately for it or deliberately around it, not by accident.' },
      { question: 'Is Agra a day trip from Vrindavan?',
        answer: 'Yes, comfortably — ninety minutes to two hours down the expressway. The one thing a day trip cannot give you is the Taj in the first half hour after opening, which is the best time to see it and the reason Agra is also on the weekend page.' },
      { question: 'Which of these is the quietest?',
        answer: 'Nandgaon and Dauji, by a clear margin. Both are working temple towns with almost no visitor traffic outside the Holi period, and both give a much better sense of Braj than the busier sites closer in.' },
      { question: 'How much does a day trip from Vrindavan cost by car?',
        answer: 'Each destination carries its fare, computed from the published rate card. Everything on this list is under 100 km and prices from the local package rather than the outstation minimum. Fuel, the driver and GST are included; tolls, parking and monument fees are at actuals.' },
    ],
  },
};
