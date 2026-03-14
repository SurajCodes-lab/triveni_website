import PrivacyClient from "./PrivacyClient";

export const revalidate = false;

export const metadata = {
  title: "Privacy Policy | Triveni Cabs",
  description: "Read Triveni Cabs privacy policy. Learn how we collect, use, and protect your personal information when you use our taxi and car rental services across India.",
  keywords: "Triveni Cabs privacy policy, taxi service privacy, cab booking data protection, customer data policy, taxi booking privacy India, car rental privacy policy",
  alternates: {
    canonical: "https://www.trivenicabs.in/privacy-policy"
  },
  openGraph: {
    title: "Privacy Policy | Triveni Cabs",
    description: "Learn how Triveni Cabs protects your personal information and data when using our taxi and car rental services.",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs"
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Triveni Cabs",
    description: "Privacy policy for Triveni Cabs taxi and car rental services across India."
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

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}
