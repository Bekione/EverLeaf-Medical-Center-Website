import React, { CSSProperties } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Stagger delay in ms before animation starts */
  delay?: number;
  /** Animation direction */
  from?: "bottom" | "left" | "right" | "fade";
  /** Explicit animation direction for mobile */
  mobileFrom?: "bottom" | "left" | "right" | "fade";
  /** Mobile fallback behavior if mobileFrom is not provided. Default: "bottom" */
  mobileFallback?: "bottom" | "fade" | "alternate" | "none";
  /** Index for alternating animations (used when mobileFallback="alternate") */
  index?: number;
  /** IntersectionObserver threshold (0‒1) */
  threshold?: number;
  /** IntersectionObserver rootMargin (e.g. "100px") */
  rootMargin?: string;
  key?: string | number;
}

const HIDDEN: Record<NonNullable<RevealProps["from"]>, CSSProperties> = {
  bottom: { opacity: 0, transform: "translateY(28px)" },
  left: { opacity: 0, transform: "translateX(-28px)" },
  right: { opacity: 0, transform: "translateX(28px)" },
  fade: { opacity: 0 },
};

/**
 * Wraps children in a <div> that fades + slides into view on scroll.
 * Zero dependencies — uses IntersectionObserver + CSS transitions.
 *
 * Usage:
 *   <Reveal delay={100}>
 *     <MyCard />
 *   </Reveal>
 */
function Reveal({
  children,
  className,
  style,
  delay = 0,
  from = "bottom",
  mobileFrom,
  mobileFallback = "bottom",
  index = 0,
  threshold = 0,
  rootMargin = "100px",
  key,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold, rootMargin });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Determine actual starting direction
  let actualFrom: NonNullable<RevealProps["from"]> = from;

  if (isMobile) {
    if (mobileFrom) {
      actualFrom = mobileFrom;
    } else if (mobileFallback === "fade") {
      actualFrom = "fade";
    } else if (mobileFallback === "alternate") {
      actualFrom = index % 2 === 0 ? "left" : "right";
    } else if (mobileFallback === "bottom") {
      // For horizontal animations, fallback to bottom unless "none" or "alternate" is specified
      if (from === "left" || from === "right") {
        actualFrom = "bottom";
      }
    }
    // if mobileFallback is "none", it stays as 'from'
  }

  return (
    <div
      key={key}
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(inView ? { opacity: 1, transform: "none" } : HIDDEN[actualFrom]),
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;
