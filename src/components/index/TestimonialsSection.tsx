import Divider from "@/components/assets/Divider";

const TestimonialsSection = () => {
  return (
    <section className="mb-20">
      <div className="px-6">
        <Divider />
      </div>

      <h3 className="mb-20 text-sm text-bg-primary font-medium sticky m-6 top-6 mix-blend-difference">
        What people say
      </h3>
      <ul className="flex flex-col sm:flex-row max-w-[1280px] 2xl:gap-20 mx-auto px-6 gap-12 text-fg-primary text-sm font-medium">
        <li className="sm:h-64 sm:flex sm:items-start">
          <figure className="flex flex-col gap-2">
            <q className="text-fg-secondary">
              {" "}
              Yuriy is a very talented designer, with an eye for innovative
              solutions. He is hard working and is very detail orientated. He is
              a team player and works great in a team. We have been very happy
              with his design work and will use him in the future for sure.{" "}
            </q>
            <figcaption className="flex flex-col items-end">
              &mdash; Jana Flaskova
              <span className="text-xs text-fg-secondary">Web Developer</span>
            </figcaption>
          </figure>
        </li>
        <li className="sm:h-64 sm:flex sm:items-center">
          <figure className="flex flex-col gap-2">
            <q className="text-fg-secondary">
              {" "}
              I found Yuriy an easy going colleague who is very talented at
              designing mobile apps. I also admire his dedication to learn new
              things and staying on top of the game.{" "}
            </q>
            <figcaption className="flex flex-col items-end">
              &mdash; Peter Robert Poulsen
              <span className="text-xs text-fg-secondary">
                CEO at Heimdal Data ApS
              </span>
            </figcaption>
          </figure>
        </li>
        <li className="sm:h-64 sm:flex sm:items-end">
          <figure className="flex flex-col gap-2">
            <q className="text-fg-secondary">
              {" "}
              Yuriy consistently demonstrated the ability to immediately grasp
              complex situations and identify the core issues. He approached
              every task independently, thoughtfully, and with great care. His
              strategic mindset, combined with a high level of precision and
              reliability, made him a driving force behind key initiatives... He
              always delivered outstanding results - both in quality and
              execution.{" "}
            </q>
            <figcaption className="flex flex-col items-end">
              &mdash; Steffen Siefert
              <span className="text-xs text-fg-secondary">
                GM & Co-Founder of
              </span>
              <span className="text-xs text-fg-secondary">
                DF Druckluft-Fachhandel GmbH
              </span>
            </figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default TestimonialsSection;
