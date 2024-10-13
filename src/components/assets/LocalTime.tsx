"use client";

import React from "react";
import Clock from "react-live-clock";

const LocalTime = () => {
  return (
    <Clock
      format={"HH:mm"}
      ticking={true}
      interval={10000}
      className="justify-self-end mr-10 pt-0.5 text-sm font-semibold text-fg-secondary"
    />
  );
};
export default LocalTime;
