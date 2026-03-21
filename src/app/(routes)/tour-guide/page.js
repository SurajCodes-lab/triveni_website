import TourGuideClient from './TourGuideClient';

export const revalidate = false;

export const metadata = {
  title: 'Tour Guide India 2026 | Licensed Guides from ₹1,200/Day | 14+ Cities',
  description: 'Hire certified tour guides in Delhi, Agra, Jaipur & 14+ cities. Multi-language (EN/FR/ES/DE). Ministry licensed. ₹1,200-3,000/day. 100+ guides. Book via WhatsApp 7668570551.',
  keywords: [
    // Primary Keywords - High Volume
    'tour guide India',
    'tour guide services',
    'professional tour guide',
    'certified tour guide',
    'licensed tour guide India',
    'hire tour guide India',
    'book tour guide',
    'local tour guide',
    'expert tour guide',
    'tourist guide services',

    // City-Based Keywords
    'tour guide in Delhi',
    'tour guide in Agra',
    'tour guide in Jaipur',
    'tour guide in Shimla',
    'tour guide in Manali',
    'tour guide in Haridwar',
    'tour guide in Chandigarh',
    'tour guide in Amritsar',
    'tour guide in Dehradun',
    'tour guide in Rishikesh',
    'tour guide in Jodhpur',
    'tour guide in Udaipur',
    'tour guide in Ayodhya',
    'tour guide in Ahmedabad',
    'Agra tour guide',
    'Delhi tour guide',
    'Jaipur tour guide',
    'Rajasthan tour guide',
    'North India tour guide',

    // Language-Based Keywords
    'English speaking tour guide India',
    'Hindi tour guide',
    'French speaking tour guide India',
    'Spanish tour guide India',
    'German speaking guide India',
    'Chinese tour guide India',
    'multi-language tour guide',
    'foreign language tour guide',
    'bilingual tour guide',

    // Service Type Keywords
    'heritage tour guide',
    'cultural tour guide India',
    'historical tour guide',
    'sightseeing guide services',
    'monument tour guide',
    'temple tour guide',
    'palace tour guide',
    'fort tour guide',
    'museum tour guide',
    'archaeological tour guide',

    // Long-Tail Keywords
    'best tour guide in India',
    'affordable tour guide services India',
    'certified professional tour guide India',
    'government approved tour guide',
    'Ministry of Tourism certified guide',
    'experienced local tour guide',
    'knowledgeable tour guide India',
    'book tour guide online India',
    'hire private tour guide India',
    'personal tour guide India',
    'customized tour guide services',
    'flexible tour guide booking',

    // Tourist Experience Keywords
    'Taj Mahal tour guide',
    'Golden Triangle tour guide',
    'spiritual tour guide India',
    'pilgrimage tour guide',
    'adventure tour guide',
    'photography tour guide',
    'food tour guide India',
    'walking tour guide',
    'historical monument guide',
    'cultural heritage guide',

    // Booking & Service Keywords
    'instant tour guide booking',
    'WhatsApp tour guide booking',
    'online tour guide reservation',
    '24/7 tour guide services',
    'same day tour guide booking',
    'last minute tour guide',
    'tour guide with car',
    'tour guide package',
    'all-inclusive tour guide',

    // Quality & Trust Keywords
    'trusted tour guide India',
    'reliable tour guide services',
    'verified tour guide',
    'licensed tourist guide',
    'authentic tour experience',
    'expert local guide',
    'professional tourist guide',
    'qualified tour guide',
    'experienced heritage guide',

    // Feature-Based Keywords
    'tour guide with photography help',
    'tour guide for foreign tourists',
    'tour guide for solo travelers',
    'tour guide for families',
    'tour guide for groups',
    'private tour guide services',
    'personalized tour itinerary',
    'custom tour guide booking',
    'skip the line tour guide',

    // Location + Service Combinations
    'Delhi sightseeing guide',
    'Agra Taj Mahal guide',
    'Jaipur city tour guide',
    'Shimla Manali tour guide',
    'Golden Temple tour guide',
    'Varanasi spiritual guide',
    'Rajasthan heritage guide',
    'North India cultural guide',

    // Price-Related Keywords
    'cheap tour guide India',
    'affordable tour guide rates',
    'budget tour guide services',
    'tour guide price India',
    'tour guide cost per day',
    'economical tour guide',
    'value for money tour guide',

    // Niche Keywords
    'female tour guide India',
    'senior citizen tour guide',
    'student tour guide',
    'academic tour guide',
    'research tour guide',
    'documentary tour guide',
    'journalist tour guide',

    // Intent-Based Keywords
    'find tour guide near me',
    'tour guide contact number',
    'book tour guide now',
    'hire tour guide today',
    'tour guide availability',
    'tour guide reviews India',
    'best rated tour guide',
    'top tour guide services'
  ].join(', '),
  alternates: {
    canonical: 'https://www.trivenicabs.in/tour-guide'
  },
  openGraph: {
    title: 'Expert Tour Guides in India | Certified Multi-Language Local Guides',
    description: 'Book certified professional tour guides across 14+ cities. Multi-language guides (English, Hindi, French, Spanish, German, Chinese). Licensed by Ministry of Tourism. Instant booking from ₹1200/day.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    url: 'https://www.trivenicabs.in/tour-guide',
    images: [
      {
        url: '/images/tour-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Certified Tour Guides in India - Multi-Language Local Expert Guides'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Expert Tour Guides Across India | Certified Local Guides',
    description: '🎯 Certified guides in 14+ cities | 6 languages | Heritage & cultural tours | ₹1200/day onwards | Instant WhatsApp booking',
    images: ['/images/tour-guide.jpg'],
    creator: '@TriveniCabs',
    site: '@TriveniCabs'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'price-range': 'INR 1200-2500',
    'service-areas': 'Delhi, Agra, Jaipur, Shimla, Manali, Haridwar, Chandigarh, Amritsar, Dehradun, Rishikesh, Jodhpur, Udaipur, Ayodhya, Ahmedabad',
    'languages': 'English, Hindi, French, Spanish, German, Chinese',
    'booking': 'Online, WhatsApp, Phone'
  }
};

export default function TourGuidePage() {
  return (
    <>
      {/* Enhanced Schema.org markup for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristInformationCenter",
            "name": "Professional Tour Guide Services - Triveni Cabs",
            "description": "Book experienced, certified tour guides in 14+ Indian cities. Multi-language guides available in 6 languages including English, Hindi, French, Spanish, German, and Chinese.",
            "url": "https://www.trivenicabs.in/tour-guide",
            "telephone": "+91-7668570551",
            "image": "https://www.trivenicabs.in/images/tour-guide.jpg",
            "priceRange": "₹1200-₹2500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "366, Dandupura, near Tajganj",
              "addressLocality": "Agra",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "282006",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "27.1767",
              "longitude": "78.0081"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Delhi"
              },
              {
                "@type": "City",
                "name": "Agra"
              },
              {
                "@type": "City",
                "name": "Jaipur"
              },
              {
                "@type": "City",
                "name": "Shimla"
              },
              {
                "@type": "City",
                "name": "Manali"
              },
              {
                "@type": "City",
                "name": "Haridwar"
              },
              {
                "@type": "City",
                "name": "Chandigarh"
              },
              {
                "@type": "City",
                "name": "Amritsar"
              },
              {
                "@type": "City",
                "name": "Dehradun"
              },
              {
                "@type": "City",
                "name": "Rishikesh"
              },
              {
                "@type": "City",
                "name": "Jodhpur"
              },
              {
                "@type": "City",
                "name": "Udaipur"
              },
              {
                "@type": "City",
                "name": "Ayodhya"
              },
              {
                "@type": "City",
                "name": "Ahmedabad"
              }
            ],
            "serviceType": [
              "Tour Guide Services",
              "Heritage Tours",
              "Cultural Tours",
              "Sightseeing Tours",
              "Historical Tours",
              "Multi-language Guide Services",
              "Private Tour Guide",
              "Group Tour Guide",
              "Certified Tour Guide",
              "Licensed Tour Guide"
            ],
            "availableLanguage": [
              {
                "@type": "Language",
                "name": "English",
                "alternateName": "en"
              },
              {
                "@type": "Language",
                "name": "Hindi",
                "alternateName": "hi"
              },
              {
                "@type": "Language",
                "name": "French",
                "alternateName": "fr"
              },
              {
                "@type": "Language",
                "name": "Spanish",
                "alternateName": "es"
              },
              {
                "@type": "Language",
                "name": "German",
                "alternateName": "de"
              },
              {
                "@type": "Language",
                "name": "Chinese",
                "alternateName": "zh"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tour Guide Services Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "English Speaking Tour Guide",
                    "description": "Professional English speaking tour guide for heritage, cultural, and sightseeing tours across India"
                  },
                  "price": "1500",
                  "priceCurrency": "INR",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "1500",
                    "priceCurrency": "INR",
                    "referenceQuantity": {
                      "@type": "QuantitativeValue",
                      "value": "1",
                      "unitText": "DAY"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hindi Tour Guide",
                    "description": "Professional Hindi speaking local tour guide with deep cultural knowledge"
                  },
                  "price": "1200",
                  "priceCurrency": "INR",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "1200",
                    "priceCurrency": "INR",
                    "referenceQuantity": {
                      "@type": "QuantitativeValue",
                      "value": "1",
                      "unitText": "DAY"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "French Speaking Tour Guide",
                    "description": "Certified French speaking tour guide for international tourists"
                  },
                  "price": "2000",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Spanish Speaking Tour Guide",
                    "description": "Expert Spanish speaking guide for cultural and heritage tours"
                  },
                  "price": "2000",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "German Speaking Tour Guide",
                    "description": "Professional German speaking tour guide with historical expertise"
                  },
                  "price": "2200",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Chinese Speaking Tour Guide",
                    "description": "Certified Chinese speaking guide for Asian tourists"
                  },
                  "price": "2500",
                  "priceCurrency": "INR"
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "10000",
              "bestRating": "5",
              "worstRating": "1"
            },
            "sameAs": [
              "https://www.facebook.com/trivenicabs",
              "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo",
              "https://twitter.com/TriveniCabs"
            ],
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://wa.me/917668570551?text=Hello!%20I%27m%20interested%20in%20booking%20a%20tour%20guide.",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              },
              "result": {
                "@type": "Reservation",
                "name": "Tour Guide Booking"
              }
            }
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.trivenicabs.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Tour Guide Services",
                "item": "https://www.trivenicabs.in/tour-guide"
              }
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What languages do your tour guides speak?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our certified tour guides are fluent in English, Hindi, French, Spanish, German, and Chinese. This ensures clear communication and a rich cultural experience regardless of where you're from. Each guide is carefully selected for their language proficiency and communication skills."
                }
              },
              {
                "@type": "Question",
                "name": "Are your tour guides certified and licensed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our tour guides are officially certified by the Ministry of Tourism, Government of India. They undergo rigorous training and examinations covering history, archaeology, culture, and hospitality. They also hold valid licenses and identity cards issued by tourism authorities."
                }
              },
              {
                "@type": "Question",
                "name": "How do I book a tour guide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Booking is simple and instant! Just fill out our online form, select your preferred language and destination city. We'll connect you with an expert guide via WhatsApp within minutes. You can also call us directly at +91 7668570551 for immediate assistance."
                }
              },
              {
                "@type": "Question",
                "name": "What is included in the tour guide service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our comprehensive service includes expert historical and cultural commentary, personalized itinerary planning, photography assistance, restaurant recommendations, entrance fee guidance, local market tours, and assistance with local interactions. We ensure an authentic, enriching experience tailored to your interests."
                }
              },
              {
                "@type": "Question",
                "name": "Can I customize my tour itinerary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We pride ourselves on flexibility. Our guides work with you to create a personalized experience based on your interests, pace, and time constraints. Whether you're interested in history, food, photography, spirituality, or adventure - we'll tailor the tour to match your preferences perfectly."
                }
              },
              {
                "@type": "Question",
                "name": "What are the payment terms and cancellation policy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Payment can be made in cash to the guide or via online transfer. We require 24 hours notice for cancellations to provide a full refund. For same-day cancellations, a 50% fee applies. We offer transparent pricing with no hidden charges."
                }
              }
            ]
          })
        }}
      />

      <TourGuideClient />
    </>
  );
}
