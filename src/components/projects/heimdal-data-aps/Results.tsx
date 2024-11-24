import Image from "next/image";

const Results = () => {
  return (
    <ul className="grid grid-cols-4 gap-6 text-xs md:text-sm font-normal text-fg-secondary">
      <li className="col-span-3">
        <figure className="flex flex-col gap-2">
          <div className="relative aspect-[1/3.71]">
            <Image
              src={"/images/heimdal-data/home-desktop.webp"}
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          <figcaption className="pl-3 md:pl-4">
            Home page desktop prototype
          </figcaption>
        </figure>
      </li>
      <li className="col-span-1">
        <figure className="flex flex-col gap-2">
          <div className="relative aspect-[1/11.5]">
            <Image
              src={"/images/heimdal-data/home-mobile.webp"}
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          <figcaption className="pl-1.5 md:pl-2.5">
            Home page mobile prototype
          </figcaption>
        </figure>
      </li>
    </ul>
  );
};
export default Results;
