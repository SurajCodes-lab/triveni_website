const PptxGenJS = require("pptxgenjs");

// Create presentation
const pptx = new PptxGenJS();

// Set presentation properties
pptx.author = "Triveni Cabs";
pptx.title = "Corporate Travel & Events Solutions";
pptx.subject = "Business Proposal";
pptx.company = "Triveni Cabs";

// Define beautiful color palette
const colors = {
  primary: "FACF2D",      // Gold/Yellow
  primaryDark: "E5B91A",  // Darker Gold
  navy: "1E3A5F",         // Deep Navy
  navyLight: "2D4A6F",    // Lighter Navy
  purple: "6366F1",       // Modern Purple
  purpleLight: "818CF8",  // Light Purple
  teal: "14B8A6",         // Teal accent
  white: "FFFFFF",
  lightGray: "F8FAFC",
  darkGray: "334155",
  black: "0F172A",
  gradient1: "667EEA",    // Purple gradient
  gradient2: "764BA2",    // Pink purple
  coral: "F472B6",        // Coral pink
  orange: "FB923C",       // Orange
  green: "22C55E",        // Success green
};

// Master slide definition
pptx.defineSlideMaster({
  title: "MASTER_SLIDE",
  background: { color: colors.white },
  objects: [
    // Bottom accent bar
    { rect: { x: 0, y: 5.2, w: "100%", h: 0.3, fill: { color: colors.primary } } },
  ],
});

// ==================== SLIDE 1: TITLE SLIDE ====================
let slide = pptx.addSlide();

// Full background gradient effect using shapes
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: "100%",
  fill: { color: colors.navy },
});

// Decorative circle top right
slide.addShape(pptx.shapes.OVAL, {
  x: 7, y: -1.5, w: 4, h: 4,
  fill: { color: colors.primary, transparency: 20 },
  line: { color: colors.primary, transparency: 50, width: 2 },
});

// Decorative circle bottom left
slide.addShape(pptx.shapes.OVAL, {
  x: -1, y: 3.5, w: 3, h: 3,
  fill: { color: colors.purple, transparency: 30 },
  line: { color: colors.purple, transparency: 50, width: 2 },
});

// Company name
slide.addText("TRIVENI CABS", {
  x: 0.5, y: 1.8, w: "90%", h: 0.8,
  fontSize: 48,
  fontFace: "Arial Black",
  color: colors.primary,
  bold: true,
});

// Main title
slide.addText("Corporate Travel & Events Solutions", {
  x: 0.5, y: 2.6, w: "90%", h: 0.6,
  fontSize: 28,
  fontFace: "Arial",
  color: colors.white,
});

// Subtitle
slide.addText("Comprehensive Transportation Partner for Businesses", {
  x: 0.5, y: 3.2, w: "90%", h: 0.4,
  fontSize: 16,
  fontFace: "Arial",
  color: colors.lightGray,
  italic: true,
});

// Divider line
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0.5, y: 3.8, w: 2, h: 0.05,
  fill: { color: colors.primary },
});

// Cities
slide.addText("Delhi  |  Agra  |  Jaipur  |  Chandigarh  |  Dehradun", {
  x: 0.5, y: 4.1, w: "90%", h: 0.4,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

// Bottom tagline
slide.addText("Your Journey, Our Commitment", {
  x: 0.5, y: 4.8, w: "90%", h: 0.3,
  fontSize: 12,
  fontFace: "Arial",
  color: colors.lightGray,
});


// ==================== SLIDE 2: TABLE OF CONTENTS ====================
slide = pptx.addSlide();

// Header background
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 1.3,
  fill: { color: colors.navy },
});

slide.addText("Agenda", {
  x: 0.5, y: 0.4, w: "90%", h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

const agendaItems = [
  { num: "01", title: "Executive Summary", desc: "Vision & opportunity overview" },
  { num: "02", title: "Corporate Travel Solutions", desc: "End-to-end business transportation" },
  { num: "03", title: "Events & Functions", desc: "Complete event transportation" },
  { num: "04", title: "Design Approach", desc: "Visual & UX philosophy" },
  { num: "05", title: "Development Strategy", desc: "Technical implementation" },
  { num: "06", title: "SEO & Traffic Benefits", desc: "Search visibility strategy" },
  { num: "07", title: "Implementation Roadmap", desc: "Phased delivery plan" },
];

agendaItems.forEach((item, idx) => {
  const yPos = 1.6 + (idx * 0.5);

  // Number circle
  slide.addShape(pptx.shapes.OVAL, {
    x: 0.5, y: yPos, w: 0.4, h: 0.4,
    fill: { color: colors.primary },
  });

  slide.addText(item.num, {
    x: 0.5, y: yPos + 0.05, w: 0.4, h: 0.35,
    fontSize: 11,
    fontFace: "Arial",
    color: colors.navy,
    bold: true,
    align: "center",
    valign: "middle",
  });

  slide.addText(item.title, {
    x: 1.1, y: yPos, w: 3, h: 0.25,
    fontSize: 14,
    fontFace: "Arial",
    color: colors.navy,
    bold: true,
  });

  slide.addText(item.desc, {
    x: 1.1, y: yPos + 0.22, w: 4, h: 0.2,
    fontSize: 10,
    fontFace: "Arial",
    color: colors.darkGray,
  });
});

// Right side decorative element
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 8.5, y: 1.5, w: 0.08, h: 3.5,
  fill: { color: colors.primary },
});


// ==================== SLIDE 3: EXECUTIVE SUMMARY ====================
slide = pptx.addSlide();

slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 1.3,
  fill: { color: colors.navy },
});

slide.addText("Executive Summary", {
  x: 0.5, y: 0.4, w: "90%", h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

slide.addText("Transforming Triveni Cabs into North India's Premier B2B Transportation Partner", {
  x: 0.5, y: 1.5, w: "90%", h: 0.4,
  fontSize: 16,
  fontFace: "Arial",
  color: colors.navy,
  bold: true,
});

// Golden Triangle visual
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0.5, y: 2.1, w: 4, h: 2.5,
  fill: { color: colors.lightGray },
  line: { color: colors.primary, width: 2 },
  shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.2 },
});

slide.addText("THE OPPORTUNITY", {
  x: 0.7, y: 2.2, w: 3.6, h: 0.3,
  fontSize: 12,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

slide.addText("Golden Triangle\nBusiness Hub", {
  x: 0.7, y: 2.6, w: 3.6, h: 0.6,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.navy,
  bold: true,
});

const cities = ["Delhi - Corporate Hub", "Agra - Wedding & MICE", "Jaipur - Events Capital", "Chandigarh - IT Corridor", "Dehradun - Retreat Destination"];
cities.forEach((city, idx) => {
  slide.addText("●  " + city, {
    x: 0.7, y: 3.3 + (idx * 0.28), w: 3.6, h: 0.28,
    fontSize: 11,
    fontFace: "Arial",
    color: colors.darkGray,
  });
});

// Right side - What we're building
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 5, y: 2.1, w: 4.5, h: 2.5,
  fill: { color: colors.navy },
  shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.2 },
});

slide.addText("WHAT WE'RE BUILDING", {
  x: 5.2, y: 2.2, w: 4.1, h: 0.3,
  fontSize: 12,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

const buildItems = [
  { from: "Individual bookings", to: "Corporate accounts" },
  { from: "One-time customers", to: "Long-term partnerships" },
  { from: "Single vehicle booking", to: "Fleet management" },
  { from: "Basic inquiry form", to: "Smart booking engine" },
];

buildItems.forEach((item, idx) => {
  slide.addText(item.from + "  →  " + item.to, {
    x: 5.2, y: 2.7 + (idx * 0.4), w: 4.1, h: 0.35,
    fontSize: 11,
    fontFace: "Arial",
    color: colors.white,
  });
});


// ==================== SLIDE 4: CORPORATE TRAVEL - OVERVIEW ====================
slide = pptx.addSlide();

slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 1.3,
  fill: { color: colors.navy },
});

slide.addText("Corporate Travel Solutions", {
  x: 0.5, y: 0.4, w: "90%", h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

slide.addText("End-to-End Business Transportation Services", {
  x: 0.5, y: 0.9, w: "90%", h: 0.3,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.white,
});

// Service categories in cards
const corpServices = [
  { title: "Daily Operations", icon: "🏢", items: ["Employee pick-up & drop", "Shift-based transport", "Office shuttle services", "Executive daily commute"] },
  { title: "Business Travel", icon: "✈️", items: ["Executive travel", "Client pick-up", "Inter-city travel", "Multi-city roadshows"] },
  { title: "Special Requirements", icon: "🎯", items: ["Airport transfers", "Railway station transfers", "Project site visits", "Vendor & partner visits"] },
  { title: "Long-Term Solutions", icon: "📋", items: ["Monthly car rental", "Dedicated drivers", "Fleet management", "On-demand availability"] },
];

corpServices.forEach((service, idx) => {
  const xPos = 0.4 + (idx * 2.35);

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: 1.6, w: 2.2, h: 3.2,
    fill: { color: colors.lightGray },
    line: { color: colors.primary, width: 1.5 },
    shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.15 },
  });

  // Icon circle
  slide.addShape(pptx.shapes.OVAL, {
    x: xPos + 0.7, y: 1.75, w: 0.7, h: 0.7,
    fill: { color: colors.primary },
  });

  slide.addText(service.icon, {
    x: xPos + 0.7, y: 1.85, w: 0.7, h: 0.6,
    fontSize: 22,
    align: "center",
    valign: "middle",
  });

  slide.addText(service.title, {
    x: xPos + 0.1, y: 2.55, w: 2, h: 0.35,
    fontSize: 12,
    fontFace: "Arial",
    color: colors.navy,
    bold: true,
    align: "center",
  });

  service.items.forEach((item, itemIdx) => {
    slide.addText("• " + item, {
      x: xPos + 0.15, y: 2.95 + (itemIdx * 0.32), w: 1.9, h: 0.3,
      fontSize: 9,
      fontFace: "Arial",
      color: colors.darkGray,
    });
  });
});


// ==================== SLIDE 5: EVENTS & FUNCTIONS ====================
slide = pptx.addSlide();

// Purple themed header for events
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 1.3,
  fill: { color: colors.purple },
});

slide.addText("Events & Functions", {
  x: 0.5, y: 0.4, w: "90%", h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  color: colors.white,
  bold: true,
});

slide.addText("Complete Event Transportation Solutions", {
  x: 0.5, y: 0.9, w: "90%", h: 0.3,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.lightGray,
});

// Quote
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0.5, y: 1.5, w: 9, h: 0.6,
  fill: { color: colors.lightGray },
});

slide.addText('"From intimate gatherings to grand celebrations, we move your guests with precision"', {
  x: 0.7, y: 1.55, w: 8.6, h: 0.5,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.purple,
  italic: true,
  align: "center",
});

// Event categories
const eventCategories = [
  { title: "CORPORATE EVENTS", color: colors.navy, items: ["Conferences & Seminars", "AGMs & Board Meetings", "Product Launches", "Trade Shows & Exhibitions", "Team Building & Retreats"] },
  { title: "MICE", color: colors.purple, items: ["Meetings", "Incentive Trips", "Conferences", "Exhibitions", "Award Ceremonies"] },
  { title: "SOCIAL EVENTS", color: colors.coral, items: ["Weddings & Engagements", "Pre-wedding Functions", "Birthday Celebrations", "Anniversary Parties", "Family Gatherings"] },
  { title: "LARGE GATHERINGS", color: colors.teal, items: ["Political Rallies", "Religious Congregations", "Sports Events", "Cultural Festivals", "College & School Events"] },
];

eventCategories.forEach((cat, idx) => {
  const xPos = 0.4 + (idx * 2.35);

  // Card with colored top border
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: xPos, y: 2.25, w: 2.2, h: 0.15,
    fill: { color: cat.color },
  });

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: xPos, y: 2.4, w: 2.2, h: 2.35,
    fill: { color: colors.white },
    line: { color: colors.lightGray, width: 1 },
    shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.1 },
  });

  slide.addText(cat.title, {
    x: xPos + 0.1, y: 2.5, w: 2, h: 0.35,
    fontSize: 10,
    fontFace: "Arial",
    color: cat.color,
    bold: true,
    align: "center",
  });

  cat.items.forEach((item, itemIdx) => {
    slide.addText("• " + item, {
      x: xPos + 0.12, y: 2.9 + (itemIdx * 0.3), w: 1.96, h: 0.28,
      fontSize: 9,
      fontFace: "Arial",
      color: colors.darkGray,
    });
  });
});


// ==================== SLIDE 6: EVENT SERVICES ====================
slide = pptx.addSlide();

slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 1.3,
  fill: { color: colors.purple },
});

slide.addText("Event Transportation Services", {
  x: 0.5, y: 0.4, w: "90%", h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  color: colors.white,
  bold: true,
});

// Three columns
const eventServices = [
  { title: "Guest Transportation", icon: "👥", color: colors.primary, items: ["VIP & VVIP guest transfers", "Delegate transportation", "Speaker & artist pick-ups", "Attendee shuttle services"] },
  { title: "Fleet for Events", icon: "🚗", color: colors.purple, items: ["Luxury sedans for executives", "Premium SUVs for VIPs", "Tempo travellers for groups", "Buses (22-56 seater)", "Decorated wedding vehicles"] },
  { title: "Event Support", icon: "🎯", color: colors.teal, items: ["Multi-point pick-up coordination", "Venue-to-venue transfers", "Airport-to-venue shuttles", "Emergency backup vehicles", "Real-time coordination"] },
];

eventServices.forEach((service, idx) => {
  const xPos = 0.5 + (idx * 3.1);

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: 1.6, w: 2.9, h: 3.2,
    fill: { color: colors.white },
    line: { color: service.color, width: 2 },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.15 },
  });

  // Icon header
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: xPos, y: 1.6, w: 2.9, h: 0.8,
    fill: { color: service.color },
  });

  slide.addText(service.icon, {
    x: xPos, y: 1.65, w: 2.9, h: 0.5,
    fontSize: 28,
    align: "center",
  });

  slide.addText(service.title, {
    x: xPos + 0.1, y: 2.5, w: 2.7, h: 0.4,
    fontSize: 13,
    fontFace: "Arial",
    color: colors.navy,
    bold: true,
    align: "center",
  });

  service.items.forEach((item, itemIdx) => {
    slide.addText("✓  " + item, {
      x: xPos + 0.15, y: 3 + (itemIdx * 0.35), w: 2.6, h: 0.32,
      fontSize: 10,
      fontFace: "Arial",
      color: colors.darkGray,
    });
  });
});


// ==================== SLIDE 7: CITY COVERAGE ====================
slide = pptx.addSlide();

slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 1.3,
  fill: { color: colors.navy },
});

slide.addText("City-Specific Solutions", {
  x: 0.5, y: 0.4, w: "90%", h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

slide.addText("Dedicated Landing Pages for Each Target Market", {
  x: 0.5, y: 0.9, w: "90%", h: 0.3,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.white,
});

// City cards
const cityData = [
  { name: "DELHI", tag: "Corporate Hub", desc: "NCR's business center, MICE capital, event destination", color: colors.navy },
  { name: "AGRA", tag: "Wedding & Heritage", desc: "Destination weddings, heritage MICE venues", color: colors.purple },
  { name: "JAIPUR", tag: "Events Capital", desc: "Royal weddings, corporate events, tourism", color: colors.coral },
  { name: "CHANDIGARH", tag: "IT Corridor", desc: "IT hub, corporate gateway, business travel", color: colors.teal },
  { name: "DEHRADUN", tag: "Retreat Hub", desc: "Corporate retreats, offsites, team building", color: colors.green },
];

cityData.forEach((city, idx) => {
  const xPos = 0.35 + (idx * 1.9);

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: 1.6, w: 1.75, h: 2.8,
    fill: { color: colors.white },
    line: { color: city.color, width: 2 },
    shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.15 },
  });

  // City name header
  slide.addShape(pptx.shapes.RECTANGLE, {
    x: xPos, y: 1.6, w: 1.75, h: 0.6,
    fill: { color: city.color },
  });

  slide.addText(city.name, {
    x: xPos, y: 1.7, w: 1.75, h: 0.45,
    fontSize: 14,
    fontFace: "Arial",
    color: colors.white,
    bold: true,
    align: "center",
  });

  // Tag
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos + 0.15, y: 2.35, w: 1.45, h: 0.35,
    fill: { color: colors.primary },
  });

  slide.addText(city.tag, {
    x: xPos + 0.15, y: 2.35, w: 1.45, h: 0.35,
    fontSize: 9,
    fontFace: "Arial",
    color: colors.navy,
    bold: true,
    align: "center",
    valign: "middle",
  });

  slide.addText(city.desc, {
    x: xPos + 0.1, y: 2.85, w: 1.55, h: 1.4,
    fontSize: 9,
    fontFace: "Arial",
    color: colors.darkGray,
    align: "center",
  });
});

// What each page includes
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0.5, y: 4.55, w: 9, h: 0.55,
  fill: { color: colors.lightGray },
});

slide.addText("Each city page includes:  Corporate services  |  Event packages  |  Local venue partnerships  |  Fleet availability  |  Success stories", {
  x: 0.6, y: 4.6, w: 8.8, h: 0.45,
  fontSize: 10,
  fontFace: "Arial",
  color: colors.navy,
  align: "center",
  valign: "middle",
});


// ==================== SLIDE 8: DESIGN APPROACH ====================
slide = pptx.addSlide();

slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 1.3,
  fill: { color: colors.navy },
});

slide.addText("Design Approach", {
  x: 0.5, y: 0.4, w: "90%", h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

slide.addText("Visual Design Philosophy & User Experience", {
  x: 0.5, y: 0.9, w: "90%", h: 0.3,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.white,
});

// Design principles
const designPrinciples = [
  { title: "PROFESSIONAL", icon: "💼", desc: "Clean layouts, business-focused design, premium feel" },
  { title: "TRUSTWORTHY", icon: "🛡️", desc: "Credibility signals, client testimonials, trust badges" },
  { title: "EFFICIENT", icon: "⚡", desc: "Quick actions, clear CTAs, intuitive booking flows" },
  { title: "ACCESSIBLE", icon: "📱", desc: "Mobile-first, fast loading, all devices supported" },
];

designPrinciples.forEach((principle, idx) => {
  const xPos = 0.4 + (idx * 2.35);

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: 1.6, w: 2.2, h: 1.8,
    fill: { color: colors.lightGray },
    line: { color: colors.primary, width: 1.5 },
    shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.1 },
  });

  slide.addText(principle.icon, {
    x: xPos, y: 1.7, w: 2.2, h: 0.5,
    fontSize: 28,
    align: "center",
  });

  slide.addText(principle.title, {
    x: xPos + 0.1, y: 2.25, w: 2, h: 0.3,
    fontSize: 11,
    fontFace: "Arial",
    color: colors.navy,
    bold: true,
    align: "center",
  });

  slide.addText(principle.desc, {
    x: xPos + 0.1, y: 2.6, w: 2, h: 0.7,
    fontSize: 9,
    fontFace: "Arial",
    color: colors.darkGray,
    align: "center",
  });
});

// Color palette section
slide.addText("COLOR STRATEGY", {
  x: 0.5, y: 3.6, w: 2, h: 0.3,
  fontSize: 12,
  fontFace: "Arial",
  color: colors.navy,
  bold: true,
});

const colorPalette = [
  { name: "Primary Gold", hex: "#FACF2D", use: "Energy, Premium" },
  { name: "Corporate Navy", hex: "#1E3A5F", use: "Trust, Corporate" },
  { name: "Events Purple", hex: "#6366F1", use: "Celebration" },
  { name: "Success Teal", hex: "#14B8A6", use: "Confirmation" },
];

colorPalette.forEach((color, idx) => {
  const xPos = 0.5 + (idx * 2.35);

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: 3.95, w: 0.5, h: 0.5,
    fill: { color: color.hex.replace("#", "") },
  });

  slide.addText(color.name, {
    x: xPos + 0.6, y: 3.95, w: 1.6, h: 0.25,
    fontSize: 9,
    fontFace: "Arial",
    color: colors.navy,
    bold: true,
  });

  slide.addText(color.use, {
    x: xPos + 0.6, y: 4.18, w: 1.6, h: 0.25,
    fontSize: 8,
    fontFace: "Arial",
    color: colors.darkGray,
  });
});


// ==================== SLIDE 9: DEVELOPMENT STRATEGY ====================
slide = pptx.addSlide();

slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 1.3,
  fill: { color: colors.navy },
});

slide.addText("Development Strategy", {
  x: 0.5, y: 0.4, w: "90%", h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

slide.addText("Technical Implementation & Architecture", {
  x: 0.5, y: 0.9, w: "90%", h: 0.3,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.white,
});

// Tech stack
slide.addText("TECHNOLOGY STACK", {
  x: 0.5, y: 1.5, w: 3, h: 0.3,
  fontSize: 12,
  fontFace: "Arial",
  color: colors.navy,
  bold: true,
});

const techStack = [
  { category: "FRONTEND", items: "Next.js 15, React 19, Tailwind CSS, Framer Motion", color: colors.purple },
  { category: "BACKEND", items: "Next.js API Routes, Node.js Runtime", color: colors.teal },
  { category: "DATABASE", items: "PostgreSQL / MongoDB, Prisma ORM", color: colors.navy },
  { category: "HOSTING", items: "Vercel Edge Network, Global CDN", color: colors.primary },
];

techStack.forEach((tech, idx) => {
  const yPos = 1.9 + (idx * 0.5);

  slide.addShape(pptx.shapes.RECTANGLE, {
    x: 0.5, y: yPos, w: 0.08, h: 0.4,
    fill: { color: tech.color },
  });

  slide.addText(tech.category, {
    x: 0.7, y: yPos, w: 1.5, h: 0.2,
    fontSize: 9,
    fontFace: "Arial",
    color: tech.color,
    bold: true,
  });

  slide.addText(tech.items, {
    x: 0.7, y: yPos + 0.18, w: 4, h: 0.22,
    fontSize: 9,
    fontFace: "Arial",
    color: colors.darkGray,
  });
});

// Development phases
slide.addText("DEVELOPMENT PHASES", {
  x: 5.5, y: 1.5, w: 4, h: 0.3,
  fontSize: 12,
  fontFace: "Arial",
  color: colors.navy,
  bold: true,
});

const phases = [
  { num: "1", title: "Foundation", desc: "Landing pages, content, SEO" },
  { num: "2", title: "Booking Engine", desc: "Wizards, quotes, fleet selection" },
  { num: "3", title: "Corporate Portal", desc: "Accounts, users, reports" },
  { num: "4", title: "Advanced Features", desc: "Payments, tracking, API" },
];

phases.forEach((phase, idx) => {
  const yPos = 1.85 + (idx * 0.55);

  slide.addShape(pptx.shapes.OVAL, {
    x: 5.5, y: yPos, w: 0.4, h: 0.4,
    fill: { color: colors.primary },
  });

  slide.addText(phase.num, {
    x: 5.5, y: yPos + 0.05, w: 0.4, h: 0.35,
    fontSize: 14,
    fontFace: "Arial",
    color: colors.navy,
    bold: true,
    align: "center",
    valign: "middle",
  });

  slide.addText(phase.title, {
    x: 6.05, y: yPos, w: 2, h: 0.22,
    fontSize: 11,
    fontFace: "Arial",
    color: colors.navy,
    bold: true,
  });

  slide.addText(phase.desc, {
    x: 6.05, y: yPos + 0.2, w: 3.4, h: 0.22,
    fontSize: 9,
    fontFace: "Arial",
    color: colors.darkGray,
  });

  // Connecting line
  if (idx < phases.length - 1) {
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 5.68, y: yPos + 0.42, w: 0.04, h: 0.12,
      fill: { color: colors.lightGray },
    });
  }
});


// ==================== SLIDE 10: SEO & TRAFFIC ====================
slide = pptx.addSlide();

slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 1.3,
  fill: { color: colors.navy },
});

slide.addText("SEO & Traffic Benefits", {
  x: 0.5, y: 0.4, w: "90%", h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

slide.addText("Search Visibility & Organic Growth Strategy", {
  x: 0.5, y: 0.9, w: "90%", h: 0.3,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.white,
});

// Left column - Keyword targeting
slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 0.4, y: 1.5, w: 4.5, h: 3.4,
  fill: { color: colors.lightGray },
  line: { color: colors.primary, width: 1.5 },
});

slide.addText("KEYWORD TARGETING", {
  x: 0.6, y: 1.6, w: 4.1, h: 0.35,
  fontSize: 12,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

slide.addText("Corporate Travel Keywords", {
  x: 0.6, y: 2, w: 4.1, h: 0.25,
  fontSize: 10,
  fontFace: "Arial",
  color: colors.navy,
  bold: true,
});

const corpKeywords = ["corporate cab service Delhi", "employee transportation Gurgaon", "executive car hire Delhi NCR", "company vehicle rental"];
corpKeywords.forEach((kw, idx) => {
  slide.addText("• " + kw, {
    x: 0.7, y: 2.25 + (idx * 0.25), w: 4, h: 0.25,
    fontSize: 9,
    fontFace: "Arial",
    color: colors.darkGray,
  });
});

slide.addText("Events Keywords", {
  x: 0.6, y: 3.35, w: 4.1, h: 0.25,
  fontSize: 10,
  fontFace: "Arial",
  color: colors.navy,
  bold: true,
});

const eventKeywords = ["wedding car rental Delhi", "event transportation service", "conference shuttle service", "MICE transport Jaipur"];
eventKeywords.forEach((kw, idx) => {
  slide.addText("• " + kw, {
    x: 0.7, y: 3.6 + (idx * 0.25), w: 4, h: 0.25,
    fontSize: 9,
    fontFace: "Arial",
    color: colors.darkGray,
  });
});

// Right column - Benefits
slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 5.1, y: 1.5, w: 4.4, h: 3.4,
  fill: { color: colors.navy },
});

slide.addText("EXPECTED BENEFITS", {
  x: 5.3, y: 1.6, w: 4, h: 0.35,
  fontSize: 12,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

const benefits = [
  { title: "New Keyword Rankings", desc: "Corporate travel, event booking, city-specific terms" },
  { title: "Increased Visibility", desc: "Higher search rankings, featured snippets, local pack" },
  { title: "Quality Traffic", desc: "B2B decision makers, corporate procurement, event planners" },
  { title: "Conversion Potential", desc: "Higher value inquiries, repeat business, bulk bookings" },
];

benefits.forEach((benefit, idx) => {
  const yPos = 2.05 + (idx * 0.75);

  slide.addShape(pptx.shapes.OVAL, {
    x: 5.3, y: yPos, w: 0.25, h: 0.25,
    fill: { color: colors.primary },
  });

  slide.addText(benefit.title, {
    x: 5.65, y: yPos - 0.02, w: 3.7, h: 0.25,
    fontSize: 10,
    fontFace: "Arial",
    color: colors.white,
    bold: true,
  });

  slide.addText(benefit.desc, {
    x: 5.65, y: yPos + 0.22, w: 3.7, h: 0.4,
    fontSize: 9,
    fontFace: "Arial",
    color: colors.lightGray,
  });
});


// ==================== SLIDE 11: IMPLEMENTATION ROADMAP ====================
slide = pptx.addSlide();

slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 1.3,
  fill: { color: colors.navy },
});

slide.addText("Implementation Roadmap", {
  x: 0.5, y: 0.4, w: "90%", h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

slide.addText("Phased Delivery for Maximum Impact", {
  x: 0.5, y: 0.9, w: "90%", h: 0.3,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.white,
});

// Timeline phases
const roadmapPhases = [
  {
    phase: "PHASE 1",
    title: "Foundation",
    color: colors.primary,
    items: ["Corporate services landing page", "Events & functions landing page", "City-specific pages (5 cities)", "Enhanced inquiry forms", "SEO optimization"]
  },
  {
    phase: "PHASE 2",
    title: "Booking System",
    color: colors.purple,
    items: ["Corporate booking wizard", "Event booking wizard", "Quote generation system", "Fleet selection interface", "Multi-vehicle booking"]
  },
  {
    phase: "PHASE 3",
    title: "Corporate Portal",
    color: colors.teal,
    items: ["Company account management", "User roles & permissions", "Booking history & reports", "Invoice management", "Approval workflows"]
  },
  {
    phase: "PHASE 4",
    title: "Advanced Features",
    color: colors.green,
    items: ["Payment gateway integration", "Real-time tracking", "Automated notifications", "Analytics dashboard", "Third-party API"]
  },
];

// Timeline line
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0.8, y: 1.75, w: 8.4, h: 0.06,
  fill: { color: colors.lightGray },
});

roadmapPhases.forEach((phase, idx) => {
  const xPos = 0.5 + (idx * 2.35);

  // Timeline dot
  slide.addShape(pptx.shapes.OVAL, {
    x: xPos + 0.85, y: 1.6, w: 0.35, h: 0.35,
    fill: { color: phase.color },
  });

  // Phase card
  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: 2.1, w: 2.2, h: 2.7,
    fill: { color: colors.white },
    line: { color: phase.color, width: 2 },
    shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.1 },
  });

  slide.addText(phase.phase, {
    x: xPos, y: 2.15, w: 2.2, h: 0.25,
    fontSize: 9,
    fontFace: "Arial",
    color: phase.color,
    bold: true,
    align: "center",
  });

  slide.addText(phase.title, {
    x: xPos, y: 2.4, w: 2.2, h: 0.3,
    fontSize: 12,
    fontFace: "Arial",
    color: colors.navy,
    bold: true,
    align: "center",
  });

  phase.items.forEach((item, itemIdx) => {
    slide.addText("☐ " + item, {
      x: xPos + 0.1, y: 2.75 + (itemIdx * 0.35), w: 2, h: 0.32,
      fontSize: 8,
      fontFace: "Arial",
      color: colors.darkGray,
    });
  });
});


// ==================== SLIDE 12: COMPETITIVE ADVANTAGE ====================
slide = pptx.addSlide();

slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: 1.3,
  fill: { color: colors.navy },
});

slide.addText("Competitive Advantages", {
  x: 0.5, y: 0.4, w: "90%", h: 0.6,
  fontSize: 32,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
});

slide.addText("What Sets Triveni Cabs Apart", {
  x: 0.5, y: 0.9, w: "90%", h: 0.3,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.white,
});

// Value propositions
const valueProps = [
  { icon: "🎯", title: "Local Expertise", desc: "Deep knowledge of Delhi, Agra, Jaipur, Chandigarh & Dehradun business corridors. Understanding of local corporate culture and event traditions." },
  { icon: "🚐", title: "Comprehensive Fleet", desc: "From executive sedans to 56-seater buses. Single vendor for all transportation needs. No coordination hassles with multiple vendors." },
  { icon: "🔄", title: "End-to-End Service", desc: "Planning → Booking → Execution → Reporting. Complete transportation lifecycle management. Dedicated coordination for events." },
  { icon: "💰", title: "Transparent Pricing", desc: "Clear corporate rates with no hidden costs. Custom packages for regular requirements. Volume-based pricing for large events." },
];

valueProps.forEach((prop, idx) => {
  const isLeft = idx % 2 === 0;
  const xPos = isLeft ? 0.4 : 5.1;
  const yPos = 1.5 + (Math.floor(idx / 2) * 1.65);

  slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
    x: xPos, y: yPos, w: 4.5, h: 1.5,
    fill: { color: colors.white },
    line: { color: colors.primary, width: 1.5 },
    shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.1 },
  });

  // Icon
  slide.addShape(pptx.shapes.OVAL, {
    x: xPos + 0.15, y: yPos + 0.15, w: 0.6, h: 0.6,
    fill: { color: colors.primary },
  });

  slide.addText(prop.icon, {
    x: xPos + 0.15, y: yPos + 0.2, w: 0.6, h: 0.55,
    fontSize: 22,
    align: "center",
  });

  slide.addText(prop.title, {
    x: xPos + 0.9, y: yPos + 0.2, w: 3.4, h: 0.3,
    fontSize: 13,
    fontFace: "Arial",
    color: colors.navy,
    bold: true,
  });

  slide.addText(prop.desc, {
    x: xPos + 0.9, y: yPos + 0.55, w: 3.4, h: 0.85,
    fontSize: 9,
    fontFace: "Arial",
    color: colors.darkGray,
  });
});


// ==================== SLIDE 13: THANK YOU ====================
slide = pptx.addSlide();

// Full navy background
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 0, y: 0, w: "100%", h: "100%",
  fill: { color: colors.navy },
});

// Decorative circles
slide.addShape(pptx.shapes.OVAL, {
  x: 7.5, y: -0.5, w: 3, h: 3,
  fill: { color: colors.primary, transparency: 15 },
});

slide.addShape(pptx.shapes.OVAL, {
  x: -0.5, y: 3.5, w: 2.5, h: 2.5,
  fill: { color: colors.purple, transparency: 20 },
});

// Thank you text
slide.addText("Thank You", {
  x: 0, y: 1.5, w: "100%", h: 0.8,
  fontSize: 48,
  fontFace: "Arial",
  color: colors.primary,
  bold: true,
  align: "center",
});

slide.addText("Let's Build Together", {
  x: 0, y: 2.3, w: "100%", h: 0.5,
  fontSize: 20,
  fontFace: "Arial",
  color: colors.white,
  align: "center",
});

// Divider
slide.addShape(pptx.shapes.RECTANGLE, {
  x: 3.5, y: 2.95, w: 3, h: 0.04,
  fill: { color: colors.primary },
});

// Contact info
slide.addText("TRIVENI CABS", {
  x: 0, y: 3.2, w: "100%", h: 0.4,
  fontSize: 16,
  fontFace: "Arial",
  color: colors.white,
  bold: true,
  align: "center",
});

slide.addText("Corporate Travel & Events Solutions", {
  x: 0, y: 3.55, w: "100%", h: 0.3,
  fontSize: 12,
  fontFace: "Arial",
  color: colors.lightGray,
  align: "center",
});

// Contact details box
slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
  x: 2.5, y: 4, w: 5, h: 1,
  fill: { color: colors.white, transparency: 10 },
  line: { color: colors.primary, width: 1 },
});

slide.addText("📞  +91 76685 70551     |     🌐  www.trivenicabs.in     |     ✉️  info@trivenicabs.in", {
  x: 2.5, y: 4.1, w: 5, h: 0.8,
  fontSize: 11,
  fontFace: "Arial",
  color: colors.white,
  align: "center",
  valign: "middle",
});

// Tagline
slide.addText('"Your Journey, Our Commitment"', {
  x: 0, y: 5.1, w: "100%", h: 0.3,
  fontSize: 14,
  fontFace: "Arial",
  color: colors.primary,
  italic: true,
  align: "center",
});


// Save the presentation
pptx.writeFile({ fileName: "Triveni_Cabs_Corporate_Events_Proposal.pptx" })
  .then(() => {
    console.log("\n✅ Presentation created successfully!");
    console.log("📁 File: Triveni_Cabs_Corporate_Events_Proposal.pptx");
    console.log("\n📊 Slides included:");
    console.log("   1. Title Slide");
    console.log("   2. Agenda / Table of Contents");
    console.log("   3. Executive Summary");
    console.log("   4. Corporate Travel Solutions");
    console.log("   5. Events & Functions Overview");
    console.log("   6. Event Transportation Services");
    console.log("   7. City-Specific Solutions");
    console.log("   8. Design Approach");
    console.log("   9. Development Strategy");
    console.log("  10. SEO & Traffic Benefits");
    console.log("  11. Implementation Roadmap");
    console.log("  12. Competitive Advantages");
    console.log("  13. Thank You / Contact");
  })
  .catch((err) => {
    console.error("Error creating presentation:", err);
  });
