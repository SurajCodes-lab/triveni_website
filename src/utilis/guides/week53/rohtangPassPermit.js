// Week 53 answer-proof guide 1 — "Rohtang pass permit: how to get one, and when
// you do not need one at all"
//
// WHY THIS SHAPE
// The Week 53 plan calls for guides in "answer-proof shapes": cost, comparison,
// permit, seasonal-access and logistics questions — deliberately NOT timings and
// ticket prices, which Google answers inline and which the attraction guides on
// this site convert at 0.23% to 0.38% for. The one existing guide in an
// answer-proof shape converts at 1.04%.
//
// A permit question is the cleanest example of the type. It has a definite
// answer, that answer changes with the season and the rules, no search panel
// carries it reliably, and getting it wrong costs somebody a day of their
// holiday at a barrier.
//
// The single most useful thing this page does is tell most readers they do not
// need the permit at all, because the Atal tunnel has made Rohtang optional for
// anyone whose actual destination is Lahaul.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'rohtang-pass-permit-guide',
  path: '/rohtang-pass-permit-guide',
  mood: 'hills',
  cluster: 'logistics',
  publishedOn: '2026-10-12',
  updatedOn: '2026-10-12',

  eyebrow: 'Permit guide · Himachal',
  crumbs: [{ name: 'Manali sightseeing', url: '/sightseeing/manali' }],
  crumbName: 'Rohtang pass permit',
  titleLead: 'The Rohtang pass permit:',
  titleAccent: 'how to get one, and when you do not need it',
  title: 'The Rohtang Pass Permit: How to Get One, and When You Do Not Need It',
  metaTitle: 'Rohtang Pass Permit 2026: Rules, Cap, and the Tunnel Option',
  metaDescription: 'Rohtang pass permit explained: who needs one, the daily vehicle cap, the closed days, what it costs, and why the Atal tunnel means most travellers to Lahaul need no permit at all.',
  keywords: ['rohtang pass permit', 'rohtang permit online booking', 'rohtang pass permit cost', 'do i need a permit for rohtang', 'rohtang vehicle cap', 'atal tunnel permit', 'rohtang pass opening date', 'manali to rohtang permit rules'],
  heroImage: `${IMG}/Manali/Atal tunnel ,.jpg`,
  heroAlt: 'The Atal tunnel above Manali, which reaches Lahaul without crossing Rohtang',

  lead: 'Most people asking about a Rohtang permit do not need one. Rohtang is a 3,978-metre pass above Manali that requires a permit, is subject to a daily cap on vehicles, closes one day a week for maintenance and is shut by snow for a large part of the year. But since the Atal tunnel opened beneath it, Lahaul — Sissu, Keylong, the Chandra valley, almost everything people actually went over Rohtang to reach — needs no permit at all. The permit is only for crossing the pass itself, which is now a scenic choice rather than a route.',

  keyFacts: [
    { label: 'Permit needed for', value: 'The pass itself, not Lahaul' },
    { label: 'Tunnel alternative', value: 'No permit required' },
    { label: 'Daily vehicle cap', value: 'Yes, limited and quota-based' },
    { label: 'Usually open', value: 'Late May to October' },
  ],
  stickyLabel: 'Manali and Lahaul cab',
  stickyPrice: 'Chauffeur-driven · fare fixed',
  waText: 'Hi, I want to visit Rohtang or Lahaul from Manali. Please advise on the permit and the current road position.',

  intro: [
    'This page exists because the commonest Rohtang question is asked for the wrong reason. People want to see snow, a high pass and the Lahaul side, and they have read that Rohtang needs a permit, so they set about getting one. In most cases the Atal tunnel gets them somewhere better with no paperwork at all.',
    'What follows is the position as it stands: who genuinely needs the permit, what the restrictions are, what the tunnel changed, and the honest comparison between the two. Permit rules and the daily cap are set by the Himachal authorities and the NGT directions behind them, and they do change — so the last section is about how to check rather than what to assume.',
    'We run this route through the season with drivers who do it weekly, and if you book with us we handle the permit where one is needed and tell you the current road position before you travel rather than at the barrier.',
  ],

  table: {
    title: 'Rohtang pass or the Atal tunnel: what each requires',
    caption: 'Comparison of the Rohtang pass route and the Atal tunnel route from Manali — permit, cap, season and what each reaches',
    intro: 'The single decision this page is for. If your destination is in Lahaul rather than the pass itself, the right column is almost always the answer.',
    columns: [
      { key: 'item', label: '' },
      { key: 'rohtang', label: 'Over Rohtang pass' },
      { key: 'tunnel', label: 'Through the Atal tunnel' },
    ],
    rows: [
      { item: 'Permit required', rohtang: 'Yes', tunnel: 'No' },
      { item: 'Daily vehicle cap', rohtang: 'Yes — a limited quota', tunnel: 'No cap' },
      { item: 'Weekly closure', rohtang: 'One maintenance day a week', tunnel: 'None scheduled' },
      { item: 'Typical season', rohtang: 'Late May to October', tunnel: 'Most of the year, weather permitting' },
      { item: 'Altitude', rohtang: '3,978 m at the top', tunnel: '3,100 m at the portal' },
      { item: 'Time from Manali', rohtang: '2.5–4 hrs to the top, traffic-dependent', tunnel: '45–60 min to Sissu' },
      { item: 'Reaches Lahaul', rohtang: 'Yes', tunnel: 'Yes, faster' },
      { item: 'Reaches Spiti', rohtang: 'Via Gramphu and Kunzum La, Jun–Oct', tunnel: 'Same onward road' },
      { item: 'The view', rohtang: 'The pass and the Rohtang snowline', tunnel: 'Chandra valley, Sissu falls, Keylong' },
    ],
    footnote: 'The permit, the cap and the closed day are set by the Himachal authorities and have changed several times in recent years. Treat the shape of this table as reliable and the specific numbers as something to confirm close to your travel date — see the last section.',
  },

  sections: [
    {
      eyebrow: 'Who needs it',
      heading: 'Do you actually need a Rohtang permit?',
      paras: [
        'You need one only if you are crossing the Rohtang pass itself. That means driving up the old Manali-Leh road through Marhi to the top of the pass, whether as a destination or to continue beyond it on that road.',
        'You do not need one for the Atal tunnel. The tunnel runs beneath the pass from south portal near Dhundi to north portal at Teling, and it is open to traffic without a Rohtang permit. Everything in Lahaul reached through it — Sissu, Tandi, Keylong, Jispa, the Chandra valley — needs no permit.',
        'You do not need one for Solang, Gulaba or the snow points below the pass, which is where a great many Manali visitors actually want to go. Those are on the Manali side of Rohtang and are reached on an ordinary local trip.',
        'And you do not need one for Spiti via Kinnaur — the Shimla, Narkanda, Sarahan and Kalpa approach — which requires an inner line permit near the border instead and is a different document entirely.',
      ],
      link: { label: 'Inner line permit for Kinnaur and Spiti', href: '/inner-line-permit-kinnaur-spiti' },
      image: { src: `${IMG}/Manali/Gulaba_Snow point with adventure activities.jpg`, alt: 'The Gulaba snow point below Rohtang on the Manali side', tag: 'Gulaba', caption: 'Gulaba and Solang are below the pass and need no permit — which covers what most Manali visitors are actually looking for.' },
    },
    {
      eyebrow: 'The restrictions',
      heading: 'The cap, the closed day and why a permit is not a guarantee',
      paras: [
        'Rohtang carries a daily cap on the number of vehicles allowed up, introduced on environmental grounds and enforced through a quota of permits issued per day, split between petrol and diesel vehicles. The quota is finite and in the peak weeks of June and July it is taken well before the day itself.',
        'There is also a weekly maintenance closure — one day each week when the pass is closed to tourist traffic entirely. Which day it falls on has changed over the years, which is exactly why this page does not state it as a fact to rely on.',
        'The practical consequence is that a Rohtang permit is permission to attempt the pass on a given date, not an assurance of reaching the top. Snow, a landslide above Marhi, or a decision by the authorities on the morning can close it with a permit in your hand. Build the day so a closure is a disappointment rather than a ruined itinerary — and if snow is what you came for, Solang and Gulaba deliver it with no uncertainty at all.',
      ],
      link: { label: 'Weekend getaways from Manali', href: '/weekend-getaways-from-manali-by-car' },
    },
    {
      eyebrow: 'What changed',
      heading: 'What the Atal tunnel actually did to this question',
      paras: [
        'Before the tunnel, Rohtang was not a scenic option — it was the only road to Lahaul, Keylong and the Leh highway, and it was open for a few months a year. Everything about the permit culture around it comes from that era, when crossing the pass was a necessity.',
        'The tunnel changed the geography. It is 9.02 km long, runs under the pass, and puts Sissu 45 to 60 minutes from Manali against two and a half to four hours to the top of Rohtang. It stays usable for far more of the year, and the Chandra valley it opens onto — Sissu with its waterfall, Tandi at the confluence, Keylong — is a more interesting destination than the pass, not a lesser one.',
        'So the honest advice for most travellers is: take the tunnel. Go to Sissu or Keylong, see a genuinely different landscape with almost no trees in it, and skip the permit entirely. Cross Rohtang only if the pass itself is the thing you want, which is a legitimate reason and a much smaller group of people than the search volume suggests.',
      ],
      link: { label: 'Manali sightseeing', href: '/sightseeing/manali' },
    },
    {
      eyebrow: 'How to check',
      heading: 'Confirming the current position rather than trusting a page',
      paras: [
        'Permit rules, the daily quota, the fee and the closed day have all changed more than once in recent years, and any page — including this one — that states them as fixed numbers will eventually be wrong. What does not change is the shape: a permit for the pass, a cap on vehicles, a weekly closure, and no permit for the tunnel.',
        'The permit itself is issued through the Himachal authorities’ online system and at the Manali end, and in the peak season the online quota is the only realistic route. If you are travelling with us, we arrange it as part of the booking and tell you if the quota for your date has gone.',
        'For the road position on the day — whether the pass or the tunnel is open, and whether conditions have closed the approach — the useful check is the morning, not the week before. Our drivers on this route check before setting out, and we would rather tell you at breakfast that the pass is shut than take you to Marhi to find out.',
      ],
      link: { label: 'When Rohtang and the Atal tunnel are open', href: '/when-does-rohtang-and-atal-tunnel-open' },
    },
  ],

  tips: [
    { title: 'If snow is the goal, you do not need Rohtang', text: 'Solang and Gulaba are below the pass, need no permit, and carry snow for much of the season. A great many Rohtang permit applications are really snow requests.' },
    { title: 'The tunnel is the better destination, not just the easier route', text: 'Sissu, Tandi and Keylong are a treeless high valley 45 minutes from a forested one. That contrast is more striking than the view from the pass.' },
    { title: 'A permit is not a guarantee', text: 'Snow, a slide above Marhi or a decision on the morning can close the pass with your permit issued. Plan the day so a closure costs you an afternoon, not the trip.' },
    { title: 'Spiti via Kinnaur is a different document', text: 'The Shimla-Sarahan-Kalpa approach needs an inner line permit near the border, not a Rohtang permit. Do not confuse the two when planning a Spiti loop.' },
    { title: 'Ask us the morning of, not the week before', text: 'The road position changes daily in the shoulder season. Our drivers check before setting out, which is more useful than any forecast made in advance.' },
  ],

  faqs: [
    { question: 'Do I need a permit for the Atal tunnel?', answer: 'No. The Atal tunnel is open to traffic without a Rohtang permit, and everything it reaches in Lahaul — Sissu, Tandi, Keylong, Jispa and the Chandra valley — needs no permit either. The Rohtang permit applies only to crossing the pass itself on the old road through Marhi.' },
    { question: 'Do I need a Rohtang permit for Solang valley?', answer: 'No. Solang and Gulaba are on the Manali side below the pass and are reached on an ordinary local trip with no permit. This is worth knowing because snow is what most people are actually after, and Solang has it for much of the season without any paperwork.' },
    { question: 'How do I get a Rohtang pass permit?', answer: 'Through the Himachal authorities\' online permit system, with a limited daily quota split between petrol and diesel vehicles, and at the Manali end. In the June and July peak the online quota is the only realistic route and it is taken well before the date. If you travel with us we arrange it as part of the booking and tell you if the quota for your date has gone.' },
    { question: 'Is there a limit on vehicles going to Rohtang?', answer: 'Yes. A daily cap on the number of vehicles allowed up is enforced through the permit quota, introduced on environmental grounds. There is also a weekly maintenance day when the pass is closed to tourist traffic entirely. Both the cap and the closed day have changed over the years, so confirm close to your travel date rather than relying on any published figure.' },
    { question: 'When is the Rohtang pass open?', answer: 'Usually late May to October, varying by several weeks each year with the snow. The Atal tunnel is usable for considerably more of the year, which is the main practical reason to take it. In the shoulder weeks at either end, the position changes day to day and the only useful check is on the morning itself.' },
    { question: 'Is Rohtang or the Atal tunnel better?', answer: 'The tunnel, for almost everyone. It needs no permit, has no cap, takes 45 to 60 minutes to Sissu against two and a half to four hours to the top of the pass, is open far more of the year, and opens onto the Chandra valley, which is a more interesting landscape than the pass. Cross Rohtang only if the pass itself is what you came for.' },
  ],

  related: [
    { label: 'Manali sightseeing', href: '/sightseeing/manali' },
    { label: 'Inner line permit for Kinnaur and Spiti', href: '/inner-line-permit-kinnaur-spiti' },
    { label: 'When Rohtang and the Atal tunnel are open', href: '/when-does-rohtang-and-atal-tunnel-open' },
    { label: 'Weekend getaways from Manali', href: '/weekend-getaways-from-manali-by-car' },
    { label: 'The nine-day Himachal grand circuit', href: '/himachal-grand-circuit-by-car' },
    { label: 'Delhi to Manali distance and fare', href: '/distance/delhi-to-manali' },
    { label: 'Sedan or SUV for hill roads', href: '/sedan-or-suv-for-hill-roads' },
    { label: 'Monthly car rental in Manali', href: '/monthly-car-rental-manali' },
  ],
};
