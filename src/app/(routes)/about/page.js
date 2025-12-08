import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | Triveni Cabs - India's Most Trusted Cab Service",
  description: "Discover Triveni Cabs - a brand born from passion, discipline, and customer-first values. 500+ premium vehicles, 50+ cities, 10,000+ happy customers. Safe, reliable, and affordable travel across India with 24/7 support.",
  keywords: "Triveni Cabs about, Pankaj Singh Gaur, cab service founder, India travel company, trusted cab service, reliable taxi India, professional drivers, customer focused travel, transparent pricing cabs, safe travel India, premium cab service, 24/7 support taxi, airport transfer India, outstation cab booking",
  alternates: {
    canonical: "https://trivenicabs.in/about"
  },
  openGraph: {
    title: "About Us | Triveni Cabs - India's Most Trusted Cab Service",
    description: "Discover Triveni Cabs - 500+ premium vehicles, 50+ cities, 10,000+ happy customers. Safe, reliable, and affordable travel across India with transparent pricing and 24/7 support.",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs",
    images: [
      {
        url: "/images/about_page_hero_section.jpg",
        width: 1200,
        height: 630,
        alt: "About Triveni Cabs - India's Most Trusted Cab Service with Premium Fleet"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Triveni Cabs - India's Most Trusted Cab Service",
    description: "500+ vehicles, 50+ cities, 10,000+ happy customers. Safe, reliable, and affordable travel across India with 24/7 support."
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

export default function AboutPage() {
  return (
    <>
      {/* AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Triveni Cabs",
            "description": "Discover the story behind Triveni Cabs, our mission, vision, and commitment to providing safe and reliable transportation across India.",
            "url": "https://trivenicabs.in/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Triveni Cabs",
              "foundingDate": "2015",
              "founder": {
                "@type": "Person",
                "name": "Pankaj Singh Gaur"
              },
              "description": "India's most trusted cab service provider with a fleet of 500+ premium vehicles serving 50+ cities.",
              "logo": "https://trivenicabs.in/logo.png",
              "sameAs": [
                "https://twitter.com/TriveniCabs",
                "https://www.facebook.com/TriveniCabs",
                "https://www.instagram.com/trivenicabs"
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
                "name": "About Us",
                "item": "https://trivenicabs.in/about"
              }
            ]
          })
        }}
      />

      <AboutClient />
    </>
  );
}
