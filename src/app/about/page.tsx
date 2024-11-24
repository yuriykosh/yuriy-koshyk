import * as motion from "framer-motion/client";

import StackList from "@/components/about/StackList";
import Divider from "@/components/assets/Divider";
import {
  textRevealMotion,
  dividerMotion,
  textRevealInViewportMotion,
} from "@/utils/animations";
import Image from "next/image";
import Link from "next/link";
import CarbonMailAll from "@/components/assets/icons/CarbonMailAll";

export default function About() {
  return (
    <>
      <main>
        <motion.section
          className="w-full mt-[35vh] px-6 text-4xl md:text-[3.5rem] leading-tight tracking-tight font-medium"
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="mb-20" variants={textRevealMotion(0)}>
            Designing impactful digital experiences with a focus on business
            growth and user satisfaction.
          </motion.h1>
          <motion.div className="w-full origin-left" variants={dividerMotion}>
            <Divider />
          </motion.div>
        </motion.section>

        <section className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-0 p-6 mt-4 mb-24">
          <StackList />

          <motion.div
            className="col-span-1 md:col-span-3 flex flex-col gap-10 mb-14 md:m-0 text-xl md:text-2xl font-medium"
            initial="initial"
            animate="animate"
          >
            <motion.p variants={textRevealMotion(0.5)}>
              Hey there! I&#39;m Yuriy Koshyk, a Product Designer with 4+ years
              of experience, blending creativity and technical expertise to
              craft user-friendly, data-driven digital solutions that drive
              business results. My focus is on creating digital experiences that
              not only look great but also deliver on business and user needs.
            </motion.p>
            <ul className="grid grid-cols-3 gap-4">
              <motion.li
                className="relative col-span-1"
                variants={textRevealMotion(0.6)}
              >
                <Image
                  src={"/images/about.webp"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                  quality={100}
                  alt="Yuriy Koshyk portrait"
                  className="object-cover bg-bg-secondary border border-sep-primary"
                />
              </motion.li>
              <motion.li
                className="col-span-2 relative w-full h-full aspect-video overflow-hidden"
                variants={textRevealMotion(0.65)}
              >
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="object-cover bg-bg-secondary border border-sep-primary"
                >
                  <source
                    src="https://res.cloudinary.com/dfyj2bzi7/video/upload/f_auto:video,q_auto/v1/df-team/mp4/320p"
                    type="video/mp4"
                    media="(max-width:1023px)"
                  />
                  <source
                    src="https://res.cloudinary.com/dfyj2bzi7/video/upload/f_auto:video,q_auto/v1/df-team/webm/320p"
                    type="video/webm"
                    media="(max-width:1023px)"
                  />
                  <source
                    src="https://res.cloudinary.com/dfyj2bzi7/video/upload/f_auto:video,q_auto/v1/df-team/mp4/720p"
                    type="video/mp4"
                  />
                  <source
                    src="https://res.cloudinary.com/dfyj2bzi7/video/upload/f_auto:video,q_auto/v1/df-team/webm/720p"
                    type="video/webm"
                  />
                  Yuriy Koshyk and DF Druckluft-Fachhandel Gmbh management team
                  together.
                </video>
              </motion.li>
            </ul>
            <motion.p
              variants={textRevealInViewportMotion(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              I&#39;ve had the chance to work on 15+ projects as a freelancer,
              leading full design research cycles—everything from user research
              to prototyping and testing. I&#39;m all about finding innovative
              solutions that drive growth and keep users happy. I love diving
              into data, monitoring KPIs, and tweaking designs based on real
              feedback to get the best possible results.
            </motion.p>
            <motion.p
              variants={textRevealInViewportMotion(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              I&#39;ve also had the privilege of leading tech teams, including
              running technical side at DF Druckluft-Fachhandel GmbH as Head of
              Systems & IT (CTO), where I optimized UX processes that bumped
              revenue by 10% in just 3 months. I thrive in agile environments,
              always aiming to bring out the best in cross-functional teams and
              external partners.
            </motion.p>
            <motion.p
              variants={textRevealInViewportMotion(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              I&#39;ve worn quite a few hats across UX/UI design and front-end
              development, allowing me to see the bigger picture in projects and
              bridge the gap between design and development. Tools like Figma,
              Webflow, and Framer are my go-tos, and I keep up with new tech
              trends to push boundaries in design. My process is all about
              user-centered design—making sure every iteration is shaped by real
              feedback and business goals.
            </motion.p>
            <ul className="grid grid-cols-3 gap-4">
              <motion.li
                className="col-span-2 relative w-full h-fit aspect-video overflow-hidden"
                variants={textRevealInViewportMotion(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <video
                  src={
                    "https://res.cloudinary.com/dfyj2bzi7/video/upload/f_auto:video,q_auto/opvwdwziyejgh3zfafuq"
                  }
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="w-full h-full object-cover object-center bg-bg-secondary border border-sep-primary"
                />
              </motion.li>
              <motion.li
                className="relative col-span-1"
                variants={textRevealInViewportMotion(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  src={
                    "https://res.cloudinary.com/dfyj2bzi7/image/upload/f_auto,q_auto/o2b3jicfnzazkfs6alhq"
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={100}
                  alt="Photography showcase"
                  className="object-cover bg-bg-secondary border border-sep-primary"
                />
              </motion.li>
            </ul>
            <motion.p
              variants={textRevealInViewportMotion(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              When I&#39;m not immersed in design, you can catch me enjoying
              basketball, snapping street photography, or diving into a good
              movie or book.
            </motion.p>

            <motion.p
              variants={textRevealInViewportMotion(0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              I&#39;m always up for a chat—feel free to{" "}
              <span className="group inline-flex items-center">
                <Link
                  href={"mailto:yuriy.koshyk@gmail.com"}
                  className="inline-flex items-center gap-1.5 underline underline-offset-2 hover:text-fg-secondary transition-all duration-200"
                >
                  drop me a message
                </Link>
                !
                <span
                  className="inline-flex items-center justify-center ml-2 underline w-[1.5ch] h-[1.5ch] text-fg-secondary
              opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200"
                >
                  <CarbonMailAll />
                </span>
              </span>
            </motion.p>
          </motion.div>
          <Divider className="md:hidden" />
        </section>
      </main>
    </>
  );
}
