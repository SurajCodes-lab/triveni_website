export const metadata = {
  title: "Know Your Rights! Terms & Conditions | Fair, Transparent & Customer-Friendly | Triveni Cabs",
  description: "📜 Read our straightforward terms & conditions! Clear booking rules, payment policies, customer rights & company responsibilities. No confusing legal jargon - just honest, fair terms you can understand. Covers booking confirmation, pricing, vehicle standards, cancellation, liability & more. Your trust matters - we keep it simple & transparent!",
  keywords: "terms and conditions triveni cabs, taxi booking terms, cab service terms, booking terms and conditions, taxi service policy, customer terms, cab rental terms, booking rules, service terms, taxi terms of use, cab booking agreement, customer agreement, service policy, booking conditions, taxi service rules, cab hire terms, transport service terms, terms of service India, taxi booking contract, customer rights taxi, company terms, legal terms taxi, service agreement, booking policy, cab service conditions",
  alternates: {
    canonical: "https://trivenicabs.in/terms-and-conditions"
  },
  openGraph: {
    title: "Terms & Conditions | Fair, Transparent & Customer-Friendly | Triveni Cabs",
    description: "📜 Clear booking rules • Payment policies • Customer rights. No legal jargon - just honest, understandable terms. Read before you book!",
    type: "website",
    locale: "en_IN",
    url: "https://trivenicabs.in/terms-and-conditions",
    siteName: "Triveni Cabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Simple & Fair",
    description: "📜 Clear rules • Customer rights • Transparent policies. No confusing jargon. Know before you book!"
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

export default function TermsConditionsLayout({ children }) {
  return children;
}
