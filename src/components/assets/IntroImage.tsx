import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface IntroImageProps {
  url: string;
}

const IntroImage: React.FC<IntroImageProps> = ({ url }) => {
  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-[80vh] overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={url}
          fill
          quality={100}
          alt="eventPOS case study hero picture"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
};
export default IntroImage;
