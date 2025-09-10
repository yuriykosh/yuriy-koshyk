import * as motion from "framer-motion/client";

import Link from "next/link";
import { easings, textRevealMotion } from "@/utils/animations";
import CarbonMailAll from "../assets/icons/CarbonMailAll";

const HeroSection = () => {
  return (
    <section className="min-h-fit h-auto min-md:min-h-[80vh] min-md:h-auto relative flex flex-col px-6 pt-20 sm:pt-24 mb-16">
      <motion.div
        className="flex flex-col flex-1 mx-auto font-medium tracking-[-0.03em] leading-[90%] max-[440px]:text-[3.25rem] text-6xl md:text-7xl lg:text-[6.1rem] xl:text-[7.2rem] min-[1308px]:text-[8rem]"
        initial="initial"
        animate="animate"
      >
        <div className="relative flex items-center mb-px bg-bg-primary z-20">
          <motion.div
            className="bg-fg-primary h-[1.02ch] flex-1 mt-[6px] mr-8 block origin-left"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: { duration: 0.8, ease: easings.easeInOutQuint },
            }}
          />
          <motion.h2 className="z-20 pr-14" variants={textRevealMotion(0)}>
            Design
          </motion.h2>
          <motion.div
            className="absolute -bottom-28 bg-bg-primary w-full h-24 z-20"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { duration: 0.3, delay: 0.5 },
            }}
          />
        </div>
        <div className="mb-px z-20">
          <motion.h2 variants={textRevealMotion(0.25)}>
            digital products
          </motion.h2>
        </div>
        <div className="flex gap-4 md:gap-8 items-center mb-px">
          <motion.h2 className="  relative" variants={textRevealMotion(0.5)}>
            that{" "}
            <span className="relative before:content-[''] before:block before:absolute before:left-0 max-[440px]:before:bottom-2.5 before:bottom-3 lg:before:bottom-5 xl:before:bottom-6 before:bg-pink-300 before:w-[101%] before:h-[1.2ch] before:-z-10">
              matters
            </span>
          </motion.h2>

          {/* video */}
          <motion.div
            className="relative inline-block max-[468px]:w-[1.5ch] max-[468px]:h-[1.5ch] mb-3 sm:mb-0 w-[1.4ch] h-[1.4ch] md:w-[1.2ch] md:h-[1.2ch] lg:w-[1ch] lg:h-[1ch] xl:w-[1.1ch] xl:h-[1.1ch]
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
            className="max-w-md mb-4"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.8,
                duration: 0.8,
                ease: easings.easeInOutQuint,
              },
            }}
          >
            Based in Stuttgart, I&#39;m Yuriy, a full-stack product designer
            passionate about crafting intuitive interfaces and intelligent
            systems that enhance user interactions and align with business
          </motion.p>
          <motion.p
            className="max-w-lg"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 2,
                duration: 0.8,
                ease: easings.easeInOutQuint,
              },
            }}
          >
            Let&#39;s connect —{" "}
            <Link
              href={"mailto:yuriy.koshyk@gmail.com"}
              className="group inline-flex items-center gap-1.5 underline decoration-1 underline-offset-2 hover:text-fg-secondary transition-all duration-200"
            >
              send me an email to say hi!
              <span
                className="flex items-center justify-center w-[1.5ch] h-[1.5ch] text-fg-secondary
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
