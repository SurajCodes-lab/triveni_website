import Link from 'next/link';

const guides = {
  lucknow: {
    title: 'Plan your Lucknow sightseeing day before you book',
    intro: 'Choose the stops, vehicle and return plan together. A sightseeing cab covers transport; monument tickets, guides and food remain separate unless the confirmed quote says otherwise.',
    sections: [
      ['Choose a realistic sequence', 'Bara Imambara, Rumi Darwaza, Chota Imambara, British Residency and Hazratganj need travel, walking and visit time. Mark optional stops so the driver can protect your return time.'],
      ['Match the vehicle to the group', 'Share passenger count, bags and any mobility requirement before selecting a sedan, SUV or Tempo Traveller. A seat count alone does not confirm luggage space or entrance access.'],
      ['Confirm the pickup and return', 'Send the hotel or station pin, agree the accessible drop point and state whether the vehicle waits for the full day or returns at a fixed time. Ask for parking, tolls, waiting and extra-hour terms in writing.']
    ],
    links: [
      ['Lucknow city sightseeing tours', '/sightseeing/lucknow'],
      ['Lucknow cab service', '/lucknow'],
      ['Lucknow wedding and group vehicles', '/tempo-traveller/lucknow']
    ]
  }
};

export default function SightseeingPlanningGuide({ city, tourSlug }) {
  const guide = guides[String(city || '').toLowerCase()];
  if (!guide) return null;
  return (
    <section id="sightseeing-planning" className="mx-auto mt-10 max-w-6xl rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-7" aria-labelledby="sightseeing-planning-heading">
      <h2 id="sightseeing-planning-heading" className="text-xl font-bold text-slate-900 sm:text-2xl">{guide.title}</h2>
      <p className="mt-3 leading-relaxed text-slate-700">{guide.intro}</p>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {guide.sections.map(([heading, text]) => <div key={heading}><h3 className="font-semibold text-slate-900">{heading}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{text}</p></div>)}
      </div>
      <nav aria-label="Lucknow sightseeing planning links" className="mt-5 flex flex-wrap gap-3 border-t border-emerald-200 pt-4">
        {guide.links.filter(([_, href]) => href !== `/sightseeing/${tourSlug}`).map(([label, href]) => <Link key={href} href={href} className="inline-flex min-h-11 items-center rounded-lg border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-100">{label}</Link>)}
      </nav>
    </section>
  );
}
