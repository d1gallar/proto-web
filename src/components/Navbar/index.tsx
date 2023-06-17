"use client";

import Link from "next/link";
import NavLink from "../NavLink";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/MediaQuery";
import NavCollapseIcon from "../NavCollapseIcon";
import NavLinkCollapsed from "../NavLinkCollapsed";
import BlackProtoLogo from "../BlackProtoLogo";

const SM_BREAKPT = 640;

export default function Navbar() {
  const [collapse, setCollapse] = useState<boolean>(false);
  const showMobile = useMediaQuery(SM_BREAKPT);

  useEffect(() => {
    if (!showMobile) setCollapse(false);
  }, [showMobile]);

  return (
    <nav className="min-w-[320px] w-full py-8 px-6 flex flex-col gap-8">
      <div className="h-fit w-full flex flex-row justify-between items-center">
        <Link href="/">
          <BlackProtoLogo />
        </Link>
        {showMobile ? (
          <NavCollapseIcon setCollapse={setCollapse} collapse={collapse} />
        ) : (
          <ul className="list-none flex flex-row gap-4">
            <NavLink link="/" label="Home" edge="circle" />
            <NavLink link="/about" label="About" edge="circle" />
            <NavLink link="/pricing" label="Pricing" edge="circle" />
            <NavLink
              link="/getting-started"
              label="Getting Started"
              edge="square"
            />
          </ul>
        )}
      </div>
      {showMobile && collapse && (
        <div className="min-w-[160px] h-fit">
          <ul className="w-full grid grid-cols-1 justify-center items-center h-full list-none bg-white border-black border-solid border-2 rounded-md">
            <NavLinkCollapsed
              link="/"
              label="Home"
              className="border-b-2 border-black border-solid"
            />
            <NavLinkCollapsed
              link="/about"
              label="About"
              className="border-b-2 border-black border-solid"
            />
            <NavLinkCollapsed link="/pricing" label="Pricing" />
            <NavLinkCollapsed
              link="/getting-started"
              label="Getting Started"
              className="border-t-2 border-black border-solid"
            />
          </ul>
        </div>
      )}
    </nav>
  );
}
