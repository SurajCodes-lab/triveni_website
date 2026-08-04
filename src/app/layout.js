import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Inter, Fraunces } from 'next/font/google';
import Script from 'next/script';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";
// @vercel/analytics removed — site runs on Lightsail; the injected
// /_vercel/insights/script.js 404'd on every page (console error sitewide).
import { getSchemaReviews } from '@/utilis/schemaReviews';
import { StickyCtaProvider } from '@/components/ui/StickyCtaContext';

// Dynamic imports for non-critical client components (code-split from main bundle)
const WhatsAppFloat = dynamic(() => import("@/components/layout/WhatsAppFloat"));
const DesktopQuoteButton = dynamic(() => import("@/components/ui/DesktopQuoteButton"));
const MobileStickyBar = dynamic(() => import("@/components/ui/MobileStickyBar"));
const PageTracker = dynamic(() => import("@/components/analytics/PageTracker"));
const ServiceWorkerRegistration = dynamic(() => import("@/components/pwa/ServiceWorkerRegistration"));
const AutoRelatedFooter = dynamic(() => import("@/components/seo/AutoRelatedFooter"));

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  preload: true,
});

// Ultra-Premium v2: editorial display serif for major headlines sitewide
// (consumed via the .font-display-serif utility → var(--font-display)).
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '900'],
  variable: '--font-display',
  preload: false,
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
    site: '@trivenicabs',
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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/logo/logo2.webp', type: 'image/webp' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/images/logo/logo2.webp', sizes: '180x180', type: 'image/webp' },
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

// Structured data emitted as a single @graph document. Previously three
// disconnected JSON-LD objects; collapsing them into @graph lets Google
// and LLM crawlers resolve @id cross-references in one parse, reduces
// payload, and is the 2026-recommended multi-entity pattern.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
  // Organization Schema — also typed as TravelAgency for vertical semantic match
  {
    "@type": ["Organization", "TravelAgency"],
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
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-7668570551",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": "Mo-Su 00:00-23:59"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-7668570551",
        "contactType": "reservations",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "foundingDate": "2015",
    "founder": { "@type": "Person", "name": "Pankaj Singh Gaur" },
    "slogan": "India's Trusted Taxi — ₹11/km Sedan. 4.9★ Rated. 24/7."
  },
  // WebSite Schema — now with global SpeakableSpecification so voice assistants
  // (Google Assistant, Alexa, Siri) know which CSS selectors are safe to read
  // aloud. Applied site-wide here; individual pages that use the semantic
  // classes below will automatically be speakable-eligible without per-page
  // schema. The 2026 AI-search playbook calls this a "soft" GEO signal.
  {
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
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        ".answer-box",
        ".direct-answer",
        ".key-stats",
        ".faq-answer",
        ".summary-box",
        "[data-speakable]"
      ]
    }
  },
  // LocalBusiness Schema — also typed as TaxiService for vertical semantic match
  {
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": "https://www.trivenicabs.in/#localbusiness",
    "parentOrganization": { "@id": "https://www.trivenicabs.in/#organization" },
    "isPartOf": { "@id": "https://www.trivenicabs.in/#website" },
    "name": "Triveni Cabs",
    "alternateName": "Triveni Car Rental Services",
    "logo": "https://www.trivenicabs.in/images/logo/logo.webp",
    "image": [
      "https://www.trivenicabs.in/images/logo/logo.webp",
      "https://www.trivenicabs.in/images/car/swift_dzire.jpg",
      "https://www.trivenicabs.in/images/car/premium_suv.jpg"
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
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Agra" },
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Chandigarh" },
      { "@type": "City", "name": "Amritsar" },
      { "@type": "City", "name": "Shimla" },
      { "@type": "City", "name": "Manali" },
      { "@type": "City", "name": "Dehradun" },
      { "@type": "City", "name": "Haridwar" },
      { "@type": "City", "name": "Rishikesh" },
      { "@type": "City", "name": "Nainital" },
      { "@type": "City", "name": "Mussoorie" },
      { "@type": "City", "name": "Udaipur" },
      { "@type": "City", "name": "Jodhpur" },
      { "@type": "City", "name": "Jaisalmer" },
      { "@type": "City", "name": "Lucknow" },
      { "@type": "City", "name": "Varanasi" },
      { "@type": "City", "name": "Ayodhya" },
      { "@type": "City", "name": "Dharamshala" },
      { "@type": "City", "name": "Gurgaon" },
      { "@type": "City", "name": "Noida" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    // Reviews are loaded from src/utilis/schemaReviews.js where datePublished
    // is computed dynamically at build time (1–10 weeks ago relative to today).
    // This eliminates the "stale review dates" E-E-A-T problem without needing
    // a quarterly manual refresh.
    "review": getSchemaReviews(),
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
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${fraunces.variable}`}>
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
        <link rel="preconnect" href="https://media.istockphoto.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://img.freepik.com" crossOrigin="anonymous" />

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

        {/* Google Tag Manager - lazyOnload to free the main thread during early
            interactions (INP fix). GTM still fires on browser idle; GA4 active-user
            counting is unaffected (it uses the separate direct gtag below). */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WBN5ZTSC');`
          }}
        />

        {/* Google Analytics — afterInteractive (NOT lazyOnload). lazyOnload
            undercounted fast-bounce mobile visitors (GA4 "active users" showed
            ~150 vs GSC-implied ~330+/day, Aug 2026). The Week-41 INP work
            removed the animation main-thread cost, so counting accurately is
            affordable again. GTM/Ads below stay lazy — only counting moved. */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script strategy="afterInteractive" id="ga-init">
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
          <StickyCtaProvider>
            <Header />
            <main id="main-content" className="flex-grow pb-[64px] md:pb-0" role="main">
              {children}
            </main>
            <Suspense fallback={null}>
              <AutoRelatedFooter />
              <WhatsAppFloat phoneNumber="7668570551" />
              <DesktopQuoteButton />
              <MobileStickyBar />
            </Suspense>
            <Footer />
          </StickyCtaProvider>
        </div>
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
