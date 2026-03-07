import React, { useRef, useEffect } from "react";

/**
 * Collapsible — A high-performance accordion primitive.
 *
 * Philosophy:
 * CSS-first height animation using grid tracks instead of JS measurements.
 *
 * Why this approach?
 * Traditional accordions animate `height`, which cannot transition
 * from `auto`. That forces JS measurement (`scrollHeight`) and can
 * cause layout thrashing and scroll instability.
 *
 * This primitive instead animates:
 *      grid-template-rows: 0fr → 1fr
 *
 * letting the browser interpolate height naturally.
 *
 * Key Features
 * ------------
 * • Smooth auto-height animation
 * • No DOM measurement
 * • Stable inside sticky/fixed layouts
 * • Supports upward or downward expansion
 * • Respects prefers-reduced-motion
 * • First-render safe (no layout flash)
 *
 * Techniques
 * ----------
 * 1. Grid row animation
 * 2. CSS containment for layout isolation
 * 3. Content visibility optimization
 * 4. Direction flip via scaleY when expanding upward
 */

interface CollapsibleProps {
  /** Controls open / closed state */
  open: boolean;

  /** Collapsible content */
  children: React.ReactNode;

  /** Animation duration (ms) */
  duration?: number;

  /** CSS easing */
  easing?: string;

  /** Optional className passthrough */
  className?: string;

  /**
   * Expansion direction
   *
   * top (default)    → grows downward
   * bottom           → grows upward
   */
  align?: "top" | "bottom";
}

const Collapsible: React.FC<CollapsibleProps> = ({
  open,
  children,
  duration = 320,
  easing = "cubic-bezier(0.16,1,0.3,1)",
  className,
  align = "top",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* Disable animation for reduced motion users */
    if (prefersReducedMotion) {
      el.style.transition = "none";
      el.style.gridTemplateRows = open ? "1fr" : "0fr";
      return;
    }

    /* Prevent animation on first mount */
    if (firstRender.current) {
      firstRender.current = false;

      el.style.transition = "none";
      el.style.gridTemplateRows = open ? "1fr" : "0fr";

      /* force layout flush */
      el.getBoundingClientRect();

      requestAnimationFrame(() => {
        el.style.transition = `grid-template-rows ${duration}ms ${easing}`;
      });

      return;
    }

    el.style.transition = `grid-template-rows ${duration}ms ${easing}`;
    el.style.gridTemplateRows = open ? "1fr" : "0fr";
  }, [open, duration, easing]);

  const isBottomAligned = align === "bottom";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: "grid",
        gridTemplateRows: open ? "1fr" : "0fr",
        overflow: "hidden",

        /* Layout isolation */
        contain: "layout paint",

        /* Animation hint */
        willChange: "grid-template-rows",

        /**
         * When expanding upward we flip the container
         * so grid expansion appears inverted.
         */
        ...(isBottomAligned && {
          transform: "scaleY(-1)",
          transformOrigin: "center",
        }),
      }}
    >
      <div
        style={{
          minHeight: 0,
          overflow: "hidden",

          /**
           * Skip rendering work when collapsed
           */
          contentVisibility: open ? "visible" : "auto",

          /**
           * Flip content back so it renders normally
           */
          ...(isBottomAligned && {
            transform: "scaleY(-1)",
            transformOrigin: "center",
          }),
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;