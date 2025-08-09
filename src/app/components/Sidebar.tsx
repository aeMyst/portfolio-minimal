"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  sideContainer,
  itemFade,
  bubbleIn,
  linksContainer,
  linkItem,
} from "./animations/sidebarVariants";
import SlideUpModal from "../components/SlideUpModal";

export default function Sidebar() {
  const SECTIONS = ["Home", "About", "Projects", "Experience"];
  const [activeSection, setActiveSection] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && setActiveSection(e.target.id)
        ),
      { threshold: 0.4 }
    );
    const els = SECTIONS.map((s) =>
      document.getElementById(s.toLowerCase())
    ).filter(Boolean) as Element[];
    els.forEach((el) => obs.observe(el));
    return () => {
      els.forEach((el) => obs.unobserve(el));
      obs.disconnect();
    };
  }, []);

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <motion.div variants={linksContainer} className="space-y-4 text-xl">
      {SECTIONS.map((section) => {
        const id = section.toLowerCase();
        const isActive = activeSection === id;
        return (
          <motion.a
            key={section}
            href={`#${id}`}
            onClick={onClick}
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
  );

  return (
    <>
      <motion.nav
        className="hidden md:flex fixed top-0 left-0 h-full w-48 bg-base-300 text-white p-6 z-20 flex-col space-y-6"
        variants={sideContainer}
        initial={false}
        animate="show"
      >
        <motion.div
          className="flex flex-col items-center space-y-2 mb-8"
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

        <NavLinks />

        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          className="btn btn-primary w-full mt-2"
          variants={itemFade}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Me
        </motion.button>
      </motion.nav>

      <button
        aria-label="Toggle menu"
        className="fixed top-4 left-4 z-[70] btn btn-circle md:hidden"
        onClick={() => setDrawerOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            key="mobile-menu-overlay"
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            />

            {/* Panel */}
            <motion.aside
              key="panel"
              initial={{ x: -288, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -288, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="absolute left-0 top-0 h-full w-72 bg-base-300 text-white p-6 flex flex-col space-y-6 shadow-xl z-[61]"
            >
              {/* Profile */}
              <motion.div
                className="flex items-center justify-center gap-3"
                variants={itemFade}
                initial="hidden"
                animate="show"
              >
                <motion.img
                  src="peter_tran.jpg"
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-2 border-primary"
                  variants={bubbleIn}
                />
              </motion.div>
              <motion.div
                className="flex items-center justify-center gap-3"
                variants={itemFade}
                initial="hidden"
                animate="show"
              >
                <motion.p className="text-xl font-semibold" variants={itemFade}>
                  Peter Tran
                </motion.p>
              </motion.div>

              {/* Links (close on click) */}
              <div>
                <NavLinks onClick={() => setDrawerOpen(false)} />
              </div>

              <motion.button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  setOpen(true);
                }}
                className="btn btn-primary w-full"
                variants={itemFade}
                initial="hidden"
                animate="show"
              >
                Contact Me
              </motion.button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

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
