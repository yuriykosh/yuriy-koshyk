import Image from "next/image";
import Link from "next/link";

import CarbonLogoFigma from "../assets/icons/CarbonLogoFigma";
import CarbonDocumentView from "../assets/icons/CarbonDocumentView";
import CarbonLaunch from "../assets/icons/CarbonLaunch";

type ItemProps = {
  title: string;
  tags: string;
  description: string;
  year: number;
  src: string;
  url?: string;
  color?: string;
};

const Item: React.FC<ItemProps> = ({
  title,
  tags,
  description,
  //   year,
  src,
  url,
  color,
}) => {
  const currentColor =
    color === "dark"
      ? "text-gray-300 bg-gray-300/40 border-gray-300/40"
      : "text-fg-secondary bg-gray-300/40 border-gray-300";

  return (
    <li className="flex flex-col w-full aspect-[5/4]">
      {!url ? (
        <div className="relative w-full h-full">
          <Image
            src={src}
            fill
            sizes="50vw"
            alt={description}
            className="object-cover"
          />
        </div>
      ) : (
        <Link
          href={url}
          className={`relative w-full h-full overflow-hidden group/link ${
            url.includes("http") ? "cursor-alias" : "cursor-pointer"
          }`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={src}
            fill
            sizes="50vw"
            alt={description}
            className="object-cover"
          />
          {url.includes("http") ? (
            <div
              className={`absolute right-2 top-2 flex items-center justify-center gap-1.5 px-2 py-0.5 translate-y-0 opacity-100 md:-translate-y-10 md:opacity-0
                md:group-hover/link:translate-y-0 md:group-hover/link:opacity-100 md:group-focus/link:translate-y-0 md:group-focus/link:opacity-100 transition-all duration-150 ease-out
            text-sm font-medium rounded-full border ${
              !color ? "" : currentColor
            }`}
            >
              {url.includes("figma.com/proto") ? "prototype" : "url"}
              {url.includes("figma.com/proto") ? (
                <CarbonLogoFigma />
              ) : (
                <CarbonLaunch />
              )}
            </div>
          ) : (
            <div
              className={`absolute right-2 top-2 flex items-center justify-center gap-1.5 px-2 py-0.5 translate-y-0 opacity-100 md:-translate-y-10 md:opacity-0
                md:group-hover/link:translate-y-0 md:group-hover/link:opacity-100 md:group-focus/link:translate-y-0 md:group-focus/link:opacity-100 transition-all duration-150 ease-out
            text-sm font-medium rounded-full border ${
              !color ? "" : currentColor
            }`}
            >
              pdf
              <CarbonDocumentView />
            </div>
          )}
        </Link>
      )}

      <div className="p-2">
        <h2 className="text-sm font-medium">{title}</h2>
        <p className="text-sm font-medium text-fg-secondary">{tags}</p>
      </div>
    </li>
  );
};
export default Item;
