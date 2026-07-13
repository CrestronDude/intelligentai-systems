"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal engine. Any element marked `data-reveal` fades and rises
 * (or slides / scales) into view as it enters the viewport, with the same
 * luxury easing as the walkthroughs — so every section feels alive and fluid,
 * not just the scroll-scrub pages.
 *
 * Progressive enhancement: the initial hidden state is gated behind the
 * `reveal-on` class this component adds to <html>, so if JS never runs, all
 * content stays fully visible. Honors prefers-reduced-motion (reveals instantly).
 * A MutationObserver picks up elements added on client-side route changes.
 *
 * Optional attributes on a `data-reveal` element:
 *   data-reveal="up" | "left" | "right" | "scale"   (direction, default "up")
 *   data-reveal-delay="120"                          (ms stagger delay)
 *
 * A container marked `data-reveal-stagger` reveals its DIRECT CHILDREN in
 * sequence (CSS nth-child delays) — used for hero content so the label →
 * headline → subtext → CTAs cascade in like the homepage hero.
 */
const SELECTOR = "[data-reveal], [data-reveal-stagger]";
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      // Make sure nothing is left hidden.
      root.classList.remove("reveal-on");
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    root.classList.add("reveal-on");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const observe = (el: Element) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    };

    const scan = () =>
      document
        .querySelectorAll<HTMLElement>(
          "[data-reveal]:not(.is-visible), [data-reveal-stagger]:not(.is-visible)"
        )
        .forEach(observe);

    scan();

    // Catch elements added by client-side navigation.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches?.(SELECTOR)) observe(node);
          node
            .querySelectorAll?.(
              "[data-reveal]:not(.is-visible), [data-reveal-stagger]:not(.is-visible)"
            )
            .forEach(observe);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      root.classList.remove("reveal-on");
    };
  }, []);

  return null;
}
