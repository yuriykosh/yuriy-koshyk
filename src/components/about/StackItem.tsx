// import Divider from "../assets/Divider";

interface StackItemProps {
  category: string;
  skills: string[];
  color: string;
}

const StackItem: React.FC<StackItemProps> = ({ category, skills }) => {
  // const textColor = color !== "" ? "" : "text-fg-secondary";

  return (
    <li className="flex flex-col gap-4  w-fit">
      <h2 className=" text-fg-primary font-medium">{category}</h2>
      {/* <Divider /> */}
      <ul
        className={`flex flex-col gap-2 text-sm text-fg-secondary font-medium`}
        // style={{ color: color }}
      >
        {skills.map((skill, i) => {
          return <li key={i}>{skill}</li>;
        })}
      </ul>
    </li>
  );
};
export default StackItem;
