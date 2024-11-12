"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { libraryData, tagList, LibraryItem } from "@/utils/data";
import Filter from "../assets/Filter";
import Item from "./Item";

const LibraryContent = () => {
  const [activeTag, setActiveTag] = useState<string>("All");

  const handleTag = (tag: string) => {
    setActiveTag(tag);
  };

  const filterByTag = (items: LibraryItem[]) => {
    if (activeTag === "All") {
      return items;
    }
    return items.filter((item) => item.tags.includes(activeTag));
  };

  const filteredItems = filterByTag(libraryData);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 justify-between w-full p-6">
        <h2
          className="flex items-center text-sm text-fg-primary font-medium 
          before:inline-block before:w-[1ch] before:h-[1ch] before:mr-2 before:[clip-path:polygon(100%_0%,0%_100%,100%_100%)] before:bg-fg-primary"
        >
          Library
        </h2>

        <Filter tagList={tagList} activeTag={activeTag} handleTag={handleTag} />
      </div>
      <ul className="grid grid-cols-1">
        <AnimatePresence>
          {filteredItems.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Item index={i} {...item} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
};

export default LibraryContent;
