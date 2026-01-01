import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Triveni Cabs - 24/7 Customer Support",
  description: "Contact Triveni Cabs for reliable taxi booking across India. 24/7 customer support, instant WhatsApp booking, and quick response times. Call us at any time for outstation, local, or airport transfers.",
  keywords: "contact Triveni Cabs, taxi booking support, cab service contact, 24/7 taxi support, WhatsApp cab booking, Agra taxi contact, India cab service contact, emergency taxi support, reliable cab customer service",
  alternates: {
    canonical: "https://www.trivenicabs.in/contact"
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
            "url": "https://www.trivenicabs.in/contact",
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
                "item": "https://www.trivenicabs.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact Us",
                "item": "https://www.trivenicabs.in/contact"
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
            "image": "https://www.trivenicabs.in/logo.png",
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
            "url": "https://www.trivenicabs.in/contact",
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

      {/* FAQ Schema for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How can I book a cab with Triveni Cabs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book a cab through multiple channels: Call us at +91-7668570551, WhatsApp us for instant booking, fill out the contact form on our website, or email us at cabstriveni@gmail.com. We are available 24/7 for bookings."
                }
              },
              {
                "@type": "Question",
                "name": "What are your customer support hours?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Triveni Cabs provides 24/7 customer support. Our booking hotline and WhatsApp are available round the clock. Office hours for in-person visits are 9:00 AM to 6:00 PM, but phone and online support is always available."
                }
              },
              {
                "@type": "Question",
                "name": "Which cities does Triveni Cabs operate in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We operate across 50+ cities in India including Delhi, Agra, Jaipur, Chandigarh, Shimla, Manali, Amritsar, Dehradun, Rishikesh, Haridwar, Jodhpur, Udaipur, Ayodhya, Ahmedabad, and many more. We also provide intercity and outstation services."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can I get a cab after booking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For immediate requirements, we can arrange a cab within 30-60 minutes depending on your location. For scheduled trips, we recommend booking at least 4-6 hours in advance. For outstation trips, please book 24 hours ahead for best availability."
                }
              },
              {
                "@type": "Question",
                "name": "What payment methods do you accept?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We accept multiple payment methods including cash, UPI (Google Pay, PhonePe, Paytm), bank transfers, and online payments. For corporate clients, we also offer credit facilities."
                }
              }
            ]
          })
        }}
      />

      <ContactClient />
    </>
  );
}
