import React, { SVGProps } from "react";

export function CarbonCheckmarkOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"
      ></path>
      <path
        fill="currentColor"
        d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"
      ></path>
    </svg>
  );
}
export default CarbonCheckmarkOutline;
