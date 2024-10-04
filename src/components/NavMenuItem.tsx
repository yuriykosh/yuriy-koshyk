"use client";

import { useState } from "react";
import * as motion from "framer-motion/client";
import {
  dividerMotion,
  itemContentMotion,
  itemCoverMotion,
} from "@/utils/animations";
import Link from "next/link";

interface NavMenuItemProps {
  index: number;
  title: string;
  url: string;

  menuOpen: boolean;
  setMenuOpen: (_: boolean) => void;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({
  index,
  title,
  url,
  menuOpen,
  setMenuOpen,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.li
      className={`cursor-pointer py-4 min-[430px]:py-6 sm:py-8 relative w-full ${
        isLoading ? "pointer-events-none" : "pointer-events-auto"
      }`}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onAnimationComplete={() => setIsLoading(false)}
    >
      <div className="flex text-bg-primary items-center relative w-full">
        <motion.div
          className="absolute inset-0 bg-black"
          variants={itemCoverMotion}
        />
        <motion.span
          className="w-[4ch] text-xl sm:text-3xl md:text-4xl"
          variants={itemContentMotion}
        >
          {index.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </motion.span>
        <Link
          href={url}
          onClick={() => setMenuOpen(!menuOpen)}
          className="uppercase tracking-wide text-3xl sm:text-5xl md:text-6xl flex-1"
        >
          {title}
        </Link>
      </div>
      <motion.div
        className="absolute bottom-0 h-[1px] bg-sep-tertiary w-full origin-left"
        variants={dividerMotion}
      />
    </motion.li>
  );
};
export default NavMenuItem;
