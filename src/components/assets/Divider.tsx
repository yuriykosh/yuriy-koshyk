interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div
      className={`w-full h-[1px] ${className ? className : "bg-sep-primary"}`}
    />
  );
};
export default Divider;
