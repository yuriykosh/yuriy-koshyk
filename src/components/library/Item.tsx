import Link from "next/link";
import Divider from "../assets/Divider";

type ItemProps = {
  index: number;
  title: string;
  author: string;
  description: string;
  status: "Finished" | "Not Started" | "In Progress";
  sourceLink: string;
  tags: string[];
};

const Item: React.FC<ItemProps> = ({
  title,
  author,
  description,
  status,
  sourceLink,
  index,
}) => {
  return (
    <div className="w-full text-sm text-fg-secondary font-medium">
      <div className="px-6">
        <Divider />
      </div>

      <Link
        href={sourceLink}
        rel="noopener noreferrer"
        target="_blank"
        className="block relative py-2 px-6 
        bg-bg-primary hover:bg-bg-secondary focus-visible:bg-bg-secondary cursor-alias transition-colors duration-200 hover:transition-colors hover:duration-200 focus-visible:transition-colors focus-visible:duration-200 -outline-offset-1"
      >
        <ul className="md:grid md:grid-cols-12 gap-6 py-6">
          <li className="max-md:mb-6 max-md:text-fg-primary">{index}</li>
          <li className="md:col-span-2 text-fg-primary">{title}</li>
          <li className="max-md:mb-6 md:col-span-2 md:text-pretty">{author}</li>
          <li className="max-md:inline-block max-md:w-3/4 max-md:pr-2 max-md:text-wrap md:col-span-4 md:text-fg-primary">
            {description}
          </li>
          <li className="max-md:inline-block max-md:w-1/4 max-md:pl-2 max-md:text-end md:col-span-2">
            {status}
          </li>
          <li className="hidden md:inline justify-self-end text-fg-primary underline underline-offset-2 hover:text-fg-secondary transition-colors duration-200">
            Visit source
          </li>
        </ul>

        {/* top-right arrow */}
        <div className="absolute top-8 right-6 w-[2ch] h-[2ch] text-fg-primary md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            className=""
          >
            <path
              fill="currentColor"
              d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z"
            ></path>
          </svg>
        </div>
      </Link>
    </div>
  );
};
export default Item;
