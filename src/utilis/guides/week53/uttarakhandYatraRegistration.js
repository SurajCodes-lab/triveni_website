// Week 53 answer-proof guide 29 — "Uttarakhand yatra registration"
//
// WHY THIS SHAPE
// A permit-and-paperwork question with a definite answer, checked on the road,
// and the single administrative step most Char Dham travellers discover too
// late. It belongs on its own page rather than inside the Char Dham guides
// because somebody asking "do I need to register" is solving a different
// problem from somebody asking what the yatra costs.

export const guide = {
  slug: 'uttarakhand-yatra-registration',
  path: '/uttarakhand-yatra-registration',
  mood: 'pilgrimage',
  cluster: 'logistics',
  publishedOn: '2026-10-13',
  updatedOn: '2026-10-13',

  eyebrow: 'Permit guide · Uttarakhand',
  crumbs: [{ name: 'Char Dham yatra', url: '/chardham-yatra' }],
  crumbName: 'Uttarakhand yatra registration',
  titleLead: 'Uttarakhand yatra registration:',
  titleAccent: 'who needs it, and where it is checked',
  title: 'Uttarakhand Yatra Registration: Who Needs It and Where',
  metaTitle: 'Uttarakhand Yatra Registration: Who Needs It and Where',
  metaDescription: 'Char Dham yatra registration in Uttarakhand: who needs it, what it requires, where it is checked on the route, why to do it online before travelling, and what happens without it.',
  keywords: ['char dham registration', 'uttarakhand yatra registration online', 'kedarnath registration required', 'do i need registration for badrinath', 'yatra permit uttarakhand', 'char dham biometric registration'],
  heroImage: '/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
  heroAlt: 'The Char Dham shrines in the Garhwal Himalaya',

  lead: 'Uttarakhand requires yatra registration for Char Dham pilgrims, it is checked at points along the route rather than only at the shrines, and it is the one administrative step that reliably catches people out — not because it is difficult but because it is discovered at a checkpost rather than at home. Do it online before you travel. The counters at Haridwar and Rishikesh exist and they are slow in the May and June peak, which is exactly when most people need them.',

  keyFacts: [
    { label: 'Required for', value: 'Char Dham pilgrims' },
    { label: 'Checked', value: 'At points along the route' },
    { label: 'Do it', value: 'Online, before travelling' },
    { label: 'Counters', value: 'Haridwar and Rishikesh — slow in peak' },
  ],
  stickyLabel: 'Char Dham cab',
  stickyPrice: 'Sedan ₹39,600 · 12 days',
  waText: 'Hi, I am planning a Char Dham yatra and want to confirm the registration requirement.',

  intro: [
    'This is a short page about one administrative step, and it exists because that step is responsible for more wasted hours on the Char Dham route than anything except the weather.',
    'The requirement is a state registration for pilgrims travelling to the four shrines. Its purpose is crowd and capacity management on roads and at shrines that have limited capacity and a history of overcrowding, and it is enforced at checkposts on the yatra route rather than only at the temples themselves.',
    'What it is not is a visa or a permit in the restricted-area sense. It is a registration: you provide identity and travel details, you get a registration, and you carry it. The difficulty is purely one of doing it at the right time.',
  ],

  table: {
    title: 'What to do, and when',
    caption: 'Uttarakhand yatra registration: what is required, when to do it and what each route offers',
    intro: 'The first row is the one to use. The others exist and are the reason people lose a morning.',
    columns: [
      { key: 'route', label: 'How' },
      { key: 'when', label: 'When' },
      { key: 'speed', label: 'In peak season' },
      { key: 'note', label: 'Note' },
    ],
    rows: [
      { route: 'Online, before travelling', when: 'Days or weeks ahead', speed: '**The only reliable option**', note: 'Identity and travel details; carry the registration with you' },
      { route: 'Counter at Haridwar', when: 'On arrival', speed: 'Slow in May–Jun', note: 'Can cost a morning in the peak' },
      { route: 'Counter at Rishikesh', when: 'On arrival', speed: 'Slow in May–Jun', note: 'As Haridwar' },
      { route: 'Through your operator', when: 'At booking', speed: 'Handled for you', note: 'We arrange it as part of a Char Dham booking' },
      { route: 'Not at all', when: '—', speed: '—', note: '**You will be stopped at a checkpost on the route**' },
    ],
    footnote: 'The registration system, the information it requires and the checkpost arrangements are set by the Uttarakhand authorities and have been revised more than once, including the introduction of biometric and photo verification in some years. Confirm the current requirement close to your travel date rather than relying on any published description, including this one.',
  },

  sections: [
    {
      eyebrow: 'Where it is checked',
      heading: 'Checkposts on the route, not just at the shrines',
      paras: [
        'This is the part most people get wrong. The registration is not something you show at a temple door at the end of a twelve-day journey — it is checked at points along the yatra route, which means a party without it can be stopped at the start of a leg rather than at the destination.',
        'The practical consequence is that discovering the requirement at a checkpost above Rishikesh means turning back to a counter, which on a tight itinerary costs a day and sometimes a night halt. A party that registered at home drives through.',
        'It is also why registering for everybody in the vehicle matters, including children where the current rules require it. A party where one person is unregistered is a party that has a problem at a checkpost, not one person who does.',
      ],
      link: { label: 'The twelve-day Char Dham circuit', href: '/char-dham-circuit-by-car' },
    },
    {
      eyebrow: 'The timing',
      heading: 'Why the counters are the wrong plan in May and June',
      paras: [
        'Because that is the Char Dham peak and the counters are serving the same surge. May and June carry the heaviest pilgrim volume of the year — the shrines open around Akshaya Tritiya and the first weeks are the busiest — and the Haridwar and Rishikesh counters absorb all of it.',
        'A party arriving at Haridwar on a May morning intending to register and set off the same day is budgeting an hour for something that can take considerably longer. On a twelve-day itinerary with two walk days and two eight-to-nine hour legs, there is no slack to give to a queue.',
        'September and October, which are in several respects the better half of the season anyway, are also materially easier administratively. That is a small additional argument for the autumn window.',
      ],
      link: { label: 'Best time for Char Dham by road', href: '/best-time-for-char-dham-by-road' },
    },
    {
      eyebrow: 'What we do',
      heading: 'How this is handled on a booking with us',
      paras: [
        'We arrange the registration as part of a Char Dham booking, for every person travelling, and we tell you what information is needed when you book rather than at Haridwar.',
        'We also tell you the current requirement, which is the part that actually needs a person rather than a page. The system has been revised more than once — biometric and photo verification have been introduced in some years, the information required has changed, and the checkpost arrangements differ season to season. We check with the authorities for your dates rather than relying on what was true last year.',
        'And if the requirement for your dates is different from anything described here, we will say so. A page about an administrative rule is out of date the moment the rule changes, which is why the only sentence on this page we would stand behind indefinitely is: register before you travel, and confirm the current position for your dates.',
      ],
      link: { label: 'Char Dham yatra cost by car', href: '/char-dham-yatra-cost-by-car' },
    },
  ],

  tips: [
    { title: 'Register online before you leave home', text: 'It is the only reliable route. The counters exist and they are slowest exactly when most people need them.' },
    { title: 'Register everybody in the vehicle', text: 'A party where one person is unregistered has a problem at a checkpost, not one person who does.' },
    { title: 'Carry it, do not just have it', text: 'It is checked on the route rather than at the shrine door. A registration on a phone with no signal above Rudraprayag is worth having on paper too.' },
    { title: 'September is easier administratively as well as meteorologically', text: 'The autumn window avoids the May-June surge at the counters along with the queues at the shrines.' },
    { title: 'Confirm the current rule, not last year\'s', text: 'The system has been revised more than once including biometric verification in some years. Any page describing it, including this one, can go out of date.' },
  ],

  faqs: [
    { question: 'Is registration required for the Char Dham yatra?', answer: 'Yes. Uttarakhand requires yatra registration for Char Dham pilgrims, and it is checked at points along the route rather than only at the shrines. The purpose is crowd and capacity management on roads and at temples with limited capacity. It is a registration rather than a restricted-area permit — you provide identity and travel details and carry the registration with you.' },
    { question: 'Where do I register for the Uttarakhand yatra?', answer: 'Online, before travelling, which is the only reliable route. Counters exist at Haridwar and Rishikesh but they are slow in the May and June peak, which is exactly when most pilgrims need them. If you book a Char Dham trip with us we arrange it as part of the booking for everybody travelling, and tell you what information is needed in advance.' },
    { question: 'What happens if I travel without yatra registration?', answer: 'You can be stopped at a checkpost on the route, which is the thing people underestimate — it is not checked only at a temple door at the end of the journey. On a tight twelve-day itinerary, turning back to a counter costs a day and sometimes a night halt. Everybody in the vehicle needs to be registered, not just the person who booked.' },
    { question: 'Do children need Char Dham registration?', answer: 'The requirement for children has varied between years, and it is the kind of detail that should be confirmed for your dates rather than assumed from a page. What is consistent is that a party where one person is unregistered has a problem at a checkpost, so the safe approach is to register everybody travelling and let the authorities tell you if someone is exempt.' },
    { question: 'How far in advance should I register?', answer: 'As soon as your dates are fixed. There is no advantage in waiting and there is a real cost to leaving it: the Haridwar and Rishikesh counters in May and June are serving the heaviest pilgrim volume of the year, and a twelve-day Char Dham itinerary with two walk days and two eight-hour legs has no slack to give to a queue.' },
    { question: 'Has the registration process changed?', answer: 'More than once. Biometric and photo verification have been introduced in some years, the information required has changed, and the checkpost arrangements differ season to season. That is why the only advice on this page we would stand behind indefinitely is to register before travelling and to confirm the current requirement for your specific dates — which we do with the authorities on any Char Dham booking.' },
  ],

  related: [
    { label: 'The twelve-day Char Dham circuit', href: '/char-dham-circuit-by-car' },
    { label: 'Char Dham yatra cost by car', href: '/char-dham-yatra-cost-by-car' },
    { label: 'Best time for Char Dham by road', href: '/best-time-for-char-dham-by-road' },
    { label: 'Char Dham yatra packages', href: '/chardham-yatra' },
    { label: 'Commercial vehicle state permits explained', href: '/commercial-vehicle-state-permits' },
    { label: 'Travelling with elderly parents by cab', href: '/travelling-with-elderly-parents-by-cab' },
  ],
};
