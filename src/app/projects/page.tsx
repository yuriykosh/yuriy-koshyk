// import { Suspense } from "react";
// import PostHogPageView from "@/components/posthog/post-hog-page-view";
import { projects } from "@/utils/data";
import IntroVideo from "@/components/assets/IntroVideo";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      {/* <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense> */}
      <main className="h-screen w-full p-6">
        <IntroVideo url="https://res.cloudinary.com/dfyj2bzi7/video/upload/f_auto:video,q_auto/bubbles" />
        <h1 className="mb-2 font-medium">Projects:</h1>
        <ul className="flex flex-col gap-2 text-sm font-medium underline">
          {projects.map((project, i) => {
            return (
              <li key={i}>
                <Link href={project.url}>{project.title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
