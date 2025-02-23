import * as motion from "framer-motion/client";

import Link from "next/link";
import { easings, textRevealMotion } from "@/utils/animations";
import CarbonMailAll from "../assets/icons/CarbonMailAll";

const HeroSection = () => {
  return (
    <section className="min-h-screen h-auto min-[376px]:min-h-[80vh] min-[376px]:h-auto relative flex flex-col px-6 pt-20 sm:pt-40 mb-16">
      <motion.div
        className="flex flex-col flex-1 mx-auto uppercase tracking-wide text-5xl leading-snug sm:text-6xl sm:leading-snug md:text-7xl md:leading-tight lg:text-[6.1rem] xl:text-[7.2rem] min-[1308px]:text-[8rem]"
        initial="initial"
        animate="animate"
      >
        <div className="flex items-center mb-px bg-bg-primary z-10">
          <motion.div
            className="bg-fg-primary h-[1ch] flex-1 mr-8 block origin-left"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: { duration: 0.8, ease: easings.easeInOutQuint },
            }}
          />
          <motion.h2
            className="max-sm:font-semibold font-medium z-20"
            variants={textRevealMotion(0)}
          >
            Design
          </motion.h2>
        </div>
        <div className="mb-px bg-bg-primary z-20">
          <motion.h2
            className="max-sm:font-semibold font-medium"
            variants={textRevealMotion(0.25)}
          >
            Digital Products
          </motion.h2>
        </div>
        <div className="flex gap-4 md:gap-8 items-center mb-px">
          <motion.h2
            className="max-sm:font-semibold max-[400px]:max-w-[70%] max-[468px]:max-w-[64%] font-medium md:pl-[10%] relative"
            variants={textRevealMotion(0.5)}
          >
            That Matters
          </motion.h2>

          <motion.div
            className="relative inline-block max-[468px]:w-[2ch] max-[468px]:h-[2ch] max-[468px]:self-end mb-3 sm:mb-0 w-[1.5ch] h-[1.5ch] sm:w-[1.1ch] sm:h-[1.1ch]
            rounded-full overflow-hidden ring-1 md:ring ring-fg-primary bg-fg-primary"
            variants={textRevealMotion(0.7)}
          >
            <motion.div
              className="relative w-full h-full"
              variants={textRevealMotion(0.8)}
            >
              <video
                muted
                autoPlay
                loop
                playsInline
                className="absolute w-full h-full object-cover object-center rounded-full"
              >
                <source
                  src="/videos/intro/480.mp4"
                  type="video/mp4"
                  media="(max-width:1023px)"
                />
                <source
                  src="/videos/intro/480.webm"
                  type="video/webm"
                  media="(max-width:1023px)"
                />
                <source
                  src="/videos/intro/640.mp4"
                  type="video/mp4"
                  media="(max-width:1919px)"
                />
                <source
                  src="/videos/intro/640.webm"
                  type="video/webm"
                  media="(max-width:1919px)"
                />
                <source src="/videos/intro/original.mp4" type="video/mp4" />
                <source src="/videos/intro/original.webm" type="video/webm" />
                Video of Yuriy say hi!
              </video>
            </motion.div>
          </motion.div>
        </div>

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
            Based in Stuttgart, I&#39;m Yuriy, a full-stack product designer
            passionate about crafting intuitive interfaces and intelligent
            systems that enhance user interactions and align with business
            goals. Let&#39;s connect —{" "}
            <Link
              href={"mailto:yuriy.koshyk@gmail.com"}
              className="group inline-flex items-center gap-1.5 underline underline-offset-2 hover:text-fg-secondary transition-all duration-200"
            >
              send me an email and say hi!
              <span
                className="flex items-center justify-center underline w-[1.5ch] h-[1.5ch] text-fg-secondary
              opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200"
              >
                <CarbonMailAll />
              </span>
            </Link>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
export default HeroSection;
