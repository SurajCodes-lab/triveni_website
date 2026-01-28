export const metadata = {
  title: 'Get Corporate Transportation Quote | Free Consultation | Triveni Cabs',
  description: 'Request a customized corporate transportation quote for your business. Employee pick-up/drop, executive travel, airport transfers, fleet management. Free consultation, transparent pricing, GST invoicing. Call 7668570551.',
  keywords: [
    // Primary keywords
    'corporate transport quote',
    'employee transport cost',
    'business cab service quote',
    // Long-tail keywords
    'corporate cab service quote Delhi',
    'employee transport quote NCR',
    'get corporate fleet pricing',
    'company car rental quotation',
    'corporate transportation proposal',
    'bulk cab booking price',
    'monthly corporate cab rate',
    'annual corporate transport contract',
    'executive car rental price',
    'airport transfer corporate rate',
    // Location-specific
    'corporate cab quote Delhi NCR',
    'employee transport quote Gurgaon',
    'corporate transport quote Noida',
    'business cab service Jaipur quote',
    'corporate fleet Chandigarh pricing',
    // Action-oriented
    'request corporate cab quote',
    'get free transport consultation',
    'corporate cab free estimate',
    'employee transport cost calculator'
  ].join(', '),
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/get-corporate-quote',
    languages: {
      'en-IN': '/get-corporate-quote',
    },
  },
  openGraph: {
    title: 'Get Corporate Transportation Quote | Free Consultation | Triveni Cabs',
    description: 'Request a customized corporate transport quote. Employee shuttles, executive travel, fleet solutions. Transparent pricing, GST compliant.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/get-corporate-quote',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
        width: 1200,
        height: 630,
        alt: 'Get Corporate Transportation Quote - Free Consultation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Corporate Transportation Quote | Triveni Cabs',
    description: 'Free consultation for corporate transport needs. Employee shuttles, executive travel. Call 7668570551.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Delhi/Delhi_hero_section.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'Corporate Transportation',
};

export default function GetCorporateQuoteLayout({ children }) {
  // Schema markup - Comprehensive structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.trivenicabs.in/#organization",
    "name": "Triveni Cabs",
    "url": "https://www.trivenicabs.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.trivenicabs.in/logo.png"
    },
    "sameAs": [
      "https://www.facebook.com/trivenicabs",
      "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo",
      "https://twitter.com/trivenicabs",
      "https://www.linkedin.com/company/trivenicabs"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7668570551",
      "contactType": "sales",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.trivenicabs.in/#localbusiness",
    "name": "Triveni Cabs",
    "image": "https://www.trivenicabs.in/images/sightseeing/Delhi/Delhi_hero_section.jpg",
    "telephone": "+91-7668570551",
    "email": "cabstriveni@gmail.com",
    "url": "https://www.trivenicabs.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 18",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.5706",
      "longitude": "77.3211"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "priceRange": "$$"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.trivenicabs.in/get-corporate-quote/#service",
    "serviceType": "Corporate Transportation Quote",
    "name": "Corporate Transportation Quote Request",
    "description": "Get a customized corporate transportation quote for employee transport, executive travel, airport transfers, and fleet management needs.",
    "provider": {
      "@id": "https://www.trivenicabs.in/#localbusiness"
    },
    "areaServed": [
      { "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "State", "name": "Delhi" } },
      { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "State", "name": "Haryana" } },
      { "@type": "City", "name": "Jaipur", "containedInPlace": { "@type": "State", "name": "Rajasthan" } },
      { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "State", "name": "Chandigarh" } },
      { "@type": "City", "name": "Agra", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Dehradun", "containedInPlace": { "@type": "State", "name": "Uttarakhand" } }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "Free consultation and quote",
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Corporate Transportation", "item": "https://www.trivenicabs.in/corporate-transportation-service" },
      { "@type": "ListItem", "position": 3, "name": "Get Quote", "item": "https://www.trivenicabs.in/get-corporate-quote" }
    ]
  };

  // WebPage schema for better indexing
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.trivenicabs.in/get-corporate-quote/#webpage",
    "url": "https://www.trivenicabs.in/get-corporate-quote",
    "name": "Get Corporate Transportation Quote | Triveni Cabs",
    "description": "Request a customized corporate transportation quote for your business",
    "isPartOf": {
      "@id": "https://www.trivenicabs.in/#website"
    },
    "about": {
      "@id": "https://www.trivenicabs.in/get-corporate-quote/#service"
    },
    "breadcrumb": {
      "@id": "https://www.trivenicabs.in/get-corporate-quote/#breadcrumb"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      {children}
    </>
  );
}
