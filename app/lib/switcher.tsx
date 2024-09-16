"use client";

import { useEffect, useState } from "react";
import { palettes } from "./palettes";

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
    <div className="flex flex-row gap-10 px-1">
      {Object.keys(palettes).map((p) => (
        <button key={p} onClick={() => setCurrentPalette(p)}>
          {p}
        </button>
      ))}
    </div>
  );
}
