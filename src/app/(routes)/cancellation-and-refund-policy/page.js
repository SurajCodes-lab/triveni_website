import CancellationClient from "./CancellationClient";

export const revalidate = false;

export const metadata = {
  title: "Cancellation & Refund Policy | Triveni Cabs",
  description: "Learn about Triveni Cabs cancellation and refund policy. Fair, transparent, and customer-friendly terms. Full refund for 7+ days advance cancellation, 50% for 3-6 days, no refund within 72 hours.",
  keywords: "Triveni Cabs cancellation policy, taxi refund policy, cab booking cancellation, travel refund terms, cab service cancellation, taxi cancellation charges, refund process India",
  alternates: {
    canonical: "https://www.trivenicabs.in/cancellation-and-refund-policy"
  },
  openGraph: {
    title: "Cancellation & Refund Policy | Triveni Cabs",
    description: "Fair and transparent cancellation terms. Full refund for 7+ days, 50% for 3-6 days advance cancellation. Customer-friendly refund process.",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation & Refund Policy | Triveni Cabs",
    description: "Fair and transparent cancellation terms with customer-friendly refund process."
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

export default function CancellationRefundPolicyPage() {
  return <CancellationClient />;
}
