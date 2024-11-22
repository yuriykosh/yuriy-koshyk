"use client";

import { motion } from "framer-motion";
import { textRevealInViewportMotion } from "@/utils/animations";

interface FilterProps {
  activeTag: string;
  handleTag: (tag: string) => void;
  tagList: string[];
}

const Filter: React.FC<FilterProps> = ({ activeTag, handleTag, tagList }) => {
  return (
    <motion.ul className="flex gap-2 max-md:overflow-x-auto no-scrollbar">
      {tagList.map((tag, i) => (
        <motion.li
          key={i}
          variants={textRevealInViewportMotion(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button
            type="button"
            onClick={() => handleTag(tag)}
            className={`py-1 px-2.5 rounded-full border text-sm  font-medium cursor-pointer transition duration-200
             ${
               activeTag == tag
                 ? "text-fg-primary border-fg-primary"
                 : "text-fg-secondary border-fg-secondary/80 hover:border-fg-secondary"
             }`}
          >
            {tag}
          </button>
        </motion.li>
      ))}
    </motion.ul>
  );
};
export default Filter;
