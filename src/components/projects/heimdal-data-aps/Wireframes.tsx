import Image from "next/image";

const Wireframes = () => {
  return (
    <ul className="grid grid-cols-4 grid-rows-10 gap-4 text-xs md:text-sm font-normal text-fg-secondary">
      <li className="row-span-full">
        <figure className="flex flex-col gap-2">
          <div className="relative aspect-[44/185] rounded-md overflow-hidden ring-1 ring-sep-primary">
            <Image
              src={"/images/heimdal-data/wireframes/home-map.webp"}
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          <figcaption className="md:pl-2.5">Home page site map</figcaption>
        </figure>
      </li>
      <li className="row-start-3 md:row-start-4 row-span-7">
        <figure className="flex flex-col gap-2 w-full h-full pt-8">
          <div className="relative aspect-[308/775] rounded-md overflow-hidden ring-1 ring-sep-primary">
            <Image
              src={"/images/heimdal-data/wireframes/about-wireframes.webp"}
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          <figcaption className="md:pl-2.5">About page wireframes</figcaption>
        </figure>
      </li>
      <li className="col-start-3 row-span-3">
        <figure className="flex flex-col gap-2 w-full h-full">
          <div className="relative aspect-[6/5] rounded-md overflow-hidden ring-1 ring-sep-primary">
            <Image
              src={"/images/heimdal-data/wireframes/services-wireframes.webp"}
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          <figcaption className="md:pl-2.5">
            Services page wireframes
          </figcaption>
        </figure>
      </li>

      <li className="row-span-8">
        <figure className="flex flex-col gap-2 w-full h-full">
          <div className="relative w-full h-full rounded-md overflow-hidden ring-1 ring-sep-primary">
            <Image
              src={"/images/heimdal-data/wireframes/home-wireframes.webp"}
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          <figcaption className="md:pl-2.5">Home page wireframes</figcaption>
        </figure>
      </li>
      <li className="row-span-4">
        <figure className="flex flex-col gap-2 w-full h-full">
          <div className="relative aspect-[0.65/1] rounded-md overflow-hidden ring-1 ring-sep-primary">
            <Image
              src={"/images/heimdal-data/wireframes/contacts-wireframes.webp"}
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          <figcaption className="md:pl-2.5">
            Contacts page wireframes
          </figcaption>
        </figure>
      </li>
    </ul>
  );
};
export default Wireframes;
