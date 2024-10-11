interface StackItemProps {
  category: string;
  skills: string[];
}

const StackItem: React.FC<StackItemProps> = ({ category, skills }) => {
  return (
    <li className="flex flex-col gap-4 font-medium text-fg-secondary">
      <h2 className="text-fg-primary">{category}</h2>
      <ul className="flex flex-col gap-2">
        {skills.map((skill, i) => {
          return <li key={i}>{skill}</li>;
        })}
      </ul>
    </li>
  );
};
export default StackItem;
