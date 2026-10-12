// Week 53 answer-proof guide 11 — "Pre-booked airport pickup or the prepaid
// counter?"
//
// WHY THIS SHAPE
// A comparison question with a genuinely mixed answer, which is why it is worth
// a page. For a short city transfer the prepaid counter is fine and we say so.
// For a long outstation run from an airport it is the wrong instrument, and the
// reasons are specific: flight tracking, vehicle choice and a fare agreed before
// a delayed arrival rather than after it.

export const guide = {
  slug: 'airport-pickup-vs-prepaid-taxi',
  path: '/airport-pickup-vs-prepaid-taxi',
  mood: 'highway',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Comparison guide · Airports',
  crumbs: [{ name: 'Airport taxi service', url: '/airport-service/delhi' }],
  crumbName: 'Pre-booked pickup or the prepaid counter',
  titleLead: 'Pre-booked pickup or the prepaid counter?',
  titleAccent: 'It depends entirely on how far you are going',
  title: 'Pre-Booked Airport Pickup or the Prepaid Counter?',
  metaTitle: 'Airport Pickup or Prepaid Taxi: Which to Use and When',
  metaDescription: 'When the airport prepaid taxi counter is the right choice and when a pre-booked pickup is, what flight tracking actually changes, and why a long outstation run should never be a counter decision.',
  keywords: ['airport prepaid taxi vs booking', 'should i prebook airport taxi india', 'delhi airport prepaid taxi', 'airport pickup meet and greet', 'igi airport taxi options', 'prepaid taxi counter airport'],
  heroImage: '/images/car/innova_crysta.jpg',
  heroAlt: 'An Innova Crysta from the Triveni Cabs fleet on an airport transfer',

  lead: 'For a short city transfer — the airport to a hotel twenty or thirty kilometres away — the prepaid counter is perfectly reasonable and we would not pretend otherwise. It is regulated, the fare is fixed, and you do not need to have thought about it in advance. For anything beyond about fifty kilometres, and for every outstation run, it is the wrong instrument: you cannot choose the vehicle, nothing tracks your flight, and you negotiate a long journey while tired at a counter rather than agreeing it before you left home.',

  keyFacts: [
    { label: 'City transfer under ~50 km', value: 'The counter is fine' },
    { label: 'Outstation run', value: 'Pre-book' },
    { label: 'What pre-booking adds', value: 'Flight tracking, vehicle choice, a fixed fare' },
    { label: 'What the counter adds', value: 'No forward planning needed' },
  ],
  stickyLabel: 'Airport transfer',
  stickyPrice: 'Fare fixed before travel',
  waText: 'Hi, I would like to pre-book an airport pickup. Flight details to follow.',

  intro: [
    'This is not a page arguing that pre-booking is always better, because it is not. The prepaid taxi counters at the major Indian airports are regulated, the fare is printed, and for a straightforward run into the city they do the job. Telling a reader otherwise would be sales rather than information.',
    'What changes the answer is distance and the shape of the journey. A 25 km transfer to a hotel is a commodity. A 290 km run to Nainital is an eight-hour journey in a specific vehicle on a specific road, and buying it from a queue after a delayed flight is the wrong way round.',
    'The four things below are what actually differ.',
  ],

  table: {
    title: 'The prepaid counter against a pre-booked pickup',
    caption: 'Comparison of the airport prepaid taxi counter and a pre-booked airport pickup across the things that differ',
    intro: 'Most of these rows do not matter on a 25 km transfer. All of them matter on a 290 km one.',
    columns: [
      { key: 'item', label: '' },
      { key: 'prepaid', label: 'Prepaid counter' },
      { key: 'booked', label: 'Pre-booked pickup' },
    ],
    rows: [
      { item: 'Forward planning', prepaid: 'None needed', booked: 'Book before you fly' },
      { item: 'Flight tracking', prepaid: 'No — you find a car when you land', booked: 'Yes; a delay does not lose the car' },
      { item: 'Vehicle choice', prepaid: 'Whatever is next in the queue', booked: 'Sedan, Ertiga, Innova or Tempo Traveller' },
      { item: 'Luggage certainty', prepaid: 'Uncertain until the car arrives', booked: 'Matched to your luggage at booking' },
      { item: 'Fare agreed', prepaid: 'At the counter, after you land', booked: 'Before you travel' },
      { item: 'Night arrival', prepaid: 'Queues thin and waits lengthen', booked: 'Driver is there for the arrival time' },
      { item: 'Outstation distance', prepaid: 'Possible but priced at the counter', booked: 'Published per-route fare' },
      { item: 'Driver knows the route', prepaid: 'City routes, yes; hill roads, uncertain', booked: 'Assigned to the corridor' },
      { item: 'Meeting point', prepaid: 'The counter, then the rank', booked: 'The arrival gate, by name' },
      { item: 'Multi-day continuation', prepaid: 'Not available', booked: 'The same car and driver continue' },
    ],
    footnote: 'The prepaid counters are regulated and the fare is printed, which is their real strength. The comparison above is about what each is suited to, not about which is more trustworthy.',
  },

  sections: [
    {
      eyebrow: 'Flight tracking',
      heading: 'What flight tracking actually changes, and what it does not',
      paras: [
        'It means the driver\'s arrival is set by when your aircraft lands rather than by the time on your booking. A two-hour delay moves the pickup by two hours and costs nothing. Without it, a delayed arrival means either a driver waiting and charging for the wait, or no driver at all.',
        'This matters most on exactly the arrivals where the counter is worst: a late-night landing, a long-haul with an unpredictable connection, or an arrival into a secondary airport with a thin taxi supply. A midnight arrival at Jolly Grant or Gaggal is a different problem from a midday one at IGI Terminal 3.',
        'What it does not change is the fare. A tracked delay is not a surcharge event on this site — the published route fare stands whether you land on time or three hours late. That is worth stating because "flight tracking included" is sometimes offered alongside a waiting charge that starts when the aircraft was scheduled to land rather than when it did.',
      ],
      link: { label: 'Cab waiting charges explained', href: '/cab-waiting-charges-explained' },
    },
    {
      eyebrow: 'Vehicle choice',
      heading: 'Why the vehicle matters more at an airport than anywhere else',
      paras: [
        'Because an airport arrival is the one journey where you are guaranteed to have all your luggage. A family of four landing with four suitcases does not fit a sedan, and discovering that at the rank with a queue behind you is a bad five minutes.',
        'On this site the vehicle is chosen at booking against the number of passengers and bags: sedan for four passengers and light luggage, Ertiga or Innova for six, 12-seater Tempo Traveller beyond that. The published airport route fares list all three so the comparison is on the page.',
        'It matters doubly where the destination is a hill road. An airport run to Mussoorie, Nainital, Auli or Dharamshala is a gradient-and-surface journey as well as a long one, and the right answer there is an Ertiga or an Innova rather than whatever reaches the front of the rank.',
      ],
      link: { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    },
    {
      eyebrow: 'The honest split',
      heading: 'Where the line actually falls',
      paras: [
        '**Use the counter** for a city transfer under about fifty kilometres, in daylight, with ordinary luggage, where you have not planned ahead and do not want to. Airport to a Delhi or Jaipur hotel is exactly this. It is regulated, the fare is printed, and pre-booking adds little.',
        '**Pre-book** when any of four things is true: the destination is outstation rather than in the city; you are arriving at night; you have a group or significant luggage; or the destination is a hill road. Any one of those tips it, and most airport enquiries have at least two.',
        '**Always pre-book** a multi-day hire that begins at the airport. If the car is continuing with you for a week, the arrival is the first leg of the itinerary rather than a separate transaction — and the whole value of one vehicle and one driver for the trip depends on it being arranged in advance.',
      ],
      link: { label: 'Airport taxi service, Delhi', href: '/airport-service/delhi' },
    },
  ],

  tips: [
    { title: 'Under 50 km in daylight: the counter is fine', text: 'Regulated, printed fare, no planning needed. Pre-booking a short city transfer adds little beyond convenience.' },
    { title: 'Night arrivals: pre-book', text: 'Ranks thin out and waits lengthen late. A midnight landing at a secondary airport is the worst case for the counter.' },
    { title: 'Count your bags before choosing the vehicle', text: 'An airport arrival is the one journey where you certainly have all your luggage. Four people and four suitcases is not a sedan.' },
    { title: 'A hill destination is not a rank decision', text: 'An airport run to Mussoorie, Nainital or Dharamshala wants clearance and a driver who knows the climb.' },
    { title: 'Tracking should not come with a waiting charge from the scheduled time', text: 'If a delay is tracked, the clock should start when the aircraft lands. Ask which it is.' },
  ],

  faqs: [
    { question: 'Should I use the airport prepaid taxi counter or pre-book?', answer: 'The counter is fine for a city transfer under about fifty kilometres in daylight with ordinary luggage — it is regulated and the fare is printed. Pre-book when the destination is outstation, when you are arriving at night, when you have a group or significant luggage, or when the destination is a hill road. Most airport enquiries have at least two of those.' },
    { question: 'What does flight tracking on an airport pickup actually do?', answer: 'It sets the driver\'s arrival by when your aircraft lands rather than by the time on your booking, so a two-hour delay moves the pickup by two hours at no cost. On this site a tracked delay is not a surcharge event — the published route fare stands whether you land on time or late. Worth checking elsewhere whether the waiting clock starts at the scheduled landing or the actual one.' },
    { question: 'Is a pre-booked airport taxi more expensive than prepaid?', answer: 'Not necessarily, and on outstation runs usually not. The published airport route fares on this site are fixed per route with no surge, which on a long run is generally better than a counter price negotiated after a delayed arrival. On a short city transfer the two are close enough that convenience rather than cost should decide.' },
    { question: 'Can I book an outstation trip from the airport prepaid counter?', answer: 'Usually yes, but it is the wrong instrument for it. A 290 km run to Nainital is an eight-hour journey in a specific vehicle on a specific road, and buying it from a queue while tired is the wrong way round. You cannot choose the vehicle, nothing tracked your flight, and the driver may not know the corridor.' },
    { question: 'Where does a pre-booked driver meet me?', answer: 'At the arrival gate, by name, rather than at a rank. On this site the published airport routes list the pickup points per terminal, and the driver tracks the flight — so a delayed arrival means he is there when you come out rather than gone. Tell us the terminal and flight number at booking.' },
    { question: 'What if my flight is cancelled rather than delayed?', answer: 'Tell us as soon as you know and we move or cancel the booking without a charge. This is the other half of what pre-booking is for: a cancelled flight with a prepaid counter plan costs you nothing because there was no plan, but a cancelled flight with an unreachable operator costs you a no-show fee. Ask what the cancellation position is before booking anywhere.' },
  ],

  related: [
    { label: 'Airport taxi service, Delhi', href: '/airport-service/delhi' },
    { label: 'Cab waiting charges explained', href: '/cab-waiting-charges-explained' },
    { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    { label: 'Luggage capacity by vehicle', href: '/luggage-capacity-by-vehicle' },
    { label: 'One-way drop charges explained', href: '/one-way-drop-charges-explained' },
    { label: 'Delhi airport to Mussoorie taxi', href: '/delhi-airport-to-mussoorie-taxi' },
  ],
};
