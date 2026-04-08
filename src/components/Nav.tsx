import { useEffect, useState } from "react";
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

  // Nav entrance animation is handled by Hero.tsx timeline
  // to match the original HTML where nav animates in with the hero

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
          <a href="#skills">Skills</a>
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
          aria-label={`Switch to ${theme === "emerald" ? "Ice Blue" : "Emerald"} theme`}
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-thumb" />
          </span>
          <span className="theme-toggle-icon">
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
