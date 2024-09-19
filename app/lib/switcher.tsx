"use client";

import "@/app/ui/styles/switcher.scss";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MdMenu } from "react-icons/md";
import { palettes } from "./palettes";

/**
 * Shows the available palettes and applies them
 *
 * Latest selection is recorded in local storage
 */
export default function PaletteSwitcher() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

  // Close the dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        event.target &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="pe-switcher-container flex flex-row justify-between px-1 tracking-widest flex-wrap absolute w-screen z-50">
      <div
        ref={dropdownRef}
        className="relative flex flex-row items-center flex-wrap"
      >
        {/* Dropdown button for small screens */}
        <button className="block md:hidden" onClick={toggleDropdown}>
          <MdMenu />
        </button>

        {/* Dropdown menu for small screens */}
        {isDropdownOpen && (
          <div className="absolute top-full md:hidden left-[-0.25rem]">
            {Object.keys(palettes).map((p) => (
              <button
                aria-label={`Switch to ${p} palette`}
                key={p}
                onClick={() => {
                  setCurrentPalette(p);
                  toggleDropdown(); // Close dropdown after selection
                }}
                className="block px-4 py-2 text-left w-full"
                style={{
                  background: p === currentPalette ? "slategrey" : "black",
                }}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {/* Items on larger screens */}
        <div className="hidden md:flex flex-row gap-x-10 flex-wrap">
          {Object.keys(palettes).map((p) => (
            <button
              aria-label={`switch to ${p} palette`}
              key={p}
              onClick={() => setCurrentPalette(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <Link
        className="pe-website-link flex justify-self-end"
        href="https://manuelrosello.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        manuel // rosello
      </Link>
    </div>
  );
}
