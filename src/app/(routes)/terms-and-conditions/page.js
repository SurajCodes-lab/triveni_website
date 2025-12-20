import TermsClient from "./TermsClient";

export const metadata = {
  title: "Terms & Conditions | Triveni Cabs",
  description: "Read Triveni Cabs terms and conditions for taxi booking services. Clear policies on booking, payments, vehicle responsibilities, customer guidelines, and more.",
  keywords: "Triveni Cabs terms, taxi booking terms, cab service conditions, travel terms India, taxi service agreement, cab booking policy, customer responsibilities taxi",
  alternates: {
    canonical: "https://www.trivenicabs.in/terms-and-conditions"
  },
  openGraph: {
    title: "Terms & Conditions | Triveni Cabs",
    description: "Clear and transparent terms for taxi booking. Booking policies, payment terms, vehicle responsibilities, and customer guidelines.",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs"
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Triveni Cabs",
    description: "Clear and transparent terms for taxi booking services across India."
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

export default function TermsConditionsPage() {
  return <TermsClient />;
}
