// ─── HCNA SITE EVENT DATA ────────────────────────────────────────────────────
// This is the single source of truth for all HCNA events.
// It drives two things automatically:
//   1. The "Coming Up" card on the home page (next 2 upcoming events)
//   2. The dot-highlights on the Events page mini-calendar
//
// To add or update an event, edit this array — no other files need changing.
// Fields: date (YYYY-MM-DD), title, time (display string), location.
// ─────────────────────────────────────────────────────────────────────────────
const siteEvents = [
  { date: '2026-04-08', title: 'Monthly Board Meeting',                   time: '6:00 PM',  location: 'Albuquerque Country Club' },
  { date: '2026-04-11', title: 'Albuquerque Marathon & Half Marathon',    time: '7:30 AM',  location: 'Runners through neighborhood' },
  { date: '2026-05-13', title: 'Annual Neighborhood Meeting',             time: '6:00 PM',  location: 'ACC Banquet Room' },
  { date: '2026-05-22', title: 'Alebrijes Installation at Robinson Park', time: 'All Day',  location: 'Robinson Park, 8th & Central' },
  { date: '2026-05-27', title: 'Alebrijes Press Conference',              time: '1:00 PM',  location: 'Robinson Park, 8th & Central' },
  { date: '2026-06-10', title: 'Monthly Board Meeting',                   time: '6:00 PM',  location: 'ACC Board Room' },
  { date: '2026-07-08', title: 'Monthly Board Meeting',                   time: '6:00 PM',  location: 'ACC Board Room' },
  { date: '2026-08-04', title: 'National Night Out',                      time: '6:00 PM',  location: 'Forest Park' },
  { date: '2026-08-12', title: 'Monthly Board Meeting',                   time: '6:00 PM',  location: 'Albuquerque Country Club' },
  { date: '2026-09-09', title: 'Monthly Board Meeting',                   time: '6:00 PM',  location: 'Albuquerque Country Club' },
  { date: '2026-10-14', title: 'Monthly Board Meeting',                   time: '6:00 PM',  location: 'Albuquerque Country Club' },
  { date: '2026-11-11', title: 'Monthly Board Meeting',                   time: '6:00 PM',  location: 'Albuquerque Country Club' },
  { date: '2026-12-09', title: 'Monthly Board Meeting',                   time: '6:00 PM',  location: 'Albuquerque Country Club' },
];
