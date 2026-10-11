// Week 48 guide 25 — "best time to visit amritsar", rebuilt in place. The
// templated /best-time-to-visit/amritsar drew 7,642 impressions a quarter at
// position 7.5 (the head query alone 1,135 impressions at 10.5) with a page
// that said little more than "November to March". This replaces it with the
// Golden Temple, Wagah, the food lanes and the hill day trips by season, and a
// month-by-month table. Seasons and temperatures agree with
// src/utilis/bestTimeToVisitData.js (key Amritsar).

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'best-time-to-visit-amritsar',
  path: '/best-time-to-visit/amritsar',
  inPlace: true,
  mood: 'roadtrip',
  cluster: 'road',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'best time to visit amritsar', impressions: 1135, position: 10.5 },

  eyebrow: 'Season guide · Amritsar',
  crumbs: [{ name: 'Best time to visit', url: '/best-time-to-visit' }],
  crumbName: 'Best time to visit Amritsar',
  titleLead: 'Best time to visit Amritsar,',
  titleAccent: 'and the Golden Temple by season',
  title: 'Best Time to Visit Amritsar, and the Golden Temple by Season',
  metaTitle: 'Best Time to Visit Amritsar: Crowds, Weather & Cab Cost',
  metaDescription: 'Best time to visit Amritsar: November to March for the Golden Temple and Wagah, Baisakhi in April, Diwali and Gurpurab in November. Month by month with crowds, cost and the cab from Delhi.',
  keywords: ['best time to visit amritsar', 'best time to visit golden temple', 'amritsar weather by month', 'amritsar in december', 'amritsar in summer', 'wagah border ceremony timing', 'amritsar season guide', 'delhi to amritsar cab fare'],
  heroImage: `${IMG}/Amritsar/Golden_Temple.jpg`,
  heroAlt: 'The Golden Temple at Amritsar reflected in the sarovar',

  lead: 'The best time to visit Amritsar is November to March, when the days sit between 5°C and 20°C and the Golden Temple is at its most comfortable to walk barefoot. February is the sweet spot, after the December and January fog has lifted and before the heat starts in April. May to September is the off-season: 40°C to 45°C in May and June, then a humid monsoon from July. Delhi to Amritsar is 450 km and seven to eight hours on NH-44, ₹4,950 one-way for a sedan at ₹11/km, and the fare is the same in every month.',
  keyFacts: [
    { label: 'Best months', value: 'November to March' },
    { label: 'Hottest', value: 'May–June · up to 45°C' },
    { label: 'Delhi to Amritsar', value: '450 km · 7–8 hrs' },
    { label: 'Sedan, one-way', value: '₹4,950' },
  ],
  stickyLabel: 'Amritsar cab',
  stickyPrice: 'Sedan ₹4,950',
  waText: 'Hi, I want a cab to Amritsar. Please share the fare for my dates and pickup city.',

  intro: [
    'Amritsar has a Punjab plains climate, which means it does everything to excess: foggy winter mornings you cannot see the far side of the sarovar through, summer afternoons that empty the parikrama, and a monsoon that fills the tank to the brim. The Golden Temple is open through all of it, the langar never stops, and the Wagah ceremony happens every evening of the year. What changes with the season is how pleasant each of those things is, how long the queue for the sanctum runs, and what time the border ceremony starts.',
    'This page takes the year in four parts and, within each, says what the Golden Temple, Wagah, the food lanes and the hill day trips are like then. The month-by-month table under the season cards gives the temperatures and the verdict at a glance. Every fare comes from the published rate card: Sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km and a 12-seater Tempo Traveller ₹23/km, on a 300 km per day minimum for outstation trips, with tolls and parking at actual. There is no seasonal or festival surcharge.',
  ],

  bands: [
    {
      eyebrow: 'November to February',
      heading: 'Winter: the season Amritsar is built for, fog and all',
      note: 'Daytime 15°C to 20°C, nights down to 5°C, and dense fog on most December and January mornings. Crowds are at their highest, with Bandi Chhor Divas on 8 November 2026, Guru Nanak Jayanti on 24 November 2026 and the Christmas to New Year week the three peaks.',
      places: [
        { name: 'Golden Temple in winter', image: `${IMG}/Amritsar/Golden_Temple.jpg`, alt: 'The Golden Temple and its sarovar on a clear winter day', distance: 'Old city', time: 'Open 24 hrs', note: 'Free entry, all hours', bestFor: 'Evenings and late nights', highlights: ['Lamps from dusk', 'Late-night palki ceremony', 'Langar all day'], blurb: 'The cool months are when the marble parikrama is pleasant underfoot and the complex is at its most crowded. Go after eight in the evening, when the day visitors have left and the lamps are lit, or before dawn for the palki ceremony that brings the Guru Granth Sahib into the sanctum. The sanctum queue on a winter weekend can run two to three hours; a weekday night is a fraction of that.', href: '/sightseeing/amritsar-golden-temple-wagah-border-tour', cta: 'Golden Temple tour' },
        { name: 'Wagah in winter', image: `${IMG}/Amritsar/Wagah_Border.jpg`, alt: 'The Wagah border retreat ceremony', distance: '30 km', time: '45 min', fare: '₹2,200', bestFor: 'Ceremony about 4.15–4.30 pm', highlights: ['Retreat before sunset', 'Be seated by 3', 'Warm layer for the stands'], blurb: 'The ceremony starts about an hour before sunset, which in December and January means around a quarter past four. The stands face west and are cold once the sun drops, so carry a layer. The half-day cab waits through the ceremony and has you back at the Golden Temple by seven, in time for the lamps.', href: '/sightseeing/amritsar-wagah-border-same-day', cta: 'Wagah same-day tour' },
        { name: 'The food lanes in winter', image: `${IMG}/Amritsar/Amristar_hero_section.jpg`, alt: 'The streets of old Amritsar around the Golden Temple', distance: 'On foot', time: 'Any hour', note: 'Walk from the Golden Temple', bestFor: 'Sarson da saag, kulcha, gajar halwa', highlights: ['Kesar da Dhaba', 'Kulcha breakfasts', 'Hot jalebi at night'], blurb: 'Winter is the season the Amritsari kitchen was made for: sarson da saag with makki di roti, kulcha straight from the tandoor with chole, and gajar halwa and hot jalebi after the evening at the temple. Everything worth eating is within a short walk of the complex, and the cold makes the walk part of the pleasure.', href: '/amritsar-food-tour', cta: 'Food tour' },
        { name: 'Jallianwala Bagh', image: `${IMG}/Amritsar/Jallianwala_Bagh.jpg`, alt: 'The memorial garden at Jallianwala Bagh', distance: '200 m', time: '1 hr', note: 'Two minutes from the Golden Temple', bestFor: 'A daylight hour on the same visit', highlights: ['Martyrs’ well', 'Bullet-marked wall', 'Flame of Liberty'], blurb: 'The memorial garden is a short walk from the temple entrance and is best seen in daylight, so do it on the way to or from the Golden Temple rather than as a separate outing. In the fog season the late morning is the clearest hour for it.', href: '/tourist-attractions/amritsar', cta: 'Amritsar attractions' },
        { name: 'Partition Museum on a foggy morning', image: `${IMG}/Amritsar/Partition_Museum.jpg`, alt: 'The Town Hall building that houses the Partition Museum, Amritsar', distance: '1 km', time: '2 hrs', note: 'Heritage Street, Town Hall', bestFor: 'Indoors while the fog burns off', highlights: ['Oral histories', 'Refugee belongings', 'Heritage Street walk'], blurb: 'On a December morning the fog can sit until eleven, and the museum in the old Town Hall is the right use of those hours: two floors of oral histories and objects from 1947, walking distance from the temple along the pedestrian Heritage Street. Come out to a cleared sky and a warm afternoon.', href: '/amritsar-beyond-golden-temple', cta: 'Beyond the Golden Temple' },
        { name: 'Dalhousie for snow', image: `${IMG}/Dalhousie/dalhousie_hero_section.jpg`, alt: 'Dalhousie, the nearest hill station to Amritsar, in the Himachal foothills', distance: '200 km', time: '4.5 hrs', km: 200, bestFor: 'Snow from late December', highlights: ['Snow on the Mall', 'Khajjiar meadow', 'Dainkund walk'], blurb: 'The nearest hill station, four and a half hours via Pathankot, usually has snow between late December and February. Add two nights to a winter Amritsar trip and the same car takes you up; Khajjiar is twenty kilometres beyond and the road can close after a heavy fall, so ask the driver on the day.', href: '/amritsar-to-dalhousie', cta: 'Cab to Dalhousie' },
      ],
    },
    {
      eyebrow: 'March to April',
      heading: 'Spring and Baisakhi: warm days, the harvest, and the last comfortable weeks',
      note: 'March is 15°C to 28°C and about the best weather of the year. April climbs to 35°C by the end, but Baisakhi in the middle of the month is the biggest day of the Sikh calendar and the reason to come.',
      places: [
        { name: 'Golden Temple at Baisakhi', image: `${IMG}/Amritsar/Golden_Temple.jpg`, alt: 'The Golden Temple, Amritsar', distance: 'Old city', time: 'Open 24 hrs', note: 'Free entry, all hours', bestFor: 'The founding of the Khalsa', highlights: ['Nagar kirtan', 'Kirtan through the night', 'Largest langar of the year'], blurb: 'Baisakhi marks the harvest and the founding of the Khalsa in 1699, and the Golden Temple is at the centre of it: processions through the old city in the days before, kirtan through the night, and a langar that feeds more people than on any other day. Expect the sanctum queue to match Diwali. The Baisakhi cab page has the arrangements for the week.', href: '/baisakhi-amritsar-cab', cta: 'Baisakhi cab' },
        { name: 'Wagah in spring', image: `${IMG}/Amritsar/Wagah_Border.jpg`, alt: 'Crowds at the Wagah border ceremony', distance: '30 km', time: '45 min', fare: '₹2,200', bestFor: 'Ceremony about 5–5.30 pm', highlights: ['Later start as days lengthen', 'Warm stands by April', 'Arrive 90 min before'], blurb: 'As the days lengthen the ceremony moves later, to about five by the end of March and half past five once summer timings begin. March is the most comfortable month in the stands; by mid-April the afternoon sun is strong and a hat and water matter more than a layer.', href: '/sightseeing/amritsar-wagah-border-same-day', cta: 'Wagah same-day tour' },
        { name: 'Jallianwala Bagh in April', image: `${IMG}/Amritsar/Jallianwala_Bagh.jpg`, alt: 'Jallianwala Bagh memorial, Amritsar', distance: '200 m', time: '1 hr', note: 'Two minutes from the Golden Temple', bestFor: 'The 13 April anniversary', highlights: ['Anniversary observances', 'Morning visit', 'Pairs with the temple'], blurb: 'The massacre of 13 April 1919 happened on Baisakhi day, and the anniversary falls in the same week as the festival. The garden is busiest and most moving then; a morning visit before the heat is the right way to do it.', href: '/amritsar-in-2-days-itinerary', cta: 'Two-day itinerary' },
        { name: 'The food lanes in spring', image: `${IMG}/Amritsar/Amristar_hero_section.jpg`, alt: 'Old Amritsar near the Golden Temple', distance: 'On foot', time: 'Mornings', note: 'Walk from the Golden Temple', bestFor: 'Kulcha and lassi before the heat', highlights: ['Kulcha breakfast', 'Lassi in a steel glass', 'Fish tikka at dusk'], blurb: 'The kulcha shops are at their best before nine, and by April that is also the only cool hour of the day. A lassi thick enough to stand a spoon in is the Amritsar answer to the first warm afternoons; the fish and tandoori lanes come alive again after sunset.', href: '/amritsar-food-tour', cta: 'Food tour' },
        { name: 'McLeodganj in spring', image: `${IMG}/Dharamshala/McLeod_Ganj.jpg`, alt: 'McLeodganj, above Dharamshala, under the Dhauladhar range', distance: '200 km', time: '4.5 hrs', km: 200, bestFor: 'Clear Dhauladhar views', highlights: ['Dalai Lama Temple', 'Bhagsu walk', 'Triund trek opens'], blurb: 'March and April are when the Dhauladhar is still white above a green Kangra valley and the Triund trail has just reopened. Dharamshala is the same 200 km from the Golden Temple as Dalhousie, on the Kangra road from Pathankot, and a two-night add-on to an Amritsar trip.', href: '/amritsar-to-dharamshala', cta: 'Cab to Dharamshala' },
      ],
    },
    {
      eyebrow: 'May to September',
      heading: 'Summer and monsoon: the off-season, and how to do it anyway',
      note: 'May and June reach 42°C to 45°C with almost no visitors. The monsoon arrives in early July and runs to September, 25°C to 35°C and humid, with the sarovar full and the odd Wagah evening rained on.',
      places: [
        { name: 'Golden Temple before sunrise', image: `${IMG}/Amritsar/Golden_Temple.jpg`, alt: 'The Golden Temple at first light', distance: 'Old city', time: 'Open 24 hrs', note: 'Free entry, all hours', bestFor: 'The only cool hours of a summer day', highlights: ['Palki ceremony before dawn', 'Matting on the marble', 'No queue at 5 am'], blurb: 'In summer the temple is a dawn-and-night place. Be inside by five for the morning palki ceremony, when the marble is still cool and the queue is minutes long; by ten the parikrama is too hot to stand on outside the matting strips. Come back after nine at night, when the stone has cooled and the complex is nearly empty. The monsoon softens all of this, and a full sarovar under a grey sky is a sight the winter visitor never sees.', href: '/amritsar-travel-guide', cta: 'Amritsar travel guide' },
        { name: 'Partition Museum in the afternoon', image: `${IMG}/Amritsar/Partition_Museum.jpg`, alt: 'The Partition Museum in the old Town Hall, Amritsar', distance: '1 km', time: '2 hrs', note: 'Heritage Street, Town Hall', bestFor: 'Indoors from noon to four', highlights: ['Air-conditioned galleries', '1947 oral histories', 'Cafés on Heritage Street'], blurb: 'The middle of a summer day is for the museum: the galleries in the Town Hall are the only place in the old city where a July afternoon is comfortable, and the collection needs the two hours you will want to spend out of the sun anyway.', href: '/sightseeing/amritsar-heritage-tour-same-day', cta: 'Heritage tour' },
        { name: 'Wagah in the heat and the rain', image: `${IMG}/Amritsar/Wagah_Border.jpg`, alt: 'The Wagah border ceremony seen from the stands', distance: '30 km', time: '45 min', fare: '₹2,200', bestFor: 'Ceremony about 5.30 pm', highlights: ['Open stands, full sun', 'Water and a hat', 'Rain can cut it short'], blurb: 'Summer timings put the ceremony at about half past five, and the stands are in full sun until it starts. Go anyway, but arrive no earlier than you must and drink water. In the monsoon a heavy shower can shorten or interrupt the ceremony, so treat it as a bonus rather than the fixed point of the day.', href: '/sightseeing/amritsar-wagah-border-same-day', cta: 'Wagah same-day tour' },
        { name: 'The food lanes in summer', image: `${IMG}/Amritsar/Amristar_hero_section.jpg`, alt: 'A street in old Amritsar', distance: 'On foot', time: 'After dark', note: 'Walk from the Golden Temple', bestFor: 'Lassi, phirni, night kulcha', highlights: ['Chilled phirni', 'Lassi by the litre', 'Pakoras in the rain'], blurb: 'The lanes shut down in the afternoon and reopen after dark, which is when the summer visitor should eat. Lassi and phirni in clay bowls carry the season; in the monsoon every corner fries pakoras the moment the rain starts.', href: '/amritsar-food-tour', cta: 'Food tour' },
        { name: 'Khajjiar meadow, the escape', image: `${IMG}/Khajjiar/Khajjiar_Meadow.jpg`, alt: 'The Khajjiar meadow above Dalhousie', distance: '220 km', time: '5 hrs', km: 220, bestFor: 'Twenty degrees cooler than the plain', highlights: ['Meadow and lake', 'Kalatop forest', 'Dalhousie on the way'], blurb: 'The honest advice for a June visit is to give Amritsar a night and spend the rest in the hills. Khajjiar, twenty kilometres beyond Dalhousie, is the closest green meadow to the Punjab plain and twenty degrees cooler than the sarovar at noon. The Dalhousie–Khajjiar tour runs from Amritsar.', href: '/sightseeing/dalhousie-khajjiar-tour', cta: 'Dalhousie–Khajjiar tour' },
        { name: 'Bhagsu waterfall in the monsoon', image: `${IMG}/Dharamshala/Bhagsunag_Waterfall.jpg`, alt: 'Bhagsunag waterfall above McLeodganj in full flow', distance: '200 km', time: '4.5 hrs', km: 200, bestFor: 'Waterfalls at full flow', highlights: ['Bhagsu falls', 'Mist over the Dhauladhar', 'Landslide checks on the day'], blurb: 'July and August turn the Kangra hills green and the Bhagsu waterfall above McLeodganj into something worth the walk. The road from Pathankot is fine in ordinary rain; after a very heavy spell the driver checks for landslide closures before leaving Amritsar.', href: '/amritsar-to-dharamshala', cta: 'Cab to Dharamshala' },
      ],
    },
    {
      eyebrow: 'October',
      heading: 'October: the shoulder month that beats the peak',
      note: 'The rain has gone, the fog has not come, and the days are dry at around 30°C with evenings under 20°C. Dussehra falls on 20 October 2026, and the crowds only build after Diwali in November.',
      places: [
        { name: 'Golden Temple in October', image: `${IMG}/Amritsar/Amristar_hero_section.jpg`, alt: 'Amritsar, with the Golden Temple at the heart of the old city', distance: 'Old city', time: 'Open 24 hrs', note: 'Free entry, all hours', bestFor: 'Clear skies, short queues', highlights: ['Clean light for photographs', 'Warm marble, cool evenings', 'Pre-Diwali calm'], blurb: 'If you can choose freely, choose October. The sky is the clearest of the year, the parikrama is warm rather than hot, and the queue for the sanctum on a weekday is under an hour. The Diwali and Gurpurab surge is still a month away.', href: '/sightseeing/amritsar-full-day-city-tour', cta: 'Full-day city tour' },
        { name: 'Wagah in October', image: `${IMG}/Amritsar/Wagah_Border.jpg`, alt: 'The Wagah border ceremony at dusk', distance: '30 km', time: '45 min', fare: '₹2,200', bestFor: 'Ceremony about 4.30–5 pm', highlights: ['Timing moves earlier', 'Dry evenings', 'Stands fill on weekends'], blurb: 'With sunset creeping earlier the ceremony moves back towards half past four through the month. Evenings are dry and mild, the best conditions of the year for the stands, and the weekend crowd is Punjab’s own rather than the winter tourist wave.', href: '/sightseeing/amritsar-wagah-border-same-day', cta: 'Wagah same-day tour' },
        { name: 'Jallianwala Bagh and the old city on foot', image: `${IMG}/Amritsar/Jallianwala_Bagh.jpg`, alt: 'Jallianwala Bagh memorial garden', distance: 'On foot', time: 'Half a day', note: 'Walk from the Golden Temple', bestFor: 'Walking weather', highlights: ['Jallianwala Bagh', 'Heritage Street', 'Gurdwaras of the old city'], blurb: 'October is the month for the old city on foot: the Bagh, the Heritage Street to the Town Hall, the katras and the smaller gurdwaras, none of which is pleasant to walk between in June or in the fog. Two hours in the morning and two in the late afternoon cover it.', href: '/amritsar-in-2-days-itinerary', cta: 'Two-day itinerary' },
        { name: 'The food lanes in October', image: `${IMG}/Amritsar/Amristar_hero_section.jpg`, alt: 'Old Amritsar around the Golden Temple', distance: 'On foot', time: 'Any hour', note: 'Walk from the Golden Temple', bestFor: 'Everything, at any hour', highlights: ['Kulcha mornings', 'Fish and tikka evenings', 'Sweet shops before Diwali'], blurb: 'The one month you can eat kulcha at nine, fish tikka at eight and jalebi at eleven without the weather having a say. The sweet shops start their Diwali stock in the last week and the old city smells of ghee.', href: '/amritsar-food-tour', cta: 'Food tour' },
        { name: 'Dainkund, clear October hills', image: `${IMG}/Dalhousie/Dainkund_Peak.jpg`, alt: 'Dainkund Peak above Dalhousie under a clear sky', distance: '200 km', time: '4.5 hrs', km: 200, bestFor: 'The clearest mountain views of the year', highlights: ['Dainkund walk', 'Post-monsoon clarity', 'Before the snow'], blurb: 'After the monsoon washes the dust out of the air, October gives the Dhauladhar and the Pir Panjal their sharpest outlines. Dalhousie and the Dainkund walk are at their best; the same three-day cab that brings you from Delhi can carry on up.', href: '/road-trip/amritsar-dharamshala-dalhousie-circuit', cta: 'Amritsar–hills circuit' },
      ],
    },
  ],

  table: {
    title: 'Amritsar month by month',
    caption: 'Amritsar month by month: temperature, weather, crowds at the Golden Temple, Wagah ceremony timing and a verdict for each month',
    intro: 'Temperatures are the usual range for the month on the Punjab plain. Wagah timings are approximate; the ceremony always starts about an hour before sunset and the exact time is set by the BSF for each period.',
    columns: [
      { key: 'month', label: 'Month' },
      { key: 'temp', label: 'Temperature', align: 'right' },
      { key: 'weather', label: 'Weather' },
      { key: 'crowds', label: 'Golden Temple crowds' },
      { key: 'wagah', label: 'Wagah ceremony' },
      { key: 'verdict', label: 'Verdict', strong: true },
    ],
    rows: [
      { month: 'January', temp: '5–15°C', weather: 'Cold, dense morning fog', crowds: 'High; Lohri week busy', wagah: 'About 4.15 pm', verdict: 'Good, plan around fog' },
      { month: 'February', temp: '8–20°C', weather: 'Fog lifting, clear cool days', crowds: 'High on weekends', wagah: 'About 4.30 pm', verdict: 'Best month' },
      { month: 'March', temp: '15–28°C', weather: 'Warm days, cool nights', crowds: 'Medium; Holi weekend busy', wagah: 'About 5 pm', verdict: 'Excellent' },
      { month: 'April', temp: '20–35°C', weather: 'Hot by the end of the month', crowds: 'Peak at Baisakhi mid-month', wagah: 'About 5.30 pm', verdict: 'Good, come for Baisakhi' },
      { month: 'May', temp: '25–42°C', weather: 'Hot and dry', crowds: 'Low', wagah: 'About 5.30 pm', verdict: 'Dawn and night only' },
      { month: 'June', temp: '28–45°C', weather: 'Hottest month, loo winds', crowds: 'Low', wagah: 'About 5.30 pm', verdict: 'Avoid, or pair with the hills' },
      { month: 'July', temp: '27–36°C', weather: 'Monsoon arrives, humid', crowds: 'Medium', wagah: 'About 5.30 pm, rain risk', verdict: 'Bearable, sarovar full' },
      { month: 'August', temp: '26–35°C', weather: 'Humid, heavy showers', crowds: 'Medium', wagah: 'About 5.30 pm, rain risk', verdict: 'Bearable' },
      { month: 'September', temp: '25–34°C', weather: 'Rain tails off, still humid', crowds: 'Medium to low', wagah: 'About 5 pm', verdict: 'Improving' },
      { month: 'October', temp: '18–32°C', weather: 'Dry, clear, mild evenings', crowds: 'Medium; builds after Dussehra', wagah: 'About 4.30–5 pm', verdict: 'Excellent, the quiet best' },
      { month: 'November', temp: '10–25°C', weather: 'Cool and clear, fog from the end', crowds: 'Peak: Diwali 8 Nov, Gurpurab 24 Nov', wagah: 'About 4.30 pm', verdict: 'Excellent, book early' },
      { month: 'December', temp: '5–18°C', weather: 'Cold, fog from mid-month', crowds: 'High; Christmas to New Year full', wagah: 'About 4.15 pm', verdict: 'Good, plan around fog' },
    ],
    footnote: 'Festival dates are for 2026: Baisakhi in mid-April, Dussehra 20 October, Diwali and Bandi Chhor Divas 8 November, Guru Nanak Jayanti 24 November. Cab fares are the same rate card in every row.',
  },

  sections: [
    {
      eyebrow: 'The answer',
      heading: 'Which month is actually the best for the Golden Temple?',
      paras: [
        'February, with October a close second. November to March is the season everybody quotes, and it is right as far as temperature goes: the marble parikrama, which you walk barefoot, is comfortable from November to March and a trial in any other month. But the winter has a flaw the templated advice never mentions, and that is fog. From the middle of December to the end of January most mornings in Amritsar begin under a white blanket that can hide the sanctum from the far side of the sarovar and can hold until eleven. It is atmospheric once, and a nuisance on a two-day visit. February is the month the fog has gone and the heat has not arrived; the days reach 20°C, the nights are cool rather than cold, and the evening at the temple needs one layer, not three.',
        'October wins on the other axis, crowds. The monsoon has finished, the sky is the clearest of the year, and the festival surge of November has not begun, so a weekday visit in October gets you into the sanctum in under an hour where a winter weekend can take three. The trade is a warmer afternoon, around 30°C, which the temple handles with evening and dawn visits anyway.',
        'Whatever month you choose, the Golden Temple is best seen twice: once after dark, when the lamps are lit and the day visitors have gone, and once before dawn, for the ceremony that carries the Guru Granth Sahib from the Akal Takht into the sanctum. Both timings move with the season, earlier in the morning and later at night through summer, so ask at the information office on arrival.',
      ],
      image: { src: `${IMG}/Amritsar/Golden_Temple.jpg`, alt: 'The Golden Temple at Amritsar seen across the sarovar', tag: 'Golden Temple · all year', caption: 'The sarovar and the sanctum: comfortable underfoot from November to March, best photographed in October.' },
    },
    {
      eyebrow: 'Crowds',
      heading: 'How do the crowds change through the year, and when is it quietest?',
      paras: [
        'The Golden Temple is never empty, but its crowd moves in three waves. The first is the winter tourist season, November to February, when school holidays, weddings in Punjab and the pleasant weather bring the largest numbers; weekends and the Christmas to New Year week are the heaviest. The second is the festival calendar: Bandi Chhor Divas, which coincides with Diwali and falls on 8 November 2026, when the complex is lit with lamps and fireworks and the queue for the sanctum runs through the night; Guru Nanak Jayanti on 24 November 2026, Kartik Purnima, with nagar kirtan processions through the old city in the days before; and Baisakhi in mid-April. The third, smaller wave is Punjab’s own long weekends, which fill Wagah as much as the temple.',
        'The quiet months are May, June and the first half of September, for the simple reason that the plain is too hot or too humid for most visitors. If you can tolerate a dawn start and a late night, a June visit gives you the sanctum with a queue of minutes and a parikrama you share with pilgrims rather than tour groups. The langar runs at full strength in every month; the kitchen does not have an off-season.',
        'For the two November festivals the practical advice is about the cab, not the temple: the old city is closed to vehicles for the evening, hotels within walking distance sell out weeks ahead, and the drive from Delhi on the day before Diwali is the slowest of the year on NH-44. Book the car and the room together, and arrive a day early. The Gurpurab transport page and the Diwali packages guide cover the arrangements for both dates.',
      ],
      bullets: [
        'Peak crowds: weekends from November to February, Diwali and Bandi Chhor Divas (8 November 2026), Guru Nanak Jayanti (24 November 2026), Baisakhi (mid-April), Christmas to New Year.',
        'Quietest: May, June, early September, and any weekday in October.',
        'Shortest sanctum queue on any day: after nine at night, or before six in the morning.',
      ],
      link: { label: 'Gurpurab transport in Amritsar', href: '/guru-purab-amritsar-transport' },
    },
    {
      eyebrow: 'Wagah',
      heading: 'When is the Wagah ceremony, and does the season change it?',
      paras: [
        'The beating retreat at the Attari–Wagah border happens every evening of the year and always begins about an hour before sunset, which is why the clock time moves with the season: roughly a quarter past four in December and January, half past four in late autumn and early spring, and half past five once summer timings begin around April. The BSF fixes the exact time for each period, and the driver knows the current one. Seating is free and on a first-come basis, and the stands fill an hour or more before the start on winter weekends, so the sister page on places within 50 km of Amritsar is right to say be seated by half past three in winter.',
        'Season changes the experience more than the schedule. In winter the stands face a setting sun and then turn cold within minutes of it dropping; a warm layer matters. From April to June they are in full sun until the ceremony begins, and the sensible plan is to arrive as late as the seating allows, with water and a hat. In the monsoon a heavy shower can interrupt or shorten the ceremony, and while it is rarely cancelled outright, July and August are the months to treat it as a bonus. October and February are the two months when the stands are simply pleasant.',
        'From the Golden Temple the border is 30 km and about forty-five minutes west on the Attari road. It fits the 4 hour / 40 km local package, ₹2,200 for a sedan with kilometres beyond the forty at ₹11/km, and the car waits in the border parking and brings you back to the temple for the evening lamps. An Ertiga is ₹2,500 on the same package, an Innova Crysta ₹2,800.',
      ],
      link: { label: 'Golden Temple and Wagah in one day', href: '/sightseeing/amritsar-golden-temple-wagah-border-tour' },
      image: { src: `${IMG}/Amritsar/Wagah_Border.jpg`, alt: 'The Wagah border retreat ceremony with the stands full', tag: 'Wagah · 30 km', side: 'left', caption: 'The retreat ceremony begins about an hour before sunset in every season; the clock time is what moves.' },
    },
    {
      eyebrow: 'The drive',
      heading: 'What does the Delhi to Amritsar drive cost, and does the season change the fare?',
      paras: [
        'Delhi to Amritsar is about 450 km on NH-44, the Grand Trunk Road, through Panipat, Karnal, Ambala, Ludhiana and Jalandhar, and takes seven to eight hours with a breakfast halt at Murthal and a fuel stop beyond Ludhiana. It is six lanes almost the whole way and the fastest long drive out of Delhi. Chandigarh to Amritsar is 230 km and about four hours on the same highway.',
        'The fare does not change with the season. A sedan is ₹11/km, so the one-way drop is ₹4,950; an Ertiga at ₹15/km is ₹6,750, an Innova Crysta at ₹18/km is ₹8,100 and a 12-seater Tempo Traveller at ₹23/km is ₹10,350. A three-day round trip, which is the usual shape of an Amritsar visit with the driver staying for the Wagah run and the sightseeing, bills the greater of twice the one-way fare or three days at the 300 km minimum; for the 450 km drive the two come out the same, ₹9,900 for a sedan, ₹13,500 for an Ertiga, ₹16,200 for an Innova Crysta and ₹20,700 for the Tempo Traveller. From Chandigarh (230 km) the one-way sedan fare is ₹3,300, billed on the 300 km minimum. Tolls on NH-44 and parking are paid at actual; there is no festival or winter surcharge, though the fleet books out early for Diwali, Gurpurab and Baisakhi.',
        'What the season does change is the drive itself. In the fog window from mid-December to the end of January, visibility on the stretch between Karnal and Ludhiana can drop to a few car lengths before nine in the morning, and the honest advice is to leave Delhi at seven rather than four and accept a lunchtime arrival, or to travel after the fog burns off. In summer the drive is best done before the heat of the afternoon; the car is air-conditioned but the halts are not. The monsoon rarely troubles the highway.',
      ],
      link: { label: 'Delhi to Amritsar trip cost in full', href: '/amritsar-trip-cost-from-delhi' },
    },
    {
      eyebrow: 'The hills',
      heading: 'Is it worth adding the hills to an Amritsar trip, and in which season?',
      paras: [
        'Yes, in every season except the fog, and the season decides which hill. Dalhousie and Dharamshala are both about 200 km and four and a half hours from the Golden Temple, the first via Pathankot and Banikhet, the second on the Kangra road, and either bills the 300 km minimum, ₹3,300 one-way for a sedan. In winter the reason to go up is snow, which Dalhousie and Khajjiar usually have from late December to February. In summer the reason is the twenty degrees you lose between the sarovar and the Khajjiar meadow, which turns a June Amritsar visit from an ordeal into a night on the plain and two in the cool. In October the reason is the view: the monsoon has cleared the air and the Dhauladhar stands sharp above the Kangra valley.',
        'The shape that works is three or four days with the same car: Delhi to Amritsar on day one, the Golden Temple and Wagah on day two, up to Dalhousie or McLeodganj on day three and back to Amritsar or on to Delhi on day four. The hill-stations guide for Amritsar ranks every option by distance, and the Amritsar–Dharamshala–Dalhousie circuit page sets out the loop day by day.',
      ],
      link: { label: 'Amritsar, Dharamshala and Dalhousie circuit by car', href: '/road-trip/amritsar-dharamshala-dalhousie-circuit' },
      image: { src: `${IMG}/Khajjiar/Mini_Switzerland_View.jpg`, alt: 'The Khajjiar meadow and lake above Dalhousie', tag: 'Khajjiar · 220 km', caption: 'Khajjiar, twenty kilometres beyond Dalhousie: snow in January, twenty degrees cooler than Amritsar in June.' },
    },
  ],

  fare: {
    title: 'Delhi to Amritsar, any month',
    note: 'Rate-card fares for the 450 km drive on NH-44. The three-day figure is the usual Amritsar visit: drive up, a day for the Golden Temple, Wagah and the old city with the driver on hand, and the drive home.',
    caption: 'Delhi to Amritsar cab fare by vehicle, one-way and three-day round trip',
    distanceKm: 450,
    roundTrip: true,
    days: 3,
    roundLabel: 'Three-day round trip',
    footnote: 'Tolls and parking at actual. The same rate card applies in every season and on every festival; the fleet books out early for Diwali, Gurpurab and Baisakhi. From Chandigarh the sedan one-way fare is ₹3,300 for 230 km (300 km minimum).',
    waText: 'Hi, I want a Delhi to Amritsar cab, three-day round trip. Dates and number of people to follow.',
    bookHref: '/delhi-to-amritsar',
    bookLabel: 'Delhi to Amritsar cab page',
    cta: 'Get an Amritsar quote',
  },

  galleryTitle: 'Amritsar through the year',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Amritsar/Golden_Temple.jpg`, title: 'The Golden Temple', text: 'Barefoot-comfortable from November to March; dawn and night in summer.', tag: 'All year' },
    { image: `${IMG}/Amritsar/Wagah_Border.jpg`, title: 'Wagah retreat', text: 'About an hour before sunset, every evening of the year.', tag: '30 km' },
    { image: `${IMG}/Amritsar/Jallianwala_Bagh.jpg`, title: 'Jallianwala Bagh', text: 'A daylight hour, two minutes from the temple.', tag: 'Old city' },
    { image: `${IMG}/Amritsar/Partition_Museum.jpg`, title: 'Partition Museum', text: 'The indoor hours for a foggy morning or a June afternoon.', tag: 'Heritage Street' },
    { image: `${IMG}/Dalhousie/Khajjiar_Meadow.jpg`, title: 'Khajjiar, beyond Dalhousie', text: 'The summer escape and the winter snow, 220 km from the Golden Temple.', tag: 'Hills · 220 km' },
  ],

  tips: [
    { title: 'In the fog months, leave Delhi later', text: 'From mid-December to the end of January, a four o’clock start puts you into the worst of the fog between Karnal and Ludhiana. Leave at seven, breakfast at Murthal in daylight, and arrive for a late lunch instead.' },
    { title: 'Do the temple at night and Wagah at dusk', text: 'Reach Amritsar by early afternoon, drive straight to Wagah for the ceremony, and see the Golden Temple after eight when the lamps are lit and the queue is short. The order works in every season.' },
    { title: 'Book the November festivals as one', text: 'For Diwali on 8 November and Gurpurab on 24 November the old city closes to cars and the walking-distance hotels fill weeks ahead. Fix the room and the cab together, and arrive the day before.' },
  ],

  faqs: [
    { question: 'What is the best time to visit Amritsar?', answer: 'November to March, when daytime temperatures are between 15°C and 20°C and the Golden Temple’s marble parikrama is comfortable to walk barefoot. February is the best single month, after the December and January fog has lifted; October is the best quiet month, with clear skies and short queues before the November festival crowds.' },
    { question: 'Which months should I avoid in Amritsar?', answer: 'May and June, when temperatures reach 42°C to 45°C and the parikrama is too hot to stand on by mid-morning. July to September is humid monsoon weather, bearable if you keep to dawn and evening visits. If you must come in June, give Amritsar one night and spend the rest in Dalhousie or Dharamshala, 200 km away.' },
    { question: 'Is December a good time to visit the Golden Temple?', answer: 'Yes, with one caveat: fog. From the middle of December most mornings begin under dense fog that can hold until eleven, and the drive from Delhi slows on the Karnal to Ludhiana stretch. Plan the Golden Temple for evenings, use the fogged mornings for the Partition Museum, and leave Delhi after seven rather than before dawn.' },
    { question: 'What time is the Wagah border ceremony?', answer: 'About an hour before sunset every evening, so the clock time shifts with the season: around a quarter past four in December and January, half past four in late autumn and early spring, and about half past five from April to September. The BSF sets the exact time for each period. Arrive an hour or more before the start for a seat on winter weekends.' },
    { question: 'When are the big festivals at the Golden Temple in 2026?', answer: 'Baisakhi in mid-April; Diwali and Bandi Chhor Divas on 8 November 2026, when the complex is lit with lamps and fireworks; and Guru Nanak Jayanti on 24 November 2026, Kartik Purnima, with processions through the old city in the days before. All three bring the largest crowds of the year and need the cab and hotel booked early.' },
    { question: 'How far is Amritsar from Delhi by road and how long does it take?', answer: 'About 450 km on NH-44, the Grand Trunk Road, through Panipat, Karnal, Ambala, Ludhiana and Jalandhar. Seven to eight hours in normal conditions, an hour or two more in the fog season from mid-December to the end of January. Chandigarh to Amritsar is 230 km and about four hours.' },
    { question: 'How much does a cab from Delhi to Amritsar cost?', answer: 'At the published rate card a sedan is ₹4,950 one-way (450 km at ₹11/km), an Ertiga ₹6,750, an Innova Crysta ₹8,100 and a 12-seater Tempo Traveller ₹10,350. A three-day round trip with the driver staying on is ₹9,900 for the sedan. Tolls and parking are extra, and the fare is the same in every season with no festival surcharge.' },
    { question: 'How many days are enough for Amritsar?', answer: 'Two days: one for the Golden Temple at night and Wagah at dusk, one for the old city, Jallianwala Bagh, the Partition Museum and the food lanes. Add two nights for Dalhousie or Dharamshala, each 200 km and four and a half hours away, if you want the hills in the same trip.' },
  ],

  related: [
    { label: 'Amritsar cabs', sub: 'Local, outstation and airport', href: '/amritsar', img: `${IMG}/Amritsar/Amristar_hero_section.jpg` },
    { label: 'Delhi to Amritsar cab', sub: '450 km · ₹4,950 sedan', href: '/delhi-to-amritsar', img: `${IMG}/Amritsar/Golden_Temple.jpg` },
    { label: 'Amritsar trip cost from Delhi', sub: 'Fare, tolls, stay', href: '/amritsar-trip-cost-from-delhi', img: '/images/car/swift_dzire.jpg' },
    { label: 'Golden Temple and Wagah tour', sub: 'One day, car waits', href: '/sightseeing/amritsar-golden-temple-wagah-border-tour', img: `${IMG}/Amritsar/Wagah_Border.jpg` },
    { label: 'Amritsar in 2 days', sub: 'The itinerary that fits', href: '/amritsar-in-2-days-itinerary', img: `${IMG}/Amritsar/Jallianwala_Bagh.jpg` },
    { label: 'Amritsar food tour', sub: 'Kulcha to fish tikka', href: '/amritsar-food-tour', img: `${IMG}/Amritsar/Partition_Museum.jpg` },
    { label: 'Baisakhi cab, Amritsar', sub: 'Mid-April arrangements', href: '/baisakhi-amritsar-cab', img: `${IMG}/Amritsar/Golden_Temple.jpg` },
    { label: 'Amritsar airport taxi', sub: 'Airport to the Golden Temple', href: '/airport-service/amritsar', img: '/images/airport_section.jpg' },
  ],
  guides: ['hill-stations-near-amritsar', 'tourist-places-within-50-km-of-amritsar-and-haridwar', 'diwali-tour-packages-2026-from-delhi', 'best-time-to-visit-kasol', 'delhi-to-srinagar-by-road'],

  schema: {
    places: ['amritsar', 'delhi', 'chandigarh'],
    trip: {
      name: 'Delhi to Amritsar by road, three days, any season',
      description: 'The usual Amritsar visit by car: Delhi to Amritsar on NH-44, a day for the Golden Temple, Wagah and the old city with the driver on hand, and the drive home, with an optional hill extension to Dalhousie or Dharamshala.',
      touristType: 'Road travellers',
      lowPrice: 4950,
      highPrice: 20700,
      itinerary: [
        { name: 'Day 1: Delhi to Amritsar', text: '450 km on NH-44 via Panipat, Karnal, Ambala, Ludhiana and Jalandhar; Wagah ceremony at dusk and the Golden Temple after dark.' },
        { name: 'Day 2: The old city', text: 'Golden Temple before dawn, Jallianwala Bagh, the Partition Museum on Heritage Street, and the food lanes.' },
        { name: 'Day 3: Amritsar to Delhi', text: 'The drive home, or on to Dalhousie or Dharamshala, 200 km, for a hill extension.' },
      ],
    },
    events: [
      { id: 'bandi-chhor', name: 'Bandi Chhor Divas and Diwali 2026 at the Golden Temple', description: 'Bandi Chhor Divas, celebrated with Diwali on 8 November 2026, when the Golden Temple complex at Amritsar is lit with lamps and fireworks and draws its largest crowd of the year.', startDate: '2026-11-08', endDate: '2026-11-08', locationName: 'Sri Harmandir Sahib (Golden Temple), Amritsar', locality: 'Amritsar', region: 'Punjab', image: `${IMG}/Amritsar/Golden_Temple.jpg`, price: 4950, offerUrl: '/delhi-to-amritsar', validFrom: '2026-09-12', performer: 'Shiromani Gurdwara Parbandhak Committee' },
      { id: 'gurpurab', name: 'Guru Nanak Jayanti 2026 at the Golden Temple', description: 'Guru Nanak Jayanti, the birth anniversary of Guru Nanak, on Kartik Purnima, 24 November 2026, with nagar kirtan processions through the old city of Amritsar in the days before and kirtan at the Golden Temple through the night.', startDate: '2026-11-24', endDate: '2026-11-24', locationName: 'Sri Harmandir Sahib (Golden Temple), Amritsar', locality: 'Amritsar', region: 'Punjab', image: `${IMG}/Amritsar/Golden_Temple.jpg`, price: 4950, offerUrl: '/guru-purab-amritsar-transport', validFrom: '2026-09-12', performer: 'Shiromani Gurdwara Parbandhak Committee' },
    ],
    howTo: {
      name: 'How to choose when to visit Amritsar',
      description: 'Match the month to what you want from the Golden Temple, Wagah and the hills, then book the drive from Delhi on the rate card.',
      totalTime: 'PT10M',
      estimatedCost: { currency: 'INR', value: 4950 },
      steps: [
        { name: 'Pick the season', text: 'November to March for comfort, February for the best of it, October for clear skies and short queues, mid-April for Baisakhi, 8 and 24 November 2026 for Bandi Chhor Divas and Gurpurab. Avoid May and June unless you pair Amritsar with the hills.' },
        { name: 'Plan around the fog', text: 'From mid-December to the end of January, leave Delhi at seven rather than four, keep the mornings for the Partition Museum and the temple for the evenings.' },
        { name: 'Time Wagah by the sunset', text: 'The ceremony begins about an hour before sunset: around 4.15 pm in midwinter, 5.30 pm in summer. Be seated an hour before on winter weekends.' },
        { name: 'Book the drive', text: 'Delhi to Amritsar is 450 km, ₹4,950 one-way for a sedan and ₹9,900 for a three-day round trip. WhatsApp 7668570551 with dates and headcount; the fare is the same in every month.' },
      ],
    },
  },
};
