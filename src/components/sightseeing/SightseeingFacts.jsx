import OutboundCitations from '@/components/seo/OutboundCitations';
import { getCitationsForRoute } from '@/utilis/outboundCitations';

// Rendered on the server and passed through the interactive template as a slot.
// No complete citation dataset or second calculator is sent to the browser.
export default function SightseeingFacts({ tour, city }) {
  const prices=['sedan','suv','tempoTraveller','carRental'].map(key=>Number(tour.price?.[key])).filter(n=>Number.isFinite(n)&&n>0);
  const fare=prices.length ? Math.min(...prices) : null;
  const facts=[
    ['Tour',tour.name],['Duration',tour.duration],
    ...(fare ? [['Published starting fare',`₹${fare.toLocaleString('en-IN')} per tour`]] : []),
    ...(tour.groupSize ? [['Group size',tour.groupSize]] : []),
    ...(tour.bestTimeToVisit ? [['Best time',tour.bestTimeToVisit]] : []),
  ];
  const citations=city?getCitationsForRoute({from:'',to:city,context:'sightseeing'}):[];
  return <section className="bg-slate-950 px-4 py-12 text-white">
    <div className="mx-auto max-w-5xl">
      <h2 className="text-2xl font-bold">What are the key facts for {tour.name}?</h2>
      <dl className="key-facts key-stats mt-6 grid gap-5 sm:grid-cols-2">{facts.filter(([,value])=>typeof value==='string'||typeof value==='number').map(([label,value])=><div key={label} className="rounded-xl border border-white/10 p-4"><dt className="text-sm text-slate-400">{label}</dt><dd className="mt-1 font-semibold">{value}</dd></div>)}</dl>
      <p className="mt-5 text-sm text-slate-300">The vehicle fare table above gives the complete-tour prices. Extra distance and optional activities follow the terms listed on this tour.</p>
      <p className="mt-3 text-xs text-slate-400">Content updated <time dateTime="2026-09-13">13 September 2026</time></p>
      {citations.length>0 && <div className="mt-8"><OutboundCitations sources={citations} tone="dark" heading={`Further reading for your ${city} visit`} /></div>}
    </div>
  </section>;
}
