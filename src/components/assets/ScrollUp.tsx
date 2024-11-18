"use client";

import React, { useRef } from "react";
import ScrollToTop from "react-scroll-up";

interface ScrollUpProps {
  className?: string;
}

const ScrollUp: React.FC<ScrollUpProps> = ({ className }) => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      // behavior: "smooth",
    });
  };

  return (
    <div className={`${className}`}>
      <ScrollToTop showUnder={160} style={{ position: "static" }}>
        <button
          type="button"
          ref={inputRef}
          onFocus={handleFocus}
          className="w-fit opacity-60 hover:opacity-100 focus:opacity-100 transition-opacity outline-offset-4 focus:outline-2 focus:outline-dashed"
        >
          Back to Top
        </button>
      </ScrollToTop>
    </div>
  );
};
export default ScrollUp;
