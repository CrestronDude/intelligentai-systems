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
      "Purpose-built home theaters and distributed audio systems designed with the same attention to detail as the rest of your home. Invisible speakers. Calibrated acoustics. Extraordinary sound.",
    icon: "film",
    features: [
      "Dolby Atmos up to 11.2.4 layouts",
      "4K/8K laser projection & display",
      "Invisible in-wall/ceiling speaker installation",
      "Acoustic treatment & room analysis",
      "Multi-room audio distribution",
      "Outdoor entertainment systems",
    ],
    systems: ["Sonance", "Polk Audio Reserve", "Denon", "JVC Projectors", "Stewart Filmscreen"],
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80&fit=crop",
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop",
  },
];

export const corporateAVServices: Service[] = [
  {
    id: "boardroom-av",
    title: "Boardroom & Conference AV",
    subtitle: "Q-SYS · Crestron Flex · Shure",
    description:
      "Meeting rooms that work flawlessly — every time. Certified Q-SYS and Crestron programming with seamless Zoom, Teams, and Webex integration. Your leadership team deserves AV that matches their standard.",
    icon: "monitor",
    features: [
      "Q-SYS DSP design & programming",
      "Crestron Flex & Zoom Room certification",
      "Shure Stem & MXA microphone arrays",
      "Automated room scheduling integration",
      "One-button meeting start",
      "Remote monitoring & SLA support",
    ],
    systems: ["Q-SYS Core", "Crestron Flex", "Shure MXA920", "Microsoft Teams", "Cisco Webex"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fit=crop",
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
    subtitle: "Q-SYS · d&b · Dante",
    description:
      "Professional-grade audio and visual systems for auditoriums, training centers, and event venues. Single-operator control over complex productions. Broadcast-quality streaming built in.",
    icon: "mic",
    features: [
      "Line array audio system design",
      "Dante network audio infrastructure",
      "Production lighting design",
      "Live streaming & recording capability",
      "Automated rigging integration",
      "Green room & backstage AV",
    ],
    systems: ["Q-SYS", "d&b audiotechnik", "Biamp Tesira", "Chauvet Professional", "Dante"],
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
    systems: ["Panduit", "Middle Atlantic Racks", "Eaton UPS", "Pakedge Networking", "Aurora"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&fit=crop",
  },
];

export const aiServices = {
  title: "AI-Enhanced Integration",
  subtitle: "Cahoni AI · Predictive Automation · Intelligent Analytics",
  description:
    "We integrate cutting-edge AI tools into every project. From Cahoni AI for natural language home control, to predictive occupancy analytics and AI-assisted programming diagnostics — this is what separates forward-thinking integration from ordinary AV work.",
  features: [
    "Cahoni AI natural language control interface",
    "Predictive energy optimization",
    "Occupancy-based automation learning",
    "AI-assisted fault detection & diagnostics",
    "Intelligent quote generation",
    "Behavioral pattern learning",
  ],
};
