// src/app/tourist-attractions/[city]/page.js

import TouristAttractionsClient from '@/components/TouristAttractionsClient';
import { touristAttractions, getCitiesWithAttractions } from '@/utilis/touristAttractionsData';

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = 3600;

export async function generateStaticParams() {
  // Generate static params for cities with tourist attractions only
  const cities = getCitiesWithAttractions();

  return cities.map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }) {
  const { city } = params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const attractions = touristAttractions[city.toLowerCase()] || [];

  return {
    title: `Tourist Attractions in ${cityName} | Must-Visit Places & Monuments`,
    description: `Discover ${attractions.length} amazing tourist attractions in ${cityName}. From historical monuments to spiritual sites, explore the best places to visit with detailed guides.`,
    keywords: [
      `${cityName.toLowerCase()} tourist places`,
      `places to visit in ${cityName.toLowerCase()}`,
      `${cityName.toLowerCase()} sightseeing`,
      `tourist attractions in ${cityName.toLowerCase()}`,
      `best places in ${cityName.toLowerCase()}`,
      `${cityName.toLowerCase()} tourism`,
      `${cityName.toLowerCase()} tour packages`,
      `things to do in ${cityName.toLowerCase()}`,
      `${cityName.toLowerCase()} travel guide`,
      `visit ${cityName.toLowerCase()}`,
      `${cityName.toLowerCase()} attractions`,
      `${cityName.toLowerCase()} sightseeing tour`,
      `${cityName.toLowerCase()} famous places`,
      `${cityName.toLowerCase()} tour guide`,
      `${cityName.toLowerCase()} local sightseeing`,
      `${cityName.toLowerCase()} monuments`,
      `${cityName.toLowerCase()} heritage sites`,
      `${cityName.toLowerCase()} tourist spots`,
      `${cityName.toLowerCase()} places to see`,
      `${cityName.toLowerCase()} vacation spots`
    ].join(', '),
    openGraph: {
      title: `Tourist Attractions in ${cityName} | Complete Travel Guide`,
      description: `Complete guide to ${attractions.length} must-visit attractions in ${cityName}. Historical sites, temples, forts and more.`,
      url: `/tourist-attractions/${city}`,
      type: 'website',
    }
  };
}

export default function TouristAttractionsPage({ params }) {
  const { city } = params;
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const attractions = touristAttractions[city.toLowerCase()] || [];

  // If no attractions found, show a message
  if (attractions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tourist Attractions</h1>
          <p className="text-gray-600">No attractions data available for {cityName} yet.</p>
        </div>
      </div>
    );
  }

  const pageData = {
    city: cityName,
    citySlug: city,
    attractions: attractions
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
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
        "name": "Tourist Attractions",
        "item": "https://www.trivenicabs.in/tourist-spots"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cityName,
        "item": `https://www.trivenicabs.in/tourist-attractions/${city}`
      }
    ]
  };

  // TouristDestination schema
  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": cityName,
    "description": `Discover ${attractions.length} amazing tourist attractions in ${cityName}. From historical monuments to spiritual sites, explore the best places to visit.`,
    "touristType": ["Adventure", "Cultural", "Sightseeing"],
    "containsPlace": attractions.slice(0, 10).map(attraction => ({
      "@type": "TouristAttraction",
      "name": attraction.name,
      "description": attraction.description
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationSchema) }}
      />
      <TouristAttractionsClient data={pageData} />
    </>
  );
}