import { stack } from "@/utils/data";
import StackItem from "./StackItem";

const StackList = () => {
  return (
    <ul className="col-span-3 flex flex-col justify-between text-sm">
      {stack.map((item, i) => {
        return <StackItem key={i} {...item} />;
      })}
    </ul>
  );
};
export default StackList;
