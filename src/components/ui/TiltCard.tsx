"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
  maxGlare?: number;
  speed?: number;
}

export default function TiltCard({
  children,
  className,
  maxTilt = 10,
  scale = 1.02,
  glare = true,
  maxGlare = 0.08,
  speed = 500,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let vanillaTilt: { destroy: () => void } | null = null;

    import("vanilla-tilt").then((mod) => {
      const VT = mod.default;
      VT.init(el as unknown as HTMLElement & { vanillaTilt: typeof VT }, {
        max: maxTilt,
        speed,
        scale,
        glare,
        "max-glare": maxGlare,
        perspective: 1200,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        reset: true,
        "reset-to-start": true,
      });
      vanillaTilt = (el as unknown as { vanillaTilt: { destroy: () => void } })
        .vanillaTilt;
    });

    return () => {
      vanillaTilt?.destroy();
    };
  }, [maxTilt, scale, glare, maxGlare, speed]);

  return (
    <div ref={ref} className={cn("transform-gpu", className)}>
      {children}
    </div>
  );
}
