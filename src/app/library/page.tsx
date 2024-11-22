import * as motion from "framer-motion/client";

import Divider from "@/components/assets/Divider";
import LibraryContent from "@/components/library/LibraryContent";
import {
  dividerMotion,
  textRevealMotion,
  textRevealInViewportMotion,
  easings,
} from "@/utils/animations";

export default function Library() {
  return (
    <>
      <main>
        <motion.section
          className="w-full mt-[35vh] px-6 text-4xl md:text-[3.5rem] leading-tight tracking-tight font-medium"
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="mb-20" variants={textRevealMotion(0)}>
            A thoughtfully selected library of resources spanning multiple
            fields. Discover something new, and if you&#39;d like to contribute,
            I&#39;d love to hear from you!
          </motion.h1>
          <motion.div className="w-full origin-left" variants={dividerMotion}>
            <Divider />
          </motion.div>
        </motion.section>

        <section className="py-6 md:mt-4 mb-24">
          <LibraryContent />

          {/* Live Playlist */}
          <div className="px-6">
            <motion.div
              className="w-full origin-left mb-20"
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.8,
                  ease: easings.easeInOutQuint,
                },
              }}
              viewport={{
                once: true,
              }}
            >
              <Divider />
            </motion.div>

            <motion.h3
              className="mb-6 ml-2 text-sm font-medium text-fg-primary"
              variants={textRevealInViewportMotion(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >
              Feel free to check out music I like
            </motion.h3>
            <motion.iframe
              title="deezer-widget"
              src="https://widget.deezer.com/widget/dark/playlist/3415322182"
              allow="encrypted-media; clipboard-write"
              className="w-full h-[75vh] md:h-[45vh] rounded-2xl bg-bg-secondary"
              variants={textRevealInViewportMotion(0)}
              initial="hidden"
              whileInView="visible"
            />
          </div>
        </section>
      </main>
    </>
  );
}
