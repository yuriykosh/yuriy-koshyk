import IntroVideo from "@/components/assets/IntroVideo";
import { projects } from "@/utils/data";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="h-screen w-full p-6">
      <IntroVideo url="https://res.cloudinary.com/dfyj2bzi7/video/upload/f_auto:video,q_auto/bubbles" />
      <h1 className="mb-2 font-semibold">Projects:</h1>
      <ul className="flex flex-col gap-2 text-sm font-semibold underline">
        {projects.map((project, i) => {
          return (
            <li key={i}>
              <Link href={project.url}>{project.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
