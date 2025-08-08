// /animations/experienceVariants.ts
import { Variants } from "framer-motion";

export const sectionStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.08, staggerChildren: 0.12 },
  },
};

export const rowStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export const cardPop: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 10 },
  show:   { opacity: 1, scale: 1,      y: 0,  transition: { duration: 0.35, ease: "easeOut" as const } },
};

export const dotPulse: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  show:   { scale: 1,   opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
};
