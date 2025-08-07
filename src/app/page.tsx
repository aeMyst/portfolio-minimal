"use client";

import Sidebar from "../app/components/Sidebar";
import HeroSection from "../app/components/sections/Hero";
import AboutSection from "../app/components/sections/About";
import ProjectsSection from "../app/components/sections/Projects";
import ExperienceSection from "./components/sections/Experience";
import Footer from "../app/components/Footer";

export default function LandingPage() {
  return (
    <main
      data-theme="coffee"
      className="flex relative min-h-screen overflow-hidden"
    >
      <Sidebar />
      <div className="ml-48 w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <Footer />
      </div>
    </main>
  );
}
