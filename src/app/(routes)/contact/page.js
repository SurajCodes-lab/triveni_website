import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Triveni Cabs - 24/7 Customer Support",
  description: "Contact Triveni Cabs for reliable taxi booking across India. 24/7 customer support, instant WhatsApp booking, and quick response times. Call us at any time for outstation, local, or airport transfers.",
  keywords: "contact Triveni Cabs, taxi booking support, cab service contact, 24/7 taxi support, WhatsApp cab booking, Agra taxi contact, India cab service contact, emergency taxi support, reliable cab customer service",
  alternates: {
    canonical: "https://trivenicabs.in/contact"
  },
  openGraph: {
    title: "Contact Us | Triveni Cabs - 24/7 Customer Support",
    description: "Reach out to Triveni Cabs for reliable taxi booking across India. 24/7 support, instant WhatsApp booking, and professional service in 50+ cities.",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs",
    images: [
      {
        url: "/images/about/about_banner.webp",
        width: 1200,
        height: 630,
        alt: "Contact Triveni Cabs - 24/7 Customer Support"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Triveni Cabs - 24/7 Customer Support",
    description: "24/7 customer support for all your taxi booking needs across India. Call, WhatsApp, or email us anytime."
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
};

export default function ContactPage() {
  return (
    <>
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Triveni Cabs",
            "description": "Get in touch with Triveni Cabs for 24/7 taxi booking support, inquiries, and customer service.",
            "url": "https://trivenicabs.in/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Triveni Cabs",
              "telephone": "+91-7668570551",
              "email": "cabstriveni@gmail.com",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-7668570551",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "hi"]
                }
              ]
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
                "item": "https://trivenicabs.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact Us",
                "item": "https://trivenicabs.in/contact"
              }
            ]
          })
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Triveni Cabs",
            "image": "https://trivenicabs.in/logo.png",
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
            "url": "https://trivenicabs.in/contact",
            "priceRange": "₹₹",
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
            }
          })
        }}
      />

      <ContactClient />
    </>
  );
}
