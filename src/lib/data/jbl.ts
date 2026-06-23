// JBL CONCEAL invisible loudspeakers + DA Series distribution amplifiers.
// AI Intelligent Services is an authorized JBL dealer.
// Specs sourced from JBL official product pages (ca.jbl.com / jbl.com).
// Product images stored locally in /public/images/jbl/.

export interface SpeakerSpec {
  label: string;
  value: string;
}

export interface ConcealSpeaker {
  id: string;
  model: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  bestFor: string;
  specs: SpeakerSpec[];
  flagship?: boolean;
}

// The four CONCEAL models the user carries: C62, C83, C86, C82W.
export const concealSpeakers: ConcealSpeaker[] = [
  {
    id: "c62",
    model: "C62",
    name: "Conceal C62",
    tagline: "6.5-inch 2-Element Invisible Loudspeaker",
    description:
      "The most versatile model in the series. A compact 2-way design built around a patented compression-molded baffle and paintable Fidelity Glass™ skin — disappearing completely into wall or ceiling while delivering full-range, room-filling sound.",
    image: "/images/jbl/c62.png",
    bestFor: "Whole-home audio, surrounds & secondary rooms",
    specs: [
      { label: "Configuration", value: "2-way" },
      { label: "Drivers", value: '6.5" woofer · 1.18" HF transducer' },
      { label: "Power Handling", value: "50–100W RMS" },
      { label: "Impedance", value: "4 Ω" },
      { label: "Sensitivity", value: "83 dB (1W/1m)" },
      { label: "Frequency Response", value: "45 Hz – 20 kHz (−6 dB)" },
    ],
  },
  {
    id: "c83",
    model: "C83",
    name: "Conceal C83",
    tagline: "8-inch 3-Element Invisible Loudspeaker",
    description:
      "A high-performance 3-element design pairing an 8-inch woofer with dedicated midrange and high-frequency transducers. The added driver complement brings greater output and refinement for larger spaces and reference listening — entirely out of sight.",
    image: "/images/jbl/c83.png",
    bestFor: "Larger rooms, great rooms & reference music",
    specs: [
      { label: "Configuration", value: "3-element" },
      { label: "Drivers", value: '8" woofer · 1.2" mid · 1" HF' },
      { label: "Power Handling", value: "50–160W RMS" },
      { label: "Impedance", value: "4 Ω" },
      { label: "Sensitivity", value: "84 dB (1W/1m)" },
      { label: "Frequency Response", value: "45 Hz – 20 kHz (−6 dB)" },
    ],
  },
  {
    id: "c86",
    model: "C86",
    name: "Conceal C86",
    tagline: "Flagship 3-Way Dual-Panel Loudspeaker",
    description:
      "The flagship of the series. A 3-way, dual-panel system with a separate low-frequency panel and a five-driver mid/high panel — dual 8-inch woofers, four midrange transducers and dual tweeters. Reference-grade, full-bandwidth performance for the most demanding installations, completely invisible.",
    image: "/images/jbl/c86.png",
    bestFor: "Critical listening, LCR home cinema & estate great rooms",
    flagship: true,
    specs: [
      { label: "Configuration", value: "3-way · dual panel" },
      { label: "Drivers", value: 'Dual 8" woofers · 4× mid · dual 1" HF' },
      { label: "Power Handling", value: "50–200W RMS" },
      { label: "Impedance", value: "4 Ω" },
      { label: "Sensitivity", value: "84 dB (1W/1m)" },
      { label: "Frequency Response", value: "45 Hz – 20 kHz (−6 dB)" },
    ],
  },
  {
    id: "c82w",
    model: "C82W",
    name: "Conceal C82W",
    tagline: "Dual-Panel Invisible Subwoofer System",
    description:
      "Invisible low-frequency reinforcement. A two-panel subwoofer system with a pair of acoustically coupled 8-inch drivers per panel, delivering deep, tactile bass that you feel rather than see — the foundation for full-range invisible audio and home cinema.",
    image: "/images/jbl/c82w.png",
    bestFor: "Invisible bass reinforcement & home cinema foundations",
    specs: [
      { label: "Configuration", value: "Dual-panel subwoofer" },
      { label: "Drivers", value: 'Paired 8" drivers per panel' },
      { label: "Power Handling", value: "60–100W RMS per panel" },
      { label: "Impedance", value: "4 Ω / 16 Ω selectable" },
      { label: "Sensitivity", value: "86 dB (1W/1m)" },
      { label: "Frequency Response", value: "45 Hz – 20 kHz (−6 dB)" },
    ],
  },
];

export interface Amplifier {
  id: string;
  model: string;
  name: string;
  channels: string;
  zones: string;
  description: string;
}

export const daSeries = {
  image: "/images/jbl/da850.jpg",
  intro:
    "Engineered to drive JBL's architectural loudspeakers throughout the home, the DA Series delivers high-resolution, multi-zone amplification in a compact 1U chassis. Each Class D channel is bridgeable for higher-power demands, and zones can run independent sources or share a single source across the whole system — with global audio in/out to expand across multiple amplifiers.",
  sharedSpecs: [
    "50W per channel into 8 Ω · 110W into 4 Ω",
    "185W bridged mono into 8 Ω",
    "Class D amplification · 1U rack chassis",
    "8× RCA inputs · global audio in/out bus",
    "Power modes: 12V trigger · audio-sensing · always-on",
    "Overcurrent & thermal protection",
  ],
  models: [
    {
      id: "da850",
      model: "DA850",
      name: "JBL DA850",
      channels: "8 channels",
      zones: "4 zones",
      description:
        "Eight channels of bridgeable Class D power across four independent zones — ideal for single-residence whole-home audio.",
    },
    {
      id: "da1650",
      model: "DA1650",
      name: "JBL DA1650",
      channels: "16 channels",
      zones: "8 zones",
      description:
        "Sixteen channels across eight zones for larger estates and multi-area installations, in the same compact 1U footprint.",
    },
  ] as Amplifier[],
};
