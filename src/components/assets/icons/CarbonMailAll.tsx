import React, { SVGProps } from "react";

export function CarbonMailAll(props: SVGProps<SVGSVGElement>) {
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
        d="M16.59 20.41L20.17 24l-3.59 3.59L18 29l5-5l-5-5zm7 0L27.17 24l-3.59 3.59L25 29l5-5l-5-5z"
      ></path>
      <path
        fill="currentColor"
        d="M14 23H4V7.91l11.43 7.91a1 1 0 0 0 1.14 0L28 7.91V17h2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10ZM25.8 7L16 13.78L6.2 7Z"
      ></path>
    </svg>
  );
}
export default CarbonMailAll;