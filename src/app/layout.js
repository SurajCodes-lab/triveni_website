import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import MobileStickyBar from "@/components/ui/MobileStickyBar";
import PageTracker from "@/components/analytics/PageTracker";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration";
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-inter',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#FACF2D',
}

export const metadata = {
  title: {
    default: 'Triveni Cabs — Taxi ₹11/km | 4.8★ Rated | 24/7 Booking India',
    template: '%s | Triveni Cabs'
  },
  description: 'India\'s trusted taxi service. Sedan ₹11/km, SUV ₹15/km, Tempo ₹24/km. 10,000+ happy customers, 4.8★ rating. Delhi, Agra, Jaipur, Manali & 50+ cities. Book now: 7668570551!',
  keywords: 'taxi service India 2026, car rental India, outstation cab booking online, local taxi service near me, airport transfer Delhi, Triveni Cabs booking, luxury car rental India, tempo traveller hire Delhi, Delhi taxi service 24/7, Agra tour packages, Jaipur taxi booking online, reliable cab service India, 24/7 taxi booking, online cab booking India, corporate car rental Delhi, wedding car hire, intercity cab service, one way taxi Delhi Agra, round trip cab booking, best taxi service 2026, cheap car rental India, book cab online now, taxi near me, outstation taxi booking, cab service near me',
  authors: [{ name: 'Triveni Cabs - Car Rental & Tours' }],
  creator: 'Triveni Cabs Travel Services',
  publisher: 'Triveni Cabs India',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
    }
  },
  openGraph: {
    title: 'Triveni Cabs — Taxi ₹11/km | 4.8★ Rated | 24/7 Booking India',
    description: 'India\'s trusted taxi service. Sedan ₹11/km, SUV ₹15/km, Tempo ₹24/km. 10,000+ happy customers, 4.8★ rating. Delhi, Agra, Jaipur, Manali & 50+ cities. Book now: 7668570551!',
    url: 'https://www.trivenicabs.in',
    siteName: 'Triveni Cabs - Car Rental & Tour Services',
    images: [
      {
        url: '/images/HERO_SECTION_MAIN_PAGE.jpg',
        width: 1200,
        height: 630,
        alt: 'Triveni Cabs - Best Car Rental & Tour Packages India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triveni Cabs — Taxi ₹11/km | 4.8★ Rated | 24/7 Booking',
    description: 'India\'s trusted taxi. Sedan ₹11/km, SUV ₹15/km, Tempo ₹24/km. 10,000+ happy customers. Book now: 7668570551!',
    images: ['/images/HERO_SECTION_MAIN_PAGE.jpg'],
    creator: '@trivenicabs',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#FACF2D' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#FACF2D',
    'apple-mobile-web-app-title': 'Triveni Cabs',
    'application-name': 'Triveni Cabs',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        {/* Resource Hints for Performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//media.istockphoto.com" />
        <link rel="dns-prefetch" href="//img.freepik.com" />
        <link rel="dns-prefetch" href="//upload.wikimedia.org" />
        <link rel="dns-prefetch" href="//stimg.cardekho.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://media.istockphoto.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://img.freepik.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />

        {/* Organization Schema with Logo - For Google Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.trivenicabs.in/#organization",
              "name": "Triveni Cabs",
              "alternateName": ["Triveni Car Rental", "Triveni Taxi Service"],
              "url": "https://www.trivenicabs.in",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.trivenicabs.in/images/logo/logo.webp",
                "width": 600,
                "height": 315
              },
              "image": "https://www.trivenicabs.in/images/logo/logo.webp",
              "description": "India's trusted car rental & taxi service. Sedan ₹11/km, SUV ₹15/km, Tempo ₹24/km. 50+ cities, 24/7 booking.",
              "telephone": "+91-7668570551",
              "email": "cabstriveni@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "366, Dandupura, near Tajganj",
                "addressLocality": "Agra",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "282006",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/trivenicabs",
                "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo",
                "https://twitter.com/trivenicabs"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7668570551",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            })
          }}
        />

        {/* WebSite Schema with enhanced SearchAction for voice search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.trivenicabs.in/#website",
              "name": "Triveni Cabs",
              "alternateName": ["Triveni Taxi", "Triveni Cab Service"],
              "url": "https://www.trivenicabs.in",
              "description": "India's trusted taxi service. Book outstation cabs, airport transfers, sightseeing tours, wedding cars, and tempo travellers across 50+ cities.",
              "inLanguage": ["en-IN", "hi-IN"],
              "publisher": { "@id": "https://www.trivenicabs.in/#organization" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.trivenicabs.in/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Enhanced Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.trivenicabs.in/#localbusiness",
              "name": "Triveni Cabs",
              "alternateName": "Triveni Car Rental Services",
              "logo": "https://www.trivenicabs.in/images/logo/logo.webp",
              "image": [
                "https://www.trivenicabs.in/images/logo/logo.webp",
                "https://www.trivenicabs.in/images/car/sedan.webp",
                "https://www.trivenicabs.in/images/car/suv.webp"
              ],
              "description": "Best car rental, taxi service and tour packages in India. Sedan ₹11/km, SUV ₹15/km, Tempo Traveller ₹24/km. Professional drivers, AC vehicles, 24/7 support.",
              "url": "https://www.trivenicabs.in",
              "telephone": "+91-7668570551",
              "email": "cabstriveni@gmail.com",
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
                "latitude": 27.1767,
                "longitude": 78.0081
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
              "serviceArea": [
                {
                  "@type": "AdministrativeArea",
                  "name": "Delhi"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Uttar Pradesh"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Rajasthan"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Himachal Pradesh"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Uttarakhand"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Punjab"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Haryana"
                }
              ],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "2847",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Rajesh Kumar"
                  },
                  "datePublished": "2024-12-15",
                  "reviewBody": "Excellent service! Booked a sedan for Delhi to Agra trip. Driver was very professional and punctual. Car was clean and well-maintained. Highly recommended for outstation trips.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Priya Sharma"
                  },
                  "datePublished": "2024-12-10",
                  "reviewBody": "Used Triveni Cabs for our family trip to Jaipur. The tempo traveller was spacious and comfortable. Driver knew all the tourist spots. Great value for money!",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Amit Patel"
                  },
                  "datePublished": "2024-11-28",
                  "reviewBody": "Booked SUV for airport pickup. Driver arrived 15 minutes early. Very smooth ride and reasonable pricing. Will definitely use again for future travels.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sneha Gupta"
                  },
                  "datePublished": "2024-11-20",
                  "reviewBody": "Amazing experience with Triveni Cabs for our Manali trip. The driver was experienced with hill roads. AC worked perfectly. Booking process was very easy via WhatsApp.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Vikram Singh"
                  },
                  "datePublished": "2024-11-15",
                  "reviewBody": "Used their wedding car service. The decorated car looked beautiful. Chauffeur was in proper uniform. Made our special day even more memorable. Thank you Triveni Cabs!",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Ananya Reddy"
                  },
                  "datePublished": "2024-11-08",
                  "reviewBody": "Very reliable service. Have used them multiple times for office commute and outstation. Rates are transparent with no hidden charges. Customer support is responsive.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Mohammed Farhan"
                  },
                  "datePublished": "2024-10-25",
                  "reviewBody": "Hired a bus for our company team outing to Rishikesh. 40 seater bus was comfortable with good legroom. Driver was very careful on the mountain roads. Great trip!",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Kavita Joshi"
                  },
                  "datePublished": "2024-10-18",
                  "reviewBody": "Took their Chardham Yatra package. Everything was well organized - hotel bookings, darshan arrangements, and the tempo traveller was excellent. Highly recommend for pilgrimage tours.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Car Rental and Tour Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sedan Car Rental",
                      "description": "4 passenger sedan rental starting ₹11/km"
                    },
                    "price": "11",
                    "priceCurrency": "INR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "11",
                      "priceCurrency": "INR",
                      "unitText": "per kilometer"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SUV Car Rental",
                      "description": "6-7 passenger SUV rental starting ₹15/km"
                    },
                    "price": "15",
                    "priceCurrency": "INR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "15",
                      "priceCurrency": "INR",
                      "unitText": "per kilometer"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tempo Traveller Rental",
                      "description": "12-26 passenger tempo traveller starting ₹24/km"
                    },
                    "price": "24",
                    "priceCurrency": "INR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "24",
                      "priceCurrency": "INR",
                      "unitText": "per kilometer"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Manali Tour Package",
                      "description": "5 Days 4 Nights Manali tour from Mumbai"
                    },
                    "price": "9999",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kashmir Tour Package",
                      "description": "5 Days 4 Nights Kashmir tour from Delhi"
                    },
                    "price": "16999",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rajasthan Tour Package",
                      "description": "7 Days 6 Nights Rajasthan tour from Jaipur"
                    },
                    "price": "19999",
                    "priceCurrency": "INR"
                  }
                ]
              },
            })
          }}
        />


        {/* FAQ Structured Data - Expanded for Better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are the car rental rates?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sedan rental starts at ₹11/km, SUV at ₹15/km, and Tempo Traveller at ₹24/km. All vehicles include professional drivers and are AC equipped."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which cities do you serve?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve Delhi, Mumbai, Agra, Jaipur, Chandigarh, Shimla, Manali, Amritsar, and many other cities across India for both local and outstation trips."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to book a cab online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can book online through our website or call us at 7668570551 for instant booking. We provide 24/7 customer support and same-day booking."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What tour packages do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer tour packages to Manali (₹9,999), Kashmir (₹16,999), Rajasthan (₹19,999), Chardham Yatra (₹24,999), and other popular destinations with accommodation and sightseeing included."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the price for Agra to Delhi cab?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Agra to Delhi cab fare starts at ₹2,500 for sedan (one-way). The distance is approximately 230 km. We offer both one-way and round-trip options with experienced drivers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I book a tempo traveller?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can book a tempo traveller (12-26 seater) online or call 7668570551. Rates start at ₹24/km with minimum 250km/day. We offer AC vehicles with push-back seats for group travel."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide airport pickup and drop service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide 24/7 airport transfer services at all major airports including Delhi IGI, Mumbai, Jaipur, Lucknow, and Chandigarh. Our drivers track flight timings for timely pickup."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What payment methods do you accept?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept Cash, UPI (Google Pay, PhonePe, Paytm), Credit Cards, Debit Cards, and Bank Transfer. Partial advance payment is required for bookings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is driver accommodation included in outstation trips?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Driver accommodation is the customer's responsibility for overnight trips. Alternatively, you can pay ₹300/night as driver allowance, and we arrange their stay separately."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I book a one-way taxi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer one-way taxi services on popular routes like Delhi-Agra, Delhi-Jaipur, Delhi-Chandigarh, and more. One-way fares are calculated at per km rates without return charges."
                  }
                }
              ]
            })
          }}
        />

        {/* HowTo Schema - For "How to Book" Rich Results (AEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "How to Book a Cab with Triveni Cabs",
              "description": "Step-by-step guide to book a reliable taxi with Triveni Cabs. Easy booking, transparent pricing, verified drivers.",
              "totalTime": "PT5M",
              "estimatedCost": {
                "@type": "MonetaryAmount",
                "currency": "INR",
                "value": "1500-25000"
              },
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Choose Your Service",
                  "text": "Select your required service: outstation taxi, local rental, airport transfer, or sightseeing tour. Browse our website or call 7668570551."
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Select Vehicle Type",
                  "text": "Choose from Sedan (4 seater, ₹11/km), SUV (6 seater, ₹15/km), or Tempo Traveller (12-17 seater, ₹24/km) based on your group size."
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Provide Trip Details",
                  "text": "Enter your pickup location, drop location, date, time, and number of passengers. Mention any special requirements."
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "Get Instant Quote",
                  "text": "Receive transparent quote with all costs included - base fare, driver allowance, tolls, and taxes. No hidden charges."
                },
                {
                  "@type": "HowToStep",
                  "position": 5,
                  "name": "Confirm Booking",
                  "text": "Confirm via WhatsApp, phone call (7668570551), or online form. Pay small advance to secure your vehicle."
                },
                {
                  "@type": "HowToStep",
                  "position": 6,
                  "name": "Enjoy Your Trip",
                  "text": "Verified driver arrives 15 minutes before pickup. Enjoy comfortable, hassle-free journey with 24/7 support."
                }
              ]
            })
          }}
        />

        {/* Speakable Schema - For Voice Search (AEO) - expanded selectors */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Triveni Cabs - Car Rental & Taxi Service India",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [
                  ".direct-answer",
                  ".faq-answer",
                  ".key-info",
                  ".key-stats",
                  ".summary-box",
                  ".inline-stats",
                  "article > p:first-of-type",
                  "[data-snippet-type]",
                  "[data-citation-source]"
                ]
              },
              "url": "https://www.trivenicabs.in"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) - For users without JavaScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBN5ZTSC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Google Tag Manager - deferred to not block LCP */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WBN5ZTSC');`
          }}
        />

        {/* Optimized Google Analytics - Deferred Loading */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script strategy="lazyOnload" id="ga-init">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Optimized Google Ads - Deferred Loading */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17336319883"
        />
        <Script strategy="lazyOnload" id="gads-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17336319883');
          `}
        </Script>

        <Suspense fallback={null}>
          <PageTracker />
        </Suspense>
        <div className="App min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-grow" role="main">
            {children}
          </main>
          <WhatsAppFloat phoneNumber="7668570551" />
          <MobileStickyBar />
          <Footer />
        </div>
        <Analytics />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}