  import React, { useEffect, useRef, useState } from "react";

  interface UseInViewOptions {
    threshold?: number;
    rootMargin?: string;
    /** Fire animation only once (default: true) */
    once?: boolean;
  }

  /**
   * Returns [ref, isInView].
   * Attach `ref` to a DOM element; `isInView` becomes true when it
   * enters the viewport and stays true (once=true by default).
   */
  export function useInView<T extends Element = HTMLDivElement>(
    options: UseInViewOptions = {},
  ): [React.RefObject<T>, boolean] {
    const { threshold = 0.12, rootMargin = "0px", once = true } = options;
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      // Initial check in case it's already in view on mount
      const checkVisibility = () => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const isVisible =
          rect.top <
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom > 0;

        if (isVisible) {
          setInView(true);
          return true;
        }
        return false;
      };

      const isAlreadyInView = checkVisibility();

      if (isAlreadyInView && once) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(el);
          } else if (!once) {
            setInView(false);
          }
        },
        { threshold, rootMargin },
      );

      observer.observe(el);

      // Navigation fallback: re-check after a short delay to catch the
      // scrollTo(0,0) that happens in Layout.tsx upon route change.
      const navigationTimer = setTimeout(() => {
        if (checkVisibility() && once) {
          observer.disconnect();
        }
      }, 150);

      return () => {
        clearTimeout(navigationTimer);
        observer.disconnect();
      };
    }, [threshold, rootMargin, once]);

    return [ref, inView];
  }
