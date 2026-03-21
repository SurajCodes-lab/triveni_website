import Link from 'next/link';
import { Phone, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Car, MapPin, ThumbsUp, Award, Quote } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Triveni Cabs Reviews | 4.8★ Rating | 2,847+ Customer Reviews 2026',
  description: 'Read 2,847+ genuine Triveni Cabs reviews. 4.8/5 rating. Customer feedback on outstation cabs, airport taxi, wedding cars & more. Verified reviews from real travelers.',
  keywords: 'Triveni Cabs reviews, Triveni Cabs rating, cab service reviews, taxi service rating, customer feedback Triveni Cabs, Triveni Cabs testimonials, outstation cab reviews, airport taxi reviews, wedding car reviews, best cab service reviews India, Triveni Cabs customer experience, Triveni Cabs feedback, reliable cab reviews, safe cab service reviews',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/reviews',
  },
  openGraph: {
    title: 'Triveni Cabs Reviews | 4.8★ | 2,847+ Happy Customers',
    description: 'Read genuine customer reviews. 4.8/5 rating from 2,847+ travelers. Outstation, airport, wedding, and local cab reviews.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/reviews',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: '/images/about/about_banner.webp',
        width: 1200,
        height: 630,
        alt: 'Triveni Cabs Customer Reviews'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triveni Cabs Reviews | 4.8★ | 2,847+ Customers | Trusted Service',
    description: 'Genuine customer reviews from 2,847+ travelers. 4.8/5 rating for safety, punctuality, and value.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/about/about_banner.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ReviewsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Customer Reviews - Triveni Cabs",
    "description": "Read 2,847+ genuine customer reviews for Triveni Cabs. 4.8/5 average rating across outstation, airport, wedding, and corporate cab services.",
    "url": "https://www.trivenicabs.in/reviews"
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Triveni Cabs",
    "url": "https://www.trivenicabs.in",
    "telephone": "+91-7668570551",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "366 Dandupura near Tajganj",
      "addressLocality": "Agra",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "282006",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rajesh Kumar" },
        "datePublished": "2025-12-15",
        "reviewBody": "Excellent outstation cab service from Delhi to Agra. Driver was punctual, car was clean and well-maintained. Very reasonable pricing with no hidden charges. Will definitely book again.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Priya Sharma" },
        "datePublished": "2025-11-28",
        "reviewBody": "Booked a wedding car and the service was outstanding. Car was decorated beautifully, driver was professional and arrived well before time. Made our special day even better.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Amit Verma" },
        "datePublished": "2025-11-10",
        "reviewBody": "Used Triveni Cabs for airport pickup from Delhi IGI. Flight was delayed by 2 hours but the driver waited patiently. Great tracking system and communication.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sunita Agarwal" },
        "datePublished": "2025-10-22",
        "reviewBody": "Family trip to Jaipur from Delhi - round trip for 3 days. Same driver throughout, very helpful with sightseeing suggestions. Innova was comfortable for our family of 5.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Mohammed Farhan" },
        "datePublished": "2025-10-05",
        "reviewBody": "Corporate monthly cab service for our Agra office. Consistent quality, on-time pickups, and professional drivers. Their billing system is transparent and hassle-free.",
        "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://www.trivenicabs.in/reviews" }
    ]
  };

  const faqData = [
    {
      question: "Are Triveni Cabs reviews genuine?",
      answer: "Yes, all reviews on this page are from verified customers who have completed trips with us. We collect feedback after every trip via WhatsApp and phone. We display both positive and constructive feedback transparently."
    },
    {
      question: "What is Triveni Cabs overall rating?",
      answer: "Triveni Cabs has an overall rating of 4.8 out of 5 based on 2,847+ customer reviews. Our highest-rated categories are driver behavior (4.9/5) and punctuality (4.8/5)."
    },
    {
      question: "How can I leave a review for Triveni Cabs?",
      answer: "After your trip, our team sends a feedback request via WhatsApp. You can also call us at 7668570551 to share your experience. We value all feedback and use it to continuously improve our services."
    },
    {
      question: "What do customers say about outstation cab service?",
      answer: "Customers consistently praise our outstation service for transparent pricing, punctual pickups, clean vehicles, and experienced drivers. The most common positive mentions are about driver behavior, vehicle condition, and no-hidden-charges policy."
    },
    {
      question: "How does Triveni Cabs handle negative feedback?",
      answer: "We take all feedback seriously. For any complaint, our team investigates within 24 hours. Issues with drivers lead to retraining or removal. Service complaints result in fare adjustments or complimentary rides. Call 7668570551 with any concerns."
    },
    {
      question: "What is the rating for airport taxi service?",
      answer: "Our airport taxi service has a 4.9/5 rating based on 1,250+ airport transfers. Customers particularly appreciate our flight tracking, on-time arrivals, and the meet-and-greet service at arrival gates."
    },
    {
      question: "Do wedding car clients recommend Triveni Cabs?",
      answer: "Yes, our wedding car service has a 4.9/5 rating. Clients praise the car decoration quality, driver professionalism, punctuality, and the overall premium experience. 95% of wedding clients recommend us."
    },
    {
      question: "How often are driver ratings updated?",
      answer: "Driver ratings are updated after every trip. Drivers maintaining below 4.0 rating over 10 trips undergo mandatory retraining. Consistent low performers are removed from the platform. This ensures quality service."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const categoryRatings = [
    { category: "Driver Behavior", rating: 4.9, reviews: "2,847" },
    { category: "Vehicle Quality", rating: 4.7, reviews: "2,847" },
    { category: "Punctuality", rating: 4.8, reviews: "2,847" },
    { category: "Value for Money", rating: 4.7, reviews: "2,847" },
    { category: "Safety", rating: 4.9, reviews: "2,847" },
    { category: "Customer Support", rating: 4.6, reviews: "2,847" },
  ];

  const featuredReviews = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      date: "December 2025",
      service: "Outstation",
      rating: 5,
      text: "Excellent outstation cab service from Delhi to Agra. Driver was punctual, car was clean and well-maintained. Very reasonable pricing with no hidden charges. The driver knew all the best stops along the way. Will definitely book again for our next family trip.",
      highlight: true,
    },
    {
      name: "Priya Sharma",
      location: "Agra",
      date: "November 2025",
      service: "Wedding",
      rating: 5,
      text: "Booked a wedding car and the service was outstanding. Car was decorated beautifully with fresh flowers. Driver was dressed professionally and arrived well before time. Made our special day even more memorable. Highly recommended for weddings!",
      highlight: false,
    },
    {
      name: "Amit Verma",
      location: "Jaipur",
      date: "November 2025",
      service: "Airport",
      rating: 5,
      text: "Used Triveni Cabs for airport pickup from Delhi IGI. Flight was delayed by 2 hours but the driver waited patiently without any extra charge. Great tracking system and communication. The driver helped with all our luggage too.",
      highlight: false,
    },
    {
      name: "Sunita Agarwal",
      location: "Delhi",
      date: "October 2025",
      service: "Outstation",
      rating: 5,
      text: "Family trip to Jaipur from Delhi - round trip for 3 days. Same driver throughout, very helpful with sightseeing suggestions. Innova was comfortable for our family of 5. No hidden charges, transparent billing. Best cab service we have used.",
      highlight: true,
    },
    {
      name: "Mohammed Farhan",
      location: "Agra",
      date: "October 2025",
      service: "Corporate",
      rating: 4,
      text: "Corporate monthly cab service for our Agra office. Consistent quality, on-time pickups, and professional drivers. Their billing system is transparent and hassle-free. Only wish they had a mobile app, but WhatsApp booking works well enough.",
      highlight: false,
    },
    {
      name: "Kavita Singh",
      location: "Chandigarh",
      date: "September 2025",
      service: "Outstation",
      rating: 5,
      text: "Chandigarh to Manali round trip with family. Driver was excellent, knew all the hill routes perfectly. Stopped at all the good spots. Vehicle was clean and AC worked perfectly. Very safe driving through the mountains.",
      highlight: false,
    },
    {
      name: "Rohit Mehra",
      location: "Delhi",
      date: "September 2025",
      service: "Airport",
      rating: 5,
      text: "Needed an early morning cab to Delhi airport for a 5 AM flight. Driver arrived 15 minutes early at 2:30 AM. Very professional and courteous. Reasonable fare with no surge pricing. This is my go-to cab service now.",
      highlight: false,
    },
    {
      name: "Deepika Patel",
      location: "Agra",
      date: "August 2025",
      service: "Local",
      rating: 5,
      text: "Hired a local taxi for 8 hours for shopping and hospital visits in Agra. Driver was very patient, waited at each stop without complaining. The hourly package pricing is very fair compared to app-based cabs. Great for daily needs.",
      highlight: false,
    },
    {
      name: "Vikram Chauhan",
      location: "Jaipur",
      date: "August 2025",
      service: "Outstation",
      rating: 5,
      text: "Booked a tempo traveller for our group of 15 friends from Jaipur to Udaipur. The vehicle was spacious and well-maintained. Push-back seats made the long journey comfortable. Driver was professional and drove safely throughout.",
      highlight: true,
    },
    {
      name: "Ananya Reddy",
      location: "Delhi",
      date: "July 2025",
      service: "Wedding",
      rating: 5,
      text: "We booked multiple cars for our wedding - 1 bridal car and 4 guest vehicles. Everything was coordinated perfectly. All drivers arrived on time, cars were spotless. The bridal car decoration was stunning. Thank you Triveni Cabs!",
      highlight: false,
    },
    {
      name: "Sanjay Gupta",
      location: "Haridwar",
      date: "July 2025",
      service: "Outstation",
      rating: 4,
      text: "Delhi to Haridwar-Rishikesh trip for Ganga Aarti and rafting. Driver was knowledgeable about the area and suggested best timing for Aarti. Good value for money. Vehicle could have been slightly newer but otherwise solid service.",
      highlight: false,
    },
    {
      name: "Neha Kapoor",
      location: "Shimla",
      date: "June 2025",
      service: "Outstation",
      rating: 5,
      text: "Solo trip from Delhi to Shimla as a woman traveler. Was initially nervous but Triveni Cabs made me feel completely safe. Got driver details beforehand, GPS tracking was shared with my family. Driver was respectful and professional. Highly recommend for women travelers.",
      highlight: true,
    },
  ];

  const serviceTypeStats = [
    { type: "Outstation Cabs", rating: "4.8", reviews: "1,450+", color: "from-amber-500 to-orange-500" },
    { type: "Wedding Cars", rating: "4.9", reviews: "380+", color: "from-rose-500 to-pink-500" },
    { type: "Airport Transfers", rating: "4.9", reviews: "520+", color: "from-sky-500 to-blue-500" },
    { type: "Corporate Service", rating: "4.7", reviews: "280+", color: "from-violet-500 to-purple-500" },
    { type: "Local Taxi", rating: "4.7", reviews: "217+", color: "from-emerald-500 to-teal-500" },
  ];

  const serviceColorMap = {
    "Outstation": "bg-amber-100 text-amber-700",
    "Wedding": "bg-rose-100 text-rose-700",
    "Airport": "bg-sky-100 text-sky-700",
    "Corporate": "bg-violet-100 text-violet-700",
    "Local": "bg-emerald-100 text-emerald-700",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* === Warm Coral / Rose-Gold Social Proof Theme === */}
      <div className="min-h-screen bg-[#faf7f5]">

        {/* ─── HERO: Centered rating showcase with warm gradient ─── */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1c1017] via-[#2a1520] to-[#1a0f1e]">
          {/* Decorative warm orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-rose-500/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-400/10 rounded-full blur-[80px]" />

          {/* Subtle radial pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-rose-500/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-rose-400/20">
              <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span className="text-rose-200 font-semibold text-sm tracking-wider uppercase">Customer Reviews</span>
            </div>

            {/* Large rating display */}
            <div className="mb-6">
              <span className="text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-amber-300 via-rose-300 to-pink-300 bg-clip-text leading-none">
                4.8
              </span>
              <span className="text-3xl md:text-4xl font-bold text-white/50 ml-2">/5</span>
            </div>

            <div className="flex items-center justify-center gap-1.5 mb-6">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="w-8 h-8 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-rose-100/70 mb-4 max-w-2xl mx-auto">
              Based on <strong className="text-white font-bold">2,847+</strong> verified customer reviews
            </p>

            <p className="text-rose-200/50 max-w-lg mx-auto text-sm">
              Real feedback from real travelers who trust Triveni Cabs for outstation, airport, wedding, and local cab services across North India.
            </p>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80L80 72C160 64 320 48 480 44C640 40 800 48 960 52C1120 56 1280 56 1360 56L1440 56V80H1360C1280 80 1120 80 960 80C800 80 640 80 480 80C320 80 160 80 80 80H0Z" fill="#faf7f5"/>
            </svg>
          </div>
        </section>

        {/* ─── OVERVIEW: SEO prose content section ─── */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#1c1017]">
              Why Thousands of Travellers Trust Triveni Cabs
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>With an overall rating of <strong className="text-[#1c1017]">4.8 out of 5 stars from 2,847+ verified customer reviews</strong>, Triveni Cabs is one of the highest-rated cab services in North India. Our customers consistently praise driver professionalism, vehicle cleanliness, punctual pickups, and transparent billing — the four pillars that have earned us this reputation since our founding in Agra.</p>
              <p>What makes <strong className="text-[#1c1017]">Triveni Cabs reviews</strong> stand out is the variety of travellers who vouch for us. Families booking outstation trips to Jaipur, corporate teams using our monthly cab packages, tourists visiting the Taj Mahal for the first time, couples renting luxury wedding cars, pilgrims heading to Haridwar and Varanasi — each segment reports high satisfaction across different service parameters.</p>
              <p>We believe that genuine customer feedback is the best quality control mechanism. After every completed trip, our team proactively collects feedback via WhatsApp. Positive reviews motivate our drivers, while constructive criticism drives real operational improvements — from vehicle upgrades to driver retraining. This feedback loop is why our satisfaction rate has improved year over year.</p>
              <p>Read the reviews below to hear directly from travellers who have experienced our outstation cabs, airport transfers, local taxi packages, wedding car services, and corporate transportation. Every review is from a verified customer — no fake testimonials, no paid endorsements. Your trust matters more than any marketing campaign.</p>
            </div>
          </div>
        </section>

        {/* ─── CATEGORY RATINGS: Horizontal bar chart ─── */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-bold text-rose-600 bg-rose-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Breakdown</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c1017] mb-2">
                Rating by Category
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-rose-100/40">
              <div className="space-y-5">
                {categoryRatings.map((cat, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-[#1c1017] text-sm">{cat.category}</h3>
                      <span className="font-black text-rose-600 text-sm">{cat.rating}/5</span>
                    </div>
                    <div className="w-full bg-rose-50 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-amber-400 via-rose-400 to-pink-400 h-3 rounded-full transition-all"
                        style={{ width: `${(cat.rating / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICE TYPE RATINGS: Gradient pill cards ─── */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-bold text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">By Service</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c1017] mb-2">
                Ratings by Service Type
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {serviceTypeStats.map((service, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl p-5 text-center bg-white border border-rose-100/50 shadow-sm hover:shadow-md transition-all">
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                  <h3 className="font-bold text-[#1c1017] text-sm mb-2 mt-1">{service.type}</h3>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="font-black text-[#1c1017] text-xl">{service.rating}</span>
                  </div>
                  <p className="text-xs text-stone-500">{service.reviews} reviews</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED REVIEWS: Masonry-style with highlight cards ─── */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-pink-600 bg-pink-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c1017] mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Genuine reviews from verified travelers across all our services
              </p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
              {featuredReviews.map((review, idx) => {
                const tagColor = serviceColorMap[review.service] || "bg-stone-100 text-stone-700";
                return (
                  <div key={idx} className={`break-inside-avoid rounded-2xl p-6 border transition-all ${
                    review.highlight
                      ? 'bg-gradient-to-br from-[#1c1017] to-[#2a1520] border-rose-800/30 text-white shadow-lg shadow-rose-900/10'
                      : 'bg-white border-rose-100/40 hover:border-rose-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md'
                  }`}>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-amber-400' : (review.highlight ? 'text-white/20' : 'text-stone-200')}`} />
                      ))}
                    </div>

                    {/* Quote */}
                    <Quote className={`w-5 h-5 mb-2 ${review.highlight ? 'text-rose-400/50' : 'text-rose-300'}`} />

                    <p className={`text-sm leading-relaxed mb-4 ${review.highlight ? 'text-rose-100/80' : 'text-stone-600'}`}>
                      {review.text}
                    </p>

                    {/* Author */}
                    <div className={`pt-4 border-t ${review.highlight ? 'border-white/10' : 'border-rose-100/40'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              review.highlight ? 'bg-rose-500/20 text-rose-300' : 'bg-rose-100 text-rose-600'
                            }`}>
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <p className={`font-bold text-sm ${review.highlight ? 'text-white' : 'text-[#1c1017]'}`}>{review.name}</p>
                              <p className={`text-xs ${review.highlight ? 'text-rose-300/60' : 'text-stone-500'}`}>{review.location} | {review.date}</p>
                            </div>
                          </div>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          review.highlight ? 'bg-white/10 text-rose-200' : tagColor
                        }`}>
                          {review.service}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── TRUST SECTION: Dark warm section with glass cards ─── */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#1c1017] via-[#2a1520] to-[#1a0f1e]">
          <div className="absolute top-10 right-20 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-10 w-60 h-60 bg-amber-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-amber-300 bg-amber-500/10 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase border border-amber-400/20">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why 2,847+ Customers Trust Triveni Cabs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Shield, title: "100% Verified", desc: "Every driver background-checked. Every vehicle GPS-tracked.", gradient: "from-rose-500/15 to-pink-500/15" },
                { icon: ThumbsUp, title: "No Hidden Charges", desc: "Transparent per-km pricing. What we quote is what you pay.", gradient: "from-amber-500/15 to-orange-500/15" },
                { icon: Clock, title: "On-Time Always", desc: "98% on-time pickup rate. Drivers arrive 10 min before schedule.", gradient: "from-sky-500/15 to-cyan-500/15" },
                { icon: Award, title: "4.8/5 Rating", desc: "Consistently high ratings across all service categories.", gradient: "from-violet-500/15 to-purple-500/15" },
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-xl rounded-2xl p-6 text-center border border-white/[0.06] hover:border-white/[0.12] transition-all`}>
                  <div className="inline-flex p-3 bg-white/[0.06] rounded-xl mb-4">
                    <item.icon className="w-6 h-6 text-rose-300" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-rose-200/60 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SEO Prose Section with Contextual Links ─── */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1017] mb-6 text-center">Why Customers Rate Triveni Cabs 4.8 Out of 5</h2>
            <div className="prose prose-lg max-w-none text-stone-700 space-y-4">
              <p>
                Our <strong>4.8-star rating</strong> across 2,847+ verified reviews reflects a relentless focus on three things: <Link href="/safety" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">passenger safety</Link>, transparent pricing, and genuine hospitality. Whether customers book an <Link href="/outstation-cabs" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">outstation cab</Link> for a family vacation, a <Link href="/one-way-cab" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">one-way cab</Link> to save 50% on intercity travel, or a <Link href="/wedding" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">wedding car</Link> for their special day — the consistent praise centers on driver behavior (4.9/5) and no-hidden-charges billing.
              </p>
              <p>
                From <Link href="/delhi" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">Delhi</Link> to <Link href="/agra" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">Agra</Link>, <Link href="/jaipur" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">Jaipur</Link> to <Link href="/shimla" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">Shimla</Link>, travelers appreciate our <Link href="/pricing" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">per-km pricing transparency</Link>, the <Link href="/vehicles" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">clean, well-maintained vehicles</Link>, and 24/7 support at <strong>7668570551</strong>. Our <Link href="/airport-service" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">airport transfer service</Link> scores an exceptional 4.9/5 for flight tracking and on-time arrivals. Explore our <Link href="/sightseeing/golden-triangle-tour-3-days" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">Golden Triangle tour</Link> or book a <Link href="/local-taxi" className="text-rose-600 hover:text-pink-600 underline underline-offset-2">local taxi</Link> — and see for yourself why thousands keep coming back.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SHARE YOUR REVIEW CTA ─── */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 rounded-3xl p-8 md:p-12 text-center border border-rose-100/50">
              <Quote className="w-10 h-10 text-rose-300 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#1c1017] mb-4">
                Traveled with Triveni Cabs? Share Your Experience
              </h2>
              <p className="text-stone-600 mb-8 max-w-lg mx-auto">
                Your feedback helps us improve and helps other travelers make informed decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://wa.me/917668570551?text=I want to share my review for Triveni Cabs"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-rose-500/15 hover:shadow-rose-500/25 hover:scale-[1.02] transition-all"
                >
                  Share Review on WhatsApp
                </Link>
                <Link
                  href="tel:+917668570551"
                  className="inline-flex items-center gap-2 bg-white text-[#1c1017] px-6 py-3 rounded-2xl font-bold border border-rose-200 hover:border-rose-300 hover:bg-rose-50 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call: 7668570551
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ: Warm cards ─── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-rose-600 bg-rose-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c1017] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-stone-600">
                Questions about our reviews and customer feedback
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="bg-[#faf7f5] rounded-2xl p-6 border border-rose-100/40 hover:border-rose-200 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1c1017] mb-2">{faq.question}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INTERLINKING: Comprehensive footer-style grids ─── */}
        <section className="py-16 px-4 border-t border-rose-100">
          <div className="max-w-7xl mx-auto space-y-12">

            {/* Related Services */}
            <div>
              <h2 className="text-sm font-bold text-rose-600 mb-5 tracking-widest uppercase">Our Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { l: "Outstation Cab Booking", h: "/outstation-cabs", d: "Intercity travel from ₹11/km with verified drivers" },
                  { l: "One-Way Cab Service", h: "/one-way-cab", d: "Save 50% — pay single direction only" },
                  { l: "Round Trip Cab Booking", h: "/round-trip-cab", d: "Same driver for multi-day return trips" },
                  { l: "Local Taxi Hourly Rental", h: "/local-taxi", d: "Hourly packages from ₹1,200" },
                  { l: "Airport Transfer Service", h: "/airport-service", d: "Flight-tracked pickups & drops" },
                  { l: "Wedding Car Rental", h: "/wedding", d: "Decorated luxury cars for weddings" },
                ].map((s, i) => (
                  <Link key={i} href={s.h} className="block bg-white rounded-xl p-4 border border-rose-100/60 hover:border-rose-300 hover:shadow-md transition-all group">
                    <span className="font-semibold text-sm text-stone-700 group-hover:text-rose-700 transition-colors">{s.l}</span>
                    <span className="block text-xs text-stone-400 mt-1">{s.d}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Cities */}
            <div>
              <h2 className="text-sm font-bold text-stone-400 mb-4 tracking-widest uppercase">Popular Cities</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Delhi Cab Service", h: "/delhi" }, { l: "Agra Cab Service", h: "/agra" }, { l: "Jaipur Cab Service", h: "/jaipur" },
                  { l: "Chandigarh Cab Service", h: "/chandigarh" }, { l: "Shimla Cab Service", h: "/shimla" }, { l: "Manali Cab Service", h: "/manali" },
                  { l: "Haridwar Cab Service", h: "/haridwar" }, { l: "Rishikesh Cab Service", h: "/rishikesh" }, { l: "Amritsar Cab Service", h: "/amritsar" },
                  { l: "Udaipur Cab Service", h: "/udaipur" },
                ].map((c, i) => (
                  <Link key={i} href={c.h} className="bg-white rounded-full px-5 py-2.5 text-stone-700 hover:bg-rose-50 hover:text-rose-700 transition-colors text-sm font-medium border border-rose-100/60 hover:border-rose-300">{c.l}</Link>
                ))}
              </div>
            </div>

            {/* Popular Tours */}
            <div>
              <h2 className="text-sm font-bold text-stone-400 mb-4 tracking-widest uppercase">Popular Tours</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Golden Triangle Tour", h: "/sightseeing/golden-triangle-tour-3-days" },
                  { l: "Same Day Agra Tour", h: "/same-day-agra-tour-from-delhi" },
                  { l: "Taj Mahal Sunrise Tour", h: "/sunrise-taj-mahal-tour-from-delhi" },
                  { l: "Rajasthan Circuit Tour", h: "/sightseeing/rajasthan-tour-from-delhi" },
                  { l: "Char Dham Yatra by Car", h: "/religious-tours/char-dham-yatra-by-car" },
                  { l: "Weekend Getaways from Delhi", h: "/weekend-getaways-from-delhi-by-car" },
                  { l: "Mathura Vrindavan Tour", h: "/sightseeing/mathura-vrindavan-tour-from-delhi" },
                  { l: "Delhi Sightseeing Tour", h: "/sightseeing/delhi-sightseeing-tour" },
                ].map((t, i) => (
                  <Link key={i} href={t.h} className="bg-white rounded-full px-5 py-2.5 text-stone-700 hover:bg-rose-50 hover:text-rose-700 transition-colors text-sm font-medium border border-rose-100/60 hover:border-rose-300">{t.l}</Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-sm font-bold text-stone-400 mb-4 tracking-widest uppercase">Quick Links</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Pricing & Fare Chart", h: "/pricing" }, { l: "Vehicle Fleet", h: "/vehicles" },
                  { l: "Safety Standards", h: "/safety" }, { l: "About Triveni Cabs", h: "/about" },
                  { l: "Corporate Service", h: "/corporate-transportation-service" }, { l: "Contact Us", h: "/contact" },
                  { l: "Tempo Traveller", h: "/tempo-traveller" }, { l: "All Routes", h: "/routes" },
                ].map((q, i) => (
                  <Link key={i} href={q.h} className="bg-white rounded-full px-5 py-2.5 text-stone-700 hover:bg-rose-50 hover:text-rose-700 transition-colors text-sm font-medium border border-rose-100/60 hover:border-rose-300">{q.l}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA: Glass card on dark bg ─── */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#1c1017] to-[#2a1520]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/[0.05] backdrop-blur-2xl rounded-3xl p-10 md:p-14 text-center border border-white/[0.08]">
              <div className="flex items-center justify-center gap-1.5 mb-6">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-7 h-7 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Join 2,847+ Happy Customers
              </h2>
              <p className="text-rose-200/60 mb-8 text-lg max-w-xl mx-auto">
                Experience the service that earned us a 4.8/5 rating
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+917668570551"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-rose-500/20 hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Book Now: 7668570551
                </Link>
                <Link
                  href="https://wa.me/917668570551?text=I want to book a cab"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1c1017] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-rose-50 transition-all"
                >
                  WhatsApp Booking
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
