import React from "react";
import Link from "next/link";
import { ArrowRightIcon, Wrench } from "lucide-react";

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
          {/* <h2 className="text-md uppercase opacity-80">{category.title}</h2> */}
          <div className="grid gap-4 grid-cols-auto-fill-full md:grid-cols-2 xl:grid-cols-4">
            {category.items.slice(0, 4).map((tool) => (
              <Card
                className="flex items-center cursor-pointer hover:bg-sei-card-inner-light hover:dark:bg-sei-card-inner-dark border-none p-2 px-4"
                href={tool.href}
                key={tool.title}
              >
                <div className="flex items-center gap-6">
                  <div className="">{tool.icon}</div>
                  <div className="flex flex-col">
                    <p className="text-base font-bold">{tool.title}</p>
                    <p className="text-sei-subheading-light dark:text-sei-subheading-dark text-sm">
                      {tool.desc}
                    </p>
                  </div>
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
