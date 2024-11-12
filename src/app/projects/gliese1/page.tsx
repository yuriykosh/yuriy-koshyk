"use client";

import { motion } from "framer-motion";
import { dividerMotion, textRevealMotion } from "@/utils/animations";
import { TOCContext, useTOCContextValues } from "@/utils/TOCContext";
import Divider from "@/components/assets/Divider";
import IntroImage from "@/components/assets/IntroImage";
import TableOfContents from "@/components/TableOfContents";
import TrackedSection from "@/components/TrackedSection";
import Image from "next/image";

export default function ProjectGlieseOne() {
  const { values } = useTOCContextValues();

  return (
    <TOCContext.Provider value={values}>
      <main>
        <IntroImage url="/images/gliese1.jpg" />
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
              Gliese
              <span className={`text-sky-500`}>1</span>
            </motion.h1>
            <div className="lg:col-span-9 flex flex-col gap-24">
              <motion.h2 className="" variants={textRevealMotion(0.4)}>
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
              <section className="my-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 my-2 text-lg">
                  {[
                    ["Sector:", "B2B, Fintech"],
                    ["Team:", "5 designers"],
                    ["My Role:", "Product Designer"],
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
                  Mission of Gliese1 is to make accounting, analysis and
                  insights of a business fully automated for all kinds of
                  businesses and business processes worldwide
                </p>
              </section>

              <TrackedSection
                sectionId={0}
                tocTitle="Project Goals"
                isFirst
                className="mt-20 mb-10"
              >
                <div className="w-full origin-left mb-6">
                  <Divider />
                </div>
                <h3 className="leading-tight tracking-normal font-medium text-3xl sm:text-4xl mb-10">
                  Project Goals
                </h3>

                <ul className="flex flex-col gap-4 py-2 text-lg  leading-normal">
                  {[
                    "Automated reconciliation",
                    "Account management for banking account",
                    "Transaction change and addition",
                    "Manual journal",
                    "PSP and other integrations",
                    "Comment and investigation for transaction",
                    "Project management tool",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-[1.8ch] h-[1.8ch] text-sky-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          className="w-full h-full"
                        >
                          <path
                            fill="currentColor"
                            d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"
                          ></path>
                          <path
                            fill="currentColor"
                            d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"
                          ></path>
                        </svg>
                      </div>

                      {item}
                    </li>
                  ))}
                </ul>
              </TrackedSection>

              <TrackedSection
                sectionId={1}
                tocTitle="Design Process"
                className="mt-32 mb-12"
              >
                <div className="relative w-full aspect-video scale-110">
                  <Image
                    src={"/images/gliese1/design-process.png"}
                    fill
                    quality={100}
                    alt="image"
                    style={{ objectFit: "contain" }}
                    className="object-top"
                  />
                </div>
              </TrackedSection>

              <TrackedSection
                sectionId={2}
                tocTitle="Key Features"
                className="mt-32 mb-10"
              >
                <h3 className="leading-tight tracking-normal font-medium text-3xl sm:text-4xl mb-4">
                  Key Features
                </h3>
                <p className="leading-normal py-2">
                  EventPOS offers a comprehensive suite of features tailored to
                  the demands of event environments:
                </p>
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
              </TrackedSection>
            </div>
          </div>

          {/* <div className="grid grid-cols-[10%_1fr_10%] lg:grid-cols-[15%_1fr_15%] mt-20 mb-40">
            <TableOfContents />
            <article className="min-h-screen mx-auto max-w-[80ch]">
              <h1 className="leading-tight tracking-tight font-medium text-4xl">
                Introducing SynapseGPT: The Next Generation AI Foundation Model
              </h1>
              <section className="my-8">
                <p className="leading-normal py-2 text-neutral-900">
                  We are thrilled to announce the launch of SynapseGPT, our
                  groundbreaking AI foundation model that promises to redefine
                  the landscape of artificial intelligence. SynapseGPT
                  represents the culmination of years of cutting-edge research
                  and development in deep learning and natural language
                  processing. This model is designed to push the boundaries of
                  what AI can achieve, offering unprecedented capabilities and
                  flexibility across a multitude of applications.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  Our team has worked tirelessly to build a model that not only
                  meets the current needs of various industries but also
                  anticipates future advancements. SynapseGPT is poised to
                  become an indispensable tool for businesses, researchers, and
                  developers alike. Whether you are looking to enhance customer
                  interactions, automate complex processes, or generate
                  insightful data analyses, SynapseGPT is equipped to deliver
                  exceptional results.
                </p>
              </section>
              <TrackedSection
                sectionId={0}
                tocTitle="Unmatched Capabilities"
                isFirst
                className="my-8"
              >
                <h2 className="leading-tight tracking-tight font-medium text-xl mb-2">
                  Unmatched Capabilities and Versatility
                </h2>
                <p className="leading-normal py-2 text-neutral-900">
                  SynapseGPT sets a new standard for versatility in AI, offering
                  capabilities that go far beyond traditional language
                  processing. At its core, SynapseGPT excels in language
                  understanding, enabling it to grasp nuanced meanings and
                  contextual subtleties across different languages and dialects.
                  This makes it an invaluable asset for global companies that
                  operate in diverse linguistic environments.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  In addition to its language processing prowess, SynapseGPT is
                  a powerful tool for content generation. It can produce
                  high-quality, coherent, and contextually relevant content
                  tailored to any purpose, whether it&#39;s crafting engaging
                  marketing copy, creating detailed technical documentation, or
                  writing personalized emails. This versatility makes SynapseGPT
                  a vital resource for content creators, marketers, and
                  communicators.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  Furthermore, SynapseGPT&#39;s data analysis capabilities allow
                  users to extract meaningful insights from complex datasets. By
                  leveraging advanced analytical tools, businesses can uncover
                  hidden patterns, predict future trends, and make data-driven
                  decisions with confidence. SynapseGPT&#39;s ability to process
                  and integrate data from various sources, including text,
                  images, and audio, ensures a comprehensive approach to
                  problem-solving.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  Another notable feature of SynapseGPT is its proficiency in
                  powering conversational agents. It enables intelligent,
                  human-like interactions in chatbots and virtual assistants,
                  significantly enhancing customer service experiences. By
                  understanding and responding to user queries with accuracy and
                  empathy, SynapseGPT helps businesses build stronger
                  relationships with their customers.
                </p>
              </TrackedSection>
              <TrackedSection
                sectionId={1}
                tocTitle="Cutting-Edge Technology"
                className="my-8"
              >
                <h2 className="leading-tight tracking-tight font-medium text-xl mb-2">
                  Cutting-Edge Technology Under the Hood
                </h2>
                <p className="leading-normal py-2 text-neutral-900">
                  The power of SynapseGPT lies in its state-of-the-art
                  architecture and training methodology. At its foundation is a
                  highly optimized version of the transformer architecture,
                  which ensures superior performance and scalability. This
                  architecture allows SynapseGPT to handle vast amounts of data
                  and complex tasks with ease, making it suitable for
                  large-scale deployments.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  SynapseGPT also features multi-modal integration, enabling it
                  to seamlessly process and combine data from various sources.
                  This capability is particularly valuable in applications that
                  require a holistic approach, such as analyzing customer
                  feedback across different channels or integrating visual and
                  textual information for comprehensive insights.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  One of the standout features of SynapseGPT is its ability to
                  be fine-tuned and customized. Businesses and developers can
                  easily adapt the model to meet specific industry needs with
                  minimal data. Whether you&#39;re in healthcare, finance,
                  education, or entertainment, SynapseGPT can be tailored to
                  provide solutions that address your unique challenges and
                  requirements.
                </p>
              </TrackedSection>
              <TrackedSection
                sectionId={2}
                tocTitle="Applications and Impact"
                className="my-8"
              >
                <h2 className="leading-tight tracking-tight font-medium text-xl mb-2">
                  Real-World Applications and Impact
                </h2>
                <p className="leading-normal py-2 text-neutral-900">
                  SynapseGPT is already making a significant impact across a
                  wide range of industries. In healthcare, for example, it
                  enhances diagnostic accuracy and patient care by providing
                  AI-driven medical insights and predictive analytics. By
                  analyzing patient data and medical literature, SynapseGPT can
                  assist healthcare professionals in making more informed
                  decisions and identifying potential health risks early on.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  In the financial sector, SynapseGPT streamlines operations,
                  detects fraud, and offers personalized financial advice. Its
                  ability to analyze large datasets in real-time allows
                  financial institutions to identify fraudulent activities more
                  quickly and accurately. Additionally, SynapseGPT can provide
                  tailored financial recommendations based on individual
                  customer profiles, improving customer satisfaction and
                  loyalty.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  The education industry also benefits from SynapseGPT&#39;s
                  capabilities. It personalizes learning experiences, automates
                  administrative tasks, and supports educators with AI-generated
                  content. By understanding students&#39; unique learning needs
                  and preferences, SynapseGPT helps create customized
                  educational materials and learning paths, enhancing the
                  overall learning experience.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  In the entertainment industry, SynapseGPT revolutionizes
                  content creation. It can write scripts, generate music, and
                  create immersive virtual environments, opening up new
                  possibilities for creative professionals. By leveraging AI to
                  handle repetitive and time-consuming tasks, artists and
                  creators can focus on what they do best: creating compelling
                  and original content.
                </p>
              </TrackedSection>
              <TrackedSection
                sectionId={3}
                tocTitle="Ethical AI"
                className="my-8"
              >
                <h2 className="leading-tight tracking-tight font-medium text-xl mb-2">
                  Our Commitment to Ethical AI
                </h2>
                <p className="leading-normal py-2 text-neutral-900">
                  At [Company Name], we understand that with great power comes
                  great responsibility. The development of SynapseGPT has been
                  guided by a strong emphasis on ethical considerations. We are
                  committed to ensuring that our AI solutions are fair,
                  transparent, and accountable.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  One of our primary goals is to mitigate biases in AI outputs.
                  We have implemented advanced techniques to detect and reduce
                  biases, ensuring that SynapseGPT provides fair and equitable
                  results. This is particularly important in applications that
                  impact people&#39;s lives, such as hiring decisions, loan
                  approvals, and medical diagnoses.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  We also prioritize data privacy and security. SynapseGPT
                  adheres to the highest standards of data protection, ensuring
                  that user information is safeguarded at all times. We believe
                  that maintaining user trust is crucial to the success of our
                  AI solutions.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  Transparency and accountability are also key components of our
                  ethical framework. We strive to promote transparency in AI
                  decision-making processes, making it easier for users to
                  understand how SynapseGPT arrives at its conclusions.
                  Additionally, we maintain accountability in the deployment of
                  our AI solutions, ensuring that any issues or concerns are
                  promptly addressed.
                </p>
              </TrackedSection>
              <TrackedSection sectionId={4} tocTitle="" isLast className="my-8">
                <h2 className="leading-tight tracking-tight font-medium text-xl mb-2">
                  A Future Powered by SynapseGPT
                </h2>
                <p className="leading-normal py-2 text-neutral-900">
                  The launch of SynapseGPT marks a significant milestone in our
                  journey towards creating intelligent systems that enhance
                  human capabilities and drive innovation. We are excited to see
                  how SynapseGPT will transform industries, create new
                  opportunities, and unlock the full potential of artificial
                  intelligence.
                </p>
                <p className="leading-normal py-2 text-neutral-900">
                  We invite you to explore the possibilities with SynapseGPT and
                  join us in shaping the future of AI. Stay tuned for more
                  updates and insights into how SynapseGPT is making a
                  difference across various sectors. Together, let&#39;s harness
                  the power of AI to achieve greater heights and build a better
                  tomorrow.
                </p>
              </TrackedSection>
            </article>
          </div> */}
        </article>
      </main>
    </TOCContext.Provider>
  );
}
