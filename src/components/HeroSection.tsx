import * as motion from "framer-motion/client";

import Link from "next/link";
import { easings, textRevealMotion } from "@/utils/animations";
import Divider from "@/components/assets/Divider";

const HeroSection = () => {
  return (
    <section className="h-[80vh] relative flex flex-col px-6 pt-20 min-[390px]:pt-40">
      <motion.div
        className="uppercase tracking-wide  mx-auto flex-1 flex flex-col text-5xl leading-snug sm:text-6xl sm:leading-snug md:text-7xl md:leading-tight lg:text-[6.1rem] xl:text-[7.2rem] min-[1308px]:text-[8rem]"
        initial="initial"
        animate="animate"
      >
        <div className="flex items-center bg-bg-primary z-10">
          <motion.div
            className="bg-fg-primary h-[55%] flex-1 mr-8 hidden md:block origin-left"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: { duration: 0.8, ease: easings.easeInOutQuint },
            }}
          />
          <motion.h2
            className="font-semibold z-20"
            variants={textRevealMotion(0)}
          >
            Design
          </motion.h2>
        </div>
        <div className="bg-bg-primary z-20">
          <motion.h2
            className="font-semibold"
            variants={textRevealMotion(0.25)}
          >
            Digital Products
          </motion.h2>
        </div>
        <motion.h2
          className="font-semibold md:pl-[10%] relative after:hidden md:after:inline-block after:absolute after:top-1/2 after:-translate-y-1/2 after:h-[1ch] after:w-[1ch] after:ml-8 after:bg-fg-primary after:rounded-full"
          variants={textRevealMotion(0.5)}
        >
          That Matters
        </motion.h2>

        <div className="bg-bg-primary z-30 flex-1 w-full pt-8 md:pl-[50%] font-medium text-base normal-case tracking-normal leading-normal">
          <motion.p
            className="max-w-lg"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1.0,
                duration: 0.8,
                ease: easings.easeInOutQuint,
              },
            }}
          >
            Based in Stuttgart, Yuriy is a full-stack product designer curious
            about interfaces, intelligent systems and the ways in which we
            interact with them. Align them with business goals.{" "}
            <Link
              href={"/"}
              className="inline-block underline underline-offset-2 hover:text-fg-secondary "
            >
              Send me an email and say hey.
            </Link>
          </motion.p>
        </div>
      </motion.div>
      <Divider />
    </section>
  );
};
export default HeroSection;
