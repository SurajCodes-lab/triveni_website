// Week 49 route guide 1 — the Varanasi, Ayodhya and Prayagraj triangle by
// road. The three corridors each have a booking page and two of them a
// distance page; nobody on the site joins them into the three-day circuit
// most pilgrims actually drive. Every distance, time and toll below is the
// one those pages publish; the Ayodhya–Prayagraj leg has a booking record
// (165 km, 3–4 hours) and no distance page, and the guide says so.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'varanasi-ayodhya-prayagraj-by-road',
  path: '/varanasi-ayodhya-prayagraj-by-road',
  mood: 'highway',
  cluster: 'road',
  publishedOn: '2026-09-14',
  updatedOn: '2026-09-14',
  search: { query: 'varanasi to ayodhya distance' },

  eyebrow: 'Road guide · Varanasi, Ayodhya and Prayagraj',
  crumbs: [{ name: 'Varanasi', url: '/varanasi' }, { name: 'Varanasi to Ayodhya cab', url: '/varanasi-to-ayodhya' }],
  crumbName: 'Varanasi, Ayodhya and Prayagraj by road',
  titleLead: 'Varanasi, Ayodhya and Prayagraj by road:',
  titleAccent: 'the three-day triangle, leg by leg',
  title: 'Varanasi, Ayodhya and Prayagraj by Road: The Three-Day Triangle, Leg by Leg',
  metaTitle: 'Varanasi to Ayodhya to Prayagraj by Road: 490 km, 3 Days',
  metaDescription: 'Varanasi to Ayodhya 200 km via Jaunpur (4–5 hrs), Ayodhya to Prayagraj 165 km (3–4 hrs), Prayagraj to Varanasi 125 km on NH-19. The three-day triangle by car: stops, fog months, sedan fares from ₹3,300 a day.',
  keywords: ['varanasi to ayodhya distance', 'varanasi to ayodhya by road', 'varanasi ayodhya prayagraj tour by car', 'ayodhya to prayagraj distance', 'varanasi to prayagraj distance', 'varanasi to ayodhya cab', 'kashi ayodhya prayagraj yatra by road', 'lucknow to ayodhya distance', 'varanasi ayodhya prayagraj 3 days'],
  heroImage: `${IMG}/Ayodhya/Ram_Mandir.jpg`,
  heroAlt: 'Ram Mandir at Ayodhya, the middle point of the Varanasi, Ayodhya and Prayagraj road triangle',

  lead: 'Varanasi, Ayodhya and Prayagraj sit at the three corners of a triangle of flat Purvanchal highway, and a car joins them in three days without a single hill or a single bad road. Varanasi to Ayodhya is 200 km through Jaunpur and Sultanpur in four to five hours; Ayodhya to Prayagraj is 165 km in three to four; Prayagraj back to Varanasi is 125 km on the four-lane NH-19 in two and a half to three. That is 490 km of driving, which bills at the 300 km per day minimum: ₹9,900 for a sedan over the three days, with the same car and driver from the first ghat to the last.',
  keyFacts: [
    { label: 'The triangle', value: '490 km · 3 days' },
    { label: 'Longest leg', value: 'Varanasi–Ayodhya 200 km' },
    { label: 'Best months', value: 'October to March' },
    { label: 'Sedan, 3 days', value: '₹9,900' },
  ],
  stickyLabel: 'Kashi–Ayodhya–Prayagraj cab',
  stickyPrice: 'Sedan ₹9,900 · 3 days',
  waText: 'Hi, I want a cab for the Varanasi, Ayodhya and Prayagraj circuit over three days. Dates and number of passengers to follow.',

  intro: [
    'Most people who drive this triangle arrive by train or flight at Varanasi, want Ayodhya for the Ram Mandir and Prayagraj for the Sangam, and have three days. This guide puts the three corridors in the order that works, says where the car stops on each, gives the months when the fog and the melas change the plan, and works the fare on the published rate card rather than a quote.',
    'The distances and drive times are the ones our distance and booking pages publish for each leg; the Lucknow toll figures are from the toll page; the fares are the rate card: ₹11 a kilometre for a sedan, ₹15 for an Ertiga or similar SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, tolls and parking at actuals.',
  ],

  timelineTitle: 'The triangle, corner by corner',
  timelineEyebrow: 'Varanasi → Ayodhya → Prayagraj → Varanasi',
  timelineIntro: 'Kilometre marks are cumulative from the Varanasi pickup. The clock is a plan, not a promise: it assumes a dawn start on each leg outside the fog months and one tea halt per leg.',
  timeline: [
    { km: 0, name: 'Varanasi', time: 'Day 1 · 6 am', text: 'Leave by the airport road past Babatpur while the city is still asleep. If you have arrived the night before, do the Dashashwamedh aarti that evening and the Kashi Vishwanath darshan on the last morning, when the car brings you back.', tag: 'Day 1 start', image: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg`, alt: 'Ganga aarti at Dashashwamedh Ghat, Varanasi' },
    { km: 60, name: 'Jaunpur', time: '7.15 am', text: 'The first proper town, on the Gomti. The old Shahi Bridge is worth a slow pass and the mosques of the Sharqi sultans are a short detour if history is your thing; most pilgrims keep going.', tag: 'Gomti crossing' },
    { km: 130, name: 'Short of Sultanpur', time: '8.30 am', text: 'Sugarcane and paddy on both sides and the dhabas our drivers use for the tea halt. After Sultanpur the road turns north for Ayodhya.', stop: 'Tea halt' },
    { km: 200, name: 'Ayodhya', time: '10.30–11 am', text: 'The last fifty kilometres through Faizabad are the busiest of the whole triangle, with pilgrim buses converging on the temple approach. The car drops you at the designated parking; the Ram Mandir, Hanuman Garhi and Kanak Bhawan are on foot from there, and the Saryu ghats are the evening.', tag: 'Night 1', image: `${IMG}/Ayodhya/Hanuman_Garhi.jpg`, alt: 'Hanuman Garhi temple, Ayodhya' },
    { km: 200, name: 'Ayodhya', time: 'Day 2 · 7 am', text: 'Morning darshan if you missed the evening slot, then out on the Sultanpur road again, this time carrying on south past the Varanasi turn towards Pratapgarh and Prayagraj.', tag: 'Day 2 start' },
    { km: 365, name: 'Prayagraj', time: '11 am', text: '165 km and three to four hours by the booking page. Ask for the Sangam first, while the boatmen are still fresh, then Anand Bhawan and the fort in the afternoon and Khusro Bagh if there is light left.', tag: 'Night 2', image: `${IMG}/Prayagraj/Triveni_Sangam.jpg`, alt: 'Boats at the Triveni Sangam, Prayagraj' },
    { km: 365, name: 'Prayagraj', time: 'Day 3 · 8 am', text: 'The shortest leg, so there is no need for a dawn start. Cross the Ganga out of the city, then Handia and the four-lane NH-19 across the doab.', tag: 'Day 3 start' },
    { km: 430, name: 'Gopiganj', time: '9.15 am', text: 'The half-way mark and the Gyanpur turn for Bhadohi, carpet country. The roadside dhabas here are the tea stop if you want one; otherwise it is an hour and a quarter more.', stop: 'Tea halt' },
    { km: 490, name: 'Varanasi', time: '10.30–11 am', text: 'In through Mohansarai. The car takes you to the Godowlia end for the Kashi Vishwanath darshan and Sarnath in the afternoon, or straight to the station or the airport if the train is the same day.', tag: 'Arrive', image: `${IMG}/Varanasi/Kashi_Vishwanath_Temple.jpg`, alt: 'Kashi Vishwanath Temple, Varanasi' },
  ],

  table: {
    title: 'The three legs of the Varanasi, Ayodhya and Prayagraj triangle',
    caption: 'Distance, drive time, road and stops for each leg of the Varanasi to Ayodhya to Prayagraj road circuit, with the Lucknow start as an alternative first leg',
    intro: 'Distances and times are the ones our distance and booking pages publish for each corridor. Tolls on the three Purvanchal legs are paid at actuals by the driver on FASTag and appear on the bill; the Lucknow leg has a toll page and its figure is given.',
    columns: [
      { key: 'leg', label: 'Leg' },
      { key: 'distance', label: 'Distance', align: 'right' },
      { key: 'time', label: 'Drive time' },
      { key: 'road', label: 'Road and stops' },
      { key: 'note', label: 'What to know', strong: true },
    ],
    rows: [
      { leg: 'Varanasi to Ayodhya', distance: '200 km', time: '4–5 hrs', road: 'Airport road, Jaunpur, Sultanpur, then north through Faizabad', note: 'The busiest fifty kilometres of the circuit are the last ones; leave Varanasi by six.' },
      { leg: 'Ayodhya to Prayagraj', distance: '165 km', time: '3–4 hrs', road: 'Back down the Sultanpur road and on through Pratapgarh', note: 'No distance page yet for this leg; the booking page carries the figures.' },
      { leg: 'Prayagraj to Varanasi', distance: '125 km', time: '2.5–3 hrs', road: 'NH-19, four-lane, via Handia and Gopiganj', note: 'The easy leg. During Magh Mela and the Kumbh the Prayagraj approaches back up for kilometres.' },
      { leg: 'Lucknow to Ayodhya (alternative start)', distance: '135 km', time: '2.5–3 hrs', road: 'Via Barabanki; two plazas, ₹150 for a car', note: 'For those flying into Lucknow. The triangle then runs Lucknow, Ayodhya, Prayagraj, Varanasi and the car is released at Varanasi.' },
      { leg: 'The whole triangle', distance: '490 km', time: '3 days', road: 'Flat national highway throughout; no hill sections', note: 'Bills at the 300 km per day minimum: 900 km over three days.' },
    ],
    footnote: 'Lucknow to Ayodhya tolls from the toll page: ₹85 at Barabanki and ₹65 at Faizabad, both FASTag. Uttar Pradesh charges no separate state entry tax for cars on these roads.',
  },

  sections: [
    {
      eyebrow: 'The order',
      heading: 'Which way round should I drive Varanasi, Ayodhya and Prayagraj?',
      paras: [
        'Varanasi first, then Ayodhya, then Prayagraj, then back to Varanasi. The reason is the shape of the roads rather than the shape of the map. The Varanasi to Ayodhya leg is the longest at 200 km and four to five hours, and it is best done fresh on the first morning; the Ayodhya to Prayagraj leg is 165 km and three to four hours, a comfortable second day; and Prayagraj to Varanasi is the shortest at 125 km on the four-lane NH-19, which means the last day can start late and still leave the afternoon for Kashi Vishwanath and Sarnath before a train or a flight.',
        'Driven the other way, Varanasi to Prayagraj first, you spend the first morning on the easiest leg and arrive at Ayodhya on the second evening by the busiest fifty kilometres of the circuit, the Faizabad approach, at exactly the hour the pilgrim buses fill it. It works, but it is the wrong way to spend the energy.',
        'If you fly into Lucknow rather than Varanasi, the triangle opens out: Lucknow to Ayodhya is 135 km and two and a half to three hours via Barabanki, with ₹150 of tolls for a car at the Barabanki and Faizabad plazas, and the circuit becomes Lucknow, Ayodhya, Prayagraj, Varanasi with the car released at Varanasi. The same three days, one more corner.',
      ],
      link: { label: 'Varanasi to Ayodhya distance and route', href: '/distance/varanasi-to-ayodhya' },
      image: { src: `${IMG}/Ayodhya/Saryu_River_Ghat.jpg`, alt: 'The Saryu river ghats at Ayodhya in the evening', tag: 'Ayodhya · night 1', caption: 'Ayodhya is the first night, so the Saryu ghats get the evening and the Ram Mandir gets the morning.' },
    },
    {
      eyebrow: 'Varanasi to Ayodhya',
      heading: 'What is the Varanasi to Ayodhya road like, and where does the car stop?',
      paras: [
        'Flat from end to end, and the whole art of it is timing. The road out of Varanasi is the airport road past Babatpur, and the first proper town is Jaunpur on the Gomti, an hour and a quarter out, where the old Shahi Bridge deserves a slow pass. From Jaunpur to Sultanpur the highway runs through sugarcane and paddy, and this is where our drivers make the tea halt, at one of the dhabas short of Sultanpur. After Sultanpur the road turns north, and the last fifty kilometres through Faizabad are the busiest of the whole triangle, with pilgrim buses converging on the temple approach.',
        'Our distance page puts the leg at 200 km and four to five hours via Jaunpur on a good national highway, and notes that the road has improved a great deal with the Ayodhya development. The surface is not the variable; the air is. From mid-December to the end of January the fog over these fields is thick until ten in the morning, and a four-hour drive becomes five. In July and August the Ganga and the Saryu both run high, which does not touch the road but does close the lower ghats at either end. In summer, leave at first light and finish the darshan before the heat.',
        'In Ayodhya the car goes to the designated parking, and the temple town is on foot: the Ram Mandir, Hanuman Garhi and Kanak Bhawan are within walking distance of each other, and the Saryu ghats are a short ride. Our Ayodhya page and the Deepotsav guide cover the darshan slots and the crowd pattern; the short version is that the morning slot is calmer than the evening one and that the driver knows which parking is open on the day.',
      ],
      bullets: [
        'Leave Varanasi by six. The Faizabad approach is the one stretch that punishes a late start.',
        'Tea halt short of Sultanpur, about two and a half hours out; the dhabas there are the ones the drivers use.',
        'December and January: expect fog until ten and add an hour. July and August: the road is fine, the lower ghats are not.',
      ],
      link: { label: 'Varanasi to Ayodhya cab', href: '/varanasi-to-ayodhya' },
    },
    {
      eyebrow: 'Ayodhya to Prayagraj',
      heading: 'How do I get from Ayodhya to Prayagraj by road, and how long does it take?',
      paras: [
        'Back down the Sultanpur road and on south through Pratapgarh to Prayagraj: 165 km and three to four hours by our booking page for the corridor. It is the leg the site knows least about, in the sense that there is a booking page but no distance page yet, and the figures here are the booking page’s. The road is the same flat Purvanchal highway as the first day, without the Faizabad crowds at the start because you are leaving against the pilgrim flow rather than joining it.',
        'Leave Ayodhya after the morning darshan, around seven, and Prayagraj is reached before noon. The Sangam is the first stop because the boats and the boatmen are best before the afternoon wind; Anand Bhawan and the fort fill the afternoon, and Khusro Bagh is the place for the last hour of light. Prayagraj is a city that spreads, so the car earns its keep here, moving you between the Sangam, the Civil Lines and the fort without the auto negotiations.',
        'The exception to everything above is Magh Mela, every January and February, and the Kumbh years. In those weeks the Prayagraj approach roads back up for kilometres and the police open the bridges by turn; our drivers plan the arrival for the early morning and the driver will tell you on the day which side of the river the car can reach.',
      ],
      link: { label: 'Ayodhya to Prayagraj cab', href: '/ayodhya-to-prayagraj' },
      image: { src: `${IMG}/Prayagraj/Anand_Bhawan.jpg`, alt: 'Anand Bhawan, the Nehru family house at Prayagraj', tag: 'Prayagraj · day 2', side: 'left', caption: 'Anand Bhawan and the fort fill the second afternoon once the Sangam is done.' },
    },
    {
      eyebrow: 'Prayagraj to Varanasi',
      heading: 'What is the Prayagraj to Varanasi road like on NH-19?',
      paras: [
        'The easy leg. Leaving Prayagraj you cross the Ganga, pass Handia and pick up NH-19, the modern Grand Trunk Road, and the whole run to Varanasi is a four-lane straight across the flat doab with nothing on it that could be called a hard stretch. The half-way mark is Gopiganj and the Gyanpur turn for Bhadohi, carpet country, where the roadside dhabas are the sensible tea stop; after that it is an hour and a quarter into Varanasi through Mohansarai. Our distance page puts it at 125 km and two and a half to three hours on a good highway.',
        'Because it is short, the third day does not need a dawn start, which is the point of driving the triangle this way round. Leave Prayagraj at eight, arrive at eleven, and there is the whole afternoon for Kashi Vishwanath, Sarnath and a boat on the river before an evening train or flight; or a second night in Varanasi for the aarti and a dawn boat, which is the version we would choose.',
        'The only weather that troubles this road is fog: from mid-December through January the doab is blanketed until late morning and visibility on the highway drops to nothing, so in those weeks a later start is the safer one, which is the opposite of our advice for the rest of the year and the opposite of the advice for the Ayodhya leg.',
      ],
      link: { label: 'Varanasi to Prayagraj distance and route', href: '/distance/varanasi-to-prayagraj' },
      image: { src: `${IMG}/Varanasi/Boat_Ride_Ganges.jpg`, alt: 'A boat on the Ganga at Varanasi in the morning', tag: 'Varanasi · day 3', caption: 'The short third leg leaves the afternoon for the river.' },
    },
    {
      eyebrow: 'Cost',
      heading: 'How much does a cab for the Varanasi, Ayodhya and Prayagraj triangle cost?',
      paras: [
        'The triangle drives 490 km over three days, and outstation cabs bill a 300 km per day minimum, so the three days bill as 900 km: ₹9,900 for a sedan at ₹11 a kilometre, ₹13,500 for an Ertiga or similar SUV at ₹15, ₹16,200 for an Innova Crysta at ₹18 and ₹20,700 for a 12-seater Tempo Traveller at ₹23. Fuel and the driver are inside those figures; tolls, parking at the three towns and the driver’s night halts are at actuals and appear on the bill.',
        'A single leg on its own is the rate card on that leg: Varanasi to Ayodhya is 200 km, under the minimum, so it is ₹3,300 one way for a sedan; Ayodhya to Prayagraj and Prayagraj to Varanasi are likewise under 300 km and bill the same ₹3,300 each. Three separate one-way cabs therefore cost the same ₹9,900 as the circuit with one car, and the circuit is the better buy because the same driver knows where you are staying, which parking is open and which dhaba is worth the halt.',
        'A fourth day, for Sarnath and a dawn boat at Varanasi or for a Lucknow start, adds 300 km at the vehicle’s rate. There is no festival surcharge, and Deepotsav, Ram Navami and Magh Mela are booked on the same rate card with the same 300 km minimum; what changes in those weeks is the parking and the arrival hour, which the driver manages.',
      ],
      link: { label: 'Varanasi to Ayodhya one-way cab', href: '/one-way-cab/varanasi-to-ayodhya' },
    },
  ],

  fare: {
    title: 'The triangle on the rate card',
    note: 'Rate-card fares for the longest leg (Varanasi to Ayodhya, 200 km, which bills the 300 km minimum) and for the three-day circuit, which bills 900 km at the 300 km per day minimum for its 490 km of driving.',
    caption: 'Varanasi to Ayodhya cab fare by vehicle, one leg and the three-day Varanasi, Ayodhya and Prayagraj circuit',
    distanceKm: 200,
    roundTrip: true,
    days: 3,
    roundLabel: 'Three-day triangle',
    footnote: 'Tolls, parking and the driver’s night halts at actuals. No festival surcharge. A fourth day adds 300 km at the vehicle’s rate.',
    waText: 'Hi, I want a cab for the Varanasi, Ayodhya and Prayagraj triangle over three days. Please share the fare for my dates and number of passengers.',
    bookHref: '/varanasi-to-ayodhya',
    bookLabel: 'Varanasi to Ayodhya cab',
    cta: 'Book the triangle',
  },

  galleryTitle: 'What the three days buy you',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: `${IMG}/Ayodhya/Ram_Mandir.jpg`, title: 'Ram Mandir, Ayodhya', text: 'The morning darshan slot is the calm one; the car waits at the designated parking.', tag: 'Day 1–2' },
    { image: `${IMG}/Ayodhya/Kanak_Bhawan.jpg`, title: 'Kanak Bhawan', text: 'A walk from Hanuman Garhi, and quieter than either.', tag: 'Ayodhya' },
    { image: `${IMG}/Prayagraj/Triveni_Sangam.jpg`, title: 'Triveni Sangam', text: 'First stop on day two, before the afternoon wind reaches the boats.', tag: 'Day 2' },
    { image: `${IMG}/Prayagraj/Khusro_Bagh.jpg`, title: 'Khusro Bagh', text: 'The last hour of light at Prayagraj.', tag: 'Day 2' },
    { image: `${IMG}/Varanasi/Sarnath.jpg`, title: 'Sarnath', text: 'The third afternoon, if the train is not till evening.', tag: 'Day 3' },
    { image: `${IMG}/Varanasi/Assi_Ghat.jpg`, title: 'Assi Ghat at dawn', text: 'The reason to give Varanasi a second night.', tag: 'Day 4, if taken' },
  ],

  tips: [
    { title: 'Dawn on day one, not on day three', text: 'The Ayodhya leg wants a six o’clock start for the Faizabad approach; the Prayagraj to Varanasi leg is short enough that eight is fine, and in the fog months later is safer.' },
    { title: 'Two nights, three towns, one car', text: 'Night one in Ayodhya, night two in Prayagraj. The same driver carries the luggage question, the parking question and the darshan-slot question from town to town.' },
    { title: 'Check the mela calendar', text: 'Magh Mela is every January and February at Prayagraj, and Deepotsav and Ram Navami fill Ayodhya. None of them changes the fare; all of them change the arrival hour and the parking, and the driver plans for it.' },
  ],

  faqs: [
    { question: 'What is the distance from Varanasi to Ayodhya by road?', answer: '200 km via Jaunpur and Sultanpur, four to five hours on a good national highway. The road out of Varanasi is the airport road past Babatpur; the tea halt is short of Sultanpur; the last fifty kilometres through Faizabad are the busiest, so a six o’clock start is the one that works.' },
    { question: 'How far is Ayodhya from Prayagraj, and how long does it take?', answer: '165 km and three to four hours by our booking page for the corridor, back down the Sultanpur road and on through Pratapgarh. Leave Ayodhya after the morning darshan and Prayagraj is reached before noon, outside Magh Mela and the Kumbh weeks, when the approach roads back up.' },
    { question: 'What is the distance from Prayagraj to Varanasi?', answer: '125 km on NH-19, two and a half to three hours, four-lane the whole way via Handia and Gopiganj. It is the shortest leg of the triangle, which is why the circuit is driven with Varanasi to Ayodhya first and this leg last.' },
    { question: 'Can I cover Varanasi, Ayodhya and Prayagraj in 3 days by car?', answer: 'Yes, and three days is the right number. Day one Varanasi to Ayodhya (200 km) with the night at Ayodhya; day two Ayodhya to Prayagraj (165 km) with the night at Prayagraj; day three Prayagraj to Varanasi (125 km) with the afternoon for Kashi Vishwanath and Sarnath. Two days is possible only by giving up the Ayodhya night, which is the best part.' },
    { question: 'How much does a cab for the Varanasi, Ayodhya and Prayagraj triangle cost?', answer: 'The circuit drives 490 km over three days and bills at the 300 km per day minimum, so 900 km: ₹9,900 for a sedan at ₹11/km, ₹13,500 for an Ertiga or SUV at ₹15, ₹16,200 for an Innova Crysta at ₹18 and ₹20,700 for a 12-seater Tempo Traveller at ₹23. Fuel and driver included; tolls, parking and the driver’s night halts at actuals.' },
    { question: 'Which is the best time of year to drive the Varanasi, Ayodhya and Prayagraj circuit?', answer: 'October to March, by all three distance and booking pages. Within that, mid-December to the end of January brings thick fog over the whole triangle until ten in the morning and adds an hour to each leg; Deepotsav (Ayodhya, around Diwali), Ram Navami (Ayodhya, March–April) and Magh Mela (Prayagraj, January–February) are the grandest and the most crowded weeks. July and August are drivable but the lower ghats at Varanasi and Ayodhya close when the rivers run high.' },
    { question: 'Should I start from Lucknow instead of Varanasi?', answer: 'If Lucknow is where you land, yes. Lucknow to Ayodhya is 135 km and two and a half to three hours via Barabanki, with ₹150 of tolls for a car at the Barabanki and Faizabad plazas. The circuit then runs Lucknow, Ayodhya, Prayagraj, Varanasi over the same three days, and the car is released at Varanasi for your onward train or flight.' },
    { question: 'Where does the car park in Ayodhya, Prayagraj and Varanasi?', answer: 'Ayodhya: the designated pilgrim parking, from which the Ram Mandir, Hanuman Garhi and Kanak Bhawan are on foot; which parking is open changes with the crowd and the driver knows on the day. Prayagraj: the car moves you between the Sangam, Anand Bhawan, the fort and Khusro Bagh, because the city spreads. Varanasi: the Godowlia end for Kashi Vishwanath and the ghats, which are on foot beyond that point.' },
  ],

  related: [
    { label: 'Varanasi to Ayodhya cab', sub: '200 km · from ₹3,300', href: '/varanasi-to-ayodhya', img: `${IMG}/Ayodhya/Ayodhya_Hero_section.jpg` },
    { label: 'Ayodhya to Prayagraj cab', sub: '165 km · 3–4 hrs', href: '/ayodhya-to-prayagraj', img: `${IMG}/Prayagraj/Prayagraj_hero_section.jpg` },
    { label: 'Varanasi to Prayagraj cab', sub: '125 km on NH-19', href: '/varanasi-to-prayagraj', img: `${IMG}/Prayagraj/Allahabad_Fort.jpg` },
    { label: 'Lucknow to Ayodhya toll cost', sub: 'Two plazas, ₹150 for a car', href: '/toll-cost/lucknow-to-ayodhya', img: `${IMG}/Lucknow/Rumi_Darwaza.jpg` },
    { label: 'Deepotsav Ayodhya 2026 by road', sub: 'The lamps on the Saryu', href: '/deepotsav-ayodhya-2026-guide', img: `${IMG}/Ayodhya/Saryu_River_Ghat.jpg` },
    { label: 'Dev Deepawali at Varanasi 2026', sub: 'The ghats lit end to end', href: '/dev-deepawali-varanasi-2026', img: `${IMG}/Varanasi/Dashashwamedh_Ghat_Aarti.jpg` },
    { label: 'Ayodhya Ram Mandir darshan tour', sub: 'Car and darshan in one booking', href: '/sightseeing/ayodhya-ram-mandir-darshan-tour', img: `${IMG}/Ayodhya/Ram_Mandir.jpg` },
    { label: 'Prayagraj Sangam spiritual tour', sub: 'The Sangam and the fort with a car', href: '/sightseeing/prayagraj-sangam-spiritual-tour', img: `${IMG}/Prayagraj/Triveni_Sangam.jpg` },
  ],
  guides: ['delhi-to-varanasi-best-route-by-car', 'deepotsav-ayodhya-2026-guide', 'dev-deepawali-varanasi-2026', 'chhath-puja-varanasi-ghat-guide', 'delhi-to-vrindavan-by-car'],

  schema: {
    places: ['varanasi', 'ayodhya', 'prayagraj', 'lucknow'],
    trip: {
      name: 'Varanasi, Ayodhya and Prayagraj by road in three days',
      description: 'The 490 km road triangle from Varanasi to Ayodhya (200 km via Jaunpur), Ayodhya to Prayagraj (165 km) and Prayagraj back to Varanasi (125 km on NH-19), driven over three days with one car and driver.',
      touristType: 'Pilgrims and road travellers',
      lowPrice: 3300,
      highPrice: 20700,
      itinerary: [
        { name: 'Varanasi to Ayodhya', text: '200 km via Jaunpur and Sultanpur, four to five hours; tea halt short of Sultanpur; night at Ayodhya.' },
        { name: 'Ayodhya to Prayagraj', text: '165 km back down the Sultanpur road and on through Pratapgarh, three to four hours; the Sangam first, then Anand Bhawan, the fort and Khusro Bagh; night at Prayagraj.' },
        { name: 'Prayagraj to Varanasi', text: '125 km on NH-19 via Handia and Gopiganj, two and a half to three hours; the afternoon for Kashi Vishwanath and Sarnath.' },
      ],
    },
    howTo: {
      name: 'How to drive the Varanasi, Ayodhya and Prayagraj triangle in three days',
      description: 'Varanasi to Ayodhya on day one, Ayodhya to Prayagraj on day two, Prayagraj back to Varanasi on the short third leg, with one car and driver throughout.',
      totalTime: 'P3D',
      estimatedCost: { currency: 'INR', value: 9900 },
      steps: [
        { name: 'Day one: leave Varanasi by six', text: 'Airport road past Babatpur, Jaunpur on the Gomti, tea halt short of Sultanpur, then north through Faizabad to the Ayodhya parking; 200 km, four to five hours.' },
        { name: 'Ayodhya on foot', text: 'Ram Mandir, Hanuman Garhi and Kanak Bhawan from the designated parking; the Saryu ghats in the evening; night at Ayodhya.' },
        { name: 'Day two: Ayodhya to Prayagraj', text: 'After the morning darshan, back down the Sultanpur road and on through Pratapgarh; 165 km, three to four hours; the Sangam first, then Anand Bhawan, the fort and Khusro Bagh; night at Prayagraj.' },
        { name: 'Day three: the short leg home', text: 'Leave at eight, cross the Ganga, Handia and NH-19 via Gopiganj to Varanasi; 125 km, two and a half to three hours; the afternoon for Kashi Vishwanath and Sarnath before the train or flight.' },
      ],
    },
  },
};
