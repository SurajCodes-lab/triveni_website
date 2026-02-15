/**
 * Additional Sightseeing Blogs - SEO Optimized Content
 * Format matches existing blog structure with HTML content and proper interlinking
 */

export const additionalSightseeingBlogs = [
  {
    id: 'sight-1',
    slug: 'lucknow-nawabi-heritage-city-tour-guide-2026',
    title: 'Lucknow City Tour 2026: Nawabi Heritage, Kebabs & Complete Guide',
    excerpt: 'Explore Lucknow - City of Nawabs. Visit Bara Imambara, Rumi Darwaza, taste Tunday Kababi. Complete sightseeing guide with cab booking tips.',

    relatedTours: [
      { id: "lucknow", name: "Lucknow City Tour", slug: "lucknow", city: "lucknow", price: "₹5,000" }
    ],

    relatedDestinations: [
      { name: "Lucknow", slug: "lucknow", type: "city" },
      { name: "Varanasi", slug: "varanasi", type: "city" }
    ],

    primaryCTA: {
      text: "Book Lucknow Tour",
      url: "/sightseeing/lucknow",
      description: "Explore Nawabi heritage",
      price: "Starting ₹3,000"
    },

    content: `
      <p>Welcome to <strong>Lucknow</strong> - the City of Nawabs, where <em>tehzeeb</em> (etiquette) and legendary cuisine create an unforgettable experience. Our <a href="/sightseeing/lucknow" class="text-blue-600 hover:underline font-semibold">Lucknow sightseeing tours</a> take you through centuries of rich history and culture.</p>

      <h2>Why Visit Lucknow?</h2>
      <ul>
        <li><strong>Architectural Marvels:</strong> Mughal and Awadhi architecture at its finest</li>
        <li><strong>Culinary Paradise:</strong> Home of the famous Awadhi cuisine</li>
        <li><strong>Cultural Heritage:</strong> Poetry, music, and performing arts</li>
        <li><strong>Shopping:</strong> Chikankari embroidery, ittar perfumes</li>
        <li><strong>Affordable:</strong> Less touristy, better value</li>
      </ul>

      <h2>Must-Visit Attractions</h2>

      <h3>Bara Imambara</h3>
      <p>One of India's grandest monuments, built by Nawab Asaf-ud-Daula in 1784.</p>
      <ul>
        <li><strong>Bhool Bhulaiya:</strong> Intricate labyrinth of 1,024 passages</li>
        <li><strong>Central Hall:</strong> World's largest arched hall without external support</li>
        <li><strong>Timing:</strong> Sunrise to sunset</li>
        <li><strong>Entry:</strong> ₹50 Indians, ₹500 foreigners</li>
      </ul>

      <h3>Rumi Darwaza</h3>
      <p>The iconic 60-feet gateway modeled after Turkish design, symbol of Lucknow.</p>

      <h3>Chota Imambara</h3>
      <ul>
        <li>Also known as Hussainabad Imambara</li>
        <li>Stunning chandeliers and gilded domes</li>
        <li>Houses tombs of Nawabs</li>
      </ul>

      <h3>Hazratganj</h3>
      <p>The bustling heart of Lucknow - shopping, dining, and colonial architecture.</p>

      <h2>Lucknow Food Trail</h2>
      <p>No Lucknow visit is complete without its legendary cuisine:</p>
      <ul>
        <li><strong>Tunday Kababi:</strong> Legendary galouti kebabs since 1905</li>
        <li><strong>Idrees Biryani:</strong> Authentic Lucknowi dum biryani</li>
        <li><strong>Rahim's:</strong> Famous nihari and kulcha</li>
        <li><strong>Prakash Kulfi:</strong> Traditional malai kulfi</li>
        <li><strong>Chowk:</strong> Street food paradise</li>
      </ul>

      <h2>Sample Itinerary - 2 Days</h2>
      <p><strong>Day 1:</strong> Bara Imambara, Rumi Darwaza, Chota Imambara, Residency (evening)</p>
      <p><strong>Day 2:</strong> Hazratganj shopping, Aminabad bazaars, food trail, departure</p>

      <h2>How to Reach</h2>
      <table class="w-full my-6 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-3 text-left">From</th>
            <th class="border border-gray-300 p-3 text-left">Distance</th>
            <th class="border border-gray-300 p-3 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Delhi</td>
            <td class="border border-gray-300 p-3">530 km</td>
            <td class="border border-gray-300 p-3">7-8 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Varanasi</td>
            <td class="border border-gray-300 p-3">300 km</td>
            <td class="border border-gray-300 p-3">4-5 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Agra</td>
            <td class="border border-gray-300 p-3">330 km</td>
            <td class="border border-gray-300 p-3">5-6 hours</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Time to Visit</h2>
      <p><strong>October to March:</strong> Pleasant weather, ideal for sightseeing</p>
      <p><strong>Avoid:</strong> May-June (extreme heat 45 degrees+)</p>

      <div class="my-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 rounded-r-lg">
        <h3 class="text-2xl font-bold mb-3 text-gray-800">Experience Nawabi Lucknow!</h3>
        <p class="mb-4 text-gray-700">Book your Lucknow city tour and immerse in royal heritage!</p>
        <a href="/sightseeing/lucknow" class="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-md">Book Tour</a>
      </div>

      <p>Plan your Lucknow trip! <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact us</a> or call <strong>7668570551</strong>!</p>
    `,

    date: "2026-01-15",
    readTime: "14 min read",
    image: "/images/sightseeing/Delhi/red_fort.jpg",
    category: "City Guide",
    tags: ["Lucknow", "Heritage", "Nawabi", "Food", "City Tour", "Uttar Pradesh"],
    keywords: ["lucknow city tour", "lucknow sightseeing", "bara imambara", "lucknow food tour", "nawabi heritage"],
    featured: true
  },

  {
    id: 'sight-2',
    slug: 'varanasi-spiritual-capital-complete-guide-2026',
    title: 'Varanasi 2026: India Spiritual Capital Guide - Ghats, Temples & Aarti',
    excerpt: 'Complete Varanasi travel guide. Experience Ganga Aarti, explore ancient ghats, visit Kashi Vishwanath. Spiritual journey tips and cab booking.',

    relatedTours: [
      { id: "varanasi", name: "Varanasi Tour Package", slug: "varanasi", city: "varanasi", price: "₹8,000" }
    ],

    relatedDestinations: [
      { name: "Varanasi", slug: "varanasi", type: "city" },
      { name: "Allahabad", slug: "allahabad", type: "city" }
    ],

    primaryCTA: {
      text: "Book Varanasi Tour",
      url: "/sightseeing/varanasi",
      description: "Spiritual journey to Kashi",
      price: "Starting ₹5,000"
    },

    content: `
      <p><strong>Varanasi</strong> (Kashi/Banaras) - the oldest living city in the world, where life and death dance together on the banks of the sacred Ganga. Our <a href="/sightseeing/varanasi" class="text-blue-600 hover:underline font-semibold">Varanasi tours</a> offer a profound spiritual experience.</p>

      <h2>Why Varanasi is Special</h2>
      <ul>
        <li><strong>Spiritual Hub:</strong> Sacred to Hindus, Buddhists, and Jains</li>
        <li><strong>Ancient City:</strong> Continuously inhabited for 3,000+ years</li>
        <li><strong>84 Ghats:</strong> Each with unique history and rituals</li>
        <li><strong>Cultural Center:</strong> Classical music, silk weaving, Sanskrit</li>
      </ul>

      <h2>Must-Experience Attractions</h2>

      <h3>Ganga Aarti at Dashashwamedh Ghat</h3>
      <p>The most spectacular ritual - witness priests perform synchronized fire worship at sunset.</p>
      <ul>
        <li><strong>Timing:</strong> 6:30 PM (winter), 7:00 PM (summer)</li>
        <li><strong>Best View:</strong> From boats on the Ganga</li>
        <li><strong>Arrive Early:</strong> 30-45 minutes before for good spots</li>
      </ul>

      <h3>Kashi Vishwanath Temple</h3>
      <ul>
        <li>One of 12 Jyotirlingas - holiest Shiva shrine</li>
        <li>Recently renovated Kashi Vishwanath Corridor</li>
        <li>Photography restricted inside</li>
        <li>Entry: Free (long queues)</li>
      </ul>

      <h3>Boat Ride at Dawn</h3>
      <p>Essential experience - watch sunrise over ghats, observe cremations at Manikarnika, see life unfold.</p>

      <h3>Sarnath</h3>
      <p>10 km from Varanasi - where Buddha gave his first sermon.</p>
      <ul>
        <li>Dhamek Stupa</li>
        <li>Archaeological Museum (lion capital)</li>
        <li>Tibetan monasteries</li>
      </ul>

      <h2>Famous Ghats</h2>
      <ul>
        <li><strong>Dashashwamedh:</strong> Main ghat, Ganga Aarti venue</li>
        <li><strong>Manikarnika:</strong> Primary cremation ghat (photography prohibited)</li>
        <li><strong>Assi Ghat:</strong> Southern end, morning aarti, popular with visitors</li>
        <li><strong>Panchganga:</strong> Scenic views, historical significance</li>
      </ul>

      <h2>Sample Itinerary - 2 Days</h2>
      <p><strong>Day 1:</strong></p>
      <ul>
        <li>Early morning boat ride (5:30 AM)</li>
        <li>Kashi Vishwanath Temple darshan</li>
        <li>Walk through old city lanes</li>
        <li>Evening Ganga Aarti</li>
      </ul>
      <p><strong>Day 2:</strong></p>
      <ul>
        <li>Sarnath excursion (morning)</li>
        <li>Ramnagar Fort</li>
        <li>Banarasi silk shopping</li>
        <li>Street food exploration</li>
      </ul>

      <h2>How to Reach</h2>
      <table class="w-full my-6 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-3 text-left">From</th>
            <th class="border border-gray-300 p-3 text-left">Distance</th>
            <th class="border border-gray-300 p-3 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Delhi</td>
            <td class="border border-gray-300 p-3">820 km</td>
            <td class="border border-gray-300 p-3">10-12 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Lucknow</td>
            <td class="border border-gray-300 p-3">300 km</td>
            <td class="border border-gray-300 p-3">4-5 hours</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Time to Visit</h2>
      <p><strong>October to March:</strong> Pleasant weather</p>
      <p><strong>Dev Deepawali (Nov):</strong> Spectacular festival of lights</p>
      <p><strong>Maha Shivaratri:</strong> Grand celebrations</p>

      <div class="my-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-600 rounded-r-lg">
        <h3 class="text-2xl font-bold mb-3 text-gray-800">Begin Your Spiritual Journey!</h3>
        <p class="mb-4 text-gray-700">Book your Varanasi tour and experience India's spiritual heart!</p>
        <a href="/sightseeing/varanasi" class="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors shadow-md">Book Tour</a>
      </div>

      <p>Plan your Varanasi pilgrimage! <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact us</a> or call <strong>7668570551</strong>!</p>
    `,

    date: "2026-01-14",
    readTime: "15 min read",
    image: "/images/sightseeing/Varanasi/varanasi_hero_section.jpg",
    category: "Pilgrimage",
    tags: ["Varanasi", "Spiritual", "Ganga", "Kashi", "Pilgrimage", "Ghats"],
    keywords: ["varanasi tour", "ganga aarti", "kashi vishwanath", "varanasi ghats", "spiritual tourism"],
    featured: true
  },

  {
    id: 'sight-3',
    slug: 'amritsar-golden-temple-wagah-border-guide-2026',
    title: 'Amritsar 2026: Golden Temple, Wagah Border & Complete Travel Guide',
    excerpt: 'Visit Amritsar - home of the Golden Temple. Witness Wagah Border ceremony, explore Jallianwala Bagh. Punjab culture and food guide.',

    relatedTours: [
      { id: "amritsar", name: "Amritsar Tour Package", slug: "amritsar", city: "delhi", price: "₹10,000" }
    ],

    relatedDestinations: [
      { name: "Amritsar", slug: "amritsar", type: "city" },
      { name: "Delhi", slug: "delhi", type: "city" }
    ],

    primaryCTA: {
      text: "Book Amritsar Tour",
      url: "/sightseeing/amritsar",
      description: "Golden Temple experience",
      price: "Starting ₹8,000"
    },

    content: `
      <p>Experience the spiritual and patriotic heart of Punjab in <strong>Amritsar</strong>. From the serene Golden Temple to the electrifying Wagah Border ceremony, our <a href="/sightseeing/amritsar" class="text-blue-600 hover:underline font-semibold">Amritsar tours</a> offer unforgettable experiences.</p>

      <h2>Why Visit Amritsar?</h2>
      <ul>
        <li><strong>Golden Temple:</strong> Holiest Sikh shrine, stunning architecture</li>
        <li><strong>Wagah Border:</strong> Patriotic border ceremony</li>
        <li><strong>History:</strong> Jallianwala Bagh, Partition Museum</li>
        <li><strong>Food:</strong> Best Punjabi cuisine in India</li>
        <li><strong>Culture:</strong> Vibrant Punjabi hospitality</li>
      </ul>

      <h2>Must-Visit Attractions</h2>

      <h3>Golden Temple (Harmandir Sahib)</h3>
      <p>The holiest Gurdwara and a marvel of gold-plated architecture.</p>
      <ul>
        <li><strong>Open:</strong> 24/7, best at sunrise or night</li>
        <li><strong>Entry:</strong> Free (cover head, remove shoes)</li>
        <li><strong>Langar:</strong> Free community kitchen feeds 100,000+ daily</li>
        <li><strong>Palki Sahib:</strong> Evening ceremony moving holy book</li>
      </ul>

      <h3>Wagah Border Ceremony</h3>
      <p>The spectacular retreat ceremony at India-Pakistan border.</p>
      <ul>
        <li><strong>Timing:</strong> 4:30-5:30 PM (varies by season)</li>
        <li><strong>Distance:</strong> 28 km from Amritsar</li>
        <li><strong>Arrive:</strong> 2-3 hours early for seating</li>
        <li><strong>Entry:</strong> Free</li>
      </ul>

      <h3>Jallianwala Bagh</h3>
      <p>Memorial of the 1919 massacre - bullet marks still visible on walls.</p>

      <h3>Partition Museum</h3>
      <p>Moving tribute to those affected by the 1947 Partition.</p>

      <h2>Amritsar Food Trail</h2>
      <ul>
        <li><strong>Bharawan Da Dhaba:</strong> Legendary dal makhani, paratha</li>
        <li><strong>Kesar Da Dhaba:</strong> 100+ years old, authentic taste</li>
        <li><strong>Kulcha Land:</strong> Famous Amritsari kulcha</li>
        <li><strong>Giani Tea Stall:</strong> Best chai and samosas</li>
        <li><strong>Lawrence Road:</strong> Street food paradise</li>
      </ul>

      <h2>Sample Itinerary - 2 Days</h2>
      <p><strong>Day 1:</strong></p>
      <ul>
        <li>Golden Temple (morning)</li>
        <li>Jallianwala Bagh</li>
        <li>Partition Museum</li>
        <li>Wagah Border (evening)</li>
      </ul>
      <p><strong>Day 2:</strong></p>
      <ul>
        <li>Golden Temple sunrise</li>
        <li>Hall Bazaar shopping</li>
        <li>Food trail exploration</li>
        <li>Departure</li>
      </ul>

      <h2>How to Reach</h2>
      <table class="w-full my-6 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-3 text-left">From</th>
            <th class="border border-gray-300 p-3 text-left">Distance</th>
            <th class="border border-gray-300 p-3 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Delhi</td>
            <td class="border border-gray-300 p-3">450 km</td>
            <td class="border border-gray-300 p-3">7-8 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Chandigarh</td>
            <td class="border border-gray-300 p-3">230 km</td>
            <td class="border border-gray-300 p-3">4 hours</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Time to Visit</h2>
      <p><strong>October to March:</strong> Pleasant weather</p>
      <p><strong>Baisakhi (April):</strong> Grand celebrations at Golden Temple</p>
      <p><strong>Diwali:</strong> Temple beautifully illuminated</p>

      <div class="my-8 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-600 rounded-r-lg">
        <h3 class="text-2xl font-bold mb-3 text-gray-800">Experience Divine Amritsar!</h3>
        <p class="mb-4 text-gray-700">Book your Amritsar tour for spiritual and cultural immersion!</p>
        <a href="/sightseeing/amritsar" class="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-md">Book Tour</a>
      </div>

      <p>Plan your Amritsar trip! <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact us</a> or call <strong>7668570551</strong>!</p>
    `,

    date: "2026-01-13",
    readTime: "13 min read",
    image: "/images/sightseeing/Amritsar/Golden_Temple.jpg",
    category: "Pilgrimage",
    tags: ["Amritsar", "Golden Temple", "Wagah Border", "Punjab", "Pilgrimage"],
    keywords: ["amritsar tour", "golden temple", "wagah border", "punjab tourism", "amritsar sightseeing"],
    featured: true
  },

  {
    id: 'sight-4',
    slug: 'haridwar-rishikesh-spiritual-adventure-guide-2026',
    title: 'Haridwar Rishikesh 2026: Spiritual & Adventure Complete Guide',
    excerpt: 'Complete guide to Haridwar and Rishikesh. Ganga Aarti, yoga, rafting, temples. Perfect blend of spirituality and adventure tourism.',

    relatedTours: [
      { id: "rishikesh", name: "Rishikesh Package", slug: "rishikesh", city: "delhi", price: "₹8,000" },
      { id: "haridwar", name: "Haridwar Tour", slug: "haridwar", city: "delhi", price: "₹6,000" }
    ],

    relatedDestinations: [
      { name: "Haridwar", slug: "haridwar", type: "city" },
      { name: "Rishikesh", slug: "rishikesh", type: "city" }
    ],

    primaryCTA: {
      text: "Book Haridwar-Rishikesh Tour",
      url: "/sightseeing/rishikesh",
      description: "Spiritual meets adventure",
      price: "Starting ₹6,000"
    },

    content: `
      <p>Two holy cities on the banks of the Ganga - <strong>Haridwar</strong> for ancient spirituality and <strong>Rishikesh</strong> for yoga and adventure. Our <a href="/sightseeing/rishikesh" class="text-blue-600 hover:underline font-semibold">Haridwar-Rishikesh tours</a> offer the best of both worlds.</p>

      <h2>Haridwar - Gateway to Gods</h2>
      <p>One of the seven holiest places in Hinduism where the Ganga enters the plains.</p>

      <h3>Must-Visit in Haridwar</h3>
      <ul>
        <li><strong>Har Ki Pauri:</strong> Main ghat, footprint of Lord Vishnu</li>
        <li><strong>Ganga Aarti:</strong> Spectacular evening ceremony (6-7 PM)</li>
        <li><strong>Mansa Devi Temple:</strong> Cable car to hilltop temple</li>
        <li><strong>Chandi Devi Temple:</strong> Another ropeway temple</li>
      </ul>

      <h2>Rishikesh - Yoga Capital</h2>
      <p>World-famous destination for yoga, meditation, and adventure sports.</p>

      <h3>Must-Visit in Rishikesh</h3>
      <ul>
        <li><strong>Laxman Jhula:</strong> Iconic suspension bridge</li>
        <li><strong>Ram Jhula:</strong> Longer bridge with ashrams</li>
        <li><strong>Beatles Ashram:</strong> Where the band stayed in 1968</li>
        <li><strong>Triveni Ghat:</strong> Evening aarti venue</li>
      </ul>

      <h2>Adventure Activities</h2>
      <ul>
        <li><strong>River Rafting:</strong> Grade III-IV rapids, ₹600-2,000</li>
        <li><strong>Bungee Jumping:</strong> 83 meters, ₹3,500</li>
        <li><strong>Camping:</strong> Beachside camps, ₹1,500-3,000</li>
        <li><strong>Cliff Jumping:</strong> Included with rafting</li>
      </ul>

      <h2>Sample Itinerary - 3 Days</h2>
      <p><strong>Day 1:</strong> Delhi to Haridwar, Har Ki Pauri, Ganga Aarti</p>
      <p><strong>Day 2:</strong> Haridwar temples, travel to Rishikesh, explore</p>
      <p><strong>Day 3:</strong> Rafting, Beatles Ashram, return</p>

      <h2>How to Reach</h2>
      <table class="w-full my-6 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-3 text-left">Route</th>
            <th class="border border-gray-300 p-3 text-left">Distance</th>
            <th class="border border-gray-300 p-3 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Delhi to Haridwar</td>
            <td class="border border-gray-300 p-3">220 km</td>
            <td class="border border-gray-300 p-3">5-6 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Delhi to Rishikesh</td>
            <td class="border border-gray-300 p-3">250 km</td>
            <td class="border border-gray-300 p-3">5-6 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Haridwar to Rishikesh</td>
            <td class="border border-gray-300 p-3">25 km</td>
            <td class="border border-gray-300 p-3">45 min</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Time to Visit</h2>
      <p><strong>February to May:</strong> Pleasant, rafting open</p>
      <p><strong>September to November:</strong> Post-monsoon, clear skies</p>
      <p><strong>Avoid:</strong> July-August (monsoon, rafting closed)</p>

      <div class="my-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-600 rounded-r-lg">
        <h3 class="text-2xl font-bold mb-3 text-gray-800">Spirit Meets Adventure!</h3>
        <p class="mb-4 text-gray-700">Book your Haridwar-Rishikesh tour for the ultimate experience!</p>
        <a href="/sightseeing/rishikesh" class="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-teal-700 transition-colors shadow-md">Book Tour</a>
      </div>

      <p>Plan your trip! <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact us</a> or call <strong>7668570551</strong>!</p>
    `,

    date: "2026-01-12",
    readTime: "12 min read",
    image: "/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg",
    category: "Spiritual",
    tags: ["Haridwar", "Rishikesh", "Yoga", "Rafting", "Spiritual", "Adventure"],
    keywords: ["haridwar rishikesh tour", "ganga aarti", "river rafting rishikesh", "yoga capital india"],
    featured: false
  },

  {
    id: 'sight-5',
    slug: 'mathura-vrindavan-krishna-tour-guide-2026',
    title: 'Mathura Vrindavan 2026: Lord Krishna Birthplace Complete Guide',
    excerpt: 'Visit the holy land of Lord Krishna. Explore Mathura birthplace, Vrindavan temples, Govardhan Parikrama. Spiritual tourism guide.',

    relatedTours: [
      { id: "mathura", name: "Mathura Vrindavan Tour", slug: "mathura-vrindavan", city: "delhi", price: "₹4,000" }
    ],

    relatedDestinations: [
      { name: "Mathura", slug: "mathura", type: "city" },
      { name: "Agra", slug: "agra", type: "city" }
    ],

    primaryCTA: {
      text: "Book Mathura Tour",
      url: "/sightseeing/delhi-to-mathura-vrindavan-same-day",
      description: "Krishna Janmabhoomi experience",
      price: "Starting ₹3,500"
    },

    content: `
      <p>Walk in the footsteps of Lord Krishna in <strong>Mathura</strong> and <strong>Vrindavan</strong> - the most sacred destinations for Krishna devotees worldwide. Our <a href="/sightseeing/delhi-to-mathura-vrindavan-same-day" class="text-blue-600 hover:underline font-semibold">Mathura-Vrindavan tours</a> take you through 5,000 years of divine history.</p>

      <h2>Why Visit Mathura-Vrindavan?</h2>
      <ul>
        <li><strong>Krishna Janmabhoomi:</strong> Actual birthplace of Lord Krishna</li>
        <li><strong>5,000+ Temples:</strong> Including ancient and new masterpieces</li>
        <li><strong>Living Culture:</strong> Devotional atmosphere year-round</li>
        <li><strong>Easy Access:</strong> 160 km from Delhi, combine with Agra</li>
      </ul>

      <h2>Mathura Highlights</h2>

      <h3>Krishna Janmabhoomi</h3>
      <p>The prison cell where Lord Krishna was born.</p>
      <ul>
        <li><strong>Timings:</strong> 5 AM - 12 PM, 4 PM - 9 PM</li>
        <li><strong>Entry:</strong> Free (photography restricted)</li>
      </ul>

      <h3>Dwarkadhish Temple</h3>
      <p>Beautiful 19th-century temple with intricate carvings.</p>

      <h3>Vishram Ghat</h3>
      <p>Where Krishna rested after killing Kansa - evening aarti is magical.</p>

      <h2>Vrindavan Highlights</h2>

      <h3>Banke Bihari Temple</h3>
      <p>Most popular temple - unique curtain darshan every few seconds.</p>
      <ul>
        <li><strong>Timings:</strong> 7:45 AM - 12 PM, 5:30 PM - 9:30 PM</li>
        <li><strong>Note:</strong> Extremely crowded, photography prohibited</li>
      </ul>

      <h3>ISKCON Temple</h3>
      <p>Modern temple complex with beautiful architecture and light show.</p>

      <h3>Prem Mandir</h3>
      <p>Stunning white marble temple, spectacular at night with lights.</p>

      <h2>Sample Itinerary - Day Trip</h2>
      <p><strong>Morning:</strong> Krishna Janmabhoomi, Dwarkadhish Temple</p>
      <p><strong>Afternoon:</strong> Travel to Vrindavan, lunch</p>
      <p><strong>Evening:</strong> Banke Bihari, ISKCON, Prem Mandir (lit up)</p>

      <h2>How to Reach</h2>
      <table class="w-full my-6 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-3 text-left">From</th>
            <th class="border border-gray-300 p-3 text-left">Distance</th>
            <th class="border border-gray-300 p-3 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Delhi</td>
            <td class="border border-gray-300 p-3">160 km</td>
            <td class="border border-gray-300 p-3">3-4 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Agra</td>
            <td class="border border-gray-300 p-3">60 km</td>
            <td class="border border-gray-300 p-3">1.5 hours</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Time to Visit</h2>
      <p><strong>October to March:</strong> Pleasant weather</p>
      <p><strong>Janmashtami (Aug):</strong> Grand celebrations</p>
      <p><strong>Holi (March):</strong> Famous Lathmar Holi in Barsana</p>

      <div class="my-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-r-lg">
        <h3 class="text-2xl font-bold mb-3 text-gray-800">Radhe Radhe!</h3>
        <p class="mb-4 text-gray-700">Book your Mathura-Vrindavan tour for a divine experience!</p>
        <a href="/sightseeing/delhi-to-mathura-vrindavan-same-day" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md">Book Tour</a>
      </div>

      <p>Plan your pilgrimage! <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact us</a> or call <strong>7668570551</strong>!</p>
    `,

    date: "2026-01-11",
    readTime: "11 min read",
    image: "/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png",
    category: "Pilgrimage",
    tags: ["Mathura", "Vrindavan", "Krishna", "Pilgrimage", "Temple Tour"],
    keywords: ["mathura vrindavan tour", "krishna birthplace", "banke bihari temple", "prem mandir", "krishna pilgrimage"],
    featured: false
  },

  {
    id: 'sight-6',
    slug: 'dehradun-mussoorie-weekend-getaway-guide-2026',
    title: 'Dehradun Mussoorie 2026: Perfect Weekend Getaway from Delhi',
    excerpt: 'Escape to Dehradun and Mussoorie. Hill station charm, waterfalls, colonial heritage. Complete weekend trip guide from Delhi.',

    relatedTours: [
      { id: "mussoorie", name: "Mussoorie Package", slug: "mussoorie", city: "delhi", price: "₹8,000" }
    ],

    relatedDestinations: [
      { name: "Mussoorie", slug: "mussoorie", type: "city" },
      { name: "Dehradun", slug: "dehradun", type: "city" }
    ],

    primaryCTA: {
      text: "Book Mussoorie Trip",
      url: "/sightseeing/mussoorie",
      description: "Queen of Hills awaits",
      price: "Starting ₹7,000"
    },

    content: `
      <p>Just 6 hours from Delhi, <strong>Dehradun</strong> and <strong>Mussoorie</strong> offer the perfect weekend escape. Our <a href="/sightseeing/mussoorie" class="text-blue-600 hover:underline font-semibold">Mussoorie tours</a> combine colonial charm with stunning Himalayan views.</p>

      <h2>Why This is the Perfect Weekend Trip</h2>
      <ul>
        <li><strong>Proximity:</strong> Just 280 km from Delhi</li>
        <li><strong>Climate:</strong> Cool even in summer</li>
        <li><strong>Variety:</strong> Hills, waterfalls, cafes, shopping</li>
        <li><strong>Infrastructure:</strong> Good roads, accommodation options</li>
      </ul>

      <h2>Mussoorie - Queen of Hills</h2>

      <h3>Must-Visit Attractions</h3>
      <ul>
        <li><strong>Kempty Falls:</strong> Spectacular waterfall for swimming</li>
        <li><strong>Gun Hill:</strong> Cable car ride, panoramic views</li>
        <li><strong>Lal Tibba:</strong> Highest point with telescope</li>
        <li><strong>Mall Road:</strong> Shopping, eating, people-watching</li>
        <li><strong>Company Garden:</strong> Beautiful botanical garden</li>
      </ul>

      <h2>Dehradun Highlights</h2>
      <ul>
        <li><strong>Robber's Cave:</strong> Unique cave with stream</li>
        <li><strong>Sahastradhara:</strong> Natural sulfur springs</li>
        <li><strong>Forest Research Institute:</strong> Colonial architecture</li>
        <li><strong>Tapkeshwar Temple:</strong> Cave temple with waterfall</li>
      </ul>

      <h2>Sample Weekend Itinerary</h2>
      <p><strong>Friday Night:</strong> Depart Delhi after work</p>
      <p><strong>Saturday:</strong></p>
      <ul>
        <li>Arrive Dehradun early morning</li>
        <li>Robber's Cave, Sahastradhara</li>
        <li>Drive to Mussoorie (35 km)</li>
        <li>Mall Road evening walk</li>
      </ul>
      <p><strong>Sunday:</strong></p>
      <ul>
        <li>Kempty Falls morning</li>
        <li>Gun Hill cable car</li>
        <li>Company Garden</li>
        <li>Return to Delhi (evening)</li>
      </ul>

      <h2>How to Reach</h2>
      <table class="w-full my-6 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-3 text-left">Route</th>
            <th class="border border-gray-300 p-3 text-left">Distance</th>
            <th class="border border-gray-300 p-3 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Delhi to Dehradun</td>
            <td class="border border-gray-300 p-3">250 km</td>
            <td class="border border-gray-300 p-3">5-6 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Delhi to Mussoorie</td>
            <td class="border border-gray-300 p-3">285 km</td>
            <td class="border border-gray-300 p-3">6-7 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Dehradun to Mussoorie</td>
            <td class="border border-gray-300 p-3">35 km</td>
            <td class="border border-gray-300 p-3">1 hour</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Time to Visit</h2>
      <p><strong>March to June:</strong> Pleasant escape from summer heat</p>
      <p><strong>September to November:</strong> Clear post-monsoon views</p>
      <p><strong>December to February:</strong> Occasional snowfall</p>

      <div class="my-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-r-lg">
        <h3 class="text-2xl font-bold mb-3 text-gray-800">Weekend Escape Awaits!</h3>
        <p class="mb-4 text-gray-700">Book your Dehradun-Mussoorie trip for the perfect getaway!</p>
        <a href="/sightseeing/mussoorie" class="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-md">Book Trip</a>
      </div>

      <p>Plan your weekend! <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact us</a> or call <strong>7668570551</strong>!</p>
    `,

    date: "2026-01-10",
    readTime: "10 min read",
    image: "/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg",
    category: "Hill Station",
    tags: ["Mussoorie", "Dehradun", "Weekend Getaway", "Hill Station", "Uttarakhand"],
    keywords: ["mussoorie tour", "dehradun trip", "weekend getaway delhi", "queen of hills", "kempty falls"],
    featured: false
  },

  {
    id: 'sight-7',
    slug: 'chandigarh-city-beautiful-complete-guide-2026',
    title: 'Chandigarh 2026: City Beautiful Complete Travel Guide',
    excerpt: 'Explore Chandigarh - India planned city. Rock Garden, Sukhna Lake, Rose Garden. Architecture, dining, and nightlife guide.',

    relatedTours: [
      { id: "chandigarh", name: "Chandigarh City Tour", slug: "chandigarh", city: "delhi", price: "₹6,000" }
    ],

    relatedDestinations: [
      { name: "Chandigarh", slug: "chandigarh", type: "city" }
    ],

    primaryCTA: {
      text: "Book Chandigarh Tour",
      url: "/sightseeing/chandigarh",
      description: "India's planned city",
      price: "Starting ₹5,000"
    },

    content: `
      <p>Welcome to <strong>Chandigarh</strong> - India's first planned city, designed by Le Corbusier. Clean streets, green spaces, and modernist architecture make this a refreshing destination. Explore with our <a href="/sightseeing/chandigarh" class="text-blue-600 hover:underline font-semibold">Chandigarh city tours</a>.</p>

      <h2>Why Visit Chandigarh?</h2>
      <ul>
        <li><strong>Clean and Green:</strong> Among India's cleanest cities</li>
        <li><strong>Architecture:</strong> Unique Le Corbusier design</li>
        <li><strong>Gardens:</strong> Beautiful parks and gardens</li>
        <li><strong>Transit Hub:</strong> Gateway to Himachal and Punjab</li>
      </ul>

      <h2>Must-Visit Attractions</h2>

      <h3>Rock Garden</h3>
      <p>Created by Nek Chand from industrial waste - a must-see!</p>
      <ul>
        <li>40 acres of sculptures from recycled materials</li>
        <li>Waterfalls, pathways, open-air theater</li>
        <li><strong>Timings:</strong> 9 AM - 7 PM (6 PM winter)</li>
        <li><strong>Entry:</strong> ₹50 Indians</li>
      </ul>

      <h3>Sukhna Lake</h3>
      <ul>
        <li>Artificial lake perfect for evening walks</li>
        <li>Boating: ₹50-200</li>
        <li>Sunrise jogging track</li>
      </ul>

      <h3>Rose Garden (Zakir Hussain Rose Garden)</h3>
      <p>Asia's largest rose garden with 1,600+ varieties.</p>

      <h3>Capitol Complex</h3>
      <p>UNESCO World Heritage Site - Le Corbusier's masterpiece.</p>

      <h2>Sample Itinerary - Day Trip</h2>
      <p><strong>Morning:</strong> Rock Garden (2 hours)</p>
      <p><strong>Lunch:</strong> Sector 17 or Elante Mall</p>
      <p><strong>Afternoon:</strong> Rose Garden, Capitol Complex</p>
      <p><strong>Evening:</strong> Sukhna Lake sunset, Sector 17 plaza</p>

      <h2>How to Reach</h2>
      <table class="w-full my-6 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-3 text-left">From</th>
            <th class="border border-gray-300 p-3 text-left">Distance</th>
            <th class="border border-gray-300 p-3 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Delhi</td>
            <td class="border border-gray-300 p-3">250 km</td>
            <td class="border border-gray-300 p-3">4-5 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Shimla</td>
            <td class="border border-gray-300 p-3">115 km</td>
            <td class="border border-gray-300 p-3">3 hours</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Time to Visit</h2>
      <p><strong>October to March:</strong> Pleasant weather</p>
      <p><strong>February-March:</strong> Rose Festival</p>
      <p><strong>Avoid:</strong> May-June (40 degrees+ heat)</p>

      <div class="my-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 rounded-r-lg">
        <h3 class="text-2xl font-bold mb-3 text-gray-800">Explore City Beautiful!</h3>
        <p class="mb-4 text-gray-700">Book your Chandigarh tour and experience planned perfection!</p>
        <a href="/sightseeing/chandigarh" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md">Book Tour</a>
      </div>

      <p>Plan your trip! <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact us</a> or call <strong>7668570551</strong>!</p>
    `,

    date: "2026-01-09",
    readTime: "10 min read",
    image: "/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg",
    category: "City Guide",
    tags: ["Chandigarh", "City Beautiful", "Rock Garden", "Weekend Trip", "Punjab"],
    keywords: ["chandigarh tour", "rock garden", "sukhna lake", "le corbusier", "city beautiful"],
    featured: false
  },

  {
    id: 'sight-8',
    slug: 'ayodhya-ram-mandir-complete-guide-2026',
    title: 'Ayodhya Ram Mandir 2026: Complete Pilgrimage & Sightseeing Guide',
    excerpt: 'Visit the newly built Ram Mandir in Ayodhya. Complete guide to darshan, timings, nearby attractions, and how to plan your pilgrimage.',

    relatedTours: [
      { id: "ayodhya", name: "Ayodhya Tour Package", slug: "ayodhya", city: "lucknow", price: "₹5,000" }
    ],

    relatedDestinations: [
      { name: "Ayodhya", slug: "ayodhya", type: "city" },
      { name: "Lucknow", slug: "lucknow", type: "city" }
    ],

    primaryCTA: {
      text: "Book Ayodhya Tour",
      url: "/sightseeing/ayodhya",
      description: "Ram Mandir darshan",
      price: "Starting ₹4,000"
    },

    content: `
      <p>Experience the divine at the newly constructed <strong>Ram Mandir</strong> in <strong>Ayodhya</strong> - Lord Ram's birthplace. Our <a href="/sightseeing/ayodhya" class="text-blue-600 hover:underline font-semibold">Ayodhya tours</a> help you have a blessed darshan experience.</p>

      <h2>About Ram Mandir</h2>
      <ul>
        <li><strong>Location:</strong> Ram Janmabhoomi site, Ayodhya</li>
        <li><strong>Style:</strong> Nagara architecture, pink sandstone</li>
        <li><strong>Height:</strong> 161 feet (3 floors)</li>
        <li><strong>Capacity:</strong> Thousands of devotees daily</li>
      </ul>

      <h2>Darshan Information</h2>
      <ul>
        <li><strong>Timings:</strong> 7 AM - 11 PM (subject to change)</li>
        <li><strong>Entry:</strong> Free (donations accepted)</li>
        <li><strong>Dress Code:</strong> Modest attire recommended</li>
        <li><strong>Queue:</strong> Expect 2-4 hours during peak times</li>
        <li><strong>Photography:</strong> Restricted inside sanctum</li>
      </ul>

      <h2>Other Ayodhya Attractions</h2>
      <ul>
        <li><strong>Hanuman Garhi:</strong> Popular Hanuman temple on hill</li>
        <li><strong>Kanak Bhawan:</strong> Temple with golden idols</li>
        <li><strong>Dashrath Mahal:</strong> Ram's father's palace</li>
        <li><strong>Saryu Ghat:</strong> Evening aarti on riverbank</li>
      </ul>

      <h2>Sample Itinerary</h2>
      <p><strong>Day 1:</strong></p>
      <ul>
        <li>Early morning arrival, freshen up</li>
        <li>Ram Mandir darshan (3-4 hours)</li>
        <li>Hanuman Garhi, Kanak Bhawan</li>
        <li>Evening Saryu Ghat aarti</li>
      </ul>
      <p><strong>Day 2 (Optional):</strong></p>
      <ul>
        <li>Remaining temples</li>
        <li>Local market exploration</li>
        <li>Departure</li>
      </ul>

      <h2>How to Reach</h2>
      <table class="w-full my-6 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-3 text-left">From</th>
            <th class="border border-gray-300 p-3 text-left">Distance</th>
            <th class="border border-gray-300 p-3 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Lucknow</td>
            <td class="border border-gray-300 p-3">135 km</td>
            <td class="border border-gray-300 p-3">3 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Delhi</td>
            <td class="border border-gray-300 p-3">630 km</td>
            <td class="border border-gray-300 p-3">10-11 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Varanasi</td>
            <td class="border border-gray-300 p-3">210 km</td>
            <td class="border border-gray-300 p-3">4 hours</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Time to Visit</h2>
      <p><strong>October to March:</strong> Pleasant weather</p>
      <p><strong>Ram Navami:</strong> Grand celebrations (April)</p>
      <p><strong>Diwali:</strong> Special celebrations</p>

      <div class="my-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-600 rounded-r-lg">
        <h3 class="text-2xl font-bold mb-3 text-gray-800">Jai Shri Ram!</h3>
        <p class="mb-4 text-gray-700">Book your Ayodhya pilgrimage and receive divine blessings!</p>
        <a href="/sightseeing/ayodhya" class="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors shadow-md">Book Tour</a>
      </div>

      <p>Plan your pilgrimage! <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact us</a> or call <strong>7668570551</strong>!</p>
    `,

    date: "2026-01-08",
    readTime: "11 min read",
    image: "/images/sightseeing/Ayodhya/ayodha_hero_section.jpg",
    category: "Pilgrimage",
    tags: ["Ayodhya", "Ram Mandir", "Pilgrimage", "Lord Ram", "Uttar Pradesh"],
    keywords: ["ayodhya ram mandir", "ram janmabhoomi", "ayodhya tour", "ram mandir darshan", "ayodhya pilgrimage"],
    featured: true
  },

  {
    id: 'sight-10',
    slug: 'mcleodganj-dharamshala-tibetan-culture-guide-2026',
    title: 'McLeodganj Dharamshala 2026: Little Lhasa Complete Travel Guide',
    excerpt: 'Explore McLeodganj - home of Dalai Lama. Tibetan culture, Triund trek, cafes, monasteries. Complete Dharamshala area guide.',

    relatedTours: [
      { id: "dharamshala", name: "Dharamshala Package", slug: "dharamshala", city: "delhi", price: "₹12,000" }
    ],

    relatedDestinations: [
      { name: "Dharamshala", slug: "dharamshala", type: "city" },
      { name: "McLeodganj", slug: "mcleodganj", type: "destination" }
    ],

    primaryCTA: {
      text: "Book Dharamshala Tour",
      url: "/sightseeing/dharamshala",
      description: "Explore Little Lhasa",
      price: "Starting ₹10,000"
    },

    content: `
      <p>Discover <strong>McLeodganj</strong> - the Little Lhasa of India, home to the Dalai Lama and vibrant Tibetan culture. Our <a href="/sightseeing/dharamshala" class="text-blue-600 hover:underline font-semibold">Dharamshala tours</a> immerse you in this unique Himalayan destination.</p>

      <h2>Why McLeodganj is Special</h2>
      <ul>
        <li><strong>Tibetan Culture:</strong> Largest Tibetan community outside Tibet</li>
        <li><strong>Dalai Lama:</strong> His Holiness resides here</li>
        <li><strong>Trekking:</strong> Famous Triund and beyond</li>
        <li><strong>Cafes:</strong> Backpacker paradise with great food</li>
        <li><strong>Weather:</strong> Cool even in summer</li>
      </ul>

      <h2>Must-Visit Attractions</h2>

      <h3>Tsuglagkhang Complex</h3>
      <p>The Dalai Lama's temple and residence.</p>
      <ul>
        <li>Main temple with Buddha statue</li>
        <li>Tibet Museum</li>
        <li>Namgyal Monastery</li>
        <li><strong>Timings:</strong> 5 AM - 8 PM</li>
      </ul>

      <h3>Triund Trek</h3>
      <ul>
        <li><strong>Distance:</strong> 9 km one way</li>
        <li><strong>Duration:</strong> 4-5 hours up, 3 hours down</li>
        <li><strong>Difficulty:</strong> Easy to moderate</li>
        <li><strong>Camping:</strong> Overnight stays available</li>
      </ul>

      <h3>Bhagsu Waterfall</h3>
      <p>Easy 2 km walk from McLeodganj, beautiful after monsoon.</p>

      <h3>St. John in the Wilderness</h3>
      <p>Beautiful 1852 Anglican church surrounded by deodar forest.</p>

      <h2>Sample Itinerary - 3 Days</h2>
      <p><strong>Day 1:</strong> Arrive, explore McLeodganj market, Tsuglagkhang</p>
      <p><strong>Day 2:</strong> Triund trek (full day)</p>
      <p><strong>Day 3:</strong> Bhagsu, Dharamkot, cafes, departure</p>

      <h2>How to Reach</h2>
      <table class="w-full my-6 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-3 text-left">From</th>
            <th class="border border-gray-300 p-3 text-left">Distance</th>
            <th class="border border-gray-300 p-3 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Delhi</td>
            <td class="border border-gray-300 p-3">480 km</td>
            <td class="border border-gray-300 p-3">9-10 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Chandigarh</td>
            <td class="border border-gray-300 p-3">250 km</td>
            <td class="border border-gray-300 p-3">5-6 hours</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Time to Visit</h2>
      <p><strong>March to June:</strong> Pleasant weather, ideal trekking</p>
      <p><strong>September to November:</strong> Clear skies, post-monsoon</p>
      <p><strong>Winter:</strong> Snowfall possible, magical atmosphere</p>

      <div class="my-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 rounded-r-lg">
        <h3 class="text-2xl font-bold mb-3 text-gray-800">Experience Tibetan Culture!</h3>
        <p class="mb-4 text-gray-700">Book your McLeodganj tour for spiritual and adventure experience!</p>
        <a href="/sightseeing/dharamshala" class="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-md">Book Tour</a>
      </div>

      <p>Plan your trip! <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact us</a> or call <strong>7668570551</strong>!</p>
    `,

    date: "2026-01-06",
    readTime: "11 min read",
    image: "/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg",
    category: "Hill Station",
    tags: ["McLeodganj", "Dharamshala", "Tibetan", "Triund", "Dalai Lama", "Himachal"],
    keywords: ["mcleodganj tour", "dharamshala trip", "triund trek", "dalai lama temple", "tibetan culture"],
    featured: false
  },

  {
    id: 'sight-11',
    slug: 'udaipur-city-of-lakes-romantic-guide-2026',
    title: 'Udaipur 2026: City of Lakes Romantic Travel Guide',
    excerpt: 'Experience romantic Udaipur - Venice of the East. Lake Pichola, City Palace, sunset boat rides. Complete honeymoon and couple guide.',

    relatedTours: [
      { id: "udaipur", name: "Udaipur Tour Package", slug: "udaipur", city: "delhi", price: "₹15,000" }
    ],

    relatedDestinations: [
      { name: "Udaipur", slug: "udaipur", type: "city" },
      { name: "Jodhpur", slug: "jodhpur", type: "city" }
    ],

    primaryCTA: {
      text: "Book Udaipur Tour",
      url: "/sightseeing/udaipur",
      description: "Romance in Venice of East",
      price: "Starting ₹12,000"
    },

    content: `
      <p>Fall in love in <strong>Udaipur</strong> - the most romantic city in India. With shimmering lakes, grand palaces, and stunning sunsets, our <a href="/sightseeing/udaipur" class="text-blue-600 hover:underline font-semibold">Udaipur tours</a> create unforgettable memories.</p>

      <h2>Why Udaipur is Most Romantic</h2>
      <ul>
        <li><strong>Lake Pichola:</strong> Sunset boat rides are magical</li>
        <li><strong>Palace Hotels:</strong> Live like royalty</li>
        <li><strong>Rooftop Dining:</strong> Lake views everywhere</li>
        <li><strong>Heritage:</strong> 400+ years of Mewar history</li>
        <li><strong>Weather:</strong> Pleasant most of the year</li>
      </ul>

      <h2>Must-Visit Attractions</h2>

      <h3>Lake Pichola Boat Ride</h3>
      <ul>
        <li><strong>Timing:</strong> Sunset is best (5-7 PM)</li>
        <li><strong>Cost:</strong> ₹400-700 per person</li>
        <li><strong>Includes:</strong> Jag Mandir island visit</li>
      </ul>

      <h3>City Palace</h3>
      <p>Largest palace complex in Rajasthan, overlooking Lake Pichola.</p>
      <ul>
        <li><strong>Timings:</strong> 9:30 AM - 5:30 PM</li>
        <li><strong>Entry:</strong> ₹300 Indians</li>
      </ul>

      <h3>Taj Lake Palace</h3>
      <p>Floating white marble palace - even non-guests can dine with reservation.</p>

      <h3>Monsoon Palace (Sajjangarh)</h3>
      <p>Hilltop palace with panoramic sunset views of entire city.</p>

      <h2>Romantic Experiences</h2>
      <ul>
        <li>Sunset boat ride on Lake Pichola</li>
        <li>Dinner at Ambrai or Upre (lakeside)</li>
        <li>Stay at heritage haveli</li>
        <li>Fateh Sagar evening walk</li>
        <li>Private cooking class together</li>
      </ul>

      <h2>Sample Itinerary - 3 Days</h2>
      <p><strong>Day 1:</strong> City Palace, Lake Pichola boat ride, rooftop dinner</p>
      <p><strong>Day 2:</strong> Jagdish Temple, Saheliyon Ki Bari, Monsoon Palace sunset</p>
      <p><strong>Day 3:</strong> Fateh Sagar, Shilpgram, shopping, departure</p>

      <h2>How to Reach</h2>
      <table class="w-full my-6 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-3 text-left">From</th>
            <th class="border border-gray-300 p-3 text-left">Distance</th>
            <th class="border border-gray-300 p-3 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Delhi</td>
            <td class="border border-gray-300 p-3">660 km</td>
            <td class="border border-gray-300 p-3">10-11 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Jaipur</td>
            <td class="border border-gray-300 p-3">400 km</td>
            <td class="border border-gray-300 p-3">6-7 hours</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Time to Visit</h2>
      <p><strong>October to March:</strong> Perfect weather</p>
      <p><strong>Monsoon (July-Sept):</strong> Lakes full, green hills</p>

      <div class="my-8 p-6 bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-600 rounded-r-lg">
        <h3 class="text-2xl font-bold mb-3 text-gray-800">Romance Awaits in Udaipur!</h3>
        <p class="mb-4 text-gray-700">Book your Udaipur romantic getaway for memories of a lifetime!</p>
        <a href="/sightseeing/udaipur" class="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-700 transition-colors shadow-md">Book Tour</a>
      </div>

      <p>Plan your romantic trip! <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact us</a> or call <strong>7668570551</strong>!</p>
    `,

    date: "2026-01-05",
    readTime: "11 min read",
    image: "/images/packages/rajasthan.webp",
    category: "Heritage",
    tags: ["Udaipur", "Romantic", "Lake City", "Honeymoon", "Rajasthan", "Heritage"],
    keywords: ["udaipur tour", "city of lakes", "lake pichola", "romantic destination india", "udaipur honeymoon"],
    featured: true
  },

  {
    id: 'sight-12',
    slug: 'jodhpur-blue-city-desert-safari-guide-2026',
    title: 'Jodhpur 2026: Blue City & Desert Safari Complete Guide',
    excerpt: 'Explore Jodhpur - the Blue City of India. Mehrangarh Fort, desert safari, blue lanes. Complete travel guide with cab booking.',

    relatedTours: [
      { id: "jodhpur", name: "Jodhpur Tour Package", slug: "jodhpur", city: "delhi", price: "₹12,000" }
    ],

    relatedDestinations: [
      { name: "Jodhpur", slug: "jodhpur", type: "city" },
      { name: "Jaisalmer", slug: "jaisalmer", type: "city" }
    ],

    primaryCTA: {
      text: "Book Jodhpur Tour",
      url: "/sightseeing/jodhpur",
      description: "Explore the Blue City",
      price: "Starting ₹10,000"
    },

    content: `
      <p>Welcome to <strong>Jodhpur</strong> - the Blue City, where massive forts tower over seas of blue houses. Our <a href="/sightseeing/jodhpur" class="text-blue-600 hover:underline font-semibold">Jodhpur tours</a> take you through royal history and into the Thar Desert.</p>

      <h2>Why Visit Jodhpur?</h2>
      <ul>
        <li><strong>Mehrangarh Fort:</strong> One of India's most impressive forts</li>
        <li><strong>Blue Houses:</strong> Unique cityscape from above</li>
        <li><strong>Desert Gateway:</strong> Start point for desert adventures</li>
        <li><strong>Food:</strong> Famous for mirchi vada and pyaz kachori</li>
        <li><strong>Textiles:</strong> Bandhej and traditional crafts</li>
      </ul>

      <h2>Must-Visit Attractions</h2>

      <h3>Mehrangarh Fort</h3>
      <p>Massive fort rising 125 meters above the city.</p>
      <ul>
        <li>One of India's best-preserved forts</li>
        <li>Excellent museum inside</li>
        <li>Zip-lining available (Flying Fox)</li>
        <li><strong>Timings:</strong> 9 AM - 5 PM</li>
        <li><strong>Entry:</strong> ₹200 Indians</li>
      </ul>

      <h3>Blue City Walking Tour</h3>
      <p>Explore the narrow blue lanes beneath the fort.</p>
      <ul>
        <li>Best viewed from fort or step wells</li>
        <li>Early morning best for photography</li>
        <li>Guided tours available</li>
      </ul>

      <h3>Jaswant Thada</h3>
      <p>White marble cenotaph with stunning architecture.</p>

      <h3>Clock Tower & Sardar Market</h3>
      <p>Bustling market for spices, textiles, and souvenirs.</p>

      <h2>Desert Safari from Jodhpur</h2>
      <ul>
        <li><strong>Osian:</strong> 65 km, temples and dunes</li>
        <li><strong>Khimsar:</strong> 90 km, village safari</li>
        <li><strong>Activities:</strong> Camel ride, sunset, cultural show</li>
        <li><strong>Cost:</strong> ₹2,000-5,000 per person</li>
      </ul>

      <h2>Sample Itinerary - 2 Days</h2>
      <p><strong>Day 1:</strong> Mehrangarh Fort, Jaswant Thada, Clock Tower, Blue City walk</p>
      <p><strong>Day 2:</strong> Desert safari to Osian, evening return or departure</p>

      <h2>How to Reach</h2>
      <table class="w-full my-6 border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-3 text-left">From</th>
            <th class="border border-gray-300 p-3 text-left">Distance</th>
            <th class="border border-gray-300 p-3 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-3">Jaipur</td>
            <td class="border border-gray-300 p-3">340 km</td>
            <td class="border border-gray-300 p-3">5-6 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Delhi</td>
            <td class="border border-gray-300 p-3">600 km</td>
            <td class="border border-gray-300 p-3">9-10 hours</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-3">Udaipur</td>
            <td class="border border-gray-300 p-3">250 km</td>
            <td class="border border-gray-300 p-3">4-5 hours</td>
          </tr>
        </tbody>
      </table>

      <h2>Best Time to Visit</h2>
      <p><strong>October to March:</strong> Pleasant weather</p>
      <p><strong>Avoid:</strong> April-June (extreme heat 45 degrees+)</p>

      <div class="my-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-r-lg">
        <h3 class="text-2xl font-bold mb-3 text-gray-800">Explore the Blue City!</h3>
        <p class="mb-4 text-gray-700">Book your Jodhpur tour for forts, desert, and royal heritage!</p>
        <a href="/sightseeing/jodhpur" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md">Book Tour</a>
      </div>

      <p>Plan your trip! <a href="/contact" class="text-blue-600 hover:underline font-semibold">Contact us</a> or call <strong>7668570551</strong>!</p>
    `,

    date: "2026-01-04",
    readTime: "12 min read",
    image: "/images/sightseeing/Jodhpur/Mehrangarh Fort.jpg",
    category: "Heritage",
    tags: ["Jodhpur", "Blue City", "Mehrangarh", "Desert Safari", "Rajasthan"],
    keywords: ["jodhpur tour", "blue city", "mehrangarh fort", "desert safari jodhpur", "jodhpur sightseeing"],
    featured: false
  }
];

export default additionalSightseeingBlogs;
