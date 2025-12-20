import { Suspense } from 'react';
import Script from 'next/script';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import PageTracker from "@/components/analytics/PageTracker";
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#FACF2D',
}

export const metadata = {
  title: {
    default: 'Triveni Cabs - Reliable Taxi & Car Rental Services',
    template: '%s | Triveni Cabs'
  },
  description: 'Book car rental, taxi, tour packages with Triveni Cabs. Sedan ₹11/km, SUV ₹15/km, Tempo Traveller ₹24/km. Delhi, Mumbai, Agra, Manali tours. Professional drivers, AC vehicles, 24/7 support.',
  keywords: 'taxi service India, car rental India, outstation cab, local taxi service, airport transfer, Triveni Cabs, luxury car rental, tempo traveller hire, Delhi taxi service, Mumbai car rental, Agra tour packages, Jaipur taxi booking, reliable cab service, 24/7 taxi, online cab booking, corporate car rental, wedding car hire, intercity cab, one way taxi, round trip cab, best taxi service 2025',
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
      'hi-IN': '/',
    }
  },
  openGraph: {
    title: '🚗 Best Car Rental & Tour Packages 2025 | Triveni Cabs | Starting ₹11/km',
    description: '✅ Book sedan, SUV, tempo traveller, luxury bus online. Delhi, Mumbai, Agra, Manali tours. Professional drivers, AC vehicles, competitive rates. Call 7668570551',
    url: 'https://www.trivenicabs.in',
    siteName: 'Triveni Cabs - Car Rental & Tour Services',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Triveni Cabs - Best Car Rental & Tour Packages India 2025',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Car Rental & Tour Packages India | Triveni Cabs',
    description: 'Book sedan ₹11/km, SUV ₹15/km, tempo traveller online. Delhi, Mumbai, Manali tours. Professional service, competitive rates.',
    images: ['/images/twitter-image.jpg'],
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
    <html lang="en-IN">
      <head>
        {/* Resource Hints for Performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Triveni Cabs",
              "url": "https://www.trivenicabs.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.trivenicabs.in/search?q={search_term_string}",
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
              "name": "Triveni Cabs",
              "alternateName": "Triveni Car Rental Services",
              "image": [
                "https://www.trivenicabs.in/images/logo.webp",
                "https://www.trivenicabs.in/images/car/sedan.webp",
                "https://www.trivenicabs.in/images/car/suv.webp"
              ],
              "description": "Best car rental, taxi service and tour packages in India. Sedan ₹11/km, SUV ₹15/km, Tempo Traveller ₹24/km. Professional drivers, AC vehicles, 24/7 support.",
              "url": "https://www.trivenicabs.in",
              "telephone": "+91-7668570551",
              "email": "info@trivenicabs.in",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
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
                  "@type": "State",
                  "name": "Delhi"
                },
                {
                  "@type": "State",
                  "name": "Maharashtra"
                },
                {
                  "@type": "State",
                  "name": "Uttar Pradesh"
                },
                {
                  "@type": "State",
                  "name": "Rajasthan"
                },
                {
                  "@type": "State",
                  "name": "Himachal Pradesh"
                }
              ],
              "areaServed": "India",
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
      </head>
      <body className="antialiased">
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
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}