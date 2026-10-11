// Server component. The 'use client' directive was removed because this file
// has no state, effects, event handlers or browser APIs — it was being
// serialised into the hydration payload and re-executed in the browser for
// no reason. Re-add the directive if interactivity is introduced here.
// src/components/cityroute/CityRouteVehicles.jsx
//
// Redesigned vehicle grid for the city-route page — premium, mobile-first,
// uncropped product images (via VehicleCard). Presentational: parent passes the
// already-priced vehicle list + trip type + a book handler.
//
// vehicles: [{ name, image, seats, price, ratePerKm?, features?[], popular? }]


import VehicleCard from '@/components/ui/VehicleCard';
import AuroraHeading from '@/components/ui/AuroraHeading';

export default function CityRouteVehicles({
  from,
  to,
  vehicles = [],
  tripType = 'oneWay',
  onBook,
}) {
  if (!vehicles.length) return null;
  const priceLabel = tripType === 'roundTrip' ? 'Round Trip' : 'One Way';

  return (
    <section className="bg-aurora-light relative overflow-hidden py-14 sm:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AuroraHeading
          eyebrow="Choose your ride"
          title={`${from} to ${to}`}
          highlight="fleet"
          subtitle="AC vehicles · verified drivers · fixed all-inclusive fares. Tap to book on WhatsApp in seconds."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {vehicles.map((v, i) => (
            <VehicleCard
              key={v.name + i}
              name={v.name}
              image={v.image}
              seats={v.seats}
              price={v.price}
              priceLabel={priceLabel}
              ratePerKm={v.ratePerKm}
              features={v.features || ['GPS', 'Music', 'Charger', 'Water']}
              popular={v.popular || i === 0}
              badge={i === 0 ? 'Best Value' : undefined}
              tone="light"
              ctaLabel="Book Now"
              onCta={() => onBook?.(v)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
