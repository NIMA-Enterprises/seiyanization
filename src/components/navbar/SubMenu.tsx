import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  submenuItems,
  becomeSeiyanizationWriterForm,
} from "@/common/constants";
import { SubMenuItemCard } from "./SubMenuItemCard";

type Props = {};

const SubMenu = (props: Props) => {
  return (
    <>
      {/* Mobile */}
      <div className="flex items-center gap-4 lg:hidden">
        {submenuItems.map((productCategory) => (
          <DropdownMenu key={productCategory.title}>
            <DropdownMenuTrigger className="min-w-fit" asChild>
              <div className="flex items-center gap-1 cursor-pointer text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">
                <h3>{productCategory.title}</h3>
                <ChevronDownIcon size={16} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] sm:w-[36rem] p-2">
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-auto-fill-full md:grid-cols-2">
                  {productCategory.items.map((product) => (
                    <SubMenuItemCard
                      key={product.title}
                      {...product}
                      description={product.shortDescription}
                    />
                  ))}
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
        <Link
          target="_blank"
          href={becomeSeiyanizationWriterForm}
          className="flex items-center gap-1 cursor-pointer text-sm min-w-fit text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
        >
          <h3>Contribute</h3>
        </Link>
      </div>
      {/* Desktop */}
      <div className="hidden items-center gap-4 lg:flex overflow-scroll md:overflow-hidden scroll-m-0">
        {submenuItems.map((productCategory) => (
          <HoverCard
            key={productCategory.title}
            openDelay={200}
            closeDelay={200}
          >
            <HoverCardTrigger className="min-w-fit">
              <div className="flex items-center gap-1 text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">
                <h3>{productCategory.title}</h3>
                <ChevronDownIcon size={16} />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-[36rem] p-2" align="start">
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-auto-fill-full md:grid-cols-2">
                  {productCategory.items.map((product) => (
                    <SubMenuItemCard
                      key={product.title}
                      {...product}
                      description={product.shortDescription}
                    />
                  ))}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
        <Link
          target="_blank"
          href={becomeSeiyanizationWriterForm}
          className="flex items-center gap-1 cursor-pointer text-sm min-w-fit text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
        >
          <h3>Contribute (to Seiyanization)</h3>
        </Link>
      </div>
    </>
  );
};

export default SubMenu;
