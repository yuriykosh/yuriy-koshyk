"use client";

// import { useRef } from "react";
import Image from "next/image";
import { TOCContext, useTOCContextValues } from "@/utils/TOCContext";
import TableOfContents from "@/components/TableOfContents";
import TrackedSection from "@/components/TrackedSection";
import IntroImage from "@/components/assets/IntroImage";
import Divider from "@/components/assets/Divider";
import DesignProcessStages from "@/components/projects/eventpos/DesignProcessStages";
import Goals from "@/components/projects/eventpos/Goals";
import KeyFeatures from "@/components/projects/eventpos/KeyFeatures";
// import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectEventPOS() {
  const { values } = useTOCContextValues();

  // const projectColor = "00adf5";

  return (
    <TOCContext.Provider value={values}>
      <main>
        <IntroImage url="/images/event-pos.png" />
        <article className="">
          <div className="grid grid-cols-[10%_1fr] lg:grid-cols-5 px-6 leading-tight tracking-tight font-medium text-5xl">
            <h1 className="h-full">
              event
              <span className={`text-sky-500`}>POS</span>
            </h1>
            <div className="col-span-4 flex flex-col gap-8">
              <h2 className="">
                Transforming the onboarding experience to provide telecom
                services to 1,000+ students
              </h2>
              <Divider />
            </div>
          </div>

          <div className="grid grid-cols-[10%_1fr_10%] lg:grid-cols-[15%_1fr_5%] mt-10 mb-20">
            <TableOfContents />
            <div className="min-h-screen mx-auto max-w-[80ch]">
              <section className="my-8">
                <ul className="grid grid-cols-2 gap-4 py-2 my-2 text-lg">
                  <li>
                    <p>
                      <b className="text-base font-semibold text-fg-secondary mr-2">
                        Client:
                      </b>
                      Heimdal Data ApS
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="text-base font-semibold text-fg-secondary mr-2">
                        Sector:
                      </b>
                      B2B, Payment Systems
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="text-base font-semibold text-fg-secondary mr-2">
                        My Role:
                      </b>
                      Product Designer, Team Lead
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="text-base font-semibold text-fg-secondary mr-2">
                        Project Time:
                      </b>
                      1,5 month
                    </p>
                  </li>
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
                <h3 className="leading-tight tracking-normal font-medium text-4xl mb-4">
                  Project Goals
                </h3>
                <p className="leading-normal py-2">
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
                <h3 className="leading-tight tracking-normal font-medium text-4xl mb-4">
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
                <h3 className="leading-tight tracking-normal font-medium text-4xl mb-4">
                  Key Features
                </h3>
                <p className="leading-normal py-2">
                  EventPOS offers a comprehensive suite of features tailored to
                  the demands of event environments:
                </p>

                <KeyFeatures />
              </TrackedSection>

              <TrackedSection
                sectionId={3}
                tocTitle="Conclusion"
                isLast
                className="mt-20 mb-10"
              >
                <h3 className="leading-tight tracking-tight font-semibold text-xl mb-2 sr-only">
                  Conclusion
                </h3>
                <Divider />
                <p className="leading-normal py-2 mt-20">
                  Since its launch, EventPOS has garnered widespread acclaim for
                  its innovative approach to event payment solutions. Event
                  organizers have reported significant improvements in
                  transaction efficiency, vendor management, and overall
                  attendee satisfaction. The app&#39;s intuitive design and
                  robust security measures have instilled confidence among
                  users, leading to widespread adoption across a diverse range
                  of events.
                </p>

                <p className="leading-normal py-2 mb-20">
                  EventPOS stands as a testament to the power of user-centered
                  design and technological innovation in addressing the complex
                  challenges of event management and payment processing. By
                  seamlessly integrating mobile payments, vendor management, and
                  analytics capabilities, EventPOS has emerged as a game-changer
                  in the events industry, setting new standards for efficiency,
                  security, and user experience.
                </p>
                <Divider />
                <div className="relative w-full h-[60vh]">
                  <Image
                    src={"/images/eventPOS/closeupBottom.png"}
                    fill
                    quality={100}
                    alt="image"
                    style={{ objectFit: "contain" }}
                    className="object-right-top -translate-y-[calc(1rem-1px)]"
                  />
                </div>
              </TrackedSection>
            </div>
          </div>
        </article>
      </main>
    </TOCContext.Provider>
  );
}
