import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeId = "default" | "dark" | "forest" | "warm" | "high-contrast";

export interface Theme {
  id: ThemeId;
  label: string;
  description: string;
  /** Swatch color shown in the picker */
  swatch: string;
  icon: string;
}

export const THEMES: Theme[] = [
  {
    id: "default",
    label: "Clinical Blue",
    description: "Clean, professional medical blue",
    swatch: "#136dec",
    icon: "local_hospital",
  },
  {
    id: "dark",
    label: "Dark Mode",
    description: "Easy on the eyes, deep navy",
    swatch: "#60a5fa",
    icon: "dark_mode",
  },
  {
    id: "forest",
    label: "Forest Green",
    description: "Calm, natural healing green",
    swatch: "#059669",
    icon: "eco",
  },
  {
    id: "warm",
    label: "Warm Amber",
    description: "Welcoming private clinic feel",
    swatch: "#d97706",
    icon: "wb_sunny",
  },
  {
    id: "high-contrast",
    label: "High Contrast",
    description: "WCAG AAA accessibility",
    swatch: "#0000cc",
    icon: "contrast",
  },
];

interface ThemeContextValue {
  theme: Theme;
  setTheme: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "everleaf-theme";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    return saved && THEMES.find((t) => t.id === saved) ? saved : "default";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeId);
    localStorage.setItem(STORAGE_KEY, themeId);
  }, [themeId]);

  const theme = THEMES.find((t) => t.id === themeId)!;

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
