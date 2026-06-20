"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, type ProjectCategory } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const filters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All Projects", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Corporate AV", value: "corporate" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const selected = projects.find((p) => p.id === selectedProject);
  const allImages = selected
    ? [selected.heroImage, selected.exteriorImage, ...selected.interiorImages]
    : [];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={projects[0].heroImage}
            alt="The Bridal Path Estate"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/65" />
        </div>
        <div className="relative z-10 container-luxury pb-16 w-full">
          <span className="text-label text-gold block mb-4">Our Work</span>
          <h1 className="text-display-lg text-cream mb-4">
            Residential estates.
            <br />
            <em className="text-gold not-italic">Corporate spaces.</em>
          </h1>
          <p className="text-base text-warm-gray max-w-xl leading-relaxed">
            Every integration below was delivered to real clients across Canada —
            from Rosedale and The Bridal Path to the boardrooms of Nestlé, Kraft Heinz,
            Osler, and Mead Johnson.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  "text-label px-5 py-2.5 border transition-all duration-300 text-[0.65rem]",
                  filter === f.value
                    ? "bg-gold text-charcoal border-gold"
                    : "text-warm-gray border-charcoal-500 hover:border-gold hover:text-cream"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filtered.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className="group cursor-pointer"
                onClick={() => { setSelectedProject(project.id); setActiveImage(0); }}
              >
                {/* Hero image */}
                <div className="relative overflow-hidden mb-1" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={project.heroImage}
                    alt={project.address}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/15 group-hover:bg-charcoal/5 transition-colors duration-500" />

                  {/* Address badge */}
                  <div className="absolute top-5 left-5">
                    <div className="glass px-4 py-2 border border-gold/20">
                      <span className="text-label text-gold text-[0.55rem] block mb-0.5 tracking-widest uppercase">
                        {project.category === "corporate" ? project.client : project.location}
                      </span>
                      <span className="text-xs text-cream font-light">{project.location}</span>
                    </div>
                  </div>

                  {/* View overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="glass border border-gold/30 px-6 py-3 text-label text-gold text-[0.65rem]">
                      View Full Case Study
                    </span>
                  </div>

                  {/* Category pill */}
                  <div className="absolute top-5 right-5">
                    <span className="glass border border-charcoal-500 px-3 py-1.5 text-[0.55rem] text-warm-gray text-label">
                      {project.category === "residential" ? "Residential" : "Corporate AV"}
                    </span>
                  </div>
                </div>

                {/* Interior image strip */}
                <div className="grid grid-cols-3 gap-1 mb-5">
                  {project.interiorImages.map((img, i) => (
                    <div key={i} className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <Image
                        src={img}
                        alt={`${project.title} view ${i + 1}`}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 33vw, 17vw"
                      />
                    </div>
                  ))}
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      {project.category === "corporate" && project.client && (
                        <span className="text-label text-gold text-[0.6rem] block mb-1 tracking-widest">
                          {project.client}
                        </span>
                      )}
                      <h3 className="font-display text-2xl text-cream font-light">{project.title}</h3>
                    </div>
                    <span className="text-xs text-warm-gray mt-1">{project.year}</span>
                  </div>
                  <p className="text-sm text-warm-gray mb-4 leading-relaxed italic">
                    &ldquo;{project.tagline}&rdquo;
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 pt-4 border-t border-charcoal-500">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <span className="block font-display text-xl text-gold font-light leading-none mb-0.5">
                          {s.value}
                        </span>
                        <span className="text-[0.55rem] text-warm-gray uppercase tracking-widest">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-4 md:py-8"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedProject(null); }}
        >
          <div className="absolute inset-0 bg-charcoal/96 backdrop-blur-md" />
          <div className="relative w-full max-w-5xl bg-charcoal-800 border border-charcoal-500 mx-4">
            {/* Close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-10 text-warm-gray hover:text-cream transition-colors duration-300 p-2"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Image Gallery */}
            <div className="relative overflow-hidden" style={{ height: "min(55vh, 500px)" }}>
              {allImages.map((img, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: i === activeImage ? 1 : 0 }}
                >
                  <Image
                    src={img}
                    alt={`${selected.title} — image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 via-transparent to-transparent" />

              {/* Badge */}
              <div className="absolute top-6 left-6">
                <div className="glass px-4 py-2 border border-gold/20">
                  <span className="text-label text-gold text-[0.55rem] block mb-0.5 tracking-widest">
                    {selected.category === "corporate" && selected.client
                      ? selected.client
                      : selected.location}
                  </span>
                  <span className="text-xs text-cream font-light">{selected.location}</span>
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 p-8">
                <h2 className="font-display text-3xl md:text-4xl text-cream font-light">
                  {selected.title}
                </h2>
                <p className="text-sm text-cream-muted mt-1 italic">&ldquo;{selected.tagline}&rdquo;</p>
              </div>

              {/* Image dots */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setActiveImage(i); }}
                    className="transition-all duration-300"
                    style={{
                      width: i === activeImage ? "1.5rem" : "0.375rem",
                      height: "2px",
                      background: i === activeImage ? "#C9A96E" : "rgba(201,169,110,0.3)",
                    }}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <p className="text-base text-cream-muted leading-relaxed mb-8">
                    {selected.description}
                  </p>

                  <h4 className="text-label text-gold text-[0.65rem] mb-4">Project Highlights</h4>
                  <ul className="flex flex-col gap-3 mb-8">
                    {selected.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-cream-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-label text-gold text-[0.65rem] mb-4">Scope of Work</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.scope.map((s) => (
                      <span key={s} className="text-xs text-cream-muted border border-charcoal-500 px-3 py-1.5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-px bg-charcoal-500 mb-8">
                    {selected.stats.map((stat) => (
                      <div key={stat.label} className="bg-charcoal-700 p-5 text-center">
                        <span className="block font-display text-2xl text-gold font-light mb-1">
                          {stat.value}
                        </span>
                        <span className="text-[0.55rem] text-warm-gray uppercase tracking-widest">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-label text-gold text-[0.65rem] mb-4">Systems Integrated</h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selected.systems.map((s) => (
                      <span key={s} className="text-xs text-warm-gray border border-gold/20 px-3 py-1.5">
                        {s}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="btn-gold-shimmer inline-flex items-center justify-center w-full px-6 py-3 bg-gold text-charcoal text-label hover:bg-gold-light transition-colors duration-300 text-xs"
                  >
                    Start a Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
