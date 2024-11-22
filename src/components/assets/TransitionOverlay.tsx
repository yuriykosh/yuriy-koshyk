"use client";

import { useState, useEffect } from "react";
import { easings } from "@/utils/animations";
import LogoWithK from "./icons/LogoWithK";
import { motion } from "framer-motion";

const TransitionOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a delay of 3 seconds (3000 ms)
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide the component after the delay
    }, 3000);

    // Cleanup the timer if the component is unmounted before the delay
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return isVisible ? (
    <motion.div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-bg-tertiary"
      initial={{ y: 0 }}
      animate={{
        y: "100%",
        transition: {
          duration: 0.3,
          delay: 1,
          ease: easings.easeInOutQuint,
        },
      }}
    >
      <motion.div
        className="text-bg-primary w-6 h-6"
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: [1, 1.2, 0.6],
          opacity: [1, 1, 1, 0],
          transition: {
            duration: 0.5,
            delay: 0.5,
            ease: easings.easeInOutQuint,
          },
        }}
      >
        <LogoWithK />
      </motion.div>
    </motion.div>
  ) : null;
};
export default TransitionOverlay;
