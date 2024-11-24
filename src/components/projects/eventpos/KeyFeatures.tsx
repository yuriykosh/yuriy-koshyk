import Image from "next/image";
import Card from "./Card";

const KeyFeatures = () => {
  const cards = [
    {
      title: "Customization Options",
      description:
        "Flexibility to customize branding, pricing, and promotional offers to suit the unique requirements of each event.",
      image: "/images/eventPOS/features/0.webp",
      color: {
        primary: "text-green-300",
        secondary: "border-green-300/45",
      },
    },
    {
      title: "Mobile Payments",
      description:
        "Seamless mobile payment processing using various methods such as NFC, QR codes, and contactless bracelets",
      image: "/images/eventPOS/features/1.webp",
      color: {
        primary: "text-sky-300",
        secondary: "border-sky-300/45",
      },
    },
    {
      title: "Attendee Experience",
      description:
        "A user-friendly interface for attendees to make purchases quickly and securely.",
      image: "/images/eventPOS/features/2.webp",
      color: {
        primary: "text-pink-300",
        secondary: "border-pink-300/45",
      },
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard for event organizers to track sales performance and make data-driven decisions.",
      image: "/images/eventPOS/features/3.webp",
      color: {
        primary: "text-purple-300",
        secondary: "border-purple-300/45",
      },
    },
  ];

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-y-6 my-10 py-2">
      <li
        className={`col-span-1 relative px-4 pb-4 pt-24 -z-10
        md:col-span-2 md:grid md:grid-cols-2 md:gap-6 md:p-4 md:pt-10 md:z-0 lg:pt-[8vh]
        bg-green-200 border border-sep-primary rounded-3xl`}
      >
        <Card {...cards[0]} />
        <div className="absolute -bottom-0 -right-6 md:static w-full h-full -z-10 md:z-0">
          <div className="relative h-[calc((100%+16rem))] md:h-full lg:h-[calc((100%+12vh)+1rem)] w-full md:translate-x-2 -translate-y-64 md:-translate-y-0 lg:-translate-y-[calc(12vh+1.2rem)]">
            <Image
              src={cards[0].image}
              alt={`${cards[0].title} image`}
              fill
              style={{ objectFit: "contain" }}
              className="object-bottom md:scale-[1.12]"
            />
          </div>
        </div>
      </li>

      <li
        className="col-span-1 md:row-span-2 relative flex items-end px-4 pb-4 pt-40 md:p-4 
      bg-sky-100 border border-sep-primary rounded-3xl"
      >
        <Card {...cards[1]} />
        <div className="absolute -top-16 md:top-12 lg:-top-2 left-0 w-full h-full z-0">
          <div className="relative h-full w-full translate-x-[6%] md:translate-y-[12%]">
            <Image
              src={cards[1].image}
              alt={`${cards[1].title} image`}
              fill
              style={{ objectFit: "contain" }}
              className="object-left-top scale-[1.12]"
            />
          </div>
        </div>
      </li>

      <li className="col-span-1 relative flex items-end p-4 pt-[8vh] bg-red-100 border border-sep-primary rounded-3xl">
        <Card {...cards[2]} />
        <div className="absolute bottom-[9.5%] left-0 w-full h-full z-0">
          <div className="relative h-full w-full translate-x-[2%] md:-translate-x-[4%]">
            <Image
              src={cards[2].image}
              alt={`${cards[2].title} image`}
              fill
              style={{ objectFit: "contain" }}
              className="object-left-bottom scale-[1.20]"
            />
          </div>
        </div>
      </li>

      <li className="col-span-1 relative flex items-end p-4 pt-[8vh] bg-purple-100 border border-sep-primary rounded-3xl">
        <Card {...cards[3]} />
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="relative h-full w-full -translate-x-3 -translate-y-[14%] md:-translate-y-[2%]">
            <Image
              src={cards[3].image}
              alt={`${cards[3].title} image`}
              fill
              style={{ objectFit: "contain" }}
              className="object-left-top scale-125"
            />
          </div>
        </div>
      </li>
    </ul>
  );
};
export default KeyFeatures;
