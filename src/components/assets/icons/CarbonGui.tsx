import React, { SVGProps } from "react";

export function CarbonGui(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      {...props}
    >
      <circle cx="20" cy="8" r="1" fill="currentColor"></circle>
      <circle cx="23" cy="8" r="1" fill="currentColor"></circle>
      <circle cx="26" cy="8" r="1" fill="currentColor"></circle>
      <path
        fill="currentColor"
        d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v4H4V6ZM4 12h6v14H4Zm8 14V12h16v14Z"
      ></path>
    </svg>
  );
}
export default CarbonGui;
