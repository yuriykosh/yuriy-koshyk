import * as motion from "framer-motion/client";

import { easings, textRevealMotion } from "@/utils/animations";
import ProjectsSection from "@/components/ProjectsSection";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
