export interface Project {
  id: string;
  title: string;
  category: "residential" | "corporate" | "integrated";
  location: string;
  client?: string;
  address: string;
  year: string;
  heroImage: string;
  thumbnail: string;
  exteriorImage: string;
  interiorImages: string[];
  tagline: string;
  description: string;
  scope: string[];
  systems: string[];
  highlights: string[];
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
  // ─── Residential ────────────────────────────────────────────────
  {
    id: "bridal-path",
    title: "The Bridal Path Estate",
    category: "residential",
    location: "The Bridal Path, Toronto",
    address: "The Bridal Path, Toronto",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=85&fit=crop",
    exteriorImage:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=85&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85&fit=crop",
    ],
    tagline: "17,000 sq ft of seamless Canadian excellence",
    description:
      "A landmark whole-home automation project at one of Canada's most prestigious addresses on The Bridal Path. Every system in this 17,000 sq ft estate was integrated into a single Crestron NVX backbone, programmed with bespoke scenes, custom touchscreen interfaces, and AI-assisted scheduling. This project represents the pinnacle of residential integration in Canada.",
    scope: [
      "Whole-Home Crestron NVX Automation",
      "Multi-Zone Lutron Ketra Lighting",
      "Motorized Lutron Sivoia Shading",
      "12-Zone Sonance Audio Distribution",
      "Home Cinema — Dolby Atmos 11.2.4",
      "Crestron Security & Access Control",
      "Outdoor Entertainment System",
      "EV Charging & Energy Management",
    ],
    systems: [
      "Crestron NVX-350",
      "Lutron RadioRA 3",
      "Lutron Ketra N-38",
      "Sonance Invisible Series",
      "Polk Audio Legend L800",
      "RTI XP-8",
      "eufy Security Pro",
    ],
    highlights: [
      "Single-touch scene control across 34 zones throughout the estate",
      "Ketra tunable lighting synced to circadian rhythms in all bedrooms",
      "Full Dolby Atmos 11.2.4 home cinema with 4K laser projection",
      "AI-assisted climate and energy management reduced consumption by 28%",
      "Geofenced arrival sequence primes the home 10 minutes before return",
      "Waterfall feature, pool, and full outdoor terrace integrated on one interface",
    ],
    stats: [
      { label: "Square Feet", value: "17,000" },
      { label: "Zones", value: "34" },
      { label: "Devices", value: "420+" },
      { label: "Energy Reduction", value: "28%" },
    ],
  },
  {
    id: "rosedale",
    title: "Rosedale Residence",
    category: "residential",
    location: "Rosedale, Toronto",
    address: "Rosedale, Toronto",
    year: "2023",
    heroImage:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1920&q=90&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&q=85&fit=crop",
    exteriorImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85&fit=crop",
    ],
    tagline: "Rosedale heritage reimagined with invisible technology",
    description:
      "A masterful integration project in Rosedale — one of Canada's most storied neighbourhoods. The challenge: deliver world-class smart home capability without disturbing a single original architectural detail. RTI whole-home control, invisible speaker installation, and a corporate-grade home office AV suite were woven into the fabric of the building with zero visual compromise.",
    scope: [
      "RTI Whole-Home Control Programming",
      "Invisible In-Wall Speaker Installation",
      "Home Office Corporate AV Suite",
      "Lutron Architectural Dimming",
      "Motorized Heritage-Grade Window Treatments",
      "Crestron Security & Video Intercom",
      "Multi-Room Audio — 10 Zones",
      "Custom iPad & Mobile App Programming",
    ],
    systems: [
      "RTI XP-8 Controller",
      "Lutron Homeworks QSX",
      "Sonance Portrait Series",
      "Crestron DM NVX",
      "Q-SYS Core 110f",
      "Shure MXA910",
      "eufy Video Doorbell Pro",
    ],
    highlights: [
      "Zero visible technology — every device flush-mounted or fully concealed",
      "Custom RTI interface uses original architectural photography as backgrounds",
      "Corporate-grade Q-SYS home office for Fortune 500-level video conferencing",
      "Heritage windows fitted with motorized treatments that preserve original profile",
      "10-zone distributed audio with Sonance Portrait invisible speakers throughout",
      "Dedicated server room with N+1 redundant power and remote monitoring",
    ],
    stats: [
      { label: "Square Feet", value: "11,200" },
      { label: "Audio Zones", value: "10" },
      { label: "Devices", value: "280+" },
      { label: "Visible Tech", value: "Zero" },
    ],
  },

  // ─── Corporate ──────────────────────────────────────────────────
  {
    id: "nestle-canada",
    title: "Nestlé Canada HQ",
    category: "corporate",
    client: "Nestlé Canada",
    location: "North York, Toronto",
    address: "North York, Toronto, ON",
    year: "2023",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&fit=crop",
    exteriorImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=85&fit=crop",
    ],
    tagline: "32 meeting rooms. One flawless system.",
    description:
      "A full-campus AV infrastructure overhaul at Nestlé Canada's North York headquarters. Spanning 8 floors and 32 meeting spaces, every boardroom, conference room, and executive suite was unified under a Crestron control backbone with Q-SYS networked audio and Shure ceiling microphone arrays — engineered for zero-friction meetings at enterprise scale.",
    scope: [
      "Crestron Enterprise AV Control",
      "Q-SYS Core 510 Audio DSP",
      "Shure MXA910 Ceiling Mic Arrays",
      "Bose Professional Speaker Systems",
      "Microsoft Teams & Zoom Room Certification",
      "Automated Room Scheduling Display",
      "Digital Signage — Lobby & Wayfinding",
      "Rack Build & Structured Cabling",
    ],
    systems: [
      "Crestron Flex UC",
      "Q-SYS Core 510",
      "Shure MXA910",
      "Bose DS100F",
      "Samsung Commercial Displays",
      "Microsoft Teams Rooms",
      "BrightSign Signage",
    ],
    highlights: [
      "32 meeting rooms unified under single Crestron management platform",
      "One-button meeting start across all conferencing platforms",
      "Shure IntelliMix Room AI noise cancellation deployed enterprise-wide",
      "Bose DS100F ceiling speakers maintain boardroom-grade audio fidelity",
      "Real-time room availability on Samsung displays at every entrance",
      "Remote monitoring via Crestron XiO Cloud for proactive issue resolution",
    ],
    stats: [
      { label: "Meeting Rooms", value: "32" },
      { label: "Floors", value: "8" },
      { label: "Devices", value: "450+" },
      { label: "Uptime SLA", value: "99.9%" },
    ],
  },
  {
    id: "kraft-heinz-canada",
    title: "Kraft Heinz Canada",
    category: "corporate",
    client: "Kraft Heinz Canada",
    location: "Queen's Quay, Toronto",
    address: "Queen's Quay, Toronto, ON",
    year: "2022",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=90&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=85&fit=crop",
    exteriorImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=85&fit=crop",
    ],
    tagline: "Waterfront executive AV — precision at every level",
    description:
      "Kraft Heinz Canada's Queen's Quay waterfront office required a full AV integration across executive boardrooms, open collaboration spaces, and a flagship cafeteria AV installation. AMX Enova control was paired with Q-SYS audio processing and Bose Professional speaker systems, delivering a cohesive and brand-consistent experience across every zone.",
    scope: [
      "AMX Enova DVX AV Control",
      "Q-SYS Networked Audio Distribution",
      "Bose Professional Ceiling Speakers",
      "Shure MXA710 Linear Mic Arrays",
      "Executive Boardroom AV Suite",
      "Cafeteria & Town Hall AV",
      "Lobby Digital Signage Wall",
      "Microsoft Teams Rooms Integration",
    ],
    systems: [
      "AMX Enova DVX-3266-4K",
      "Q-SYS Core 110f",
      "Shure MXA710",
      "Bose EdgeMax EM180",
      "LG Commercial Displays",
      "Microsoft Teams Rooms",
      "Appspace Digital Signage",
    ],
    highlights: [
      "AMX Enova 4K matrix distributes content to 16 display zones",
      "Bose EdgeMax speakers deliver uniform coverage across cafeteria",
      "Executive boardroom features dual 4K displays with wireless presenting",
      "Lobby video wall: 3×3 Samsung display array with custom content",
      "Single AMX touchpanel controls all AV across the entire floor plate",
      "Zero-touch automatic camera tracking in all executive meeting rooms",
    ],
    stats: [
      { label: "AV Zones", value: "16" },
      { label: "Meeting Rooms", value: "12" },
      { label: "Devices", value: "280+" },
      { label: "Video Wall", value: "3×3" },
    ],
  },
  {
    id: "osler-hoskin",
    title: "Osler, Hoskin & Harcourt LLP",
    category: "corporate",
    client: "Osler, Hoskin & Harcourt LLP",
    location: "Bay Street, Toronto",
    address: "Bay Street, Toronto, ON",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=1920&q=90&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=900&q=85&fit=crop",
    exteriorImage:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=85&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85&fit=crop",
    ],
    tagline: "Canada's premier law firm — AV at the highest standard",
    description:
      "Osler, Hoskin & Harcourt LLP demanded an AV installation worthy of Bay Street's most prestigious firm. Six formal boardrooms, 20 client meeting rooms, and a flagship client suite were integrated under Crestron control with Q-SYS audio and Shure MXA920 beamforming microphones — designed for confidential, broadcast-quality meetings with zero tolerance for failure.",
    scope: [
      "Crestron Flex Boardroom AV",
      "Q-SYS Core 310 Audio Processing",
      "Shure MXA920 Beamforming Mic Arrays",
      "Bose Professional Speaker Systems",
      "Video Conferencing — Zoom & Teams",
      "Client Suite Presentation AV",
      "Digital Docket & Room Booking Displays",
      "Rack Infrastructure & Remote Monitoring",
    ],
    systems: [
      "Crestron Flex UC-M70-T",
      "Q-SYS Core 310",
      "Shure MXA920",
      "Bose DS16F",
      "Samsung QM Series",
      "Zoom Rooms",
      "Condeco Room Booking",
    ],
    highlights: [
      "26 rooms unified under Crestron XiO Cloud remote management",
      "Shure MXA920 AI beamforming ensures crystal-clear deposition quality audio",
      "Confidential meeting security: one-touch lockdown disables all recording paths",
      "Client suite features 8K Sony display and Bose reference-grade audio",
      "Custom-branded Crestron touchpanels match firm's visual identity",
      "Sub-30 second room reset between meetings via automated control sequences",
    ],
    stats: [
      { label: "Boardrooms", value: "6" },
      { label: "Meeting Rooms", value: "20" },
      { label: "Devices", value: "180+" },
      { label: "Reset Time", value: "<30s" },
    ],
  },
  {
    id: "mead-johnson-ottawa",
    title: "Mead Johnson Nutrition",
    category: "corporate",
    client: "Mead Johnson Nutrition",
    location: "Ottawa, ON",
    address: "Ottawa, Ontario",
    year: "2021",
    heroImage:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=90&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=85&fit=crop",
    exteriorImage:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=85&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=85&fit=crop",
    ],
    tagline: "Ottawa headquarters — complete AV buildout from the ground up",
    description:
      "Mead Johnson Nutrition's new Ottawa headquarters required a full AV buildout across a modern open-plan office with training facilities, a 120-seat all-hands auditorium, and 12 conference rooms. AMX control systems were paired with Bose Professional distributed audio and Q-SYS DSP — delivering a unified platform managed from a single administrator interface.",
    scope: [
      "AMX NX Series AV Control",
      "Q-SYS Core 250i Audio DSP",
      "Bose Professional Distributed Audio",
      "120-Seat Auditorium AV System",
      "Multi-Room Conference Integration",
      "Training Room Interactive Displays",
      "Building-Wide Digital Signage Network",
      "Structured Cabling & Rack Infrastructure",
    ],
    systems: [
      "AMX NX-3200",
      "Q-SYS Core 250i",
      "Bose Pro PowerMatch PM8500N",
      "Bose RoomMatch Array",
      "Shure QLXD Wireless",
      "Epson Laser Projectors",
      "BrightSign Digital Signage",
    ],
    highlights: [
      "120-seat auditorium with Bose RoomMatch line array and Q-SYS processing",
      "Single AMX administrator interface controls all 12 conference rooms",
      "Shure QLXD wireless mic systems deployed across all event spaces",
      "Digital signage network delivers real-time HR and corporate content",
      "Auditorium doubles as live streaming studio with broadcast-grade signal chain",
      "Training rooms feature BYOD wireless presentation with zero cable clutter",
    ],
    stats: [
      { label: "Auditorium Seats", value: "120" },
      { label: "Conference Rooms", value: "12" },
      { label: "Devices", value: "240+" },
      { label: "AV Zones", value: "18" },
    ],
  },
];

export const projectCategories = ["all", "residential", "corporate"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
