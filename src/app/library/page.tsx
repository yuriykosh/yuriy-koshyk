"use client";

import Divider from "@/components/assets/Divider";
import Item from "@/components/library/Item";
import { dividerMotion, textRevealMotion } from "@/utils/animations";
import { motion } from "framer-motion";

export default function Library() {
  return (
    <main>
      <motion.section
        className="w-full mt-[35vh] px-6 text-4xl md:text-[3.5rem] leading-tight tracking-tight font-medium"
        initial="initial"
        animate="animate"
      >
        <motion.h1 className="mb-20" variants={textRevealMotion(0)}>
          A thoughtfully selected library of resources spanning multiple fields.
          Discover something new, and if you&#39;d like to contribute, I&#39;d
          love to hear from you!
        </motion.h1>
        <motion.div className="w-full origin-left" variants={dividerMotion}>
          <Divider />
        </motion.div>
      </motion.section>

      <section className="py-6 md:mt-4 mb-24">
        <div className="flex flex-col md:flex-row gap-6 justify-between w-full p-6">
          <h2
            className="flex items-center text-sm text-fg-primary font-semibold 
          before:inline-block before:w-[1ch] before:h-[1ch] before:mr-2 before:[clip-path:polygon(100%_0%,0%_100%,100%_100%)] before:bg-fg-primary"
          >
            Library
          </h2>
          <ul className="flex gap-2 max-md:overflow-x-auto no-scrollbar">
            {[
              ["All"],
              ["Design"],
              ["Engineering"],
              ["Product"],
              ["Tools"],
              ["Books"],
            ].map(([category], i) => (
              <li
                key={i}
                className="py-1 px-2.5 rounded-full border border-fg-secondary/80 text-sm text-fg-secondary font-semibold  first:text-fg-primary first:border-fg-primary"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid grid-cols-1">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ul>

        <div className="px-6">
          <Divider className="mb-20" />
          <h3 className="mb-6 ml-2 text-sm font-semibold text-fg-primary">
            Feel free to check out music I like
          </h3>
          <iframe
            title="deezer-widget"
            src="https://widget.deezer.com/widget/dark/playlist/3415322182"
            // frameborder="0"
            // allowtransparency="true"
            allow="encrypted-media; clipboard-write"
            className="w-full h-[75vh] md:h-[45vh]"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
