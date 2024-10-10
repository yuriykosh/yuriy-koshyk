import Image from "next/image";

const DesignProcessStages = () => {
  const stages = [
    {
      title: "User Research",
      details:
        "The design team conducted extensive research to understand the pain points and requirements of event organizers, vendors, and attendees. This involved surveys, interviews, and observation sessions at various events to gather insights.",
      image: "/images/eventPOS/user-research.png",
      styles: {
        container:
          "before:block before:absolute before:w-full before:h-[60%] before:bg-sky-500/10 before:rounded-3xl before:bottom-[8%] before:-translate-x-[10%]",
        image: "-translate-x-[10%]",
        title: "",
        description: "",
      },
    },
    {
      title: "Wireframing and Prototyping",
      details:
        "Based on the research findings, wireframes and prototypes were developed to visualize the app structure and functionality. These prototypes underwent iterative refinement based on feedback from stakeholders and usability testing.",
      image: "/images/eventPOS/wireframing.png",
      styles: {
        container: "",
        image: "scale-110 translate-x-[5%] -translate-y-[10%]",
        title: "",
        description: "",
      },
    },
    {
      title: "User Interface Design",
      details:
        "The user interface was designed with a focus on simplicity, creativity, and consistency. A clean and intuitive layout was adopted to guide users through the payment process seamlessly, minimizing friction and confusion.",
      image: "/images/eventPOS/ui-design.png",
      styles: {
        container: "",
        image: "scale-125 -translate-x-[6.5%]",
        title: "",
        description: "",
      },
    },
    {
      title: "Security Implementation",
      details:
        "Robust security measures were integrated into the app to safeguard sensitive financial data. This included encryption protocols, authentication mechanisms, and adherence to industry standards for data protection.",
      image: "/images/eventPOS/security.png",
      styles: {
        container: "",
        image: "scale-[120%]",
        title: "",
        description: "",
      },
    },
    {
      title: "Scalability",
      details:
        "The architecture of EventPOS was designed to be highly scalable, capable of accommodating events ranging from small gatherings to large-scale festivals. This scalability ensured flexibility and adaptability to meet the evolving needs of diverse events.",
      image: "/images/eventPOS/scalability.png",
      styles: {
        container: "",
        image: "scale-110 -translate-x-[10%]",
        title: "",
        description: "",
      },
    },
  ];

  return (
    <ul className="flex flex-col gap-0 -mt-[10%]">
      {stages.map((stage, i) => (
        <li key={i} className={`grid grid-cols-5 gap-8 items-center`}>
          <div className={`col-span-3 ${~i & 1 ? "" : "order-last"}`}>
            <div
              className={`relative w-full h-[70vh] ${stage.styles.container}`}
            >
              <Image
                src={stage.image}
                alt={`${stage.title} image`}
                fill
                style={{ objectFit: "contain" }}
                className={`${stage.styles.image}`}
              />
            </div>
          </div>
          <div className="col-span-2">
            <h4 className="leading-tight tracking-normal font-semibold text-2xl mt-6 mb-2">
              {stage.title}
            </h4>
            <p className="leading-normal py-2">{stage.details}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default DesignProcessStages;
