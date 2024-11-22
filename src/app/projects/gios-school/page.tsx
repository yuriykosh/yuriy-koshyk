"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  dividerMotion,
  easings,
  textRevealInViewportMotion,
  textRevealMotion,
} from "@/utils/animations";
import { TOCContext, useTOCContextValues } from "@/utils/TOCContext";
import IntroImage from "@/components/assets/IntroImage";
import Divider from "@/components/assets/Divider";
import TableOfContents from "@/components/TableOfContents";
import TrackedSection from "@/components/TrackedSection";
import TopicTitle from "@/components/projects/TopicTitle";
import SinglePicture from "@/components/projects/SinglePicture";
import CarbonCheckmarkOutline from "@/components/assets/icons/CarbonCheckmarkOutline";
import DoublePicture from "@/components/projects/DoublePicture";
import TransitionOverlay from "@/components/assets/TransitionOverlay";

export default function ProjectGiosSchool() {
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
            url="/images/gios-school.png"
            alt="Gios School case study hero picture"
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
                Gios
                <span className={`text-purple-500`}>School</span>
              </motion.h1>
              <div className="lg:col-span-9 flex flex-col gap-24">
                <motion.h2 className="" variants={textRevealMotion(1.9)}>
                  Transforming Math Education: Engaging, Gamified, and Scalable
                  Solutions
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
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 mb-10 text-base font-medium text-purple-500">
                    {[
                      ["Sector:", "B2B, B2C, EdTech"],
                      ["Team:", "5 designers"],
                      ["My Role:", "Product Designer"],
                      ["Project Time:", "1,5 month"],
                    ].map(([title, info], i) => (
                      <motion.li
                        key={i}
                        variants={textRevealInViewportMotion(0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <p className="max-md:flex flex-col gap-1">
                          <b className="text-sm font-medium text-fg-secondary mr-2">
                            {title}
                          </b>
                          {info}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.p
                    className="mb-8 text-xl md:text-2xl font-medium leading-normal"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    GIOS is an{" "}
                    <span className="text-purple-500">
                      AI-powered interactive platform
                    </span>{" "}
                    for learning mathematics and developing critical thinking
                    skills among school students. It offers a comprehensive
                    ecosystem with gamified TikTok-style content for children,
                    progress tracking for parents, digital tools for teachers,
                    and a marketplace for verified STEM tutors.
                  </motion.p>
                  <motion.p
                    className="text-xl md:text-2xl font-medium leading-normal"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    Our mission is to create a brighter future for children by
                    providing accessible, engaging, and interactive{" "}
                    <span className="text-purple-500">
                      education to millions of students
                    </span>{" "}
                    worldwide.
                  </motion.p>
                </section>

                <TrackedSection
                  sectionId={0}
                  tocTitle="Project Overview"
                  isFirst
                  className="mb-32"
                >
                  <TopicTitle title="Challenges Identified" />

                  <motion.p
                    className="text-xl md:text-2xl font-medium leading-normal mb-32"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    The current website does not effectively convert users or
                    sell services. Users lack a clear understanding of the value
                    proposition, leading to additional sales funnels and landing
                    pages.
                  </motion.p>

                  <TopicTitle title="Goals" />

                  <motion.ul
                    className="flex flex-col gap-4 py-2 mb-12 text-xl md:text-2xl font-medium leading-normal"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "Redesign the website to highlight all product features in a user-friendly manner.",
                      "Clearly communicate the value proposition to each target audience segment.",
                      "Explore whether separate websites are needed for different directions (B2C, B2B, Marketplace).",
                      "Enhance the platform’s simplicity and clarity to outperform competitors.",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-baseline gap-3 w-fit min-h-11"
                        variants={textRevealInViewportMotion(0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-center w-6 h-6 min-w-6 min-h-6 translate-y-1.5 md:translate-y-0.5 text-purple-500">
                          <CarbonCheckmarkOutline />
                        </div>

                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </TrackedSection>

                <TrackedSection
                  sectionId={1}
                  tocTitle="Design Process"
                  className="mb-40 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Our Design Process" />

                  <motion.p
                    className="mb-16"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    We structured our work into seven critical phases, ensuring
                    a systematic approach to solving problems and delivering
                    impactful solutions:
                  </motion.p>

                  <SinglePicture
                    url="/images/gios-school/design-process.png"
                    alt="Project stages graph"
                  />

                  <motion.ul
                    className="flex flex-col gap-2 p-4 rounded-2xl border border-fg-secondary/80"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      ["Kick-off Meeting:", "Understanding project goals."],
                      ["Competitive Analysis:", "Identifying opportunities."],
                      ["User Research & Persona:", "Empathy-driven design."],
                      ["Customer Journey Mapping (CJM):", "Deep user insight."],
                      ["Ideation (HMW):", "Generating creative solutions."],
                      ["Prototyping:", "Testing concepts."],
                      ["Design Iteration & Testing:", "Refining solutions."],
                    ].map(([title, details], i) => (
                      <motion.li
                        key={i}
                        className="px-2 py-4 text-l md:text-xl"
                        variants={textRevealInViewportMotion(0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <p className="inline text-purple-500">{i + 1}.</p>{" "}
                        <h4 className="inline ">{title} </h4>
                        <p className="inline text-fg-secondary">{details}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </TrackedSection>

                <TrackedSection
                  sectionId={2}
                  tocTitle="Identifying the Problem"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Identifying the Problem" />

                  <motion.p
                    className="mb-8"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    During our initial{" "}
                    <span className="text-purple-500">Kick-off Meeting</span>,
                    we collaborated closely with the stakeholders to uncover the
                    unique selling points, user demographics, and primary
                    challenges of GIOS.
                  </motion.p>
                  <motion.p
                    className="mb-6"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    The key takeaways included:
                  </motion.p>

                  <motion.ul
                    className="flex flex-col gap-4 mb-8 py-2 text-xl md:text-2xl font-medium leading-normal"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "The need to simplify user onboarding.",
                      "Addressing trust issues for new users.",
                      "Enhancing the discoverability of key features like courses and tutors.",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 pl-2 pr-4 py-1 w-fit rounded-full border border-sep-primary"
                        variants={textRevealInViewportMotion(0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-center w-[0.7ch] h-[0.7ch] bg-purple-300 rounded-full"></div>

                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </TrackedSection>

                <TrackedSection
                  sectionId={3}
                  tocTitle="Research Highlights"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  {/* -- Competitive Analysis -- */}
                  <div className="mb-40">
                    <TopicTitle title="Competitive Analysis" />

                    <motion.p
                      className="mb-16"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      We reviewed{" "}
                      <span className="text-purple-500">15 competitors</span>{" "}
                      (e.g.,{" "}
                      <span className="text-orange-400">Khan Academy</span>,{" "}
                      <span className="text-orange-400">Prodigy</span>,{" "}
                      <span className="text-orange-400">Duolingo</span>) to
                      identify strengths, weaknesses, and opportunities in
                      usability and design.
                    </motion.p>

                    <SinglePicture
                      url="/images/gios-school/competitor-analysis.png"
                      alt="Competitor logos"
                    />
                  </div>

                  {/* -- User Interviews -- */}
                  <div className="mb-40">
                    <TopicTitle title="User Interviews" />

                    <motion.p
                      className="mb-16"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      We conducted{" "}
                      <span className="text-purple-500">
                        10 user interviews
                      </span>{" "}
                      to understand pain points, such as:
                    </motion.p>

                    <SinglePicture
                      url="/images/gios-school/user-interviews.png"
                      alt="User Interview screenshots"
                    />

                    <motion.ul
                      className="flex flex-col gap-4 mb-8 py-2 text-xl md:text-2xl font-medium leading-normal"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        "Difficulty finding trustworthy tutors.",
                        "Lack of clarity in course offerings.",
                        "Limited engagement with platform features.",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-3 pl-2 pr-4 py-1 w-fit rounded-full border border-sep-primary"
                          variants={textRevealInViewportMotion(0)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-center w-[0.7ch] h-[0.7ch] bg-purple-300 rounded-full"></div>

                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* -- User Persona -- */}
                  <div className="mb-40">
                    <TopicTitle title="User Persona" />

                    <motion.p
                      className="mb-16"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      Larisa, 45, mother of a 13-year-old student in Kyiv.
                    </motion.p>

                    <SinglePicture
                      url="/images/gios-school/persona.png"
                      alt="Persona details"
                    />

                    <motion.ul
                      className="flex flex-col p-2 rounded-2xl border border-fg-secondary/80"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        ["Goals:", "Improve her child’s math skills."],
                        [
                          "Fears:",
                          "Choosing ineffective additional education methods.",
                        ],
                        [
                          "Needs:",
                          "Clear guidance, engaging materials, and trustworthy tutors.",
                        ],
                      ].map(([title, details], i) => (
                        <motion.li
                          key={i}
                          className="px-2 py-4"
                          variants={textRevealInViewportMotion(0)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <h4 className="inline text-purple-500">{title} </h4>
                          <p className="inline">{details}</p>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* -- Customer Journey Map (CJM) -- */}
                  <div className="">
                    <TopicTitle title="Customer Journey Map (CJM)" />

                    <motion.p
                      className="mb-16"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      We mapped the user journey to identify:
                    </motion.p>

                    <SinglePicture
                      url="/images/gios-school/cjm.png"
                      alt="Customer Journey Map (CJM) details"
                    />

                    <motion.ul
                      className="flex flex-col gap-4 mb-8 py-2 text-xl md:text-2xl font-medium leading-normal"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        "Dissatisfaction with current online learning quality.",
                        "Confusion in selecting additional courses.",
                        "Lack of transparency in tutor credentials.",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-3 pl-2 pr-4 py-1 w-fit rounded-full border border-sep-primary"
                          variants={textRevealInViewportMotion(0)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-center w-[0.7ch] h-[0.7ch] bg-purple-300 rounded-full"></div>

                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </TrackedSection>

                <TrackedSection
                  sectionId={4}
                  tocTitle="Ideation & Planning"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Ideation & Planning" />
                  <motion.p
                    className="mb-16"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    Using tools like{" "}
                    <span className="text-purple-500">Crazy 8s</span> and{" "}
                    <span className="text-purple-500">How Might We (HMW)</span>,
                    we developed solutions:
                  </motion.p>
                  <motion.ul
                    className="flex flex-col gap-2 p-4 rounded-2xl border border-fg-secondary/80"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      [
                        "Tutor Page Redesign:",
                        "Added video introductions and improved filtering.",
                      ],
                      [
                        "Home Page Optimization:",
                        "Highlighted gamification and streamlined navigation.",
                      ],
                      [
                        "Feedback Section Upgrade:",
                        "Integrated video testimonials to enhance credibility.",
                      ],
                      [
                        "Course Structure Revamp:",
                        "Consolidated subjects by grade level for better accessibility.",
                      ],
                    ].map(([title, details], i) => (
                      <motion.li
                        key={i}
                        className="px-2 py-4 text-l md:text-xl"
                        variants={textRevealInViewportMotion(0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <p className="inline text-orange-400">{i + 1}.</p>{" "}
                        <h4 className="inline ">{title} </h4>
                        <p className="inline text-fg-secondary">{details}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </TrackedSection>

                <TrackedSection
                  sectionId={5}
                  tocTitle="Execution and Iteration"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  {/* -- Prototyping and Testing -- */}
                  <div className="">
                    <TopicTitle title="Prototyping and Testing" />

                    <motion.p
                      className="mb-16"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      We tested early designs with{" "}
                      <span className="text-purple-500">18 users</span>, leading
                      to valuable insights and changes:
                    </motion.p>

                    <motion.ul
                      className="flex flex-col p-2 rounded-2xl border border-fg-secondary/80"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        [
                          "Booking Demo Lessons:",
                          "Added a prominent “Try Free” button in the header.",
                        ],
                        [
                          "Purchasing Courses:",
                          "Enabled bundling multiple lessons in one transaction.",
                        ],
                        [
                          "Tutor Selection:",
                          "Introduced video profiles for better tutor evaluation.",
                        ],
                      ].map(([title, details], i) => (
                        <motion.li
                          key={i}
                          className="px-2 py-4 text-l md:text-xl"
                          variants={textRevealInViewportMotion(0)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <h4 className="inline text-purple-500">{title} </h4>
                          <p className="inline">{details}</p>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </TrackedSection>

                <TrackedSection
                  sectionId={6}
                  tocTitle="Key Improvements"
                  isLast
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <div className="mb-32">
                    <TopicTitle title="Homepage" />

                    <motion.div
                      className="my-32 md:my-48 relative w-full aspect-[640/1901] scale-110 rounded-xl overflow-clip"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Image
                        src="/images/gios-school/home-page.png"
                        fill
                        quality={100}
                        sizes="75vw"
                        alt="image"
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.ul
                      className="flex flex-col gap-4 mb-8 py-2 text-xl md:text-2xl font-medium leading-normal"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        "Revamped hero section for better onboarding.",
                        "Added an engaging feedback form with step-by-step instructions.",
                        "Enhanced personalization features for quick access to relevant information.",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-3 pl-2 pr-4 py-1 w-fit rounded-full border border-sep-primary"
                          variants={textRevealInViewportMotion(0)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-center w-[0.7ch] h-[0.7ch] bg-purple-300 rounded-full"></div>

                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  <div className="mb-32">
                    <TopicTitle title="Tutor Page" />

                    <DoublePicture
                      urlLeft="/images/gios-school/tutor-page-1.png"
                      urlRight="/images/gios-school/tutor-page-2.png"
                      alt="Tutor page screen"
                      className="mt-20"
                    />

                    <motion.ul
                      className="flex flex-col gap-4 mb-8 py-2 text-xl md:text-2xl font-medium leading-normal"
                      variants={textRevealInViewportMotion(0)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {[
                        "Introduced video resumes to increase trust.",
                        "Improved filtering options for seamless tutor search.",
                        "Highlighted exam success rates of tutor students.",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-3 pl-2 pr-4 py-1 w-fit rounded-full border border-sep-primary"
                          variants={textRevealInViewportMotion(0)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-center w-[0.7ch] h-[0.7ch] bg-purple-300 rounded-full"></div>

                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  <div className="">
                    <TopicTitle title="Course Navigation" />

                    <DoublePicture
                      urlLeft="/images/gios-school/architecture.png"
                      urlRight="/images/gios-school/navigation.png"
                      alt="Architecture and Navigation new structure"
                      className="mt-20"
                    />

                    <motion.ul className="flex flex-col gap-4 mb-8 py-2 text-xl md:text-2xl font-medium leading-normal">
                      {[
                        "Introduced video resumes to increase trust.",
                        "Improved filtering options for seamless tutor search.",
                        "Highlighted exam success rates of tutor students.",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center gap-3 pl-2 pr-4 py-1 w-fit rounded-full border border-sep-primary"
                          variants={textRevealInViewportMotion(0)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-center w-[0.7ch] h-[0.7ch] bg-purple-300 rounded-full"></div>

                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </TrackedSection>

                <TrackedSection
                  sectionId={7}
                  tocTitle="Outcomes and Reflections"
                  isLast
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Outcomes and Reflections" />

                  <motion.p
                    className="mb-6"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    Our approach preserved the essence of GIOS while addressing
                    critical usability issues. Key results:
                  </motion.p>

                  <motion.ul
                    className="flex flex-col gap-4 mb-12 py-2 text-xl md:text-2xl font-medium leading-normal"
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "Simplified navigation enhanced user engagement.",
                      "Trust-building features (e.g., video profiles) improved conversion rates.",
                      "A more intuitive structure allowed users to find information faster.",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 pl-2 pr-4 py-1 w-fit rounded-full border border-sep-primary"
                        variants={textRevealInViewportMotion(0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center justify-center w-[0.7ch] h-[0.7ch] bg-purple-300 rounded-full"></div>

                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.p
                    className=""
                    variants={textRevealInViewportMotion(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    This project underscored the importance of iterative testing
                    and maintaining alignment with user needs. It was a
                    collaborative effort that demonstrated the impact of
                    user-centered design.
                  </motion.p>
                </TrackedSection>
              </div>
            </div>
          </article>
        </motion.main>
      </TOCContext.Provider>
    </>
  );
}
