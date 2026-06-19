import Link from "next/link";

const services = [
  { label: "Home Automation", href: "/services#home-automation" },
  { label: "Lighting & Shading", href: "/services#lighting" },
  { label: "Home Cinema & AV", href: "/services#home-cinema" },
  { label: "Corporate AV", href: "/services#corporate-av" },
  { label: "Boardroom Design", href: "/services#boardroom" },
  { label: "Digital Signage", href: "/services#signage" },
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
  "Q-SYS",
  "Lutron",
  "Denon",
  "Polk Audio",
  "eufy",
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
              Premium smart home automation and corporate AV integration.
              15+ years of world-class programming expertise.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@intelligentai.systems"
                className="text-label text-cream-muted hover:text-gold transition-colors duration-300"
              >
                info@intelligentai.systems
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-label text-gold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-warm-gray hover:text-cream transition-colors duration-300"
                  >
                    {s.label}
                  </Link>
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
              Powered by Crestron, RTI & Q-SYS certified expertise
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
