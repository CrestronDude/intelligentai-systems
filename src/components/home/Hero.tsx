"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ── Animated SVG architectural accent ───────────────────────── */
function ArchitecturalAccent() {
  const pathRef = useRef<SVGPathElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);

    const anim = path.animate(
      [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
      { duration: 2400, delay: 600, fill: "forwards", easing: "cubic-bezier(0.16,1,0.3,1)" }
    );

    circleRef.current?.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: 400, delay: 2800, fill: "forwards" }
    );

    return () => anim.cancel();
  }, []);

  return (
    <div className="absolute bottom-24 right-16 hidden xl:block pointer-events-none" aria-hidden>
      <svg
        viewBox="0 0 280 200"
        width="280"
        height="200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Architectural cross-hairs */}
        <line x1="140" y1="0" x2="140" y2="200" stroke="#C9A96E" strokeWidth="0.3" opacity="0.12" />
        <line x1="0" y1="100" x2="280" y2="100" stroke="#C9A96E" strokeWidth="0.3" opacity="0.12" />

        {/* Main structural path — draws in on load */}
        <path
          ref={pathRef}
          d="M40,160 L40,40 L240,40 L240,160 L180,160 L180,100 L100,100 L100,160 Z"
          stroke="#C9A96E"
          strokeWidth="0.8"
          opacity="0.6"
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        />

        {/* Corner marks */}
        {[[40, 40], [240, 40], [240, 160], [40, 160]].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <line x1={x - 6} y1={y} x2={x + 6} y2={y} stroke="#C9A96E" strokeWidth="0.5" opacity="0.4" />
            <line x1={x} y1={y - 6} x2={x} y2={y + 6} stroke="#C9A96E" strokeWidth="0.5" opacity="0.4" />
          </g>
        ))}

        {/* Measurement notation */}
        <text x="135" y="30" textAnchor="middle" fill="#C9A96E" fontSize="5" opacity="0.35" fontFamily="monospace" letterSpacing="1">
          INTELLIGENTAI.SYSTEMS
        </text>

        {/* Pulse dot */}
        <circle
          ref={circleRef}
          cx="140"
          cy="100"
          r="3"
          fill="#C9A96E"
          opacity="0"
        >
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
        </circle>

        {/* Scale label */}
        <text x="40" y="178" fill="#C9A96E" fontSize="4.5" opacity="0.3" fontFamily="monospace" letterSpacing="1.5">
          1 : 200  ·  FLOOR PLAN
        </text>
      </svg>
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */
export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      {/* Parallax background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 scale-110 will-change-transform"
        style={{ transformOrigin: "center center" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90&fit=crop"
          alt="Luxury smart home living room"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hero-gradient-bottom" />
      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, transparent 40%, rgba(12,12,12,0.4) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-luxury w-full pb-28">
        <div className="max-w-3xl">
          {/* Pre-label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <span className="w-8 h-px bg-gold" />
            <span className="text-label text-gold">
              Premium Smart Home &amp; Corporate AV Integration
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up animation-delay-100 mb-8">
            <span className="text-display-xl text-cream block">
              Where intelligence
            </span>
            <em className="text-display-xl text-gold not-italic block">
              meets elegance
            </em>
          </h1>

          {/* Sub */}
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
                <path d="M2 7H12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-cream/25 text-cream text-label hover:border-gold hover:text-gold transition-all duration-300"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* SVG architectural accent — bottom right */}
      <ArchitecturalAccent />

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-1/2 translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in animation-delay-800">
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-gold/60 to-gold relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-gold animate-fade-in"
            style={{
              height: "30%",
              animation: "scrollDrop 1.8s ease-in-out infinite",
            }}
          />
        </div>
        <span className="text-[0.55rem] text-warm-gray tracking-[0.3em] uppercase">
          Scroll
        </span>
      </div>

      {/* Stats glass card — bottom left */}
      <div className="absolute bottom-0 left-0 z-10 hidden lg:block">
        <div className="glass border-r border-t border-gold/15 px-10 py-5 flex items-center gap-10">
          {[
            { value: "15+", label: "Years Programming" },
            { value: "500+", label: "Projects Delivered" },
            { value: "3", label: "Platform Certifications" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <span className="block font-display text-3xl text-gold font-light leading-none mb-1">
                {s.value}
              </span>
              <span className="text-label text-warm-gray text-[0.55rem] tracking-widest">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
