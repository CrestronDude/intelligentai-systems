"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * SpaceWalkthrough — a scroll-linked, continuously cross-dissolving tour of spaces.
 *
 * Instead of snapping an active index at thresholds (which felt abrupt), this
 * drives a *continuous* progress value `t ∈ [0, N-1]` from scroll position and
 * eases it each frame. Every layer's opacity, scale, and parallax offset is a
 * smooth function of its distance from `t`, so adjacent spaces fade and drift
 * into one another fluidly as you scroll — and the active image keeps a gentle
 * ken-burns drift so it always feels alive. All per-frame work is imperative
 * (via refs) to stay at 60fps without re-rendering React.
 *
 * Pairs with global Lenis smooth scrolling for a buttery, eye-catching glide on
 * both laptop trackpads and mobile touch. Honors prefers-reduced-motion.
 */

const VH_PER_SPACE = 115; // scroll travel allotted to each space
const EASE = 0.085; // lerp factor — lower = silkier, more trailing glide

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
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement | null>(null);
  const [idx, setIdx] = useState(0); // integer index — only for dots / "next" label
  const idxRef = useRef(0);

  useEffect(() => {
    const N = spaces.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let raf = 0;

    const render = (v: number) => {
      for (let i = 0; i < N; i++) {
        const d = v - i; // <0 upcoming, >0 already passed
        const ad = Math.min(Math.abs(d), 1);

        const bg = bgRefs.current[i];
        if (bg) {
          bg.style.opacity = String(Math.max(0, 1 - ad));
          // settle from a slight zoom + vertical drift into place as it becomes active
          bg.style.transform = `scale(${1 + ad * 0.09}) translateY(${d * -3.5}%)`;
          bg.style.zIndex = ad < 1 ? "1" : "0";
        }

        const tx = textRefs.current[i];
        if (tx) {
          const tad = Math.min(Math.abs(d) * 1.35, 1);
          tx.style.opacity = String(Math.max(0, 1 - tad));
          tx.style.transform = `translateY(calc(-50% + ${d * -42}px))`;
          tx.style.pointerEvents = ad < 0.5 ? "auto" : "none";
        }
      }

      if (barRef.current) {
        barRef.current.style.width = `${(v / Math.max(1, N - 1)) * 100}%`;
      }

      const ri = Math.round(v);
      if (ri !== idxRef.current) {
        idxRef.current = ri;
        setIdx(ri);
      }
    };

    const targetProgress = () => {
      const el = sectionRef.current;
      if (!el) return 0;
      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), scrollable);
      const p = scrollable > 0 ? scrolled / scrollable : 0;
      return p * (N - 1);
    };

    const loop = () => {
      const target = targetProgress();
      if (reduce) {
        current = target;
      } else {
        current += (target - current) * EASE;
        if (Math.abs(target - current) < 0.0008) current = target;
      }
      render(current);
      raf = requestAnimationFrame(loop);
    };

    render(0);
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [spaces.length]);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${spaces.length * VH_PER_SPACE}vh` }}
      aria-label={eyebrow ? `${eyebrow} walkthrough` : "Spaces walkthrough"}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background layers */}
        {spaces.map((s, i) => (
          <div
            key={s.label + "-bg"}
            ref={(el) => {
              bgRefs.current[i] = el;
            }}
            className="absolute inset-0 will-change-[transform,opacity]"
            style={{ opacity: i === 0 ? 1 : 0 }}
            aria-hidden={i !== idx}
          >
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              className="object-cover object-center room-image-active"
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

        {/* Content layers */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-luxury w-full">
            <div className="relative max-w-2xl">
              {spaces.map((s, i) => (
                <div
                  key={s.label + "-text"}
                  ref={(el) => {
                    textRefs.current[i] = el;
                  }}
                  className="absolute top-1/2 left-0 w-full will-change-[transform,opacity]"
                  style={{
                    opacity: i === 0 ? 1 : 0,
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-gold font-display text-sm font-light opacity-70">
                      {s.number}
                    </span>
                    <span className="w-8 h-px bg-gold opacity-50" />
                    <span className="text-label text-cream-muted">{s.label}</span>
                  </div>

                  <h2 className="text-display-lg text-cream mb-6 leading-[1.05]">
                    {s.title}
                    {s.titleAccent && (
                      <>
                        {" "}
                        <em className="text-gold not-italic">{s.titleAccent}</em>
                      </>
                    )}
                  </h2>

                  <p className="text-base text-cream-muted leading-relaxed max-w-lg mb-7 font-light">
                    {s.body}
                  </p>

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
                  height: i === idx ? "2rem" : "0.5rem",
                  background: i === idx ? "#C9A96E" : "rgba(201,169,110,0.2)",
                }}
              />
              <div
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === idx ? "4px" : "2px",
                  height: i === idx ? "4px" : "2px",
                  background: i === idx ? "#C9A96E" : "rgba(201,169,110,0.25)",
                }}
              />
            </div>
          ))}
          <span
            className="text-gold text-[0.5rem] tracking-[0.25em] uppercase mt-2 opacity-50"
            style={{ writingMode: "vertical-rl", letterSpacing: "0.3em" }}
          >
            {String(idx + 1).padStart(2, "0")} / {String(spaces.length).padStart(2, "0")}
          </span>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <div className="container-luxury pb-8">
            <div className="flex items-end justify-between">
              <div
                className="flex flex-col gap-1"
                style={{ opacity: idx < spaces.length - 1 ? 1 : 0, transition: "opacity 0.5s" }}
              >
                <span className="text-[0.55rem] text-warm-gray tracking-[0.2em] uppercase">
                  Scroll to continue
                </span>
              </div>

              {idx < spaces.length - 1 && (
                <div className="text-right">
                  <span className="text-[0.55rem] text-warm-gray tracking-[0.2em] uppercase block mb-0.5">
                    Next
                  </span>
                  <span className="text-sm text-cream-muted font-display">
                    {spaces[idx + 1].label}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="h-px w-full bg-charcoal-600 relative">
            <div ref={barRef} className="h-full bg-gold" style={{ width: "0%" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
