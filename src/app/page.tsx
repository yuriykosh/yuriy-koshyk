import ProjectsSection from "@/components/index/ProjectsSection";
import HeroSection from "@/components/index/HeroSection";
import PostHogPageView from "@/components/posthog/post-hog-page-view";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      <main>
        <HeroSection />
        <ProjectsSection />
      </main>
    </>
  );
}
