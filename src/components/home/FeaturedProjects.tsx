"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const residentialProjects = projects.filter((p) => p.category === "residential");

export default function FeaturedProjects() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const scrollTo = (index: number) => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const slide = gallery.children[index] as HTMLElement;
    slide.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = Array.from(gallery.children).indexOf(entry.target as Element);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { root: gallery, threshold: 0.5 }
    );
    Array.from(gallery.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-charcoal-800">
      <div className="container-luxury mb-12">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-label text-gold block mb-4">Canadian Case Studies</span>
            <h2 className="text-display-lg text-cream">
              Two addresses.
              <br />
              <em className="text-gold not-italic">Zero compromise.</em>
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-3 text-label text-cream-muted hover:text-gold transition-colors duration-300 group"
          >
            View Case Studies
            <span className="w-8 h-px bg-warm-gray group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>

      {/* Scroll-Snap Gallery */}
      <div
        ref={galleryRef}
        className="snap-gallery flex w-full"
        style={{ scrollPaddingLeft: "clamp(1.25rem, 5vw, 5rem)" }}
      >
        {residentialProjects.map((project, i) => (
          <div
            key={project.id}
            className="snap-slide flex-shrink-0 relative"
            style={{
              width: "min(92vw, 900px)",
              marginLeft: i === 0 ? "clamp(1.25rem, 5vw, 5rem)" : "1.5rem",
              marginRight: i === residentialProjects.length - 1 ? "clamp(1.25rem, 5vw, 5rem)" : 0,
            }}
          >
            <div className="relative overflow-hidden group" style={{ height: "min(72vh, 620px)" }}>
              {/* Main image — exterior of property */}
              <Image
                src={project.heroImage}
                alt={project.address}
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-103"
                sizes="(max-width: 768px) 92vw, 900px"
                priority={i === 0}
              />

              {/* Subtle second image peek — interior strip at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 overflow-hidden">
                <Image
                  src={project.exteriorImage}
                  alt={`${project.address} interior`}
                  fill
                  className="object-cover object-top opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                  sizes="(max-width: 768px) 92vw, 900px"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />

              {/* Top-left address badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="glass px-4 py-2 border border-gold/20">
                  <span className="text-label text-gold text-[0.55rem] block mb-0.5 tracking-widest">
                    {project.location}
                  </span>
                  <span className="text-xs text-cream font-light">{project.address}</span>
                </div>
              </div>

              {/* Year badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className="text-label text-warm-gray text-[0.6rem] border border-charcoal-500 bg-charcoal/60 px-3 py-1.5">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                {/* Location */}
                <span className="text-label text-gold text-[0.6rem] block mb-2 tracking-widest">
                  {project.location}
                </span>
                <h3 className="font-display text-3xl md:text-5xl text-cream font-light mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-cream-muted mb-6 max-w-lg leading-relaxed">
                  {project.tagline}
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-6 mb-6">
                  {project.stats.map((s) => (
                    <div key={s.label}>
                      <span className="block font-display text-xl text-gold font-light leading-none">
                        {s.value}
                      </span>
                      <span className="text-[0.55rem] text-warm-gray uppercase tracking-widest">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/projects#${project.id}`}
                  className="inline-flex items-center gap-2 text-label text-cream-muted hover:text-gold transition-colors duration-300 text-[0.65rem] group/link"
                >
                  Full Case Study
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className="transition-transform duration-300 group-hover/link:translate-x-1">
                    <path d="M2 6H10M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="container-luxury mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {residentialProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={cn(
                "transition-all duration-500",
                activeIndex === i
                  ? "w-12 h-px bg-gold"
                  : "w-4 h-px bg-charcoal-500 hover:bg-warm-gray"
              )}
              aria-label={`Project ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 text-label text-warm-gray text-[0.6rem]">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="w-6 h-px bg-charcoal-500" />
          <span>{String(residentialProjects.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
