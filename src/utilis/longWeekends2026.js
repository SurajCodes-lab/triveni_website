// One fact set for 2026 long weekends — consumed by /long-weekend-calendar-2026
// and the "next long weekend" chips. Dates are weekday-verified (2026-01-01 = Thu).
export const LONG_WEEKENDS_2026 = [
  { id: 'independence-day', dates: '15–16 August 2026', event: 'Independence Day weekend', end: '2026-08-16T23:59:59+05:30', start: '2026-08-15' },
  { id: 'raksha-bandhan', dates: '28–30 August 2026', event: 'Raksha Bandhan long weekend', end: '2026-08-30T23:59:59+05:30', start: '2026-08-28' },
  { id: 'janmashtami', dates: '4–6 September 2026', event: 'Janmashtami long weekend', end: '2026-09-06T23:59:59+05:30', start: '2026-09-04' },
  { id: 'ganesh-chaturthi', dates: '12–14 September 2026', event: 'Ganesh Chaturthi long weekend', end: '2026-09-14T23:59:59+05:30', start: '2026-09-12' },
  { id: 'gandhi-jayanti', dates: '2–4 October 2026', event: 'Gandhi Jayanti long weekend', end: '2026-10-04T23:59:59+05:30', start: '2026-10-02' },
  { id: 'diwali', dates: '7–9 November 2026', event: 'Diwali', end: '2026-11-09T23:59:59+05:30', start: '2026-11-07' },
  { id: 'christmas', dates: '25–27 December 2026', event: 'Christmas long weekend', end: '2026-12-27T23:59:59+05:30', start: '2026-12-25' },
  { id: 'new-year', dates: '1–3 January 2027', event: 'New Year long weekend', end: '2027-01-03T23:59:59+05:30', start: '2027-01-01' },
];

// Next upcoming window with days-to-go (IST-safe: start interpreted as IST midnight).
export function getNextLongWeekend(now = new Date()) {
  const next = LONG_WEEKENDS_2026.find((w) => now <= new Date(w.end));
  if (!next) return null;
  const startMs = new Date(`${next.start}T00:00:00+05:30`).getTime();
  const daysToGo = Math.max(0, Math.ceil((startMs - now.getTime()) / 86400000));
  return { ...next, daysToGo, isLive: now.getTime() >= startMs };
}
