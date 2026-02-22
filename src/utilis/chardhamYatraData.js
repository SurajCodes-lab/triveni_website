// ============================================================================
// CHARDHAM YATRA DATA - Master Data File for 35 Dynamic Pages
// ============================================================================
// Covers: Sedan, SUV (Innova/Fortuner), Ertiga, Bus + Individual Dhams + Packages
// URL Pattern: /chardham-yatra/[slug]
// ============================================================================

// ---------------------------------------------------------------------------
// 1. VEHICLE CONFIGURATIONS
// ---------------------------------------------------------------------------
const vehicles = {
  sedan: {
    name: 'Swift Dzire',
    type: 'sedan',
    category: 'Sedan',
    seats: 4,
    luggage: '2 Large + 1 Small',
    perKm: 12,
    localPerKm: 14,
    fuelType: 'Petrol/CNG',
    transmission: 'Manual/Automatic',
    ac: true,
    image: '/images/car/sedan.webp',
    sideImage: '/images/car/sedan-side.webp',
    interiorImage: '/images/car/sedan-interior.webp',
    backImage: '/images/car/sedan-back.webp',
    features: ['AC', 'Music System', 'USB Charging', 'Fuel Efficient', 'Comfortable Seats', 'Power Windows'],
    bestFor: 'Couple or Solo Pilgrim',
    tagline: 'Budget-Friendly Pilgrimage',
    description: 'The Swift Dzire offers the most economical way to complete your Char Dham Yatra. With excellent fuel efficiency (22-28 km/l) and comfortable seating for up to 4 passengers, it is the top choice for couples and solo pilgrims seeking a budget-friendly spiritual journey.',
  },
  ertiga: {
    name: 'Maruti Ertiga',
    type: 'ertiga',
    category: 'MPV',
    seats: 6,
    luggage: '2 Large + 2 Small',
    perKm: 15,
    localPerKm: 17,
    fuelType: 'Petrol/CNG',
    transmission: 'Manual/Automatic',
    ac: true,
    image: '/images/car/suv.webp',
    sideImage: '/images/car/suv-side.webp',
    interiorImage: '/images/car/suv-interior.webp',
    backImage: '/images/car/suv-back.webp',
    features: ['AC', 'Music System', 'USB Charging', 'Compact Size', 'Fuel Efficient', 'Power Steering', '3-Row Seating'],
    bestFor: 'Small Family (4-6 Members)',
    tagline: 'Perfect Family Yatra Companion',
    description: 'The Maruti Ertiga is the ideal choice for families of 4-6 members planning Char Dham Yatra. Its compact yet spacious 3-row seating, excellent fuel efficiency, and smooth ride make it the most popular family vehicle for Uttarakhand mountain roads.',
  },
  innova: {
    name: 'Toyota Innova Crysta',
    type: 'innova',
    category: 'Premium SUV',
    seats: 7,
    luggage: '3 Large + 2 Small',
    perKm: 18,
    localPerKm: 20,
    fuelType: 'Diesel',
    transmission: 'Manual/Automatic',
    ac: true,
    image: '/images/car/suv2.webp',
    sideImage: '/images/car/suv-side.webp',
    interiorImage: '/images/car/suv-interior.webp',
    backImage: '/images/car/suv-back.webp',
    features: ['AC', 'Music System', 'USB Charging', 'Spacious Boot', 'Reclining Seats', 'Power Windows', 'Hill Assist'],
    bestFor: 'Family of 5-7 Members',
    tagline: 'India\'s Most Trusted Yatra Vehicle',
    description: 'The Toyota Innova Crysta is India\'s undisputed king of pilgrimage travel. Its powerful diesel engine conquers Himalayan roads effortlessly, while the spacious cabin with reclining seats ensures your family arrives at each Dham refreshed and comfortable.',
  },
  fortuner: {
    name: 'Toyota Fortuner',
    type: 'fortuner',
    category: 'Premium SUV',
    seats: 7,
    luggage: '4 Large + 2 Small',
    perKm: 25,
    localPerKm: 28,
    fuelType: 'Diesel',
    transmission: 'Manual/Automatic',
    ac: true,
    image: '/images/wedding/premium_suv.jpg',
    sideImage: '/images/car/suv-side.webp',
    interiorImage: '/images/car/luxury-interior.webp',
    backImage: '/images/car/suv-back.webp',
    features: ['AC', '4x4 Available', 'Leather Seats', 'Cruise Control', 'Power Boot', 'Sunroof', 'ADAS Safety', 'Hill Descent Control'],
    bestFor: 'VIP / Premium Travellers',
    tagline: 'Luxury Pilgrimage Experience',
    description: 'The Toyota Fortuner elevates your Char Dham Yatra to a premium experience. With 4x4 capability for treacherous mountain roads, leather seats, sunroof, and advanced safety features, it is the vehicle of choice for those who seek comfort without compromise on their spiritual journey.',
  },
  suv: {
    name: 'SUV (Innova/Fortuner/XUV700)',
    type: 'suv',
    category: 'SUV',
    seats: 7,
    luggage: '3-4 Large + 2 Small',
    perKm: 18,
    localPerKm: 20,
    fuelType: 'Diesel',
    transmission: 'Manual/Automatic',
    ac: true,
    image: '/images/car/suv.webp',
    sideImage: '/images/car/suv-side.webp',
    interiorImage: '/images/car/suv-interior.webp',
    backImage: '/images/car/suv-back.webp',
    features: ['AC', 'Hill Assist', 'Spacious Boot', 'Reclining Seats', 'USB Charging', 'Music System', 'Power Windows'],
    bestFor: 'Family & Group Travel',
    tagline: 'Conquer Mountains in Comfort',
    description: 'Our SUV fleet — including Innova Crysta, Fortuner, and XUV700 — offers the perfect combination of power, space, and comfort for Char Dham Yatra. These vehicles are specifically chosen for their ability to handle Himalayan terrain while keeping passengers comfortable.',
  },
  bus22: {
    name: '22-Seater Mini Bus',
    type: 'bus',
    category: 'Mini Bus',
    seats: 22,
    luggage: '22+ Bags',
    perKm: 32,
    localPerKm: 35,
    fuelType: 'Diesel',
    transmission: 'Manual',
    ac: true,
    image: '/images/bus/22_SEATER_BUS.jpg',
    sideImage: '/images/bus/25_SEATER_BUS.jpg',
    interiorImage: '/images/car/luxury-interior.webp',
    backImage: '/images/bus/27_SEATER_BUS.jpg',
    features: ['AC', 'Pushback Seats', 'Music System', 'PA System', 'Curtains', 'Luggage Hold', 'First Aid Kit'],
    bestFor: 'Medium Groups (15-22 People)',
    tagline: 'Group Pilgrimage Made Easy',
    description: 'Our 22-Seater Mini Bus is the most popular choice for group Char Dham Yatra. Perfect for extended families, community groups, and office pilgrimages, it offers comfortable pushback seats, AC, and ample luggage space for long mountain journeys.',
  },
  bus35: {
    name: '35-Seater Luxury Coach',
    type: 'bus',
    category: 'Luxury Coach',
    seats: 35,
    luggage: '35+ Bags',
    perKm: 38,
    localPerKm: 40,
    fuelType: 'Diesel',
    transmission: 'Manual',
    ac: true,
    image: '/images/bus/35_SEATER_BUS.jpg',
    sideImage: '/images/bus/41_SEATER_BUS.jpg',
    interiorImage: '/images/car/luxury-interior.webp',
    backImage: '/images/bus/45_SEATER_BUS.jpg',
    features: ['AC', 'Luxury Recliners', 'Music System', 'PA System', 'Curtains', 'Under-floor Luggage', 'First Aid Kit', 'Wi-Fi Optional'],
    bestFor: 'Large Groups (25-35 People)',
    tagline: 'Premium Group Pilgrimage',
    description: 'The 35-Seater Luxury Coach offers premium group pilgrimage travel with comfortable recliner seats, powerful AC, and massive under-floor luggage hold. Ideal for large families, temple trusts, corporate groups, and community yatras.',
  },
  bus45: {
    name: '45-Seater Volvo Coach',
    type: 'bus',
    category: 'Volvo Coach',
    seats: 45,
    luggage: '45+ Bags',
    perKm: 48,
    localPerKm: 50,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    ac: true,
    image: '/images/bus/45_SEATER_BUS.jpg',
    sideImage: '/images/bus/49_SEATER_BUS.jpg',
    interiorImage: '/images/car/luxury_bus.webp',
    backImage: '/images/bus/56_SEATER_BUS.jpg',
    features: ['AC', 'Volvo Recliner Seats', 'LED TV', 'PA System', 'Washroom', 'Wi-Fi', 'Charging Points', 'Curtains', 'Reading Lights'],
    bestFor: 'Large Groups (35-45 People)',
    tagline: 'Volvo Luxury Group Yatra',
    description: 'The 45-Seater Volvo Coach is the ultimate luxury for large group Char Dham Yatra. Featuring Volvo recliner seats, onboard washroom, Wi-Fi, LED entertainment, and climate control — it turns the long Himalayan journey into a comfortable experience.',
  },
};

// All bus options for comparison
const allBusOptions = [
  { name: '22-Seater Mini Bus', seats: 22, perKm: 32, minCharge: '₹6,000/day', image: '/images/bus/22_SEATER_BUS.jpg' },
  { name: '25-Seater Mini Bus', seats: 25, perKm: 34, minCharge: '₹6,500/day', image: '/images/bus/25_SEATER_BUS.jpg' },
  { name: '27-Seater Coach', seats: 27, perKm: 36, minCharge: '₹6,800/day', image: '/images/bus/27_SEATER_BUS.jpg' },
  { name: '35-Seater Luxury', seats: 35, perKm: 38, minCharge: '₹7,500/day', image: '/images/bus/35_SEATER_BUS.jpg' },
  { name: '41-Seater Coach', seats: 41, perKm: 42, minCharge: '₹8,000/day', image: '/images/bus/41_SEATER_BUS.jpg' },
  { name: '45-Seater Volvo', seats: 45, perKm: 48, minCharge: '₹9,000/day', image: '/images/bus/45_SEATER_BUS.jpg' },
  { name: '49-Seater Volvo', seats: 49, perKm: 52, minCharge: '₹9,500/day', image: '/images/bus/49_SEATER_BUS.jpg' },
  { name: '56-Seater Luxury', seats: 56, perKm: 60, minCharge: '₹10,000/day', image: '/images/bus/56_SEATER_BUS.jpg' },
];

// All car options for comparison
const allCarOptions = [
  { name: 'Swift Dzire (Sedan)', seats: 4, perKm: 12, type: 'sedan', image: '/images/car/sedan.webp' },
  { name: 'Maruti Ertiga', seats: 6, perKm: 15, type: 'ertiga', image: '/images/car/suv.webp' },
  { name: 'Innova Crysta', seats: 7, perKm: 18, type: 'innova', image: '/images/car/suv2.webp' },
  { name: 'Toyota Fortuner', seats: 7, perKm: 25, type: 'fortuner', image: '/images/wedding/premium_suv.jpg' },
  { name: 'Mahindra XUV700', seats: 7, perKm: 22, type: 'suv', image: '/images/car/suv-side.webp' },
];

// Tempo options for cross-linking
const tempoOptions = [
  { name: '12-Seater Tempo', seats: 12, perKm: 23, image: '/images/tempo/12_seater.jpg' },
  { name: '16-Seater Tempo', seats: 16, perKm: 25, image: '/images/tempo/16_seater.jpg' },
  { name: '17-Seater Tempo', seats: 17, perKm: 26, image: '/images/tempo/17_seater.jpg' },
  { name: '20-Seater Tempo', seats: 20, perKm: 27, image: '/images/tempo/20_seater.jpg' },
  { name: '26-Seater Maharaja', seats: 26, perKm: 26, image: '/images/tempo/26_seater.jpg' },
];

// ---------------------------------------------------------------------------
// 2. ORIGIN CONFIGURATIONS
// ---------------------------------------------------------------------------
const origins = {
  delhi: {
    name: 'Delhi',
    distances: {
      chardham: { km: 1600, totalKm: 3200, days: '11N/12D' },
      kedarnath: { km: 460, totalKm: 920, days: '5N/6D' },
      badrinath: { km: 530, totalKm: 1060, days: '5N/6D' },
      doDham: { km: 530, totalKm: 1400, days: '7N/8D' },
    },
    heroImage: '/images/chardham/chardham-yatra-delhi-hero.webp',
    galleryImages: [
      '/images/sightseeing/Haridwar/Ganga_Aarti.jpg',
      '/images/sightseeing/Rishikesh/Laxman_Jhula.jpg',
      '/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg',
      '/images/sightseeing/Char_Dham/Badrinath_Temple.jpg',
    ],
    description: 'Starting from Delhi, the national capital, your Char Dham Yatra passes through the scenic corridors of Uttarakhand via Haridwar and Rishikesh before ascending into the Himalayan heights.',
    highlights: ['Haridwar Ganga Aarti', 'Rishikesh Laxman Jhula', 'Devprayag Sangam', 'Himalayan Valleys'],
  },
  haridwar: {
    name: 'Haridwar',
    distances: {
      chardham: { km: 1350, totalKm: 2700, days: '9N/10D' },
      kedarnath: { km: 250, totalKm: 500, days: '3N/4D' },
      badrinath: { km: 320, totalKm: 640, days: '3N/4D' },
      doDham: { km: 320, totalKm: 1100, days: '5N/6D' },
    },
    heroImage: '/images/chardham/chardham-haridwar-hero.webp',
    galleryImages: [
      '/images/sightseeing/Haridwar/Har_Ki_Pauri.jpg',
      '/images/sightseeing/Haridwar/Mansa_Devi_Temple.jpg',
      '/images/sightseeing/Haridwar/Chandi_Devi_Temple.jpg',
      '/images/sightseeing/Char_Dham/Gangotri_Temple.jpg',
    ],
    description: 'Haridwar, the Gateway to Gods, is the most popular starting point for Char Dham Yatra. Begin your sacred journey from the banks of the holy Ganga with minimal travel time to all four Dhams.',
    highlights: ['Har Ki Pauri Aarti', 'Mansa Devi Temple', 'Shortest Route to Kedarnath', 'Gateway to Uttarakhand'],
  },
  dehradun: {
    name: 'Dehradun',
    distances: {
      chardham: { km: 1400, totalKm: 2800, days: '10N/11D' },
      kedarnath: { km: 270, totalKm: 540, days: '4N/5D' },
      badrinath: { km: 340, totalKm: 680, days: '4N/5D' },
      doDham: { km: 340, totalKm: 1200, days: '6N/7D' },
    },
    heroImage: '/images/chardham/chardham-dehradun-hero.webp',
    galleryImages: [
      '/images/sightseeing/Rishikesh/River_Rafting.jpg',
      '/images/sightseeing/Rishikesh/Triveni_Ghat.jpg',
      '/images/sightseeing/Char_Dham/Yamunotri_Temple.jpg',
      '/images/sightseeing/Char_Dham/Gangotri_Temple.jpg',
    ],
    description: 'Dehradun, the capital of Uttarakhand, offers an excellent starting point for Char Dham Yatra. With the Jolly Grant Airport and well-connected railways, pilgrims from across India can begin their sacred journey from this picturesque valley city.',
    highlights: ['Jolly Grant Airport Access', 'Mussoorie Nearby', 'Valley Views', 'Well-Connected Transport Hub'],
  },
  rishikesh: {
    name: 'Rishikesh',
    distances: {
      chardham: { km: 1300, totalKm: 2600, days: '9N/10D' },
      kedarnath: { km: 228, totalKm: 456, days: '3N/4D' },
      badrinath: { km: 298, totalKm: 596, days: '3N/4D' },
      doDham: { km: 298, totalKm: 1050, days: '5N/6D' },
    },
    heroImage: '/images/chardham/chardham-rishikesh-hero.webp',
    galleryImages: [
      '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg',
      '/images/sightseeing/Rishikesh/Ram_Jhula.jpg',
      '/images/sightseeing/Rishikesh/Beatles_Ashram.jpg',
      '/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg',
    ],
    description: 'Rishikesh, the Yoga Capital of the World, is the spiritual launchpad for Char Dham Yatra. Situated at the confluence of the Ganga, this holy city offers the shortest route to the sacred four Dhams of Uttarakhand.',
    highlights: ['Yoga Capital of World', 'Laxman Jhula & Ram Jhula', 'Shortest to All Dhams', 'Spiritual Atmosphere'],
  },
};

// ---------------------------------------------------------------------------
// 3. DESTINATION CONFIGURATIONS (Itineraries & Details)
// ---------------------------------------------------------------------------
const destinations = {
  chardham: {
    name: 'Char Dham Yatra',
    fullName: 'Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath)',
    type: 'Char',
    dhams: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
    heroImage: '/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
    significance: 'The Char Dham Yatra is the most sacred Hindu pilgrimage circuit in India, encompassing four divine temples nestled in the Garhwal Himalayas of Uttarakhand. Established by Adi Shankaracharya in the 8th century, this circuit is believed to wash away all sins and grant moksha (liberation from the cycle of birth and death).',
    bestSeason: 'May to June & September to October',
    altitude: '3,133m to 3,293m',
  },
  kedarnath: {
    name: 'Kedarnath',
    fullName: 'Kedarnath Yatra (Ek Dham)',
    type: 'Ek',
    dhams: ['Kedarnath'],
    heroImage: '/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg',
    significance: 'Kedarnath Temple, dedicated to Lord Shiva, stands at 3,583 meters in the Garhwal Himalayas. One of the twelve Jyotirlingas, it is the most revered among the Char Dhams. The temple requires a 16 km trek from Gaurikund (or helicopter ride), making the vehicle journey to the base camp crucial for comfort.',
    bestSeason: 'May to June & September to November',
    altitude: '3,583m (Temple) / 1,982m (Gaurikund Base)',
  },
  badrinath: {
    name: 'Badrinath',
    fullName: 'Badrinath Yatra (Ek Dham)',
    type: 'Ek',
    dhams: ['Badrinath'],
    heroImage: '/images/sightseeing/Char_Dham/Badrinath_Temple.jpg',
    significance: 'Badrinath Temple, dedicated to Lord Vishnu, sits at 3,133 meters between the Nar and Narayana mountain ranges. As one of the 108 Divya Desams, it is the most accessible of the Char Dhams — the road goes directly to the temple. The natural hot spring Tapt Kund at the temple entrance is a sacred highlight.',
    bestSeason: 'May to June & September to November',
    altitude: '3,133m',
  },
  doDham: {
    name: 'Do Dham Yatra',
    fullName: 'Do Dham Yatra (Kedarnath + Badrinath)',
    type: 'Do',
    dhams: ['Kedarnath', 'Badrinath'],
    heroImage: '/images/chardham/kedarnath-hero.webp',
    significance: 'The Do Dham Yatra covers the two most popular and sacred Dhams — Kedarnath (Lord Shiva) and Badrinath (Lord Vishnu). This shorter pilgrimage is ideal for those with limited time who wish to experience the most powerful spiritual destinations in the Himalayas.',
    bestSeason: 'May to June & September to November',
    altitude: '3,133m to 3,583m',
  },
  gangotri: {
    name: 'Gangotri',
    fullName: 'Gangotri Yatra',
    type: 'Ek',
    dhams: ['Gangotri'],
    heroImage: '/images/sightseeing/Char_Dham/Gangotri_Temple.jpg',
    significance: 'Gangotri Temple, at 3,100 meters, marks the origin of the sacred River Ganga. Dedicated to Goddess Ganga, this 18th-century white granite temple sits near the Bhagirathi River. The actual source of the Ganga — Gaumukh glacier — lies 18 km further, accessible only by trek.',
    bestSeason: 'May to June & September to October',
    altitude: '3,100m',
  },
  yamunotri: {
    name: 'Yamunotri',
    fullName: 'Yamunotri Yatra',
    type: 'Ek',
    dhams: ['Yamunotri'],
    heroImage: '/images/sightseeing/Char_Dham/Yamunotri_Temple.jpg',
    significance: 'Yamunotri Temple, at 3,293 meters, is the source of the River Yamuna and the traditional starting point of the Char Dham Yatra. The temple, dedicated to Goddess Yamuna, is surrounded by hot water springs including Surya Kund. A 5 km trek from Janki Chatti is required to reach the temple.',
    bestSeason: 'May to June & September to October',
    altitude: '3,293m',
  },
};

// ---------------------------------------------------------------------------
// 4. ITINERARY TEMPLATES
// ---------------------------------------------------------------------------
function getItinerary(origin, destination) {
  const itineraries = {
    'delhi-chardham': [
      { day: 'Day 1', title: `${origin} to Haridwar`, desc: `Depart from ${origin} early morning. Drive through scenic NH-58 to Haridwar (230 km, 5-6 hrs). Evening Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar.` },
      { day: 'Day 2', title: 'Haridwar to Barkot (via Mussoorie)', desc: 'Drive to Barkot (210 km, 7-8 hrs) via Dehradun and Mussoorie. Beautiful valley views throughout. Barkot is the base for Yamunotri. Overnight at Barkot.' },
      { day: 'Day 3', title: 'Barkot to Yamunotri to Barkot', desc: 'Drive to Janki Chatti (40 km, 2 hrs). Trek 5 km to Yamunotri Temple (or pony/palki). Visit Surya Kund hot spring, cook rice in holy water. Return trek and drive to Barkot. Overnight at Barkot.' },
      { day: 'Day 4', title: 'Barkot to Uttarkashi', desc: 'Drive to Uttarkashi (100 km, 4-5 hrs). Visit Vishwanath Temple and Shakti Temple. Uttarkashi is the base for Gangotri. Explore the town. Overnight at Uttarkashi.' },
      { day: 'Day 5', title: 'Uttarkashi to Gangotri to Uttarkashi', desc: 'Early morning drive to Gangotri (100 km, 3-4 hrs). Darshan at Gangotri Temple. Holy dip in Bhagirathi River. Visit Submerged Shivling (visible in winters). Return to Uttarkashi. Overnight stay.' },
      { day: 'Day 6', title: 'Uttarkashi to Guptkashi', desc: 'Drive to Guptkashi (220 km, 8-9 hrs) via Tehri Dam and Srinagar. Scenic Himalayan drive. Guptkashi is the base camp for Kedarnath. Overnight at Guptkashi.' },
      { day: 'Day 7', title: 'Guptkashi to Kedarnath', desc: 'Drive to Sonprayag (30 km, 1 hr). Local transport to Gaurikund. Trek 16 km to Kedarnath Temple (or helicopter). Evening darshan at the ancient Jyotirlinga. Overnight at Kedarnath.' },
      { day: 'Day 8', title: 'Kedarnath to Guptkashi', desc: 'Early morning darshan at Kedarnath Temple. Trek down 16 km to Gaurikund (5-6 hrs). Drive back to Guptkashi. Rest and relax. Overnight at Guptkashi.' },
      { day: 'Day 9', title: 'Guptkashi to Badrinath', desc: 'Drive to Badrinath (200 km, 7-8 hrs) via Joshimath. Stop at Chopta for views of Tungnath peak. Cross Joshimath, the winter seat of Badrinath. Evening darshan at Badrinath Temple. Overnight at Badrinath.' },
      { day: 'Day 10', title: 'Badrinath to Rudraprayag', desc: 'Morning darshan at Badrinath Temple. Visit Mana Village (last Indian village), Vyas Gufa, Bhim Pul. Drive to Rudraprayag (160 km, 5-6 hrs). Overnight at Rudraprayag.' },
      { day: 'Day 11', title: 'Rudraprayag to Haridwar/Rishikesh', desc: 'Drive to Haridwar/Rishikesh (165 km, 5-6 hrs). Stop at Devprayag — the Sangam of Alaknanda and Bhagirathi forming River Ganga. Evening at leisure. Overnight stay.' },
      { day: 'Day 12', title: `Haridwar to ${origin}`, desc: `After breakfast, depart for ${origin} (230 km, 5-6 hrs). Arrive by evening with memories of a lifetime. Char Dham Yatra complete.` },
    ],
    'delhi-kedarnath': [
      { day: 'Day 1', title: `${origin} to Haridwar/Rishikesh`, desc: `Depart from ${origin} early morning. Drive to Haridwar (230 km, 5-6 hrs). Visit Har Ki Pauri for Ganga Aarti. Overnight at Haridwar.` },
      { day: 'Day 2', title: 'Haridwar to Guptkashi', desc: 'Drive to Guptkashi (210 km, 7-8 hrs) via Rishikesh, Devprayag, and Rudraprayag. Beautiful Himalayan views. Visit Ardh Narishwar Temple. Overnight at Guptkashi.' },
      { day: 'Day 3', title: 'Guptkashi to Kedarnath', desc: 'Drive to Sonprayag (30 km). Local jeep to Gaurikund. Trek 16 km to Kedarnath Temple (or helicopter). Evening darshan of Jyotirlinga. Overnight at Kedarnath.' },
      { day: 'Day 4', title: 'Kedarnath to Guptkashi', desc: 'Early morning darshan. Trek down to Gaurikund (5-6 hrs). Drive back to Guptkashi. Rest and evening prayers. Overnight at Guptkashi.' },
      { day: 'Day 5', title: 'Guptkashi to Rishikesh', desc: 'Drive to Rishikesh (190 km, 6-7 hrs). Visit Laxman Jhula, Ram Jhula, and local temples. Evening at Triveni Ghat. Overnight at Rishikesh.' },
      { day: 'Day 6', title: `Rishikesh to ${origin}`, desc: `After breakfast, depart for ${origin} (230 km, 5-6 hrs). Arrive by evening with blessings of Baba Kedarnath.` },
    ],
    'delhi-badrinath': [
      { day: 'Day 1', title: `${origin} to Rishikesh/Haridwar`, desc: `Depart from ${origin} early morning. Drive to Rishikesh (230 km, 5-6 hrs). Evening aarti at Triveni Ghat. Overnight at Rishikesh.` },
      { day: 'Day 2', title: 'Rishikesh to Joshimath', desc: 'Drive to Joshimath (260 km, 8-9 hrs) via Devprayag, Rudraprayag, and Karnaprayag. Cross 5 prayags. Visit Shankaracharya Math at Joshimath. Overnight at Joshimath.' },
      { day: 'Day 3', title: 'Joshimath to Badrinath', desc: 'Drive to Badrinath (45 km, 1.5 hrs). Darshan at Badrinath Temple. Visit Tapt Kund hot spring. Evening Aarti. Overnight at Badrinath.' },
      { day: 'Day 4', title: 'Badrinath Sightseeing', desc: 'Morning darshan. Visit Mana Village (last village before Tibet), Vyas Gufa, Bhim Pul, Saraswati River origin. Drive to Rudraprayag (160 km, 5-6 hrs). Overnight.' },
      { day: 'Day 5', title: 'Rudraprayag to Haridwar', desc: 'Drive to Haridwar (165 km, 5-6 hrs). Stop at Devprayag Sangam. Evening Ganga Aarti at Har Ki Pauri. Overnight at Haridwar.' },
      { day: 'Day 6', title: `Haridwar to ${origin}`, desc: `After breakfast, depart for ${origin} (230 km, 5-6 hrs). Arrive by evening. Badrinath Yatra complete.` },
    ],
    'delhi-doDham': [
      { day: 'Day 1', title: `${origin} to Haridwar`, desc: `Depart from ${origin} early morning. Drive to Haridwar (230 km, 5-6 hrs). Evening Ganga Aarti at Har Ki Pauri. Overnight at Haridwar.` },
      { day: 'Day 2', title: 'Haridwar to Guptkashi', desc: 'Drive to Guptkashi (210 km, 7-8 hrs) via Rishikesh and Devprayag. Scenic mountain drive. Overnight at Guptkashi.' },
      { day: 'Day 3', title: 'Guptkashi to Kedarnath', desc: 'Drive to Sonprayag. Local transport to Gaurikund. Trek 16 km to Kedarnath Temple. Evening darshan of Jyotirlinga. Overnight at Kedarnath.' },
      { day: 'Day 4', title: 'Kedarnath to Guptkashi', desc: 'Morning darshan. Trek down to Gaurikund. Drive back to Guptkashi. Rest and evening prayers. Overnight.' },
      { day: 'Day 5', title: 'Guptkashi to Badrinath', desc: 'Drive to Badrinath (200 km, 7-8 hrs) via Joshimath. Visit Chopta viewpoint. Arrival at Badrinath. Evening darshan. Overnight at Badrinath.' },
      { day: 'Day 6', title: 'Badrinath to Rudraprayag', desc: 'Morning darshan. Visit Mana Village, Vyas Gufa, Bhim Pul. Drive to Rudraprayag (160 km, 5-6 hrs). Overnight.' },
      { day: 'Day 7', title: 'Rudraprayag to Haridwar', desc: 'Drive to Haridwar (165 km, 5-6 hrs) via Devprayag. Evening at leisure. Overnight at Haridwar.' },
      { day: 'Day 8', title: `Haridwar to ${origin}`, desc: `After breakfast, depart for ${origin}. Do Dham Yatra (Kedarnath + Badrinath) complete.` },
    ],
    'haridwar-chardham': [
      { day: 'Day 1', title: 'Haridwar to Barkot', desc: 'Depart from Haridwar early morning. Drive to Barkot (200 km, 6-7 hrs) via Dehradun and Mussoorie. Scenic valley views. Barkot is the base for Yamunotri. Overnight at Barkot.' },
      { day: 'Day 2', title: 'Barkot to Yamunotri to Barkot', desc: 'Drive to Janki Chatti (40 km). Trek 5 km to Yamunotri Temple. Visit Surya Kund. Return trek. Drive to Barkot. Overnight.' },
      { day: 'Day 3', title: 'Barkot to Uttarkashi', desc: 'Drive to Uttarkashi (100 km, 4-5 hrs). Visit Vishwanath Temple and Shakti Temple. Overnight at Uttarkashi.' },
      { day: 'Day 4', title: 'Uttarkashi to Gangotri to Uttarkashi', desc: 'Drive to Gangotri (100 km). Darshan at Gangotri Temple. Holy dip in Bhagirathi River. Return to Uttarkashi. Overnight.' },
      { day: 'Day 5', title: 'Uttarkashi to Guptkashi', desc: 'Drive to Guptkashi (220 km, 8-9 hrs) via Tehri. Guptkashi is Kedarnath base. Overnight.' },
      { day: 'Day 6', title: 'Guptkashi to Kedarnath', desc: 'Drive to Sonprayag. Trek 16 km to Kedarnath Temple. Evening darshan. Overnight at Kedarnath.' },
      { day: 'Day 7', title: 'Kedarnath to Guptkashi', desc: 'Morning darshan. Trek down. Drive to Guptkashi. Overnight.' },
      { day: 'Day 8', title: 'Guptkashi to Badrinath', desc: 'Drive to Badrinath (200 km) via Joshimath. Evening darshan at Badrinath Temple. Overnight.' },
      { day: 'Day 9', title: 'Badrinath to Rishikesh', desc: 'Morning darshan. Visit Mana Village. Drive to Rishikesh (300 km, 9-10 hrs). Overnight.' },
      { day: 'Day 10', title: 'Rishikesh to Haridwar', desc: 'Visit Laxman Jhula, Ram Jhula. Drive to Haridwar (25 km). Char Dham Yatra complete.' },
    ],
    'haridwar-kedarnath': [
      { day: 'Day 1', title: 'Haridwar to Guptkashi', desc: 'Depart from Haridwar early morning. Drive to Guptkashi (210 km, 7-8 hrs) via Rishikesh and Devprayag. Overnight at Guptkashi.' },
      { day: 'Day 2', title: 'Guptkashi to Kedarnath', desc: 'Drive to Sonprayag. Trek 16 km to Kedarnath Temple. Evening darshan. Overnight at Kedarnath.' },
      { day: 'Day 3', title: 'Kedarnath to Guptkashi', desc: 'Morning darshan. Trek down. Drive to Guptkashi. Rest. Overnight.' },
      { day: 'Day 4', title: 'Guptkashi to Haridwar', desc: 'Drive to Haridwar (210 km, 7-8 hrs). Evening Ganga Aarti. Kedarnath Yatra complete.' },
    ],
    'haridwar-doDham': [
      { day: 'Day 1', title: 'Haridwar to Guptkashi', desc: 'Depart early morning. Drive to Guptkashi (210 km). Overnight at Guptkashi.' },
      { day: 'Day 2', title: 'Guptkashi to Kedarnath', desc: 'Drive to Sonprayag. Trek 16 km to Kedarnath. Evening darshan. Overnight.' },
      { day: 'Day 3', title: 'Kedarnath to Guptkashi', desc: 'Morning darshan. Trek down. Overnight at Guptkashi.' },
      { day: 'Day 4', title: 'Guptkashi to Badrinath', desc: 'Drive to Badrinath (200 km) via Joshimath. Evening darshan. Overnight.' },
      { day: 'Day 5', title: 'Badrinath Sightseeing + Drive to Rudraprayag', desc: 'Morning darshan. Visit Mana Village. Drive to Rudraprayag (160 km). Overnight.' },
      { day: 'Day 6', title: 'Rudraprayag to Haridwar', desc: 'Drive to Haridwar (165 km). Do Dham Yatra complete.' },
    ],
  };

  // Map origin-destination to itinerary key
  const key = `${origin.toLowerCase()}-${destination}`;
  if (itineraries[key]) return itineraries[key];

  // Fallback: adapt Delhi itinerary for other origins
  const delhiKey = `delhi-${destination}`;
  if (itineraries[delhiKey]) {
    const adapted = [...itineraries[delhiKey]];
    adapted[0] = { ...adapted[0], title: `${origins[origin.toLowerCase()]?.name || origin} to ${adapted[0].title.split(' to ')[1] || 'Haridwar'}`, desc: adapted[0].desc.replace(/Delhi/g, origins[origin.toLowerCase()]?.name || origin) };
    const last = adapted[adapted.length - 1];
    adapted[adapted.length - 1] = { ...last, title: last.title.replace(/Delhi/g, origins[origin.toLowerCase()]?.name || origin), desc: last.desc.replace(/Delhi/g, origins[origin.toLowerCase()]?.name || origin) };
    return adapted;
  }

  // Fallback for Haridwar-based
  const hwKey = `haridwar-${destination}`;
  if (itineraries[hwKey]) {
    const adapted = [...itineraries[hwKey]];
    adapted[0] = { ...adapted[0], desc: adapted[0].desc.replace(/Haridwar/g, origins[origin.toLowerCase()]?.name || origin) };
    return adapted;
  }

  return itineraries['delhi-chardham'];
}

// ---------------------------------------------------------------------------
// 5. FAQ GENERATORS (Unique per vehicle type & route)
// ---------------------------------------------------------------------------
function generateFAQs(vehicle, origin, destination, price) {
  const originName = origins[origin]?.name || origin;
  const destName = destinations[destination]?.fullName || destination;
  const veh = vehicles[vehicle] || vehicles.innova;

  const baseFAQs = [
    {
      question: `What is the cost of ${destName} by ${veh.name} from ${originName}?`,
      answer: `The estimated cost of ${destName} by ${veh.name} from ${originName} starts at approximately ${price}. This includes vehicle rental, fuel, driver charges, and all toll taxes. GST (5%) is additional. Exact fare depends on the number of days and actual kilometers traveled.`,
    },
    {
      question: `Is ${veh.name} suitable for Char Dham mountain roads?`,
      answer: `Yes, the ${veh.name} is ${vehicle === 'sedan' ? 'suitable for Char Dham roads. While not a 4x4, the sedan handles most paved mountain roads well. Our experienced drivers know the routes intimately.' : vehicle === 'ertiga' ? 'well-suited for mountain roads. The Ertiga has a strong engine and good ground clearance for hill driving. Its compact size is an advantage on narrow mountain roads.' : vehicle === 'fortuner' ? 'one of the best vehicles for Himalayan roads. With 4x4 capability, high ground clearance, and powerful diesel engine, the Fortuner can handle even the roughest mountain terrain with ease.' : vehicle === 'bus' || vehicle === 'bus22' || vehicle === 'bus35' || vehicle === 'bus45' ? 'operated by experienced drivers who specialize in mountain routes. The bus is maintained to the highest safety standards for Himalayan conditions. However, note that buses can only reach certain points — narrow mountain stretches require local transport.' : 'ideal for Char Dham roads. The powerful diesel engine handles steep climbs effortlessly, while the spacious cabin keeps passengers comfortable during long mountain drives.'}`,
    },
    {
      question: `How many passengers can travel in the ${veh.name} for Char Dham Yatra?`,
      answer: `The ${veh.name} can comfortably accommodate ${veh.seats} passengers with luggage space for ${veh.luggage}. For Char Dham Yatra, we recommend ${veh.seats <= 4 ? '2-3 passengers for maximum comfort as the journey involves 10+ days' : veh.seats <= 7 ? `${veh.seats - 1}-${veh.seats} passengers for a comfortable long journey` : `up to ${veh.seats} passengers, making it ideal for group pilgrimages`}.`,
    },
    {
      question: `What is included in the ${veh.name} Char Dham package?`,
      answer: `Our ${veh.name} Char Dham package includes: the vehicle with AC, an experienced hill-route driver, fuel for the entire journey, all toll taxes, and driver allowance. You only need to arrange accommodation, meals, and parking charges. We can also arrange hotel bookings at discounted rates.`,
    },
    {
      question: `Can we customize the ${destName} itinerary?`,
      answer: 'Absolutely! Our Char Dham Yatra itineraries are fully customizable. You can add or remove stops, extend days at particular Dhams, include nearby attractions like Auli, Chopta, or Valley of Flowers, or modify the route as per your preferences. Call us at 7668570551 to discuss your custom itinerary.',
    },
  ];

  // Vehicle-specific FAQs
  const vehicleFAQs = {
    sedan: [
      { question: 'Is a sedan powerful enough for Himalayan roads?', answer: 'Yes, our Swift Dzire sedans are well-maintained and driven by experienced hill drivers. The modern Dzire has sufficient power (89 BHP) for mountain roads. The key advantage is exceptional fuel efficiency (22-28 km/l), making it the most economical choice for Char Dham Yatra.' },
      { question: 'Can a sedan carry enough luggage for a 10-day Char Dham trip?', answer: 'The Swift Dzire has a 378L boot that can accommodate 2 large suitcases and 1 small bag. For a couple or solo traveler on a 10-day trip, this is more than sufficient. We recommend soft bags for flexibility. Roof carriers can be arranged for extra luggage.' },
    ],
    ertiga: [
      { question: 'Why is Ertiga popular for Char Dham family trips?', answer: 'The Ertiga is the most popular family vehicle for Char Dham Yatra because: (1) 3-row seating for 6 members, (2) excellent fuel efficiency keeping costs low, (3) compact size ideal for narrow mountain roads, (4) smooth ride on both highways and hill roads, and (5) affordability at just ₹15/km outstation.' },
      { question: 'Is the Ertiga comfortable for elderly passengers on long mountain drives?', answer: 'Yes, the Ertiga offers good comfort for elderly passengers. The seats have decent cushioning, AC works efficiently, and the ride quality is smooth. We can arrange vehicles with extra cushion sets. Our drivers make regular comfort stops. For enhanced comfort, consider upgrading to Innova Crysta.' },
    ],
    innova: [
      { question: 'Why is Innova Crysta the most recommended car for Char Dham?', answer: 'The Innova Crysta has earned its reputation as India\'s best pilgrimage vehicle because: (1) Powerful 2.7L diesel engine handles all mountain gradients, (2) Spacious cabin with 7 reclining seats, (3) Large boot for 10+ days of luggage, (4) Proven reliability on Himalayan roads, (5) Best-in-class ride comfort, and (6) Excellent ground clearance.' },
      { question: 'What is the difference between Innova and Innova Crysta for Char Dham?', answer: 'All our Innova fleet is the Crysta model, which is the current-generation Toyota Innova. The Crysta offers better suspension, more powerful engine, and significantly improved comfort over the older Innova models. Every vehicle is regularly serviced and specifically prepared for mountain trips.' },
    ],
    fortuner: [
      { question: 'Is the Fortuner worth the extra cost for Char Dham Yatra?', answer: 'If comfort and safety are your priority, absolutely. The Fortuner offers: 4x4 capability for unpaved mountain stretches, leather seats, cruise control for highway sections, hill descent control, advanced safety features, and a commanding driving position. For VIP travelers and those who want the best experience, the Fortuner is unmatched.' },
      { question: 'Does the Fortuner have 4x4 for mountain roads?', answer: 'Yes, our Fortuner fleet includes 4x4 variants specifically for mountain routes. The 4WD system with low-range gearing provides exceptional traction on steep, unpaved, and wet mountain roads. This makes the Fortuner the safest choice for Char Dham Yatra, especially during monsoon season.' },
    ],
    suv: [
      { question: 'Which SUV is best for Char Dham Yatra?', answer: 'For most families, the Innova Crysta is the best SUV for Char Dham Yatra due to its proven reliability and comfort. For VIP/premium travel, the Fortuner with 4x4 is recommended. The XUV700 offers the best tech features. We help you choose based on your group size, budget, and comfort preferences.' },
      { question: 'Can I choose between different SUV models?', answer: 'Yes, you can choose your preferred SUV model. Our fleet includes: Innova Crysta (₹18/km), Mahindra XUV700 (₹22/km), Toyota Fortuner (₹25/km). Each has its strengths — call 7668570551 to discuss which suits your Char Dham journey best.' },
    ],
    bus: [
      { question: 'Can a bus reach all four Char Dhams?', answer: 'Buses can reach the base points of all four Dhams. However, the last stretches to some Dhams (like Gaurikund for Kedarnath) require smaller vehicles or local transport. Our team arranges seamless transfers at these points, so your group experience is uninterrupted.' },
      { question: 'What is the minimum group size for a Char Dham bus booking?', answer: 'We recommend a minimum of 15 passengers for a 22-seater bus to make it cost-effective. However, you can book any bus size regardless of the number of passengers. The per-person cost reduces significantly as the group size increases, making it the most economical option for large groups.' },
    ],
    bus22: [
      { question: 'Is a 22-seater mini bus suitable for mountain roads?', answer: 'Yes, our 22-seater mini buses are specifically designed for mountain terrain. Their compact size allows them to navigate narrow hill roads comfortably. The powerful diesel engine handles steep gradients, and the experienced drivers specialize in Himalayan routes.' },
      { question: 'How much luggage can a 22-seater carry for Char Dham?', answer: 'The 22-seater mini bus has a dedicated luggage compartment that can carry bags for all passengers comfortably. For a 10-day Char Dham Yatra, each passenger can bring 1 large suitcase and 1 handbag. Additional roof carrier space is available if needed.' },
    ],
    bus35: [
      { question: 'Can a 35-seater coach handle Char Dham mountain roads?', answer: 'The 35-seater luxury coach can handle most Char Dham route roads. However, for certain narrow stretches, our team arranges smaller vehicle transfers. The coach is ideal for the highway portions and wider mountain roads, providing maximum comfort for the majority of the journey.' },
    ],
    bus45: [
      { question: 'Is a 45-seater Volvo available for Char Dham Yatra?', answer: 'Yes, our 45-seater Volvo coaches are available for Char Dham group tours. The Volvo coach handles highway and wider mountain roads excellently. For narrow mountain stretches, we arrange smaller vehicle transfers. The onboard washroom and recliner seats make long mountain drives comfortable.' },
    ],
  };

  const extraFAQs = vehicleFAQs[vehicle] || vehicleFAQs.innova;

  return [
    ...baseFAQs,
    ...extraFAQs,
    {
      question: 'Is night driving allowed on Char Dham routes?',
      answer: 'No, the BRO (Border Roads Organisation) and state authorities do not allow night driving on most Char Dham mountain roads for safety reasons. All our itineraries are planned for daytime driving only. This is why adequate number of days is important for a comfortable Char Dham Yatra.',
    },
    {
      question: 'What documents do I need for Char Dham Yatra 2026?',
      answer: 'For Char Dham Yatra 2026, you need: (1) Valid Government ID (Aadhaar/Voter ID/Passport), (2) Char Dham Yatra registration (biometric at Haridwar/Rishikesh), (3) Medical fitness certificate for senior citizens (above 75 years), (4) 2 passport-size photos. We assist with the registration process at no extra cost.',
    },
  ];
}

// ---------------------------------------------------------------------------
// 6. WHY CHOOSE GENERATORS
// ---------------------------------------------------------------------------
function generateWhyChoose(vehicleType) {
  const common = [
    { title: 'Experienced Hill Drivers', desc: 'Our drivers have 10+ years of experience on Char Dham mountain roads. They know every turn, every halt point, and every safe stop along the route.' },
    { title: '24/7 On-Trip Support', desc: 'Dedicated trip coordinator available round the clock during your yatra. Any issue — mechanical, medical, or logistical — we handle it immediately.' },
    { title: 'Flexible Itinerary', desc: 'Your Char Dham Yatra, your way. Add extra days, skip a stop, explore side attractions — our packages are fully customizable to your spiritual journey.' },
    { title: 'Transparent Pricing', desc: 'No hidden charges, no surprise costs. Fuel, tolls, and driver charges are included. You only pay for accommodation, meals, and parking.' },
  ];

  const vehicleSpecific = {
    sedan: [
      { title: 'Most Economical Option', desc: 'At just ₹12/km, the Swift Dzire is the most budget-friendly way to complete Char Dham Yatra. Save on travel to spend more on darshan and accommodation.' },
      { title: 'Fuel Efficiency Champion', desc: '22-28 km/l mileage means fewer fuel stops and lower cost. On a 3000+ km Char Dham circuit, the savings are significant compared to larger vehicles.' },
    ],
    ertiga: [
      { title: 'Perfect Family Size', desc: 'The 3-row, 6-seater layout is ideal for a typical Indian family — parents, children, and grandparents can travel together comfortably.' },
      { title: 'Narrow Road Advantage', desc: 'The Ertiga\'s compact dimensions give it an advantage on narrow mountain roads that larger SUVs struggle with. Easier parking at crowded Dham locations too.' },
    ],
    innova: [
      { title: 'India\'s #1 Pilgrimage Vehicle', desc: 'The Innova Crysta has completed more Char Dham Yatras than any other vehicle in India. Its legendary reliability on mountain roads is unmatched.' },
      { title: 'Maximum Comfort for Long Journeys', desc: 'Reclining captain seats, powerful AC, and smooth suspension make 8-10 hour mountain drives bearable. Your family arrives refreshed at each Dham.' },
    ],
    fortuner: [
      { title: '4x4 Mountain Capability', desc: 'The Fortuner\'s 4WD system provides unmatched traction on wet, unpaved, and steep mountain roads. The safest vehicle choice for Char Dham Yatra, especially during rains.' },
      { title: 'Premium Luxury Experience', desc: 'Leather seats, sunroof, cruise control, and advanced safety features make the Fortuner a VIP experience. Your pilgrimage deserves the best vehicle.' },
    ],
    suv: [
      { title: 'Multiple SUV Options', desc: 'Choose from Innova Crysta (₹18/km), XUV700 (₹22/km), or Fortuner (₹25/km). Each SUV offers different strengths — we help you pick the perfect one for your group.' },
      { title: 'Built for Mountains', desc: 'Our SUV fleet is specifically maintained for mountain conditions — extra ground clearance, powerful engines, hill-start assist, and all-terrain capability.' },
    ],
    bus: [
      { title: 'Lowest Per-Person Cost', desc: 'Bus travel is the most economical option for Char Dham group yatra. A 45-seater bus at ₹48/km divided by 40 passengers = just ₹1.2/km per person!' },
      { title: 'Group Bonding Experience', desc: 'Travel together, pray together. A bus yatra creates a community experience where bhajans, kirtans, and shared meals make the pilgrimage more memorable.' },
    ],
    bus22: [
      { title: 'Compact Group Size', desc: 'The 22-seater is perfect for extended families and small community groups. Big enough for comfort, small enough for mountain roads.' },
    ],
    bus35: [
      { title: 'Large Group Comfort', desc: 'The 35-seater luxury coach balances group size with comfort. Recliner seats and powerful AC keep everyone comfortable on long Himalayan drives.' },
    ],
    bus45: [
      { title: 'Volvo Luxury for Groups', desc: 'The 45-seater Volvo coach offers premium group travel with recliner seats, onboard washroom, LED entertainment, and Wi-Fi. Long journeys become comfortable.' },
    ],
  };

  return [...common, ...(vehicleSpecific[vehicleType] || vehicleSpecific.innova)];
}

// ---------------------------------------------------------------------------
// 7. PRICE CALCULATOR
// ---------------------------------------------------------------------------
function calculatePrice(origin, destination, vehicleType) {
  const originData = origins[origin];
  const distData = originData?.distances[destination];
  if (!distData) return '₹0';
  const veh = vehicles[vehicleType];
  if (!veh) return '₹0';
  const totalKm = distData.totalKm;
  const perKm = veh.perKm;
  const basePrice = totalKm * perKm;
  // Add driver allowance (~₹500/day for cars, ₹800-1200/day for buses)
  const days = parseInt(distData.days) || 10;
  const driverAllowance = vehicleType.startsWith('bus') ? 1000 * days : 500 * days;
  const total = basePrice + driverAllowance;
  return `₹${total.toLocaleString('en-IN')}`;
}

function calculatePriceNum(origin, destination, vehicleType) {
  const originData = origins[origin];
  const distData = originData?.distances[destination];
  if (!distData) return 0;
  const veh = vehicles[vehicleType];
  if (!veh) return 0;
  const totalKm = distData.totalKm;
  const perKm = veh.perKm;
  const basePrice = totalKm * perKm;
  const days = parseInt(distData.days) || 10;
  const driverAllowance = vehicleType.startsWith('bus') ? 1000 * days : 500 * days;
  return basePrice + driverAllowance;
}

// ---------------------------------------------------------------------------
// 8. MULTI-VEHICLE PRICING (for route/dham pages)
// ---------------------------------------------------------------------------
function getAllVehiclePrices(origin, destination) {
  const vehTypes = ['sedan', 'ertiga', 'innova', 'fortuner'];
  return vehTypes.map(v => ({
    ...vehicles[v],
    estimatedPrice: calculatePrice(origin, destination, v),
    priceNum: calculatePriceNum(origin, destination, v),
  }));
}

function getAllBusPrices(origin, destination) {
  const busTypes = ['bus22', 'bus35', 'bus45'];
  return busTypes.map(v => ({
    ...vehicles[v],
    estimatedPrice: calculatePrice(origin, destination, v),
    priceNum: calculatePriceNum(origin, destination, v),
  }));
}

// ---------------------------------------------------------------------------
// 9. IMAGE MAPS (DIVERSE - different images for different pages)
// ---------------------------------------------------------------------------
const imageBank = {
  temples: {
    chardham: '/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
    kedarnath: '/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg',
    badrinath: '/images/sightseeing/Char_Dham/Badrinath_Temple.jpg',
    gangotri: '/images/sightseeing/Char_Dham/Gangotri_Temple.jpg',
    yamunotri: '/images/sightseeing/Char_Dham/Yamunotri_Temple.jpg',
  },
  haridwar: {
    hero: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg',
    harKiPauri: '/images/sightseeing/Haridwar/Har_Ki_Pauri.jpg',
    gangaAarti: '/images/sightseeing/Haridwar/Ganga_Aarti.jpg',
    mansaDevi: '/images/sightseeing/Haridwar/Mansa_Devi_Temple.jpg',
    chandiDevi: '/images/sightseeing/Haridwar/Chandi_Devi_Temple.jpg',
  },
  rishikesh: {
    hero: '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg',
    laxmanJhula: '/images/sightseeing/Rishikesh/Laxman_Jhula.jpg',
    ramJhula: '/images/sightseeing/Rishikesh/Ram_Jhula.jpg',
    rafting: '/images/sightseeing/Rishikesh/River_Rafting.jpg',
    triveniGhat: '/images/sightseeing/Rishikesh/Triveni_Ghat.jpg',
    beatlesAshram: '/images/sightseeing/Rishikesh/Beatles_Ashram.jpg',
  },
  prayagraj: {
    hero: '/images/sightseeing/Prayagraj/Prayagraj_hero_section.jpg',
    sangam: '/images/sightseeing/Prayagraj/Triveni_Sangam.jpg',
    fort: '/images/sightseeing/Prayagraj/Allahabad_Fort.jpg',
    anandBhawan: '/images/sightseeing/Prayagraj/Anand_Bhawan.jpg',
    khusroBagh: '/images/sightseeing/Prayagraj/Khusro_Bagh.jpg',
  },
  vaishnoDevi: {
    hero: '/images/sightseeing/Vaishno_Devi/Vaishno_Devi_hero_section.jpg',
    temple: '/images/sightseeing/Vaishno_Devi/Vaishno_Devi_Temple.jpg',
    ardhkuwari: '/images/sightseeing/Vaishno_Devi/Ardhkuwari_Cave.avif',
    bhairavnath: '/images/sightseeing/Vaishno_Devi/Bhairavnath_Temple.jpg',
  },
  chardhamHeroes: {
    delhi: '/images/chardham/chardham-yatra-delhi-hero.webp',
    haridwar: '/images/chardham/chardham-haridwar-hero.webp',
    dehradun: '/images/chardham/chardham-dehradun-hero.webp',
    rishikesh: '/images/chardham/chardham-rishikesh-hero.webp',
    kedarnath: '/images/chardham/kedarnath-hero.webp',
    haridwarKedarnath: '/images/chardham/haridwar-kedarnath-hero.webp',
  },
  vehicles: {
    sedan: '/images/car/sedan.webp',
    sedanSide: '/images/car/sedan-side.webp',
    sedanInterior: '/images/car/sedan-interior.webp',
    sedanBack: '/images/car/sedan-back.webp',
    suv: '/images/car/suv.webp',
    suv2: '/images/car/suv2.webp',
    suvSide: '/images/car/suv-side.webp',
    suvInterior: '/images/car/suv-interior.webp',
    suvBack: '/images/car/suv-back.webp',
    premiumSuv: '/images/wedding/premium_suv.jpg',
    luxuryCar: '/images/wedding/luxury_car.jpg',
    vintageCar: '/images/wedding/vintage_car.jpg',
    luxury: '/images/car/luxury.webp',
    luxuryInterior: '/images/car/luxury-interior.webp',
    luxuryBus: '/images/car/luxury_bus.webp',
    luxuryBus2: '/images/car/luxury_bus2.webp',
    bus: '/images/car/bus.webp',
  },
  buses: {
    bus22: '/images/bus/22_SEATER_BUS.jpg',
    bus25: '/images/bus/25_SEATER_BUS.jpg',
    bus27: '/images/bus/27_SEATER_BUS.jpg',
    bus35: '/images/bus/35_SEATER_BUS.jpg',
    bus41: '/images/bus/41_SEATER_BUS.jpg',
    bus45: '/images/bus/45_SEATER_BUS.jpg',
    bus49: '/images/bus/49_SEATER_BUS.jpg',
    bus56: '/images/bus/56_SEATER_BUS.jpg',
    busHero: '/images/bus/hero_section_image.webp',
  },
  tempos: {
    t12: '/images/tempo/12_seater.jpg',
    t16: '/images/tempo/16_seater.jpg',
    t17: '/images/tempo/17_seater.jpg',
    t20: '/images/tempo/20_seater.jpg',
    t26: '/images/tempo/26_seater.jpg',
  },
  packages: {
    chardham: '/images/packages/chardham.webp',
  },
};

// ---------------------------------------------------------------------------
// 10. ROUTE GENERATOR FUNCTION
// ---------------------------------------------------------------------------
function generateRoute({ slug, pageType, vehicleType, origin, destination, title, seoTitle, seoDesc, seoKeywords }) {
  const veh = vehicles[vehicleType] || vehicles.innova;
  const orig = origins[origin] || null;
  const dest = destinations[destination] || destinations.chardham;
  const distData = orig?.distances[destination];

  // Dynamic image selection based on page type and vehicle
  let heroImage, vehicleImage, gallery;

  if (pageType === 'vehicleHub') {
    heroImage = imageBank.temples.chardham;
    vehicleImage = veh.image;
    gallery = [
      veh.sideImage, veh.interiorImage, veh.backImage,
      imageBank.temples.kedarnath, imageBank.temples.badrinath,
      imageBank.haridwar.gangaAarti,
    ];
  } else if (pageType === 'route') {
    heroImage = orig?.heroImage || imageBank.chardhamHeroes.delhi;
    vehicleImage = veh.image;
    gallery = orig?.galleryImages || [
      imageBank.temples.kedarnath, imageBank.temples.badrinath,
      imageBank.haridwar.harKiPauri, imageBank.rishikesh.laxmanJhula,
    ];
  } else if (pageType === 'dham') {
    heroImage = dest.heroImage;
    vehicleImage = imageBank.vehicles.suv;
    gallery = [
      imageBank.haridwar.hero, imageBank.rishikesh.hero,
      imageBank.prayagraj.sangam, imageBank.vaishnoDevi.temple,
    ];
  } else if (pageType === 'package') {
    heroImage = imageBank.packages.chardham;
    vehicleImage = veh.image;
    gallery = [
      imageBank.temples.chardham, imageBank.temples.kedarnath,
      imageBank.haridwar.gangaAarti, imageBank.rishikesh.rafting,
      veh.sideImage, veh.interiorImage,
    ];
  }

  // Calculate price
  const price = orig ? calculatePrice(origin, destination, vehicleType) : 'Custom Quote';
  const priceNum = orig ? calculatePriceNum(origin, destination, vehicleType) : 0;

  // All vehicle prices for comparison
  const allCarPrices = orig ? getAllVehiclePrices(origin, destination) : [];
  const allBusPricesList = orig ? getAllBusPrices(origin, destination) : [];

  return {
    slug,
    title,
    pageType, // 'vehicleHub' | 'route' | 'dham' | 'package'
    vehicleType,
    vehicle: veh,
    origin: orig?.name || null,
    originKey: origin || null,
    destination: dest.name,
    destinationKey: destination,
    destinationData: dest,
    duration: distData?.days || 'Custom',
    distance: distData ? `${distData.totalKm} km (round trip)` : 'Varies',
    distanceKm: distData?.totalKm || 0,
    estimatedPrice: price,
    priceNum,
    allCarPrices,
    allBusPrices: allBusPricesList,
    allBusOptions,
    allCarOptions,
    tempoOptions,
    itinerary: orig ? getItinerary(orig.name, destination) : [],
    whyChoose: generateWhyChoose(vehicleType),
    features: veh.features,
    faqs: generateFAQs(vehicleType, origin, destination, price),
    images: {
      hero: heroImage,
      vehicle: vehicleImage,
      gallery,
    },
    seo: {
      title: seoTitle,
      description: seoDesc,
      keywords: seoKeywords || [],
    },
    originData: orig,
    relatedRoutes: [], // will be populated below
  };
}

// ---------------------------------------------------------------------------
// 11. ALL 35 ROUTES
// ---------------------------------------------------------------------------

// ===== A. VEHICLE HUB PAGES (7) =====
const vehicleHubPages = [
  generateRoute({
    slug: 'by-car',
    pageType: 'vehicleHub',
    vehicleType: 'innova',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Char Dham Yatra by Car — Sedan, SUV, Innova, Fortuner',
    seoTitle: 'Char Dham Yatra by Car 2026 | Sedan, SUV, Innova from ₹38,400',
    seoDesc: 'Book Char Dham Yatra by car — Swift Dzire, Ertiga, Innova Crysta, Fortuner. Starting ₹12/km. AC car with driver. 24/7 support. Call 7668570551.',
    seoKeywords: ['chardham yatra by car', 'char dham by car', 'car rental for chardham', 'chardham yatra car booking', 'chardham by private car'],
  }),
  generateRoute({
    slug: 'by-innova-crysta',
    pageType: 'vehicleHub',
    vehicleType: 'innova',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Char Dham Yatra by Innova Crysta — Premium Comfort',
    seoTitle: 'Char Dham Yatra by Innova Crysta 2026 | ₹18/km | Book Now',
    seoDesc: 'Book Innova Crysta for Char Dham Yatra 2026. 7-seater, AC, experienced driver. India\'s #1 pilgrimage vehicle. From ₹57,600. Call 7668570551.',
    seoKeywords: ['chardham yatra by innova', 'innova crysta chardham', 'innova for chardham yatra', 'chardham innova booking', 'innova crysta hire chardham'],
  }),
  generateRoute({
    slug: 'by-fortuner',
    pageType: 'vehicleHub',
    vehicleType: 'fortuner',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Char Dham Yatra by Fortuner — 4x4 Luxury Pilgrimage',
    seoTitle: 'Char Dham Yatra by Fortuner 2026 | 4x4 Luxury SUV | ₹25/km',
    seoDesc: 'Premium Char Dham Yatra by Toyota Fortuner with 4x4. Leather seats, sunroof, hill descent control. VIP pilgrimage experience. Call 7668570551.',
    seoKeywords: ['chardham yatra by fortuner', 'fortuner for chardham', 'luxury car chardham yatra', 'chardham by 4x4', 'fortuner hire chardham'],
  }),
  generateRoute({
    slug: 'by-suv',
    pageType: 'vehicleHub',
    vehicleType: 'suv',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Char Dham Yatra by SUV — Innova, Fortuner, XUV700',
    seoTitle: 'Char Dham Yatra by SUV 2026 | Innova, Fortuner, XUV700 | Book Now',
    seoDesc: 'Book SUV for Char Dham Yatra — Innova Crysta ₹18/km, XUV700 ₹22/km, Fortuner ₹25/km. 7-seater, AC, experienced driver. Call 7668570551.',
    seoKeywords: ['chardham yatra by suv', 'suv for chardham', 'chardham by suv', 'best suv for char dham', 'suv rental chardham yatra'],
  }),
  generateRoute({
    slug: 'by-ertiga',
    pageType: 'vehicleHub',
    vehicleType: 'ertiga',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Char Dham Yatra by Ertiga — Best Family Vehicle',
    seoTitle: 'Char Dham Yatra by Ertiga 2026 | 6-Seater Family MPV | ₹15/km',
    seoDesc: 'Book Maruti Ertiga for Char Dham Yatra. 6-seater, AC, fuel-efficient. Perfect for family of 4-6. From ₹48,000. Call 7668570551.',
    seoKeywords: ['chardham yatra by ertiga', 'ertiga for chardham', 'ertiga chardham package', 'family car chardham yatra', 'ertiga hire chardham'],
  }),
  generateRoute({
    slug: 'by-sedan',
    pageType: 'vehicleHub',
    vehicleType: 'sedan',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Char Dham Yatra by Sedan — Most Affordable Option',
    seoTitle: 'Char Dham Yatra by Sedan 2026 | Swift Dzire ₹12/km | Budget Yatra',
    seoDesc: 'Cheapest Char Dham Yatra by sedan car. Swift Dzire at ₹12/km. AC, experienced driver. Perfect for couple/solo. From ₹38,400. Call 7668570551.',
    seoKeywords: ['chardham yatra by sedan', 'sedan for chardham', 'cheap car chardham yatra', 'budget chardham by car', 'dzire chardham yatra'],
  }),
  generateRoute({
    slug: 'by-bus',
    pageType: 'vehicleHub',
    vehicleType: 'bus35',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Char Dham Yatra by Bus — Group Pilgrimage Travel',
    seoTitle: 'Char Dham Yatra by Bus 2026 | 22 to 56-Seater | Group Booking',
    seoDesc: 'Book AC bus for Char Dham Yatra group tour. 22-56 seater buses from ₹32/km. Perfect for temples trusts, families, corporate groups. Call 7668570551.',
    seoKeywords: ['chardham yatra by bus', 'bus for chardham', 'chardham bus booking', 'group chardham yatra', 'bus hire chardham'],
  }),
];

// ===== B. DELHI ROUTE PAGES (7) =====
const delhiRoutePages = [
  generateRoute({
    slug: 'delhi-to-chardham-yatra-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Delhi to Char Dham Yatra by Car — All Vehicle Options',
    seoTitle: 'Delhi to Char Dham Yatra by Car 2026 | 12 Days | From ₹38,400',
    seoDesc: 'Book car from Delhi to Char Dham Yatra. Sedan ₹12/km, Ertiga ₹15/km, Innova ₹18/km, Fortuner ₹25/km. 12-day package with driver. Call 7668570551.',
    seoKeywords: ['delhi to chardham by car', 'delhi to chardham yatra car', 'car from delhi to chardham', 'delhi chardham car package'],
  }),
  generateRoute({
    slug: 'delhi-to-chardham-yatra-by-innova',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Delhi to Char Dham Yatra by Innova Crysta',
    seoTitle: 'Delhi to Char Dham by Innova Crysta 2026 | 12 Days | ₹57,600',
    seoDesc: 'Book Innova Crysta from Delhi for Char Dham Yatra. 7-seater, AC, 12-day package. ₹18/km with experienced driver. Call 7668570551.',
    seoKeywords: ['delhi to chardham by innova', 'innova delhi to chardham', 'delhi chardham innova package', 'innova crysta chardham from delhi'],
  }),
  generateRoute({
    slug: 'delhi-to-chardham-yatra-by-ertiga',
    pageType: 'route',
    vehicleType: 'ertiga',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Delhi to Char Dham Yatra by Ertiga — Family Package',
    seoTitle: 'Delhi to Char Dham by Ertiga 2026 | Family MPV | ₹48,000',
    seoDesc: 'Book Ertiga from Delhi for Char Dham Yatra. 6-seater family MPV at ₹15/km. 12-day itinerary with experienced driver. Call 7668570551.',
    seoKeywords: ['delhi to chardham by ertiga', 'ertiga delhi to chardham', 'delhi chardham family car', 'ertiga chardham package delhi'],
  }),
  generateRoute({
    slug: 'delhi-to-chardham-yatra-by-bus',
    pageType: 'route',
    vehicleType: 'bus35',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Delhi to Char Dham Yatra by Bus — Group Tour',
    seoTitle: 'Delhi to Char Dham by Bus 2026 | 22-56 Seater | Group Booking',
    seoDesc: 'Book AC bus from Delhi for Char Dham Yatra group tour. 22-56 seater from ₹32/km. 12-day itinerary for temple trusts & families. Call 7668570551.',
    seoKeywords: ['delhi to chardham by bus', 'bus delhi to chardham', 'chardham bus tour from delhi', 'delhi chardham bus package'],
  }),
  generateRoute({
    slug: 'delhi-to-kedarnath-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'delhi',
    destination: 'kedarnath',
    title: 'Delhi to Kedarnath by Car — Sedan, SUV, Innova',
    seoTitle: 'Delhi to Kedarnath by Car 2026 | 6 Days | From ₹11,040',
    seoDesc: 'Book car from Delhi to Kedarnath. 6-day package. Sedan ₹12/km, Innova ₹18/km, Fortuner ₹25/km. Experienced mountain driver. Call 7668570551.',
    seoKeywords: ['delhi to kedarnath by car', 'car delhi to kedarnath', 'delhi kedarnath car package', 'kedarnath by car from delhi'],
  }),
  generateRoute({
    slug: 'delhi-to-do-dham-yatra-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'delhi',
    destination: 'doDham',
    title: 'Delhi to Do Dham Yatra by Car — Kedarnath + Badrinath',
    seoTitle: 'Delhi to Do Dham by Car 2026 | Kedarnath Badrinath | 8 Days',
    seoDesc: 'Book car from Delhi for Do Dham Yatra (Kedarnath + Badrinath). 8-day package from ₹16,800. Sedan, Innova, Fortuner available. Call 7668570551.',
    seoKeywords: ['delhi to do dham by car', 'do dham yatra by car from delhi', 'delhi kedarnath badrinath by car', 'do dham car package delhi'],
  }),
  generateRoute({
    slug: 'delhi-to-badrinath-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'delhi',
    destination: 'badrinath',
    title: 'Delhi to Badrinath by Car — Sedan, SUV, Innova',
    seoTitle: 'Delhi to Badrinath by Car 2026 | 6 Days | From ₹12,720',
    seoDesc: 'Book car from Delhi to Badrinath. 6-day package. Sedan ₹12/km, Innova ₹18/km, Fortuner ₹25/km. Experienced driver. Call 7668570551.',
    seoKeywords: ['delhi to badrinath by car', 'car delhi to badrinath', 'delhi badrinath car package', 'badrinath by car from delhi'],
  }),
];

// ===== C. HARIDWAR ROUTE PAGES (5) =====
const haridwarRoutePages = [
  generateRoute({
    slug: 'haridwar-to-chardham-yatra-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'haridwar',
    destination: 'chardham',
    title: 'Haridwar to Char Dham Yatra by Car — All Options',
    seoTitle: 'Haridwar to Char Dham by Car 2026 | 10 Days | From ₹32,400',
    seoDesc: 'Book car from Haridwar for Char Dham Yatra. Shortest route! Sedan ₹12/km, Innova ₹18/km. 10-day package with driver. Call 7668570551.',
    seoKeywords: ['haridwar to chardham by car', 'car from haridwar to chardham', 'haridwar chardham car package', 'chardham from haridwar by car'],
  }),
  generateRoute({
    slug: 'haridwar-to-chardham-yatra-by-innova',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'haridwar',
    destination: 'chardham',
    title: 'Haridwar to Char Dham Yatra by Innova Crysta',
    seoTitle: 'Haridwar to Char Dham by Innova 2026 | 10 Days | ₹48,600',
    seoDesc: 'Book Innova Crysta from Haridwar for Char Dham Yatra. 7-seater, AC. Shortest route, 10-day package. ₹18/km. Call 7668570551.',
    seoKeywords: ['haridwar to chardham by innova', 'innova haridwar to chardham', 'haridwar chardham innova', 'innova crysta chardham from haridwar'],
  }),
  generateRoute({
    slug: 'haridwar-to-chardham-yatra-by-bus',
    pageType: 'route',
    vehicleType: 'bus35',
    origin: 'haridwar',
    destination: 'chardham',
    title: 'Haridwar to Char Dham Yatra by Bus — Group Tour',
    seoTitle: 'Haridwar to Char Dham by Bus 2026 | Group Booking | 22-56 Seater',
    seoDesc: 'Book AC bus from Haridwar for Char Dham group yatra. 22-56 seater from ₹32/km. 10-day pilgrimage for groups. Call 7668570551.',
    seoKeywords: ['haridwar to chardham by bus', 'bus haridwar to chardham', 'chardham bus tour from haridwar', 'haridwar chardham bus package'],
  }),
  generateRoute({
    slug: 'haridwar-to-kedarnath-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'haridwar',
    destination: 'kedarnath',
    title: 'Haridwar to Kedarnath by Car — Shortest Route',
    seoTitle: 'Haridwar to Kedarnath by Car 2026 | 4 Days | From ₹6,000',
    seoDesc: 'Book car from Haridwar to Kedarnath. Shortest route! 4-day package. Sedan, Ertiga, Innova available. Experienced driver. Call 7668570551.',
    seoKeywords: ['haridwar to kedarnath by car', 'car haridwar to kedarnath', 'haridwar kedarnath car', 'kedarnath from haridwar by car'],
  }),
  generateRoute({
    slug: 'haridwar-to-do-dham-yatra-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'haridwar',
    destination: 'doDham',
    title: 'Haridwar to Do Dham by Car — Kedarnath + Badrinath',
    seoTitle: 'Haridwar to Do Dham by Car 2026 | 6 Days | Kedarnath Badrinath',
    seoDesc: 'Book car from Haridwar for Do Dham Yatra (Kedarnath + Badrinath). 6-day package from ₹13,200. Sedan, Innova, Fortuner. Call 7668570551.',
    seoKeywords: ['haridwar to do dham by car', 'do dham from haridwar by car', 'haridwar kedarnath badrinath car', 'do dham car package haridwar'],
  }),
];

// ===== D. DEHRADUN ROUTE PAGES (4) =====
const dehradunRoutePages = [
  generateRoute({
    slug: 'dehradun-to-chardham-yatra-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'dehradun',
    destination: 'chardham',
    title: 'Dehradun to Char Dham Yatra by Car — Airport Pickup',
    seoTitle: 'Dehradun to Char Dham by Car 2026 | 11 Days | Airport Pickup',
    seoDesc: 'Book car from Dehradun (Jolly Grant Airport) for Char Dham Yatra. 11-day package. Sedan, Innova, Fortuner. Free airport pickup. Call 7668570551.',
    seoKeywords: ['dehradun to chardham by car', 'car from dehradun to chardham', 'dehradun chardham car package', 'jolly grant airport chardham car'],
  }),
  generateRoute({
    slug: 'dehradun-to-chardham-yatra-by-innova',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'dehradun',
    destination: 'chardham',
    title: 'Dehradun to Char Dham Yatra by Innova Crysta',
    seoTitle: 'Dehradun to Char Dham by Innova 2026 | 11 Days | ₹50,400',
    seoDesc: 'Book Innova Crysta from Dehradun for Char Dham Yatra. 7-seater, AC. 11-day package with airport pickup. ₹18/km. Call 7668570551.',
    seoKeywords: ['dehradun to chardham by innova', 'innova dehradun to chardham', 'dehradun chardham innova package', 'innova crysta chardham dehradun'],
  }),
  generateRoute({
    slug: 'dehradun-to-kedarnath-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'dehradun',
    destination: 'kedarnath',
    title: 'Dehradun to Kedarnath by Car — Quick Pilgrimage',
    seoTitle: 'Dehradun to Kedarnath by Car 2026 | 5 Days | From ₹6,480',
    seoDesc: 'Book car from Dehradun to Kedarnath. 5-day package. Sedan, Ertiga, Innova, Fortuner available. Airport pickup included. Call 7668570551.',
    seoKeywords: ['dehradun to kedarnath by car', 'car dehradun to kedarnath', 'dehradun kedarnath car package', 'kedarnath from dehradun by car'],
  }),
  generateRoute({
    slug: 'dehradun-to-do-dham-yatra-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'dehradun',
    destination: 'doDham',
    title: 'Dehradun to Do Dham by Car — Kedarnath + Badrinath',
    seoTitle: 'Dehradun to Do Dham by Car 2026 | 7 Days | Kedarnath Badrinath',
    seoDesc: 'Book car from Dehradun for Do Dham Yatra (Kedarnath + Badrinath). 7-day package. Sedan, Innova, Fortuner. Airport pickup. Call 7668570551.',
    seoKeywords: ['dehradun to do dham by car', 'do dham from dehradun', 'dehradun kedarnath badrinath car', 'do dham car package dehradun'],
  }),
];

// ===== E. RISHIKESH ROUTE PAGES (4) =====
const rishikeshRoutePages = [
  generateRoute({
    slug: 'rishikesh-to-chardham-yatra-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'rishikesh',
    destination: 'chardham',
    title: 'Rishikesh to Char Dham Yatra by Car — Spiritual Start',
    seoTitle: 'Rishikesh to Char Dham by Car 2026 | 10 Days | From ₹31,200',
    seoDesc: 'Book car from Rishikesh for Char Dham Yatra. Spiritual starting point! 10-day package. Sedan, Innova, Fortuner. Experienced driver. Call 7668570551.',
    seoKeywords: ['rishikesh to chardham by car', 'car from rishikesh to chardham', 'rishikesh chardham car package', 'chardham from rishikesh by car'],
  }),
  generateRoute({
    slug: 'rishikesh-to-chardham-yatra-by-innova',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'rishikesh',
    destination: 'chardham',
    title: 'Rishikesh to Char Dham Yatra by Innova Crysta',
    seoTitle: 'Rishikesh to Char Dham by Innova 2026 | 10 Days | ₹46,800',
    seoDesc: 'Book Innova Crysta from Rishikesh for Char Dham Yatra. 7-seater, AC. 10-day spiritual journey. ₹18/km with driver. Call 7668570551.',
    seoKeywords: ['rishikesh to chardham by innova', 'innova rishikesh to chardham', 'rishikesh chardham innova', 'innova crysta chardham rishikesh'],
  }),
  generateRoute({
    slug: 'rishikesh-to-kedarnath-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'rishikesh',
    destination: 'kedarnath',
    title: 'Rishikesh to Kedarnath by Car — Shortest Route',
    seoTitle: 'Rishikesh to Kedarnath by Car 2026 | 4 Days | Shortest Route',
    seoDesc: 'Book car from Rishikesh to Kedarnath. Shortest route (228 km)! 4-day package. Sedan, Ertiga, Innova available. Call 7668570551.',
    seoKeywords: ['rishikesh to kedarnath by car', 'car rishikesh to kedarnath', 'rishikesh kedarnath car', 'kedarnath from rishikesh by car'],
  }),
  generateRoute({
    slug: 'rishikesh-to-do-dham-yatra-by-car',
    pageType: 'route',
    vehicleType: 'innova',
    origin: 'rishikesh',
    destination: 'doDham',
    title: 'Rishikesh to Do Dham by Car — Kedarnath + Badrinath',
    seoTitle: 'Rishikesh to Do Dham by Car 2026 | 5 Days | Kedarnath Badrinath',
    seoDesc: 'Book car from Rishikesh for Do Dham Yatra (Kedarnath + Badrinath). 5-day package. Sedan, Innova, Fortuner. Shortest route. Call 7668570551.',
    seoKeywords: ['rishikesh to do dham by car', 'do dham from rishikesh', 'rishikesh kedarnath badrinath car', 'do dham car package rishikesh'],
  }),
];

// ===== F. INDIVIDUAL DHAM PAGES (4) =====
const dhamPages = [
  generateRoute({
    slug: 'kedarnath-yatra-by-car',
    pageType: 'dham',
    vehicleType: 'innova',
    origin: 'haridwar',
    destination: 'kedarnath',
    title: 'Kedarnath Yatra by Car — Complete Travel Guide 2026',
    seoTitle: 'Kedarnath Yatra by Car 2026 | Sedan, Innova, Bus | From ₹6,000',
    seoDesc: 'Plan Kedarnath Yatra by car — complete guide with vehicle options, pricing, route, itinerary. Sedan, Ertiga, Innova, Fortuner, Bus. Call 7668570551.',
    seoKeywords: ['kedarnath by car', 'kedarnath yatra car', 'car to kedarnath', 'kedarnath car rental', 'how to reach kedarnath by car'],
  }),
  generateRoute({
    slug: 'badrinath-yatra-by-car',
    pageType: 'dham',
    vehicleType: 'innova',
    origin: 'haridwar',
    destination: 'badrinath',
    title: 'Badrinath Yatra by Car — Complete Travel Guide 2026',
    seoTitle: 'Badrinath Yatra by Car 2026 | Sedan, Innova, Bus | Complete Guide',
    seoDesc: 'Plan Badrinath Yatra by car. Vehicle options, pricing, route map. Sedan ₹12/km, Innova ₹18/km, Fortuner ₹25/km. Call 7668570551 to book.',
    seoKeywords: ['badrinath by car', 'badrinath yatra car', 'car to badrinath', 'badrinath car rental', 'how to reach badrinath by car'],
  }),
  generateRoute({
    slug: 'gangotri-yatra-by-car',
    pageType: 'dham',
    vehicleType: 'innova',
    origin: 'haridwar',
    destination: 'chardham', // using chardham distances as proxy
    title: 'Gangotri Yatra by Car — Complete Travel Guide 2026',
    seoTitle: 'Gangotri Yatra by Car 2026 | Route, Pricing, Vehicle Options',
    seoDesc: 'Plan Gangotri Yatra by car. Route from Haridwar/Delhi, vehicle options, pricing. Sedan, Innova, Fortuner available. Call 7668570551.',
    seoKeywords: ['gangotri by car', 'gangotri yatra car', 'car to gangotri', 'gangotri car rental', 'how to reach gangotri by car'],
  }),
  generateRoute({
    slug: 'yamunotri-yatra-by-car',
    pageType: 'dham',
    vehicleType: 'innova',
    origin: 'haridwar',
    destination: 'chardham', // using chardham distances as proxy
    title: 'Yamunotri Yatra by Car — Complete Travel Guide 2026',
    seoTitle: 'Yamunotri Yatra by Car 2026 | Route, Pricing, Vehicle Options',
    seoDesc: 'Plan Yamunotri Yatra by car. Route from Haridwar/Delhi, vehicle options, pricing. First Dham of Char Dham circuit. Call 7668570551.',
    seoKeywords: ['yamunotri by car', 'yamunotri yatra car', 'car to yamunotri', 'yamunotri car rental', 'how to reach yamunotri by car'],
  }),
];

// Override dham page images & destination data for gangotri and yamunotri
dhamPages[2].destinationData = destinations.gangotri;
dhamPages[2].destination = 'Gangotri';
dhamPages[2].destinationKey = 'gangotri';
dhamPages[2].images.hero = imageBank.temples.gangotri;
dhamPages[2].images.gallery = [
  imageBank.rishikesh.hero, imageBank.haridwar.gangaAarti,
  imageBank.prayagraj.sangam, imageBank.vaishnoDevi.hero,
];

dhamPages[3].destinationData = destinations.yamunotri;
dhamPages[3].destination = 'Yamunotri';
dhamPages[3].destinationKey = 'yamunotri';
dhamPages[3].images.hero = imageBank.temples.yamunotri;
dhamPages[3].images.gallery = [
  imageBank.rishikesh.laxmanJhula, imageBank.haridwar.harKiPauri,
  imageBank.prayagraj.fort, imageBank.vaishnoDevi.temple,
];

// ===== G. SPECIAL PACKAGE PAGES (4) =====
const packagePages = [
  generateRoute({
    slug: 'luxury-suv-package',
    pageType: 'package',
    vehicleType: 'fortuner',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Luxury SUV Char Dham Yatra Package — Fortuner & Premium Cars',
    seoTitle: 'Luxury Char Dham Yatra Package 2026 | Fortuner, Premium SUV | VIP',
    seoDesc: 'Premium luxury Char Dham Yatra package by Fortuner/XUV700. 4x4 SUV, leather seats, VIP experience. 12-day all-inclusive. Call 7668570551.',
    seoKeywords: ['luxury chardham yatra', 'premium chardham package', 'fortuner chardham package', 'vip chardham yatra', 'luxury car chardham'],
  }),
  generateRoute({
    slug: 'budget-sedan-package',
    pageType: 'package',
    vehicleType: 'sedan',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Budget Char Dham Yatra Package — Sedan at ₹12/km',
    seoTitle: 'Budget Char Dham Yatra 2026 | Sedan ₹12/km | Cheapest Package',
    seoDesc: 'Most affordable Char Dham Yatra by sedan car. Just ₹12/km. Perfect for couples & solo. 12-day package from ₹38,400. Call 7668570551.',
    seoKeywords: ['budget chardham yatra', 'cheap chardham package', 'affordable chardham by car', 'low cost chardham yatra', 'sedan chardham package'],
  }),
  generateRoute({
    slug: 'family-ertiga-package',
    pageType: 'package',
    vehicleType: 'ertiga',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Family Char Dham Yatra Package — Ertiga for 4-6 Members',
    seoTitle: 'Family Char Dham Yatra Package 2026 | Ertiga 6-Seater | ₹15/km',
    seoDesc: 'Best family Char Dham Yatra package by Ertiga. 6-seater, AC. 12-day itinerary for family of 4-6. From ₹48,000. Call 7668570551.',
    seoKeywords: ['family chardham yatra', 'ertiga chardham package', 'family car chardham', 'chardham family package', 'ertiga yatra package'],
  }),
  generateRoute({
    slug: 'group-bus-package',
    pageType: 'package',
    vehicleType: 'bus45',
    origin: 'delhi',
    destination: 'chardham',
    title: 'Group Char Dham Yatra by Bus — 22 to 56 Seater',
    seoTitle: 'Group Char Dham Yatra by Bus 2026 | 22-56 Seater | Temple Trusts',
    seoDesc: 'Book group Char Dham Yatra by AC bus. 22-56 seater, lowest per-person cost. Ideal for temple trusts, community groups, weddings. Call 7668570551.',
    seoKeywords: ['group chardham yatra', 'chardham by bus group', 'bus chardham package', 'chardham group tour', 'temple trust chardham bus'],
  }),
];

// Update package page images for more variety
packagePages[0].images = {
  hero: imageBank.vehicles.premiumSuv,
  vehicle: imageBank.vehicles.premiumSuv,
  gallery: [
    imageBank.vehicles.luxuryCar, imageBank.vehicles.luxuryInterior,
    imageBank.temples.kedarnath, imageBank.temples.badrinath,
    imageBank.haridwar.gangaAarti, imageBank.rishikesh.rafting,
  ],
};
packagePages[1].images = {
  hero: imageBank.chardhamHeroes.delhi,
  vehicle: imageBank.vehicles.sedan,
  gallery: [
    imageBank.vehicles.sedanSide, imageBank.vehicles.sedanInterior,
    imageBank.temples.chardham, imageBank.temples.gangotri,
    imageBank.rishikesh.laxmanJhula, imageBank.prayagraj.sangam,
  ],
};
packagePages[2].images = {
  hero: imageBank.temples.chardham,
  vehicle: imageBank.vehicles.suv,
  gallery: [
    imageBank.vehicles.suvSide, imageBank.vehicles.suvInterior,
    imageBank.haridwar.harKiPauri, imageBank.temples.yamunotri,
    imageBank.vaishnoDevi.hero, imageBank.prayagraj.anandBhawan,
  ],
};
packagePages[3].images = {
  hero: imageBank.buses.busHero,
  vehicle: imageBank.buses.bus45,
  gallery: [
    imageBank.buses.bus22, imageBank.buses.bus35, imageBank.buses.bus56,
    imageBank.temples.kedarnath, imageBank.haridwar.hero,
    imageBank.rishikesh.hero,
  ],
};

// ---------------------------------------------------------------------------
// 12. COMBINE ALL ROUTES & ADD RELATED ROUTES
// ---------------------------------------------------------------------------
const allRoutes = [
  ...vehicleHubPages,
  ...delhiRoutePages,
  ...haridwarRoutePages,
  ...dehradunRoutePages,
  ...rishikeshRoutePages,
  ...dhamPages,
  ...packagePages,
];

// Add related routes
allRoutes.forEach(route => {
  if (route.pageType === 'vehicleHub') {
    route.relatedRoutes = allRoutes
      .filter(r => r.pageType === 'route' && r.vehicleType === route.vehicleType)
      .slice(0, 4)
      .map(r => r.slug);
  } else if (route.pageType === 'route') {
    route.relatedRoutes = [
      ...allRoutes.filter(r => r.pageType === 'vehicleHub' && r.vehicleType === route.vehicleType).map(r => r.slug),
      ...allRoutes.filter(r => r.pageType === 'route' && r.originKey === route.originKey && r.slug !== route.slug).slice(0, 3).map(r => r.slug),
    ];
  } else if (route.pageType === 'dham') {
    route.relatedRoutes = allRoutes
      .filter(r => r.pageType === 'dham' && r.slug !== route.slug)
      .map(r => r.slug);
  } else if (route.pageType === 'package') {
    route.relatedRoutes = allRoutes
      .filter(r => r.pageType === 'package' && r.slug !== route.slug)
      .map(r => r.slug);
  }
});

// ---------------------------------------------------------------------------
// 13. EXPORTS
// ---------------------------------------------------------------------------
export { allRoutes, vehicleHubPages, delhiRoutePages, haridwarRoutePages, dehradunRoutePages, rishikeshRoutePages, dhamPages, packagePages, allBusOptions, allCarOptions, tempoOptions, imageBank, vehicles, origins, destinations };

export function getRouteBySlug(slug) {
  return allRoutes.find(r => r.slug === slug) || null;
}

export function getAllSlugs() {
  return allRoutes.map(r => r.slug);
}

export function getRoutesByPageType(pageType) {
  return allRoutes.filter(r => r.pageType === pageType);
}

export function getRelatedRoutes(slug) {
  const route = getRouteBySlug(slug);
  if (!route) return [];
  return route.relatedRoutes.map(s => getRouteBySlug(s)).filter(Boolean);
}
