"use client";

import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const sections = ["Home", "About", "Projects", "Experience"];
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });

    const sectionElements = sections.map((section) =>
      document.getElementById(section.toLowerCase())
    );

    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 h-full w-48 bg-base-300 text-white p-6 space-y-6">
      {/* Profile section */}
      <div className="flex flex-col items-center space-y-2 mb-6">
        <img
          src="peter_tran.jpg"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover shadow-lg border-2 border-primary"
        />
        <p className="text-lg font-semibold text-white">Peter Tran</p>
      </div>

      {/* Navigation tools */}
      {sections.map((section) => {
        const sectionId = section.toLowerCase();
        const isActive = activeSection === sectionId;
        return (
          <a
            key={section}
            href={`#${sectionId}`}
            className={`block transition ${
              isActive ? "text-primary font-bold" : "hover:text-primary"
            }`}
          >
            {section}
          </a>
        );
      })}
    </nav>
  );
}
