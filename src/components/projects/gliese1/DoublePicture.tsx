import Image from "next/image";

interface DoublePictureProps {
  urlLeft: string;
  urlRight: string;
  alt: string;
  className?: string;
}

const DoublePicture: React.FC<DoublePictureProps> = ({
  urlLeft,
  urlRight,
  alt,
  className,
}) => {
  return (
    <ul
      className={`flex gap-4 w-full mb-20 aspect-video scale-110 ${className}`}
    >
      <li className="relative w-full h-full rounded-xl overflow-clip">
        <Image
          src={urlLeft}
          fill
          quality={100}
          sizes="40vw"
          alt={`${alt} 1`}
          className="object-cover"
        />
      </li>
      <li className="relative w-full h-full rounded-xl overflow-clip">
        <Image
          src={urlRight}
          fill
          quality={100}
          sizes="40vw"
          alt={`${alt} 2`}
          className="object-cover"
        />
      </li>
    </ul>
  );
};
export default DoublePicture;
