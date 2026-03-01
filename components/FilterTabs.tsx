import React, { useEffect, useRef, useState } from "react";

interface FilterTabsProps {
  categories: readonly string[] | string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  getLabel: (category: string) => string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Reusable Filter Tabs component with a smooth, spring-like animated indicator.
 * Provides consistency across Gallery and Blog pages.
 */
export const FilterTabs: React.FC<FilterTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  getLabel,
  className = "",
  ariaLabel = "Filter options",
}) => {
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    width: 0,
    top: 0,
    height: 0,
    opacity: 0,
  });
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Update pill position when active category changes
  useEffect(() => {
    const activeBtn = buttonRefs.current[activeCategory];
    if (activeBtn) {
      setPillStyle({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
        top: activeBtn.offsetTop,
        height: activeBtn.offsetHeight,
        opacity: 1,
      });
    }
  }, [activeCategory, categories]);

  // Handle resizing to keep pill aligned
  useEffect(() => {
    const updatePosition = () => {
      const activeBtn = buttonRefs.current[activeCategory];
      if (activeBtn) {
        setPillStyle((prev) => ({
          ...prev,
          left: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
          top: activeBtn.offsetTop,
          height: activeBtn.offsetHeight,
        }));
      }
    };

    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [activeCategory]);

  return (
    <div
      className={`relative flex flex-wrap justify-center gap-2 md:gap-3 ${className}`}
      role="group"
      aria-label={ariaLabel}
    >
      {/* Animated Active Pill Indicator (Slides on top of buttons, behind text) */}
      <div
        className="absolute rounded-full bg-primary shadow-lg z-10 pointer-events-none"
        style={{
          left: `${pillStyle.left}px`,
          width: `${pillStyle.width}px`,
          top: `${pillStyle.top}px`,
          height: `${pillStyle.height}px`,
          opacity: pillStyle.opacity,
          // Spring-like transition: cubic-bezier(0.34, 1.56, 0.64, 1) provides that bouncy feel
          transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          willChange: "left, width, top, height",
        }}
      />

      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            ref={(el) => (buttonRefs.current[cat] = el)}
            onClick={() => onCategoryChange(cat)}
            aria-pressed={isActive}
            className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border shadow-sm whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-primary/50`}
            style={{
              backgroundColor: "var(--color-surface)",
              color: isActive ? "#fff" : "var(--color-text-muted)",
              borderColor: isActive ? "transparent" : "var(--color-border)",
            }}
          >
            {/* The label span stays above the sliding primary pill */}
            <span className="relative z-20">{getLabel(cat)}</span>
          </button>
        );
      })}
    </div>
  );
};
