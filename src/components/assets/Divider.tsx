interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={`w-full h-[1px] bg-sep-primary ${className}`} />;
};
export default Divider;
