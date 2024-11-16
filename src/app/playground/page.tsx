import * as motion from "framer-motion/client";

import Divider from "@/components/assets/Divider";
import { dividerMotion, textRevealMotion } from "@/utils/animations";
import { playgroundItems } from "@/utils/data";
// import Image from "next/image";
// import Link from "next/link";
import Item from "@/components/playground/Item";

export default function Playground() {
  return (
    <main>
      <motion.section
        className="w-full mt-[35vh] px-6 text-4xl md:text-[3.5rem] leading-tight tracking-tight font-medium"
        initial="initial"
        animate="animate"
      >
        <motion.h1 className="mb-20" variants={textRevealMotion(0)}>
          Welcome to my playground. Here you can find some extra staff I do.
        </motion.h1>
        <motion.div className="w-full origin-left" variants={dividerMotion}>
          <Divider />
        </motion.div>
      </motion.section>

      <section className="p-6 mt-4 mb-24">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8">
          {playgroundItems.map((item, i) => {
            return (
              <Item key={i} {...item} />
              // <li key={i} className="flex flex-col w-full aspect-[5/4] ">
              //   {!item.url ? (
              //     <div className="relative w-full h-full">
              //       <Image
              //         src={item.src}
              //         fill
              //         alt={item.description}
              //         className="object-cover"
              //       />
              //     </div>
              //   ) : (
              //     <Link href={item.url} className="relative w-full h-full">
              //       <Image
              //         src={item.src}
              //         fill
              //         alt={item.description}
              //         className="object-cover"
              //       />
              //     </Link>
              //   )}
              //   <Link href={item.url} className="relative w-full h-full">
              //     <Image
              //       src={item.src}
              //       fill
              //       alt={item.description}
              //       className="object-cover"
              //     />
              //   </Link>
              //   <div className="p-2">
              //     {" "}
              //     <h2 className="text-sm font-medium">{item.title}</h2>
              //     <p className="text-sm font-medium text-fg-secondary">
              //       {item.tags}
              //     </p>
              //   </div>
              // </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
