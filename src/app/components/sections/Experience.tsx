"use client";

import { motion } from "framer-motion";
import {
  sectionStagger,
  rowStagger,
  slideLeft,
  slideRight,
  cardPop,
  dotPulse,
} from "../animations/experienceVariants";

type ExperienceItem = {
  year: string;
  role: string;
  org?: string;
  desc: string;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    year: "May 2025–Present",
    role: "Technology Leader",
    org: "DSMLC (UCalgary)",
    desc: "Led sprint discussions. Responsible for website maintenance and improvements. Developed internal systems for club events.",
  },
  {
    year: "September 2024 – February 2025",
    role: "Server/Bartender",
    org: "Roy's Korean Kitchen",
    desc: "Compiled end-of-day reports and analyzed relevant sales data delivering concise summaries to supervisors.",
  },
  {
    year: "June 2022 – Feb 2024",
    role: "Server",
    org: "Baekjeong Korean BBQ House",
    desc: "Conducted quality checks, managed inventory restocking, and documented tasks for the next shift.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-base-100 flex flex-col items-center px-4 py-16"
    >
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.35 }}
      >
        EXPERIENCE
      </motion.h2>

      {/* Parent stagger for whole list */}
      <motion.ul
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-full max-w-4xl"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        {EXPERIENCES.map((item, idx) => {
          const isStart = idx % 2 === 0; // alternate sides
          const sideVariant = isStart ? slideLeft : slideRight;

          return (
            <motion.li key={idx} variants={rowStagger}>
              {idx !== 0 && <hr />}

              {/* dot */}
              <div className="timeline-middle">
                <motion.span variants={dotPulse} className="inline-block">
                  <CheckIcon />
                </motion.span>
              </div>

              {/* side content */}
              <motion.div
                className={
                  (isStart ? "timeline-start md:text-end" : "timeline-end") +
                  " md:mb-10 mb-8"
                }
                variants={sideVariant}
              >
                <motion.div
                  className="card bg-base-200/60 shadow-md border border-base-300 transition duration-300 hover:scale-[1.02]"
                  variants={cardPop}
                >
                  <div className="card-body p-5 md:p-6">
                    <time className="font-mono italic text-sm opacity-70">
                      {item.year}
                    </time>

                    <h3 className="text-lg font-black mt-1">
                      {item.role}
                      {item.org ? (
                        <span className="font-normal opacity-90">
                          {" "}
                          · {item.org}
                        </span>
                      ) : null}
                    </h3>

                    <p className="mt-2 text-sm text-white leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <hr />
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default ExperienceSection;
