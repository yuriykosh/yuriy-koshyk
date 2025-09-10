import HeroSection from "@/components/index/HeroSection";
import SocialProof from "@/components/index/SocialProof";
import ProjectsSection from "@/components/index/ProjectsSection";
import TestimonialsSection from "@/components/index/TestimonialsSection";
import CalButton from "@/components/CalButton";
// import CalModal from "@/components/CalModal";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <SocialProof />
        <ProjectsSection />
        <TestimonialsSection />
        <CalButton />
        {/* <CalModal calLink="yuriy-koshyk/default" width="840px" height="680px" /> */}
      </main>
    </>
  );
}
