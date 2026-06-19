export interface Project {
  id: string;
  title: string;
  category: "residential" | "corporate" | "integrated";
  location: string;
  year: string;
  heroImage: string;
  thumbnail: string;
  tagline: string;
  description: string;
  scope: string[];
  systems: string[];
  highlights: string[];
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "highland-estate",
    title: "Highland Estate",
    category: "residential",
    location: "Naples, FL",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop",
    tagline: "12,000 sq ft of seamless intelligence",
    description:
      "A complete whole-home automation system for a premier waterfront estate. Every system — lighting, climate, security, AV, and shading — operates through a single Crestron NVX platform with custom touchscreen interfaces designed exclusively for this property.",
    scope: [
      "Whole-Home Automation",
      "Multi-Zone AV Distribution",
      "Lutron Lighting Control",
      "Motorized Shading",
      "Security & Surveillance Integration",
      "Outdoor Entertainment System",
    ],
    systems: ["Crestron NVX", "Lutron RadioRA 3", "Sonance", "Denon AVR-X"],
    highlights: [
      "Single-touch scene control across 24 rooms",
      "AI-driven climate scheduling reduced energy use by 31%",
      "Full outdoor 4K projection with automated pavilion screens",
      "Invisible speaker installation in 8 rooms",
    ],
    stats: [
      { label: "Square Feet", value: "12,000" },
      { label: "Controlled Zones", value: "24" },
      { label: "Devices Integrated", value: "340+" },
      { label: "Energy Reduction", value: "31%" },
    ],
  },
  {
    id: "meridian-boardroom",
    title: "Meridian Corporate HQ",
    category: "corporate",
    location: "Houston, TX",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop",
    tagline: "Boardroom AV that commands attention",
    description:
      "A complete AV transformation for a Fortune 500 headquarters. Four boardrooms, a 400-seat auditorium, and a collaborative executive lounge — all managed through a unified Q-SYS platform with full remote monitoring.",
    scope: [
      "Boardroom AV Design & Installation",
      "Q-SYS DSP Programming",
      "Video Conferencing Integration",
      "Digital Signage Network",
      "Acoustic Treatment Design",
      "Executive Lounge AV",
    ],
    systems: ["Q-SYS Core 510i", "Crestron Flex", "Biamp Tesira", "Shure MXA"],
    highlights: [
      "Zero-touch conference room startup in under 8 seconds",
      "Cisco WebEx & Microsoft Teams native integration",
      "Shure Stem Ceiling array for 98% speech intelligibility",
      "Unified management dashboard for all 4 buildings",
    ],
    stats: [
      { label: "Rooms Integrated", value: "18" },
      { label: "Auditorium Seats", value: "400" },
      { label: "Startup Time", value: "8s" },
      { label: "Buildings", value: "4" },
    ],
  },
  {
    id: "coastal-villa",
    title: "Coastal Villa",
    category: "residential",
    location: "Malibu, CA",
    year: "2023",
    heroImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=85&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&fit=crop",
    tagline: "Where ocean views meet invisible technology",
    description:
      "A 9,500 sq ft coastal residence designed around the principle that technology should never be seen — only felt. Custom RTI programming creates an ecosystem where every interaction feels intuitive and every system disappears into the architecture.",
    scope: [
      "RTI Whole-Home Control",
      "Invisible Speaker Installation",
      "Pool & Outdoor Automation",
      "Custom Mobile App Programming",
      "Cinema Room Design",
    ],
    systems: ["RTI XP-8", "Polk Audio Reserve", "eufy Security", "Lutron"],
    highlights: [
      "Custom-built RTI interfaces with property photography backgrounds",
      "Completely invisible in-wall/ceiling speaker network",
      "Geofencing triggers that prepare the home on arrival",
      "14-foot 8K home cinema with Dolby Atmos 11.2.4",
    ],
    stats: [
      { label: "Square Feet", value: "9,500" },
      { label: "Speaker Zones", value: "16" },
      { label: "Cinema Layout", value: "11.2.4" },
      { label: "Control Points", value: "28" },
    ],
  },
  {
    id: "pinnacle-tower",
    title: "Pinnacle Tower",
    category: "integrated",
    location: "Miami, FL",
    year: "2023",
    heroImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=85&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80&fit=crop",
    tagline: "42 floors of unified intelligence",
    description:
      "The full AV and automation infrastructure for a luxury mixed-use tower. Residential penthouses on floors 35–42, corporate tenants on floors 8–34, and shared amenities throughout — one integrated backbone, tailored experiences for every occupant.",
    scope: [
      "Multi-Tenant AV Infrastructure",
      "Residential Penthouse Automation",
      "Amenity Space AV (Pool, Gym, Lobby)",
      "BMS Integration",
      "Structured Cabling Design",
    ],
    systems: ["Crestron DM NVX", "Q-SYS", "RTI", "Savant"],
    highlights: [
      "Single Crestron backbone serving residential and commercial zones",
      "Per-unit customization without touching core infrastructure",
      "Lobby digital art wall — 48-panel 8K display array",
      "AI-assisted guest experience via Cahoni integration",
    ],
    stats: [
      { label: "Floors", value: "42" },
      { label: "Residential Units", value: "28" },
      { label: "Corporate Suites", value: "64" },
      { label: "Display Panels", value: "48" },
    ],
  },
  {
    id: "arroyo-residence",
    title: "Arroyo Residence",
    category: "residential",
    location: "Scottsdale, AZ",
    year: "2023",
    heroImage:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=85&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80&fit=crop",
    tagline: "Desert modernism, precision engineered",
    description:
      "A minimalist desert home where clean lines demanded that every technology element be invisible. Custom flush-mount control interfaces, recessed AV, and a whole-home energy management system tied into solar and battery storage.",
    scope: [
      "Crestron Home OS 4",
      "Solar & Battery Integration",
      "Motorized Pocket Doors",
      "Outdoor AV (Pool, Terrace, Fire Pit)",
      "EV Charging Management",
    ],
    systems: ["Crestron Home", "Sonance Landscape", "Ring Pro", "eufy"],
    highlights: [
      "Net-zero energy home powered by AI scheduling",
      "Automated exterior privacy shading synced to sun position",
      "Outdoor sound system rated for 120°F desert conditions",
      "Voice control in English and Spanish throughout",
    ],
    stats: [
      { label: "Solar Panels", value: "64" },
      { label: "Outdoor Zones", value: "8" },
      { label: "Energy Offset", value: "103%" },
      { label: "Automation Points", value: "180" },
    ],
  },
  {
    id: "lakewood-pavilion",
    title: "Lakewood Event Center",
    category: "corporate",
    location: "Atlanta, GA",
    year: "2022",
    heroImage:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=85&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80&fit=crop",
    tagline: "Event AV at architectural scale",
    description:
      "A premier event pavilion designed for corporate galas, product launches, and high-profile events. Flexible line-array audio, automated rigging, and a production-grade lighting rig — all controllable by a single operator via iPad.",
    scope: [
      "Line Array System Design",
      "Production Lighting Rig",
      "Automated AV Rigging",
      "Broadcast/Streaming Infrastructure",
      "Green Room & Backstage AV",
    ],
    systems: ["Q-SYS", "d&b audiotechnik", "Chauvet Professional", "Dante"],
    highlights: [
      "d&b SL-Series line arrays covering 1,200-seat capacity",
      "Full broadcast-quality streaming infrastructure",
      "Single-operator iPad control for complete venue AV",
      "Sub-15ms latency on all audio systems",
    ],
    stats: [
      { label: "Seat Capacity", value: "1,200" },
      { label: "Audio Latency", value: "<15ms" },
      { label: "Lighting Fixtures", value: "320" },
      { label: "Stream Outputs", value: "6" },
    ],
  },
];

export const projectCategories = ["all", "residential", "corporate", "integrated"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
