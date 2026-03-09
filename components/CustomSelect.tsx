import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScrollFade from "./ScrollFade";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
  maxHeight?: number;
  icon?: string;
  error?: string;
  compact?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  className = "",
  maxHeight = 15,
  icon,
  error,
  compact = false,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label
          className="block text-sm font-medium mb-1.5"
          style={{ color: "var(--color-text-muted)" }}
        >
          {label}
        </label>
      )}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center ${compact ? "justify-center px-0" : "justify-between px-4"} py-3 rounded-xl border cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.99] ${
          isOpen ? "ring-2 ring-primary/20" : ""
        }`}
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: error ? "#ef4444" : "var(--color-border)",
          color: selectedOption
            ? "var(--color-text)"
            : "var(--color-text-muted)",
          width: compact ? "50px" : "100%",
          height: "50px",
        }}
      >
        <div
          className={`flex items-center gap-3 ${compact ? "justify-center" : "overflow-hidden"}`}
        >
          {icon && (
            <span
              className="material-icons text-xl shrink-0"
              style={{ color: "var(--color-primary)" }}
            >
              {icon}
            </span>
          )}
          {!compact && (
            <span className="truncate whitespace-nowrap">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          )}
        </div>
        {!compact && (
          <span
            className={`material-icons transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            style={{ color: "var(--color-text-muted)" }}
          >
            expand_more
          </span>
        )}
      </div>

      {/* Options Dropdown */}
      {isOpen && (
        <div
          className="absolute z-9999 w-full mt-2 py-2 rounded-xl border shadow-2xl animate-in fade-in zoom-in-95 duration-200 origin-top overflow-hidden"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <ScrollFade direction="vertical">
            <div
              className="overflow-y-auto custom-scrollbar"
              style={{ maxHeight: `${maxHeight}rem` }}
            >
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className="px-4 py-2.5 text-sm cursor-pointer transition-all flex items-center justify-between group rounded-lg mx-1.5 mb-1 last:mb-0 active:scale-[0.98] active:bg-primary/15"
                  style={{
                    color:
                      value === option.value
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                    backgroundColor:
                      value === option.value
                        ? "color-mix(in srgb, var(--color-primary) 12%, transparent)"
                        : undefined,
                  }}
                  onMouseEnter={(e) => {
                    if (value !== option.value) {
                      e.currentTarget.style.backgroundColor =
                        "color-mix(in srgb, var(--color-primary) 8%, transparent)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (value !== option.value) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <span
                    className={`inline-block transition-transform duration-300 ${value === option.value ? "font-semibold translate-x-1.5" : "group-hover:translate-x-1.5"}`}
                  >
                    {option.label}
                  </span>
                  {value === option.value && (
                    <span className="material-icons text-sm">check</span>
                  )}
                </div>
              ))}
            </div>
          </ScrollFade>
        </div>
      )}

      {error && (
        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
          <span className="material-icons text-xs">error</span>
          <span>{t(error)}</span>
        </p>
      )}
    </div>
  );
};
