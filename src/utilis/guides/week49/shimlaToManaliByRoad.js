// Week 49 route guide — "shimla to manali distance" (47,102 impressions a
// quarter, position 9.7; the Shimla–Manali cluster is 47,762). The corridor
// has a cab page, a one-way page, a round-trip page, a distance page and a
// travel-by-car page; this is the road answer: the drop to the Sutlej at
// Bilaspur, the canal road through Sundernagar to Mandi, and the Beas valley
// road through the Pandoh gorge, Kullu and the orchards. The 250 km and the
// 7–8 hours are the distance page's, and the stops are its stops. There is no
// toll page, so tolls are at actual and no amount is given. Fares are computed
// from the rate card by the fare block, never typed here.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'shimla-to-manali-by-road',
  path: '/shimla-to-manali-by-road',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'shimla to manali distance', impressions: 47102, position: 9.7 },

  eyebrow: 'Road guide · Shimla to Manali',
  crumbs: [{ name: 'Manali', url: '/manali' }, { name: 'Shimla to Manali cab', url: '/shimla-to-manali' }],
  crumbName: 'Shimla to Manali by road',
  titleLead: 'Shimla to Manali by road:',
  titleAccent: '250 km, two roads joined at Mandi',
  title: 'Shimla to Manali by Road: 250 km, Two Roads Joined at Mandi',
  metaTitle: 'Shimla to Manali Distance by Road: 250 km, 7–8 Hrs',
  metaDescription: 'Shimla to Manali by road is 250 km and 7–8 hours on NH-3: down to the Sutlej at Bilaspur, up through Sundernagar to Mandi, then the Beas gorge, Kullu and the orchards. Halts, winter snow and fares.',
  keywords: ['shimla to manali distance', 'shimla to manali by road', 'shimla to manali route', 'shimla to manali by car', 'shimla to manali road trip', 'shimla to manali cab', 'shimla to manali via mandi', 'shimla to manali drive time'],
  heroImage: `${IMG}/Manali/Scenic%20250%20km%20mountain%20drive%20from%20Shimla%20to%20Manali.jpg`,
  heroAlt: 'The mountain road from Shimla to Manali, 250 km through the Sutlej and Beas valleys',

  lead: 'Shimla to Manali by road is 250 km and seven to eight hours on NH-3, a full day on the wheel, and it is really two roads joined at Mandi. The first drops from Shimla past Ghanahatti and Darlaghat to the Sutlej at Bilaspur and runs up the wide canal road through Sundernagar to Mandi. The second is the Beas valley road: through the Pandoh gorge and its tunnels to Aut, up past Bhuntar into the orchard country of the Kullu valley, and the last, prettiest hour through Patlikuhal to Manali. Manali is under the 300 km per day minimum that outstation cabs bill on, so the fare is the rate card on the minimum: a sedan at ₹11/km, an Ertiga or SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23, tolls and parking at actual.',
  keyFacts: [
    { label: 'Distance', value: '250 km · NH-3' },
    { label: 'Drive time', value: '7–8 hrs' },
    { label: 'Lunch halt', value: 'Mandi, km 160' },
    { label: 'Sedan rate', value: '₹11/km · 300 km min' },
  ],
  stickyLabel: 'Shimla–Manali cab',
  stickyPrice: 'From ₹11/km',
  waText: 'Hi, I want a cab from Shimla to Manali by road. Date and number of passengers to follow.',

  intro: [
    'People search for the Shimla to Manali distance expecting a short hop between two hill stations and find a full day instead, and the day is the honest answer. The two towns are 250 km apart by road and the road never stops bending: it has to drop from Shimla’s ridge to the Sutlej, climb back through Mandi to the Beas, and then follow that river up its gorge and its valley to the top of the Kullu country. Seven to eight hours is what the distance page says and what our drivers reckon on, and it wants daylight all the way.',
    'Every number on this page is the one the rest of the site uses. The 250 km and the seven to eight hours are from our distance page for the corridor, with Bilaspur, Sundernagar, Mandi and Kullu as its stops; the halts are the ones our drivers make; and the fares in the box lower down are computed from the published rate card: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum with tolls and parking at actual. There is no toll page for this corridor, so tolls are settled on the car’s FASTag and appear on the bill at actual.',
  ],

  timelineTitle: 'Shimla to Manali, kilometre by kilometre',
  timelineEyebrow: 'NH-3 via Bilaspur, Mandi and Kullu',
  timelineIntro: 'Kilometre marks are from Shimla and rounded to the nearest post; the billing distance is 250 km. The clock assumes a six o’clock start with breakfast at Bilaspur and lunch at Mandi, which is how the drive comes in at about eight hours on a dry day with the road open.',
  timeline: [
    { km: 0, name: 'Shimla', time: '6 am', text: 'Leave early, because the whole of this drive wants daylight and the last hour is the one you want to see. From the Ridge and the Mall the road out is the one that drops west past Ghanahatti; from December the shaded bends here ice over in the morning, and the driver takes them gently.', tag: 'Start', image: `${IMG}/Shimla/the%20ridge%20shimla.jpg`, alt: 'The Ridge at Shimla before the day begins' },
    { km: 50, name: 'Darlaghat', time: '7.15 am', text: 'The cement trucks slow everybody down on this stretch, and there is nothing to do but follow them. The road is still falling with the land, and the Sutlej valley opens out ahead.' },
    { km: 90, name: 'Bilaspur', time: '8.30 am', text: 'The bottom of the first road, on the Sutlej, and the breakfast halt. Twenty minutes; from here the run is the easiest driving of the day, so there is no need to linger.', stop: 'Breakfast' },
    { km: 130, name: 'Sundernagar', time: '9.45 am', text: 'Wide and straight along the canal, the one stretch of the day where the driver can relax. Most drivers keep their lunch for Mandi and go straight through.' },
    { km: 160, name: 'Mandi', time: '10.30 am', text: 'The old town on the Beas, where the two roads join, and the lunch halt for nearly everyone. Forty minutes; after Mandi the character of the drive changes completely, and the next proper stop is Kullu.', stop: 'Lunch', tag: 'The second road begins' },
    { km: 175, name: 'Pandoh', time: '11.40 am', text: 'The road squeezes into the Beas gorge past the Pandoh dam. In July and August this gorge, from Mandi to Aut, is where the slides come down, so we check before starting in those months.', image: `${IMG}/Manali/Pandoh%20Dam.jpg`, alt: 'The Pandoh dam in the Beas gorge below Mandi' },
    { km: 195, name: 'Aut', time: '12.15 pm', text: 'The gorge road threads a series of tunnels and comes out at Aut. Lights on, no overtaking, and the river is below the road until the valley opens.', tag: 'The tunnels' },
    { km: 215, name: 'Kullu', time: '1 pm', text: 'From Bhuntar, by the airport, to Kullu the valley opens into orchard country, and the Beas runs wide beside the road. The distance page calls this the place to stop for the orchards and the river; ten minutes at the roadside is enough.', image: `${IMG}/Manali/Kullu%20Valley.jpg`, alt: 'The Kullu valley orchards along the Beas' },
    { km: 250, name: 'Manali', time: '2 pm', text: 'The last hour through Patlikuhal is the prettiest of the day and the most crowded on weekends. The car drops you at the hotel; the Mall, Old Manali, Hidimba and the hot springs at Vashisht are short local runs from there.', tag: 'Arrive', image: `${IMG}/Manali/Manali_hero_section.jpg`, alt: 'Manali at the head of the Kullu valley' },
  ],

  table: {
    title: 'Shimla to Manali by road: the drive by segment',
    caption: 'Segment distances, driving times and road conditions between Shimla and Manali on NH-3 via Bilaspur, Sundernagar, Mandi and Kullu',
    intro: 'Distances are one-way and add up to the 250 km we bill on. Read the first three rows as the Sutlej road and the last three as the Beas road; Mandi is the join and the lunch halt. Times are for a dry day with the road fully open. Tolls are paid on the car’s FASTag at actual; there is no toll page for this corridor and we do not quote a figure.',
    columns: [
      { key: 'segment', label: 'Segment' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road' },
      { key: 'note', label: 'What to expect', strong: true },
    ],
    rows: [
      { segment: 'Shimla to Bilaspur', distance: '90 km', time: '2.5 hrs', road: 'Hill road, descending', note: 'Ghanahatti, Darlaghat and the cement trucks; icy shaded bends in winter; breakfast at Bilaspur' },
      { segment: 'Bilaspur to Sundernagar', distance: '40 km', time: '1 hr', road: 'Wide canal road', note: 'The easiest driving of the day' },
      { segment: 'Sundernagar to Mandi', distance: '30 km', time: '45 min', road: 'Valley highway', note: 'Lunch at Mandi, where the two roads join' },
      { segment: 'Mandi to Aut', distance: '35 km', time: '1.25 hrs', road: 'Beas gorge, dam and tunnels', note: 'Pandoh; the monsoon slide zone; no overtaking in the tunnels' },
      { segment: 'Aut to Kullu', distance: '20 km', time: '45 min', road: 'Valley road', note: 'Bhuntar and the airport, then the valley opens into orchards' },
      { segment: 'Kullu to Manali', distance: '35 km', time: '1 hr', road: 'Valley road through orchards', note: 'Patlikuhal; the prettiest hour, and the slowest on a weekend' },
    ],
    footnote: 'The 250 km is the distance our Shimla to Manali distance page publishes and bills on. In July and August the Mandi to Aut gorge is where the slides come down; from December the bends near Shimla ice over in the morning and Manali gets its snow, and winter roads may have snow blockages.',
  },

  sections: [
    {
      eyebrow: 'The first road',
      heading: 'What is the Shimla to Manali route, and why does it drop before it climbs?',
      paras: [
        'The route is NH-3 via Mandi, and the geography explains the day. Shimla sits on a ridge above the Sutlej; Manali sits at the head of the Beas. The two rivers run in different valleys with a range between them, and the road has to get from one to the other by way of the only easy crossing, which is at Mandi. So the first half of the drive drops out of Shimla past Ghanahatti and Darlaghat, following the fall of the land all the way down to the Sutlej at Bilaspur, and only then begins the long climb back up through Sundernagar to Mandi. Our distance page puts the whole run at 250 km and seven to eight hours, with Bilaspur, Sundernagar, Mandi and Kullu as the stops.',
        'The first road is the less dramatic of the two and the more tedious. The descent past Darlaghat is shared with the cement trucks that serve the plants there, and they set the pace; there is nothing to do but follow and wait for the passing places. Bilaspur, on the reservoir at the bottom, is where the breakfast halt falls naturally, and it is worth taking, because the run beyond it through Sundernagar is the easiest driving of the day, wide and straight along the canal, and most drivers keep their lunch for Mandi.',
        'By Mandi you have done 160 km and about four and a half hours, and the honest thing to say is that the drive has not yet begun to be beautiful. That changes at once after the town, which is why the lunch halt is here and why the second half of the day is the one people remember.',
      ],
      link: { label: 'Shimla to Manali distance and route page', href: '/distance/shimla-to-manali' },
      image: { src: `${IMG}/Shimla/shimla_hero_section.jpg`, alt: 'Shimla on its ridge above the Sutlej valley', tag: 'Shimla · km 0', caption: 'Shimla is on a ridge above the Sutlej; the road has to go down to the river before it can climb to the Beas.' },
    },
    {
      eyebrow: 'The second road',
      heading: 'What happens after Mandi: the Pandoh gorge, the tunnels and the Kullu valley?',
      paras: [
        'After Mandi the character changes completely. The road leaves the town and squeezes into the Beas gorge past the Pandoh dam, with the river below and the rock above, and then threads a series of tunnels that took the worst of the old gorge alignment out of the day. It comes out at Aut, and from there to Bhuntar the valley is still narrow; then, from Bhuntar by the airport up to Kullu, it opens into orchard country, the Beas runs wide beside the road, and the drive becomes the one the distance page calls one of India’s most scenic.',
        'Two things to know about the gorge. The tunnels are no place to overtake, and the driver takes them at the speed of the truck in front. And in July and August the section from Mandi to Aut is where the slides come down; the road closes, sometimes for hours, and we check before starting in those months. The rest of the year it is simply slow, and the slowness is part of the pleasure.',
        'The last hour, from Kullu through Patlikuhal to Manali, is the prettiest of the day and the most crowded on weekends, when the Manali traffic from the plains has caught up with you. The road runs through the orchards with the snow line above, and then Manali itself, where the car drops you at the hotel. The Mall, Old Manali, the Hidimba temple and the hot springs at Vashisht are short local runs from there, and the same driver does them on the second day.',
      ],
      link: { label: 'Shimla to Manali by car, leg by leg', href: '/travel-by-car/shimla-to-manali' },
      image: { src: `${IMG}/Manali/Pandoh%20Dam.jpg`, alt: 'The Pandoh dam and the Beas gorge below Mandi', tag: 'Pandoh · km 175', side: 'left', caption: 'The gorge from Mandi to Aut: the dam, the tunnels, and in the monsoon the slides.' },
    },
    {
      eyebrow: 'Halts and timing',
      heading: 'Where should I stop between Shimla and Manali, and what time should I leave?',
      paras: [
        'Two halts, and they choose themselves. Breakfast at Bilaspur, at the bottom of the first road, about two and a half hours out; lunch at Mandi, at the join, another two hours on. Between them the canal road through Sundernagar has nothing worth stopping for, and after Mandi the next proper town is Kullu, which is too late for lunch and too early for anything else. Ten minutes at the roadside in the Kullu valley for the orchards and the river, and then straight through to Manali.',
        'Six in the morning is the start we ask for, and the arithmetic is the reason: seven to eight hours of driving with two halts puts a six o’clock departure in Manali by two, with the afternoon in hand. A nine o’clock start reaches the gorge in the early afternoon and Manali at dusk, and on a weekend in season it reaches the last hour through Patlikuhal in the thick of the Manali traffic. Either way the drive wants daylight all the way; there is nothing on this road that is better in the dark.',
        'For the way back the same two halts serve in reverse, and the same early start applies, because the shaded bends near Shimla are the ones that ice in winter and are best taken in the middle of the day. If you want to break the drive, Mandi is the town to do it in: it halves the day, it sits at the join of the two roads, and the second morning through the gorge and the valley is the best half of the trip.',
      ],
      link: { label: 'Shimla to Manali cab', href: '/shimla-to-manali' },
      image: { src: `${IMG}/Manali/Kullu%20Valley.jpg`, alt: 'The Kullu valley, the orchard country between Bhuntar and Manali', tag: 'Kullu · km 215', caption: 'Ten minutes at the roadside in the Kullu valley: the orchards, the river and the snow line above.' },
    },
    {
      eyebrow: 'Season',
      heading: 'When is the best time to drive from Shimla to Manali, and what about winter?',
      paras: [
        'March to June and September to November, on the distance page and in our drivers’ experience. Spring and early summer are the season both towns are known for, and the drive is at its greenest; the price is the weekend traffic in the Kullu valley, which is heaviest in May and June. September to November is quieter and, for the road, the best of the year: the monsoon has cleared, the orchards are in fruit, and the gorge is dry.',
        'July and August are the monsoon, and the Mandi to Aut gorge is where the slides come down. The road is not closed for the season, but it closes after rain, sometimes for hours and occasionally for longer, and we check before starting on any day in those months. If the gorge is shut we say so rather than drive to a barrier; a night at Mandi is the usual answer, and the drive resumes when the road does.',
        'Winter is a different question. From December the shaded bends near Shimla ice over in the morning and Manali gets its snow, and the distance page is right to say that winter roads may have snow blockages. The drive is made all winter, with a later start to let the ice go off the Shimla bends and a driver who knows where the shade lies, but a fresh fall at the Manali end can hold things up, and it is worth holding a spare day. The reward is Manali under snow, which is the reason most winter visitors make the trip.',
      ],
      link: { label: 'Best time to visit Manali, month by month', href: '/best-time-to-visit/manali' },
      image: { src: `${IMG}/Manali/Hidimba%20Temple.jpg`, alt: 'The Hidimba temple at Manali among the deodars', tag: 'Hidimba · all seasons', side: 'left', caption: 'Manali in every season; the road is the thing that changes, not the town.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab from Shimla to Manali cost?',
      paras: [
        'Manali is 250 km, and outstation cabs bill a 300 km per day minimum, so the one-way fare is the minimum at the vehicle’s rate: a sedan at ₹11/km, an Ertiga or similar SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23. Fuel and the driver are inside those figures; highway tolls, parking and any Himachal charges are extra at actual, settled on the car’s tag and shown on the bill. The fare box below does the arithmetic for each vehicle.',
        'Most people want the car for longer than the drive, and the round trip is priced as the greater of twice the one-way fare or the number of days at the 300 km minimum. A three-day trip, across on day one, Manali and its local runs on day two, back on day three, is the pattern that suits this corridor, and the fare box shows it; a fourth day bills at the 300 km minimum for the vehicle, and the driver’s night-halt allowance is extra at actual. A one-way drop is the right booking if Manali is the end of a longer Himachal circuit and you are flying or driving on from there.',
        'On the choice of car, the travel-by-car page recommends an SUV or an Innova, and for a full day of bends that is good advice: the extra torque tells on the climb from Bilaspur and the ground clearance in the gorge, and an Innova Crysta with six aboard works out cheaper per head than two sedans. For two or three people with light luggage a sedan is perfectly good in season; it is the road that is slow, not the car.',
      ],
      link: { label: 'Shimla to Manali one-way cab', href: '/one-way-cab/shimla-to-manali' },
      image: { src: `${IMG}/Manali/Old%20Manali.jpg`, alt: 'Old Manali, a short local run from the hotel', tag: 'Old Manali · day 2', caption: 'The second day of a round trip: Old Manali, Hidimba and Vashisht with the same driver.' },
    },
  ],

  fare: {
    title: 'Shimla to Manali by road',
    note: 'Rate-card fares for the 250 km drive, which bills the 300 km minimum. The three-day figure is the usual trip: across on day one, Manali and its local runs on day two, back on day three.',
    caption: 'Shimla to Manali cab fare by vehicle, one-way and three-day round trip',
    distanceKm: 250,
    roundTrip: true,
    days: 3,
    roundLabel: 'Three-day round trip',
    footnote: 'Highway tolls, parking, any Himachal charges and the driver’s night-halt allowance at actual; fuel is included. No weekend surcharge. A fourth day adds 300 km at the vehicle’s rate.',
    waText: 'Hi, I want a Shimla to Manali cab. Please share the fare for my dates and vehicle.',
    bookHref: '/round-trip/shimla-to-manali',
    bookLabel: 'Shimla to Manali round trip',
    cta: 'Book the Manali cab',
  },

  galleryTitle: 'What the 250 km buys you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Manali/Manali_hero_section.jpg`, title: 'Manali', text: 'At the head of the valley, with the snow line above.', tag: 'km 250' },
    { image: `${IMG}/Manali/Kullu%20Valley.jpg`, title: 'The Kullu valley', text: 'Orchard country from Bhuntar to Patlikuhal.', tag: 'km 215' },
    { image: `${IMG}/Manali/Hidimba%20Temple.jpg`, title: 'Hidimba temple', text: 'Among the deodars, a short run from the hotel.', tag: 'Day 2' },
    { image: `${IMG}/Manali/Old%20Manali.jpg`, title: 'Old Manali', text: 'Across the river from the Mall, for the evening.', tag: 'Evening' },
    { image: `${IMG}/Shimla/jakhoo_temple.jpg`, title: 'Jakhoo, Shimla', text: 'The hill above the Ridge, before the six o’clock start.', tag: 'km 0' },
  ],

  tips: [
    { title: 'Leave Shimla at six', text: 'Seven to eight hours with two halts puts you in Manali by two. The whole drive wants daylight, and the last hour through Patlikuhal is the one you want to see.' },
    { title: 'Breakfast at Bilaspur, lunch at Mandi', text: 'The two halts choose themselves: the bottom of the first road and the join of the two. Between them there is nothing worth stopping for, and after Mandi the next town is Kullu.' },
    { title: 'Check the gorge in the monsoon', text: 'In July and August the Mandi to Aut section is where the slides come down. We check before starting; if it is shut, Mandi is the place to wait.' },
    { title: 'Ice near Shimla, snow at Manali', text: 'From December the shaded bends near Shimla ice over in the morning and Manali gets its snow. A later start lets the ice go, and a spare day covers a fresh fall.' },
    { title: 'Expect the weekend crowd in the last hour', text: 'The Manali traffic from the plains catches up with you in the Kullu valley on a Saturday. The early start is the way to be through Patlikuhal before it does.' },
  ],

  faqs: [
    { question: 'What is the distance from Shimla to Manali?', answer: '250 km by road on NH-3 via Bilaspur, Sundernagar, Mandi and Kullu. Our distance page publishes the corridor at 250 km and seven to eight hours, and the drive is planned as two roads joined at Mandi: the Sutlej road down from Shimla and the Beas road up to Manali.' },
    { question: 'How long does it take to drive from Shimla to Manali?', answer: 'Seven to eight hours on a dry day with the road open, and about eight with breakfast at Bilaspur and lunch at Mandi. A six o’clock start from Shimla has you in Manali by two in the afternoon; a later start reaches the last hour through the Kullu valley in the weekend traffic or at dusk.' },
    { question: 'Which route is best from Shimla to Manali by road?', answer: 'NH-3 via Mandi: down past Ghanahatti and Darlaghat to the Sutlej at Bilaspur, up through Sundernagar to Mandi, then the Beas gorge past Pandoh and the tunnels to Aut, and up the Kullu valley through Bhuntar, Kullu and Patlikuhal to Manali. It is the only road that crosses from the Sutlej valley to the Beas at Mandi, and every Shimla to Manali drive uses it.' },
    { question: 'Where should I stop between Shimla and Manali?', answer: 'Breakfast at Bilaspur, about two and a half hours out at the bottom of the first road, and lunch at Mandi, where the two roads join. The Kullu valley between Bhuntar and Manali is worth ten minutes at the roadside for the orchards and the river. If you want to break the drive into two days, Mandi is the town to do it in.' },
    { question: 'What is the cab fare from Shimla to Manali?', answer: 'Manali is 250 km and outstation cabs bill a 300 km per day minimum, so one-way is the minimum at the vehicle’s rate: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, with tolls and parking extra at actual. A three-day round trip is the greater of twice the one-way fare or three days at the minimum. The fare box on this page shows the figure for each vehicle.' },
    { question: 'How much is the toll from Shimla to Manali?', answer: 'We do not publish a toll figure for this corridor. The plazas on the route are paid on the car’s FASTag at actual and appear on the bill as they are charged. Tolls are extra to the fare on every route.' },
    { question: 'Is the Shimla to Manali road open in winter?', answer: 'Usually, with care. From December the shaded bends near Shimla ice over in the morning and Manali gets its snow, and the distance page notes that winter roads may have snow blockages. We start later to let the ice go, the driver knows where the shade lies, and it is worth holding a spare day for a fresh fall at the Manali end. The reward is Manali under snow.' },
    { question: 'What is the road like in the monsoon between Shimla and Manali?', answer: 'The gorge from Mandi to Aut, past the Pandoh dam and the tunnels, is where the slides come down in July and August. The road closes after rain, sometimes for hours, and we check before starting on any day in those months. The rest of the route is wet but open; the best months for the drive are March to June and September to November.' },
  ],

  related: [
    { label: 'Shimla to Manali cab', sub: '250 km · sedan from ₹11/km', href: '/shimla-to-manali', img: `${IMG}/Manali/Manali_hero_section.jpg` },
    { label: 'Shimla to Manali distance', sub: '250 km · road notes and stops', href: '/distance/shimla-to-manali', img: `${IMG}/Manali/Scenic%20250%20km%20mountain%20drive%20from%20Shimla%20to%20Manali.jpg` },
    { label: 'Shimla to Manali by car, leg by leg', sub: 'The segments, the halts and the season', href: '/travel-by-car/shimla-to-manali', img: `${IMG}/Manali/Pandoh%20Dam.jpg` },
    { label: 'Manali travel guide', sub: 'Old Manali, Hidimba, Solang and Vashisht', href: '/manali-travel-guide', img: `${IMG}/Manali/Old%20Manali.jpg` },
    { label: 'Seven-day Himachal tour by car', sub: 'Shimla and Manali in one circuit', href: '/7-day-himachal-tour-by-car', img: `${IMG}/Shimla/Mall_Road.jpg` },
  ],
  guides: ['chandigarh-to-kasol-by-road', 'kullu-dussehra-2026-by-car', 'how-to-reach-kaza-from-delhi', 'dalhousie-dharamshala-circuit-by-car', 'best-time-to-visit-kasol'],

  schema: {
    places: ['shimla', 'manali'],
    trip: {
      name: 'Shimla to Manali by road on NH-3 via Mandi',
      description: 'The 250 km drive from Shimla to Manali: down to the Sutlej at Bilaspur, through Sundernagar to Mandi, then the Beas gorge, Kullu and the orchards to Manali, in seven to eight hours.',
      touristType: 'Road travellers',
      itinerary: [
        { name: 'Shimla to Bilaspur', text: '90 km down past Ghanahatti and Darlaghat to the Sutlej; breakfast at Bilaspur.' },
        { name: 'Bilaspur to Mandi', text: '70 km on the wide canal road through Sundernagar to the town where the two roads join; lunch at Mandi.' },
        { name: 'Mandi to Kullu', text: '55 km through the Beas gorge past the Pandoh dam and the tunnels to Aut, then Bhuntar and the opening of the valley.' },
        { name: 'Kullu to Manali', text: '35 km through the orchards and Patlikuhal to Manali, the prettiest hour of the day.' },
      ],
    },
    howTo: {
      name: 'How to drive from Shimla to Manali',
      description: 'Leave at six, drop to Bilaspur for breakfast, lunch at Mandi, then take the Beas gorge and the Kullu valley to Manali in daylight.',
      totalTime: 'PT8H',
      steps: [
        { name: 'Leave Shimla at six', text: 'Down past Ghanahatti and Darlaghat, gently on the shaded bends in winter.' },
        { name: 'Breakfast at Bilaspur', text: 'The bottom of the first road, on the Sutlej; the canal road through Sundernagar follows.' },
        { name: 'Lunch at Mandi', text: 'The join of the two roads; after Mandi the character of the drive changes.' },
        { name: 'Through the gorge and up the valley', text: 'Pandoh, the tunnels and Aut, then Bhuntar, Kullu and Patlikuhal to Manali by two.' },
      ],
    },
  },
};
