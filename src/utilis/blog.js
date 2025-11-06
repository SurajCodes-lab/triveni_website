// Blog Posts Data
export const blogPosts = [
  {
    id: 1,
    slug: "10-best-travel-destinations-north-india-2025",
    title: "10 Best Travel Destinations in North India 2025 - Complete Guide",
    excerpt: "Discover the most stunning destinations in North India for 2025. From Himalayan peaks to royal palaces, find your perfect getaway with our expert travel guide.",
    content: `
      <p>Planning your 2025 travel to North India? You're in for an incredible journey! From the snow-capped Himalayas to the golden deserts of Rajasthan, North India offers diverse experiences that will leave you spellbound.</p>

      <h2>1. Manali - The Adventure Capital</h2>
      <p>Manali tops our list as the ultimate destination for adventure seekers and nature lovers. Nestled in the Kullu Valley, this hill station offers breathtaking views, thrilling activities, and serene landscapes.</p>

      <h3>Why Visit Manali in 2025?</h3>
      <ul>
        <li>Rohtang Pass adventures and snow activities</li>
        <li>Solang Valley paragliding and skiing</li>
        <li>Ancient Hadimba Temple and Old Manali charm</li>
        <li>Perfect honeymoon destination</li>
      </ul>

      <p><strong>Best Time to Visit:</strong> March to June for pleasant weather, December to February for snowfall</p>
      <p><strong>How to Reach:</strong> Book our comfortable AC tempo traveller or SUV from Delhi</p>

      <h2>2. Jaipur - The Pink City</h2>
      <p>Experience royal Rajasthan in Jaipur, where magnificent forts and palaces tell tales of India's glorious past.</p>

      <h3>Must-Visit Places:</h3>
      <ul>
        <li>Amber Fort - Majestic hilltop fortress</li>
        <li>Hawa Mahal - Palace of Winds</li>
        <li>City Palace - Royal residence</li>
        <li>Jantar Mantar - Ancient observatory</li>
      </ul>

      <h2>3. Rishikesh - Yoga Capital of the World</h2>
      <p>Seek spiritual peace and adventure in Rishikesh, where the holy Ganges flows through the Himalayan foothills.</p>

      <h3>Top Activities:</h3>
      <ul>
        <li>River rafting on the Ganges</li>
        <li>Yoga and meditation retreats</li>
        <li>Bungee jumping and camping</li>
        <li>Evening Ganga Aarti at Triveni Ghat</li>
      </ul>

      <h2>4. Agra - Home of the Taj Mahal</h2>
      <p>No trip to North India is complete without witnessing the eternal beauty of the Taj Mahal, one of the Seven Wonders of the World.</p>

      <h2>5. Shimla - The Queen of Hills</h2>
      <p>Colonial charm meets natural beauty in Shimla, perfect for a romantic getaway or family vacation.</p>

      <h2>6. Udaipur - City of Lakes</h2>
      <p>Often called the Venice of the East, Udaipur mesmerizes with its beautiful lakes, palaces, and romantic ambiance.</p>

      <h2>7. Amritsar - The Golden Temple City</h2>
      <p>Experience Punjabi culture, cuisine, and spirituality at the magnificent Golden Temple.</p>

      <h2>8. Varanasi - Oldest Living City</h2>
      <p>Witness ancient traditions and spiritual energy in the holiest city of India.</p>

      <h2>9. Dharamshala - Little Lhasa</h2>
      <p>Home to the Dalai Lama, this Tibetan settlement offers peace, scenic beauty, and cultural richness.</p>

      <h2>10. Nainital - Lake District of India</h2>
      <p>Beautiful hill station with pristine lakes, perfect for boating and nature walks.</p>

      <h2>How to Plan Your North India Trip</h2>
      <p>Planning a multi-city tour in North India requires proper transportation. Our professional taxi services offer:</p>
      <ul>
        <li>Comfortable AC vehicles (Sedan, SUV, Tempo Traveller)</li>
        <li>Experienced drivers who know the best routes</li>
        <li>Flexible itineraries tailored to your needs</li>
        <li>Affordable rates with no hidden charges</li>
      </ul>

      <h2>Best Time to Visit North India</h2>
      <p><strong>October to March:</strong> Ideal for most destinations with pleasant weather</p>
      <p><strong>April to June:</strong> Perfect for hill stations to escape the heat</p>
      <p><strong>July to September:</strong> Monsoon season, best avoided for mountain areas</p>

      <h2>Booking Your Travel</h2>
      <p>Make your North India journey comfortable and hassle-free with our premium car rental services. Whether you need a sedan for a couple, an SUV for family, or a tempo traveller for a group, we've got you covered!</p>
    `,
    date: "2025-01-15",
    readTime: "8 min read",
    image: "/images/packages/manali.webp",
    category: "Destinations",
    tags: ["North India", "Travel Guide", "Tourism", "Hill Stations"],
    featured: true,
    views: 1250,
    metaTitle: "10 Best Travel Destinations in North India 2025 | Complete Travel Guide",
    metaDescription: "Explore top 10 destinations in North India for 2025. Expert guide to Manali, Jaipur, Rishikesh, Agra & more. Best time to visit, activities & travel tips.",
},

 ]

// Blog categories
export const blogCategories = [
  { name: "All", slug: "all", count: blogPosts.length },
  { name: "Destinations", slug: "destinations", count: blogPosts.filter(post => post.category === "Destinations").length },
  { name: "Travel Tips", slug: "travel-tips", count: blogPosts.filter(post => post.category === "Travel Tips").length },
  { name: "Pilgrimage", slug: "pilgrimage", count: blogPosts.filter(post => post.category === "Pilgrimage").length },
];
