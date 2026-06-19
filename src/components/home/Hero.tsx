"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrolled * 0.35}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 scale-110 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&fit=crop"
          alt="Luxury smart home interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hero-gradient-bottom" />

      {/* Content */}
      <div className="relative z-10 container-luxury pb-24 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <span className="block w-8 h-px bg-gold" />
            <span className="text-label text-gold">
              Premium Smart Home & Corporate AV
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-display-xl text-cream mb-8 animate-fade-up animation-delay-100">
            Where Intelligence
            <br />
            <em className="text-gold not-italic">Meets Elegance</em>
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-cream-muted leading-relaxed max-w-xl mb-12 font-light animate-fade-up animation-delay-200">
            AI Intelligent Services delivers world-class Crestron, RTI, and
            Q-SYS automation to discerning homeowners and corporations who
            demand the absolute finest.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5 animate-fade-up animation-delay-300">
            <Link
              href="/projects"
              className="btn-gold-shimmer inline-flex items-center gap-3 px-8 py-4 bg-gold text-charcoal text-label hover:bg-gold-light transition-all duration-300"
            >
              Explore Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7H12M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-cream/30 text-cream text-label hover:border-gold hover:text-gold transition-all duration-300"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 animate-fade-in animation-delay-800">
        <span className="text-label text-warm-gray [writing-mode:vertical-rl] tracking-widest text-[0.6rem]">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold" />
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
        <div className="glass border-l border-t border-gold/20 px-10 py-5 flex items-center gap-10">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "500+", label: "Projects Delivered" },
            { value: "100%", label: "Certified Programmers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block font-display text-2xl text-gold font-light">
                {stat.value}
              </span>
              <span className="text-label text-warm-gray text-[0.6rem]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
