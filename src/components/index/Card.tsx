"use client";

import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Using Next.js App Router for pathname

interface CardProps {
  i: number;
  title: string;
  tags: string;
  description: string;
  year: number;
  src: string;
  url: string;
  color: string;
  linkStyles?: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  tags,
  description,
  year,
  src,
  url,
  // color,
  linkStyles,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [2, 1]
  );
  const scale: MotionValue<number> = useTransform(progress, range, [
    1,
    targetScale,
  ]);

  const pathname = usePathname(); // Track pathname for scroll reset

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  const isExternal = url.includes("http");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-2vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative top-[25%] h-[80vh] w-[calc(100%-24px)] bg-bg-primary origin-top"
      >
        <div className="flex flex-col h-full gap-1">
          <Link
            href={url}
            onClick={() => window.scrollTo(0, 0)} // Ensure scroll is reset on click
            onMouseOver={handlePlay}
            onFocus={handlePlay}
            {...(isExternal && {
              rel: "noopener noreferrer",
              target: "_blank",
            })}
            className={`relative w-full h-full overflow-hidden ${linkStyles}`}
          >
            {/* <motion.div
              className="relative w-full h-full"
              style={{ scale: imageScale }}
            > */}
            {src.includes("http") ? (
              <motion.div
                className="relative w-full h-full bg-bg-secondary"
                style={{ scale: imageScale }}
              >
                <video
                  ref={videoRef}
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                >
                  <source src={src} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            ) : (
              <motion.div
                className="relative w-full h-full"
                style={{ scale: imageScale }}
              >
                <Image
                  fill
                  quality={100}
                  sizes="100vw"
                  src={src}
                  alt={`${title} project cover`}
                  className="object-cover"
                />
              </motion.div>
            )}
            {/* </motion.div> */}
          </Link>
          <div className="w-full grid grid-cols-3 grid-rows-2 md:grid-rows-1 gap-4 relative py-2 text-sm font-medium text-fg-secondary">
            <ul className="col-span-2 md:col-span-1 ">
              <li className="text-fg-primary">{title}</li>
              <li>{tags}</li>
            </ul>
            <p className="col-span-3 md:col-span-1 max-md:order-last font-medium">
              {description}
            </p>
            <p className="justify-self-end">{year}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
