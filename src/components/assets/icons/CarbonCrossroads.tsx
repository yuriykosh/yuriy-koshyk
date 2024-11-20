import React, { SVGProps } from "react";

export function CarbonCrossroads(props: SVGProps<SVGSVGElement>) {
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
        d="M26.586 6.586A2 2 0 0 0 25.172 6H17V2h-2v10H6.828a2 2 0 0 0-1.414.586L2 16l3.414 3.414A2 2 0 0 0 6.828 20H15v10h2V14h8.172a2 2 0 0 0 1.414-.586L30 10ZM6.828 18l-2-2l2-2H15v4Zm18.344-6H17V8h8.172l2 2Z"
      ></path>
    </svg>
  );
}
export default CarbonCrossroads;