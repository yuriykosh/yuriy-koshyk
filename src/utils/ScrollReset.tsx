"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // For App Router
import { useLenis } from "@/utils/lenis";

const ScrollReset = () => {
  const pathname = usePathname();
  const lenis = useLenis(); // Assuming you have a hook to access Lenis

  useEffect(() => {
    if (lenis && pathname !== "/") {
      // Only reset scroll on the homepage
      lenis.scrollTo(0, {
        duration: 0,
        // easing: (t: number) => t, // Explicitly type `t` as number
      });
    }
  }, [pathname, lenis]); // Trigger scroll reset on route change, but only on the homepage

  return null;
};

export default ScrollReset;
