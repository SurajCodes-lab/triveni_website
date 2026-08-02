/**
 * SemanticComparison — server-rendered Q&A + semantic <table> for any page
 * backed by the `comparisonData` shape (vehicle1 / vehicle2 / comparisonPoints).
 *
 * Why this exists: AEO/GEO standard S10. AI engines extract <table> elements
 * as discrete data chunks for "X vs Y" queries. The existing ComparisonClient
 * is a dark-themed visual hero — beautiful for humans, opaque to AI parsers
 * because the data sits in styled <div>s. This component renders the SAME
 * data in semantic HTML at the top of the page so AI engines have a clean
 * extractable surface above the visual experience.
 *
 * Drop into any vehicle-vs-vehicle page above <ComparisonClient data={data} />.
 */
import ComparisonTable from './ComparisonTable';

export default function SemanticComparison({ data }) {
  if (!data?.vehicle1 || !data?.vehicle2) return null;
  const { vehicle1: v1, vehicle2: v2 } = data;

  const tableHeaders = ['Feature', v1.name, v2.name];
  const tableRows = [
    v1.seating && v2.seating && ['Capacity', v1.seating, v2.seating],
    v1.category && v2.category && ['Category', v1.category, v2.category],
    v1.ratePerKm && v2.ratePerKm && ['Per-km rate', v1.ratePerKm, v2.ratePerKm],
    v1.minimumCharge && v2.minimumCharge && ['Minimum charge', v1.minimumCharge, v2.minimumCharge],
    v1.acType && v2.acType && ['AC type', v1.acType, v2.acType],
    v1.fuelType && v2.fuelType && ['Fuel', v1.fuelType, v2.fuelType],
    v1.mileage && v2.mileage && ['Mileage', v1.mileage, v2.mileage],
    v1.bootSpace && v2.bootSpace && ['Boot space', v1.bootSpace, v2.bootSpace],
    typeof v1.comfort === 'number' && typeof v2.comfort === 'number' && ['Comfort score', `${v1.comfort} / 10`, `${v2.comfort} / 10`],
  ].filter(Boolean);

  return (
    <section className="bg-white py-10" aria-label="At-a-glance comparison">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="speakable-headline text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          {data.title}
        </h1>
        <p className="speakable-lead text-slate-700 mb-6 leading-relaxed">{data.metaDescription}</p>

        <ComparisonTable
          caption={`${v1.name} vs ${v2.name} — head-to-head specifications (May 2026)`}
          headers={tableHeaders}
          rows={tableRows}
        />
      </div>
    </section>
  );
}
