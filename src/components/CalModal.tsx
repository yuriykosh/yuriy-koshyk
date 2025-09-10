"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CalModalProps {
  calLink: string; // e.g. "yuriy-koshyk/default"
  width?: string; // desktop width
  height?: string; // desktop height
}

export default function CalModal({
  calLink,
  width = "400px",
  height = "500px",
}: CalModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setOpen(true)}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Book a Call
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[90vw] max-h-[90vh]"
              style={{ width, height }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              <iframe
                src={`https://cal.com/${calLink}?embed_domain=${
                  typeof window !== "undefined" ? window.location.hostname : ""
                }&embed_type=iframe`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="camera; microphone; autoplay"
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
