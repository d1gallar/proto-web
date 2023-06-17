"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from "react";

type NavLinkType = {
  link: string;
  label: string;
  edge: "circle" | "square";
};

const NavLinkCircleClass =
  "border-2 border-black border-solid rounded-full px-6 py-3 font-Inter font-base hover:text-white hover:bg-black transition:color ease-in-out duration-200";

const NavLinkSquareClass =
  "bg-[#ADD3FF] border-2 border-black border-solid rounded-md px-6 py-3 font-Inter font-base hover:bg-black hover:text-white transition:color ease-in-out duration-200";

export default function NavLink(props: NavLinkType) {
  const pathname = usePathname();

  const isTabActive = useCallback(() => {
    const {link } = props;
    return pathname == link;
  }, [pathname, props]);

  const [isActive, setActive] = useState(isTabActive());

  useEffect(() => {
    setActive(isTabActive());
  }, [isTabActive]);

  const renderActiveClass = () => {
    return isActive ? " bg-black text-white" : " bg-white text-black";
  };

  return (
    <li>
      <Link
        href={props.link}
        className={
          props.edge === "circle"
            ? NavLinkCircleClass + renderActiveClass()
            : NavLinkSquareClass + renderActiveClass()
        }
      >
        {props.label}
      </Link>
    </li>
  );
}
