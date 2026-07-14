"use client";

import { useState } from "react";
import Link from "next/link";
import {
  marineProducts,
  MARINE_GROUPS,
  priceLabel,
  type MarineCategory,
  type MarineProduct,
} from "@/lib/data/jblMarine";

/**
 * JBL Marine product catalog — filterable grid with staggered scroll reveals.
 *
 * Each card uses the real product photo at /images/marine/<MODEL>.jpg when it
 * exists, and gracefully falls back to a branded placeholder (via <img> onError)
 * until the photos are added — so nothing ever shows as broken. Add photos with
 * the model-number filenames from the catalog spreadsheet to light them up.
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
  const tabs: { id: Filter; label: string }[] = [
    { id: "all", label: "All Products" },
    ...MARINE_GROUPS.map((g) => ({ id: g.id as Filter, label: g.label })),
  ];
  const visible =
    filter === "all" ? marineProducts : marineProducts.filter((p) => p.category === filter);

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
            professionally installed on your boat. Prices are MSRP (CAD); contact us
            for package &amp; installation pricing.
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
          {visible.map((p, i) => (
            <div
              key={p.model}
              data-reveal
              data-reveal-delay={(i % 4) * 80}
              className="card-gradient border border-charcoal-500 hover:border-gold/30 transition-colors duration-500 flex flex-col group overflow-hidden"
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
                <div className="mt-auto pt-4 border-t border-charcoal-500 flex items-center justify-between">
                  <span className="font-display text-xl text-gold font-light">
                    {priceLabel(p.price)}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-label text-cream-muted hover:text-gold transition-colors duration-300 text-[0.6rem] group/link"
                  >
                    Get Quote
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover/link:translate-x-1">
                      <path d="M2 6H10M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
