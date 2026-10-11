import CancellationClient from "./CancellationClient";
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle("Cancellation & Refund Policy"),
  description: "Learn about Triveni Cabs™ cancellation and refund policy. Fair, transparent, and customer-friendly terms.",
  keywords: "Triveni Cabs cancellation policy, taxi refund policy, cab booking cancellation, travel refund terms, cab service cancellation, taxi cancellation charges, refund process India",
  alternates: {
    canonical: "https://www.trivenicabs.in/cancellation-and-refund-policy"
  },
  openGraph: {
    title: "Cancellation & Refund Policy | Triveni Cabs™",
    description: "Fair and transparent cancellation terms. Full refund for 7+ days, 50% for 3-6 days advance cancellation. Customer-friendly refund process.",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs™"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation & Refund Policy | Triveni Cabs™",
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

// BreadcrumbList schema — makes the page eligible for breadcrumb SERP display
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Cancellation & Refund Policy", "item": "https://www.trivenicabs.in/cancellation-and-refund-policy" }
  ]
};

export default function CancellationRefundPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CancellationClient />
    </>
  );
}
