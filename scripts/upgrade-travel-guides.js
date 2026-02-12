const fs = require('fs');
const path = require('path');

const pages = [
  'agra-travel-guide',
  'jaipur-travel-guide',
  'varanasi-travel-guide',
  'udaipur-travel-guide',
  'shimla-travel-guide',
  'manali-travel-guide',
  'lucknow-travel-guide',
  'amritsar-travel-guide',
  'rishikesh-travel-guide',
  'haridwar-travel-guide',
  'kashmir-travel-guide',
  'jaisalmer-travel-guide',
  'jodhpur-travel-guide',
  'mathura-vrindavan-travel-guide',
  'dharamshala-travel-guide',
  'mussoorie-travel-guide',
  'nainital-travel-guide',
];

const basePath = path.join(__dirname, '..', 'src', 'app', '(routes)');

// City-specific data extracted from each file's original JSX
const cityData = {
  'agra-travel-guide': { city: 'Agra', wa: 'I need help planning my Agra trip', tocSub: 'Your chapter-by-chapter guide to Agra', introTitle: 'Welcome to Agra', introText: 'Agra is more than just the Taj Mahal. Once the capital of the mighty Mughal Empire, this city on the banks of the Yamuna River is home to <strong>three UNESCO World Heritage Sites</strong>, a vibrant food culture, centuries-old craftsmanship, and the warmth of Braj culture. As an Agra-based cab company, we have put together this guide from our local knowledge to help you make the most of your visit.', stats: [{v:'3',l:'UNESCO Sites'},{v:'450+',l:'Years of History'},{v:'2M+',l:'Visitors Yearly'}], heroSub: 'Everything you need to know about visiting Agra -- attractions, food, shopping, best time to visit, and local secrets. Written by people who call Agra home.', foodSub: 'A city with Mughal culinary heritage and unique local specialties', foodLink: { href: '/agra-food-tour', text: 'Read our complete Agra Food Tour Guide' }, shopLink: { href: '/agra-shopping-guide', text: 'Read our complete Agra Shopping Guide' }, legend: ['Best (Oct-Mar)', 'Okay (Jul-Sep)', 'Avoid (May-Jun)'], ctaTitle: 'Need Help Planning Your Agra Trip?', ctaSub: 'We are Agra locals. Call us for personalized advice on itinerary, timing, and transport.' },
  'jaipur-travel-guide': { city: 'Jaipur', wa: 'I want to book a cab for Jaipur trip', tocSub: 'Your chapter-by-chapter guide to the Pink City', introTitle: 'Welcome to the Pink City', introText: 'Jaipur, the capital of Rajasthan, is a city where royal heritage meets vibrant modern life. Founded in 1727 by Maharaja Sawai Jai Singh II, it was India&apos;s first planned city, built according to Vastu Shastra principles. The city earned its famous &quot;Pink City&quot; nickname in 1876 when it was painted terracotta pink to welcome Prince Albert. Today, Jaipur is a <strong>UNESCO World Heritage City</strong> and the gateway to Rajasthan&apos;s desert kingdoms. From the magnificent Amber Fort perched on Aravalli hills to the iconic Hawa Mahal&apos;s 953 windows, from the bustling Johari Bazaar&apos;s gemstones to the aroma of dal baati churma, Jaipur offers an experience that is quintessentially Indian. As part of the famous Golden Triangle with Delhi and Agra, Jaipur attracts millions of visitors every year. Whether you are here for history, culture, shopping, or food, this guide will help you plan the perfect Jaipur trip.', stats: [{v:'1727',l:'Year Founded'},{v:'UNESCO',l:'Heritage City'},{v:'5M+',l:'Visitors Yearly'}], heroSub: 'Your complete guide to the Pink City -- majestic forts, vibrant bazaars, royal palaces, and Rajasthani cuisine. Everything you need for an unforgettable Jaipur experience.', foodSub: 'Royal Rajasthani cuisine and legendary street food', foodLink: null, shopLink: null, legend: ['Best (Oct-Mar)', 'Okay (Jul-Sep)', 'Avoid (May-Jun)'], ctaTitle: 'Need Help Planning Your Jaipur Trip?', ctaSub: 'We are Rajasthan travel specialists. Call us for personalized advice on itinerary, timing, and transport.' },
  'varanasi-travel-guide': { city: 'Varanasi', wa: 'I want to book a cab for Varanasi trip', tocSub: 'Your chapter-by-chapter guide to the Eternal City', introTitle: 'Welcome to Varanasi', introText: 'Varanasi, also known as Kashi or Banaras, is the spiritual capital of India and one of the world&apos;s oldest continuously inhabited cities. Situated on the banks of the sacred Ganga, this city has been a centre of learning, culture, and devotion for over 5,000 years. The 84 ghats that line the river are the city&apos;s soul -- each with its own story, ritual, and purpose. From the mesmerizing Ganga Aarti at Dashashwamedh Ghat to the ancient Kashi Vishwanath Temple, from the Buddhist pilgrimage site of Sarnath to the famous Banarasi silk looms, Varanasi offers an experience that transcends ordinary tourism. Mark Twain wrote that Varanasi is &quot;older than history, older than tradition, older even than legend.&quot; Whether you seek spiritual awakening, cultural immersion, or simply wish to witness one of humanity&apos;s most enduring civilizations, Varanasi will leave an indelible mark on your soul. This guide covers everything from practical travel tips to hidden gems that only locals know.', stats: [{v:'5000+',l:'Years Old'},{v:'84',l:'Sacred Ghats'},{v:'3M+',l:'Visitors Yearly'}], heroSub: 'The spiritual heart of India -- ancient ghats, sacred temples, mesmerizing Ganga Aarti, and a culture that has thrived for over 5,000 years.', foodSub: 'Ancient vegetarian culinary traditions and iconic street food', foodLink: null, shopLink: null, legend: ['Best (Oct-Mar)', 'Okay (Jul-Sep)', 'Avoid (May-Jun)'], ctaTitle: 'Need Help Planning Your Varanasi Trip?', ctaSub: 'We know Varanasi&apos;s ghats, temples, and hidden gems. Call us for personalized spiritual tourism advice.' },
  'udaipur-travel-guide': { city: 'Udaipur', wa: 'I want to book a cab for Udaipur trip', tocSub: 'Your chapter-by-chapter guide to the City of Lakes', introTitle: 'Welcome to the City of Lakes', introText: 'Udaipur, often called the Venice of the East, is Rajasthan&apos;s most romantic city. Founded in 1559 by Maharana Udai Singh II as the capital of the Mewar kingdom, Udaipur is set around a series of beautiful artificial lakes and surrounded by the ancient Aravalli hills. The city&apos;s white marble palaces, serene lake waters, and rich cultural heritage have captivated visitors for centuries. Lake Pichola, with the ethereal Taj Lake Palace floating at its centre, is one of India&apos;s most iconic images. The City Palace complex, the largest in Rajasthan, tells the story of the Mewar dynasty&apos;s 1,500-year unbroken lineage -- the longest-ruling dynasty in the world. Beyond its royal heritage, Udaipur charms with its narrow old-city lanes, vibrant bazaars, exceptional Rajasthani cuisine, and warm hospitality. From honeymoon couples to history enthusiasts, from art lovers to adventure seekers heading to Kumbhalgarh and Ranakpur, Udaipur is the perfect base for exploring southern Rajasthan.', stats: [{v:'1559',l:'Year Founded'},{v:'7',l:'Major Lakes'},{v:'4M+',l:'Visitors Yearly'}], heroSub: 'The Venice of the East -- shimmering lakes, magnificent palaces, romantic sunsets, and Rajput grandeur nestled in the Aravalli hills.', foodSub: 'Royal Rajasthani cuisine meets romantic lakeside dining', foodLink: null, shopLink: null, legend: ['Best (Sep-Mar)', 'Okay (Jul-Aug)', 'Avoid (May-Jun)'], ctaTitle: 'Need Help Planning Your Udaipur Trip?', ctaSub: 'Romantic getaway or heritage exploration -- we plan the perfect Udaipur experience for you.' },
  'shimla-travel-guide': { city: 'Shimla', wa: 'I want to book a cab for Shimla trip', tocSub: 'Your chapter-by-chapter guide to the Queen of Hills', introTitle: 'Welcome to the Queen of Hills', introText: 'Shimla, the capital of Himachal Pradesh, sits at an altitude of 2,276 metres amidst the majestic Himalayas. Once the summer capital of British India, Shimla retains its colonial character in its Gothic churches, Tudor architecture, and the unmistakable charm of Mall Road. The city cascades along a ridge, with every turn revealing breathtaking views of snow-dusted peaks, deep valleys, and dense deodar forests. The UNESCO-listed Kalka-Shimla Toy Train is one of the world&apos;s most scenic railway journeys, winding through 102 tunnels and over 800 bridges. Beyond its colonial heritage, Shimla is the gateway to deeper Himachal -- from the apple orchards of Narkanda to the skiing slopes of Kufri, from the wild beauty of Spiti Valley to the religious significance of Tattapani. Whether you seek a summer escape from the plains, a winter wonderland of fresh snowfall, or an adventure through the Himalayas, Shimla is the perfect starting point. Our drivers are experienced mountain road experts who ensure your safety and comfort on every hairpin bend.', stats: [{v:'2,276m',l:'Altitude'},{v:'UNESCO',l:'Toy Train Heritage'},{v:'3M+',l:'Visitors Yearly'}], heroSub: 'The Queen of Hills -- colonial charm, snow-capped peaks, the iconic Toy Train, and Himalayan beauty at 2,276 metres above sea level.', foodSub: 'Himachali mountain cuisine and colonial-era cafe culture', foodLink: null, shopLink: null, legend: ['Best (Mar-Jun, Dec-Feb)', 'Okay (Sep-Nov)', 'Avoid (Jul-Aug)'], ctaTitle: 'Need Help Planning Your Shimla Trip?', ctaSub: 'Expert mountain drivers, customized itineraries, and Himachal travel advice -- all one call away.' },
  'manali-travel-guide': { city: 'Manali', wa: 'I want to book a cab for Manali trip', tocSub: 'Your chapter-by-chapter guide to the Himalayan adventure capital', introTitle: 'Welcome to Manali', introText: 'Manali, nestled in the Kullu Valley of Himachal Pradesh at 2,050 metres, is where the Himalayas come alive with adventure, spirituality, and natural beauty. Once a quiet hill town on the ancient trade route to Central Asia, Manali has evolved into India&apos;s premier mountain destination. The town straddles the Beas River, with new Manali&apos;s bustling Mall Road on one side and Old Manali&apos;s bohemian charm on the other. From the adrenaline rush of paragliding over Solang Valley to the spiritual serenity of the 500-year-old Hadimba Temple, from the snow-covered Rohtang Pass to the healing hot springs of Vashisht, Manali offers something for every traveller. The 2020 opening of Atal Tunnel has transformed access to the Lahaul-Spiti Valley, making Manali the gateway to some of India&apos;s most remote and spectacular landscapes. Whether you are a backpacker seeking mountain trails, a couple looking for a romantic getaway, or a family wanting a summer escape from the plains, Manali delivers unforgettable experiences.', stats: [{v:'2,050m',l:'Altitude'},{v:'500+',l:'Years of History'},{v:'5M+',l:'Visitors Yearly'}], heroSub: 'Himalayan adventure awaits -- snow-capped peaks, rushing rivers, ancient temples, and the thrill of India&apos;s adventure capital at 2,050 metres.', foodSub: 'Himachali mountain cuisine meets international backpacker fare', foodLink: null, shopLink: null, legend: ['Best (Apr-Jun, Oct-Feb)', 'Okay (Mar, Sep)', 'Avoid (Jul-Aug)'], ctaTitle: 'Need Help Planning Your Manali Trip?', ctaSub: 'Expert hill drivers, Rohtang permits, and customized Himachal itineraries -- just one call away.' },
  'lucknow-travel-guide': { city: 'Lucknow', wa: 'I want to book a cab for Lucknow trip', tocSub: 'Your chapter-by-chapter guide to the City of Nawabs', introTitle: 'Welcome to the City of Nawabs', introText: 'Lucknow, the capital of Uttar Pradesh, is a city that wears its Nawabi heritage with grace and pride. Once the seat of the Awadh kingdom, Lucknow developed a unique culture that blended Mughal sophistication with local traditions, creating a refined civilization known for its tehzeeb (etiquette), adab (respect), and nazakat (elegance). The city&apos;s architectural wonders -- from the labyrinthine Bara Imambara to the imposing Rumi Darwaza -- speak of a time when Lucknow rivalled Delhi in grandeur. But Lucknow&apos;s greatest legacy may be its cuisine. The city is India&apos;s kebab capital, where Tunday Kebabi has been serving melt-in-mouth galouti kebabs since 1905, where Awadhi biryani is cooked in the dum style perfected by royal chefs, and where Chowk&apos;s narrow lanes offer a food experience unmatched anywhere in India. Add to this the exquisite Chikankari embroidery that has earned UNESCO recognition, the vibrant Hazratganj boulevard, and the city&apos;s legendary hospitality, and you have one of India&apos;s most rewarding destinations.', stats: [{v:'1775',l:'Nawabi Capital'},{v:'160+',l:'Spices in Kebabs'},{v:'3M+',l:'Visitors Yearly'}], heroSub: 'The City of Nawabs -- where Awadhi grandeur, legendary kebabs, exquisite Chikankari, and tehzeeb (refined culture) come alive in every lane.', foodSub: 'India&apos;s kebab capital and Awadhi culinary heaven', foodLink: null, shopLink: null, legend: ['Best (Oct-Mar)', 'Okay (Jul-Sep)', 'Avoid (May-Jun)'], ctaTitle: 'Need Help Planning Your Lucknow Trip?', ctaSub: 'Nawabi heritage, legendary food tours, and seamless travel -- we make it happen.' },
  'amritsar-travel-guide': { city: 'Amritsar', wa: 'I want to book a cab for Amritsar trip', tocSub: 'Your chapter-by-chapter guide to the Holy City', introTitle: 'Welcome to the Holy City', introText: 'Amritsar, the spiritual and cultural heart of Punjab, is a city that touches the soul. Founded in 1577 by Guru Ram Das, the fourth Sikh Guru, Amritsar derives its name from the Amrit Sarovar -- the sacred pool of nectar that surrounds the resplendent Golden Temple. Sri Harmandir Sahib, covered in 750 kilograms of pure gold, is more than a place of worship -- it is a beacon of equality, with four entrances symbolizing openness to all castes and creeds. The Langar (community kitchen) serves over 100,000 free meals every day, making it the world&apos;s largest free kitchen. Beyond its spiritual significance, Amritsar is a city of profound historical importance. Jallianwala Bagh bears witness to one of colonial India&apos;s darkest chapters, while the Wagah Border ceremony celebrates India&apos;s sovereignty with daily patriotic fervour. The city is also Punjab&apos;s food capital, where Amritsari kulchas, tandoori chicken, and lassi have achieved legendary status. With its warm Punjabi hospitality, vibrant bazaars, and deeply moving spiritual experiences, Amritsar is one of India&apos;s most essential destinations.', stats: [{v:'1577',l:'Year Founded'},{v:'100K+',l:'Daily Langar Meals'},{v:'750 kg',l:'Gold on Temple'}], heroSub: 'The Holy City of the Sikhs -- the Golden Temple&apos;s divine serenity, Wagah Border&apos;s patriotic fervour, and Punjab&apos;s legendary food culture.', foodSub: 'Punjab&apos;s food capital -- legendary Punjabi cuisine at its finest', foodLink: null, shopLink: null, legend: ['Best (Oct-Apr)', 'Okay (Jul-Sep)', 'Avoid (May-Jun)'], ctaTitle: 'Need Help Planning Your Amritsar Trip?', ctaSub: 'Golden Temple darshan, Wagah Border ceremony, and the best food tour in India -- we arrange it all.' },
  'rishikesh-travel-guide': { city: 'Rishikesh', wa: 'I want to book a cab for Rishikesh trip', tocSub: 'Your chapter-by-chapter guide to the Yoga Capital', introTitle: 'Welcome to the Yoga Capital of the World', introText: 'Rishikesh, nestled in the foothills of the Himalayas at the point where the sacred Ganga descends from the mountains into the plains, is a place where spirituality and adventure exist in perfect harmony. Known globally as the Yoga Capital of the World, this holy city has attracted seekers, sadhus, and sages for millennia. In 1968, it gained worldwide fame when The Beatles visited Maharishi Mahesh Yogi&apos;s ashram, putting Rishikesh on the global map as a destination for transcendental meditation and inner exploration. Today, the city is a unique tapestry of ancient ashrams and trendy rooftop cafes, sacred temples and adrenaline-pumping rapids, meditation caves and bungee platforms. The turquoise-green waters of the Ganga flow beneath iconic suspension bridges, past centuries-old temples, and alongside yoga shalas where practitioners from every corner of the globe gather to deepen their practice. Rishikesh is also the gateway to the Char Dham pilgrimage and serves as a base camp for treks into the Garhwal Himalayas. Just 25 km from Haridwar, the two cities together form one of India&apos;s most essential spiritual corridors. Whether you come for white-water rafting, a yoga teacher training course, a spiritual awakening, or simply to sit by the Ganga and watch the ethereal evening aarti, Rishikesh leaves an indelible mark on every visitor&apos;s soul.', stats: [{v:'230 km',l:'From Delhi'},{v:'372m',l:'Altitude'},{v:'1968',l:'Beatles Visited'}], heroSub: 'The Yoga Capital of the World -- where the sacred Ganga meets Himalayan foothills, Beatles history lives on, and white-water rapids await the adventurous.', foodSub: '100% vegetarian city with world-class international cafe culture', foodLink: null, shopLink: null, legend: ['Best (Oct-Mar)', 'Okay (Apr-May, Sep)', 'Avoid (Jun-Aug monsoon)'], ctaTitle: 'Need Help Planning Your Rishikesh Trip?', ctaSub: 'Yoga retreats, river rafting, temple visits, and Haridwar combo tours -- we arrange it all with safe, reliable drivers.' },
  'haridwar-travel-guide': { city: 'Haridwar', wa: 'I want to book a cab for Haridwar trip', tocSub: 'Your chapter-by-chapter guide to the Gateway to Gods', introTitle: 'Welcome to the Gateway to Gods', introText: 'Haridwar, meaning &quot;Gateway to God,&quot; is one of India&apos;s seven holiest cities (Sapta Puri) and the sacred point where the Ganga leaves the Himalayan foothills to enter the vast Indo-Gangetic plains. This ancient city has been a centre of pilgrimage, learning, and devotion for thousands of years, finding mention in the Puranas and the Mahabharata. Har Ki Pauri, where Lord Vishnu is believed to have left his divine footprint, is the epicentre of Haridwar&apos;s spiritual energy. Every evening, thousands gather at this ghat for the mesmerizing Ganga Aarti -- one of India&apos;s most spectacular spiritual ceremonies, where the night comes alive with fire, chanting, and a river of floating diyas. The city hosts the Kumbh Mela every 12 years, the world&apos;s largest human gathering, when tens of millions of pilgrims converge to bathe in the sacred waters. Beyond its profound spiritual significance, Haridwar serves as the gateway to the Char Dham pilgrimage (Kedarnath, Badrinath, Gangotri, Yamunotri) and offers access to the magnificent Rajaji National Park. The city is also home to Patanjali Yogpeeth and Shantikunj, making it a centre for Ayurveda and yoga. Whether you are a pilgrim seeking blessings, a tourist drawn by the cultural spectacle of the Aarti, or a traveller heading deeper into the mountains of Uttarakhand, Haridwar is an essential and deeply moving stop on any Indian journey.', stats: [{v:'210 km',l:'From Delhi'},{v:'Sapta Puri',l:'7 Holiest Cities'},{v:'5M+',l:'Pilgrims Yearly'}], heroSub: 'The Gateway to the Gods -- where the sacred Ganga enters the plains, ancient temples line holy ghats, and the grand Aarti illuminates the night with a thousand flames.', foodSub: 'Pure vegetarian pilgrimage cuisine -- no meat, eggs, or alcohol in the entire city', foodLink: null, shopLink: null, legend: ['Best (Oct-Apr)', 'Okay (Jul-Sep)', 'Avoid (May-Jun heat)'], ctaTitle: 'Need Help Planning Your Haridwar Trip?', ctaSub: 'Pilgrimage arrangements, Char Dham connections, Rishikesh combos, and Rajaji Park safaris -- we handle everything.' },
  'kashmir-travel-guide': { city: 'Kashmir', wa: 'I want to book a cab for Kashmir trip', tocSub: 'Your chapter-by-chapter guide to Paradise on Earth', introTitle: 'Welcome to Paradise on Earth', introText: 'Kashmir, described by Mughal Emperor Jahangir as &quot;Paradise on Earth,&quot; is a valley of such extraordinary beauty that it has inspired poets, painters, and travellers for centuries. Cradled by the Great Himalayas and the Pir Panjal Range, the Kashmir Valley stretches 135 kilometres long and 32 kilometres wide at an average altitude of 1,850 metres. At its heart lies Srinagar, the summer capital of Jammu and Kashmir, where the legendary Dal Lake reflects snow-capped peaks and ornate houseboats have hosted visitors since the British era. The Mughal emperors were so enchanted by Kashmir that they built magnificent terraced gardens along the lake -- Nishat, Shalimar, and Chashme Shahi stand as testaments to their love for this land. Beyond Srinagar, Gulmarg offers Asia&apos;s highest cable car and India&apos;s best skiing, while Pahalgam&apos;s alpine valleys and rushing rivers provide a more pastoral paradise. The legendary Wazwan cuisine, with its intricate multi-course feasts, is a culinary art form perfected over centuries. Pashmina shawls, hand-knotted carpets, and walnut wood carvings represent some of India&apos;s finest craftsmanship. From the tulip-carpeted springs to the snow-blanketed winters, from shikara rides at sunset to Kahwa by a kangri (fire pot), Kashmir offers experiences that exist nowhere else on Earth. It is not just a destination -- it is an emotion.', stats: [{v:'1.5 hrs',l:'Flight from Delhi'},{v:'1,585m',l:'Srinagar Altitude'},{v:'3,980m',l:'Gulmarg Gondola Peak'}], heroSub: 'Paradise on Earth -- where Dal Lake mirrors snow-capped Himalayas, shikaras glide past floating gardens, and the Wazwan feast tells the story of a thousand years of culinary art.', foodSub: 'Wazwan feasts, Kahwa tea, and a cuisine perfected over a thousand years', foodLink: null, shopLink: null, legend: ['Best (Mar-Oct)', 'Snow Season (Dec-Feb)', 'Avoid (Nov transition)'], ctaTitle: 'Need Help Planning Your Kashmir Trip?', ctaSub: 'Dal Lake houseboats, Gulmarg gondola, Pahalgam valleys, and Wazwan feasts -- we arrange your complete Kashmir experience.' },
  'jaisalmer-travel-guide': { city: 'Jaisalmer', wa: 'I want to book a cab for Jaisalmer trip', tocSub: 'Your chapter-by-chapter guide to the Golden City', introTitle: 'Welcome to the Golden City', introText: null, stats: null, heroSub: null, foodSub: null, foodLink: null, shopLink: null, legend: null, ctaTitle: null, ctaSub: null },
  'jodhpur-travel-guide': { city: 'Jodhpur', wa: 'I want to book a cab for Jodhpur trip', tocSub: 'Your chapter-by-chapter guide to the Blue City', introTitle: 'Welcome to the Blue City', introText: null, stats: null, heroSub: null, foodSub: null, foodLink: null, shopLink: null, legend: null, ctaTitle: null, ctaSub: null },
  'mathura-vrindavan-travel-guide': { city: 'Mathura Vrindavan', wa: 'I want to book a cab for Mathura Vrindavan trip', tocSub: null, introTitle: null, introText: null, stats: null, heroSub: null, foodSub: null, foodLink: null, shopLink: null, legend: null, ctaTitle: null, ctaSub: null },
  'dharamshala-travel-guide': { city: 'Dharamshala', wa: 'I want to book a cab for Dharamshala trip', tocSub: null, introTitle: null, introText: null, stats: null, heroSub: null, foodSub: null, foodLink: null, shopLink: null, legend: null, ctaTitle: null, ctaSub: null },
  'mussoorie-travel-guide': { city: 'Mussoorie', wa: 'I want to book a cab for Mussoorie trip', tocSub: null, introTitle: null, introText: null, stats: null, heroSub: null, foodSub: null, foodLink: null, shopLink: null, legend: null, ctaTitle: null, ctaSub: null },
  'nainital-travel-guide': { city: 'Nainital', wa: 'I want to book a cab for Nainital trip', tocSub: null, introTitle: null, introText: null, stats: null, heroSub: null, foodSub: null, foodLink: null, shopLink: null, legend: null, ctaTitle: null, ctaSub: null },
};

function extractFromOriginal(content, key) {
  // Extract specific inline data from the original return statement
  if (key === 'transport') {
    // Find the transport array: starts with [{ mode: "Triveni Cabs and ends before ].map
    const match = content.match(/(\[\s*\{[^]*?mode:\s*["']Triveni Cabs[^]*?\}\s*\])\.map\(\(t,\s*idx\)/);
    if (match) return match[1];
    return null;
  }
  if (key === 'links') {
    // Find the related links array - it's the LAST [...].map((link before the CTA section
    // Look for the pattern in the interlinks section
    const matches = [...content.matchAll(/(\[\s*\{[^]*?href:\s*["']\/[a-z][^]*?\}\s*\])\.map\(\(link,\s*idx\)/g)];
    if (matches.length > 0) return matches[matches.length - 1][1];
    return null;
  }
  if (key === 'heroSub') {
    // Extract hero subtitle paragraph text
    const match = content.match(/<p[^>]*text-lg[^>]*text-amber-100[^>]*>([\s\S]*?)<\/p>/);
    if (match) return match[1].trim();
    return null;
  }
  if (key === 'tocSub') {
    const match = content.match(/<p[^>]*text-stone-500[^>]*>Your chapter-by-chapter guide to ([^<]*)<\/p>/);
    if (match) return 'Your chapter-by-chapter guide to ' + match[1];
    return null;
  }
  if (key === 'introTitle') {
    const match = content.match(/Welcome to ([^<]*)<\/h2>/);
    if (match) return 'Welcome to ' + match[1];
    return null;
  }
  if (key === 'introText') {
    // Get the intro paragraph - it's in the CHAPTER 0 section
    const ch0Idx = content.indexOf('CHAPTER 0');
    if (ch0Idx === -1) return null;
    const afterCh0 = content.substring(ch0Idx);
    const pMatch = afterCh0.match(/<p[^>]*text-lg[^>]*text-stone-600[^>]*leading-relaxed[^>]*text-center[^>]*>([\s\S]*?)<\/p>/);
    if (pMatch) return pMatch[1].trim();
    return null;
  }
  if (key === 'stats') {
    // Extract the 3 stats from the intro section
    const ch0Idx = content.indexOf('CHAPTER 0');
    if (ch0Idx === -1) return null;
    const afterCh0 = content.substring(ch0Idx, content.indexOf('CHAPTER 1'));
    const statMatches = [...afterCh0.matchAll(/text-3xl font-bold text-amber-700[^>]*>([^<]*)<\/div><div[^>]*text-xs text-stone-500[^>]*>([^<]*)<\/div>/g)];
    if (statMatches.length >= 3) {
      return statMatches.map(m => ({ v: m[1], l: m[2] }));
    }
    return null;
  }
  if (key === 'foodSub') {
    // Extract food section subtitle
    const foodIdx = content.indexOf('CHAPTER 3');
    if (foodIdx === -1) return null;
    const afterFood = content.substring(foodIdx, foodIdx + 500);
    const match = afterFood.match(/<p[^>]*text-stone-500[^>]*>([^<]*)<\/p>/);
    if (match) return match[1];
    return null;
  }
  if (key === 'legend') {
    // Extract the 3 legend items from Best Time section
    const ch1Idx = content.indexOf('CHAPTER 1');
    if (ch1Idx === -1) return null;
    const ch1End = content.indexOf('CHAPTER 2');
    const ch1Section = content.substring(ch1Idx, ch1End);
    const legendMatches = [...ch1Section.matchAll(/rounded bg-[a-z]+-[0-9]+[^/]*\/>\s*([^<]*)/g)];
    if (legendMatches.length >= 3) {
      return legendMatches.map(m => m[1].trim());
    }
    return null;
  }
  if (key === 'ctaTitle') {
    const match = content.match(/Need Help Planning Your ([^?]*)\?/);
    if (match) return 'Need Help Planning Your ' + match[1] + '?';
    return null;
  }
  if (key === 'ctaSub') {
    // CTA subtitle - in the last section
    const ctaIdx = content.lastIndexOf('Need Help Planning');
    if (ctaIdx === -1) return null;
    const afterCta = content.substring(ctaIdx);
    const match = afterCta.match(/<p[^>]*text-amber-200[^>]*>([^<]*)<\/p>/);
    if (match) return match[1];
    return null;
  }
  if (key === 'foodLink') {
    const match = content.match(/<Link href="(\/agra-food-tour)"[^>]*>([^<]*)<[^<]*<\/Link>/);
    if (match) return { href: match[1], text: match[2].trim() };
    return null;
  }
  if (key === 'shopLink') {
    const match = content.match(/<Link href="(\/agra-shopping-guide)"[^>]*>([^<]*)<[^<]*<\/Link>/);
    if (match) return { href: match[1], text: match[2].trim() };
    return null;
  }
  return null;
}

function buildPremiumReturn(city, data) {
  const { transport, links, heroSub, tocSub, introTitle, introText, stats, foodSub, foodLink, shopLink, legend, ctaTitle, ctaSub, wa } = data;

  const statsJsx = stats ? stats.map((s, i) => {
    const sep = i < stats.length - 1 ? `\n                <div className="w-px h-12 bg-amber-300/20" />` : '';
    return `                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 text-center border border-amber-200/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-500">
                  <div className="text-2xl md:text-3xl font-bold text-amber-700">${s.v}</div>
                  <div className="text-xs text-stone-500 mt-1 font-medium">${s.l}</div>
                </div>`;
  }).join('\n') : '';

  const legendJsx = legend ? legend.map((l, i) => {
    const colors = ['bg-emerald-500', 'bg-amber-400', 'bg-red-400'];
    if (i === 1 && l.includes('Snow')) return `<div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-blue-400" /> ${l}</div>`;
    return `<div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded ${colors[i] || 'bg-amber-400'}" /> ${l}</div>`;
  }).join('\n              ') : '';

  const foodLinkJsx = foodLink ? `
            <div className="text-center mt-8">
              <Link href="${foodLink.href}" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-amber-500/25 hover:scale-105 transition-all duration-500">
                ${foodLink.text} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>` : '';

  const shopLinkJsx = shopLink ? `
            <div className="text-center mt-8">
              <Link href="${shopLink.href}" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-amber-500/25 hover:scale-105 transition-all duration-500">
                ${shopLink.text} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>` : '';

  return `  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <style dangerouslySetInnerHTML={{ __html: \`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulse-gold { 0%, 100% { box-shadow: 0 0 20px rgba(245,158,11,0.3); } 50% { box-shadow: 0 0 50px rgba(245,158,11,0.6); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes royal-glow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        .glass-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
        .glass-card-light { background: rgba(255,255,255,0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
        .shimmer-gold { background: linear-gradient(90deg, #f59e0b, #fde68a, #f59e0b); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .hover-lift { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(245,158,11,0.2); }
        .card-glow:hover { box-shadow: 0 0 30px rgba(245,158,11,0.12), 0 25px 50px -12px rgba(0,0,0,0.08); }
        .chapter-badge { background: linear-gradient(135deg, #92400e, #d97706); padding: 4px 16px; border-radius: 9999px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; color: #fef3c7; }
      \` }} />

      <div className="min-h-screen bg-stone-100">
        {/* Hero - Royal Encyclopedia with Animated Gradient */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          <div className="absolute inset-4 md:inset-8 border border-amber-600/30 rounded-lg" />
          <div className="absolute inset-6 md:inset-10 border border-amber-500/15 rounded-lg" />
          {/* Corner compass elements */}
          <div className="absolute top-10 left-10 md:top-14 md:left-14 w-12 h-12 md:w-16 md:h-16" style={{ animation: 'royal-glow 4s ease-in-out infinite' }}>
            <div className="w-full h-full border-2 border-amber-400 rounded-full flex items-center justify-center">
              <div className="w-0.5 h-full absolute bg-amber-400/50" />
              <div className="w-full h-0.5 absolute bg-amber-400/50" />
            </div>
          </div>
          <div className="absolute bottom-10 right-10 md:bottom-14 md:right-14 w-12 h-12 md:w-16 md:h-16" style={{ animation: 'royal-glow 4s ease-in-out infinite', animationDelay: '2s' }}>
            <div className="w-full h-full border-2 border-amber-400 rounded-full flex items-center justify-center">
              <div className="w-0.5 h-full absolute bg-amber-400/50" />
              <div className="w-full h-0.5 absolute bg-amber-400/50" />
            </div>
          </div>
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-700/20 rounded-full blur-[120px]" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-700/15 rounded-full blur-[100px]" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }} />
          <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-amber-400/40 rounded-full" style={{ animation: 'float 5s ease-in-out infinite' }} />
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-yellow-400/30 rounded-full" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }} />
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-amber-300/50 rounded-full" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '3s' }} />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-amber-800/40 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-amber-600/40">
              <Scroll className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 font-semibold text-sm tracking-[0.2em] uppercase">The Complete Encyclopedia</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
              ${city} Travel <span className="shimmer-gold">Guide</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" />
              <span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" />
            </div>
            <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              ${heroSub}
            </p>
            {/* Floating chapter preview cards */}
            <div className="hidden md:flex justify-center gap-4 mb-10">
              {chapters.slice(0, 3).map((ch, i) => (
                <div key={i} className="glass-card rounded-xl p-3 flex items-center gap-2" style={{ animation: \`float \${5 + i}s ease-in-out infinite\`, animationDelay: \`\${i * 0.5}s\` }}>
                  <ch.icon className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-200 text-xs font-medium">{ch.title}</span>
                  <span className="text-amber-400/60 text-xs">{ch.count}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=${encodeURIComponent(wa)}" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:border-amber-400/50 transition-all duration-500">
                WhatsApp Us
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Bar - Glassmorphism */}
        <section className="relative -mt-1 bg-amber-900/60 backdrop-blur-2xl border-y border-amber-600/40">
          <div className="max-w-6xl mx-auto px-4 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-amber-50">
                  <div className="p-2.5 bg-gradient-to-br from-amber-700/40 to-amber-900/40 rounded-xl border border-amber-500/20 shadow-lg shadow-amber-900/20">
                    <f.icon className="w-5 h-5 text-amber-200" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{f.title}</div>
                    <div className="text-xs text-amber-200/70">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Table of Contents - Interactive Chapter Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2>
              <p className="text-stone-500">${tocSub}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {chapters.map((ch, i) => (
                <div key={i} className="glass-card-light rounded-2xl p-5 text-center cursor-default group hover-lift card-glow">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mb-3 group-hover:from-amber-200 group-hover:to-yellow-200 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-500">
                    <ch.icon className="w-7 h-7 text-amber-700" />
                  </div>
                  <div className="font-bold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">{ch.title}</div>
                  <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full px-3 py-1 text-xs font-bold text-amber-600 mt-2 inline-block">{ch.count}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Welcome Intro - Premium Glassmorphism */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-light rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative gradient corners */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-amber-500/10 to-transparent rounded-br-3xl" />
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <span className="chapter-badge">CHAPTER 0</span>
                </div>
                <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center">${introTitle}</h2>
                <p className="text-lg text-stone-600 leading-relaxed text-center max-w-3xl mx-auto">
                  ${introText}
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg mx-auto">
${statsJsx}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Time to Visit - Premium Bar Chart */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="chapter-badge">CHAPTER 1</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit ${city}</h2>
            <p className="text-stone-500 mb-10">Visual month-by-month guide -- taller bars mean better visiting conditions</p>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">
              {monthlyGuide.map((m, i) => (
                <div key={i} className="flex flex-col items-center group cursor-default">
                  <div className="w-full h-32 flex items-end mb-2 relative">
                    <div
                      className={\`w-full rounded-t-lg transition-all duration-500 group-hover:opacity-90 group-hover:shadow-lg \${m.bar > 75 ? 'bg-gradient-to-t from-emerald-600 to-emerald-400 group-hover:shadow-emerald-500/30' : m.bar > 40 ? 'bg-gradient-to-t from-amber-500 to-amber-300 group-hover:shadow-amber-500/30' : 'bg-gradient-to-t from-red-400 to-red-300 group-hover:shadow-red-500/30'}\`}
                      style={{ height: \`\${m.bar}%\` }}
                    />
                  </div>
                  <div className="glass-card-light rounded-lg px-1.5 py-0.5 mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] text-stone-600 whitespace-nowrap">{m.weather}</div>
                  <div className="text-xs font-bold text-stone-700">{m.month}</div>
                  <div className="text-[10px] text-stone-400">{m.temp}</div>
                  <div className={\`text-[10px] font-medium px-2 py-0.5 rounded-full mt-1 \${m.color}\`}>{m.verdict}</div>
                </div>
              ))}
            </div>
            <div className="glass-card-light rounded-xl p-4 flex flex-wrap items-center justify-center gap-4 text-xs">
              ${legendJsx}
            </div>
          </div>
        </section>

        {/* Attractions - Premium Numbered Cards */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="chapter-badge">CHAPTER 2</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in ${city}</h2>
            <div className="space-y-6">
              {attractions.map((a, idx) => (
                <div key={idx} className="glass-card-light rounded-3xl overflow-hidden hover-lift card-glow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-20 bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800 flex items-center justify-center py-4 md:py-0">
                      <span className="text-3xl font-bold text-amber-200/80">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center">
                          <a.icon className="w-4 h-4 text-amber-600" />
                        </div>
                        {a.name}
                      </h3>
                      <p className="text-stone-600 mb-4 leading-relaxed">{a.desc}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-gradient-to-r from-amber-50 to-yellow-50 px-3 py-1.5 rounded-lg text-amber-800 font-medium border border-amber-200/60">Entry: {a.entry}</span>
                        <span className="bg-gradient-to-r from-blue-50 to-sky-50 px-3 py-1.5 rounded-lg text-blue-700 font-medium border border-blue-200/60"><Clock className="w-3 h-3 inline mr-1" />{a.timing}</span>
                        <span className="bg-gradient-to-r from-emerald-50 to-green-50 px-3 py-1.5 rounded-lg text-emerald-700 font-medium border border-emerald-200/60">{a.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Food Guide - Glass Grid */}
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="chapter-badge">CHAPTER 3</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">${city} Food Guide</h2>
            <p className="text-stone-500 mb-10">${foodSub}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {foodSection.map((food, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover-lift card-glow relative overflow-hidden group">
                  <div className="absolute -top-2 -right-2 text-7xl opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">{food.icon}</div>
                  <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2 relative">
                    <div className="w-7 h-7 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Coffee className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    {food.name}
                  </h3>
                  <p className="text-stone-600 text-sm relative leading-relaxed">{food.desc}</p>
                </div>
              ))}
            </div>${foodLinkJsx}
          </div>
        </section>

        {/* Shopping - Premium Cards with Price Tags */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="chapter-badge">CHAPTER 4</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in ${city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shoppingSection.map((item, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover-lift card-glow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-stone-800 flex items-center gap-2">
                      <div className="w-7 h-7 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
                      </div>
                      {item.name}
                    </h3>
                    <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full px-4 py-1.5 text-xs font-bold shadow-lg shadow-amber-500/25 whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>${shopLinkJsx}
          </div>
        </section>

        {/* Getting Around - Transport Cards */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="chapter-badge">CHAPTER 5</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around ${city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {${transport}.map((t, idx) => (
                <div key={idx} className={t.highlight ? "relative rounded-2xl p-[2px] bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" : ""} style={t.highlight ? { backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite' } : {}}>
                  <div className={\`rounded-2xl p-5 transition-all duration-500 \${t.highlight ? 'bg-white' : 'glass-card-light'}\`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-stone-800">{t.mode}</h3>
                      {t.highlight && <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}>RECOMMENDED</span>}
                    </div>
                    <p className="text-amber-700 font-bold text-sm mb-1">{t.price}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Stay - Premium Area Cards */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="chapter-badge">CHAPTER 6</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in ${city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {areaGuide.map((a, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl overflow-hidden hover-lift card-glow">
                  <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 px-5 py-3.5 flex items-center justify-between">
                    <h3 className="font-bold text-white flex items-center gap-2"><Hotel className="w-4 h-4" /> {a.area}</h3>
                    <span className="bg-white/20 backdrop-blur-sm text-amber-100 text-sm font-medium px-3 py-1 rounded-full border border-white/10">{a.budget}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-stone-600 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Premium Cards */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="chapter-badge">APPENDIX</span>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="border-l-4 border-amber-500 glass-card-light rounded-r-2xl p-6 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-500">
                  <h3 className="text-lg font-bold text-stone-800 mb-2 flex items-start gap-3">
                    <span className="bg-gradient-to-br from-amber-600 to-amber-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-lg shadow-amber-500/20">Q{idx + 1}</span>
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 ml-11 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-2 text-center">Explore More Destinations</h2>
            <p className="text-stone-500 text-center mb-8 text-sm">Related guides and tour pages from our collection</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {${links}.map((link, idx) => (
                <Link key={idx} href={link.href} className="glass-card-light hover-lift flex items-center gap-3 p-4 rounded-xl group">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-amber-200 group-hover:to-yellow-200 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-500">
                    <BookOpen className="w-4 h-4 text-amber-700" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">{link.title}</div>
                    <div className="text-xs text-stone-400">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Animated Gradient */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-amber-700 to-stone-800" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          {/* Floating particles */}
          <div className="absolute top-10 left-10 w-3 h-3 bg-amber-400/30 rounded-full" style={{ animation: 'float 5s ease-in-out infinite' }} />
          <div className="absolute bottom-10 right-20 w-4 h-4 bg-yellow-400/20 rounded-full" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-10 w-2 h-2 bg-amber-300/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }} />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: \`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Crect x='10' y='10' width='40' height='40' rx='2'/%3E%3C/g%3E%3C/svg%3E")\` }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <Compass className="w-12 h-12 text-amber-300 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">${ctaTitle}</h2>
            <p className="text-amber-200/80 mb-8 text-lg">${ctaSub}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-800 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=${encodeURIComponent(wa)}" className="inline-flex items-center justify-center gap-2 bg-amber-900/50 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-amber-900/70 hover:border-amber-400/50 transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}`;
}

// Main execution
let successCount = 0;
let errorCount = 0;

pages.forEach(pageName => {
  const filePath = path.join(basePath, pageName, 'page.js');
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${pageName} - file not found`);
    errorCount++;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Find return statement
  const returnMatch = content.match(/\n(\s*return\s*\(\s*\n|\s*return\s*\(<>)/m);
  if (!returnMatch) {
    console.log(`SKIP: ${pageName} - no return found`);
    errorCount++;
    return;
  }
  const returnIndex = content.indexOf(returnMatch[0]);
  const dataSection = content.substring(0, returnIndex);

  // Extract all city-specific data from original
  const cd = cityData[pageName];
  const transport = extractFromOriginal(content, 'transport');
  const links = extractFromOriginal(content, 'links');
  const heroSub = cd.heroSub || extractFromOriginal(content, 'heroSub');
  const tocSub = cd.tocSub || extractFromOriginal(content, 'tocSub') || `Your chapter-by-chapter guide to ${cd.city}`;
  const introTitle = cd.introTitle || extractFromOriginal(content, 'introTitle') || `Welcome to ${cd.city}`;
  const introText = cd.introText || extractFromOriginal(content, 'introText') || '';
  const stats = cd.stats || extractFromOriginal(content, 'stats') || [{v:'---',l:'---'},{v:'---',l:'---'},{v:'---',l:'---'}];
  const foodSub = cd.foodSub || extractFromOriginal(content, 'foodSub') || 'Local specialties and culinary traditions';
  const foodLink = cd.foodLink || extractFromOriginal(content, 'foodLink');
  const shopLink = cd.shopLink || extractFromOriginal(content, 'shopLink');
  const legend = cd.legend || extractFromOriginal(content, 'legend') || ['Best', 'Okay', 'Avoid'];
  const ctaTitle = cd.ctaTitle || extractFromOriginal(content, 'ctaTitle') || `Need Help Planning Your ${cd.city} Trip?`;
  const ctaSub = cd.ctaSub || extractFromOriginal(content, 'ctaSub') || `Call us for personalized advice on your ${cd.city} trip.`;
  const wa = cd.wa;

  if (!transport || !links) {
    console.log(`ERROR: ${pageName} - could not extract transport or links`);
    errorCount++;
    return;
  }

  if (!heroSub || !introText) {
    console.log(`ERROR: ${pageName} - could not extract heroSub or introText`);
    errorCount++;
    return;
  }

  // Build the premium return
  const premiumReturn = buildPremiumReturn(cd.city, {
    transport, links, heroSub, tocSub, introTitle, introText, stats, foodSub, foodLink, shopLink, legend, ctaTitle, ctaSub, wa
  });

  // Combine data section + premium return + closing brace
  const newContent = dataSection + '\n' + premiumReturn + '\n}\n';

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`OK: ${pageName} - upgraded successfully`);
  successCount++;
});

console.log(`\nDone! ${successCount} pages upgraded, ${errorCount} errors.`);
