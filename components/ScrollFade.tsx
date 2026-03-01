import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
  } from "react";
  
  interface ScrollFadeProps {
    children: React.ReactNode;
    fadeSize?: number;
    direction?: "horizontal" | "vertical";
    alwaysShowFade?: boolean;
    animateFade?: boolean;
    className?: string;
  }
  
  const ScrollFade: React.FC<ScrollFadeProps> = ({
    children,
    fadeSize = 40,
    direction = "horizontal",
    alwaysShowFade = false,
    animateFade = true,
    className = "",
  }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const scrollElRef = useRef<HTMLElement | null>(null);
  
    const [canScrollStart, setCanScrollStart] = useState(false);
    const [canScrollEnd, setCanScrollEnd] = useState(false);
  
    const isHorizontal = direction === "horizontal";
  
    const updateScrollState = useCallback(() => {
      const el = scrollElRef.current;
      if (!el) return;
  
      const scrollPos = isHorizontal ? el.scrollLeft : el.scrollTop;
      const scrollSize = isHorizontal ? el.scrollWidth : el.scrollHeight;
      const clientSize = isHorizontal ? el.clientWidth : el.clientHeight;
  
      const canStart = scrollPos > 0;
      const canEnd = scrollPos + clientSize < scrollSize - 1;
  
      setCanScrollStart(canStart);
      setCanScrollEnd(canEnd);
    }, [isHorizontal]);
  
    useEffect(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
  
      // Find first scrollable child
      const scrollChild = wrapper.firstElementChild as HTMLElement | null;
      if (!scrollChild) return;
  
      scrollElRef.current = scrollChild;
  
      updateScrollState();
  
      scrollChild.addEventListener("scroll", updateScrollState);
  
      const resizeObserver = new ResizeObserver(updateScrollState);
      resizeObserver.observe(scrollChild);
  
      return () => {
        scrollChild.removeEventListener("scroll", updateScrollState);
        resizeObserver.disconnect();
      };
    }, [updateScrollState, children]);
  
    const getMask = () => {
      if (!alwaysShowFade && !canScrollStart && !canScrollEnd) {
        return "none";
      }
  
      const fade = fadeSize;
  
      if (isHorizontal) {
        if (canScrollStart && canScrollEnd) {
          return `linear-gradient(to right,
            transparent 0px,
            black ${fade}px,
            black calc(100% - ${fade}px),
            transparent 100%)`;
        }
  
        if (!canScrollStart && canScrollEnd) {
          return `linear-gradient(to right,
            black 0px,
            black calc(100% - ${fade}px),
            transparent 100%)`;
        }
  
        if (canScrollStart && !canScrollEnd) {
          return `linear-gradient(to right,
            transparent 0px,
            black ${fade}px,
            black 100%)`;
        }
      } else {
        if (canScrollStart && canScrollEnd) {
          return `linear-gradient(to bottom,
            transparent 0px,
            black ${fade}px,
            black calc(100% - ${fade}px),
            transparent 100%)`;
        }
  
        if (!canScrollStart && canScrollEnd) {
          return `linear-gradient(to bottom,
            black 0px,
            black calc(100% - ${fade}px),
            transparent 100%)`;
        }
  
        if (canScrollStart && !canScrollEnd) {
          return `linear-gradient(to bottom,
            transparent 0px,
            black ${fade}px,
            black 100%)`;
        }
      }
  
      return "none";
    };
  
    return (
      <div
        ref={wrapperRef}
        className={`relative overflow-hidden ${className}`}
        style={{
          WebkitMaskImage: getMask(),
          maskImage: getMask(),
          transition: animateFade ? "mask-image 0.3s ease" : undefined,
        }}
      >
        {children}
      </div>
    );
  };
  
  export default ScrollFade;