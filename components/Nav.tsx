"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme, type Density, type Font } from "./ThemeProvider";
import { NAV_LINKS } from "@/lib/data";
import { ArrowUpRight, Sun, Moon, Sliders, Menu, Close } from "./Icons";

const DENSITIES: Density[] = ["compact", "regular", "comfy"];
const FONTS: { value: Font; label: string }[] = [
  { value: "helvetica", label: "Helvetica (default)" },
  { value: "grotesk", label: "Space Grotesk" },
  { value: "archivo", label: "Archivo (heavy)" },
  { value: "fraunces", label: "Fraunces (serif)" },
];

export default function Nav() {
  const { theme, toggleTheme, density, setDensity, font, setFont } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement | null>(null);

  // scrolled header border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // active section
  useEffect(() => {
    const els = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (e): e is HTMLElement => !!e,
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // close settings on outside click
  useEffect(() => {
    if (!settingsOpen) return;
    const onClick = (e: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [settingsOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
        <div className="wrap nav">
          <a href="/" className="brand">Chaman Adithya</a>
          <nav className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`/#${l.id}`} className={active === l.id ? "active" : ""}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-right">
            {/* Settings button — uncomment to re-enable
            <div className="settings-wrap" ref={settingsRef}>
              <button className="icon-btn" aria-label="Display settings"
                onClick={() => setSettingsOpen((v) => !v)}>
                <Sliders />
              </button>
              {settingsOpen && (
                <div className="settings-pop">
                  <div className="grp">
                    <label>Density</label>
                    <div className="seg">
                      {DENSITIES.map((d) => (
                        <button key={d} className={density === d ? "on" : ""}
                          onClick={() => setDensity(d)}>{d}</button>
                      ))}
                    </div>
                  </div>
                  <div className="grp">
                    <label>Headline font</label>
                    <select value={font} onChange={(e) => setFont(e.target.value as Font)}>
                      {FONTS.map((f) => (
                        <option key={f.value} value={f.value}>{f.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
            */}
            <button className="icon-btn" aria-label="Toggle dark mode" onClick={toggleTheme}>
              {theme === "dark" ? <Moon /> : <Sun />}
            </button>
            <a href="/#contact" className="btn">Let&apos;s Talk <ArrowUpRight /></a>
            <button className="icon-btn menu-toggle" aria-label="Open menu"
              onClick={() => setMenuOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="icon-btn close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <Close />
        </button>
        {NAV_LINKS.filter((l) => l.id !== "top").map((l) => (
          <a key={l.id} href={`/#${l.id}`} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
      </div>
    </>
  );
}
