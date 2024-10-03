"use client";

import React from "react";
import ScrollToTop from "react-scroll-up";

interface ScrollUpProps {
  className?: string;
}

const ScrollUp: React.FC<ScrollUpProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <ScrollToTop showUnder={160} style={{ position: "static" }}>
        <p className="w-fit opacity-60 hover:opacity-100 transition-opacity">
          Back to Top
        </p>
      </ScrollToTop>
    </div>
  );
};
export default ScrollUp;
