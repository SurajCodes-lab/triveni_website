// Week 53 circuit 5 — "The Char Dham circuit by car: twelve days, four shrines"
//
// WHY THIS PAGE EXISTS
// The site has /chardham-yatra pages and 51 pages in the Char Dham and
// pilgrimage family, but none of them answers the logistics question a family
// planning this trip actually has: the ORDER of the four shrines, which of them
// require a walk and how long, when the roads open, and what twelve days of car
// costs.
//
// This is also the circuit where getting it wrong matters most. Two of the four
// shrines are not reachable by road at all — Yamunotri is a 6 km walk and
// Kedarnath a 16 km one — and the traditional west-to-east order is not an
// arbitrary custom but the sequence the roads actually support.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'char-dham-circuit-by-car',
  path: '/char-dham-circuit-by-car',
  mood: 'pilgrimage',
  cluster: 'road',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Circuit guide · Char Dham',
  crumbs: [{ name: 'Char Dham yatra', url: '/chardham-yatra' }],
  crumbName: 'Char Dham circuit by car',
  titleLead: 'The Char Dham circuit by car:',
  titleAccent: 'twelve days, four shrines, two walks',
  title: 'The Char Dham Circuit by Car: Twelve Days, Four Shrines',
  metaTitle: 'Char Dham by Car: 12 Days, 4 Shrines, ₹39,600',
  metaDescription: 'The twelve-day Char Dham circuit by car from Haridwar: Yamunotri, Gangotri, Kedarnath and Badrinath in the traditional order. Which shrines need a walk and how far, when the roads open, and the fare.',
  keywords: ['char dham circuit by car', 'char dham yatra by road', 'char dham 12 day itinerary', 'yamunotri gangotri kedarnath badrinath route', 'char dham yatra from haridwar by car', 'char dham road trip order', 'char dham trek distances'],
  heroImage: `${IMG}/Char_Dham/Chardham_hero_section.jpg`,
  heroAlt: 'The Char Dham shrines in the Garhwal Himalaya',

  lead: 'The Char Dham is four shrines in the Garhwal Himalaya, and two of them cannot be driven to. Yamunotri is a 6 km walk from Jankichatti; Kedarnath is 16 km from Gaurikund, which is a full day up and a full day down. The traditional west-to-east order — Yamunotri, Gangotri, Kedarnath, Badrinath — is also the order the roads support, and twelve days is the shortest honest circuit that does all four without rushing the walks. About 1,600 km of driving from Haridwar and back. A sedan bills ₹39,600 for the twelve days on the 300 km per day minimum; an Innova Crysta ₹64,800.',

  keyFacts: [
    { label: 'The circuit', value: '12 days · ~1,600 km' },
    { label: 'Shrines reachable by road', value: '2 of 4' },
    { label: 'The long walk', value: 'Kedarnath, 16 km each way' },
    { label: 'Sedan, 12 days', value: '₹39,600' },
  ],
  stickyLabel: 'Char Dham circuit cab',
  stickyPrice: 'Sedan ₹39,600 · 12 days',
  waText: 'Hi, I want the twelve-day Char Dham circuit by car from Haridwar. Dates and headcount to follow.',

  intro: [
    'Two things decide a Char Dham trip and neither is distance. The first is that the shrines open and close with the season — roughly late April or early May on Akshaya Tritiya, and closing around Diwali in late October or November. Outside that window the roads carry snow and the temples are shut; the deities are moved to their winter seats at Kharsali, Mukhba, Ukhimath and Joshimath.',
    'The second is the walking. Gangotri and Badrinath have road right up to the temple. Yamunotri is a 6 km climb from Jankichatti, which most people manage in two to three hours with ponies and palanquins available. Kedarnath is 16 km from Gaurikund with a 1,500 metre gain, which is a full day in each direction, and the helicopter from Phata or Sersi is what a great many families use instead.',
    'The circuit below is the traditional order and the one our drivers run. Fares follow the published rate card — sedan ₹11/km, Ertiga or SUV ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km — on a 300 km per day minimum, with tolls, parking, Uttarakhand entry and the driver night allowance at actual.',
  ],

  timelineTitle: 'The circuit, day by day',
  timelineEyebrow: 'The yatra',
  timelineIntro: 'West to east, as the roads and the tradition both run. Kilometre marks are cumulative from Haridwar.',
  timeline: [
    { km: 0, name: 'Day 1: Haridwar to Barkot', time: '7 hrs · 180 km', text: 'Up through Dehradun and Mussoorie, then down into the Yamuna valley to Barkot. Four hours of it is hill road for 180 km, which sets the tone for the whole circuit. Barkot is the staging town for Yamunotri.', stop: 'Night: Barkot', image: `${IMG}/Char_Dham/Yamunotri_Temple.jpg`, alt: 'The Yamunotri temple above Jankichatti', tag: 'Yamuna valley' },
    { km: 180, name: 'Day 2: Yamunotri', time: 'Walk day · 90 km driving', text: 'Drive 45 km to Jankichatti, then the 6 km climb to the temple — two to three hours up, less down, with ponies and palanquins available at the trailhead. The hot springs at Janki Chatti and the temple itself fill the middle of the day. Back to Barkot for the night.', stop: 'Night: Barkot', image: `${IMG}/Char_Dham/Yamunotri_Temple.jpg`, alt: 'The 6 km trail up to Yamunotri', tag: '6 km walk' },
    { km: 270, name: 'Day 3: Barkot to Uttarkashi', time: '4-5 hrs · 100 km', text: 'East over the ridge to the Bhagirathi valley and Uttarkashi, which is the staging town for Gangotri and a place worth an afternoon in its own right — the Vishwanath temple and the Nehru Institute of Mountaineering are both here.', stop: 'Night: Uttarkashi', image: `${IMG}/Char_Dham/Gangotri_Temple.jpg`, alt: 'The Bhagirathi valley above Uttarkashi', tag: 'Bhagirathi valley' },
    { km: 370, name: 'Day 4: Gangotri and back', time: '3 hrs each way · 200 km', text: 'The one shrine with road right to the temple. A hundred kilometres up the Bhagirathi through Harsil and Dharali, three hours each way on a narrow valley road. Gangotri itself is at 3,100 metres and the Bhagirathi here is startlingly loud. Back to Uttarkashi.', stop: 'Night: Uttarkashi', image: `${IMG}/Char_Dham/Gangotri_Temple.jpg`, alt: 'The Gangotri temple on the Bhagirathi', tag: 'Road to the temple' },
    { km: 570, name: 'Day 5: Uttarkashi to Guptkashi', time: '8-9 hrs · 220 km', text: 'The longest driving day of the circuit, down the Bhagirathi to Tehri, across to Srinagar and Rudraprayag, then up the Mandakini to Guptkashi. Leave at six. Guptkashi is the staging town for Kedarnath and where the helicopter bookings are confirmed.', stop: 'Night: Guptkashi', image: `${IMG}/Char_Dham/Kedarnath_Temple.jpg`, alt: 'The Mandakini valley below Kedarnath', tag: 'Longest leg' },
    { km: 790, name: 'Day 6: Kedarnath, the ascent', time: 'Walk day · 30 km driving', text: 'Drive 30 km to Gaurikund, then 16 km on foot with a 1,500 metre gain — six to eight hours for most people, with ponies and porters at the trailhead. Those taking the helicopter fly from Phata or Sersi and are at the temple within the hour. Night at Kedarnath.', stop: 'Night: Kedarnath', image: `${IMG}/Char_Dham/Kedarnath_Temple.jpg`, alt: 'The Kedarnath temple below the Kedarnath peak', tag: '16 km walk' },
    { km: 820, name: 'Day 7: Kedarnath, the descent', time: 'Walk day', text: 'The morning aarti, then the 16 km back down to Gaurikund — four to six hours, and harder on the knees than the climb was on the lungs. The car waits at Gaurikund. Night at Guptkashi or Sonprayag.', stop: 'Night: Guptkashi', image: `${IMG}/Char_Dham/Kedarnath_Temple.jpg`, alt: 'The trail down from Kedarnath to Gaurikund', tag: 'Descent' },
    { km: 850, name: 'Day 8: Guptkashi to Badrinath', time: '8-9 hrs · 215 km', text: 'Down the Mandakini to Rudraprayag, then up the Alaknanda through Karnaprayag, Chamoli and Joshimath on the Badrinath road. The last stretch above Joshimath is slow and spectacular. Badrinath is at 3,300 metres.', stop: 'Night: Badrinath', image: `${IMG}/Char_Dham/Badrinath_Temple.jpg`, alt: 'The Badrinath temple below Neelkanth', tag: 'Alaknanda' },
    { km: 1065, name: 'Day 9: Badrinath and Mana', time: 'Local day · 10 km', text: 'The temple at dawn, the Tapt Kund hot spring below it, and Mana village 3 km on — the last village before the Tibet border, with the Vyas and Bhim Pul caves. Neelkanth stands directly above all of it.', stop: 'Night: Badrinath', image: `${IMG}/Char_Dham/Badrinath_Temple.jpg`, alt: 'Mana village above Badrinath', tag: 'Local' },
    { km: 1075, name: 'Day 10: Badrinath to Rudraprayag via Joshimath', time: '6 hrs · 165 km', text: 'Back down the Alaknanda. Joshimath and the Narsingh temple on the way, where the Badrinath deity winters, and Vishnuprayag and Nandprayag confluences. Those with a spare day add Auli from Joshimath, 15 km and a ropeway above it.', stop: 'Night: Rudraprayag', image: `${IMG}/Char_Dham/Badrinath_Temple.jpg`, alt: 'The Alaknanda gorge below Joshimath', tag: 'Descent' },
    { km: 1240, name: 'Day 11: Rudraprayag to Rishikesh', time: '4 hrs · 140 km', text: 'Down to Devprayag, where the Bhagirathi and Alaknanda meet and become the Ganga in visibly different colours, then on to Rishikesh. An easy day after ten hard ones, and the confluence is the right place to finish a yatra.', stop: 'Night: Rishikesh', image: `${IMG}/Rishikesh/Ram_Jhula.jpg`, alt: 'Ram Jhula over the Ganga at Rishikesh', tag: 'Devprayag' },
    { km: 1380, name: 'Day 12: Rishikesh to Haridwar', time: '1 hr · 25 km', text: 'Har ki Pauri and the Ganga aarti to close, 25 km down the road. Those continuing to Delhi add 230 km and five hours from Haridwar.', stop: 'Haridwar', image: `${IMG}/Haridwar/Har_Ki_Pauri.jpg`, alt: 'Har ki Pauri at Haridwar', tag: 'End' },
  ],

  table: {
    title: 'The four shrines: road, walk, altitude and season',
    caption: 'What each Char Dham shrine requires — road access, trek distance, altitude and the opening window',
    intro: 'This is the table to read before planning anything else. Two of the four shrines cannot be reached by vehicle, and the walk at Kedarnath is a different order of effort from the one at Yamunotri.',
    columns: [
      { key: 'shrine', label: 'Shrine' },
      { key: 'road', label: 'Road reaches' },
      { key: 'walk', label: 'Walk', align: 'right' },
      { key: 'alt', label: 'Altitude' },
      { key: 'open', label: 'Open' },
      { key: 'note', label: 'What to know' },
    ],
    rows: [
      { shrine: 'Yamunotri', road: 'Jankichatti', walk: '6 km', alt: '3,293 m', open: 'May–Oct', note: 'Two to three hours up; ponies and palanquins at the trailhead' },
      { shrine: 'Gangotri', road: 'The temple', walk: 'None', alt: '3,100 m', open: 'May–Oct', note: 'The only shrine with road right to the door' },
      { shrine: 'Kedarnath', road: 'Gaurikund', walk: '16 km', alt: '3,583 m', open: 'May–Oct', note: 'Six to eight hours up, 1,500 m gain; helicopter from Phata or Sersi' },
      { shrine: 'Badrinath', road: 'The temple', walk: 'None', alt: '3,300 m', open: 'May–Oct', note: 'Mana village and the Tibet border 3 km beyond' },
    ],
    footnote: 'Opening dates are set each year — around Akshaya Tritiya in late April or early May for Yamunotri and Gangotri, with Kedarnath and Badrinath a few days later, and closing around Diwali. Fares for the twelve days: Sedan ₹39,600, Ertiga ₹54,000, Innova Crysta ₹64,800, 12-seater Tempo Traveller ₹82,800. Tolls, parking, Uttarakhand entry and the driver night allowance at actual.',
  },

  sections: [
    {
      eyebrow: 'The order',
      heading: 'Why west to east, and why it is not just tradition',
      paras: [
        'The traditional order is Yamunotri, Gangotri, Kedarnath, Badrinath, and it happens to be the order the roads support. The four shrines sit in three separate river valleys — the Yamuna, the Bhagirathi and then the Mandakini and Alaknanda — and each valley is entered from the plain rather than from its neighbour. There is no high road linking them.',
        'That means every transition between shrines involves coming partly down one valley and going up the next, which is why days five and eight are eight to nine hours each. Doing the circuit in any other order does not avoid those descents; it just rearranges them, usually worse.',
        'The practical argument for west to east is the walking. Yamunotri’s 6 km comes on day two while everyone is fresh, and Kedarnath’s 16 km comes on day six when the party has acclimatised to five days of altitude. Reversing it puts the hardest walk on day two at 3,583 metres, which is how people end up turning back at Rambara.',
      ],
      link: { label: 'Char Dham yatra packages and dates', href: '/chardham-yatra' },
      image: { src: `${IMG}/Char_Dham/Kedarnath_Temple.jpg`, alt: 'The Kedarnath temple at 3,583 metres', tag: 'Kedarnath', caption: 'Sixteen kilometres from Gaurikund with a 1,500 metre gain — the one leg of the yatra that decides how many days you need.' },
    },
    {
      eyebrow: 'Kedarnath',
      heading: 'Walk, pony or helicopter — and the honest comparison',
      paras: [
        'Walking is 16 km from Gaurikund with a 1,500 metre gain, six to eight hours up for a reasonably fit adult and four to six down. It is a paved track the whole way with tea stalls and rest points, not a technical trek, but the altitude and the continuous gradient defeat a lot of people who expected a temple visit rather than a mountain day. Two days should be allowed: up on one, down the next.',
        'Ponies and porters are available at Gaurikund and are the standard choice for older pilgrims. A pony covers the distance in four to five hours and the rider still has to manage the altitude. Palanquins carried by four bearers are the option for those who cannot sit a pony.',
        'The helicopter flies from Phata, Sersi or Guptkashi and lands at the Kedarnath helipad, a few hundred metres from the temple. It takes minutes rather than days, it is booked separately and well ahead, and it is weather-dependent — flights are grounded regularly and a booking is not a guarantee. A great many families use it for the ascent and walk down, which is the arrangement we see most often. If the flight is cancelled, the walk is still there; plan the days so that is survivable rather than trip-ending.',
      ],
      link: { label: 'Char Dham yatra, shrine by shrine', href: '/chardham-yatra' },
    },
    {
      eyebrow: 'The season',
      heading: 'When the roads and the temples are actually open',
      paras: [
        'The shrines open around Akshaya Tritiya, which falls in late April or early May, and close around Diwali in late October or November. Exact dates are announced each year and differ by a few days between the four. Outside that window the temples are shut and the deities are at their winter seats — Yamunotri’s at Kharsali, Gangotri’s at Mukhba, Kedarnath’s at Ukhimath and Badrinath’s at Joshimath, all of which can be visited by road in winter.',
        'Within the season there are two distinct halves. May and June are the busiest, with the heaviest pilgrim volume of the year and long queues at Kedarnath and Badrinath. September and October are quieter, clearer and in most ways better, with the caveat that the weather turns earlier at altitude.',
        'July and August are the monsoon, and this is the one circuit on the site where we would advise against travelling in it rather than merely noting the risk. The Alaknanda and Mandakini gorge roads carry serious landslide exposure, closures of several hours or days are common, and the Kedarnath trail is genuinely dangerous in heavy rain. The yatra runs through it and people do travel; we would not plan it that way.',
      ],
      link: { label: 'Best time for Char Dham by road', href: '/best-time-for-char-dham-by-road' },
    },
    {
      eyebrow: 'The variations',
      heading: 'Do Dham in seven days, and what twelve days of Char Dham really asks of you',
      paras: [
        'If twelve days is too long, the usual answer is Do Dham — Kedarnath and Badrinath only, which are the two most visited and sit in adjacent valleys. Seven days from Haridwar covers both comfortably including the Kedarnath walk, and about 950 km of driving. Yamunotri and Gangotri are the ones dropped, which is a real loss but a coherent trip.',
        'The other reduction is Char Dham by helicopter, which does all four in a single long day or two from Dehradun and is an entirely different proposition — no driving, no walking, and very little of the valleys. It suits those for whom the walking is not possible.',
        'What twelve days asks of you is worth stating plainly: roughly 1,600 km on hill roads, two walk days of which one is a serious mountain day, eight nights above 1,500 metres and two above 3,000, and two driving days of eight to nine hours. It is a demanding trip and the commonest mistake is to plan it as a temple tour rather than as a Himalayan one.',
      ],
      link: { label: 'Char Dham yatra cost by car, broken down', href: '/char-dham-yatra-cost-by-car' },
    },
  ],

  tips: [
    { title: 'Register before you travel', text: 'Uttarakhand requires yatra registration for Char Dham pilgrims and it is checked on the route. Do it before setting out; the counters at Haridwar and Rishikesh are slower in May and June than the website is.' },
    { title: 'Two days for Kedarnath, not one', text: 'Sixteen kilometres up and sixteen down with a 1,500 metre gain is not a single day for most people. Build the night at Kedarnath into the plan rather than discovering you need it at Rambara.' },
    { title: 'The helicopter is weather-dependent', text: 'Flights to Kedarnath are grounded regularly and a booking is not a guarantee. Plan the days so a cancellation means walking rather than missing the shrine.' },
    { title: 'Altitude is cumulative', text: 'Eight of the twelve nights are above 1,500 metres and two above 3,000. Drink more water than feels necessary, go slowly on the first day at Kedarnath and Badrinath, and tell the driver if anyone feels unwell — descending 500 metres fixes most of it.' },
    { title: 'Carry cash and warm clothes', text: 'Card acceptance above Uttarkashi and Guptkashi is patchy, and Kedarnath and Badrinath are cold at any point in the season. The temperature difference between Haridwar on day one and Kedarnath on day six is around twenty degrees.' },
  ],

  faqs: [
    { question: 'How many days does the Char Dham yatra take by car?', answer: 'Twelve from Haridwar and back is the shortest honest circuit that does all four shrines without rushing the walks — ten driving or travel days plus the two Kedarnath walk days. About 1,600 km. Do Dham, which is Kedarnath and Badrinath only, takes seven days and about 950 km.' },
    { question: 'How much does Char Dham cost by car?', answer: 'Sedan ₹39,600, Ertiga ₹54,000, Innova Crysta ₹64,800 and a 12-seater Tempo Traveller ₹82,800 for the twelve days, on the published rate card with its 300 km per day minimum. That covers the vehicle, the driver and fuel. Tolls, parking, Uttarakhand entry and the driver night allowance are at actual; ponies, palanquins, the Kedarnath helicopter, accommodation and meals are separate.' },
    { question: 'Which Char Dham shrines can you drive to?', answer: 'Two of the four. Gangotri and Badrinath have road right up to the temple. Yamunotri is a 6 km walk from Jankichatti, two to three hours with ponies and palanquins available at the trailhead. Kedarnath is 16 km from Gaurikund with a 1,500 metre gain, which is a full day in each direction or a helicopter flight from Phata, Sersi or Guptkashi.' },
    { question: 'What is the correct order for Char Dham?', answer: 'Yamunotri, Gangotri, Kedarnath, Badrinath — west to east. It is the traditional order and also the one the roads support, since the four shrines sit in three separate river valleys each entered from the plain rather than from its neighbour. It also puts the easier 6 km walk on day two and the hard 16 km one on day six, when the party has acclimatised.' },
    { question: 'When does Char Dham open and close?', answer: 'The shrines open around Akshaya Tritiya in late April or early May and close around Diwali in late October or November, with exact dates announced each year and differing by a few days between the four. Outside the season the deities are at their winter seats at Kharsali, Mukhba, Ukhimath and Joshimath, all reachable by road.' },
    { question: 'Is the Char Dham yatra safe during the monsoon?', answer: 'It runs, and we would advise against planning it then. July and August bring serious landslide exposure on the Alaknanda and Mandakini gorge roads, closures of hours or days are common, and the Kedarnath trail is genuinely hazardous in heavy rain. September and October are the better half of the season — quieter, clearer and far more predictable.' },
    { question: 'Do I need to register for the Char Dham yatra?', answer: 'Yes. Uttarakhand requires yatra registration for Char Dham pilgrims and it is checked at points along the route. Register before travelling rather than at the Haridwar or Rishikesh counters, which are slow in the May and June peak. We will tell you what is currently required when you book.' },
  ],

  related: [
    { label: 'Char Dham yatra packages', href: '/chardham-yatra' },
    { label: 'Char Dham yatra cost by car', href: '/char-dham-yatra-cost-by-car' },
    { label: 'Best time for Char Dham by road', href: '/best-time-for-char-dham-by-road' },
    { label: 'Haridwar sightseeing', href: '/sightseeing/haridwar' },
    { label: 'Rishikesh sightseeing', href: '/sightseeing/rishikesh' },
    { label: 'Delhi to Haridwar distance and fare', href: '/distance/delhi-to-haridwar' },
    { label: 'Weekend getaways from Haridwar', href: '/weekend-getaways-from-haridwar-by-car' },
    { label: 'The eight-day Uttarakhand hills circuit', href: '/uttarakhand-hills-circuit-by-car' },
  ],
};
