import Image from "next/image";
import Link from "next/link";

/**
 * Marine Internet & Satellite Installations section.
 *
 * Promotes professional on-site installation of Starlink Maritime + Bell marina
 * internet, plus a bundled audio-and-connectivity package (cross-sell with JBL
 * Marine Audio). Reusable — dropped on the homepage and the /marine page, and
 * ready to become its own page (e.g. /marine-connectivity) later.
 *
 * Update the constants below to change phone / links / hero image.
 */
const PHONE_DISPLAY = "(647) 272-3150";
const PHONE_HREF = "tel:+16472723150";
const BOOK_HREF = "/contact"; // "Book On-Site Assessment"
const LEARN_MORE_HREF = "/marine"; // "Learn more about our marine services"
// Swap for a boat-with-satellite-dish photo when available (same path/props).
const HERO_IMG =
  "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?w=1400&q=85&fit=crop";

type Card = {
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  points: string[];
  icon: React.ReactNode;
};

const CARDS: Card[] = [
  {
    tag: "Satellite",
    title: "Starlink Maritime",
    subtitle: "Flat High Performance",
    body: "High-speed, low-latency internet at sea and in remote anchorages. We handle the Flat High Performance hardware, marine-grade mounting, power, cabling, and onboard network.",
    points: [
      "Flat High Performance dish",
      "Vibration & marine-grade mounting",
      "Clean power & cable routing",
      "Onboard Wi-Fi network setup",
      "Coverage offshore & at remote anchorages",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20a9 9 0 0 1 9-9M4 20a5 5 0 0 1 5-5M4 20h.01" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 3l8 8-4.5 1.5L11 7l2-4Z" stroke="#C9A96E" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tag: "Business / Marina",
    title: "Bell Marine Internet",
    subtitle: "Business & marina connectivity",
    body: "Bell Business Internet and marina-wide coverage — reliable wired and wireless connectivity for slips, docks, clubhouses, and vessels. Ideal for marinas and dockside operations.",
    points: [
      "Bell Business Internet",
      "Marina-wide Wi-Fi coverage",
      "Dock & slip connectivity",
      "Wired + wireless integration",
      "Failover / redundancy options",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="18.5" r="1.4" fill="#C9A96E" />
      </svg>
    ),
  },
  {
    tag: "Bundle",
    title: "Audio + Connectivity",
    subtitle: "With JBL Marine Audio",
    body: "Combine Starlink or Bell connectivity with premium JBL Marine Audio for one clean, professionally installed system — stream, navigate, and entertain, all integrated.",
    points: [
      "Connectivity + JBL Marine Audio",
      "Single clean, integrated install",
      "Shared cabling & power planning",
      "One point of contact & support",
      "Bundled package pricing",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="#C9A96E" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M4 7.5 12 12l8-4.5M12 12v9" stroke="#C9A96E" strokeWidth="1.2" strokeLinejoin="round" opacity="0.7" />
      </svg>
    ),
  },
];

const INSTALL_POINTS = [
  "Marine-grade mounting & waterproofing",
  "Clean, protected, corrosion-resistant cabling",
  "Correct power, grounding & network config",
  "Integration with your existing boat systems",
];

export default function MarineConnectivitySection() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      aria-labelledby="marine-connectivity-heading"
      style={{ background: "linear-gradient(160deg, #0a1622 0%, #0b1e33 50%, #0a1420 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(80% 55% at 15% 0%, rgba(58,110,165,0.20), transparent 60%)" }} />

      <div className="container-luxury relative z-10">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
          <div data-reveal-stagger>
            <span className="inline-flex items-center gap-2 text-label text-gold text-[0.6rem] border border-gold/30 px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Marine Connectivity · Starlink & Bell
            </span>
            <h2 id="marine-connectivity-heading" className="text-display-md text-cream mb-5 leading-tight">
              Marine Internet &amp; Satellite Installations
            </h2>
            <p className="text-base text-cream-muted leading-relaxed max-w-xl mb-8">
              Reliable high-speed internet on the water — professionally assessed,
              installed, and integrated with your onboard systems.{" "}
              <strong className="text-cream font-normal">We come to you</strong>, at
              your boat or marina, anywhere in Ontario.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href={BOOK_HREF} className="btn-gold-shimmer inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-label hover:bg-gold-light transition-colors duration-300">
                Book On-Site Assessment
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <a href={PHONE_HREF} className="inline-flex items-center gap-3 px-8 py-4 border border-cream/25 text-cream text-label hover:border-gold hover:text-gold transition-all duration-300">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-gold/20 shadow-2xl" data-reveal="right" data-reveal-delay={120}>
            <Image src={HERO_IMG} alt="Boat on the water — marine internet and satellite connectivity" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 45vw" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,20,32,0.55), transparent 55%)" }} />
          </div>
        </div>

        {/* Option cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              data-reveal
              data-reveal-delay={i * 110}
              className="glass-light border border-charcoal-500 hover:border-gold/30 transition-colors duration-500 p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="w-11 h-11 border border-gold/25 flex items-center justify-center">{c.icon}</span>
                <span className="text-[0.5rem] text-gold border border-gold/30 px-2.5 py-1 text-label tracking-widest">{c.tag}</span>
              </div>
              <h3 className="font-display text-2xl text-cream font-light leading-none mb-1">{c.title}</h3>
              <p className="text-label text-gold text-[0.6rem] mb-4">{c.subtitle}</p>
              <p className="text-sm text-warm-gray leading-relaxed mb-6">{c.body}</p>
              <ul className="flex flex-col gap-2.5 mt-auto">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-cream-muted">
                    <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Professional install vs DIY */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center border-t border-cream/10 pt-10" data-reveal>
          <div>
            <span className="text-label text-gold text-[0.6rem] block mb-4">Professional Installation — Not DIY</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 max-w-2xl">
              {INSTALL_POINTS.map((p) => (
                <div key={p} className="flex items-start gap-2.5 text-sm text-cream-muted">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true"><path d="M5 12.5l4 4L19 7" stroke="#C9A96E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <Link href={LEARN_MORE_HREF} className="inline-flex items-center gap-2 text-label text-cream-muted hover:text-gold transition-colors duration-300 text-[0.65rem] group">
              Learn more about our marine services
              <span className="w-6 h-px bg-warm-gray group-hover:bg-gold group-hover:w-10 transition-all duration-300" />
            </Link>
            <span className="text-[0.6rem] text-warm-gray tracking-widest uppercase">We travel to boats &amp; marinas across Ontario</span>
          </div>
        </div>
      </div>
    </section>
  );
}
