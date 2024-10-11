"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface IntroVideoProps {
  url: string;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ url }) => {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-[80vh] overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <video
          src={url}
          autoPlay
          muted
          playsInline
          loop
          style={{ position: "absolute", objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
};
export default IntroVideo;
