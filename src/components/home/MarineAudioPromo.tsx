import Image from "next/image";
import Link from "next/link";

/**
 * JBL Marine Audio promotional section.
 *
 * The poster (public/images/jbl-marine-audio.jpg) is the hero visual; the web
 * copy + interactive CTAs sit beside it (so we don't duplicate the text baked
 * into the poster). Marine-navy + gold to match the luxury marine aesthetic
 * while staying consistent with the site.
 *
 * Easy to update later — edit the constants below.
 */
const PHONE_DISPLAY = "(647) 272-3150";
const PHONE_HREF = "tel:+16472723150";
const BOOK_HREF = "/contact"; // "Book On-Site Assessment"
const LEARN_MORE_HREF = "/services#home-cinema"; // "Learn more" — point anywhere later
const POSTER_SRC = "/images/jbl-marine-audio.jpg";

const BENEFITS = [
  "Premium JBL Marine speakers & amplifiers",
  "Authorized JBL Marine dealer",
  "On-site assessment & custom system design",
  "Expert, professional installation",
  "Serving Ontario — we travel to your boat",
];

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="#C9A96E" strokeWidth="1" opacity="0.5" />
      <path d="M7 12.5l3.2 3.2L17 9" stroke="#C9A96E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MarineAudioPromo() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      aria-labelledby="marine-audio-heading"
      style={{
        background:
          "linear-gradient(160deg, #0a1420 0%, #0b1c2e 45%, #0a1622 100%)",
      }}
    >
      {/* subtle marine glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(90% 60% at 80% 0%, rgba(58,110,165,0.18), transparent 60%)" }}
      />

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,42%)_1fr] gap-12 lg:gap-16 items-center">
          {/* Poster */}
          <div className="order-1" data-reveal="left">
            <div className="relative border border-gold/25 shadow-2xl">
              <Image
                src={POSTER_SRC}
                alt="JBL Marine Audio Systems — professional on-site assessment and installation by AI Intelligent Services"
                width={832}
                height={1248}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 90vw, 40vw"
                priority={false}
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2" data-reveal="right" data-reveal-delay={120}>
            {/* Trust eyebrow */}
            <span className="inline-flex items-center gap-2 text-label text-gold text-[0.6rem] border border-gold/30 px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Authorized JBL Marine Installer
            </span>

            <h2 id="marine-audio-heading" className="text-display-md text-cream mb-3 leading-tight">
              JBL Marine Audio Systems
            </h2>
            <p className="font-display text-2xl md:text-3xl text-gold font-light mb-6">
              Professional On-Site Installation
            </p>

            <p className="text-base text-cream-muted leading-relaxed max-w-xl mb-8">
              <strong className="text-cream font-normal">We come to you.</strong>{" "}
              On-site assessment, custom system design, and expert installation —
              right at your boat, anywhere in Ontario. Crystal-clear, marine-grade
              sound, professionally installed.
            </p>

            {/* Benefits */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-9 max-w-xl">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-cream-muted">
                  <Check />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <Link
                href={BOOK_HREF}
                className="btn-gold-shimmer inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-label hover:bg-gold-light transition-colors duration-300"
              >
                Book On-Site Assessment
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 px-8 py-4 border border-cream/25 text-cream text-label hover:border-gold hover:text-gold transition-all duration-300"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 5c0 8.3 6.7 15 15 15 .9 0 1.6-.7 1.6-1.6v-2.5c0-.8-.6-1.4-1.3-1.5l-3-.4c-.6-.1-1.2.2-1.5.7l-.8 1.4a11.6 11.6 0 0 1-5.3-5.3l1.4-.8c.5-.3.8-.9.7-1.5l-.4-3C9.5 4.6 8.9 4 8.1 4H5.6C4.7 4 4 4.7 4 5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>

            <Link
              href={LEARN_MORE_HREF}
              className="inline-flex items-center gap-2 text-label text-cream-muted hover:text-gold transition-colors duration-300 text-[0.65rem] group"
            >
              Learn more about our marine audio services
              <span className="w-6 h-px bg-warm-gray group-hover:bg-gold group-hover:w-10 transition-all duration-300" />
            </Link>

            {/* Trust footer */}
            <div className="mt-8 pt-6 border-t border-cream/10 flex flex-wrap gap-x-6 gap-y-2 text-[0.6rem] text-warm-gray tracking-widest uppercase">
              <span>Authorized Dealer</span>
              <span>·</span>
              <span>Serving Ontario</span>
              <span>·</span>
              <span>We Travel to Your Boat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
