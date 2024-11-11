import Link from "next/link";
import Divider from "../assets/Divider";

const Item = () => {
  return (
    <li className="w-full text-sm text-fg-secondary font-semibold">
      <div className="px-6">
        <Divider />
      </div>

      <Link
        href={"/"}
        className="block relative py-2 px-6 bg-bg-primary hover:bg-bg-secondary cursor-alias transition-all duration-200"
      >
        <ul className="md:grid md:grid-cols-8 gap-6 py-6 md:py-8">
          <li className="max-md:mb-6 max-md:text-fg-primary">ID</li>
          <li className="text-fg-primary">Title</li>
          <li className="max-md:mb-6">Author</li>
          <li className="max-md:inline-block max-md:w-3/4 max-md:pr-2 max-md:text-wrap md:col-span-3 md:text-fg-primary">
            Description
          </li>
          <li className="max-md:inline-block max-md:w-1/4 max-md:pl-2 text-end">
            Status
          </li>
          <li className="hidden md:inline justify-self-end text-fg-primary underline underline-offset-2 hover:text-fg-secondary transition-colors duration-200">
            Visit source
          </li>
        </ul>

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
    </li>
  );
};
export default Item;
