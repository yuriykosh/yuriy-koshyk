import * as motion from "framer-motion/client";
import { caseContentMotion } from "@/utils/animations";

import Image from "next/image";

interface SinglePictureProps {
  url: string;
  alt: string;
  className?: string;
}

const SinglePicture: React.FC<SinglePictureProps> = ({
  url,
  alt,
  className,
}) => {
  return (
    <motion.div
      className="mb-20 relative w-full aspect-video scale-110 rounded-xl overflow-clip"
      variants={caseContentMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{
        margin: "-200px",
        once: true,
      }}
    >
      <Image
        src={url}
        fill
        quality={100}
        sizes="75vw"
        alt={alt}
        className={className}
      />
    </motion.div>
  );
};
export default SinglePicture;