import React, { useState, useRef, useEffect } from "react";
import { THEMES, useTheme, type ThemeId } from "../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import Button from "./Button";

export const ThemeSwitcher: React.FC<{
  inline?: boolean;
  variant?: "desktop" | "menu";
  className?: string;
}> = ({ inline = false, variant = "desktop", className = "" }) => {
  const { theme, setTheme } = useTheme();
  const { t: translate } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ─── Mobile / Menu Variant ──────────────────────────────────────────────────
  if (variant === "menu") {
    return (
      <div className={`w-full ${className}`} ref={ref}>
        {/* Trigger — mirrors LanguageSwitcher menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-semibold w-full bg-bg-alt text-text border border-border"
        >
          {/* Current theme swatch */}
          <span
            className="w-5 h-5 rounded-full shrink-0 shadow-sm"
            style={{ backgroundColor: theme.swatch }}
          />
          <span className="flex-1 text-left">{translate(theme.label)}</span>
          <span
            className={`material-icons text-xs transition-transform ml-auto ${open ? "rotate-180" : ""}`}
            style={{ color: "var(--color-text-muted)" }}
          >
            keyboard_arrow_down
          </span>
        </button>

        {/* Dropdown — opens downward, same style as LanguageSwitcher */}
        {open && (
          <div
            className="relative mt-2 w-full py-2 rounded-xl border shadow-sm z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
            role="listbox"
            aria-label={translate("components.themeSwitcher.aria.list")}
          >
            {THEMES.map((t) => {
              const isActive = t.id === theme.id;
              return (
                <button
                  key={t.id}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setTheme(t.id as ThemeId);
                    setOpen(false);
                  }}
                  className={`w-11/12 mx-auto flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors relative group ${
                    isActive ? "bg-primary/10" : "hover:bg-primary/10"
                  }`}
                  style={{
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--color-text)",
                  }}
                >
                  {/* Color swatch */}
                  <span
                    className="w-5 h-5 rounded-full shrink-0 shadow-sm flex items-center justify-center"
                    style={{ backgroundColor: t.swatch }}
                    aria-hidden="true"
                  />

                  {/* Label */}
                  <span
                    className={`flex-1 text-left ${isActive ? "font-bold" : ""}`}
                  >
                    {translate(t.label)}
                  </span>

                  {/* Theme icon */}
                  <span
                    className="material-icons text-sm shrink-0"
                    style={{
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text-muted)",
                    }}
                  >
                    {t.icon}
                  </span>

                  {/* Hover highlight */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-lg" />
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // ─── Desktop Variant (default) ──────────────────────────────────────────────
  return (
    <div
      ref={ref}
      className={
        inline
          ? `relative ${className}`
          : `hidden md:flex fixed bottom-8 left-6 z-50 flex-col items-start gap-3 ${className}`
      }
    >
      {/* Theme Menu */}
      {open && (
        <div
          className={`rounded-2xl shadow-2xl overflow-hidden w-64 animate-fade-in border z-50 ${
            inline ? "absolute bottom-full right-0 mb-2" : ""
          }`}
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
          role="dialog"
          aria-label={translate("components.themeSwitcher.aria.selector")}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-2 border-b"
            style={{ borderColor: "var(--color-border)" }}
          >
            <span
              className="material-icons text-lg"
              style={{ color: "var(--color-primary)" }}
            >
              palette
            </span>
            <span
              className="text-sm font-bold"
              style={{ color: "var(--color-text)" }}
            >
              {translate("components.themeSwitcher.title")}
            </span>
          </div>

          {/* Theme Options */}
          <ul
            className="py-2"
            role="listbox"
            aria-label={translate("components.themeSwitcher.aria.list")}
          >
            {THEMES.map((t) => {
              const isActive = t.id === theme.id;
              return (
                <li key={t.id} role="option" aria-selected={isActive}>
                  <button
                    onClick={() => {
                      setTheme(t.id as ThemeId);
                      setOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors"
                    style={{
                      backgroundColor: isActive
                        ? "var(--color-primary-light)"
                        : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = "var(--color-bg-alt)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = "transparent";
                    }}
                  >
                    {/* Color swatch */}
                    <span
                      className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center shadow-sm"
                      style={{ backgroundColor: t.swatch }}
                      aria-hidden="true"
                    >
                      {isActive && (
                        <span className="material-icons text-white text-sm">
                          check
                        </span>
                      )}
                    </span>

                    {/* Label */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-semibold truncate"
                        style={{
                          color: isActive
                            ? "var(--color-primary)"
                            : "var(--color-text)",
                        }}
                      >
                        {translate(t.label)}
                      </p>
                      <p
                        className="text-xs truncate"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {translate(t.description)}
                      </p>
                    </div>

                    {/* Icon */}
                    <span
                      className="material-icons text-base shrink-0"
                      style={{
                        color: isActive
                          ? "var(--color-primary)"
                          : "var(--color-text-muted)",
                      }}
                    >
                      {t.icon}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setOpen((v) => !v)}
        rounded="full"
        animate={false}
        variant="primary"
        size="sm"
        className={`gap-2 text-white! font-semibold shadow-lg ${
          inline ? "px-3 py-2" : "px-4 py-2.5"
        }`}
        icon="palette"
      >
        {!inline && (
          <span className="hidden sm:inline">{translate(theme.label)}</span>
        )}
        <span
          className="material-icons text-base transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_less
        </span>
      </Button>
    </div>
  );
};
