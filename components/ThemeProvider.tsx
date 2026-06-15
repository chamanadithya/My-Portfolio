"use client";

import {
  createContext, useContext, useEffect, useState, useCallback, type ReactNode,
} from "react";

export type Theme = "light" | "dark";
export type Density = "compact" | "regular" | "comfy";
export type Font = "helvetica" | "grotesk" | "archivo" | "fraunces";

type ThemeState = {
  theme: Theme;
  density: Density;
  font: Font;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  setDensity: (d: Density) => void;
  setFont: (f: Font) => void;
};

const ThemeContext = createContext<ThemeState | null>(null);

const KEY = "chaman-portfolio-prefs";

function apply(theme: Theme, density: Density, font: Font) {
  const r = document.documentElement;
  r.setAttribute("data-theme", theme);
  r.setAttribute("data-density", density);
  r.setAttribute("data-font", font);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [density, setDensityState] = useState<Density>("regular");
  const [font, setFontState] = useState<Font>("helvetica");

  // hydrate from localStorage on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
      if (saved.theme) setThemeState(saved.theme);
      if (saved.density) setDensityState(saved.density);
      if (saved.font) setFontState(saved.font);
    } catch {}
  }, []);

  // apply + persist whenever prefs change
  useEffect(() => {
    apply(theme, density, font);
    try {
      localStorage.setItem(KEY, JSON.stringify({ theme, density, font }));
    } catch {}
  }, [theme, density, font]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggleTheme = useCallback(
    () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    [],
  );
  const setDensity = useCallback((d: Density) => setDensityState(d), []);
  const setFont = useCallback((f: Font) => setFontState(f), []);

  return (
    <ThemeContext.Provider
      value={{ theme, density, font, setTheme, toggleTheme, setDensity, setFont }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
