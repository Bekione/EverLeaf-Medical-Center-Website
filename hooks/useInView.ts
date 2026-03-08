import React, { useEffect, useRef, useState } from "react";
import { observe, unobserve } from "../utils/observerPool";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {},
): [React.RefObject<T>, boolean] {
  const { threshold = 0.12, rootMargin = "0px", once = true } = options;

  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observerOptions = { threshold, rootMargin };

    const callback = (visible: boolean) => {
      if (visible) {
        setInView(true);
        if (once) unobserve(el, observerOptions);
      } else if (!once) {
        setInView(false);
      }
    };

    observe(el, callback, observerOptions);

    /**
     * Initial visibility check
     * Fixes cases where the element is already visible
     * but IntersectionObserver hasn't fired yet.
     */
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < vh && rect.bottom > 0) {
        setInView(true);
        if (once) unobserve(el, observerOptions);
      }
    });

    return () => {
      unobserve(el, observerOptions);
    };
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
