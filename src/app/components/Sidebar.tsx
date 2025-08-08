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

export default function Sidebar() {
  const sections = ["Home", "About", "Projects", "Experience"];
  const [activeSection, setActiveSection] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });

    const els = sections.map((s) => document.getElementById(s.toLowerCase()));
    els.forEach((el) => el && observer.observe(el));
    return () => els.forEach((el) => el && observer.unobserve(el!));
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 h-full w-48 bg-base-300 text-white p-6 space-y-6 z-10"
        variants={sideContainer}
        initial="hidden"
        animate="show"
      >
        {/* Profile section */}
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

        <motion.div variants={linksContainer} className="space-y-2 text-xl">
          {sections.map((section) => {
            const sectionId = section.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={section}
                href={`#${sectionId}`}
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

        {/* Contact button */}
        <motion.label
          htmlFor="contact_modal"
          className="btn btn-primary w-full mt-6"
          variants={itemFade}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Me
        </motion.label>
      </motion.nav>

      <input type="checkbox" id="contact_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box relative">
          <label
            htmlFor="contact_modal"
            className="text-primary btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-primary font-bold text-lg mb-4">
            Send Me An Email
          </h3>

          <form
            method="POST"
            onSubmit={async (e) => {
              e.preventDefault();
              setStatus("sending");
              const form = e.target as HTMLFormElement;
              const formData = {
                name: (form.elements.namedItem("name") as HTMLInputElement)
                  .value,
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
                  (
                    document.getElementById("contact_modal") as HTMLInputElement
                  ).checked = false;
                }, 2000);
              } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
              }
            }}
            className="space-y-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered border-primary w-full text-primary"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered border-primary w-full text-primary"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered border-primary w-full text-primary"
              required
            />
            <button
              type="submit"
              className={`btn btn-wide w-full text-black mx-auto block transition duration-300 hover:scale-105
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
        </div>
      </div>
    </>
  );
}
