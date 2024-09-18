"use client";

import "@/app/ui/styles/switcher.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { palettes } from "./palettes";

/**
 * Shows the available palettes and applies them
 *
 * Latest selection is recorded in local storage
 */
export default function PaletteSwitcher() {
  const defaultPalette = Object.keys(palettes)[0] || "sunset";
  const [currentPalette, setCurrentPalette] = useState(() => {
    return localStorage.getItem("palette") || defaultPalette;
  });

  // Apply the selected palette to the document's root and save it to local storage
  useEffect(() => {
    const root = document.documentElement;
    const palette = palettes[currentPalette] || defaultPalette;

    for (const [key, value] of Object.entries(palette)) {
      root.style.setProperty(key, value);
    }

    localStorage.setItem("palette", currentPalette);
  }, [currentPalette, defaultPalette]);

  return (
    <div className="pe-switcher-container flex flex-row justify-between px-1 tracking-widest flex-wrap absolute w-screen z-50">
      <div className="pe-switcher-palettes flex flex-row gap-x-10 flex-wrap">
        {Object.keys(palettes).map((p) => (
          <button
            aria-label="toggle spotify player"
            key={p}
            onClick={() => setCurrentPalette(p)}
          >
            {p}
          </button>
        ))}
      </div>
      <Link
        className="pe-website-link flex justify-self-end"
        // href="https://www.manuelrosello.com"
        href="https://manuelrosello.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        manuel // rosello
      </Link>
    </div>
  );
}
