import { notFound } from 'next/navigation';
import { getAllHowToReachCities, getHowToReachCityData } from '@/utilis/howToReachData';
import HowToReachClient from '@/components/content/HowToReachClient';

// ISR - Revalidate every hour
export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  const cities = getAllHowToReachCities();
  return cities.map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { city } = resolvedParams;

  const cityData = getHowToReachCityData(city);
  if (!cityData) {
    return {
      title: 'How to Reach - Travel Guide | Triveni Cabs',
      description: 'Complete travel guide on how to reach popular Indian destinations by air, train, road and bus.',
    };
  }

  return {
    title: cityData.title,
    description: cityData.metaDescription,
    keywords: [
      `how to reach ${cityData.name}`,
      `how to reach ${cityData.name} by car`,
      `how to reach ${cityData.name} by train`,
      `how to reach ${cityData.name} by bus`,
      `how to reach ${cityData.name} from delhi`,
      `${cityData.name} travel guide`,
      `${cityData.name} airport`,
      `${cityData.name} railway station`,
      `cab to ${cityData.name}`,
      `taxi to ${cityData.name}`,
      `${cityData.name} road trip`,
      `best way to reach ${cityData.name}`,
    ],
    alternates: {
      canonical: `https://www.trivenicabs.in/how-to-reach-${city}`,
    },
    openGraph: {
      title: cityData.title,
      description: cityData.metaDescription,
      url: `https://www.trivenicabs.in/how-to-reach-${city}`,
      siteName: 'Triveni Cabs',
      locale: 'en_IN',
      type: 'article',
    },
  };
}

export default async function HowToReachPage({ params }) {
  const resolvedParams = await params;
  const { city } = resolvedParams;

  const cityData = getHowToReachCityData(city);
  if (!cityData) {
    notFound();
  }

  return <HowToReachClient cityData={cityData} />;
}
