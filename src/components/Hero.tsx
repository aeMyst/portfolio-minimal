import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useThreeScene } from "../hooks/Usethreescene";
import { useTheme } from "../context/ThemeContext";

function IconGitHub() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  useThreeScene(canvasRef, theme);

  useEffect(() => {
    gsap.set(".hero-eyebrow", { opacity: 0, y: 20 });
    gsap.set(".hero-name", { opacity: 0, y: 30 });
    gsap.set(".hero-tagline", { opacity: 0, y: 20 });
    gsap.set(".hero-scroll", { opacity: 0 });
    gsap.set(".hero-socials", { opacity: 0, x: -16 });
    gsap.set(".nav-logo, .nav-links, .nav-right", { opacity: 0, y: -10 });

    gsap
      .timeline({ delay: 0.3 })
      .to(
        ".hero-eyebrow",
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0,
      )
      .to(
        ".hero-name",
        { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
        0.15,
      )
      .to(
        ".hero-tagline",
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.45,
      )
      .to(
        ".hero-scroll",
        { opacity: 1, duration: 0.6, ease: "power2.out" },
        0.9,
      )
      .to(
        ".hero-socials",
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
        0.7,
      )
      .to(
        ".nav-logo, .nav-links, .nav-right",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        0.3,
      );
  }, []);

  return (
    <section id="hero">
      <canvas id="webGLApp" ref={canvasRef} />

      <div className="hero-content">
        <p className="hero-eyebrow">Junior Data Analyst &amp; Developer</p>
        <h1 className="hero-name">
          Peter
          <br />
          <em>Tran</em>
        </h1>
        <p className="hero-tagline">
          Computer Science · University of Calgary
          <br />
          Incoming Data Analyst Intern @ Enbridge
        </p>
      </div>

      {/* Social links — left side, vertically centered */}
      <div className="hero-socials">
        <a
          href="https://github.com/aeMyst"
          target="_blank"
          rel="noreferrer"
          className="hero-social-link"
          aria-label="GitHub"
        >
          <IconGitHub />
        </a>
        <a
          href="https://www.instagram.com/peterthetran/"
          target="_blank"
          rel="noreferrer"
          className="hero-social-link"
          aria-label="Instagram"
        >
          <IconInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/peter-tran-portal/"
          target="_blank"
          rel="noreferrer"
          className="hero-social-link"
          aria-label="LinkedIn"
        >
          <IconLinkedIn />
        </a>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
