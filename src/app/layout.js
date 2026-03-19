import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

// Dynamic imports for non-critical client components (code-split from main bundle)
const WhatsAppFloat = dynamic(() => import("@/components/layout/WhatsAppFloat"));
const MobileStickyBar = dynamic(() => import("@/components/ui/MobileStickyBar"));
const PageTracker = dynamic(() => import("@/components/analytics/PageTracker"));
const ServiceWorkerRegistration = dynamic(() => import("@/components/pwa/ServiceWorkerRegistration"));

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  preload: true,
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
    default: 'Triveni Cabs — Taxi ₹11/km | 4.9★ Rated | 24/7 Booking India',
    template: '%s | Triveni Cabs'
  },
  description: 'India\'s trusted taxi service. Sedan ₹11/km, SUV ₹15/km, Tempo ₹24/km. 10,000+ happy customers, 4.9★ rated. Delhi, Agra, Jaipur & 50+ cities. Call 7668570551!',
  keywords: 'taxi service India, car rental India, outstation cab booking, airport transfer Delhi, tempo traveller hire, wedding car rental, Delhi taxi 24/7, Agra tour packages, Jaipur cab booking, Triveni Cabs, one way taxi, round trip cab, cab service near me',
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
  },
  openGraph: {
    title: 'Triveni Cabs — Taxi ₹11/km | 4.9★ Rated | 24/7 Booking India',
    description: 'India\'s trusted taxi service. Sedan ₹11/km, SUV ₹15/km, Tempo ₹24/km. 10,000+ happy customers, 4.9★ rated. Delhi, Agra, Jaipur & 50+ cities. Call 7668570551!',
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
    title: 'Triveni Cabs — Taxi ₹11/km | 4.9★ Rated | 24/7 Booking',
    description: 'India\'s trusted taxi. Sedan ₹11/km, SUV ₹15/km, Tempo ₹24/km. 10,000+ happy customers. Call 7668570551!',
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

// Structured data extracted to a constant to keep JSX clean
const structuredData = [
  // Organization Schema
  {
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
  },
  // WebSite Schema
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.trivenicabs.in/#website",
    "name": "Triveni Cabs",
    "alternateName": ["Triveni Taxi", "Triveni Cab Service"],
    "url": "https://www.trivenicabs.in",
    "description": "India's trusted taxi service. Book outstation cabs, airport transfers, sightseeing tours, wedding cars, and tempo travellers across 50+ cities.",
    "inLanguage": "en-IN",
    "publisher": { "@id": "https://www.trivenicabs.in/#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.trivenicabs.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  },
  // LocalBusiness Schema
  {
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
    "geo": { "@type": "GeoCoordinates", "latitude": 27.1767, "longitude": 78.0081 },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
    "serviceArea": [
      { "@type": "AdministrativeArea", "name": "Delhi" },
      { "@type": "AdministrativeArea", "name": "Uttar Pradesh" },
      { "@type": "AdministrativeArea", "name": "Rajasthan" },
      { "@type": "AdministrativeArea", "name": "Himachal Pradesh" },
      { "@type": "AdministrativeArea", "name": "Uttarakhand" },
      { "@type": "AdministrativeArea", "name": "Punjab" },
      { "@type": "AdministrativeArea", "name": "Haryana" }
    ],
    "areaServed": { "@type": "Country", "name": "India" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      { "@type": "Review", "author": { "@type": "Person", "name": "Rajesh Kumar" }, "datePublished": "2024-12-15", "reviewBody": "Excellent service! Booked a sedan for Delhi to Agra trip. Driver was very professional and punctual. Car was clean and well-maintained. Highly recommended for outstation trips.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" } },
      { "@type": "Review", "author": { "@type": "Person", "name": "Priya Sharma" }, "datePublished": "2024-12-10", "reviewBody": "Used Triveni Cabs for our family trip to Jaipur. The tempo traveller was spacious and comfortable. Driver knew all the tourist spots. Great value for money!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" } },
      { "@type": "Review", "author": { "@type": "Person", "name": "Amit Patel" }, "datePublished": "2024-11-28", "reviewBody": "Booked SUV for airport pickup. Driver arrived 15 minutes early. Very smooth ride and reasonable pricing. Will definitely use again for future travels.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" } },
      { "@type": "Review", "author": { "@type": "Person", "name": "Sneha Gupta" }, "datePublished": "2024-11-20", "reviewBody": "Amazing experience with Triveni Cabs for our Manali trip. The driver was experienced with hill roads. AC worked perfectly. Booking process was very easy via WhatsApp.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" } },
      { "@type": "Review", "author": { "@type": "Person", "name": "Vikram Singh" }, "datePublished": "2024-11-15", "reviewBody": "Used their wedding car service. The decorated car looked beautiful. Chauffeur was in proper uniform. Made our special day even more memorable. Thank you Triveni Cabs!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" } },
      { "@type": "Review", "author": { "@type": "Person", "name": "Ananya Reddy" }, "datePublished": "2024-11-08", "reviewBody": "Very reliable service. Have used them multiple times for office commute and outstation. Rates are transparent with no hidden charges. Customer support is responsive.", "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" } },
      { "@type": "Review", "author": { "@type": "Person", "name": "Mohammed Farhan" }, "datePublished": "2024-10-25", "reviewBody": "Hired a bus for our company team outing to Rishikesh. 40 seater bus was comfortable with good legroom. Driver was very careful on the mountain roads. Great trip!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" } },
      { "@type": "Review", "author": { "@type": "Person", "name": "Kavita Joshi" }, "datePublished": "2024-10-18", "reviewBody": "Took their Chardham Yatra package. Everything was well organized - hotel bookings, darshan arrangements, and the tempo traveller was excellent. Highly recommend for pilgrimage tours.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" } }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Rental and Tour Packages",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sedan Car Rental", "description": "4 passenger sedan rental starting ₹11/km" }, "price": "11", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "11", "priceCurrency": "INR", "unitText": "per kilometer" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SUV Car Rental", "description": "6-7 passenger SUV rental starting ₹15/km" }, "price": "15", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "15", "priceCurrency": "INR", "unitText": "per kilometer" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tempo Traveller Rental", "description": "12-26 passenger tempo traveller starting ₹24/km" }, "price": "24", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "24", "priceCurrency": "INR", "unitText": "per kilometer" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manali Tour Package", "description": "5 Days 4 Nights Manali tour from Mumbai" }, "price": "9999", "priceCurrency": "INR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kashmir Tour Package", "description": "5 Days 4 Nights Kashmir tour from Delhi" }, "price": "16999", "priceCurrency": "INR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rajasthan Tour Package", "description": "7 Days 6 Nights Rajasthan tour from Jaipur" }, "price": "19999", "priceCurrency": "INR" }
      ]
    },
  }
];

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
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />

        {/* Single consolidated structured data script - reduces DOM nodes & parse time */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
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

        {/* Google Analytics - Lazy loaded */}
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

        {/* Google Ads - Lazy loaded */}
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
          <Suspense fallback={null}>
            <WhatsAppFloat phoneNumber="7668570551" />
            <MobileStickyBar />
          </Suspense>
          <Footer />
        </div>
        <Analytics />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
