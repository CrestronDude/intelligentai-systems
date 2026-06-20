"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Full-screen backdrop overlay — dims page behind open menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ background: "rgba(6,6,6,0.85)", backdropFilter: "blur(6px)" }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || !isHome || mobileOpen
            ? "nav-scrolled"
            : "bg-transparent"
        )}
      >
        <div className="container-luxury">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="AI Intelligent Services"
            >
              <div className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="transition-transform duration-300 group-hover:scale-105"
                >
                  <rect x="1" y="1" width="30" height="30" stroke="#C9A96E" strokeWidth="1" fill="none" />
                  <rect x="5" y="5" width="22" height="22" stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.4" />
                  <circle cx="16" cy="16" r="5" fill="#C9A96E" opacity="0.9" />
                  <line x1="16" y1="1" x2="16" y2="5" stroke="#C9A96E" strokeWidth="1" />
                  <line x1="16" y1="27" x2="16" y2="31" stroke="#C9A96E" strokeWidth="1" />
                  <line x1="1" y1="16" x2="5" y2="16" stroke="#C9A96E" strokeWidth="1" />
                  <line x1="27" y1="16" x2="31" y2="16" stroke="#C9A96E" strokeWidth="1" />
                </svg>
                <div>
                  <span className="block text-cream font-display text-[1.1rem] font-medium tracking-wide leading-none">
                    AI Intelligent
                  </span>
                  <span className="block text-label text-gold-muted tracking-[0.2em] text-[0.55rem]">
                    SERVICES
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-label transition-colors duration-300 relative group",
                    pathname === link.href
                      ? "text-gold"
                      : "text-cream-muted hover:text-cream"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300",
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/contact"
                className="text-label text-cream-muted hover:text-cream transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="btn-gold-shimmer inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-charcoal text-label hover:bg-gold-light transition-colors duration-300"
              >
                Request Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-cream p-2 relative z-10"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={cn(
                  "absolute inset-0 rounded-sm transition-colors duration-300",
                  mobileOpen ? "bg-charcoal-600" : "bg-transparent"
                )}
              />
              <span className="relative">
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </span>
            </button>
          </nav>
        </div>

        {/* Mobile Slide-Down Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-500 overflow-hidden border-t border-charcoal-600",
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
          style={{ background: "rgba(12,12,12,0.99)" }}
        >
          <div className="container-luxury py-8 flex flex-col gap-1">
            {[...navLinks, { href: "/contact", label: "Contact" }].map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-5 border-b border-charcoal-700 text-display-sm transition-colors duration-300",
                  pathname === link.href ? "text-gold" : "text-cream hover:text-gold"
                )}
                style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ))}

            {/* Phone in mobile menu */}
            <div className="pt-6 pb-2">
              <a
                href="tel:+16472723150"
                className="text-label text-warm-gray hover:text-gold transition-colors duration-300 text-sm"
              >
                647-272-3150
              </a>
            </div>

            <Link
              href="/contact"
              className="btn-gold-shimmer inline-flex items-center justify-center px-8 py-4 bg-gold text-charcoal text-label mt-4 self-start"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
