"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

/**
 * SpaceWalkthrough — a reusable, scroll-driven "walk through the spaces" section.
 *
 * Generalizes the homepage RoomJourney mechanic so any page can present a
 * cinematic, full-bleed tour of spaces that transitions as the user scrolls.
 * Matches the reference aesthetic: object-fit cover architectural photography,
 * two warm colors, minimal cream UI, room-to-room cross-fade + ken-burns.
 *
 * The section is `spaces.length * 100vh` tall with a sticky 100vh viewport;
 * scroll progress drives the active space. Honors prefers-reduced-motion via the
 * global CSS (animations are neutralized; scroll scrubbing still works).
 */

export interface Space {
  number: string;
  label: string;
  title: string;
  titleAccent?: string;
  body: string;
  features?: string[];
  tags?: string[];
  image: string;
  imageAlt: string;
}

export default function SpaceWalkthrough({
  spaces,
  eyebrow,
}: {
  spaces: Space[];
  eyebrow?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const rafRef = useRef<number>(0);

  const update = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const scrollable = section.offsetHeight - window.innerHeight;
    const scrolled = Math.max(0, -rect.top);
    const progress = scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;
    const idx = Math.min(Math.floor(progress * spaces.length), spaces.length - 1);
    setActive(idx);
  }, [spaces.length]);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${spaces.length * 100}vh` }}
      aria-label={eyebrow ? `${eyebrow} walkthrough` : "Spaces walkthrough"}
    >
      <div className="sticky top-0 h-screen overflow-hidden" style={{ willChange: "transform" }}>
        {/* Background images */}
        {spaces.map((s, i) => (
          <div
            key={s.label + "-bg"}
            className="absolute inset-0"
            style={{
              opacity: i === active ? 1 : 0,
              transition: "opacity 1s cubic-bezier(0.16,1,0.3,1)",
              zIndex: i === active ? 1 : 0,
            }}
            aria-hidden={i !== active}
          >
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              className={`object-cover object-center ${i === active ? "room-image-active" : ""}`}
              sizes="100vw"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Gradient overlays */}
        <div className="absolute inset-0 hero-gradient z-10" />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to top, rgba(12,12,12,0.8) 0%, transparent 55%)",
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-luxury w-full">
            <div className="relative max-w-2xl">
              {spaces.map((s, i) => (
                <div
                  key={s.label + "-text"}
                  className="absolute top-1/2 left-0 w-full"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: `translateY(${
                      i === active ? "-50%" : i > active ? "calc(-50% + 24px)" : "calc(-50% - 24px)"
                    })`,
                    transition:
                      "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                    pointerEvents: i === active ? "auto" : "none",
                  }}
                >
                  {/* Number + label */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-gold font-display text-sm font-light opacity-70">
                      {s.number}
                    </span>
                    <span className="w-8 h-px bg-gold opacity-50" />
                    <span className="text-label text-cream-muted">{s.label}</span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-display-lg text-cream mb-6 leading-[1.05]">
                    {s.title}
                    {s.titleAccent && (
                      <>
                        {" "}
                        <em className="text-gold not-italic">{s.titleAccent}</em>
                      </>
                    )}
                  </h2>

                  {/* Body */}
                  <p className="text-base text-cream-muted leading-relaxed max-w-lg mb-7 font-light">
                    {s.body}
                  </p>

                  {/* Features */}
                  {s.features && (
                    <ul className="flex flex-col gap-2.5 mb-7">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <span className="w-1.5 h-px bg-gold flex-shrink-0" />
                          <span className="text-sm text-cream">{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  {s.tags && (
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[0.6rem] text-gold border border-gold/25 px-3 py-1 text-label tracking-widest"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right-side progress indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-2">
          {spaces.map((s, i) => (
            <div key={s.label + "-dot"} className="flex flex-col items-center gap-2">
              <div
                className="transition-all duration-500"
                style={{
                  width: "1px",
                  height: i === active ? "2rem" : "0.5rem",
                  background: i === active ? "#C9A96E" : "rgba(201,169,110,0.2)",
                }}
              />
              <div
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === active ? "4px" : "2px",
                  height: i === active ? "4px" : "2px",
                  background: i === active ? "#C9A96E" : "rgba(201,169,110,0.25)",
                }}
              />
            </div>
          ))}
          <span
            className="text-gold text-[0.5rem] tracking-[0.25em] uppercase mt-2 opacity-50"
            style={{ writingMode: "vertical-rl", letterSpacing: "0.3em" }}
          >
            {String(active + 1).padStart(2, "0")} / {String(spaces.length).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <div className="container-luxury pb-8">
            <div className="flex items-end justify-between">
              <div
                className="flex flex-col gap-1"
                style={{ opacity: active < spaces.length - 1 ? 1 : 0, transition: "opacity 0.5s" }}
              >
                <span className="text-[0.55rem] text-warm-gray tracking-[0.2em] uppercase">
                  Scroll to continue
                </span>
                <div className="flex gap-1">
                  <div className="w-4 h-px bg-warm-gray" />
                  <div
                    className="h-px bg-gold transition-all duration-500"
                    style={{ width: `${(active / (spaces.length - 1)) * 64}px` }}
                  />
                </div>
              </div>

              {active < spaces.length - 1 && (
                <div className="text-right">
                  <span className="text-[0.55rem] text-warm-gray tracking-[0.2em] uppercase block mb-0.5">
                    Next
                  </span>
                  <span className="text-sm text-cream-muted font-display">
                    {spaces[active + 1].label}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="h-px w-full bg-charcoal-600 relative">
            <div
              className="h-full bg-gold transition-all duration-700 ease-out"
              style={{ width: `${(active / (spaces.length - 1)) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
