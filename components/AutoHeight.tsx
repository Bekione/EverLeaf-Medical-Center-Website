import React, { useRef, useState, useLayoutEffect } from "react";

interface AutoHeightProps {
  children: React.ReactNode;
  className?: string;
  type?: "spring" | "transition";
  /** Transition settings */
  duration?: number;
  easing?: string;
  /** Spring settings */
  stiffness?: number;
  damping?: number;
}

const AutoHeight: React.FC<AutoHeightProps> = ({
  children,
  className,
  type = "transition",
  duration = 300,
  easing = "ease-in-out",
  stiffness = 0.15,
  damping = 0.8,
}) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Use a state for common height tracking
  const [height, setHeight] = useState<number | "auto">("auto");
  const isInitialized = useRef(false);

  // Spring refs
  const frameRef = useRef<number>();
  const velocityRef = useRef(0);
  const heightRef = useRef(0);
  const targetRef = useRef(0);

  const animate = () => {
    const current = heightRef.current;
    const target = targetRef.current;

    const force = (target - current) * stiffness;
    velocityRef.current += force;
    velocityRef.current *= damping;

    const next = current + velocityRef.current;
    heightRef.current = next;

    if (wrapperRef.current) {
      wrapperRef.current.style.height = `${next}px`;
    }

    if (Math.abs(target - next) < 0.1 && Math.abs(velocityRef.current) < 0.1) {
      heightRef.current = target;
      velocityRef.current = 0;
      if (wrapperRef.current) {
        wrapperRef.current.style.height = `${target}px`;
      }
      frameRef.current = undefined;
      return;
    }

    frameRef.current = requestAnimationFrame(animate);
  };

  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      const newHeight = el.offsetHeight;

      if (type === "spring") {
        targetRef.current = newHeight;
        if (!isInitialized.current) {
          heightRef.current = newHeight;
          if (wrapperRef.current)
            wrapperRef.current.style.height = `${newHeight}px`;
          isInitialized.current = true;
        } else if (!frameRef.current) {
          animate();
        }
      } else {
        // Transition mode
        setHeight(newHeight);
        if (!isInitialized.current) {
          isInitialized.current = true;
        }
      }
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [type, stiffness, damping]); // Re-init on type change

  return (
    <div
      ref={wrapperRef}
      className={`overflow-hidden ${className || ""}`}
      style={{
        height:
          type === "transition"
            ? height === "auto"
              ? "auto"
              : `${height}px`
            : undefined,
        transition:
          type === "transition" && isInitialized.current
            ? `height ${duration}ms ${easing}`
            : "none",
        willChange: "height",
      }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
};

export default AutoHeight;
