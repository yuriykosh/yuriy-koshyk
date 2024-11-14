import Divider from "@/components/assets/Divider";

interface TopicTitleProps {
  title: string;
}

const TopicTitle: React.FC<TopicTitleProps> = ({ title }) => {
  return (
    <>
      <div className="w-full origin-left mb-6">
        <Divider />
      </div>
      <h3 className="mb-10 leading-tight tracking-normal font-medium text-sm text-fg-secondary">
        {title}
      </h3>
    </>
  );
};
export default TopicTitle;
