// Week 48 guide 24 — "best time to visit kasol" (3,366 impressions a quarter,
// position 9.3; the templated /best-time-to-visit/kasol it replaces carries
// 20,607 impressions at position 8). Rebuilt IN PLACE at the same URL: the
// road-trip mood with the drive-time bands repurposed as month groups, so the
// page answers the question month by month instead of season by season.
// Temperatures and seasons match src/utilis/bestTimeToVisitData.js (Kasol).

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'best-time-to-visit-kasol',
  path: '/best-time-to-visit/kasol',
  inPlace: true,
  mood: 'roadtrip',
  cluster: 'road',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'best time to visit kasol', impressions: 3366, position: 9.3 },

  eyebrow: 'Best time to visit · Parvati valley',
  crumbs: [{ name: 'Best time to visit', url: '/best-time-to-visit' }],
  crumbName: 'Best time to visit Kasol',
  titleLead: 'Best time to visit Kasol:',
  titleAccent: 'month by month, with crowds, prices and what is open',
  title: 'Best Time to Visit Kasol: Month by Month, with Crowds, Prices and What Is Open',
  metaTitle: 'Best Time to Visit Kasol: Month by Month, Crowds & Cost',
  metaDescription: 'Kasol month by month: crowds, room prices and what is open. Best March to June and September to November; avoid July and August. Delhi to Kasol is 520 km, 11–12 hours, sedan ₹5,720 one-way.',
  keywords: ['best time to visit kasol', 'kasol best month', 'kasol in december snow', 'kasol in monsoon', 'kheerganga trek best time', 'kasol weather month wise', 'delhi to kasol cab'],
  heroImage: `${IMG}/Kasol/Kasol_hero_section.jpg`,
  heroAlt: 'Riverside cafés and guesthouses on the Parvati at Kasol, with the pine slopes of the valley behind',

  lead: 'The best time to visit Kasol is March to June and again from September to November, with April, May and October the strongest months: the Kheerganga trek is open, the riverside camps are running and the days sit between 8 and 25°C. Avoid July and August, when the Parvati valley takes the heaviest rain of the year and the treks close. From December to February Kasol is cold, between -3 and 15°C, with snow from late December, the cafés open and Kheerganga shut. Delhi to Kasol is 520 km and eleven to twelve hours by road; a sedan is ₹5,720 one-way at ₹11/km and ₹11,440 for a three-day round trip.',
  keyFacts: [
    { label: 'Best months', value: 'Mar–Jun · Sep–Nov' },
    { label: 'Avoid', value: 'Jul–Aug monsoon' },
    { label: 'Delhi to Kasol', value: '520 km · 11–12 hrs' },
    { label: 'Sedan, one-way', value: '₹5,720' },
  ],
  stickyLabel: 'Kasol cab',
  stickyPrice: 'Sedan ₹5,720',
  waText: 'Hi, I want a cab from Delhi to Kasol. Please share the fare for my dates and number of people.',

  intro: [
    'Kasol has two good seasons and two that need a warning, and the search results for this question tend to give you a weather panel and nothing else. This page goes month by month instead, because the thing that actually decides a Kasol trip is not the temperature but what the month does to the trail to Kheerganga, to the room rates on the riverside, and to the last 31 km of road up from Bhuntar.',
    'Every fare on the page is from the published rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km and a 12-seater Tempo Traveller ₹23/km, on a 300 km per day minimum with tolls and parking at actual. There is no season surcharge in May or at New Year. The temperatures are the same ranges the site has always published for Kasol, broken down by month so you can see where the edges of each season fall.',
  ],

  bands: [
    {
      eyebrow: 'March to June',
      heading: 'March to June: the Kheerganga window, and the crowds that come with it',
      note: 'Days between 8 and 25°C, nights still cold in March and mild by June. Crowds are very high from mid-April and room and camp prices are at their peak; this is the season to book before you leave, not on arrival.',
      places: [
        { name: 'Kheerganga trek', image: `${IMG}/Kasol/Kasol_Village.jpg`, alt: 'The Parvati river and pine forest above Kasol, the valley the Kheerganga trail follows up from Barshaini', distance: 'Barshaini, 16 km', time: '4–6 hr walk', bestFor: 'Best from April', highlights: ['Hot spring at the top', 'Rudra Nag waterfall', 'Night in the camps'], blurb: 'The road ends at Barshaini and the trail climbs about 12 km to the meadow and its hot spring. The snow clears above Barshaini through March, so April is the first dependable month; by May the camps at the top are full every night and the path is busy from dawn.', note: '8–25°C · crowds very high', href: '/sightseeing/kasol-kheerganga-tour', cta: 'Kheerganga tour' },
        { name: 'Riverside camps and cafés', image: `${IMG}/Kasol/Kasol_hero_section.jpg`, alt: 'Riverside cafés and guesthouses on the bank of the Parvati at Kasol', distance: 'In Kasol', time: 'Any evening', bestFor: 'Camping season', highlights: ['Camps on the Parvati', 'Israeli and Himachali food', 'Live music weekends'], blurb: 'This is the Kasol people come for: a tent or a hut with the river a few metres away, and a café strip that runs late. It works from March, when the nights are still cold enough for a fire, to June, when the plains are at 40°C and the valley is at 25.', note: 'Peak pricing · book ahead', href: '/friends-trip-kasol', cta: 'Friends trip' },
        { name: 'Tosh', image: `${IMG}/Manali/Kullu%20Valley.jpg`, alt: 'Terraced fields under snow peaks in the Kullu valley; Tosh sits on a hillside like this above Barshaini', distance: '20 km', time: '45 min drive', bestFor: 'A quieter night', highlights: ['Village above Barshaini', 'Views to the snow line', 'Walk to Kutla'], blurb: 'Four kilometres above Barshaini on a narrow road, Tosh is the village people move to when Kasol gets loud. The cab drops you at the car park below the village; the last stretch is on foot. May and June are its best months, when the fields are green and the peaks at the head of the valley still carry snow.', note: 'Quieter than Kasol', href: '/sightseeing/kasol', cta: 'Kasol sightseeing' },
        { name: 'The Chalal walk', image: `${IMG}/Kasol/Chalal_Trek.jpg`, alt: 'The wooden footbridge over the Parvati from Kasol to Chalal, with the hills still bare in early spring', distance: '2 km on foot', time: '30 min', bestFor: 'March, before the trails open', highlights: ['Footbridge over the Parvati', 'Pine forest path', 'Cafés at Chalal'], blurb: 'Across the footbridge at the bottom of Kasol and along the river through the pines to Chalal village. It is the walk to do in March, when Kheerganga is still under snow and the valley is quiet, and it stays pleasant through the summer as an evening stroll.', note: 'Open all season', href: '/sightseeing/kasol', cta: 'Kasol sightseeing' },
      ],
    },
    {
      eyebrow: 'July and August',
      heading: 'July and August: the monsoon months, and why we tell people to wait',
      note: 'Days between 15 and 25°C and the wettest weeks of the year in the Parvati valley. Flash-flood and landslide risk on the river and the road, the treks closed, and the Bhuntar road liable to block. Crowds are low and rooms are cheap, for a reason.',
      places: [
        { name: 'Manikaran Sahib', image: `${IMG}/Kasol/Manikaran_Sahib.jpg`, alt: 'Gurdwara Manikaran Sahib across the Parvati, with the bridge and prayer flags over the river', distance: '4 km from Kasol', time: '15 min', bestFor: 'The one thing that works in rain', highlights: ['Hot springs', 'Gurdwara langar', 'Shiva temple'], blurb: 'The hot springs and the gurdwara are indoors and open whatever the sky is doing, and the langar is the best meal in the valley on a wet day. If you are already in Kasol when the rain sets in, this is the morning that still happens.', note: '15–25°C · crowds low', href: '/sightseeing/kasol', cta: 'Kasol sightseeing' },
        { name: 'Kasol in the rain', image: `${IMG}/Kasol/Parvati_River.jpg`, alt: 'The Parvati in spate under monsoon cloud, with the riverside cafés on the bank at Kasol', distance: 'In Kasol', time: 'Wet days', bestFor: 'Budget rooms, empty cafés', highlights: ['Rooms at off-season rates', 'River at its loudest', 'Mist on the pines'], blurb: 'The valley is at its greenest and the river at its most dramatic, and the cafés that stay open are nearly empty. The honest trade is that the riverside camps are shut, the river is too high to go near, and a wet spell can close the road out for a day or two.', note: 'Budget pricing · stay back from the river', href: '/kasol', cta: 'Kasol cabs' },
        { name: 'The road in from Mandi', image: `${IMG}/Manali/Pandoh%20Dam.jpg`, alt: 'Pandoh dam on the Beas between Mandi and Bhuntar, on the stretch of road most prone to monsoon landslides', distance: '520 km from Delhi', time: '11–12 hrs, longer in rain', bestFor: 'Check before you leave', highlights: ['Mandi to Pandoh gorge', 'Bhuntar to Jari', 'Driver checks the road'], blurb: 'The Delhi road is fine to Mandi in any month. It is the gorge from Mandi past Pandoh and the last 31 km up the Parvati from Bhuntar that block after heavy rain. In July and August our drivers check the Mandi and Bhuntar road position on the morning of departure and tell you before you set out.', note: 'Landslide season', href: '/travel-by-car/delhi-to-kasol', cta: 'Road guide' },
      ],
    },
    {
      eyebrow: 'September to November',
      heading: 'September to November: the second window, clearer and quieter than spring',
      note: 'The rain tails off through the first half of September. Days are 15 to 25°C in September, cooling to about 15°C by November, with the nights near freezing by the end of the season. Crowds are medium and prices moderate; October is the clearest month of the year in the valley.',
      places: [
        { name: 'Kheerganga in October', image: `${IMG}/Kasol/Kasol_Village.jpg`, alt: 'Clear autumn sky over the Parvati above Kasol, on the way up to the Kheerganga trail', distance: 'Barshaini, 16 km', time: '4–6 hr walk', bestFor: 'Best from mid-September', highlights: ['Dry trail', 'Clear views to the peaks', 'Warm spring, cold nights'], blurb: 'The second season on the trail, and for many people the better one: the path has dried out, the sky is clear from morning to evening, and the camps at the top are half as busy as in May. The hot spring at Kheerganga is at its best when the air is cold. Go by the end of October; November is a gamble on the first snow.', note: '15–25°C · crowds medium', href: '/sightseeing/kasol-kheerganga-tour', cta: 'Kheerganga tour' },
        { name: 'Malana, from the road', image: `${IMG}/Manali/Kullu%20Valley.jpg`, alt: 'Snow peaks above terraced fields in the Kullu valley, the region Malana sits in; there is no photograph of the village here', distance: 'Via Jari', time: '1 hr, then on foot', bestFor: 'Autumn, dry path', highlights: ['Old village with its own customs', 'Walk in from the road head', 'Stay on the marked path'], blurb: 'Malana is a village in a side valley off the Parvati road at Jari, reached by a walk from the road head. It has its own rules for visitors: do not touch the houses, the temple or the people, and keep to the marked path. Those are the village’s rules, and we ask our guests to keep them. October is the month to walk in, on a dry path with clear air.', note: 'Respect the village rules', href: '/sightseeing/kasol', cta: 'Kasol sightseeing' },
        { name: 'The upper valley in November', image: `${IMG}/Kufri/Mahasu_Peak.jpg`, alt: 'Autumn colour and the first dusting of snow on a ridge above Kufri, near Shimla; the upper Parvati valley turns the same way in November', distance: 'Barshaini and Tosh', time: 'Day out from Kasol', bestFor: 'Last walks before the snow', highlights: ['First snow on the ridges', 'Empty trails', 'Nights near freezing'], blurb: 'November is the quiet month between the two seasons. The ridges above Tosh and Barshaini take their first snow, the lower walks to Chalal and Rasol are still open, and the valley has the fewest visitors of the dry months. Bring a proper jacket; the nights are close to zero by the end of the month.', note: 'About 15°C by day · cold nights', href: '/round-trip/delhi-to-kasol', cta: 'Round trip cab' },
      ],
    },
    {
      eyebrow: 'December to February',
      heading: 'December to February: snow at Kasol, cafés open, Kheerganga shut',
      note: 'Days between -3 and 15°C, and the first snow at Kasol itself usually in the second half of December. The Barshaini road can close after a fall and Kheerganga is closed for the season. Crowds are medium around Christmas and New Year and low otherwise; prices are moderate.',
      places: [
        { name: 'Snow in Kasol', image: `${IMG}/Kufri/kufri_hero_section.jpg`, alt: 'Snow among the pines at Kufri, near Shimla; Kasol’s winter snow sits among deodars in the same way from late December', distance: 'In Kasol', time: 'Late Dec to Feb', bestFor: 'A quiet white valley', highlights: ['Snow on the riverside', 'Wood fires in the cafés', 'Empty footbridge to Chalal'], blurb: 'Kasol under snow is a different town: the river runs dark between white banks, the pines carry snow for days, and the cafés that stay open keep a fire going. It is not a snow-sports destination; there is no slope and no ski hire. It is a place to sit by a fire and walk short distances in the cold.', note: '-3 to 15°C · crowds medium', href: '/round-trip/delhi-to-kasol', cta: 'Round trip cab' },
        { name: 'The cafés that stay open', image: `${IMG}/Kasol/Kasol_hero_section.jpg`, alt: 'The café terraces above the river at Kasol', distance: 'In Kasol', time: 'All winter', bestFor: 'New Year week', highlights: ['Many cafés open', 'Rooms easy to find', 'New Year the one busy week'], blurb: 'Unlike the camps, most of the cafés and guesthouses on the main strip run through the winter. New Year is the exception to the quiet: rooms fill and the strip is busy for a week, so book that one in advance and treat every other winter week as a walk-in.', note: 'Moderate pricing', href: '/kasol', cta: 'Kasol cabs' },
        { name: 'Manikaran hot springs in the cold', image: `${IMG}/Kasol/Manikaran_Sahib.jpg`, alt: 'Gurdwara Manikaran Sahib and the bridge over the Parvati, with prayer flags above the river', distance: '4 km from Kasol', time: '15 min', bestFor: 'Steam on a frozen morning', highlights: ['Hot spring baths', 'Langar', 'Steam over the river'], blurb: 'The springs are hot enough to cook rice for the langar, which is why the steam rises off the river bank on a January morning. It is the one Kasol outing that gets better as the weather gets colder, and the road there is short and low enough to stay open through most snowfalls.', note: 'Open through winter', href: '/sightseeing/kasol', cta: 'Kasol sightseeing' },
        { name: 'Deep snow, on the Manali side', image: `${IMG}/Manali/Gulaba_Snow%20point%20with%20adventure%20activities.jpg`, alt: 'Skiers on the snowfields at Gulaba above Manali; this is the deep snow that Kasol does not have', distance: 'Manali, about 80 km', time: '2.5–3 hrs', bestFor: 'If you want snow sports', highlights: ['Solang Valley', 'Gulaba snow point', 'Same road to Bhuntar'], blurb: 'If the point of the trip is skiing, sledging or standing in deep snow, Kasol is the wrong valley: Manali is about 80 km on from Bhuntar and has Solang and Gulaba. Plenty of winter trips do both, two nights in Kasol and two in Manali, on the same car.', note: 'Combine with Manali', href: '/best-time-to-visit/manali', cta: 'Manali by season' },
      ],
    },
  ],

  table: {
    title: 'Kasol month by month',
    caption: 'Kasol month by month: temperature range, rain or snow, crowds, whether the treks are open, and a verdict for each month',
    intro: 'The temperature ranges are the season ranges the site publishes for Kasol, 8 to 25°C in spring and summer, 15 to 25°C in the monsoon and -3 to 15°C in winter, broken down by month. Treat them as a planning guide rather than a forecast; the valley floor and Tosh can differ by several degrees on the same day.',
    columns: [
      { key: 'month', label: 'Month' },
      { key: 'temp', label: 'Temperature', align: 'right' },
      { key: 'rain', label: 'Rain or snow' },
      { key: 'crowd', label: 'Crowds' },
      { key: 'treks', label: 'Treks open?' },
      { key: 'verdict', label: 'Verdict', strong: true },
    ],
    rows: [
      { month: 'January', temp: '-3 to 6°C', rain: 'Snow; roads above Kasol can close', crowd: 'Low', treks: 'Kheerganga closed; Chalal in dry spells', verdict: 'Snow and fires, short walks only' },
      { month: 'February', temp: '0 to 10°C', rain: 'Snow early, thawing late', crowd: 'Low', treks: 'Kheerganga closed; Chalal open', verdict: 'Cold and quiet; snow lingers' },
      { month: 'March', temp: '8 to 16°C', rain: 'Showers; snow lingers above Barshaini', crowd: 'Building', treks: 'Kheerganga opening late in the month', verdict: 'Good and quiet; cold nights' },
      { month: 'April', temp: '10 to 20°C', rain: 'Occasional showers', crowd: 'High', treks: 'Yes, all trails', verdict: 'Best month for the trek' },
      { month: 'May', temp: '12 to 24°C', rain: 'Mostly dry', crowd: 'Very high', treks: 'Yes, all trails', verdict: 'Best, and the busiest' },
      { month: 'June', temp: '15 to 25°C', rain: 'Dry until pre-monsoon showers late', crowd: 'Very high', treks: 'Yes; check late June', verdict: 'Good; peak crowds and prices' },
      { month: 'July', temp: '15 to 25°C', rain: 'Heavy monsoon rain', crowd: 'Low', treks: 'Closed', verdict: 'Avoid' },
      { month: 'August', temp: '15 to 24°C', rain: 'Heavy rain; landslide risk', crowd: 'Low', treks: 'Closed', verdict: 'Avoid' },
      { month: 'September', temp: '15 to 23°C', rain: 'Easing by mid-month', crowd: 'Low, rising', treks: 'Reopening from mid-month', verdict: 'Good from the middle of the month' },
      { month: 'October', temp: '10 to 20°C', rain: 'Dry; the clearest month', crowd: 'Medium', treks: 'Yes, all trails', verdict: 'Best month for the valley' },
      { month: 'November', temp: '0 to 12°C', rain: 'Dry; first snow on the ridges', crowd: 'Medium', treks: 'Lower walks; Kheerganga until the first snow', verdict: 'Good and cold; the quiet month' },
      { month: 'December', temp: '-3 to 8°C', rain: 'Snow from the second half', crowd: 'Medium at New Year', treks: 'Kheerganga closed; Chalal open', verdict: 'Snow, cafés and New Year' },
    ],
    footnote: 'Kheerganga is best from April to June and from mid-September to October. The Bhuntar to Kasol road is the one to check in July, August and after any December to February snowfall.',
  },

  sections: [
    {
      eyebrow: 'The short answer',
      heading: 'Which is the single best month to visit Kasol?',
      paras: [
        'If the trip is built around Kheerganga or a night in the riverside camps, choose April or May. The trail is open and dry, the meadow at the top is green, the camps are running at full strength and the days are warm enough to sit out by the river. The price of that is company: from mid-April Kasol is at its busiest, the camps and the better guesthouses are booked out on weekends, and rates are at their peak. If you want the valley without the crowd, choose October. The trail is open again, the sky is clearer than in any spring month, the crowds have dropped to medium and the rooms are cheaper. The nights are cold, which is the only thing October gives up.',
        'The edges of the seasons are worth knowing. March is quiet and cheap but Kheerganga is under snow until late in the month, so a March trip is Chalal, Manikaran and the river rather than the trek. June is the hottest month on the plains, which is exactly why Kasol fills up: the valley is at 25°C while Delhi is at 40, and the school holidays send every family north. Late June also brings the first pre-monsoon showers, so a June trip should sit in the first half of the month.',
      ],
      link: { label: 'Kasol and Kheerganga tour package', href: '/sightseeing/kasol-kheerganga-tour' },
    },
    {
      eyebrow: 'Days and money',
      heading: 'How many days do I need in Kasol, and what does the cab from Delhi cost?',
      paras: [
        'Two to three days in the valley is the right length, and the drive adds a day at each end. Kasol is 520 km from Delhi and eleven to twelve hours on the road, so day one is the drive up, day two is Manikaran, Chalal and the river, and day three is the drive home. That is the three-day trip most people book. Kheerganga adds two days, because you walk up on one, sleep at the top and walk down on the next, and the sensible version of that is a five-day booking with the driver waiting at Kasol while you are on the trail. Tosh or Malana fit into the same day as Manikaran if you start early.',
        'The cab is priced on distance with a 300 km per day minimum. A sedan is ₹5,720 one-way, 520 km at ₹11/km, and a three-day round trip is ₹11,440, twice the one-way figure, because that is more than the three-day minimum of 900 km. A fourth day moves the sedan to ₹13,200 and a fifth to ₹16,500, which is the four- and five-day minimum at ₹11. An Ertiga is ₹15,600 for three days, an Innova Crysta ₹18,720 and a 12-seater Tempo Traveller ₹23,920. Fuel and the driver allowance are inside those figures; tolls on NH-44 and parking at Kasol are paid at actual, and there is no surcharge for May, October or New Year.',
      ],
      link: { label: 'Kasol trip cost from Delhi, worked out', href: '/kasol-trip-cost-from-delhi' },
    },
    {
      eyebrow: 'The road',
      heading: 'What is the road from Delhi to Kasol like, and does the season change it?',
      paras: [
        'NH-44 out of Delhi to Chandigarh is the easy half: about 250 km of four- and six-lane highway, four to four and a half hours if you are on the road by five. From Chandigarh the route climbs through Kiratpur and Bilaspur to Mandi, follows the Beas through the Pandoh gorge to Bhuntar, and then turns up the Parvati for the last 31 km through Jari to Kasol. That second half is 270 km of hill road and takes as long as the first, which is how 520 km becomes eleven to twelve hours. A dawn departure puts you in Kasol before dark in every month; a nine o’clock departure does not.',
        'The season changes the second half. In July and August the Mandi to Pandoh gorge and the Bhuntar to Jari stretch are the two places that block after heavy rain, sometimes for a night, and the driver checks the road position on the morning you leave. From late December to February the problem is ice on the shaded bends above Jari before the sun reaches them, so a winter drive should aim to be on that stretch after ten in the morning rather than at first light. In spring and autumn the road is simply long, and the only decision is whether to break it.',
        'If you would rather not do the whole thing in a day, Chandigarh is the sensible halt: Kasol is about 290 km and seven hours beyond it, and a Chandigarh to Kasol sedan is ₹3,300 one-way on the 300 km minimum. Bhuntar airport is 31 km from Kasol, which falls inside the 4 hour / 40 km local package at ₹2,200 for a sedan, so a fly-and-drive trip is possible when the flights are running.',
      ],
      bullets: [
        'Delhi to Chandigarh: 250 km, 4–4.5 hrs on NH-44.',
        'Chandigarh to Bhuntar via Bilaspur and Mandi: about 240 km of hill road.',
        'Bhuntar to Kasol up the Parvati: 31 km, the stretch to check in monsoon and snow.',
      ],
      link: { label: 'Delhi to Kasol by car, the full road guide', href: '/travel-by-car/delhi-to-kasol' },
      image: { src: `${IMG}/Manali/Pandoh%20Dam.jpg`, alt: 'Pandoh dam and its reservoir on the Beas between Mandi and Bhuntar', tag: 'Pandoh · Mandi to Bhuntar', side: 'left', caption: 'The Beas at Pandoh: the road follows the river through the gorge from Mandi to Bhuntar, and this is the stretch that closes after heavy monsoon rain.' },
    },
    {
      eyebrow: 'Off-season',
      heading: 'Is Kasol worth visiting in the monsoon or in the depths of winter?',
      paras: [
        'The monsoon answer is no, and we say so even though it costs us bookings. The Parvati is a steep, narrow valley and in July and August it takes flash floods and landslides seriously; the camps are shut, Kheerganga is closed, the river is too high to sit by, and a wet spell can shut the road out of the valley for a day or more. Rooms are cheap and the valley is beautiful in the mist, but the things people come to Kasol for are not available, and the risk is real. If your dates are fixed in those months, Manikaran and the cafés are what remains, and the drive should be planned with a spare day in hand.',
        'Winter is a different answer: worth it, for a different trip. Kasol from late December to February is cold, between -3 and 15°C, and gets snow that sits among the deodars for days at a time. The riverside camps are closed but most of the cafés and guesthouses on the strip are open, rooms are easy to find outside New Year week, and the hot springs at Manikaran are at their best when the air is freezing. Kheerganga is closed and the Barshaini road can shut after a fall, so the winter version of Kasol is short walks, long meals and a fire. If you want deep snow and something to do on it, drive on to Manali.',
      ],
      link: { label: 'Delhi to Kasol round trip cab', href: '/round-trip/delhi-to-kasol' },
      image: { src: `${IMG}/Kasol/Manikaran_Sahib.jpg`, alt: 'Gurdwara Manikaran Sahib across the Parvati, with the bridge and prayer flags over the river', tag: 'Manikaran · 4 km', caption: 'Manikaran Sahib, 4 km from Kasol: the hot springs and the langar are the outing that works in every month, including the two we tell people to avoid.' },
    },
    {
      eyebrow: 'Kasol or Manali',
      heading: 'How does Kasol compare with Manali in each season?',
      paras: [
        'They share the road as far as Bhuntar, and then Manali is about 50 km up the Beas while Kasol is 31 km up the Parvati, so the choice is not about distance. In spring and summer Kasol is the quieter and cheaper of the two, with the trek and the river; Manali has Solang, the Atal tunnel and a great deal more traffic. In October both are at their best and the choice is a matter of taste. In winter they separate completely: Manali has deep snow, ski hire and a town built for the season, and Kasol has a snowy riverside and a few open cafés. If the trip is about snow, go to Manali; if it is about sitting by a river in the cold with nobody around, Kasol.',
        'Plenty of people do both. A five-day loop of two nights in Kasol and two in Manali on the same car costs a sedan ₹16,500, the five-day minimum of 1,500 km at ₹11, and puts the Parvati valley and the Solang snow in one trip. Manali has its own month-by-month page for the other half of the decision.',
      ],
      link: { label: 'Best time to visit Manali', href: '/best-time-to-visit/manali' },
      image: { src: `${IMG}/Manali/Old%20Manali.jpg`, alt: 'Old Manali village with prayer flags and a snow peak behind', tag: 'Manali · about 80 km', caption: 'Old Manali: about 80 km from Kasol on the same road as far as Bhuntar, and the answer if the trip is about snow rather than the river.' },
    },
  ],

  fare: {
    title: 'Delhi to Kasol by cab',
    note: 'Rate-card fares for the 520 km drive. The three-day figure is the standard Kasol trip: drive up, a day in the valley with the driver, drive home.',
    caption: 'Delhi to Kasol cab fare by vehicle, one-way and three-day round trip',
    distanceKm: 520,
    roundTrip: true,
    days: 3,
    roundLabel: 'Three-day round trip',
    footnote: 'Tolls, Kasol parking and hill-state entry at actual. A fourth day bills the four-day minimum (1,200 km at the vehicle’s rate); a five-day Kheerganga or Kasol-and-Manali trip bills 1,500 km. No season surcharge.',
    waText: 'Hi, I want a Delhi to Kasol cab. Dates, number of people and whether we are doing Kheerganga to follow.',
    bookHref: '/round-trip/delhi-to-kasol',
    bookLabel: 'Delhi to Kasol round trip page',
    cta: 'Get a Kasol quote',
  },

  galleryTitle: 'Kasol through the year',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Kasol/Chalal_Trek.jpg`, title: 'The bridge to Chalal, March', text: 'Bare hills, cold river, empty path: the walk that opens the season.', tag: 'March' },
    { image: `${IMG}/Kasol/Kasol_Village.jpg`, title: 'The Parvati above Kasol, May', text: 'Blue sky, full river, and the trail to Kheerganga open.', tag: 'April to June' },
    { image: `${IMG}/Kasol/Parvati_River.jpg`, title: 'The river in spate, August', text: 'Beautiful and dangerous; the month we ask people to wait out.', tag: 'July to August' },
    { image: `${IMG}/Kasol/Manikaran_Sahib.jpg`, title: 'Manikaran Sahib, October', text: 'Hot springs and langar, the clearest sky of the year over the gorge.', tag: 'September to November' },
    { image: `${IMG}/Kasol/Kasol_hero_section.jpg`, alt: 'The café strip and guesthouses above the Parvati at Kasol, photographed in the green season', title: 'The café strip, off-season', text: 'Most doors stay open through the cold months, with fires lit inside.', tag: 'December to February' },
  ],

  tips: [
    { title: 'In April and May, book the camp before the cab', text: 'The riverside camps and the Kheerganga camps are what sell out, not the car. Fix the stay for your dates, then send us the dates; a sedan or Innova for Kasol is rarely the problem.' },
    { title: 'Carry a warm layer in every month', text: 'Even in June the valley drops to single digits after dark, and the top of Kheerganga is colder still. One proper jacket per person, whatever the plains are doing when you leave Delhi.' },
    { title: 'Let the driver check the Bhuntar road', text: 'In July, August and after a winter snowfall the last 31 km are the question. Our drivers check the Mandi and Bhuntar road position on the morning of departure and tell you before you set out.' },
  ],

  faqs: [
    { question: 'What is the best time to visit Kasol?', answer: 'March to June and September to November, with April, May and October the strongest months. Spring and summer bring 8 to 25°C days, the Kheerganga trek and riverside camping, with very high crowds and peak prices from mid-April. September to November is clearer and quieter after the rain, with medium crowds and moderate prices. Avoid July and August for the monsoon, and expect snow and sub-zero nights from late December to February.' },
    { question: 'Which month is best for the Kheerganga trek from Kasol?', answer: 'April to June and mid-September to October. The trail from Barshaini is open, dry and safe in those windows. It closes through the July and August monsoon because of landslides, and again from December to February when snow covers the route above Barshaini. March and November are shoulder months when the trail may or may not be open, depending on the snow.' },
    { question: 'Is Kasol worth visiting in July and August?', answer: 'We advise against it. The Parvati valley carries a real flash-flood and landslide risk in the monsoon, the treks are closed, the riverside camps are shut and the road from Bhuntar can block for a day or more. Rooms are cheap and the valley is green, but the things people go to Kasol for are not available. If the dates are fixed, keep to Manikaran and the cafés and build a spare day into the drive.' },
    { question: 'Does it snow in Kasol, and when?', answer: 'Yes. Snow usually reaches Kasol itself in the second half of December and can lie among the pines into February, with days between -3 and 15°C. Most cafés and guesthouses stay open, the camps do not, and Kheerganga is closed. The road above Kasol to Barshaini and Tosh can shut after a fall. For deep snow and snow sports, Manali, about 80 km on, is the better choice.' },
    { question: 'How many days are enough for Kasol?', answer: 'Two to three days in the valley, plus a day of driving at each end from Delhi. The usual booking is three days: drive up, a full day for Manikaran, Chalal, Tosh and the river, and drive back. Add two days for Kheerganga, because you sleep at the top; a five-day trip with the driver waiting at Kasol is the sensible version.' },
    { question: 'How far is Kasol from Delhi and how long does the drive take?', answer: 'About 520 km and eleven to twelve hours. The route is NH-44 to Chandigarh, then the hill road through Bilaspur, Mandi and Bhuntar, and the last 31 km up the Parvati valley from Bhuntar. Leave Delhi by five in the morning to arrive before dark. Chandigarh is the natural halt if you want to break the drive; Kasol is about 290 km beyond it.' },
    { question: 'What does a cab from Delhi to Kasol cost?', answer: 'At the published rate card a sedan is ₹5,720 one-way (520 km at ₹11/km) and ₹11,440 for a three-day round trip. An Ertiga or SUV is ₹7,800 one-way and ₹15,600 for three days, an Innova Crysta ₹9,360 and ₹18,720, and a 12-seater Tempo Traveller ₹11,960 and ₹23,920. A fourth day bills the four-day minimum of 1,200 km. Tolls and parking are extra; there is no season surcharge.' },
    { question: 'Can I reach Kasol from Chandigarh or Bhuntar airport instead?', answer: 'Yes. Chandigarh to Kasol is about 290 km and seven hours, and a sedan is ₹3,300 one-way on the 300 km minimum, with an Ertiga ₹4,500 and an Innova Crysta ₹5,400. Bhuntar airport is 31 km from Kasol, inside the 4 hour / 40 km local package at ₹2,200 for a sedan, ₹2,500 for an SUV and ₹2,800 for an Innova.' },
  ],

  related: [
    { label: 'Delhi to Kasol one-way cab', sub: '520 km · ₹5,720 sedan', href: '/one-way-cab/delhi-to-kasol', img: '/images/car/swift_dzire.jpg' },
    { label: 'Delhi to Kasol round trip', sub: 'Three days, driver waits', href: '/round-trip/delhi-to-kasol', img: '/images/car/innova_crysta.jpg' },
    { label: 'Kasol trip cost from Delhi', sub: 'Cab, stay and food worked out', href: '/kasol-trip-cost-from-delhi', img: `${IMG}/Kasol/Kasol_hero_section.jpg` },
    { label: 'Kasol and Kheerganga tour', sub: 'The trek, packaged', href: '/sightseeing/kasol-kheerganga-tour', img: `${IMG}/Kasol/Kasol_Village.jpg` },
    { label: 'Kasol sightseeing', sub: 'Manikaran, Chalal, Tosh', href: '/sightseeing/kasol', img: `${IMG}/Kasol/Manikaran_Sahib.jpg` },
    { label: 'Chandigarh to Kasol cab', sub: '290 km · ₹3,300 sedan', href: '/chandigarh-to-kasol', img: `${IMG}/Chandigarh/Rock_Garden.jpg` },
    { label: 'Delhi to Kasol by Tempo Traveller', sub: 'Groups of 12 and up', href: '/tempo-traveller/delhi-to-kasol', img: '/images/tempo/12_seater.jpg' },
    { label: 'Best time to visit Manali', sub: 'The other valley, month by month', href: '/best-time-to-visit/manali', img: `${IMG}/Manali/Manali_hero_section.jpg` },
  ],
  guides: ['best-time-to-visit-amritsar', 'how-to-reach-kaza-from-delhi', 'dalhousie-dharamshala-circuit-by-car', 'delhi-to-srinagar-by-road', 'hill-stations-near-gurgaon-noida'],

  schema: {
    places: ['kasol', 'manali', 'chandigarh'],
    howTo: {
      name: 'How to choose your dates for Kasol',
      description: 'Pick the month by what you want open, then book the stay before the cab.',
      totalTime: 'PT10M',
      estimatedCost: { currency: 'INR', value: 11440 },
      steps: [
        { name: 'Decide what the trip is for', text: 'Kheerganga and riverside camping need April to June or mid-September to October. Snow and a quiet valley need late December to February. Nothing needs July or August.' },
        { name: 'Check the month against the table', text: 'Temperature, crowds, whether the treks are open and the verdict for each month are in the month-by-month table on this page.' },
        { name: 'Book the stay first in peak months', text: 'In April, May and New Year week the camps and guesthouses sell out before the cars do. Fix the stay, then the dates.' },
        { name: 'Book the cab as a three-day round trip', text: 'A sedan is ₹11,440 for three days from Delhi, ₹16,500 for a five-day Kheerganga trip. WhatsApp 7668570551 with dates and headcount.' },
      ],
    },
  },
};
