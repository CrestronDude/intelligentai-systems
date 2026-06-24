"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/ui/TiltCard";
import CahoniLink from "@/components/ui/CahoniLink";

const cards: {
  number: string;
  title: string;
  subtitle: React.ReactNode;
  description: string;
  href: string;
  image: string;
}[] = [
  {
    number: "01",
    title: "Smart Home Automation",
    subtitle: "Crestron · RTI · Lutron",
    description:
      "Every light, shade, climate zone, camera, and entertainment system under one elegant interface — custom-programmed to your lifestyle.",
    href: "/services#home-automation",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&fit=crop",
  },
  {
    number: "02",
    title: "Corporate AV Integration",
    subtitle: "Q-SYS · Crestron Flex · Shure",
    description:
      "Boardrooms, auditoriums, and collaboration spaces that command attention — designed, programmed, and maintained to the highest standard.",
    href: "/services#corporate-av",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop",
  },
  {
    number: "03",
    title: "Home Cinema & Audio",
    subtitle: "Dolby Atmos · 4K/8K · Invisible Speaker",
    description:
      "Purpose-built home theaters and whole-home audio systems. Invisible speakers, calibrated acoustics, and extraordinary sound.",
    href: "/services#home-theater",
    image: "/images/home-theater.jpg",
  },
  {
    number: "04",
    title: "AI-Enhanced Control",
    subtitle: <><CahoniLink>Cahoni AI</CahoniLink> · Predictive Automation</>,
    description:
      "We integrate next-generation AI tools that learn your preferences, optimize energy use, and make your systems truly intelligent.",
    href: "/services#ai-tools",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80&fit=crop",
  },
];

function ServiceCard({ card }: { card: (typeof cards)[0] }) {
  return (
    <TiltCard
      className="h-full"
      maxTilt={10}
      scale={1.02}
      glare
      maxGlare={0.08}
    >
      <div className="card-gradient border border-charcoal-500 hover:border-gold/30 transition-colors duration-500 flex flex-col h-full group overflow-hidden">
        {/* Image strip */}
        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal-700/90" />
          {/* Number overlay */}
          <span className="absolute bottom-4 right-4 font-display text-5xl text-white/10 font-light leading-none select-none">
            {card.number}
          </span>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-display text-xl text-cream font-light leading-tight flex-1">
              {card.title}
            </h3>
          </div>
          <p className="text-label text-gold mb-4 text-[0.6rem]">
            {card.subtitle}
          </p>
          <p className="text-sm text-warm-gray leading-relaxed flex-1">
            {card.description}
          </p>

          {/* Footer */}
          <div className="mt-6 pt-5 border-t border-charcoal-500 group-hover:border-gold/20 transition-colors duration-500">
            <Link
              href={card.href}
              className="inline-flex items-center gap-2 text-label text-cream-muted hover:text-gold transition-colors duration-300 text-[0.62rem] group/link"
            >
              Learn More
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              >
                <path
                  d="M2 6H10M7 3l3 3-3 3"
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
    </TiltCard>
  );
}

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".service-reveal");
    if (!items) return;

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

    items.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-charcoal">
      <div className="container-luxury">
        {/* Header */}
        <div className="service-reveal opacity-0 max-w-2xl mb-14">
          <span className="text-label text-gold block mb-4">What We Do</span>
          <h2 className="text-display-lg text-cream mb-5">
            Precision-engineered
            <br />
            <em className="text-cream-muted not-italic">for the exceptional</em>
          </h2>
          <p className="text-base text-warm-gray leading-relaxed">
            From a single boardroom to a fully integrated 20,000 sq ft smart
            estate — every project receives the same obsessive attention to
            programming, design, and long-term service.
          </p>
        </div>

        {/* Cards Grid — 4 column, each has TiltCard with image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <div key={card.title} className="service-reveal opacity-0">
              <ServiceCard card={card} />
            </div>
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
