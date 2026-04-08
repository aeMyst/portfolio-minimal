import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "../context/ThemeContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    gsap.to(".nav-logo, .nav-links, .nav-cta, .theme-toggle", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.3,
    });
  }, []);

  return (
    <nav id="mainNav" className={scrolled ? "scrolled" : ""}>
      <a href="#hero" className="nav-logo">
        Peter Tran
      </a>

      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title={`Switch to ${theme === "emerald" ? "Ice Blue" : "Emerald"} theme`}
          aria-label="Toggle color theme"
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-thumb" />
          </span>
          <span className="theme-toggle-label">
            {theme === "emerald" ? "🍀" : "💎"}
          </span>
        </button>

        <a
          href="https://petertran-portfolio.com/PeterTran_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
