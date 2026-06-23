"use client";

import { useEffect, useRef } from "react";

const brands = [
  { name: "Crestron", role: "Authorized Dealer & Programmer" },
  { name: "RTI", role: "Certified Programmer" },
  { name: "Q-SYS", role: "Design Partner" },
  { name: "Lutron", role: "Authorized Dealer" },
  { name: "JBL", role: "Authorized Dealer" },
  { name: "Denon", role: "Authorized Dealer" },
  { name: "Polk Audio", role: "Authorized Dealer" },
  { name: "eufy", role: "Integration Partner" },
  { name: "Sonance", role: "Certified Installer" },
  { name: "Shure", role: "Integration Partner" },
  { name: "Biamp", role: "Certified Partner" },
];

export default function TrustBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animFrame: number;
    let pos = 0;
    const speed = 0.3;

    const animate = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section className="bg-charcoal-800 border-y border-charcoal-500 py-8 overflow-hidden">
      <div className="container-luxury mb-5">
        <span className="text-label text-warm-gray text-[0.6rem]">
          Authorized Partner & Certified Programmer
        </span>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-charcoal-800 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-charcoal-800 to-transparent pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex items-center gap-12 overflow-x-hidden"
          style={{ whiteSpace: "nowrap" }}
        >
          {/* Double the list for infinite scroll */}
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 px-6"
            >
              <span className="w-1 h-1 rounded-full bg-gold opacity-60" />
              <div>
                <span className="block font-display text-lg text-cream font-light tracking-wide">
                  {brand.name}
                </span>
                <span className="block text-[0.6rem] text-warm-gray tracking-widest uppercase">
                  {brand.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
