"use client";

import { useState } from "react";
import Link from "next/link";
import {
  marineProducts,
  MARINE_GROUPS,
  type MarineCategory,
  type MarineProduct,
} from "@/lib/data/jblMarine";

/**
 * JBL Marine product catalog — filterable grid with staggered scroll reveals
 * (same `data-reveal` motion language as the landing page).
 *
 * No prices are shown: clients are prompted to request a quote or build a
 * complete system. Selecting products adds them to a "system" and a floating
 * bar lets the client send the whole build to us for a tailored quote.
 *
 * Each card uses the real product photo at /images/marine/<MODEL>.jpg when it
 * exists, and gracefully falls back to a branded placeholder (via <img> onError)
 * so nothing ever shows as broken.
 */

type Filter = "all" | MarineCategory;

function ProductImage({ product }: { product: MarineProduct }) {
  const [failed, setFailed] = useState(false);
  const group = MARINE_GROUPS.find((g) => g.id === product.category)?.label ?? product.category;
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-charcoal-700 to-charcoal-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.10),transparent_70%)]" />
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-4xl text-gold/70 leading-none">JBL</span>
          <span className="text-[0.5rem] text-warm-gray tracking-[0.25em] uppercase mt-2">
            {group}
          </span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-contain p-5 transition-transform duration-700 group-hover:scale-105"
        />
      )}
    </div>
  );
}

export default function MarineCatalog() {
  const [filter, setFilter] = useState<Filter>("all");
  const [build, setBuild] = useState<string[]>([]);

  const tabs: { id: Filter; label: string }[] = [
    { id: "all", label: "All Products" },
    ...MARINE_GROUPS.map((g) => ({ id: g.id as Filter, label: g.label })),
  ];
  const visible =
    filter === "all" ? marineProducts : marineProducts.filter((p) => p.category === filter);

  const toggle = (model: string) =>
    setBuild((prev) =>
      prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
    );

  // Encode the selected build into the contact link so the enquiry arrives with
  // the client's chosen system already attached.
  const buildNames = build
    .map((m) => marineProducts.find((p) => p.model === m)?.name)
    .filter(Boolean) as string[];
  const quoteHref = build.length
    ? `/contact?subject=${encodeURIComponent(
        "Marine system quote"
      )}&build=${encodeURIComponent(buildNames.join(" · "))}`
    : "/contact";

  return (
    <section className="section-padding bg-charcoal-800">
      <div className="container-luxury">
        <div className="max-w-2xl mb-10" data-reveal>
          <span className="text-label text-gold block mb-4">The JBL Marine Catalog</span>
          <h2 className="text-display-md text-cream mb-5">
            Speakers, subwoofers &amp; amplifiers — supplied and installed.
          </h2>
          <p className="text-warm-gray text-base leading-relaxed">
            As an authorized JBL Marine dealer we supply the full range and design
            complete packages — speakers, subwoofers, and amplifiers — matched and
            professionally installed on your boat. Add the pieces that interest you
            to build a system, then request a tailored quote — or just tell us your
            boat and we&apos;ll design it for you.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10" data-reveal>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id)}
              className={`text-label text-[0.62rem] px-5 py-2.5 border transition-colors duration-300 ${
                filter === t.id
                  ? "bg-gold text-charcoal border-gold"
                  : "text-warm-gray border-charcoal-500 hover:border-gold hover:text-cream"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visible.map((p, i) => {
            const selected = build.includes(p.model);
            return (
              <div
                key={p.model}
                data-reveal
                data-reveal-delay={(i % 4) * 80}
                className={`card-gradient border transition-colors duration-500 flex flex-col group overflow-hidden ${
                  selected ? "border-gold" : "border-charcoal-500 hover:border-gold/30"
                }`}
              >
                <ProductImage product={p} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[0.55rem] text-gold border border-gold/30 px-2.5 py-1 text-label tracking-widest">
                      {p.spec}
                    </span>
                    <span className="text-[0.55rem] text-warm-gray font-mono tracking-wide">
                      {p.model}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-cream font-light leading-tight mb-3">
                    {p.name}
                  </h3>
                  <p className="text-sm text-warm-gray leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-xs text-cream-muted">
                      <span className="text-warm-gray">Best for — </span>
                      {p.bestFor}
                    </span>
                  </div>
                  <div className="mt-auto pt-4 border-t border-charcoal-500 flex items-center gap-3">
                    <button
                      onClick={() => toggle(p.model)}
                      aria-pressed={selected}
                      className={`flex-1 inline-flex items-center justify-center gap-2 text-label text-[0.6rem] px-3 py-2.5 border transition-colors duration-300 ${
                        selected
                          ? "bg-gold text-charcoal border-gold"
                          : "text-cream-muted border-charcoal-500 hover:border-gold hover:text-gold"
                      }`}
                    >
                      {selected ? (
                        <>
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Added
                        </>
                      ) : (
                        <>
                          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                          </svg>
                          Add to System
                        </>
                      )}
                    </button>
                    <Link
                      href={`/contact?subject=${encodeURIComponent("Marine quote")}&build=${encodeURIComponent(p.name)}`}
                      className="inline-flex items-center gap-1.5 text-label text-cream-muted hover:text-gold transition-colors duration-300 text-[0.6rem] group/link whitespace-nowrap"
                    >
                      Get Quote
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover/link:translate-x-1">
                        <path d="M2 6H10M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating "build a system" bar */}
      {build.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-charcoal/95 backdrop-blur-md animate-fade-up">
          <div className="container-luxury py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold text-charcoal font-display text-lg font-light flex-shrink-0">
                {build.length}
              </span>
              <div className="min-w-0">
                <p className="text-cream text-sm font-medium leading-tight">
                  {build.length === 1 ? "1 item in your system" : `${build.length} items in your system`}
                </p>
                <p className="text-warm-gray text-[0.7rem] truncate max-w-[60vw]">
                  {buildNames.join(" · ")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setBuild([])}
                className="text-label text-[0.6rem] text-warm-gray hover:text-cream transition-colors duration-300"
              >
                Clear
              </button>
              <Link
                href={quoteHref}
                className="btn-gold-shimmer inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal text-label text-[0.62rem] hover:bg-gold-light transition-colors duration-300"
              >
                Request a Quote
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
