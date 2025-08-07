"use client";

import Hero3DModel from "../HeroThree";
import Social from "../SocialLinks";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-base-100"
    >
      <div className="card w-full max-w-5xl bg-base-300 shadow-[0_15px_60px_rgba(0,0,0,0.8)] p-6 md:flex-row flex-col items-center gap-6">
        {/* Left side: text content */}
        <div className="card-body items-center text-center md:items-start md:text-left flex-1">
          <h1 className="text-6xl font-bold">Peter Tran</h1>
          <p className="text-md text-white mt-2">
            Computer Science Student | Data Analyst & Software Developer
          </p>
          <div className="mt-4">
            <Social />
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            className="btn btn-primary w-40 h-14 mt-6 text-md transition duration-300 hover:scale-105"
          >
            View Resume
          </a>
        </div>

        {/* Right side: 3D model */}
        <div className="flex justify-center items-center flex-1 w-full max-w-md">
          <Hero3DModel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
