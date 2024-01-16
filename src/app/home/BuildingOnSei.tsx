import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/Card";
import { homeBuildingOnSei } from "@/common/constants";

const BuildingOnSei: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-center md:justify-between mt-10"
      )}
    >
      <div className="flex flex-col gap-2">
        <span className="text-md font-semibold">Building on sei</span>
        <Link
          className="flex items-center gap-1 text-sm text-link-no-underline"
          href="/"
        >
          <span>See all</span>
          <ArrowRightIcon size={14} />
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {homeBuildingOnSei.map((builder) => (
          <div
            key={builder.name}
            className="w-10 h-10 rounded-full overflow-hidden"
          >
            <Image
              className="w-full"
              alt={builder.name}
              src={builder.image}
              width={50}
              height={50}
              priority
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export { BuildingOnSei };
