// Week 49 (Workstream E, corporate and event pass): the fleet-and-rate table
// the corporate city, industry and event-type pages lacked. The rows are the
// corporate fleet records the pages already render as cards (name, seats,
// what each is for, the per-kilometre rate), now also printed as a plain
// table with a question-shaped heading, after the per-kilometre figures were
// brought to the rate card (week-49-g-per-km-figures.md).
import DataTable from './DataTable';
import { corporateFleet } from '@/utilis/corporateTransportData';

export default function CorporateFleetTable({ city = '', context = 'corporate travel' }) {
  const rows = (corporateFleet || []).filter((v) => v && v.name).map((v) => ({
    name: v.name,
    capacity: v.capacity || '',
    vehicles: Array.isArray(v.vehicles) ? v.vehicles.join(', ') : '',
    rate: v.priceRange || '',
    ideal: v.ideal || '',
  }));
  if (rows.length < 2) return null;
  const where = city ? ` in ${city}` : '';
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <DataTable
        title={`Which vehicle suits ${context}${where}, and what does it cost per kilometre?`}
        caption={`Corporate fleet${where}: seats, models, per-kilometre rate and best use`}
        intro="Rates are per kilometre with driver and fuel included; tolls, parking and state permits are extra at actuals. Outstation journeys bill a 300 km minimum per day."
        columns={[
          { key: 'name', label: 'Vehicle', strong: true },
          { key: 'capacity', label: 'Seats' },
          { key: 'vehicles', label: 'Models' },
          { key: 'rate', label: 'Rate', align: 'right' },
          { key: 'ideal', label: 'Best for' },
        ]}
        rows={rows}
        footnote="Sedan ₹11/km, Ertiga ₹15/km, Innova Crysta ₹18/km, 12-seater Tempo Traveller ₹23/km on the published rate card; Force Urbania and coaches on their own published rates."
      />
    </section>
  );
}
