"use client";

import { useState } from "react";
import "./NavCollapse.css";

type NavCollapseIconProps = {
  collapse: boolean;
  setCollapse: (isCollapsed: boolean) => void;
};

export default function NavCollapseIcon({
  collapse,
  setCollapse,
}: NavCollapseIconProps) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setIsActive(!isActive);
    setCollapse(!collapse);
  };
  return (
    <div className="flex flex-row justify-center items-center">
      <button
        id="hamburger"
        className={isActive ? "open" : "w-full"}
        onClick={(e) => handleClick(e)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}
