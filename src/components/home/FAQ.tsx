"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What does a typical project timeline look like?",
    a: "Most whole-home integrations run 8–12 weeks of design and engineering followed by 4–6 weeks of installation and commissioning, depending on scope and construction schedule. Corporate AV timelines vary by the number of rooms and floors. Every project begins with a complimentary consultation where we map the full timeline to your space.",
  },
  {
    q: "What is your service area?",
    a: "We are based in the Greater Toronto Area and serve the GTA for the full range of residential and corporate work. For larger projects we work Canada-wide, combining on-site visits with secure remote programming and monitoring.",
  },
  {
    q: "Can you integrate with the systems I already have?",
    a: "In most cases, yes. We work across Crestron, RTI, Lutron, Q-SYS, JBL, Sonance and many other platforms, and we regularly bring existing lighting, audio, security, and network equipment into a single, unified interface rather than replacing everything.",
  },
  {
    q: "Do you only work on new construction?",
    a: "No. We work on new builds, major renovations, and finished homes. Technologies like JBL CONCEAL invisible speakers and wireless lighting control let us achieve a great deal without opening up every wall.",
  },
  {
    q: "How are projects priced?",
    a: "Every engagement starts with a detailed, AI-assisted scope of work and transparent, itemized pricing — so you understand exactly what you are investing in before any work begins. There are no surprise line items.",
  },
  {
    q: "What happens after installation?",
    a: "We commission and calibrate every system, train you on its use, and provide ongoing support backed by remote monitoring and service-level response. Many issues are resolved remotely before you would even notice them.",
  },
];

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-charcoal-800" aria-labelledby="faq-heading">
      <FaqJsonLd />
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Heading */}
          <div className="lg:col-span-1" data-reveal>
            <span className="text-label text-gold block mb-4">FAQ</span>
            <h2 id="faq-heading" className="text-display-md text-cream mb-6">
              Questions, answered.
            </h2>
            <p className="text-warm-gray text-sm leading-relaxed">
              Still wondering about something specific? We&apos;re happy to talk it
              through on a complimentary consultation.
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-2" data-reveal data-reveal-delay={120}>
            <dl className="border-t border-charcoal-500">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-charcoal-500">
                    <dt>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                      >
                        <span className="font-display text-xl text-cream font-light group-hover:text-gold transition-colors duration-300">
                          {f.q}
                        </span>
                        <span
                          className="relative flex-shrink-0 w-5 h-5 text-gold"
                          aria-hidden="true"
                        >
                          <span className="absolute top-1/2 left-0 w-5 h-px bg-current -translate-y-1/2" />
                          <span
                            className={`absolute top-1/2 left-0 w-5 h-px bg-current -translate-y-1/2 transition-transform duration-300 ${
                              isOpen ? "rotate-0" : "rotate-90"
                            }`}
                          />
                        </span>
                      </button>
                    </dt>
                    <dd
                      className="grid transition-all duration-300 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-warm-gray text-sm leading-relaxed pb-6 pr-10 max-w-2xl">
                          {f.a}
                        </p>
                      </div>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
