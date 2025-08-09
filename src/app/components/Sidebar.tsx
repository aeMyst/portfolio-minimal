"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  sideContainer,
  itemFade,
  bubbleIn,
  linksContainer,
  linkItem,
} from "./animations/sidebarVariants";
import SlideUpModal from "../components/SlideUpModal";

export default function Sidebar() {
  const sections = ["Home", "About", "Projects", "Experience"];
  const [activeSection, setActiveSection] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && setActiveSection(e.target.id)
        ),
      { threshold: 0.4 }
    );
    const els = sections.map((s) => document.getElementById(s.toLowerCase()));
    els.forEach((el) => el && obs.observe(el));
    return () => els.forEach((el) => el && obs.unobserve(el!));
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 h-full w-48 bg-base-300 text-white p-6 space-y-6 z-10"
        variants={sideContainer}
        initial="hidden"
        animate="show"
      >
        {/* Profile */}
        <motion.div
          className="flex flex-col items-center space-y-2 mb-6"
          variants={itemFade}
        >
          <motion.img
            src="peter_tran.jpg"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover shadow-lg border-2 border-primary"
            variants={bubbleIn}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
          <motion.p className="text-xl font-semibold" variants={itemFade}>
            Peter Tran
          </motion.p>
        </motion.div>

        {/* Links */}
        <motion.div variants={linksContainer} className="space-y-4 text-xl">
          {sections.map((section) => {
            const id = section.toLowerCase();
            const isActive = activeSection === id;
            return (
              <motion.a
                key={section}
                href={`#${id}`}
                variants={linkItem}
                className={`block transition ${
                  isActive ? "text-primary font-bold" : "hover:text-primary"
                }`}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.05, ease: "linear" },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {section}
              </motion.a>
            );
          })}
        </motion.div>

        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          className="btn btn-primary w-full mt-6"
          variants={itemFade}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Me
        </motion.button>
      </motion.nav>

      {/* Slide-up modal content */}
      <SlideUpModal
        open={open}
        onClose={() => setOpen(false)}
        title="Send Me An Email"
      >
        <form
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus("sending");

            const form = e.target as HTMLFormElement;
            const formData = {
              name: (form.elements.namedItem("name") as HTMLInputElement).value,
              email: (form.elements.namedItem("email") as HTMLInputElement)
                .value,
              message: (
                form.elements.namedItem("message") as HTMLTextAreaElement
              ).value,
            };

            const res = await fetch("/api/email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            });

            if (res.ok) {
              setStatus("sent");
              form.reset();
              setTimeout(() => {
                setStatus("idle");
                setOpen(false);
              }, 1200);
            } else {
              setStatus("error");
              setTimeout(() => setStatus("idle"), 3000);
            }
          }}
          className="space-y-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="label p-0">
              <span className="label-text text-sm font-medium">Your Name</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered border-primary w-full text-primary"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="label p-0">
              <span className="label-text text-sm font-medium">Your Email</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered border-primary w-full text-primary"
              required
            />
          </div>

          <div className="flex-1 min-h-0 flex flex-col gap-2">
            <label htmlFor="message" className="label p-0">
              <span className="label-text text-sm font-medium">Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter Your Message"
              className="textarea textarea-bordered border-primary w-full text-primary resize-none flex-1 min-h-0 h-full"
              required
              rows={16}
            />
          </div>
          <button
            type="submit"
            className={`btn btn-wide w-full text-black mx-auto block transition
              ${
                status === "idle"
                  ? "btn-primary"
                  : status === "sending"
                  ? "bg-secondary hover:bg-secondary-content"
                  : status === "sent"
                  ? "btn-success"
                  : "btn-error"
              }`}
            disabled={status === "sending"}
          >
            {status === "idle" && "Send"}
            {status === "sending" && "Sending..."}
            {status === "sent" && "Sent!"}
            {status === "error" && "Failed"}
          </button>
        </form>
      </SlideUpModal>
    </>
  );
}
