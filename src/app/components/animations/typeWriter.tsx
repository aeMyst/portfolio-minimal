"use client";

import { motion, Variants, useInView } from "framer-motion";
import React, { useEffect, useRef, useState, useMemo } from "react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
};

type Phase = "typing" | "holding" | "erasing";

export default function TypewriterLine({
  phrases = ["Computer Science Student", "Data Analyst & Software Developer"],
  className = "",
  typeSpeed = 40,
  eraseSpeed = 25,
  holdDelay = 1000,
}: {
  phrases?: string[];
  className?: string;
  typeSpeed?: number;
  eraseSpeed?: number;
  holdDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  const [phase, setPhase] = useState<Phase>("typing");
  const [index, setIndex] = useState(0);
  const [charPos, setCharPos] = useState(0);
  const [text, setText] = useState("");

  // longest phrase for placeholder
  const longest = useMemo(
    () => phrases.reduce((a, b) => (a.length >= b.length ? a : b), ""),
    [phrases]
  );

  useEffect(() => {
    if (!inView) return;
    let t: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charPos < phrases[index].length) {
        t = setTimeout(() => {
          setText(phrases[index].slice(0, charPos + 1));
          setCharPos(charPos + 1);
        }, typeSpeed);
      } else {
        t = setTimeout(() => setPhase("holding"), holdDelay);
      }
    } else if (phase === "holding") {
      t = setTimeout(() => setPhase("erasing"), holdDelay);
    } else if (phase === "erasing") {
      if (charPos > 0) {
        t = setTimeout(() => {
          setText(phrases[index].slice(0, charPos - 1));
          setCharPos(charPos - 1);
        }, eraseSpeed);
      } else {
        setIndex((index + 1) % phrases.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(t);
  }, [
    phase,
    charPos,
    index,
    phrases,
    typeSpeed,
    eraseSpeed,
    holdDelay,
    inView,
  ]);

  return (
    <motion.span
      ref={ref}
      className={`grid whitespace-nowrap leading-6 ${className}`}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {/* Invisible placeholder reserves width/height of the longest phrase */}
      <span className="invisible col-start-1 row-start-1">{longest}</span>

      {/* Actual animated text sits on top in the same grid cell */}
      <span className="col-start-1 row-start-1 inline-flex items-center">
        {text}
        <motion.span
          aria-hidden
          className="ml-1 inline-block w-[2px] h-[1em] align-middle bg-white/80"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </span>
    </motion.span>
  );
}
