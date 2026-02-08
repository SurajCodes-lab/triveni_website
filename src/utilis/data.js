// Centralized icon imports for better bundle optimization
import {
    Car,
    Clock,
    CreditCard,
    MapPin,
    Package,
    Phone,
    Users,
  } from "@/components/ui/icons";
  
  export const tourDetails = {
    "manali-tour-from-mumbai": {
      title: "Manali Tour from Mumbai",
      price: "₹9,999",
      duration: "5 Days 4 Nights",
      image: "/images/packages/manali.webp",
      startingPoint: "Mumbai",
      destination: "Manali",
      departureDate: "Weekly",
      category: "Adventure",
      overview:
        "Experience the charm of Manali with our adventure-packed package. Enjoy breathtaking views, thrilling activities, and serene landscapes.",
      inclusions: [
        "Travel by AC bus from Mumbai",
        "3-star accommodation for 4 nights",
        "Breakfast and dinner",
        "Sightseeing with a local guide",
        "All taxes included",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Mumbai to Manali",
          details: "Overnight bus journey to Manali.",
        },
        {
          day: "Day 2",
          title: "Explore Manali",
          details: "Visit Hadimba Temple, Mall Road, and more.",
        },
        {
          day: "Day 3",
          title: "Solang Valley",
          details: "Adventure sports and scenic spots.",
        },
        {
          day: "Day 4",
          title: "Rohtang Pass",
          details: "Snow activities and local experiences.",
        },
        {
          day: "Day 5",
          title: "Return to Mumbai",
          details: "Depart for Mumbai in the evening.",
        },
      ],
      highlights: [
        "Snow-covered Rohtang Pass",
        "Solang Valley adventures",
        "Local cultural experiences",
      ],
      accommodation: {
        name: "Manali Heights Hotel",
        rating: "3 Star",
        amenities: ["WiFi", "Restaurant", "Room service"],
      },
    },
    "chardham-yatra-package": {
      title: "Chardham Yatra Package",
      price: "₹24,999",
      duration: "12 Days 11 Nights",
      image: "/images/packages/chardham.webp",
      startingPoint: "Delhi",
      destination: "Chardham",
      departureDate: "Monthly",
      category: "Pilgrimage",
      overview:
        "Embark on a spiritual journey to the four sacred shrines of Uttarakhand with our Chardham Yatra package.",
      inclusions: [
        "Travel by AC bus",
        "Accommodation in deluxe hotels",
        "All meals included",
        "Temple visits and special darshan",
        "Experienced tour guide",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Delhi to Haridwar",
          details: "Drive to Haridwar, evening Ganga Aarti.",
        },
        {
          day: "Day 2-4",
          title: "Yamunotri and Gangotri",
          details: "Visit sacred temples and explore the region.",
        },
        {
          day: "Day 5-6",
          title: "Kedarnath",
          details: "Trek and visit Kedarnath temple.",
        },
        {
          day: "Day 7-8",
          title: "Badrinath",
          details: "Temple visit and sightseeing.",
        },
        {
          day: "Day 9-12",
          title: "Return to Delhi",
          details: "Leisurely return journey.",
        },
      ],
      highlights: [
        "Sacred temples",
        "Cultural experiences",
        "Scenic mountain views",
      ],
      accommodation: {
        name: "Pilgrim Lodge",
        rating: "4 Star",
        amenities: ["Restaurant", "WiFi", "Local assistance"],
      },
    },
    "shimla-from-mumbai": {
      title: "Shimla from Mumbai",
      price: "₹14,999",
      duration: "6 Days 5 Nights",
      image: "/images/packages/manali.webp",
      startingPoint: "Mumbai",
      destination: "Shimla",
      departureDate: "Weekly",
      category: "Adventure",
      overview:
        "Escape to the scenic hills of Shimla, experiencing colonial charm and natural beauty.",
      inclusions: [
        "Travel by AC bus",
        "3-star accommodation",
        "Breakfast and dinner",
        "Local sightseeing tours",
        "Professional guide",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Mumbai to Shimla",
          details: "Travel to Shimla, evening at leisure.",
        },
        {
          day: "Day 2",
          title: "Shimla Sightseeing",
          details: "Visit Mall Road, Christ Church, and The Ridge.",
        },
        {
          day: "Day 3",
          title: "Kufri Excursion",
          details: "Day trip to Kufri, enjoy scenic views and activities.",
        },
        {
          day: "Day 4",
          title: "Naldehra",
          details: "Visit Naldehra, enjoy golf course and surroundings.",
        },
        {
          day: "Day 5",
          title: "Local Experiences",
          details: "Optional activities, local market exploration.",
        },
        {
          day: "Day 6",
          title: "Return to Mumbai",
          details: "Departure for Mumbai.",
        },
      ],
      highlights: [
        "Colonial architecture",
        "Scenic mountain views",
        "Mall Road shopping",
      ],
      accommodation: {
        name: "Shimla Heritage Resort",
        rating: "3 Star",
        amenities: ["WiFi", "Restaurant", "Mountain view"],
      },
    },
    "rajasthan-tour": {
      title: "Rajasthan Tour",
      price: "₹19,999",
      duration: "7 Days 6 Nights",
      image: "/images/packages/rajasthan.webp",
      startingPoint: "Jaipur",
      destination: "Rajasthan",
      departureDate: "Weekly",
      category: "Cultural",
      overview:
        "Explore the royal heritage and vibrant culture of Rajasthan with our comprehensive tour package.",
      inclusions: [
        "Travel by AC bus",
        "4-star accommodation",
        "Breakfast and dinner",
        "Local sightseeing tours",
        "Professional guide",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Jaipur Arrival",
          details: "Welcome to Jaipur, check-in and leisure.",
        },
        {
          day: "Day 2",
          title: "Jaipur Sightseeing",
          details: "Visit Amber Fort, Hawa Mahal, and City Palace.",
        },
        {
          day: "Day 3",
          title: "Pushkar",
          details: "Explore the Brahma Temple and Pushkar Lake.",
        },
        {
          day: "Day 4",
          title: "Jodhpur",
          details: "Visit Mehrangarh Fort and Umaid Bhawan Palace.",
        },
        {
          day: "Day 5",
          title: "Udaipur",
          details: "Discover Lake Pichola, City Palace, and more.",
        },
        {
          day: "Day 6",
          title: "Mount Abu",
          details: "Visit Dilwara Temples and enjoy scenic views.",
        },
        {
          day: "Day 7",
          title: "Return to Jaipur",
          details: "Leisure time and departure.",
        },
      ],
      highlights: [
        "Amber Fort in Jaipur",
        "Lake Pichola in Udaipur",
        "Dilwara Temples in Mount Abu",
      ],
      accommodation: {
        name: "Royal Heritage Hotel",
        rating: "4 Star",
        amenities: ["WiFi", "Restaurant", "Swimming pool"],
      },
    },
    "kashmir-tour": {
      title: "Kashmir Tour",
      price: "₹16,999",
      duration: "5 Days 4 Nights",
      image: "/images/packages/kashmir.webp",
      startingPoint: "Delhi",
      destination: "Kashmir",
      departureDate: "Monthly",
      category: "Nature",
      overview:
        "Experience the stunning beauty of Kashmir's landscapes and vibrant culture with this exclusive package.",
      inclusions: [
        "Flights: Delhi - Srinagar - Delhi",
        "Deluxe hotel accommodation",
        "Breakfast and dinner",
        "Shikara ride in Dal Lake",
        "Local sightseeing tours",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Delhi to Srinagar",
          details: "Flight to Srinagar and hotel check-in.",
        },
        {
          day: "Day 2",
          title: "Gulmarg Day Trip",
          details: "Explore scenic Gulmarg, cable car ride optional.",
        },
        {
          day: "Day 3",
          title: "Pahalgam Excursion",
          details: "Enjoy the serene valleys and Lidder River.",
        },
        {
          day: "Day 4",
          title: "Srinagar Sightseeing",
          details: "Visit Mughal Gardens, Dal Lake, and local markets.",
        },
      ],
      accommodation: {
        name: "Deluxe Hotel",
        rating: 4.5,
        amenities: [
          "Free Wi-Fi",
          "Room service",
          "Heated rooms",
          "Complimentary toiletries",
          "Scenic views",
        ],
      },
    },
    "punjab-tour": {
      title: "Punjab Tour",
      price: "₹10,999",
      duration: "3 Days 2 Nights",
      image:
        "/images/sightseeing/Amritsar/Golden_Temple.jpg",
      startingPoint: "Delhi",
      destination: "Punjab",
      departureDate: "Monthly",
      category: "Cultural",
      overview:
        "Explore the vibrant culture, rich history, and warm hospitality of Punjab with our comprehensive tour package.",
      inclusions: [
        "Travel by AC bus",
        "3-star accommodation",
        "Breakfast and dinner",
        "Local sightseeing tours",
        "Professional guide",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Delhi to Amritsar",
          details: "Travel to Amritsar, evening visit to Golden Temple.",
        },
        {
          day: "Day 2",
          title: "Amritsar Sightseeing",
          details: "Visit Jallianwala Bagh, Wagah Border ceremony.",
        },
        {
          day: "Day 3",
          title: "Return to Delhi",
          details: "Explore local markets, return journey.",
        },
      ],
      highlights: [
        "Golden Temple",
        "Wagah Border ceremony",
        "Punjabi cuisine and culture",
      ],
      accommodation: {
        name: "Punjab Heritage Hotel",
        rating: "3 Star",
        amenities: ["WiFi", "Restaurant", "Local assistance"],
      },
    },
    "golden-triangle-tour": {
      title: "Golden Triangle Tour",
      price: "₹15,000",
      duration: "4 Days 3 Nights",
      image: "/images/packages/rajasthan.webp",
      startingPoint: "Delhi",
      destination: "Delhi-Agra-Jaipur",
      departureDate: "Daily",
      category: "Heritage",
      overview:
        "Experience India's most iconic circuit covering Delhi, Agra, and Jaipur. Visit the Taj Mahal, Red Fort, Amber Fort, and other UNESCO World Heritage Sites on this classic Golden Triangle tour.",
      inclusions: [
        "AC sedan/SUV with experienced driver",
        "3-star hotel accommodation for 3 nights",
        "Breakfast included daily",
        "All toll, parking, and state taxes",
        "24/7 on-trip support",
      ],
      itinerary: [
        { day: "Day 1", title: "Delhi Sightseeing", details: "Pickup, visit Red Fort, Qutub Minar, India Gate, Lotus Temple. Overnight Delhi." },
        { day: "Day 2", title: "Delhi to Agra", details: "Drive to Agra (3-4 hrs). Visit Taj Mahal at sunrise, Agra Fort, Mehtab Bagh. Overnight Agra." },
        { day: "Day 3", title: "Agra to Jaipur via Fatehpur Sikri", details: "Visit Fatehpur Sikri en route. Arrive Jaipur, explore Hawa Mahal, City Palace. Overnight Jaipur." },
        { day: "Day 4", title: "Jaipur to Delhi", details: "Visit Amber Fort, Jantar Mantar. Drive back to Delhi. Tour ends." },
      ],
      highlights: ["Taj Mahal sunrise visit", "Amber Fort elephant ride", "Fatehpur Sikri ghost city"],
      accommodation: { name: "Heritage Hotels", rating: "3 Star", amenities: ["WiFi", "Restaurant", "AC Rooms"] },
    },
    "delhi-agra-weekend-tour": {
      title: "Delhi Agra Weekend Tour",
      price: "₹5,000",
      duration: "2 Days 1 Night",
      image: "/images/packages/rajasthan.webp",
      startingPoint: "Delhi",
      destination: "Agra",
      departureDate: "Weekend",
      category: "Heritage",
      overview:
        "Perfect weekend getaway from Delhi to Agra covering the Taj Mahal, Agra Fort, and Fatehpur Sikri. Quick yet comprehensive tour of Mughal heritage.",
      inclusions: ["AC vehicle with driver", "1 night hotel accommodation", "Breakfast included", "Toll and parking charges", "All taxes"],
      itinerary: [
        { day: "Day 1", title: "Delhi to Agra", details: "Early morning drive. Visit Taj Mahal, Agra Fort, Itmad-ud-Daulah. Overnight Agra." },
        { day: "Day 2", title: "Fatehpur Sikri & Return", details: "Visit Fatehpur Sikri, Mehtab Bagh. Drive back to Delhi." },
      ],
      highlights: ["Taj Mahal sunrise", "Agra Fort", "Fatehpur Sikri"],
      accommodation: { name: "Agra Comfort Inn", rating: "3 Star", amenities: ["WiFi", "Restaurant", "Room Service"] },
    },
    "uttarakhand-spiritual-tour": {
      title: "Uttarakhand Spiritual Tour",
      price: "₹18,000",
      duration: "6 Days 5 Nights",
      image: "/images/packages/chardham.webp",
      startingPoint: "Delhi",
      destination: "Uttarakhand",
      departureDate: "Weekly",
      category: "Pilgrimage",
      overview:
        "A spiritual journey through Uttarakhand's holiest sites including Haridwar, Rishikesh, and the sacred temples of the Himalayas. Experience Ganga Aarti, yoga sessions, and mountain serenity.",
      inclusions: ["AC vehicle for entire trip", "5 nights hotel accommodation", "Daily breakfast", "All toll, parking, state permits", "Experienced hill driver"],
      itinerary: [
        { day: "Day 1", title: "Delhi to Haridwar", details: "Drive to Haridwar. Evening Ganga Aarti at Har Ki Pauri." },
        { day: "Day 2", title: "Haridwar Temples", details: "Visit Mansa Devi, Chandi Devi, Maya Devi Temple." },
        { day: "Day 3", title: "Haridwar to Rishikesh", details: "Drive to Rishikesh. Visit Laxman Jhula, Ram Jhula, Beatles Ashram." },
        { day: "Day 4", title: "Rishikesh Yoga & Temples", details: "Morning yoga session. Visit Neelkanth Mahadev Temple." },
        { day: "Day 5", title: "Rishikesh to Devprayag", details: "Visit Triveni Ghat. Drive to Devprayag Sangam. Return Rishikesh." },
        { day: "Day 6", title: "Return to Delhi", details: "Morning aarti. Drive back to Delhi." },
      ],
      highlights: ["Ganga Aarti at Har Ki Pauri", "Yoga session in Rishikesh", "Devprayag Sangam"],
      accommodation: { name: "Riverside Retreat", rating: "3 Star", amenities: ["WiFi", "Restaurant", "River View"] },
    },
    "himachal-adventure-tour": {
      title: "Himachal Adventure Tour",
      price: "₹20,000",
      duration: "7 Days 6 Nights",
      image: "/images/packages/manali.webp",
      startingPoint: "Delhi",
      destination: "Himachal Pradesh",
      departureDate: "Weekly",
      category: "Adventure",
      overview:
        "An action-packed adventure tour covering Shimla, Kullu, and Manali with river rafting, paragliding, skiing, and mountain treks amidst stunning Himalayan landscapes.",
      inclusions: ["AC vehicle with experienced hill driver", "6 nights hotel accommodation", "Daily breakfast", "River rafting in Kullu (1 session)", "All toll, parking, permits"],
      itinerary: [
        { day: "Day 1", title: "Delhi to Shimla", details: "Drive to Shimla. Evening Mall Road walk." },
        { day: "Day 2", title: "Shimla & Kufri", details: "Visit Jakhu Temple, Kufri adventure activities." },
        { day: "Day 3", title: "Shimla to Manali", details: "Scenic drive through Kullu Valley. River rafting at Kullu." },
        { day: "Day 4", title: "Manali Sightseeing", details: "Visit Hadimba Temple, Old Manali, Vashisht Springs." },
        { day: "Day 5", title: "Solang Valley", details: "Paragliding, zorbing, snow activities at Solang." },
        { day: "Day 6", title: "Rohtang or Atal Tunnel", details: "Day trip to Rohtang Pass or Atal Tunnel scenic point." },
        { day: "Day 7", title: "Return to Delhi", details: "Early departure. Drive back to Delhi." },
      ],
      highlights: ["River rafting in Kullu", "Paragliding at Solang Valley", "Rohtang Pass snow experience"],
      accommodation: { name: "Mountain Adventure Lodge", rating: "3 Star", amenities: ["WiFi", "Restaurant", "Mountain View"] },
    },
    "varanasi-ayodhya-spiritual": {
      title: "Varanasi Ayodhya Spiritual Tour",
      price: "₹15,000",
      duration: "5 Days 4 Nights",
      image: "/images/packages/chardham.webp",
      startingPoint: "Delhi",
      destination: "Varanasi-Ayodhya",
      departureDate: "Weekly",
      category: "Pilgrimage",
      overview:
        "A deeply spiritual journey to two of Hinduism's holiest cities. Experience the mystical Ganga Aarti in Varanasi and seek blessings at the Ram Janmabhoomi in Ayodhya.",
      inclusions: ["AC vehicle with professional driver", "4 nights hotel accommodation", "Daily breakfast", "Boat ride on Ganga (1 session)", "All toll and parking"],
      itinerary: [
        { day: "Day 1", title: "Delhi to Varanasi", details: "Fly or drive to Varanasi. Evening Ganga Aarti at Dashashwamedh Ghat." },
        { day: "Day 2", title: "Varanasi Temples", details: "Early morning boat ride. Visit Kashi Vishwanath, Sankat Mochan Temple." },
        { day: "Day 3", title: "Sarnath Excursion", details: "Visit Sarnath Buddhist site. Evening ghats walk." },
        { day: "Day 4", title: "Varanasi to Ayodhya", details: "Drive to Ayodhya. Visit Ram Janmabhoomi, Hanuman Garhi." },
        { day: "Day 5", title: "Ayodhya & Return", details: "Visit Kanak Bhawan, Sarayu River. Return journey." },
      ],
      highlights: ["Ganga Aarti at Dashashwamedh Ghat", "Ram Janmabhoomi darshan", "Sunrise boat ride on Ganga"],
      accommodation: { name: "Spiritual Stay Hotel", rating: "3 Star", amenities: ["WiFi", "Restaurant", "Temple Proximity"] },
    },
    "leh-ladakh-road-trip": {
      title: "Leh Ladakh Road Trip",
      price: "₹40,000",
      duration: "10 Days 9 Nights",
      image: "/images/packages/kashmir.webp",
      startingPoint: "Delhi",
      destination: "Leh-Ladakh",
      departureDate: "June-September",
      category: "Adventure",
      overview:
        "The ultimate road trip adventure from Delhi to Leh-Ladakh via Manali. Cross the world's highest passes, camp by Pangong Lake, ride through Nubra Valley, and experience the raw beauty of the Himalayas.",
      inclusions: ["4x4 SUV with experienced Ladakh driver", "9 nights accommodation (hotels + camps)", "Daily breakfast and dinner", "Inner Line Permits", "All toll, fuel, parking"],
      itinerary: [
        { day: "Day 1-2", title: "Delhi to Manali", details: "Scenic drive to Manali. Rest and acclimatize." },
        { day: "Day 3", title: "Manali to Jispa", details: "Cross Rohtang Pass, drive through Lahaul Valley." },
        { day: "Day 4", title: "Jispa to Leh", details: "Cross Baralacha La, Tanglang La passes. Arrive Leh." },
        { day: "Day 5", title: "Leh Acclimatization", details: "Visit Leh Palace, Shanti Stupa, Leh Market." },
        { day: "Day 6", title: "Leh to Nubra Valley", details: "Cross Khardung La. Visit Diskit Monastery, Hunder sand dunes." },
        { day: "Day 7", title: "Nubra to Pangong Lake", details: "Drive to Pangong Tso via Shyok Route. Overnight lakeside camp." },
        { day: "Day 8", title: "Pangong to Leh", details: "Morning at Pangong. Return to Leh via Chang La." },
        { day: "Day 9", title: "Leh Monasteries", details: "Visit Thiksey, Hemis, Shey Palace. Shopping in Leh." },
        { day: "Day 10", title: "Leh to Delhi", details: "Fly back to Delhi from Leh airport." },
      ],
      highlights: ["Pangong Lake camping", "Khardung La pass crossing", "Nubra Valley double-humped camels"],
      accommodation: { name: "Mountain Camps & Hotels", rating: "Mixed", amenities: ["Meals", "Camping Gear", "Oxygen Supply"] },
    },
    "amritsar-dharamshala-dalhousie": {
      title: "Amritsar Dharamshala Dalhousie Tour",
      price: "₹18,000",
      duration: "6 Days 5 Nights",
      image: "/images/packages/manali.webp",
      startingPoint: "Delhi",
      destination: "Punjab-Himachal Circuit",
      departureDate: "Weekly",
      category: "Cultural",
      overview:
        "A scenic circuit covering the Golden Temple in Amritsar, Tibetan culture in Dharamshala, and colonial charm of Dalhousie with the mini-Switzerland of Khajjiar.",
      inclusions: ["AC vehicle throughout the trip", "5 nights hotel accommodation", "Daily breakfast", "All toll, parking, permits", "Experienced driver"],
      itinerary: [
        { day: "Day 1", title: "Delhi to Amritsar", details: "Drive to Amritsar. Evening Golden Temple visit and langar." },
        { day: "Day 2", title: "Amritsar Sightseeing", details: "Jallianwala Bagh, Partition Museum. Wagah Border ceremony." },
        { day: "Day 3", title: "Amritsar to Dharamshala", details: "Drive to Dharamshala. Visit Dalai Lama Temple Complex." },
        { day: "Day 4", title: "McLeodganj & Triund", details: "Explore McLeodganj cafes, Bhagsu Waterfall, Naddi View Point." },
        { day: "Day 5", title: "Dharamshala to Dalhousie", details: "Drive to Dalhousie. Visit Khajjiar (Mini Switzerland). Evening Mall Road." },
        { day: "Day 6", title: "Dalhousie to Delhi", details: "Morning Dainkund Peak trek. Drive back to Delhi." },
      ],
      highlights: ["Golden Temple evening darshan", "Khajjiar Mini Switzerland", "Dalai Lama temple complex"],
      accommodation: { name: "Heritage & Hill Hotels", rating: "3 Star", amenities: ["WiFi", "Restaurant", "Valley View"] },
    },
    "spiti-valley-expedition": {
      title: "Spiti Valley Expedition",
      price: "₹35,000",
      duration: "9 Days 8 Nights",
      image: "/images/packages/manali.webp",
      startingPoint: "Delhi",
      destination: "Spiti Valley",
      departureDate: "June-October",
      category: "Adventure",
      overview:
        "An epic expedition through one of India's most remote and breathtaking regions. Cross high passes, visit ancient monasteries, and experience the stark beauty of the cold desert in Spiti Valley.",
      inclusions: ["4x4 SUV with hill-experienced driver", "8 nights accommodation (hotels + homestays)", "Daily breakfast and dinner", "All permits and passes", "All toll, fuel, parking"],
      itinerary: [
        { day: "Day 1", title: "Delhi to Shimla", details: "Drive to Shimla. Rest and prepare for mountain journey." },
        { day: "Day 2", title: "Shimla to Sarahan", details: "Visit Bhimakali Temple. Scenic Kinnaur drive." },
        { day: "Day 3", title: "Sarahan to Chitkul", details: "Drive to Sangla Valley. Visit last Indian village Chitkul." },
        { day: "Day 4", title: "Chitkul to Tabo", details: "Enter Spiti Valley. Visit Tabo Monastery (1000+ years old)." },
        { day: "Day 5", title: "Tabo to Kaza", details: "Visit Dhankar Monastery. Explore Kaza town." },
        { day: "Day 6", title: "Kaza - Key & Kibber", details: "Visit Key Monastery, Kibber village, Chicham Bridge." },
        { day: "Day 7", title: "Kaza to Chandratal", details: "Drive to Chandratal Lake (Moon Lake). Camp by the lake." },
        { day: "Day 8", title: "Chandratal to Manali", details: "Cross Kunzum Pass and Rohtang. Arrive Manali." },
        { day: "Day 9", title: "Manali to Delhi", details: "Drive back to Delhi. Tour ends." },
      ],
      highlights: ["Chandratal Lake camping", "Key Monastery visit", "Chitkul - Last Indian village"],
      accommodation: { name: "Homestays & Camps", rating: "Basic-3 Star", amenities: ["Meals", "Local Guides", "Camping Gear"] },
    },
  };

  export const tourPackages = [
    {
      title: "Manali Tour from Mumbai",
      price: "₹9,999",
      duration: "5 Days 4 Nights",
      image: "/images/packages/manali.webp",
      startingPoint: "Mumbai",
      destination: "Manali",
      departureDate: "Weekly",
      category: "Adventure",
    },
    {
      title: "Chardham Yatra Package",
      price: "₹24,999",
      duration: "12 Days 11 Nights",
      image: "/images/packages/chardham.webp",
      startingPoint: "Delhi",
      destination: "Chardham",
      departureDate: "Monthly",
      category: "Pilgrimage",
    },
    {
      title: "Shimla from Mumbai",
      price: "₹14,999",
      duration: "6 Days 5 Nights",
      image: "/images/packages/manali.webp",
      startingPoint: "Mumbai",
      destination: "Shimla",
      departureDate: "Weekly",
      category: "Adventure",
    },
    {
      title: "Rajasthan Tour",
      price: "₹19,999",
      duration: "7 Days 6 Nights",
      image: "/images/packages/rajasthan.webp",
      startingPoint: "Jaipur",
      destination: "Rajasthan",
      departureDate: "Weekly",
      category: "Cultural",
    },
    {
      title: "Kashmir Tour",
      price: "₹16,999",
      duration: "5 Days 4 Nights",
      image: "/images/packages/kashmir.webp",
      startingPoint: "Delhi",
      destination: "Kashmir",
      departureDate: "Monthly",
      category: "Nature",
    },
    {
      title: "Punjab Tour",
      price: "₹10,999",
      duration: "3 Days 2 Nights",
      image:
        "/images/sightseeing/Amritsar/Golden_Temple.jpg",
      startingPoint: "Delhi",
      destination: "Punjab",
      departureDate: "Monthly",
      category: "Cultural",
    },
    {
      title: "Golden Triangle Tour",
      price: "₹15,000",
      duration: "4 Days 3 Nights",
      image: "/images/packages/rajasthan.webp",
      startingPoint: "Delhi",
      destination: "Delhi-Agra-Jaipur",
      departureDate: "Daily",
      category: "Heritage",
    },
    {
      title: "Delhi Agra Weekend Tour",
      price: "₹5,000",
      duration: "2 Days 1 Night",
      image: "/images/packages/rajasthan.webp",
      startingPoint: "Delhi",
      destination: "Agra",
      departureDate: "Weekend",
      category: "Heritage",
    },
    {
      title: "Uttarakhand Spiritual Tour",
      price: "₹18,000",
      duration: "6 Days 5 Nights",
      image: "/images/packages/chardham.webp",
      startingPoint: "Delhi",
      destination: "Uttarakhand",
      departureDate: "Weekly",
      category: "Pilgrimage",
    },
    {
      title: "Himachal Adventure Tour",
      price: "₹20,000",
      duration: "7 Days 6 Nights",
      image: "/images/packages/manali.webp",
      startingPoint: "Delhi",
      destination: "Himachal Pradesh",
      departureDate: "Weekly",
      category: "Adventure",
    },
    {
      title: "Varanasi Ayodhya Spiritual Tour",
      price: "₹15,000",
      duration: "5 Days 4 Nights",
      image: "/images/packages/chardham.webp",
      startingPoint: "Delhi",
      destination: "Varanasi-Ayodhya",
      departureDate: "Weekly",
      category: "Pilgrimage",
    },
    {
      title: "Leh Ladakh Road Trip",
      price: "₹40,000",
      duration: "10 Days 9 Nights",
      image: "/images/packages/kashmir.webp",
      startingPoint: "Delhi",
      destination: "Leh-Ladakh",
      departureDate: "June-September",
      category: "Adventure",
    },
    {
      title: "Amritsar Dharamshala Dalhousie Tour",
      price: "₹18,000",
      duration: "6 Days 5 Nights",
      image: "/images/packages/manali.webp",
      startingPoint: "Delhi",
      destination: "Punjab-Himachal Circuit",
      departureDate: "Weekly",
      category: "Cultural",
    },
    {
      title: "Spiti Valley Expedition",
      price: "₹35,000",
      duration: "9 Days 8 Nights",
      image: "/images/packages/manali.webp",
      startingPoint: "Delhi",
      destination: "Spiti Valley",
      departureDate: "June-October",
      category: "Adventure",
    },
  ];

  export const features = [
    {
      icon: Car,
      title: "Quality Fleet",
      description: "500+ GPS-tracked, sanitized vehicles including sedans, SUVs, tempo travellers, and luxury cars with verified professional drivers",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock booking and customer support across 50+ cities, with instant WhatsApp confirmation and real-time driver tracking",
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Serving 500+ routes across North India including Delhi, Agra, Jaipur, Shimla, Manali, Chandigarh, Haridwar, and Rishikesh",
    },
    {
      icon: Phone,
      title: "Easy Booking",
      description: "Book via WhatsApp, phone call, or website in under 2 minutes with transparent pricing starting at just ₹11/km — no hidden charges",
    },
  ];
  
  export const services = [
    {
      icon: <Car className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Vehicles",
      description: "Wide range of comfortable and reliable vehicles",
      items: ["Luxury Bus", "SUV", "Sedan", "Tempo Traveller", "Bus"],
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Tour Guide",
      description: "Expert guides for an enriching experience",
      items: [
        "Local Experts",
        "Multilingual Guides",
        "Cultural Insights",
        "Custom Tours",
      ],
    },
    {
      icon: <Package className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Tour Packages",
      description: "Curated experiences for every traveler",
      items: [
        "City Tours",
        "Adventure Trips",
        "Cultural Tours",
        "Weekend Getaways",
      ],
    },
  ];
  
  export const vehiclesServices = [
    {
      type: "Sedan",
      image: "/images/car/car1.webp",
      imageAlt: "Sedan taxi for hire - comfortable 4-seater AC car with professional driver, ideal for airport transfers and business trips",
      seating: "4 passengers",
      rating: "4.9",
      reviews: "128",
      perKm: "₹11/km",
      driverCharges: "₹500 (Per Day)",
      perDayLimit: "250km",
      cancellationCharge: "₹500",
      facilities: ["AC", "Music System", "Charging Point", "First Aid Kit"],
      bestFor: ["Small families", "Business trips", "Airport transfers"],
    },
    {
      type: "SUV",
      image: "/images/car/car2.webp",
      imageAlt: "SUV rental with driver - spacious 6-7 seater vehicle with extra legroom for family trips, group tours, and long-distance travel",
      seating: "6-7 passengers",
      perKm: "₹15/km",
      rating: "4.8",
      reviews: "120",
      driverCharges: "₹500 (Per Day)",
      perDayLimit: "250km",
      cancellationCharge: "₹500",
      facilities: [
        "AC",
        "Music System",
        "Charging Point",
        "Extra Legroom",
        "Luggage Space",
      ],
      bestFor: ["Large families", "Group tours", "Long distance"],
    },
    {
      type: "Tempo Traveller",
      image: "/images/tempo/17_seater.jpg",
      imageAlt: "AC tempo traveller with pushback seats - 12 to 26 seater options available for pilgrimages, weddings, and group tours",
      seating: "12-26 passengers",
      perKm: "₹24/km",
      rating: "4.7",
      reviews: "110",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
      facilities: [
        "AC",
        "Push-back Seats",
        "LCD TV",
        "Audio System",
        "Charging Points",
      ],
      bestFor: ["Tourist groups", "Corporate events", "Wedding parties"],
    },
    {
      type: "Luxury Bus",
      image: "/images/car/luxury_bus.webp",
      imageAlt: "Luxury Volvo AC bus with pushback seats - 30 to 55 seater coach with washroom facility for extended group tours",
      seating: "30-55 passengers",
      perKm: "₹30/km",
      rating: "4.7",
      reviews: "102",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
      facilities: [
        "AC",
        "Push-back Seats",
        "LCD TV",
        "Audio System",
        "Washroom",
        "Refrigerator",
      ],
      bestFor: ["Large groups", "Extended tours", "Luxury travel"],
    },
    {
      type: "Bus",
      image: "/images/bus/35_SEATER_BUS.jpg",
      imageAlt: "28-35 seater AC bus for corporate outings and mid-sized group travel with professional driver and entertainment system",
      seating: "28-35 passengers",
      perKm: "₹35/km",
      rating: "4.8",
      reviews: "95",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
      facilities: [
        "AC",
        "Push-back Seats",
        "LCD TV",
        "Audio System",
        "Charging Points",
      ],
      bestFor: ["Mid-sized groups", "Short tours", "Corporate outings"],
    },
  ];
  
  export const vehicleDetails = [
    {
      id: "1",
      type: "Sedan",
      image: "/images/car/sedan.webp",
      gallery: [
        "/images/car/sedan.webp",
        "/images/car/sedan-interior.webp",
        "/images/car/sedan-side.webp",
        "/images/car/sedan-back.webp",
      ],
      rating: "4.9",
      reviews: "128",
      seating: "4 passengers",
      perKm: "₹11/km",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
      facilities: ["AC", "Music System", "Charging Point", "First Aid Kit"],
      description:
        "Compact and comfortable, ideal for small families, business trips, and airport transfers.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
      ],
      localSightseeing: [
        {
          duration: "8 hours",
          distance: "80 km",
          price: "₹1600",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
        {
          duration: "12 hours",
          distance: "120 km",
          price: "₹2600",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
      ],
    },
    {
      id: "2",
      type: "SUV",
      image: "/images/car/suv.webp",
      gallery: [
        "/images/car/suv.webp",
        "/images/car/suv2.webp",
        "/images/car/suv-interior.webp",
        "/images/car/suv-side.webp",
        "/images/car/suv-back.webp",
      ],
      rating: "4.8",
      reviews: "120",
      seating: "6-7 passengers",
      perKm: "₹15/km",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
  
      facilities: [
        "AC",
        "Music System",
        "Charging Point",
        "Extra Legroom",
        "Luggage Space",
      ],
      description:
        "Spacious and powerful, perfect for large families, group tours, and long-distance travel.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
      ],
      localSightseeing: [
        {
          duration: "8 hours",
          distance: "80 km",
          price: "₹2500",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
        {
          duration: "12 hours",
          distance: "120 km",
          price: "₹3500",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
      ],
    },
    {
      id: "3",
      type: "Tempo-Traveller",
      image: "/images/tempo/17_seater.jpg",
      gallery: [
        "/images/tempo/12_seater.jpg",
        "/images/tempo/16_seater.jpg",
        "/images/tempo/17_seater.jpg",
        "/images/tempo/20_seater.jpg",
        "/images/tempo/26_seater.jpg",
      ],
      rating: "4.8",
      reviews: "856",
      seating: "12-26 passengers",
      perKm: "₹23-27/km",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
      variants: [
        { name: "12 Seater", capacity: "11-12 Passengers", rate: "₹23/km", localRate: "₹6,000-7,500/Day" },
        { name: "16 Seater", capacity: "15-16 Passengers", rate: "₹25/km", localRate: "₹7,500-8,500/Day" },
        { name: "17 Seater", capacity: "14-17 Passengers", rate: "₹26/km", localRate: "₹9,000-10,500/Day", popular: true },
        { name: "20 Seater Luxury", capacity: "18-20 Passengers", rate: "₹27/km", localRate: "₹9,000-10,000/Day" },
        { name: "26 Seater Maharaja", capacity: "22-26 Passengers", rate: "₹26/km", localRate: "₹10,000-11,000/Day", premium: true },
      ],
      facilities: [
        "AC",
        "Luxury Pushback Seats",
        "LED TV",
        "Music System",
        "Charging Points",
        "GPS Tracking",
        "Ample Luggage Space",
      ],
      description:
        "Perfect for group travel - pilgrimage tours, corporate events, wedding parties, and family trips. Available in 12, 16, 17, 20, and 26 seater configurations with luxury interiors.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
        "GPS Tracking",
        "Premium Interiors",
      ],
      localSightseeing: [
        {
          duration: "8 hours",
          distance: "80 km",
          price: "₹6,000",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
        {
          duration: "12 hours",
          distance: "120 km",
          price: "₹7,500",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
      ],
    },
    {
      id: "4",
      type: "Luxury-Bus",
      image: "/images/bus/45_SEATER_BUS.jpg",
      gallery: [
        "/images/bus/45_SEATER_BUS.jpg",
        "/images/bus/49_SEATER_BUS.jpg",
        "/images/bus/56_SEATER_BUS.jpg",
        "/images/bus/41_SEATER_BUS.jpg",
        "/images/bus/35_SEATER_BUS.jpg",
      ],
      rating: "4.9",
      reviews: "350",
      seating: "35-56 passengers",
      perKm: "₹45-65/km",
      driverCharges: "₹1,000-1,500 (Per Day)",
      cancellationCharge: "₹1,000",
      perDayLimit: "250km",
      variants: [
        { name: "35 Seater Luxury Coach", capacity: "35 Passengers", rate: "₹36-40/km", minCharge: "₹7,500/day" },
        { name: "41 Seater Coach", capacity: "41 Passengers", rate: "₹40-45/km", minCharge: "₹8,000/day" },
        { name: "45 Seater Volvo Coach", capacity: "45 Passengers", rate: "₹45-50/km", minCharge: "₹9,000/day", premium: true },
        { name: "49 Seater Volvo Bus", capacity: "49 Passengers", rate: "₹48-55/km", minCharge: "₹9,500/day", premium: true },
        { name: "56 Seater Volvo/BharatBenz", capacity: "56 Passengers", rate: "₹55-65/km", minCharge: "₹10,000/day", luxury: true },
      ],
      facilities: [
        "AC",
        "Volvo 2x2 Pushback Seats",
        "LED TV",
        "PA System",
        "Washroom (Luxury)",
        "Wi-Fi (Optional)",
        "Luxury Recliners",
        "Luggage Rack",
      ],
      description:
        "Premium Volvo and BharatBenz coaches for corporate tours, destination weddings, and luxury pilgrimage trips. Experience unmatched comfort with reclining seats, entertainment systems, and professional drivers.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
        "GPS Tracking",
        "On-Time Guarantee",
      ],
      localSightseeing: [
        {
          duration: "8 hours",
          distance: "100 km",
          price: "₹9,000",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
        {
          duration: "12 hours",
          distance: "150 km",
          price: "₹12,000",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
      ],
    },
    {
      id: "5",
      type: "Bus",
      image: "/images/bus/27_SEATER_BUS.jpg",
      gallery: [
        "/images/bus/22_SEATER_BUS.jpg",
        "/images/bus/25_SEATER_BUS.jpg",
        "/images/bus/27_SEATER_BUS.jpg",
        "/images/bus/35_SEATER_BUS.jpg",
        "/images/bus/41_SEATER_BUS.jpg",
      ],
      rating: "4.7",
      reviews: "425",
      seating: "22-41 passengers",
      perKm: "₹30-45/km",
      driverCharges: "₹800-1,000 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
      variants: [
        { name: "22 Seater Mini Bus", capacity: "22 Passengers", rate: "₹30-35/km", minCharge: "₹6,000/day", idealFor: "Small groups, family trips" },
        { name: "25 Seater Mini Bus", capacity: "25 Passengers", rate: "₹32-36/km", minCharge: "₹6,500/day", idealFor: "Pilgrimage tours, family outings" },
        { name: "27 Seater Coach", capacity: "27 Passengers", rate: "₹34-38/km", minCharge: "₹6,800/day", idealFor: "Corporate events, school trips", popular: true },
        { name: "35 Seater Coach", capacity: "35 Passengers", rate: "₹36-40/km", minCharge: "₹7,500/day", idealFor: "Wedding guest transfers, group tours" },
        { name: "41 Seater Coach", capacity: "41 Passengers", rate: "₹40-45/km", minCharge: "₹8,000/day", idealFor: "Large group travel, pilgrimage" },
      ],
      facilities: [
        "AC",
        "Pushback Seats",
        "Music System",
        "Mic/PA System",
        "Charging Points",
        "Luggage Space",
        "Curtains",
      ],
      description:
        "Affordable and comfortable AC buses for mid-sized groups. Perfect for school trips, corporate outings, pilgrimage tours, wedding guest transfers, and short tours. Available in 22, 25, 27, 35, and 41 seater configurations.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
        "GPS Tracking",
      ],
      localSightseeing: [
        {
          duration: "8 hours",
          distance: "100 km",
          price: "₹6,000",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
        {
          duration: "12 hours",
          distance: "150 km",
          price: "₹8,000",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
      ],
    },
  ];
  
  export const bookingSteps = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Choose Vehicle",
      description:
        "Select the perfect vehicle based on your group size and requirements",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Book & Pay",
      description: "Secure your booking with easy online payment options",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Confirmation",
      description: "Receive instant booking confirmation and driver details",
    },
  ];
  
  export const destinations = [
    {
      city: "Mumbai",
      tagline: "City of Dreams",
      description:
        "Experience the vibrant culture and modern lifestyle of India's financial capital",
      rating: 4.8,
      reviews: 1250,
      spots: [
        {
          name: "Gateway of India",
          image: "/images/spots/gateway.webp",
          description: "Historic arch monument",
        },
        {
          name: "Marine Drive",
          image: "/images/spots/marinedrive.webp",
          description: "Sea-facing promenade",
        },
        {
          name: "Elephanta Caves",
          image: "/images/spots/elephanta.webp",
          description: "Ancient cave temples",
        },
      ],
      packages: [
        {
          name: "Mumbai Heritage Walk",
          duration: "2 Days",
          highlights: ["Guided tours", "Local cuisine", "Heritage sites"],
          price: "₹7,999",
          image: "/images/destinations/mumbai.webp",
        },
        {
          name: "Mumbai City Explorer",
          duration: "3 Days",
          highlights: ["Bollywood tour", "Street food", "Night safari"],
          price: "₹12,999",
          image: "/images/home/banner2.jpg",
        },
      ],
      heroImage: "/images/destinations/mumbai.webp",
      gallery: [
        "/images/spots/marinedrive.webp",
        "/images/spots/gateway.webp",
        "/images/spots/elephanta.webp",
      ],
    },
    {
      city: "Delhi",
      tagline: "Heart of India",
      description:
        "Discover the perfect blend of history and modernity in India's capital",
      rating: 4.7,
      reviews: 1480,
      spots: [
        {
          name: "Red Fort",
          image: "/images/sightseeing/Delhi/red_fort.jpg",
          description: "Mughal-era fortress",
        },
        {
          name: "Qutub Minar",
          image: "/images/sightseeing/Delhi/Outub_Minar.jpg",
          description: "UNESCO heritage site",
        },
        {
          name: "India Gate",
          image: "/images/sightseeing/Delhi/India_Gate.jpg",
          description: "War memorial",
        },
      ],
      packages: [
        {
          name: "Delhi Historical Tour",
          duration: "2 Days",
          highlights: ["Monument visits", "Cultural shows", "Local markets"],
          price: "₹6,999",
          image: "/images/about/about_banner.webp",
        },
        {
          name: "Delhi Food & Culture",
          duration: "3 Days",
          highlights: ["Food walks", "Art galleries", "Shopping"],
          price: "₹10,999",
          image: "/images/destinations/delhi.webp",
        },
      ],
      heroImage: "/images/destinations/delhi.webp",
      gallery: [
        "/images/sightseeing/Delhi/red_fort.jpg",
        "/images/sightseeing/Delhi/India_Gate.jpg",
        "/images/sightseeing/Delhi/Akshardham_Temple.jpg",
      ],
    },
  ];
  
  export const cities = [
    {
      name: "Delhi",
      region: "North India",
      coverage: "NCR Region",
      popularity: "high",
    },
    {
      name: "Agra",
      region: "North India",
      coverage: "City + 50km radius",
      popularity: "high",
    },
    {
      name: "Jaipur",
      region: "North India",
      coverage: "Pink City Area",
      popularity: "high",
    },
    {
      name: "Haridwar",
      region: "North India",
      coverage: "Temple Circuit",
      popularity: "medium",
    },
    {
      name: "Chandigarh",
      region: "North India",
      coverage: "Tri-city Area",
      popularity: "medium",
    },
    {
      name: "Shimla",
      region: "North India",
      coverage: "Hill Station Tours",
      popularity: "high",
    },
    {
      name: "Manali",
      region: "North India",
      coverage: "Adventure Routes",
      popularity: "high",
    },
    {
      name: "Amritsar",
      region: "North India",
      coverage: "Golden Temple Area",
      popularity: "medium",
    },
    {
      name: "Dehradun",
      region: "North India",
      coverage: "Valley Region",
      popularity: "medium",
    },
    {
      name: "Rishikesh",
      region: "North India",
      coverage: "Spiritual Circuit",
      popularity: "high",
    },
    {
      name: "Jodhpur",
      region: "North India",
      coverage: "Blue City Area",
      popularity: "medium",
    },
    {
      name: "Udaipur",
      region: "North India",
      coverage: "Lake City Region",
      popularity: "high",
    },
    {
      name: "Ayodhya",
      region: "North India",
      coverage: "Temple City",
      popularity: "high",
    },
    {
      name: "Ahmedabad",
      region: "West India",
      coverage: "City + Suburbs",
      popularity: "medium",
    },
    {
      name: "Varanasi",
      region: "North India",
      coverage: "Holy City Area",
      popularity: "high",
    },
    {
      name: "Lucknow",
      region: "North India",
      coverage: "City of Nawabs",
      popularity: "high",
    },
    {
      name: "Mathura",
      region: "North India",
      coverage: "Krishna Circuit",
      popularity: "high",
    },
    {
      name: "Nainital",
      region: "North India",
      coverage: "Lake District",
      popularity: "high",
    },
    {
      name: "Mussoorie",
      region: "North India",
      coverage: "Queen of Hills",
      popularity: "high",
    },
    {
      name: "Jim Corbett",
      region: "North India",
      coverage: "Wildlife Reserve",
      popularity: "high",
    },
    {
      name: "Pushkar",
      region: "North India",
      coverage: "Holy Lake Area",
      popularity: "medium",
    },
    {
      name: "Ajmer",
      region: "North India",
      coverage: "Dargah Circuit",
      popularity: "high",
    },
    {
      name: "Mount Abu",
      region: "North India",
      coverage: "Hill Station Area",
      popularity: "medium",
    },
    {
      name: "Bikaner",
      region: "North India",
      coverage: "Desert City Area",
      popularity: "medium",
    },
    {
      name: "Jaisalmer",
      region: "North India",
      coverage: "Golden City Area",
      popularity: "high",
    },
    {
      name: "Ranthambore",
      region: "North India",
      coverage: "Tiger Reserve",
      popularity: "high",
    },
    {
      name: "Dharamshala",
      region: "North India",
      coverage: "Tibetan Circuit",
      popularity: "high",
    },
    {
      name: "Vrindavan",
      region: "North India",
      coverage: "Krishna Circuit",
      popularity: "high",
    },
    {
      name: "McLeodganj",
      region: "North India",
      coverage: "Little Lhasa Area",
      popularity: "high",
    },
    {
      name: "Kasauli",
      region: "North India",
      coverage: "Cantonment Hill Station",
      popularity: "medium",
    },
    {
      name: "Dalhousie",
      region: "North India",
      coverage: "Colonial Hill Station",
      popularity: "medium",
    },
    {
      name: "Kasol",
      region: "North India",
      coverage: "Parvati Valley",
      popularity: "high",
    },
    {
      name: "Bharatpur",
      region: "North India",
      coverage: "Bird Sanctuary Area",
      popularity: "medium",
    },
    {
      name: "Prayagraj",
      region: "North India",
      coverage: "Sangam City",
      popularity: "high",
    },
    {
      name: "Bodhgaya",
      region: "East India",
      coverage: "Buddhist Circuit",
      popularity: "high",
    },
    {
      name: "Gwalior",
      region: "Central India",
      coverage: "Fort City Area",
      popularity: "medium",
    },
    {
      name: "Srinagar",
      region: "North India",
      coverage: "Kashmir Valley",
      popularity: "high",
    },
    {
      name: "Gulmarg",
      region: "North India",
      coverage: "Ski Resort Area",
      popularity: "high",
    },
    {
      name: "Pahalgam",
      region: "North India",
      coverage: "Lidder Valley",
      popularity: "high",
    },
    {
      name: "Leh Ladakh",
      region: "North India",
      coverage: "High Altitude Desert",
      popularity: "high",
    },
  ];

  export const cityDetails = {
    Delhi: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "GPS Tracking", "24/7 Support", "Clean Interior"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: [
          "Connaught Place",
          "South Delhi",
          "Dwarka",
          "Noida",
          "Gurgaon",
        ],
        limitedCoverage: ["Far North Delhi", "Outer Ring Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card", "Corporate Billing"],
        booking: ["App", "Website", "Phone", "Corporate Desk"],
        support: "24/7 Customer Service",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "SOS emergency button",
        "Driver verification",
        "Mask mandate",
        "Regular sanitization",
      ],
      popularRoutes: [
        "Airport - City Center",
        "Delhi - Gurgaon",
        "Delhi - Noida",
        "Interstate Tours",
      ],
      peakHours: {
        morning: "7 AM - 10 AM",
        evening: "5 PM - 9 PM",
        surcharge: "1.2x - 1.5x normal fare",
      },
    },
    Agra: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Tourist Assistance", "Clean Interior"],
        capacity: "1-5 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Taj Mahal", "Agra Fort", "City Center"],
        limitedCoverage: ["Rural Areas within 50 km radius"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Regular sanitization",
      ],
      popularRoutes: ["Taj Mahal - City Center", "Agra - Delhi", "Agra - Jaipur"],
      peakHours: {
        morning: "8 AM - 11 AM",
        evening: "4 PM - 8 PM",
        surcharge: "1.1x - 1.4x normal fare",
      },
    },
    Jaipur: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "GPS Tracking", "Tour Guide Assistance"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Pink City Area", "Amber Fort", "City Center"],
        limitedCoverage: ["Rural Areas outside Jaipur"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Regular sanitization",
      ],
      popularRoutes: ["Jaipur - Amber Fort", "Jaipur - Delhi", "Jaipur - Agra"],
      peakHours: {
        morning: "9 AM - 12 PM",
        evening: "5 PM - 9 PM",
        surcharge: "1.2x - 1.5x normal fare",
      },
    },
    Haridwar: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Assistance"],
        capacity: "1-5 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Temple Circuit", "City Center"],
        limitedCoverage: ["Outer Town Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI"],
        booking: ["App", "Phone"],
        support: "24/7 Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Mask mandate",
        "Driver verification",
      ],
      popularRoutes: [
        "Haridwar - Rishikesh",
        "Haridwar - Dehradun",
        "Temple Circuit Tours",
      ],
      peakHours: {
        morning: "6 AM - 9 AM",
        evening: "5 PM - 8 PM",
        surcharge: "1.1x - 1.3x normal fare",
      },
    },
    Chandigarh: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Clean Cabs", "GPS"],
        capacity: "1-5 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Tri-city Area", "Sector 17", "Rock Garden"],
        limitedCoverage: ["Outer Rural Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Card"],
        booking: ["App", "Phone"],
        support: "24/7 Support",
      },
      safetyFeatures: ["GPS Tracking", "Driver Verification", "Mask Mandate"],
      popularRoutes: [
        "Chandigarh - Mohali",
        "Chandigarh - Panchkula",
        "Chandigarh - Delhi",
      ],
      peakHours: {
        morning: "8 AM - 10 AM",
        evening: "6 PM - 9 PM",
        surcharge: "1.1x - 1.4x normal fare",
      },
    },
    Shimla: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Snow-Ready Tires", "Driver Expertise in Hill Driving"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Mall Road", "Jakhoo Temple", "Kufri"],
        limitedCoverage: ["Remote Mountain Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Hill-specific driving guidelines",
      ],
      popularRoutes: ["Shimla - Kufri", "Shimla - Chandigarh", "Shimla - Manali"],
      peakHours: {
        morning: "9 AM - 11 AM",
        evening: "5 PM - 7 PM",
        surcharge: "1.2x - 1.5x normal fare",
      },
    },
    Manali: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Snow Chains", "Local Guide Assistance"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Mall Road", "Solang Valley", "Rohtang Pass"],
        limitedCoverage: ["Remote Villages"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Snow safety gear",
        "Mask mandate",
      ],
      popularRoutes: [
        "Manali - Rohtang Pass",
        "Manali - Kasol",
        "Manali - Chandigarh",
      ],
      peakHours: {
        morning: "8 AM - 10 AM",
        evening: "4 PM - 6 PM",
        surcharge: "1.3x - 1.6x normal fare",
      },
    },
    Amritsar: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Expertise", "Clean Interior"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Golden Temple", "Wagah Border", "Jallianwala Bagh"],
        limitedCoverage: ["Rural Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Amritsar - Golden Temple",
        "Amritsar - Chandigarh",
        "Amritsar - Delhi",
      ],
      peakHours: {
        morning: "8 AM - 11 AM",
        evening: "5 PM - 8 PM",
        surcharge: "1.2x - 1.4x normal fare",
      },
    },
    Dehradun: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Expertise", "GPS Navigation"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Clock Tower", "Rajpur Road", "Mussoorie Road"],
        limitedCoverage: ["Outer Rural Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Dehradun - Mussoorie",
        "Dehradun - Rishikesh",
        "Dehradun - Haridwar",
      ],
      peakHours: {
        morning: "7 AM - 10 AM",
        evening: "5 PM - 8 PM",
        surcharge: "1.1x - 1.3x normal fare",
      },
    },
    Rishikesh: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Assistance"],
        capacity: "1-5 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Laxman Jhula", "Ram Jhula", "Triveni Ghat"],
        limitedCoverage: ["Hilly Areas Beyond 50 km"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Mask mandate",
        "Driver verification",
      ],
      popularRoutes: [
        "Rishikesh - Haridwar",
        "Rishikesh - Dehradun",
        "Rishikesh - Mussoorie",
      ],
      peakHours: {
        morning: "6 AM - 9 AM",
        evening: "4 PM - 7 PM",
        surcharge: "1.1x - 1.3x normal fare",
      },
    },
    Jodhpur: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Expertise in Desert Terrain"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Mehrangarh Fort", "Jaswant Thada", "Clock Tower"],
        limitedCoverage: ["Outer Desert Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Jodhpur - Osian",
        "Jodhpur - Jaisalmer",
        "Jodhpur - Udaipur",
      ],
      peakHours: {
        morning: "8 AM - 10 AM",
        evening: "5 PM - 7 PM",
        surcharge: "1.2x - 1.4x normal fare",
      },
    },
    Udaipur: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Expertise in Hilly and Lake Areas"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["City Palace", "Lake Pichola", "Fateh Sagar Lake"],
        limitedCoverage: ["Remote Hilly Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Udaipur - Mount Abu",
        "Udaipur - Jodhpur",
        "Udaipur - Jaipur",
      ],
      peakHours: {
        morning: "9 AM - 11 AM",
        evening: "4 PM - 6 PM",
        surcharge: "1.2x - 1.5x normal fare",
      },
    },
    Ayodhya: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Knowledge of Religious Spots"],
        capacity: "1-5 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Ram Janmabhoomi", "Hanuman Garhi", "Kanak Bhawan"],
        limitedCoverage: ["Outer Rural Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Ayodhya - Faizabad",
        "Ayodhya - Lucknow",
        "Ayodhya - Varanasi",
      ],
      peakHours: {
        morning: "7 AM - 10 AM",
        evening: "5 PM - 7 PM",
        surcharge: "1.1x - 1.3x normal fare",
      },
    },
    Ahmedabad: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Expertise", "GPS Navigation"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Sabarmati Ashram", "Kankaria Lake", "CG Road"],
        limitedCoverage: ["Outer Industrial Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Ahmedabad - Gandhinagar",
        "Ahmedabad - Vadodara",
        "Ahmedabad - Mount Abu",
      ],
      peakHours: {
        morning: "8 AM - 10 AM",
        evening: "6 PM - 8 PM",
        surcharge: "1.3x - 1.6x normal fare",
      },
    },
  };
  
  export const touristSpots = {
    Delhi: [
      {
        name: "Red Fort",
        description: "Historic Mughal fortress",
        image:
          "/images/sightseeing/Delhi/red_fort.jpg",
      },
      {
        name: "Qutub Minar",
        description: "UNESCO World Heritage site",
        image:
          "/images/sightseeing/Delhi/Outub_Minar.jpg",
      },
      {
        name: "India Gate",
        description: "War memorial",
        image:
          "/images/sightseeing/Delhi/India_Gate.jpg",
      },
      {
        name: "Humayun's Tomb",
        description: "Magnificent Mughal architecture",
        image:
          "/images/sightseeing/Delhi/Humayun's_Tomb.jpg",
      },
      {
        name: "Lotus Temple",
        description: "Modern architectural marvel",
        image:
          "/images/sightseeing/Delhi/Lotus Temple.jpg",
      },
    ],
    Agra: [
      {
        name: "Taj Mahal",
        description: "Wonder of the World",
        image:
          "/images/sightseeing/Agra/Taj_mahal.jpg",
      },
      {
        name: "Agra Fort",
        description: "UNESCO World Heritage site",
        image:
          "/images/sightseeing/Agra/agra_fort.jpg",
      },
      {
        name: "Fatehpur Sikri",
        description: "Ancient city of victory",
        image:
          "/images/sightseeing/Agra/Fathepur_shikiri.jpg",
      },
      {
        name: "Akbar's Tomb",
        description: "Magnificent Mughal tomb",
        image:
          "/images/sightseeing/Agra/Diwan_i_kHAS.jpg",
      },
    ],
    Jaipur: [
      {
        name: "Hawa Mahal",
        description: "Palace of Winds",
        image:
          "/images/sightseeing/Jaipur/Jal_Mahal.jpg",
      },
      {
        name: "Amber Fort",
        description: "Historic hilltop fortress",
        image:
          "/images/sightseeing/Jaipur/amber_fort.jpg",
      },
      {
        name: "City Palace",
        description: "Royal residence",
        image:
          "/images/sightseeing/Jaipur/city_palace.jpg",
      },
    ],
    Haridwar: [
      {
        name: "Har Ki Pauri",
        description: "Sacred bathing ghat",
        image:
          "/images/sightseeing/Haridwar/Har_Ki_Pauri.jpg",
      },
      {
        name: "Mansa Devi Temple",
        description: "Hill-top temple",
        image:
          "/images/sightseeing/Haridwar/Mansa_Devi_Temple.jpg",
      },
    ],
    Chandigarh: [
      {
        name: "Rock Garden",
        description: "Unique sculpture park",
        image:
          "/images/sightseeing/Chandigarh/Zakir_hUSSAIN_ROSE_Garden.jpg",
      },
      {
        name: "Sukhna Lake",
        description: "Artificial lake",
        image:
          "/images/sightseeing/Chandigarh/sukhana_lake.jpg",
      },
    ],
    Shimla: [
      {
        name: "Mall Road",
        description: "Main street shopping",
        image:
          "/images/sightseeing/Shimla/Mall road shimla.jpg",
      },
      {
        name: "Ridge",
        description: "Large open space",
        image:
          "/images/sightseeing/Shimla/the ridge shimla.jpg",
      },
    ],
    Manali: [
      {
        name: "Rohtang Pass",
        description: "Scenic mountain pass",
        image:
          "/images/sightseeing/Manali/Solang Valley.jpg",
      },
      {
        name: "Hadimba Temple",
        description: "Ancient wooden temple",
        image:
          "/images/sightseeing/Manali/Hidimba Temple.jpg",
      },
    ],
    Amritsar: [
      {
        name: "Golden Temple",
        description: "Holiest Sikh shrine",
        image:
          "/images/sightseeing/Amritsar/Golden_Temple.jpg",
      },
      {
        name: "Jallianwala Bagh",
        description: "Historic memorial",
        image:
          "/images/sightseeing/Amritsar/Jallianwala_Bagh.jpg",
      },
    ],
    Dehradun: [
      {
        name: "Robber's Cave",
        description: "Natural cave formation",
        image:
          "/images/sightseeing/Dehradun/Robbers_Cave.jpg",
      },
      {
        name: "Forest Research Institute",
        description: "Colonial architecture",
        image:
          "/images/sightseeing/Dehradun/Forest_Research_Institute.jpg",
      },
    ],
    Rishikesh: [
      {
        name: "Laxman Jhula",
        description: "Iconic suspension bridge",
        image:
          "/images/sightseeing/Rishikesh/Laxman_Jhula.jpg",
      },
      {
        name: "Beatles Ashram",
        description: "Historic meditation center",
        image:
          "/images/sightseeing/Rishikesh/Beatles_Ashram.jpg",
      },
    ],
    Jodhpur: [
      {
        name: "Mehrangarh Fort",
        description: "Massive hilltop fort",
        image:
          "/images/sightseeing/Jodhpur/Mehrangarh Fort.jpg",
      },
      {
        name: "Umaid Bhawan Palace",
        description: "Royal residence",
        image:
          "/images/sightseeing/Jodhpur/Umaid Bhawan Palace.jpg",
      },
    ],
    Udaipur: [
      {
        name: "City Palace",
        description: "Royal palace complex",
        image:
          "/images/sightseeing/Udaipur/City_Palace.jpg",
      },
      {
        name: "Lake Pichola",
        description: "Artificial freshwater lake",
        image:
          "/images/sightseeing/Udaipur/City_Palace.jpg",
      },
    ],
    Ayodhya: [
      {
        name: "Ram Mandir",
        description: "Grand temple complex",
        image:
          "/images/sightseeing/Ayodhya/Ram_Mandir.jpg",
      },
      {
        name: "Hanuman Garhi",
        description: "Historic temple",
        image:
          "/images/sightseeing/Ayodhya/Hanuman_Garhi.jpg",
      },
    ],
    Ahmedabad: [
      {
        name: "Sabarmati Ashram",
        description: "Gandhi's residence",
        image:
          "/images/sightseeing/Ahmedabad/Sabarmati_Ashram.jpg",
      },
      {
        name: "Adalaj Stepwell",
        description: "Historic water structure",
        image:
          "/images/sightseeing/Ahmedabad/Adalaj_Stepwell.jpg",
      },
    ],
  };
  
  export const touristSpotsDescrition = {
    Delhi: [
      {
        name: "Red Fort",
        description: "Historic Mughal fortress, symbol of India's independence, featuring red sandstone walls and impressive architecture.",
        image:
          "/images/sightseeing/Delhi/red_fort.jpg",
      },
      {
        name: "Qutub Minar",
        description: "UNESCO World Heritage site, a 73-meter tall minaret built in 1193 with intricate carvings and verses from the Quran.",
        image:
          "/images/sightseeing/Delhi/Outub_Minar.jpg",
      },
      {
        name: "India Gate",
        description: "War memorial built in honor of Indian soldiers who died in World War I, surrounded by lush gardens and fountains.",
        image:
          "/images/sightseeing/Delhi/India_Gate.jpg",
      },
      {
        name: "Humayun's Tomb",
        description: "Magnificent Mughal architecture and a precursor to the Taj Mahal, built in 1570 as the tomb of Emperor Humayun.",
        image:
          "/images/sightseeing/Delhi/Humayun's_Tomb.jpg",
      },
      {
        name: "Lotus Temple",
        description: "Modern architectural marvel and a Bahá'í House of Worship, known for its lotus-shaped design and peaceful ambiance.",
        image:
          "/images/sightseeing/Delhi/Lotus Temple.jpg",
      },
    ],
    Agra: [
      {
        name: "Taj Mahal",
        description: "Wonder of the World, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Famous for its white marble and symmetry.",
        image:
          "/images/sightseeing/Agra/Taj_mahal.jpg",
      },
      {
        name: "Agra Fort",
        description: "Massive 16th-century fortress of red sandstone, housing royal residences, mosques, and audience halls.",
        image:
          "/images/sightseeing/Agra/agra_fort.jpg",
      },
      {
        name: "Fatehpur Sikri",
        description: "Ancient city built by Emperor Akbar in the 16th century, featuring impressive palaces, mosques, and courtyards.",
        image:
          "/images/sightseeing/Agra/Fathepur_shikiri.jpg",
      },
      {
        name: "Akbar's Tomb",
        description: "Final resting place of Emperor Akbar, showcasing unique Mughal architectural elements and intricate red sandstone work.",
        image:
          "/images/sightseeing/Agra/Diwan_i_kHAS.jpg",
      },
    ],
    Jaipur: [
      {
        name: "Hawa Mahal",
        description: "Palace of Winds, built in 1799, known for its intricate latticework and 953 small windows designed to allow cool breezes.",
        image:
          "/images/sightseeing/Jaipur/Jal_Mahal.jpg",
      },
      {
        name: "Amber Fort",
        description: "Majestic hilltop fortress with stunning views of the surrounding hills, featuring large courtyards and a mirror palace.",
        image:
          "/images/sightseeing/Jaipur/amber_fort.jpg",
      },
      {
        name: "City Palace",
        description: "Grand royal residence with courtyards, museums, and beautifully decorated gates.",
        image:
          "/images/sightseeing/Jaipur/city_palace.jpg",
      },
    ],
    Chandigarh: [
      {
        name: "Rock Garden",
        description: "Unique sculpture park created from industrial and domestic waste, showcasing creativity and eco-friendly art.",
        image:
          "/images/sightseeing/Chandigarh/Zakir_hUSSAIN_ROSE_Garden.jpg",
      },
      {
        name: "Sukhna Lake",
        description: "Artificial reservoir surrounded by walking paths and gardens, a popular spot for boating and relaxation.",
        image:
          "/images/sightseeing/Chandigarh/sukhana_lake.jpg",
      },
    ],
    Manali: [
      {
        name: "Rohtang Pass",
        description: "Scenic mountain pass located at 3,978 meters, offering breathtaking views of the Himalayas.",
        image:
          "/images/sightseeing/Manali/Solang Valley.jpg",
      },
      {
        name: "Hadimba Temple",
        description: "Ancient temple dedicated to Hadimba Devi, known for its unique wooden architecture.",
        image:
          "/images/sightseeing/Manali/Hidimba Temple.jpg",
      },
    ],
  };
  
  
  export const luxuryCars = [
    {
      type: "Audi A6",
      image: "/images/wedding/luxury_car.jpg",
      seating: "4",
      perDay: "₹15,000",
      minDays: "3",
      securityDeposit: "10%",
      rating: "4.9",
      reviews: "124",
      popular: true,
      facilities: [
        "Chauffeur Driven",
        "Premium Interior",
        "Airport Transfer",
        "24/7 Support",
      ],
    },
    {
      type: "BMW 5 Series",
      image: "/images/wedding/luxury_car.jpg",
      seating: "4",
      perDay: "₹16,000",
      minDays: "3",
      securityDeposit: "10%",
      rating: "4.8",
      reviews: "98",
      facilities: [
        "Chauffeur Driven",
        "Premium Interior",
        "Airport Transfer",
        "24/7 Support",
      ],
    },
    {
      type: "Mercedes E-Class",
      image: "/images/wedding/luxury_car.jpg",
      seating: "4",
      perDay: "₹17,000",
      minDays: "3",
      securityDeposit: "10%",
      rating: "4.9",
      reviews: "156",
      facilities: [
        "Chauffeur Driven",
        "Premium Interior",
        "Airport Transfer",
        "24/7 Support",
      ],
    },
    {
      type: "Toyota Fortuner",
      image: "/images/wedding/premium_suv.jpg",
      seating: "7",
      perDay: "₹12,000",
      minDays: "2",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "203",
      facilities: [
        "Chauffeur Driven",
        "Spacious Interior",
        "Airport Transfer",
        "24/7 Support",
      ],
    },
  ];
  
  export const standardCars = [
    {
      type: "Dzire",
      image: "/images/wedding/luxury_car.jpg",
      seating: "5",
      perDay: "₹2,500",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.5",
      reviews: "200",
      popular: true,
      facilities: ["Well Maintained", "AC", "GPS Tracking", "24/7 Support"],
    },
    {
      type: "Aura",
      image: "/images/wedding/luxury_car.jpg",
      seating: "5",
      perDay: "₹3,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.6",
      reviews: "142",
      popular: false,
      facilities: ["Well Maintained", "AC", "GPS Tracking", "24/7 Support"],
    },
    {
      type: "Ertiga",
      image: "/images/wedding/premium_suv.jpg",
      seating: "7",
      perDay: "₹4,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "150",
      facilities: ["Well Maintained", "AC", "GPS Tracking", "24/7 Support"],
    },
    {
      type: "KIA Carens",
      image: "/images/wedding/premium_suv.jpg",
      seating: "7",
      perDay: "₹4,400",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "118",
      facilities: ["Well Maintained", "AC", "GPS Tracking", "24/7 Support"],
    },
    {
      type: "Innova Crysta",
      image: "/images/wedding/premium_suv.jpg",
      seating: "7",
      perDay: "₹6,00",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.8",
      reviews: "425",
      facilities: ["Well Maintained", "AC", "GPS Tracking", "24/7 Support"],
    },
  ];
  
  export const tempoTravellers = [
    {
      type: "Tempo Traveller - 12",
      image: "/images/tempo/12_seater.jpg",
      seating: "12",
      perDay: "₹5,500",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.6",
      reviews: "95",
      facilities: ["AC", "Comfortable Seating", "GPS Tracking", "24/7 Support"]
    },
    {
      type: "Tempo Traveller - 16",
      image: "/images/tempo/16_seater.jpg",
      seating: "16",
      perDay: "₹6,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "78",
      facilities: ["AC", "Comfortable Seating", "GPS Tracking", "24/7 Support"]
    },
    {
      type: "Tempo Traveller - 20",
      image: "/images/tempo/20_seater.jpg",
      seating: "20",
      perDay: "₹6,500",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.5",
      reviews: "62",
      facilities: ["AC", "Comfortable Seating", "GPS Tracking", "24/7 Support"]
    },
    {
      type: "Tempo Traveller - 26",
      image: "/images/tempo/26_seater.jpg",
      seating: "26",
      perDay: "₹7,500",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.4",
      reviews: "53",
      facilities: ["AC", "Comfortable Seating", "GPS Tracking", "24/7 Support"]
    }
  ];
  
  export const luxuryBuses = [
    {
      type: "Luxury Bus - 35",
      image: "/images/bus/35_SEATER_BUS.jpg",
      seating: "35",
      perDay: "₹18,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.6",
      reviews: "85",
      facilities: ["AC", "Comfortable Seats", "Entertainment System", "WiFi", "24/7 Support"]
    },
    {
      type: "Luxury Bus - 40",
      image: "/images/bus/41_SEATER_BUS.jpg",
      seating: "40",
      perDay: "₹20,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "72",
      facilities: ["AC", "Comfortable Seats", "Entertainment System", "WiFi", "24/7 Support"]
    },
    {
      type: "Luxury Bus - 45",
      image: "/images/bus/45_SEATER_BUS.jpg",
      seating: "45",
      perDay: "₹22,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.8",
      reviews: "65",
      facilities: ["AC", "Comfortable Seats", "Entertainment System", "WiFi", "24/7 Support"]
    },
    {
      type: "Luxury Bus - 49",
      image: "/images/bus/49_SEATER_BUS.jpg",
      seating: "49",
      perDay: "₹25,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.9",
      reviews: "58",
      facilities: ["AC", "Comfortable Seats", "Entertainment System", "WiFi", "24/7 Support"]
    },
    {
      type: "Luxury Bus - 55",
      image: "/images/bus/56_SEATER_BUS.jpg",
      seating: "55",
      perDay: "₹28,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "47",
      facilities: ["AC", "Comfortable Seats", "Entertainment System", "WiFi", "24/7 Support"]
    }
  ];
  
  export const simpleBuses = [
    {
      type: "Simple Bus - 35",
      image: "/images/bus/35_SEATER_BUS.jpg",
      seating: "35",
      perDay: "₹12,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.3",
      reviews: "95",
      facilities: ["Basic Seating", "Standard AC", "Basic Support"]
    },
    {
      type: "Simple Bus - 40",
      image: "/images/bus/41_SEATER_BUS.jpg",
      seating: "40",
      perDay: "₹14,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.4",
      reviews: "82",
      facilities: ["Basic Seating", "Standard AC", "Basic Support"]
    },
    {
      type: "Simple Bus - 45",
      image: "/images/bus/45_SEATER_BUS.jpg",
      seating: "45",
      perDay: "₹16,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.5",
      reviews: "75",
      facilities: ["Basic Seating", "Standard AC", "Basic Support"]
    },
    {
      type: "Simple Bus - 49",
      image: "/images/bus/49_SEATER_BUS.jpg",
      seating: "49",
      perDay: "₹18,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.6",
      reviews: "68",
      facilities: ["Basic Seating", "Standard AC", "Basic Support"]
    },
    {
      type: "Simple Bus - 55",
      image: "/images/bus/56_SEATER_BUS.jpg",
      seating: "55",
      perDay: "₹20,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.4",
      reviews: "57",
      facilities: ["Basic Seating", "Standard AC", "Basic Support"]
    }
  ];

export const phoneNumber = "7668570551";
export const emailAddress = "cabstriveni@gmail.com";
