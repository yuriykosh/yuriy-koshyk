import * as motion from "framer-motion/client";
import { caseContentMotion } from "@/utils/animations";

import Image from "next/image";

interface DoublePictureProps {
  urlLeft: string;
  urlRight: string;
  alt: string;
  className?: string;
}

const DoublePicture: React.FC<DoublePictureProps> = ({
  urlLeft,
  urlRight,
  alt,
  className,
}) => {
  return (
    <motion.ul
      className={`flex gap-4 w-full mb-20 aspect-video scale-110 ${className}`}
      variants={caseContentMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{
        margin: "-200px",
        once: true,
      }}
    >
      <motion.li
        className="relative w-full h-full rounded-xl overflow-clip"
        variants={caseContentMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{
          margin: "-200px",
          once: true,
        }}
      >
        <Image
          src={urlLeft}
          fill
          quality={100}
          sizes="40vw"
          alt={`${alt} 1`}
          className="object-cover"
        />
      </motion.li>
      <motion.li
        className="relative w-full h-full rounded-xl overflow-clip"
        variants={caseContentMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{
          margin: "-200px",
          once: true,
        }}
      >
        <Image
          src={urlRight}
          fill
          quality={100}
          sizes="40vw"
          alt={`${alt} 2`}
          className="object-cover"
        />
      </motion.li>
    </motion.ul>
  );
};
export default DoublePicture;
