// src/utilis/ncrLocalityData.js
// ---------------------------------------------------------------------------
// NCR LOCALITY TIER — hyperlocal pickup-area landing pages.
//
// These are NOT outstation origin cities. tempoCities (in tempoTravellerData.js)
// models places we run long-distance routes *from*, and every entry there
// generates an origin -> destination route matrix across all three vehicle
// types. NCR localities are different: nobody searches "Indirapuram to Manali
// tempo traveller", they search "tempo traveller Indirapuram" because they want
// a vehicle at their gate. So this dataset is kept separate and its entries are
// flagged localityOnly — they render a dedicated, image-led locality template
// and are deliberately excluded from the outstation origin grid and from the
// route permutation builder.
//
// Cannibalisation note. Vaishali, Vasundhara, Indirapuram and Sahibabad all sit
// administratively inside Ghaziabad. Publishing five near-identical pages there
// would split one intent five ways, so the set is built hub-and-spoke instead:
// `ghaziabad` is the district hub (kind: 'city') and carries the city-wide
// terms; the four spokes (kind: 'locality', parent: 'ghaziabad') each own a
// genuinely different page — their own societies and sectors as pickup points,
// their own nearest metro, their own distance table and their own FAQs. The hub
// links down to the spokes and every spoke links back up, so the internal
// linking states plainly which page is the parent.
//
// Pricing is NOT defined here. Per-km and day-package rates come from
// vehicleTypeData.js via vehicleTypeConfig, so a rate change made there flows
// through every locality page and no page can drift out of sync with the
// published rate card.
// ---------------------------------------------------------------------------

// Render order — also the order of the "Other NCR pickup areas" grid.
export const NCR_LOCALITY_ORDER = [
  'noida',
  'greater-noida',
  'ghaziabad',
  'indirapuram',
  'vaishali',
  'vasundhara',
  'sahibabad',
  'gurgaon',
  'faridabad',
  'dwarka',
  'rohini',
  'janakpuri',
  'karol-bagh',
  'south-delhi',
];

// Airport landing pages share the locality template but carry an airport-shaped
// content model. Kept in the same file so the factory has one lookup table.
export const NCR_AIRPORT_ORDER = ['delhi-airport'];

// Reusable getaway cards. Every href below resolves to a route page that the
// tempo/urbania factory already generates from tempoRoutes.Delhi, so none of
// these links can 404. Images verified present under /public/images/sightseeing.
const G = {
  manali: { name: 'Manali', km: '540 km', hours: '12–13 hrs', img: '/images/sightseeing/Manali/Manali_hero_section.jpg', dest: 'manali' },
  shimla: { name: 'Shimla', km: '360 km', hours: '8–9 hrs', img: '/images/sightseeing/Shimla/shimla_hero_section.jpg', dest: 'shimla' },
  jaipur: { name: 'Jaipur', km: '270 km', hours: '5–6 hrs', img: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg', dest: 'jaipur' },
  agra: { name: 'Agra', km: '230 km', hours: '4–5 hrs', img: '/images/sightseeing/Agra/Agra_Hero_section.jpg', dest: 'agra' },
  haridwar: { name: 'Haridwar', km: '210 km', hours: '5 hrs', img: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg', dest: 'haridwar' },
  rishikesh: { name: 'Rishikesh', km: '240 km', hours: '5–6 hrs', img: '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg', dest: 'rishikesh' },
  nainital: { name: 'Nainital', km: '300 km', hours: '7 hrs', img: '/images/sightseeing/Nainital/Nainital_hero_section.jpg', dest: 'nainital' },
  mussoorie: { name: 'Mussoorie', km: '290 km', hours: '6–7 hrs', img: '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg', dest: 'mussoorie' },
  dehradun: { name: 'Dehradun', km: '260 km', hours: '6 hrs', img: '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg', dest: 'dehradun' },
  amritsar: { name: 'Amritsar', km: '450 km', hours: '9–10 hrs', img: '/images/sightseeing/Amritsar/Amristar_hero_section.jpg', dest: 'amritsar' },
  chandigarh: { name: 'Chandigarh', km: '250 km', hours: '5–6 hrs', img: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', dest: 'chandigarh' },
  jimCorbett: { name: 'Jim Corbett', km: '250 km', hours: '6 hrs', img: '/images/sightseeing/Jim_Corbett/Jim_corbett_hero_section.jpg', dest: 'jim-corbett' },
  mathura: { name: 'Mathura & Vrindavan', km: '180 km', hours: '3–4 hrs', img: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png', dest: 'mathura' },
  neemrana: { name: 'Neemrana', km: '130 km', hours: '2–3 hrs', img: '/images/sightseeing/Neemrana/Neemrana_hero_section.jpg', dest: 'neemrana' },
  vaishnoDevi: { name: 'Vaishno Devi', km: '640 km', hours: '13–14 hrs', img: '/images/sightseeing/Vaishno_Devi/Vaishno_Devi_hero_section.jpg', dest: 'vaishno-devi' },
  dharamshala: { name: 'Dharamshala', km: '480 km', hours: '10–11 hrs', img: '/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg', dest: 'dharamshala' },
  ayodhya: { name: 'Ayodhya', km: '680 km', hours: '11–12 hrs', img: '/images/sightseeing/Ayodhya/ayodha_hero_section.jpg', dest: 'ayodhya' },
  udaipur: { name: 'Udaipur', km: '660 km', hours: '11–12 hrs', img: '/images/sightseeing/Udaipur/Udaipur_hero_section.jpg', dest: 'udaipur' },
  kasauli: { name: 'Kasauli', km: '300 km', hours: '6–7 hrs', img: '/images/sightseeing/Kasauli/Kasauli_Hero_Section.jpg', dest: 'kasauli' },
};

// The getaway mix most groups from each sub-region actually book. Hill circuit
// leads out of the Delhi/West Delhi belt, the Uttarakhand corridor leads out of
// the trans-Hindon belt (they join NH-9/NH-58 directly), and Rajasthan leads
// out of Gurgaon and Faridabad because both sit on the Jaipur highway.
const GETAWAY_SETS = {
  hills: [G.manali, G.shimla, G.mussoorie, G.nainital, G.dharamshala, G.kasauli],
  uttarakhand: [G.haridwar, G.rishikesh, G.nainital, G.dehradun, G.jimCorbett, G.mussoorie],
  rajasthan: [G.jaipur, G.agra, G.neemrana, G.udaipur, G.mathura, G.shimla],
  balanced: [G.manali, G.shimla, G.haridwar, G.jaipur, G.agra, G.rishikesh],
  pilgrim: [G.haridwar, G.rishikesh, G.mathura, G.vaishnoDevi, G.ayodhya, G.jimCorbett],
  tourist: [G.agra, G.jaipur, G.manali, G.shimla, G.haridwar, G.amritsar],
};

// Standard use-case cards. Photography is drawn from the real fleet and wedding
// libraries — every path checked against /public/images.
const UC = {
  wedding: {
    title: 'Weddings & baraat',
    blurb: 'Guest shuttles between hotel, venue and station, running on a fixed loop through the night so nobody is left waiting at a gate.',
    img: '/images/wedding/premium_suv.jpg',
    iconName: 'Heart',
  },
  corporate: {
    title: 'Corporate & offsite',
    blurb: 'Staff transport, client visits and team offsites on monthly billing, with a GST invoice and the same driver assigned across the contract.',
    img: '/images/citypage_hero_section_image.jpg',
    iconName: 'Briefcase',
  },
  airport: {
    title: 'Airport group transfer',
    blurb: 'Flight-tracked pickups from IGI with room for the whole party and its luggage — one vehicle instead of four cabs arriving separately.',
    img: '/images/airport_section.jpg',
    iconName: 'Plane',
  },
  school: {
    title: 'School & college trips',
    blurb: 'Educational tours and university excursions with verified drivers, seat belts on every row and a teacher-accessible front seat.',
    img: '/images/tempo/26_seater.jpg',
    iconName: 'GraduationCap',
  },
  family: {
    title: 'Family holidays',
    blurb: 'Multi-generation trips where everyone travels together — pushchairs, walking frames and a fortnight of suitcases all fit in the boot.',
    img: '/images/tempo/17_seater.jpg',
    iconName: 'Users',
  },
  pilgrimage: {
    title: 'Pilgrimage groups',
    blurb: 'Char Dham, Vaishno Devi, Mathura–Vrindavan and Ayodhya circuits with drivers who know the halt points and the darshan timings.',
    img: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg',
    iconName: 'Landmark',
  },
  sightseeing: {
    title: 'Delhi sightseeing',
    blurb: 'Full-day city tours covering Red Fort, India Gate, Qutub Minar and Akshardham without repacking the group into taxis at every stop.',
    img: '/images/sightseeing/Delhi/India_Gate.jpg',
    iconName: 'Camera',
  },
  exhibition: {
    title: 'Exhibitions & conferences',
    blurb: 'Delegate shuttles for Expo Mart, Yashobhoomi and Pragati Maidan events, held on site between sessions rather than dismissed and re-booked.',
    img: '/images/bus/35_SEATER_BUS.jpg',
    iconName: 'Building2',
  },
};

export const ncrLocalities = {
  // =====================================================================
  // NOIDA — Gautam Buddha Nagar, UP. Both vehicle types.
  // =====================================================================
  noida: {
    slug: 'noida',
    name: 'Noida',
    displayName: 'Noida',
    kind: 'city',
    parent: null,
    localityOnly: true,
    vehicles: ['tempo-traveller', 'force-urbania'],
    district: 'Gautam Buddha Nagar',
    state: 'Uttar Pradesh',
    region: 'Delhi NCR',
    accent: '#2563EB',
    landmark: 'DLF Mall of India, Sector 18',
    tagline: 'Sector-to-sector pickups across the Expressway city',
    heroImage: '/images/sightseeing/Delhi/Akshardham_Temple.jpg',
    heroAlt: 'Akshardham Temple, the landmark at the Delhi–Noida crossing, on the tempo traveller sightseeing circuit',
    intro:
      'Noida is laid out as a grid of numbered sectors, which is a gift when you are arranging group transport: a driver given "Sector 62, C Block gate" finds it first time, with no landmark hunting. We run tempo travellers and Force Urbania coaches across the whole of it — the office belt in Sectors 62, 63, 125 and 126, the residential sectors along the Expressway, and the Sector 18 hotel and market cluster where most visiting groups stay.',
    whyLocal:
      'Two things make Noida different from the rest of NCR. The first is the Expressway, which means a group heading for Agra or Jaipur is on an open highway within minutes rather than crawling through Delhi. The second is the sheer density of corporate campuses, so a large share of our Noida work is recurring staff and client transport rather than one-off holidays.',
    pickupAreas: [
      'Sector 18 & Atta Market', 'Sector 62', 'Sector 63', 'Sector 15', 'Sector 16',
      'Sector 12–22 residential', 'Sector 50', 'Sector 51', 'Sector 76–79',
      'Sector 93 & 93A', 'Sector 100', 'Sector 104', 'Sector 128 (Jaypee Wish Town)',
      'Sector 137', 'Sector 168', 'Film City', 'Botanical Garden', 'Noida City Centre',
      'Sector 125–126 (IT belt)', 'Noida Expressway', 'Mahamaya Flyover', 'Sector 37',
    ],
    landmarks: [
      { name: 'DLF Mall of India', note: 'Sector 18 — the usual meeting point for tour groups' },
      { name: 'Great India Place', note: 'Sector 38A, opposite the Noida City Centre metro' },
      { name: 'Botanical Garden Metro', note: 'Blue and Magenta line interchange' },
      { name: 'Worlds of Wonder', note: 'School and college group pickups' },
      { name: 'Noida Film City', note: 'Sector 16A media and production crews' },
      { name: 'Sector 137 Metro', note: 'Aqua Line, for the Expressway societies' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '35–40 km', time: '60–80 min', iconName: 'Plane' },
      { label: 'Jewar (Noida International)', distance: '55 km', time: '70–80 min', iconName: 'Plane' },
      { label: 'New Delhi Railway Station', distance: '25 km', time: '50–70 min', iconName: 'TrainFront' },
      { label: 'Anand Vihar ISBT & Terminal', distance: '15 km', time: '30–40 min', iconName: 'Bus' },
      { label: 'Connaught Place', distance: '22 km', time: '45–60 min', iconName: 'Landmark' },
      { label: 'Yamuna Expressway toll', distance: '20 km', time: '30 min', iconName: 'Milestone' },
    ],
    useCases: [UC.corporate, UC.airport, UC.wedding, UC.family, UC.school, UC.sightseeing],
    getaways: GETAWAY_SETS.balanced,
    gallery: [
      { img: '/images/tempo/17_seater.jpg', title: '17-seater interior', caption: 'The size most Noida corporate teams book — pushback seats, individual AC vents and full standing headroom down the aisle.' },
      { img: '/images/sightseeing/Delhi/Akshardham_Temple.jpg', title: 'Akshardham', caption: 'Ten minutes from the Noida border and the first stop on almost every sightseeing day we run from the city.' },
      { img: '/images/tempo/26_seater.jpg', title: '26-seater', caption: 'For full-floor offsites and school excursions leaving from the Sector 62 and 63 campuses.' },
      { img: '/images/airport_section.jpg', title: 'IGI transfers', caption: 'Flight-tracked runs to Terminal 3, with the driver holding at the gate until the last bag is out.' },
    ],
    nearby: ['greater-noida', 'ghaziabad', 'indirapuram', 'south-delhi', 'gurgaon'],
    faqs: [
      { q: 'Which Noida sectors do you pick up from?',
        a: 'All of them. We run pickups across the full sector grid — the Sector 18 hotel and market cluster, the office belt in 62, 63, 125 and 126, the residential sectors from 12 through 22 and 50 through 79, and the Expressway societies in 128, 137 and 168. Give the driver a sector and block number and that is enough; Noida addressing is precise enough that no landmark is needed.' },
      { q: 'How long does it take to reach IGI Airport Terminal 3 from Noida?',
        a: 'Budget 60 to 80 minutes for the 35 to 40 km through the DND or Kalindi Kunj, depending on which sector you start from and the time of day. For a morning flight out of T3 we normally suggest leaving four hours before departure, because the DND and the Ring Road both back up badly between 8am and 11am.' },
      { q: 'Do you offer monthly corporate contracts in Noida?',
        a: 'Yes, and it is a large part of what we do in the city. Companies in Sectors 62, 63, 125 and 126 book recurring staff shuttles and client transport on monthly billing with a proper GST invoice. We assign the same driver across the contract wherever we can, which matters more than most people expect — a driver who already knows your campus gate and security process saves ten minutes every single run.' },
      { q: 'Can the vehicle stay with us for a full day in Noida?',
        a: 'Yes. The local day package covers 80 km and 8 hours within the city and is the right choice when you need the vehicle held between stops — a wedding, a site visit or a day of client meetings. Beyond the included kilometres and hours, extra usage is billed at the published per-km and per-hour rate, which is shown to you before you confirm.' },
      { q: 'Is Noida to Agra or Jaipur a comfortable day trip by tempo traveller?',
        a: 'Agra certainly is — the Yamuna Expressway toll plaza is about 20 km from central Noida and the run down is roughly four hours, so a same-day Taj Mahal trip is very doable. Jaipur at 270 km is better as an overnight; you can do it in a day but it makes for a fourteen-hour stretch and nobody enjoys the last part of it.' },
    ],
  },

  // =====================================================================
  // GREATER NOIDA
  // =====================================================================
  'greater-noida': {
    slug: 'greater-noida',
    name: 'Greater Noida',
    displayName: 'Greater Noida',
    kind: 'city',
    parent: null,
    localityOnly: true,
    vehicles: ['tempo-traveller'],
    district: 'Gautam Buddha Nagar',
    state: 'Uttar Pradesh',
    region: 'Delhi NCR',
    accent: '#0D9488',
    landmark: 'Pari Chowk',
    tagline: 'Pari Chowk, the university belt and Noida Extension',
    heroImage: '/images/tempo/20_seater.jpg',
    heroAlt: '20-seater tempo traveller used for university and exhibition groups in Greater Noida',
    intro:
      'Greater Noida runs on a different rhythm to the rest of NCR. Its passenger traffic is dominated by two things — the university campuses clustered around Knowledge Park, and the exhibition calendar at India Expo Mart. Both move people in whole groups rather than ones and twos, which is exactly what a tempo traveller is for. We cover the planned sectors around Pari Chowk, the Greater Noida West corridor that everyone still calls Noida Extension, and the industrial blocks at Ecotech and Surajpur.',
    whyLocal:
      'Distance is the thing to plan around here. Greater Noida is a genuine 55 km from IGI, so an early flight means a pickup that feels uncomfortably early — and the trip back at the end of a trade fair coincides with the worst of the Expressway traffic. We build both into the quote rather than discovering them on the day.',
    pickupAreas: [
      'Pari Chowk', 'Alpha 1', 'Alpha 2', 'Beta 1', 'Beta 2', 'Gamma 1', 'Gamma 2',
      'Delta 1–3', 'Knowledge Park I–V', 'Jagat Farm', 'Omega 1–4', 'Sector Chi',
      'Greater Noida West', 'Gaur City', 'Ek Murti Chowk', 'Surajpur', 'Ecotech I–III',
      'Sector 1 & 2 (Noida Extension)', 'Bisrakh', 'Techzone IV', 'Knowledge Park III',
    ],
    landmarks: [
      { name: 'India Expo Mart', note: 'Exhibition and delegate shuttles, Knowledge Park II' },
      { name: 'Buddh International Circuit', note: 'Event-day group transport' },
      { name: 'Galgotias University', note: 'Knowledge Park II educational tours' },
      { name: 'Sharda University', note: 'Knowledge Park III excursions' },
      { name: 'Bennett University', note: 'Techzone II campus trips' },
      { name: 'Pari Chowk Metro', note: 'Aqua Line, the default meeting point' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '55 km', time: '80–100 min', iconName: 'Plane' },
      { label: 'Jewar (Noida International)', distance: '40 km', time: '45–55 min', iconName: 'Plane' },
      { label: 'New Delhi Railway Station', distance: '45 km', time: '75–90 min', iconName: 'TrainFront' },
      { label: 'Anand Vihar ISBT', distance: '35 km', time: '60–70 min', iconName: 'Bus' },
      { label: 'Noida Sector 18', distance: '22 km', time: '35–45 min', iconName: 'Landmark' },
      { label: 'India Expo Mart', distance: '3 km', time: '10 min', iconName: 'Building2' },
    ],
    useCases: [UC.school, UC.exhibition, UC.corporate, UC.airport, UC.family, UC.wedding],
    getaways: GETAWAY_SETS.balanced,
    gallery: [
      { img: '/images/tempo/26_seater.jpg', title: '26-seater', caption: 'The workhorse for university excursions out of Knowledge Park — a full class travels as one group.' },
      { img: '/images/bus/35_SEATER_BUS.jpg', title: '35-seater coach', caption: 'When an Expo Mart delegation outgrows a tempo traveller, we move it up to a coach rather than splitting it.' },
      { img: '/images/tempo/17_seater.jpg', title: '17-seater', caption: 'Faculty groups and smaller departmental trips, with luggage space for a multi-day itinerary.' },
      { img: '/images/sightseeing/Agra/Agra_Hero_section.jpg', title: 'Agra day trips', caption: 'The Yamuna Expressway makes Agra closer from Greater Noida than most of Delhi is.' },
    ],
    nearby: ['noida', 'ghaziabad', 'indirapuram', 'vaishali', 'south-delhi'],
    faqs: [
      { q: 'Do you provide tempo travellers for India Expo Mart events?',
        a: 'Yes — exhibition work is one of our main reasons for being in Greater Noida. We handle delegate shuttles between hotels and the Expo Mart halls, airport transfers for arriving exhibitors, and vehicles held on site through the day so a team can come and go between sessions instead of rebooking each time. For the larger fairs it is worth blocking vehicles several weeks ahead, because local supply genuinely runs out.' },
      { q: 'Can you handle university and college group trips?',
        a: 'Regularly. Galgotias, Sharda, Bennett and the other Knowledge Park campuses book us for educational tours, industrial visits and annual excursions. Every vehicle carries a verified driver, seat belts on all rows and a front seat kept free for the accompanying faculty member. For overnight trips we share the driver details in advance so the institution has them on file.' },
      { q: 'How far is Greater Noida from IGI Airport?',
        a: 'About 55 km, which realistically means 80 to 100 minutes and rather more in the morning peak. If your flight leaves before 9am we will usually suggest a pickup that feels too early by an hour — that hour is the difference between arriving relaxed and arriving at a closed check-in desk. Jewar airport, once you are flying from it, is a much easier 40 km.' },
      { q: 'Do you cover Greater Noida West and Gaur City?',
        a: 'Yes. The whole Greater Noida West corridor — Gaur City, Ek Murti Chowk, Bisrakh, Techzone IV and the Sector 1 and 2 societies — is inside our standard pickup area at no extra charge. It is a busy stretch for us, mostly family holidays and airport runs from the larger residential towers.' },
      { q: 'What is the best vehicle for a group of 20 from Greater Noida?',
        a: 'A 20-seater tempo traveller fits exactly, but for a party of that size on a multi-day trip we normally recommend the 26-seater instead. The extra rows are not really about the seats — they are about the luggage. Twenty people on a five-day trip generate more bags than a 20-seater boot will take, and the difference in cost is far smaller than the discomfort of a packed aisle.' },
    ],
  },

  // =====================================================================
  // GHAZIABAD — district hub for the four trans-Hindon spokes
  // =====================================================================
  ghaziabad: {
    slug: 'ghaziabad',
    name: 'Ghaziabad',
    displayName: 'Ghaziabad',
    kind: 'city',
    parent: null,
    localityOnly: true,
    isHub: true,
    children: ['indirapuram', 'vaishali', 'vasundhara', 'sahibabad'],
    vehicles: ['tempo-traveller'],
    district: 'Ghaziabad',
    state: 'Uttar Pradesh',
    region: 'Delhi NCR',
    accent: '#C2410C',
    landmark: 'Raj Nagar District Centre',
    tagline: 'The whole district, from Raj Nagar to the Hindon',
    heroImage: '/images/tempo/16_seater.jpg',
    heroAlt: '16-seater AC tempo traveller on hire across Ghaziabad district',
    intro:
      'Ghaziabad is a large district and a group booking here can mean two quite different things. It might mean Raj Nagar, Mohan Nagar or Crossings Republik on the city side, or it might mean the trans-Hindon belt — Indirapuram, Vaishali, Vasundhara and Sahibabad — which is closer to Delhi than to Ghaziabad proper and behaves like its own place. This page covers the district as a whole; each of those four has its own page below with its own pickup points and its own timings, because the drive to the airport from Vaishali and from Raj Nagar are not the same journey at all.',
    whyLocal:
      'The district sits on NH-9 and NH-58, which is why so much of our Ghaziabad work heads for Uttarakhand. A group leaving Raj Nagar for Haridwar is on the highway almost immediately and avoids Delhi entirely — the same trip started from West Delhi costs an extra hour before it has really begun.',
    pickupAreas: [
      'Raj Nagar', 'Raj Nagar Extension', 'Kavi Nagar', 'Nehru Nagar', 'Govindpuram',
      'Mohan Nagar', 'Crossings Republik', 'Shalimar Garden', 'Model Town',
      'Ghaziabad Railway Station', 'Lohia Nagar', 'Patel Nagar', 'Sanjay Nagar',
      'Vasundhara', 'Vaishali', 'Indirapuram', 'Sahibabad', 'Kaushambi',
      'Wave City', 'Siddharth Vihar', 'Bhopura', 'Loni Road',
    ],
    landmarks: [
      { name: 'Raj Nagar District Centre', note: 'The main commercial pickup point' },
      { name: 'Ghaziabad Junction', note: 'Railway station transfers for arriving groups' },
      { name: 'Mohan Nagar', note: 'Red Line metro and the GT Road junction' },
      { name: 'Pacific Mall, Sahibabad', note: 'A common group meeting point' },
      { name: 'Hindon Civil Terminal', note: 'Regional flights, 8 km from the city' },
      { name: 'Crossings Republik', note: 'Township pickups off NH-9' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '45–50 km', time: '75–95 min', iconName: 'Plane' },
      { label: 'Hindon Civil Terminal', distance: '8 km', time: '20 min', iconName: 'Plane' },
      { label: 'New Delhi Railway Station', distance: '30 km', time: '55–70 min', iconName: 'TrainFront' },
      { label: 'Anand Vihar ISBT', distance: '15 km', time: '30–40 min', iconName: 'Bus' },
      { label: 'Kashmere Gate ISBT', distance: '25 km', time: '45–60 min', iconName: 'Bus' },
      { label: 'Haridwar (via NH-58)', distance: '180 km', time: '4–5 hrs', iconName: 'Milestone' },
    ],
    useCases: [UC.family, UC.pilgrimage, UC.wedding, UC.airport, UC.corporate, UC.school],
    getaways: GETAWAY_SETS.uttarakhand,
    gallery: [
      { img: '/images/tempo/16_seater.jpg', title: '16-seater', caption: 'The most-booked size across Ghaziabad — big enough for an extended family, small enough for the older colony lanes.' },
      { img: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg', title: 'Haridwar', caption: 'NH-58 runs straight from the district to Har Ki Pauri, which is why so many Ghaziabad bookings are pilgrimage trips.' },
      { img: '/images/tempo/20_seater.jpg', title: '20-seater', caption: 'Wedding guest shuttles and the larger joint-family bookings out of Raj Nagar and Govindpuram.' },
      { img: '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg', title: 'Rishikesh', caption: 'A four-hour run from the district — comfortably a long weekend rather than a full holiday.' },
    ],
    nearby: ['indirapuram', 'vaishali', 'vasundhara', 'sahibabad', 'noida', 'greater-noida'],
    faqs: [
      { q: 'Which parts of Ghaziabad district do you cover?',
        a: 'All of it. On the city side that means Raj Nagar and Raj Nagar Extension, Kavi Nagar, Nehru Nagar, Govindpuram, Mohan Nagar, Model Town and Crossings Republik. Across the Hindon it means Indirapuram, Vaishali, Vasundhara, Sahibabad and Kaushambi — each of which has its own page with pickup points and timings specific to that area, because the journey times from the two halves of the district are genuinely different.' },
      { q: 'Why is Ghaziabad good for Uttarakhand trips?',
        a: 'Geography. NH-58 leaves the district heading straight for Meerut, Roorkee and Haridwar, so a group starting here never has to cross Delhi. Haridwar is around 180 km and four to five hours; Rishikesh is a little further. The same trip starting from Gurgaon or West Delhi loses well over an hour just getting to the same point on the highway.' },
      { q: 'How far is Ghaziabad from IGI Airport?',
        a: 'From the city side, 45 to 50 km and typically 75 to 95 minutes. It is one of the longer airport runs in NCR and the traffic through East Delhi is unpredictable, so we plan Ghaziabad airport departures conservatively. If you are in the trans-Hindon belt the distance drops considerably — Vaishali is closer to 32 km.' },
      { q: 'Can I hire a tempo traveller for a wedding in Ghaziabad?',
        a: 'Yes, and it is one of our busiest categories here. The usual arrangement is a vehicle running a fixed loop between the hotel, the venue and the railway station across the evening, so out-of-town guests are never stranded. For a Ghaziabad wedding in the November to February peak, book several weeks out — local availability tightens sharply in that window.' },
      { q: 'Do you pick up from Ghaziabad Junction railway station?',
        a: 'Yes. For arriving groups we track the train rather than the scheduled time, so a late arrival does not mean a vehicle that has already left. The driver waits at the station car park with a nameboard and helps load luggage, which matters when a family of fifteen comes off a sleeper coach with a fortnight of bags.' },
    ],
  },

  // =====================================================================
  // INDIRAPURAM — spoke of Ghaziabad
  // =====================================================================
  indirapuram: {
    slug: 'indirapuram',
    name: 'Indirapuram',
    displayName: 'Indirapuram',
    kind: 'locality',
    parent: 'ghaziabad',
    localityOnly: true,
    vehicles: ['tempo-traveller'],
    district: 'Ghaziabad',
    state: 'Uttar Pradesh',
    region: 'Delhi NCR',
    accent: '#7C3AED',
    landmark: 'Shipra Mall, Ahinsa Khand',
    tagline: 'Every khand, from Ahinsa to Niti',
    heroImage: '/images/tempo/17_seater.jpg',
    heroAlt: '17-seater tempo traveller on rent for group pickups across Indirapuram',
    intro:
      'Indirapuram is organised into khands rather than sectors, and if you have ever tried to explain the difference between Ahinsa Khand 1 and Ahinsa Khand 2 to a driver who does not know the area, you already understand why this page exists. Our drivers do know it. We pick up from every khand — Ahinsa, Nyay, Vaibhav, Shakti, Gyan, Niti and Abhay — along with the society gates inside them, which is usually the detail that actually matters.',
    whyLocal:
      'The township is dense with high-rise societies and its internal roads are narrow and heavily parked. That has a practical consequence for group travel: a 26-seater cannot always get to a tower gate. For the tighter societies we will often suggest a 16-seater, or arrange to load at the main road rather than have the group wait while a large vehicle attempts a three-point turn in a service lane.',
    pickupAreas: [
      'Ahinsa Khand 1', 'Ahinsa Khand 2', 'Nyay Khand 1', 'Nyay Khand 2', 'Nyay Khand 3',
      'Vaibhav Khand', 'Shakti Khand 1', 'Shakti Khand 2', 'Shakti Khand 3', 'Shakti Khand 4',
      'Gyan Khand 1–4', 'Niti Khand 1–3', 'Abhay Khand', 'Shipra Sun City',
      'Gaur Green Avenue', 'Windsor Park', 'Shipra Krishna Vista', 'Habitat Centre',
      'Aditya Mall', 'Shipra Mall', 'Vasundhara border', 'Kanawani',
    ],
    landmarks: [
      { name: 'Shipra Mall', note: 'Ahinsa Khand 1 — the default group meeting point' },
      { name: 'Aditya Mall', note: 'Vaibhav Khand, easy for large vehicles to wait' },
      { name: 'Habitat Centre', note: 'Ahinsa Khand 1 event and function pickups' },
      { name: 'Vaishali Metro', note: 'Blue Line, about 4 km — the nearest station' },
      { name: 'Jaipuria Sunrise Plaza', note: 'Ahinsa Khand 1' },
      { name: 'Kanawani Pusta Road', note: 'The shortest link across to Noida' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '38 km', time: '65–85 min', iconName: 'Plane' },
      { label: 'Anand Vihar ISBT & Terminal', distance: '8 km', time: '20–30 min', iconName: 'Bus' },
      { label: 'New Delhi Railway Station', distance: '25 km', time: '50–65 min', iconName: 'TrainFront' },
      { label: 'Vaishali Metro Station', distance: '4 km', time: '12–15 min', iconName: 'Navigation' },
      { label: 'Noida Sector 18', distance: '12 km', time: '25–35 min', iconName: 'Landmark' },
      { label: 'Ghaziabad city (Raj Nagar)', distance: '15 km', time: '30–40 min', iconName: 'Building2' },
    ],
    useCases: [UC.family, UC.airport, UC.pilgrimage, UC.wedding, UC.school, UC.corporate],
    getaways: GETAWAY_SETS.uttarakhand,
    gallery: [
      { img: '/images/tempo/17_seater.jpg', title: '17-seater', caption: 'The best balance for Indirapuram — room for a large family, still able to reach most society gates.' },
      { img: '/images/tempo/12_seater.jpg', title: '12-seater', caption: 'Our recommendation for the tighter Shakti Khand and Niti Khand lanes where parking is heaviest.' },
      { img: '/images/sightseeing/Nainital/Nainital_hero_section.jpg', title: 'Nainital', caption: 'A favourite from the trans-Hindon belt — seven hours out along NH-9 and the Moradabad bypass.' },
      { img: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg', title: 'Haridwar', caption: 'The most-booked pilgrimage run from Indirapuram, usually as a two-night trip.' },
    ],
    nearby: ['vaishali', 'vasundhara', 'sahibabad', 'ghaziabad', 'noida'],
    faqs: [
      { q: 'Do you pick up from inside Indirapuram societies?',
        a: 'Yes, gate pickup is standard and there is no extra charge for it. Give us the khand and the society name — Ahinsa Khand 1, Shipra Sun City, for example — and the driver will be at the tower gate at the agreed time. Where a society has more than one gate it is worth naming which one, because in the larger complexes the difference between them can be a five-minute walk with luggage.' },
      { q: 'Which is the nearest metro station to Indirapuram?',
        a: 'Vaishali, on the Blue Line, about 4 km away and twelve to fifteen minutes by road. Some groups arrive at Vaishali by metro and join the tempo traveller there rather than having it come into the township — for a large party with luggage that is often the smoother option, and we are happy to make the station the pickup point.' },
      { q: 'What size vehicle works best in Indirapuram?',
        a: 'For most bookings the 17-seater. It carries a full extended family and still gets into the majority of society gates. In the more tightly parked pockets — parts of Shakti Khand and Niti Khand — a 12 or 16-seater is the safer choice, and for anything above 20 passengers we usually arrange to load on the main road rather than send a large vehicle down a service lane. We will tell you which applies when you give us the address; it is not something you should have to work out.' },
      { q: 'How far is Indirapuram from IGI Airport?',
        a: 'Around 38 km, normally 65 to 85 minutes via the NH-9 and the Ring Road, or through Noida and the DND when the Ring Road is congested. Anand Vihar is much closer at roughly 8 km, so for groups travelling onward by train or bus that is often the better connection.' },
      { q: 'Can I book a tempo traveller from Indirapuram for a Char Dham or Haridwar trip?',
        a: 'Yes, and this is one of the most common requests we get from the area. Indirapuram sits well for it — NH-58 is reachable without crossing Delhi, so a Haridwar trip is four to five hours. For the full Char Dham circuit we assign drivers who have run the hill sections before, which is not a formality: the Kedarnath and Badrinath approaches are demanding and an unfamiliar driver on them is a genuine risk.' },
    ],
  },

  // =====================================================================
  // VAISHALI — spoke of Ghaziabad
  // =====================================================================
  vaishali: {
    slug: 'vaishali',
    name: 'Vaishali',
    displayName: 'Vaishali',
    kind: 'locality',
    parent: 'ghaziabad',
    localityOnly: true,
    vehicles: ['tempo-traveller'],
    district: 'Ghaziabad',
    state: 'Uttar Pradesh',
    region: 'Delhi NCR',
    accent: '#0891B2',
    landmark: 'Vaishali Metro Station',
    tagline: 'The Blue Line terminus and Sectors 1 to 9',
    heroImage: '/images/tempo/16_seater.jpg',
    heroAlt: '16-seater AC tempo traveller for hire near Vaishali Metro Station, Ghaziabad',
    intro:
      'Vaishali has one advantage nowhere else in the trans-Hindon belt can match: it is the terminus of the Blue Line, which makes it the natural assembly point for a group scattered across NCR. People arrive by metro from Dwarka, Noida or central Delhi, meet at the station, and leave together in one vehicle. We use it that way constantly, and the station car park is where a good number of our Ghaziabad trips actually begin.',
    whyLocal:
      'Being on the metro also makes Vaishali the closest part of Ghaziabad to Delhi in practical terms. At roughly 32 km, the airport run is over ten kilometres shorter than from Raj Nagar, which on an early-morning departure is the difference between leaving at four and leaving at half past four.',
    pickupAreas: [
      'Vaishali Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5',
      'Sector 6', 'Sector 7', 'Sector 8', 'Sector 9', 'Vaishali Metro Station',
      'Mahagun Metro Mall', 'Ramprastha Greens', 'Vaishali Extension',
      'Sector 4 market', 'Kaushambi border', 'Vasundhara border',
      'Ramprastha Colony', 'Chander Nagar', 'Sector 3 DPS road',
    ],
    landmarks: [
      { name: 'Vaishali Metro Station', note: 'Blue Line terminus — the main pickup point' },
      { name: 'Mahagun Metro Mall', note: 'Sector 3, straightforward parking for large vehicles' },
      { name: 'Ramprastha Greens', note: 'Township gate pickups' },
      { name: 'Anand Vihar Terminal', note: 'Around 5 km — rail and bus transfers' },
      { name: 'Kaushambi bus depot', note: 'The interstate coach connection' },
      { name: 'Pacific Mall, Kaushambi', note: 'A short hop across the boundary' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '32 km', time: '55–75 min', iconName: 'Plane' },
      { label: 'Anand Vihar ISBT & Terminal', distance: '5 km', time: '12–20 min', iconName: 'Bus' },
      { label: 'New Delhi Railway Station', distance: '20 km', time: '40–55 min', iconName: 'TrainFront' },
      { label: 'Connaught Place', distance: '18 km', time: '35–50 min', iconName: 'Landmark' },
      { label: 'Noida Sector 18', distance: '14 km', time: '25–35 min', iconName: 'Navigation' },
      { label: 'Ghaziabad city (Raj Nagar)', distance: '16 km', time: '30–40 min', iconName: 'Building2' },
    ],
    useCases: [UC.airport, UC.family, UC.pilgrimage, UC.wedding, UC.corporate, UC.sightseeing],
    getaways: GETAWAY_SETS.uttarakhand,
    gallery: [
      { img: '/images/tempo/16_seater.jpg', title: '16-seater', caption: 'The size we most often send to Vaishali Metro for a group assembling from across the city.' },
      { img: '/images/airport_section.jpg', title: 'Airport runs', caption: 'At 32 km, Vaishali has the shortest IGI transfer of anywhere in Ghaziabad district.' },
      { img: '/images/tempo/20_seater.jpg', title: '20-seater', caption: 'Wedding shuttles working the loop between Vaishali, Kaushambi and Anand Vihar.' },
      { img: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png', title: 'Mathura & Vrindavan', caption: 'A comfortable same-day return from Vaishali at around 180 km each way.' },
    ],
    nearby: ['vasundhara', 'indirapuram', 'sahibabad', 'ghaziabad', 'noida'],
    faqs: [
      { q: 'Can we meet the tempo traveller at Vaishali Metro Station?',
        a: 'Yes, and for a group coming together from different parts of NCR it is usually the sensible choice. Vaishali is the Blue Line terminus, so people can travel in from Dwarka, Rajiv Chowk, Noida or anywhere along the line and board in one place. The driver waits in the station car park and will call as you come up from the platform.' },
      { q: 'How far is Vaishali from IGI Airport?',
        a: 'About 32 km, generally 55 to 75 minutes. That makes it the quickest airport connection anywhere in Ghaziabad district — more than ten kilometres shorter than from the Raj Nagar side. For a flight before 8am we would still suggest leaving around three and a half hours ahead, because the Ring Road is unforgiving if anything goes wrong.' },
      { q: 'Do you cover Vaishali Sectors 1 to 9 and Ramprastha Greens?',
        a: 'All nine sectors and the surrounding townships, Ramprastha Greens and Ramprastha Colony included. Vaishali is compact and its roads are wider than most of Indirapuram, so a full-size vehicle can reach almost any address here without difficulty — we rarely need to suggest loading on the main road as we sometimes do across in the khands.' },
      { q: 'Is Vaishali a good pickup point for Anand Vihar train connections?',
        a: 'Very much so — the terminal is only about 5 km away, twelve to twenty minutes in normal traffic. Groups arriving on a long-distance train frequently have us collect them at Anand Vihar and drive on from there, and we track the actual train rather than the timetable so a delayed arrival does not leave you looking for a vehicle that has gone.' },
      { q: 'What does a local day booking include in Vaishali?',
        a: 'The local package covers 80 km and 8 hours, which for a day spent between Vaishali, Delhi and Noida is normally more than enough. The vehicle stays with you throughout rather than dropping and returning, so you can leave belongings on board between stops. Anything beyond the included distance or time is charged at the published per-km and per-hour rate, quoted up front.' },
    ],
  },

  // =====================================================================
  // VASUNDHARA — spoke of Ghaziabad
  // =====================================================================
  vasundhara: {
    slug: 'vasundhara',
    name: 'Vasundhara',
    displayName: 'Vasundhara',
    kind: 'locality',
    parent: 'ghaziabad',
    localityOnly: true,
    vehicles: ['tempo-traveller'],
    district: 'Ghaziabad',
    state: 'Uttar Pradesh',
    region: 'Delhi NCR',
    accent: '#059669',
    landmark: 'Vasundhara Sector 13',
    tagline: 'Sectors 1 to 19 and the Ramprastha belt',
    heroImage: '/images/tempo/12_seater.jpg',
    heroAlt: '12-seater tempo traveller on rent in Vasundhara, Ghaziabad',
    intro:
      'Vasundhara is a planned residential township of nineteen sectors sitting between Vaishali and the Hindon, and it is almost entirely a family-travel market for us. The bookings that come out of here are holidays, pilgrimages and wedding shuttles rather than corporate contracts, which shapes what we send: comfortable mid-size vehicles, generous luggage space, and drivers who are patient about a departure that slips twenty minutes because somebody is still locking up the flat.',
    whyLocal:
      'The township sits within a few kilometres of Vaishali metro and Anand Vihar, so it inherits their connectivity without their congestion. That combination — quiet internal roads, quick access to the main arteries — makes it one of the easier places in NCR to run a large vehicle out of at short notice.',
    pickupAreas: [
      'Vasundhara Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5',
      'Sector 6', 'Sector 7', 'Sector 9', 'Sector 10', 'Sector 11',
      'Sector 12', 'Sector 13', 'Sector 14', 'Sector 15', 'Sector 16',
      'Sector 17', 'Sector 18', 'Sector 19', 'Vasundhara Enclave road',
      'Sector 13 market', 'Ramprastha border', 'Sahibabad border',
    ],
    landmarks: [
      { name: 'Vasundhara Sector 13 market', note: 'The main commercial pickup point' },
      { name: 'Sector 15 crossing', note: 'Easy holding spot for larger vehicles' },
      { name: 'Vaishali Metro', note: 'Around 3 km — the nearest station' },
      { name: 'Shipra Mall, Indirapuram', note: 'Roughly 5 km across the boundary' },
      { name: 'Sahibabad RRTS station', note: 'Namo Bharat connection to Meerut' },
      { name: 'Anand Vihar Terminal', note: 'About 7 km for rail and bus links' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '35 km', time: '60–80 min', iconName: 'Plane' },
      { label: 'Anand Vihar ISBT & Terminal', distance: '7 km', time: '15–25 min', iconName: 'Bus' },
      { label: 'New Delhi Railway Station', distance: '22 km', time: '45–60 min', iconName: 'TrainFront' },
      { label: 'Vaishali Metro Station', distance: '3 km', time: '10 min', iconName: 'Navigation' },
      { label: 'Noida Sector 18', distance: '15 km', time: '30–40 min', iconName: 'Landmark' },
      { label: 'Ghaziabad city (Raj Nagar)', distance: '13 km', time: '25–35 min', iconName: 'Building2' },
    ],
    useCases: [UC.family, UC.pilgrimage, UC.wedding, UC.airport, UC.sightseeing, UC.school],
    getaways: GETAWAY_SETS.uttarakhand,
    gallery: [
      { img: '/images/tempo/12_seater.jpg', title: '12-seater', caption: 'The most-booked size in Vasundhara — a single family, comfortably, with the boot still usable.' },
      { img: '/images/tempo/17_seater.jpg', title: '17-seater', caption: 'For joint-family holidays and the larger wedding parties out of the Sector 13 and 15 blocks.' },
      { img: '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg', title: 'Rishikesh', caption: 'Five to six hours from Vasundhara without touching Delhi, which is most of the appeal.' },
      { img: '/images/sightseeing/Jim_Corbett/Jim_corbett_hero_section.jpg', title: 'Jim Corbett', caption: 'A popular long weekend — six hours out, and the vehicle stays with you for the park transfers.' },
    ],
    nearby: ['vaishali', 'indirapuram', 'sahibabad', 'ghaziabad', 'noida'],
    faqs: [
      { q: 'Do you cover all Vasundhara sectors?',
        a: 'Yes, Sectors 1 through 19 including the Sector 13 and 15 market areas and the roads bordering Ramprastha and Sahibabad. Vasundhara is straightforward for us to work in — the internal roads are wide and the sector numbering is unambiguous, so a full-size tempo traveller can reach essentially any address without the manoeuvring problems we hit in some neighbouring townships.' },
      { q: 'How far is Vasundhara from Delhi Airport?',
        a: 'Roughly 35 km, usually 60 to 80 minutes. The route runs through Anand Vihar and the Ring Road, or via NH-9 and the DND if the Ring Road is heavy — the driver will pick on the morning based on live conditions rather than committing in advance.' },
      { q: 'What is the nearest metro station to Vasundhara?',
        a: 'Vaishali, about 3 km away and roughly ten minutes by road. Sahibabad also now has a Namo Bharat RRTS station a short distance off, which is genuinely useful if part of your group is coming down from Meerut — they can ride in and join the vehicle rather than making their own way across.' },
      { q: 'Can I book a tempo traveller in Vasundhara for a wedding?',
        a: 'Yes. The usual pattern here is a vehicle running between the family home, the banquet hall and Anand Vihar or Ghaziabad Junction for guests arriving by train. We can hold the vehicle overnight for late functions, which is worth arranging in advance rather than on the night — availability in the November to February wedding season disappears quickly.' },
      { q: 'Is a 12-seater enough for a family trip from Vasundhara?',
        a: 'For eleven passengers and moderate luggage, yes, and it is our most-booked size in the township. The honest caveat is luggage: eleven people on a week-long hill trip will fill a 12-seater boot and then start using the back row. If your group is at the upper end of that or the trip runs beyond four or five days, the 17-seater costs a little more per day and removes the problem entirely.' },
    ],
  },

  // =====================================================================
  // SAHIBABAD — spoke of Ghaziabad
  // =====================================================================
  sahibabad: {
    slug: 'sahibabad',
    name: 'Sahibabad',
    displayName: 'Sahibabad',
    kind: 'locality',
    parent: 'ghaziabad',
    localityOnly: true,
    vehicles: ['tempo-traveller'],
    district: 'Ghaziabad',
    state: 'Uttar Pradesh',
    region: 'Delhi NCR',
    accent: '#B45309',
    landmark: 'Sahibabad Namo Bharat station',
    tagline: 'The industrial belt and the RRTS corridor',
    heroImage: '/images/tempo/20_seater.jpg',
    heroAlt: '20-seater tempo traveller for staff and group transport in Sahibabad',
    intro:
      'Sahibabad is the working half of the trans-Hindon belt — Site 4 and the surrounding industrial areas, the older residential colonies around Rajendra Nagar, and now the Namo Bharat RRTS station that has quietly changed how people move between here and Meerut. Our work here splits fairly evenly between factory and staff transport on one side, and family trips out of the colonies on the other.',
    whyLocal:
      'The RRTS station is the genuinely new factor. A group can now come down from Meerut in a fraction of the old time and pick up a vehicle at Sahibabad rather than having one drive all the way up to collect them. For trips originating in western UP that combination is quicker and cheaper than anything that was possible two years ago, and we increasingly plan around it.',
    pickupAreas: [
      'Sahibabad Industrial Area Site 4', 'Site 1', 'Rajendra Nagar', 'Sector 1–5',
      'Lajpat Nagar (Sahibabad)', 'Sahibabad Railway Station', 'Namo Bharat RRTS station',
      'Arya Nagar', 'Shalimar Garden Main', 'Shalimar Garden Extension',
      'DLF Colony', 'Sahibabad Mandi', 'Bhopura', 'Karkardooma border',
      'Pacific Mall Sahibabad', 'Vasundhara border', 'Mohan Nagar',
    ],
    landmarks: [
      { name: 'Sahibabad Namo Bharat station', note: 'RRTS corridor to Meerut' },
      { name: 'Pacific Mall, Sahibabad', note: 'The usual group meeting point' },
      { name: 'Sahibabad Railway Station', note: 'Local and passenger train transfers' },
      { name: 'Site 4 Industrial Area', note: 'Factory and staff transport' },
      { name: 'Mohan Nagar', note: 'Red Line metro, roughly 3 km' },
      { name: 'Anand Vihar Terminal', note: 'About 6 km for interstate connections' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '35 km', time: '60–80 min', iconName: 'Plane' },
      { label: 'Anand Vihar ISBT & Terminal', distance: '6 km', time: '15–25 min', iconName: 'Bus' },
      { label: 'New Delhi Railway Station', distance: '22 km', time: '45–60 min', iconName: 'TrainFront' },
      { label: 'Meerut (via RRTS corridor)', distance: '60 km', time: '75–90 min', iconName: 'Milestone' },
      { label: 'Mohan Nagar Metro', distance: '3 km', time: '10 min', iconName: 'Navigation' },
      { label: 'Noida Sector 18', distance: '16 km', time: '30–40 min', iconName: 'Landmark' },
    ],
    useCases: [UC.corporate, UC.family, UC.pilgrimage, UC.airport, UC.wedding, UC.school],
    getaways: GETAWAY_SETS.uttarakhand,
    gallery: [
      { img: '/images/tempo/20_seater.jpg', title: '20-seater', caption: 'Shift transport out of Site 4 — the size that moves a full team in one run.' },
      { img: '/images/tempo/26_seater.jpg', title: '26-seater', caption: 'Factory outings and the larger staff movements from the industrial area.' },
      { img: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg', title: 'Haridwar', caption: 'The standard pilgrimage run from the trans-Hindon colonies, four to five hours out.' },
      { img: '/images/tempo/16_seater.jpg', title: '16-seater', caption: 'Family bookings from Rajendra Nagar and the Shalimar Garden blocks.' },
    ],
    nearby: ['vasundhara', 'vaishali', 'indirapuram', 'ghaziabad', 'noida'],
    faqs: [
      { q: 'Do you provide staff transport for Sahibabad Industrial Area?',
        a: 'Yes — factory and staff transport is a large share of our Sahibabad work. We run shift pickups and drops for units in Site 4 and Site 1 on monthly contracts with GST invoicing, and we keep the same driver on a route wherever possible. That consistency matters more on industrial contracts than anywhere else, because a driver who knows the gate, the security procedure and the shift timings keeps the whole thing running without daily supervision.' },
      { q: 'Can we pick up from the Sahibabad Namo Bharat RRTS station?',
        a: 'Yes, and it has become one of our more useful pickup points. Groups coming down from Meerut or Modinagar on the Namo Bharat can join the vehicle at Sahibabad rather than having it drive the whole way up to fetch them — which saves both time and cost. The driver waits at the station drop-off and will call when you are through the concourse.' },
      { q: 'How far is Sahibabad from IGI Airport?',
        a: 'About 35 km and typically 60 to 80 minutes, running through Anand Vihar and the Ring Road. Anand Vihar itself is only around 6 km, so for groups continuing by train or interstate bus that is very often the more sensible connection to plan around.' },
      { q: 'Which areas of Sahibabad do you cover?',
        a: 'The industrial areas at Site 1 and Site 4, the residential colonies at Rajendra Nagar, Arya Nagar and DLF Colony, both Shalimar Garden Main and Extension, and the areas around Sahibabad railway station, Pacific Mall and the Mandi. The Bhopura and Mohan Nagar edges are included too.' },
      { q: 'Do you offer one-way drops from Sahibabad?',
        a: 'Yes, though it is worth understanding how they are priced. A one-way drop is billed at the same per-km rate as a round trip, because the vehicle still has to return to base empty afterwards — that return leg is real cost even though you are not in the vehicle for it. We would rather explain that up front than have it appear as a surprise on the invoice.' },
    ],
  },

  // =====================================================================
  // GURGAON — Haryana. Both vehicle types.
  // =====================================================================
  gurgaon: {
    slug: 'gurgaon',
    name: 'Gurgaon',
    displayName: 'Gurgaon (Gurugram)',
    kind: 'city',
    parent: null,
    localityOnly: true,
    vehicles: ['tempo-traveller', 'force-urbania'],
    district: 'Gurugram',
    state: 'Haryana',
    region: 'Delhi NCR',
    accent: '#4F46E5',
    landmark: 'Cyber City',
    tagline: 'Cyber City, Golf Course Road and the closest airport run in NCR',
    heroImage: '/images/citypage_hero_section_image.jpg',
    heroAlt: 'Executive group transport in Gurgaon — tempo traveller and Force Urbania on hire',
    intro:
      'Gurgaon is our most corporate market and the one where the vehicle itself gets the most scrutiny. A group being taken from a Cyber City office to a client meeting or an airport is judging the interior, the driver\'s turnout and whether the thing arrives clean — which is why a large share of what we run here is Force Urbania rather than standard tempo traveller. We cover DLF Phases 1 to 5, the Golf Course and Sohna Road corridors, Udyog Vihar, MG Road, the New Gurgaon sectors and out as far as Manesar.',
    whyLocal:
      'Gurgaon has one structural advantage over everywhere else in NCR: at roughly 15 km, it is the shortest airport run in the region. A group can leave a Cyber City office and be at Terminal 3 in half an hour outside peak. That single fact drives an enormous amount of our work here — inbound delegations, crew transfers and executive pickups that simply would not be practical from the eastern side of the city.',
    pickupAreas: [
      'Cyber City', 'DLF Phase 1', 'DLF Phase 2', 'DLF Phase 3', 'DLF Phase 4', 'DLF Phase 5',
      'Golf Course Road', 'Golf Course Extension', 'Sohna Road', 'MG Road', 'Udyog Vihar',
      'Sector 29', 'Sector 14', 'Sector 15', 'Sector 44', 'Sector 54', 'Sector 56',
      'Sector 57', 'Palam Vihar', 'Sushant Lok', 'South City 1 & 2', 'Nirvana Country',
      'IFFCO Chowk', 'HUDA City Centre', 'Manesar', 'Sector 82–86 (New Gurgaon)',
    ],
    landmarks: [
      { name: 'DLF Cyber City', note: 'The main corporate pickup cluster' },
      { name: 'Ambience Mall', note: 'NH-48, straightforward for large vehicles' },
      { name: 'Sector 29 Leisure Valley', note: 'Evening and event group pickups' },
      { name: 'HUDA City Centre Metro', note: 'Yellow Line terminus' },
      { name: 'Kingdom of Dreams', note: 'Sector 29 event transport' },
      { name: 'Manesar IMT', note: 'Industrial and staff transport' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '15 km', time: '30–45 min', iconName: 'Plane' },
      { label: 'Aerocity', distance: '13 km', time: '25–35 min', iconName: 'Hotel' },
      { label: 'New Delhi Railway Station', distance: '30 km', time: '55–70 min', iconName: 'TrainFront' },
      { label: 'Gurgaon Railway Station', distance: '6 km', time: '15–20 min', iconName: 'TrainFront' },
      { label: 'Connaught Place', distance: '32 km', time: '55–75 min', iconName: 'Landmark' },
      { label: 'Jaipur (via NH-48)', distance: '240 km', time: '4–5 hrs', iconName: 'Milestone' },
    ],
    useCases: [UC.corporate, UC.airport, UC.exhibition, UC.wedding, UC.family, UC.sightseeing],
    getaways: GETAWAY_SETS.rajasthan,
    gallery: [
      { img: '/images/citypage_hero_section_image.jpg', title: 'Executive transfers', caption: 'Cyber City to Terminal 3 in about half an hour outside peak — the shortest airport run in NCR.' },
      { img: '/images/tempo/17_seater.jpg', title: '17-seater', caption: 'Team offsites and client visits, with the luggage space a full-day itinerary actually needs.' },
      { img: '/images/wedding/premium_suv.jpg', title: 'Wedding fleet', caption: 'Guest shuttles for the Sector 29 and Golf Course Road banquet circuit.' },
      { img: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg', title: 'Jaipur', caption: 'NH-48 heads south-west from Gurgaon, so Rajasthan starts closer here than from anywhere else in NCR.' },
    ],
    nearby: ['dwarka', 'faridabad', 'south-delhi', 'janakpuri', 'noida'],
    faqs: [
      { q: 'How quickly can you reach IGI Airport from Gurgaon?',
        a: 'Around 15 km and 30 to 45 minutes outside peak hours, which makes Gurgaon the fastest airport connection in NCR by a comfortable margin. In the evening rush along NH-48 it can stretch past an hour, so for a flight between 6pm and 9pm we build extra time in. Aerocity is closer still at about 13 km.' },
      { q: 'Do you provide corporate transport contracts in Gurgaon?',
        a: 'Yes — this is our largest corporate market. Companies across Cyber City, Udyog Vihar, Golf Course Road and Sohna Road book employee shuttles, client and delegation transport and event movement on monthly billing with full GST invoicing. Where a contract runs for any length of time we keep the same drivers on it, and we will hold vehicles on site through a conference day rather than releasing and re-dispatching them.' },
      { q: 'Should I book a tempo traveller or a Force Urbania in Gurgaon?',
        a: 'It depends who is in the vehicle. For staff movement, offsites and family travel the tempo traveller is the sensible choice and the better value. For client-facing work — an incoming delegation, a board visit, executives being taken to an airport — the Force Urbania is worth the difference: the interior is a step up, the ride is quieter, and it reads as a considered choice rather than a booked minibus. In Gurgaon specifically that distinction gets noticed more than it does elsewhere.' },
      { q: 'Do you cover Manesar and New Gurgaon?',
        a: 'Yes. Manesar and the IMT industrial belt are inside our standard coverage, as are the New Gurgaon sectors from 82 to 86 and the Dwarka Expressway corridor. Manesar adds roughly 25 km to a city-centre pickup, which affects timing on early-morning airport runs but not the rate structure.' },
      { q: 'Can I hire a vehicle for a full day of meetings across Gurgaon and Delhi?',
        a: 'That is exactly what the local day package is for. It covers 80 km and 8 hours and the vehicle stays with you throughout — so papers and bags can be left on board between stops and you are not rebooking at every location. A Gurgaon-and-central-Delhi day usually fits inside the package; if it runs over, the extra is charged at the published per-km and per-hour rate that you will have seen before confirming.' },
    ],
  },

  // =====================================================================
  // FARIDABAD
  // =====================================================================
  faridabad: {
    slug: 'faridabad',
    name: 'Faridabad',
    displayName: 'Faridabad',
    kind: 'city',
    parent: null,
    localityOnly: true,
    vehicles: ['tempo-traveller'],
    district: 'Faridabad',
    state: 'Haryana',
    region: 'Delhi NCR',
    accent: '#DC2626',
    landmark: 'Surajkund',
    tagline: 'From the Sector belt to Surajkund and Ballabgarh',
    heroImage: '/images/tempo/16_seater.jpg',
    heroAlt: '16-seater AC tempo traveller on hire in Faridabad, Haryana',
    intro:
      'Faridabad stretches a long way down the Mathura Road, and where you are on it changes the journey considerably — Sector 15 and Ballabgarh are twenty minutes and a great deal of traffic apart. We cover the whole length: the old NIT blocks, the sector belt from 7 through 21, the newer Greenfield and Sector 81 to 86 developments, Neelam Chowk, Badkhal and out to Ballabgarh.',
    whyLocal:
      'Two things pull group travel out of Faridabad. Surajkund brings a concentrated burst of demand every February for the crafts mela, when we run shuttles almost continuously. The rest of the year, the city\'s position on the Mathura Road makes it the natural jumping-off point for Mathura, Vrindavan and Agra — those trips leave from here without ever entering Delhi.',
    pickupAreas: [
      'NIT Faridabad', 'Sector 7', 'Sector 9', 'Sector 11', 'Sector 15', 'Sector 15A',
      'Sector 16', 'Sector 16A', 'Sector 17', 'Sector 19', 'Sector 21A', 'Sector 21C',
      'Sector 28', 'Sector 37', 'Neelam Chowk', 'Badkhal', 'Surajkund',
      'Greenfield Colony', 'Sector 81', 'Sector 84', 'Sector 86', 'Ballabgarh',
      'Old Faridabad', 'Bata Chowk', 'Escorts Mujesar',
    ],
    landmarks: [
      { name: 'Surajkund', note: 'The February crafts mela — heavy shuttle demand' },
      { name: 'Badkhal Lake', note: 'Picnic and outing group pickups' },
      { name: 'Crown Interiorz Mall', note: 'A convenient meeting point on Mathura Road' },
      { name: 'Escorts Mujesar Metro', note: 'Violet Line terminus' },
      { name: 'Old Faridabad Metro', note: 'Violet Line, for the sector belt' },
      { name: 'Ballabgarh', note: 'The southern end of the city' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '35 km', time: '60–80 min', iconName: 'Plane' },
      { label: 'New Delhi Railway Station', distance: '32 km', time: '55–75 min', iconName: 'TrainFront' },
      { label: 'Faridabad Railway Station', distance: '4 km', time: '12–18 min', iconName: 'TrainFront' },
      { label: 'Nizamuddin Station', distance: '25 km', time: '45–60 min', iconName: 'TrainFront' },
      { label: 'Surajkund', distance: '10 km', time: '20–25 min', iconName: 'Landmark' },
      { label: 'Mathura (via NH-19)', distance: '120 km', time: '2–3 hrs', iconName: 'Milestone' },
    ],
    useCases: [UC.family, UC.pilgrimage, UC.wedding, UC.corporate, UC.airport, UC.school],
    getaways: GETAWAY_SETS.rajasthan,
    gallery: [
      { img: '/images/tempo/16_seater.jpg', title: '16-seater', caption: 'The most-booked size across the Faridabad sector belt.' },
      { img: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png', title: 'Mathura & Vrindavan', caption: 'Two to three hours down NH-19 without entering Delhi — the easiest pilgrimage run from the city.' },
      { img: '/images/tempo/26_seater.jpg', title: '26-seater', caption: 'Surajkund mela shuttles and the larger factory outings from the industrial sectors.' },
      { img: '/images/sightseeing/Agra/Agra_Hero_section.jpg', title: 'Agra', caption: 'A comfortable same-day return from Faridabad, and closer than from most of NCR.' },
    ],
    nearby: ['gurgaon', 'south-delhi', 'noida', 'dwarka', 'ghaziabad'],
    faqs: [
      { q: 'Which parts of Faridabad do you cover?',
        a: 'The full length of the city — the NIT blocks and old Faridabad, the sector belt from 7 through 37, Neelam Chowk, Badkhal and Surajkund, the newer Greenfield and Sector 81 to 86 developments, and Ballabgarh at the southern end. Faridabad is long, so when you book do mention which end you are at; the difference between Sector 15 and Ballabgarh is significant when we are planning a departure time.' },
      { q: 'Do you run shuttles for the Surajkund Mela?',
        a: 'Every February, and it is one of our busiest local commitments. We run group shuttles between Faridabad, South Delhi and the mela grounds throughout the fortnight, and hold vehicles on site so parties can leave when they are ready rather than to a timetable. Demand is genuinely intense in that window and vehicles are committed well ahead, so book early rather than hopefully.' },
      { q: 'How far is Faridabad from IGI Airport?',
        a: 'About 35 km and typically 60 to 80 minutes, running via the Mathura Road and the Ring Road or across through Gurgaon. From the Ballabgarh end add another twenty minutes or so. It is a straightforward run outside the morning peak, when the Mathura Road backs up considerably.' },
      { q: 'Is Faridabad a good starting point for Mathura and Vrindavan?',
        a: 'One of the best in NCR. NH-19 runs south from the city directly towards Mathura, so a group leaves without ever crossing Delhi — around 120 km and two to three hours. Groups from most other parts of NCR spend an hour getting to where a Faridabad trip effectively starts. Agra, at roughly 180 km, is a comfortable same-day return.' },
      { q: 'Can I hire a tempo traveller in Faridabad for a wedding?',
        a: 'Yes. Guest shuttles between the banquet halls along the Mathura Road, the family home and Faridabad or Nizamuddin stations are a regular booking for us, and we can hold the vehicle late for functions that run on. The November to February season is heavily booked, so several weeks of notice is realistic rather than cautious.' },
    ],
  },

  // =====================================================================
  // DWARKA — South West Delhi
  // =====================================================================
  dwarka: {
    slug: 'dwarka',
    name: 'Dwarka',
    displayName: 'Dwarka',
    kind: 'locality',
    parent: null,
    localityOnly: true,
    vehicles: ['tempo-traveller'],
    district: 'South West Delhi',
    state: 'Delhi',
    region: 'Delhi NCR',
    accent: '#0369A1',
    landmark: 'Yashobhoomi Convention Centre',
    tagline: 'Twenty-three sectors, twelve kilometres from the airport',
    heroImage: '/images/airport_section.jpg',
    heroAlt: 'Tempo traveller airport transfers from Dwarka, twelve kilometres from IGI Airport',
    intro:
      'Dwarka is the closest large residential area in Delhi to the airport, and that shapes almost everything we do here. At around 12 km from Terminal 3 it is a twenty to thirty minute run, which makes early-morning departures far less punishing than from anywhere east of the city. Add Yashobhoomi — the convention centre at Sector 25 — and you have a second, entirely different stream of group transport built around exhibitions and delegate movement.',
    whyLocal:
      'The Airport Express line stops at Dwarka Sector 21, which is genuinely useful for splitting a journey: part of a group can ride the metro in while the vehicle collects luggage and the rest of the party. For large families flying out together, that combination often works better than putting everyone in one vehicle through the morning traffic.',
    pickupAreas: [
      'Dwarka Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5', 'Sector 6',
      'Sector 7', 'Sector 9', 'Sector 10', 'Sector 11', 'Sector 12', 'Sector 13',
      'Sector 14', 'Sector 16', 'Sector 17', 'Sector 18', 'Sector 19', 'Sector 21',
      'Sector 22', 'Sector 23', 'Dwarka Mor', 'Dwarka Sector 21 Metro',
      'Yashobhoomi (Sector 25)', 'Palam', 'Bijwasan', 'Najafgarh Road',
    ],
    landmarks: [
      { name: 'Yashobhoomi (IICC)', note: 'Sector 25 — convention and delegate transport' },
      { name: 'Dwarka Sector 21 Metro', note: 'Airport Express and Blue Line interchange' },
      { name: 'Bharat Vandana Park', note: 'Sector 20 group outings' },
      { name: 'Vegas Mall', note: 'Sector 14 — an easy meeting point' },
      { name: 'Dwarka Mor Metro', note: 'Blue Line, for the eastern sectors' },
      { name: 'Radisson Blu Dwarka', note: 'Sector 13 hotel pickups' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '12 km', time: '20–30 min', iconName: 'Plane' },
      { label: 'IGI Terminal 1', distance: '10 km', time: '18–25 min', iconName: 'Plane' },
      { label: 'Aerocity', distance: '14 km', time: '25–30 min', iconName: 'Hotel' },
      { label: 'New Delhi Railway Station', distance: '22 km', time: '40–55 min', iconName: 'TrainFront' },
      { label: 'Connaught Place', distance: '20 km', time: '40–50 min', iconName: 'Landmark' },
      { label: 'Gurgaon Cyber City', distance: '18 km', time: '30–40 min', iconName: 'Building2' },
    ],
    useCases: [UC.airport, UC.exhibition, UC.family, UC.wedding, UC.corporate, UC.sightseeing],
    getaways: GETAWAY_SETS.hills,
    gallery: [
      { img: '/images/airport_section.jpg', title: 'Airport transfers', caption: 'Twelve kilometres to Terminal 3 — the shortest run of any residential area in Delhi.' },
      { img: '/images/tempo/17_seater.jpg', title: '17-seater', caption: 'Family departures where everyone and every suitcase travels in one vehicle.' },
      { img: '/images/bus/35_SEATER_BUS.jpg', title: '35-seater coach', caption: 'Delegate movement for Yashobhoomi events, when a tempo traveller is not enough.' },
      { img: '/images/sightseeing/Manali/Manali_hero_section.jpg', title: 'Manali', caption: 'Dwarka sits on the right side of the city for the hills — no cross-town crawl before the highway.' },
    ],
    nearby: ['janakpuri', 'gurgaon', 'south-delhi', 'rohini', 'karol-bagh'],
    faqs: [
      { q: 'How far is Dwarka from IGI Airport?',
        a: 'Around 12 km to Terminal 3 and about 10 km to Terminal 1 — twenty to thirty minutes in normal traffic. It is the shortest airport run of any large residential area in Delhi, which is why so many group departures start here. Even so, for an international flight we will suggest leaving four hours ahead; the drive is short but Terminal 3 check-in queues for a group of fifteen are not.' },
      { q: 'Do you provide transport for Yashobhoomi events?',
        a: 'Yes. Yashobhoomi at Sector 25 has become a significant part of our Dwarka work — delegate shuttles between hotels and the halls, airport transfers for arriving exhibitors, and vehicles held on site through the day. For the larger conventions we would strongly suggest blocking vehicles in advance, because local availability tightens across the whole of west Delhi during a major event.' },
      { q: 'Which Dwarka sectors do you cover?',
        a: 'All of them, Sector 1 through 23, plus Dwarka Mor, Palam, Bijwasan and the Najafgarh Road stretch. The sector roads here are wide and well laid out, so even a 26-seater can reach a society gate without the manoeuvring difficulties we run into in older parts of Delhi.' },
      { q: 'Can part of my group take the Airport Express and meet the vehicle?',
        a: 'Yes, and for a large party it is often the smarter arrangement. Dwarka Sector 21 is on the Airport Express, so some of the group can ride in while the vehicle collects the luggage and the rest — then everyone joins up at the terminal. We are happy to plan the booking that way; it usually beats putting eighteen people and their bags through the morning traffic in a single run.' },
      { q: 'Is Dwarka a good starting point for a hill trip?',
        a: 'It is, more than people expect. Being on the western edge, a vehicle leaving Dwarka picks up the Delhi–Chandigarh corridor without crossing the city — so a Manali or Shimla departure avoids the cross-town crawl that a group from Noida or Ghaziabad has to sit through first. On an overnight departure that is easily an hour saved.' },
    ],
  },

  // =====================================================================
  // ROHINI — North West Delhi
  // =====================================================================
  rohini: {
    slug: 'rohini',
    name: 'Rohini',
    displayName: 'Rohini',
    kind: 'locality',
    parent: null,
    localityOnly: true,
    vehicles: ['tempo-traveller'],
    district: 'North West Delhi',
    state: 'Delhi',
    region: 'Delhi NCR',
    accent: '#9333EA',
    landmark: 'Adventure Island, Sector 10',
    tagline: 'Sectors 1 to 38 and the Rithala corridor',
    heroImage: '/images/tempo/17_seater.jpg',
    heroAlt: '17-seater tempo traveller on rent across Rohini sectors, North West Delhi',
    intro:
      'Rohini is one of the largest planned sub-cities in Delhi and almost entirely residential, which makes its travel profile very consistent: families, extended families and neighbourhood groups going on holiday or pilgrimage together. We cover the full spread of sectors from 1 to 38, the Rithala and Rohini West metro corridor, and the commercial pockets around Sector 3, 7 and the District Centre.',
    whyLocal:
      'The north-west position is an advantage that Rohini residents tend to know already. Vaishno Devi, Amritsar, Chandigarh and the Himachal routes all leave via NH-44 heading north, and Rohini is effectively on the way out — a group here joins the highway without the cross-city journey that anyone from the eastern side has to make first.',
    pickupAreas: [
      'Rohini Sector 1', 'Sector 3', 'Sector 5', 'Sector 7', 'Sector 8', 'Sector 9',
      'Sector 10', 'Sector 11', 'Sector 13', 'Sector 14', 'Sector 15', 'Sector 16',
      'Sector 17', 'Sector 18', 'Sector 22', 'Sector 24', 'Sector 28',
      'Sector 34', 'Sector 37', 'Sector 38', 'Rithala', 'Rohini West',
      'Rohini East', 'Prashant Vihar', 'Pitampura border', 'Budh Vihar',
    ],
    landmarks: [
      { name: 'Adventure Island', note: 'Sector 10 — school and family group pickups' },
      { name: 'Unity One Mall', note: 'Rohini West, a convenient meeting point' },
      { name: 'Japanese Park', note: 'Sector 11 morning group assembly' },
      { name: 'Rithala Metro', note: 'Red Line terminus' },
      { name: 'Rohini District Centre', note: 'Sector 10 commercial pickups' },
      { name: 'Ambedkar Hospital', note: 'Sector 6 — a widely known reference point' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '30 km', time: '50–70 min', iconName: 'Plane' },
      { label: 'New Delhi Railway Station', distance: '20 km', time: '40–55 min', iconName: 'TrainFront' },
      { label: 'Old Delhi Railway Station', distance: '18 km', time: '35–50 min', iconName: 'TrainFront' },
      { label: 'Kashmere Gate ISBT', distance: '17 km', time: '35–45 min', iconName: 'Bus' },
      { label: 'Connaught Place', distance: '22 km', time: '40–55 min', iconName: 'Landmark' },
      { label: 'Murthal (via NH-44)', distance: '55 km', time: '60–75 min', iconName: 'Milestone' },
    ],
    useCases: [UC.family, UC.pilgrimage, UC.school, UC.wedding, UC.airport, UC.sightseeing],
    getaways: GETAWAY_SETS.hills,
    gallery: [
      { img: '/images/tempo/17_seater.jpg', title: '17-seater', caption: 'The size most Rohini joint families settle on for a week in the hills.' },
      { img: '/images/sightseeing/Vaishno_Devi/Vaishno_Devi_hero_section.jpg', title: 'Vaishno Devi', caption: 'NH-44 runs north from Rohini, so the Katra pilgrimage starts without crossing the city.' },
      { img: '/images/tempo/20_seater.jpg', title: '20-seater', caption: 'Neighbourhood and community group trips out of the Sector 13 to 18 blocks.' },
      { img: '/images/sightseeing/Shimla/shimla_hero_section.jpg', title: 'Shimla', caption: 'Eight to nine hours from Rohini, and the vehicle stays with you for the local sightseeing.' },
    ],
    nearby: ['janakpuri', 'karol-bagh', 'dwarka', 'south-delhi', 'ghaziabad'],
    faqs: [
      { q: 'Which Rohini sectors do you serve?',
        a: 'The full sub-city, Sectors 1 through 38, along with Rithala, Rohini East and West, Prashant Vihar, Budh Vihar and the Pitampura boundary. Rohini is laid out on wide sector roads, so a large vehicle can reach almost any residential block directly — we rarely need to ask a group to walk out to a main road here.' },
      { q: 'Why is Rohini well placed for Vaishno Devi and Amritsar trips?',
        a: 'Because of NH-44. The highway heads north out of Delhi and Rohini sits close to it, so a vehicle leaving here is on the open road quickly rather than crossing the city first. Groups starting from Noida or Ghaziabad routinely lose an hour getting to the point where a Rohini trip has already begun. For an overnight departure to Katra or Amritsar that hour is worth having.' },
      { q: 'How far is Rohini from IGI Airport?',
        a: 'Around 30 km, usually 50 to 70 minutes via the Outer Ring Road. It is one of the longer airport runs within Delhi proper, so for early flights we plan the pickup accordingly — the Outer Ring Road is reliable at night but slow from about seven in the morning.' },
      { q: 'Do you handle school trips from Rohini?',
        a: 'Yes, regularly. The area has a high density of schools and we run educational tours, picnics and inter-school events from them. Every vehicle carries a verified driver and seat belts on all rows, and we keep a front seat free for the accompanying teacher. For overnight trips the driver details go to the school in advance so they are on file before departure.' },
      { q: 'Can I get a tempo traveller in Rohini at short notice?',
        a: 'Usually yes — we keep vehicles positioned in north-west Delhi and same-day bookings are often possible, particularly outside the wedding season. That said, for a specific size on a specific morning, a day or two of notice makes it certain rather than likely. During November to February, availability across the whole of Delhi tightens and short-notice bookings become genuinely difficult.' },
    ],
  },

  // =====================================================================
  // JANAKPURI — West Delhi
  // =====================================================================
  janakpuri: {
    slug: 'janakpuri',
    name: 'Janakpuri',
    displayName: 'Janakpuri',
    kind: 'locality',
    parent: null,
    localityOnly: true,
    vehicles: ['tempo-traveller'],
    district: 'West Delhi',
    state: 'Delhi',
    region: 'Delhi NCR',
    accent: '#DB2777',
    landmark: 'Janakpuri District Centre',
    tagline: 'The blocks, the District Centre and the West interchange',
    heroImage: '/images/sightseeing/Delhi/India_Gate.jpg',
    heroAlt: 'Tempo traveller hire in Janakpuri for Delhi sightseeing and outstation group trips',
    intro:
      'Janakpuri is organised into lettered blocks — A through C, each subdivided again — and it is the kind of address system where local knowledge saves a great deal of time on the phone. Our drivers work the area regularly. We cover Janakpuri East and West, the District Centre, and the surrounding stretch through Tilak Nagar, Vikaspuri and Uttam Nagar.',
    whyLocal:
      'Janakpuri West is a Blue and Magenta line interchange, which makes it a practical assembly point for groups drawn from across west and south Delhi. Combined with the short run to the airport — around 15 km — it is one of the more convenient places in the city to start a group trip from.',
    pickupAreas: [
      'Janakpuri A Block', 'A1 Block', 'A2 Block', 'A3 Block', 'B Block', 'B1 Block',
      'B2 Block', 'B3 Block', 'C Block', 'C1 Block', 'C2 Block', 'C4 Block',
      'Janakpuri East', 'Janakpuri West', 'District Centre', 'Tilak Nagar',
      'Vikaspuri', 'Uttam Nagar', 'Subhash Nagar', 'Pankha Road',
      'Possangipur', 'Janak Cinema', 'Sitapuri',
    ],
    landmarks: [
      { name: 'Janakpuri District Centre', note: 'The main commercial pickup point' },
      { name: 'Janakpuri West Metro', note: 'Blue and Magenta line interchange' },
      { name: 'Pacific Mall, Tagore Garden', note: 'An easy meeting point nearby' },
      { name: 'Janak Cinema', note: 'A long-standing local reference point' },
      { name: 'Tilak Nagar Metro', note: 'Blue Line, for the eastern blocks' },
      { name: 'Dwarka Mor', note: 'Roughly 6 km towards the airport' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '15 km', time: '30–40 min', iconName: 'Plane' },
      { label: 'New Delhi Railway Station', distance: '17 km', time: '35–50 min', iconName: 'TrainFront' },
      { label: 'Connaught Place', distance: '16 km', time: '30–45 min', iconName: 'Landmark' },
      { label: 'Kashmere Gate ISBT', distance: '20 km', time: '40–55 min', iconName: 'Bus' },
      { label: 'Gurgaon Cyber City', distance: '25 km', time: '40–55 min', iconName: 'Building2' },
      { label: 'Dwarka Sector 21', distance: '9 km', time: '20–25 min', iconName: 'Navigation' },
    ],
    useCases: [UC.family, UC.sightseeing, UC.wedding, UC.airport, UC.pilgrimage, UC.school],
    getaways: GETAWAY_SETS.hills,
    gallery: [
      { img: '/images/sightseeing/Delhi/India_Gate.jpg', title: 'Delhi sightseeing', caption: 'Full-day city tours from Janakpuri, with the vehicle held at every stop.' },
      { img: '/images/tempo/16_seater.jpg', title: '16-seater', caption: 'The size that fits both a large family and the narrower block lanes.' },
      { img: '/images/sightseeing/Delhi/Outub_Minar.jpg', title: 'Qutub Minar', caption: 'A standard stop on the south Delhi leg of a sightseeing day.' },
      { img: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg', title: 'Haridwar', caption: 'The most-booked pilgrimage run from west Delhi, usually over a long weekend.' },
    ],
    nearby: ['dwarka', 'rohini', 'karol-bagh', 'south-delhi', 'gurgaon'],
    faqs: [
      { q: 'Do you pick up from all Janakpuri blocks?',
        a: 'Yes — A, B and C blocks and all their subdivisions, plus Janakpuri East and West, the District Centre and the neighbouring stretch through Tilak Nagar, Vikaspuri, Uttam Nagar and Subhash Nagar. Give the block and house number and that will be enough; our drivers know the area and will not need to ring back for landmarks.' },
      { q: 'How far is Janakpuri from IGI Airport?',
        a: 'About 15 km and 30 to 40 minutes, which makes it one of the shorter airport runs within Delhi. The route via Dwarka Mor and the airport road is straightforward outside peak hours; in the morning rush it can stretch towards the hour mark, so we build that in for early departures.' },
      { q: 'Can we start a Delhi sightseeing tour from Janakpuri?',
        a: 'Yes, and the position works well for it. A full-day tour from here can take in Qutub Minar and the south Delhi monuments first, then run through central Delhi to India Gate, Red Fort and Akshardham. The vehicle stays with you at every stop, which is the practical difference between a tour and a series of separate taxi rides with a group of fifteen.' },
      { q: 'Is Janakpuri West metro a good meeting point for a group?',
        a: 'It is one of the better ones in west Delhi. Being a Blue and Magenta line interchange, people can reach it from a wide spread of the city without changing more than once, so a group drawn from several neighbourhoods can assemble there and leave together. We are happy to make the station the pickup point rather than the individual addresses.' },
      { q: 'What vehicle sizes are available in Janakpuri?',
        a: 'The full range, 12 through 26 seats. In practice the 16 and 17-seaters are what we send most often — the block lanes here are narrower than in the planned sub-cities like Rohini or Dwarka, and a 26-seater can be awkward to bring right up to a house in the inner blocks. If your group needs that size we will usually suggest loading at the District Centre or on the main road instead, which is a two-minute walk rather than a twenty-minute manoeuvre.' },
    ],
  },

  // =====================================================================
  // KAROL BAGH — Central Delhi
  // =====================================================================
  'karol-bagh': {
    slug: 'karol-bagh',
    name: 'Karol Bagh',
    displayName: 'Karol Bagh',
    kind: 'locality',
    parent: null,
    localityOnly: true,
    vehicles: ['tempo-traveller'],
    district: 'Central Delhi',
    state: 'Delhi',
    region: 'Delhi NCR',
    accent: '#EA580C',
    landmark: 'Ajmal Khan Road',
    tagline: "Delhi's hotel district — where the Golden Triangle starts",
    heroImage: '/images/sightseeing/Delhi/red_fort.jpg',
    heroAlt: 'Tempo traveller hire in Karol Bagh for Golden Triangle and Delhi tour groups',
    intro:
      'Karol Bagh is the densest concentration of tourist hotels in Delhi, and that makes it different from every other area on this list. A large share of our work here is not local at all — it is groups who have just arrived, are staying two nights, and are leaving on a Golden Triangle circuit or a hill trip. The vehicle is being booked for a week, not an afternoon. We pick up from the hotels along Ajmal Khan Road, Padam Singh Road, Pusa Road and the Gurudwara Road stretch.',
    whyLocal:
      'The practical complication here is the roads. Karol Bagh is tight, one-way in places, and heavily parked, and the Ajmal Khan Road market stretch is pedestrianised for part of the day. A 26-seater cannot always reach a hotel door. We plan around it — usually by loading at a nearby wider road and walking the group the short distance, which is far quicker than the alternative.',
    pickupAreas: [
      'Ajmal Khan Road', 'Padam Singh Road', 'Pusa Road', 'Gurudwara Road',
      'Arya Samaj Road', 'Ghaffar Market', 'Bank Street', 'Dev Nagar',
      'Beadonpura', 'Old Rajinder Nagar', 'New Rajinder Nagar', 'WEA Karol Bagh',
      'Karol Bagh Metro', 'Jhandewalan', 'Rajendra Place', 'Naiwala',
      'Saraswati Marg', 'Tank Road', 'Faiz Road',
    ],
    landmarks: [
      { name: 'Ajmal Khan Road', note: 'The main hotel and market stretch' },
      { name: 'Ghaffar Market', note: 'A widely known reference point' },
      { name: 'Karol Bagh Metro', note: 'Blue Line' },
      { name: 'New Delhi Railway Station', note: 'About 4 km — arriving groups' },
      { name: 'Jhandewalan Temple', note: 'A short distance east' },
      { name: 'Connaught Place', note: 'Roughly 5 km for evening trips' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '15 km', time: '35–50 min', iconName: 'Plane' },
      { label: 'New Delhi Railway Station', distance: '4 km', time: '12–20 min', iconName: 'TrainFront' },
      { label: 'Old Delhi Railway Station', distance: '6 km', time: '18–25 min', iconName: 'TrainFront' },
      { label: 'Kashmere Gate ISBT', distance: '8 km', time: '20–30 min', iconName: 'Bus' },
      { label: 'Connaught Place', distance: '5 km', time: '15–20 min', iconName: 'Landmark' },
      { label: 'Agra (via Yamuna Expressway)', distance: '230 km', time: '4–5 hrs', iconName: 'Milestone' },
    ],
    useCases: [UC.sightseeing, UC.family, UC.pilgrimage, UC.airport, UC.wedding, UC.school],
    getaways: GETAWAY_SETS.tourist,
    gallery: [
      { img: '/images/sightseeing/Delhi/red_fort.jpg', title: 'Red Fort', caption: 'Ten minutes from the Karol Bagh hotels and the usual first stop of a Delhi tour day.' },
      { img: '/images/sightseeing/Agra/Agra_Hero_section.jpg', title: 'Agra', caption: 'The Golden Triangle leg most groups staying here have come to do.' },
      { img: '/images/tempo/17_seater.jpg', title: '17-seater', caption: 'The standard tour-group vehicle — luggage racks for a multi-city circuit.' },
      { img: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg', title: 'Jaipur', caption: 'The third corner of the triangle, five to six hours out along NH-48.' },
    ],
    nearby: ['south-delhi', 'janakpuri', 'rohini', 'dwarka', 'ghaziabad'],
    faqs: [
      { q: 'Can you pick up from Karol Bagh hotels?',
        a: 'Yes, hotel pickup across the whole district is routine for us — Ajmal Khan Road, Padam Singh Road, Pusa Road, Gurudwara Road and the surrounding lanes. One practical point: the streets here are narrow and busy, and parts of the Ajmal Khan Road market are pedestrianised during the day. For larger vehicles we will often arrange to load on a nearby wider road rather than at the hotel door, which sounds like a compromise but is genuinely faster than the alternative.' },
      { q: 'Do you run Golden Triangle tours from Karol Bagh?',
        a: 'Constantly — it is the single most common booking we take from this area. The standard circuit is Delhi, Agra and Jaipur over five or six days with the same vehicle and driver throughout, so luggage stays on board and there is no rebooking between cities. Groups staying in Karol Bagh are very often doing exactly this trip, and we can build the itinerary around your hotel checkout times rather than a fixed schedule.' },
      { q: 'How far is Karol Bagh from New Delhi Railway Station?',
        a: 'About 4 km, twelve to twenty minutes depending on traffic through Paharganj. It is close enough that we handle a lot of station transfers for arriving groups — the driver waits with a nameboard and tracks the actual train, which matters when a party of twenty comes off a delayed overnight service with a mountain of luggage.' },
      { q: 'What is the best vehicle for a tour group staying in Karol Bagh?',
        a: 'For most tour parties the 17-seater — it carries a full group with proper luggage capacity for a multi-city circuit, and it is still manageable on these roads. The 12 and 16-seaters are easier again in the tightest lanes. We would be cautious about a 26-seater here unless the group is genuinely that large, simply because getting it to a hotel door in central Karol Bagh is often not possible and you would be walking to it anyway.' },
      { q: 'Can I book a tempo traveller from Karol Bagh for a hill station trip?',
        a: 'Yes, and it is a frequent request from the hotels here. Shimla, Manali, Mussoorie, Nainital and Dharamshala are all regular departures. The same vehicle and driver stay with you for the whole trip including the local sightseeing at the destination, which for a hill station is worth more than it sounds — arranging local transport in Manali or Shimla at short notice is expensive and unreliable.' },
    ],
  },

  // =====================================================================
  // SOUTH DELHI
  // =====================================================================
  'south-delhi': {
    slug: 'south-delhi',
    name: 'South Delhi',
    displayName: 'South Delhi',
    kind: 'locality',
    parent: null,
    localityOnly: true,
    vehicles: ['tempo-traveller'],
    district: 'South Delhi',
    state: 'Delhi',
    region: 'Delhi NCR',
    accent: '#15803D',
    landmark: 'Qutub Minar',
    tagline: 'Saket to Vasant Kunj, and the Chattarpur wedding belt',
    heroImage: '/images/sightseeing/Delhi/Outub_Minar.jpg',
    heroAlt: 'Qutub Minar in South Delhi — tempo traveller hire for sightseeing and group travel',
    intro:
      'South Delhi covers a lot of ground and a lot of different reasons to need a group vehicle. There are the residential colonies — Greater Kailash, Defence Colony, Malviya Nagar, Green Park, Vasant Vihar — where the bookings are family holidays and airport runs. There is Nehru Place and Saket for corporate work. And there is Chattarpur, where the farmhouse wedding circuit generates more guest-shuttle demand in a single season than most of the rest of the city combined.',
    whyLocal:
      'The Chattarpur belt deserves a specific mention because it is genuinely a category of its own. Farmhouse venues sit well off the main roads, guests arrive across a long evening, and parking is impossible — so the workable arrangement is a vehicle looping between a hotel or metro station and the venue for several hours rather than a single drop. We do a great deal of that between November and February.',
    pickupAreas: [
      'Saket', 'Hauz Khas', 'Green Park', 'Greater Kailash 1', 'Greater Kailash 2',
      'Defence Colony', 'Lajpat Nagar', 'Malviya Nagar', 'Vasant Kunj', 'Vasant Vihar',
      'Nehru Place', 'Chattarpur', 'Mehrauli', 'Sainik Farms', 'Panchsheel Park',
      'South Extension', 'New Friends Colony', 'Kalkaji', 'Alaknanda',
      'Munirka', 'RK Puram', 'Safdarjung Enclave', 'Sarvodaya Enclave', 'Chirag Delhi',
    ],
    landmarks: [
      { name: 'Qutub Minar', note: 'Mehrauli — a fixed point on every sightseeing day' },
      { name: 'Select Citywalk', note: 'Saket, easy for large vehicles to hold' },
      { name: 'Chattarpur Mandir', note: 'The farmhouse wedding belt' },
      { name: 'Nehru Place', note: 'Corporate and business pickups' },
      { name: 'Hauz Khas Village', note: 'Evening group pickups' },
      { name: 'Vasant Kunj', note: 'Close to the airport, roughly 8 km' },
    ],
    connectivity: [
      { label: 'IGI Airport Terminal 3', distance: '15 km', time: '30–45 min', iconName: 'Plane' },
      { label: 'Aerocity', distance: '13 km', time: '25–35 min', iconName: 'Hotel' },
      { label: 'Nizamuddin Railway Station', distance: '10 km', time: '25–35 min', iconName: 'TrainFront' },
      { label: 'New Delhi Railway Station', distance: '16 km', time: '35–50 min', iconName: 'TrainFront' },
      { label: 'Connaught Place', distance: '12 km', time: '25–40 min', iconName: 'Landmark' },
      { label: 'Gurgaon Cyber City', distance: '20 km', time: '35–50 min', iconName: 'Building2' },
    ],
    useCases: [UC.wedding, UC.sightseeing, UC.corporate, UC.airport, UC.family, UC.pilgrimage],
    getaways: GETAWAY_SETS.tourist,
    gallery: [
      { img: '/images/sightseeing/Delhi/Outub_Minar.jpg', title: 'Qutub Minar', caption: 'On the doorstep in Mehrauli, and the anchor of any south Delhi sightseeing day.' },
      { img: '/images/wedding/premium_suv.jpg', title: 'Wedding shuttles', caption: 'The Chattarpur farmhouse circuit, where a looping vehicle beats a single drop every time.' },
      { img: '/images/tempo/17_seater.jpg', title: '17-seater', caption: 'Guest transport and family holidays from the colonies, with proper luggage space.' },
      { img: '/images/sightseeing/Delhi/Akshardham_Temple.jpg', title: 'Akshardham', caption: 'The eastern end of a full-day Delhi tour, usually the last stop before dusk.' },
    ],
    nearby: ['gurgaon', 'karol-bagh', 'faridabad', 'dwarka', 'noida'],
    faqs: [
      { q: 'Which South Delhi areas do you cover?',
        a: 'The full spread — Saket, Hauz Khas, Green Park, both Greater Kailash blocks, Defence Colony, Lajpat Nagar, Malviya Nagar, South Extension, New Friends Colony, Kalkaji, Vasant Kunj, Vasant Vihar, Munirka, RK Puram, Nehru Place, Mehrauli, Chattarpur and Sainik Farms. It is a large area with very different road conditions from one end to the other, so it helps to give a precise address when booking.' },
      { q: 'Do you provide wedding guest shuttles for Chattarpur farmhouses?',
        a: 'Yes, and it is one of our busiest seasonal commitments. The arrangement that actually works at a farmhouse venue is a vehicle running a loop between a hotel or metro station and the venue across the evening, rather than one drop at the start — guests arrive over several hours and farmhouse parking is effectively non-existent. We hold vehicles late for functions that run on. Book well ahead for the November to February season; this belt is committed early.' },
      { q: 'How far is South Delhi from IGI Airport?',
        a: 'It depends where. Vasant Kunj and Vasant Vihar are close at 8 to 10 km, twenty minutes or so. Saket and Greater Kailash are around 15 km and 30 to 45 minutes. The eastern edge towards Kalkaji and New Friends Colony is a little further. All of it is a comfortable airport connection by NCR standards.' },
      { q: 'Can I book a tempo traveller for a South Delhi sightseeing day?',
        a: 'Yes, and the geography suits it. Qutub Minar and Mehrauli are right here, Humayun\'s Tomb and the Lotus Temple are a short run, and a full day can extend north to India Gate, Red Fort and Akshardham. The vehicle stays with you at every stop rather than being dismissed and rebooked — with a group of fifteen and a monument-heavy itinerary, that is the whole difference between a tour and a logistical exercise.' },
      { q: 'Do you offer corporate transport in Nehru Place and Saket?',
        a: 'Yes. The Nehru Place and Saket business districts book us for staff shuttles, client transport and event movement on monthly contracts with GST invoicing. As elsewhere, we keep the same drivers on a running contract wherever possible — the familiarity with building access and parking arrangements saves real time on every trip.' },
    ],
  },
};

// ---------------------------------------------------------------------------
// AIRPORT PAGES
//
// One canonical page per (vehicle x airport). "Tempo traveller Delhi airport",
// "tempo traveller IGI airport" and "tempo traveller from IGI airport" are the
// same search intent for the same airport, so they are targeted together from
// this single entry via `keywordVariants` rather than published as three
// competing URLs. Splitting them would divide the ranking signal three ways and
// leave the pages competing with each other for the same query.
// ---------------------------------------------------------------------------
export const ncrAirports = {
  'delhi-airport': {
    slug: 'delhi-airport',
    name: 'Delhi Airport',
    displayName: 'Delhi Airport (IGI)',
    kind: 'airport',
    isAirport: true,
    parent: null,
    localityOnly: true,
    vehicles: ['tempo-traveller', 'force-urbania'],
    airportCode: 'DEL',
    airportName: 'Indira Gandhi International Airport',
    district: 'New Delhi',
    state: 'Delhi',
    region: 'Delhi NCR',
    accent: '#0F766E',
    landmark: 'Terminal 3 arrivals',
    tagline: 'Group pickups and drops at all three terminals',
    heroImage: '/images/airport_section.jpg',
    heroAlt: 'Tempo traveller group transfer at Delhi IGI Airport',
    // Every phrasing this one page is built to answer.
    keywordVariants: [
      'tempo traveller delhi airport', 'tempo traveller igi airport',
      'tempo traveller from igi airport', 'tempo traveller to delhi airport',
      'igi airport tempo traveller booking', 'delhi airport group transfer',
    ],
    intro:
      'A group landing at Delhi airport has a problem that individual travellers do not. Fifteen people and their luggage means three or four separate taxis, which means three or four different arrival times at the hotel, three fares to settle and at least one vehicle that gets lost. One tempo traveller removes all of that. We run group pickups and drops at all three IGI terminals with the driver waiting inside arrivals holding a nameboard, so there is nothing to find and nobody to call.',
    whyLocal:
      'The detail that matters most on an airport booking is what happens when the flight is late. We track the actual flight rather than the scheduled time, so a two-hour delay simply moves the pickup — the vehicle is not sitting on a meter and you are not paying for waiting that was never your fault. Sixty minutes of free wait after the aircraft is on the ground is included as standard, which is enough for immigration and baggage on an international arrival.',
    terminals: [
      { code: 'T3', name: 'Terminal 3', note: 'International and full-service domestic — the busiest of the three', href: '/airport-service/delhi/igi-terminal-3-international' },
      { code: 'T1', name: 'Terminal 1', note: 'Domestic low-cost carriers, Indigo and Akasa', href: '/airport-service/delhi/igi-terminal-1-domestic' },
      { code: 'T2', name: 'Terminal 2', note: 'Additional domestic operations', href: '/airport-service/delhi/igi-terminal-2-domestic' },
    ],
    pickupAreas: [
      'Terminal 3 arrivals', 'Terminal 3 departures', 'Terminal 1 arrivals',
      'Terminal 1 departures', 'Terminal 2', 'Aerocity hotels',
      'Airport Express Sector 21', 'IGI cargo terminal', 'Hotel Pullman Aerocity',
      'Andaz Delhi', 'Roseate House', 'JW Marriott Aerocity', 'Holiday Inn Aerocity',
    ],
    landmarks: [
      { name: 'Terminal 3', note: 'International arrivals — meet and greet at the gate' },
      { name: 'Terminal 1', note: 'Domestic low-cost carriers' },
      { name: 'Aerocity', note: 'The hotel district, 10 minutes from T3' },
      { name: 'Airport Express Line', note: 'New Delhi to Sector 21 in 20 minutes' },
      { name: 'IGI multi-level car park', note: 'The standard group loading point' },
      { name: 'Terminal 2', note: 'Additional domestic operations' },
    ],
    connectivity: [
      { label: 'Connaught Place', distance: '16 km', time: '30–45 min', iconName: 'Landmark' },
      { label: 'Gurgaon Cyber City', distance: '15 km', time: '30–45 min', iconName: 'Building2' },
      { label: 'Dwarka', distance: '12 km', time: '20–30 min', iconName: 'Navigation' },
      { label: 'Noida Sector 18', distance: '38 km', time: '60–80 min', iconName: 'Milestone' },
      { label: 'New Delhi Railway Station', distance: '17 km', time: '35–50 min', iconName: 'TrainFront' },
      { label: 'Agra (Yamuna Expressway)', distance: '240 km', time: '4–5 hrs', iconName: 'Milestone' },
    ],
    useCases: [UC.airport, UC.corporate, UC.family, UC.exhibition, UC.wedding, UC.pilgrimage],
    getaways: GETAWAY_SETS.tourist,
    gallery: [
      { img: '/images/airport_section.jpg', title: 'Arrivals pickup', caption: 'The driver waits inside arrivals with a nameboard — no calls, no hunting the pickup bay.' },
      { img: '/images/tempo/17_seater.jpg', title: '17-seater', caption: 'A full group and its luggage in one vehicle instead of four taxis arriving separately.' },
      { img: '/images/tempo/26_seater.jpg', title: '26-seater', caption: 'Conference delegations and large tour parties landing together.' },
      { img: '/images/sightseeing/Agra/Agra_Hero_section.jpg', title: 'Straight to Agra', caption: 'Many groups drive on directly from the terminal — the Expressway is reached without entering the city.' },
    ],
    nearby: ['dwarka', 'gurgaon', 'south-delhi', 'janakpuri', 'karol-bagh'],
    faqs: [
      { q: 'Where does the driver meet us at Delhi airport?',
        a: 'Inside the arrivals hall, holding a nameboard with your booking name on it. For Terminal 3 international arrivals that is at the exit from the baggage hall; for Terminal 1 and 2 it is the main arrivals concourse. You do not need to call anyone or find a pickup bay — we send the driver name and number the evening before, and the vehicle is already positioned when you land.' },
      { q: 'What happens if our flight is delayed?',
        a: 'Nothing, from your side. We track the actual flight rather than the scheduled arrival time, so a delay simply shifts the pickup. There is no charge for the delay itself and no risk of the vehicle leaving. Sixty minutes of free waiting after the aircraft lands is included as standard, which covers immigration and baggage on a normal international arrival.' },
      { q: 'Which terminals do you cover at IGI?',
        a: 'All three — Terminal 3 for international and full-service domestic, Terminal 1 for the low-cost domestic carriers, and Terminal 2. When you book, give us the flight number rather than the terminal; airlines move between T1 and T2 periodically and the flight number lets us confirm the correct one on the day rather than relying on what was true when you booked.' },
      { q: 'Can a tempo traveller carry a full group with international luggage?',
        a: 'That is precisely what it is for, though be honest with us about the bag count. A 17-seater comfortably takes a group of fifteen with normal check-in luggage. If the group is returning from a long international trip with two large cases each, the 20 or 26-seater is the safer call — the extra rows are really extra boot space. Tell us the number of passengers and the number of large bags and we will size it properly rather than guessing.' },
      { q: 'Should we book a tempo traveller or a Force Urbania from the airport?',
        a: 'For most arrivals — families, tour groups, conference delegates — the tempo traveller is the sensible and better-value choice. The Force Urbania is worth the difference when the arrival is client-facing: an incoming business delegation, senior visitors, anyone you would rather not collect in a standard minibus. The interior is a clear step up and the ride is noticeably quieter on the run into the city.' },
      { q: 'Can you drive us straight from the airport to Agra or Jaipur?',
        a: 'Yes, and a good number of groups do exactly that rather than staying a night in Delhi first. The airport sits on the right side of the city for it — the Yamuna Expressway for Agra and NH-48 for Jaipur are both reachable without crossing central Delhi. Agra is four to five hours from the terminal, Jaipur five to six. We will build in a meal stop; after a long-haul flight it is worth the twenty minutes.' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Lookup helpers. Kept here so the page factory has one source of truth.
// ---------------------------------------------------------------------------

const ALL_ENTRIES = { ...ncrLocalities, ...ncrAirports };

/** Every locality/airport slug, whichever vehicle it belongs to. */
export const ALL_NCR_SLUGS = [...NCR_LOCALITY_ORDER, ...NCR_AIRPORT_ORDER];

/** Does this slug belong to the NCR locality tier at all? */
export function isNcrLocalitySlug(slug) {
  return Object.prototype.hasOwnProperty.call(ALL_ENTRIES, slug);
}

/** Fetch a locality/airport entry by slug. */
export function getNcrLocality(slug) {
  return ALL_ENTRIES[slug] || null;
}

/**
 * Slugs a given vehicle type should build. Only Noida, Gurgaon and the airport
 * carry Force Urbania — publishing a premium page for every locality would be
 * fourteen thin duplicates of a vehicle that area does not actually ask for.
 */
export function getNcrSlugsForVehicle(vehicleSlug) {
  return ALL_NCR_SLUGS.filter((s) => {
    const e = ALL_ENTRIES[s];
    return Array.isArray(e?.vehicles) && e.vehicles.includes(vehicleSlug);
  });
}

/** Resolve the nearby-locality cards for the "other pickup areas" grid. */
export function getNearbyLocalities(slug, vehicleSlug) {
  const entry = ALL_ENTRIES[slug];
  if (!entry) return [];
  return (entry.nearby || [])
    .map((s) => ALL_ENTRIES[s])
    .filter((e) => e && e.vehicles.includes(vehicleSlug))
    .map((e) => ({
      slug: e.slug,
      name: e.displayName,
      tagline: e.tagline,
      img: e.heroImage,
      href: `/${vehicleSlug}/${e.slug}`,
    }));
}
