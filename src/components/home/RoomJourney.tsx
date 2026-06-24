"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ── Room data ─────────────────────────────────────────────── */
const rooms = [
  {
    number: "01",
    label: "Living Room",
    headlineA: "Every scene,",
    headlineB: "instantaneous",
    body: "Lighting, shading, audio, and climate respond to a single touch — or no touch at all. Crestron scenes set the mood. Systems learn your life.",
    features: [
      "One-touch scene activation",
      "Motorized blackout & solar shades",
      "Multi-room Sonance invisible audio",
      "Lutron Ketra tunable lighting",
    ],
    equipment: ["Crestron TSW-1070", "Lutron RadioRA 3", "Sonance Invisible Series"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90&fit=crop",
    svgPath: "M20,20 L180,20 L180,120 L20,120 Z",
    svgPerimeter: 540,
  },
  {
    number: "02",
    label: "Home Theater",
    headlineA: "Cinema that",
    headlineB: "never disappears",
    body: "Dolby Atmos. 4K laser projection. Invisible acoustic panels. A theater that appears — and vanishes — on command via RTI.",
    features: [
      "Dolby Atmos 11.2.4 layout",
      "JVC 4K laser projector",
      "Stewart Filmscreen reference display",
      "Acoustic treatment & room calibration",
    ],
    equipment: ["RTI XP-8", "JVC DLA-NZ9", "Polk Audio Legend L800"],
    image: "/images/home-theater.jpg",
    svgPath: "M20,120 L180,120 L180,200 L20,200 Z",
    svgPerimeter: 480,
  },
  {
    number: "03",
    label: "Bedroom Suite",
    headlineA: "Rest as it was",
    headlineB: "meant to be",
    body: "Circadian-synced Ketra lighting eases you to sleep. Dawn simulations wake you gently. AI learns your rhythms over time.",
    features: [
      "Circadian rhythm lighting schedules",
      "AI-optimized sleep environment",
      "Wake-up scene with climate ramp",
      "Temperature precision to 0.5°F",
    ],
    equipment: ["Lutron Ketra N-38", "ecobee Premium", "eufy SoloCam S340"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=90&fit=crop",
    svgPath: "M180,20 L320,20 L320,120 L180,120 Z",
    svgPerimeter: 480,
  },
  {
    number: "04",
    label: "Corporate Suite",
    headlineA: "Your boardroom,",
    headlineB: "perfected",
    body: "Zero-touch room startup in under 8 seconds. Crystal-clear Shure conferencing. Q-SYS DSP programming at the highest level.",
    features: [
      "One-button Zoom & Teams launch",
      "Shure Stem ceiling microphone array",
      "Dante network audio infrastructure",
      "Remote monitoring & proactive SLA",
    ],
    equipment: ["Q-SYS Core 510i", "Crestron Flex UC-MX70", "Shure MXA920"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90&fit=crop",
    svgPath: "M180,120 L320,120 L320,200 L180,200 Z",
    svgPerimeter: 440,
  },
  {
    number: "05",
    label: "Outdoor Living",
    headlineA: "The experience",
    headlineB: "extends outdoors",
    body: "Concealed Sonance and JBL landscape audio. Architectural lighting that transforms the grounds after dark. Automated gates that open as you arrive. The estate, fully alive.",
    features: [
      "Invisible Sonance & JBL landscape audio",
      "Architectural exterior lighting scenes",
      "Automated gates & video access control",
      "Geofence-triggered arrival sequences",
    ],
    equipment: ["Sonance Landscape", "JBL Control 80", "Lutron Ketra", "Crestron Access"],
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1920&q=90&fit=crop",
    svgPath: "M320,20 L340,20 L340,200 L320,200",
    svgPerimeter: 200,
  },
];

const VH_PER_ROOM = 115;
const EASE = 0.085;

/* ── Floor Plan SVG ─────────────────────────────────────────── */
function FloorPlan({ activeRoom }: { activeRoom: number }) {
  const dots = [
    { cx: 90, cy: 70 },
    { cx: 90, cy: 160 },
    { cx: 240, cy: 70 },
    { cx: 240, cy: 160 },
    { cx: 330, cy: 110 },
  ];
  const dot = dots[activeRoom] ?? dots[0];
  return (
    <div className="absolute bottom-10 right-12 hidden lg:block pointer-events-none">
      <svg viewBox="0 0 360 220" width="220" height="138" fill="none" aria-hidden="true">
        <line x1="5" y1="215" x2="355" y2="215" stroke="#C9A96E" strokeWidth="0.5" opacity="0.12" />
        <line x1="5" y1="5" x2="5" y2="215" stroke="#C9A96E" strokeWidth="0.5" opacity="0.12" />
        <rect x="20" y="20" width="300" height="180" stroke="#C9A96E" strokeWidth="0.5" opacity="0.15" />
        <line x1="160" y1="20" x2="160" y2="200" stroke="#C9A96E" strokeWidth="0.5" opacity="0.12" />
        <line x1="20" y1="120" x2="320" y2="120" stroke="#C9A96E" strokeWidth="0.5" opacity="0.12" />
        <line x1="320" y1="20" x2="340" y2="20" stroke="#C9A96E" strokeWidth="0.5" opacity="0.12" />
        <line x1="340" y1="20" x2="340" y2="200" stroke="#C9A96E" strokeWidth="0.5" opacity="0.12" />
        <line x1="320" y1="200" x2="340" y2="200" stroke="#C9A96E" strokeWidth="0.5" opacity="0.12" />
        <text x="90" y="75" textAnchor="middle" fill="#C9A96E" fontSize="5.5" opacity="0.2" fontFamily="'Inter', sans-serif" letterSpacing="1">LIVING</text>
        <text x="90" y="165" textAnchor="middle" fill="#C9A96E" fontSize="5.5" opacity="0.2" fontFamily="'Inter', sans-serif" letterSpacing="1">THEATER</text>
        <text x="240" y="75" textAnchor="middle" fill="#C9A96E" fontSize="5.5" opacity="0.2" fontFamily="'Inter', sans-serif" letterSpacing="1">BEDROOM</text>
        <text x="240" y="165" textAnchor="middle" fill="#C9A96E" fontSize="5.5" opacity="0.2" fontFamily="'Inter', sans-serif" letterSpacing="1">SUITE</text>
        <text x="332" y="115" textAnchor="middle" fill="#C9A96E" fontSize="4" opacity="0.2" fontFamily="'Inter', sans-serif" letterSpacing="0.5">OUT</text>
        {rooms.map((room, i) => (
          <path
            key={room.label}
            d={room.svgPath}
            stroke="#C9A96E"
            strokeWidth="1.5"
            style={{
              strokeDasharray: room.svgPerimeter + 10,
              strokeDashoffset: i === activeRoom ? 0 : room.svgPerimeter + 10,
              transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease",
              opacity: i === activeRoom ? 1 : 0,
            }}
          />
        ))}
        <circle
          cx={dot.cx}
          cy={dot.cy}
          r="2.5"
          fill="#C9A96E"
          style={{ transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)" }}
        />
      </svg>
      <p className="text-[0.5rem] text-warm-gray tracking-[0.2em] uppercase text-right mt-1 opacity-40">
        Floor Plan
      </p>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────────── */
export default function RoomJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement | null>(null);
  const [activeRoom, setActiveRoom] = useState(0);
  const activeRef = useRef(0);

  useEffect(() => {
    const N = rooms.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let raf = 0;

    const render = (v: number) => {
      for (let i = 0; i < N; i++) {
        const d = v - i;
        const ad = Math.min(Math.abs(d), 1);

        const bg = bgRefs.current[i];
        if (bg) {
          bg.style.opacity = String(Math.max(0, 1 - ad));
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
      if (ri !== activeRef.current) {
        activeRef.current = ri;
        setActiveRoom(ri);
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
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${rooms.length * VH_PER_ROOM}vh` }}
      aria-label="Room journey"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background images */}
        {rooms.map((room, i) => (
          <div
            key={room.label + "-bg"}
            ref={(el) => {
              bgRefs.current[i] = el;
            }}
            className="absolute inset-0 will-change-[transform,opacity]"
            style={{ opacity: i === 0 ? 1 : 0 }}
            aria-hidden={i !== activeRoom}
          >
            <Image
              src={room.image}
              alt={room.label}
              fill
              className="object-cover object-center room-image-active"
              sizes="100vw"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Living Room: auto-cycle lighting scenes to demo one-touch control */}
            {i === 0 && <div className="scene-cycle absolute inset-0" aria-hidden="true" />}
          </div>
        ))}

        {/* Gradient overlays */}
        <div className="absolute inset-0 hero-gradient z-10" />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to top, rgba(12,12,12,0.75) 0%, transparent 50%)",
          }}
        />

        {/* Room content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-luxury w-full">
            <div className="relative max-w-2xl">
              {rooms.map((room, i) => (
                <div
                  key={room.label + "-text"}
                  ref={(el) => {
                    textRefs.current[i] = el;
                  }}
                  className="absolute top-1/2 left-0 w-full max-w-2xl will-change-[transform,opacity]"
                  style={{ opacity: i === 0 ? 1 : 0, transform: "translateY(-50%)" }}
                >
                  <div className="flex items-center gap-3 mb-7">
                    <span className="text-gold font-display text-sm font-light opacity-70">
                      {room.number}
                    </span>
                    <span className="w-8 h-px bg-gold opacity-50" />
                    <span className="text-label text-cream-muted">{room.label}</span>
                  </div>

                  <h2 className="text-display-xl text-cream mb-3">{room.headlineA}</h2>
                  <h2 className="text-display-xl text-gold mb-8">{room.headlineB}</h2>

                  <p className="text-base text-cream-muted leading-relaxed max-w-lg mb-8 font-light">
                    {room.body}
                  </p>

                  <ul className="flex flex-col gap-2.5 mb-8">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span className="w-1.5 h-px bg-gold flex-shrink-0" />
                        <span className="text-sm text-cream">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {room.equipment.map((eq) => (
                      <span
                        key={eq}
                        className="text-[0.6rem] text-gold border border-gold/25 px-3 py-1 text-label tracking-widest"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side progress indicator */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-2">
            {rooms.map((room, i) => (
              <div key={room.label + "-dot"} className="flex flex-col items-center gap-2">
                <div
                  className="transition-all duration-500"
                  style={{
                    width: "1px",
                    height: i === activeRoom ? "2rem" : "0.5rem",
                    background: i === activeRoom ? "#C9A96E" : "rgba(201,169,110,0.2)",
                  }}
                />
                <div
                  className="transition-all duration-500"
                  style={{
                    width: i === activeRoom ? "4px" : "2px",
                    height: i === activeRoom ? "4px" : "2px",
                    borderRadius: "50%",
                    background: i === activeRoom ? "#C9A96E" : "rgba(201,169,110,0.25)",
                  }}
                />
              </div>
            ))}
          </div>
          <span
            className="text-gold text-[0.5rem] tracking-[0.25em] uppercase mt-2 opacity-50"
            style={{ writingMode: "vertical-rl", letterSpacing: "0.3em" }}
          >
            {String(activeRoom + 1).padStart(2, "0")} / {String(rooms.length).padStart(2, "0")}
          </span>
        </div>

        {/* Floor Plan SVG */}
        <FloorPlan activeRoom={activeRoom} />

        {/* Live lighting-scene caption (Living Room) — kept mounted so its
            animation timeline stays in sync with the .scene-cycle overlay. */}
        <div
          className="absolute bottom-24 left-0 right-0 z-30 pointer-events-none transition-opacity duration-700"
          style={{ opacity: activeRoom === 0 ? 1 : 0 }}
          aria-hidden={activeRoom !== 0}
        >
          <div className="container-luxury">
            <div className="inline-flex items-center gap-3 glass border border-gold/20 px-4 py-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-[0.55rem] text-warm-gray tracking-[0.25em] uppercase">
                Lighting Scene
              </span>
              <span className="w-px h-3 bg-charcoal-500" />
              <span className="relative inline-block min-w-[6.5rem] h-[1rem] text-sm text-gold font-display leading-none">
                <span className="scene-name scene-name-day">Daylight</span>
                <span className="scene-name scene-name-evening">Evening</span>
                <span className="scene-name scene-name-focus">Focus</span>
                <span className="scene-name scene-name-cinema">Cinema</span>
                <span className="scene-name scene-name-party">Entertain</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom room name bar */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <div className="container-luxury pb-8">
            <div className="flex items-end justify-between">
              <div
                className="flex flex-col gap-1"
                style={{
                  opacity: activeRoom < rooms.length - 1 ? 1 : 0,
                  transition: "opacity 0.5s",
                }}
              >
                <span className="text-[0.55rem] text-warm-gray tracking-[0.2em] uppercase">
                  Scroll to continue
                </span>
              </div>

              {activeRoom < rooms.length - 1 && (
                <div className="text-right">
                  <span className="text-[0.55rem] text-warm-gray tracking-[0.2em] uppercase block mb-0.5">
                    Next
                  </span>
                  <span className="text-sm text-cream-muted font-display">
                    {rooms[activeRoom + 1].label}
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
