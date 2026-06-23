"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

/**
 * Drives a sticky scroll "walkthrough" of `count` spaces.
 *
 * The problem with mapping scroll position straight to an index is that a fast
 * trackpad flick or a mobile momentum-swipe jumps several spaces at once and
 * interrupts each cross-fade mid-animation — it feels abrupt and "too quick".
 *
 * This hook decouples the *visible* index from raw scroll: scroll only sets a
 * TARGET index, and the visible index advances toward it **one step at a time**,
 * holding each step for `stepMs` so every transition plays fully and fluidly.
 * No matter how fast the user swipes, the spaces cross-fade one after another at
 * a controlled pace. It relies entirely on native scrolling, so it behaves
 * consistently on laptop trackpads and mobile touch and never traps the user.
 *
 * Honors prefers-reduced-motion by snapping instantly to the target.
 */
export function useWalkthroughIndex(
  sectionRef: RefObject<HTMLElement | null>,
  count: number,
  stepMs = 1100
) {
  const [index, setIndex] = useState(0);
  const targetRef = useRef(0);
  const animatingRef = useRef(false);
  const rafRef = useRef(0);
  const reduceRef = useRef(false);

  // Advance the visible index one step toward the target, then schedule the
  // next step after the transition has had time to settle. Re-entrancy is
  // guarded so overlapping scroll events can't skip a step.
  const pump = useCallback(() => {
    if (animatingRef.current) return;
    setIndex((cur) => {
      const target = targetRef.current;
      if (cur === target) return cur;
      const next = cur + (target > cur ? 1 : -1);
      const dwell = reduceRef.current ? 0 : stepMs;
      if (dwell === 0) {
        // Reduced motion: collapse straight to the target.
        return target;
      }
      animatingRef.current = true;
      window.setTimeout(() => {
        animatingRef.current = false;
        pump();
      }, dwell);
      return next;
    });
  }, [stepMs]);

  useEffect(() => {
    reduceRef.current =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const recompute = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = scrollable > 0 ? Math.min(1, scrolled / scrollable) : 0;
      targetRef.current = Math.min(Math.floor(progress * count), count - 1);
      pump();
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(recompute);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    recompute();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [count, pump, sectionRef]);

  return index;
}
