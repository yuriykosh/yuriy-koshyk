import * as motion from "framer-motion/client";

import Divider from "@/components/assets/Divider";
import { caseContentMotion, easings } from "@/utils/animations";

interface TopicTitleProps {
  title: string;
}

const TopicTitle: React.FC<TopicTitleProps> = ({ title }) => {
  return (
    <>
      <motion.div
        className="w-full origin-left mb-6"
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
          transition: {
            delay: 0.3,
            duration: 0.8,
            ease: easings.easeInOutQuint,
          },
        }}
        viewport={{
          once: true,
        }}
      >
        <Divider />
      </motion.div>
      <motion.h3
        className="mb-10 leading-tight tracking-normal font-medium text-sm text-fg-secondary"
        variants={caseContentMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        {title}
      </motion.h3>
    </>
  );
};
export default TopicTitle;
