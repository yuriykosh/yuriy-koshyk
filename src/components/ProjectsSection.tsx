"use client";

import { projects } from "@/utils/data";
import Card from "./Card";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <section ref={container} className="relative mt-[15vh] mb-6">
      <h3 className="text-sm text-bg-primary font-semibold sticky m-6 top-6 mix-blend-difference">
        Selected work
      </h3>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            // url={""}
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};
export default ProjectsSection;
