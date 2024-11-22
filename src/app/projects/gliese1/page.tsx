"use client";

import { motion } from "framer-motion";
import { dividerMotion, easings, textRevealMotion } from "@/utils/animations";
import { TOCContext, useTOCContextValues } from "@/utils/TOCContext";
import Divider from "@/components/assets/Divider";
import IntroImage from "@/components/assets/IntroImage";
import TableOfContents from "@/components/TableOfContents";
import TrackedSection from "@/components/TrackedSection";
import TopicTitle from "@/components/projects/TopicTitle";
import SinglePicture from "@/components/projects/SinglePicture";
import DoublePicture from "@/components/projects/DoublePicture";
import CarbonCheckmarkOutline from "@/components/assets/icons/CarbonCheckmarkOutline";
import TransitionOverlay from "@/components/assets/TransitionOverlay";

export default function ProjectGlieseOne() {
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
            url="/images/gliese1.jpg"
            alt="Gliese1 case study hero picture"
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
                Gliese
                <span className={`text-sky-500`}>1</span>
              </motion.h1>
              <div className="lg:col-span-9 flex flex-col gap-24">
                <motion.h2 className="" variants={textRevealMotion(1.9)}>
                  Finance SaaS solution for all kinds of businesses
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
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 mb-10 text-base font-medium text-sky-500">
                    {[
                      ["Sector:", "B2B, Fintech"],
                      ["Team:", "5 designers"],
                      ["My Role:", "Product Designer"],
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
                  <p className="text-xl md:text-2xl font-medium leading-normal">
                    The mission of Gliese1 is to fully automate accounting,
                    analysis, and business insights, providing seamless,
                    intelligent solutions for businesses of all types and sizes,
                    across industries worldwide.
                  </p>
                </section>

                <TrackedSection
                  sectionId={0}
                  tocTitle="Project Overview"
                  isFirst
                  className="mb-32"
                >
                  <TopicTitle title="Project Overview" />

                  <p className="text-xl md:text-2xl font-medium leading-normal mb-32">
                    In this case study, we worked on designing a financial
                    reconciliation platform for professionals in the accounting
                    and finance sectors. The project followed the{" "}
                    <span className="text-sky-500">
                      Double Diamond methodology
                    </span>
                    , which helped us navigate through the phases of{" "}
                    <span className="text-sky-500">Discovery</span>,{" "}
                    <span className="text-sky-500">Define</span>,{" "}
                    <span className="text-sky-500">Develop</span>, and{" "}
                    <span className="text-sky-500">Deliver</span>.
                  </p>

                  <TopicTitle title="Project Goals" />

                  <ul className="flex flex-col gap-4 py-2 text-xl md:text-2xl font-medium leading-normal">
                    {[
                      "Automated reconciliation",
                      "Account management for banking account",
                      "Transaction change and addition",
                      "Manual journal",
                      "PSP and other integrations",
                      "Comment and investigation for transaction",
                      "Project management tool",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 pl-2 pr-4 py-1 w-fit rounded-full border border-fg-secondary/80"
                      >
                        <div className="flex items-center justify-center w-[1.3ch] h-[1.3ch] text-sky-500">
                          <CarbonCheckmarkOutline />
                        </div>

                        {item}
                      </li>
                    ))}
                  </ul>
                </TrackedSection>

                <TrackedSection
                  sectionId={1}
                  tocTitle="Phase 1: Discovery"
                  className="mb-40 text-xl md:text-2xl font-medium leading-normal"
                >
                  {/* -- Project Planning -- */}
                  <div className="mb-48">
                    <TopicTitle title="Project Planning" />

                    <p className=" mb-16">
                      The Double Diamond approach, with its clear division into
                      exploration and refinement phases, allowed us to balance
                      user discovery with targeted solution development.
                    </p>

                    <SinglePicture
                      url="/images/gliese1/design-process.png"
                      alt="The Double Diamond visual explanation"
                    />
                  </div>

                  {/* -- Lean Canvas -- */}
                  <div>
                    <TopicTitle title="Lean Canvas" />

                    <p className="mb-16">
                      We visualized the core business idea through a Lean
                      Canvas, which allowed us to focus on the key aspects of
                      the business model. This method helped us align the
                      product&#39;s value proposition with user needs, and it
                      served as a practical tool for organizing business
                      information in one place.
                    </p>
                    <SinglePicture
                      url="/images/gliese1/lean-canvas.png"
                      alt="Lean Canvas Table"
                    />

                    <p className="mb-20">
                      By organizing information into this single-page format,
                      the Lean Canvas provided our team and stakeholders with a
                      shared, comprehensive overview of the business model. This
                      clarity enabled faster decision-making and kept us focused
                      on validated assumptions.
                    </p>

                    <ul className="p-2 rounded-2xl border border-fg-secondary/80">
                      {[
                        [
                          "Identifying the Problem:",
                          "We identified a significant gap for small to mid-size businesses in managing complex financial transactions efficiently. Current tools require excessive manual input, lack integration, and do not fully meet the needs for streamlined accounting, analytics, and insights.",
                        ],
                        [
                          "Defining the Solution:",
                          "Our solution offers a fully automated, customizable financial management tool tailored for businesses with high transaction volumes. This tool centralizes budgeting, reporting, reconciliation, and team management in one platform, reducing the need for multiple separate applications and manual work.",
                        ],
                        [
                          "Unique Value Proposition:",
                          "Our product is the first all-in-one, fully customizable accounting and financial insights platform that integrates seamlessly with a business’s specific needs, delivering simplicity, automation, and transparency in financial processes.",
                        ],
                        [
                          "Customer Segments & Channels:",
                          "Our primary customers are small to mid-sized businesses, e-commerce platforms, and large companies with high transaction volumes. We plan to reach these segments through a web application and networking at industry events like financial tech exhibitions.",
                        ],
                        [
                          "Key Metrics:",
                          "To measure success, we track the acquisition of our first 100 clients, system reliability (GDPR-compliant security), and the tool’s ability to handle large data volumes without performance issues.",
                        ],
                      ].map(([title, details], i) => (
                        <li key={i} className="mb-4 px-2 py-4">
                          <h4 className="inline text-sky-500">{title} </h4>
                          <p className="inline">{details}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TrackedSection>

                <TrackedSection
                  sectionId={2}
                  tocTitle="Phase 2: Definition"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  {/* -- Competitor Analysis & Functionality Research -- */}
                  <div className="mb-40">
                    <TopicTitle title="Competitor Analysis & Functionality Research" />

                    <p className="mb-16">
                      We conducted an in-depth competitor analysis using Jakob
                      Nielsen&#39;s heuristics to understand how other products
                      in the market address similar problems.
                    </p>

                    <DoublePicture
                      urlLeft="/images/gliese1/functionality-research.png"
                      urlRight="/images/gliese1/competitor-analysis.png"
                      alt="Competitor Analysis & Functionality Research Visuals"
                    />

                    <p className="mb-4">
                      This analysis led to the following findings:
                    </p>
                    <ul className="flex flex-col gap-4 py-2 mb-12 text-lg md:text-xl font-medium leading-normal">
                      {[
                        "Many products fail to provide users with full autonomy.",
                        "Some competitors have significant issues preventing errors.",
                        "Several systems lack flexibility, which hinders efficiency.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-baseline gap-3 w-fit">
                          <div className="flex">
                            <div className="w-2 h-2 -translate-y-0.5 rounded-full bg-fg-secondary opacity-60" />
                          </div>

                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="">
                      These insights were crucial in differentiating our product
                      by focusing on user autonomy, flexibility, and error
                      prevention.
                    </p>
                  </div>

                  {/* -- User Interviews -- */}
                  <div className="mb-40">
                    <TopicTitle title="User Interviews" />

                    <p className="mb-16">
                      We conducted interviews with 7 industry specialists
                      (accountants and financial directors from Ukraine and
                      Europe).
                    </p>

                    <SinglePicture
                      url="/images/gliese1/user-interviews.png"
                      alt="Pictures from Interviews"
                    />

                    <p className="mb-8">
                      Key insights from the interviews included:
                    </p>
                    <div className="mb-12 p-2 rounded-2xl border border-fg-secondary/80">
                      <div className="mb-4 px-2 py-4">
                        <h4 className="inline text-sky-500">Tools Used: </h4>
                        <p className="inline">
                          Users worked with Wise, BAS ERP, WHMCS, and 1C{" "}
                          <span className="text-fg-secondary">
                            (unfortunately)
                          </span>
                          .
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 p-2 py-4">
                        <h4 className="text-sky-500">Pain Points:</h4>
                        <ul className="flex flex-col gap-8 py-2 text-l md:text-xl font-medium leading-normal">
                          {[
                            "Issues with automating workflows when dealing with external clients.",
                            "The need for manual input in systems despite automation.",
                            "Difficulty in switching to a new system due to the complexity and cost of migration.",
                          ].map((item, i) => (
                            <li
                              key={i}
                              className="flex items-baseline gap-3 w-fit"
                            >
                              <div className="flex">
                                <div className="w-2 h-2 -translate-y-0.5 rounded-full bg-fg-secondary opacity-60" />
                              </div>

                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p className="">
                      This feedback was invaluable for shaping the product&#39;s
                      user experience to address these concerns.
                    </p>
                  </div>

                  {/* -- Personas -- */}
                  <div className="mb-40">
                    <TopicTitle title="Personas" />

                    <p className="mb-16">
                      We developed two personas based on our interviews:
                    </p>

                    <DoublePicture
                      urlLeft="/images/gliese1/persona-1.png"
                      urlRight="/images/gliese1/persona-2.png"
                      alt="Persona"
                    />

                    <p className="mb-6">
                      This analysis led to the following findings:
                    </p>
                    <ul className="flex flex-col gap-10 py-2 mb-12 text-xl md:text-2xl font-medium leading-normal">
                      {(
                        [
                          [
                            "Lesya",
                            "Accountant",
                            [
                              "Making manual errors, fixing system glitches manually, missing deadlines.",
                              "Simplify routine tasks, improve workflow efficiency.",
                            ],
                          ],
                          [
                            "Valentyn",
                            "Financial Director",
                            [
                              "Inefficient software affecting team performance and company reputation.",
                              "Use efficient software to improve reconciliation and payment processing.",
                            ],
                          ],
                        ] as [string, string, [string, string]][]
                      ).map(([name, role, [fears, wants]], i) => (
                        <li key={i} className="flex flex-col gap-4">
                          <h4 className="text-sky-500">
                            {name},{" "}
                            <span className="text-fg-primary">{role}</span>
                          </h4>
                          <ul className="flex flex-col gap-2">
                            <li className="text-lg md:text-xl">
                              <span className="text-fg-secondary">Fears: </span>
                              {fears}
                            </li>
                            <li className="text-lg md:text-xl">
                              <span className="text-fg-secondary">Wants: </span>
                              {wants}
                            </li>
                          </ul>
                        </li>
                      ))}
                    </ul>

                    <p className="">
                      These personas helped us empathize with our users and
                      prioritize features.
                    </p>
                  </div>

                  {/* -- Customer Journey Mapping (CJM) -- */}
                  <div className="mb-40">
                    <TopicTitle title="Customer Journey Mapping (CJM)" />

                    <p className="mb-16">
                      We created customer journey maps to visualize the user
                      experience and identify key frustration points.
                    </p>

                    <DoublePicture
                      urlLeft="/images/gliese1/cjm-1.png"
                      urlRight="/images/gliese1/cjm-2.png"
                      alt="Customer Journey Map (CJM)"
                    />

                    <ul className="mb-12 p-2 rounded-2xl border border-fg-secondary/80">
                      {[
                        [
                          "Lesya:",
                          "Key frustrations during reconciliation were identifying payment discrepancies and fixing errors.",
                        ],
                        [
                          "Valentyn:",
                          "Key concerns were ensuring team efficiency and identifying discrepancies that could impact company metrics.",
                        ],
                      ].map(([title, details], i) => (
                        <li key={i} className="mb-4 px-2 py-4">
                          <h4 className="inline text-sky-500">{title} </h4>
                          <p className="inline">{details}</p>
                        </li>
                      ))}
                    </ul>

                    <p className="">
                      This helped us identify areas where we could streamline
                      the process.
                    </p>
                  </div>

                  {/* -- Value Proposition & Validation -- */}
                  <div className="">
                    <TopicTitle title="Value Proposition & Validation" />

                    <p className="mb-16">
                      We used a Value Canvas to ensure the product&#39;s value
                      proposition aligned with user expectations.
                    </p>

                    <SinglePicture
                      url="/images/gliese1/value-proposition-canvas.png"
                      alt="Value-Proposition Canvas"
                    />

                    <p className="mb-4">Our findings showed that:</p>
                    <ul className="flex flex-col gap-4 py-2 mb-12 text-lg md:text-xl font-medium leading-normal">
                      {[
                        "The product's core features (payment reconciliation, report generation) aligned with user needs.",
                        "It addressed pain points such as manual reporting and lack of transaction status visibility.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-baseline gap-3 w-fit">
                          <div className="flex">
                            <div className="w-2 h-2 -translate-y-0.5 rounded-full bg-sky-500 opacity-60" />
                          </div>

                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="">
                      We conducted a survey to triangulate our qualitative
                      findings, confirming the presence of similar issues among
                      the target audience.
                    </p>
                  </div>
                </TrackedSection>

                <TrackedSection
                  sectionId={3}
                  tocTitle="Phase 3: Development"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  {/* -- Ideation & Prototyping -- */}
                  <div className="mb-40">
                    <TopicTitle title="Ideation & Prototyping" />

                    <p className="mb-16">
                      In the{" "}
                      <span className="text-sky-500">Ideation Phase</span> , we
                      revisited our competitor research to see how others solved
                      similar problems. After analyzing different solutions, we
                      ideated and refined our approach:
                    </p>

                    <SinglePicture
                      url="/images/gliese1/ideation.png"
                      alt="Ideation Flow"
                    />

                    <ul className=" p-2 rounded-2xl border border-fg-secondary/80">
                      {[
                        [
                          "Wireframes:",
                          "We sketched out early designs to test different ideas for UI components.",
                        ],
                        [
                          "Prototyping:",
                          "Interactive prototypes were created to demonstrate the flow of tasks in the reconciliation process and show how users would interact with the tool.",
                        ],
                      ].map(([title, details], i) => (
                        <li key={i} className="mb-4 px-2 py-4">
                          <h4 className="inline text-sky-500">{title} </h4>
                          <p className="inline">{details}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* -- Architecture Design -- */}
                  <div className="">
                    <TopicTitle title="Architecture Design" />

                    <p className="mb-16">
                      The design architecture was developed with a focus on
                      intuitive usability and scalability.
                    </p>

                    <SinglePicture
                      url="/images/gliese1/architecture.png"
                      alt="Architecture Map"
                    />

                    <p className="mb-6">Key aspects of the design included:</p>

                    <ul className=" p-2 rounded-2xl border border-fg-secondary/80">
                      {[
                        [
                          "Intuitive Interface:",
                          "We designed a clean, modern UI for users to perform reconciliations quickly.",
                        ],
                        [
                          "Advanced Analytics Tools:",
                          "Interactive charts and graphs for financial analysis.",
                        ],
                        [
                          "Microservice Architecture:",
                          "Ensured scalability and easy integration with other systems.",
                        ],
                        [
                          "Security:",
                          "Implemented strong data protection standards.",
                        ],
                      ].map(([title, details], i) => (
                        <li key={i} className="mb-2 px-2 py-4">
                          <h4 className="inline text-sky-500">{title} </h4>
                          <p className="inline">{details}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TrackedSection>

                <TrackedSection
                  sectionId={4}
                  tocTitle="Phase 4: Delivery"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Phase 4: Testing & Iteration" />

                  <p className="mb-16">
                    Testing was a key part of refining the design, with{" "}
                    <span className="text-sky-500">3 rounds of iteration</span>{" "}
                    based on user feedback.
                  </p>

                  <div className="mb-12 p-2 rounded-2xl border border-fg-secondary/80">
                    <div className="mb-4 px-2 py-4">
                      <h4 className="inline  text-fg-secondary">
                        Challenges:{" "}
                      </h4>
                      <p className="inline">
                        Users were often focused on their own workflows, which
                        made testing difficult. However, these insights revealed
                        a major barrier:{" "}
                        <span className="text-sky-500">
                          the difficulty of transitioning to a new tool.
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 p-2 py-4">
                      <h4 className="text-fg-secondary">Pain Points:</h4>
                      <ul className="p-2 text-l md:text-xl rounded-2xl border border-fg-secondary/80">
                        {[
                          [
                            "Onboarding:",
                            "We enhanced the onboarding process using tooltips and tutorials to guide users through the platform.",
                          ],
                          [
                            "Call-to-Action (CTA):",
                            "We optimized CTAs based on user preferences.",
                          ],
                          [
                            "Workflow Refinements:",
                            `We adjusted the reconciliation flow and how users interact with "unreconciled" and "investigation" items.`,
                          ],
                        ].map(([title, details], i) => (
                          <li key={i} className="px-2 py-4">
                            <h4 className="inline text-sky-500">{title} </h4>
                            <p className="inline">{details}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TrackedSection>

                <TrackedSection
                  sectionId={5}
                  tocTitle="Final Designs"
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  {/* -- Dashboard -- */}
                  <div className="mb-48">
                    <TopicTitle title="Dashboard" />

                    <p className="mb-16">
                      The final design focused on user-centered features,
                      including a customizable dashboard
                    </p>

                    <SinglePicture
                      url="/images/gliese1/dashboard.png"
                      alt="Dashboard screens"
                    />
                  </div>

                  {/* -- Onboarding -- */}
                  <div className="mb-48">
                    <TopicTitle title="Onboarding" />

                    <p className="mb-16">
                      The onboarding experience has been redesigned to help new
                      users quickly understand how to use the platform and its
                      core features.
                    </p>

                    <SinglePicture
                      url="/images/gliese1/onboarding.png"
                      alt="Onboarding screens"
                    />
                  </div>

                  {/* -- Transactions -- */}
                  <div className="mb-48">
                    <TopicTitle title="Transactions" />

                    <p className="mb-16">
                      A streamlined interface for managing transactions, making
                      it easier for users to add, edit, and categorize financial
                      entries.
                    </p>
                    <SinglePicture
                      url="/images/gliese1/transactions.png"
                      alt="Transactions screens"
                    />
                  </div>

                  {/* -- Manual Journal -- */}
                  <div className="mb-48">
                    <TopicTitle title="Manual Journal" />

                    <p className="mb-16">
                      The Manual Journal interface allows users to make manual
                      entries and adjustments to their financial records.
                    </p>
                    <SinglePicture
                      url="/images/gliese1/manual-journal.png"
                      alt="Manual Journal screens"
                    />
                  </div>

                  {/* -- Banking -- */}
                  <div className="mb-48">
                    <TopicTitle title="Banking" />

                    <p className="mb-16">
                      The Banking section provides an overview of linked bank
                      accounts, transaction history, and reconciliation tools.
                    </p>
                    <SinglePicture
                      url="/images/gliese1/banking.png"
                      alt="Banking screens"
                    />
                  </div>

                  {/* -- Reconciliation -- */}
                  <div className="mb-48">
                    <TopicTitle title="Reconciliation" />

                    <p className="mb-16">
                      The Reconciliation section enables users to match their
                      financial records with external bank statements.
                    </p>
                    <SinglePicture
                      url="/images/gliese1/reconciliation-1.png"
                      alt="Reconciliation screens"
                    />
                    <SinglePicture
                      url="/images/gliese1/reconciliation-2.png"
                      alt="Reconciliation screens"
                    />
                  </div>

                  {/* -- Projects -- */}
                  <div className="mb-48">
                    <TopicTitle title="Projects" />

                    <p className="mb-16">
                      This section allows users to manage financial data for
                      specific projects or initiatives.
                    </p>
                    <SinglePicture
                      url="/images/gliese1/projects.png"
                      alt="Projects screens"
                    />
                  </div>

                  {/* -- Team -- */}
                  <div className="">
                    <TopicTitle title="Team" />

                    <p className="mb-16">
                      The Team section is designed for multi-user management,
                      allowing team leads and managers to assign roles and
                      monitor team members&#39; access to financial data.
                    </p>
                    <SinglePicture
                      url="/images/gliese1/team.png"
                      alt="Team screens"
                    />
                  </div>
                </TrackedSection>

                <TrackedSection
                  sectionId={6}
                  tocTitle="Conclusion"
                  isLast
                  className="mb-32 text-xl md:text-2xl font-medium leading-normal"
                >
                  <TopicTitle title="Conclusion" />

                  <p className="mb-16">
                    Through careful user research, competitor analysis,
                    iterative testing, and design thinking, we created a product
                    that not only meets user needs but also offers a unique
                    solution in the market for financial reconciliation.
                  </p>
                  <SinglePicture
                    url="/images/gliese1/conclusion.png"
                    alt="Gliese1 is on the way to the market"
                  />
                  <ul className="p-2 rounded-2xl border border-fg-secondary/80">
                    {[
                      [
                        "Impact:",
                        "The new design improved overall user satisfaction, reduced task completion times, and minimized user errors during data entry and reconciliation.",
                      ],
                      [
                        "Next Steps:",
                        "Ongoing user feedback and iterative improvements based on real-world usage.",
                      ],
                    ].map(([title, details], i) => (
                      <li key={i} className="mb-4 px-2 py-4">
                        <h4 className="inline text-sky-500">{title} </h4>
                        <p className="inline">{details}</p>
                      </li>
                    ))}
                  </ul>
                </TrackedSection>
              </div>
            </div>
          </article>
        </motion.main>
      </TOCContext.Provider>
    </>
  );
}
