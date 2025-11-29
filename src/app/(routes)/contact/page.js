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
  return <ContactClient />;
}
