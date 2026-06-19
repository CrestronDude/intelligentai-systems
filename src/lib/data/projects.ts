export interface Project {
  id: string;
  title: string;
  category: "residential" | "corporate" | "integrated";
  location: string;
  client: string;
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
  {
    id: "bridal-path",
    title: "The Bridal Path Estate",
    category: "residential",
    location: "Toronto, ON",
    client: "Ron Kimel",
    address: "87 The Bridal Path, Toronto",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=85&fit=crop",
    exteriorImage:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=85&fit=crop",
    interiorImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=85&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85&fit=crop",
    ],
    tagline: "17,000 sq ft of seamless Canadian excellence",
    description:
      "A landmark whole-home automation project at one of Canada's most prestigious addresses — 87 The Bridal Path. Every system in this 17,000 sq ft estate was integrated into a single Crestron NVX backbone, programmed with bespoke scenes, custom touchscreen interfaces, and AI-assisted scheduling. This project represents the pinnacle of residential integration in Canada.",
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
    id: "crescent-road",
    title: "Crescent Road Residence",
    category: "residential",
    location: "Rosedale, Toronto, ON",
    client: "Wes Hall",
    address: "162 Crescent Rd, Toronto",
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
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&fit=crop",
    ],
    tagline: "Rosedale heritage reimagined with invisible technology",
    description:
      "A masterful integration project at 162 Crescent Road — a landmark Rosedale estate with deep architectural heritage. The challenge: deliver world-class smart home capability without disturbing a single original architectural detail. RTI whole-home control, invisible speaker installation, and a corporate-grade home office AV suite were woven into the fabric of the building with zero visual compromise.",
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
];

export const projectCategories = ["all", "residential", "corporate", "integrated"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
