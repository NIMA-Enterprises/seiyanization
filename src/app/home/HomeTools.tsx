import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/Card";
import { Button } from "@/components/ui";
import { homeTools } from "@/common/constants";

const HomeTools: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("mt-10 flex flex-col gap-6")}>
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold">Tools</h1>

        <div className="ml-auto">
          <Link href={"/tools"}>
            <Button className="hidden sm:flex rounded" size="sm">
              <span className="mr-1">View all Tools</span>
              <ArrowRightIcon size={14} />
            </Button>
          </Link>
        </div>
      </div>

      {homeTools.map((category) => (
        <div key={category.title} className="flex flex-col gap-4">
          <h2 className="text-md uppercase opacity-80">{category.title}</h2>
          <div className="grid gap-4 grid-cols-auto-fill-full md:grid-cols-2 xl:grid-cols-4">
            {category.items.slice(0, 4).map((tool) => (
              <Card
                className="flex items-center  cursor-pointer bg-sei-card-inner-light dark:bg-sei-card-inner-dark border-none p-10"
                href={tool.href}
                key={tool.title}
              >
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={tool.img} className="w-10 h-10" />
                  </div>
                  <p>{tool.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { HomeTools };