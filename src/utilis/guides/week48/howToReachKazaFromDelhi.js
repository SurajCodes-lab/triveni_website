// Week 48 guide 22 — "how to reach kaza from delhi" (187 impressions a
// quarter, position 6.1). The site already sells the drive on
// /how-to-reach/spiti-valley-from-delhi and /distance/delhi-to-kaza; this is
// the guide that answers the question those pages get asked most, which side
// to go up, and settles the fare for a road on which a sedan is not recommended.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'how-to-reach-kaza-from-delhi',
  path: '/how-to-reach-kaza-from-delhi',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'how to reach kaza from delhi', impressions: 187, position: 6.1 },

  eyebrow: 'Road guide · Delhi to Spiti',
  crumbs: [{ name: 'How to reach', url: '/how-to-reach' }, { name: 'Spiti Valley from Delhi', url: '/how-to-reach/spiti-valley-from-delhi' }],
  crumbName: 'How to reach Kaza from Delhi',
  titleLead: 'How to reach Kaza from Delhi:',
  titleAccent: 'Shimla side or Manali side',
  title: 'How to Reach Kaza from Delhi: Shimla Side or Manali Side',
  metaTitle: 'How to Reach Kaza from Delhi: Shimla Side or Manali Side',
  metaDescription: 'How to reach Kaza from Delhi: the Shimla side via Kinnaur (730 km, two days, open most of the year) or the Manali side over Kunzum La (open June to October). Halts, altitude, vehicle and fares.',
  keywords: ['how to reach kaza from delhi', 'delhi to kaza by road', 'delhi to kaza distance', 'shimla to kaza road', 'manali to kaza kunzum pass', 'delhi to spiti valley by car', 'kaza cab from delhi'],
  heroImage: `${IMG}/Spiti_Valley/Spiti_Valley_hero_section.jpg`,
  heroAlt: 'The Spiti river and its bare brown valley walls on the road into Kaza',

  lead: 'Delhi to Kaza is 730 km by the Shimla side, on NH-5 through Chandigarh, Shimla, Narkanda, Rampur, Reckong Peo, Nako and Tabo, and it takes 18 to 20 hours of driving spread over two days with a night at Kalpa or Nako. The Manali side is about the same length, 530 km to Manali and another 200 km over Kunzum La at 4,551 m, but it climbs to Kaza’s 3,800 m far more steeply and is only open from June to mid-October. Go up the Shimla side, come back over Kunzum when it is open, and give the loop six to eight days. An Innova Crysta is ₹13,140 for the two-day drive at ₹18/km; a sedan is ₹8,030 at ₹11/km but is not recommended beyond Reckong Peo.',
  keyFacts: [
    { label: 'Delhi to Kaza', value: '730 km · 2 days' },
    { label: 'Kaza altitude', value: 'about 3,800 m' },
    { label: 'Kunzum La', value: '4,551 m · Jun–mid-Oct' },
    { label: 'Innova Crysta, one-way', value: '₹13,140' },
  ],
  stickyLabel: 'Kaza cab',
  stickyPrice: 'Innova ₹13,140',
  waText: 'Hi, I want a cab from Delhi to Kaza (Spiti). Please share the fare for an Innova or Tempo Traveller and my dates.',

  intro: [
    'Kaza is the administrative town of Spiti, a high cold desert on the far side of the Himalaya, and there are exactly two roads into it from the plains. One comes up from Shimla along the Sutlej through Kinnaur and enters Spiti at Sumdo; the other comes over the mountains from Manali through the Atal Tunnel and the Kunzum La. Both are among the harder drives in North India, and the question people actually type, how to reach Kaza from Delhi, is really a question about which of the two to take and in which direction.',
    'This guide answers that with the site’s own route data and the published rate card. The distances are from the Delhi to Kaza distance page: 730 km by the Shimla side, 18 to 20 hours of driving, two days recommended. The fares are Ertiga or SUV at ₹15/km, Innova Crysta at ₹18/km and 12-seater Tempo Traveller at ₹23/km, with a 300 km per day minimum and tolls extra. A sedan is ₹11/km, or ₹8,030 one-way, but it is not recommended because the road beyond Reckong Peo needs ground clearance a Dzire does not have.',
  ],

  timelineTitle: 'Delhi to Kaza by the Shimla side, kilometre by kilometre',
  timelineEyebrow: 'The road, in order',
  timelineIntro: 'NH-5, the old Hindustan–Tibet road, the whole way from Chandigarh. The kilometre marks are from Delhi; the times assume a four o’clock start on day one and a night at Kalpa above Reckong Peo.',
  timeline: [
    { km: 0, name: 'Delhi', time: 'Day 1 · 4 am', text: 'Leave before the city wakes. NH-44 out through Murthal, Panipat and Karnal is the flattest, fastest road of the trip, and the only stretch where the driver can make up time, so it is worth being on it before six.', tag: 'Start', image: `${IMG}/Delhi/India_Gate.jpg`, alt: 'India Gate, Delhi, at the start of the drive to Kaza' },
    { km: 250, name: 'Chandigarh', time: '8.30 am', text: 'Breakfast on the Zirakpur bypass and the turn on to NH-5. From here the road is a hill road, first through Pinjore and Kalka, then the long climb from Parwanoo. If you are flying or taking the Shatabdi in, this is where the car meets you and the drive to Kaza becomes about 480 km.', stop: 'Breakfast', image: `${IMG}/Chandigarh/sukhana_lake.jpg`, alt: 'Sukhna Lake, Chandigarh, where the plains end and NH-5 begins its climb' },
    { km: 350, name: 'Shimla', time: '11.30 am', text: 'The bypass keeps you clear of the town. Shimla sits at about 2,200 m, and from here the Hindustan–Tibet road runs east along the ridge through Kufri, Fagu and Theog. The first traffic of the hill season is on this stretch, so do not plan on lunch in Shimla itself.', tag: '2,200 m', image: `${IMG}/Shimla/the%20ridge%20shimla.jpg`, alt: 'The Ridge at Shimla, which the Kaza road bypasses on its way east' },
    { km: 415, name: 'Narkanda', time: '1.30 pm', text: 'The high point of the first day at about 2,700 m, with apple orchards on both sides and the Hatu peak above. Lunch here, because the road now drops nearly two thousand metres to the Sutlej, and the halts on the way down are thin.', stop: 'Lunch' },
    { km: 480, name: 'Rampur', time: '3.30 pm', text: 'Down in the river valley at about 1,000 m, warm even in October. Rampur is the last proper town before Kinnaur and the last place to buy anything you forgot. The road from here follows the Sutlej upstream through Jeori, Jhakri and the Wangtu gorge, where it is cut into the rock face.', tag: 'The Sutlej' },
    { km: 560, name: 'Reckong Peo', time: '6.30 pm', text: 'The district town of Kinnaur, with Kalpa seven kilometres above it at about 2,960 m facing the Kinner Kailash range. Sleep at Kalpa: the extra altitude is exactly what your body needs before Nako, and the view at dawn is the reward for a long first day. Fill the tank at Peo before you leave.', stop: 'Night halt at Kalpa', tag: 'Night 1' },
    { km: 640, name: 'Nako', time: 'Day 2 · 11 am', text: 'From Peo the road passes Spillow and Pooh, meets the Spiti river where it joins the Sutlej at Khab, and climbs a long set of hairpins to Nako at about 3,600 m. Nako has a small lake and a village of mud-walled houses, and it is the alternative night halt if you would rather sleep higher and shorten day two.', tag: '3,600 m' },
    { km: 690, name: 'Tabo', time: '1.30 pm', text: 'Sumdo, where Kinnaur ends and Spiti begins, is the check post; Indian nationals show identification, foreign nationals show the Inner Line Permit. Tabo, twenty-five kilometres on, has the thousand-year-old monastery whose mud walls hold some of the oldest Buddhist paintings in India. Stop for an hour.', stop: 'Tabo Monastery', image: `${IMG}/Spiti_Valley/Tabo%20Monastery.jpg`, alt: 'The mud-walled Tabo Monastery in the Spiti valley' },
    { km: 730, name: 'Kaza', time: '3.30 pm', text: 'The valley opens out and the town sits on the far bank of the Spiti at about 3,800 m. Arriving in the mid-afternoon of day two, having slept at Kalpa or Nako, is the whole point of the Shimla side: you have gained the altitude over thirty-six hours rather than twelve.', tag: 'Arrive · 3,800 m', image: `${IMG}/Spiti_Valley/Kaza%20Town_Capital%20of%20Spiti%20Valley.jpg`, alt: 'Kaza town on the bank of the Spiti river, the end of the drive from Delhi' },
  ],

  table: {
    title: 'Shimla side or Manali side: the two roads to Kaza compared',
    caption: 'Comparison of the Shimla and Kinnaur road and the Manali and Kunzum La road from Delhi to Kaza: distance, days, open months, altitude, road surface and vehicle',
    intro: 'Both roads end in the same town and cover about the same distance. Everything else about them is different, and the differences are what decide the direction of the trip.',
    columns: [
      { key: 'item', label: 'Item' },
      { key: 'shimla', label: 'Shimla side (NH-5, Kinnaur)' },
      { key: 'manali', label: 'Manali side (Atal Tunnel, Kunzum La)' },
    ],
    rows: [
      { item: 'Distance from Delhi', shimla: '730 km', manali: 'About 730 km: 530 to Manali, 200 to Kaza' },
      { item: 'Days to Kaza', shimla: '2, with a night at Kalpa or Nako', manali: '2, with a night at Manali; 3 if you add an acclimatisation night' },
      { item: 'Open', shimla: 'May to October; open in principle through winter but regularly cut by snow', manali: 'June to mid-October only, while Kunzum La is open' },
      { item: 'Highest point on the way', shimla: 'Nako, about 3,600 m; Kaza itself at about 3,800 m', manali: 'Kunzum La, 4,551 m, on the second day' },
      { item: 'Altitude gain', shimla: 'Gradual, spread over two days with a night at 2,960 m or 3,600 m', manali: 'Steep: Manali at about 2,050 m to Kunzum La at 4,551 m in one day' },
      { item: 'The road', shimla: 'Four-lane to Shimla, then a hill road cut into the Sutlej gorge; unpaved patches after Nako', manali: 'Good to the Atal Tunnel; unpaved from Gramphu with stream crossings at Chhatru and Batal' },
      { item: 'Permit', shimla: 'None for Indian nationals; foreign nationals need an Inner Line Permit for the Sumdo side', manali: 'None' },
      { item: 'Vehicle', shimla: 'Innova Crysta or high-clearance SUV; sedan not recommended', manali: 'Innova Crysta or high-clearance SUV; sedan not recommended' },
    ],
    footnote: 'Distances and open months are from the site’s Delhi to Kaza route data. Altitudes are approximate and rounded. The Kunzum La opening and closing dates vary with the snow each year; check before committing to the Manali side.',
  },

  sections: [
    {
      eyebrow: 'The decision',
      heading: 'Which is better, the Shimla side or the Manali side, to reach Kaza from Delhi?',
      paras: [
        'Go up the Shimla side. The reason is not the road surface, which is rough in places on both, or the distance, which is nearly identical. It is altitude. Kaza sits at about 3,800 m, and the way your body copes with that depends on how quickly you arrive there. On the Shimla side you sleep at Kalpa at about 2,960 m or at Nako at about 3,600 m after a full day of driving, and only then go on to Kaza. The gain is spread across two days and thirty-six hours, which is roughly what the standard advice on acclimatisation asks for.',
        'On the Manali side you sleep at Manali at about 2,050 m and the next morning drive through the Atal Tunnel, up the Chandra valley and over Kunzum La at 4,551 m before dropping to Losar and Kaza. That is a gain of two and a half thousand metres in a single day, with the highest point of the whole trip in the middle of it, and it is the classic way to arrive in Kaza with a headache that costs you the next day. The Delhi to Kaza distance page says the same thing in one line: going straight through is the main cause of altitude sickness on this route.',
        'The Manali side is not to be avoided, though. It is the more spectacular road and it is the natural way home, because coming down over Kunzum from Kaza you are descending, not ascending, and the altitude no longer matters. The best plan for Kaza from Delhi is therefore a loop: up the Sutlej through Kinnaur, three or four days in Spiti, and back over Kunzum La and through Manali when the pass is open. That is what the seven-day Spiti circuit on this site is built around.',
      ],
      link: { label: 'Delhi to Spiti Valley circuit, 7 days', href: '/sightseeing/delhi-to-spiti-valley-circuit-7-days' },
      image: { src: `${IMG}/Spiti_Valley/Kaza%20Town_Capital%20of%20Spiti%20Valley.jpg`, alt: 'Kaza, the administrative town of Spiti, on the bank of the Spiti river', tag: 'Kaza · about 3,800 m', caption: 'Kaza from across the river. Arriving here on the afternoon of day two, after a night in Kinnaur, is the point of the Shimla side.' },
    },
    {
      eyebrow: 'Day by day',
      heading: 'How should I split the two days on the Shimla side?',
      paras: [
        'The two-day version is a long first day and a short second one. Leave Delhi at four, breakfast at Chandigarh, bypass Shimla before noon, lunch at Narkanda, drop to the Sutlej at Rampur and follow the river to Reckong Peo by early evening, then climb the seven kilometres to Kalpa to sleep. That is 560 km and thirteen to fourteen hours with halts, most of it on a hill road, and it is why the site recommends the trip as two days and not one. Day two is 170 km and six hours, Peo to Nako, Nako to Tabo, Tabo to Kaza, with time for the monastery at Tabo and a mid-afternoon arrival.',
        'If thirteen hours in the car on day one sounds like too much, and for families it usually is, there is a three-day version that costs one more night and nothing else in fare terms, because the 300 km per day minimum is already exceeded by the 730 km driven. Sleep at Shimla or Narkanda on night one, at Kalpa on night two, and reach Kaza on the afternoon of day three. The altitude is gained even more gently, and Sarahan, with its Bhimakali temple, and Sangla and Chitkul in the Baspa valley become possible detours from the Rampur to Peo stretch.',
        'Whichever version you choose, the halt at Kalpa rather than in Reckong Peo itself matters. Peo is the market town; Kalpa is the old village above it, facing the Kinner Kailash range across the valley, and the seven kilometres between them are the difference between a bus-stand hotel and a night that feels like part of the trip. Nako is the alternative for those who want to sleep higher and make day two shorter still, at the cost of a longer day one.',
      ],
      bullets: [
        'Two days: Delhi to Kalpa (560 km, 13–14 hours with halts), Kalpa to Kaza (170 km, 6 hours).',
        'Three days: Delhi to Shimla or Narkanda, on to Kalpa via Sarahan, Kalpa to Kaza; same fare, one more hotel night.',
        'Detours from the Rampur to Peo stretch: Sarahan (Bhimakali temple), Sangla and Chitkul in the Baspa valley.',
      ],
      link: { label: 'Delhi to Chitkul one-way cab', href: '/one-way-cab/delhi-to-chitkul' },
      image: { src: `${IMG}/Kufri/Mahasu_Peak.jpg`, alt: 'Mahasu Peak above Kufri, on the Hindustan–Tibet road between Shimla and Narkanda', tag: 'Kufri · NH-5', side: 'left', caption: 'The Hindustan–Tibet road runs east from Shimla along the ridge through Kufri to Narkanda before it drops to the Sutlej.' },
    },
    {
      eyebrow: 'The other road',
      heading: 'What is the Manali side like, and when is Kunzum La open?',
      paras: [
        'From Manali the road climbs past Solang to the south portal of the Atal Tunnel, nine kilometres under the Rohtang ridge, and comes out in Lahaul at Sissu. A short run down the Chandra valley brings you to Gramphu, where the Kaza road leaves the Leh highway and the tarmac ends. From Gramphu to Batal, about fifty kilometres, the road is a rough unpaved track along the Chandra river with glacier-fed streams crossing it at Chhatru and again near Batal. The streams are ankle-deep in the morning and knee-deep by mid-afternoon when the melt comes down, which is why every driver who knows the road leaves Manali at first light.',
        'Batal is the last tea house before the climb to Kunzum La at 4,551 m, marked by a cluster of temple chortens and prayer flags where drivers stop to circle the shrine. From the top the road drops to Losar, the first village of Spiti at about 4,080 m, and from Losar it is a tarred road of about fifty-seven kilometres down the valley to Kaza. The whole Manali to Kaza stretch is about 200 km and takes eight to ten hours, nearly all of it on the unpaved section.',
        'Kunzum La is open roughly from June to mid-October. The pass is snowed in through the winter and the road is cleared each year once the snow allows, so early June is not guaranteed and the closing date depends on the first heavy snowfall. The Atal Tunnel has changed the first part of the day, because Rohtang Pass no longer has to be crossed to reach Lahaul, but it has not changed Kunzum, which is where the season is decided. If you are planning the loop in September or early October, the return over Kunzum is the part to confirm before you leave Delhi.',
      ],
      link: { label: 'How to reach Rohtang Pass from Manali', href: '/how-to-reach/rohtang-pass-from-manali' },
      image: { src: `${IMG}/Spiti_Valley/Kunzum%20Pass.jpg`, alt: 'The chortens and prayer flags at the top of Kunzum La, 4,551 m, on the Manali side road to Kaza', tag: 'Kunzum La · 4,551 m', caption: 'Kunzum La. Open from about June to mid-October, and the right way to leave Spiti rather than to enter it.' },
    },
    {
      eyebrow: 'Altitude',
      heading: 'How do I avoid altitude sickness on the way to Kaza?',
      paras: [
        'By arriving slowly, which is the whole argument for the Shimla side. Kaza is at about 3,800 m, higher than Leh, and the villages people visit from it, Langza, Komic, Hikkim and Kibber, are higher still, some above 4,400 m. Altitude sickness is about the rate of ascent more than the height itself, so the pattern that works is to sleep one night at a middling altitude, Kalpa at about 2,960 m or Nako at about 3,600 m, before reaching Kaza, and then to spend the first day in Kaza doing little: Key Monastery and the town, not Langza and Komic.',
        'The practical rules are the usual ones. Drink more water than you think you need from Rampur onwards, avoid alcohol on the first night in Kaza, eat light, and do not push through a headache. If someone in the car has a persistent headache, nausea or breathlessness at rest, the treatment is to go down, and on the Shimla side going down is easy: Tabo is 500 m lower than Kaza and Nako is on the road behind you. On the Manali side the only way down from Losar is back over the 4,551 m pass, which is the other reason not to arrive that way.',
        'Speak to your own doctor before the trip about whether a preventive medicine is sensible for you; that is a medical decision and not one a cab company should make. What the cab company can do is build the itinerary so that the medicine is rarely needed, which means two days up, a night in Kinnaur and a quiet first day in Kaza.',
      ],
      link: { label: 'Best time to visit Spiti Valley', href: '/best-time-to-visit/spiti-valley' },
      image: { src: `${IMG}/Spiti_Valley/langza.jpeg`, alt: 'The Buddha statue at Langza village above Kaza, at about 4,400 m', tag: 'Langza · about 4,400 m', side: 'left', caption: 'Langza, above Kaza. Leave the high villages for the second day in Spiti, once the body has caught up with the altitude.' },
    },
    {
      eyebrow: 'The loop and the cost',
      heading: 'How many days does the Kaza loop take, and what does the cab cost from Delhi?',
      paras: [
        'The loop is six to eight days. Two days up the Shimla side to Kaza, three or four days in Spiti for Key, Kibber, Langza, Komic, Hikkim, Pin Valley and, if it is open, Chandratal from the Batal side, then one long day over Kunzum to Manali and one more day from Manali to Delhi. Six days is tight and leaves one full day in Spiti; eight days is comfortable and allows a night at Chandratal or a second night in the Pin Valley. The seven-day itinerary on this site is the version most groups settle on.',
        'The fares follow the published rate card and nothing else. For the two-day one-way drive, 730 km bills at the per-kilometre rate because it already exceeds the 300 km per day minimum: an Ertiga or SUV is ₹10,950 at ₹15/km, an Innova Crysta is ₹13,140 at ₹18/km and a 12-seater Tempo Traveller is ₹16,790 at ₹23/km. For the loop the daily minimum takes over, because seven days at 300 km is 2,100 km and the loop drives about 1,460: a seven-day loop is ₹31,500 for the Ertiga, ₹37,800 for the Innova Crysta and ₹48,300 for the Tempo Traveller, and each further day adds 300 km at the vehicle’s rate, ₹5,400 for the Innova. Tolls, the Atal Tunnel toll, parking and the driver’s night halts are paid at actual.',
        'A sedan is not recommended on this route. At ₹11/km a Dzire is ₹8,030 one-way, and it will reach Shimla and Rampur without complaint, but the road beyond Reckong Peo has stretches where the surface is loose rock and the drainage channels are deep, and on the Manali side the stream crossings at Chhatru and Batal need the clearance of an Innova Crysta or a proper SUV. The Innova Crysta is the standard vehicle for Spiti on this site for that reason; the Tempo Traveller goes for groups of eight to twelve and takes the unpaved sections more slowly.',
      ],
      bullets: [
        'One-way, two days, 730 km: Ertiga or SUV ₹10,950; Innova Crysta ₹13,140; Tempo Traveller (12-seater) ₹16,790.',
        'Seven-day loop via Manali (2,100 km billed at the daily minimum): Ertiga ₹31,500; Innova Crysta ₹37,800; Tempo Traveller ₹48,300.',
        'Up and back the Shimla side over five days: Innova Crysta ₹27,000, because five days at 300 km outbills the 1,460 km driven.',
      ],
      link: { label: 'Delhi to Spiti by car', href: '/travel-by-car/delhi-to-spiti' },
      image: { src: '/images/car/innova_crysta.jpg', alt: 'Toyota Innova Crysta, the standard vehicle for the Delhi to Kaza drive', tag: 'Innova Crysta · ₹18/km', caption: 'The Innova Crysta: enough clearance for the road beyond Reckong Peo and the stream crossings on the Manali side.' },
    },
  ],

  fare: {
    title: 'Delhi to Kaza by the Shimla side',
    note: 'Rate-card fares for the 730 km, two-day drive to Kaza. The loop column is the seven-day circuit that returns over Kunzum La and Manali, billed at the 300 km per day minimum because seven days of minimum outbill the 1,460 km actually driven. A sedan is priced but not recommended beyond Reckong Peo.',
    caption: 'Delhi to Kaza cab fare by vehicle: one-way over two days, and the seven-day loop via Manali',
    oneWayLabel: 'One-way, 2 days',
    roundLabel: '7-day loop via Manali',
    rows: [
      { vehicle: 'Sedan (Swift Dzire, Etios) · not recommended', seats: '4', rate: '₹11/km', fare: '₹8,030', roundTrip: '₹23,100' },
      { vehicle: 'Ertiga / SUV', seats: '6', rate: '₹15/km', fare: '₹10,950', roundTrip: '₹31,500' },
      { vehicle: 'Innova Crysta', seats: '6–7', rate: '₹18/km', fare: '₹13,140', roundTrip: '₹37,800' },
      { vehicle: 'Tempo Traveller (12-seater)', seats: '12', rate: '₹23/km', fare: '₹16,790', roundTrip: '₹48,300' },
    ],
    footnote: 'One-way = 730 km × rate. Loop = 7 days × 300 km × rate, which is more than 1,460 km × rate. Each further day adds 300 km at the vehicle’s rate. Tolls, the Atal Tunnel toll, parking and the driver’s night halts at actual.',
    waText: 'Hi, I want a Delhi to Kaza cab by the Shimla side, two days up, with the option of returning via Manali. Dates and number of people to follow.',
    bookHref: '/how-to-reach/spiti-valley-from-delhi',
    bookLabel: 'Spiti Valley from Delhi: every mode',
    cta: 'Get the Kaza fare',
  },

  galleryTitle: 'Two roads, one valley',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Spiti_Valley/Kaza%20Town_Capital%20of%20Spiti%20Valley.jpg`, title: 'Kaza', text: 'The town at about 3,800 m, where both roads end.', tag: 'Spiti · 730 km' },
    { image: `${IMG}/Spiti_Valley/Tabo%20Monastery.jpg`, title: 'Tabo Monastery', text: 'Forty kilometres before Kaza on the Shimla side; a thousand years old.', tag: 'Shimla side · km 690' },
    { image: `${IMG}/Spiti_Valley/Kunzum%20Pass.jpg`, title: 'Kunzum La', text: '4,551 m. The Manali side is open only while this is.', tag: 'Manali side · Jun–mid-Oct' },
    { image: `${IMG}/Spiti_Valley/langza.jpeg`, title: 'Langza', text: 'Above Kaza at about 4,400 m; the second day in Spiti, not the first.', tag: 'Spiti · day 3' },
    { image: `${IMG}/Manali/Solang%20Valley.jpg`, title: 'Solang Valley', text: 'The last valley out of Manali before the road reaches the Atal Tunnel.', tag: 'Manali side · the way home' },
  ],

  tips: [
    { title: 'Fill the tank at Reckong Peo', text: 'On the Shimla side the pump at Peo is the one to use before Spiti; the next reliable one is at Kaza itself. On the Manali side there is no fuel between Manali and Kaza, so the car leaves Manali full.' },
    { title: 'Cross the Chhatru and Batal streams before noon', text: 'The glacier-fed streams across the Gramphu to Batal road rise through the afternoon as the melt comes down. Leave Manali at first light and you cross them at their lowest; leave at nine and you may be waiting behind a stuck vehicle at Chhatru.' },
    { title: 'Keep a day spare', text: 'The Kinnaur road is cut by rockfall after rain and Kunzum can close for a day after early snow. Build one spare day into the loop and treat it as a bonus day in Spiti if you do not need it.' },
  ],

  faqs: [
    { question: 'How far is Kaza from Delhi by road and how long does it take?', answer: 'Kaza is 730 km from Delhi by the Shimla side, on NH-5 through Chandigarh, Shimla, Narkanda, Rampur, Reckong Peo, Nako and Tabo. It is 18 to 20 hours of driving, so the trip is done over two days with a night at Kalpa above Reckong Peo or at Nako. The Manali side is about 730 km, 530 to Manali and 200 over Kunzum La to Kaza, also over two days.' },
    { question: 'Which is the better route to Kaza, via Shimla or via Manali?', answer: 'Go up via Shimla and come back via Manali. The Shimla side gains altitude gradually over two days with a night in Kinnaur, which is what prevents altitude sickness at Kaza’s 3,800 m. The Manali side crosses Kunzum La at 4,551 m in a single day from Manali at about 2,050 m, which is a steep gain going up but no problem coming down.' },
    { question: 'When is the Manali to Kaza road over Kunzum La open?', answer: 'Roughly from June to mid-October. Kunzum La is snowed in through the winter and cleared each year once the snow allows, so early June is not guaranteed and the closing date depends on the first heavy snowfall. The Shimla side is open from May to October and stays open in principle through the winter, though snow regularly cuts it.' },
    { question: 'Where should I stay overnight on the way to Kaza to avoid altitude sickness?', answer: 'At Kalpa, seven kilometres above Reckong Peo at about 2,960 m, or at Nako at about 3,600 m. Either breaks the 730 km drive into two days and lets your body adjust before Kaza at about 3,800 m. On the first day in Kaza, stay low: Key Monastery and the town, and leave Langza, Komic and Hikkim for the second day.' },
    { question: 'Can I go to Kaza from Delhi in a sedan?', answer: 'It is priced, ₹8,030 one-way at ₹11/km, but not recommended. The road beyond Reckong Peo has unpaved patches with loose rock and deep drainage channels, and the Manali side has stream crossings at Chhatru and Batal, all of which need the ground clearance of an Innova Crysta or a proper SUV. The Innova Crysta is the standard vehicle for Spiti; a 12-seater Tempo Traveller goes for groups.' },
    { question: 'What is the cab fare from Delhi to Kaza?', answer: 'For the two-day one-way drive of 730 km, an Ertiga or SUV is ₹10,950 at ₹15/km, an Innova Crysta is ₹13,140 at ₹18/km and a 12-seater Tempo Traveller is ₹16,790 at ₹23/km. A seven-day loop returning via Manali bills the 300 km per day minimum: ₹31,500, ₹37,800 and ₹48,300 respectively. Tolls, parking and the driver’s night halts are extra at actual.' },
    { question: 'Do I need a permit to visit Kaza and Spiti?', answer: 'Indian nationals need no permit on either side; carry photo identification for the Sumdo check post on the Shimla side. Foreign nationals need an Inner Line Permit for the Kinnaur stretch up to Sumdo on the Shimla side, issued at Reckong Peo or Shimla; the Manali side needs none.' },
    { question: 'Is there a bus or a flight to Kaza?', answer: 'There is an HRTC ordinary bus from Shimla to Kaza that takes the same Kinnaur road over two days, and the nearest airport is Bhuntar near Kullu, from which a cab reaches Kaza over Kunzum La in season only. Most people from Delhi go by car because it is the only mode that lets you break the journey where the altitude needs it.' },
  ],

  related: [
    { label: 'Spiti Valley from Delhi', sub: 'Every mode compared', href: '/how-to-reach/spiti-valley-from-delhi', img: `${IMG}/Spiti_Valley/Spiti_Valley_hero_section.jpg` },
    { label: 'Delhi to Kaza distance', sub: '730 km · NH-5 via Kinnaur', href: '/distance/delhi-to-kaza', img: `${IMG}/Spiti_Valley/Kaza%20Town_Capital%20of%20Spiti%20Valley.jpg` },
    { label: 'Spiti Valley road trip from Delhi', sub: 'The full road-trip plan', href: '/spiti-valley-road-trip-from-delhi', img: `${IMG}/Spiti_Valley/Kunzum%20Pass.jpg` },
    { label: 'Spiti in 7 days', sub: 'Day-by-day itinerary', href: '/spiti-in-7-days-itinerary', img: `${IMG}/Spiti_Valley/langza.jpeg` },
    { label: 'Delhi to Spiti circuit, 7 days', sub: 'Up via Shimla, back via Manali', href: '/sightseeing/delhi-to-spiti-valley-circuit-7-days', img: `${IMG}/Spiti_Valley/Pin%20Valley%20National%20Park.jpg` },
    { label: 'Delhi to Kinnaur one-way cab', sub: 'Kalpa, Sangla, Chitkul', href: '/one-way-cab/delhi-to-kinnaur', img: '/images/car/innova_crysta.jpg' },
    { label: 'Delhi to Manali cab', sub: '530 km · the way home', href: '/one-way-cab/delhi-to-manali', img: `${IMG}/Manali/Manali_hero_section.jpg` },
    { label: 'Delhi to Shimla cab', sub: '350 km · the way up', href: '/delhi-to-shimla', img: `${IMG}/Shimla/shimla_hero_section.jpg` },
  ],
  guides: ['delhi-to-srinagar-by-road', 'delhi-to-rishikesh-shortest-route', 'delhi-to-varanasi-best-route-by-car', 'dalhousie-dharamshala-circuit-by-car', 'best-time-to-visit-kasol'],

  schema: {
    places: ['delhi', 'shimla', 'manali'],
    trip: {
      name: 'Delhi to Kaza by road via Shimla and Kinnaur',
      description: 'Two-day drive from Delhi to Kaza on NH-5 through Chandigarh, Shimla, Narkanda, Rampur, Reckong Peo, Nako and Tabo, with a night at Kalpa for altitude, and the option of returning over Kunzum La via Manali.',
      touristType: 'Road travellers',
      lowPrice: 8030,
      highPrice: 48300,
      itinerary: [
        { name: 'Day 1: Delhi to Kalpa', text: '560 km on NH-44 and NH-5 via Chandigarh, Shimla, Narkanda and Rampur to Reckong Peo; night at Kalpa, about 2,960 m.' },
        { name: 'Day 2: Kalpa to Kaza', text: '170 km via Nako, the Sumdo check post and Tabo Monastery to Kaza, about 3,800 m, by mid-afternoon.' },
      ],
    },
    howTo: {
      name: 'How to reach Kaza from Delhi by road',
      description: 'Drive up the Shimla and Kinnaur side over two days with a night at Kalpa, and return over Kunzum La via Manali when the pass is open.',
      totalTime: 'P2D',
      estimatedCost: { currency: 'INR', value: 13140 },
      steps: [
        { name: 'Book an Innova Crysta or SUV', text: 'A sedan is not recommended beyond Reckong Peo. The Innova Crysta is ₹13,140 for the two-day one-way drive at ₹18/km.' },
        { name: 'Day one: Delhi to Kalpa', text: 'Leave at four, breakfast at Chandigarh, bypass Shimla, lunch at Narkanda, follow the Sutlej from Rampur to Reckong Peo, and sleep at Kalpa above it.' },
        { name: 'Day two: Kalpa to Kaza', text: 'Fill the tank at Peo, climb to Nako, pass the Sumdo check post, stop at Tabo Monastery and reach Kaza by mid-afternoon.' },
        { name: 'Return via Manali if Kunzum La is open', text: 'From June to mid-October, come down over Kunzum La through Batal, Chhatru and the Atal Tunnel to Manali, and on to Delhi the next day.' },
      ],
    },
  },
};
