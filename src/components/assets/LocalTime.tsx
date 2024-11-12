"use client";

import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";

const LocalTime = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or return placeholder content until the client renders
  }

  return (
    <Clock
      format={"HH:mm"}
      ticking={true}
      interval={10000}
      className="justify-self-end mr-10 pt-0.5 text-sm font-medium text-fg-secondary"
    />
  );
};
export default LocalTime;
