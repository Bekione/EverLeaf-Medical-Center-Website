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
    label: "data.themes.default.label",
    description: "data.themes.default.description",
    swatch: "#136dec",
    icon: "local_hospital",
  },
  {
    id: "dark",
    label: "data.themes.dark.label",
    description: "data.themes.dark.description",
    swatch: "#60a5fa",
    icon: "dark_mode",
  },
  {
    id: "forest",
    label: "data.themes.forest.label",
    description: "data.themes.forest.description",
    swatch: "#059669",
    icon: "eco",
  },
  {
    id: "warm",
    label: "data.themes.warm.label",
    description: "data.themes.warm.description",
    swatch: "#d97706",
    icon: "wb_sunny",
  },
  {
    id: "high-contrast",
    label: "data.themes.high-contrast.label",
    description: "data.themes.high-contrast.description",
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
