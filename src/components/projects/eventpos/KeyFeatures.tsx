import Image from "next/image";
import Card from "./Card";

const KeyFeatures = () => {
  const cards = [
    {
      title: "Customization Options",
      description:
        "Flexibility to customize branding, pricing, and promotional offers to suit the unique requirements of each event.",
      image: "/images/eventPOS/features/0.png",
      color: {
        primary: "text-green-300",
        secondary: "border-green-300/45",
      },
    },
    {
      title: "Mobile Payments",
      description:
        "Seamless mobile payment processing using various methods such as NFC, QR codes, and contactless bracelets",
      image: "",
      color: {
        primary: "text-sky-300",
        secondary: "border-sky-300/45",
      },
    },
    {
      title: "Attendee Experience",
      description:
        "A user-friendly interface for attendees to make purchases quickly and securely.",
      image: "",
      color: {
        primary: "text-pink-300",
        secondary: "border-pink-300/45",
      },
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard for event organizers to track sales performance and make data-driven decisions.",
      image: "",
      color: {
        primary: "text-pink-300",
        secondary: "border-pink-300/45",
      },
    },
  ];

  return (
    <ul className="grid grid-cols-3 gap-4">
      <li className="col-span-2 relative grid grid-cols-2 gap-6 p-4 pt-[8vh] bg-green-200 rounded-3xl">
        <Card {...cards[0]} />
        <div className="w-full h-full">
          <div className="relative h-[calc((100%+12vh)+1rem)] w-full translate-x-2 -translate-y-[calc(12vh+1rem)] border border-red-500">
            <Image
              src={cards[0].image}
              alt={`${cards[0].title} image`}
              fill
              style={{ objectFit: "contain" }}
              className="object-bottom scale-110"
            />
          </div>
        </div>
      </li>

      <li className="col-span-1 row-span-2 flex items-end p-4 bg-sky-100 rounded-3xl">
        <Card {...cards[1]} />
      </li>

      <li className="col-span-1 flex items-end p-4 pt-[8vh] bg-red-100 rounded-3xl">
        <Card {...cards[2]} />
      </li>

      <li className="col-span-1 flex items-end p-4 pt-[8vh] bg-purple-100 rounded-3xl">
        <Card {...cards[3]} />
      </li>
    </ul>
  );
};
export default KeyFeatures;
