import * as motion from "framer-motion/client";

import { stack } from "@/utils/data";
import StackItem from "./StackItem";
import { easings } from "@/utils/animations";

const StackList = () => {
  return (
    <motion.ul
      className="col-span-1 md:col-span-3 max-md:order-last flex flex-col gap-12 lg:justify-between text-sm"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.0,
          duration: 0.8,
          ease: easings.easeInOutQuint,
        },
      }}
    >
      {stack.map((item, i) => {
        return <StackItem key={i} {...item} />;
      })}
    </motion.ul>
  );
};
export default StackList;
