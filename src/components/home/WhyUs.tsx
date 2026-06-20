"use client";

import { useRef, useEffect } from "react";
import CahoniLink from "@/components/ui/CahoniLink";

const differentiators: { number: string; title: string; description: React.ReactNode }[] = [
  {
    number: "01",
    title: "Certified at the Highest Level",
    description:
      "Our team holds active Crestron, RTI, and Q-SYS certifications. Not just salespeople who learned to program — engineers who have mastered the platforms that power the finest homes and boardrooms in the world.",
  },
  {
    number: "02",
    title: "15+ Years of Programming Excellence",
    description:
      "There's no shortcut to experience. Our principal has personally programmed hundreds of complex systems over 15+ years. That depth of expertise translates directly into systems that work flawlessly — and keep working.",
  },
  {
    number: "03",
    title: "AI-First Integration Approach",
    description: (
      <>
        We don&apos;t just install hardware. We integrate AI tools like{" "}
        <CahoniLink /> to create systems that learn, adapt, and optimize.
        Your home doesn&apos;t just respond — it anticipates.
      </>
    ),
  },
  {
    number: "04",
    title: "White-Glove Service",
    description:
      "Every project includes documented programming, training, and ongoing support. When something needs attention, you reach a certified programmer — not a call center.",
  },
  {
    number: "05",
    title: "Architecture-First Design",
    description:
      "Technology should complement architecture, never compete with it. We collaborate with architects, interior designers, and builders to ensure every installation disappears seamlessly into the space.",
  },
  {
    number: "06",
    title: "Transparent Scope & Pricing",
    description:
      "Our AI-powered quote generator produces detailed, accurate proposals. No surprises, no change orders disguised as upgrades. Just clear scope, honest pricing, and predictable delivery.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".why-item");
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
      { threshold: 0.15 }
    );

    items.forEach((item, i) => {
      (item as HTMLElement).style.animationDelay = `${i * 0.08}s`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-charcoal">
      <div className="container-luxury">
        {/* Header */}
        <div className="max-w-xl mb-20">
          <span className="text-label text-gold block mb-4">Why Choose Us</span>
          <h2 className="text-display-lg text-cream mb-6">
            Not just integration.
            <br />
            <em className="text-gold not-italic">Mastery.</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-500">
          {differentiators.map((item) => (
            <div
              key={item.number}
              className="why-item opacity-0 bg-charcoal p-8 md:p-10 hover:bg-charcoal-700 transition-colors duration-300 group"
            >
              <span className="font-display text-5xl text-charcoal-500 font-light block mb-6 group-hover:text-gold/20 transition-colors duration-300">
                {item.number}
              </span>
              <div className="w-6 h-px bg-gold mb-5 group-hover:w-10 transition-all duration-300" />
              <h3 className="font-display text-xl text-cream font-light mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-warm-gray leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
