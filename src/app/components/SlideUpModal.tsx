"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

export default function SlideUpModal({
  open,
  onClose,
  children,
  title,
}: Props) {
  // ESC to close + lock scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[2147483647]" aria-modal role="dialog">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Bottom sheet panel */}
          <motion.div
            className="
              fixed left-0 right-0 bottom-0 mx-auto
              w-full max-w-3xl
              h-[95vh] sm:h-[85vh]
              bg-base-100 text-base-content
              rounded-t-2xl shadow-2xl
              p-5 sm:p-6
              flex flex-col 
            "
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.08}
            onDragEnd={(_, info) => {
              if (info.offset.y > 120 || info.velocity.y > 800) onClose();
            }}
          >
            {/* Grab handle + close */}
            <div className="flex items-center justify-between mb-3">
              <div className="mx-auto h-1.5 w-12 rounded-full bg-base-300" />
              <button
                onClick={onClose}
                className="btn btn-sm btn-ghost absolute right-3 top-3"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {title && <h3 className="text-xl font-bold mb-3">{title}</h3>}

            <div className="flex-1 min-h-0 pr-1">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
