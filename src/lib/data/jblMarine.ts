// JBL Marine Audio catalog — AI Intelligent Services (authorized dealer).
// Transcribed from JBL_Marine_Website_Catalog_AI_Intelligent_Services.xlsx.
// Prices are MSRP/MAP in CAD. Product photos go in /public/images/marine/ using
// the `image` filename; the catalog card falls back to a branded placeholder
// until the photo exists.

export type MarineCategory = "Amplifier" | "Subwoofer" | "Speaker";

export interface MarineProduct {
  category: MarineCategory;
  name: string;
  model: string;
  price: number;
  spec: string; // size / type
  description: string;
  bestFor: string;
  image: string; // /images/marine/<file>
}

// Display groups (Speaker includes tower speakers).
export const MARINE_GROUPS: { id: MarineCategory; label: string }[] = [
  { id: "Speaker", label: "Speakers & Tower" },
  { id: "Subwoofer", label: "Subwoofers" },
  { id: "Amplifier", label: "Amplifiers" },
];

const P = (
  category: MarineCategory,
  name: string,
  model: string,
  price: number,
  spec: string,
  description: string,
  bestFor: string
): MarineProduct => ({
  category,
  name,
  model,
  price,
  spec,
  description,
  bestFor,
  image: `/images/marine/${model}.jpg`,
});

export const marineProducts: MarineProduct[] = [
  // ── Amplifiers ──────────────────────────────────────────────
  P("Amplifier", "JBL Marine A600", "JBLMA600AM", 549.99, "Mono", "600W RMS marine subwoofer amplifier. Built tough for marine environments.", "Subwoofer amplification"),
  P("Amplifier", "JBL Marine A1000", "JBLMA1000AM", 899.99, "Mono", "1000W RMS high-power marine subwoofer amplifier. Serious power for large systems.", "High-power subwoofers"),
  P("Amplifier", "JBL Marine A1504", "JBLMA1504AM", 1149.99, "4-Channel", "125W × 4 full-range marine amplifier. Excellent for multi-speaker systems.", "Full speaker systems"),
  P("Amplifier", "JBL Marine A754", "JBLMA754AM", 549.99, "4-Channel", "75W × 4 full-range marine amplifier. Reliable performance in harsh conditions.", "Mid-size speaker systems"),
  P("Amplifier", "JBL Marine A5055", "JBLMA5055AM", 799.99, "5-Channel", "50W × 4 + 500W × 1. Versatile 5-channel solution for complete systems.", "Complete audio systems"),
  P("Amplifier", "JBL Marine A758", "JBLMA758AM", 999.99, "4-Channel", "75W × 4 premium full-range marine amplifier. High-quality sound reproduction.", "Premium speaker setups"),
  P("Amplifier", "JBL Apex PA1254", "PA1254", 599.99, "4-Channel", "Compact 75W × 4 Class D marine amplifier. Space-saving high performance.", "Space-conscious installs"),
  P("Amplifier", "JBL Apex PA454", "PA454", 399.99, "4-Channel", "Compact 45W × 4 Class D marine amplifier. A great entry point for quality sound.", "Smaller systems / budget"),

  // ── Subwoofers ──────────────────────────────────────────────
  P("Subwoofer", "JBL Stage Marine 10\" — White", "JBLMARSUBST10WHTAM", 379.99, "10\"", "Reliable marine subwoofer in a classic white finish. A great bass foundation.", "Entry-level marine bass"),
  P("Subwoofer", "JBL Stage Marine 10\" — Gray", "JBLMARSUBST10GRYAM", 379.99, "10\"", "Reliable marine subwoofer in a gray finish. Built for the water.", "Entry-level marine bass"),
  P("Subwoofer", "JBL Club Marine 10", "JBLMARSUBCB102AM", 429.99, "10\"", "Mid-tier marine subwoofer with strong output and durability.", "Mid-level bass performance"),
  P("Subwoofer", "JBL Club Marine 12", "JBLMARSUBCB122AM", 499.99, "12\"", "Larger Club Marine subwoofer for deeper, more powerful bass.", "Stronger bass requirement"),
  P("Subwoofer", "JBL Stadium Marine M1000", "STADIUMMW1000AM", 649.99, "10\"", "Premium Stadium Marine subwoofer. High-end performance and build quality.", "Premium / high-output systems"),
  P("Subwoofer", "JBL Stadium Marine 102", "JBLMARSUBSD102GAM", 649.99, "10\"", "Premium gray Stadium Marine subwoofer. Top-tier marine bass.", "Premium installations"),

  // ── Speakers & Tower ────────────────────────────────────────
  P("Speaker", "JBL Stage Marine 6.5\" — White", "JBLMARSPKST6WHTAM", 299.99, "6.5\" Coaxial", "Entry-level marine coaxial speaker. Reliable sound in a compact package.", "Smaller boats / budget builds"),
  P("Speaker", "JBL Stage Marine 6.5\" — Gray", "JBLMARSPKST6GRYAM", 299.99, "6.5\" Coaxial", "Entry-level marine coaxial speaker in gray. Solid everyday performance.", "Smaller boats / budget builds"),
  P("Speaker", "JBL Stage Marine 8\" — White", "JBLMARSPKST8WHTAM", 429.99, "8\" Coaxial", "Larger entry-level marine speaker for better sound coverage.", "Medium boats, more volume"),
  P("Speaker", "JBL Stage Marine 8\" — Gray", "JBLMARSPKST8GRYAM", 429.99, "8\" Coaxial", "Larger entry-level marine speaker in a gray finish.", "Medium boats, more volume"),
  P("Speaker", "JBL Club Marine 6.5\"", "JBLMARSPKCB62AM", 429.99, "6.5\" 2-Way", "Mid-tier marine speaker with improved clarity and output.", "Balanced performance upgrades"),
  P("Speaker", "JBL Club Marine 8\"", "JBLMARSPKCB82AM", 499.99, "8\" 2-Way", "Mid-tier 8-inch marine speaker. Stronger sound for larger areas.", "Better sound on bigger boats"),
  P("Speaker", "JBL Club Marine MS8LB — Black", "MS8LB", 429.99, "8\" 2-Way + RGB", "Club Marine speaker with RGB lighting. A modern look with great sound.", "Style + performance builds"),
  P("Speaker", "JBL Club Marine MS8LW — White", "MS8LW", 479.99, "8\" 2-Way + RGB", "White version of the popular RGB Club Marine speaker.", "Style + performance builds"),
  P("Speaker", "JBL Stadium Marine M8030", "STADIUMMW8030AM", 729.99, "8\" 3-Way", "Premium 3-way marine speaker. Exceptional clarity and detail.", "High-end listening experience"),
  P("Speaker", "JBL Stadium Marine M6520", "STADIUMMW6520AM", 549.99, "6.5\" 2-Way", "Premium Stadium Marine speaker. Refined sound quality.", "Premium compact systems"),
  P("Speaker", "JBL Stadium Marine 62 — Gray", "JBLMARSPKSD62GAM", 549.99, "6.5\" + RGB", "Premium 6.5\" speaker with RGB lighting. Top-tier build and features.", "Premium + visual appeal"),
  P("Speaker", "JBL Stadium Marine 82M — Gray", "JBLMARSPKSD82MGAM", 729.99, "8\" 3-Way + RGB", "Flagship 8\" 3-way with RGB. Best-in-class marine speaker.", "Ultimate marine audio systems"),
  P("Speaker", "JBL Tower × Marine MT8HLB", "MT8HLB", 1749.99, "8\" Tower Speaker", "High-end marine tower / pod speaker. Designed for T-tops and arches.", "Tower speaker installations"),
];

export const priceLabel = (n: number) =>
  `$${n.toLocaleString("en-CA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
