import React from "react";
import { Navbar as NextraNavbar } from "nextra-theme-docs";

import SubMenu from "./SubMenu";

type Props = {
  flatDirectories: any;
  items: any;
};

const Navbar = (props: Props) => {
  return (
    <div className="border-b border-sei-border-light dark:border-sei-border-dark ">
      <div className="flex max-w-[1470px] mx-auto flex-col sticky top-0 z-20 w-full ">
        <div className="-z-10">
          <NextraNavbar items={props.items} />
        </div>
        <div className="relative overflow-scroll  bg-sei-card-bg-light dark:bg-sei-card-bg-dark -mt-2 z-100 ">
          <div className="flex items-center pt-2 pb-2 gap-4 w-full mx-auto max-w-[90rem] px-10 ml-2">
            <SubMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
