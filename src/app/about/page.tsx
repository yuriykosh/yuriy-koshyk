import StackList from "@/components/about/StackList";
import Divider from "@/components/assets/Divider";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <section className="w-full mt-[35vh] px-6 leading-tight tracking-tight font-medium text-5xl">
        <h1 className="mb-4">
          Hi, I&#39;m Yuriy! I help design user experiences & interfaces for
          companies with ambitious missions.
        </h1>
        <Divider />
      </section>
      <section className="grid grid-cols-6 p-6 my-20">
        <StackList />

        <div className="col-span-3 flex flex-col gap-10 text-2xl font-medium">
          <p>
            I&#39;ve spent a little over 4+ years designing at early to growth
            stage startups, building intuitive experiences by digging into
            product discovery, leveraging customer & user insights to make sense
            of systems, and a thorough enjoyment for rapid prototyping.
          </p>
          <p>
            I&#39;ve worked across product design, brand, and front-end
            development which has allowed me to wear many hats in various roles.
          </p>
          <p>
            My design process follows the model of the Double Diamond process,
            based on the principles of divergence and convergence, in repeated
            cycles with feedback at each complete iteration.
          </p>
          <p>
            I value transparency and getting feedback as early as possible, and
            if there&#39;s something I don&#39;t know, I ask questions early on.
          </p>
          <p>
            I enjoy watching standup comedy, and playing soccer and chess, and
            checking out latest drops in fashion. I&#39;ve also been reading The
            Art of Visual Perception by Rudolf Arnheim and highly recommend it
            to anyone interested in design.
          </p>
          <p>
            I built this site with modular components in Vue, using Vite, a
            build tool optimized for Vue projects. Using GitHub as the remote, I
            basically deploy the build to Vercel on the latest commit. I&#39;m
            also using .webp file formats to further optimize the performance of
            this site (in terms of loading images), in place of using .png files
            for image assets. The typeface I&#39;ve chosen to use is from my
            friend Jordan Winick.
          </p>
          <p>
            Always down to chat, so feel free to say hey{" "}
            <Link
              href={"/"}
              className="underline hover:text-fg-secondary transition-colors duration-200"
            >
              over email
            </Link>
            !
          </p>
        </div>
      </section>
    </main>
  );
}
