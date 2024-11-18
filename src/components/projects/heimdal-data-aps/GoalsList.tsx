import CarbonCrossroads from "@/components/assets/icons/CarbonCrossroads";
import CarbonGui from "@/components/assets/icons/CarbonGui";
import CarbonDevices from "@/components/assets/icons/CarbonDevices";
import CarbonBadge from "@/components/assets/icons/CarbonBadge";
import { FC } from "react";

// Define the type for icon components
type IconName =
  | "CarbonCrossroads"
  | "CarbonGui"
  | "CarbonDevices"
  | "CarbonBadge";

const ICON_COMPONENTS: Record<IconName, FC> = {
  CarbonCrossroads: CarbonCrossroads,
  CarbonGui: CarbonGui,
  CarbonDevices: CarbonDevices,
  CarbonBadge: CarbonBadge,
};

const GOALS: { icon: IconName; description: string }[] = [
  {
    icon: "CarbonCrossroads",
    description:
      "Creating an intuitive and user-friendly navigation system to showcase the company's diverse range of services effectively.",
  },
  {
    icon: "CarbonGui",
    description:
      "Designing a visually appealing and cohesive UI that aligns with the company's brand identity.",
  },
  {
    icon: "CarbonDevices",
    description:
      "Optimizing the website's responsiveness and performance across various devices and platforms.",
  },
  {
    icon: "CarbonBadge",
    description:
      'Highlighting the success and popularity of "Slette Mette" and other mobile games to attract potential clients and engage users.',
  },
];

const GoalsList = () => {
  return (
    <ul className="grid grid-cols-2 gap-4 mb-32">
      {GOALS.map(({ icon, description }, index) => {
        const IconComponent = ICON_COMPONENTS[icon];
        return (
          <li
            key={index}
            className="flex flex-col items-center text-center gap-8 px-4 py-8 bg-green-100/10 border border-sep-primary rounded-xl"
          >
            <div className="w-24 h-24 text-green-500 opacity-80">
              <IconComponent />
            </div>
            {/* Render the icon */}
            <p className="flex flex-col gap-1 text-l md:text-xl font-medium leading-normal text-pretty">
              {description}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default GoalsList;
