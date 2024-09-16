'use client';

import { useEffect, useState } from "react";
import { palettes } from "./palettes";

export default function PaletteSwitcher() {
  const defaultPalette = Object.keys(palettes)[0] || "sunset";
  const [currentPalette, setCurrentPalette] = useState(defaultPalette);

  // Load the saved palette from local storage when the component mounts
  useEffect(() => {
    const savedPalette = localStorage.getItem("palette") || defaultPalette;
    setCurrentPalette(savedPalette);
  }, [defaultPalette]);

  // Apply the selected palette to the document's root and save it to local storage
  useEffect(() => {
    const root = document.documentElement;
    const palette = palettes[currentPalette];

    for (const [key, value] of Object.entries(palette)) {
      root.style.setProperty(key, value);
    }

    localStorage.setItem("palette", currentPalette);
  }, [currentPalette]);

  return (
    <div className="flex flex-row gap-10">
      {Object.keys(palettes).map((p) => (
        <button key={p} onClick={() => setCurrentPalette(p)}>
          {p}
        </button>
      ))}
    </div>
  );
}
