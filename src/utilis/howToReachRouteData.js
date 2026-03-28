// src/utilis/howToReachRouteData.js - Complete data for 30 how-to-reach origin-specific pages
// Each route covers 4 travel modes: Car/Cab, Bus, Train+Cab, Flight+Cab

const howToReachRoutes = {
  "manali-from-delhi": {
    "slug": "manali-from-delhi",
    "destination": "Manali",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "540 km",
        "duration": "12-14 hours",
        "costRange": "₹5,940 - ₹9,720",
        "pros": [
          "Door-to-door convenience",
          "Stop at Chandigarh, Mandi, Kullu",
          "Unlimited luggage",
          "Flexible departure time"
        ],
        "cons": [
          "Long drive",
          "Mountain roads need experienced driver"
        ],
        "details": "Delhi to Manali via NH-44 and NH-3 through Chandigarh, Bilaspur, Mandi, Kullu Valley. Triveni Cabs provides experienced hill drivers."
      },
      {
        "mode": "By Bus",
        "types": [
          "HRTC Volvo AC (₹1,200-₹1,500)",
          "HRTC Semi-Deluxe (₹700-₹900)",
          "Private Volvo (₹1,400-₹1,800)"
        ],
        "costRange": "₹700-₹1,800",
        "duration": "13-16 hours",
        "pros": [
          "Cheapest for solo",
          "Overnight saves hotel"
        ],
        "cons": [
          "No stops",
          "Cramped seats",
          "Bus stand far from hotels"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Chandigarh Junction (CDG) / Ambala Cantt (UMB)",
        "trainOptions": [
          {
            "name": "Shatabdi Express (12011)",
            "from": "New Delhi",
            "duration": "3h 30m",
            "fare": "₹700-₹1,500"
          },
          {
            "name": "Jan Shatabdi (12057)",
            "from": "New Delhi",
            "duration": "4h 15m",
            "fare": "₹400-₹800"
          },
          {
            "name": "Kalka Mail (12311)",
            "from": "Howrah via Delhi",
            "duration": "4h 45m",
            "fare": "₹350-₹700"
          }
        ],
        "cabFromStation": "₹5,500-₹8,000 (Chandigarh to Manali, 310 km, 7-8 hrs)",
        "totalDuration": "11-13 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Kullu-Manali Airport (Bhuntar, KUU) - 50 km",
        "flightCostRange": "₹4,000-₹10,000 (limited flights)",
        "cabFromAirport": "₹1,200-₹2,000 (50 km, 1.5 hrs)",
        "totalDuration": "3-4 hours"
      }
    ],
    "recommendation": "A cab from Delhi to Manali is the best choice for families and groups. You control departure time, make scenic stops, and arrive directly at your hotel.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹5,940",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹9,720",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹12,960",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "What is the best way to reach Manali from Delhi?",
        "answer": "By private cab (540 km, 12-14 hrs). Sedan ₹5,940, SUV ₹9,720."
      },
      {
        "question": "How much does a Delhi to Manali cab cost?",
        "answer": "Sedan: ₹5,940. Ertiga: ₹8,100. Innova: ₹9,720. Toll extra."
      },
      {
        "question": "Is there a direct flight?",
        "answer": "Limited flights to Bhuntar (KUU), 50 km from Manali. Often cancelled due to weather."
      },
      {
        "question": "How long by car?",
        "answer": "12-14 hours. Starting at midnight lets you arrive by noon."
      },
      {
        "question": "Nearest railway station?",
        "answer": "Chandigarh Junction, 310 km away. Take train then cab."
      },
      {
        "question": "Can I break the journey?",
        "answer": "Yes, halt at Chandigarh overnight, drive to Manali next morning."
      }
    ],
    "relatedRoutes": [
      "shimla-from-delhi",
      "kasol-from-delhi",
      "manali-from-chandigarh",
      "rohtang-pass-from-manali"
    ]
  },
  "shimla-from-delhi": {
    "slug": "shimla-from-delhi",
    "destination": "Shimla",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "350 km",
        "duration": "7-8 hours",
        "costRange": "₹3,850-₹6,300",
        "pros": [
          "Direct door-to-door",
          "Stop at Pinjore Gardens",
          "Scenic mountain drive",
          "Flexible timing"
        ],
        "cons": [
          "Hairpin bends after Solan",
          "Traffic on NH-5 peak season"
        ],
        "details": "Delhi to Shimla via NH-44 and NH-5 through Chandigarh, Kalka, Shivalik Range."
      },
      {
        "mode": "By Bus",
        "types": [
          "HRTC Volvo AC (₹900-₹1,200)",
          "HRTC Ordinary (₹500-₹650)"
        ],
        "costRange": "₹500-₹1,400",
        "duration": "8-10 hours",
        "pros": [
          "Budget-friendly",
          "Frequent"
        ],
        "cons": [
          "No scenic stops",
          "Drop far from Mall Road"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Kalka (KLK) - 90 km / Shimla (SML) via toy train",
        "trainOptions": [
          {
            "name": "Shatabdi Express (12011)",
            "from": "New Delhi",
            "duration": "3h 30m",
            "fare": "₹700-₹1,500"
          },
          {
            "name": "Himalayan Queen (14553)",
            "from": "Kalka to Shimla",
            "duration": "5h 30m",
            "fare": "₹300-₹700"
          }
        ],
        "cabFromStation": "₹2,000-₹3,500 (Chandigarh/Kalka to Shimla)",
        "totalDuration": "8-12 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Shimla Airport (SLV) - 22 km / Chandigarh (IXC) - 115 km",
        "flightCostRange": "₹3,500-₹8,000 (Delhi to Chandigarh)",
        "cabFromAirport": "₹2,500-₹4,000 (Chandigarh to Shimla)",
        "totalDuration": "4-5 hours"
      }
    ],
    "recommendation": "Ideal for families. Enjoy Shivalik views, stop at Pinjore Gardens, arrive at your hotel.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,850",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹6,300",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹8,400",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (350 km, 7-8 hrs). Sedan ₹3,850."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,850. Innova: ₹6,300."
      },
      {
        "question": "Toy train?",
        "answer": "Yes, UNESCO heritage. 5-6 hours, 102 tunnels."
      },
      {
        "question": "Direct flight?",
        "answer": "Limited. Most fly to Chandigarh + 3-hour cab."
      },
      {
        "question": "How long by car?",
        "answer": "7-8 hours total."
      },
      {
        "question": "Best time?",
        "answer": "Mar-Jun. Dec-Feb for snowfall."
      }
    ],
    "relatedRoutes": [
      "manali-from-delhi",
      "mussoorie-from-delhi",
      "kasol-from-delhi",
      "manali-from-chandigarh"
    ]
  },
  "rishikesh-from-delhi": {
    "slug": "rishikesh-from-delhi",
    "destination": "Rishikesh",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "240 km",
        "duration": "5-6 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Direct ashram/hotel drop",
          "Stop at Haridwar",
          "Comfortable AC",
          "Flexible departure"
        ],
        "cons": [
          "Traffic near Meerut",
          "Congestion entering Rishikesh"
        ],
        "details": "Delhi to Rishikesh via NH-334 through Meerut, Muzaffarnagar, Roorkee, Haridwar."
      },
      {
        "mode": "By Bus",
        "types": [
          "UTC Volvo AC (₹600-₹900)",
          "UTC Ordinary (₹350-₹500)"
        ],
        "costRange": "₹350-₹1,100",
        "duration": "6-8 hours",
        "pros": [
          "Frequent from ISBT"
        ],
        "cons": [
          "Drop at bus stand",
          "No Haridwar stop"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Haridwar Junction (HW) - 25 km",
        "trainOptions": [
          {
            "name": "Nandini Express (12205)",
            "from": "New Delhi",
            "duration": "4h 45m",
            "fare": "₹300-₹800"
          },
          {
            "name": "Jan Shatabdi (12055)",
            "from": "New Delhi",
            "duration": "4h 30m",
            "fare": "₹400-₹900"
          }
        ],
        "cabFromStation": "₹600-₹1,200 (Haridwar to Rishikesh, 25 km)",
        "totalDuration": "5.5-7 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Jolly Grant Airport (DED) - 20 km",
        "flightCostRange": "₹3,000-₹7,000 (1 hour)",
        "cabFromAirport": "₹500-₹1,000 (20 km)",
        "totalDuration": "2-3 hours"
      }
    ],
    "recommendation": "Perfect for pilgrims and adventure seekers. Stop at Haridwar for Ganga Aarti.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (240 km, 5-6 hrs). Sedan ₹3,300."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300. Innova: ₹5,400."
      },
      {
        "question": "Direct train?",
        "answer": "No. Trains to Haridwar (25 km). Then cab."
      },
      {
        "question": "Visit Haridwar?",
        "answer": "Yes, on route. Free stop."
      },
      {
        "question": "How long?",
        "answer": "5-6 hours."
      },
      {
        "question": "Best time?",
        "answer": "Sep-Nov for rafting. Avoid Jul-Aug."
      }
    ],
    "relatedRoutes": [
      "mussoorie-from-delhi",
      "kedarnath-from-delhi",
      "badrinath-from-delhi",
      "nainital-from-delhi"
    ]
  },
  "nainital-from-delhi": {
    "slug": "nainital-from-delhi",
    "destination": "Nainital",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "300 km",
        "duration": "6-7 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Door-to-door lake hotel",
          "Stop at Jim Corbett",
          "Comfortable for families"
        ],
        "cons": [
          "Hilly after Haldwani",
          "Weekend traffic"
        ],
        "details": "Via NH-9 through Moradabad, Rampur, Haldwani."
      },
      {
        "mode": "By Bus",
        "types": [
          "UTC Volvo AC (₹700-₹1,000)"
        ],
        "costRange": "₹400-₹1,200",
        "duration": "7-9 hours",
        "pros": [
          "Budget-friendly"
        ],
        "cons": [
          "Drop at Tallital"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Kathgodam (KGM) - 35 km",
        "trainOptions": [
          {
            "name": "Ranikhet Express (15013)",
            "from": "Old Delhi",
            "duration": "7h",
            "fare": "₹300-₹700"
          },
          {
            "name": "KGM Shatabdi (12039)",
            "from": "New Delhi",
            "duration": "5h 30m",
            "fare": "₹600-₹1,200"
          }
        ],
        "cabFromStation": "₹800-₹1,500 (35 km, 1 hr)",
        "totalDuration": "7-9 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Pantnagar (PGH) - 70 km",
        "flightCostRange": "₹4,000-₹9,000",
        "cabFromAirport": "₹1,500-₹2,500 (70 km)",
        "totalDuration": "3-4 hours"
      }
    ],
    "recommendation": "Smartest way for families. Drive through Kumaon foothills, stop at Jim Corbett.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (300 km, 6-7 hrs). Sedan ₹3,300."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300. Innova: ₹5,400."
      },
      {
        "question": "Train?",
        "answer": "To Kathgodam (35 km). Then cab 1 hr."
      },
      {
        "question": "Jim Corbett?",
        "answer": "Yes, en route. Free stop."
      },
      {
        "question": "How long?",
        "answer": "6-7 hours."
      },
      {
        "question": "Best time?",
        "answer": "Mar-Jun. Oct-Nov for views."
      }
    ],
    "relatedRoutes": [
      "mussoorie-from-delhi",
      "rishikesh-from-delhi",
      "shimla-from-delhi"
    ]
  },
  "mussoorie-from-delhi": {
    "slug": "mussoorie-from-delhi",
    "destination": "Mussoorie",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "290 km",
        "duration": "6-7 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Direct Mall Road drop",
          "Stop at Dehradun",
          "Beautiful drive",
          "Family-friendly"
        ],
        "cons": [
          "Peak season traffic",
          "Narrow roads"
        ],
        "details": "Via NH-334 through Meerut, Roorkee to Dehradun, then 35 km hill climb."
      },
      {
        "mode": "By Bus",
        "types": [
          "UTC Volvo AC (₹700-₹1,000)"
        ],
        "costRange": "₹400-₹1,100",
        "duration": "7-9 hours",
        "pros": [
          "Regular services"
        ],
        "cons": [
          "Most go to Dehradun only"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Dehradun (DDN) - 35 km",
        "trainOptions": [
          {
            "name": "Nandini Express (12205)",
            "from": "New Delhi",
            "duration": "5h 30m",
            "fare": "₹300-₹800"
          },
          {
            "name": "Dehradun Shatabdi (12017)",
            "from": "New Delhi",
            "duration": "5h 45m",
            "fare": "₹700-₹1,500"
          }
        ],
        "cabFromStation": "₹800-₹1,500 (35 km, 1 hr)",
        "totalDuration": "7-8 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Jolly Grant (DED) - 55 km",
        "flightCostRange": "₹3,000-₹7,000",
        "cabFromAirport": "₹1,200-₹2,000 (55 km)",
        "totalDuration": "3-4 hours"
      }
    ],
    "recommendation": "Enjoy Doon Valley drive. Direct Mall Road hotel drop. Perfect weekend getaway.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (290 km, 6-7 hrs). Sedan ₹3,300."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300. Innova: ₹5,400."
      },
      {
        "question": "Direct train?",
        "answer": "No. Nearest Dehradun (35 km)."
      },
      {
        "question": "Combine with Dehradun?",
        "answer": "Yes, stop at Robbers Cave, Sahastradhara."
      },
      {
        "question": "How long?",
        "answer": "6-7 hours."
      },
      {
        "question": "Best time?",
        "answer": "Mar-Jun. Dec-Feb for snow."
      }
    ],
    "relatedRoutes": [
      "rishikesh-from-delhi",
      "shimla-from-delhi",
      "nainital-from-delhi"
    ]
  },
  "kasol-from-delhi": {
    "slug": "kasol-from-delhi",
    "destination": "Kasol",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "520 km",
        "duration": "11-13 hours",
        "costRange": "₹5,720-₹9,360",
        "pros": [
          "Direct campsite drop",
          "Stop at Chandigarh, Mandi",
          "Navigate Parvati Valley safely",
          "Carry trekking gear"
        ],
        "cons": [
          "Very long drive",
          "Narrow Parvati Valley roads"
        ],
        "details": "Via NH-44 to Chandigarh, NH-21 through Mandi, Bhuntar into Parvati Valley."
      },
      {
        "mode": "By Bus",
        "types": [
          "HRTC Volvo to Bhuntar (₹1,100-₹1,400)",
          "Private Volvo (₹1,300-₹1,700)"
        ],
        "costRange": "₹600-₹1,700",
        "duration": "13-16 hours",
        "pros": [
          "Overnight saves hotel"
        ],
        "cons": [
          "Long journey",
          "Limited direct buses"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Chandigarh (CDG) - 280 km from Kasol",
        "trainOptions": [
          {
            "name": "Shatabdi Express (12011)",
            "from": "New Delhi",
            "duration": "3h 30m",
            "fare": "₹700-₹1,500"
          }
        ],
        "cabFromStation": "₹5,000-₹7,500 (280 km, 7-8 hrs)",
        "totalDuration": "11-13 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Bhuntar (KUU) - 30 km",
        "flightCostRange": "₹4,000-₹10,000 (limited)",
        "cabFromAirport": "₹800-₹1,500 (30 km)",
        "totalDuration": "3-4 hours"
      }
    ],
    "recommendation": "Kasol is deep in Parvati Valley. Private cab ensures safety on narrow roads.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹5,720",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹9,360",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹12,480",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab for groups (520 km, 11-13 hrs). Sedan ₹5,720."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹5,720. Innova: ₹9,360."
      },
      {
        "question": "Direct bus?",
        "answer": "Private operators in peak season. HRTC to Bhuntar."
      },
      {
        "question": "Nearest airport?",
        "answer": "Bhuntar (KUU), 30 km. Limited flights."
      },
      {
        "question": "How long?",
        "answer": "11-13 hours by car."
      },
      {
        "question": "Visit Manikaran?",
        "answer": "Yes, 5 km from Kasol. Hot springs and Gurudwara."
      }
    ],
    "relatedRoutes": [
      "manali-from-delhi",
      "shimla-from-delhi",
      "kasol-from-chandigarh",
      "spiti-valley-from-delhi"
    ]
  },
  "leh-from-delhi": {
    "slug": "leh-from-delhi",
    "destination": "Leh",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "990 km (via Manali)",
        "duration": "2 days (overnight halt)",
        "costRange": "₹15,000-₹25,000",
        "pros": [
          "Epic lifetime road trip",
          "Gradual altitude acclimatization",
          "Stop at Rohtang, Keylong, Sarchu"
        ],
        "cons": [
          "2-day journey",
          "Open Jun-Sep only",
          "Altitude sickness risk"
        ],
        "details": "Cross Rohtang (13,050 ft), Baralacha La (16,040 ft), Tanglang La (17,480 ft)."
      },
      {
        "mode": "By Bus",
        "types": [
          "HPTDC Deluxe Manali-Leh (₹3,000-₹4,500)"
        ],
        "costRange": "₹2,500-₹6,000",
        "duration": "2-3 days",
        "pros": [
          "Very cheap"
        ],
        "cons": [
          "Extremely uncomfortable",
          "No heating at 16,000 ft"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Chandigarh Junction (CDG)",
        "trainOptions": [
          {
            "name": "Shatabdi Express (12011)",
            "from": "New Delhi",
            "duration": "3h 30m",
            "fare": "₹700-₹1,500"
          }
        ],
        "cabFromStation": "₹14,000-₹22,000 (via Manali, 2 days)",
        "totalDuration": "2 days"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Leh Airport (IXL) - in Leh",
        "flightCostRange": "₹5,000-₹15,000 (1.5 hrs)",
        "cabFromAirport": "₹500-₹1,000 (5 km)",
        "totalDuration": "2-3 hours"
      }
    ],
    "recommendation": "Drive for the ultimate experience. Acclimatize gradually, witness spectacular passes. Cab essential in Ladakh.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (not recommended - SUV required)",
        "price": "N/A",
        "perKm": "-"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹17,820",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹23,760",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "Flight (1.5 hrs) for speed. Cab via Manali (2 days) for road trip."
      },
      {
        "question": "Cab cost?",
        "answer": "SUV: ~₹17,820. Driver accommodation extra."
      },
      {
        "question": "Highway open?",
        "answer": "Jun-Sep/Oct. Srinagar-Leh: May-Nov."
      },
      {
        "question": "Sedan?",
        "answer": "Not recommended. SUV essential."
      },
      {
        "question": "How many days?",
        "answer": "Min 2 days. Better 3 with acclimatization."
      },
      {
        "question": "Permit?",
        "answer": "No permit for Leh. ILP for Nubra/Pangong."
      }
    ],
    "relatedRoutes": [
      "manali-from-delhi",
      "spiti-valley-from-delhi",
      "shimla-from-delhi"
    ]
  },
  "spiti-valley-from-delhi": {
    "slug": "spiti-valley-from-delhi",
    "destination": "Spiti Valley",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "680 km (via Shimla-Kinnaur)",
        "duration": "2 days (halt at Reckong Peo)",
        "costRange": "₹10,000-₹16,000",
        "pros": [
          "Expert driver for dangerous roads",
          "Stop at Narkanda, Sarahan, Kalpa, Tabo",
          "Gradual acclimatization"
        ],
        "cons": [
          "2-day minimum",
          "Landslides common",
          "Open Jun-Oct only"
        ],
        "details": "Via NH-5 through Shimla, Narkanda, Rampur, Reckong Peo, Tabo, Kaza."
      },
      {
        "mode": "By Bus",
        "types": [
          "HRTC Ordinary Shimla-Kaza (₹800-₹1,200)"
        ],
        "costRange": "₹1,200-₹2,500",
        "duration": "2-3 days",
        "pros": [
          "Budget-friendly"
        ],
        "cons": [
          "Extremely uncomfortable",
          "1-2 buses daily"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Shimla (SML) or Chandigarh (CDG)",
        "trainOptions": [
          {
            "name": "Shatabdi Express (12011)",
            "from": "New Delhi",
            "duration": "3h 30m",
            "fare": "₹700-₹1,500"
          }
        ],
        "cabFromStation": "₹10,000-₹14,000 (to Kaza, 2 days)",
        "totalDuration": "2-3 days"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Bhuntar (KUU)",
        "flightCostRange": "₹4,000-₹10,000",
        "cabFromAirport": "₹6,000-₹10,000 (via Rohtang, Jul-Sep only)",
        "totalDuration": "10-12 hours"
      }
    ],
    "recommendation": "Spiti has India's most dangerous roads. Private SUV with expert driver is essential.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (not recommended)",
        "price": "N/A",
        "perKm": "-"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹12,240",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹16,320",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "Private SUV via Shimla-Kinnaur (2 days). ~₹12,240."
      },
      {
        "question": "Best time?",
        "answer": "Jun-Sep. Manali route Jul only."
      },
      {
        "question": "Sedan?",
        "answer": "No. SUV essential."
      },
      {
        "question": "How many days?",
        "answer": "Min 2. Budget 5-7 for circuit."
      },
      {
        "question": "Safe?",
        "answer": "Yes with experienced driver."
      },
      {
        "question": "Permit?",
        "answer": "Not for Indians. Foreigners need ILP."
      }
    ],
    "relatedRoutes": [
      "leh-from-delhi",
      "manali-from-delhi",
      "shimla-from-delhi",
      "rohtang-pass-from-manali"
    ]
  },
  "vaishno-devi-from-delhi": {
    "slug": "vaishno-devi-from-delhi",
    "destination": "Vaishno Devi (Katra)",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "630 km",
        "duration": "10-12 hours",
        "costRange": "₹6,930-₹11,340",
        "pros": [
          "Arrive fresh at Katra",
          "Stop at Jammu/Patnitop",
          "Carry pooja items",
          "Flexible departure"
        ],
        "cons": [
          "Long drive",
          "Jammu-Katra traffic"
        ],
        "details": "Via NH-44 through Ludhiana, Jalandhar, Pathankot, Udhampur."
      },
      {
        "mode": "By Bus",
        "types": [
          "J&K SRTC Volvo (₹1,200-₹1,600)",
          "Private Volvo (₹1,400-₹1,800)"
        ],
        "costRange": "₹600-₹1,800",
        "duration": "12-15 hours",
        "pros": [
          "Overnight saves night"
        ],
        "cons": [
          "Arrive tired for trek"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Vaishno Devi Katra (SVDK)",
        "trainOptions": [
          {
            "name": "Vande Bharat (22439)",
            "from": "New Delhi",
            "duration": "8h",
            "fare": "₹1,500-₹2,800"
          },
          {
            "name": "Jammu Mail (14033)",
            "from": "Old Delhi",
            "duration": "10h",
            "fare": "₹400-₹1,000"
          }
        ],
        "cabFromStation": "₹0 (Katra station at base town)",
        "totalDuration": "8-12 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Jammu (IXJ) - 50 km",
        "flightCostRange": "₹3,500-₹8,000 (1.5 hrs)",
        "cabFromAirport": "₹1,200-₹2,000 (50 km)",
        "totalDuration": "3-4 hours"
      }
    ],
    "recommendation": "Travel overnight, arrive early morning for trek. Carry pooja items without luggage worries.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹6,930",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹11,340",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹15,120",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "Vande Bharat (8 hrs) by train. Cab (₹6,930) for groups."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹6,930. Innova: ₹11,340."
      },
      {
        "question": "Direct train?",
        "answer": "Yes, Katra (SVDK) has Vande Bharat."
      },
      {
        "question": "Fly?",
        "answer": "To Jammu (IXJ), then 1.5-hr cab."
      },
      {
        "question": "How long by car?",
        "answer": "10-12 hours. Night travel common."
      },
      {
        "question": "What to carry?",
        "answer": "Warm clothes, shoes, rain poncho, water, yatra slip."
      }
    ],
    "relatedRoutes": [
      "kedarnath-from-delhi",
      "badrinath-from-delhi",
      "shimla-from-delhi"
    ]
  },
  "kedarnath-from-delhi": {
    "slug": "kedarnath-from-delhi",
    "destination": "Kedarnath",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "460 km (to Sonprayag)",
        "duration": "10-12 hours",
        "costRange": "₹5,060-₹8,280",
        "pros": [
          "Reach Sonprayag directly",
          "Stop at Haridwar, Rishikesh",
          "Driver waits during trek"
        ],
        "cons": [
          "Long mountain drive",
          "Road closures in rain"
        ],
        "details": "Via Haridwar, Rishikesh, Devprayag, Rudraprayag, Guptkashi."
      },
      {
        "mode": "By Bus",
        "types": [
          "GMOU/UTC to Sonprayag (₹600-₹900)"
        ],
        "costRange": "₹800-₹1,600",
        "duration": "14-18 hours",
        "pros": [
          "Budget-friendly"
        ],
        "cons": [
          "Multiple changes",
          "Very uncomfortable"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Haridwar (HW) - 240 km from Sonprayag",
        "trainOptions": [
          {
            "name": "Nandini Express (12205)",
            "from": "New Delhi",
            "duration": "4h 45m",
            "fare": "₹300-₹800"
          }
        ],
        "cabFromStation": "₹5,000-₹8,000 (240 km, 7-8 hrs)",
        "totalDuration": "12-14 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Jolly Grant (DED) - 260 km",
        "flightCostRange": "₹3,000-₹7,000",
        "cabFromAirport": "₹5,500-₹8,500 (260 km)",
        "totalDuration": "9-10 hours"
      }
    ],
    "recommendation": "Essential for pilgrims. Experienced driver for mountain roads. Cab waits at Sonprayag.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹5,060",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹8,280",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹11,040",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "How to reach?",
        "answer": "Cab to Sonprayag (460 km), jeep to Gaurikund, 16 km trek."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹5,060. Innova: ₹8,280."
      },
      {
        "question": "Road to temple?",
        "answer": "No. Road ends at Sonprayag. Trek or helicopter."
      },
      {
        "question": "When open?",
        "answer": "Late Apr/May to Nov."
      },
      {
        "question": "Combine with Badrinath?",
        "answer": "Yes. Sonprayag to Badrinath 230 km."
      },
      {
        "question": "Cab waits where?",
        "answer": "Sonprayag/Guptkashi. Driver meals extra."
      }
    ],
    "relatedRoutes": [
      "badrinath-from-delhi",
      "rishikesh-from-delhi",
      "vaishno-devi-from-delhi"
    ]
  },
  "badrinath-from-delhi": {
    "slug": "badrinath-from-delhi",
    "destination": "Badrinath",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "530 km",
        "duration": "13-15 hours",
        "costRange": "₹5,830-₹9,540",
        "pros": [
          "Direct access to town",
          "Visit all Prayags",
          "Visit Mana Village"
        ],
        "cons": [
          "Very long drive",
          "Altitude 10,170 ft"
        ],
        "details": "Via Haridwar, Rishikesh, Devprayag, Rudraprayag, Joshimath."
      },
      {
        "mode": "By Bus",
        "types": [
          "GMOU from Rishikesh (₹700-₹1,000)"
        ],
        "costRange": "₹1,000-₹2,000",
        "duration": "16-20 hours",
        "pros": [
          "Cheapest"
        ],
        "cons": [
          "Multiple changes"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Haridwar (HW) - 320 km",
        "trainOptions": [
          {
            "name": "Nandini Express (12205)",
            "from": "New Delhi",
            "duration": "4h 45m",
            "fare": "₹300-₹800"
          }
        ],
        "cabFromStation": "₹6,500-₹10,000 (320 km, 9-10 hrs)",
        "totalDuration": "14-16 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Jolly Grant (DED) - 340 km",
        "flightCostRange": "₹3,000-₹7,000",
        "cabFromAirport": "₹7,000-₹10,000 (340 km)",
        "totalDuration": "11-12 hours"
      }
    ],
    "recommendation": "Sacred Alaknanda Valley drive. Visit all Prayags and arrive safely at 10,170 ft.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹5,830",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹9,540",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹12,720",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (530 km, 13-15 hrs). Sedan ₹5,830."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹5,830. Innova: ₹9,540."
      },
      {
        "question": "When open?",
        "answer": "Late Apr/May to November."
      },
      {
        "question": "Road to temple?",
        "answer": "Yes, road goes right to the temple (unlike Kedarnath)."
      },
      {
        "question": "Combine with Kedarnath?",
        "answer": "Yes. Do Kedarnath first, then 230 km drive."
      },
      {
        "question": "Altitude sickness?",
        "answer": "At 10,170 ft. Driving helps acclimatize."
      }
    ],
    "relatedRoutes": [
      "kedarnath-from-delhi",
      "rishikesh-from-delhi",
      "vaishno-devi-from-delhi"
    ]
  },
  "taj-mahal-from-delhi": {
    "slug": "taj-mahal-from-delhi",
    "destination": "Taj Mahal (Agra)",
    "origin": "Delhi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "230 km",
        "duration": "3-4 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Fastest option",
          "Via Yamuna Expressway",
          "Visit Agra Fort, Fatehpur Sikri",
          "Stop at Mathura"
        ],
        "cons": [
          "Toll ~₹700"
        ],
        "details": "Via six-lane Yamuna Expressway. Leave 5 AM for Taj sunrise."
      },
      {
        "mode": "By Bus",
        "types": [
          "UPSRTC Volvo AC (₹500-₹700)",
          "Express (₹250-₹350)"
        ],
        "costRange": "₹250-₹800",
        "duration": "4-5 hours",
        "pros": [
          "Cheapest for solo"
        ],
        "cons": [
          "Need auto from bus stand"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Agra Cantt (AGC) - 6 km from Taj",
        "trainOptions": [
          {
            "name": "Gatimaan Express (12049)",
            "from": "H. Nizamuddin",
            "duration": "1h 40m",
            "fare": "₹700-₹1,500"
          },
          {
            "name": "Shatabdi Express (12001)",
            "from": "New Delhi",
            "duration": "2h",
            "fare": "₹700-₹1,500"
          }
        ],
        "cabFromStation": "₹300-₹600 (6 km)",
        "totalDuration": "2-3.5 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Agra Airport (limited)",
        "flightCostRange": "No regular flights",
        "cabFromAirport": "₹400-₹700",
        "totalDuration": "Cab is faster"
      }
    ],
    "recommendation": "#1 choice for tourists. Leave 5 AM, reach 8 AM for sunrise. Smooth Yamuna Expressway drive.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Fastest way?",
        "answer": "Gatimaan Express (1h 40m). Cab (3-4 hrs) better value."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300. Day trip from ₹4,500."
      },
      {
        "question": "Same-day trip?",
        "answer": "Yes. Leave 5 AM, return 7-8 PM."
      },
      {
        "question": "Expressway safe at night?",
        "answer": "Yes, well-lit with CCTV."
      },
      {
        "question": "Best time for Taj?",
        "answer": "Sunrise. Oct-Mar. Closed Fridays."
      },
      {
        "question": "Stop at Mathura?",
        "answer": "Yes, on NH-2 route. Free stop."
      }
    ],
    "relatedRoutes": [
      "shimla-from-delhi",
      "nainital-from-delhi",
      "agra-from-jaipur"
    ]
  },
  "udaipur-from-jaipur": {
    "slug": "udaipur-from-jaipur",
    "destination": "Udaipur",
    "origin": "Jaipur",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "395 km",
        "duration": "6-7 hours",
        "costRange": "₹4,345-₹7,110",
        "pros": [
          "Stop at Chittorgarh/Nathdwara",
          "Scenic Aravalli drive",
          "Direct lakeside drop"
        ],
        "cons": [
          "Single-lane near Rajsamand"
        ],
        "details": "Via NH-48 through Ajmer, Beawar, Rajsamand."
      },
      {
        "mode": "By Bus",
        "types": [
          "RSRTC Volvo AC (₹700-₹1,000)"
        ],
        "costRange": "₹400-₹1,200",
        "duration": "7-9 hours",
        "pros": [
          "Frequent"
        ],
        "cons": [
          "Drop far from Lake Pichola"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Udaipur City (UDZ)",
        "trainOptions": [
          {
            "name": "Chetak Express (12981)",
            "from": "Jaipur",
            "duration": "10h",
            "fare": "₹300-₹800"
          },
          {
            "name": "Mewar Express (12963)",
            "from": "Jaipur",
            "duration": "9h 30m",
            "fare": "₹350-₹900"
          }
        ],
        "cabFromStation": "₹300-₹600 (4 km)",
        "totalDuration": "9-11 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Udaipur (UDR) - 22 km",
        "flightCostRange": "₹3,000-₹7,000",
        "cabFromAirport": "₹500-₹900",
        "totalDuration": "2-3 hours"
      }
    ],
    "recommendation": "Drive through Aravallis. Stop at Chittorgarh Fort (UNESCO). Arrive at lakeside hotel.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹4,345",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹7,110",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹9,480",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (395 km, 6-7 hrs). Sedan ₹4,345."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹4,345. Innova: ₹7,110."
      },
      {
        "question": "Train?",
        "answer": "Chetak Express (10 hrs overnight)."
      },
      {
        "question": "Chittorgarh?",
        "answer": "Yes, adds 60 km. UNESCO site."
      },
      {
        "question": "How long?",
        "answer": "6-7 hours."
      },
      {
        "question": "Best time?",
        "answer": "Oct-Mar."
      }
    ],
    "relatedRoutes": [
      "jaisalmer-from-jaipur",
      "mount-abu-from-jaipur",
      "pushkar-from-jaipur",
      "agra-from-jaipur"
    ]
  },
  "jaisalmer-from-jaipur": {
    "slug": "jaisalmer-from-jaipur",
    "destination": "Jaisalmer",
    "origin": "Jaipur",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "570 km",
        "duration": "8-9 hours",
        "costRange": "₹6,270-₹10,260",
        "pros": [
          "Stop at Jodhpur",
          "Thar Desert drive",
          "Direct desert camp drop"
        ],
        "cons": [
          "Long drive",
          "Summer heat extreme"
        ],
        "details": "Via NH-62 through Jodhpur (330 km), then 280 km through Thar Desert."
      },
      {
        "mode": "By Bus",
        "types": [
          "RSRTC Volvo AC (₹900-₹1,300)"
        ],
        "costRange": "₹500-₹1,500",
        "duration": "10-13 hours",
        "pros": [
          "Overnight buses"
        ],
        "cons": [
          "Very long"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Jaisalmer (JSM)",
        "trainOptions": [
          {
            "name": "Delhi-Jaisalmer Express (14659)",
            "from": "Jaipur",
            "duration": "11h",
            "fare": "₹400-₹1,000"
          }
        ],
        "cabFromStation": "₹300-₹1,200 (to fort or Sam Dunes)",
        "totalDuration": "12-14 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Jaisalmer (JSA) - 15 km",
        "flightCostRange": "₹5,000-₹12,000 (limited)",
        "cabFromAirport": "₹400-₹1,500",
        "totalDuration": "No direct Jaipur flights"
      }
    ],
    "recommendation": "Watch landscapes turn golden. Break at Jodhpur. Direct desert camp drop.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹6,270",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹10,260",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹13,680",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (570 km, 8-9 hrs) with Jodhpur stop."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹6,270. Innova: ₹10,260."
      },
      {
        "question": "Break at Jodhpur?",
        "answer": "Yes, 330 km. Visit Mehrangarh Fort."
      },
      {
        "question": "Train?",
        "answer": "Delhi-Jaisalmer Express via Jaipur (11 hrs)."
      },
      {
        "question": "Best time?",
        "answer": "Oct-Mar. Desert Festival in February."
      },
      {
        "question": "Sam Dunes?",
        "answer": "40 km from Jaisalmer city."
      }
    ],
    "relatedRoutes": [
      "udaipur-from-jaipur",
      "ranthambore-from-jaipur",
      "pushkar-from-jaipur"
    ]
  },
  "ranthambore-from-jaipur": {
    "slug": "ranthambore-from-jaipur",
    "destination": "Ranthambore",
    "origin": "Jaipur",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "180 km",
        "duration": "3-3.5 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Quick 3-hour drive",
          "Reach for afternoon safari",
          "Direct resort drop"
        ],
        "cons": [
          "Some single-lane sections"
        ],
        "details": "Via NH-52 through Dausa to Sawai Madhopur."
      },
      {
        "mode": "By Bus",
        "types": [
          "RSRTC Express (₹200-₹300)"
        ],
        "costRange": "₹200-₹400",
        "duration": "4-5 hours",
        "pros": [
          "Very cheap"
        ],
        "cons": [
          "Drop at bus stand",
          "Need auto to resorts"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Sawai Madhopur (SWM) - 10 km",
        "trainOptions": [
          {
            "name": "Mewar Express (12963)",
            "from": "Jaipur",
            "duration": "2h",
            "fare": "₹150-₹400"
          }
        ],
        "cabFromStation": "₹400-₹800 (10-15 km)",
        "totalDuration": "3-4 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Jaipur (JAI) - 180 km",
        "flightCostRange": "No nearby airport",
        "cabFromAirport": "₹3,300-₹5,400",
        "totalDuration": "3 hours"
      }
    ],
    "recommendation": "Cab drops you at resort gate. Resorts are 10-15 km from town.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (180 km, 3 hrs) for direct resort drop."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300 (min 300 km). Innova: ₹5,400."
      },
      {
        "question": "Tigers?",
        "answer": "Highest sighting rates in India. Book in advance."
      },
      {
        "question": "Train?",
        "answer": "To Sawai Madhopur (2 hrs). Then local cab."
      },
      {
        "question": "Best time?",
        "answer": "Oct-Jun. Best sightings Apr-Jun."
      },
      {
        "question": "Resort distance?",
        "answer": "10-15 km from town."
      }
    ],
    "relatedRoutes": [
      "udaipur-from-jaipur",
      "jaisalmer-from-jaipur",
      "agra-from-jaipur",
      "pushkar-from-jaipur"
    ]
  },
  "mount-abu-from-jaipur": {
    "slug": "mount-abu-from-jaipur",
    "destination": "Mount Abu",
    "origin": "Jaipur",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "500 km",
        "duration": "7-8 hours",
        "costRange": "₹5,500-₹9,000",
        "pros": [
          "Scenic Aravalli drive",
          "Stop at Ranakpur",
          "Direct Nakki Lake drop"
        ],
        "cons": [
          "Long drive",
          "Hairpin bends"
        ],
        "details": "Via NH-48 through Beawar, Pali, Sirohi. Last 25 km winding ascent."
      },
      {
        "mode": "By Bus",
        "types": [
          "RSRTC Volvo AC (₹700-₹1,000)"
        ],
        "costRange": "₹400-₹1,000",
        "duration": "8-10 hours",
        "pros": [
          "Direct buses"
        ],
        "cons": [
          "Long and tiring"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Abu Road (ABR) - 28 km",
        "trainOptions": [
          {
            "name": "Aravali Express (19707)",
            "from": "Jaipur",
            "duration": "8h",
            "fare": "₹250-₹600"
          }
        ],
        "cabFromStation": "₹600-₹1,200 (28 km, 45 min)",
        "totalDuration": "9-10 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Udaipur (UDR) - 185 km",
        "flightCostRange": "₹3,000-₹7,000",
        "cabFromAirport": "₹3,500-₹5,500 (185 km)",
        "totalDuration": "5-6 hours"
      }
    ],
    "recommendation": "Stop at Ranakpur Jain Temples (stunning). Arrive at lakeside hotel.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹5,500",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹9,000",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹12,000",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (500 km, 7-8 hrs). Sedan ₹5,500."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹5,500. Innova: ₹9,000."
      },
      {
        "question": "Train?",
        "answer": "To Abu Road (28 km). Then cab."
      },
      {
        "question": "Ranakpur?",
        "answer": "Yes, slight detour. 1444-pillar Jain temple."
      },
      {
        "question": "Best time?",
        "answer": "Oct-Mar."
      },
      {
        "question": "Attractions?",
        "answer": "Dilwara Temples, Nakki Lake, Sunset Point, Guru Shikhar."
      }
    ],
    "relatedRoutes": [
      "udaipur-from-jaipur",
      "jaisalmer-from-jaipur",
      "pushkar-from-jaipur"
    ]
  },
  "pushkar-from-jaipur": {
    "slug": "pushkar-from-jaipur",
    "destination": "Pushkar",
    "origin": "Jaipur",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "145 km",
        "duration": "2.5-3 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Quick drive",
          "Ajmer Sharif Dargah en route",
          "Direct Pushkar Lake drop",
          "Easy day trip"
        ],
        "cons": [
          "Narrow Ajmer-Pushkar road",
          "Pushkar Mela traffic"
        ],
        "details": "Via NH-48 to Ajmer (130 km), then 15 km through Nag Pahar hills."
      },
      {
        "mode": "By Bus",
        "types": [
          "RSRTC Express (₹150-₹250)"
        ],
        "costRange": "₹150-₹350",
        "duration": "3-4 hours",
        "pros": [
          "Very cheap"
        ],
        "cons": [
          "Change at Ajmer"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Ajmer (AII) - 15 km",
        "trainOptions": [
          {
            "name": "Ajmer Shatabdi (12015)",
            "from": "Jaipur",
            "duration": "2h",
            "fare": "₹400-₹900"
          }
        ],
        "cabFromStation": "₹400-₹700 (15 km, 30 min)",
        "totalDuration": "3-4 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Jaipur (JAI) - 145 km",
        "flightCostRange": "No nearby airport",
        "cabFromAirport": "₹3,300-₹5,400",
        "totalDuration": "2.5-3 hours"
      }
    ],
    "recommendation": "Combine Ajmer Sharif Dargah and Pushkar Lake in one trip.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (145 km, 2.5-3 hrs). Sedan ₹3,300."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300 (min 300 km). Innova: ₹5,400."
      },
      {
        "question": "Ajmer on way?",
        "answer": "Yes, 15 km before Pushkar. Ajmer Sharif Dargah."
      },
      {
        "question": "Train?",
        "answer": "To Ajmer. Shatabdi 2 hours."
      },
      {
        "question": "Camel Fair?",
        "answer": "Oct/Nov (Kartik Purnima). Book early."
      },
      {
        "question": "Day trip?",
        "answer": "Yes, Ajmer + Pushkar as day trip."
      }
    ],
    "relatedRoutes": [
      "udaipur-from-jaipur",
      "ranthambore-from-jaipur",
      "agra-from-jaipur",
      "mount-abu-from-jaipur"
    ]
  },
  "agra-from-jaipur": {
    "slug": "agra-from-jaipur",
    "destination": "Agra",
    "origin": "Jaipur",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "240 km",
        "duration": "4-5 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Complete Golden Triangle",
          "Stop at Fatehpur Sikri",
          "Direct Taj gate drop"
        ],
        "cons": [
          "Single-lane near Bharatpur"
        ],
        "details": "Via NH-21 through Dausa, Bharatpur, Fatehpur Sikri."
      },
      {
        "mode": "By Bus",
        "types": [
          "RSRTC Volvo AC (₹400-₹600)"
        ],
        "costRange": "₹250-₹700",
        "duration": "5-6 hours",
        "pros": [
          "Budget-friendly"
        ],
        "cons": [
          "Drop at bus stand"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Agra Fort / Agra Cantt",
        "trainOptions": [
          {
            "name": "Marudhar Express (14853)",
            "from": "Jaipur",
            "duration": "4h 30m",
            "fare": "₹200-₹500"
          }
        ],
        "cabFromStation": "₹300-₹600 (6 km)",
        "totalDuration": "5-6 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "No commercial flights",
        "flightCostRange": "N/A",
        "cabFromAirport": "N/A",
        "totalDuration": "4-5 hours by cab"
      }
    ],
    "recommendation": "Golden Triangle leg. Stop at Fatehpur Sikri - the Mughal ghost city.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (240 km, 4-5 hrs) with Fatehpur Sikri stop."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300 (min 300 km). Innova: ₹5,400."
      },
      {
        "question": "Fatehpur Sikri?",
        "answer": "Exactly on route. Free stop."
      },
      {
        "question": "Train?",
        "answer": "Several trains in 4-5 hours."
      },
      {
        "question": "Day trip?",
        "answer": "Yes, leave 6 AM, return 8 PM."
      },
      {
        "question": "Golden Triangle?",
        "answer": "Delhi-Agra-Jaipur. Triveni Cabs offers packages."
      }
    ],
    "relatedRoutes": [
      "taj-mahal-from-delhi",
      "udaipur-from-jaipur",
      "ranthambore-from-jaipur"
    ]
  },
  "manali-from-chandigarh": {
    "slug": "manali-from-chandigarh",
    "destination": "Manali",
    "origin": "Chandigarh",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "310 km",
        "duration": "7-8 hours",
        "costRange": "₹3,410-₹5,580",
        "pros": [
          "Spectacular Kullu Valley drive",
          "Stop at Mandi, Kullu",
          "Drive along Beas River",
          "Direct hotel drop"
        ],
        "cons": [
          "Hairpin bends",
          "Mandi/Kullu congestion"
        ],
        "details": "Via NH-21 through Bilaspur, Sundernagar, Mandi, Kullu Valley."
      },
      {
        "mode": "By Bus",
        "types": [
          "HRTC Volvo AC (₹800-₹1,100)",
          "Private Volvo (₹900-₹1,300)"
        ],
        "costRange": "₹500-₹1,300",
        "duration": "8-10 hours",
        "pros": [
          "Regular services"
        ],
        "cons": [
          "No scenic stops"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Chandigarh (CDG) - no train beyond",
        "trainOptions": [],
        "cabFromStation": "₹3,410-₹5,580 (full journey)",
        "totalDuration": "7-8 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Bhuntar (KUU) - 50 km",
        "flightCostRange": "₹4,000-₹10,000 (limited)",
        "cabFromAirport": "₹1,200-₹2,000",
        "totalDuration": "2-3 hours"
      }
    ],
    "recommendation": "Pure magic - pine forests, river valleys, mountain vistas.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,410",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,580",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,440",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (310 km, 7-8 hrs). Sedan ₹3,410."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,410. Innova: ₹5,580."
      },
      {
        "question": "Train?",
        "answer": "No railway to Manali."
      },
      {
        "question": "How long?",
        "answer": "7-8 hours via NH-21."
      },
      {
        "question": "Stop at Kullu?",
        "answer": "Yes, 40 km before Manali."
      },
      {
        "question": "Road condition?",
        "answer": "Good until Mandi, narrower after."
      }
    ],
    "relatedRoutes": [
      "manali-from-delhi",
      "dharamshala-from-chandigarh",
      "kasol-from-chandigarh",
      "rohtang-pass-from-manali"
    ]
  },
  "dharamshala-from-chandigarh": {
    "slug": "dharamshala-from-chandigarh",
    "destination": "Dharamshala",
    "origin": "Chandigarh",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "250 km",
        "duration": "5-6 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Kangra Valley drive",
          "Jawalamukhi Temple stop",
          "Direct McLeodganj drop",
          "Dhauladhar views"
        ],
        "cons": [
          "Road work near Una",
          "Narrow roads"
        ],
        "details": "Via NH-503 through Anandpur Sahib, Una, Kangra."
      },
      {
        "mode": "By Bus",
        "types": [
          "HRTC Volvo AC (₹600-₹900)"
        ],
        "costRange": "₹350-₹1,000",
        "duration": "6-8 hours",
        "pros": [
          "Regular services"
        ],
        "cons": [
          "Drop at Dharamshala, not McLeodganj"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Pathankot (PKTC) - 85 km",
        "trainOptions": [
          {
            "name": "Jammu Mail",
            "from": "Chandigarh",
            "duration": "4h",
            "fare": "₹200-₹500"
          }
        ],
        "cabFromStation": "₹1,800-₹3,000 (85 km, 2 hrs)",
        "totalDuration": "7-9 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Gaggal (DHM) - 13 km",
        "flightCostRange": "₹3,500-₹8,000 (from Delhi)",
        "cabFromAirport": "₹400-₹800",
        "totalDuration": "No direct CDG flight"
      }
    ],
    "recommendation": "Direct McLeodganj drop. Scenic Kangra Valley drive.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (250 km, 5-6 hrs). Sedan ₹3,300."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300 (min 300 km). Innova: ₹5,400."
      },
      {
        "question": "McLeodganj?",
        "answer": "10 km above Dharamshala, main tourist hub."
      },
      {
        "question": "Jawalamukhi Temple?",
        "answer": "Yes, en route."
      },
      {
        "question": "Train?",
        "answer": "No direct. Nearest: Pathankot (85 km)."
      },
      {
        "question": "Best time?",
        "answer": "Mar-Jun, Sep-Nov."
      }
    ],
    "relatedRoutes": [
      "manali-from-chandigarh",
      "kasol-from-chandigarh",
      "shimla-from-delhi"
    ]
  },
  "kasol-from-chandigarh": {
    "slug": "kasol-from-chandigarh",
    "destination": "Kasol",
    "origin": "Chandigarh",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "280 km",
        "duration": "7-8 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Navigate Parvati Valley safely",
          "Stop at Mandi, Bhuntar",
          "Direct campsite drop",
          "Carry trekking gear"
        ],
        "cons": [
          "Narrow after Bhuntar",
          "Landslide risk"
        ],
        "details": "Via NH-21 through Bilaspur, Mandi, Bhuntar into Parvati Valley."
      },
      {
        "mode": "By Bus",
        "types": [
          "HRTC to Bhuntar + local (₹500-₹800)"
        ],
        "costRange": "₹500-₹1,000",
        "duration": "8-10 hours",
        "pros": [
          "Budget option"
        ],
        "cons": [
          "Most go to Bhuntar only"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Chandigarh (CDG) - no train beyond",
        "trainOptions": [],
        "cabFromStation": "₹3,300-₹5,400 (full journey)",
        "totalDuration": "7-8 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Bhuntar (KUU) - 30 km",
        "flightCostRange": "₹4,000-₹10,000 (limited)",
        "cabFromAirport": "₹800-₹1,500",
        "totalDuration": "2-3 hours"
      }
    ],
    "recommendation": "Experienced mountain driver essential for Parvati Valley roads.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (280 km, 7-8 hrs). Sedan ₹3,300."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300 (min 300 km). Innova: ₹5,400."
      },
      {
        "question": "Bus?",
        "answer": "HRTC to Bhuntar, then local cab (30 km)."
      },
      {
        "question": "How long?",
        "answer": "7-8 hours."
      },
      {
        "question": "Safe?",
        "answer": "Yes with experienced driver."
      },
      {
        "question": "Manikaran?",
        "answer": "5 km beyond Kasol. Hot springs."
      }
    ],
    "relatedRoutes": [
      "kasol-from-delhi",
      "manali-from-chandigarh",
      "dharamshala-from-chandigarh"
    ]
  },
  "ayodhya-from-lucknow": {
    "slug": "ayodhya-from-lucknow",
    "destination": "Ayodhya",
    "origin": "Lucknow",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "135 km",
        "duration": "2.5-3 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Quick drive",
          "Direct Ram Mandir drop",
          "Carry pooja items",
          "Perfect day trip"
        ],
        "cons": [
          "Festival traffic"
        ],
        "details": "Via NH-330 through Barabanki, Faizabad."
      },
      {
        "mode": "By Bus",
        "types": [
          "UPSRTC AC (₹200-₹350)",
          "Ordinary (₹100-₹180)"
        ],
        "costRange": "₹100-₹350",
        "duration": "3-4 hours",
        "pros": [
          "Very cheap",
          "Frequent"
        ],
        "cons": [
          "Drop at bus stand"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Ayodhya Junction (AY)",
        "trainOptions": [
          {
            "name": "Lucknow-Ayodhya Express",
            "from": "Lucknow",
            "duration": "2h 30m",
            "fare": "₹100-₹300"
          }
        ],
        "cabFromStation": "₹200-₹400 (3 km)",
        "totalDuration": "3-4 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Ayodhya (AYJ) - 8 km",
        "flightCostRange": "₹3,000-₹7,000 (from Delhi/Mumbai)",
        "cabFromAirport": "₹300-₹500",
        "totalDuration": "Cab is faster"
      }
    ],
    "recommendation": "Ideal for pilgrims. 2.5-hour drive to Ram Mandir. Perfect day trip.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (135 km, 2.5-3 hrs). Sedan ₹3,300."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300 (min 300 km). Innova: ₹5,400."
      },
      {
        "question": "Same-day trip?",
        "answer": "Yes. Leave 6 AM, return evening."
      },
      {
        "question": "Airport?",
        "answer": "Opened 2024. Flights from Delhi, Mumbai."
      },
      {
        "question": "Must-visit?",
        "answer": "Ram Mandir, Hanuman Garhi, Kanak Bhawan."
      },
      {
        "question": "Parking?",
        "answer": "Large facilities near temple."
      }
    ],
    "relatedRoutes": [
      "varanasi-from-lucknow",
      "ayodhya-from-varanasi"
    ]
  },
  "varanasi-from-lucknow": {
    "slug": "varanasi-from-lucknow",
    "destination": "Varanasi",
    "origin": "Lucknow",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "300 km",
        "duration": "5-6 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Direct ghat drop",
          "Stop at Prayagraj",
          "Comfortable for families"
        ],
        "cons": [
          "Rough patches",
          "Varanasi traffic"
        ],
        "details": "Via Purvanchal Expressway."
      },
      {
        "mode": "By Bus",
        "types": [
          "UPSRTC AC (₹400-₹600)",
          "Private Volvo (₹500-₹800)"
        ],
        "costRange": "₹250-₹800",
        "duration": "6-8 hours",
        "pros": [
          "Frequent"
        ],
        "cons": [
          "Drop far from ghats"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Varanasi Junction (BSB)",
        "trainOptions": [
          {
            "name": "Vande Bharat Express",
            "from": "Lucknow",
            "duration": "3h 15m",
            "fare": "₹1,000-₹2,000"
          },
          {
            "name": "Shiv Ganga Express (12559)",
            "from": "Lucknow",
            "duration": "5h",
            "fare": "₹250-₹600"
          }
        ],
        "cabFromStation": "₹300-₹600 (5 km)",
        "totalDuration": "4-7 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Varanasi (VNS) - 25 km",
        "flightCostRange": "₹3,000-₹6,000 (1 hour)",
        "cabFromAirport": "₹500-₹900",
        "totalDuration": "2-3 hours"
      }
    ],
    "recommendation": "Reach ghats directly via Purvanchal Expressway.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "Vande Bharat (3h 15m) by train. Cab for families."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300. Innova: ₹5,400."
      },
      {
        "question": "Prayagraj stop?",
        "answer": "Yes, adds 1-2 hours."
      },
      {
        "question": "Vande Bharat?",
        "answer": "Yes, 3h 15m."
      },
      {
        "question": "How long by car?",
        "answer": "5-6 hours."
      },
      {
        "question": "Which ghats?",
        "answer": "Dashashwamedh, Manikarnika, Assi. Kashi Vishwanath Temple."
      }
    ],
    "relatedRoutes": [
      "ayodhya-from-lucknow",
      "sarnath-from-varanasi",
      "bodhgaya-from-varanasi",
      "ayodhya-from-varanasi"
    ]
  },
  "sarnath-from-varanasi": {
    "slug": "sarnath-from-varanasi",
    "destination": "Sarnath",
    "origin": "Varanasi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "13 km",
        "duration": "30-45 minutes",
        "costRange": "₹500-₹1,200",
        "pros": [
          "Quick ride",
          "Driver waits",
          "Combine with sightseeing"
        ],
        "cons": [
          "Varanasi traffic"
        ],
        "details": "Short 13 km drive. Where Buddha gave first sermon."
      },
      {
        "mode": "By Bus",
        "types": [
          "City Bus (₹15-₹25)",
          "Shared Auto (₹20-₹40)"
        ],
        "costRange": "₹15-₹40",
        "duration": "45 min-1 hour",
        "pros": [
          "Very cheap"
        ],
        "cons": [
          "Crowded"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Within Varanasi city",
        "trainOptions": [],
        "cabFromStation": "-",
        "totalDuration": "30-45 min by cab"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Varanasi (VNS) - 20 km",
        "flightCostRange": "N/A",
        "cabFromAirport": "₹500-₹900",
        "totalDuration": "30-45 min"
      }
    ],
    "recommendation": "Book half-day cab covering Sarnath and other attractions.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Half-day)",
        "price": "₹1,500-₹2,000",
        "perKm": "local package"
      },
      "suv": {
        "type": "SUV (Half-day)",
        "price": "₹2,500-₹3,500",
        "perKm": "local package"
      },
      "tempo": {
        "type": "Tempo Traveller",
        "price": "₹3,500-₹5,000",
        "perKm": "local package"
      }
    },
    "faqs": [
      {
        "question": "How to reach?",
        "answer": "By cab - 13 km, 30-45 min. Half-day package ₹1,500."
      },
      {
        "question": "Cost?",
        "answer": "One-way ₹300-₹500. Half-day better value."
      },
      {
        "question": "What to see?",
        "answer": "Dhamek Stupa, Ashoka Pillar, museum, temples."
      },
      {
        "question": "Time needed?",
        "answer": "2-3 hours."
      },
      {
        "question": "Open daily?",
        "answer": "Site: sunrise-sunset. Museum: 10-5, closed Fri."
      },
      {
        "question": "Full-day tour?",
        "answer": "Yes, covers Sarnath + ghats + BHU."
      }
    ],
    "relatedRoutes": [
      "ayodhya-from-varanasi",
      "bodhgaya-from-varanasi",
      "varanasi-from-lucknow"
    ]
  },
  "ayodhya-from-varanasi": {
    "slug": "ayodhya-from-varanasi",
    "destination": "Ayodhya",
    "origin": "Varanasi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "210 km",
        "duration": "4-5 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Comfortable pilgrim drive",
          "Stop at Jaunpur",
          "Direct Ram Mandir drop",
          "Spiritual circuit"
        ],
        "cons": [
          "Road varies",
          "Festival traffic"
        ],
        "details": "Via NH-233 through Jaunpur, Sultanpur."
      },
      {
        "mode": "By Bus",
        "types": [
          "UPSRTC AC (₹300-₹500)"
        ],
        "costRange": "₹200-₹500",
        "duration": "5-7 hours",
        "pros": [
          "Budget-friendly"
        ],
        "cons": [
          "Drop at bus stand"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Ayodhya Junction (AY)",
        "trainOptions": [
          {
            "name": "Ganga Gomti Express (14235)",
            "from": "Varanasi",
            "duration": "4h 30m",
            "fare": "₹150-₹400"
          }
        ],
        "cabFromStation": "₹200-₹400 (3 km)",
        "totalDuration": "5-6 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Ayodhya (AYJ) - 8 km",
        "flightCostRange": "₹3,000-₹6,000",
        "cabFromAirport": "₹300-₹500",
        "totalDuration": "Cab more practical"
      }
    ],
    "recommendation": "Connects Kashi Vishwanath to Ram Mandir in comfort.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (210 km, 4-5 hrs). Sedan ₹3,300."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300. Innova: ₹5,400."
      },
      {
        "question": "Same-day?",
        "answer": "Possible but long. Overnight recommended."
      },
      {
        "question": "Train?",
        "answer": "Ganga Gomti Express (4.5 hrs)."
      },
      {
        "question": "Spiritual circuit?",
        "answer": "Varanasi + Ayodhya + Prayagraj."
      },
      {
        "question": "Station to temple?",
        "answer": "About 3 km."
      }
    ],
    "relatedRoutes": [
      "varanasi-from-lucknow",
      "ayodhya-from-lucknow",
      "sarnath-from-varanasi",
      "bodhgaya-from-varanasi"
    ]
  },
  "bodhgaya-from-varanasi": {
    "slug": "bodhgaya-from-varanasi",
    "destination": "Bodh Gaya",
    "origin": "Varanasi",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "260 km",
        "duration": "5-6 hours",
        "costRange": "₹3,300-₹5,400",
        "pros": [
          "Direct Mahabodhi Temple drop",
          "Cross into Bihar",
          "Buddhist circuit"
        ],
        "cons": [
          "Bihar road quality varies"
        ],
        "details": "Via NH-2 through Sasaram, Aurangabad (Bihar)."
      },
      {
        "mode": "By Bus",
        "types": [
          "BSRTC Express (₹300-₹500)"
        ],
        "costRange": "₹300-₹700",
        "duration": "6-8 hours",
        "pros": [
          "Budget-friendly"
        ],
        "cons": [
          "Drop at Gaya bus stand"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "Gaya Junction (GAYA) - 17 km",
        "trainOptions": [
          {
            "name": "Mahabodhi Express (12397)",
            "from": "Varanasi",
            "duration": "3h 30m",
            "fare": "₹200-₹600"
          },
          {
            "name": "Poorva Express (12381)",
            "from": "Varanasi",
            "duration": "3h",
            "fare": "₹300-₹800"
          }
        ],
        "cabFromStation": "₹400-₹700 (17 km)",
        "totalDuration": "4-5 hours"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Gaya (GAY) - 11 km",
        "flightCostRange": "₹4,000-₹8,000 (from Delhi/Kolkata)",
        "cabFromAirport": "₹300-₹600",
        "totalDuration": "Cab more practical"
      }
    ],
    "recommendation": "Completes Buddhist circuit. Ganga ghats to Bodhi Tree in comfort.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹3,300",
        "perKm": "₹11/km"
      },
      "suv": {
        "type": "SUV (Innova Crysta)",
        "price": "₹5,400",
        "perKm": "₹18/km"
      },
      "tempo": {
        "type": "Tempo Traveller (12-seater)",
        "price": "₹7,200",
        "perKm": "₹24/km"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (260 km, 5-6 hrs) or train to Gaya + cab."
      },
      {
        "question": "Cab cost?",
        "answer": "Sedan: ₹3,300. Innova: ₹5,400."
      },
      {
        "question": "Train?",
        "answer": "To Gaya (17 km from Bodh Gaya). Mahabodhi Express 3.5 hrs."
      },
      {
        "question": "Buddhist circuit?",
        "answer": "Sarnath to Bodh Gaya to Rajgir to Kushinagar."
      },
      {
        "question": "Attractions?",
        "answer": "Mahabodhi Temple (UNESCO), Bodhi Tree, Great Buddha Statue."
      },
      {
        "question": "Best time?",
        "answer": "Oct-Mar. Buddha Purnima (May)."
      }
    ],
    "relatedRoutes": [
      "sarnath-from-varanasi",
      "varanasi-from-lucknow",
      "ayodhya-from-varanasi"
    ]
  },
  "gulmarg-from-srinagar": {
    "slug": "gulmarg-from-srinagar",
    "destination": "Gulmarg",
    "origin": "Srinagar",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "50 km",
        "duration": "1.5-2 hours",
        "costRange": "₹1,500-₹3,000",
        "pros": [
          "Quick scenic drive",
          "Pine forests",
          "Direct hotel drop"
        ],
        "cons": [
          "Narrow after Tangmarg",
          "Snow chains in winter",
          "Vehicle restrictions peak season"
        ],
        "details": "Via Magam and Tangmarg. Last 12 km through dense conifers."
      },
      {
        "mode": "By Bus",
        "types": [
          "JKSRTC (₹50-₹100)",
          "Shared Sumo (₹100-₹200)"
        ],
        "costRange": "₹50-₹200",
        "duration": "2-3 hours",
        "pros": [
          "Very cheap"
        ],
        "cons": [
          "Drop at Tangmarg",
          "Need shared taxi"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "No railway in Kashmir",
        "trainOptions": [],
        "cabFromStation": "-",
        "totalDuration": "1.5-2 hours by cab"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Srinagar (SXR) - 57 km",
        "flightCostRange": "₹4,000-₹10,000 (from Delhi)",
        "cabFromAirport": "₹2,000-₹3,500",
        "totalDuration": "2 hours"
      }
    ],
    "recommendation": "Only comfortable option. Driver knows snow conditions.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹1,500",
        "perKm": "local rate"
      },
      "suv": {
        "type": "SUV (Innova)",
        "price": "₹2,500-₹3,000",
        "perKm": "local rate"
      },
      "tempo": {
        "type": "Tempo Traveller",
        "price": "₹4,000-₹5,000",
        "perKm": "local rate"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (50 km, 1.5-2 hrs). Sedan ₹1,500."
      },
      {
        "question": "Cost?",
        "answer": "Sedan: ₹1,500-₹2,000. SUV: ₹2,500-₹3,000."
      },
      {
        "question": "Bus?",
        "answer": "To Tangmarg. Need shared taxi for last 12 km."
      },
      {
        "question": "Famous for?",
        "answer": "Gondola, skiing, golf course, meadows."
      },
      {
        "question": "Best time?",
        "answer": "Dec-Feb skiing. Apr-Jun meadows."
      },
      {
        "question": "Vehicles allowed?",
        "answer": "May be restricted. Park at Tangmarg."
      }
    ],
    "relatedRoutes": [
      "pahalgam-from-srinagar",
      "sonamarg-from-srinagar"
    ]
  },
  "pahalgam-from-srinagar": {
    "slug": "pahalgam-from-srinagar",
    "destination": "Pahalgam",
    "origin": "Srinagar",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "95 km",
        "duration": "2.5-3 hours",
        "costRange": "₹2,000-₹3,500",
        "pros": [
          "Stunning Lidder River drive",
          "Saffron fields, Avantipura ruins",
          "Direct hotel drop",
          "Amarnath base"
        ],
        "cons": [
          "Narrow after Anantnag",
          "Crowded Amarnath season"
        ],
        "details": "Via NH-44 to Anantnag, then Lidder River Valley."
      },
      {
        "mode": "By Bus",
        "types": [
          "JKSRTC (₹80-₹150)",
          "Shared Sumo (₹150-₹250)"
        ],
        "costRange": "₹80-₹250",
        "duration": "3-4 hours",
        "pros": [
          "Cheap"
        ],
        "cons": [
          "Crowded"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "No railway in Kashmir",
        "trainOptions": [],
        "cabFromStation": "-",
        "totalDuration": "2.5-3 hours by cab"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Srinagar (SXR) - 96 km",
        "flightCostRange": "₹4,000-₹10,000",
        "cabFromAirport": "₹2,500-₹4,000",
        "totalDuration": "3 hours"
      }
    ],
    "recommendation": "One of Kashmir's most beautiful drives. Stop at Pampore saffron fields.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹2,000",
        "perKm": "local rate"
      },
      "suv": {
        "type": "SUV (Innova)",
        "price": "₹3,000-₹3,500",
        "perKm": "local rate"
      },
      "tempo": {
        "type": "Tempo Traveller",
        "price": "₹5,000-₹6,000",
        "perKm": "local rate"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (95 km, 2.5-3 hrs). Sedan ₹2,000."
      },
      {
        "question": "Cost?",
        "answer": "Sedan: ₹2,000-₹2,500. SUV: ₹3,000-₹3,500."
      },
      {
        "question": "Saffron fields?",
        "answer": "Pampore, 14 km from Srinagar. Best Oct-Nov."
      },
      {
        "question": "Amarnath base?",
        "answer": "Yes, from Chandanwari (16 km from Pahalgam)."
      },
      {
        "question": "Activities?",
        "answer": "Pony rides, Betaab Valley, Aru Valley, rafting."
      },
      {
        "question": "Best time?",
        "answer": "Apr-Jun. Dec-Feb for snow."
      }
    ],
    "relatedRoutes": [
      "gulmarg-from-srinagar",
      "sonamarg-from-srinagar"
    ]
  },
  "sonamarg-from-srinagar": {
    "slug": "sonamarg-from-srinagar",
    "destination": "Sonamarg",
    "origin": "Srinagar",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "80 km",
        "duration": "2.5-3 hours",
        "costRange": "₹1,800-₹3,000",
        "pros": [
          "Sind Valley drive",
          "Kangan viewpoints",
          "Thajiwas Glacier access",
          "Gateway to Ladakh"
        ],
        "cons": [
          "Rough after Kangan",
          "Closed Dec-Mar"
        ],
        "details": "Via NH-1D through Ganderbal, Kangan, Sind River. At 2,740 m."
      },
      {
        "mode": "By Bus",
        "types": [
          "JKSRTC (₹70-₹120)",
          "Shared Sumo (₹150-₹250)"
        ],
        "costRange": "₹70-₹250",
        "duration": "3-4 hours",
        "pros": [
          "Budget-friendly"
        ],
        "cons": [
          "Irregular",
          "No glacier access"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "No railway in Kashmir",
        "trainOptions": [],
        "cabFromStation": "-",
        "totalDuration": "2.5-3 hours by cab"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Srinagar (SXR) - 87 km",
        "flightCostRange": "₹4,000-₹10,000",
        "cabFromAirport": "₹2,000-₹3,500",
        "totalDuration": "3 hours"
      }
    ],
    "recommendation": "Must-visit. Sind Valley is jaw-dropping. Cab gives Thajiwas Glacier access.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (Swift Dzire)",
        "price": "₹1,800",
        "perKm": "local rate"
      },
      "suv": {
        "type": "SUV (Innova)",
        "price": "₹2,500-₹3,000",
        "perKm": "local rate"
      },
      "tempo": {
        "type": "Tempo Traveller",
        "price": "₹4,500-₹5,500",
        "perKm": "local rate"
      }
    },
    "faqs": [
      {
        "question": "Best way?",
        "answer": "By cab (80 km, 2.5-3 hrs). Sedan ₹1,800."
      },
      {
        "question": "Cost?",
        "answer": "Sedan: ₹1,800-₹2,200. SUV: ₹2,500-₹3,000."
      },
      {
        "question": "When open?",
        "answer": "Apr/May to Oct/Nov."
      },
      {
        "question": "Thajiwas Glacier?",
        "answer": "7 km from Sonamarg. Pony ride or trek."
      },
      {
        "question": "Continue to Leh?",
        "answer": "Yes, last stop before Zoji La. Jun-Oct."
      },
      {
        "question": "Day trip?",
        "answer": "Yes, leave 8 AM, return 6 PM."
      }
    ],
    "relatedRoutes": [
      "gulmarg-from-srinagar",
      "pahalgam-from-srinagar",
      "leh-from-delhi"
    ]
  },
  "rohtang-pass-from-manali": {
    "slug": "rohtang-pass-from-manali",
    "destination": "Rohtang Pass",
    "origin": "Manali",
    "travelModes": [
      {
        "mode": "By Car/Cab",
        "recommended": true,
        "distance": "51 km",
        "duration": "2-3 hours",
        "costRange": "₹2,500-₹4,500",
        "pros": [
          "Navigate dangerous road safely",
          "Stop at Solang, Marhi, Gulaba",
          "Driver handles permit",
          "Same-day return"
        ],
        "cons": [
          "Permit required (₹550/person)",
          "Open May-Nov only",
          "Peak season traffic"
        ],
        "details": "Manali to Rohtang (13,050 ft) via Kothi, Gulaba, Marhi. Permit mandatory."
      },
      {
        "mode": "By Bus",
        "types": [
          "HPTDC Tourist Bus (₹700-₹1,200)",
          "Shared Taxi (₹400-₹600/person)"
        ],
        "costRange": "₹400-₹1,200",
        "duration": "2-3 hours (one way)",
        "pros": [
          "HPTDC includes permit"
        ],
        "cons": [
          "Fixed itinerary",
          "Crowded"
        ]
      },
      {
        "mode": "By Train + Cab",
        "nearestStation": "No railway near Rohtang",
        "trainOptions": [],
        "cabFromStation": "-",
        "totalDuration": "2-3 hours from Manali"
      },
      {
        "mode": "By Flight + Cab",
        "nearestAirport": "Bhuntar (KUU) - 100 km",
        "flightCostRange": "N/A - already in Manali",
        "cabFromAirport": "N/A",
        "totalDuration": "2-3 hours from Manali"
      }
    ],
    "recommendation": "At 13,050 ft, dangerous roads require experienced hill driver. Essential for snow and ice navigation.",
    "cabPricing": {
      "sedan": {
        "type": "Sedan (not recommended)",
        "price": "N/A",
        "perKm": "-"
      },
      "suv": {
        "type": "SUV (Innova/Scorpio)",
        "price": "₹3,500-₹4,500",
        "perKm": "day trip rate"
      },
      "tempo": {
        "type": "Tempo Traveller",
        "price": "₹5,500-₹7,000",
        "perKm": "day trip rate"
      }
    },
    "faqs": [
      {
        "question": "How to reach?",
        "answer": "By SUV cab (51 km, 2-3 hrs). Day trip ₹3,500-₹4,500."
      },
      {
        "question": "Cost?",
        "answer": "SUV: ₹3,500-₹4,500. Permit (₹550/person) separate."
      },
      {
        "question": "Permit?",
        "answer": "Yes, mandatory at rohtangpermits.hp.gov.in."
      },
      {
        "question": "When open?",
        "answer": "May-Nov. Atal Tunnel below for year-round."
      },
      {
        "question": "Sedan?",
        "answer": "Not recommended. SUV essential."
      },
      {
        "question": "What to carry?",
        "answer": "Warm jackets, sunglasses, sunscreen, water, altitude medicine."
      }
    ],
    "relatedRoutes": [
      "manali-from-delhi",
      "manali-from-chandigarh",
      "spiti-valley-from-delhi",
      "leh-from-delhi"
    ]
  }
};

export function getHowToReachRoute(slug) {
  return howToReachRoutes[slug] || null;
}

export function getAllHowToReachSlugs() {
  return Object.keys(howToReachRoutes);
}

export function getRelatedHowToReachRoutes(slug) {
  const route = howToReachRoutes[slug];
  if (!route || !route.relatedRoutes) return [];
  return route.relatedRoutes.map(s => howToReachRoutes[s]).filter(Boolean);
}

export default howToReachRoutes;
