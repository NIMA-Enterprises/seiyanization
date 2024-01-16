import React from "react";
import { cn } from "@/lib/utils";

const HomeIntroSection: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("mt-6 mb-12 py-20 header rounded-xl", className)}>
      <div className="text-sei-heading-dark px-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {"Welcome to Seiyanization, platform with an incentive to get everyone from 0 to becoming a SuperSeiyan!"}
        </h1>
        <p className="opacity-80 md:text-xl text-sei-subheading-dark">
            Find guides, products, latest ecosystem research, tools, how to’s, and much more helpful things to help you get started!
        </p>
      </div>
    </div>
  );
};

export { HomeIntroSection };
