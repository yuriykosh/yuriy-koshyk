import * as motion from "framer-motion/client";

import Divider from "@/components/assets/Divider";
import { dividerMotion, textRevealMotion } from "@/utils/animations";
import { playgroundItems } from "@/utils/data";
import Item from "@/components/playground/Item";
// import { Suspense } from "react";
// import PostHogPageView from "@/components/posthog/post-hog-page-view";

export default function Playground() {
  return (
    <>
      {/* <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense> */}
      <main>
        <motion.section
          className="w-full mt-[35vh] px-6 text-4xl md:text-[3.5rem] leading-tight tracking-tight font-medium"
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="mb-20" variants={textRevealMotion(0)}>
            Welcome to my playground. Here you can find some extra staff I do.
          </motion.h1>
          <motion.div className="w-full origin-left" variants={dividerMotion}>
            <Divider />
          </motion.div>
        </motion.section>

        <section className="p-6 mt-4 mb-24">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
            {playgroundItems.map((item, i) => {
              return <Item key={i} {...item} />;
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
