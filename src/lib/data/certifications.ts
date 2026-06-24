// Steven Sutherland's verified certifications, transcribed from the original
// certificates. Grouped by discipline for the About page credentials section.

export interface CertItem {
  name: string;
  issuer: string;
}

export interface CertGroup {
  category: string;
  items: CertItem[];
}

export const certificationGroups: CertGroup[] = [
  {
    category: "Control & Automation",
    items: [
      { name: "Core System Programming (CTI-P201)", issuer: "Crestron" },
      { name: "Essentials of Crestron Programming", issuer: "Crestron" },
      { name: "Intro to Crestron Programming", issuer: "Crestron" },
      { name: "Master Programmer", issuer: "RTI" },
      { name: "Technician — Networked AV", issuer: "AMX" },
      { name: "Certified XTP Systems Technician", issuer: "Extron" },
    ],
  },
  {
    category: "Lighting & Shading",
    items: [
      { name: "Lighting Control Systems Programming", issuer: "Crestron" },
      { name: "RadioRA 3 Control", issuer: "Lutron" },
      { name: "Ketra Tunable Lighting", issuer: "Lutron" },
      { name: "Authorized Dealer & Programmer", issuer: "Lutron" },
    ],
  },
  {
    category: "Audio, Video & DSP",
    items: [
      { name: "Level Zero · Level 1 · Control 101 · Video 101", issuer: "Q-SYS" },
      { name: "VisionSuite ACPR Commissioning — Level 1", issuer: "Q-SYS" },
      { name: "VisionSuite Seervision Commissioning — Level 1", issuer: "Q-SYS" },
      { name: "Certified Sales Professional", issuer: "Q-SYS" },
      { name: "TesiraFORTÉ", issuer: "Biamp" },
      { name: "Designing Pro AV Systems for 4K", issuer: "Kramer" },
    ],
  },
  {
    category: "Conferencing & Unified Comms",
    items: [
      {
        name: "365 Certified: Collaboration Communications Systems Engineer Associate",
        issuer: "Microsoft",
      },
      { name: "Configuring Zoom Rooms 2.0", issuer: "Zoom" },
      { name: "Meeting Admin 2.0", issuer: "Zoom" },
      { name: "Events 2.0", issuer: "Zoom" },
    ],
  },
  {
    category: "Networking & Infrastructure",
    items: [
      { name: "Networking Technology", issuer: "InfoComm / AVIXA" },
      { name: "Certified Fiber Optic Technician (CFOT)", issuer: "FOA" },
    ],
  },
  {
    category: "Media & AI",
    items: [
      { name: "Digital Content & Media Expert (IC24-TD12)", issuer: "AVIXA" },
      { name: "Introduction to Artificial Intelligence (AI)", issuer: "IBM" },
      { name: "Getting Started with AI using IBM Watson", issuer: "IBM" },
      { name: "Building AI-Powered Chatbots", issuer: "IBM" },
    ],
  },
];

// Affiliations & professional background (not platform certifications).
export const affiliations = [
  "Microsoft 365 Certified Associate",
  "AVIXA / InfoComm",
  "CEDIA Member",
  "Telus Canada — Design Engineer",
  "Nestlé Canada — Microsoft Teams Engineer",
];
