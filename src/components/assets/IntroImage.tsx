"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface IntroImageProps {
  url: string;
  alt: string;
}

const IntroImage: React.FC<IntroImageProps> = ({ url, alt }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setIsReady(true); // Set the state to true once the ref is ready
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: isReady ? containerRef : undefined,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-[76vh] overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={url}
          fill
          sizes="100vw"
          quality={100}
          priority
          alt={alt}
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
};
export default IntroImage;
