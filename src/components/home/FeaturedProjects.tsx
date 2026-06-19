"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const featured = projects.slice(0, 4);

export default function FeaturedProjects() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
            const index = Array.from(gallery.children).indexOf(
              entry.target as Element
            );
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
            <span className="text-label text-gold block mb-4">Selected Work</span>
            <h2 className="text-display-lg text-cream">
              Projects that
              <br />
              <em className="text-gold not-italic">define the standard</em>
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-3 text-label text-cream-muted hover:text-gold transition-colors duration-300 group"
          >
            View All Projects
            <span className="w-8 h-px bg-warm-gray group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>

      {/* Scroll Snap Gallery */}
      <div
        ref={galleryRef}
        className="snap-gallery flex w-full"
        style={{ scrollPaddingLeft: "clamp(1.25rem, 5vw, 5rem)" }}
      >
        {featured.map((project, i) => (
          <div
            key={project.id}
            className="snap-slide flex-shrink-0 relative"
            style={{
              width: "min(90vw, 800px)",
              height: "min(70vh, 580px)",
              marginLeft: i === 0 ? "clamp(1.25rem, 5vw, 5rem)" : "1.5rem",
              marginRight: i === featured.length - 1 ? "clamp(1.25rem, 5vw, 5rem)" : 0,
            }}
          >
            <div className="relative w-full h-full overflow-hidden group">
              {/* Image */}
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="image-luxury"
                sizes="(max-width: 768px) 90vw, 800px"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="text-label text-gold bg-charcoal/70 px-3 py-1.5 backdrop-blur-sm text-[0.6rem] border border-gold/20">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <span className="text-label text-warm-gray text-[0.6rem] block mb-2">
                  {project.location} · {project.year}
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-cream font-light mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-cream-muted mb-6 max-w-md">
                  {project.tagline}
                </p>
                <Link
                  href={`/projects#${project.id}`}
                  className="inline-flex items-center gap-2 text-label text-cream-muted hover:text-gold transition-colors duration-300 text-[0.65rem] group/link"
                >
                  View Project
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
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="container-luxury mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={cn(
                "transition-all duration-300",
                activeIndex === i
                  ? "w-8 h-px bg-gold"
                  : "w-3 h-px bg-warm-gray hover:bg-cream"
              )}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        <Link
          href="/projects"
          className="md:hidden inline-flex items-center gap-2 text-label text-cream-muted hover:text-gold transition-colors duration-300 text-[0.65rem]"
        >
          View All Projects
        </Link>
        <div className="hidden md:flex items-center gap-2 text-label text-warm-gray text-[0.6rem]">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <span className="w-8 h-px bg-charcoal-500" />
          <span>{String(featured.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
