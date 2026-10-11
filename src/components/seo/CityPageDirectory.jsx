import { cityDirectory } from '@/lib/seo/site-directory';

export default function CityPageDirectory({ city }) {
  const groups=cityDirectory(city);
  if(!groups.length) return null;
  return <section className="mx-auto max-w-6xl px-4 py-10 text-slate-900">
    <h2 className="text-2xl font-bold">Which {city} service or travel guide do you need?</h2>
    <p className="mt-2 text-slate-600">Browse services in {city} and journeys to or from the city.</p>
    <div className="mt-5 space-y-3">{groups.map(group=><details key={group.name} className="rounded-xl border border-slate-200 bg-white p-4">
      <summary className="cursor-pointer font-semibold">{group.name} ({group.links.length})</summary>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{group.links.map(link=><li key={link.href}><a className="text-sm text-slate-700 underline hover:text-amber-700" href={link.href}>{link.label}</a></li>)}</ul>
    </details>)}</div>
  </section>;
}
