"use client";

import Sidebar from "../app/components/Sidebar";
import HeroSection from "../app/components/sections/Hero";
import AboutSection from "../app/components/sections/About";
import ProjectsSection from "../app/components/sections/Projects";
import ExperienceSection from "./components/sections/Experience";
import Footer from "../app/components/Footer";
import ThemeToggle from "../app/components/ThemeToggle";

export default function LandingPage() {
  return (
    <main
      data-theme="coffee"
      className="flex relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="shooting-stars w-full h-full" />
      </div>
      <ThemeToggle />
      <Sidebar />
      <div className="w-full md:ml-48 flex flex-col gap-32 px-4 md:px-0">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <Footer />
      </div>
    </main>
  );
}
