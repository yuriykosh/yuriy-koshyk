"use client";

import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface CardProps {
  i: number;
  title: string;
  description: string;
  year: number;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  year,
  src,
  url,
  // color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  console.log("This is :" + progress);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          //   backgroundColor: color,
          scale,
          top: `calc(-2vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative top-[25%] h-[80vh] w-[96%] bg-bg-primary origin-top"
      >
        <div className="flex flex-col h-full gap-1">
          <Link href={url} className="relative w-full h-full overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                quality={100}
                src={`/images/${src}`}
                alt="image"
                className="object-cover"
              />
            </motion.div>
          </Link>
          <div className="w-full grid grid-cols-3 relative py-2 text-sm font-semibold text-fg-secondary">
            <ul>
              <li className="text-fg-primary">{title}</li>
              <li>iOS & Android, B2C SaaS</li>
            </ul>
            <p className="font-medium">{description}</p>
            <p className="justify-self-end">{year}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Card;
