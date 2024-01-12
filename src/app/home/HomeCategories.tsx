import React from "react";
import { cn } from "@/lib/utils";
import { IconCard } from "@/components/IconCard";
import { homeCategories } from "@/common/constants";

const HomeCategories: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <h1 className="text-2xl font-semibold">Categories</h1>
      {homeCategories
        .filter((category) => category.title !== "Platform")
        .map((category) => (
          <div key={category.title} className="flex flex-col gap-4">
            <h2 className="text-md uppercase opacity-80">{category.title}</h2>
            <div className="grid gap-4 grid-cols-auto-fill-full md:grid-cols-2 xl:grid-cols-4">
              {category.items.map((product) => (
                <IconCard
                  key={product.title}
                  {...product}
                  description={product.desc}
                  className="rounded-lg hover:bg-white dark:hover:bg-[#111]"
                  noCard
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export { HomeCategories };
