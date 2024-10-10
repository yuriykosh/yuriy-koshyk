interface CardProps {
  title: string;
  description: string;
  image: string;
  color: {
    primary: string;
    secondary: string;
  };
}

const Card: React.FC<CardProps> = ({ title, description, color }) => {
  return (
    <div className="flex flex-col gap-5 px-4 py-6 z-10 bg-gray-900/40 backdrop-blur-sm rounded-3xl shadow-[0_0_9.6px_0_rgba(0,0,0,0.15)]">
      <h4
        className={`flex gap-2 px-2 py-1 w-fit bg-gray-900/15 border-[0.2px] ${color.secondary} rounded-full text-[0.625rem] ${color.primary} leading-3 font-semibold`}
      >
        {title}
      </h4>
      <p className="text-white text-sm leading-7">{description}</p>
    </div>
  );
};
export default Card;
