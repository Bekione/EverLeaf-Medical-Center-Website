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
  /** IntersectionObserver threshold (0‒1) */
  threshold?: number;
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
  threshold = 0.12,
  key,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold });

  return (
    <div
      key={key}
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(inView ? { opacity: 1, transform: "none" } : HIDDEN[from]),
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;
