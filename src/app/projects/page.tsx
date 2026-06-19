"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, type ProjectCategory } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "residential", label: "Residential" },
  { value: "corporate", label: "Corporate" },
  { value: "integrated", label: "Integrated" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const selected = projects.find((p) => p.id === selectedProject);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#C9A96E" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="container-luxury relative z-10">
          <span className="text-label text-gold block mb-4">Our Work</span>
          <h1 className="text-display-lg text-cream mb-6">
            Projects that speak
            <br />
            <em className="text-gold not-italic">for themselves</em>
          </h1>
          <p className="text-base text-warm-gray max-w-xl leading-relaxed">
            Every project below represents a client who demanded the best — and
            received it. From sprawling estates to Fortune 500 headquarters.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-charcoal border-b border-charcoal-500 sticky top-20 z-30">
        <div className="container-luxury py-5">
          <div className="flex items-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "text-label transition-all duration-300 pb-1 border-b",
                  activeCategory === cat.value
                    ? "text-gold border-gold"
                    : "text-warm-gray border-transparent hover:text-cream hover:border-cream"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                id={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-5">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="image-luxury group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-500" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-label text-gold bg-charcoal/80 px-3 py-1.5 text-[0.55rem] border border-gold/20">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </span>
                  </div>

                  {/* View overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="glass px-6 py-3 text-label text-cream text-[0.65rem]">
                      View Case Study
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-xl text-cream font-light">
                      {project.title}
                    </h3>
                    <span className="text-xs text-warm-gray">{project.year}</span>
                  </div>
                  <p className="text-sm text-warm-gray mb-2">{project.location}</p>
                  <p className="text-xs text-warm-gray/70 italic">{project.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal / Case Study Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 md:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="absolute inset-0 bg-charcoal/95 backdrop-blur-md" />
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-charcoal-800 border border-charcoal-500">
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 text-warm-gray hover:text-cream transition-colors duration-300 p-2"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Hero Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src={selected.heroImage}
                alt={selected.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <span className="text-label text-gold text-[0.6rem] block mb-2">
                  {selected.location} · {selected.year}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-cream font-light">
                  {selected.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main */}
                <div className="lg:col-span-2">
                  <p className="text-base text-cream-muted leading-relaxed mb-8">
                    {selected.description}
                  </p>

                  {/* Highlights */}
                  <h4 className="text-label text-gold text-[0.65rem] mb-4">
                    Project Highlights
                  </h4>
                  <ul className="flex flex-col gap-3 mb-8">
                    {selected.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-cream-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Scope */}
                  <h4 className="text-label text-gold text-[0.65rem] mb-4">
                    Scope of Work
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.scope.map((s) => (
                      <span
                        key={s}
                        className="text-xs text-cream-muted border border-charcoal-500 px-3 py-1.5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats + Systems */}
                <div>
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-px bg-charcoal-500 mb-8">
                    {selected.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-charcoal-700 p-5 text-center"
                      >
                        <span className="block font-display text-2xl text-gold font-light mb-1">
                          {stat.value}
                        </span>
                        <span className="text-[0.6rem] text-warm-gray uppercase tracking-widest">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Systems */}
                  <h4 className="text-label text-gold text-[0.65rem] mb-4">
                    Systems Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.systems.map((s) => (
                      <span
                        key={s}
                        className="text-xs text-warm-gray border border-gold/20 px-3 py-1.5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      onClick={() => setSelectedProject(null)}
                      className="btn-gold-shimmer inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gold text-charcoal text-label hover:bg-gold-light transition-colors duration-300 text-xs"
                    >
                      Start a Similar Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
