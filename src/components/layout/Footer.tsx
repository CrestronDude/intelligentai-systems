import Link from "next/link";

const services = [
  { label: "Whole-Home Automation", href: "/services#home-automation" },
  { label: "Distributed Audio & Video", href: "/services#distributed-av" },
  { label: "Lighting & Shading", href: "/services#lighting-shading" },
  { label: "Home Cinema & AV", href: "/services#home-theater" },
  { label: "Invisible Audio — JBL CONCEAL", href: "/invisible-audio" },
  { label: "Outdoor Living", href: "/outdoor" },
  { label: "Corporate AV Integration", href: "/services#corporate-av" },
  { label: "Boardroom Design", href: "/services#boardroom-av" },
  { label: "Cahoni AI — Quoting Platform", href: "https://intelligentai.services/", external: true },
];

const company = [
  { label: "Our Work", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Request Consultation", href: "/contact" },
];

const brands = [
  "Crestron",
  "RTI",
  "AMX",
  "Q-SYS",
  "Lutron",
  "Shure",
  "Bose Professional",
  "JBL",
  "Sonance",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 border-t border-charcoal-500">
      {/* Top Section */}
      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="block font-display text-2xl text-cream font-light">
                AI Intelligent
              </span>
              <span className="text-label text-gold tracking-[0.2em]">SERVICES</span>
            </div>
            <p className="text-warm-gray text-sm leading-relaxed mb-6 max-w-xs">
              Premium smart home automation and corporate AV integration serving
              Toronto and across Canada. 15+ years of certified programming expertise.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:admin@intelligentai.systems"
                className="text-label text-cream-muted hover:text-gold transition-colors duration-300 text-sm"
              >
                admin@intelligentai.systems
              </a>
              <a
                href="tel:+16472723150"
                className="text-label text-cream-muted hover:text-gold transition-colors duration-300 text-sm"
              >
                647-272-3150
              </a>
              <span className="text-[0.65rem] text-warm-gray">
                Greater Toronto Area · Canada-Wide
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-label text-gold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  {s.external ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#7FBBCF] hover:text-[#A8D4E2] transition-colors duration-200 hover:underline underline-offset-2"
                    >
                      {s.label}
                    </a>
                  ) : (
                    <Link
                      href={s.href}
                      className="text-sm text-warm-gray hover:text-cream transition-colors duration-300"
                    >
                      {s.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-label text-gold mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-warm-gray hover:text-cream transition-colors duration-300"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Cahoni AI callout */}
            <a
              href="https://intelligentai.services/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border border-gold/20 hover:border-[#7FBBCF]/40 p-4 block transition-colors duration-300 group"
            >
              <span className="text-label text-gold text-[0.6rem] block mb-1">Software Platform</span>
              <span className="text-sm text-[#7FBBCF] group-hover:text-[#A8D4E2] transition-colors duration-200 block mb-1">
                Cahoni AI ↗
              </span>
              <span className="text-[0.7rem] text-warm-gray">
                Quoting & proposal platform for AV integrators and trades.
              </span>
            </a>
          </div>

          {/* Partners Column */}
          <div>
            <h4 className="text-label text-gold mb-6">Technology Partners</h4>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-xs text-warm-gray border border-charcoal-500 px-3 py-1.5 hover:border-gold hover:text-cream-muted transition-all duration-300"
                >
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-gold-shimmer inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal text-label hover:bg-gold-light transition-colors duration-300 text-xs"
              >
                Start Your Project
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider-gold opacity-30" />

      {/* Bottom Bar */}
      <div className="container-luxury py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-gray">
            © {new Date().getFullYear()} AI Intelligent Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-charcoal-500">
              intelligentai.systems
            </span>
            <span className="text-charcoal-500">·</span>
            <span className="text-xs text-warm-gray">
              Crestron · Q-SYS · AMX · Bose certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
