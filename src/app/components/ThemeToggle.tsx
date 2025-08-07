"use client";

import React, { useEffect, useState } from "react";

const themes = ["coffee", "luxury"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (!theme) return;
    const root = document.querySelector("main[data-theme]");
    if (root) {
      root.setAttribute("data-theme", theme);
    }
  }, [theme]);

  // Set initial theme on mount
  useEffect(() => {
    setTheme("coffee");
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  if (!theme) return null;

  return (
    <label className="flex cursor-pointer gap-2 fixed top-4 right-4 z-50 items-center">
      {/* Sun Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>

      {/* Toggle Switch */}
      <input
        type="checkbox"
        className="toggle"
        checked={theme === "luxury"}
        onChange={toggleTheme}
      />

      {/* Moon Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </label>
  );
}
