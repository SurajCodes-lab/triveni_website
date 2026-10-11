import { Suspense } from 'react';
import SearchResultsClient from './SearchResultsClient';
// The route lookup and the city list are resolved here so that
// cityRoutesData.js (470 KiB) never reaches the browser.
import { searchRoute, getAllCities } from '@/lib/searchUtils';
import { tightenTitle } from '@/lib/seo/serp-ctr';
export const revalidate = 3600;

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const from = params?.from || '';
  const to = params?.to || '';
  const type = params?.type || 'oneway';

  if (from && to) {
    const fromDisplay = from.charAt(0).toUpperCase() + from.slice(1);
    const toDisplay = to.charAt(0).toUpperCase() + to.slice(1);
    const tripLabel = type === 'roundtrip' ? 'Round Trip' : 'One Way';

    return {
      title: tightenTitle(`${fromDisplay} to ${toDisplay} Cab — ${tripLabel} from ₹11/km`),
      description: `Book ${fromDisplay} to ${toDisplay} ${tripLabel.toLowerCase()} cab at lowest prices. Sedan, SUV, Tempo Traveller & Bus options available. 24/7 service, no hidden charges. Call 7668570551.`,
      alternates: {
        canonical: `https://www.trivenicabs.in/search?from=${from}&to=${to}&type=${type}`,
      },
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: 'Search Cabs — Triveni Cabs™ | Find Best Prices',
    description: 'Search and compare cab prices across 500+ routes. Sedan, SUV, Tempo Traveller & Bus options. Book instantly via WhatsApp or call.',
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const from = params?.from || '';
  const to = params?.to || '';
  const type = params?.type || 'oneway';
  const result = from && to ? searchRoute(from, to, type) : null;

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 pt-14 sm:pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#FACF2D] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-500 text-sm">Finding best prices...</p>
        </div>
      </div>
    }>
      <SearchResultsClient result={result} cities={getAllCities()} />
    </Suspense>
  );
}
