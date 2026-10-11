// src/utilis/placesToVisitWave2.js
//
// Ten more near-city destination lists.
//
// WHY THIS SHAPE, AND WHY THESE TEN CITIES
// ----------------------------------------
// The near-city destination list is the best-converting page shape on the site.
// Measured over the three-month window, /places-to-visit-near-noida earns 2,504
// clicks from 73,157 impressions — a 3.42% click rate against a site average of
// 0.60%, from position 6.89. One page, 6.4% of the entire site's clicks.
//
// It converts because it answers something no search snippet can: where can I go
// from here, how far is it, and what will the car cost. Google can print a
// distance; it cannot print fifteen priced journeys. The reader has to open the
// page, and once open they are looking at a list of priced trips.
//
// Measured against the route manifest, nineteen cities have one of these pages
// and ten cab-service cities do not. These are those ten.
//
// It is also the most distinguishable list family on the site — 40.6% unique
// share against 4.5% for tours-with-guide — and that is a property of the shape
// rather than of the writing: a set of destinations assembled for one origin is
// unique by construction, because no other page assembles that set.
//
// WHY THE FARES ARE COMPUTED AND NOT WRITTEN
// ------------------------------------------
// Every fare below is derived at build time from the site's own rate card in
// pricing.js — `fareFor(distanceKm, vehicle)`, the same function the corridor and
// distance pages quote from. Nothing is typed in.
//
// That matters for two reasons. A hand-written fare drifts the moment a rate
// changes, which is exactly how the wedding car pages ended up advertising
// "from Rs 15,000" above a table starting at Rs 12,000. And a short hop quoted on
// the outstation minimum produces figures nobody believes — the rate card already
// handles that by quoting trips under 100 km from the published local package, so
// a 15 km run to Pushkar is priced as a local trip rather than as 300 km of
// outstation billing.
//
// ON THE DISTANCES
// ----------------
// Road distances, not straight lines, and rounded to the nearest useful figure.
// Drive times are stated for the actual road rather than derived from an average
// speed, because that would be wrong by an hour or more on the hill routes — 51 km
// to Rohtang is not 51 km of highway.
//
// These are the figures to check first if anything on these pages is ever
// questioned: they are the input every fare is computed from, so a wrong distance
// produces a wrong fare.

import { fareFor } from './pricing.js';

/** Indian-grouped rupee amount for a one-way trip, from the published rate card. */
const q = (km, vehicle) => Math.round(fareFor(km, vehicle).amount).toLocaleString('en-IN');

/**
 * Expand a compact destination into the shape the page template expects,
 * computing both fares from the distance.
 */
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

export const placesToVisitWave2 = {
  ajmer: {
    city: 'Ajmer',
    slug: 'ajmer',
    heroTitle: 'Places to Visit Near Ajmer',
    heroSubtitle: 'Pushkar, Kishangarh and the Aravalli forts — day trips with the fare for each',
    description: [
      'Ajmer sits in a gap in the Aravallis, which is why so much is within an easy drive of it. Pushkar is fifteen kilometres over the Nag Pahar hill — close enough that most visitors do the Dargah Sharif in the morning and the Brahma temple and the ghats in the afternoon, on one car for the day.',
      'Beyond Pushkar the destinations spread out. Kishangarh\'s marble yards and the Phool Mahal palace are forty-five minutes north. Roopangarh fort is an hour, and almost empty. Beawar, an hour and a half out, is a working nineteenth-century market town rather than a monument — worth the drive if that appeals more than a ticket queue.',
      'The two long trips are Jaipur at 135 kilometres and Chittorgarh at 190. Both are possible in a day and better as overnights: Chittorgarh\'s fort alone takes most of a day to walk. Everything on this list is quoted below with its road distance, its real drive time and the cab fare, so a day can be planned on the figures rather than on an estimate.',
    ],
    destinations: [
      d('Pushkar', 15, '30 minutes', 'Sacred Lake, Brahma Temple',
        'The only major Brahma temple in the country sits beside Pushkar lake, ringed by fifty-two bathing ghats. Fifteen kilometres over the Nag Pahar hill from Ajmer and an easy half-day, though the lanes around the lake are walking-only.',
        ['Brahma Temple', 'Pushkar Lake and ghats', 'Savitri Temple climb'], 'Oct-Mar', '/ajmer-to-pushkar'),
      d('Kishangarh', 27, '45 minutes', 'Marble City, Phool Mahal',
        'India\'s marble capital, where the dust on the roadside is white. The Phool Mahal palace sits on Gundalao lake and the old fort is still largely intact. Quieter than anywhere else this close to Ajmer.',
        ['Phool Mahal Palace', 'Kishangarh Fort', 'Marble market'], 'Oct-Mar', '/ajmer-to-kishangarh'),
      d('Nasirabad', 25, '40 minutes', 'Cantonment Town',
        'A colonial-era cantonment with wide avenues and old barracks, useful as a short run rather than a day out. Mostly of interest for the military history and the drive itself.',
        ['Cantonment architecture', 'Local markets'], 'Oct-Mar', '/ajmer-to-nasirabad'),
      d('Roopangarh', 40, '1 hour', 'Fort, Heritage Stay',
        'A seventeenth-century fort built by the Kishangarh rulers, now part heritage hotel. Worth the hour for the ramparts and the near-total absence of other visitors.',
        ['Roopangarh Fort', 'Village crafts'], 'Oct-Mar', '/ajmer-to-roopangarh'),
      d('Beawar', 55, '1.5 hours', 'Commercial Town, Old Mandi',
        'A nineteenth-century trading town on the old Agra-Ahmedabad route, with a working grain and cotton market that has not changed much. Not a tourist destination; a good one if you like a functioning Indian market town.',
        ['Grain mandi', 'Old British-era buildings'], 'Oct-Mar', '/ajmer-to-beawar'),
      d('Bhilwara', 130, '3 hours', 'Textile Hub',
        'The centre of Rajasthan\'s textile industry, and the practical stop on the way south toward Chittorgarh. Harni Mahadev temple and the Badnore fort are the reasons to stop rather than pass through.',
        ['Harni Mahadev Temple', 'Textile mills', 'Badnore Fort'], 'Oct-Mar', '/ajmer-to-bhilwara'),
      d('Jaipur', 135, '2.5-3 hours', 'Capital, Forts and Palaces',
        'Three hours on good road puts you in Amer Fort by late morning. A long day from Ajmer rather than a half-day, and better as an overnight if you want the city palace and Hawa Mahal too.',
        ['Amer Fort', 'City Palace', 'Hawa Mahal'], 'Oct-Mar', '/ajmer-to-jaipur'),
      d('Chittorgarh', 190, '4 hours', 'Largest Fort in India',
        'The largest fort in the country by area, and the one with the heaviest history. Four hours each way makes this an overnight rather than a day trip — the fort alone needs most of a day to walk.',
        ['Chittorgarh Fort', 'Vijay Stambh', 'Rani Padmini Palace'], 'Oct-Mar', '/ajmer-to-chittorgarh'),
    ],
    faqs: [
      { question: 'What places can I visit near Ajmer?', answer: 'Pushkar is the closest and the most visited at 15 km, followed by Kishangarh at 27 km for the marble city and Phool Mahal. Roopangarh fort is 40 km and Beawar 55 km. Jaipur at 135 km and Chittorgarh at 190 km are full-day or overnight trips.' },
      { question: 'How far is Pushkar from Ajmer by road?', answer: 'Pushkar is 15 km from Ajmer, about 30 minutes over the Nag Pahar hill. It is the shortest trip on this list and the one most people combine with the Ajmer Sharif Dargah on the same day.' },
      { question: 'Can I do Ajmer and Pushkar in one day?', answer: 'Comfortably. The Dargah in the morning and Pushkar from midday leaves time for the lake, the Brahma temple and the Savitri temple climb. A sedan for the day is the usual arrangement.' },
      { question: 'Is a day trip to Jaipur from Ajmer practical?', answer: 'It is possible at 135 km and under three hours each way, but it makes for a long day with about five hours in the city. If Amer Fort and the City Palace are both on the list, an overnight is the better plan.' },
      { question: 'What is the best season for trips around Ajmer?', answer: 'October to March. The Aravalli summer is severe and most of these destinations involve walking in the open — the Pushkar ghats, the Chittorgarh fort, the Roopangarh ramparts.' },
    ],
  },

  pushkar: {
    city: 'Pushkar',
    slug: 'pushkar',
    heroTitle: 'Places to Visit Near Pushkar',
    heroSubtitle: 'Ajmer, Kishangarh and the Marwar road — priced day trips from the lake',
    description: [
      'Pushkar is small and the drives out of it are short. Ajmer is thirty minutes over the hill, and the Dargah Sharif there is one of the most visited shrines in the country — the two towns are almost always seen together, on one car for the day.',
      'North and west the country opens into Marwar. Kishangarh is an hour, Merta City — the birthplace of the poet-saint Meera Bai — ninety minutes and very little visited. Nagaur, three hours out, has one of the best-restored forts in Rajasthan and sees a fraction of the visitors its quality deserves.',
      'Jaipur, Jodhpur and Ranthambore all sit three to four hours away, which makes them the next stop on an itinerary rather than a return trip. Each destination below carries its distance, drive time and fare, so the difference between a half-day and a committed day out is clear before anything is booked.',
    ],
    destinations: [
      d('Ajmer', 15, '30 minutes', 'Dargah Sharif, Ana Sagar',
        'The Ajmer Sharif Dargah is one of the most visited shrines in the country, and it is thirty minutes from Pushkar over the hill. Ana Sagar lake and the Adhai Din Ka Jhonpra complete a half-day.',
        ['Ajmer Sharif Dargah', 'Ana Sagar Lake', 'Adhai Din Ka Jhonpra'], 'Oct-Mar', '/pushkar-to-ajmer'),
      d('Kishangarh', 40, '1 hour', 'Marble City, Lake Palace',
        'An hour north, and the contrast with Pushkar is the point — a working marble town rather than a pilgrimage one, with the Phool Mahal palace on the lake.',
        ['Phool Mahal Palace', 'Kishangarh Fort', 'Marble dumping yard'], 'Oct-Mar', '/pushkar-to-kishangarh'),
      d('Merta City', 65, '1.5 hours', 'Meera Bai Birthplace',
        'The birthplace of the poet-saint Meera Bai, with a temple complex devoted to her. Little visited and worth the ninety minutes for exactly that reason.',
        ['Meera Bai Temple', 'Old town lanes'], 'Oct-Mar', '/pushkar-to-merta'),
      d('Nagaur', 145, '3 hours', 'Fort, Cattle Fair',
        'The Ahhichatragarh fort is one of the best-restored in Rajasthan and almost empty most of the year. Nagaur\'s cattle fair in January and February is second only to Pushkar\'s own.',
        ['Ahhichatragarh Fort', 'Nagaur Fair', 'Deepak Mahal'], 'Oct-Feb', '/pushkar-to-nagaur'),
      d('Jaipur', 145, '3 hours', 'Capital, Forts',
        'Three hours on the Ajmer road. A long day trip from Pushkar; most people stage it as the next stop rather than a return journey.',
        ['Amer Fort', 'City Palace', 'Jantar Mantar'], 'Oct-Mar', '/pushkar-to-jaipur'),
      d('Jodhpur', 185, '4 hours', 'Blue City, Mehrangarh',
        'Four hours west and a different Rajasthan — Mehrangarh fort above the blue city is among the most dramatic sites in the state. An overnight rather than a day trip.',
        ['Mehrangarh Fort', 'Jaswant Thada', 'Blue city lanes'], 'Oct-Mar', '/pushkar-to-jodhpur'),
      d('Ranthambore', 190, '4 hours', 'Tiger Reserve',
        'Four hours south-east for the tiger reserve. Safari slots are booked separately and early, and the morning slot means staying the night before — this is not a day trip from Pushkar.',
        ['Tiger safari', 'Ranthambore Fort', 'Padam Talao'], 'Oct-Jun', '/pushkar-to-ranthambore'),
    ],
    faqs: [
      { question: 'What places can I visit near Pushkar?', answer: 'Ajmer is 15 km and 30 minutes, with the Dargah Sharif and Ana Sagar lake. Kishangarh is 40 km, Merta City 65 km for the Meera Bai temple, and Nagaur 145 km for the fort. Jaipur and Jodhpur at 145 and 185 km are overnight trips.' },
      { question: 'How far is Ajmer from Pushkar?', answer: '15 km, about 30 minutes over the Nag Pahar hill. The two are almost always visited together, and a single car for the day covers both comfortably.' },
      { question: 'When is the Pushkar camel fair?', answer: 'It falls in the Hindu month of Kartik, which puts it in late October or November depending on the year. Accommodation and cars in Pushkar are committed well ahead for those dates — book early rather than on arrival.' },
      { question: 'Is Jodhpur a day trip from Pushkar?', answer: 'Not realistically. It is 185 km and four hours each way, and Mehrangarh alone needs half a day. Treat it as the next stop on an itinerary rather than a return trip.' },
      { question: 'What is the best time to visit places around Pushkar?', answer: 'October to March for comfort. The fair season in late October and November is the busiest and the most interesting, and also when the roads and the town are fullest.' },
    ],
  },

  ayodhya: {
    city: 'Ayodhya',
    slug: 'ayodhya',
    heroTitle: 'Places to Visit Near Ayodhya',
    heroSubtitle: 'Faizabad, Shravasti and the Ganga cities — day trips and onward journeys',
    description: [
      'Most visitors to Ayodhya see the temple complex and leave, which misses what is within an easy drive. Faizabad is seven kilometres away and holds the Nawabi architecture the area is otherwise not known for — Gulab Bari and the Bahu Begum tomb are both there, and both are quiet.',
      'The more significant trip is Shravasti, 110 kilometres and two and a half hours north, where the Buddha is said to have spent twenty-four rainy seasons. The Jetavana monastery ruins and the Anandabodhi tree make it the most important Buddhist site within reach, and on most days you will have it largely to yourself.',
      'Then the cities: Lucknow at 135 kilometres, which is also the airport most visitors arrive through; Gorakhpur at 140 for the Gorakhnath temple; Prayagraj at 165 for the Sangam; and Varanasi at 200. The last two are overnights rather than day trips — Varanasi\'s ghats at dawn and the evening aarti are twelve hours apart, and a day trip gets neither. Distances, drive times and fares for all of them are below.',
    ],
    destinations: [
      d('Faizabad', 7, '20 minutes', 'Nawabi Tombs, Gulab Bari',
        'The adjoining city, and the one with the Nawabi architecture — Gulab Bari and the Bahu Begum tomb are both here. Twenty minutes from the temple complex and usually overlooked entirely.',
        ['Gulab Bari', 'Bahu Begum Ka Maqbara', 'Guptar Ghat'], 'Oct-Mar', '/ayodhya-to-faizabad'),
      d('Gonda', 50 , '1.5 hours', 'Temples, Local Markets',
        'A district town north of Ayodhya with a cluster of old temples and a working market. A short run rather than a destination, and useful if you are heading toward Shravasti.',
        ['Dukh Haran Nath Temple', 'Local bazaars'], 'Oct-Mar', '/ayodhya-to-gonda'),
      d('Sultanpur', 90, '2 hours', 'Gomti Ghats',
        'Two hours south-west on the Gomti river, with riverside ghats and a quieter version of the pilgrimage atmosphere. Sita Kund is the main draw.',
        ['Sita Kund', 'Gomti ghats', 'Vijethua Mahavir Temple'], 'Oct-Mar', '/ayodhya-to-sultanpur'),
      d('Shravasti', 110, '2.5 hours', 'Buddhist Site, Jetavana',
        'Where the Buddha is said to have spent twenty-four rainy seasons. The Jetavana monastery ruins and the Anandabodhi tree make this the most significant Buddhist site within reach of Ayodhya, and it is remarkably quiet.',
        ['Jetavana Monastery', 'Anandabodhi Tree', 'Saheth-Maheth ruins'], 'Oct-Mar', '/ayodhya-to-shravasti'),
      d('Lucknow', 135, '3 hours', 'Capital, Nawabi Monuments',
        'Three hours west, and the airport most Ayodhya visitors arrive through. Bara Imambara, the Residency and Hazratganj make a full day if you are staging through rather than returning.',
        ['Bara Imambara', 'British Residency', 'Hazratganj'], 'Oct-Mar', '/ayodhya-to-lucknow'),
      d('Gorakhpur', 140, '3 hours', 'Gorakhnath Temple',
        'The Gorakhnath temple is the centre of the Nath tradition and a major pilgrimage site in its own right. Three hours east, and the junction for onward travel toward Kushinagar and Nepal.',
        ['Gorakhnath Temple', 'Ramgarh Tal', 'Geeta Press'], 'Oct-Mar', '/ayodhya-to-gorakhpur'),
      d('Prayagraj', 165, '3.5 hours', 'Triveni Sangam',
        'The confluence of the Ganga, Yamuna and the mythical Saraswati. Three and a half hours, and best as an overnight unless you only want the Sangam boat and the fort.',
        ['Triveni Sangam', 'Allahabad Fort', 'Anand Bhavan'], 'Oct-Mar', '/ayodhya-to-prayagraj'),
      d('Naimisharanya', 170, '4 hours', 'Chakra Tirth, Puranic Site',
        'Where the Puranas are said to have been recited. Chakra Tirth and the Vyas Gaddi make this one of the oldest continuously visited sites in the region, and it sees a fraction of Ayodhya\'s crowds.',
        ['Chakra Tirth', 'Vyas Gaddi', 'Lalita Devi Temple'], 'Oct-Mar', '/ayodhya-to-naimisharanya'),
      d('Varanasi', 200, '4.5 hours', 'Ghats, Kashi Vishwanath',
        'Four and a half hours south-east. Varanasi needs at least two nights to be worth the journey — the ghats at dawn and the evening aarti are the whole point and they are twelve hours apart.',
        ['Kashi Vishwanath', 'Dashashwamedh Ghat', 'Sarnath'], 'Oct-Mar', '/ayodhya-to-varanasi'),
    ],
    faqs: [
      { question: 'What places can I visit near Ayodhya?', answer: 'Faizabad is 7 km for the Nawabi tombs, Gonda 50 km, Sultanpur 90 km and Shravasti 110 km for the Buddhist site at Jetavana. Lucknow at 135 km, Gorakhpur at 140 km, Prayagraj at 165 km and Varanasi at 200 km are longer trips or overnights.' },
      { question: 'How far is Lucknow from Ayodhya?', answer: '135 km, about three hours by road. Lucknow is also the airport most Ayodhya visitors arrive through, and a car for the transfer plus the Ayodhya darshan is the common booking.' },
      { question: 'Can I visit Varanasi from Ayodhya in a day?', answer: 'Not well. It is 200 km and four and a half hours each way, and the two things worth seeing in Varanasi — the ghats at dawn and the evening aarti — are at opposite ends of the day. Plan at least one night.' },
      { question: 'What is there to see in Shravasti?', answer: 'The Jetavana monastery ruins, where the Buddha is said to have spent twenty-four rainy seasons, plus the Anandabodhi tree and the Saheth-Maheth excavations. It is 110 km and about two and a half hours, and it is far quieter than any site in Ayodhya itself.' },
      { question: 'When is the best time to visit Ayodhya and around?', answer: 'October to March. Ram Navami in March or April and Deepotsav around Diwali are the largest gatherings of the year — worth planning for deliberately, in either direction, because road access and accommodation both tighten sharply.' },
    ],
  },

  bikaner: {
    city: 'Bikaner',
    slug: 'bikaner',
    heroTitle: 'Places to Visit Near Bikaner',
    heroSubtitle: 'Deshnoke, Gajner and the desert road — day trips with fares',
    description: [
      'Bikaner\'s nearest destination is also its strangest. The Karni Mata temple at Deshnoke, thirty kilometres out, is home to some twenty-five thousand rats that live under protection and are fed as part of the worship. Shoes come off at the gate. There is nowhere else quite like it.',
      'Forty-five minutes the other way, Gajner is a former royal shooting lodge on a lake in open scrub desert, with a small sanctuary attached — chinkara and nilgai at dusk, migratory birds in winter, and a late-afternoon departure works far better than a morning one. Kolayat, an hour out, is a desert oasis with a sacred lake and a fair that is almost entirely local.',
      'The long drives are the Shekhawati havelis at Mandawa, four hours, and Jodhpur and Jaisalmer at five and six. Those are overnights. November to February is the window for all of it — the desert summer rules out standing in the open, which most of these destinations require. Each is listed below with its distance, drive time and fare.',
    ],
    destinations: [
      d('Deshnoke', 30, '40 minutes', 'Karni Mata Temple',
        'The Karni Mata temple, where some twenty-five thousand rats live under protection and are fed as part of the worship. Forty minutes from Bikaner and genuinely unlike anywhere else — shoes come off at the gate.',
        ['Karni Mata Temple', 'Silver temple doors'], 'Oct-Mar', '/bikaner-to-deshnoke'),
      d('Gajner', 32, '45 minutes', 'Palace, Lake, Wildlife',
        'A former royal shooting lodge on a lake in the middle of scrub desert, now a heritage hotel, with a small wildlife sanctuary attached. Chinkara and nilgai at dusk, and the lake brings migratory birds in winter.',
        ['Gajner Palace', 'Gajner Lake', 'Wildlife sanctuary'], 'Nov-Feb', '/bikaner-to-gajner'),
      d('Kolayat', 50, '1 hour', 'Kapil Muni Temple, Lake',
        'A desert oasis with a sacred lake and a cluster of temples and ghats devoted to the sage Kapil. The Kartik Purnima fair here is substantial and almost entirely local.',
        ['Kapil Muni Temple', 'Kolayat Lake ghats'], 'Oct-Mar', '/bikaner-to-kolayat'),
      d('Nagaur', 110, '2.5 hours', 'Fort, Cattle Fair',
        'The Ahhichatragarh fort has been restored carefully and sees very few visitors. The cattle fair in January and February is one of the largest in the country.',
        ['Ahhichatragarh Fort', 'Nagaur Fair', 'Tarkeen Dargah'], 'Oct-Feb', '/bikaner-to-nagaur'),
      d('Mandawa', 180, '4 hours', 'Shekhawati Havelis',
        'The painted havelis of Shekhawati — merchant houses from the eighteenth and nineteenth centuries covered inside and out in frescoes. Four hours each way makes this an overnight.',
        ['Painted havelis', 'Mandawa Fort', 'Open-air frescoes'], 'Oct-Mar', '/bikaner-to-mandawa'),
      d('Jodhpur', 250, '5 hours', 'Mehrangarh, Blue City',
        'Five hours south. Mehrangarh is one of the great forts of India and the blue city beneath it needs a full day on foot. An overnight at minimum.',
        ['Mehrangarh Fort', 'Jaswant Thada', 'Clock Tower market'], 'Oct-Mar', '/bikaner-to-jodhpur'),
      d('Jaisalmer', 330, '6 hours', 'Golden Fort, Dunes',
        'Six hours through open desert. The living fort, the havelis and the dunes at Sam need two nights to do properly, and the drive itself is part of the experience.',
        ['Jaisalmer Fort', 'Patwon Ki Haveli', 'Sam Sand Dunes'], 'Nov-Feb', '/bikaner-to-jaisalmer'),
    ],
    faqs: [
      { question: 'What places can I visit near Bikaner?', answer: 'Deshnoke is 30 km for the Karni Mata temple, Gajner 32 km for the palace and lake, and Kolayat 50 km. Nagaur is 110 km for the fort, Mandawa 180 km for the Shekhawati havelis, and Jodhpur and Jaisalmer at 250 and 330 km are overnight trips.' },
      { question: 'What is the rat temple near Bikaner?', answer: 'The Karni Mata temple at Deshnoke, 30 km and about forty minutes from Bikaner. Some twenty-five thousand rats live there under protection and are fed as part of the worship. Footwear is removed at the gate.' },
      { question: 'Is Jaisalmer a day trip from Bikaner?', answer: 'No. It is 330 km and about six hours each way through open desert. Jaisalmer needs two nights for the fort, the havelis and the dunes to be worth the journey.' },
      { question: 'When should I visit the Bikaner area?', answer: 'November to February. The desert summer is extreme and most of these destinations involve walking in the open. The Bikaner camel festival in January and the Nagaur fair in January and February both fall inside that window.' },
      { question: 'How far is Gajner from Bikaner?', answer: '32 km, about forty-five minutes. The lake and the small sanctuary are best at dusk for the chinkara and nilgai, and in winter for the migratory birds — so a late-afternoon departure works better than a morning one.' },
    ],
  },

  faridabad: {
    city: 'Faridabad',
    slug: 'faridabad',
    heroTitle: 'Places to Visit Near Faridabad',
    heroSubtitle: 'Surajkund, Sohna, Neemrana and Agra — NCR day trips with fares',
    description: [
      'Faridabad\'s advantage is position. It sits on the southern edge of the NCR with the Aravalli ridge immediately behind it and the Yamuna Expressway running out of it, which puts a very wide range of destinations inside a day.',
      'The short runs are genuinely short. Badkhal Lake is six kilometres, Surajkund eight — a tenth-century stepped reservoir, and the site of the crafts mela each February, which is worth either planning for or avoiding deliberately because the traffic around it is heavy for weeks. Sohna\'s hot sulphur springs are twenty-five minutes into the Aravalli foothills and the closest thing to a hill outing from the NCR.',
      'Then the real day trips. Neemrana\'s fifteenth-century fort palace and Mathura\'s temples are both two and a half hours. Sariska\'s tiger reserve is three and a half. And Agra is three hours on the expressway, which makes the Taj a comfortable day out — provided it is not a Friday, when it is closed. Every destination below carries its distance, drive time and fare.',
    ],
    destinations: [
      d('Badkhal Lake', 6, '15 minutes', 'Lake, Short Outing',
        'A short run from the city for a lake and the Aravalli ridge behind it. More a half-hour escape than a day out, and best early before the heat.',
        ['Badkhal Lake', 'Aravalli ridge walks'], 'Oct-Mar', '/faridabad-to-badkhal-lake'),
      d('Surajkund', 8, '20 minutes', 'Ancient Reservoir, Crafts Mela',
        'A tenth-century stepped reservoir, and the site of the Surajkund crafts mela each February — one of the largest craft fairs in the country, with weeks of heavy traffic around it.',
        ['Surajkund reservoir', 'Crafts Mela in February', 'Anangpur Dam'], 'Oct-Mar', '/faridabad-to-surajkund'),
      d('Sohna', 25, '45 minutes', 'Sulphur Springs, Hills',
        'Hot sulphur springs in the Aravalli foothills, with the Damdama area just beyond. A comfortable half-day and the closest thing to a hill outing from the NCR.',
        ['Sulphur springs', 'Sohna hills', 'Paragliding at Damdama'], 'Oct-Mar', '/faridabad-to-sohna'),
      d('Damdama Lake', 35, '1 hour', 'Lake, Adventure Activities',
        'The largest natural lake in Haryana, with boating, ballooning and paragliding operating around it. An hour out and a genuine day trip rather than a short run.',
        ['Boating', 'Hot-air ballooning', 'Aravalli trails'], 'Oct-Mar', '/faridabad-to-damdama-lake'),
      d('Neemrana', 110, '2.5 hours', 'Hill Fort Palace, Zipline',
        'A fifteenth-century fort palace on the Delhi-Jaipur highway, restored as a hotel, with India\'s longest zipline running off the ramparts. Two and a half hours and a very popular day trip.',
        ['Neemrana Fort Palace', 'Flying Fox zipline', 'Step well at Neemrana'], 'Oct-Mar', '/faridabad-to-neemrana'),
      d('Mathura', 110, '2.5 hours', 'Krishna Janmabhoomi',
        'Two and a half hours on the Yamuna Expressway. Mathura and Vrindavan together make a full day — the Janmabhoomi temple, the Banke Bihari temple and the ghats at Vishram.',
        ['Krishna Janmabhoomi', 'Banke Bihari Temple', 'Vishram Ghat'], 'Oct-Mar', '/faridabad-to-mathura'),
      d('Sariska', 150, '3.5 hours', 'Tiger Reserve',
        'A tiger reserve in the Aravallis with the Kankwari fort inside it and the Neelkanth temple ruins nearby. Safari slots book separately, and the morning slot effectively means staying over.',
        ['Tiger safari', 'Kankwari Fort', 'Neelkanth temples'], 'Oct-Jun', '/faridabad-to-sariska'),
      d('Agra', 165, '3 hours', 'Taj Mahal, Agra Fort',
        'Three hours on the Yamuna Expressway makes Agra a long but genuine day trip. The Taj is closed on Fridays, which is the single thing to get right before setting out.',
        ['Taj Mahal', 'Agra Fort', 'Itimad-ud-Daulah'], 'Oct-Mar', '/faridabad-to-agra'),
    ],
    faqs: [
      { question: 'What places can I visit near Faridabad?', answer: 'Badkhal Lake is 6 km and Surajkund 8 km for the ancient reservoir and the February crafts mela. Sohna is 25 km for the sulphur springs and Damdama Lake 35 km. Neemrana and Mathura are both 110 km, Sariska 150 km and Agra 165 km.' },
      { question: 'Can I do a day trip to Agra from Faridabad?', answer: 'Yes. It is 165 km and about three hours on the Yamuna Expressway, which leaves a comfortable day for the Taj Mahal and Agra Fort. The Taj is closed to tourists on Fridays — check the day before booking.' },
      { question: 'When is the Surajkund Mela?', answer: 'Each February, running for roughly two weeks. It is one of the largest craft fairs in the country and the traffic around Surajkund is heavy for the whole period — worth either planning for or avoiding deliberately.' },
      { question: 'What is the closest hill outing from Faridabad?', answer: 'Sohna at 25 km, in the Aravalli foothills, with hot sulphur springs and the Damdama area just beyond at 35 km. Neither is a hill station, but they are the nearest thing to one from the NCR.' },
      { question: 'Is Neemrana worth a day trip?', answer: 'It is a popular one. The fifteenth-century fort palace is two and a half hours out on the Delhi-Jaipur highway, and the zipline off the ramparts is the main draw beyond the architecture. Day visitors should check access with the property, since it operates as a hotel.' },
    ],
  },

  manali: {
    city: 'Manali',
    slug: 'manali',
    heroTitle: 'Places to Visit Near Manali',
    heroSubtitle: 'Solang, Manikaran, Kasol and Rohtang — with seasons and permits noted',
    description: [
      'Almost everything worth seeing around Manali is up a valley, which means the distances understate the drives. Solang Valley is thirteen kilometres and forty minutes, and considerably longer in season when the road queues — it is where most visitors go for snow without crossing a pass.',
      'The Parvati valley is the other direction and the more interesting one. Kasol at forty kilometres has riverside camps and a long-established traveller scene; Manikaran at forty-five has hot springs hot enough to cook in, with a gurudwara and a Shiva temple sharing a narrow gorge. Tosh, at fifty, is as far up as a vehicle goes and the last stretch is on foot.',
      'Rohtang Pass is the one that needs planning rather than booking. At 3,980 metres it requires a permit, the daily vehicle count is capped, and snow closes it for much of the year — usually opening some time in May and shutting by late October. Both the permit and the opening have to be confirmed for your date. Everything below is listed with its distance, its real drive time and the fare.',
    ],
    destinations: [
      d('Solang Valley', 13, '40 minutes', 'Snow Point, Adventure Sports',
        'The valley most visitors mean when they say they are going to the snow. Thirteen kilometres up from Manali, with paragliding, zorbing and skiing in season. Forty minutes, and longer in peak season when the road queues.',
        ['Paragliding', 'Skiing in winter', 'Zorbing and ropeway'], 'Dec-Feb, May-Jun', '/manali-to-solang-valley'),
      d('Naggar', 22, '50 minutes', 'Castle, Roerich Gallery',
        'An old capital of the Kullu kings, with a castle built of stone and timber and the Nicholas Roerich art gallery just above it. Quieter and more interesting than most things this close to Manali.',
        ['Naggar Castle', 'Roerich Art Gallery', 'Tripura Sundari Temple'], 'Mar-Jun, Sep-Nov', '/manali-to-naggar'),
      d('Rahala Falls', 27, '1 hour', 'Waterfall, Rohtang Road',
        'On the Rohtang road at about 2,500 metres, where the climb really begins. A stop rather than a destination, and the usual turnaround point when Rohtang itself is closed.',
        ['Rahala Falls', 'Rohtang road views'], 'May-Oct', '/manali-to-rahala-falls'),
      d('Jana Falls', 30, '1.25 hours', 'Waterfall, Village Food',
        'A waterfall above Naggar reached through apple orchards, with village dhabas serving trout and local food at the top. The last stretch is narrow.',
        ['Jana Falls', 'Village dhabas', 'Apple orchards'], 'Apr-Jun, Sep-Nov', '/manali-to-jana-falls'),
      d('Kasol', 40, '1.5 hours', 'Parvati Valley, River Camps',
        'In the Parvati valley on the Beas tributary, with riverside camps and a well-established traveller scene. Ninety minutes, and the valley road is narrow in places.',
        ['Parvati river', 'Riverside camping', 'Chalal walk'], 'Mar-Jun, Sep-Nov', '/manali-to-kasol'),
      d('Manikaran', 45, '1.5 hours', 'Hot Springs, Gurudwara',
        'Hot springs hot enough to cook in, a gurudwara and a Shiva temple sharing the same site, in a narrow gorge in the Parvati valley. One of the more striking places in Himachal and busy for it.',
        ['Hot springs', 'Gurudwara Manikaran Sahib', 'Shiv Temple'], 'Mar-Jun, Sep-Nov', '/manali-to-manikaran'),
      d('Tosh', 50, '2 hours', 'Parvati Valley Village',
        'The road ends below the village and the last stretch is on foot. Worth it for the valley head and the quiet — this is as far up the Parvati as a vehicle goes.',
        ['Parvati valley head', 'Village stays', 'Walks toward Kheerganga'], 'Apr-Jun, Sep-Oct', '/manali-to-tosh'),
      d('Rohtang Pass', 51, '2.5 hours', 'High Pass, Permit Required',
        'At 3,980 metres, and the reason many people come. A permit is required, numbers are capped daily, and the pass is closed by snow for much of the year — usually open some time in May and shut again by late October. Confirm both the permit and the opening before planning a day around it.',
        ['Rohtang Pass', 'Snow at the top', 'Beas Kund views'], 'May-Oct, subject to opening', '/manali-to-rohtang-pass'),
    ],
    faqs: [
      { question: 'What places can I visit near Manali?', answer: 'Solang Valley is 13 km for snow and adventure sports, Naggar 22 km for the castle and Roerich gallery, and Rahala Falls 27 km on the Rohtang road. Kasol is 40 km, Manikaran 45 km for the hot springs, Tosh 50 km and Rohtang Pass 51 km.' },
      { question: 'Do I need a permit for Rohtang Pass?', answer: 'Yes. A permit is required, the daily number of vehicles is capped, and the pass is closed by snow for much of the year — usually opening some time in May and shutting by late October. Both the permit and the opening status need confirming for your date before the trip is planned around it.' },
      { question: 'How far is Solang Valley from Manali?', answer: '13 km, about forty minutes, and considerably longer in peak season when the road queues. It is the usual destination for anyone wanting snow without crossing a pass.' },
      { question: 'Can I visit Manikaran and Kasol in one day?', answer: 'Yes, they are in the same valley — Kasol at 40 km and Manikaran at 45 km, and the two are close to each other. A single day covers both, though the Parvati valley road is narrow and the drive takes longer than the distance suggests.' },
      { question: 'What is the best season for trips around Manali?', answer: 'March to June and September to November for the valley destinations. Winter closes the higher roads and the monsoon brings genuine landslide risk on the approach — neither is about comfort, both are about access.' },
    ],
  },

  'mount-abu': {
    city: 'Mount Abu',
    slug: 'mount-abu',
    heroTitle: 'Places to Visit Near Mount Abu',
    heroSubtitle: 'Dilwara, Guru Shikhar and Achalgarh — the plateau and the road down',
    description: [
      'Mount Abu is Rajasthan\'s only hill station and most of what matters is within fifteen kilometres of the town. The Dilwara temples are three kilometres away and are the reason to come — eleventh and thirteenth-century Jain temples in white marble, carved to a standard that is difficult to describe and not permitted to photograph. Visiting hours for non-worshippers are restricted, which surprises most first-time visitors, so check before setting out.',
      'Achalgarh fort is eleven kilometres, with a Shiva temple inside holding a toe impression rather than a lingam. Guru Shikhar at fifteen is the highest point in the Aravallis at 1,722 metres — the final stretch is a stair climb from the car park, and the view across the whole plateau is best early before haze builds.',
      'Down off the plateau the landscape changes entirely. Ambaji, one of the fifty-one Shakti Peethas, is forty-five minutes into Gujarat; Palanpur is ninety. Udaipur at 165 kilometres is an onward stop rather than a day trip. Each destination is listed below with its distance, drive time and fare.',
    ],
    destinations: [
      d('Dilwara Temples', 3, '10 minutes', 'Marble Jain Temples',
        'Eleventh and thirteenth-century Jain temples carved in white marble, and among the finest stone carving anywhere in India. Ten minutes from the town centre. Photography is not permitted inside and the visiting hours for non-worshippers are restricted — check before setting out.',
        ['Vimal Vasahi', 'Luna Vasahi', 'Marble ceiling carving'], 'Oct-Mar', '/mount-abu-to-dilwara-temples'),
      d('Achalgarh', 11, '30 minutes', 'Fort, Achaleshwar Temple',
        'A fifteenth-century fort above the town with the Achaleshwar Mahadev temple inside it, where the shrine holds a toe impression rather than a lingam. Thirty minutes and a short climb at the end.',
        ['Achalgarh Fort', 'Achaleshwar Mahadev', 'Mandakini Lake'], 'Oct-Mar', '/mount-abu-to-achalgarh'),
      d('Guru Shikhar', 15, '40 minutes', 'Highest Point in the Aravallis',
        'At 1,722 metres, the highest point in the Aravalli range and in Rajasthan. The last stretch is a stair climb from the car park, and the view runs across the whole plateau on a clear morning.',
        ['Guru Shikhar summit', 'Dattatreya Temple', 'Plateau views'], 'Oct-Mar', '/mount-abu-to-guru-shikhar'),
      d('Ambaji', 45, '1.25 hours', 'Shakti Peetha Temple',
        'One of the fifty-one Shakti Peethas, just across into Gujarat. Busy during Navratri and the Bhadarvi Poonam fair, and quiet the rest of the year.',
        ['Ambaji Temple', 'Gabbar Hill', 'Kumbhariya Jain temples'], 'Oct-Mar', '/mount-abu-to-ambaji'),
      d('Palanpur', 60, '1.5 hours', 'Gujarat Town, Balaram Palace',
        'Ninety minutes down into Gujarat, with the Balaram Palace and the Jessore sloth bear sanctuary nearby. A different landscape entirely once off the plateau.',
        ['Balaram Palace', 'Jessore Sanctuary', 'Patan stepwell onward'], 'Oct-Mar', '/mount-abu-to-palanpur'),
      d('Udaipur', 165, '3.5 hours', 'Lake City, Palaces',
        'Three and a half hours north-east, and the usual onward stop rather than a day trip. The City Palace and the lakes need a full day of their own.',
        ['City Palace', 'Lake Pichola', 'Jagdish Temple'], 'Oct-Mar', '/mount-abu-to-udaipur'),
    ],
    faqs: [
      { question: 'What places can I visit near Mount Abu?', answer: 'The Dilwara temples are 3 km, Achalgarh fort 11 km and Guru Shikhar 15 km — the highest point in the Aravallis. Ambaji is 45 km across into Gujarat, Palanpur 60 km, and Udaipur 165 km as an onward stop.' },
      { question: 'What is the highest point near Mount Abu?', answer: 'Guru Shikhar at 1,722 metres, 15 km from the town and about forty minutes. The last stretch from the car park is a stair climb, and the view across the plateau is best in the early morning before haze builds.' },
      { question: 'Can I visit the Dilwara temples any time?', answer: 'Visiting hours for non-worshippers are restricted, and photography is not permitted inside. Both are set by the temple trust and worth confirming for your date — a wasted drive of ten minutes is a small thing, but the restriction surprises most first-time visitors.' },
      { question: 'When should I visit Mount Abu?', answer: 'October to March is the most comfortable. Mount Abu is Rajasthan\'s only hill station and it stays noticeably cooler than the plains, which makes it busy in the summer months as an escape — the trade-off is crowds rather than heat.' },
      { question: 'Is Udaipur a day trip from Mount Abu?', answer: 'It is 165 km and about three and a half hours each way, which makes for a very long day. Udaipur\'s City Palace and lakes deserve a full day, so it works far better as the next stop on an itinerary.' },
    ],
  },

  mussoorie: {
    city: 'Mussoorie',
    slug: 'mussoorie',
    heroTitle: 'Places to Visit Near Mussoorie',
    heroSubtitle: 'Kempty, Dhanaulti, Landour and Surkanda Devi — ridge drives with fares',
    description: [
      'Mussoorie runs along a ridge, and the destinations run along it with her. Landour is four kilometres up — a quiet cantonment of colonial houses, four corner lanes and a few long-established bakeries, where walking is the point and parking barely exists. Lal Tibba at six kilometres is the highest point, with a telescope platform looking at the Himalayan range on a clear morning.',
      'West along the ridge the drives get longer and quieter. Kempty Falls at fifteen kilometres is the most visited and the most crowded. Dhanaulti at twenty-five is deodar forest and noticeably cooler. Surkanda Devi at thirty-five is a hilltop temple at about 3,000 metres, reached by a steep walk or now a ropeway, with the best range view anywhere near Mussoorie.',
      'Down the hill, Dehradun at thirty-five kilometres is both the city below and the airport and railhead for Mussoorie, with Robbers Cave and Mindrolling monastery making a full day if you are going anyway. One thing to know before planning: the Mall road is pedestrian for much of its length, so a good deal of Mussoorie is walked rather than driven. Distances, drive times and fares are below.',
    ],
    destinations: [
      d('Company Garden', 3, '15 minutes', 'Gardens, Short Outing',
        'A municipal garden with a small lake and boating, fifteen minutes from the Mall. A short family outing rather than a destination, and the walk back down is pleasant.',
        ['Gardens and boating', 'Nursery'], 'Mar-Jun, Sep-Nov', '/mussoorie-to-company-garden'),
      d('Landour', 4, '15 minutes', 'Colonial Lanes, Cafes',
        'The quiet cantonment above Mussoorie, with colonial houses, four corner lanes and a handful of long-established bakeries and cafes. Walking is the point; the lanes are narrow and parking is minimal.',
        ['Char Dukan', 'Sisters Bazaar', 'Lal Tibba walk'], 'Mar-Jun, Sep-Nov', '/mussoorie-to-landour'),
      d('Lal Tibba', 6, '20 minutes', 'Highest Point, Himalayan Views',
        'The highest point in Mussoorie, with a telescope platform looking out at the Himalayan range on a clear day. Early morning is the only reliable time for the view.',
        ['Telescope viewpoint', 'Himalayan range views'], 'Mar-Jun, Sep-Nov', '/mussoorie-to-lal-tibba'),
      d('Kempty Falls', 15, '40 minutes', 'Waterfall, Family Outing',
        'The most visited waterfall in the area and correspondingly crowded in season. Forty minutes down from Mussoorie, with a ropeway to the lower pool.',
        ['Kempty Falls', 'Ropeway', 'Lower pool'], 'Mar-Jun, Sep-Nov', '/mussoorie-to-kempty-falls'),
      d('Dhanaulti', 25, '1 hour', 'Deodar Forest, Eco Parks',
        'An hour along the ridge through deodar forest, noticeably quieter and cooler than Mussoorie. The eco parks and the Surkanda approach are the reasons to go.',
        ['Eco parks', 'Deodar forest', 'Camping'], 'Mar-Jun, Sep-Nov', '/mussoorie-to-dhanaulti'),
      d('Surkanda Devi', 35, '1.25 hours', 'Hilltop Temple, Trek or Ropeway',
        'A hilltop temple at about 3,000 metres beyond Dhanaulti. The final ascent was a steep walk and is now also served by a ropeway; the view takes in the Himalayan range on a clear day.',
        ['Surkanda Devi Temple', 'Ropeway', 'Range views'], 'Mar-Jun, Sep-Nov', '/mussoorie-to-surkanda-devi'),
      d('Dehradun', 35, '1.25 hours', 'Valley City, Robbers Cave',
        'The city below, and the airport and railhead for Mussoorie. Robbers Cave, the Forest Research Institute and Mindrolling monastery make a full day if you are going down anyway.',
        ['Robbers Cave', 'Forest Research Institute', 'Mindrolling Monastery'], 'Mar-Jun, Sep-Nov', '/mussoorie-to-dehradun'),
      d('Chakrata', 85, '3 hours', 'Cantonment, Tiger Falls',
        'Three hours west, a quiet cantonment town with Tiger Falls nearby. Parts of the area are restricted for foreign nationals — worth checking in advance if that applies.',
        ['Tiger Falls', 'Deoban forest', 'Budher caves'], 'Mar-Jun, Sep-Nov', '/mussoorie-to-chakrata'),
    ],
    faqs: [
      { question: 'What places can I visit near Mussoorie?', answer: 'Company Garden is 3 km, Landour 4 km for the colonial lanes and Lal Tibba 6 km for the Himalayan views. Kempty Falls is 15 km, Dhanaulti 25 km through deodar forest, Surkanda Devi 35 km and Dehradun 35 km. Chakrata is 85 km.' },
      { question: 'How far is Dhanaulti from Mussoorie?', answer: '25 km and about an hour along the ridge. It is noticeably quieter and cooler than Mussoorie, which is the usual reason for going, and it is on the way to Surkanda Devi at 35 km.' },
      { question: 'When can I see the Himalayas from Mussoorie?', answer: 'Early morning on a clear day, from Lal Tibba or Surkanda Devi. March to June and September to November are the reliable months; the monsoon closes the view entirely and winter haze can too.' },
      { question: 'Is Mussoorie a good trip in winter?', answer: 'December and January bring snow, which is the draw for some visitors and a genuine access problem for others — the approach road and the higher lanes ice over, and the Mall area is pedestrian regardless. March to June and September to November are the straightforward months.' },
      { question: 'Can I drive in Mussoorie town?', answer: 'Only partly. The Mall road is pedestrian for much of its length and Landour\'s lanes are narrow with almost no parking. Most of the town is walked, with vehicles positioned at the nearest accessible point — worth planning for if anyone in the party cannot manage a slope.' },
    ],
  },

  nainital: {
    city: 'Nainital',
    slug: 'nainital',
    heroTitle: 'Places to Visit Near Nainital',
    heroSubtitle: 'Bhimtal, Sattal, Mukteshwar and Jim Corbett — the Kumaon lakes and beyond',
    description: [
      'Nainital\'s own lake is the busiest thing about it, and the better lakes are a short drive away. Bhimtal at twenty-two kilometres is larger and considerably quieter, with an island aquarium in the middle. Sattal at twenty-three is a cluster of interconnected lakes in dense forest and one of the best birding spots in Kumaon. Naukuchiatal at twenty-six is the deepest and the least crowded.',
      'All three sit within half an hour of each other, so a single day covers the lakes circuit comfortably — usually with Kainchi Dham, the Neem Karoli Baba ashram at seventeen kilometres, added on the way.',
      'Further out the character changes. Mukteshwar at fifty kilometres has the best Himalayan view in the area from the Chauli Ki Jali cliff edge. Ranikhet at sixty is a quiet cantonment with long views of the Nanda Devi range. Almora at sixty-five is an old Kumaoni hill town with a stone-paved bazaar. And Jim Corbett, also sixty-five, is India\'s oldest national park — safari slots are booked separately and well ahead, and the morning slot effectively means staying the night before. Every destination below carries its distance, its drive time and the cab fare.',
    ],
    destinations: [
      d('Kainchi Dham', 17, '40 minutes', 'Ashram, Hanuman Temple',
        'The Neem Karoli Baba ashram in a bend of the Kosi river, now very widely visited. Forty minutes from Nainital, and busiest around the June bhandara.',
        ['Neem Karoli Baba Ashram', 'Hanuman Temple', 'Kosi river'], 'Mar-Jun, Sep-Nov', '/nainital-to-kainchi-dham'),
      d('Bhimtal', 22, '45 minutes', 'Lake, Island Aquarium',
        'A larger and considerably quieter lake than Naini, with an island aquarium in the middle. Forty-five minutes, and the usual first stop on the lakes circuit.',
        ['Bhimtal Lake', 'Island aquarium', 'Bhimeshwar Temple'], 'Mar-Jun, Sep-Nov', '/nainital-to-bhimtal'),
      d('Sattal', 23, '50 minutes', 'Seven Lakes, Birdwatching',
        'A cluster of interconnected lakes in dense forest, and one of the better birding spots in Kumaon. Fifty minutes, and quiet outside weekends.',
        ['Interconnected lakes', 'Birdwatching', 'Butterfly Research Centre'], 'Mar-Jun, Sep-Nov', '/nainital-to-sattal'),
      d('Naukuchiatal', 26, '1 hour', 'Nine-Cornered Lake',
        'The deepest of the Kumaon lakes, named for its nine corners, with boating and paragliding. An hour out and the least crowded of the three lakes.',
        ['Nine-cornered lake', 'Boating', 'Paragliding'], 'Mar-Jun, Sep-Nov', '/nainital-to-naukuchiatal'),
      d('Mukteshwar', 50, '1.75 hours', 'Temple, Chauli Ki Jali',
        'At about 2,300 metres, with a Shiva temple and the Chauli Ki Jali rock formation at the cliff edge. The Himalayan view from here is better than anything closer to Nainital.',
        ['Mukteshwar Temple', 'Chauli Ki Jali', 'Himalayan views'], 'Mar-Jun, Sep-Nov', '/nainital-to-mukteshwar'),
      d('Ranikhet', 60, '2 hours', 'Cantonment, Golf Course',
        'A quiet cantonment town two hours out, with one of the higher golf courses in Asia and long views of the Nanda Devi range on clear days.',
        ['Golf course', 'Jhula Devi Temple', 'Chaubatia Gardens'], 'Mar-Jun, Sep-Nov', '/nainital-to-ranikhet'),
      d('Jim Corbett', 65, '2 hours', 'Tiger Reserve',
        'India\'s oldest national park, two hours south. Safari zones and slots are booked separately and well ahead, and the morning slot effectively means staying the night before.',
        ['Tiger safari', 'Dhikala zone', 'Corbett Museum'], 'Nov-Jun', '/nainital-to-jim-corbett'),
      d('Almora', 65, '2.25 hours', 'Hill Town, Kasar Devi',
        'An old Kumaoni hill town with a stone-paved bazaar, and the Kasar Devi temple on the ridge above it. Two and a quarter hours, and a genuinely different place from the lake towns.',
        ['Kasar Devi Temple', 'Almora bazaar', 'Bright End Corner'], 'Mar-Jun, Sep-Nov', '/nainital-to-almora'),
    ],
    faqs: [
      { question: 'What places can I visit near Nainital?', answer: 'Kainchi Dham is 17 km, Bhimtal 22 km, Sattal 23 km and Naukuchiatal 26 km — the lakes circuit. Mukteshwar is 50 km for the Himalayan views, Ranikhet 60 km, Jim Corbett 65 km and Almora 65 km.' },
      { question: 'Can I do the Nainital lakes in one day?', answer: 'Yes. Bhimtal, Sattal and Naukuchiatal are within 26 km of Nainital and close to one another, so a single day covers all three comfortably, usually with Kainchi Dham added on the way.' },
      { question: 'How far is Jim Corbett from Nainital?', answer: '65 km and about two hours. Safari zones and slots are booked separately and go well in advance — and because the morning slot starts early, most visitors stay the night before rather than driving down from Nainital that day.' },
      { question: 'Where are the best Himalayan views near Nainital?', answer: 'Mukteshwar at 50 km, from the Chauli Ki Jali cliff edge at about 2,300 metres, and Ranikhet at 60 km for the Nanda Devi range. Both are better than anything within Nainital itself, and both need a clear morning.' },
      { question: 'When is the best time to visit around Nainital?', answer: 'March to June and September to November. The monsoon brings landslide risk on the hill road up from Kathgodam, and winter ices the approaches in places. Jim Corbett has its own season, broadly November to June.' },
    ],
  },

  dharamshala: {
    city: 'Dharamshala',
    slug: 'dharamshala',
    heroTitle: 'Places to Visit Near Dharamshala',
    heroSubtitle: 'McLeod Ganj, Kangra, Palampur and Bir — the Kangra valley by car',
    description: [
      'Dharamshala sits below the Dhauladhar range with the Kangra valley spread out beneath it, and the destinations divide neatly between up and down. Up is McLeod Ganj, nine kilometres and thirty minutes, with the Tsuglagkhang complex and the Namgyal monastery — though most of the quarter is walked rather than driven, so a car is best left at the edge.',
      'Down is the valley. Kangra\'s fort is one of the oldest in India and stands above the confluence of two rivers. Chamunda Devi and the Palampur tea gardens are both within forty minutes, and Palampur with the Dhauladhar behind it is the most photogenic short drive from Dharamshala.',
      'Further out, Bir Billing at two hours is the main paragliding site in the country — flying is seasonal and weather-dependent, so confirm rather than assume. Dalhousie and Khajjiar at four hours are an overnight. The monsoon is heavy here with real landslide risk on the hill roads, so March to June and September to November are the reliable months. Distances, drive times and fares for each are below.',
    ],
    destinations: [
      d('McLeod Ganj', 9, '30 minutes', 'Tibetan Quarter, Monastery',
        'The Tibetan quarter above Dharamshala, with the Tsuglagkhang complex, the Namgyal monastery and the main bazaar. Thirty minutes up a steep road, and most of the quarter is walked rather than driven.',
        ['Tsuglagkhang Complex', 'Namgyal Monastery', 'Bhagsu road bazaar'], 'Mar-Jun, Sep-Nov', '/dharamshala-to-mcleod-ganj'),
      d('Bhagsunag', 11, '35 minutes', 'Waterfall, Temple',
        'A waterfall and an old Shiva temple just beyond McLeod Ganj, with a short walk in from the road. Busy in season and worth an early start.',
        ['Bhagsunag Falls', 'Bhagsunag Temple', 'Cafes on the walk'], 'Mar-Jun, Sep-Nov', '/dharamshala-to-bhagsunag'),
      d('Chamunda Devi', 15, '40 minutes', 'Shakti Temple',
        'A Shakti temple on the Baner river, forty minutes out on the Palampur road, and one of the more significant shrines in the Kangra valley.',
        ['Chamunda Devi Temple', 'Baner river', 'Valley views'], 'Mar-Jun, Sep-Nov', '/dharamshala-to-chamunda-devi'),
      d('Kangra', 18, '45 minutes', 'Fort, Brajeshwari Temple',
        'The Kangra fort is one of the oldest in India and sits above the confluence of two rivers. The Brajeshwari Devi temple in the town is the other reason to go.',
        ['Kangra Fort', 'Brajeshwari Devi Temple', 'Masrur rock temples nearby'], 'Mar-Jun, Sep-Nov', '/dharamshala-to-kangra'),
      d('Palampur', 35, '1.25 hours', 'Tea Gardens, Neugal Khad',
        'Tea gardens on the Kangra valley floor with the Dhauladhar range behind them. An easy drive and the most photogenic short trip from Dharamshala.',
        ['Tea gardens', 'Neugal Khad', 'Andretta artists village'], 'Mar-Jun, Sep-Nov', '/dharamshala-to-palampur'),
      d('Bir Billing', 65, '2 hours', 'Paragliding Capital',
        'The main paragliding site in India, with the take-off at Billing above and the landing at Bir. Two hours out. Flying is seasonal and weather-dependent, so confirm before planning a day around it.',
        ['Paragliding', 'Tibetan colony', 'Bir monasteries'], 'Mar-Jun, Sep-Nov', '/dharamshala-to-bir-billing'),
      d('Chintpurni', 90, '2.5 hours', 'Shakti Peetha Temple',
        'A Shakti Peetha two and a half hours south, heavily visited during Navratri and quiet outside it. Often combined with Jwalamukhi on the same run.',
        ['Chintpurni Temple', 'Jwalamukhi nearby'], 'Mar-Jun, Sep-Nov', '/dharamshala-to-chintpurni'),
      d('Dalhousie', 120, '4 hours', 'Colonial Hill Station',
        'Four hours north-west, a colonial hill station spread over five hills, with Khajjiar — often called mini Switzerland — nearby. An overnight rather than a day trip.',
        ['Khajjiar meadow', 'Colonial churches', 'Panchpula'], 'Mar-Jun, Sep-Nov', '/dharamshala-to-dalhousie'),
    ],
    faqs: [
      { question: 'What places can I visit near Dharamshala?', answer: 'McLeod Ganj is 9 km for the Tibetan quarter and monastery, Bhagsunag 11 km for the waterfall, Chamunda Devi 15 km and Kangra 18 km for the fort. Palampur is 35 km for the tea gardens, Bir Billing 65 km for paragliding, Chintpurni 90 km and Dalhousie 120 km.' },
      { question: 'How far is McLeod Ganj from Dharamshala?', answer: '9 km, about thirty minutes up a steep road. Most of the quarter itself is walked rather than driven — the lanes are narrow and parking is limited, so a car is best positioned at the edge.' },
      { question: 'Can I go paragliding near Dharamshala?', answer: 'At Bir Billing, 65 km and about two hours out, which is the main paragliding site in India. Flying is seasonal and weather-dependent and operators cancel on the day when conditions are wrong, so it is worth confirming rather than assuming.' },
      { question: 'Is Dalhousie a day trip from Dharamshala?', answer: 'Not comfortably. It is 120 km but four hours each way on hill roads, and Khajjiar is beyond Dalhousie again. Treat it as an overnight.' },
      { question: 'What is the best season around Dharamshala?', answer: 'March to June and September to November. The monsoon is heavy in the Kangra valley with real landslide risk on the hill roads, and winter brings snow to the higher approaches including McLeod Ganj at times.' },
    ],
  },
};

export default placesToVisitWave2;
