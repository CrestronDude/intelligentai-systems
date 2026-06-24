"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Global smooth (inertial) scrolling. This is the foundation of the site's
 * "fluid" feel — wheel and trackpad input is eased into momentum scrolling, so
 * the scroll-linked walkthroughs glide instead of stepping. Native touch
 * momentum on mobile is already smooth, so we leave touch to the browser.
 *
 * Disabled when the user prefers reduced motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      // easeOutExpo — long, graceful glide-out
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
