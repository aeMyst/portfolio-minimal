"use client";

import { motion } from "framer-motion";
import Hero3DModel from "../HeroThree";
import Social from "../SocialLinks";
import TypewriterLine from "../animations/typeWriter";
import { heroStagger, bubbleIn } from "../animations/heroVariants";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-base-100"
    >
      <motion.div
        className="card w-full max-w-5xl bg-base-300 shadow-[0_15px_60px_rgba(0,0,0,0.8)] p-6 md:flex-row flex-col items-center gap-6"
        variants={heroStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Left side */}
        <motion.div
          className="card-body items-center text-center md:items-start md:text-left flex-1"
          variants={heroStagger}
        >
          <motion.h1 className="text-6xl font-bold" variants={bubbleIn}>
            Peter Tran
          </motion.h1>

          <TypewriterLine
            phrases={[
              "Computer Science Student",
              "Data Analyst & Software Developer",
            ]}
            className="text-md text-white mt-2"
            typeSpeed={40}
            eraseSpeed={25}
            holdDelay={1000}
          />

          <motion.div className="mt-4" variants={bubbleIn}>
            <Social />
          </motion.div>

          <motion.a
            href="https://drive.google.com/file/d/1MpTdOlc0UjdoxwftWkdBFnG6INIoB1Zo/view?usp=sharing"
            target="_blank"
            className="btn btn-primary w-40 h-14 mt-6 text-md transition duration-300 hover:scale-105"
            variants={bubbleIn}
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Right side */}
        <motion.div
          className="flex justify-center items-center flex-1 w-full max-w-md"
          variants={bubbleIn}
        >
          <Hero3DModel />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
