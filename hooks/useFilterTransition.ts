import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type CSSProperties,
} from "react";

/**
 * Three-phase animation state for filtered lists.
 *
 *  "entering" → items rendered at hidden start position (opacity:0, translateY:22px, no transition)
 *  "visible"  → items animate into view with staggered delays
 *  "exiting"  → items fade + shift UP simultaneously before list updates
 *
 * On INITIAL MOUNT the hook starts as "entering" → flips to "visible" after
 * a brief delay so the page-load entrance also staggers.
 */
export type AnimationPhase = "visible" | "exiting" | "entering";

export function useFilterTransition(exitMs = 180, enterReadyMs = 40) {
  // Start in "entering" so the initial render also gets the stagger
  const [phase, setPhase] = useState<AnimationPhase>("entering");
  const t1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t2 = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initial stagger: flip "entering" → "visible" after first paint.
  // Using a LOCAL timer var so StrictMode cleanup only kills its own copy —
  // the second invocation fires correctly even in Strict development mode.
  useEffect(() => {
    const timer = setTimeout(() => setPhase("visible"), 60);
    return () => clearTimeout(timer);
  }, []);

  const animate = useCallback(
    (updateFn: () => void) => {
      if (t1.current) clearTimeout(t1.current);
      if (t2.current) clearTimeout(t2.current);

      // Phase 1 — exit: all cards fade + slide UP simultaneously (no stagger)
      setPhase("exiting");

      t1.current = setTimeout(() => {
        updateFn(); // apply filter/page change
        setPhase("entering"); // paint new cards at start position (no transition)

        // Phase 3 — one frame later, begin staggered entry
        t2.current = setTimeout(() => setPhase("visible"), enterReadyMs);
      }, exitMs);
    },
    [exitMs, enterReadyMs],
  );

  return [phase, animate] as const;
}

/**
 * Returns per-card inline styles based on the current animation phase.
 * Use inside a .map() — pass the card's index for stagger timing.
 *
 * @param idx       Card index (0-based)
 * @param phase     Current animation phase from useFilterTransition
 * @param staggerMs Delay between consecutive cards (default 65 ms)
 */
export function cardAnimStyle(
  idx: number,
  phase: AnimationPhase,
  staggerMs = 65,
): CSSProperties {
  if (phase === "entering") {
    return {
      opacity: 0,
      transform: "translateY(22px)",
      transition: "none",
      willChange: "opacity, transform",
    };
  }

  if (phase === "exiting") {
    return {
      opacity: 0,
      transform: "translateY(-12px)",
      transition: "opacity 0.18s ease, transform 0.18s ease",
      willChange: "opacity, transform",
    };
  }

  // "visible" — staggered slide-up entry
  return {
    opacity: 1,
    transform: "translateY(0)",
    transition: `opacity 0.42s ease ${idx * staggerMs}ms, transform 0.42s ease ${idx * staggerMs}ms`,
    willChange: "opacity, transform",
  };
}
