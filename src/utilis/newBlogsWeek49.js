/**
 * New Blogs - Week 49 (September 2026): 7 question-first blog posts for
 * Workstream A. Each article opens with a fact-first answer, carries at least
 * one real table, a short FAQ block and 2-4 in-body links to money pages.
 *
 * Sources: every distance, drive time and toll is the one the site's own
 * pages publish (src/utilis/distanceData.js, tollCostData.js, the one-way
 * corridor files, chardhamData.js and busRoutesData.js); every fare is the
 * rate card in src/utilis/pricing.js (Sedan ₹11/km, Ertiga/SUV ₹15, Innova
 * Crysta ₹18, 12-seater Tempo Traveller ₹23, 300 km per day minimum; local
 * 4 hr / 40 km ₹2,200 for a sedan; tolls and parking at actuals). Where the
 * site holds no figure (temple timings, permit fees, safari slot prices,
 * ceremony times) the post gives the sequence and says where to check.
 * IDs: 92001-92007 (no collision with existing blog IDs).
 */

const newBlogsWeek49 = [
  // 1 ============================================================
  {
    id: 92001,
    slug: 'wagah-border-ceremony-from-amritsar-by-cab',
    title: 'Wagah Border Ceremony from Amritsar: How to Reach by Cab, When to Leave, What to Expect',
    excerpt: 'The Wagah Border is 30 km west of Amritsar, 30 to 45 minutes by cab on the GT Road. When to leave the city, how the seating and the wait work, what the ceremony is like, and what the cab costs on the local package.',
    relatedTours: [
      { id: "amritsar-local", name: "Amritsar Local Taxi", slug: "local-taxi/amritsar", city: "amritsar", price: "From ₹2,200" },
      { id: "delhi-amritsar", name: "Delhi to Amritsar Cab", slug: "delhi-to-amritsar", city: "delhi", price: "From ₹11/km" }
    ],
    relatedDestinations: [
      { name: "Amritsar", slug: "amritsar", type: "city" },
      { name: "Delhi", slug: "delhi", type: "city" }
    ],
    primaryCTA: {
      text: "Book an Amritsar cab for Wagah",
      link: "/local-taxi/amritsar"
    },
    content: `<p class="blog-lead">The <strong>Wagah Border</strong> is 30 km west of Amritsar on the GT Road, a drive of 30 to 45 minutes by cab. The flag-lowering ceremony is held every evening in the late afternoon, earlier in winter and later in summer, and the gates fill well before it starts, so the cab leaves the city in the early afternoon rather than an hour before. The run is priced on the Amritsar local package: the 4 hour / 40 km package at ₹2,200 for a sedan covers the drive out, and most Wagah runs, with the wait and the return, are booked on the 8 hour / 80 km package at ₹3,800. Book it with an <a href="/local-taxi/amritsar" class="text-blue-600 hover:underline font-semibold">Amritsar local taxi</a>, or arrive from the capital on a <a href="/delhi-to-amritsar" class="text-blue-600 hover:underline font-semibold">Delhi to Amritsar cab</a> timed for the ceremony.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">How far is Wagah from Amritsar, and how long does the cab take?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Our Amritsar to Wagah Border distance page puts it at 30 km and 30 to 45 minutes on the GT Road, and that is the honest figure on an ordinary afternoon. The road runs due west out of the city past the airport turn and through Attari village to the border gate, and it is good tarmac the whole way. What stretches the time is not the road but the last kilometre: every car heading for the ceremony arrives in the same two hours, the parking is a walk from the gate, and the queue at the security check moves at the pace of a crowd. A cab that leaves Amritsar early is at the gate before the queue exists; a cab that leaves late is in it.</p>
<p class="text-gray-700 leading-relaxed mb-4">The driver drops you at the parking, you walk the last stretch to the stands, and the same driver waits for the ceremony to end and the crowd to clear. That wait is why the Wagah run is a local package and not a distance fare: the car is with you for the afternoon, not for 60 km.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Wagah from Amritsar at a glance</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Detail</th>
<th class="border border-gray-300 px-4 py-2 text-left">What our pages say</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Distance from Amritsar</td><td class="border border-gray-300 px-4 py-2">30 km, GT Road west through Attari</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Drive time</td><td class="border border-gray-300 px-4 py-2">30 to 45 minutes, longer in the last kilometre before the ceremony</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Ceremony</td><td class="border border-gray-300 px-4 py-2">Every evening, late afternoon; earlier in winter, later in summer. Confirm the current time on the day</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">When the cab leaves the city</td><td class="border border-gray-300 px-4 py-2">Early afternoon; the distance page suggests reaching about two hours before the start for a seat</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Cab pricing</td><td class="border border-gray-300 px-4 py-2">Local package: 4 hr / 40 km at ₹2,200 (sedan) or 8 hr / 80 km at ₹3,800 for the full afternoon</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">From Delhi</td><td class="border border-gray-300 px-4 py-2">450 km on NH-44, 7 to 8 hours, five toll plazas totalling ₹585 for a car</td></tr>
</tbody></table>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">When should I leave Amritsar for the Wagah ceremony?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Early afternoon, and earlier than feels necessary. The ceremony begins in the late afternoon and its start moves with the season, earlier in the short winter days and later in summer, so the first thing to do on the morning of the visit is confirm the current time; the driver will know it, and the Border Security Force publishes it. From that time, work backwards: the stands fill in the two hours before the start, the security check takes as long as the crowd in front of you, and the walk from the parking to the seats is a real walk. Our own distance page says to reach about two hours early for a good seat, and that is the rule our drivers plan to.</p>
<p class="text-gray-700 leading-relaxed mb-4">In practice that means lunch in the city, then the car at your hotel by early afternoon in summer and a little earlier in winter. If you are doing the Golden Temple and Jallianwala Bagh the same day, our <a href="/sightseeing/amritsar" class="text-blue-600 hover:underline font-semibold">Amritsar full-day sightseeing tour</a> puts the temple and the memorial in the morning, lunch after, and the drive to Wagah in the middle of the afternoon; the driver knows precisely when to leave so the timing is not your problem.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What to expect at the ceremony</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Security first.</strong> Bags are checked and the list of what may be carried in is short; leave luggage in the car and carry a phone, water and an ID.</li>
<li class="ml-4"><strong>The stands.</strong> Seating is open, with sections set aside for foreign nationals and for VIP passes; ask the driver about reserved seating if you want it arranged in advance, and check the current rules on the day.</li>
<li class="ml-4"><strong>The build-up.</strong> An hour of music, flag-waving and crowd-chanting before the guards appear; this is where the early arrivals earn their seats.</li>
<li class="ml-4"><strong>The drill.</strong> The Border Security Force and the Pakistan Rangers perform the synchronised high-kicking retreat on either side of the gate, the flags are lowered together and the gates close at sunset.</li>
<li class="ml-4"><strong>The exit.</strong> Everyone leaves at once. The driver waits at the agreed spot, and the drive back to the city is slow for the first kilometre and normal after that.</li>
</ul>
<p class="text-gray-700 leading-relaxed mb-4">Cover your head and shoulders in the sun, carry water in summer and a warm layer in winter, and do not plan anything in the city for the hour after the ceremony ends; the crowd leaving Wagah is the crowd you will be in.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What does the cab to Wagah cost?</h2>
<p class="text-gray-700 leading-relaxed mb-4">A 30 km run does not bill as an outstation trip. Below 100 km our routes are priced on the published local package, and the Wagah run is the clearest case: the 4 hour / 40 km package is ₹2,200 for a sedan, ₹2,500 for an Ertiga or SUV and ₹2,800 for an Innova Crysta, with distance beyond 40 km added at the normal per-kilometre rate. The drive out is inside the package; the drive back makes the round trip 60 km, and the two-hour wait plus the ceremony makes the afternoon longer than four hours, so most Wagah bookings go on the 8 hour / 80 km package, ₹3,800 for a sedan, which covers the whole afternoon and evening without the meter running. Fuel and the driver are inside those figures; parking at Wagah is at actuals.</p>
<p class="text-gray-700 leading-relaxed mb-4">If Wagah is part of a full day in the city, the sightseeing tour bundles the Golden Temple, Jallianwala Bagh, the Partition Museum and the border into one booking with one driver, which is simpler than two local packages.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Coming from Delhi for the ceremony</h2>
<p class="text-gray-700 leading-relaxed mb-4">Delhi to Amritsar is 450 km on NH-44, the Grand Trunk Road, through Karnal, Ambala, Ludhiana and Jalandhar, seven to eight hours with five FASTag plazas that take ₹585 from a car one-way. At the rate card a sedan is ₹4,950 one-way at ₹11/km, an Ertiga or SUV ₹6,750, an Innova Crysta ₹8,100 and a 12-seater Tempo Traveller ₹10,350; tolls are extra at actuals. Our one-way page recommends a pre-dawn start so that the car reaches Amritsar in the early afternoon and carries straight on to Wagah for the ceremony, with the Golden Temple after dark the same evening. That is the best first day in Amritsar there is, and the <a href="/delhi-to-amritsar" class="text-blue-600 hover:underline font-semibold">Delhi to Amritsar cab page</a> is where to book it.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What else fits the same afternoon?</h2>
<p class="text-gray-700 leading-relaxed mb-4">The road to Wagah passes close to the Durgiana Temple, the Hindu temple built in the style of the Golden Temple and set in its own tank, and our sightseeing tour puts it on the way out or the way back if there is time. Gobindgarh Fort, with its evening sound-and-light show, and Maharaja Ranjit Singh's summer palace and museum are the other stops the tour offers; the Partition Museum, next to Jallianwala Bagh, belongs to the morning with the memorial rather than to the Wagah run. None of these is worth missing the gate for, and the driver will say so if the clock is tight.</p>
<p class="text-gray-700 leading-relaxed mb-4">After the ceremony the crowd heads back to the city together, and the sensible plan is to let it. Dinner in the city, then the Golden Temple again after dark, when it is lit and quieter than in the morning, is the evening our tour recommends, and it needs no timing at all: the car drops you at the edge of the temple quarter and the rest is on foot. If you are driving back to Delhi the next day, the pre-dawn start that works on the way up works in reverse, with the five plazas and the seven to eight hours the same in both directions.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How far is the Wagah Border from Amritsar?</h3>
<p class="text-gray-700 leading-relaxed mb-4">30 km west of the city on the GT Road through Attari, a drive of 30 to 45 minutes by cab on an ordinary afternoon and longer in the last kilometre before the ceremony.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">What time is the Wagah Border ceremony?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Late afternoon, before sunset, every day; the start is earlier in winter and later in summer. Confirm the current time on the day of your visit, and plan to be at the gate about two hours before it.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How much does a cab from Amritsar to Wagah cost?</h3>
<p class="text-gray-700 leading-relaxed mb-4">On the local package: ₹2,200 for a sedan on the 4 hour / 40 km package, or ₹3,800 on the 8 hour / 80 km package for the full afternoon with the wait and the return. Parking is at actuals.</p>
<p class="text-gray-700 leading-relaxed mb-4"><strong>Read next:</strong> <a href="/blog/amritsar-golden-temple-wagah-border-complete-guide-2026" class="text-blue-600 hover:underline">Amritsar Golden Temple &amp; Wagah Border</a> or <a href="/blog/amritsar-golden-temple-wagah-border-guide-2026" class="text-blue-600 hover:underline">Amritsar: Golden Temple, Wagah Border</a> for the fuller two-day Amritsar itinerary this page's cab fits into.</p>`,
    city: "Amritsar",
    faqs: [
      { question: "How far is the Wagah Border from Amritsar?", answer: "30 km west of the city on the GT Road through Attari, a drive of 30 to 45 minutes by cab on an ordinary afternoon and longer in the last kilometre before the ceremony." },
      { question: "What time is the Wagah Border ceremony?", answer: "Late afternoon, before sunset, every day; the start is earlier in winter and later in summer. Confirm the current time on the day of your visit, and plan to be at the gate about two hours before it." },
      { question: "How much does a cab from Amritsar to Wagah cost?", answer: "On the local package: ₹2,200 for a sedan on the 4 hour / 40 km package, or ₹3,800 on the 8 hour / 80 km package for the full afternoon with the wait and the return. An Ertiga is ₹2,500 and an Innova Crysta ₹2,800 on the four-hour package. Parking is at actuals." },
      { question: "When should I leave Amritsar for the Wagah ceremony?", answer: "Early afternoon. The stands fill in the two hours before the start, the security check takes as long as the crowd in front of you, and the walk from the parking is a real walk. Our drivers plan to reach about two hours before the ceremony." },
      { question: "Does the driver wait at Wagah during the ceremony?", answer: "Yes. The car drops you at the parking, waits through the ceremony and the crowd leaving, and brings you back to the city. That wait is why the run is priced on the local package rather than by the kilometre." },
      { question: "Can I do the Golden Temple and Wagah on the same day?", answer: "Yes. The Amritsar full-day sightseeing tour puts the Golden Temple and Jallianwala Bagh in the morning, lunch after, and the drive to Wagah in the middle of the afternoon, with the temple again after dark if you want it lit." },
      { question: "How do I get to Wagah from Delhi for the ceremony?", answer: "Delhi to Amritsar is 450 km on NH-44, seven to eight hours, with five toll plazas totalling ₹585 for a car. Leave before dawn, reach Amritsar in the early afternoon and carry on to Wagah the same day. A sedan is ₹4,950 one-way at ₹11/km." },
      { question: "What should I carry to the Wagah ceremony?", answer: "A phone, water and an ID; bags are checked and the list of what may be carried in is short, so leave luggage in the car. Cover up in the sun in summer and carry a warm layer in winter." }
    ],
    date: "2026-09-14",
    readTime: "8 min read",
    image: "/images/sightseeing/Amritsar/Wagah_Border.jpg",
    category: "Travel Tips",
    tags: ["wagah border", "amritsar", "beating retreat", "amritsar cab", "punjab", "day trip", "2026"],
    keywords: ["wagah border ceremony from amritsar", "amritsar to wagah border distance", "wagah border ceremony time", "how to reach wagah border from amritsar", "amritsar to wagah cab", "wagah border by taxi"],
    featured: false,
    metaTitle: "Wagah Border from Amritsar by Cab: 30 km, When to Leave",
    metaDescription: "Wagah Border is 30 km from Amritsar, 30 to 45 minutes by cab. When to leave for the evening ceremony, what to expect at the gate, and the local-package cab fare."
  },

  // 2 ============================================================
  {
    id: 92002,
    slug: 'rohtang-pass-permit-2026-how-it-works-by-cab',
    title: 'Rohtang Pass Permit in 2026: How the Permit Works and How a Cab Handles It',
    excerpt: 'Rohtang needs an online permit tied to the vehicle and the date, issued against a daily quota; the Atal Tunnel to Lahaul needs none. How the permit is applied for, who carries it, what closes the pass, and how a Delhi to Manali cab plans around it.',
    relatedTours: [
      { id: "manali-oneway", name: "Delhi to Manali One-Way Cab", slug: "one-way-cab/delhi-to-manali", city: "delhi", price: "From ₹11/km" },
      { id: "manali-tempo", name: "Tempo Traveller Delhi to Manali", slug: "tempo-traveller/delhi-to-manali", city: "delhi", price: "From ₹23/km" }
    ],
    relatedDestinations: [
      { name: "Manali", slug: "manali", type: "city" },
      { name: "Delhi", slug: "delhi", type: "city" }
    ],
    primaryCTA: {
      text: "Book a Delhi to Manali cab",
      link: "/one-way-cab/delhi-to-manali"
    },
    content: `<p class="blog-lead">A <strong>Rohtang Pass permit</strong> is a day permit issued online by the Kullu district administration against a daily quota of vehicles, tied to one vehicle number and one date, and checked at the barrier on the road up from Manali. Without it no vehicle goes beyond the check post; with it, the car climbs to the pass at 13,050 ft when the road is open, which in a normal year is from late spring to the start of winter. The Atal Tunnel is the alternative that needs no permit: it takes the same road out of Manali and passes under the mountain into Lahaul. Our drivers apply for the permit against the car they are driving, carry it, and plan the Manali days around whether it was granted. Fares for the corridor are on the <a href="/one-way-cab/delhi-to-manali" class="text-blue-600 hover:underline font-semibold">Delhi to Manali one-way cab page</a> and, for groups, the <a href="/tempo-traveller/delhi-to-manali" class="text-blue-600 hover:underline font-semibold">Tempo Traveller page</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Why does Rohtang need a permit at all?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Because the road to the pass is a fragile, high, single road through a protected landscape, and the number of vehicles allowed up it each day is capped. The cap is enforced by a permit system: a vehicle is allowed beyond the check post above Manali only if it holds a permit for that day, and the permits are issued online in advance against the day's quota. Tourist vehicles and taxis fall under the quota; the rules and the quota itself are set by the district administration and change, which is why this post describes the sequence and not the numbers. The fee, the quota and the cut-off times are on the permit portal on the day you apply, and nowhere else is reliable.</p>
<p class="text-gray-700 leading-relaxed mb-4">The permit is tied to a vehicle number, not to a passenger, and it is valid for one date. That has two consequences for anyone arriving by cab. First, the permit has to be applied for against the car that will actually make the climb, which is why the driver applies rather than the passenger. Second, private cars from outside are restricted beyond a point on some days, and the usual answer is a local Manali vehicle for the Rohtang leg; our sightseeing pages say plainly that we help arrange the permit and a local cab where private vehicles are restricted.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The permit, step by step</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Fix the date.</strong> Decide which Manali day is the Rohtang day; the permit is for one date and the quota fills on weekends and in the peak weeks.</li>
<li class="ml-4"><strong>Apply on the portal.</strong> The Kullu administration's online permit portal takes the vehicle number, the driver and vehicle papers, the date and the number of passengers, and issues the permit against the day's quota. The portal shows the fee and the days the pass is shut for maintenance or weather.</li>
<li class="ml-4"><strong>The driver applies.</strong> For a Triveni booking the driver applies against the car he is driving, or arranges the local vehicle where our car is restricted, and tells you whether the permit was granted before you plan the day.</li>
<li class="ml-4"><strong>Carry the papers.</strong> The permit, the vehicle papers and an ID for the passengers are checked at the barrier on the way up; the driver keeps them together.</li>
<li class="ml-4"><strong>Go early.</strong> The check post opens with the day and the road above it is slow; the drivers leave Manali at first light so the pass is reached with the morning clear.</li>
<li class="ml-4"><strong>Have a plan B.</strong> If the quota is full or the pass is closed for the day, the same morning goes to Solang Valley and through the Atal Tunnel to Sissu in Lahaul, which needs no permit.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Rohtang or the Atal Tunnel: what each needs</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Question</th>
<th class="border border-gray-300 px-4 py-2 text-left">Rohtang Pass</th>
<th class="border border-gray-300 px-4 py-2 text-left">Atal Tunnel to Lahaul</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Permit</td><td class="border border-gray-300 px-4 py-2">Yes: online, per vehicle, per date, against a daily quota</td><td class="border border-gray-300 px-4 py-2">No permit for the tunnel and Sissu</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Where it goes</td><td class="border border-gray-300 px-4 py-2">Over the top to the pass at 13,050 ft, snow and the views</td><td class="border border-gray-300 px-4 py-2">Under the mountain, 9 km, into the Lahaul valley</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Season</td><td class="border border-gray-300 px-4 py-2">Open late spring to early winter; closed by snow from December to April in a normal year</td><td class="border border-gray-300 px-4 py-2">Open through the year; shuts briefly for snow clearing in heavy falls</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Vehicle</td><td class="border border-gray-300 px-4 py-2">Our car if permitted, a local Manali vehicle where outside cars are restricted</td><td class="border border-gray-300 px-4 py-2">Our car, any day it is open</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">What to check</td><td class="border border-gray-300 px-4 py-2">The permit portal: quota, fee, closure days</td><td class="border border-gray-300 px-4 py-2">The morning's weather and any snow-clearing closure</td></tr>
</tbody></table>
<p class="text-gray-700 leading-relaxed mb-4">The honest summary is that Rohtang is a permit and a gamble on the day, and the tunnel is neither. From December to April the pass is closed by snow and the tunnel is the only way to Lahaul; in the summer months both are open and the permit decides which you do. Snow is on both roads in the shoulder months, and the Lahaul side of the tunnel at Sissu often has it when the Manali side does not.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">How a Delhi to Manali cab plans the Rohtang day</h2>
<p class="text-gray-700 leading-relaxed mb-4">Delhi to Manali is 530 km and twelve to thirteen hours on NH-44 and NH-21 through Karnal, Chandigarh, Bilaspur, Mandi and Kullu, with four toll plazas totalling ₹455 for a car one-way and no tolls after Bilaspur. Most people give Manali three days: the drive up, a full day for Rohtang or the tunnel with Solang Valley on the way, and the drive back. The permit is applied for as soon as the dates are fixed, because the quota is the constraint, and the Rohtang day is put in the middle so that a refusal on one date can move to the next.</p>
<p class="text-gray-700 leading-relaxed mb-4">On the rate card a sedan is ₹5,830 one-way for the 530 km at ₹11/km, an Ertiga or SUV ₹7,950 at ₹15, an Innova Crysta ₹9,540 at ₹18 and a 12-seater Tempo Traveller ₹12,190 at ₹23; tolls, parking and the permit are extra at actuals. A three-day round trip with the car staying in Manali bills the greater of twice the one-way fare or three days at the 300 km minimum, and on this corridor it is the distance that counts. Our Manali pages recommend an SUV or Innova for the climb; for the Rohtang leg itself the vehicle may be a local one, in which case the permit and the local cab are billed as they are charged. The <a href="/manali" class="text-blue-600 hover:underline font-semibold">Manali cab page</a> lists the corridors and the local runs.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What to carry, and what not to expect</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4">Warm layers, gloves and sunglasses: the pass is high and bright even in summer, and snow gear is hired on the way up rather than carried from Delhi.</li>
<li class="ml-4">An ID for every passenger, because the barrier checks the permit against the vehicle and the people in it.</li>
<li class="ml-4">Time. The road above the check post is slow and shared with every permitted vehicle of the day; the pass is a morning, not an hour.</li>
<li class="ml-4">No expectation of the pass itself. A closure for weather can come the same morning; the tunnel and Solang are the day's fallback and are worth the drive in their own right.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">When is Rohtang open, and what closes it?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Snow closes it for the winter and rain closes it in the monsoon, which leaves two windows. In a normal year the pass is shut by snow from December to April and opens as the road is cleared in late spring; our best-time page for Manali notes it closed again in the monsoon months of July to September, when the road is treacherous with landslides; and it stays open through the autumn until the first heavy fall. Late spring and early summer, and then September to November, are the Rohtang months, and even inside them a morning's weather can close the barrier for the day. The permit portal is where a closure is announced, and the driver checks it the evening before.</p>
<p class="text-gray-700 leading-relaxed mb-4">The Atal Tunnel has the opposite calendar problem: it is open in every month, but in heavy snowfall it shuts for a few hours of clearing at a time, usually early in the morning, and the Lahaul side at Sissu can be under snow when Manali is not. In winter, when Rohtang is closed, the tunnel and Solang are the whole of the snow day, and the drivers plan it for the middle of the day when the clearing is done.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The road up, plaza by plaza</h2>
<p class="text-gray-700 leading-relaxed mb-4">Because the Rohtang day begins in Delhi for most people, it is worth knowing the road. Our Delhi to Manali toll page lists four plazas for a car: Panipat at ₹165, Karnal at ₹130, Ambala at ₹95 and Bilaspur at ₹65, ₹455 in all, and no tolls after Bilaspur, because the mountain stretch through Mandi, the Aut tunnel and Kullu is toll-free. The plains section to Chandigarh is fast four-lane road, the climb from Bilaspur through Sundernagar to Mandi is the middle of the day, and the Beas valley from Mandi to Manali is the slow, beautiful last third. Our drivers leave Delhi before dawn so that the hill section is done in daylight and the car is in Manali by the evening, with the permit already applied for and the Rohtang day the next morning but one.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Do I need a permit for Rohtang Pass?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Yes. Every vehicle going beyond the check post above Manali needs a day permit issued online against the daily quota, tied to the vehicle number and the date. The Atal Tunnel to Lahaul needs no permit.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Who applies for the permit when I travel by cab?</h3>
<p class="text-gray-700 leading-relaxed mb-4">The driver, against the car he is driving, or he arranges a local Manali vehicle where outside cars are restricted. You are told whether the permit was granted before the day is planned.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Is Rohtang open in winter?</h3>
<p class="text-gray-700 leading-relaxed mb-4">No. In a normal year the pass is closed by snow from December to April, and the Atal Tunnel is the only way to Lahaul in those months.</p>`,
    city: "Manali",
    faqs: [
      { question: "Do I need a permit for Rohtang Pass?", answer: "Yes. Every vehicle going beyond the check post above Manali needs a day permit issued online by the Kullu administration against the daily quota, tied to the vehicle number and the date. The Atal Tunnel to Lahaul needs no permit." },
      { question: "Who applies for the Rohtang permit when I travel by cab?", answer: "The driver, against the car he is driving, or he arranges a local Manali vehicle where outside cars are restricted. You are told whether the permit was granted before the Manali day is planned, and the papers travel with the driver." },
      { question: "How much does the Rohtang permit cost?", answer: "The fee, like the quota and the closure days, is set by the district administration and shown on the permit portal when you apply. We do not publish a figure because it changes; the permit and any local vehicle are billed at actuals." },
      { question: "Is Rohtang Pass open in winter?", answer: "No. In a normal year the pass is closed by snow from December to April. The Atal Tunnel is the only way to Lahaul in those months and it needs no permit." },
      { question: "What is the difference between Rohtang and the Atal Tunnel?", answer: "Rohtang goes over the top to the pass at 13,050 ft and needs a permit; the Atal Tunnel goes 9 km under the mountain into the Lahaul valley and needs none. In summer both are open; in winter only the tunnel is." },
      { question: "What happens if the permit is refused or the pass is closed?", answer: "The same morning goes to Solang Valley and through the Atal Tunnel to Sissu in Lahaul, which needs no permit. Putting the Rohtang day in the middle of a three-day trip lets a refusal on one date move to the next." },
      { question: "How much is a cab from Delhi to Manali?", answer: "530 km at the rate card: a sedan ₹5,830 one-way at ₹11/km, an Ertiga or SUV ₹7,950, an Innova Crysta ₹9,540 and a 12-seater Tempo Traveller ₹12,190, plus ₹455 in tolls for a car and parking at actuals. Our Manali pages recommend an SUV or Innova for the hill road." }
    ],
    date: "2026-09-14",
    readTime: "8 min read",
    image: "/images/sightseeing/Manali/Manali_hero_section.jpg",
    category: "Travel Tips",
    tags: ["rohtang pass", "rohtang permit", "manali", "atal tunnel", "himachal", "delhi to manali", "2026"],
    keywords: ["rohtang pass permit 2026", "rohtang pass permit how to apply", "rohtang permit for taxi", "atal tunnel permit", "rohtang pass open or closed", "delhi to manali cab rohtang"],
    featured: false,
    metaTitle: "Rohtang Pass Permit 2026: How It Works and How a Cab Helps",
    metaDescription: "The Rohtang permit is online, per vehicle and per date, against a daily quota; the Atal Tunnel needs none. The sequence, the closures and how a cab plans the day."
  },

  // 3 ============================================================
  {
    id: 92003,
    slug: 'delhi-to-jim-corbett-by-cab-distance-route-safari-cost',
    title: 'Delhi to Jim Corbett by Cab: Distance, Route, Safari Zones and What It Costs',
    excerpt: 'Delhi to Jim Corbett is 260 km and 5 to 6 hours on NH-9 through Hapur, Moradabad and Kashipur to Ramnagar. The route, the zones the site names, how the safari is booked, and the rate-card fare for a two-day trip.',
    relatedTours: [
      { id: "corbett-cab", name: "Delhi to Jim Corbett Cab", slug: "delhi-to-jim-corbett", city: "delhi", price: "From ₹11/km" },
      { id: "corbett-oneway", name: "Delhi to Corbett One-Way Cab", slug: "one-way-cab/delhi-to-corbett", city: "delhi", price: "From ₹11/km" }
    ],
    relatedDestinations: [
      { name: "Jim Corbett", slug: "jim-corbett", type: "city" },
      { name: "Delhi", slug: "delhi", type: "city" },
      { name: "Nainital", slug: "nainital", type: "city" }
    ],
    primaryCTA: {
      text: "Book a Delhi to Jim Corbett cab",
      link: "/delhi-to-jim-corbett"
    },
    content: `<p class="blog-lead"><strong>Delhi to Jim Corbett</strong> is 260 km and five to six hours by cab: NH-9 through Hapur, Moradabad and Kashipur to Ramnagar, the gateway town for the park, with good four-lane highway to Moradabad and a well-surfaced two-lane road after it. Ramnagar is the booking hub and most resorts are 5 to 20 km beyond it. The safari itself is booked separately with the forest department, by zone and by slot, and the cab is planned around the slot: our distance page says to start by five in the morning for a same-day afternoon safari. On the rate card a sedan is ₹3,300 for the drive, because 260 km bills the 300 km minimum, and a two-day weekend with the car staying is ₹6,600. Book on the <a href="/delhi-to-jim-corbett" class="text-blue-600 hover:underline font-semibold">Delhi to Jim Corbett cab page</a>, or the <a href="/one-way-cab/delhi-to-corbett" class="text-blue-600 hover:underline font-semibold">one-way cab</a> if you are carrying on to Nainital.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What is the route from Delhi to Jim Corbett?</h2>
<p class="text-gray-700 leading-relaxed mb-4">NH-9, the Moradabad highway, all the way to Kashipur, then the two-lane road to Ramnagar. Out of Delhi through Ghaziabad and Hapur, across the Ganga at Garhmukteshwar, past Moradabad on the bypass and then north-east through Kashipur to Ramnagar on the Kosi. Our distance page calls the highway good four-lane to Moradabad and the road beyond it well-surfaced two-lane, and puts the whole run at 260 km and five to six hours; the round-trip page carries the same figures. The truck traffic on NH-9 builds through the middle of the day, so the drive is planned early, which suits the park in any case.</p>
<p class="text-gray-700 leading-relaxed mb-4">Ramnagar is where the drive ends and the safari begins. The forest department's booking office is there, the safari jeeps assemble there, and the resorts along the Kosi are 5 to 20 km beyond the town in the direction of the gates. Tell us which resort at booking; the driver drops at the door and the distance is inside the 300 km minimum either way.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Delhi to Jim Corbett at a glance</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Detail</th>
<th class="border border-gray-300 px-4 py-2 text-left">What our pages say</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Distance</td><td class="border border-gray-300 px-4 py-2">260 km to Ramnagar</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Drive time</td><td class="border border-gray-300 px-4 py-2">5 to 6 hours</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Road</td><td class="border border-gray-300 px-4 py-2">NH-9 via Hapur, Moradabad and Kashipur; four-lane to Moradabad, two-lane to Ramnagar</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Season</td><td class="border border-gray-300 px-4 py-2">November to June; core zones close in the monsoon, July to September</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Best sightings</td><td class="border border-gray-300 px-4 py-2">Winter mornings, on the distance page's reckoning</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Sedan fare</td><td class="border border-gray-300 px-4 py-2">₹3,300 one-way (300 km minimum at ₹11/km); ₹6,600 for a two-day round trip</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Tolls</td><td class="border border-gray-300 px-4 py-2">At actuals on the driver's FASTag; no toll page exists for this corridor</td></tr>
</tbody></table>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Which safari zones does Corbett have, and which should I book?</h2>
<p class="text-gray-700 leading-relaxed mb-4">The park is entered by zone, and each zone has its own gate, its own permit and its own character. The zones our pages name are Dhikala, the big one on the Ramganga grasslands and the only one with forest rest houses inside the park, which our weekend guides put open from mid-November to mid-June; Bijrani, the nearest to Ramnagar and the usual first safari; Jhirna and Dhela, the zones that stay open through the rains; Durga Devi in the hills on the Kosi side; and Garjia and Sitabani on the fringe. Which is best is a question for the day you are there, because the answer changes with the season and the water; the distance page's advice is to confirm the permit and the zone before leaving Delhi, and that is ours.</p>
<p class="text-gray-700 leading-relaxed mb-4">Two things decide most bookings. If you want a night inside the park, Dhikala is the only zone that offers it, and the rest house has to be booked with the day-visit permit. If you want a same-day afternoon safari after the drive from Delhi, it will be one of the zones near Ramnagar, and the five o'clock start is what makes the slot.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">How the safari is booked, in order</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Choose the zone and the slot.</strong> Safaris run in morning and afternoon slots by zone; decide which before anything else, because the permit is for one zone and one slot.</li>
<li class="ml-4"><strong>Book the permit with the forest department.</strong> Permits are issued through the forest department's official booking site, in advance, with an ID for every visitor; weekend slots go early in season, and the price of the permit, the jeep and the guide is on that site, not here.</li>
<li class="ml-4"><strong>Fix the jeep and the guide.</strong> The safari vehicle and the guide are assigned through the same booking or at the gate; a private jeep is the usual choice for a family.</li>
<li class="ml-4"><strong>Then book the cab.</strong> Tell us the slot and the resort, and the driver plans the departure from Delhi around it; for an afternoon slot on the day of arrival that means leaving by five.</li>
<li class="ml-4"><strong>Carry the papers.</strong> The permit and the IDs used for it are checked at the gate; the driver takes you to the gate or the assembly point and waits.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What does a Delhi to Jim Corbett cab cost?</h2>
<p class="text-gray-700 leading-relaxed mb-4">The drive is 260 km, and outstation cabs bill a 300 km per day minimum, so the one-way fare is the minimum at the vehicle's rate: ₹3,300 for a sedan at ₹11/km, ₹4,500 for an Ertiga or SUV at ₹15, ₹5,400 for an Innova Crysta at ₹18 and ₹6,900 for a 12-seater Tempo Traveller at ₹23. Fuel and the driver are inside those figures; tolls on NH-9 and parking at the resort are at actuals, settled on the driver's FASTag and shown on the bill.</p>
<p class="text-gray-700 leading-relaxed mb-4">Most Corbett trips are a weekend with the car staying: up on Saturday morning, the afternoon safari, the night at a resort on the Kosi, the morning safari on Sunday and the drive home after it. That bills as two days at the minimum, ₹6,600 for a sedan, ₹9,000 for an Ertiga, ₹10,800 for an Innova Crysta and ₹13,800 for a Tempo Traveller, with the driver's night halt at actuals. A third night for Dhikala adds a day at the minimum. If Corbett is the first stop on a Kumaon trip, the <a href="/one-way-cab/delhi-to-corbett" class="text-blue-600 hover:underline font-semibold">one-way cab</a> drops you at the resort and a second booking takes you on to Nainital; the <a href="/sightseeing/jim-corbett" class="text-blue-600 hover:underline font-semibold">Corbett sightseeing page</a> has the day plans around the park.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">When to go</h2>
<p class="text-gray-700 leading-relaxed mb-4">November to June, on our distance page. The core zones close for the monsoon from July to September and reopen with the dry season; winter mornings give the best tiger sightings, and the cold early drive from Delhi is part of the trip. April to June is hot on the plains and in the park, but the animals come to water and the sightings are good; the buffer zones run through the rains for anyone who wants the forest green.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The drive, stop by stop</h2>
<p class="text-gray-700 leading-relaxed mb-4">Out of Delhi on NH-9 through Ghaziabad and Hapur, with the Ganga crossing at Garhmukteshwar the natural breakfast halt about a third of the way. Moradabad is passed on the bypass; the road stays four-lane to there and is the fastest part of the day, which is why an early start matters, because the truck traffic on this highway thickens through the middle of the morning. Beyond Moradabad the route turns north-east through Kashipur on the two-lane road, well surfaced but slower, and reaches Ramnagar on the Kosi with the Shivalik forest closing in on the last stretch. The resorts are strung along the river beyond the town towards the gates, and the driver takes you to the door.</p>
<p class="text-gray-700 leading-relaxed mb-4">Two practical points from our distance page. Ramnagar is the booking hub, so anything that has to be collected or confirmed in person is done there before the resort; and if the afternoon safari is on the day of arrival, the five o'clock start from Delhi is the whole of the plan, because the drive is five to six hours and the afternoon slot follows soon after it ends.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Corbett with Nainital</h2>
<p class="text-gray-700 leading-relaxed mb-4">The two are the classic Kumaon pairing, and the cab makes it easy: Corbett for the first night and the safaris, then on up to Nainital for the lake and the hills, and back to Delhi down NH-9 through Haldwani and Moradabad, which is the same highway the Nainital corridor uses. Delhi to Nainital is 300 km on our distance page, so a three-day loop bills three days at the 300 km minimum for a sedan, and the driver's night halts are at actuals. Book it as a round trip with the car staying, tell us the safari slot and the Nainital hotel, and the days fall into place around the park.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How far is Jim Corbett from Delhi by road?</h3>
<p class="text-gray-700 leading-relaxed mb-4">260 km to Ramnagar on NH-9 via Hapur, Moradabad and Kashipur, five to six hours. Resorts are 5 to 20 km beyond Ramnagar.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How much does a cab from Delhi to Jim Corbett cost?</h3>
<p class="text-gray-700 leading-relaxed mb-4">₹3,300 one-way for a sedan on the 300 km minimum, ₹4,500 for an Ertiga, ₹5,400 for an Innova Crysta and ₹6,900 for a Tempo Traveller. A two-day weekend doubles those figures; tolls and parking are at actuals.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Can I do a safari on the day I arrive from Delhi?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Yes, in the afternoon slot, if you leave Delhi by five and the permit is booked before you leave. Our distance page gives the same advice.</p>`,
    city: "Jim Corbett",
    faqs: [
      { question: "How far is Jim Corbett from Delhi by road?", answer: "260 km to Ramnagar on NH-9 via Hapur, Moradabad and Kashipur, five to six hours by cab. Ramnagar is the gateway and booking hub, and most resorts are 5 to 20 km beyond it towards the gates." },
      { question: "How much does a cab from Delhi to Jim Corbett cost?", answer: "The 260 km bills the 300 km minimum: ₹3,300 one-way for a sedan at ₹11/km, ₹4,500 for an Ertiga or SUV, ₹5,400 for an Innova Crysta and ₹6,900 for a 12-seater Tempo Traveller. A two-day weekend with the car staying is two days at the minimum; tolls and parking are at actuals." },
      { question: "Which safari zones does Jim Corbett have?", answer: "Dhikala, with the only rest houses inside the park and open from mid-November to mid-June; Bijrani, nearest Ramnagar; Jhirna and Dhela, open through the rains; Durga Devi on the Kosi side; and Garjia and Sitabani on the fringe. Confirm the zone and the permit before leaving Delhi." },
      { question: "How do I book a Corbett safari?", answer: "Choose the zone and the morning or afternoon slot, book the permit on the forest department's official site with an ID for every visitor, fix the jeep and guide through the same booking or at the gate, then book the cab around the slot. Permit, jeep and guide prices are on the forest department's site." },
      { question: "Can I do a safari on the day I arrive from Delhi?", answer: "Yes, in the afternoon slot, if you leave Delhi by five and the permit is booked before you leave. The driver drops you at the resort or the gate in time for the assembly." },
      { question: "What is the best time to visit Jim Corbett?", answer: "November to June. The core zones close in the monsoon from July to September; winter mornings give the best tiger sightings, and April to June is hot but good for sightings at water. The buffer zones stay open through the rains." },
      { question: "Are there tolls between Delhi and Jim Corbett?", answer: "Yes, on NH-9, paid at actuals on the driver's FASTag and shown on the bill. There is no toll page for this corridor, so we do not quote a figure." },
      { question: "Can I go on to Nainital from Corbett with the same car?", answer: "Yes. Book the one-way cab to Corbett and a second leg to Nainital, or a round trip with an extra day at the minimum; Nainital is the usual second stop on a Kumaon weekend." }
    ],
    date: "2026-09-14",
    readTime: "8 min read",
    image: "/images/sightseeing/Jim_Corbett/Tiger_Safari_Corbett.jpg",
    category: "Destinations",
    tags: ["jim corbett", "corbett safari", "delhi to corbett", "ramnagar", "wildlife", "uttarakhand", "2026"],
    keywords: ["delhi to jim corbett by cab", "delhi to jim corbett distance", "delhi to corbett taxi fare", "jim corbett safari zones", "how to book corbett safari", "delhi to ramnagar cab"],
    featured: false,
    metaTitle: "Delhi to Jim Corbett by Cab: 260 km, Zones, Safari, Cost",
    metaDescription: "Delhi to Jim Corbett is 260 km and 5 to 6 hours on NH-9 to Ramnagar. The route, the safari zones, how the permit is booked and the rate-card fare from ₹3,300 for a sedan."
  },

  // 4 ============================================================
  {
    id: 92004,
    slug: 'jaipur-to-ranthambore-by-cab-distance-best-time-safari',
    title: 'Jaipur to Ranthambore by Cab: Distance, Best Time and the Safari Sequence',
    excerpt: 'Jaipur to Ranthambore is 180 km and 3 to 3.5 hours on NH-52 through Tonk to Sawai Madhopur. When the park is open, which months sight best, how the safari permit and the jeep are booked, and what the cab costs on the rate card.',
    relatedTours: [
      { id: "ranthambore-cab", name: "Jaipur to Ranthambore Cab", slug: "jaipur-to-ranthambore", city: "jaipur", price: "From ₹11/km" },
      { id: "ranthambore-round", name: "Jaipur to Ranthambore Round Trip", slug: "round-trip/jaipur-to-ranthambore", city: "jaipur", price: "From ₹11/km" }
    ],
    relatedDestinations: [
      { name: "Ranthambore", slug: "ranthambore", type: "city" },
      { name: "Jaipur", slug: "jaipur", type: "city" }
    ],
    primaryCTA: {
      text: "Book a Jaipur to Ranthambore cab",
      link: "/jaipur-to-ranthambore"
    },
    content: `<p class="blog-lead"><strong>Jaipur to Ranthambore</strong> is 180 km and three to three and a half hours by cab on NH-52 through Tonk to Sawai Madhopur, the town beside the park. The road is good highway the whole way. The park is open from October to June and closed for the monsoon; October to March is the comfortable season and April to June, hot as it is, is when the tigers are easiest to see at water. The safari is booked with the forest department by zone and by slot, in the morning or the afternoon, and the cab is timed to the slot. On the rate card the drive bills the 300 km minimum, ₹3,300 for a sedan, and a two-day trip with the car staying is ₹6,600. Book on the <a href="/jaipur-to-ranthambore" class="text-blue-600 hover:underline font-semibold">Jaipur to Ranthambore cab page</a> or the <a href="/round-trip/jaipur-to-ranthambore" class="text-blue-600 hover:underline font-semibold">round-trip page</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">How far is Ranthambore from Jaipur, and what is the road like?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Our distance page puts it at 180 km and three to three and a half hours on NH-52 via Tonk, with Tonk and Sawai Madhopur as the stops, and calls the road a good highway; the park is near Sawai Madhopur town. The drive leaves Jaipur south past the airport, runs across the flat Tonk country and turns for Sawai Madhopur, where the hotels line the road towards the park gates. It is one of the easier three hours in Rajasthan: no hills, no towns to cross once you are clear of Jaipur, and a road that carries the safari traffic every day of the season. The booking page rounds the run to about 160 km; the distance page's 180 km is the figure we bill on, and both are under the 300 km minimum.</p>
<p class="text-gray-700 leading-relaxed mb-4">Sawai Madhopur is where the road ends and the timing begins. Safaris leave from the hotels and the assembly points at fixed morning and afternoon slots, and the whole day is arranged around them: an early start from Jaipur for an afternoon safari the same day, or a night in Sawai Madhopur for the morning one.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Jaipur to Ranthambore at a glance</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Detail</th>
<th class="border border-gray-300 px-4 py-2 text-left">What our pages say</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Distance</td><td class="border border-gray-300 px-4 py-2">180 km to Sawai Madhopur</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Drive time</td><td class="border border-gray-300 px-4 py-2">3 to 3.5 hours</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Road</td><td class="border border-gray-300 px-4 py-2">NH-52 via Tonk; good highway throughout</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Park season</td><td class="border border-gray-300 px-4 py-2">October to June; closed for the monsoon, July to September</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Best for sightings</td><td class="border border-gray-300 px-4 py-2">April to June at the waterholes; October to March for comfort</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Sedan fare</td><td class="border border-gray-300 px-4 py-2">₹3,300 one-way (300 km minimum at ₹11/km); ₹6,600 for a two-day round trip</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Tolls</td><td class="border border-gray-300 px-4 py-2">At actuals on the driver's FASTag; no toll page exists for this corridor</td></tr>
</tbody></table>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">When is the best time to visit Ranthambore?</h2>
<p class="text-gray-700 leading-relaxed mb-4">It depends on what you want, and our Ranthambore sightseeing page says it plainly. The park is open to visitors from October to June. October to March brings pleasant weather, greenery after the monsoon and comfortable safaris, which suits first-timers and families. April to June is harsh in the heat but statistically the best for tiger sightings, because the big cats gather around the shrinking waterholes and are far easier to find; the safaris are early and late in the day, and the cab is air-conditioned for the hours between. The park typically closes from July to September for the breeding season, and no cab goes to a closed gate.</p>
<p class="text-gray-700 leading-relaxed mb-4">On zones, the distance page says zones three to five have the best tiger sighting and the sightseeing page widens that to the first five; the honest position is that the zone is assigned with the permit and the best zone changes with the season and the water. Book early, take the zone you are given, and go in the morning if you can, which the distance page also recommends.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The safari sequence, in order</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Fix the dates and the slot.</strong> Morning or afternoon, and how many safaris; the slot decides whether you drive from Jaipur the same morning or sleep in Sawai Madhopur.</li>
<li class="ml-4"><strong>Book the permit through official channels.</strong> The forest department's booking system issues the permit by zone and slot with an ID for every visitor; slots sell out in peak season, so book well in advance. The permit price, the vehicle and the guide fees are on that system.</li>
<li class="ml-4"><strong>Choose the vehicle.</strong> Drives are in forest-department Gypsies, shared or private, or in the larger Canters; a private Gypsy is the usual family choice and is reserved with the permit.</li>
<li class="ml-4"><strong>Then book the cab.</strong> Tell us the slot and the hotel, and the driver plans the departure from Jaipur so you are at the assembly point in time; our tour page says the driver knows exactly when to leave.</li>
<li class="ml-4"><strong>Between safaris.</strong> The car takes you up to Ranthambore Fort and the Trinetra Ganesh temple, or to the lakes for the birds, and waits.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What does a Jaipur to Ranthambore cab cost?</h2>
<p class="text-gray-700 leading-relaxed mb-4">The drive is 180 km, and outstation cabs bill a 300 km per day minimum, so the one-way fare is the minimum at the vehicle's rate: ₹3,300 for a sedan at ₹11/km, ₹4,500 for an Ertiga or SUV at ₹15, ₹5,400 for an Innova Crysta at ₹18 and ₹6,900 for a 12-seater Tempo Traveller at ₹23. Fuel and the driver are inside those figures; tolls on NH-52 and parking at the hotel are at actuals. The safari permit, the Gypsy and the guide are booked and paid separately with the forest department and are not part of the cab fare.</p>
<p class="text-gray-700 leading-relaxed mb-4">The usual shape is two days: down from Jaipur for the afternoon safari, the night in Sawai Madhopur, the morning safari and the fort, then back to Jaipur. That is two days at the minimum, ₹6,600 for a sedan, ₹9,000 for an Ertiga, ₹10,800 for an Innova Crysta and ₹13,800 for a Tempo Traveller, with the driver's night halt at actuals. A same-day trip, down for the afternoon safari and back after it, bills one day but is a long one. If Ranthambore is a stop on a longer Rajasthan circuit, the <a href="/one-way-cab/jaipur-to-ranthambore" class="text-blue-600 hover:underline font-semibold">one-way cab</a> drops you at the hotel and the next leg is a separate booking; the <a href="/sightseeing/ranthambore" class="text-blue-600 hover:underline font-semibold">Ranthambore day tour</a> covers the transfers around the park once you are there.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The drive, stop by stop</h2>
<p class="text-gray-700 leading-relaxed mb-4">Jaipur to Tonk is the first half, flat farmland on NH-52 with the city traffic behind you inside half an hour of a morning start; Tonk is the only town on the way, and there is nothing to stop for except tea. Tonk to Sawai Madhopur is the second half, the same good highway across country that turns drier and rockier as the Aravalli outliers of the park come into view. Sawai Madhopur is a railway town, and the hotels and the safari assembly points lie along the road that runs from the town towards the park gates; tell us the hotel and the driver knows the zone it sits in. For an afternoon safari the same day, the morning start from Jaipur is the rule; for the morning safari, the night before in Sawai Madhopur.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Between the safaris: the fort and the lakes</h2>
<p class="text-gray-700 leading-relaxed mb-4">Ranthambore is not only the tiger. The fort above the park, a thousand years old and a World Heritage Site, is reached by a winding road and a flight of steps, and its ramparts, temples and tanks look out over the whole reserve; the Trinetra Ganesh temple inside it draws pilgrims as well as visitors, and langurs and peacocks have the run of the ruins. The car takes you to the base and waits. The lakes, Padam Talao, Rajbagh and Malik Talao, are the birdwatchers' reason to come, and our sightseeing page counts over three hundred species around them, with crocodiles on the banks and the morning light across the water for photographers. Between a morning safari and an afternoon one there is time for the fort and a rest; with two nights there is time for the lakes as well.</p>
<p class="text-gray-700 leading-relaxed mb-4">What the cab does, then, is join the pieces: the hotel to the assembly point in time for the slot, the fort between safaris, the lakes when the light is right, and the road back to Jaipur or on to the next stop. What it does not do is the safari itself, which is the forest department's, in its vehicles, on its permits. Keep the two bookings separate in your mind and the day runs smoothly.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How far is Ranthambore from Jaipur?</h3>
<p class="text-gray-700 leading-relaxed mb-4">180 km on NH-52 via Tonk to Sawai Madhopur, three to three and a half hours on a good highway.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">When is Ranthambore closed?</h3>
<p class="text-gray-700 leading-relaxed mb-4">For the monsoon, typically July to September. The park is open from October to June.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Does the cab fare include the safari?</h3>
<p class="text-gray-700 leading-relaxed mb-4">No. The permit, the Gypsy or Canter and the guide are booked and paid through the forest department's official channels; the cab covers the road transfers and waits between safaris.</p>`,
    city: "Jaipur",
    faqs: [
      { question: "How far is Ranthambore from Jaipur?", answer: "180 km on NH-52 via Tonk to Sawai Madhopur, three to three and a half hours on a good highway. The park is near Sawai Madhopur town, and the hotels line the road towards the gates." },
      { question: "When is the best time to visit Ranthambore?", answer: "October to March for pleasant weather and comfortable safaris; April to June for the best tiger sightings, when the cats gather at the shrinking waterholes. The park is closed for the monsoon from July to September." },
      { question: "How do I book a Ranthambore safari?", answer: "Fix the dates and the morning or afternoon slot, book the permit through the forest department's official booking system by zone with an ID for every visitor, reserve a private or shared Gypsy or a Canter with it, then book the cab around the slot. Permit and vehicle prices are on the forest department's system." },
      { question: "Which zone is best in Ranthambore?", answer: "Our distance page says zones three to five have the best tiger sighting and the sightseeing page widens that to the first five, but the zone is assigned with the permit and the best one changes with the season. Book early and go in the morning if you can." },
      { question: "How much does a cab from Jaipur to Ranthambore cost?", answer: "The 180 km bills the 300 km minimum: ₹3,300 one-way for a sedan at ₹11/km, ₹4,500 for an Ertiga or SUV, ₹5,400 for an Innova Crysta and ₹6,900 for a 12-seater Tempo Traveller. A two-day trip with the car staying is two days at the minimum; tolls and parking are at actuals, and the safari is paid separately." },
      { question: "Can I do Ranthambore as a day trip from Jaipur?", answer: "Yes, for the afternoon safari: leave Jaipur in the morning, safari in the afternoon and drive back after it. It is a long day, and a night in Sawai Madhopur for the morning safari and the fort is the better trip." },
      { question: "Are there tolls between Jaipur and Ranthambore?", answer: "Yes, on NH-52, paid at actuals on the driver's FASTag and shown on the bill. There is no toll page for this corridor, so we do not quote a figure." }
    ],
    date: "2026-09-14",
    readTime: "8 min read",
    image: "/images/sightseeing/Ranthambore/Ranthambore_hero_section.jpg",
    category: "Destinations",
    tags: ["ranthambore", "jaipur to ranthambore", "tiger safari", "sawai madhopur", "rajasthan", "wildlife", "2026"],
    keywords: ["jaipur to ranthambore by cab", "jaipur to ranthambore distance", "jaipur to ranthambore taxi fare", "ranthambore best time to visit", "how to book ranthambore safari", "ranthambore safari zones"],
    featured: false,
    metaTitle: "Jaipur to Ranthambore by Cab: 180 km, Best Time, Safari",
    metaDescription: "Jaipur to Ranthambore is 180 km and 3 to 3.5 hours on NH-52 via Tonk. The park season, the best months for sightings, how the safari is booked, and the cab fare."
  },

  // 5 ============================================================
  {
    id: 92005,
    slug: 'haridwar-to-kedarnath-cab-or-bus-how-the-journey-works',
    title: 'Haridwar to Kedarnath: Cab or Bus, and How the Journey Actually Works',
    excerpt: 'No vehicle reaches Kedarnath. The road from Haridwar ends at Sonprayag, about 230 km and a full day away, and the last 16 km from Gaurikund are on foot, by pony, by palki or by helicopter. Cab against bus, the registration, and how the days fall.',
    relatedTours: [
      { id: "haridwar-kedarnath-car", name: "Haridwar to Kedarnath by Car", slug: "chardham-yatra/haridwar-to-kedarnath-by-car", city: "haridwar", price: "On request" },
      { id: "chardham", name: "Char Dham Yatra Package", slug: "chardham-yatra", city: "haridwar", price: "On request" }
    ],
    relatedDestinations: [
      { name: "Haridwar", slug: "haridwar", type: "city" },
      { name: "Rishikesh", slug: "rishikesh", type: "city" },
      { name: "Char Dham", slug: "char-dham", type: "region" }
    ],
    primaryCTA: {
      text: "Book Haridwar to Kedarnath by car",
      link: "/chardham-yatra/haridwar-to-kedarnath-by-car"
    },
    content: `<p class="blog-lead">Neither a cab nor a bus goes to <strong>Kedarnath</strong>. The road from Haridwar runs up the Ganga and the Mandakini through Rishikesh, Devprayag, Rudraprayag and Guptkashi and ends at Sonprayag, about 230 km from Haridwar on our Char Dham pages and a full day of mountain driving; from Sonprayag a short shuttle reaches Gaurikund, and from Gaurikund the temple is a 16 km climb on foot, by pony, by palki or by helicopter from the helipads lower down the valley. A cab takes you to Sonprayag and waits there for the days you are up; a bus takes you to the same road-head on its own timetable. The registration every pilgrim needs is done online or at Haridwar, Rishikesh or Sonprayag. Our <a href="/chardham-yatra/haridwar-to-kedarnath-by-car" class="text-blue-600 hover:underline font-semibold">Haridwar to Kedarnath by car page</a> prices the package; the <a href="/bus-routes/haridwar-to-kedarnath" class="text-blue-600 hover:underline font-semibold">bus route page</a> covers the other way.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Where does the road end, and what comes after it?</h2>
<p class="text-gray-700 leading-relaxed mb-4">The road ends at Sonprayag. Our Char Dham pages put Haridwar to Sonprayag at about 230 km, and the bus-route page reckons the corridor at 250 km and eight to nine hours to Gaurikund, which is the same journey counted to the trek head. Either way it is a full day: flat for the first 25 km to Rishikesh, then a narrow mountain highway along the river valleys through Devprayag, where the Alaknanda and Bhagirathi meet, Rudraprayag and Guptkashi, the last town with a full choice of hotels and the usual night halt before the climb.</p>
<p class="text-gray-700 leading-relaxed mb-4">From Sonprayag, vehicles from outside do not go further; a local shuttle covers the short hop to Gaurikund. From Gaurikund the temple is a 16 km climb, which the Char Dham pages count as 16 to 20 km depending on where the walk is measured from, to a temple at 3,583 metres. That is done on foot over most of a day, by pony or palki booked at Gaurikund, or by helicopter from the helipads at Phata, Sersi and Guptkashi, which turn the climb into minutes and are booked separately in advance. Most pilgrims sleep at Kedarnath, do the morning darshan and come down the next day; the car waits at Sonprayag or Guptkashi throughout.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Cab or bus: the honest comparison</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Question</th>
<th class="border border-gray-300 px-4 py-2 text-left">Cab from Haridwar</th>
<th class="border border-gray-300 px-4 py-2 text-left">Bus from Haridwar</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Where it ends</td><td class="border border-gray-300 px-4 py-2">Sonprayag, at your hotel or the shuttle point</td><td class="border border-gray-300 px-4 py-2">Sonprayag or Guptkashi, at the stand</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Timing</td><td class="border border-gray-300 px-4 py-2">Your start, your halts, a night at Guptkashi if you want one</td><td class="border border-gray-300 px-4 py-2">The timetable's start, the timetable's halts</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">While you are up at the temple</td><td class="border border-gray-300 px-4 py-2">The car and driver wait at Sonprayag or Guptkashi, billed as days</td><td class="border border-gray-300 px-4 py-2">You find a bus back when you come down</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Road beyond Rishikesh</td><td class="border border-gray-300 px-4 py-2">Any car; an SUV or Innova is easier on the hairpins</td><td class="border border-gray-300 px-4 py-2">Only buses up to 22 to 25 seats are advisable, by the bus page</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Luggage</td><td class="border border-gray-300 px-4 py-2">In the boot; a roof carrier for trek gear on a tempo</td><td class="border border-gray-300 px-4 py-2">In the hold, one bag each</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Cost</td><td class="border border-gray-300 px-4 py-2">Rate card: sedan ₹11/km, Ertiga ₹15, Innova ₹18, Tempo ₹23, on a 300 km per day minimum; the package page gives the total</td><td class="border border-gray-300 px-4 py-2">Per seat; see the bus route page</td></tr>
</tbody></table>
<p class="text-gray-700 leading-relaxed mb-4">The bus is the cheaper seat and the cab is the easier journey, and the difference is largest on the days you are not driving. A car that waits at Sonprayag while you are up at the temple is there when you come down, tired, in whatever weather the afternoon brings; a bus has to be found. For a family with elders, for anyone doing the Do Dham on to Badrinath, or for a group filling an Innova or a Tempo Traveller, the cab wins on the road-head days, not the driving day.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The registration, in order</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Register every pilgrim.</strong> Uttarakhand's Char Dham registration is compulsory for everyone going up, and it is done online beforehand or at the registration counters at Haridwar, Rishikesh or Sonprayag. Carry the Aadhaar card used for it.</li>
<li class="ml-4"><strong>Check the temple's dates.</strong> The portals open in late spring and close after Diwali; the exact dates are announced each year and the temple's official desk and the state's yatra site are where to confirm them.</li>
<li class="ml-4"><strong>Book the helicopter if you want it.</strong> Helicopter seats from Phata, Sersi and Guptkashi are booked in advance on the official system, and they sell out; the price is on that system, not here.</li>
<li class="ml-4"><strong>Arrange the pony or palki at Gaurikund.</strong> They are hired on the day at the counters at the trek head; the rates are the counters', and our drivers can tell you the current position on the morning.</li>
<li class="ml-4"><strong>Keep the papers with the driver.</strong> The registration is checked on the road and at Sonprayag; the driver keeps the group's papers together and knows the check points.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">How the days fall by cab</h2>
<p class="text-gray-700 leading-relaxed mb-4">Our Haridwar to Kedarnath by car page plans it as four days, and that is the honest minimum. Day one is the drive from Haridwar to Guptkashi or Sonprayag, an early start and a full day on the mountain road with a halt at Devprayag or Rudraprayag. Day two is the climb from Gaurikund, on foot, by pony or by helicopter, with the evening aarti and the night at Kedarnath. Day three is the morning darshan and the descent, and the night back at Guptkashi. Day four is the drive back to Haridwar. The Do Dham version carries on from Guptkashi to Badrinath instead of turning for home, and our pages plan it as six days.</p>
<p class="text-gray-700 leading-relaxed mb-4">The fare follows the rate card: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, which means the days the car waits at the road-head are billed as days. Tolls, parking, the driver's mountain halt and any hill charges are at actuals; the pony, palki or helicopter and the stays are yours to book. The package page gives the total for each vehicle and the <a href="/chardham-yatra" class="text-blue-600 hover:underline font-semibold">Char Dham Yatra page</a> puts Kedarnath into the full circuit.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">When to go</h2>
<p class="text-gray-700 leading-relaxed mb-4">The temple is open only while the portals are, from late spring to after Diwali, and our bus page names May to June and September to October as the seasons, with the monsoon between them the months to avoid: the mountain road beyond Rishikesh is landslide-prone in the rains and the bus page says the road deteriorates significantly after monsoon rain. May and June are the busiest weeks, with the yatra crowd on every road and every counter; September and October are quieter and clearer, and cold at the top. Check the road position before leaving Haridwar in any month; our drivers do.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Starting from Rishikesh, Dehradun or Delhi instead</h2>
<p class="text-gray-700 leading-relaxed mb-4">Haridwar is the traditional start, but it is not the nearest. Our Char Dham pages put Rishikesh to Sonprayag at about 210 km, Dehradun at about 255 km and Delhi at about 430 km, against Haridwar's 230, and the road is the same from Rishikesh onward. If you arrive by air at Dehradun, the car meets the flight and the first day runs through Rishikesh without touching Haridwar; if you arrive by train at Haridwar, the first morning is the registration counter and then the road. From Delhi, most people add a night at Haridwar or Rishikesh for the Ganga aarti and start the mountain day fresh, which is how our packages plan it.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What to carry, and what the car carries</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>One medium bag each.</strong> Our Char Dham pages recommend a single 15 to 20 kg bag per pilgrim; a Tempo Traveller adds a roof carrier for trek gear, a car has the boot.</li>
<li class="ml-4"><strong>Layers and rain gear.</strong> Woollens, a waterproof and trekking shoes; the pages are blunt that mountain weather changes within hours even in summer, and the temple is at 3,583 metres.</li>
<li class="ml-4"><strong>The registration and the Aadhaar.</strong> Checked on the road and at Sonprayag; the driver keeps the group's papers together.</li>
<li class="ml-4"><strong>Oxygen on the packages.</strong> On our Char Dham packages the vehicle carries an oxygen cylinder, because the altitude at Kedarnath can bring on mild sickness; senior citizens are advised to consult a doctor before the climb and to use the pony, palki or helicopter.</li>
<li class="ml-4"><strong>Patience.</strong> The road-head days are long and the counters are busy in season; the car is not going anywhere without you.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Can a cab go all the way to Kedarnath?</h3>
<p class="text-gray-700 leading-relaxed mb-4">No. The road ends at Sonprayag, about 230 km from Haridwar; a shuttle reaches Gaurikund and the last 16 km are on foot, by pony, by palki or by helicopter.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Is registration compulsory for Kedarnath?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Yes, for every pilgrim, done online or at Haridwar, Rishikesh or Sonprayag with an Aadhaar card. The registration is checked on the road.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How many days does Haridwar to Kedarnath take by car?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Four: the drive up, the climb and the night at the temple, the descent, and the drive back. Do Dham with Badrinath is six.</p>`,
    city: "Haridwar",
    faqs: [
      { question: "Can a cab go all the way to Kedarnath?", answer: "No. The road from Haridwar ends at Sonprayag, about 230 km away on our Char Dham pages; a local shuttle covers the short hop to Gaurikund, and the last 16 km to the temple are on foot, by pony, by palki or by helicopter from Phata, Sersi or Guptkashi. The car waits at Sonprayag or Guptkashi." },
      { question: "Is a cab or a bus better from Haridwar to Kedarnath?", answer: "The bus is the cheaper seat; the cab is the easier journey, especially on the days you are up at the temple, when the car waits at the road-head and is there when you come down. Beyond Rishikesh the bus page says only buses up to 22 to 25 seats are advisable; any car manages the road." },
      { question: "How long does Haridwar to Sonprayag take?", answer: "A full day. Our Char Dham pages put it at about 230 km, and the bus page reckons eight to nine hours to Gaurikund through Rishikesh, Devprayag, Rudraprayag and Guptkashi, the usual night halt." },
      { question: "Is registration compulsory for Kedarnath?", answer: "Yes. Uttarakhand's Char Dham registration is compulsory for every pilgrim, done online beforehand or at the counters at Haridwar, Rishikesh or Sonprayag with an Aadhaar card. It is checked on the road and at Sonprayag." },
      { question: "How is the Kedarnath helicopter booked?", answer: "In advance on the official booking system, from the helipads at Phata, Sersi and Guptkashi; seats sell out in season. The fare is on that system. Pony and palki are hired on the day at the counters at Gaurikund." },
      { question: "How many days does Haridwar to Kedarnath take by car?", answer: "Four on our package page: the drive to Guptkashi or Sonprayag, the climb and the night at Kedarnath, the descent to Guptkashi, and the drive back to Haridwar. The Do Dham with Badrinath is six days." },
      { question: "What does the Haridwar to Kedarnath cab cost?", answer: "The rate card: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, with the road-head days billed as days. Tolls, parking and the driver's mountain halt are at actuals; the package page gives the total for each vehicle." },
      { question: "When is the best time to go to Kedarnath?", answer: "May to June and September to October, while the portals are open; the temple's dates are announced each year and confirmed on the official yatra site. The monsoon between them is the time to avoid on the mountain road." }
    ],
    date: "2026-09-14",
    readTime: "9 min read",
    image: "/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg",
    category: "Travel Tips",
    tags: ["kedarnath", "haridwar to kedarnath", "char dham", "sonprayag", "gaurikund", "pilgrimage", "uttarakhand", "2026"],
    keywords: ["haridwar to kedarnath by cab", "haridwar to kedarnath by bus", "haridwar to kedarnath distance", "haridwar to sonprayag taxi", "kedarnath registration", "how to reach kedarnath from haridwar"],
    featured: false,
    metaTitle: "Haridwar to Kedarnath: Cab or Bus, and How It Really Works",
    metaDescription: "No vehicle reaches Kedarnath: the road ends at Sonprayag, 230 km from Haridwar; the last 16 km are on foot, pony, palki or helicopter. Cab against bus, and the four days."
  },

  // 6 ============================================================
  {
    id: 92006,
    slug: 'ertiga-vs-innova-crysta-for-hire-which-one-for-your-trip',
    title: 'Ertiga vs Innova Crysta for Hire: Which One for Your Trip?',
    excerpt: 'On the rate card the Ertiga is ₹15/km and the Innova Crysta ₹18, so a 300 km day is ₹4,500 against ₹5,400. Both seat six to seven on paper; the Innova seats them as adults and carries twice the bags. Which to book for the plains, the hills and the city.',
    relatedTours: [
      { id: "suv-hire", name: "SUV Hire (Ertiga / Innova)", slug: "vehicles/suv", city: "delhi", price: "From ₹15/km" },
      { id: "innova-near-me", name: "Innova on Rent Near Me", slug: "innova-on-rent-near-me", city: "delhi", price: "From ₹18/km" }
    ],
    relatedDestinations: [
      { name: "Delhi", slug: "delhi", type: "city" },
      { name: "Manali", slug: "manali", type: "city" },
      { name: "Jaipur", slug: "jaipur", type: "city" }
    ],
    primaryCTA: {
      text: "Hire an Ertiga or Innova Crysta",
      link: "/vehicles/suv"
    },
    content: `<p class="blog-lead">The <strong>Ertiga</strong> is ₹15 a kilometre and the <strong>Innova Crysta</strong> ₹18 on our rate card, so on the 300 km per day minimum a day out is ₹4,500 against ₹5,400, a difference of ₹900 a day. Both are listed as six-to-seven seaters, but our comparison page is blunt about the difference: the Innova seats six or seven adults with legroom and swallows four or more large bags, while the Ertiga is comfortable for five with two bags and cramped in the third row. Book the Ertiga for four or five people on the plains, and the Innova Crysta for six, for luggage, or for any hill road. Both are on the <a href="/vehicles/suv" class="text-blue-600 hover:underline font-semibold">SUV hire page</a>; the Innova has its own <a href="/innova-on-rent-near-me" class="text-blue-600 hover:underline font-semibold">Innova on rent page</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What is the price difference between an Ertiga and an Innova Crysta?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Three rupees a kilometre. The rate card, which every page on this site uses, has the sedan at ₹11/km, the Ertiga and other SUVs at ₹15, the Innova Crysta at ₹18 and the 12-seater Tempo Traveller at ₹23, all on a 300 km per day minimum with tolls and parking at actuals. On the minimum that is ₹4,500 for the Ertiga and ₹5,400 for the Innova; on a two-day weekend within 300 km each way, ₹9,000 against ₹10,800. On the local package the gap is the same shape: the 4 hour / 40 km package is ₹2,500 for the Ertiga and ₹2,800 for the Innova, against ₹2,200 for a sedan, with kilometres beyond 40 at the per-km rate.</p>
<p class="text-gray-700 leading-relaxed mb-4">On a long corridor the gap grows with the distance. Delhi to Manali is 530 km, so ₹7,950 in the Ertiga and ₹9,540 in the Innova one-way; Delhi to Amritsar is 450 km, ₹6,750 against ₹8,100. Shared by six people, the Innova's extra is a few hundred rupees a head on a day out and worth it on most of the trips below; shared by two, it is the difference between the sedan and either of them that matters more.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Ertiga vs Innova Crysta side by side</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Question</th>
<th class="border border-gray-300 px-4 py-2 text-left">Maruti Ertiga</th>
<th class="border border-gray-300 px-4 py-2 text-left">Toyota Innova Crysta</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Rate</td><td class="border border-gray-300 px-4 py-2">₹15/km</td><td class="border border-gray-300 px-4 py-2">₹18/km</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">One day, 300 km minimum</td><td class="border border-gray-300 px-4 py-2">₹4,500</td><td class="border border-gray-300 px-4 py-2">₹5,400</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Two-day weekend within 300 km</td><td class="border border-gray-300 px-4 py-2">₹9,000</td><td class="border border-gray-300 px-4 py-2">₹10,800</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Local 4 hr / 40 km package</td><td class="border border-gray-300 px-4 py-2">₹2,500</td><td class="border border-gray-300 px-4 py-2">₹2,800</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Seats on paper</td><td class="border border-gray-300 px-4 py-2">6 to 7</td><td class="border border-gray-300 px-4 py-2">6 to 7</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Seats in practice, on our comparison page</td><td class="border border-gray-300 px-4 py-2">Five adults; the third row is cramped on a long trip</td><td class="border border-gray-300 px-4 py-2">Six or seven adults, all three rows with legroom</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Boot</td><td class="border border-gray-300 px-4 py-2">Medium, about 209 litres; two large bags</td><td class="border border-gray-300 px-4 py-2">Large, over 300 litres; four or more large bags</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Engine</td><td class="border border-gray-300 px-4 py-2">Petrol or CNG; frugal, less pull on steep hills</td><td class="border border-gray-300 px-4 py-2">Diesel; the torque tells on inclines</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Cabin</td><td class="border border-gray-300 px-4 py-2">Manual AC, nimble in the city, easy to park</td><td class="border border-gray-300 px-4 py-2">Dual-zone AC, wider seats, better suspension on rough roads</td></tr>
</tbody></table>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">When the Ertiga is the right car</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Four or five people on the plains.</strong> Delhi to Agra, Delhi to Jaipur, Delhi to Mathura and Vrindavan, Chandigarh: flat highways where the Ertiga's smaller engine is never stretched and its price is the point.</li>
<li class="ml-4"><strong>City transfers and local sightseeing.</strong> It is easier to park and quicker through traffic, and the 4 hour / 40 km package at ₹2,500 is the cheapest way to move five people around a city for a morning.</li>
<li class="ml-4"><strong>Light luggage.</strong> Two large bags in the boot, or more if the third row is folded for a party of four.</li>
<li class="ml-4"><strong>Short weekends.</strong> One night away within 300 km, where the ₹900 a day adds up to less than the Innova earns.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">When the Innova Crysta is the right car</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Six adults, or five with luggage for a week.</strong> Every row is an adult row and the boot takes the bags; our comparison page recommends the Innova for six or seven adults without qualification.</li>
<li class="ml-4"><strong>Any hill road.</strong> Manali, Shimla, Nainital, Mussoorie, the Char Dham corridors: the diesel torque on the climbs and the suspension on the broken stretches are why our hill pages recommend an SUV or Innova, and why the drivers prefer it above Rishikesh.</li>
<li class="ml-4"><strong>Long days.</strong> Delhi to Amritsar or Delhi to Manali in one go is a seven-to-thirteen-hour day; the wider seats and the quieter cabin are what the extra ₹3 a kilometre buys.</li>
<li class="ml-4"><strong>Elders and children.</strong> The step-in height, the legroom and the AC in every row make the difference on a pilgrimage or a family holiday.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The worked example: Delhi to Manali for six</h2>
<p class="text-gray-700 leading-relaxed mb-4">Delhi to Manali is 530 km and twelve to thirteen hours on NH-44 and NH-21 through Chandigarh, Bilaspur and Mandi, with four toll plazas totalling ₹455 for a car. One-way the Ertiga is ₹7,950 and the Innova Crysta ₹9,540, a difference of ₹1,590 or ₹265 a head for six. On the hill road after Mandi the Ertiga with six adults and their winter luggage is at the limit of what it does well; the Innova is not. Our comparison page's verdict is the one we give at booking: Innova for Manali, Shimla and any trip over about 500 km or into the hills, Ertiga for four or five people on the plains within a day's drive.</p>
<p class="text-gray-700 leading-relaxed mb-4">The one case where neither is right is a group of eight or more, where a 12-seater Tempo Traveller at ₹23/km is cheaper per head than two SUVs and keeps everyone together. And for two people with light luggage on a plains road, the sedan at ₹11/km is the honest answer, whichever of these two you were choosing between.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">How to book the one you want</h2>
<p class="text-gray-700 leading-relaxed mb-4">Ask for it by name. The SUV rate of ₹15/km covers the Ertiga and similar cars; the Innova Crysta is its own line on the rate card at ₹18/km and is booked as such, and the <a href="/innova-crysta-rent-per-km" class="text-blue-600 hover:underline font-semibold">Innova Crysta rent per km page</a> sets out the arithmetic for common corridors. Tell us the head count, the luggage and the road, and if the answer is different from what you asked for we will say so before the booking, not on the morning.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Two more worked examples: Jaipur for the weekend and a city day</h2>
<p class="text-gray-700 leading-relaxed mb-4">Delhi to Jaipur is 280 km on our toll page, with three plazas at Kherki Daula, Manesar and Shahjahanpur taking ₹400 from a car. One-way it bills the 300 km minimum in either car, ₹4,500 in the Ertiga and ₹5,400 in the Innova Crysta, and a two-day weekend with the car staying is two days at the minimum, ₹9,000 against ₹10,800, because the round trip of 560 km is under the 600 km that two days allow. On a flat highway with four or five people and weekend bags, that ₹1,800 is the Ertiga's argument, and it is a good one; with six adults it is the Innova's, because the third row of the Ertiga is not a place to spend four hours.</p>
<p class="text-gray-700 leading-relaxed mb-4">A city day is the other end of the scale. The 4 hour / 40 km package is ₹2,500 for the Ertiga and ₹2,800 for the Innova Crysta, with kilometres beyond the forty at ₹15 and ₹18 respectively, so a morning of temples or offices in the same city costs ₹300 more in the Innova and a long day with extra distance costs a little more again. For a group of five doing a wedding round or a business day in the city, the Ertiga is the sensible car; for the same group with elders, or in the summer heat, the Innova's dual-zone AC and wider seats earn the difference.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What the drivers add</h2>
<p class="text-gray-700 leading-relaxed mb-4">The drivers who run both cars say the same three things. The Ertiga is the car they reach for on the plains because it is easy to park, easy in traffic and light on fuel, and none of that costs the passengers anything. The Innova is the car they reach for above Rishikesh or beyond Mandi, because a full load on a steep bend is where the diesel torque and the suspension stop being a luxury and start being the reason the day goes to plan. And on a very long day, Delhi to Amritsar or Delhi to Manali in one go, it is the Innova's quieter cabin and wider seats that the passengers remember, not the ₹3 a kilometre. Our comparison page scores the two the same way: the Ertiga ahead on price, mileage and city driving, the Innova ahead on comfort, boot space and hill performance, and the verdict following the road rather than the badge.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How much more does an Innova Crysta cost than an Ertiga?</h3>
<p class="text-gray-700 leading-relaxed mb-4">₹3 a kilometre, ₹18 against ₹15. On the 300 km per day minimum that is ₹5,400 against ₹4,500, and ₹10,800 against ₹9,000 for a two-day weekend.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Can an Ertiga carry seven people on an outstation trip?</h3>
<p class="text-gray-700 leading-relaxed mb-4">It seats seven, but our comparison page recommends a maximum of five for outstation travel because the third row is cramped for adults. For six or seven, book the Innova Crysta.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Which is better for a hill station?</h3>
<p class="text-gray-700 leading-relaxed mb-4">The Innova Crysta. The diesel torque handles the climbs and the suspension the broken stretches; our hill pages recommend an SUV or Innova for Manali, Shimla and the Uttarakhand corridors.</p>`,
    city: "Delhi",
    faqs: [
      { question: "How much more does an Innova Crysta cost than an Ertiga?", answer: "₹3 a kilometre on the rate card, ₹18 against ₹15. On the 300 km per day minimum that is ₹5,400 against ₹4,500 for a day, and ₹10,800 against ₹9,000 for a two-day weekend within 300 km. On the local 4 hour / 40 km package it is ₹2,800 against ₹2,500." },
      { question: "Can an Ertiga carry seven people on an outstation trip?", answer: "It seats seven on paper, but our comparison page recommends a maximum of five for outstation travel because the third row is cramped for adults on a long drive. For six or seven adults, book the Innova Crysta, where all three rows have legroom." },
      { question: "Which has more luggage space, the Ertiga or the Innova Crysta?", answer: "The Innova Crysta, by a clear margin: our comparison page puts its boot at over 300 litres, four or more large bags, against the Ertiga's medium boot of about 209 litres, two large bags. For a week's luggage for a family the Innova is the practical choice." },
      { question: "Which is better for a hill station, Ertiga or Innova?", answer: "The Innova Crysta. Its diesel torque handles the climbs and its suspension the broken stretches, which is why our Manali, Shimla and Uttarakhand pages recommend an SUV or Innova for the hill roads. The Ertiga manages the plains and gentle hills well but is at its limit with six adults and luggage on a mountain road." },
      { question: "When is the Ertiga the better choice?", answer: "For four or five people on the plains, city transfers and local sightseeing, light luggage and short weekends within 300 km. On Delhi to Agra, Jaipur or Mathura the Ertiga's smaller engine is never stretched and its lower rate is the point." },
      { question: "What does Delhi to Manali cost in each?", answer: "530 km at the rate card: ₹7,950 one-way in the Ertiga at ₹15/km and ₹9,540 in the Innova Crysta at ₹18/km, a difference of ₹1,590, plus ₹455 in tolls for a car and parking at actuals. For the hill road after Mandi the Innova is the one we recommend." },
      { question: "Can I request an Innova Crysta specifically?", answer: "Yes. The SUV rate covers the Ertiga and similar cars, and the Innova Crysta is its own line on the rate card at ₹18/km; ask for it by name and it is booked as such. Tell us the head count, the luggage and the road, and we will say if a different car suits better." }
    ],
    date: "2026-09-14",
    readTime: "8 min read",
    image: "/images/car/innova_crysta.jpg",
    category: "Cost Guide",
    tags: ["ertiga", "innova crysta", "suv hire", "car comparison", "outstation cab", "family trip", "2026"],
    keywords: ["ertiga vs innova crysta", "ertiga vs innova for outstation", "innova crysta hire per km", "ertiga hire per km", "which car for family trip", "suv on rent delhi"],
    featured: false,
    metaTitle: "Ertiga vs Innova Crysta for Hire: ₹15 vs ₹18/km, Which?",
    metaDescription: "Ertiga ₹15/km against Innova Crysta ₹18/km: ₹4,500 versus ₹5,400 on a 300 km day. Seats, luggage, hills and the plains compared, with the verdict for each kind of trip."
  },

  // 7 ============================================================
  {
    id: 92007,
    slug: 'snowfall-places-near-delhi-this-winter-by-road',
    title: 'Snowfall Places Near Delhi This Winter: Where the Snow Is and How Far It Is by Road',
    excerpt: 'Where snow is usual within a day of Delhi and how far each place is by the site\'s own distance pages: Mussoorie 290 km, Dhanaulti 315, Shimla 350, Chopta 450, Auli 520, Manali 530, with Narkanda beyond Shimla. The months, the roads and the rate-card fares.',
    relatedTours: [
      { id: "shimla-cab", name: "Delhi to Shimla Cab", slug: "delhi-to-shimla", city: "delhi", price: "From ₹11/km" },
      { id: "manali-cab", name: "Delhi to Manali Cab", slug: "delhi-to-manali", city: "delhi", price: "From ₹11/km" }
    ],
    relatedDestinations: [
      { name: "Shimla", slug: "shimla", type: "city" },
      { name: "Manali", slug: "manali", type: "city" },
      { name: "Mussoorie", slug: "mussoorie", type: "city" }
    ],
    primaryCTA: {
      text: "Book a winter cab from Delhi",
      link: "/delhi-to-shimla"
    },
    content: `<p class="blog-lead">Snow within a day's drive of Delhi is a matter of height, not distance, and the places where it is usual in winter are the high ones: <strong>Mussoorie</strong> at 290 km, <strong>Dhanaulti</strong> above it at 315 km, <strong>Shimla</strong> at 350 km with Kufri and Narkanda higher up the same road, <strong>Chopta</strong> at 450 km, <strong>Auli</strong> at 520 km and <strong>Manali</strong> at 530 km. Those are the distances our own pages publish. None of them can promise snow on a given date; December to February is when it usually lies, the higher the place the more reliably, and the honest way to plan is to pick a high place, watch the forecast in the week before, and go with a driver who carries chains. A sedan bills ₹11/km on a 300 km per day minimum; the hill pages recommend an SUV or Innova for the climbs. The <a href="/delhi-to-shimla" class="text-blue-600 hover:underline font-semibold">Delhi to Shimla cab</a> and the <a href="/delhi-to-manali" class="text-blue-600 hover:underline font-semibold">Delhi to Manali cab</a> are the two most people book.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Snowfall places near Delhi, by distance</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Place</th>
<th class="border border-gray-300 px-4 py-2 text-left">Distance from Delhi</th>
<th class="border border-gray-300 px-4 py-2 text-left">Drive time</th>
<th class="border border-gray-300 px-4 py-2 text-left">Road</th>
<th class="border border-gray-300 px-4 py-2 text-left">Tolls, car</th>
<th class="border border-gray-300 px-4 py-2 text-left">Snow, in a usual winter</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Mussoorie</td><td class="border border-gray-300 px-4 py-2">290 km</td><td class="border border-gray-300 px-4 py-2">6 to 7 hrs</td><td class="border border-gray-300 px-4 py-2">NH-334 via Meerut and Dehradun; 35 km of hill road at the end</td><td class="border border-gray-300 px-4 py-2">₹215, 2 plazas</td><td class="border border-gray-300 px-4 py-2">December to February, some years more than others</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Dhanaulti</td><td class="border border-gray-300 px-4 py-2">315 km</td><td class="border border-gray-300 px-4 py-2">8 to 9 hrs</td><td class="border border-gray-300 px-4 py-2">NH-7 to Rishikesh, then Narendranagar and Chamba</td><td class="border border-gray-300 px-4 py-2">At actuals</td><td class="border border-gray-300 px-4 py-2">Higher than Mussoorie, so snow lies longer in the deodar forest</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Shimla</td><td class="border border-gray-300 px-4 py-2">350 km</td><td class="border border-gray-300 px-4 py-2">7 to 8 hrs</td><td class="border border-gray-300 px-4 py-2">NH-44 and NH-5 via Karnal, Ambala, Pinjore and Solan</td><td class="border border-gray-300 px-4 py-2">₹390, 3 plazas</td><td class="border border-gray-300 px-4 py-2">December for snow on our pages; Kufri above the town more often than the Mall</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Narkanda</td><td class="border border-gray-300 px-4 py-2">60 km beyond Shimla</td><td class="border border-gray-300 px-4 py-2">About 2 hrs from Shimla</td><td class="border border-gray-300 px-4 py-2">The Rampur road out of Shimla; Hatu Peak above it</td><td class="border border-gray-300 px-4 py-2">At actuals</td><td class="border border-gray-300 px-4 py-2">Snow at Narkanda is common in winter, by our Shimla to Manali travel-by-car page</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Chopta</td><td class="border border-gray-300 px-4 py-2">450 km</td><td class="border border-gray-300 px-4 py-2">12 to 13 hrs</td><td class="border border-gray-300 px-4 py-2">NH-7 through Rishikesh, Devprayag and Rudraprayag, then the climb via Ukhimath</td><td class="border border-gray-300 px-4 py-2">At actuals</td><td class="border border-gray-300 px-4 py-2">A high meadow at about 2,700 m; the Tungnath trek above it is a snow walk in winter</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Auli</td><td class="border border-gray-300 px-4 py-2">520 km to Joshimath</td><td class="border border-gray-300 px-4 py-2">13 to 14 hrs</td><td class="border border-gray-300 px-4 py-2">NH-7 up the Ganga and the Alaknanda to Joshimath; the ropeway or a short hill road to Auli</td><td class="border border-gray-300 px-4 py-2">At actuals</td><td class="border border-gray-300 px-4 py-2">The ski slopes; the most reliable snow on the list</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Manali</td><td class="border border-gray-300 px-4 py-2">530 km</td><td class="border border-gray-300 px-4 py-2">12 to 13 hrs</td><td class="border border-gray-300 px-4 py-2">NH-44 and NH-21 via Chandigarh, Bilaspur and Mandi</td><td class="border border-gray-300 px-4 py-2">₹455, 4 plazas</td><td class="border border-gray-300 px-4 py-2">The town most winters; Solang and the Atal Tunnel side more reliably; Rohtang closed</td></tr>
</tbody></table>
<p class="text-gray-700 leading-relaxed mb-4">Distances and times are the ones our distance and one-way pages publish; tolls are from the toll pages where one exists, and at actuals where none does. The snow column is what a usual winter brings, not a forecast.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Which snowfall place is nearest to Delhi?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Mussoorie, at 290 km and six to seven hours on NH-334 through Meerut and Dehradun, with the last 35 km the hill road up from Dehradun. Our Dehradun to Mussoorie distance page gives December to February for snow, and the town sits above the fog line of the plains, so a winter morning's climb comes out of the murk into sunshine whether or not there is snow on the ground. When there is, the shaded bends ice over and the police may hold cars at the bottom until the road is cleared; a later start and a patient driver are the winter rules. Dhanaulti, about 25 km beyond Mussoorie on the Chamba road and higher, at about 2,300 metres by our one-way page, keeps its snow longer in the deodar forest and is the better bet when Mussoorie has only a dusting.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Shimla, Kufri and Narkanda: the Himachal side</h2>
<p class="text-gray-700 leading-relaxed mb-4">Shimla is 350 km and seven to eight hours on NH-44 and NH-5 through Karnal, Ambala, Pinjore and Solan, with three toll plazas on the way that take ₹390 from a car. Our pages give December for snow and March to June for the escape from the heat, and the practical rule is that the snow is more reliable the higher you go: Kufri, above the town, has it more often than the Mall Road, and Narkanda, 60 km further along the Rampur road by our Shimla to Manali travel-by-car page, has it as a matter of course, with Hatu Peak above it. A Shimla winter trip that wants snow is usually a Shimla base with a day's run to Kufri or Narkanda with the same driver; the <a href="/best-time-to-visit/shimla" class="text-blue-600 hover:underline font-semibold">best time to visit Shimla</a> page goes through the months.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Manali, Solang and the Atal Tunnel</h2>
<p class="text-gray-700 leading-relaxed mb-4">Manali is the long one: 530 km and twelve to thirteen hours through Chandigarh, Bilaspur, Mandi and Kullu, with four plazas totalling ₹455 and no tolls after Bilaspur. It is also the surest snow for a town of its size, and the surest snow play, because Solang Valley above the town and the Lahaul side of the Atal Tunnel at Sissu carry snow when the town itself is clear. Rohtang is closed by snow from December to April in a normal year, so a winter Manali trip is Solang and the tunnel, not the pass. Our Manali pages recommend an SUV or Innova for the hill road, and in winter the drivers prefer it without argument; the <a href="/best-time-to-visit/manali" class="text-blue-600 hover:underline font-semibold">best time to visit Manali</a> page covers the months.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Auli and Chopta: the Garhwal high ground</h2>
<p class="text-gray-700 leading-relaxed mb-4">These are the two for people who want snow rather than a snowy town. Auli is the ski destination: our one-way page puts Delhi to Joshimath, the road-head, at about 520 km and thirteen to fourteen hours on NH-7 up the Ganga and the Alaknanda through Rishikesh, Devprayag and the confluences, and the slopes at around 2,900 metres are reached from Joshimath by the ropeway or a short hill road, which is separate from the taxi. It is a long drive best split with a night at Rishikesh or Srinagar in Garhwal. Chopta is the meadow at about 2,700 metres on the way to Tungnath, 450 km and twelve to thirteen hours on the same NH-7 as far as Rudraprayag and then the climb through the forest via Ukhimath; the car goes to Chopta, and Tungnath and Chandrashila above it are a walk, in winter a snow walk. Neither corridor has a toll page, so tolls are at actuals, and both want a very early start or a halt on the way.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What a winter cab costs, and how to plan it</h2>
<p class="text-gray-700 leading-relaxed mb-4">The rate card does not change for the season: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, with tolls, parking and any hill charges at actuals. Mussoorie at 290 km bills the minimum, ₹3,300 for a sedan one-way; Shimla at 350 km is ₹3,850; Manali at 530 km is ₹5,830 and Auli at 520 km is ₹5,720. A weekend with the car staying bills the greater of twice the one-way fare or the days at the minimum, and on the long corridors it is the distance that counts.</p>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Pick the height, not the name.</strong> Kufri over the Mall, Dhanaulti over Mussoorie, Solang over Manali town: the higher place has the snow when the lower one has the slush.</li>
<li class="ml-4"><strong>Watch the week before.</strong> Snow is usual in these months, not guaranteed on a date; the forecast the week before decides which of the list to book.</li>
<li class="ml-4"><strong>Book an SUV or Innova.</strong> Every hill page on this site says so, and in winter the drivers carry chains and expect to use them above the snow line.</li>
<li class="ml-4"><strong>Leave later, not earlier.</strong> The plains fog in December and January and the shaded bends ice in the early morning; a start that reaches the hill road at midday is the winter start.</li>
<li class="ml-4"><strong>Hold a spare day.</strong> A fresh fall can close a road for a morning; the trips that go wrong in winter are the ones with a flight to catch.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Which is the nearest place to Delhi to see snow?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Mussoorie, at 290 km and six to seven hours, with Dhanaulti above it at 315 km keeping its snow longer. Snow is usual there from December to February but not guaranteed on a date.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Where is snow most reliable within a day of Delhi?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Auli, the ski slopes above Joshimath at 520 km, and the high ground around Manali, Solang and the Atal Tunnel side, at 530 km; both are long drives best split with a night on the way.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Is Rohtang open for snow in winter?</h3>
<p class="text-gray-700 leading-relaxed mb-4">No; it is closed by snow from December to April in a normal year. Solang Valley and the Atal Tunnel to Sissu are the winter snow runs from Manali.</p>
<p class="text-gray-700 leading-relaxed mb-4"><strong>Read next:</strong> <a href="/blog/winter-snow-destinations-north-india-complete-guide-2026">Winter Snow Destinations in North India: Travel Guide 2026</a></p>`,
    city: "Delhi",
    faqs: [
      { question: "Which is the nearest place to Delhi to see snow?", answer: "Mussoorie, at 290 km and six to seven hours on NH-334 via Meerut and Dehradun, with Dhanaulti above it at 315 km keeping its snow longer in the deodar forest. Snow is usual there from December to February but not guaranteed on a date, so watch the forecast the week before." },
      { question: "Where is snow most reliable within a day's drive of Delhi?", answer: "Auli, the ski slopes above Joshimath at about 520 km, and the high ground around Manali at 530 km, where Solang Valley and the Lahaul side of the Atal Tunnel carry snow when the town is clear. Both are long drives best split with a night on the way." },
      { question: "How far is Shimla from Delhi, and does it snow there?", answer: "350 km and seven to eight hours on NH-44 and NH-5, with three toll plazas totalling ₹390 for a car. Our pages give December for snow; Kufri above the town has it more often than the Mall Road, and Narkanda, 60 km further along the Rampur road, has it as a matter of course." },
      { question: "Is Rohtang Pass open for snow in winter?", answer: "No. Rohtang is closed by snow from December to April in a normal year. A winter Manali trip goes to Solang Valley and through the Atal Tunnel to Sissu for snow; neither needs the Rohtang permit." },
      { question: "How much does a winter cab from Delhi to the hills cost?", answer: "The rate card is the same all year: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum. Mussoorie bills ₹3,300 one-way for a sedan, Shimla ₹3,850, Auli ₹5,720 and Manali ₹5,830, plus tolls and parking at actuals." },
      { question: "Which car should I book for a snow trip?", answer: "An SUV or Innova Crysta. Every hill page on this site recommends it for the climbs, and in winter the drivers carry chains and expect to use them above the snow line. A sedan manages the plains and the lower hill roads but not a snowed bend with a full load." },
      { question: "What time should I leave Delhi in winter?", answer: "Later than in summer. The plains fog in December and January and the shaded hill bends ice in the early morning, so a start that reaches the hill road around midday is the winter start. Hold a spare day for a fresh fall that closes a road for a morning." },
      { question: "Are Chopta and Auli reachable by cab in winter?", answer: "The car reaches Chopta, or Sari village nearby, and Joshimath for Auli, both on NH-7 through Rishikesh; Tungnath above Chopta is a walk and Auli is by ropeway or a short hill road from Joshimath. Both are twelve hours or more from Delhi and best done with a night at Rishikesh or on the way, and the driver checks the road position before the climb." }
    ],
    date: "2026-09-14",
    readTime: "9 min read",
    image: "/images/sightseeing/Kufri/kufri_hero_section.jpg",
    category: "Destinations",
    tags: ["snowfall near delhi", "winter trip", "shimla", "manali", "auli", "mussoorie", "dhanaulti", "chopta", "2026"],
    keywords: ["snowfall places near delhi", "snow places near delhi", "nearest snowfall place from delhi", "snowfall near delhi in december", "delhi to auli distance", "delhi to shimla snowfall"],
    featured: false,
    metaTitle: "Snowfall Places Near Delhi: Where the Snow Is, How Far",
    metaDescription: "Snowfall places within a day of Delhi by road: Mussoorie 290 km, Dhanaulti 315, Shimla 350, Chopta 450, Auli 520, Manali 530. The usual months, the roads and the fares."
  },

  // 8 ============================================================
  {
    id: 92008,
    slug: 'kashi-vishwanath-darshan-first-time-visitor-sequence-gates-car',
    title: 'Kashi Vishwanath Darshan for a First-Time Visitor: The Sequence, the Gates and Where the Car Stops',
    excerpt: 'The car reaches Godowlia and no further; the temple is a five-minute walk through Vishwanath Gali or along the corridor from the river. What is left outside, how the queue moves, how the aartis run as a sequence, and how the day fits around the Dashashwamedh aarti.',
    relatedTours: [
      { id: "varanasi-tour", name: "Varanasi Sightseeing Tour", slug: "sightseeing/varanasi", city: "varanasi", price: "From ₹11/km" },
      { id: "delhi-varanasi", name: "Delhi to Varanasi Cab", slug: "delhi-to-varanasi", city: "delhi", price: "From ₹11/km" }
    ],
    relatedDestinations: [
      { name: "Varanasi", slug: "varanasi", type: "city" },
      { name: "Delhi", slug: "delhi", type: "city" }
    ],
    primaryCTA: {
      text: "Book a Varanasi cab",
      link: "/varanasi"
    },
    content: `<p class="blog-lead"><strong>Kashi Vishwanath</strong> is reached on foot, not by car. Vehicles go as far as Godowlia Chowk, which our Varanasi local-taxi page puts at a five-minute walk from the temple, and the driver uses the Dashashwamedh parking while you go in. From Godowlia the temple is approached through Vishwanath Gali, the lane of shops that ends at the entrance, or from the river along the new corridor that joins the ghat to the shrine. Phones, cameras and bags are left at the desk outside, shoes come off, the queue moves through the security check into the complex, and the darshan of the Jyotirlinga is a few seconds at the sanctum door before the line carries you on. There are no timings or ticket figures on this page, because they change with the festival calendar; the temple's official desk has the day's arrangement. The rest of Varanasi, and the drive there, is on our <a href="/varanasi" class="text-blue-600 hover:underline font-semibold">Varanasi cab page</a> and the <a href="/varanasi-travel-guide" class="text-blue-600 hover:underline font-semibold">Varanasi travel guide</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Where does the car stop for Kashi Vishwanath?</h2>
<p class="text-gray-700 leading-relaxed mb-4">At the edge of the old city. The lanes behind the ghats are too narrow for a car and most of them are closed to four-wheelers in any case, so, as our Delhi to Varanasi guide puts it, the drive ends at the edge of the Godowlia crossing, where the driver uses the Dashashwamedh parking, and the last stretch to the ghats and to the corridor is on foot or by cycle-rickshaw. Godowlia is the busiest crossing in the city, and the driver will drop you on the side nearest the lane rather than try to wait in the crossing itself. If your hotel is on the ghats, give the driver its name and he will bring you to the nearest point a car can reach; hotels in the Cantonment, at Sigra and along the ring road are reached directly.</p>
<p class="text-gray-700 leading-relaxed mb-4">From the car there are two ways in. The first is Vishwanath Gali, the lane of brass, silk and sweet shops that runs from near Godowlia to the temple's town-side entrance, and it is the way most first-time visitors go, because it is the way the crowd goes. The second is from the river: walk down to Dashashwamedh Ghat and along the waterfront to the corridor entrance, and go up through the new corridor that connects the temple directly to the Ganga. The corridor way is the more open and the better one after a morning boat ride; the lane is the one that puts you among the pilgrims.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The darshan, step by step</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Leave the phone behind.</strong> Phones, cameras and bags do not go in; the desks and lockers outside the entrance hold them, and the shops in the lane will hold them too for a small charge. Carry an ID and the offering only. Check the temple's official desk for the current list of what is not allowed.</li>
<li class="ml-4"><strong>Shoes off.</strong> At the stands outside the entrance; keep the token.</li>
<li class="ml-4"><strong>The security check.</strong> Everyone passes through it, and this is where the queue forms. On an ordinary weekday morning it moves steadily; on a Monday, in the month of Shravan and around the big festivals it is long, and the general line and the special-darshan lines are separate. The special-darshan and ticket arrangements, and what they cost, are the temple's to publish and change; ask at the official desk, not at the lane.</li>
<li class="ml-4"><strong>Into the complex.</strong> The corridor has opened the temple out, so the walk from the check to the sanctum is now through courtyards rather than lanes. The line files past the smaller shrines and up to the main temple.</li>
<li class="ml-4"><strong>The sanctum.</strong> The darshan of the Jyotirlinga is a few seconds at the door, with the offering handed in and the line kept moving by the attendants. Do not plan on standing still; the moment is short and it is meant to be.</li>
<li class="ml-4"><strong>Out through the courtyards.</strong> The shrines around the main temple, the view of the river from the corridor side, and then the shoes, the phone and the lane or the ghat.</li>
</ul>
<p class="text-gray-700 leading-relaxed mb-4">The aartis run as a sequence through the day rather than as a single event: an aarti before dawn that opens the temple, aartis through the day and evening, and a final one that closes it. Attending one means being inside the complex at that time, and the arrangements for it are ticketed and change with the calendar, so the official desk is again the place to ask. Most first-time visitors do a plain darshan in the morning and keep the evening for the river.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The day around the temple</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Part of the day</th>
<th class="border border-gray-300 px-4 py-2 text-left">Where</th>
<th class="border border-gray-300 px-4 py-2 text-left">How you get there</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Sunrise</td><td class="border border-gray-300 px-4 py-2">A boat from Assi to Manikarnika</td><td class="border border-gray-300 px-4 py-2">On foot from the ghats; our guide calls it the one thing in Varanasi that needs no car</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Morning</td><td class="border border-gray-300 px-4 py-2">Kashi Vishwanath darshan</td><td class="border border-gray-300 px-4 py-2">Car to Godowlia, then Vishwanath Gali or the corridor from the ghat</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Breakfast</td><td class="border border-gray-300 px-4 py-2">Kachori and chai in the old town; the food tour names Ram Bhandar near Godowlia</td><td class="border border-gray-300 px-4 py-2">On foot</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Afternoon</td><td class="border border-gray-300 px-4 py-2">Sarnath, ten kilometres north on the Cantonment side</td><td class="border border-gray-300 px-4 py-2">The car takes you and waits</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Early evening</td><td class="border border-gray-300 px-4 py-2">The Ganga aarti at Dashashwamedh Ghat</td><td class="border border-gray-300 px-4 py-2">Car to Godowlia; the steps fill well before it starts, so go straight from the car</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">After dark</td><td class="border border-gray-300 px-4 py-2">Chaat at Godowlia, paan in the lane</td><td class="border border-gray-300 px-4 py-2">On foot back to the car</td></tr>
</tbody></table>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">How does the Dashashwamedh aarti fit in?</h2>
<p class="text-gray-700 leading-relaxed mb-4">It is the other fixed point of a Varanasi day and it is a short walk from the temple, so the two are usually done on the same trip to Godowlia. The aarti is held on the ghat every evening, in the early evening, and the steps and the boats in front of them fill well before it begins; our Delhi to Varanasi guide says a car arriving from Delhi in the late afternoon still makes it if you go straight from the car, and that is the rule for anyone: be on the steps early or watch it from a boat. The priests perform it as a sequence, the lamps, the conches, the incense and the fire in turn, and it ends with the crowd leaving the ghat together, so let the first rush clear before walking back to Godowlia for the car. Our <a href="/sightseeing/varanasi" class="text-blue-600 hover:underline font-semibold">Varanasi sightseeing tour</a> builds the day this way: the boat at sunrise, the temple, Sarnath, the aarti.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What a first-time visitor gets wrong</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Arriving by car at the temple.</strong> It cannot be done; Godowlia is the end of the road and the walk is short. Tell the driver "Godowlia, Dashashwamedh parking" and the rest is on foot.</li>
<li class="ml-4"><strong>Carrying the phone in.</strong> It goes to the locker, and the queue is not the place to discover that. Leave it with the driver if you would rather; the car is a few minutes away.</li>
<li class="ml-4"><strong>Following a tout for a "quick darshan".</strong> The lane has many. The temple's own arrangements are at its official desk and counters, and the driver knows where they are.</li>
<li class="ml-4"><strong>Coming on a Monday or a festival without allowing for it.</strong> The queue is a different animal on those days; go early or accept the wait.</li>
<li class="ml-4"><strong>Trying to do the temple and the aarti in one push.</strong> They are a walk apart but hours apart; the temple in the morning and the ghat in the evening is the pattern that works.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Getting to Varanasi by road</h2>
<p class="text-gray-700 leading-relaxed mb-4">From Delhi the best route by car is the Yamuna Expressway to Agra, the Agra–Lucknow Expressway to Lucknow and then the highway through Sultanpur and Jaunpur: about 820 km and twelve to fourteen hours, which our guide recommends splitting at Lucknow, 550 km in, so that the last 300 km are driven fresh and the car arrives in Varanasi at lunchtime with the afternoon for Sarnath and the evening for the aarti. On the rate card the sedan is ₹11/km, the Ertiga or SUV ₹15, the Innova Crysta ₹18 and the 12-seater Tempo Traveller ₹23, on a 300 km per day minimum, with tolls and the driver's night halt at actuals; 820 km bills its distance. The <a href="/delhi-to-varanasi-best-route-by-car" class="text-blue-600 hover:underline font-semibold">Delhi to Varanasi route guide</a> walks the road kilometre by kilometre; once you are in the city, the same driver does Sarnath, the Cantonment and the airport, and the temple is always on foot from Godowlia.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Can a car reach Kashi Vishwanath Temple?</h3>
<p class="text-gray-700 leading-relaxed mb-4">No. Vehicles go as far as Godowlia Chowk, a five-minute walk from the temple; the driver uses the Dashashwamedh parking and you walk through Vishwanath Gali or along the corridor from the ghat.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">What do I leave outside the temple?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Phones, cameras and bags, at the desks and lockers outside the entrance, and shoes at the stands. Carry an ID and the offering; check the official desk for the current list.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">What are the darshan timings and ticket prices?</h3>
<p class="text-gray-700 leading-relaxed mb-4">They change with the festival calendar and are the temple's to publish, so this page gives none; the temple's official desk has the day's arrangement for the general line, special darshan and the aartis.</p>`,
    city: "Varanasi",
    faqs: [
      { question: "Can a car reach Kashi Vishwanath Temple?", answer: "No. Vehicles go as far as Godowlia Chowk, which our Varanasi local-taxi page puts at a five-minute walk from the temple; the driver uses the Dashashwamedh parking and you walk through Vishwanath Gali or along the corridor from the ghat. The old-city lanes are closed to four-wheelers." },
      { question: "Which gate should a first-time visitor use?", answer: "The town-side entrance at the end of Vishwanath Gali, reached from Godowlia, is the way the crowd goes; the corridor entrance from the river, reached along the ghats from Dashashwamedh, is the more open way and the natural one after a morning boat ride. Both lead to the same security check and the same line." },
      { question: "What do I leave outside the temple?", answer: "Phones, cameras and bags, at the desks and lockers outside the entrance or with the driver at the car; shoes at the stands. Carry an ID and the offering only. The temple's official desk has the current list of what is not allowed." },
      { question: "How does the darshan work?", answer: "Security check, then the line through the courtyards of the corridor past the smaller shrines to the main temple, then a few seconds at the sanctum door for the darshan of the Jyotirlinga with the offering handed in, then out through the courtyards. The general line and the special-darshan lines are separate; the temple's official desk sets the arrangements." },
      { question: "What are the darshan timings and the ticket prices?", answer: "They change with the festival calendar and are the temple's to publish, so this page gives no figures. The temple's official desk has the day's arrangement for the general line, special darshan and the aartis; do not take them from the lane." },
      { question: "How do I fit the Dashashwamedh aarti into the same day?", answer: "Do the temple in the morning and the ghat in the early evening; they are a short walk apart but hours apart. The steps fill well before the aarti begins, so go straight from the car at Godowlia, or watch from a boat, and let the crowd clear before walking back." },
      { question: "How far is Varanasi from Delhi by road?", answer: "About 820 km and twelve to fourteen hours by the Yamuna and Agra–Lucknow expressways and the highway through Sultanpur and Jaunpur. Our route guide recommends splitting the drive at Lucknow, 550 km in. On the rate card a sedan is ₹11/km, an Ertiga ₹15, an Innova Crysta ₹18 and a Tempo Traveller ₹23, with tolls and the night halt at actuals." }
    ],
    date: "2026-09-14",
    readTime: "8 min read",
    image: "/images/sightseeing/Varanasi/Kashi_Vishwanath_Temple.jpg",
    category: "Travel Tips",
    tags: ["kashi vishwanath", "varanasi", "darshan", "ganga aarti", "godowlia", "pilgrimage", "2026"],
    keywords: ["kashi vishwanath darshan for first time visitor", "kashi vishwanath temple how to reach", "kashi vishwanath gate", "what to carry to kashi vishwanath", "kashi vishwanath corridor", "varanasi cab godowlia"],
    featured: false,
    metaTitle: "Kashi Vishwanath Darshan: Sequence, Gates, Where to Park",
    metaDescription: "The car reaches Godowlia, a five-minute walk from Kashi Vishwanath. Which way in, what is left outside, how the queue and the aartis run, and the day around it."
  },

  // 9 ============================================================
  {
    id: 92009,
    slug: 'mount-abu-from-udaipur-or-jaipur-which-start-how-long',
    title: 'Mount Abu from Udaipur or Jaipur: Which Start, How Long, and What the Hill Is Like',
    excerpt: 'From Udaipur, Mount Abu is 165 km and 3 to 3.5 hours over the Gogunda ghat and up the Abu Road hairpins; from Jaipur it is 490 km and 7 to 8 hours via Beawar and Sirohi. Which start to choose, what the climb is like, and the rate-card fare for each.',
    relatedTours: [
      { id: "udaipur-abu", name: "Udaipur to Mount Abu Cab", slug: "udaipur-to-mount-abu", city: "udaipur", price: "From ₹11/km" },
      { id: "jaipur-abu", name: "Jaipur to Mount Abu Cab", slug: "jaipur-to-mount-abu", city: "jaipur", price: "From ₹11/km" }
    ],
    relatedDestinations: [
      { name: "Mount Abu", slug: "mount-abu", type: "city" },
      { name: "Udaipur", slug: "udaipur", type: "city" },
      { name: "Jaipur", slug: "jaipur", type: "city" }
    ],
    primaryCTA: {
      text: "Book an Udaipur to Mount Abu cab",
      link: "/udaipur-to-mount-abu"
    },
    content: `<p class="blog-lead"><strong>Mount Abu</strong> is a morning from Udaipur and a full day from Jaipur. Our distance pages put Udaipur to Mount Abu at 165 km and three to three and a half hours on NH-48 through Gogunda, with the last 25 km a mountain climb of hairpins from Abu Road; Jaipur to Mount Abu is 490 km and seven to eight hours via Beawar and Sirohi, with the same 25 km of hairpins at the end. Start from Udaipur if you can: the hill is a night away rather than a day's drive, the fare bills the 300 km minimum, ₹3,300 for a sedan, and the ghat is reached before the heat. From Jaipur the drive is the whole day and the sedan is ₹5,390 at ₹11/km. Book on the <a href="/udaipur-to-mount-abu" class="text-blue-600 hover:underline font-semibold">Udaipur to Mount Abu cab page</a>; the new <a href="/udaipur-mount-abu-chittorgarh-by-road" class="text-blue-600 hover:underline font-semibold">Udaipur, Mount Abu and Chittorgarh road guide</a> puts the hill into a three-day plan.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Udaipur or Jaipur: the two starts compared</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Question</th>
<th class="border border-gray-300 px-4 py-2 text-left">From Udaipur</th>
<th class="border border-gray-300 px-4 py-2 text-left">From Jaipur</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Distance</td><td class="border border-gray-300 px-4 py-2">165 km</td><td class="border border-gray-300 px-4 py-2">490 km</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Drive time</td><td class="border border-gray-300 px-4 py-2">3 to 3.5 hours</td><td class="border border-gray-300 px-4 py-2">7 to 8 hours</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Road</td><td class="border border-gray-300 px-4 py-2">NH-48 over the Gogunda ghat, across dry plain to Pindwara and Abu Road, then the hairpins</td><td class="border border-gray-300 px-4 py-2">NH-48 through Beawar and Sirohi on the Udaipur road, then the same hairpins from Abu Road</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">The climb</td><td class="border border-gray-300 px-4 py-2">The last 25 km, scenic with hairpin bends</td><td class="border border-gray-300 px-4 py-2">The last 25 km, the same</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Sedan, one-way</td><td class="border border-gray-300 px-4 py-2">₹3,300 (300 km minimum at ₹11/km)</td><td class="border border-gray-300 px-4 py-2">₹5,390 (490 km at ₹11/km)</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Sedan, two-day round trip</td><td class="border border-gray-300 px-4 py-2">₹6,600</td><td class="border border-gray-300 px-4 py-2">₹10,780</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Tolls</td><td class="border border-gray-300 px-4 py-2">At actuals; no toll page for the corridor</td><td class="border border-gray-300 px-4 py-2">At actuals; no toll page for the corridor</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Give it</td><td class="border border-gray-300 px-4 py-2">A night; the temples, the lake and the sunset do not fit one day</td><td class="border border-gray-300 px-4 py-2">Two nights, because the drive takes the first day</td></tr>
</tbody></table>
<p class="text-gray-700 leading-relaxed mb-4">Distances and times are the ones our Udaipur to Mount Abu and Jaipur to Mount Abu distance pages publish. Fares are the rate card: a sedan at ₹11/km, an Ertiga or SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23, on a 300 km per day minimum, with tolls and parking at actuals.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What is the drive from Udaipur like?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Shorter than people expect, and hillier. The road leaves Udaipur westwards and, within the first hour, climbs out of the Udaipur bowl over the Gogunda ghat, a short twisting rise through the Aravallis that the distance page names as the one stop on the way; then it drops back to the plain and runs open and quick through dry scrub to Pindwara, where you turn for Abu Road. Abu Road is the railhead at the foot of the hill and the last flat ground, and everything from there is the climb: the last 25 km, in the distance page's words, a mountain climb, scenic with hairpin bends, a long stack of them through rock and forest up to the plateau. The whole run is 165 km and three to three and a half hours, and the three and a half is honest because of that last stretch.</p>
<p class="text-gray-700 leading-relaxed mb-4">The halt before the climb is Pindwara or Abu Road; there is nowhere sensible to stop on the hairpins themselves. A seven o'clock start from Udaipur has you over the Gogunda ghat before the sun is on it and up the hairpins before the day-trip traffic from the Gujarat side, which is the pattern our road guide plans to. From Udaipur the hill is a night away rather than a day's drive, which is the whole of the argument for starting there.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What is the drive from Jaipur like?</h2>
<p class="text-gray-700 leading-relaxed mb-4">A full day on NH-48. The distance page routes it via Beawar and Sirohi on the Udaipur road, 490 km and seven to eight hours, and the shape of the day is the flat, fast highway south-west through Ajmer's side of the state to Beawar, then the Aravalli country beyond it, then Sirohi and the turn for Abu Road, and finally the same 25 km of hairpins that the Udaipur road climbs. It is a good road, and it is a long one; leave early, eat at Beawar or Sirohi, and expect to reach the hill in the late afternoon with the sunset the first thing you do.</p>
<p class="text-gray-700 leading-relaxed mb-4">The honest advice from our guide is to start from Jaipur only if Udaipur is not on the plan at all. If it is, drive Jaipur to Udaipur first and take the hill from there as a morning; the road guide plans Mount Abu as the first of Udaipur's two spokes, with Chittorgarh as the second, over three days.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What is the hill like once you are up?</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Nakki Lake</strong> is the centre of the town, with boating on the water and the promenade around it; Sunset Point is the walk out from the lake for the evening.</li>
<li class="ml-4"><strong>The Dilwara temples</strong> are the reason serious visitors come: marble carved to a fineness the distance page calls an architectural marvel. Photography rules and visiting hours are the temples' own; check at the entrance.</li>
<li class="ml-4"><strong>Guru Shikhar and Achalgarh</strong> are a short drive beyond the town, the highest point of the Aravallis and the old fort; the car stays for them on the second morning.</li>
<li class="ml-4"><strong>The season</strong> is October to March, when the plains are bearable and the hill is cool; in December and January the nights on top drop close to freezing, which surprises people coming up from the lakes, so carry a warm layer. After the monsoon, in September and October, the Aravallis are green and the ghat is at its prettiest; in the monsoon itself the hairpins run wet and the drivers take them slowly.</li>
<li class="ml-4"><strong>The only hill station in Rajasthan</strong>, as both distance pages put it, and the coolest place in the state in summer; it fills on long weekends and in the Gujarati holiday season, so book the room before the cab.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What does the cab cost from each start?</h2>
<p class="text-gray-700 leading-relaxed mb-4">From Udaipur the 165 km bills the 300 km per day minimum, so the one-way fare is the minimum at the vehicle's rate: ₹3,300 for a sedan, ₹4,500 for an Ertiga or SUV, ₹5,400 for an Innova Crysta and ₹6,900 for a 12-seater Tempo Traveller. A two-day round trip with the car staying on the hill is two days at the minimum: ₹6,600, ₹9,000, ₹10,800 and ₹13,800. From Jaipur the 490 km bills its distance: ₹5,390 for a sedan, ₹7,350 for an Ertiga, ₹8,820 for an Innova Crysta and ₹11,270 for a Tempo Traveller one-way, and a two-day round trip is twice that, ₹10,780 for the sedan, because the round trip of 980 km is more than two days' minimum. Fuel and the driver are inside every figure; tolls on NH-48, parking and the driver's night halt are at actuals, and neither corridor has a toll page, so no toll figure is given here.</p>
<p class="text-gray-700 leading-relaxed mb-4">On the choice of car, a sedan manages the hairpins in season with a careful driver; an SUV or Innova takes them without the passengers noticing, and for a family with luggage that is the sensible booking. The <a href="/distance/udaipur-to-mount-abu" class="text-blue-600 hover:underline font-semibold">Udaipur to Mount Abu distance page</a> and the <a href="/distance/jaipur-to-mount-abu" class="text-blue-600 hover:underline font-semibold">Jaipur to Mount Abu distance page</a> carry the road notes for each.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The three-day plan from Udaipur</h2>
<p class="text-gray-700 leading-relaxed mb-4">Our road guide puts Mount Abu first and Chittorgarh second, and the order matters because the hill wants a night and the fort wants a morning. Day one is the 165 km climb with a seven o'clock start, the afternoon for Nakki Lake and the Dilwara temples, Sunset Point for the evening and the night on the hill, with a warm layer in winter. Day two is Guru Shikhar and Achalgarh in the morning, then the hairpins down and the 165 km back to Udaipur by mid-afternoon, with the evening on the lake. Day three is the Chittorgarh day: 115 km and two to two and a half hours on four-lane NH-48 by our distance page, out at seven, the fort before the heat, and back for dinner.</p>
<p class="text-gray-700 leading-relaxed mb-4">On the rate card that is three days at the 300 km minimum, because none of the three days drives more than 330 km: ₹9,900 for a sedan, with the driver's night halt on the hill at actuals. It is the same car and driver throughout, which is the point; the fort day is a plains run and the hill days are a climb, and the driver who has done the hairpins once does them better the second time.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How far is Mount Abu from Udaipur?</h3>
<p class="text-gray-700 leading-relaxed mb-4">165 km and three to three and a half hours on NH-48 through Gogunda, with the last 25 km a climb of hairpins from Abu Road.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How far is Mount Abu from Jaipur?</h3>
<p class="text-gray-700 leading-relaxed mb-4">490 km and seven to eight hours on NH-48 via Beawar and Sirohi, ending on the same 25 km of hairpins.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Should I go to Mount Abu from Udaipur or from Jaipur?</h3>
<p class="text-gray-700 leading-relaxed mb-4">From Udaipur, unless Udaipur is not on the plan. The hill is a morning away and bills the 300 km minimum; from Jaipur it is a full day's drive at ₹5,390 for a sedan.</p>`,
    city: "Udaipur",
    faqs: [
      { question: "How far is Mount Abu from Udaipur?", answer: "165 km and three to three and a half hours on NH-48 through Gogunda, by our distance page: over the Gogunda ghat within the first hour, across the plain to Pindwara and Abu Road, then the last 25 km of hairpins up to the hill." },
      { question: "How far is Mount Abu from Jaipur?", answer: "490 km and seven to eight hours on NH-48 via Beawar and Sirohi on the Udaipur road, by our distance page, ending on the same 25 km of hairpins from Abu Road. It is a full day's drive; leave early and eat at Beawar or Sirohi." },
      { question: "Should I start from Udaipur or from Jaipur?", answer: "From Udaipur if you can: the hill is a morning away, the fare bills the 300 km minimum, and the ghat is reached before the heat. Start from Jaipur only if Udaipur is not on the plan; otherwise drive to Udaipur first and take Mount Abu from there as our road guide plans it." },
      { question: "What is the climb to Mount Abu like?", answer: "The last 25 km from Abu Road, which both distance pages describe as a mountain climb with hairpin bends: a long stack of them through rock and forest up to the plateau, the best part of the drive and the slowest. Halt at Pindwara or Abu Road before it; there is nowhere sensible to stop on the bends." },
      { question: "How much does a cab to Mount Abu cost?", answer: "From Udaipur, the 165 km bills the 300 km minimum: ₹3,300 for a sedan, ₹4,500 for an Ertiga or SUV, ₹5,400 for an Innova Crysta, ₹6,900 for a Tempo Traveller, and two days at the minimum for a round trip. From Jaipur the 490 km bills its distance, ₹5,390 for a sedan one-way and ₹10,780 for a two-day round trip. Tolls and parking are at actuals." },
      { question: "When is the best time to visit Mount Abu?", answer: "October to March, when the plains are bearable and the hill is cool; December and January nights on top drop close to freezing, so carry a warm layer. September and October after the monsoon are the prettiest on the ghat; in the monsoon the hairpins run wet and the drivers take them slowly." },
      { question: "What should I see in Mount Abu?", answer: "Nakki Lake and the boating, the Dilwara temples, Sunset Point for the evening, and Guru Shikhar and Achalgarh a short drive beyond the town on the second morning, with the car staying for them. The temples' visiting hours and photography rules are their own; check at the entrance." }
    ],
    date: "2026-09-14",
    readTime: "8 min read",
    image: "/images/sightseeing/Mount_Abu/Nakki_Lake.jpg",
    category: "Destinations",
    tags: ["mount abu", "udaipur to mount abu", "jaipur to mount abu", "rajasthan hill station", "dilwara", "nakki lake", "2026"],
    keywords: ["mount abu from udaipur", "mount abu from jaipur", "udaipur to mount abu distance", "jaipur to mount abu distance", "udaipur to mount abu by cab", "mount abu road trip"],
    featured: false,
    metaTitle: "Mount Abu from Udaipur or Jaipur: 165 km or 490 km, Which?",
    metaDescription: "Mount Abu is 165 km and 3 to 3.5 hours from Udaipur over the Gogunda ghat and the Abu Road hairpins, or 490 km and 7 to 8 hours from Jaipur. Which start, and the fare."
  },

  // 10 ============================================================
  {
    id: 92010,
    slug: 'lansdowne-weekend-from-delhi-drive-cash-warning-two-days',
    title: 'Lansdowne Weekend from Delhi: The Drive, the Cash Warning and Two Days on the Ridge',
    excerpt: 'Delhi to Lansdowne is 270 km and 6 to 7 hours via Meerut, Bijnor and Kotdwar, then 40 km of ghat. There is no ATM in Lansdowne, so the cash is drawn at Kotdwar. The drive, the two days on the ridge, the seasons and the rate-card fare.',
    relatedTours: [
      { id: "lansdowne-oneway", name: "Delhi to Lansdowne One-Way Cab", slug: "one-way-cab/delhi-to-lansdowne", city: "delhi", price: "From ₹11/km" },
      { id: "delhi-outstation", name: "Outstation Cabs from Delhi", slug: "outstation-cabs/delhi", city: "delhi", price: "From ₹11/km" }
    ],
    relatedDestinations: [
      { name: "Delhi", slug: "delhi", type: "city" },
      { name: "Rishikesh", slug: "rishikesh", type: "city" }
    ],
    primaryCTA: {
      text: "Book a Delhi to Lansdowne cab",
      link: "/one-way-cab/delhi-to-lansdowne"
    },
    content: `<p class="blog-lead"><strong>Delhi to Lansdowne</strong> is 270 km and six to seven hours: the Delhi–Meerut Expressway out of the city, the state highway through the sugarcane belt of western UP via Bijnor to Kotdwar, and then forty kilometres of proper ghat up to the cantonment on its ridge. The one piece of advice every driver on the corridor repeats is about money: there is no ATM in Lansdowne, so draw cash at Kotdwar, the last town on the plain. The weekend bills the 300 km per day minimum on the rate card, ₹3,300 a day for a sedan and ₹6,600 for two days, with the expressway plaza at ₹120 for a car and the rest of the tolls at actuals. Book the <a href="/one-way-cab/delhi-to-lansdowne" class="text-blue-600 hover:underline font-semibold">Delhi to Lansdowne one-way cab</a> or a round trip; the <a href="/delhi-to-lansdowne-by-road" class="text-blue-600 hover:underline font-semibold">Delhi to Lansdowne road guide</a> walks the drive kilometre by kilometre.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What is the drive to Lansdowne like?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Two roads in one, which is the road guide's phrase. The first is the plains run: the Delhi–Meerut Expressway from the edge of the city to Meerut, 70 km, then the slower state highway that leaves the expressway and runs east and north through the cane country to Bijnor and on to Kotdwar. Our distance page calls the road quality mixed, good highway at first and mountain roads after Kotdwar, and the honest thing to add is that the cane belt is the slow part in the crushing months from November to March, when the trolleys crawl along the edge and cut everyone's speed. Khatauli is the breakfast halt, as on every Uttarakhand-bound corridor.</p>
<p class="text-gray-700 leading-relaxed mb-4">The second road begins at Kotdwar, 230 km from Delhi: forty kilometres of ghat through Dugadda, narrow and twisting, with sections that have no parapet, first through sal forest and then into oak and pine as the air cools. The road guide gives an hour and a quarter for the forty kilometres and calls that honest, and it is taken in daylight, which is why the whole drive is planned around a five o'clock start from Delhi: on the ghat by half past nine, on the ridge by a quarter to eleven, with the day ahead.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Delhi to Lansdowne at a glance</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Detail</th>
<th class="border border-gray-300 px-4 py-2 text-left">What our pages say</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Distance</td><td class="border border-gray-300 px-4 py-2">270 km via Meerut, Bijnor and Kotdwar</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Drive time</td><td class="border border-gray-300 px-4 py-2">6 to 7 hours, an hour more on the plain in the cane-crushing months</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">The ghat</td><td class="border border-gray-300 px-4 py-2">40 km from Kotdwar through Dugadda; about an hour and a quarter; daylight only</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Cash</td><td class="border border-gray-300 px-4 py-2">No ATM in Lansdowne; draw at Kotdwar</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Season</td><td class="border border-gray-300 px-4 py-2">March to June and September to November on the distance page; close to freezing on January mornings</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Sedan fare</td><td class="border border-gray-300 px-4 py-2">₹3,300 one-way (300 km minimum at ₹11/km); ₹6,600 for the two-day weekend</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Tolls</td><td class="border border-gray-300 px-4 py-2">The expressway plaza ₹120 for a car, FASTag only; the rest at actuals</td></tr>
</tbody></table>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Why is the cash warning the first thing everyone says?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Because Lansdowne is a cantonment, not a market town, and it has none of the things a market town has, an ATM among them. The guesthouses, the tea stalls at the viewpoints, the boatman at Bhulla Lake and the pony man on the forest path all work in cash, and phone payments are only as good as the signal on the ridge, which comes and goes. Kotdwar is the last flat ground, the last ATM and the last proper food, and the road guide's advice is to do all three there, with a pause at the Sidhbali Baba temple outside the town if you want it. Draw more than you think you need; the drive back to Kotdwar for a cash machine is an hour and a quarter each way on the ghat.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Two days on the ridge</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Day one, late morning.</strong> Arrive off the ghat, drop the bags, and walk. Lansdowne is a cantonment on a ridge with no mall road to speak of; the point is the silence and the forest, and the first afternoon is for finding that out on foot.</li>
<li class="ml-4"><strong>Day one, afternoon.</strong> Bhulla Lake, the cantonment's small lake a walk from the bazaar, with the boats and the café; St Mary's Church, the old garrison church; and the war memorial and the regimental museum if they are open, on the cantonment's own terms.</li>
<li class="ml-4"><strong>Day one, evening.</strong> Tip n Top, the viewpoint over the pines with the Himalayan panorama our distance page promises, clearest after the rains; go up for the last light and walk back before dark.</li>
<li class="ml-4"><strong>Day two, morning.</strong> The forest walks out of the cantonment, or the drive to the villages beyond it with the same car; in the rains the paths have leeches, which the road guide mentions so that you are not surprised.</li>
<li class="ml-4"><strong>Day two, after lunch.</strong> Down the ghat in daylight, cash still in your pocket, and the cane belt in the afternoon; home by evening.</li>
</ul>
<p class="text-gray-700 leading-relaxed mb-4">The whole of the second day is the drive home if you want the morning on the ridge, so the honest weekend is Saturday morning to Sunday evening with nothing else in it. A third night turns it into a rest rather than a visit, and on the rate card it costs one more day at the minimum.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">When to go</h2>
<p class="text-gray-700 leading-relaxed mb-4">March to June and September to November, on the distance page, and the road guide's season table fills that in. Spring and early summer are cool on the ridge while the plain bakes, with the sal forest at its greenest in March; September to November is the best driving of the year on the plain, with the cane standing rather than moving, and the clearest views from Tip n Top after the rains, though Diwali week is the busy one. July and August are wet: the state highway floods in patches, small slips can close the ghat for hours, and the drivers check at Kotdwar before starting the climb, with the wait at the Sidhbali Baba temple rather than on the hill. From November to March the cane trolleys slow the plain, the ghat is misty on January mornings, snow is rare, and the cantonment sits close to freezing at dawn; leave at five still, but expect an hour more.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What does a Lansdowne weekend cab cost?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Lansdowne is 270 km, and outstation cabs bill a 300 km per day minimum, so the one-way fare is the minimum at the vehicle's rate: ₹3,300 for a sedan at ₹11/km, ₹4,500 for an Ertiga or SUV at ₹15, ₹5,400 for an Innova Crysta at ₹18 and ₹6,900 for a 12-seater Tempo Traveller at ₹23. The two-day weekend with the car staying on the ridge is two days at the minimum: ₹6,600, ₹9,000, ₹10,800 and ₹13,800. Fuel and the driver are inside those figures; the expressway plaza is ₹120 for a car and FASTag only, the other tolls on the route are at actuals, and parking and the driver's night halt are at actuals too. There is no hill surcharge.</p>
<p class="text-gray-700 leading-relaxed mb-4">A sedan manages the ghat in the dry months with a careful driver; an SUV or Innova is the easier car on the forty kilometres with a full load, and the one the drivers prefer in the rains. If Lansdowne is the first stop on a longer Garhwal trip, the one-way cab drops you and a second booking takes you on; the <a href="/distance/delhi-to-lansdowne" class="text-blue-600 hover:underline font-semibold">Delhi to Lansdowne distance page</a> has the road notes and the related corridors.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Where the car goes once you are up</h2>
<p class="text-gray-700 leading-relaxed mb-4">Not far, and that is the cantonment's doing. Lansdowne is an army station on a ridge, the roads inside it are short and the walks are the point, so the car parks at the guesthouse and stays there for most of the two days. The driver takes you up to Tip n Top for the evening light, out to the villages and viewpoints beyond the cantonment on the second morning if you want a drive rather than a walk, and back down the ghat when it is time; the lake, the church and the bazaar are on foot. On a round trip the car is billed by the day whether it moves or not, so a day spent walking costs the same as a day spent driving, and the driver's night halt is at actuals.</p>
<p class="text-gray-700 leading-relaxed mb-4">The related corridors on our distance page are Nainital, Corbett and Rishikesh, and the last of those is the natural pairing: Lansdowne for the quiet, then down the ghat and across to the Ganga for a second night, with the same car. Ask for it as a three-day round trip and the days fall into place.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How far is Lansdowne from Delhi?</h3>
<p class="text-gray-700 leading-relaxed mb-4">270 km and six to seven hours via Meerut, Bijnor and Kotdwar, with the last 40 km a ghat from Kotdwar through Dugadda that takes about an hour and a quarter.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Is there an ATM in Lansdowne?</h3>
<p class="text-gray-700 leading-relaxed mb-4">No. Draw cash at Kotdwar, the last town on the plain before the ghat; every driver on the corridor says so.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How much does a cab from Delhi to Lansdowne cost?</h3>
<p class="text-gray-700 leading-relaxed mb-4">₹3,300 one-way for a sedan on the 300 km minimum and ₹6,600 for the two-day weekend; an Ertiga is ₹4,500 and ₹9,000, an Innova Crysta ₹5,400 and ₹10,800. Tolls and parking are at actuals.</p>`,
    city: "Delhi",
    faqs: [
      { question: "How far is Lansdowne from Delhi by road?", answer: "270 km and six to seven hours by our distance page, via Meerut, Bijnor and Kotdwar: the Delhi–Meerut Expressway, then the state highway through the cane belt to Kotdwar, then 40 km of ghat through Dugadda that takes about an hour and a quarter and is driven in daylight." },
      { question: "Is there an ATM in Lansdowne?", answer: "No. Lansdowne is a cantonment, not a market town, and the guesthouses, tea stalls and boatmen work in cash. Draw at Kotdwar, the last town on the plain, and draw more than you think you need; the drive back to a cash machine is an hour and a quarter each way on the ghat." },
      { question: "What time should I leave Delhi for Lansdowne?", answer: "Five in the morning. That puts you through the cane belt before it fills, at Kotdwar by half past nine for cash and a pause at the Sidhbali Baba temple, and on the ridge by a quarter to eleven with the ghat done in daylight and the day ahead." },
      { question: "What is there to do in Lansdowne for two days?", answer: "Walk. Bhulla Lake and the boats, St Mary's Church, the war memorial and museum on the cantonment's terms, Tip n Top for the last light over the pines, and the forest walks on the second morning. There is no mall road; the silence and the forest are the point, which is why it stays quieter than Mussoorie and Nainital." },
      { question: "When is the best time to visit Lansdowne?", answer: "March to June and September to November on our distance page. September to November has the best driving on the plain and the clearest views from Tip n Top after the rains; July and August bring slips on the ghat and floods on the state highway; January mornings are close to freezing on the ridge and misty on the ghat, and snow is rare." },
      { question: "How much does a Lansdowne weekend cab cost?", answer: "The 270 km bills the 300 km minimum: ₹3,300 one-way for a sedan at ₹11/km, ₹4,500 for an Ertiga or SUV, ₹5,400 for an Innova Crysta and ₹6,900 for a 12-seater Tempo Traveller; the two-day weekend is two days at the minimum. The expressway plaza is ₹120 for a car; other tolls, parking and the driver's night halt are at actuals." },
      { question: "Is the Kotdwar to Lansdowne ghat safe?", answer: "Yes, in daylight with a driver who knows it: 40 km through Dugadda, narrow and twisting with sections that have no parapet, first through sal and then oak and pine. In July and August small slips can close it for hours, so the drivers check at Kotdwar before starting the climb; in January the mornings are misty. A sedan manages it in the dry months; an SUV or Innova is easier with a full load." },
      { question: "Can I do Lansdowne as a day trip from Delhi?", answer: "Not sensibly. Six to seven hours each way with the ghat in daylight leaves nothing on the ridge. Book the two-day weekend with the car staying; a third night turns it into a rest and costs one more day at the minimum." }
    ],
    date: "2026-09-14",
    readTime: "8 min read",
    image: "/images/sightseeing/Lansdowne/Tip_n_Top_Viewpoint.jpg",
    category: "Destinations",
    tags: ["lansdowne", "delhi to lansdowne", "weekend getaway", "kotdwar", "uttarakhand", "hill station", "2026"],
    keywords: ["lansdowne weekend from delhi", "delhi to lansdowne distance", "delhi to lansdowne by cab", "lansdowne atm", "kotdwar to lansdowne road", "lansdowne trip plan"],
    featured: false,
    metaTitle: "Lansdowne Weekend from Delhi: 270 km, the Ghat, the Cash",
    metaDescription: "Delhi to Lansdowne is 270 km and 6 to 7 hours via Meerut, Bijnor and Kotdwar, then 40 km of ghat. No ATM on the ridge, so draw cash at Kotdwar. Two days and the fare."
  },

  // 11 ============================================================
  {
    id: 92011,
    slug: 'delhi-to-spiti-valley-bus-or-cab-how-the-two-roads-work',
    title: 'Delhi to Spiti Valley: Bus or Cab, and How the Two Roads In Actually Work',
    excerpt: 'There are two roads into Spiti: the Shimla and Kinnaur road, 730 km and two days, open most of the year; and the Manali road over Kunzum La, usually open June to mid-October. How each works as a sequence, what the bus does and does not do, and the rate-card fares.',
    relatedTours: [
      { id: "kaza-guide", name: "How to Reach Kaza from Delhi", slug: "how-to-reach-kaza-from-delhi", city: "delhi", price: "From ₹15/km" },
      { id: "manali-oneway", name: "Delhi to Manali One-Way Cab", slug: "one-way-cab/delhi-to-manali", city: "delhi", price: "From ₹11/km" }
    ],
    relatedDestinations: [
      { name: "Manali", slug: "manali", type: "city" },
      { name: "Shimla", slug: "shimla", type: "city" },
      { name: "Delhi", slug: "delhi", type: "city" }
    ],
    primaryCTA: {
      text: "Plan a Spiti cab from Delhi",
      link: "/how-to-reach-kaza-from-delhi"
    },
    content: `<p class="blog-lead"><strong>Spiti</strong> has two roads in, and they decide the trip more than the vehicle does. The Shimla and Kinnaur road runs on NH-5 through Chandigarh, Shimla, Narkanda, Rampur, Reckong Peo, Nako and Tabo to Kaza: 730 km by our Kaza guide, eighteen to twenty hours of driving spread over two days with a night at Kalpa or Nako, and open for most of the year. The Manali road is about the same length, 530 km to Manali and another 200 km through the Atal Tunnel and over Kunzum La at 4,551 m, but it climbs to Kaza's 3,800 m far more steeply and is usually open only from June to mid-October. The bus goes as far as Shimla or Manali on ordinary highways; beyond that, as our bus page says, only the smallest buses attempt the road and most groups switch to Tempo Travellers or SUVs. A cab does the whole thing, and the standard car for it is the Innova Crysta at ₹18/km. The <a href="/how-to-reach-kaza-from-delhi" class="text-blue-600 hover:underline font-semibold">Kaza road guide</a> walks both roads stop by stop; the <a href="/bus-routes/delhi-to-spiti-valley" class="text-blue-600 hover:underline font-semibold">Delhi to Spiti bus page</a> covers the group option.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The two roads compared</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Question</th>
<th class="border border-gray-300 px-4 py-2 text-left">Shimla and Kinnaur road</th>
<th class="border border-gray-300 px-4 py-2 text-left">Manali and Kunzum road</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Distance from Delhi</td><td class="border border-gray-300 px-4 py-2">730 km</td><td class="border border-gray-300 px-4 py-2">About 730 km: 530 to Manali, 200 to Kaza</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Days</td><td class="border border-gray-300 px-4 py-2">Two, with a night at Kalpa or Nako; three for families</td><td class="border border-gray-300 px-4 py-2">Two, with a night at Manali; the Manali to Kaza day is 8 to 10 hours</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Usually open</td><td class="border border-gray-300 px-4 py-2">Most of the year</td><td class="border border-gray-300 px-4 py-2">June to mid-October, when Kunzum La is clear</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Highest point</td><td class="border border-gray-300 px-4 py-2">Nako at about 3,600 m before Kaza</td><td class="border border-gray-300 px-4 py-2">Kunzum La at 4,551 m</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">How the altitude is gained</td><td class="border border-gray-300 px-4 py-2">Over two days and thirty-six hours</td><td class="border border-gray-300 px-4 py-2">Two and a half thousand metres in a single day</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Surface</td><td class="border border-gray-300 px-4 py-2">Tarmac to Reckong Peo, rough with loose rock beyond</td><td class="border border-gray-300 px-4 py-2">Tarmac to the tunnel; unpaved with stream crossings from Chhatru to Losar</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Vehicle</td><td class="border border-gray-300 px-4 py-2">Innova Crysta or a proper SUV; a sedan not recommended beyond Peo</td><td class="border border-gray-300 px-4 py-2">Innova Crysta or a proper SUV; Tempo Traveller for groups, slowly</td></tr>
</tbody></table>
<p class="text-gray-700 leading-relaxed mb-4">Every figure in the table is from our Kaza guide and the Delhi to Kaza distance page behind it. Our bus page counts the corridor at 670 km and eighteen to twenty hours, the difference being where the route is measured to; the guide's 730 km to Kaza is the figure we bill on.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">How the Shimla and Kinnaur road works, in order</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Delhi to Chandigarh, 250 km.</strong> NH-44 through Murthal, Panipat and Karnal, the flattest and fastest road of the trip, worth being on before six. Breakfast on the Zirakpur bypass.</li>
<li class="ml-4"><strong>Chandigarh to Shimla, to 350 km.</strong> NH-5 climbs from Parwanoo; the Shimla bypass keeps you clear of the town at about 2,200 m.</li>
<li class="ml-4"><strong>Shimla to Narkanda, to 415 km.</strong> East along the ridge through Kufri, Fagu and Theog to Narkanda at about 2,700 m, the high point of day one and the lunch halt, because the road now drops nearly two thousand metres to the Sutlej.</li>
<li class="ml-4"><strong>Narkanda to Rampur, to 480 km.</strong> Down into the river valley at about 1,000 m; Rampur is the last proper town before Kinnaur and the last place to buy anything forgotten.</li>
<li class="ml-4"><strong>Rampur to Reckong Peo, to 560 km.</strong> Up the Sutlej through Jeori, Jhakri and the Wangtu gorge, where the road is cut into the rock face. Sleep at Kalpa, seven kilometres above Peo at about 2,960 m; fill the tank at Peo. Day one is thirteen to fourteen hours with halts.</li>
<li class="ml-4"><strong>Peo to Nako, to 640 km.</strong> Past Spillow and Pooh, the Spiti meets the Sutlej at Khab, and a long set of hairpins climbs to Nako at about 3,600 m, the alternative night halt.</li>
<li class="ml-4"><strong>Nako to Tabo to Kaza, to 730 km.</strong> Sumdo is the check post where Kinnaur ends and Spiti begins: Indian nationals show identification, foreign nationals show the Inner Line Permit. Tabo's thousand-year-old monastery is an hour's stop; Kaza, at about 3,800 m, is reached mid-afternoon on day two.</li>
</ul>
<p class="text-gray-700 leading-relaxed mb-4">The guide's reason for recommending this road up is not the surface or the distance but the altitude: sleeping at Kalpa or Nako after a full day and only then going on to Kaza spreads the gain over thirty-six hours, which is roughly what the standard advice on acclimatisation asks for. The three-day version, with a night at Shimla or Narkanda first, costs one more night and nothing in fare, because the 300 km per day minimum is already exceeded by the distance.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">How the Manali and Kunzum road works, in order</h2>
<p class="text-gray-700 leading-relaxed mb-4">Delhi to Manali is 530 km and twelve to thirteen hours on NH-44 and NH-21 through Chandigarh, Bilaspur and Mandi, with the night at Manali at about 2,050 m. The next morning the road goes through the Atal Tunnel into Lahaul, up the Chandra valley on the unpaved section through Chhatru and Batal, where the stream crossings need the clearance of an Innova or a proper SUV, and over Kunzum La at 4,551 m, marked by the chortens and prayer flags where drivers stop to circle the shrine. From the top it drops to Losar, the first village of Spiti at about 4,080 m, and from Losar a tarred road of about fifty-seven kilometres runs down the valley to Kaza. The whole Manali to Kaza stretch is about 200 km and eight to ten hours, nearly all of it on the unpaved section, and it gains two and a half thousand metres in a day, which the distance page names as the main cause of altitude sickness on the route.</p>
<p class="text-gray-700 leading-relaxed mb-4">That is why the guide's plan is to go up the Shimla side and come back over Kunzum when it is open, giving the loop six to eight days. Kunzum La is usually clear from June to mid-October; outside those months the Manali road is closed and the Shimla road is the only one. The Inner Line Permit that foreign nationals need for the Kinnaur side is issued by the district administration; the guide describes it as a check-post formality for Indian nationals with identification, and this page gives no fee because none is fixed here.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Bus or cab: what each actually does</h2>
<p class="text-gray-700 leading-relaxed mb-4">The bus does the highways. Our bus page is plain about the rest: Delhi to Shimla or Manali follows standard highways, but beyond them the Spiti roads are among the most challenging in the country, narrow, unpaved, with river crossings and altitudes above 4,000 m, and only buses up to 20 to 22 seats can attempt the route, with restrictions even on those; most groups use Tempo Travellers or SUVs beyond Shimla or Manali, and road conditions change rapidly with the weather. A bus trip to Spiti is therefore really a bus to Shimla or Manali and a smaller vehicle from there, with the halts the bus page lists: Chandigarh, Shimla or Manali, Narkanda or Keylong, Kalpa or Sarchu, then Kaza.</p>
<p class="text-gray-700 leading-relaxed mb-4">A cab does the whole road with one driver who knows it, chooses the halts around the altitude, and waits at Kaza for the days in the valley: Key monastery, Kibber, Langza, Dhankar and, when Kunzum is open, Chandratal on the way out. For two to six people that is the simpler trip; for a group of eight to twelve, a 12-seater Tempo Traveller at ₹23/km does the same road more slowly on the unpaved sections. On the rate card the two-day one-way drive of 730 km bills its distance: an Ertiga or SUV ₹10,950 at ₹15/km, an Innova Crysta ₹13,140 at ₹18/km and a Tempo Traveller ₹16,790 at ₹23/km; a sedan would be ₹8,030 at ₹11/km but is not recommended beyond Reckong Peo. A seven-day loop via Manali bills the daily minimum, because seven days at 300 km is more than the loop's distance: ₹31,500 for the Ertiga, ₹37,800 for the Innova Crysta and ₹48,300 for the Tempo Traveller, with tolls, the tunnel toll, parking and the driver's night halts at actuals. The <a href="/one-way-cab/delhi-to-manali" class="text-blue-600 hover:underline font-semibold">Delhi to Manali one-way cab</a> is the booking for the Manali-side start.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Which road into Spiti should I take?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Up the Shimla and Kinnaur road, sleeping at Kalpa or Nako, and back over Kunzum La when it is open. The reason is altitude: the Shimla side gains it over two days, the Manali side in one.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Is the Manali to Spiti road open all year?</h3>
<p class="text-gray-700 leading-relaxed mb-4">No. Kunzum La is usually clear from June to mid-October; outside that window the Manali road is closed and the Shimla road is the only way in.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Can I take a bus to Spiti from Delhi?</h3>
<p class="text-gray-700 leading-relaxed mb-4">To Shimla or Manali, yes. Beyond them only the smallest buses attempt the road, and most groups switch to Tempo Travellers or SUVs, as our bus page says.</p>
<p class="text-gray-700 leading-relaxed mb-4"><strong>Read next:</strong> <a href="/blog/spiti-valley-bus-tour-complete-adventure-guide-2026">Spiti Valley by Bus: Adventure Guide 2026- Route, Cost& Tips</a></p>`,
    city: "Delhi",
    faqs: [
      { question: "Which road into Spiti should I take from Delhi?", answer: "Up the Shimla and Kinnaur road on NH-5, sleeping at Kalpa or Nako, and back over Kunzum La when it is open: that is our Kaza guide's plan. The reason is altitude, not the surface; the Shimla side gains Kaza's 3,800 m over two days and the Manali side gains two and a half thousand metres in one." },
      { question: "How far is Spiti from Delhi by road?", answer: "730 km to Kaza by the Shimla side on our Kaza guide and distance page, eighteen to twenty hours of driving over two days; about the same by the Manali side, 530 km to Manali and 200 km over Kunzum La. Our bus page counts the corridor at 670 km, measured differently." },
      { question: "Is the Manali to Spiti road open all year?", answer: "No. Kunzum La at 4,551 m is usually clear from June to mid-October; outside that window the Manali road is closed and the Shimla and Kinnaur road, open for most of the year, is the only way in. Check the road position before leaving in any month." },
      { question: "Can I take a bus from Delhi to Spiti Valley?", answer: "To Shimla or Manali on ordinary highways, yes. Beyond them the Spiti roads are narrow, unpaved and above 4,000 m, and our bus page says only buses up to 20 to 22 seats can attempt them, with restrictions; most groups switch to Tempo Travellers or SUVs at Shimla or Manali." },
      { question: "Do I need a permit for Spiti?", answer: "Indian nationals show identification at the Sumdo check post where Kinnaur ends and Spiti begins; foreign nationals need the Inner Line Permit for the Kinnaur side, issued by the district administration. No fee is given here because none is fixed on this site; the driver knows the check posts." },
      { question: "Which vehicle is right for Spiti?", answer: "The Innova Crysta at ₹18/km is the standard vehicle on this site: the road beyond Reckong Peo has loose rock and deep drainage channels, and the Manali side has stream crossings at Chhatru and Batal that need its clearance. A sedan is not recommended beyond Peo; a Tempo Traveller carries groups of eight to twelve more slowly." },
      { question: "How much does a cab from Delhi to Spiti cost?", answer: "The 730 km two-day drive bills its distance: an Ertiga or SUV ₹10,950, an Innova Crysta ₹13,140 and a 12-seater Tempo Traveller ₹16,790 one-way. A seven-day loop via Manali bills the 300 km per day minimum: ₹31,500, ₹37,800 and ₹48,300. Tolls, the tunnel toll, parking and the driver's night halts are at actuals." },
      { question: "How many days does a Spiti trip need?", answer: "Two days each way at the least, and our guide gives the loop six to eight days: up the Shimla side with a night at Kalpa or Nako, the days in the valley for Key, Kibber, Langza and Dhankar, and back over Kunzum La with Chandratal on the way out when the pass is open." }
    ],
    date: "2026-09-14",
    readTime: "9 min read",
    image: "/images/sightseeing/Spiti_Valley/Spiti_Valley_hero_section.jpg",
    category: "Travel Tips",
    tags: ["spiti valley", "delhi to spiti", "kaza", "kunzum la", "kinnaur", "himachal", "road trip", "2026"],
    keywords: ["delhi to spiti valley by bus", "delhi to spiti valley by cab", "delhi to spiti valley distance", "spiti valley two routes", "shimla to kaza road", "manali to kaza kunzum pass"],
    featured: false,
    metaTitle: "Delhi to Spiti Valley: Bus or Cab, and the Two Roads In",
    metaDescription: "Two roads into Spiti: Shimla and Kinnaur, 730 km over two days, open most of the year, or Manali over Kunzum La, usually June to mid-October. Bus or cab, and fares."
  },

  // 12 ============================================================
  {
    id: 92012,
    slug: 'manali-in-winter-by-road-december-to-february-drive',
    title: 'Manali in Winter by Road: What the Drive Is Like from December to February',
    excerpt: 'Delhi to Manali is 530 km and 12 to 13 hours, and in winter the plains fog, the hill road ices and Manali gets its snow. How the drive changes month by month, what chains and the Atal Tunnel mean, and the rate-card fare with four plazas at ₹455.',
    relatedTours: [
      { id: "manali-cab", name: "Delhi to Manali Cab", slug: "delhi-to-manali", city: "delhi", price: "From ₹11/km" },
      { id: "manali-oneway", name: "Delhi to Manali One-Way Cab", slug: "one-way-cab/delhi-to-manali", city: "delhi", price: "From ₹11/km" }
    ],
    relatedDestinations: [
      { name: "Manali", slug: "manali", type: "city" },
      { name: "Shimla", slug: "shimla", type: "city" },
      { name: "Delhi", slug: "delhi", type: "city" }
    ],
    primaryCTA: {
      text: "Book a Delhi to Manali cab",
      link: "/delhi-to-manali"
    },
    content: `<p class="blog-lead"><strong>Manali in winter</strong> is reached by the same road as Manali in summer, and the road is what changes. Delhi to Manali is 530 km and twelve to thirteen hours on NH-44 and NH-21 through Karnal, Chandigarh, Bilaspur, Mandi and Kullu, with four plazas totalling ₹455 for a car and no tolls after Bilaspur. From December to February the plains section fogs in the early morning, the hill road after Mandi ices on the shaded bends, and Manali gets its snow, which our best-time page says usually starts in December and is the reason people come. Rohtang is closed by snow in these months; the winter snow runs are Solang Valley and the Atal Tunnel to Sissu. The drivers carry chains, plan the hill section for daylight and leave a spare hour for the fog. On the rate card a sedan is ₹5,830 one-way and an Innova Crysta, the car the hill pages recommend, ₹9,540. Book on the <a href="/delhi-to-manali" class="text-blue-600 hover:underline font-semibold">Delhi to Manali cab page</a>; the <a href="/manali" class="text-blue-600 hover:underline font-semibold">Manali cab page</a> has the local runs.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">How does the Delhi to Manali drive change in winter?</h2>
<p class="text-gray-700 leading-relaxed mb-4">In three places, in order. The first is the plain: from December into January the Punjab and Haryana stretch of NH-44 fogs over in the early hours, worst between Ambala and Ludhiana on the Amritsar side and around Murthal and Karnal on this one, and a night run that is easy in October becomes a slow crawl on headlights. The second is the hill road after Mandi, where the shaded bends through the Beas gorge and up the Kullu valley ice over in the morning and thaw by midday. The third is Manali itself and the road above it, where the snow lies from December and a fresh fall can hold the last kilometres up for a morning until the road is cleared.</p>
<p class="text-gray-700 leading-relaxed mb-4">None of it stops the drive, and none of it is a reason not to go; it is the reason the winter drive is planned differently. The summer pattern is a pre-dawn start so that the hill section is done in daylight and the car is in Manali by evening. The winter pattern keeps the daylight rule and moves the start to suit the fog: leave Delhi so that the plain is crossed after the fog thins, reach the hill road with the ice gone from the bends, and accept that the car arrives after dark rather than before it, on a road the driver knows.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">The winter drive, stop by stop</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Stretch</th>
<th class="border border-gray-300 px-4 py-2 text-left">Summer</th>
<th class="border border-gray-300 px-4 py-2 text-left">December to February</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Delhi to Chandigarh, 250 km on NH-44</td><td class="border border-gray-300 px-4 py-2">Fast four-lane; Murthal for breakfast, three plazas at Panipat ₹165, Karnal ₹130 and Ambala ₹95</td><td class="border border-gray-300 px-4 py-2">Fog in the early hours, thick until mid-morning on the worst days; the drivers slow rather than stop, and a later start is often the quicker one</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Chandigarh to Bilaspur, to 330 km</td><td class="border border-gray-300 px-4 py-2">NH-21 leaves the plain at Kiratpur and climbs to the Gobind Sagar reservoir; the last plaza at Bilaspur, ₹65</td><td class="border border-gray-300 px-4 py-2">Clear of the fog once the road climbs; cold and dry</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Bilaspur to Mandi, to 420 km</td><td class="border border-gray-300 px-4 py-2">Sundernagar and the canal road; lunch at Mandi</td><td class="border border-gray-300 px-4 py-2">The same; the lunch halt is the last warm stop before the gorge</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Mandi to Kullu, to 480 km</td><td class="border border-gray-300 px-4 py-2">The Beas gorge, the Pandoh dam, the tunnels and Aut; the monsoon slide zone</td><td class="border border-gray-300 px-4 py-2">Ice on the shaded bends in the morning; dry by midday; the driver takes them gently</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Kullu to Manali, to 530 km</td><td class="border border-gray-300 px-4 py-2">The orchard road through Patlikuhal; weekend crowds</td><td class="border border-gray-300 px-4 py-2">Snow on the road after a fall until it is cleared; chains if the driver judges them needed; arrive in daylight if the fog allowed it</td></tr>
</tbody></table>
<p class="text-gray-700 leading-relaxed mb-4">Distances, the stops and the tolls are from our Delhi to Manali distance and toll pages and the Week 39 road-trip post; the winter column is what our drivers and the corridor's road notes say the months do.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Chains, the tunnel and the snow runs: how they work</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Chains.</strong> The car carries them from December; the driver fits them where fresh snow lies on the road, usually on the last stretch into Manali or on the road up to Solang, and takes them off when the tarmac shows again. They are a tool for a few kilometres, not for the drive.</li>
<li class="ml-4"><strong>The Atal Tunnel.</strong> Open in every month, it takes the road out of Manali under the mountain into Lahaul with no permit; in heavy snowfall it shuts for a few hours of clearing at a time, usually early in the morning, so the drivers plan the tunnel run for the middle of the day.</li>
<li class="ml-4"><strong>Rohtang.</strong> Closed by snow from December to April in a normal year; the winter snow day does not include it, and no permit is needed for what replaces it.</li>
<li class="ml-4"><strong>Solang Valley.</strong> A short run above the town, and in winter a snow-sports ground: skiing, snowboarding and sledding on the slopes, with the ropeway running in season. Snow gear is hired at Solang, not carried from Delhi.</li>
<li class="ml-4"><strong>Sissu and the Lahaul side.</strong> Through the tunnel, often under snow when Manali is not; the day's fallback when the town is clear and the reason the tunnel matters in winter.</li>
</ul>
<p class="text-gray-700 leading-relaxed mb-4">Snow in Manali is usual from December, in the words of our best-time page, and not guaranteed on a date. The week's forecast decides whether the snow day is Solang, the tunnel, or the town itself after a fresh fall; the driver watches it and the plan follows.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Should I split the drive at Shimla or Chandigarh in winter?</h2>
<p class="text-gray-700 leading-relaxed mb-4">It is worth considering, for the fog more than the snow. A night at Chandigarh puts the whole plains section behind you on day one and starts the hill road in the morning light of day two; a night at Shimla turns the trip into the classic winter circuit, Shimla for the Ridge and Kufri's snow, then the 250 km to Manali on NH-3 through Bilaspur and Mandi, which is seven to eight hours and its own winter drive, with the shaded bends near Shimla icing in the morning and a later start the rule. The <a href="/shimla-to-manali-by-road" class="text-blue-600 hover:underline font-semibold">Shimla to Manali road guide</a> takes that leg stop by stop. Either split costs an extra day at the 300 km minimum for the vehicle and the driver's night halt at actuals, and buys a hill road driven fresh rather than at the end of thirteen hours.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What does a winter cab to Manali cost?</h2>
<p class="text-gray-700 leading-relaxed mb-4">The rate card does not change for the season. The 530 km one-way bills its distance: ₹5,830 for a sedan at ₹11/km, ₹7,950 for an Ertiga or SUV at ₹15, ₹9,540 for an Innova Crysta at ₹18 and ₹12,190 for a 12-seater Tempo Traveller at ₹23. Tolls are ₹455 for a car across the four plazas, paid on FASTag at actuals along with parking and the driver's night halt. A three-day round trip with the car staying in Manali bills the greater of twice the one-way fare or three days at the minimum, and on this corridor it is the distance that counts. Our Manali pages recommend an SUV or Innova for the hill road in any season; in winter the drivers prefer it without argument, for the clearance on a snowed bend and the grip on the climb to Solang.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What to carry, and what to expect</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4">Heavy woollens and proper footwear; our best-time page says so for Manali in winter, and the car is warm but the town is not.</li>
<li class="ml-4">A spare day. A fresh fall can hold the road for a morning, and the trips that go wrong in winter are the ones with a flight to catch.</li>
<li class="ml-4">Patience on the plain. The fog is the slowest part of the winter drive and the least dangerous if the driver is allowed to crawl.</li>
<li class="ml-4">No plan for Rohtang. The winter snow day is Solang and the tunnel, and they are enough.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Is the Delhi to Manali road open in winter?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Yes. The highway is open all winter; the plain fogs in the early morning, the hill bends ice until midday, and a fresh fall can hold the last stretch for a morning until it is cleared. The drivers carry chains and keep the hill road to daylight.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Where do I see snow in Manali in winter?</h3>
<p class="text-gray-700 leading-relaxed mb-4">In the town itself after a fall, at Solang Valley above it, and through the Atal Tunnel at Sissu on the Lahaul side. Rohtang is closed from December to April.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How much is a cab from Delhi to Manali in winter?</h3>
<p class="text-gray-700 leading-relaxed mb-4">The same as any season: ₹5,830 one-way for a sedan, ₹7,950 for an Ertiga, ₹9,540 for an Innova Crysta and ₹12,190 for a Tempo Traveller, plus ₹455 in tolls for a car and parking at actuals.</p>
<p class="text-gray-700 leading-relaxed mb-4"><strong>Read next:</strong> <a href="/blog/delhi-to-manali-winter-snow-chains-fuel-route-conditions">Delhi to Manali in Winter: Snow Chains, Fuel, Closures, Route Conditions</a></p>`,
    city: "Manali",
    faqs: [
      { question: "Is the Delhi to Manali road open in winter?", answer: "Yes, all winter. From December to February the plains section fogs in the early hours, the shaded bends after Mandi ice until midday, and a fresh fall can hold the last stretch into Manali for a morning until it is cleared. The drivers carry chains, keep the hill road to daylight and leave a spare hour for the fog." },
      { question: "What is the Delhi to Manali drive like in December?", answer: "530 km and twelve to thirteen hours on NH-44 and NH-21 through Karnal, Chandigarh, Bilaspur, Mandi and Kullu, with the plain slow in the morning fog, the gorge bends icy early and the Kullu valley cold and clear by midday. The start is moved to suit the fog and the arrival is often after dark, on a road the driver knows." },
      { question: "Where do I see snow in Manali in winter?", answer: "In the town after a fall, at Solang Valley a short run above it, where skiing, snowboarding and sledding run in season, and through the Atal Tunnel at Sissu on the Lahaul side, which is often under snow when Manali is not. Our best-time page says snow usually starts in December; it is not guaranteed on a date." },
      { question: "Is Rohtang open in winter?", answer: "No. Rohtang is closed by snow from December to April in a normal year. The winter snow day is Solang and the Atal Tunnel, and neither needs the Rohtang permit." },
      { question: "Does the Atal Tunnel close in winter?", answer: "It is open in every month, but in heavy snowfall it shuts for a few hours of clearing at a time, usually early in the morning. The drivers plan the tunnel run for the middle of the day." },
      { question: "Which car should I book for Manali in winter?", answer: "An SUV or Innova Crysta. Our Manali pages recommend it for the hill road in any season, and in winter the clearance on a snowed bend and the grip on the climb to Solang are the reason the drivers prefer it. The Innova Crysta is ₹9,540 one-way at ₹18/km; an Ertiga or SUV is ₹7,950." },
      { question: "How much is a cab from Delhi to Manali in winter?", answer: "The rate card is the same all year: ₹5,830 one-way for a sedan at ₹11/km, ₹7,950 for an Ertiga or SUV, ₹9,540 for an Innova Crysta and ₹12,190 for a 12-seater Tempo Traveller, plus ₹455 in tolls for a car across four plazas and parking at actuals. A three-day round trip bills the distance." },
      { question: "Should I break the winter drive at Chandigarh or Shimla?", answer: "For the fog, a night at Chandigarh puts the plain behind you and starts the hill road in daylight. For the trip, a night at Shimla makes the classic winter circuit, with the 250 km Shimla to Manali road on day two, seven to eight hours with a later start for the icy bends near Shimla. Either costs an extra day at the 300 km minimum." }
    ],
    date: "2026-09-14",
    readTime: "9 min read",
    image: "/images/sightseeing/Manali/Mall_Road.jpg",
    category: "Travel Tips",
    tags: ["manali in winter", "delhi to manali", "snowfall manali", "atal tunnel", "solang valley", "winter road trip", "2026"],
    keywords: ["manali in winter by road", "delhi to manali in december", "delhi to manali road in winter", "manali snowfall by car", "is delhi manali road open in winter", "manali winter drive"],
    featured: false,
    metaTitle: 'Manali in Winter by Road: December to February Drive',
    metaDescription: "Delhi to Manali is 530 km and 12 to 13 hours; in winter the plain fogs, the bends after Mandi ice and Manali gets its snow. Chains, the Atal Tunnel, Solang and the fare."
  },

  // 13 ============================================================
  {
    id: 92013,
    slug: 'new-year-2027-road-trips-from-delhi-where-to-drive-cab-cost',
    title: 'New Year 2027 Road Trips from Delhi: Where to Drive for the Night and What the Cab Costs',
    excerpt: 'Six places to see the new year in within a drive of Delhi, with the site\'s own distances: Agra 230 km, Rishikesh 250, Jaipur 280, Mussoorie 290, Nainital 300 and Shimla 350. The rate-card fare for each, one-way and two-day, and the point that there is no festival surcharge.',
    relatedTours: [
      { id: "delhi-outstation", name: "Outstation Cabs from Delhi", slug: "outstation-cabs/delhi", city: "delhi", price: "From ₹11/km" },
      { id: "jaipur-cab", name: "Delhi to Jaipur Cab", slug: "delhi-to-jaipur", city: "delhi", price: "From ₹11/km" }
    ],
    relatedDestinations: [
      { name: "Jaipur", slug: "jaipur", type: "city" },
      { name: "Shimla", slug: "shimla", type: "city" },
      { name: "Rishikesh", slug: "rishikesh", type: "city" }
    ],
    primaryCTA: {
      text: "Book a New Year cab from Delhi",
      link: "/outstation-cabs/delhi"
    },
    content: `<p class="blog-lead">The <strong>New Year 2027</strong> road trips from Delhi that work are the ones within a day's drive, so that the night of the thirty-first is spent somewhere other than a car. By our distance pages that means Agra at 230 km, Rishikesh at 250, Jaipur at 280, Mussoorie at 290, Nainital at 300 and Shimla at 350. The cab costs the same on New Year's Eve as on any other day, because the rate card has no festival surcharge: a sedan at ₹11/km, an Ertiga or SUV at ₹15, an Innova Crysta at ₹18 and a 12-seater Tempo Traveller at ₹23, on a 300 km per day minimum with tolls and parking at actuals. That makes every trip on this list but Shimla ₹3,300 one-way and ₹6,600 for the two-day weekend in a sedan; Shimla is ₹3,850 and ₹7,700. What does change at New Year is the booking: cars and hotels go early, so fix the room first and the <a href="/outstation-cabs/delhi" class="text-blue-600 hover:underline font-semibold">outstation cab from Delhi</a> straight after.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Two long weekends, not one: 25 December and 1 January both fall on a Friday</h2>
<p class="text-gray-700 leading-relaxed mb-4">2026's calendar gives Delhi two three-day weekends back to back this winter: Christmas, 25 December 2026, is a Friday, and New Year's Day, 1 January 2027, is also a Friday. Each gives a Friday-to-Sunday break without taking a day of leave, and the two together are what pushes the last week of December into the busiest cars-and-hotels week of the year on every corridor in the table below — not just the single night of the thirty-first. A trip built around either Friday works the same way: leave Thursday evening or Friday morning, two nights away, back Sunday, at the one-way and two-day fares already in the table.</p>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>The Christmas weekend (Fri 25 – Sun 27 December).</strong> The quieter of the two to book, since it isn't the date everyone fixates on; the same six destinations and the same rate-card fares apply, and rooms are easier to hold than for the 31st.</li>
<li class="ml-4"><strong>The New Year weekend (Fri 1 – Sun 3 January).</strong> The louder one — this is the "New Year's Eve" trip most people mean — and the one where the room has to be fixed first, per the booking order below.</li>
<li class="ml-4"><strong>Both together.</strong> A full week from 24 December to 4 January is one long trip rather than two separate weekend dashes, and the same 300 km per day minimum and per-kilometre rate apply throughout; ask for the multi-day figure when you call.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Six New Year drives from Delhi, with the fares</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Destination</th>
<th class="border border-gray-300 px-4 py-2 text-left">Distance and time</th>
<th class="border border-gray-300 px-4 py-2 text-left">Road</th>
<th class="border border-gray-300 px-4 py-2 text-left">Tolls, car</th>
<th class="border border-gray-300 px-4 py-2 text-left">Sedan one-way / two-day</th>
<th class="border border-gray-300 px-4 py-2 text-left">Innova Crysta one-way / two-day</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Agra</td><td class="border border-gray-300 px-4 py-2">230 km, 3 to 4 hrs</td><td class="border border-gray-300 px-4 py-2">Yamuna Expressway via Greater Noida and Mathura</td><td class="border border-gray-300 px-4 py-2">₹285, 2 plazas</td><td class="border border-gray-300 px-4 py-2">₹3,300 / ₹6,600</td><td class="border border-gray-300 px-4 py-2">₹5,400 / ₹10,800</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Rishikesh</td><td class="border border-gray-300 px-4 py-2">250 km, 5 to 6 hrs</td><td class="border border-gray-300 px-4 py-2">Delhi–Meerut Expressway and NH-334 via Haridwar</td><td class="border border-gray-300 px-4 py-2">₹280, 3 plazas</td><td class="border border-gray-300 px-4 py-2">₹3,300 / ₹6,600</td><td class="border border-gray-300 px-4 py-2">₹5,400 / ₹10,800</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Jaipur</td><td class="border border-gray-300 px-4 py-2">280 km, 4 to 5 hrs</td><td class="border border-gray-300 px-4 py-2">NH-48 via Gurgaon, Neemrana and Behror</td><td class="border border-gray-300 px-4 py-2">₹400, 3 plazas</td><td class="border border-gray-300 px-4 py-2">₹3,300 / ₹6,600</td><td class="border border-gray-300 px-4 py-2">₹5,400 / ₹10,800</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Mussoorie</td><td class="border border-gray-300 px-4 py-2">290 km, 6 to 7 hrs</td><td class="border border-gray-300 px-4 py-2">NH-334 via Meerut and Dehradun, 35 km of hill road at the end</td><td class="border border-gray-300 px-4 py-2">₹215, 2 plazas</td><td class="border border-gray-300 px-4 py-2">₹3,300 / ₹6,600</td><td class="border border-gray-300 px-4 py-2">₹5,400 / ₹10,800</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Nainital</td><td class="border border-gray-300 px-4 py-2">300 km, 6 to 7 hrs</td><td class="border border-gray-300 px-4 py-2">NH-9 via Moradabad and Haldwani, 35 km climb from Kathgodam</td><td class="border border-gray-300 px-4 py-2">₹270, 3 plazas</td><td class="border border-gray-300 px-4 py-2">₹3,300 / ₹6,600</td><td class="border border-gray-300 px-4 py-2">₹5,400 / ₹10,800</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Shimla</td><td class="border border-gray-300 px-4 py-2">350 km, 7 to 8 hrs</td><td class="border border-gray-300 px-4 py-2">NH-44 and NH-5 via Karnal, Ambala, Pinjore and Solan</td><td class="border border-gray-300 px-4 py-2">₹390, 3 plazas</td><td class="border border-gray-300 px-4 py-2">₹3,850 / ₹7,700</td><td class="border border-gray-300 px-4 py-2">₹6,300 / ₹12,600</td></tr>
</tbody></table>
<p class="text-gray-700 leading-relaxed mb-4">Distances, times and roads are from our distance pages; tolls are the plazas the toll pages list for a car. The two-day figure is a round trip with the car staying, billed as two days at the 300 km minimum, or twice the one-way fare where that is more; an Ertiga or SUV is ₹4,500 and ₹9,000 for the first five and ₹5,250 and ₹10,500 for Shimla, and a 12-seater Tempo Traveller ₹6,900 and ₹13,800, or ₹8,050 and ₹16,100 for Shimla.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Which New Year drive suits which kind of night?</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Jaipur, for a city night.</strong> Four to five hours down NH-48, and a city built for two nights: Amber on the first day, the old-city bazaars and the rooftop dinners on the thirty-first, City Palace on the first morning of the year. Our distance page's season is October to March, so the timing is right.</li>
<li class="ml-4"><strong>Agra, for the Taj on the first morning.</strong> Three to four hours on the Yamuna Expressway; the distance page's tip is a five o'clock start for the sunrise Taj, which on the first of January is a morning worth the early alarm. The Taj is closed on Fridays.</li>
<li class="ml-4"><strong>Rishikesh, for a quiet one.</strong> Five to six hours; the Ganga, the aarti at Triveni Ghat and the cafés at Tapovan, with Haridwar's Har Ki Pauri aarti on the way up or the way home. The rafting season runs through the winter on our pages.</li>
<li class="ml-4"><strong>Mussoorie, for snow if it comes.</strong> Six to seven hours; the Mall on the thirty-first and the chance of snow, which our Dehradun to Mussoorie page gives December to February for. The last 35 km are a hill road that ices on shaded bends, and the police may hold cars at the bottom after a fall.</li>
<li class="ml-4"><strong>Nainital, for the lake in the cold.</strong> Six to seven hours; the distance page calls winter cold but beautiful for snow views, and the driver carries chains when snow is forecast above the town.</li>
<li class="ml-4"><strong>Shimla, for the Ridge.</strong> Seven to eight hours and the longest of the six; December for snow on our pages, with Kufri above the town more reliably white than the Mall. The shaded bends near Shimla ice in the morning, so the start is later than in summer.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Is there a New Year surcharge on cabs?</h2>
<p class="text-gray-700 leading-relaxed mb-4">No. The rate card is the same on every date of the year: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, with fuel and the driver inside the figure and tolls and parking at actuals. A New Year's Eve booking to Jaipur costs what a March booking to Jaipur costs. What the season changes is availability: the last week of December is the busiest of the year on every corridor on this list, cars are booked out days ahead, and hotels in Mussoorie, Nainital and Shimla go before the cars do. Fix the room, then book the car the same day, and tell us the pickup time so the departure can be planned around the winter fog.</p>
<p class="text-gray-700 leading-relaxed mb-4">The driver's night halt is at actuals on a round trip, as on any date, and there is no charge for the car waiting on the thirty-first while you are at dinner; the car is booked by the day. If you are driving up on the thirty-first and back on the first, that is the two-day figure in the table; a third day for the hangover and the hill is one more day at the minimum.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What the winter road does to the plan</h2>
<p class="text-gray-700 leading-relaxed mb-4">Two things, and both are about timing rather than danger. On the plains, the fog: from December into January the expressways and the highways out of Delhi sit under fog from midnight until mid-morning, on the Yamuna Expressway near Jewar, on the Meerut and Dehradun expressways, on NH-44 towards Ambala and on NH-9 towards Moradabad, and the road notes on every one of those corridors say the same thing, that a later start is often the quicker one and that the driver crawls with the fog lamps on until it lifts. On the hills, the ice and the snow: the last stretch into Mussoorie, Nainital and Shimla is a hill road that ices on shaded bends in the morning and can be held after a fall, so the hill section is planned for the middle of the day and the car carries chains.</p>
<p class="text-gray-700 leading-relaxed mb-4">The drive home on the first of January is the one to respect most: everyone leaves at once, the fog is back by dusk, and the plains are slow. Leave the hill after a late breakfast rather than at dawn, and expect the drive to take the top of the range our distance pages give. The <a href="/delhi-to-jaipur" class="text-blue-600 hover:underline font-semibold">Delhi to Jaipur</a>, <a href="/delhi-to-agra" class="text-blue-600 hover:underline font-semibold">Delhi to Agra</a> and <a href="/delhi-to-shimla" class="text-blue-600 hover:underline font-semibold">Delhi to Shimla</a> pages carry the corridor details; Rishikesh, Mussoorie and Nainital have theirs under the same names.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Booking the New Year cab, in order</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>The room first.</strong> Hotels in the hill towns go before the cars do in the last week of December; fix the night of the thirty-first, then everything else.</li>
<li class="ml-4"><strong>The car the same day.</strong> Tell us the destination, the dates, the head count and the luggage; four people and weekend bags fit a sedan, six or a family with luggage want an Ertiga or an Innova Crysta, and a group of eight or more is a 12-seater Tempo Traveller at ₹23/km that keeps everyone together and is cheaper per head than two cars.</li>
<li class="ml-4"><strong>The pickup time last.</strong> In the fog weeks the driver plans the departure to reach the plain as the fog thins and the hill road in the middle of the day; give us a fixed time only if the far end has one.</li>
<li class="ml-4"><strong>The fare is the table.</strong> Two days at the minimum for anything up to 300 km each way, the distance for Shimla, tolls and parking at actuals and the driver's night halt at actuals; nothing is added for the date.</li>
<li class="ml-4"><strong>The drive home on the first.</strong> Late breakfast, then down; everyone leaves at once and the fog is back by dusk, so the afternoon is the drive and the evening is home.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Is there a New Year surcharge on outstation cabs from Delhi?</h3>
<p class="text-gray-700 leading-relaxed mb-4">No. The rate card is the same every day: ₹11/km for a sedan, ₹15 for an Ertiga, ₹18 for an Innova Crysta and ₹23 for a Tempo Traveller on a 300 km per day minimum. Cars simply book out earlier.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Which is the nearest New Year getaway from Delhi?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Agra at 230 km and three to four hours on the Yamuna Expressway, then Rishikesh at 250 km and Jaipur at 280.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Where can I see snow at New Year near Delhi?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Shimla, Mussoorie and Nainital are the three on this list where snow is usual in the winter months; none can promise it on the night, and the higher ground above each town has it more reliably than the town.</p>
<p class="text-gray-700 leading-relaxed mb-4"><strong>Read next:</strong> <a href="/blog/new-year-trip-from-delhi-2027">New Year Trip from Delhi 2027: Best NYE Destinations, Party Spots & Cab Packages</a></p>`,
    city: "Delhi",
    faqs: [
      { question: "Is there a New Year surcharge on outstation cabs from Delhi?", answer: "No. The rate card is the same on every date: ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, with tolls and parking at actuals. What changes at New Year is availability, so book the room and the car early." },
      { question: "Which is the nearest New Year road trip from Delhi?", answer: "Agra at 230 km and three to four hours on the Yamuna Expressway, then Rishikesh at 250 km and five to six hours, and Jaipur at 280 km and four to five hours on NH-48. All three bill the 300 km minimum, ₹3,300 one-way for a sedan." },
      { question: "How much does a two-day New Year cab from Delhi cost?", answer: "Two days at the 300 km minimum for anything up to 300 km each way: ₹6,600 for a sedan, ₹9,000 for an Ertiga or SUV, ₹10,800 for an Innova Crysta and ₹13,800 for a Tempo Traveller, for Agra, Rishikesh, Jaipur, Mussoorie and Nainital. Shimla at 350 km is ₹7,700 for a sedan and ₹12,600 for an Innova. Tolls and the driver's night halt are at actuals." },
      { question: "Where can I see snow at New Year near Delhi?", answer: "Shimla at 350 km, Mussoorie at 290 km and Nainital at 300 km are the three on this list where snow is usual in the winter months, with Kufri above Shimla and the higher ground above the other two more reliably white than the towns. None can promise snow on the night; watch the forecast in the week before." },
      { question: "What are the tolls on the New Year corridors?", answer: "For a car, from our toll pages: Agra ₹285 across two plazas, Rishikesh ₹280 across three, Jaipur ₹400 across three, Mussoorie ₹215 across two, Nainital ₹270 across three and Shimla ₹390 across three, all FASTag and all paid at actuals on the driver's tag." },
      { question: "What time should I leave Delhi at New Year?", answer: "Later than in summer. From December into January the expressways and highways out of Delhi sit under fog until mid-morning, and the road notes on every corridor say a later start is often the quicker one. For the hill destinations, plan the hill section for the middle of the day, when the ice has gone from the shaded bends." },
      { question: "Can I do Agra and the Taj on the first morning of the year?", answer: "Yes. Agra is three to four hours on the Yamuna Expressway, and the distance page's tip is a five o'clock start for the sunrise Taj; with a night in Agra on the thirty-first the sunrise is a walk from the hotel. The Taj is closed on Fridays." },
      { question: "Does the driver wait on New Year's Eve, and is the night halt extra?", answer: "The car is booked by the day, so there is no charge for it waiting while you are at dinner. The driver's night halt on a round trip is at actuals, as on any date, and a third day for the hill is one more day at the 300 km minimum." }
    ],
    date: "2026-09-14",
    readTime: "8 min read",
    image: "/images/sightseeing/Jaipur/Hawa_Mahal.jpg",
    category: "Cost Guide",
    tags: ["new year 2027", "new year road trip", "delhi weekend", "jaipur", "shimla", "rishikesh", "cab fare", "winter"],
    keywords: ["new year 2027 road trips from delhi", "new year trip from delhi by car", "places to celebrate new year near delhi", "new year cab from delhi", "delhi to jaipur new year", "new year snow trip from delhi"],
    featured: false,
    metaTitle: 'New Year 2027 Road Trips from Delhi: Cab Costs',
    metaDescription: "Six New Year 2027 drives from Delhi with the site's distances: Agra 230 km, Rishikesh 250, Jaipur 280, Mussoorie 290, Nainital 300, Shimla 350. Sedan from ₹3,300."
  },

  // 14 ============================================================
  {
    id: 92014,
    slug: 'driving-in-north-india-in-winter-fog-hill-roads-what-drivers-do',
    title: 'Driving in North India in Winter: Fog, Hill Roads and What Our Drivers Do',
    excerpt: 'From mid-December to the end of January the plains fog until mid-morning; from December the hill bends ice and the snow lies above the towns. What our road notes say for each corridor, why the winter start is later, how chains and the daylight rule work, and what a passenger can do to help.',
    relatedTours: [
      { id: "delhi-outstation", name: "Outstation Cabs from Delhi", slug: "outstation-cabs/delhi", city: "delhi", price: "From ₹11/km" },
      { id: "nainital-cab", name: "Delhi to Nainital Cab", slug: "delhi-to-nainital", city: "delhi", price: "From ₹11/km" }
    ],
    relatedDestinations: [
      { name: "Delhi", slug: "delhi", type: "city" },
      { name: "Nainital", slug: "nainital", type: "city" },
      { name: "Amritsar", slug: "amritsar", type: "city" }
    ],
    primaryCTA: {
      text: "Book a winter cab from Delhi",
      link: "/outstation-cabs/delhi"
    },
    content: `<p class="blog-lead"><strong>Winter driving in North India</strong> is two problems, one on the plain and one on the hill, and our drivers handle them with two rules. On the plain the problem is fog: from mid-December to the end of January, in the words of our road notes, the fog over the fields sits on the expressways and highways out of Delhi until mid-morning, and a four-hour drive becomes five. The rule is to leave later, not earlier, and to crawl with the fog lamps on rather than stop. On the hill the problem is ice and snow: from December the shaded bends ice over in the morning and the snow lies above the towns. The rule is daylight on the hill road and chains in the boot. Nothing about winter changes the rate card, which is ₹11/km for a sedan on a 300 km per day minimum on every date; what it changes is the clock. Three of our route guides carry the winter notes for their corridors: <a href="/delhi-to-rishikesh-shortest-route" class="text-blue-600 hover:underline font-semibold">Delhi to Rishikesh</a>, <a href="/delhi-to-nainital-by-car" class="text-blue-600 hover:underline font-semibold">Delhi to Nainital</a> and <a href="/delhi-to-amritsar-by-road" class="text-blue-600 hover:underline font-semibold">Delhi to Amritsar</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">When is the fog, and where?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Every corridor out of Delhi has a fog note in its road paragraph, and they agree on the months and differ on the hours. The Yamuna Expressway: from December to the end of January there is fog most mornings, thick enough near Jewar that we start later or drive slowly with the hazards on. The Agra–Lucknow side: in December and January the fog sits on the expressway from midnight until well after sunrise. NH-9 towards Moradabad and the Kumaon hills: from late December into January the Gajraula to Moradabad section can sit under fog until mid-morning, so a very early start gains nothing. The Meerut and Dehradun expressways towards Haridwar and Rishikesh: in late December and January the fog over the western UP fields sits on the expressway till mid-morning, so leave after ten and hold the middle lanes. NH-44 towards Amritsar: from December into January the Punjab plain fogs over heavily, worst between Ambala and Ludhiana, and can shut the view down to a few car lengths before ten in the morning. The Rajaji forest between Haridwar and Dehradun holds a thick morning fog until the sun is well up.</p>
<p class="text-gray-700 leading-relaxed mb-4">The pattern is the same everywhere: the fog forms after midnight, is worst around dawn, and lifts between mid-morning and ten. It is thickest on the flat river plains, the Yamuna floodplain, the Ganga canal country and the Punjab fields, and it thins as soon as the road climbs. A drive that is on the plain at dawn is in it; a drive that reaches the plain at ten is not.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Winter on the main corridors, from the road notes</h2>
<table class="w-full border-collapse border border-gray-300 my-6">
<thead><tr class="bg-gray-100">
<th class="border border-gray-300 px-4 py-2 text-left">Corridor</th>
<th class="border border-gray-300 px-4 py-2 text-left">The plain in winter</th>
<th class="border border-gray-300 px-4 py-2 text-left">The hill in winter</th>
<th class="border border-gray-300 px-4 py-2 text-left">What the drivers do</th>
</tr></thead>
<tbody>
<tr><td class="border border-gray-300 px-4 py-2">Delhi to Rishikesh and Haridwar, 250 km</td><td class="border border-gray-300 px-4 py-2">Fog on the Meerut expressway and the western UP fields till mid-morning</td><td class="border border-gray-300 px-4 py-2">No hill road; the river road is flat</td><td class="border border-gray-300 px-4 py-2">Leave after ten in the fog weeks, hold the middle lanes</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Delhi to Nainital, 300 km</td><td class="border border-gray-300 px-4 py-2">Fog from Gajraula to Moradabad until mid-morning</td><td class="border border-gray-300 px-4 py-2">Snow above the town from December to February; the road to Snow View may close after a fall</td><td class="border border-gray-300 px-4 py-2">Later start; chains carried when snow is forecast; the climb in the middle of the day</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Delhi to Amritsar, 450 km</td><td class="border border-gray-300 px-4 py-2">The Punjab plain fogs heavily, worst Ambala to Ludhiana, until about ten</td><td class="border border-gray-300 px-4 py-2">No hill road</td><td class="border border-gray-300 px-4 py-2">Slow rather than leave later, because the Wagah clock still applies; let the first rush clear at Attari after dusk</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Delhi to Mussoorie, 290 km</td><td class="border border-gray-300 px-4 py-2">Fog on the Meerut and Dehradun expressways</td><td class="border border-gray-300 px-4 py-2">Snow to the Mussoorie roads in January and February, heavier on the Dhanaulti side; ice on shaded bends; police hold cars at the bottom after a fall</td><td class="border border-gray-300 px-4 py-2">Chains, and set out with daylight in hand; a gentle driver on the bends</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Delhi to Shimla and Manali, 350 and 530 km</td><td class="border border-gray-300 px-4 py-2">Fog on NH-44 around Murthal, Karnal and Ambala in the early hours</td><td class="border border-gray-300 px-4 py-2">The shaded bends near Shimla and after Mandi ice over in the morning; Manali's snow from December; Rohtang closed</td><td class="border border-gray-300 px-4 py-2">The hill road in daylight, later than in summer; chains for the last stretch after a fall</td></tr>
<tr><td class="border border-gray-300 px-4 py-2">Srinagar and the Kashmir valley</td><td class="border border-gray-300 px-4 py-2">Dense morning fog on the Punjab plain on the way up</td><td class="border border-gray-300 px-4 py-2">The Jammu–Srinagar highway closes after heavy snow; the upper Pahalgam road can need chains after a fresh fall</td><td class="border border-gray-300 px-4 py-2">Winter runs as daylight-only drives; a spare day held; fly if the dates are fixed</td></tr>
</tbody></table>
<p class="text-gray-700 leading-relaxed mb-4">Every line in the table is from the corridor's own road paragraph or route guide on this site; the distances are the distance pages'.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Why do our drivers leave later in winter, not earlier?</h2>
<p class="text-gray-700 leading-relaxed mb-4">Because the early start buys nothing in fog. In summer a four o'clock departure clears Delhi before the traffic and puts the car on an empty expressway; in the fog weeks the same departure puts the car on an expressway it cannot see, at the speed of the vehicle in front, for four or five hours, and the ground gained by leaving early is lost by crawling. The road notes say it corridor by corridor: leave after ten and hold the middle lanes on the Rishikesh road; a very early start gains you nothing on the Nainital road; the later start is often the quicker one on the Punjab plain. The driver's winter rule is to time the departure so that the plain is crossed as the fog thins, and the hill section, where there is one, falls in the middle of the day.</p>
<p class="text-gray-700 leading-relaxed mb-4">There is one exception, and it is the Amritsar road. Wagah's ceremony keeps a clock and so does the Ludhiana traffic, and if the day has a fixed appointment at the far end the drivers slow rather than leave later, crawling through the Haryana fog with the lamps on and making the time up beyond Ambala. The same applies to a flight or a train: tell us the fixed time and the departure is planned to it, fog allowed for.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Chains, daylight and the police hold: how the hill rules work</h2>
<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">
<li class="ml-4"><strong>Chains are carried, not fitted.</strong> From December the car has them in the boot on the hill corridors; the driver fits them where fresh snow lies on the road, for the few kilometres it lies, and takes them off when the tarmac shows. The road notes for Nainital, Mussoorie and Pahalgam all put it the same way: chains when snow is forecast, or after a fresh fall.</li>
<li class="ml-4"><strong>The hill road is driven in daylight.</strong> Ice on a shaded bend is visible at noon and invisible at dusk, which is why the Kasol, Pahalgam and Lansdowne notes call their hill sections daylight-only in winter, and why the start is timed to put the climb in the middle of the day.</li>
<li class="ml-4"><strong>The police hold is respected.</strong> After a fall, the Mussoorie road notes say, the police hold cars at the bottom until the upper bends are cleared. That is an hour or two, not a day, and the driver waits rather than argues.</li>
<li class="ml-4"><strong>A closure is a closure.</strong> The Jammu–Srinagar highway shuts after heavy snow, sometimes for days, and the Manali road above the town can be held for a morning. The drivers check the road position the evening before, and if it is shut they say so rather than drive to a barrier.</li>
<li class="ml-4"><strong>The car is an SUV or Innova where the hill is real.</strong> Every hill page on this site recommends it, and in winter the clearance on a snowed bend and the grip on a climb are the reason.</li>
</ul>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">What a passenger can do</h2>
<p class="text-gray-700 leading-relaxed mb-4">Three things. Give the driver the fixed time at the far end, if there is one, and let him set the departure; a later start that arrives on time is better than an early one that sits in fog. Hold a spare day on any hill trip between December and February, because a fresh fall can close a road for a morning and the trips that go wrong in winter are the ones with a flight to catch. And carry the right things: warm layers for the hill towns, which are colder than the car; water and something to eat for a slow plain; and patience for the fog, which is the slowest part of the winter drive and the least dangerous if the driver is allowed to crawl.</p>
<p class="text-gray-700 leading-relaxed mb-4">The fare does not change with any of this. The rate card is ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, with tolls and parking at actuals, in January as in June. A slow day in fog is not billed as a longer day; a night held on the hill by snow is billed as a day at the minimum, with the driver's halt at actuals, and it is the reason for the spare day.</p>

<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">When is the fog season on North Indian roads?</h3>
<p class="text-gray-700 leading-relaxed mb-4">From mid-December to the end of January on our road notes, worst around dawn and lifting between mid-morning and ten, thickest on the flat river plains and thinning as soon as the road climbs.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Should I leave earlier or later in winter?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Later, unless the far end has a fixed time. The early start buys nothing in fog; time the departure so the plain is crossed as the fog thins and the hill section falls in the middle of the day.</p>
<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Do the cabs carry snow chains?</h3>
<p class="text-gray-700 leading-relaxed mb-4">Yes, on the hill corridors from December, fitted where fresh snow lies on the road and removed when the tarmac shows.</p>`,
    city: "Delhi",
    faqs: [
      { question: "When is the fog season on North Indian roads?", answer: "From mid-December to the end of January on our road notes, with December and January the months every corridor names. The fog forms after midnight, is worst around dawn and lifts between mid-morning and ten; it is thickest on the flat plains, the Yamuna floodplain, the Ganga canal country and the Punjab fields, and thins as soon as the road climbs." },
      { question: "Should I leave Delhi earlier or later in winter?", answer: "Later, unless the far end has a fixed time. The early start buys nothing in fog: the road notes say leave after ten on the Rishikesh road, that a very early start gains nothing on the Nainital road, and that the later start is often the quicker one on the Punjab plain. Time the departure so the plain is crossed as the fog thins and the hill section falls in the middle of the day." },
      { question: "Do the cabs carry snow chains?", answer: "Yes, on the hill corridors from December. The driver fits them where fresh snow lies on the road, for the few kilometres it lies, and takes them off when the tarmac shows; the road notes for Nainital, Mussoorie and Pahalgam all say chains when snow is forecast or after a fresh fall." },
      { question: "Which winter roads are driven in daylight only?", answer: "The hill sections. Ice on a shaded bend is visible at noon and invisible at dusk, so the Kasol, Pahalgam and Lansdowne notes call their hill roads daylight-only in winter, and the start on every hill corridor is timed to put the climb in the middle of the day." },
      { question: "What happens if snow closes the road?", answer: "The driver waits or says so. After a fall the police may hold cars at the bottom of the Mussoorie road until the bends are cleared, which is an hour or two; the Jammu–Srinagar highway can shut for days after heavy snow; the Manali road above the town can be held for a morning. The drivers check the road position the evening before, and a night held on the hill is billed as a day at the minimum, which is why we ask you to hold a spare day." },
      { question: "Does the fare change in winter?", answer: "No. The rate card is ₹11/km for a sedan, ₹15 for an Ertiga or SUV, ₹18 for an Innova Crysta and ₹23 for a 12-seater Tempo Traveller, on a 300 km per day minimum, with tolls and parking at actuals, in January as in June. A slow day in fog is not billed as a longer day." },
      { question: "Which car should I book for a winter hill trip?", answer: "An SUV or Innova Crysta. Every hill page on this site recommends it, and in winter the clearance on a snowed bend and the grip on a climb are the reason. A sedan manages the plains and the lower hill roads." },
      { question: "What should I carry for a winter drive?", answer: "Warm layers for the hill towns, which are colder than the car; water and something to eat for a slow plain; the fixed time at the far end, if there is one, so the driver can plan to it; and a spare day on any hill trip between December and February." }
    ],
    date: "2026-09-14",
    readTime: "9 min read",
    image: "/images/sightseeing/Nainital/Snow_View_Point.jpg",
    category: "Travel Tips",
    tags: ["winter driving", "fog", "hill roads", "snow chains", "north india", "road safety", "cab tips", "2026"],
    keywords: ["driving in north india in winter", "fog on delhi highways december", "winter road trip tips north india", "snow chains hill roads india", "delhi to hills in winter", "when to leave delhi in fog"],
    featured: false,
    metaTitle: "Driving in North India in Winter: Fog, Hill Roads, Drivers",
    metaDescription: "From mid-December to the end of January the plains fog until mid-morning; from December the hill bends ice. What our road notes say, the later start, chains and daylight."
  }
];

export default newBlogsWeek49;
