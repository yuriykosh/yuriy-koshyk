"use client";

import { TOCContext } from "@/utils/TOCContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContext, useState } from "react";

const HIDDEN_OFFSET = 0.05;

const TableOfContents = () => {
  const { sections, activeSection } = useContext(TOCContext);

  const { scrollYProgress } = useScroll();
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [showTOC, setShowTOC] = useState(activeSection >= 0);
  scrollYProgress.on("change", (val) => {
    setShowTOC(
      activeSection >= 0 && val >= HIDDEN_OFFSET && val <= 1 - HIDDEN_OFFSET
    );
  });

  return (
    <div className="h-full px-4">
      <motion.div
        className="sticky top-20 h-[80vh] py-32 flex gap-4 mix-blend-difference"
        initial={{ opacity: 0, display: "none" }}
        animate={{
          opacity: showTOC ? 1 : 0,
          display: showTOC ? "flex" : "none",
        }}
      >
        <div className="h-full w-0.5 bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            className="bg-neutral-300 w-full origin-top"
            style={{ height: progressHeight }}
          />
        </div>
        <div className="hidden lg:flex flex-col gap-6 text-sm xl:text-base">
          {sections.map(({ id, title }) => (
            <span
              key={id}
              className={`cursor-pointer transition-colors duration-200 ${
                activeSection === id ? "text-neutral-300" : "text-neutral-800"
              }`}
              onClick={() =>
                document
                  .getElementById(`section-${id}`)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {title}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default TableOfContents;
