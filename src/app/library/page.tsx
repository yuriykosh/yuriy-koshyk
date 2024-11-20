import * as motion from "framer-motion/client";

import Divider from "@/components/assets/Divider";
import LibraryContent from "@/components/library/LibraryContent";
import { dividerMotion, textRevealMotion } from "@/utils/animations";
// import { Suspense } from "react";
// import PostHogPageView from "@/components/posthog/post-hog-page-view";

export default function Library() {
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
            <Divider className="mb-20" />
            <h3 className="mb-6 ml-2 text-sm font-medium text-fg-primary">
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
    </>
  );
}
