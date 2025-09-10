"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface DecorationShapeProps {
  testimonialsRef: React.RefObject<HTMLUListElement>;
}

const DecorationShape = ({ testimonialsRef }: DecorationShapeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to testimonials section
  const { scrollYProgress } = useScroll({
    target: testimonialsRef,
    offset: ["start center", "end center"], // starts when first item hits center, ends when last hits center
  });

  // Circle animation (position)
  const circleY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]); // bottom → top
  const circleX = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]); // stays left aligned

  // Shape clip-path animation
  const clipPath = useTransform(scrollYProgress, (progress) => {
    const startPoints = [
      [0, 0], // 0 0
      [100, 80], // 100% 80%
      [100, 0], // 100% 0
    ];
    const endPoints = [
      [100, 0], // 100% 0
      [20, 100], // 20% 100%
      [100, 100], // 100% 100%
    ];

    const interpolatedPoints = startPoints.map(([sx, sy], i) => {
      const [ex, ey] = endPoints[i];
      const x = sx + (ex - sx) * progress;
      const y = sy + (ey - sy) * progress;
      return `${x}% ${y}%`;
    });

    return `polygon(${interpolatedPoints.join(", ")})`;
  });

  return (
    <div
      ref={containerRef}
      className="sticky top-24 max-md:hidden ml-12 mr-6 col-span-3 aspect-square"
      role="presentation"
      aria-hidden="true"
    >
      <div className="relative w-full h-full">
        {/* Moving circle */}
        <motion.div
          className="absolute w-40 h-40 lg:w-64 lg:h-64 bg-bg-tertiary rounded-full"
          style={{
            top: circleY, // animate Y
            left: circleX, // animate X (kept fixed at 0%)
          }}
        />

        {/* Polygon shape */}
        <motion.div
          className="w-full h-full bg-bg-tertiary"
          style={{ clipPath }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
    </div>
  );
};

export default DecorationShape;
