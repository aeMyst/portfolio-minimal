import { Variants } from "framer-motion";

export const sideContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.10,
      delayChildren: 0.20,
    },
  },
};

export const itemFade: Variants = {
  hidden: { opacity: 0, y: 8 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" as const } },
};

export const bubbleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  show:   { opacity: 1, scale: 1,   y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export const linksContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export const linkItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" as const } },
};
