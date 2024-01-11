import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components";
import { homeChangelogs } from "@/common/constants";

const HomeRoadMap: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Changelog</h1>
        <Link href="/">
          <Button
            className="hidden sm:flex rounded"
            size="sm"
            variant="outline"
          >
            <span className="mr-1">View all changes</span>
            <ArrowRightIcon size={14} />
          </Button>
        </Link>
      </div>
      <div className="relative">
        <div className="bg-orange-400 w-full   absolute left-0 top-3 h-2" />
        <div className="grid grid-cols-auto-fill-full gap-4 md:grid-cols-4">
          {homeChangelogs.map((road) => (
            <div
              className="flex flex-col gap-2 pl-6 relative md:pt-6 md:pl-0"
              key={road.id}
            >
              <div className="h-4 w-4 rounded-xl border border-orange-200 -mt-4 -ml-1 bg-white absolute" />
              <Link
                href={road.href}
                className="text-md font-semibold mt-2 link-text-hover"
              >
                {road.title}
              </Link>
              <p className="text-xs opacity-80">
                {new Date(road.date).toDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { HomeRoadMap };
