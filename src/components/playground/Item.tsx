import Image from "next/image";
import Link from "next/link";

type ItemProps = {
  title: string;
  tags: string;
  description: string;
  year: number;
  src: string;
  url?: string;
};

const Item: React.FC<ItemProps> = ({
  title,
  tags,
  description,
  //   year,
  src,
  url,
}) => {
  return (
    <li className="flex flex-col w-full aspect-[5/4]">
      {!url ? (
        <div className="relative w-full h-full">
          <Image src={src} fill alt={description} className="object-cover" />
        </div>
      ) : (
        <Link
          href={url}
          className={`relative w-full h-full ${
            url.includes("http") ? "cursor-alias" : "cursor-pointer"
          }`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src={src} fill alt={description} className="object-cover" />
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
