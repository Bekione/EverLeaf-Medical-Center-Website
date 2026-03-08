import React, { CSSProperties } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;

  delay?: number;

  from?: "bottom" | "left" | "right" | "fade";

  mobileFrom?: "bottom" | "left" | "right" | "fade";

  mobileFallback?: "bottom" | "fade" | "alternate" | "none";

  index?: number;

  threshold?: number;
  rootMargin?: string;
}

const HIDDEN: Record<"bottom" | "left" | "right" | "fade", CSSProperties> = {
  bottom: { opacity: 0, transform: "translateY(28px)" },
  left: { opacity: 0, transform: "translateX(-28px)" },
  right: { opacity: 0, transform: "translateX(28px)" },
  fade: { opacity: 0 },
};

function Reveal({
  children,
  className,
  style,
  delay = 0,
  from = "bottom",
  mobileFrom,
  mobileFallback = "bottom",
  index = 0,
  threshold = 0.12,
  rootMargin = "100px",
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold, rootMargin });

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width:1024px)").matches;

  let direction = from;

  if (isMobile) {
    if (mobileFrom) direction = mobileFrom;
    else if (mobileFallback === "fade") direction = "fade";
    else if (mobileFallback === "alternate")
      direction = index % 2 === 0 ? "left" : "right";
    else if (mobileFallback === "bottom" && (from === "left" || from === "right"))
      direction = "bottom";
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,

        ...(inView ? { opacity: 1, transform: "none" } : HIDDEN[direction]),

        transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,

        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;