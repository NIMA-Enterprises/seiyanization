import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/Card";
import { EcosystemItem } from "@/lib/types";

function getRandomItemsFromArray(array: EcosystemItem[]) {
  const shuffledArray = array?.sort(() => Math.random() - 0.5);

  return shuffledArray.slice(0, 14);
}

const BuildingOnSei: React.FC<{
  className?: string;
  ecosystem: EcosystemItem[];
}> = ({ className, ecosystem }) => {
  return (
    <Card
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-center md:justify-between mt-10",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <span className="text-md font-semibold">Projects building on SEI</span>
        <Link
          className="flex items-center gap-1 text-sm text-link-no-underline"
          href="/ecosystem"
        >
          <span>See all</span>
          <ArrowRightIcon size={14} />
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {getRandomItemsFromArray(ecosystem).map((item) => (
          <Link key={item.title} href={item.url} target="_blank">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                className="w-full"
                alt={item.title}
                src={item.logo}
                width={50}
                height={50}
                priority
              />
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export { BuildingOnSei };
