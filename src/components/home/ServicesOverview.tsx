"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCard {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  index: number;
}

const cards: ServiceCard[] = [
  {
    title: "Smart Home Automation",
    subtitle: "Crestron · RTI · Lutron",
    description:
      "Every light, shade, climate zone, camera, and entertainment system under one elegant interface — custom-programmed to your lifestyle.",
    href: "/services#home-automation",
    index: 0,
  },
  {
    title: "Corporate AV Integration",
    subtitle: "Q-SYS · Crestron Flex · Shure",
    description:
      "Boardrooms, auditoriums, and collaboration spaces that command attention — designed, programmed, and maintained to the highest standard.",
    href: "/services#corporate-av",
    index: 1,
  },
  {
    title: "Home Cinema & Audio",
    subtitle: "Dolby Atmos · 4K/8K · Invisible Speaker",
    description:
      "Purpose-built home theaters and whole-home audio systems. Invisible speakers, calibrated acoustics, and extraordinary sound.",
    href: "/services#home-cinema",
    index: 2,
  },
  {
    title: "AI-Enhanced Control",
    subtitle: "Cahoni AI · Predictive Automation",
    description:
      "We integrate next-generation AI tools that learn your preferences, optimize energy use, and make your systems truly intelligent.",
    href: "/services#ai-tools",
    index: 3,
  },
];

function TiltCard({ card }: { card: ServiceCard }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = -((e.clientY - rect.top) / rect.height - 0.5) * 12;
      el.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) translateZ(0)`;
    };

    const handleLeave = () => {
      el.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)";
      el.style.transition = "transform 0.6s cubic-bezier(0.16,1,0.3,1)";
    };

    const handleEnter = () => {
      el.style.transition = "transform 0.1s ease";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("mouseenter", handleEnter);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="tilt-card group relative h-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="card-gradient border border-charcoal-500 group-hover:border-gold/30 transition-all duration-500 p-8 md:p-10 h-full flex flex-col">
        {/* Number */}
        <div className="flex items-start justify-between mb-8">
          <span className="font-display text-5xl text-charcoal-500 font-light leading-none select-none">
            0{card.index + 1}
          </span>
          <div className="w-8 h-px bg-gold mt-4 transition-all duration-500 group-hover:w-12" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-display text-2xl md:text-3xl text-cream font-light mb-2 leading-tight">
            {card.title}
          </h3>
          <p className="text-label text-gold mb-6 text-[0.65rem]">
            {card.subtitle}
          </p>
          <p className="text-sm text-warm-gray leading-relaxed">
            {card.description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-charcoal-500 group-hover:border-gold/20 transition-colors duration-500">
          <Link
            href={card.href}
            className="inline-flex items-center gap-2 text-label text-cream-muted hover:text-gold transition-colors duration-300 text-[0.65rem]"
          >
            Learn More
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M2 7H12M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headRef.current) observer.observe(headRef.current);
    if (gridRef.current) {
      gridRef.current.querySelectorAll(".tilt-card").forEach((el, i) => {
        (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-charcoal">
      <div className="container-luxury">
        {/* Header */}
        <div ref={headRef} className="max-w-2xl mb-16 opacity-0">
          <span className="text-label text-gold block mb-4">What We Do</span>
          <h2 className="text-display-lg text-cream mb-6">
            Precision-engineered
            <br />
            <em className="text-cream-muted not-italic">for the exceptional</em>
          </h2>
          <p className="text-base text-warm-gray leading-relaxed">
            From a single-room AV installation to a fully integrated 20,000 sq
            ft smart estate — every project receives the same obsessive
            attention to programming, design, and service.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {cards.map((card) => (
            <TiltCard key={card.title} card={card} />
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 flex justify-end">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 text-label text-cream-muted hover:text-gold transition-colors duration-300 group"
          >
            View All Services
            <span className="w-8 h-px bg-warm-gray group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
