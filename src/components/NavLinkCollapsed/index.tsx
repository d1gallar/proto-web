"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type NavLinkedCollapsedProps = {
  link: string;
  label: string;
  className?: string;
};

export default function NavLinkedCollapsed(props: NavLinkedCollapsedProps) {
  const pathname = usePathname();

  const isTabActive = useCallback(() => {
    const { link } = props;
    return pathname == link;
  }, [pathname, props]);

  const [isActive, setActive] = useState(isTabActive());

  useEffect(() => {
    setActive(isTabActive());
  }, [isTabActive]);

  const renderActiveClass = () => {
    return isActive ? " bg-black text-white " : " bg-white text-black ";
  };

  return (
    <Link
      href={props.link}
      className={
        "w-full h-fit text-center text-lg font-Inter font-bold px-2 py-3 hover:bg-[#101010] hover:text-white" +
          renderActiveClass() +
          props.className || ""
      }
    >
      {props.label}
    </Link>
  );
}
