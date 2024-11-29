"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { dividerMotion, easings, textRevealMotion } from "@/utils/animations";
import { TOCContext, useTOCContextValues } from "@/utils/TOCContext";
import TableOfContents from "@/components/TableOfContents";
import TrackedSection from "@/components/TrackedSection";
import IntroImage from "@/components/assets/IntroImage";
import Divider from "@/components/assets/Divider";
import DesignProcessStages from "@/components/projects/eventpos/DesignProcessStages";
import Goals from "@/components/projects/eventpos/Goals";
import KeyFeatures from "@/components/projects/eventpos/KeyFeatures";
import TransitionOverlay from "@/components/assets/TransitionOverlay";

export default function ProjectEventPOS() {
  const { values } = useTOCContextValues();

  return (
    <>
      <TOCContext.Provider value={values}>
        <TransitionOverlay />

        <motion.main
          className=""
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: 1.5,
              ease: easings.easeInOutQuint,
            },
          }}
        >
          <IntroImage
            url="/images/eventPOS/cover.webp"
            alt="eventPOS case study hero picture"
          />
          <article className="mt-2">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 px-6 leading-tight tracking-tight font-medium text-4xl sm:text-5xl"
              initial="initial"
              animate="animate"
            >
              <motion.h1
                className="max-lg:hidden h-full col-span-3"
                variants={textRevealMotion(1.5)}
              >
                event
                <span className={`text-sky-500`}>POS</span>
              </motion.h1>
              <div className="lg:col-span-9 flex flex-col gap-24">
                <motion.h2 className="" variants={textRevealMotion(1.9)}>
                  Empowering Events with Secure, Scalable Payment Innovation
                </motion.h2>
                <motion.div
                  className="w-full origin-left"
                  variants={dividerMotion}
                >
                  <Divider />
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-[10%_1fr_10%] lg:grid-cols-[15%_1fr_5%]">
              <TableOfContents />
              <div className="min-h-screen mx-auto max-w-[80ch]">
                <section className="my-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 my-2 text-lg">
                    {[
                      ["Client:", "Heimdal Data ApS"],
                      ["Sector:", "B2B, Payment Systems"],
                      ["My Role:", "Product Designer, Team Lead"],
                      ["Project Time:", "1,5 month"],
                    ].map(([title, info], i) => (
                      <li key={i}>
                        <p className="max-md:flex flex-col gap-1">
                          <b className="text-base font-medium text-fg-secondary mr-2">
                            {title}
                          </b>
                          {info}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="leading-normal my-8">
                    EventPOS is a cutting-edge mobile payment application
                    meticulously crafted to cater specifically to the unique
                    demands of events. In an era where seamless transactions and
                    efficient management are paramount, eventPOS revolutionizes
                    the way payments are processed and tracked in event
                    environments. This case study delves into the design process
                    behind eventPOS, highlighting its features, user experience,
                    and the innovative solutions it offers.
                  </p>
                </section>

                <TrackedSection
                  sectionId={0}
                  tocTitle="Project Goals"
                  isFirst
                  className="mt-20 mb-10"
                >
                  <h3 className="leading-tight tracking-normal font-medium text-3xl sm:text-4xl mb-4">
                    Project Goals
                  </h3>
                  <p className="leading-normal  py-2">
                    The primary goal of EventPOS was to streamline the payment
                    process at events, ensuring quick, secure, and hassle-free
                    transactions for both vendors and attendees. Key objectives
                    included:
                  </p>
                  <Goals />
                </TrackedSection>

                <TrackedSection
                  sectionId={1}
                  tocTitle="Design Process"
                  className="mt-20 mb-10"
                >
                  <h3 className="leading-tight tracking-normal font-medium text-3xl sm:text-4xl mb-4">
                    Design Process
                  </h3>
                  <p className="leading-normal py-2">
                    The design process for EventPOS followed a meticulous
                    approach, incorporating user research, prototyping, and
                    iterative testing to ensure optimal usability and
                    functionality.
                  </p>
                  <DesignProcessStages />
                </TrackedSection>

                <TrackedSection
                  sectionId={2}
                  tocTitle="Key Features"
                  className="mt-20 mb-10"
                >
                  <h3 className="leading-tight tracking-normal font-medium text-3xl sm:text-4xl mb-4">
                    Key Features
                  </h3>
                  <p className="leading-normal py-2">
                    EventPOS offers a comprehensive suite of features tailored
                    to the demands of event environments:
                  </p>

                  <KeyFeatures />
                </TrackedSection>

                <TrackedSection
                  sectionId={3}
                  tocTitle="Conclusion"
                  isLast
                  className="mt-20 mb-0"
                >
                  <h3 className="leading-tight tracking-tight font-medium text-xl mb-2 sr-only">
                    Conclusion
                  </h3>
                  <Divider />
                  <p className="leading-normal py-2 mt-20">
                    Since its launch, EventPOS has garnered widespread acclaim
                    for its innovative approach to event payment solutions.
                    Event organizers have reported significant improvements in
                    transaction efficiency, vendor management, and overall
                    attendee satisfaction. The app&#39;s intuitive design and
                    robust security measures have instilled confidence among
                    users, leading to widespread adoption across a diverse range
                    of events.
                  </p>

                  <p className="leading-normal py-2 mb-20">
                    EventPOS stands as a testament to the power of user-centered
                    design and technological innovation in addressing the
                    complex challenges of event management and payment
                    processing. By seamlessly integrating mobile payments,
                    vendor management, and analytics capabilities, EventPOS has
                    emerged as a game-changer in the events industry, setting
                    new standards for efficiency, security, and user experience.
                  </p>
                </TrackedSection>
              </div>
            </div>

            <div className="relative flex flex-col px-6 bg-bg-secondary">
              <Divider />

              <div className="relative h-[80vh]">
                <Image
                  src={"/images/eventPOS/closeupBottom1.png"}
                  fill
                  quality={100}
                  alt="image"
                  style={{ objectFit: "contain" }}
                  className="object-top"
                />
              </div>
            </div>
          </article>
        </motion.main>
      </TOCContext.Provider>
    </>
  );
}
