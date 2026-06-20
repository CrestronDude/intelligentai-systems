"use client";

import Link from "next/link";
import CahoniLink from "@/components/ui/CahoniLink";

const tools: {
  name: React.ReactNode;
  tagline: string;
  description: React.ReactNode;
  status: string;
  href?: string;
  externalHref?: string;
}[] = [
  {
    name: <CahoniLink>Cahoni AI</CahoniLink>,
    tagline: "Quoting platform for AV integrators & trades",
    description: (
      <>
        <CahoniLink>Cahoni AI</CahoniLink> is a proprietary quoting and proposal
        platform built by AI Intelligent Services for AV integrators and trades.
        Generate accurate, custom-branded proposals in minutes — not hours. Available
        as a white-label software development service for your firm.
      </>
    ),
    status: "Live Platform",
    externalHref: "https://intelligentai.services/",
  },
  {
    name: "AI Quote Generator",
    tagline: "Precise scoping, instantly",
    description:
      "Tell us about your project and our AI-powered estimator generates a detailed, accurate scope of work — including hardware specifications, programming hours, and installation costs — in minutes, not weeks.",
    status: "Available Now",
    href: "/contact",
  },
  {
    name: "Predictive Optimization",
    tagline: "Systems that learn and adapt",
    description:
      "Our AI layer continuously monitors your energy usage, occupancy patterns, and system performance to make intelligent adjustments that reduce consumption and improve comfort without any input from you.",
    status: "In Projects",
  },
];

export default function AIToolsSection() {
  return (
    <section className="section-padding bg-charcoal-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A96E" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-luxury relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-label text-gold block mb-4">AI-Enhanced</span>
            <h2 className="text-display-lg text-cream">
              Intelligence built
              <br />
              <em className="text-gold not-italic">into every layer</em>
            </h2>
          </div>
          <p className="text-base text-warm-gray leading-relaxed max-w-sm lg:text-right">
            We don&apos;t just program automation. We embed AI at every level — from
            how your home speaks to how your project is scoped.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="glass-light border border-charcoal-500 hover:border-gold/30 p-8 md:p-10 transition-all duration-500 group"
            >
              {/* Status Pill */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[0.55rem] text-gold border border-gold/30 px-3 py-1 text-label tracking-widest">
                  {tool.status}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gold opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                >
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" />
                  <path
                    d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="font-display text-2xl text-cream font-light mb-2">
                {tool.name}
              </h3>
              <p className="text-label text-gold mb-5 text-[0.65rem]">
                {tool.tagline}
              </p>
              <p className="text-sm text-warm-gray leading-relaxed mb-8">
                {tool.description}
              </p>

              {tool.externalHref && (
                <a
                  href={tool.externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-label text-[#7FBBCF] hover:text-[#A8D4E2] transition-colors duration-200 text-[0.65rem] group/link"
                >
                  Visit Cahoni AI
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className="transition-transform duration-300 group-hover/link:translate-x-1">
                    <path d="M2 6H10M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}

              {tool.href && (
                <Link
                  href={tool.href}
                  className="inline-flex items-center gap-2 text-label text-cream-muted hover:text-gold transition-colors duration-300 text-[0.65rem] group/link"
                >
                  Get a Quote
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className="transition-transform duration-300 group-hover/link:translate-x-1">
                    <path d="M2 6H10M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
