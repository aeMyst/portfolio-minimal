import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useThreeScene } from "../hooks/Usethreescene";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  useThreeScene(canvasRef, theme);

  useEffect(() => {
    gsap.set(".hero-eyebrow", { opacity: 0, y: 20 });
    gsap.set(".hero-name", { opacity: 0, y: 30 });
    gsap.set(".hero-tagline", { opacity: 0, y: 20 });
    gsap.set(".hero-scroll", { opacity: 0 });
    gsap.set(".nav-logo, .nav-links, .nav-right", { opacity: 0, y: -10 });

    // Hero entrance timeline
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

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
