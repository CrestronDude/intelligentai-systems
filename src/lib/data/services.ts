export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  systems: string[];
  image: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  description: string;
  services: Service[];
}

export const homeAutomationServices: Service[] = [
  {
    id: "whole-home-control",
    title: "Whole-Home Automation",
    subtitle: "Crestron · RTI · Lutron",
    description:
      "A single, elegant interface for every system in your home. Lighting, climate, security, entertainment, and shading — orchestrated flawlessly through Crestron or RTI platforms, programmed by certified specialists.",
    icon: "home",
    features: [
      "Custom Crestron & RTI programming",
      "One-touch scene activation",
      "Geofencing & presence-based automation",
      "Full voice assistant integration",
      "Mobile & touchscreen control",
      "Remote monitoring & management",
    ],
    systems: ["Crestron Home OS 4", "RTI XP Series", "Lutron RadioRA 3", "Amazon Alexa", "Google Home"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&fit=crop",
  },
  {
    id: "distributed-av",
    title: "Distributed Audio & Video",
    subtitle: "Crestron NVX · Q-SYS · Dante",
    description:
      "Whole-property audio and video distribution engineered on Crestron NVX matrix switching and Q-SYS networked audio infrastructure. Every room, every zone — flawlessly synchronized from a single control point. From invisible ceiling speakers in the master suite to outdoor soundscapes by the pool, every listening environment is tuned and calibrated.",
    icon: "speaker",
    features: [
      "Crestron NVX 4K/60 matrix video distribution",
      "Q-SYS networked audio streaming & DSP",
      "Multi-zone audio with independent volume control",
      "Whole-home video to any display in any room",
      "Dante network audio backbone",
      "Zone control via touchscreen, keypad, or mobile",
    ],
    systems: ["Crestron NVX", "Q-SYS Core", "JBL Conceal", "Sonance Invisible", "Dante Protocol", "Bose Professional"],
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80&fit=crop",
  },
  {
    id: "lighting-shading",
    title: "Lighting & Shading Design",
    subtitle: "Lutron · Crestron · Ketra",
    description:
      "Tunable lighting that moves with your circadian rhythm. Motorized shading that adapts to the sun. Together, they create an atmosphere that's effortless and extraordinary.",
    icon: "sun",
    features: [
      "Ketra tunable white & color lighting",
      "Motorized drapery & roller shades",
      "Automated solar-tracking shades",
      "Architectural dimming integration",
      "Circadian rhythm scheduling",
      "Landscape & exterior lighting control",
    ],
    systems: ["Lutron Ketra", "Lutron Sivoia QS", "Crestron Shades", "Hunter Douglas PowerView"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80&fit=crop",
  },
  {
    id: "home-theater",
    title: "Home Cinema & AV",
    subtitle: "Dolby Atmos · 4K/8K · Invisible Audio",
    description:
      "Purpose-built home theaters designed with the same attention to detail as the rest of your home. Invisible speakers. Calibrated acoustics. Extraordinary sound.",
    icon: "film",
    features: [
      "Dolby Atmos up to 11.2.4 layouts",
      "4K/8K laser projection & display",
      "Invisible in-wall/ceiling speaker installation",
      "Acoustic treatment & room analysis",
      "Multi-room audio distribution",
      "Outdoor entertainment systems",
    ],
    systems: ["JBL Conceal", "Sonance", "Polk Audio Reserve", "Denon", "JVC Projectors", "Stewart Filmscreen"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop",
  },
  {
    id: "security-wellness",
    title: "Security & Wellness Integration",
    subtitle: "eufy · Ring · Nest · Alarm.com",
    description:
      "Enterprise-grade security that integrates seamlessly with your automation system. Facial recognition, package detection, and proactive alerts — all accessible from your control interface.",
    icon: "shield",
    features: [
      "AI-powered camera & facial recognition",
      "Integrated alarm & access control",
      "Smart lock & video doorbell integration",
      "Indoor air quality monitoring",
      "Water leak & freeze detection",
      "24/7 remote monitoring capability",
    ],
    systems: ["eufy Security", "Ring Pro", "Alarm.com", "Nest", "Schlage Encode"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80&fit=crop",
  },
];

export const corporateAVServices: Service[] = [
  {
    id: "boardroom-av",
    title: "Boardroom & Conference AV",
    subtitle: "Q-SYS · Crestron · AMX · Shure · Bose",
    description:
      "Meeting rooms that work flawlessly — every time. Certified Q-SYS, Crestron, and AMX programming with Shure ceiling microphone arrays and Bose Professional speaker systems. Seamless Zoom, Teams, and Webex integration. Your leadership team deserves AV that matches their standard.",
    icon: "monitor",
    features: [
      "Q-SYS Core DSP design & programming",
      "Crestron Flex & AMX Enova room control",
      "Shure MXA920 beamforming microphone arrays",
      "Bose Professional ceiling speaker systems",
      "One-button meeting start across all platforms",
      "Remote monitoring & SLA support",
    ],
    systems: ["Q-SYS Core", "Crestron Flex", "AMX Enova", "Shure MXA920", "Bose DS Series", "Microsoft Teams", "Zoom Rooms"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fit=crop",
  },
  {
    id: "distributed-corporate-av",
    title: "Distributed Corporate Audio & Video",
    subtitle: "Crestron NVX · Q-SYS · Dante · Bose",
    description:
      "Enterprise-scale audio and video distribution across multi-floor office campuses. Crestron NVX 4K matrix switching distributes content to any display in the building, while Q-SYS networked audio and Bose Professional speakers deliver consistent, broadcast-quality sound in every zone — from lobby to boardroom to cafeteria.",
    icon: "layout",
    features: [
      "Crestron NVX 4K video matrix distribution",
      "Q-SYS networked audio with Dante backbone",
      "Bose Professional zoned speaker systems",
      "Building-wide digital signage integration",
      "Cafeteria, lobby & common area AV",
      "Centralized administrator control interface",
    ],
    systems: ["Crestron NVX", "Q-SYS Core 510", "AMX Enova", "Bose Professional", "Dante Network", "Samsung Commercial"],
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&q=80&fit=crop",
  },
  {
    id: "digital-signage",
    title: "Digital Signage & Displays",
    subtitle: "Samsung · LG · BrightSign",
    description:
      "Dynamic content delivery at scale. From lobby welcome walls to wayfinding networks and executive dashboard displays, we design and deploy digital signage ecosystems that communicate with authority.",
    icon: "layout",
    features: [
      "Multi-display video wall design",
      "Content management system setup",
      "Interactive kiosk integration",
      "Wayfinding & directory systems",
      "Real-time data dashboard displays",
      "Scheduled content automation",
    ],
    systems: ["Samsung MagicInfo", "BrightSign", "LG SuperSign", "Appspace", "Scala"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&fit=crop",
  },
  {
    id: "auditorium-events",
    title: "Auditorium & Event Spaces",
    subtitle: "Q-SYS · Bose RoomMatch · Dante",
    description:
      "Professional-grade audio and visual systems for auditoriums, training centers, and event venues. Single-operator control over complex productions. Broadcast-quality streaming built in.",
    icon: "mic",
    features: [
      "Bose RoomMatch line array system design",
      "Q-SYS Core audio processing & routing",
      "Dante network audio infrastructure",
      "Live streaming & recording capability",
      "Shure wireless microphone systems",
      "Green room & backstage AV",
    ],
    systems: ["Q-SYS Core 510", "Bose RoomMatch", "Shure QLXD", "Dante", "Epson Laser Projectors"],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80&fit=crop",
  },
  {
    id: "infrastructure-support",
    title: "Infrastructure & Support",
    subtitle: "Structured Cabling · Remote Monitoring · SLA",
    description:
      "The foundation matters. We design and install structured cabling, equipment rack buildouts, and UPS systems that ensure your AV infrastructure is bulletproof — with proactive remote monitoring and fast SLA response.",
    icon: "server",
    features: [
      "Structured cabling design & installation",
      "Equipment rack fabrication",
      "Network & AV infrastructure design",
      "UPS & power conditioning",
      "Remote monitoring platform",
      "Tiered SLA service agreements",
    ],
    systems: ["Panduit", "Middle Atlantic Racks", "Eaton UPS", "Pakedge Networking", "Crestron XiO Cloud"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&fit=crop",
  },
];

export const aiServices = {
  title: "Cahoni AI",
  subtitle: "Quoting Platform for AV Integrators & Trades",
  description:
    "Cahoni AI is a proprietary quoting and project management platform built by AI Intelligent Services — and available as a software development service for AV integrators, trades, and technology contractors. Stop building quotes in spreadsheets. Generate accurate, professional, branded proposals in minutes. Designed by integrators, for integrators.",
  features: [
    "AI-powered scope of work generation from plain-language input",
    "Automated parts & pricing from manufacturer dealer catalogues",
    "Custom-branded proposal PDF with e-signature workflow",
    "Multi-trade project templates — AV, electrical, low voltage",
    "Client approval portal with revision tracking",
    "White-label platform available for integrator firms",
  ],
};
