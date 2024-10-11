import StackList from "@/components/about/StackList";
import Divider from "@/components/assets/Divider";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <section className="w-full mt-[35vh] px-6 text-[3.5rem] leading-tight tracking-tight font-medium ">
        <h1 className="mb-4">
          Designing impactful digital experiences with a focus on business
          growth and user satisfaction.
        </h1>
        <Divider />
      </section>

      <section className="grid grid-cols-6 p-6 my-20">
        <StackList />

        <div className="col-span-3 flex flex-col gap-10 text-2xl font-medium">
          <p>
            Hey there! I&#39;m Yuriy Koshyk, a Product Designer with 4+ years of
            experience, blending creativity and technical expertise to craft
            user-friendly, data-driven digital solutions that drive business
            results. My focus is on creating digital experiences that not only
            look great but also deliver on business and user needs.
          </p>
          <p>
            I&#39;ve had the chance to work on 15+ projects as a freelancer,
            leading full design research cycles—everything from user research to
            prototyping and testing. I&#39;m all about finding innovative
            solutions that drive growth and keep users happy. I love diving into
            data, monitoring KPIs, and tweaking designs based on real feedback
            to get the best possible results.
          </p>
          <p>
            I&#39;ve also had the privilege of leading tech teams, including
            running technical side at DF Druckluft-Fachhandel GmbH as Head of
            Systems & IT (CTO), where I optimized UX processes that bumped
            revenue by 10% in just 3 months. I thrive in agile environments,
            always aiming to bring out the best in cross-functional teams and
            external partners.
          </p>
          <p>
            I&#39;ve worn quite a few hats across UX/UI design and front-end
            development, allowing me to see the bigger picture in projects and
            bridge the gap between design and development. Tools like Figma,
            Webflow, and Framer are my go-tos, and I keep up with new tech
            trends to push boundaries in design. My process is all about
            user-centered design—making sure every iteration is shaped by real
            feedback and business goals.
          </p>
          <ul className="grid grid-cols-3 gap-4">
            <li className="col-span-2 relative w-full h-fit aspect-video overflow-hidden">
              <video
                src={
                  "https://res.cloudinary.com/dfyj2bzi7/video/upload/f_auto:video,q_auto/ddeffcvyciubbykggka9"
                }
                autoPlay
                muted
                playsInline
                loop
                style={{ objectFit: "cover" }}
                className="object-top -translate-y-[8%]"
              />
            </li>
            <li className="relative col-span-1">
              <Image
                src={
                  "https://res.cloudinary.com/dfyj2bzi7/image/upload/f_auto,q_auto/o2b3jicfnzazkfs6alhq"
                }
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                alt="basketball gif"
                style={{ objectFit: "cover" }}
              />
            </li>
          </ul>
          <p>
            When I&#39;m not immersed in design, you can catch me enjoying
            basketball, snapping street photography, or diving into a good movie
            or book.
          </p>

          <p>
            I’m always up for a chat—feel free to{" "}
            <Link
              href={"/"}
              className="underline hover:text-fg-secondary transition-colors duration-200"
            >
              drop me a message
            </Link>
            !
          </p>
        </div>
      </section>
    </main>
  );
}
