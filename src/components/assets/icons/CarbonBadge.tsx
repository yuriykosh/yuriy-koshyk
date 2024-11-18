import React, { SVGProps } from "react";

export function CarbonBadge(props: SVGProps<SVGSVGElement>) {
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
        d="m23 2l1.593 3L28 5.414l-2.5 2.253L26 11l-3-1.875L20 11l.5-3.333L18 5.414L21.5 5z"
      ></path>
      <path
        fill="currentColor"
        d="m22.717 13.249l-1.938-.498a6.994 6.994 0 1 1-5.028-8.531l.499-1.937A8.99 8.99 0 0 0 8 17.69V30l6-4l6 4V17.708a8.96 8.96 0 0 0 2.717-4.459M18 26.263l-4-2.667l-4 2.667V19.05a8.92 8.92 0 0 0 8 .006Z"
      ></path>
    </svg>
  );
}
export default CarbonBadge;
