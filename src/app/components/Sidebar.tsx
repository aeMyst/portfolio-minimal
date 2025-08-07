"use client";

import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const sections = ["Home", "About", "Projects", "Experience"];
  const [activeSection, setActiveSection] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    });

    const sectionElements = sections.map((section) =>
      document.getElementById(section.toLowerCase())
    );

    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 h-full w-48 bg-base-300 text-white p-6 space-y-6 z-10">
        {/* Profile section */}
        <div className="flex flex-col items-center space-y-2 mb-6">
          <img
            src="peter_tran.jpg"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover shadow-lg border-2 border-primary"
          />
          <p className="text-lg font-semibold">Peter Tran</p>
        </div>

        {/* Navigation tools */}
        {sections.map((section) => {
          const sectionId = section.toLowerCase();
          const isActive = activeSection === sectionId;
          return (
            <a
              key={section}
              href={`#${sectionId}`}
              className={`block transition ${
                isActive ? "text-primary font-bold" : "hover:text-primary"
              }`}
            >
              {section}
            </a>
          );
        })}

        {/* Contact button */}
        <label
          htmlFor="contact_modal"
          className="btn btn-primary w-full mt-6 transition duration-300 hover:scale-105"
        >
          Contact Me
        </label>
      </nav>

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
              className="input input-bordered border-primary w-full text-primary "
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="textarea textarea-bordered border-primary w-full text-primary"
              required
            ></textarea>

            <button
              type="submit"
              className={`btn btn-wide w-full text-black mx-auto block transition duration-300 hover:scale-105
              ${
                status === "idle"
                  ? "btn-primary"
                  : status === "sending"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : status === "sent"
                  ? "btn-success"
                  : "btn-error"
              }
              `}
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
