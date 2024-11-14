import Image from "next/image";

interface SinglePictureProps {
  url: string;
  alt: string;
  className?: string;
}

const SinglePicture: React.FC<SinglePictureProps> = ({
  url,
  alt,
  className,
}) => {
  return (
    <div className="mb-20 relative w-full aspect-video scale-110 rounded-xl overflow-clip">
      <Image
        src={url}
        fill
        quality={100}
        sizes="75vw"
        alt={alt}
        className={className}
      />
    </div>
  );
};
export default SinglePicture;
