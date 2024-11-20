"use client";

import { motion } from "framer-motion";
import { dividerMotion, textRevealMotion } from "@/utils/animations";
import { TOCContext, useTOCContextValues } from "@/utils/TOCContext";
import Divider from "@/components/assets/Divider";
import IntroImage from "@/components/assets/IntroImage";
import TableOfContents from "@/components/TableOfContents";
import TrackedSection from "@/components/TrackedSection";
import TopicTitle from "@/components/projects/gliese1/TopicTitle";
import SinglePicture from "@/components/projects/gliese1/SinglePicture";
import GoalsList from "@/components/projects/heimdal-data-aps/GoalsList";
import Wireframes from "@/components/projects/heimdal-data-aps/Wireframes";
import DevTech from "@/components/projects/heimdal-data-aps/DevTech";
import Results from "@/components/projects/heimdal-data-aps/Results";
import PostHogPageView from "@/components/posthog/post-hog-page-view";
import { Suspense } from "react";

export default function ProjectHeimdalDataApS() {
  const { values } = useTOCContextValues();

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      <TOCContext.Provider value={values}>
        <main>
          <IntroImage
            url="/images/heimdal-data.jpg"
            alt="Heimdal Data ApS Redesign case study hero picture"
          />
          <article className="mt-2">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 px-6 leading-tight tracking-tight font-medium text-4xl sm:text-5xl"
              initial="initial"
              animate="animate"
            >
              <motion.h1
                className="max-lg:hidden h-full col-span-3"
                variants={textRevealMotion(0)}
              >
                Heimdal {""}
                <span className={`text-green-500`}>Data</span>
              </motion.h1>
              <div className="lg:col-span-9 flex flex-col gap-24">
                <motion.h2 className="" variants={textRevealMotion(0.4)}>
                  Website Redesign - UX/UI Case Study
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
                <section className="mt-10 mb-32">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 mb-10 text-base font-medium text-green-500">
                    {[
                      ["Client:", "Heimdal Data ApS"],
                      ["My Role:", "UX/UI Designer"],
                      ["Sector:", "B2B, DevOps"],
                      ["Project Time:", "1,5 month"],
                    ].map(([title, info], i) => (
                      <li key={i}>
                        <p className="max-md:flex flex-col gap-1">
                          <b className="text-sm font-medium text-fg-secondary mr-2">
                            {title}
                          </b>
                          {info}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-8 text-xl md:text-2xl font-medium leading-normal">
                    <p>
                      Heimdal Data ApS is a software development company founded
                      in 2015, located in Risskov near Aarhus, Denmark. The
                      company specializes in programming solutions for the
                      payment industry, particularly for events and the
                      restaurant industry. They have also developed auxiliary
                      systems to help streamline and organize volunteers
                      involved in these events, from planning to post-event
                      cleanup, all in one centralized platform.
                    </p>
                    <p>
                      In recent years, Heimdal Data ApS has expanded its
                      services to include app development and mobile games.
                      Their most notable achievement is the game &#34;Slette
                      Mette&#34;, released in 2021, which gained significant
                      popularity and ranked as the number one most downloaded
                      free game in the categories of All Free Games and Arcade
                      on Google Play, as well as All Free Games and Action on
                      the AppStore.
                    </p>
                  </div>
                </section>

                <TrackedSection
                  sectionId={0}
                  tocTitle="Goals & Objectives"
                  isFirst
                  className="mb-32"
                >
                  <TopicTitle title="Goals & Objectives" />

                  <p className="mb-20 text-xl md:text-2xl font-medium leading-normal">
                    The primary goals of this website redesign project are to
                    enhance the user experience (UX) and improve the user
                    interface (UI) of Heimdal Data ApS&#39;s website. Specific
                    objectives include:
                  </p>
                  <GoalsList />
                </TrackedSection>

                <TrackedSection
                  sectionId={1}
                  tocTitle="Research and Discovery"
                  className="mb-40 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Research and Discovery" />

                  <p className="mb-8">
                    In-depth research will be conducted to gain insights into
                    the target audience, competitors, and industry trends. This
                    will involve:
                  </p>

                  <ul className="flex flex-col gap-4 py-2 mb-12 text-lg md:text-xl font-medium leading-normal">
                    {[
                      "Analyzing the existing website's performance metrics, user feedback, and pain points.",
                      "Conducting user interviews and surveys to gather insights into user expectations and preferences.",
                      "Performing a competitive analysis to identify best practices and potential areas of improvement.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-baseline gap-3 w-fit">
                        <div className="flex">
                          <div className="w-2 h-2 -translate-y-0.5 rounded-full bg-green-500 opacity-60" />
                        </div>

                        {item}
                      </li>
                    ))}
                  </ul>
                </TrackedSection>

                <TrackedSection
                  sectionId={2}
                  tocTitle="Information Architecture and Wireframing"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Information Architecture and Wireframing" />

                  <p className="mb-16">
                    Based on the research findings, an improved information
                    architecture will be developed to ensure a logical and
                    intuitive website structure. This will involve creating a
                    clear hierarchy for the various sections and defining the
                    relationships between different content elements.
                    Low-fidelity wireframes will be created using tools such as
                    Figma, outlining the website&#39;s layout and content
                    placement.
                  </p>
                  <Wireframes />
                </TrackedSection>

                <TrackedSection
                  sectionId={3}
                  tocTitle="Visual Design and Prototyping"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Ideation & Prototyping" />

                  <p className="mb-16">
                    The visual design phase will focus on creating a visually
                    appealing and cohesive UI design that aligns with Heimdal
                    Data ApS&#39;s brand identity. This will include:
                  </p>

                  <SinglePicture
                    url="/images/heimdal-data/style.png"
                    alt="Grid system & Style guide"
                  />
                </TrackedSection>

                <TrackedSection
                  sectionId={4}
                  tocTitle="Iterative Testing and Feedback"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Iterative Testing and Feedback" />

                  <p className="mb-16">
                    The prototypes will be tested with a small group of
                    representative users to gather feedback on the design and
                    identify areas for improvement. This iterative testing
                    process will help refine the UX and UI elements, ensuring a
                    seamless user experience.
                  </p>
                  <SinglePicture
                    url="/images/heimdal-data/testing-and-feedback.png"
                    alt="Mockup with new mobile home page & desktop services page"
                  />
                </TrackedSection>

                <TrackedSection
                  sectionId={5}
                  tocTitle="Frontend Development and Implementation"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Frontend Development and Implementation" />

                  <p className="mb-16">
                    Once the design is finalized, the frontend development phase
                    will begin. Leveraging{" "}
                    <span className="text-green-500">HTML</span>,{" "}
                    <span className="text-green-500">SASS</span>,{" "}
                    <span className="text-green-500">JS</span>,{" "}
                    <span className="text-green-500">PhP</span>,{" "}
                    <span className="text-green-500">Webpack</span>, and other
                    relevant technologies, the UX/UI Designer, who also has
                    frontend development skills, will bring the design to life.
                    The website will be implemented using WordPress, ensuring
                    easy content management for the client.
                  </p>

                  <DevTech />
                </TrackedSection>

                <TrackedSection
                  sectionId={6}
                  tocTitle="Results and Impact"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Results and Impact" />

                  <Results />
                </TrackedSection>

                <TrackedSection
                  sectionId={7}
                  tocTitle="Key Takeaways and Reflection"
                  isLast
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Key Takeaways and Reflection" />

                  <p className="mb-8">
                    Through this project, the UX/UI Designer gained valuable
                    experience and insights. Key takeaways include:
                  </p>

                  <ul className="flex flex-col gap-4 py-2 text-lg md:text-xl font-medium leading-normal">
                    {[
                      "The importance of conducting thorough research to understand user needs and expectations.",
                      "The significance of iterative design and testing to ensure a user-centric and effective design.",
                      "The value of combining UX/UI design and frontend development skills to create cohesive and efficient solutions.",
                      "The benefits of collaboration, even in solo projects, such as seeking feedback and incorporating different perspectives.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-baseline gap-3 w-fit">
                        <div className="flex">
                          <div className="w-2 h-2 -translate-y-0.5 rounded-full bg-green-500 opacity-60" />
                        </div>

                        {item}
                      </li>
                    ))}
                  </ul>
                </TrackedSection>
              </div>
            </div>
          </article>
        </main>
      </TOCContext.Provider>
    </>
  );
}
