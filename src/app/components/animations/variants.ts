import { Variants } from "framer-motion";

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,     
      staggerChildren: 0.2,  
    },
  },
};

export const innerStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export const pillItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" as const } }
};

// Generic fade-in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } }
};


