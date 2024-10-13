"use client";

import { useEffect } from "react";
import Vivus from "vivus";
import Typed from "typed.js";

const MaintenanceContent: React.FC = () => {
  useEffect(() => {
    // Vivus animation for the SVG
    new Vivus(
      "Layer_1",
      {
        type: "delayed",
        duration: 300,
        start: "autostart",
        dashGap: 50,
        forceRender: false,
      },
      () => {
        console.log("Animation finished.");

        // Typed.js for the footer text
        const typed = new Typed("#typeJS", {
          strings: ["This page is under maintenance. Please come back later."],
          typeSpeed: 10,
          backDelay: 750,
          loop: false,
        });

        // Clean up the typed instance on component unmount
        return () => {
          typed.destroy();
        };
      }
    );
  }, []);

  return (
    <div className="relative flex flex-col gap-6 -translate-y-[15%]">
      <div className="inset-0 flex items-center justify-center">
        <svg
          id="Layer_1"
          className="max-w-[300px] min-w-[50px]"
          version="1.1"
          baseProfile="tiny"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 447.3 447.3"
        >
          {/* SVG paths */}
          <g>
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M403.6,93.1c-72.2-38.5-146.7,22.7-146.7,22.7l54.9,67.4c-18.9,4.8-58.2,47-58.2,47"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M431.2,144.1c-59.7-55.9-147.6-16-147.6-16l35.6,79.3c-19.5-0.2-68.3,30.3-68.3,30.3"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M444.7,200.5c-43.2-69.4-138.4-53.7-138.4-53.7l13.9,85.9c-18.7-5.2-73.9,11.6-73.9,11.6"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M443.2,258.6c-23.8-78.3-119.8-87.7-119.8-87.7l-8.8,86.5c-16.7-9.9-74.4-7.9-74.4-7.9"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M426.7,314.2c-2.7-81.7-93-115.7-93-115.7l-30.9,81.3c-13.6-13.9-69.8-26.9-69.8-26.9"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M396.3,363.7c18.5-79.7-59.9-135.8-59.9-135.8l-50.9,70.5c-9.5-17-60.4-44-60.4-44"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M354.2,403.6c38.5-72.2-22.7-146.7-22.7-146.7l-67.4,54.9c-4.8-18.9-47-58.2-47-58.2"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M303.2,431.2c55.9-59.7,16-147.6,16-147.6l-79.3,35.6c0.2-19.5-30.3-68.3-30.3-68.3"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M246.7,444.7c69.4-43.2,53.7-138.4,53.7-138.4l-85.9,13.9c5.2-18.7-11.6-73.9-11.6-73.9"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M188.7,443.2c78.3-23.8,87.7-119.8,87.7-119.8l-86.5-8.8c9.9-16.7,7.9-74.4,7.9-74.4"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M133.1,426.7c81.7-2.7,115.7-93,115.7-93l-81.3-30.9c13.9-13.6,26.9-69.8,26.9-69.8"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M83.6,396.3c79.7,18.5,135.8-59.9,135.8-59.9l-70.5-50.9c17-9.5,44-60.4,44-60.4"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M43.7,354.2c72.2,38.5,146.7-22.7,146.7-22.7l-54.9-67.4c18.9-4.8,58.2-47,58.2-47"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M16.1,303.2c59.7,55.9,147.6,16,147.6,16l-35.6-79.3c19.5,0.2,68.3-30.3,68.3-30.3"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M2.5,246.7C45.8,316.2,141,300.4,141,300.4l-13.9-85.9c18.7,5.2,73.9-11.6,73.9-11.6"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M4.1,188.7c23.8,78.3,119.8,87.7,119.8,87.7l8.8-86.5c16.7,9.9,74.4,7.9,74.4,7.9"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M20.6,133.1c2.7,81.7,93,115.7,93,115.7l30.9-81.3c13.6,13.9,69.8,26.9,69.8,26.9"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M51,83.6c-18.5,79.7,59.9,135.8,59.9,135.8l50.9-70.5c9.5,17,60.4,44,60.4,44"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M93.1,43.7c-38.5,72.2,22.7,146.7,22.7,146.7l67.4-54.9c4.8,18.9,47,58.2,47,58.2"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M144.1,16.1C88.2,71.8,127.9,159.7,127.9,159.7l79.3-35.6c-0.2,19.5,30.3,68.3,30.3,68.3"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M200.5,2.5C131.1,45.8,146.7,141,146.7,141l85.9-13.9c-5.2,18.7,11.6,73.9,11.6,73.9"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M258.6,4.1c-78.3,23.8-87.7,119.8-87.7,119.8l86.5,8.8c-9.9,16.7-7.9,74.4-7.9,74.4"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M314.2,20.6c-81.7,2.7-115.7,93-115.7,93l81.3,30.9c-13.9,13.6-26.9,69.8-26.9,69.8"
            />
            <path
              fill="none"
              stroke="#000"
              strokeWidth="6"
              strokeMiterlimit="10"
              d="M363.7,51c-79.7-18.5-135.8,59.9-135.8,59.9l70.5,50.9c-17,9.5-44,60.4-44,60.4"
            />
          </g>
        </svg>
      </div>

      <footer className="inset-x-0 bottom-10 text-center text-sm font-medium">
        <p id="typeJS" className="" />
      </footer>
    </div>
  );
};

export default MaintenanceContent;
